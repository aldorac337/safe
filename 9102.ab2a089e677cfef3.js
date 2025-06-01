'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9102],
  {
    10818: function (e, t, r) {
      r.d(t, {
        M: function () {
          return h;
        },
      });
      var n = r(59499),
        o = r(53737),
        s = r(33740),
        a = r(2734),
        i = r(61730),
        c = r(80822),
        u = r(73601),
        l = r(93946),
        d = r(23279),
        p = r.n(d),
        m = r(67294),
        x = r(85893);
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
      var h = function (e) {
        var t = e.onSearchTermChange,
          r = e.wrapperSx,
          d = e.placeholder,
          h = e.disableFocus,
          v = (0, m.useRef)(null),
          g = (0, m.useState)(''),
          b = g[0],
          y = g[1],
          j = (0, a.Z)().breakpoints,
          w = (0, i.Z)(j.down('sm')),
          S = (0, m.useMemo)(
            function () {
              return p()(function (e) {
                t(e);
              }, 300);
            },
            [t]
          );
        return (0, x.jsxs)(c.Z, {
          sx: function (e) {
            return (function (e) {
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
            })(
              {
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                border: '1px solid '.concat(e.palette.divider),
                borderRadius: '6px',
                height: '36px',
              },
              r
            );
          },
          children: [
            (0, x.jsx)(c.Z, { sx: { ml: 2, mt: 1 }, children: (0, x.jsx)(o.Z, { height: 16 }) }),
            (0, x.jsx)(u.ZP, {
              autoFocus: w,
              inputRef: v,
              sx: { width: '100%', fontSize: { xs: 16, sm: 14 } },
              placeholder: d,
              value: b,
              onChange: function (e) {
                y(e.target.value), S(e.target.value);
              },
              onKeyDown: function (e) {
                h && e.stopPropagation();
              },
            }),
            (0, x.jsx)(l.Z, {
              sx: { p: 0, mr: 2, visibility: b ? 'visible' : 'hidden' },
              onClick: function () {
                return (function () {
                  var e;
                  y(''), t(''), null === (e = v.current) || void 0 === e || e.focus();
                })();
              },
              children: (0, x.jsx)(s.Z, { height: 16 }),
            }),
          ],
        });
      };
    },
    37096: function (e, t, r) {
      r.d(t, {
        E: function () {
          return s;
        },
      });
      var n = r(15861),
        o = r(85893),
        s = function (e) {
          var t = e.title,
            r = e.symbol;
          return (0, o.jsxs)(n.Z, {
            variant: 'h2',
            sx: { mb: 6 },
            children: [t, ' ', null !== r && void 0 !== r ? r : ''],
          });
        };
    },
    19102: function (e, t, r) {
      r.r(t),
        r.d(t, {
          SwitchModal: function () {
            return Qt;
          },
        });
      var n = r(44949),
        o = r(57499),
        s = r(80822),
        a = r(15861),
        i = r(67294),
        c = r(15629),
        u = r(59499),
        l = r(79850);
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
                (0, u.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var m = (0, l.c)()
          .map(function (e) {
            return p(p({}, l.m5[e]), {}, { chainId: e });
          })
          .filter(function (e) {
            return Object.values(l.ei).find(function (t) {
              var r;
              return (
                t.chainId === e.chainId &&
                (null === (r = t.enabledFeatures) || void 0 === r ? void 0 : r.switch)
              );
            });
          }),
        x = r(94010),
        f = r(72005),
        h = r(3062),
        v = r(90116),
        g = r(50029),
        b = r(87794),
        y = r.n(b),
        j = r(1279),
        w = r(42853),
        S = r(67484),
        k = r(66489),
        O = r(93946),
        D = r(53219),
        A = r(30202),
        I = r(96486),
        T = r(38577),
        C = r(35783),
        Z = r(10961),
        E = r(96276),
        N = r(78551),
        R = r(52251),
        P = r(17674),
        U = r(70794),
        _ = r(3873),
        L = r(72544),
        B = r(69183),
        M = r(92777),
        F = r(82262),
        W = r(80854),
        H = (function () {
          function e() {
            (0, M.Z)(this, e), (0, u.Z)(this, 'baseUrl', 'https://bff.cow.fi');
          }
          return (
            (0, F.Z)(e, [
              {
                key: 'getTokenUsdPrice',
                value: (function () {
                  var e = (0, g.Z)(
                    y().mark(function e(t, r) {
                      var n, o, s;
                      return y().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = '/'.concat(t, '/tokens/').concat(r, '/usdPrice')),
                                  (e.prev = 1),
                                  r !== W.hP)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error('Native tokens not supported');
                              case 4:
                                return (e.next = 6), fetch(''.concat(this.baseUrl).concat(n));
                              case 6:
                                if ((o = e.sent).ok) {
                                  e.next = 9;
                                  break;
                                }
                                throw new Error('Failed to fetch USD price: '.concat(o.statusText));
                              case 9:
                                return (e.next = 11), o.json();
                              case 11:
                                return (s = e.sent), e.abrupt('return', s.price);
                              case 15:
                                return (
                                  (e.prev = 15),
                                  (e.t0 = e.catch(1)),
                                  console.error('Error fetching token USD price:', e.t0),
                                  e.abrupt('return', void 0)
                                );
                              case 19:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 15]]
                      );
                    })
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        V = r(805),
        z = r(87831);
      function G(e) {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = (0, g.Z)(
          y().mark(function e(t) {
            var r, n, o, s, a, i, c, u, l, d, p, m, x, f, h, v, g, b, j, S, k, O, D, A, I, T, C;
            return y().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.chainId),
                        (o = t.amount),
                        (s = t.srcToken),
                        (a = t.srcDecimals),
                        (i = t.destToken),
                        (c = t.destDecimals),
                        (u = t.user),
                        (l = t.inputSymbol),
                        (d = t.outputSymbol),
                        (p = t.setError),
                        (m = new H()),
                        (x = new w.TradingSdk({ chainId: n })),
                        (e.prev = 3),
                        (0, L.QC)(n))
                      ) {
                        e.next = 6;
                        break;
                      }
                      throw new Error('Chain not supported by CowProtocol');
                    case 6:
                      return (
                        (g = s),
                        (0, _.Mg)(s) && (g = w.WRAPPED_NATIVE_CURRENCIES[n].address),
                        (b = i),
                        (0, _.Mg)(i) && (b = w.WRAPPED_NATIVE_CURRENCIES[n].address),
                        (e.next = 12),
                        (0, B.V)(z.g, { chainId: n })
                      );
                    case 12:
                      if (
                        ((j = e.sent),
                        (S = null === j || void 0 === j ? void 0 : j.getSigner()),
                        l && d)
                      ) {
                        e.next = 16;
                        break;
                      }
                      throw new Error('No input or output symbol provided');
                    case 16:
                      return (
                        (e.next = 18),
                        Promise.all([
                          x
                            .getQuote({
                              owner: u,
                              kind: w.OrderKind.SELL,
                              amount: o,
                              sellToken: g,
                              sellTokenDecimals: a,
                              buyToken: b,
                              buyTokenDecimals: c,
                              signer: S,
                              appCode: _.HT,
                              partnerFee: (0, _.ZA)(l, d),
                            })
                            .catch(function (e) {
                              var t;
                              throw (
                                (console.error(e),
                                new Error(
                                  null === e ||
                                  void 0 === e ||
                                  null === (t = e.body) ||
                                  void 0 === t
                                    ? void 0
                                    : t.errorType
                                ))
                              );
                            }),
                          m.getTokenUsdPrice(n, g).catch(function (e) {
                            var t;
                            throw (
                              (console.error(e),
                              new Error(
                                null === e || void 0 === e || null === (t = e.body) || void 0 === t
                                  ? void 0
                                  : t.errorType
                              ))
                            );
                          }),
                          m.getTokenUsdPrice(n, b).catch(function (e) {
                            var t;
                            throw (
                              (console.error(e),
                              new Error(
                                null === e || void 0 === e || null === (t = e.body) || void 0 === t
                                  ? void 0
                                  : t.errorType
                              ))
                            );
                          }),
                        ])
                      );
                    case 18:
                      if (
                        ((k = e.sent),
                        (O = (0, P.Z)(k, 3)),
                        (f = O[0]),
                        (h = O[1]),
                        (v = O[2]),
                        h && v)
                      ) {
                        e.next = 29;
                        break;
                      }
                      throw (
                        (console.error('No price found for token'),
                        (D = (0, V.WG)(
                          new Error('No price found for token, please try another token'),
                          V.aD.MAIN_ACTION,
                          !0
                        )),
                        null === p || void 0 === p || p(D),
                        console.error(D),
                        new Error('No price found for token, please try another token'))
                      );
                    case 29:
                      e.next = 36;
                      break;
                    case 31:
                      throw (
                        ((e.prev = 31),
                        (e.t0 = e.catch(3)),
                        console.error('generate error', e.t0),
                        null === p ||
                          void 0 === p ||
                          p({
                            error: e.t0,
                            blocking: !0,
                            actionBlocked: !0,
                            rawError: e.t0,
                            txAction: V.aD.MAIN_ACTION,
                          }),
                        e.t0)
                      );
                    case 36:
                      if (
                        ((A = (0, U.O)(h).multipliedBy((0, U.O)(o).dividedBy(Math.pow(10, a)))),
                        (I = (0, U.O)(v).multipliedBy(
                          (0, U.O)(
                            f.quoteResults.amountsAndCosts.afterPartnerFees.buyAmount.toString()
                          ).dividedBy(Math.pow(10, c))
                        )),
                        f.quoteResults.suggestedSlippageBps)
                      ) {
                        e.next = 44;
                        break;
                      }
                      throw (
                        (console.error('No suggested slippage found'),
                        (T = (0, V.WG)(
                          new Error('No suggested slippage found'),
                          V.aD.MAIN_ACTION,
                          !0
                        )),
                        null === p || void 0 === p || p(T),
                        console.error(T),
                        new Error('No suggested slippage found'))
                      );
                    case 44:
                      if (f.quoteResults.amountsAndCosts.afterPartnerFees.buyAmount) {
                        e.next = 50;
                        break;
                      }
                      throw (
                        (console.error('No buy amount found'),
                        (C = (0, V.WG)(new Error('No buy amount found'), V.aD.MAIN_ACTION, !0)),
                        null === p || void 0 === p || p(C),
                        console.error(C),
                        new Error('No buy amount found'))
                      );
                    case 50:
                      return e.abrupt('return', {
                        srcToken: s,
                        srcUSD: A.toString(),
                        srcAmount: o,
                        srcDecimals: a,
                        destToken: i,
                        destUSD: I.toString(),
                        destAmount:
                          f.quoteResults.amountsAndCosts.afterPartnerFees.buyAmount.toString(),
                        destDecimals: c,
                        provider: 'cowprotocol',
                        order: f.quoteResults.orderToSign,
                        quoteId: f.quoteResults.quoteResponse.id,
                        suggestedSlippage:
                          (null !== (r = f.quoteResults.suggestedSlippageBps) && void 0 !== r
                            ? r
                            : 100) / 100,
                        amountAndCosts: f.quoteResults.amountsAndCosts,
                        srcTokenPriceUsd: Number(h),
                        destTokenPriceUsd: Number(v),
                      });
                    case 51:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 31]]
            );
          })
        )).apply(this, arguments);
      }
      var Y = r(79643),
        Q = r(9279),
        $ = r(87886);
      function X(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(r), !0).forEach(function (t) {
                (0, u.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : X(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function J(e) {
        return ee.apply(this, arguments);
      }
      function ee() {
        return (ee = (0, g.Z)(
          y().mark(function e(t) {
            var r, n, o, s, a, i, c, u, l, d, p;
            return y().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.chainId),
                      (n = t.amount),
                      (o = t.srcToken),
                      (s = t.srcDecimals),
                      (a = t.destToken),
                      (i = t.destDecimals),
                      (c = t.user),
                      (u = t.options),
                      (l = void 0 === u ? {} : u),
                      (d = (0, $.w_)(r)),
                      (p = d.paraswap),
                      e.abrupt(
                        'return',
                        p
                          .getRate({
                            amount: n,
                            srcToken: o,
                            srcDecimals: s,
                            destToken: a,
                            destDecimals: i,
                            userAddress: c || Q.d,
                            side: Y.PC.SELL,
                            options: K(
                              K({}, l),
                              {},
                              {
                                excludeDEXS: [
                                  'ParaSwapPool',
                                  'ParaSwapLimitOrders',
                                  'SwaapV2',
                                  'Hashflow',
                                  'Dexalot',
                                  'Bebop',
                                ],
                              }
                            ),
                          })
                          .then(function (e) {
                            return {
                              srcToken: o,
                              srcUSD: e.srcUSD,
                              srcAmount: e.srcAmount,
                              srcDecimals: s,
                              destToken: a,
                              destUSD: e.destUSD,
                              destAmount: e.destAmount,
                              destDecimals: i,
                              provider: 'paraswap',
                              optimalRateData: e,
                            };
                          })
                      )
                    );
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var te = function (e) {
          return (function (e) {
            return L.b.includes(e) ? 'cowprotocol' : 'paraswap';
          })(e.chainId);
        },
        re = r(53097),
        ne = r(25074),
        oe = r(72645),
        se = r(65361),
        ae = r(48120),
        ie = r(37096),
        ce = r(19408),
        ue = r(78864),
        le = r(61782),
        de = r(94054),
        pe = r(10315),
        me = r(18972),
        xe = r(21489),
        fe = r(85893);
      function he(e, t) {
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
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? he(Object(r), !0).forEach(function (t) {
                (0, u.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : he(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var ge = function (e) {
          var t = e.networks,
            r = e.selectedNetwork,
            n = e.setSelectedNetwork;
          return (0, fe.jsx)(de.Z, {
            sx: { minWidth: 'unset', width: 'unset' },
            children: (0, fe.jsx)(pe.Z, {
              native: !1,
              value: String(r),
              onChange: function (e) {
                n(Number(e.target.value));
              },
              IconComponent: function (e) {
                return (0, fe.jsx)(
                  D.Z,
                  ve(ve({ sx: { fontSize: '14px' } }, e), {}, { children: (0, fe.jsx)(le.Z, {}) })
                );
              },
              sx: {
                '&.MuiInputBase-root': {
                  border: 0,
                  '.MuiSelect-select': {
                    display: 'flex',
                    backgroundColor: 'transparent',
                    border: 0,
                  },
                },
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              },
              children: t.map(function (e) {
                return (0, fe.jsx)(
                  me.Z,
                  {
                    value: e.chainId,
                    children: (0, fe.jsxs)(s.Z, {
                      sx: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                      children: [
                        (0, fe.jsx)(xe.gO, { size: 16, logo: e.networkLogoPath, sx: { mr: 1 } }),
                        (0, fe.jsx)(a.Z, {
                          variant: 'subheader2',
                          color: '#4D6EEE',
                          children: e.displayName || e.name,
                        }),
                      ],
                    }),
                  },
                  ''.concat(e.name)
                );
              }),
            }),
          });
        },
        be = function (e) {
          return 'paraswap' === (null === e || void 0 === e ? void 0 : e.provider);
        },
        ye = function (e) {
          return 'cowprotocol' === (null === e || void 0 === e ? void 0 : e.provider);
        },
        je = r(24243),
        we = r(75331),
        Se = r(2593),
        ke = r(56371),
        Oe = r(58299),
        De = r.n(Oe),
        Ae = r(92997),
        Ie = r(98029);
      function Te(e, t) {
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
      function Ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Te(Object(r), !0).forEach(function (t) {
                (0, u.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Te(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Ze = r(64041),
        Ee = r(64409),
        Ne = r(73886),
        Re = r(84207),
        Pe = r(53008);
      function Ue(e, t) {
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
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ue(Object(r), !0).forEach(function (t) {
                (0, u.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ue(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Le = function (e) {
          var t,
            r,
            s = e.inputAmount,
            a = e.inputToken,
            c = e.inputName,
            u = e.outputName,
            d = e.outputToken,
            p = e.inputSymbol,
            m = e.outputSymbol,
            x = e.slippage,
            v = e.blocked,
            b = e.loading,
            S = e.isWrongNetwork,
            k = e.chainId,
            O = e.switchRates,
            D = e.setShowGasStation,
            I = (0, h.Y)(
              (0, Ne.N)(function (e) {
                return [
                  e.account,
                  e.generateApproval,
                  e.estimateGasLimit,
                  e.walletApprovalMethodPreference,
                  e.generateSignatureRequest,
                  e.addTransaction,
                  e.currentMarketData,
                  e.trackEvent,
                ];
              })
            ),
            T = (0, P.Z)(I, 8),
            C = T[0],
            E = T[1],
            N = T[2],
            U = T[3],
            L = T[4],
            M = T[5],
            F = T[6],
            H = T[7],
            G = (0, n.vR)(),
            q = G.approvalTxState,
            Y = G.mainTxState,
            Q = G.loadingTxns,
            X = G.setMainTxState,
            K = G.setTxError,
            J = G.setGasLimit,
            ee = G.setLoadingTxns,
            te = G.setApprovalTxState,
            re = (0, f.Z)(),
            oe = re.sendTx,
            ae = re.signTxData,
            ie = (0, A.NL)(),
            ce = (0, l.Mo)(k),
            ue = (0, i.useState)(),
            le = ue[0],
            de = ue[1],
            pe = (0, i.useState)(void 0),
            me = pe[0],
            xe = pe[1],
            he = (function (e) {
              return (0, Ie.D)({
                mutationFn: (function () {
                  var t = (0, g.Z)(
                    y().mark(function t(r) {
                      var n, o, s, a, i, c, u, l, d, p, m, x, f, h;
                      return y().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n = r.srcToken),
                                (o = r.srcDecimals),
                                (s = r.destToken),
                                (a = r.destDecimals),
                                (i = r.user),
                                (c = r.route),
                                (u = r.maxSlippage),
                                (l = r.permit),
                                (d = r.deadline),
                                (p = r.partner),
                                (m = (0, $.w_)(e)),
                                (x = m.paraswap),
                                (f = m.feeTarget),
                                (t.next = 4),
                                x.buildTx(
                                  {
                                    srcToken: n,
                                    srcDecimals: o,
                                    srcAmount: c.srcAmount,
                                    destToken: s,
                                    destDecimals: a,
                                    userAddress: i,
                                    priceRoute: c,
                                    slippage: u,
                                    takeSurplus: !0,
                                    partner: p,
                                    partnerAddress: f,
                                    permit: l,
                                    deadline: d,
                                    isDirectFeeTransfer: !0,
                                  },
                                  { ignoreChecks: !0 }
                                )
                              );
                            case 4:
                              return (
                                (h = t.sent),
                                t.abrupt(
                                  'return',
                                  Ce(
                                    Ce({}, h),
                                    {},
                                    {
                                      gasLimit: Se.O$.from('500000'),
                                      gasPrice: void 0,
                                      value: Se.O$.from(h.value),
                                    }
                                  )
                                )
                              );
                            case 6:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              });
            })(null !== (t = ce.underlyingChainId) && void 0 !== t ? t : k),
            ve = he.mutateAsync,
            ge =
              (null === (r = Ee.Q[k]) || void 0 === r ? void 0 : r[a]) &&
              'cowprotocol' !== (null === O || void 0 === O ? void 0 : O.provider),
            Oe = U === Ze.n.PERMIT && ge,
            Te = (0, i.useMemo)(
              function () {
                return void 0 !== me && -1 !== me && '0' !== s && !S && me < Number(s);
              },
              [me, s, S]
            ),
            Ue = (function () {
              var e = (0, g.Z)(
                y().mark(function e() {
                  var t, r, n, o, s, i, l, f, h, v, g, b, S, D, A, I, T, E, P, U, L, W, G, q, Q;
                  return y().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((X(_e(_e({}, Y), {}, { loading: !0 })), !be(O))) {
                              e.next = 37;
                              break;
                            }
                            return (
                              (e.prev = 2),
                              (e.next = 5),
                              ve({
                                srcToken: a,
                                srcDecimals: O.srcDecimals,
                                destDecimals: O.destDecimals,
                                destToken: d,
                                route: O.optimalRateData,
                                user: C,
                                maxSlippage: 1e4 * Number(x),
                                permit: le && le.signature,
                                deadline: le && le.deadline,
                                partner: 'aave-widget',
                              })
                            );
                          case 5:
                            return ((n = e.sent).chainId = k), (e.next = 9), N(n, k);
                          case 9:
                            return (o = e.sent), (e.next = 12), oe(o);
                          case 12:
                            return (
                              (s = e.sent),
                              (i = {
                                action: 'switch',
                                asset: O.srcToken,
                                assetName: c,
                                amount: (0, ke.formatUnits)(O.srcAmount, O.srcDecimals),
                                amountUsd: O.srcUSD,
                                outAsset: O.destToken,
                                outAmount: (0, ke.formatUnits)(O.destAmount, O.destDecimals),
                                outAmountUsd: O.destUSD,
                                outAssetName: u,
                              }),
                              (e.prev = 14),
                              (e.next = 17),
                              s.wait(1)
                            );
                          case 17:
                            M(s.hash, { txState: 'success' }, { chainId: k }),
                              X({ txHash: s.hash, loading: !1, success: !0 }),
                              ie.invalidateQueries({ queryKey: R.B.poolTokens(C, F) }),
                              (e.next = 28);
                            break;
                          case 22:
                            (e.prev = 22),
                              (e.t0 = e.catch(14)),
                              (l = (0, V.WG)(e.t0, V.aD.MAIN_ACTION, !1)),
                              K(l),
                              X({ txHash: s.hash, loading: !1 }),
                              M(s.hash, _e({ txState: 'failed' }, i), { chainId: k });
                          case 28:
                            e.next = 35;
                            break;
                          case 30:
                            (e.prev = 30),
                              (e.t1 = e.catch(2)),
                              (f = (0, V.WG)(e.t1, V.aD.GAS_ESTIMATION, !1)),
                              K(f),
                              X({ txHash: void 0, loading: !1 });
                          case 35:
                            e.next = 110;
                            break;
                          case 37:
                            if (!ye(O)) {
                              e.next = 109;
                              break;
                            }
                            return (e.prev = 38), (e.next = 41), (0, B.V)(z.g, { chainId: k });
                          case 41:
                            if (
                              ((h = e.sent),
                              (v = (0, j.hE)(O.destAmount)
                                .multipliedBy((0, j.hE)(1).minus((0, j.hE)(x)))
                                .toFixed(0)),
                              (g = Math.round(100 * Number(x) * 100)),
                              !(0, _.Mg)(a))
                            ) {
                              e.next = 76;
                              break;
                            }
                            return (
                              (b = Math.floor(Date.now() / 1e3) + 1800),
                              (e.next = 48),
                              (0, _.Xp)(O.srcAmount, v.toString(), d, C, b, p, m, O.quoteId)
                            );
                          case 48:
                            return (S = e.sent), (e.next = 51), N(S, k);
                          case 51:
                            return (D = e.sent), (e.prev = 52), (e.next = 55), oe(D);
                          case 55:
                            return (
                              (A = e.sent),
                              M(A.hash, { txState: 'success' }, { chainId: k }),
                              X({ loading: !1, success: !0 }),
                              (e.next = 60),
                              (0, _.tV)(O.srcAmount, v.toString(), d, C, k, p, m)
                            );
                          case 60:
                            return (I = e.sent), (e.next = 63), (0, w.calculateUniqueOrderId)(k, I);
                          case 63:
                            return (
                              (T = e.sent), (e.next = 66), (0, _.mc)(T, De()((0, _.GE)(p, m)), k)
                            );
                          case 66:
                            setTimeout(function () {
                              X({ loading: !1, success: !0, txHash: T });
                            }, 3e4),
                              (e.next = 74);
                            break;
                          case 69:
                            (e.prev = 69),
                              (e.t2 = e.catch(52)),
                              K((0, V.WG)(e.t2, V.aD.MAIN_ACTION, !1)),
                              X({
                                txHash: null === (E = A) || void 0 === E ? void 0 : E.hash,
                                loading: !1,
                              }),
                              null !== (P = A) &&
                                void 0 !== P &&
                                P.hash &&
                                M(
                                  null === (U = A) || void 0 === U ? void 0 : U.hash,
                                  { txState: 'failed' },
                                  { chainId: k }
                                );
                          case 74:
                            e.next = 100;
                            break;
                          case 76:
                            return (e.prev = 76), (e.next = 79), (0, Z.k)(C, h);
                          case 79:
                            if (!e.sent) {
                              e.next = 90;
                              break;
                            }
                            return (
                              (e.next = 82),
                              (0, _.YN)({
                                provider: h,
                                tokenDest: d,
                                chainId: k,
                                user: C,
                                amount: O.srcAmount,
                                tokenSrc: a,
                                tokenSrcDecimals: O.srcDecimals,
                                tokenDestDecimals: O.destDecimals,
                                afterNetworkCostsBuyAmount:
                                  O.amountAndCosts.afterNetworkCosts.buyAmount.toString(),
                                slippageBps: g,
                                inputSymbol: p,
                                outputSymbol: m,
                                quote: O.order,
                              })
                            );
                          case 82:
                            return (
                              (W = e.sent),
                              (e.next = 85),
                              oe({
                                data: W.data,
                                to: W.to,
                                value: Se.O$.from(W.value),
                                gasLimit: Se.O$.from(W.gasLimit),
                              })
                            );
                          case 85:
                            (G = e.sent),
                              M(G.hash, { txState: 'success' }, { chainId: k }),
                              X({ loading: !1, success: !0, txHash: W.orderId }),
                              (e.next = 94);
                            break;
                          case 90:
                            return (
                              (e.next = 92),
                              (0, _.gO)({
                                tokenSrc: a,
                                tokenSrcDecimals: O.srcDecimals,
                                tokenDest: d,
                                tokenDestDecimals: O.destDecimals,
                                quote: O.order,
                                amount: O.srcAmount,
                                afterNetworkCostsBuyAmount:
                                  O.amountAndCosts.afterNetworkCosts.buyAmount.toString(),
                                slippageBps: g,
                                chainId: k,
                                user: C,
                                provider: h,
                                inputSymbol: p,
                                outputSymbol: m,
                              })
                            );
                          case 92:
                            (L = e.sent),
                              X({
                                loading: !1,
                                success: !0,
                                txHash: null !== (q = L) && void 0 !== q ? q : void 0,
                              });
                          case 94:
                            e.next = 100;
                            break;
                          case 96:
                            (e.prev = 96),
                              (e.t3 = e.catch(76)),
                              console.error(e.t3),
                              X({ success: !1, loading: !1 });
                          case 100:
                            e.next = 107;
                            break;
                          case 102:
                            (e.prev = 102),
                              (e.t4 = e.catch(38)),
                              (Q = (0, V.WG)(e.t4, V.aD.GAS_ESTIMATION, !1)),
                              K(Q),
                              X({ txHash: void 0, loading: !1, success: !1 });
                          case 107:
                            e.next = 110;
                            break;
                          case 109:
                            K((0, V.WG)(new Error('No sell rates found'), V.aD.MAIN_ACTION, !0));
                          case 110:
                            try {
                              H(se.vh.SWAP, {
                                chainId: k,
                                inputSymbol: p,
                                outputSymbol: m,
                                pair: ''.concat(p, '-').concat(m),
                              });
                            } catch (y) {
                              console.error(y);
                            }
                            ie.invalidateQueries({
                              queryKey: R.B.poolTokens(
                                C,
                                null !== (t = (0, ne.N_)(k)) && void 0 !== t ? t : F
                              ),
                            }),
                              ie.invalidateQueries({
                                queryKey: R.B.transactionHistory(
                                  C,
                                  null !== (r = (0, ne.N_)(k)) && void 0 !== r ? r : F
                                ),
                              });
                          case 113:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [2, 30],
                      [14, 22],
                      [38, 102],
                      [52, 69],
                      [76, 96],
                    ]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Le = (function () {
              var e = (0, g.Z)(
                y().mark(function e() {
                  var t, r, n, o, i, c, u, l, d, p, m, x, f;
                  return y().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!be(O)) {
                              e.next = 4;
                              break;
                            }
                            (t = O.optimalRateData.tokenTransferProxy), (e.next = 12);
                            break;
                          case 4:
                            if (!ye(O)) {
                              e.next = 8;
                              break;
                            }
                            (t = w.COW_PROTOCOL_VAULT_RELAYER_ADDRESS[k]), (e.next = 12);
                            break;
                          case 8:
                            return (
                              (r = (0, V.WG)(
                                new Error('Invalid swap provider rates.'),
                                V.aD.APPROVAL,
                                !1
                              )),
                              K(r),
                              te({ txHash: void 0, loading: !1 }),
                              e.abrupt('return')
                            );
                          case 12:
                            if (
                              ((n = (0, $.sm)(s, O.srcDecimals, 0)),
                              (o = { spender: t, user: C, token: a, amount: n }),
                              (e.prev = 14),
                              !Oe)
                            ) {
                              e.next = 30;
                              break;
                            }
                            return (
                              (i = Math.floor(Date.now() / 1e3 + 3600).toString()),
                              (e.next = 19),
                              L(_e(_e({}, o), {}, { deadline: i }), { chainId: k })
                            );
                          case 19:
                            return (
                              (c = e.sent),
                              te(_e(_e({}, q), {}, { loading: !0 })),
                              (e.next = 23),
                              ae(c)
                            );
                          case 23:
                            (u = e.sent),
                              (l = (0, ke.splitSignature)(u)),
                              (d = ke.defaultAbiCoder.encode(
                                [
                                  'address',
                                  'address',
                                  'uint256',
                                  'uint256',
                                  'uint8',
                                  'bytes32',
                                  'bytes32',
                                ],
                                [o.user, o.spender, o.amount, i, l.v, l.r, l.s]
                              )),
                              de({
                                signature: d,
                                deadline: i,
                                amount: o.amount,
                                approvedToken: o.spender,
                              }),
                              te({ txHash: Ae.Z, loading: !1, success: !0 }),
                              (e.next = 43);
                            break;
                          case 30:
                            return (p = E(o, { chainId: k, amount: n })), (e.next = 33), N(p, k);
                          case 33:
                            return (
                              (m = e.sent),
                              te(_e(_e({}, q), {}, { loading: !0 })),
                              (e.next = 37),
                              oe(m)
                            );
                          case 37:
                            return (x = e.sent), (e.next = 40), x.wait(1);
                          case 40:
                            te({ txHash: x.hash, loading: !1, success: !0 }), K(void 0), Be();
                          case 43:
                            e.next = 50;
                            break;
                          case 45:
                            (e.prev = 45),
                              (e.t0 = e.catch(14)),
                              (f = (0, V.WG)(e.t0, V.aD.GAS_ESTIMATION, !1)),
                              K(f),
                              te({ txHash: void 0, loading: !1 });
                          case 50:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[14, 45]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Be = (0, i.useCallback)(
              (0, g.Z)(
                y().mark(function e() {
                  var t, r, n, o, s, i;
                  return y().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!be(O) || !O.optimalRateData.tokenTransferProxy) {
                            e.next = 13;
                            break;
                          }
                          return (
                            de(void 0),
                            te({ txHash: void 0, loading: !1, success: !1 }),
                            ee(!0),
                            (t = (0, l.VH)(k)),
                            (r = new je.A(t)),
                            (e.next = 8),
                            r.approvedAmount({
                              user: C,
                              token: a,
                              spender: O.optimalRateData.tokenTransferProxy,
                            })
                          );
                        case 8:
                          (n = e.sent), xe(n), ee(!1), (e.next = 24);
                          break;
                        case 13:
                          if (!ye(O)) {
                            e.next = 24;
                            break;
                          }
                          return (
                            de(void 0),
                            te({ txHash: void 0, loading: !1, success: !1 }),
                            ee(!0),
                            (o = (0, l.VH)(k)),
                            (s = new je.A(o)),
                            (e.next = 21),
                            s.approvedAmount({
                              user: C,
                              token: a,
                              spender: w.COW_PROTOCOL_VAULT_RELAYER_ADDRESS[k],
                            })
                          );
                        case 21:
                          (i = e.sent), xe(i), ee(!1);
                        case 24:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [k, ee, C, a, O, te]
            );
          return (
            (0, i.useEffect)(
              function () {
                C && Be();
              },
              [Be, C]
            ),
            (0, i.useEffect)(
              function () {
                var e = 0;
                be(O) && (e += Number(W.eB[we.UQ.withdrawAndSwitch].recommended)),
                  Te && !q.success && (e += Number(Pe.pQ)),
                  (0, _.Mg)(a) && (e += Number(W.eB[we.UQ.withdrawAndSwitch].recommended)),
                  J(e.toString()),
                  D(Te || (0, _.Mg)(a));
              },
              [Te, q, J, D]
            ),
            (0, fe.jsx)(Re.B, {
              mainTxState: Y,
              approvalTxState: q,
              isWrongNetwork: S,
              preparingTransactions: Q,
              handleAction: Ue,
              requiresAmount: !0,
              amount: s,
              handleApproval: function () {
                return Le();
              },
              requiresApproval: !v && Te,
              actionText: (0, fe.jsx)(o.cC, { id: 'vH2C/2' }),
              actionInProgressText: (0, fe.jsx)(o.cC, { id: 'JPHuMW' }),
              errorParams: {
                loading: !1,
                disabled: v || (!q.success && Te),
                content: (0, fe.jsx)(o.cC, { id: 'vH2C/2' }),
                handleClick: Ue,
              },
              fetchingData: b,
              blocked: v,
              tryPermit: ge,
            })
          );
        },
        Be = r(4730),
        Me = r(19485),
        Fe = r(61744),
        We = r(58771),
        He = r(33740),
        Ve = r(6571),
        ze = r(2734),
        Ge = r(73601),
        qe = r(69417),
        Ye = r(59334),
        Qe = r(57333),
        $e = r(35258),
        Xe = r(32867),
        Ke = r(45640),
        Je = r(10818),
        et = ['onChange'];
      function tt(e, t) {
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
      function rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tt(Object(r), !0).forEach(function (t) {
                (0, u.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var nt = i.forwardRef(function (e, t) {
          var r = e.onChange,
            n = (0, Be.Z)(e, et);
          return (0, fe.jsx)(
            Qe.Z,
            rt(
              rt({}, n),
              {},
              {
                getInputRef: t,
                onValueChange: function (t) {
                  t.value !== e.value && r({ target: { name: e.name, value: t.value || '' } });
                },
                thousandSeparator: !0,
                isNumericString: !0,
                allowNegative: !1,
              }
            )
          );
        }),
        ot = function (e) {
          var t,
            r = e.value,
            n = e.usdValue,
            u = e.onChange,
            l = e.disabled,
            d = e.disableInput,
            p = e.onSelect,
            m = e.assets,
            x = e.maxValue,
            f = e.forcedMaxValue,
            v = e.isMaxSelected,
            g = e.loading,
            b = void 0 !== g && g,
            y = e.chainId,
            j = e.selectedAsset,
            w = e.balanceTitle,
            S = e.showBalance,
            A = void 0 === S || S,
            I = (0, ze.Z)(),
            T = function (e) {
              p && p(e), u && u(''), U();
            },
            C = (0, $e.z)().erc20Service,
            Z = (0, i.useState)(!1),
            E = Z[0],
            N = Z[1],
            R = (0, i.useRef)(null),
            U = function () {
              N(!1), z();
            },
            _ = (0, i.useState)(m),
            L = _[0],
            B = _[1],
            M = (0, i.useState)(!1),
            F = M[0],
            W = M[1],
            H = (0, h.Y)(function (e) {
              return e.account;
            });
          (0, i.useEffect)(
            function () {
              B(m);
            },
            [m]
          );
          var V = m.filter(function (e) {
              return oe.x.includes(e.symbol);
            }),
            z = function () {
              B(m), W(!1);
            };
          return (0, fe.jsxs)(s.Z, {
            ref: R,
            sx: function (e) {
              return {
                border: '1px solid '.concat(e.palette.divider),
                borderRadius: '6px',
                overflow: 'hidden',
                px: 3,
                py: 2,
                width: '100%',
              };
            },
            children: [
              (0, fe.jsxs)(s.Z, {
                sx: { display: 'flex', alignItems: 'center' },
                children: [
                  b
                    ? (0, fe.jsx)(s.Z, {
                        sx: { flex: 1 },
                        children: (0, fe.jsx)(k.Z, { color: 'inherit', size: '16px' }),
                      })
                    : (0, fe.jsx)(Ge.ZP, {
                        sx: { flex: 1 },
                        placeholder: '0.00',
                        disabled: l || d,
                        value: r,
                        autoFocus: !0,
                        onChange: function (e) {
                          u && (Number(e.target.value) > Number(x) ? u('-1') : u(e.target.value));
                        },
                        inputProps: {
                          'aria-label': 'amount input',
                          style: {
                            width: '100%',
                            fontSize: '21px',
                            lineHeight: '28,01px',
                            padding: 0,
                            height: '28px',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                          },
                        },
                        inputComponent: nt,
                      }),
                  '' !== r &&
                    !d &&
                    (0, fe.jsx)(O.Z, {
                      sx: {
                        minWidth: 0,
                        p: 0,
                        left: 8,
                        zIndex: 1,
                        color: 'text.muted',
                        '&:hover': { color: 'text.secondary' },
                      },
                      onClick: function () {
                        u && u('');
                      },
                      disabled: l,
                      children: (0, fe.jsx)(He.Z, { height: 16 }),
                    }),
                  (0, fe.jsxs)(qe.Z, {
                    disableRipple: !0,
                    onClick: function () {
                      N(!0);
                    },
                    'data-cy': 'assetSelect',
                    sx: {
                      p: 0,
                      borderRadius: '6px',
                      transition: 'background-color 0.2s',
                      '&:hover': { backgroundColor: 'transparent' },
                    },
                    endIcon: (0, fe.jsx)(Ve.Z, {}),
                    children: [
                      (0, fe.jsx)(Ke.UD, {
                        symbol: j.symbol,
                        logoURI: j.logoURI,
                        sx: { mr: 2, ml: 3, fontSize: '24px' },
                      }),
                      (0, fe.jsx)(a.Z, {
                        'data-cy': 'assetsSelectedOption_'.concat(j.symbol.toUpperCase()),
                        variant: 'main16',
                        color: 'text.primary',
                        sx: { fontWeight: 500 },
                        children: j.symbol,
                      }),
                      (null === (t = j.extensions) || void 0 === t ? void 0 : t.isUserCustom) &&
                        (0, fe.jsx)(D.Z, {
                          sx: { fontSize: 16, ml: 1 },
                          color: 'warning',
                          children: (0, fe.jsx)(We.Z, {}),
                        }),
                    ],
                  }),
                  (0, fe.jsx)(c.P, {
                    BackdropProps: { style: { backgroundColor: 'transparent' } },
                    open: E,
                    setOpen: N,
                    contentMaxWidth: 420,
                    contentHeight: 680,
                    children: (0, fe.jsxs)(s.Z, {
                      sx: { display: 'flex', flexDirection: 'column', height: '100%' },
                      children: [
                        (0, fe.jsx)(a.Z, {
                          variant: 'main16',
                          sx: { fontSize: 18, fontWeight: 600, mb: 3 },
                          children: (0, fe.jsx)(o.cC, { id: '0RrIzN' }),
                        }),
                        (0, fe.jsxs)(s.Z, {
                          sx: {
                            borderBottom: '1px solid '.concat(I.palette.divider),
                            position: 'sticky',
                            top: 0,
                            zIndex: 2,
                            mb: 3,
                            pb: 3,
                            backgroundColor: I.palette.background.paper,
                            boxShadow: '0px 4px 6px -6px rgba(0, 0, 0, 0.1)',
                            marginTop: -3,
                            paddingTop: 3,
                          },
                          children: [
                            (0, fe.jsx)(Je.M, {
                              onSearchTermChange: function (e) {
                                var t = e.trim().toLowerCase(),
                                  r = m.filter(function (e) {
                                    return (
                                      e.symbol.toLowerCase().includes(t) ||
                                      e.name.toLowerCase().includes(t) ||
                                      e.address.toLowerCase() === t
                                    );
                                  });
                                0 === r.length && (0, Me.isAddress)(e)
                                  ? (W(!0),
                                    Promise.all([C.getTokenInfo(e, y), C.getBalance(e, H, y)])
                                      .then(function (e) {
                                        var t = (0, P.Z)(e, 2),
                                          r = t[0],
                                          n = t[1],
                                          o = rt(
                                            {
                                              chainId: y,
                                              balance: (0, Fe.formatUnits)(n, r.decimals),
                                              extensions: { isUserCustom: !0 },
                                            },
                                            r
                                          );
                                        B([o]);
                                      })
                                      .catch(function () {
                                        return B([]);
                                      })
                                      .finally(function () {
                                        return W(!1);
                                      }))
                                  : B(r);
                              },
                              placeholder: 'Search name or paste address',
                              disableFocus: !0,
                            }),
                            m.length > 3 &&
                              (0, fe.jsx)(s.Z, {
                                sx: {
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'flex-start',
                                  flexWrap: 'wrap',
                                  mt: 2.5,
                                  gap: 1.5,
                                },
                                children: V.map(function (e) {
                                  return (0, fe.jsxs)(
                                    s.Z,
                                    {
                                      sx: {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        p: 1,
                                        borderRadius: '16px',
                                        border: '1px solid',
                                        borderColor: I.palette.divider,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': { backgroundColor: I.palette.divider },
                                      },
                                      onClick: function () {
                                        return T(e);
                                      },
                                      children: [
                                        (0, fe.jsx)(Ke.UD, {
                                          logoURI: e.logoURI,
                                          symbol: e.symbol,
                                          sx: { width: 24, height: 24, mr: 1 },
                                        }),
                                        (0, fe.jsx)(a.Z, {
                                          variant: 'main14',
                                          color: 'text.primary',
                                          sx: { mr: 1 },
                                          children: e.symbol,
                                        }),
                                      ],
                                    },
                                    e.symbol
                                  );
                                }),
                              }),
                          ],
                        }),
                        (0, fe.jsx)(s.Z, {
                          sx: {
                            flexGrow: 1,
                            overflowY: 'auto',
                            maxHeight: 'calc(600px - 180px)',
                            '&::-webkit-scrollbar': { width: '8px' },
                            '&::-webkit-scrollbar-track': { background: 'transparent' },
                            '&::-webkit-scrollbar-thumb': {
                              background: I.palette.divider,
                              borderRadius: '4px',
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                              background: I.palette.action.hover,
                            },
                          },
                          children: F
                            ? (0, fe.jsx)(s.Z, {
                                sx: {
                                  maxHeight: '220px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  minHeight: '80px',
                                },
                                children: (0, fe.jsx)(k.Z, { sx: { mx: 'auto', my: 'auto' } }),
                              })
                            : L.length > 0
                              ? L.map(function (e) {
                                  var t;
                                  return (0, fe.jsxs)(
                                    me.Z,
                                    {
                                      value: e.symbol,
                                      'data-cy': 'assetsSelectOption_'.concat(
                                        e.symbol.toUpperCase()
                                      ),
                                      sx: {
                                        py: 1.5,
                                        px: 3,
                                        borderRadius: '8px',
                                        my: 0.5,
                                        '&:hover': {
                                          backgroundColor:
                                            'dark' === I.palette.mode
                                              ? 'rgba(255, 255, 255, 0.05)'
                                              : 'rgba(0, 0, 0, 0.03)',
                                        },
                                      },
                                      onClick: function () {
                                        return T(e);
                                      },
                                      children: [
                                        (0, fe.jsx)(Ke.UD, {
                                          symbol: e.symbol,
                                          logoURI: e.logoURI,
                                          sx: { mr: 2, width: 28, height: 28 },
                                        }),
                                        (0, fe.jsx)(Ye.Z, {
                                          sx: { flexGrow: 0 },
                                          primary: (0, fe.jsx)(a.Z, {
                                            variant: 'main16',
                                            fontWeight: 500,
                                            children: e.symbol,
                                          }),
                                        }),
                                        (null === (t = e.extensions) || void 0 === t
                                          ? void 0
                                          : t.isUserCustom) &&
                                          (0, fe.jsx)(D.Z, {
                                            sx: { fontSize: 16, ml: 1 },
                                            color: 'warning',
                                            children: (0, fe.jsx)(We.Z, {}),
                                          }),
                                        e.balance &&
                                          (0, fe.jsx)(Xe.B, {
                                            sx: { ml: 'auto' },
                                            value: e.balance,
                                            compact: !0,
                                          }),
                                      ],
                                    },
                                    e.symbol
                                  );
                                })
                              : (0, fe.jsx)(a.Z, {
                                  variant: 'main14',
                                  color: 'text.primary',
                                  sx: { width: 'auto', textAlign: 'center', m: 4 },
                                  children: (0, fe.jsx)(o.cC, { id: 'Wjmqs2' }),
                                }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, fe.jsxs)(s.Z, {
                sx: { display: 'flex', alignItems: 'center', height: '20px', mt: 0.5 },
                children: [
                  b
                    ? (0, fe.jsx)(s.Z, { sx: { flex: 1 } })
                    : (0, fe.jsx)(Xe.B, {
                        value: isNaN(Number(n)) ? 0 : Number(n),
                        compact: !0,
                        symbol: 'USD',
                        variant: 'secondary12',
                        color: 'text.muted',
                        symbolsColor: 'text.muted',
                        flexGrow: 1,
                      }),
                  A &&
                    j.balance &&
                    (0, fe.jsxs)(fe.Fragment, {
                      children: [
                        (0, fe.jsxs)(a.Z, {
                          component: 'div',
                          variant: 'secondary12',
                          color: 'text.secondary',
                          children: [
                            (0, fe.jsx)(o.cC, { id: 'J/hVSQ', values: { 0: w || 'Balance' } }),
                            (0, fe.jsx)(Xe.B, {
                              value: j.balance,
                              compact: !0,
                              variant: 'secondary12',
                              color: 'text.secondary',
                              symbolsColor: 'text.disabled',
                              sx: { ml: 1 },
                            }),
                          ],
                        }),
                        !d &&
                          (0, fe.jsx)(qe.Z, {
                            size: 'small',
                            sx: { minWidth: 0, ml: '7px', p: 0 },
                            onClick: function () {
                              u && u(f || '-1');
                            },
                            disabled: l || v || (!!f && Number(j.balance) < Number(f)),
                            children: (0, fe.jsx)(o.cC, { id: 'CK1KXz' }),
                          }),
                      ],
                    }),
                ],
              }),
            ],
          });
        },
        st = {
          NoLiquidity: 'No liquidity found for the given amount and asset pair.',
          NoRoutesFound: 'No routes found with enough liquidity.',
          SellAmountDoesNotCoverFee: 'Sell amount is too small to cover the fee.',
        },
        at = [
          {
            regex: /^Source and destination tokens cannot be the same$/,
            message: 'Source and destination tokens cannot be the same',
          },
        ];
      var it = function (e) {
          var t,
            r,
            n,
            o,
            s = e.error;
          s instanceof Error &&
            ((n = (0, $.aE)(s.message)) ||
              (o = (function (e) {
                var t;
                return e in st
                  ? st[e]
                  : null ===
                        (t = at.find(function (t) {
                          return t.regex.test(e);
                        })) || void 0 === t
                    ? void 0
                    : t.message;
              })(s.message)));
          var i =
            s instanceof Error
              ? null !== (t = null !== (r = n) && void 0 !== r ? r : o) && void 0 !== t
                ? t
                : s.message
              : 'There was an issue fetching rates.';
          return (0, fe.jsx)(C.v, {
            severity: 'error',
            icon: !1,
            sx: { mt: 4 },
            children: (0, fe.jsx)(a.Z, { variant: 'caption', children: i }),
          });
        },
        ct = function (e) {
          var t = e.ratesError,
            r = e.balance,
            n = e.inputAmount;
          return t
            ? (0, fe.jsx)(it, { error: t })
            : Number(n) > Number(r)
              ? (0, fe.jsx)(C.v, {
                  severity: 'error',
                  sx: { mt: 4 },
                  icon: !1,
                  children: (0, fe.jsx)(a.Z, {
                    variant: 'caption',
                    children: (0, fe.jsx)(o.cC, { id: 'aX31hk' }),
                  }),
                })
              : null;
        },
        ut = r(58364),
        lt = r(47739),
        dt = r(12523),
        pt = function (e) {
          var t = e.rates,
            r = e.srcSymbol,
            n = e.destSymbol,
            c = e.showPriceImpact,
            u = void 0 === c || c,
            l = (0, i.useState)(!1),
            d = l[0],
            p = l[1],
            m = (0, i.useMemo)(
              function () {
                var e = (0, j.pV)(t.srcAmount, t.srcDecimals),
                  r = (0, j.pV)(t.destAmount, t.destDecimals);
                return d ? e.div(r) : r.div(e);
              },
              [d, t.srcAmount, t.destAmount]
            ),
            x = (0, i.useMemo)(
              function () {
                var e = (0, j.hE)(t.srcUSD);
                return (0, j.hE)(t.destUSD).minus(e).div(e);
              },
              [t.srcUSD, t.destUSD]
            );
          return (0, fe.jsxs)(s.Z, {
            sx: { display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 6 },
            children: [
              (0, fe.jsx)(Xe.B, {
                visibleDecimals: 0,
                variant: 'main12',
                symbol: d ? n : r,
                symbolsVariant: 'secondary12',
                symbolsColor: 'text.secondary',
                value: '1',
              }),
              (0, fe.jsx)(lt.Z, {
                onClick: function () {
                  return p(function (e) {
                    return !e;
                  });
                },
                disableTouchRipple: !0,
                sx: { mx: 1 },
                children: (0, fe.jsx)(D.Z, {
                  sx: { fontSize: '12px' },
                  children: (0, fe.jsx)(ut.Z, {}),
                }),
              }),
              (0, fe.jsx)(Xe.B, {
                variant: 'main12',
                symbol: d ? r : n,
                symbolsVariant: 'secondary12',
                symbolsColor: 'text.secondary',
                value: m.toString(),
                visibleDecimals: 3,
              }),
              u &&
                (0, fe.jsx)(dt.y, {
                  title: (0, fe.jsx)(a.Z, {
                    variant: 'caption',
                    children: (0, fe.jsx)(o.cC, { id: 'kH6wUX' }),
                  }),
                  children: (0, fe.jsxs)(s.Z, {
                    sx: { display: 'flex', cursor: 'pointer' },
                    children: [
                      (0, fe.jsx)(a.Z, { variant: 'caption', children: '(' }),
                      (0, fe.jsx)(Xe.B, { variant: 'caption', value: x.toString(), percent: !0 }),
                      (0, fe.jsx)(a.Z, { variant: 'caption', children: ')' }),
                    ],
                  }),
                }),
            ],
          });
        },
        mt = r(22659),
        xt = r(35294),
        ft = r(591),
        ht = r(47120),
        vt = r(87109),
        gt = ['0.10', '0.50', '1.00'],
        bt = function (e) {
          var t = e.slippage,
            r = e.setSlippage,
            n = e.slippageValidation,
            c = (0, i.useState)(),
            u = c[0],
            l = c[1],
            d = (0, i.useState)(!1),
            p = d[0],
            m = d[1],
            x = Boolean(u);
          return (0, fe.jsxs)(s.Z, {
            sx: { display: 'flex', alignItems: 'center', gap: 1 },
            children: [
              (0, fe.jsxs)(a.Z, {
                variant: 'caption',
                color: 'text.secondary',
                children: [
                  (0, fe.jsx)(o.cC, { id: 'CMHmbm' }),
                  (0, fe.jsxs)(xt.Z, {
                    sx: { maxWidth: '330px' },
                    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                    transformOrigin: { vertical: 'top', horizontal: 'right' },
                    anchorEl: u,
                    id: 'switch-slippage-selector',
                    MenuListProps: {
                      'aria-labelledby': 'switch-slippage-selector-button',
                      sx: { py: 3, px: 4 },
                    },
                    open: x,
                    onClose: function () {
                      l(null);
                    },
                    children: [
                      (0, fe.jsx)(a.Z, {
                        variant: 'subheader2',
                        mb: 5,
                        children: (0, fe.jsx)(o.cC, { id: 'SZRUQ4' }),
                      }),
                      (0, fe.jsxs)(s.Z, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'row',
                          gap: '8px',
                        },
                        children: [
                          (0, fe.jsx)(ft.Z, {
                            sx: {
                              backgroundColor: 'background.surface',
                              borderRadius: '6px',
                              borderColor: 'background.surface',
                            },
                            exclusive: !0,
                            onChange: function (e, t) {
                              return (function (e) {
                                r(e), m(!1);
                              })(t);
                            },
                            children: gt.map(function (e) {
                              return (0, fe.jsx)(
                                ht.Z,
                                {
                                  sx: {
                                    borderRadius: 1,
                                    py: 1,
                                    px: 2,
                                    borderWidth: 2,
                                    backgroundColor:
                                      e !== t || p ? 'transparent' : 'background.paper',
                                  },
                                  value: e,
                                  children: (0, fe.jsx)(Xe.B, {
                                    value: e,
                                    visibleDecimals: 2,
                                    symbol: '%',
                                    variant: 'subheader2',
                                    color: 'primary.main',
                                    symbolsColor: 'primary.main',
                                  }),
                                },
                                e
                              );
                            }),
                          }),
                          (0, fe.jsx)(Ge.ZP, {
                            type: 'percent',
                            value: p ? t : '',
                            onChange: function (e) {
                              r(e.target.value), m(!0);
                            },
                            placeholder: 'Custom',
                            endAdornment: (0, fe.jsx)(vt.Z, {
                              position: 'end',
                              children: (0, fe.jsx)(a.Z, {
                                variant: 'caption',
                                color: 'text.muted',
                                children: '%',
                              }),
                            }),
                            sx: {
                              fontSize: '12px',
                              px: 2,
                              width: '120px',
                              border: 1,
                              borderWidth: '1px',
                              backgroundColor: 'background.surface',
                              borderColor: n
                                ? ''.concat(n.severity, '.main')
                                : 'background.surface',
                              borderRadius: '4px',
                            },
                          }),
                        ],
                      }),
                      n &&
                        (0, fe.jsx)(C.v, {
                          sx: { mb: 0, mt: 2 },
                          severity: n.severity,
                          children: n.message,
                        }),
                    ],
                  }),
                ],
              }),
              (0, fe.jsx)(Xe.B, {
                variant: 'caption',
                color: n ? ''.concat(n.severity, '.main') : 'text.primary',
                value: t,
                visibleDecimals: 2,
                symbol: '%',
              }),
              (0, fe.jsx)(qe.Z, {
                id: 'switch-slippage-selector-button',
                sx: { padding: 0, minWidth: 0 },
                onClick: function (e) {
                  l(e.currentTarget);
                },
                'aria-controls': 'switch-slippage-selector',
                children: (0, fe.jsx)(D.Z, {
                  sx: { fontSize: '16px' },
                  children: (0, fe.jsx)(mt.Z, {}),
                }),
              }),
            ],
          });
        },
        yt = r(67720),
        jt = r(49212),
        wt = r(73695),
        St = r(61933),
        kt = r(56365),
        Ot = r(5506),
        Dt = function () {
          return (0, fe.jsx)(D.Z, {
            sx: { ml: 2, fontWeight: 800, fontSize: '20px', color: 'text.primary' },
            children: (0, fe.jsx)(kt.Z, {}),
          });
        },
        At = function (e) {
          var t = e.txHash,
            r = e.children,
            i = e.hideTx,
            c = e.customExplorerLink,
            u = e.customExplorerLinkText,
            l = (0, n.vR)(),
            d = l.close,
            p = l.mainTxState,
            m = (0, h.Y)(function (e) {
              return e.currentNetworkConfig;
            });
          return (0, fe.jsxs)(fe.Fragment, {
            children: [
              (0, fe.jsxs)(s.Z, {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                children: [
                  (0, fe.jsx)(s.Z, {
                    sx: {
                      width: '48px',
                      height: '48px',
                      bgcolor: 'success.200',
                      borderRadius: '50%',
                      mt: 14,
                      mx: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, fe.jsx)(D.Z, {
                      sx: { fontSize: '32px', color: 'error.main' },
                      children: (0, fe.jsx)(Ot.Z, {}),
                    }),
                  }),
                  (0, fe.jsx)(a.Z, {
                    sx: { mt: 4 },
                    variant: 'h2',
                    children: (0, fe.jsx)(o.cC, { id: '8ss7VF' }),
                  }),
                  r,
                ],
              }),
              (0, fe.jsxs)(s.Z, {
                sx: { display: 'flex', flexDirection: 'column' },
                children: [
                  i
                    ? (0, fe.jsx)('br', {})
                    : (0, fe.jsxs)(qe.Z, {
                        variant: 'outlined',
                        size: 'large',
                        sx: {
                          borderRadius: 1,
                          borderColor: 'divider',
                          borderWidth: 1,
                          mt: 6,
                          mb: 2,
                        },
                        href: c || m.explorerLinkBuilder({ tx: t || p.txHash }),
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: [u || (0, fe.jsx)(o.cC, { id: 'W1SSoD' }), (0, fe.jsx)(Dt, {})],
                      }),
                  (0, fe.jsx)(qe.Z, {
                    onClick: d,
                    variant: 'contained',
                    size: 'large',
                    sx: { minHeight: '50px' },
                    'data-cy': 'closeButton',
                    children: (0, fe.jsx)(o.cC, { id: 'mwdzil' }),
                  }),
                ],
              }),
            ],
          });
        },
        It = r(60386),
        Tt = r(15186),
        Ct = function () {
          return (0, fe.jsx)(D.Z, {
            sx: { ml: 2, fontWeight: 800, fontSize: '20px', color: 'text.primary' },
            children: (0, fe.jsx)(kt.Z, {}),
          });
        },
        Zt = function (e) {
          var t = e.txHash,
            r = e.children,
            i = e.hideTx,
            c = e.customExplorerLink,
            u = e.customExplorerLinkText,
            l = (0, n.vR)(),
            d = l.close,
            p = l.mainTxState,
            m = (0, h.Y)(function (e) {
              return e.currentNetworkConfig;
            });
          return (0, fe.jsxs)(fe.Fragment, {
            children: [
              (0, fe.jsxs)(s.Z, {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                children: [
                  (0, fe.jsx)(s.Z, {
                    sx: {
                      width: '48px',
                      height: '48px',
                      bgcolor: 'success.200',
                      borderRadius: '50%',
                      mt: 14,
                      mx: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, fe.jsx)(D.Z, {
                      sx: { fontSize: '32px' },
                      children: (0, fe.jsx)(Tt.Z, {}),
                    }),
                  }),
                  (0, fe.jsx)(a.Z, {
                    sx: { mt: 4 },
                    variant: 'h2',
                    children: (0, fe.jsx)(o.cC, { id: '/LCAwL' }),
                  }),
                  r,
                ],
              }),
              (0, fe.jsxs)(s.Z, {
                sx: { display: 'flex', flexDirection: 'column' },
                children: [
                  i
                    ? (0, fe.jsx)('br', {})
                    : (0, fe.jsxs)(qe.Z, {
                        disabled: !t,
                        variant: 'outlined',
                        size: 'large',
                        sx: {
                          borderRadius: 1,
                          borderColor: 'divider',
                          borderWidth: 1,
                          mt: 6,
                          mb: 2,
                        },
                        href: c || m.explorerLinkBuilder({ tx: t || p.txHash }),
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: [
                          u || (0, fe.jsx)(o.cC, { id: 'W1SSoD' }),
                          t && (0, fe.jsx)(Ct, {}),
                        ],
                      }),
                  (0, fe.jsx)(qe.Z, {
                    onClick: d,
                    variant: 'contained',
                    size: 'large',
                    sx: { minHeight: '50px' },
                    'data-cy': 'closeButton',
                    children: (0, fe.jsx)(o.cC, { id: 'mwdzil' }),
                  }),
                ],
              }),
            ],
          });
        };
      var Et,
        Nt = function (e) {
          var t = e.txHash,
            r = e.amount,
            n = e.symbol,
            c = e.iconSymbol,
            u = e.outAmount,
            l = e.outSymbol,
            d = e.outIconSymbol,
            p = e.iconUri,
            m = e.outIconUri,
            x = e.provider,
            f = e.chainId,
            h = e.destDecimals,
            v = e.srcDecimals,
            b = te({ chainId: f }),
            w = (0, wt.V)(),
            S = w.trackOrder,
            O = w.setHasActiveOrders,
            D = (0, i.useState)('open'),
            A = D[0],
            I = D[1],
            T = (0, i.useState)(void 0),
            C = T[0],
            Z = T[1],
            E = (0, i.useState)(r),
            N = E[0],
            R = E[1],
            P = (0, i.useState)(u),
            U = P[0],
            L = P[1],
            B = St.m5[f].explorerLink;
          (0, i.useEffect)(
            function () {
              'cowprotocol' === b && t ? S(t, f) : 'cowprotocol' === b && 'open' === A && O(!0);
            },
            [t, f, b, S, O]
          );
          var M = (0, i.useRef)(null),
            F = (function () {
              var e = (0, g.Z)(
                y().mark(function e() {
                  return y().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          'cowprotocol' === b &&
                            t &&
                            (0, _.co)(t, f)
                              .then(function (e) {
                                (0, _.cZ)(e.status)
                                  ? (I('succeed'),
                                    Z(
                                      Se.O$.from(e.executedBuyAmount)
                                        .sub(Se.O$.from((0, ae.v)(u, h)))
                                        .toBigInt()
                                    ),
                                    L((0, j.Fv)(e.executedBuyAmount, h)),
                                    R((0, j.Fv)(e.executedSellAmount, v)),
                                    M.current && clearInterval(M.current))
                                  : (0, _.ec)(e.status)
                                    ? (I('failed'), M.current && clearInterval(M.current))
                                    : (0, _.j_)(e.status) && I('open');
                              })
                              .catch(console.error);
                        case 1:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (0, i.useEffect)(
            function () {
              t &&
                'cowprotocol' === b &&
                f &&
                h &&
                null === M.current &&
                (M.current = setInterval(F, 1e4));
            },
            [t, f, b, h]
          );
          var W = (0, i.useMemo)(
              function () {
                return 'cowprotocol' === x && 'open' === A
                  ? Zt
                  : 'cowprotocol' === x && 'failed' === A
                    ? At
                    : It.R;
              },
              [A, x]
            ),
            H = C ? Number((0, j.Fv)(C.toString(), h)) : void 0,
            V =
              H && H > 0.01
                ? 'Includes +'
                    .concat(H.toLocaleString(void 0, { maximumFractionDigits: 2 }), ' ')
                    .concat(l, ' Surplus')
                : void 0,
            z = (0, i.useMemo)(
              function () {
                return 'cowprotocol' === x ? (0, _.kN)(f, t) : ''.concat(B, '/tx/').concat(t);
              },
              [x, f, t]
            ),
            G = (0, i.useMemo)(
              function () {
                return 'cowprotocol' === x
                  ? t
                    ? (0, fe.jsx)(fe.Fragment, { children: 'View details' })
                    : (0, fe.jsxs)(fe.Fragment, {
                        children: [
                          (0, fe.jsx)(k.Z, {
                            size: 20,
                            sx: {
                              mr: 1,
                              color: function (e) {
                                return e.palette.grey[400];
                              },
                            },
                          }),
                          'Details will be available soon',
                        ],
                      })
                  : void 0;
              },
              [x, t]
            );
          return (0, fe.jsxs)(W, {
            txHash: t,
            customExplorerLink: z,
            customExplorerLinkText: G,
            children: [
              (0, fe.jsx)(s.Z, {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 2,
                mb: 3,
                children: (0, fe.jsx)(a.Z, {
                  color: 'text.secondary',
                  children:
                    'cowprotocol' === x
                      ? (0, fe.jsx)(fe.Fragment, {
                          children:
                            'open' === A
                              ? (0, fe.jsx)(o.cC, { id: 'CGiscJ' })
                              : 'failed' === A
                                ? (0, fe.jsx)(o.cC, { id: 'Y46iXX' })
                                : (0, fe.jsx)(o.cC, { id: 'qT4Lfg' }),
                        })
                      : (0, fe.jsx)(o.cC, { id: 'qT4Lfg' }),
                }),
              }),
              (0, fe.jsxs)(s.Z, {
                sx: {
                  background: 'background.default',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  p: 3,
                  mb: 4,
                  width: '80%',
                },
                children: [
                  (0, fe.jsxs)(s.Z, {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                    children: [
                      (0, fe.jsx)(a.Z, {
                        color: 'text.secondary',
                        children:
                          'cowprotocol' != x || (('open' != A || (0, _.Mg)(n)) && 'failed' != A)
                            ? 'Sent'
                            : 'Send',
                      }),
                      (0, fe.jsxs)(s.Z, {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        children: [
                          (0, fe.jsx)(Ke.UD, { symbol: c, logoURI: p, sx: { fontSize: 20 } }),
                          (0, fe.jsxs)(a.Z, {
                            fontWeight: 600,
                            children: [
                              Number(N).toLocaleString(void 0, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: Number(N) < 0.01 ? 4 : 2,
                              }),
                              ' ',
                            ],
                          }),
                          (0, fe.jsx)(a.Z, {
                            fontWeight: 600,
                            sx: { color: 'text.secondary' },
                            children: n,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, fe.jsx)(yt.Z, { sx: { my: 1 } }),
                  (0, fe.jsxs)(s.Z, {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 0.5,
                    children: [
                      (0, fe.jsx)(a.Z, {
                        color: 'text.secondary',
                        children:
                          'cowprotocol' != x || ('open' != A && 'failed' != A)
                            ? 'Received'
                            : 'Receive',
                      }),
                      (0, fe.jsxs)(s.Z, {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        children: [
                          (0, fe.jsx)(Ke.UD, { symbol: d, logoURI: m, sx: { fontSize: 20 } }),
                          (0, fe.jsx)(a.Z, {
                            fontWeight: 600,
                            children: Number(U).toLocaleString(void 0, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: Number(U) < 0.01 ? 4 : 2,
                            }),
                          }),
                          (0, fe.jsx)(a.Z, {
                            fontWeight: 600,
                            sx: { color: 'text.secondary' },
                            children: l,
                          }),
                        ],
                      }),
                    ],
                  }),
                  V &&
                    (0, fe.jsx)(a.Z, {
                      variant: 'helperText',
                      fontWeight: 500,
                      sx: { float: 'right', color: 'text.secondary' },
                      mt: 0.5,
                      children: V,
                    }),
                ],
              }),
            ],
          });
        };
      !(function (e) {
        (e.ERROR = 'error'), (e.WARNING = 'warning');
      })(Et || (Et = {}));
      function Rt(e, t) {
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
      function Pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Rt(Object(r), !0).forEach(function (t) {
                (0, u.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Rt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Ut = function (e) {
          var t,
            r = oe.n.tokens,
            n = localStorage.getItem('customTokens');
          n && (r = r.concat(JSON.parse(n)));
          var o = r.map(function (e) {
              return Pt(Pt({}, e), {}, { balance: '0' });
            }),
            s = null !== (t = (0, l.Mo)(e).underlyingChainId) && void 0 !== t ? t : e;
          return o.filter(function (e) {
            return e.chainId === s;
          });
        },
        _t = function (e) {
          var t,
            r,
            c,
            u = e.showSwitchInputAndOutputAssetsButton,
            d = void 0 === u || u,
            p = e.showTitle,
            b = void 0 === p || p,
            P = e.forcedDefaultInputToken,
            U = e.forcedChainId,
            L = e.forcedDefaultOutputToken,
            M = e.supportedNetworks,
            F = e.switchDetails,
            W = e.inputBalanceTitle,
            H = e.outputBalanceTitle,
            V = e.initialFromTokens,
            q = e.showChangeNetworkWarning,
            Y = void 0 === q || q,
            Q = (0, i.useState)('0.10'),
            $ = Q[0],
            X = Q[1],
            K = (0, i.useState)(''),
            ee = K[0],
            oe = K[1],
            le = (0, i.useState)(''),
            de = le[0],
            pe = le[1],
            me = (0, n.vR)(),
            xe = me.mainTxState,
            he = me.gasLimit,
            ve = me.txError,
            be = me.setTxError,
            je = me.close,
            we = (0, h.Y)(function (e) {
              return e.account;
            }),
            Se = (0, f.Z)(),
            ke = Se.readOnlyModeAddress,
            Oe = Se.chainId,
            De = l.ei[l.el.proto_mainnet_v3],
            Ae = (0, i.useState)(function () {
              return m.find(function (e) {
                return e.chainId === U;
              })
                ? U
                : De.chainId;
            }),
            Ie = Ae[0],
            Te = Ae[1],
            Ce = te({ chainId: Ie }),
            Ze = (0, i.useState)('paraswap' == Ce),
            Ee = Ze[0],
            Ne = Ze[1],
            Re = (0, l.Mo)(Ie),
            Pe = (0, re.Q)(Ie),
            Ue = (function (e, t) {
              try {
                if ('cowprotocol' === t) return;
                var r = Number(e);
                return Number.isNaN(r)
                  ? { message: 'Invalid slippage', severity: Et.ERROR }
                  : r > 30
                    ? { message: 'Slippage must be lower 30%', severity: Et.ERROR }
                    : r < 0
                      ? { message: 'Slippage must be positive', severity: Et.ERROR }
                      : r > 10
                        ? { message: 'High slippage', severity: Et.WARNING }
                        : r < 0.1
                          ? {
                              message: 'Slippage lower than 0.1% may result in failed transactions',
                              severity: Et.WARNING,
                            }
                          : void 0;
              } catch (n) {
                return { message: 'Invalid slippage', severity: Et.ERROR };
              }
            })($, Ce),
            _e = Ue && Ue.severity === Et.ERROR ? 0 : Number($) / 100,
            Be = (0, i.useState)(V),
            Me = Be[0],
            Fe = Be[1],
            We = (0, E.h)(Me, Ie, we),
            He = We.data,
            Ve = We.refetch,
            ze = (0, i.useState)(!1),
            Ge = ze[0],
            qe = ze[1];
          (0, i.useEffect)(
            function () {
              try {
                we &&
                  Oe &&
                  (0, B.V)(z.g, { chainId: Oe }).then(function (e) {
                    (0, Z.k)(we, e).then(function (e) {
                      qe(e);
                    });
                  });
              } catch (e) {
                console.error(e);
              }
            },
            [we, Oe]
          );
          var Ye = (0, i.useMemo)(
              function () {
                return (0, I.debounce)(function (e) {
                  pe(e);
                }, 300);
              },
              [pe]
            ),
            Qe = (0, A.NL)(),
            $e = (function () {
              var e = (0, g.Z)(
                y().mark(function e(t) {
                  var r, n, o;
                  return y().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          Qe.setQueryData(
                            R.B.tokensBalance(null !== He && void 0 !== He ? He : [], Ie, we),
                            function (e) {
                              return e
                                ? [].concat((0, v.Z)(e), [t]).sort(function (e, t) {
                                    return Number(t.balance) - Number(e.balance);
                                  })
                                : [t];
                            }
                          ),
                            (r = localStorage.getItem('customTokens')),
                            (n = {
                              address: t.address,
                              symbol: t.symbol,
                              decimals: t.decimals,
                              chainId: t.chainId,
                              name: t.name,
                              logoURI: t.logoURI,
                              extensions: { isUserCustom: !0 },
                            }),
                            r
                              ? ((o = JSON.parse(r)).push(n),
                                localStorage.setItem('customTokens', JSON.stringify(o)))
                              : localStorage.setItem('customTokens', JSON.stringify([n]));
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Xe = (0, i.useMemo)(
              function () {
                var e,
                  t,
                  r = P,
                  n = L,
                  o = He || Me,
                  s = He || Me;
                return (
                  r ||
                    (r = o.find(function (e) {
                      var t;
                      return (
                        ('0' !== e.balance ||
                          (null === (t = e.extensions) || void 0 === t ? void 0 : t.isNative)) &&
                        'GHO' !== e.symbol
                      );
                    })),
                  n ||
                    (n = s.find(function (e) {
                      return 'GHO' == e.symbol;
                    })),
                  {
                    defaultInputToken: null !== (e = r) && void 0 !== e ? e : o[0],
                    defaultOutputToken: null !== (t = n) && void 0 !== t ? t : s[1],
                  }
                );
              },
              [He, Me]
            ),
            Ke = Xe.defaultInputToken,
            Je = Xe.defaultOutputToken,
            et = (0, i.useState)(null !== P && void 0 !== P ? P : Ke),
            tt = et[0],
            rt = et[1],
            nt = (0, i.useState)(null !== L && void 0 !== L ? L : Je),
            st = nt[0],
            at = nt[1];
          (0, i.useEffect)(
            function () {
              rt(Ke);
            },
            [Ke]
          ),
            (0, i.useEffect)(
              function () {
                at(Je);
              },
              [Je]
            );
          var it = (function (e) {
              var t = e.chainId,
                r = e.amount,
                n = e.srcToken,
                o = e.destToken,
                s = e.user,
                a = e.inputSymbol,
                i = e.outputSymbol,
                c = e.srcDecimals,
                u = e.destDecimals,
                l = e.isTxSuccess,
                d = te({ chainId: t });
              return (0, N.a)({
                queryFn: (function () {
                  var e = (0, g.Z)(
                    y().mark(function e() {
                      return y().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (d) {
                                e.next = 2;
                                break;
                              }
                              throw new Error(
                                'No swap provider found in the selected chain for this pair'
                              );
                            case 2:
                              if (n !== o) {
                                e.next = 4;
                                break;
                              }
                              throw new Error('Source and destination tokens cannot be the same');
                            case 4:
                              (e.t0 = d),
                                (e.next =
                                  'cowprotocol' === e.t0 ? 7 : 'paraswap' === e.t0 ? 10 : 13);
                              break;
                            case 7:
                              return (
                                (e.next = 9),
                                G({
                                  chainId: t,
                                  amount: r,
                                  srcToken: n,
                                  destToken: o,
                                  user: s,
                                  srcDecimals: c,
                                  destDecimals: u,
                                  inputSymbol: a,
                                  outputSymbol: i,
                                })
                              );
                            case 9:
                            case 12:
                              return e.abrupt('return', e.sent);
                            case 10:
                              return (
                                (e.next = 12),
                                J({
                                  chainId: t,
                                  amount: r,
                                  srcToken: n,
                                  destToken: o,
                                  user: s,
                                  srcDecimals: c,
                                  destDecimals: u,
                                })
                              );
                            case 13:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
                queryKey: R.B.cowProtocolRates(t, r, n, o, s),
                enabled: '0' !== r && !l,
                retry: 0,
                throwOnError: !1,
                refetchOnWindowFocus: function (e) {
                  return !e.state.error;
                },
              });
            })({
              chainId: Ie,
              amount: '' === de ? '0' : (0, j.pV)(de, -1 * tt.decimals).toFixed(0),
              srcToken: tt.address,
              srcDecimals: tt.decimals,
              destToken: st.address,
              destDecimals: st.decimals,
              inputSymbol: tt.symbol,
              outputSymbol: st.symbol,
              user: we,
              options: { partner: 'aave-widget' },
              isTxSuccess: xe.success,
            }),
            ut = it.data,
            lt = it.error,
            dt = it.isFetching;
          (0, i.useEffect)(
            function () {
              'cowprotocol' == Ce && ye(ut) && X(ut.suggestedSlippage.toString());
            },
            [ut, Ce]
          );
          var mt = (0, i.useState)(!1),
            xt = mt[0],
            ft = mt[1];
          (0, i.useEffect)(
            function () {
              var e = setTimeout(function () {
                ft(
                  ye(ut) &&
                    Number($) < (null === ut || void 0 === ut ? void 0 : ut.suggestedSlippage)
                );
              }, 500);
              return function () {
                return clearTimeout(e);
              };
            },
            [$, ut]
          );
          var ht = (0, i.useState)(void 0),
            vt = ht[0],
            gt = ht[1];
          if (
            ((0, i.useEffect)(
              function () {
                'cowprotocol' == Ce && we && Ie && tt && st
                  ? (gt(void 0),
                    (0, _.AU)(Ie, we).then(function (e) {
                      var t = e
                        .filter(function (e) {
                          return (
                            e.sellToken.toLowerCase() == tt.address.toLowerCase() &&
                            e.status == w.OrderStatus.OPEN
                          );
                        })
                        .map(function (e) {
                          return e.sellAmount;
                        })
                        .reduce(function (e, t) {
                          return e + Number(t);
                        }, 0);
                      gt(t > 0 ? (0, j.Fv)(t, tt.decimals).toString() : void 0);
                    }))
                  : gt(void 0);
              },
              [tt, st, Ce, Ie, we]
            ),
            !He)
          )
            return (0, fe.jsx)(s.Z, {
              sx: { width: '100%', display: 'flex', justifyContent: 'center', my: '60px' },
              children: (0, fe.jsx)(k.Z, {}),
            });
          if (ut && xe.success)
            return (0, fe.jsx)(Nt, {
              txHash: xe.txHash,
              amount: (0, j.Fv)(ut.srcAmount, ut.srcDecimals).toString(),
              symbol: tt.symbol,
              iconSymbol: tt.symbol,
              iconUri: tt.logoURI,
              outSymbol: st.symbol,
              outIconSymbol: st.symbol,
              outIconUri: st.logoURI,
              provider: null !== Ce && void 0 !== Ce ? Ce : 'paraswap',
              chainId: Ie,
              destDecimals: st.decimals,
              srcDecimals: tt.decimals,
              outAmount: (Number((0, j.Fv)(ut.destAmount, ut.destDecimals)) * (1 - _e)).toString(),
            });
          var yt = (0, ae.v)('0.01', 18),
            jt = (0, _.Mg)(tt.address) ? yt : void 0,
            wt = jt ? (0, ae.v)(tt.balance, 18) - jt : void 0,
            St = wt ? (0, j.Fv)(wt.toString(), 18).toString() : void 0,
            kt =
              F && ut
                ? F({
                    switchProvider: Ce,
                    user: we,
                    switchRates: ut,
                    gasLimit: he,
                    selectedChainId: Ie,
                    selectedOutputToken: st,
                    selectedInputToken: tt,
                    safeSlippage: _e,
                    maxSlippage: Number($),
                    ratesLoading: dt,
                    ratesError: lt,
                    showGasStation: Ee,
                  })
                : null;
          return (0, fe.jsxs)(fe.Fragment, {
            children: [
              b &&
                (0, fe.jsx)(ie.E, {
                  title: 'Swap '.concat(de.length && tt ? tt.symbol : 'Assets'),
                }),
              Y &&
                Pe.isWrongNetwork &&
                !ke &&
                (0, fe.jsx)(ce.I, {
                  networkName: Re.name,
                  chainId: Ie,
                  event: { eventName: se.vh.SWITCH_NETWORK },
                  askManualSwitch: Ge,
                }),
              vt &&
                (0, fe.jsx)(C.v, {
                  severity: 'info',
                  icon: !1,
                  sx: { mt: 2, mb: 2 },
                  children: (0, fe.jsxs)(a.Z, {
                    variant: 'caption',
                    children: [
                      'You have open orders for ',
                      vt,
                      ' ',
                      tt.symbol,
                      '. ',
                      (0, fe.jsx)('br', {}),
                      ' Track them in your',
                      ' ',
                      (0, fe.jsx)(T.rU, {
                        target: '_blank',
                        href: '/history?marketName='.concat(
                          null === (t = (0, ne.N_)(Ie)) || void 0 === t ? void 0 : t.market
                        ),
                        children: 'transaction history',
                      }),
                    ],
                  }),
                }),
              (0, fe.jsxs)(s.Z, {
                sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
                children: [
                  (0, fe.jsx)(ge, {
                    networks: M,
                    selectedNetwork: Ie,
                    setSelectedNetwork: function (e) {
                      be(void 0), Te(e);
                      var t = Ut(e);
                      Fe(t), Ve();
                    },
                  }),
                  (0, fe.jsx)(bt, { slippageValidation: Ue, slippage: $, setSlippage: X }),
                ],
              }),
              tt && st
                ? (0, fe.jsxs)(fe.Fragment, {
                    children: [
                      (0, fe.jsxs)(s.Z, {
                        sx: {
                          display: 'flex',
                          gap: '15px',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        },
                        children: [
                          (0, fe.jsx)(ot, {
                            chainId: Ie,
                            balanceTitle: W,
                            assets: He.filter(function (e) {
                              return (
                                e.address !== st.address &&
                                0 !== Number(e.balance) &&
                                !(
                                  (0, _.Mg)(st.address) &&
                                  e.address === w.WRAPPED_NATIVE_CURRENCIES[Ie].address
                                ) &&
                                !(
                                  st.address === w.WRAPPED_NATIVE_CURRENCIES[Ie].address &&
                                  (0, _.Mg)(e.address)
                                )
                              );
                            }),
                            value: ee,
                            onChange: function (e) {
                              be(void 0),
                                '-1' === e ? (oe(tt.balance), Ye(tt.balance)) : (oe(e), Ye(e));
                            },
                            usdValue: (null === ut || void 0 === ut ? void 0 : ut.srcUSD) || '0',
                            onSelect: function (e) {
                              null !== He &&
                              void 0 !== He &&
                              He.find(function (t) {
                                return t.address === e.address;
                              })
                                ? (rt(e), be(void 0))
                                : $e(e).then(function () {
                                    rt(e), be(void 0);
                                  });
                            },
                            selectedAsset: tt,
                            forcedMaxValue: St,
                          }),
                          d &&
                            (0, fe.jsx)(O.Z, {
                              onClick: function () {
                                var e = tt,
                                  t = st,
                                  r = ut
                                    ? (0, j.pV)(ut.destAmount, ut.destDecimals).toString()
                                    : '0';
                                rt(t), at(e), oe(r), pe(r), be(void 0);
                              },
                              sx: {
                                border: '1px solid',
                                borderColor: 'divider',
                                position: 'absolute',
                                backgroundColor: 'background.paper',
                                '&:hover': { backgroundColor: 'background.surface' },
                              },
                              children: (0, fe.jsx)(D.Z, {
                                sx: { color: 'primary.main', fontSize: '18px' },
                                children: (0, fe.jsx)(S.Z, {}),
                              }),
                            }),
                          (0, fe.jsx)(ot, {
                            chainId: Ie,
                            balanceTitle: H,
                            assets: He.filter(function (e) {
                              return (
                                e.address !== tt.address &&
                                !(
                                  (0, _.Mg)(tt.address) &&
                                  e.address === w.WRAPPED_NATIVE_CURRENCIES[Ie].address
                                ) &&
                                !(
                                  tt.address === w.WRAPPED_NATIVE_CURRENCIES[Ie].address &&
                                  (0, _.Mg)(e.address)
                                )
                              );
                            }),
                            value: ut ? (0, j.pV)(ut.destAmount, ut.destDecimals).toString() : '0',
                            usdValue: (null === ut || void 0 === ut ? void 0 : ut.destUSD) || '0',
                            loading: '0' !== de && '' !== de && dt && !lt,
                            onSelect: function (e) {
                              null !== He &&
                              void 0 !== He &&
                              He.find(function (t) {
                                return t.address === e.address;
                              })
                                ? (at(e), be(void 0))
                                : $e(e).then(function () {
                                    at(e), be(void 0);
                                  });
                            },
                            disableInput: !0,
                            selectedAsset: st,
                            showBalance: !1,
                          }),
                        ],
                      }),
                      ut &&
                        (0, fe.jsx)(fe.Fragment, {
                          children: (0, fe.jsx)(pt, {
                            rates: ut,
                            srcSymbol: tt.symbol,
                            destSymbol: st.symbol,
                            showPriceImpact: !ye(ut),
                          }),
                        }),
                      we
                        ? (0, fe.jsxs)(fe.Fragment, {
                            children: [
                              ((null === (r = tt.extensions) || void 0 === r
                                ? void 0
                                : r.isUserCustom) ||
                                (null === (c = st.extensions) || void 0 === c
                                  ? void 0
                                  : c.isUserCustom)) &&
                                (0, fe.jsx)(C.v, {
                                  severity: 'warning',
                                  icon: !1,
                                  sx: { mt: 2, mb: 2 },
                                  children: (0, fe.jsx)(a.Z, {
                                    variant: 'caption',
                                    children: 'You have selected a custom imported token.',
                                  }),
                                }),
                              kt,
                              xt &&
                                (0, fe.jsx)(C.v, {
                                  severity: 'warning',
                                  icon: !1,
                                  sx: { mt: 5 },
                                  children: (0, fe.jsx)(a.Z, {
                                    variant: 'caption',
                                    children:
                                      'Slippage is lower than recommended. The swap may be delayed or fail.',
                                  }),
                                }),
                              (0, fe.jsx)(ct, {
                                ratesError: lt,
                                balance: tt.balance,
                                inputAmount: de,
                              }),
                              ve && (0, fe.jsx)(ue.f, { txError: ve }),
                              (0, fe.jsx)(Le, {
                                isWrongNetwork: Pe.isWrongNetwork,
                                inputAmount: de,
                                inputToken: tt.address,
                                outputToken: st.address,
                                inputName: tt.name,
                                outputName: st.name,
                                inputSymbol: tt.symbol,
                                outputSymbol: st.symbol,
                                slippage: _e.toString(),
                                setShowGasStation: Ne,
                                blocked:
                                  !ut ||
                                  Number(de) > Number(tt.balance) ||
                                  !we ||
                                  (null === Ue || void 0 === Ue ? void 0 : Ue.severity) ===
                                    Et.ERROR,
                                chainId: Ie,
                                switchRates: ut,
                              }),
                            ],
                          })
                        : (0, fe.jsxs)(s.Z, {
                            sx: {
                              display: 'flex',
                              flexDirection: 'column',
                              mt: 4,
                              alignItems: 'center',
                            },
                            children: [
                              (0, fe.jsx)(a.Z, {
                                sx: { mb: 6, textAlign: 'center' },
                                color: 'text.secondary',
                                children: (0, fe.jsx)(o.cC, { id: 'HtuY7v' }),
                              }),
                              (0, fe.jsx)(x.p, {
                                onClick: function () {
                                  je();
                                },
                              }),
                            ],
                          }),
                    ],
                  })
                : (0, fe.jsx)(k.Z, {}),
            ],
          });
        },
        Lt = l.ei[l.el.proto_mainnet_v3],
        Bt = function (e) {
          var t = e.modalType,
            r = e.switchDetails,
            u = e.inputBalanceTitle,
            l = e.forcedDefaultInputToken,
            d = e.forcedDefaultOutputToken,
            p = (0, n.vR)(),
            v = p.type,
            g = p.close,
            b = p.args.chainId,
            y = (0, h.Y)(function (e) {
              return e.currentChainId;
            }),
            j = (0, f.Z)().chainId,
            w = (0, h.Y)(function (e) {
              return e.account;
            }),
            S = (0, i.useState)(function () {
              return m.find(function (e) {
                return e.chainId === y;
              })
                ? y
                : Lt.chainId;
            }),
            k = S[0],
            O = S[1];
          (0, i.useEffect)(
            function () {
              if (
                b &&
                m.find(function (e) {
                  return e.chainId === b;
                })
              )
                O(b);
              else if (
                j &&
                m.find(function (e) {
                  return e.chainId === j;
                })
              ) {
                var e = m.find(function (e) {
                  return e.underlyingChainId === j;
                });
                O(e ? e.chainId : j);
              } else
                m.find(function (e) {
                  return e.chainId === y;
                })
                  ? O(y)
                  : O(Lt.chainId);
            },
            [y, b, j]
          );
          var D = (0, i.useMemo)(
              function () {
                return Ut(k);
              },
              [k]
            ),
            A = (0, i.useMemo)(
              function () {
                return Ut(k);
              },
              [k]
            );
          return (0, fe.jsx)(c.P, {
            open: v === t,
            setOpen: g,
            children: w
              ? (0, fe.jsx)(_t, {
                  forcedChainId: k,
                  supportedNetworks: m,
                  initialFromTokens: D,
                  initialToTokens: A,
                  modalType: t,
                  switchDetails: r,
                  inputBalanceTitle: u,
                  forcedDefaultInputToken: l,
                  forcedDefaultOutputToken: d,
                })
              : (0, fe.jsxs)(s.Z, {
                  sx: { display: 'flex', flexDirection: 'column', mt: 4, alignItems: 'center' },
                  children: [
                    (0, fe.jsx)(a.Z, {
                      sx: { mb: 6, textAlign: 'center' },
                      color: 'text.secondary',
                      children: (0, fe.jsx)(o.cC, { id: 'HtuY7v' }),
                    }),
                    (0, fe.jsx)(x.p, {
                      onClick: function () {
                        return g();
                      },
                    }),
                  ],
                }),
          });
        },
        Mt = r(23508),
        Ft = r(67358),
        Wt = r(38895),
        Ht = r(22797),
        Vt = r(20986),
        zt = r(67944),
        Gt = function (e) {
          var t = e.switchRates,
            r = e.selectedOutputToken,
            n = e.safeSlippage,
            o = e.gasLimit,
            s = e.selectedChainId;
          return (0, fe.jsx)(zt.m6, {
            gasLimit: o,
            chainId: s,
            showGasStation: 'cowprotocol' !== t.provider,
            children:
              'cowprotocol' === t.provider
                ? (0, fe.jsx)(qt, { switchRates: t, selectedOutputToken: r, safeSlippage: n })
                : (0, fe.jsx)(Yt, { switchRates: t, selectedOutputToken: r, safeSlippage: n }),
          });
        },
        qt = function (e) {
          var t = e.switchRates,
            r = e.selectedOutputToken,
            n = e.safeSlippage,
            a = (0, i.useState)(!1),
            c = a[0],
            u = a[1];
          if (!ye(t)) throw new Error('Invalid switch rates');
          var l = t.amountAndCosts.costs.networkFee.amountInBuyCurrency.toString(),
            d = (0, j.Fv)(l, t.destDecimals),
            p = Number(d) * t.destTokenPriceUsd,
            m = t.amountAndCosts.costs.partnerFee.amount.toString(),
            x = (0, j.Fv)(m, t.destDecimals),
            f = Number(x) * t.destTokenPriceUsd,
            h = p + f,
            v = (0, fe.jsx)(jt.G, {
              variant: 'caption',
              text: (0, fe.jsx)(o.cC, { id: 'bYtb3C' }),
              children: (0, fe.jsx)(o.cC, { id: 'h5hG6q' }),
            }),
            g = (0, fe.jsx)(jt.G, {
              variant: 'caption',
              text: (0, fe.jsx)(o.cC, { id: 'PLUB/s' }),
              children: (0, fe.jsx)(o.cC, {
                id: '5CCqcz',
                components: {
                  0: (0, fe.jsx)(T.rU, {
                    href: 'https://aave.com/docs/developers/smart-contracts/swap-features',
                    target: '_blank',
                    rel: 'noopener',
                  }),
                },
              }),
            });
          return (0, fe.jsxs)(fe.Fragment, {
            children: [
              (0, fe.jsxs)(Ft.Z, {
                sx: {
                  mb: 4,
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  '.MuiAccordionSummary-root': { minHeight: '24px', maxHeight: '24px' },
                  backgroundColor: 'transparent',
                },
                onChange: function (e, t) {
                  u(t);
                },
                children: [
                  (0, fe.jsx)(Wt.Z, {
                    expandIcon: (0, fe.jsx)(Mt.Z, {}),
                    sx: {
                      padding: 0,
                      minHeight: '24px',
                      height: '24px',
                      '.MuiAccordionSummary-content': { margin: 0 },
                    },
                    children: (0, fe.jsx)(Vt.X, {
                      caption: (0, fe.jsx)(o.cC, { id: 'IhAc6F' }),
                      captionVariant: 'description',
                      align: 'flex-start',
                      width: '100%',
                      children:
                        !c &&
                        (0, fe.jsx)(Xe.B, {
                          sx: { mt: 0.5 },
                          compact: !1,
                          symbol: 'usd',
                          symbolsVariant: 'caption',
                          roundDown: !1,
                          variant: 'caption',
                          visibleDecimals: 2,
                          value: h,
                        }),
                    }),
                  }),
                  (0, fe.jsxs)(Ht.Z, {
                    sx: { padding: 0 },
                    children: [
                      (0, fe.jsx)(Vt.X, {
                        mx: 2,
                        mb: 2,
                        mt: 2,
                        caption: v,
                        captionVariant: 'caption',
                        align: 'flex-start',
                        children: (0, fe.jsxs)(s.Z, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                          },
                          children: [
                            (0, fe.jsxs)(s.Z, {
                              sx: { display: 'flex', alignItems: 'center' },
                              children: [
                                (0, fe.jsx)(Ke.UD, {
                                  symbol: r.symbol,
                                  logoURI: r.logoURI,
                                  sx: { mr: 2, ml: 4, fontSize: '16px' },
                                }),
                                (0, fe.jsx)(Xe.B, {
                                  value: d,
                                  variant: 'secondary12',
                                  compact: !0,
                                }),
                              ],
                            }),
                            (0, fe.jsx)(Xe.B, {
                              value: p,
                              variant: 'helperText',
                              compact: !0,
                              symbol: 'USD',
                              symbolsColor: 'text.secondary',
                              color: 'text.secondary',
                            }),
                          ],
                        }),
                      }),
                      (0, fe.jsx)(Vt.X, {
                        mx: 2,
                        mb: 2,
                        caption: g,
                        captionVariant: 'caption',
                        align: 'flex-start',
                        children: (0, fe.jsxs)(s.Z, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                          },
                          children: [
                            (0, fe.jsxs)(s.Z, {
                              sx: { display: 'flex', alignItems: 'center' },
                              children: [
                                (0, fe.jsx)(Ke.UD, {
                                  symbol: r.symbol,
                                  logoURI: r.logoURI,
                                  sx: { mr: 2, ml: 4, fontSize: '16px' },
                                }),
                                (0, fe.jsx)(Xe.B, {
                                  value: x,
                                  variant: 'secondary12',
                                  compact: !0,
                                }),
                              ],
                            }),
                            (0, fe.jsx)(Xe.B, {
                              value: f,
                              variant: 'helperText',
                              compact: !0,
                              symbol: 'USD',
                              symbolsColor: 'text.secondary',
                              color: 'text.secondary',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, fe.jsx)(Vt.X, {
                mb: 4,
                caption: (0, fe.jsx)(o.cC, { id: '5ctNdV', values: { 0: r.symbol } }),
                captionVariant: 'description',
                align: 'flex-start',
                children: (0, fe.jsxs)(s.Z, {
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  },
                  children: [
                    (0, fe.jsxs)(s.Z, {
                      sx: { display: 'flex', alignItems: 'center' },
                      children: [
                        (0, fe.jsx)(Ke.UD, {
                          symbol: r.symbol,
                          logoURI: r.logoURI,
                          sx: { mr: 2, ml: 4, fontSize: '16px' },
                        }),
                        (0, fe.jsx)(Xe.B, {
                          value: Number((0, j.Fv)(t.destAmount, t.destDecimals)) * (1 - n),
                          variant: 'secondary14',
                          compact: !0,
                        }),
                      ],
                    }),
                    (0, fe.jsx)(Xe.B, {
                      value: Number(t.destUSD) * (1 - n),
                      variant: 'helperText',
                      compact: !0,
                      symbol: 'USD',
                      symbolsColor: 'text.secondary',
                      color: 'text.secondary',
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Yt = function (e) {
          var t = e.switchRates,
            r = e.selectedOutputToken,
            n = e.safeSlippage;
          return (0, fe.jsx)(fe.Fragment, {
            children: (0, fe.jsx)(Vt.X, {
              caption: (0, fe.jsx)(o.cC, { id: '5ctNdV', values: { 0: r.symbol } }),
              captionVariant: 'description',
              align: 'flex-start',
              children: (0, fe.jsxs)(s.Z, {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                },
                children: [
                  (0, fe.jsxs)(s.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: [
                      (0, fe.jsx)(Ke.UD, {
                        symbol: r.symbol,
                        logoURI: r.logoURI,
                        sx: { mr: 2, ml: 4, fontSize: '16px' },
                      }),
                      (0, fe.jsx)(Xe.B, {
                        value: Number((0, j.Fv)(Number(t.destAmount) * (1 - n), t.destDecimals)),
                        variant: 'secondary14',
                        compact: !0,
                      }),
                    ],
                  }),
                  (0, fe.jsx)(Xe.B, {
                    value: Number(t.destUSD) * (1 - n),
                    variant: 'helperText',
                    compact: !0,
                    symbol: 'USD',
                    symbolsColor: 'text.secondary',
                    color: 'text.secondary',
                  }),
                ],
              }),
            }),
          });
        },
        Qt = function () {
          return (0, fe.jsx)(Bt, {
            modalType: n.w8.Switch,
            switchDetails: function (e) {
              var t = e.user,
                r = e.switchRates,
                n = e.gasLimit,
                o = e.selectedChainId,
                s = e.selectedOutputToken,
                a = e.safeSlippage,
                i = e.showGasStation;
              return r && t
                ? (0, fe.jsx)(Gt, {
                    switchRates: r,
                    selectedOutputToken: s,
                    safeSlippage: a,
                    gasLimit: n,
                    selectedChainId: o,
                    showGasStation: i,
                  })
                : null;
            },
          });
        };
    },
    78864: function (e, t, r) {
      r.d(t, {
        f: function () {
          return u;
        },
      });
      var n = r(57499),
        o = r(80822),
        s = r(15861),
        a = r(35783),
        i = r(83063),
        c = r(85893),
        u = function (e) {
          var t = e.txError;
          return (0, c.jsxs)(o.Z, {
            children: [
              (0, c.jsx)(i.Q, { txError: t }),
              'MetaMask Message Signature: User denied message signature.' !== t.rawError.message &&
                'MetaMask Tx Signature: User denied transaction signature.' !==
                  t.rawError.message &&
                (0, c.jsx)(o.Z, {
                  sx: { pt: 4 },
                  children: (0, c.jsx)(a.v, {
                    severity: 'info',
                    children: (0, c.jsxs)(s.Z, {
                      variant: 'description',
                      children: [' ', (0, c.jsx)(n.cC, { id: 'M2sknc' })],
                    }),
                  }),
                }),
            ],
          });
        };
    },
    53008: function (e, t, r) {
      r.d(t, {
        Fi: function () {
          return c;
        },
        NI: function () {
          return n;
        },
        gK: function () {
          return a;
        },
        iv: function () {
          return u;
        },
        pQ: function () {
          return i;
        },
        yI: function () {
          return l;
        },
      });
      var n,
        o = r(70794),
        s = r(56845);
      !(function (e) {
        (e[(e.SUPPLY_CAP_REACHED = 0)] = 'SUPPLY_CAP_REACHED'),
          (e[(e.NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH = 1)] = 'NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED'),
          (e[(e.FLASH_LOAN_NOT_AVAILABLE = 3)] = 'FLASH_LOAN_NOT_AVAILABLE');
      })(n || (n = {}));
      var a = function (e, t) {
          return '-1' !== e && new o.O(e).minus(new o.O(t)).lt('1.05');
        },
        i = 65e3,
        c = 55e3,
        u = function (e) {
          var t = e.approvedAmount,
            r = e.signedAmount,
            n = e.amount;
          return !(
            '-1' === t ||
            '-1' === r ||
            ('0' !== t && Number(t) >= Number(n)) ||
            Number(r) >= Number(n)
          );
        },
        l = function (e, t, r, n) {
          var o = e.reserve;
          if (!o.usageAsCollateralEnabled) return s.z.UNAVAILABLE;
          var a = s.z.ENABLED,
            i = e && '0' !== e.scaledATokenBalance,
            c = '0' !== t;
          return (
            o.isIsolated
              ? n
                ? (a = s.z.UNAVAILABLE)
                : r
                  ? i
                    ? (a = e.usageAsCollateralEnabledOnUser ? s.z.ISOLATED_ENABLED : s.z.DISABLED)
                    : c && (a = s.z.UNAVAILABLE_DUE_TO_ISOLATION)
                  : (a = c ? s.z.ISOLATED_DISABLED : s.z.ISOLATED_ENABLED)
              : (a = r
                  ? s.z.UNAVAILABLE_DUE_TO_ISOLATION
                  : i
                    ? e.usageAsCollateralEnabledOnUser
                      ? s.z.ENABLED
                      : s.z.DISABLED
                    : s.z.ENABLED),
            a
          );
        };
    },
    87886: function (e, t, r) {
      r.d(t, {
        F8: function () {
          return I;
        },
        IG: function () {
          return B;
        },
        Ik: function () {
          return U;
        },
        LN: function () {
          return L;
        },
        _n: function () {
          return C;
        },
        aE: function () {
          return O;
        },
        sm: function () {
          return _;
        },
        wP: function () {
          return E;
        },
        w_: function () {
          return w;
        },
        xS: function () {
          return D;
        },
      });
      var n,
        o = r(50029),
        s = r(59499),
        a = r(87794),
        i = r.n(a),
        c = r(75331),
        u = r(80854),
        l = r(1279),
        d = r(3439),
        p = r(63645),
        m = r(38486),
        x = r(49575),
        f = r(80063),
        h = r(4482),
        v = r(25383),
        g = r(77682),
        b = r(79643),
        y = function (e) {
          var t = (0, b.Sv)(fetch);
          return (0, b.A6)({ chainId: e, fetcher: t, version: '6.2' }, b.QA, b.TG);
        },
        j =
          ((n = {}),
          (0, s.Z)(n, c.a_.mainnet, { paraswap: y(c.a_.mainnet), feeTarget: d.y$ }),
          (0, s.Z)(n, c.a_.polygon, { paraswap: y(c.a_.polygon), feeTarget: p.y$ }),
          (0, s.Z)(n, c.a_.avalanche, { paraswap: y(c.a_.avalanche), feeTarget: m.y$ }),
          (0, s.Z)(n, c.a_.arbitrum_one, { paraswap: y(c.a_.arbitrum_one), feeTarget: x.y$ }),
          (0, s.Z)(n, c.a_.optimism, { paraswap: y(c.a_.optimism), feeTarget: f.y$ }),
          (0, s.Z)(n, c.a_.base, { paraswap: y(c.a_.base), feeTarget: h.y$ }),
          (0, s.Z)(n, c.a_.bnb, { paraswap: y(c.a_.bnb), feeTarget: v.y$ }),
          (0, s.Z)(n, c.a_.xdai, { paraswap: y(c.a_.xdai), feeTarget: g.y$ }),
          n),
        w = function (e) {
          var t = j[e];
          if (t) return t;
          throw new Error('Chain not supported');
        },
        S = {
          ESTIMATED_LOSS_GREATER_THAN_MAX_IMPACT:
            'Price impact too high. Please try a different amount or asset pair.',
          'No routes found with enough liquidity': 'No routes found with enough liquidity.',
        },
        k = [
          {
            regex: /^Amount \d+ is too small to proceed$/,
            message: 'Amount is too small. Please try larger amount.',
          },
        ];
      function O(e) {
        var t;
        return e in S
          ? S[e]
          : null ===
                (t = k.find(function (t) {
                  return t.regex.test(e);
                })) || void 0 === t
            ? void 0
            : t.message;
      }
      function D(e, t, r, n, o, s) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = (0, o.Z)(
          i().mark(function e(t, r, n, o, s, a) {
            var c, u, d, p;
            return i().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (c = R(o)),
                      (e.next = 3),
                      c.getTransactionParams(
                        r.underlyingAsset,
                        r.decimals,
                        n.underlyingAsset,
                        n.decimals,
                        s,
                        t,
                        a
                      )
                    );
                  case 3:
                    return (
                      (u = e.sent),
                      (d = u.swapCallData),
                      (p = u.augustus),
                      e.abrupt('return', {
                        swapCallData: d,
                        augustus: p,
                        inputAmount: (0, l.Fv)(t.srcAmount, r.decimals),
                        outputAmount: (0, l.Fv)(t.destAmount, n.decimals),
                        inputAmountUSD: t.srcUSD,
                        outputAmountUSD: t.destUSD,
                      })
                    );
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function I(e, t, r, n, o) {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = (0, o.Z)(
          i().mark(function e(t, r, n, o, s) {
            var a, c, u, d;
            return i().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = (0, l.hE)(t.amount)),
                      s &&
                        '0' !== t.supplyAPY &&
                        (a = a.plus(a.multipliedBy(t.supplyAPY).dividedBy(17280))),
                      (c = (0, l.pV)(a, -1 * t.decimals)),
                      (u = { partner: 'aave' }),
                      s && (u.includeContractMethods = [b.OZ.swapExactAmountIn]),
                      (d = R(n)),
                      (e.next = 8),
                      d.getRate(
                        c.toFixed(0),
                        t.underlyingAsset,
                        t.decimals,
                        r.underlyingAsset,
                        r.decimals,
                        o,
                        u
                      )
                    );
                  case 8:
                    return e.abrupt('return', e.sent);
                  case 9:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function C(e, t, r, n, o, s) {
        return Z.apply(this, arguments);
      }
      function Z() {
        return (Z = (0, o.Z)(
          i().mark(function e(t, r, n, o, s, a) {
            var c, u, d, p;
            return i().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (c = P(o)),
                      (e.next = 3),
                      c.getTransactionParams(
                        r.underlyingAsset,
                        r.decimals,
                        n.underlyingAsset,
                        n.decimals,
                        s,
                        t,
                        a
                      )
                    );
                  case 3:
                    return (
                      (u = e.sent),
                      (d = u.swapCallData),
                      (p = u.augustus),
                      e.abrupt('return', {
                        swapCallData: d,
                        augustus: p,
                        inputAmount: (0, l.Fv)(t.srcAmount, r.decimals),
                        outputAmount: (0, l.Fv)(t.destAmount, n.decimals),
                        inputAmountUSD: t.srcUSD,
                        outputAmountUSD: t.destUSD,
                      })
                    );
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function E(e, t, r, n, o) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = (0, o.Z)(
          i().mark(function e(t, r, n, o, s) {
            var a, c, u, d;
            return i().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = (0, l.hE)(r.amount)),
                      (c = (0, l.pV)(a, -1 * r.decimals)),
                      (u = { partner: 'aave' }),
                      s && (u.includeContractMethods = [b.OZ.swapExactAmountOut]),
                      (d = P(n)),
                      (e.next = 7),
                      d.getRate(
                        c.toFixed(0),
                        t.underlyingAsset,
                        t.decimals,
                        r.underlyingAsset,
                        r.decimals,
                        o,
                        u
                      )
                    );
                  case 7:
                    return e.abrupt('return', e.sent);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var R = function (e) {
          var t = w(e),
            r = t.paraswap,
            n = t.feeTarget,
            s = (function () {
              var e = (0, o.Z)(
                i().mark(function e(t, n, o, s, a, c, u) {
                  var l;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            r.getRate({
                              amount: t,
                              srcToken: n,
                              srcDecimals: o,
                              destToken: s,
                              destDecimals: a,
                              userAddress: c,
                              side: b.PC.SELL,
                              options: u,
                            })
                          );
                        case 2:
                          return (l = e.sent), e.abrupt('return', l);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, r, n, o, s, a, i) {
                return e.apply(this, arguments);
              };
            })(),
            a = (function () {
              var e = (0, o.Z)(
                i().mark(function e(t, o, s, a, c, u, l) {
                  var d;
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              r.buildTx(
                                {
                                  srcToken: t,
                                  srcDecimals: o,
                                  srcAmount: u.srcAmount,
                                  destToken: s,
                                  destDecimals: a,
                                  slippage: 100 * l,
                                  priceRoute: u,
                                  userAddress: c,
                                  partnerAddress: n,
                                  takeSurplus: !0,
                                  isDirectFeeTransfer: !0,
                                },
                                { ignoreChecks: !0 }
                              )
                            );
                          case 3:
                            return (
                              (d = e.sent),
                              e.abrupt('return', { swapCallData: d.data, augustus: d.to })
                            );
                          case 7:
                            throw (
                              ((e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0),
                              new Error('Error building transaction parameters'))
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function (t, r, n, o, s, a, i) {
                return e.apply(this, arguments);
              };
            })();
          return { getRate: s, getTransactionParams: a };
        },
        P = function (e) {
          var t = w(e),
            r = t.paraswap,
            n = t.feeTarget,
            s = (function () {
              var e = (0, o.Z)(
                i().mark(function e(t, n, o, s, a, c, u) {
                  var l;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            r.getRate({
                              amount: t,
                              srcToken: n,
                              srcDecimals: o,
                              destToken: s,
                              destDecimals: a,
                              userAddress: c,
                              side: b.PC.BUY,
                              options: u,
                            })
                          );
                        case 2:
                          return (l = e.sent), e.abrupt('return', l);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, r, n, o, s, a, i) {
                return e.apply(this, arguments);
              };
            })(),
            a = (function () {
              var e = (0, o.Z)(
                i().mark(function e(t, o, s, a, c, u, l) {
                  var d;
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              r.buildTx(
                                {
                                  srcToken: t,
                                  destToken: s,
                                  destAmount: u.destAmount,
                                  slippage: 100 * l,
                                  priceRoute: u,
                                  userAddress: c,
                                  partnerAddress: n,
                                  takeSurplus: !0,
                                  srcDecimals: o,
                                  destDecimals: a,
                                  isDirectFeeTransfer: !0,
                                },
                                { ignoreChecks: !0 }
                              )
                            );
                          case 3:
                            return (
                              (d = e.sent),
                              e.abrupt('return', { swapCallData: d.data, augustus: d.to })
                            );
                          case 7:
                            throw (
                              ((e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              new Error('Error building transaction parameters'))
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function (t, r, n, o, s, a, i) {
                return e.apply(this, arguments);
              };
            })();
          return { getRate: s, getTransactionParams: a };
        },
        U = 0.1,
        _ = function (e, t, r) {
          var n = (0, l.hE)(e),
            o = (0, l.hE)(null !== r && void 0 !== r ? r : U),
            s = n.plus(n.multipliedBy(o));
          return (0, u.gU)(s.toString(), t);
        },
        L = function (e, t, r) {
          return '0' === e
            ? '0'
            : (0, l.hE)(e)
                .multipliedBy(1 + Number(t) / 100)
                .toFixed(r);
        },
        B = function (e, t, r) {
          return '0' === e
            ? '0'
            : (0, l.hE)(e)
                .multipliedBy(1 - Number(t) / 100)
                .toFixed(r);
        };
    },
    53097: function (e, t, r) {
      r.d(t, {
        Q: function () {
          return s;
        },
      });
      var n = r(72005),
        o = r(3062);
      function s(e) {
        var t = (0, o.Y)(function (e) {
            return e.currentChainId;
          }),
          r = e || t;
        return { isWrongNetwork: (0, n.Z)().chainId !== r, requiredChainId: r };
      }
    },
  },
]);
