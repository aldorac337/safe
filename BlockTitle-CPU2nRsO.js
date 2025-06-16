var b = Object.defineProperty,
  m = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable;
var o = (e, t, s) =>
    t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s),
  n = (e, t) => {
    for (var s in t || (t = {})) a.call(t, s) && o(e, s, t[s]);
    if (l) for (var s of l(t)) r.call(t, s) && o(e, s, t[s]);
    return e;
  },
  i = (e, t) => m(e, u(t));
var c = (e, t) => {
  var s = {};
  for (var f in e) a.call(e, f) && t.indexOf(f) < 0 && (s[f] = e[f]);
  if (e != null && l) for (var f of l(e)) t.indexOf(f) < 0 && r.call(e, f) && (s[f] = e[f]);
  return s;
};
import { j as y } from './vendor-BCNtwJ5j.js';
import { f as p } from './index-BInJAZZg.js';
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
      (e._sentryDebugIds[t] = '4fcad0d0-0ece-49f3-b4e6-ac6c88f3f573'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-4fcad0d0-0ece-49f3-b4e6-ac6c88f3f573'));
  } catch (s) {}
})();
const g = {
    extraSmall: { fs: 16, lh: 22 },
    small: { fs: 18, lh: 22 },
    medium: { fs: 20, lh: 26, tabletFs: 22, tabletLh: 32 },
  },
  I = (f) => {
    var d = f,
      { children: e, variant: t = 'medium' } = d,
      s = c(d, ['children', 'variant']);
    return y.jsx(
      p,
      i(n(n({}, g[t]), s), {
        'data-sentry-element': 'Text',
        'data-sentry-component': 'BlockTitle',
        'data-sentry-source-file': 'BlockTitle.tsx',
        children: e,
      })
    );
  };
export { I as B };
//# sourceMappingURL=BlockTitle-CPU2nRsO.js.map
