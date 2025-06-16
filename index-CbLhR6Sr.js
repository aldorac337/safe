var o = Object.defineProperty,
  p = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty,
  y = Object.prototype.propertyIsEnumerable;
var t = (e, n, r) =>
    n in e ? o(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[n] = r),
  a = (e, n) => {
    for (var r in n || (n = {})) f.call(n, r) && t(e, r, n[r]);
    if (s) for (var r of s(n)) y.call(n, r) && t(e, r, n[r]);
    return e;
  },
  i = (e, n) => p(e, l(n));
import { j as d } from './vendor-BCNtwJ5j.js';
import { a9 as u } from './index-BInJAZZg.js';
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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = '600e6151-28aa-4602-98e3-b47a29c9a4e9'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-600e6151-28aa-4602-98e3-b47a29c9a4e9'));
  } catch (r) {}
})();
const c = '_spinnerWrapper_ywr0y_1',
  b = { spinnerWrapper: c },
  _ = (e) =>
    d.jsx('div', {
      className: b.spinnerWrapper,
      'data-sentry-component': 'FullHeightSpinner',
      'data-sentry-source-file': 'index.tsx',
      children: d.jsx(
        u,
        i(a({}, e), { 'data-sentry-element': 'Spinner', 'data-sentry-source-file': 'index.tsx' })
      ),
    });
export { _ as F };
//# sourceMappingURL=index-CbLhR6Sr.js.map
