var w = Object.defineProperty,
  v = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
  x = Object.prototype.propertyIsEnumerable;
var m = (t, e, n) =>
    e in t ? w(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
  p = (t, e) => {
    for (var n in e || (e = {})) k.call(e, n) && m(t, n, e[n]);
    if (h) for (var n of h(e)) x.call(e, n) && m(t, n, e[n]);
    return t;
  },
  g = (t, e) => v(t, T(e));
import { D as I, f as y, P as i, cq as N, ak as A, cr as S, cs as b } from './vendor-DpenelXu.js';
import { dc as f, a_ as P } from './index-DTTOaJYD.js';
(function () {
  try {
    var t =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = '5c884cb4-1b7e-409c-9474-3fd396506ced'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-5c884cb4-1b7e-409c-9474-3fd396506ced'));
  } catch (n) {}
})();
const te = 'JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4';
class M extends Error {
  constructor(e) {
    super('6000: Empty route'),
      (this.name = 'EmptyRoute'),
      (this.name = 'EmptyRoute'),
      (this.msg = 'Empty route'),
      (this.code = 6e3),
      (this.logs = e);
  }
}
class D extends Error {
  constructor(e) {
    super('6001: Slippage tolerance exceeded'),
      (this.name = 'SlippageToleranceExceeded'),
      (this.name = 'SlippageToleranceExceeded'),
      (this.msg = 'Slippage tolerance exceeded'),
      (this.code = 6001),
      (this.logs = e);
  }
}
class O extends Error {
  constructor(e) {
    super('6002: Invalid calculation'),
      (this.name = 'InvalidCalculation'),
      (this.name = 'InvalidCalculation'),
      (this.msg = 'Invalid calculation'),
      (this.code = 6002),
      (this.logs = e);
  }
}
class L extends Error {
  constructor(e) {
    super('6003: Missing platform fee accountt'),
      (this.name = 'MissingPlatformFeeAccount'),
      (this.name = 'MissingPlatformFeeAccount'),
      (this.msg = 'Missing platform fee accountt'),
      (this.code = 6003),
      (this.logs = e);
  }
}
class R extends Error {
  constructor(e) {
    super('6004: Invalid slippage'),
      (this.name = 'InvalidSlippage'),
      (this.name = 'InvalidSlippage'),
      (this.msg = 'Invalid slippage'),
      (this.code = 6004),
      (this.logs = e);
  }
}
class _ extends Error {
  constructor(e) {
    super('6005: Not enough percent to 100'),
      (this.name = 'NotEnoughPercent'),
      (this.name = 'NotEnoughPercent'),
      (this.msg = 'Not enough percent to 100'),
      (this.code = 6005),
      (this.logs = e);
  }
}
class C extends Error {
  constructor(e) {
    super('6006: Token input index is invalid'),
      (this.name = 'InvalidInputIndex'),
      (this.name = 'InvalidInputIndex'),
      (this.msg = 'Token input index is invalid'),
      (this.code = 6006),
      (this.logs = e);
  }
}
class K extends Error {
  constructor(e) {
    super('6007: Token output index is invalid'),
      (this.name = 'InvalidOutputIndex'),
      (this.name = 'InvalidOutputIndex'),
      (this.msg = 'Token output index is invalid'),
      (this.code = 6007),
      (this.logs = e);
  }
}
class J extends Error {
  constructor(e) {
    super('6008: Not Enough Account keys'),
      (this.name = 'NotEnoughAccountKeys'),
      (this.name = 'NotEnoughAccountKeys'),
      (this.msg = 'Not Enough Account keys'),
      (this.code = 6008),
      (this.logs = e);
  }
}
class V extends Error {
  constructor(e) {
    super('6009: Non zero minimum out amount not supported'),
      (this.name = 'NonZeroMinimumOutAmountNotSupported'),
      (this.name = 'NonZeroMinimumOutAmountNotSupported'),
      (this.msg = 'Non zero minimum out amount not supported'),
      (this.code = 6009),
      (this.logs = e);
  }
}
class Z extends Error {
  constructor(e) {
    super('6010: Invalid route plan'),
      (this.name = 'InvalidRoutePlan'),
      (this.name = 'InvalidRoutePlan'),
      (this.msg = 'Invalid route plan'),
      (this.code = 6010),
      (this.logs = e);
  }
}
class z extends Error {
  constructor(e) {
    super('6011: Invalid referral authority'),
      (this.name = 'InvalidReferralAuthority'),
      (this.name = 'InvalidReferralAuthority'),
      (this.msg = 'Invalid referral authority'),
      (this.code = 6011),
      (this.logs = e);
  }
}
class F extends Error {
  constructor(e) {
    super("6012: Token account doesn't match the ledger"),
      (this.name = 'LedgerTokenAccountDoesNotMatch'),
      (this.name = 'LedgerTokenAccountDoesNotMatch'),
      (this.msg = "Token account doesn't match the ledger"),
      (this.code = 6012),
      (this.logs = e);
  }
}
class U extends Error {
  constructor(e) {
    super('6013: Invalid token ledger'),
      (this.name = 'InvalidTokenLedger'),
      (this.name = 'InvalidTokenLedger'),
      (this.msg = 'Invalid token ledger'),
      (this.code = 6013),
      (this.logs = e);
  }
}
class j extends Error {
  constructor(e) {
    super('6014: Token program ID is invalid'),
      (this.name = 'IncorrectTokenProgramID'),
      (this.name = 'IncorrectTokenProgramID'),
      (this.msg = 'Token program ID is invalid'),
      (this.code = 6014),
      (this.logs = e);
  }
}
class B extends Error {
  constructor(e) {
    super('6015: Token program not provided'),
      (this.name = 'TokenProgramNotProvided'),
      (this.name = 'TokenProgramNotProvided'),
      (this.msg = 'Token program not provided'),
      (this.code = 6015),
      (this.logs = e);
  }
}
class G extends Error {
  constructor(e) {
    super('6016: Swap not supported'),
      (this.name = 'SwapNotSupported'),
      (this.name = 'SwapNotSupported'),
      (this.msg = 'Swap not supported'),
      (this.code = 6016),
      (this.logs = e);
  }
}
class q extends Error {
  constructor(e) {
    super("6017: Exact out amount doesn't match"),
      (this.name = 'ExactOutAmountNotMatched'),
      (this.name = 'ExactOutAmountNotMatched'),
      (this.msg = "Exact out amount doesn't match"),
      (this.code = 6017),
      (this.logs = e);
  }
}
class H extends Error {
  constructor(e) {
    super('6035: Oracle confidence is too high'),
      (this.name = 'OracleConfidence'),
      (this.name = 'OracleConfidence'),
      (this.msg = 'Oracle confidence is too high'),
      (this.code = 6035),
      (this.logs = e);
  }
}
function ne(t, e) {
  switch (t) {
    case 6e3:
      return new M(e);
    case 6001:
      return new D(e);
    case 6002:
      return new O(e);
    case 6003:
      return new L(e);
    case 6004:
      return new R(e);
    case 6005:
      return new _(e);
    case 6006:
      return new C(e);
    case 6007:
      return new K(e);
    case 6008:
      return new J(e);
    case 6009:
      return new V(e);
    case 6010:
      return new Z(e);
    case 6011:
      return new z(e);
    case 6012:
      return new F(e);
    case 6013:
      return new U(e);
    case 6014:
      return new j(e);
    case 6015:
      return new B(e);
    case 6016:
      return new G(e);
    case 6017:
      return new q(e);
    case 6035:
      return new H(e);
  }
  return null;
}
function se(t, e) {
  return e ? I.min(t, f) : I.min(t, f * 100);
}
const Q = async (t, e, n, u, d) => {
  const l = new Set(),
    r = new Set();
  e.forEach((s) => {
    s.keys.forEach((o) => {
      l.add(o.pubkey.toString());
    }),
      r.add(s.programId.toString());
  });
  const c = new Set();
  let a = d;
  a || (a = await Promise.all(n.map((s) => y.getLookupTableAccount(t, s))));
  for (const s of a) if (s) for (const o of s.state.addresses) c.add(o.toString());
  e.forEach((s) => {
    r.add(s.programId.toString());
  });
};
function X(t) {
  return 'accounts' in t;
}
function E(t) {
  const e = t.accounts.map((n) => g(p({}, n), { pubkey: new i(n.pubkey) }));
  return new N({ keys: e, data: A.Buffer.from(t.data, 'base64'), programId: new i(t.programId) });
}
function oe(t) {
  return t.map(E);
}
const re = async (t, e, n, u = [], d) => {
    const l = await t.getLatestBlockhash('finalized').then((o) => o.blockhash);
    let r = d;
    r || (r = await Promise.all(u.map((o) => W(t, o))));
    const c = n.map((o) => (X(o) ? E(o) : o)),
      a = r.filter(P);
    await Q(t, c, u, new i(e), r);
    const s = new S({ payerKey: new i(e), recentBlockhash: l, instructions: c }).compileToV0Message(
      a
    );
    return new b(s);
  },
  W = async (t, e) => t.getAddressLookupTable(new i(e)).then((n) => n.value);
export { te as J, oe as a, Q as b, se as c, re as d, E as e, ne as f, W as g, X as i };
//# sourceMappingURL=transactions-CLlU6wy2.js.map
