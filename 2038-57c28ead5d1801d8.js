(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2038],
  {
    4609: (e, t, i) => {
      'use strict';
      i.d(t, { A: () => w });
      var n = i(7620),
        r = i(32987),
        o = i(56579),
        s = i(32678),
        a = i(87975),
        l = i(61829),
        u = i(75989);
      function h(e) {
        return (0, u.Ay)('MuiFormGroup', e);
      }
      (0, l.A)('MuiFormGroup', ['root', 'row', 'error']);
      var c = i(97612),
        d = i(69106),
        p = i(54568);
      let v = (e) => {
          let { classes: t, row: i, error: n } = e;
          return (0, o.A)({ root: ['root', i && 'row', n && 'error'] }, h, t);
        },
        m = (0, s.Ay)('div', {
          name: 'MuiFormGroup',
          slot: 'Root',
          overridesResolver: (e, t) => {
            let { ownerState: i } = e;
            return [t.root, i.row && t.row];
          },
        })({
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          variants: [{ props: { row: !0 }, style: { flexDirection: 'row' } }],
        }),
        f = n.forwardRef(function (e, t) {
          let i = (0, a.b)({ props: e, name: 'MuiFormGroup' }),
            { className: n, row: o = !1, ...s } = i,
            l = (0, c.A)(),
            u = (0, d.A)({ props: i, muiFormControl: l, states: ['error'] }),
            h = { ...i, row: o, error: u.error },
            f = v(h);
          return (0, p.jsx)(m, { className: (0, r.A)(f.root, n), ownerState: h, ref: t, ...s });
        });
      function g(e) {
        return (0, u.Ay)('MuiRadioGroup', e);
      }
      (0, l.A)('MuiRadioGroup', ['root', 'row', 'error']);
      var _ = i(39600),
        b = i(35861),
        z = i(63534),
        S = i(62062);
      let y = (e) => {
          let { classes: t, row: i, error: n } = e;
          return (0, o.A)({ root: ['root', i && 'row', n && 'error'] }, g, t);
        },
        w = n.forwardRef(function (e, t) {
          let {
              actions: i,
              children: o,
              className: s,
              defaultValue: a,
              name: l,
              onChange: u,
              value: h,
              ...c
            } = e,
            d = n.useRef(null),
            v = y(e),
            [m, g] = (0, b.A)({ controlled: h, default: a, name: 'RadioGroup' });
          n.useImperativeHandle(
            i,
            () => ({
              focus: () => {
                let e = d.current.querySelector('input:not(:disabled):checked');
                e || (e = d.current.querySelector('input:not(:disabled)')), e && e.focus();
              },
            }),
            []
          );
          let w = (0, _.A)(t, d),
            x = (0, S.A)(l),
            R = n.useMemo(
              () => ({
                name: x,
                onChange(e) {
                  g(e.target.value), u && u(e, e.target.value);
                },
                value: m,
              }),
              [x, u, g, m]
            );
          return (0, p.jsx)(z.A.Provider, {
            value: R,
            children: (0, p.jsx)(f, {
              role: 'radiogroup',
              ref: w,
              className: (0, r.A)(v.root, s),
              ...c,
              children: o,
            }),
          });
        });
    },
    8116: (e, t, i) => {
      var n = i(71809);
      e.exports = function () {
        return n.Date.now();
      };
    },
    20591: (e, t, i) => {
      var n = i(26087),
        r = i(8116),
        o = i(5984),
        s = Math.max,
        a = Math.min;
      e.exports = function (e, t, i) {
        var l,
          u,
          h,
          c,
          d,
          p,
          v = 0,
          m = !1,
          f = !1,
          g = !0;
        if ('function' != typeof e) throw TypeError('Expected a function');
        function _(t) {
          var i = l,
            n = u;
          return (l = u = void 0), (v = t), (c = e.apply(n, i));
        }
        function b(e) {
          var i = e - p,
            n = e - v;
          return void 0 === p || i >= t || i < 0 || (f && n >= h);
        }
        function z() {
          var e,
            i,
            n,
            o = r();
          if (b(o)) return S(o);
          d = setTimeout(z, ((e = o - p), (i = o - v), (n = t - e), f ? a(n, h - i) : n));
        }
        function S(e) {
          return ((d = void 0), g && l) ? _(e) : ((l = u = void 0), c);
        }
        function y() {
          var e,
            i = r(),
            n = b(i);
          if (((l = arguments), (u = this), (p = i), n)) {
            if (void 0 === d) return (v = e = p), (d = setTimeout(z, t)), m ? _(e) : c;
            if (f) return clearTimeout(d), (d = setTimeout(z, t)), _(p);
          }
          return void 0 === d && (d = setTimeout(z, t)), c;
        }
        return (
          (t = o(t) || 0),
          n(i) &&
            ((m = !!i.leading),
            (h = (f = 'maxWait' in i) ? s(o(i.maxWait) || 0, t) : h),
            (g = 'trailing' in i ? !!i.trailing : g)),
          (y.cancel = function () {
            void 0 !== d && clearTimeout(d), (v = 0), (l = p = u = d = void 0);
          }),
          (y.flush = function () {
            return void 0 === d ? c : S(r());
          }),
          y
        );
      };
    },
    30645: (e, t, i) => {
      var n = i(45494);
      e.exports = function (e) {
        var t = n(e),
          i = t % 1;
        return t == t ? (i ? t - i : t) : 0;
      };
    },
    39929: (e, t, i) => {
      var n = i(48337),
        r = i(1869);
      e.exports = function (e, t, i, o) {
        return null == e
          ? []
          : (r(t) || (t = null == t ? [] : [t]),
            r((i = o ? void 0 : i)) || (i = null == i ? [] : [i]),
            n(e, t, i));
      };
    },
    45494: (e, t, i) => {
      var n = i(5984),
        r = 1 / 0;
      e.exports = function (e) {
        return e
          ? (e = n(e)) === r || e === -r
            ? (e < 0 ? -1 : 1) * 17976931348623157e292
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
    },
    50520: (e, t, i) => {
      'use strict';
      i.d(t, { A: () => j });
      var n = i(7620),
        r = i(32987),
        o = i(56579),
        s = i(33377),
        a = i(47152),
        l = i(69879),
        u = i(54568);
      let h = (0, l.A)(
          (0, u.jsx)('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
          }),
          'RadioButtonUnchecked'
        ),
        c = (0, l.A)(
          (0, u.jsx)('path', {
            d: 'M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z',
          }),
          'RadioButtonChecked'
        );
      var d = i(5802),
        p = i(32678),
        v = i(33420);
      let m = (0, p.Ay)('span', { shouldForwardProp: d.A })({
          position: 'relative',
          display: 'flex',
        }),
        f = (0, p.Ay)(h)({ transform: 'scale(1)' }),
        g = (0, p.Ay)(c)(
          (0, v.A)(({ theme: e }) => ({
            left: 0,
            position: 'absolute',
            transform: 'scale(0)',
            transition: e.transitions.create('transform', {
              easing: e.transitions.easing.easeIn,
              duration: e.transitions.duration.shortest,
            }),
            variants: [
              {
                props: { checked: !0 },
                style: {
                  transform: 'scale(1)',
                  transition: e.transitions.create('transform', {
                    easing: e.transitions.easing.easeOut,
                    duration: e.transitions.duration.shortest,
                  }),
                },
              },
            ],
          }))
        ),
        _ = function (e) {
          let { checked: t = !1, classes: i = {}, fontSize: n } = e,
            r = { ...e, checked: t };
          return (0, u.jsxs)(m, {
            className: i.root,
            ownerState: r,
            children: [
              (0, u.jsx)(f, { fontSize: n, className: i.background, ownerState: r }),
              (0, u.jsx)(g, { fontSize: n, className: i.dot, ownerState: r }),
            ],
          });
        };
      var b = i(65490);
      let z = i(47081).A;
      var S = i(97612),
        y = i(63534),
        w = i(61829),
        x = i(75989);
      function R(e) {
        return (0, x.Ay)('MuiRadio', e);
      }
      let C = (0, w.A)('MuiRadio', [
        'root',
        'checked',
        'disabled',
        'colorPrimary',
        'colorSecondary',
        'sizeSmall',
      ]);
      var E = i(42012),
        A = i(3723),
        B = i(87975);
      let P = (e) => {
          let { classes: t, color: i, size: n } = e,
            r = { root: ['root', `color${(0, b.A)(i)}`, 'medium' !== n && `size${(0, b.A)(n)}`] };
          return { ...t, ...(0, o.A)(r, R, t) };
        },
        O = (0, p.Ay)(a.A, {
          shouldForwardProp: (e) => (0, d.A)(e) || 'classes' === e,
          name: 'MuiRadio',
          slot: 'Root',
          overridesResolver: (e, t) => {
            let { ownerState: i } = e;
            return [
              t.root,
              'medium' !== i.size && t[`size${(0, b.A)(i.size)}`],
              t[`color${(0, b.A)(i.color)}`],
            ];
          },
        })(
          (0, v.A)(({ theme: e }) => ({
            color: (e.vars || e).palette.text.secondary,
            [`&.${C.disabled}`]: { color: (e.vars || e).palette.action.disabled },
            variants: [
              {
                props: { color: 'default', disabled: !1, disableRipple: !1 },
                style: {
                  '&:hover': {
                    backgroundColor: e.vars
                      ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : (0, s.X4)(e.palette.action.active, e.palette.action.hoverOpacity),
                  },
                },
              },
              ...Object.entries(e.palette)
                .filter((0, E.A)())
                .map(([t]) => ({
                  props: { color: t, disabled: !1, disableRipple: !1 },
                  style: {
                    '&:hover': {
                      backgroundColor: e.vars
                        ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                        : (0, s.X4)(e.palette[t].main, e.palette.action.hoverOpacity),
                    },
                  },
                })),
              ...Object.entries(e.palette)
                .filter((0, E.A)())
                .map(([t]) => ({
                  props: { color: t, disabled: !1 },
                  style: { [`&.${C.checked}`]: { color: (e.vars || e).palette[t].main } },
                })),
              {
                props: { disableRipple: !1 },
                style: {
                  '&:hover': { '@media (hover: none)': { backgroundColor: 'transparent' } },
                },
              },
            ],
          }))
        ),
        M = (0, u.jsx)(_, { checked: !0 }),
        L = (0, u.jsx)(_, {}),
        j = n.forwardRef(function (e, t) {
          let i = (0, B.b)({ props: e, name: 'MuiRadio' }),
            {
              checked: o,
              checkedIcon: s = M,
              color: a = 'primary',
              icon: l = L,
              name: h,
              onChange: c,
              size: d = 'medium',
              className: p,
              disabled: v,
              disableRipple: m = !1,
              slots: f = {},
              slotProps: g = {},
              inputProps: _,
              ...b
            } = i,
            w = (0, S.A)(),
            x = v;
          w && void 0 === x && (x = w.disabled), (x ??= !1);
          let R = { ...i, disabled: x, disableRipple: m, color: a, size: d },
            C = P(R),
            E = n.useContext(y.A),
            j = o,
            k = z(c, E && E.onChange),
            N = h;
          if (E) {
            if (void 0 === j) {
              var T, $;
              (T = E.value),
                (j =
                  'object' == typeof ($ = i.value) && null !== $
                    ? T === $
                    : String(T) === String($));
            }
            void 0 === N && (N = E.name);
          }
          let D = g.input ?? _,
            [F, G] = (0, A.A)('root', {
              ref: t,
              elementType: O,
              className: (0, r.A)(C.root, p),
              shouldForwardComponentProp: !0,
              externalForwardedProps: { slots: f, slotProps: g, ...b },
              getSlotProps: (e) => ({
                ...e,
                onChange: (t, ...i) => {
                  e.onChange?.(t, ...i), k(t, ...i);
                },
              }),
              ownerState: R,
              additionalProps: {
                type: 'radio',
                icon: n.cloneElement(l, { fontSize: l.props.fontSize ?? d }),
                checkedIcon: n.cloneElement(s, { fontSize: s.props.fontSize ?? d }),
                disabled: x,
                name: N,
                checked: j,
                slots: f,
                slotProps: { input: 'function' == typeof D ? D(R) : D },
              },
            });
          return (0, u.jsx)(F, { ...G, classes: C });
        });
    },
    63534: (e, t, i) => {
      'use strict';
      i.d(t, { A: () => n });
      let n = i(7620).createContext(void 0);
    },
    64779: (e, t, i) => {
      'use strict';
      i.d(t, { A: () => o });
      var n = i(69879),
        r = i(54568);
      let o = (0, n.A)(
        (0, r.jsx)('path', {
          d: 'M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
        }),
        'InfoOutlined'
      );
    },
    80101: (e, t, i) => {
      var n = i(5726),
        r = i(78904),
        o = i(30645),
        s = Math.ceil,
        a = Math.max;
      e.exports = function (e, t, i) {
        t = (i ? r(e, t, i) : void 0 === t) ? 1 : a(o(t), 0);
        var l = null == e ? 0 : e.length;
        if (!l || t < 1) return [];
        for (var u = 0, h = 0, c = Array(s(l / t)); u < l; ) c[h++] = n(e, u, (u += t));
        return c;
      };
    },
    81413: (e, t, i) => {
      'use strict';
      function n(e) {
        var t = e.width,
          i = e.height;
        if (t < 0) throw Error('Negative width is not allowed for Size');
        if (i < 0) throw Error('Negative height is not allowed for Size');
        return { width: t, height: i };
      }
      function r(e, t) {
        return e.width === t.width && e.height === t.height;
      }
      i.d(t, { Dv: () => a, zE: () => r, Ej: () => n, vb: () => h });
      var o = (function () {
          function e(e) {
            var t = this;
            (this._resolutionListener = function () {
              return t._onResolutionChanged();
            }),
              (this._resolutionMediaQueryList = null),
              (this._observers = []),
              (this._window = e),
              this._installResolutionListener();
          }
          return (
            (e.prototype.dispose = function () {
              this._uninstallResolutionListener(), (this._window = null);
            }),
            Object.defineProperty(e.prototype, 'value', {
              get: function () {
                return this._window.devicePixelRatio;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.subscribe = function (e) {
              var t = this,
                i = { next: e };
              return (
                this._observers.push(i),
                {
                  unsubscribe: function () {
                    t._observers = t._observers.filter(function (e) {
                      return e !== i;
                    });
                  },
                }
              );
            }),
            (e.prototype._installResolutionListener = function () {
              if (null !== this._resolutionMediaQueryList)
                throw Error('Resolution listener is already installed');
              var e = this._window.devicePixelRatio;
              (this._resolutionMediaQueryList = this._window.matchMedia(
                'all and (resolution: '.concat(e, 'dppx)')
              )),
                this._resolutionMediaQueryList.addListener(this._resolutionListener);
            }),
            (e.prototype._uninstallResolutionListener = function () {
              null !== this._resolutionMediaQueryList &&
                (this._resolutionMediaQueryList.removeListener(this._resolutionListener),
                (this._resolutionMediaQueryList = null));
            }),
            (e.prototype._reinstallResolutionListener = function () {
              this._uninstallResolutionListener(), this._installResolutionListener();
            }),
            (e.prototype._onResolutionChanged = function () {
              var e = this;
              this._observers.forEach(function (t) {
                return t.next(e._window.devicePixelRatio);
              }),
                this._reinstallResolutionListener();
            }),
            e
          );
        })(),
        s = (function () {
          function e(e, t, i) {
            var r;
            (this._canvasElement = null),
              (this._bitmapSizeChangedListeners = []),
              (this._suggestedBitmapSize = null),
              (this._suggestedBitmapSizeChangedListeners = []),
              (this._devicePixelRatioObservable = null),
              (this._canvasElementResizeObserver = null),
              (this._canvasElement = e),
              (this._canvasElementClientSize = n({
                width: this._canvasElement.clientWidth,
                height: this._canvasElement.clientHeight,
              })),
              (this._transformBitmapSize =
                null != t
                  ? t
                  : function (e) {
                      return e;
                    }),
              (this._allowResizeObserver =
                null === (r = null == i ? void 0 : i.allowResizeObserver) || void 0 === r || r),
              this._chooseAndInitObserver();
          }
          return (
            (e.prototype.dispose = function () {
              var e, t;
              if (null === this._canvasElement) throw Error('Object is disposed');
              null === (e = this._canvasElementResizeObserver) || void 0 === e || e.disconnect(),
                (this._canvasElementResizeObserver = null),
                null === (t = this._devicePixelRatioObservable) || void 0 === t || t.dispose(),
                (this._devicePixelRatioObservable = null),
                (this._suggestedBitmapSizeChangedListeners.length = 0),
                (this._bitmapSizeChangedListeners.length = 0),
                (this._canvasElement = null);
            }),
            Object.defineProperty(e.prototype, 'canvasElement', {
              get: function () {
                if (null === this._canvasElement) throw Error('Object is disposed');
                return this._canvasElement;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'canvasElementClientSize', {
              get: function () {
                return this._canvasElementClientSize;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'bitmapSize', {
              get: function () {
                return n({ width: this.canvasElement.width, height: this.canvasElement.height });
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.resizeCanvasElement = function (e) {
              (this._canvasElementClientSize = n(e)),
                (this.canvasElement.style.width = ''.concat(
                  this._canvasElementClientSize.width,
                  'px'
                )),
                (this.canvasElement.style.height = ''.concat(
                  this._canvasElementClientSize.height,
                  'px'
                )),
                this._invalidateBitmapSize();
            }),
            (e.prototype.subscribeBitmapSizeChanged = function (e) {
              this._bitmapSizeChangedListeners.push(e);
            }),
            (e.prototype.unsubscribeBitmapSizeChanged = function (e) {
              this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(
                function (t) {
                  return t !== e;
                }
              );
            }),
            Object.defineProperty(e.prototype, 'suggestedBitmapSize', {
              get: function () {
                return this._suggestedBitmapSize;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.subscribeSuggestedBitmapSizeChanged = function (e) {
              this._suggestedBitmapSizeChangedListeners.push(e);
            }),
            (e.prototype.unsubscribeSuggestedBitmapSizeChanged = function (e) {
              this._suggestedBitmapSizeChangedListeners =
                this._suggestedBitmapSizeChangedListeners.filter(function (t) {
                  return t !== e;
                });
            }),
            (e.prototype.applySuggestedBitmapSize = function () {
              if (null !== this._suggestedBitmapSize) {
                var e = this._suggestedBitmapSize;
                (this._suggestedBitmapSize = null),
                  this._resizeBitmap(e),
                  this._emitSuggestedBitmapSizeChanged(e, this._suggestedBitmapSize);
              }
            }),
            (e.prototype._resizeBitmap = function (e) {
              var t = this.bitmapSize;
              !r(t, e) &&
                ((this.canvasElement.width = e.width),
                (this.canvasElement.height = e.height),
                this._emitBitmapSizeChanged(t, e));
            }),
            (e.prototype._emitBitmapSizeChanged = function (e, t) {
              var i = this;
              this._bitmapSizeChangedListeners.forEach(function (n) {
                return n.call(i, e, t);
              });
            }),
            (e.prototype._suggestNewBitmapSize = function (e) {
              var t = this._suggestedBitmapSize,
                i = n(this._transformBitmapSize(e, this._canvasElementClientSize)),
                o = r(this.bitmapSize, i) ? null : i;
              !((null === t && null === o) || (null !== t && null !== o && r(t, o))) &&
                ((this._suggestedBitmapSize = o), this._emitSuggestedBitmapSizeChanged(t, o));
            }),
            (e.prototype._emitSuggestedBitmapSizeChanged = function (e, t) {
              var i = this;
              this._suggestedBitmapSizeChangedListeners.forEach(function (n) {
                return n.call(i, e, t);
              });
            }),
            (e.prototype._chooseAndInitObserver = function () {
              var e = this;
              if (!this._allowResizeObserver) {
                this._initDevicePixelRatioObservable();
                return;
              }
              new Promise(function (e) {
                var t = new ResizeObserver(function (i) {
                  e(
                    i.every(function (e) {
                      return 'devicePixelContentBoxSize' in e;
                    })
                  ),
                    t.disconnect();
                });
                t.observe(document.body, { box: 'device-pixel-content-box' });
              })
                .catch(function () {
                  return !1;
                })
                .then(function (t) {
                  return t ? e._initResizeObserver() : e._initDevicePixelRatioObservable();
                });
            }),
            (e.prototype._initDevicePixelRatioObservable = function () {
              var e = this;
              if (null !== this._canvasElement) {
                var t = l(this._canvasElement);
                if (null === t) throw Error('No window is associated with the canvas');
                (this._devicePixelRatioObservable = new o(t)),
                  this._devicePixelRatioObservable.subscribe(function () {
                    return e._invalidateBitmapSize();
                  }),
                  this._invalidateBitmapSize();
              }
            }),
            (e.prototype._invalidateBitmapSize = function () {
              if (null !== this._canvasElement) {
                var e,
                  t,
                  i = l(this._canvasElement);
                if (null !== i) {
                  var r,
                    o,
                    s =
                      null !==
                        (t =
                          null === (e = this._devicePixelRatioObservable) || void 0 === e
                            ? void 0
                            : e.value) && void 0 !== t
                        ? t
                        : i.devicePixelRatio,
                    a = this._canvasElement.getClientRects(),
                    u =
                      void 0 !== a[0]
                        ? ((r = a[0]),
                          (o = s),
                          n({
                            width: Math.round(r.left * o + r.width * o) - Math.round(r.left * o),
                            height: Math.round(r.top * o + r.height * o) - Math.round(r.top * o),
                          }))
                        : n({
                            width: this._canvasElementClientSize.width * s,
                            height: this._canvasElementClientSize.height * s,
                          });
                  this._suggestNewBitmapSize(u);
                }
              }
            }),
            (e.prototype._initResizeObserver = function () {
              var e = this;
              null !== this._canvasElement &&
                ((this._canvasElementResizeObserver = new ResizeObserver(function (t) {
                  var i = t.find(function (t) {
                    return t.target === e._canvasElement;
                  });
                  if (i && i.devicePixelContentBoxSize && i.devicePixelContentBoxSize[0]) {
                    var r = i.devicePixelContentBoxSize[0],
                      o = n({ width: r.inlineSize, height: r.blockSize });
                    e._suggestNewBitmapSize(o);
                  }
                })),
                this._canvasElementResizeObserver.observe(this._canvasElement, {
                  box: 'device-pixel-content-box',
                }));
            }),
            e
          );
        })();
      function a(e, t) {
        if ('device-pixel-content-box' === t.type) return new s(e, t.transform, t.options);
        throw Error('Unsupported binding target');
      }
      function l(e) {
        return e.ownerDocument.defaultView;
      }
      var u = (function () {
        function e(e, t, i) {
          if (0 === t.width || 0 === t.height)
            throw TypeError(
              'Rendering target could only be created on a media with positive width and height'
            );
          if (((this._mediaSize = t), 0 === i.width || 0 === i.height))
            throw TypeError(
              'Rendering target could only be created using a bitmap with positive integer width and height'
            );
          (this._bitmapSize = i), (this._context = e);
        }
        return (
          (e.prototype.useMediaCoordinateSpace = function (e) {
            try {
              return (
                this._context.save(),
                this._context.setTransform(1, 0, 0, 1, 0, 0),
                this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio),
                e({ context: this._context, mediaSize: this._mediaSize })
              );
            } finally {
              this._context.restore();
            }
          }),
          (e.prototype.useBitmapCoordinateSpace = function (e) {
            try {
              return (
                this._context.save(),
                this._context.setTransform(1, 0, 0, 1, 0, 0),
                e({
                  context: this._context,
                  mediaSize: this._mediaSize,
                  bitmapSize: this._bitmapSize,
                  horizontalPixelRatio: this._horizontalPixelRatio,
                  verticalPixelRatio: this._verticalPixelRatio,
                })
              );
            } finally {
              this._context.restore();
            }
          }),
          Object.defineProperty(e.prototype, '_horizontalPixelRatio', {
            get: function () {
              return this._bitmapSize.width / this._mediaSize.width;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, '_verticalPixelRatio', {
            get: function () {
              return this._bitmapSize.height / this._mediaSize.height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })();
      function h(e, t) {
        var i = e.canvasElementClientSize;
        if (0 === i.width || 0 === i.height) return null;
        var n = e.bitmapSize;
        if (0 === n.width || 0 === n.height) return null;
        var r = e.canvasElement.getContext('2d', t);
        return null === r ? null : new u(r, i, n);
      }
    },
    87923: (e, t, i) => {
      'use strict';
      i.d(t, { A: () => o });
      var n = i(69879),
        r = i(54568);
      let o = (0, n.A)(
        (0, r.jsx)('path', {
          d: 'M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z',
        }),
        'Tune'
      );
    },
  },
]);
