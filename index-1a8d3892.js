import { U as ee, c as oe } from './if-defined-5ea4ccf2.js';
import { a4 as P, a as Q, i as ue, h as ce, d as fe, x as de } from './index-6823ac84.js';
import './index-f6d75cf3.js';
(function () {
  try {
    var t =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      u = new t.Error().stack;
    u &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[u] = '1d69982f-aab3-448d-b4b4-9d9840ecc3df'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-1d69982f-aab3-448d-b4b4-9d9840ecc3df'));
  } catch {}
})();
var re = { exports: {} };
(function (t, u) {
  (function (c, f) {
    t.exports = f();
  })(P, function () {
    var c = 1e3,
      f = 6e4,
      g = 36e5,
      m = 'millisecond',
      p = 'second',
      v = 'minute',
      T = 'hour',
      l = 'day',
      M = 'week',
      y = 'month',
      E = 'quarter',
      I = 'year',
      L = 'date',
      N = 'Invalid Date',
      W =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      B = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      C = {
        name: 'en',
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
        ordinal: function (s) {
          var r = ['th', 'st', 'nd', 'rd'],
            e = s % 100;
          return '[' + s + (r[(e - 20) % 10] || r[e] || r[0]) + ']';
        },
      },
      J = function (s, r, e) {
        var i = String(s);
        return !i || i.length >= r ? s : '' + Array(r + 1 - i.length).join(e) + s;
      },
      Y = {
        s: J,
        z: function (s) {
          var r = -s.utcOffset(),
            e = Math.abs(r),
            i = Math.floor(e / 60),
            n = e % 60;
          return (r <= 0 ? '+' : '-') + J(i, 2, '0') + ':' + J(n, 2, '0');
        },
        m: function s(r, e) {
          if (r.date() < e.date()) return -s(e, r);
          var i = 12 * (e.year() - r.year()) + (e.month() - r.month()),
            n = r.clone().add(i, y),
            a = e - n < 0,
            o = r.clone().add(i + (a ? -1 : 1), y);
          return +(-(i + (e - n) / (a ? n - o : o - n)) || 0);
        },
        a: function (s) {
          return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
        },
        p: function (s) {
          return (
            { M: y, y: I, w: M, d: l, D: L, h: T, m: v, s: p, ms: m, Q: E }[s] ||
            String(s || '')
              .toLowerCase()
              .replace(/s$/, '')
          );
        },
        u: function (s) {
          return s === void 0;
        },
      },
      x = 'en',
      _ = {};
    _[x] = C;
    var U = '$isDayjsObject',
      k = function (s) {
        return s instanceof z || !(!s || !s[U]);
      },
      Z = function s(r, e, i) {
        var n;
        if (!r) return x;
        if (typeof r == 'string') {
          var a = r.toLowerCase();
          _[a] && (n = a), e && ((_[a] = e), (n = a));
          var o = r.split('-');
          if (!n && o.length > 1) return s(o[0]);
        } else {
          var h = r.name;
          (_[h] = r), (n = h);
        }
        return !i && n && (x = n), n || (!i && x);
      },
      b = function (s, r) {
        if (k(s)) return s.clone();
        var e = typeof r == 'object' ? r : {};
        return (e.date = s), (e.args = arguments), new z(e);
      },
      d = Y;
    (d.l = Z),
      (d.i = k),
      (d.w = function (s, r) {
        return b(s, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
      });
    var z = (function () {
        function s(e) {
          (this.$L = Z(e.locale, null, !0)),
            this.parse(e),
            (this.$x = this.$x || e.x || {}),
            (this[U] = !0);
        }
        var r = s.prototype;
        return (
          (r.parse = function (e) {
            (this.$d = (function (i) {
              var n = i.date,
                a = i.utc;
              if (n === null) return new Date(NaN);
              if (d.u(n)) return new Date();
              if (n instanceof Date) return new Date(n);
              if (typeof n == 'string' && !/Z$/i.test(n)) {
                var o = n.match(W);
                if (o) {
                  var h = o[2] - 1 || 0,
                    $ = (o[7] || '0').substring(0, 3);
                  return a
                    ? new Date(Date.UTC(o[1], h, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, $))
                    : new Date(o[1], h, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, $);
                }
              }
              return new Date(n);
            })(e)),
              this.init();
          }),
          (r.init = function () {
            var e = this.$d;
            (this.$y = e.getFullYear()),
              (this.$M = e.getMonth()),
              (this.$D = e.getDate()),
              (this.$W = e.getDay()),
              (this.$H = e.getHours()),
              (this.$m = e.getMinutes()),
              (this.$s = e.getSeconds()),
              (this.$ms = e.getMilliseconds());
          }),
          (r.$utils = function () {
            return d;
          }),
          (r.isValid = function () {
            return this.$d.toString() !== N;
          }),
          (r.isSame = function (e, i) {
            var n = b(e);
            return this.startOf(i) <= n && n <= this.endOf(i);
          }),
          (r.isAfter = function (e, i) {
            return b(e) < this.startOf(i);
          }),
          (r.isBefore = function (e, i) {
            return this.endOf(i) < b(e);
          }),
          (r.$g = function (e, i, n) {
            return d.u(e) ? this[i] : this.set(n, e);
          }),
          (r.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (r.valueOf = function () {
            return this.$d.getTime();
          }),
          (r.startOf = function (e, i) {
            var n = this,
              a = !!d.u(i) || i,
              o = d.p(e),
              h = function (A, S) {
                var F = d.w(n.$u ? Date.UTC(n.$y, S, A) : new Date(n.$y, S, A), n);
                return a ? F : F.endOf(l);
              },
              $ = function (A, S) {
                return d.w(
                  n
                    .toDate()
                    [A].apply(n.toDate('s'), (a ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(S)),
                  n
                );
              },
              w = this.$W,
              D = this.$M,
              O = this.$D,
              H = 'set' + (this.$u ? 'UTC' : '');
            switch (o) {
              case I:
                return a ? h(1, 0) : h(31, 11);
              case y:
                return a ? h(1, D) : h(0, D + 1);
              case M:
                var j = this.$locale().weekStart || 0,
                  V = (w < j ? w + 7 : w) - j;
                return h(a ? O - V : O + (6 - V), D);
              case l:
              case L:
                return $(H + 'Hours', 0);
              case T:
                return $(H + 'Minutes', 1);
              case v:
                return $(H + 'Seconds', 2);
              case p:
                return $(H + 'Milliseconds', 3);
              default:
                return this.clone();
            }
          }),
          (r.endOf = function (e) {
            return this.startOf(e, !1);
          }),
          (r.$set = function (e, i) {
            var n,
              a = d.p(e),
              o = 'set' + (this.$u ? 'UTC' : ''),
              h = ((n = {}),
              (n[l] = o + 'Date'),
              (n[L] = o + 'Date'),
              (n[y] = o + 'Month'),
              (n[I] = o + 'FullYear'),
              (n[T] = o + 'Hours'),
              (n[v] = o + 'Minutes'),
              (n[p] = o + 'Seconds'),
              (n[m] = o + 'Milliseconds'),
              n)[a],
              $ = a === l ? this.$D + (i - this.$W) : i;
            if (a === y || a === I) {
              var w = this.clone().set(L, 1);
              w.$d[h]($), w.init(), (this.$d = w.set(L, Math.min(this.$D, w.daysInMonth())).$d);
            } else h && this.$d[h]($);
            return this.init(), this;
          }),
          (r.set = function (e, i) {
            return this.clone().$set(e, i);
          }),
          (r.get = function (e) {
            return this[d.p(e)]();
          }),
          (r.add = function (e, i) {
            var n,
              a = this;
            e = Number(e);
            var o = d.p(i),
              h = function (D) {
                var O = b(a);
                return d.w(O.date(O.date() + Math.round(D * e)), a);
              };
            if (o === y) return this.set(y, this.$M + e);
            if (o === I) return this.set(I, this.$y + e);
            if (o === l) return h(1);
            if (o === M) return h(7);
            var $ = ((n = {}), (n[v] = f), (n[T] = g), (n[p] = c), n)[o] || 1,
              w = this.$d.getTime() + e * $;
            return d.w(w, this);
          }),
          (r.subtract = function (e, i) {
            return this.add(-1 * e, i);
          }),
          (r.format = function (e) {
            var i = this,
              n = this.$locale();
            if (!this.isValid()) return n.invalidDate || N;
            var a = e || 'YYYY-MM-DDTHH:mm:ssZ',
              o = d.z(this),
              h = this.$H,
              $ = this.$m,
              w = this.$M,
              D = n.weekdays,
              O = n.months,
              H = n.meridiem,
              j = function (S, F, q, G) {
                return (S && (S[F] || S(i, a))) || q[F].slice(0, G);
              },
              V = function (S) {
                return d.s(h % 12 || 12, S, '0');
              },
              A =
                H ||
                function (S, F, q) {
                  var G = S < 12 ? 'AM' : 'PM';
                  return q ? G.toLowerCase() : G;
                };
            return a.replace(B, function (S, F) {
              return (
                F ||
                (function (q) {
                  switch (q) {
                    case 'YY':
                      return String(i.$y).slice(-2);
                    case 'YYYY':
                      return d.s(i.$y, 4, '0');
                    case 'M':
                      return w + 1;
                    case 'MM':
                      return d.s(w + 1, 2, '0');
                    case 'MMM':
                      return j(n.monthsShort, w, O, 3);
                    case 'MMMM':
                      return j(O, w);
                    case 'D':
                      return i.$D;
                    case 'DD':
                      return d.s(i.$D, 2, '0');
                    case 'd':
                      return String(i.$W);
                    case 'dd':
                      return j(n.weekdaysMin, i.$W, D, 2);
                    case 'ddd':
                      return j(n.weekdaysShort, i.$W, D, 3);
                    case 'dddd':
                      return D[i.$W];
                    case 'H':
                      return String(h);
                    case 'HH':
                      return d.s(h, 2, '0');
                    case 'h':
                      return V(1);
                    case 'hh':
                      return V(2);
                    case 'a':
                      return A(h, $, !0);
                    case 'A':
                      return A(h, $, !1);
                    case 'm':
                      return String($);
                    case 'mm':
                      return d.s($, 2, '0');
                    case 's':
                      return String(i.$s);
                    case 'ss':
                      return d.s(i.$s, 2, '0');
                    case 'SSS':
                      return d.s(i.$ms, 3, '0');
                    case 'Z':
                      return o;
                  }
                  return null;
                })(S) ||
                o.replace(':', '')
              );
            });
          }),
          (r.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (r.diff = function (e, i, n) {
            var a,
              o = this,
              h = d.p(i),
              $ = b(e),
              w = ($.utcOffset() - this.utcOffset()) * f,
              D = this - $,
              O = function () {
                return d.m(o, $);
              };
            switch (h) {
              case I:
                a = O() / 12;
                break;
              case y:
                a = O();
                break;
              case E:
                a = O() / 3;
                break;
              case M:
                a = (D - w) / 6048e5;
                break;
              case l:
                a = (D - w) / 864e5;
                break;
              case T:
                a = D / g;
                break;
              case v:
                a = D / f;
                break;
              case p:
                a = D / c;
                break;
              default:
                a = D;
            }
            return n ? a : d.a(a);
          }),
          (r.daysInMonth = function () {
            return this.endOf(y).$D;
          }),
          (r.$locale = function () {
            return _[this.$L];
          }),
          (r.locale = function (e, i) {
            if (!e) return this.$L;
            var n = this.clone(),
              a = Z(e, i, !0);
            return a && (n.$L = a), n;
          }),
          (r.clone = function () {
            return d.w(this.$d, this);
          }),
          (r.toDate = function () {
            return new Date(this.valueOf());
          }),
          (r.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (r.toISOString = function () {
            return this.$d.toISOString();
          }),
          (r.toString = function () {
            return this.$d.toUTCString();
          }),
          s
        );
      })(),
      K = z.prototype;
    return (
      (b.prototype = K),
      [
        ['$ms', m],
        ['$s', p],
        ['$m', v],
        ['$H', T],
        ['$W', l],
        ['$M', y],
        ['$y', I],
        ['$D', L],
      ].forEach(function (s) {
        K[s[1]] = function (r) {
          return this.$g(r, s[0], s[1]);
        };
      }),
      (b.extend = function (s, r) {
        return s.$i || (s(r, z, b), (s.$i = !0)), b;
      }),
      (b.locale = Z),
      (b.isDayjs = k),
      (b.unix = function (s) {
        return b(1e3 * s);
      }),
      (b.en = _[x]),
      (b.Ls = _),
      (b.p = {}),
      b
    );
  });
})(re);
var le = re.exports;
const R = Q(le);
var ie = { exports: {} };
(function (t, u) {
  (function (c, f) {
    t.exports = f();
  })(P, function () {
    return {
      name: 'en',
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      months:
        'January_February_March_April_May_June_July_August_September_October_November_December'.split(
          '_'
        ),
      ordinal: function (c) {
        var f = ['th', 'st', 'nd', 'rd'],
          g = c % 100;
        return '[' + c + (f[(g - 20) % 10] || f[g] || f[0]) + ']';
      },
    };
  });
})(ie);
var he = ie.exports;
const me = Q(he);
var se = { exports: {} };
(function (t, u) {
  (function (c, f) {
    t.exports = f();
  })(P, function () {
    return function (c, f, g) {
      c = c || {};
      var m = f.prototype,
        p = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        };
      function v(l, M, y, E) {
        return m.fromToBase(l, M, y, E);
      }
      (g.en.relativeTime = p),
        (m.fromToBase = function (l, M, y, E, I) {
          for (
            var L,
              N,
              W,
              B = y.$locale().relativeTime || p,
              C = c.thresholds || [
                { l: 's', r: 44, d: 'second' },
                { l: 'm', r: 89 },
                { l: 'mm', r: 44, d: 'minute' },
                { l: 'h', r: 89 },
                { l: 'hh', r: 21, d: 'hour' },
                { l: 'd', r: 35 },
                { l: 'dd', r: 25, d: 'day' },
                { l: 'M', r: 45 },
                { l: 'MM', r: 10, d: 'month' },
                { l: 'y', r: 17 },
                { l: 'yy', d: 'year' },
              ],
              J = C.length,
              Y = 0;
            Y < J;
            Y += 1
          ) {
            var x = C[Y];
            x.d && (L = E ? g(l).diff(y, x.d, !0) : y.diff(l, x.d, !0));
            var _ = (c.rounding || Math.round)(Math.abs(L));
            if (((W = L > 0), _ <= x.r || !x.r)) {
              _ <= 1 && Y > 0 && (x = C[Y - 1]);
              var U = B[x.l];
              I && (_ = I('' + _)),
                (N = typeof U == 'string' ? U.replace('%d', _) : U(_, M, x.l, W));
              break;
            }
          }
          if (M) return N;
          var k = W ? B.future : B.past;
          return typeof k == 'function' ? k(N) : k.replace('%s', N);
        }),
        (m.to = function (l, M) {
          return v(l, M, this, !0);
        }),
        (m.from = function (l, M) {
          return v(l, M, this);
        });
      var T = function (l) {
        return l.$u ? g.utc() : g();
      };
      (m.toNow = function (l) {
        return this.to(T(this), l);
      }),
        (m.fromNow = function (l) {
          return this.from(T(this), l);
        });
    };
  });
})(se);
var pe = se.exports;
const ge = Q(pe);
var ae = { exports: {} };
(function (t, u) {
  (function (c, f) {
    t.exports = f();
  })(P, function () {
    return function (c, f, g) {
      g.updateLocale = function (m, p) {
        var v = g.Ls[m];
        if (v)
          return (
            (p ? Object.keys(p) : []).forEach(function (T) {
              v[T] = p[T];
            }),
            v
          );
      };
    };
  });
})(ae);
var ye = ae.exports;
const $e = Q(ye);
R.extend(ge);
R.extend($e);
const ve = {
    ...me,
    name: 'en-web3-modal',
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: '%d sec',
      m: '1 min',
      mm: '%d min',
      h: '1 hr',
      hh: '%d hrs',
      d: '1 d',
      dd: '%d d',
      M: '1 mo',
      MM: '%d mo',
      y: '1 yr',
      yy: '%d yr',
    },
  },
  Te = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
R.locale('en-web3-modal', ve);
const te = {
    getMonthNameByIndex(t) {
      return Te[t];
    },
    getYear(t = new Date().toISOString()) {
      return R(t).year();
    },
    getRelativeDateFromNow(t) {
      return R(t).locale('en-web3-modal').fromNow(!0);
    },
    formatDate(t, u = 'DD MMM') {
      return R(t).format(u);
    },
  },
  be = 3,
  we = ['receive', 'deposit', 'borrow', 'claim'],
  Me = ['withdraw', 'repay', 'burn'],
  ne = {
    getTransactionGroupTitle(t, u) {
      const c = te.getYear(),
        f = te.getMonthNameByIndex(u);
      return t === c ? f : `${f} ${t}`;
    },
    getTransactionImages(t) {
      const [u, c] = t,
        f = !!u && t?.every((p) => !!p.nft_info),
        g = t?.length > 1;
      return t?.length === 2 && !f
        ? [this.getTransactionImage(u), this.getTransactionImage(c)]
        : g
          ? t.map((p) => this.getTransactionImage(p))
          : [this.getTransactionImage(u)];
    },
    getTransactionImage(t) {
      return { type: ne.getTransactionTransferTokenType(t), url: ne.getTransactionImageURL(t) };
    },
    getTransactionImageURL(t) {
      let u;
      const c = !!t?.nft_info,
        f = !!t?.fungible_info;
      return (
        t && c
          ? (u = t?.nft_info?.content?.preview?.url)
          : t && f && (u = t?.fungible_info?.icon?.url),
        u
      );
    },
    getTransactionTransferTokenType(t) {
      if (t?.fungible_info) return 'FUNGIBLE';
      if (t?.nft_info) return 'NFT';
    },
    getTransactionDescriptions(t) {
      const u = t?.metadata?.operationType,
        c = t?.transfers,
        f = t?.transfers?.length > 0,
        g = t?.transfers?.length > 1,
        m = f && c?.every((y) => !!y?.fungible_info),
        [p, v] = c;
      let T = this.getTransferDescription(p),
        l = this.getTransferDescription(v);
      if (!f)
        return (u === 'send' || u === 'receive') && m
          ? ((T = ee.getTruncateString({
              string: t?.metadata.sentFrom,
              charsStart: 4,
              charsEnd: 6,
              truncate: 'middle',
            })),
            (l = ee.getTruncateString({
              string: t?.metadata.sentTo,
              charsStart: 4,
              charsEnd: 6,
              truncate: 'middle',
            })),
            [T, l])
          : [t.metadata.status];
      if (g) return c.map((y) => this.getTransferDescription(y));
      let M = '';
      return we.includes(u) ? (M = '+') : Me.includes(u) && (M = '-'), (T = M.concat(T)), [T];
    },
    getTransferDescription(t) {
      let u = '';
      return (
        t &&
          (t?.nft_info
            ? (u = t?.nft_info?.name || '-')
            : t?.fungible_info && (u = this.getFungibleTransferDescription(t) || '-')),
        u
      );
    },
    getFungibleTransferDescription(t) {
      return t
        ? [this.getQuantityFixedValue(t?.quantity.numeric), t?.fungible_info?.symbol]
            .join(' ')
            .trim()
        : null;
    },
    getQuantityFixedValue(t) {
      return t ? parseFloat(t).toFixed(be) : null;
    },
  },
  De = ue`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;
var xe =
  (globalThis && globalThis.__decorate) ||
  function (t, u, c, f) {
    var g = arguments.length,
      m = g < 3 ? u : f === null ? (f = Object.getOwnPropertyDescriptor(u, c)) : f,
      p;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      m = Reflect.decorate(t, u, c, f);
    else
      for (var v = t.length - 1; v >= 0; v--)
        (p = t[v]) && (m = (g < 3 ? p(m) : g > 3 ? p(u, c, m) : p(u, c)) || m);
    return g > 3 && m && Object.defineProperty(u, c, m), m;
  };
let X = class extends fe {
  render() {
    return de`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `;
  }
};
X.styles = [ce, De];
X = xe([oe('wui-transaction-list-item-loader')], X);
export { te as D, ne as T };
