'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1356],
  {
    332: (e, t, r) => {
      r.d(t, { F: () => a });
      var n = r(74670),
        i = r(7620);
      function a(e, t, r) {
        let a = (0, i.useRef)(t),
          s = (0, n.J)(() => {
            r && r(a.current);
          });
        (0, i.useEffect)(() => {
          var t;
          let r = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return (
            null == r || r.addEventListener('reset', s),
            () => {
              null == r || r.removeEventListener('reset', s);
            }
          );
        }, [e, s]);
      }
    },
    7963: (e, t, r) => {
      r.d(t, { F: () => n });
      let n = r(7620).createContext({ register: () => {} });
      n.displayName = 'PressResponderContext';
    },
    84644: (e, t, r) => {
      r.d(t, { Fe: () => o, _h: () => u, rd: () => l });
      var n = r(48231),
        i = r(68797),
        a = r(7620);
      let s = (0, a.createContext)({
        isNative: !0,
        open: function (e, t) {
          (function (e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute('data-href')) {
              let r = document.createElement('a');
              (r.href = e.getAttribute('data-href')),
                e.hasAttribute('data-target') && (r.target = e.getAttribute('data-target')),
                e.hasAttribute('data-rel') && (r.rel = e.getAttribute('data-rel')),
                e.hasAttribute('data-download') && (r.download = e.getAttribute('data-download')),
                e.hasAttribute('data-ping') && (r.ping = e.getAttribute('data-ping')),
                e.hasAttribute('data-referrer-policy') &&
                  (r.referrerPolicy = e.getAttribute('data-referrer-policy')),
                e.appendChild(r),
                t(r),
                e.removeChild(r);
            }
          })(e, (e) => o(e, t));
        },
        useHref: (e) => e,
      });
      function l() {
        return (0, a.useContext)(s);
      }
      function o(e, t, r = !0) {
        var a, s;
        let { metaKey: l, ctrlKey: u, altKey: d, shiftKey: c } = t;
        (0, i.gm)() &&
          (null === (s = window.event) || void 0 === s
            ? void 0
            : null === (a = s.type) || void 0 === a
              ? void 0
              : a.startsWith('key')) &&
          '_blank' === e.target &&
          ((0, i.cX)() ? (l = !0) : (u = !0));
        let p =
          (0, i.Tc)() && (0, i.cX)() && !(0, i.bh)()
            ? new KeyboardEvent('keydown', {
                keyIdentifier: 'Enter',
                metaKey: l,
                ctrlKey: u,
                altKey: d,
                shiftKey: c,
              })
            : new MouseEvent('click', {
                metaKey: l,
                ctrlKey: u,
                altKey: d,
                shiftKey: c,
                bubbles: !0,
                cancelable: !0,
              });
        (o.isOpening = r), (0, n.e)(e), e.dispatchEvent(p), (o.isOpening = !1);
      }
      function u(e) {
        var t;
        let r = l().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : '');
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy,
        };
      }
      o.isOpening = !1;
    },
    85905: (e, t, r) => {
      r.d(t, { d: () => C });
      var n = r(75261),
        i = r(68797),
        a = r(48647),
        s = r(88370);
      let l = 'default',
        o = '',
        u = new WeakMap();
      function d(e) {
        if ((0, i.un)())
          'disabled' === l &&
            ((l = 'restoring'),
            setTimeout(() => {
              (0, s.v)(() => {
                if ('restoring' === l) {
                  let t = (0, a.TW)(e);
                  'none' === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = o || ''),
                    (o = ''),
                    (l = 'default');
                }
              });
            }, 300));
        else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && u.has(e)) {
          let t = u.get(e),
            r = 'userSelect' in e.style ? 'userSelect' : 'webkitUserSelect';
          'none' === e.style[r] && (e.style[r] = t),
            '' === e.getAttribute('style') && e.removeAttribute('style'),
            u.delete(e);
        }
      }
      var c = r(7963);
      function p(e, t, r) {
        if (!t.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
        return t.get(e);
      }
      var g = r(86111);
      function v(e, t, r) {
        var n = p(e, t, 'set');
        return (
          !(function (e, t, r) {
            if (t.set) t.set.call(e, r);
            else {
              if (!t.writable) throw TypeError('attempted to set read only private field');
              t.value = r;
            }
          })(e, n, r),
          r
        );
      }
      var f = r(15258),
        y = r(53171),
        T = r(14187),
        E = r(74670),
        h = r(55795),
        b = r(22489),
        m = r(84644),
        P = r(61847),
        w = r(48231);
      r(97509);
      var k = r(7620),
        K = new WeakMap();
      class S {
        continuePropagation() {
          v(this, K, !1);
        }
        get shouldStopPropagation() {
          var e;
          return (e = p(this, K, 'get')).get ? e.get.call(this) : e.value;
        }
        constructor(e, t, r, n) {
          var i;
          (0, g._)(this, K, { writable: !0, value: void 0 }), v(this, K, !0);
          let a =
              null !== (i = null == n ? void 0 : n.target) && void 0 !== i ? i : r.currentTarget,
            s = null == a ? void 0 : a.getBoundingClientRect(),
            l,
            o = 0,
            u,
            d = null;
          null != r.clientX && null != r.clientY && ((u = r.clientX), (d = r.clientY)),
            s &&
              (null != u && null != d
                ? ((l = u - s.left), (o = d - s.top))
                : ((l = s.width / 2), (o = s.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey),
            (this.x = l),
            (this.y = o);
        }
      }
      let A = Symbol('linkClicked'),
        M = 'react-aria-pressable-style',
        D = 'data-react-aria-pressable';
      function C(e) {
        let {
            onPress: t,
            onPressChange: r,
            onPressStart: s,
            onPressEnd: p,
            onPressUp: g,
            onClick: v,
            isDisabled: K,
            isPressed: C,
            preventFocusOnPress: F,
            shouldCancelOnPointerExit: H,
            allowTextSelectionOnPress: W,
            ref: J,
            ...U
          } = (function (e) {
            let t = (0, k.useContext)(c.F);
            if (t) {
              let { register: r, ...n } = t;
              (e = (0, f.v)(n, e)), r();
            }
            return (0, y.w)(t, e.ref), e;
          })(e),
          [X, _] = (0, k.useState)(!1),
          N = (0, k.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
            disposables: [],
          }),
          { addGlobalListener: Y, removeAllGlobalListeners: G } = (0, T.A)(),
          R = (0, E.J)((e, t) => {
            let n = N.current;
            if (K || n.didFirePressStart) return !1;
            let i = !0;
            if (((n.isTriggeringEvent = !0), s)) {
              let r = new S('pressstart', t, e);
              s(r), (i = r.shouldStopPropagation);
            }
            return r && r(!0), (n.isTriggeringEvent = !1), (n.didFirePressStart = !0), _(!0), i;
          }),
          B = (0, E.J)((e, n, i = !0) => {
            let a = N.current;
            if (!a.didFirePressStart) return !1;
            (a.didFirePressStart = !1), (a.isTriggeringEvent = !0);
            let s = !0;
            if (p) {
              let t = new S('pressend', n, e);
              p(t), (s = t.shouldStopPropagation);
            }
            if ((r && r(!1), _(!1), t && i && !K)) {
              let r = new S('press', n, e);
              t(r), s && (s = r.shouldStopPropagation);
            }
            return (a.isTriggeringEvent = !1), s;
          }),
          z = (0, E.J)((e, t) => {
            let r = N.current;
            if (K) return !1;
            if (g) {
              r.isTriggeringEvent = !0;
              let n = new S('pressup', t, e);
              return g(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation;
            }
            return !0;
          }),
          V = (0, E.J)((e) => {
            let t = N.current;
            if (t.isPressed && t.target) {
              for (let r of (t.didFirePressStart &&
                null != t.pointerType &&
                B(L(t.target, e), t.pointerType, !1),
              (t.isPressed = !1),
              (t.isOverTarget = !1),
              (t.activePointerId = null),
              (t.pointerType = null),
              G(),
              W || d(t.target),
              t.disposables))
                r();
              t.disposables = [];
            }
          }),
          $ = (0, E.J)((e) => {
            H && V(e);
          }),
          j = (0, E.J)((e) => {
            null == v || v(e);
          }),
          q = (0, E.J)((e, t) => {
            if (v) {
              let r = new MouseEvent('click', e);
              (0, n.o1)(r, t), v((0, n.eg)(r));
            }
          }),
          Q = (0, k.useMemo)(() => {
            let e = N.current,
              t = {
                onKeyDown(t) {
                  if (
                    O(t.nativeEvent, t.currentTarget) &&
                    (0, h.sD)(t.currentTarget, (0, h.wt)(t.nativeEvent))
                  ) {
                    var n;
                    x((0, h.wt)(t.nativeEvent), t.key) && t.preventDefault();
                    let s = !0;
                    if (!e.isPressed && !t.repeat) {
                      (e.target = t.currentTarget),
                        (e.isPressed = !0),
                        (e.pointerType = 'keyboard'),
                        (s = R(t, 'keyboard'));
                      let n = t.currentTarget;
                      Y(
                        (0, a.TW)(t.currentTarget),
                        'keyup',
                        (0, b.c)((t) => {
                          O(t, n) &&
                            !t.repeat &&
                            (0, h.sD)(n, (0, h.wt)(t)) &&
                            e.target &&
                            z(L(e.target, t), 'keyboard');
                        }, r),
                        !0
                      );
                    }
                    s && t.stopPropagation(),
                      t.metaKey &&
                        (0, i.cX)() &&
                        (null === (n = e.metaKeyEvents) ||
                          void 0 === n ||
                          n.set(t.key, t.nativeEvent));
                  } else 'Meta' === t.key && (e.metaKeyEvents = new Map());
                },
                onClick(t) {
                  if (
                    (!t || (0, h.sD)(t.currentTarget, (0, h.wt)(t.nativeEvent))) &&
                    t &&
                    0 === t.button &&
                    !e.isTriggeringEvent &&
                    !m.Fe.isOpening
                  ) {
                    let r = !0;
                    if (
                      (K && t.preventDefault(),
                      !e.ignoreEmulatedMouseEvents &&
                        !e.isPressed &&
                        ('virtual' === e.pointerType || (0, P.Y)(t.nativeEvent)))
                    ) {
                      let e = R(t, 'virtual'),
                        n = z(t, 'virtual'),
                        i = B(t, 'virtual');
                      j(t), (r = e && n && i);
                    } else if (e.isPressed && 'keyboard' !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || 'virtual';
                      (r = B(L(t.currentTarget, t), n, !0)), (e.isOverTarget = !1), j(t), V(t);
                    }
                    (e.ignoreEmulatedMouseEvents = !1), r && t.stopPropagation();
                  }
                },
              },
              r = (t) => {
                var r, n, i;
                if (e.isPressed && e.target && O(t, e.target)) {
                  x((0, h.wt)(t), t.key) && t.preventDefault();
                  let r = (0, h.wt)(t),
                    i = (0, h.sD)(e.target, (0, h.wt)(t));
                  B(L(e.target, t), 'keyboard', i),
                    i && q(t, e.target),
                    G(),
                    'Enter' !== t.key &&
                      I(e.target) &&
                      (0, h.sD)(e.target, r) &&
                      !t[A] &&
                      ((t[A] = !0), (0, m.Fe)(e.target, t, !1)),
                    (e.isPressed = !1),
                    null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key);
                } else if (
                  'Meta' === t.key &&
                  (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)
                ) {
                  let t = e.metaKeyEvents;
                  for (let r of ((e.metaKeyEvents = void 0), t.values()))
                    null === (i = e.target) ||
                      void 0 === i ||
                      i.dispatchEvent(new KeyboardEvent('keyup', r));
                }
              };
            if ('undefined' != typeof PointerEvent) {
              (t.onPointerDown = (t) => {
                if (0 !== t.button || !(0, h.sD)(t.currentTarget, (0, h.wt)(t.nativeEvent))) return;
                if ((0, P.P)(t.nativeEvent)) {
                  e.pointerType = 'virtual';
                  return;
                }
                e.pointerType = t.pointerType;
                let n = !0;
                if (!e.isPressed) {
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.activePointerId = t.pointerId),
                    (e.target = t.currentTarget),
                    W ||
                      (function (e) {
                        if ((0, i.un)()) {
                          if ('default' === l) {
                            let t = (0, a.TW)(e);
                            (o = t.documentElement.style.webkitUserSelect),
                              (t.documentElement.style.webkitUserSelect = 'none');
                          }
                          l = 'disabled';
                        } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                          let t = 'userSelect' in e.style ? 'userSelect' : 'webkitUserSelect';
                          u.set(e, e.style[t]), (e.style[t] = 'none');
                        }
                      })(e.target),
                    (n = R(t, e.pointerType));
                  let d = (0, h.wt)(t.nativeEvent);
                  'releasePointerCapture' in d && d.releasePointerCapture(t.pointerId),
                    Y((0, a.TW)(t.currentTarget), 'pointerup', r, !1),
                    Y((0, a.TW)(t.currentTarget), 'pointercancel', s, !1);
                }
                n && t.stopPropagation();
              }),
                (t.onMouseDown = (t) => {
                  if ((0, h.sD)(t.currentTarget, (0, h.wt)(t.nativeEvent)) && 0 === t.button) {
                    if (F) {
                      let r = (0, n.LE)(t.target);
                      r && e.disposables.push(r);
                    }
                    t.stopPropagation();
                  }
                }),
                (t.onPointerUp = (t) => {
                  (0, h.sD)(t.currentTarget, (0, h.wt)(t.nativeEvent)) &&
                    'virtual' !== e.pointerType &&
                    0 === t.button &&
                    z(t, e.pointerType || t.pointerType);
                }),
                (t.onPointerEnter = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.target &&
                    !e.isOverTarget &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), R(L(e.target, t), e.pointerType));
                }),
                (t.onPointerLeave = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.target &&
                    e.isOverTarget &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1), B(L(e.target, t), e.pointerType, !1), $(t));
                });
              let r = (t) => {
                  if (
                    t.pointerId === e.activePointerId &&
                    e.isPressed &&
                    0 === t.button &&
                    e.target
                  ) {
                    if ((0, h.sD)(e.target, (0, h.wt)(t)) && null != e.pointerType) {
                      let r = !1,
                        n = setTimeout(() => {
                          e.isPressed &&
                            e.target instanceof HTMLElement &&
                            (r ? V(t) : ((0, w.e)(e.target), e.target.click()));
                        }, 80);
                      Y(t.currentTarget, 'click', () => (r = !0), !0),
                        e.disposables.push(() => clearTimeout(n));
                    } else V(t);
                    e.isOverTarget = !1;
                  }
                },
                s = (e) => {
                  V(e);
                };
              t.onDragStart = (e) => {
                (0, h.sD)(e.currentTarget, (0, h.wt)(e.nativeEvent)) && V(e);
              };
            }
            return t;
          }, [Y, K, F, G, W, V, $, B, R, z, j, q]);
        return (
          (0, k.useEffect)(() => {
            if (!J) return;
            let e = (0, a.TW)(J.current);
            if (!e || !e.head || e.getElementById(M)) return;
            let t = e.createElement('style');
            (t.id = M),
              (t.textContent = `
@layer {
  [${D}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
              e.head.prepend(t);
          }, [J]),
          (0, k.useEffect)(() => {
            let e = N.current;
            return () => {
              var t;
              for (let r of (W || d(null !== (t = e.target) && void 0 !== t ? t : void 0),
              e.disposables))
                r();
              e.disposables = [];
            };
          }, [W]),
          { isPressed: C || X, pressProps: (0, f.v)(U, Q, { [D]: !0 }) }
        );
      }
      function I(e) {
        return 'A' === e.tagName && e.hasAttribute('href');
      }
      function O(e, t) {
        let { key: r, code: n } = e,
          i = t.getAttribute('role');
        return (
          ('Enter' === r || ' ' === r || 'Spacebar' === r || 'Space' === n) &&
          !(
            (t instanceof (0, a.mD)(t).HTMLInputElement && !H(t, r)) ||
            t instanceof (0, a.mD)(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(('link' === i || (!i && I(t))) && 'Enter' !== r)
        );
      }
      function L(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n,
        };
      }
      function x(e, t) {
        return e instanceof HTMLInputElement
          ? !H(e, t)
          : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement ? 'submit' !== e.type && 'reset' !== e.type : !I(e));
      }
      let F = new Set([
        'checkbox',
        'radio',
        'range',
        'color',
        'file',
        'image',
        'button',
        'submit',
        'reset',
      ]);
      function H(e, t) {
        return 'checkbox' === e.type || 'radio' === e.type ? ' ' === t : F.has(e.type);
      }
    },
  },
]);
