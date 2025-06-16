var ot = Object.freeze,
  lt = Object.defineProperty,
  Ii = Object.defineProperties;
var Mi = Object.getOwnPropertyDescriptors;
var at = Object.getOwnPropertySymbols;
var Si = Object.prototype.hasOwnProperty,
  Bi = Object.prototype.propertyIsEnumerable;
var st = (o, e, t) =>
    e in o ? lt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (o[e] = t),
  te = (o, e) => {
    for (var t in e || (e = {})) Si.call(e, t) && st(o, t, e[t]);
    if (at) for (var t of at(e)) Bi.call(e, t) && st(o, t, e[t]);
    return o;
  },
  Ve = (o, e) => Ii(o, Mi(e));
var O = (o, e) => ot(lt(o, 'raw', { value: ot(e || o.slice()) }));
import {
  e as ui,
  i as gi,
  A as dt,
  t as mi,
  T as xi,
  a as se,
  n as M,
  b as ee,
  r as ct,
  s as le,
  c as de,
  x as X,
} from './directive-Ci1hrz3f.js';
import { bd as Fi, ey as Ni, ez as Oi, eA as Di, eB as Ti } from './vendor-BCNtwJ5j.js';
(function () {
  try {
    var o =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new o.Error().stack;
    e &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[e] = '5187451c-b801-47fb-b9d6-efc6f90ef922'),
      (o._sentryDebugIdIdentifier = 'sentry-dbid-5187451c-b801-47fb-b9d6-efc6f90ef922'));
  } catch (t) {}
})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Hi =
  ({ finisher: o, descriptor: e }) =>
  (t, i) => {
    var r;
    if (i === void 0) {
      const l = (r = t.originalKey) !== null && r !== void 0 ? r : t.key,
        c =
          e != null
            ? { kind: 'method', placement: 'prototype', key: l, descriptor: e(t.key) }
            : Ve(te({}, t), { key: l });
      return (
        o != null &&
          (c.finisher = function (_) {
            o(_, l);
          }),
        c
      );
    }
    {
      const l = t.constructor;
      e !== void 0 && Object.defineProperty(t, i, e(i)), o == null || o(l, i);
    }
  };
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function ht(o, e) {
  return Hi({
    descriptor: (t) => ({
      get() {
        var r, l;
        return (l =
          (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(o)) !== null &&
          l !== void 0
          ? l
          : null;
      },
      enumerable: !0,
      configurable: !0,
    }),
  });
}
var yi = { exports: {} };
(function (o, e) {
  var t = (function () {
    var i = function ($, a) {
      var g = 236,
        y = 17,
        h = $,
        v = l[a],
        s = null,
        n = 0,
        b = null,
        x = [],
        w = {},
        T = function (p, f) {
          (n = h * 4 + 17),
            (s = (function (d) {
              for (var u = new Array(d), m = 0; m < d; m += 1) {
                u[m] = new Array(d);
                for (var k = 0; k < d; k += 1) u[m][k] = null;
              }
              return u;
            })(n)),
            H(0, 0),
            H(n - 7, 0),
            H(0, n - 7),
            J(),
            G(),
            ue(p, f),
            h >= 7 && he(p),
            b == null && (b = _i(h, v, x)),
            ge(b, f);
        },
        H = function (p, f) {
          for (var d = -1; d <= 7; d += 1)
            if (!(p + d <= -1 || n <= p + d))
              for (var u = -1; u <= 7; u += 1)
                f + u <= -1 ||
                  n <= f + u ||
                  ((0 <= d && d <= 6 && (u == 0 || u == 6)) ||
                  (0 <= u && u <= 6 && (d == 0 || d == 6)) ||
                  (2 <= d && d <= 4 && 2 <= u && u <= 4)
                    ? (s[p + d][f + u] = !0)
                    : (s[p + d][f + u] = !1));
        },
        R = function () {
          for (var p = 0, f = 0, d = 0; d < 8; d += 1) {
            T(!0, d);
            var u = _.getLostPoint(w);
            (d == 0 || p > u) && ((p = u), (f = d));
          }
          return f;
        },
        G = function () {
          for (var p = 8; p < n - 8; p += 1) s[p][6] == null && (s[p][6] = p % 2 == 0);
          for (var f = 8; f < n - 8; f += 1) s[6][f] == null && (s[6][f] = f % 2 == 0);
        },
        J = function () {
          for (var p = _.getPatternPosition(h), f = 0; f < p.length; f += 1)
            for (var d = 0; d < p.length; d += 1) {
              var u = p[f],
                m = p[d];
              if (s[u][m] == null)
                for (var k = -2; k <= 2; k += 1)
                  for (var B = -2; B <= 2; B += 1)
                    k == -2 || k == 2 || B == -2 || B == 2 || (k == 0 && B == 0)
                      ? (s[u + k][m + B] = !0)
                      : (s[u + k][m + B] = !1);
            }
        },
        he = function (p) {
          for (var f = _.getBCHTypeNumber(h), d = 0; d < 18; d += 1) {
            var u = !p && ((f >> d) & 1) == 1;
            s[Math.floor(d / 3)][(d % 3) + n - 8 - 3] = u;
          }
          for (var d = 0; d < 18; d += 1) {
            var u = !p && ((f >> d) & 1) == 1;
            s[(d % 3) + n - 8 - 3][Math.floor(d / 3)] = u;
          }
        },
        ue = function (p, f) {
          for (var d = (v << 3) | f, u = _.getBCHTypeInfo(d), m = 0; m < 15; m += 1) {
            var k = !p && ((u >> m) & 1) == 1;
            m < 6 ? (s[m][8] = k) : m < 8 ? (s[m + 1][8] = k) : (s[n - 15 + m][8] = k);
          }
          for (var m = 0; m < 15; m += 1) {
            var k = !p && ((u >> m) & 1) == 1;
            m < 8
              ? (s[8][n - m - 1] = k)
              : m < 9
                ? (s[8][15 - m - 1 + 1] = k)
                : (s[8][15 - m - 1] = k);
          }
          s[n - 8][8] = !p;
        },
        ge = function (p, f) {
          for (
            var d = -1, u = n - 1, m = 7, k = 0, B = _.getMaskFunction(f), S = n - 1;
            S > 0;
            S -= 2
          )
            for (S == 6 && (S -= 1); ; ) {
              for (var V = 0; V < 2; V += 1)
                if (s[u][S - V] == null) {
                  var q = !1;
                  k < p.length && (q = ((p[k] >>> m) & 1) == 1);
                  var N = B(u, S - V);
                  N && (q = !q), (s[u][S - V] = q), (m -= 1), m == -1 && ((k += 1), (m = 7));
                }
              if (((u += d), u < 0 || n <= u)) {
                (u -= d), (d = -d);
                break;
              }
            }
        },
        ke = function (p, f) {
          for (
            var d = 0, u = 0, m = 0, k = new Array(f.length), B = new Array(f.length), S = 0;
            S < f.length;
            S += 1
          ) {
            var V = f[S].dataCount,
              q = f[S].totalCount - V;
            (u = Math.max(u, V)), (m = Math.max(m, q)), (k[S] = new Array(V));
            for (var N = 0; N < k[S].length; N += 1) k[S][N] = 255 & p.getBuffer()[N + d];
            d += V;
            var ie = _.getErrorCorrectPolynomial(q),
              ne = I(k[S], ie.getLength() - 1),
              it = ne.mod(ie);
            B[S] = new Array(ie.getLength() - 1);
            for (var N = 0; N < B[S].length; N += 1) {
              var nt = N + it.getLength() - B[S].length;
              B[S][N] = nt >= 0 ? it.getAt(nt) : 0;
            }
          }
          for (var rt = 0, N = 0; N < f.length; N += 1) rt += f[N].totalCount;
          for (var Re = new Array(rt), Te = 0, N = 0; N < u; N += 1)
            for (var S = 0; S < f.length; S += 1)
              N < k[S].length && ((Re[Te] = k[S][N]), (Te += 1));
          for (var N = 0; N < m; N += 1)
            for (var S = 0; S < f.length; S += 1)
              N < B[S].length && ((Re[Te] = B[S][N]), (Te += 1));
          return Re;
        },
        _i = function (p, f, d) {
          for (var u = P.getRSBlocks(p, f), m = F(), k = 0; k < d.length; k += 1) {
            var B = d[k];
            m.put(B.getMode(), 4),
              m.put(B.getLength(), _.getLengthInBits(B.getMode(), p)),
              B.write(m);
          }
          for (var S = 0, k = 0; k < u.length; k += 1) S += u[k].dataCount;
          if (m.getLengthInBits() > S * 8)
            throw 'code length overflow. (' + m.getLengthInBits() + '>' + S * 8 + ')';
          for (m.getLengthInBits() + 4 <= S * 8 && m.put(0, 4); m.getLengthInBits() % 8 != 0; )
            m.putBit(!1);
          for (; !(m.getLengthInBits() >= S * 8 || (m.put(g, 8), m.getLengthInBits() >= S * 8)); )
            m.put(y, 8);
          return ke(m, u);
        };
      (w.addData = function (p, f) {
        f = f || 'Byte';
        var d = null;
        switch (f) {
          case 'Numeric':
            d = W(p);
            break;
          case 'Alphanumeric':
            d = D(p);
            break;
          case 'Byte':
            d = L(p);
            break;
          case 'Kanji':
            d = z(p);
            break;
          default:
            throw 'mode:' + f;
        }
        x.push(d), (b = null);
      }),
        (w.isDark = function (p, f) {
          if (p < 0 || n <= p || f < 0 || n <= f) throw p + ',' + f;
          return s[p][f];
        }),
        (w.getModuleCount = function () {
          return n;
        }),
        (w.make = function () {
          if (h < 1) {
            for (var p = 1; p < 40; p++) {
              for (var f = P.getRSBlocks(p, v), d = F(), u = 0; u < x.length; u++) {
                var m = x[u];
                d.put(m.getMode(), 4),
                  d.put(m.getLength(), _.getLengthInBits(m.getMode(), p)),
                  m.write(d);
              }
              for (var k = 0, u = 0; u < f.length; u++) k += f[u].dataCount;
              if (d.getLengthInBits() <= k * 8) break;
            }
            h = p;
          }
          T(!1, R());
        }),
        (w.createTableTag = function (p, f) {
          (p = p || 2), (f = typeof f > 'u' ? p * 4 : f);
          var d = '';
          (d += '<table style="'),
            (d += ' border-width: 0px; border-style: none;'),
            (d += ' border-collapse: collapse;'),
            (d += ' padding: 0px; margin: ' + f + 'px;'),
            (d += '">'),
            (d += '<tbody>');
          for (var u = 0; u < w.getModuleCount(); u += 1) {
            d += '<tr>';
            for (var m = 0; m < w.getModuleCount(); m += 1)
              (d += '<td style="'),
                (d += ' border-width: 0px; border-style: none;'),
                (d += ' border-collapse: collapse;'),
                (d += ' padding: 0px; margin: 0px;'),
                (d += ' width: ' + p + 'px;'),
                (d += ' height: ' + p + 'px;'),
                (d += ' background-color: '),
                (d += w.isDark(u, m) ? '#000000' : '#ffffff'),
                (d += ';'),
                (d += '"/>');
            d += '</tr>';
          }
          return (d += '</tbody>'), (d += '</table>'), d;
        }),
        (w.createSvgTag = function (p, f, d, u) {
          var m = {};
          typeof arguments[0] == 'object' &&
            ((m = arguments[0]), (p = m.cellSize), (f = m.margin), (d = m.alt), (u = m.title)),
            (p = p || 2),
            (f = typeof f > 'u' ? p * 4 : f),
            (d = typeof d == 'string' ? { text: d } : d || {}),
            (d.text = d.text || null),
            (d.id = d.text ? d.id || 'qrcode-description' : null),
            (u = typeof u == 'string' ? { text: u } : u || {}),
            (u.text = u.text || null),
            (u.id = u.text ? u.id || 'qrcode-title' : null);
          var k = w.getModuleCount() * p + f * 2,
            B,
            S,
            V,
            q,
            N = '',
            ie;
          for (
            ie = 'l' + p + ',0 0,' + p + ' -' + p + ',0 0,-' + p + 'z ',
              N += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
              N += m.scalable ? '' : ' width="' + k + 'px" height="' + k + 'px"',
              N += ' viewBox="0 0 ' + k + ' ' + k + '" ',
              N += ' preserveAspectRatio="xMinYMin meet"',
              N +=
                u.text || d.text
                  ? ' role="img" aria-labelledby="' + Ie([u.id, d.id].join(' ').trim()) + '"'
                  : '',
              N += '>',
              N += u.text ? '<title id="' + Ie(u.id) + '">' + Ie(u.text) + '</title>' : '',
              N += d.text
                ? '<description id="' + Ie(d.id) + '">' + Ie(d.text) + '</description>'
                : '',
              N += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
              N += '<path d="',
              V = 0;
            V < w.getModuleCount();
            V += 1
          )
            for (q = V * p + f, B = 0; B < w.getModuleCount(); B += 1)
              w.isDark(V, B) && ((S = B * p + f), (N += 'M' + S + ',' + q + ie));
          return (N += '" stroke="transparent" fill="black"/>'), (N += '</svg>'), N;
        }),
        (w.createDataURL = function (p, f) {
          (p = p || 2), (f = typeof f > 'u' ? p * 4 : f);
          var d = w.getModuleCount() * p + f * 2,
            u = f,
            m = d - f;
          return U(d, d, function (k, B) {
            if (u <= k && k < m && u <= B && B < m) {
              var S = Math.floor((k - u) / p),
                V = Math.floor((B - u) / p);
              return w.isDark(V, S) ? 0 : 1;
            } else return 1;
          });
        }),
        (w.createImgTag = function (p, f, d) {
          (p = p || 2), (f = typeof f > 'u' ? p * 4 : f);
          var u = w.getModuleCount() * p + f * 2,
            m = '';
          return (
            (m += '<img'),
            (m += ' src="'),
            (m += w.createDataURL(p, f)),
            (m += '"'),
            (m += ' width="'),
            (m += u),
            (m += '"'),
            (m += ' height="'),
            (m += u),
            (m += '"'),
            d && ((m += ' alt="'), (m += Ie(d)), (m += '"')),
            (m += '/>'),
            m
          );
        });
      var Ie = function (p) {
          for (var f = '', d = 0; d < p.length; d += 1) {
            var u = p.charAt(d);
            switch (u) {
              case '<':
                f += '&lt;';
                break;
              case '>':
                f += '&gt;';
                break;
              case '&':
                f += '&amp;';
                break;
              case '"':
                f += '&quot;';
                break;
              default:
                f += u;
                break;
            }
          }
          return f;
        },
        ki = function (p) {
          var f = 1;
          p = typeof p > 'u' ? f * 2 : p;
          var d = w.getModuleCount() * f + p * 2,
            u = p,
            m = d - p,
            k,
            B,
            S,
            V,
            q,
            N = { '██': '█', '█ ': '▀', ' █': '▄', '  ': ' ' },
            ie = { '██': '▀', '█ ': '▀', ' █': ' ', '  ': ' ' },
            ne = '';
          for (k = 0; k < d; k += 2) {
            for (S = Math.floor((k - u) / f), V = Math.floor((k + 1 - u) / f), B = 0; B < d; B += 1)
              (q = '█'),
                u <= B &&
                  B < m &&
                  u <= k &&
                  k < m &&
                  w.isDark(S, Math.floor((B - u) / f)) &&
                  (q = ' '),
                u <= B && B < m && u <= k + 1 && k + 1 < m && w.isDark(V, Math.floor((B - u) / f))
                  ? (q += ' ')
                  : (q += '█'),
                (ne += p < 1 && k + 1 >= m ? ie[q] : N[q]);
            ne += '\n';
          }
          return d % 2 && p > 0
            ? ne.substring(0, ne.length - d - 1) + Array(d + 1).join('▀')
            : ne.substring(0, ne.length - 1);
        };
      return (
        (w.createASCII = function (p, f) {
          if (((p = p || 1), p < 2)) return ki(f);
          (p -= 1), (f = typeof f > 'u' ? p * 2 : f);
          var d = w.getModuleCount() * p + f * 2,
            u = f,
            m = d - f,
            k,
            B,
            S,
            V,
            q = Array(p + 1).join('██'),
            N = Array(p + 1).join('  '),
            ie = '',
            ne = '';
          for (k = 0; k < d; k += 1) {
            for (S = Math.floor((k - u) / p), ne = '', B = 0; B < d; B += 1)
              (V = 1),
                u <= B &&
                  B < m &&
                  u <= k &&
                  k < m &&
                  w.isDark(S, Math.floor((B - u) / p)) &&
                  (V = 0),
                (ne += V ? q : N);
            for (S = 0; S < p; S += 1) ie += ne + '\n';
          }
          return ie.substring(0, ie.length - 1);
        }),
        (w.renderTo2dContext = function (p, f) {
          f = f || 2;
          for (var d = w.getModuleCount(), u = 0; u < d; u++)
            for (var m = 0; m < d; m++)
              (p.fillStyle = w.isDark(u, m) ? 'black' : 'white'), p.fillRect(u * f, m * f, f, f);
        }),
        w
      );
    };
    (i.stringToBytesFuncs = {
      default: function ($) {
        for (var a = [], g = 0; g < $.length; g += 1) {
          var y = $.charCodeAt(g);
          a.push(y & 255);
        }
        return a;
      },
    }),
      (i.stringToBytes = i.stringToBytesFuncs.default),
      (i.createStringToBytes = function ($, a) {
        var g = (function () {
            for (
              var h = Q($),
                v = function () {
                  var G = h.read();
                  if (G == -1) throw 'eof';
                  return G;
                },
                s = 0,
                n = {};
              ;

            ) {
              var b = h.read();
              if (b == -1) break;
              var x = v(),
                w = v(),
                T = v(),
                H = String.fromCharCode((b << 8) | x),
                R = (w << 8) | T;
              (n[H] = R), (s += 1);
            }
            if (s != a) throw s + ' != ' + a;
            return n;
          })(),
          y = 63;
        return function (h) {
          for (var v = [], s = 0; s < h.length; s += 1) {
            var n = h.charCodeAt(s);
            if (n < 128) v.push(n);
            else {
              var b = g[h.charAt(s)];
              typeof b == 'number'
                ? (b & 255) == b
                  ? v.push(b)
                  : (v.push(b >>> 8), v.push(b & 255))
                : v.push(y);
            }
          }
          return v;
        };
      });
    var r = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 },
      l = { L: 1, M: 0, Q: 3, H: 2 },
      c = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      },
      _ = (function () {
        var $ = [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170],
          ],
          a = 1335,
          g = 7973,
          y = 21522,
          h = {},
          v = function (s) {
            for (var n = 0; s != 0; ) (n += 1), (s >>>= 1);
            return n;
          };
        return (
          (h.getBCHTypeInfo = function (s) {
            for (var n = s << 10; v(n) - v(a) >= 0; ) n ^= a << (v(n) - v(a));
            return ((s << 10) | n) ^ y;
          }),
          (h.getBCHTypeNumber = function (s) {
            for (var n = s << 12; v(n) - v(g) >= 0; ) n ^= g << (v(n) - v(g));
            return (s << 12) | n;
          }),
          (h.getPatternPosition = function (s) {
            return $[s - 1];
          }),
          (h.getMaskFunction = function (s) {
            switch (s) {
              case c.PATTERN000:
                return function (n, b) {
                  return (n + b) % 2 == 0;
                };
              case c.PATTERN001:
                return function (n, b) {
                  return n % 2 == 0;
                };
              case c.PATTERN010:
                return function (n, b) {
                  return b % 3 == 0;
                };
              case c.PATTERN011:
                return function (n, b) {
                  return (n + b) % 3 == 0;
                };
              case c.PATTERN100:
                return function (n, b) {
                  return (Math.floor(n / 2) + Math.floor(b / 3)) % 2 == 0;
                };
              case c.PATTERN101:
                return function (n, b) {
                  return ((n * b) % 2) + ((n * b) % 3) == 0;
                };
              case c.PATTERN110:
                return function (n, b) {
                  return (((n * b) % 2) + ((n * b) % 3)) % 2 == 0;
                };
              case c.PATTERN111:
                return function (n, b) {
                  return (((n * b) % 3) + ((n + b) % 2)) % 2 == 0;
                };
              default:
                throw 'bad maskPattern:' + s;
            }
          }),
          (h.getErrorCorrectPolynomial = function (s) {
            for (var n = I([1], 0), b = 0; b < s; b += 1) n = n.multiply(I([1, A.gexp(b)], 0));
            return n;
          }),
          (h.getLengthInBits = function (s, n) {
            if (1 <= n && n < 10)
              switch (s) {
                case r.MODE_NUMBER:
                  return 10;
                case r.MODE_ALPHA_NUM:
                  return 9;
                case r.MODE_8BIT_BYTE:
                  return 8;
                case r.MODE_KANJI:
                  return 8;
                default:
                  throw 'mode:' + s;
              }
            else if (n < 27)
              switch (s) {
                case r.MODE_NUMBER:
                  return 12;
                case r.MODE_ALPHA_NUM:
                  return 11;
                case r.MODE_8BIT_BYTE:
                  return 16;
                case r.MODE_KANJI:
                  return 10;
                default:
                  throw 'mode:' + s;
              }
            else if (n < 41)
              switch (s) {
                case r.MODE_NUMBER:
                  return 14;
                case r.MODE_ALPHA_NUM:
                  return 13;
                case r.MODE_8BIT_BYTE:
                  return 16;
                case r.MODE_KANJI:
                  return 12;
                default:
                  throw 'mode:' + s;
              }
            else throw 'type:' + n;
          }),
          (h.getLostPoint = function (s) {
            for (var n = s.getModuleCount(), b = 0, x = 0; x < n; x += 1)
              for (var w = 0; w < n; w += 1) {
                for (var T = 0, H = s.isDark(x, w), R = -1; R <= 1; R += 1)
                  if (!(x + R < 0 || n <= x + R))
                    for (var G = -1; G <= 1; G += 1)
                      w + G < 0 ||
                        n <= w + G ||
                        (R == 0 && G == 0) ||
                        (H == s.isDark(x + R, w + G) && (T += 1));
                T > 5 && (b += 3 + T - 5);
              }
            for (var x = 0; x < n - 1; x += 1)
              for (var w = 0; w < n - 1; w += 1) {
                var J = 0;
                s.isDark(x, w) && (J += 1),
                  s.isDark(x + 1, w) && (J += 1),
                  s.isDark(x, w + 1) && (J += 1),
                  s.isDark(x + 1, w + 1) && (J += 1),
                  (J == 0 || J == 4) && (b += 3);
              }
            for (var x = 0; x < n; x += 1)
              for (var w = 0; w < n - 6; w += 1)
                s.isDark(x, w) &&
                  !s.isDark(x, w + 1) &&
                  s.isDark(x, w + 2) &&
                  s.isDark(x, w + 3) &&
                  s.isDark(x, w + 4) &&
                  !s.isDark(x, w + 5) &&
                  s.isDark(x, w + 6) &&
                  (b += 40);
            for (var w = 0; w < n; w += 1)
              for (var x = 0; x < n - 6; x += 1)
                s.isDark(x, w) &&
                  !s.isDark(x + 1, w) &&
                  s.isDark(x + 2, w) &&
                  s.isDark(x + 3, w) &&
                  s.isDark(x + 4, w) &&
                  !s.isDark(x + 5, w) &&
                  s.isDark(x + 6, w) &&
                  (b += 40);
            for (var he = 0, w = 0; w < n; w += 1)
              for (var x = 0; x < n; x += 1) s.isDark(x, w) && (he += 1);
            var ue = Math.abs((100 * he) / n / n - 50) / 5;
            return (b += ue * 10), b;
          }),
          h
        );
      })(),
      A = (function () {
        for (var $ = new Array(256), a = new Array(256), g = 0; g < 8; g += 1) $[g] = 1 << g;
        for (var g = 8; g < 256; g += 1) $[g] = $[g - 4] ^ $[g - 5] ^ $[g - 6] ^ $[g - 8];
        for (var g = 0; g < 255; g += 1) a[$[g]] = g;
        var y = {};
        return (
          (y.glog = function (h) {
            if (h < 1) throw 'glog(' + h + ')';
            return a[h];
          }),
          (y.gexp = function (h) {
            for (; h < 0; ) h += 255;
            for (; h >= 256; ) h -= 255;
            return $[h];
          }),
          y
        );
      })();
    function I($, a) {
      if (typeof $.length > 'u') throw $.length + '/' + a;
      var g = (function () {
          for (var h = 0; h < $.length && $[h] == 0; ) h += 1;
          for (var v = new Array($.length - h + a), s = 0; s < $.length - h; s += 1)
            v[s] = $[s + h];
          return v;
        })(),
        y = {};
      return (
        (y.getAt = function (h) {
          return g[h];
        }),
        (y.getLength = function () {
          return g.length;
        }),
        (y.multiply = function (h) {
          for (
            var v = new Array(y.getLength() + h.getLength() - 1), s = 0;
            s < y.getLength();
            s += 1
          )
            for (var n = 0; n < h.getLength(); n += 1)
              v[s + n] ^= A.gexp(A.glog(y.getAt(s)) + A.glog(h.getAt(n)));
          return I(v, 0);
        }),
        (y.mod = function (h) {
          if (y.getLength() - h.getLength() < 0) return y;
          for (
            var v = A.glog(y.getAt(0)) - A.glog(h.getAt(0)), s = new Array(y.getLength()), n = 0;
            n < y.getLength();
            n += 1
          )
            s[n] = y.getAt(n);
          for (var n = 0; n < h.getLength(); n += 1) s[n] ^= A.gexp(A.glog(h.getAt(n)) + v);
          return I(s, 0).mod(h);
        }),
        y
      );
    }
    var P = (function () {
        var $ = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12, 7, 37, 13],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16],
          ],
          a = function (h, v) {
            var s = {};
            return (s.totalCount = h), (s.dataCount = v), s;
          },
          g = {},
          y = function (h, v) {
            switch (v) {
              case l.L:
                return $[(h - 1) * 4 + 0];
              case l.M:
                return $[(h - 1) * 4 + 1];
              case l.Q:
                return $[(h - 1) * 4 + 2];
              case l.H:
                return $[(h - 1) * 4 + 3];
              default:
                return;
            }
          };
        return (
          (g.getRSBlocks = function (h, v) {
            var s = y(h, v);
            if (typeof s > 'u')
              throw 'bad rs block @ typeNumber:' + h + '/errorCorrectionLevel:' + v;
            for (var n = s.length / 3, b = [], x = 0; x < n; x += 1)
              for (var w = s[x * 3 + 0], T = s[x * 3 + 1], H = s[x * 3 + 2], R = 0; R < w; R += 1)
                b.push(a(T, H));
            return b;
          }),
          g
        );
      })(),
      F = function () {
        var $ = [],
          a = 0,
          g = {};
        return (
          (g.getBuffer = function () {
            return $;
          }),
          (g.getAt = function (y) {
            var h = Math.floor(y / 8);
            return (($[h] >>> (7 - (y % 8))) & 1) == 1;
          }),
          (g.put = function (y, h) {
            for (var v = 0; v < h; v += 1) g.putBit(((y >>> (h - v - 1)) & 1) == 1);
          }),
          (g.getLengthInBits = function () {
            return a;
          }),
          (g.putBit = function (y) {
            var h = Math.floor(a / 8);
            $.length <= h && $.push(0), y && ($[h] |= 128 >>> a % 8), (a += 1);
          }),
          g
        );
      },
      W = function ($) {
        var a = r.MODE_NUMBER,
          g = $,
          y = {};
        (y.getMode = function () {
          return a;
        }),
          (y.getLength = function (s) {
            return g.length;
          }),
          (y.write = function (s) {
            for (var n = g, b = 0; b + 2 < n.length; )
              s.put(h(n.substring(b, b + 3)), 10), (b += 3);
            b < n.length &&
              (n.length - b == 1
                ? s.put(h(n.substring(b, b + 1)), 4)
                : n.length - b == 2 && s.put(h(n.substring(b, b + 2)), 7));
          });
        var h = function (s) {
            for (var n = 0, b = 0; b < s.length; b += 1) n = n * 10 + v(s.charAt(b));
            return n;
          },
          v = function (s) {
            if ('0' <= s && s <= '9') return s.charCodeAt(0) - 48;
            throw 'illegal char :' + s;
          };
        return y;
      },
      D = function ($) {
        var a = r.MODE_ALPHA_NUM,
          g = $,
          y = {};
        (y.getMode = function () {
          return a;
        }),
          (y.getLength = function (v) {
            return g.length;
          }),
          (y.write = function (v) {
            for (var s = g, n = 0; n + 1 < s.length; )
              v.put(h(s.charAt(n)) * 45 + h(s.charAt(n + 1)), 11), (n += 2);
            n < s.length && v.put(h(s.charAt(n)), 6);
          });
        var h = function (v) {
          if ('0' <= v && v <= '9') return v.charCodeAt(0) - 48;
          if ('A' <= v && v <= 'Z') return v.charCodeAt(0) - 65 + 10;
          switch (v) {
            case ' ':
              return 36;
            case '$':
              return 37;
            case '%':
              return 38;
            case '*':
              return 39;
            case '+':
              return 40;
            case '-':
              return 41;
            case '.':
              return 42;
            case '/':
              return 43;
            case ':':
              return 44;
            default:
              throw 'illegal char :' + v;
          }
        };
        return y;
      },
      L = function ($) {
        var a = r.MODE_8BIT_BYTE,
          g = i.stringToBytes($),
          y = {};
        return (
          (y.getMode = function () {
            return a;
          }),
          (y.getLength = function (h) {
            return g.length;
          }),
          (y.write = function (h) {
            for (var v = 0; v < g.length; v += 1) h.put(g[v], 8);
          }),
          y
        );
      },
      z = function ($) {
        var a = r.MODE_KANJI,
          g = i.stringToBytesFuncs.SJIS;
        if (!g) throw 'sjis not supported.';
        (function (v, s) {
          var n = g(v);
          if (n.length != 2 || ((n[0] << 8) | n[1]) != s) throw 'sjis not supported.';
        })('友', 38726);
        var y = g($),
          h = {};
        return (
          (h.getMode = function () {
            return a;
          }),
          (h.getLength = function (v) {
            return ~~(y.length / 2);
          }),
          (h.write = function (v) {
            for (var s = y, n = 0; n + 1 < s.length; ) {
              var b = ((255 & s[n]) << 8) | (255 & s[n + 1]);
              if (33088 <= b && b <= 40956) b -= 33088;
              else if (57408 <= b && b <= 60351) b -= 49472;
              else throw 'illegal char at ' + (n + 1) + '/' + b;
              (b = ((b >>> 8) & 255) * 192 + (b & 255)), v.put(b, 13), (n += 2);
            }
            if (n < s.length) throw 'illegal char at ' + (n + 1);
          }),
          h
        );
      },
      j = function () {
        var $ = [],
          a = {};
        return (
          (a.writeByte = function (g) {
            $.push(g & 255);
          }),
          (a.writeShort = function (g) {
            a.writeByte(g), a.writeByte(g >>> 8);
          }),
          (a.writeBytes = function (g, y, h) {
            (y = y || 0), (h = h || g.length);
            for (var v = 0; v < h; v += 1) a.writeByte(g[v + y]);
          }),
          (a.writeString = function (g) {
            for (var y = 0; y < g.length; y += 1) a.writeByte(g.charCodeAt(y));
          }),
          (a.toByteArray = function () {
            return $;
          }),
          (a.toString = function () {
            var g = '';
            g += '[';
            for (var y = 0; y < $.length; y += 1) y > 0 && (g += ','), (g += $[y]);
            return (g += ']'), g;
          }),
          a
        );
      },
      E = function () {
        var $ = 0,
          a = 0,
          g = 0,
          y = '',
          h = {},
          v = function (n) {
            y += String.fromCharCode(s(n & 63));
          },
          s = function (n) {
            if (!(n < 0)) {
              if (n < 26) return 65 + n;
              if (n < 52) return 97 + (n - 26);
              if (n < 62) return 48 + (n - 52);
              if (n == 62) return 43;
              if (n == 63) return 47;
            }
            throw 'n:' + n;
          };
        return (
          (h.writeByte = function (n) {
            for ($ = ($ << 8) | (n & 255), a += 8, g += 1; a >= 6; ) v($ >>> (a - 6)), (a -= 6);
          }),
          (h.flush = function () {
            if ((a > 0 && (v($ << (6 - a)), ($ = 0), (a = 0)), g % 3 != 0))
              for (var n = 3 - (g % 3), b = 0; b < n; b += 1) y += '=';
          }),
          (h.toString = function () {
            return y;
          }),
          h
        );
      },
      Q = function ($) {
        var a = $,
          g = 0,
          y = 0,
          h = 0,
          v = {};
        v.read = function () {
          for (; h < 8; ) {
            if (g >= a.length) {
              if (h == 0) return -1;
              throw 'unexpected end of file./' + h;
            }
            var n = a.charAt(g);
            if (((g += 1), n == '=')) return (h = 0), -1;
            if (n.match(/^\s$/)) continue;
            (y = (y << 6) | s(n.charCodeAt(0))), (h += 6);
          }
          var b = (y >>> (h - 8)) & 255;
          return (h -= 8), b;
        };
        var s = function (n) {
          if (65 <= n && n <= 90) return n - 65;
          if (97 <= n && n <= 122) return n - 97 + 26;
          if (48 <= n && n <= 57) return n - 48 + 52;
          if (n == 43) return 62;
          if (n == 47) return 63;
          throw 'c:' + n;
        };
        return v;
      },
      Y = function ($, a) {
        var g = $,
          y = a,
          h = new Array($ * a),
          v = {};
        (v.setPixel = function (x, w, T) {
          h[w * g + x] = T;
        }),
          (v.write = function (x) {
            x.writeString('GIF87a'),
              x.writeShort(g),
              x.writeShort(y),
              x.writeByte(128),
              x.writeByte(0),
              x.writeByte(0),
              x.writeByte(0),
              x.writeByte(0),
              x.writeByte(0),
              x.writeByte(255),
              x.writeByte(255),
              x.writeByte(255),
              x.writeString(','),
              x.writeShort(0),
              x.writeShort(0),
              x.writeShort(g),
              x.writeShort(y),
              x.writeByte(0);
            var w = 2,
              T = n(w);
            x.writeByte(w);
            for (var H = 0; T.length - H > 255; )
              x.writeByte(255), x.writeBytes(T, H, 255), (H += 255);
            x.writeByte(T.length - H),
              x.writeBytes(T, H, T.length - H),
              x.writeByte(0),
              x.writeString(';');
          });
        var s = function (x) {
            var w = x,
              T = 0,
              H = 0,
              R = {};
            return (
              (R.write = function (G, J) {
                if (G >>> J) throw 'length over';
                for (; T + J >= 8; )
                  w.writeByte(255 & ((G << T) | H)), (J -= 8 - T), (G >>>= 8 - T), (H = 0), (T = 0);
                (H = (G << T) | H), (T = T + J);
              }),
              (R.flush = function () {
                T > 0 && w.writeByte(H);
              }),
              R
            );
          },
          n = function (x) {
            for (var w = 1 << x, T = (1 << x) + 1, H = x + 1, R = b(), G = 0; G < w; G += 1)
              R.add(String.fromCharCode(G));
            R.add(String.fromCharCode(w)), R.add(String.fromCharCode(T));
            var J = j(),
              he = s(J);
            he.write(w, H);
            var ue = 0,
              ge = String.fromCharCode(h[ue]);
            for (ue += 1; ue < h.length; ) {
              var ke = String.fromCharCode(h[ue]);
              (ue += 1),
                R.contains(ge + ke)
                  ? (ge = ge + ke)
                  : (he.write(R.indexOf(ge), H),
                    R.size() < 4095 && (R.size() == 1 << H && (H += 1), R.add(ge + ke)),
                    (ge = ke));
            }
            return he.write(R.indexOf(ge), H), he.write(T, H), he.flush(), J.toByteArray();
          },
          b = function () {
            var x = {},
              w = 0,
              T = {};
            return (
              (T.add = function (H) {
                if (T.contains(H)) throw 'dup key:' + H;
                (x[H] = w), (w += 1);
              }),
              (T.size = function () {
                return w;
              }),
              (T.indexOf = function (H) {
                return x[H];
              }),
              (T.contains = function (H) {
                return typeof x[H] < 'u';
              }),
              T
            );
          };
        return v;
      },
      U = function ($, a, g) {
        for (var y = Y($, a), h = 0; h < a; h += 1)
          for (var v = 0; v < $; v += 1) y.setPixel(v, h, g(v, h));
        var s = j();
        y.write(s);
        for (var n = E(), b = s.toByteArray(), x = 0; x < b.length; x += 1) n.writeByte(b[x]);
        return n.flush(), 'data:image/gif;base64,' + n;
      };
    return i;
  })();
  (function () {
    t.stringToBytesFuncs['UTF-8'] = function (i) {
      function r(l) {
        for (var c = [], _ = 0; _ < l.length; _++) {
          var A = l.charCodeAt(_);
          A < 128
            ? c.push(A)
            : A < 2048
              ? c.push(192 | (A >> 6), 128 | (A & 63))
              : A < 55296 || A >= 57344
                ? c.push(224 | (A >> 12), 128 | ((A >> 6) & 63), 128 | (A & 63))
                : (_++,
                  (A = 65536 + (((A & 1023) << 10) | (l.charCodeAt(_) & 1023))),
                  c.push(
                    240 | (A >> 18),
                    128 | ((A >> 12) & 63),
                    128 | ((A >> 6) & 63),
                    128 | (A & 63)
                  ));
        }
        return c;
      }
      return r(i);
    };
  })(),
    (function (i) {
      o.exports = i();
    })(function () {
      return t;
    });
})(yi);
var Wi = yi.exports;
const Li = Fi(Wi),
  qe = ({ x: o, y: e, size: t, rotation: i = 0 }) => {
    const r = o + t / 2,
      l = e + t / 2;
    return 'transform="rotate('
      .concat((180 * i) / Math.PI, ',')
      .concat(r, ',')
      .concat(l, ')"');
  },
  Pi = ({ x: o, y: e, size: t, rotation: i = 0, color: r }) => {
    const l = t / 8;
    return '<path clip-rule="evenodd" fill="'
      .concat(r, '" d="')
      .concat(
        'M '.concat(o, ' ').concat(e + 2.5 * l, 'v ') +
          2 * l +
          'a '
            .concat(2.5 * l, ' ')
            .concat(2.5 * l, ', 0, 0, 0, ')
            .concat(2.5 * l, ' ')
            .concat(2.5 * l, 'h ') +
          2 * l +
          'a '
            .concat(2.5 * l, ' ')
            .concat(2.5 * l, ', 0, 0, 0, ')
            .concat(2.5 * l, ' ')
            .concat(2.5 * -l, 'v ') +
          -2 * l +
          'a '
            .concat(2.5 * l, ' ')
            .concat(2.5 * l, ', 0, 0, 0, ')
            .concat(2.5 * -l, ' ')
            .concat(2.5 * -l, 'h ') +
          -2 * l +
          'a '
            .concat(2.5 * l, ' ')
            .concat(2.5 * l, ', 0, 0, 0, ')
            .concat(2.5 * -l, ' ')
            .concat(2.5 * l),
        '" '
      )
      .concat(qe({ x: o, y: e, size: t, rotation: i }), '></path>');
  },
  Ue = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ],
  ze = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ],
  Ei = (o, e, t, i, r, l, c, _) => {
    const A = (Math.min(e, t) - 2 * i) / c,
      I = (e - c * A) / 2,
      P = (t - c * A) / 2,
      F = ((D, L, z) => (j, E) => {
        var Q, Y, U, $, a, g;
        return !(
          (D &&
            j >= (L - z.hideXDots) / 2 &&
            j < (L + z.hideXDots) / 2 &&
            E >= (L - z.hideYDots) / 2 &&
            E < (L + z.hideYDots) / 2) ||
          ((Q = Ue[j]) != null && Q[E]) ||
          ((Y = Ue[j - L + 7]) != null && Y[E]) ||
          ((U = Ue[j]) != null && U[E - L + 7]) ||
          (($ = ze[j]) != null && $[E]) ||
          ((a = ze[j - L + 7]) != null && a[E]) ||
          ((g = ze[j]) != null && g[E - L + 7])
        );
      })(l, c, _),
      W = [];
    for (let D = 0; D < c; D++)
      for (let L = 0; L < c; L++)
        F(D, L) && o.isDark(D, L) && W.push(Pi({ x: I + D * A, y: P + L * A, size: A, color: r }));
    return W;
  },
  Ri = (o, e, t, i, r, l) => {
    const c = [],
      _ = (Math.min(o, e) - 2 * t) / l,
      A = 7 * _,
      I = 3 * _,
      P = (o - l * _) / 2,
      F = (e - l * _) / 2;
    return (
      [
        [0, 0, 0],
        [1, 0, Math.PI / 2],
        [0, 1, -Math.PI / 2],
      ].forEach(([W, D, L]) => {
        const z = P + W * _ * (l - 7),
          j = F + D * _ * (l - 7);
        c.push(
          (({ x: E, y: Q, size: Y, rotation: U = 0, color: $ }) => {
            const a = Y / 7;
            return '<path clip-rule="evenodd" fill="'
              .concat($, '" d="')
              .concat(
                'M '.concat(E, ' ').concat(Q + 2.5 * a, 'v ') +
                  2 * a +
                  'a '
                    .concat(2.5 * a, ' ')
                    .concat(2.5 * a, ', 0, 0, 0, ')
                    .concat(2.5 * a, ' ')
                    .concat(2.5 * a, 'h ') +
                  4.5 * a +
                  'v ' +
                  -4.5 * a +
                  'a '
                    .concat(2.5 * a, ' ')
                    .concat(2.5 * a, ', 0, 0, 0, ')
                    .concat(2.5 * -a, ' ')
                    .concat(2.5 * -a, 'h ') +
                  -2 * a +
                  'a '
                    .concat(2.5 * a, ' ')
                    .concat(2.5 * a, ', 0, 0, 0, ')
                    .concat(2.5 * -a, ' ')
                    .concat(2.5 * a) +
                  'M '.concat(E + 2.5 * a, ' ').concat(Q + a, 'h ') +
                  2 * a +
                  'a '
                    .concat(1.5 * a, ' ')
                    .concat(1.5 * a, ', 0, 0, 1, ')
                    .concat(1.5 * a, ' ')
                    .concat(1.5 * a, 'v ') +
                  3.5 * a +
                  'h ' +
                  -3.5 * a +
                  'a '
                    .concat(1.5 * a, ' ')
                    .concat(1.5 * a, ', 0, 0, 1, ')
                    .concat(1.5 * -a, ' ')
                    .concat(1.5 * -a, 'v ') +
                  -2 * a +
                  'a '
                    .concat(1.5 * a, ' ')
                    .concat(1.5 * a, ', 0, 0, 1, ')
                    .concat(1.5 * a, ' ')
                    .concat(1.5 * -a),
                '" '
              )
              .concat(qe({ x: E, y: Q, size: Y, rotation: U }), '></path>');
          })({ x: z, y: j, size: A, rotation: L, color: i })
        ),
          c.push(
            (({ x: E, y: Q, size: Y, rotation: U = 0, color: $ }) => {
              const a = Y / 7;
              return '<path clip-rule="evenodd" fill="'
                .concat($, '" d="')
                .concat(
                  'M '.concat(E, ' ').concat(Q + 2.5 * a, 'v ') +
                    2 * a +
                    'a '
                      .concat(2.5 * a, ' ')
                      .concat(2.5 * a, ', 0, 0, 0, ')
                      .concat(2.5 * a, ' ')
                      .concat(2.5 * a, 'h ') +
                    4.5 * a +
                    'v ' +
                    -4.5 * a +
                    'a '
                      .concat(2.5 * a, ' ')
                      .concat(2.5 * a, ', 0, 0, 0, ')
                      .concat(2.5 * -a, ' ')
                      .concat(2.5 * -a, 'h ') +
                    -2 * a +
                    'a '
                      .concat(2.5 * a, ' ')
                      .concat(2.5 * a, ', 0, 0, 0, ')
                      .concat(2.5 * -a, ' ')
                      .concat(2.5 * a),
                  '" '
                )
                .concat(qe({ x: E, y: Q, size: Y, rotation: U }), '></path>');
            })({ x: z + 2 * _, y: j + 2 * _, size: I, rotation: L, color: r })
          );
      }),
      c
    );
  };
