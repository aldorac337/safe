var p = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable;
var d = (e, t, r) =>
    t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
  n = (e, t) => {
    for (var r in t || (t = {})) i.call(t, r) && d(e, r, t[r]);
    if (a) for (var r of a(t)) u.call(t, r) && d(e, r, t[r]);
    return e;
  };
var g = (e, t) => {
  var r = {};
  for (var s in e) i.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
  if (e != null && a) for (var s of a(e)) t.indexOf(s) < 0 && u.call(e, s) && (r[s] = e[s]);
  return r;
};
import { dN as I, dO as k, k as M, Q as E, e as v } from './index-CroKpwmf.js';
import { a as L, S as T } from './vendor-S4AjIOSE.js';
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
      (e._sentryDebugIds[t] = '4c631ccc-2039-45f5-9981-03d70c4bb341'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-4c631ccc-2039-45f5-9981-03d70c4bb341'));
  } catch (r) {}
})();
const _ = localStorage.getItem('kaminoStaging') ? k : I,
  m = ({ marketAddress: e, env: t }) =>
    L.get(
      ''.concat(_, '/kamino-market/').concat(e.toString(), '/leverage/metrics?env=').concat(t)
    ).then(({ data: r }) => r),
  y = [],
  f = {};
function A(e) {
  const t = f,
    r = f;
  return (
    e.forEach((s) => {
      const o = s.depositReserve + s.borrowReserve;
      s.tag === 'Leverage' ? (t[o] = s) : s.tag === 'Multiply' && (r[o] = s);
    }),
    { leverageLookupTable: t, multiplyLookupTable: r }
  );
}
const Q = ({ marketAddress: e }) => {
  const { getMarketByAddress: t } = M(),
    r = t(e),
    s = async () => {
      if (!r) throw new Error('No markets found');
      return m({ marketAddress: r.getAddress(), env: 'mainnet-beta' });
    },
    c = T({
      queryKey: E.getLeverageMultiplyMetrics(r.getAddress()),
      queryFn: () => s(),
      enabled: !!r,
      onError: (l) => {
        v(l), console.error('Error: Failed to fetch "Lending Metrics"', l);
      },
    }),
    { data: o } = c,
    b = g(c, ['data']);
  return n(n({ data: o || y }, A(o || y)), b);
};
export { A as c, m as g, Q as u };
//# sourceMappingURL=useLeverageMultiplyMetricsQuery-CMYFINZW.js.map
