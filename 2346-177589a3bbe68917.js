'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2346],
  {
    2259: function (e, o, t) {
      t.d(o, {
        Eh: function () {
          return V;
        },
        VY: function () {
          return T;
        },
        ee: function () {
          return z;
        },
        fC: function () {
          return K;
        },
        h_: function () {
          return N;
        },
      });
      var r = t(11572),
        n = t(58854),
        u = t(65727),
        a = t(30),
        c = t(42642),
        l = t(31989),
        i = t(58527),
        s = t(61842),
        p = t(40120),
        d = t(72998),
        f = t(64921),
        v = t(42770),
        h = (t(34704), t(41217)),
        E = t(72876),
        m = t(47847),
        g = t(49344);
      let P = 'Popover',
        [C, _] = (0, c.b)(P, [d.D7]),
        O = (0, d.D7)(),
        [w, R] = C(P),
        F = (0, n.forwardRef)((e, o) => {
          let { __scopePopover: t, ...u } = e,
            a = R('PopoverAnchor', t),
            c = O(t),
            { onCustomAnchorAdd: l, onCustomAnchorRemove: i } = a;
          return (
            (0, n.useEffect)(() => (l(), () => i()), [l, i]),
            (0, n.createElement)(d.ee, (0, r.Z)({}, c, u, { ref: o }))
          );
        }),
        b = 'PopoverPortal',
        [A, D] = C(b, { forceMount: void 0 }),
        M = 'PopoverContent',
        x = (0, n.forwardRef)((e, o) => {
          let t = D(M, e.__scopePopover),
            { forceMount: u = t.forceMount, ...a } = e,
            c = R(M, e.__scopePopover);
          return (0, n.createElement)(
            v.z,
            { present: u || c.open },
            c.modal
              ? (0, n.createElement)(k, (0, r.Z)({}, a, { ref: o }))
              : (0, n.createElement)(Z, (0, r.Z)({}, a, { ref: o }))
          );
        }),
        k = (0, n.forwardRef)((e, o) => {
          let t = R(M, e.__scopePopover),
            c = (0, n.useRef)(null),
            l = (0, a.e)(o, c),
            i = (0, n.useRef)(!1);
          return (
            (0, n.useEffect)(() => {
              let e = c.current;
              if (e) return (0, m.Ry)(e);
            }, []),
            (0, n.createElement)(
              g.Z,
              { as: h.g7, allowPinchZoom: !0 },
              (0, n.createElement)(
                y,
                (0, r.Z)({}, e, {
                  ref: l,
                  trapFocus: t.open,
                  disableOutsidePointerEvents: !0,
                  onCloseAutoFocus: (0, u.M)(e.onCloseAutoFocus, (e) => {
                    var o;
                    e.preventDefault(),
                      i.current || null === (o = t.triggerRef.current) || void 0 === o || o.focus();
                  }),
                  onPointerDownOutside: (0, u.M)(
                    e.onPointerDownOutside,
                    (e) => {
                      let o = e.detail.originalEvent,
                        t = 0 === o.button && !0 === o.ctrlKey,
                        r = 2 === o.button || t;
                      i.current = r;
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                  onFocusOutside: (0, u.M)(e.onFocusOutside, (e) => e.preventDefault(), {
                    checkForDefaultPrevented: !1,
                  }),
                })
              )
            )
          );
        }),
        Z = (0, n.forwardRef)((e, o) => {
          let t = R(M, e.__scopePopover),
            u = (0, n.useRef)(!1),
            a = (0, n.useRef)(!1);
          return (0, n.createElement)(
            y,
            (0, r.Z)({}, e, {
              ref: o,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (o) => {
                var r, n;
                null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, o),
                  o.defaultPrevented ||
                    (u.current || null === (n = t.triggerRef.current) || void 0 === n || n.focus(),
                    o.preventDefault()),
                  (u.current = !1),
                  (a.current = !1);
              },
              onInteractOutside: (o) => {
                var r, n;
                null === (r = e.onInteractOutside) || void 0 === r || r.call(e, o),
                  o.defaultPrevented ||
                    ((u.current = !0),
                    'pointerdown' !== o.detail.originalEvent.type || (a.current = !0));
                let c = o.target;
                (null === (n = t.triggerRef.current) || void 0 === n ? void 0 : n.contains(c)) &&
                  o.preventDefault(),
                  'focusin' === o.detail.originalEvent.type && a.current && o.preventDefault();
              },
            })
          );
        }),
        y = (0, n.forwardRef)((e, o) => {
          let {
              __scopePopover: t,
              trapFocus: u,
              onOpenAutoFocus: a,
              onCloseAutoFocus: c,
              disableOutsidePointerEvents: p,
              onEscapeKeyDown: f,
              onPointerDownOutside: v,
              onFocusOutside: h,
              onInteractOutside: E,
              ...m
            } = e,
            g = R(M, t),
            P = O(t);
          return (
            (0, i.EW)(),
            (0, n.createElement)(
              s.M,
              { asChild: !0, loop: !0, trapped: u, onMountAutoFocus: a, onUnmountAutoFocus: c },
              (0, n.createElement)(
                l.XB,
                {
                  asChild: !0,
                  disableOutsidePointerEvents: p,
                  onInteractOutside: E,
                  onEscapeKeyDown: f,
                  onPointerDownOutside: v,
                  onFocusOutside: h,
                  onDismiss: () => g.onOpenChange(!1),
                },
                (0, n.createElement)(
                  d.VY,
                  (0, r.Z)(
                    {
                      'data-state': (function (e) {
                        return e ? 'open' : 'closed';
                      })(g.open),
                      role: 'dialog',
                      id: g.contentId,
                    },
                    P,
                    m,
                    {
                      ref: o,
                      style: {
                        ...m.style,
                        '--radix-popover-content-transform-origin':
                          'var(--radix-popper-transform-origin)',
                        '--radix-popover-content-available-width':
                          'var(--radix-popper-available-width)',
                        '--radix-popover-content-available-height':
                          'var(--radix-popper-available-height)',
                        '--radix-popover-trigger-width': 'var(--radix-popper-anchor-width)',
                        '--radix-popover-trigger-height': 'var(--radix-popper-anchor-height)',
                      },
                    }
                  )
                )
              )
            )
          );
        }),
        I = (0, n.forwardRef)((e, o) => {
          let { __scopePopover: t, ...u } = e,
            a = O(t);
          return (0, n.createElement)(d.Eh, (0, r.Z)({}, a, u, { ref: o }));
        }),
        K = (e) => {
          let {
              __scopePopover: o,
              children: t,
              open: r,
              defaultOpen: u,
              onOpenChange: a,
              modal: c = !1,
            } = e,
            l = O(o),
            i = (0, n.useRef)(null),
            [s, f] = (0, n.useState)(!1),
            [v = !1, h] = (0, E.T)({ prop: r, defaultProp: u, onChange: a });
          return (0, n.createElement)(
            d.fC,
            l,
            (0, n.createElement)(
              w,
              {
                scope: o,
                contentId: (0, p.M)(),
                triggerRef: i,
                open: v,
                onOpenChange: h,
                onOpenToggle: (0, n.useCallback)(() => h((e) => !e), [h]),
                hasCustomAnchor: s,
                onCustomAnchorAdd: (0, n.useCallback)(() => f(!0), []),
                onCustomAnchorRemove: (0, n.useCallback)(() => f(!1), []),
                modal: c,
              },
              t
            )
          );
        },
        z = F,
        N = (e) => {
          let { __scopePopover: o, forceMount: t, children: r, container: u } = e,
            a = R(b, o);
          return (0, n.createElement)(
            A,
            { scope: o, forceMount: t },
            (0, n.createElement)(
              v.z,
              { present: t || a.open },
              (0, n.createElement)(f.h, { asChild: !0, container: u }, r)
            )
          );
        },
        T = x,
        V = I;
    },
  },
]);