var Ye, Fe;
(function (o) {
  (o.L = 'L'), (o.M = 'M'), (o.Q = 'Q'), (o.H = 'H');
})(Ye || (Ye = {})),
  (function (o) {
    (o.Numeric = 'Numeric'),
      (o.Alphanumeric = 'Alphanumeric'),
      (o.Byte = 'Byte'),
      (o.Kanji = 'Kanji');
  })(Fe || (Fe = {}));
const Vi = { L: 0.07, M: 0.15, Q: 0.25, H: 0.3 },
  Ui = {
    data: '',
    width: 188,
    height: 188,
    margin: 0,
    dotsOptions: { color: '#6067F9' },
    cornersDotOptions: { color: '#FFFFFF' },
    cornersSquareOptions: { color: '#FFFFFF' },
    backgroundOptions: { color: '#17182B' },
    imageOptions: { margin: 4, imageSize: 0.4, hideBackgroundDots: !0, crossOrigin: void 0 },
    qrOptions: { typeNumber: 0, errorCorrectionLevel: Ye.M },
    image:
      '<svg viewBox="0 0 151 166" fill="none"\nxmlns="http://www.w3.org/2000/svg">\n<path d="M141.713 0C129.202 16.9595 113.518 28.7139 95.0161 36.5919C88.5913 34.8881 81.9893 33.9815 75.5 34.0441C69.0107 33.9815 62.4087 34.8881 55.9839 36.5919C37.4822 28.7139 21.7985 16.9751 9.28692 0C5.48675 9.23785 -9.05372 41.0936 8.41739 85.5947C8.41739 85.5947 2.82985 108.838 13.0871 128.798C13.0871 128.798 27.9657 122.265 39.7527 131.456C52.1032 141.194 48.1742 150.541 56.8695 158.575C64.341 166 75.5 166 75.5 166C75.5 166 86.659 166 94.1305 158.591C102.826 150.557 98.9129 141.209 111.247 131.471C123.034 122.28 137.913 128.814 137.913 128.814C148.17 108.853 142.583 85.6104 142.583 85.6104C160.054 41.0936 145.513 9.23785 141.713 0ZM17.7246 79.4362C8.20805 60.5072 5.59947 34.4974 11.6218 13.9584C19.5441 33.4345 30.3328 42.2034 43.1664 51.4412C37.7077 62.3829 27.4826 72.7305 17.7246 79.4362ZM45.0665 112.808C37.5949 109.604 35.9847 103.242 35.9847 103.242C46.2097 97.0053 61.2172 101.773 61.6841 116.544C53.7779 111.901 51.1532 115.403 45.0665 112.808ZM75.5 165.187C70.1379 165.187 65.7903 161.467 65.7903 156.887C65.7903 152.307 70.1379 148.587 75.5 148.587C80.8621 148.587 85.2097 152.307 85.2097 156.887C85.2097 161.483 80.8621 165.187 75.5 165.187ZM105.934 112.808C99.8468 115.403 97.2221 111.901 89.3159 116.544C89.7989 101.773 104.79 97.0053 115.015 103.242C115.015 103.242 113.405 109.604 105.934 112.808ZM133.275 79.4362C123.517 72.7305 113.292 62.3829 107.834 51.4256C120.667 42.2034 131.456 33.4345 139.378 13.9584C145.401 34.513 142.792 60.5228 133.275 79.4362Z" fill="#F7F7F7"/>\n</svg>',
    imageWidth: 1660,
    imageHeight: 1660,
  },
  wi = (o, e) => {
    const t = te(Ve(te({}, Ui), { data: o }), e != null ? e : {}),
      i = Li(t.qrOptions.typeNumber, t.qrOptions.errorCorrectionLevel);
    i.addData(
      t.data,
      t.qrOptions.mode ||
        ((D) => {
          switch (!0) {
            case /^[0-9]*$/.test(D):
              return Fe.Numeric;
            case /^[0-9A-Z $%*+\-./:]*$/.test(D):
              return Fe.Alphanumeric;
            default:
              return Fe.Byte;
          }
        })(t.data)
    ),
      i.make();
    const r = i.getModuleCount(),
      l = Math.min(t.width, t.height) - 2 * t.margin,
      c = Math.floor(l / r);
    let _ = { hideXDots: 0, hideYDots: 0, width: 0, height: 0 };
    if (t.image && t.imageHeight && t.imageWidth) {
      const { imageOptions: D, qrOptions: L } = t,
        z = D.imageSize * Vi[L.errorCorrectionLevel],
        j = Math.floor(z * r * r);
      _ = (({
        originalHeight: E,
        originalWidth: Q,
        maxHiddenDots: Y,
        maxHiddenAxisDots: U,
        dotSize: $,
      }) => {
        const a = { x: 0, y: 0 },
          g = { x: 0, y: 0 };
        if (E <= 0 || Q <= 0 || Y <= 0 || $ <= 0)
          return { height: 0, width: 0, hideYDots: 0, hideXDots: 0 };
        const y = E / Q;
        return (
          (a.x = Math.floor(Math.sqrt(Y / y))),
          a.x <= 0 && (a.x = 1),
          U && U < a.x && (a.x = U),
          a.x % 2 == 0 && a.x--,
          (g.x = a.x * $),
          (a.y = 1 + 2 * Math.ceil((a.x * y - 1) / 2)),
          (g.y = Math.round(g.x * y)),
          (a.y * a.x > Y || (U && U < a.y)) &&
            (U && U < a.y ? ((a.y = U), a.y % 2 == 0 && a.x--) : (a.y -= 2),
            (g.y = a.y * $),
            (a.x = 1 + 2 * Math.ceil((a.y / y - 1) / 2)),
            (g.x = Math.round(g.y / y))),
          { height: g.y, width: g.x, hideYDots: a.y, hideXDots: a.x }
        );
      })({
        originalWidth: t.imageWidth,
        originalHeight: t.imageHeight,
        maxHiddenDots: j,
        maxHiddenAxisDots: r - 14,
        dotSize: c,
      });
    }
    const A = (({ color: D, x: L, y: z, height: j, width: E }) =>
        '<rect clip-path="url(\'#clip-path-bg\')" '
          .concat(D ? 'fill="'.concat(D, '"') : '', ' x="')
          .concat(L, '" y="')
          .concat(z, '" width="')
          .concat(E, '" height="')
          .concat(j, '"></rect>'))({
        color: t.backgroundOptions.color,
        x: 0,
        y: 0,
        width: t.width,
        height: t.height,
      }),
      I = Ei(
        i,
        t.width,
        t.height,
        t.margin,
        t.dotsOptions.color,
        t.imageOptions.hideBackgroundDots,
        r,
        _
      ),
      P = Ri(
        t.width,
        t.height,
        t.margin,
        t.cornersSquareOptions.color,
        t.cornersDotOptions.color,
        r
      ),
      F = (({
        qrWidth: D,
        qrHeight: L,
        width: z,
        height: j,
        count: E,
        dotSize: Q,
        image: Y = '',
        imageMargin: U,
      }) => {
        const $ = (D - E * Q) / 2 + U + (E * Q - z) / 2,
          a = (L - E * Q) / 2 + U + (E * Q - j) / 2,
          g = z - 2 * U,
          y = j - 2 * U;
        return /^<svg/.test(Y)
          ? '<g transform="translate('
              .concat($, ' ')
              .concat(a, ') scale(')
              .concat((g / D).toFixed(4), ' ')
              .concat((y / L).toFixed(4), ')">')
              .concat(Y, '</g>')
          : '<image href="'
              .concat(Y, '" x="')
              .concat($, '" y="')
              .concat(a, '" width="')
              .concat(g, 'px" height="')
              .concat(y, 'px"></image>');
      })({
        qrWidth: t.width,
        qrHeight: t.height,
        width: _.width,
        height: _.height,
        count: r,
        dotSize: c,
        image: t.image,
        imageMargin: t.imageOptions.margin,
      }),
      W = [A, ...I, ...P, F];
    return '<svg width="'
      .concat(t.width, '" height="')
      .concat(
        t.height,
        '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">\n    '
      )
      .concat(W.join(''), '\n  </svg>');
  };
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class Ke extends gi {
  constructor(e) {
    if ((super(e), (this.et = dt), e.type !== mi.CHILD))
      throw Error(this.constructor.directiveName + '() can only be used in child bindings');
  }
  render(e) {
    if (e === dt || e == null) return (this.ft = void 0), (this.et = e);
    if (e === xi) return e;
    if (typeof e != 'string')
      throw Error(this.constructor.directiveName + '() called with a non-string value');
    if (e === this.et) return this.ft;
    this.et = e;
    const t = [e];
    return (
      (t.raw = t), (this.ft = { _$litType$: this.constructor.resultType, strings: t, values: [] })
    );
  }
}
(Ke.directiveName = 'unsafeHTML'), (Ke.resultType = 1);
const zi = ui(Ke),
  ji = new WeakMap();
