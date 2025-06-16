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
  cG as v,
  a5 as U,
  r as w,
  cH as W,
  cI as j,
  P,
  b9 as O,
  l as b,
  c as V,
  aj as Q,
  a as q,
  S as K,
  f as R,
} from './vendor-CFRnETMC.js';
import { r as _ } from './removeBudgetAndAtaIxns-DhYxCfUy.js';
import {
  l as T,
  dc as E,
  da as h,
  ef as L,
  Q as k,
  an as G,
  aZ as $,
  al as I,
  e as J,
  a as Y,
  u as H,
} from './index-DwWh_48g.js';
import { g as X, i as Z, e as ee, d as te } from './transactions-DV1wf2_d.js';
import { T as ne, c as re } from './tryAnchorErrorMessageOr-C2m2i0PA.js';
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
      (e._sentryDebugIds[t] = '4b2f9d21-fa82-4389-965a-84eba61e05f3'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-4b2f9d21-fa82-4389-965a-84eba61e05f3'));
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
  ae = (e, t, n) => {
    const o = [];
    if ((o.push(v.setComputeUnitLimit({ units: t })), n && n.gt(0))) {
      const r = n.mul(1e6).div(t);
      o.push(v.setComputeUnitPrice({ microLamports: BigInt(r.floor().toString()) }));
    }
    return o;
  },
  oe = () => {
    const e = U(),
      { priorityFee: t, priorityFeeType: n } = G,
      o = e.getQueryData(k.priorityFeeStats),
      r = w.useCallback((i) => N(o, i), [o]);
    return { priorityFeeStats: o, getPriorityFeeForType: r, priorityFeeType: n, priorityFee: t };
  };
async function ie({
  connection: e,
  instructions: t,
  payer: n,
  lookupTablesAddresses: o,
  lookupTablesAccounts: r,
  computeErrorMarginPct: i = 0.15,
  isVersionedTransaction: a,
}) {
  let c = r && r.length > 0 ? r : void 0;
  !c && o && (c = (await Promise.all(o.map((d) => X(e, d)))).filter($)), c || (c = []);
  const f = a
    ? new W(
        new j({
          instructions: t,
          payerKey: n,
          recentBlockhash: P.default.toString(),
        }).compileToV0Message(c)
      )
    : new O({ feePayer: n }).add(...t);
  try {
    const d = a
      ? await e.simulateTransaction(f, { replaceRecentBlockhash: !0, sigVerify: !1 })
      : await e.simulateTransaction(f);
    return d.value.err
      ? void 0
      : d.value.unitsConsumed
        ? Math.max(Math.ceil(d.value.unitsConsumed * (1 + i)), 2e5)
        : 2e5;
  } catch (d) {
    if (d instanceof Error && (d.message.includes(ne) || d.message.includes(re))) {
      const u = se(t, c);
      ce(t, u);
    }
    throw d;
  }
}
const se = (e, t) => {
    const n = b.flatMap(e, (r, i) =>
        r.keys.map((a) => ({
          pubkey: a.pubkey.toString(),
          role: a.isSigner ? 'signer' : a.isWritable ? 'writable' : 'readonly',
          programId: r.programId.toString(),
          instructionIndex: i,
        }))
      ),
      o = new Set(b.flatMap(t, (r) => (r ? r.state.addresses.map((i) => i.toString()) : [])));
    return n.filter((r) => !o.has(r.pubkey));
  },
  ce = (e, t) => {
    const n = b.groupBy(t, (r) => r.instructionIndex),
      o = Object.entries(n).map(([r, i]) => ({
        instructionIndex: Number(r),
        programId: e[Number(r)].programId.toString(),
        missingAccountsCount: i.length,
        missingAccounts: i.map((a) => ({ pubkey: a.pubkey, role: a.role })),
      }));
    V('Transaction too large', {
      contexts: {
        TransactionDetails: {
          totalInstructionsCount: e.length,
          uniqueMissingAccounts: b.uniq(t.map((r) => r.pubkey)),
          instructionSummaries: o,
        },
      },
    });
  },
  ue = (60 * 1e3) / 400;
async function le(e, t) {
  const [n, o] = await Promise.all([pe(t, e), e.getSlot()]),
    r = o - ue;
  let i = new s('0');
  const a = n.result
    .filter((p) =>
      p.prioritizationFee <= 0 || p.slot < r ? !1 : ((i = i.add(p.prioritizationFee)), !0)
    )
    .sort((p, m) => p.prioritizationFee - m.prioritizationFee);
  if (a.length === 0)
    return { min: new s('1'), max: new s('1'), avg: new s('1'), median: new s('1') };
  if (a.length === 1)
    return {
      min: new s(a[0].prioritizationFee),
      max: new s(a[0].prioritizationFee),
      avg: new s(a[0].prioritizationFee),
      median: new s(a[0].prioritizationFee),
    };
  const c = new s(a[0].prioritizationFee),
    f = new s(a[a.length - 1].prioritizationFee),
    d = i.div(a.length),
    u = new s(a[Math.floor(a.length / 2)].prioritizationFee);
  return { min: c, max: f, avg: d, median: u };
}
async function pe(e, t) {
  var a;
  const n =
      ((a = e == null ? void 0 : e.lockedWritableAccounts) == null
        ? void 0
        : a.map((c) => c.toBase58())) || [],
    o = e.percentile ? { percentile: e.percentile } : {},
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
        params: [[...n], A({}, o)],
        id: Q(),
      }),
    });
  if (!r.ok) throw new Error('Network response was not ok: '.concat(r.statusText));
  const i = await r.json();
  if ('error' in i) throw new Error('Failed to get recent priority fees');
  return i;
}
const de = 'https://solanacompass.com/api',
  me = () =>
    q
      .get(''.concat(de, '/fees'), {
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
    { walletPublicKey: t } = H(),
    { data: n } = ge(),
    { priorityFeeType: o, priorityFee: r } = oe(),
    i = w.useCallback(
      async ({ units: u = 2e5, ixns: p, isPriorityFeeExcluded: m }) => {
        if (!t || !e) throw new Error('Wallet is not connected');
        let l;
        if (o === h.custom) l = I(r, R.SOL_DECIMALS);
        else
          try {
            const { avg: g } = await le(e.sendConnection, {
              percentile: ye[o],
              lockedWritableAccounts: p.map((y) => y.programId),
            });
            l = g;
          } catch (g) {
            const y = N(n, o);
            l = I(y, R.SOL_DECIMALS);
          }
        return ae(new P(t), u, l && l.gt(0) && !m ? l : void 0);
      },
      [n, r, o, t, e]
    ),
    a = w.useCallback(
      ({
        ixns: u,
        lookupTablesAddresses: p,
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
          lookupTablesAddresses: p,
          lookupTablesAccounts: m,
          isVersionedTransaction: l,
        });
      },
      [t, e]
    ),
    c = w.useCallback(
      async ({
        ixns: u,
        lookupTablesAddresses: p,
        lookupTablesAccounts: m,
        isVersionedTransaction: l,
        defaultCu: g,
      }) => {
        if (!e) return i({ units: g, ixns: u });
        const y = await a({
          ixns: u,
          lookupTablesAddresses: p,
          lookupTablesAccounts: m,
          isVersionedTransaction: l,
        });
        return i({ units: y || g, ixns: u });
      },
      [a, i, e]
    ),
    f = w.useCallback(
      async (u, p) => {
        const m = await c({ ixns: u, isVersionedTransaction: !1, defaultCu: p }),
          l = new O();
        return l.add(...m, ..._(u)), l;
      },
      [c]
    ),
    d = w.useCallback(
      async ({
        ixns: u,
        connection: p,
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
            ..._(C),
          ];
        return te(p || e.sendConnection, m || t, M, l, g);
      },
      [c, t, e]
    );
  return {
    getIxns: i,
    estimateComputeUnits: a,
    getEstimatedComputeUnitsAndAddPriorityFeeIxns: c,
    createLegacyTxWithBudgetIxns: f,
    createVersionedTxWithBudgetIxns: d,
  };
}
export { Ee as u };
//# sourceMappingURL=useBudgetAndPriorityFeeIxns-P6H36LV9.js.map
