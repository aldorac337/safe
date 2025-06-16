import {
  b as Fe,
  t as Jt,
  B as se,
  a as Yt,
  c as vn,
  d as Cn,
  u as Q,
  r as Nn,
  e as Dn,
  f as Tn,
  g as It,
  h as Y,
  n as ae,
  s as H,
  i as U,
  j as ye,
  k as je,
  o as Je,
  l as nt,
  m as E,
  p as Rt,
  q as vt,
  v as K,
  w as rt,
  x as A,
  y as x,
  z as I,
  A as k,
  C as R,
  D as ve,
  E as Qt,
  F as he,
  G as ht,
  H as Ee,
  I as Zt,
  J as Ft,
  K as Mt,
  L as Pn,
  P as zn,
} from './metaplex-DKWSQMdM.js';
import { c as _e, a as Fn } from './lodash-aFjP5OGs.js';
var Mn = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  yt = Math.ceil,
  Le = Math.floor,
  le = '[BigNumber Error] ',
  Gt = le + 'Number primitive has more than 15 significant digits: ',
  Se = 1e14,
  N = 14,
  At = 9007199254740991,
  St = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  Ce = 1e7,
  re = 1e9;
function en(t) {
  var e,
    r,
    o,
    i = (S.prototype = { constructor: S, toString: null, valueOf: null }),
    f = new S(1),
    h = 20,
    m = 4,
    B = -7,
    v = 21,
    D = -1e7,
    L = 1e7,
    P = !1,
    G = 1,
    j = 0,
    te = {
      prefix: '',
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ',',
      decimalSeparator: '.',
      fractionGroupSize: 0,
      fractionGroupSeparator: ' ',
      suffix: '',
    },
    ne = '0123456789abcdefghijklmnopqrstuvwxyz',
    Ue = !0;
  function S(n, s) {
    var c,
      p,
      u,
      d,
      w,
      a,
      l,
      g,
      b = this;
    if (!(b instanceof S)) return new S(n, s);
    if (s == null) {
      if (n && n._isBigNumber === !0) {
        (b.s = n.s),
          !n.c || n.e > L
            ? (b.c = b.e = null)
            : n.e < D
              ? (b.c = [(b.e = 0)])
              : ((b.e = n.e), (b.c = n.c.slice()));
        return;
      }
      if ((a = typeof n == 'number') && n * 0 == 0) {
        if (((b.s = 1 / n < 0 ? ((n = -n), -1) : 1), n === ~~n)) {
          for (d = 0, w = n; w >= 10; w /= 10, d++);
          d > L ? (b.c = b.e = null) : ((b.e = d), (b.c = [n]));
          return;
        }
        g = String(n);
      } else {
        if (!Mn.test((g = String(n)))) return o(b, g, a);
        b.s = g.charCodeAt(0) == 45 ? ((g = g.slice(1)), -1) : 1;
      }
      (d = g.indexOf('.')) > -1 && (g = g.replace('.', '')),
        (w = g.search(/e/i)) > 0
          ? (d < 0 && (d = w), (d += +g.slice(w + 1)), (g = g.substring(0, w)))
          : d < 0 && (d = g.length);
    } else {
      if ((q(s, 2, ne.length, 'Base'), s == 10 && Ue)) return (b = new S(n)), oe(b, h + b.e + 1, m);
      if (((g = String(n)), (a = typeof n == 'number'))) {
        if (n * 0 != 0) return o(b, g, a, s);
        if (
          ((b.s = 1 / n < 0 ? ((g = g.slice(1)), -1) : 1),
          S.DEBUG && g.replace(/^0\.0*|\./, '').length > 15)
        )
          throw Error(Gt + n);
      } else b.s = g.charCodeAt(0) === 45 ? ((g = g.slice(1)), -1) : 1;
      for (c = ne.slice(0, s), d = w = 0, l = g.length; w < l; w++)
        if (c.indexOf((p = g.charAt(w))) < 0) {
          if (p == '.') {
            if (w > d) {
              d = l;
              continue;
            }
          } else if (
            !u &&
            ((g == g.toUpperCase() && (g = g.toLowerCase())) ||
              (g == g.toLowerCase() && (g = g.toUpperCase())))
          ) {
            (u = !0), (w = -1), (d = 0);
            continue;
          }
          return o(b, String(n), a, s);
        }
      (a = !1),
        (g = r(g, s, 10, b.s)),
        (d = g.indexOf('.')) > -1 ? (g = g.replace('.', '')) : (d = g.length);
    }
    for (w = 0; g.charCodeAt(w) === 48; w++);
    for (l = g.length; g.charCodeAt(--l) === 48; );
    if ((g = g.slice(w, ++l))) {
      if (((l -= w), a && S.DEBUG && l > 15 && (n > At || n !== Le(n)))) throw Error(Gt + b.s * n);
      if ((d = d - w - 1) > L) b.c = b.e = null;
      else if (d < D) b.c = [(b.e = 0)];
      else {
        if (((b.e = d), (b.c = []), (w = (d + 1) % N), d < 0 && (w += N), w < l)) {
          for (w && b.c.push(+g.slice(0, w)), l -= N; w < l; ) b.c.push(+g.slice(w, (w += N)));
          w = N - (g = g.slice(w)).length;
        } else w -= l;
        for (; w--; g += '0');
        b.c.push(+g);
      }
    } else b.c = [(b.e = 0)];
  }
  (S.clone = en),
    (S.ROUND_UP = 0),
    (S.ROUND_DOWN = 1),
    (S.ROUND_CEIL = 2),
    (S.ROUND_FLOOR = 3),
    (S.ROUND_HALF_UP = 4),
    (S.ROUND_HALF_DOWN = 5),
    (S.ROUND_HALF_EVEN = 6),
    (S.ROUND_HALF_CEIL = 7),
    (S.ROUND_HALF_FLOOR = 8),
    (S.EUCLID = 9),
    (S.config = S.set =
      function (n) {
        var s, c;
        if (n != null)
          if (typeof n == 'object') {
            if (
              (n.hasOwnProperty((s = 'DECIMAL_PLACES')) && ((c = n[s]), q(c, 0, re, s), (h = c)),
              n.hasOwnProperty((s = 'ROUNDING_MODE')) && ((c = n[s]), q(c, 0, 8, s), (m = c)),
              n.hasOwnProperty((s = 'EXPONENTIAL_AT')) &&
                ((c = n[s]),
                c && c.pop
                  ? (q(c[0], -re, 0, s), q(c[1], 0, re, s), (B = c[0]), (v = c[1]))
                  : (q(c, -re, re, s), (B = -(v = c < 0 ? -c : c)))),
              n.hasOwnProperty((s = 'RANGE')))
            )
              if (((c = n[s]), c && c.pop))
                q(c[0], -re, -1, s), q(c[1], 1, re, s), (D = c[0]), (L = c[1]);
              else if ((q(c, -re, re, s), c)) D = -(L = c < 0 ? -c : c);
              else throw Error(le + s + ' cannot be zero: ' + c);
            if (n.hasOwnProperty((s = 'CRYPTO')))
              if (((c = n[s]), c === !!c))
                if (c)
                  if (
                    typeof crypto < 'u' &&
                    crypto &&
                    (crypto.getRandomValues || crypto.randomBytes)
                  )
                    P = c;
                  else throw ((P = !c), Error(le + 'crypto unavailable'));
                else P = c;
              else throw Error(le + s + ' not true or false: ' + c);
            if (
              (n.hasOwnProperty((s = 'MODULO_MODE')) && ((c = n[s]), q(c, 0, 9, s), (G = c)),
              n.hasOwnProperty((s = 'POW_PRECISION')) && ((c = n[s]), q(c, 0, re, s), (j = c)),
              n.hasOwnProperty((s = 'FORMAT')))
            )
              if (((c = n[s]), typeof c == 'object')) te = c;
              else throw Error(le + s + ' not an object: ' + c);
            if (n.hasOwnProperty((s = 'ALPHABET')))
              if (((c = n[s]), typeof c == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(c)))
                (Ue = c.slice(0, 10) == '0123456789'), (ne = c);
              else throw Error(le + s + ' invalid: ' + c);
          } else throw Error(le + 'Object expected: ' + n);
        return {
          DECIMAL_PLACES: h,
          ROUNDING_MODE: m,
          EXPONENTIAL_AT: [B, v],
          RANGE: [D, L],
          CRYPTO: P,
          MODULO_MODE: G,
          POW_PRECISION: j,
          FORMAT: te,
          ALPHABET: ne,
        };
      }),
    (S.isBigNumber = function (n) {
      if (!n || n._isBigNumber !== !0) return !1;
      if (!S.DEBUG) return !0;
      var s,
        c,
        p = n.c,
        u = n.e,
        d = n.s;
      e: if ({}.toString.call(p) == '[object Array]') {
        if ((d === 1 || d === -1) && u >= -re && u <= re && u === Le(u)) {
          if (p[0] === 0) {
            if (u === 0 && p.length === 1) return !0;
            break e;
          }
          if (((s = (u + 1) % N), s < 1 && (s += N), String(p[0]).length == s)) {
            for (s = 0; s < p.length; s++)
              if (((c = p[s]), c < 0 || c >= Se || c !== Le(c))) break e;
            if (c !== 0) return !0;
          }
        }
      } else if (p === null && u === null && (d === null || d === 1 || d === -1)) return !0;
      throw Error(le + 'Invalid BigNumber: ' + n);
    }),
    (S.maximum = S.max =
      function () {
        return Ae(arguments, i.lt);
      }),
    (S.minimum = S.min =
      function () {
        return Ae(arguments, i.gt);
      }),
    (S.random = (function () {
      var n = 9007199254740992,
        s =
          (Math.random() * n) & 2097151
            ? function () {
                return Le(Math.random() * n);
              }
            : function () {
                return (
                  ((Math.random() * 1073741824) | 0) * 8388608 + ((Math.random() * 8388608) | 0)
                );
              };
      return function (c) {
        var p,
          u,
          d,
          w,
          a,
          l = 0,
          g = [],
          b = new S(f);
        if ((c == null ? (c = h) : q(c, 0, re), (w = yt(c / N)), P))
          if (crypto.getRandomValues) {
            for (p = crypto.getRandomValues(new Uint32Array((w *= 2))); l < w; )
              (a = p[l] * 131072 + (p[l + 1] >>> 11)),
                a >= 9e15
                  ? ((u = crypto.getRandomValues(new Uint32Array(2))),
                    (p[l] = u[0]),
                    (p[l + 1] = u[1]))
                  : (g.push(a % 1e14), (l += 2));
            l = w / 2;
          } else if (crypto.randomBytes) {
            for (p = crypto.randomBytes((w *= 7)); l < w; )
              (a =
                (p[l] & 31) * 281474976710656 +
                p[l + 1] * 1099511627776 +
                p[l + 2] * 4294967296 +
                p[l + 3] * 16777216 +
                (p[l + 4] << 16) +
                (p[l + 5] << 8) +
                p[l + 6]),
                a >= 9e15 ? crypto.randomBytes(7).copy(p, l) : (g.push(a % 1e14), (l += 7));
            l = w / 7;
          } else throw ((P = !1), Error(le + 'crypto unavailable'));
        if (!P) for (; l < w; ) (a = s()), a < 9e15 && (g[l++] = a % 1e14);
        for (
          w = g[--l], c %= N, w && c && ((a = St[N - c]), (g[l] = Le(w / a) * a));
          g[l] === 0;
          g.pop(), l--
        );
        if (l < 0) g = [(d = 0)];
        else {
          for (d = -1; g[0] === 0; g.splice(0, 1), d -= N);
          for (l = 1, a = g[0]; a >= 10; a /= 10, l++);
          l < N && (d -= N - l);
        }
        return (b.e = d), (b.c = g), b;
      };
    })()),
    (S.sum = function () {
      for (var n = 1, s = arguments, c = new S(s[0]); n < s.length; ) c = c.plus(s[n++]);
      return c;
    }),
    (r = (function () {
      var n = '0123456789';
      function s(c, p, u, d) {
        for (var w, a = [0], l, g = 0, b = c.length; g < b; ) {
          for (l = a.length; l--; a[l] *= p);
          for (a[0] += d.indexOf(c.charAt(g++)), w = 0; w < a.length; w++)
            a[w] > u - 1 &&
              (a[w + 1] == null && (a[w + 1] = 0), (a[w + 1] += (a[w] / u) | 0), (a[w] %= u));
        }
        return a.reverse();
      }
      return function (c, p, u, d, w) {
        var a,
          l,
          g,
          b,
          y,
          _,
          O,
          F,
          X = c.indexOf('.'),
          Z = h,
          z = m;
        for (
          X >= 0 &&
            ((b = j),
            (j = 0),
            (c = c.replace('.', '')),
            (F = new S(p)),
            (_ = F.pow(c.length - X)),
            (j = b),
            (F.c = s(Re(we(_.c), _.e, '0'), 10, u, n)),
            (F.e = F.c.length)),
            O = s(c, p, u, w ? ((a = ne), n) : ((a = n), ne)),
            g = b = O.length;
          O[--b] == 0;
          O.pop()
        );
        if (!O[0]) return a.charAt(0);
        if (
          (X < 0
            ? --g
            : ((_.c = O),
              (_.e = g),
              (_.s = d),
              (_ = e(_, F, Z, z, u)),
              (O = _.c),
              (y = _.r),
              (g = _.e)),
          (l = g + Z + 1),
          (X = O[l]),
          (b = u / 2),
          (y = y || l < 0 || O[l + 1] != null),
          (y =
            z < 4
              ? (X != null || y) && (z == 0 || z == (_.s < 0 ? 3 : 2))
              : X > b ||
                (X == b && (z == 4 || y || (z == 6 && O[l - 1] & 1) || z == (_.s < 0 ? 8 : 7)))),
          l < 1 || !O[0])
        )
          c = y ? Re(a.charAt(1), -Z, a.charAt(0)) : a.charAt(0);
        else {
          if (((O.length = l), y))
            for (--u; ++O[--l] > u; ) (O[l] = 0), l || (++g, (O = [1].concat(O)));
          for (b = O.length; !O[--b]; );
          for (X = 0, c = ''; X <= b; c += a.charAt(O[X++]));
          c = Re(c, g, a.charAt(0));
        }
        return c;
      };
    })()),
    (e = (function () {
      function n(p, u, d) {
        var w,
          a,
          l,
          g,
          b = 0,
          y = p.length,
          _ = u % Ce,
          O = (u / Ce) | 0;
        for (p = p.slice(); y--; )
          (l = p[y] % Ce),
            (g = (p[y] / Ce) | 0),
            (w = O * l + g * _),
            (a = _ * l + (w % Ce) * Ce + b),
            (b = ((a / d) | 0) + ((w / Ce) | 0) + O * g),
            (p[y] = a % d);
        return b && (p = [b].concat(p)), p;
      }
      function s(p, u, d, w) {
        var a, l;
        if (d != w) l = d > w ? 1 : -1;
        else
          for (a = l = 0; a < d; a++)
            if (p[a] != u[a]) {
              l = p[a] > u[a] ? 1 : -1;
              break;
            }
        return l;
      }
      function c(p, u, d, w) {
        for (var a = 0; d--; ) (p[d] -= a), (a = p[d] < u[d] ? 1 : 0), (p[d] = a * w + p[d] - u[d]);
        for (; !p[0] && p.length > 1; p.splice(0, 1));
      }
      return function (p, u, d, w, a) {
        var l,
          g,
          b,
          y,
          _,
          O,
          F,
          X,
          Z,
          z,
          W,
          ce,
          ct,
          wt,
          mt,
          ke,
          et,
          ge = p.s == u.s ? 1 : -1,
          ue = p.c,
          J = u.c;
        if (!ue || !ue[0] || !J || !J[0])
          return new S(
            !p.s || !u.s || (ue ? J && ue[0] == J[0] : !J)
              ? NaN
              : (ue && ue[0] == 0) || !J
                ? ge * 0
                : ge / 0
          );
        for (
          X = new S(ge),
            Z = X.c = [],
            g = p.e - u.e,
            ge = d + g + 1,
            a || ((a = Se), (g = me(p.e / N) - me(u.e / N)), (ge = (ge / N) | 0)),
            b = 0;
          J[b] == (ue[b] || 0);
          b++
        );
        if ((J[b] > (ue[b] || 0) && g--, ge < 0)) Z.push(1), (y = !0);
        else {
          for (
            wt = ue.length,
              ke = J.length,
              b = 0,
              ge += 2,
              _ = Le(a / (J[0] + 1)),
              _ > 1 && ((J = n(J, _, a)), (ue = n(ue, _, a)), (ke = J.length), (wt = ue.length)),
              ct = ke,
              z = ue.slice(0, ke),
              W = z.length;
            W < ke;
            z[W++] = 0
          );
          (et = J.slice()), (et = [0].concat(et)), (mt = J[0]), J[1] >= a / 2 && mt++;
          do {
            if (((_ = 0), (l = s(J, z, ke, W)), l < 0)) {
              if (((ce = z[0]), ke != W && (ce = ce * a + (z[1] || 0)), (_ = Le(ce / mt)), _ > 1))
                for (
                  _ >= a && (_ = a - 1), O = n(J, _, a), F = O.length, W = z.length;
                  s(O, z, F, W) == 1;

                )
                  _--, c(O, ke < F ? et : J, F, a), (F = O.length), (l = 1);
              else _ == 0 && (l = _ = 1), (O = J.slice()), (F = O.length);
              if ((F < W && (O = [0].concat(O)), c(z, O, W, a), (W = z.length), l == -1))
                for (; s(J, z, ke, W) < 1; ) _++, c(z, ke < W ? et : J, W, a), (W = z.length);
            } else l === 0 && (_++, (z = [0]));
            (Z[b++] = _), z[0] ? (z[W++] = ue[ct] || 0) : ((z = [ue[ct]]), (W = 1));
          } while ((ct++ < wt || z[0] != null) && ge--);
          (y = z[0] != null), Z[0] || Z.splice(0, 1);
        }
        if (a == Se) {
          for (b = 1, ge = Z[0]; ge >= 10; ge /= 10, b++);
          oe(X, d + (X.e = b + g * N - 1) + 1, w, y);
        } else (X.e = g), (X.r = +y);
        return X;
      };
    })());
  function $(n, s, c, p) {
    var u, d, w, a, l;
    if ((c == null ? (c = m) : q(c, 0, 8), !n.c)) return n.toString();
    if (((u = n.c[0]), (w = n.e), s == null))
      (l = we(n.c)), (l = p == 1 || (p == 2 && (w <= B || w >= v)) ? ut(l, w) : Re(l, w, '0'));
    else if (
      ((n = oe(new S(n), s, c)),
      (d = n.e),
      (l = we(n.c)),
      (a = l.length),
      p == 1 || (p == 2 && (s <= d || d <= B)))
    ) {
      for (; a < s; l += '0', a++);
      l = ut(l, d);
    } else if (((s -= w), (l = Re(l, d, '0')), d + 1 > a)) {
      if (--s > 0) for (l += '.'; s--; l += '0');
    } else if (((s += d - a), s > 0)) for (d + 1 == a && (l += '.'); s--; l += '0');
    return n.s < 0 && u ? '-' + l : l;
  }
  function Ae(n, s) {
    for (var c, p = 1, u = new S(n[0]); p < n.length; p++)
      if (((c = new S(n[p])), c.s)) s.call(u, c) && (u = c);
      else {
        u = c;
        break;
      }
    return u;
  }
  function xe(n, s, c) {
    for (var p = 1, u = s.length; !s[--u]; s.pop());
    for (u = s[0]; u >= 10; u /= 10, p++);
    return (
      (c = p + c * N - 1) > L
        ? (n.c = n.e = null)
        : c < D
          ? (n.c = [(n.e = 0)])
          : ((n.e = c), (n.c = s)),
      n
    );
  }
  o = (function () {
    var n = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      s = /^([^.]+)\.$/,
      c = /^\.([^.]+)$/,
      p = /^-?(Infinity|NaN)$/,
      u = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (d, w, a, l) {
      var g,
        b = a ? w : w.replace(u, '');
      if (p.test(b)) d.s = isNaN(b) ? null : b < 0 ? -1 : 1;
      else {
        if (
          !a &&
          ((b = b.replace(n, function (y, _, O) {
            return (g = (O = O.toLowerCase()) == 'x' ? 16 : O == 'b' ? 2 : 8), !l || l == g ? _ : y;
          })),
          l && ((g = l), (b = b.replace(s, '$1').replace(c, '0.$1'))),
          w != b)
        )
          return new S(b, g);
        if (S.DEBUG) throw Error(le + 'Not a' + (l ? ' base ' + l : '') + ' number: ' + w);
        d.s = null;
      }
      d.c = d.e = null;
    };
  })();
  function oe(n, s, c, p) {
    var u,
      d,
      w,
      a,
      l,
      g,
      b,
      y = n.c,
      _ = St;
    if (y) {
      e: {
        for (u = 1, a = y[0]; a >= 10; a /= 10, u++);
        if (((d = s - u), d < 0))
          (d += N), (w = s), (l = y[(g = 0)]), (b = (l / _[u - w - 1]) % 10 | 0);
        else if (((g = yt((d + 1) / N)), g >= y.length))
          if (p) {
            for (; y.length <= g; y.push(0));
            (l = b = 0), (u = 1), (d %= N), (w = d - N + 1);
          } else break e;
        else {
          for (l = a = y[g], u = 1; a >= 10; a /= 10, u++);
          (d %= N), (w = d - N + u), (b = w < 0 ? 0 : (l / _[u - w - 1]) % 10 | 0);
        }
        if (
          ((p = p || s < 0 || y[g + 1] != null || (w < 0 ? l : l % _[u - w - 1])),
          (p =
            c < 4
              ? (b || p) && (c == 0 || c == (n.s < 0 ? 3 : 2))
              : b > 5 ||
                (b == 5 &&
                  (c == 4 ||
                    p ||
                    (c == 6 && (d > 0 ? (w > 0 ? l / _[u - w] : 0) : y[g - 1]) % 10 & 1) ||
                    c == (n.s < 0 ? 8 : 7)))),
          s < 1 || !y[0])
        )
          return (
            (y.length = 0),
            p ? ((s -= n.e + 1), (y[0] = _[(N - (s % N)) % N]), (n.e = -s || 0)) : (y[0] = n.e = 0),
            n
          );
        if (
          (d == 0
            ? ((y.length = g), (a = 1), g--)
            : ((y.length = g + 1),
              (a = _[N - d]),
              (y[g] = w > 0 ? Le((l / _[u - w]) % _[w]) * a : 0)),
          p)
        )
          for (;;)
            if (g == 0) {
              for (d = 1, w = y[0]; w >= 10; w /= 10, d++);
              for (w = y[0] += a, a = 1; w >= 10; w /= 10, a++);
              d != a && (n.e++, y[0] == Se && (y[0] = 1));
              break;
            } else {
              if (((y[g] += a), y[g] != Se)) break;
              (y[g--] = 0), (a = 1);
            }
        for (d = y.length; y[--d] === 0; y.pop());
      }
      n.e > L ? (n.c = n.e = null) : n.e < D && (n.c = [(n.e = 0)]);
    }
    return n;
  }
  function de(n) {
    var s,
      c = n.e;
    return c === null
      ? n.toString()
      : ((s = we(n.c)), (s = c <= B || c >= v ? ut(s, c) : Re(s, c, '0')), n.s < 0 ? '-' + s : s);
  }
  return (
    (i.absoluteValue = i.abs =
      function () {
        var n = new S(this);
        return n.s < 0 && (n.s = 1), n;
      }),
    (i.comparedTo = function (n, s) {
      return Ke(this, new S(n, s));
    }),
    (i.decimalPlaces = i.dp =
      function (n, s) {
        var c,
          p,
          u,
          d = this;
        if (n != null)
          return q(n, 0, re), s == null ? (s = m) : q(s, 0, 8), oe(new S(d), n + d.e + 1, s);
        if (!(c = d.c)) return null;
        if (((p = ((u = c.length - 1) - me(this.e / N)) * N), (u = c[u])))
          for (; u % 10 == 0; u /= 10, p--);
        return p < 0 && (p = 0), p;
      }),
    (i.dividedBy = i.div =
      function (n, s) {
        return e(this, new S(n, s), h, m);
      }),
    (i.dividedToIntegerBy = i.idiv =
      function (n, s) {
        return e(this, new S(n, s), 0, 1);
      }),
    (i.exponentiatedBy = i.pow =
      function (n, s) {
        var c,
          p,
          u,
          d,
          w,
          a,
          l,
          g,
          b,
          y = this;
        if (((n = new S(n)), n.c && !n.isInteger()))
          throw Error(le + 'Exponent not an integer: ' + de(n));
        if (
          (s != null && (s = new S(s)),
          (a = n.e > 14),
          !y.c || !y.c[0] || (y.c[0] == 1 && !y.e && y.c.length == 1) || !n.c || !n.c[0])
        )
          return (b = new S(Math.pow(+de(y), a ? n.s * (2 - at(n)) : +de(n)))), s ? b.mod(s) : b;
        if (((l = n.s < 0), s)) {
          if (s.c ? !s.c[0] : !s.s) return new S(NaN);
          (p = !l && y.isInteger() && s.isInteger()), p && (y = y.mod(s));
        } else {
          if (
            n.e > 9 &&
            (y.e > 0 ||
              y.e < -1 ||
              (y.e == 0
                ? y.c[0] > 1 || (a && y.c[1] >= 24e7)
                : y.c[0] < 8e13 || (a && y.c[0] <= 9999975e7)))
          )
            return (d = y.s < 0 && at(n) ? -0 : 0), y.e > -1 && (d = 1 / d), new S(l ? 1 / d : d);
          j && (d = yt(j / N + 2));
        }
        for (
          a
            ? ((c = new S(0.5)), l && (n.s = 1), (g = at(n)))
            : ((u = Math.abs(+de(n))), (g = u % 2)),
            b = new S(f);
          ;

        ) {
          if (g) {
            if (((b = b.times(y)), !b.c)) break;
            d ? b.c.length > d && (b.c.length = d) : p && (b = b.mod(s));
          }
          if (u) {
            if (((u = Le(u / 2)), u === 0)) break;
            g = u % 2;
          } else if (((n = n.times(c)), oe(n, n.e + 1, 1), n.e > 14)) g = at(n);
          else {
            if (((u = +de(n)), u === 0)) break;
            g = u % 2;
          }
          (y = y.times(y)), d ? y.c && y.c.length > d && (y.c.length = d) : p && (y = y.mod(s));
        }
        return p ? b : (l && (b = f.div(b)), s ? b.mod(s) : d ? oe(b, j, m, w) : b);
      }),
    (i.integerValue = function (n) {
      var s = new S(this);
      return n == null ? (n = m) : q(n, 0, 8), oe(s, s.e + 1, n);
    }),
    (i.isEqualTo = i.eq =
      function (n, s) {
        return Ke(this, new S(n, s)) === 0;
      }),
    (i.isFinite = function () {
      return !!this.c;
    }),
    (i.isGreaterThan = i.gt =
      function (n, s) {
        return Ke(this, new S(n, s)) > 0;
      }),
    (i.isGreaterThanOrEqualTo = i.gte =
      function (n, s) {
        return (s = Ke(this, new S(n, s))) === 1 || s === 0;
      }),
    (i.isInteger = function () {
      return !!this.c && me(this.e / N) > this.c.length - 2;
    }),
    (i.isLessThan = i.lt =
      function (n, s) {
        return Ke(this, new S(n, s)) < 0;
      }),
    (i.isLessThanOrEqualTo = i.lte =
      function (n, s) {
        return (s = Ke(this, new S(n, s))) === -1 || s === 0;
      }),
    (i.isNaN = function () {
      return !this.s;
    }),
    (i.isNegative = function () {
      return this.s < 0;
    }),
    (i.isPositive = function () {
      return this.s > 0;
    }),
    (i.isZero = function () {
      return !!this.c && this.c[0] == 0;
    }),
    (i.minus = function (n, s) {
      var c,
        p,
        u,
        d,
        w = this,
        a = w.s;
      if (((n = new S(n, s)), (s = n.s), !a || !s)) return new S(NaN);
      if (a != s) return (n.s = -s), w.plus(n);
      var l = w.e / N,
        g = n.e / N,
        b = w.c,
        y = n.c;
      if (!l || !g) {
        if (!b || !y) return b ? ((n.s = -s), n) : new S(y ? w : NaN);
        if (!b[0] || !y[0]) return y[0] ? ((n.s = -s), n) : new S(b[0] ? w : m == 3 ? -0 : 0);
      }
      if (((l = me(l)), (g = me(g)), (b = b.slice()), (a = l - g))) {
        for (
          (d = a < 0) ? ((a = -a), (u = b)) : ((g = l), (u = y)), u.reverse(), s = a;
          s--;
          u.push(0)
        );
        u.reverse();
      } else
        for (p = (d = (a = b.length) < (s = y.length)) ? a : s, a = s = 0; s < p; s++)
          if (b[s] != y[s]) {
            d = b[s] < y[s];
            break;
          }
      if (
        (d && ((u = b), (b = y), (y = u), (n.s = -n.s)),
        (s = (p = y.length) - (c = b.length)),
        s > 0)
      )
        for (; s--; b[c++] = 0);
      for (s = Se - 1; p > a; ) {
        if (b[--p] < y[p]) {
          for (c = p; c && !b[--c]; b[c] = s);
          --b[c], (b[p] += Se);
        }
        b[p] -= y[p];
      }
      for (; b[0] == 0; b.splice(0, 1), --g);
      return b[0] ? xe(n, b, g) : ((n.s = m == 3 ? -1 : 1), (n.c = [(n.e = 0)]), n);
    }),
    (i.modulo = i.mod =
      function (n, s) {
        var c,
          p,
          u = this;
        return (
          (n = new S(n, s)),
          !u.c || !n.s || (n.c && !n.c[0])
            ? new S(NaN)
            : !n.c || (u.c && !u.c[0])
              ? new S(u)
              : (G == 9
                  ? ((p = n.s), (n.s = 1), (c = e(u, n, 0, 3)), (n.s = p), (c.s *= p))
                  : (c = e(u, n, 0, G)),
                (n = u.minus(c.times(n))),
                !n.c[0] && G == 1 && (n.s = u.s),
                n)
        );
      }),
    (i.multipliedBy = i.times =
      function (n, s) {
        var c,
          p,
          u,
          d,
          w,
          a,
          l,
          g,
          b,
          y,
          _,
          O,
          F,
          X,
          Z,
          z = this,
          W = z.c,
          ce = (n = new S(n, s)).c;
        if (!W || !ce || !W[0] || !ce[0])
          return (
            !z.s || !n.s || (W && !W[0] && !ce) || (ce && !ce[0] && !W)
              ? (n.c = n.e = n.s = null)
              : ((n.s *= z.s), !W || !ce ? (n.c = n.e = null) : ((n.c = [0]), (n.e = 0))),
            n
          );
        for (
          p = me(z.e / N) + me(n.e / N),
            n.s *= z.s,
            l = W.length,
            y = ce.length,
            l < y && ((F = W), (W = ce), (ce = F), (u = l), (l = y), (y = u)),
            u = l + y,
            F = [];
          u--;
          F.push(0)
        );
        for (X = Se, Z = Ce, u = y; --u >= 0; ) {
          for (c = 0, _ = ce[u] % Z, O = (ce[u] / Z) | 0, w = l, d = u + w; d > u; )
            (g = W[--w] % Z),
              (b = (W[w] / Z) | 0),
              (a = O * g + b * _),
              (g = _ * g + (a % Z) * Z + F[d] + c),
              (c = ((g / X) | 0) + ((a / Z) | 0) + O * b),
              (F[d--] = g % X);
          F[d] = c;
        }
        return c ? ++p : F.splice(0, 1), xe(n, F, p);
      }),
    (i.negated = function () {
      var n = new S(this);
      return (n.s = -n.s || null), n;
    }),
    (i.plus = function (n, s) {
      var c,
        p = this,
        u = p.s;
      if (((n = new S(n, s)), (s = n.s), !u || !s)) return new S(NaN);
      if (u != s) return (n.s = -s), p.minus(n);
      var d = p.e / N,
        w = n.e / N,
        a = p.c,
        l = n.c;
      if (!d || !w) {
        if (!a || !l) return new S(u / 0);
        if (!a[0] || !l[0]) return l[0] ? n : new S(a[0] ? p : u * 0);
      }
      if (((d = me(d)), (w = me(w)), (a = a.slice()), (u = d - w))) {
        for (u > 0 ? ((w = d), (c = l)) : ((u = -u), (c = a)), c.reverse(); u--; c.push(0));
        c.reverse();
      }
      for (
        u = a.length, s = l.length, u - s < 0 && ((c = l), (l = a), (a = c), (s = u)), u = 0;
        s;

      )
        (u = ((a[--s] = a[s] + l[s] + u) / Se) | 0), (a[s] = Se === a[s] ? 0 : a[s] % Se);
      return u && ((a = [u].concat(a)), ++w), xe(n, a, w);
    }),
    (i.precision = i.sd =
      function (n, s) {
        var c,
          p,
          u,
          d = this;
        if (n != null && n !== !!n)
          return q(n, 1, re), s == null ? (s = m) : q(s, 0, 8), oe(new S(d), n, s);
        if (!(c = d.c)) return null;
        if (((u = c.length - 1), (p = u * N + 1), (u = c[u]))) {
          for (; u % 10 == 0; u /= 10, p--);
          for (u = c[0]; u >= 10; u /= 10, p++);
        }
        return n && d.e + 1 > p && (p = d.e + 1), p;
      }),
    (i.shiftedBy = function (n) {
      return q(n, -At, At), this.times('1e' + n);
    }),
    (i.squareRoot = i.sqrt =
      function () {
        var n,
          s,
          c,
          p,
          u,
          d = this,
          w = d.c,
          a = d.s,
          l = d.e,
          g = h + 4,
          b = new S('0.5');
        if (a !== 1 || !w || !w[0])
          return new S(!a || (a < 0 && (!w || w[0])) ? NaN : w ? d : 1 / 0);
        if (
          ((a = Math.sqrt(+de(d))),
          a == 0 || a == 1 / 0
            ? ((s = we(w)),
              (s.length + l) % 2 == 0 && (s += '0'),
              (a = Math.sqrt(+s)),
              (l = me((l + 1) / 2) - (l < 0 || l % 2)),
              a == 1 / 0
                ? (s = '5e' + l)
                : ((s = a.toExponential()), (s = s.slice(0, s.indexOf('e') + 1) + l)),
              (c = new S(s)))
            : (c = new S(a + '')),
          c.c[0])
        ) {
          for (l = c.e, a = l + g, a < 3 && (a = 0); ; )
            if (
              ((u = c),
              (c = b.times(u.plus(e(d, u, g, 1)))),
              we(u.c).slice(0, a) === (s = we(c.c)).slice(0, a))
            )
              if (
                (c.e < l && --a, (s = s.slice(a - 3, a + 1)), s == '9999' || (!p && s == '4999'))
              ) {
                if (!p && (oe(u, u.e + h + 2, 0), u.times(u).eq(d))) {
                  c = u;
                  break;
                }
                (g += 4), (a += 4), (p = 1);
              } else {
                (!+s || (!+s.slice(1) && s.charAt(0) == '5')) &&
                  (oe(c, c.e + h + 2, 1), (n = !c.times(c).eq(d)));
                break;
              }
        }
        return oe(c, c.e + h + 1, m, n);
      }),
    (i.toExponential = function (n, s) {
      return n != null && (q(n, 0, re), n++), $(this, n, s, 1);
    }),
    (i.toFixed = function (n, s) {
      return n != null && (q(n, 0, re), (n = n + this.e + 1)), $(this, n, s);
    }),
    (i.toFormat = function (n, s, c) {
      var p,
        u = this;
      if (c == null)
        n != null && s && typeof s == 'object'
          ? ((c = s), (s = null))
          : n && typeof n == 'object'
            ? ((c = n), (n = s = null))
            : (c = te);
      else if (typeof c != 'object') throw Error(le + 'Argument not an object: ' + c);
      if (((p = u.toFixed(n, s)), u.c)) {
        var d,
          w = p.split('.'),
          a = +c.groupSize,
          l = +c.secondaryGroupSize,
          g = c.groupSeparator || '',
          b = w[0],
          y = w[1],
          _ = u.s < 0,
          O = _ ? b.slice(1) : b,
          F = O.length;
        if ((l && ((d = a), (a = l), (l = d), (F -= d)), a > 0 && F > 0)) {
          for (d = F % a || a, b = O.substr(0, d); d < F; d += a) b += g + O.substr(d, a);
          l > 0 && (b += g + O.slice(d)), _ && (b = '-' + b);
        }
        p = y
          ? b +
            (c.decimalSeparator || '') +
            ((l = +c.fractionGroupSize)
              ? y.replace(
                  new RegExp('\\d{' + l + '}\\B', 'g'),
                  '$&' + (c.fractionGroupSeparator || '')
                )
              : y)
          : b;
      }
      return (c.prefix || '') + p + (c.suffix || '');
    }),
    (i.toFraction = function (n) {
      var s,
        c,
        p,
        u,
        d,
        w,
        a,
        l,
        g,
        b,
        y,
        _,
        O = this,
        F = O.c;
      if (n != null && ((a = new S(n)), (!a.isInteger() && (a.c || a.s !== 1)) || a.lt(f)))
        throw Error(
          le + 'Argument ' + (a.isInteger() ? 'out of range: ' : 'not an integer: ') + de(a)
        );
      if (!F) return new S(O);
      for (
        s = new S(f),
          g = c = new S(f),
          p = l = new S(f),
          _ = we(F),
          d = s.e = _.length - O.e - 1,
          s.c[0] = St[(w = d % N) < 0 ? N + w : w],
          n = !n || a.comparedTo(s) > 0 ? (d > 0 ? s : g) : a,
          w = L,
          L = 1 / 0,
          a = new S(_),
          l.c[0] = 0;
        (b = e(a, s, 0, 1)), (u = c.plus(b.times(p))), u.comparedTo(n) != 1;

      )
        (c = p),
          (p = u),
          (g = l.plus(b.times((u = g)))),
          (l = u),
          (s = a.minus(b.times((u = s)))),
          (a = u);
      return (
        (u = e(n.minus(c), p, 0, 1)),
        (l = l.plus(u.times(g))),
        (c = c.plus(u.times(p))),
        (l.s = g.s = O.s),
        (d = d * 2),
        (y =
          e(g, p, d, m)
            .minus(O)
            .abs()
            .comparedTo(e(l, c, d, m).minus(O).abs()) < 1
            ? [g, p]
            : [l, c]),
        (L = w),
        y
      );
    }),
    (i.toNumber = function () {
      return +de(this);
    }),
    (i.toPrecision = function (n, s) {
      return n != null && q(n, 1, re), $(this, n, s, 2);
    }),
    (i.toString = function (n) {
      var s,
        c = this,
        p = c.s,
        u = c.e;
      return (
        u === null
          ? p
            ? ((s = 'Infinity'), p < 0 && (s = '-' + s))
            : (s = 'NaN')
          : (n == null
              ? (s = u <= B || u >= v ? ut(we(c.c), u) : Re(we(c.c), u, '0'))
              : n === 10 && Ue
                ? ((c = oe(new S(c), h + u + 1, m)), (s = Re(we(c.c), c.e, '0')))
                : (q(n, 2, ne.length, 'Base'), (s = r(Re(we(c.c), u, '0'), 10, n, p, !0))),
            p < 0 && c.c[0] && (s = '-' + s)),
        s
      );
    }),
    (i.valueOf = i.toJSON =
      function () {
        return de(this);
      }),
    (i._isBigNumber = !0),
    (i[Symbol.toStringTag] = 'BigNumber'),
    (i[Symbol.for('nodejs.util.inspect.custom')] = i.valueOf),
    t != null && S.set(t),
    S
  );
}
function me(t) {
  var e = t | 0;
  return t > 0 || t === e ? e : e - 1;
}
function we(t) {
  for (var e, r, o = 1, i = t.length, f = t[0] + ''; o < i; ) {
    for (e = t[o++] + '', r = N - e.length; r--; e = '0' + e);
    f += e;
  }
  for (i = f.length; f.charCodeAt(--i) === 48; );
  return f.slice(0, i + 1 || 1);
}
function Ke(t, e) {
  var r,
    o,
    i = t.c,
    f = e.c,
    h = t.s,
    m = e.s,
    B = t.e,
    v = e.e;
  if (!h || !m) return null;
  if (((r = i && !i[0]), (o = f && !f[0]), r || o)) return r ? (o ? 0 : -m) : h;
  if (h != m) return h;
  if (((r = h < 0), (o = B == v), !i || !f)) return o ? 0 : !i ^ r ? 1 : -1;
  if (!o) return (B > v) ^ r ? 1 : -1;
  for (m = (B = i.length) < (v = f.length) ? B : v, h = 0; h < m; h++)
    if (i[h] != f[h]) return (i[h] > f[h]) ^ r ? 1 : -1;
  return B == v ? 0 : (B > v) ^ r ? 1 : -1;
}
function q(t, e, r, o) {
  if (t < e || t > r || t !== Le(t))
    throw Error(
      le +
        (o || 'Argument') +
        (typeof t == 'number'
          ? t < e || t > r
            ? ' out of range: '
            : ' not an integer: '
          : ' not a primitive number: ') +
        String(t)
    );
}
function at(t) {
  var e = t.c.length - 1;
  return me(t.e / N) == e && t.c[e] % 2 != 0;
}
function ut(t, e) {
  return (t.length > 1 ? t.charAt(0) + '.' + t.slice(1) : t) + (e < 0 ? 'e' : 'e+') + e;
}
function Re(t, e, r) {
  var o, i;
  if (e < 0) {
    for (i = r + '.'; ++e; i += r);
    t = i + t;
  } else if (((o = t.length), ++e > o)) {
    for (i = r, e -= o; --e; i += r);
    t += i;
  } else e < o && (t = t.slice(0, e) + '.' + t.slice(e));
  return t;
}
var tn = en();
const Qe = (t) => {
    const e = t.decode.bind(t),
      r = t.encode.bind(t);
    return { decode: e, encode: r };
  },
  st = (t) => (e) => {
    const r = Fe(t, e),
      { encode: o, decode: i } = Qe(r),
      f = r;
    return (
      (f.decode = (h, m) => {
        const B = i(h, m);
        return Jt(se.from(B));
      }),
      (f.encode = (h, m, B) => {
        const v = Yt(h, t);
        return o(v, m, B);
      }),
      f
    );
  },
  it = (t) => (e) => {
    const r = Fe(t, e),
      { encode: o, decode: i } = Qe(r),
      f = r;
    return (
      (f.decode = (h, m) => {
        const B = i(h, m);
        return vn(se.from(B));
      }),
      (f.encode = (h, m, B) => {
        const v = Cn(h, t);
        return o(v, m, B);
      }),
      f
    );
  },
  Gn = st(8),
  $n = it(8),
  nn = st(16),
  Wn = it(16),
  Vn = st(24),
  qn = it(24),
  Kn = st(32),
  jn = it(32),
  Lt = new tn('1e+18'),
  Xn = (t) => {
    const e = nn(t),
      { encode: r, decode: o } = Qe(e),
      i = e;
    return (
      (i.decode = (f, h) => {
        const m = o(f, h).toString();
        return new tn(m).div(Lt);
      }),
      (i.encode = (f, h, m) => {
        const B = BigInt(f.times(Lt).integerValue().toString());
        return r(B, h, m);
      }),
      i
    );
  },
  Jn = (t) => {
    const e = Q(t),
      { encode: r, decode: o } = Qe(e),
      i = e;
    return (
      (i.decode = (f, h) => !!o(f, h)),
      (i.encode = (f, h, m) => {
        const B = Number(f);
        return r(B, h, m);
      }),
      i
    );
  };
