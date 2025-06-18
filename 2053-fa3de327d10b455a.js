!(function () {
  try {
    var e =
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : {},
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = '3d532f07-e352-4173-a7c0-2ba312abb086'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-3d532f07-e352-4173-a7c0-2ba312abb086'));
  } catch (e) {}
})();
var _sentryModuleMetadataGlobal =
  'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
        ? self
        : {};
('use strict');
(_sentryModuleMetadataGlobal._sentryModuleMetadata =
  _sentryModuleMetadataGlobal._sentryModuleMetadata || {}),
  (_sentryModuleMetadataGlobal._sentryModuleMetadata[
    new _sentryModuleMetadataGlobal.Error().stack
  ] = Object.assign(
    {},
    _sentryModuleMetadataGlobal._sentryModuleMetadata[
      new _sentryModuleMetadataGlobal.Error().stack
    ],
    { '_sentryBundlerPluginAppKey:pluno-sentry-frontend-application-key': !0 }
  )),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2053],
    {
      29470: (e, r, n) => {
        n.d(r, { C1: () => j, bL: () => R });
        var t = n(14232),
          o = n(10714),
          a = n(91844),
          l = n(33716),
          u = n(58162),
          i = n(61676),
          s = n(87552),
          d = n(96822),
          c = n(66326),
          p = n(37876),
          f = 'Checkbox',
          [m, v] = (0, a.A)(f),
          [h, w] = m(f),
          g = t.forwardRef((e, r) => {
            let {
                __scopeCheckbox: n,
                name: a,
                checked: i,
                defaultChecked: s,
                required: d,
                disabled: m,
                value: v = 'on',
                onCheckedChange: w,
                form: g,
                ...y
              } = e,
              [b, R] = t.useState(null),
              j = (0, o.s)(r, (e) => R(e)),
              k = t.useRef(!1),
              D = !b || g || !!b.closest('form'),
              [_, I] = (0, u.i)({ prop: i, defaultProp: s ?? !1, onChange: w, caller: f }),
              E = t.useRef(_);
            return (
              t.useEffect(() => {
                let e = b?.form;
                if (e) {
                  let r = () => I(E.current);
                  return e.addEventListener('reset', r), () => e.removeEventListener('reset', r);
                }
              }, [b, I]),
              (0, p.jsxs)(h, {
                scope: n,
                state: _,
                disabled: m,
                children: [
                  (0, p.jsx)(c.sG.button, {
                    type: 'button',
                    role: 'checkbox',
                    'aria-checked': M(_) ? 'mixed' : _,
                    'aria-required': d,
                    'data-state': C(_),
                    'data-disabled': m ? '' : void 0,
                    disabled: m,
                    value: v,
                    ...y,
                    ref: j,
                    onKeyDown: (0, l.m)(e.onKeyDown, (e) => {
                      'Enter' === e.key && e.preventDefault();
                    }),
                    onClick: (0, l.m)(e.onClick, (e) => {
                      I((e) => !!M(e) || !e),
                        D &&
                          ((k.current = e.isPropagationStopped()),
                          k.current || e.stopPropagation());
                    }),
                  }),
                  D &&
                    (0, p.jsx)(x, {
                      control: b,
                      bubbles: !k.current,
                      name: a,
                      value: v,
                      checked: _,
                      required: d,
                      disabled: m,
                      form: g,
                      style: { transform: 'translateX(-100%)' },
                      defaultChecked: !M(s) && s,
                    }),
                ],
              })
            );
          });
        g.displayName = f;
        var y = 'CheckboxIndicator',
          b = t.forwardRef((e, r) => {
            let { __scopeCheckbox: n, forceMount: t, ...o } = e,
              a = w(y, n);
            return (0, p.jsx)(d.C, {
              present: t || M(a.state) || !0 === a.state,
              children: (0, p.jsx)(c.sG.span, {
                'data-state': C(a.state),
                'data-disabled': a.disabled ? '' : void 0,
                ...o,
                ref: r,
                style: { pointerEvents: 'none', ...e.style },
              }),
            });
          });
        b.displayName = y;
        var x = t.forwardRef(
          (
            {
              __scopeCheckbox: e,
              control: r,
              checked: n,
              bubbles: a = !0,
              defaultChecked: l,
              ...u
            },
            d
          ) => {
            let f = t.useRef(null),
              m = (0, o.s)(f, d),
              v = (0, i.Z)(n),
              h = (0, s.X)(r);
            t.useEffect(() => {
              let e = f.current;
              if (!e) return;
              let r = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                'checked'
              ).set;
              if (v !== n && r) {
                let t = new Event('click', { bubbles: a });
                (e.indeterminate = M(n)), r.call(e, !M(n) && n), e.dispatchEvent(t);
              }
            }, [v, n, a]);
            let w = t.useRef(!M(n) && n);
            return (0, p.jsx)(c.sG.input, {
              type: 'checkbox',
              'aria-hidden': !0,
              defaultChecked: l ?? w.current,
              ...u,
              tabIndex: -1,
              ref: m,
              style: {
                ...u.style,
                ...h,
                position: 'absolute',
                pointerEvents: 'none',
                opacity: 0,
                margin: 0,
              },
            });
          }
        );
        function M(e) {
          return 'indeterminate' === e;
        }
        function C(e) {
          return M(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
        }
        x.displayName = 'CheckboxBubbleInput';
        var R = g,
          j = b;
      },
      64455: (e, r, n) => {
        n.d(r, { RG: () => x, bL: () => E, q7: () => P });
        var t = n(14232),
          o = n(33716),
          a = n(88775),
          l = n(10714),
          u = n(91844),
          i = n(70294),
          s = n(66326),
          d = n(62146),
          c = n(58162),
          p = n(14966),
          f = n(37876),
          m = 'rovingFocusGroup.onEntryFocus',
          v = { bubbles: !1, cancelable: !0 },
          h = 'RovingFocusGroup',
          [w, g, y] = (0, a.N)(h),
          [b, x] = (0, u.A)(h, [y]),
          [M, C] = b(h),
          R = t.forwardRef((e, r) =>
            (0, f.jsx)(w.Provider, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, f.jsx)(w.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: (0, f.jsx)(j, { ...e, ref: r }),
              }),
            })
          );
        R.displayName = h;
        var j = t.forwardRef((e, r) => {
            let {
                __scopeRovingFocusGroup: n,
                orientation: a,
                loop: u = !1,
                dir: i,
                currentTabStopId: w,
                defaultCurrentTabStopId: y,
                onCurrentTabStopIdChange: b,
                onEntryFocus: x,
                preventScrollOnEntryFocus: C = !1,
                ...R
              } = e,
              j = t.useRef(null),
              k = (0, l.s)(r, j),
              D = (0, p.jH)(i),
              [_, E] = (0, c.i)({ prop: w, defaultProp: y ?? null, onChange: b, caller: h }),
              [P, T] = t.useState(!1),
              S = (0, d.c)(x),
              N = g(n),
              L = t.useRef(!1),
              [A, F] = t.useState(0);
            return (
              t.useEffect(() => {
                let e = j.current;
                if (e) return e.addEventListener(m, S), () => e.removeEventListener(m, S);
              }, [S]),
              (0, f.jsx)(M, {
                scope: n,
                orientation: a,
                dir: D,
                loop: u,
                currentTabStopId: _,
                onItemFocus: t.useCallback((e) => E(e), [E]),
                onItemShiftTab: t.useCallback(() => T(!0), []),
                onFocusableItemAdd: t.useCallback(() => F((e) => e + 1), []),
                onFocusableItemRemove: t.useCallback(() => F((e) => e - 1), []),
                children: (0, f.jsx)(s.sG.div, {
                  tabIndex: P || 0 === A ? -1 : 0,
                  'data-orientation': a,
                  ...R,
                  ref: k,
                  style: { outline: 'none', ...e.style },
                  onMouseDown: (0, o.m)(e.onMouseDown, () => {
                    L.current = !0;
                  }),
                  onFocus: (0, o.m)(e.onFocus, (e) => {
                    let r = !L.current;
                    if (e.target === e.currentTarget && r && !P) {
                      let r = new CustomEvent(m, v);
                      if ((e.currentTarget.dispatchEvent(r), !r.defaultPrevented)) {
                        let e = N().filter((e) => e.focusable);
                        I(
                          [e.find((e) => e.active), e.find((e) => e.id === _), ...e]
                            .filter(Boolean)
                            .map((e) => e.ref.current),
                          C
                        );
                      }
                    }
                    L.current = !1;
                  }),
                  onBlur: (0, o.m)(e.onBlur, () => T(!1)),
                }),
              })
            );
          }),
          k = 'RovingFocusGroupItem',
          D = t.forwardRef((e, r) => {
            let {
                __scopeRovingFocusGroup: n,
                focusable: a = !0,
                active: l = !1,
                tabStopId: u,
                children: d,
                ...c
              } = e,
              p = (0, i.B)(),
              m = u || p,
              v = C(k, n),
              h = v.currentTabStopId === m,
              y = g(n),
              { onFocusableItemAdd: b, onFocusableItemRemove: x, currentTabStopId: M } = v;
            return (
              t.useEffect(() => {
                if (a) return b(), () => x();
              }, [a, b, x]),
              (0, f.jsx)(w.ItemSlot, {
                scope: n,
                id: m,
                focusable: a,
                active: l,
                children: (0, f.jsx)(s.sG.span, {
                  tabIndex: h ? 0 : -1,
                  'data-orientation': v.orientation,
                  ...c,
                  ref: r,
                  onMouseDown: (0, o.m)(e.onMouseDown, (e) => {
                    a ? v.onItemFocus(m) : e.preventDefault();
                  }),
                  onFocus: (0, o.m)(e.onFocus, () => v.onItemFocus(m)),
                  onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                    if ('Tab' === e.key && e.shiftKey) return void v.onItemShiftTab();
                    if (e.target !== e.currentTarget) return;
                    let r = (function (e, r, n) {
                      var t;
                      let o =
                        ((t = e.key),
                        'rtl' !== n
                          ? t
                          : 'ArrowLeft' === t
                            ? 'ArrowRight'
                            : 'ArrowRight' === t
                              ? 'ArrowLeft'
                              : t);
                      if (
                        !('vertical' === r && ['ArrowLeft', 'ArrowRight'].includes(o)) &&
                        !('horizontal' === r && ['ArrowUp', 'ArrowDown'].includes(o))
                      )
                        return _[o];
                    })(e, v.orientation, v.dir);
                    if (void 0 !== r) {
                      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                      e.preventDefault();
                      let n = y()
                        .filter((e) => e.focusable)
                        .map((e) => e.ref.current);
                      if ('last' === r) n.reverse();
                      else if ('prev' === r || 'next' === r) {
                        'prev' === r && n.reverse();
                        let t = n.indexOf(e.currentTarget);
                        n = v.loop
                          ? (function (e, r) {
                              return e.map((n, t) => e[(r + t) % e.length]);
                            })(n, t + 1)
                          : n.slice(t + 1);
                      }
                      setTimeout(() => I(n));
                    }
                  }),
                  children:
                    'function' == typeof d ? d({ isCurrentTabStop: h, hasTabStop: null != M }) : d,
                }),
              })
            );
          });
        D.displayName = k;
        var _ = {
          ArrowLeft: 'prev',
          ArrowUp: 'prev',
          ArrowRight: 'next',
          ArrowDown: 'next',
          PageUp: 'first',
          Home: 'first',
          PageDown: 'last',
          End: 'last',
        };
        function I(e, r = !1) {
          let n = document.activeElement;
          for (let t of e)
            if (t === n || (t.focus({ preventScroll: r }), document.activeElement !== n)) return;
        }
        var E = R,
          P = D;
      },
      97154: (e, r, n) => {
        n.d(r, {
          H_: () => e8,
          UC: () => e2,
          YJ: () => e7,
          q7: () => e4,
          VF: () => re,
          JU: () => e3,
          ZL: () => e6,
          z6: () => e5,
          hN: () => e9,
          bL: () => e0,
          wv: () => rr,
          Pb: () => rn,
          G5: () => ro,
          ZP: () => rt,
          l9: () => e1,
        });
        var t = n(14232),
          o = n(33716),
          a = n(10714),
          l = n(91844),
          u = n(58162),
          i = n(66326),
          s = n(88775),
          d = n(14966),
          c = n(73520),
          p = n(22658),
          f = n(90870),
          m = n(70294),
          v = n(86062),
          h = n(31893),
          w = n(96822),
          g = n(64455),
          y = n(82987),
          b = n(62146),
          x = n(94769),
          M = n(62634),
          C = n(37876),
          R = ['Enter', ' '],
          j = ['ArrowUp', 'PageDown', 'End'],
          k = ['ArrowDown', 'PageUp', 'Home', ...j],
          D = { ltr: [...R, 'ArrowRight'], rtl: [...R, 'ArrowLeft'] },
          _ = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
          I = 'Menu',
          [E, P, T] = (0, s.N)(I),
          [S, N] = (0, l.A)(I, [T, v.Bk, g.RG]),
          L = (0, v.Bk)(),
          A = (0, g.RG)(),
          [F, O] = S(I),
          [G, K] = S(I),
          B = (e) => {
            let {
                __scopeMenu: r,
                open: n = !1,
                children: o,
                dir: a,
                onOpenChange: l,
                modal: u = !0,
              } = e,
              i = L(r),
              [s, c] = t.useState(null),
              p = t.useRef(!1),
              f = (0, b.c)(l),
              m = (0, d.jH)(a);
            return (
              t.useEffect(() => {
                let e = () => {
                    (p.current = !0),
                      document.addEventListener('pointerdown', r, { capture: !0, once: !0 }),
                      document.addEventListener('pointermove', r, { capture: !0, once: !0 });
                  },
                  r = () => (p.current = !1);
                return (
                  document.addEventListener('keydown', e, { capture: !0 }),
                  () => {
                    document.removeEventListener('keydown', e, { capture: !0 }),
                      document.removeEventListener('pointerdown', r, { capture: !0 }),
                      document.removeEventListener('pointermove', r, { capture: !0 });
                  }
                );
              }, []),
              (0, C.jsx)(v.bL, {
                ...i,
                children: (0, C.jsx)(F, {
                  scope: r,
                  open: n,
                  onOpenChange: f,
                  content: s,
                  onContentChange: c,
                  children: (0, C.jsx)(G, {
                    scope: r,
                    onClose: t.useCallback(() => f(!1), [f]),
                    isUsingKeyboardRef: p,
                    dir: m,
                    modal: u,
                    children: o,
                  }),
                }),
              })
            );
          };
        B.displayName = I;
        var U = t.forwardRef((e, r) => {
          let { __scopeMenu: n, ...t } = e,
            o = L(n);
          return (0, C.jsx)(v.Mz, { ...o, ...t, ref: r });
        });
        U.displayName = 'MenuAnchor';
        var V = 'MenuPortal',
          [X, q] = S(V, { forceMount: void 0 }),
          H = (e) => {
            let { __scopeMenu: r, forceMount: n, children: t, container: o } = e,
              a = O(V, r);
            return (0, C.jsx)(X, {
              scope: r,
              forceMount: n,
              children: (0, C.jsx)(w.C, {
                present: n || a.open,
                children: (0, C.jsx)(h.Z, { asChild: !0, container: o, children: t }),
              }),
            });
          };
        H.displayName = V;
        var Z = 'MenuContent',
          [z, Y] = S(Z),
          J = t.forwardRef((e, r) => {
            let n = q(Z, e.__scopeMenu),
              { forceMount: t = n.forceMount, ...o } = e,
              a = O(Z, e.__scopeMenu),
              l = K(Z, e.__scopeMenu);
            return (0, C.jsx)(E.Provider, {
              scope: e.__scopeMenu,
              children: (0, C.jsx)(w.C, {
                present: t || a.open,
                children: (0, C.jsx)(E.Slot, {
                  scope: e.__scopeMenu,
                  children: l.modal
                    ? (0, C.jsx)(W, { ...o, ref: r })
                    : (0, C.jsx)(Q, { ...o, ref: r }),
                }),
              }),
            });
          }),
          W = t.forwardRef((e, r) => {
            let n = O(Z, e.__scopeMenu),
              l = t.useRef(null),
              u = (0, a.s)(r, l);
            return (
              t.useEffect(() => {
                let e = l.current;
                if (e) return (0, x.Eq)(e);
              }, []),
              (0, C.jsx)(ee, {
                ...e,
                ref: u,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: (0, o.m)(e.onFocusOutside, (e) => e.preventDefault(), {
                  checkForDefaultPrevented: !1,
                }),
                onDismiss: () => n.onOpenChange(!1),
              })
            );
          }),
          Q = t.forwardRef((e, r) => {
            let n = O(Z, e.__scopeMenu);
            return (0, C.jsx)(ee, {
              ...e,
              ref: r,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              onDismiss: () => n.onOpenChange(!1),
            });
          }),
          $ = (0, y.TL)('MenuContent.ScrollLock'),
          ee = t.forwardRef((e, r) => {
            let {
                __scopeMenu: n,
                loop: l = !1,
                trapFocus: u,
                onOpenAutoFocus: i,
                onCloseAutoFocus: s,
                disableOutsidePointerEvents: d,
                onEntryFocus: m,
                onEscapeKeyDown: h,
                onPointerDownOutside: w,
                onFocusOutside: y,
                onInteractOutside: b,
                onDismiss: x,
                disableOutsideScroll: R,
                ...D
              } = e,
              _ = O(Z, n),
              I = K(Z, n),
              E = L(n),
              T = A(n),
              S = P(n),
              [N, F] = t.useState(null),
              G = t.useRef(null),
              B = (0, a.s)(r, G, _.onContentChange),
              U = t.useRef(0),
              V = t.useRef(''),
              X = t.useRef(0),
              q = t.useRef(null),
              H = t.useRef('right'),
              Y = t.useRef(0),
              J = R ? M.A : t.Fragment,
              W = (e) => {
                let r = V.current + e,
                  n = S().filter((e) => !e.disabled),
                  t = document.activeElement,
                  o = n.find((e) => e.ref.current === t)?.textValue,
                  a = (function (e, r, n) {
                    var t;
                    let o = r.length > 1 && Array.from(r).every((e) => e === r[0]) ? r[0] : r,
                      a = n ? e.indexOf(n) : -1,
                      l = ((t = Math.max(a, 0)), e.map((r, n) => e[(t + n) % e.length]));
                    1 === o.length && (l = l.filter((e) => e !== n));
                    let u = l.find((e) => e.toLowerCase().startsWith(o.toLowerCase()));
                    return u !== n ? u : void 0;
                  })(
                    n.map((e) => e.textValue),
                    r,
                    o
                  ),
                  l = n.find((e) => e.textValue === a)?.ref.current;
                !(function e(r) {
                  (V.current = r),
                    window.clearTimeout(U.current),
                    '' !== r && (U.current = window.setTimeout(() => e(''), 1e3));
                })(r),
                  l && setTimeout(() => l.focus());
              };
            t.useEffect(() => () => window.clearTimeout(U.current), []), (0, p.Oh)();
            let Q = t.useCallback(
              (e) =>
                H.current === q.current?.side &&
                (function (e, r) {
                  return (
                    !!r &&
                    (function (e, r) {
                      let { x: n, y: t } = e,
                        o = !1;
                      for (let e = 0, a = r.length - 1; e < r.length; a = e++) {
                        let l = r[e],
                          u = r[a],
                          i = l.x,
                          s = l.y,
                          d = u.x,
                          c = u.y;
                        s > t != c > t && n < ((d - i) * (t - s)) / (c - s) + i && (o = !o);
                      }
                      return o;
                    })({ x: e.clientX, y: e.clientY }, r)
                  );
                })(e, q.current?.area),
              []
            );
            return (0, C.jsx)(z, {
              scope: n,
              searchRef: V,
              onItemEnter: t.useCallback(
                (e) => {
                  Q(e) && e.preventDefault();
                },
                [Q]
              ),
              onItemLeave: t.useCallback(
                (e) => {
                  Q(e) || (G.current?.focus(), F(null));
                },
                [Q]
              ),
              onTriggerLeave: t.useCallback(
                (e) => {
                  Q(e) && e.preventDefault();
                },
                [Q]
              ),
              pointerGraceTimerRef: X,
              onPointerGraceIntentChange: t.useCallback((e) => {
                q.current = e;
              }, []),
              children: (0, C.jsx)(J, {
                ...(R ? { as: $, allowPinchZoom: !0 } : void 0),
                children: (0, C.jsx)(f.n, {
                  asChild: !0,
                  trapped: u,
                  onMountAutoFocus: (0, o.m)(i, (e) => {
                    e.preventDefault(), G.current?.focus({ preventScroll: !0 });
                  }),
                  onUnmountAutoFocus: s,
                  children: (0, C.jsx)(c.qW, {
                    asChild: !0,
                    disableOutsidePointerEvents: d,
                    onEscapeKeyDown: h,
                    onPointerDownOutside: w,
                    onFocusOutside: y,
                    onInteractOutside: b,
                    onDismiss: x,
                    children: (0, C.jsx)(g.bL, {
                      asChild: !0,
                      ...T,
                      dir: I.dir,
                      orientation: 'vertical',
                      loop: l,
                      currentTabStopId: N,
                      onCurrentTabStopIdChange: F,
                      onEntryFocus: (0, o.m)(m, (e) => {
                        I.isUsingKeyboardRef.current || e.preventDefault();
                      }),
                      preventScrollOnEntryFocus: !0,
                      children: (0, C.jsx)(v.UC, {
                        role: 'menu',
                        'aria-orientation': 'vertical',
                        'data-state': e_(_.open),
                        'data-radix-menu-content': '',
                        dir: I.dir,
                        ...E,
                        ...D,
                        ref: B,
                        style: { outline: 'none', ...D.style },
                        onKeyDown: (0, o.m)(D.onKeyDown, (e) => {
                          let r = e.target.closest('[data-radix-menu-content]') === e.currentTarget,
                            n = e.ctrlKey || e.altKey || e.metaKey,
                            t = 1 === e.key.length;
                          r && ('Tab' === e.key && e.preventDefault(), !n && t && W(e.key));
                          let o = G.current;
                          if (e.target !== o || !k.includes(e.key)) return;
                          e.preventDefault();
                          let a = S()
                            .filter((e) => !e.disabled)
                            .map((e) => e.ref.current);
                          j.includes(e.key) && a.reverse(),
                            (function (e) {
                              let r = document.activeElement;
                              for (let n of e)
                                if (n === r || (n.focus(), document.activeElement !== r)) return;
                            })(a);
                        }),
                        onBlur: (0, o.m)(e.onBlur, (e) => {
                          e.currentTarget.contains(e.target) ||
                            (window.clearTimeout(U.current), (V.current = ''));
                        }),
                        onPointerMove: (0, o.m)(
                          e.onPointerMove,
                          eP((e) => {
                            let r = e.target,
                              n = Y.current !== e.clientX;
                            e.currentTarget.contains(r) &&
                              n &&
                              ((H.current = e.clientX > Y.current ? 'right' : 'left'),
                              (Y.current = e.clientX));
                          })
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            });
          });
        J.displayName = Z;
        var er = t.forwardRef((e, r) => {
          let { __scopeMenu: n, ...t } = e;
          return (0, C.jsx)(i.sG.div, { role: 'group', ...t, ref: r });
        });
        er.displayName = 'MenuGroup';
        var en = t.forwardRef((e, r) => {
          let { __scopeMenu: n, ...t } = e;
          return (0, C.jsx)(i.sG.div, { ...t, ref: r });
        });
        en.displayName = 'MenuLabel';
        var et = 'MenuItem',
          eo = 'menu.itemSelect',
          ea = t.forwardRef((e, r) => {
            let { disabled: n = !1, onSelect: l, ...u } = e,
              s = t.useRef(null),
              d = K(et, e.__scopeMenu),
              c = Y(et, e.__scopeMenu),
              p = (0, a.s)(r, s),
              f = t.useRef(!1);
            return (0, C.jsx)(el, {
              ...u,
              ref: p,
              disabled: n,
              onClick: (0, o.m)(e.onClick, () => {
                let e = s.current;
                if (!n && e) {
                  let r = new CustomEvent(eo, { bubbles: !0, cancelable: !0 });
                  e.addEventListener(eo, (e) => l?.(e), { once: !0 }),
                    (0, i.hO)(e, r),
                    r.defaultPrevented ? (f.current = !1) : d.onClose();
                }
              }),
              onPointerDown: (r) => {
                e.onPointerDown?.(r), (f.current = !0);
              },
              onPointerUp: (0, o.m)(e.onPointerUp, (e) => {
                f.current || e.currentTarget?.click();
              }),
              onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                let r = '' !== c.searchRef.current;
                n ||
                  (r && ' ' === e.key) ||
                  (R.includes(e.key) && (e.currentTarget.click(), e.preventDefault()));
              }),
            });
          });
        ea.displayName = et;
        var el = t.forwardRef((e, r) => {
            let { __scopeMenu: n, disabled: l = !1, textValue: u, ...s } = e,
              d = Y(et, n),
              c = A(n),
              p = t.useRef(null),
              f = (0, a.s)(r, p),
              [m, v] = t.useState(!1),
              [h, w] = t.useState('');
            return (
              t.useEffect(() => {
                let e = p.current;
                e && w((e.textContent ?? '').trim());
              }, [s.children]),
              (0, C.jsx)(E.ItemSlot, {
                scope: n,
                disabled: l,
                textValue: u ?? h,
                children: (0, C.jsx)(g.q7, {
                  asChild: !0,
                  ...c,
                  focusable: !l,
                  children: (0, C.jsx)(i.sG.div, {
                    role: 'menuitem',
                    'data-highlighted': m ? '' : void 0,
                    'aria-disabled': l || void 0,
                    'data-disabled': l ? '' : void 0,
                    ...s,
                    ref: f,
                    onPointerMove: (0, o.m)(
                      e.onPointerMove,
                      eP((e) => {
                        l
                          ? d.onItemLeave(e)
                          : (d.onItemEnter(e),
                            e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
                      })
                    ),
                    onPointerLeave: (0, o.m)(
                      e.onPointerLeave,
                      eP((e) => d.onItemLeave(e))
                    ),
                    onFocus: (0, o.m)(e.onFocus, () => v(!0)),
                    onBlur: (0, o.m)(e.onBlur, () => v(!1)),
                  }),
                }),
              })
            );
          }),
          eu = t.forwardRef((e, r) => {
            let { checked: n = !1, onCheckedChange: t, ...a } = e;
            return (0, C.jsx)(ev, {
              scope: e.__scopeMenu,
              checked: n,
              children: (0, C.jsx)(ea, {
                role: 'menuitemcheckbox',
                'aria-checked': eI(n) ? 'mixed' : n,
                ...a,
                ref: r,
                'data-state': eE(n),
                onSelect: (0, o.m)(a.onSelect, () => t?.(!!eI(n) || !n), {
                  checkForDefaultPrevented: !1,
                }),
              }),
            });
          });
        eu.displayName = 'MenuCheckboxItem';
        var ei = 'MenuRadioGroup',
          [es, ed] = S(ei, { value: void 0, onValueChange: () => {} }),
          ec = t.forwardRef((e, r) => {
            let { value: n, onValueChange: t, ...o } = e,
              a = (0, b.c)(t);
            return (0, C.jsx)(es, {
              scope: e.__scopeMenu,
              value: n,
              onValueChange: a,
              children: (0, C.jsx)(er, { ...o, ref: r }),
            });
          });
        ec.displayName = ei;
        var ep = 'MenuRadioItem',
          ef = t.forwardRef((e, r) => {
            let { value: n, ...t } = e,
              a = ed(ep, e.__scopeMenu),
              l = n === a.value;
            return (0, C.jsx)(ev, {
              scope: e.__scopeMenu,
              checked: l,
              children: (0, C.jsx)(ea, {
                role: 'menuitemradio',
                'aria-checked': l,
                ...t,
                ref: r,
                'data-state': eE(l),
                onSelect: (0, o.m)(t.onSelect, () => a.onValueChange?.(n), {
                  checkForDefaultPrevented: !1,
                }),
              }),
            });
          });
        ef.displayName = ep;
        var em = 'MenuItemIndicator',
          [ev, eh] = S(em, { checked: !1 }),
          ew = t.forwardRef((e, r) => {
            let { __scopeMenu: n, forceMount: t, ...o } = e,
              a = eh(em, n);
            return (0, C.jsx)(w.C, {
              present: t || eI(a.checked) || !0 === a.checked,
              children: (0, C.jsx)(i.sG.span, { ...o, ref: r, 'data-state': eE(a.checked) }),
            });
          });
        ew.displayName = em;
        var eg = t.forwardRef((e, r) => {
          let { __scopeMenu: n, ...t } = e;
          return (0, C.jsx)(i.sG.div, {
            role: 'separator',
            'aria-orientation': 'horizontal',
            ...t,
            ref: r,
          });
        });
        eg.displayName = 'MenuSeparator';
        var ey = t.forwardRef((e, r) => {
          let { __scopeMenu: n, ...t } = e,
            o = L(n);
          return (0, C.jsx)(v.i3, { ...o, ...t, ref: r });
        });
        ey.displayName = 'MenuArrow';
        var eb = 'MenuSub',
          [ex, eM] = S(eb),
          eC = (e) => {
            let { __scopeMenu: r, children: n, open: o = !1, onOpenChange: a } = e,
              l = O(eb, r),
              u = L(r),
              [i, s] = t.useState(null),
              [d, c] = t.useState(null),
              p = (0, b.c)(a);
            return (
              t.useEffect(() => (!1 === l.open && p(!1), () => p(!1)), [l.open, p]),
              (0, C.jsx)(v.bL, {
                ...u,
                children: (0, C.jsx)(F, {
                  scope: r,
                  open: o,
                  onOpenChange: p,
                  content: d,
                  onContentChange: c,
                  children: (0, C.jsx)(ex, {
                    scope: r,
                    contentId: (0, m.B)(),
                    triggerId: (0, m.B)(),
                    trigger: i,
                    onTriggerChange: s,
                    children: n,
                  }),
                }),
              })
            );
          };
        eC.displayName = eb;
        var eR = 'MenuSubTrigger',
          ej = t.forwardRef((e, r) => {
            let n = O(eR, e.__scopeMenu),
              l = K(eR, e.__scopeMenu),
              u = eM(eR, e.__scopeMenu),
              i = Y(eR, e.__scopeMenu),
              s = t.useRef(null),
              { pointerGraceTimerRef: d, onPointerGraceIntentChange: c } = i,
              p = { __scopeMenu: e.__scopeMenu },
              f = t.useCallback(() => {
                s.current && window.clearTimeout(s.current), (s.current = null);
              }, []);
            return (
              t.useEffect(() => f, [f]),
              t.useEffect(() => {
                let e = d.current;
                return () => {
                  window.clearTimeout(e), c(null);
                };
              }, [d, c]),
              (0, C.jsx)(U, {
                asChild: !0,
                ...p,
                children: (0, C.jsx)(el, {
                  id: u.triggerId,
                  'aria-haspopup': 'menu',
                  'aria-expanded': n.open,
                  'aria-controls': u.contentId,
                  'data-state': e_(n.open),
                  ...e,
                  ref: (0, a.t)(r, u.onTriggerChange),
                  onClick: (r) => {
                    e.onClick?.(r),
                      e.disabled ||
                        r.defaultPrevented ||
                        (r.currentTarget.focus(), n.open || n.onOpenChange(!0));
                  },
                  onPointerMove: (0, o.m)(
                    e.onPointerMove,
                    eP((r) => {
                      i.onItemEnter(r),
                        !r.defaultPrevented &&
                          (e.disabled ||
                            n.open ||
                            s.current ||
                            (i.onPointerGraceIntentChange(null),
                            (s.current = window.setTimeout(() => {
                              n.onOpenChange(!0), f();
                            }, 100))));
                    })
                  ),
                  onPointerLeave: (0, o.m)(
                    e.onPointerLeave,
                    eP((e) => {
                      f();
                      let r = n.content?.getBoundingClientRect();
                      if (r) {
                        let t = n.content?.dataset.side,
                          o = 'right' === t,
                          a = r[o ? 'left' : 'right'],
                          l = r[o ? 'right' : 'left'];
                        i.onPointerGraceIntentChange({
                          area: [
                            { x: e.clientX + (o ? -5 : 5), y: e.clientY },
                            { x: a, y: r.top },
                            { x: l, y: r.top },
                            { x: l, y: r.bottom },
                            { x: a, y: r.bottom },
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
                  onKeyDown: (0, o.m)(e.onKeyDown, (r) => {
                    let t = '' !== i.searchRef.current;
                    e.disabled ||
                      (t && ' ' === r.key) ||
                      (D[l.dir].includes(r.key) &&
                        (n.onOpenChange(!0), n.content?.focus(), r.preventDefault()));
                  }),
                }),
              })
            );
          });
        ej.displayName = eR;
        var ek = 'MenuSubContent',
          eD = t.forwardRef((e, r) => {
            let n = q(Z, e.__scopeMenu),
              { forceMount: l = n.forceMount, ...u } = e,
              i = O(Z, e.__scopeMenu),
              s = K(Z, e.__scopeMenu),
              d = eM(ek, e.__scopeMenu),
              c = t.useRef(null),
              p = (0, a.s)(r, c);
            return (0, C.jsx)(E.Provider, {
              scope: e.__scopeMenu,
              children: (0, C.jsx)(w.C, {
                present: l || i.open,
                children: (0, C.jsx)(E.Slot, {
                  scope: e.__scopeMenu,
                  children: (0, C.jsx)(ee, {
                    id: d.contentId,
                    'aria-labelledby': d.triggerId,
                    ...u,
                    ref: p,
                    align: 'start',
                    side: 'rtl' === s.dir ? 'left' : 'right',
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: (e) => {
                      s.isUsingKeyboardRef.current && c.current?.focus(), e.preventDefault();
                    },
                    onCloseAutoFocus: (e) => e.preventDefault(),
                    onFocusOutside: (0, o.m)(e.onFocusOutside, (e) => {
                      e.target !== d.trigger && i.onOpenChange(!1);
                    }),
                    onEscapeKeyDown: (0, o.m)(e.onEscapeKeyDown, (e) => {
                      s.onClose(), e.preventDefault();
                    }),
                    onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                      let r = e.currentTarget.contains(e.target),
                        n = _[s.dir].includes(e.key);
                      r && n && (i.onOpenChange(!1), d.trigger?.focus(), e.preventDefault());
                    }),
                  }),
                }),
              }),
            });
          });
        function e_(e) {
          return e ? 'open' : 'closed';
        }
        function eI(e) {
          return 'indeterminate' === e;
        }
        function eE(e) {
          return eI(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
        }
        function eP(e) {
          return (r) => ('mouse' === r.pointerType ? e(r) : void 0);
        }
        eD.displayName = ek;
        var eT = 'DropdownMenu',
          [eS, eN] = (0, l.A)(eT, [N]),
          eL = N(),
          [eA, eF] = eS(eT),
          eO = (e) => {
            let {
                __scopeDropdownMenu: r,
                children: n,
                dir: o,
                open: a,
                defaultOpen: l,
                onOpenChange: i,
                modal: s = !0,
              } = e,
              d = eL(r),
              c = t.useRef(null),
              [p, f] = (0, u.i)({ prop: a, defaultProp: l ?? !1, onChange: i, caller: eT });
            return (0, C.jsx)(eA, {
              scope: r,
              triggerId: (0, m.B)(),
              triggerRef: c,
              contentId: (0, m.B)(),
              open: p,
              onOpenChange: f,
              onOpenToggle: t.useCallback(() => f((e) => !e), [f]),
              modal: s,
              children: (0, C.jsx)(B, {
                ...d,
                open: p,
                onOpenChange: f,
                dir: o,
                modal: s,
                children: n,
              }),
            });
          };
        eO.displayName = eT;
        var eG = 'DropdownMenuTrigger',
          eK = t.forwardRef((e, r) => {
            let { __scopeDropdownMenu: n, disabled: t = !1, ...l } = e,
              u = eF(eG, n),
              s = eL(n);
            return (0, C.jsx)(U, {
              asChild: !0,
              ...s,
              children: (0, C.jsx)(i.sG.button, {
                type: 'button',
                id: u.triggerId,
                'aria-haspopup': 'menu',
                'aria-expanded': u.open,
                'aria-controls': u.open ? u.contentId : void 0,
                'data-state': u.open ? 'open' : 'closed',
                'data-disabled': t ? '' : void 0,
                disabled: t,
                ...l,
                ref: (0, a.t)(r, u.triggerRef),
                onPointerDown: (0, o.m)(e.onPointerDown, (e) => {
                  !t &&
                    0 === e.button &&
                    !1 === e.ctrlKey &&
                    (u.onOpenToggle(), u.open || e.preventDefault());
                }),
                onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                  !t &&
                    (['Enter', ' '].includes(e.key) && u.onOpenToggle(),
                    'ArrowDown' === e.key && u.onOpenChange(!0),
                    ['Enter', ' ', 'ArrowDown'].includes(e.key) && e.preventDefault());
                }),
              }),
            });
          });
        eK.displayName = eG;
        var eB = (e) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            t = eL(r);
          return (0, C.jsx)(H, { ...t, ...n });
        };
        eB.displayName = 'DropdownMenuPortal';
        var eU = 'DropdownMenuContent',
          eV = t.forwardRef((e, r) => {
            let { __scopeDropdownMenu: n, ...a } = e,
              l = eF(eU, n),
              u = eL(n),
              i = t.useRef(!1);
            return (0, C.jsx)(J, {
              id: l.contentId,
              'aria-labelledby': l.triggerId,
              ...u,
              ...a,
              ref: r,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                i.current || l.triggerRef.current?.focus(), (i.current = !1), e.preventDefault();
              }),
              onInteractOutside: (0, o.m)(e.onInteractOutside, (e) => {
                let r = e.detail.originalEvent,
                  n = 0 === r.button && !0 === r.ctrlKey,
                  t = 2 === r.button || n;
                (!l.modal || t) && (i.current = !0);
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
            });
          });
        eV.displayName = eU;
        var eX = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eL(n);
          return (0, C.jsx)(er, { ...o, ...t, ref: r });
        });
        eX.displayName = 'DropdownMenuGroup';
        var eq = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eL(n);
          return (0, C.jsx)(en, { ...o, ...t, ref: r });
        });
        eq.displayName = 'DropdownMenuLabel';
        var eH = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eL(n);
          return (0, C.jsx)(ea, { ...o, ...t, ref: r });
        });
        eH.displayName = 'DropdownMenuItem';
        var eZ = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eL(n);
          return (0, C.jsx)(eu, { ...o, ...t, ref: r });
        });
        eZ.displayName = 'DropdownMenuCheckboxItem';
        var ez = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eL(n);
          return (0, C.jsx)(ec, { ...o, ...t, ref: r });
        });
        ez.displayName = 'DropdownMenuRadioGroup';
        var eY = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eL(n);
          return (0, C.jsx)(ef, { ...o, ...t, ref: r });
        });
        eY.displayName = 'DropdownMenuRadioItem';
        var eJ = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eL(n);
          return (0, C.jsx)(ew, { ...o, ...t, ref: r });
        });
        eJ.displayName = 'DropdownMenuItemIndicator';
        var eW = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eL(n);
          return (0, C.jsx)(eg, { ...o, ...t, ref: r });
        });
        (eW.displayName = 'DropdownMenuSeparator'),
          (t.forwardRef((e, r) => {
            let { __scopeDropdownMenu: n, ...t } = e,
              o = eL(n);
            return (0, C.jsx)(ey, { ...o, ...t, ref: r });
          }).displayName = 'DropdownMenuArrow');
        var eQ = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eL(n);
          return (0, C.jsx)(ej, { ...o, ...t, ref: r });
        });
        eQ.displayName = 'DropdownMenuSubTrigger';
        var e$ = t.forwardRef((e, r) => {
          let { __scopeDropdownMenu: n, ...t } = e,
            o = eL(n);
          return (0, C.jsx)(eD, {
            ...o,
            ...t,
            ref: r,
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
          });
        });
        e$.displayName = 'DropdownMenuSubContent';
        var e0 = eO,
          e1 = eK,
          e6 = eB,
          e2 = eV,
          e7 = eX,
          e3 = eq,
          e4 = eH,
          e8 = eZ,
          e5 = ez,
          e9 = eY,
          re = eJ,
          rr = eW,
          rn = (e) => {
            let {
                __scopeDropdownMenu: r,
                children: n,
                open: t,
                onOpenChange: o,
                defaultOpen: a,
              } = e,
              l = eL(r),
              [i, s] = (0, u.i)({
                prop: t,
                defaultProp: a ?? !1,
                onChange: o,
                caller: 'DropdownMenuSub',
              });
            return (0, C.jsx)(eC, { ...l, open: i, onOpenChange: s, children: n });
          },
          rt = eQ,
          ro = e$;
      },
    },
  ]);
