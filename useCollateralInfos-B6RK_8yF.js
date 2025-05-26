var S = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty,
  g = Object.prototype.propertyIsEnumerable;
var b = (o, n, t) =>
    n in o ? S(o, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (o[n] = t),
  u = (o, n) => {
    for (var t in n || (n = {})) d.call(n, t) && b(o, t, n[t]);
    if (s) for (var t of s(n)) g.call(n, t) && b(o, t, n[t]);
    return o;
  };
var m = (o, n) => {
  var t = {};
  for (var e in o) d.call(o, e) && n.indexOf(e) < 0 && (t[e] = o[e]);
  if (o != null && s) for (var e of s(o)) n.indexOf(e) < 0 && g.call(o, e) && (t[e] = o[e]);
  return t;
};
import { S as I, bc as w, a3 as T } from './vendor-S4AjIOSE.js';
import { a as p, aa as D, Q as C, e as q, c as h } from './index-CroKpwmf.js';
(function () {
  try {
    var o =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      n = new o.Error().stack;
    n &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[n] = 'ba33ff38-5b3a-473e-9fca-8266d178d786'),
      (o._sentryDebugIdIdentifier = 'sentry-dbid-ba33ff38-5b3a-473e-9fca-8266d178d786'));
  } catch (t) {}
})();
const F = () => {
    const { web3client: o } = p(),
      { kaminoSdk: n } = D(),
      t = async () => {
        const a = n.getGlobalConfig(),
          l = await w.GlobalConfig.fetch(o.connection, a);
        if (!l) throw new Error('global config '.concat(a.toString(), ' is not found'));
        return l;
      },
      { data: e, isLoading: i } = I({
        queryKey: C.globalConfig,
        enabled: !!n && !!o,
        queryFn: t,
        onError: (a) => {
          q(a), h({ message: 'Failed to load global config', type: 'error' });
        },
        cacheTime: 2 * 24 * 60 * 60 * 1e3,
        staleTime: 1 * 24 * 60 * 60 * 1e3,
      });
    return { data: e, isLoading: i };
  },
  E = [],
  K = [],
  _ = {},
  G = '11111111111111111111111111111111',
  Q = (o) => (o && o.toJSON().infos.filter((n) => n.mint !== G)) || E,
  J = () => {
    var l, f, y;
    const { data: o } = F(),
      { web3client: n } = p(),
      t = async () => {
        if (!n || !o) throw new Error('wallet is not connected');
        const M = await w.CollateralInfos.fetch(n.connection, o.tokenInfos),
          r = Q(M),
          k = r.map((c) => c.mint),
          B = T(r, (c) => c.mint);
        return { collateralInfos: r, collateralInfosByMint: B, collateralMints: k };
      },
      a = I({
        queryKey: C.collateralInfos,
        enabled: !!n && !!o,
        queryFn: t,
        cacheTime: 2 * 24 * 60 * 60 * 1e3,
        staleTime: 1 * 24 * 60 * 60 * 1e3,
        onError: () => {
          h({ message: 'Failed to load tokens info', type: 'error' });
        },
      }),
      { data: e } = a,
      i = m(a, ['data']);
    return u(
      {
        data: (l = e == null ? void 0 : e.collateralInfos) != null ? l : E,
        mints: (f = e == null ? void 0 : e.collateralMints) != null ? f : K,
        byMint: (y = e == null ? void 0 : e.collateralInfosByMint) != null ? y : _,
      },
      i
    );
  };
export { J as u };
//# sourceMappingURL=useCollateralInfos-B6RK_8yF.js.map
