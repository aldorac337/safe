'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9212],
  {
    11e3: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return d;
        },
      });
      var r = n(58854);
      let u = ['preEnter', 'entering', 'entered', 'preExit', 'exiting', 'exited', 'unmounted'],
        i = (e) => ({
          _s: e,
          status: u[e],
          isEnter: e < 3,
          isMounted: 6 !== e,
          isResolved: 2 === e || e > 4,
        }),
        o = (e) => (e ? 6 : 5),
        s = (e, t) => {
          switch (e) {
            case 1:
            case 0:
              return 2;
            case 4:
            case 3:
              return o(t);
          }
        },
        l = (e) => ('object' == typeof e ? [e.enter, e.exit] : [e, e]),
        a = (e, t) =>
          setTimeout(() => {
            isNaN(document.body.offsetTop) || e(t + 1);
          }, 0),
        c = (e, t, n, r, u) => {
          clearTimeout(r.current);
          let o = i(e);
          t(o), (n.current = o), u && u({ current: o });
        },
        d = ({
          enter: e = !0,
          exit: t = !0,
          preEnter: n,
          preExit: u,
          timeout: d,
          initialEntered: f,
          mountOnEnter: v,
          unmountOnExit: m,
          onStateChange: E,
        } = {}) => {
          let [b, p] = (0, r.useState)(() => i(f ? 2 : o(v))),
            y = (0, r.useRef)(b),
            h = (0, r.useRef)(),
            [T, N] = l(d),
            O = (0, r.useCallback)(() => {
              let e = s(y.current._s, m);
              e && c(e, p, y, h, E);
            }, [E, m]),
            w = (0, r.useCallback)(
              (r) => {
                let i = (e) => {
                    switch ((c(e, p, y, h, E), e)) {
                      case 1:
                        T >= 0 && (h.current = setTimeout(O, T));
                        break;
                      case 4:
                        N >= 0 && (h.current = setTimeout(O, N));
                        break;
                      case 0:
                      case 3:
                        h.current = a(i, e);
                    }
                  },
                  s = y.current.isEnter;
                'boolean' != typeof r && (r = !s),
                  r ? s || i(e ? (n ? 0 : 1) : 2) : s && i(t ? (u ? 3 : 4) : o(m));
              },
              [O, E, e, t, n, u, T, N, m]
            );
          return (0, r.useEffect)(() => () => clearTimeout(h.current), []), [b, w, O];
        };
    },
    31989: function (e, t, n) {
      let r;
      n.d(t, {
        XB: function () {
          return v;
        },
      });
      var u = n(11572),
        i = n(58854),
        o = n(65727),
        s = n(34704),
        l = n(30),
        a = n(74860),
        c = n(92040);
      let d = 'dismissableLayer.update',
        f = (0, i.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        v = (0, i.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: v = !1,
              onEscapeKeyDown: b,
              onPointerDownOutside: p,
              onFocusOutside: y,
              onInteractOutside: h,
              onDismiss: T,
              ...N
            } = e,
            O = (0, i.useContext)(f),
            [w, g] = (0, i.useState)(null),
            C =
              null !== (n = null == w ? void 0 : w.ownerDocument) && void 0 !== n
                ? n
                : null == globalThis
                  ? void 0
                  : globalThis.document,
            [, L] = (0, i.useState)({}),
            P = (0, l.e)(t, (e) => g(e)),
            D = Array.from(O.layers),
            [k] = [...O.layersWithOutsidePointerEventsDisabled].slice(-1),
            M = D.indexOf(k),
            S = w ? D.indexOf(w) : -1,
            I = O.layersWithOutsidePointerEventsDisabled.size > 0,
            R = S >= M,
            W = (function (e, t = null == globalThis ? void 0 : globalThis.document) {
              let n = (0, a.W)(e),
                r = (0, i.useRef)(!1),
                u = (0, i.useRef)(() => {});
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function i() {
                          E('dismissableLayer.pointerDownOutside', n, r, { discrete: !0 });
                        }
                        'touch' === e.pointerType
                          ? (t.removeEventListener('click', u.current),
                            (u.current = i),
                            t.addEventListener('click', u.current, { once: !0 }))
                          : i();
                      } else t.removeEventListener('click', u.current);
                      r.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener('pointerdown', e),
                      t.removeEventListener('click', u.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...O.branches].some((e) => e.contains(t));
              !R ||
                n ||
                (null == p || p(e), null == h || h(e), e.defaultPrevented || null == T || T());
            }, C),
            A = (function (e, t = null == globalThis ? void 0 : globalThis.document) {
              let n = (0, a.W)(e),
                r = (0, i.useRef)(!1);
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      E('dismissableLayer.focusOutside', n, { originalEvent: e }, { discrete: !1 });
                  };
                  return (
                    t.addEventListener('focusin', e), () => t.removeEventListener('focusin', e)
                  );
                }, [t, n]),
                { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
              );
            })((e) => {
              let t = e.target;
              [...O.branches].some((e) => e.contains(t)) ||
                (null == y || y(e), null == h || h(e), e.defaultPrevented || null == T || T());
            }, C);
          return (
            (0, c.e)((e) => {
              S !== O.layers.size - 1 ||
                (null == b || b(e), !e.defaultPrevented && T && (e.preventDefault(), T()));
            }, C),
            (0, i.useEffect)(() => {
              if (w)
                return (
                  v &&
                    (0 === O.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = C.body.style.pointerEvents), (C.body.style.pointerEvents = 'none')),
                    O.layersWithOutsidePointerEventsDisabled.add(w)),
                  O.layers.add(w),
                  m(),
                  () => {
                    v &&
                      1 === O.layersWithOutsidePointerEventsDisabled.size &&
                      (C.body.style.pointerEvents = r);
                  }
                );
            }, [w, C, v, O]),
            (0, i.useEffect)(
              () => () => {
                w && (O.layers.delete(w), O.layersWithOutsidePointerEventsDisabled.delete(w), m());
              },
              [w, O]
            ),
            (0, i.useEffect)(() => {
              let e = () => L({});
              return document.addEventListener(d, e), () => document.removeEventListener(d, e);
            }, []),
            (0, i.createElement)(
              s.WV.div,
              (0, u.Z)({}, N, {
                ref: P,
                style: { pointerEvents: I ? (R ? 'auto' : 'none') : void 0, ...e.style },
                onFocusCapture: (0, o.M)(e.onFocusCapture, A.onFocusCapture),
                onBlurCapture: (0, o.M)(e.onBlurCapture, A.onBlurCapture),
                onPointerDownCapture: (0, o.M)(e.onPointerDownCapture, W.onPointerDownCapture),
              })
            )
          );
        });
      function m() {
        let e = new CustomEvent(d);
        document.dispatchEvent(e);
      }
      function E(e, t, n, { discrete: r }) {
        let u = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && u.addEventListener(e, t, { once: !0 }), r ? (0, s.jH)(u, i) : u.dispatchEvent(i);
      }
    },
    40120: function (e, t, n) {
      n.d(t, {
        M: function () {
          return l;
        },
      });
      var r,
        u = n(58854),
        i = n(1782);
      let o = (r || (r = n.t(u, 2)))['useId'.toString()] || (() => void 0),
        s = 0;
      function l(e) {
        let [t, n] = u.useState(o());
        return (
          (0, i.b)(() => {
            e || n((e) => (null != e ? e : String(s++)));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
    },
    64921: function (e, t, n) {
      n.d(t, {
        h: function () {
          return s;
        },
      });
      var r = n(11572),
        u = n(58854),
        i = n(52033),
        o = n(34704);
      let s = (0, u.forwardRef)((e, t) => {
        var n;
        let {
          container: s = null == globalThis
            ? void 0
            : null === (n = globalThis.document) || void 0 === n
              ? void 0
              : n.body,
          ...l
        } = e;
        return s
          ? i.createPortal((0, u.createElement)(o.WV.div, (0, r.Z)({}, l, { ref: t })), s)
          : null;
      });
    },
    42770: function (e, t, n) {
      n.d(t, {
        z: function () {
          return s;
        },
      });
      var r = n(58854),
        u = n(52033),
        i = n(30),
        o = n(1782);
      let s = (e) => {
        let { present: t, children: n } = e,
          s = (function (e) {
            var t, n;
            let [i, s] = (0, r.useState)(),
              a = (0, r.useRef)({}),
              c = (0, r.useRef)(e),
              d = (0, r.useRef)('none'),
              [f, v] =
                ((t = e ? 'mounted' : 'unmounted'),
                (n = {
                  mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
                  unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
                  unmounted: { MOUNT: 'mounted' },
                }),
                (0, r.useReducer)((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              (0, r.useEffect)(() => {
                let e = l(a.current);
                d.current = 'mounted' === f ? e : 'none';
              }, [f]),
              (0, o.b)(() => {
                let t = a.current,
                  n = c.current;
                if (n !== e) {
                  let r = d.current,
                    u = l(t);
                  e
                    ? v('MOUNT')
                    : 'none' === u || (null == t ? void 0 : t.display) === 'none'
                      ? v('UNMOUNT')
                      : n && r !== u
                        ? v('ANIMATION_OUT')
                        : v('UNMOUNT'),
                    (c.current = e);
                }
              }, [e, v]),
              (0, o.b)(() => {
                if (i) {
                  let e = (e) => {
                      let t = l(a.current).includes(e.animationName);
                      e.target === i && t && (0, u.flushSync)(() => v('ANIMATION_END'));
                    },
                    t = (e) => {
                      e.target === i && (d.current = l(a.current));
                    };
                  return (
                    i.addEventListener('animationstart', t),
                    i.addEventListener('animationcancel', e),
                    i.addEventListener('animationend', e),
                    () => {
                      i.removeEventListener('animationstart', t),
                        i.removeEventListener('animationcancel', e),
                        i.removeEventListener('animationend', e);
                    }
                  );
                }
                v('ANIMATION_END');
              }, [i, v]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(f),
                ref: (0, r.useCallback)((e) => {
                  e && (a.current = getComputedStyle(e)), s(e);
                }, []),
              }
            );
          })(t),
          a = 'function' == typeof n ? n({ present: s.isPresent }) : r.Children.only(n),
          c = (0, i.e)(s.ref, a.ref);
        return 'function' == typeof n || s.isPresent ? (0, r.cloneElement)(a, { ref: c }) : null;
      };
      function l(e) {
        return (null == e ? void 0 : e.animationName) || 'none';
      }
      s.displayName = 'Presence';
    },
    92040: function (e, t, n) {
      n.d(t, {
        e: function () {
          return i;
        },
      });
      var r = n(58854),
        u = n(74860);
      function i(e, t = null == globalThis ? void 0 : globalThis.document) {
        let n = (0, u.W)(e);
        (0, r.useEffect)(() => {
          let e = (e) => {
            'Escape' === e.key && n(e);
          };
          return t.addEventListener('keydown', e), () => t.removeEventListener('keydown', e);
        }, [n, t]);
      }
    },
  },
]);
