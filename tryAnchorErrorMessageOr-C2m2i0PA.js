var W = Object.defineProperty;
var O = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty,
  H = Object.prototype.propertyIsEnumerable;
var S = (r, e, t) =>
    e in r ? W(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t),
  g = (r, e) => {
    for (var t in e || (e = {})) B.call(e, t) && S(r, t, e[t]);
    if (O) for (var t of O(e)) H.call(e, t) && S(r, t, e[t]);
    return r;
  };
import {
  b9 as J,
  bM as M,
  bw as P,
  am as T,
  cs as K,
  ct as m,
  cu as R,
  f as u,
  cv as h,
  cw as z,
  cx as $,
  cy as j,
  cz as k,
  cA as q,
  cB as Y,
  cC as Q,
  cD as X,
  cE as Z,
  cF as rr,
} from './vendor-CFRnETMC.js';
import {
  ec as tr,
  b0 as er,
  e as y,
  bu as w,
  aj as nr,
  ed as p,
  ee as or,
} from './index-DwWh_48g.js';
import { J as x, f as sr } from './transactions-DV1wf2_d.js';
(function () {
  try {
    var r =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new r.Error().stack;
    e &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[e] = 'bca0ee9d-d1c0-4439-8991-419efc3a59b6'),
      (r._sentryDebugIdIdentifier = 'sentry-dbid-bca0ee9d-d1c0-4439-8991-419efc3a59b6'));
  } catch (t) {}
})();
const L = async (r) =>
    new Promise((e) => {
      setTimeout(e, r);
    }),
  ar = async (r, e, t = 10, n = 1e3) => {
    let o = 0,
      s = null;
    for (
      ;
      o < t &&
      ((s = await r.getTransaction(e, {
        commitment: 'confirmed',
        maxSupportedTransactionVersion: 0,
      })),
      !s);

    )
      (o += 1), await L(n);
    return s;
  },
  ir = (r) => {
    var e;
    return r instanceof J
      ? (e = r.feePayer) != null
        ? e
        : r.signatures[0].publicKey
      : r.message.staticAccountKeys[0];
  },
  cr = async (r) => {
    const e = ir(r),
      t = await tr(e.toString(), !0);
    t != null && t.hasRisk && er;
  },
  ur = 2e3;
