'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5779],
  {
    67564: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var r = n(87462),
        o = n(63366),
        a = n(67294),
        i = n(63961),
        s = n(94780),
        l = n(90948),
        c = n(28628),
        u = n(98216),
        d = n(1588),
        m = n(34867);
      function p(e) {
        return (0, m.ZP)('MuiIcon', e);
      }
      (0, d.Z)('MuiIcon', [
        'root',
        'colorPrimary',
        'colorSecondary',
        'colorAction',
        'colorError',
        'colorDisabled',
        'fontSizeInherit',
        'fontSizeSmall',
        'fontSizeMedium',
        'fontSizeLarge',
      ]);
      var f = n(85893);
      const v = ['baseClassName', 'className', 'color', 'component', 'fontSize'],
        h = (0, l.ZP)('span', {
          name: 'MuiIcon',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              'inherit' !== n.color && t[`color${(0, u.Z)(n.color)}`],
              t[`fontSize${(0, u.Z)(n.fontSize)}`],
            ];
          },
        })(({ theme: e, ownerState: t }) => ({
          userSelect: 'none',
          width: '1em',
          height: '1em',
          overflow: 'hidden',
          display: 'inline-block',
          textAlign: 'center',
          flexShrink: 0,
          fontSize: {
            inherit: 'inherit',
            small: e.typography.pxToRem(20),
            medium: e.typography.pxToRem(24),
            large: e.typography.pxToRem(36),
          }[t.fontSize],
          color: {
            primary: (e.vars || e).palette.primary.main,
            secondary: (e.vars || e).palette.secondary.main,
            info: (e.vars || e).palette.info.main,
            success: (e.vars || e).palette.success.main,
            warning: (e.vars || e).palette.warning.main,
            action: (e.vars || e).palette.action.active,
            error: (e.vars || e).palette.error.main,
            disabled: (e.vars || e).palette.action.disabled,
            inherit: void 0,
          }[t.color],
        })),
        b = a.forwardRef(function (e, t) {
          const n = (0, c.i)({ props: e, name: 'MuiIcon' }),
            {
              baseClassName: a = 'material-icons',
              className: l,
              color: d = 'inherit',
              component: m = 'span',
              fontSize: b = 'medium',
            } = n,
            y = (0, o.Z)(n, v),
            w = (0, r.Z)({}, n, { baseClassName: a, color: d, component: m, fontSize: b }),
            g = ((e) => {
              const { color: t, fontSize: n, classes: r } = e,
                o = {
                  root: [
                    'root',
                    'inherit' !== t && `color${(0, u.Z)(t)}`,
                    `fontSize${(0, u.Z)(n)}`,
                  ],
                };
              return (0, s.Z)(o, p, r);
            })(w);
          return (0, f.jsx)(
            h,
            (0, r.Z)(
              {
                as: m,
                className: (0, i.Z)(a, 'notranslate', g.root, l),
                ownerState: w,
                'aria-hidden': !0,
                ref: t,
              },
              y
            )
          );
        });
      b.muiName = 'Icon';
      var y = b;
    },
    32867: function (e, t, n) {
      n.d(t, {
        B: function () {
          return f;
        },
        J: function () {
          return m;
        },
      });
      var r = n(59499),
        o = n(4730),
        a = n(1279),
        i = n(15861),
        s = n(85893),
        l = [
          'value',
          'symbol',
          'visibleDecimals',
          'compact',
          'percent',
          'symbolsVariant',
          'symbolsColor',
          'roundDown',
          'compactThreshold',
        ];
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var d = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'],
        m = function (e) {
          var t = e.value,
            n = e.visibleDecimals,
            r = void 0 === n ? 2 : n,
            o = e.roundDown,
            i = e.compactThreshold,
            s = (0, a.hE)(t),
            l = s.toFixed(0).length;
          i && Number(t) <= i && (l = 0);
          var c = Math.min(Math.floor(l ? (l - 1) / 3 : 0), d.length - 1),
            u = d[c],
            m = (0, a.pV)(s, 3 * c).toNumber();
          return (
            o && (m = Math.trunc(Number(m) * Math.pow(10, r)) / Math.pow(10, r)),
            {
              prefix: new Intl.NumberFormat('en-US', {
                maximumFractionDigits: r,
                minimumFractionDigits: r,
              }).format(m),
              postfix: u,
            }
          );
        };
      function p(e) {
        var t = e.value,
          n = e.visibleDecimals,
          r = e.roundDown,
          o = m({ value: t, visibleDecimals: n, roundDown: r }),
          a = o.prefix,
          i = o.postfix;
        return (0, s.jsxs)(s.Fragment, { children: [a, i] });
      }
      function f(e) {
        var t = e.value,
          n = e.symbol,
          r = e.visibleDecimals,
          a = e.compact,
          c = e.percent,
          d = e.symbolsVariant,
          m = e.symbolsColor,
          f = e.roundDown,
          v = e.compactThreshold,
          h = (0, o.Z)(e, l),
          b = c ? 100 * Number(t) : Number(t),
          y = null !== r && void 0 !== r ? r : 0;
        0 === b ? (y = 0) : void 0 === r && (y = b >= 1 || c || 'USD' === n ? 2 : 7);
        var w = Math.pow(10, -y),
          g = 0 !== b && Math.abs(b) < Math.abs(w),
          x = g ? w : b,
          k = !1 !== a && (a || b > 99999);
        return (
          f && !k && (x = Math.trunc(Number(x) * Math.pow(10, y)) / Math.pow(10, y)),
          (0, s.jsxs)(
            i.Z,
            u(
              u({}, h),
              {},
              {
                sx: u(
                  {
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                  },
                  h.sx
                ),
                noWrap: !0,
                children: [
                  g &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || h.variant,
                      color: m || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === n || void 0 === n ? void 0 : n.toLowerCase()) &&
                    !c &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || h.variant,
                      color: m || 'text.secondary',
                      children: '$',
                    }),
                  k
                    ? (0, s.jsx)(p, {
                        value: x,
                        visibleDecimals: y,
                        roundDown: f,
                        compactThreshold: v,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: y,
                        minimumFractionDigits: y,
                      }).format(x),
                  c &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || h.variant,
                      color: m || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === n || void 0 === n ? void 0 : n.toLowerCase()) &&
                    'undefined' !== typeof n &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || h.variant,
                      color: m || 'text.secondary',
                      children: n,
                    }),
                ],
              }
            )
          )
        );
      }
    },
    45640: function (e, t, n) {
      n.d(t, {
        Js: function () {
          return y;
        },
        T1: function () {
          return j;
        },
        UD: function () {
          return x;
        },
      });
      var r = n(83618),
        o = n(59499),
        a = n(4730),
        i = n(67564),
        s = n(80822),
        l = n(86653),
        c = n(67294),
        u = n(25043),
        d = n(85893),
        m = ['symbol', 'aToken', 'waToken'],
        p = ['symbol', 'logoURI'],
        f = ['symbols', 'badgeSymbol', 'aToken', 'waToken', 'aTokens', 'waTokens'],
        v = ['symbol', 'aToken', 'waToken', 'aTokens', 'waTokens'];
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      function y(e) {
        var t = e.symbol,
          n = e.onImageGenerated,
          r = e.aToken,
          o = e.waToken,
          a = (0, c.useRef)(null),
          i = (0, c.useRef)(null),
          s = (0, c.useState)(!0),
          l = s[0],
          u = s[1];
        return (
          (0, c.useEffect)(
            function () {
              var e;
              if (!l && a.current && null !== (e = a.current) && void 0 !== e && e.contentDocument)
                if (r || o) {
                  var t,
                    s,
                    c,
                    u,
                    d =
                      null === (t = a.current) ||
                      void 0 === t ||
                      null === (s = t.contentDocument) ||
                      void 0 === s ||
                      null === (c = s.childNodes) ||
                      void 0 === c
                        ? void 0
                        : c[0],
                    m = d.getAttribute('width'),
                    p = d.getAttribute('height'),
                    f = d.getAttribute('viewBox');
                  d.setAttribute('x', 25),
                    d.setAttribute('width', 206),
                    d.setAttribute('y', 25),
                    d.setAttribute('height', 206),
                    f || d.setAttribute('viewBox', '0 0 '.concat(m, ' ').concat(p)),
                    null === (u = i.current) || void 0 === u || u.appendChild(d);
                  var v = new XMLSerializer().serializeToString(i.current);
                  n(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(v)))
                    )
                  );
                } else {
                  var h,
                    b = new XMLSerializer().serializeToString(
                      null === (h = a.current) || void 0 === h ? void 0 : h.contentDocument
                    );
                  n(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(b)))
                    )
                  );
                }
            },
            [l, r, o]
          ),
          (0, d.jsxs)('div', {
            style: { visibility: 'hidden', height: 0, width: 0, overflow: 'hidden' },
            children: [
              (0, d.jsx)('object', {
                style: { opacity: 1 },
                ref: a,
                id: 'svg',
                data: '/icons/tokens/'.concat(t.toLowerCase(), '.svg'),
                onLoad: function () {
                  return u(!1);
                },
              }),
              (r || o) && (0, d.jsx)(w, { ref: i, waToken: o }),
            ],
          })
        );
      }
      var w = (0, c.forwardRef)(function (e, t) {
        var n = e.symbol,
          r = e.waToken;
        return (0, d.jsxs)('svg', {
          style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
          ref: t,
          id: 'Group_30952',
          width: '256',
          height: '256',
          viewBox: '0 0 256 256',
          children: [
            (0, d.jsx)('defs', {
              id: 'defs10',
              children: (0, d.jsxs)('linearGradient', {
                id: 'linear-gradient',
                x1: '.843',
                x2: '.206',
                y1: '.135',
                y2: '.886',
                gradientUnits: 'objectBoundingBox',
                children: [
                  (0, d.jsx)('stop', { offset: '0', stopColor: '#b6509e', id: 'stop2' }),
                  (0, d.jsx)('stop', { offset: '1', stopColor: '#2ebac6', id: 'stop4' }),
                ],
              }),
            }),
            (0, d.jsxs)('g', {
              id: 'Group_29109',
              children: [
                r
                  ? (0, d.jsx)('path', {
                      id: 'Subtraction_108',
                      fill: 'none',
                      stroke: 'url(#linear-gradient)',
                      strokeWidth: '13.713',
                      strokeDasharray: '8,8',
                      d: 'M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256z',
                    })
                  : (0, d.jsx)('path', {
                      id: 'Subtraction_108',
                      fill: 'url(#linear-gradient)',
                      d: 'M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z',
                    }),
                n &&
                  (0, d.jsx)('image', {
                    x: '25',
                    y: '25',
                    href: '/icons/tokens/'.concat(n.toLowerCase(), '.svg'),
                    width: '206',
                    height: '206',
                  }),
              ],
            }),
          ],
        });
      });
      function g(e) {
        var t = e.symbol,
          n = e.aToken,
          r = e.waToken,
          o = (0, a.Z)(e, m),
          s = (0, c.useState)(t.toLowerCase()),
          l = s[0],
          u = s[1];
        return (
          (0, c.useEffect)(
            function () {
              u(t.toLowerCase());
            },
            [t]
          ),
          (0, d.jsx)(
            i.Z,
            b(
              b({}, o),
              {},
              {
                sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, o.sx),
                children:
                  n || r
                    ? (0, d.jsx)(w, { symbol: l, waToken: r })
                    : (0, d.jsx)('img', {
                        src: '/icons/tokens/'.concat(l, '.svg'),
                        onError: function () {
                          return u('default');
                        },
                        width: '100%',
                        height: '100%',
                        alt: ''.concat(t, ' icon'),
                      }),
              }
            )
          )
        );
      }
      function x(e) {
        var t = e.symbol,
          n = e.logoURI,
          r = (0, a.Z)(e, p),
          o = (0, c.useState)(t.toLowerCase()),
          s = o[0],
          l = o[1];
        return (0, d.jsx)(
          i.Z,
          b(
            b({}, r),
            {},
            {
              sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, r.sx),
              children: (0, d.jsx)(u.Z, {
                children: (0, d.jsx)('img', {
                  src: 'default' !== s && n ? n : '/icons/tokens/default.svg',
                  width: '100%',
                  height: '100%',
                  alt: ''.concat(t, ' icon'),
                  onError: function () {
                    return l('default');
                  },
                }),
              }),
            }
          )
        );
      }
      function k(e) {
        var t = e.symbols,
          n = e.badgeSymbol,
          r = e.aToken,
          o = void 0 !== r && r,
          i = e.waToken,
          u = void 0 !== i && i,
          m = e.aTokens,
          p = e.waTokens,
          v = (0, a.Z)(e, f),
          h =
            m ||
            t.map(function (e, t) {
              return 0 === t && o;
            }),
          y =
            p ||
            t.map(function (e, t) {
              return 0 === t && u;
            });
        return n
          ? (0, d.jsx)(l.Z, {
              badgeContent: (0, d.jsx)(g, {
                symbol: n,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: t.map(function (e, t) {
                return (0, c.createElement)(
                  g,
                  b(
                    b({}, v),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: h[t],
                      waToken: y[t],
                      sx: b({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, v.sx),
                    }
                  )
                );
              }),
            })
          : (0, d.jsx)(s.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: t.map(function (e, t) {
                return (0, c.createElement)(
                  g,
                  b(
                    b({}, v),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: h[t],
                      waToken: y[t],
                      sx: b({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, v.sx),
                    }
                  )
                );
              }),
            });
      }
      function j(e) {
        var t = e.symbol,
          n = e.aToken,
          o = e.waToken,
          i = e.aTokens,
          s = e.waTokens,
          l = (0, a.Z)(e, v),
          c = t.split('_');
        if (c.length > 1) {
          if (c[0].startsWith('pools/')) {
            var u = (0, r.Z)(c),
              m = u[0],
              p = u.slice(1);
            return (0, d.jsx)(k, b(b({}, l), {}, { symbols: p, badgeSymbol: '/pools/' + m }));
          }
          return (0, d.jsx)(
            k,
            b(b({}, l), {}, { symbols: c, aToken: n, waToken: o, aTokens: i, waTokens: s })
          );
        }
        return (0, d.jsx)(g, b({ symbol: t, aToken: n, waToken: o }, l));
      }
      w.displayName = 'TokenRing';
    },
    50060: function (e, t, n) {
      n.d(t, {
        P: function () {
          return y;
        },
      });
      var r = n(80854),
        o = n(1279),
        a = n(81206),
        i = n(82403),
        s = n(70794),
        l = n(3062),
        c = n(79850),
        u = n(47892),
        d = n(59499),
        m = n(99673),
        p = n(52251),
        f = n(13441);
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var h = function (e, t, n) {
          var r = (0, f.z)().poolTokensBalanceService;
          return (0, m.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? v(Object(n), !0).forEach(function (t) {
                        (0, d.Z)(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                      : v(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                }
                return e;
              })(
                {
                  queryKey: p.B.poolTokens(t, e),
                  queryFn: function () {
                    return r.getPoolTokensBalances(e, t);
                  },
                  enabled: !!t,
                  refetchInterval: p.g,
                },
                n
              );
            }),
          });
        },
        b = function (e) {
          var t = (0, l.Y)(function (e) {
              return e.account;
            }),
            n = h(e, t),
            d = (0, u.T)(e),
            m =
              n.some(function (e) {
                return e.isLoading;
              }) ||
              d.some(function (e) {
                return e.isLoading;
              });
          return {
            walletBalances: d.map(function (t, l) {
              var u;
              return (function (e) {
                var t = e.reservesHumanized,
                  n = e.balances,
                  l = e.marketData,
                  u = (null === t || void 0 === t ? void 0 : t.reservesData) || [],
                  d = (null === t || void 0 === t ? void 0 : t.baseCurrencyData) || {
                    marketReferenceCurrencyDecimals: 0,
                    marketReferenceCurrencyPriceInUsd: '0',
                    networkBaseTokenPriceInUsd: '0',
                    networkBaseTokenPriceDecimals: 0,
                  },
                  m = !0;
                return {
                  walletBalances: (null !== n && void 0 !== n ? n : []).reduce(function (e, t) {
                    var n = u.find(function (e) {
                      var n;
                      return t.address === r.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (n = c.m5[l.chainId].wrappedBaseAssetSymbol) || void 0 === n
                              ? void 0
                              : n.toLowerCase())
                        : e.underlyingAsset.toLowerCase() === t.address;
                    });
                    return (
                      '0' !== t.amount && (m = !1),
                      n &&
                        (e[t.address] = {
                          amount: (0, o.Fv)(t.amount, n.decimals),
                          amountUSD: (0, a.Z)({
                            amount: new s.O(t.amount),
                            currencyDecimals: n.decimals,
                            priceInMarketReferenceCurrency: n.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: d.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, o.Fv)(
                              d.marketReferenceCurrencyPriceInUsd,
                              i.$3
                            ),
                          }),
                        }),
                      e
                    );
                  }, {}),
                  hasEmptyWallet: m,
                };
              })({
                reservesHumanized: t.data,
                balances: null === (u = n[l]) || void 0 === u ? void 0 : u.data,
                marketData: e[l],
              });
            }),
            isLoading: m,
          };
        },
        y = function (e) {
          var t = b([e]),
            n = t.walletBalances,
            r = t.isLoading;
          return {
            walletBalances: n[0].walletBalances,
            hasEmptyWallet: n[0].hasEmptyWallet,
            loading: r,
          };
        };
    },
    83618: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(14666),
        o = n(28811),
        a = n(2937),
        i = n(14882);
      function s(e) {
        return (0, r.Z)(e) || (0, o.Z)(e) || (0, a.Z)(e) || (0, i.Z)();
      }
    },
    25043: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(67294),
        o = Object.defineProperty,
        a = (e, t, n) => (
          ((e, t, n) => {
            t in e
              ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
              : (e[t] = n);
          })(e, 'symbol' != typeof t ? t + '' : t, n),
          n
        );
      const i = (e, t) =>
          typeof getComputedStyle < 'u'
            ? getComputedStyle(e, null).getPropertyValue(t)
            : e.style.getPropertyValue(t),
        s = (e) => i(e, 'overflow') + i(e, 'overflow-y') + i(e, 'overflow-x');
      class l extends r.Component {
        constructor(e) {
          super(e),
            a(this, 'elementObserver'),
            a(this, 'wrapper'),
            a(this, 'lazyLoadHandler', (e) => {
              var t, n;
              const { onContentVisible: r } = this.props,
                [o] = e,
                { isIntersecting: a } = o;
              if (a) {
                this.setState({ visible: !0 }, () => {
                  r && r();
                });
                const e = null == (t = this.wrapper) ? void 0 : t.current;
                e &&
                  e instanceof HTMLElement &&
                  (null == (n = this.elementObserver) || n.unobserve(e));
              }
            }),
            (this.elementObserver = null),
            (this.wrapper = r.createRef()),
            (this.state = { visible: !1 });
        }
        componentDidMount() {
          var e;
          this.getEventNode();
          const { offset: t, threshold: n } = this.props,
            r = { rootMargin: 'number' == typeof t ? `${t}px` : t || '0px', threshold: n || 0 };
          this.elementObserver = new IntersectionObserver(this.lazyLoadHandler, r);
          const o = null == (e = this.wrapper) ? void 0 : e.current;
          o instanceof HTMLElement && this.elementObserver.observe(o);
        }
        shouldComponentUpdate(e, t) {
          return t.visible;
        }
        componentWillUnmount() {
          var e, t;
          const n = null == (e = this.wrapper) ? void 0 : e.current;
          n && n instanceof HTMLElement && (null == (t = this.elementObserver) || t.unobserve(n));
        }
        getEventNode() {
          var e;
          return ((e) => {
            if (!(e instanceof HTMLElement)) return window;
            let t = e;
            for (; t && t !== document.body && t !== document.documentElement && t.parentNode; ) {
              if (/(scroll|auto)/.test(s(t))) return t;
              t = t.parentNode;
            }
            return window;
          })(null == (e = this.wrapper) ? void 0 : e.current);
        }
        render() {
          const { children: e, className: t, height: n, width: o, elementType: a } = this.props,
            { visible: i } = this.state,
            s = { height: n, width: o },
            l = `LazyLoad${i ? ' is-visible' : ''}${t ? ` ${t}` : ''}`;
          return (0, r.createElement)(
            a || 'div',
            { className: l, style: s, ref: this.wrapper },
            i && r.Children.only(e)
          );
        }
      }
      a(l, 'defaultProps', {
        elementType: 'div',
        className: '',
        offset: 0,
        threshold: 0,
        width: null,
        onContentVisible: null,
        height: null,
      });
    },
  },
]);
