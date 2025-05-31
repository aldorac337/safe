var I = Object.defineProperty,
  P = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty,
  C = Object.prototype.propertyIsEnumerable;
var h = (e, t, n) =>
    t in e ? I(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  p = (e, t) => {
    for (var n in t || (t = {})) v.call(t, n) && h(e, n, t[n]);
    if (A) for (var n of A(t)) C.call(t, n) && h(e, n, t[n]);
    return e;
  },
  k = (e, t) => P(e, M(t));
import {
  bm as S,
  P as u,
  ag as b,
  cL as D,
  r as m,
  S as Q,
  l as R,
  a5 as _,
} from './vendor-DpenelXu.js';
import { k as x, a as T, Q as E, u as K, ee as q } from './index-DTTOaJYD.js';
import { u as F } from './useCollateralInfos-Bo8wNk2L.js';
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
      (e._sentryDebugIds[t] = '52f1e24d-7e30-4c5e-b34c-b7fb9f90c11e'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-52f1e24d-7e30-4c5e-b34c-b7fb9f90c11e'));
  } catch (n) {}
})();
const Y = (e, t, n = b) => S(new u(e), new u(t), !0, n);
function V(e, t, n, c = b) {
  return D(new u(e), new u(n), new u(e), new u(t), c);
}
const B = {},
  L = [],
  G = () => {
    const { markets: e } = x(),
      { web3client: t } = T(),
      { mints: n } = F(),
      c = m.useMemo(() => {
        var l;
        const a = [];
        for (const r of e) {
          const d = (l = r == null ? void 0 : r.reserves) == null ? void 0 : l.values();
          if (d) a.push(...Array.from(d));
          else return L;
        }
        return a;
      }, [e]),
      f = async () => {
        if (!t) throw new Error('Web3client is not loaded');
        const a = c
            .map((s) => [s.getLiquidityMint().toString(), s.getLiquidityTokenProgram()])
            .reduce((s, [i, y]) => k(p({}, s), { [i]: y }), {}),
          l = n.filter((s) => !a[s.toString()]),
          r = l.map((s) => new u(s)),
          d = R.chunk(r, 100);
        return (await Promise.all(d.map((s) => t.connection.getMultipleAccountsInfo(s))))
          .flat()
          .reduce(
            (s, i, y) => (i != null && i.owner && (s[l[y]] = i == null ? void 0 : i.owner), s),
            a
          );
      },
      { data: w = B, isFetched: o } = Q({
        queryKey: E.getTokenProgramIds,
        queryFn: f,
        enabled: !!(c.length && n.length && t),
        refetchInterval: 60 * 60 * 1e3,
      });
    return { tokenProgramIdsMap: w, isFetched: o };
  };
function j() {
  const { walletPublicKey: e } = K(),
    { web3client: t } = T(),
    n = _(),
    { tokenProgramIdsMap: c } = G(),
    f = m.useCallback(async (o) => (t ? (await t.connection.getAccountInfo(o)) !== null : !1), [t]);
  return {
    getAtaByTokenMint: m.useCallback(
      async (o, a, l) => {
        if (!t || !e) return null;
        const r = E.getAta(e, o);
        return q(o)
          ? e
          : (!n.getQueryData(r) && l && (await n.invalidateQueries({ queryKey: r })),
            n.fetchQuery(
              r,
              async () => {
                const g = await Y(o, e, a || c[o.toString()] || b);
                return (await f(new u(g))) ? g.toString() : null;
              },
              { cacheTime: 2 * 24 * 60 * 60 * 1e3, staleTime: 1 * 60 * 1e3 }
            ));
      },
      [t, e, n, c, f]
    ),
  };
}
export { G as a, V as b, Y as g, j as u };
//# sourceMappingURL=useAtaQuery-15khGZ6w.js.map