async function Tr({
  mainConnection: r,
  extraConnections: e = [],
  tx: t,
  commitment: n = 'confirmed',
  sendTransactionOptions: o = {},
  signTransaction: s,
  mixpanel: i,
}) {
  if (!s) throw new Error('signTransaction is not found. Seems like wallet is not connected');
  const a = await s(t);
  return lr({
    mainConnection: r,
    extraConnections: e,
    signedTx: a,
    commitment: n,
    sendTransactionOptions: o,
    mixpanel: i,
  });
}
async function lr({
  mainConnection: r,
  extraConnections: e = [],
  signedTx: t,
  commitment: n = 'confirmed',
  sendTransactionOptions: o = {},
  mixpanel: s,
  waitConfirmationOnAnyConnection: i = !1,
}) {
  var b;
  await cr(t);
  const a = M(t) ? t.signatures[0] : t.signature;
  if (!a) throw new Error('Transaction is not signed. Refresh the page and try again');
  const c = M(t) ? P.encode(a) : P.encode(T.Buffer.from(a));
  let _ = !1;
  const N = T.Buffer.from(t.serialize()),
    E = [r, ...e],
    v = { skipPreflight: !0, maxRetries: 0, preflightCommitment: n };
  if (!c) throw new Error('Transaction is not signed. Refresh the page and try again');
  s.track('transaction:landing-rate', { txId: c, status: 'initiated' });
  const U = await r.getLatestBlockhashAndContext(n),
    V = async (l) => {
      try {
        for (; !_; ) await l.sendRawTransaction(N, g(g({}, v), o)), await L(ur);
      } catch (F) {
        await y(F, { extra: { rpcEndpoint: l.rpcEndpoint } });
      }
    };
  E.map(V);
  const f = await Promise.race((i ? E : [r]).map((l) => dr(c, U, l, n, s)));
  _ = !0;
  const A = (b = f == null ? void 0 : f.value) == null ? void 0 : b.err;
  return (
    A && fr({ error: A, mainConnection: r, signature: c, signedTx: t, mixpanel: s }),
    s.track('transaction:landing-rate', { txId: c, status: 'success', cause: 'success' }),
    c
  );
}
const dr = async (r, e, t, n, o) => {
    try {
      return await t.confirmTransaction(
        {
          blockhash: e.value.blockhash,
          lastValidBlockHeight: e.value.lastValidBlockHeight,
          signature: r,
        },
        n
      );
    } catch (s) {
      await y(s);
      const i = w(s);
      o.track('transaction:landing-rate', { txId: r, status: 'dropped', cause: 'error', error: i });
    }
  },
  fr = async ({ error: r, mainConnection: e, signature: t, signedTx: n, mixpanel: o }) => {
    var i, a;
    const s = await ar(e, t);
    throw s
      ? (o.track('transaction:landing-rate', { txId: t, status: 'success', cause: 'error' }),
        {
          err: (i = s.meta) == null ? void 0 : i.err,
          logs: ((a = s.meta) == null ? void 0 : a.logMessages) || [],
          txId: t,
          tx: n,
        })
      : (o.track('transaction:landing-rate', { txId: t, status: 'error', cause: 'error' }),
        { err: r, msg: r, txId: t, tx: n });
  },
  gr = /Program log: Price is too old token=(\w+)_/,
  Ir = (r) => {
    let e = null;
    if (!r) return null;
    for (const n of r) if (((e = gr.exec(n)), e !== null)) break;
    if (!e) return null;
    const [t] = e.slice(1);
    return t || null;
  };
class d extends K {
  constructor(e) {
    super(e),
      (this.logs = e),
      (this.userMsg =
        'If you cannot wait, you can fully close your position by repaying your debt fully and then withdrawing all collateral. This action does not require oracles to be fresh');
  }
}
const mr = (r, e, t) => {
    if (r === p.toString()) return e === d.code ? new d(t) : z(e, t);
    if (r === R.WHIRLPOOL_PROGRAM_ID.toString()) return $(e, t);
    if (r === m.PROGRAM_ID.toString()) return j(e, t);
    if (r === u.PROGRAM_ID.toString()) return k(e, t);
    if (r === u.STAGING_PROGRAM_ID.toString()) return k(e, t);
    if (r === x) return sr(e, t);
    if (r === h.PROGRAM_ID.toString()) return q(e, t);
    throw new Error('Unknown program id '.concat(r.toString()));
  },
  Rr = (r, e, t) => {
    if (r === p.toString()) return e === d.code ? new d(t) : Y(e, t);
    if (r === R.WHIRLPOOL_PROGRAM_ID.toString()) return Q(e, t);
    if (r === m.PROGRAM_ID.toString()) return X(e, t);
    if (r === u.PROGRAM_ID.toString()) return Z(e, t);
    if (r === h.PROGRAM_ID.toString()) return rr(e, t);
    throw new Error('Unknown program id '.concat(r.toString()));
  };
