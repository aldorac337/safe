var u = Object.defineProperty,
  c = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable;
var a = (e, t, n) =>
    t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  d = (e, t) => {
    for (var n in t || (t = {})) l.call(t, n) && a(e, n, t[n]);
    if (s) for (var n of s(t)) h.call(t, n) && a(e, n, t[n]);
    return e;
  },
  i = (e, t) => c(e, g(t));
import { j as r } from './vendor-DpenelXu.js';
import { F as p } from './index-CUnELesT.js';
import { e8 as y, x as b } from './index-DTTOaJYD.js';
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
      (e._sentryDebugIds[t] = 'cb9f4688-76aa-4cfa-96a5-91406dc53624'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-cb9f4688-76aa-4cfa-96a5-91406dc53624'));
  } catch (n) {}
})();
const M =
  (e, t = !0, n = !0) =>
  (o) => {
    const { isLoading: f } = y();
    return n && f && b.isLendingPageEnabled
      ? t
        ? r.jsx(p, {})
        : r.jsx('div', {})
      : r.jsx(
          e,
          i(d({}, o), {
            'data-sentry-element': 'WrappedComponent',
            'data-sentry-component': 'WithLendingPrefetchedMarkets',
            'data-sentry-source-file': 'withLendingPrefetchedMarkets.tsx',
          })
        );
  };
export { M as w };
//# sourceMappingURL=withLendingPrefetchedMarkets-BvLWkuq5.js.map
