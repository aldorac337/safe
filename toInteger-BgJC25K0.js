import { cm as d, cn as s } from './vendor-DpenelXu.js';
(function () {
  try {
    var r =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      t = new r.Error().stack;
    t &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[t] = '18c2bb8d-0b74-4ac5-89e8-b5e423d980dd'),
      (r._sentryDebugIdIdentifier = 'sentry-dbid-18c2bb8d-0b74-4ac5-89e8-b5e423d980dd'));
  } catch (e) {}
})();
var f = /\s/;
function o(r) {
  for (var t = r.length; t-- && f.test(r.charAt(t)); );
  return t;
}
var b = o,
  c = b,
  a = /^\s+/;
function m(r) {
  return r && r.slice(0, c(r) + 1).replace(a, '');
}
var I = m,
  y = I,
  n = d,
  p = s,
  i = NaN,
  _ = /^[-+]0x[0-9a-f]+$/i,
  g = /^0b[01]+$/i,
  N = /^0o[0-7]+$/i,
  T = parseInt;
function x(r) {
  if (typeof r == 'number') return r;
  if (p(r)) return i;
  if (n(r)) {
    var t = typeof r.valueOf == 'function' ? r.valueOf() : r;
    r = n(t) ? t + '' : t;
  }
  if (typeof r != 'string') return r === 0 ? r : +r;
  r = y(r);
  var e = g.test(r);
  return e || N.test(r) ? T(r.slice(2), e ? 2 : 8) : _.test(r) ? i : +r;
}
var $ = x,
  w = $,
  E = 1 / 0,
  h = 17976931348623157e292;
function O(r) {
  if (!r) return r === 0 ? r : 0;
  if (((r = w(r)), r === E || r === -1 / 0)) {
    var t = r < 0 ? -1 : 1;
    return t * h;
  }
  return r === r ? r : 0;
}
var u = O,
  D = u;
function F(r) {
  var t = D(r),
    e = t % 1;
  return t === t ? (e ? t - e : t) : 0;
}
var B = F;
export { B as t };
//# sourceMappingURL=toInteger-BgJC25K0.js.map
