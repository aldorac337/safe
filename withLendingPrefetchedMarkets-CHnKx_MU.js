var u = Object.defineProperty,
  g = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable;
var d = (e, t, n) =>
    t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  i = (e, t) => {
    for (var n in t || (t = {})) c.call(t, n) && d(e, n, t[n]);
    if (s) for (var n of s(t)) h.call(t, n) && d(e, n, t[n]);
    return e;
  },
  a = (e, t) => g(e, l(t));
import { j as r } from './vendor-BCNtwJ5j.js';
import { F as p } from './index-CbLhR6Sr.js';
import { ea as y, x as b } from './index-BInJAZZg.js';
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
      (e._sentryDebugIds[t] = 'ed195198-1a7a-4230-b997-659562e7e267'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-ed195198-1a7a-4230-b997-659562e7e267'));
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
          a(i({}, o), {
            'data-sentry-element': 'WrappedComponent',
            'data-sentry-component': 'WithLendingPrefetchedMarkets',
            'data-sentry-source-file': 'withLendingPrefetchedMarkets.tsx',
          })
        );
  };
export { M as w };
//# sourceMappingURL=withLendingPrefetchedMarkets-CHnKx_MU.js.map
