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
  bn as S,
  P as u,
  ag as w,
  c9 as D,
  r as m,
  S as Q,
  l as R,
  a5 as _,
} from './vendor-S4AjIOSE.js';
import { k as x, a as T, Q as E, u as K, e7 as q } from './index-CroKpwmf.js';
import { u as F } from './useCollateralInfos-B6RK_8yF.js';
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
      (e._sentryDebugIds[t] = '139e1dca-76d4-4217-9494-e911a801eee1'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-139e1dca-76d4-4217-9494-e911a801eee1'));
  } catch (n) {}
})();
const Y = (e, t, n = w) => S(new u(e), new u(t), !0, n);
function V(e, t, n, c = w) {
  return D(new u(e), new u(n), new u(e), new u(t), c);
}
const B = {},
  G = [],
  L = () => {
    const { markets: e } = x(),
      { web3client: t } = T(),
      { mints: n } = F(),
      c = m.useMemo(() => {
        var l;
        const o = [];
        for (const r of e) {
          const d = (l = r == null ? void 0 : r.reserves) == null ? void 0 : l.values();
          if (d) o.push(...Array.from(d));
          else return G;
        }
        return o;
      }, [e]),
      g = async () => {
        if (!t) throw new Error('Web3client is not loaded');
        const o = c
            .map((s) => [s.getLiquidityMint().toString(), s.getLiquidityTokenProgram()])
            .reduce((s, [i, f]) => k(p({}, s), { [i]: f }), {}),
          l = n.filter((s) => !o[s.toString()]),
          r = l.map((s) => new u(s)),
          d = R.chunk(r, 100);
        return (await Promise.all(d.map((s) => t.connection.getMultipleAccountsInfo(s))))
          .flat()
          .reduce(
            (s, i, f) => (i != null && i.owner && (s[l[f]] = i == null ? void 0 : i.owner), s),
            o
          );
      },
      { data: b = B, isFetched: a } = Q({
        queryKey: E.getTokenProgramIds,
        queryFn: g,
        enabled: !!(c.length && n.length && t),
        refetchInterval: 60 * 60 * 1e3,
      });
    return { tokenProgramIdsMap: b, isFetched: a };
  };
function j() {
  const { walletPublicKey: e } = K(),
    { web3client: t } = T(),
    n = _(),
    { tokenProgramIdsMap: c } = L(),
    g = m.useCallback(async (a) => (t ? (await t.connection.getAccountInfo(a)) !== null : !1), [t]);
  return {
    getAtaByTokenMint: m.useCallback(
      async (a, o, l) => {
        if (!t || !e) return null;
        const r = E.getAta(e, a);
        return q(a)
          ? e
          : (!n.getQueryData(r) && l && (await n.invalidateQueries({ queryKey: r })),
            n.fetchQuery(
              r,
              async () => {
                const y = await Y(a, e, o || c[a.toString()] || w);
                return (await g(new u(y))) ? y.toString() : null;
              },
              { cacheTime: 2 * 24 * 60 * 60 * 1e3, staleTime: 1 * 60 * 1e3 }
            ));
      },
      [t, e, n, c, g]
    ),
  };
}
export { L as a, V as b, Y as g, j as u };
//# sourceMappingURL=useAtaQuery-CV7TJD4B.js.map