function hr({ programId: r, code: e, logs: t = [] }) {
  return r ? (e >= 6e3 ? mr(r, e, t) : Rr(r, e, t)) : null;
}
const yr = /Program (\w+) failed: custom program error: (\w+)/;
function wr(r) {
  let e = null;
  for (const s of r.logs) if (((e = yr.exec(s)), e !== null)) break;
  if (e === null) return {};
  const [t, n] = e.slice(1);
  if (
    t !== p.toString() &&
    t !== m.PROGRAM_ID.toString() &&
    t !== R.WHIRLPOOL_PROGRAM_ID.toString() &&
    t !== u.PROGRAM_ID.toString() &&
    t !== or.toString() &&
    t !== u.STAGING_PROGRAM_ID.toString() &&
    t !== x &&
    t !== h.PROGRAM_ID.toString()
  )
    return {};
  let o = null;
  try {
    return (o = parseInt(n, 16)), { code: o, programId: t };
  } catch (s) {
    y(s);
  }
  return { code: void 0, programId: t };
}
function pr(r) {
  const e = { code: null, instructionInd: null },
    t = /\"Custom\":(\d+)/im,
    n = /(?:custom program error: )((?:0x)?[a-fA-F0-9]+)/,
    o = t.exec(r) || n.exec(r);
  if (o)
    try {
      e.code = parseInt(o[1]);
    } catch (a) {
      e.code = null;
    }
  const i = /Error processing Instruction (\d+):/.exec(r);
  if (i)
    try {
      e.instructionInd = parseInt(i[1]);
    } catch (a) {
      e.instructionInd = null;
    }
  return e;
}
const I = (r, e) => {
    let t;
    if (r.version === 0 || r.message.compiledInstructions) {
      const n = r.message.compiledInstructions[e].programIdIndex;
      t = r.message.staticAccountKeys[n].toString();
    } else r.instructions && (t = r.instructions[e].programId);
    return t;
  },
  _r = (r) => {
    var e, t, n, o;
    return (
      r.InstructionError ||
      ((e = r == null ? void 0 : r.error) == null ? void 0 : e.InstructionError) ||
      ((t = r.err) == null ? void 0 : t.InstructionError) ||
      ((o = (n = r.err) == null ? void 0 : n.error) == null ? void 0 : o.InstructionError)
    );
  };
function Er(r) {
  var s, i;
  if (typeof r != 'object' || r === null) return null;
  let e = null,
    t,
    n = {};
  const o = _r(r);
  if (r && r.logs) {
    if (((n = wr(r)), (e = n.code), (t = n.programId), (!t || !e) && o != null && o.length)) {
      e = ((s = o[1]) == null ? void 0 : s.Custom) || null;
      const a = o[0];
      a && (t = I(r.tx, Number(a)));
    }
  } else if (r && o) {
    e = ((i = o[1]) == null ? void 0 : i.Custom) || null;
    const a = o[0];
    a && (t = I(r.tx, Number(a)));
  } else if (r.err) {
    const { code: a, instructionInd: c } = pr(r.err.toString());
    (e = a), c && (t = I(r.tx, Number(c)));
  }
  return e ? hr({ programId: t, code: e, logs: r.logs }) : null;
}
const Ar = 'encoding overruns Uint8Array',
  br = 'VersionedTransaction too large',
  G = 'Oops, the transaction could not be built, please try again',
  C = {
    [Ar]: G,
    [br]: G,
    'block height exceeded': 'It seems like the network is busy. Please try again in one minute.',
    'state needs to be refreshed':
      'It seems like the network is busy and oracle prices are too old. Please try again in a minute.',
    'slippage tolerance exceeded':
      'Slippage tolerance exceeded. Please try again (recommended) or slightly increase slippage tolerance.',
    'Invalid tick array sequence provided for instruction':
      'Jupiter swap failed, please try again.',
  };
function D(r) {
  const e = String(w(r));
  for (const t in C) if (e.includes(t)) return C[t];
  return null;
}
function kr(r, e) {
  const t = r;
  try {
    const n = D(t);
    if (n !== null) return n;
  } catch (n) {}
  try {
    const n = Er(t);
    if (n !== null) {
      const o = (t == null ? void 0 : t.logs) || [],
        s = Ir(o),
        i = D(n);
      return (nr(s) ? n.userMsg : ''.concat(n.userMsg, ' (').concat(s, ')')) || i || n.msg;
    }
  } catch (n) {}
  try {
    const n = w(t);
    if (n) return n;
  } catch (n) {}
  return e || 'Unexpected error';
}
export { Ar as T, lr as a, ar as b, br as c, fr as h, cr as r, Tr as s, kr as t, dr as w };
//# sourceMappingURL=tryAnchorErrorMessageOr-C2m2i0PA.js.map
