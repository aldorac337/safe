'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1329],
  {
    58941: function (e, t, r) {
      r.d(t, {
        o: function () {
          return j;
        },
      });
      var n = r(59499),
        a = r(4730),
        o = r(57499),
        i = r(1279),
        s = r(2734),
        c = r(80822),
        l = r(15861),
        u = r(69417),
        d = r(70794),
        p = r(32867),
        m = r(85893),
        x = ['value', 'onInfoClick'];
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
      function v(e) {
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
      var j = function (e) {
        var t = e.value,
          r = e.onInfoClick,
          n = (0, a.Z)(e, x),
          f = (0, s.Z)().palette,
          j = Number((0, i.hE)(t).toFixed(2, d.O.ROUND_DOWN)),
          b = '';
        return (
          (b = j >= 3 ? f.success.main : j < 1.1 ? f.error.main : f.warning.main),
          (0, m.jsxs)(c.Z, {
            sx: {
              display: 'inline-flex',
              alignItems: { xs: 'flex-start', xsm: 'center' },
              flexDirection: { xs: 'column', xsm: 'row' },
            },
            'data-cy': 'HealthFactorTopPannel',
            children: [
              '-1' === t
                ? (0, m.jsx)(l.Z, {
                    variant: 'secondary14',
                    color: f.success.main,
                    children: '\u221e',
                  })
                : (0, m.jsx)(
                    p.B,
                    v({ value: j, sx: v({ color: b }, n.sx), visibleDecimals: 2, compact: !0 }, n)
                  ),
              r &&
                (0, m.jsx)(u.Z, {
                  onClick: r,
                  variant: 'surface',
                  size: 'small',
                  sx: { minWidth: 'unset', ml: { xs: 0, xsm: 2 } },
                  children: (0, m.jsx)(o.cC, { id: 'cLo09S' }),
                }),
            ],
          })
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
        a = r(4730),
        o = r(53219),
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
          r = (0, a.Z)(e, s);
        return (0, i.jsxs)(
          o.Z,
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
          return j;
        },
        a9: function () {
          return h;
        },
        r$: function () {
          return b;
        },
      });
      var n = r(59499),
        a = r(57499),
        o = r(38264),
        i = r(53219),
        s = r(2734),
        c = r(80822),
        l = r(15861),
        u = r(23795),
        d = r(2127),
        p = r(85893);
      function m(e, t) {
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
            ? m(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var f = {
          borderRadius: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          p: '2px',
          mt: '2px',
          cursor: 'pointer',
          '&:hover': { opacity: 0.6 },
        },
        v = function (e) {
          var t = e.color;
          return (0, p.jsx)(i.Z, {
            sx: { ml: '3px', color: t || 'text.muted', fontSize: '14px' },
            children: (0, p.jsx)(o.Z, {}),
          });
        },
        j = function (e) {
          var t = e.typographyProps,
            r = (0, s.Z)(),
            n = x(
              {
                border: '1px solid '.concat(r.palette.warning.main),
                color: r.palette.warning.main,
              },
              f
            );
          return (0, p.jsx)(d.a, {
            withoutHover: !0,
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(a.cC, { id: 'bXr0ee' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: n,
              children: [
                (0, p.jsx)(
                  l.Z,
                  x(
                    x(
                      {
                        variant: 'secondary12',
                        sx: { lineHeight: '0.75rem' },
                        color: r.palette.warning.main,
                      },
                      t
                    ),
                    {},
                    { children: (0, p.jsx)(a.cC, { id: 'KYAjf3' }) }
                  )
                ),
                (0, p.jsx)(v, { color: r.palette.warning.main }),
              ],
            }),
          });
        },
        b = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(a.cC, { id: 'N5kUMV' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: f,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(a.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(v, {}),
              ],
            }),
          });
        },
        h = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(a.cC, { id: 'xh6k71' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: f,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(a.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(v, {}),
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
                children: (0, p.jsx)(a.cC, {
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
    44880: function (e, t, r) {
      r.d(t, {
        R: function () {
          return v;
        },
      });
      var n = r(57499),
        a = r(75331),
        o = r(2734),
        i = r(80822),
        s = r(15861),
        c = r(69417),
        l = r(67294),
        u = r(215),
        d = r(32867),
        p = r(45640),
        m = r(72005),
        x = r(60386),
        f = r(85893),
        v = function (e) {
          var t = e.txHash,
            r = e.action,
            v = e.amount,
            j = e.symbol,
            b = e.collateral,
            h = e.rate,
            y = e.addToken,
            g = e.customAction,
            O = e.customText,
            k = (0, m.Z)().addERC20Token,
            w = (0, l.useState)(''),
            C = w[0],
            P = w[1],
            S = (0, o.Z)();
          return (0, f.jsx)(x.R, {
            txHash: t,
            children: (0, f.jsxs)(i.Z, {
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
                  v &&
                  j &&
                  (0, f.jsx)(s.Z, {
                    children: (0, f.jsx)(n.cC, {
                      id: 'wAOL+X',
                      values: { action: r, symbol: j },
                      components: {
                        0: (0, f.jsx)(d.B, {
                          value: Number(v),
                          compact: !0,
                          variant: 'secondary14',
                        }),
                      },
                    }),
                  }),
                g && (0, f.jsxs)(s.Z, { children: [O, g] }),
                !r &&
                  !v &&
                  j &&
                  (0, f.jsxs)(s.Z, {
                    children: ['Your ', j, ' ', b ? 'now' : 'is not', ' used as collateral'],
                  }),
                h &&
                  (0, f.jsx)(s.Z, {
                    children: (0, f.jsx)(n.cC, {
                      id: 'f3W0Ej',
                      values: { 0: h === a.tk.Variable ? 'variable' : 'stable' },
                    }),
                  }),
                y &&
                  j &&
                  (0, f.jsxs)(i.Z, {
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
                      (0, f.jsx)(p.T1, {
                        symbol: y.symbol,
                        aToken: !(!y || !y.aToken),
                        sx: { fontSize: '32px', mt: '12px', mb: '8px' },
                      }),
                      (0, f.jsx)(s.Z, {
                        variant: 'description',
                        color: 'text.primary',
                        sx: { mx: '24px' },
                        children: (0, f.jsx)(n.cC, {
                          id: 'YyydIq',
                          values: { 0: y && y.aToken ? 'aToken ' : 'token ' },
                        }),
                      }),
                      (0, f.jsxs)(c.Z, {
                        onClick: function () {
                          k({
                            address: y.address,
                            decimals: y.decimals,
                            symbol: y.aToken ? '' : y.symbol,
                            image: /_/.test(y.symbol) ? void 0 : C,
                          });
                        },
                        variant: 'dark' === S.palette.mode ? 'outlined' : 'contained',
                        size: 'medium',
                        sx: { mt: '8px', mb: '12px' },
                        children: [
                          y.symbol &&
                            !/_/.test(y.symbol) &&
                            (0, f.jsx)(p.Js, {
                              symbol: y.symbol,
                              onImageGenerated: P,
                              aToken: y.aToken,
                            }),
                          (0, f.jsx)(u.o, { sx: { width: '20px', height: '20px' } }),
                          (0, f.jsx)(s.Z, {
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
    37096: function (e, t, r) {
      r.d(t, {
        E: function () {
          return o;
        },
      });
      var n = r(15861),
        a = r(85893),
        o = function (e) {
          var t = e.title,
            r = e.symbol;
          return (0, a.jsxs)(n.Z, {
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
            return V;
          },
        });
      var n = r(67294),
        a = r(15629),
        o = r(44949),
        i = r(57499),
        s = r(75331),
        c = r(80854),
        l = r(1279),
        u = r(80822),
        d = r(2593),
        p = r(56371),
        m = r(32867),
        x = r(20986),
        f = r(11466),
        v = r(38171),
        j = r(3062),
        b = r(50937),
        h = r(23478),
        y = r(44880),
        g = r(67944),
        O = r(37096),
        k = r(59499),
        w = r(50029),
        C = r(17674),
        P = r(87794),
        S = r.n(P),
        T = r(71196),
        D = r(30202),
        Z = r(94303),
        E = r(69986),
        A = r(72005),
        I = r(64041),
        M = r(805),
        B = r(52251),
        U = r(35258),
        R = r(73886),
        L = r(84207),
        N = r(53008),
        W = r(85893);
      function F(e, t) {
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(r), !0).forEach(function (t) {
                (0, k.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : F(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var _ = function (e) {
          var t = e.amountToMigrate,
            r = e.minOutWithSlippage,
            a = (0, U.z)().stkAbptMigrationService,
            l = (0, j.Y)(
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
            u = (0, C.Z)(l, 5),
            d = u[0],
            p = u[1],
            m = u[2],
            x = u[3],
            f = u[4],
            v = (0, A.Z)().sendTx,
            b = (0, D.NL)(),
            h = (0, n.useState)(),
            y = h[0],
            g = h[1],
            O = (0, o.vR)(),
            k = O.approvalTxState,
            P = O.mainTxState,
            F = O.loadingTxns,
            _ = O.setApprovalTxState,
            q = O.setMainTxState,
            z = O.setLoadingTxns,
            V = O.setTxError,
            Y = O.setGasLimit,
            Q = d === I.n.PERMIT,
            G = (0, E.i)({ chainId: p.chainId, token: T.ww, spender: T.E }),
            $ = G.data,
            J = G.refetch,
            K = G.isFetching,
            X = G.isFetchedAfterMount;
          z(K);
          var ee =
            0 !== Number(t) &&
            (0, N.iv)({
              approvedAmount: $ ? $.toString() : '0',
              amount: t,
              signedAmount: y ? y.amount : '0',
            });
          ee && null !== k && void 0 !== k && k.success && _({}),
            (0, n.useEffect)(
              function () {
                X || J();
              },
              [J, X]
            ),
            (0, n.useEffect)(
              function () {
                var e = 0;
                (e = Number(c.eB[s.UQ.migrateABPT].recommended)),
                  ee && !k.success && (e += Number(N.pQ)),
                  Y(e.toString());
              },
              [ee, k, Y]
            );
          var te = (0, Z.M)({
              usePermit: Q,
              approvedAmount: {
                user: m,
                token: T.ww,
                amount: (null === $ || void 0 === $ ? void 0 : $.toString()) || '0',
                spender: T.E,
              },
              requiresApproval: ee,
              assetAddress: T.ww,
              symbol: 'stkABPT',
              decimals: 18,
              signatureAmount: t,
              onApprovalTxConfirmed: J,
              onSignTxCompleted: function (e) {
                return g(e);
              },
            }).approval,
            re = (function () {
              var e = (0, w.Z)(
                S().mark(function e() {
                  var n, o, i, l;
                  return S().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              q(H(H({}, P), {}, { loading: !0 })),
                              (n = (0, c.gU)(t, 18)),
                              !Q || !y)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return (
                              (e.next = 6), a.migrateWithPermit(m, n, r, y.signature, y.deadline)
                            );
                          case 6:
                            (o = e.sent), (e.next = 12);
                            break;
                          case 9:
                            return (e.next = 11), a.migrate(m, n, r);
                          case 11:
                            o = e.sent;
                          case 12:
                            return (e.next = 14), x(o, s.a_.mainnet);
                          case 14:
                            return (o = e.sent), (e.next = 17), v(o);
                          case 17:
                            return (i = e.sent), (e.next = 20), i.wait(1);
                          case 20:
                            b.invalidateQueries({ queryKey: B.B.staking }),
                              q({ txHash: i.hash, loading: !1, success: !0 }),
                              f(i.hash, {
                                action: 'todo',
                                txState: 'success',
                                asset: T.ww,
                                amount: t,
                                assetName: 'stkABPT',
                              }),
                              (e.next = 30);
                            break;
                          case 25:
                            (e.prev = 25),
                              (e.t0 = e.catch(0)),
                              (l = (0, M.WG)(e.t0, M.aD.GAS_ESTIMATION, !1)),
                              V(l),
                              q({ txHash: void 0, loading: !1 });
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
          return (0, W.jsx)(L.B, {
            requiresApproval: ee,
            blocked: !1,
            preparingTransactions: F,
            handleAction: re,
            actionText: (0, W.jsx)(i.cC, { id: 'y5rS9U' }),
            actionInProgressText: (0, W.jsx)(i.cC, { id: 'uJPHuY' }),
            mainTxState: P,
            isWrongNetwork: !1,
            amount: t,
            requiresAmount: !0,
            handleApproval: te,
            approvalTxState: k,
            tryPermit: !0,
          });
        },
        q = function () {
          var e = (0, o.vR)(),
            t = e.gasLimit,
            r = e.mainTxState,
            a = (0, j.Y)(function (e) {
              return e.currentMarketData;
            }),
            u = (0, v.f)(a, s.hj.bpt).data,
            m = (0, f.I)(a, s.hj.bpt).data,
            x = (0, f.I)(a, s.hj.bptv2).data,
            k = null === m || void 0 === m ? void 0 : m[0],
            w = null === u || void 0 === u ? void 0 : u[0],
            C = null === x || void 0 === x ? void 0 : x[0],
            P = (0, n.useState)(''),
            S = P[0],
            T = P[1],
            D = (0, n.useRef)(),
            Z = (0, l.Fv)(
              (null === w || void 0 === w ? void 0 : w.stakeTokenUserBalance) || '0',
              18
            ),
            E = '-1' === S,
            A = E ? Z : S,
            I =
              Number(A) *
              Number(null === k || void 0 === k ? void 0 : k.stakeTokenPriceUSDFormatted);
          if (r.success)
            return (0, W.jsx)(y.R, {
              action: (0, W.jsx)(i.cC, { id: 'jfl9OP' }),
              amount: D.current,
              symbol: 'stkABPT',
            });
          var M = d.O$.from((0, c.gU)(A || '0', 18))
              .mul(d.O$.from((null === k || void 0 === k ? void 0 : k.stakeTokenPriceUSD) || 0))
              .div(d.O$.from((null === C || void 0 === C ? void 0 : C.stakeTokenPriceUSD) || 0))
              .mul(9999)
              .div(1e4)
              .toString(),
            B = (0, p.formatEther)(M),
            U =
              Number(B) *
              Number(null === C || void 0 === C ? void 0 : C.stakeTokenPriceUSDFormatted),
            R = (0, b.Q)(s.hj.bpt);
          return (0, W.jsxs)(W.Fragment, {
            children: [
              (0, W.jsx)(O.E, { title: (0, W.jsx)(i.cC, { id: 'fwyTMb' }) }),
              (0, W.jsx)(h.W, {
                value: A,
                onChange: function (e) {
                  var t = '-1' === e;
                  (D.current = t ? Z : e), T(e);
                },
                usdValue: I.toString(),
                symbol: R,
                assets: [{ balance: Z.toString(), symbol: 'stkBPT' }],
                isMaxSelected: E,
                maxValue: Z.toString(),
                balanceText: (0, W.jsx)(i.cC, { id: 'JoMQnI' }),
              }),
              (0, W.jsxs)(g.m6, {
                gasLimit: t,
                children: [
                  (0, W.jsx)(z, {
                    caption: (0, W.jsx)(i.cC, { id: '/57U31' }),
                    value: A,
                    valueUSD: I.toString(),
                  }),
                  (0, W.jsx)(z, {
                    caption: (0, W.jsx)(i.cC, { id: 'pjO/iH' }),
                    value: (0, p.formatEther)(M),
                    valueUSD: U.toString(),
                  }),
                ],
              }),
              (0, W.jsx)(_, { amountToMigrate: A, minOutWithSlippage: M }),
            ],
          });
        },
        z = function (e) {
          var t = e.caption,
            r = e.value,
            n = e.valueUSD;
          return (0, W.jsx)(x.X, {
            caption: t,
            captionVariant: 'description',
            mb: 4,
            children: (0, W.jsxs)(u.Z, {
              sx: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
              children: [
                (0, W.jsx)(u.Z, {
                  sx: { display: 'flex', alignItems: 'center' },
                  children: (0, W.jsx)(m.B, { value: r, variant: 'secondary14', compact: !0 }),
                }),
                (0, W.jsx)(m.B, {
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
        V = function () {
          var e = (0, o.vR)(),
            t = e.type,
            r = e.close;
          return (0, W.jsx)(a.P, {
            open: t === o.w8.StakingMigrate,
            setOpen: r,
            children: (0, W.jsx)(q, {}),
          });
        };
    },
    50060: function (e, t, r) {
      r.d(t, {
        P: function () {
          return b;
        },
      });
      var n = r(80854),
        a = r(1279),
        o = r(81206),
        i = r(82403),
        s = r(70794),
        c = r(3062),
        l = r(79850),
        u = r(47892),
        d = r(59499),
        p = r(99673),
        m = r(52251),
        x = r(35258);
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
      var v = function (e, t, r) {
          var n = (0, x.z)().poolTokensBalanceService;
          return (0, p.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? f(Object(r), !0).forEach(function (t) {
                        (0, d.Z)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                      : f(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                }
                return e;
              })(
                {
                  queryKey: m.B.poolTokens(t, e),
                  queryFn: function () {
                    return n.getPoolTokensBalances(e, t);
                  },
                  enabled: !!t,
                  refetchInterval: m.g,
                },
                r
              );
            }),
          });
        },
        j = function (e) {
          var t = (0, c.Y)(function (e) {
              return e.account;
            }),
            r = v(e, t),
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
                          amount: (0, a.Fv)(t.amount, r.decimals),
                          amountUSD: (0, o.Z)({
                            amount: new s.O(t.amount),
                            currencyDecimals: r.decimals,
                            priceInMarketReferenceCurrency: r.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: d.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, a.Fv)(
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
        b = function (e) {
          var t = j([e]),
            r = t.walletBalances,
            n = t.isLoading;
          return {
            walletBalances: r[0].walletBalances,
            hasEmptyWallet: r[0].hasEmptyWallet,
            loading: n,
          };
        };
    },
  },
]);
