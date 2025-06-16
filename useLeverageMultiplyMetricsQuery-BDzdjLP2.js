var p = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable;
var i = (e, t, r) =>
    t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
  n = (e, t) => {
    for (var r in t || (t = {})) u.call(t, r) && i(e, r, t[r]);
    if (a) for (var r of a(t)) c.call(t, r) && i(e, r, t[r]);
    return e;
  };
var g = (e, t) => {
  var r = {};
  for (var s in e) u.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
  if (e != null && a) for (var s of a(e)) t.indexOf(s) < 0 && c.call(e, s) && (r[s] = e[s]);
  return r;
};
import { dP as I, dQ as k, k as M, Q as E, e as v } from './index-BInJAZZg.js';
import { a as L, S as T } from './vendor-BCNtwJ5j.js';
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
      (e._sentryDebugIds[t] = '2f7691ac-4e18-435b-8071-85b54b1ef61e'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-2f7691ac-4e18-435b-8071-85b54b1ef61e'));
  } catch (r) {}
})();
const _ = localStorage.getItem('kaminoStaging') ? k : I,
  m = ({ marketAddress: e, env: t }) =>
    L.get(
      ''.concat(_, '/kamino-market/').concat(e.toString(), '/leverage/metrics?env=').concat(t)
    ).then(({ data: r }) => r),
  f = [],
  y = {};
function A(e) {
  const t = y,
    r = y;
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
    l = T({
      queryKey: E.getLeverageMultiplyMetrics(r.getAddress()),
      queryFn: () => s(),
      enabled: !!r,
      onError: (d) => {
        v(d), console.error('Error: Failed to fetch "Lending Metrics"', d);
      },
    }),
    { data: o } = l,
    b = g(l, ['data']);
  return n(n({ data: o || f }, A(o || f)), b);
};
export { A as c, m as g, Q as u };
//# sourceMappingURL=useLeverageMultiplyMetricsQuery-BDzdjLP2.js.map
