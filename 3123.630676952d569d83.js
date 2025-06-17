'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3123, 7015, 3587, 7929, 6790, 6546, 1793, 8146],
  {
    58941: function (e, t, r) {
      r.d(t, {
        o: function () {
          return x;
        },
      });
      var n = r(59499),
        o = r(4730),
        a = r(57499),
        i = r(1279),
        s = r(2734),
        c = r(80822),
        l = r(15861),
        u = r(69417),
        d = r(70794),
        p = r(32867),
        f = r(85893),
        m = ['value', 'onInfoClick'];
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var x = function (e) {
        var t = e.value,
          r = e.onInfoClick,
          n = (0, o.Z)(e, m),
          v = (0, s.Z)().palette,
          x = Number((0, i.hE)(t).toFixed(2, d.O.ROUND_DOWN)),
          j = '';
        return (
          (j = x >= 3 ? v.success.main : x < 1.1 ? v.error.main : v.warning.main),
          (0, f.jsxs)(c.Z, {
            sx: {
              display: 'inline-flex',
              alignItems: { xs: 'flex-start', xsm: 'center' },
              flexDirection: { xs: 'column', xsm: 'row' },
            },
            'data-cy': 'HealthFactorTopPannel',
            children: [
              '-1' === t
                ? (0, f.jsx)(l.Z, {
                    variant: 'secondary14',
                    color: v.success.main,
                    children: '\u221e',
                  })
                : (0, f.jsx)(
                    p.B,
                    b({ value: x, sx: b({ color: j }, n.sx), visibleDecimals: 2, compact: !0 }, n)
                  ),
              r &&
                (0, f.jsx)(u.Z, {
                  onClick: r,
                  variant: 'surface',
                  size: 'small',
                  sx: { minWidth: 'unset', ml: { xs: 0, xsm: 2 } },
                  children: (0, f.jsx)(a.cC, { id: 'cLo09S' }),
                }),
            ],
          })
        );
      };
    },
    20929: function (e, t, r) {
      r.d(t, {
        S: function () {
          return a;
        },
      });
      var n = r(57499),
        o = r(85893);
      function a(e) {
        var t = (function (e) {
            return {
              d: Math.floor(e / 86400),
              h: Math.floor((e % 86400) / 3600),
              m: Math.floor((e % 3600) / 60),
              s: Math.floor(e % 60),
            };
          })(e.seconds),
          r = t.d,
          a = t.h,
          i = t.m,
          s = t.s;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            0 !== r &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'HkEDbS', values: { d: r } }),
              }),
            0 !== a &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'ntyFSE', values: { h: a } }),
              }),
            0 !== i &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'Nh9DAo', values: { m: i } }),
              }),
            0 !== s &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'jaKbwW', values: { s: s } }),
              }),
          ],
        });
      }
    },
    49212: function (e, t, r) {
      r.d(t, {
        G: function () {
          return j;
        },
      });
      var n = r(59499),
        o = r(4730),
        a = r(38264),
        i = r(80822),
        s = r(15861),
        c = r(93946),
        l = r(53219),
        u = r(67294),
        d = r(3062),
        p = r(2127),
        f = r(85893),
        m = ['sx'],
        v = [
          'text',
          'icon',
          'iconSize',
          'iconColor',
          'iconMargin',
          'children',
          'textColor',
          'wrapperProps',
          'event',
          'open',
          'setOpen',
        ];
      function b(e, t) {
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : b(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var j = function (e) {
        var t = e.text,
          r = e.icon,
          n = e.iconSize,
          b = void 0 === n ? 14 : n,
          j = e.iconColor,
          h = e.iconMargin,
          y = e.children,
          g = e.textColor,
          O = e.wrapperProps,
          w = (O = void 0 === O ? {} : O).sx,
          k = (0, o.Z)(O, m),
          P = e.event,
          T = e.open,
          S = void 0 !== T && T,
          D = e.setOpen,
          C = (0, o.Z)(e, v),
          Z = (0, u.useState)(S),
          E = Z[0],
          A = Z[1],
          M = (0, d.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, f.jsxs)(
          i.Z,
          x(
            x({ sx: x({ display: 'flex', alignItems: 'center' }, w) }, k),
            {},
            {
              children: [
                t && (0, f.jsx)(s.Z, x(x({}, C), {}, { color: g, children: t })),
                (0, f.jsx)(p.a, {
                  tooltipContent: (0, f.jsx)(f.Fragment, { children: y }),
                  open: E,
                  setOpen: function () {
                    D && D(!E), A(!E);
                  },
                  children: (0, f.jsx)(c.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: b,
                      height: b,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: h || 0.5,
                    },
                    onClick: function () {
                      P && M(P.eventName, x({}, P.eventParams));
                    },
                    children: (0, f.jsx)(l.Z, {
                      sx: {
                        fontSize: b,
                        color: j || (E ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: j || 'info.main' },
                      },
                      children: r || (0, f.jsx)(a.Z, {}),
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
    },
    215: function (e, t, r) {
      r.d(t, {
        o: function () {
          return u;
        },
      });
      var n = r(59499),
        o = r(4730),
        a = r(53219),
        i = r(85893),
        s = ['sx'];
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
      function l(e) {
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
      var u = function (e) {
        var t = e.sx,
          r = (0, o.Z)(e, s);
        return (0, i.jsxs)(
          a.Z,
          l(
            l(
              {
                sx: l({ fill: 'none', stroke: '#A5A8B6' }, t),
                viewBox: '0 0 21 19',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-label': 'Wallet',
              },
              r
            ),
            {},
            {
              children: [
                (0, i.jsxs)('g', {
                  clipPath: 'url(#clip0_3719_3323)',
                  strokeWidth: '2',
                  children: [
                    (0, i.jsx)('path', {
                      d: 'M17.3203 17.398H3.32031C2.78988 17.398 2.28117 17.1872 1.9061 16.8122C1.53103 16.4371 1.32031 15.9284 1.32031 15.3979V6.39795C1.32031 5.86752 1.53103 5.35881 1.9061 4.98374C2.28117 4.60866 2.78988 4.39795 3.32031 4.39795H17.3203C17.8507 4.39795 18.3595 4.60866 18.7345 4.98374C19.1096 5.35881 19.3203 5.86752 19.3203 6.39795V15.3979C19.3203 15.9284 19.1096 16.4371 18.7345 16.8122C18.3595 17.1872 17.8507 17.398 17.3203 17.398Z',
                    }),
                    (0, i.jsx)('path', {
                      d: 'M14.8203 11.3979C14.6877 11.3979 14.5605 11.3453 14.4668 11.2515C14.373 11.1577 14.3203 11.0306 14.3203 10.8979C14.3203 10.7653 14.373 10.6382 14.4668 10.5444C14.5605 10.4506 14.6877 10.3979 14.8203 10.3979C14.9529 10.3979 15.0801 10.4506 15.1739 10.5444C15.2676 10.6382 15.3203 10.7653 15.3203 10.8979C15.3203 11.0306 15.2676 11.1577 15.1739 11.2515C15.0801 11.3453 14.9529 11.3979 14.8203 11.3979Z',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    (0, i.jsx)('path', {
                      d: 'M16.3203 4.39793V2.99993C16.3202 2.69343 16.2497 2.39106 16.1142 2.11615C15.9787 1.84124 15.7818 1.60116 15.5387 1.41444C15.2956 1.22773 15.0129 1.09937 14.7124 1.03929C14.4118 0.979209 14.1015 0.989009 13.8053 1.06793L2.80531 4.00093C2.37937 4.11444 2.00285 4.36549 1.7343 4.71506C1.46575 5.06462 1.32021 5.49312 1.32031 5.93393V6.39793',
                    }),
                  ],
                }),
                (0, i.jsx)('defs', {
                  children: (0, i.jsx)('clipPath', {
                    id: 'clip0_3719_3323',
                    children: (0, i.jsx)('rect', {
                      width: '20',
                      height: '19',
                      fill: 'white',
                      transform: 'translate(0.320312)',
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
    },
    64311: function (e, t, r) {
      r.d(t, {
        Ch: function () {
          return x;
        },
        a9: function () {
          return h;
        },
        r$: function () {
          return j;
        },
      });
      var n = r(59499),
        o = r(57499),
        a = r(38264),
        i = r(53219),
        s = r(2734),
        c = r(80822),
        l = r(15861),
        u = r(23795),
        d = r(2127),
        p = r(85893);
      function f(e, t) {
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
            ? f(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var v = {
          borderRadius: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          p: '2px',
          mt: '2px',
          cursor: 'pointer',
          '&:hover': { opacity: 0.6 },
        },
        b = function (e) {
          var t = e.color;
          return (0, p.jsx)(i.Z, {
            sx: { ml: '3px', color: t || 'text.muted', fontSize: '14px' },
            children: (0, p.jsx)(a.Z, {}),
          });
        },
        x = function (e) {
          var t = e.typographyProps,
            r = (0, s.Z)(),
            n = m(
              {
                border: '1px solid '.concat(r.palette.warning.main),
                color: r.palette.warning.main,
              },
              v
            );
          return (0, p.jsx)(d.a, {
            withoutHover: !0,
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'bXr0ee' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: n,
              children: [
                (0, p.jsx)(
                  l.Z,
                  m(
                    m(
                      {
                        variant: 'secondary12',
                        sx: { lineHeight: '0.75rem' },
                        color: r.palette.warning.main,
                      },
                      t
                    ),
                    {},
                    { children: (0, p.jsx)(o.cC, { id: 'KYAjf3' }) }
                  )
                ),
                (0, p.jsx)(b, { color: r.palette.warning.main }),
              ],
            }),
          });
        },
        j = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: v,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(b, {}),
              ],
            }),
          });
        },
        h = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: v,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(b, {}),
              ],
            }),
          });
        },
        y = function (e) {
          var t = e.content;
          return (0, p.jsxs)(c.Z, {
            children: [
              (0, p.jsx)(c.Z, { sx: { mb: 4 }, children: t }),
              (0, p.jsx)(l.Z, {
                variant: 'subheader2',
                color: 'text.secondary',
                children: (0, p.jsx)(o.cC, {
                  id: 'lfEjIE',
                  components: {
                    0: (0, p.jsx)(u.Z, {
                      href: 'https://docs.aave.com/faq/aave-v3-features#isolation-mode',
                      fontWeight: 500,
                    }),
                  },
                }),
              }),
            ],
          });
        };
    },
    32867: function (e, t, r) {
      r.d(t, {
        B: function () {
          return m;
        },
        J: function () {
          return p;
        },
      });
      var n = r(59499),
        o = r(4730),
        a = r(1279),
        i = r(15861),
        s = r(85893),
        c = [
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
      function u(e) {
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
      var d = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'],
        p = function (e) {
          var t = e.value,
            r = e.visibleDecimals,
            n = void 0 === r ? 2 : r,
            o = e.roundDown,
            i = e.compactThreshold,
            s = (0, a.hE)(t),
            c = s.toFixed(0).length;
          i && Number(t) <= i && (c = 0);
          var l = Math.min(Math.floor(c ? (c - 1) / 3 : 0), d.length - 1),
            u = d[l],
            p = (0, a.pV)(s, 3 * l).toNumber();
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
      function f(e) {
        var t = e.value,
          r = e.visibleDecimals,
          n = e.roundDown,
          o = p({ value: t, visibleDecimals: r, roundDown: n }),
          a = o.prefix,
          i = o.postfix;
        return (0, s.jsxs)(s.Fragment, { children: [a, i] });
      }
      function m(e) {
        var t = e.value,
          r = e.symbol,
          n = e.visibleDecimals,
          a = e.compact,
          l = e.percent,
          d = e.symbolsVariant,
          p = e.symbolsColor,
          m = e.roundDown,
          v = e.compactThreshold,
          b = (0, o.Z)(e, c),
          x = l ? 100 * Number(t) : Number(t),
          j = null !== n && void 0 !== n ? n : 0;
        0 === x ? (j = 0) : void 0 === n && (j = x >= 1 || l || 'USD' === r ? 2 : 7);
        var h = Math.pow(10, -j),
          y = 0 !== x && Math.abs(x) < Math.abs(h),
          g = y ? h : x,
          O = !1 !== a && (a || x > 99999);
        return (
          m && !O && (g = Math.trunc(Number(g) * Math.pow(10, j)) / Math.pow(10, j)),
          (0, s.jsxs)(
            i.Z,
            u(
              u({}, b),
              {},
              {
                sx: u(
                  {
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                  },
                  b.sx
                ),
                noWrap: !0,
                children: [
                  y &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    !l &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: '$',
                    }),
                  O
                    ? (0, s.jsx)(f, {
                        value: g,
                        visibleDecimals: j,
                        roundDown: m,
                        compactThreshold: v,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: j,
                        minimumFractionDigits: j,
                      }).format(g),
                  l &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    'undefined' !== typeof r &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || b.variant,
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
    20986: function (e, t, r) {
      r.d(t, {
        X: function () {
          return d;
        },
      });
      var n = r(59499),
        o = r(4730),
        a = r(80822),
        i = r(15861),
        s = r(85893),
        c = ['caption', 'children', 'captionVariant', 'captionColor', 'align'];
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
      function u(e) {
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
      var d = function (e) {
        var t = e.caption,
          r = e.children,
          n = e.captionVariant,
          l = void 0 === n ? 'secondary16' : n,
          d = e.captionColor,
          p = e.align,
          f = void 0 === p ? 'center' : p,
          m = (0, o.Z)(e, c);
        return (0, s.jsxs)(
          a.Z,
          u(
            u({}, m),
            {},
            {
              sx: u({ display: 'flex', alignItems: f, justifyContent: 'space-between' }, m.sx),
              children: [
                t &&
                  (0, s.jsx)(i.Z, {
                    component: 'div',
                    variant: l,
                    color: d,
                    sx: { mr: 2 },
                    children: t,
                  }),
                r,
              ],
            }
          )
        );
      };
    },
    45640: function (e, t, r) {
      r.d(t, {
        Js: function () {
          return j;
        },
        T1: function () {
          return w;
        },
        UD: function () {
          return g;
        },
      });
      var n = r(83618),
        o = r(59499),
        a = r(4730),
        i = r(67564),
        s = r(80822),
        c = r(86653),
        l = r(67294),
        u = r(25043),
        d = r(85893),
        p = ['symbol', 'aToken', 'waToken'],
        f = ['symbol', 'logoURI'],
        m = ['symbols', 'badgeSymbol', 'aToken', 'waToken', 'aTokens', 'waTokens'],
        v = ['symbol', 'aToken', 'waToken', 'aTokens', 'waTokens'];
      function b(e, t) {
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : b(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function j(e) {
        var t = e.symbol,
          r = e.onImageGenerated,
          n = e.aToken,
          o = e.waToken,
          a = (0, l.useRef)(null),
          i = (0, l.useRef)(null),
          s = (0, l.useState)(!0),
          c = s[0],
          u = s[1];
        return (
          (0, l.useEffect)(
            function () {
              var e;
              if (!c && a.current && null !== (e = a.current) && void 0 !== e && e.contentDocument)
                if (n || o) {
                  var t,
                    s,
                    l,
                    u,
                    d =
                      null === (t = a.current) ||
                      void 0 === t ||
                      null === (s = t.contentDocument) ||
                      void 0 === s ||
                      null === (l = s.childNodes) ||
                      void 0 === l
                        ? void 0
                        : l[0],
                    p = d.getAttribute('width'),
                    f = d.getAttribute('height'),
                    m = d.getAttribute('viewBox');
                  d.setAttribute('x', 25),
                    d.setAttribute('width', 206),
                    d.setAttribute('y', 25),
                    d.setAttribute('height', 206),
                    m || d.setAttribute('viewBox', '0 0 '.concat(p, ' ').concat(f)),
                    null === (u = i.current) || void 0 === u || u.appendChild(d);
                  var v = new XMLSerializer().serializeToString(i.current);
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(v)))
                    )
                  );
                } else {
                  var b,
                    x = new XMLSerializer().serializeToString(
                      null === (b = a.current) || void 0 === b ? void 0 : b.contentDocument
                    );
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(x)))
                    )
                  );
                }
            },
            [c, n, o]
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
              (n || o) && (0, d.jsx)(h, { ref: i, waToken: o }),
            ],
          })
        );
      }
      var h = (0, l.forwardRef)(function (e, t) {
        var r = e.symbol,
          n = e.waToken;
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
                n
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
      function y(e) {
        var t = e.symbol,
          r = e.aToken,
          n = e.waToken,
          o = (0, a.Z)(e, p),
          s = (0, l.useState)(t.toLowerCase()),
          c = s[0],
          u = s[1];
        return (
          (0, l.useEffect)(
            function () {
              u(t.toLowerCase());
            },
            [t]
          ),
          (0, d.jsx)(
            i.Z,
            x(
              x({}, o),
              {},
              {
                sx: x({ display: 'flex', position: 'relative', borderRadius: '50%' }, o.sx),
                children:
                  r || n
                    ? (0, d.jsx)(h, { symbol: c, waToken: n })
                    : (0, d.jsx)('img', {
                        src: '/icons/tokens/'.concat(c, '.svg'),
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
      function g(e) {
        var t = e.symbol,
          r = e.logoURI,
          n = (0, a.Z)(e, f),
          o = (0, l.useState)(t.toLowerCase()),
          s = o[0],
          c = o[1];
        return (0, d.jsx)(
          i.Z,
          x(
            x({}, n),
            {},
            {
              sx: x({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
              children: (0, d.jsx)(u.Z, {
                children: (0, d.jsx)('img', {
                  src: 'default' !== s && r ? r : '/icons/tokens/default.svg',
                  width: '100%',
                  height: '100%',
                  alt: ''.concat(t, ' icon'),
                  onError: function () {
                    return c('default');
                  },
                }),
              }),
            }
          )
        );
      }
      function O(e) {
        var t = e.symbols,
          r = e.badgeSymbol,
          n = e.aToken,
          o = void 0 !== n && n,
          i = e.waToken,
          u = void 0 !== i && i,
          p = e.aTokens,
          f = e.waTokens,
          v = (0, a.Z)(e, m),
          b =
            p ||
            t.map(function (e, t) {
              return 0 === t && o;
            }),
          j =
            f ||
            t.map(function (e, t) {
              return 0 === t && u;
            });
        return r
          ? (0, d.jsx)(c.Z, {
              badgeContent: (0, d.jsx)(y, {
                symbol: r,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: t.map(function (e, t) {
                return (0, l.createElement)(
                  y,
                  x(
                    x({}, v),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: b[t],
                      waToken: j[t],
                      sx: x({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, v.sx),
                    }
                  )
                );
              }),
            })
          : (0, d.jsx)(s.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: t.map(function (e, t) {
                return (0, l.createElement)(
                  y,
                  x(
                    x({}, v),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: b[t],
                      waToken: j[t],
                      sx: x({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, v.sx),
                    }
                  )
                );
              }),
            });
      }
      function w(e) {
        var t = e.symbol,
          r = e.aToken,
          o = e.waToken,
          i = e.aTokens,
          s = e.waTokens,
          c = (0, a.Z)(e, v),
          l = t.split('_');
        if (l.length > 1) {
          if (l[0].startsWith('pools/')) {
            var u = (0, n.Z)(l),
              p = u[0],
              f = u.slice(1);
            return (0, d.jsx)(O, x(x({}, c), {}, { symbols: f, badgeSymbol: '/pools/' + p }));
          }
          return (0, d.jsx)(
            O,
            x(x({}, c), {}, { symbols: l, aToken: r, waToken: o, aTokens: i, waTokens: s })
          );
        }
        return (0, d.jsx)(y, x({ symbol: t, aToken: r, waToken: o }, c));
      }
      h.displayName = 'TokenRing';
    },
    35783: function (e, t, r) {
      r.d(t, {
        v: function () {
          return u;
        },
      });
      var n = r(59499),
        o = r(4730),
        a = r(21737),
        i = r(85893),
        s = ['children', 'sx'];
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
      function l(e) {
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
      var u = function (e) {
        var t = e.children,
          r = e.sx,
          n = (0, o.Z)(e, s),
          c = l({ mb: 6, alignItems: 'center', width: '100%' }, r);
        return (0, i.jsx)(a.Z, l(l({ sx: c }, n), {}, { children: t }));
      };
    },
    44880: function (e, t, r) {
      r.d(t, {
        R: function () {
          return b;
        },
      });
      var n = r(57499),
        o = r(75331),
        a = r(2734),
        i = r(80822),
        s = r(15861),
        c = r(69417),
        l = r(67294),
        u = r(215),
        d = r(32867),
        p = r(45640),
        f = r(72005),
        m = r(60386),
        v = r(85893),
        b = function (e) {
          var t = e.txHash,
            r = e.action,
            b = e.amount,
            x = e.symbol,
            j = e.collateral,
            h = e.rate,
            y = e.addToken,
            g = e.customAction,
            O = e.customText,
            w = (0, f.Z)().addERC20Token,
            k = (0, l.useState)(''),
            P = k[0],
            T = k[1],
            S = (0, a.Z)();
          return (0, v.jsx)(m.R, {
            txHash: t,
            children: (0, v.jsxs)(i.Z, {
              sx: {
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              },
              children: [
                r &&
                  b &&
                  x &&
                  (0, v.jsx)(s.Z, {
                    children: (0, v.jsx)(n.cC, {
                      id: 'wAOL+X',
                      values: { action: r, symbol: x },
                      components: {
                        0: (0, v.jsx)(d.B, {
                          value: Number(b),
                          compact: !0,
                          variant: 'secondary14',
                        }),
                      },
                    }),
                  }),
                g && (0, v.jsxs)(s.Z, { children: [O, g] }),
                !r &&
                  !b &&
                  x &&
                  (0, v.jsxs)(s.Z, {
                    children: ['Your ', x, ' ', j ? 'now' : 'is not', ' used as collateral'],
                  }),
                h &&
                  (0, v.jsx)(s.Z, {
                    children: (0, v.jsx)(n.cC, {
                      id: 'f3W0Ej',
                      values: { 0: h === o.tk.Variable ? 'variable' : 'stable' },
                    }),
                  }),
                y &&
                  x &&
                  (0, v.jsxs)(i.Z, {
                    sx: function (e) {
                      return {
                        border:
                          'dark' === e.palette.mode
                            ? '1px solid '.concat(e.palette.divider)
                            : 'none',
                        background: 'dark' === e.palette.mode ? 'none' : '#F7F7F9',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: '24px',
                      };
                    },
                    children: [
                      (0, v.jsx)(p.T1, {
                        symbol: y.symbol,
                        aToken: !(!y || !y.aToken),
                        sx: { fontSize: '32px', mt: '12px', mb: '8px' },
                      }),
                      (0, v.jsx)(s.Z, {
                        variant: 'description',
                        color: 'text.primary',
                        sx: { mx: '24px' },
                        children: (0, v.jsx)(n.cC, {
                          id: 'YyydIq',
                          values: { 0: y && y.aToken ? 'aToken ' : 'token ' },
                        }),
                      }),
                      (0, v.jsxs)(c.Z, {
                        onClick: function () {
                          w({
                            address: y.address,
                            decimals: y.decimals,
                            symbol: y.aToken ? '' : y.symbol,
                            image: /_/.test(y.symbol) ? void 0 : P,
                          });
                        },
                        variant: 'dark' === S.palette.mode ? 'outlined' : 'contained',
                        size: 'medium',
                        sx: { mt: '8px', mb: '12px' },
                        children: [
                          y.symbol &&
                            !/_/.test(y.symbol) &&
                            (0, v.jsx)(p.Js, {
                              symbol: y.symbol,
                              onImageGenerated: T,
                              aToken: y.aToken,
                            }),
                          (0, v.jsx)(u.o, { sx: { width: '20px', height: '20px' } }),
                          (0, v.jsx)(s.Z, {
                            variant: 'buttonM',
                            color: 'white',
                            ml: '4px',
                            children: (0, v.jsx)(n.cC, { id: '8Q51DU' }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
    },
    37096: function (e, t, r) {
      r.d(t, {
        E: function () {
          return a;
        },
      });
      var n = r(15861),
        o = r(85893),
        a = function (e) {
          var t = e.title,
            r = e.symbol;
          return (0, o.jsxs)(n.Z, {
            variant: 'h2',
            sx: { mb: 6 },
            children: [t, ' ', null !== r && void 0 !== r ? r : ''],
          });
        };
    },
    4346: function (e, t, r) {
      r.r(t),
        r.d(t, {
          StakingMigrateModal: function () {
            return q;
          },
        });
      var n = r(67294),
        o = r(15629),
        a = r(44949),
        i = r(57499),
        s = r(75331),
        c = r(80854),
        l = r(1279),
        u = r(80822),
        d = r(2593),
        p = r(56371),
        f = r(32867),
        m = r(20986),
        v = r(11466),
        b = r(38171),
        x = r(3062),
        j = r(50937),
        h = r(23478),
        y = r(44880),
        g = r(67944),
        O = r(37096),
        w = r(59499),
        k = r(50029),
        P = r(17674),
        T = r(87794),
        S = r.n(T),
        D = r(71196),
        C = r(30202),
        Z = r(94303),
        E = r(69986),
        A = r(72005),
        M = r(64041),
        I = r(805),
        U = r(52251),
        N = r(13441),
        R = r(73886),
        B = r(84207),
        F = r(53008),
        L = r(85893);
      function z(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(r), !0).forEach(function (t) {
                (0, w.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : z(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var W = function (e) {
          var t = e.amountToMigrate,
            r = e.minOutWithSlippage,
            o = (0, N.z)().stkAbptMigrationService,
            l = (0, x.Y)(
              (0, R.N)(function (e) {
                return [
                  e.walletApprovalMethodPreference,
                  e.currentMarketData,
                  e.account,
                  e.estimateGasLimit,
                  e.addTransaction,
                ];
              })
            ),
            u = (0, P.Z)(l, 5),
            d = u[0],
            p = u[1],
            f = u[2],
            m = u[3],
            v = u[4],
            b = (0, A.Z)().sendTx,
            j = (0, C.NL)(),
            h = (0, n.useState)(),
            y = h[0],
            g = h[1],
            O = (0, a.vR)(),
            w = O.approvalTxState,
            T = O.mainTxState,
            z = O.loadingTxns,
            W = O.setApprovalTxState,
            K = O.setMainTxState,
            H = O.setLoadingTxns,
            q = O.setTxError,
            G = O.setGasLimit,
            V = d === M.n.PERMIT,
            Y = (0, E.i)({ chainId: p.chainId, token: D.ww, spender: D.E }),
            X = Y.data,
            $ = Y.refetch,
            Q = Y.isFetching,
            J = Y.isFetchedAfterMount;
          H(Q);
          var ee =
            0 !== Number(t) &&
            (0, F.iv)({
              approvedAmount: X ? X.toString() : '0',
              amount: t,
              signedAmount: y ? y.amount : '0',
            });
          ee && null !== w && void 0 !== w && w.success && W({}),
            (0, n.useEffect)(
              function () {
                J || $();
              },
              [$, J]
            ),
            (0, n.useEffect)(
              function () {
                var e = 0;
                (e = Number(c.eB[s.UQ.migrateABPT].recommended)),
                  ee && !w.success && (e += Number(F.pQ)),
                  G(e.toString());
              },
              [ee, w, G]
            );
          var te = (0, Z.M)({
              usePermit: V,
              approvedAmount: {
                user: f,
                token: D.ww,
                amount: (null === X || void 0 === X ? void 0 : X.toString()) || '0',
                spender: D.E,
              },
              requiresApproval: ee,
              assetAddress: D.ww,
              symbol: 'stkABPT',
              decimals: 18,
              signatureAmount: t,
              onApprovalTxConfirmed: $,
              onSignTxCompleted: function (e) {
                return g(e);
              },
            }).approval,
            re = (function () {
              var e = (0, k.Z)(
                S().mark(function e() {
                  var n, a, i, l;
                  return S().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              K(_(_({}, T), {}, { loading: !0 })),
                              (n = (0, c.gU)(t, 18)),
                              !V || !y)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return (
                              (e.next = 6), o.migrateWithPermit(f, n, r, y.signature, y.deadline)
                            );
                          case 6:
                            (a = e.sent), (e.next = 12);
                            break;
                          case 9:
                            return (e.next = 11), o.migrate(f, n, r);
                          case 11:
                            a = e.sent;
                          case 12:
                            return (e.next = 14), m(a, s.a_.mainnet);
                          case 14:
                            return (a = e.sent), (e.next = 17), b(a);
                          case 17:
                            return (i = e.sent), (e.next = 20), i.wait(1);
                          case 20:
                            j.invalidateQueries({ queryKey: U.B.staking }),
                              K({ txHash: i.hash, loading: !1, success: !0 }),
                              v(i.hash, {
                                action: 'todo',
                                txState: 'success',
                                asset: D.ww,
                                amount: t,
                                assetName: 'stkABPT',
                              }),
                              (e.next = 30);
                            break;
                          case 25:
                            (e.prev = 25),
                              (e.t0 = e.catch(0)),
                              (l = (0, I.WG)(e.t0, I.aD.GAS_ESTIMATION, !1)),
                              q(l),
                              K({ txHash: void 0, loading: !1 });
                          case 30:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 25]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, L.jsx)(B.B, {
            requiresApproval: ee,
            blocked: !1,
            preparingTransactions: z,
            handleAction: re,
            actionText: (0, L.jsx)(i.cC, { id: 'y5rS9U' }),
            actionInProgressText: (0, L.jsx)(i.cC, { id: 'uJPHuY' }),
            mainTxState: T,
            isWrongNetwork: !1,
            amount: t,
            requiresAmount: !0,
            handleApproval: te,
            approvalTxState: w,
            tryPermit: !0,
          });
        },
        K = function () {
          var e = (0, a.vR)(),
            t = e.gasLimit,
            r = e.mainTxState,
            o = (0, x.Y)(function (e) {
              return e.currentMarketData;
            }),
            u = (0, b.f)(o, s.hj.bpt).data,
            f = (0, v.I)(o, s.hj.bpt).data,
            m = (0, v.I)(o, s.hj.bptv2).data,
            w = null === f || void 0 === f ? void 0 : f[0],
            k = null === u || void 0 === u ? void 0 : u[0],
            P = null === m || void 0 === m ? void 0 : m[0],
            T = (0, n.useState)(''),
            S = T[0],
            D = T[1],
            C = (0, n.useRef)(),
            Z = (0, l.Fv)(
              (null === k || void 0 === k ? void 0 : k.stakeTokenUserBalance) || '0',
              18
            ),
            E = '-1' === S,
            A = E ? Z : S,
            M =
              Number(A) *
              Number(null === w || void 0 === w ? void 0 : w.stakeTokenPriceUSDFormatted);
          if (r.success)
            return (0, L.jsx)(y.R, {
              action: (0, L.jsx)(i.cC, { id: 'jfl9OP' }),
              amount: C.current,
              symbol: 'stkABPT',
            });
          var I = d.O$.from((0, c.gU)(A || '0', 18))
              .mul(d.O$.from((null === w || void 0 === w ? void 0 : w.stakeTokenPriceUSD) || 0))
              .div(d.O$.from((null === P || void 0 === P ? void 0 : P.stakeTokenPriceUSD) || 0))
              .mul(9999)
              .div(1e4)
              .toString(),
            U = (0, p.formatEther)(I),
            N =
              Number(U) *
              Number(null === P || void 0 === P ? void 0 : P.stakeTokenPriceUSDFormatted),
            R = (0, j.Q)(s.hj.bpt);
          return (0, L.jsxs)(L.Fragment, {
            children: [
              (0, L.jsx)(O.E, { title: (0, L.jsx)(i.cC, { id: 'fwyTMb' }) }),
              (0, L.jsx)(h.W, {
                value: A,
                onChange: function (e) {
                  var t = '-1' === e;
                  (C.current = t ? Z : e), D(e);
                },
                usdValue: M.toString(),
                symbol: R,
                assets: [{ balance: Z.toString(), symbol: 'stkBPT' }],
                isMaxSelected: E,
                maxValue: Z.toString(),
                balanceText: (0, L.jsx)(i.cC, { id: 'JoMQnI' }),
              }),
              (0, L.jsxs)(g.m6, {
                gasLimit: t,
                children: [
                  (0, L.jsx)(H, {
                    caption: (0, L.jsx)(i.cC, { id: '/57U31' }),
                    value: A,
                    valueUSD: M.toString(),
                  }),
                  (0, L.jsx)(H, {
                    caption: (0, L.jsx)(i.cC, { id: 'pjO/iH' }),
                    value: (0, p.formatEther)(I),
                    valueUSD: N.toString(),
                  }),
                ],
              }),
              (0, L.jsx)(W, { amountToMigrate: A, minOutWithSlippage: I }),
            ],
          });
        },
        H = function (e) {
          var t = e.caption,
            r = e.value,
            n = e.valueUSD;
          return (0, L.jsx)(m.X, {
            caption: t,
            captionVariant: 'description',
            mb: 4,
            children: (0, L.jsxs)(u.Z, {
              sx: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
              children: [
                (0, L.jsx)(u.Z, {
                  sx: { display: 'flex', alignItems: 'center' },
                  children: (0, L.jsx)(f.B, { value: r, variant: 'secondary14', compact: !0 }),
                }),
                (0, L.jsx)(f.B, {
                  value: n,
                  variant: 'helperText',
                  compact: !0,
                  symbol: 'USD',
                  symbolsColor: 'text.secondary',
                  color: 'text.secondary',
                }),
              ],
            }),
          });
        },
        q = function () {
          var e = (0, a.vR)(),
            t = e.type,
            r = e.close;
          return (0, L.jsx)(o.P, {
            open: t === a.w8.StakingMigrate,
            setOpen: r,
            children: (0, L.jsx)(K, {}),
          });
        };
    },
    50060: function (e, t, r) {
      r.d(t, {
        P: function () {
          return j;
        },
      });
      var n = r(80854),
        o = r(1279),
        a = r(81206),
        i = r(82403),
        s = r(70794),
        c = r(3062),
        l = r(79850),
        u = r(47892),
        d = r(59499),
        p = r(99673),
        f = r(52251),
        m = r(13441);
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
      var b = function (e, t, r) {
          var n = (0, m.z)().poolTokensBalanceService;
          return (0, p.h)({
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
                  queryKey: f.B.poolTokens(t, e),
                  queryFn: function () {
                    return n.getPoolTokensBalances(e, t);
                  },
                  enabled: !!t,
                  refetchInterval: f.g,
                },
                r
              );
            }),
          });
        },
        x = function (e) {
          var t = (0, c.Y)(function (e) {
              return e.account;
            }),
            r = b(e, t),
            d = (0, u.T)(e),
            p =
              r.some(function (e) {
                return e.isLoading;
              }) ||
              d.some(function (e) {
                return e.isLoading;
              });
          return {
            walletBalances: d.map(function (t, c) {
              var u;
              return (function (e) {
                var t = e.reservesHumanized,
                  r = e.balances,
                  c = e.marketData,
                  u = (null === t || void 0 === t ? void 0 : t.reservesData) || [],
                  d = (null === t || void 0 === t ? void 0 : t.baseCurrencyData) || {
                    marketReferenceCurrencyDecimals: 0,
                    marketReferenceCurrencyPriceInUsd: '0',
                    networkBaseTokenPriceInUsd: '0',
                    networkBaseTokenPriceDecimals: 0,
                  },
                  p = !0;
                return {
                  walletBalances: (null !== r && void 0 !== r ? r : []).reduce(function (e, t) {
                    var r = u.find(function (e) {
                      var r;
                      return t.address === n.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (r = l.m5[c.chainId].wrappedBaseAssetSymbol) || void 0 === r
                              ? void 0
                              : r.toLowerCase())
                        : e.underlyingAsset.toLowerCase() === t.address;
                    });
                    return (
                      '0' !== t.amount && (p = !1),
                      r &&
                        (e[t.address] = {
                          amount: (0, o.Fv)(t.amount, r.decimals),
                          amountUSD: (0, a.Z)({
                            amount: new s.O(t.amount),
                            currencyDecimals: r.decimals,
                            priceInMarketReferenceCurrency: r.priceInMarketReferenceCurrency,
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
                  hasEmptyWallet: p,
                };
              })({
                reservesHumanized: t.data,
                balances: null === (u = r[c]) || void 0 === u ? void 0 : u.data,
                marketData: e[c],
              });
            }),
            isLoading: p,
          };
        },
        j = function (e) {
          var t = x([e]),
            r = t.walletBalances,
            n = t.isLoading;
          return {
            walletBalances: r[0].walletBalances,
            hasEmptyWallet: r[0].hasEmptyWallet,
            loading: n,
          };
        };
    },
    75781: function (e, t, r) {
      r.d(t, {
        Mw: function () {
          return h;
        },
        T8: function () {
          return x;
        },
        Z5: function () {
          return j;
        },
      });
      var n = r(75331),
        o = r(50937).X.tokens,
        a = o.aave,
        i = a.TOKEN_STAKING,
        s = a.TOKEN_ORACLE,
        c = o.bpt,
        l = c.TOKEN_STAKING,
        u = c.TOKEN_ORACLE,
        d = o.gho,
        p = d.TOKEN_STAKING,
        f = d.TOKEN_ORACLE,
        m = o.bptv2,
        v = m.TOKEN_STAKING,
        b = m.TOKEN_ORACLE,
        x = [i, l, p, v],
        j = [s, u, f, b];
      function h(e) {
        switch (e) {
          case n.hj.aave:
            return 0;
          case n.hj.bpt:
            return 1;
          case n.hj.gho:
            return 2;
          case n.hj.bptv2:
            return 3;
        }
      }
    },
    11466: function (e, t, r) {
      r.d(t, {
        I: function () {
          return f;
        },
      });
      var n = r(59499),
        o = r(1279),
        a = r(78551),
        i = r(2593),
        s = r(56371),
        c = r(52251),
        l = r(13441),
        u = r(75781);
      function d(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var f = function (e, t) {
        var r = (0, l.z)().uiStakeDataService;
        return (0, a.a)({
          queryFn: function () {
            return r.getGeneralStakeUIDataHumanized(e, u.T8, u.Z5);
          },
          queryKey: c.B.generalStakeUiData(e, u.T8, u.Z5),
          refetchInterval: c.g,
          select: function (e) {
            var r = (function (e) {
              return e.map(function (e, t) {
                return p(
                  p({}, e),
                  {},
                  {
                    maxSlashablePercentageFormatted: (
                      Number(e.maxSlashablePercentage) / 1e4
                    ).toString(),
                    stakeApyFormatted: (Number(e.stakeApy) / 1e4).toString(),
                    stakeTokenPriceUSDFormatted: (0, o.Fv)(e.stakeTokenPriceUSD, 8),
                    rewardTokenPriceUSDFormatted: (0, o.Fv)(e.rewardTokenPriceUSD, 8),
                    totalSupplyFormatted: (0, o.Fv)(e.stakeTokenTotalSupply, 18),
                    totalSupplyUSDFormatted: (0, s.formatUnits)(
                      i.O$.from(e.stakeTokenTotalSupply).mul(e.stakeTokenPriceUSD),
                      26
                    ),
                    stakeTokenContract: u.T8[t],
                  }
                );
              });
            })(e.stakeData);
            return t ? [r[(0, u.Mw)(t)]] : r;
          },
        });
      };
    },
    38171: function (e, t, r) {
      r.d(t, {
        f: function () {
          return c;
        },
      });
      var n = r(78551),
        o = r(3062),
        a = r(52251),
        i = r(13441),
        s = r(75781),
        c = function (e, t) {
          var r = (0, i.z)().uiStakeDataService,
            c = (0, o.Y)(function (e) {
              return e.account;
            });
          return (0, n.a)({
            queryFn: function () {
              return r.getUserStakeUIDataHumanized(e, c, s.T8, s.Z5);
            },
            queryKey: a.B.userStakeUiData(c, e, s.T8, s.Z5),
            enabled: !!c,
            refetchInterval: a.g,
            select: function (e) {
              return t ? [e.stakeUserData[(0, s.Mw)(t)]] : e.stakeUserData;
            },
          });
        };
    },
  },
]);