function _t(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`);
}
function Yn(t) {
  if (typeof t != 'boolean') throw new Error(`Expected boolean, not ${t}`);
}
function rn(t, ...e) {
  if (!(t instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  if (e.length > 0 && !e.includes(t.length))
    throw new TypeError(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function Qn(t) {
  if (typeof t != 'function' || typeof t.create != 'function')
    throw new Error('Hash should be wrapped by utils.wrapConstructor');
  _t(t.outputLen), _t(t.blockLen);
}
function Zn(t, e = !0) {
  if (t.destroyed) throw new Error('Hash instance has been destroyed');
  if (e && t.finished) throw new Error('Hash#digest() has already been called');
}
function er(t, e) {
  rn(t);
  const r = e.outputLen;
  if (t.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
const pe = { number: _t, bool: Yn, bytes: rn, hash: Qn, exists: Zn, output: er };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const tr = (t) =>
    new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
  Et = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
  Ie = (t, e) => (t << (32 - e)) | (t >>> e),
  nr = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!nr) throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, '0'));
function rr(t) {
  if (typeof t != 'string') throw new TypeError(`utf8ToBytes expected string, got ${typeof t}`);
  return new TextEncoder().encode(t);
}
function ot(t) {
  if ((typeof t == 'string' && (t = rr(t)), !(t instanceof Uint8Array)))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);
  return t;
}
class Ct {
  clone() {
    return this._cloneInto();
  }
}
function We(t) {
  const e = (o) => t().update(ot(o)).digest(),
    r = t();
  return (e.outputLen = r.outputLen), (e.blockLen = r.blockLen), (e.create = () => t()), e;
}
function sr(t) {
  const e = (o, i) => t(i).update(ot(o)).digest(),
    r = t({});
  return (e.outputLen = r.outputLen), (e.blockLen = r.blockLen), (e.create = (o) => t(o)), e;
}
function ir(t, e, r, o) {
  if (typeof t.setBigUint64 == 'function') return t.setBigUint64(e, r, o);
  const i = BigInt(32),
    f = BigInt(4294967295),
    h = Number((r >> i) & f),
    m = Number(r & f),
    B = o ? 4 : 0,
    v = o ? 0 : 4;
  t.setUint32(e + B, h, o), t.setUint32(e + v, m, o);
}
class sn extends Ct {
  constructor(e, r, o, i) {
    super(),
      (this.blockLen = e),
      (this.outputLen = r),
      (this.padOffset = o),
      (this.isLE = i),
      (this.finished = !1),
      (this.length = 0),
      (this.pos = 0),
      (this.destroyed = !1),
      (this.buffer = new Uint8Array(e)),
      (this.view = Et(this.buffer));
  }
  update(e) {
    pe.exists(this);
    const { view: r, buffer: o, blockLen: i } = this;
    e = ot(e);
    const f = e.length;
    for (let h = 0; h < f; ) {
      const m = Math.min(i - this.pos, f - h);
      if (m === i) {
        const B = Et(e);
        for (; i <= f - h; h += i) this.process(B, h);
        continue;
      }
      o.set(e.subarray(h, h + m), this.pos),
        (this.pos += m),
        (h += m),
        this.pos === i && (this.process(r, 0), (this.pos = 0));
    }
    return (this.length += e.length), this.roundClean(), this;
  }
  digestInto(e) {
    pe.exists(this), pe.output(e, this), (this.finished = !0);
    const { buffer: r, view: o, blockLen: i, isLE: f } = this;
    let { pos: h } = this;
    (r[h++] = 128),
      this.buffer.subarray(h).fill(0),
      this.padOffset > i - h && (this.process(o, 0), (h = 0));
    for (let L = h; L < i; L++) r[L] = 0;
    ir(o, i - 8, BigInt(this.length * 8), f), this.process(o, 0);
    const m = Et(e),
      B = this.outputLen;
    if (B % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
    const v = B / 4,
      D = this.get();
    if (v > D.length) throw new Error('_sha2: outputLen bigger than state');
    for (let L = 0; L < v; L++) m.setUint32(4 * L, D[L], f);
  }
  digest() {
    const { buffer: e, outputLen: r } = this;
    this.digestInto(e);
    const o = e.slice(0, r);
    return this.destroy(), o;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: r, buffer: o, length: i, finished: f, destroyed: h, pos: m } = this;
    return (
      (e.length = i), (e.pos = m), (e.finished = f), (e.destroyed = h), i % r && e.buffer.set(o), e
    );
  }
}
const ft = BigInt(2 ** 32 - 1),
  Ot = BigInt(32);
function on(t, e = !1) {
  return e
    ? { h: Number(t & ft), l: Number((t >> Ot) & ft) }
    : { h: Number((t >> Ot) & ft) | 0, l: Number(t & ft) | 0 };
}
function or(t, e = !1) {
  let r = new Uint32Array(t.length),
    o = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: f, l: h } = on(t[i], e);
    [r[i], o[i]] = [f, h];
  }
  return [r, o];
}
const cr = (t, e) => (BigInt(t >>> 0) << Ot) | BigInt(e >>> 0),
  ar = (t, e, r) => t >>> r,
  ur = (t, e, r) => (t << (32 - r)) | (e >>> r),
  fr = (t, e, r) => (t >>> r) | (e << (32 - r)),
  lr = (t, e, r) => (t << (32 - r)) | (e >>> r),
  hr = (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
  dr = (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
  pr = (t, e) => e,
  br = (t, e) => t,
  xr = (t, e, r) => (t << r) | (e >>> (32 - r)),
  gr = (t, e, r) => (e << r) | (t >>> (32 - r)),
  wr = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
  mr = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
function yr(t, e, r, o) {
  const i = (e >>> 0) + (o >>> 0);
  return { h: (t + r + ((i / 2 ** 32) | 0)) | 0, l: i | 0 };
}
const Ar = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
  Sr = (t, e, r, o) => (e + r + o + ((t / 2 ** 32) | 0)) | 0,
  Er = (t, e, r, o) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (o >>> 0),
  Br = (t, e, r, o, i) => (e + r + o + i + ((t / 2 ** 32) | 0)) | 0,
  kr = (t, e, r, o, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (o >>> 0) + (i >>> 0),
  Ir = (t, e, r, o, i, f) => (e + r + o + i + f + ((t / 2 ** 32) | 0)) | 0,
  C = {
    fromBig: on,
    split: or,
    toBig: cr,
    shrSH: ar,
    shrSL: ur,
    rotrSH: fr,
    rotrSL: lr,
    rotrBH: hr,
    rotrBL: dr,
    rotr32H: pr,
    rotr32L: br,
    rotlSH: xr,
    rotlSL: gr,
    rotlBH: wr,
    rotlBL: mr,
    add: yr,
    add3L: Ar,
    add3H: Sr,
    add4L: Er,
    add4H: Br,
    add5H: Ir,
    add5L: kr,
  },
  [Lr, _r] = C.split(
    [
      '0x428a2f98d728ae22',
      '0x7137449123ef65cd',
      '0xb5c0fbcfec4d3b2f',
      '0xe9b5dba58189dbbc',
      '0x3956c25bf348b538',
      '0x59f111f1b605d019',
      '0x923f82a4af194f9b',
      '0xab1c5ed5da6d8118',
      '0xd807aa98a3030242',
      '0x12835b0145706fbe',
      '0x243185be4ee4b28c',
      '0x550c7dc3d5ffb4e2',
      '0x72be5d74f27b896f',
      '0x80deb1fe3b1696b1',
      '0x9bdc06a725c71235',
      '0xc19bf174cf692694',
      '0xe49b69c19ef14ad2',
      '0xefbe4786384f25e3',
      '0x0fc19dc68b8cd5b5',
      '0x240ca1cc77ac9c65',
      '0x2de92c6f592b0275',
      '0x4a7484aa6ea6e483',
      '0x5cb0a9dcbd41fbd4',
      '0x76f988da831153b5',
      '0x983e5152ee66dfab',
      '0xa831c66d2db43210',
      '0xb00327c898fb213f',
      '0xbf597fc7beef0ee4',
      '0xc6e00bf33da88fc2',
      '0xd5a79147930aa725',
      '0x06ca6351e003826f',
      '0x142929670a0e6e70',
      '0x27b70a8546d22ffc',
      '0x2e1b21385c26c926',
      '0x4d2c6dfc5ac42aed',
      '0x53380d139d95b3df',
      '0x650a73548baf63de',
      '0x766a0abb3c77b2a8',
      '0x81c2c92e47edaee6',
      '0x92722c851482353b',
      '0xa2bfe8a14cf10364',
      '0xa81a664bbc423001',
      '0xc24b8b70d0f89791',
      '0xc76c51a30654be30',
      '0xd192e819d6ef5218',
      '0xd69906245565a910',
      '0xf40e35855771202a',
      '0x106aa07032bbd1b8',
      '0x19a4c116b8d2d0c8',
      '0x1e376c085141ab53',
      '0x2748774cdf8eeb99',
      '0x34b0bcb5e19b48a8',
      '0x391c0cb3c5c95a63',
      '0x4ed8aa4ae3418acb',
      '0x5b9cca4f7763e373',
      '0x682e6ff3d6b2b8a3',
      '0x748f82ee5defb2fc',
      '0x78a5636f43172f60',
      '0x84c87814a1f0ab72',
      '0x8cc702081a6439ec',
      '0x90befffa23631e28',
      '0xa4506cebde82bde9',
      '0xbef9a3f7b2c67915',
      '0xc67178f2e372532b',
      '0xca273eceea26619c',
      '0xd186b8c721c0c207',
      '0xeada7dd6cde0eb1e',
      '0xf57d4f7fee6ed178',
      '0x06f067aa72176fba',
      '0x0a637dc5a2c898a6',
      '0x113f9804bef90dae',
      '0x1b710b35131c471b',
      '0x28db77f523047d84',
      '0x32caab7b40c72493',
      '0x3c9ebe0a15c9bebc',
      '0x431d67c49c100d4c',
      '0x4cc5d4becb3e42b6',
      '0x597f299cfc657e2a',
      '0x5fcb6fab3ad6faec',
      '0x6c44198c4a475817',
    ].map((t) => BigInt(t))
  ),
  Ne = new Uint32Array(80),
  De = new Uint32Array(80);
class pt extends sn {
  constructor() {
    super(128, 64, 16, !1),
      (this.Ah = 1779033703),
      (this.Al = -205731576),
      (this.Bh = -1150833019),
      (this.Bl = -2067093701),
      (this.Ch = 1013904242),
      (this.Cl = -23791573),
      (this.Dh = -1521486534),
      (this.Dl = 1595750129),
      (this.Eh = 1359893119),
      (this.El = -1377402159),
      (this.Fh = -1694144372),
      (this.Fl = 725511199),
      (this.Gh = 528734635),
      (this.Gl = -79577749),
      (this.Hh = 1541459225),
      (this.Hl = 327033209);
  }
  get() {
    const {
      Ah: e,
      Al: r,
      Bh: o,
      Bl: i,
      Ch: f,
      Cl: h,
      Dh: m,
      Dl: B,
      Eh: v,
      El: D,
      Fh: L,
      Fl: P,
      Gh: G,
      Gl: j,
      Hh: te,
      Hl: ne,
    } = this;
    return [e, r, o, i, f, h, m, B, v, D, L, P, G, j, te, ne];
  }
  set(e, r, o, i, f, h, m, B, v, D, L, P, G, j, te, ne) {
    (this.Ah = e | 0),
      (this.Al = r | 0),
      (this.Bh = o | 0),
      (this.Bl = i | 0),
      (this.Ch = f | 0),
      (this.Cl = h | 0),
      (this.Dh = m | 0),
      (this.Dl = B | 0),
      (this.Eh = v | 0),
      (this.El = D | 0),
      (this.Fh = L | 0),
      (this.Fl = P | 0),
      (this.Gh = G | 0),
      (this.Gl = j | 0),
      (this.Hh = te | 0),
      (this.Hl = ne | 0);
  }
  process(e, r) {
    for (let $ = 0; $ < 16; $++, r += 4) (Ne[$] = e.getUint32(r)), (De[$] = e.getUint32((r += 4)));
    for (let $ = 16; $ < 80; $++) {
      const Ae = Ne[$ - 15] | 0,
        xe = De[$ - 15] | 0,
        oe = C.rotrSH(Ae, xe, 1) ^ C.rotrSH(Ae, xe, 8) ^ C.shrSH(Ae, xe, 7),
        de = C.rotrSL(Ae, xe, 1) ^ C.rotrSL(Ae, xe, 8) ^ C.shrSL(Ae, xe, 7),
        n = Ne[$ - 2] | 0,
        s = De[$ - 2] | 0,
        c = C.rotrSH(n, s, 19) ^ C.rotrBH(n, s, 61) ^ C.shrSH(n, s, 6),
        p = C.rotrSL(n, s, 19) ^ C.rotrBL(n, s, 61) ^ C.shrSL(n, s, 6),
        u = C.add4L(de, p, De[$ - 7], De[$ - 16]),
        d = C.add4H(u, oe, c, Ne[$ - 7], Ne[$ - 16]);
      (Ne[$] = d | 0), (De[$] = u | 0);
    }
    let {
      Ah: o,
      Al: i,
      Bh: f,
      Bl: h,
      Ch: m,
      Cl: B,
      Dh: v,
      Dl: D,
      Eh: L,
      El: P,
      Fh: G,
      Fl: j,
      Gh: te,
      Gl: ne,
      Hh: Ue,
      Hl: S,
    } = this;
    for (let $ = 0; $ < 80; $++) {
      const Ae = C.rotrSH(L, P, 14) ^ C.rotrSH(L, P, 18) ^ C.rotrBH(L, P, 41),
        xe = C.rotrSL(L, P, 14) ^ C.rotrSL(L, P, 18) ^ C.rotrBL(L, P, 41),
        oe = (L & G) ^ (~L & te),
        de = (P & j) ^ (~P & ne),
        n = C.add5L(S, xe, de, _r[$], De[$]),
        s = C.add5H(n, Ue, Ae, oe, Lr[$], Ne[$]),
        c = n | 0,
        p = C.rotrSH(o, i, 28) ^ C.rotrBH(o, i, 34) ^ C.rotrBH(o, i, 39),
        u = C.rotrSL(o, i, 28) ^ C.rotrBL(o, i, 34) ^ C.rotrBL(o, i, 39),
        d = (o & f) ^ (o & m) ^ (f & m),
        w = (i & h) ^ (i & B) ^ (h & B);
      (Ue = te | 0),
        (S = ne | 0),
        (te = G | 0),
        (ne = j | 0),
        (G = L | 0),
        (j = P | 0),
        ({ h: L, l: P } = C.add(v | 0, D | 0, s | 0, c | 0)),
        (v = m | 0),
        (D = B | 0),
        (m = f | 0),
        (B = h | 0),
        (f = o | 0),
        (h = i | 0);
      const a = C.add3L(c, u, w);
      (o = C.add3H(a, s, p, d)), (i = a | 0);
    }
    ({ h: o, l: i } = C.add(this.Ah | 0, this.Al | 0, o | 0, i | 0)),
      ({ h: f, l: h } = C.add(this.Bh | 0, this.Bl | 0, f | 0, h | 0)),
      ({ h: m, l: B } = C.add(this.Ch | 0, this.Cl | 0, m | 0, B | 0)),
      ({ h: v, l: D } = C.add(this.Dh | 0, this.Dl | 0, v | 0, D | 0)),
      ({ h: L, l: P } = C.add(this.Eh | 0, this.El | 0, L | 0, P | 0)),
      ({ h: G, l: j } = C.add(this.Fh | 0, this.Fl | 0, G | 0, j | 0)),
      ({ h: te, l: ne } = C.add(this.Gh | 0, this.Gl | 0, te | 0, ne | 0)),
      ({ h: Ue, l: S } = C.add(this.Hh | 0, this.Hl | 0, Ue | 0, S | 0)),
      this.set(o, i, f, h, m, B, v, D, L, P, G, j, te, ne, Ue, S);
  }
  roundClean() {
    Ne.fill(0), De.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class Or extends pt {
  constructor() {
    super(),
      (this.Ah = -1942145080),
      (this.Al = 424955298),
      (this.Bh = 1944164710),
      (this.Bl = -1982016298),
      (this.Ch = 502970286),
      (this.Cl = 855612546),
      (this.Dh = 1738396948),
      (this.Dl = 1479516111),
      (this.Eh = 258812777),
      (this.El = 2077511080),
      (this.Fh = 2011393907),
      (this.Fl = 79989058),
      (this.Gh = 1067287976),
      (this.Gl = 1780299464),
      (this.Hh = 286451373),
      (this.Hl = -1848208735),
      (this.outputLen = 28);
  }
}
class Hr extends pt {
  constructor() {
    super(),
      (this.Ah = 573645204),
      (this.Al = -64227540),
      (this.Bh = -1621794909),
      (this.Bl = -934517566),
      (this.Ch = 596883563),
      (this.Cl = 1867755857),
      (this.Dh = -1774684391),
      (this.Dl = 1497426621),
      (this.Eh = -1775747358),
      (this.El = -1467023389),
      (this.Fh = -1101128155),
      (this.Fl = 1401305490),
      (this.Gh = 721525244),
      (this.Gl = 746961066),
      (this.Hh = 246885852),
      (this.Hl = -2117784414),
      (this.outputLen = 32);
  }
}
class Ur extends pt {
  constructor() {
    super(),
      (this.Ah = -876896931),
      (this.Al = -1056596264),
      (this.Bh = 1654270250),
      (this.Bl = 914150663),
      (this.Ch = -1856437926),
      (this.Cl = 812702999),
      (this.Dh = 355462360),
      (this.Dl = -150054599),
      (this.Eh = 1731405415),
      (this.El = -4191439),
      (this.Fh = -1900787065),
      (this.Fl = 1750603025),
      (this.Gh = -619958771),
      (this.Gl = 1694076839),
      (this.Hh = 1203062813),
      (this.Hl = -1090891868),
      (this.outputLen = 48);
  }
}
const Rr = We(() => new pt());
We(() => new Or());
We(() => new Hr());
We(() => new Ur());
const vr = (t, e, r) => (t & e) ^ (~t & r),
  Cr = (t, e, r) => (t & e) ^ (t & r) ^ (e & r),
  Nr = new Uint32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ]),
  Te = new Uint32Array([
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225,
  ]),
  Pe = new Uint32Array(64);
class cn extends sn {
  constructor() {
    super(64, 32, 8, !1),
      (this.A = Te[0] | 0),
      (this.B = Te[1] | 0),
      (this.C = Te[2] | 0),
      (this.D = Te[3] | 0),
      (this.E = Te[4] | 0),
      (this.F = Te[5] | 0),
      (this.G = Te[6] | 0),
      (this.H = Te[7] | 0);
  }
  get() {
    const { A: e, B: r, C: o, D: i, E: f, F: h, G: m, H: B } = this;
    return [e, r, o, i, f, h, m, B];
  }
  set(e, r, o, i, f, h, m, B) {
    (this.A = e | 0),
      (this.B = r | 0),
      (this.C = o | 0),
      (this.D = i | 0),
      (this.E = f | 0),
      (this.F = h | 0),
      (this.G = m | 0),
      (this.H = B | 0);
  }
  process(e, r) {
    for (let L = 0; L < 16; L++, r += 4) Pe[L] = e.getUint32(r, !1);
    for (let L = 16; L < 64; L++) {
      const P = Pe[L - 15],
        G = Pe[L - 2],
        j = Ie(P, 7) ^ Ie(P, 18) ^ (P >>> 3),
        te = Ie(G, 17) ^ Ie(G, 19) ^ (G >>> 10);
      Pe[L] = (te + Pe[L - 7] + j + Pe[L - 16]) | 0;
    }
    let { A: o, B: i, C: f, D: h, E: m, F: B, G: v, H: D } = this;
    for (let L = 0; L < 64; L++) {
      const P = Ie(m, 6) ^ Ie(m, 11) ^ Ie(m, 25),
        G = (D + P + vr(m, B, v) + Nr[L] + Pe[L]) | 0,
        te = ((Ie(o, 2) ^ Ie(o, 13) ^ Ie(o, 22)) + Cr(o, i, f)) | 0;
      (D = v), (v = B), (B = m), (m = (h + G) | 0), (h = f), (f = i), (i = o), (o = (G + te) | 0);
    }
    (o = (o + this.A) | 0),
      (i = (i + this.B) | 0),
      (f = (f + this.C) | 0),
      (h = (h + this.D) | 0),
      (m = (m + this.E) | 0),
      (B = (B + this.F) | 0),
      (v = (v + this.G) | 0),
      (D = (D + this.H) | 0),
      this.set(o, i, f, h, m, B, v, D);
  }
  roundClean() {
    Pe.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
class Dr extends cn {
  constructor() {
    super(),
      (this.A = -1056596264),
      (this.B = 914150663),
      (this.C = 812702999),
      (this.D = -150054599),
      (this.E = -4191439),
      (this.F = 1750603025),
      (this.G = 1694076839),
      (this.H = -1090891868),
      (this.outputLen = 28);
  }
}
const Ht = We(() => new cn());
We(() => new Dr());
var ie = {},
  Tr =
    (_e && _e.__createBinding) ||
    (Object.create
      ? function (t, e, r, o) {
          o === void 0 && (o = r),
            Object.defineProperty(t, o, {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            });
        }
      : function (t, e, r, o) {
          o === void 0 && (o = r), (t[o] = e[r]);
        }),
  Pr =
    (_e && _e.__setModuleDefault) ||
    (Object.create
      ? function (t, e) {
          Object.defineProperty(t, 'default', { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
  Oe =
    (_e && _e.__decorate) ||
    function (t, e, r, o) {
      var i = arguments.length,
        f = i < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o,
        h;
      if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
        f = Reflect.decorate(t, e, r, o);
      else
        for (var m = t.length - 1; m >= 0; m--)
          (h = t[m]) && (f = (i < 3 ? h(f) : i > 3 ? h(e, r, f) : h(e, r)) || f);
      return i > 3 && f && Object.defineProperty(e, r, f), f;
    },
  zr =
    (_e && _e.__importStar) ||
    function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (t != null)
        for (var r in t) r !== 'default' && Object.hasOwnProperty.call(t, r) && Tr(e, t, r);
      return Pr(e, t), e;
    },
  an =
    (_e && _e.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(ie, '__esModule', { value: !0 });
var un =
  (ie.deserializeUnchecked =
  bn =
  ie.deserialize =
  pn =
  ie.serialize =
  ie.BinaryReader =
  ie.BinaryWriter =
  ie.BorshError =
  ie.baseDecode =
  ie.baseEncode =
    void 0);
const ze = an(Nn()),
  fn = an(Dn),
  Fr = zr(Tn),
  Mr = typeof TextDecoder != 'function' ? Fr.TextDecoder : TextDecoder,
  Gr = new Mr('utf-8', { fatal: !0 });
function $r(t) {
  return typeof t == 'string' && (t = se.from(t, 'utf8')), fn.default.encode(se.from(t));
}
ie.baseEncode = $r;
function Wr(t) {
  return se.from(fn.default.decode(t));
}
ie.baseDecode = Wr;
const Bt = 1024;
class fe extends Error {
  constructor(e) {
    super(e), (this.fieldPath = []), (this.originalMessage = e);
  }
  addToFieldPath(e) {
    this.fieldPath.splice(0, 0, e),
      (this.message = this.originalMessage + ': ' + this.fieldPath.join('.'));
  }
}
ie.BorshError = fe;
class ln {
  constructor() {
    (this.buf = se.alloc(Bt)), (this.length = 0);
  }
  maybeResize() {
    this.buf.length < 16 + this.length && (this.buf = se.concat([this.buf, se.alloc(Bt)]));
  }
  writeU8(e) {
    this.maybeResize(), this.buf.writeUInt8(e, this.length), (this.length += 1);
  }
  writeU16(e) {
    this.maybeResize(), this.buf.writeUInt16LE(e, this.length), (this.length += 2);
  }
  writeU32(e) {
    this.maybeResize(), this.buf.writeUInt32LE(e, this.length), (this.length += 4);
  }
  writeU64(e) {
    this.maybeResize(), this.writeBuffer(se.from(new ze.default(e).toArray('le', 8)));
  }
  writeU128(e) {
    this.maybeResize(), this.writeBuffer(se.from(new ze.default(e).toArray('le', 16)));
  }
  writeU256(e) {
    this.maybeResize(), this.writeBuffer(se.from(new ze.default(e).toArray('le', 32)));
  }
  writeU512(e) {
    this.maybeResize(), this.writeBuffer(se.from(new ze.default(e).toArray('le', 64)));
  }
  writeBuffer(e) {
    (this.buf = se.concat([se.from(this.buf.subarray(0, this.length)), e, se.alloc(Bt)])),
      (this.length += e.length);
  }
  writeString(e) {
    this.maybeResize();
    const r = se.from(e, 'utf8');
    this.writeU32(r.length), this.writeBuffer(r);
  }
  writeFixedArray(e) {
    this.writeBuffer(se.from(e));
  }
  writeArray(e, r) {
    this.maybeResize(), this.writeU32(e.length);
    for (const o of e) this.maybeResize(), r(o);
  }
  toArray() {
    return this.buf.subarray(0, this.length);
  }
}
ie.BinaryWriter = ln;
function He(t, e, r) {
  const o = r.value;
  r.value = function (...i) {
    try {
      return o.apply(this, i);
    } catch (f) {
      if (f instanceof RangeError) {
        const h = f.code;
        if (['ERR_BUFFER_OUT_OF_BOUNDS', 'ERR_OUT_OF_RANGE'].indexOf(h) >= 0)
          throw new fe('Reached the end of buffer when deserializing');
      }
      throw f;
    }
  };
}
class be {
  constructor(e) {
    (this.buf = e), (this.offset = 0);
  }
  readU8() {
    const e = this.buf.readUInt8(this.offset);
    return (this.offset += 1), e;
  }
  readU16() {
    const e = this.buf.readUInt16LE(this.offset);
    return (this.offset += 2), e;
  }
  readU32() {
    const e = this.buf.readUInt32LE(this.offset);
    return (this.offset += 4), e;
  }
  readU64() {
    const e = this.readBuffer(8);
    return new ze.default(e, 'le');
  }
  readU128() {
    const e = this.readBuffer(16);
    return new ze.default(e, 'le');
  }
  readU256() {
    const e = this.readBuffer(32);
    return new ze.default(e, 'le');
  }
  readU512() {
    const e = this.readBuffer(64);
    return new ze.default(e, 'le');
  }
  readBuffer(e) {
    if (this.offset + e > this.buf.length)
      throw new fe(`Expected buffer length ${e} isn't within bounds`);
    const r = this.buf.slice(this.offset, this.offset + e);
    return (this.offset += e), r;
  }
  readString() {
    const e = this.readU32(),
      r = this.readBuffer(e);
    try {
      return Gr.decode(r);
    } catch (o) {
      throw new fe(`Error decoding UTF-8 string: ${o}`);
    }
  }
  readFixedArray(e) {
    return new Uint8Array(this.readBuffer(e));
  }
  readArray(e) {
    const r = this.readU32(),
      o = Array();
    for (let i = 0; i < r; ++i) o.push(e());
    return o;
  }
}
Oe([He], be.prototype, 'readU8', null);
Oe([He], be.prototype, 'readU16', null);
Oe([He], be.prototype, 'readU32', null);
Oe([He], be.prototype, 'readU64', null);
Oe([He], be.prototype, 'readU128', null);
Oe([He], be.prototype, 'readU256', null);
Oe([He], be.prototype, 'readU512', null);
Oe([He], be.prototype, 'readString', null);
Oe([He], be.prototype, 'readFixedArray', null);
Oe([He], be.prototype, 'readArray', null);
ie.BinaryReader = be;
function hn(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Ge(t, e, r, o, i) {
  try {
    if (typeof o == 'string') i[`write${hn(o)}`](r);
    else if (o instanceof Array)
      if (typeof o[0] == 'number') {
        if (r.length !== o[0])
          throw new fe(`Expecting byte array of length ${o[0]}, but got ${r.length} bytes`);
        i.writeFixedArray(r);
      } else if (o.length === 2 && typeof o[1] == 'number') {
        if (r.length !== o[1])
          throw new fe(`Expecting byte array of length ${o[1]}, but got ${r.length} bytes`);
        for (let f = 0; f < o[1]; f++) Ge(t, null, r[f], o[0], i);
      } else
        i.writeArray(r, (f) => {
          Ge(t, e, f, o[0], i);
        });
    else if (o.kind !== void 0)
      switch (o.kind) {
        case 'option': {
          r == null ? i.writeU8(0) : (i.writeU8(1), Ge(t, e, r, o.type, i));
          break;
        }
        case 'map': {
          i.writeU32(r.size),
            r.forEach((f, h) => {
              Ge(t, e, h, o.key, i), Ge(t, e, f, o.value, i);
            });
          break;
        }
        default:
          throw new fe(`FieldType ${o} unrecognized`);
      }
    else dn(t, r, i);
  } catch (f) {
    throw (f instanceof fe && f.addToFieldPath(e), f);
  }
}
function dn(t, e, r) {
  if (typeof e.borshSerialize == 'function') {
    e.borshSerialize(r);
    return;
  }
  const o = t.get(e.constructor);
  if (!o) throw new fe(`Class ${e.constructor.name} is missing in schema`);
  if (o.kind === 'struct')
    o.fields.map(([i, f]) => {
      Ge(t, i, e[i], f, r);
    });
  else if (o.kind === 'enum') {
    const i = e[o.field];
    for (let f = 0; f < o.values.length; ++f) {
      const [h, m] = o.values[f];
      if (h === i) {
        r.writeU8(f), Ge(t, h, e[h], m, r);
        break;
      }
    }
  } else throw new fe(`Unexpected schema kind: ${o.kind} for ${e.constructor.name}`);
}
function Vr(t, e, r = ln) {
  const o = new r();
  return dn(t, e, o), o.toArray();
}
var pn = (ie.serialize = Vr);
function $e(t, e, r, o) {
  try {
    if (typeof r == 'string') return o[`read${hn(r)}`]();
    if (r instanceof Array) {
      if (typeof r[0] == 'number') return o.readFixedArray(r[0]);
      if (typeof r[1] == 'number') {
        const i = [];
        for (let f = 0; f < r[1]; f++) i.push($e(t, null, r[0], o));
        return i;
      } else return o.readArray(() => $e(t, e, r[0], o));
    }
    if (r.kind === 'option') return o.readU8() ? $e(t, e, r.type, o) : void 0;
    if (r.kind === 'map') {
      let i = new Map();
      const f = o.readU32();
      for (let h = 0; h < f; h++) {
        const m = $e(t, e, r.key, o),
          B = $e(t, e, r.value, o);
        i.set(m, B);
      }
      return i;
    }
    return Nt(t, r, o);
  } catch (i) {
    throw (i instanceof fe && i.addToFieldPath(e), i);
  }
}
function Nt(t, e, r) {
  if (typeof e.borshDeserialize == 'function') return e.borshDeserialize(r);
  const o = t.get(e);
  if (!o) throw new fe(`Class ${e.name} is missing in schema`);
  if (o.kind === 'struct') {
    const i = {};
    for (const [f, h] of t.get(e).fields) i[f] = $e(t, f, h, r);
    return new e(i);
  }
  if (o.kind === 'enum') {
    const i = r.readU8();
    if (i >= o.values.length) throw new fe(`Enum index: ${i} is out of range`);
    const [f, h] = o.values[i],
      m = $e(t, f, h, r);
    return new e({ [f]: m });
  }
  throw new fe(`Unexpected schema kind: ${o.kind} for ${e.constructor.name}`);
}
function qr(t, e, r, o = be) {
  const i = new o(r),
    f = Nt(t, e, i);
  if (i.offset < r.length)
    throw new fe(`Unexpected ${r.length - i.offset} bytes after deserialized data`);
  return f;
}
var bn = (ie.deserialize = qr);
function Kr(t, e, r, o = be) {
  const i = new o(r);
  return Nt(t, e, i);
}
un = ie.deserializeUnchecked = Kr;
const [xn, gn, wn] = [[], [], []],
  jr = BigInt(0),
  tt = BigInt(1),
  Xr = BigInt(2),
  Jr = BigInt(7),
  Yr = BigInt(256),
  Qr = BigInt(113);
for (let t = 0, e = tt, r = 1, o = 0; t < 24; t++) {
  ([r, o] = [o, (2 * r + 3 * o) % 5]),
    xn.push(2 * (5 * o + r)),
    gn.push((((t + 1) * (t + 2)) / 2) % 64);
  let i = jr;
  for (let f = 0; f < 7; f++)
    (e = ((e << tt) ^ ((e >> Jr) * Qr)) % Yr), e & Xr && (i ^= tt << ((tt << BigInt(f)) - tt));
  wn.push(i);
}
const [Zr, es] = C.split(wn, !0),
  $t = (t, e, r) => (r > 32 ? C.rotlBH(t, e, r) : C.rotlSH(t, e, r)),
  Wt = (t, e, r) => (r > 32 ? C.rotlBL(t, e, r) : C.rotlSL(t, e, r));
function ts(t, e = 24) {
  const r = new Uint32Array(10);
  for (let o = 24 - e; o < 24; o++) {
    for (let h = 0; h < 10; h++) r[h] = t[h] ^ t[h + 10] ^ t[h + 20] ^ t[h + 30] ^ t[h + 40];
    for (let h = 0; h < 10; h += 2) {
      const m = (h + 8) % 10,
        B = (h + 2) % 10,
        v = r[B],
        D = r[B + 1],
        L = $t(v, D, 1) ^ r[m],
        P = Wt(v, D, 1) ^ r[m + 1];
      for (let G = 0; G < 50; G += 10) (t[h + G] ^= L), (t[h + G + 1] ^= P);
    }
    let i = t[2],
      f = t[3];
    for (let h = 0; h < 24; h++) {
      const m = gn[h],
        B = $t(i, f, m),
        v = Wt(i, f, m),
        D = xn[h];
      (i = t[D]), (f = t[D + 1]), (t[D] = B), (t[D + 1] = v);
    }
    for (let h = 0; h < 50; h += 10) {
      for (let m = 0; m < 10; m++) r[m] = t[h + m];
      for (let m = 0; m < 10; m++) t[h + m] ^= ~r[(m + 2) % 10] & r[(m + 4) % 10];
    }
    (t[0] ^= Zr[o]), (t[1] ^= es[o]);
  }
  r.fill(0);
}
class bt extends Ct {
  constructor(e, r, o, i = !1, f = 24) {
    if (
      (super(),
      (this.blockLen = e),
      (this.suffix = r),
      (this.outputLen = o),
      (this.enableXOF = i),
      (this.rounds = f),
      (this.pos = 0),
      (this.posOut = 0),
      (this.finished = !1),
      (this.destroyed = !1),
      pe.number(o),
      0 >= this.blockLen || this.blockLen >= 200)
    )
      throw new Error('Sha3 supports only keccak-f1600 function');
    (this.state = new Uint8Array(200)), (this.state32 = tr(this.state));
  }
  keccak() {
    ts(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
  }
  update(e) {
    pe.exists(this);
    const { blockLen: r, state: o } = this;
    e = ot(e);
    const i = e.length;
    for (let f = 0; f < i; ) {
      const h = Math.min(r - this.pos, i - f);
      for (let m = 0; m < h; m++) o[this.pos++] ^= e[f++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: e, suffix: r, pos: o, blockLen: i } = this;
    (e[o] ^= r), r & 128 && o === i - 1 && this.keccak(), (e[i - 1] ^= 128), this.keccak();
  }
  writeInto(e) {
    pe.exists(this, !1), pe.bytes(e), this.finish();
    const r = this.state,
      { blockLen: o } = this;
    for (let i = 0, f = e.length; i < f; ) {
      this.posOut >= o && this.keccak();
      const h = Math.min(o - this.posOut, f - i);
      e.set(r.subarray(this.posOut, this.posOut + h), i), (this.posOut += h), (i += h);
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
    return this.writeInto(e);
  }
  xof(e) {
    return pe.number(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if ((pe.output(e, this), this.finished)) throw new Error('digest() was already called');
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    (this.destroyed = !0), this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: r, suffix: o, outputLen: i, rounds: f, enableXOF: h } = this;
    return (
      e || (e = new bt(r, o, i, h, f)),
      e.state32.set(this.state32),
      (e.pos = this.pos),
      (e.posOut = this.posOut),
      (e.finished = this.finished),
      (e.rounds = f),
      (e.suffix = o),
      (e.outputLen = i),
      (e.enableXOF = h),
      (e.destroyed = this.destroyed),
      e
    );
  }
}
const Me = (t, e, r) => We(() => new bt(e, t, r));
Me(6, 144, 224 / 8);
Me(6, 136, 256 / 8);
Me(6, 104, 384 / 8);
Me(6, 72, 512 / 8);
Me(1, 144, 224 / 8);
Me(1, 136, 256 / 8);
Me(1, 104, 384 / 8);
Me(1, 72, 512 / 8);
const mn = (t, e, r) => sr((o = {}) => new bt(e, t, o.dkLen === void 0 ? r : o.dkLen, !0));
mn(31, 168, 128 / 8);
mn(31, 136, 256 / 8);
class yn extends Ct {
  constructor(e, r) {
    super(), (this.finished = !1), (this.destroyed = !1), pe.hash(e);
    const o = ot(r);
    if (((this.iHash = e.create()), typeof this.iHash.update != 'function'))
      throw new TypeError('Expected instance of class which extends utils.Hash');
    (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
    const i = this.blockLen,
      f = new Uint8Array(i);
    f.set(o.length > i ? e.create().update(o).digest() : o);
    for (let h = 0; h < f.length; h++) f[h] ^= 54;
    this.iHash.update(f), (this.oHash = e.create());
    for (let h = 0; h < f.length; h++) f[h] ^= 106;
    this.oHash.update(f), f.fill(0);
  }
  update(e) {
    return pe.exists(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    pe.exists(this),
      pe.bytes(e, this.outputLen),
      (this.finished = !0),
      this.iHash.digestInto(e),
      this.oHash.update(e),
      this.oHash.digestInto(e),
      this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: r, iHash: o, finished: i, destroyed: f, blockLen: h, outputLen: m } = this;
    return (
      (e = e),
      (e.finished = i),
      (e.destroyed = f),
      (e.blockLen = h),
      (e.outputLen = m),
      (e.oHash = r._cloneInto(e.oHash)),
      (e.iHash = o._cloneInto(e.iHash)),
      e
    );
  }
  destroy() {
    (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
  }
}
const An = (t, e, r) => new yn(t, e).update(r).digest();
An.create = (t, e) => new yn(t, e);
It.sha512Sync = (...t) => Rr(It.concatBytes(...t));
It.randomPrivateKey;
function Vt(t) {
  try {
    return zn.fromHex(t, !0), !0;
  } catch {
    return !1;
  }
}
const ns = (t) =>
  Y.isBuffer(t)
    ? t
    : t instanceof Uint8Array
      ? Y.from(t.buffer, t.byteOffset, t.byteLength)
      : Y.from(t);
class rs {
  constructor(e) {
    Object.assign(this, e);
  }
  encode() {
    return Y.from(pn(lt, this));
  }
  static decode(e) {
    return bn(lt, this, e);
  }
  static decodeUnchecked(e) {
    return un(lt, this, e);
  }
}
const lt = new Map();
let Sn;
const ss = 32,
  kt = 32;
function is(t) {
  return t._bn !== void 0;
}
let qt = 1;
Sn = Symbol.toStringTag;
class T extends rs {
  constructor(e) {
    if ((super({}), (this._bn = void 0), is(e))) this._bn = e._bn;
    else {
      if (typeof e == 'string') {
        const r = Ft.decode(e);
        if (r.length != kt) throw new Error('Invalid public key input');
        this._bn = new Mt(r);
      } else this._bn = new Mt(e);
      if (this._bn.byteLength() > kt) throw new Error('Invalid public key input');
    }
  }
  static unique() {
    const e = new T(qt);
    return (qt += 1), new T(e.toBuffer());
  }
  equals(e) {
    return this._bn.eq(e._bn);
  }
  toBase58() {
    return Ft.encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }
  toBytes() {
    const e = this.toBuffer();
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  }
  toBuffer() {
    const e = this._bn.toArrayLike(Y);
    if (e.length === kt) return e;
    const r = Y.alloc(32);
    return e.copy(r, 32 - e.length), r;
  }
  get [Sn]() {
    return `PublicKey(${this.toString()})`;
  }
  toString() {
    return this.toBase58();
  }
  static async createWithSeed(e, r, o) {
    const i = Y.concat([e.toBuffer(), Y.from(r), o.toBuffer()]),
      f = Ht(i);
    return new T(f);
  }
  static createProgramAddressSync(e, r) {
    let o = Y.alloc(0);
    e.forEach(function (f) {
      if (f.length > ss) throw new TypeError('Max seed length exceeded');
      o = Y.concat([o, ns(f)]);
    }),
      (o = Y.concat([o, r.toBuffer(), Y.from('ProgramDerivedAddress')]));
    const i = Ht(o);
    if (Vt(i)) throw new Error('Invalid seeds, address must fall off the curve');
    return new T(i);
  }
  static async createProgramAddress(e, r) {
    return this.createProgramAddressSync(e, r);
  }
  static findProgramAddressSync(e, r) {
    let o = 255,
      i;
    for (; o != 0; ) {
      try {
        const f = e.concat(Y.from([o]));
        i = this.createProgramAddressSync(f, r);
      } catch (f) {
        if (f instanceof TypeError) throw f;
        o--;
        continue;
      }
      return [i, o];
    }
    throw new Error('Unable to find a viable program address nonce');
  }
  static async findProgramAddress(e, r) {
    return this.findProgramAddressSync(e, r);
  }
  static isOnCurve(e) {
    const r = new T(e);
    return Vt(r.toBytes());
  }
}
T.default = new T('11111111111111111111111111111111');
lt.set(T, { kind: 'struct', fields: [['_bn', 'u256']] });
new T('BPFLoader1111111111111111111111111111111111');
const os = 64,
  M = (t = 'publicKey') => Fe(32, t),
  Xe = (t = 'string') => {
    const e = H([U('length'), U('lengthPadding'), Fe(Je(U(), -8), 'chars')], t),
      r = e.decode.bind(e),
      o = e.encode.bind(e),
      i = e;
    return (
      (i.decode = (f, h) => r(f, h).chars.toString()),
      (i.encode = (f, h, m) => {
        const B = { chars: Y.from(f, 'utf8') };
        return o(B, h, m);
      }),
      (i.alloc = (f) => U().span + U().span + Y.from(f, 'utf8').length),
      i
    );
  },
  cs = (t = 'authorized') => H([M('staker'), M('withdrawer')], t),
  as = (t = 'lockup') => H([ye('unixTimestamp'), ye('epoch'), M('custodian')], t),
  us = (t = 'voteInit') =>
    H([M('nodePubkey'), M('authorizedVoter'), M('authorizedWithdrawer'), Q('commission')], t),
  fs = (t = 'voteAuthorizeWithSeedArgs') =>
    H(
      [
        U('voteAuthorizationType'),
        M('currentAuthorityDerivedKeyOwnerPubkey'),
        Xe('currentAuthorityDerivedKeySeed'),
        M('newAuthorized'),
      ],
      t
    );
let Kt;
(function (t) {
  (t[(t.BLOCKHEIGHT_EXCEEDED = 0)] = 'BLOCKHEIGHT_EXCEEDED'),
    (t[(t.PROCESSED = 1)] = 'PROCESSED'),
    (t[(t.TIMED_OUT = 2)] = 'TIMED_OUT'),
    (t[(t.NONCE_INVALID = 3)] = 'NONCE_INVALID');
})(Kt || (Kt = {}));
Y.alloc(os).fill(0);
new T('SysvarC1ock11111111111111111111111111111111');
new T('SysvarEpochSchedu1e111111111111111111111111');
new T('Sysvar1nstructions1111111111111111111111111');
new T('SysvarRecentB1ockHashes11111111111111111111');
new T('SysvarRent111111111111111111111111111111111');
new T('SysvarRewards111111111111111111111111111111');
new T('SysvarS1otHashes111111111111111111111111111');
new T('SysvarS1otHistory11111111111111111111111111');
new T('SysvarStakeHistory1111111111111111111111111');
const ls = ae('lamportsPerSignature'),
  hs = H([U('version'), U('state'), M('authorizedPubkey'), M('nonce'), H([ls], 'feeCalculator')]);
hs.span;
const ds = (t) => {
    const e = t.decode.bind(t),
      r = t.encode.bind(t);
    return { decode: e, encode: r };
  },
  ps = (t) => (e) => {
    const r = Fe(t, e),
      { encode: o, decode: i } = ds(r),
      f = r;
    return (
      (f.decode = (h, m) => {
        const B = i(h, m);
        return Jt(Y.from(B));
      }),
      (f.encode = (h, m, B) => {
        const v = Yt(h, t);
        return o(v, m, B);
      }),
      f
    );
  },
  Ye = ps(8);
Object.freeze({
  Create: { index: 0, layout: H([U('instruction'), ye('lamports'), ye('space'), M('programId')]) },
  Assign: { index: 1, layout: H([U('instruction'), M('programId')]) },
  Transfer: { index: 2, layout: H([U('instruction'), Ye('lamports')]) },
  CreateWithSeed: {
    index: 3,
    layout: H([
      U('instruction'),
      M('base'),
      Xe('seed'),
      ye('lamports'),
      ye('space'),
      M('programId'),
    ]),
  },
  AdvanceNonceAccount: { index: 4, layout: H([U('instruction')]) },
  WithdrawNonceAccount: { index: 5, layout: H([U('instruction'), ye('lamports')]) },
  InitializeNonceAccount: { index: 6, layout: H([U('instruction'), M('authorized')]) },
  AuthorizeNonceAccount: { index: 7, layout: H([U('instruction'), M('authorized')]) },
  Allocate: { index: 8, layout: H([U('instruction'), ye('space')]) },
  AllocateWithSeed: {
    index: 9,
    layout: H([U('instruction'), M('base'), Xe('seed'), ye('space'), M('programId')]),
  },
  AssignWithSeed: {
    index: 10,
    layout: H([U('instruction'), M('base'), Xe('seed'), M('programId')]),
  },
  TransferWithSeed: {
    index: 11,
    layout: H([U('instruction'), Ye('lamports'), Xe('seed'), M('programId')]),
  },
  UpgradeNonceAccount: { index: 12, layout: H([U('instruction')]) },
});
new T('11111111111111111111111111111111');
new T('BPFLoader2111111111111111111111111111111111');
H([
  U('typeIndex'),
  Ye('deactivationSlot'),
  ae('lastExtendedSlot'),
  Q('lastExtendedStartIndex'),
  Q(),
  je(M(), Je(Q(), -1), 'authority'),
]);
const ee = nt(Rt(T), E(), (t) => new T(t)),
  En = vt([E(), K('base64')]),
  Dt = nt(Rt(Y), En, (t) => Y.from(t[0], 'base64'));
function Bn(t) {
  return he([
    A({ jsonrpc: K('2.0'), id: E(), result: t }),
    A({ jsonrpc: K('2.0'), id: E(), error: A({ code: rt(), message: E(), data: R(Pn()) }) }),
  ]);
}
const bs = Bn(rt());
function V(t) {
  return nt(Bn(t), bs, (e) => ('error' in e ? e : { ...e, result: ht(e.result, t) }));
}
function Be(t) {
  return V(A({ context: A({ slot: x() }), value: t }));
}
function xt(t) {
  return A({ context: A({ slot: x() }), value: t });
}
const xs = A({ foundation: x(), foundationTerm: x(), initial: x(), taper: x(), terminal: x() });
V(
  I(k(A({ epoch: x(), effectiveSlot: x(), amount: x(), postBalance: x(), commission: R(k(x())) })))
);
const gs = A({ total: x(), validator: x(), foundation: x(), epoch: x() }),
  ws = A({
    epoch: x(),
    slotIndex: x(),
    slotsInEpoch: x(),
    absoluteSlot: x(),
    blockHeight: R(x()),
    transactionCount: R(x()),
  }),
  ms = A({
    slotsPerEpoch: x(),
    leaderScheduleSlotOffset: x(),
    warmup: ve(),
    firstNormalEpoch: x(),
    firstNormalSlot: x(),
  }),
  ys = Qt(E(), I(x())),
  Ve = k(he([A({}), E()])),
  As = A({ err: Ve }),
  Ss = K('receivedSignature');
A({ 'solana-core': E(), 'feature-set': R(x()) });
Be(
  A({
    err: k(he([A({}), E()])),
    logs: k(I(E())),
    accounts: R(
      k(I(k(A({ executable: ve(), owner: E(), lamports: x(), data: I(E()), rentEpoch: R(x()) }))))
    ),
    unitsConsumed: R(x()),
    returnData: R(k(A({ programId: E(), data: vt([E(), K('base64')]) }))),
  })
);
Be(A({ byIdentity: Qt(E(), I(x())), range: A({ firstSlot: x(), lastSlot: x() }) }));
V(xs);
V(gs);
V(ws);
V(ms);
V(ys);
V(x());
Be(A({ total: x(), circulating: x(), nonCirculating: x(), nonCirculatingAccounts: I(ee) }));
const Es = A({ amount: E(), uiAmount: k(x()), decimals: x(), uiAmountString: R(E()) });
Be(I(A({ address: ee, amount: E(), uiAmount: k(x()), decimals: x(), uiAmountString: R(E()) })));
Be(
  I(
    A({
      pubkey: ee,
      account: A({ executable: ve(), owner: ee, lamports: x(), data: Dt, rentEpoch: x() }),
    })
  )
);
const Ut = A({ program: E(), parsed: rt(), space: x() });
Be(
  I(
    A({
      pubkey: ee,
      account: A({ executable: ve(), owner: ee, lamports: x(), data: Ut, rentEpoch: x() }),
    })
  )
);
Be(I(A({ lamports: x(), address: ee })));
const Tt = A({ executable: ve(), owner: ee, lamports: x(), data: Dt, rentEpoch: x() });
A({ pubkey: ee, account: Tt });
const Bs = nt(he([Rt(Y), Ut]), he([En, Ut]), (t) => (Array.isArray(t) ? ht(t, Dt) : t)),
  ks = A({ executable: ve(), owner: ee, lamports: x(), data: Bs, rentEpoch: x() });
A({ pubkey: ee, account: ks });
A({
  state: he([K('active'), K('inactive'), K('activating'), K('deactivating')]),
  active: x(),
  inactive: x(),
});
V(I(A({ signature: E(), slot: x(), err: Ve, memo: k(E()), blockTime: R(k(x())) })));
V(I(A({ signature: E(), slot: x(), err: Ve, memo: k(E()), blockTime: R(k(x())) })));
A({ subscription: x(), result: xt(Tt) });
const Is = A({ pubkey: ee, account: Tt });
A({ subscription: x(), result: xt(Is) });
const Ls = A({ parent: x(), slot: x(), root: x() });
A({ subscription: x(), result: Ls });
const _s = he([
  A({
    type: he([K('firstShredReceived'), K('completed'), K('optimisticConfirmation'), K('root')]),
    slot: x(),
    timestamp: x(),
  }),
  A({ type: K('createdBank'), parent: x(), slot: x(), timestamp: x() }),
  A({
    type: K('frozen'),
    slot: x(),
    timestamp: x(),
    stats: A({
      numTransactionEntries: x(),
      numSuccessfulTransactions: x(),
      numFailedTransactions: x(),
      maxTransactionsPerEntry: x(),
    }),
  }),
  A({ type: K('dead'), slot: x(), timestamp: x(), err: E() }),
]);
A({ subscription: x(), result: _s });
A({ subscription: x(), result: xt(he([As, Ss])) });
A({ subscription: x(), result: x() });
A({ pubkey: E(), gossip: k(E()), tpu: k(E()), rpc: k(E()), version: k(E()) });
const jt = A({
  votePubkey: E(),
  nodePubkey: E(),
  activatedStake: x(),
  epochVoteAccount: ve(),
  epochCredits: I(vt([x(), x(), x()])),
  commission: x(),
  lastVote: x(),
  rootSlot: k(x()),
});
V(A({ current: I(jt), delinquent: I(jt) }));
const Os = he([K('processed'), K('confirmed'), K('finalized')]),
  Hs = A({ slot: x(), confirmations: k(x()), err: Ve, confirmationStatus: R(Os) });
Be(I(k(Hs)));
V(x());
const kn = A({ accountKey: ee, writableIndexes: I(x()), readonlyIndexes: I(x()) }),
  Pt = A({
    signatures: I(E()),
    message: A({
      accountKeys: I(E()),
      header: A({
        numRequiredSignatures: x(),
        numReadonlySignedAccounts: x(),
        numReadonlyUnsignedAccounts: x(),
      }),
      instructions: I(A({ accounts: I(x()), data: E(), programIdIndex: x() })),
      recentBlockhash: E(),
      addressTableLookups: R(I(kn)),
    }),
  }),
  In = A({
    pubkey: ee,
    signer: ve(),
    writable: ve(),
    source: R(he([K('transaction'), K('lookupTable')])),
  }),
  Ln = A({ accountKeys: I(In), signatures: I(E()) }),
  _n = A({ parsed: rt(), program: E(), programId: ee }),
  On = A({ accounts: I(ee), data: E(), programId: ee }),
  Us = he([On, _n]),
  Rs = he([
    A({ parsed: rt(), program: E(), programId: E() }),
    A({ accounts: I(E()), data: E(), programId: E() }),
  ]),
  Hn = nt(Us, Rs, (t) => ('accounts' in t ? ht(t, On) : ht(t, _n))),
  Un = A({
    signatures: I(E()),
    message: A({
      accountKeys: I(In),
      instructions: I(Hn),
      recentBlockhash: E(),
      addressTableLookups: R(k(I(kn))),
    }),
  }),
  dt = A({ accountIndex: x(), mint: E(), owner: R(E()), uiTokenAmount: Es }),
  Rn = A({ writable: I(ee), readonly: I(ee) }),
  gt = A({
    err: Ve,
    fee: x(),
    innerInstructions: R(
      k(
        I(
          A({
            index: x(),
            instructions: I(A({ accounts: I(x()), data: E(), programIdIndex: x() })),
          })
        )
      )
    ),
    preBalances: I(x()),
    postBalances: I(x()),
    logMessages: R(k(I(E()))),
    preTokenBalances: R(k(I(dt))),
    postTokenBalances: R(k(I(dt))),
    loadedAddresses: R(Rn),
    computeUnitsConsumed: R(x()),
  }),
  zt = A({
    err: Ve,
    fee: x(),
    innerInstructions: R(k(I(A({ index: x(), instructions: I(Hn) })))),
    preBalances: I(x()),
    postBalances: I(x()),
    logMessages: R(k(I(E()))),
    preTokenBalances: R(k(I(dt))),
    postTokenBalances: R(k(I(dt))),
    loadedAddresses: R(Rn),
    computeUnitsConsumed: R(x()),
  }),
  Ze = he([K(0), K('legacy')]),
  qe = A({
    pubkey: E(),
    lamports: x(),
    postBalance: k(x()),
    rewardType: k(E()),
    commission: R(k(x())),
  });
V(
  k(
    A({
      blockhash: E(),
      previousBlockhash: E(),
      parentSlot: x(),
      transactions: I(A({ transaction: Pt, meta: k(gt), version: R(Ze) })),
      rewards: R(I(qe)),
      blockTime: k(x()),
      blockHeight: k(x()),
    })
  )
);
V(
  k(
    A({
      blockhash: E(),
      previousBlockhash: E(),
      parentSlot: x(),
      rewards: R(I(qe)),
      blockTime: k(x()),
      blockHeight: k(x()),
    })
  )
);
V(
  k(
    A({
      blockhash: E(),
      previousBlockhash: E(),
      parentSlot: x(),
      transactions: I(A({ transaction: Ln, meta: k(gt), version: R(Ze) })),
      rewards: R(I(qe)),
      blockTime: k(x()),
      blockHeight: k(x()),
    })
  )
);
V(
  k(
    A({
      blockhash: E(),
      previousBlockhash: E(),
      parentSlot: x(),
      transactions: I(A({ transaction: Un, meta: k(zt), version: R(Ze) })),
      rewards: R(I(qe)),
      blockTime: k(x()),
      blockHeight: k(x()),
    })
  )
);
V(
  k(
    A({
      blockhash: E(),
      previousBlockhash: E(),
      parentSlot: x(),
      transactions: I(A({ transaction: Ln, meta: k(zt), version: R(Ze) })),
      rewards: R(I(qe)),
      blockTime: k(x()),
      blockHeight: k(x()),
    })
  )
);
V(
  k(
    A({
      blockhash: E(),
      previousBlockhash: E(),
      parentSlot: x(),
      rewards: R(I(qe)),
      blockTime: k(x()),
      blockHeight: k(x()),
    })
  )
);
V(
  k(
    A({
      blockhash: E(),
      previousBlockhash: E(),
      parentSlot: x(),
      transactions: I(A({ transaction: Pt, meta: k(gt) })),
      rewards: R(I(qe)),
      blockTime: k(x()),
    })
  )
);
V(
  k(
    A({
      blockhash: E(),
      previousBlockhash: E(),
      parentSlot: x(),
      signatures: I(E()),
      blockTime: k(x()),
    })
  )
);
V(k(A({ slot: x(), meta: gt, blockTime: R(k(x())), transaction: Pt, version: R(Ze) })));
V(k(A({ slot: x(), transaction: Un, meta: k(zt), blockTime: R(k(x())), version: R(Ze) })));
Be(A({ blockhash: E(), feeCalculator: A({ lamportsPerSignature: x() }) }));
Be(A({ blockhash: E(), lastValidBlockHeight: x() }));
const vs = A({ slot: x(), numTransactions: x(), numSlots: x(), samplePeriodSecs: x() });
V(I(vs));
Be(k(A({ feeCalculator: A({ lamportsPerSignature: x() }) })));
V(E());
V(E());
const Cs = A({ err: Ve, logs: I(E()), signature: E() });
A({ result: xt(Cs), subscription: x() });
Object.freeze({
  CreateLookupTable: { index: 0, layout: H([U('instruction'), Ye('recentSlot'), Q('bumpSeed')]) },
  FreezeLookupTable: { index: 1, layout: H([U('instruction')]) },
  ExtendLookupTable: {
    index: 2,
    layout: H([U('instruction'), Ye(), je(M(), Je(U(), -8), 'addresses')]),
  },
  DeactivateLookupTable: { index: 3, layout: H([U('instruction')]) },
  CloseLookupTable: { index: 4, layout: H([U('instruction')]) },
});
new T('AddressLookupTab1e1111111111111111111111111');
Object.freeze({
  RequestUnits: { index: 0, layout: H([Q('instruction'), U('units'), U('additionalFee')]) },
  RequestHeapFrame: { index: 1, layout: H([Q('instruction'), U('bytes')]) },
  SetComputeUnitLimit: { index: 2, layout: H([Q('instruction'), U('units')]) },
  SetComputeUnitPrice: { index: 3, layout: H([Q('instruction'), Ye('microLamports')]) },
});
new T('ComputeBudget111111111111111111111111111111');
H([
  Q('numSignatures'),
  Q('padding'),
  Ee('signatureOffset'),
  Ee('signatureInstructionIndex'),
  Ee('publicKeyOffset'),
  Ee('publicKeyInstructionIndex'),
  Ee('messageDataOffset'),
  Ee('messageDataSize'),
  Ee('messageInstructionIndex'),
]);
new T('Ed25519SigVerify111111111111111111111111111');
Zt.hmacSha256Sync = (t, ...e) => {
  const r = An.create(Ht, t);
  return e.forEach((o) => r.update(o)), r.digest();
};
Zt.isValidPrivateKey;
H([
  Q('numSignatures'),
  Ee('signatureOffset'),
  Q('signatureInstructionIndex'),
  Ee('ethAddressOffset'),
  Q('ethAddressInstructionIndex'),
  Ee('messageDataOffset'),
  Ee('messageDataSize'),
  Q('messageInstructionIndex'),
  Fe(20, 'ethAddress'),
  Fe(64, 'signature'),
  Q('recoveryId'),
]);
new T('KeccakSecp256k11111111111111111111111111111');
new T('StakeConfig11111111111111111111111111111111');
class Xt {
  constructor(e, r, o) {
    (this.unixTimestamp = void 0),
      (this.epoch = void 0),
      (this.custodian = void 0),
      (this.unixTimestamp = e),
      (this.epoch = r),
      (this.custodian = o);
  }
}
Xt.default = new Xt(0, 0, T.default);
Object.freeze({
  Initialize: { index: 0, layout: H([U('instruction'), cs(), as()]) },
  Authorize: {
    index: 1,
    layout: H([U('instruction'), M('newAuthorized'), U('stakeAuthorizationType')]),
  },
  Delegate: { index: 2, layout: H([U('instruction')]) },
  Split: { index: 3, layout: H([U('instruction'), ye('lamports')]) },
  Withdraw: { index: 4, layout: H([U('instruction'), ye('lamports')]) },
  Deactivate: { index: 5, layout: H([U('instruction')]) },
  Merge: { index: 7, layout: H([U('instruction')]) },
  AuthorizeWithSeed: {
    index: 8,
    layout: H([
      U('instruction'),
      M('newAuthorized'),
      U('stakeAuthorizationType'),
      Xe('authoritySeed'),
      M('authorityOwner'),
    ]),
  },
});
new T('Stake11111111111111111111111111111111111111');
Object.freeze({
  InitializeAccount: { index: 0, layout: H([U('instruction'), us()]) },
  Authorize: {
    index: 1,
    layout: H([U('instruction'), M('newAuthorized'), U('voteAuthorizationType')]),
  },
  Withdraw: { index: 3, layout: H([U('instruction'), ye('lamports')]) },
  AuthorizeWithSeed: { index: 10, layout: H([U('instruction'), fs()]) },
});
new T('Vote111111111111111111111111111111111111111');
new T('Va1idator1nfo111111111111111111111111111111');
A({ name: E(), website: R(E()), details: R(E()), keybaseUsername: R(E()) });
new T('Vote111111111111111111111111111111111111111');
H([
  M('nodePubkey'),
  M('authorizedWithdrawer'),
  Q('commission'),
  ae(),
  je(H([ae('slot'), U('confirmationCount')]), Je(U(), -8), 'votes'),
  Q('rootSlotValid'),
  ae('rootSlot'),
  ae(),
  je(H([ae('epoch'), M('authorizedVoter')]), Je(U(), -8), 'authorizedVoters'),
  H(
    [
      je(
        H([M('authorizedPubkey'), ae('epochOfLastAuthorizedSwitch'), ae('targetEpoch')]),
        32,
        'buf'
      ),
      ae('idx'),
      Q('isEmpty'),
    ],
    'priorVoters'
  ),
  ae(),
  je(H([ae('epoch'), ae('credits'), ae('prevCredits')]), Je(U(), -8), 'epochCredits'),
  H([ae('slot'), ae('timestamp')], 'lastTimestamp'),
]);
const Ns = (t) => {
    const e = Fe(32, t),
      { encode: r, decode: o } = Qe(e),
      i = e;
    return (
      (i.decode = (f, h) => {
        const m = o(f, h);
        return new T(m);
      }),
      (i.encode = (f, h, m) => {
        const B = f.toBuffer();
        return r(B, h, m);
      }),
      i
    );
  },
  Ds = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        WAD: Lt,
        bigInt: st,
        bigIntBE: it,
        bool: Jn,
        decimal: Xn,
        encodeDecode: Qe,
        publicKey: Ns,
        u128: nn,
        u128be: Wn,
        u192: Vn,
        u192be: qn,
        u256: Kn,
        u256be: jn,
        u64: Gn,
        u64be: $n,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  zs = Fn(Ds);
export { tn as B, Jn as b, Ns as p, zs as r, Gn as u };
