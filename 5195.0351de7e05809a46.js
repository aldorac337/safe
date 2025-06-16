'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5195],
  {
    58941: function (e, r, t) {
      t.d(r, {
        o: function () {
          return h;
        },
      });
      var n = t(59499),
        i = t(4730),
        s = t(57499),
        o = t(1279),
        c = t(2734),
        a = t(80822),
        l = t(15861),
        x = t(69417),
        d = t(70794),
        u = t(32867),
        j = t(85893),
        p = ['value', 'onInfoClick'];
      function f(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function m(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? f(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : f(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var h = function (e) {
        var r = e.value,
          t = e.onInfoClick,
          n = (0, i.Z)(e, p),
          f = (0, c.Z)().palette,
          h = Number((0, o.hE)(r).toFixed(2, d.O.ROUND_DOWN)),
          v = '';
        return (
          (v = h >= 3 ? f.success.main : h < 1.1 ? f.error.main : f.warning.main),
          (0, j.jsxs)(a.Z, {
            sx: {
              display: 'inline-flex',
              alignItems: { xs: 'flex-start', xsm: 'center' },
              flexDirection: { xs: 'column', xsm: 'row' },
            },
            'data-cy': 'HealthFactorTopPannel',
            children: [
              '-1' === r
                ? (0, j.jsx)(l.Z, {
                    variant: 'secondary14',
                    color: f.success.main,
                    children: '\u221e',
                  })
                : (0, j.jsx)(
                    u.B,
                    m({ value: h, sx: m({ color: v }, n.sx), visibleDecimals: 2, compact: !0 }, n)
                  ),
              t &&
                (0, j.jsx)(x.Z, {
                  onClick: t,
                  variant: 'surface',
                  size: 'small',
                  sx: { minWidth: 'unset', ml: { xs: 0, xsm: 2 } },
                  children: (0, j.jsx)(s.cC, { id: 'cLo09S' }),
                }),
            ],
          })
        );
      };
    },
    49679: function (e, r, t) {
      t.d(r, {
        X: function () {
          return a;
        },
      });
      var n = t(80822),
        i = t(66489),
        s = (t(67294), t(60377)),
        o = t(38776),
        c = t(85893),
        a = function (e) {
          var r = e.children,
            t = (0, s.HT)(),
            a = t.user;
          return t.loading
            ? (0, c.jsx)(n.Z, {
                sx: {
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: (0, c.jsx)(i.Z, {}),
              })
            : ((0, o.Z)(a, 'User data loaded but no user found'),
              (0, c.jsx)(c.Fragment, { children: r(a) }));
        };
    },
    215: function (e, r, t) {
      t.d(r, {
        o: function () {
          return x;
        },
      });
      var n = t(59499),
        i = t(4730),
        s = t(53219),
        o = t(85893),
        c = ['sx'];
      function a(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function l(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : a(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var x = function (e) {
        var r = e.sx,
          t = (0, i.Z)(e, c);
        return (0, o.jsxs)(
          s.Z,
          l(
            l(
              {
                sx: l({ fill: 'none', stroke: '#A5A8B6' }, r),
                viewBox: '0 0 21 19',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-label': 'Wallet',
              },
              t
            ),
            {},
            {
              children: [
                (0, o.jsxs)('g', {
                  clipPath: 'url(#clip0_3719_3323)',
                  strokeWidth: '2',
                  children: [
                    (0, o.jsx)('path', {
                      d: 'M17.3203 17.398H3.32031C2.78988 17.398 2.28117 17.1872 1.9061 16.8122C1.53103 16.4371 1.32031 15.9284 1.32031 15.3979V6.39795C1.32031 5.86752 1.53103 5.35881 1.9061 4.98374C2.28117 4.60866 2.78988 4.39795 3.32031 4.39795H17.3203C17.8507 4.39795 18.3595 4.60866 18.7345 4.98374C19.1096 5.35881 19.3203 5.86752 19.3203 6.39795V15.3979C19.3203 15.9284 19.1096 16.4371 18.7345 16.8122C18.3595 17.1872 17.8507 17.398 17.3203 17.398Z',
                    }),
                    (0, o.jsx)('path', {
                      d: 'M14.8203 11.3979C14.6877 11.3979 14.5605 11.3453 14.4668 11.2515C14.373 11.1577 14.3203 11.0306 14.3203 10.8979C14.3203 10.7653 14.373 10.6382 14.4668 10.5444C14.5605 10.4506 14.6877 10.3979 14.8203 10.3979C14.9529 10.3979 15.0801 10.4506 15.1739 10.5444C15.2676 10.6382 15.3203 10.7653 15.3203 10.8979C15.3203 11.0306 15.2676 11.1577 15.1739 11.2515C15.0801 11.3453 14.9529 11.3979 14.8203 11.3979Z',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    (0, o.jsx)('path', {
                      d: 'M16.3203 4.39793V2.99993C16.3202 2.69343 16.2497 2.39106 16.1142 2.11615C15.9787 1.84124 15.7818 1.60116 15.5387 1.41444C15.2956 1.22773 15.0129 1.09937 14.7124 1.03929C14.4118 0.979209 14.1015 0.989009 13.8053 1.06793L2.80531 4.00093C2.37937 4.11444 2.00285 4.36549 1.7343 4.71506C1.46575 5.06462 1.32021 5.49312 1.32031 5.93393V6.39793',
                    }),
                  ],
                }),
                (0, o.jsx)('defs', {
                  children: (0, o.jsx)('clipPath', {
                    id: 'clip0_3719_3323',
                    children: (0, o.jsx)('rect', {
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
    40429: function (e, r, t) {
      t.d(r, {
        D: function () {
          return j;
        },
      });
      var n = t(57499),
        i = t(5506),
        s = t(52758),
        o = t(80822),
        c = t(53219),
        a = t(15861),
        l = t(23795),
        x = t(69417),
        d = t(44949),
        u = t(85893),
        j = function (e) {
          var r = e.txError,
            t = (0, d.vR)().close;
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsxs)(o.Z, {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: '92px',
                },
                children: [
                  (0, u.jsx)(o.Z, {
                    sx: {
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'error.200',
                      borderRadius: '50%',
                      mt: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, u.jsx)(c.Z, {
                      sx: { color: 'error.main', fontSize: '32px' },
                      children: (0, u.jsx)(i.Z, {}),
                    }),
                  }),
                  (0, u.jsx)(a.Z, {
                    sx: { mt: 2 },
                    variant: 'h2',
                    children: (0, u.jsx)(n.cC, { id: 'u3ZeYl' }),
                  }),
                  (0, u.jsx)(a.Z, {
                    children: (0, u.jsx)(n.cC, {
                      id: 'DxfsGs',
                      components: {
                        0: (0, u.jsx)(l.Z, { href: 'https://discord.com/invite/aave' }),
                        1: (0, u.jsx)(l.Z, { href: 'https://github.com/aave/interface' }),
                      },
                    }),
                  }),
                  (0, u.jsxs)(x.Z, {
                    variant: 'outlined',
                    onClick: function () {
                      return navigator.clipboard.writeText(r.rawError.message.toString());
                    },
                    size: 'small',
                    sx: { mt: 6 },
                    children: [
                      (0, u.jsx)(n.cC, { id: 'X/ITG9' }),
                      (0, u.jsx)(c.Z, {
                        sx: { ml: 0.5, fontSize: '12px' },
                        children: (0, u.jsx)(s.Z, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, u.jsx)(o.Z, {
                sx: { display: 'flex', flexDirection: 'column', mt: 12 },
                children: (0, u.jsx)(x.Z, {
                  onClick: t,
                  variant: 'contained',
                  size: 'large',
                  sx: { minHeight: '44px' },
                  children: (0, u.jsx)(n.cC, { id: 'yz7wBu' }),
                }),
              }),
            ],
          });
        };
    },
    83063: function (e, r, t) {
      t.d(r, {
        Q: function () {
          return a;
        },
      });
      var n = t(57499),
        i = t(15861),
        s = t(69417),
        o = t(35783),
        c = t(85893),
        a = function (e) {
          var r = e.txError;
          return (0, c.jsx)(o.v, {
            severity: 'error',
            sx: { mt: 4, mb: 0 },
            children: (0, c.jsx)(i.Z, {
              variant: 'description',
              children: r.error
                ? (0, c.jsxs)(c.Fragment, {
                    children: [
                      r.error,
                      ' ',
                      (0, c.jsx)(s.Z, {
                        sx: { verticalAlign: 'top' },
                        variant: 'text',
                        onClick: function () {
                          return navigator.clipboard.writeText(r.rawError.message.toString());
                        },
                        children: (0, c.jsx)(i.Z, {
                          variant: 'description',
                          children: (0, c.jsx)(n.cC, { id: 'qOqbD6' }),
                        }),
                      }),
                    ],
                  })
                : (0, c.jsx)(n.cC, {
                    id: 'hjDCQr',
                    components: {
                      0: (0, c.jsx)(s.Z, {
                        sx: { verticalAlign: 'top' },
                        onClick: function () {
                          return navigator.clipboard.writeText(r.rawError.message.toString());
                        },
                      }),
                      1: (0, c.jsx)(i.Z, { variant: 'description' }),
                    },
                  }),
            }),
          });
        };
    },
    44880: function (e, r, t) {
      t.d(r, {
        R: function () {
          return m;
        },
      });
      var n = t(57499),
        i = t(75331),
        s = t(2734),
        o = t(80822),
        c = t(15861),
        a = t(69417),
        l = t(67294),
        x = t(215),
        d = t(32867),
        u = t(45640),
        j = t(72005),
        p = t(60386),
        f = t(85893),
        m = function (e) {
          var r = e.txHash,
            t = e.action,
            m = e.amount,
            h = e.symbol,
            v = e.collateral,
            b = e.rate,
            y = e.addToken,
            g = e.customAction,
            O = e.customText,
            C = (0, j.Z)().addERC20Token,
            w = (0, l.useState)(''),
            Z = w[0],
            k = w[1],
            P = (0, s.Z)();
          return (0, f.jsx)(p.R, {
            txHash: r,
            children: (0, f.jsxs)(o.Z, {
              sx: {
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              },
              children: [
                t &&
                  m &&
                  h &&
                  (0, f.jsx)(c.Z, {
                    children: (0, f.jsx)(n.cC, {
                      id: 'wAOL+X',
                      values: { action: t, symbol: h },
                      components: {
                        0: (0, f.jsx)(d.B, {
                          value: Number(m),
                          compact: !0,
                          variant: 'secondary14',
                        }),
                      },
                    }),
                  }),
                g && (0, f.jsxs)(c.Z, { children: [O, g] }),
                !t &&
                  !m &&
                  h &&
                  (0, f.jsxs)(c.Z, {
                    children: ['Your ', h, ' ', v ? 'now' : 'is not', ' used as collateral'],
                  }),
                b &&
                  (0, f.jsx)(c.Z, {
                    children: (0, f.jsx)(n.cC, {
                      id: 'f3W0Ej',
                      values: { 0: b === i.tk.Variable ? 'variable' : 'stable' },
                    }),
                  }),
                y &&
                  h &&
                  (0, f.jsxs)(o.Z, {
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
                      (0, f.jsx)(u.T1, {
                        symbol: y.symbol,
                        aToken: !(!y || !y.aToken),
                        sx: { fontSize: '32px', mt: '12px', mb: '8px' },
                      }),
                      (0, f.jsx)(c.Z, {
                        variant: 'description',
                        color: 'text.primary',
                        sx: { mx: '24px' },
                        children: (0, f.jsx)(n.cC, {
                          id: 'YyydIq',
                          values: { 0: y && y.aToken ? 'aToken ' : 'token ' },
                        }),
                      }),
                      (0, f.jsxs)(a.Z, {
                        onClick: function () {
                          C({
                            address: y.address,
                            decimals: y.decimals,
                            symbol: y.aToken ? '' : y.symbol,
                            image: /_/.test(y.symbol) ? void 0 : Z,
                          });
                        },
                        variant: 'dark' === P.palette.mode ? 'outlined' : 'contained',
                        size: 'medium',
                        sx: { mt: '8px', mb: '12px' },
                        children: [
                          y.symbol &&
                            !/_/.test(y.symbol) &&
                            (0, f.jsx)(u.Js, {
                              symbol: y.symbol,
                              onImageGenerated: k,
                              aToken: y.aToken,
                            }),
                          (0, f.jsx)(x.o, { sx: { width: '20px', height: '20px' } }),
                          (0, f.jsx)(c.Z, {
                            variant: 'buttonM',
                            color: 'white',
                            ml: '4px',
                            children: (0, f.jsx)(n.cC, { id: '8Q51DU' }),
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
    37096: function (e, r, t) {
      t.d(r, {
        E: function () {
          return s;
        },
      });
      var n = t(15861),
        i = t(85893),
        s = function (e) {
          var r = e.title,
            t = e.symbol;
          return (0, i.jsxs)(n.Z, {
            variant: 'h2',
            sx: { mb: 6 },
            children: [r, ' ', null !== t && void 0 !== t ? t : ''],
          });
        };
    },
    19408: function (e, r, t) {
      t.d(r, {
        I: function () {
          return m;
        },
      });
      var n = t(59499),
        i = t(4730),
        s = t(57499),
        o = t(15861),
        c = t(69417),
        a = t(72005),
        l = t(3062),
        x = t(65361),
        d = t(35783),
        u = t(85893),
        j = ['networkName', 'chainId', 'event', 'funnel', 'askManualSwitch'];
      function p(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function f(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? p(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : p(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var m = function (e) {
        var r = e.networkName,
          t = e.chainId,
          n = e.event,
          p = e.funnel,
          m = e.askManualSwitch,
          h = void 0 !== m && m,
          v = (0, i.Z)(e, j),
          b = (0, a.Z)(),
          y = b.switchNetwork,
          g = b.switchNetworkError,
          O = (0, l.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, u.jsx)(
          d.v,
          f(
            f({ severity: 'error', icon: !1 }, v),
            {},
            {
              children: g
                ? (0, u.jsx)(o.Z, { children: (0, u.jsx)(s.cC, { id: '+eOPG+' }) })
                : (0, u.jsxs)(o.Z, {
                    variant: 'description',
                    children: [
                      (0, u.jsx)(s.cC, { id: 'nh2EJK', values: { networkName: r } }),
                      ' ',
                      !h &&
                        (0, u.jsx)(c.Z, {
                          variant: 'text',
                          sx: { ml: '2px', verticalAlign: 'top' },
                          onClick: function () {
                            O(
                              x.vh.SWITCH_NETWORK,
                              f(
                                f(
                                  { funnel: p },
                                  null === n || void 0 === n ? void 0 : n.eventParams
                                ),
                                {},
                                { network: r }
                              )
                            ),
                              y(t);
                          },
                          disableRipple: !0,
                          children: (0, u.jsx)(o.Z, {
                            variant: 'description',
                            children: (0, u.jsx)(s.cC, { id: '6s8L6f' }),
                          }),
                        }),
                    ],
                  }),
            }
          )
        );
      };
    },
  },
]);
