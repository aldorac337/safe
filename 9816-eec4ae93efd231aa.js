'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9816],
  {
    53650: function (e, r, n) {
      n.d(r, {
        D: function () {
          return i;
        },
      });
      var t = n(58854);
      function i(e) {
        let r = (0, t.useRef)({ value: e, previous: e });
        return (0, t.useMemo)(
          () => (
            r.current.value !== e &&
              ((r.current.previous = r.current.value), (r.current.value = e)),
            r.current.previous
          ),
          [e]
        );
      }
    },
    38031: function (e, r, n) {
      n.d(r, {
        C: function () {
          return t;
        },
      });
      function t(e) {
        return e;
      }
    },
    21819: function (e, r, n) {
      n.d(r, {
        k: function () {
          return o;
        },
      });
      var t = n(53458),
        i = n(31251),
        s = n(89743);
      function o(e, r) {
        return (0, i.r)(
          { ...e, enabled: !0, suspense: !0, throwOnError: s.Ct, placeholderData: void 0 },
          t.z,
          r
        );
      }
    },
    69488: function (e, r, n) {
      var t = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        i = Math.ceil,
        s = Math.floor,
        o = '[BigNumber Error] ',
        u = o + 'Number primitive has more than 15 significant digits: ',
        l = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13];
      function f(e) {
        var r = 0 | e;
        return e > 0 || e === r ? r : r - 1;
      }
      function c(e) {
        for (var r, n, t = 1, i = e.length, s = e[0] + ''; t < i; ) {
          for (n = 14 - (r = e[t++] + '').length; n--; r = '0' + r);
          s += r;
        }
        for (i = s.length; 48 === s.charCodeAt(--i); );
        return s.slice(0, i + 1 || 1);
      }
      function a(e, r) {
        var n,
          t,
          i = e.c,
          s = r.c,
          o = e.s,
          u = r.s,
          l = e.e,
          f = r.e;
        if (!o || !u) return null;
        if (((n = i && !i[0]), (t = s && !s[0]), n || t)) return n ? (t ? 0 : -u) : o;
        if (o != u) return o;
        if (((n = o < 0), (t = l == f), !i || !s)) return t ? 0 : !i ^ n ? 1 : -1;
        if (!t) return (l > f) ^ n ? 1 : -1;
        for (o = 0, u = (l = i.length) < (f = s.length) ? l : f; o < u; o++)
          if (i[o] != s[o]) return (i[o] > s[o]) ^ n ? 1 : -1;
        return l == f ? 0 : (l > f) ^ n ? 1 : -1;
      }
      function h(e, r, n, t) {
        if (e < r || e > n || e !== s(e))
          throw Error(
            o +
              (t || 'Argument') +
              ('number' == typeof e
                ? e < r || e > n
                  ? ' out of range: '
                  : ' not an integer: '
                : ' not a primitive number: ') +
              String(e)
          );
      }
      function g(e) {
        var r = e.c.length - 1;
        return f(e.e / 14) == r && e.c[r] % 2 != 0;
      }
      function p(e, r) {
        return (e.length > 1 ? e.charAt(0) + '.' + e.slice(1) : e) + (r < 0 ? 'e' : 'e+') + r;
      }
      function w(e, r, n) {
        var t, i;
        if (r < 0) {
          for (i = n + '.'; ++r; i += n);
          e = i + e;
        } else if (((t = e.length), ++r > t)) {
          for (i = n, r -= t; --r; i += n);
          e += i;
        } else r < t && (e = e.slice(0, r) + '.' + e.slice(r));
        return e;
      }
      var m = (function e(r) {
        var n,
          m,
          d,
          v,
          N,
          b,
          O,
          E,
          y,
          A = (T.prototype = { constructor: T, toString: null, valueOf: null }),
          S = new T(1),
          _ = 20,
          B = 4,
          D = -7,
          I = 21,
          R = -1e7,
          P = 1e7,
          C = !1,
          L = 1,
          x = 0,
          U = {
            prefix: '',
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ',',
            decimalSeparator: '.',
            fractionGroupSize: 0,
            fractionGroupSeparator: '\xa0',
            suffix: '',
          },
          $ = '0123456789abcdefghijklmnopqrstuvwxyz',
          M = !0;
        function T(e, r) {
          var n,
            i,
            o,
            l,
            f,
            c,
            a,
            g,
            p = this;
          if (!(p instanceof T)) return new T(e, r);
          if (null == r) {
            if (e && !0 === e._isBigNumber) {
              (p.s = e.s),
                !e.c || e.e > P
                  ? (p.c = p.e = null)
                  : e.e < R
                    ? (p.c = [(p.e = 0)])
                    : ((p.e = e.e), (p.c = e.c.slice()));
              return;
            }
            if ((c = 'number' == typeof e) && 0 * e == 0) {
              if (((p.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                for (l = 0, f = e; f >= 10; f /= 10, l++);
                l > P ? (p.c = p.e = null) : ((p.e = l), (p.c = [e]));
                return;
              }
              g = String(e);
            } else {
              if (!t.test((g = String(e)))) return y(p, g, c);
              p.s = 45 == g.charCodeAt(0) ? ((g = g.slice(1)), -1) : 1;
            }
            (l = g.indexOf('.')) > -1 && (g = g.replace('.', '')),
              (f = g.search(/e/i)) > 0
                ? (l < 0 && (l = f), (l += +g.slice(f + 1)), (g = g.substring(0, f)))
                : l < 0 && (l = g.length);
          } else {
            if ((h(r, 2, $.length, 'Base'), 10 == r && M)) return j((p = new T(e)), _ + p.e + 1, B);
            if (((g = String(e)), (c = 'number' == typeof e))) {
              if (0 * e != 0) return y(p, g, c, r);
              if (
                ((p.s = 1 / e < 0 ? ((g = g.slice(1)), -1) : 1),
                T.DEBUG && g.replace(/^0\.0*|\./, '').length > 15)
              )
                throw Error(u + e);
            } else p.s = 45 === g.charCodeAt(0) ? ((g = g.slice(1)), -1) : 1;
            for (n = $.slice(0, r), l = f = 0, a = g.length; f < a; f++)
              if (0 > n.indexOf((i = g.charAt(f)))) {
                if ('.' == i) {
                  if (f > l) {
                    l = a;
                    continue;
                  }
                } else if (
                  !o &&
                  ((g == g.toUpperCase() && (g = g.toLowerCase())) ||
                    (g == g.toLowerCase() && (g = g.toUpperCase())))
                ) {
                  (o = !0), (f = -1), (l = 0);
                  continue;
                }
                return y(p, String(e), c, r);
              }
            (c = !1),
              (l = (g = E(g, r, 10, p.s)).indexOf('.')) > -1
                ? (g = g.replace('.', ''))
                : (l = g.length);
          }
          for (f = 0; 48 === g.charCodeAt(f); f++);
          for (a = g.length; 48 === g.charCodeAt(--a); );
          if ((g = g.slice(f, ++a))) {
            if (((a -= f), c && T.DEBUG && a > 15 && (e > 9007199254740991 || e !== s(e))))
              throw Error(u + p.s * e);
            if ((l = l - f - 1) > P) p.c = p.e = null;
            else if (l < R) p.c = [(p.e = 0)];
            else {
              if (((p.e = l), (p.c = []), (f = (l + 1) % 14), l < 0 && (f += 14), f < a)) {
                for (f && p.c.push(+g.slice(0, f)), a -= 14; f < a; )
                  p.c.push(+g.slice(f, (f += 14)));
                f = 14 - (g = g.slice(f)).length;
              } else f -= a;
              for (; f--; g += '0');
              p.c.push(+g);
            }
          } else p.c = [(p.e = 0)];
        }
        function k(e, r, n, t) {
          var i, s, o, u, l;
          if ((null == n ? (n = B) : h(n, 0, 8), !e.c)) return e.toString();
          if (((i = e.c[0]), (o = e.e), null == r))
            (l = c(e.c)), (l = 1 == t || (2 == t && (o <= D || o >= I)) ? p(l, o) : w(l, o, '0'));
          else if (
            ((s = (e = j(new T(e), r, n)).e),
            (u = (l = c(e.c)).length),
            1 == t || (2 == t && (r <= s || s <= D)))
          ) {
            for (; u < r; l += '0', u++);
            l = p(l, s);
          } else if (((r -= o), (l = w(l, s, '0')), s + 1 > u)) {
            if (--r > 0) for (l += '.'; r--; l += '0');
          } else if ((r += s - u) > 0) for (s + 1 == u && (l += '.'); r--; l += '0');
          return e.s < 0 && i ? '-' + l : l;
        }
        function G(e, r) {
          for (var n, t, i = 1, s = new T(e[0]); i < e.length; i++)
            ((t = new T(e[i])).s && (n = a(s, t)) !== r && (0 !== n || s.s !== r)) || (s = t);
          return s;
        }
        function F(e, r, n) {
          for (var t = 1, i = r.length; !r[--i]; r.pop());
          for (i = r[0]; i >= 10; i /= 10, t++);
          return (
            (n = t + 14 * n - 1) > P
              ? (e.c = e.e = null)
              : n < R
                ? (e.c = [(e.e = 0)])
                : ((e.e = n), (e.c = r)),
            e
          );
        }
        function j(e, r, n, t) {
          var o,
            u,
            f,
            c,
            a,
            h,
            g,
            p = e.c;
          if (p) {
            e: {
              for (o = 1, c = p[0]; c >= 10; c /= 10, o++);
              if ((u = r - o) < 0)
                (u += 14), (f = r), (g = s(((a = p[(h = 0)]) / l[o - f - 1]) % 10));
              else if ((h = i((u + 1) / 14)) >= p.length) {
                if (t) {
                  for (; p.length <= h; p.push(0));
                  (a = g = 0), (o = 1), (u %= 14), (f = u - 14 + 1);
                } else break e;
              } else {
                for (o = 1, a = c = p[h]; c >= 10; c /= 10, o++);
                (u %= 14), (g = (f = u - 14 + o) < 0 ? 0 : s((a / l[o - f - 1]) % 10));
              }
              if (
                ((t = t || r < 0 || null != p[h + 1] || (f < 0 ? a : a % l[o - f - 1])),
                (t =
                  n < 4
                    ? (g || t) && (0 == n || n == (e.s < 0 ? 3 : 2))
                    : g > 5 ||
                      (5 == g &&
                        (4 == n ||
                          t ||
                          (6 == n && (u > 0 ? (f > 0 ? a / l[o - f] : 0) : p[h - 1]) % 10 & 1) ||
                          n == (e.s < 0 ? 8 : 7)))),
                r < 1 || !p[0])
              )
                return (
                  (p.length = 0),
                  t
                    ? ((r -= e.e + 1), (p[0] = l[(14 - (r % 14)) % 14]), (e.e = -r || 0))
                    : (p[0] = e.e = 0),
                  e
                );
              if (
                (0 == u
                  ? ((p.length = h), (c = 1), h--)
                  : ((p.length = h + 1),
                    (c = l[14 - u]),
                    (p[h] = f > 0 ? s((a / l[o - f]) % l[f]) * c : 0)),
                t)
              )
                for (;;) {
                  if (0 == h) {
                    for (u = 1, f = p[0]; f >= 10; f /= 10, u++);
                    for (f = p[0] += c, c = 1; f >= 10; f /= 10, c++);
                    u != c && (e.e++, 1e14 == p[0] && (p[0] = 1));
                    break;
                  }
                  if (((p[h] += c), 1e14 != p[h])) break;
                  (p[h--] = 0), (c = 1);
                }
              for (u = p.length; 0 === p[--u]; p.pop());
            }
            e.e > P ? (e.c = e.e = null) : e.e < R && (e.c = [(e.e = 0)]);
          }
          return e;
        }
        function q(e) {
          var r,
            n = e.e;
          return null === n
            ? e.toString()
            : ((r = c(e.c)),
              (r = n <= D || n >= I ? p(r, n) : w(r, n, '0')),
              e.s < 0 ? '-' + r : r);
        }
        return (
          (T.clone = e),
          (T.ROUND_UP = 0),
          (T.ROUND_DOWN = 1),
          (T.ROUND_CEIL = 2),
          (T.ROUND_FLOOR = 3),
          (T.ROUND_HALF_UP = 4),
          (T.ROUND_HALF_DOWN = 5),
          (T.ROUND_HALF_EVEN = 6),
          (T.ROUND_HALF_CEIL = 7),
          (T.ROUND_HALF_FLOOR = 8),
          (T.EUCLID = 9),
          (T.config = T.set =
            function (e) {
              var r, n;
              if (null != e) {
                if ('object' == typeof e) {
                  if (
                    (e.hasOwnProperty((r = 'DECIMAL_PLACES')) &&
                      (h((n = e[r]), 0, 1e9, r), (_ = n)),
                    e.hasOwnProperty((r = 'ROUNDING_MODE')) && (h((n = e[r]), 0, 8, r), (B = n)),
                    e.hasOwnProperty((r = 'EXPONENTIAL_AT')) &&
                      ((n = e[r]) && n.pop
                        ? (h(n[0], -1e9, 0, r), h(n[1], 0, 1e9, r), (D = n[0]), (I = n[1]))
                        : (h(n, -1e9, 1e9, r), (D = -(I = n < 0 ? -n : n)))),
                    e.hasOwnProperty((r = 'RANGE')))
                  ) {
                    if ((n = e[r]) && n.pop)
                      h(n[0], -1e9, -1, r), h(n[1], 1, 1e9, r), (R = n[0]), (P = n[1]);
                    else if ((h(n, -1e9, 1e9, r), n)) R = -(P = n < 0 ? -n : n);
                    else throw Error(o + r + ' cannot be zero: ' + n);
                  }
                  if (e.hasOwnProperty((r = 'CRYPTO'))) {
                    if (!!(n = e[r]) === n) {
                      if (n) {
                        if (
                          'undefined' != typeof crypto &&
                          crypto &&
                          (crypto.getRandomValues || crypto.randomBytes)
                        )
                          C = n;
                        else throw ((C = !n), Error(o + 'crypto unavailable'));
                      } else C = n;
                    } else throw Error(o + r + ' not true or false: ' + n);
                  }
                  if (
                    (e.hasOwnProperty((r = 'MODULO_MODE')) && (h((n = e[r]), 0, 9, r), (L = n)),
                    e.hasOwnProperty((r = 'POW_PRECISION')) && (h((n = e[r]), 0, 1e9, r), (x = n)),
                    e.hasOwnProperty((r = 'FORMAT')))
                  ) {
                    if ('object' == typeof (n = e[r])) U = n;
                    else throw Error(o + r + ' not an object: ' + n);
                  }
                  if (e.hasOwnProperty((r = 'ALPHABET'))) {
                    if ('string' != typeof (n = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(n))
                      throw Error(o + r + ' invalid: ' + n);
                    (M = '0123456789' == n.slice(0, 10)), ($ = n);
                  }
                } else throw Error(o + 'Object expected: ' + e);
              }
              return {
                DECIMAL_PLACES: _,
                ROUNDING_MODE: B,
                EXPONENTIAL_AT: [D, I],
                RANGE: [R, P],
                CRYPTO: C,
                MODULO_MODE: L,
                POW_PRECISION: x,
                FORMAT: U,
                ALPHABET: $,
              };
            }),
          (T.isBigNumber = function (e) {
            if (!e || !0 !== e._isBigNumber) return !1;
            if (!T.DEBUG) return !0;
            var r,
              n,
              t = e.c,
              i = e.e,
              u = e.s;
            e: if ('[object Array]' == {}.toString.call(t)) {
              if ((1 === u || -1 === u) && i >= -1e9 && i <= 1e9 && i === s(i)) {
                if (0 === t[0]) {
                  if (0 === i && 1 === t.length) return !0;
                  break e;
                }
                if (((r = (i + 1) % 14) < 1 && (r += 14), String(t[0]).length == r)) {
                  for (r = 0; r < t.length; r++)
                    if ((n = t[r]) < 0 || n >= 1e14 || n !== s(n)) break e;
                  if (0 !== n) return !0;
                }
              }
            } else if (null === t && null === i && (null === u || 1 === u || -1 === u)) return !0;
            throw Error(o + 'Invalid BigNumber: ' + e);
          }),
          (T.maximum = T.max =
            function () {
              return G(arguments, -1);
            }),
          (T.minimum = T.min =
            function () {
              return G(arguments, 1);
            }),
          (T.random =
            ((n =
              (9007199254740992 * Math.random()) & 2097151
                ? function () {
                    return s(9007199254740992 * Math.random());
                  }
                : function () {
                    return (
                      ((1073741824 * Math.random()) | 0) * 8388608 + ((8388608 * Math.random()) | 0)
                    );
                  }),
            function (e) {
              var r,
                t,
                u,
                f,
                c,
                a = 0,
                g = [],
                p = new T(S);
              if ((null == e ? (e = _) : h(e, 0, 1e9), (f = i(e / 14)), C)) {
                if (crypto.getRandomValues) {
                  for (r = crypto.getRandomValues(new Uint32Array((f *= 2))); a < f; )
                    (c = 131072 * r[a] + (r[a + 1] >>> 11)) >= 9e15
                      ? ((t = crypto.getRandomValues(new Uint32Array(2))),
                        (r[a] = t[0]),
                        (r[a + 1] = t[1]))
                      : (g.push(c % 1e14), (a += 2));
                  a = f / 2;
                } else if (crypto.randomBytes) {
                  for (r = crypto.randomBytes((f *= 7)); a < f; )
                    (c =
                      (31 & r[a]) * 281474976710656 +
                      1099511627776 * r[a + 1] +
                      4294967296 * r[a + 2] +
                      16777216 * r[a + 3] +
                      (r[a + 4] << 16) +
                      (r[a + 5] << 8) +
                      r[a + 6]) >= 9e15
                      ? crypto.randomBytes(7).copy(r, a)
                      : (g.push(c % 1e14), (a += 7));
                  a = f / 7;
                } else throw ((C = !1), Error(o + 'crypto unavailable'));
              }
              if (!C) for (; a < f; ) (c = n()) < 9e15 && (g[a++] = c % 1e14);
              for (
                f = g[--a], e %= 14, f && e && ((c = l[14 - e]), (g[a] = s(f / c) * c));
                0 === g[a];
                g.pop(), a--
              );
              if (a < 0) g = [(u = 0)];
              else {
                for (u = -1; 0 === g[0]; g.splice(0, 1), u -= 14);
                for (a = 1, c = g[0]; c >= 10; c /= 10, a++);
                a < 14 && (u -= 14 - a);
              }
              return (p.e = u), (p.c = g), p;
            })),
          (T.sum = function () {
            for (var e = 1, r = arguments, n = new T(r[0]); e < r.length; ) n = n.plus(r[e++]);
            return n;
          }),
          (E = (function () {
            var e = '0123456789';
            function r(e, r, n, t) {
              for (var i, s, o = [0], u = 0, l = e.length; u < l; ) {
                for (s = o.length; s--; o[s] *= r);
                for (o[0] += t.indexOf(e.charAt(u++)), i = 0; i < o.length; i++)
                  o[i] > n - 1 &&
                    (null == o[i + 1] && (o[i + 1] = 0), (o[i + 1] += (o[i] / n) | 0), (o[i] %= n));
              }
              return o.reverse();
            }
            return function (n, t, i, s, o) {
              var u,
                l,
                f,
                a,
                h,
                g,
                p,
                m,
                d = n.indexOf('.'),
                v = _,
                N = B;
              for (
                d >= 0 &&
                  ((a = x),
                  (x = 0),
                  (n = n.replace('.', '')),
                  (g = (m = new T(t)).pow(n.length - d)),
                  (x = a),
                  (m.c = r(w(c(g.c), g.e, '0'), 10, i, e)),
                  (m.e = m.c.length)),
                  f = a = (p = r(n, t, i, o ? ((u = $), e) : ((u = e), $))).length;
                0 == p[--a];
                p.pop()
              );
              if (!p[0]) return u.charAt(0);
              if (
                (d < 0
                  ? --f
                  : ((g.c = p),
                    (g.e = f),
                    (g.s = s),
                    (p = (g = O(g, m, v, N, i)).c),
                    (h = g.r),
                    (f = g.e)),
                (d = p[(l = f + v + 1)]),
                (a = i / 2),
                (h = h || l < 0 || null != p[l + 1]),
                (h =
                  N < 4
                    ? (null != d || h) && (0 == N || N == (g.s < 0 ? 3 : 2))
                    : d > a ||
                      (d == a &&
                        (4 == N || h || (6 == N && 1 & p[l - 1]) || N == (g.s < 0 ? 8 : 7)))),
                l < 1 || !p[0])
              )
                n = h ? w(u.charAt(1), -v, u.charAt(0)) : u.charAt(0);
              else {
                if (((p.length = l), h))
                  for (--i; ++p[--l] > i; ) (p[l] = 0), l || (++f, (p = [1].concat(p)));
                for (a = p.length; !p[--a]; );
                for (d = 0, n = ''; d <= a; n += u.charAt(p[d++]));
                n = w(n, f, u.charAt(0));
              }
              return n;
            };
          })()),
          (O = (function () {
            function e(e, r, n) {
              var t,
                i,
                s,
                o,
                u = 0,
                l = e.length,
                f = r % 1e7,
                c = (r / 1e7) | 0;
              for (e = e.slice(); l--; )
                (t = c * (s = e[l] % 1e7) + (o = (e[l] / 1e7) | 0) * f),
                  (u = (((i = f * s + (t % 1e7) * 1e7 + u) / n) | 0) + ((t / 1e7) | 0) + c * o),
                  (e[l] = i % n);
              return u && (e = [u].concat(e)), e;
            }
            function r(e, r, n, t) {
              var i, s;
              if (n != t) s = n > t ? 1 : -1;
              else
                for (i = s = 0; i < n; i++)
                  if (e[i] != r[i]) {
                    s = e[i] > r[i] ? 1 : -1;
                    break;
                  }
              return s;
            }
            function n(e, r, n, t) {
              for (var i = 0; n--; )
                (e[n] -= i), (i = e[n] < r[n] ? 1 : 0), (e[n] = i * t + e[n] - r[n]);
              for (; !e[0] && e.length > 1; e.splice(0, 1));
            }
            return function (t, i, o, u, l) {
              var c,
                a,
                h,
                g,
                p,
                w,
                m,
                d,
                v,
                N,
                b,
                O,
                E,
                y,
                A,
                S,
                _,
                B = t.s == i.s ? 1 : -1,
                D = t.c,
                I = i.c;
              if (!D || !D[0] || !I || !I[0])
                return new T(
                  t.s && i.s && (D ? !I || D[0] != I[0] : I)
                    ? (D && 0 == D[0]) || !I
                      ? 0 * B
                      : B / 0
                    : NaN
                );
              for (
                v = (d = new T(B)).c = [],
                  B = o + (a = t.e - i.e) + 1,
                  l || ((l = 1e14), (a = f(t.e / 14) - f(i.e / 14)), (B = (B / 14) | 0)),
                  h = 0;
                I[h] == (D[h] || 0);
                h++
              );
              if ((I[h] > (D[h] || 0) && a--, B < 0)) v.push(1), (g = !0);
              else {
                for (
                  y = D.length,
                    S = I.length,
                    h = 0,
                    B += 2,
                    (p = s(l / (I[0] + 1))) > 1 &&
                      ((I = e(I, p, l)), (D = e(D, p, l)), (S = I.length), (y = D.length)),
                    E = S,
                    b = (N = D.slice(0, S)).length;
                  b < S;
                  N[b++] = 0
                );
                (_ = [0].concat((_ = I.slice()))), (A = I[0]), I[1] >= l / 2 && A++;
                do {
                  if (((p = 0), (c = r(I, N, S, b)) < 0)) {
                    if (((O = N[0]), S != b && (O = O * l + (N[1] || 0)), (p = s(O / A)) > 1))
                      for (
                        p >= l && (p = l - 1), m = (w = e(I, p, l)).length, b = N.length;
                        1 == r(w, N, m, b);

                      )
                        p--, n(w, S < m ? _ : I, m, l), (m = w.length), (c = 1);
                    else 0 == p && (c = p = 1), (m = (w = I.slice()).length);
                    if ((m < b && (w = [0].concat(w)), n(N, w, b, l), (b = N.length), -1 == c))
                      for (; 1 > r(I, N, S, b); ) p++, n(N, S < b ? _ : I, b, l), (b = N.length);
                  } else 0 === c && (p++, (N = [0]));
                  (v[h++] = p), N[0] ? (N[b++] = D[E] || 0) : ((N = [D[E]]), (b = 1));
                } while ((E++ < y || null != N[0]) && B--);
                (g = null != N[0]), v[0] || v.splice(0, 1);
              }
              if (1e14 == l) {
                for (h = 1, B = v[0]; B >= 10; B /= 10, h++);
                j(d, o + (d.e = h + 14 * a - 1) + 1, u, g);
              } else (d.e = a), (d.r = +g);
              return d;
            };
          })()),
          (m = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
          (d = /^([^.]+)\.$/),
          (v = /^\.([^.]+)$/),
          (N = /^-?(Infinity|NaN)$/),
          (b = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
          (y = function (e, r, n, t) {
            var i,
              s = n ? r : r.replace(b, '');
            if (N.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1;
            else {
              if (
                !n &&
                ((s = s.replace(m, function (e, r, n) {
                  return (
                    (i = 'x' == (n = n.toLowerCase()) ? 16 : 'b' == n ? 2 : 8), t && t != i ? e : r
                  );
                })),
                t && ((i = t), (s = s.replace(d, '$1').replace(v, '0.$1'))),
                r != s)
              )
                return new T(s, i);
              if (T.DEBUG) throw Error(o + 'Not a' + (t ? ' base ' + t : '') + ' number: ' + r);
              e.s = null;
            }
            e.c = e.e = null;
          }),
          (A.absoluteValue = A.abs =
            function () {
              var e = new T(this);
              return e.s < 0 && (e.s = 1), e;
            }),
          (A.comparedTo = function (e, r) {
            return a(this, new T(e, r));
          }),
          (A.decimalPlaces = A.dp =
            function (e, r) {
              var n, t, i;
              if (null != e)
                return (
                  h(e, 0, 1e9), null == r ? (r = B) : h(r, 0, 8), j(new T(this), e + this.e + 1, r)
                );
              if (!(n = this.c)) return null;
              if (((t = ((i = n.length - 1) - f(this.e / 14)) * 14), (i = n[i])))
                for (; i % 10 == 0; i /= 10, t--);
              return t < 0 && (t = 0), t;
            }),
          (A.dividedBy = A.div =
            function (e, r) {
              return O(this, new T(e, r), _, B);
            }),
          (A.dividedToIntegerBy = A.idiv =
            function (e, r) {
              return O(this, new T(e, r), 0, 1);
            }),
          (A.exponentiatedBy = A.pow =
            function (e, r) {
              var n,
                t,
                u,
                l,
                f,
                c,
                a,
                h,
                p,
                w = this;
              if ((e = new T(e)).c && !e.isInteger())
                throw Error(o + 'Exponent not an integer: ' + q(e));
              if (
                (null != r && (r = new T(r)),
                (c = e.e > 14),
                !w.c || !w.c[0] || (1 == w.c[0] && !w.e && 1 == w.c.length) || !e.c || !e.c[0])
              )
                return (p = new T(Math.pow(+q(w), c ? e.s * (2 - g(e)) : +q(e)))), r ? p.mod(r) : p;
              if (((a = e.s < 0), r)) {
                if (r.c ? !r.c[0] : !r.s) return new T(NaN);
                (t = !a && w.isInteger() && r.isInteger()) && (w = w.mod(r));
              } else {
                if (
                  e.e > 9 &&
                  (w.e > 0 ||
                    w.e < -1 ||
                    (0 == w.e
                      ? w.c[0] > 1 || (c && w.c[1] >= 24e7)
                      : w.c[0] < 8e13 || (c && w.c[0] <= 9999975e7)))
                )
                  return (
                    (l = w.s < 0 && g(e) ? -0 : 0), w.e > -1 && (l = 1 / l), new T(a ? 1 / l : l)
                  );
                x && (l = i(x / 14 + 2));
              }
              for (
                c
                  ? ((n = new T(0.5)), a && (e.s = 1), (h = g(e)))
                  : (h = (u = Math.abs(+q(e))) % 2),
                  p = new T(S);
                ;

              ) {
                if (h) {
                  if (!(p = p.times(w)).c) break;
                  l ? p.c.length > l && (p.c.length = l) : t && (p = p.mod(r));
                }
                if (u) {
                  if (0 === (u = s(u / 2))) break;
                  h = u % 2;
                } else if ((j((e = e.times(n)), e.e + 1, 1), e.e > 14)) h = g(e);
                else {
                  if (0 == (u = +q(e))) break;
                  h = u % 2;
                }
                (w = w.times(w)),
                  l ? w.c && w.c.length > l && (w.c.length = l) : t && (w = w.mod(r));
              }
              return t ? p : (a && (p = S.div(p)), r ? p.mod(r) : l ? j(p, x, B, f) : p);
            }),
          (A.integerValue = function (e) {
            var r = new T(this);
            return null == e ? (e = B) : h(e, 0, 8), j(r, r.e + 1, e);
          }),
          (A.isEqualTo = A.eq =
            function (e, r) {
              return 0 === a(this, new T(e, r));
            }),
          (A.isFinite = function () {
            return !!this.c;
          }),
          (A.isGreaterThan = A.gt =
            function (e, r) {
              return a(this, new T(e, r)) > 0;
            }),
          (A.isGreaterThanOrEqualTo = A.gte =
            function (e, r) {
              return 1 === (r = a(this, new T(e, r))) || 0 === r;
            }),
          (A.isInteger = function () {
            return !!this.c && f(this.e / 14) > this.c.length - 2;
          }),
          (A.isLessThan = A.lt =
            function (e, r) {
              return 0 > a(this, new T(e, r));
            }),
          (A.isLessThanOrEqualTo = A.lte =
            function (e, r) {
              return -1 === (r = a(this, new T(e, r))) || 0 === r;
            }),
          (A.isNaN = function () {
            return !this.s;
          }),
          (A.isNegative = function () {
            return this.s < 0;
          }),
          (A.isPositive = function () {
            return this.s > 0;
          }),
          (A.isZero = function () {
            return !!this.c && 0 == this.c[0];
          }),
          (A.minus = function (e, r) {
            var n,
              t,
              i,
              s,
              o = this.s;
            if (((r = (e = new T(e, r)).s), !o || !r)) return new T(NaN);
            if (o != r) return (e.s = -r), this.plus(e);
            var u = this.e / 14,
              l = e.e / 14,
              c = this.c,
              a = e.c;
            if (!u || !l) {
              if (!c || !a) return c ? ((e.s = -r), e) : new T(a ? this : NaN);
              if (!c[0] || !a[0])
                return a[0] ? ((e.s = -r), e) : new T(c[0] ? this : 3 == B ? -0 : 0);
            }
            if (((u = f(u)), (l = f(l)), (c = c.slice()), (o = u - l))) {
              for (
                (s = o < 0) ? ((o = -o), (i = c)) : ((l = u), (i = a)), i.reverse(), r = o;
                r--;
                i.push(0)
              );
              i.reverse();
            } else
              for (t = (s = (o = c.length) < (r = a.length)) ? o : r, o = r = 0; r < t; r++)
                if (c[r] != a[r]) {
                  s = c[r] < a[r];
                  break;
                }
            if (
              (s && ((i = c), (c = a), (a = i), (e.s = -e.s)),
              (r = (t = a.length) - (n = c.length)) > 0)
            )
              for (; r--; c[n++] = 0);
            for (r = 1e14 - 1; t > o; ) {
              if (c[--t] < a[t]) {
                for (n = t; n && !c[--n]; c[n] = r);
                --c[n], (c[t] += 1e14);
              }
              c[t] -= a[t];
            }
            for (; 0 == c[0]; c.splice(0, 1), --l);
            return c[0] ? F(e, c, l) : ((e.s = 3 == B ? -1 : 1), (e.c = [(e.e = 0)]), e);
          }),
          (A.modulo = A.mod =
            function (e, r) {
              var n, t;
              return ((e = new T(e, r)), this.c && e.s && (!e.c || e.c[0]))
                ? e.c && (!this.c || this.c[0])
                  ? (9 == L
                      ? ((t = e.s), (e.s = 1), (n = O(this, e, 0, 3)), (e.s = t), (n.s *= t))
                      : (n = O(this, e, 0, L)),
                    (e = this.minus(n.times(e))).c[0] || 1 != L || (e.s = this.s),
                    e)
                  : new T(this)
                : new T(NaN);
            }),
          (A.multipliedBy = A.times =
            function (e, r) {
              var n,
                t,
                i,
                s,
                o,
                u,
                l,
                c,
                a,
                h,
                g,
                p,
                w,
                m = this.c,
                d = (e = new T(e, r)).c;
              if (!m || !d || !m[0] || !d[0])
                return (
                  this.s && e.s && (!m || m[0] || d) && (!d || d[0] || m)
                    ? ((e.s *= this.s), m && d ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null))
                    : (e.c = e.e = e.s = null),
                  e
                );
              for (
                t = f(this.e / 14) + f(e.e / 14),
                  e.s *= this.s,
                  (l = m.length) < (h = d.length) &&
                    ((w = m), (m = d), (d = w), (i = l), (l = h), (h = i)),
                  i = l + h,
                  w = [];
                i--;
                w.push(0)
              );
              for (i = h; --i >= 0; ) {
                for (n = 0, g = d[i] % 1e7, p = (d[i] / 1e7) | 0, s = i + (o = l); s > i; )
                  (u = p * (c = m[--o] % 1e7) + (a = (m[o] / 1e7) | 0) * g),
                    (n =
                      (((c = g * c + (u % 1e7) * 1e7 + w[s] + n) / 1e14) | 0) +
                      ((u / 1e7) | 0) +
                      p * a),
                    (w[s--] = c % 1e14);
                w[s] = n;
              }
              return n ? ++t : w.splice(0, 1), F(e, w, t);
            }),
          (A.negated = function () {
            var e = new T(this);
            return (e.s = -e.s || null), e;
          }),
          (A.plus = function (e, r) {
            var n,
              t = this.s;
            if (((r = (e = new T(e, r)).s), !t || !r)) return new T(NaN);
            if (t != r) return (e.s = -r), this.minus(e);
            var i = this.e / 14,
              s = e.e / 14,
              o = this.c,
              u = e.c;
            if (!i || !s) {
              if (!o || !u) return new T(t / 0);
              if (!o[0] || !u[0]) return u[0] ? e : new T(o[0] ? this : 0 * t);
            }
            if (((i = f(i)), (s = f(s)), (o = o.slice()), (t = i - s))) {
              for (t > 0 ? ((s = i), (n = u)) : ((t = -t), (n = o)), n.reverse(); t--; n.push(0));
              n.reverse();
            }
            for (
              (t = o.length) - (r = u.length) < 0 && ((n = u), (u = o), (o = n), (r = t)), t = 0;
              r;

            )
              (t = ((o[--r] = o[r] + u[r] + t) / 1e14) | 0),
                (o[r] = 1e14 === o[r] ? 0 : o[r] % 1e14);
            return t && ((o = [t].concat(o)), ++s), F(e, o, s);
          }),
          (A.precision = A.sd =
            function (e, r) {
              var n, t, i;
              if (null != e && !!e !== e)
                return h(e, 1, 1e9), null == r ? (r = B) : h(r, 0, 8), j(new T(this), e, r);
              if (!(n = this.c)) return null;
              if (((t = 14 * (i = n.length - 1) + 1), (i = n[i]))) {
                for (; i % 10 == 0; i /= 10, t--);
                for (i = n[0]; i >= 10; i /= 10, t++);
              }
              return e && this.e + 1 > t && (t = this.e + 1), t;
            }),
          (A.shiftedBy = function (e) {
            return h(e, -9007199254740991, 9007199254740991), this.times('1e' + e);
          }),
          (A.squareRoot = A.sqrt =
            function () {
              var e,
                r,
                n,
                t,
                i,
                s = this.c,
                o = this.s,
                u = this.e,
                l = _ + 4,
                a = new T('0.5');
              if (1 !== o || !s || !s[0])
                return new T(!o || (o < 0 && (!s || s[0])) ? NaN : s ? this : 1 / 0);
              if (
                (0 == (o = Math.sqrt(+q(this))) || o == 1 / 0
                  ? (((r = c(s)).length + u) % 2 == 0 && (r += '0'),
                    (o = Math.sqrt(+r)),
                    (u = f((u + 1) / 2) - (u < 0 || u % 2)),
                    (n = new T(
                      (r =
                        o == 1 / 0
                          ? '5e' + u
                          : (r = o.toExponential()).slice(0, r.indexOf('e') + 1) + u)
                    )))
                  : (n = new T(o + '')),
                n.c[0])
              ) {
                for ((o = (u = n.e) + l) < 3 && (o = 0); ; )
                  if (
                    ((i = n),
                    (n = a.times(i.plus(O(this, i, l, 1)))),
                    c(i.c).slice(0, o) === (r = c(n.c)).slice(0, o))
                  ) {
                    if (
                      (n.e < u && --o, '9999' != (r = r.slice(o - 3, o + 1)) && (t || '4999' != r))
                    ) {
                      (+r && (+r.slice(1) || '5' != r.charAt(0))) ||
                        (j(n, n.e + _ + 2, 1), (e = !n.times(n).eq(this)));
                      break;
                    }
                    if (!t && (j(i, i.e + _ + 2, 0), i.times(i).eq(this))) {
                      n = i;
                      break;
                    }
                    (l += 4), (o += 4), (t = 1);
                  }
              }
              return j(n, n.e + _ + 1, B, e);
            }),
          (A.toExponential = function (e, r) {
            return null != e && (h(e, 0, 1e9), e++), k(this, e, r, 1);
          }),
          (A.toFixed = function (e, r) {
            return null != e && (h(e, 0, 1e9), (e = e + this.e + 1)), k(this, e, r);
          }),
          (A.toFormat = function (e, r, n) {
            var t;
            if (null == n)
              null != e && r && 'object' == typeof r
                ? ((n = r), (r = null))
                : e && 'object' == typeof e
                  ? ((n = e), (e = r = null))
                  : (n = U);
            else if ('object' != typeof n) throw Error(o + 'Argument not an object: ' + n);
            if (((t = this.toFixed(e, r)), this.c)) {
              var i,
                s = t.split('.'),
                u = +n.groupSize,
                l = +n.secondaryGroupSize,
                f = n.groupSeparator || '',
                c = s[0],
                a = s[1],
                h = this.s < 0,
                g = h ? c.slice(1) : c,
                p = g.length;
              if ((l && ((i = u), (u = l), (l = i), (p -= i)), u > 0 && p > 0)) {
                for (i = p % u || u, c = g.substr(0, i); i < p; i += u) c += f + g.substr(i, u);
                l > 0 && (c += f + g.slice(i)), h && (c = '-' + c);
              }
              t = a
                ? c +
                  (n.decimalSeparator || '') +
                  ((l = +n.fractionGroupSize)
                    ? a.replace(
                        RegExp('\\d{' + l + '}\\B', 'g'),
                        '$&' + (n.fractionGroupSeparator || '')
                      )
                    : a)
                : c;
            }
            return (n.prefix || '') + t + (n.suffix || '');
          }),
          (A.toFraction = function (e) {
            var r,
              n,
              t,
              i,
              s,
              u,
              f,
              a,
              h,
              g,
              p,
              w,
              m = this.c;
            if (null != e && ((!(f = new T(e)).isInteger() && (f.c || 1 !== f.s)) || f.lt(S)))
              throw Error(
                o + 'Argument ' + (f.isInteger() ? 'out of range: ' : 'not an integer: ') + q(f)
              );
            if (!m) return new T(this);
            for (
              r = new T(S),
                h = n = new T(S),
                t = a = new T(S),
                w = c(m),
                s = r.e = w.length - this.e - 1,
                r.c[0] = l[(u = s % 14) < 0 ? 14 + u : u],
                e = !e || f.comparedTo(r) > 0 ? (s > 0 ? r : h) : f,
                u = P,
                P = 1 / 0,
                f = new T(w),
                a.c[0] = 0;
              (g = O(f, r, 0, 1)), 1 != (i = n.plus(g.times(t))).comparedTo(e);

            )
              (n = t),
                (t = i),
                (h = a.plus(g.times((i = h)))),
                (a = i),
                (r = f.minus(g.times((i = r)))),
                (f = i);
            return (
              (i = O(e.minus(n), t, 0, 1)),
              (a = a.plus(i.times(h))),
              (n = n.plus(i.times(t))),
              (a.s = h.s = this.s),
              (s *= 2),
              (p =
                1 >
                O(h, t, s, B)
                  .minus(this)
                  .abs()
                  .comparedTo(O(a, n, s, B).minus(this).abs())
                  ? [h, t]
                  : [a, n]),
              (P = u),
              p
            );
          }),
          (A.toNumber = function () {
            return +q(this);
          }),
          (A.toPrecision = function (e, r) {
            return null != e && h(e, 1, 1e9), k(this, e, r, 2);
          }),
          (A.toString = function (e) {
            var r,
              n = this,
              t = n.s,
              i = n.e;
            return (
              null === i
                ? t
                  ? ((r = 'Infinity'), t < 0 && (r = '-' + r))
                  : (r = 'NaN')
                : (null == e
                    ? (r = i <= D || i >= I ? p(c(n.c), i) : w(c(n.c), i, '0'))
                    : 10 === e && M
                      ? (r = w(c((n = j(new T(n), _ + i + 1, B)).c), n.e, '0'))
                      : (h(e, 2, $.length, 'Base'), (r = E(w(c(n.c), i, '0'), 10, e, t, !0))),
                  t < 0 && n.c[0] && (r = '-' + r)),
              r
            );
          }),
          (A.valueOf = A.toJSON =
            function () {
              return q(this);
            }),
          (A._isBigNumber = !0),
          (A[Symbol.toStringTag] = 'BigNumber'),
          (A[Symbol.for('nodejs.util.inspect.custom')] = A.valueOf),
          null != r && T.set(r),
          T
        );
      })();
      r.Z = m;
    },
    84699: function (e, r, n) {
      n.d(r, {
        v: function () {
          return s;
        },
      });
      var t = n(77854);
      class i extends t.G {
        constructor({ value: e }) {
          super(`Number \`${e}\` is not a valid decimal number.`, {
            name: 'InvalidDecimalNumberError',
          });
        }
      }
      function s(e, r) {
        if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new i({ value: e });
        let [n, t = '0'] = e.split('.'),
          s = n.startsWith('-');
        if ((s && (n = n.slice(1)), (t = t.replace(/(0+)$/, '')), 0 === r))
          1 === Math.round(Number(`.${t}`)) && (n = `${BigInt(n) + 1n}`), (t = '');
        else if (t.length > r) {
          let [e, i, s] = [t.slice(0, r - 1), t.slice(r - 1, r), t.slice(r)],
            o = Math.round(Number(`${i}.${s}`));
          (t = o > 9 ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, '0') : `${e}${o}`)
            .length > r && ((t = t.slice(1)), (n = `${BigInt(n) + 1n}`)),
            (t = t.slice(0, r));
        } else t = t.padEnd(r, '0');
        return BigInt(`${s ? '-' : ''}${n}${t}`);
      }
    },
  },
]);
