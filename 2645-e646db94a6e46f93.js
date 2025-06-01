'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2645],
  {
    3971: function (e, t, r) {
      r.d(t, {
        V: function () {
          return b;
        },
      });
      var n = r(57499),
        o = r(2734),
        i = r(61730),
        s = r(80822),
        a = r(15861),
        l = r(69417),
        c = r(3062),
        u = r(12316),
        d = r(21489),
        p = r(38577),
        x = r(85893),
        b = function (e) {
          var t = e.pageTitle,
            r = e.withMarketSwitcher,
            b = e.withMigrateButton,
            f = (0, c.Y)(function (e) {
              return (0, u.lY)(e);
            }),
            h = (0, o.Z)(),
            m = (0, i.Z)(h.breakpoints.up('lg')),
            y = (0, i.Z)(h.breakpoints.down('xsm'));
          return (0, x.jsxs)(s.Z, {
            sx: {
              display: 'flex',
              alignItems: { xs: 'flex-start', xsm: 'center' },
              mb: t ? 4 : 0,
              flexDirection: { xs: 'column', xsm: 'row' },
            },
            children: [
              t &&
                (y || !r) &&
                (0, x.jsx)(s.Z, {
                  sx: { display: 'flex', alignItems: 'flex-start' },
                  children: (0, x.jsx)(a.Z, {
                    variant: y ? 'h2' : m ? 'display1' : 'h1',
                    sx: {
                      color: r ? 'text.muted' : 'text.white',
                      mr: { xs: 5, xsm: 3 },
                      mb: { xs: 1, xsm: 0 },
                    },
                    children: t,
                  }),
                }),
              (0, x.jsxs)(s.Z, {
                sx: { display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', mb: t ? 0 : 4 },
                children: [
                  r && (0, x.jsx)(d.tF, {}),
                  f &&
                    b &&
                    (0, x.jsx)(p.rU, {
                      href: p.Z6.migrationTool,
                      sx: { mt: { xs: 2, xsm: 0 } },
                      children: (0, x.jsx)(l.Z, {
                        variant: 'gradient',
                        size: 'small',
                        children: (0, x.jsx)(n.cC, { id: 'q/51mF' }),
                      }),
                    }),
                ],
              }),
            ],
          });
        };
    },
    33329: function (e, t, r) {
      r.d(t, {
        f: function () {
          return u;
        },
      });
      var n = r(59499),
        o = r(80822),
        i = r(65582),
        s = r(3971),
        a = r(85893);
      function l(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var u = function (e) {
        var t = e.pageTitle,
          r = e.titleComponent,
          n = e.withMarketSwitcher,
          l = e.withMigrateButton,
          u = e.bridge,
          d = e.children,
          p = e.containerProps,
          x = void 0 === p ? {} : p;
        return (0, a.jsx)(o.Z, {
          sx: {
            bgcolor: 'background.header',
            pt: { xs: 10, md: 12 },
            pb: { xs: 18, md: 20, lg: '94px', xl: '92px', xxl: '96px' },
            color: '#F1F1F3',
          },
          children: (0, a.jsx)(
            i.Z,
            c(
              c({}, x),
              {},
              {
                sx: c(c({}, x.sx), {}, { pb: 0 }),
                children: (0, a.jsxs)(o.Z, {
                  sx: { px: { xs: 4, xsm: 6 } },
                  children: [
                    !r &&
                      (0, a.jsx)(s.V, {
                        pageTitle: t,
                        withMarketSwitcher: n,
                        withMigrateButton: l,
                        bridge: u,
                      }),
                    r && r,
                    (0, a.jsx)(o.Z, {
                      sx: {
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: { xs: 3, xsm: 8 },
                        flexWrap: 'wrap',
                        width: '100%',
                      },
                      children: d,
                    }),
                  ],
                }),
              }
            )
          ),
        });
      };
    },
    24957: function (e, t, r) {
      r.d(t, {
        h: function () {
          return i;
        },
      });
      var n = r(80822),
        o = r(85893),
        i = function (e) {
          var t = e.isRow,
            r = e.children,
            i = e.minWidth,
            s = e.maxWidth,
            a = e.align,
            l = void 0 === a ? 'center' : a,
            c = e.overFlow,
            u = void 0 === c ? 'visible' : c,
            d = e.flex,
            p = void 0 === d ? 1 : d,
            x = e.p,
            b = void 0 === x ? 1 : x;
          return (0, o.jsx)(n.Z, {
            sx: {
              display: 'flex',
              flexDirection: t ? 'row' : 'column',
              alignItems: t
                ? 'center'
                : 'left' === l
                  ? 'flex-start'
                  : 'right' === l
                    ? 'flex-end'
                    : l,
              justifyContent: t ? 'flex-start' : 'flex-end',
              flex: p,
              minWidth: i || '70px',
              maxWidth: s,
              overflow: u,
              padding: b,
            },
            children: r,
          });
        };
    },
    25135: function (e, t, r) {
      r.d(t, {
        H: function () {
          return u;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(80822),
        s = r(85893),
        a = ['children', 'minHeight', 'px', 'button'];
      function l(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var u = function (e) {
        var t = e.children,
          r = e.minHeight,
          n = void 0 === r ? 71 : r,
          l = e.px,
          u = void 0 === l ? 4 : l,
          d = e.button,
          p = (0, o.Z)(e, a);
        return (0, s.jsx)(
          i.Z,
          c(
            c({}, p),
            {},
            {
              sx: c(
                c(
                  {
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: n,
                    px: u,
                    '&:not(:last-child)': { borderBottom: '1px solid', borderColor: 'divider' },
                  },
                  d ? { '&:hover': { bgcolor: 'action.hover' } } : {}
                ),
                p.sx
              ),
              children: t,
            }
          )
        );
      };
    },
    1924: function (e, t, r) {
      r.d(t, {
        l: function () {
          return f;
        },
      });
      var n = r(59499),
        o = r(57499),
        i = r(90629),
        s = r(80822),
        a = r(15861),
        l = r(67294),
        c = r(3062),
        u = r(65361),
        d = r(32250),
        p = r(85893);
      function x(e, t) {
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
            ? x(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : x(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var f = function (e) {
        var t = e.children,
          r = e.localStorageName,
          n = e.titleComponent,
          x = e.subTitleComponent,
          f = e.subChildrenComponent,
          h = e.topInfo,
          m = e.withTopMargin,
          y = e.noData,
          v = e.wrapperSx,
          g = e.tooltipOpen,
          j = e.paperSx,
          w = (0, l.useState)(!!r && 'true' === localStorage.getItem(r)),
          O = w[0],
          I = w[1],
          D = (0, c.Y)(function (e) {
            return e.trackEvent;
          }),
          S = O && !y;
        return (0, p.jsxs)(i.Z, {
          sx: b({ mt: m ? 4 : 0, border: 1, borderColor: 'divider' }, j),
          children: [
            (0, p.jsxs)(s.Z, {
              sx: b(
                {
                  px: { xs: 4, xsm: 6 },
                  py: { xs: 3.5, xsm: 4 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
                v
              ),
              children: [
                (0, p.jsxs)(s.Z, {
                  sx: {
                    width: '100%',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', xsm: 'center' },
                    py: '3.6px',
                    flexDirection: { xs: 'column', xsm: 'row' },
                  },
                  children: [n, x],
                }),
                !!r &&
                  !y &&
                  (0, p.jsxs)(s.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      minHeight: '28px',
                      pl: 3,
                      span: {
                        width: '14px',
                        height: '2px',
                        bgcolor: 'text.secondary',
                        position: 'relative',
                        ml: 1,
                        '&:after': {
                          content: "''",
                          position: 'absolute',
                          width: '14px',
                          height: '2px',
                          bgcolor: 'text.secondary',
                          transition: 'all 0.2s ease',
                          transform: S ? 'rotate(90deg)' : 'rotate(0)',
                          opacity: S ? 1 : 0,
                        },
                      },
                    },
                    onClick: function () {
                      !(function () {
                        if (O)
                          switch (r) {
                            case 'borrowAssetsDashboardTableCollapse':
                              D(u.h1.TILE_VISBILITY, {
                                visibility: 'Show',
                                type: 'Available Borrow Assets',
                              });
                              break;
                            case 'borrowedAssetsDashboardTableCollapse':
                              D(u.h1.TILE_VISBILITY, {
                                visibility: 'Show',
                                type: 'Borrowed Assets',
                              });
                              break;
                            case 'supplyAssetsDashboardTableCollapse':
                              D(u.h1.TILE_VISBILITY, {
                                visibility: 'Show',
                                type: 'Available Supply Assets',
                              });
                              break;
                            case 'suppliedAssetsDashboardTableCollapse':
                              D(u.h1.TILE_VISBILITY, {
                                visibility: 'Show',
                                type: 'Supplied Assets',
                              });
                            default:
                          }
                        else
                          switch (r) {
                            case 'borrowAssetsDashboardTableCollapse':
                              D(u.h1.TILE_VISBILITY, {
                                visibility: 'Hidden',
                                type: 'Available Borrow Assets',
                              });
                              break;
                            case 'borrowedAssetsDashboardTableCollapse':
                              D(u.h1.TILE_VISBILITY, {
                                visibility: 'Hidden',
                                type: 'Borrowed Assets',
                              });
                              break;
                            case 'supplyAssetsDashboardTableCollapse':
                              D(u.h1.TILE_VISBILITY, {
                                visibility: 'Hidden',
                                type: 'Available Supply Assets',
                              });
                              break;
                            case 'suppliedAssetsDashboardTableCollapse':
                              D(u.h1.TILE_VISBILITY, {
                                visibility: 'Hidden',
                                type: 'Supplied Assets',
                              });
                            default:
                          }
                      })(),
                        r && !y && (0, d.e)(O, I, r);
                    },
                    children: [
                      (0, p.jsx)(a.Z, {
                        variant: 'buttonM',
                        color: 'text.secondary',
                        children: S
                          ? (0, p.jsx)(o.cC, { id: '8vETh9' })
                          : (0, p.jsx)(o.cC, { id: 'vLyv1R' }),
                      }),
                      (0, p.jsx)('span', {}),
                    ],
                  }),
              ],
            }),
            h &&
              (0, p.jsx)(s.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  px: { xs: 4, xsm: 6 },
                  pb: { xs: S && !y ? 6 : 2, xsm: S && !y ? 6 : 0 },
                  overflowX: g ? 'hidden' : 'auto',
                },
                children: h,
              }),
            f && !S && (0, p.jsx)(s.Z, { sx: { marginBottom: { xs: 2, xsm: 0 } }, children: f }),
            (0, p.jsx)(s.Z, { sx: { display: S ? 'none' : 'block' }, children: t }),
          ],
        });
      };
    },
    32867: function (e, t, r) {
      r.d(t, {
        B: function () {
          return b;
        },
        J: function () {
          return p;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(1279),
        s = r(15861),
        a = r(85893),
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
        p = function (e) {
          var t = e.value,
            r = e.visibleDecimals,
            n = void 0 === r ? 2 : r,
            o = e.roundDown,
            s = e.compactThreshold,
            a = (0, i.hE)(t),
            l = a.toFixed(0).length;
          s && Number(t) <= s && (l = 0);
          var c = Math.min(Math.floor(l ? (l - 1) / 3 : 0), d.length - 1),
            u = d[c],
            p = (0, i.pV)(a, 3 * c).toNumber();
          return (
            o && (p = Math.trunc(Number(p) * Math.pow(10, n)) / Math.pow(10, n)),
            {
              prefix: new Intl.NumberFormat('en-US', {
                maximumFractionDigits: n,
                minimumFractionDigits: n,
              }).format(p),
              postfix: u,
            }
          );
        };
      function x(e) {
        var t = e.value,
          r = e.visibleDecimals,
          n = e.roundDown,
          o = p({ value: t, visibleDecimals: r, roundDown: n }),
          i = o.prefix,
          s = o.postfix;
        return (0, a.jsxs)(a.Fragment, { children: [i, s] });
      }
      function b(e) {
        var t = e.value,
          r = e.symbol,
          n = e.visibleDecimals,
          i = e.compact,
          c = e.percent,
          d = e.symbolsVariant,
          p = e.symbolsColor,
          b = e.roundDown,
          f = e.compactThreshold,
          h = (0, o.Z)(e, l),
          m = c ? 100 * Number(t) : Number(t),
          y = null !== n && void 0 !== n ? n : 0;
        0 === m ? (y = 0) : void 0 === n && (y = m >= 1 || c || 'USD' === r ? 2 : 7);
        var v = Math.pow(10, -y),
          g = 0 !== m && Math.abs(m) < Math.abs(v),
          j = g ? v : m,
          w = !1 !== i && (i || m > 99999);
        return (
          b && !w && (j = Math.trunc(Number(j) * Math.pow(10, y)) / Math.pow(10, y)),
          (0, a.jsxs)(
            s.Z,
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
                    (0, a.jsx)(s.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || h.variant,
                      color: p || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    !c &&
                    (0, a.jsx)(s.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || h.variant,
                      color: p || 'text.secondary',
                      children: '$',
                    }),
                  w
                    ? (0, a.jsx)(x, {
                        value: j,
                        visibleDecimals: y,
                        roundDown: b,
                        compactThreshold: f,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: y,
                        minimumFractionDigits: y,
                      }).format(j),
                  c &&
                    (0, a.jsx)(s.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || h.variant,
                      color: p || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    'undefined' !== typeof r &&
                    (0, a.jsx)(s.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || h.variant,
                      color: p || 'text.secondary',
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
          return j;
        },
      });
      var n = r(83618),
        o = r(59499),
        i = r(4730),
        s = r(67564),
        a = r(80822),
        l = r(86653),
        c = r(67294),
        u = r(25043),
        d = r(85893),
        p = ['symbol', 'aToken'],
        x = ['symbol', 'logoURI'],
        b = ['symbols', 'badgeSymbol'],
        f = ['symbol'];
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
      function m(e) {
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
          s = (0, c.useState)(!0),
          a = s[0],
          l = s[1];
        return (
          (0, c.useEffect)(
            function () {
              var e;
              if (!a && o.current && null !== (e = o.current) && void 0 !== e && e.contentDocument)
                if (n) {
                  var t,
                    s,
                    l,
                    c,
                    u =
                      null === (t = o.current) ||
                      void 0 === t ||
                      null === (s = t.contentDocument) ||
                      void 0 === s ||
                      null === (l = s.childNodes) ||
                      void 0 === l
                        ? void 0
                        : l[0],
                    d = u.getAttribute('width'),
                    p = u.getAttribute('height'),
                    x = u.getAttribute('viewBox');
                  u.setAttribute('x', 25),
                    u.setAttribute('width', 206),
                    u.setAttribute('y', 25),
                    u.setAttribute('height', 206),
                    x || u.setAttribute('viewBox', '0 0 '.concat(d, ' ').concat(p)),
                    null === (c = i.current) || void 0 === c || c.appendChild(u);
                  var b = new XMLSerializer().serializeToString(i.current);
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(b)))
                    )
                  );
                } else {
                  var f,
                    h = new XMLSerializer().serializeToString(
                      null === (f = o.current) || void 0 === f ? void 0 : f.contentDocument
                    );
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(h)))
                    )
                  );
                }
            },
            [a, n]
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
              n && (0, d.jsx)(v, { ref: i }),
            ],
          })
        );
      }
      var v = (0, c.forwardRef)(function (e, t) {
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
      function g(e) {
        var t = e.symbol,
          r = e.aToken,
          n = (0, i.Z)(e, p),
          o = (0, c.useState)(t.toLowerCase()),
          a = o[0],
          l = o[1];
        return (
          (0, c.useEffect)(
            function () {
              l(t.toLowerCase());
            },
            [t]
          ),
          (0, d.jsx)(
            s.Z,
            m(
              m({}, n),
              {},
              {
                sx: m({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
                children: r
                  ? (0, d.jsx)(v, { symbol: a })
                  : (0, d.jsx)('img', {
                      src: '/icons/tokens/'.concat(a, '.svg'),
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
      function j(e) {
        var t = e.symbol,
          r = e.logoURI,
          n = (0, i.Z)(e, x),
          o = (0, c.useState)(t.toLowerCase()),
          a = o[0],
          l = o[1];
        return (0, d.jsx)(
          s.Z,
          m(
            m({}, n),
            {},
            {
              sx: m({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
              children: (0, d.jsx)(u.Z, {
                children: (0, d.jsx)('img', {
                  src: 'default' !== a && r ? r : '/icons/tokens/default.svg',
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
      function w(e) {
        var t = e.symbols,
          r = e.badgeSymbol,
          n = (0, i.Z)(e, b);
        return r
          ? (0, d.jsx)(l.Z, {
              badgeContent: (0, d.jsx)(g, {
                symbol: r,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: t.map(function (e, t) {
                return (0, c.createElement)(
                  g,
                  m(
                    m({}, n),
                    {},
                    { key: e, symbol: e, sx: m({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, n.sx) }
                  )
                );
              }),
            })
          : (0, d.jsx)(a.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: t.map(function (e, t) {
                return (0, c.createElement)(
                  g,
                  m(
                    m({}, n),
                    {},
                    { key: e, symbol: e, sx: m({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, n.sx) }
                  )
                );
              }),
            });
      }
      function O(e) {
        var t = e.symbol,
          r = (0, i.Z)(e, f),
          o = t.split('_');
        if (o.length > 1) {
          var s = (0, n.Z)(o),
            a = s[0],
            l = s.slice(1);
          return (0, d.jsx)(w, m(m({}, r), {}, { symbols: l, badgeSymbol: '/pools/' + a }));
        }
        return (0, d.jsx)(g, m({ symbol: t }, r));
      }
      v.displayName = 'ATokenIcon';
    },
    32250: function (e, t, r) {
      r.d(t, {
        e: function () {
          return n;
        },
      });
      var n = function (e, t, r) {
        e ? (localStorage.setItem(r, 'false'), t(!1)) : (localStorage.setItem(r, 'true'), t(!0));
      };
    },
  },
]);
