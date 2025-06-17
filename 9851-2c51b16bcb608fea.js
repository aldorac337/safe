try {
  let e =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    t = new e.Error().stack;
  t &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[t] = 'a8e38547-4b01-43c4-be56-faf06b9892b6'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-a8e38547-4b01-43c4-be56-faf06b9892b6'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9851, 6544],
  {
    78830: function (e, t, n) {
      n.d(t, {
        M: function () {
          return m;
        },
      });
      var r = n(50256),
        u = n(58258),
        i = n(31270),
        o = n(69036),
        l = n(43),
        f = n(9572);
      class s extends u.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function a(e) {
        let { children: t, isPresent: n } = e,
          i = (0, u.useId)(),
          o = (0, u.useRef)(null),
          l = (0, u.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: a } = (0, u.useContext)(f._);
        return (
          (0, u.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: u } = l.current;
            if (n || !o.current || !e || !t) return;
            o.current.dataset.motionPopId = i;
            let f = document.createElement('style');
            return (
              a && (f.nonce = a),
              document.head.appendChild(f),
              f.sheet &&
                f.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      i,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, 'px !important;\n            height: ')
                    .concat(t, 'px !important;\n            top: ')
                    .concat(r, 'px !important;\n            left: ')
                    .concat(u, 'px !important;\n          }\n        ')
                ),
              () => {
                document.head.removeChild(f);
              }
            );
          }, [n]),
          (0, r.jsx)(s, {
            isPresent: n,
            childRef: o,
            sizeRef: l,
            children: u.cloneElement(t, { ref: o }),
          })
        );
      }
      let c = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: i,
            onExitComplete: f,
            custom: s,
            presenceAffectsLayout: c,
            mode: d,
          } = e,
          p = (0, o.h)(h),
          g = (0, u.useId)(),
          v = (0, u.useCallback)(
            (e) => {
              for (let t of (p.set(e, !0), p.values())) if (!t) return;
              f && f();
            },
            [p, f]
          ),
          m = (0, u.useMemo)(
            () => ({
              id: g,
              initial: n,
              isPresent: i,
              custom: s,
              onExitComplete: v,
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            c ? [Math.random(), v] : [i, v]
          );
        return (
          (0, u.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [i]),
          u.useEffect(() => {
            i || p.size || !f || f();
          }, [i]),
          'popLayout' === d && (t = (0, r.jsx)(a, { isPresent: i, children: t })),
          (0, r.jsx)(l.O.Provider, { value: m, children: t })
        );
      };
      function h() {
        return new Map();
      }
      var d = n(6595);
      let p = (e) => e.key || '';
      function g(e) {
        let t = [];
        return (
          u.Children.forEach(e, (e) => {
            (0, u.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var v = n(18290);
      let m = (e) => {
        let {
            children: t,
            custom: n,
            initial: l = !0,
            onExitComplete: f,
            presenceAffectsLayout: s = !0,
            mode: a = 'sync',
            propagate: h = !1,
          } = e,
          [m, b] = (0, d.oO)(h),
          Z = (0, u.useMemo)(() => g(t), [t]),
          y = h && !m ? [] : Z.map(p),
          w = (0, u.useRef)(!0),
          x = (0, u.useRef)(Z),
          E = (0, o.h)(() => new Map()),
          [C, I] = (0, u.useState)(Z),
          [R, _] = (0, u.useState)(Z);
        (0, v.L)(() => {
          (w.current = !1), (x.current = Z);
          for (let e = 0; e < R.length; e++) {
            let t = p(R[e]);
            y.includes(t) ? E.delete(t) : !0 !== E.get(t) && E.set(t, !1);
          }
        }, [R, y.length, y.join('-')]);
        let M = [];
        if (Z !== C) {
          let e = [...Z];
          for (let t = 0; t < R.length; t++) {
            let n = R[t],
              r = p(n);
            y.includes(r) || (e.splice(t, 0, n), M.push(n));
          }
          'wait' === a && M.length && (e = M), _(g(e)), I(Z);
          return;
        }
        let { forceRender: P } = (0, u.useContext)(i.p);
        return (0, r.jsx)(r.Fragment, {
          children: R.map((e) => {
            let t = p(e),
              u = (!h || !!m) && (Z === R || y.includes(t));
            return (0, r.jsx)(
              c,
              {
                isPresent: u,
                initial: (!w.current || !!l) && void 0,
                custom: u ? void 0 : n,
                presenceAffectsLayout: s,
                mode: a,
                onExitComplete: u
                  ? void 0
                  : () => {
                      if (!E.has(t)) return;
                      E.set(t, !0);
                      let e = !0;
                      E.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == P || P(), _(x.current), h && (null == b || b()), f && f());
                    },
                children: e,
              },
              t
            );
          }),
        });
      };
    },
    92559: function (e, t, n) {
      var r = n(16601),
        u = (function () {
          try {
            var e = (0, r.Z)(Object, 'defineProperty');
            return e({}, '', {}), e;
          } catch (e) {}
        })();
      t.Z = u;
    },
    15341: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return B;
        },
      });
      var r,
        u,
        i,
        o,
        l,
        f = n(97350),
        s = function (e) {
          return e;
        },
        a = function (e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }
          return e.apply(t, n);
        },
        c = Math.max,
        h = n(92559),
        d = h.Z
          ? function (e, t) {
              return (0, h.Z)(e, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: function () {
                  return t;
                },
                writable: !0,
              });
            }
          : s,
        p = Date.now,
        g =
          ((r = 0),
          (u = 0),
          function () {
            var e = p(),
              t = 16 - (e - u);
            if (((u = e), t > 0)) {
              if (++r >= 800) return arguments[0];
            } else r = 0;
            return d.apply(void 0, arguments);
          }),
        v = n(38395),
        m = function (e, t, n, r) {
          for (var u = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < u; )
            if (t(e[i], i, e)) return i;
          return -1;
        },
        b = function (e) {
          return e != e;
        },
        Z = function (e, t, n) {
          for (var r = n - 1, u = e.length; ++r < u; ) if (e[r] === t) return r;
          return -1;
        },
        y = function (e, t) {
          return !!(null == e ? 0 : e.length) && (t == t ? Z(e, t, 0) : m(e, b, 0)) > -1;
        },
        w = function (e, t, n) {
          for (var r = -1, u = null == e ? 0 : e.length; ++r < u; ) if (n(t, e[r])) return !0;
          return !1;
        },
        x = n(69368),
        E = n(30494),
        C = n(30984),
        I = function (e, t, n, r) {
          var u = -1,
            i = y,
            o = !0,
            l = e.length,
            f = [],
            s = t.length;
          if (!l) return f;
          n && (t = (0, x.Z)(t, (0, E.Z)(n))),
            r ? ((i = w), (o = !1)) : t.length >= 200 && ((i = C.Z), (o = !1), (t = new v.Z(t)));
          e: for (; ++u < l; ) {
            var a = e[u],
              c = null == n ? a : n(a);
            if (((a = r || 0 !== a ? a : 0), o && c == c)) {
              for (var h = s; h--; ) if (t[h] === c) continue e;
              f.push(a);
            } else i(t, c, r) || f.push(a);
          }
          return f;
        },
        R = n(27899),
        _ = n(58151),
        M = n(14631),
        P = n(71569),
        j = _.Z ? _.Z.isConcatSpreadable : void 0,
        k = function (e) {
          return (0, P.Z)(e) || (0, M.Z)(e) || !!(j && e && e[j]);
        },
        D = function e(t, n, r, u, i) {
          var o = -1,
            l = t.length;
          for (r || (r = k), i || (i = []); ++o < l; ) {
            var f = t[o];
            n > 0 && r(f)
              ? n > 1
                ? e(f, n - 1, r, u, i)
                : (0, R.Z)(i, f)
              : u || (i[i.length] = f);
          }
          return i;
        },
        S = n(12977),
        A = n(495),
        L =
          S.Z && 1 / (0, A.Z)(new S.Z([, -0]))[1] == 1 / 0
            ? function (e) {
                return new S.Z(e);
              }
            : function () {},
        z = function (e, t, n) {
          var r = -1,
            u = y,
            i = e.length,
            o = !0,
            l = [],
            f = l;
          if (n) (o = !1), (u = w);
          else if (i >= 200) {
            var s = t ? null : L(e);
            if (s) return (0, A.Z)(s);
            (o = !1), (u = C.Z), (f = new v.Z());
          } else f = t ? [] : l;
          e: for (; ++r < i; ) {
            var a = e[r],
              c = t ? t(a) : a;
            if (((a = n || 0 !== a ? a : 0), o && c == c)) {
              for (var h = f.length; h--; ) if (f[h] === c) continue e;
              t && f.push(c), l.push(a);
            } else u(f, c, n) || (f !== l && f.push(c), l.push(a));
          }
          return l;
        },
        O = function (e, t, n) {
          var r = e.length;
          if (r < 2) return r ? z(e[0]) : [];
          for (var u = -1, i = Array(r); ++u < r; )
            for (var o = e[u], l = -1; ++l < r; ) l != u && (i[u] = I(i[u] || o, e[l], t, n));
          return z(D(i, 1), t, n);
        },
        T = n(58292),
        N = n(47501),
        U = function (e) {
          return (0, N.Z)(e) && (0, T.Z)(e);
        },
        B = g(
          ((o = i =
            function (e) {
              return O((0, f.Z)(e, U));
            }),
          (l = c(((l = void 0), o.length - 1), 0)),
          function () {
            for (var e = arguments, t = -1, n = c(e.length - l, 0), r = Array(n); ++t < n; )
              r[t] = e[l + t];
            t = -1;
            for (var u = Array(l + 1); ++t < l; ) u[t] = e[t];
            return (u[l] = s(r)), a(o, this, u);
          }),
          i + ''
        );
    },
  },
]);