let pt = 0;
const je = new Map(),
  ft = new WeakSet(),
  ut = () => new Promise((o) => requestAnimationFrame(o)),
  gt = (o, e) => {
    const t = o - e;
    return t === 0 ? void 0 : t;
  },
  mt = (o, e) => {
    const t = o / e;
    return t === 1 ? void 0 : t;
  },
  Ge = {
    left: (o, e) => {
      const t = gt(o, e);
      return {
        value: t,
        transform: t == null || isNaN(t) ? void 0 : 'translateX('.concat(t, 'px)'),
      };
    },
    top: (o, e) => {
      const t = gt(o, e);
      return {
        value: t,
        transform: t == null || isNaN(t) ? void 0 : 'translateY('.concat(t, 'px)'),
      };
    },
    width: (o, e) => {
      let t;
      e === 0 && ((e = 1), (t = { width: '1px' }));
      const i = mt(o, e);
      return {
        value: i,
        overrideFrom: t,
        transform: i == null || isNaN(i) ? void 0 : 'scaleX('.concat(i, ')'),
      };
    },
    height: (o, e) => {
      let t;
      e === 0 && ((e = 1), (t = { height: '1px' }));
      const i = mt(o, e);
      return {
        value: i,
        overrideFrom: t,
        transform: i == null || isNaN(i) ? void 0 : 'scaleY('.concat(i, ')'),
      };
    },
  },
  Gi = { duration: 333, easing: 'ease-in-out' },
  Zi = ['left', 'top', 'width', 'height', 'opacity', 'color', 'background'],
  xt = new WeakMap();
