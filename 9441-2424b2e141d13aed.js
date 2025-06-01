'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9441],
  {
    99240: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
      });
      var r = n(58854),
        o = n(42642),
        u = n(30),
        l = n(41217);
      function a(e) {
        let t = e + 'CollectionProvider',
          [n, a] = (0, o.b)(t),
          [c, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
          s = e + 'CollectionSlot',
          d = r.forwardRef((e, t) => {
            let { scope: n, children: o } = e,
              a = i(s, n),
              c = (0, u.e)(t, a.collectionRef);
            return r.createElement(l.g7, { ref: c }, o);
          }),
          f = e + 'CollectionItemSlot',
          p = 'data-radix-collection-item';
        return [
          {
            Provider: (e) => {
              let { scope: t, children: n } = e,
                o = r.useRef(null),
                u = r.useRef(new Map()).current;
              return r.createElement(c, { scope: t, itemMap: u, collectionRef: o }, n);
            },
            Slot: d,
            ItemSlot: r.forwardRef((e, t) => {
              let { scope: n, children: o, ...a } = e,
                c = r.useRef(null),
                s = (0, u.e)(t, c),
                d = i(f, n);
              return (
                r.useEffect(
                  () => (d.itemMap.set(c, { ref: c, ...a }), () => void d.itemMap.delete(c))
                ),
                r.createElement(l.g7, { [p]: '', ref: s }, o)
              );
            }),
          },
          function (t) {
            let n = i(e + 'CollectionConsumer', t);
            return r.useCallback(() => {
              let e = n.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${p}]`));
              return Array.from(n.itemMap.values()).sort(
                (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
              );
            }, [n.collectionRef, n.itemMap]);
          },
          a,
        ];
      }
    },
    68277: function (e, t, n) {
      n.d(t, {
        gm: function () {
          return u;
        },
      });
      var r = n(58854);
      let o = (0, r.createContext)(void 0);
      function u(e) {
        let t = (0, r.useContext)(o);
        return e || t || 'ltr';
      }
    },
    19441: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return eY;
        },
        ck: function () {
          return eN;
        },
        __: function () {
          return eH;
        },
        Uv: function () {
          return eX;
        },
        fC: function () {
          return eU;
        },
        xz: function () {
          return ez;
        },
      });
      var r = n(11572),
        o = n(58854),
        u = n(65727),
        l = n(30),
        a = n(42642),
        c = n(72876),
        i = n(34704),
        s = n(99240),
        d = n(68277),
        f = n(31989),
        p = n(58527),
        m = n(61842),
        v = n(40120),
        g = n(72998),
        w = n(64921),
        M = n(42770),
        h = n(40966),
        E = n(74860);
      let _ = 'rovingFocusGroup.onEntryFocus',
        b = { bubbles: !1, cancelable: !0 },
        C = 'RovingFocusGroup',
        [R, y, D] = (0, s.B)(C),
        [k, I] = (0, a.b)(C, [D]),
        [P, F] = k(C),
        T = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            R.Provider,
            { scope: e.__scopeRovingFocusGroup },
            (0, o.createElement)(
              R.Slot,
              { scope: e.__scopeRovingFocusGroup },
              (0, o.createElement)(x, (0, h.Z)({}, e, { ref: t }))
            )
          )
        ),
        x = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: r,
              loop: a = !1,
              dir: s,
              currentTabStopId: f,
              defaultCurrentTabStopId: p,
              onCurrentTabStopIdChange: m,
              onEntryFocus: v,
              ...g
            } = e,
            w = (0, o.useRef)(null),
            M = (0, l.e)(t, w),
            C = (0, d.gm)(s),
            [R = null, D] = (0, c.T)({ prop: f, defaultProp: p, onChange: m }),
            [k, I] = (0, o.useState)(!1),
            F = (0, E.W)(v),
            T = y(n),
            x = (0, o.useRef)(!1),
            [O, S] = (0, o.useState)(0);
          return (
            (0, o.useEffect)(() => {
              let e = w.current;
              if (e) return e.addEventListener(_, F), () => e.removeEventListener(_, F);
            }, [F]),
            (0, o.createElement)(
              P,
              {
                scope: n,
                orientation: r,
                dir: C,
                loop: a,
                currentTabStopId: R,
                onItemFocus: (0, o.useCallback)((e) => D(e), [D]),
                onItemShiftTab: (0, o.useCallback)(() => I(!0), []),
                onFocusableItemAdd: (0, o.useCallback)(() => S((e) => e + 1), []),
                onFocusableItemRemove: (0, o.useCallback)(() => S((e) => e - 1), []),
              },
              (0, o.createElement)(
                i.WV.div,
                (0, h.Z)({ tabIndex: k || 0 === O ? -1 : 0, 'data-orientation': r }, g, {
                  ref: M,
                  style: { outline: 'none', ...e.style },
                  onMouseDown: (0, u.M)(e.onMouseDown, () => {
                    x.current = !0;
                  }),
                  onFocus: (0, u.M)(e.onFocus, (e) => {
                    let t = !x.current;
                    if (e.target === e.currentTarget && t && !k) {
                      let t = new CustomEvent(_, b);
                      if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                        let e = T().filter((e) => e.focusable);
                        A(
                          [e.find((e) => e.active), e.find((e) => e.id === R), ...e]
                            .filter(Boolean)
                            .map((e) => e.ref.current)
                        );
                      }
                    }
                    x.current = !1;
                  }),
                  onBlur: (0, u.M)(e.onBlur, () => I(!1)),
                })
              )
            )
          );
        }),
        O = (0, o.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: r = !0,
              active: l = !1,
              tabStopId: a,
              ...c
            } = e,
            s = (0, v.M)(),
            d = a || s,
            f = F('RovingFocusGroupItem', n),
            p = f.currentTabStopId === d,
            m = y(n),
            { onFocusableItemAdd: g, onFocusableItemRemove: w } = f;
          return (
            (0, o.useEffect)(() => {
              if (r) return g(), () => w();
            }, [r, g, w]),
            (0, o.createElement)(
              R.ItemSlot,
              { scope: n, id: d, focusable: r, active: l },
              (0, o.createElement)(
                i.WV.span,
                (0, h.Z)({ tabIndex: p ? 0 : -1, 'data-orientation': f.orientation }, c, {
                  ref: t,
                  onMouseDown: (0, u.M)(e.onMouseDown, (e) => {
                    r ? f.onItemFocus(d) : e.preventDefault();
                  }),
                  onFocus: (0, u.M)(e.onFocus, () => f.onItemFocus(d)),
                  onKeyDown: (0, u.M)(e.onKeyDown, (e) => {
                    if ('Tab' === e.key && e.shiftKey) {
                      f.onItemShiftTab();
                      return;
                    }
                    if (e.target !== e.currentTarget) return;
                    let t = (function (e, t, n) {
                      var r;
                      let o =
                        ((r = e.key),
                        'rtl' !== n
                          ? r
                          : 'ArrowLeft' === r
                            ? 'ArrowRight'
                            : 'ArrowRight' === r
                              ? 'ArrowLeft'
                              : r);
                      if (
                        !('vertical' === t && ['ArrowLeft', 'ArrowRight'].includes(o)) &&
                        !('horizontal' === t && ['ArrowUp', 'ArrowDown'].includes(o))
                      )
                        return S[o];
                    })(e, f.orientation, f.dir);
                    if (void 0 !== t) {
                      e.preventDefault();
                      let o = m()
                        .filter((e) => e.focusable)
                        .map((e) => e.ref.current);
                      if ('last' === t) o.reverse();
                      else if ('prev' === t || 'next' === t) {
                        var n, r;
                        'prev' === t && o.reverse();
                        let u = o.indexOf(e.currentTarget);
                        o = f.loop
                          ? ((n = o), (r = u + 1), n.map((e, t) => n[(r + t) % n.length]))
                          : o.slice(u + 1);
                      }
                      setTimeout(() => A(o));
                    }
                  }),
                })
              )
            )
          );
        }),
        S = {
          ArrowLeft: 'prev',
          ArrowUp: 'prev',
          ArrowRight: 'next',
          ArrowDown: 'next',
          PageUp: 'first',
          Home: 'first',
          PageDown: 'last',
          End: 'last',
        };
      function A(e) {
        let t = document.activeElement;
        for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
      }
      var Z = n(41217),
        L = n(47847),
        K = n(49344);
      let V = ['Enter', ' '],
        G = ['ArrowUp', 'PageDown', 'End'],
        W = ['ArrowDown', 'PageUp', 'Home', ...G],
        B = { ltr: [...V, 'ArrowRight'], rtl: [...V, 'ArrowLeft'] },
        U = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
        z = 'Menu',
        [X, Y, H] = (0, s.B)(z),
        [N, j] = (0, a.b)(z, [H, g.D7, I]),
        q = (0, g.D7)(),
        $ = I(),
        [J, Q] = N(z),
        [ee, et] = N(z),
        en = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...u } = e,
            l = q(n);
          return (0, o.createElement)(g.ee, (0, r.Z)({}, l, u, { ref: t }));
        }),
        er = 'MenuPortal',
        [eo, eu] = N(er, { forceMount: void 0 }),
        el = 'MenuContent',
        [ea, ec] = N(el),
        ei = (0, o.forwardRef)((e, t) => {
          let n = eu(el, e.__scopeMenu),
            { forceMount: u = n.forceMount, ...l } = e,
            a = Q(el, e.__scopeMenu),
            c = et(el, e.__scopeMenu);
          return (0, o.createElement)(
            X.Provider,
            { scope: e.__scopeMenu },
            (0, o.createElement)(
              M.z,
              { present: u || a.open },
              (0, o.createElement)(
                X.Slot,
                { scope: e.__scopeMenu },
                c.modal
                  ? (0, o.createElement)(es, (0, r.Z)({}, l, { ref: t }))
                  : (0, o.createElement)(ed, (0, r.Z)({}, l, { ref: t }))
              )
            )
          );
        }),
        es = (0, o.forwardRef)((e, t) => {
          let n = Q(el, e.__scopeMenu),
            a = (0, o.useRef)(null),
            c = (0, l.e)(t, a);
          return (
            (0, o.useEffect)(() => {
              let e = a.current;
              if (e) return (0, L.Ry)(e);
            }, []),
            (0, o.createElement)(
              ef,
              (0, r.Z)({}, e, {
                ref: c,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: (0, u.M)(e.onFocusOutside, (e) => e.preventDefault(), {
                  checkForDefaultPrevented: !1,
                }),
                onDismiss: () => n.onOpenChange(!1),
              })
            )
          );
        }),
        ed = (0, o.forwardRef)((e, t) => {
          let n = Q(el, e.__scopeMenu);
          return (0, o.createElement)(
            ef,
            (0, r.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              onDismiss: () => n.onOpenChange(!1),
            })
          );
        }),
        ef = (0, o.forwardRef)((e, t) => {
          let {
              __scopeMenu: n,
              loop: a = !1,
              trapFocus: c,
              onOpenAutoFocus: i,
              onCloseAutoFocus: s,
              disableOutsidePointerEvents: d,
              onEntryFocus: v,
              onEscapeKeyDown: w,
              onPointerDownOutside: M,
              onFocusOutside: h,
              onInteractOutside: E,
              onDismiss: _,
              disableOutsideScroll: b,
              ...C
            } = e,
            R = Q(el, n),
            y = et(el, n),
            D = q(n),
            k = $(n),
            I = Y(n),
            [P, F] = (0, o.useState)(null),
            x = (0, o.useRef)(null),
            O = (0, l.e)(t, x, R.onContentChange),
            S = (0, o.useRef)(0),
            A = (0, o.useRef)(''),
            L = (0, o.useRef)(0),
            V = (0, o.useRef)(null),
            B = (0, o.useRef)('right'),
            U = (0, o.useRef)(0),
            z = b ? K.Z : o.Fragment,
            X = b ? { as: Z.g7, allowPinchZoom: !0 } : void 0,
            H = (e) => {
              var t, n;
              let r = A.current + e,
                o = I().filter((e) => !e.disabled),
                u = document.activeElement,
                l =
                  null === (t = o.find((e) => e.ref.current === u)) || void 0 === t
                    ? void 0
                    : t.textValue,
                a = (function (e, t, n) {
                  var r;
                  let o = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
                    u =
                      ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
                      e.map((t, n) => e[(r + n) % e.length]));
                  1 === o.length && (u = u.filter((e) => e !== n));
                  let l = u.find((e) => e.toLowerCase().startsWith(o.toLowerCase()));
                  return l !== n ? l : void 0;
                })(
                  o.map((e) => e.textValue),
                  r,
                  l
                ),
                c =
                  null === (n = o.find((e) => e.textValue === a)) || void 0 === n
                    ? void 0
                    : n.ref.current;
              !(function e(t) {
                (A.current = t),
                  window.clearTimeout(S.current),
                  '' !== t && (S.current = window.setTimeout(() => e(''), 1e3));
              })(r),
                c && setTimeout(() => c.focus());
            };
          (0, o.useEffect)(() => () => window.clearTimeout(S.current), []), (0, p.EW)();
          let N = (0, o.useCallback)((e) => {
            var t, n, r;
            return (
              B.current === (null === (t = V.current) || void 0 === t ? void 0 : t.side) &&
              !!(r = null === (n = V.current) || void 0 === n ? void 0 : n.area) &&
              (function (e, t) {
                let { x: n, y: r } = e,
                  o = !1;
                for (let e = 0, u = t.length - 1; e < t.length; u = e++) {
                  let l = t[e].x,
                    a = t[e].y,
                    c = t[u].x,
                    i = t[u].y;
                  a > r != i > r && n < ((c - l) * (r - a)) / (i - a) + l && (o = !o);
                }
                return o;
              })({ x: e.clientX, y: e.clientY }, r)
            );
          }, []);
          return (0, o.createElement)(
            ea,
            {
              scope: n,
              searchRef: A,
              onItemEnter: (0, o.useCallback)(
                (e) => {
                  N(e) && e.preventDefault();
                },
                [N]
              ),
              onItemLeave: (0, o.useCallback)(
                (e) => {
                  var t;
                  N(e) || (null === (t = x.current) || void 0 === t || t.focus(), F(null));
                },
                [N]
              ),
              onTriggerLeave: (0, o.useCallback)(
                (e) => {
                  N(e) && e.preventDefault();
                },
                [N]
              ),
              pointerGraceTimerRef: L,
              onPointerGraceIntentChange: (0, o.useCallback)((e) => {
                V.current = e;
              }, []),
            },
            (0, o.createElement)(
              z,
              X,
              (0, o.createElement)(
                m.M,
                {
                  asChild: !0,
                  trapped: c,
                  onMountAutoFocus: (0, u.M)(i, (e) => {
                    var t;
                    e.preventDefault(), null === (t = x.current) || void 0 === t || t.focus();
                  }),
                  onUnmountAutoFocus: s,
                },
                (0, o.createElement)(
                  f.XB,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: d,
                    onEscapeKeyDown: w,
                    onPointerDownOutside: M,
                    onFocusOutside: h,
                    onInteractOutside: E,
                    onDismiss: _,
                  },
                  (0, o.createElement)(
                    T,
                    (0, r.Z)({ asChild: !0 }, k, {
                      dir: y.dir,
                      orientation: 'vertical',
                      loop: a,
                      currentTabStopId: P,
                      onCurrentTabStopIdChange: F,
                      onEntryFocus: (0, u.M)(v, (e) => {
                        y.isUsingKeyboardRef.current || e.preventDefault();
                      }),
                    }),
                    (0, o.createElement)(
                      g.VY,
                      (0, r.Z)(
                        {
                          role: 'menu',
                          'aria-orientation': 'vertical',
                          'data-state': ek(R.open),
                          'data-radix-menu-content': '',
                          dir: y.dir,
                        },
                        D,
                        C,
                        {
                          ref: O,
                          style: { outline: 'none', ...C.style },
                          onKeyDown: (0, u.M)(C.onKeyDown, (e) => {
                            let t =
                                e.target.closest('[data-radix-menu-content]') === e.currentTarget,
                              n = e.ctrlKey || e.altKey || e.metaKey,
                              r = 1 === e.key.length;
                            t && ('Tab' === e.key && e.preventDefault(), !n && r && H(e.key));
                            let o = x.current;
                            if (e.target !== o || !W.includes(e.key)) return;
                            e.preventDefault();
                            let u = I()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            G.includes(e.key) && u.reverse(),
                              (function (e) {
                                let t = document.activeElement;
                                for (let n of e)
                                  if (n === t || (n.focus(), document.activeElement !== t)) return;
                              })(u);
                          }),
                          onBlur: (0, u.M)(e.onBlur, (e) => {
                            e.currentTarget.contains(e.target) ||
                              (window.clearTimeout(S.current), (A.current = ''));
                          }),
                          onPointerMove: (0, u.M)(
                            e.onPointerMove,
                            eF((e) => {
                              let t = e.target,
                                n = U.current !== e.clientX;
                              if (e.currentTarget.contains(t) && n) {
                                let t = e.clientX > U.current ? 'right' : 'left';
                                (B.current = t), (U.current = e.clientX);
                              }
                            })
                          ),
                        }
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        ep = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...u } = e;
          return (0, o.createElement)(i.WV.div, (0, r.Z)({ role: 'group' }, u, { ref: t }));
        }),
        em = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, ...u } = e;
          return (0, o.createElement)(i.WV.div, (0, r.Z)({}, u, { ref: t }));
        }),
        ev = 'MenuItem',
        eg = 'menu.itemSelect',
        ew = (0, o.forwardRef)((e, t) => {
          let { disabled: n = !1, onSelect: a, ...c } = e,
            s = (0, o.useRef)(null),
            d = et(ev, e.__scopeMenu),
            f = ec(ev, e.__scopeMenu),
            p = (0, l.e)(t, s),
            m = (0, o.useRef)(!1);
          return (0, o.createElement)(
            eM,
            (0, r.Z)({}, c, {
              ref: p,
              disabled: n,
              onClick: (0, u.M)(e.onClick, () => {
                let e = s.current;
                if (!n && e) {
                  let t = new CustomEvent(eg, { bubbles: !0, cancelable: !0 });
                  e.addEventListener(eg, (e) => (null == a ? void 0 : a(e)), { once: !0 }),
                    (0, i.jH)(e, t),
                    t.defaultPrevented ? (m.current = !1) : d.onClose();
                }
              }),
              onPointerDown: (t) => {
                var n;
                null === (n = e.onPointerDown) || void 0 === n || n.call(e, t), (m.current = !0);
              },
              onPointerUp: (0, u.M)(e.onPointerUp, (e) => {
                var t;
                m.current || null === (t = e.currentTarget) || void 0 === t || t.click();
              }),
              onKeyDown: (0, u.M)(e.onKeyDown, (e) => {
                let t = '' !== f.searchRef.current;
                !n &&
                  (!t || ' ' !== e.key) &&
                  V.includes(e.key) &&
                  (e.currentTarget.click(), e.preventDefault());
              }),
            })
          );
        }),
        eM = (0, o.forwardRef)((e, t) => {
          let { __scopeMenu: n, disabled: a = !1, textValue: c, ...s } = e,
            d = ec(ev, n),
            f = $(n),
            p = (0, o.useRef)(null),
            m = (0, l.e)(t, p),
            [v, g] = (0, o.useState)(!1),
            [w, M] = (0, o.useState)('');
          return (
            (0, o.useEffect)(() => {
              let e = p.current;
              if (e) {
                var t;
                M((null !== (t = e.textContent) && void 0 !== t ? t : '').trim());
              }
            }, [s.children]),
            (0, o.createElement)(
              X.ItemSlot,
              { scope: n, disabled: a, textValue: null != c ? c : w },
              (0, o.createElement)(
                O,
                (0, r.Z)({ asChild: !0 }, f, { focusable: !a }),
                (0, o.createElement)(
                  i.WV.div,
                  (0, r.Z)(
                    {
                      role: 'menuitem',
                      'data-highlighted': v ? '' : void 0,
                      'aria-disabled': a || void 0,
                      'data-disabled': a ? '' : void 0,
                    },
                    s,
                    {
                      ref: m,
                      onPointerMove: (0, u.M)(
                        e.onPointerMove,
                        eF((e) => {
                          a
                            ? d.onItemLeave(e)
                            : (d.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus());
                        })
                      ),
                      onPointerLeave: (0, u.M)(
                        e.onPointerLeave,
                        eF((e) => d.onItemLeave(e))
                      ),
                      onFocus: (0, u.M)(e.onFocus, () => g(!0)),
                      onBlur: (0, u.M)(e.onBlur, () => g(!1)),
                    }
                  )
                )
              )
            )
          );
        }),
        [eh, eE] =
          ((e, t) => {
            let { checked: n = !1, onCheckedChange: l, ...a } = e;
            return (0, o.createElement)(
              eb,
              { scope: e.__scopeMenu, checked: n },
              (0, o.createElement)(
                ew,
                (0, r.Z)({ role: 'menuitemcheckbox', 'aria-checked': eI(n) ? 'mixed' : n }, a, {
                  ref: t,
                  'data-state': eP(n),
                  onSelect: (0, u.M)(a.onSelect, () => (null == l ? void 0 : l(!!eI(n) || !n)), {
                    checkForDefaultPrevented: !1,
                  }),
                })
              )
            );
          },
          N('MenuRadioGroup', { value: void 0, onValueChange: () => {} })),
        e_ =
          ((e, t) => {
            let { value: n, onValueChange: u, ...l } = e,
              a = (0, E.W)(u);
            return (0, o.createElement)(
              eh,
              { scope: e.__scopeMenu, value: n, onValueChange: a },
              (0, o.createElement)(ep, (0, r.Z)({}, l, { ref: t }))
            );
          },
          'MenuItemIndicator'),
        [eb, eC] = N(e_, { checked: !1 }),
        [eR, ey] =
          ((e, t) => {
            let { __scopeMenu: n, forceMount: u, ...l } = e,
              a = eC(e_, n);
            return (0, o.createElement)(
              M.z,
              { present: u || eI(a.checked) || !0 === a.checked },
              (0, o.createElement)(
                i.WV.span,
                (0, r.Z)({}, l, { ref: t, 'data-state': eP(a.checked) })
              )
            );
          },
          N('MenuSub')),
        eD = 'MenuSubTrigger';
      function ek(e) {
        return e ? 'open' : 'closed';
      }
      function eI(e) {
        return 'indeterminate' === e;
      }
      function eP(e) {
        return eI(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
      }
      function eF(e) {
        return (t) => ('mouse' === t.pointerType ? e(t) : void 0);
      }
      (e, t) => {
        let n = Q(eD, e.__scopeMenu),
          a = et(eD, e.__scopeMenu),
          c = ey(eD, e.__scopeMenu),
          i = ec(eD, e.__scopeMenu),
          s = (0, o.useRef)(null),
          { pointerGraceTimerRef: d, onPointerGraceIntentChange: f } = i,
          p = { __scopeMenu: e.__scopeMenu },
          m = (0, o.useCallback)(() => {
            s.current && window.clearTimeout(s.current), (s.current = null);
          }, []);
        return (
          (0, o.useEffect)(() => m, [m]),
          (0, o.useEffect)(() => {
            let e = d.current;
            return () => {
              window.clearTimeout(e), f(null);
            };
          }, [d, f]),
          (0, o.createElement)(
            en,
            (0, r.Z)({ asChild: !0 }, p),
            (0, o.createElement)(
              eM,
              (0, r.Z)(
                {
                  id: c.triggerId,
                  'aria-haspopup': 'menu',
                  'aria-expanded': n.open,
                  'aria-controls': c.contentId,
                  'data-state': ek(n.open),
                },
                e,
                {
                  ref: (0, l.F)(t, c.onTriggerChange),
                  onClick: (t) => {
                    var r;
                    null === (r = e.onClick) || void 0 === r || r.call(e, t),
                      e.disabled ||
                        t.defaultPrevented ||
                        (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
                  },
                  onPointerMove: (0, u.M)(
                    e.onPointerMove,
                    eF((t) => {
                      i.onItemEnter(t),
                        t.defaultPrevented ||
                          e.disabled ||
                          n.open ||
                          s.current ||
                          (i.onPointerGraceIntentChange(null),
                          (s.current = window.setTimeout(() => {
                            n.onOpenChange(!0), m();
                          }, 100)));
                    })
                  ),
                  onPointerLeave: (0, u.M)(
                    e.onPointerLeave,
                    eF((e) => {
                      var t, r;
                      m();
                      let o =
                        null === (t = n.content) || void 0 === t
                          ? void 0
                          : t.getBoundingClientRect();
                      if (o) {
                        let t = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side,
                          u = 'right' === t,
                          l = o[u ? 'left' : 'right'],
                          a = o[u ? 'right' : 'left'];
                        i.onPointerGraceIntentChange({
                          area: [
                            { x: e.clientX + (u ? -5 : 5), y: e.clientY },
                            { x: l, y: o.top },
                            { x: a, y: o.top },
                            { x: a, y: o.bottom },
                            { x: l, y: o.bottom },
                          ],
                          side: t,
                        }),
                          window.clearTimeout(d.current),
                          (d.current = window.setTimeout(
                            () => i.onPointerGraceIntentChange(null),
                            300
                          ));
                      } else {
                        if ((i.onTriggerLeave(e), e.defaultPrevented)) return;
                        i.onPointerGraceIntentChange(null);
                      }
                    })
                  ),
                  onKeyDown: (0, u.M)(e.onKeyDown, (t) => {
                    let r = '' !== i.searchRef.current;
                    if (!e.disabled && (!r || ' ' !== t.key) && B[a.dir].includes(t.key)) {
                      var o;
                      n.onOpenChange(!0),
                        null === (o = n.content) || void 0 === o || o.focus(),
                        t.preventDefault();
                    }
                  }),
                }
              )
            )
          )
        );
      },
        (e, t) => {
          let n = eu(el, e.__scopeMenu),
            { forceMount: a = n.forceMount, ...c } = e,
            i = Q(el, e.__scopeMenu),
            s = et(el, e.__scopeMenu),
            d = ey('MenuSubContent', e.__scopeMenu),
            f = (0, o.useRef)(null),
            p = (0, l.e)(t, f);
          return (0, o.createElement)(
            X.Provider,
            { scope: e.__scopeMenu },
            (0, o.createElement)(
              M.z,
              { present: a || i.open },
              (0, o.createElement)(
                X.Slot,
                { scope: e.__scopeMenu },
                (0, o.createElement)(
                  ef,
                  (0, r.Z)({ id: d.contentId, 'aria-labelledby': d.triggerId }, c, {
                    ref: p,
                    align: 'start',
                    side: 'rtl' === s.dir ? 'left' : 'right',
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: (e) => {
                      var t;
                      s.isUsingKeyboardRef.current &&
                        (null === (t = f.current) || void 0 === t || t.focus()),
                        e.preventDefault();
                    },
                    onCloseAutoFocus: (e) => e.preventDefault(),
                    onFocusOutside: (0, u.M)(e.onFocusOutside, (e) => {
                      e.target !== d.trigger && i.onOpenChange(!1);
                    }),
                    onEscapeKeyDown: (0, u.M)(e.onEscapeKeyDown, (e) => {
                      s.onClose(), e.preventDefault();
                    }),
                    onKeyDown: (0, u.M)(e.onKeyDown, (e) => {
                      let t = e.currentTarget.contains(e.target),
                        n = U[s.dir].includes(e.key);
                      if (t && n) {
                        var r;
                        i.onOpenChange(!1),
                          null === (r = d.trigger) || void 0 === r || r.focus(),
                          e.preventDefault();
                      }
                    }),
                  })
                )
              )
            )
          );
        };
      let eT = (e) => {
          let {
              __scopeMenu: t,
              open: n = !1,
              children: r,
              dir: u,
              onOpenChange: l,
              modal: a = !0,
            } = e,
            c = q(t),
            [i, s] = (0, o.useState)(null),
            f = (0, o.useRef)(!1),
            p = (0, E.W)(l),
            m = (0, d.gm)(u);
          return (
            (0, o.useEffect)(() => {
              let e = () => {
                  (f.current = !0),
                    document.addEventListener('pointerdown', t, { capture: !0, once: !0 }),
                    document.addEventListener('pointermove', t, { capture: !0, once: !0 });
                },
                t = () => (f.current = !1);
              return (
                document.addEventListener('keydown', e, { capture: !0 }),
                () => {
                  document.removeEventListener('keydown', e, { capture: !0 }),
                    document.removeEventListener('pointerdown', t, { capture: !0 }),
                    document.removeEventListener('pointermove', t, { capture: !0 });
                }
              );
            }, []),
            (0, o.createElement)(
              g.fC,
              c,
              (0, o.createElement)(
                J,
                { scope: t, open: n, onOpenChange: p, content: i, onContentChange: s },
                (0, o.createElement)(
                  ee,
                  {
                    scope: t,
                    onClose: (0, o.useCallback)(() => p(!1), [p]),
                    isUsingKeyboardRef: f,
                    dir: m,
                    modal: a,
                  },
                  r
                )
              )
            )
          );
        },
        ex = (e) => {
          let { __scopeMenu: t, forceMount: n, children: r, container: u } = e,
            l = Q(er, t);
          return (0, o.createElement)(
            eo,
            { scope: t, forceMount: n },
            (0, o.createElement)(
              M.z,
              { present: n || l.open },
              (0, o.createElement)(w.h, { asChild: !0, container: u }, r)
            )
          );
        },
        eO = 'DropdownMenu',
        [eS, eA] = (0, a.b)(eO, [j]),
        eZ = j(),
        [eL, eK] = eS(eO),
        eV = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, disabled: a = !1, ...c } = e,
            s = eK('DropdownMenuTrigger', n),
            d = eZ(n);
          return (0, o.createElement)(
            en,
            (0, r.Z)({ asChild: !0 }, d),
            (0, o.createElement)(
              i.WV.button,
              (0, r.Z)(
                {
                  type: 'button',
                  id: s.triggerId,
                  'aria-haspopup': 'menu',
                  'aria-expanded': s.open,
                  'aria-controls': s.open ? s.contentId : void 0,
                  'data-state': s.open ? 'open' : 'closed',
                  'data-disabled': a ? '' : void 0,
                  disabled: a,
                },
                c,
                {
                  ref: (0, l.F)(t, s.triggerRef),
                  onPointerDown: (0, u.M)(e.onPointerDown, (e) => {
                    a ||
                      0 !== e.button ||
                      !1 !== e.ctrlKey ||
                      (s.onOpenToggle(), s.open || e.preventDefault());
                  }),
                  onKeyDown: (0, u.M)(e.onKeyDown, (e) => {
                    !a &&
                      (['Enter', ' '].includes(e.key) && s.onOpenToggle(),
                      'ArrowDown' === e.key && s.onOpenChange(!0),
                      ['Enter', ' ', 'ArrowDown'].includes(e.key) && e.preventDefault());
                  }),
                }
              )
            )
          );
        }),
        eG = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...l } = e,
            a = eK('DropdownMenuContent', n),
            c = eZ(n),
            i = (0, o.useRef)(!1);
          return (0, o.createElement)(
            ei,
            (0, r.Z)({ id: a.contentId, 'aria-labelledby': a.triggerId }, c, l, {
              ref: t,
              onCloseAutoFocus: (0, u.M)(e.onCloseAutoFocus, (e) => {
                var t;
                i.current || null === (t = a.triggerRef.current) || void 0 === t || t.focus(),
                  (i.current = !1),
                  e.preventDefault();
              }),
              onInteractOutside: (0, u.M)(e.onInteractOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  r = 2 === t.button || n;
                (!a.modal || r) && (i.current = !0);
              }),
              style: {
                ...e.style,
                '--radix-dropdown-menu-content-transform-origin':
                  'var(--radix-popper-transform-origin)',
                '--radix-dropdown-menu-content-available-width':
                  'var(--radix-popper-available-width)',
                '--radix-dropdown-menu-content-available-height':
                  'var(--radix-popper-available-height)',
                '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
                '--radix-dropdown-menu-trigger-height': 'var(--radix-popper-anchor-height)',
              },
            })
          );
        }),
        eW = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...u } = e,
            l = eZ(n);
          return (0, o.createElement)(em, (0, r.Z)({}, l, u, { ref: t }));
        }),
        eB = (0, o.forwardRef)((e, t) => {
          let { __scopeDropdownMenu: n, ...u } = e,
            l = eZ(n);
          return (0, o.createElement)(ew, (0, r.Z)({}, l, u, { ref: t }));
        }),
        eU = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: n,
              dir: u,
              open: l,
              defaultOpen: a,
              onOpenChange: i,
              modal: s = !0,
            } = e,
            d = eZ(t),
            f = (0, o.useRef)(null),
            [p = !1, m] = (0, c.T)({ prop: l, defaultProp: a, onChange: i });
          return (0, o.createElement)(
            eL,
            {
              scope: t,
              triggerId: (0, v.M)(),
              triggerRef: f,
              contentId: (0, v.M)(),
              open: p,
              onOpenChange: m,
              onOpenToggle: (0, o.useCallback)(() => m((e) => !e), [m]),
              modal: s,
            },
            (0, o.createElement)(
              eT,
              (0, r.Z)({}, d, { open: p, onOpenChange: m, dir: u, modal: s }),
              n
            )
          );
        },
        ez = eV,
        eX = (e) => {
          let { __scopeDropdownMenu: t, ...n } = e,
            u = eZ(t);
          return (0, o.createElement)(ex, (0, r.Z)({}, u, n));
        },
        eY = eG,
        eH = eW,
        eN = eB;
    },
  },
]);
