var D = Object.defineProperty;
var S = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty,
  B = Object.prototype.propertyIsEnumerable;
var x = (e, t, n) =>
    t in e ? D(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  A = (e, t) => {
    for (var n in t || (t = {})) z.call(t, n) && x(e, n, t[n]);
    if (S) for (var n of S(t)) B.call(t, n) && x(e, n, t[n]);
    return e;
  };
import {
  D as s,
  cp as _,
  a5 as U,
  r as w,
  cs as W,
  cr as V,
  P,
  b7 as O,
  l as b,
  c as j,
  ah as Q,
  a as q,
  S as K,
  f as v,
} from './vendor-DpenelXu.js';
import { r as R } from './removeBudgetAndAtaIxns-DHEp-PwA.js';
import {
  l as T,
  dd as E,
  db as h,
  ed as L,
  Q as k,
  an as $,
  a_ as G,
  al as I,
  e as J,
  a as Y,
  u as X,
} from './index-DTTOaJYD.js';
import { g as H, i as Z, e as ee, d as te } from './transactions-CLlU6wy2.js';
import { T as ne, c as re } from './tryAnchorErrorMessageOr-DSgtA69k.js';
(function () {
  try {
    var e =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = '37d57715-e701-4f95-9603-444df527052c'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-37d57715-e701-4f95-9603-444df527052c'));
  } catch (n) {}
})();
const N = (e, t) => {
    if (!e) return new s('0');
    let n = new s(T('10', E));
    return (
      t === h.normal && (n = T(new s(e.avg || '0'), E)),
      t === h.turbo && (n = T(new s(e.max || '0'), E)),
      s.min(n, L)
    );
  },
  oe = (e, t, n) => {
    const a = [];
    if ((a.push(_.setComputeUnitLimit({ units: t })), n && n.gt(0))) {
      const r = n.mul(1e6).div(t);
      a.push(_.setComputeUnitPrice({ microLamports: BigInt(r.floor().toString()) }));
    }
    return a;
  },
  ae = () => {
    const e = U(),
      { priorityFee: t, priorityFeeType: n } = $,
      a = e.getQueryData(k.priorityFeeStats),
      r = w.useCallback((i) => N(a, i), [a]);
    return { priorityFeeStats: a, getPriorityFeeForType: r, priorityFeeType: n, priorityFee: t };
  };
async function ie({
  connection: e,
  instructions: t,
  payer: n,
  lookupTablesAddresses: a,
  lookupTablesAccounts: r,
  computeErrorMarginPct: i = 0.15,
  isVersionedTransaction: o,
}) {
  let c = r && r.length > 0 ? r : void 0;
  !c && a && (c = (await Promise.all(a.map((p) => H(e, p)))).filter(G)), c || (c = []);
  const f = o
    ? new W(
        new V({
          instructions: t,
          payerKey: n,
          recentBlockhash: P.default.toString(),
        }).compileToV0Message(c)
      )
    : new O({ feePayer: n }).add(...t);
  try {
    const p = o
      ? await e.simulateTransaction(f, { replaceRecentBlockhash: !0, sigVerify: !1 })
      : await e.simulateTransaction(f);
    return p.value.err
      ? void 0
      : p.value.unitsConsumed
        ? Math.max(Math.ceil(p.value.unitsConsumed * (1 + i)), 2e5)
        : 2e5;
  } catch (p) {
    if (p instanceof Error && (p.message.includes(ne) || p.message.includes(re))) {
      const u = se(t, c);
      ce(t, u);
    }
    throw p;
  }
}
const se = (e, t) => {
    const n = b.flatMap(e, (r, i) =>
        r.keys.map((o) => ({
          pubkey: o.pubkey.toString(),
          role: o.isSigner ? 'signer' : o.isWritable ? 'writable' : 'readonly',
          programId: r.programId.toString(),
          instructionIndex: i,
        }))
      ),
      a = new Set(b.flatMap(t, (r) => (r ? r.state.addresses.map((i) => i.toString()) : [])));
    return n.filter((r) => !a.has(r.pubkey));
  },
  ce = (e, t) => {
    const n = b.groupBy(t, (r) => r.instructionIndex),
      a = Object.entries(n).map(([r, i]) => ({
        instructionIndex: Number(r),
        programId: e[Number(r)].programId.toString(),
        missingAccountsCount: i.length,
        missingAccounts: i.map((o) => ({ pubkey: o.pubkey, role: o.role })),
      }));
    j('Transaction too large', {
      contexts: {
        TransactionDetails: {
          totalInstructionsCount: e.length,
          uniqueMissingAccounts: b.uniq(t.map((r) => r.pubkey)),
          instructionSummaries: a,
        },
      },
    });
  },
  ue = (60 * 1e3) / 400;
async function le(e, t) {
  const [n, a] = await Promise.all([de(t, e), e.getSlot()]),
    r = a - ue;
  let i = new s('0');
  const o = n.result
    .filter((d) =>
      d.prioritizationFee <= 0 || d.slot < r ? !1 : ((i = i.add(d.prioritizationFee)), !0)
    )
    .sort((d, m) => d.prioritizationFee - m.prioritizationFee);
  if (o.length === 0)
    return { min: new s('1'), max: new s('1'), avg: new s('1'), median: new s('1') };
  if (o.length === 1)
    return {
      min: new s(o[0].prioritizationFee),
      max: new s(o[0].prioritizationFee),
      avg: new s(o[0].prioritizationFee),
      median: new s(o[0].prioritizationFee),
    };
  const c = new s(o[0].prioritizationFee),
    f = new s(o[o.length - 1].prioritizationFee),
    p = i.div(o.length),
    u = new s(o[Math.floor(o.length / 2)].prioritizationFee);
  return { min: c, max: f, avg: p, median: u };
}
async function de(e, t) {
  var o;
  const n =
      ((o = e == null ? void 0 : e.lockedWritableAccounts) == null
        ? void 0
        : o.map((c) => c.toBase58())) || [],
    a = e.percentile ? { percentile: e.percentile } : {},
    r = await fetch(t.rpcEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({
        method: 'getRecentPrioritizationFees',
        jsonrpc: '2.0',
        params: [[...n], A({}, a)],
        id: Q(),
      }),
    });
  if (!r.ok) throw new Error('Network response was not ok: '.concat(r.statusText));
  const i = await r.json();
  if ('error' in i) throw new Error('Failed to get recent priority fees');
  return i;
}
const pe = 'https://solanacompass.com/api',
  me = () =>
    q
      .get(''.concat(pe, '/fees'), {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
        },
      })
      .then((e) => e.data),
  ge = () =>
    K({
      queryKey: k.priorityFeeStats,
      queryFn: async () => {
        try {
          const e = await me();
          return e[15] || e[Object.keys(e)[0]];
        } catch (e) {
          return { min: 0, max: I(L, 9).toNumber(), avg: I(5e-5, 9).toNumber() };
        }
      },
      refetchInterval: 1e4,
      enabled: !0,
      onError: (e) => {
        J(e);
      },
    }),
  ye = { [h.minimum]: 2500, [h.normal]: 5e3, [h.turbo]: 7500 };
