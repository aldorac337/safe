'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5779],
  {
    67564: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return y;
        },
      });
      var n = r(87462),
        o = r(63366),
        i = r(67294),
        a = r(63961),
        s = r(94780),
        l = r(90948),
        c = r(28628),
        u = r(98216),
        d = r(1588),
        m = r(34867);
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
      var f = r(85893);
      const v = ['baseClassName', 'className', 'color', 'component', 'fontSize'],
        h = (0, l.ZP)('span', {
          name: 'MuiIcon',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: r } = e;
            return [
              t.root,
              'inherit' !== r.color && t[`color${(0, u.Z)(r.color)}`],
              t[`fontSize${(0, u.Z)(r.fontSize)}`],
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
        b = i.forwardRef(function (e, t) {
          const r = (0, c.i)({ props: e, name: 'MuiIcon' }),
            {
              baseClassName: i = 'material-icons',
              className: l,
              color: d = 'inherit',
              component: m = 'span',
              fontSize: b = 'medium',
            } = r,
            y = (0, o.Z)(r, v),
            g = (0, n.Z)({}, r, { baseClassName: i, color: d, component: m, fontSize: b }),
            w = ((e) => {
              const { color: t, fontSize: r, classes: n } = e,
                o = {
                  root: [
                    'root',
                    'inherit' !== t && `color${(0, u.Z)(t)}`,
                    `fontSize${(0, u.Z)(r)}`,
                  ],
                };
              return (0, s.Z)(o, p, n);
            })(g);
          return (0, f.jsx)(
            h,
            (0, n.Z)(
              {
                as: m,
                className: (0, a.Z)(i, 'notranslate', w.root, l),
                ownerState: g,
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
    32867: function (e, t, r) {
      r.d(t, {
        B: function () {
          return f;
        },
        J: function () {
          return m;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(1279),
        a = r(15861),
        s = r(85893),
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
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var d = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'],
        m = function (e) {
          var t = e.value,
            r = e.visibleDecimals,
            n = void 0 === r ? 2 : r,
            o = e.roundDown,
            a = e.compactThreshold,
            s = (0, i.hE)(t),
            l = s.toFixed(0).length;
          a && Number(t) <= a && (l = 0);
          var c = Math.min(Math.floor(l ? (l - 1) / 3 : 0), d.length - 1),
            u = d[c],
            m = (0, i.pV)(s, 3 * c).toNumber();
          return (
            o && (m = Math.trunc(Number(m) * Math.pow(10, n)) / Math.pow(10, n)),
            {
              prefix: new Intl.NumberFormat('en-US', {
                maximumFractionDigits: n,
                minimumFractionDigits: n,
              }).format(m),
              postfix: u,
            }
          );
        };
      function p(e) {
        var t = e.value,
          r = e.visibleDecimals,
          n = e.roundDown,
          o = m({ value: t, visibleDecimals: r, roundDown: n }),
          i = o.prefix,
          a = o.postfix;
        return (0, s.jsxs)(s.Fragment, { children: [i, a] });
      }
      function f(e) {
        var t = e.value,
          r = e.symbol,
          n = e.visibleDecimals,
          i = e.compact,
          c = e.percent,
          d = e.symbolsVariant,
          m = e.symbolsColor,
          f = e.roundDown,
          v = e.compactThreshold,
          h = (0, o.Z)(e, l),
          b = c ? 100 * Number(t) : Number(t),
          y = null !== n && void 0 !== n ? n : 0;
        0 === b ? (y = 0) : void 0 === n && (y = b >= 1 || c || 'USD' === r ? 2 : 7);
        var g = Math.pow(10, -y),
          w = 0 !== b && Math.abs(b) < Math.abs(g),
          x = w ? g : b,
          j = !1 !== i && (i || b > 99999);
        return (
          f && !j && (x = Math.trunc(Number(x) * Math.pow(10, y)) / Math.pow(10, y)),
          (0, s.jsxs)(
            a.Z,
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
                  w &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || h.variant,
                      color: m || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    !c &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || h.variant,
                      color: m || 'text.secondary',
                      children: '$',
                    }),
                  j
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
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || h.variant,
                      color: m || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    'undefined' !== typeof r &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || h.variant,
                      color: m || 'text.secondary',
                      children: r,
                    }),
                ],
              }
            )
          )
        );
      }
    },
    45640: function (e, t, r) {
      r.d(t, {
        Js: function () {
          return y;
        },
        T1: function () {
          return O;
        },
        UD: function () {
          return x;
        },
      });
      var n = r(83618),
        o = r(59499),
        i = r(4730),
        a = r(67564),
        s = r(80822),
        l = r(86653),
        c = r(67294),
        u = r(25043),
        d = r(85893),
        m = ['symbol', 'aToken'],
        p = ['symbol', 'logoURI'],
        f = ['symbols', 'badgeSymbol'],
        v = ['symbol'];
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : h(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function y(e) {
        var t = e.symbol,
          r = e.onImageGenerated,
          n = e.aToken,
          o = (0, c.useRef)(null),
          i = (0, c.useRef)(null),
          a = (0, c.useState)(!0),
          s = a[0],
          l = a[1];
        return (
          (0, c.useEffect)(
            function () {
              var e;
              if (!s && o.current && null !== (e = o.current) && void 0 !== e && e.contentDocument)
                if (n) {
                  var t,
                    a,
                    l,
                    c,
                    u =
                      null === (t = o.current) ||
                      void 0 === t ||
                      null === (a = t.contentDocument) ||
                      void 0 === a ||
                      null === (l = a.childNodes) ||
                      void 0 === l
                        ? void 0
                        : l[0],
                    d = u.getAttribute('width'),
                    m = u.getAttribute('height'),
                    p = u.getAttribute('viewBox');
                  u.setAttribute('x', 25),
                    u.setAttribute('width', 206),
                    u.setAttribute('y', 25),
                    u.setAttribute('height', 206),
                    p || u.setAttribute('viewBox', '0 0 '.concat(d, ' ').concat(m)),
                    null === (c = i.current) || void 0 === c || c.appendChild(u);
                  var f = new XMLSerializer().serializeToString(i.current);
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(f)))
                    )
                  );
                } else {
                  var v,
                    h = new XMLSerializer().serializeToString(
                      null === (v = o.current) || void 0 === v ? void 0 : v.contentDocument
                    );
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(h)))
                    )
                  );
                }
            },
            [s, n]
          ),
          (0, d.jsxs)('div', {
            style: { visibility: 'hidden', height: 0, width: 0, overflow: 'hidden' },
            children: [
              (0, d.jsx)('object', {
                style: { opacity: 1 },
                ref: o,
                id: 'svg',
                data: '/icons/tokens/'.concat(t.toLowerCase(), '.svg'),
                onLoad: function () {
                  return l(!1);
                },
              }),
              n && (0, d.jsx)(g, { ref: i }),
            ],
          })
        );
      }
      var g = (0, c.forwardRef)(function (e, t) {
        var r = e.symbol;
        return (0, d.jsxs)('svg', {
          style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
          ref: t,
          id: 'Group_30952',
          width: '256',
          height: '256',
          viewBox: '0 0 256 256',
          children: [
            (0, d.jsxs)('defs', {
              id: 'defs10',
              children: [
                (0, d.jsxs)('linearGradient', {
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
                (0, d.jsx)('linearGradient', {
                  id: 'linear-gradient-2',
                  x1: '.907',
                  x2: '.163',
                  y1: '.227',
                  y2: '.853',
                }),
              ],
            }),
            (0, d.jsxs)('g', {
              id: 'Group_29109',
              children: [
                (0, d.jsx)('path', {
                  id: 'Subtraction_108',
                  fill: 'url(#linear-gradient)',
                  d: 'M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z',
                }),
                r &&
                  (0, d.jsx)('image', {
                    x: '25',
                    y: '25',
                    href: '/icons/tokens/'.concat(r.toLowerCase(), '.svg'),
                    width: '206',
                    height: '206',
                  }),
              ],
            }),
          ],
        });
      });
      function w(e) {
        var t = e.symbol,
          r = e.aToken,
          n = (0, i.Z)(e, m),
          o = (0, c.useState)(t.toLowerCase()),
          s = o[0],
          l = o[1];
        return (
          (0, c.useEffect)(
            function () {
              l(t.toLowerCase());
            },
            [t]
          ),
          (0, d.jsx)(
            a.Z,
            b(
              b({}, n),
              {},
              {
                sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
                children: r
                  ? (0, d.jsx)(g, { symbol: s })
                  : (0, d.jsx)('img', {
                      src: '/icons/tokens/'.concat(s, '.svg'),
                      onError: function () {
                        return l('default');
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
          r = e.logoURI,
          n = (0, i.Z)(e, p),
          o = (0, c.useState)(t.toLowerCase()),
          s = o[0],
          l = o[1];
        return (0, d.jsx)(
          a.Z,
          b(
            b({}, n),
            {},
            {
              sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
              children: (0, d.jsx)(u.Z, {
                children: (0, d.jsx)('img', {
                  src: 'default' !== s && r ? r : '/icons/tokens/default.svg',
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
      function j(e) {
        var t = e.symbols,
          r = e.badgeSymbol,
          n = (0, i.Z)(e, f);
        return r
          ? (0, d.jsx)(l.Z, {
              badgeContent: (0, d.jsx)(w, {
                symbol: r,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: t.map(function (e, t) {
                return (0, c.createElement)(
                  w,
                  b(
                    b({}, n),
                    {},
                    { key: e, symbol: e, sx: b({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, n.sx) }
                  )
                );
              }),
            })
          : (0, d.jsx)(s.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: t.map(function (e, t) {
                return (0, c.createElement)(
                  w,
                  b(
                    b({}, n),
                    {},
                    { key: e, symbol: e, sx: b({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, n.sx) }
                  )
                );
              }),
            });
      }
      function O(e) {
        var t = e.symbol,
          r = (0, i.Z)(e, v),
          o = t.split('_');
        if (o.length > 1) {
          var a = (0, n.Z)(o),
            s = a[0],
            l = a.slice(1);
          return (0, d.jsx)(j, b(b({}, r), {}, { symbols: l, badgeSymbol: '/pools/' + s }));
        }
        return (0, d.jsx)(w, b({ symbol: t }, r));
      }
      g.displayName = 'ATokenIcon';
    },
    50060: function (e, t, r) {
      r.d(t, {
        P: function () {
          return y;
        },
      });
      var n = r(80854),
        o = r(1279),
        i = r(81206),
        a = r(82403),
        s = r(70794),
        l = r(3062),
        c = r(79850),
        u = r(47892),
        d = r(59499),
        m = r(99673),
        p = r(52251),
        f = r(35258);
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var h = function (e, t, r) {
          var n = (0, f.z)().poolTokensBalanceService;
          return (0, m.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? v(Object(r), !0).forEach(function (t) {
                        (0, d.Z)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                      : v(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                }
                return e;
              })(
                {
                  queryKey: p.B.poolTokens(t, e),
                  queryFn: function () {
                    return n.getPoolTokensBalances(e, t);
                  },
                  enabled: !!t,
                  refetchInterval: p.g,
                },
                r
              );
            }),
          });
        },
        b = function (e) {
          var t = (0, l.Y)(function (e) {
              return e.account;
            }),
            r = h(e, t),
            d = (0, u.T)(e),
            m =
              r.some(function (e) {
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
                  r = e.balances,
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
                  walletBalances: (null !== r && void 0 !== r ? r : []).reduce(function (e, t) {
                    var r = u.find(function (e) {
                      var r;
                      return t.address === n.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (r = c.m5[l.chainId].wrappedBaseAssetSymbol) || void 0 === r
                              ? void 0
                              : r.toLowerCase())
                        : e.underlyingAsset.toLowerCase() === t.address;
                    });
                    return (
                      '0' !== t.amount && (m = !1),
                      r &&
                        (e[t.address] = {
                          amount: (0, o.Fv)(t.amount, r.decimals),
                          amountUSD: (0, i.Z)({
                            amount: new s.O(t.amount),
                            currencyDecimals: r.decimals,
                            priceInMarketReferenceCurrency: r.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: d.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, o.Fv)(
                              d.marketReferenceCurrencyPriceInUsd,
                              a.$3
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
                balances: null === (u = r[l]) || void 0 === u ? void 0 : u.data,
                marketData: e[l],
              });
            }),
            isLoading: m,
          };
        },
        y = function (e) {
          var t = b([e]),
            r = t.walletBalances,
            n = t.isLoading;
          return {
            walletBalances: r[0].walletBalances,
            hasEmptyWallet: r[0].hasEmptyWallet,
            loading: n,
          };
        };
    },
    83618: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(14666),
        o = r(28811),
        i = r(2937),
        a = r(14882);
      function s(e) {
        return (0, n.Z)(e) || (0, o.Z)(e) || (0, i.Z)(e) || (0, a.Z)();
      }
    },
    25043: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(67294),
        o = Object.defineProperty,
        i = (e, t, r) => (
          ((e, t, r) => {
            t in e
              ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
          })(e, 'symbol' != typeof t ? t + '' : t, r),
          r
        );
      const a = (e, t) =>
          typeof getComputedStyle < 'u'
            ? getComputedStyle(e, null).getPropertyValue(t)
            : e.style.getPropertyValue(t),
        s = (e) => a(e, 'overflow') + a(e, 'overflow-y') + a(e, 'overflow-x');
      class l extends n.Component {
        constructor(e) {
          super(e),
            i(this, 'elementObserver'),
            i(this, 'wrapper'),
            i(this, 'lazyLoadHandler', (e) => {
              var t, r;
              const { onContentVisible: n } = this.props,
                [o] = e,
                { isIntersecting: i } = o;
              if (i) {
                this.setState({ visible: !0 }, () => {
                  n && n();
                });
                const e = null == (t = this.wrapper) ? void 0 : t.current;
                e &&
                  e instanceof HTMLElement &&
                  (null == (r = this.elementObserver) || r.unobserve(e));
              }
            }),
            (this.elementObserver = null),
            (this.wrapper = n.createRef()),
            (this.state = { visible: !1 });
        }
        componentDidMount() {
          var e;
          this.getEventNode();
          const { offset: t, threshold: r } = this.props,
            n = { rootMargin: 'number' == typeof t ? `${t}px` : t || '0px', threshold: r || 0 };
          this.elementObserver = new IntersectionObserver(this.lazyLoadHandler, n);
          const o = null == (e = this.wrapper) ? void 0 : e.current;
          o instanceof HTMLElement && this.elementObserver.observe(o);
        }
        shouldComponentUpdate(e, t) {
          return t.visible;
        }
        componentWillUnmount() {
          var e, t;
          const r = null == (e = this.wrapper) ? void 0 : e.current;
          r && r instanceof HTMLElement && (null == (t = this.elementObserver) || t.unobserve(r));
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
          const { children: e, className: t, height: r, width: o, elementType: i } = this.props,
            { visible: a } = this.state,
            s = { height: r, width: o },
            l = `LazyLoad${a ? ' is-visible' : ''}${t ? ` ${t}` : ''}`;
          return (0, n.createElement)(
            i || 'div',
            { className: l, style: s, ref: this.wrapper },
            a && n.Children.only(e)
          );
        }
      }
      i(l, 'defaultProps', {
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
