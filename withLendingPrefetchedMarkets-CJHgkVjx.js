var u = Object.defineProperty,
  c = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable;
var d = (e, t, n) =>
    t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  a = (e, t) => {
    for (var n in t || (t = {})) l.call(t, n) && d(e, n, t[n]);
    if (s) for (var n of s(t)) h.call(t, n) && d(e, n, t[n]);
    return e;
  },
  i = (e, t) => c(e, g(t));
import { j as r } from './vendor-S4AjIOSE.js';
import { F as p } from './index-BzeD4Bha.js';
import { e1 as y, x as b } from './index-CroKpwmf.js';
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
      (e._sentryDebugIds[t] = '5562a109-1cd3-4ffa-9751-1ee2c4f060a5'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-5562a109-1cd3-4ffa-9751-1ee2c4f060a5'));
  } catch (n) {}
})();
const M =
  (e, t = !0, n = !0) =>
  (f) => {
    const { isLoading: o } = y();
    return n && o && b.isLendingPageEnabled
      ? t
        ? r.jsx(p, {})
        : r.jsx('div', {})
      : r.jsx(
          e,
          i(a({}, f), {
            'data-sentry-element': 'WrappedComponent',
            'data-sentry-component': 'WithLendingPrefetchedMarkets',
            'data-sentry-source-file': 'withLendingPrefetchedMarkets.tsx',
          })
        );
  };
export { M as w };
//# sourceMappingURL=withLendingPrefetchedMarkets-CJHgkVjx.js.map
