var x = Object.defineProperty,
  F = Object.defineProperties;
var Y = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty,
  R = Object.prototype.propertyIsEnumerable;
var B = (e, t, a) =>
    t in e ? x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (e[t] = a),
  T = (e, t) => {
    for (var a in t || (t = {})) L.call(t, a) && B(e, a, t[a]);
    if (k) for (var a of k(t)) R.call(t, a) && B(e, a, t[a]);
    return e;
  },
  W = (e, t) => F(e, Y(t));
var h = (e, t) => {
  var a = {};
  for (var r in e) L.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && k) for (var r of k(e)) t.indexOf(r) < 0 && R.call(e, r) && (a[r] = e[r]);
  return a;
};
import { P as w, f as b, r as f, S as C, a5 as H } from './vendor-DpenelXu.js';
import { e7 as N, u as K, k as Q, bi as _, Q as M, x as q } from './index-DTTOaJYD.js';
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
      (e._sentryDebugIds[t] = 'fb738d34-f67e-4ee0-b019-b0095c9f8815'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-fb738d34-f67e-4ee0-b019-b0095c9f8815'));
  } catch (a) {}
})();
const D = (e) => {
    const { walletPublicKey: t, programId: a, marketAddress: r, obligationArgs: n } = e;
    if (n.obligationAddress) return new w(n.obligationAddress);
    if (!t) return;
    let l = { tag: b.ObligationTypeTag.Vanilla, programId: a };
    return (
      n.tag === b.ObligationTypeTag.Lending &&
        (l = { tag: b.ObligationTypeTag.Lending, programId: a, tokenMint: n.tokenMint }),
      n.tag === b.ObligationTypeTag.Multiply &&
        (l = {
          tag: b.ObligationTypeTag.Multiply,
          programId: a,
          tokenMint: n.tokenMint,
          debtToken: n.debtToken,
        }),
      n.tag === b.ObligationTypeTag.Leverage &&
        (l = {
          tag: b.ObligationTypeTag.Leverage,
          programId: a,
          tokenMint: n.tokenMint,
          debtToken: n.debtToken,
        }),
      N(l).toPda(new w(r), new w(t))
    );
  },
  O = 10 * 60 * 1e3,
  E = 5 * 60 * 1e3,
  J = (e) => {
    const { marketAddress: t } = e,
      { walletPublicKey: a } = K(),
      { getMarketByAddress: r, markets: n } = Q(),
      { activeReserves: l } = _(),
      d = r(t),
      { programId: o } = d,
      u = f.useMemo(
        () => D({ obligationArgs: e, walletPublicKey: a, programId: o, marketAddress: d.address }),
        [d.address, o, e, a]
      );
    f.useEffect(() => {}, [u]);
    const c = () => {
        if (u)
          try {
            return d.getObligationByAddress(u);
          } catch (P) {
            return null;
          }
      },
      m = C({
        queryKey: M.getLendingObligation(u),
        staleTime: O,
        cacheTime: E,
        enabled:
          q.isLendingPageEnabled &&
          !!n.length &&
          !!l.length &&
          !!(a || (e != null && e.obligationAddress)),
        queryFn: c,
        retry: 0,
      }),
      { data: A } = m,
      y = h(m, ['data']);
    return T({ obligationPda: u, obligation: A }, y);
  },
  p = [],
  X = (e) => {
    const { walletPublicKey: t, programId: a } = K(),
      { markets: r, getMarketByAddress: n } = Q(),
      { activeReserves: l } = _(),
      d = H(),
      o = f.useMemo(() => new b.PubkeyHashMap(), []),
      c = f
        .useMemo(
          () =>
            r.map((s) => {
              const i = D({
                obligationArgs: W(T({}, e), { marketAddress: s.address }),
                walletPublicKey: t,
                programId: a,
                marketAddress: s.address,
              });
              return i && o.set(i, s.address), i;
            }),
          [r, o, a, e, t]
        )
        .filter((s) => !!s),
      A = () => {
        if (!t || !c[0]) return p;
        try {
          return Promise.all(
            c.map((s) => {
              const i = o.get(s);
              return n(i).getObligationByAddress(s);
            })
          );
        } catch (s) {
          return console.error(s), p;
        }
      },
      v = C({
        staleTime: O,
        cacheTime: E,
        queryKey: M.getLendingObligations(c),
        enabled: q.isLendingPageEnabled && !!r.length && !!l.length,
        queryFn: A,
        retry: 0,
        onSuccess: (s) => {
          s.forEach((i) => {
            if (i) {
              const g = M.getLendingObligation(i.obligationAddress);
              d.setQueryDefaults(g, { staleTime: O, cacheTime: E }), d.setQueryData(g, i);
            }
          });
        },
      }),
      { data: y } = v,
      m = h(v, ['data']),
      { marketToObligationMap: P, filteredObligations: S } = f.useMemo(() => {
        const s = new Map(),
          i = [];
        return y
          ? (y.forEach((g) => {
              if (!g) return;
              const I = o.get(g.obligationAddress);
              I && (s.set(I, g), i.push(g));
            }),
            { marketToObligationMap: s, filteredObligations: i })
          : { marketToObligationMap: s, filteredObligations: i };
      }, [o, y]);
    return T(
      { obligations: S || p, obligationToMarketMap: o, marketToObligationMap: P, markets: r },
      m
    );
  };
var U = ((e) => (
  (e.deposit = 'deposit'),
  (e.withdraw = 'withdraw'),
  (e.borrow = 'borrow'),
  (e.repayFromWallet = 'repayFromWallet'),
  (e.repayWithCollateral = 'repayWithCollateral'),
  (e.repay = 'repay'),
  e
))(U || {});
const Z = {
  deposit: 'Supply',
  withdraw: 'Withdraw',
  borrow: 'Borrow',
  repayFromWallet: 'Repay From Wallet',
  repayWithCollateral: 'Repay With Collateral',
  repay: 'Repay',
};
var V = ((e) => ((e.cross = 'cross'), (e.isolated = 'isolated'), e))(V || {});
export { U as F, V as a, X as b, Z as c, D as g, J as u };
//# sourceMappingURL=types-Cset0n2O.js.map
