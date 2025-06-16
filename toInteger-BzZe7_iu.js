import { co as f, cp as s } from './vendor-BCNtwJ5j.js';
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
      (r._sentryDebugIds[t] = '2f30b3f8-882b-4501-ba73-7f3f3eb44b7f'),
      (r._sentryDebugIdIdentifier = 'sentry-dbid-2f30b3f8-882b-4501-ba73-7f3f3eb44b7f'));
  } catch (e) {}
})();
var o = /\s/;
function b(r) {
  for (var t = r.length; t-- && o.test(r.charAt(t)); );
  return t;
}
var d = b,
  a = d,
  c = /^\s+/;
function I(r) {
  return r && r.slice(0, a(r) + 1).replace(c, '');
}
var m = I,
  y = m,
  n = f,
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
//# sourceMappingURL=toInteger-BzZe7_iu.js.map
