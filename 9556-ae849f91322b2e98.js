'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9556],
  {
    4707: (e, u, a) => {
      a.d(u, { k: () => r });
      var t = a(7620);
      function r(e, u) {
        let a = (0, t.useRef)(null);
        return e && a.current && u(e, a.current) && (e = a.current), (a.current = e), e;
      }
    },
    6411: (e, u, a) => {
      a.d(u, { _: () => c });
      var t = a(14738),
        r = a(20134),
        n = a(97388),
        i = a(2728),
        o = a(20263),
        d = a(27024),
        l = a(61186),
        s = a(15258),
        D = a(37608),
        m = a(7620);
      function c(e, u) {
        return (function (e, u) {
          var a;
          let c = (0, D.o)((a = r.A) && a.__esModule ? a.default : a, '@react-aria/calendar'),
            y = (0, i.$)(e),
            g = (0, t.ZR)(u.visibleRange.start, u.visibleRange.end, u.timeZone, !1),
            p = (0, t.ZR)(u.visibleRange.start, u.visibleRange.end, u.timeZone, !0);
          (0, o.w)(() => {
            u.isFocused || (0, n.iP)(p);
          }, [p]);
          let h = (0, t.ZI)(u);
          (0, o.w)(() => {
            h && (0, n.iP)(h, 'polite', 4e3);
          }, [h]);
          let f = (0, d.X1)([!!e.errorMessage, e.isInvalid, e.validationState]);
          (0, t.OX).set(u, {
            ariaLabel: e['aria-label'],
            ariaLabelledBy: e['aria-labelledby'],
            errorMessageId: f,
            selectedDateDescription: h,
          });
          let [v, B] = (0, m.useState)(!1),
            x = e.isDisabled || u.isNextVisibleRangeInvalid();
          x && v && (B(!1), u.setFocused(!0));
          let [C, E] = (0, m.useState)(!1),
            b = e.isDisabled || u.isPreviousVisibleRangeInvalid();
          b && C && (E(!1), u.setFocused(!0));
          let $ = (0, l.b)({
            id: e.id,
            'aria-label': [e['aria-label'], p].filter(Boolean).join(', '),
            'aria-labelledby': e['aria-labelledby'],
          });
          return {
            calendarProps: (0, s.v)(y, $, {
              role: 'application',
              'aria-details': e['aria-details'] || void 0,
              'aria-describedby': e['aria-describedby'] || void 0,
            }),
            nextButtonProps: {
              onPress: () => u.focusNextPage(),
              'aria-label': c.format('next'),
              isDisabled: x,
              onFocusChange: B,
            },
            prevButtonProps: {
              onPress: () => u.focusPreviousPage(),
              'aria-label': c.format('previous'),
              isDisabled: b,
              onFocusChange: E,
            },
            errorMessageProps: { id: f },
            title: g,
          };
        })(e, u);
      }
    },
    7449: (e, u, a) => {
      let t, r;
      a.d(u, { d: () => _ });
      var n = a(45820),
        i = a(13402);
      class o extends i.FG {
        fromJulianDay(e) {
          let u = super.fromJulianDay(e),
            a = (0, i.LA)(u.era, u.year);
          return new n.ng(this, a - -543, u.month, u.day);
        }
        toJulianDay(e) {
          return super.toJulianDay(d(e));
        }
        getEras() {
          return ['BE'];
        }
        getDaysInMonth(e) {
          return super.getDaysInMonth(d(e));
        }
        balanceDate() {}
        constructor(...e) {
          super(...e), (this.identifier = 'buddhist');
        }
      }
      function d(e) {
        let [u, a] = (0, i.f5)(e.year + -543);
        return new n.ng(u, a, e.month, e.day);
      }
      function l(e, u, a, t) {
        return e + 365 * u + Math.floor(u / 4) + 30 * (a - 1) + t - 1;
      }
      function s(e, u) {
        let a = Math.floor((4 * (u - e)) / 1461),
          t = 1 + Math.floor((u - l(e, a, 1, 1)) / 30),
          r = u + 1 - l(e, a, t, 1);
        return [a, t, r];
      }
      function D(e) {
        return Math.floor((e % 4) / 3);
      }
      function m(e, u) {
        return u % 13 != 0 ? 30 : D(e) + 5;
      }
      class c {
        fromJulianDay(e) {
          let [u, a, t] = s(1723856, e),
            r = 'AM';
          return u <= 0 && ((r = 'AA'), (u += 5500)), new n.ng(this, r, u, a, t);
        }
        toJulianDay(e) {
          let u = e.year;
          return 'AA' === e.era && (u -= 5500), l(1723856, u, e.month, e.day);
        }
        getDaysInMonth(e) {
          return m(e.year, e.month);
        }
        getMonthsInYear() {
          return 13;
        }
        getDaysInYear(e) {
          return 365 + D(e.year);
        }
        getYearsInEra(e) {
          return 'AA' === e.era ? 9999 : 9991;
        }
        getEras() {
          return ['AA', 'AM'];
        }
        constructor() {
          this.identifier = 'ethiopic';
        }
      }
      class y extends c {
        fromJulianDay(e) {
          let [u, a, t] = s(1723856, e);
          return (u += 5500), new n.ng(this, 'AA', u, a, t);
        }
        getEras() {
          return ['AA'];
        }
        getYearsInEra() {
          return 9999;
        }
        constructor(...e) {
          super(...e), (this.identifier = 'ethioaa');
        }
      }
      class g extends c {
        fromJulianDay(e) {
          let [u, a, t] = s(1824665, e),
            r = 'CE';
          return u <= 0 && ((r = 'BCE'), (u = 1 - u)), new n.ng(this, r, u, a, t);
        }
        toJulianDay(e) {
          let u = e.year;
          return 'BCE' === e.era && (u = 1 - u), l(1824665, u, e.month, e.day);
        }
        getDaysInMonth(e) {
          let u = e.year;
          return 'BCE' === e.era && (u = 1 - u), m(u, e.month);
        }
        isInverseEra(e) {
          return 'BCE' === e.era;
        }
        balanceDate(e) {
          e.year <= 0 && ((e.era = 'BCE' === e.era ? 'CE' : 'BCE'), (e.year = 1 - e.year));
        }
        getEras() {
          return ['BCE', 'CE'];
        }
        getYearsInEra(e) {
          return 'BCE' === e.era ? 9999 : 9715;
        }
        constructor(...e) {
          super(...e), (this.identifier = 'coptic');
        }
      }
      var p = a(80487);
      let h = 765433;
      function f(e) {
        return 7 > (0, p.z)(7 * e + 1, 19);
      }
      function v(e) {
        let u = Math.floor((235 * e - 234) / 19),
          a = 29 * u + Math.floor((12084 + 13753 * u) / 25920);
        return 3 > (0, p.z)(3 * (a + 1), 7) && (a += 1), a;
      }
      function B(e) {
        let u, a;
        return v(e) + ((u = v(e - 1)), (a = v(e)), v(e + 1) - a == 356 ? 2 : +(a - u == 382));
      }
      function x(e) {
        return B(e + 1) - B(e);
      }
      function C(e, u) {
        if ((u >= 6 && !f(e) && u++, 4 === u || 7 === u || 9 === u || 11 === u || 13 === u))
          return 29;
        let a = (function (e) {
          let u = x(e);
          switch ((u > 380 && (u -= 30), u)) {
            case 353:
              return 0;
            case 354:
              return 1;
            case 355:
              return 2;
          }
        })(e);
        return 2 === u
          ? 2 === a
            ? 30
            : 29
          : 3 === u
            ? 0 === a
              ? 29
              : 30
            : 6 === u
              ? 30 * !!f(e)
              : 30;
      }
      class E {
        fromJulianDay(e) {
          let u = e - 347997,
            a = Math.floor((((25920 * u) / h) * 19 + 234) / 235) + 1,
            t = B(a),
            r = Math.floor(u - t);
          for (; r < 1; ) r = Math.floor(u - (t = B(--a)));
          let i = 1,
            o = 0;
          for (; o < r; ) (o += C(a, i)), i++;
          let d = r - (o -= C(a, --i));
          return new n.ng(this, a, i, d);
        }
        toJulianDay(e) {
          let u = B(e.year);
          for (let a = 1; a < e.month; a++) u += C(e.year, a);
          return u + e.day + 347997;
        }
        getDaysInMonth(e) {
          return C(e.year, e.month);
        }
        getMonthsInYear(e) {
          return f(e.year) ? 13 : 12;
        }
        getDaysInYear(e) {
          return x(e.year);
        }
        getYearsInEra() {
          return 9999;
        }
        getEras() {
          return ['AM'];
        }
        balanceYearMonth(e, u) {
          u.year !== e.year &&
            (f(u.year) && !f(e.year) && u.month > 6
              ? e.month--
              : !f(u.year) && f(e.year) && u.month > 6 && e.month++);
        }
        constructor() {
          this.identifier = 'hebrew';
        }
      }
      class b extends i.FG {
        fromJulianDay(e) {
          let u,
            a,
            t,
            r = super.fromJulianDay(e),
            o = r.year - 78,
            d = e - (0, i.rG)(r.era, r.year, 1, 1);
          if (
            (d < 80
              ? (o--, (d += (u = (0, i.U_)(r.year - 1) ? 31 : 30) + 155 + 90 + 10))
              : ((u = (0, i.U_)(r.year) ? 31 : 30), (d -= 80)),
            d < u)
          )
            (a = 1), (t = d + 1);
          else {
            let e = d - u;
            e < 155
              ? ((a = Math.floor(e / 31) + 2), (t = (e % 31) + 1))
              : ((e -= 155), (a = Math.floor(e / 30) + 7), (t = (e % 30) + 1));
          }
          return new n.ng(this, o, a, t);
        }
        toJulianDay(e) {
          let u,
            a,
            t = e.year + 78,
            [r, n] = (0, i.f5)(t);
          return ((0, i.U_)(n)
            ? ((u = 31), (a = (0, i.rG)(r, n, 3, 21)))
            : ((u = 30), (a = (0, i.rG)(r, n, 3, 22))),
          1 === e.month)
            ? a + e.day - 1
            : ((a += u + 31 * Math.min(e.month - 2, 5)),
              e.month >= 8 && (a += (e.month - 7) * 30),
              (a += e.day - 1));
        }
        getDaysInMonth(e) {
          return (1 === e.month && (0, i.U_)(e.year + 78)) || (e.month >= 2 && e.month <= 6)
            ? 31
            : 30;
        }
        getYearsInEra() {
          return 9919;
        }
        getEras() {
          return ['saka'];
        }
        balanceDate() {}
        constructor(...e) {
          super(...e), (this.identifier = 'indian');
        }
      }
      function $(e, u, a, t) {
        return (
          t + Math.ceil(29.5 * (a - 1)) + (u - 1) * 354 + Math.floor((3 + 11 * u) / 30) + e - 1
        );
      }
      function F(e, u, a) {
        let t = Math.floor((30 * (a - u) + 10646) / 10631),
          r = Math.min(12, Math.ceil((a - (29 + $(u, t, 1, 1))) / 29.5) + 1),
          i = a - $(u, t, r, 1) + 1;
        return new n.ng(e, t, r, i);
      }
      function R(e) {
        return (14 + 11 * e) % 30 < 11;
      }
      class k {
        fromJulianDay(e) {
          return F(this, 1948440, e);
        }
        toJulianDay(e) {
          return $(1948440, e.year, e.month, e.day);
        }
        getDaysInMonth(e) {
          let u = 29 + (e.month % 2);
          return 12 === e.month && R(e.year) && u++, u;
        }
        getMonthsInYear() {
          return 12;
        }
        getDaysInYear(e) {
          return R(e.year) ? 355 : 354;
        }
        getYearsInEra() {
          return 9665;
        }
        getEras() {
          return ['AH'];
        }
        constructor() {
          this.identifier = 'islamic-civil';
        }
      }
      class A extends k {
        fromJulianDay(e) {
          return F(this, 1948439, e);
        }
        toJulianDay(e) {
          return $(1948439, e.year, e.month, e.day);
        }
        constructor(...e) {
          super(...e), (this.identifier = 'islamic-tbla');
        }
      }
      function P(e) {
        return 460322 + r[e - 1300];
      }
      function w(e, u) {
        return (t[e - 1300] & (1 << (11 - (u - 1)))) == 0 ? 29 : 30;
      }
      function V(e, u) {
        let a = P(e);
        for (let t = 1; t < u; t++) a += w(e, t);
        return a;
      }
      function S(e) {
        return r[e + 1 - 1300] - r[e - 1300];
      }
      class M extends k {
        fromJulianDay(e) {
          let u = e - 1948440,
            a = P(1300),
            t = P(1600);
          if (u < a || u > t) return super.fromJulianDay(e);
          {
            let e = 1299,
              a = 1,
              t = 1;
            for (; t > 0; ) {
              t = u - P(++e) + 1;
              let r = S(e);
              if (t === r) {
                a = 12;
                break;
              }
              if (t < r) {
                let u = w(e, a);
                for (a = 1; t > u; ) (t -= u), (u = w(e, ++a));
                break;
              }
            }
            return new n.ng(this, e, a, u - V(e, a) + 1);
          }
        }
        toJulianDay(e) {
          return e.year < 1300 || e.year > 1600
            ? super.toJulianDay(e)
            : 1948440 + V(e.year, e.month) + (e.day - 1);
        }
        getDaysInMonth(e) {
          return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : w(e.year, e.month);
        }
        getDaysInYear(e) {
          return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : S(e.year);
        }
        constructor() {
          if (
            (super(),
            (this.identifier = 'islamic-umalqura'),
            t ||
              (t = new Uint16Array(
                Uint8Array.from(
                  atob(
                    'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI='
                  ),
                  (e) => e.charCodeAt(0)
                ).buffer
              )),
            !r)
          ) {
            r = new Uint32Array(301);
            let e = 0;
            for (let u = 1300; u <= 1600; u++) {
              r[u - 1300] = e;
              for (let a = 1; a <= 12; a++) e += w(u, a);
            }
          }
        }
      }
      let j = [
          [1868, 9, 8],
          [1912, 7, 30],
          [1926, 12, 25],
          [1989, 1, 8],
          [2019, 5, 1],
        ],
        z = [
          [1912, 7, 29],
          [1926, 12, 24],
          [1989, 1, 7],
          [2019, 4, 30],
        ],
        I = [1867, 1911, 1925, 1988, 2018],
        O = ['meiji', 'taisho', 'showa', 'heisei', 'reiwa'];
      function T(e) {
        let u = j.findIndex(
          ([u, a, t]) =>
            !!(e.year < u) ||
            (e.year === u && !!(e.month < a)) ||
            (e.year === u && e.month === a && !!(e.day < t))
        );
        return -1 === u ? j.length - 1 : 0 === u ? 0 : u - 1;
      }
      function Z(e) {
        let u = I[O.indexOf(e.era)];
        if (!u) throw Error('Unknown era: ' + e.era);
        return new n.ng(e.year + u, e.month, e.day);
      }
      class U extends i.FG {
        fromJulianDay(e) {
          let u = super.fromJulianDay(e),
            a = T(u);
          return new n.ng(this, O[a], u.year - I[a], u.month, u.day);
        }
        toJulianDay(e) {
          return super.toJulianDay(Z(e));
        }
        balanceDate(e) {
          let u = Z(e),
            a = T(u);
          O[a] !== e.era && ((e.era = O[a]), (e.year = u.year - I[a])), this.constrainDate(e);
        }
        constrainDate(e) {
          let u = O.indexOf(e.era),
            a = z[u];
          if (null != a) {
            let [t, r, n] = a,
              i = t - I[u];
            (e.year = Math.max(1, Math.min(i, e.year))),
              e.year === i &&
                ((e.month = Math.min(r, e.month)), e.month === r && (e.day = Math.min(n, e.day)));
          }
          if (1 === e.year && u >= 0) {
            let [, a, t] = j[u];
            (e.month = Math.max(a, e.month)), e.month === a && (e.day = Math.max(t, e.day));
          }
        }
        getEras() {
          return O;
        }
        getYearsInEra(e) {
          let u = O.indexOf(e.era),
            a = j[u],
            t = j[u + 1];
          if (null == t) return 9999 - a[0] + 1;
          let r = t[0] - a[0];
          return (e.month < t[1] || (e.month === t[1] && e.day < t[2])) && r++, r;
        }
        getDaysInMonth(e) {
          return super.getDaysInMonth(Z(e));
        }
        getMinimumMonthInYear(e) {
          let u = N(e);
          return u ? u[1] : 1;
        }
        getMinimumDayInMonth(e) {
          let u = N(e);
          return u && e.month === u[1] ? u[2] : 1;
        }
        constructor(...e) {
          super(...e), (this.identifier = 'japanese');
        }
      }
      function N(e) {
        if (1 === e.year) return j[O.indexOf(e.era)];
      }
      let K = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
      class L {
        fromJulianDay(e) {
          let u = e - 1948320,
            a = 1 + Math.floor((33 * u + 3) / 12053),
            t = u - (365 * (a - 1) + Math.floor((8 * a + 21) / 33)),
            r = t < 216 ? Math.floor(t / 31) : Math.floor((t - 6) / 30),
            i = t - K[r] + 1;
          return new n.ng(this, a, r + 1, i);
        }
        toJulianDay(e) {
          let u = 1948319 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
          return (u += K[e.month - 1]), (u += e.day);
        }
        getMonthsInYear() {
          return 12;
        }
        getDaysInMonth(e) {
          return e.month <= 6
            ? 31
            : e.month <= 11
              ? 30
              : 8 > (0, p.z)(25 * e.year + 11, 33)
                ? 30
                : 29;
        }
        getEras() {
          return ['AP'];
        }
        getYearsInEra() {
          return 9377;
        }
        constructor() {
          this.identifier = 'persian';
        }
      }
      function J(e) {
        return 'minguo' === e.era ? e.year + 1911 : 1 - e.year + 1911;
      }
      function W(e) {
        let u = e - 1911;
        return u > 0 ? ['minguo', u] : ['before_minguo', 1 - u];
      }
      class q extends i.FG {
        fromJulianDay(e) {
          let u = super.fromJulianDay(e),
            [a, t] = W((0, i.LA)(u.era, u.year));
          return new n.ng(this, a, t, u.month, u.day);
        }
        toJulianDay(e) {
          return super.toJulianDay(G(e));
        }
        getEras() {
          return ['before_minguo', 'minguo'];
        }
        balanceDate(e) {
          let [u, a] = W(J(e));
          (e.era = u), (e.year = a);
        }
        isInverseEra(e) {
          return 'before_minguo' === e.era;
        }
        getDaysInMonth(e) {
          return super.getDaysInMonth(G(e));
        }
        getYearsInEra(e) {
          return 'before_minguo' === e.era ? 9999 : 8088;
        }
        constructor(...e) {
          super(...e), (this.identifier = 'roc');
        }
      }
      function G(e) {
        let [u, a] = (0, i.f5)(J(e));
        return new n.ng(u, a, e.month, e.day);
      }
      function _(e) {
        switch (e) {
          case 'buddhist':
            return new o();
          case 'ethiopic':
            return new c();
          case 'ethioaa':
            return new y();
          case 'coptic':
            return new g();
          case 'hebrew':
            return new E();
          case 'indian':
            return new b();
          case 'islamic-civil':
            return new k();
          case 'islamic-tbla':
            return new A();
          case 'islamic-umalqura':
            return new M();
          case 'japanese':
            return new U();
          case 'persian':
            return new L();
          case 'roc':
            return new q();
          default:
            return new i.FG();
        }
      }
    },
    7486: (e, u, a) => {
      a.d(u, { E: () => h });
      var t = a(14738),
        r = a(20134),
        n = a(93072),
        i = a(4707),
        o = a(64513),
        d = a(48231),
        l = a(47824),
        s = a(8601),
        D = a(15258),
        m = a(85905),
        c = a(24469),
        y = a(37608),
        g = a(13706),
        p = a(7620);
      function h(e, u, a) {
        var h;
        let f,
          { date: v, isDisabled: B } = e,
          { errorMessageId: x, selectedDateDescription: C } = (0, t.OX).get(u),
          E = (0, y.o)((h = r.A) && h.__esModule ? h.default : h, '@react-aria/calendar'),
          b = (0, g.i)({
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            era: (0, t.cf)(v),
            timeZone: u.timeZone,
          }),
          $ = u.isSelected(v),
          F = u.isCellFocused(v);
        B = B || u.isCellDisabled(v);
        let R = u.isCellUnavailable(v),
          k = !B && !R,
          A =
            u.isValueInvalid &&
            !!('highlightedRange' in u
              ? !u.anchorDate &&
                u.highlightedRange &&
                v.compare(u.highlightedRange.start) >= 0 &&
                0 >= v.compare(u.highlightedRange.end)
              : u.value && (0, n.ro)(u.value, v));
        A && ($ = !0), (v = (0, i.k)(v, n.NV));
        let P = (0, p.useMemo)(() => v.toDate(u.timeZone), [v, u.timeZone]),
          w = (0, n.cK)(v, u.timeZone),
          V = (0, p.useMemo)(() => {
            let e = '';
            return (
              'highlightedRange' in u &&
                u.value &&
                !u.anchorDate &&
                ((0, n.ro)(v, u.value.start) || (0, n.ro)(v, u.value.end)) &&
                (e = C + ', '),
              (e += b.format(P)),
              w
                ? (e = E.format($ ? 'todayDateSelected' : 'todayDate', { date: e }))
                : $ && (e = E.format('dateSelected', { date: e })),
              u.minValue && (0, n.ro)(v, u.minValue)
                ? (e += ', ' + E.format('minimumDate'))
                : u.maxValue && (0, n.ro)(v, u.maxValue) && (e += ', ' + E.format('maximumDate')),
              e
            );
          }, [b, P, E, $, w, v, u, C]),
          S = '';
        'anchorDate' in u &&
          F &&
          !u.isReadOnly &&
          k &&
          (S = u.anchorDate
            ? E.format('finishRangeSelectionPrompt')
            : E.format('startRangeSelectionPrompt'));
        let M = (0, o.I)(S),
          j = (0, p.useRef)(!1),
          z = (0, p.useRef)(!1),
          I = (0, p.useRef)(void 0),
          { pressProps: O, isPressed: T } = (0, m.d)({
            shouldCancelOnPointerExit: 'anchorDate' in u && !!u.anchorDate,
            preventFocusOnPress: !0,
            isDisabled: !k || u.isReadOnly,
            onPressStart(e) {
              if (u.isReadOnly) {
                u.setFocusedDate(v);
                return;
              }
              if (
                'highlightedRange' in u &&
                !u.anchorDate &&
                ('mouse' === e.pointerType || 'touch' === e.pointerType)
              ) {
                if (u.highlightedRange && !A) {
                  if ((0, n.ro)(v, u.highlightedRange.start)) {
                    u.setAnchorDate(u.highlightedRange.end),
                      u.setFocusedDate(v),
                      u.setDragging(!0),
                      (z.current = !0);
                    return;
                  }
                  if ((0, n.ro)(v, u.highlightedRange.end)) {
                    u.setAnchorDate(u.highlightedRange.start),
                      u.setFocusedDate(v),
                      u.setDragging(!0),
                      (z.current = !0);
                    return;
                  }
                }
                let a = () => {
                  u.setDragging(!0),
                    (I.current = void 0),
                    u.selectDate(v),
                    u.setFocusedDate(v),
                    (j.current = !0);
                };
                'touch' === e.pointerType ? (I.current = setTimeout(a, 200)) : a();
              }
            },
            onPressEnd() {
              (z.current = !1), (j.current = !1), clearTimeout(I.current), (I.current = void 0);
            },
            onPress() {
              'anchorDate' in u || u.isReadOnly || (u.selectDate(v), u.setFocusedDate(v));
            },
            onPressUp(e) {
              if (
                !u.isReadOnly &&
                ('anchorDate' in u && I.current && (u.selectDate(v), u.setFocusedDate(v)),
                'anchorDate' in u)
              ) {
                if (z.current) u.setAnchorDate(v);
                else if (u.anchorDate && !j.current) u.selectDate(v), u.setFocusedDate(v);
                else if ('keyboard' !== e.pointerType || u.anchorDate)
                  'virtual' === e.pointerType && (u.selectDate(v), u.setFocusedDate(v));
                else {
                  u.selectDate(v);
                  let e = v.add({ days: 1 });
                  u.isInvalid(e) && (e = v.subtract({ days: 1 })),
                    u.isInvalid(e) || u.setFocusedDate(e);
                }
              }
            },
          });
        B || (f = (0, n.ro)(v, u.focusedDate) ? 0 : -1),
          (0, p.useEffect)(() => {
            F &&
              a.current &&
              ((0, d.e)(a.current),
              'pointer' !== (0, c.ME)() &&
                document.activeElement === a.current &&
                (0, l.o)(a.current, { containingElement: (0, s.m)(a.current) }));
          }, [F, a]);
        let Z = (0, g.i)({ day: 'numeric', timeZone: u.timeZone, calendar: v.calendar.identifier }),
          U = (0, p.useMemo)(() => Z.formatToParts(P).find((e) => 'day' === e.type).value, [Z, P]);
        return {
          cellProps: {
            role: 'gridcell',
            'aria-disabled': !k || void 0,
            'aria-selected': $ || void 0,
            'aria-invalid': A || void 0,
          },
          buttonProps: (0, D.v)(O, {
            onFocus() {
              B || u.setFocusedDate(v);
            },
            tabIndex: f,
            role: 'button',
            'aria-disabled': !k || void 0,
            'aria-label': V,
            'aria-invalid': A || void 0,
            'aria-describedby':
              [A ? x : void 0, M['aria-describedby']].filter(Boolean).join(' ') || void 0,
            onPointerEnter(e) {
              'highlightDate' in u &&
                ('touch' !== e.pointerType || u.isDragging) &&
                k &&
                u.highlightDate(v);
            },
            onPointerDown(e) {
              'releasePointerCapture' in e.target && e.target.releasePointerCapture(e.pointerId);
            },
            onContextMenu(e) {
              e.preventDefault();
            },
          }),
          isPressed: T,
          isFocused: F,
          isSelected: $,
          isDisabled: B,
          isUnavailable: R,
          isOutsideVisibleRange:
            0 > v.compare(u.visibleRange.start) || v.compare(u.visibleRange.end) > 0,
          isInvalid: A,
          formattedDate: U,
        };
      }
    },
    13706: (e, u, a) => {
      a.d(u, { i: () => o });
      var t = a(41635),
        r = a(92738),
        n = a(4707),
        i = a(7620);
      function o(e) {
        e = (0, n.k)(null != e ? e : {}, d);
        let { locale: u } = (0, t.Y)();
        return (0, i.useMemo)(() => new r.p(u, e), [u, e]);
      }
      function d(e, u) {
        if (e === u) return !0;
        let a = Object.keys(e),
          t = Object.keys(u);
        if (a.length !== t.length) return !1;
        for (let t of a) if (u[t] !== e[t]) return !1;
        return !0;
      }
    },
    14738: (e, u, a) => {
      a.d(u, { OX: () => l, ZI: () => D, ZR: () => m, cf: () => s });
      var t = a(20134),
        r = a(93072),
        n = a(37608),
        i = a(13706),
        o = a(7620);
      function d(e) {
        return e && e.__esModule ? e.default : e;
      }
      let l = new WeakMap();
      function s(e) {
        return (null == e ? void 0 : e.calendar.identifier) === 'gregory' && 'BC' === e.era
          ? 'short'
          : void 0;
      }
      function D(e) {
        var u;
        let a,
          l,
          D = (0, n.o)(d(t.A), '@react-aria/calendar');
        'highlightedRange' in e
          ? ({ start: a, end: l } = e.highlightedRange || {})
          : (a = l = null !== (u = e.value) && void 0 !== u ? u : void 0);
        let m = (0, i.i)({
            weekday: 'long',
            month: 'long',
            year: 'numeric',
            day: 'numeric',
            era: s(a) || s(l),
            timeZone: e.timeZone,
          }),
          y = 'anchorDate' in e ? e.anchorDate : null;
        return (0, o.useMemo)(() => {
          if (!y && a && l) {
            if ((0, r.ro)(a, l)) {
              let u = m.format(a.toDate(e.timeZone));
              return D.format('selectedDateDescription', { date: u });
            }
            {
              let u = c(m, D, a, l, e.timeZone);
              return D.format('selectedRangeDescription', { dateRange: u });
            }
          }
          return '';
        }, [a, l, y, e.timeZone, D, m]);
      }
      function m(e, u, a, l) {
        let D = (0, n.o)(d(t.A), '@react-aria/calendar'),
          m = s(e) || s(u),
          y = (0, i.i)({
            month: 'long',
            year: 'numeric',
            era: m,
            calendar: e.calendar.identifier,
            timeZone: a,
          }),
          g = (0, i.i)({
            month: 'long',
            year: 'numeric',
            day: 'numeric',
            era: m,
            calendar: e.calendar.identifier,
            timeZone: a,
          });
        return (0, o.useMemo)(() => {
          if ((0, r.ro)(e, (0, r.wH)(e))) {
            let t = e,
              n = u;
            if (
              (e.calendar.getFormattableMonth && (t = e.calendar.getFormattableMonth(e)),
              u.calendar.getFormattableMonth && (n = u.calendar.getFormattableMonth(u)),
              (0, r.ro)(u, (0, r.p9)(e)))
            )
              return y.format(t.toDate(a));
            if ((0, r.ro)(u, (0, r.p9)(u)))
              return l ? c(y, D, t, n, a) : y.formatRange(t.toDate(a), n.toDate(a));
          }
          return l ? c(g, D, e, u, a) : g.formatRange(e.toDate(a), u.toDate(a));
        }, [e, u, y, g, D, a, l]);
      }
      function c(e, u, a, t, r) {
        let n = e.formatRangeToParts(a.toDate(r), t.toDate(r)),
          i = -1;
        for (let e = 0; e < n.length; e++) {
          let u = n[e];
          if ('shared' === u.source && 'literal' === u.type) i = e;
          else if ('endRange' === u.source) break;
        }
        let o = '',
          d = '';
        for (let e = 0; e < n.length; e++) e < i ? (o += n[e].value) : e > i && (d += n[e].value);
        return u.format('dateRange', { startDate: o, endDate: d });
      }
    },
    20134: (e, u, a) => {
      a.d(u, { A: () => I });
      var t = {},
        r = {},
        n = {},
        i = {},
        o = {},
        d = {},
        l = {},
        s = {},
        D = {},
        m = {},
        c = {},
        y = {},
        g = {},
        p = {},
        h = {},
        f = {},
        v = {},
        B = {},
        x = {},
        C = {},
        E = {},
        b = {},
        $ = {},
        F = {},
        R = {},
        k = {},
        A = {},
        P = {},
        w = {},
        V = {},
        S = {},
        M = {},
        j = {},
        z = {},
        I = {};
      I = {
        'ar-AE': {
          dateRange: (e) => `${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,
          dateSelected: (e) => `${e.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,
          finishRangeSelectionPrompt: `\u{627}\u{646}\u{642}\u{631} \u{644}\u{625}\u{646}\u{647}\u{627}\u{621} \u{639}\u{645}\u{644}\u{64A}\u{629} \u{62A}\u{62D}\u{62F}\u{64A}\u{62F} \u{646}\u{637}\u{627}\u{642} \u{627}\u{644}\u{62A}\u{627}\u{631}\u{64A}\u{62E}`,
          maximumDate: `\u{622}\u{62E}\u{631} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62A}\u{627}\u{62D}`,
          minimumDate: `\u{623}\u{648}\u{644} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62A}\u{627}\u{62D}`,
          next: `\u{627}\u{644}\u{62A}\u{627}\u{644}\u{64A}`,
          previous: `\u{627}\u{644}\u{633}\u{627}\u{628}\u{642}`,
          selectedDateDescription: (e) =>
            `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.dateRange}`,
          startRangeSelectionPrompt: `\u{627}\u{646}\u{642}\u{631} \u{644}\u{628}\u{62F}\u{621} \u{639}\u{645}\u{644}\u{64A}\u{629} \u{62A}\u{62D}\u{62F}\u{64A}\u{62F} \u{646}\u{637}\u{627}\u{642} \u{627}\u{644}\u{62A}\u{627}\u{631}\u{64A}\u{62E}`,
          todayDate: (e) => `\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date}`,
          todayDateSelected: (e) =>
            `\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date} \u{645}\u{62D}\u{62F}\u{62F}`,
        },
        'bg-BG': {
          dateRange: (e) => `${e.startDate} \u{434}\u{43E} ${e.endDate}`,
          dateSelected: (e) =>
            `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${e.date}`,
          finishRangeSelectionPrompt: `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435}, \u{437}\u{430} \u{434}\u{430} \u{434}\u{43E}\u{432}\u{44A}\u{440}\u{448}\u{438}\u{442}\u{435} \u{438}\u{437}\u{431}\u{43E}\u{440}\u{430} \u{43D}\u{430} \u{432}\u{440}\u{435}\u{43C}\u{435}\u{432}\u{438} \u{438}\u{43D}\u{442}\u{435}\u{440}\u{432}\u{430}\u{43B}`,
          maximumDate: `\u{41F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{430} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
          minimumDate: `\u{41F}\u{44A}\u{440}\u{432}\u{430} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
          next: `\u{41D}\u{430}\u{43F}\u{440}\u{435}\u{434}`,
          previous: `\u{41D}\u{430}\u{437}\u{430}\u{434}`,
          selectedDateDescription: (e) =>
            `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
          startRangeSelectionPrompt: `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435}, \u{437}\u{430} \u{434}\u{430} \u{43F}\u{440}\u{438}\u{441}\u{442}\u{44A}\u{43F}\u{438}\u{442}\u{435} \u{43A}\u{44A}\u{43C} \u{438}\u{437}\u{431}\u{43E}\u{440}\u{430} \u{43D}\u{430} \u{432}\u{440}\u{435}\u{43C}\u{435}\u{432}\u{438} \u{438}\u{43D}\u{442}\u{435}\u{440}\u{432}\u{430}\u{43B}`,
          todayDate: (e) => `\u{414}\u{43D}\u{435}\u{441}, ${e.date}`,
          todayDateSelected: (e) =>
            `\u{414}\u{43D}\u{435}\u{441}, ${e.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`,
        },
        'cs-CZ': {
          dateRange: (e) => `${e.startDate} a\u{17E} ${e.endDate}`,
          dateSelected: (e) => `Vybr\xe1no ${e.date}`,
          finishRangeSelectionPrompt: `Kliknut\xedm dokon\u{10D}\xedte v\xfdb\u{11B}r rozsahu dat`,
          maximumDate: `Posledn\xed dostupn\xe9 datum`,
          minimumDate: `Prvn\xed dostupn\xe9 datum`,
          next: `Dal\u{161}\xed`,
          previous: `P\u{159}edchoz\xed`,
          selectedDateDescription: (e) => `Vybran\xe9 datum: ${e.date}`,
          selectedRangeDescription: (e) => `Vybran\xe9 obdob\xed: ${e.dateRange}`,
          startRangeSelectionPrompt: `Kliknut\xedm zah\xe1j\xedte v\xfdb\u{11B}r rozsahu dat`,
          todayDate: (e) => `Dnes, ${e.date}`,
          todayDateSelected: (e) => `Dnes, vybr\xe1no ${e.date}`,
        },
        'da-DK': {
          dateRange: (e) => `${e.startDate} til ${e.endDate}`,
          dateSelected: (e) => `${e.date} valgt`,
          finishRangeSelectionPrompt: `Klik for at fuldf\xf8re valg af datoomr\xe5de`,
          maximumDate: 'Sidste ledige dato',
          minimumDate: `F\xf8rste ledige dato`,
          next: `N\xe6ste`,
          previous: 'Forrige',
          selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
          selectedRangeDescription: (e) => `Valgt interval: ${e.dateRange}`,
          startRangeSelectionPrompt: `Klik for at starte valg af datoomr\xe5de`,
          todayDate: (e) => `I dag, ${e.date}`,
          todayDateSelected: (e) => `I dag, ${e.date} valgt`,
        },
        'de-DE': {
          dateRange: (e) => `${e.startDate} bis ${e.endDate}`,
          dateSelected: (e) => `${e.date} ausgew\xe4hlt`,
          finishRangeSelectionPrompt: 'Klicken, um die Auswahl des Datumsbereichs zu beenden',
          maximumDate: `Letztes verf\xfcgbares Datum`,
          minimumDate: `Erstes verf\xfcgbares Datum`,
          next: 'Weiter',
          previous: `Zur\xfcck`,
          selectedDateDescription: (e) => `Ausgew\xe4hltes Datum: ${e.date}`,
          selectedRangeDescription: (e) => `Ausgew\xe4hlter Bereich: ${e.dateRange}`,
          startRangeSelectionPrompt: 'Klicken, um die Auswahl des Datumsbereichs zu beginnen',
          todayDate: (e) => `Heute, ${e.date}`,
          todayDateSelected: (e) => `Heute, ${e.date} ausgew\xe4hlt`,
        },
        'el-GR': {
          dateRange: (e) => `${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,
          dateSelected: (e) =>
            `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${e.date}`,
          finishRangeSelectionPrompt: `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BF}\u{3BB}\u{3BF}\u{3BA}\u{3BB}\u{3B7}\u{3C1}\u{3CE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C5}\u{3C2} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3B9}\u{3CE}\u{3BD}`,
          maximumDate: `\u{3A4}\u{3B5}\u{3BB}\u{3B5}\u{3C5}\u{3C4}\u{3B1}\u{3AF}\u{3B1} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}`,
          minimumDate: `\u{3A0}\u{3C1}\u{3CE}\u{3C4}\u{3B7} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}`,
          next: `\u{395}\u{3C0}\u{3CC}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
          previous: `\u{3A0}\u{3C1}\u{3BF}\u{3B7}\u{3B3}\u{3BF}\u{3CD}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
          selectedDateDescription: (e) =>
            `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.dateRange}`,
          startRangeSelectionPrompt: `\u{39A}\u{3AC}\u{3BD}\u{3C4}\u{3B5} \u{3BA}\u{3BB}\u{3B9}\u{3BA} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3BE}\u{3B5}\u{3BA}\u{3B9}\u{3BD}\u{3AE}\u{3C3}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3B7}\u{3BD} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C5}\u{3C2} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3B9}\u{3CE}\u{3BD}`,
          todayDate: (e) => `\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, ${e.date}`,
          todayDateSelected: (e) =>
            `\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3C4}\u{3B7}\u{3BA}\u{3B5} ${e.date}`,
        },
        'en-US': {
          previous: 'Previous',
          next: 'Next',
          selectedDateDescription: (e) => `Selected Date: ${e.date}`,
          selectedRangeDescription: (e) => `Selected Range: ${e.dateRange}`,
          todayDate: (e) => `Today, ${e.date}`,
          todayDateSelected: (e) => `Today, ${e.date} selected`,
          dateSelected: (e) => `${e.date} selected`,
          startRangeSelectionPrompt: 'Click to start selecting date range',
          finishRangeSelectionPrompt: 'Click to finish selecting date range',
          minimumDate: 'First available date',
          maximumDate: 'Last available date',
          dateRange: (e) => `${e.startDate} to ${e.endDate}`,
        },
        'es-ES': {
          dateRange: (e) => `${e.startDate} a ${e.endDate}`,
          dateSelected: (e) => `${e.date} seleccionado`,
          finishRangeSelectionPrompt: 'Haga clic para terminar de seleccionar rango de fechas',
          maximumDate: `\xdaltima fecha disponible`,
          minimumDate: 'Primera fecha disponible',
          next: 'Siguiente',
          previous: 'Anterior',
          selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
          selectedRangeDescription: (e) => `Intervalo seleccionado: ${e.dateRange}`,
          startRangeSelectionPrompt: 'Haga clic para comenzar a seleccionar un rango de fechas',
          todayDate: (e) => `Hoy, ${e.date}`,
          todayDateSelected: (e) => `Hoy, ${e.date} seleccionado`,
        },
        'et-EE': {
          dateRange: (e) => `${e.startDate} kuni ${e.endDate}`,
          dateSelected: (e) => `${e.date} valitud`,
          finishRangeSelectionPrompt: `Kl\xf5psake kuup\xe4evavahemiku valimise l\xf5petamiseks`,
          maximumDate: `Viimane saadaolev kuup\xe4ev`,
          minimumDate: `Esimene saadaolev kuup\xe4ev`,
          next: `J\xe4rgmine`,
          previous: 'Eelmine',
          selectedDateDescription: (e) => `Valitud kuup\xe4ev: ${e.date}`,
          selectedRangeDescription: (e) => `Valitud vahemik: ${e.dateRange}`,
          startRangeSelectionPrompt: `Kl\xf5psake kuup\xe4evavahemiku valimiseks`,
          todayDate: (e) => `T\xe4na, ${e.date}`,
          todayDateSelected: (e) => `T\xe4na, ${e.date} valitud`,
        },
        'fi-FI': {
          dateRange: (e) => `${e.startDate} \u{2013} ${e.endDate}`,
          dateSelected: (e) => `${e.date} valittu`,
          finishRangeSelectionPrompt: `Lopeta p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.`,
          maximumDate: `Viimeinen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4`,
          minimumDate: `Ensimm\xe4inen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4`,
          next: 'Seuraava',
          previous: 'Edellinen',
          selectedDateDescription: (e) => `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
          selectedRangeDescription: (e) => `Valittu aikav\xe4li: ${e.dateRange}`,
          startRangeSelectionPrompt: `Aloita p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.`,
          todayDate: (e) => `T\xe4n\xe4\xe4n, ${e.date}`,
          todayDateSelected: (e) => `T\xe4n\xe4\xe4n, ${e.date} valittu`,
        },
        'fr-FR': {
          dateRange: (e) => `${e.startDate} \xe0 ${e.endDate}`,
          dateSelected: (e) => `${e.date} s\xe9lectionn\xe9`,
          finishRangeSelectionPrompt: `Cliquer pour finir de s\xe9lectionner la plage de dates`,
          maximumDate: `Derni\xe8re date disponible`,
          minimumDate: `Premi\xe8re date disponible`,
          next: 'Suivant',
          previous: `Pr\xe9c\xe9dent`,
          selectedDateDescription: (e) => `Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
          selectedRangeDescription: (e) => `Plage s\xe9lectionn\xe9e\xa0: ${e.dateRange}`,
          startRangeSelectionPrompt: `Cliquer pour commencer \xe0 s\xe9lectionner la plage de dates`,
          todayDate: (e) => `Aujourd'hui, ${e.date}`,
          todayDateSelected: (e) => `Aujourd\u{2019}hui, ${e.date} s\xe9lectionn\xe9`,
        },
        'he-IL': {
          dateRange: (e) => `${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,
          dateSelected: (e) => `${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
          finishRangeSelectionPrompt: `\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E1}\u{5D9}\u{5D9}\u{5DD} \u{5D0}\u{5EA} \u{5D1}\u{5D7}\u{5D9}\u{5E8}\u{5EA} \u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DB}\u{5D9}\u{5DD}`,
          maximumDate: `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E4}\u{5E0}\u{5D5}\u{5D9} \u{5D0}\u{5D7}\u{5E8}\u{5D5}\u{5DF}`,
          minimumDate: `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E4}\u{5E0}\u{5D5}\u{5D9} \u{5E8}\u{5D0}\u{5E9}\u{5D5}\u{5DF}`,
          next: `\u{5D4}\u{5D1}\u{5D0}`,
          previous: `\u{5D4}\u{5E7}\u{5D5}\u{5D3}\u{5DD}`,
          selectedDateDescription: (e) =>
            `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.dateRange}`,
          startRangeSelectionPrompt: `\u{5DC}\u{5D7}\u{5E5} \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5D4}\u{5EA}\u{5D7}\u{5D9}\u{5DC} \u{5D1}\u{5D1}\u{5D7}\u{5D9}\u{5E8}\u{5EA} \u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DB}\u{5D9}\u{5DD}`,
          todayDate: (e) => `\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date}`,
          todayDateSelected: (e) =>
            `\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
        },
        'hr-HR': {
          dateRange: (e) => `${e.startDate} do ${e.endDate}`,
          dateSelected: (e) => `${e.date} odabran`,
          finishRangeSelectionPrompt: `Kliknite da dovr\u{161}ite raspon odabranih datuma`,
          maximumDate: `Posljednji raspolo\u{17E}ivi datum`,
          minimumDate: `Prvi raspolo\u{17E}ivi datum`,
          next: `Sljede\u{107}i`,
          previous: 'Prethodni',
          selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
          selectedRangeDescription: (e) => `Odabrani raspon: ${e.dateRange}`,
          startRangeSelectionPrompt: `Kliknite da zapo\u{10D}nete raspon odabranih datuma`,
          todayDate: (e) => `Danas, ${e.date}`,
          todayDateSelected: (e) => `Danas, odabran ${e.date}`,
        },
        'hu-HU': {
          dateRange: (e) => `${e.startDate}\u{2013}${e.endDate}`,
          dateSelected: (e) => `${e.date} kiv\xe1lasztva`,
          finishRangeSelectionPrompt: `Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek befejez\xe9s\xe9hez`,
          maximumDate: `Utols\xf3 el\xe9rhet\u{151} d\xe1tum`,
          minimumDate: `Az els\u{151} el\xe9rhet\u{151} d\xe1tum`,
          next: `K\xf6vetkez\u{151}`,
          previous: `El\u{151}z\u{151}`,
          selectedDateDescription: (e) => `Kijel\xf6lt d\xe1tum: ${e.date}`,
          selectedRangeDescription: (e) => `Kijel\xf6lt tartom\xe1ny: ${e.dateRange}`,
          startRangeSelectionPrompt: `Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek ind\xedt\xe1s\xe1hoz`,
          todayDate: (e) => `Ma, ${e.date}`,
          todayDateSelected: (e) => `Ma, ${e.date} kijel\xf6lve`,
        },
        'it-IT': {
          dateRange: (e) => `Da ${e.startDate} a ${e.endDate}`,
          dateSelected: (e) => `${e.date} selezionata`,
          finishRangeSelectionPrompt: `Fai clic per completare la selezione dell\u{2019}intervallo di date`,
          maximumDate: 'Ultima data disponibile',
          minimumDate: 'Prima data disponibile',
          next: 'Successivo',
          previous: 'Precedente',
          selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
          selectedRangeDescription: (e) => `Intervallo selezionato: ${e.dateRange}`,
          startRangeSelectionPrompt: `Fai clic per selezionare l\u{2019}intervallo di date`,
          todayDate: (e) => `Oggi, ${e.date}`,
          todayDateSelected: (e) => `Oggi, ${e.date} selezionata`,
        },
        'ja-JP': {
          dateRange: (e) => `${e.startDate} \u{304B}\u{3089} ${e.endDate}`,
          dateSelected: (e) => `${e.date} \u{3092}\u{9078}\u{629E}`,
          finishRangeSelectionPrompt: `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{65E5}\u{4ED8}\u{7BC4}\u{56F2}\u{306E}\u{9078}\u{629E}\u{3092}\u{7D42}\u{4E86}`,
          maximumDate: `\u{6700}\u{7D42}\u{5229}\u{7528}\u{53EF}\u{80FD}\u{65E5}`,
          minimumDate: `\u{6700}\u{521D}\u{306E}\u{5229}\u{7528}\u{53EF}\u{80FD}\u{65E5}`,
          next: `\u{6B21}\u{3078}`,
          previous: `\u{524D}\u{3078}`,
          selectedDateDescription: (e) =>
            `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,
          selectedRangeDescription: (e) => `\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.dateRange}`,
          startRangeSelectionPrompt: `\u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{3057}\u{3066}\u{65E5}\u{4ED8}\u{7BC4}\u{56F2}\u{306E}\u{9078}\u{629E}\u{3092}\u{958B}\u{59CB}`,
          todayDate: (e) => `\u{672C}\u{65E5}\u{3001}${e.date}`,
          todayDateSelected: (e) => `\u{672C}\u{65E5}\u{3001}${e.date} \u{3092}\u{9078}\u{629E}`,
        },
        'ko-KR': {
          dateRange: (e) => `${e.startDate} ~ ${e.endDate}`,
          dateSelected: (e) => `${e.date} \u{C120}\u{D0DD}\u{B428}`,
          finishRangeSelectionPrompt: `\u{B0A0}\u{C9DC} \u{BC94}\u{C704} \u{C120}\u{D0DD}\u{C744} \u{C644}\u{B8CC}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C2ED}\u{C2DC}\u{C624}.`,
          maximumDate: `\u{B9C8}\u{C9C0}\u{B9C9}\u{C73C}\u{B85C} \u{C0AC}\u{C6A9} \u{AC00}\u{B2A5}\u{D55C} \u{C77C}\u{C790}`,
          minimumDate: `\u{CC98}\u{C74C}\u{C73C}\u{B85C} \u{C0AC}\u{C6A9} \u{AC00}\u{B2A5}\u{D55C} \u{C77C}\u{C790}`,
          next: `\u{B2E4}\u{C74C}`,
          previous: `\u{C774}\u{C804}`,
          selectedDateDescription: (e) => `\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,
          selectedRangeDescription: (e) => `\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.dateRange}`,
          startRangeSelectionPrompt: `\u{B0A0}\u{C9DC} \u{BC94}\u{C704} \u{C120}\u{D0DD}\u{C744} \u{C2DC}\u{C791}\u{D558}\u{B824}\u{BA74} \u{D074}\u{B9AD}\u{D558}\u{C2ED}\u{C2DC}\u{C624}.`,
          todayDate: (e) => `\u{C624}\u{B298}, ${e.date}`,
          todayDateSelected: (e) => `\u{C624}\u{B298}, ${e.date} \u{C120}\u{D0DD}\u{B428}`,
        },
        'lt-LT': {
          dateRange: (e) => `Nuo ${e.startDate} iki ${e.endDate}`,
          dateSelected: (e) => `Pasirinkta ${e.date}`,
          finishRangeSelectionPrompt: `Spustel\u{117}kite, kad baigtum\u{117}te pasirinkti dat\u{173} interval\u{105}`,
          maximumDate: `Paskutin\u{117} galima data`,
          minimumDate: 'Pirmoji galima data',
          next: 'Paskesnis',
          previous: 'Ankstesnis',
          selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
          selectedRangeDescription: (e) => `Pasirinktas intervalas: ${e.dateRange}`,
          startRangeSelectionPrompt: `Spustel\u{117}kite, kad prad\u{117}tum\u{117}te pasirinkti dat\u{173} interval\u{105}`,
          todayDate: (e) => `\u{160}iandien, ${e.date}`,
          todayDateSelected: (e) => `\u{160}iandien, pasirinkta ${e.date}`,
        },
        'lv-LV': {
          dateRange: (e) => `No ${e.startDate} l\u{12B}dz ${e.endDate}`,
          dateSelected: (e) => `Atlas\u{12B}ts: ${e.date}`,
          finishRangeSelectionPrompt: `Noklik\u{161}\u{137}iniet, lai pabeigtu datumu diapazona atlasi`,
          maximumDate: `P\u{113}d\u{113}jais pieejamais datums`,
          minimumDate: 'Pirmais pieejamais datums',
          next: `T\u{101}l\u{101}k`,
          previous: `Atpaka\u{13C}`,
          selectedDateDescription: (e) => `Atlas\u{12B}tais datums: ${e.date}`,
          selectedRangeDescription: (e) => `Atlas\u{12B}tais diapazons: ${e.dateRange}`,
          startRangeSelectionPrompt: `Noklik\u{161}\u{137}iniet, lai s\u{101}ktu datumu diapazona atlasi`,
          todayDate: (e) => `\u{160}odien, ${e.date}`,
          todayDateSelected: (e) => `Atlas\u{12B}ta \u{161}odiena, ${e.date}`,
        },
        'nb-NO': {
          dateRange: (e) => `${e.startDate} til ${e.endDate}`,
          dateSelected: (e) => `${e.date} valgt`,
          finishRangeSelectionPrompt: `Klikk for \xe5 fullf\xf8re valg av datoomr\xe5de`,
          maximumDate: 'Siste tilgjengelige dato',
          minimumDate: `F\xf8rste tilgjengelige dato`,
          next: 'Neste',
          previous: 'Forrige',
          selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
          selectedRangeDescription: (e) => `Valgt omr\xe5de: ${e.dateRange}`,
          startRangeSelectionPrompt: `Klikk for \xe5 starte valg av datoomr\xe5de`,
          todayDate: (e) => `I dag, ${e.date}`,
          todayDateSelected: (e) => `I dag, ${e.date} valgt`,
        },
        'nl-NL': {
          dateRange: (e) => `${e.startDate} tot ${e.endDate}`,
          dateSelected: (e) => `${e.date} geselecteerd`,
          finishRangeSelectionPrompt: 'Klik om de selectie van het datumbereik te voltooien',
          maximumDate: 'Laatste beschikbare datum',
          minimumDate: 'Eerste beschikbare datum',
          next: 'Volgende',
          previous: 'Vorige',
          selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
          selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.dateRange}`,
          startRangeSelectionPrompt: 'Klik om het datumbereik te selecteren',
          todayDate: (e) => `Vandaag, ${e.date}`,
          todayDateSelected: (e) => `Vandaag, ${e.date} geselecteerd`,
        },
        'pl-PL': {
          dateRange: (e) => `${e.startDate} do ${e.endDate}`,
          dateSelected: (e) => `Wybrano ${e.date}`,
          finishRangeSelectionPrompt: `Kliknij, aby zako\u{144}czy\u{107} wyb\xf3r zakresu dat`,
          maximumDate: `Ostatnia dost\u{119}pna data`,
          minimumDate: `Pierwsza dost\u{119}pna data`,
          next: 'Dalej',
          previous: 'Wstecz',
          selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
          selectedRangeDescription: (e) => `Wybrany zakres: ${e.dateRange}`,
          startRangeSelectionPrompt: `Kliknij, aby rozpocz\u{105}\u{107} wyb\xf3r zakresu dat`,
          todayDate: (e) => `Dzisiaj, ${e.date}`,
          todayDateSelected: (e) => `Dzisiaj wybrano ${e.date}`,
        },
        'pt-BR': {
          dateRange: (e) => `${e.startDate} a ${e.endDate}`,
          dateSelected: (e) => `${e.date} selecionado`,
          finishRangeSelectionPrompt: `Clique para concluir a sele\xe7\xe3o do intervalo de datas`,
          maximumDate: `\xdaltima data dispon\xedvel`,
          minimumDate: `Primeira data dispon\xedvel`,
          next: `Pr\xf3ximo`,
          previous: 'Anterior',
          selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
          selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
          startRangeSelectionPrompt: `Clique para iniciar a sele\xe7\xe3o do intervalo de datas`,
          todayDate: (e) => `Hoje, ${e.date}`,
          todayDateSelected: (e) => `Hoje, ${e.date} selecionado`,
        },
        'pt-PT': {
          dateRange: (e) => `${e.startDate} a ${e.endDate}`,
          dateSelected: (e) => `${e.date} selecionado`,
          finishRangeSelectionPrompt: 'Clique para terminar de selecionar o intervalo de datas',
          maximumDate: `\xdaltima data dispon\xedvel`,
          minimumDate: `Primeira data dispon\xedvel`,
          next: `Pr\xf3ximo`,
          previous: 'Anterior',
          selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
          selectedRangeDescription: (e) => `Intervalo selecionado: ${e.dateRange}`,
          startRangeSelectionPrompt: `Clique para come\xe7ar a selecionar o intervalo de datas`,
          todayDate: (e) => `Hoje, ${e.date}`,
          todayDateSelected: (e) => `Hoje, ${e.date} selecionado`,
        },
        'ro-RO': {
          dateRange: (e) => `De la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,
          dateSelected: (e) => `${e.date} selectat\u{103}`,
          finishRangeSelectionPrompt: `Ap\u{103}sa\u{163}i pentru a finaliza selec\u{163}ia razei pentru dat\u{103}`,
          maximumDate: `Ultima dat\u{103} disponibil\u{103}`,
          minimumDate: `Prima dat\u{103} disponibil\u{103}`,
          next: `Urm\u{103}torul`,
          previous: `\xcenainte`,
          selectedDateDescription: (e) => `Dat\u{103} selectat\u{103}: ${e.date}`,
          selectedRangeDescription: (e) => `Interval selectat: ${e.dateRange}`,
          startRangeSelectionPrompt: `Ap\u{103}sa\u{163}i pentru a \xeencepe selec\u{163}ia razei pentru dat\u{103}`,
          todayDate: (e) => `Ast\u{103}zi, ${e.date}`,
          todayDateSelected: (e) => `Azi, ${e.date} selectat\u{103}`,
        },
        'ru-RU': {
          dateRange: (e) => `\u{421} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
          dateSelected: (e) => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
          finishRangeSelectionPrompt: `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{438}\u{442}\u{44C} \u{432}\u{44B}\u{431}\u{43E}\u{440} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430} \u{434}\u{430}\u{442}`,
          maximumDate: `\u{41F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{44F}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}`,
          minimumDate: `\u{41F}\u{435}\u{440}\u{432}\u{430}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}`,
          next: `\u{414}\u{430}\u{43B}\u{435}\u{435}`,
          previous: `\u{41D}\u{430}\u{437}\u{430}\u{434}`,
          selectedDateDescription: (e) =>
            `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
          startRangeSelectionPrompt: `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{432}\u{44B}\u{431}\u{43E}\u{440} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430} \u{434}\u{430}\u{442}`,
          todayDate: (e) => `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${e.date}`,
          todayDateSelected: (e) =>
            `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
        },
        'sk-SK': {
          dateRange: (e) => `Od ${e.startDate} do ${e.endDate}`,
          dateSelected: (e) => `Vybrat\xfd d\xe1tum ${e.date}`,
          finishRangeSelectionPrompt: `Kliknut\xedm dokon\u{10D}\xedte v\xfdber rozsahu d\xe1tumov`,
          maximumDate: `Posledn\xfd dostupn\xfd d\xe1tum`,
          minimumDate: `Prv\xfd dostupn\xfd d\xe1tum`,
          next: `Nasleduj\xface`,
          previous: `Predch\xe1dzaj\xface`,
          selectedDateDescription: (e) => `Vybrat\xfd d\xe1tum: ${e.date}`,
          selectedRangeDescription: (e) => `Vybrat\xfd rozsah: ${e.dateRange}`,
          startRangeSelectionPrompt: `Kliknut\xedm spust\xedte v\xfdber rozsahu d\xe1tumov`,
          todayDate: (e) => `Dnes ${e.date}`,
          todayDateSelected: (e) => `Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${e.date}`,
        },
        'sl-SI': {
          dateRange: (e) => `${e.startDate} do ${e.endDate}`,
          dateSelected: (e) => `${e.date} izbrano`,
          finishRangeSelectionPrompt: `Kliknite za dokon\u{10D}anje izbire datumskega obsega`,
          maximumDate: `Zadnji razpolo\u{17E}ljivi datum`,
          minimumDate: `Prvi razpolo\u{17E}ljivi datum`,
          next: 'Naprej',
          previous: 'Nazaj',
          selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
          selectedRangeDescription: (e) => `Izbrano obmo\u{10D}je: ${e.dateRange}`,
          startRangeSelectionPrompt: `Kliknite za za\u{10D}etek izbire datumskega obsega`,
          todayDate: (e) => `Danes, ${e.date}`,
          todayDateSelected: (e) => `Danes, ${e.date} izbrano`,
        },
        'sr-SP': {
          dateRange: (e) => `${e.startDate} do ${e.endDate}`,
          dateSelected: (e) => `${e.date} izabran`,
          finishRangeSelectionPrompt: `Kliknite da dovr\u{161}ite opseg izabranih datuma`,
          maximumDate: `Zadnji raspolo\u{17E}ivi datum`,
          minimumDate: `Prvi raspolo\u{17E}ivi datum`,
          next: `Slede\u{107}i`,
          previous: 'Prethodni',
          selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
          selectedRangeDescription: (e) => `Izabrani period: ${e.dateRange}`,
          startRangeSelectionPrompt: `Kliknite da zapo\u{10D}nete opseg izabranih datuma`,
          todayDate: (e) => `Danas, ${e.date}`,
          todayDateSelected: (e) => `Danas, izabran ${e.date}`,
        },
        'sv-SE': {
          dateRange: (e) => `${e.startDate} till ${e.endDate}`,
          dateSelected: (e) => `${e.date} har valts`,
          finishRangeSelectionPrompt: `Klicka f\xf6r att avsluta val av datumintervall`,
          maximumDate: `Sista tillg\xe4ngliga datum`,
          minimumDate: `F\xf6rsta tillg\xe4ngliga datum`,
          next: `N\xe4sta`,
          previous: `F\xf6reg\xe5ende`,
          selectedDateDescription: (e) => `Valt datum: ${e.date}`,
          selectedRangeDescription: (e) => `Valt intervall: ${e.dateRange}`,
          startRangeSelectionPrompt: `Klicka f\xf6r att v\xe4lja datumintervall`,
          todayDate: (e) => `Idag, ${e.date}`,
          todayDateSelected: (e) => `Idag, ${e.date} har valts`,
        },
        'tr-TR': {
          dateRange: (e) => `${e.startDate} - ${e.endDate}`,
          dateSelected: (e) => `${e.date} se\xe7ildi`,
          finishRangeSelectionPrompt: `Tarih aral\u{131}\u{11F}\u{131} se\xe7imini tamamlamak i\xe7in t\u{131}klay\u{131}n`,
          maximumDate: `Son m\xfcsait tarih`,
          minimumDate: `\u{130}lk m\xfcsait tarih`,
          next: 'Sonraki',
          previous: `\xd6nceki`,
          selectedDateDescription: (e) => `Se\xe7ilen Tarih: ${e.date}`,
          selectedRangeDescription: (e) => `Se\xe7ilen Aral\u{131}k: ${e.dateRange}`,
          startRangeSelectionPrompt: `Tarih aral\u{131}\u{11F}\u{131} se\xe7imini ba\u{15F}latmak i\xe7in t\u{131}klay\u{131}n`,
          todayDate: (e) => `Bug\xfcn, ${e.date}`,
          todayDateSelected: (e) => `Bug\xfcn, ${e.date} se\xe7ildi`,
        },
        'uk-UA': {
          dateRange: (e) => `${e.startDate} \u{2014} ${e.endDate}`,
          dateSelected: (e) => `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
          finishRangeSelectionPrompt: `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{438}\u{442}\u{438} \u{432}\u{438}\u{431}\u{456}\u{440} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{443} \u{434}\u{430}\u{442}`,
          maximumDate: `\u{41E}\u{441}\u{442}\u{430}\u{43D}\u{43D}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
          minimumDate: `\u{41F}\u{435}\u{440}\u{448}\u{430} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
          next: `\u{41D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{438}\u{439}`,
          previous: `\u{41F}\u{43E}\u{43F}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{456}\u{439}`,
          selectedDateDescription: (e) =>
            `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
          startRangeSelectionPrompt: `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C}, \u{449}\u{43E}\u{431} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{438} \u{432}\u{438}\u{431}\u{456}\u{440} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{443} \u{434}\u{430}\u{442}`,
          todayDate: (e) => `\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${e.date}`,
          todayDateSelected: (e) =>
            `\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
        },
        'zh-CN': {
          dateRange: (e) => `${e.startDate} \u{81F3} ${e.endDate}`,
          dateSelected: (e) => `\u{5DF2}\u{9009}\u{62E9} ${e.date}`,
          finishRangeSelectionPrompt: `\u{5355}\u{51FB}\u{4EE5}\u{5B8C}\u{6210}\u{9009}\u{62E9}\u{65E5}\u{671F}\u{8303}\u{56F4}`,
          maximumDate: `\u{6700}\u{540E}\u{4E00}\u{4E2A}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
          minimumDate: `\u{7B2C}\u{4E00}\u{4E2A}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
          next: `\u{4E0B}\u{4E00}\u{9875}`,
          previous: `\u{4E0A}\u{4E00}\u{9875}`,
          selectedDateDescription: (e) =>
            `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.dateRange}`,
          startRangeSelectionPrompt: `\u{5355}\u{51FB}\u{4EE5}\u{5F00}\u{59CB}\u{9009}\u{62E9}\u{65E5}\u{671F}\u{8303}\u{56F4}`,
          todayDate: (e) => `\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,
          todayDateSelected: (e) =>
            `\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,
        },
        'zh-TW': {
          dateRange: (e) => `${e.startDate} \u{81F3} ${e.endDate}`,
          dateSelected: (e) => `\u{5DF2}\u{9078}\u{53D6} ${e.date}`,
          finishRangeSelectionPrompt: `\u{6309}\u{4E00}\u{4E0B}\u{4EE5}\u{5B8C}\u{6210}\u{9078}\u{53D6}\u{65E5}\u{671F}\u{7BC4}\u{570D}`,
          maximumDate: `\u{6700}\u{5F8C}\u{4E00}\u{500B}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
          minimumDate: `\u{7B2C}\u{4E00}\u{500B}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
          next: `\u{4E0B}\u{4E00}\u{9801}`,
          previous: `\u{4E0A}\u{4E00}\u{9801}`,
          selectedDateDescription: (e) =>
            `\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.dateRange}`,
          startRangeSelectionPrompt: `\u{6309}\u{4E00}\u{4E0B}\u{4EE5}\u{958B}\u{59CB}\u{9078}\u{53D6}\u{65E5}\u{671F}\u{7BC4}\u{570D}`,
          todayDate: (e) => `\u{4ECA}\u{5929}\u{FF0C}${e.date}`,
          todayDateSelected: (e) => `\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${e.date}`,
        },
      };
    },
    20263: (e, u, a) => {
      a.d(u, { w: () => r });
      var t = a(7620);
      function r(e, u) {
        let a = (0, t.useRef)(!0),
          r = (0, t.useRef)(null);
        (0, t.useEffect)(
          () => (
            (a.current = !0),
            () => {
              a.current = !1;
            }
          ),
          []
        ),
          (0, t.useEffect)(() => {
            let t = r.current;
            a.current ? (a.current = !1) : (!t || u.some((e, u) => !Object.is(e, t[u]))) && e(),
              (r.current = u);
          }, u);
      }
    },
    21462: (e, u, a) => {
      a.d(u, { Q: () => h });
      var t = a(76030),
        r = a(95870),
        n = a(75385),
        i = a(7487),
        o = a(27024),
        d = a(64513),
        l = a(2728),
        s = a(15258),
        D = a(32871),
        m = a(28566),
        c = a(9398),
        y = a(37608),
        g = a(41635),
        p = a(7620);
      function h(e, u, a) {
        var h;
        let f = (0, o.Bi)(),
          v = (0, o.Bi)(),
          B = (0, o.Bi)(),
          x = (0, y.o)((h = t.A) && h.__esModule ? h.default : h, '@react-aria/datepicker'),
          { isInvalid: C, validationErrors: E, validationDetails: b } = u.displayValidation,
          {
            labelProps: $,
            fieldProps: F,
            descriptionProps: R,
            errorMessageProps: k,
          } = (0, m.M)({
            ...e,
            labelElementType: 'span',
            isInvalid: C,
            errorMessage: e.errorMessage || E,
          }),
          A = (0, n.P)(u, a),
          P = F['aria-labelledby'] || F.id,
          { locale: w } = (0, g.Y)(),
          V = u.formatValue(w, { month: 'long' }),
          S = V ? x.format('selectedDateDescription', { date: V }) : '',
          M = (0, d.I)(S),
          j = [M['aria-describedby'], F['aria-describedby']].filter(Boolean).join(' ') || void 0,
          z = (0, l.$)(e),
          I = (0, p.useMemo)(() => (0, i.C7)(a), [a]),
          O = (0, p.useRef)(!1),
          { focusWithinProps: T } = (0, c.R)({
            ...e,
            isDisabled: u.isOpen,
            onBlurWithin: (u) => {
              let a = document.getElementById(v);
              if (!(null == a ? void 0 : a.contains(u.relatedTarget))) {
                var t, r;
                (O.current = !1),
                  null === (t = e.onBlur) || void 0 === t || t.call(e, u),
                  null === (r = e.onFocusChange) || void 0 === r || r.call(e, !1);
              }
            },
            onFocusWithin: (u) => {
              if (!O.current) {
                var a, t;
                (O.current = !0),
                  null === (a = e.onFocus) || void 0 === a || a.call(e, u),
                  null === (t = e.onFocusChange) || void 0 === t || t.call(e, !0);
              }
            },
          });
        return {
          groupProps: (0, s.v)(z, A, F, M, T, {
            role: 'group',
            'aria-disabled': e.isDisabled || null,
            'aria-labelledby': P,
            'aria-describedby': j,
            onKeyDown(a) {
              !u.isOpen && e.onKeyDown && e.onKeyDown(a);
            },
            onKeyUp(a) {
              !u.isOpen && e.onKeyUp && e.onKeyUp(a);
            },
          }),
          labelProps: {
            ...$,
            onClick: () => {
              I.focusFirst();
            },
          },
          fieldProps: {
            ...F,
            id: B,
            [r.pK]: 'presentation',
            'aria-describedby': j,
            value: u.value,
            onChange: u.setValue,
            placeholderValue: e.placeholderValue,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            granularity: e.granularity,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isRequired: e.isRequired,
            validationBehavior: e.validationBehavior,
            [D.Lf]: u,
            autoFocus: e.autoFocus,
            name: e.name,
          },
          descriptionProps: R,
          errorMessageProps: k,
          buttonProps: {
            ...M,
            id: f,
            'aria-haspopup': 'dialog',
            'aria-label': x.format('calendar'),
            'aria-labelledby': `${f} ${P}`,
            'aria-describedby': j,
            'aria-expanded': u.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => u.setOpen(!0),
          },
          dialogProps: { id: v, 'aria-labelledby': `${f} ${P}` },
          calendarProps: {
            autoFocus: !0,
            value: u.dateValue,
            onChange: u.setDateValue,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isDateUnavailable: e.isDateUnavailable,
            defaultFocusedValue: u.dateValue ? void 0 : e.placeholderValue,
            isInvalid: u.isInvalid,
            errorMessage:
              'function' == typeof e.errorMessage
                ? e.errorMessage(u.displayValidation)
                : e.errorMessage || u.displayValidation.validationErrors.join(' '),
          },
          isInvalid: C,
          validationErrors: E,
          validationDetails: b,
        };
      }
    },
    21774: (e, u, a) => {
      a.d(u, { V: () => E });
      var t = a(95870),
        r = a(76030),
        n = a(41635),
        i = a(37608),
        o = a(7620);
      class d {
        of(e) {
          return this.dictionary.getStringForLocale(e, this.locale);
        }
        constructor(e, u) {
          (this.locale = e), (this.dictionary = u);
        }
      }
      var l = a(10794),
        s = a(45820),
        D = a(68797),
        m = a(47824),
        c = a(8601),
        y = a(38191),
        g = a(31534),
        p = a(27024),
        h = a(61186),
        f = a(15258),
        v = a(66499),
        B = a(13706),
        x = a(75780),
        C = a(45764);
      function E(e, u, a) {
        let E = (0, o.useRef)(''),
          { locale: b, direction: $ } = (0, n.Y)(),
          F = (function () {
            var e;
            let { locale: u } = (0, n.Y)(),
              a = (0, i.e)((e = r.A) && e.__esModule ? e.default : e, '@react-aria/datepicker');
            return (0, o.useMemo)(() => {
              try {
                return new Intl.DisplayNames(u, { type: 'dateTimeField' });
              } catch {
                return new d(u, a);
              }
            }, [u, a]);
          })(),
          {
            ariaLabel: R,
            ariaLabelledBy: k,
            ariaDescribedBy: A,
            focusManager: P,
          } = (0, t.OX).get(u),
          w = e.isPlaceholder ? '' : e.text,
          V = (0, o.useMemo)(() => u.dateFormatter.resolvedOptions(), [u.dateFormatter]),
          S = (0, B.i)({ month: 'long', timeZone: V.timeZone }),
          M = (0, B.i)({ hour: 'numeric', hour12: V.hour12, timeZone: V.timeZone });
        if ('month' !== e.type || e.isPlaceholder)
          'hour' !== e.type || e.isPlaceholder || (w = M.format(u.dateValue));
        else {
          let e = S.format(u.dateValue);
          w = e !== w ? `${w} \u{2013} ${e}` : e;
        }
        let { spinButtonProps: j } = (0, C.y)({
            value: e.value,
            textValue: w,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: u.isDisabled,
            isReadOnly: u.isReadOnly || !e.isEditable,
            isRequired: u.isRequired,
            onIncrement: () => {
              (E.current = ''), u.increment(e.type);
            },
            onDecrement: () => {
              (E.current = ''), u.decrement(e.type);
            },
            onIncrementPage: () => {
              (E.current = ''), u.incrementPage(e.type);
            },
            onDecrementPage: () => {
              (E.current = ''), u.decrementPage(e.type);
            },
            onIncrementToMax: () => {
              (E.current = ''), void 0 !== e.maxValue && u.setSegment(e.type, e.maxValue);
            },
            onDecrementToMin: () => {
              (E.current = ''), void 0 !== e.minValue && u.setSegment(e.type, e.minValue);
            },
          }),
          z = (0, o.useMemo)(() => new v.d(b, { maximumFractionDigits: 0 }), [b]),
          I = () => {
            if (
              (e.text === e.placeholder && P.focusPrevious(),
              !z.isValidPartialNumber(e.text) || u.isReadOnly || e.isPlaceholder)
            )
              'dayPeriod' === e.type && u.clearSegment(e.type);
            else {
              let a = e.text.slice(0, -1),
                t = z.parse(a);
              0 === (a = 0 === t ? '' : a).length || 0 === t
                ? u.clearSegment(e.type)
                : u.setSegment(e.type, t),
                (E.current = a);
            }
          },
          { startsWith: O } = (0, x.U)({ sensitivity: 'base' }),
          T = (0, B.i)({ hour: 'numeric', hour12: !0 }),
          Z = (0, o.useMemo)(() => {
            let e = new Date();
            return e.setHours(0), T.formatToParts(e).find((e) => 'dayPeriod' === e.type).value;
          }, [T]),
          U = (0, o.useMemo)(() => {
            let e = new Date();
            return e.setHours(12), T.formatToParts(e).find((e) => 'dayPeriod' === e.type).value;
          }, [T]),
          N = (0, B.i)({ year: 'numeric', era: 'narrow', timeZone: 'UTC' }),
          K = (0, o.useMemo)(() => {
            if ('era' !== e.type) return [];
            let a = (0, l.yP)(new s.ng(1, 1, 1), u.calendar),
              t = u.calendar.getEras().map((e) => {
                let u = a.set({ year: 1, month: 1, day: 1, era: e }).toDate('UTC');
                return {
                  era: e,
                  formatted: N.formatToParts(u).find((e) => 'era' === e.type).value,
                };
              }),
              r = (function (e) {
                e.sort();
                let u = e[0],
                  a = e[e.length - 1];
                for (let e = 0; e < u.length; e++) if (u[e] !== a[e]) return e;
                return 0;
              })(t.map((e) => e.formatted));
            if (r) for (let e of t) e.formatted = e.formatted.slice(r);
            return t;
          }, [N, u.calendar, e.type]),
          L = (a) => {
            if (u.isDisabled || u.isReadOnly) return;
            let t = E.current + a;
            switch (e.type) {
              case 'dayPeriod':
                if (O(Z, a)) u.setSegment('dayPeriod', 0);
                else if (O(U, a)) u.setSegment('dayPeriod', 12);
                else break;
                P.focusNext();
                break;
              case 'era': {
                let e = K.find((e) => O(e.formatted, a));
                e && (u.setSegment('era', e.era), P.focusNext());
                break;
              }
              case 'day':
              case 'hour':
              case 'minute':
              case 'second':
              case 'month':
              case 'year': {
                if (!z.isValidPartialNumber(t)) return;
                let r = z.parse(t),
                  n = r,
                  i = 0 === e.minValue;
                if ('hour' === e.type && u.dateFormatter.resolvedOptions().hour12) {
                  switch (u.dateFormatter.resolvedOptions().hourCycle) {
                    case 'h11':
                      r > 11 && (n = z.parse(a));
                      break;
                    case 'h12':
                      (i = !1), r > 12 && (n = z.parse(a));
                  }
                  void 0 !== e.value && e.value >= 12 && r > 1 && (r += 12);
                } else void 0 !== e.maxValue && r > e.maxValue && (n = z.parse(a));
                if (isNaN(r)) return;
                let o = 0 !== n || i;
                o && u.setSegment(e.type, n),
                  void 0 !== e.maxValue &&
                  (Number(r + '0') > e.maxValue || t.length >= String(e.maxValue).length)
                    ? ((E.current = ''), o && P.focusNext())
                    : (E.current = t);
              }
            }
          },
          J = (0, o.useRef)('undefined' != typeof document ? document : null);
        (0, y._)(J, 'selectionchange', () => {
          var e;
          let u = window.getSelection();
          (null == u ? void 0 : u.anchorNode) &&
            (null === (e = a.current) || void 0 === e
              ? void 0
              : e.contains(null == u ? void 0 : u.anchorNode)) &&
            u.collapse(a.current);
        });
        let W = (0, o.useRef)('');
        (0, y._)(a, 'beforeinput', (t) => {
          if (a.current)
            switch ((t.preventDefault(), t.inputType)) {
              case 'deleteContentBackward':
              case 'deleteContentForward':
                z.isValidPartialNumber(e.text) && !u.isReadOnly && I();
                break;
              case 'insertCompositionText':
                (W.current = a.current.textContent),
                  (a.current.textContent = a.current.textContent);
                break;
              default:
                null != t.data && L(t.data);
            }
        }),
          (0, y._)(a, 'input', (e) => {
            let { inputType: u, data: t } = e;
            'insertCompositionText' === u &&
              (a.current && (a.current.textContent = W.current),
              null != t && (O(Z, t) || O(U, t)) && L(t));
          }),
          (0, g.N)(() => {
            let e = a.current;
            return () => {
              document.activeElement !== e || P.focusPrevious() || P.focusNext();
            };
          }, [a, P]);
        let q =
          (0, D.un)() || 'timeZoneName' === e.type
            ? {
                role: 'textbox',
                'aria-valuemax': null,
                'aria-valuemin': null,
                'aria-valuetext': null,
                'aria-valuenow': null,
              }
            : {};
        e === (0, o.useMemo)(() => u.segments.find((e) => e.isEditable), [u.segments]) ||
          u.isInvalid ||
          (A = void 0);
        let G = (0, p.Bi)(),
          _ = !u.isDisabled && !u.isReadOnly && e.isEditable,
          Q = 'literal' === e.type ? '' : F.of(e.type),
          H = (0, h.b)({
            'aria-label': `${Q}${R ? `, ${R}` : ''}${k ? ', ' : ''}`,
            'aria-labelledby': k,
          });
        if ('literal' === e.type) return { segmentProps: { 'aria-hidden': !0 } };
        let Y = { caretColor: 'transparent' };
        if ('rtl' === $) {
          Y.unicodeBidi = 'embed';
          let u = V[e.type];
          ('numeric' === u || '2-digit' === u) && (Y.direction = 'ltr');
        }
        return {
          segmentProps: (0, f.v)(j, H, {
            id: G,
            ...q,
            'aria-invalid': u.isInvalid ? 'true' : void 0,
            'aria-describedby': A,
            'aria-readonly': u.isReadOnly || !e.isEditable ? 'true' : void 0,
            'data-placeholder': e.isPlaceholder || void 0,
            contentEditable: _,
            suppressContentEditableWarning: _,
            spellCheck: _ ? 'false' : void 0,
            autoCorrect: _ ? 'off' : void 0,
            [parseInt(o.version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: _ ? 'next' : void 0,
            inputMode:
              u.isDisabled || 'dayPeriod' === e.type || 'era' === e.type || !_ ? void 0 : 'numeric',
            tabIndex: u.isDisabled ? void 0 : 0,
            onKeyDown: (e) => {
              if (
                ('a' === e.key && ((0, D.cX)() ? e.metaKey : e.ctrlKey) && e.preventDefault(),
                !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)
              )
                switch (e.key) {
                  case 'Backspace':
                  case 'Delete':
                    e.preventDefault(), e.stopPropagation(), I();
                }
            },
            onFocus: () => {
              (E.current = ''),
                a.current && (0, m.o)(a.current, { containingElement: (0, c.m)(a.current) });
              let e = window.getSelection();
              null == e || e.collapse(a.current);
            },
            style: Y,
            onPointerDown(e) {
              e.stopPropagation();
            },
            onMouseDown(e) {
              e.stopPropagation();
            },
          }),
        };
      }
    },
    22306: (e, u, a) => {
      a.d(u, { F: () => g });
      var t = a(41310);
      let r = new (a(21457).B)(
        {
          ach: { year: 'mwaka', month: 'dwe', day: 'nino' },
          af: { year: 'jjjj', month: 'mm', day: 'dd' },
          am: { year: 'ዓዓዓዓ', month: 'ሚሜ', day: 'ቀቀ' },
          an: { year: 'aaaa', month: 'mm', day: 'dd' },
          ar: { year: 'سنة', month: 'شهر', day: 'يوم' },
          ast: { year: 'aaaa', month: 'mm', day: 'dd' },
          az: { year: 'iiii', month: 'aa', day: 'gg' },
          be: { year: 'гггг', month: 'мм', day: 'дд' },
          bg: { year: 'гггг', month: 'мм', day: 'дд' },
          bn: { year: 'yyyy', month: 'মিমি', day: 'dd' },
          br: { year: 'bbbb', month: 'mm', day: 'dd' },
          bs: { year: 'gggg', month: 'mm', day: 'dd' },
          ca: { year: 'aaaa', month: 'mm', day: 'dd' },
          cak: { year: 'jjjj', month: 'ii', day: "q'q'" },
          ckb: { year: 'ساڵ', month: 'مانگ', day: 'ڕۆژ' },
          cs: { year: 'rrrr', month: 'mm', day: 'dd' },
          cy: { year: 'bbbb', month: 'mm', day: 'dd' },
          da: { year: '\xe5\xe5\xe5\xe5', month: 'mm', day: 'dd' },
          de: { year: 'jjjj', month: 'mm', day: 'tt' },
          dsb: { year: 'llll', month: 'mm', day: 'źź' },
          el: { year: 'εεεε', month: 'μμ', day: 'ηη' },
          en: { year: 'yyyy', month: 'mm', day: 'dd' },
          eo: { year: 'jjjj', month: 'mm', day: 'tt' },
          es: { year: 'aaaa', month: 'mm', day: 'dd' },
          et: { year: 'aaaa', month: 'kk', day: 'pp' },
          eu: { year: 'uuuu', month: 'hh', day: 'ee' },
          fa: { year: 'سال', month: 'ماه', day: 'روز' },
          ff: { year: 'hhhh', month: 'll', day: '\xf1\xf1' },
          fi: { year: 'vvvv', month: 'kk', day: 'pp' },
          fr: { year: 'aaaa', month: 'mm', day: 'jj' },
          fy: { year: 'jjjj', month: 'mm', day: 'dd' },
          ga: { year: 'bbbb', month: 'mm', day: 'll' },
          gd: { year: 'bbbb', month: 'mm', day: 'll' },
          gl: { year: 'aaaa', month: 'mm', day: 'dd' },
          he: { year: 'שנה', month: 'חודש', day: 'יום' },
          hr: { year: 'gggg', month: 'mm', day: 'dd' },
          hsb: { year: 'llll', month: 'mm', day: 'dd' },
          hu: { year: '\xe9\xe9\xe9\xe9', month: 'hh', day: 'nn' },
          ia: { year: 'aaaa', month: 'mm', day: 'dd' },
          id: { year: 'tttt', month: 'bb', day: 'hh' },
          it: { year: 'aaaa', month: 'mm', day: 'gg' },
          ja: { year: '年', month: '月', day: '日' },
          ka: { year: 'წწწწ', month: 'თთ', day: 'რრ' },
          kk: { year: 'жжжж', month: 'аа', day: 'кк' },
          kn: { year: 'ವವವವ', month: 'ಮಿಮೀ', day: 'ದಿದಿ' },
          ko: { year: '연도', month: '월', day: '일' },
          lb: { year: 'jjjj', month: 'mm', day: 'dd' },
          lo: { year: 'ປປປປ', month: 'ດດ', day: 'ວວ' },
          lt: { year: 'mmmm', month: 'mm', day: 'dd' },
          lv: { year: 'gggg', month: 'mm', day: 'dd' },
          meh: { year: 'aaaa', month: 'mm', day: 'dd' },
          ml: { year: 'വർഷം', month: 'മാസം', day: 'തീയതി' },
          ms: { year: 'tttt', month: 'mm', day: 'hh' },
          nl: { year: 'jjjj', month: 'mm', day: 'dd' },
          nn: { year: '\xe5\xe5\xe5\xe5', month: 'mm', day: 'dd' },
          no: { year: '\xe5\xe5\xe5\xe5', month: 'mm', day: 'dd' },
          oc: { year: 'aaaa', month: 'mm', day: 'jj' },
          pl: { year: 'rrrr', month: 'mm', day: 'dd' },
          pt: { year: 'aaaa', month: 'mm', day: 'dd' },
          rm: { year: 'oooo', month: 'mm', day: 'dd' },
          ro: { year: 'aaaa', month: 'll', day: 'zz' },
          ru: { year: 'гггг', month: 'мм', day: 'дд' },
          sc: { year: 'aaaa', month: 'mm', day: 'dd' },
          scn: { year: 'aaaa', month: 'mm', day: 'jj' },
          sk: { year: 'rrrr', month: 'mm', day: 'dd' },
          sl: { year: 'llll', month: 'mm', day: 'dd' },
          sr: { year: 'гггг', month: 'мм', day: 'дд' },
          sv: { year: '\xe5\xe5\xe5\xe5', month: 'mm', day: 'dd' },
          szl: { year: 'rrrr', month: 'mm', day: 'dd' },
          tg: { year: 'сссс', month: 'мм', day: 'рр' },
          th: { year: 'ปปปป', month: 'ดด', day: 'วว' },
          tr: { year: 'yyyy', month: 'aa', day: 'gg' },
          uk: { year: 'рррр', month: 'мм', day: 'дд' },
          'zh-CN': { year: '年', month: '月', day: '日' },
          'zh-TW': { year: '年', month: '月', day: '日' },
        },
        'en'
      );
      var n = a(92738),
        i = a(93072),
        o = a(10794),
        d = a(13402),
        l = a(32871),
        s = a(38731),
        D = a(7620);
      let m = {
          year: !0,
          month: !0,
          day: !0,
          hour: !0,
          minute: !0,
          second: !0,
          dayPeriod: !0,
          era: !0,
        },
        c = { year: 5, month: 2, day: 7, hour: 2, minute: 15, second: 15 },
        y = { dayperiod: 'dayPeriod' };
      function g(e) {
        var u, a;
        let {
            locale: g,
            createCalendar: h,
            hideTimeZone: f,
            isDisabled: v = !1,
            isReadOnly: B = !1,
            isRequired: x = !1,
            minValue: C,
            maxValue: E,
            isDateUnavailable: b,
          } = e,
          $ = e.value || e.defaultValue || e.placeholderValue || null,
          [F, R] = (0, t.bf)($, e.granularity),
          k = R || 'UTC';
        if ($ && !(F in $)) throw Error('Invalid granularity ' + F + ' for value ' + $.toString());
        let A = (0, D.useMemo)(() => new n.p(g), [g]),
          P = (0, D.useMemo)(() => h(A.resolvedOptions().calendar), [h, A]),
          [w, V] = (0, s.P)(
            e.value,
            null !== (u = e.defaultValue) && void 0 !== u ? u : null,
            e.onChange
          ),
          S = (0, D.useMemo)(() => {
            var e;
            return null !== (e = (0, t.nf)(w, P)) && void 0 !== e ? e : null;
          }, [w, P]),
          [M, j] = (0, D.useState)(() => (0, t.o_)(e.placeholderValue, F, P, R)),
          z = 'gregory' === P.identifier && 'BC' === (S || M).era,
          I = (0, D.useMemo)(() => {
            var u;
            return {
              granularity: F,
              maxGranularity: null !== (u = e.maxGranularity) && void 0 !== u ? u : 'year',
              timeZone: R,
              hideTimeZone: f,
              hourCycle: e.hourCycle,
              showEra: z,
              shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            };
          }, [e.maxGranularity, F, e.hourCycle, e.shouldForceLeadingZeros, R, f, z]),
          O = (0, D.useMemo)(() => (0, t.id)({}, I), [I]),
          T = (0, D.useMemo)(() => new n.p(g, O), [g, O]),
          Z = (0, D.useMemo)(() => T.resolvedOptions(), [T]),
          U = (0, D.useMemo)(
            () =>
              T.formatToParts(new Date())
                .filter((e) => m[e.type])
                .reduce((e, u) => ((e[u.type] = !0), e), {}),
            [T]
          ),
          [N, K] = (0, D.useState)(() => (e.value || e.defaultValue ? { ...U } : {})),
          L = (0, D.useRef)(null),
          J = (0, D.useRef)(P);
        (0, D.useEffect)(() => {
          (0, i.Jg)(P, J.current) ||
            ((J.current = P),
            j((u) =>
              Object.keys(N).length > 0 ? (0, o.yP)(u, P) : (0, t.o_)(e.placeholderValue, F, P, R)
            ));
        }, [P, F, N, R, e.placeholderValue]),
          w && Object.keys(N).length < Object.keys(U).length && K((N = { ...U })),
          null == w &&
            Object.keys(N).length === Object.keys(U).length &&
            (K((N = {})), j((0, t.o_)(e.placeholderValue, F, P, R)));
        let W = S && Object.keys(N).length >= Object.keys(U).length ? S : M,
          q = (u) => {
            if (e.isDisabled || e.isReadOnly) return;
            let a = Object.keys(N),
              r = Object.keys(U);
            null == u
              ? (V(null), j((0, t.o_)(e.placeholderValue, F, P, R)), K({}))
              : a.length >= r.length ||
                  (a.length === r.length - 1 &&
                    U.dayPeriod &&
                    !N.dayPeriod &&
                    'dayPeriod' !== L.current)
                ? V((u = (0, o.yP)(u, (null == $ ? void 0 : $.calendar) || new d.FG())))
                : j(u),
              (L.current = null);
          },
          G = (0, D.useMemo)(() => W.toDate(k), [W, k]),
          _ = (0, D.useMemo)(
            () =>
              (function (e, u, a, t, n, i, o, d) {
                let l = ['hour', 'minute', 'second'],
                  s = a.formatToParts(e),
                  D = [];
                for (let e of s) {
                  var c, g;
                  let a = m[e.type];
                  'era' === e.type && 1 === i.getEras().length && (a = !1);
                  let s = m[e.type] && !u[e.type],
                    h = m[e.type]
                      ? ((c = e.type),
                        (g = e.value),
                        'era' === c || 'dayPeriod' === c
                          ? g
                          : 'year' === c || 'month' === c || 'day' === c
                            ? r.getStringForLocale(c, o)
                            : '––')
                      : null,
                    f = {
                      type: y[e.type] || e.type,
                      text: s ? h : e.value,
                      ...p(n, e.type, t),
                      isPlaceholder: s,
                      placeholder: h,
                      isEditable: a,
                    };
                  'hour' === e.type
                    ? (D.push({
                        type: 'literal',
                        text: '⁦',
                        ...p(n, 'literal', t),
                        isPlaceholder: !1,
                        placeholder: '',
                        isEditable: !1,
                      }),
                      D.push(f),
                      e.type === d &&
                        D.push({
                          type: 'literal',
                          text: '⁩',
                          ...p(n, 'literal', t),
                          isPlaceholder: !1,
                          placeholder: '',
                          isEditable: !1,
                        }))
                    : l.includes(e.type) && e.type === d
                      ? (D.push(f),
                        D.push({
                          type: 'literal',
                          text: '⁩',
                          ...p(n, 'literal', t),
                          isPlaceholder: !1,
                          placeholder: '',
                          isEditable: !1,
                        }))
                      : D.push(f);
                }
                return D;
              })(G, N, T, Z, W, P, g, F),
            [G, N, T, Z, W, P, g, F]
          );
        U.era && N.year && !N.era
          ? ((N.era = !0), K({ ...N }))
          : !U.era && N.era && (delete N.era, K({ ...N }));
        let Q = (e) => {
            (N[e] = !0), 'year' === e && U.era && (N.era = !0), K({ ...N });
          },
          H = (e, u) => {
            if (N[e])
              q(
                (function (e, u, a, t) {
                  switch (u) {
                    case 'era':
                    case 'year':
                    case 'month':
                    case 'day':
                      return e.cycle(u, a, { round: 'year' === u });
                  }
                  if ('hour' in e)
                    switch (u) {
                      case 'dayPeriod': {
                        let u = e.hour;
                        return e.set({ hour: u >= 12 ? u - 12 : u + 12 });
                      }
                      case 'hour':
                      case 'minute':
                      case 'second':
                        return e.cycle(u, a, {
                          round: 'hour' !== u,
                          hourCycle: t.hour12 ? 12 : 24,
                        });
                    }
                  throw Error('Unknown segment: ' + u);
                })(W, e, u, Z)
              );
            else {
              Q(e);
              let u = Object.keys(N),
                a = Object.keys(U);
              (u.length >= a.length ||
                (u.length === a.length - 1 && U.dayPeriod && !N.dayPeriod)) &&
                q(W);
            }
          },
          Y = (0, D.useMemo)(() => (0, t.nz)(w, C, E, b, I), [w, C, E, b, I]),
          X = (0, l.KZ)({ ...e, value: w, builtinValidation: Y }),
          ee = X.displayValidation.isInvalid,
          eu = e.validationState || (ee ? 'invalid' : null);
        return {
          ...X,
          value: S,
          dateValue: G,
          calendar: P,
          setValue: q,
          segments: _,
          dateFormatter: T,
          validationState: eu,
          isInvalid: ee,
          granularity: F,
          maxGranularity: null !== (a = e.maxGranularity) && void 0 !== a ? a : 'year',
          isDisabled: v,
          isReadOnly: B,
          isRequired: x,
          increment(e) {
            H(e, 1);
          },
          decrement(e) {
            H(e, -1);
          },
          incrementPage(e) {
            H(e, c[e] || 1);
          },
          decrementPage(e) {
            H(e, -(c[e] || 1));
          },
          setSegment(e, u) {
            Q(e),
              q(
                (function (e, u, a, t) {
                  switch (u) {
                    case 'day':
                    case 'month':
                    case 'year':
                    case 'era':
                      return e.set({ [u]: a });
                  }
                  if ('hour' in e && 'number' == typeof a)
                    switch (u) {
                      case 'dayPeriod': {
                        let u = e.hour,
                          t = u >= 12;
                        if (a >= 12 === t) return e;
                        return e.set({ hour: t ? u - 12 : u + 12 });
                      }
                      case 'hour':
                        if (t.hour12) {
                          let u = e.hour >= 12;
                          u || 12 !== a || (a = 0), u && a < 12 && (a += 12);
                        }
                      case 'minute':
                      case 'second':
                        return e.set({ [u]: a });
                    }
                  throw Error('Unknown segment: ' + u);
                })(W, e, u, Z)
              );
          },
          confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let u = Object.keys(N),
              a = Object.keys(U);
            u.length === a.length - 1 &&
              U.dayPeriod &&
              !N.dayPeriod &&
              (K((N = { ...U })), q(W.copy()));
          },
          clearSegment(u) {
            delete N[u], (L.current = u), K({ ...N });
            let a = (0, t.o_)(e.placeholderValue, F, P, R),
              r = W;
            if ('dayPeriod' === u && 'hour' in W && 'hour' in a) {
              let e = W.hour >= 12,
                u = a.hour >= 12;
              e && !u
                ? (r = W.set({ hour: W.hour - 12 }))
                : !e && u && (r = W.set({ hour: W.hour + 12 }));
            } else
              'hour' === u && 'hour' in W && W.hour >= 12 && N.dayPeriod
                ? (r = W.set({ hour: a.hour + 12 }))
                : u in W && (r = W.set({ [u]: a[u] }));
            V(null), q(r);
          },
          formatValue(e) {
            if (!S) return '';
            let u = (0, t.id)(e, I);
            return new n.p(g, u).format(G);
          },
          getDateFormatter(e, u) {
            let a = { ...I, ...u },
              r = (0, t.id)({}, a);
            return new n.p(e, r);
          },
        };
      }
      function p(e, u, a) {
        switch (u) {
          case 'era': {
            let u = e.calendar.getEras();
            return { value: u.indexOf(e.era), minValue: 0, maxValue: u.length - 1 };
          }
          case 'year':
            return { value: e.year, minValue: 1, maxValue: e.calendar.getYearsInEra(e) };
          case 'month':
            return {
              value: e.month,
              minValue: (0, i.xz)(e),
              maxValue: e.calendar.getMonthsInYear(e),
            };
          case 'day':
            return { value: e.day, minValue: (0, i.oT)(e), maxValue: e.calendar.getDaysInMonth(e) };
        }
        if ('hour' in e)
          switch (u) {
            case 'dayPeriod':
              return { value: 12 * (e.hour >= 12), minValue: 0, maxValue: 12 };
            case 'hour':
              if (a.hour12) {
                let u = e.hour >= 12;
                return { value: e.hour, minValue: 12 * !!u, maxValue: u ? 23 : 11 };
              }
              return { value: e.hour, minValue: 0, maxValue: 23 };
            case 'minute':
              return { value: e.minute, minValue: 0, maxValue: 59 };
            case 'second':
              return { value: e.second, minValue: 0, maxValue: 59 };
          }
        return {};
      }
    },
    41310: (e, u, a) => {
      a.d(u, { nf: () => H, o_: () => Y, id: () => _, $l: () => Q, nz: () => W, bf: () => X });
      var t = {},
        r = {},
        n = {},
        i = {},
        o = {},
        d = {},
        l = {},
        s = {},
        D = {},
        m = {},
        c = {},
        y = {},
        g = {},
        p = {},
        h = {},
        f = {},
        v = {},
        B = {},
        x = {},
        C = {},
        E = {},
        b = {},
        $ = {},
        F = {},
        R = {},
        k = {},
        A = {},
        P = {},
        w = {},
        V = {},
        S = {},
        M = {},
        j = {},
        z = {},
        I = {};
      I = {
        'ar-AE': {
          rangeOverflow: (e) =>
            `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,
          rangeReversed: `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{628}\u{62F}\u{621} \u{64A}\u{62C}\u{628} \u{623}\u{646} \u{64A}\u{643}\u{648}\u{646} \u{642}\u{628}\u{644} \u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{627}\u{646}\u{62A}\u{647}\u{627}\u{621}.`,
          rangeUnderflow: (e) =>
            `\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,
          unavailableDate: `\u{627}\u{644}\u{628}\u{64A}\u{627}\u{646}\u{627}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}\u{629} \u{63A}\u{64A}\u{631} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
        },
        'bg-BG': {
          rangeOverflow: (e) =>
            `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,
          rangeReversed: `\u{41D}\u{430}\u{447}\u{430}\u{43B}\u{43D}\u{430}\u{442}\u{430} \u{434}\u{430}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} \u{43F}\u{440}\u{435}\u{434}\u{438} \u{43A}\u{440}\u{430}\u{439}\u{43D}\u{430}\u{442}\u{430}.`,
          rangeUnderflow: (e) =>
            `\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,
          unavailableDate: `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430}\u{442}\u{430} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435} \u{435} \u{43D}\u{430}\u{43B}\u{438}\u{447}\u{43D}\u{430}.`,
        },
        'cs-CZ': {
          rangeOverflow: (e) =>
            `Hodnota mus\xed b\xfdt ${e.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,
          rangeReversed: `Datum zah\xe1jen\xed mus\xed p\u{159}edch\xe1zet datu ukon\u{10D}en\xed.`,
          rangeUnderflow: (e) =>
            `Hodnota mus\xed b\xfdt ${e.minValue} nebo pozd\u{11B}j\u{161}\xed.`,
          unavailableDate: `Vybran\xe9 datum nen\xed k dispozici.`,
        },
        'da-DK': {
          rangeOverflow: (e) => `V\xe6rdien skal v\xe6re ${e.maxValue} eller tidligere.`,
          rangeReversed: `Startdatoen skal v\xe6re f\xf8r slutdatoen.`,
          rangeUnderflow: (e) => `V\xe6rdien skal v\xe6re ${e.minValue} eller nyere.`,
          unavailableDate: `Den valgte dato er ikke tilg\xe6ngelig.`,
        },
        'de-DE': {
          rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder fr\xfcher sein.`,
          rangeReversed: 'Das Anfangsdatum muss vor dem Enddatum liegen.',
          rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder sp\xe4ter sein.`,
          unavailableDate: `Das ausgew\xe4hlte Datum ist nicht verf\xfcgbar.`,
        },
        'el-GR': {
          rangeOverflow: (e) =>
            `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
          rangeReversed: `\u{397} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7}\u{3C2} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} \u{3C0}\u{3C1}\u{3B9}\u{3BD} \u{3B1}\u{3C0}\u{3CC} \u{3C4}\u{3B7}\u{3BD} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3BB}\u{3AE}\u{3BE}\u{3B7}\u{3C2}.`,
          rangeUnderflow: (e) =>
            `\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,
          unavailableDate: `\u{397} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3B4}\u{3B5}\u{3BD} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B7}.`,
        },
        'en-US': {
          rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
          rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
          rangeReversed: 'Start date must be before end date.',
          unavailableDate: 'Selected date unavailable.',
        },
        'es-ES': {
          rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
          rangeReversed: `La fecha de inicio debe ser anterior a la fecha de finalizaci\xf3n.`,
          rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
          unavailableDate: 'Fecha seleccionada no disponible.',
        },
        'et-EE': {
          rangeOverflow: (e) => `V\xe4\xe4rtus peab olema ${e.maxValue} v\xf5i varasem.`,
          rangeReversed: `Alguskuup\xe4ev peab olema enne l\xf5ppkuup\xe4eva.`,
          rangeUnderflow: (e) => `V\xe4\xe4rtus peab olema ${e.minValue} v\xf5i hilisem.`,
          unavailableDate: `Valitud kuup\xe4ev pole saadaval.`,
        },
        'fi-FI': {
          rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sit\xe4 aikaisempi.`,
          rangeReversed: `Aloitusp\xe4iv\xe4n on oltava ennen lopetusp\xe4iv\xe4\xe4.`,
          rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,
          unavailableDate: `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4 ei ole k\xe4ytett\xe4viss\xe4.`,
        },
        'fr-FR': {
          rangeOverflow: (e) => `La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,
          rangeReversed: `La date de d\xe9but doit \xeatre ant\xe9rieure \xe0 la date de fin.`,
          rangeUnderflow: (e) => `La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,
          unavailableDate: `La date s\xe9lectionn\xe9e n\u{2019}est pas disponible.`,
        },
        'he-IL': {
          rangeOverflow: (e) =>
            `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
          rangeReversed: `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5D4} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} \u{5DC}\u{5E4}\u{5E0}\u{5D9} \u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5E1}\u{5D9}\u{5D5}\u{5DD}.`,
          rangeUnderflow: (e) =>
            `\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,
          unavailableDate: `\u{5D4}\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5E0}\u{5D1}\u{5D7}\u{5E8} \u{5D0}\u{5D9}\u{5E0}\u{5D5} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
        },
        'hr-HR': {
          rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
          rangeReversed: `Datum po\u{10D}etka mora biti prije datuma zavr\u{161}etka.`,
          rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
          unavailableDate: 'Odabrani datum nije dostupan.',
        },
        'hu-HU': {
          rangeOverflow: (e) => `Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,
          rangeReversed: `A kezd\u{151} d\xe1tumnak a befejez\u{151} d\xe1tumn\xe1l kor\xe1bbinak kell lennie.`,
          rangeUnderflow: (e) =>
            `Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,
          unavailableDate: `A kiv\xe1lasztott d\xe1tum nem \xe9rhet\u{151} el.`,
        },
        'it-IT': {
          rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
          rangeReversed: 'La data di inizio deve essere antecedente alla data di fine.',
          rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
          unavailableDate: 'Data selezionata non disponibile.',
        },
        'ja-JP': {
          rangeOverflow: (e) =>
            `\u{5024}\u{306F} ${e.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
          rangeReversed: `\u{958B}\u{59CB}\u{65E5}\u{306F}\u{7D42}\u{4E86}\u{65E5}\u{3088}\u{308A}\u{524D}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
          rangeUnderflow: (e) =>
            `\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,
          unavailableDate: `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8}\u{306F}\u{4F7F}\u{7528}\u{3067}\u{304D}\u{307E}\u{305B}\u{3093}\u{3002}`,
        },
        'ko-KR': {
          rangeOverflow: (e) =>
            `\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
          rangeReversed: `\u{C2DC}\u{C791}\u{C77C}\u{C740} \u{C885}\u{B8CC}\u{C77C} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
          rangeUnderflow: (e) =>
            `\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{C0C1}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,
          unavailableDate: `\u{C120}\u{D0DD}\u{D55C} \u{B0A0}\u{C9DC}\u{B97C} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C5C6}\u{C2B5}\u{B2C8}\u{B2E4}.`,
        },
        'lt-LT': {
          rangeOverflow: (e) =>
            `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.maxValue} arba ankstesn\u{117}.`,
          rangeReversed: `Prad\u{17E}ios data turi b\u{16B}ti ankstesn\u{117} nei pabaigos data.`,
          rangeUnderflow: (e) =>
            `Reik\u{161}m\u{117} turi b\u{16B}ti ${e.minValue} arba naujesn\u{117}.`,
          unavailableDate: 'Pasirinkta data nepasiekiama.',
        },
        'lv-LV': {
          rangeOverflow: (e) =>
            `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.maxValue} vai agr\u{101}kai.`,
          rangeReversed: `S\u{101}kuma datumam ir j\u{101}b\u{16B}t pirms beigu datuma.`,
          rangeUnderflow: (e) =>
            `V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.minValue} vai v\u{113}l\u{101}kai.`,
          unavailableDate: `Atlas\u{12B}tais datums nav pieejams.`,
        },
        'nb-NO': {
          rangeOverflow: (e) => `Verdien m\xe5 v\xe6re ${e.maxValue} eller tidligere.`,
          rangeReversed: `Startdatoen m\xe5 v\xe6re f\xf8r sluttdatoen.`,
          rangeUnderflow: (e) => `Verdien m\xe5 v\xe6re ${e.minValue} eller senere.`,
          unavailableDate: 'Valgt dato utilgjengelig.',
        },
        'nl-NL': {
          rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
          rangeReversed: 'De startdatum moet voor de einddatum liggen.',
          rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
          unavailableDate: 'Geselecteerde datum niet beschikbaar.',
        },
        'pl-PL': {
          rangeOverflow: (e) =>
            `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.maxValue} lub wcze\u{15B}niejsz\u{105}.`,
          rangeReversed: `Data rozpocz\u{119}cia musi by\u{107} wcze\u{15B}niejsza ni\u{17C} data zako\u{144}czenia.`,
          rangeUnderflow: (e) =>
            `Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,
          unavailableDate: `Wybrana data jest niedost\u{119}pna.`,
        },
        'pt-BR': {
          rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
          rangeReversed: `A data inicial deve ser anterior \xe0 data final.`,
          rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
          unavailableDate: `Data selecionada indispon\xedvel.`,
        },
        'pt-PT': {
          rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
          rangeReversed: `A data de in\xedcio deve ser anterior \xe0 data de fim.`,
          rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
          unavailableDate: `Data selecionada indispon\xedvel.`,
        },
        'ro-RO': {
          rangeOverflow: (e) => `Valoarea trebuie s\u{103} fie ${e.maxValue} sau anterioar\u{103}.`,
          rangeReversed: `Data de \xeenceput trebuie s\u{103} fie anterioar\u{103} datei de sf\xe2r\u{219}it.`,
          rangeUnderflow: (e) =>
            `Valoarea trebuie s\u{103} fie ${e.minValue} sau ulterioar\u{103}.`,
          unavailableDate: `Data selectat\u{103} nu este disponibil\u{103}.`,
        },
        'ru-RU': {
          rangeOverflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${e.maxValue}.`,
          rangeReversed: `\u{414}\u{430}\u{442}\u{430} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{430} \u{43F}\u{440}\u{435}\u{434}\u{448}\u{435}\u{441}\u{442}\u{432}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{434}\u{430}\u{442}\u{435} \u{43E}\u{43A}\u{43E}\u{43D}\u{447}\u{430}\u{43D}\u{438}\u{44F}.`,
          rangeUnderflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${e.minValue}.`,
          unavailableDate: `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}.`,
        },
        'sk-SK': {
          rangeOverflow: (e) => `Hodnota mus\xed by\u{165} ${e.maxValue} alebo skor\u{161}ia.`,
          rangeReversed: `D\xe1tum za\u{10D}iatku mus\xed by\u{165} skor\u{161}\xed ako d\xe1tum konca.`,
          rangeUnderflow: (e) => `Hodnota mus\xed by\u{165} ${e.minValue} alebo neskor\u{161}ia.`,
          unavailableDate: `Vybrat\xfd d\xe1tum je nedostupn\xfd.`,
        },
        'sl-SI': {
          rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starej\u{161}a.`,
          rangeReversed: `Za\u{10D}etni datum mora biti pred kon\u{10D}nim datumom.`,
          rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novej\u{161}a.`,
          unavailableDate: 'Izbrani datum ni na voljo.',
        },
        'sr-SP': {
          rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
          rangeReversed: `Datum po\u{10D}etka mora biti pre datuma zavr\u{161}etka.`,
          rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
          unavailableDate: 'Izabrani datum nije dostupan.',
        },
        'sv-SE': {
          rangeOverflow: (e) => `V\xe4rdet m\xe5ste vara ${e.maxValue} eller tidigare.`,
          rangeReversed: `Startdatumet m\xe5ste vara f\xf6re slutdatumet.`,
          rangeUnderflow: (e) => `V\xe4rdet m\xe5ste vara ${e.minValue} eller senare.`,
          unavailableDate: `Det valda datumet \xe4r inte tillg\xe4ngligt.`,
        },
        'tr-TR': {
          rangeOverflow: (e) => `De\u{11F}er, ${e.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,
          rangeReversed: `Ba\u{15F}lang\u{131}\xe7 tarihi biti\u{15F} tarihinden \xf6nce olmal\u{131}d\u{131}r.`,
          rangeUnderflow: (e) =>
            `De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,
          unavailableDate: `Se\xe7ilen tarih kullan\u{131}lam\u{131}yor.`,
        },
        'uk-UA': {
          rangeOverflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${e.maxValue}.`,
          rangeReversed: `\u{414}\u{430}\u{442}\u{430} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{43A}\u{443} \u{43C}\u{430}\u{454} \u{43F}\u{435}\u{440}\u{435}\u{434}\u{443}\u{432}\u{430}\u{442}\u{438} \u{434}\u{430}\u{442}\u{456} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43D}\u{44F}.`,
          rangeUnderflow: (e) =>
            `\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${e.minValue}.`,
          unavailableDate: `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430} \u{43D}\u{435}\u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}.`,
        },
        'zh-CN': {
          rangeOverflow: (e) =>
            `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,
          rangeReversed: `\u{5F00}\u{59CB}\u{65E5}\u{671F}\u{5FC5}\u{987B}\u{65E9}\u{4E8E}\u{7ED3}\u{675F}\u{65E5}\u{671F}\u{3002}`,
          rangeUnderflow: (e) =>
            `\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,
          unavailableDate: `\u{6240}\u{9009}\u{65E5}\u{671F}\u{4E0D}\u{53EF}\u{7528}\u{3002}`,
        },
        'zh-TW': {
          rangeOverflow: (e) =>
            `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,
          rangeReversed: `\u{958B}\u{59CB}\u{65E5}\u{671F}\u{5FC5}\u{9808}\u{5728}\u{7D50}\u{675F}\u{65E5}\u{671F}\u{4E4B}\u{524D}\u{3002}`,
          rangeUnderflow: (e) =>
            `\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,
          unavailableDate: `\u{6240}\u{9078}\u{65E5}\u{671F}\u{7121}\u{6CD5}\u{4F7F}\u{7528}\u{3002}`,
        },
      };
      var O = a(92738),
        T = a(45820),
        Z = a(10794),
        U = a(93072),
        N = a(21457),
        K = a(26095),
        L = a(7620);
      let J = new N.B(
        (function (e) {
          return e && e.__esModule ? e.default : e;
        })(I)
      );
      function W(e, u, a, t, r) {
        let n = null != e && null != a && e.compare(a) > 0,
          i = null != e && null != u && 0 > e.compare(u),
          o = (null != e && (null == t ? void 0 : t(e))) || !1,
          d = n || i || o,
          l = [];
        if (d) {
          let e =
              ('undefined' != typeof navigator && (navigator.language || navigator.userLanguage)) ||
              'en-US',
            t = (0, N.B).getGlobalDictionaryForPackage('@react-stately/datepicker') || J,
            d = new K.J(e, t),
            s = new O.p(e, _({}, r)),
            D = s.resolvedOptions().timeZone;
          i && null != u && l.push(d.format('rangeUnderflow', { minValue: s.format(u.toDate(D)) })),
            n &&
              null != a &&
              l.push(d.format('rangeOverflow', { maxValue: s.format(a.toDate(D)) })),
            o && l.push(d.format('unavailableDate'));
        }
        return {
          isInvalid: d,
          validationErrors: l,
          validationDetails: {
            badInput: o,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: n,
            rangeUnderflow: i,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valueMissing: !1,
            valid: !d,
          },
        };
      }
      let q = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
        },
        G = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        };
      function _(e, u) {
        var a;
        e = { ...(u.shouldForceLeadingZeros ? G : q), ...e };
        let t = u.granularity || 'minute',
          r = Object.keys(e),
          n = r.indexOf(null !== (a = u.maxGranularity) && void 0 !== a ? a : 'year');
        n < 0 && (n = 0);
        let i = r.indexOf(t);
        if ((i < 0 && (i = 2), n > i))
          throw Error('maxGranularity must be greater than granularity');
        let o = r.slice(n, i + 1).reduce((u, a) => ((u[a] = e[a]), u), {});
        return (
          null != u.hourCycle && (o.hour12 = 12 === u.hourCycle),
          (o.timeZone = u.timeZone || 'UTC'),
          ('hour' === t || 'minute' === t || 'second' === t) &&
            u.timeZone &&
            !u.hideTimeZone &&
            (o.timeZoneName = 'short'),
          u.showEra && 0 === n && (o.era = 'short'),
          o
        );
      }
      function Q(e) {
        return e && 'hour' in e ? e : new T.gX();
      }
      function H(e, u) {
        return null === e ? null : e ? (0, Z.yP)(e, u) : void 0;
      }
      function Y(e, u, a, t) {
        if (e) return H(e, a);
        let r = (0, Z.yP)(
          (0, U.tB)(null != t ? t : (0, U.Xj)()).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
          }),
          a
        );
        return 'year' === u || 'month' === u || 'day' === u ? (0, Z.gw)(r) : t ? r : (0, Z.tR)(r);
      }
      function X(e, u) {
        let a = e && 'timeZone' in e ? e.timeZone : void 0,
          t = e && 'minute' in e ? 'minute' : 'day';
        if (e && u && !(u in e))
          throw Error('Invalid granularity ' + u + ' for value ' + e.toString());
        let [r, n] = (0, L.useState)([t, a]);
        return (
          e && (r[0] !== t || r[1] !== a) && n([t, a]), u || (u = e ? t : r[0]), [u, e ? a : r[1]]
        );
      }
    },
    60736: (e, u, a) => {
      a.d(u, { j: () => s });
      var t = a(41310),
        r = a(10794),
        n = a(92738),
        i = a(32871),
        o = a(86947),
        d = a(38731),
        l = a(7620);
      function s(e) {
        var u;
        let a = (0, o.T)(e),
          [s, D] = (0, d.P)(e.value, e.defaultValue || null, e.onChange),
          m = s || e.placeholderValue || null,
          [c, y] = (0, t.bf)(m, e.granularity),
          g = null != s ? s.toDate(null != y ? y : 'UTC') : null,
          p = 'hour' === c || 'minute' === c || 'second' === c,
          h = null === (u = e.shouldCloseOnSelect) || void 0 === u || u,
          [f, v] = (0, l.useState)(null),
          [B, x] = (0, l.useState)(null);
        if ((s && ((f = s), 'hour' in s && (B = s)), m && !(c in m)))
          throw Error('Invalid granularity ' + c + ' for value ' + m.toString());
        let C = (null == s ? void 0 : s.calendar.identifier) === 'gregory' && 'BC' === s.era,
          E = (0, l.useMemo)(
            () => ({
              granularity: c,
              timeZone: y,
              hideTimeZone: e.hideTimeZone,
              hourCycle: e.hourCycle,
              shouldForceLeadingZeros: e.shouldForceLeadingZeros,
              showEra: C,
            }),
            [c, e.hourCycle, e.shouldForceLeadingZeros, y, e.hideTimeZone, C]
          ),
          { minValue: b, maxValue: $, isDateUnavailable: F } = e,
          R = (0, l.useMemo)(() => (0, t.nz)(s, b, $, F, E), [s, b, $, F, E]),
          k = (0, i.KZ)({ ...e, value: s, builtinValidation: R }),
          A = k.displayValidation.isInvalid,
          P = e.validationState || (A ? 'invalid' : null),
          w = (e, u) => {
            D('timeZone' in u ? u.set((0, r.gw)(e)) : (0, r.tR)(e, u)),
              v(null),
              x(null),
              k.commitValidation();
          };
        return {
          ...k,
          value: s,
          setValue: D,
          dateValue: f,
          timeValue: B,
          setDateValue: (u) => {
            let r = 'function' == typeof h ? h() : h;
            p
              ? B || r
                ? w(u, B || (0, t.$l)(e.defaultValue || e.placeholderValue))
                : v(u)
              : (D(u), k.commitValidation()),
              r && a.setOpen(!1);
          },
          setTimeValue: (e) => {
            f && e ? w(f, e) : x(e);
          },
          granularity: c,
          hasTime: p,
          ...a,
          setOpen(u) {
            !u && !s && f && p && w(f, B || (0, t.$l)(e.defaultValue || e.placeholderValue)),
              a.setOpen(u);
          },
          validationState: P,
          isInvalid: A,
          formatValue(e, u) {
            if (!g) return '';
            let a = (0, t.id)(u, E);
            return new n.p(e, a).format(g);
          },
          getDateFormatter(e, u) {
            let a = { ...E, ...u },
              r = (0, t.id)({}, a);
            return new n.p(e, r);
          },
        };
      }
    },
    69274: (e, u, a) => {
      a.d(u, { T: () => g });
      var t = a(93072),
        r = a(10794);
      function n(e, u, a) {
        return (null != u && 0 > e.compare(u)) || (null != a && e.compare(a) > 0);
      }
      function i(e, u, a, t, r) {
        let n = {};
        for (let e in u) (n[e] = Math.floor(u[e] / 2)), n[e] > 0 && u[e] % 2 == 0 && n[e]--;
        let i = o(e, u, a).subtract(n);
        return l(e, i, u, a, t, r);
      }
      function o(e, u, a, r, n) {
        let i = e;
        return (
          u.years
            ? (i = (0, t.D)(e))
            : u.months
              ? (i = (0, t.wH)(e))
              : u.weeks && (i = (0, t.kq)(e, a)),
          l(e, i, u, a, r, n)
        );
      }
      function d(e, u, a, t, r) {
        let n = { ...u };
        n.days ? n.days-- : n.weeks ? n.weeks-- : n.months ? n.months-- : n.years && n.years--;
        let i = o(e, u, a).subtract(n);
        return l(e, i, u, a, t, r);
      }
      function l(e, u, a, n, i, l) {
        if (i && e.compare(i) >= 0) {
          let e = (0, t.ZI)(u, o((0, r.gw)(i), a, n));
          e && (u = e);
        }
        if (l && 0 >= e.compare(l)) {
          let e = (0, t.Py)(u, d((0, r.gw)(l), a, n));
          e && (u = e);
        }
        return u;
      }
      function s(e, u, a) {
        if (u) {
          let a = (0, t.ZI)(e, (0, r.gw)(u));
          a && (e = a);
        }
        if (a) {
          let u = (0, t.Py)(e, (0, r.gw)(a));
          u && (e = u);
        }
        return e;
      }
      var D = a(92738),
        m = a(13402),
        c = a(38731),
        y = a(7620);
      function g(e) {
        var u, a, g;
        let h = (0, y.useMemo)(() => new D.p(e.locale), [e.locale]),
          f = (0, y.useMemo)(() => h.resolvedOptions(), [h]),
          {
            locale: v,
            createCalendar: B,
            visibleDuration: x = { months: 1 },
            minValue: C,
            maxValue: E,
            selectionAlignment: b,
            isDateUnavailable: $,
            pageBehavior: F = 'visible',
            firstDayOfWeek: R,
          } = e,
          k = (0, y.useMemo)(() => B(f.calendar), [B, f.calendar]),
          [A, P] = (0, c.P)(
            e.value,
            null !== (u = e.defaultValue) && void 0 !== u ? u : null,
            e.onChange
          ),
          w = (0, y.useMemo)(() => (A ? (0, r.yP)((0, r.gw)(A), k) : null), [A, k]),
          V = (0, y.useMemo)(
            () => (A && 'timeZone' in A ? A.timeZone : f.timeZone),
            [A, f.timeZone]
          ),
          S = (0, y.useMemo)(
            () => (e.focusedValue ? s((0, r.yP)((0, r.gw)(e.focusedValue), k), C, E) : void 0),
            [e.focusedValue, k, C, E]
          ),
          M = (0, y.useMemo)(
            () =>
              s(
                e.defaultFocusedValue
                  ? (0, r.yP)((0, r.gw)(e.defaultFocusedValue), k)
                  : w || (0, r.yP)((0, t.Ec)(V), k),
                C,
                E
              ),
            [e.defaultFocusedValue, w, V, k, C, E]
          ),
          [j, z] = (0, c.P)(S, M, e.onFocusChange),
          [I, O] = (0, y.useState)(() => {
            switch (b) {
              case 'start':
                return o(j, x, v, C, E);
              case 'end':
                return d(j, x, v, C, E);
              default:
                return i(j, x, v, C, E);
            }
          }),
          [T, Z] = (0, y.useState)(e.autoFocus || !1),
          U = (0, y.useMemo)(() => {
            let e = { ...x };
            return e.days ? e.days-- : (e.days = -1), I.add(e);
          }, [I, x]),
          [N, K] = (0, y.useState)(k);
        if (!(0, t.Jg)(k, N)) {
          let e = (0, r.yP)(j, k);
          O(i(e, x, v, C, E)), z(e), K(k);
        }
        function L(e) {
          z((e = s(e, C, E)));
        }
        function J(u) {
          if (!e.isDisabled && !e.isReadOnly) {
            let e = u;
            if (null === e) {
              P(null);
              return;
            }
            (e = (function (e, u, a) {
              if (!a) return e;
              for (; e.compare(u) >= 0 && a(e); ) e = e.subtract({ days: 1 });
              return e.compare(u) >= 0 ? e : null;
            })((e = s(e, C, E)), I, $)) &&
              ((e = (0, r.yP)(e, (null == A ? void 0 : A.calendar) || new m.FG())),
              A && 'hour' in A ? P(A.set(e)) : P(e));
          }
        }
        n(j, C, E)
          ? z(s(j, C, E))
          : 0 > j.compare(I)
            ? O(d(j, x, v, C, E))
            : j.compare(U) > 0 && O(o(j, x, v, C, E));
        let W = (0, y.useMemo)(() => !!w && (!!($ && $(w)) || n(w, C, E)), [w, $, C, E]),
          q = e.isInvalid || 'invalid' === e.validationState || W,
          G = (0, y.useMemo)(() => ('visible' === F ? x : p(x)), [F, x]);
        return {
          isDisabled: null !== (a = e.isDisabled) && void 0 !== a && a,
          isReadOnly: null !== (g = e.isReadOnly) && void 0 !== g && g,
          value: w,
          setValue: J,
          visibleRange: { start: I, end: U },
          minValue: C,
          maxValue: E,
          focusedDate: j,
          timeZone: V,
          validationState: q ? 'invalid' : null,
          isValueInvalid: q,
          setFocusedDate(e) {
            L(e), Z(!0);
          },
          focusNextDay() {
            L(j.add({ days: 1 }));
          },
          focusPreviousDay() {
            L(j.subtract({ days: 1 }));
          },
          focusNextRow() {
            x.days
              ? this.focusNextPage()
              : (x.weeks || x.months || x.years) && L(j.add({ weeks: 1 }));
          },
          focusPreviousRow() {
            x.days
              ? this.focusPreviousPage()
              : (x.weeks || x.months || x.years) && L(j.subtract({ weeks: 1 }));
          },
          focusNextPage() {
            let e = I.add(G);
            z(s(j.add(G), C, E)), O(o(l(j, e, G, v, C, E), G, v));
          },
          focusPreviousPage() {
            let e = I.subtract(G);
            z(s(j.subtract(G), C, E)), O(o(l(j, e, G, v, C, E), G, v));
          },
          focusSectionStart() {
            x.days ? L(I) : x.weeks ? L((0, t.kq)(j, v)) : (x.months || x.years) && L((0, t.wH)(j));
          },
          focusSectionEnd() {
            x.days ? L(U) : x.weeks ? L((0, t.$I)(j, v)) : (x.months || x.years) && L((0, t.p9)(j));
          },
          focusNextSection(e) {
            if (!e && !x.days) {
              L(j.add(p(x)));
              return;
            }
            x.days
              ? this.focusNextPage()
              : x.weeks
                ? L(j.add({ months: 1 }))
                : (x.months || x.years) && L(j.add({ years: 1 }));
          },
          focusPreviousSection(e) {
            if (!e && !x.days) {
              L(j.subtract(p(x)));
              return;
            }
            x.days
              ? this.focusPreviousPage()
              : x.weeks
                ? L(j.subtract({ months: 1 }))
                : (x.months || x.years) && L(j.subtract({ years: 1 }));
          },
          selectFocusedDate() {
            ($ && $(j)) || J(j);
          },
          selectDate(e) {
            J(e);
          },
          isFocused: T,
          setFocused: Z,
          isInvalid: (e) => n(e, C, E),
          isSelected(e) {
            return (
              null != w && (0, t.ro)(e, w) && !this.isCellDisabled(e) && !this.isCellUnavailable(e)
            );
          },
          isCellFocused: (e) => T && j && (0, t.ro)(e, j),
          isCellDisabled(u) {
            return e.isDisabled || 0 > u.compare(I) || u.compare(U) > 0 || this.isInvalid(u);
          },
          isCellUnavailable: (u) => !!e.isDateUnavailable && e.isDateUnavailable(u),
          isPreviousVisibleRangeInvalid() {
            let e = I.subtract({ days: 1 });
            return (0, t.ro)(e, I) || this.isInvalid(e);
          },
          isNextVisibleRangeInvalid() {
            let e = U.add({ days: 1 });
            return (0, t.ro)(e, U) || this.isInvalid(e);
          },
          getDatesInWeek(e, u = I) {
            let a = u.add({ weeks: e }),
              r = [];
            a = (0, t.kq)(a, v, R);
            let n = (0, t.SJ)(a, v, R);
            for (let e = 0; e < n; e++) r.push(null);
            for (; r.length < 7; ) {
              r.push(a);
              let e = a.add({ days: 1 });
              if ((0, t.ro)(a, e)) break;
              a = e;
            }
            for (; r.length < 7; ) r.push(null);
            return r;
          },
        };
      }
      function p(e) {
        let u = { ...e };
        for (let a in e) u[a] = 1;
        return u;
      }
    },
    75385: (e, u, a) => {
      a.d(u, { P: () => d });
      var t = a(7487),
        r = a(15258),
        n = a(41635),
        i = a(7620),
        o = a(85905);
      function d(e, u, a) {
        let { direction: d } = (0, n.Y)(),
          s = (0, i.useMemo)(() => (0, t.C7)(u), [u]),
          D = () => {
            var e;
            if (!u.current) return;
            let a = null === (e = window.event) || void 0 === e ? void 0 : e.target,
              r = (0, t.N$)(u.current, { tabbable: !0 });
            if ((a && ((r.currentNode = a), (a = r.previousNode())), !a)) {
              let e;
              do (e = r.lastChild()) && (a = e);
              while (e);
            }
            for (; null == a ? void 0 : a.hasAttribute('data-placeholder'); ) {
              let e = r.previousNode();
              if (e && e.hasAttribute('data-placeholder')) a = e;
              else break;
            }
            a && a.focus();
          },
          { pressProps: m } = (0, o.d)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
              'mouse' === e.pointerType && D();
            },
            onPress(e) {
              'mouse' !== e.pointerType && D();
            },
          });
        return (0, r.v)(m, {
          onKeyDown: (t) => {
            if (
              t.currentTarget.contains(t.target) &&
              (t.altKey &&
                ('ArrowDown' === t.key || 'ArrowUp' === t.key) &&
                'setOpen' in e &&
                (t.preventDefault(), t.stopPropagation(), e.setOpen(!0)),
              !a)
            )
              switch (t.key) {
                case 'ArrowLeft':
                  if ((t.preventDefault(), t.stopPropagation(), 'rtl' === d)) {
                    if (u.current) {
                      let e = t.target,
                        a = l(u.current, e.getBoundingClientRect().left, -1);
                      a && a.focus();
                    }
                  } else s.focusPrevious();
                  break;
                case 'ArrowRight':
                  if ((t.preventDefault(), t.stopPropagation(), 'rtl' === d)) {
                    if (u.current) {
                      let e = t.target,
                        a = l(u.current, e.getBoundingClientRect().left, 1);
                      a && a.focus();
                    }
                  } else s.focusNext();
              }
          },
        });
      }
      function l(e, u, a) {
        let r = (0, t.N$)(e, { tabbable: !0 }),
          n = r.nextNode(),
          i = null,
          o = 1 / 0;
        for (; n; ) {
          let e = n.getBoundingClientRect().left - u,
            t = Math.abs(e);
          Math.sign(e) === a && t < o && ((i = n), (o = t)), (n = r.nextNode());
        }
        return i;
      }
    },
    76030: (e, u, a) => {
      a.d(u, { A: () => I });
      var t = {},
        r = {},
        n = {},
        i = {},
        o = {},
        d = {},
        l = {},
        s = {},
        D = {},
        m = {},
        c = {},
        y = {},
        g = {},
        p = {},
        h = {},
        f = {},
        v = {},
        B = {},
        x = {},
        C = {},
        E = {},
        b = {},
        $ = {},
        F = {},
        R = {},
        k = {},
        A = {},
        P = {},
        w = {},
        V = {},
        S = {},
        M = {},
        j = {},
        z = {},
        I = {};
      I = {
        'ar-AE': {
          calendar: `\u{627}\u{644}\u{62A}\u{642}\u{648}\u{64A}\u{645}`,
          day: `\u{64A}\u{648}\u{645}`,
          dayPeriod: `\u{635}/\u{645}`,
          endDate: `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{627}\u{646}\u{62A}\u{647}\u{627}\u{621}`,
          era: `\u{627}\u{644}\u{639}\u{635}\u{631}`,
          hour: `\u{627}\u{644}\u{633}\u{627}\u{639}\u{627}\u{62A}`,
          minute: `\u{627}\u{644}\u{62F}\u{642}\u{627}\u{626}\u{642}`,
          month: `\u{627}\u{644}\u{634}\u{647}\u{631}`,
          second: `\u{627}\u{644}\u{62B}\u{648}\u{627}\u{646}\u{64A}`,
          selectedDateDescription: (e) =>
            `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,
          selectedTimeDescription: (e) =>
            `\u{627}\u{644}\u{648}\u{642}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.time}`,
          startDate: `\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{627}\u{644}\u{628}\u{62F}\u{621}`,
          timeZoneName: `\u{627}\u{644}\u{62A}\u{648}\u{642}\u{64A}\u{62A}`,
          weekday: `\u{627}\u{644}\u{64A}\u{648}\u{645}`,
          year: `\u{627}\u{644}\u{633}\u{646}\u{629}`,
        },
        'bg-BG': {
          calendar: `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}`,
          day: `\u{434}\u{435}\u{43D}`,
          dayPeriod: `\u{43F}\u{440}.\u{43E}\u{431}./\u{441}\u{43B}.\u{43E}\u{431}.`,
          endDate: `\u{41A}\u{440}\u{430}\u{439}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
          era: `\u{435}\u{440}\u{430}`,
          hour: `\u{447}\u{430}\u{441}`,
          minute: `\u{43C}\u{438}\u{43D}\u{443}\u{442}\u{430}`,
          month: `\u{43C}\u{435}\u{441}\u{435}\u{446}`,
          second: `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
          selectedDateDescription: (e) =>
            `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{434}\u{43E} ${e.endDate}`,
          selectedTimeDescription: (e) =>
            `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${e.time}`,
          startDate: `\u{41D}\u{430}\u{447}\u{430}\u{43B}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}`,
          timeZoneName: `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{430} \u{437}\u{43E}\u{43D}\u{430}`,
          weekday: `\u{434}\u{435}\u{43D} \u{43E}\u{442} \u{441}\u{435}\u{434}\u{43C}\u{438}\u{446}\u{430}\u{442}\u{430}`,
          year: `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`,
        },
        'cs-CZ': {
          calendar: `Kalend\xe1\u{159}`,
          day: 'den',
          dayPeriod: `\u{10D}\xe1st dne`,
          endDate: `Kone\u{10D}n\xe9 datum`,
          era: `letopo\u{10D}et`,
          hour: 'hodina',
          minute: 'minuta',
          month: `m\u{11B}s\xedc`,
          second: 'sekunda',
          selectedDateDescription: (e) => `Vybran\xe9 datum: ${e.date}`,
          selectedRangeDescription: (e) =>
            `Vybran\xe9 obdob\xed: ${e.startDate} a\u{17E} ${e.endDate}`,
          selectedTimeDescription: (e) => `Vybran\xfd \u{10D}as: ${e.time}`,
          startDate: `Po\u{10D}\xe1te\u{10D}n\xed datum`,
          timeZoneName: `\u{10D}asov\xe9 p\xe1smo`,
          weekday: `den v t\xfddnu`,
          year: 'rok',
        },
        'da-DK': {
          calendar: 'Kalender',
          day: 'dag',
          dayPeriod: 'AM/PM',
          endDate: 'Slutdato',
          era: `\xe6ra`,
          hour: 'time',
          minute: 'minut',
          month: `m\xe5ned`,
          second: 'sekund',
          selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
          selectedRangeDescription: (e) => `Valgt interval: ${e.startDate} til ${e.endDate}`,
          selectedTimeDescription: (e) => `Valgt tidspunkt: ${e.time}`,
          startDate: 'Startdato',
          timeZoneName: 'tidszone',
          weekday: 'ugedag',
          year: `\xe5r`,
        },
        'de-DE': {
          calendar: 'Kalender',
          day: 'Tag',
          dayPeriod: `Tagesh\xe4lfte`,
          endDate: 'Enddatum',
          era: 'Epoche',
          hour: 'Stunde',
          minute: 'Minute',
          month: 'Monat',
          second: 'Sekunde',
          selectedDateDescription: (e) => `Ausgew\xe4hltes Datum: ${e.date}`,
          selectedRangeDescription: (e) =>
            `Ausgew\xe4hlter Bereich: ${e.startDate} bis ${e.endDate}`,
          selectedTimeDescription: (e) => `Ausgew\xe4hlte Zeit: ${e.time}`,
          startDate: 'Anfangsdatum',
          timeZoneName: 'Zeitzone',
          weekday: 'Wochentag',
          year: 'Jahr',
        },
        'el-GR': {
          calendar: `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BB}\u{3CC}\u{3B3}\u{3B9}\u{3BF}`,
          day: `\u{3B7}\u{3BC}\u{3AD}\u{3C1}\u{3B1}`,
          dayPeriod: `\u{3C0}.\u{3BC}./\u{3BC}.\u{3BC}.`,
          endDate: `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3BB}\u{3AE}\u{3BE}\u{3B7}\u{3C2}`,
          era: `\u{3C0}\u{3B5}\u{3C1}\u{3AF}\u{3BF}\u{3B4}\u{3BF}\u{3C2}`,
          hour: `\u{3CE}\u{3C1}\u{3B1}`,
          minute: `\u{3BB}\u{3B5}\u{3C0}\u{3C4}\u{3CC}`,
          month: `\u{3BC}\u{3AE}\u{3BD}\u{3B1}\u{3C2}`,
          second: `\u{3B4}\u{3B5}\u{3C5}\u{3C4}\u{3B5}\u{3C1}\u{3CC}\u{3BB}\u{3B5}\u{3C0}\u{3C4}\u{3BF}`,
          selectedDateDescription: (e) =>
            `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,
          selectedTimeDescription: (e) =>
            `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}: ${e.time}`,
          startDate: `\u{397}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1} \u{3AD}\u{3BD}\u{3B1}\u{3C1}\u{3BE}\u{3B7}\u{3C2}`,
          timeZoneName: `\u{3B6}\u{3CE}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}\u{3C2}`,
          weekday: `\u{3BA}\u{3B1}\u{3B8}\u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3B9}\u{3BD}\u{3AE}`,
          year: `\u{3AD}\u{3C4}\u{3BF}\u{3C2}`,
        },
        'en-US': {
          era: 'era',
          year: 'year',
          month: 'month',
          day: 'day',
          hour: 'hour',
          minute: 'minute',
          second: 'second',
          dayPeriod: 'AM/PM',
          calendar: 'Calendar',
          startDate: 'Start Date',
          endDate: 'End Date',
          weekday: 'day of the week',
          timeZoneName: 'time zone',
          selectedDateDescription: (e) => `Selected Date: ${e.date}`,
          selectedRangeDescription: (e) => `Selected Range: ${e.startDate} to ${e.endDate}`,
          selectedTimeDescription: (e) => `Selected Time: ${e.time}`,
        },
        'es-ES': {
          calendar: 'Calendario',
          day: `d\xeda`,
          dayPeriod: `a.\xa0m./p.\xa0m.`,
          endDate: 'Fecha final',
          era: 'era',
          hour: 'hora',
          minute: 'minuto',
          month: 'mes',
          second: 'segundo',
          selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
          selectedRangeDescription: (e) => `Rango seleccionado: ${e.startDate} a ${e.endDate}`,
          selectedTimeDescription: (e) => `Hora seleccionada: ${e.time}`,
          startDate: 'Fecha de inicio',
          timeZoneName: 'zona horaria',
          weekday: `d\xeda de la semana`,
          year: `a\xf1o`,
        },
        'et-EE': {
          calendar: 'Kalender',
          day: `p\xe4ev`,
          dayPeriod: `enne/p\xe4rast l\xf5unat`,
          endDate: `L\xf5ppkuup\xe4ev`,
          era: 'ajastu',
          hour: 'tund',
          minute: 'minut',
          month: 'kuu',
          second: 'sekund',
          selectedDateDescription: (e) => `Valitud kuup\xe4ev: ${e.date}`,
          selectedRangeDescription: (e) => `Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,
          selectedTimeDescription: (e) => `Valitud aeg: ${e.time}`,
          startDate: `Alguskuup\xe4ev`,
          timeZoneName: `ajav\xf6\xf6nd`,
          weekday: `n\xe4dalap\xe4ev`,
          year: 'aasta',
        },
        'fi-FI': {
          calendar: 'Kalenteri',
          day: `p\xe4iv\xe4`,
          dayPeriod: 'vuorokaudenaika',
          endDate: `P\xe4\xe4ttymisp\xe4iv\xe4`,
          era: 'aikakausi',
          hour: 'tunti',
          minute: 'minuutti',
          month: 'kuukausi',
          second: 'sekunti',
          selectedDateDescription: (e) => `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
          selectedRangeDescription: (e) =>
            `Valittu aikav\xe4li: ${e.startDate} \u{2013} ${e.endDate}`,
          selectedTimeDescription: (e) => `Valittu aika: ${e.time}`,
          startDate: `Alkamisp\xe4iv\xe4`,
          timeZoneName: `aikavy\xf6hyke`,
          weekday: `viikonp\xe4iv\xe4`,
          year: 'vuosi',
        },
        'fr-FR': {
          calendar: 'Calendrier',
          day: 'jour',
          dayPeriod: 'cadran',
          endDate: 'Date de fin',
          era: `\xe8re`,
          hour: 'heure',
          minute: 'minute',
          month: 'mois',
          second: 'seconde',
          selectedDateDescription: (e) => `Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
          selectedRangeDescription: (e) =>
            `Plage s\xe9lectionn\xe9e\xa0: ${e.startDate} au ${e.endDate}`,
          selectedTimeDescription: (e) => `Heure choisie\xa0: ${e.time}`,
          startDate: `Date de d\xe9but`,
          timeZoneName: 'fuseau horaire',
          weekday: 'jour de la semaine',
          year: `ann\xe9e`,
        },
        'he-IL': {
          calendar: `\u{5DC}\u{5D5}\u{5D7} \u{5E9}\u{5E0}\u{5D4}`,
          day: `\u{5D9}\u{5D5}\u{5DD}`,
          dayPeriod: `\u{5DC}\u{5E4}\u{5E0}\u{5D4}\u{5F4}\u{5E6}/\u{5D0}\u{5D7}\u{5D4}\u{5F4}\u{5E6}`,
          endDate: `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E1}\u{5D9}\u{5D5}\u{5DD}`,
          era: `\u{5EA}\u{5E7}\u{5D5}\u{5E4}\u{5D4}`,
          hour: `\u{5E9}\u{5E2}\u{5D4}`,
          minute: `\u{5D3}\u{5E7}\u{5D4}`,
          month: `\u{5D7}\u{5D5}\u{5D3}\u{5E9}`,
          second: `\u{5E9}\u{5E0}\u{5D9}\u{5D9}\u{5D4}`,
          selectedDateDescription: (e) =>
            `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,
          selectedTimeDescription: (e) =>
            `\u{5D6}\u{5DE}\u{5DF} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.time}`,
          startDate: `\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5D4}\u{5EA}\u{5D7}\u{5DC}\u{5D4}`,
          timeZoneName: `\u{5D0}\u{5D6}\u{5D5}\u{5E8} \u{5D6}\u{5DE}\u{5DF}`,
          weekday: `\u{5D9}\u{5D5}\u{5DD} \u{5D1}\u{5E9}\u{5D1}\u{5D5}\u{5E2}`,
          year: `\u{5E9}\u{5E0}\u{5D4}`,
        },
        'hr-HR': {
          calendar: 'Kalendar',
          day: 'dan',
          dayPeriod: 'AM/PM',
          endDate: `Datum zavr\u{161}etka`,
          era: 'era',
          hour: 'sat',
          minute: 'minuta',
          month: 'mjesec',
          second: 'sekunda',
          selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
          selectedRangeDescription: (e) => `Odabrani raspon: ${e.startDate} do ${e.endDate}`,
          selectedTimeDescription: (e) => `Odabrano vrijeme: ${e.time}`,
          startDate: `Datum po\u{10D}etka`,
          timeZoneName: 'vremenska zona',
          weekday: 'dan u tjednu',
          year: 'godina',
        },
        'hu-HU': {
          calendar: `Napt\xe1r`,
          day: 'nap',
          dayPeriod: 'napszak',
          endDate: `Befejez\u{151} d\xe1tum`,
          era: `\xe9ra`,
          hour: `\xf3ra`,
          minute: 'perc',
          month: `h\xf3nap`,
          second: `m\xe1sodperc`,
          selectedDateDescription: (e) => `Kijel\xf6lt d\xe1tum: ${e.date}`,
          selectedRangeDescription: (e) =>
            `Kijel\xf6lt tartom\xe1ny: ${e.startDate}\u{2013}${e.endDate}`,
          selectedTimeDescription: (e) => `Kijel\xf6lt id\u{151}: ${e.time}`,
          startDate: `Kezd\u{151} d\xe1tum`,
          timeZoneName: `id\u{151}z\xf3na`,
          weekday: `h\xe9t napja`,
          year: `\xe9v`,
        },
        'it-IT': {
          calendar: 'Calendario',
          day: 'giorno',
          dayPeriod: 'AM/PM',
          endDate: 'Data finale',
          era: 'era',
          hour: 'ora',
          minute: 'minuto',
          month: 'mese',
          second: 'secondo',
          selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
          selectedRangeDescription: (e) =>
            `Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,
          selectedTimeDescription: (e) => `Ora selezionata: ${e.time}`,
          startDate: 'Data iniziale',
          timeZoneName: 'fuso orario',
          weekday: 'giorno della settimana',
          year: 'anno',
        },
        'ja-JP': {
          calendar: `\u{30AB}\u{30EC}\u{30F3}\u{30C0}\u{30FC}`,
          day: `\u{65E5}`,
          dayPeriod: `\u{5348}\u{524D}/\u{5348}\u{5F8C}`,
          endDate: `\u{7D42}\u{4E86}\u{65E5}`,
          era: `\u{6642}\u{4EE3}`,
          hour: `\u{6642}`,
          minute: `\u{5206}`,
          month: `\u{6708}`,
          second: `\u{79D2}`,
          selectedDateDescription: (e) =>
            `\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.startDate} \u{304B}\u{3089} ${e.endDate}`,
          selectedTimeDescription: (e) =>
            `\u{9078}\u{629E}\u{3057}\u{305F}\u{6642}\u{9593} : ${e.time}`,
          startDate: `\u{958B}\u{59CB}\u{65E5}`,
          timeZoneName: `\u{30BF}\u{30A4}\u{30E0}\u{30BE}\u{30FC}\u{30F3}`,
          weekday: `\u{66DC}\u{65E5}`,
          year: `\u{5E74}`,
        },
        'ko-KR': {
          calendar: `\u{B2EC}\u{B825}`,
          day: `\u{C77C}`,
          dayPeriod: `\u{C624}\u{C804}/\u{C624}\u{D6C4}`,
          endDate: `\u{C885}\u{B8CC}\u{C77C}`,
          era: `\u{C5F0}\u{D638}`,
          hour: `\u{C2DC}`,
          minute: `\u{BD84}`,
          month: `\u{C6D4}`,
          second: `\u{CD08}`,
          selectedDateDescription: (e) => `\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.startDate} ~ ${e.endDate}`,
          selectedTimeDescription: (e) => `\u{C120}\u{D0DD} \u{C2DC}\u{AC04}: ${e.time}`,
          startDate: `\u{C2DC}\u{C791}\u{C77C}`,
          timeZoneName: `\u{C2DC}\u{AC04}\u{B300}`,
          weekday: `\u{C694}\u{C77C}`,
          year: `\u{B144}`,
        },
        'lt-LT': {
          calendar: 'Kalendorius',
          day: 'diena',
          dayPeriod: `iki piet\u{173} / po piet\u{173}`,
          endDate: 'Pabaigos data',
          era: 'era',
          hour: 'valanda',
          minute: `minut\u{117}`,
          month: `m\u{117}nuo`,
          second: `sekund\u{117}`,
          selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
          selectedRangeDescription: (e) =>
            `Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,
          selectedTimeDescription: (e) => `Pasirinktas laikas: ${e.time}`,
          startDate: `Prad\u{17E}ios data`,
          timeZoneName: 'laiko juosta',
          weekday: `savait\u{117}s diena`,
          year: 'metai',
        },
        'lv-LV': {
          calendar: `Kalend\u{101}rs`,
          day: 'diena',
          dayPeriod: `priek\u{161}pusdien\u{101}/p\u{113}cpusdien\u{101}`,
          endDate: 'Beigu datums',
          era: `\u{113}ra`,
          hour: 'stundas',
          minute: `min\u{16B}tes`,
          month: `m\u{113}nesis`,
          second: 'sekundes',
          selectedDateDescription: (e) => `Atlas\u{12B}tais datums: ${e.date}`,
          selectedRangeDescription: (e) =>
            `Atlas\u{12B}tais diapazons: no ${e.startDate} l\u{12B}dz ${e.endDate}`,
          selectedTimeDescription: (e) => `Atlas\u{12B}tais laiks: ${e.time}`,
          startDate: `S\u{101}kuma datums`,
          timeZoneName: 'laika josla',
          weekday: `ned\u{113}\u{13C}as diena`,
          year: 'gads',
        },
        'nb-NO': {
          calendar: 'Kalender',
          day: 'dag',
          dayPeriod: 'a.m./p.m.',
          endDate: 'Sluttdato',
          era: 'tidsalder',
          hour: 'time',
          minute: 'minutt',
          month: `m\xe5ned`,
          second: 'sekund',
          selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
          selectedRangeDescription: (e) => `Valgt omr\xe5de: ${e.startDate} til ${e.endDate}`,
          selectedTimeDescription: (e) => `Valgt tid: ${e.time}`,
          startDate: 'Startdato',
          timeZoneName: 'tidssone',
          weekday: 'ukedag',
          year: `\xe5r`,
        },
        'nl-NL': {
          calendar: 'Kalender',
          day: 'dag',
          dayPeriod: 'a.m./p.m.',
          endDate: 'Einddatum',
          era: 'tijdperk',
          hour: 'uur',
          minute: 'minuut',
          month: 'maand',
          second: 'seconde',
          selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
          selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,
          selectedTimeDescription: (e) => `Geselecteerde tijd: ${e.time}`,
          startDate: 'Startdatum',
          timeZoneName: 'tijdzone',
          weekday: 'dag van de week',
          year: 'jaar',
        },
        'pl-PL': {
          calendar: 'Kalendarz',
          day: `dzie\u{144}`,
          dayPeriod: `rano / po po\u{142}udniu / wieczorem`,
          endDate: `Data ko\u{144}cowa`,
          era: 'era',
          hour: 'godzina',
          minute: 'minuta',
          month: `miesi\u{105}c`,
          second: 'sekunda',
          selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
          selectedRangeDescription: (e) => `Wybrany zakres: ${e.startDate} do ${e.endDate}`,
          selectedTimeDescription: (e) => `Wybrany czas: ${e.time}`,
          startDate: `Data pocz\u{105}tkowa`,
          timeZoneName: 'strefa czasowa',
          weekday: `dzie\u{144} tygodnia`,
          year: 'rok',
        },
        'pt-BR': {
          calendar: `Calend\xe1rio`,
          day: 'dia',
          dayPeriod: 'AM/PM',
          endDate: 'Data final',
          era: 'era',
          hour: 'hora',
          minute: 'minuto',
          month: `m\xeas`,
          second: 'segundo',
          selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
          selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
          selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
          startDate: 'Data inicial',
          timeZoneName: `fuso hor\xe1rio`,
          weekday: 'dia da semana',
          year: 'ano',
        },
        'pt-PT': {
          calendar: `Calend\xe1rio`,
          day: 'dia',
          dayPeriod: 'am/pm',
          endDate: `Data de T\xe9rmino`,
          era: 'era',
          hour: 'hora',
          minute: 'minuto',
          month: `m\xeas`,
          second: 'segundo',
          selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
          selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
          selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
          startDate: `Data de In\xedcio`,
          timeZoneName: `fuso hor\xe1rio`,
          weekday: 'dia da semana',
          year: 'ano',
        },
        'ro-RO': {
          calendar: 'Calendar',
          day: 'zi',
          dayPeriod: 'a.m/p.m.',
          endDate: `Dat\u{103} final`,
          era: `er\u{103}`,
          hour: `or\u{103}`,
          minute: 'minut',
          month: `lun\u{103}`,
          second: `secund\u{103}`,
          selectedDateDescription: (e) => `Dat\u{103} selectat\u{103}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `Interval selectat: de la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,
          selectedTimeDescription: (e) => `Ora selectat\u{103}: ${e.time}`,
          startDate: `Dat\u{103} \xeenceput`,
          timeZoneName: 'fus orar',
          weekday: `ziua din s\u{103}pt\u{103}m\xe2n\u{103}`,
          year: 'an',
        },
        'ru-RU': {
          calendar: `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}\u{44C}`,
          day: `\u{434}\u{435}\u{43D}\u{44C}`,
          dayPeriod: 'AM/PM',
          endDate: `\u{414}\u{430}\u{442}\u{430} \u{43E}\u{43A}\u{43E}\u{43D}\u{447}\u{430}\u{43D}\u{438}\u{44F}`,
          era: `\u{44D}\u{440}\u{430}`,
          hour: `\u{447}\u{430}\u{441}`,
          minute: `\u{43C}\u{438}\u{43D}\u{443}\u{442}\u{430}`,
          month: `\u{43C}\u{435}\u{441}\u{44F}\u{446}`,
          second: `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
          selectedDateDescription: (e) =>
            `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
          selectedTimeDescription: (e) =>
            `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${e.time}`,
          startDate: `\u{414}\u{430}\u{442}\u{430} \u{43D}\u{430}\u{447}\u{430}\u{43B}\u{430}`,
          timeZoneName: `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{43E}\u{439} \u{43F}\u{43E}\u{44F}\u{441}`,
          weekday: `\u{434}\u{435}\u{43D}\u{44C} \u{43D}\u{435}\u{434}\u{435}\u{43B}\u{438}`,
          year: `\u{433}\u{43E}\u{434}`,
        },
        'sk-SK': {
          calendar: `Kalend\xe1r`,
          day: `de\u{148}`,
          dayPeriod: 'AM/PM',
          endDate: `D\xe1tum ukon\u{10D}enia`,
          era: `letopo\u{10D}et`,
          hour: 'hodina',
          minute: `min\xfata`,
          month: 'mesiac',
          second: 'sekunda',
          selectedDateDescription: (e) => `Vybrat\xfd d\xe1tum: ${e.date}`,
          selectedRangeDescription: (e) => `Vybrat\xfd rozsah: od ${e.startDate} do ${e.endDate}`,
          selectedTimeDescription: (e) => `Vybrat\xfd \u{10D}as: ${e.time}`,
          startDate: `D\xe1tum za\u{10D}atia`,
          timeZoneName: `\u{10D}asov\xe9 p\xe1smo`,
          weekday: `de\u{148} t\xfd\u{17E}d\u{148}a`,
          year: 'rok',
        },
        'sl-SI': {
          calendar: 'Koledar',
          day: 'dan',
          dayPeriod: 'dop/pop',
          endDate: 'Datum konca',
          era: 'doba',
          hour: 'ura',
          minute: 'minuta',
          month: 'mesec',
          second: 'sekunda',
          selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
          selectedRangeDescription: (e) => `Izbrano obmo\u{10D}je: ${e.startDate} do ${e.endDate}`,
          selectedTimeDescription: (e) => `Izbrani \u{10D}as: ${e.time}`,
          startDate: `Datum za\u{10D}etka`,
          timeZoneName: `\u{10D}asovni pas`,
          weekday: 'dan v tednu',
          year: 'leto',
        },
        'sr-SP': {
          calendar: 'Kalendar',
          day: `\u{434}\u{430}\u{43D}`,
          dayPeriod: `\u{43F}\u{440}\u{435} \u{43F}\u{43E}\u{434}\u{43D}\u{435}/\u{43F}\u{43E} \u{43F}\u{43E}\u{434}\u{43D}\u{435}`,
          endDate: `Datum zavr\u{161}etka`,
          era: `\u{435}\u{440}\u{430}`,
          hour: `\u{441}\u{430}\u{442}`,
          minute: `\u{43C}\u{438}\u{43D}\u{443}\u{442}`,
          month: `\u{43C}\u{435}\u{441}\u{435}\u{446}`,
          second: `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}`,
          selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
          selectedRangeDescription: (e) => `Izabrani opseg: od ${e.startDate} do ${e.endDate}`,
          selectedTimeDescription: (e) => `Izabrano vreme: ${e.time}`,
          startDate: `Datum po\u{10D}etka`,
          timeZoneName: `\u{432}\u{440}\u{435}\u{43C}\u{435}\u{43D}\u{441}\u{43A}\u{430} \u{437}\u{43E}\u{43D}\u{430}`,
          weekday: `\u{434}\u{430}\u{43D} \u{443} \u{43D}\u{435}\u{434}\u{435}\u{459}\u{438}`,
          year: `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`,
        },
        'sv-SE': {
          calendar: 'Kalender',
          day: 'dag',
          dayPeriod: 'fm/em',
          endDate: 'Slutdatum',
          era: 'era',
          hour: 'timme',
          minute: 'minut',
          month: `m\xe5nad`,
          second: 'sekund',
          selectedDateDescription: (e) => `Valt datum: ${e.date}`,
          selectedRangeDescription: (e) => `Valt intervall: ${e.startDate} till ${e.endDate}`,
          selectedTimeDescription: (e) => `Vald tid: ${e.time}`,
          startDate: 'Startdatum',
          timeZoneName: 'tidszon',
          weekday: 'veckodag',
          year: `\xe5r`,
        },
        'tr-TR': {
          calendar: 'Takvim',
          day: `g\xfcn`,
          dayPeriod: `\xd6\xd6/\xd6S`,
          endDate: `Biti\u{15F} Tarihi`,
          era: `\xe7a\u{11F}`,
          hour: 'saat',
          minute: 'dakika',
          month: 'ay',
          second: 'saniye',
          selectedDateDescription: (e) => `Se\xe7ilen Tarih: ${e.date}`,
          selectedRangeDescription: (e) => `Se\xe7ilen Aral\u{131}k: ${e.startDate} - ${e.endDate}`,
          selectedTimeDescription: (e) => `Se\xe7ilen Zaman: ${e.time}`,
          startDate: `Ba\u{15F}lang\u{131}\xe7 Tarihi`,
          timeZoneName: 'saat dilimi',
          weekday: `haftan\u{131}n g\xfcn\xfc`,
          year: `y\u{131}l`,
        },
        'uk-UA': {
          calendar: `\u{41A}\u{430}\u{43B}\u{435}\u{43D}\u{434}\u{430}\u{440}`,
          day: `\u{434}\u{435}\u{43D}\u{44C}`,
          dayPeriod: `\u{434}\u{43F}/\u{43F}\u{43F}`,
          endDate: `\u{414}\u{430}\u{442}\u{430} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{435}\u{43D}\u{43D}\u{44F}`,
          era: `\u{435}\u{440}\u{430}`,
          hour: `\u{433}\u{43E}\u{434}\u{438}\u{43D}\u{430}`,
          minute: `\u{445}\u{432}\u{438}\u{43B}\u{438}\u{43D}\u{430}`,
          month: `\u{43C}\u{456}\u{441}\u{44F}\u{446}\u{44C}`,
          second: `\u{441}\u{435}\u{43A}\u{443}\u{43D}\u{434}\u{430}`,
          selectedDateDescription: (e) =>
            `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{2014} ${e.endDate}`,
          selectedTimeDescription: (e) =>
            `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${e.time}`,
          startDate: `\u{414}\u{430}\u{442}\u{430} \u{43F}\u{43E}\u{447}\u{430}\u{442}\u{43A}\u{443}`,
          timeZoneName: `\u{447}\u{430}\u{441}\u{43E}\u{432}\u{438}\u{439} \u{43F}\u{43E}\u{44F}\u{441}`,
          weekday: `\u{434}\u{435}\u{43D}\u{44C} \u{442}\u{438}\u{436}\u{43D}\u{44F}`,
          year: `\u{440}\u{456}\u{43A}`,
        },
        'zh-CN': {
          calendar: `\u{65E5}\u{5386}`,
          day: `\u{65E5}`,
          dayPeriod: `\u{4E0A}\u{5348}/\u{4E0B}\u{5348}`,
          endDate: `\u{7ED3}\u{675F}\u{65E5}\u{671F}`,
          era: `\u{7EAA}\u{5143}`,
          hour: `\u{5C0F}\u{65F6}`,
          minute: `\u{5206}\u{949F}`,
          month: `\u{6708}`,
          second: `\u{79D2}`,
          selectedDateDescription: (e) =>
            `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,
          selectedTimeDescription: (e) =>
            `\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${e.time}`,
          startDate: `\u{5F00}\u{59CB}\u{65E5}\u{671F}`,
          timeZoneName: `\u{65F6}\u{533A}`,
          weekday: `\u{5DE5}\u{4F5C}\u{65E5}`,
          year: `\u{5E74}`,
        },
        'zh-TW': {
          calendar: `\u{65E5}\u{66C6}`,
          day: `\u{65E5}`,
          dayPeriod: `\u{4E0A}\u{5348}/\u{4E0B}\u{5348}`,
          endDate: `\u{7D50}\u{675F}\u{65E5}\u{671F}`,
          era: `\u{7EAA}\u{5143}`,
          hour: `\u{5C0F}\u{65F6}`,
          minute: `\u{5206}\u{949F}`,
          month: `\u{6708}`,
          second: `\u{79D2}`,
          selectedDateDescription: (e) =>
            `\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
          selectedRangeDescription: (e) =>
            `\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,
          selectedTimeDescription: (e) =>
            `\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${e.time}`,
          startDate: `\u{958B}\u{59CB}\u{65E5}\u{671F}`,
          timeZoneName: `\u{65F6}\u{533A}`,
          weekday: `\u{5DE5}\u{4F5C}\u{65E5}`,
          year: `\u{5E74}`,
        },
      };
    },
    91734: (e, u, a) => {
      a.d(u, { g: () => s });
      var t = a(14738),
        r = a(93072),
        n = a(7620),
        i = a(61186),
        o = a(15258),
        d = a(41635),
        l = a(13706);
      function s(e, u) {
        let {
            startDate: a = u.visibleRange.start,
            endDate: s = u.visibleRange.end,
            firstDayOfWeek: D,
          } = e,
          { direction: m } = (0, d.Y)(),
          c = (0, t.ZR)(a, s, u.timeZone, !0),
          { ariaLabel: y, ariaLabelledBy: g } = (0, t.OX).get(u),
          p = (0, i.b)({ 'aria-label': [y, c].filter(Boolean).join(', '), 'aria-labelledby': g }),
          h = (0, l.i)({ weekday: e.weekdayStyle || 'narrow', timeZone: u.timeZone }),
          { locale: f } = (0, d.Y)(),
          v = (0, n.useMemo)(() => {
            let e = (0, r.kq)((0, r.Ec)(u.timeZone), f, D);
            return [...Array(7).keys()].map((a) => {
              let t = e.add({ days: a }).toDate(u.timeZone);
              return h.format(t);
            });
          }, [f, u.timeZone, h, D]),
          B = (0, r.RZ)(a, f, D);
        return {
          gridProps: (0, o.v)(p, {
            role: 'grid',
            'aria-readonly': u.isReadOnly || void 0,
            'aria-disabled': u.isDisabled || void 0,
            'aria-multiselectable': 'highlightedRange' in u || void 0,
            onKeyDown: (e) => {
              switch (e.key) {
                case 'Enter':
                case ' ':
                  e.preventDefault(), u.selectFocusedDate();
                  break;
                case 'PageUp':
                  e.preventDefault(), e.stopPropagation(), u.focusPreviousSection(e.shiftKey);
                  break;
                case 'PageDown':
                  e.preventDefault(), e.stopPropagation(), u.focusNextSection(e.shiftKey);
                  break;
                case 'End':
                  e.preventDefault(), e.stopPropagation(), u.focusSectionEnd();
                  break;
                case 'Home':
                  e.preventDefault(), e.stopPropagation(), u.focusSectionStart();
                  break;
                case 'ArrowLeft':
                  e.preventDefault(),
                    e.stopPropagation(),
                    'rtl' === m ? u.focusNextDay() : u.focusPreviousDay();
                  break;
                case 'ArrowUp':
                  e.preventDefault(), e.stopPropagation(), u.focusPreviousRow();
                  break;
                case 'ArrowRight':
                  e.preventDefault(),
                    e.stopPropagation(),
                    'rtl' === m ? u.focusPreviousDay() : u.focusNextDay();
                  break;
                case 'ArrowDown':
                  e.preventDefault(), e.stopPropagation(), u.focusNextRow();
                  break;
                case 'Escape':
                  'setAnchorDate' in u && (e.preventDefault(), u.setAnchorDate(null));
              }
            },
            onFocus: () => u.setFocused(!0),
            onBlur: () => u.setFocused(!1),
          }),
          headerProps: { 'aria-hidden': !0 },
          weekDays: v,
          weeksInMonth: B,
        };
      }
    },
    92738: (e, u, a) => {
      a.d(u, { p: () => r });
      let t = new Map();
      class r {
        format(e) {
          return this.formatter.format(e);
        }
        formatToParts(e) {
          return this.formatter.formatToParts(e);
        }
        formatRange(e, u) {
          if ('function' == typeof this.formatter.formatRange)
            return this.formatter.formatRange(e, u);
          if (u < e) throw RangeError('End date must be >= start date');
          return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(u)}`;
        }
        formatRangeToParts(e, u) {
          if ('function' == typeof this.formatter.formatRangeToParts)
            return this.formatter.formatRangeToParts(e, u);
          if (u < e) throw RangeError('End date must be >= start date');
          let a = this.formatter.formatToParts(e),
            t = this.formatter.formatToParts(u);
          return [
            ...a.map((e) => ({ ...e, source: 'startRange' })),
            { type: 'literal', value: ' – ', source: 'shared' },
            ...t.map((e) => ({ ...e, source: 'endRange' })),
          ];
        }
        resolvedOptions() {
          let e = this.formatter.resolvedOptions();
          return (
            null == d &&
              (d =
                'h12' ===
                new Intl.DateTimeFormat('fr', { hour: 'numeric', hour12: !1 }).resolvedOptions()
                  .hourCycle),
            d &&
              (this.resolvedHourCycle ||
                (this.resolvedHourCycle = (function (e, u) {
                  if (!u.timeStyle && !u.hour) return;
                  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, '');
                  let a = i((e += (e.includes('-u-') ? '' : '-u') + '-nu-latn'), {
                      ...u,
                      timeZone: void 0,
                    }),
                    t = parseInt(
                      a.formatToParts(new Date(2020, 2, 3, 0)).find((e) => 'hour' === e.type).value,
                      10
                    ),
                    r = parseInt(
                      a.formatToParts(new Date(2020, 2, 3, 23)).find((e) => 'hour' === e.type)
                        .value,
                      10
                    );
                  if (0 === t && 23 === r) return 'h23';
                  if (24 === t && 23 === r) return 'h24';
                  if (0 === t && 11 === r) return 'h11';
                  if (12 === t && 11 === r) return 'h12';
                  throw Error('Unexpected hour cycle result');
                })(e.locale, this.options)),
              (e.hourCycle = this.resolvedHourCycle),
              (e.hour12 = 'h11' === this.resolvedHourCycle || 'h12' === this.resolvedHourCycle)),
            'ethiopic-amete-alem' === e.calendar && (e.calendar = 'ethioaa'),
            e
          );
        }
        constructor(e, u = {}) {
          (this.formatter = i(e, u)), (this.options = u);
        }
      }
      let n = { true: { ja: 'h11' }, false: {} };
      function i(e, u = {}) {
        if (
          'boolean' == typeof u.hour12 &&
          (null == o &&
            (o =
              '24' ===
              new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: !1 }).format(
                new Date(2020, 2, 3, 0)
              )),
          o)
        ) {
          let a = n[String((u = { ...u }).hour12)][e.split('-')[0]],
            t = u.hour12 ? 'h12' : 'h23';
          (u.hourCycle = null != a ? a : t), delete u.hour12;
        }
        let a =
          e +
          (u
            ? Object.entries(u)
                .sort((e, u) => (e[0] < u[0] ? -1 : 1))
                .join()
            : '');
        if (t.has(a)) return t.get(a);
        let r = new Intl.DateTimeFormat(e, u);
        return t.set(a, r), r;
      }
      let o = null,
        d = null;
    },
    95870: (e, u, a) => {
      a.d(u, { OX: () => g, cJ: () => f, pK: () => p });
      var t = a(76030),
        r = a(75385),
        n = a(7487),
        i = a(64513),
        o = a(15258),
        d = a(332),
        l = a(2728),
        s = a(7620),
        D = a(28566),
        m = a(9398),
        c = a(30559),
        y = a(37608);
      let g = new WeakMap(),
        p = '__role_' + Date.now(),
        h = '__focusManager_' + Date.now();
      function f(e, u, a) {
        var f, v;
        let B;
        let { isInvalid: x, validationErrors: C, validationDetails: E } = u.displayValidation,
          {
            labelProps: b,
            fieldProps: $,
            descriptionProps: F,
            errorMessageProps: R,
          } = (0, D.M)({
            ...e,
            labelElementType: 'span',
            isInvalid: x,
            errorMessage: e.errorMessage || C,
          }),
          k = (0, s.useRef)(null),
          { focusWithinProps: A } = (0, m.R)({
            ...e,
            onFocusWithin(a) {
              var t;
              (k.current = u.value), null === (t = e.onFocus) || void 0 === t || t.call(e, a);
            },
            onBlurWithin: (a) => {
              var t;
              u.confirmPlaceholder(),
                u.value !== k.current && u.commitValidation(),
                null === (t = e.onBlur) || void 0 === t || t.call(e, a);
            },
            onFocusWithinChange: e.onFocusChange,
          }),
          P = (0, y.o)((v = t.A) && v.__esModule ? v.default : v, '@react-aria/datepicker'),
          w = 'hour' === u.maxGranularity ? 'selectedTimeDescription' : 'selectedDateDescription',
          V = 'hour' === u.maxGranularity ? 'time' : 'date',
          S = u.value ? P.format(w, { [V]: u.formatValue({ month: 'long' }) }) : '',
          M = (0, i.I)(S),
          j =
            'presentation' === e[p]
              ? $['aria-describedby']
              : [M['aria-describedby'], $['aria-describedby']].filter(Boolean).join(' ') || void 0,
          z = e[h],
          I = (0, s.useMemo)(() => z || (0, n.C7)(a), [z, a]),
          O = (0, r.P)(u, a, 'presentation' === e[p]);
        g.set(u, {
          ariaLabel: e['aria-label'],
          ariaLabelledBy: [b.id, e['aria-labelledby']].filter(Boolean).join(' ') || void 0,
          ariaDescribedBy: j,
          focusManager: I,
        });
        let T = (0, s.useRef)(e.autoFocus);
        (B =
          'presentation' === e[p]
            ? { role: 'presentation' }
            : (0, o.v)($, {
                role: 'group',
                'aria-disabled': e.isDisabled || void 0,
                'aria-describedby': j,
              })),
          (0, s.useEffect)(() => {
            T.current && I.focusFirst(), (T.current = !1);
          }, [I]),
          (0, d.F)(e.inputRef, u.value, u.setValue),
          (0, c.X)(
            {
              ...e,
              focus() {
                I.focusFirst();
              },
            },
            u,
            e.inputRef
          );
        let Z = {
          type: 'hidden',
          name: e.name,
          value: (null === (f = u.value) || void 0 === f ? void 0 : f.toString()) || '',
          disabled: e.isDisabled,
        };
        'native' === e.validationBehavior &&
          ((Z.type = 'text'),
          (Z.hidden = !0),
          (Z.required = e.isRequired),
          (Z.onChange = () => {}));
        let U = (0, l.$)(e);
        return {
          labelProps: {
            ...b,
            onClick: () => {
              I.focusFirst();
            },
          },
          fieldProps: (0, o.v)(U, B, O, A, {
            onKeyDown(u) {
              e.onKeyDown && e.onKeyDown(u);
            },
            onKeyUp(u) {
              e.onKeyUp && e.onKeyUp(u);
            },
            style: { unicodeBidi: 'isolate' },
          }),
          inputProps: Z,
          descriptionProps: F,
          errorMessageProps: R,
          isInvalid: x,
          validationErrors: C,
          validationDetails: E,
        };
      }
    },
  },
]);
