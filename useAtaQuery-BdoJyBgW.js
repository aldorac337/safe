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
  bo as S,
  P as u,
  ai as m,
  cN as D,
  r as b,
  S as Q,
  l as R,
  a5 as _,
} from './vendor-CFRnETMC.js';
import { k as x, a as T, Q as E, u as K, eg as q } from './index-DwWh_48g.js';
import { u as F } from './useCollateralInfos-CoDqlLZW.js';
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
      (e._sentryDebugIds[t] = 'f939825c-17ee-4e55-90eb-ab43f0bbda88'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-f939825c-17ee-4e55-90eb-ab43f0bbda88'));
  } catch (n) {}
})();
const Y = (e, t, n = m) => S(new u(e), new u(t), !0, n);
function V(e, t, n, c = m) {
  return D(new u(e), new u(n), new u(e), new u(t), c);
}
const B = {},
  N = [],
  G = () => {
    const { markets: e } = x(),
      { web3client: t } = T(),
      { mints: n } = F(),
      c = b.useMemo(() => {
        var l;
        const o = [];
        for (const r of e) {
          const d = (l = r == null ? void 0 : r.reserves) == null ? void 0 : l.values();
          if (d) o.push(...Array.from(d));
          else return N;
        }
        return o;
      }, [e]),
      f = async () => {
        if (!t) throw new Error('Web3client is not loaded');
        const o = c
            .map((s) => [s.getLiquidityMint().toString(), s.getLiquidityTokenProgram()])
            .reduce((s, [i, y]) => k(p({}, s), { [i]: y }), {}),
          l = n.filter((s) => !o[s.toString()]),
          r = l.map((s) => new u(s)),
          d = R.chunk(r, 100);
        return (await Promise.all(d.map((s) => t.connection.getMultipleAccountsInfo(s))))
          .flat()
          .reduce(
            (s, i, y) => (i != null && i.owner && (s[l[y]] = i == null ? void 0 : i.owner), s),
            o
          );
      },
      { data: w = B, isFetched: a } = Q({
        queryKey: E.getTokenProgramIds,
        queryFn: f,
        enabled: !!(c.length && n.length && t),
        refetchInterval: 60 * 60 * 1e3,
      });
    return { tokenProgramIdsMap: w, isFetched: a };
  };
function j() {
  const { walletPublicKey: e } = K(),
    { web3client: t } = T(),
    n = _(),
    { tokenProgramIdsMap: c } = G(),
    f = b.useCallback(async (a) => (t ? (await t.connection.getAccountInfo(a)) !== null : !1), [t]);
  return {
    getAtaByTokenMint: b.useCallback(
      async (a, o, l) => {
        if (!t || !e) return null;
        const r = E.getAta(e, a);
        return q(a)
          ? e
          : (!n.getQueryData(r) && l && (await n.invalidateQueries({ queryKey: r })),
            n.fetchQuery(
              r,
              async () => {
                const g = await Y(a, e, o || c[a.toString()] || m);
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
//# sourceMappingURL=useAtaQuery-BdoJyBgW.js.map