let Qi = class extends Oi {
  constructor(e) {
    if (
      (super(e),
      (this.t = !1),
      (this.i = null),
      (this.o = null),
      (this.h = !0),
      (this.shouldLog = !1),
      e.type === Di.CHILD)
    )
      throw Error('The `animate` directive must be used in attribute position.');
    this.createFinished();
  }
  createFinished() {
    var e;
    (e = this.resolveFinished) == null || e.call(this),
      (this.finished = new Promise((t) => {
        this.l = t;
      }));
  }
  async resolveFinished() {
    var e;
    (e = this.l) == null || e.call(this), (this.l = void 0);
  }
  render(e) {
    return Ti;
  }
  getController() {
    return ji.get(this.u);
  }
  isDisabled() {
    var e;
    return this.options.disabled || ((e = this.getController()) == null ? void 0 : e.disabled);
  }
  update(e, [t]) {
    var r;
    const i = this.u === void 0;
    return (
      i &&
        ((this.u = (r = e.options) == null ? void 0 : r.host),
        this.u.addController(this),
        this.u.updateComplete.then((l) => (this.t = !0)),
        (this.element = e.element),
        xt.set(this.element, this)),
      (this.optionsOrCallback = t),
      (i || typeof t != 'function') && this.p(t),
      this.render(t)
    );
  }
  p(e) {
    var i;
    e = e != null ? e : {};
    const t = this.getController();
    t !== void 0 &&
      ((e = te(te({}, t.defaultOptions), e)).keyframeOptions = te(
        te({}, t.defaultOptions.keyframeOptions),
        e.keyframeOptions
      )),
      (i = e.properties) != null || (e.properties = Zi),
      (this.options = e);
  }
  m() {
    const e = {},
      t = this.element.getBoundingClientRect(),
      i = getComputedStyle(this.element);
    return (
      this.options.properties.forEach((r) => {
        var _;
        const l = (_ = t[r]) != null ? _ : Ge[r] ? void 0 : i[r],
          c = Number(l);
        e[r] = isNaN(c) ? l + '' : c;
      }),
      e
    );
  }
  v() {
    let e,
      t = !0;
    return (
      this.options.guard &&
        ((e = this.options.guard()),
        (t = ((i, r) => {
          if (Array.isArray(i)) {
            if (Array.isArray(r) && r.length === i.length && i.every((l, c) => l === r[c]))
              return !1;
          } else if (r === i) return !1;
          return !0;
        })(e, this._))),
      (this.h =
        this.t && !this.isDisabled() && !this.isAnimating() && t && this.element.isConnected),
      this.h && (this._ = Array.isArray(e) ? Array.from(e) : e),
      this.h
    );
  }
  hostUpdate() {
    var e;
    typeof this.optionsOrCallback == 'function' && this.p(this.optionsOrCallback()),
      this.v() &&
        ((this.A = this.m()),
        (this.i = (e = this.i) != null ? e : this.element.parentNode),
        (this.o = this.element.nextSibling));
  }
  async hostUpdated() {
    if (!this.h || !this.element.isConnected || (this.options.skipInitial && !this.isHostRendered))
      return;
    let e;
    this.prepare(), await ut;
    const t = this.O(),
      i = this.j(this.options.keyframeOptions, t),
      r = this.m();
    if (this.A !== void 0) {
      const { from: l, to: c } = this.N(this.A, r, t);
      this.log('measured', [this.A, r, l, c]), (e = this.calculateKeyframes(l, c));
    } else {
      const l = je.get(this.options.inId);
      if (l) {
        je.delete(this.options.inId);
        const { from: c, to: _ } = this.N(l, r, t);
        (e = this.calculateKeyframes(c, _)),
          (e = this.options.in
            ? [te(te({}, this.options.in[0]), e[0]), ...this.options.in.slice(1), e[1]]
            : e),
          pt++,
          e.forEach((A) => (A.zIndex = pt));
      } else this.options.in && (e = [...this.options.in, {}]);
    }
    this.animate(e, i);
  }
  resetStyles() {
    var e;
    this.P !== void 0 &&
      (this.element.setAttribute('style', (e = this.P) != null ? e : ''), (this.P = void 0));
  }
  commitStyles() {
    var e, t;
    (this.P = this.element.getAttribute('style')),
      (e = this.webAnimation) == null || e.commitStyles(),
      (t = this.webAnimation) == null || t.cancel();
  }
  reconnected() {}
  async disconnected() {
    var t;
    if (
      !this.h ||
      (this.options.id !== void 0 && je.set(this.options.id, this.A), this.options.out === void 0)
    )
      return;
    if ((this.prepare(), await ut(), (t = this.i) == null ? void 0 : t.isConnected)) {
      const i = this.o && this.o.parentNode === this.i ? this.o : null;
      if ((this.i.insertBefore(this.element, i), this.options.stabilizeOut)) {
        const r = this.m();
        this.log('stabilizing out');
        const l = this.A.left - r.left,
          c = this.A.top - r.top;
        getComputedStyle(this.element).position !== 'static' ||
          (l === 0 && c === 0) ||
          (this.element.style.position = 'relative'),
          l !== 0 && (this.element.style.left = l + 'px'),
          c !== 0 && (this.element.style.top = c + 'px');
      }
    }
    const e = this.j(this.options.keyframeOptions);
    await this.animate(this.options.out, e), this.element.remove();
  }
  prepare() {
    this.createFinished();
  }
  start() {
    var e, t;
    (t = (e = this.options).onStart) == null || t.call(e, this);
  }
  didFinish(e) {
    var t, i;
    e && ((i = (t = this.options).onComplete) == null || i.call(t, this)),
      (this.A = void 0),
      (this.animatingProperties = void 0),
      (this.frames = void 0),
      this.resolveFinished();
  }
  O() {
    const e = [];
    for (let t = this.element.parentNode; t; t = t == null ? void 0 : t.parentNode) {
      const i = xt.get(t);
      i && !i.isDisabled() && i && e.push(i);
    }
    return e;
  }
  get isHostRendered() {
    const e = ft.has(this.u);
    return (
      e ||
        this.u.updateComplete.then(() => {
          ft.add(this.u);
        }),
      e
    );
  }
  j(e, t = this.O()) {
    const i = te({}, Gi);
    return t.forEach((r) => Object.assign(i, r.options.keyframeOptions)), Object.assign(i, e), i;
  }
  N(e, t, i) {
    (e = te({}, e)), (t = te({}, t));
    const r = i.map((_) => _.animatingProperties).filter((_) => _ !== void 0);
    let l = 1,
      c = 1;
    return (
      r.length > 0 &&
        (r.forEach((_) => {
          _.width && (l /= _.width), _.height && (c /= _.height);
        }),
        e.left !== void 0 && t.left !== void 0 && ((e.left = l * e.left), (t.left = l * t.left)),
        e.top !== void 0 && t.top !== void 0 && ((e.top = c * e.top), (t.top = c * t.top))),
      { from: e, to: t }
    );
  }
  calculateKeyframes(e, t, i = !1) {
    var A;
    const r = {},
      l = {};
    let c = !1;
    const _ = {};
    for (const I in t) {
      const P = e[I],
        F = t[I];
      if (I in Ge) {
        const W = Ge[I];
        if (P === void 0 || F === void 0) continue;
        const D = W(P, F);
        D.transform !== void 0 &&
          ((_[I] = D.value),
          (c = !0),
          (r.transform = ''.concat((A = r.transform) != null ? A : '', ' ').concat(D.transform)),
          D.overrideFrom !== void 0 && Object.assign(r, D.overrideFrom));
      } else P !== F && P !== void 0 && F !== void 0 && ((c = !0), (r[I] = P), (l[I] = F));
    }
    return (
      (r.transformOrigin = l.transformOrigin = i ? 'center center' : 'top left'),
      (this.animatingProperties = _),
      c ? [r, l] : void 0
    );
  }
  async animate(e, t = this.options.keyframeOptions) {
    this.start(), (this.frames = e);
    let i = !1;
    if (
      !this.isAnimating() &&
      !this.isDisabled() &&
      (this.options.onFrames &&
        ((this.frames = e = this.options.onFrames(this)), this.log('modified frames', e)),
      e !== void 0)
    ) {
      this.log('animate', [e, t]), (i = !0), (this.webAnimation = this.element.animate(e, t));
      const r = this.getController();
      r == null || r.add(this);
      try {
        await this.webAnimation.finished;
      } catch (l) {}
      r == null || r.remove(this);
    }
    return this.didFinish(i), i;
  }
  isAnimating() {
    var e, t;
    return (
      ((e = this.webAnimation) == null ? void 0 : e.playState) === 'running' ||
      ((t = this.webAnimation) == null ? void 0 : t.pending)
    );
  }
  log(e, t) {
    this.shouldLog && !this.isDisabled() && console.log(e, this.options.id, t);
  }
};
const Ae = Ni(Qi);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const vi = 'important',
  qi = ' !' + vi,
  Xe = ui(
    class extends gi {
      constructor(o) {
        var e;
        if (
          (super(o),
          o.type !== mi.ATTRIBUTE ||
            o.name !== 'style' ||
            ((e = o.strings) === null || e === void 0 ? void 0 : e.length) > 2)
        )
          throw Error(
            'The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.'
          );
      }
      render(o) {
        return Object.keys(o).reduce((e, t) => {
          const i = o[t];
          return i == null
            ? e
            : e +
                ''
                  .concat(
                    (t = t.includes('-')
                      ? t
                      : t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&').toLowerCase()),
                    ':'
                  )
                  .concat(i, ';');
        }, '');
      }
      update(o, [e]) {
        const { style: t } = o.element;
        if (this.ht === void 0) {
          this.ht = new Set();
          for (const i in e) this.ht.add(i);
          return this.render(e);
        }
        this.ht.forEach((i) => {
          e[i] == null && (this.ht.delete(i), i.includes('-') ? t.removeProperty(i) : (t[i] = ''));
        });
        for (const i in e) {
          const r = e[i];
          if (r != null) {
            this.ht.add(i);
            const l = typeof r == 'string' && r.endsWith(qi);
            i.includes('-') || l
              ? t.setProperty(i, l ? r.slice(0, -11) : r, l ? vi : '')
              : (t[i] = r);
          }
        }
        return xi;
      }
    }
  );
function C(o, e, t, i) {
  var r,
    l = arguments.length,
    c = l < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    c = Reflect.decorate(o, e, t, i);
  else
    for (var _ = o.length - 1; _ >= 0; _--)
      (r = o[_]) && (c = (l < 3 ? r(c) : l > 3 ? r(e, t, c) : r(e, t)) || c);
  return l > 3 && c && Object.defineProperty(e, t, c), c;
}
var It;
const Yi = se(
    It ||
      (It = O([
        '*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:\'\'}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::after,::before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.block{display:block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.flex-shrink{flex-shrink:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.resize{resize:both}.border{border-width:1px}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.outline{outline-style:solid}.blur{--tw-blur:blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}*{font-family:Prompt;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smooth:never}',
      ]))
  ),
  ce = (o) => [ct(Yi), ct(o)];
var Mt;
const Ki = se(
  Mt ||
    (Mt = O([
      '.nightlySelectorOverlay{position:fixed;top:0;left:0;width:100%;height:100%;animation:.1s ease-out 0s 1 fadeIn normal forwards;z-index:100;background-color:rgba(15,15,26,.4);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.fadeOutOpacity{animation:.1s ease-out 0s 1 fadeOut normal forwards}@media (max-width:640px){.nightlySelectorOverlay{animation:250ms ease-out 0s 1 fadeInMobile normal forwards;background-color:rgba(15,15,26,0);-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}.fadeOutOpacity{animation:250ms ease-out 0s 1 fadeOutMobile normal forwards}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeInMobile{0%{background-color:rgba(15,15,26,0);-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}100%{background-color:rgba(15,15,26,.4);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}}@keyframes fadeOutMobile{0%{background-color:rgba(15,15,26,.4);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}100%{background-color:rgba(15,15,26,0);-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0)}}.nightlySelector{margin:auto;position:relative;top:50%;transform:translateY(-50%);width:-moz-fit-content;width:fit-content;display:block}@media (max-width:640px){.nightlySelector{top:100%;transform:translateY(calc(-100% + 20px));width:unset}}',
    ]))
);
var St;
const Xi = se(
    St ||
      (St = O([
        '.mainContainer{max-width:720px;height:464px}.code{border-radius:20px;border:1px solid #343551;width:400px;height:400px}.bottomContainer{display:flex;flex-direction:row;overflow:hidden}@media (max-width:960px){.mainContainer{height:368px}.code{width:304px;height:304px}}@media (max-width:1080px) and (min-width:960px){.mainContainer{max-width:636px}}@media (max-width:960px){.mainContainer{max-width:540px}}.scan{display:flex;flex-direction:row;align-items:center;color:#707a8d;letter-spacing:.32px;font-size:16px}.scanImg{margin-right:4px}.copy{display:flex;flex-direction:row;align-items:center;letter-spacing:.32px;font-size:16px;color:#6067f9;cursor:pointer}.copyImg{margin-right:4px}.copy:hover{filter:brightness(1.5)}.qrTop{display:flex;flex-direction:row;justify-content:space-between;height:24px;margin-bottom:10px}.qrContainer{padding-left:16px;padding-right:16px;padding-top:12px;background-color:#17182b}',
      ]))
  ),
  Ci = (o) => 'data:image/svg+xml;base64,' + btoa(o);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Ze;
const We = window,
  Me = We.trustedTypes,
  yt = Me ? Me.createPolicy('lit-html', { createHTML: (o) => o }) : void 0,
  Je = '$lit$',
  we = 'lit$'.concat((Math.random() + '').slice(9), '$'),
  bi = '?' + we,
  Ji = '<'.concat(bi, '>'),
  _e = document,
  Le = () => _e.createComment(''),
  Ne = (o) => o === null || (typeof o != 'object' && typeof o != 'function'),
  wt = Array.isArray,
  Qe = '[ 	\n\f\r]',
  Be = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  vt = /-->/g,
  Ct = />/g,
  ve = RegExp(
    '>|'
      .concat(Qe, '(?:([^\\s"\'>=/]+)(')
      .concat(Qe, '*=')
      .concat(Qe, '*(?:[^ 	\n\f\r"\'`<>=]|("|\')|))|$)'),
    'g'
  ),
  bt = /'/g,
  At = /"/g,
  Ai = /^(?:script|style|textarea|title)$/i,
  en = (
    (o) =>
    (e, ...t) => ({ _$litType$: o, strings: e, values: t })
  )(1),
  Oe = Symbol.for('lit-noChange'),
  K = Symbol.for('lit-nothing'),
  $t = new WeakMap(),
  $e = _e.createTreeWalker(_e, 129, null, !1),
  tn = (o, e) => {
    const t = o.length - 1,
      i = [];
    let r,
      l = e === 2 ? '<svg>' : '',
      c = Be;
    for (let A = 0; A < t; A++) {
      const I = o[A];
      let P,
        F,
        W = -1,
        D = 0;
      for (; D < I.length && ((c.lastIndex = D), (F = c.exec(I)), F !== null); )
        (D = c.lastIndex),
          c === Be
            ? F[1] === '!--'
              ? (c = vt)
              : F[1] !== void 0
                ? (c = Ct)
                : F[2] !== void 0
                  ? (Ai.test(F[2]) && (r = RegExp('</' + F[2], 'g')), (c = ve))
                  : F[3] !== void 0 && (c = ve)
            : c === ve
              ? F[0] === '>'
                ? ((c = r != null ? r : Be), (W = -1))
                : F[1] === void 0
                  ? (W = -2)
                  : ((W = c.lastIndex - F[2].length),
                    (P = F[1]),
                    (c = F[3] === void 0 ? ve : F[3] === '"' ? At : bt))
              : c === At || c === bt
                ? (c = ve)
                : c === vt || c === Ct
                  ? (c = Be)
                  : ((c = ve), (r = void 0));
      const L = c === ve && o[A + 1].startsWith('/>') ? ' ' : '';
      l +=
        c === Be
          ? I + Ji
          : W >= 0
            ? (i.push(P), I.slice(0, W) + Je + I.slice(W) + we + L)
            : I + we + (W === -2 ? (i.push(void 0), A) : L);
    }
    const _ = l + (o[t] || '<?>') + (e === 2 ? '</svg>' : '');
    if (!Array.isArray(o) || !o.hasOwnProperty('raw'))
      throw Error('invalid template strings array');
    return [yt !== void 0 ? yt.createHTML(_) : _, i];
  };
class De {
  constructor({ strings: e, _$litType$: t }, i) {
    let r;
    this.parts = [];
    let l = 0,
      c = 0;
    const _ = e.length - 1,
      A = this.parts,
      [I, P] = tn(e, t);
    if (((this.el = De.createElement(I, i)), ($e.currentNode = this.el.content), t === 2)) {
      const F = this.el.content,
        W = F.firstChild;
      W.remove(), F.append(...W.childNodes);
    }
    for (; (r = $e.nextNode()) !== null && A.length < _; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) {
          const F = [];
          for (const W of r.getAttributeNames())
            if (W.endsWith(Je) || W.startsWith(we)) {
              const D = P[c++];
              if ((F.push(W), D !== void 0)) {
                const L = r.getAttribute(D.toLowerCase() + Je).split(we),
                  z = /([.?@])?(.*)/.exec(D);
                A.push({
                  type: 1,
                  index: l,
                  name: z[2],
                  strings: L,
                  ctor: z[1] === '.' ? rn : z[1] === '?' ? an : z[1] === '@' ? sn : Ee,
                });
              } else A.push({ type: 6, index: l });
            }
          for (const W of F) r.removeAttribute(W);
        }
        if (Ai.test(r.tagName)) {
          const F = r.textContent.split(we),
            W = F.length - 1;
          if (W > 0) {
            r.textContent = Me ? Me.emptyScript : '';
            for (let D = 0; D < W; D++)
              r.append(F[D], Le()), $e.nextNode(), A.push({ type: 2, index: ++l });
            r.append(F[W], Le());
          }
        }
      } else if (r.nodeType === 8)
        if (r.data === bi) A.push({ type: 2, index: l });
        else {
          let F = -1;
          for (; (F = r.data.indexOf(we, F + 1)) !== -1; )
            A.push({ type: 7, index: l }), (F += we.length - 1);
        }
      l++;
    }
  }
  static createElement(e, t) {
    const i = _e.createElement('template');
    return (i.innerHTML = e), i;
  }
}
function Se(o, e, t = o, i) {
  var r, l, c, _;
  if (e === Oe) return e;
  let A = i !== void 0 ? ((r = t._$Co) === null || r === void 0 ? void 0 : r[i]) : t._$Cl;
  const I = Ne(e) ? void 0 : e._$litDirective$;
  return (
    (A == null ? void 0 : A.constructor) !== I &&
      ((l = A == null ? void 0 : A._$AO) === null || l === void 0 || l.call(A, !1),
      I === void 0 ? (A = void 0) : ((A = new I(o)), A._$AT(o, t, i)),
      i !== void 0
        ? (((c = (_ = t)._$Co) !== null && c !== void 0 ? c : (_._$Co = []))[i] = A)
        : (t._$Cl = A)),
    A !== void 0 && (e = Se(o, A._$AS(o, e.values), A, i)),
    e
  );
}
class nn {
  constructor(e, t) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    var t;
    const {
        el: { content: i },
        parts: r,
      } = this._$AD,
      l = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : _e).importNode(
        i,
        !0
      );
    $e.currentNode = l;
    let c = $e.nextNode(),
      _ = 0,
      A = 0,
      I = r[0];
    for (; I !== void 0; ) {
      if (_ === I.index) {
        let P;
        I.type === 2
          ? (P = new Pe(c, c.nextSibling, this, e))
          : I.type === 1
            ? (P = new I.ctor(c, I.name, I.strings, this, e))
            : I.type === 6 && (P = new ln(c, this, e)),
          this._$AV.push(P),
          (I = r[++A]);
      }
      _ !== (I == null ? void 0 : I.index) && ((c = $e.nextNode()), _++);
    }
    return ($e.currentNode = _e), l;
  }
  v(e) {
    let t = 0;
    for (const i of this._$AV)
      i !== void 0 &&
        (i.strings !== void 0 ? (i._$AI(e, i, t), (t += i.strings.length - 2)) : i._$AI(e[t])),
        t++;
  }
}
class Pe {
  constructor(e, t, i, r) {
    var l;
    (this.type = 2),
      (this._$AH = K),
      (this._$AN = void 0),
      (this._$AA = e),
      (this._$AB = t),
      (this._$AM = i),
      (this.options = r),
      (this._$Cp = (l = r == null ? void 0 : r.isConnected) === null || l === void 0 || l);
  }
  get _$AU() {
    var e, t;
    return (t = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && t !== void 0
      ? t
      : this._$Cp;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    (e = Se(this, e, t)),
      Ne(e)
        ? e === K || e == null || e === ''
          ? (this._$AH !== K && this._$AR(), (this._$AH = K))
          : e !== this._$AH && e !== Oe && this._(e)
        : e._$litType$ !== void 0
          ? this.g(e)
          : e.nodeType !== void 0
            ? this.$(e)
            : ((i) => wt(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == 'function')(e)
              ? this.T(e)
              : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), (this._$AH = this.k(e)));
  }
  _(e) {
    this._$AH !== K && Ne(this._$AH)
      ? (this._$AA.nextSibling.data = e)
      : this.$(_e.createTextNode(e)),
      (this._$AH = e);
  }
  g(e) {
    var t;
    const { values: i, _$litType$: r } = e,
      l =
        typeof r == 'number'
          ? this._$AC(e)
          : (r.el === void 0 && (r.el = De.createElement(r.h, this.options)), r);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === l) this._$AH.v(i);
    else {
      const c = new nn(l, this),
        _ = c.u(this.options);
      c.v(i), this.$(_), (this._$AH = c);
    }
  }
  _$AC(e) {
    let t = $t.get(e.strings);
    return t === void 0 && $t.set(e.strings, (t = new De(e))), t;
  }
  T(e) {
    wt(this._$AH) || ((this._$AH = []), this._$AR());
    const t = this._$AH;
    let i,
      r = 0;
    for (const l of e)
      r === t.length
        ? t.push((i = new Pe(this.k(Le()), this.k(Le()), this, this.options)))
        : (i = t[r]),
        i._$AI(l),
        r++;
    r < t.length && (this._$AR(i && i._$AB.nextSibling, r), (t.length = r));
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for (
      (i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, t);
      e && e !== this._$AB;

    ) {
      const r = e.nextSibling;
      e.remove(), (e = r);
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 &&
      ((this._$Cp = e), (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
}
class Ee {
  constructor(e, t, i, r, l) {
    (this.type = 1),
      (this._$AH = K),
      (this._$AN = void 0),
      (this.element = e),
      (this.name = t),
      (this._$AM = r),
      (this.options = l),
      i.length > 2 || i[0] !== '' || i[1] !== ''
        ? ((this._$AH = Array(i.length - 1).fill(new String())), (this.strings = i))
        : (this._$AH = K);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, i, r) {
    const l = this.strings;
    let c = !1;
    if (l === void 0)
      (e = Se(this, e, t, 0)), (c = !Ne(e) || (e !== this._$AH && e !== Oe)), c && (this._$AH = e);
    else {
      const _ = e;
      let A, I;
      for (e = l[0], A = 0; A < l.length - 1; A++)
        (I = Se(this, _[i + A], t, A)),
          I === Oe && (I = this._$AH[A]),
          c || (c = !Ne(I) || I !== this._$AH[A]),
          I === K ? (e = K) : e !== K && (e += (I != null ? I : '') + l[A + 1]),
          (this._$AH[A] = I);
    }
    c && !r && this.j(e);
  }
  j(e) {
    e === K
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, e != null ? e : '');
  }
}
class rn extends Ee {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(e) {
    this.element[this.name] = e === K ? void 0 : e;
  }
}
const on = Me ? Me.emptyScript : '';
class an extends Ee {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(e) {
    e && e !== K
      ? this.element.setAttribute(this.name, on)
      : this.element.removeAttribute(this.name);
  }
}
class sn extends Ee {
  constructor(e, t, i, r, l) {
    super(e, t, i, r, l), (this.type = 5);
  }
  _$AI(e, t = this) {
    var i;
    if ((e = (i = Se(this, e, t, 0)) !== null && i !== void 0 ? i : K) === Oe) return;
    const r = this._$AH,
      l =
        (e === K && r !== K) ||
        e.capture !== r.capture ||
        e.once !== r.once ||
        e.passive !== r.passive,
      c = e !== K && (r === K || l);
    l && this.element.removeEventListener(this.name, this, r),
      c && this.element.addEventListener(this.name, this, e),
      (this._$AH = e);
  }
  handleEvent(e) {
    var t, i;
    typeof this._$AH == 'function'
      ? this._$AH.call(
          (i = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null &&
            i !== void 0
            ? i
            : this.element,
          e
        )
      : this._$AH.handleEvent(e);
  }
}
class ln {
  constructor(e, t, i) {
    (this.element = e), (this.type = 6), (this._$AN = void 0), (this._$AM = t), (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Se(this, e);
  }
}
const _t = We.litHtmlPolyfillSupport;
_t == null || _t(De, Pe),
  ((Ze = We.litHtmlVersions) !== null && Ze !== void 0 ? Ze : (We.litHtmlVersions = [])).push(
    '2.7.4'
  );
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const dn = Symbol.for(''),
  cn = (o) => {
    if ((o == null ? void 0 : o.r) === dn) return o == null ? void 0 : o._$litStatic$;
  },
  kt = new Map(),
  ae = (
    (o) =>
    (e, ...t) => {
      const i = t.length;
      let r, l;
      const c = [],
        _ = [];
      let A,
        I = 0,
        P = !1;
      for (; I < i; ) {
        for (A = e[I]; I < i && ((l = t[I]), (r = cn(l)) !== void 0); ) (A += r + e[++I]), (P = !0);
        I !== i && _.push(l), c.push(A), I++;
      }
      if ((I === i && c.push(e[i]), P)) {
        const F = c.join('$$lit$$');
        (e = kt.get(F)) === void 0 && ((c.raw = c), kt.set(F, (e = c))), (t = _);
      }
      return o(e, ...t);
    }
  )(en);
var $i =
    "data:image/svg+xml,%3csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='4.82043' cy='4.82043' r='4.17043' transform='matrix(0.713074 -0.701089 0.713074 0.701089 0.445312 7.72949)' stroke='%23707A8D' stroke-width='1.3'/%3e%3cline y1='-0.65' x2='7.06997' y2='-0.65' transform='matrix(0.713074 0.701089 -0.713074 0.701089 9.61133 10.4326)' stroke='%23707A8D' stroke-width='1.3'/%3e%3c/svg%3e",
  Bt;
const hn = se(
  Bt ||
    (Bt = O([
      ".walletSelectorPage{position:relative;display:flex;flex-direction:column;height:464px;justify-content:center;align-items:center;background-color:#202137}@media (max-width:960px){.walletSelectorPage{height:368px}}.walletSelectorPage::after{content:'';position:absolute;bottom:0;left:0;right:0;height:32px;background:linear-gradient(180deg,rgba(15,15,26,0) 0,#0f0f1a 100%);opacity:.7;pointer-events:none;z-index:1}.contentContainer{width:100%;display:flex;align-items:center;justify-content:flex-start;flex-direction:column;height:100%;overflow-x:hidden;scrollbar-width:none}.contentContainer::-webkit-scrollbar{display:none}@media (max-width:1080px){.recentDetectedContainer,.walletSelectorPage{width:204px}}.walletSelectorHeader{padding:16px 12px;padding-bottom:10px;padding-top:12px;width:100%;display:flex;justify-content:space-between;align-items:center}.walletSelectorHeader span{font-weight:400;letter-spacing:.32px;font-size:16px;color:#707a8d}.walletSelectorBlockchain{gap:4px;display:flex;align-items:center}.walletSelectorBlockchain span{color:#6067f9;letter-spacing:.32px;font-size:16px;line-height:22px}.walletSelectorBlockchain img{width:24px;height:24px;border-radius:100%}.walletInputSearchContainer{display:flex;justify-content:space-between;align-items:center;margin:0 12px;padding:8px;width:264px;height:32px;background-color:#0f0f1a;border-radius:8px}@media (max-width:1080px){.walletInputSearchContainer{width:184px}}.walletInputSearchContainer img{width:20px;height:20px}.walletInputSearch{background-color:#0f0f1a;color:#707a8d;font-size:14px;width:100%;letter-spacing:.28px;border:0;opacity:.7;margin-bottom:-2px}.walletInputIcon{margin-bottom:-2px}.walletInputSearch:focus{outline:0}.NotFoundContainer{padding-top:16px;display:flex;flex-direction:column;align-items:center;justify-content:center}.NotFoundHeading{padding-top:16px;color:#f7f7f7;font-weight:700;font-size:16px;line-height:22px;letter-spacing:.28px}.NotFoundInfo{padding-top:4px;width:171px;color:#707a8d;text-align:center;font-weight:400;font-size:12px;line-height:16px;letter-spacing:.28px}.NotFoundGif{width:104px;height:216px}.otherItemsContainer{width:272px;border-radius:8px;display:grid;grid-template-columns:1fr 1fr 1fr;justify-content:center;align-items:center;row-gap:4px;-moz-column-gap:8px;column-gap:8px;padding-inline:8px}.recentDetectedContainer{background-color:#343551;width:272px;border-radius:8px;padding:8px;margin-bottom:12px;display:grid;grid-template-columns:1fr 1fr 1fr;justify-content:center;align-items:center;row-gap:4px;-moz-column-gap:8px;column-gap:8px}@media (max-width:1080px){.otherItemsContainer,.recentDetectedContainer{width:184px;grid-template-columns:1fr 1fr}}@media (max-width:640px){.otherItemsContainer,.recentDetectedContainer{width:184px}}.walletSelectorButtons{max-height:100%;overflow-y:scroll;scrollbar-width:none;margin-top:4px;padding-top:4px;padding-bottom:16px}.walletSelectorButtons::-webkit-scrollbar{display:none}.walletInputSearchWrapper{position:relative}.walletInputSearchWrapper::after{content:'';position:absolute;bottom:-10px;left:0;right:0;height:10px;background:linear-gradient(180deg,#202137 12.37%,rgba(32,33,55,0) 100%);opacity:1;pointer-events:none;z-index:1}",
    ]))
);
var Ft;
const pn = se(
  Ft ||
    (Ft = O([
      '.walletSelectorItem{display:flex;align-items:center;flex-direction:column;border-radius:8px;width:80px;padding:4px 0;height:108px;background-color:transparent}.walletSelectorItem img{margin-bottom:6px;width:64px;height:64px}.walletSelectorItem:hover{background-color:#47486a}.walletSelectorName{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;font-weight:700;font-size:14px;letter-spacing:.28px;color:#fff;flex-shrink:0}.walletSelectorInfo{font-weight:400;font-size:10px;line-height:13px;letter-spacing:.28px;color:#6067f9;margin-top:-2px}',
    ]))
);
var Nt, Ot;
let Ce = class extends le {
  constructor() {
    super(...arguments),
      (this.name = ''),
      (this.icon = ''),
      (this.status = ''),
      (this.onClick = () => {});
  }
  render() {
    return ae(
      Ot ||
        (Ot = O([
          '<button id="nightly-wallet-selector-item-button" class="walletSelectorItem" @click="',
          '"><img src="',
          '"> <span class="walletSelectorName">',
          '</span> ',
          '</button>',
        ])),
      this.onClick,
      this.icon,
      this.name,
      this.status
        ? ae(Nt || (Nt = O(['<span class="walletSelectorInfo">', '</span>'])), this.status)
        : ''
    );
  }
};
(Ce.styles = ce(pn)),
  C([M({ type: String })], Ce.prototype, 'name', void 0),
  C([M({ type: String })], Ce.prototype, 'icon', void 0),
  C([M({ type: String })], Ce.prototype, 'status', void 0),
  C([M({ type: Function })], Ce.prototype, 'onClick', void 0),
  (Ce = C([de('nightly-wallet-selector-item')], Ce));
const et = (o, e) => (o.recent ? -1 : e.recent ? 1 : o.detected ? -1 : e.detected ? 1 : 0);
var Dt, Tt, Ht, Wt, Lt, Pt;
let me = class extends le {
  constructor() {
    super(...arguments),
      (this.chainIcon = ''),
      (this.chainName = ''),
      (this._selectorItems = []),
      (this.filteredItems = []),
      (this.searchText = ''),
      (this.onWalletClick = () => {});
  }
  get selectorItems() {
    return this._selectorItems;
  }
  set selectorItems(o) {
    (this._selectorItems = [...o].sort(et)),
      (this.filteredItems = this._selectorItems.filter((e) =>
        e.name.toLowerCase().includes(this.searchText)
      ));
  }
  render() {
    return ae(
      Dt ||
        (Dt = O([
          '<div class="walletSelectorPage"><div class="contentContainer"><div class="walletSelectorHeader"><span>Wallets</span><div class="walletSelectorBlockchain"><img src="',
          '"> <span>',
          '</span></div></div><div class="walletInputSearchWrapper"><div class="walletInputSearchContainer"><input placeholder="Search" class="walletInputSearch" @input="',
          '"> <img class="walletInputIcon" src="',
          '"></div></div>',
          '</div></div>',
        ])),
      this.chainIcon,
      this.chainName,
      this.handleSearchInput,
      $i,
      this.filteredItems.length === 0 ? this.renderNotFoundIcon() : this.renderSelectorItems()
    );
  }
  renderSelectorItems() {
    const o = this.filteredItems.filter((t) => t.recent || t.detected),
      e = this.filteredItems.filter((t) => !t.recent && !t.detected);
    return ae(
      Lt ||
        (Lt = O([
          '<div class="walletSelectorButtons">',
          '<div class="otherItemsContainer">',
          '</div></div>',
        ])),
      o.length
        ? ae(
            Ht || (Ht = O(['<div class="recentDetectedContainer">', '</div>'])),
            o.map((t) =>
              ae(
                Tt ||
                  (Tt = O([
                    '<nightly-wallet-selector-item name="',
                    '" icon="',
                    '" status="',
                    '" @click="',
                    '"></nightly-wallet-selector-item>',
                  ])),
                t.name,
                t.icon,
                t.recent ? 'Recent' : t.detected ? 'Detected' : '',
                () => this.onWalletClick(t.name)
              )
            )
          )
        : null,
      e.map((t) =>
        ae(
          Wt ||
            (Wt = O([
              '<nightly-wallet-selector-item name="',
              '" icon="',
              '" status="',
              '" @click="',
              '"></nightly-wallet-selector-item>',
            ])),
          t.name,
          t.icon,
          t.recent ? 'Recent' : t.detected ? 'Detected' : '',
          () => this.onWalletClick(t.name)
        )
      )
    );
  }
  renderNotFoundIcon() {
    return ae(
      Pt ||
        (Pt = O([
          '<div class="NotFoundContainer"><img src="https://registry.connect.nightly.app/images/fox_sad.gif" alt="Not Found" class="NotFoundGif"> <span class="NotFoundHeading">Nothing found...</span> <span class="NotFoundInfo">Make sure you’ve typed the name correctly.</span></div>',
        ]))
    );
  }
  handleSearchInput(o) {
    const e = o.target.value.toLowerCase();
    (this.searchText = e),
      (this.filteredItems = this.selectorItems.filter((t) => t.name.toLowerCase().includes(e)));
  }
};
(me.styles = ce(hn)),
  C([M({ type: String })], me.prototype, 'chainIcon', void 0),
  C([M({ type: String })], me.prototype, 'chainName', void 0),
  C([M({ type: Array })], me.prototype, 'selectorItems', null),
  C([ee()], me.prototype, 'filteredItems', void 0),
  C([ee()], me.prototype, 'searchText', void 0),
  C([M({ type: Function })], me.prototype, 'onWalletClick', void 0),
  (me = C([de('nightly-wallet-selector-page')], me));
var Et;
let pe = class extends le {
  constructor() {
    super(...arguments),
      (this.selectorItems = []),
      (this.onWalletClick = () => {}),
      (this.chainIcon = ''),
      (this.chainName = ''),
      (this.sessionId = ''),
      (this.relay = ''),
      (this.copyMessage = 'Copy'),
      (this.timeoutRef = void 0),
      (this.onCopy = () => {
        navigator.clipboard.writeText(
          'nc:' +
            this.sessionId +
            '?network=' +
            this.chainName.replace(/\s/g, '') +
            '&relay=' +
            this.relay
        ),
          (this.copyMessage = 'Copied!'),
          clearTimeout(this.timeoutRef),
          (this.timeoutRef = setTimeout(() => {
            this.copyMessage = 'Copy';
          }, 1e3));
      });
  }
  render() {
    return X(
      Et ||
        (Et = O([
          '<div class="mainContainer"><div class="bottomContainer"><div class="qrContainer"><div class="qrTop"><div class="scan"><img class="scanImg" src="',
          '"> <span>Scan QR code</span></div><button id="nightly-modal-copy-button" class="copy" @click="',
          '"><img class="copyImg" src="',
          '">',
          '</button></div><img class="code" src="',
          '"></div><nightly-wallet-selector-page .selectorItems="',
          '" .onWalletClick="',
          '" .chainIcon="',
          '" .chainName="',
          '"></nightly-wallet-selector-page></div></div>',
        ])),
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACNSURBVHgB3ZPNCYQwEIXfhC1gS7CVrWRbSNjLopecxIuajizBEkwJnlUcIyqIeDDkIPjdZoZ5MD+PVFJ8GWzAeGPFpD/CCTLOeRdaItLkkg1G8TGZsvBA/ssIYqyPql7MvQKBBAvcz3wFjQAesIMHPJIAoZXaGcOTpYfsy9lYoePKzRNtxUt27rkFBjUBuPgzSHg3C+kAAAAASUVORK5CYII=',
      this.onCopy,
      "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='6.5' y='0.5' width='9' height='11' rx='1.5' stroke='%236067F9'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M6 4H2C0.895431 4 0 4.89543 0 6V14C0 15.1046 0.89543 16 2 16H8C9.10457 16 10 15.1046 10 14V12H9V14C9 14.5523 8.55228 15 8 15H2C1.44772 15 1 14.5523 1 14V6C1 5.44772 1.44772 5 2 5H6V4Z' fill='%236067F9'/%3e%3c/svg%3e",
      this.copyMessage,
      Ci(
        wi(
          'nc:' +
            this.sessionId +
            '?network=' +
            this.chainName.replace(/\s/g, '') +
            '&relay=' +
            this.relay,
          { width: 400, height: 400, margin: 10 }
        )
      ),
      this.selectorItems,
      this.onWalletClick,
      this.chainIcon,
      this.chainName
    );
  }
};
(pe.styles = ce(Xi)),
  C([M({ type: Array })], pe.prototype, 'selectorItems', void 0),
  C([M({ type: Function })], pe.prototype, 'onWalletClick', void 0),
  C([M({ type: String })], pe.prototype, 'chainIcon', void 0),
  C([M({ type: String })], pe.prototype, 'chainName', void 0),
  C([M({ type: String })], pe.prototype, 'sessionId', void 0),
  C([M({ type: String })], pe.prototype, 'relay', void 0),
  C([ee()], pe.prototype, 'copyMessage', void 0),
  (pe = C([de('nightly-modal')], pe));
var Rt;
const fn = se(
  Rt ||
    (Rt = O([
      '.nightlyModal{max-width:720px;display:flex;flex-direction:column}@media (max-width:1080px) and (min-width:960px){.nightlyModal{max-width:636px}}@media (max-width:960px) and (min-width:640px){.nightlyModal{max-width:540px}}@media (max-width:640px){.nightlyModal{max-width:100%;transform-origin:0 100%;animation:250ms ease-out 0s 1 slideIn normal forwards}.slideOutMobile{animation:250ms ease-out 0s 1 slideOut normal forwards}}@keyframes slideIn{0%{transform:translateY(100%)}100%{transform:translateY(0)}}@keyframes slideOut{0%{transform:translateY(0)}100%{transform:translateY(100%)}}.contentWrapper{border-radius:0 0 16px 16px;overflow:hidden;background-color:#17182b;border:1px solid #343551;border-top:none}@media (max-width:640px){.contentWrapper{top:-20px;position:relative;border-radius:16px 16px 0 0}}.modalConnect{display:block}.modalDesktop{display:block}.modalMobile{display:none}@media (max-width:640px){.modalDesktop{display:none}.modalMobile{display:block}}',
    ]))
);
var tt =
    "data:image/svg+xml,%3csvg width='15' height='26' viewBox='0 0 15 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14 1L2 13L14 25' stroke='%23707A8D' stroke-width='2'/%3e%3c/svg%3e",
  Vt;
const un = se(
  Vt ||
    (Vt = O([
      '.mainContainer{height:464px;width:100%}@media (max-width:960px){.mainContainer{height:368px}}@media (max-width:1080px) and (min-width:960px){.mainContainer{max-width:636px}}@media (max-width:960px) and (min-width:640px){.mainContainer{max-width:540px}}@media (max-width:640px){.mainContainer{max-width:100%}}.wrapperConnectPage{background-color:#202137}.headerContainer{padding:16px;display:flex;justify-content:space-between}.buttonContainer{height:32px;min-width:32px;padding-inline:8px}.textContainer{width:100%;display:flex;justify-content:center;align-items:center}.textContainer span{font-family:Prompt;font-style:normal;font-weight:400;font-size:16px;line-height:22px;letter-spacing:.28px;color:#f7f7f7}.custom-loader{width:18px;height:18px;border-radius:50%;border:2px solid;border-color:transparent;border-right-color:#fff;animation:s2 1s infinite linear}@keyframes s2{to{transform:rotate(1turn)}}.coinInfoContainer{display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:16px;margin-bottom:36px}.coinInfoContainer img{width:144px;height:144px}@media (max-width:960px){.coinInfoContainer{padding-top:4px;margin-bottom:16px}.coinInfoContainer img{width:72px;height:72px}}@media (max-width:640px){.coinInfoContainer img{width:104px;height:104px}}.coinName{font-style:normal;font-weight:600;font-size:24px;line-height:32px;letter-spacing:.28px;color:#fff;margin-top:14px}@media (min-width:640px) and (max-width:960px){.coinName{font-size:18px;line-height:24px;letter-spacing:.28px}.connectingContainer span{font-size:12px;line-height:16px}}.connectInfo{margin-top:4px}.reConnectWrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#17182b}.reConnectWrapper p{color:#707a8d;text-align:center;padding:24px 16px 16px 16px}@media (max-width:640px){.reConnectWrapper p{padding:16px}}.reConnectWrapper button{width:128px;height:32px;background:#6067f9;color:#f7f7f7;border-radius:8px;margin-bottom:24px}.link{color:#6067f9}.connectingContainer{display:flex;align-items:center;justify-content:center}.connectingContainer span{color:#707a8d;font-style:normal;font-weight:400;font-size:16px;line-height:22px;letter-spacing:.28px;margin-right:8px}.error{color:#d25858;font-style:normal;font-weight:400;font-size:12px;line-height:22px;letter-spacing:.28px}.wrapperPage{display:flex;flex-flow:row wrap;flex-direction:column;width:100%;z-index:2;background-color:#202137;border-radius:16px}',
    ]))
);
var Ut, zt, jt;
let fe = class extends le {
  constructor() {
    super(...arguments),
      (this.connecting = !1),
      (this.nameLink = ''),
      (this.link = ''),
      (this.walletIcon = ''),
      (this.coinName = ''),
      (this.tryAgainClick = () => {}),
      (this.fallback = () => {});
  }
  render() {
    return X(
      jt ||
        (jt = O([
          '<div class="mainContainer"><div class="wrapperConnectPage"><div class="headerContainer"><button class="buttonContainer" id="connect-wallet-fallback-button" @click="',
          '"><img class="vector" src="',
          '"></button><div class="textContainer"><span>Connect wallet</span></div><button class="buttonContainer"></button></div><div class="coinInfoContainer"><img src="',
          '"> <span class="coinName">',
          '</span> ',
          '</div><div class="reConnectWrapper"><p>Connecting takes too long? Make sure ',
          ' is installed on your device. ',
          '</p><button id="connect-wallet-page-try-again-button" @click="',
          '">Try again</button></div></div></div>',
        ])),
      this.fallback,
      tt,
      this.walletIcon,
      this.coinName,
      this.connecting
        ? X(
            Ut ||
              (Ut = O([
                '<div class="connectingContainer"><span>Connecting...</span><div class="custom-loader"></div></div>',
              ]))
          )
        : X(zt || (zt = O(['<span class="error">Connecting failed</span>']))),
      this.nameLink,
      this.link.length
        ? zi(
            'Otherwise, visit\n              <a id="connect-wallet-page-link-wallet-website" class="link" href="'
              .concat(this.link, '"\n                >')
              .concat(this.nameLink, ' website</a\n              >\n              to download it.')
          )
        : '',
      this.tryAgainClick
    );
  }
};
(fe.styles = ce(un)),
  C([M({ type: Boolean })], fe.prototype, 'connecting', void 0),
  C([M({ type: String })], fe.prototype, 'nameLink', void 0),
  C([M({ type: String })], fe.prototype, 'link', void 0),
  C([M({ type: String })], fe.prototype, 'walletIcon', void 0),
  C([M({ type: String })], fe.prototype, 'coinName', void 0),
  C([M()], fe.prototype, 'tryAgainClick', void 0),
  C([M()], fe.prototype, 'fallback', void 0),
  (fe = C([de('nightly-connect-wallet')], fe));
var Gt;
const gn = se(
  Gt ||
    (Gt = O([
      ".walletSelectorButtons{display:flex;flex-direction:column;z-index:2;background-color:#17182b;width:100%;height:526px}.headerContainer{padding:16px;display:flex;justify-content:space-between}.buttonContainer{height:32px;min-width:32px;padding-inline:8px}.textContainer{width:100%;display:flex;justify-content:center;align-items:center}.inputContainer{width:100%;display:flex;justify-content:center;align-items:center;position:relative}.inputContainer::before{content:'';position:absolute;bottom:-20px;left:0;right:0;height:20px;background:linear-gradient(180deg,#17182b 12.37%,rgba(32,33,55,0) 100%);opacity:1;pointer-events:none;z-index:1}.textContainer span{font-family:Prompt;font-style:normal;font-weight:400;font-size:16px;line-height:22px;letter-spacing:.28px;color:#f7f7f7}.walletInputSearchContainer{display:flex;justify-content:center;align-items:center;margin:0 16px;margin-bottom:0;padding:12px 16px;width:100%;height:40px;background-color:#0f0f1a;border-radius:8px}.walletInputSearchContainer img{width:20px;height:20px}.walletInputSearch{background-color:#0f0f1a;color:#707a8d;font-size:15px;width:99%;line-height:22px;letter-spacing:.32px;border:0;opacity:.7;margin-bottom:-2px}.walletInputIcon{margin-bottom:-2px}.walletInputSearch:focus{outline:0}.recentDetectedContainer{width:100%;padding:16px 16px 0 16px;display:grid;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none}.recentDetectedContainer::before{content:'';position:absolute;bottom:0;left:0;right:0;height:32px;background:linear-gradient(180deg,rgba(15,15,26,0) 0,#0f0f1a 100%);opacity:.7;pointer-events:none;z-index:1}.recentDetectedContainer::-webkit-scrollbar{display:none}@media (min-width:640px){.recentDetectedContainer{grid-template-columns:repeat(5,1fr)}}@media (min-width:482px) and (max-width:639px){.recentDetectedContainer{grid-template-columns:repeat(4,1fr)}}@media (min-width:374px) and (max-width:482px){.recentDetectedContainer{grid-template-columns:repeat(4,1fr)}}@media (max-width:374px){.recentDetectedContainer{grid-template-columns:repeat(3,1fr)}}.NotFoundContainer{padding-top:16px;display:flex;flex-direction:column;align-items:center;justify-content:center}.NotFoundHeading{padding-top:16px;color:#f7f7f7;font-weight:700;font-size:16px;line-height:22px;letter-spacing:.28px}.NotFoundInfo{padding-top:4px;width:171px;color:#707a8d;text-align:center;font-weight:400;font-size:12px;line-height:16px;letter-spacing:.28px}.NotFoundGif{width:104px;height:216px}.nightlyWalletSelectorItem{display:flex;align-items:center;justify-content:center;height:-moz-fit-content;height:fit-content}",
    ]))
);
var Zt, Qt, qt, Yt;
let xe = class extends le {
  constructor() {
    super(...arguments),
      (this._selectorItems = []),
      (this.filteredItems = []),
      (this.searchText = '');
  }
  get selectorItems() {
    return this._selectorItems;
  }
  set selectorItems(o) {
    (this._selectorItems = [...o].sort(et)),
      (this.filteredItems = this._selectorItems.filter((e) =>
        e.name.toLowerCase().includes(this.searchText)
      ));
  }
  render() {
    return X(
      Zt ||
        (Zt = O([
          '<div class="walletSelectorButtons"><div class="headerContainer"><button class="buttonContainer" @click="',
          '"><img src="',
          '"></button><div class="textContainer"><span>All wallets</span></div><div class="buttonContainer"></div></div><div class="inputContainer"><div class="walletInputSearchContainer"><input placeholder="Search" class="walletInputSearch" @input="',
          '"> <img class="walletInputIcon" src="',
          '"></div></div>',
          '</div>',
        ])),
      this.showAllWallets,
      tt,
      this.handleSearchInput,
      $i,
      this.filteredItems.length ? this.renderItems() : this.renderNotFoundIcon()
    );
  }
  renderNotFoundIcon() {
    return X(
      Qt ||
        (Qt = O([
          '<div class="NotFoundContainer"><img src="https://registry.connect.nightly.app/images/fox_sad.gif" alt="Not Found" class="NotFoundGif"> <span class="NotFoundHeading">Nothing found...</span> <span class="NotFoundInfo">Make sure you’ve typed the name correctly.</span></div>',
        ]))
    );
  }
  renderItems() {
    return X(
      Yt || (Yt = O(['<div class="recentDetectedContainer">', '</div>'])),
      this.filteredItems.map((o) =>
        X(
          qt ||
            (qt = O([
              '<nightly-wallet-selector-item class="nightlyWalletSelectorItem" name="',
              '" icon="',
              '" status="',
              '" @click="',
              '"></nightly-wallet-selector-item>',
            ])),
          o.name,
          o.icon,
          o.recent ? 'Recent' : o.detected ? 'Detected' : '',
          () => this.onWalletClick(o.name)
        )
      )
    );
  }
  handleSearchInput(o) {
    const e = o.target.value.toLowerCase();
    (this.searchText = e),
      (this.filteredItems = this.selectorItems.filter((t) => t.name.toLowerCase().includes(e)));
  }
};
(xe.styles = ce(gn)),
  C([M({ type: Function })], xe.prototype, 'showAllWallets', void 0),
  C([M({ type: Function })], xe.prototype, 'onWalletClick', void 0),
  C([M({ type: Array })], xe.prototype, 'selectorItems', null),
  C([ee()], xe.prototype, 'filteredItems', void 0),
  C([ee()], xe.prototype, 'searchText', void 0),
  (xe = C([de('nightly-all-wallets-selector')], xe));
var Kt;
const mn = se(
  Kt ||
    (Kt = O([
      '.headerQrCodeWrapper{height:510px;z-index:2;background:#17182b}@media (max-width:482px) and (min-width:374px){.headerQrCodeWrapper{height:420px}}@media (max-width:373px){.headerQrCodeWrapper{height:332px}}.nightly-headerContainer{width:100%}.headerContainer{padding:16px;display:flex;justify-content:space-between}.buttonContainer{height:32px;min-width:32px;padding-inline:8px}.textContainer{width:100%;display:flex;justify-content:center;align-items:center}.textContainer span{font-family:Prompt;font-style:normal;font-weight:400;font-size:16px;line-height:22px;letter-spacing:.28px;color:#f7f7f7}.qrCodeWrapper{padding-bottom:16px;height:432px;display:flex;width:100%;justify-content:center;align-items:center}.code{border-radius:16px;border:1px solid #343551;padding:4px;width:432px;height:432px}@media (max-width:482px) and (min-width:374px){.code{width:342px;height:342px}.qrCodeWrapper{height:342px}}@media (max-width:373px){.code{width:248px;height:248px}.qrCodeWrapper{height:248px}}',
    ]))
);
var Xt;
let be = class extends le {
  constructor() {
    super(...arguments), (this.sessionId = ''), (this.relay = ''), (this.chainName = '');
  }
  render() {
    return X(
      Xt ||
        (Xt = O([
          '<div class="headerQrCodeWrapper"><div class="headerContainer"><button class="buttonContainer" @click="',
          '"><img src="',
          '"></button><div class="textContainer"><span>QR Code</span></div><div class="buttonContainer"></div></div><div class="qrCodeWrapper"><img class="code" src="',
          '"></div></div>',
        ])),
      this.showAllWallets,
      tt,
      Ci(
        wi(
          'nc:' +
            this.sessionId +
            '?network=' +
            this.chainName.replace(/\s/g, '') +
            '&relay=' +
            this.relay,
          { width: 432, height: 432, margin: 5 }
        )
      )
    );
  }
};
(be.styles = ce(mn)),
  C([M({ type: String })], be.prototype, 'sessionId', void 0),
  C([M({ type: String })], be.prototype, 'relay', void 0),
  C([M({ type: String })], be.prototype, 'chainName', void 0),
  C([M({ type: Function })], be.prototype, 'showAllWallets', void 0),
  (be = C([de('nightly-qr-code')], be));
var Jt;
const xn = se(
  Jt ||
    (Jt = O([
      '.walletWrapper{display:flex;flex-flow:row wrap;flex-direction:column;width:100%;z-index:2;background-color:#17182b}.infoConatiner{padding:16px;padding-bottom:0;display:flex;align-items:center;justify-content:space-between}.infoConatiner button{font-family:Prompt;font-style:normal;font-weight:400;font-size:16px;line-height:22px;display:flex;align-items:center;letter-spacing:.28px;color:#6067f9;width:89px;height:30px;background:rgba(96,103,249,.25);border-radius:4px;padding:4px 8px}.infoConatiner p{font-family:Prompt;font-style:normal;font-weight:400;font-size:16px;line-height:22px;letter-spacing:.28px;color:#f7f7f7}.mainContainerWalletSellector{display:grid;grid-gap:16px;padding:16px}@media (min-width:640px){.mainContainerWalletSellector{grid-template-columns:repeat(5,1fr)}.recentDetectedContainer{grid-template-columns:repeat(5,1fr)}}@media (min-width:482px) and (max-width:639px){.mainContainerWalletSellector{grid-gap:0;grid-template-columns:repeat(5,1fr)}.recentDetectedContainer{grid-template-columns:repeat(4,1fr)}}@media (min-width:374px) and (max-width:482px){.mainContainerWalletSellector{grid-gap:0;grid-template-columns:repeat(4,1fr)}.recentDetectedContainer{grid-template-columns:repeat(4,1fr)}}@media (max-width:374px){.mainContainerWalletSellector{grid-gap:0;grid-template-columns:repeat(3,1fr)}.recentDetectedContainer{grid-template-columns:repeat(3,1fr)}}.showListButtonContainer{display:flex;flex-direction:column;justify-content:center;align-items:center}.showListButton{display:grid;padding-bottom:8px;grid-template-columns:repeat(2,1fr);grid-auto-rows:24px;justify-items:center;align-items:center;gap:4px}.showListButtonContainer span{cursor:pointer;font-family:Prompt;font-style:normal;font-weight:700;font-size:12px;line-height:16px;text-align:center;letter-spacing:.28px;color:#fff}.buttonIcons{width:24px;height:24px}.topWalletsItem{display:flex;align-items:center;justify-content:center;height:-moz-fit-content;height:fit-content}',
    ]))
);
var ei, ti, ii;
let ye = class extends le {
  get selectorItems() {
    return this._selectorItems;
  }
  set selectorItems(o) {
    this._selectorItems = [...o].sort(et);
  }
  constructor() {
    super(),
      (this.openQrPage = () => {
        console.log('show wallets');
      }),
      (this.breakpoint = 'lg'),
      (this._selectorItems = []),
      this.updateBreakpoint(),
      window.addEventListener('resize', () => {
        this.updateBreakpoint();
      });
  }
  updateBreakpoint() {
    const o = window.innerWidth;
    this.breakpoint = (function (e) {
      return e < 374 ? 'xs' : e <= 485 ? 'sm' : 'lg';
    })(o);
  }
  render() {
    const o = (function (t) {
        switch (t) {
          case 'xs':
            return 2;
          case 'sm':
            return 3;
          default:
            return 4;
        }
      })(this.breakpoint),
      e = this._selectorItems.length > o ? 'flex' : 'none';
    return X(
      ii ||
        (ii = O([
          '<div class="mainContainer"><div class="walletWrapper"><div class="infoConatiner"><p>Connect wallet</p><button id="nightly-wallet-selector-page-qrCode-open-button" @click="',
          '">QR Code</button></div><div class="mainContainerWalletSellector">',
          '<div class="showListButtonContainer" @click="',
          '" style="',
          '"><button class="showListButton">',
          '</button> <span>Other wallet</span></div></div></div></div>',
        ])),
      this.openQrPage,
      this._selectorItems
        .slice(0, o)
        .map((t) =>
          X(
            ei ||
              (ei = O([
                '<nightly-wallet-selector-item class="topWalletsItem" name="',
                '" icon="',
                '" status="',
                '" @click="',
                '"></nightly-wallet-selector-item>',
              ])),
            t.name,
            t.icon,
            t.recent ? 'Recent' : t.detected ? 'Detected' : '',
            () => this.onWalletClick(t.name)
          )
        ),
      this.showAllWallets,
      'display: '.concat(e),
      this.selectorItems
        .slice(0, Math.min(this.selectorItems.length, 4))
        .map((t) =>
          X(
            ti || (ti = O(['<div><img src="', '" class="buttonIcons" alt="', '"></div>'])),
            t.icon,
            t.name
          )
        )
    );
  }
};
(ye.styles = ce(xn)),
  C([M({ type: Function })], ye.prototype, 'showAllWallets', void 0),
  C([M({ type: Function })], ye.prototype, 'onWalletClick', void 0),
  C([M({ type: Function })], ye.prototype, 'openQrPage', void 0),
  C([M({ type: Array })], ye.prototype, 'selectorItems', null),
  C([ee()], ye.prototype, 'breakpoint', void 0),
  (ye = C([de('nightly-wallet-wrapper')], ye));
var ni;
const yn = se(
  ni ||
    (ni = O([
      '.selectorView{display:block;position:absolute;top:0;width:100%}.selectorWrapper{transition:height 380ms}.topView{height:182px}.qrView{height:510px}@media (max-width:482px) and (min-width:374px){.qrView{height:420px}}@media (max-width:373px){.qrView{height:332px}}.walletsView{height:526px}',
    ]))
);
var ri, oi, ai, si;
let re = class extends le {
  constructor() {
    super(...arguments),
      (this.showAll = !1),
      (this.isTopWalletsView = !0),
      (this.isQrPageVisible = !1),
      (this.chainIcon = ''),
      (this.sessionId = ''),
      (this.chainName = ''),
      (this.relay = ''),
      (this.onWalletClick = () => {}),
      (this.selectorItems = []);
  }
  showAllWallets() {
    if (this.isQrPageVisible)
      (this.isQrPageVisible = !1), (this.isTopWalletsView = !0), (this.showAll = !1);
    else {
      const o = this.showAll;
      (this.isTopWalletsView = o), (this.showAll = !o);
    }
  }
  openQrPage() {
    (this.isQrPageVisible = !0), (this.isTopWalletsView = !1);
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      (this.isTopWalletsView = !0),
      (this.isQrPageVisible = !1),
      (this.showAll = !1);
  }
  renderView() {
    return this.isTopWalletsView
      ? ae(
          ri ||
            (ri = O([
              '<nightly-wallet-wrapper class="selectorView" .sessionId="',
              '" .showAllWallets="',
              '" .onWalletClick="',
              '" .openQrPage="',
              '" .selectorItems="',
              '" ',
              '></nightly-wallet-wrapper>',
            ])),
          this.sessionId,
          this.showAllWallets.bind(this),
          this.onWalletClick.bind(this),
          () => this.openQrPage(),
          this.selectorItems,
          Ae({
            properties: ['opacity'],
            keyframeOptions: { duration: 380 },
            skipInitial: !0,
            in: [{ opacity: 0 }, { offset: 0.25, opacity: 0 }, { offset: 1, opacity: 1 }],
          })
        )
      : this.showAll
        ? ae(
            oi ||
              (oi = O([
                '<nightly-all-wallets-selector class="selectorView" .showAllWallets="',
                '" .onWalletClick="',
                '" .selectorItems="',
                '" ',
                '></nightly-all-wallets-selector>',
              ])),
            this.showAllWallets.bind(this),
            this.onWalletClick.bind(this),
            this.selectorItems,
            Ae({
              properties: ['opacity'],
              keyframeOptions: { duration: 380 },
              in: [{ opacity: 0 }, { offset: 0.25, opacity: 0 }, { offset: 1, opacity: 1 }],
            })
          )
        : ae(
            ai ||
              (ai = O([
                '<nightly-qr-code class="selectorView" .chainName="',
                '" .sessionId="',
                '" .relay="',
                '" .showAllWallets="',
                '" ',
                '></nightly-qr-code>',
              ])),
            this.chainName,
            this.sessionId,
            this.relay,
            this.showAllWallets.bind(this),
            Ae({
              properties: ['opacity'],
              keyframeOptions: { duration: 380 },
              in: [{ opacity: 0 }, { offset: 0.25, opacity: 0 }, { offset: 1, opacity: 1 }],
            })
          );
  }
  render() {
    return ae(
      si || (si = O(['<div class="selectorWrapper ', '">', '</div>'])),
      this.isTopWalletsView ? 'topView' : this.isQrPageVisible ? 'qrView' : 'walletsView',
      this.renderView()
    );
  }
};
(re.styles = ce(yn)),
  C([ee()], re.prototype, 'showAll', void 0),
  C([ee()], re.prototype, 'isTopWalletsView', void 0),
  C([ee()], re.prototype, 'isQrPageVisible', void 0),
  C([M({ type: String })], re.prototype, 'chainIcon', void 0),
  C([M({ type: String })], re.prototype, 'sessionId', void 0),
  C([M({ type: String })], re.prototype, 'chainName', void 0),
  C([M({ type: String })], re.prototype, 'relay', void 0),
  C([M({ type: Function })], re.prototype, 'onWalletClick', void 0),
  C([M({ type: Array })], re.prototype, 'selectorItems', void 0),
  (re = C([de('nightly-wallet-selector-small-page')], re));
var li;
const wn = se(
  li ||
    (li = O([
      '.mainContainer-header{width:100%;height:56px;position:relative;overflow:hidden;border-radius:16px 16px 0 0;background-color:#6067f9}@media (max-width:640px){.mainContainer-header{height:76px}}.cloudsAnimationHeader{z-index:2;position:relative;right:100%;background-repeat:no-repeat;background-position:top;background-position-y:-14px;width:1525px;height:56px;margin:auto;border-radius:4px;animation-name:slide;animation-iteration-count:infinite;animation-duration:32s;animation-timing-function:linear}@media (max-width:640px){.cloudsAnimationHeader{animation-duration:24s}}@media (max-width:560px){.cloudsAnimationHeader{animation-duration:20s}}@media (max-width:400px){.cloudsAnimationHeader{animation-duration:16s}}@keyframes slide{0%{right:201%}100%{right:-1%}}.starsAnimationHeader{position:absolute;width:100%;z-index:1;background-color:none;height:56px;background-repeat:no-repeat;background-position:top;margin:auto;animation:fade-in-out 4s ease-in-out infinite}@keyframes fade-in-out{0%{opacity:10%}50%{opacity:100%}100%{opacity:10%}}.logoContainer{z-index:3;width:100%;position:absolute;top:0;display:flex;justify-content:space-between;padding:16px}.header-logo{width:98px;height:24px}.closeButton{width:24px;height:24px}',
    ]))
);
var di;
let He = class extends le {
  constructor() {
    super(...arguments), (this.onClose = () => {});
  }
  render() {
    return X(
      di ||
        (di = O([
          '<div class="mainContainer-header"><div class="logoContainer"><img class="header-logo" src="',
          '"> <button class="closeButton" @click="',
          '"><img src="',
          '"></button></div><div class="starsAnimationHeader" style="',
          '"></div><div class="cloudsAnimationHeader" style="',
          '"></div></div>',
        ])),
      "data:image/svg+xml,%3csvg width='99' height='24' viewBox='0 0 99 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.8072 22.9208C11.7897 23.9922 10.2726 23.9922 10.2726 23.9922C10.2726 23.9922 8.75544 23.9922 7.73796 22.9208C7.20776 22.4005 7.02245 21.8419 6.82857 21.2575C6.58947 20.5369 6.33733 19.7769 5.40926 19.0007C3.80431 17.6701 1.78146 18.6165 1.78146 18.6165C0.385454 15.7303 1.14554 12.3725 1.14554 12.3725C-1.15213 6.15308 0.618438 1.64372 1.20701 0.144711C1.22737 0.0928532 1.24632 0.0445983 1.26364 0C2.96549 2.45201 5.10038 4.14811 7.61683 5.28821C8.49198 5.04145 9.39136 4.91026 10.2726 4.91963C11.1568 4.91026 12.0532 5.04145 12.9283 5.28821C15.4478 4.15123 17.5797 2.45201 19.2815 0C19.2988 0.0445974 19.3178 0.0928513 19.3381 0.144708C19.9267 1.64371 21.6973 6.15307 19.3996 12.3725C19.3996 12.3725 20.1597 15.7303 18.7637 18.6165C18.7637 18.6165 16.7408 17.6701 15.1359 19.0007C14.21 19.7765 13.9574 20.5361 13.718 21.2564C13.5235 21.8412 13.3377 22.4001 12.8072 22.9208ZM1.58491 2.01465C0.764259 4.98517 1.11856 8.74284 2.41464 11.4791C3.74099 10.5108 5.13397 9.01459 5.87589 7.43094C4.12861 6.09717 2.66295 4.82899 1.58491 2.01465ZM8.39188 16.8452C8.32829 14.7087 6.28727 14.0215 4.89429 14.9211C4.89429 14.9211 5.11233 15.8394 6.12981 16.3017C6.48556 16.4637 6.75447 16.4633 7.03034 16.4628C7.39789 16.4622 7.77779 16.4616 8.39188 16.8452ZM12.1538 16.8452C12.2174 14.7087 14.2584 14.0215 15.6514 14.9211C15.6514 14.9211 15.4334 15.8394 14.4159 16.3017C14.0601 16.4637 13.7912 16.4633 13.5153 16.4628C13.1478 16.4622 12.7679 16.4616 12.1538 16.8452ZM18.9607 2.01465C19.7813 4.98517 19.427 8.74284 18.131 11.4791C16.8046 10.5108 15.4116 9.01459 14.6697 7.43094C16.417 6.09717 17.8826 4.82899 18.9607 2.01465ZM10.2728 23.8766C11.002 23.8766 11.5931 23.3396 11.5931 22.6772C11.5931 22.0148 11.002 21.4777 10.2728 21.4777C9.54364 21.4777 8.95252 22.0148 8.95252 22.6772C8.95252 23.3396 9.54364 23.8766 10.2728 23.8766Z' fill='%23F7F7F7'/%3e%3cpath d='M28.1016 4.62991H31.1422L37.1414 14.0543V4.62991H40.2643V19.2043H37.2442L31.2244 9.77994V19.2043H28.1016V4.62991Z' fill='%23F7F7F7'/%3e%3cpath d='M44.1122 7.65321C43.6328 7.65321 43.2287 7.49336 42.9 7.17365C42.5713 6.85395 42.4069 6.45084 42.4069 5.96433C42.4069 5.49172 42.5713 5.09557 42.9 4.77586C43.2287 4.44226 43.6328 4.27546 44.1122 4.27546C44.5916 4.27546 44.9956 4.44226 45.3243 4.77586C45.6531 5.09557 45.8174 5.49172 45.8174 5.96433C45.8174 6.45084 45.6531 6.85395 45.3243 7.17365C44.9956 7.49336 44.5916 7.65321 44.1122 7.65321ZM42.5507 9.19613H45.6736V19.2043H42.5507V9.19613Z' fill='%23F7F7F7'/%3e%3cpath d='M53.2451 23.9999C52.5877 23.9999 51.9234 23.9373 51.2523 23.8122C50.5948 23.6871 50.0401 23.5203 49.5881 23.3118V20.9974C50.6427 21.47 51.8618 21.7063 53.2451 21.7063C54.3546 21.7063 55.149 21.477 55.6284 21.0183C56.1078 20.5596 56.3475 19.8715 56.3475 18.9541V18.3286C55.9228 18.7178 55.4024 19.0097 54.786 19.2043C54.1697 19.4128 53.5122 19.517 52.8137 19.517C51.8001 19.517 50.8893 19.2946 50.0812 18.8498C49.2868 18.3911 48.6636 17.7587 48.2116 16.9525C47.7596 16.1462 47.5336 15.2288 47.5336 14.2002C47.5336 13.1438 47.7527 12.2125 48.191 11.4063C48.643 10.6001 49.2594 9.9815 50.0401 9.55059C50.8345 9.10578 51.7385 8.88338 52.7521 8.88338C53.5191 8.88338 54.1971 8.99458 54.786 9.21698C55.375 9.43939 55.9297 9.79384 56.4502 10.2804V9.19613H59.4498V18.5579C59.4498 20.2955 58.943 21.6368 57.9294 22.582C56.9159 23.5273 55.3544 23.9999 53.2451 23.9999ZM53.5533 17.0776C54.1971 17.0776 54.7723 16.9038 55.2791 16.5563C55.7996 16.1949 56.1557 15.7223 56.3475 15.1385V13.2619C56.1283 12.6781 55.7653 12.2125 55.2586 11.865C54.7655 11.5175 54.1971 11.3437 53.5533 11.3437C52.7178 11.3437 52.033 11.6009 51.4988 12.1152C50.9783 12.6295 50.7181 13.3175 50.7181 14.1794C50.7181 15.0551 50.9783 15.757 51.4988 16.2852C52.033 16.8135 52.7178 17.0776 53.5533 17.0776Z' fill='%23F7F7F7'/%3e%3cpath d='M61.6078 3.7959H64.7101V10.3429C65.1758 9.85639 65.7031 9.49499 66.2921 9.25868C66.8811 9.00848 67.5111 8.88338 68.1823 8.88338C69.5245 8.88338 70.5244 9.25173 71.1819 9.98845C71.853 10.7113 72.1886 11.6912 72.1886 12.9283V19.2043H69.0862V13.2828C69.0862 11.9901 68.4973 11.3437 67.3194 11.3437C66.7989 11.3437 66.3126 11.4758 65.8607 11.7399C65.4087 11.9901 65.0252 12.3654 64.7101 12.8658V19.2043H61.6078V3.7959Z' fill='%23F7F7F7'/%3e%3cpath d='M78.3775 19.517C77.2269 19.517 76.3503 19.1973 75.7477 18.5579C75.1587 17.9046 74.8642 17.0011 74.8642 15.8474V11.4688H73.4261V9.19613H74.8642V6.19369H77.9666V9.19613H80.2882V11.4688H77.9666V15.4304C77.9666 16.0142 78.0761 16.4381 78.2953 16.7023C78.5144 16.9525 78.9048 17.0776 79.4664 17.0776C79.9184 17.0776 80.3498 16.9664 80.7607 16.744V19.1C80.1307 19.378 79.3362 19.517 78.3775 19.517Z' fill='%23F7F7F7'/%3e%3cpath d='M82.1931 3.7959H85.2954V19.2043H82.1931V3.7959Z' fill='%23F7F7F7'/%3e%3cpath d='M90.1617 23.3327C89.7508 23.3327 89.3262 23.3049 88.8879 23.2493C88.4633 23.1937 88.1414 23.1172 87.9223 23.0199V20.6638C88.3195 20.8167 88.7578 20.8932 89.2372 20.8932C89.7303 20.8932 90.1001 20.782 90.3466 20.5596C90.6069 20.3372 90.8192 19.9897 90.9835 19.517L91.3122 18.6622L87.0389 9.19613H90.1617L92.9559 16.0976L95.6062 9.19613H98.7085L94.5173 19.8924C94.0516 21.0739 93.4763 21.9426 92.7915 22.4986C92.1067 23.0547 91.2301 23.3327 90.1617 23.3327Z' fill='%23F7F7F7'/%3e%3c/svg%3e",
      this.onClose,
      "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='24' height='24' rx='12' fill='%23F7F7F7'/%3e%3cpath d='M17 7L7 17M17 17L7 7' stroke='%236067F9' stroke-width='2'/%3e%3c/svg%3e",
      Xe({
        'background-image':
          "url(\"data:image/svg+xml,%3csvg width='572' height='56' viewBox='0 0 572 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_20644_31243)'%3e%3cg opacity='0.7'%3e%3cg style='mix-blend-mode:multiply' opacity='0.35' filter='url(%23filter0_d_20644_31243)'%3e%3cpath d='M217.982 15.9973C221.364 15.9043 222.94 13.2078 222.94 10.7998C222.94 14.912 226.447 15.9799 228.201 15.9998C223.992 15.9998 222.94 19.4665 222.94 21.1998C222.94 17.0432 219.744 16.0092 217.982 15.9973C217.922 15.999 217.862 15.9998 217.801 15.9998C217.859 15.9978 217.92 15.9969 217.982 15.9973Z' fill='%236067F9'/%3e%3c/g%3e%3c/g%3e%3cg opacity='0.7'%3e%3cg style='mix-blend-mode:multiply' filter='url(%23filter1_d_20644_31243)'%3e%3cpath d='M450.174 38.9976C453.426 38.9082 454.942 36.3154 454.942 34C454.942 37.954 458.314 38.9808 460 39C455.953 39 454.942 42.3333 454.942 44C454.942 40.0033 451.868 39.009 450.174 38.9976C450.117 38.9992 450.059 39 450 39C450.056 38.998 450.114 38.9972 450.174 38.9976Z' fill='%236067F9'/%3e%3c/g%3e%3c/g%3e%3cg opacity='0.4'%3e%3cg opacity='0.35' filter='url(%23filter2_d_20644_31243)'%3e%3cpath d='M150.491 14.9992C152.182 14.9526 152.97 13.6044 152.97 12.4004C152.97 14.4565 154.724 14.9904 155.6 15.0004C153.496 15.0004 152.97 16.7337 152.97 17.6004C152.97 15.5221 151.372 15.0051 150.491 14.9992C150.461 15 150.431 15.0004 150.4 15.0004C150.43 14.9994 150.46 14.9989 150.491 14.9992Z' fill='%23F7F7F7'/%3e%3c/g%3e%3c/g%3e%3cg opacity='0.5'%3e%3cg opacity='0.35' filter='url(%23filter3_d_20644_31243)'%3e%3cpath d='M300.491 32.9992C302.182 32.9526 302.97 31.6044 302.97 30.4004C302.97 32.4565 304.724 32.9904 305.6 33.0004C303.496 33.0004 302.97 34.7337 302.97 35.6004C302.97 33.5221 301.372 33.0051 300.491 32.9992C300.461 33 300.431 33.0004 300.4 33.0004C300.43 32.9994 300.46 32.9989 300.491 32.9992Z' fill='%23F7F7F7'/%3e%3c/g%3e%3c/g%3e%3cg opacity='0.7'%3e%3cg filter='url(%23filter4_d_20644_31243)'%3e%3cpath d='M110.139 44.9981C112.741 44.9265 113.953 42.8523 113.953 41C113.953 44.1632 116.651 44.9847 118 45C114.763 45 113.953 47.6667 113.953 49C113.953 45.8026 111.495 45.0072 110.139 44.9981C110.093 44.9994 110.047 45 110 45C110.045 44.9984 110.091 44.9978 110.139 44.9981Z' fill='%23F7F7F7'/%3e%3c/g%3e%3c/g%3e%3cg opacity='0.8'%3e%3cg filter='url(%23filter5_d_20644_31243)'%3e%3cpath d='M362.209 10.9971C366.111 10.8898 367.93 7.77843 367.93 5C367.93 9.74483 371.977 10.977 374 11C369.144 11 367.93 15 367.93 17C367.93 12.204 364.242 11.0109 362.209 10.9971C362.14 10.999 362.07 11 362 11C362.067 10.9976 362.137 10.9967 362.209 10.9971Z' fill='%23F7F7F7'/%3e%3c/g%3e%3c/g%3e%3cg opacity='0.5'%3e%3cg opacity='0.35' filter='url(%23filter6_d_20644_31243)'%3e%3cpath d='M525.736 13.4978C528.272 13.428 529.454 11.4056 529.454 9.59961C529.454 12.6837 532.084 13.4847 533.4 13.4996C530.243 13.4996 529.454 16.0996 529.454 17.3996C529.454 14.2822 527.057 13.5067 525.736 13.4978C525.691 13.499 525.645 13.4996 525.6 13.4996C525.643 13.4981 525.689 13.4974 525.736 13.4978Z' fill='%23F7F7F7'/%3e%3c/g%3e%3c/g%3e%3cg style='mix-blend-mode:multiply' filter='url(%23filter7_d_20644_31243)'%3e%3cpath d='M46.1742 24.9976C49.4262 24.9082 50.9419 22.3154 50.9419 20C50.9419 23.954 54.314 24.9808 56 25C51.9535 25 50.9419 28.3333 50.9419 30C50.9419 26.0033 47.8683 25.009 46.1742 24.9976C46.1167 24.9992 46.0586 25 46 25C46.0562 24.998 46.1144 24.9972 46.1742 24.9976Z' fill='%236067F9'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_d_20644_31243' x='216.801' y='9.7998' width='12.4004' height='12.4004' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='0.5'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0.1 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_20644_31243'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_20644_31243' result='shape'/%3e%3c/filter%3e%3cfilter id='filter1_d_20644_31243' x='442' y='26' width='26' height='26' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='4'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.376471 0 0 0 0 0.403922 0 0 0 0 0.976471 0 0 0 0.5 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_20644_31243'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_20644_31243' result='shape'/%3e%3c/filter%3e%3cfilter id='filter2_d_20644_31243' x='149.4' y='11.4004' width='7.19922' height='7.2002' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='0.5'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0.1 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_20644_31243'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_20644_31243' result='shape'/%3e%3c/filter%3e%3cfilter id='filter3_d_20644_31243' x='299.4' y='29.4004' width='7.19922' height='7.2002' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='0.5'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0.1 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_20644_31243'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_20644_31243' result='shape'/%3e%3c/filter%3e%3cfilter id='filter4_d_20644_31243' x='102' y='33' width='24' height='24' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='4'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0.35 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_20644_31243'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_20644_31243' result='shape'/%3e%3c/filter%3e%3cfilter id='filter5_d_20644_31243' x='354' y='-3' width='28' height='28' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='4'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0.35 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_20644_31243'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_20644_31243' result='shape'/%3e%3c/filter%3e%3cfilter id='filter6_d_20644_31243' x='524.6' y='8.59961' width='9.80078' height='9.7998' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='0.5'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0 0.968627 0 0 0 0.1 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_20644_31243'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_20644_31243' result='shape'/%3e%3c/filter%3e%3cfilter id='filter7_d_20644_31243' x='38' y='12' width='26' height='26' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='4'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.376471 0 0 0 0 0.403922 0 0 0 0 0.976471 0 0 0 0.5 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_20644_31243'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_20644_31243' result='shape'/%3e%3c/filter%3e%3cclipPath id='clip0_20644_31243'%3e%3crect width='572' height='56' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e\")",
      }),
      Xe({
        'background-image':
          "url(\"data:image/svg+xml,%3csvg width='1525' height='90' viewBox='0 0 1525 90' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M272.089 90V70.8218C269.566 68.3692 268 64.9514 268 61.1712C268 53.7079 274.102 47.6577 281.63 47.6577C286.238 47.6577 290.313 49.9256 292.78 53.3972C294.995 52.1797 297.544 51.4865 300.257 51.4865C300.873 51.4865 301.482 51.5223 302.079 51.592C303.757 44.9329 309.831 40 317.067 40C325.598 40 332.514 46.8569 332.514 55.3153C332.514 55.7885 332.492 56.2567 332.45 56.719C334.576 55.4012 337.09 54.6396 339.783 54.6396C347.436 54.6396 353.64 60.7907 353.64 68.3784C353.64 71.1846 352.791 73.7944 351.334 75.9691C351.821 75.8654 352.326 75.8108 352.844 75.8108C356.796 75.8108 360 78.9872 360 82.9054C360 86.786 356.858 89.939 352.958 89.9991V90L272.089 90Z' fill='url(%23paint0_linear_20381_30844)'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M963.089 90V70.8218C960.566 68.3692 959 64.9514 959 61.1712C959 53.7079 965.102 47.6577 972.63 47.6577C977.238 47.6577 981.313 49.9256 983.78 53.3972C985.995 52.1797 988.544 51.4865 991.257 51.4865C991.873 51.4865 992.482 51.5223 993.079 51.592C994.757 44.9329 1000.83 40 1008.07 40C1016.6 40 1023.51 46.8569 1023.51 55.3153C1023.51 55.7885 1023.49 56.2567 1023.45 56.719C1025.58 55.4012 1028.09 54.6396 1030.78 54.6396C1038.44 54.6396 1044.64 60.7907 1044.64 68.3784C1044.64 71.1846 1043.79 73.7944 1042.33 75.9691C1042.82 75.8654 1043.33 75.8108 1043.84 75.8108C1047.8 75.8108 1051 78.9872 1051 82.9054C1051 86.786 1047.86 89.939 1043.96 89.9991V90L963.089 90Z' fill='url(%23paint1_linear_20381_30844)'/%3e%3cpath d='M780.291 15.6686C778.305 6.70329 770.334 0 760.804 0C749.779 0 740.841 8.97029 740.841 20.0357C740.841 23.4946 741.715 26.7487 743.252 29.5882C742.115 29.2519 740.912 29.0714 739.667 29.0714C732.677 29.0714 727.011 34.7585 727.011 41.7738C727.011 43.2911 727.276 44.7463 727.762 46.0952H695.436C692.986 46.0952 691 48.0886 691 50.5476C691 53.0066 692.986 55 695.436 55H824.606V54.4762H830.651C832.795 50.1354 834 45.2447 834 40.0714C834 22.1353 819.513 7.59524 801.642 7.59524C793.461 7.59524 785.988 10.6428 780.291 15.6686Z' fill='url(%23paint2_linear_20381_30844)'/%3e%3cpath d='M787.5 6.19352C788.801 4.80121 789.764 3.77165 789.225 2.39885C788.5 0.551531 786.205 -0.0354334 782.99 2.39885C779.8 4.8145 780.38 7.51453 780.96 8.22504C781.54 8.93554 782.845 9.36185 784.005 9.07765C785.075 8.81569 785.651 8.19149 786.87 6.87135C786.974 6.75926 787.082 6.64215 787.195 6.51983C787.298 6.40872 787.4 6.30006 787.5 6.19352Z' fill='url(%23paint3_linear_20381_30844)'/%3e%3cpath d='M1471.29 15.6686C1469.31 6.70329 1461.33 0 1451.8 0C1440.78 0 1431.84 8.97029 1431.84 20.0357C1431.84 23.4946 1432.71 26.7487 1434.25 29.5882C1433.12 29.2519 1431.91 29.0714 1430.67 29.0714C1423.68 29.0714 1418.01 34.7585 1418.01 41.7738C1418.01 43.2911 1418.28 44.7463 1418.76 46.0952H1386.44C1383.99 46.0952 1382 48.0886 1382 50.5476C1382 53.0066 1383.99 55 1386.44 55H1515.61V54.4762H1521.65C1523.79 50.1354 1525 45.2447 1525 40.0714C1525 22.1353 1510.51 7.59524 1492.64 7.59524C1484.46 7.59524 1476.99 10.6428 1471.29 15.6686Z' fill='url(%23paint4_linear_20381_30844)'/%3e%3cpath d='M1478.5 6.19352C1479.8 4.80121 1480.76 3.77165 1480.23 2.39885C1479.5 0.551531 1477.21 -0.0354334 1473.99 2.39885C1470.8 4.8145 1471.38 7.51453 1471.96 8.22504C1472.54 8.93554 1473.85 9.36185 1475.01 9.07765C1476.07 8.81569 1476.65 8.19149 1477.87 6.87135C1477.97 6.75926 1478.08 6.64215 1478.2 6.51983C1478.3 6.40872 1478.4 6.30006 1478.5 6.19352Z' fill='url(%23paint5_linear_20381_30844)'/%3e%3cpath d='M492.481 30.1159C486.156 30.2248 484.034 35.1561 485.392 37.4697C486.751 39.7833 493.213 42.0001 504.741 42C516.269 41.9999 512.601 39.7833 526.399 39.7833C540.198 39.7833 564.136 39.2919 565 37.4696C562.383 33.0029 546.052 34.0651 537.873 33.5204C536.647 25.0771 524.924 24.26 522.061 31.4777C518.38 14.3188 496.706 15.8168 492.481 30.1159Z' fill='url(%23paint6_linear_20381_30844)'/%3e%3cpath d='M1183.48 30.1159C1177.16 30.2248 1175.03 35.1561 1176.39 37.4697C1177.75 39.7833 1184.21 42.0001 1195.74 42C1207.27 41.9999 1203.6 39.7833 1217.4 39.7833C1231.2 39.7833 1255.14 39.2919 1256 37.4696C1253.38 33.0029 1237.05 34.0651 1228.87 33.5204C1227.65 25.0771 1215.92 24.26 1213.06 31.4777C1209.38 14.3188 1187.71 15.8168 1183.48 30.1159Z' fill='url(%23paint7_linear_20381_30844)'/%3e%3cpath d='M89.2908 15.6686C87.3051 6.70329 79.3344 0 69.8038 0C58.7788 0 49.8412 8.97029 49.8412 20.0357C49.8412 23.4946 50.7145 26.7487 52.2518 29.5882C51.1152 29.2519 49.9121 29.0714 48.667 29.0714C41.6772 29.0714 36.0109 34.7585 36.0109 41.7738C36.0109 43.2911 36.276 44.7463 36.7622 46.0952H4.43613C1.98612 46.0952 0 48.0886 0 50.5476C0 53.0066 1.98612 55 4.43613 55H133.606V54.4762H139.651C141.795 50.1354 143 45.2447 143 40.0714C143 22.1353 128.513 7.59524 110.642 7.59524C102.461 7.59524 94.9885 10.6428 89.2908 15.6686Z' fill='url(%23paint8_linear_20381_30844)'/%3e%3cpath d='M96.4995 6.19352C97.8013 4.80121 98.764 3.77165 98.2252 2.39885C97.5002 0.551531 95.2051 -0.0354334 91.9904 2.39885C88.8003 4.8145 89.3805 7.51453 89.9604 8.22504C90.5404 8.93554 91.8454 9.36185 93.0054 9.07765C94.0745 8.81569 94.651 8.19149 95.8701 6.87135C95.9736 6.75926 96.0818 6.64215 96.1953 6.51983C96.2983 6.40872 96.3999 6.30006 96.4995 6.19352Z' fill='url(%23paint9_linear_20381_30844)'/%3e%3cdefs%3e%3clinearGradient id='paint0_linear_20381_30844' x1='314.203' y1='40' x2='314.203' y2='90' gradientUnits='userSpaceOnUse'%3e%3cstop offset='0.100457' stop-color='%239AADFF'/%3e%3cstop offset='1' stop-color='%236C76FA'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_20381_30844' x1='1005.2' y1='40' x2='1005.2' y2='90' gradientUnits='userSpaceOnUse'%3e%3cstop offset='0.100457' stop-color='%239AADFF'/%3e%3cstop offset='1' stop-color='%236C76FA'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_20381_30844' x1='762.816' y1='0' x2='762.816' y2='55' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%239AADFF'/%3e%3cstop offset='1' stop-color='%236C76FA'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_20381_30844' x1='762.816' y1='0' x2='762.816' y2='55' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%239AADFF'/%3e%3cstop offset='1' stop-color='%236C76FA'/%3e%3c/linearGradient%3e%3clinearGradient id='paint4_linear_20381_30844' x1='1453.82' y1='0' x2='1453.82' y2='55' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%239AADFF'/%3e%3cstop offset='1' stop-color='%236C76FA'/%3e%3c/linearGradient%3e%3clinearGradient id='paint5_linear_20381_30844' x1='1453.82' y1='0' x2='1453.82' y2='55' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%239AADFF'/%3e%3cstop offset='1' stop-color='%236C76FA'/%3e%3c/linearGradient%3e%3clinearGradient id='paint6_linear_20381_30844' x1='525.177' y1='19' x2='525.177' y2='42' gradientUnits='userSpaceOnUse'%3e%3cstop offset='0.135446' stop-color='%239AADFF'/%3e%3cstop offset='1' stop-color='%236C76FA'/%3e%3c/linearGradient%3e%3clinearGradient id='paint7_linear_20381_30844' x1='1216.18' y1='19' x2='1216.18' y2='42' gradientUnits='userSpaceOnUse'%3e%3cstop offset='0.135446' stop-color='%239AADFF'/%3e%3cstop offset='1' stop-color='%236C76FA'/%3e%3c/linearGradient%3e%3clinearGradient id='paint8_linear_20381_30844' x1='71.8158' y1='0' x2='71.8158' y2='55' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%239AADFF'/%3e%3cstop offset='1' stop-color='%236C76FA'/%3e%3c/linearGradient%3e%3clinearGradient id='paint9_linear_20381_30844' x1='71.8158' y1='0' x2='71.8158' y2='55' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%239AADFF'/%3e%3cstop offset='1' stop-color='%236C76FA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e\")",
      })
    );
  }
};
(He.styles = ce(wn)),
  C([M()], He.prototype, 'onClose', void 0),
  (He = C([de('nightly-header')], He));
var ci, hi, pi;
let Z = class extends le {
  constructor() {
    super(),
      (this.onClose = () => {}),
      (this.selectorItems = []),
      (this.onWalletClick = () => {}),
      (this.chainIcon = ''),
      (this.chainName = ''),
      (this.sessionId = ''),
      (this.relay = ''),
      (this.connecting = !1),
      (this.link = ''),
      (this.walletIcon = ''),
      (this.currentWalletName = ''),
      (this.tryAgainClick = () => {
        this.onSelectWallet(this.currentWalletName);
      }),
      (this.connectingViewOpen = !1),
      (this.onSelectWallet = (o) => {
        var t, i, r;
        const e = this.selectorItems.find((l) => l.name === o);
        (this.walletIcon = (t = e == null ? void 0 : e.icon) != null ? t : ''),
          (this.currentWalletName = (i = e == null ? void 0 : e.name) != null ? i : ''),
          (this.link = (r = e == null ? void 0 : e.link) != null ? r : ''),
          (this.useConnectTransition = !0),
          (this.connectingViewOpen = !0),
          this.onWalletClick(o);
      }),
      (this.mobileContentHeight = 186),
      (this.useConnectTransition = !1),
      (this.fireClosingAnimation = !1),
      (this.backToPage = () => {
        setTimeout(() => {
          this.useConnectTransition = !1;
        }, 300),
          (this.connectingViewOpen = !1);
      }),
      (this.onSelectWallet = this.onSelectWallet.bind(this)),
      (this.tryAgainClick = this.tryAgainClick.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      (this.useConnectTransition = !1),
      (this.connectingViewOpen = !1),
      (this.mobileContentHeight = 186);
  }
  renderConnect() {
    return (
      setTimeout(() => {
        (this.mobileContentHeight = Math.max(this._modalConnect.scrollHeight, 186)),
          this.connectObserver ||
            (this.connectObserver = new ResizeObserver(() => {
              this._modalConnect &&
                (this.mobileContentHeight = Math.max(this._modalConnect.scrollHeight, 186));
            })),
          this.connectObserver.observe(this._modalConnect);
      }, 0),
      X(
        ci ||
          (ci = O([
            '<nightly-connect-wallet id="modalConnect" class="modalConnect" .coinName="',
            '" .connecting="',
            '" .tryAgainClick="',
            '" .fallback="',
            '" .link="',
            '" .nameLink="',
            '" .walletIcon="',
            '" ',
            '></nightly-connect-wallet>',
          ])),
        this.currentWalletName,
        this.connecting,
        this.tryAgainClick,
        this.backToPage,
        this.link,
        this.currentWalletName,
        this.walletIcon,
        Ae({
          properties: ['opacity'],
          keyframeOptions: { duration: 320 },
          skipInitial: !0,
          in: [{ opacity: 0 }, { offset: 0.25, opacity: 0 }, { offset: 1, opacity: 1 }],
        })
      )
    );
  }
  renderSelect() {
    return (
      setTimeout(() => {
        (this.mobileContentHeight = Math.max(this._modalSelect.scrollHeight, 186)),
          this.selectObserver ||
            (this.selectObserver = new ResizeObserver(() => {
              this._modalSelect &&
                (this.mobileContentHeight = Math.max(this._modalSelect.scrollHeight, 186));
            })),
          this.selectObserver.observe(this._modalSelect);
      }, 0),
      X(
        hi ||
          (hi = O([
            '<div id="modalSelect"><nightly-wallet-selector-small-page class="modalMobile" .onWalletClick="',
            '" .selectorItems="',
            '" .sessionId="',
            '" .chainName="',
            '" .relay="',
            '" ',
            '></nightly-wallet-selector-small-page><nightly-modal class="modalDesktop" .chainIcon="',
            '" .chainName="',
            '" .onWalletClick="',
            '" .selectorItems="',
            '" .sessionId="',
            '" .relay="',
            '" ',
            '></nightly-modal></div>',
          ])),
        this.onSelectWallet,
        this.selectorItems,
        this.sessionId,
        this.chainName,
        this.relay,
        Ae({
          properties: ['opacity'],
          keyframeOptions: { duration: 320 },
          skipInitial: !0,
          in: [{ opacity: 0 }, { offset: 0.25, opacity: 0 }, { offset: 1, opacity: 1 }],
        }),
        this.chainIcon,
        this.chainName,
        this.onSelectWallet,
        this.selectorItems,
        this.sessionId,
        this.relay,
        Ae({
          properties: ['opacity'],
          keyframeOptions: { duration: 250 },
          skipInitial: !0,
          in: [{ opacity: 0 }, { offset: 0.25, opacity: 0 }, { offset: 1, opacity: 1 }],
        })
      )
    );
  }
  render() {
    return X(
      pi ||
        (pi = O([
          '<div class="nightlyModal ',
          '"><nightly-header .onClose="',
          '"></nightly-header><div id="contentWrapper" class="contentWrapper" style="',
          '" ',
          '>',
          '</div></div>',
        ])),
      this.fireClosingAnimation ? 'slideOutMobile' : '',
      this.onClose,
      Xe(
        window.innerWidth <= 640
          ? {
              height: this.mobileContentHeight + 'px',
              transition: this.useConnectTransition ? 'height 250ms' : 'none',
            }
          : {}
      ),
      Ae({ properties: ['height'], keyframeOptions: { duration: 0 }, skipInitial: !0 }),
      this.connectingViewOpen ? this.renderConnect() : this.renderSelect()
    );
  }
};
(Z.styles = ce(fn)),
  C([M()], Z.prototype, 'onClose', void 0),
  C([M({ type: Array })], Z.prototype, 'selectorItems', void 0),
  C([M({ type: Function })], Z.prototype, 'onWalletClick', void 0),
  C([M({ type: String })], Z.prototype, 'chainIcon', void 0),
  C([M({ type: String })], Z.prototype, 'chainName', void 0),
  C([M({ type: String })], Z.prototype, 'sessionId', void 0),
  C([M({ type: String })], Z.prototype, 'relay', void 0),
  C([M({ type: Boolean })], Z.prototype, 'connecting', void 0),
  C([ee()], Z.prototype, 'link', void 0),
  C([ee()], Z.prototype, 'walletIcon', void 0),
  C([ee()], Z.prototype, 'currentWalletName', void 0),
  C([ee()], Z.prototype, 'connectingViewOpen', void 0),
  C([ht('#modalConnect')], Z.prototype, '_modalConnect', void 0),
  C([ht('#modalSelect')], Z.prototype, '_modalSelect', void 0),
  C([ee()], Z.prototype, 'mobileContentHeight', void 0),
  C([ee()], Z.prototype, 'useConnectTransition', void 0),
  C([M({ type: Boolean })], Z.prototype, 'fireClosingAnimation', void 0),
  (Z = C([de('nightly-main-page')], Z));
var fi;
let oe = class extends le {
  constructor() {
    super(),
      (this.onClose = () => {}),
      (this.selectorItems = []),
      (this.onWalletClick = () => {}),
      (this.chainIcon = ''),
      (this.chainName = ''),
      (this.sessionId = ''),
      (this.relay = ''),
      (this.connecting = !1),
      (this.fireClosingAnimation = !1),
      (this.handleClose = () => {
        (this.fireClosingAnimation = !0),
          setTimeout(
            () => {
              this.onClose();
            },
            window.matchMedia('(max-width: 640px)') ? 240 : 80
          );
      }),
      (this.handleClose = this.handleClose.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), (this.fireClosingAnimation = !1);
  }
  render() {
    return X(
      fi ||
        (fi = O([
          '<div class="nightlySelectorOverlay ',
          '" @click="',
          '"><nightly-main-page @click="',
          '" class="nightlySelector" .onClose="',
          '" .selectorItems="',
          '" .onWalletClick="',
          '" .chainIcon="',
          '" .chainName="',
          '" .sessionId="',
          '" ?connecting="',
          '" .relay="',
          '" ?fireClosingAnimation="',
          '"></nightly-main-page></div>',
        ])),
      this.fireClosingAnimation ? 'fadeOutOpacity' : '',
      this.handleClose,
      (o) => {
        o.stopPropagation();
      },
      this.handleClose,
      this.selectorItems,
      this.onWalletClick,
      this.chainIcon,
      this.chainName,
      this.sessionId,
      this.connecting,
      this.relay,
      this.fireClosingAnimation
    );
  }
};
(oe.styles = ce(Ki)),
  C([M()], oe.prototype, 'onClose', void 0),
  C([M({ type: Array })], oe.prototype, 'selectorItems', void 0),
  C([M({ type: Function })], oe.prototype, 'onWalletClick', void 0),
  C([M({ type: String })], oe.prototype, 'chainIcon', void 0),
  C([M({ type: String })], oe.prototype, 'chainName', void 0),
  C([M({ type: String })], oe.prototype, 'sessionId', void 0),
  C([M({ type: String })], oe.prototype, 'relay', void 0),
  C([M({ type: Boolean })], oe.prototype, 'connecting', void 0),
  C([ee()], oe.prototype, 'fireClosingAnimation', void 0),
  (oe = C([de('nightly-selector')], oe));
const $n = () => {
  const o = document.createElement('style');
  return (
    (o.textContent =
      "@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;600&display=swap');"),
    document.head.appendChild(o),
    document.createElement('nightly-selector')
  );
};
export { $n as getNightlySelectorElement };
//# sourceMappingURL=index.mjs-C-gKYPlX.js.map
