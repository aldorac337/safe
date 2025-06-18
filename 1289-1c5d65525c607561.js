'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1289],
  {
    37936: function (t, e, i) {
      var n = i(58854),
        r = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(t, e, i) {
        var n,
          s = {},
          u = null,
          h = null;
        for (n in (void 0 !== i && (u = '' + i),
        void 0 !== e.key && (u = '' + e.key),
        void 0 !== e.ref && (h = e.ref),
        e))
          o.call(e, n) && !l.hasOwnProperty(n) && (s[n] = e[n]);
        if (t && t.defaultProps) for (n in (e = t.defaultProps)) void 0 === s[n] && (s[n] = e[n]);
        return { $$typeof: r, type: t, key: u, ref: h, props: s, _owner: a.current };
      }
      (e.Fragment = s), (e.jsx = u), (e.jsxs = u);
    },
    75040: function (t, e, i) {
      t.exports = i(37936);
    },
    18164: function (t, e, i) {
      i.d(e, {
        s: function () {
          return s;
        },
      });
      var n = i(79767);
      let r = (0, i(30528).X)(() => void 0 !== window.ScrollTimeline);
      class s {
        constructor(t) {
          (this.stop = () => this.runAll('stop')), (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!r() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let r = () => {
                    let { currentTime: n } = e,
                      r = (null === n ? 0 : n.value) / 100;
                    i !== r && t(r), (i = r);
                  };
                  return n.Wi.update(r, !0), () => (0, n.Pn)(r);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll('time');
        }
        set time(t) {
          this.setAll('time', t);
        }
        get speed() {
          return this.getAll('speed');
        }
        set speed(t) {
          this.setAll('speed', t);
        }
        get startTime() {
          return this.getAll('startTime');
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll('play');
        }
        pause() {
          this.runAll('pause');
        }
        cancel() {
          this.runAll('cancel');
        }
        complete() {
          this.runAll('complete');
        }
      }
    },
    31684: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = new Set(['opacity', 'clipPath', 'filter', 'transform']);
    },
    44176: function (t, e, i) {
      i.d(e, {
        S: function () {
          return c;
        },
      });
      var n = i(22947),
        r = i(99074),
        s = i(6741),
        o = i(73503);
      function a(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let l = ['duration', 'bounce'],
        u = ['stiffness', 'damping', 'mass'];
      function h(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function c({ keyframes: t, restDelta: e, restSpeed: i, ...c }) {
        let d;
        let p = t[0],
          f = t[t.length - 1],
          m = { done: !1, value: p },
          {
            stiffness: v,
            damping: g,
            mass: y,
            duration: x,
            velocity: P,
            isResolvedFromDuration: w,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!h(t, u) && h(t, l)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let l, u;
                (0, s.K)(t <= (0, n.w)(10), 'Spring duration must be 10 seconds or less');
                let h = 1 - e;
                (h = (0, o.u)(0.05, 1, h)),
                  (t = (0, o.u)(0.01, 10, (0, n.X)(t))),
                  h < 1
                    ? ((l = (e) => {
                        let n = e * h,
                          r = n * t;
                        return 0.001 - ((n - i) / a(e, h)) * Math.exp(-r);
                      }),
                      (u = (e) => {
                        let n = e * h * t,
                          r = Math.pow(h, 2) * Math.pow(e, 2) * t,
                          s = a(Math.pow(e, 2), h);
                        return ((n * i + i - r) * Math.exp(-n) * (-l(e) + 0.001 > 0 ? -1 : 1)) / s;
                      }))
                    : ((l = (e) => -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (u = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let c = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(l, u, 5 / t);
                if (((t = (0, n.w)(t)), isNaN(c)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(c, 2) * r;
                  return { stiffness: e, damping: 2 * h * Math.sqrt(r * e), duration: t };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...c, velocity: -(0, n.X)(c.velocity || 0) }),
          T = P || 0,
          b = g / (2 * Math.sqrt(v * y)),
          S = f - p,
          A = (0, n.X)(Math.sqrt(v / y)),
          V = 5 > Math.abs(S);
        if ((i || (i = V ? 0.01 : 2), e || (e = V ? 0.005 : 0.5), b < 1)) {
          let t = a(A, b);
          d = (e) =>
            f -
            Math.exp(-b * A * e) * (((T + b * A * S) / t) * Math.sin(t * e) + S * Math.cos(t * e));
        } else if (1 === b) d = (t) => f - Math.exp(-A * t) * (S + (T + A * S) * t);
        else {
          let t = A * Math.sqrt(b * b - 1);
          d = (e) => {
            let i = Math.exp(-b * A * e),
              n = Math.min(t * e, 300);
            return f - (i * ((T + b * A * S) * Math.sinh(n) + t * S * Math.cosh(n))) / t;
          };
        }
        return {
          calculatedDuration: (w && x) || null,
          next: (t) => {
            let s = d(t);
            if (w) m.done = t >= x;
            else {
              let o = 0;
              b < 1 && (o = 0 === t ? (0, n.w)(T) : (0, r.P)(d, t, s));
              let a = Math.abs(o) <= i,
                l = Math.abs(f - s) <= e;
              m.done = a && l;
            }
            return (m.value = m.done ? f : s), m;
          },
        };
      }
    },
    11537: function (t, e, i) {
      i.d(e, {
        E: function () {
          return n;
        },
        i: function () {
          return r;
        },
      });
      let n = 2e4;
      function r(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < n; ) (e += 50), (i = t.next(e));
        return e >= n ? 1 / 0 : e;
      }
    },
    99074: function (t, e, i) {
      i.d(e, {
        P: function () {
          return r;
        },
      });
      var n = i(39439);
      function r(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, n.R)(i - t(r), e - r);
      }
    },
    97337: function (t, e, i) {
      i.d(e, {
        v: function () {
          return tC;
        },
      });
      var n = i(22947),
        r = i(82548);
      let s = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
        o = (t) => ({
          type: 'spring',
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: 'keyframes', duration: 0.8 },
        l = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (t, { keyframes: e }) =>
          e.length > 2 ? a : r.G.has(t) ? (t.startsWith('scale') ? o(e[1]) : s) : l;
      var h = i(7670),
        c = i(20268);
      let d = { current: !1 },
        p = (t) => null !== t;
      function f(t, { repeat: e, repeatType: i = 'loop' }, n) {
        let r = t.filter(p),
          s = e && 'loop' !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      var m = i(79767),
        v = i(75211),
        g = i(30528),
        y = i(39994),
        x = i(13411),
        P = i(75099),
        w = i(6741),
        T = i(34408);
      let b = (t, e) =>
        'zIndex' !== e &&
        !!(
          'number' == typeof t ||
          Array.isArray(t) ||
          ('string' == typeof t && (T.P.test(t) || '0' === t) && !t.startsWith('url('))
        );
      class S {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = 'keyframes',
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = 'loop',
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = x.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return this._resolved || this.hasAttemptedResolve || (0, P.m)(), this._resolved;
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = x.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ('display' === e || 'visibility' === e) return !0;
              let s = t[t.length - 1],
                o = b(r, e),
                a = b(s, e);
              return (
                (0, w.K)(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
                  })(t) ||
                    ('spring' === i && n))
              );
            })(t, i, n, r)
          ) {
            if (d.current || !s) {
              null == a || a(f(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }), this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var A = i(44176),
        V = i(99074);
      function C({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / n),
          w = (t) => x + P(t),
          T = (t) => {
            let e = P(t),
              i = w(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : i);
          },
          b = (t) => {
            m(f.value) &&
              ((c = t),
              (d = (0, A.S)({
                keyframes: [f.value, v(f.value)],
                velocity: (0, V.P)(w, t, f.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          b(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), T(t), b(t)), void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || T(t), f);
            },
          }
        );
      }
      let D = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function M(t, e, i, n) {
        if (t === e && i === n) return y.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do (s = D((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : D(r(t), e, n));
      }
      let E = M(0.42, 0, 1, 1),
        R = M(0, 0, 0.58, 1),
        k = M(0.42, 0, 0.58, 1);
      var j = i(45180),
        L = i(71269),
        F = i(97180),
        O = i(58760);
      let B = M(0.33, 1.53, 0.69, 0.99),
        W = (0, O.M)(B),
        $ = (0, F.o)(W),
        U = {
          linear: y.Z,
          easeIn: E,
          easeInOut: k,
          easeOut: R,
          circIn: L.Z7,
          circInOut: L.X7,
          circOut: L.Bn,
          backIn: W,
          backInOut: $,
          backOut: B,
          anticipate: (t) => ((t *= 2) < 1 ? 0.5 * W(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
        },
        I = (t) => {
          if (Array.isArray(t)) {
            (0, w.k)(4 === t.length, 'Cubic bezier arrays must contain four numerical values.');
            let [e, i, n, r] = t;
            return M(e, i, n, r);
          }
          return 'string' == typeof t
            ? ((0, w.k)(void 0 !== U[t], `Invalid easing type '${t}'`), U[t])
            : t;
        };
      var N = i(73503),
        X = i(36599),
        z = i(17406),
        Y = i(77784);
      function H(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var K = i(68884),
        _ = i(59041),
        G = i(32454);
      function Z(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let q = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        J = [K.$, _.m, G.J],
        Q = (t) => J.find((e) => e.test(t));
      function tt(t) {
        let e = Q(t);
        if (
          ((0, w.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === G.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = H(a, n, t + 1 / 3)), (s = H(a, n, t)), (o = H(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let te = (t, e) => {
        let i = tt(t),
          n = tt(e);
        if (!i || !n) return Z(t, e);
        let r = { ...i };
        return (t) => (
          (r.red = q(i.red, n.red, t)),
          (r.green = q(i.green, n.green, t)),
          (r.blue = q(i.blue, n.blue, t)),
          (r.alpha = (0, Y.t)(i.alpha, n.alpha, t)),
          _.m.transform(r)
        );
      };
      var ti = i(28368),
        tn = i(91016);
      let tr = new Set(['none', 'hidden']);
      function ts(t, e) {
        return (i) => (0, Y.t)(t, e, i);
      }
      function to(t) {
        return 'number' == typeof t
          ? ts
          : 'string' == typeof t
            ? (0, tn.t)(t)
              ? Z
              : ti.$.test(t)
                ? te
                : tu
            : Array.isArray(t)
              ? ta
              : 'object' == typeof t
                ? ti.$.test(t)
                  ? te
                  : tl
                : Z;
      }
      function ta(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => to(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function tl(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = to(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let tu = (t, e) => {
        let i = T.P.createTransformer(e),
          n = (0, T.V)(t),
          r = (0, T.V)(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (tr.has(t) && !r.values.length) || (tr.has(e) && !n.values.length)
            ? tr.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, X.z)(
                ta(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, r),
                  r.values
                ),
                i
              )
          : ((0, w.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            Z(t, e));
      };
      function th(t, e, i) {
        return 'number' == typeof t && 'number' == typeof e && 'number' == typeof i
          ? (0, Y.t)(t, e, i)
          : to(t)(t, e);
      }
      var tc = i(94730);
      function td({ duration: t = 300, keyframes: e, times: i, ease: n = 'easeInOut' }) {
        let r = (0, j.N)(n) ? n.map(I) : I(n),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let s = t.length;
            if (
              ((0, w.k)(s === e.length, 'Both input and output ranges must be the same length'),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  r = i || th,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[i] || y.Z : e;
                    s = (0, X.z)(t, s);
                  }
                  n.push(s);
                }
                return n;
              })(e, n, r),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = (0, z.Y)(t[i], t[i + 1], e);
                return o[i](n);
              };
            return i ? (e) => l((0, N.u)(t[0], t[s - 1], e)) : l;
          })(
            (i && i.length === e.length ? i : (0, tc.Y)(e)).map((e) => e * t),
            e,
            { ease: Array.isArray(r) ? r : e.map(() => r || k).splice(0, e.length - 1) }
          );
        return { calculatedDuration: t, next: (e) => ((s.value = o(e)), (s.done = e >= t), s) };
      }
      var tp = i(11537);
      let tf = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => m.Wi.update(e, !0),
            stop: () => (0, m.Pn)(e),
            now: () => (m.frameData.isProcessing ? m.frameData.timestamp : x.X.now()),
          };
        },
        tm = { decay: C, inertia: C, tween: td, keyframes: td, spring: A.S },
        tv = (t) => t / 100;
      class tg extends S {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = 'running'),
            (this.startTime = null),
            (this.state = 'idle'),
            (this.stop = () => {
              if ((this.resolver.cancel(), (this.isStopped = !0), 'idle' === this.state)) return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let { name: e, motionValue: i, element: n, keyframes: r } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || P.e;
          (this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = 'keyframes',
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = tm[n] || td;
          l !== td &&
            'number' != typeof t[0] &&
            ((e = (0, X.z)(tv, th(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          'mirror' === o && (i = l({ ...this.options, keyframes: [...t].reverse(), velocity: -a })),
            null === u.calculatedDuration && (u.calculatedDuration = (0, tp.i)(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            'paused' !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let { delay: c, repeat: d, repeatType: p, repeatDelay: m, onUpdate: v } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime = Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            'finished' === this.state && null === this.holdTime && (this.currentTime = u);
          let x = this.currentTime,
            P = r;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ('reverse' === p ? ((i = 1 - i), m && (i -= m / h)) : 'mirror' === p && (P = s)),
              (x = (0, N.u)(0, 1, i) * h);
          }
          let w = y ? { done: !1, value: a[0] } : P.next(x);
          o && (w.value = o(w.value));
          let { done: T } = w;
          y || null === l || (T = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ('finished' === this.state || ('running' === this.state && T));
          return (
            b && void 0 !== n && (w.value = f(a, this.options, n)),
            v && v(w.value),
            b && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, n.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, n.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, n.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver && (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = (0, n.X)(this.currentTime));
        }
        play() {
          if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
            this.pendingPlayState = 'running';
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tf, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
              ? 'finished' === this.state && (this.startTime = n)
              : (this.startTime = null != i ? i : this.calcStartTime()),
            'finished' === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = 'running'),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = 'paused';
            return;
          }
          (this.state = 'paused'),
            (this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          'running' !== this.state && this.play(),
            (this.pendingPlayState = this.state = 'finished'),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = 'finished');
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = 'idle'),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      var ty = i(31684);
      let tx = (t) => Array.isArray(t) && 'number' == typeof t[0],
        tP = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        tw = {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
          circIn: tP([0, 0.65, 0.55, 1]),
          circOut: tP([0.55, 0, 1, 0.45]),
          backIn: tP([0.31, 0.01, 0.66, -0.59]),
          backOut: tP([0.33, 1.53, 0.69, 0.99]),
        };
      function tT(t) {
        return tb(t) || tw.easeOut;
      }
      function tb(t) {
        if (t) return tx(t) ? tP(t) : Array.isArray(t) ? t.map(tT) : tw[t];
      }
      let tS = (0, g.X)(() => Object.hasOwnProperty.call(Element.prototype, 'animate'));
      class tA extends S {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, element: n, keyframes: r } = this.options;
          (this.resolver = new v.s(r, (t, e) => this.onKeyframesResolved(t, e), e, i, n)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current)) return !1;
          if (
            'spring' === (n = this.options).type ||
            !(function t(e) {
              return !!(
                !e ||
                ('string' == typeof e && e in tw) ||
                tx(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(n.ease)
          ) {
            let { onComplete: e, onUpdate: i, motionValue: n, element: l, ...u } = this.options,
              h = (function (t, e) {
                let i = new tg({ ...e, keyframes: t, repeat: 0, delay: 0, isGenerator: !0 }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; ) r.push((n = i.sample(s)).value), (s += 10);
                return { times: void 0, keyframes: r, duration: s - 10, ease: 'linear' };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = 'keyframes');
          }
          let c = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = 'loop',
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = tb(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? 'linear' : h,
                fill: 'both',
                iterations: s + 1,
                direction: 'reverse' === o ? 'alternate' : 'normal',
              })
            );
          })(l.owner.current, u, t, { ...this.options, duration: r, times: s, ease: o });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(f(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            { animation: c, duration: r, times: s, type: a, ease: o, keyframes: t }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, n.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, n.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, n.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return 'idle';
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return y.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return y.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          'finished' === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if ((this.resolver.cancel(), (this.isStopped = !0), 'idle' === this.state)) return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e, keyframes: i, duration: r, type: s, ease: o, times: a } = t;
          if ('idle' === e.playState || 'finished' === e.playState) return;
          if (this.time) {
            let { motionValue: t, onUpdate: e, onComplete: l, element: u, ...h } = this.options,
              c = new tg({
                ...h,
                keyframes: i,
                duration: r,
                type: s,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              d = (0, n.w)(this.time);
            t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let { motionValue: e, name: i, repeatDelay: n, repeatType: r, damping: s, type: o } = t;
          return (
            tS() &&
            i &&
            ty.t.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            'mirror' !== r &&
            0 !== s &&
            'inertia' !== o
          );
        }
      }
      var tV = i(18164);
      let tC =
        (t, e, i, r = {}, s, o, a) =>
        (l) => {
          let p = (0, h.e)(r, t) || {},
            v = p.delay || r.delay || 0,
            { elapsed: g = 0 } = r;
          g -= (0, n.w)(v);
          let y = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: 'easeOut',
            velocity: e.getVelocity(),
            ...p,
            delay: -g,
            onUpdate: (t) => {
              e.set(t), p.onUpdate && p.onUpdate(t);
            },
            onComplete: () => {
              l(), p.onComplete && p.onComplete(), a && a();
            },
            onStop: a,
            name: t,
            motionValue: e,
            element: o ? void 0 : s,
          };
          (0, h.r)(p) || (y = { ...y, ...u(t, y) }),
            y.duration && (y.duration = (0, n.w)(y.duration)),
            y.repeatDelay && (y.repeatDelay = (0, n.w)(y.repeatDelay)),
            void 0 !== y.from && (y.keyframes[0] = y.from);
          let x = !1;
          if (
            ((!1 !== y.type && (0 !== y.duration || y.repeatDelay)) ||
              ((y.duration = 0), 0 !== y.delay || (x = !0)),
            (d.current || c.c.skipAnimations) && ((x = !0), (y.duration = 0), (y.delay = 0)),
            x && !o && void 0 !== e.get())
          ) {
            let t = f(y.keyframes, p);
            if (void 0 !== t)
              return (
                m.Wi.update(() => {
                  y.onUpdate(t), y.onComplete();
                }),
                new tV.s([])
              );
          }
          return !o && tA.supports(y) ? new tA(y) : new tg(y);
        };
    },
    22490: function (t, e, i) {
      i.d(e, {
        D: function () {
          return o;
        },
      });
      var n = i(97337),
        r = i(30729),
        s = i(83237);
      function o(t, e, i) {
        let o = (0, s.i)(t) ? t : (0, r.BX)(t);
        return o.start((0, n.v)('', o, e, i)), o.animation;
      }
    },
    95421: function (t, e, i) {
      i.d(e, {
        w: function () {
          return d;
        },
      });
      var n = i(82548),
        r = i(97337),
        s = i(32448),
        o = i(30729),
        a = i(54112),
        l = i(7670),
        u = i(67921),
        h = i(74044),
        c = i(79767);
      function d(t, e, { delay: i = 0, transitionOverride: d, type: p } = {}) {
        var f;
        let { transition: m = t.getDefaultTransition(), transitionEnd: v, ...g } = e;
        d && (m = d);
        let y = [],
          x = p && t.animationState && t.animationState.getState()[p];
        for (let e in g) {
          let s = t.getValue(e, null !== (f = t.latestValues[e]) && void 0 !== f ? f : null),
            o = g[e];
          if (
            void 0 === o ||
            (x &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(x, e))
          )
            continue;
          let a = { delay: i, ...(0, l.e)(m || {}, e) },
            d = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, u.s)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, c.Wi);
              null !== t && ((a.startTime = t), (d = !0));
            }
          }
          s.start(
            (0, r.v)(
              e,
              s,
              o,
              t.shouldReduceMotion && n.G.has(e) ? { type: !1 } : a,
              t,
              d,
              (0, h.K)(t, e)
            )
          );
          let p = s.animation;
          p && y.push(p);
        }
        return (
          v &&
            Promise.all(y).then(() => {
              c.Wi.update(() => {
                v &&
                  (function (t, e) {
                    let { transitionEnd: i = {}, transition: n = {}, ...r } = (0, a.x)(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = (0, s.Y)(r[e]);
                      t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, o.BX)(i));
                    }
                  })(t, v);
              });
            }),
          y
        );
      }
    },
    59314: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = 'data-' + (0, i(9266).D)('framerAppearId');
    },
    67921: function (t, e, i) {
      i.d(e, {
        s: function () {
          return r;
        },
      });
      var n = i(59314);
      function r(t) {
        return t.getProps()[n.M];
      }
    },
    98918: function (t, e, i) {
      i.d(e, {
        H: function () {
          return n;
        },
      });
      function n(t) {
        return null !== t && 'object' == typeof t && 'function' == typeof t.start;
      }
    },
    96753: function (t, e, i) {
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    7670: function (t, e, i) {
      function n({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: n,
        staggerDirection: r,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function r(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, {
        e: function () {
          return r;
        },
        r: function () {
          return n;
        },
      });
    },
    88578: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(58854).createContext)({});
    },
    69721: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(58854).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: 'never',
      });
    },
    30563: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(58854).createContext)(null);
    },
    71269: function (t, e, i) {
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var n = i(97180),
        r = i(58760);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, n.o)(s);
    },
    97180: function (t, e, i) {
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2);
    },
    58760: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    45180: function (t, e, i) {
      i.d(e, {
        N: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t) && 'number' != typeof t[0];
    },
    67582: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = i(20268);
      let r = ['read', 'resolveKeyframes', 'update', 'preRender', 'render', 'postRender'];
      function s(t, e) {
        let i = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return r && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (n = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          { read: u, resolveKeyframes: h, update: c, preRender: d, render: p, postRender: f } = l,
          m = () => {
            let r = n.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = s ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              c.process(o),
              d.process(o),
              p.process(o),
              f.process(o),
              (o.isProcessing = !1),
              i && e && ((s = !1), t(m));
          },
          v = () => {
            (i = !0), (s = !0), o.isProcessing || t(m);
          };
        return {
          schedule: r.reduce((t, e) => {
            let n = l[e];
            return (t[e] = (t, e = !1, r = !1) => (i || v(), n.schedule(t, e, r))), t;
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    79767: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var n = i(39994);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(67582).Z)(
        'undefined' != typeof requestAnimationFrame ? requestAnimationFrame : n.Z,
        !0
      );
    },
    13411: function (t, e, i) {
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(20268),
        s = i(79767);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    42685: function (t, e, i) {
      i.d(e, {
        featureDefinitions: function () {
          return r;
        },
      });
      let n = {
          animation: [
            'animate',
            'variants',
            'whileHover',
            'whileTap',
            'exit',
            'whileInView',
            'whileFocus',
            'whileDrag',
          ],
          exit: ['exit'],
          drag: ['drag', 'dragControls'],
          focus: ['whileFocus'],
          hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
          tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
          pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
          inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
          layout: ['layout', 'layoutId'],
        },
        r = {};
      for (let t in n) r[t] = { isEnabled: (e) => n[t].some((t) => !!e[t]) };
    },
    39292: function (t, e, i) {
      i.d(e, {
        j: function () {
          return s;
        },
      });
      var n = i(3649),
        r = i(82548);
      function s(t, { layout: e, layoutId: i }) {
        return (
          r.G.has(t) ||
          t.startsWith('origin') ||
          ((e || void 0 !== i) && (!!n.P[t] || 'opacity' === t))
        );
      }
    },
    27124: function (t, e, i) {
      function n({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function r({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let i = e({ x: t.left, y: t.top }),
          n = e({ x: t.right, y: t.bottom });
        return { top: i.y, left: i.x, bottom: n.y, right: n.x };
      }
      i.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return n;
        },
        z2: function () {
          return r;
        },
      });
    },
    30550: function (t, e, i) {
      i.d(e, {
        D2: function () {
          return d;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return h;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var n = i(77784),
        r = i(2463);
      function s(t, e, i) {
        return i + e * (t - i);
      }
      function o(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function a(t, e = 0, i = 1, n, r) {
        (t.min = o(t.min, e, i, n, r)), (t.max = o(t.max, e, i, n, r));
      }
      function l(t, { x: e, y: i }) {
        a(t.x, e.translate, e.scale, e.originPoint), a(t.y, i.translate, i.scale, i.originPoint);
      }
      function u(t, e, i, n = !1) {
        let s, o;
        let a = i.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = i[u]).projectionDelta;
            let { visualElement: a } = s.options;
            (!a || !a.props.style || 'contents' !== a.props.style.display) &&
              (n &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                d(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              n && (0, r.ud)(s.latestValues) && d(t, s.latestValues));
          }
          e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
        }
      }
      function h(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function c(t, e, i, r, s = 0.5) {
        let o = (0, n.t)(t.min, t.max, s);
        a(t, e, i, o, r);
      }
      function d(t, e) {
        c(t.x, e.x, e.scaleX, e.scale, e.originX), c(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    30801: function (t, e, i) {
      i.d(e, {
        dO: function () {
          return o;
        },
        wc: function () {
          return r;
        },
      });
      let n = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r = () => ({ x: n(), y: n() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    3649: function (t, e, i) {
      i.d(e, {
        B: function () {
          return r;
        },
        P: function () {
          return n;
        },
      });
      let n = {};
      function r(t) {
        Object.assign(n, t);
      }
    },
    2463: function (t, e, i) {
      function n(t) {
        return void 0 === t || 1 === t;
      }
      function r({ scale: t, scaleX: e, scaleY: i }) {
        return !n(t) || !n(e) || !n(i);
      }
      function s(t) {
        return r(t) || o(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
      }
      function o(t) {
        var e, i;
        return ((e = t.x) && '0%' !== e) || ((i = t.y) && '0%' !== i);
      }
      i.d(e, {
        D_: function () {
          return o;
        },
        Lj: function () {
          return r;
        },
        ud: function () {
          return s;
        },
      });
    },
    55149: function (t, e, i) {
      i.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var n = i(27124),
        r = i(30550);
      function s(t, e) {
        return (0, n.i8)((0, n.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, i) {
        let n = s(t, i),
          { scroll: o } = e;
        return o && ((0, r.am)(n.x, o.offset.x), (0, r.am)(n.y, o.offset.y)), n;
      }
    },
    75211: function (t, e, i) {
      i.d(e, {
        s: function () {
          return f;
        },
      });
      var n = i(38631),
        r = i(6741),
        s = i(8998),
        o = i(91016);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(51768),
        u = i(27613),
        h = i(75099),
        c = i(34408),
        d = i(585);
      let p = new Set(['auto', 'none', '0']);
      class f extends h.e {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ('string' == typeof n && ((n = n.trim()), (0, o.t)(n))) {
              let l = (function t(e, i, n = 1) {
                (0, r.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [l, u] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!l) return;
                let h = window.getComputedStyle(i).getPropertyValue(l);
                if (h) {
                  let t = h.trim();
                  return (0, s.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(u) ? t(u, i, n + 1) : u;
              })(n, e.current);
              void 0 !== l && (t[i] = l), i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(i) || 2 !== t.length)) return;
          let [n, h] = t,
            c = (0, u.C)(n),
            d = (0, u.C)(h);
          if (c !== d) {
            if ((0, l.mP)(c) && (0, l.mP)(d))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                'string' == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ('number' == typeof (r = t[e])
              ? 0 === r
              : null === r || 'none' === r || '0' === r || (0, n.W)(r)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                'string' == typeof e && !p.has(e) && (0, c.V)(e).values.length && (n = t[r]), r++;
              }
              if (n && i) for (let r of e) t[r] = (0, d.T)(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          'height' === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = l.lw[i](e.measureViewportBox(), window.getComputedStyle(e.current))),
            null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    25148: function (t, e, i) {
      i.d(e, {
        J: function () {
          return R;
        },
      });
      var n = i(92045),
        r = i(63459),
        s = i(71158),
        o = i(30729),
        a = i(83237),
        l = i(82548),
        u = i(61710),
        h = i(22897),
        c = i(82980),
        d = i(42685),
        p = i(55191),
        f = i(33036),
        m = i(75099),
        v = i(8998),
        g = i(38631),
        y = i(28368),
        x = i(34408),
        P = i(27613),
        w = i(108);
      let T = [...P.$, y.$, x.P],
        b = (t) => T.find((0, w.l)(t));
      var S = i(585),
        A = i(30801),
        V = i(79767);
      let C = [
          'AnimationStart',
          'AnimationComplete',
          'Update',
          'BeforeLayoutMeasure',
          'LayoutMeasure',
          'LayoutAnimationStart',
          'LayoutAnimationComplete',
        ],
        D = p.V.length;
      class M {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = m.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
            (this.render = () => {
              (this.isRenderScheduled = !1),
                this.current &&
                  (this.triggerBuild(),
                  this.renderInstance(
                    this.current,
                    this.renderState,
                    this.props.style,
                    this.projection
                  ));
            }),
            (this.isRenderScheduled = !1),
            (this.scheduleRender = () => {
              this.isRenderScheduled ||
                ((this.isRenderScheduled = !0), V.Wi.render(this.render, !1, !0));
            });
          let { latestValues: l, renderState: h } = s;
          (this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = e.initial ? { ...l } : {}),
            (this.renderState = h),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, u.G)(e)),
            (this.isVariantNode = (0, u.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: c, ...d } = this.scrapeMotionValuesFromProps(e, {}, this);
          for (let t in d) {
            let e = d[t];
            void 0 !== l[t] && (0, a.i)(e) && e.set(l[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            f.R.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            r.O.current || (0, n.A)(),
            (this.shouldReduceMotion =
              'never' !== this.reducedMotionConfig &&
              ('always' === this.reducedMotionConfig || r.n.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (f.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, V.Pn)(this.notifyUpdate),
          (0, V.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let i = l.G.has(t),
            n = e.on('change', (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && V.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on('renderRequest', this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = 'animation';
          for (t in d.featureDefinitions) {
            let e = d.featureDefinitions[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, A.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < C.length; e++) {
            let i = C[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            let n = t['on' + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if ((0, a.i)(r)) t.addValue(n, r);
              else if ((0, a.i)(s)) t.addValue(n, (0, o.BX)(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, o.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return void 0 !== this.props.initial && (t.initial = this.props.initial), t;
          }
          let e = {};
          for (let t = 0; t < D; t++) {
            let i = p.V[t],
              n = this.props[i];
            ((0, h.$)(n) || !1 === n) && (e[i] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t);
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, o.BX)(null === e ? void 0 : e, { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ('string' == typeof n && ((0, v.P)(n) || (0, g.W)(n))
                ? (n = parseFloat(n))
                : !b(n) && x.P.test(e) && (n = (0, S.T)(t, e)),
              this.setBaseTarget(t, (0, a.i)(n) ? n.get() : n)),
            (0, a.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ('string' == typeof n || 'object' == typeof n) {
            let r = (0, c.o)(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, a.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new s.L()), this.events[t].add(e);
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var E = i(75211);
      class R extends M {
        constructor() {
          super(...arguments), (this.KeyframeResolver = E.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
    },
    81289: function (t, e, i) {
      i.d(e, {
        E: function () {
          return iT;
        },
      });
      var n = i(75040),
        r = i(58854),
        s = i(69721);
      let o = (0, r.createContext)({});
      var a = i(30563),
        l = i(86012);
      let u = (0, r.createContext)({ strict: !1 });
      var h = i(59314);
      let { schedule: c, cancel: d } = (0, i(67582).Z)(queueMicrotask, !1);
      function p(t) {
        return t && 'object' == typeof t && Object.prototype.hasOwnProperty.call(t, 'current');
      }
      let f = (0, r.createContext)({}),
        m = !1;
      function v() {
        window.MotionHandoffIsComplete = !0;
      }
      var g = i(22897),
        y = i(61710);
      function x(t) {
        return Array.isArray(t) ? t.join(' ') : t;
      }
      var P = i(42685),
        w = i(40345),
        T = i(88578);
      let b = Symbol.for('motionComponentSymbol'),
        S = [
          'animate',
          'circle',
          'defs',
          'desc',
          'ellipse',
          'g',
          'image',
          'line',
          'filter',
          'marker',
          'mask',
          'metadata',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'rect',
          'stop',
          'switch',
          'symbol',
          'svg',
          'text',
          'tspan',
          'use',
          'view',
        ];
      function A(t) {
        if ('string' != typeof t || t.includes('-'));
        else if (S.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var V = i(39292),
        C = i(83237),
        D = i(54149);
      let M = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
      function E(t, e, i) {
        for (let n in e) (0, C.i)(e[n]) || (0, V.j)(n, i) || (t[n] = e[n]);
      }
      var R = i(57962),
        k = i(94638);
      let j = () => ({ ...M(), attrs: {} });
      var L = i(11152),
        F = i(71549),
        O = i(92235),
        B = i(98918),
        W = i(82980),
        $ = i(38807),
        U = i(32448);
      function I(t) {
        let e = (0, C.i)(t) ? t.get() : t;
        return (0, U.p)(e) ? e.toValue() : e;
      }
      var N = i(73843),
        X = i(6253);
      let z = (t) => (e, i) => {
        let n = (0, r.useContext)(o),
          s = (0, r.useContext)(a.O),
          l = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: n,
              },
              r,
              s,
              o,
              a
            ) {
              let l = {
                latestValues: (function (t, e, i, n, r) {
                  var s;
                  let o = {},
                    a = [],
                    l =
                      n &&
                      (null === (s = t.style) || void 0 === s ? void 0 : s.willChange) === void 0,
                    u = r(t, {});
                  for (let t in u) o[t] = I(u[t]);
                  let { initial: h, animate: c } = t,
                    d = (0, y.G)(t),
                    p = (0, y.M)(t);
                  e &&
                    p &&
                    !d &&
                    !1 !== t.inherit &&
                    (void 0 === h && (h = e.initial), void 0 === c && (c = e.animate));
                  let f = !!i && !1 === i.initial,
                    m = (f = f || !1 === h) ? c : h;
                  return (
                    m &&
                      'boolean' != typeof m &&
                      !(0, B.H)(m) &&
                      Y(t, m, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = f ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (o[e] = i);
                        }
                        for (let t in e) o[t] = e[t];
                      }),
                    l &&
                      (c &&
                        !1 !== h &&
                        !(0, B.H)(c) &&
                        Y(t, c, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = (0, N.p)(e);
                              i && (0, X.y4)(t, i);
                            })(a, e);
                        }),
                      a.length && (o.willChange = a.join(','))),
                    o
                  );
                })(r, s, o, !a && t, e),
                renderState: i(),
              };
              return n && (l.mount = (t) => n(r, t, l)), l;
            })(t, e, n, s, i);
        return i ? l() : (0, $.h)(l);
      };
      function Y(t, e, i) {
        let n = Array.isArray(e) ? e : [e];
        for (let e = 0; e < n.length; e++) {
          let r = (0, W.o)(t, n[e]);
          if (r) {
            let { transitionEnd: t, transition: e, ...n } = r;
            i(n, t);
          }
        }
      }
      var H = i(79767);
      let K = {
          useVisualState: z({
            scrapeMotionValuesFromProps: O.U,
            createRenderState: j,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              H.Wi.read(() => {
                try {
                  i.dimensions =
                    'function' == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                H.Wi.render(() => {
                  (0, k.i)(i, n, (0, L.a)(e.tagName), t.transformTemplate), (0, F.K)(e, i);
                });
            },
          }),
        },
        _ = {
          useVisualState: z({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: i(90713).U,
            createRenderState: M,
          }),
        };
      function G(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let Z = (t) =>
        'mouse' === t.pointerType
          ? 'number' != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function q(t, e = 'page') {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let J = (t) => (e) => Z(e) && t(e, q(e));
      function Q(t, e, i, n) {
        return G(t, e, J(i), n);
      }
      var tt = i(36599);
      function te(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let ti = te('dragHorizontal'),
        tn = te('dragVertical');
      function tr(t) {
        let e = !1;
        if ('y' === t) e = tn();
        else if ('x' === t) e = ti();
        else {
          let t = ti(),
            i = tn();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function ts() {
        let t = tr(!0);
        return !t || (t(), !1);
      }
      class to {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function ta(t, e) {
        let i = e ? 'onHoverStart' : 'onHoverEnd';
        return Q(
          t.current,
          e ? 'pointerenter' : 'pointerleave',
          (n, r) => {
            if ('touch' === n.pointerType || ts()) return;
            let s = t.getProps();
            t.animationState && s.whileHover && t.animationState.setActive('whileHover', e);
            let o = s[i];
            o && H.Wi.postRender(() => o(n, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class tl extends to {
        mount() {
          this.unmount = (0, tt.z)(ta(this.node, !0), ta(this.node, !1));
        }
        unmount() {}
      }
      class tu extends to {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(':focus-visible');
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tt.z)(
            G(this.node.current, 'focus', () => this.onFocus()),
            G(this.node.current, 'blur', () => this.onBlur())
          );
        }
        unmount() {}
      }
      let th = (t, e) => !!e && (t === e || th(t, e.parentElement));
      var tc = i(39994);
      function td(t, e) {
        if (!e) return;
        let i = new PointerEvent('pointer' + t);
        e(i, q(i));
      }
      class tp extends to {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tc.Z),
            (this.removeEndListeners = tc.Z),
            (this.removeAccessibleListeners = tc.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = Q(
                  window,
                  'pointerup',
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let { onTap: i, onTapCancel: n, globalTapTarget: r } = this.node.getProps(),
                      s = r || th(this.node.current, t.target) ? i : n;
                    s && H.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = Q(window, 'pointercancel', (t, e) => this.cancelPress(t, e), {
                  passive: !(i.onTapCancel || i.onPointerCancel),
                });
              (this.removeEndListeners = (0, tt.z)(n, r)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = G(this.node.current, 'keydown', (t) => {
                  'Enter' !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = G(this.node.current, 'keyup', (t) => {
                      'Enter' === t.key &&
                        this.checkPressEnd() &&
                        td('up', (t, e) => {
                          let { onTap: i } = this.node.getProps();
                          i && H.Wi.postRender(() => i(t, e));
                        });
                    })),
                    td('down', (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = G(this.node.current, 'blur', () => {
                  this.isPressing && td('cancel', (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tt.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
            i && H.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive('whileTap', !1),
            !ts()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && H.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = Q(
              t.globalTapTarget ? window : this.node.current,
              'pointerdown',
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = G(this.node.current, 'focus', this.startAccessiblePress);
          this.removeStartListeners = (0, tt.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
        }
      }
      let tf = new WeakMap(),
        tm = new WeakMap(),
        tv = (t) => {
          let e = tf.get(t.target);
          e && e(t);
        },
        tg = (t) => {
          t.forEach(tv);
        },
        ty = { some: 0, all: 1 };
      class tx extends to {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = 'some', once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: 'number' == typeof n ? n : ty[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              tm.has(i) || tm.set(i, {});
              let n = tm.get(i),
                r = JSON.stringify(e);
              return n[r] || (n[r] = new IntersectionObserver(tg, { root: t, ...e })), n[r];
            })(e);
            return (
              tf.set(t, i),
              n.observe(t),
              () => {
                tf.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (this.isInView === e || ((this.isInView = e), r && !e && this.hasEnteredView))
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState && this.node.animationState.setActive('whileInView', e);
            let { onViewportEnter: i, onViewportLeave: n } = this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ('undefined' == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ['amount', 'margin', 'root'].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var tP = i(96753);
      function tw(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var tT = i(54112),
        tb = i(55191),
        tS = i(95421);
      function tA(t, e, i = {}) {
        var n;
        let r = (0, tT.x)(
            t,
            e,
            'exit' === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => Promise.all((0, tS.w)(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let { delayChildren: r = 0, staggerChildren: o, staggerDirection: a } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(tV)
                        .forEach((t, n) => {
                          t.notify('AnimationStart', e),
                            o.push(
                              tA(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify('AnimationComplete', e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = 'beforeChildren' === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function tV(t, e) {
        return t.sortNodePosition(e);
      }
      let tC = [...tb.e].reverse(),
        tD = tb.e.length;
      function tM(t = !1) {
        return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
      }
      function tE() {
        return {
          animate: tM(!0),
          whileInView: tM(),
          whileHover: tM(),
          whileTap: tM(),
          whileDrag: tM(),
          whileFocus: tM(),
          exit: tM(),
        };
      }
      class tR extends to {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify('AnimationStart', e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => tA(t, e, i)));
                          else if ('string' == typeof e) n = tA(t, e, i);
                          else {
                            let r = 'function' == typeof e ? (0, tT.x)(t, e, i.custom) : e;
                            n = Promise.all((0, tS.w)(t, r, i));
                          }
                          return n.then(() => {
                            t.notify('AnimationComplete', e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = tE(),
                  n = !0,
                  r = (e) => (i, n) => {
                    var r;
                    let s = (0, tT.x)(
                      t,
                      n,
                      'exit' === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    c = 1 / 0;
                  for (let e = 0; e < tD; e++) {
                    var d;
                    let p = tC[e],
                      f = i[p],
                      m = void 0 !== o[p] ? o[p] : a[p],
                      v = (0, g.$)(m),
                      y = p === s ? f.isActive : null;
                    !1 === y && (c = e);
                    let x = m === a[p] && m !== o[p] && v;
                    if (
                      (x && n && t.manuallyAnimateOnMount && (x = !1),
                      (f.protectedKeys = { ...h }),
                      (!f.isActive && null === y) ||
                        (!m && !f.prevProp) ||
                        (0, B.H)(m) ||
                        'boolean' == typeof m)
                    )
                      continue;
                    let P =
                        ((d = f.prevProp),
                        ('string' == typeof m ? m !== d : !!Array.isArray(m) && !tw(m, d)) ||
                          (p === s && f.isActive && !x && v) ||
                          (e > c && v)),
                      w = !1,
                      T = Array.isArray(m) ? m : [m],
                      b = T.reduce(r(p), {});
                    !1 === y && (b = {});
                    let { prevResolvedValues: S = {} } = f,
                      A = { ...S, ...b },
                      V = (e) => {
                        (P = !0), u.has(e) && ((w = !0), u.delete(e)), (f.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in A) {
                      let e = b[t],
                        i = S[t];
                      if (!h.hasOwnProperty(t))
                        ((0, tP.C)(e) && (0, tP.C)(i) ? tw(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? V(t)
                            : (f.protectedKeys[t] = !0)
                          : null != e
                            ? V(t)
                            : u.add(t);
                    }
                    (f.prevProp = m),
                      (f.prevResolvedValues = b),
                      f.isActive && (h = { ...h, ...b }),
                      n && t.blockInitialAnimation && (P = !1),
                      P &&
                        (!x || w) &&
                        l.push(...T.map((t) => ({ animation: t, options: { type: p } })));
                  }
                  if (u.size) {
                    let e = {};
                    u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    n &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = tE()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, B.H)(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let tk = 0;
      class tj extends to {
        constructor() {
          super(...arguments), (this.id = tk++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive('exit', !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var tL = i(6741),
        tF = i(22947);
      let tO = (t, e) => Math.abs(t - e);
      class tB {
        constructor(
          t,
          e,
          { transformPagePoint: i, contextWindow: n, dragSnapToOrigin: r = !1 } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = tU(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(tO(t.x, e.x) ** 2 + tO(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = H.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n || (a && a(this.lastMoveEvent, i), (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = tW(e, this.transformPagePoint)),
                H.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let { onEnd: i, onSessionEnd: n, resumeAnimation: r } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = tU(
                'pointercancel' === t.type
                  ? this.lastMoveEventInfo
                  : tW(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !Z(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = tW(q(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = H.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, tU(s, this.history)),
            (this.removeListeners = (0, tt.z)(
              Q(this.contextWindow, 'pointermove', this.handlePointerMove),
              Q(this.contextWindow, 'pointerup', this.handlePointerUp),
              Q(this.contextWindow, 'pointercancel', this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), (0, H.Pn)(this.updatePoint);
        }
      }
      function tW(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function t$(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function tU({ point: t }, e) {
        return {
          point: t,
          delta: t$(t, tI(e)),
          offset: t$(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = tI(t);
            for (; i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > (0, tF.w)(0.1))); ) i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, tF.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function tI(t) {
        return t[t.length - 1];
      }
      var tN = i(17406),
        tX = i(77784);
      function tz(t) {
        return t.max - t.min;
      }
      function tY(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, tX.t)(e.min, e.max, t.origin)),
          (t.scale = tz(i) / tz(e)),
          (t.translate = (0, tX.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) && (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) || isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function tH(t, e, i, n) {
        tY(t.x, e.x, i.x, n ? n.originX : void 0), tY(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function tK(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + tz(e));
      }
      function t_(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + tz(e));
      }
      function tG(t, e, i) {
        t_(t.x, e.x, i.x), t_(t.y, e.y, i.y);
      }
      var tZ = i(73503);
      function tq(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function tJ(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n };
      }
      function tQ(t, e, i) {
        return { min: t0(t, e), max: t0(t, i) };
      }
      function t0(t, e) {
        return 'number' == typeof t ? t : t[e] || 0;
      }
      var t1 = i(30801);
      function t5(t) {
        return [t('x'), t('y')];
      }
      var t3 = i(55149),
        t2 = i(27124),
        t9 = i(12119),
        t7 = i(97337);
      let t4 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var t8 = i(74044);
      let t6 = new WeakMap();
      class et {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, t1.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new tB(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(q(t, 'page').point);
              },
              onStart: (t, e) => {
                var i;
                let { drag: n, dragPropagation: r, onDragStart: s } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tr(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  t5((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (t9.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = tz(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && H.Wi.postRender(() => s(t, e)),
                  null === (i = this.removeWillChange) || void 0 === i || i.call(this),
                  (this.removeWillChange = (0, t8.K)(this.visualElement, 'transform'));
                let { animationState: o } = this.visualElement;
                o && o.setActive('whileDrag', !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return Math.abs(t.y) > e ? (i = 'y') : Math.abs(t.x) > e && (i = 'x'), i;
                  })(o)),
                    null !== this.currentDirection && r && r(this.currentDirection);
                  return;
                }
                this.updateAxis('x', e.point, o),
                  this.updateAxis('y', e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                t5((t) => {
                  var e;
                  return (
                    'paused' === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: t4(this.visualElement),
            }
          );
        }
        stop(t, e) {
          var i;
          null === (i = this.removeWillChange) || void 0 === i || i.call(this);
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: s } = this.getProps();
          s && H.Wi.postRender(() => s(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive('whileDrag', !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !ee(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, tX.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i && t > i && (t = n ? (0, tX.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection && !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            r = this.constraints;
          e && p(e)
            ? this.constraints || (this.constraints = this.resolveRefConstraints())
            : e && n
              ? (this.constraints = (function (t, { top: e, left: i, bottom: n, right: r }) {
                  return { x: tq(t.x, i, r), y: tq(t.y, e, n) };
                })(n.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: tQ(t, 'left', 'right'), y: tQ(t, 'top', 'bottom') }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              t5((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } = this.getProps();
          if (!e || !p(e)) return !1;
          let n = e.current;
          (0, tL.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (0, t3.z)(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: tJ((t = r.layout.layoutBox).x, s.x), y: tJ(t.y, s.y) };
          if (i) {
            let t = i((0, t2.z2)(o));
            (this.hasMutatedConstraints = !!t), t && (o = (0, t2.i8)(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            t5((o) => {
              if (!ee(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: 'inertia',
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(
            (0, t7.v)(t, i, 0, e, this.visualElement, !1, (0, t8.K)(this.visualElement, t))
          );
        }
        stopAnimation() {
          t5((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          t5((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0);
        }
        snapToCursor(t) {
          t5((e) => {
            let { drag: i } = this.getProps();
            if (!ee(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, tX.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!p(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          t5((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = tz(t),
                  r = tz(e);
                return (
                  r > n
                    ? (i = (0, tN.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, tN.Y)(t.min, t.max - r, e.min)),
                  (0, tZ.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, '') : 'none'),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            t5((e) => {
              if (!ee(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, tX.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          t6.set(this.visualElement, this);
          let t = Q(this.visualElement.current, 'pointerdown', (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              p(t) && t.current && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener('measure', e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), H.Wi.read(e);
          let r = G(window, 'resize', () => this.scalePositionWithinConstraints()),
            s = i.addEventListener('didUpdate', ({ delta: t, hasLayoutChanged: e }) => {
              this.isDragging &&
                e &&
                (t5((e) => {
                  let i = this.getAxisMotionValue(e);
                  i && ((this.originPoint[e] += t[e].translate), i.set(i.get() + t[e].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function ee(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class ei extends to {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tc.Z),
            (this.removeListeners = tc.Z),
            (this.controls = new et(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tc.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let en = (t) => (e, i) => {
        t && H.Wi.postRender(() => t(e, i));
      };
      class er extends to {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tc.Z);
        }
        onPointerDown(t) {
          this.session = new tB(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: t4(this.node),
          });
        }
        createPanHandlers() {
          let { onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n } = this.node.getProps();
          return {
            onSessionStart: en(t),
            onStart: en(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && H.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = Q(this.node.current, 'pointerdown', (t) =>
            this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let es = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function eo(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ea = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ('string' == typeof t) {
            if (!t9.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = eo(t, e.target.x),
            n = eo(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var el = i(34408),
        eu = i(3649);
      class eh extends r.Component {
        componentDidMount() {
          let { visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n } = this.props,
            { projection: r } = t;
          (0, eu.B)(ed),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener('animationComplete', () => {
                this.safeToRemove();
              }),
              r.setOptions({ ...r.options, onExitComplete: () => this.safeToRemove() })),
            (es.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let { layoutDependency: e, visualElement: i, drag: n, isPresent: r } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    H.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            c.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let { visualElement: t, layoutGroup: e, switchLayoutGroup: i } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function ec(t) {
        let [e, i] = (function () {
            let t = (0, r.useContext)(a.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              s = (0, r.useId)();
            (0, r.useEffect)(() => n(s), []);
            let o = (0, r.useCallback)(() => i && i(s), [s, i]);
            return !e && i ? [!1, o] : [!0];
          })(),
          s = (0, r.useContext)(T.p);
        return (0, n.jsx)(eh, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, r.useContext)(f),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let ed = {
        borderRadius: {
          ...ea,
          applyTo: [
            'borderTopLeftRadius',
            'borderTopRightRadius',
            'borderBottomLeftRadius',
            'borderBottomRightRadius',
          ],
        },
        borderTopLeftRadius: ea,
        borderTopRightRadius: ea,
        borderBottomLeftRadius: ea,
        borderBottomRightRadius: ea,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = el.P.parse(t);
            if (n.length > 5) return t;
            let r = el.P.createTransformer(t),
              s = 'number' != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, tX.t)(o, a, 0.5);
            return (
              'number' == typeof n[2 + s] && (n[2 + s] /= l),
              'number' == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var ep = i(71158),
        ef = i(71269);
      let em = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        ev = em.length,
        eg = (t) => ('string' == typeof t ? parseFloat(t) : t),
        ey = (t) => 'number' == typeof t || t9.px.test(t);
      function ex(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let eP = eT(0, 0.5, ef.Bn),
        ew = eT(0.5, 0.95, tc.Z);
      function eT(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, tN.Y)(t, e, n)));
      }
      function eb(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function eS(t, e) {
        eb(t.x, e.x), eb(t.y, e.y);
      }
      function eA(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      var eV = i(30550);
      function eC(t, e, i, n, r) {
        return (
          (t -= e), (t = (0, eV.q2)(t, 1 / i, n)), void 0 !== r && (t = (0, eV.q2)(t, 1 / r, n)), t
        );
      }
      function eD(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (t9.aQ.test(e) && ((e = parseFloat(e)), (e = (0, tX.t)(o.min, o.max, e / 100) - o.min)),
            'number' != typeof e)
          )
            return;
          let a = (0, tX.t)(s.min, s.max, n);
          t === s && (a -= e), (t.min = eC(t.min, e, i, a, r)), (t.max = eC(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let eM = ['x', 'scaleX', 'originX'],
        eE = ['y', 'scaleY', 'originY'];
      function eR(t, e, i, n) {
        eD(t.x, e, eM, i ? i.x : void 0, n ? n.x : void 0),
          eD(t.y, e, eE, i ? i.y : void 0, n ? n.y : void 0);
      }
      var ek = i(7670);
      function ej(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function eL(t) {
        return ej(t.x) && ej(t.y);
      }
      function eF(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function eO(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
      }
      function eB(t, e) {
        return eO(t.x, e.x) && eO(t.y, e.y);
      }
      function eW(t) {
        return tz(t.x) / tz(t.y);
      }
      function e$(t, e) {
        return (
          t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        );
      }
      class eU {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, X.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, X.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues = i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      var eI = i(2463);
      let eN = (t, e) => t.depth - e.depth;
      class eX {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, X.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, X.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(eN), (this.isDirty = !1), this.children.forEach(t);
        }
      }
      var ez = i(13411),
        eY = i(59565),
        eH = i(22490),
        eK = i(67921);
      let e_ = {
          type: 'projectionFrame',
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        eG = 'undefined' != typeof window && void 0 !== window.MotionDebug,
        eZ = ['', 'X', 'Y', 'Z'],
        eq = { visibility: 'hidden' },
        eJ = 0;
      function eQ(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function e0({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = eJ++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  eG && (e_.totalNodes = e_.resolvedTargetDeltas = e_.recalculatedProjection = 0),
                  this.nodes.forEach(e3),
                  this.nodes.forEach(it),
                  this.nodes.forEach(ie),
                  this.nodes.forEach(e2),
                  eG && window.MotionDebug.record(e_);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new eX());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new ep.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (0, eY.v)(e)), (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = ez.X.now(),
                      n = ({ timestamp: r }) => {
                        let s = r - i;
                        s >= e && ((0, H.Pn)(n), t(s - e));
                      };
                    return H.Wi.read(n, !0), () => (0, H.Pn)(n);
                  })(n, 250)),
                  es.hasAnimatedSinceResize &&
                    ((es.hasAnimatedSinceResize = !1), this.nodes.forEach(e6));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  'didUpdate',
                  ({ delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: n }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r = this.options.transition || s.getDefaultTransition() || il,
                      { onLayoutAnimationStart: o, onLayoutAnimationComplete: a } = s.getProps(),
                      l = !this.targetLayout || !eB(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...(0, ek.e)(r, 'layout'), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || e6(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, H.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0), this.nodes && this.nodes.forEach(ii), this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedTransform &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = (0, eK.s)(i);
                  window.MotionHasOptimisedTransformAnimation(n) &&
                    window.MotionCancelOptimisedTransform(n);
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll('snapshot'),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n ? n(this.latestValues, '') : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners('willUpdate');
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(e7);
              return;
            }
            this.isUpdating || this.nodes.forEach(e4),
              (this.isUpdating = !1),
              this.nodes.forEach(e8),
              this.nodes.forEach(e1),
              this.nodes.forEach(e5),
              this.clearAllSnapshots();
            let t = ez.X.now();
            (H.frameData.delta = (0, tZ.u)(0, 1e3 / 60, t - H.frameData.timestamp)),
              (H.frameData.timestamp = t),
              (H.frameData.isProcessing = !0),
              H.S6.update.process(H.frameData),
              H.S6.preRender.process(H.frameData),
              H.S6.render.process(H.frameData),
              (H.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled || ((this.updateScheduled = !0), c.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(e9), this.sharedNodes.forEach(ir);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              H.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            H.Wi.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, t1.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners('measure', this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e && e.notify('LayoutMeasure', this.layout.layoutBox, t ? t.layoutBox : void 0);
          }
          updateScroll(t = 'measure') {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !eL(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, '') : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || (0, eI.ud)(this.latestValues) || s) &&
              (r(this.instance, n), (this.shouldResetTransform = !1), this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              ic((e = n).x),
              ic(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return (0, t1.dO)();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) ||
                this.path.some(ip)
              )
            ) {
              let { scroll: t } = this.root;
              t && ((0, eV.am)(i.x, t.offset.x), (0, eV.am)(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = (0, t1.dO)();
            if ((eS(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot))
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && eS(i, t), (0, eV.am)(i.x, r.offset.x), (0, eV.am)(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = (0, t1.dO)();
            eS(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                (0, eV.D2)(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                (0, eI.ud)(n.latestValues) && (0, eV.D2)(i, n.latestValues);
            }
            return (0, eI.ud)(this.latestValues) && (0, eV.D2)(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = (0, t1.dO)();
            eS(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, eI.ud)(i.latestValues)) continue;
              (0, eI.Lj)(i.latestValues) && i.updateSnapshot();
              let n = (0, t1.dO)();
              eS(n, i.measurePageBox()),
                eR(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n);
            }
            return (0, eI.ud)(this.latestValues) && eR(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== H.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = H.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, t1.dO)()),
                    (this.relativeTargetOrigin = (0, t1.dO)()),
                    tG(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                    eS(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, t1.dO)()), (this.targetWithTransforms = (0, t1.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      tK(i.x, n.x, r.x),
                      tK(i.y, n.y, r.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(this.layout.layoutBox))
                          : eS(this.target, this.layout.layoutBox),
                        (0, eV.o2)(this.target, this.targetDelta))
                      : eS(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, t1.dO)()),
                      (this.relativeTargetOrigin = (0, t1.dO)()),
                      tG(this.relativeTargetOrigin, this.target, t.target),
                      eS(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                eG && e_.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, eI.Lj)(this.parent.latestValues) ||
              (0, eI.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) &&
                (n = !1),
              i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
              this.resolvedRelativeTargetAt === H.frameData.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            eS(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, eV.YY)(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox), (e.targetWithTransforms = (0, t1.dO)()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (eA(this.prevProjectionDelta.x, this.projectionDelta.x),
                eA(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              tH(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                e$(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                e$(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', l)),
              eG && e_.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = (0, t1.wc)()),
              (this.projectionDelta = (0, t1.wc)()),
              (this.projectionDeltaWithTransform = (0, t1.wc)());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = (0, t1.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, t1.dO)(),
              l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(ia));
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (is(o.x, t.x, n),
                  is(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  tG(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    io(p.x, f.x, a.x, n),
                    io(p.y, f.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget), (d = i), eF(u.x, d.x) && eF(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = (0, t1.dO)()),
                    eS(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, tX.t)(0, void 0 !== i.opacity ? i.opacity : 1, eP(n))),
                        (t.opacityExit = (0, tX.t)(void 0 !== e.opacity ? e.opacity : 1, 0, ew(n))))
                      : s &&
                        (t.opacity = (0, tX.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < ev; r++) {
                      let s = `border${em[r]}Radius`,
                        o = ex(e, s),
                        a = ex(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || ey(o) === ey(a)
                          ? ((t[s] = Math.max((0, tX.t)(eg(o), eg(a), n), 0)),
                            (t9.aQ.test(a) || t9.aQ.test(o)) && (t[s] += '%'))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, tX.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners('animationStart'),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, H.Pn)(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = H.Wi.update(() => {
                (es.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, eH.D)(0, 1e3, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
              this.notifyListeners('animationComplete');
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              { targetWithTransforms: e, target: i, layout: n, latestValues: r } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                id(this.options.animationType, this.layout.layoutBox, n.layoutBox)
              ) {
                i = this.target || (0, t1.dO)();
                let e = tz(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = tz(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              eS(e, i),
                (0, eV.D2)(e, r),
                tH(this.projectionDeltaWithTransform, this.layoutCorrected, e, r);
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eU()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead)) || this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({ needsReset: t, transition: e, preserveFollowOpacity: i } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && eQ('z', t, n, this.animationValues);
            for (let e = 0; e < eZ.length; e++)
              eQ(`rotate${eZ[e]}`, t, n, this.animationValues),
                eQ(`skew${eZ[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return eq;
            let n = { visibility: '' },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ''),
                (n.pointerEvents = I(null == t ? void 0 : t.pointerEvents) || ''),
                (n.transform = r ? r(this.latestValues, '') : 'none'),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
                  (e.pointerEvents = I(null == t ? void 0 : t.pointerEvents) || '')),
                this.hasProjected &&
                  !(0, eI.ud)(this.latestValues) &&
                  ((e.transform = r ? r({}, '') : 'none'), (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = '',
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || 'none';
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ''
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            eu.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = eu.P[t],
                r = 'none' === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this ? I(null == t ? void 0 : t.pointerEvents) || '' : 'none'),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop();
            }),
              this.root.nodes.forEach(e7),
              this.root.sharedNodes.clear();
          }
        };
      }
      function e1(t) {
        t.updateLayout();
      }
      function e5(t) {
        var e;
        let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          'size' === r
            ? t5((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = tz(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : id(r, i.layoutBox, e) &&
              t5((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = tz(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = (0, t1.wc)();
          tH(o, e, i.layoutBox);
          let a = (0, t1.wc)();
          s ? tH(a, t.applyTransform(n, !0), i.measuredBox) : tH(a, e, i.layoutBox);
          let l = !eL(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = (0, t1.dO)();
                tG(o, i.layoutBox, r.layoutBox);
                let a = (0, t1.dO)();
                tG(a, e, s.layoutBox),
                  eB(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a), (t.relativeTargetOrigin = o), (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners('didUpdate', {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function e3(t) {
        eG && e_.totalNodes++,
          t.parent &&
            (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function e2(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
      }
      function e9(t) {
        t.clearSnapshot();
      }
      function e7(t) {
        t.clearMeasurements();
      }
      function e4(t) {
        t.isLayoutDirty = !1;
      }
      function e8(t) {
        let { visualElement: e } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'),
          t.resetTransform();
      }
      function e6(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function it(t) {
        t.resolveTargetDelta();
      }
      function ie(t) {
        t.calcProjection();
      }
      function ii(t) {
        t.resetSkewAndRotation();
      }
      function ir(t) {
        t.removeLeadSnapshot();
      }
      function is(t, e, i) {
        (t.translate = (0, tX.t)(e.translate, 0, i)),
          (t.scale = (0, tX.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function io(t, e, i, n) {
        (t.min = (0, tX.t)(e.min, i.min, n)), (t.max = (0, tX.t)(e.max, i.max, n));
      }
      function ia(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let il = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        iu = (t) =>
          'undefined' != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        ih = iu('applewebkit/') && !iu('chrome/') ? Math.round : tc.Z;
      function ic(t) {
        (t.min = ih(t.min)), (t.max = ih(t.max));
      }
      function id(t, e, i) {
        return 'position' === t || ('preserve-aspect' === t && !(0.2 >= Math.abs(eW(e) - eW(i))));
      }
      function ip(t) {
        var e;
        return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot);
      }
      let im = e0({
          attachResizeListener: (t, e) => G(t, 'resize', e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        iv = { current: void 0 },
        ig = e0({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!iv.current) {
              let t = new im({});
              t.mount(window), t.setOptions({ layoutScroll: !0 }), (iv.current = t);
            }
            return iv.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : 'none';
          },
          checkIsScrollRoot: (t) => 'fixed' === window.getComputedStyle(t).position,
        });
      var iy = i(29666),
        ix = i(74117);
      let iP = (t, e) => (A(t) ? new ix.e(e) : new iy.W(e, { allowProjection: t !== r.Fragment })),
        iw = {
          animation: { Feature: tR },
          exit: { Feature: tj },
          inView: { Feature: tx },
          tap: { Feature: tp },
          focus: { Feature: tu },
          hover: { Feature: tl },
          pan: { Feature: er },
          drag: { Feature: ei, ProjectionNode: ig, MeasureLayout: ec },
          layout: { ProjectionNode: ig, MeasureLayout: ec },
        },
        iT = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: d,
              Component: S,
            }) {
              t &&
                (function (t) {
                  for (let e in t)
                    P.featureDefinitions[e] = { ...P.featureDefinitions[e], ...t[e] };
                })(t);
              let A = (0, r.forwardRef)(function (t, b) {
                var A;
                let V;
                let C = {
                    ...(0, r.useContext)(s._),
                    ...t,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, r.useContext)(T.p).id;
                      return e && void 0 !== t ? e + '-' + t : t;
                    })(t),
                  },
                  { isStatic: D } = C,
                  M = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if ((0, y.G)(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || (0, g.$)(e) ? e : void 0,
                          animate: (0, g.$)(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, r.useContext)(o));
                    return (0, r.useMemo)(() => ({ initial: e, animate: i }), [x(e), x(i)]);
                  })(t),
                  E = d(t, D);
                if (!D && w.j) {
                  (0, r.useContext)(u).strict;
                  let t = (function (t) {
                    let { drag: e, layout: i } = P.featureDefinitions;
                    if (!e && !i) return {};
                    let n = { ...e, ...i };
                    return {
                      MeasureLayout:
                        (null == e ? void 0 : e.isEnabled(t)) ||
                        (null == i ? void 0 : i.isEnabled(t))
                          ? n.MeasureLayout
                          : void 0,
                      ProjectionNode: n.ProjectionNode,
                    };
                  })(C);
                  (V = t.MeasureLayout),
                    (M.visualElement = (function (t, e, i, n, d) {
                      var g;
                      let { visualElement: y } = (0, r.useContext)(o),
                        x = (0, r.useContext)(u),
                        P = (0, r.useContext)(a.O),
                        w = (0, r.useContext)(s._).reducedMotion,
                        T = (0, r.useRef)();
                      (n = n || x.renderer),
                        !T.current &&
                          n &&
                          (T.current = n(t, {
                            visualState: e,
                            parent: y,
                            props: i,
                            presenceContext: P,
                            blockInitialAnimation: !!P && !1 === P.initial,
                            reducedMotionConfig: w,
                          }));
                      let b = T.current,
                        S = (0, r.useContext)(f);
                      b &&
                        !b.projection &&
                        d &&
                        ('html' === b.type || 'svg' === b.type) &&
                        (function (t, e, i, n) {
                          let {
                            layoutId: r,
                            layout: s,
                            drag: o,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: u,
                          } = e;
                          (t.projection = new i(
                            t.latestValues,
                            e['data-framer-portal-id']
                              ? void 0
                              : (function t(e) {
                                  if (e)
                                    return !1 !== e.options.allowProjection
                                      ? e.projection
                                      : t(e.parent);
                                })(t.parent)
                          )),
                            t.projection.setOptions({
                              layoutId: r,
                              layout: s,
                              alwaysMeasureLayout: !!o || (a && p(a)),
                              visualElement: t,
                              animationType: 'string' == typeof s ? s : 'both',
                              initialPromotionConfig: n,
                              layoutScroll: l,
                              layoutRoot: u,
                            });
                        })(T.current, i, d, S),
                        (0, r.useInsertionEffect)(() => {
                          b && b.update(i, P);
                        });
                      let A = i[h.M],
                        V = (0, r.useRef)(
                          !!A &&
                            !window.MotionHandoffIsComplete &&
                            (null === (g = window.MotionHasOptimisedAnimation) || void 0 === g
                              ? void 0
                              : g.call(window, A))
                        );
                      return (
                        (0, l.L)(() => {
                          b &&
                            (b.updateFeatures(),
                            c.render(b.render),
                            V.current && b.animationState && b.animationState.animateChanges());
                        }),
                        (0, r.useEffect)(() => {
                          b &&
                            (!V.current && b.animationState && b.animationState.animateChanges(),
                            (V.current = !1),
                            m || ((m = !0), queueMicrotask(v)));
                        }),
                        b
                      );
                    })(S, E, C, e, t.ProjectionNode));
                }
                return (0, n.jsxs)(o.Provider, {
                  value: M,
                  children: [
                    V && M.visualElement
                      ? (0, n.jsx)(V, { visualElement: M.visualElement, ...C })
                      : null,
                    i(
                      S,
                      t,
                      ((A = M.visualElement),
                      (0, r.useCallback)(
                        (t) => {
                          t && E.mount && E.mount(t),
                            A && (t ? A.mount(t) : A.unmount()),
                            b && ('function' == typeof b ? b(t) : p(b) && (b.current = t));
                        },
                        [A]
                      )),
                      E,
                      D,
                      M.visualElement
                    ),
                  ],
                });
              });
              return (A[b] = S), A;
            })(t(e, i));
          }
          if ('undefined' == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, { get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)) });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n) {
            return {
              ...(A(t) ? K : _),
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, n, { latestValues: s }, o) => {
                  let a = (
                      A(e)
                        ? function (t, e, i, n) {
                            let s = (0, r.useMemo)(() => {
                              let i = j();
                              return (
                                (0, k.i)(i, e, (0, L.a)(n), t.transformTemplate),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              E(e, t.style, t), (s.style = { ...e, ...s.style });
                            }
                            return s;
                          }
                        : function (t, e) {
                            let i = {},
                              n = (function (t, e) {
                                let i = t.style || {},
                                  n = {};
                                return (
                                  E(n, i, t),
                                  Object.assign(
                                    n,
                                    (function ({ transformTemplate: t }, e) {
                                      return (0, r.useMemo)(() => {
                                        let i = M();
                                        return (
                                          (0, D.r)(i, e, t), Object.assign({}, i.vars, i.style)
                                        );
                                      }, [e]);
                                    })(t, e)
                                  ),
                                  n
                                );
                              })(t, e);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((i.draggable = !1),
                                (n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = 'none'),
                                (n.touchAction =
                                  !0 === t.drag ? 'none' : `pan-${'x' === t.drag ? 'y' : 'x'}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (i.tabIndex = 0),
                              (i.style = n),
                              i
                            );
                          }
                    )(i, s, o, e),
                    l = (0, R.L)(i, 'string' == typeof e, t),
                    u = e !== r.Fragment ? { ...l, ...a, ref: n } : {},
                    { children: h } = i,
                    c = (0, r.useMemo)(() => ((0, C.i)(h) ? h.get() : h), [h]);
                  return (0, r.createElement)(e, { ...u, children: c });
                };
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, iw, iP)
        );
    },
    9266: function (t, e, i) {
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase();
    },
    57962: function (t, e, i) {
      i.d(e, {
        L: function () {
          return a;
        },
        K: function () {
          return o;
        },
      });
      let n = new Set([
        'animate',
        'exit',
        'variants',
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'custom',
        'inherit',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        '_dragX',
        '_dragY',
        'onHoverStart',
        'onHoverEnd',
        'onViewportEnter',
        'onViewportLeave',
        'globalTapTarget',
        'ignoreStrict',
        'viewport',
      ]);
      function r(t) {
        return (
          t.startsWith('while') ||
          (t.startsWith('drag') && 'draggable' !== t) ||
          t.startsWith('layout') ||
          t.startsWith('onTap') ||
          t.startsWith('onPan') ||
          t.startsWith('onLayout') ||
          n.has(t)
        );
      }
      let s = (t) => !r(t);
      function o(t) {
        t && (s = (e) => (e.startsWith('on') ? !r(e) : t(e)));
      }
      try {
        o(require('@emotion/is-prop-valid').default);
      } catch (t) {}
      function a(t, e, i) {
        let n = {};
        for (let o in t)
          ('values' !== o || 'object' != typeof t.values) &&
            (s(o) ||
              (!0 === i && r(o)) ||
              (!e && !r(o)) ||
              (t.draggable && o.startsWith('onDrag'))) &&
            (n[o] = t[o]);
        return n;
      }
    },
    91016: function (t, e, i) {
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => 'string' == typeof e && e.startsWith(t),
        r = n('--'),
        s = n('var(--'),
        o = (t) => !!s(t) && a.test(t.split('/*')[0].trim()),
        a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    59565: function (t, e, i) {
      i.d(e, {
        v: function () {
          return n;
        },
      });
      function n(t) {
        return t instanceof SVGElement && 'svg' !== t.tagName;
      }
    },
    51768: function (t, e, i) {
      i.d(e, {
        Ei: function () {
          return d;
        },
        lw: function () {
          return p;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var n = i(82548),
        r = i(50111),
        s = i(12119);
      let o = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
          'translateX',
          'translateY',
        ]),
        a = (t) => t === r.Rx || t === s.px,
        l = (t, e) => parseFloat(t.split(', ')[e]),
        u =
          (t, e) =>
          (i, { transform: n }) => {
            if ('none' === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return l(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(['x', 'y', 'z']),
        c = n._.filter((t) => !h.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith('scale') ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = '0', paddingRight: i = '0' }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = '0', paddingBottom: i = '0' }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    585: function (t, e, i) {
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var n = i(34408),
        r = i(75996),
        s = i(20143);
      function o(t, e) {
        let i = (0, s.A)(t);
        return i !== r.h && (i = n.P), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0;
      }
    },
    20143: function (t, e, i) {
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var n = i(28368),
        r = i(75996);
      let s = {
          ...i(75970).j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => s[t];
    },
    27613: function (t, e, i) {
      i.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var n = i(50111),
        r = i(12119),
        s = i(108);
      let o = [n.Rx, r.px, r.aQ, r.RW, r.vw, r.vh, { test: (t) => 'auto' === t, parse: (t) => t }],
        a = (t) => o.find((0, s.l)(t));
    },
    75970: function (t, e, i) {
      i.d(e, {
        j: function () {
          return o;
        },
      });
      var n = i(50111),
        r = i(12119);
      let s = { ...n.Rx, transform: Math.round },
        o = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: n.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: s,
        };
    },
    108: function (t, e, i) {
      i.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    29666: function (t, e, i) {
      i.d(e, {
        W: function () {
          return d;
        },
      });
      var n = i(54149),
        r = i(91016),
        s = i(82548),
        o = i(90713),
        a = i(75353),
        l = i(20143),
        u = i(55149),
        h = i(25148),
        c = i(83237);
      class d extends h.J {
        constructor() {
          super(...arguments),
            (this.type = 'html'),
            (this.applyWillChange = !0),
            (this.renderInstance = a.N);
        }
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, l.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, r.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return 'string' == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.J)(t, e);
        }
        build(t, e, i) {
          (0, n.r)(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, o.U)(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, c.i)(t) &&
            (this.childSubscription = t.on('change', (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
    },
    54149: function (t, e, i) {
      i.d(e, {
        r: function () {
          return u;
        },
      });
      var n = i(82548);
      let r = (t, e) => (e && 'number' == typeof t ? e.transform(t) : t);
      var s = i(75970);
      let o = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        },
        a = n._.length;
      var l = i(91016);
      function u(t, e, i) {
        let { style: u, vars: h, transformOrigin: c } = t,
          d = !1,
          p = !1;
        for (let t in e) {
          let i = e[t];
          if (n.G.has(t)) {
            d = !0;
            continue;
          }
          if ((0, l.f)(t)) {
            h[t] = i;
            continue;
          }
          {
            let e = r(i, s.j[t]);
            t.startsWith('origin') ? ((p = !0), (c[t] = e)) : (u[t] = e);
          }
        }
        if (
          (!e.transform &&
            (d || i
              ? (u.transform = (function (t, e, i) {
                  let l = '',
                    u = !0;
                  for (let h = 0; h < a; h++) {
                    let a = n._[h],
                      c = t[a];
                    if (void 0 === c) continue;
                    let d = !0;
                    if (
                      !(d =
                        'number' == typeof c
                          ? c === (a.startsWith('scale') ? 1 : 0)
                          : 0 === parseFloat(c)) ||
                      i
                    ) {
                      let t = r(c, s.j[a]);
                      if (!d) {
                        u = !1;
                        let e = o[a] || a;
                        l += `${e}(${t}) `;
                      }
                      i && (e[a] = t);
                    }
                  }
                  return (l = l.trim()), i ? (l = i(e, u ? '' : l)) : u && (l = 'none'), l;
                })(e, t.transform, i))
              : u.transform && (u.transform = 'none')),
          p)
        ) {
          let { originX: t = '50%', originY: e = '50%', originZ: i = 0 } = c;
          u.transformOrigin = `${t} ${e} ${i}`;
        }
      }
    },
    75353: function (t, e, i) {
      i.d(e, {
        N: function () {
          return n;
        },
      });
      function n(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)), i))
          t.style.setProperty(s, i[s]);
      }
    },
    90713: function (t, e, i) {
      i.d(e, {
        U: function () {
          return s;
        },
      });
      var n = i(39292),
        r = i(83237);
      function s(t, e, i) {
        var s;
        let { style: o } = t,
          a = {};
        for (let l in o)
          ((0, r.i)(o[l]) ||
            (e.style && (0, r.i)(e.style[l])) ||
            (0, n.j)(l, t) ||
            (null === (s = null == i ? void 0 : i.getValue(l)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (a[l] = o[l]);
        return i && o && 'string' == typeof o.willChange && (i.applyWillChange = !1), a;
      }
    },
    82548: function (t, e, i) {
      i.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          'transformPerspective',
          'x',
          'y',
          'z',
          'translateX',
          'translateY',
          'translateZ',
          'scale',
          'scaleX',
          'scaleY',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skew',
          'skewX',
          'skewY',
        ],
        r = new Set(n);
    },
    33036: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      let n = new WeakMap();
    },
    74117: function (t, e, i) {
      i.d(e, {
        e: function () {
          return p;
        },
      });
      var n = i(92235),
        r = i(25148),
        s = i(94638),
        o = i(9266),
        a = i(74731),
        l = i(82548),
        u = i(71549),
        h = i(20143),
        c = i(30801),
        d = i(11152);
      class p extends r.J {
        constructor() {
          super(...arguments),
            (this.type = 'svg'),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = c.dO);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (l.G.has(e)) {
            let t = (0, h.A)(e);
            return (t && t.default) || 0;
          }
          return (e = a.s.has(e) ? e : (0, o.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, n.U)(t, e, i);
        }
        build(t, e, i) {
          (0, s.i)(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          (0, u.K)(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = (0, d.a)(t.tagName)), super.mount(t);
        }
      }
    },
    94638: function (t, e, i) {
      i.d(e, {
        i: function () {
          return l;
        },
      });
      var n = i(54149),
        r = i(12119);
      function s(t, e, i) {
        return 'string' == typeof t ? t : r.px.transform(e + i * t);
      }
      let o = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        a = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      function l(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: l,
          originX: u,
          originY: h,
          pathLength: c,
          pathSpacing: d = 1,
          pathOffset: p = 0,
          ...f
        },
        m,
        v
      ) {
        if (((0, n.r)(t, f, v), m)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: g, style: y, dimensions: x } = t;
        g.transform && (x && (y.transform = g.transform), delete g.transform),
          x &&
            (void 0 !== u || void 0 !== h || y.transform) &&
            (y.transformOrigin = (function (t, e, i) {
              let n = s(e, t.x, t.width),
                r = s(i, t.y, t.height);
              return `${n} ${r}`;
            })(x, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (g.x = e),
          void 0 !== i && (g.y = i),
          void 0 !== l && (g.scale = l),
          void 0 !== c &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? o : a;
              t[l.offset] = r.px.transform(-n);
              let u = r.px.transform(e),
                h = r.px.transform(i);
              t[l.array] = `${u} ${h}`;
            })(g, c, d, p, !1);
      }
    },
    74731: function (t, e, i) {
      i.d(e, {
        s: function () {
          return n;
        },
      });
      let n = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
        'startOffset',
        'textLength',
        'lengthAdjust',
      ]);
    },
    11152: function (t, e, i) {
      i.d(e, {
        a: function () {
          return n;
        },
      });
      let n = (t) => 'string' == typeof t && 'svg' === t.toLowerCase();
    },
    71549: function (t, e, i) {
      i.d(e, {
        K: function () {
          return o;
        },
      });
      var n = i(9266),
        r = i(75353),
        s = i(74731);
      function o(t, e, i, o) {
        for (let i in ((0, r.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(s.s.has(i) ? i : (0, n.D)(i), e.attrs[i]);
      }
    },
    92235: function (t, e, i) {
      i.d(e, {
        U: function () {
          return o;
        },
      });
      var n = i(83237),
        r = i(90713),
        s = i(82548);
      function o(t, e, i) {
        let o = (0, r.U)(t, e, i);
        for (let i in t)
          ((0, n.i)(t[i]) || (0, n.i)(e[i])) &&
            (o[-1 !== s._.indexOf(i) ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1) : i] =
              t[i]);
        return o;
      }
    },
    75099: function (t, e, i) {
      i.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var n = i(51768),
        r = i(79767);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, n.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class c {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this), o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, name: e, element: i, motionValue: n } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    61710: function (t, e, i) {
      i.d(e, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var n = i(98918),
        r = i(22897),
        s = i(55191);
      function o(t) {
        return (0, n.H)(t.animate) || s.V.some((e) => (0, r.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    22897: function (t, e, i) {
      i.d(e, {
        $: function () {
          return n;
        },
      });
      function n(t) {
        return 'string' == typeof t || Array.isArray(t);
      }
    },
    54112: function (t, e, i) {
      i.d(e, {
        x: function () {
          return r;
        },
      });
      var n = i(82980);
      function r(t, e, i) {
        let r = t.getProps();
        return (0, n.o)(r, e, void 0 !== i ? i : r.custom, t);
      }
    },
    82980: function (t, e, i) {
      function n(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function r(t, e, i, r) {
        if ('function' == typeof e) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        if (('string' == typeof e && (e = t.variants && t.variants[e]), 'function' == typeof e)) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        return e;
      }
      i.d(e, {
        o: function () {
          return r;
        },
      });
    },
    55191: function (t, e, i) {
      i.d(e, {
        V: function () {
          return r;
        },
        e: function () {
          return n;
        },
      });
      let n = [
          'animate',
          'whileInView',
          'whileFocus',
          'whileHover',
          'whileTap',
          'whileDrag',
          'exit',
        ],
        r = ['initial', ...n];
    },
    20268: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    6253: function (t, e, i) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    73503: function (t, e, i) {
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    6741: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(39994);
      let r = n.Z,
        s = n.Z;
    },
    40345: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = 'undefined' != typeof window;
    },
    8998: function (t, e, i) {
      i.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    38631: function (t, e, i) {
      i.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/u.test(t);
    },
    30528: function (t, e, i) {
      i.d(e, {
        X: function () {
          return n;
        },
      });
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    77784: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    39994: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    94730: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return r;
        },
      });
      var n = i(30831);
      function r(t) {
        let e = [0];
        return (0, n.c)(e, t.length - 1), e;
      }
    },
    30831: function (t, e, i) {
      i.d(e, {
        c: function () {
          return s;
        },
      });
      var n = i(77784),
        r = i(17406);
      function s(t, e) {
        let i = t[t.length - 1];
        for (let s = 1; s <= e; s++) {
          let o = (0, r.Y)(0, e, s);
          t.push((0, n.t)(i, 1, o));
        }
      }
    },
    36599: function (t, e, i) {
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    17406: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    92045: function (t, e, i) {
      i.d(e, {
        A: function () {
          return s;
        },
      });
      var n = i(40345),
        r = i(63459);
      function s() {
        if (((r.O.current = !0), n.j)) {
          if (window.matchMedia) {
            let t = window.matchMedia('(prefers-reduced-motion)'),
              e = () => (r.n.current = t.matches);
            t.addListener(e), e();
          } else r.n.current = !1;
        }
      }
    },
    63459: function (t, e, i) {
      i.d(e, {
        O: function () {
          return r;
        },
        n: function () {
          return n;
        },
      });
      let n = { current: null },
        r = { current: !1 };
    },
    32448: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var n = i(96753);
      let r = (t) => !!(t && 'object' == typeof t && t.mix && t.toValue),
        s = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    71158: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(6253);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (0, n.y4)(this.subscriptions, t), () => (0, n.cl)(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    22947: function (t, e, i) {
      i.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    38807: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(58854);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    86012: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(58854);
      let r = i(40345).j ? n.useLayoutEffect : n.useEffect;
    },
    39439: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    30729: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
        Hg: function () {
          return u;
        },
      });
      var n = i(71158),
        r = i(39439),
        s = i(13411),
        o = i(79767);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = '11.3.30'),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e && this.events.renderRequest && this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on('change', t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return 'change' === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e);
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart && this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete && this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    68884: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(59041);
      let r = {
        test: (0, i(28797).i)('#'),
        parse: function (t) {
          let e = '',
            i = '',
            n = '',
            r = '';
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    32454: function (t, e, i) {
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(50111),
        r = i(12119),
        s = i(16473),
        o = i(28797);
      let a = {
        test: (0, o.i)('hsl', 'hue'),
        parse: (0, o.d)('hue', 'saturation', 'lightness'),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          'hsla(' +
          Math.round(t) +
          ', ' +
          r.aQ.transform((0, s.Nw)(e)) +
          ', ' +
          r.aQ.transform((0, s.Nw)(i)) +
          ', ' +
          (0, s.Nw)(n.Fq.transform(o)) +
          ')',
      };
    },
    28368: function (t, e, i) {
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(16473),
        r = i(68884),
        s = i(32454),
        o = i(59041);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) => (o.m.test(t) ? o.m.parse(t) : s.J.test(t) ? s.J.parse(t) : r.$.parse(t)),
        transform: (t) =>
          (0, n.HD)(t) ? t : t.hasOwnProperty('red') ? o.m.transform(t) : s.J.transform(t),
      };
    },
    59041: function (t, e, i) {
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(73503),
        r = i(50111),
        s = i(16473),
        o = i(28797);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)('rgb', 'red'),
          parse: (0, o.d)('red', 'green', 'blue'),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            'rgba(' +
            l.transform(t) +
            ', ' +
            l.transform(e) +
            ', ' +
            l.transform(i) +
            ', ' +
            (0, s.Nw)(r.Fq.transform(n)) +
            ')',
        };
    },
    28797: function (t, e, i) {
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(16473);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, n.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    75996: function (t, e, i) {
      i.d(e, {
        h: function () {
          return l;
        },
      });
      var n = i(34408),
        r = i(16473);
      let s = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
      function o(t) {
        let [e, i] = t.slice(0, -1).split('(');
        if ('drop-shadow' === e) return t;
        let [n] = i.match(r.KP) || [];
        if (!n) return t;
        let o = i.replace(n, ''),
          a = s.has(e) ? 1 : 0;
        return n !== i && (a *= 100), e + '(' + a + o + ')';
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(' ') : t;
          },
        };
    },
    34408: function (t, e, i) {
      i.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var n = i(28368),
        r = i(16473);
      let s = 'number',
        o = 'color',
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(u), l.push(o), i.push(n.$.parse(t)))
                  : t.startsWith('var(')
                    ? (r.var.push(u), l.push('var'), i.push(t))
                    : (r.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                '${}'
              )
            )
            .split('${}');
        return { values: i, split: h, indexes: r, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = '';
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s ? (l += (0, r.Nw)(t[u])) : e === o ? (l += n.$.transform(t[u])) : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ('number' == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e ? void 0 : e.length) || 0) +
                ((null === (i = t.match(r.dA)) || void 0 === i ? void 0 : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    50111: function (t, e, i) {
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(73503);
      let r = { test: (t) => 'number' == typeof t, parse: parseFloat, transform: (t) => t },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    12119: function (t, e, i) {
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(16473);
      let r = (t) => ({
          test: (e) => (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(' ').length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r('deg'),
        o = r('%'),
        a = r('px'),
        l = r('vh'),
        u = r('vw'),
        h = { ...o, parse: (t) => o.parse(t) / 100, transform: (t) => o.transform(100 * t) };
    },
    16473: function (t, e, i) {
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return 'string' == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    74044: function (t, e, i) {
      i.d(e, {
        K: function () {
          return l;
        },
      });
      var n = i(30729),
        r = i(73843),
        s = i(6253);
      class o extends n.Hg {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = (0, r.p)(t);
          if (!e) return;
          let i = this.counts.get(e) || 0;
          this.counts.set(e, i + 1), 0 === i && (this.output.push(e), this.update());
          let n = !1;
          return () => {
            if (n) return;
            n = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t), 0 === t && ((0, s.cl)(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(', ') : 'auto');
        }
      }
      var a = i(83237);
      function l(t, e) {
        var i, n;
        if (!t.applyWillChange) return;
        let r = t.getValue('willChange');
        if (
          (r ||
            (null === (i = t.props.style) || void 0 === i ? void 0 : i.willChange) ||
            ((r = new o('auto')), t.addValue('willChange', r)),
          (n = r),
          (0, a.i)(n) && n.add)
        )
          return r.add(e);
      }
    },
    73843: function (t, e, i) {
      i.d(e, {
        p: function () {
          return o;
        },
      });
      var n = i(31684),
        r = i(9266),
        s = i(82548);
      function o(t) {
        return s.G.has(t) ? 'transform' : n.t.has(t) ? (0, r.D)(t) : void 0;
      }
    },
    83237: function (t, e, i) {
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
  },
]);
