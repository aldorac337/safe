'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [921],
  {
    31176: (t, i, s) => {
      s.d(i, {
        Ej: () => eM,
        HD: () => ev,
        Im: () => es,
        R9: () => s3,
        Sc: () => h,
        _q: () => l,
        mE: () => c,
        ti: () => ef,
      });
      var e,
        h,
        l,
        r,
        n,
        o,
        a,
        u,
        c,
        d,
        f = s(81413);
      let p = {
        title: '',
        visible: !0,
        lastValueVisible: !0,
        priceLineVisible: !0,
        priceLineSource: 0,
        priceLineWidth: 1,
        priceLineColor: '',
        priceLineStyle: 2,
        baseLineVisible: !0,
        baseLineWidth: 1,
        baseLineColor: '#B2B5BE',
        baseLineStyle: 0,
        priceFormat: { type: 'price', precision: 2, minMove: 0.01 },
      };
      function m(t, i) {
        let s = {
          0: [],
          1: [t.lineWidth, t.lineWidth],
          2: [2 * t.lineWidth, 2 * t.lineWidth],
          3: [6 * t.lineWidth, 6 * t.lineWidth],
          4: [t.lineWidth, 4 * t.lineWidth],
        }[i];
        t.setLineDash(s);
      }
      function g(t, i, s, e) {
        t.beginPath();
        let h = t.lineWidth % 2 ? 0.5 : 0;
        t.moveTo(s, i + h), t.lineTo(e, i + h), t.stroke();
      }
      function v(t, i) {
        if (!t) throw Error('Assertion failed' + (i ? ': ' + i : ''));
      }
      function w(t) {
        if (void 0 === t) throw Error('Value is undefined');
        return t;
      }
      function b(t) {
        if (null === t) throw Error('Value is null');
        return t;
      }
      function M(t) {
        return b(w(t));
      }
      !(function (t) {
        (t[(t.Simple = 0)] = 'Simple'),
          (t[(t.WithSteps = 1)] = 'WithSteps'),
          (t[(t.Curved = 2)] = 'Curved');
      })(e || (e = {})),
        (function (t) {
          (t[(t.Solid = 0)] = 'Solid'),
            (t[(t.Dotted = 1)] = 'Dotted'),
            (t[(t.Dashed = 2)] = 'Dashed'),
            (t[(t.LargeDashed = 3)] = 'LargeDashed'),
            (t[(t.SparseDotted = 4)] = 'SparseDotted');
        })(h || (h = {}));
      class y {
        constructor() {
          this.t = [];
        }
        i(t, i, s) {
          this.t.push({ h: t, l: i, o: !0 === s });
        }
        _(t) {
          let i = this.t.findIndex((i) => t === i.h);
          i > -1 && this.t.splice(i, 1);
        }
        u(t) {
          this.t = this.t.filter((i) => i.l !== t);
        }
        p(t, i, s) {
          let e = [...this.t];
          (this.t = this.t.filter((t) => !t.o)), e.forEach((e) => e.h(t, i, s));
        }
        v() {
          return this.t.length > 0;
        }
        m() {
          this.t = [];
        }
      }
      function x(t, ...i) {
        for (let s of i)
          for (let i in s)
            void 0 !== s[i] &&
              Object.prototype.hasOwnProperty.call(s, i) &&
              !['__proto__', 'constructor', 'prototype'].includes(i) &&
              ('object' != typeof s[i] || void 0 === t[i] || Array.isArray(s[i])
                ? (t[i] = s[i])
                : x(t[i], s[i]));
        return t;
      }
      function _(t) {
        return 'number' == typeof t && isFinite(t);
      }
      function S(t) {
        return 'number' == typeof t && t % 1 == 0;
      }
      function C(t) {
        return 'string' == typeof t;
      }
      function k(t) {
        return 'boolean' == typeof t;
      }
      function N(t) {
        let i, s, e;
        if (!t || 'object' != typeof t) return t;
        for (s in ((i = Array.isArray(t) ? [] : {}), t))
          t.hasOwnProperty(s) && ((e = t[s]), (i[s] = e && 'object' == typeof e ? N(e) : e));
        return i;
      }
      function Y(t) {
        return null !== t;
      }
      function z(t) {
        return null === t ? void 0 : t;
      }
      let R = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
      function T(t, i, s) {
        return void 0 === i && (i = R), `${(s = void 0 !== s ? `${s} ` : '')}${t}px ${i}`;
      }
      class E {
        constructor(t) {
          (this.M = {
            S: 1,
            C: 5,
            k: NaN,
            P: '',
            T: '',
            R: '',
            D: '',
            V: 0,
            I: 0,
            B: 0,
            A: 0,
            L: 0,
          }),
            (this.O = t);
        }
        N() {
          let t = this.M,
            i = this.W(),
            s = this.F();
          return (
            (t.k === i && t.T === s) ||
              ((t.k = i),
              (t.T = s),
              (t.P = T(i, s)),
              (t.A = (2.5 / 12) * i),
              (t.V = t.A),
              (t.I = (i / 12) * t.C),
              (t.B = (i / 12) * t.C),
              (t.L = 0)),
            (t.R = this.H()),
            (t.D = this.U()),
            this.M
          );
        }
        H() {
          return this.O.N().layout.textColor;
        }
        U() {
          return this.O.$();
        }
        W() {
          return this.O.N().layout.fontSize;
        }
        F() {
          return this.O.N().layout.fontFamily;
        }
      }
      function P(t) {
        return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
      }
      function V(t) {
        return 0.199 * t[0] + 0.687 * t[1] + 0.114 * t[2];
      }
      class D {
        constructor(t, i) {
          (this.q = new Map()), (this.Y = t), i && (this.q = i);
        }
        j(t, i) {
          if ('transparent' === t) return t;
          let s = this.K(t),
            e = s[3];
          return `rgba(${s[0]}, ${s[1]}, ${s[2]}, ${i * e})`;
        }
        X(t) {
          let i = this.K(t);
          return { Z: `rgb(${i[0]}, ${i[1]}, ${i[2]})`, G: V(i) > 160 ? 'black' : 'white' };
        }
        J(t) {
          return V(this.K(t));
        }
        tt(t, i, s) {
          var e;
          let [h, l, r, n] = this.K(t),
            [o, a, u, c] = this.K(i),
            d = [
              P(h + s * (o - h)),
              P(l + s * (a - l)),
              P(r + s * (u - r)),
              (e = n + s * (c - n)) <= 0 || e > 1
                ? Math.min(Math.max(e, 0), 1)
                : Math.round(1e4 * e) / 1e4,
            ];
          return `rgba(${d[0]}, ${d[1]}, ${d[2]}, ${d[3]})`;
        }
        K(t) {
          let i = this.q.get(t);
          if (i) return i;
          let s = (function (t) {
            let i = document.createElement('div');
            (i.style.display = 'none'), document.body.appendChild(i), (i.style.color = t);
            let s = window.getComputedStyle(i).color;
            return document.body.removeChild(i), s;
          })(t).match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);
          if (!s) {
            if (this.Y.length)
              for (let i of this.Y) {
                let s = i(t);
                if (s) return this.q.set(t, s), s;
              }
            throw Error(`Failed to parse color: ${t}`);
          }
          let e = [
            parseInt(s[1], 10),
            parseInt(s[2], 10),
            parseInt(s[3], 10),
            s[4] ? parseFloat(s[4]) : 1,
          ];
          return this.q.set(t, e), e;
        }
      }
      class W {
        constructor() {
          this.it = [];
        }
        st(t) {
          this.it = t;
        }
        nt(t, i, s) {
          this.it.forEach((e) => {
            e.nt(t, i, s);
          });
        }
      }
      class F {
        nt(t, i, s) {
          t.useBitmapCoordinateSpace((t) => this.et(t, i, s));
        }
      }
      class B extends F {
        constructor() {
          super(...arguments), (this.rt = null);
        }
        ht(t) {
          this.rt = t;
        }
        et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
          if (null === this.rt || null === this.rt.lt) return;
          let e = this.rt.lt,
            h = this.rt,
            l = (Math.max(1, Math.floor(i)) % 2) / 2,
            r = (r) => {
              t.beginPath();
              for (let n = e.to - 1; n >= e.from; --n) {
                let e = h.ot[n],
                  o = Math.round(e._t * i) + l,
                  a = e.ut * s,
                  u = r * s + l;
                t.moveTo(o, a), t.arc(o, a, u, 0, 2 * Math.PI);
              }
              t.fill();
            };
          h.ct > 0 && ((t.fillStyle = h.dt), r(h.ft + h.ct)), (t.fillStyle = h.vt), r(h.ft);
        }
      }
      function A() {
        return { ot: [{ _t: 0, ut: 0, wt: 0, gt: 0 }], vt: '', dt: '', ft: 0, ct: 0, lt: null };
      }
      let L = { from: 0, to: 1 };
      class O {
        constructor(t, i, s) {
          (this.Mt = new W()),
            (this.bt = []),
            (this.St = []),
            (this.xt = !0),
            (this.O = t),
            (this.Ct = i),
            (this.yt = s),
            this.Mt.st(this.bt);
        }
        kt(t) {
          this.Pt(), (this.xt = !0);
        }
        Tt() {
          return this.xt && (this.Rt(), (this.xt = !1)), this.Mt;
        }
        Pt() {
          let t = this.yt.Dt();
          t.length !== this.bt.length &&
            ((this.St = t.map(A)),
            (this.bt = this.St.map((t) => {
              let i = new B();
              return i.ht(t), i;
            })),
            this.Mt.st(this.bt));
        }
        Rt() {
          let t = 2 === this.Ct.N().mode || !this.Ct.Vt(),
            i = this.yt.It(),
            s = this.Ct.Bt(),
            e = this.O.At();
          this.Pt(),
            i.forEach((i, h) => {
              let l = this.St[h],
                r = i.Et(s),
                n = i.zt();
              !t && null !== r && i.Vt() && null !== n
                ? ((l.vt = r.Lt),
                  (l.ft = r.ft),
                  (l.ct = r.Ot),
                  (l.ot[0].gt = r.gt),
                  (l.ot[0].ut = i.Wt().Nt(r.gt, n.Ft)),
                  (l.dt = r.Ht ?? this.O.Ut(l.ot[0].ut / i.Wt().$t())),
                  (l.ot[0].wt = s),
                  (l.ot[0]._t = e.qt(s)),
                  (l.lt = L))
                : (l.lt = null);
            });
        }
      }
      class I extends F {
        constructor(t) {
          super(), (this.Yt = t);
        }
        et({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: e }) {
          if (null === this.Yt) return;
          let h = this.Yt.jt.Vt,
            l = this.Yt.Kt.Vt;
          if (!h && !l) return;
          let r = Math.round(this.Yt._t * s),
            n = Math.round(this.Yt.ut * e);
          (t.lineCap = 'butt'),
            h &&
              r >= 0 &&
              ((t.lineWidth = Math.floor(this.Yt.jt.ct * s)),
              (t.strokeStyle = this.Yt.jt.R),
              (t.fillStyle = this.Yt.jt.R),
              m(t, this.Yt.jt.Xt),
              (function (t, i, s, e) {
                t.beginPath();
                let h = t.lineWidth % 2 ? 0.5 : 0;
                t.moveTo(i + h, 0), t.lineTo(i + h, e), t.stroke();
              })(t, r, 0, i.height)),
            l &&
              n >= 0 &&
              ((t.lineWidth = Math.floor(this.Yt.Kt.ct * e)),
              (t.strokeStyle = this.Yt.Kt.R),
              (t.fillStyle = this.Yt.Kt.R),
              m(t, this.Yt.Kt.Xt),
              g(t, n, 0, i.width));
        }
      }
      class Q {
        constructor(t, i) {
          (this.xt = !0),
            (this.Zt = {
              jt: { ct: 1, Xt: 0, R: '', Vt: !1 },
              Kt: { ct: 1, Xt: 0, R: '', Vt: !1 },
              _t: 0,
              ut: 0,
            }),
            (this.Gt = new I(this.Zt)),
            (this.Jt = t),
            (this.yt = i);
        }
        kt() {
          this.xt = !0;
        }
        Tt(t) {
          return this.xt && (this.Rt(), (this.xt = !1)), this.Gt;
        }
        Rt() {
          let t = this.Jt.Vt(),
            i = this.yt.Qt().N().crosshair,
            s = this.Zt;
          if (2 === i.mode) return (s.Kt.Vt = !1), void (s.jt.Vt = !1);
          (s.Kt.Vt = t && this.Jt.ti(this.yt)),
            (s.jt.Vt = t && this.Jt.ii()),
            (s.Kt.ct = i.horzLine.width),
            (s.Kt.Xt = i.horzLine.style),
            (s.Kt.R = i.horzLine.color),
            (s.jt.ct = i.vertLine.width),
            (s.jt.Xt = i.vertLine.style),
            (s.jt.R = i.vertLine.color),
            (s._t = this.Jt.si()),
            (s.ut = this.Jt.ni());
        }
      }
      function X(t, i, s, e, h, l) {
        t.save(),
          (t.globalCompositeOperation = 'copy'),
          (t.fillStyle = l),
          t.fillRect(i, s, e, h),
          t.restore();
      }
      function J(t, i, s, e, h, l) {
        t.beginPath(),
          t.roundRect
            ? t.roundRect(i, s, e, h, l)
            : (t.lineTo(i + e - l[1], s),
              0 !== l[1] && t.arcTo(i + e, s, i + e, s + l[1], l[1]),
              t.lineTo(i + e, s + h - l[2]),
              0 !== l[2] && t.arcTo(i + e, s + h, i + e - l[2], s + h, l[2]),
              t.lineTo(i + l[3], s + h),
              0 !== l[3] && t.arcTo(i, s + h, i, s + h - l[3], l[3]),
              t.lineTo(i, s + l[0]),
              0 !== l[0] && t.arcTo(i, s, i + l[0], s, l[0]));
      }
      function $(t, i, s, e, h, l, r = 0, n = [0, 0, 0, 0], o = '') {
        var a;
        if ((t.save(), !r || !o || o === l))
          return J(t, i, s, e, h, n), (t.fillStyle = l), t.fill(), void t.restore();
        let u = r / 2;
        J(t, i + u, s + u, e - r, h - r, ((a = -u), n.map((t) => (0 === t ? t : t + a)))),
          'transparent' !== l && ((t.fillStyle = l), t.fill()),
          'transparent' !== o &&
            ((t.lineWidth = r), (t.strokeStyle = o), t.closePath(), t.stroke()),
          t.restore();
      }
      function U(t, i, s, e, h, l, r) {
        t.save(), (t.globalCompositeOperation = 'copy');
        let n = t.createLinearGradient(0, 0, 0, h);
        n.addColorStop(0, l),
          n.addColorStop(1, r),
          (t.fillStyle = n),
          t.fillRect(i, s, e, h),
          t.restore();
      }
      class K {
        constructor(t, i) {
          this.ht(t, i);
        }
        ht(t, i) {
          (this.Yt = t), (this.ei = i);
        }
        $t(t, i) {
          return this.Yt.Vt ? t.k + t.A + t.V : 0;
        }
        nt(t, i, s, e) {
          if (!this.Yt.Vt || 0 === this.Yt.ri.length) return;
          let h = this.Yt.R,
            l = this.ei.Z,
            r = t.useBitmapCoordinateSpace((t) => {
              let r = t.context;
              r.font = i.P;
              let n = this.hi(t, i, s, e),
                o = n.ai;
              return (
                n.li
                  ? $(r, o.oi, o._i, o.ui, o.ci, l, o.di, [o.ft, 0, 0, o.ft], l)
                  : $(r, o.fi, o._i, o.ui, o.ci, l, o.di, [0, o.ft, o.ft, 0], l),
                this.Yt.pi && ((r.fillStyle = h), r.fillRect(o.fi, o.mi, o.wi - o.fi, o.gi)),
                this.Yt.Mi &&
                  ((r.fillStyle = i.D),
                  r.fillRect(n.li ? o.bi - o.di : 0, o._i, o.di, o.Si - o._i)),
                n
              );
            });
          t.useMediaCoordinateSpace(({ context: t }) => {
            let s = r.xi;
            (t.font = i.P),
              (t.textAlign = r.li ? 'right' : 'left'),
              (t.textBaseline = 'middle'),
              (t.fillStyle = h),
              t.fillText(this.Yt.ri, s.Ci, (s._i + s.Si) / 2 + s.yi);
          });
        }
        hi(t, i, s, e) {
          let h, l, r;
          let {
              context: n,
              bitmapSize: o,
              mediaSize: a,
              horizontalPixelRatio: u,
              verticalPixelRatio: c,
            } = t,
            d = this.Yt.pi || !this.Yt.ki ? i.C : 0,
            f = this.Yt.Pi ? i.S : 0,
            p = i.A + this.ei.Ti,
            m = i.V + this.ei.Ri,
            g = i.I,
            v = i.B,
            w = this.Yt.ri,
            b = i.k,
            M = s.Di(n, w),
            y = Math.ceil(s.Vi(n, w)),
            x = i.S + g + v + y + d,
            _ = Math.max(1, Math.floor(c)),
            S = Math.round((b + p + m) * c);
          S % 2 != _ % 2 && (S += 1);
          let C = f > 0 ? Math.max(1, Math.floor(f * u)) : 0,
            k = Math.round(x * u),
            N = Math.round(d * u),
            Y = Math.round((this.ei.Ii ?? this.ei.Bi) * c) - Math.floor(0.5 * c),
            z = Math.floor(Y + _ / 2 - S / 2),
            R = z + S,
            T = 'right' === e,
            E = T ? a.width - f : f,
            P = T ? o.width - C : C;
          return (
            T
              ? ((h = P - k), (l = P - N), (r = E - d - g - f))
              : ((h = P + k), (l = P + N), (r = E + d + g)),
            {
              li: T,
              ai: {
                _i: z,
                mi: Y,
                Si: R,
                ui: k,
                ci: S,
                ft: 2 * u,
                di: C,
                oi: h,
                fi: P,
                wi: l,
                gi: _,
                bi: o.width,
              },
              xi: { _i: z / c, Si: R / c, Ci: r, yi: M },
            }
          );
        }
      }
      class G {
        constructor(t) {
          (this.Ai = { Bi: 0, Z: '#000', Ri: 0, Ti: 0 }),
            (this.Ei = { ri: '', Vt: !1, pi: !0, ki: !1, Ht: '', R: '#FFF', Mi: !1, Pi: !1 }),
            (this.zi = { ri: '', Vt: !1, pi: !1, ki: !0, Ht: '', R: '#FFF', Mi: !0, Pi: !0 }),
            (this.xt = !0),
            (this.Li = new (t || K)(this.Ei, this.Ai)),
            (this.Oi = new (t || K)(this.zi, this.Ai));
        }
        ri() {
          return this.Ni(), this.Ei.ri;
        }
        Bi() {
          return this.Ni(), this.Ai.Bi;
        }
        kt() {
          this.xt = !0;
        }
        $t(t, i = !1) {
          return Math.max(this.Li.$t(t, i), this.Oi.$t(t, i));
        }
        Wi() {
          return this.Ai.Ii || 0;
        }
        Fi(t) {
          this.Ai.Ii = t;
        }
        Hi() {
          return this.Ni(), this.Ei.Vt || this.zi.Vt;
        }
        Ui() {
          return this.Ni(), this.Ei.Vt;
        }
        Tt(t) {
          return (
            this.Ni(),
            (this.Ei.pi = this.Ei.pi && t.N().ticksVisible),
            (this.zi.pi = this.zi.pi && t.N().ticksVisible),
            this.Li.ht(this.Ei, this.Ai),
            this.Oi.ht(this.zi, this.Ai),
            this.Li
          );
        }
        $i() {
          return this.Ni(), this.Li.ht(this.Ei, this.Ai), this.Oi.ht(this.zi, this.Ai), this.Oi;
        }
        Ni() {
          this.xt && ((this.Ei.pi = !0), (this.zi.pi = !1), this.qi(this.Ei, this.zi, this.Ai));
        }
      }
      class H extends G {
        constructor(t, i, s) {
          super(), (this.Jt = t), (this.Yi = i), (this.ji = s);
        }
        qi(t, i, s) {
          if (((t.Vt = !1), 2 === this.Jt.N().mode)) return;
          let e = this.Jt.N().horzLine;
          if (!e.labelVisible) return;
          let h = this.Yi.zt();
          if (!this.Jt.Vt() || this.Yi.Ki() || null === h) return;
          let l = this.Yi.Xi().X(e.labelBackgroundColor);
          (s.Z = l.Z), (t.R = l.G);
          let r = (2 / 12) * this.Yi.k();
          (s.Ti = r), (s.Ri = r);
          let n = this.ji(this.Yi);
          (s.Bi = n.Bi), (t.ri = this.Yi.Zi(n.gt, h)), (t.Vt = !0);
        }
      }
      let Z = /[1-9]/g;
      class q {
        constructor() {
          this.Yt = null;
        }
        ht(t) {
          this.Yt = t;
        }
        nt(t, i) {
          if (null === this.Yt || !1 === this.Yt.Vt || 0 === this.Yt.ri.length) return;
          let s = t.useMediaCoordinateSpace(
            ({ context: t }) => ((t.font = i.P), Math.round(i.Gi.Vi(t, b(this.Yt).ri, Z)))
          );
          if (s <= 0) return;
          let e = i.Ji,
            h = s + 2 * e,
            l = h / 2,
            r = this.Yt.Qi,
            n = this.Yt.Bi,
            o = Math.floor(n - l) + 0.5;
          o < 0
            ? ((n += Math.abs(0 - o)), (o = Math.floor(n - l) + 0.5))
            : o + h > r && ((n -= Math.abs(r - (o + h))), (o = Math.floor(n - l) + 0.5));
          let a = o + h,
            u = Math.ceil(0 + i.S + i.C + i.A + i.k + i.V);
          t.useBitmapCoordinateSpace(
            ({ context: t, horizontalPixelRatio: s, verticalPixelRatio: e }) => {
              let h = b(this.Yt);
              t.fillStyle = h.Z;
              let l = Math.round(o * s),
                r = Math.round(0 * e),
                n = Math.round(a * s),
                c = Math.round(u * e),
                d = Math.round(2 * s);
              if (
                (t.beginPath(),
                t.moveTo(l, r),
                t.lineTo(l, c - d),
                t.arcTo(l, c, l + d, c, d),
                t.lineTo(n - d, c),
                t.arcTo(n, c, n, c - d, d),
                t.lineTo(n, r),
                t.fill(),
                h.pi)
              ) {
                let l = Math.round(h.Bi * s),
                  n = Math.round((r + i.C) * e);
                t.fillStyle = h.R;
                let o = Math.max(1, Math.floor(s)),
                  a = Math.floor(0.5 * s);
                t.fillRect(l - a, r, o, n - r);
              }
            }
          ),
            t.useMediaCoordinateSpace(({ context: t }) => {
              let s = b(this.Yt),
                h = 0 + i.S + i.C + i.A + i.k / 2;
              (t.font = i.P),
                (t.textAlign = 'left'),
                (t.textBaseline = 'middle'),
                (t.fillStyle = s.R);
              let l = i.Gi.Di(t, 'Apr0');
              t.translate(o + e, h + l), t.fillText(s.ri, 0, 0);
            });
        }
      }
      class j {
        constructor(t, i, s) {
          (this.xt = !0),
            (this.Gt = new q()),
            (this.Zt = { Vt: !1, Z: '#4c525e', R: 'white', ri: '', Qi: 0, Bi: NaN, pi: !0 }),
            (this.Ct = t),
            (this.ts = i),
            (this.ji = s);
        }
        kt() {
          this.xt = !0;
        }
        Tt() {
          return this.xt && (this.Rt(), (this.xt = !1)), this.Gt.ht(this.Zt), this.Gt;
        }
        Rt() {
          let t = this.Zt;
          if (((t.Vt = !1), 2 === this.Ct.N().mode)) return;
          let i = this.Ct.N().vertLine;
          if (!i.labelVisible) return;
          let s = this.ts.At();
          if (s.Ki()) return;
          t.Qi = s.Qi();
          let e = this.ji();
          if (null === e) return;
          t.Bi = e.Bi;
          let h = s.ss(this.Ct.Bt());
          (t.ri = s.ns(b(h))), (t.Vt = !0);
          let l = this.ts.Xi().X(i.labelBackgroundColor);
          (t.Z = l.Z), (t.R = l.G), (t.pi = s.N().ticksVisible);
        }
      }
      class tt {
        constructor() {
          (this.es = null), (this.rs = 0);
        }
        hs() {
          return this.rs;
        }
        ls(t) {
          this.rs = t;
        }
        Wt() {
          return this.es;
        }
        _s(t) {
          this.es = t;
        }
        us(t) {
          return [];
        }
        cs() {
          return [];
        }
        Vt() {
          return !0;
        }
      }
      !(function (t) {
        (t[(t.Normal = 0)] = 'Normal'),
          (t[(t.Magnet = 1)] = 'Magnet'),
          (t[(t.Hidden = 2)] = 'Hidden'),
          (t[(t.MagnetOHLC = 3)] = 'MagnetOHLC');
      })(l || (l = {}));
      class ti extends tt {
        constructor(t, i) {
          let s, e, h, l;
          super(),
            (this.yt = null),
            (this.ds = NaN),
            (this.fs = 0),
            (this.ps = !1),
            (this.vs = new Map()),
            (this.ws = !1),
            (this.gs = new WeakMap()),
            (this.Ms = new WeakMap()),
            (this.bs = NaN),
            (this.Ss = NaN),
            (this.xs = NaN),
            (this.Cs = NaN),
            (this.ts = t),
            (this.ys = i),
            (this.ks =
              ((s = () => this.ds),
              (e = () => this.Ss),
              (t) => {
                let i = e(),
                  h = s();
                if (t === b(this.yt).Ps()) return { gt: h, Bi: i };
                {
                  let s = b(t.zt());
                  return { gt: t.Ts(i, s), Bi: i };
                }
              }));
          let r =
            ((h = () => this.fs),
            (l = () => this.si()),
            () => {
              let t = this.ts.At().Rs(h()),
                i = l();
              return t && Number.isFinite(i) ? { wt: t, Bi: i } : null;
            });
          this.Ds = new j(this, t, r);
        }
        N() {
          return this.ys;
        }
        Vs(t, i) {
          (this.xs = t), (this.Cs = i);
        }
        Is() {
          (this.xs = NaN), (this.Cs = NaN);
        }
        Bs() {
          return this.xs;
        }
        As() {
          return this.Cs;
        }
        Es(t, i, s) {
          this.ws || (this.ws = !0), (this.ps = !0), this.zs(t, i, s);
        }
        Bt() {
          return this.fs;
        }
        si() {
          return this.bs;
        }
        ni() {
          return this.Ss;
        }
        Vt() {
          return this.ps;
        }
        Ls() {
          (this.ps = !1),
            this.Os(),
            (this.ds = NaN),
            (this.bs = NaN),
            (this.Ss = NaN),
            (this.yt = null),
            this.Is(),
            this.Ns();
        }
        Ws(t) {
          let i = this.gs.get(t);
          i || ((i = new Q(this, t)), this.gs.set(t, i));
          let s = this.Ms.get(t);
          return s || ((s = new O(this.ts, this, t)), this.Ms.set(t, s)), [i, s];
        }
        ti(t) {
          return t === this.yt && this.ys.horzLine.visible;
        }
        ii() {
          return this.ys.vertLine.visible;
        }
        Fs(t, i) {
          (this.ps && this.yt === t) || this.vs.clear();
          let s = [];
          return this.yt === t && s.push(this.Hs(this.vs, i, this.ks)), s;
        }
        cs() {
          return this.ps ? [this.Ds] : [];
        }
        Us() {
          return this.yt;
        }
        Ns() {
          this.ts.$s().forEach((t) => {
            this.gs.get(t)?.kt(), this.Ms.get(t)?.kt();
          }),
            this.vs.forEach((t) => t.kt()),
            this.Ds.kt();
        }
        qs(t) {
          return t && !t.Ps().Ki() ? t.Ps() : null;
        }
        zs(t, i, s) {
          this.Ys(t, i, s) && this.Ns();
        }
        Ys(t, i, s) {
          let e = this.bs,
            h = this.Ss,
            l = this.ds,
            r = this.fs,
            n = this.yt,
            o = this.qs(s);
          (this.fs = t), (this.bs = isNaN(t) ? NaN : this.ts.At().qt(t)), (this.yt = s);
          let a = null !== o ? o.zt() : null;
          return (
            null !== o && null !== a
              ? ((this.ds = i), (this.Ss = o.Nt(i, a)))
              : ((this.ds = NaN), (this.Ss = NaN)),
            e !== this.bs || h !== this.Ss || r !== this.fs || l !== this.ds || n !== this.yt
          );
        }
        Os() {
          let t = this.ts
              .js()
              .map((t) => t.Xs().Ks())
              .filter(Y),
            i = 0 === t.length ? null : Math.max(...t);
          this.fs = null !== i ? i : NaN;
        }
        Hs(t, i, s) {
          let e = t.get(i);
          return void 0 === e && ((e = new H(this, i, s)), t.set(i, e)), e;
        }
      }
      function ts(t) {
        return 'left' === t || 'right' === t;
      }
      class te {
        constructor(t) {
          (this.Zs = new Map()), (this.Gs = []), (this.Js = t);
        }
        Qs(t, i) {
          var s;
          let e =
            void 0 === (s = this.Zs.get(t)) ? i : { tn: Math.max(s.tn, i.tn), sn: s.sn || i.sn };
          this.Zs.set(t, e);
        }
        nn() {
          return this.Js;
        }
        en(t) {
          let i = this.Zs.get(t);
          return void 0 === i ? { tn: this.Js } : { tn: Math.max(this.Js, i.tn), sn: i.sn };
        }
        rn() {
          this.hn(), (this.Gs = [{ an: 0 }]);
        }
        ln(t) {
          this.hn(), (this.Gs = [{ an: 1, Ft: t }]);
        }
        _n(t) {
          this.un(), this.Gs.push({ an: 5, Ft: t });
        }
        hn() {
          this.un(), this.Gs.push({ an: 6 });
        }
        cn() {
          this.hn(), (this.Gs = [{ an: 4 }]);
        }
        dn(t) {
          this.hn(), this.Gs.push({ an: 2, Ft: t });
        }
        fn(t) {
          this.hn(), this.Gs.push({ an: 3, Ft: t });
        }
        pn() {
          return this.Gs;
        }
        vn(t) {
          for (let i of t.Gs) this.mn(i);
          (this.Js = Math.max(this.Js, t.Js)),
            t.Zs.forEach((t, i) => {
              this.Qs(i, t);
            });
        }
        static wn() {
          return new te(2);
        }
        static gn() {
          return new te(3);
        }
        mn(t) {
          switch (t.an) {
            case 0:
              this.rn();
              break;
            case 1:
              this.ln(t.Ft);
              break;
            case 2:
              this.dn(t.Ft);
              break;
            case 3:
              this.fn(t.Ft);
              break;
            case 4:
              this.cn();
              break;
            case 5:
              this._n(t.Ft);
              break;
            case 6:
              this.un();
          }
        }
        un() {
          let t = this.Gs.findIndex((t) => 5 === t.an);
          -1 !== t && this.Gs.splice(t, 1);
        }
      }
      function th(t, i) {
        if (!_(t)) return 'n/a';
        if (!S(i) || i < 0 || i > 16) throw TypeError('invalid length');
        return 0 === i ? t.toString() : ('0000000000000000' + t.toString()).slice(-i);
      }
      class tl {
        constructor(t, i) {
          if ((i || (i = 1), (_(t) && S(t)) || (t = 100), t < 0)) throw TypeError('invalid base');
          (this.Yi = t), (this.Mn = i), this.bn();
        }
        format(t) {
          let i = t < 0 ? '−' : '';
          return (t = Math.abs(t)), i + this.Sn(t);
        }
        bn() {
          if (((this.xn = 0), this.Yi > 0 && this.Mn > 0)) {
            let t = this.Yi;
            for (; t > 1; ) (t /= 10), this.xn++;
          }
        }
        Sn(t) {
          let i = this.Yi / this.Mn,
            s = Math.floor(t),
            e = '',
            h = void 0 !== this.xn ? this.xn : NaN;
          if (i > 1) {
            let l = +(Math.round(t * i) - s * i).toFixed(this.xn);
            l >= i && ((l -= i), (s += 1)), (e = '.' + th(+l.toFixed(this.xn) * this.Mn, h));
          } else (s = Math.round(s * i) / i), h > 0 && (e = '.' + th(0, h));
          return s.toFixed(0) + e;
        }
      }
      class tr extends tl {
        constructor(t = 100) {
          super(t);
        }
        format(t) {
          return `${super.format(t)}%`;
        }
      }
      class tn {
        constructor(t) {
          this.Cn = t;
        }
        format(t) {
          let i = '';
          return (
            t < 0 && ((i = '-'), (t = -t)),
            t < 995
              ? i + this.yn(t)
              : t < 999995
                ? i + this.yn(t / 1e3) + 'K'
                : t < 0x3b9ac9fb
                  ? ((t = 1e3 * Math.round(t / 1e3)), i + this.yn(t / 1e6) + 'M')
                  : ((t = 1e6 * Math.round(t / 1e6)), i + this.yn(t / 1e9) + 'B')
          );
        }
        yn(t) {
          let i = Math.pow(10, this.Cn);
          return (
            (t = Math.round(t * i) / i) >= 1e-15 && t < 1
              ? t.toFixed(this.Cn).replace(/\.?0+$/, '')
              : String(t)
          ).replace(/(\.[1-9]*)0+$/, (t, i) => i);
        }
      }
      let to = /[2-9]/g;
      class ta {
        constructor(t = 50) {
          (this.kn = 0),
            (this.Pn = 1),
            (this.Tn = 1),
            (this.Rn = {}),
            (this.Dn = new Map()),
            (this.Vn = t);
        }
        In() {
          (this.kn = 0), this.Dn.clear(), (this.Pn = 1), (this.Tn = 1), (this.Rn = {});
        }
        Vi(t, i, s) {
          return this.Bn(t, i, s).width;
        }
        Di(t, i, s) {
          let e = this.Bn(t, i, s);
          return ((e.actualBoundingBoxAscent || 0) - (e.actualBoundingBoxDescent || 0)) / 2;
        }
        Bn(t, i, s) {
          let e = String(i).replace(s || to, '0');
          if (this.Dn.has(e)) return w(this.Dn.get(e)).An;
          if (this.kn === this.Vn) {
            let t = this.Rn[this.Tn];
            delete this.Rn[this.Tn], this.Dn.delete(t), this.Tn++, this.kn--;
          }
          t.save(), (t.textBaseline = 'middle');
          let h = t.measureText(e);
          return (
            t.restore(),
            (0 === h.width && i.length) ||
              (this.Dn.set(e, { An: h, En: this.Pn }),
              (this.Rn[this.Pn] = e),
              this.kn++,
              this.Pn++),
            h
          );
        }
      }
      class tu {
        constructor(t) {
          (this.zn = null), (this.M = null), (this.Ln = 'right'), (this.On = t);
        }
        Nn(t, i, s) {
          (this.zn = t), (this.M = i), (this.Ln = s);
        }
        nt(t) {
          null !== this.M && null !== this.zn && this.zn.nt(t, this.M, this.On, this.Ln);
        }
      }
      class tc {
        constructor(t, i, s) {
          (this.Wn = t),
            (this.On = new ta(50)),
            (this.Fn = i),
            (this.O = s),
            (this.W = -1),
            (this.Gt = new tu(this.On));
        }
        Tt() {
          let t = this.O.Hn(this.Fn);
          if (null === t) return null;
          let i = t.Un(this.Fn) ? t.$n() : this.Fn.Wt();
          if (null === i) return null;
          let s = t.qn(i);
          if ('overlay' === s) return null;
          let e = this.O.Yn();
          return (
            e.k !== this.W && ((this.W = e.k), this.On.In()),
            this.Gt.Nn(this.Wn.$i(), e, s),
            this.Gt
          );
        }
      }
      class td extends F {
        constructor() {
          super(...arguments), (this.Yt = null);
        }
        ht(t) {
          this.Yt = t;
        }
        jn(t, i) {
          if (!this.Yt?.Vt) return null;
          let { ut: s, ct: e, Kn: h } = this.Yt;
          return i >= s - e - 7 && i <= s + e + 7 ? { Xn: this.Yt, Kn: h } : null;
        }
        et({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: e }) {
          if (null === this.Yt || !1 === this.Yt.Vt) return;
          let h = Math.round(this.Yt.ut * e);
          h < 0 ||
            h > i.height ||
            ((t.lineCap = 'butt'),
            (t.strokeStyle = this.Yt.R),
            (t.lineWidth = Math.floor(this.Yt.ct * s)),
            m(t, this.Yt.Xt),
            g(t, h, 0, i.width));
        }
      }
      class tf {
        constructor(t) {
          (this.Zn = { ut: 0, R: 'rgba(0, 0, 0, 0)', ct: 1, Xt: 0, Vt: !1 }),
            (this.Gn = new td()),
            (this.xt = !0),
            (this.Jn = t),
            (this.Qn = t.Qt()),
            this.Gn.ht(this.Zn);
        }
        kt() {
          this.xt = !0;
        }
        Tt() {
          return this.Jn.Vt() ? (this.xt && (this.te(), (this.xt = !1)), this.Gn) : null;
        }
      }
      class tp extends tf {
        constructor(t) {
          super(t);
        }
        te() {
          this.Zn.Vt = !1;
          let t = this.Jn.Wt(),
            i = t.ie().ie;
          if (2 !== i && 3 !== i) return;
          let s = this.Jn.N();
          if (!s.baseLineVisible || !this.Jn.Vt()) return;
          let e = this.Jn.zt();
          null !== e &&
            ((this.Zn.Vt = !0),
            (this.Zn.ut = t.Nt(e.Ft, e.Ft)),
            (this.Zn.R = s.baseLineColor),
            (this.Zn.ct = s.baseLineWidth),
            (this.Zn.Xt = s.baseLineStyle));
        }
      }
      class tm extends F {
        constructor() {
          super(...arguments), (this.Yt = null);
        }
        ht(t) {
          this.Yt = t;
        }
        se() {
          return this.Yt;
        }
        et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
          let e = this.Yt;
          if (null === e) return;
          let h = Math.max(1, Math.floor(i)),
            l = (h % 2) / 2,
            r = Math.round(e.ne.x * i) + l,
            n = e.ne.y * s;
          (t.fillStyle = e.ee), t.beginPath();
          let o = Math.max(2, 1.5 * e.re) * i;
          t.arc(r, n, o, 0, 2 * Math.PI, !1),
            t.fill(),
            (t.fillStyle = e.he),
            t.beginPath(),
            t.arc(r, n, e.ft * i, 0, 2 * Math.PI, !1),
            t.fill(),
            (t.lineWidth = h),
            (t.strokeStyle = e.ae),
            t.beginPath(),
            t.arc(r, n, e.ft * i + h / 2, 0, 2 * Math.PI, !1),
            t.stroke();
        }
      }
      let tg = [
        { le: 0, oe: 0.25, _e: 4, ue: 10, ce: 0.25, de: 0, fe: 0.4, pe: 0.8 },
        { le: 0.25, oe: 0.525, _e: 10, ue: 14, ce: 0, de: 0, fe: 0.8, pe: 0 },
        { le: 0.525, oe: 1, _e: 14, ue: 14, ce: 0, de: 0, fe: 0, pe: 0 },
      ];
      class tv {
        constructor(t) {
          (this.Gt = new tm()),
            (this.xt = !0),
            (this.ve = !0),
            (this.me = performance.now()),
            (this.we = this.me - 1),
            (this.ge = t);
        }
        Me() {
          (this.we = this.me - 1), this.kt();
        }
        be() {
          if ((this.kt(), 2 === this.ge.N().lastPriceAnimation)) {
            let t = performance.now(),
              i = this.we - t;
            if (i > 0) return void (i < 650 && (this.we += 2600));
            (this.me = t), (this.we = t + 2600);
          }
        }
        kt() {
          this.xt = !0;
        }
        Se() {
          this.ve = !0;
        }
        Vt() {
          return 0 !== this.ge.N().lastPriceAnimation;
        }
        xe() {
          switch (this.ge.N().lastPriceAnimation) {
            case 0:
              return !1;
            case 1:
              return !0;
            case 2:
              return performance.now() <= this.we;
          }
        }
        Tt() {
          return (
            this.xt
              ? (this.Rt(), (this.xt = !1), (this.ve = !1))
              : this.ve && (this.Ce(), (this.ve = !1)),
            this.Gt
          );
        }
        Rt() {
          this.Gt.ht(null);
          let t = this.ge.Qt().At(),
            i = t.ye(),
            s = this.ge.zt();
          if (null === i || null === s) return;
          let e = this.ge.ke(!0);
          if (e.Pe || !i.Te(e.Re)) return;
          let h = { x: t.qt(e.Re), y: this.ge.Wt().Nt(e.gt, s.Ft) },
            l = e.R,
            r = this.ge.N().lineWidth,
            n = this.De(this.Ve(), l);
          this.Gt.ht({ ee: l, re: r, he: n.he, ae: n.ae, ft: n.ft, ne: h });
        }
        Ce() {
          let t = this.Gt.se();
          if (null !== t) {
            let i = this.De(this.Ve(), t.ee);
            (t.he = i.he), (t.ae = i.ae), (t.ft = i.ft);
          }
        }
        Ve() {
          return this.xe() ? performance.now() - this.me : 2599;
        }
        Ie(t, i, s, e) {
          return this.ge
            .Qt()
            .Xi()
            .j(t, s + (e - s) * i);
        }
        De(t, i) {
          var s;
          let e;
          let h = (t % 2600) / 2600;
          for (let t of tg)
            if (h >= t.le && h <= t.oe) {
              e = t;
              break;
            }
          v(void 0 !== e, 'Last price animation internal logic error');
          let l = (h - e.le) / (e.oe - e.le);
          return {
            he: this.Ie(i, l, e.ce, e.de),
            ae: this.Ie(i, l, e.fe, e.pe),
            ft: (s = e._e) + (e.ue - s) * l,
          };
        }
      }
      class tw extends tf {
        constructor(t) {
          super(t);
        }
        te() {
          let t = this.Zn;
          t.Vt = !1;
          let i = this.Jn.N();
          if (!i.priceLineVisible || !this.Jn.Vt()) return;
          let s = this.Jn.ke(0 === i.priceLineSource);
          s.Pe ||
            ((t.Vt = !0),
            (t.ut = s.Bi),
            (t.R = this.Jn.Be(s.R)),
            (t.ct = i.priceLineWidth),
            (t.Xt = i.priceLineStyle));
        }
      }
      class tb extends G {
        constructor(t) {
          super(), (this.Jt = t);
        }
        qi(t, i, s) {
          (t.Vt = !1), (i.Vt = !1);
          let e = this.Jt;
          if (!e.Vt()) return;
          let h = e.N(),
            l = h.lastValueVisible,
            r = '' !== e.Ae(),
            n = 0 === h.seriesLastValueMode,
            o = e.ke(!1);
          if (o.Pe) return;
          l && ((t.ri = this.Ee(o, l, n)), (t.Vt = 0 !== t.ri.length)),
            (r || n) && ((i.ri = this.ze(o, l, r, n)), (i.Vt = i.ri.length > 0));
          let a = e.Be(o.R),
            u = this.Jt.Qt().Xi().X(a);
          (s.Z = u.Z),
            (s.Bi = o.Bi),
            (i.Ht = e.Qt().Ut(o.Bi / e.Wt().$t())),
            (t.Ht = a),
            (t.R = u.G),
            (i.R = u.G);
        }
        ze(t, i, s, e) {
          let h = '',
            l = this.Jt.Ae();
          return (
            s && 0 !== l.length && (h += `${l} `),
            i && e && (h += this.Jt.Wt().Le() ? t.Oe : t.Ne),
            h.trim()
          );
        }
        Ee(t, i, s) {
          return i ? (s ? (this.Jt.Wt().Le() ? t.Ne : t.Oe) : t.ri) : '';
        }
      }
      function tM(t, i, s, e) {
        let h = Number.isFinite(i),
          l = Number.isFinite(s);
        return h && l ? t(i, s) : h || l ? (h ? i : s) : e;
      }
      class ty {
        constructor(t, i) {
          (this.We = t), (this.Fe = i);
        }
        He(t) {
          return null !== t && this.We === t.We && this.Fe === t.Fe;
        }
        Ue() {
          return new ty(this.We, this.Fe);
        }
        $e() {
          return this.We;
        }
        qe() {
          return this.Fe;
        }
        Ye() {
          return this.Fe - this.We;
        }
        Ki() {
          return this.Fe === this.We || Number.isNaN(this.Fe) || Number.isNaN(this.We);
        }
        vn(t) {
          return null === t
            ? this
            : new ty(
                tM(Math.min, this.$e(), t.$e(), -1 / 0),
                tM(Math.max, this.qe(), t.qe(), 1 / 0)
              );
        }
        je(t) {
          if (!_(t) || 0 == this.Fe - this.We) return;
          let i = 0.5 * (this.Fe + this.We),
            s = this.Fe - i,
            e = this.We - i;
          (s *= t), (e *= t), (this.Fe = i + s), (this.We = i + e);
        }
        Ke(t) {
          _(t) && ((this.Fe += t), (this.We += t));
        }
        Xe() {
          return { minValue: this.We, maxValue: this.Fe };
        }
        static Ze(t) {
          return null === t ? null : new ty(t.minValue, t.maxValue);
        }
      }
      class tx {
        constructor(t, i) {
          (this.Ge = t), (this.Je = i || null);
        }
        Qe() {
          return this.Ge;
        }
        tr() {
          return this.Je;
        }
        Xe() {
          return { priceRange: null === this.Ge ? null : this.Ge.Xe(), margins: this.Je || void 0 };
        }
        static Ze(t) {
          return null === t ? null : new tx(ty.Ze(t.priceRange), t.margins);
        }
      }
      class t_ extends tf {
        constructor(t, i) {
          super(t), (this.ir = i);
        }
        te() {
          let t = this.Zn;
          t.Vt = !1;
          let i = this.ir.N();
          if (!this.Jn.Vt() || !i.lineVisible) return;
          let s = this.ir.sr();
          null !== s &&
            ((t.Vt = !0),
            (t.ut = s),
            (t.R = i.color),
            (t.ct = i.lineWidth),
            (t.Xt = i.lineStyle),
            (t.Kn = this.ir.N().id));
        }
      }
      class tS extends G {
        constructor(t, i) {
          super(), (this.ge = t), (this.ir = i);
        }
        qi(t, i, s) {
          (t.Vt = !1), (i.Vt = !1);
          let e = this.ir.N(),
            h = e.axisLabelVisible,
            l = '' !== e.title,
            r = this.ge;
          if (!h || !r.Vt()) return;
          let n = this.ir.sr();
          if (null === n) return;
          l && ((i.ri = e.title), (i.Vt = !0)),
            (i.Ht = r.Qt().Ut(n / r.Wt().$t())),
            (t.ri = this.nr(e.price)),
            (t.Vt = !0);
          let o = this.ge
            .Qt()
            .Xi()
            .X(e.axisLabelColor || e.color);
          s.Z = o.Z;
          let a = e.axisLabelTextColor || o.G;
          (t.R = a), (i.R = a), (s.Bi = n);
        }
        nr(t) {
          let i = this.ge.zt();
          return null === i ? '' : this.ge.Wt().Zi(t, i.Ft);
        }
      }
      class tC {
        constructor(t, i) {
          (this.ge = t),
            (this.ys = i),
            (this.er = new t_(t, this)),
            (this.Wn = new tS(t, this)),
            (this.rr = new tc(this.Wn, t, t.Qt()));
        }
        hr(t) {
          x(this.ys, t), this.kt(), this.ge.Qt().ar();
        }
        N() {
          return this.ys;
        }
        lr() {
          return this.er;
        }
        _r() {
          return this.rr;
        }
        ur() {
          return this.Wn;
        }
        kt() {
          this.er.kt(), this.Wn.kt();
        }
        sr() {
          let t = this.ge,
            i = t.Wt();
          if (t.Qt().At().Ki() || i.Ki()) return null;
          let s = t.zt();
          return null === s ? null : i.Nt(this.ys.price, s.Ft);
        }
      }
      class tk extends tt {
        constructor(t) {
          super(), (this.ts = t);
        }
        Qt() {
          return this.ts;
        }
      }
      let tN = {
        Bar: (t, i, s, e) => {
          let h = i.upColor,
            l = i.downColor,
            r = b(t(s, e)),
            n = M(r.Ft[0]) <= M(r.Ft[3]);
          return { cr: r.R ?? (n ? h : l) };
        },
        Candlestick: (t, i, s, e) => {
          let h = i.upColor,
            l = i.downColor,
            r = i.borderUpColor,
            n = i.borderDownColor,
            o = i.wickUpColor,
            a = i.wickDownColor,
            u = b(t(s, e)),
            c = M(u.Ft[0]) <= M(u.Ft[3]);
          return { cr: u.R ?? (c ? h : l), dr: u.Ht ?? (c ? r : n), pr: u.vr ?? (c ? o : a) };
        },
        Custom: (t, i, s, e) => ({ cr: b(t(s, e)).R ?? i.color }),
        Area: (t, i, s, e) => {
          let h = b(t(s, e));
          return {
            cr: h.vt ?? i.lineColor,
            vt: h.vt ?? i.lineColor,
            mr: h.mr ?? i.topColor,
            wr: h.wr ?? i.bottomColor,
          };
        },
        Baseline: (t, i, s, e) => {
          let h = b(t(s, e));
          return {
            cr: h.Ft[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
            gr: h.gr ?? i.topLineColor,
            Mr: h.Mr ?? i.bottomLineColor,
            br: h.br ?? i.topFillColor1,
            Sr: h.Sr ?? i.topFillColor2,
            Cr: h.Cr ?? i.bottomFillColor1,
            yr: h.yr ?? i.bottomFillColor2,
          };
        },
        Line: (t, i, s, e) => {
          let h = b(t(s, e));
          return { cr: h.R ?? i.color, vt: h.R ?? i.color };
        },
        Histogram: (t, i, s, e) => ({ cr: b(t(s, e)).R ?? i.color }),
      };
      class tY {
        constructor(t) {
          (this.kr = (t, i) => (void 0 !== i ? i.Ft : this.ge.Xs().Pr(t))),
            (this.ge = t),
            (this.Tr = tN[t.Rr()]);
        }
        Dr(t, i) {
          return this.Tr(this.kr, this.ge.N(), t, i);
        }
      }
      function tz(t, i, s, e, h = 0, l = i.length) {
        let r = l - h;
        for (; 0 < r; ) {
          let l = r >> 1,
            n = h + l;
          e(i[n], s) === t ? ((h = n + 1), (r -= l + 1)) : (r = l);
        }
        return h;
      }
      let tR = tz.bind(null, !0),
        tT = tz.bind(null, !1);
      !(function (t) {
        (t[(t.NearestLeft = -1)] = 'NearestLeft'),
          (t[(t.None = 0)] = 'None'),
          (t[(t.NearestRight = 1)] = 'NearestRight');
      })(r || (r = {}));
      class tE {
        constructor() {
          (this.Vr = []), (this.Ir = new Map()), (this.Br = new Map()), (this.Ar = []);
        }
        Er() {
          return this.zr() > 0 ? this.Vr[this.Vr.length - 1] : null;
        }
        Lr() {
          return this.zr() > 0 ? this.Or(0) : null;
        }
        Ks() {
          return this.zr() > 0 ? this.Or(this.Vr.length - 1) : null;
        }
        zr() {
          return this.Vr.length;
        }
        Ki() {
          return 0 === this.zr();
        }
        Te(t) {
          return null !== this.Nr(t, 0);
        }
        Pr(t) {
          return this.Wr(t);
        }
        Wr(t, i = 0) {
          let s = this.Nr(t, i);
          return null === s ? null : { ...this.Fr(s), Re: this.Or(s) };
        }
        Hr() {
          return this.Vr;
        }
        Ur(t, i, s) {
          if (this.Ki()) return null;
          let e = null;
          for (let h of s) e = tP(e, this.$r(t, i, h));
          return e;
        }
        ht(t) {
          this.Br.clear(), this.Ir.clear(), (this.Vr = t), (this.Ar = t.map((t) => t.Re));
        }
        qr() {
          return this.Ar;
        }
        Or(t) {
          return this.Vr[t].Re;
        }
        Fr(t) {
          return this.Vr[t];
        }
        Nr(t, i) {
          let s = this.Yr(t);
          if (null === s && 0 !== i)
            switch (i) {
              case -1:
                return this.jr(t);
              case 1:
                return this.Kr(t);
              default:
                throw TypeError('Unknown search mode');
            }
          return s;
        }
        jr(t) {
          let i = this.Xr(t);
          return i > 0 && (i -= 1), i !== this.Vr.length && this.Or(i) < t ? i : null;
        }
        Kr(t) {
          let i = this.Zr(t);
          return i !== this.Vr.length && t < this.Or(i) ? i : null;
        }
        Yr(t) {
          let i = this.Xr(t);
          return i === this.Vr.length || t < this.Vr[i].Re ? null : i;
        }
        Xr(t) {
          return tR(this.Vr, t, (t, i) => t.Re < i);
        }
        Zr(t) {
          return tT(this.Vr, t, (t, i) => t.Re > i);
        }
        Gr(t, i, s) {
          let e = null;
          for (let h = t; h < i; h++) {
            let t = this.Vr[h].Ft[s];
            Number.isNaN(t) ||
              (null === e
                ? (e = { Jr: t, Qr: t })
                : (t < e.Jr && (e.Jr = t), t > e.Qr && (e.Qr = t)));
          }
          return e;
        }
        $r(t, i, s) {
          if (this.Ki()) return null;
          let e = null,
            h = b(this.Lr()),
            l = b(this.Ks()),
            r = Math.max(t, h),
            n = Math.min(i, l),
            o = 30 * Math.ceil(r / 30),
            a = Math.max(o, 30 * Math.floor(n / 30));
          {
            let t = this.Xr(r),
              h = this.Zr(Math.min(n, o, i));
            e = tP(e, this.Gr(t, h, s));
          }
          let u = this.Ir.get(s);
          void 0 === u && ((u = new Map()), this.Ir.set(s, u));
          for (let t = Math.max(o + 1, r); t < a; t += 30) {
            let i = Math.floor(t / 30),
              h = u.get(i);
            if (void 0 === h) {
              let t = this.Xr(30 * i),
                e = this.Zr((i + 1) * 30 - 1);
              (h = this.Gr(t, e, s)), u.set(i, h);
            }
            e = tP(e, h);
          }
          {
            let t = this.Xr(a),
              i = this.Zr(n);
            e = tP(e, this.Gr(t, i, s));
          }
          return e;
        }
      }
      function tP(t, i) {
        return null === t
          ? i
          : null === i
            ? t
            : { Jr: Math.min(t.Jr, i.Jr), Qr: Math.max(t.Qr, i.Qr) };
      }
      class tV {
        constructor(t) {
          this.th = t;
        }
        nt(t, i, s) {
          this.th.draw(t);
        }
        ih(t, i, s) {
          this.th.drawBackground?.(t);
        }
      }
      class tD {
        constructor(t) {
          (this.Dn = null), (this.sh = t);
        }
        Tt() {
          let t = this.sh.renderer();
          if (null === t) return null;
          if (this.Dn?.nh === t) return this.Dn.eh;
          let i = new tV(t);
          return (this.Dn = { nh: t, eh: i }), i;
        }
        rh() {
          return this.sh.zOrder?.() ?? 'normal';
        }
      }
      class tW {
        constructor(t) {
          (this.hh = null), (this.ah = t);
        }
        oh() {
          return this.ah;
        }
        Ns() {
          this.ah.updateAllViews?.();
        }
        Ws() {
          let t = this.ah.paneViews?.() ?? [];
          if (this.hh?.nh === t) return this.hh.eh;
          let i = t.map((t) => new tD(t));
          return (this.hh = { nh: t, eh: i }), i;
        }
        jn(t, i) {
          return this.ah.hitTest?.(t, i) ?? null;
        }
      }
      let tF = class extends tW {
        us() {
          return [];
        }
      };
      class tB {
        constructor(t) {
          this.th = t;
        }
        nt(t, i, s) {
          this.th.draw(t);
        }
        ih(t, i, s) {
          this.th.drawBackground?.(t);
        }
      }
      class tA {
        constructor(t) {
          (this.Dn = null), (this.sh = t);
        }
        Tt() {
          let t = this.sh.renderer();
          if (null === t) return null;
          if (this.Dn?.nh === t) return this.Dn.eh;
          let i = new tB(t);
          return (this.Dn = { nh: t, eh: i }), i;
        }
        rh() {
          return this.sh.zOrder?.() ?? 'normal';
        }
      }
      function tL(t) {
        return {
          ri: t.text(),
          Bi: t.coordinate(),
          Ii: t.fixedCoordinate?.(),
          R: t.textColor(),
          Z: t.backColor(),
          Vt: t.visible?.() ?? !0,
          pi: t.tickVisible?.() ?? !0,
        };
      }
      class tO {
        constructor(t, i) {
          (this.Gt = new q()), (this._h = t), (this.uh = i);
        }
        Tt() {
          return this.Gt.ht({ Qi: this.uh.Qi(), ...tL(this._h) }), this.Gt;
        }
      }
      class tI extends G {
        constructor(t, i) {
          super(), (this._h = t), (this.Yi = i);
        }
        qi(t, i, s) {
          let e = tL(this._h);
          (s.Z = e.Z), (t.R = e.R);
          let h = (2 / 12) * this.Yi.k();
          (s.Ti = h),
            (s.Ri = h),
            (s.Bi = e.Bi),
            (s.Ii = e.Ii),
            (t.ri = e.ri),
            (t.Vt = e.Vt),
            (t.pi = e.pi);
        }
      }
      class tQ extends tW {
        constructor(t, i) {
          super(t),
            (this.dh = null),
            (this.fh = null),
            (this.ph = null),
            (this.mh = null),
            (this.ge = i);
        }
        cs() {
          let t = this.ah.timeAxisViews?.() ?? [];
          if (this.dh?.nh === t) return this.dh.eh;
          let i = this.ge.Qt().At(),
            s = t.map((t) => new tO(t, i));
          return (this.dh = { nh: t, eh: s }), s;
        }
        Fs() {
          let t = this.ah.priceAxisViews?.() ?? [];
          if (this.fh?.nh === t) return this.fh.eh;
          let i = this.ge.Wt(),
            s = t.map((t) => new tI(t, i));
          return (this.fh = { nh: t, eh: s }), s;
        }
        wh() {
          let t = this.ah.priceAxisPaneViews?.() ?? [];
          if (this.ph?.nh === t) return this.ph.eh;
          let i = t.map((t) => new tA(t));
          return (this.ph = { nh: t, eh: i }), i;
        }
        gh() {
          let t = this.ah.timeAxisPaneViews?.() ?? [];
          if (this.mh?.nh === t) return this.mh.eh;
          let i = t.map((t) => new tA(t));
          return (this.mh = { nh: t, eh: i }), i;
        }
        Mh(t, i) {
          return this.ah.autoscaleInfo?.(t, i) ?? null;
        }
      }
      function tX(t, i, s, e) {
        t.forEach((t) => {
          i(t).forEach((t) => {
            t.rh() === s && e.push(t);
          });
        });
      }
      function tJ(t) {
        return t.Ws();
      }
      function t$(t) {
        return t.wh();
      }
      function tU(t) {
        return t.gh();
      }
      let tK = ['Area', 'Line', 'Baseline'];
      class tG extends tk {
        constructor(t, i, s, e, h) {
          super(t),
            (this.Yt = new tE()),
            (this.er = new tw(this)),
            (this.bh = []),
            (this.Sh = new tp(this)),
            (this.xh = null),
            (this.Ch = null),
            (this.yh = null),
            (this.kh = []),
            (this.ys = s),
            (this.Ph = i);
          let l = new tb(this);
          (this.vs = [l]),
            (this.rr = new tc(l, this, t)),
            tK.includes(this.Ph) && (this.xh = new tv(this)),
            this.Th(),
            (this.sh = e(this, this.Qt(), h));
        }
        m() {
          null !== this.yh && clearTimeout(this.yh);
        }
        Be(t) {
          return this.ys.priceLineColor || t;
        }
        ke(t) {
          let i, s;
          let e = { Pe: !0 },
            h = this.Wt();
          if (this.Qt().At().Ki() || h.Ki() || this.Yt.Ki()) return e;
          let l = this.Qt().At().ye(),
            r = this.zt();
          if (null === l || null === r) return e;
          if (t) {
            let t = this.Yt.Er();
            if (null === t) return e;
            (i = t), (s = t.Re);
          } else {
            let t = this.Yt.Wr(l.bi(), -1);
            if (null === t || null === (i = this.Yt.Pr(t.Re))) return e;
            s = t.Re;
          }
          let n = i.Ft[3],
            o = this.Rh().Dr(s, { Ft: i }),
            a = h.Nt(n, r.Ft);
          return {
            Pe: !1,
            gt: n,
            ri: h.Zi(n, r.Ft),
            Oe: h.Dh(n),
            Ne: h.Vh(n, r.Ft),
            R: o.cr,
            Bi: a,
            Re: s,
          };
        }
        Rh() {
          return null !== this.Ch || (this.Ch = new tY(this)), this.Ch;
        }
        N() {
          return this.ys;
        }
        hr(t) {
          let i = t.priceScaleId;
          void 0 !== i && i !== this.ys.priceScaleId && this.Qt().Ih(this, i),
            x(this.ys, t),
            void 0 !== t.priceFormat && (this.Th(), this.Qt().Bh()),
            this.Qt().Ah(this),
            this.Qt().Eh(),
            this.sh.kt('options');
        }
        ht(t, i) {
          this.Yt.ht(t),
            this.sh.kt('data'),
            null !== this.xh && (i && i.zh ? this.xh.be() : 0 === t.length && this.xh.Me());
          let s = this.Qt().Hn(this);
          this.Qt().Lh(s), this.Qt().Ah(this), this.Qt().Eh(), this.Qt().ar();
        }
        Oh(t) {
          let i = new tC(this, t);
          return this.bh.push(i), this.Qt().Ah(this), i;
        }
        Nh(t) {
          let i = this.bh.indexOf(t);
          -1 !== i && this.bh.splice(i, 1), this.Qt().Ah(this);
        }
        Wh() {
          return this.bh;
        }
        Rr() {
          return this.Ph;
        }
        zt() {
          let t = this.Fh();
          return null === t ? null : { Ft: t.Ft[3], Hh: t.wt };
        }
        Fh() {
          let t = this.Qt().At().ye();
          if (null === t) return null;
          let i = t.Uh();
          return this.Yt.Wr(i, 1);
        }
        Xs() {
          return this.Yt;
        }
        $h(t) {
          let i = this.Yt.Pr(t);
          return null === i
            ? null
            : 'Bar' === this.Ph || 'Candlestick' === this.Ph || 'Custom' === this.Ph
              ? { qh: i.Ft[0], Yh: i.Ft[1], jh: i.Ft[2], Kh: i.Ft[3] }
              : i.Ft[3];
        }
        Xh(t) {
          let i = [];
          tX(this.kh, tJ, 'top', i);
          let s = this.xh;
          return (
            null !== s &&
              s.Vt() &&
              (null === this.yh &&
                s.xe() &&
                (this.yh = setTimeout(() => {
                  (this.yh = null), this.Qt().Zh();
                }, 0)),
              s.Se(),
              i.unshift(s)),
            i
          );
        }
        Ws() {
          let t = [];
          this.Gh() || t.push(this.Sh), t.push(this.sh, this.er);
          let i = this.bh.map((t) => t.lr());
          return t.push(...i), tX(this.kh, tJ, 'normal', t), t;
        }
        Jh() {
          return this.Qh(tJ, 'bottom');
        }
        ta(t) {
          return this.Qh(t$, t);
        }
        ia(t) {
          return this.Qh(tU, t);
        }
        sa(t, i) {
          return this.kh.map((s) => s.jn(t, i)).filter((t) => null !== t);
        }
        us() {
          return [this.rr, ...this.bh.map((t) => t._r())];
        }
        Fs(t, i) {
          if (i !== this.es && !this.Gh()) return [];
          let s = [...this.vs];
          for (let t of this.bh) s.push(t.ur());
          return (
            this.kh.forEach((t) => {
              s.push(...t.Fs());
            }),
            s
          );
        }
        cs() {
          let t = [];
          return (
            this.kh.forEach((i) => {
              t.push(...i.cs());
            }),
            t
          );
        }
        Mh(t, i) {
          if (void 0 !== this.ys.autoscaleInfoProvider) {
            let s = this.ys.autoscaleInfoProvider(() => {
              let s = this.na(t, i);
              return null === s ? null : s.Xe();
            });
            return tx.Ze(s);
          }
          return this.na(t, i);
        }
        ea() {
          return this.ys.priceFormat.minMove;
        }
        ra() {
          return this.ha;
        }
        Ns() {
          for (let t of (this.sh.kt(), this.vs)) t.kt();
          for (let t of this.bh) t.kt();
          this.er.kt(), this.Sh.kt(), this.xh?.kt(), this.kh.forEach((t) => t.Ns());
        }
        Wt() {
          return b(super.Wt());
        }
        Et(t) {
          if (
            !(
              ('Line' === this.Ph || 'Area' === this.Ph || 'Baseline' === this.Ph) &&
              this.ys.crosshairMarkerVisible
            )
          )
            return null;
          let i = this.Yt.Pr(t);
          return null === i
            ? null
            : { gt: i.Ft[3], ft: this.aa(), Ht: this.la(), Ot: this.oa(), Lt: this._a(t) };
        }
        Ae() {
          return this.ys.title;
        }
        Vt() {
          return this.ys.visible;
        }
        ua(t) {
          this.kh.push(new tQ(t, this));
        }
        ca(t) {
          this.kh = this.kh.filter((i) => i.oh() !== t);
        }
        da() {
          if ('Custom' === this.Ph) return (t) => this.sh.fa(t);
        }
        pa() {
          if ('Custom' === this.Ph) return (t) => this.sh.va(t);
        }
        ma() {
          return this.Yt.qr();
        }
        Gh() {
          return !ts(this.Wt().wa());
        }
        na(t, i) {
          if (!S(t) || !S(i) || this.Yt.Ki()) return null;
          let s =
              'Line' === this.Ph ||
              'Area' === this.Ph ||
              'Baseline' === this.Ph ||
              'Histogram' === this.Ph
                ? [3]
                : [2, 1],
            e = this.Yt.Ur(t, i, s),
            h = null !== e ? new ty(e.Jr, e.Qr) : null,
            l = null;
          if ('Histogram' === this.Rr()) {
            let t = this.ys.base,
              i = new ty(t, t);
            h = null !== h ? h.vn(i) : i;
          }
          return (
            this.kh.forEach((s) => {
              let e = s.Mh(t, i);
              if (e?.priceRange) {
                let t = new ty(e.priceRange.minValue, e.priceRange.maxValue);
                h = null !== h ? h.vn(t) : t;
              }
              e?.margins && (l = e.margins);
            }),
            new tx(h, l)
          );
        }
        aa() {
          switch (this.Ph) {
            case 'Line':
            case 'Area':
            case 'Baseline':
              return this.ys.crosshairMarkerRadius;
          }
          return 0;
        }
        la() {
          switch (this.Ph) {
            case 'Line':
            case 'Area':
            case 'Baseline': {
              let t = this.ys.crosshairMarkerBorderColor;
              if (0 !== t.length) return t;
            }
          }
          return null;
        }
        oa() {
          switch (this.Ph) {
            case 'Line':
            case 'Area':
            case 'Baseline':
              return this.ys.crosshairMarkerBorderWidth;
          }
          return 0;
        }
        _a(t) {
          switch (this.Ph) {
            case 'Line':
            case 'Area':
            case 'Baseline': {
              let t = this.ys.crosshairMarkerBackgroundColor;
              if (0 !== t.length) return t;
            }
          }
          return this.Rh().Dr(t).cr;
        }
        Th() {
          switch (this.ys.priceFormat.type) {
            case 'custom':
              this.ha = { format: this.ys.priceFormat.formatter };
              break;
            case 'volume':
              this.ha = new tn(this.ys.priceFormat.precision);
              break;
            case 'percent':
              this.ha = new tr(this.ys.priceFormat.precision);
              break;
            default: {
              let t = Math.pow(10, this.ys.priceFormat.precision);
              this.ha = new tl(t, this.ys.priceFormat.minMove * t);
            }
          }
          null !== this.es && this.es.ga();
        }
        Qh(t, i) {
          let s = [];
          return tX(this.kh, t, i, s), s;
        }
      }
      let tH = [3],
        tZ = [0, 1, 2, 3];
      class tq {
        constructor(t) {
          this.ys = t;
        }
        Ma(t, i, s) {
          if (0 === this.ys.mode) return t;
          let e = s.Ps(),
            h = e.zt();
          if (null === h) return t;
          let l = e.Nt(t, h),
            r = s
              .ba()
              .filter((t) => t instanceof tG)
              .reduce((t, e) => {
                if (s.Un(e) || !e.Vt()) return t;
                let h = e.Wt(),
                  l = e.Xs();
                if (h.Ki() || !l.Te(i)) return t;
                let r = l.Pr(i);
                if (null === r) return t;
                let n = M(e.zt()),
                  o = 3 === this.ys.mode ? tZ : tH;
                return t.concat(o.map((t) => h.Nt(r.Ft[t], n.Ft)));
              }, []);
          if (0 === r.length) return t;
          r.sort((t, i) => Math.abs(t - l) - Math.abs(i - l));
          let n = r[0];
          return e.Ts(n, h);
        }
      }
      function tj(t, i, s) {
        return Math.min(Math.max(t, i), s);
      }
      function t0(t) {
        let i = Math.ceil(t);
        return i % 2 == 0 ? i - 1 : i;
      }
      class t1 extends F {
        constructor() {
          super(...arguments), (this.Yt = null);
        }
        ht(t) {
          this.Yt = t;
        }
        et({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: e }) {
          if (null === this.Yt) return;
          let h = Math.max(1, Math.floor(s));
          (t.lineWidth = h),
            t.save(),
            t.lineWidth % 2 && t.translate(0.5, 0.5),
            (() => {
              let l = b(this.Yt);
              if (l.Sa) {
                for (let e of ((t.strokeStyle = l.xa), m(t, l.Ca), t.beginPath(), l.ya)) {
                  let l = Math.round(e.ka * s);
                  t.moveTo(l, -h), t.lineTo(l, i.height + h);
                }
                t.stroke();
              }
              if (l.Pa) {
                for (let s of ((t.strokeStyle = l.Ta), m(t, l.Ra), t.beginPath(), l.Da)) {
                  let l = Math.round(s.ka * e);
                  t.moveTo(-h, l), t.lineTo(i.width + h, l);
                }
                t.stroke();
              }
            })(),
            t.restore();
        }
      }
      class t2 {
        constructor(t) {
          (this.Gt = new t1()), (this.xt = !0), (this.yt = t);
        }
        kt() {
          this.xt = !0;
        }
        Tt() {
          if (this.xt) {
            let t = this.yt.Qt().N().grid,
              i = {
                Pa: t.horzLines.visible,
                Sa: t.vertLines.visible,
                Ta: t.horzLines.color,
                xa: t.vertLines.color,
                Ra: t.horzLines.style,
                Ca: t.vertLines.style,
                Da: this.yt.Ps().Va(),
                ya: (this.yt.Qt().At().Va() || []).map((t) => ({ ka: t.coord })),
              };
            this.Gt.ht(i), (this.xt = !1);
          }
          return this.Gt;
        }
      }
      class t3 {
        constructor(t) {
          this.sh = new t2(t);
        }
        lr() {
          return this.sh;
        }
      }
      let t5 = { Ia: 4, Ba: 1e-4 };
      function t6(t, i) {
        let s = (100 * (t - i)) / i;
        return i < 0 ? -s : s;
      }
      function t4(t, i) {
        let s = (100 * (t - i)) / i + 100;
        return i < 0 ? -s : s;
      }
      function t9(t, i) {
        let s = Math.abs(t);
        if (s < 1e-15) return 0;
        let e = Math.log10(s + i.Ba) + i.Ia;
        return t < 0 ? -e : e;
      }
      function t7(t, i) {
        let s = Math.abs(t);
        if (s < 1e-15) return 0;
        let e = Math.pow(10, s - i.Ia) - i.Ba;
        return t < 0 ? -e : e;
      }
      function t8(t, i) {
        return null === t ? null : new ty(t9(t.$e(), i), t9(t.qe(), i));
      }
      function it(t, i) {
        return null === t ? null : new ty(t7(t.$e(), i), t7(t.qe(), i));
      }
      function ii(t) {
        if (null === t) return t5;
        let i = Math.abs(t.qe() - t.$e());
        if (i >= 1 || i < 1e-15) return t5;
        let s = Math.ceil(Math.abs(Math.log10(i))),
          e = t5.Ia + s;
        return { Ia: e, Ba: 1 / Math.pow(10, e) };
      }
      class is {
        constructor(t, i) {
          if (
            ((this.Aa = t),
            (this.Ea = i),
            (function (t) {
              if (t < 0) return !1;
              for (let i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
              return !0;
            })(this.Aa))
          )
            this.za = [2, 2.5, 2];
          else {
            this.za = [];
            for (let t = this.Aa; 1 !== t; ) {
              if (t % 2 == 0) this.za.push(2), (t /= 2);
              else {
                if (t % 5 != 0) throw Error('unexpected base');
                this.za.push(2, 2.5), (t /= 5);
              }
              if (this.za.length > 100) throw Error('something wrong with base');
            }
          }
        }
        La(t, i, s) {
          let e = 0 === this.Aa ? 0 : 1 / this.Aa,
            h = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - i)))),
            l = 0,
            r = this.Ea[0];
          for (;;) {
            let t = e - h <= 1e-14 && h > e + 1e-14,
              i = s * r - h <= 1e-14,
              n = 1 - h <= 1e-14;
            if (!(t && i && n)) break;
            (h /= r), (r = this.Ea[++l % this.Ea.length]);
          }
          if (
            (h <= e + 1e-14 && (h = e),
            (h = Math.max(1, h)),
            this.za.length > 0 && 1e-14 > Math.abs(h - 1))
          )
            for (l = 0, r = this.za[0]; s * r - h <= 1e-14 && h > e + 1e-14; )
              (h /= r), (r = this.za[++l % this.za.length]);
          return h;
        }
      }
      class ie {
        constructor(t, i, s, e) {
          (this.Oa = []), (this.Yi = t), (this.Aa = i), (this.Na = s), (this.Wa = e);
        }
        La(t, i) {
          if (t < i) throw Error('high < low');
          let s = this.Yi.$t(),
            e = ((t - i) * this.Fa()) / s,
            h = new is(this.Aa, [2, 2.5, 2]),
            l = new is(this.Aa, [2, 2, 2.5]),
            r = new is(this.Aa, [2.5, 2, 2]),
            n = [];
          return (
            n.push(h.La(t, i, e), l.La(t, i, e), r.La(t, i, e)),
            (function (t) {
              if (t.length < 1) throw Error('array is empty');
              let i = t[0];
              for (let s = 1; s < t.length; ++s) t[s] < i && (i = t[s]);
              return i;
            })(n)
          );
        }
        Ha() {
          let t = this.Yi,
            i = t.zt();
          if (null === i) return void (this.Oa = []);
          let s = t.$t(),
            e = this.Na(s - 1, i),
            h = this.Na(0, i),
            l = this.Yi.N().entireTextOnly ? this.Ua() / 2 : 0,
            r = s - 1 - l,
            n = Math.max(e, h),
            o = Math.min(e, h);
          if (n === o) return void (this.Oa = []);
          let a = this.La(n, o);
          if ((this.$a(i, a, n, o, l, r), t.qa() && this.Ya(a, o, n))) {
            let t = this.Yi.ja();
            this.Ka(i, a, l, r, t, 2 * t);
          }
        }
        Va() {
          return this.Oa;
        }
        Ua() {
          return this.Yi.k();
        }
        Fa() {
          return Math.ceil(2.5 * this.Ua());
        }
        $a(t, i, s, e, h, l) {
          let r = this.Oa,
            n = this.Yi,
            o = s % i;
          o += o < 0 ? i : 0;
          let a = s >= e ? 1 : -1,
            u = null,
            c = 0;
          for (let d = s - o; d > e; d -= i) {
            let s = this.Wa(d, t, !0);
            (null !== u && Math.abs(s - u) < this.Fa()) ||
              s < h ||
              s > l ||
              (c < r.length ? ((r[c].ka = s), (r[c].Xa = n.Za(d))) : r.push({ ka: s, Xa: n.Za(d) }),
              c++,
              (u = s),
              n.Ga() && (i = this.La(d * a, e)));
          }
          r.length = c;
        }
        Ka(t, i, s, e, h, l) {
          let r = this.Oa,
            n = this.Ja(t, s, h, l),
            o = this.Ja(t, e, -l, -h),
            a = this.Wa(0, t, !0) - this.Wa(i, t, !0);
          r.length > 0 && r[0].ka - n.ka < a / 2 && r.shift(),
            r.length > 0 && o.ka - r[r.length - 1].ka < a / 2 && r.pop(),
            r.unshift(n),
            r.push(o);
        }
        Ja(t, i, s, e) {
          let h = this.Na(i + s, t),
            l = this.Na(i + e, t),
            r = Math.min(h, l),
            n = Math.max(h, l),
            o = Math.max(0.1, this.La(n, r)),
            a = this.Na(i + (s + e) / 2, t),
            u = a - (a % o),
            c = this.Wa(u, t, !0);
          return { Xa: this.Yi.Za(u), ka: c };
        }
        Ya(t, i, s) {
          let e = M(this.Yi.Qe());
          return this.Yi.Ga() && (e = it(e, this.Yi.Qa())), e.$e() - i < t && s - e.qe() < t;
        }
      }
      function ih(t) {
        return t.slice().sort((t, i) => b(t.hs()) - b(i.hs()));
      }
      !(function (t) {
        (t[(t.Normal = 0)] = 'Normal'),
          (t[(t.Logarithmic = 1)] = 'Logarithmic'),
          (t[(t.Percentage = 2)] = 'Percentage'),
          (t[(t.IndexedTo100 = 3)] = 'IndexedTo100');
      })(n || (n = {}));
      let il = new tr(),
        ir = new tl(100, 1);
      class io {
        constructor(t, i, s, e, h) {
          (this.tl = 0),
            (this.il = null),
            (this.Ge = null),
            (this.sl = null),
            (this.nl = { el: !1, rl: null }),
            (this.hl = !1),
            (this.al = 0),
            (this.ll = 0),
            (this.ol = new y()),
            (this._l = new y()),
            (this.ul = []),
            (this.cl = null),
            (this.dl = null),
            (this.fl = null),
            (this.pl = null),
            (this.vl = null),
            (this.ha = ir),
            (this.ml = ii(null)),
            (this.wl = t),
            (this.ys = i),
            (this.gl = s),
            (this.Ml = e),
            (this.bl = h),
            (this.Sl = new ie(this, 100, this.xl.bind(this), this.Cl.bind(this)));
        }
        wa() {
          return this.wl;
        }
        N() {
          return this.ys;
        }
        hr(t) {
          if (
            (x(this.ys, t),
            this.ga(),
            void 0 !== t.mode && this.yl({ ie: t.mode }),
            void 0 !== t.scaleMargins)
          ) {
            let i = w(t.scaleMargins.top),
              s = w(t.scaleMargins.bottom);
            if (i < 0 || i > 1)
              throw Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);
            if (s < 0 || s > 1)
              throw Error(`Invalid bottom margin - expect value between 0 and 1, given=${s}`);
            if (i + s > 1)
              throw Error(`Invalid margins - sum of margins must be less than 1, given=${i + s}`);
            this.kl(), (this.fl = null);
          }
        }
        Pl() {
          return this.ys.autoScale;
        }
        Tl() {
          return this.hl;
        }
        Ga() {
          return 1 === this.ys.mode;
        }
        Le() {
          return 2 === this.ys.mode;
        }
        Rl() {
          return 3 === this.ys.mode;
        }
        Qa() {
          return this.ml;
        }
        ie() {
          return { sn: this.ys.autoScale, Dl: this.ys.invertScale, ie: this.ys.mode };
        }
        yl(t) {
          let i = this.ie(),
            s = null;
          void 0 !== t.sn && (this.ys.autoScale = t.sn),
            void 0 !== t.ie &&
              ((this.ys.mode = t.ie),
              (2 !== t.ie && 3 !== t.ie) || (this.ys.autoScale = !0),
              (this.nl.el = !1)),
            1 === i.ie &&
              t.ie !== i.ie &&
              ((function (t, i) {
                if (null === t) return !1;
                let s = t7(t.$e(), i),
                  e = t7(t.qe(), i);
                return isFinite(s) && isFinite(e);
              })(this.Ge, this.ml)
                ? null !== (s = it(this.Ge, this.ml)) && this.Vl(s)
                : (this.ys.autoScale = !0)),
            1 === t.ie && t.ie !== i.ie && null !== (s = t8(this.Ge, this.ml)) && this.Vl(s);
          let e = i.ie !== this.ys.mode;
          e && (2 === i.ie || this.Le()) && this.ga(),
            e && (3 === i.ie || this.Rl()) && this.ga(),
            void 0 !== t.Dl && i.Dl !== t.Dl && ((this.ys.invertScale = t.Dl), this.Il()),
            this._l.p(i, this.ie());
        }
        Bl() {
          return this._l;
        }
        k() {
          return this.gl.fontSize;
        }
        $t() {
          return this.tl;
        }
        Al(t) {
          this.tl !== t && ((this.tl = t), this.kl(), (this.fl = null));
        }
        El() {
          if (this.il) return this.il;
          let t = this.$t() - this.zl() - this.Ll();
          return (this.il = t), t;
        }
        Qe() {
          return this.Ol(), this.Ge;
        }
        Vl(t, i) {
          let s = this.Ge;
          (i || (null === s && null !== t) || (null !== s && !s.He(t))) &&
            ((this.fl = null), (this.Ge = t));
        }
        Nl(t) {
          this.Vl(t), this.Wl(null !== t);
        }
        Ki() {
          return this.Ol(), 0 === this.tl || !this.Ge || this.Ge.Ki();
        }
        Fl(t) {
          return this.Dl() ? t : this.$t() - 1 - t;
        }
        Nt(t, i) {
          return this.Le() ? (t = t6(t, i)) : this.Rl() && (t = t4(t, i)), this.Cl(t, i);
        }
        Hl(t, i, s) {
          this.Ol();
          let e = this.Ll(),
            h = b(this.Qe()),
            l = h.$e(),
            r = h.qe(),
            n = this.El() - 1,
            o = this.Dl(),
            a = n / (r - l),
            u = void 0 === s ? 0 : s.from,
            c = void 0 === s ? t.length : s.to,
            d = this.Ul();
          for (let s = u; s < c; s++) {
            let h = t[s],
              r = h.gt;
            if (isNaN(r)) continue;
            let n = r;
            null !== d && (n = d(h.gt, i));
            let u = e + a * (n - l);
            h.ut = o ? u : this.tl - 1 - u;
          }
        }
        $l(t, i, s) {
          this.Ol();
          let e = this.Ll(),
            h = b(this.Qe()),
            l = h.$e(),
            r = h.qe(),
            n = this.El() - 1,
            o = this.Dl(),
            a = n / (r - l),
            u = void 0 === s ? 0 : s.from,
            c = void 0 === s ? t.length : s.to,
            d = this.Ul();
          for (let s = u; s < c; s++) {
            let h = t[s],
              r = h.qh,
              n = h.Yh,
              u = h.jh,
              c = h.Kh;
            null !== d && ((r = d(h.qh, i)), (n = d(h.Yh, i)), (u = d(h.jh, i)), (c = d(h.Kh, i)));
            let f = e + a * (r - l),
              p = o ? f : this.tl - 1 - f;
            (h.ql = p),
              (f = e + a * (n - l)),
              (h.Yl = p = o ? f : this.tl - 1 - f),
              (f = e + a * (u - l)),
              (h.jl = p = o ? f : this.tl - 1 - f),
              (f = e + a * (c - l)),
              (h.Kl = p = o ? f : this.tl - 1 - f);
          }
        }
        Ts(t, i) {
          let s = this.xl(t, i);
          return this.Xl(s, i);
        }
        Xl(t, i) {
          var s, e;
          let h = t;
          return (
            this.Le()
              ? ((s = h), i < 0 && (s = -s), (h = (s / 100) * i + i))
              : this.Rl() && ((e = h - 100), i < 0 && (e = -e), (h = (e / 100) * i + i)),
            h
          );
        }
        ba() {
          return this.ul;
        }
        Dt() {
          return this.dl || (this.dl = ih(this.ul)), this.dl;
        }
        Zl(t) {
          -1 === this.ul.indexOf(t) && (this.ul.push(t), this.ga(), this.Gl());
        }
        Jl(t) {
          let i = this.ul.indexOf(t);
          if (-1 === i) throw Error('source is not attached to scale');
          this.ul.splice(i, 1),
            0 === this.ul.length && (this.yl({ sn: !0 }), this.Vl(null)),
            this.ga(),
            this.Gl();
        }
        zt() {
          let t = null;
          for (let i of this.ul) {
            let s = i.zt();
            null !== s && (null === t || s.Hh < t.Hh) && (t = s);
          }
          return null === t ? null : t.Ft;
        }
        Dl() {
          return this.ys.invertScale;
        }
        Va() {
          let t = null === this.zt();
          if (null !== this.fl && (t || this.fl.Ql === t)) return this.fl.Va;
          this.Sl.Ha();
          let i = this.Sl.Va();
          return (this.fl = { Va: i, Ql: t }), this.ol.p(), i;
        }
        io() {
          return this.ol;
        }
        so(t) {
          this.Le() ||
            this.Rl() ||
            (null === this.pl &&
              null === this.sl &&
              (this.Ki() || ((this.pl = this.tl - t), (this.sl = b(this.Qe()).Ue()))));
        }
        no(t) {
          if (this.Le() || this.Rl() || null === this.pl) return;
          this.yl({ sn: !1 }), (t = this.tl - t) < 0 && (t = 0);
          let i = (this.pl + 0.2 * (this.tl - 1)) / (t + 0.2 * (this.tl - 1)),
            s = b(this.sl).Ue();
          (i = Math.max(i, 0.1)), s.je(i), this.Vl(s);
        }
        eo() {
          this.Le() || this.Rl() || ((this.pl = null), (this.sl = null));
        }
        ro(t) {
          this.Pl() ||
            (null === this.vl &&
              null === this.sl &&
              (this.Ki() || ((this.vl = t), (this.sl = b(this.Qe()).Ue()))));
        }
        ho(t) {
          if (this.Pl() || null === this.vl) return;
          let i = b(this.Qe()).Ye() / (this.El() - 1),
            s = t - this.vl;
          this.Dl() && (s *= -1);
          let e = s * i,
            h = b(this.sl).Ue();
          h.Ke(e), this.Vl(h, !0), (this.fl = null);
        }
        ao() {
          this.Pl() || (null !== this.vl && ((this.vl = null), (this.sl = null)));
        }
        ra() {
          return this.ha || this.ga(), this.ha;
        }
        Zi(t, i) {
          switch (this.ys.mode) {
            case 2:
              return this.lo(t6(t, i));
            case 3:
              return this.ra().format(t4(t, i));
            default:
              return this.nr(t);
          }
        }
        Za(t) {
          switch (this.ys.mode) {
            case 2:
              return this.lo(t);
            case 3:
              return this.ra().format(t);
            default:
              return this.nr(t);
          }
        }
        Dh(t) {
          return this.nr(t, b(this.cl).ra());
        }
        Vh(t, i) {
          return (t = t6(t, i)), this.lo(t, il);
        }
        oo() {
          return this.ul;
        }
        _o(t) {
          this.nl = { rl: t, el: !1 };
        }
        Ns() {
          this.ul.forEach((t) => t.Ns());
        }
        qa() {
          return this.ys.ensureEdgeTickMarksVisible && this.Pl();
        }
        ja() {
          return this.k() / 2;
        }
        ga() {
          this.fl = null;
          let t = 1 / 0;
          for (let i of ((this.cl = null), this.ul)) i.hs() < t && ((t = i.hs()), (this.cl = i));
          let i = 100;
          null !== this.cl && (i = Math.round(1 / this.cl.ea())),
            (this.ha = ir),
            this.Le()
              ? ((this.ha = il), (i = 100))
              : this.Rl()
                ? ((this.ha = new tl(100, 1)), (i = 100))
                : null !== this.cl && (this.ha = this.cl.ra()),
            (this.Sl = new ie(this, i, this.xl.bind(this), this.Cl.bind(this))),
            this.Sl.Ha();
        }
        Gl() {
          this.dl = null;
        }
        Xi() {
          return this.bl;
        }
        Wl(t) {
          this.hl = t;
        }
        zl() {
          return this.Dl()
            ? this.ys.scaleMargins.bottom * this.$t() + this.ll
            : this.ys.scaleMargins.top * this.$t() + this.al;
        }
        Ll() {
          return this.Dl()
            ? this.ys.scaleMargins.top * this.$t() + this.al
            : this.ys.scaleMargins.bottom * this.$t() + this.ll;
        }
        Ol() {
          this.nl.el || ((this.nl.el = !0), this.uo());
        }
        kl() {
          this.il = null;
        }
        Cl(t, i) {
          if ((this.Ol(), this.Ki())) return 0;
          t = this.Ga() && t ? t9(t, this.ml) : t;
          let s = b(this.Qe()),
            e = this.Ll() + ((this.El() - 1) * (t - s.$e())) / s.Ye();
          return this.Fl(e);
        }
        xl(t, i) {
          if ((this.Ol(), this.Ki())) return 0;
          let s = this.Fl(t),
            e = b(this.Qe()),
            h = e.$e() + e.Ye() * ((s - this.Ll()) / (this.El() - 1));
          return this.Ga() ? t7(h, this.ml) : h;
        }
        Il() {
          (this.fl = null), this.Sl.Ha();
        }
        uo() {
          var t, i, s, e, h;
          if (this.Tl() && !this.Pl()) return;
          let l = this.nl.rl;
          if (null === l) return;
          let r = null,
            n = this.oo(),
            o = 0,
            a = 0;
          for (let t of n) {
            if (!t.Vt()) continue;
            let n = t.zt();
            if (null === n) continue;
            let u = t.Mh(l.Uh(), l.bi()),
              c = u && u.Qe();
            if (null !== c) {
              switch (this.ys.mode) {
                case 1:
                  c = t8(c, this.ml);
                  break;
                case 2:
                  (i = c), (s = n.Ft), (c = new ty(t6(i.$e(), s), t6(i.qe(), s)));
                  break;
                case 3:
                  (e = c), (h = n.Ft), (c = new ty(t4(e.$e(), h), t4(e.qe(), h)));
              }
              if (((r = null === r ? c : r.vn(b(c))), null !== u)) {
                let t = u.tr();
                null !== t && ((o = Math.max(o, t.above)), (a = Math.max(a, t.below)));
              }
            }
          }
          if (
            (this.qa() && ((o = Math.max(o, this.ja())), (a = Math.max(a, this.ja()))),
            (o === this.al && a === this.ll) ||
              ((this.al = o), (this.ll = a), (this.fl = null), this.kl()),
            null !== r)
          ) {
            if (r.$e() === r.qe()) {
              let t = this.cl,
                i = 5 * (null === t || this.Le() || this.Rl() ? 1 : t.ea());
              this.Ga() && (r = it(r, this.ml)),
                (r = new ty(r.$e() - i, r.qe() + i)),
                this.Ga() && (r = t8(r, this.ml));
            }
            if (this.Ga()) {
              let i = it(r, this.ml),
                s = ii(i);
              if (((t = this.ml), s.Ia !== t.Ia || s.Ba !== t.Ba)) {
                let t = null !== this.sl ? it(this.sl, this.ml) : null;
                (this.ml = s), (r = t8(i, s)), null !== t && (this.sl = t8(t, s));
              }
            }
            this.Vl(r);
          } else null === this.Ge && (this.Vl(new ty(-0.5, 0.5)), (this.ml = ii(null)));
        }
        Ul() {
          return this.Le() ? t6 : this.Rl() ? t4 : this.Ga() ? (t) => t9(t, this.ml) : null;
        }
        co(t, i, s) {
          return void 0 === i ? (void 0 === s && (s = this.ra()), s.format(t)) : i(t);
        }
        nr(t, i) {
          return this.co(t, this.Ml.priceFormatter, i);
        }
        lo(t, i) {
          return this.co(t, this.Ml.percentageFormatter, i);
        }
      }
      function ia(t) {
        return t instanceof tG;
      }
      class iu {
        constructor(t, i) {
          (this.ul = []),
            (this.do = new Map()),
            (this.tl = 0),
            (this.fo = 0),
            (this.po = 1e3),
            (this.dl = null),
            (this.vo = new y()),
            (this.kh = []),
            (this.uh = t),
            (this.ts = i),
            (this.mo = new t3(this));
          let s = i.N();
          (this.wo = this.Mo('left', s.leftPriceScale)),
            (this.bo = this.Mo('right', s.rightPriceScale)),
            this.wo.Bl().i(this.So.bind(this, this.wo), this),
            this.bo.Bl().i(this.So.bind(this, this.bo), this),
            this.xo(s);
        }
        xo(t) {
          if (
            (t.leftPriceScale && this.wo.hr(t.leftPriceScale),
            t.rightPriceScale && this.bo.hr(t.rightPriceScale),
            t.localization && (this.wo.ga(), this.bo.ga()),
            t.overlayPriceScales)
          )
            for (let i of Array.from(this.do.values())) {
              let s = b(i[0].Wt());
              s.hr(t.overlayPriceScales), t.localization && s.ga();
            }
        }
        Co(t) {
          switch (t) {
            case 'left':
              return this.wo;
            case 'right':
              return this.bo;
          }
          return this.do.has(t) ? w(this.do.get(t))[0].Wt() : null;
        }
        m() {
          this.Qt().yo().u(this),
            this.wo.Bl().u(this),
            this.bo.Bl().u(this),
            this.ul.forEach((t) => {
              t.m && t.m();
            }),
            (this.kh = this.kh.filter((t) => {
              let i = t.oh();
              return i.detached && i.detached(), !1;
            })),
            this.vo.p();
        }
        ko() {
          return this.po;
        }
        Po(t) {
          this.po = t;
        }
        Qt() {
          return this.ts;
        }
        Qi() {
          return this.fo;
        }
        $t() {
          return this.tl;
        }
        To(t) {
          (this.fo = t), this.Ro();
        }
        Al(t) {
          (this.tl = t),
            this.wo.Al(t),
            this.bo.Al(t),
            this.ul.forEach((i) => {
              if (this.Un(i)) {
                let s = i.Wt();
                null !== s && s.Al(t);
              }
            }),
            this.Ro();
        }
        Do() {
          return this.ul.filter(ia);
        }
        ba() {
          return this.ul;
        }
        Un(t) {
          let i = t.Wt();
          return null === i || (this.wo !== i && this.bo !== i);
        }
        Zl(t, i, s) {
          this.Vo(t, i, s ? t.hs() : this.ul.length);
        }
        Jl(t, i) {
          let s = this.ul.indexOf(t);
          v(-1 !== s, 'removeDataSource: invalid data source'),
            this.ul.splice(s, 1),
            i || this.ul.forEach((t, i) => t.ls(i));
          let e = b(t.Wt()).wa();
          if (this.do.has(e)) {
            let i = w(this.do.get(e)),
              s = i.indexOf(t);
            -1 !== s && (i.splice(s, 1), 0 === i.length && this.do.delete(e));
          }
          let h = t.Wt();
          h && h.ba().indexOf(t) >= 0 && (h.Jl(t), this.Io(h)), (this.dl = null);
        }
        qn(t) {
          return t === this.wo ? 'left' : t === this.bo ? 'right' : 'overlay';
        }
        Bo() {
          return this.wo;
        }
        Ao() {
          return this.bo;
        }
        Eo(t, i) {
          t.so(i);
        }
        zo(t, i) {
          t.no(i), this.Ro();
        }
        Lo(t) {
          t.eo();
        }
        Oo(t, i) {
          t.ro(i);
        }
        No(t, i) {
          t.ho(i), this.Ro();
        }
        Wo(t) {
          t.ao();
        }
        Ro() {
          this.ul.forEach((t) => {
            t.Ns();
          });
        }
        Ps() {
          let t = null;
          return (
            this.ts.N().rightPriceScale.visible && 0 !== this.bo.ba().length
              ? (t = this.bo)
              : this.ts.N().leftPriceScale.visible && 0 !== this.wo.ba().length
                ? (t = this.wo)
                : 0 !== this.ul.length && (t = this.ul[0].Wt()),
            null === t && (t = this.bo),
            t
          );
        }
        $n() {
          let t = null;
          return (
            this.ts.N().rightPriceScale.visible
              ? (t = this.bo)
              : this.ts.N().leftPriceScale.visible && (t = this.wo),
            t
          );
        }
        Io(t) {
          null !== t && t.Pl() && this.Fo(t);
        }
        Ho(t) {
          let i = this.uh.ye();
          t.yl({ sn: !0 }), null !== i && t._o(i), this.Ro();
        }
        Uo() {
          this.Fo(this.wo), this.Fo(this.bo);
        }
        $o() {
          this.Io(this.wo),
            this.Io(this.bo),
            this.ul.forEach((t) => {
              this.Un(t) && this.Io(t.Wt());
            }),
            this.Ro(),
            this.ts.ar();
        }
        Dt() {
          return null === this.dl && (this.dl = ih(this.ul)), this.dl;
        }
        qo(t, i) {
          i = tj(i, 0, this.ul.length - 1);
          let s = this.ul.indexOf(t);
          for (let e of (v(-1 !== s, 'setSeriesOrder: invalid data source'),
          this.ul.splice(s, 1),
          this.ul.splice(i, 0, t),
          this.ul.forEach((t, i) => t.ls(i)),
          (this.dl = null),
          [this.wo, this.bo]))
            e.Gl(), e.ga();
          this.ts.ar();
        }
        It() {
          return this.Dt().filter(ia);
        }
        Yo() {
          return this.vo;
        }
        jo() {
          return this.mo;
        }
        ua(t) {
          this.kh.push(new tF(t));
        }
        ca(t) {
          (this.kh = this.kh.filter((i) => i.oh() !== t)), t.detached && t.detached(), this.ts.ar();
        }
        Ko() {
          return this.kh;
        }
        sa(t, i) {
          return this.kh.map((s) => s.jn(t, i)).filter((t) => null !== t);
        }
        Fo(t) {
          let i = t.oo();
          if (i && i.length > 0 && !this.uh.Ki()) {
            let i = this.uh.ye();
            null !== i && t._o(i);
          }
          t.Ns();
        }
        Vo(t, i, s) {
          let e = this.Co(i);
          if (
            (null === e && (e = this.Mo(i, this.ts.N().overlayPriceScales)),
            this.ul.splice(s, 0, t),
            !ts(i))
          ) {
            let s = this.do.get(i) || [];
            s.push(t), this.do.set(i, s);
          }
          t.ls(s), e.Zl(t), t._s(e), this.Io(e), (this.dl = null);
        }
        So(t, i, s) {
          i.ie !== s.ie && this.Fo(t);
        }
        Mo(t, i) {
          let s = new io(
            t,
            { visible: !0, autoScale: !0, ...N(i) },
            this.ts.N().layout,
            this.ts.N().localization,
            this.ts.Xi()
          );
          return s.Al(this.$t()), s;
        }
      }
      function ic(t) {
        return { Xo: t.Xo, Zo: { Kn: t.Go.externalId }, Jo: t.Go.cursorStyle };
      }
      function id(t, i, s) {
        let e = [t, ...t.Dt()],
          h = (function (t, i, s) {
            var e, h;
            let l, r;
            for (let n of t)
              for (let t of n.sa?.(i, s) ?? [])
                (e = t.zOrder),
                  ((h = l?.zOrder) &&
                    ('top' !== e || 'top' === h) &&
                    ('normal' !== e || 'bottom' !== h)) ||
                    ((l = t), (r = n));
            return l && r ? { Go: l, Xo: r } : null;
          })(e, i, s);
        if ('top' === h?.Go.zOrder) return ic(h);
        for (let l of e) {
          if (h && h.Xo === l && 'bottom' !== h.Go.zOrder && !h.Go.isBackground) return ic(h);
          if (void 0 !== l.Ws) {
            let e = (function (t, i, s, e) {
              for (let h of t) {
                let t = h.Tt(e);
                if (null !== t && t.jn) {
                  let e = t.jn(i, s);
                  if (null !== e) return { Qo: h, Zo: e };
                }
              }
              return null;
            })(l.Ws(t), i, s, t);
            if (null !== e) return { Xo: l, Qo: e.Qo, Zo: e.Zo };
          }
          if (h && h.Xo === l && 'bottom' !== h.Go.zOrder && h.Go.isBackground) return ic(h);
        }
        return h?.Go ? ic(h) : null;
      }
      class ip {
        constructor(t, i, s = 50) {
          (this.kn = 0),
            (this.Pn = 1),
            (this.Tn = 1),
            (this.Dn = new Map()),
            (this.Rn = new Map()),
            (this.t_ = t),
            (this.i_ = i),
            (this.Vn = s);
        }
        s_(t) {
          let i = t.time,
            s = this.i_.cacheKey(i),
            e = this.Dn.get(s);
          if (void 0 !== e) return e.n_;
          if (this.kn === this.Vn) {
            let t = this.Rn.get(this.Tn);
            this.Rn.delete(this.Tn), this.Dn.delete(w(t)), this.Tn++, this.kn--;
          }
          let h = this.t_(t);
          return (
            this.Dn.set(s, { n_: h, En: this.Pn }), this.Rn.set(this.Pn, s), this.kn++, this.Pn++, h
          );
        }
      }
      class im {
        constructor(t, i) {
          v(t <= i, 'right should be >= left'), (this.e_ = t), (this.r_ = i);
        }
        Uh() {
          return this.e_;
        }
        bi() {
          return this.r_;
        }
        h_() {
          return this.r_ - this.e_ + 1;
        }
        Te(t) {
          return this.e_ <= t && t <= this.r_;
        }
        He(t) {
          return this.e_ === t.Uh() && this.r_ === t.bi();
        }
      }
      function ig(t, i) {
        return null === t || null === i ? t === i : t.He(i);
      }
      class iv {
        constructor() {
          (this.a_ = new Map()), (this.Dn = null), (this.l_ = !1);
        }
        o_(t) {
          (this.l_ = t), (this.Dn = null);
        }
        __(t, i) {
          this.u_(i), (this.Dn = null);
          for (let s = i; s < t.length; ++s) {
            let i = t[s],
              e = this.a_.get(i.timeWeight);
            void 0 === e && ((e = []), this.a_.set(i.timeWeight, e)),
              e.push({
                index: s,
                time: i.time,
                weight: i.timeWeight,
                originalTime: i.originalTime,
              });
          }
        }
        c_(t, i, s, e, h) {
          let l = Math.ceil(i / t);
          return (
            (null !== this.Dn && this.Dn.d_ === l && h === this.Dn.f_ && s === this.Dn.p_) ||
              (this.Dn = { f_: h, p_: s, Va: this.v_(l, s, e), d_: l }),
            this.Dn.Va
          );
        }
        u_(t) {
          if (0 === t) return void this.a_.clear();
          let i = [];
          for (let s of (this.a_.forEach((s, e) => {
            t <= s[0].index
              ? i.push(e)
              : s.splice(
                  tR(s, t, (i) => i.index < t),
                  1 / 0
                );
          }),
          i))
            this.a_.delete(s);
        }
        v_(t, i, s) {
          let e = [],
            h = (t) => !i || s.has(t.index);
          for (let i of Array.from(this.a_.keys()).sort((t, i) => i - t)) {
            if (!this.a_.get(i)) continue;
            let s = e;
            e = [];
            let l = s.length,
              r = 0,
              n = w(this.a_.get(i)),
              o = n.length,
              a = 1 / 0,
              u = -1 / 0;
            for (let i = 0; i < o; i++) {
              let o = n[i],
                c = o.index;
              for (; r < l; ) {
                let t = s[r],
                  i = t.index;
                if (!(i < c && h(t))) {
                  a = i;
                  break;
                }
                r++, e.push(t), (u = i), (a = 1 / 0);
              }
              if (a - c >= t && c - u >= t && h(o)) e.push(o), (u = c);
              else if (this.l_) return s;
            }
            for (; r < l; r++) h(s[r]) && e.push(s[r]);
          }
          return e;
        }
      }
      class iw {
        constructor(t) {
          this.m_ = t;
        }
        w_() {
          return null === this.m_
            ? null
            : new im(Math.floor(this.m_.Uh()), Math.ceil(this.m_.bi()));
        }
        g_() {
          return this.m_;
        }
        static M_() {
          return new iw(null);
        }
      }
      function ib(t, i) {
        return t.weight > i.weight ? t : i;
      }
      class iM {
        constructor(t, i, s, e) {
          (this.fo = 0),
            (this.b_ = null),
            (this.S_ = []),
            (this.vl = null),
            (this.pl = null),
            (this.x_ = new iv()),
            (this.C_ = new Map()),
            (this.y_ = iw.M_()),
            (this.k_ = !0),
            (this.P_ = new y()),
            (this.T_ = new y()),
            (this.R_ = new y()),
            (this.D_ = null),
            (this.V_ = null),
            (this.I_ = new Map()),
            (this.B_ = -1),
            (this.A_ = []),
            (this.ys = i),
            (this.Ml = s),
            (this.E_ = i.rightOffset),
            (this.z_ = i.barSpacing),
            (this.ts = t),
            (this.i_ = e),
            this.L_(),
            this.x_.o_(i.uniformDistribution),
            this.O_();
        }
        N() {
          return this.ys;
        }
        N_(t) {
          x(this.Ml, t), this.W_(), this.L_();
        }
        hr(t, i) {
          x(this.ys, t),
            this.ys.fixLeftEdge && this.F_(),
            this.ys.fixRightEdge && this.H_(),
            void 0 !== t.barSpacing && this.ts.dn(t.barSpacing),
            void 0 !== t.rightOffset && this.ts.fn(t.rightOffset),
            (void 0 === t.minBarSpacing && void 0 === t.maxBarSpacing) ||
              this.ts.dn(t.barSpacing ?? this.z_),
            void 0 !== t.ignoreWhitespaceIndices &&
              t.ignoreWhitespaceIndices !== this.ys.ignoreWhitespaceIndices &&
              this.O_(),
            this.W_(),
            this.L_(),
            this.R_.p();
        }
        Rs(t) {
          return this.S_[t]?.time ?? null;
        }
        ss(t) {
          return this.S_[t] ?? null;
        }
        U_(t, i) {
          if (this.S_.length < 1) return null;
          if (this.i_.key(t) > this.i_.key(this.S_[this.S_.length - 1].time))
            return i ? this.S_.length - 1 : null;
          let s = tR(this.S_, this.i_.key(t), (t, i) => this.i_.key(t.time) < i);
          return this.i_.key(t) < this.i_.key(this.S_[s].time) ? (i ? s : null) : s;
        }
        Ki() {
          return 0 === this.fo || 0 === this.S_.length || null === this.b_;
        }
        q_() {
          return this.S_.length > 0;
        }
        ye() {
          return this.Y_(), this.y_.w_();
        }
        j_() {
          return this.Y_(), this.y_.g_();
        }
        K_() {
          let t = this.ye();
          if (null === t) return null;
          let i = { from: t.Uh(), to: t.bi() };
          return this.X_(i);
        }
        X_(t) {
          let i = Math.round(t.from),
            s = Math.round(t.to),
            e = b(this.Z_()),
            h = b(this.G_());
          return { from: b(this.ss(Math.max(e, i))), to: b(this.ss(Math.min(h, s))) };
        }
        J_(t) {
          return { from: b(this.U_(t.from, !0)), to: b(this.U_(t.to, !0)) };
        }
        Qi() {
          return this.fo;
        }
        To(t) {
          if (!isFinite(t) || t <= 0 || this.fo === t) return;
          let i = this.j_(),
            s = this.fo;
          if (((this.fo = t), (this.k_ = !0), this.ys.lockVisibleTimeRangeOnResize && 0 !== s)) {
            let i = (this.z_ * t) / s;
            this.z_ = i;
          }
          this.ys.fixLeftEdge &&
            null !== i &&
            0 >= i.Uh() &&
            ((this.E_ -= Math.round((s - t) / this.z_) + 1), (this.k_ = !0)),
            this.Q_(),
            this.tu();
        }
        qt(t) {
          if (this.Ki() || !S(t)) return 0;
          let i = this.iu() + this.E_ - t;
          return this.fo - (i + 0.5) * this.z_ - 1;
        }
        su(t, i) {
          let s = this.iu(),
            e = void 0 === i ? 0 : i.from,
            h = void 0 === i ? t.length : i.to;
          for (let i = e; i < h; i++) {
            let e = t[i].wt,
              h = s + this.E_ - e,
              l = this.fo - (h + 0.5) * this.z_ - 1;
            t[i]._t = l;
          }
        }
        nu(t, i) {
          let s = Math.ceil(this.eu(t));
          return i && this.ys.ignoreWhitespaceIndices && !this.ru(s) ? this.hu(s) : s;
        }
        fn(t) {
          (this.k_ = !0), (this.E_ = t), this.tu(), this.ts.au(), this.ts.ar();
        }
        lu() {
          return this.z_;
        }
        dn(t) {
          this.ou(t), this.tu(), this.ts.au(), this.ts.ar();
        }
        _u() {
          return this.E_;
        }
        Va() {
          if (this.Ki()) return null;
          if (null !== this.V_) return this.V_;
          let t = this.z_,
            i =
              ((5 * (this.ts.N().layout.fontSize + 4)) / 8) *
              (this.ys.tickMarkMaxCharacterLength || 8),
            s = Math.round(i / t),
            e = b(this.ye()),
            h = Math.max(e.Uh(), e.Uh() - s),
            l = Math.max(e.bi(), e.bi() - s),
            r = this.x_.c_(t, i, this.ys.ignoreWhitespaceIndices, this.I_, this.B_),
            n = this.Z_() + s,
            o = this.G_() - s,
            a = this.uu(),
            u = this.ys.fixLeftEdge || a,
            c = this.ys.fixRightEdge || a,
            d = 0;
          for (let t of r) {
            let s;
            h <= t.index &&
              t.index <= l &&
              (d < this.A_.length
                ? (((s = this.A_[d]).coord = this.qt(t.index)),
                  (s.label = this.cu(t)),
                  (s.weight = t.weight))
                : ((s = {
                    needAlignCoordinate: !1,
                    coord: this.qt(t.index),
                    label: this.cu(t),
                    weight: t.weight,
                  }),
                  this.A_.push(s)),
              this.z_ > i / 2 && !a
                ? (s.needAlignCoordinate = !1)
                : (s.needAlignCoordinate = (u && t.index <= n) || (c && t.index >= o)),
              d++);
          }
          return (this.A_.length = d), (this.V_ = this.A_), this.A_;
        }
        du() {
          (this.k_ = !0), this.dn(this.ys.barSpacing), this.fn(this.ys.rightOffset);
        }
        fu(t) {
          (this.k_ = !0), (this.b_ = t), this.tu(), this.F_();
        }
        pu(t, i) {
          let s = this.eu(t),
            e = this.lu();
          this.dn(e + (e / 10) * i),
            this.ys.rightBarStaysOnScroll || this.fn(this._u() + (s - this.eu(t)));
        }
        so(t) {
          this.vl && this.ao(),
            null === this.pl && null === this.D_ && (this.Ki() || ((this.pl = t), this.vu()));
        }
        no(t) {
          if (null === this.D_) return;
          let i = tj(this.fo - t, 0, this.fo),
            s = tj(this.fo - b(this.pl), 0, this.fo);
          0 !== i && 0 !== s && this.dn((this.D_.lu * i) / s);
        }
        eo() {
          null !== this.pl && ((this.pl = null), this.mu());
        }
        ro(t) {
          null === this.vl && null === this.D_ && (this.Ki() || ((this.vl = t), this.vu()));
        }
        ho(t) {
          if (null === this.vl) return;
          let i = (this.vl - t) / this.lu();
          (this.E_ = b(this.D_)._u + i), (this.k_ = !0), this.tu();
        }
        ao() {
          null !== this.vl && ((this.vl = null), this.mu());
        }
        wu() {
          this.gu(this.ys.rightOffset);
        }
        gu(t, i = 400) {
          if (!isFinite(t)) throw RangeError('offset is required and must be finite number');
          if (!isFinite(i) || i <= 0)
            throw RangeError('animationDuration (optional) must be finite positive number');
          let s = this.E_,
            e = performance.now();
          this.ts._n({
            Mu: (t) => (t - e) / i >= 1,
            bu: (h) => {
              let l = (h - e) / i;
              return l >= 1 ? t : s + (t - s) * l;
            },
          });
        }
        kt(t, i) {
          (this.k_ = !0), (this.S_ = t), this.x_.__(t, i), this.tu();
        }
        Su() {
          return this.P_;
        }
        xu() {
          return this.T_;
        }
        Cu() {
          return this.R_;
        }
        iu() {
          return this.b_ || 0;
        }
        yu(t) {
          let i = t.h_();
          this.ou(this.fo / i),
            (this.E_ = t.bi() - this.iu()),
            this.tu(),
            (this.k_ = !0),
            this.ts.au(),
            this.ts.ar();
        }
        ku() {
          let t = this.Z_(),
            i = this.G_();
          null !== t && null !== i && this.yu(new im(t, i + this.ys.rightOffset));
        }
        Pu(t) {
          let i = new im(t.from, t.to);
          this.yu(i);
        }
        ns(t) {
          return void 0 !== this.Ml.timeFormatter
            ? this.Ml.timeFormatter(t.originalTime)
            : this.i_.formatHorzItem(t.time);
        }
        O_() {
          if (this.ys.ignoreWhitespaceIndices) {
            for (let t of (this.I_.clear(), this.ts.js())) for (let i of t.ma()) this.I_.set(i, !0);
            this.B_++;
          }
        }
        uu() {
          let t = this.ts.N().handleScroll,
            i = this.ts.N().handleScale;
          return !(
            t.horzTouchDrag ||
            t.mouseWheel ||
            t.pressedMouseMove ||
            t.vertTouchDrag ||
            i.axisDoubleClickReset.time ||
            i.axisPressedMouseMove.time ||
            i.mouseWheel ||
            i.pinch
          );
        }
        Z_() {
          return 0 === this.S_.length ? null : 0;
        }
        G_() {
          return 0 === this.S_.length ? null : this.S_.length - 1;
        }
        Tu(t) {
          return (this.fo - 1 - t) / this.z_;
        }
        eu(t) {
          let i = this.Tu(t);
          return Math.round(1e6 * (this.iu() + this.E_ - i)) / 1e6;
        }
        ou(t) {
          let i = this.z_;
          (this.z_ = t), this.Q_(), i !== this.z_ && ((this.k_ = !0), this.Ru());
        }
        Y_() {
          if (!this.k_) return;
          if (((this.k_ = !1), this.Ki())) return void this.Du(iw.M_());
          let t = this.iu(),
            i = this.fo / this.z_,
            s = this.E_ + t,
            e = new im(s - i + 1, s);
          this.Du(new iw(e));
        }
        Q_() {
          let t = tj(this.z_, this.Vu(), this.Iu());
          this.z_ !== t && ((this.z_ = t), (this.k_ = !0));
        }
        Iu() {
          return this.ys.maxBarSpacing > 0 ? this.ys.maxBarSpacing : 0.5 * this.fo;
        }
        Vu() {
          return this.ys.fixLeftEdge && this.ys.fixRightEdge && 0 !== this.S_.length
            ? this.fo / this.S_.length
            : this.ys.minBarSpacing;
        }
        tu() {
          let t = this.Bu();
          null !== t && this.E_ < t && ((this.E_ = t), (this.k_ = !0));
          let i = this.Au();
          this.E_ > i && ((this.E_ = i), (this.k_ = !0));
        }
        Bu() {
          let t = this.Z_(),
            i = this.b_;
          return null === t || null === i
            ? null
            : t - i - 1 + (this.ys.fixLeftEdge ? this.fo / this.z_ : Math.min(2, this.S_.length));
        }
        Au() {
          return this.ys.fixRightEdge ? 0 : this.fo / this.z_ - Math.min(2, this.S_.length);
        }
        vu() {
          this.D_ = { lu: this.lu(), _u: this._u() };
        }
        mu() {
          this.D_ = null;
        }
        cu(t) {
          let i = this.C_.get(t.weight);
          return (
            void 0 === i && ((i = new ip((t) => this.Eu(t), this.i_)), this.C_.set(t.weight, i)),
            i.s_(t)
          );
        }
        Eu(t) {
          return this.i_.formatTickmark(t, this.Ml);
        }
        Du(t) {
          let i = this.y_;
          (this.y_ = t),
            ig(i.w_(), this.y_.w_()) || this.P_.p(),
            ig(i.g_(), this.y_.g_()) || this.T_.p(),
            this.Ru();
        }
        Ru() {
          this.V_ = null;
        }
        W_() {
          this.Ru(), this.C_.clear();
        }
        L_() {
          this.i_.updateFormatter(this.Ml);
        }
        F_() {
          if (!this.ys.fixLeftEdge) return;
          let t = this.Z_();
          if (null === t) return;
          let i = this.ye();
          if (null === i) return;
          let s = i.Uh() - t;
          if (s < 0) {
            let t = this.E_ - s - 1;
            this.fn(t);
          }
          this.Q_();
        }
        H_() {
          this.tu(), this.Q_();
        }
        ru(t) {
          return !this.ys.ignoreWhitespaceIndices || this.I_.get(t) || !1;
        }
        hu(t) {
          let i = (function* (t) {
              let i = Math.round(t),
                s = i < t,
                e = 1;
              for (;;) s ? (yield i + e, yield i - e) : (yield i - e, yield i + e), e++;
            })(t),
            s = this.G_();
          for (; s; ) {
            let t = i.next().value;
            if (this.I_.get(t)) return t;
            if (t < 0 || t > s) break;
          }
          return t;
        }
      }
      !(function (t) {
        (t[(t.OnTouchEnd = 0)] = 'OnTouchEnd'), (t[(t.OnNextTap = 1)] = 'OnNextTap');
      })(o || (o = {}));
      class iy {
        constructor(t, i, s) {
          (this.zu = []),
            (this.Lu = []),
            (this.fo = 0),
            (this.Ou = null),
            (this.Nu = new y()),
            (this.Wu = new y()),
            (this.Fu = null),
            (this.Hu = t),
            (this.ys = i),
            (this.i_ = s),
            (this.bl = new D(this.ys.layout.colorParsers)),
            (this.Uu = new E(this)),
            (this.uh = new iM(this, i.timeScale, this.ys.localization, s)),
            (this.Ct = new ti(this, i.crosshair)),
            (this.$u = new tq(i.crosshair)),
            this.qu(0),
            this.zu[0].Po(2e3),
            (this.Yu = this.ju(0)),
            (this.Ku = this.ju(1));
        }
        Bh() {
          this.Xu(te.gn());
        }
        ar() {
          this.Xu(te.wn());
        }
        Zh() {
          this.Xu(new te(1));
        }
        Ah(t) {
          let i = this.Zu(t);
          this.Xu(i);
        }
        Gu() {
          return this.Ou;
        }
        Ju(t) {
          if (this.Ou?.Xo === t?.Xo && this.Ou?.Zo?.Kn === t?.Zo?.Kn) return;
          let i = this.Ou;
          (this.Ou = t), null !== i && this.Ah(i.Xo), null !== t && t.Xo !== i?.Xo && this.Ah(t.Xo);
        }
        N() {
          return this.ys;
        }
        hr(t) {
          x(this.ys, t),
            this.zu.forEach((i) => i.xo(t)),
            void 0 !== t.timeScale && this.uh.hr(t.timeScale),
            void 0 !== t.localization && this.uh.N_(t.localization),
            (t.leftPriceScale || t.rightPriceScale) && this.Nu.p(),
            (this.Yu = this.ju(0)),
            (this.Ku = this.ju(1)),
            this.Bh();
        }
        Qu(t, i, s = 0) {
          let e = this.zu[s];
          if (void 0 === e) return;
          if ('left' === t)
            return (
              x(this.ys, { leftPriceScale: i }),
              e.xo({ leftPriceScale: i }),
              this.Nu.p(),
              void this.Bh()
            );
          if ('right' === t)
            return (
              x(this.ys, { rightPriceScale: i }),
              e.xo({ rightPriceScale: i }),
              this.Nu.p(),
              void this.Bh()
            );
          let h = this.tc(t, s);
          null !== h && (h.Wt.hr(i), this.Nu.p());
        }
        tc(t, i) {
          let s = this.zu[i];
          if (void 0 === s) return null;
          let e = s.Co(t);
          return null !== e ? { Us: s, Wt: e } : null;
        }
        At() {
          return this.uh;
        }
        $s() {
          return this.zu;
        }
        sc() {
          return this.Ct;
        }
        nc() {
          return this.Wu;
        }
        ec(t, i) {
          t.Al(i), this.au();
        }
        To(t) {
          (this.fo = t), this.uh.To(this.fo), this.zu.forEach((i) => i.To(t)), this.au();
        }
        rc(t) {
          1 !== this.zu.length &&
            (v(t >= 0 && t < this.zu.length, 'Invalid pane index'),
            this.zu.splice(t, 1),
            this.Bh());
        }
        hc(t, i) {
          if (this.zu.length < 2) return;
          v(t >= 0 && t < this.zu.length, 'Invalid pane index');
          let s = this.zu[t],
            e = this.zu.reduce((t, i) => t + i.ko(), 0),
            h = this.zu.reduce((t, i) => t + i.$t(), 0),
            l = h - 30 * (this.zu.length - 1);
          i = Math.min(l, Math.max(30, i));
          let r = e / h,
            n = s.$t();
          s.Po(i * r);
          let o = i - n,
            a = this.zu.length - 1;
          for (let t of this.zu)
            if (t !== s) {
              let i = Math.min(l, Math.max(30, t.$t() - o / a));
              (o -= t.$t() - i), (a -= 1);
              let s = i * r;
              t.Po(s);
            }
          this.Bh();
        }
        ac(t, i) {
          v(t >= 0 && t < this.zu.length && i >= 0 && i < this.zu.length, 'Invalid pane index');
          let s = this.zu[t],
            e = this.zu[i];
          (this.zu[t] = e), (this.zu[i] = s), this.Bh();
        }
        Eo(t, i, s) {
          t.Eo(i, s);
        }
        zo(t, i, s) {
          t.zo(i, s), this.Eh(), this.Xu(this.lc(t, 2));
        }
        Lo(t, i) {
          t.Lo(i), this.Xu(this.lc(t, 2));
        }
        Oo(t, i, s) {
          i.Pl() || t.Oo(i, s);
        }
        No(t, i, s) {
          i.Pl() || (t.No(i, s), this.Eh(), this.Xu(this.lc(t, 2)));
        }
        Wo(t, i) {
          i.Pl() || (t.Wo(i), this.Xu(this.lc(t, 2)));
        }
        Ho(t, i) {
          t.Ho(i), this.Xu(this.lc(t, 2));
        }
        oc(t) {
          this.uh.so(t);
        }
        _c(t, i) {
          let s = this.At();
          if (s.Ki() || 0 === i) return;
          let e = s.Qi();
          (t = Math.max(1, Math.min(t, e))), s.pu(t, i), this.au();
        }
        uc(t) {
          this.cc(0), this.dc(t), this.fc();
        }
        vc(t) {
          this.uh.no(t), this.au();
        }
        mc() {
          this.uh.eo(), this.ar();
        }
        cc(t) {
          this.uh.ro(t);
        }
        dc(t) {
          this.uh.ho(t), this.au();
        }
        fc() {
          this.uh.ao(), this.ar();
        }
        js() {
          return this.Lu;
        }
        wc(t, i, s, e, h) {
          this.Ct.Vs(t, i);
          let l = NaN,
            r = this.uh.nu(t, !0),
            n = this.uh.ye();
          null !== n && (r = Math.min(Math.max(n.Uh(), r), n.bi()));
          let o = e.Ps(),
            a = o.zt();
          if (
            (null !== a && (l = o.Ts(i, a)),
            (l = this.$u.Ma(l, r, e)),
            this.Ct.Es(r, l, e),
            this.Zh(),
            !h)
          ) {
            let h = id(e, t, i);
            this.Ju(h && { Xo: h.Xo, Zo: h.Zo, Jo: h.Jo || null }),
              this.Wu.p(this.Ct.Bt(), { x: t, y: i }, s);
          }
        }
        gc(t, i, s) {
          let e = s.Ps(),
            h = e.zt(),
            l = e.Nt(t, b(h)),
            r = this.uh.U_(i, !0),
            n = this.uh.qt(b(r));
          this.wc(n, l, null, s, !0);
        }
        Mc(t) {
          this.sc().Ls(), this.Zh(), t || this.Wu.p(null, null, null);
        }
        Eh() {
          let t = this.Ct.Us();
          if (null !== t) {
            let i = this.Ct.Bs(),
              s = this.Ct.As();
            this.wc(i, s, null, t);
          }
          this.Ct.Ns();
        }
        bc(t, i, s) {
          let e = this.uh.Rs(0);
          void 0 !== i && void 0 !== s && this.uh.kt(i, s);
          let h = this.uh.Rs(0),
            l = this.uh.iu(),
            r = this.uh.ye();
          if (null !== r && null !== e && null !== h) {
            let i = r.Te(l),
              n = this.i_.key(e) > this.i_.key(h),
              o = null !== t && t > l && !n,
              a = this.uh.N().allowShiftVisibleRangeOnWhitespaceReplacement,
              u = i && (void 0 !== s || a) && this.uh.N().shiftVisibleRangeOnNewBar;
            if (o && !u) {
              let i = t - l;
              this.uh.fn(this.uh._u() - i);
            }
          }
          this.uh.fu(t);
        }
        Lh(t) {
          null !== t && t.$o();
        }
        Hn(t) {
          if (t instanceof iu) return t;
          let i = this.zu.find((i) => i.Dt().includes(t));
          return void 0 === i ? null : i;
        }
        au() {
          this.zu.forEach((t) => t.$o()), this.Eh();
        }
        m() {
          this.zu.forEach((t) => t.m()),
            (this.zu.length = 0),
            (this.ys.localization.priceFormatter = void 0),
            (this.ys.localization.percentageFormatter = void 0),
            (this.ys.localization.timeFormatter = void 0);
        }
        Sc() {
          return this.Uu;
        }
        Yn() {
          return this.Uu.N();
        }
        yo() {
          return this.Nu;
        }
        xc(t, i) {
          let s = this.qu(i);
          this.Cc(t, s), this.Lu.push(t), 1 === this.Lu.length ? this.Bh() : this.ar();
        }
        yc(t) {
          let i = this.Hn(t),
            s = this.Lu.indexOf(t);
          v(-1 !== s, 'Series not found');
          let e = b(i);
          this.Lu.splice(s, 1), e.Jl(t), t.m && t.m(), this.uh.O_(), this.kc(e);
        }
        Ih(t, i) {
          let s = b(this.Hn(t));
          s.Jl(t, !0), s.Zl(t, i, !0);
        }
        ku() {
          let t = te.wn();
          t.rn(), this.Xu(t);
        }
        Pc(t) {
          let i = te.wn();
          i.ln(t), this.Xu(i);
        }
        cn() {
          let t = te.wn();
          t.cn(), this.Xu(t);
        }
        dn(t) {
          let i = te.wn();
          i.dn(t), this.Xu(i);
        }
        fn(t) {
          let i = te.wn();
          i.fn(t), this.Xu(i);
        }
        _n(t) {
          let i = te.wn();
          i._n(t), this.Xu(i);
        }
        hn() {
          let t = te.wn();
          t.hn(), this.Xu(t);
        }
        Tc() {
          return this.ys.rightPriceScale.visible ? 'right' : 'left';
        }
        Rc(t, i) {
          if ((v(i >= 0, 'Index should be greater or equal to 0'), i === this.Dc(t))) return;
          let s = b(this.Hn(t));
          s.Jl(t);
          let e = this.qu(i);
          this.Cc(t, e), 0 === s.ba().length && this.kc(s);
        }
        Vc() {
          return this.Ku;
        }
        $() {
          return this.Yu;
        }
        Ut(t) {
          let i = this.Ku,
            s = this.Yu;
          if (i === s) return i;
          if (
            ((t = Math.max(0, Math.min(100, Math.round(100 * t)))),
            null === this.Fu || this.Fu.mr !== s || this.Fu.wr !== i)
          )
            this.Fu = { mr: s, wr: i, Ic: new Map() };
          else {
            let i = this.Fu.Ic.get(t);
            if (void 0 !== i) return i;
          }
          let e = this.bl.tt(s, i, t / 100);
          return this.Fu.Ic.set(t, e), e;
        }
        Bc(t) {
          return this.zu.indexOf(t);
        }
        Xi() {
          return this.bl;
        }
        qu(t) {
          if (
            (v(t >= 0, 'Index should be greater or equal to 0'),
            (t = Math.min(this.zu.length, t)) < this.zu.length)
          )
            return this.zu[t];
          let i = new iu(this.uh, this);
          this.zu.push(i);
          let s = te.gn();
          return s.Qs(t, { tn: 0, sn: !0 }), this.Xu(s), i;
        }
        Dc(t) {
          return this.zu.findIndex((i) => i.Do().includes(t));
        }
        lc(t, i) {
          let s = new te(i);
          if (null !== t) {
            let e = this.zu.indexOf(t);
            s.Qs(e, { tn: i });
          }
          return s;
        }
        Zu(t, i) {
          return void 0 === i && (i = 2), this.lc(this.Hn(t), i);
        }
        Xu(t) {
          this.Hu && this.Hu(t), this.zu.forEach((t) => t.jo().lr().kt());
        }
        Cc(t, i) {
          let s = t.N().priceScaleId,
            e = void 0 !== s ? s : this.Tc();
          i.Zl(t, e), ts(e) || t.hr(t.N());
        }
        ju(t) {
          let i = this.ys.layout;
          return 'gradient' === i.background.type
            ? 0 === t
              ? i.background.topColor
              : i.background.bottomColor
            : i.background.color;
        }
        kc(t) {
          0 === t.ba().length && this.zu.length > 1 && (this.zu.splice(this.Bc(t), 1), this.Bh());
        }
      }
      function ix(t) {
        return !_(t) && !C(t);
      }
      !(function (t) {
        (t[(t.Disabled = 0)] = 'Disabled'),
          (t[(t.Continuous = 1)] = 'Continuous'),
          (t[(t.OnDataUpdate = 2)] = 'OnDataUpdate');
      })(a || (a = {})),
        (function (t) {
          (t[(t.LastBar = 0)] = 'LastBar'), (t[(t.LastVisible = 1)] = 'LastVisible');
        })(u || (u = {})),
        (function (t) {
          (t.Solid = 'solid'), (t.VerticalGradient = 'gradient');
        })(c || (c = {})),
        (function (t) {
          (t[(t.Year = 0)] = 'Year'),
            (t[(t.Month = 1)] = 'Month'),
            (t[(t.DayOfMonth = 2)] = 'DayOfMonth'),
            (t[(t.Time = 3)] = 'Time'),
            (t[(t.TimeWithSeconds = 4)] = 'TimeWithSeconds');
        })(d || (d = {}));
      let i_ = (t) => t.getUTCFullYear();
      class iS {
        constructor(t = 'yyyy-MM-dd', i = 'default') {
          (this.Ac = t), (this.Ec = i);
        }
        s_(t) {
          return (function (t, i, s) {
            return i
              .replace(/yyyy/g, th(i_(t), 4))
              .replace(/yy/g, th(i_(t) % 100, 2))
              .replace(
                /MMMM/g,
                new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(s, {
                  month: 'long',
                })
              )
              .replace(
                /MMM/g,
                new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(s, {
                  month: 'short',
                })
              )
              .replace(/MM/g, th(t.getUTCMonth() + 1, 2))
              .replace(/dd/g, th(t.getUTCDate(), 2));
          })(t, this.Ac, this.Ec);
        }
      }
      class iC {
        constructor(t) {
          this.zc = t || '%h:%m:%s';
        }
        s_(t) {
          return this.zc
            .replace('%h', th(t.getUTCHours(), 2))
            .replace('%m', th(t.getUTCMinutes(), 2))
            .replace('%s', th(t.getUTCSeconds(), 2));
        }
      }
      let ik = { Lc: 'yyyy-MM-dd', Oc: '%h:%m:%s', Nc: ' ', Wc: 'default' };
      class iN {
        constructor(t = {}) {
          let i = { ...ik, ...t };
          (this.Fc = new iS(i.Lc, i.Wc)), (this.Hc = new iC(i.Oc)), (this.Uc = i.Nc);
        }
        s_(t) {
          return `${this.Fc.s_(t)}${this.Uc}${this.Hc.s_(t)}`;
        }
      }
      function iY(t) {
        return 60 * t * 6e4;
      }
      function iz(t) {
        return 60 * t * 1e3;
      }
      let iR = [
        { $c: 1e3, qc: 10 },
        { $c: iz(1), qc: 20 },
        { $c: iz(5), qc: 21 },
        { $c: iz(30), qc: 22 },
        { $c: iY(1), qc: 30 },
        { $c: iY(3), qc: 31 },
        { $c: iY(6), qc: 32 },
        { $c: iY(12), qc: 33 },
      ];
      function iT(t, i) {
        if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
        if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
        if (t.getUTCDate() !== i.getUTCDate()) return 50;
        for (let s = iR.length - 1; s >= 0; --s)
          if (Math.floor(i.getTime() / iR[s].$c) !== Math.floor(t.getTime() / iR[s].$c))
            return iR[s].qc;
        return 0;
      }
      function iE(t) {
        let i = t;
        if ((C(t) && (i = iV(t)), !ix(i))) throw Error('time must be of type BusinessDay');
        return {
          Yc: Math.round(
            new Date(Date.UTC(i.year, i.month - 1, i.day, 0, 0, 0, 0)).getTime() / 1e3
          ),
          jc: i,
        };
      }
      function iP(t) {
        if (!_(t)) throw Error('time must be of type isUTCTimestamp');
        return { Yc: t };
      }
      function iV(t) {
        let i = new Date(t);
        if (isNaN(i.getTime())) throw Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
        return { day: i.getUTCDate(), month: i.getUTCMonth() + 1, year: i.getUTCFullYear() };
      }
      function iD(t) {
        C(t.time) && (t.time = iV(t.time));
      }
      class iW {
        options() {
          return this.ys;
        }
        setOptions(t) {
          (this.ys = t), this.updateFormatter(t.localization);
        }
        preprocessData(t) {
          Array.isArray(t)
            ? (function (t) {
                t.forEach(iD);
              })(t)
            : iD(t);
        }
        createConverterToInternalObj(t) {
          return b(0 === t.length ? null : ix(t[0].time) || C(t[0].time) ? iE : iP);
        }
        key(t) {
          return 'object' == typeof t && 'Yc' in t
            ? t.Yc
            : this.key(this.convertHorzItemToInternal(t));
        }
        cacheKey(t) {
          return void 0 === t.jc
            ? new Date(1e3 * t.Yc).getTime()
            : new Date(Date.UTC(t.jc.year, t.jc.month - 1, t.jc.day)).getTime();
        }
        convertHorzItemToInternal(t) {
          return _(t) ? iP(t) : ix(t) ? iE(t) : iE(iV(t));
        }
        updateFormatter(t) {
          if (!this.ys) return;
          let i = t.dateFormat;
          this.ys.timeScale.timeVisible
            ? (this.Kc = new iN({
                Lc: i,
                Oc: this.ys.timeScale.secondsVisible ? '%h:%m:%s' : '%h:%m',
                Nc: '   ',
                Wc: t.locale,
              }))
            : (this.Kc = new iS(i, t.locale));
        }
        formatHorzItem(t) {
          return this.Kc.s_(new Date(1e3 * t.Yc));
        }
        formatTickmark(t, i) {
          let s = (function (t, i, s) {
              switch (t) {
                case 0:
                case 10:
                  return i ? (s ? 4 : 3) : 2;
                case 20:
                case 21:
                case 22:
                case 30:
                case 31:
                case 32:
                case 33:
                  return i ? 3 : 2;
                case 50:
                  return 2;
                case 60:
                  return 1;
                case 70:
                  return 0;
              }
            })(t.weight, this.ys.timeScale.timeVisible, this.ys.timeScale.secondsVisible),
            e = this.ys.timeScale;
          if (void 0 !== e.tickMarkFormatter) {
            let h = e.tickMarkFormatter(t.originalTime, s, i.locale);
            if (null !== h) return h;
          }
          return (function (t, i, s) {
            let e = {};
            switch (i) {
              case 0:
                e.year = 'numeric';
                break;
              case 1:
                e.month = 'short';
                break;
              case 2:
                e.day = 'numeric';
                break;
              case 3:
                (e.hour12 = !1), (e.hour = '2-digit'), (e.minute = '2-digit');
                break;
              case 4:
                (e.hour12 = !1),
                  (e.hour = '2-digit'),
                  (e.minute = '2-digit'),
                  (e.second = '2-digit');
            }
            let h = new Date(
              void 0 === t.jc ? 1e3 * t.Yc : Date.UTC(t.jc.year, t.jc.month - 1, t.jc.day)
            );
            return new Date(
              h.getUTCFullYear(),
              h.getUTCMonth(),
              h.getUTCDate(),
              h.getUTCHours(),
              h.getUTCMinutes(),
              h.getUTCSeconds(),
              h.getUTCMilliseconds()
            ).toLocaleString(s, e);
          })(t.time, s, i.locale);
        }
        maxTickMarkWeight(t) {
          let i = t.reduce(ib, t[0]).weight;
          return i > 30 && i < 50 && (i = 30), i;
        }
        fillWeightsForPoints(t, i) {
          !(function (t, i = 0) {
            if (0 === t.length) return;
            let s = 0 === i ? null : t[i - 1].time.Yc,
              e = null !== s ? new Date(1e3 * s) : null,
              h = 0;
            for (let l = i; l < t.length; ++l) {
              let i = t[l],
                r = new Date(1e3 * i.time.Yc);
              null !== e && (i.timeWeight = iT(r, e)),
                (h += i.time.Yc - (s || i.time.Yc)),
                (s = i.time.Yc),
                (e = r);
            }
            if (0 === i && t.length > 1) {
              let i = Math.ceil(h / (t.length - 1)),
                s = new Date(1e3 * (t[0].time.Yc - i));
              t[0].timeWeight = iT(new Date(1e3 * t[0].time.Yc), s);
            }
          })(t, i);
        }
        static Xc(t) {
          return x({ localization: { dateFormat: "dd MMM 'yy" } }, t ?? {});
        }
      }
      let iF = 'undefined' != typeof window;
      function iB() {
        return !!iF && window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      }
      function iA() {
        return !!iF && /iPhone|iPad|iPod/.test(window.navigator.platform);
      }
      class iL {
        constructor(t, i, s) {
          (this.Zc = 0),
            (this.Gc = null),
            (this.Jc = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY }),
            (this.Qc = 0),
            (this.td = null),
            (this.sd = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY }),
            (this.nd = null),
            (this.ed = !1),
            (this.rd = null),
            (this.hd = null),
            (this.ad = !1),
            (this.ld = !1),
            (this.od = !1),
            (this._d = null),
            (this.ud = null),
            (this.dd = null),
            (this.fd = null),
            (this.pd = null),
            (this.vd = null),
            (this.md = null),
            (this.wd = 0),
            (this.gd = !1),
            (this.Md = !1),
            (this.bd = !1),
            (this.Sd = 0),
            (this.xd = null),
            (this.Cd = !iA()),
            (this.yd = (t) => {
              this.kd(t);
            }),
            (this.Pd = (t) => {
              if (this.Td(t)) {
                let i = this.Rd(t);
                if ((++this.Qc, this.td && this.Qc > 1)) {
                  let { Dd: s } = this.Vd(iQ(t), this.sd);
                  s < 30 && !this.od && this.Id(i, this.Ad.Bd), this.Ed();
                }
              } else {
                let i = this.Rd(t);
                if ((++this.Zc, this.Gc && this.Zc > 1)) {
                  let { Dd: s } = this.Vd(iQ(t), this.Jc);
                  s < 5 && !this.ld && this.zd(i, this.Ad.Ld), this.Od();
                }
              }
            }),
            (this.Nd = t),
            (this.Ad = i),
            (this.ys = s),
            this.Wd();
        }
        m() {
          null !== this._d && (this._d(), (this._d = null)),
            null !== this.ud && (this.ud(), (this.ud = null)),
            null !== this.fd && (this.fd(), (this.fd = null)),
            null !== this.pd && (this.pd(), (this.pd = null)),
            null !== this.vd && (this.vd(), (this.vd = null)),
            null !== this.dd && (this.dd(), (this.dd = null)),
            this.Fd(),
            this.Od();
        }
        Hd(t) {
          this.fd && this.fd();
          let i = this.Ud.bind(this);
          if (
            ((this.fd = () => {
              this.Nd.removeEventListener('mousemove', i);
            }),
            this.Nd.addEventListener('mousemove', i),
            this.Td(t))
          )
            return;
          let s = this.Rd(t);
          this.zd(s, this.Ad.$d), (this.Cd = !0);
        }
        Od() {
          null !== this.Gc && clearTimeout(this.Gc),
            (this.Zc = 0),
            (this.Gc = null),
            (this.Jc = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY });
        }
        Ed() {
          null !== this.td && clearTimeout(this.td),
            (this.Qc = 0),
            (this.td = null),
            (this.sd = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY });
        }
        Ud(t) {
          if (this.bd || null !== this.hd || this.Td(t)) return;
          let i = this.Rd(t);
          this.zd(i, this.Ad.qd), (this.Cd = !0);
        }
        Yd(t) {
          let i = iJ(t.changedTouches, b(this.xd));
          if (null === i || ((this.Sd = iX(t)), null !== this.md) || this.Md) return;
          this.gd = !0;
          let { jd: s, Kd: e, Dd: h } = this.Vd(iQ(i), b(this.hd));
          if (this.ad || !(h < 5)) {
            if (!this.ad) {
              let t = 0.5 * s,
                i = e >= t && !this.ys.Xd(),
                h = t > e && !this.ys.Zd();
              i || h || (this.Md = !0), (this.ad = !0), (this.od = !0), this.Fd(), this.Ed();
            }
            if (!this.Md) {
              let s = this.Rd(t, i);
              this.Id(s, this.Ad.Gd), iI(t);
            }
          }
        }
        Jd(t) {
          if (0 !== t.button) return;
          let { Dd: i } = this.Vd(iQ(t), b(this.rd));
          if ((i >= 5 && ((this.ld = !0), this.Od()), this.ld)) {
            let i = this.Rd(t);
            this.zd(i, this.Ad.Qd);
          }
        }
        Vd(t, i) {
          let s = Math.abs(i._t - t._t),
            e = Math.abs(i.ut - t.ut);
          return { jd: s, Kd: e, Dd: s + e };
        }
        tf(t) {
          let i = iJ(t.changedTouches, b(this.xd));
          if ((null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i))
            return;
          (this.xd = null),
            (this.Sd = iX(t)),
            this.Fd(),
            (this.hd = null),
            this.vd && (this.vd(), (this.vd = null));
          let s = this.Rd(t, i);
          if ((this.Id(s, this.Ad.if), ++this.Qc, this.td && this.Qc > 1)) {
            let { Dd: t } = this.Vd(iQ(i), this.sd);
            t < 30 && !this.od && this.Id(s, this.Ad.Bd), this.Ed();
          } else this.od || (this.Id(s, this.Ad.sf), this.Ad.sf && iI(t));
          0 === this.Qc && iI(t), 0 === t.touches.length && this.ed && ((this.ed = !1), iI(t));
        }
        kd(t) {
          if (0 !== t.button) return;
          let i = this.Rd(t);
          if (
            ((this.rd = null),
            (this.bd = !1),
            this.pd && (this.pd(), (this.pd = null)),
            iB() &&
              this.Nd.ownerDocument.documentElement.removeEventListener('mouseleave', this.yd),
            !this.Td(t))
          ) {
            if ((this.zd(i, this.Ad.nf), ++this.Zc, this.Gc && this.Zc > 1)) {
              let { Dd: s } = this.Vd(iQ(t), this.Jc);
              s < 5 && !this.ld && this.zd(i, this.Ad.Ld), this.Od();
            } else this.ld || this.zd(i, this.Ad.ef);
          }
        }
        Fd() {
          null !== this.nd && (clearTimeout(this.nd), (this.nd = null));
        }
        rf(t) {
          if (null !== this.xd) return;
          let i = t.changedTouches[0];
          (this.xd = i.identifier), (this.Sd = iX(t));
          let s = this.Nd.ownerDocument.documentElement;
          (this.od = !1),
            (this.ad = !1),
            (this.Md = !1),
            (this.hd = iQ(i)),
            this.vd && (this.vd(), (this.vd = null));
          {
            let i = this.Yd.bind(this),
              e = this.tf.bind(this);
            (this.vd = () => {
              s.removeEventListener('touchmove', i), s.removeEventListener('touchend', e);
            }),
              s.addEventListener('touchmove', i, { passive: !1 }),
              s.addEventListener('touchend', e, { passive: !1 }),
              this.Fd(),
              (this.nd = setTimeout(this.hf.bind(this, t), 240));
          }
          let e = this.Rd(t, i);
          this.Id(e, this.Ad.af),
            this.td ||
              ((this.Qc = 0), (this.td = setTimeout(this.Ed.bind(this), 500)), (this.sd = iQ(i)));
        }
        lf(t) {
          if (0 !== t.button) return;
          let i = this.Nd.ownerDocument.documentElement;
          iB() && i.addEventListener('mouseleave', this.yd),
            (this.ld = !1),
            (this.rd = iQ(t)),
            this.pd && (this.pd(), (this.pd = null));
          {
            let t = this.Jd.bind(this),
              s = this.kd.bind(this);
            (this.pd = () => {
              i.removeEventListener('mousemove', t), i.removeEventListener('mouseup', s);
            }),
              i.addEventListener('mousemove', t),
              i.addEventListener('mouseup', s);
          }
          if (((this.bd = !0), this.Td(t))) return;
          let s = this.Rd(t);
          this.zd(s, this.Ad._f),
            this.Gc ||
              ((this.Zc = 0), (this.Gc = setTimeout(this.Od.bind(this), 500)), (this.Jc = iQ(t)));
        }
        Wd() {
          var t;
          this.Nd.addEventListener('mouseenter', this.Hd.bind(this)),
            this.Nd.addEventListener('touchcancel', this.Fd.bind(this));
          {
            let t = this.Nd.ownerDocument,
              i = (t) => {
                this.Ad.uf &&
                  ((t.composed && this.Nd.contains(t.composedPath()[0])) ||
                    (t.target && this.Nd.contains(t.target)) ||
                    this.Ad.uf());
              };
            (this.ud = () => {
              t.removeEventListener('touchstart', i);
            }),
              (this._d = () => {
                t.removeEventListener('mousedown', i);
              }),
              t.addEventListener('mousedown', i),
              t.addEventListener('touchstart', i, { passive: !0 });
          }
          iA() &&
            ((this.dd = () => {
              this.Nd.removeEventListener('dblclick', this.Pd);
            }),
            this.Nd.addEventListener('dblclick', this.Pd)),
            this.Nd.addEventListener('mouseleave', this.cf.bind(this)),
            this.Nd.addEventListener('touchstart', this.rf.bind(this), { passive: !0 }),
            (t = this.Nd),
            iF &&
              void 0 !== window.chrome &&
              t.addEventListener('mousedown', (t) => {
                if (1 === t.button) return t.preventDefault(), !1;
              }),
            this.Nd.addEventListener('mousedown', this.lf.bind(this)),
            this.df(),
            this.Nd.addEventListener('touchmove', () => {}, { passive: !1 });
        }
        df() {
          (void 0 === this.Ad.ff && void 0 === this.Ad.pf && void 0 === this.Ad.vf) ||
            (this.Nd.addEventListener('touchstart', (t) => this.mf(t.touches), { passive: !0 }),
            this.Nd.addEventListener(
              'touchmove',
              (t) => {
                if (2 === t.touches.length && null !== this.md && void 0 !== this.Ad.pf) {
                  let i = iO(t.touches[0], t.touches[1]) / this.wd;
                  this.Ad.pf(this.md, i), iI(t);
                }
              },
              { passive: !1 }
            ),
            this.Nd.addEventListener('touchend', (t) => {
              this.mf(t.touches);
            }));
        }
        mf(t) {
          1 === t.length && (this.gd = !1),
            2 !== t.length || this.gd || this.ed ? this.wf() : this.gf(t);
        }
        gf(t) {
          let i = this.Nd.getBoundingClientRect() || { left: 0, top: 0 };
          (this.md = {
            _t: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
            ut: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2,
          }),
            (this.wd = iO(t[0], t[1])),
            void 0 !== this.Ad.ff && this.Ad.ff(),
            this.Fd();
        }
        wf() {
          null !== this.md && ((this.md = null), void 0 !== this.Ad.vf && this.Ad.vf());
        }
        cf(t) {
          if ((this.fd && this.fd(), this.Td(t) || !this.Cd)) return;
          let i = this.Rd(t);
          this.zd(i, this.Ad.Mf), (this.Cd = !iA());
        }
        hf(t) {
          let i = iJ(t.touches, b(this.xd));
          if (null === i) return;
          let s = this.Rd(t, i);
          this.Id(s, this.Ad.bf), (this.od = !0), (this.ed = !0);
        }
        Td(t) {
          return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents
            ? t.sourceCapabilities.firesTouchEvents
            : iX(t) < this.Sd + 500;
        }
        Id(t, i) {
          i && i.call(this.Ad, t);
        }
        zd(t, i) {
          i && i.call(this.Ad, t);
        }
        Rd(t, i) {
          let s = i || t,
            e = this.Nd.getBoundingClientRect() || { left: 0, top: 0 };
          return {
            clientX: s.clientX,
            clientY: s.clientY,
            pageX: s.pageX,
            pageY: s.pageY,
            screenX: s.screenX,
            screenY: s.screenY,
            localX: s.clientX - e.left,
            localY: s.clientY - e.top,
            ctrlKey: t.ctrlKey,
            altKey: t.altKey,
            shiftKey: t.shiftKey,
            metaKey: t.metaKey,
            Sf: !t.type.startsWith('mouse') && 'contextmenu' !== t.type && 'click' !== t.type,
            xf: t.type,
            Cf: s.target,
            Qo: t.view,
            yf: () => {
              'touchstart' !== t.type && iI(t);
            },
          };
        }
      }
      function iO(t, i) {
        let s = t.clientX - i.clientX,
          e = t.clientY - i.clientY;
        return Math.sqrt(s * s + e * e);
      }
      function iI(t) {
        t.cancelable && t.preventDefault();
      }
      function iQ(t) {
        return { _t: t.pageX, ut: t.pageY };
      }
      function iX(t) {
        return t.timeStamp || performance.now();
      }
      function iJ(t, i) {
        for (let s = 0; s < t.length; ++s) if (t[s].identifier === i) return t[s];
        return null;
      }
      class i$ {
        constructor(t, i, s) {
          (this.kf = null),
            (this.Pf = null),
            (this.Tf = !0),
            (this.Rf = null),
            (this.Df = t),
            (this.Vf = t.If()[i]),
            (this.Bf = t.If()[s]),
            (this.Af = document.createElement('tr')),
            (this.Af.style.height = '1px'),
            (this.Ef = document.createElement('td')),
            (this.Ef.style.position = 'relative'),
            (this.Ef.style.padding = '0'),
            (this.Ef.style.margin = '0'),
            this.Ef.setAttribute('colspan', '3'),
            this.zf(),
            this.Af.appendChild(this.Ef),
            (this.Tf = this.Df.N().layout.panes.enableResize),
            this.Tf ? this.Lf() : ((this.kf = null), (this.Pf = null));
        }
        m() {
          null !== this.Pf && this.Pf.m();
        }
        Of() {
          return this.Af;
        }
        Nf() {
          return (0, f.Ej)({ width: this.Vf.Nf().width, height: 1 });
        }
        Wf() {
          return (0, f.Ej)({ width: this.Vf.Wf().width, height: +window.devicePixelRatio });
        }
        Ff(t, i, s) {
          let e = this.Wf();
          (t.fillStyle = this.Df.N().layout.panes.separatorColor),
            t.fillRect(i, s, e.width, e.height);
        }
        kt() {
          this.zf(),
            this.Df.N().layout.panes.enableResize !== this.Tf &&
              ((this.Tf = this.Df.N().layout.panes.enableResize),
              this.Tf
                ? this.Lf()
                : (null !== this.kf &&
                    (this.Ef.removeChild(this.kf.Hf),
                    this.Ef.removeChild(this.kf.Uf),
                    (this.kf = null)),
                  null !== this.Pf && (this.Pf.m(), (this.Pf = null))));
        }
        Lf() {
          let t = document.createElement('div'),
            i = t.style;
          (i.position = 'fixed'),
            (i.display = 'none'),
            (i.zIndex = '49'),
            (i.top = '0'),
            (i.left = '0'),
            (i.width = '100%'),
            (i.height = '100%'),
            (i.cursor = 'row-resize'),
            this.Ef.appendChild(t);
          let s = document.createElement('div'),
            e = s.style;
          (e.position = 'absolute'),
            (e.zIndex = '50'),
            (e.top = '-4px'),
            (e.height = '9px'),
            (e.width = '100%'),
            (e.backgroundColor = ''),
            (e.cursor = 'row-resize'),
            this.Ef.appendChild(s);
          let h = {
            $d: this.$f.bind(this),
            Mf: this.qf.bind(this),
            _f: this.Yf.bind(this),
            af: this.Yf.bind(this),
            Qd: this.jf.bind(this),
            Gd: this.jf.bind(this),
            nf: this.Kf.bind(this),
            if: this.Kf.bind(this),
          };
          (this.Pf = new iL(s, h, { Xd: () => !1, Zd: () => !0 })), (this.kf = { Uf: s, Hf: t });
        }
        zf() {
          this.Ef.style.background = this.Df.N().layout.panes.separatorColor;
        }
        $f(t) {
          null !== this.kf &&
            (this.kf.Uf.style.backgroundColor = this.Df.N().layout.panes.separatorHoverColor);
        }
        qf(t) {
          null !== this.kf && null === this.Rf && (this.kf.Uf.style.backgroundColor = '');
        }
        Yf(t) {
          if (null === this.kf) return;
          let i = this.Vf.Xf().ko() + this.Bf.Xf().ko(),
            s = i / (this.Vf.Nf().height + this.Bf.Nf().height),
            e = 30 * s;
          i <= 2 * e ||
            ((this.Rf = { Zf: t.pageY, Gf: this.Vf.Xf().ko(), Jf: i - e, Qf: i, tp: s, ip: e }),
            (this.kf.Hf.style.display = 'block'));
        }
        jf(t) {
          let i = this.Rf;
          if (null === i) return;
          let s = (t.pageY - i.Zf) * i.tp,
            e = tj(i.Gf + s, i.ip, i.Jf);
          this.Vf.Xf().Po(e), this.Bf.Xf().Po(i.Qf - e), this.Df.Qt().Bh();
        }
        Kf(t) {
          null !== this.Rf &&
            null !== this.kf &&
            ((this.Rf = null), (this.kf.Hf.style.display = 'none'));
        }
      }
      function iU(t, i, s) {
        let e = (t.sp - i.sp) / (t.wt - i.wt);
        return Math.sign(e) * Math.min(Math.abs(e), s);
      }
      class iK {
        constructor(t, i, s, e) {
          (this.np = null),
            (this.ep = null),
            (this.rp = null),
            (this.hp = null),
            (this.ap = null),
            (this.lp = 0),
            (this.op = 0),
            (this._p = t),
            (this.up = i),
            (this.cp = s),
            (this.Mn = e);
        }
        dp(t, i) {
          if (null !== this.np) {
            if (this.np.wt === i) return void (this.np.sp = t);
            if (Math.abs(this.np.sp - t) < this.Mn) return;
          }
          (this.hp = this.rp),
            (this.rp = this.ep),
            (this.ep = this.np),
            (this.np = { wt: i, sp: t });
        }
        le(t, i) {
          var s, e, h, l, r, n;
          if (null === this.np || null === this.ep || i - this.np.wt > 50) return;
          let o = 0,
            a = iU(this.np, this.ep, this.up),
            u = ((s = this.np), (e = this.ep), s.sp - e.sp),
            c = [a],
            d = [u];
          if (((o += u), null !== this.rp)) {
            let t = iU(this.ep, this.rp, this.up);
            if (Math.sign(t) === Math.sign(a)) {
              let i = ((h = this.ep), (l = this.rp), h.sp - l.sp);
              if ((c.push(t), d.push(i), (o += i), null !== this.hp)) {
                let t = iU(this.rp, this.hp, this.up);
                if (Math.sign(t) === Math.sign(a)) {
                  let i = ((r = this.rp), (n = this.hp), r.sp - n.sp);
                  c.push(t), d.push(i), (o += i);
                }
              }
            }
          }
          let f = 0;
          for (let t = 0; t < c.length; ++t) f += (d[t] / o) * c[t];
          Math.abs(f) < this._p ||
            ((this.ap = { sp: t, wt: i }),
            (this.op = f),
            (this.lp = (function (t, i) {
              let s = Math.log(i);
              return Math.log(-(+s / t)) / s;
            })(Math.abs(f), this.cp)));
        }
        bu(t) {
          let i = b(this.ap),
            s = t - i.wt;
          return i.sp + (this.op * (Math.pow(this.cp, s) - 1)) / Math.log(this.cp);
        }
        Mu(t) {
          return null === this.ap || this.fp(t) === this.lp;
        }
        fp(t) {
          return Math.min(t - b(this.ap).wt, this.lp);
        }
      }
      class iG {
        constructor(t, i) {
          (this.pp = void 0),
            (this.vp = void 0),
            (this.mp = void 0),
            (this.ps = !1),
            (this.wp = t),
            (this.gp = i),
            this.Mp();
        }
        kt() {
          this.Mp();
        }
        bp() {
          this.pp && this.wp.removeChild(this.pp),
            this.vp && this.wp.removeChild(this.vp),
            (this.pp = void 0),
            (this.vp = void 0);
        }
        Sp() {
          return this.ps !== this.xp() || this.mp !== this.Cp();
        }
        Cp() {
          return this.gp.Qt().Xi().J(this.gp.N().layout.textColor) > 160 ? 'dark' : 'light';
        }
        xp() {
          return this.gp.N().layout.attributionLogo;
        }
        yp() {
          let t = new URL(location.href);
          return t.hostname ? '&utm_source=' + t.hostname + t.pathname : '';
        }
        Mp() {
          this.Sp() &&
            (this.bp(),
            (this.ps = this.xp()),
            this.ps &&
              ((this.mp = this.Cp()),
              (this.vp = document.createElement('style')),
              (this.vp.innerText =
                'a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}'),
              (this.pp = document.createElement('a')),
              (this.pp.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.yp()}`),
              (this.pp.title = 'Charting by TradingView'),
              (this.pp.id = 'tv-attr-logo'),
              (this.pp.target = '_blank'),
              (this.pp.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>'),
              this.pp.toggleAttribute('data-dark', 'dark' === this.mp),
              this.wp.appendChild(this.vp),
              this.wp.appendChild(this.pp)));
        }
      }
      function iH(t, i) {
        let s = b(t.ownerDocument).createElement('canvas');
        t.appendChild(s);
        let e = (0, f.Dv)(s, {
          type: 'device-pixel-content-box',
          options: { allowResizeObserver: !0 },
          transform: (t, i) => ({
            width: Math.max(t.width, i.width),
            height: Math.max(t.height, i.height),
          }),
        });
        return e.resizeCanvasElement(i), e;
      }
      function iZ(t) {
        (t.width = 1), (t.height = 1), t.getContext('2d')?.clearRect(0, 0, 1, 1);
      }
      function iq(t, i, s, e) {
        t.ih && t.ih(i, s, e);
      }
      function ij(t, i, s, e) {
        t.nt(i, s, e);
      }
      function i0(t, i, s, e) {
        for (let h of t(s, e)) {
          let t = h.Tt(e);
          null !== t && i(t);
        }
      }
      function i1(t, i) {
        return (s) => (void 0 === s.Wt ? [] : (s.Wt()?.wa() ?? '') !== i ? [] : (s.ta?.(t) ?? []));
      }
      function i2(t, i, s, e) {
        if (!t.length) return;
        let h = 0,
          l = t[0].$t(e, !0),
          r = 1 === i ? s / 2 - (t[0].Wi() - l / 2) : t[0].Wi() - l / 2 - s / 2;
        r = Math.max(0, r);
        for (let l = 1; l < t.length; l++) {
          let n = t[l],
            o = t[l - 1],
            a = o.$t(e, !1),
            u = n.Wi(),
            c = o.Wi();
          if (1 === i ? u > c - a : u < c + a) {
            let e = c - a * i;
            n.Fi(e);
            let l = e - (i * a) / 2;
            if ((1 === i ? l < 0 : l > s) && r > 0) {
              let e = Math.min(1 === i ? -1 - l : l - s, r);
              for (let s = h; s < t.length; s++) t[s].Fi(t[s].Wi() + i * e);
              r -= e;
            }
          } else (h = l), (r = 1 === i ? c - a - u : u - (c + a));
        }
      }
      class i3 {
        constructor(t, i, s, e) {
          (this.Yi = null),
            (this.kp = null),
            (this.Pp = !1),
            (this.Tp = new ta(200)),
            (this.Rp = null),
            (this.Dp = 0),
            (this.Vp = !1),
            (this.Ip = () => {
              this.Vp || this.yt.Bp().Qt().ar();
            }),
            (this.Ap = () => {
              this.Vp || this.yt.Bp().Qt().ar();
            }),
            (this.yt = t),
            (this.ys = i),
            (this.gl = i.layout),
            (this.Uu = s),
            (this.Ep = 'left' === e),
            (this.zp = i1('normal', e)),
            (this.Lp = i1('top', e)),
            (this.Op = i1('bottom', e)),
            (this.Ef = document.createElement('div')),
            (this.Ef.style.height = '100%'),
            (this.Ef.style.overflow = 'hidden'),
            (this.Ef.style.width = '25px'),
            (this.Ef.style.left = '0'),
            (this.Ef.style.position = 'relative'),
            (this.Np = iH(this.Ef, (0, f.Ej)({ width: 16, height: 16 }))),
            this.Np.subscribeSuggestedBitmapSizeChanged(this.Ip);
          let h = this.Np.canvasElement;
          (h.style.position = 'absolute'),
            (h.style.zIndex = '1'),
            (h.style.left = '0'),
            (h.style.top = '0'),
            (this.Wp = iH(this.Ef, (0, f.Ej)({ width: 16, height: 16 }))),
            this.Wp.subscribeSuggestedBitmapSizeChanged(this.Ap);
          let l = this.Wp.canvasElement;
          (l.style.position = 'absolute'),
            (l.style.zIndex = '2'),
            (l.style.left = '0'),
            (l.style.top = '0');
          let r = {
            _f: this.Yf.bind(this),
            af: this.Yf.bind(this),
            Qd: this.jf.bind(this),
            Gd: this.jf.bind(this),
            uf: this.Fp.bind(this),
            nf: this.Kf.bind(this),
            if: this.Kf.bind(this),
            Ld: this.Hp.bind(this),
            Bd: this.Hp.bind(this),
            $d: this.Up.bind(this),
            Mf: this.qf.bind(this),
          };
          this.Pf = new iL(this.Wp.canvasElement, r, {
            Xd: () => !this.ys.handleScroll.vertTouchDrag,
            Zd: () => !0,
          });
        }
        m() {
          this.Pf.m(),
            this.Wp.unsubscribeSuggestedBitmapSizeChanged(this.Ap),
            iZ(this.Wp.canvasElement),
            this.Wp.dispose(),
            this.Np.unsubscribeSuggestedBitmapSizeChanged(this.Ip),
            iZ(this.Np.canvasElement),
            this.Np.dispose(),
            null !== this.Yi && this.Yi.io().u(this),
            (this.Yi = null);
        }
        Of() {
          return this.Ef;
        }
        k() {
          return this.gl.fontSize;
        }
        $p() {
          let t = this.Uu.N();
          return this.Rp !== t.P && (this.Tp.In(), (this.Rp = t.P)), t;
        }
        qp() {
          var t, i;
          if (null === this.Yi) return 0;
          let s = 0,
            e = this.$p(),
            h = b(
              this.Np.canvasElement.getContext('2d', {
                colorSpace: this.yt.Bp().N().layout.colorSpace,
              })
            );
          h.save();
          let l = this.Yi.Va();
          (h.font = this.Yp()),
            l.length > 0 &&
              (s = Math.max(this.Tp.Vi(h, l[0].Xa), this.Tp.Vi(h, l[l.length - 1].Xa)));
          let r = this.jp();
          for (let t = r.length; t--; ) {
            let i = this.Tp.Vi(h, r[t].ri());
            i > s && (s = i);
          }
          let n = this.Yi.zt();
          if (
            null !== n &&
            null !== this.kp &&
            2 !== (t = this.ys.crosshair).mode &&
            t.horzLine.visible &&
            t.horzLine.labelVisible
          ) {
            let t = this.Yi.Ts(1, n),
              i = this.Yi.Ts(this.kp.height - 2, n);
            s = Math.max(
              s,
              this.Tp.Vi(h, this.Yi.Zi(Math.floor(Math.min(t, i)) + 0.11111111111111, n)),
              this.Tp.Vi(h, this.Yi.Zi(Math.ceil(Math.max(t, i)) - 0.11111111111111, n))
            );
          }
          h.restore();
          let o = s || 34;
          return (i = Math.ceil(e.S + e.C + e.I + e.B + 5 + o)) + (i % 2);
        }
        Kp(t) {
          (null !== this.kp && (0, f.zE)(this.kp, t)) ||
            ((this.kp = t),
            (this.Vp = !0),
            this.Np.resizeCanvasElement(t),
            this.Wp.resizeCanvasElement(t),
            (this.Vp = !1),
            (this.Ef.style.width = `${t.width}px`),
            (this.Ef.style.height = `${t.height}px`));
        }
        Xp() {
          return b(this.kp).width;
        }
        _s(t) {
          this.Yi !== t &&
            (null !== this.Yi && this.Yi.io().u(this),
            (this.Yi = t),
            t.io().i(this.ol.bind(this), this));
        }
        Wt() {
          return this.Yi;
        }
        In() {
          let t = this.yt.Xf();
          this.yt.Bp().Qt().Ho(t, b(this.Wt()));
        }
        Zp(t) {
          if (null === this.kp) return;
          let i = { colorSpace: this.yt.Bp().N().layout.colorSpace };
          if (1 !== t) {
            this.Gp(), this.Np.applySuggestedBitmapSize();
            let t = (0, f.vb)(this.Np, i);
            null !== t &&
              (t.useBitmapCoordinateSpace((t) => {
                this.Jp(t), this.Qp(t);
              }),
              this.yt.tv(t, this.Op),
              this.iv(t),
              this.yt.tv(t, this.zp),
              this.sv(t));
          }
          this.Wp.applySuggestedBitmapSize();
          let s = (0, f.vb)(this.Wp, i);
          null !== s &&
            (s.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
              t.clearRect(0, 0, i.width, i.height);
            }),
            this.nv(s),
            this.yt.tv(s, this.Lp));
        }
        Wf() {
          return this.Np.bitmapSize;
        }
        Ff(t, i, s) {
          let e = this.Wf();
          e.width > 0 && e.height > 0 && t.drawImage(this.Np.canvasElement, i, s);
        }
        kt() {
          this.Yi?.Va();
        }
        Yf(t) {
          if (null === this.Yi || this.Yi.Ki() || !this.ys.handleScale.axisPressedMouseMove.price)
            return;
          let i = this.yt.Bp().Qt(),
            s = this.yt.Xf();
          (this.Pp = !0), i.Eo(s, this.Yi, t.localY);
        }
        jf(t) {
          if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
          let i = this.yt.Bp().Qt(),
            s = this.yt.Xf(),
            e = this.Yi;
          i.zo(s, e, t.localY);
        }
        Fp() {
          if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
          let t = this.yt.Bp().Qt(),
            i = this.yt.Xf(),
            s = this.Yi;
          this.Pp && ((this.Pp = !1), t.Lo(i, s));
        }
        Kf(t) {
          if (null === this.Yi || !this.ys.handleScale.axisPressedMouseMove.price) return;
          let i = this.yt.Bp().Qt(),
            s = this.yt.Xf();
          (this.Pp = !1), i.Lo(s, this.Yi);
        }
        Hp(t) {
          this.ys.handleScale.axisDoubleClickReset.price && this.In();
        }
        Up(t) {
          null !== this.Yi &&
            (!this.yt.Bp().Qt().N().handleScale.axisPressedMouseMove.price ||
              this.Yi.Le() ||
              this.Yi.Rl() ||
              this.ev(1));
        }
        qf(t) {
          this.ev(0);
        }
        jp() {
          let t = [],
            i = null === this.Yi ? void 0 : this.Yi;
          return (
            ((s) => {
              for (let e = 0; e < s.length; ++e) {
                let h = s[e].Fs(this.yt.Xf(), i);
                for (let i = 0; i < h.length; i++) t.push(h[i]);
              }
            })(this.yt.Xf().Dt()),
            t
          );
        }
        Jp({ context: t, bitmapSize: i }) {
          let { width: s, height: e } = i,
            h = this.yt.Xf().Qt(),
            l = h.$(),
            r = h.Vc();
          l === r ? X(t, 0, 0, s, e, l) : U(t, 0, 0, s, e, l, r);
        }
        Qp({ context: t, bitmapSize: i, horizontalPixelRatio: s }) {
          let e;
          if (null === this.kp || null === this.Yi || !this.Yi.N().borderVisible) return;
          t.fillStyle = this.Yi.N().borderColor;
          let h = Math.max(1, Math.floor(this.$p().S * s));
          (e = this.Ep ? i.width - h : 0), t.fillRect(e, 0, h, i.height);
        }
        iv(t) {
          if (null === this.kp || null === this.Yi) return;
          let i = this.Yi.Va(),
            s = this.Yi.N(),
            e = this.$p(),
            h = this.Ep ? this.kp.width - e.C : 0;
          s.borderVisible &&
            s.ticksVisible &&
            t.useBitmapCoordinateSpace(
              ({ context: t, horizontalPixelRatio: l, verticalPixelRatio: r }) => {
                t.fillStyle = s.borderColor;
                let n = Math.max(1, Math.floor(r)),
                  o = Math.floor(0.5 * r),
                  a = Math.round(e.C * l);
                for (let s of (t.beginPath(), i))
                  t.rect(Math.floor(h * l), Math.round(s.ka * r) - o, a, n);
                t.fill();
              }
            ),
            t.useMediaCoordinateSpace(({ context: t }) => {
              (t.font = this.Yp()),
                (t.fillStyle = s.textColor ?? this.gl.textColor),
                (t.textAlign = this.Ep ? 'right' : 'left'),
                (t.textBaseline = 'middle');
              let l = this.Ep ? Math.round(h - e.I) : Math.round(h + e.C + e.I),
                r = i.map((i) => this.Tp.Di(t, i.Xa));
              for (let s = i.length; s--; ) {
                let e = i[s];
                t.fillText(e.Xa, l, e.ka + r[s]);
              }
            });
        }
        Gp() {
          if (null === this.kp || null === this.Yi) return;
          let t = this.kp.height / 2,
            i = [],
            s = this.Yi.Dt().slice(),
            e = this.yt.Xf(),
            h = this.$p();
          this.Yi === e.$n() &&
            this.yt
              .Xf()
              .Dt()
              .forEach((t) => {
                e.Un(t) && s.push(t);
              });
          let l = this.Yi.ba()[0],
            r = this.Yi;
          s.forEach((s) => {
            let h = s.Fs(e, r);
            h.forEach((t) => {
              t.Fi(null), t.Hi() && i.push(t);
            }),
              l === s && h.length > 0 && (t = h[0].Bi());
          }),
            i.forEach((t) => t.Fi(t.Bi())),
            this.Yi.N().alignLabels && this.rv(i, h, t);
        }
        rv(t, i, s) {
          if (null === this.kp) return;
          let e = t.filter((t) => t.Bi() <= s),
            h = t.filter((t) => t.Bi() > s);
          for (let s of (e.sort((t, i) => i.Bi() - t.Bi()),
          e.length && h.length && h.push(e[0]),
          h.sort((t, i) => t.Bi() - i.Bi()),
          t)) {
            let t = Math.floor(s.$t(i) / 2),
              e = s.Bi();
            e > -t && e < t && s.Fi(t),
              e > this.kp.height - t && e < this.kp.height + t && s.Fi(this.kp.height - t);
          }
          i2(e, 1, this.kp.height, i), i2(h, -1, this.kp.height, i);
        }
        sv(t) {
          if (null === this.kp) return;
          let i = this.jp(),
            s = this.$p(),
            e = this.Ep ? 'right' : 'left';
          i.forEach((i) => {
            i.Ui() && i.Tt(b(this.Yi)).nt(t, s, this.Tp, e);
          });
        }
        nv(t) {
          if (null === this.kp || null === this.Yi) return;
          let i = this.yt.Bp().Qt(),
            s = [],
            e = this.yt.Xf(),
            h = i.sc().Fs(e, this.Yi);
          h.length && s.push(h);
          let l = this.$p(),
            r = this.Ep ? 'right' : 'left';
          s.forEach((i) => {
            i.forEach((i) => {
              i.Tt(b(this.Yi)).nt(t, l, this.Tp, r);
            });
          });
        }
        ev(t) {
          this.Ef.style.cursor = 1 === t ? 'ns-resize' : 'default';
        }
        ol() {
          let t = this.qp();
          this.Dp < t && this.yt.Bp().Qt().Bh(), (this.Dp = t);
        }
        Yp() {
          return T(this.gl.fontSize, this.gl.fontFamily);
        }
      }
      function i5(t, i) {
        return t.Jh?.(i) ?? [];
      }
      function i6(t, i) {
        return t.Ws?.(i) ?? [];
      }
      function i4(t, i) {
        return t.us?.(i) ?? [];
      }
      function i9(t, i) {
        return t.Xh?.(i) ?? [];
      }
      class i7 {
        constructor(t, i) {
          (this.kp = (0, f.Ej)({ width: 0, height: 0 })),
            (this.hv = null),
            (this.av = null),
            (this.lv = null),
            (this.ov = null),
            (this._v = !1),
            (this.uv = new y()),
            (this.cv = new y()),
            (this.dv = 0),
            (this.fv = !1),
            (this.pv = null),
            (this.vv = !1),
            (this.mv = null),
            (this.wv = null),
            (this.Vp = !1),
            (this.Ip = () => {
              this.Vp || null === this.gv || this.ts().ar();
            }),
            (this.Ap = () => {
              this.Vp || null === this.gv || this.ts().ar();
            }),
            (this.gp = t),
            (this.gv = i),
            this.gv.Yo().i(this.Mv.bind(this), this, !0),
            (this.bv = document.createElement('td')),
            (this.bv.style.padding = '0'),
            (this.bv.style.position = 'relative');
          let s = document.createElement('div');
          (s.style.width = '100%'),
            (s.style.height = '100%'),
            (s.style.position = 'relative'),
            (s.style.overflow = 'hidden'),
            (this.Sv = document.createElement('td')),
            (this.Sv.style.padding = '0'),
            (this.xv = document.createElement('td')),
            (this.xv.style.padding = '0'),
            this.bv.appendChild(s),
            (this.Np = iH(s, (0, f.Ej)({ width: 16, height: 16 }))),
            this.Np.subscribeSuggestedBitmapSizeChanged(this.Ip);
          let e = this.Np.canvasElement;
          (e.style.position = 'absolute'),
            (e.style.zIndex = '1'),
            (e.style.left = '0'),
            (e.style.top = '0'),
            (this.Wp = iH(s, (0, f.Ej)({ width: 16, height: 16 }))),
            this.Wp.subscribeSuggestedBitmapSizeChanged(this.Ap);
          let h = this.Wp.canvasElement;
          (h.style.position = 'absolute'),
            (h.style.zIndex = '2'),
            (h.style.left = '0'),
            (h.style.top = '0'),
            (this.Af = document.createElement('tr')),
            this.Af.appendChild(this.Sv),
            this.Af.appendChild(this.bv),
            this.Af.appendChild(this.xv),
            this.Cv(),
            (this.Pf = new iL(this.Wp.canvasElement, this, {
              Xd: () => null === this.pv && !this.gp.N().handleScroll.vertTouchDrag,
              Zd: () => null === this.pv && !this.gp.N().handleScroll.horzTouchDrag,
            }));
        }
        m() {
          null !== this.hv && this.hv.m(),
            null !== this.av && this.av.m(),
            (this.lv = null),
            this.Wp.unsubscribeSuggestedBitmapSizeChanged(this.Ap),
            iZ(this.Wp.canvasElement),
            this.Wp.dispose(),
            this.Np.unsubscribeSuggestedBitmapSizeChanged(this.Ip),
            iZ(this.Np.canvasElement),
            this.Np.dispose(),
            null !== this.gv && (this.gv.Yo().u(this), this.gv.m()),
            this.Pf.m();
        }
        Xf() {
          return b(this.gv);
        }
        yv(t) {
          null !== this.gv && this.gv.Yo().u(this),
            (this.gv = t),
            null !== this.gv && this.gv.Yo().i(i7.prototype.Mv.bind(this), this, !0),
            this.Cv(),
            this.gp.If().indexOf(this) === this.gp.If().length - 1
              ? ((this.lv = this.lv ?? new iG(this.bv, this.gp)), this.lv.kt())
              : (this.lv?.bp(), (this.lv = null));
        }
        Bp() {
          return this.gp;
        }
        Of() {
          return this.Af;
        }
        Cv() {
          if (null !== this.gv && (this.kv(), 0 !== this.ts().js().length)) {
            if (null !== this.hv) {
              let t = this.gv.Bo();
              this.hv._s(b(t));
            }
            if (null !== this.av) {
              let t = this.gv.Ao();
              this.av._s(b(t));
            }
          }
        }
        Pv() {
          null !== this.hv && this.hv.kt(), null !== this.av && this.av.kt();
        }
        ko() {
          return null !== this.gv ? this.gv.ko() : 0;
        }
        Po(t) {
          this.gv && this.gv.Po(t);
        }
        $d(t) {
          if (!this.gv) return;
          this.Tv();
          let i = t.localX,
            s = t.localY;
          this.Rv(i, s, t);
        }
        _f(t) {
          this.Tv(), this.Dv(), this.Rv(t.localX, t.localY, t);
        }
        qd(t) {
          if (!this.gv) return;
          this.Tv();
          let i = t.localX,
            s = t.localY;
          this.Rv(i, s, t);
        }
        ef(t) {
          null !== this.gv && (this.Tv(), this.Vv(t));
        }
        Ld(t) {
          null !== this.gv && this.Iv(this.cv, t);
        }
        Bd(t) {
          this.Ld(t);
        }
        Qd(t) {
          this.Tv(), this.Bv(t), this.Rv(t.localX, t.localY, t);
        }
        nf(t) {
          null !== this.gv && (this.Tv(), (this.fv = !1), this.Av(t));
        }
        sf(t) {
          null !== this.gv && this.Vv(t);
        }
        bf(t) {
          if (((this.fv = !0), null === this.pv)) {
            let i = { x: t.localX, y: t.localY };
            this.Ev(i, i, t);
          }
        }
        Mf(t) {
          null !== this.gv && (this.Tv(), this.gv.Qt().Ju(null), this.zv());
        }
        Lv() {
          return this.uv;
        }
        Ov() {
          return this.cv;
        }
        ff() {
          (this.dv = 1), this.ts().hn();
        }
        pf(t, i) {
          if (!this.gp.N().handleScale.pinch) return;
          let s = 5 * (i - this.dv);
          (this.dv = i), this.ts()._c(t._t, s);
        }
        af(t) {
          (this.fv = !1), (this.vv = null !== this.pv), this.Dv();
          let i = this.ts().sc();
          null !== this.pv &&
            i.Vt() &&
            ((this.mv = { x: i.si(), y: i.ni() }), (this.pv = { x: t.localX, y: t.localY }));
        }
        Gd(t) {
          if (null === this.gv) return;
          let i = t.localX,
            s = t.localY;
          if (null === this.pv) this.Bv(t);
          else {
            this.vv = !1;
            let e = b(this.mv),
              h = e.x + (i - this.pv.x),
              l = e.y + (s - this.pv.y);
            this.Rv(h, l, t);
          }
        }
        if(t) {
          0 === this.Bp().N().trackingMode.exitMode && (this.vv = !0), this.Nv(), this.Av(t);
        }
        jn(t, i) {
          let s = this.gv;
          return null === s ? null : id(s, t, i);
        }
        Wv(t, i) {
          b('left' === i ? this.hv : this.av).Kp((0, f.Ej)({ width: t, height: this.kp.height }));
        }
        Nf() {
          return this.kp;
        }
        Kp(t) {
          (0, f.zE)(this.kp, t) ||
            ((this.kp = t),
            (this.Vp = !0),
            this.Np.resizeCanvasElement(t),
            this.Wp.resizeCanvasElement(t),
            (this.Vp = !1),
            (this.bv.style.width = t.width + 'px'),
            (this.bv.style.height = t.height + 'px'));
        }
        Fv() {
          let t = b(this.gv);
          for (let i of (t.Io(t.Bo()), t.Io(t.Ao()), t.ba()))
            if (t.Un(i)) {
              let s = i.Wt();
              null !== s && t.Io(s), i.Ns();
            }
          for (let i of t.Ko()) i.Ns();
        }
        Wf() {
          return this.Np.bitmapSize;
        }
        Ff(t, i, s) {
          let e = this.Wf();
          e.width > 0 && e.height > 0 && t.drawImage(this.Np.canvasElement, i, s);
        }
        Zp(t) {
          if (0 === t || null === this.gv) return;
          t > 1 && this.Fv(), null !== this.hv && this.hv.Zp(t), null !== this.av && this.av.Zp(t);
          let i = { colorSpace: this.gp.N().layout.colorSpace };
          if (1 !== t) {
            this.Np.applySuggestedBitmapSize();
            let t = (0, f.vb)(this.Np, i);
            null !== t &&
              (t.useBitmapCoordinateSpace((t) => {
                this.Jp(t);
              }),
              this.gv && (this.Hv(t, i5), this.Uv(t), this.Hv(t, i6), this.Hv(t, i4)));
          }
          this.Wp.applySuggestedBitmapSize();
          let s = (0, f.vb)(this.Wp, i);
          null !== s &&
            (s.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
              t.clearRect(0, 0, i.width, i.height);
            }),
            this.$v(s),
            this.Hv(s, i9),
            this.Hv(s, i4));
        }
        qv() {
          return this.hv;
        }
        Yv() {
          return this.av;
        }
        tv(t, i) {
          this.Hv(t, i);
        }
        Mv() {
          null !== this.gv && this.gv.Yo().u(this), (this.gv = null);
        }
        Vv(t) {
          this.Iv(this.uv, t);
        }
        Iv(t, i) {
          let s = i.localX,
            e = i.localY;
          t.v() && t.p(this.ts().At().nu(s), { x: s, y: e }, i);
        }
        Jp({ context: t, bitmapSize: i }) {
          let { width: s, height: e } = i,
            h = this.ts(),
            l = h.$(),
            r = h.Vc();
          l === r ? X(t, 0, 0, s, e, r) : U(t, 0, 0, s, e, l, r);
        }
        Uv(t) {
          let i = b(this.gv),
            s = i.jo().lr().Tt(i);
          null !== s && s.nt(t, !1);
        }
        $v(t) {
          this.jv(t, i6, ij, this.ts().sc());
        }
        Hv(t, i) {
          let s = b(this.gv),
            e = s.Dt(),
            h = s.Ko();
          for (let s of h) this.jv(t, i, iq, s);
          for (let s of e) this.jv(t, i, iq, s);
          for (let s of h) this.jv(t, i, ij, s);
          for (let s of e) this.jv(t, i, ij, s);
        }
        jv(t, i, s, e) {
          let h = b(this.gv),
            l = h.Qt().Gu(),
            r = null !== l && l.Xo === e,
            n = null !== l && r && void 0 !== l.Zo ? l.Zo.Xn : void 0;
          i0(i, (i) => s(i, t, r, n), e, h);
        }
        kv() {
          if (null === this.gv) return;
          let t = this.gp,
            i = this.gv.Bo().N().visible,
            s = this.gv.Ao().N().visible;
          i ||
            null === this.hv ||
            (this.Sv.removeChild(this.hv.Of()), this.hv.m(), (this.hv = null)),
            s ||
              null === this.av ||
              (this.xv.removeChild(this.av.Of()), this.av.m(), (this.av = null));
          let e = t.Qt().Sc();
          i &&
            null === this.hv &&
            ((this.hv = new i3(this, t.N(), e, 'left')), this.Sv.appendChild(this.hv.Of())),
            s &&
              null === this.av &&
              ((this.av = new i3(this, t.N(), e, 'right')), this.xv.appendChild(this.av.Of()));
        }
        Kv(t) {
          return (t.Sf && this.fv) || null !== this.pv;
        }
        Xv(t) {
          return Math.max(0, Math.min(t, this.kp.width - 1));
        }
        Zv(t) {
          return Math.max(0, Math.min(t, this.kp.height - 1));
        }
        Rv(t, i, s) {
          this.ts().wc(this.Xv(t), this.Zv(i), s, b(this.gv));
        }
        zv() {
          this.ts().Mc();
        }
        Nv() {
          this.vv && ((this.pv = null), this.zv());
        }
        Ev(t, i, s) {
          (this.pv = t), (this.vv = !1), this.Rv(i.x, i.y, s);
          let e = this.ts().sc();
          this.mv = { x: e.si(), y: e.ni() };
        }
        ts() {
          return this.gp.Qt();
        }
        Av(t) {
          if (!this._v) return;
          let i = this.ts(),
            s = this.Xf();
          if ((i.Wo(s, s.Ps()), (this.ov = null), (this._v = !1), i.fc(), null !== this.wv)) {
            let t = performance.now(),
              s = i.At();
            this.wv.le(s._u(), t), this.wv.Mu(t) || i._n(this.wv);
          }
        }
        Tv() {
          this.pv = null;
        }
        Dv() {
          if (this.gv) {
            if (
              (this.ts().hn(),
              document.activeElement !== document.body &&
                document.activeElement !== document.documentElement)
            )
              b(document.activeElement).blur();
            else {
              let t = document.getSelection();
              null !== t && t.removeAllRanges();
            }
            this.gv.Ps().Ki() || this.ts().At().Ki();
          }
        }
        Bv(t) {
          if (null === this.gv) return;
          let i = this.ts(),
            s = i.At();
          if (s.Ki()) return;
          let e = this.gp.N(),
            h = e.handleScroll,
            l = e.kineticScroll;
          if ((!h.pressedMouseMove || t.Sf) && ((!h.horzTouchDrag && !h.vertTouchDrag) || !t.Sf))
            return;
          let r = this.gv.Ps(),
            n = performance.now();
          if (
            (null !== this.ov ||
              this.Kv(t) ||
              (this.ov = { x: t.clientX, y: t.clientY, Yc: n, Gv: t.localX, Jv: t.localY }),
            null !== this.ov && !this._v && (this.ov.x !== t.clientX || this.ov.y !== t.clientY))
          ) {
            if ((t.Sf && l.touch) || (!t.Sf && l.mouse)) {
              let t = s.lu();
              (this.wv = new iK(0.2 / t, 7 / t, 0.997, 15 / t)), this.wv.dp(s._u(), this.ov.Yc);
            } else this.wv = null;
            r.Ki() || i.Oo(this.gv, r, t.localY), i.cc(t.localX), (this._v = !0);
          }
          this._v &&
            (r.Ki() || i.No(this.gv, r, t.localY),
            i.dc(t.localX),
            null !== this.wv && this.wv.dp(s._u(), n));
        }
      }
      class i8 {
        constructor(t, i, s, e, h) {
          (this.xt = !0),
            (this.kp = (0, f.Ej)({ width: 0, height: 0 })),
            (this.Ip = () => this.Zp(3)),
            (this.Ep = 'left' === t),
            (this.Uu = s.Sc),
            (this.ys = i),
            (this.Qv = e),
            (this.tm = h),
            (this.Ef = document.createElement('div')),
            (this.Ef.style.width = '25px'),
            (this.Ef.style.height = '100%'),
            (this.Ef.style.overflow = 'hidden'),
            (this.Np = iH(this.Ef, (0, f.Ej)({ width: 16, height: 16 }))),
            this.Np.subscribeSuggestedBitmapSizeChanged(this.Ip);
        }
        m() {
          this.Np.unsubscribeSuggestedBitmapSizeChanged(this.Ip),
            iZ(this.Np.canvasElement),
            this.Np.dispose();
        }
        Of() {
          return this.Ef;
        }
        Nf() {
          return this.kp;
        }
        Kp(t) {
          (0, f.zE)(this.kp, t) ||
            ((this.kp = t),
            this.Np.resizeCanvasElement(t),
            (this.Ef.style.width = `${t.width}px`),
            (this.Ef.style.height = `${t.height}px`),
            (this.xt = !0));
        }
        Zp(t) {
          if ((t < 3 && !this.xt) || 0 === this.kp.width || 0 === this.kp.height) return;
          (this.xt = !1), this.Np.applySuggestedBitmapSize();
          let i = (0, f.vb)(this.Np, { colorSpace: this.ys.layout.colorSpace });
          null !== i &&
            i.useBitmapCoordinateSpace((t) => {
              this.Jp(t), this.Qp(t);
            });
        }
        Wf() {
          return this.Np.bitmapSize;
        }
        Ff(t, i, s) {
          let e = this.Wf();
          e.width > 0 && e.height > 0 && t.drawImage(this.Np.canvasElement, i, s);
        }
        Qp({ context: t, bitmapSize: i, horizontalPixelRatio: s, verticalPixelRatio: e }) {
          if (!this.Qv()) return;
          t.fillStyle = this.ys.timeScale.borderColor;
          let h = Math.floor(this.Uu.N().S * s),
            l = Math.floor(this.Uu.N().S * e),
            r = this.Ep ? i.width - h : 0;
          t.fillRect(r, 0, h, l);
        }
        Jp({ context: t, bitmapSize: i }) {
          X(t, 0, 0, i.width, i.height, this.tm());
        }
      }
      function st(t) {
        return (i) => i.ia?.(t) ?? [];
      }
      let si = st('normal'),
        ss = st('top'),
        se = st('bottom');
      class sh {
        constructor(t, i) {
          (this.im = null),
            (this.sm = null),
            (this.M = null),
            (this.nm = !1),
            (this.kp = (0, f.Ej)({ width: 0, height: 0 })),
            (this.rm = new y()),
            (this.Tp = new ta(5)),
            (this.Vp = !1),
            (this.Ip = () => {
              this.Vp || this.gp.Qt().ar();
            }),
            (this.Ap = () => {
              this.Vp || this.gp.Qt().ar();
            }),
            (this.gp = t),
            (this.i_ = i),
            (this.ys = t.N().layout),
            (this.pp = document.createElement('tr')),
            (this.hm = document.createElement('td')),
            (this.hm.style.padding = '0'),
            (this.am = document.createElement('td')),
            (this.am.style.padding = '0'),
            (this.Ef = document.createElement('td')),
            (this.Ef.style.height = '25px'),
            (this.Ef.style.padding = '0'),
            (this.lm = document.createElement('div')),
            (this.lm.style.width = '100%'),
            (this.lm.style.height = '100%'),
            (this.lm.style.position = 'relative'),
            (this.lm.style.overflow = 'hidden'),
            this.Ef.appendChild(this.lm),
            (this.Np = iH(this.lm, (0, f.Ej)({ width: 16, height: 16 }))),
            this.Np.subscribeSuggestedBitmapSizeChanged(this.Ip);
          let s = this.Np.canvasElement;
          (s.style.position = 'absolute'),
            (s.style.zIndex = '1'),
            (s.style.left = '0'),
            (s.style.top = '0'),
            (this.Wp = iH(this.lm, (0, f.Ej)({ width: 16, height: 16 }))),
            this.Wp.subscribeSuggestedBitmapSizeChanged(this.Ap);
          let e = this.Wp.canvasElement;
          (e.style.position = 'absolute'),
            (e.style.zIndex = '2'),
            (e.style.left = '0'),
            (e.style.top = '0'),
            this.pp.appendChild(this.hm),
            this.pp.appendChild(this.Ef),
            this.pp.appendChild(this.am),
            this.om(),
            this.gp.Qt().yo().i(this.om.bind(this), this),
            (this.Pf = new iL(this.Wp.canvasElement, this, {
              Xd: () => !0,
              Zd: () => !this.gp.N().handleScroll.horzTouchDrag,
            }));
        }
        m() {
          this.Pf.m(),
            null !== this.im && this.im.m(),
            null !== this.sm && this.sm.m(),
            this.Wp.unsubscribeSuggestedBitmapSizeChanged(this.Ap),
            iZ(this.Wp.canvasElement),
            this.Wp.dispose(),
            this.Np.unsubscribeSuggestedBitmapSizeChanged(this.Ip),
            iZ(this.Np.canvasElement),
            this.Np.dispose();
        }
        Of() {
          return this.pp;
        }
        _m() {
          return this.im;
        }
        um() {
          return this.sm;
        }
        _f(t) {
          if (this.nm) return;
          this.nm = !0;
          let i = this.gp.Qt();
          !i.At().Ki() && this.gp.N().handleScale.axisPressedMouseMove.time && i.oc(t.localX);
        }
        af(t) {
          this._f(t);
        }
        uf() {
          let t = this.gp.Qt();
          !t.At().Ki() &&
            this.nm &&
            ((this.nm = !1), this.gp.N().handleScale.axisPressedMouseMove.time && t.mc());
        }
        Qd(t) {
          let i = this.gp.Qt();
          !i.At().Ki() && this.gp.N().handleScale.axisPressedMouseMove.time && i.vc(t.localX);
        }
        Gd(t) {
          this.Qd(t);
        }
        nf() {
          this.nm = !1;
          let t = this.gp.Qt();
          (t.At().Ki() && !this.gp.N().handleScale.axisPressedMouseMove.time) || t.mc();
        }
        if() {
          this.nf();
        }
        Ld() {
          this.gp.N().handleScale.axisDoubleClickReset.time && this.gp.Qt().cn();
        }
        Bd() {
          this.Ld();
        }
        $d() {
          this.gp.Qt().N().handleScale.axisPressedMouseMove.time && this.ev(1);
        }
        Mf() {
          this.ev(0);
        }
        Nf() {
          return this.kp;
        }
        dm() {
          return this.rm;
        }
        fm(t, i, s) {
          (0, f.zE)(this.kp, t) ||
            ((this.kp = t),
            (this.Vp = !0),
            this.Np.resizeCanvasElement(t),
            this.Wp.resizeCanvasElement(t),
            (this.Vp = !1),
            (this.Ef.style.width = `${t.width}px`),
            (this.Ef.style.height = `${t.height}px`),
            this.rm.p(t)),
            null !== this.im && this.im.Kp((0, f.Ej)({ width: i, height: t.height })),
            null !== this.sm && this.sm.Kp((0, f.Ej)({ width: s, height: t.height }));
        }
        pm() {
          let t = this.vm();
          return Math.ceil(t.S + t.C + t.k + t.A + t.V + t.wm);
        }
        kt() {
          this.gp.Qt().At().Va();
        }
        Wf() {
          return this.Np.bitmapSize;
        }
        Ff(t, i, s) {
          let e = this.Wf();
          e.width > 0 && e.height > 0 && t.drawImage(this.Np.canvasElement, i, s);
        }
        Zp(t) {
          if (0 === t) return;
          let i = { colorSpace: this.ys.colorSpace };
          if (1 !== t) {
            this.Np.applySuggestedBitmapSize();
            let s = (0, f.vb)(this.Np, i);
            null !== s &&
              (s.useBitmapCoordinateSpace((t) => {
                this.Jp(t), this.Qp(t), this.gm(s, se);
              }),
              this.iv(s),
              this.gm(s, si)),
              null !== this.im && this.im.Zp(t),
              null !== this.sm && this.sm.Zp(t);
          }
          this.Wp.applySuggestedBitmapSize();
          let s = (0, f.vb)(this.Wp, i);
          null !== s &&
            (s.useBitmapCoordinateSpace(({ context: t, bitmapSize: i }) => {
              t.clearRect(0, 0, i.width, i.height);
            }),
            this.Mm([...this.gp.Qt().js(), this.gp.Qt().sc()], s),
            this.gm(s, ss));
        }
        gm(t, i) {
          let s = this.gp.Qt().js();
          for (let e of s) i0(i, (i) => iq(i, t, !1, void 0), e, void 0);
          for (let e of s) i0(i, (i) => ij(i, t, !1, void 0), e, void 0);
        }
        Jp({ context: t, bitmapSize: i }) {
          X(t, 0, 0, i.width, i.height, this.gp.Qt().Vc());
        }
        Qp({ context: t, bitmapSize: i, verticalPixelRatio: s }) {
          if (this.gp.N().timeScale.borderVisible) {
            t.fillStyle = this.bm();
            let e = Math.max(1, Math.floor(this.vm().S * s));
            t.fillRect(0, 0, i.width, e);
          }
        }
        iv(t) {
          let i = this.gp.Qt().At(),
            s = i.Va();
          if (!s || 0 === s.length) return;
          let e = this.i_.maxTickMarkWeight(s),
            h = this.vm(),
            l = i.N();
          l.borderVisible &&
            l.ticksVisible &&
            t.useBitmapCoordinateSpace(
              ({ context: t, horizontalPixelRatio: i, verticalPixelRatio: e }) => {
                (t.strokeStyle = this.bm()), (t.fillStyle = this.bm());
                let l = Math.max(1, Math.floor(i)),
                  r = Math.floor(0.5 * i);
                t.beginPath();
                let n = Math.round(h.C * e);
                for (let e = s.length; e--; ) {
                  let h = Math.round(s[e].coord * i);
                  t.rect(h - r, 0, l, n);
                }
                t.fill();
              }
            ),
            t.useMediaCoordinateSpace(({ context: t }) => {
              let i = h.S + h.C + h.A + h.k / 2;
              for (let h of ((t.textAlign = 'center'),
              (t.textBaseline = 'middle'),
              (t.fillStyle = this.H()),
              (t.font = this.Yp()),
              s))
                if (h.weight < e) {
                  let s = h.needAlignCoordinate ? this.Sm(t, h.coord, h.label) : h.coord;
                  t.fillText(h.label, s, i);
                }
              for (let h of (this.gp.N().timeScale.allowBoldLabels && (t.font = this.xm()), s))
                if (h.weight >= e) {
                  let s = h.needAlignCoordinate ? this.Sm(t, h.coord, h.label) : h.coord;
                  t.fillText(h.label, s, i);
                }
            });
        }
        Sm(t, i, s) {
          let e = this.Tp.Vi(t, s),
            h = Math.floor(i - e / 2) + 0.5;
          return (
            h < 0
              ? (i += Math.abs(0 - h))
              : h + e > this.kp.width && (i -= Math.abs(this.kp.width - (h + e))),
            i
          );
        }
        Mm(t, i) {
          let s = this.vm();
          for (let e of t) for (let t of e.cs()) t.Tt().nt(i, s);
        }
        bm() {
          return this.gp.N().timeScale.borderColor;
        }
        H() {
          return this.ys.textColor;
        }
        W() {
          return this.ys.fontSize;
        }
        Yp() {
          return T(this.W(), this.ys.fontFamily);
        }
        xm() {
          return T(this.W(), this.ys.fontFamily, 'bold');
        }
        vm() {
          null === this.M &&
            (this.M = {
              S: 1,
              L: NaN,
              A: NaN,
              V: NaN,
              Ji: NaN,
              C: 5,
              k: NaN,
              P: '',
              Gi: new ta(),
              wm: 0,
            });
          let t = this.M,
            i = this.Yp();
          if (t.P !== i) {
            let s = this.W();
            (t.k = s),
              (t.P = i),
              (t.A = (3 * s) / 12),
              (t.V = (3 * s) / 12),
              (t.Ji = (9 * s) / 12),
              (t.L = 0),
              (t.wm = (4 * s) / 12),
              t.Gi.In();
          }
          return this.M;
        }
        ev(t) {
          this.Ef.style.cursor = 1 === t ? 'ew-resize' : 'default';
        }
        om() {
          let t = this.gp.Qt(),
            i = t.N();
          i.leftPriceScale.visible ||
            null === this.im ||
            (this.hm.removeChild(this.im.Of()), this.im.m(), (this.im = null)),
            i.rightPriceScale.visible ||
              null === this.sm ||
              (this.am.removeChild(this.sm.Of()), this.sm.m(), (this.sm = null));
          let s = { Sc: this.gp.Qt().Sc() },
            e = () => i.leftPriceScale.borderVisible && t.At().N().borderVisible,
            h = () => t.Vc();
          i.leftPriceScale.visible &&
            null === this.im &&
            ((this.im = new i8('left', i, s, e, h)), this.hm.appendChild(this.im.Of())),
            i.rightPriceScale.visible &&
              null === this.sm &&
              ((this.sm = new i8('right', i, s, e, h)), this.am.appendChild(this.sm.Of()));
        }
      }
      let sl =
        !!iF &&
        !!navigator.userAgentData &&
        navigator.userAgentData.brands.some((t) => t.brand.includes('Chromium')) &&
        !!iF &&
        (navigator?.userAgentData?.platform
          ? 'Windows' === navigator.userAgentData.platform
          : navigator.userAgent.toLowerCase().indexOf('win') >= 0);
      class sr {
        constructor(t, i, s) {
          var e;
          (this.Cm = []),
            (this.ym = []),
            (this.km = 0),
            (this.tl = 0),
            (this.fo = 0),
            (this.Pm = 0),
            (this.Tm = 0),
            (this.Rm = null),
            (this.Dm = !1),
            (this.uv = new y()),
            (this.cv = new y()),
            (this.Wu = new y()),
            (this.Vm = null),
            (this.Im = null),
            (this.wp = t),
            (this.ys = i),
            (this.i_ = s),
            (this.pp = document.createElement('div')),
            this.pp.classList.add('tv-lightweight-charts'),
            (this.pp.style.overflow = 'hidden'),
            (this.pp.style.direction = 'ltr'),
            (this.pp.style.width = '100%'),
            (this.pp.style.height = '100%'),
            ((e = this.pp).style.userSelect = 'none'),
            (e.style.webkitUserSelect = 'none'),
            (e.style.msUserSelect = 'none'),
            (e.style.MozUserSelect = 'none'),
            (e.style.webkitTapHighlightColor = 'transparent'),
            (this.Bm = document.createElement('table')),
            this.Bm.setAttribute('cellspacing', '0'),
            this.pp.appendChild(this.Bm),
            (this.Am = this.Em.bind(this)),
            sn(this.ys) && this.zm(!0),
            (this.ts = new iy(this.Hu.bind(this), this.ys, s)),
            this.Qt().nc().i(this.Lm.bind(this), this),
            (this.Om = new sh(this, this.i_)),
            this.Bm.appendChild(this.Om.Of());
          let h = i.autoSize && this.Nm(),
            l = this.ys.width,
            r = this.ys.height;
          if (h || 0 === l || 0 === r) {
            let i = t.getBoundingClientRect();
            (l = l || i.width), (r = r || i.height);
          }
          this.Wm(l, r),
            this.Fm(),
            t.appendChild(this.pp),
            this.Hm(),
            this.ts.At().Cu().i(this.ts.Bh.bind(this.ts), this),
            this.ts.yo().i(this.ts.Bh.bind(this.ts), this);
        }
        Qt() {
          return this.ts;
        }
        N() {
          return this.ys;
        }
        If() {
          return this.Cm;
        }
        Um() {
          return this.Om;
        }
        m() {
          for (let t of (this.zm(!1),
          0 !== this.km && window.cancelAnimationFrame(this.km),
          this.ts.nc().u(this),
          this.ts.At().Cu().u(this),
          this.ts.yo().u(this),
          this.ts.m(),
          this.Cm))
            this.Bm.removeChild(t.Of()), t.Lv().u(this), t.Ov().u(this), t.m();
          for (let t of ((this.Cm = []), this.ym)) this.$m(t);
          (this.ym = []),
            b(this.Om).m(),
            null !== this.pp.parentElement && this.pp.parentElement.removeChild(this.pp),
            this.Wu.m(),
            this.uv.m(),
            this.cv.m(),
            this.qm();
        }
        Wm(t, i, s = !1) {
          if (this.tl === i && this.fo === t) return;
          let e = (function (t) {
            let i = Math.floor(t.width),
              s = Math.floor(t.height);
            return (0, f.Ej)({ width: i - (i % 2), height: s - (s % 2) });
          })((0, f.Ej)({ width: t, height: i }));
          (this.tl = e.height), (this.fo = e.width);
          let h = this.tl + 'px',
            l = this.fo + 'px';
          (b(this.pp).style.height = h),
            (b(this.pp).style.width = l),
            (this.Bm.style.height = h),
            (this.Bm.style.width = l),
            s ? this.Ym(te.gn(), performance.now()) : this.ts.Bh();
        }
        Zp(t) {
          void 0 === t && (t = te.gn());
          for (let i = 0; i < this.Cm.length; i++) this.Cm[i].Zp(t.en(i).tn);
          this.ys.timeScale.visible && this.Om.Zp(t.nn());
        }
        hr(t) {
          let i = sn(this.ys);
          this.ts.hr(t);
          let s = sn(this.ys);
          s !== i && this.zm(s), t.layout?.panes && this.jm(), this.Hm(), this.Km(t);
        }
        Lv() {
          return this.uv;
        }
        Ov() {
          return this.cv;
        }
        nc() {
          return this.Wu;
        }
        Xm() {
          null !== this.Rm && (this.Ym(this.Rm, performance.now()), (this.Rm = null));
          let t = this.Zm(null),
            i = document.createElement('canvas');
          (i.width = t.width), (i.height = t.height);
          let s = b(i.getContext('2d'));
          return this.Zm(s), i;
        }
        Gm(t) {
          return ('left' !== t || this.Jm()) && ('right' !== t || this.Qm()) && 0 !== this.Cm.length
            ? b('left' === t ? this.Cm[0].qv() : this.Cm[0].Yv()).Xp()
            : 0;
        }
        tw() {
          return this.ys.autoSize && null !== this.Vm;
        }
        Uf() {
          return this.pp;
        }
        iw(t) {
          (this.Im = t),
            this.Im
              ? this.Uf().style.setProperty('cursor', t)
              : this.Uf().style.removeProperty('cursor');
        }
        sw() {
          return this.Im;
        }
        nw(t) {
          return w(this.Cm[t]).Nf();
        }
        jm() {
          this.ym.forEach((t) => {
            t.kt();
          });
        }
        Km(t) {
          (void 0 !== t.autoSize || !this.Vm || (void 0 === t.width && void 0 === t.height)) &&
            (t.autoSize && !this.Vm && this.Nm(),
            !1 === t.autoSize && null !== this.Vm && this.qm(),
            t.autoSize ||
              (void 0 === t.width && void 0 === t.height) ||
              this.Wm(t.width || this.fo, t.height || this.tl));
        }
        Zm(t) {
          let i = 0,
            s = 0,
            e = this.Cm[0],
            h = (i, s) => {
              let e = 0;
              for (let h = 0; h < this.Cm.length; h++) {
                let l = this.Cm[h],
                  r = b('left' === i ? l.qv() : l.Yv()),
                  n = r.Wf();
                if ((null !== t && r.Ff(t, s, e), (e += n.height), h < this.Cm.length - 1)) {
                  let i = this.ym[h],
                    l = i.Wf();
                  null !== t && i.Ff(t, s, e), (e += l.height);
                }
              }
            };
          this.Jm() && (h('left', 0), (i += b(e.qv()).Wf().width));
          for (let e = 0; e < this.Cm.length; e++) {
            let h = this.Cm[e],
              l = h.Wf();
            if ((null !== t && h.Ff(t, i, s), (s += l.height), e < this.Cm.length - 1)) {
              let h = this.ym[e],
                l = h.Wf();
              null !== t && h.Ff(t, i, s), (s += l.height);
            }
          }
          (i += e.Wf().width), this.Qm() && (h('right', i), (i += b(e.Yv()).Wf().width));
          let l = (i, s, e) => {
            b('left' === i ? this.Om._m() : this.Om.um()).Ff(b(t), s, e);
          };
          if (this.ys.timeScale.visible) {
            let i = this.Om.Wf();
            if (null !== t) {
              let h = 0;
              this.Jm() && (l('left', h, s), (h = b(e.qv()).Wf().width)),
                this.Om.Ff(t, h, s),
                (h += i.width),
                this.Qm() && l('right', h, s);
            }
            s += i.height;
          }
          return (0, f.Ej)({ width: i, height: s });
        }
        ew() {
          var t, i, s;
          let e = 0,
            h = 0,
            l = 0;
          for (let t of this.Cm)
            this.Jm() && (h = Math.max(h, b(t.qv()).qp(), this.ys.leftPriceScale.minimumWidth)),
              this.Qm() && (l = Math.max(l, b(t.Yv()).qp(), this.ys.rightPriceScale.minimumWidth)),
              (e += t.ko());
          (h = (i = h) + (i % 2)), (l = (s = l) + (s % 2));
          let r = this.fo,
            n = this.tl,
            o = Math.max(r - h - l, 0),
            a = +this.ym.length,
            u = this.ys.timeScale.visible,
            c = u ? Math.max(this.Om.pm(), this.ys.timeScale.minimumHeight) : 0,
            d = a + (c = (t = c) + (t % 2)),
            p = n < d ? 0 : n - d,
            m = p / e,
            g = 0,
            v = window.devicePixelRatio || 1;
          for (let t = 0; t < this.Cm.length; ++t) {
            let i = this.Cm[t];
            i.yv(this.ts.$s()[t]);
            let s = 0,
              e = 0;
            (s = Math.max(
              t === this.Cm.length - 1
                ? Math.ceil((p - g) * v) / v
                : Math.round(i.ko() * m * v) / v,
              2
            )),
              (g += s),
              i.Kp((0, f.Ej)({ width: o, height: s })),
              this.Jm() && i.Wv(h, 'left'),
              this.Qm() && i.Wv(l, 'right'),
              i.Xf() && this.ts.ec(i.Xf(), s);
          }
          this.Om.fm((0, f.Ej)({ width: u ? o : 0, height: c }), u ? h : 0, u ? l : 0),
            this.ts.To(o),
            this.Pm !== h && (this.Pm = h),
            this.Tm !== l && (this.Tm = l);
        }
        zm(t) {
          t
            ? this.pp.addEventListener('wheel', this.Am, { passive: !1 })
            : this.pp.removeEventListener('wheel', this.Am);
        }
        rw(t) {
          switch (t.deltaMode) {
            case t.DOM_DELTA_PAGE:
              return 120;
            case t.DOM_DELTA_LINE:
              return 32;
          }
          return sl ? 1 / window.devicePixelRatio : 1;
        }
        Em(t) {
          if (
            !(
              (0 !== t.deltaX && this.ys.handleScroll.mouseWheel) ||
              (0 !== t.deltaY && this.ys.handleScale.mouseWheel)
            )
          )
            return;
          let i = this.rw(t),
            s = (i * t.deltaX) / 100,
            e = (-i * t.deltaY) / 100;
          if ((t.cancelable && t.preventDefault(), 0 !== e && this.ys.handleScale.mouseWheel)) {
            let i = Math.sign(e) * Math.min(1, Math.abs(e)),
              s = t.clientX - this.pp.getBoundingClientRect().left;
            this.Qt()._c(s, i);
          }
          0 !== s && this.ys.handleScroll.mouseWheel && this.Qt().uc(-80 * s);
        }
        Ym(t, i) {
          let s = t.nn();
          3 === s && this.hw(),
            (3 !== s && 2 !== s) ||
              (this.aw(t),
              this.lw(t, i),
              this.Om.kt(),
              this.Cm.forEach((t) => {
                t.Pv();
              }),
              3 === this.Rm?.nn() &&
                (this.Rm.vn(t),
                this.hw(),
                this.aw(this.Rm),
                this.lw(this.Rm, i),
                (t = this.Rm),
                (this.Rm = null))),
            this.Zp(t);
        }
        lw(t, i) {
          for (let s of t.pn()) this.mn(s, i);
        }
        aw(t) {
          let i = this.ts.$s();
          for (let s = 0; s < i.length; s++) t.en(s).sn && i[s].Uo();
        }
        mn(t, i) {
          let s = this.ts.At();
          switch (t.an) {
            case 0:
              s.ku();
              break;
            case 1:
              s.Pu(t.Ft);
              break;
            case 2:
              s.dn(t.Ft);
              break;
            case 3:
              s.fn(t.Ft);
              break;
            case 4:
              s.du();
              break;
            case 5:
              t.Ft.Mu(i) || s.fn(t.Ft.bu(i));
          }
        }
        Hu(t) {
          null !== this.Rm ? this.Rm.vn(t) : (this.Rm = t),
            this.Dm ||
              ((this.Dm = !0),
              (this.km = window.requestAnimationFrame((t) => {
                if (((this.Dm = !1), (this.km = 0), null !== this.Rm)) {
                  let i = this.Rm;
                  for (let s of ((this.Rm = null), this.Ym(i, t), i.pn()))
                    if (5 === s.an && !s.Ft.Mu(t)) {
                      this.Qt()._n(s.Ft);
                      break;
                    }
                }
              })));
        }
        hw() {
          this.Fm();
        }
        $m(t) {
          this.Bm.removeChild(t.Of()), t.m();
        }
        Fm() {
          let t = this.ts.$s(),
            i = t.length,
            s = this.Cm.length;
          for (let t = i; t < s; t++) {
            let t = w(this.Cm.pop());
            this.Bm.removeChild(t.Of()), t.Lv().u(this), t.Ov().u(this), t.m();
            let i = this.ym.pop();
            void 0 !== i && this.$m(i);
          }
          for (let e = s; e < i; e++) {
            let i = new i7(this, t[e]);
            if (
              (i.Lv().i(this.ow.bind(this, i), this),
              i.Ov().i(this._w.bind(this, i), this),
              this.Cm.push(i),
              e > 0)
            ) {
              let t = new i$(this, e - 1, e);
              this.ym.push(t), this.Bm.insertBefore(t.Of(), this.Om.Of());
            }
            this.Bm.insertBefore(i.Of(), this.Om.Of());
          }
          for (let s = 0; s < i; s++) {
            let i = t[s],
              e = this.Cm[s];
            e.Xf() !== i ? e.yv(i) : e.Cv();
          }
          this.Hm(), this.ew();
        }
        uw(t, i, s, e) {
          let h;
          let l = new Map();
          if (
            (null !== t &&
              this.ts.js().forEach((i) => {
                let s = i.Xs().Wr(t);
                null !== s && l.set(i, s);
              }),
            null !== t)
          ) {
            let i = this.ts.At().ss(t)?.originalTime;
            void 0 !== i && (h = i);
          }
          let r = this.Qt().Gu(),
            n = null !== r && r.Xo instanceof tG ? r.Xo : void 0,
            o = null !== r && void 0 !== r.Zo ? r.Zo.Kn : void 0,
            a = this.cw(e);
          return {
            dw: h,
            Re: t ?? void 0,
            fw: i ?? void 0,
            pw: -1 !== a ? a : void 0,
            mw: n,
            ww: l,
            gw: o,
            Mw: s ?? void 0,
          };
        }
        cw(t) {
          let i = -1;
          if (t) i = this.Cm.indexOf(t);
          else {
            let t = this.Qt().sc().Us();
            null !== t && (i = this.Qt().$s().indexOf(t));
          }
          return i;
        }
        ow(t, i, s, e) {
          this.uv.p(() => this.uw(i, s, e, t));
        }
        _w(t, i, s, e) {
          this.cv.p(() => this.uw(i, s, e, t));
        }
        Lm(t, i, s) {
          this.iw(this.Qt().Gu()?.Jo ?? null), this.Wu.p(() => this.uw(t, i, s));
        }
        Hm() {
          let t = this.ys.timeScale.visible ? '' : 'none';
          this.Om.Of().style.display = t;
        }
        Jm() {
          return this.Cm[0].Xf().Bo().N().visible;
        }
        Qm() {
          return this.Cm[0].Xf().Ao().N().visible;
        }
        Nm() {
          return (
            'ResizeObserver' in window &&
            ((this.Vm = new ResizeObserver((t) => {
              let i = t[t.length - 1];
              i && this.Wm(i.contentRect.width, i.contentRect.height);
            })),
            this.Vm.observe(this.wp, { box: 'border-box' }),
            !0)
          );
        }
        qm() {
          null !== this.Vm && this.Vm.disconnect(), (this.Vm = null);
        }
      }
      function sn(t) {
        return !!(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
      }
      function so(t) {
        return void 0 === t.open && void 0 === t.value;
      }
      function sa(t) {
        return void 0 !== t.open || void 0 !== t.value;
      }
      function su(t, i, s, e) {
        let h = s.value,
          l = { Re: i, wt: t, Ft: [h, h, h, h], dw: e };
        return void 0 !== s.color && (l.R = s.color), l;
      }
      function sc(t, i, s, e) {
        let h = s.value,
          l = { Re: i, wt: t, Ft: [h, h, h, h], dw: e };
        return (
          void 0 !== s.lineColor && (l.vt = s.lineColor),
          void 0 !== s.topColor && (l.mr = s.topColor),
          void 0 !== s.bottomColor && (l.wr = s.bottomColor),
          l
        );
      }
      function sd(t, i, s, e) {
        let h = s.value,
          l = { Re: i, wt: t, Ft: [h, h, h, h], dw: e };
        return (
          void 0 !== s.topLineColor && (l.gr = s.topLineColor),
          void 0 !== s.bottomLineColor && (l.Mr = s.bottomLineColor),
          void 0 !== s.topFillColor1 && (l.br = s.topFillColor1),
          void 0 !== s.topFillColor2 && (l.Sr = s.topFillColor2),
          void 0 !== s.bottomFillColor1 && (l.Cr = s.bottomFillColor1),
          void 0 !== s.bottomFillColor2 && (l.yr = s.bottomFillColor2),
          l
        );
      }
      function sf(t, i, s, e) {
        let h = { Re: i, wt: t, Ft: [s.open, s.high, s.low, s.close], dw: e };
        return void 0 !== s.color && (h.R = s.color), h;
      }
      function sp(t, i, s, e) {
        let h = { Re: i, wt: t, Ft: [s.open, s.high, s.low, s.close], dw: e };
        return (
          void 0 !== s.color && (h.R = s.color),
          void 0 !== s.borderColor && (h.Ht = s.borderColor),
          void 0 !== s.wickColor && (h.vr = s.wickColor),
          h
        );
      }
      function sm(t, i, s, e, h) {
        let l = w(h)(s),
          r = Math.max(...l),
          n = Math.min(...l),
          o = l[l.length - 1],
          { time: a, color: u, ...c } = s;
        return { Re: i, wt: t, Ft: [o, r, n, o], dw: e, se: c, R: u };
      }
      function sg(t) {
        return void 0 !== t.Ft;
      }
      function sv(t, i) {
        return void 0 !== i.customValues && (t.bw = i.customValues), t;
      }
      function sw(t) {
        return (i, s, e, h, l, r) =>
          (r ? r(e) : so(e)) ? sv({ wt: i, Re: s, dw: h }, e) : sv(t(i, s, e, h, l), e);
      }
      function sb(t) {
        return {
          Candlestick: sw(sp),
          Bar: sw(sf),
          Area: sw(sc),
          Baseline: sw(sd),
          Histogram: sw(su),
          Line: sw(su),
          Custom: sw(sm),
        }[t];
      }
      function sM(t) {
        return { Re: 0, Sw: new Map(), Hh: t };
      }
      function sy(t, i) {
        if (void 0 !== t && 0 !== t.length)
          return { xw: i.key(t[0].wt), Cw: i.key(t[t.length - 1].wt) };
      }
      function sx(t) {
        let i;
        return (
          t.forEach((t) => {
            void 0 === i && (i = t.dw);
          }),
          w(i)
        );
      }
      class s_ {
        constructor(t) {
          (this.yw = new Map()),
            (this.kw = new Map()),
            (this.Pw = new Map()),
            (this.Tw = []),
            (this.i_ = t);
        }
        m() {
          this.yw.clear(), this.kw.clear(), this.Pw.clear(), (this.Tw = []);
        }
        Rw(t, i) {
          let s = 0 !== this.yw.size,
            e = !1,
            h = this.kw.get(t);
          if (void 0 !== h) {
            if (1 === this.kw.size) (s = !1), (e = !0), this.yw.clear();
            else for (let i of this.Tw) i.pointData.Sw.delete(t) && (e = !0);
          }
          let l = [];
          if (0 !== i.length) {
            let s = i.map((t) => t.time),
              h = this.i_.createConverterToInternalObj(i),
              r = sb(t.Rr()),
              n = t.da(),
              o = t.pa();
            l = i.map((i, l) => {
              let a = h(i.time),
                u = this.i_.key(a),
                c = this.yw.get(u);
              void 0 === c && ((c = sM(a)), this.yw.set(u, c), (e = !0));
              let d = r(a, c.Re, i, s[l], n, o);
              return c.Sw.set(t, d), d;
            });
          }
          s && this.Dw(), this.Vw(t, l);
          let r = -1;
          if (e) {
            let t = [];
            this.yw.forEach((i) => {
              t.push({ timeWeight: 0, time: i.Hh, pointData: i, originalTime: sx(i.Sw) });
            }),
              t.sort((t, i) => this.i_.key(t.time) - this.i_.key(i.time)),
              (r = this.Iw(t));
          }
          return this.Bw(
            t,
            r,
            (function (t, i, s) {
              let e = sy(t, s),
                h = sy(i, s);
              if (void 0 !== e && void 0 !== h) return { Aw: !1, zh: e.Cw >= h.Cw && e.xw >= h.xw };
            })(this.kw.get(t), h, this.i_)
          );
        }
        yc(t) {
          return this.Rw(t, []);
        }
        Ew(t, i, s) {
          void 0 === i.dw && (i.dw = i.time), this.i_.preprocessData(i);
          let e = this.i_.createConverterToInternalObj([i])(i.time),
            h = this.Pw.get(t);
          if (!s && void 0 !== h && this.i_.key(e) < this.i_.key(h))
            throw Error(`Cannot update oldest data, last time=${h}, new time=${e}`);
          let l = this.yw.get(this.i_.key(e));
          if (s && void 0 === l)
            throw Error('Cannot update non-existing data point when historicalUpdate is true');
          let r = void 0 === l;
          void 0 === l && ((l = sM(e)), this.yw.set(this.i_.key(e), l));
          let n = sb(t.Rr()),
            o = t.da(),
            a = t.pa(),
            u = n(e, l.Re, i, i.dw, o, a);
          l.Sw.set(t, u), s ? this.zw(t, u, l.Re) : this.Lw(t, u);
          let c = { zh: sg(u), Aw: s };
          if (!r) return this.Bw(t, -1, c);
          let d = { timeWeight: 0, time: l.Hh, pointData: l, originalTime: sx(l.Sw) },
            f = tR(this.Tw, this.i_.key(d.time), (t, i) => this.i_.key(t.time) < i);
          this.Tw.splice(f, 0, d);
          for (let t = f; t < this.Tw.length; ++t) sS(this.Tw[t].pointData, t);
          return this.i_.fillWeightsForPoints(this.Tw, f), this.Bw(t, f, c);
        }
        Lw(t, i) {
          let s = this.kw.get(t);
          void 0 === s && ((s = []), this.kw.set(t, s));
          let e = 0 !== s.length ? s[s.length - 1] : null;
          null === e || this.i_.key(i.wt) > this.i_.key(e.wt)
            ? sg(i) && s.push(i)
            : sg(i)
              ? (s[s.length - 1] = i)
              : s.splice(-1, 1),
            this.Pw.set(t, i.wt);
        }
        zw(t, i, s) {
          let e = this.kw.get(t);
          if (void 0 === e) return;
          let h = tR(e, s, (t, i) => t.Re < i);
          sg(i) ? (e[h] = i) : e.splice(h, 1);
        }
        Vw(t, i) {
          0 !== i.length
            ? (this.kw.set(t, i.filter(sg)), this.Pw.set(t, i[i.length - 1].wt))
            : (this.kw.delete(t), this.Pw.delete(t));
        }
        Dw() {
          for (let t of this.Tw) 0 === t.pointData.Sw.size && this.yw.delete(this.i_.key(t.time));
        }
        Iw(t) {
          let i = -1;
          for (let s = 0; s < this.Tw.length && s < t.length; ++s) {
            let e = this.Tw[s],
              h = t[s];
            if (this.i_.key(e.time) !== this.i_.key(h.time)) {
              i = s;
              break;
            }
            (h.timeWeight = e.timeWeight), sS(h.pointData, s);
          }
          if (
            (-1 === i && this.Tw.length !== t.length && (i = Math.min(this.Tw.length, t.length)),
            -1 === i)
          )
            return -1;
          for (let s = i; s < t.length; ++s) sS(t[s].pointData, s);
          return this.i_.fillWeightsForPoints(t, i), (this.Tw = t), i;
        }
        Ow() {
          if (0 === this.kw.size) return null;
          let t = 0;
          return (
            this.kw.forEach((i) => {
              0 !== i.length && (t = Math.max(t, i[i.length - 1].Re));
            }),
            t
          );
        }
        Bw(t, i, s) {
          let e = { Do: new Map(), At: { iu: this.Ow() } };
          if (-1 !== i)
            this.kw.forEach((i, h) => {
              e.Do.set(h, { se: i, Nw: h === t ? s : void 0 });
            }),
              this.kw.has(t) || e.Do.set(t, { se: [], Nw: s }),
              (e.At.Ww = this.Tw),
              (e.At.Fw = i);
          else {
            let i = this.kw.get(t);
            e.Do.set(t, { se: i || [], Nw: s });
          }
          return e;
        }
      }
      function sS(t, i) {
        (t.Re = i),
          t.Sw.forEach((t) => {
            t.Re = i;
          });
      }
      function sC(t, i) {
        return t.wt < i;
      }
      function sk(t, i) {
        return i < t.wt;
      }
      function sN(t, i, s) {
        let e = i.Uh(),
          h = i.bi(),
          l = tR(t, e, sC),
          r = tT(t, h, sk);
        if (!s) return { from: l, to: r };
        let n = l,
          o = r;
        return (
          l > 0 && l < t.length && t[l].wt >= e && (n = l - 1),
          r > 0 && r < t.length && t[r - 1].wt <= h && (o = r + 1),
          { from: n, to: o }
        );
      }
      class sY {
        constructor(t, i, s) {
          (this.Hw = !0),
            (this.Uw = !0),
            (this.$w = !0),
            (this.qw = []),
            (this.Yw = null),
            (this.Jn = t),
            (this.Qn = i),
            (this.jw = s);
        }
        kt(t) {
          (this.Hw = !0), 'data' === t && (this.Uw = !0), 'options' === t && (this.$w = !0);
        }
        Tt() {
          return this.Jn.Vt() ? (this.Kw(), null === this.Yw ? null : this.Xw) : null;
        }
        Zw() {
          this.qw = this.qw.map((t) => ({ ...t, ...this.Jn.Rh().Dr(t.wt) }));
        }
        Gw() {
          this.Yw = null;
        }
        Kw() {
          this.Uw && (this.Jw(), (this.Uw = !1)),
            this.$w && (this.Zw(), (this.$w = !1)),
            this.Hw && (this.Qw(), (this.Hw = !1));
        }
        Qw() {
          let t = this.Jn.Wt(),
            i = this.Qn.At();
          if ((this.Gw(), i.Ki() || t.Ki())) return;
          let s = i.ye();
          if (null === s || 0 === this.Jn.Xs().zr()) return;
          let e = this.Jn.zt();
          null !== e && ((this.Yw = sN(this.qw, s, this.jw)), this.tg(t, i, e.Ft), this.ig());
        }
      }
      class sz {
        constructor(t, i) {
          (this.sg = t), (this.Yi = i);
        }
        nt(t, i, s) {
          this.sg.draw(t, this.Yi, i, s);
        }
      }
      class sR extends sY {
        constructor(t, i, s) {
          super(t, i, !1),
            (this.sh = s),
            (this.Xw = new sz(this.sh.renderer(), (i) => {
              let s = t.zt();
              return null === s ? null : t.Wt().Nt(i, s.Ft);
            }));
        }
        fa(t) {
          return this.sh.priceValueBuilder(t);
        }
        va(t) {
          return this.sh.isWhitespace(t);
        }
        Jw() {
          let t = this.Jn.Rh();
          this.qw = this.Jn.Xs()
            .Hr()
            .map((i) => ({ wt: i.Re, _t: NaN, ...t.Dr(i.Re), ng: i.se }));
        }
        tg(t, i) {
          i.su(this.qw, z(this.Yw));
        }
        ig() {
          this.sh.update(
            { bars: this.qw.map(sT), barSpacing: this.Qn.At().lu(), visibleRange: this.Yw },
            this.Jn.N()
          );
        }
      }
      function sT(t) {
        return { x: t._t, time: t.wt, originalData: t.ng, barColor: t.cr };
      }
      let sE = { color: '#2196f3' },
        sP = (t, i, s) => new sR(t, i, M(s));
      function sV(t) {
        let i = { value: t.Ft[3], time: t.dw };
        return void 0 !== t.bw && (i.customValues = t.bw), i;
      }
      function sD(t) {
        let i = sV(t);
        return void 0 !== t.R && (i.color = t.R), i;
      }
      function sW(t) {
        let i = sV(t);
        return (
          void 0 !== t.vt && (i.lineColor = t.vt),
          void 0 !== t.mr && (i.topColor = t.mr),
          void 0 !== t.wr && (i.bottomColor = t.wr),
          i
        );
      }
      function sF(t) {
        let i = sV(t);
        return (
          void 0 !== t.gr && (i.topLineColor = t.gr),
          void 0 !== t.Mr && (i.bottomLineColor = t.Mr),
          void 0 !== t.br && (i.topFillColor1 = t.br),
          void 0 !== t.Sr && (i.topFillColor2 = t.Sr),
          void 0 !== t.Cr && (i.bottomFillColor1 = t.Cr),
          void 0 !== t.yr && (i.bottomFillColor2 = t.yr),
          i
        );
      }
      function sB(t) {
        let i = { open: t.Ft[0], high: t.Ft[1], low: t.Ft[2], close: t.Ft[3], time: t.dw };
        return void 0 !== t.bw && (i.customValues = t.bw), i;
      }
      function sA(t) {
        let i = sB(t);
        return void 0 !== t.R && (i.color = t.R), i;
      }
      function sL(t) {
        let i = sB(t),
          { R: s, Ht: e, vr: h } = t;
        return (
          void 0 !== s && (i.color = s),
          void 0 !== e && (i.borderColor = e),
          void 0 !== h && (i.wickColor = h),
          i
        );
      }
      function sO(t) {
        return {
          Area: sW,
          Line: sD,
          Baseline: sF,
          Histogram: sD,
          Bar: sA,
          Candlestick: sL,
          Custom: sI,
        }[t];
      }
      function sI(t) {
        let i = t.dw;
        return { ...t.se, time: i };
      }
      let sQ = {
          vertLine: {
            color: '#9598A1',
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: '#131722',
          },
          horzLine: {
            color: '#9598A1',
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: '#131722',
          },
          mode: 1,
        },
        sX = {
          vertLines: { color: '#D6DCDE', style: 0, visible: !0 },
          horzLines: { color: '#D6DCDE', style: 0, visible: !0 },
        },
        sJ = {
          background: { type: 'solid', color: '#FFFFFF' },
          textColor: '#191919',
          fontSize: 12,
          fontFamily: R,
          panes: {
            enableResize: !0,
            separatorColor: '#E0E3EB',
            separatorHoverColor: 'rgba(178, 181, 189, 0.2)',
          },
          attributionLogo: !0,
          colorSpace: 'srgb',
          colorParsers: [],
        },
        s$ = {
          autoScale: !0,
          mode: 0,
          invertScale: !1,
          alignLabels: !0,
          borderVisible: !0,
          borderColor: '#2B2B43',
          entireTextOnly: !1,
          visible: !1,
          ticksVisible: !1,
          scaleMargins: { bottom: 0.1, top: 0.2 },
          minimumWidth: 0,
          ensureEdgeTickMarksVisible: !1,
        },
        sU = {
          rightOffset: 0,
          barSpacing: 6,
          minBarSpacing: 0.5,
          maxBarSpacing: 0,
          fixLeftEdge: !1,
          fixRightEdge: !1,
          lockVisibleTimeRangeOnResize: !1,
          rightBarStaysOnScroll: !1,
          borderVisible: !0,
          borderColor: '#2B2B43',
          visible: !0,
          timeVisible: !1,
          secondsVisible: !0,
          shiftVisibleRangeOnNewBar: !0,
          allowShiftVisibleRangeOnWhitespaceReplacement: !1,
          ticksVisible: !1,
          uniformDistribution: !1,
          minimumHeight: 0,
          allowBoldLabels: !0,
          ignoreWhitespaceIndices: !1,
        };
      function sK() {
        return {
          width: 0,
          height: 0,
          autoSize: !1,
          layout: sJ,
          crosshair: sQ,
          grid: sX,
          overlayPriceScales: { ...s$ },
          leftPriceScale: { ...s$, visible: !1 },
          rightPriceScale: { ...s$, visible: !0 },
          timeScale: sU,
          localization: { locale: iF ? navigator.language : '', dateFormat: "dd MMM 'yy" },
          handleScroll: {
            mouseWheel: !0,
            pressedMouseMove: !0,
            horzTouchDrag: !0,
            vertTouchDrag: !0,
          },
          handleScale: {
            axisPressedMouseMove: { time: !0, price: !0 },
            axisDoubleClickReset: { time: !0, price: !0 },
            mouseWheel: !0,
            pinch: !0,
          },
          kineticScroll: { mouse: !1, touch: !0 },
          trackingMode: { exitMode: 1 },
        };
      }
      class sG {
        constructor(t, i, s) {
          (this.Df = t), (this.eg = i), (this.rg = s ?? 0);
        }
        applyOptions(t) {
          this.Df.Qt().Qu(this.eg, t, this.rg);
        }
        options() {
          return this.Yi().N();
        }
        width() {
          return ts(this.eg) ? this.Df.Gm(this.eg) : 0;
        }
        setVisibleRange(t) {
          this.setAutoScale(!1), this.Yi().Nl(new ty(t.from, t.to));
        }
        getVisibleRange() {
          let t = this.Yi().Qe();
          return null === t ? null : { from: t.$e(), to: t.qe() };
        }
        setAutoScale(t) {
          this.applyOptions({ autoScale: t });
        }
        Yi() {
          return b(this.Df.Qt().tc(this.eg, this.rg)).Wt;
        }
      }
      class sH {
        constructor(t, i, s, e) {
          (this.Df = t), (this.yt = s), (this.hg = i), (this.ag = e);
        }
        getHeight() {
          return this.yt.$t();
        }
        setHeight(t) {
          let i = this.Df.Qt(),
            s = i.Bc(this.yt);
          i.hc(s, t);
        }
        paneIndex() {
          return this.Df.Qt().Bc(this.yt);
        }
        moveTo(t) {
          let i = this.paneIndex();
          i !== t &&
            (v(t >= 0 && t < this.Df.If().length, 'Invalid pane index'), this.Df.Qt().ac(i, t));
        }
        getSeries() {
          return this.yt.Do().map((t) => this.hg(t)) ?? [];
        }
        getHTMLElement() {
          return this.Df.If()[this.paneIndex()].Of();
        }
        attachPrimitive(t) {
          this.yt.ua(t),
            t.attached && t.attached({ chart: this.ag, requestUpdate: () => this.yt.Qt().Bh() });
        }
        detachPrimitive(t) {
          this.yt.ca(t);
        }
        priceScale(t) {
          if (null === this.yt.Co(t)) throw Error(`Cannot find price scale with id: ${t}`);
          return new sG(this.Df, t, this.paneIndex());
        }
      }
      let sZ = {
        color: '#FF0000',
        price: 0,
        lineStyle: 2,
        lineWidth: 1,
        lineVisible: !0,
        axisLabelVisible: !0,
        title: '',
        axisLabelColor: '',
        axisLabelTextColor: '',
      };
      class sq {
        constructor(t) {
          this.ir = t;
        }
        applyOptions(t) {
          this.ir.hr(t);
        }
        options() {
          return this.ir.N();
        }
        lg() {
          return this.ir;
        }
      }
      class sj {
        constructor(t, i, s, e, h, l) {
          (this.og = new y()),
            (this.Jn = t),
            (this._g = i),
            (this.ug = s),
            (this.i_ = h),
            (this.ag = e),
            (this.cg = l);
        }
        m() {
          this.og.m();
        }
        priceFormatter() {
          return this.Jn.ra();
        }
        priceToCoordinate(t) {
          let i = this.Jn.zt();
          return null === i ? null : this.Jn.Wt().Nt(t, i.Ft);
        }
        coordinateToPrice(t) {
          let i = this.Jn.zt();
          return null === i ? null : this.Jn.Wt().Ts(t, i.Ft);
        }
        barsInLogicalRange(t) {
          if (null === t) return null;
          let i = new iw(new im(t.from, t.to)).w_(),
            s = this.Jn.Xs();
          if (s.Ki()) return null;
          let e = s.Wr(i.Uh(), 1),
            h = s.Wr(i.bi(), -1),
            l = b(s.Lr()),
            r = b(s.Ks());
          if (null !== e && null !== h && e.Re > h.Re)
            return { barsBefore: t.from - l, barsAfter: r - t.to };
          let n = {
            barsBefore: null === e || e.Re === l ? t.from - l : e.Re - l,
            barsAfter: null === h || h.Re === r ? r - t.to : r - h.Re,
          };
          return null !== e && null !== h && ((n.from = e.dw), (n.to = h.dw)), n;
        }
        setData(t) {
          this.i_, this.Jn.Rr(), this._g.dg(this.Jn, t), this.fg('full');
        }
        update(t, i = !1) {
          this.Jn.Rr(), this._g.pg(this.Jn, t, i), this.fg('update');
        }
        dataByIndex(t, i) {
          let s = this.Jn.Xs().Wr(t, i);
          return null === s ? null : sO(this.seriesType())(s);
        }
        data() {
          let t = sO(this.seriesType());
          return this.Jn.Xs()
            .Hr()
            .map((i) => t(i));
        }
        subscribeDataChanged(t) {
          this.og.i(t);
        }
        unsubscribeDataChanged(t) {
          this.og._(t);
        }
        applyOptions(t) {
          this.Jn.hr(t);
        }
        options() {
          return N(this.Jn.N());
        }
        priceScale() {
          return this.ug.priceScale(this.Jn.Wt().wa(), this.getPane().paneIndex());
        }
        createPriceLine(t) {
          let i = x(N(sZ), t);
          return new sq(this.Jn.Oh(i));
        }
        removePriceLine(t) {
          this.Jn.Nh(t.lg());
        }
        priceLines() {
          return this.Jn.Wh().map((t) => new sq(t));
        }
        seriesType() {
          return this.Jn.Rr();
        }
        attachPrimitive(t) {
          this.Jn.ua(t),
            t.attached &&
              t.attached({
                chart: this.ag,
                series: this,
                requestUpdate: () => this.Jn.Qt().Bh(),
                horzScaleBehavior: this.i_,
              });
        }
        detachPrimitive(t) {
          this.Jn.ca(t), t.detached && t.detached(), this.Jn.Qt().Bh();
        }
        getPane() {
          let t = this.Jn,
            i = b(this.Jn.Qt().Hn(t));
          return this.cg(i);
        }
        moveToPane(t) {
          this.Jn.Qt().Rc(this.Jn, t);
        }
        seriesOrder() {
          let t = this.Jn.Qt().Hn(this.Jn);
          return null === t ? -1 : t.Do().indexOf(this.Jn);
        }
        setSeriesOrder(t) {
          let i = this.Jn.Qt().Hn(this.Jn);
          null !== i && i.qo(this.Jn, t);
        }
        fg(t) {
          this.og.v() && this.og.p(t);
        }
      }
      class s0 {
        constructor(t, i, s) {
          (this.vg = new y()),
            (this.T_ = new y()),
            (this.rm = new y()),
            (this.ts = t),
            (this.uh = t.At()),
            (this.Om = i),
            this.uh.Su().i(this.mg.bind(this)),
            this.uh.xu().i(this.wg.bind(this)),
            this.Om.dm().i(this.gg.bind(this)),
            (this.i_ = s);
        }
        m() {
          this.uh.Su().u(this),
            this.uh.xu().u(this),
            this.Om.dm().u(this),
            this.vg.m(),
            this.T_.m(),
            this.rm.m();
        }
        scrollPosition() {
          return this.uh._u();
        }
        scrollToPosition(t, i) {
          i ? this.uh.gu(t, 1e3) : this.ts.fn(t);
        }
        scrollToRealTime() {
          this.uh.wu();
        }
        getVisibleRange() {
          let t = this.uh.K_();
          return null === t ? null : { from: t.from.originalTime, to: t.to.originalTime };
        }
        setVisibleRange(t) {
          let i = {
              from: this.i_.convertHorzItemToInternal(t.from),
              to: this.i_.convertHorzItemToInternal(t.to),
            },
            s = this.uh.J_(i);
          this.ts.Pc(s);
        }
        getVisibleLogicalRange() {
          let t = this.uh.j_();
          return null === t ? null : { from: t.Uh(), to: t.bi() };
        }
        setVisibleLogicalRange(t) {
          v(t.from <= t.to, 'The from index cannot be after the to index.'), this.ts.Pc(t);
        }
        resetTimeScale() {
          this.ts.cn();
        }
        fitContent() {
          this.ts.ku();
        }
        logicalToCoordinate(t) {
          let i = this.ts.At();
          return i.Ki() ? null : i.qt(t);
        }
        coordinateToLogical(t) {
          return this.uh.Ki() ? null : this.uh.nu(t);
        }
        timeToIndex(t, i) {
          let s = this.i_.convertHorzItemToInternal(t);
          return this.uh.U_(s, i);
        }
        timeToCoordinate(t) {
          let i = this.timeToIndex(t, !1);
          return null === i ? null : this.uh.qt(i);
        }
        coordinateToTime(t) {
          let i = this.ts.At(),
            s = i.nu(t),
            e = i.ss(s);
          return null === e ? null : e.originalTime;
        }
        width() {
          return this.Om.Nf().width;
        }
        height() {
          return this.Om.Nf().height;
        }
        subscribeVisibleTimeRangeChange(t) {
          this.vg.i(t);
        }
        unsubscribeVisibleTimeRangeChange(t) {
          this.vg._(t);
        }
        subscribeVisibleLogicalRangeChange(t) {
          this.T_.i(t);
        }
        unsubscribeVisibleLogicalRangeChange(t) {
          this.T_._(t);
        }
        subscribeSizeChange(t) {
          this.rm.i(t);
        }
        unsubscribeSizeChange(t) {
          this.rm._(t);
        }
        applyOptions(t) {
          this.uh.hr(t);
        }
        options() {
          return { ...N(this.uh.N()), barSpacing: this.uh.lu() };
        }
        mg() {
          this.vg.v() && this.vg.p(this.getVisibleRange());
        }
        wg() {
          this.T_.v() && this.T_.p(this.getVisibleLogicalRange());
        }
        gg(t) {
          this.rm.p(t.width, t.height);
        }
      }
      function s1(t) {
        return (
          (function (t) {
            if (k(t.handleScale)) {
              let i = t.handleScale;
              t.handleScale = {
                axisDoubleClickReset: { time: i, price: i },
                axisPressedMouseMove: { time: i, price: i },
                mouseWheel: i,
                pinch: i,
              };
            } else if (void 0 !== t.handleScale) {
              let { axisPressedMouseMove: i, axisDoubleClickReset: s } = t.handleScale;
              k(i) && (t.handleScale.axisPressedMouseMove = { time: i, price: i }),
                k(s) && (t.handleScale.axisDoubleClickReset = { time: s, price: s });
            }
            let i = t.handleScroll;
            k(i) &&
              (t.handleScroll = {
                horzTouchDrag: i,
                vertTouchDrag: i,
                mouseWheel: i,
                pressedMouseMove: i,
              });
          })(t),
          t
        );
      }
      class s2 {
        constructor(t, i, s) {
          (this.Mg = new Map()),
            (this.bg = new Map()),
            (this.Sg = new y()),
            (this.xg = new y()),
            (this.Cg = new y()),
            (this.zu = new WeakMap()),
            (this.yg = new s_(i));
          let e = void 0 === s ? N(sK()) : x(N(sK()), s1(s));
          (this.kg = i),
            (this.Df = new sr(t, e, i)),
            this.Df.Lv().i((t) => {
              this.Sg.v() && this.Sg.p(this.Pg(t()));
            }, this),
            this.Df.Ov().i((t) => {
              this.xg.v() && this.xg.p(this.Pg(t()));
            }, this),
            this.Df.nc().i((t) => {
              this.Cg.v() && this.Cg.p(this.Pg(t()));
            }, this);
          let h = this.Df.Qt();
          this.Tg = new s0(h, this.Df.Um(), this.kg);
        }
        remove() {
          this.Df.Lv().u(this),
            this.Df.Ov().u(this),
            this.Df.nc().u(this),
            this.Tg.m(),
            this.Df.m(),
            this.Mg.clear(),
            this.bg.clear(),
            this.Sg.m(),
            this.xg.m(),
            this.Cg.m(),
            this.yg.m();
        }
        resize(t, i, s) {
          this.autoSizeActive() || this.Df.Wm(t, i, s);
        }
        addCustomSeries(t, i = {}, s = 0) {
          let e;
          let h =
            ((e = M(t)),
            {
              type: 'Custom',
              isBuiltIn: !1,
              defaultOptions: { ...sE, ...e.defaultOptions() },
              Rg: sP,
              Dg: e,
            });
          return this.Vg(h, i, s);
        }
        addSeries(t, i = {}, s = 0) {
          return this.Vg(t, i, s);
        }
        removeSeries(t) {
          let i = w(this.Mg.get(t)),
            s = this.yg.yc(i);
          this.Df.Qt().yc(i), this.Ig(s), this.Mg.delete(t), this.bg.delete(i);
        }
        dg(t, i) {
          this.Ig(this.yg.Rw(t, i));
        }
        pg(t, i, s) {
          this.Ig(this.yg.Ew(t, i, s));
        }
        subscribeClick(t) {
          this.Sg.i(t);
        }
        unsubscribeClick(t) {
          this.Sg._(t);
        }
        subscribeCrosshairMove(t) {
          this.Cg.i(t);
        }
        unsubscribeCrosshairMove(t) {
          this.Cg._(t);
        }
        subscribeDblClick(t) {
          this.xg.i(t);
        }
        unsubscribeDblClick(t) {
          this.xg._(t);
        }
        priceScale(t, i = 0) {
          return new sG(this.Df, t, i);
        }
        timeScale() {
          return this.Tg;
        }
        applyOptions(t) {
          this.Df.hr(s1(t));
        }
        options() {
          return this.Df.N();
        }
        takeScreenshot() {
          return this.Df.Xm();
        }
        removePane(t) {
          this.Df.Qt().rc(t);
        }
        swapPanes(t, i) {
          this.Df.Qt().ac(t, i);
        }
        autoSizeActive() {
          return this.Df.tw();
        }
        chartElement() {
          return this.Df.Uf();
        }
        panes() {
          return this.Df.Qt()
            .$s()
            .map((t) => this.Bg(t));
        }
        paneSize(t = 0) {
          let i = this.Df.nw(t);
          return { height: i.height, width: i.width };
        }
        setCrosshairPosition(t, i, s) {
          let e = this.Mg.get(s);
          if (void 0 === e) return;
          let h = this.Df.Qt().Hn(e);
          null !== h && this.Df.Qt().gc(t, i, h);
        }
        clearCrosshairPosition() {
          this.Df.Qt().Mc(!0);
        }
        horzBehaviour() {
          return this.kg;
        }
        Vg(t, i = {}, s = 0) {
          var e;
          v(void 0 !== t.Rg),
            void 0 !== (e = i.priceFormat) &&
              'custom' !== e.type &&
              void 0 !== e.minMove &&
              void 0 === e.precision &&
              (e.precision = (function (t) {
                if (t >= 1) return 0;
                let i = 0;
                for (; i < 8 && !(1e-8 > Math.abs(Math.round(t) - t)); i++) t *= 10;
                return i;
              })(e.minMove)),
            'Candlestick' === t.type &&
              (void 0 !== i.borderColor &&
                ((i.borderUpColor = i.borderColor), (i.borderDownColor = i.borderColor)),
              void 0 !== i.wickColor &&
                ((i.wickUpColor = i.wickColor), (i.wickDownColor = i.wickColor)));
          let h = x(N(p), N(t.defaultOptions), i),
            l = t.Rg,
            r = new tG(this.Df.Qt(), t.type, h, l, t.Dg);
          this.Df.Qt().xc(r, s);
          let n = new sj(r, this, this, this, this.kg, (t) => this.Bg(t));
          return this.Mg.set(n, r), this.bg.set(r, n), n;
        }
        Ig(t) {
          let i = this.Df.Qt();
          i.bc(t.At.iu, t.At.Ww, t.At.Fw),
            t.Do.forEach((t, i) => i.ht(t.se, t.Nw)),
            i.At().O_(),
            i.au();
        }
        Ag(t) {
          return w(this.bg.get(t));
        }
        Pg(t) {
          let i = new Map();
          t.ww.forEach((t, s) => {
            let e = s.Rr(),
              h = sO(e)(t);
            if ('Custom' !== e) v(sa(h));
            else {
              let t = s.pa();
              v(!t || !1 === t(h));
            }
            i.set(this.Ag(s), h);
          });
          let s = void 0 !== t.mw && this.bg.has(t.mw) ? this.Ag(t.mw) : void 0;
          return {
            time: t.dw,
            logical: t.Re,
            point: t.fw,
            paneIndex: t.pw,
            hoveredSeries: s,
            hoveredObjectId: t.gw,
            seriesData: i,
            sourceEvent: t.Mw,
          };
        }
        Bg(t) {
          let i = this.zu.get(t);
          return i || ((i = new sH(this.Df, (t) => this.Ag(t), t, this)), this.zu.set(t, i)), i;
        }
      }
      function s3(t, i) {
        return (function (t, i, s) {
          let e = new s2(
            (function (t) {
              if (C(t)) {
                let i = document.getElementById(t);
                return v(null !== i, `Cannot find element in DOM with id=${t}`), i;
              }
              return t;
            })(t),
            i,
            s
          );
          return i.setOptions(e.options()), e;
        })(t, new iW(), iW.Xc(i));
      }
      class s5 extends sY {
        constructor(t, i) {
          super(t, i, !0);
        }
        tg(t, i, s) {
          i.su(this.qw, z(this.Yw)), t.Hl(this.qw, s, z(this.Yw));
        }
        Eg(t, i) {
          return { wt: t, gt: i, _t: NaN, ut: NaN };
        }
        Jw() {
          let t = this.Jn.Rh();
          this.qw = this.Jn.Xs()
            .Hr()
            .map((i) => {
              let s = i.Ft[3];
              return this.zg(i.Re, s, t);
            });
        }
      }
      function s6(t, i, s, e, h, l, r) {
        if (0 === i.length || e.from >= i.length || e.to <= 0) return;
        let { context: n, horizontalPixelRatio: o, verticalPixelRatio: a } = t,
          u = i[e.from],
          c = l(t, u),
          d = u;
        if (e.to - e.from < 2) {
          let i = h / 2;
          n.beginPath();
          let s = { _t: u._t - i, ut: u.ut },
            e = { _t: u._t + i, ut: u.ut };
          n.moveTo(s._t * o, s.ut * a), n.lineTo(e._t * o, e.ut * a), r(t, c, s, e);
        } else {
          let h = (i, s) => {
              r(t, c, d, s), n.beginPath(), (c = i), (d = s);
            },
            f = d;
          n.beginPath(), n.moveTo(u._t * o, u.ut * a);
          for (let r = e.from + 1; r < e.to; ++r) {
            let e = l(t, (f = i[r]));
            switch (s) {
              case 0:
                n.lineTo(f._t * o, f.ut * a);
                break;
              case 1:
                n.lineTo(f._t * o, i[r - 1].ut * a),
                  e !== c && (h(e, f), n.lineTo(f._t * o, i[r - 1].ut * a)),
                  n.lineTo(f._t * o, f.ut * a);
                break;
              case 2: {
                let [t, s] = (function (t, i, s) {
                  var e, h;
                  let l = Math.max(0, i - 1),
                    r = Math.min(t.length - 1, s + 1);
                  return [
                    ((e = t[i]), (h = s9(s4(t[s], t[l]), 6)), { _t: e._t + h._t, ut: e.ut + h.ut }),
                    s4(t[s], s9(s4(t[r], t[i]), 6)),
                  ];
                })(i, r - 1, r);
                n.bezierCurveTo(t._t * o, t.ut * a, s._t * o, s.ut * a, f._t * o, f.ut * a);
              }
            }
            1 !== s && e !== c && (h(e, f), n.moveTo(f._t * o, f.ut * a));
          }
          (d !== f || (d === f && 1 === s)) && r(t, c, d, f);
        }
      }
      function s4(t, i) {
        return { _t: t._t - i._t, ut: t.ut - i.ut };
      }
      function s9(t, i) {
        return { _t: t._t / i, ut: t.ut / i };
      }
      function s7(t, i) {
        let s = t.context;
        (s.strokeStyle = i), s.stroke();
      }
      class s8 extends F {
        constructor() {
          super(...arguments), (this.rt = null);
        }
        ht(t) {
          this.rt = t;
        }
        et(t) {
          if (null === this.rt) return;
          let { ot: i, lt: s, Lg: e, Og: h, ct: l, Xt: r, Ng: n } = this.rt;
          if (null === s) return;
          let o = t.context;
          (o.lineCap = 'butt'),
            (o.lineWidth = l * t.verticalPixelRatio),
            m(o, r),
            (o.lineJoin = 'round');
          let a = this.Wg.bind(this);
          void 0 !== h && s6(t, i, h, s, e, a, s7),
            n &&
              (function (t, i, s, e, h) {
                if (e.to - e.from <= 0) return;
                let { horizontalPixelRatio: l, verticalPixelRatio: r, context: n } = t,
                  o = null,
                  a = (Math.max(1, Math.floor(l)) % 2) / 2,
                  u = s * r + a;
                for (let s = e.to - 1; s >= e.from; --s) {
                  let e = i[s];
                  if (e) {
                    let i = h(t, e);
                    i !== o && (n.beginPath(), null !== o && n.fill(), (n.fillStyle = i), (o = i));
                    let s = Math.round(e._t * l) + a,
                      c = e.ut * r;
                    n.moveTo(s, c), n.arc(s, c, u, 0, 2 * Math.PI);
                  }
                }
                n.fill();
              })(t, i, n, s, a);
        }
      }
      class et extends s8 {
        Wg(t, i) {
          return i.vt;
        }
      }
      class ei extends s5 {
        constructor() {
          super(...arguments), (this.Xw = new et());
        }
        zg(t, i, s) {
          return { ...this.Eg(t, i), ...s.Dr(t) };
        }
        ig() {
          let t = this.Jn.N(),
            i = {
              ot: this.qw,
              Xt: t.lineStyle,
              Og: t.lineVisible ? t.lineType : void 0,
              ct: t.lineWidth,
              Ng: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0,
              lt: this.Yw,
              Lg: this.Qn.At().lu(),
            };
          this.Xw.ht(i);
        }
      }
      let es = {
        type: 'Line',
        isBuiltIn: !0,
        defaultOptions: {
          color: '#2196f3',
          lineStyle: 0,
          lineWidth: 3,
          lineType: 0,
          lineVisible: !0,
          crosshairMarkerVisible: !0,
          crosshairMarkerRadius: 4,
          crosshairMarkerBorderColor: '',
          crosshairMarkerBorderWidth: 2,
          crosshairMarkerBackgroundColor: '',
          lastPriceAnimation: 0,
          pointMarkersVisible: !1,
        },
        Rg: (t, i) => new ei(t, i),
      };
      function ee(t, i) {
        return t.weight > i.weight ? t : i;
      }
      class eh {
        constructor() {
          (this.Fg = new y()),
            (this.Hg = (function (t) {
              let i = !1;
              return function (...s) {
                i ||
                  ((i = !0),
                  queueMicrotask(() => {
                    t(...s), (i = !1);
                  }));
              };
            })(() => this.Fg.p(this.Ug))),
            (this.Ug = 0);
        }
        $g() {
          return this.Fg;
        }
        m() {
          this.Fg.m();
        }
        options() {
          return this.ys;
        }
        setOptions(t) {
          this.ys = t;
        }
        preprocessData(t) {}
        updateFormatter(t) {
          this.ys && (this.ys.localization = t);
        }
        createConverterToInternalObj(t) {
          return this.Hg(), (t) => (t > this.Ug && (this.Ug = t), t);
        }
        key(t) {
          return t;
        }
        cacheKey(t) {
          return t;
        }
        convertHorzItemToInternal(t) {
          return t;
        }
        formatHorzItem(t) {
          return this.qg(t);
        }
        formatTickmark(t) {
          return this.qg(t.time);
        }
        maxTickMarkWeight(t) {
          return t.reduce(ee, t[0]).weight;
        }
        fillWeightsForPoints(t, i) {
          var s;
          for (let e = i; e < t.length; ++e)
            t[e].timeWeight =
              (s = t[e].time) % 120 == 0
                ? 10
                : s % 60 == 0
                  ? 9
                  : s % 36 == 0
                    ? 8
                    : s % 12 == 0
                      ? 7
                      : s % 6 == 0
                        ? 6
                        : s % 3 == 0
                          ? 5
                          : 4 * (s % 1 == 0);
          (this.Ug = t[t.length - 1].time), this.Hg();
        }
        qg(t) {
          if (this.ys.localization?.timeFormatter) return this.ys.localization.timeFormatter(t);
          if (t < 12) return `${t}M`;
          let i = Math.floor(t / 12),
            s = t % 12;
          return 0 === s ? `${i}Y` : `${i}Y${s}M`;
        }
      }
      let el = {
          yieldCurve: { baseResolution: 1, minimumTimeRange: 120, startTimeRange: 0 },
          timeScale: { ignoreWhitespaceIndices: !0 },
          leftPriceScale: { visible: !0 },
          rightPriceScale: { visible: !1 },
          localization: { priceFormatter: (t) => t.toFixed(3) + '%' },
        },
        er = { lastValueVisible: !1, priceLineVisible: !1 };
      function en(t, i) {
        return t.weight > i.weight ? t : i;
      }
      function eo(t, i, s, e, h) {
        let { context: l, horizontalPixelRatio: r, verticalPixelRatio: n } = i;
        l.lineTo(h._t * r, t * n),
          l.lineTo(e._t * r, t * n),
          l.closePath(),
          (l.fillStyle = s),
          l.fill();
      }
      class ea extends F {
        constructor() {
          super(...arguments), (this.rt = null);
        }
        ht(t) {
          this.rt = t;
        }
        et(t) {
          if (null === this.rt) return;
          let { ot: i, lt: s, Lg: e, ct: h, Xt: l, Og: r } = this.rt,
            n = this.rt.jg ?? (this.rt.Kg ? 0 : t.mediaSize.height);
          if (null === s) return;
          let o = t.context;
          (o.lineCap = 'butt'),
            (o.lineJoin = 'round'),
            (o.lineWidth = h),
            m(o, l),
            (o.lineWidth = 1),
            s6(t, i, r, s, e, this.Xg.bind(this), eo.bind(null, n));
        }
      }
      class eu {
        Zg(t, i) {
          let s = this.Gg,
            { Jg: e, Qg: h, tM: l, iM: r, jg: n, sM: o, nM: a } = i;
          if (
            void 0 === this.eM ||
            void 0 === s ||
            s.Jg !== e ||
            s.Qg !== h ||
            s.tM !== l ||
            s.iM !== r ||
            s.jg !== n ||
            s.sM !== o ||
            s.nM !== a
          ) {
            let { verticalPixelRatio: s } = t,
              u = n || o > 0 ? s : 1,
              c = o * u,
              d = a === t.bitmapSize.height ? a : a * u,
              f = t.context.createLinearGradient(0, c, 0, d);
            if ((f.addColorStop(0, e), null != n)) {
              let t = tj(((n ?? 0) * u - c) / (d - c), 0, 1);
              f.addColorStop(t, h), f.addColorStop(t, l);
            }
            f.addColorStop(1, r), (this.eM = f), (this.Gg = i);
          }
          return this.eM;
        }
      }
      class ec extends ea {
        constructor() {
          super(...arguments), (this.rM = new eu());
        }
        Xg(t, i) {
          return this.rM.Zg(t, {
            Jg: i.mr,
            Qg: '',
            tM: '',
            iM: i.wr,
            sM: this.rt?.sM ?? 0,
            nM: t.bitmapSize.height,
          });
        }
      }
      class ed extends s5 {
        constructor(t, i) {
          super(t, i),
            (this.Xw = new W()),
            (this.oM = new ec()),
            (this._M = new et()),
            this.Xw.st([this.oM, this._M]);
        }
        zg(t, i, s) {
          return { ...this.Eg(t, i), ...s.Dr(t) };
        }
        ig() {
          let t;
          let i = this.Jn.N();
          if (null !== this.Yw && 0 !== this.qw.length) {
            if (i.relativeGradient) {
              t = this.qw[this.Yw.from].ut;
              for (let i = this.Yw.from; i < this.Yw.to; i++) {
                let s = this.qw[i];
                s.ut < t && (t = s.ut);
              }
            }
            this.oM.ht({
              Og: i.lineType,
              ot: this.qw,
              Xt: i.lineStyle,
              ct: i.lineWidth,
              jg: null,
              sM: t,
              Kg: i.invertFilledArea,
              lt: this.Yw,
              Lg: this.Qn.At().lu(),
            }),
              this._M.ht({
                Og: i.lineVisible ? i.lineType : void 0,
                ot: this.qw,
                Xt: i.lineStyle,
                ct: i.lineWidth,
                lt: this.Yw,
                Lg: this.Qn.At().lu(),
                Ng: i.pointMarkersVisible ? i.pointMarkersRadius || i.lineWidth / 2 + 2 : void 0,
              });
          }
        }
      }
      let ef = {
        type: 'Area',
        isBuiltIn: !0,
        defaultOptions: {
          topColor: 'rgba( 46, 220, 135, 0.4)',
          bottomColor: 'rgba( 40, 221, 100, 0)',
          invertFilledArea: !1,
          relativeGradient: !1,
          lineColor: '#33D778',
          lineStyle: 0,
          lineWidth: 3,
          lineType: 0,
          lineVisible: !0,
          crosshairMarkerVisible: !0,
          crosshairMarkerRadius: 4,
          crosshairMarkerBorderColor: '',
          crosshairMarkerBorderWidth: 2,
          crosshairMarkerBackgroundColor: '',
          lastPriceAnimation: 0,
          pointMarkersVisible: !1,
        },
        Rg: (t, i) => new ed(t, i),
      };
      class ep extends sY {
        constructor(t, i) {
          super(t, i, !1);
        }
        tg(t, i, s) {
          i.su(this.qw, z(this.Yw)), t.$l(this.qw, s, z(this.Yw));
        }
        vM(t, i, s) {
          return {
            wt: t,
            qh: i.Ft[0],
            Yh: i.Ft[1],
            jh: i.Ft[2],
            Kh: i.Ft[3],
            _t: NaN,
            ql: NaN,
            Yl: NaN,
            jl: NaN,
            Kl: NaN,
          };
        }
        Jw() {
          let t = this.Jn.Rh();
          this.qw = this.Jn.Xs()
            .Hr()
            .map((i) => this.zg(i.Re, i, t));
        }
      }
      class em extends F {
        constructor() {
          super(...arguments), (this.Yt = null), (this.uM = 0);
        }
        ht(t) {
          this.Yt = t;
        }
        et(t) {
          if (null === this.Yt || 0 === this.Yt.Xs.length || null === this.Yt.lt) return;
          let { horizontalPixelRatio: i } = t;
          (this.uM = (function (t, i) {
            if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
            let s = 1 - (0.2 * Math.atan(Math.max(4, t) - 4)) / (0.5 * Math.PI),
              e = Math.min(Math.floor(t * s * i), Math.floor(t * i));
            return Math.max(Math.floor(i), e);
          })(this.Yt.lu, i)),
            this.uM >= 2 && Math.floor(i) % 2 != this.uM % 2 && this.uM--;
          let s = this.Yt.Xs;
          this.Yt.mM && this.wM(t, s, this.Yt.lt), this.Yt.Mi && this.Qp(t, s, this.Yt.lt);
          let e = this.gM(i);
          (!this.Yt.Mi || this.uM > 2 * e) && this.MM(t, s, this.Yt.lt);
        }
        wM(t, i, s) {
          if (null === this.Yt) return;
          let { context: e, horizontalPixelRatio: h, verticalPixelRatio: l } = t,
            r = '',
            n = Math.min(Math.floor(h), Math.floor(this.Yt.lu * h)),
            o = Math.floor(0.5 * (n = Math.max(Math.floor(h), Math.min(n, this.uM)))),
            a = null;
          for (let t = s.from; t < s.to; t++) {
            let s = i[t];
            s.pr !== r && ((e.fillStyle = s.pr), (r = s.pr));
            let u = Math.round(Math.min(s.ql, s.Kl) * l),
              c = Math.round(Math.max(s.ql, s.Kl) * l),
              d = Math.round(s.Yl * l),
              f = Math.round(s.jl * l),
              p = Math.round(h * s._t) - o,
              m = p + n - 1;
            null !== a && (p = Math.min((p = Math.max(a + 1, p)), m));
            let g = m - p + 1;
            e.fillRect(p, d, g, u - d), e.fillRect(p, c + 1, g, f - c), (a = m);
          }
        }
        gM(t) {
          let i = Math.floor(+t);
          this.uM <= 2 * i && (i = Math.floor(0.5 * (this.uM - 1)));
          let s = Math.max(Math.floor(t), i);
          return this.uM <= 2 * s ? Math.max(Math.floor(t), Math.floor(+t)) : s;
        }
        Qp(t, i, s) {
          if (null === this.Yt) return;
          let { context: e, horizontalPixelRatio: h, verticalPixelRatio: l } = t,
            r = '',
            n = this.gM(h),
            o = null;
          for (let t = s.from; t < s.to; t++) {
            let s = i[t];
            s.dr !== r && ((e.fillStyle = s.dr), (r = s.dr));
            let d = Math.round(s._t * h) - Math.floor(0.5 * this.uM),
              f = d + this.uM - 1,
              p = Math.round(Math.min(s.ql, s.Kl) * l),
              m = Math.round(Math.max(s.ql, s.Kl) * l);
            if (
              (null !== o && (d = Math.min((d = Math.max(o + 1, d)), f)), this.Yt.lu * h > 2 * n)
            ) {
              var a, u, c;
              (a = d),
                (u = f - d + 1),
                (c = m - p + 1),
                e.fillRect(a + n, p, u - 2 * n, n),
                e.fillRect(a + n, p + c - n, u - 2 * n, n),
                e.fillRect(a, p, n, c),
                e.fillRect(a + u - n, p, n, c);
            } else {
              let t = f - d + 1;
              e.fillRect(d, p, t, m - p + 1);
            }
            o = f;
          }
        }
        MM(t, i, s) {
          if (null === this.Yt) return;
          let { context: e, horizontalPixelRatio: h, verticalPixelRatio: l } = t,
            r = '',
            n = this.gM(h);
          for (let t = s.from; t < s.to; t++) {
            let s = i[t],
              o = Math.round(Math.min(s.ql, s.Kl) * l),
              a = Math.round(Math.max(s.ql, s.Kl) * l),
              u = Math.round(s._t * h) - Math.floor(0.5 * this.uM),
              c = u + this.uM - 1;
            if (s.cr !== r) {
              let t = s.cr;
              (e.fillStyle = t), (r = t);
            }
            this.Yt.Mi && ((u += n), (o += n), (c -= n), (a -= n)),
              o > a || e.fillRect(u, o, c - u + 1, a - o + 1);
          }
        }
      }
      class eg extends ep {
        constructor() {
          super(...arguments), (this.Xw = new em());
        }
        zg(t, i, s) {
          return { ...this.vM(t, i, s), ...s.Dr(t) };
        }
        ig() {
          let t = this.Jn.N();
          this.Xw.ht({
            Xs: this.qw,
            lu: this.Qn.At().lu(),
            mM: t.wickVisible,
            Mi: t.borderVisible,
            lt: this.Yw,
          });
        }
      }
      let ev = {
        type: 'Candlestick',
        isBuiltIn: !0,
        defaultOptions: {
          upColor: '#26a69a',
          downColor: '#ef5350',
          wickVisible: !0,
          borderVisible: !0,
          borderColor: '#378658',
          borderUpColor: '#26a69a',
          borderDownColor: '#ef5350',
          wickColor: '#737375',
          wickUpColor: '#26a69a',
          wickDownColor: '#ef5350',
        },
        Rg: (t, i) => new eg(t, i),
      };
      class ew extends F {
        constructor() {
          super(...arguments), (this.Yt = null), (this.bM = []);
        }
        ht(t) {
          (this.Yt = t), (this.bM = []);
        }
        et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
          if (null === this.Yt || 0 === this.Yt.ot.length || null === this.Yt.lt) return;
          this.bM.length || this.SM(i);
          let e = Math.max(1, Math.floor(s)),
            h = Math.round(this.Yt.xM * s) - Math.floor(e / 2),
            l = h + e;
          for (let i = this.Yt.lt.from; i < this.Yt.lt.to; i++) {
            let r, n;
            let o = this.Yt.ot[i],
              a = this.bM[i - this.Yt.lt.from],
              u = Math.round(o.ut * s);
            (t.fillStyle = o.cr),
              u <= h ? ((r = u), (n = l)) : ((r = h), (n = u - Math.floor(e / 2) + e)),
              t.fillRect(a.Uh, r, a.bi - a.Uh + 1, n - r);
          }
        }
        SM(t) {
          if (null === this.Yt || 0 === this.Yt.ot.length || null === this.Yt.lt)
            return void (this.bM = []);
          let i = 1 >= Math.ceil(this.Yt.lu * t) ? 0 : Math.max(1, Math.floor(t)),
            s = Math.round(this.Yt.lu * t) - i;
          this.bM = Array(this.Yt.lt.to - this.Yt.lt.from);
          for (let i = this.Yt.lt.from; i < this.Yt.lt.to; i++) {
            let e, h;
            let l = this.Yt.ot[i],
              r = Math.round(l._t * t);
            if (s % 2) {
              let t = (s - 1) / 2;
              (e = r - t), (h = r + t);
            } else {
              let t = s / 2;
              (e = r - t), (h = r + t - 1);
            }
            this.bM[i - this.Yt.lt.from] = { Uh: e, bi: h, CM: r, ne: l._t * t, wt: l.wt };
          }
          for (let t = this.Yt.lt.from + 1; t < this.Yt.lt.to; t++) {
            let s = this.bM[t - this.Yt.lt.from],
              e = this.bM[t - this.Yt.lt.from - 1];
            s.wt === e.wt + 1 &&
              s.Uh - e.bi !== i + 1 &&
              (e.CM > e.ne ? (e.bi = s.Uh - i - 1) : (s.Uh = e.bi + i + 1));
          }
          let e = Math.ceil(this.Yt.lu * t);
          for (let t = this.Yt.lt.from; t < this.Yt.lt.to; t++) {
            let i = this.bM[t - this.Yt.lt.from];
            i.bi < i.Uh && (i.bi = i.Uh), (e = Math.min(i.bi - i.Uh + 1, e));
          }
          if (i > 0 && e < 4)
            for (let t = this.Yt.lt.from; t < this.Yt.lt.to; t++) {
              let i = this.bM[t - this.Yt.lt.from];
              i.bi - i.Uh + 1 > e && (i.CM > i.ne ? (i.bi -= 1) : (i.Uh += 1));
            }
        }
      }
      class eb extends s5 {
        constructor() {
          super(...arguments), (this.Xw = new ew());
        }
        zg(t, i, s) {
          return { ...this.Eg(t, i), ...s.Dr(t) };
        }
        ig() {
          let t = {
            ot: this.qw,
            lu: this.Qn.At().lu(),
            lt: this.Yw,
            xM: this.Jn.Wt().Nt(this.Jn.N().base, b(this.Jn.zt()).Ft),
          };
          this.Xw.ht(t);
        }
      }
      let eM = {
          type: 'Histogram',
          isBuiltIn: !0,
          defaultOptions: { color: '#26a69a', base: 0 },
          Rg: (t, i) => new eb(t, i),
        },
        ey = { visible: !0, horzAlign: 'center', vertAlign: 'center', lines: [] },
        ex = { color: 'rgba(0, 0, 0, 0.5)', fontSize: 48, fontFamily: R, fontStyle: '', text: '' };
      class e_ {
        constructor(t) {
          (this.PM = new Map()), (this.Yt = t);
        }
        draw(t) {
          t.useMediaCoordinateSpace((t) => {
            if (!this.Yt.visible) return;
            let { context: i, mediaSize: s } = t,
              e = 0;
            for (let t of this.Yt.lines) {
              if (0 === t.text.length) continue;
              i.font = t.P;
              let h = this.TM(i, t.text);
              h > s.width ? (t.pu = s.width / h) : (t.pu = 1), (e += t.lineHeight * t.pu);
            }
            let h = 0;
            switch (this.Yt.vertAlign) {
              case 'top':
                h = 0;
                break;
              case 'center':
                h = Math.max((s.height - e) / 2, 0);
                break;
              case 'bottom':
                h = Math.max(s.height - e, 0);
            }
            for (let t of this.Yt.lines) {
              i.save(), (i.fillStyle = t.color);
              let e = 0;
              switch (this.Yt.horzAlign) {
                case 'left':
                  (i.textAlign = 'left'), (e = t.lineHeight / 2);
                  break;
                case 'center':
                  (i.textAlign = 'center'), (e = s.width / 2);
                  break;
                case 'right':
                  (i.textAlign = 'right'), (e = s.width - 1 - t.lineHeight / 2);
              }
              i.translate(e, h),
                (i.textBaseline = 'top'),
                (i.font = t.P),
                i.scale(t.pu, t.pu),
                i.fillText(t.text, 0, t.RM),
                i.restore(),
                (h += t.lineHeight * t.pu);
            }
          });
        }
        TM(t, i) {
          let s = this.DM(t.font),
            e = s.get(i);
          return void 0 === e && ((e = t.measureText(i).width), s.set(i, e)), e;
        }
        DM(t) {
          let i = this.PM.get(t);
          return void 0 === i && ((i = new Map()), this.PM.set(t, i)), i;
        }
      }
      class eS {
        constructor(t) {
          this.ys = ek(t);
        }
        kt(t) {
          this.ys = ek(t);
        }
        renderer() {
          return new e_(this.ys);
        }
      }
      function eC(t) {
        return {
          ...t,
          P: T(t.fontSize, t.fontFamily, t.fontStyle),
          lineHeight: t.lineHeight || 1.2 * t.fontSize,
          RM: 0,
          pu: 0,
        };
      }
      function ek(t) {
        return { ...t, lines: t.lines.map(eC) };
      }
      function eN(t) {
        return { ...ex, ...t };
      }
      function eY(t) {
        return { ...ey, ...t, lines: t.lines?.map(eN) ?? [] };
      }
      let ez = { alpha: 1, padding: 0 };
      class eR {
        constructor(t) {
          this.Yt = t;
        }
        draw(t) {
          t.useMediaCoordinateSpace((t) => {
            let i = t.context,
              s = this.BM(this.Yt, t.mediaSize);
            s &&
              this.Yt.AM &&
              ((i.globalAlpha = this.Yt.alpha ?? 1),
              i.drawImage(this.Yt.AM, s._t, s.ut, s.Qi, s.$t));
          });
        }
        BM(t, i) {
          let { maxHeight: s, maxWidth: e, EM: h, zM: l, padding: r } = t,
            n = Math.round(i.width / 2),
            o = Math.round(i.height / 2),
            a = r ?? 0,
            u = i.width - 2 * a,
            c = i.height - 2 * a;
          s && (c = Math.min(c, s)), e && (u = Math.min(u, e));
          let d = Math.min(u / l, c / h),
            f = l * d,
            p = h * d;
          return { _t: n - 0.5 * f, ut: o - 0.5 * p, $t: p, Qi: f };
        }
      }
      class eT {
        constructor(t) {
          (this.LM = null),
            (this.OM = 0),
            (this.NM = 0),
            (this.ys = t),
            (this.M = eE(this.ys, this.LM, this.OM, this.NM));
        }
        WM(t) {
          void 0 !== t.FM && (this.OM = t.FM),
            void 0 !== t.HM && (this.NM = t.HM),
            void 0 !== t.UM && (this.LM = t.UM),
            this.kt();
        }
        $M(t) {
          (this.ys = t), this.kt();
        }
        zOrder() {
          return 'bottom';
        }
        kt() {
          this.M = eE(this.ys, this.LM, this.OM, this.NM);
        }
        renderer() {
          return new eR(this.M);
        }
      }
      function eE(t, i, s, e) {
        return { ...t, AM: i, zM: s, EM: e };
      }
      class eP {
        constructor(t, i) {
          (this.Jn = t), (this.ah = i), this.kM();
        }
        detach() {
          this.Jn.detachPrimitive(this.ah);
        }
        getSeries() {
          return this.Jn;
        }
        applyOptions(t) {
          this.ah && this.ah.hr && this.ah.hr(t);
        }
        kM() {
          this.Jn.attachPrimitive(this.ah);
        }
      }
      let eV = { zOrder: 'normal' };
      function eD(t, i) {
        return t0(Math.min(Math.max(t, 12), 30) * i);
      }
      function eW(t, i) {
        switch (t) {
          case 'arrowDown':
          case 'arrowUp':
            return eD(i, 1);
          case 'circle':
            return eD(i, 0.8);
          case 'square':
            return eD(i, 0.7);
        }
      }
      function eF(t) {
        return (function (t) {
          let i = Math.ceil(t);
          return i % 2 != 0 ? i - 1 : i;
        })(eD(t, 1));
      }
      function eB(t) {
        return Math.max(eD(t, 0.1), 3);
      }
      function eA(t, i, s) {
        return i ? t : s ? Math.ceil(t / 2) : 0;
      }
      function eL(t, i, s, e) {
        let h = ((eW('arrowUp', e) - 1) / 2) * s.XM,
          l = ((t0(e / 2) - 1) / 2) * s.XM;
        i.beginPath(),
          t
            ? (i.moveTo(s._t - h, s.ut),
              i.lineTo(s._t, s.ut - h),
              i.lineTo(s._t + h, s.ut),
              i.lineTo(s._t + l, s.ut),
              i.lineTo(s._t + l, s.ut + h),
              i.lineTo(s._t - l, s.ut + h))
            : (i.moveTo(s._t - h, s.ut),
              i.lineTo(s._t, s.ut + h),
              i.lineTo(s._t + h, s.ut),
              i.lineTo(s._t + l, s.ut),
              i.lineTo(s._t + l, s.ut - h),
              i.lineTo(s._t - l, s.ut - h)),
          i.lineTo(s._t - l, s.ut),
          i.fill();
      }
      function eO(t, i, s, e, h, l) {
        let r = (eW('arrowUp', e) - 1) / 2,
          n = (t0(e / 2) - 1) / 2;
        return (
          (h >= i - n - 2 &&
            h <= i + n + 2 &&
            l >= (t ? s : s - r) - 2 &&
            l <= (t ? s + r : s) + 2) ||
          (!(h < i - r - 3) &&
            !(h > i + r + 3) &&
            !(l < (t ? s - r - 3 : s)) &&
            !(l > (t ? s : s + r + 3)) &&
            Math.abs(l - s) + 3 >= Math.abs(h - i) / 2)
        );
      }
      class eI {
        constructor() {
          (this.Yt = null),
            (this.On = new ta()),
            (this.W = -1),
            (this.F = ''),
            (this.Rp = ''),
            (this.ZM = 'normal');
        }
        ht(t) {
          this.Yt = t;
        }
        Nn(t, i, s) {
          (this.W === t && this.F === i) ||
            ((this.W = t), (this.F = i), (this.Rp = T(t, i)), this.On.In()),
            (this.ZM = s);
        }
        jn(t, i) {
          if (null === this.Yt || null === this.Yt.lt) return null;
          for (let l = this.Yt.lt.from; l < this.Yt.lt.to; l++) {
            var s, e, h;
            let r = this.Yt.ot[l];
            if (
              r &&
              ((s = r),
              (e = t),
              (h = i),
              !(
                void 0 === s.ri ||
                !(function (t, i, s, e, h, l) {
                  let r = e / 2;
                  return h >= t && h <= t + s && l >= i - r && l <= i + r;
                })(s.ri._t, s.ri.ut, s.ri.Qi, s.ri.$t, e, h)
              ) ||
                (function (t, i, s) {
                  if (0 === t.zr) return !1;
                  switch (t.JM) {
                    case 'arrowDown':
                      return eO(!0, t._t, t.ut, t.zr, i, s);
                    case 'arrowUp':
                      return eO(!1, t._t, t.ut, t.zr, i, s);
                    case 'circle':
                      return (function (t, i, s, e, h) {
                        let l = 2 + eW('circle', s) / 2,
                          r = t - e,
                          n = i - h;
                        return Math.sqrt(r * r + n * n) <= l;
                      })(t._t, t.ut, t.zr, i, s);
                    case 'square':
                      return (function (t, i, s, e, h) {
                        let l = eW('square', s),
                          r = (l - 1) / 2,
                          n = t - r,
                          o = i - r;
                        return e >= n && e <= n + l && h >= o && h <= o + l;
                      })(t._t, t.ut, t.zr, i, s);
                  }
                })(s, e, h))
            )
              return { zOrder: 'normal', externalId: r.Kn ?? '' };
          }
          return null;
        }
        draw(t) {
          'aboveSeries' !== this.ZM &&
            t.useBitmapCoordinateSpace((t) => {
              this.et(t);
            });
        }
        drawBackground(t) {
          'aboveSeries' === this.ZM &&
            t.useBitmapCoordinateSpace((t) => {
              this.et(t);
            });
        }
        et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: s }) {
          if (null !== this.Yt && null !== this.Yt.lt) {
            (t.textBaseline = 'middle'), (t.font = this.Rp);
            for (let e = this.Yt.lt.from; e < this.Yt.lt.to; e++) {
              let h = this.Yt.ot[e];
              void 0 !== h.ri &&
                ((h.ri.Qi = this.On.Vi(t, h.ri.GM)),
                (h.ri.$t = this.W),
                (h.ri._t = h._t - h.ri.Qi / 2)),
                (function (t, i, s, e) {
                  var h, l, r;
                  (i.fillStyle = t.R),
                    void 0 !== t.ri &&
                      ((h = t.ri.GM),
                      (l = t.ri._t),
                      (r = t.ri.ut),
                      i.save(),
                      i.scale(s, e),
                      i.fillText(h, l, r),
                      i.restore()),
                    (function (t, i, s) {
                      if (0 !== t.zr) {
                        switch (t.JM) {
                          case 'arrowDown':
                            return void eL(!1, i, s, t.zr);
                          case 'arrowUp':
                            return void eL(!0, i, s, t.zr);
                          case 'circle':
                            return void (function (t, i, s) {
                              let e = (eW('circle', s) - 1) / 2;
                              t.beginPath(),
                                t.arc(i._t, i.ut, e * i.XM, 0, 2 * Math.PI, !1),
                                t.fill();
                            })(i, s, t.zr);
                          case 'square':
                            return void (function (t, i, s) {
                              let e = eW('square', s),
                                h = ((e - 1) * i.XM) / 2,
                                l = i._t - h,
                                r = i.ut - h;
                              t.fillRect(l, r, e * i.XM, e * i.XM);
                            })(i, s, t.zr);
                        }
                        t.JM;
                      }
                    })(
                      t,
                      i,
                      (function (t, i, s) {
                        let e = (Math.max(1, Math.floor(i)) % 2) / 2;
                        return { _t: Math.round(t._t * i) + e, ut: t.ut * s, XM: i };
                      })(t, s, e)
                    );
                })(h, t, i, s);
            }
          }
        }
      }
      function eQ(t) {
        return 'atPriceTop' === t || 'atPriceBottom' === t || 'atPriceMiddle' === t;
      }
      class eX {
        constructor(t, i, s) {
          (this.ib = []),
            (this.xt = !0),
            (this.sb = !0),
            (this.Gt = new eI()),
            (this.ge = t),
            (this.gp = i),
            (this.Yt = { ot: [], lt: null }),
            (this.ys = s);
        }
        renderer() {
          if (!this.ge.options().visible) return null;
          this.xt && this.nb();
          let t = this.gp.options().layout;
          return this.Gt.Nn(t.fontSize, t.fontFamily, this.ys.zOrder), this.Gt.ht(this.Yt), this.Gt;
        }
        eb(t) {
          (this.ib = t), this.kt('data');
        }
        kt(t) {
          (this.xt = !0), 'data' === t && (this.sb = !0);
        }
        rb(t) {
          (this.xt = !0), (this.ys = t);
        }
        zOrder() {
          return 'aboveSeries' === this.ys.zOrder ? 'top' : this.ys.zOrder;
        }
        nb() {
          let t = this.gp.timeScale(),
            i = this.ib;
          this.sb &&
            ((this.Yt.ot = i.map((t) => ({
              wt: t.time,
              _t: 0,
              ut: 0,
              zr: 0,
              JM: t.shape,
              R: t.color,
              Kn: t.id,
              hb: t.hb,
              ri: void 0,
            }))),
            (this.sb = !1));
          let s = this.gp.options().layout;
          this.Yt.lt = null;
          let e = t.getVisibleLogicalRange();
          if (null === e) return;
          let h = new im(Math.floor(e.from), Math.ceil(e.to));
          if (null === this.ge.data()[0] || 0 === this.Yt.ot.length) return;
          let l = NaN,
            r = eB(t.options().barSpacing),
            n = { QM: r, tb: r };
          this.Yt.lt = sN(this.Yt.ot, h, !0);
          for (let e = this.Yt.lt.from; e < this.Yt.lt.to; e++) {
            let h = i[e];
            h.time !== l && ((n.QM = r), (n.tb = r), (l = h.time));
            let o = this.Yt.ot[e];
            (o._t = b(t.logicalToCoordinate(h.time))),
              void 0 !== h.text &&
                h.text.length > 0 &&
                (o.ri = { GM: h.text, _t: 0, ut: 0, Qi: 0, $t: 0 });
            let a = this.ge.dataByIndex(h.time, 0);
            null !== a &&
              (function (t, i, s, e, h, l, r, n) {
                let o = (function (t, i) {
                  if (eQ(i.position) && void 0 !== i.price) return i.price;
                  if ('value' in t && 'number' == typeof t.value) return t.value;
                  if ('open' in t && 'high' in t && 'low' in t && 'close' in t) {
                    if ('inBar' === i.position) return t.close;
                    if ('aboveBar' === i.position) return t.high;
                    if ('belowBar' === i.position) return t.low;
                  }
                })(s, i);
                if (void 0 === o) return;
                let a = eQ(i.position),
                  u = n.timeScale(),
                  c = _(i.size) ? Math.max(i.size, 0) : 1,
                  d = eF(u.options().barSpacing) * c,
                  f = d / 2;
                switch (((t.zr = d), i.position)) {
                  case 'inBar':
                  case 'atPriceMiddle':
                    return (
                      (t.ut = b(r.priceToCoordinate(o))),
                      void (void 0 !== t.ri && (t.ri.ut = t.ut + f + l + 0.6 * h))
                    );
                  case 'aboveBar':
                  case 'atPriceTop': {
                    let i = a ? 0 : e.QM;
                    return (
                      (t.ut = b(r.priceToCoordinate(o)) - f - i),
                      void 0 !== t.ri && ((t.ri.ut = t.ut - f - 0.6 * h), (e.QM += 1.2 * h)),
                      void (a || (e.QM += d + l))
                    );
                  }
                  case 'belowBar':
                  case 'atPriceBottom': {
                    let i = a ? 0 : e.tb;
                    return (
                      (t.ut = b(r.priceToCoordinate(o)) + f + i),
                      void 0 !== t.ri && ((t.ri.ut = t.ut + f + l + 0.6 * h), (e.tb += 1.2 * h)),
                      void (a || (e.tb += d + l))
                    );
                  }
                }
              })(o, h, a, n, s.fontSize, r, this.ge, this.gp);
          }
          this.xt = !1;
        }
      }
      class eJ {
        constructor(t) {
          (this.ib = new Map()), (this.bb = t);
        }
        Sb(t, i, s) {
          if ((this.xb(i), void 0 !== s)) {
            let e = window.setTimeout(() => {
                this.ib.delete(i), this.Cb();
              }, s),
              h = { ...t, yb: e, kb: Date.now() + s };
            this.ib.set(i, h);
          } else this.ib.set(i, { ...t, yb: void 0, kb: void 0 });
          this.Cb();
        }
        xb(t) {
          let i = this.ib.get(t);
          i && void 0 !== i.yb && window.clearTimeout(i.yb), this.ib.delete(t), this.Cb();
        }
        Pb() {
          for (let [t] of this.ib) this.xb(t);
        }
        Tb() {
          let t = Date.now(),
            i = [];
          for (let [s, e] of this.ib)
            !e.kb || e.kb > t ? i.push({ time: e.time, sign: e.sign, value: e.value }) : this.xb(s);
          return i;
        }
        Rb(t) {
          this.bb = t;
        }
        Cb() {
          this.bb && this.bb();
        }
      }
      let e$ = {
        positiveColor: '#22AB94',
        negativeColor: '#F7525F',
        updateVisibilityDuration: 5e3,
      };
      class eU {
        constructor(t, i, s, e) {
          (this.Yt = t), (this.Db = i), (this.Vb = s), (this.Ib = e);
        }
        draw(t) {
          t.useBitmapCoordinateSpace((t) => {
            let i = t.context,
              s = (Math.max(1, Math.floor(t.horizontalPixelRatio)) % 2) / 2,
              e = 4 * t.verticalPixelRatio + s;
            this.Yt.forEach((h) => {
              let l = Math.round(h._t * t.horizontalPixelRatio) + s;
              i.beginPath();
              let r = this.Bb(h.Ab);
              (i.fillStyle = r),
                i.arc(l, h.ut * t.verticalPixelRatio, e, 0, 2 * Math.PI, !1),
                i.fill(),
                h.Ab &&
                  ((i.strokeStyle = r),
                  (i.lineWidth = Math.floor(2 * t.horizontalPixelRatio)),
                  i.beginPath(),
                  i.moveTo(
                    (h._t - 4.7) * t.horizontalPixelRatio + s,
                    (h.ut - 7 * h.Ab) * t.verticalPixelRatio
                  ),
                  i.lineTo(
                    h._t * t.horizontalPixelRatio + s,
                    (h.ut - 7 * h.Ab - 7 * h.Ab * 0.5) * t.verticalPixelRatio
                  ),
                  i.lineTo(
                    (h._t + 4.7) * t.horizontalPixelRatio + s,
                    (h.ut - 7 * h.Ab) * t.verticalPixelRatio
                  ),
                  i.stroke());
            });
          });
        }
        Bb(t) {
          return 0 === t ? this.Db : t > 0 ? this.Ib : this.Vb;
        }
      }
      class eK {
        constructor(t, i, s) {
          (this.Yt = []), (this.ge = t), (this.uh = i), (this.ys = s);
        }
        kt(t) {
          this.Yt = t
            .map((t) => {
              let i = this.ge.priceToCoordinate(t.value);
              return null === i
                ? null
                : { _t: b(this.uh.timeToCoordinate(t.time)), ut: i, Ab: t.sign };
            })
            .filter(Y);
        }
        renderer() {
          var t;
          let i =
            ((t = this.ge.options()), 'Area' === this.ge.seriesType() ? t.lineColor : t.color);
          return new eU(this.Yt, i, this.ys.negativeColor, this.ys.positiveColor);
        }
      }
      function eG(t, i) {
        return 'Line' === i || 'Area' === i;
      }
      ({ ...p });
    },
  },
]);
