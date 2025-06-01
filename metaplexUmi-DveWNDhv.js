import { a as ee, c as re } from './lodash-aFjP5OGs.js';
import './chainSolana-DAiUp22G.js';
import './metaplex-81r3lICz.js';
const oe = {},
  ne = Object.freeze(
    Object.defineProperty({ __proto__: null, default: oe }, Symbol.toStringTag, { value: 'Module' })
  ),
  ae = ee(ne);
var j = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */ j.exports;
(function (I, A) {
  (function (O) {
    var _ = A && !A.nodeType && A,
      F = I && !I.nodeType && I,
      x = typeof globalThis == 'object' && globalThis;
    (x.global === x || x.window === x || x.self === x) && (O = x);
    var C,
      m = 2147483647,
      p = 36,
      k = 1,
      T = 26,
      V = 38,
      H = 700,
      B = 72,
      L = 128,
      q = '-',
      J = /^xn--/,
      K = /[^\x20-\x7E]/,
      Q = /[\x2E\u3002\uFF0E\uFF61]/g,
      W = {
        overflow: 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input',
      },
      E = p - k,
      h = Math.floor,
      y = String.fromCharCode,
      M;
    function w(e) {
      throw new RangeError(W[e]);
    }
    function N(e, r) {
      for (var o = e.length, n = []; o--; ) n[o] = r(e[o]);
      return n;
    }
    function $(e, r) {
      var o = e.split('@'),
        n = '';
      o.length > 1 && ((n = o[0] + '@'), (e = o[1])), (e = e.replace(Q, '.'));
      var t = e.split('.'),
        a = N(t, r).join('.');
      return n + a;
    }
    function D(e) {
      for (var r = [], o = 0, n = e.length, t, a; o < n; )
        (t = e.charCodeAt(o++)),
          t >= 55296 && t <= 56319 && o < n
            ? ((a = e.charCodeAt(o++)),
              (a & 64512) == 56320
                ? r.push(((t & 1023) << 10) + (a & 1023) + 65536)
                : (r.push(t), o--))
            : r.push(t);
      return r;
    }
    function G(e) {
      return N(e, function (r) {
        var o = '';
        return (
          r > 65535 &&
            ((r -= 65536), (o += y(((r >>> 10) & 1023) | 55296)), (r = 56320 | (r & 1023))),
          (o += y(r)),
          o
        );
      }).join('');
    }
    function X(e) {
      return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : p;
    }
    function U(e, r) {
      return e + 22 + 75 * (e < 26) - ((r != 0) << 5);
    }
    function z(e, r, o) {
      var n = 0;
      for (e = o ? h(e / H) : e >> 1, e += h(e / r); e > (E * T) >> 1; n += p) e = h(e / E);
      return h(n + ((E + 1) * e) / (e + V));
    }
    function P(e) {
      var r = [],
        o = e.length,
        n,
        t = 0,
        a = L,
        i = B,
        f,
        c,
        d,
        v,
        u,
        s,
        l,
        b,
        g;
      for (f = e.lastIndexOf(q), f < 0 && (f = 0), c = 0; c < f; ++c)
        e.charCodeAt(c) >= 128 && w('not-basic'), r.push(e.charCodeAt(c));
      for (d = f > 0 ? f + 1 : 0; d < o; ) {
        for (
          v = t, u = 1, s = p;
          d >= o && w('invalid-input'),
            (l = X(e.charCodeAt(d++))),
            (l >= p || l > h((m - t) / u)) && w('overflow'),
            (t += l * u),
            (b = s <= i ? k : s >= i + T ? T : s - i),
            !(l < b);
          s += p
        )
          (g = p - b), u > h(m / g) && w('overflow'), (u *= g);
        (n = r.length + 1),
          (i = z(t - v, n, v == 0)),
          h(t / n) > m - a && w('overflow'),
          (a += h(t / n)),
          (t %= n),
          r.splice(t++, 0, a);
      }
      return G(r);
    }
    function R(e) {
      var r,
        o,
        n,
        t,
        a,
        i,
        f,
        c,
        d,
        v,
        u,
        s = [],
        l,
        b,
        g,
        S;
      for (e = D(e), l = e.length, r = L, o = 0, a = B, i = 0; i < l; ++i)
        (u = e[i]), u < 128 && s.push(y(u));
      for (n = t = s.length, t && s.push(q); n < l; ) {
        for (f = m, i = 0; i < l; ++i) (u = e[i]), u >= r && u < f && (f = u);
        for (
          b = n + 1, f - r > h((m - o) / b) && w('overflow'), o += (f - r) * b, r = f, i = 0;
          i < l;
          ++i
        )
          if (((u = e[i]), u < r && ++o > m && w('overflow'), u == r)) {
            for (c = o, d = p; (v = d <= a ? k : d >= a + T ? T : d - a), !(c < v); d += p)
              (S = c - v), (g = p - v), s.push(y(U(v + (S % g), 0))), (c = h(S / g));
            s.push(y(U(c, 0))), (a = z(o, b, n == t)), (o = 0), ++n;
          }
        ++o, ++r;
      }
      return s.join('');
    }
    function Y(e) {
      return $(e, function (r) {
        return J.test(r) ? P(r.slice(4).toLowerCase()) : r;
      });
    }
    function Z(e) {
      return $(e, function (r) {
        return K.test(r) ? 'xn--' + R(r) : r;
      });
    }
    if (
      ((C = {
        version: '1.4.1',
        ucs2: { decode: D, encode: G },
        decode: P,
        encode: R,
        toASCII: Z,
        toUnicode: Y,
      }),
      _ && F)
    )
      if (I.exports == _) F.exports = C;
      else for (M in C) C.hasOwnProperty(M) && (_[M] = C[M]);
    else O.punycode = C;
  })(re);
})(j, j.exports);
j.exports;
export { ae as r };