function Ee() {
  const { web3client: e } = Y(),
    { walletPublicKey: t } = X(),
    { data: n } = ge(),
    { priorityFeeType: a, priorityFee: r } = ae(),
    i = w.useCallback(
      async ({ units: u = 2e5, ixns: d, isPriorityFeeExcluded: m }) => {
        if (!t || !e) throw new Error('Wallet is not connected');
        let l;
        if (a === h.custom) l = I(r, v.SOL_DECIMALS);
        else
          try {
            const { avg: g } = await le(e.sendConnection, {
              percentile: ye[a],
              lockedWritableAccounts: d.map((y) => y.programId),
            });
            l = g;
          } catch (g) {
            const y = N(n, a);
            l = I(y, v.SOL_DECIMALS);
          }
        return oe(new P(t), u, l && l.gt(0) && !m ? l : void 0);
      },
      [n, r, a, t, e]
    ),
    o = w.useCallback(
      ({
        ixns: u,
        lookupTablesAddresses: d,
        lookupTablesAccounts: m,
        isVersionedTransaction: l,
      }) => {
        if (!e)
          throw new Error('Failed to establish connection. Please, reload the page and try again');
        if (!t)
          throw new Error('Wallet is not connected. Please, connect the wallet and try again');
        return ie({
          connection: e.sendConnection,
          instructions: u,
          payer: new P(t),
          lookupTablesAddresses: d,
          lookupTablesAccounts: m,
          isVersionedTransaction: l,
        });
      },
      [t, e]
    ),
    c = w.useCallback(
      async ({
        ixns: u,
        lookupTablesAddresses: d,
        lookupTablesAccounts: m,
        isVersionedTransaction: l,
        defaultCu: g,
      }) => {
        if (!e) return i({ units: g, ixns: u });
        const y = await o({
          ixns: u,
          lookupTablesAddresses: d,
          lookupTablesAccounts: m,
          isVersionedTransaction: l,
        });
        return i({ units: y || g, ixns: u });
      },
      [o, i, e]
    ),
    f = w.useCallback(
      async (u, d) => {
        const m = await c({ ixns: u, isVersionedTransaction: !1, defaultCu: d }),
          l = new O();
        return l.add(...m, ...R(u)), l;
      },
      [c]
    ),
    p = w.useCallback(
      async ({
        ixns: u,
        connection: d,
        walletPublicKeyParam: m,
        lookupTablesAddresses: l,
        lookupTablesAccounts: g,
        defaultCu: y,
      }) => {
        if (!e)
          throw new Error('Failed to establish connection. Please, reload the page and try again');
        if (!t)
          throw new Error('Wallet is not connected. Please, connect the wallet and try again');
        const C = u.map((F) => (Z(F) ? ee(F) : F)),
          M = [
            ...(await c({
              ixns: C,
              isVersionedTransaction: !0,
              lookupTablesAddresses: l,
              lookupTablesAccounts: g,
              defaultCu: y,
            })),
            ...R(C),
          ];
        return te(d || e.sendConnection, m || t, M, l, g);
      },
      [c, t, e]
    );
  return {
    getIxns: i,
    estimateComputeUnits: o,
    getEstimatedComputeUnitsAndAddPriorityFeeIxns: c,
    createLegacyTxWithBudgetIxns: f,
    createVersionedTxWithBudgetIxns: p,
  };
}
export { Ee as u };
//# sourceMappingURL=useBudgetAndPriorityFeeIxns-G3EwBVgx.js.map
