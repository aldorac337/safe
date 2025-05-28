try {
  let t =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    e = new t.Error().stack;
  e &&
    ((t._sentryDebugIds = t._sentryDebugIds || {}),
    (t._sentryDebugIds[e] = 'a2da5cad-13a0-4621-96ee-311fe488279e'),
    (t._sentryDebugIdIdentifier = 'sentry-dbid-a2da5cad-13a0-4621-96ee-311fe488279e'));
} catch (t) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8567],
  {
    80802: function (t, e, r) {
      Promise.resolve().then(r.bind(r, 16793));
    },
    16793: function (t, e, r) {
      'use strict';
      r.r(e),
        r.d(e, {
          default: function () {
            return c;
          },
        });
      var n = r(78286),
        o = r(10975),
        i = r(11620),
        a = r(30450),
        l = r(46316),
        u = r(46460),
        d = r(18903);
      function c() {
        return (0, n.tZ)(o.default, {
          statsSectionSlot: (0, n.tZ)(u.R, {}),
          tabsSlot: (0, n.tZ)(i.default, {
            slots: {
              markets: (0, n.tZ)(a.default, {}),
              vaults: (0, n.tZ)(d.default, {}),
              moreOnMorpho: (0, n.tZ)(l.default, {}),
            },
          }),
        });
      }
      r(78688);
    },
    53863: function (t, e, r) {
      'use strict';
      r.d(e, {
        Z: function () {
          return g;
        },
        c: function () {
          return s;
        },
      });
      var n = r(78286),
        o = r(58258),
        i = r(12556),
        a = r(54655),
        l = r(50825),
        u = r(49149),
        d = r(38819);
      let c = (0, d.Z)(a.Kqy, { target: 'e1gk17kp0' })(
        'background-color:',
        (t) => {
          let { theme: e } = t;
          return e.colors.background.bloc;
        },
        ';border-radius:',
        (t) => {
          let { theme: e } = t;
          return e.borderRadius;
        },
        ';align-items:center;justify-content:center;width:100%;'
      );
      var s = (0, o.memo)((t) => {
          let { minHeight: e = '200px' } = t;
          return (0, n.BX)(c, {
            gap: 20,
            direction: 'column',
            minHeight: e,
            padding: 's',
            children: [
              (0, n.BX)(a.Kqy, {
                direction: 'column',
                gap: 's',
                children: [
                  (0, n.tZ)(a.xvT.Body.S.Regular, {
                    textAlign: 'center',
                    children: 'Service temporarily unavailable.',
                  }),
                  (0, n.tZ)(a.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    maxWidth: '450px',
                    textAlign: 'center',
                    children:
                      "We're experiencing an outage and are working to restore service as soon as possible. The data shown on the app may not be reliable. In the meantime you can manage your positions through our Fallback App.",
                  }),
                ],
              }),
              (0, n.BX)(a.Kqy, {
                gap: 's',
                children: [
                  (0, n.tZ)(l.Z, {
                    mode: 'external',
                    href: i.hU,
                    buttonProps: { size: 'small', variant: 'primary', label: 'Use Fallback App' },
                  }),
                  (0, n.tZ)(l.Z, {
                    mode: 'external',
                    href: u.QP.NEXT_PUBLIC_STATUS_URL,
                    buttonProps: { size: 'small', variant: 'secondary', label: 'Check App Status' },
                  }),
                ],
              }),
            ],
          });
        }),
        p = r(85957);
      let f = (0, d.Z)(a.Kqy, { target: 'e6oot9d0' })(
        'background-color:',
        (t) => {
          let { theme: e } = t;
          return e.colors.background.bloc;
        },
        ';border-radius:',
        (t) => {
          let { theme: e } = t;
          return e.borderRadius;
        },
        ';align-items:center;justify-content:center;width:100%;'
      );
      var g = (0, o.memo)((t) => {
        let { minHeight: e = '250px', className: r, style: o } = t,
          i = (0, p.useRouter)();
        return (0, n.BX)(f, {
          className: r,
          style: o,
          gap: 20,
          direction: 'column',
          minHeight: e,
          padding: 's',
          children: [
            (0, n.BX)(a.Kqy, {
              direction: 'column',
              gap: 's',
              children: [
                (0, n.tZ)(a.xvT.Body.S.Regular, {
                  textAlign: 'center',
                  children: 'Data temporarily unavailable.',
                }),
                (0, n.tZ)(a.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  maxWidth: '450px',
                  textAlign: 'center',
                  children:
                    "We're experiencing an outage and are working to restore service as soon as possible. The data shown on the app may not be reliable.",
                }),
              ],
            }),
            (0, n.BX)(a.Kqy, {
              gap: 's',
              children: [
                (0, n.tZ)(a.zxk, {
                  size: 'small',
                  variant: 'primary',
                  label: 'Refresh App',
                  onClick: () => i.refresh(),
                }),
                (0, n.tZ)(l.Z, {
                  mode: 'external',
                  href: u.QP.NEXT_PUBLIC_STATUS_URL,
                  buttonProps: { size: 'small', variant: 'secondary', label: 'Check App Status' },
                }),
              ],
            }),
          ],
        });
      });
    },
    76992: function (t, e, r) {
      'use strict';
      r.d(e, {
        E: function () {
          return g;
        },
      });
      var n = r(78286),
        o = r(58258),
        i = r(54655),
        a = r(50825),
        l = r(38819),
        u = r(16690);
      let d = (0, l.Z)('div', { target: 'eikqm6p0' })(
          'background-color:',
          (t) => {
            let { theme: e, backgroundVariant: r } = t;
            return 'primary' === r ? e.colors.background.primary : e.colors.constant.dark;
          },
          ';padding:',
          (t) => {
            let { noPadding: e } = t;
            return e ? '0px' : '3px';
          },
          ';display:flex;gap:',
          (t) => {
            let { noGap: e } = t;
            return e ? '0px' : '4px';
          },
          ';border-radius:100px;height:fit-content;'
        ),
        c = (0, l.Z)('div', { target: 'eikqm6p1' })('position:relative;'),
        s = (0, l.Z)(i.Kqy, { target: 'eikqm6p2' })(
          'position:absolute;top:0px;right:0px;background-color:',
          (t) => {
            let { theme: e } = t;
            return e.colors.icon.brand;
          },
          ';width:14px;height:14px;border-radius:50%;display:flex;justify-content:center;align-items:center;text-align:center;',
          (0, u.animationCubicBezier)(u.popUpScale, '300ms'),
          ';& >:first-of-type{transform:translate(0.2px,0.4px);font-size:8px;}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('s');
          },
          '{top:-5px !important;right:-5px !important;}'
        ),
        p = (0, l.Z)(i.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        f = (0, o.forwardRef)(function (t, e) {
          let {
            options: r,
            id: o,
            value: l,
            noPadding: u = !1,
            noGap: f = !1,
            disabled: g = !1,
            variant: h = 'primary',
            backgroundVariant: b = 'primary',
            size: x = 'small',
            className: m,
            onChange: v,
            ...y
          } = t;
          return (0, n.tZ)(d, {
            noPadding: u,
            noGap: f,
            backgroundVariant: b,
            ref: e,
            className: m,
            ...y,
            children: r.map((t) =>
              (0, n.tZ)(
                i.ua7,
                {
                  disabled: !t.tooltip,
                  content: t.tooltip,
                  offset: u ? 4 : 9,
                  children: (0, n.BX)(c, {
                    children: [
                      t.href
                        ? (0, n.tZ)(a.Z, {
                            href: t.href,
                            prefetch: t.prefetch,
                            mode: 'internal',
                            buttonProps: {
                              variant: t.value === l ? h : 'ghost',
                              size: x,
                              disabled: g || t.isDisabled,
                              label: t.label,
                              iconAlone: t.icon,
                              onClick: () => (null == v ? void 0 : v(t.value)),
                            },
                          })
                        : (0, n.tZ)(i.zxk, {
                            variant: t.value === l ? h : 'ghost',
                            size: x,
                            disabled: g || t.isDisabled,
                            label: t.label,
                            iconAlone: t.icon,
                            onClick: () => (null == v ? void 0 : v(t.value)),
                          }),
                      t.counter && t.counter > 0
                        ? (0, n.tZ)(s, {
                            children: (0, n.tZ)(p, {
                              TextVariant: i.xvT.Body.XXXS.Regular,
                              children: t.counter,
                            }),
                          })
                        : null,
                    ],
                  }),
                },
                o + t.value
              )
            ),
          });
        });
      var g = (0, o.memo)(f);
    },
    28393: function (t, e, r) {
      'use strict';
      r.d(e, {
        Rh: function () {
          return l;
        },
        cW: function () {
          return u;
        },
        ef: function () {
          return d;
        },
        wP: function () {
          return a;
        },
      });
      var n = r(23567),
        o = r(38819),
        i = r(54655);
      let a = (0, o.Z)('div', {
          shouldForwardProp: (0, i.uhK)(['noBackground']),
          target: 'e1i1nrgp0',
        })(
          'background:',
          (t) => {
            let { theme: e, noBackground: r } = t;
            return !r && e.colors.constant.gradient.pageBackground;
          },
          ';width:100%;'
        ),
        l = (0, o.Z)(i.Kqy, {
          shouldForwardProp: (0, i.uhK)(['hasLargerVerticalPadding', 'withoutAside', 'unshiftTop']),
          target: 'e1i1nrgp1',
        })(
          'max-width:1600px;margin-left:auto;margin-right:auto;flex-direction:column;border-radius:',
          (t) => {
            let { theme: e } = t;
            return e.borderRadius;
          },
          ';padding-left:200px;padding-right:200px;',
          (t) => {
            let { hasLargerVerticalPadding: e } = t;
            return e
              ? (0, n.iv)('padding-top:100px;padding-bottom:100px;')
              : (0, n.iv)('padding-top:80px;padding-bottom:80px;');
          },
          ' ',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('content-xxl', 'content-root');
          },
          '{',
          (t) => {
            let { withoutAside: e } = t;
            return e
              ? (0, n.iv)('padding-left:120px;padding-right:120px;')
              : (0, n.iv)('padding-left:80px;padding-right:80px;');
          },
          '}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('content-xl', 'content-root');
          },
          '{',
          (t) => {
            let { withoutAside: e } = t;
            return e
              ? (0, n.iv)('padding-left:60px;padding-right:60px;')
              : (0, n.iv)('padding-left:12px;padding-right:12px;');
          },
          '}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('content-l', 'content-root');
          },
          '{padding-left:12px;padding-right:12px;}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('m');
          },
          '{padding:12px;}',
          (t) => {
            let { unshiftTop: e } = t;
            return e && 'margin-top: -20px;';
          }
        ),
        u = (0, o.Z)('div', { target: 'e1i1nrgp2' })(
          'width:100%;height:',
          (t) => {
            let { theme: e } = t;
            return e.padding.s;
          },
          ';',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('xs');
          },
          '{height:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.l;
          },
          ';}background-color:',
          (t) => {
            let { theme: e } = t;
            return e.colors.background.base;
          },
          ';border-radius:',
          (t) => {
            let { theme: e } = t;
            return ''.concat(e.borderRadius, ' ').concat(e.borderRadius, ' 0 0');
          },
          ';'
        ),
        d = (0, o.Z)('div', { target: 'e1i1nrgp3' })(
          'position:sticky;top:',
          (t) => {
            let { top: e } = t;
            return e;
          },
          'px;display:flex;flex-shrink:0;width:430px;margin-top:64px;padding-top:76px;padding-left:1px;padding-right:80px;overflow-y:auto;max-height:calc(100vh - 10px - ',
          (t) => {
            let { top: e } = t;
            return e;
          },
          'px);z-index:',
          (t) => {
            let { theme: e } = t;
            return e.zIndex.base.default;
          },
          ';',
          (0, i.xJ_)('border-width'),
          ' ',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('content-xl', 'content-root');
          },
          '{padding-right:12px;}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('l');
          },
          '{width:360px;}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('s');
          },
          '{display:none;}'
        );
    },
    4078: function (t, e, r) {
      'use strict';
      var n = r(78286),
        o = r(58258),
        i = r(28393);
      e.default = (0, o.memo)((t) => {
        let {
          children: e,
          hasLargerVerticalPadding: r = !1,
          withoutAside: o = !1,
          withOverflowingBottomBorder: a = !1,
          unshiftTop: l = !1,
          noBackground: u = !1,
          className: d,
          style: c,
        } = t;
        return (0, n.BX)(i.wP, {
          noBackground: u,
          className: d,
          style: c,
          id: 'section-layout-background',
          children: [
            (0, n.tZ)(i.Rh, {
              hasLargerVerticalPadding: r,
              withoutAside: o,
              unshiftTop: l,
              id: 'section-layout',
              children: e,
            }),
            a && (0, n.tZ)(i.cW, {}),
          ],
        });
      });
    },
    58151: function (t, e, r) {
      'use strict';
      var n = r(68973).Z.Symbol;
      e.Z = n;
    },
    69368: function (t, e) {
      'use strict';
      e.Z = function (t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; )
          o[r] = e(t[r], r, t);
        return o;
      };
    },
    37201: function (t, e, r) {
      'use strict';
      r.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = r(58151),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        l = n.Z ? n.Z.toStringTag : void 0,
        u = function (t) {
          var e = i.call(t, l),
            r = t[l];
          try {
            t[l] = void 0;
            var n = !0;
          } catch (t) {}
          var o = a.call(t);
          return n && (e ? (t[l] = r) : delete t[l]), o;
        },
        d = Object.prototype.toString,
        c = n.Z ? n.Z.toStringTag : void 0,
        s = function (t) {
          return null == t
            ? void 0 === t
              ? '[object Undefined]'
              : '[object Null]'
            : c && c in Object(t)
              ? u(t)
              : d.call(t);
        };
    },
    85259: function (t, e) {
      'use strict';
      var r = 'object' == typeof global && global && global.Object === Object && global;
      e.Z = r;
    },
    68973: function (t, e, r) {
      'use strict';
      var n = r(85259),
        o = 'object' == typeof self && self && self.Object === Object && self,
        i = n.Z || o || Function('return this')();
      e.Z = i;
    },
    3100: function (t, e, r) {
      'use strict';
      r.d(e, {
        Z: function () {
          return v;
        },
      });
      var n = r(38538),
        o = function (t, e, r) {
          var n = -1,
            o = t.length;
          e < 0 && (e = -e > o ? 0 : o + e),
            (r = r > o ? o : r) < 0 && (r += o),
            (o = e > r ? 0 : (r - e) >>> 0),
            (e >>>= 0);
          for (var i = Array(o); ++n < o; ) i[n] = t[n + e];
          return i;
        },
        i = function (t, e, r) {
          var n = t.length;
          return (r = void 0 === r ? n : r), !e && r >= n ? t : o(t, e, r);
        },
        a = RegExp(
          '[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'
        ),
        l = function (t) {
          return a.test(t);
        },
        u = '\ud800-\udfff',
        d = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
        c = '\ud83c[\udffb-\udfff]',
        s = '[^' + u + ']',
        p = '(?:\ud83c[\udde6-\uddff]){2}',
        f = '[\ud800-\udbff][\udc00-\udfff]',
        g = '(?:' + d + '|' + c + ')?',
        h = '[\\ufe0e\\ufe0f]?',
        b = '(?:\\u200d(?:' + [s, p, f].join('|') + ')' + h + g + ')*',
        x = RegExp(
          c +
            '(?=' +
            c +
            ')|(?:' +
            [s + d + '?', d, p, f, '[' + u + ']'].join('|') +
            ')' +
            (h + g + b),
          'g'
        ),
        m = function (t) {
          var e,
            r = l((t = (0, n.Z)(t))) ? (l((e = t)) ? e.match(x) || [] : e.split('')) : void 0,
            o = r ? r[0] : t.charAt(0),
            a = r ? i(r, 1).join('') : t.slice(1);
          return o.toUpperCase() + a;
        },
        v = function (t) {
          return m((0, n.Z)(t).toLowerCase());
        };
    },
    71569: function (t, e) {
      'use strict';
      var r = Array.isArray;
      e.Z = r;
    },
    47501: function (t, e) {
      'use strict';
      e.Z = function (t) {
        return null != t && 'object' == typeof t;
      };
    },
    69863: function (t, e, r) {
      'use strict';
      var n = r(37201),
        o = r(47501);
      e.Z = function (t) {
        return 'symbol' == typeof t || ((0, o.Z)(t) && '[object Symbol]' == (0, n.Z)(t));
      };
    },
    38538: function (t, e, r) {
      'use strict';
      r.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = r(58151),
        o = r(69368),
        i = r(71569),
        a = r(69863),
        l = 1 / 0,
        u = n.Z ? n.Z.prototype : void 0,
        d = u ? u.toString : void 0,
        c = function t(e) {
          if ('string' == typeof e) return e;
          if ((0, i.Z)(e)) return (0, o.Z)(e, t) + '';
          if ((0, a.Z)(e)) return d ? d.call(e) : '';
          var r = e + '';
          return '0' == r && 1 / e == -l ? '-0' : r;
        },
        s = function (t) {
          return null == t ? '' : c(t);
        };
    },
  },
  function (t) {
    t.O(0, [9913, 1811, 3261, 3918, 5852, 92, 4655, 825, 3360, 6269, 8804, 1744], function () {
      return t((t.s = 80802));
    }),
      (_N_E = t.O());
  },
]);
