'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7208],
  {
    31542: (e, r, t) => {
      t.d(r, { D: () => s });
      var n = t(24469),
        o = t(90909),
        u = t(20706),
        i = t(27024),
        l = t(15258),
        c = t(7620);
      function s(e, r, t) {
        let { isDisabled: s, trigger: a } = e,
          p = (0, i.Bi)(),
          d = (0, c.useRef)(!1),
          v = (0, c.useRef)(!1),
          f = () => {
            (d.current || v.current) && r.open(v.current);
          },
          g = (e) => {
            d.current || v.current || r.close(e);
          };
        (0, c.useEffect)(() => {
          let e = (e) => {
            t && t.current && 'Escape' === e.key && (e.stopPropagation(), r.close(!0));
          };
          if (r.isOpen)
            return (
              document.addEventListener('keydown', e, !0),
              () => {
                document.removeEventListener('keydown', e, !0);
              }
            );
        }, [t, r]);
        let T = () => {
            (v.current = !1), (d.current = !1), g(!0);
          },
          { hoverProps: m } = (0, o.M)({
            isDisabled: s,
            onHoverStart: () => {
              'focus' !== a &&
                ('pointer' === (0, n.ME)() ? (d.current = !0) : (d.current = !1), f());
            },
            onHoverEnd: () => {
              'focus' !== a && ((v.current = !1), (d.current = !1), g());
            },
          }),
          { focusableProps: y } = (0, u.Wc)(
            {
              isDisabled: s,
              onFocus: () => {
                (0, n.pP)() && ((v.current = !0), f());
              },
              onBlur: () => {
                (v.current = !1), (d.current = !1), g(!0);
              },
            },
            t
          );
        return {
          triggerProps: {
            'aria-describedby': r.isOpen ? p : void 0,
            ...(0, l.v)(y, m, { onPointerDown: T, onKeyDown: T, tabIndex: void 0 }),
          },
          tooltipProps: { id: p },
        };
      }
    },
    45826: (e, r, t) => {
      t.d(r, { O: () => a });
      var n = t(7620),
        o = t(86947);
      let u = {},
        i = 0,
        l = !1,
        c = null,
        s = null;
      function a(e = {}) {
        let { delay: r = 1500, closeDelay: t = 500 } = e,
          { isOpen: p, open: d, close: v } = (0, o.T)(e),
          f = (0, n.useMemo)(() => `${++i}`, []),
          g = (0, n.useRef)(null),
          T = (0, n.useRef)(v),
          m = () => {
            u[f] = P;
          },
          y = () => {
            for (let e in u) e !== f && (u[e](!0), delete u[e]);
          },
          E = () => {
            g.current && clearTimeout(g.current),
              (g.current = null),
              y(),
              m(),
              (l = !0),
              d(),
              c && (clearTimeout(c), (c = null)),
              s && (clearTimeout(s), (s = null));
          },
          P = (e) => {
            e || t <= 0
              ? (g.current && clearTimeout(g.current), (g.current = null), T.current())
              : g.current ||
                (g.current = setTimeout(() => {
                  (g.current = null), T.current();
                }, t)),
              c && (clearTimeout(c), (c = null)),
              l &&
                (s && clearTimeout(s),
                (s = setTimeout(
                  () => {
                    delete u[f], (s = null), (l = !1);
                  },
                  Math.max(500, t)
                )));
          },
          b = () => {
            y(),
              m(),
              p || c || l
                ? p || E()
                : (c = setTimeout(() => {
                    (c = null), (l = !0), E();
                  }, r));
          };
        return (
          (0, n.useEffect)(() => {
            T.current = v;
          }, [v]),
          (0, n.useEffect)(
            () => () => {
              g.current && clearTimeout(g.current), u[f] && delete u[f];
            },
            [f]
          ),
          {
            isOpen: p,
            open: (e) => {
              e || !(r > 0) || g.current ? E() : b();
            },
            close: P,
          }
        );
      }
    },
    86947: (e, r, t) => {
      t.d(r, { T: () => u });
      var n = t(7620),
        o = t(38731);
      function u(e) {
        let [r, t] = (0, o.P)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
          u = (0, n.useCallback)(() => {
            t(!0);
          }, [t]),
          i = (0, n.useCallback)(() => {
            t(!1);
          }, [t]),
          l = (0, n.useCallback)(() => {
            t(!r);
          }, [t, r]);
        return { isOpen: r, setOpen: t, open: u, close: i, toggle: l };
      }
    },
    90909: (e, r, t) => {
      t.d(r, { M: () => p });
      var n = t(14187),
        o = t(48647),
        u = t(55795),
        i = t(7620);
      let l = !1,
        c = 0;
      function s(e) {
        'touch' === e.pointerType &&
          ((l = !0),
          setTimeout(() => {
            l = !1;
          }, 50));
      }
      function a() {
        if ('undefined' != typeof document)
          return (
            'undefined' != typeof PointerEvent && document.addEventListener('pointerup', s),
            c++,
            () => {
              --c > 0 ||
                'undefined' == typeof PointerEvent ||
                document.removeEventListener('pointerup', s);
            }
          );
      }
      function p(e) {
        let { onHoverStart: r, onHoverChange: t, onHoverEnd: c, isDisabled: s } = e,
          [p, d] = (0, i.useState)(!1),
          v = (0, i.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: '',
            target: null,
          }).current;
        (0, i.useEffect)(a, []);
        let { addGlobalListener: f, removeAllGlobalListeners: g } = (0, n.A)(),
          { hoverProps: T, triggerHoverEnd: m } = (0, i.useMemo)(() => {
            let e = (e, i) => {
                if (
                  ((v.pointerType = i),
                  s || 'touch' === i || v.isHovered || !e.currentTarget.contains(e.target))
                )
                  return;
                v.isHovered = !0;
                let l = e.currentTarget;
                (v.target = l),
                  f(
                    (0, o.TW)(e.target),
                    'pointerover',
                    (e) => {
                      v.isHovered &&
                        v.target &&
                        !(0, u.sD)(v.target, e.target) &&
                        n(e, e.pointerType);
                    },
                    { capture: !0 }
                  ),
                  r && r({ type: 'hoverstart', target: l, pointerType: i }),
                  t && t(!0),
                  d(!0);
              },
              n = (e, r) => {
                let n = v.target;
                (v.pointerType = ''),
                  (v.target = null),
                  'touch' !== r &&
                    v.isHovered &&
                    n &&
                    ((v.isHovered = !1),
                    g(),
                    c && c({ type: 'hoverend', target: n, pointerType: r }),
                    t && t(!1),
                    d(!1));
              },
              i = {};
            return (
              'undefined' != typeof PointerEvent &&
                ((i.onPointerEnter = (r) => {
                  (l && 'mouse' === r.pointerType) || e(r, r.pointerType);
                }),
                (i.onPointerLeave = (e) => {
                  !s && e.currentTarget.contains(e.target) && n(e, e.pointerType);
                })),
              { hoverProps: i, triggerHoverEnd: n }
            );
          }, [r, t, c, s, v, f, g]);
        return (
          (0, i.useEffect)(() => {
            s && m({ currentTarget: v.target }, v.pointerType);
          }, [s]),
          { hoverProps: T, isHovered: p }
        );
      }
    },
    96200: (e, r, t) => {
      t.d(r, { f: () => i });
      var n = t(2728),
        o = t(15258),
        u = t(90909);
      function i(e, r) {
        let t = (0, n.$)(e, { labelable: !0 }),
          { hoverProps: i } = (0, u.M)({
            onHoverStart: () => (null == r ? void 0 : r.open(!0)),
            onHoverEnd: () => (null == r ? void 0 : r.close()),
          });
        return { tooltipProps: (0, o.v)(t, i, { role: 'tooltip' }) };
      }
    },
  },
]);
