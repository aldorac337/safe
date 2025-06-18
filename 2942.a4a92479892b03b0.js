'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2942],
  {
    58941: function (e, t, r) {
      r.d(t, {
        o: function () {
          return v;
        },
      });
      var n = r(59499),
        o = r(4730),
        s = r(57499),
        i = r(1279),
        a = r(2734),
        c = r(80822),
        l = r(15861),
        u = r(69417),
        d = r(70794),
        p = r(32867),
        x = r(85893),
        m = ['value', 'onInfoClick'];
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
      function h(e) {
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
      var v = function (e) {
        var t = e.value,
          r = e.onInfoClick,
          n = (0, o.Z)(e, m),
          f = (0, a.Z)().palette,
          v = Number((0, i.hE)(t).toFixed(2, d.O.ROUND_DOWN)),
          b = '';
        return (
          (b = v >= 3 ? f.success.main : v < 1.1 ? f.error.main : f.warning.main),
          (0, x.jsxs)(c.Z, {
            sx: {
              display: 'inline-flex',
              alignItems: { xs: 'flex-start', xsm: 'center' },
              flexDirection: { xs: 'column', xsm: 'row' },
            },
            'data-cy': 'HealthFactorTopPannel',
            children: [
              '-1' === t
                ? (0, x.jsx)(l.Z, {
                    variant: 'secondary14',
                    color: f.success.main,
                    children: '\u221e',
                  })
                : (0, x.jsx)(
                    p.B,
                    h({ value: v, sx: h({ color: b }, n.sx), visibleDecimals: 2, compact: !0 }, n)
                  ),
              r &&
                (0, x.jsx)(u.Z, {
                  onClick: r,
                  variant: 'surface',
                  size: 'small',
                  sx: { minWidth: 'unset', ml: { xs: 0, xsm: 2 } },
                  children: (0, x.jsx)(s.cC, { id: 'cLo09S' }),
                }),
            ],
          })
        );
      };
    },
    10818: function (e, t, r) {
      r.d(t, {
        M: function () {
          return h;
        },
      });
      var n = r(59499),
        o = r(53737),
        s = r(33740),
        i = r(2734),
        a = r(61730),
        c = r(80822),
        l = r(73601),
        u = r(93946),
        d = r(23279),
        p = r.n(d),
        x = r(67294),
        m = r(85893);
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
          v = (0, x.useRef)(null),
          b = (0, x.useState)(''),
          g = b[0],
          y = b[1],
          j = (0, i.Z)().breakpoints,
          w = (0, a.Z)(j.down('sm')),
          O = (0, x.useMemo)(
            function () {
              return p()(function (e) {
                t(e);
              }, 300);
            },
            [t]
          );
        return (0, m.jsxs)(c.Z, {
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
            (0, m.jsx)(c.Z, { sx: { ml: 2, mt: 1 }, children: (0, m.jsx)(o.Z, { height: 16 }) }),
            (0, m.jsx)(l.ZP, {
              autoFocus: w,
              inputRef: v,
              sx: { width: '100%', fontSize: { xs: 16, sm: 14 } },
              placeholder: d,
              value: g,
              onChange: function (e) {
                y(e.target.value), O(e.target.value);
              },
              onKeyDown: function (e) {
                h && e.stopPropagation();
              },
            }),
            (0, m.jsx)(u.Z, {
              sx: { p: 0, mr: 2, visibility: g ? 'visible' : 'hidden' },
              onClick: function () {
                return (function () {
                  var e;
                  y(''), t(''), null === (e = v.current) || void 0 === e || e.focus();
                })();
              },
              children: (0, m.jsx)(s.Z, { height: 16 }),
            }),
          ],
        });
      };
    },
    83063: function (e, t, r) {
      r.d(t, {
        Q: function () {
          return c;
        },
      });
      var n = r(57499),
        o = r(15861),
        s = r(69417),
        i = r(35783),
        a = r(85893),
        c = function (e) {
          var t = e.txError;
          return (0, a.jsx)(i.v, {
            severity: 'error',
            sx: { mt: 4, mb: 0 },
            children: (0, a.jsx)(o.Z, {
              variant: 'description',
              children: t.error
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      t.error,
                      ' ',
                      (0, a.jsx)(s.Z, {
                        sx: { verticalAlign: 'top' },
                        variant: 'text',
                        onClick: function () {
                          return navigator.clipboard.writeText(t.rawError.message.toString());
                        },
                        children: (0, a.jsx)(o.Z, {
                          variant: 'description',
                          children: (0, a.jsx)(n.cC, { id: 'qOqbD6' }),
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)(n.cC, {
                    id: 'hjDCQr',
                    components: {
                      0: (0, a.jsx)(s.Z, {
                        sx: { verticalAlign: 'top' },
                        onClick: function () {
                          return navigator.clipboard.writeText(t.rawError.message.toString());
                        },
                      }),
                      1: (0, a.jsx)(o.Z, { variant: 'description' }),
                    },
                  }),
            }),
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
        i = r(15861),
        a = r(67294),
        c = r(15629),
        l = r(59499),
        u = r(79850);
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
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var x = (0, u.c)()
          .map(function (e) {
            return p(p({}, u.m5[e]), {}, { chainId: e });
          })
          .filter(function (e) {
            return Object.values(u.ei).find(function (t) {
              var r;
              return (
                t.chainId === e.chainId &&
                (null === (r = t.enabledFeatures) || void 0 === r ? void 0 : r.switch)
              );
            });
          }),
        m = r(94010),
        f = r(72005),
        h = r(3062),
        v = r(90116),
        b = r(50029),
        g = r(87794),
        y = r.n(g),
        j = r(1279),
        w = r(42853),
        O = r(67484),
        S = r(66489),
        k = r(93946),
        D = r(53219),
        I = r(30202),
        C = r(96486),
        A = r(38577),
        T = r(35783),
        Z = r(10961),
        E = r(96276),
        N = r(78551),
        P = r(52251),
        R = r(17674),
        U = r(70794),
        L = r(3873),
        _ = r(72544),
        B = r(69183),
        M = r(92777),
        W = r(82262),
        H = r(80854),
        F = (function () {
          function e() {
            (0, M.Z)(this, e), (0, l.Z)(this, 'baseUrl', 'https://bff.cow.fi');
          }
          return (
            (0, W.Z)(e, [
              {
                key: 'getTokenUsdPrice',
                value: (function () {
                  var e = (0, b.Z)(
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
                                  r !== H.hP)
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
        return (q = (0, b.Z)(
          y().mark(function e(t) {
            var r, n, o, s, i, a, c, l, u, d, p, x, m, f, h, v, b, g, j, O, S, k, D, I, C, A, T;
            return y().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = t.chainId),
                        (o = t.amount),
                        (s = t.srcToken),
                        (i = t.srcDecimals),
                        (a = t.destToken),
                        (c = t.destDecimals),
                        (l = t.user),
                        (u = t.inputSymbol),
                        (d = t.outputSymbol),
                        (p = t.setError),
                        (x = new F()),
                        (m = new w.TradingSdk({ chainId: n })),
                        (e.prev = 3),
                        (0, _.QC)(n))
                      ) {
                        e.next = 6;
                        break;
                      }
                      throw new Error('Chain not supported by CowProtocol');
                    case 6:
                      return (
                        (b = s),
                        (0, L.Mg)(s) && (b = w.WRAPPED_NATIVE_CURRENCIES[n].address),
                        (g = a),
                        (0, L.Mg)(a) && (g = w.WRAPPED_NATIVE_CURRENCIES[n].address),
                        (e.next = 12),
                        (0, B.V)(z.g, { chainId: n })
                      );
                    case 12:
                      if (
                        ((j = e.sent),
                        (O = null === j || void 0 === j ? void 0 : j.getSigner()),
                        u && d)
                      ) {
                        e.next = 16;
                        break;
                      }
                      throw new Error('No input or output symbol provided');
                    case 16:
                      return (
                        (e.next = 18),
                        Promise.all([
                          m
                            .getQuote({
                              owner: l,
                              kind: w.OrderKind.SELL,
                              amount: o,
                              sellToken: b,
                              sellTokenDecimals: i,
                              buyToken: g,
                              buyTokenDecimals: c,
                              signer: O,
                              appCode: L.HT,
                              partnerFee: (0, L.ZA)(u, d),
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
                          x.getTokenUsdPrice(n, b).catch(function (e) {
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
                          x.getTokenUsdPrice(n, g).catch(function (e) {
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
                        ((S = e.sent),
                        (k = (0, R.Z)(S, 3)),
                        (f = k[0]),
                        (h = k[1]),
                        (v = k[2]),
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
                        ((I = (0, U.O)(h).multipliedBy((0, U.O)(o).dividedBy(Math.pow(10, i)))),
                        (C = (0, U.O)(v).multipliedBy(
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
                        (A = (0, V.WG)(
                          new Error('No suggested slippage found'),
                          V.aD.MAIN_ACTION,
                          !0
                        )),
                        null === p || void 0 === p || p(A),
                        console.error(A),
                        new Error('No suggested slippage found'))
                      );
                    case 44:
                      if (f.quoteResults.amountsAndCosts.afterPartnerFees.buyAmount) {
                        e.next = 50;
                        break;
                      }
                      throw (
                        (console.error('No buy amount found'),
                        (T = (0, V.WG)(new Error('No buy amount found'), V.aD.MAIN_ACTION, !0)),
                        null === p || void 0 === p || p(T),
                        console.error(T),
                        new Error('No buy amount found'))
                      );
                    case 50:
                      return e.abrupt('return', {
                        srcToken: s,
                        srcUSD: I.toString(),
                        srcAmount: o,
                        srcDecimals: i,
                        destToken: a,
                        destUSD: C.toString(),
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
        K = r(87886);
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : X(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function $(e) {
        return ee.apply(this, arguments);
      }
      function ee() {
        return (ee = (0, b.Z)(
          y().mark(function e(t) {
            var r, n, o, s, i, a, c, l, u, d, p;
            return y().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.chainId),
                      (n = t.amount),
                      (o = t.srcToken),
                      (s = t.srcDecimals),
                      (i = t.destToken),
                      (a = t.destDecimals),
                      (c = t.user),
                      (l = t.options),
                      (u = void 0 === l ? {} : l),
                      (d = (0, K.w_)(r)),
                      (p = d.paraswap),
                      e.abrupt(
                        'return',
                        p
                          .getRate({
                            amount: n,
                            srcToken: o,
                            srcDecimals: s,
                            destToken: i,
                            destDecimals: a,
                            userAddress: c || Q.d,
                            side: Y.PC.SELL,
                            options: J(
                              J({}, u),
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
                              destToken: i,
                              destUSD: e.destUSD,
                              destAmount: e.destAmount,
                              destDecimals: a,
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
            return _.b.includes(e) ? 'cowprotocol' : 'paraswap';
          })(e.chainId);
        },
        re = r(53097),
        ne = r(18376),
        oe = r(72645),
        se = r(65361),
        ie = r(48120),
        ae = r(37096),
        ce = r(19408),
        le = r(78864),
        ue = r(61782),
        de = r(94054),
        pe = r(10315),
        xe = r(18972),
        me = r(21489),
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
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : he(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var be = function (e) {
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
                  ve(ve({ sx: { fontSize: '14px' } }, e), {}, { children: (0, fe.jsx)(ue.Z, {}) })
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
                  xe.Z,
                  {
                    value: e.chainId,
                    children: (0, fe.jsxs)(s.Z, {
                      sx: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                      children: [
                        (0, fe.jsx)(me.gO, { size: 16, logo: e.networkLogoPath, sx: { mr: 1 } }),
                        (0, fe.jsx)(i.Z, {
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
        ge = function (e) {
          return 'paraswap' === (null === e || void 0 === e ? void 0 : e.provider);
        },
        ye = function (e) {
          return 'cowprotocol' === (null === e || void 0 === e ? void 0 : e.provider);
        },
        je = r(24243),
        we = r(75331),
        Oe = r(2593),
        Se = r(56371),
        ke = r(58299),
        De = r.n(ke),
        Ie = r(92997),
        Ce = r(98029);
      function Ae(e, t) {
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
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ae(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ae(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Ze = r(64041),
        Ee = r(64409),
        Ne = r(73886),
        Pe = r(84207),
        Re = r(53008);
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
      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ue(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ue(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var _e = function (e) {
          var t,
            r,
            s = e.inputAmount,
            i = e.inputToken,
            c = e.inputName,
            l = e.outputName,
            d = e.outputToken,
            p = e.inputSymbol,
            x = e.outputSymbol,
            m = e.slippage,
            v = e.blocked,
            g = e.loading,
            O = e.isWrongNetwork,
            S = e.chainId,
            k = e.switchRates,
            D = e.setShowGasStation,
            C = (0, h.Y)(
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
            A = (0, R.Z)(C, 8),
            T = A[0],
            E = A[1],
            N = A[2],
            U = A[3],
            _ = A[4],
            M = A[5],
            W = A[6],
            F = A[7],
            G = (0, n.vR)(),
            q = G.approvalTxState,
            Y = G.mainTxState,
            Q = G.loadingTxns,
            X = G.setMainTxState,
            J = G.setTxError,
            $ = G.setGasLimit,
            ee = G.setLoadingTxns,
            te = G.setApprovalTxState,
            re = (0, f.Z)(),
            oe = re.sendTx,
            ie = re.signTxData,
            ae = (0, I.NL)(),
            ce = (0, u.Mo)(S),
            le = (0, a.useState)(),
            ue = le[0],
            de = le[1],
            pe = (0, a.useState)(void 0),
            xe = pe[0],
            me = pe[1],
            he = (function (e) {
              return (0, Ce.D)({
                mutationFn: (function () {
                  var t = (0, b.Z)(
                    y().mark(function t(r) {
                      var n, o, s, i, a, c, l, u, d, p, x, m, f, h;
                      return y().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n = r.srcToken),
                                (o = r.srcDecimals),
                                (s = r.destToken),
                                (i = r.destDecimals),
                                (a = r.user),
                                (c = r.route),
                                (l = r.maxSlippage),
                                (u = r.permit),
                                (d = r.deadline),
                                (p = r.partner),
                                (x = (0, K.w_)(e)),
                                (m = x.paraswap),
                                (f = x.feeTarget),
                                (t.next = 4),
                                m.buildTx(
                                  {
                                    srcToken: n,
                                    srcDecimals: o,
                                    srcAmount: c.srcAmount,
                                    destToken: s,
                                    destDecimals: i,
                                    userAddress: a,
                                    priceRoute: c,
                                    slippage: l,
                                    takeSurplus: !0,
                                    partner: p,
                                    partnerAddress: f,
                                    permit: u,
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
                                  Te(
                                    Te({}, h),
                                    {},
                                    {
                                      gasLimit: Oe.O$.from('500000'),
                                      gasPrice: void 0,
                                      value: Oe.O$.from(h.value),
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
            })(null !== (t = ce.underlyingChainId) && void 0 !== t ? t : S),
            ve = he.mutateAsync,
            be =
              (null === (r = Ee.Q[S]) || void 0 === r ? void 0 : r[i]) &&
              'cowprotocol' !== (null === k || void 0 === k ? void 0 : k.provider),
            ke = U === Ze.n.PERMIT && be,
            Ae = (0, a.useMemo)(
              function () {
                return void 0 !== xe && -1 !== xe && '0' !== s && !O && xe < Number(s);
              },
              [xe, s, O]
            ),
            Ue = (function () {
              var e = (0, b.Z)(
                y().mark(function e() {
                  var t, r, n, o, s, a, u, f, h, v, b, g, O, D, I, C, A, E, R, U, _, H, G, q, Q;
                  return y().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((X(Le(Le({}, Y), {}, { loading: !0 })), !ge(k))) {
                              e.next = 37;
                              break;
                            }
                            return (
                              (e.prev = 2),
                              (e.next = 5),
                              ve({
                                srcToken: i,
                                srcDecimals: k.srcDecimals,
                                destDecimals: k.destDecimals,
                                destToken: d,
                                route: k.optimalRateData,
                                user: T,
                                maxSlippage: 1e4 * Number(m),
                                permit: ue && ue.signature,
                                deadline: ue && ue.deadline,
                                partner: 'aave-widget',
                              })
                            );
                          case 5:
                            return ((n = e.sent).chainId = S), (e.next = 9), N(n, S);
                          case 9:
                            return (o = e.sent), (e.next = 12), oe(o);
                          case 12:
                            return (
                              (s = e.sent),
                              (a = {
                                action: 'switch',
                                asset: k.srcToken,
                                assetName: c,
                                amount: (0, Se.formatUnits)(k.srcAmount, k.srcDecimals),
                                amountUsd: k.srcUSD,
                                outAsset: k.destToken,
                                outAmount: (0, Se.formatUnits)(k.destAmount, k.destDecimals),
                                outAmountUsd: k.destUSD,
                                outAssetName: l,
                              }),
                              (e.prev = 14),
                              (e.next = 17),
                              s.wait(1)
                            );
                          case 17:
                            M(s.hash, { txState: 'success' }, { chainId: S }),
                              X({ txHash: s.hash, loading: !1, success: !0 }),
                              ae.invalidateQueries({ queryKey: P.B.poolTokens(T, W) }),
                              (e.next = 28);
                            break;
                          case 22:
                            (e.prev = 22),
                              (e.t0 = e.catch(14)),
                              (u = (0, V.WG)(e.t0, V.aD.MAIN_ACTION, !1)),
                              J(u),
                              X({ txHash: s.hash, loading: !1 }),
                              M(s.hash, Le({ txState: 'failed' }, a), { chainId: S });
                          case 28:
                            e.next = 35;
                            break;
                          case 30:
                            (e.prev = 30),
                              (e.t1 = e.catch(2)),
                              (f = (0, V.WG)(e.t1, V.aD.GAS_ESTIMATION, !1)),
                              J(f),
                              X({ txHash: void 0, loading: !1 });
                          case 35:
                            e.next = 110;
                            break;
                          case 37:
                            if (!ye(k)) {
                              e.next = 109;
                              break;
                            }
                            return (e.prev = 38), (e.next = 41), (0, B.V)(z.g, { chainId: S });
                          case 41:
                            if (
                              ((h = e.sent),
                              (v = (0, j.hE)(k.destAmount)
                                .multipliedBy((0, j.hE)(1).minus((0, j.hE)(m)))
                                .toFixed(0)),
                              (b = Math.round(100 * Number(m) * 100)),
                              !(0, L.Mg)(i))
                            ) {
                              e.next = 76;
                              break;
                            }
                            return (
                              (g = Math.floor(Date.now() / 1e3) + 1800),
                              (e.next = 48),
                              (0, L.Xp)(k.srcAmount, v.toString(), d, T, g, p, x, k.quoteId)
                            );
                          case 48:
                            return (O = e.sent), (e.next = 51), N(O, S);
                          case 51:
                            return (D = e.sent), (e.prev = 52), (e.next = 55), oe(D);
                          case 55:
                            return (
                              (I = e.sent),
                              M(I.hash, { txState: 'success' }, { chainId: S }),
                              X({ loading: !1, success: !0 }),
                              (e.next = 60),
                              (0, L.tV)(k.srcAmount, v.toString(), d, T, S, p, x)
                            );
                          case 60:
                            return (C = e.sent), (e.next = 63), (0, w.calculateUniqueOrderId)(S, C);
                          case 63:
                            return (
                              (A = e.sent), (e.next = 66), (0, L.mc)(A, De()((0, L.GE)(p, x)), S)
                            );
                          case 66:
                            setTimeout(function () {
                              X({ loading: !1, success: !0, txHash: A });
                            }, 3e4),
                              (e.next = 74);
                            break;
                          case 69:
                            (e.prev = 69),
                              (e.t2 = e.catch(52)),
                              J((0, V.WG)(e.t2, V.aD.MAIN_ACTION, !1)),
                              X({
                                txHash: null === (E = I) || void 0 === E ? void 0 : E.hash,
                                loading: !1,
                              }),
                              null !== (R = I) &&
                                void 0 !== R &&
                                R.hash &&
                                M(
                                  null === (U = I) || void 0 === U ? void 0 : U.hash,
                                  { txState: 'failed' },
                                  { chainId: S }
                                );
                          case 74:
                            e.next = 100;
                            break;
                          case 76:
                            return (e.prev = 76), (e.next = 79), (0, Z.k)(T, h);
                          case 79:
                            if (!e.sent) {
                              e.next = 90;
                              break;
                            }
                            return (
                              (e.next = 82),
                              (0, L.YN)({
                                provider: h,
                                tokenDest: d,
                                chainId: S,
                                user: T,
                                amount: k.srcAmount,
                                tokenSrc: i,
                                tokenSrcDecimals: k.srcDecimals,
                                tokenDestDecimals: k.destDecimals,
                                afterNetworkCostsBuyAmount:
                                  k.amountAndCosts.afterNetworkCosts.buyAmount.toString(),
                                slippageBps: b,
                                inputSymbol: p,
                                outputSymbol: x,
                                quote: k.order,
                              })
                            );
                          case 82:
                            return (
                              (H = e.sent),
                              (e.next = 85),
                              oe({
                                data: H.data,
                                to: H.to,
                                value: Oe.O$.from(H.value),
                                gasLimit: Oe.O$.from(H.gasLimit),
                              })
                            );
                          case 85:
                            (G = e.sent),
                              M(G.hash, { txState: 'success' }, { chainId: S }),
                              X({ loading: !1, success: !0, txHash: H.orderId }),
                              (e.next = 94);
                            break;
                          case 90:
                            return (
                              (e.next = 92),
                              (0, L.gO)({
                                tokenSrc: i,
                                tokenSrcDecimals: k.srcDecimals,
                                tokenDest: d,
                                tokenDestDecimals: k.destDecimals,
                                quote: k.order,
                                amount: k.srcAmount,
                                afterNetworkCostsBuyAmount:
                                  k.amountAndCosts.afterNetworkCosts.buyAmount.toString(),
                                slippageBps: b,
                                chainId: S,
                                user: T,
                                provider: h,
                                inputSymbol: p,
                                outputSymbol: x,
                              })
                            );
                          case 92:
                            (_ = e.sent),
                              X({
                                loading: !1,
                                success: !0,
                                txHash: null !== (q = _) && void 0 !== q ? q : void 0,
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
                              J(Q),
                              X({ txHash: void 0, loading: !1, success: !1 });
                          case 107:
                            e.next = 110;
                            break;
                          case 109:
                            J((0, V.WG)(new Error('No sell rates found'), V.aD.MAIN_ACTION, !0));
                          case 110:
                            try {
                              F(se.vh.SWAP, {
                                chainId: S,
                                inputSymbol: p,
                                outputSymbol: x,
                                pair: ''.concat(p, '-').concat(x),
                              });
                            } catch (y) {
                              console.error(y);
                            }
                            ae.invalidateQueries({
                              queryKey: P.B.poolTokens(
                                T,
                                null !== (t = (0, ne.N_)(S)) && void 0 !== t ? t : W
                              ),
                            }),
                              ae.invalidateQueries({
                                queryKey: P.B.transactionHistory(
                                  T,
                                  null !== (r = (0, ne.N_)(S)) && void 0 !== r ? r : W
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
            _e = (function () {
              var e = (0, b.Z)(
                y().mark(function e() {
                  var t, r, n, o, a, c, l, u, d, p, x, m, f;
                  return y().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!ge(k)) {
                              e.next = 4;
                              break;
                            }
                            (t = k.optimalRateData.tokenTransferProxy), (e.next = 12);
                            break;
                          case 4:
                            if (!ye(k)) {
                              e.next = 8;
                              break;
                            }
                            (t = w.COW_PROTOCOL_VAULT_RELAYER_ADDRESS[S]), (e.next = 12);
                            break;
                          case 8:
                            return (
                              (r = (0, V.WG)(
                                new Error('Invalid swap provider rates.'),
                                V.aD.APPROVAL,
                                !1
                              )),
                              J(r),
                              te({ txHash: void 0, loading: !1 }),
                              e.abrupt('return')
                            );
                          case 12:
                            if (
                              ((n = (0, K.sm)(s, k.srcDecimals, 0)),
                              (o = { spender: t, user: T, token: i, amount: n }),
                              (e.prev = 14),
                              !ke)
                            ) {
                              e.next = 30;
                              break;
                            }
                            return (
                              (a = Math.floor(Date.now() / 1e3 + 3600).toString()),
                              (e.next = 19),
                              _(Le(Le({}, o), {}, { deadline: a }), { chainId: S })
                            );
                          case 19:
                            return (
                              (c = e.sent),
                              te(Le(Le({}, q), {}, { loading: !0 })),
                              (e.next = 23),
                              ie(c)
                            );
                          case 23:
                            (l = e.sent),
                              (u = (0, Se.splitSignature)(l)),
                              (d = Se.defaultAbiCoder.encode(
                                [
                                  'address',
                                  'address',
                                  'uint256',
                                  'uint256',
                                  'uint8',
                                  'bytes32',
                                  'bytes32',
                                ],
                                [o.user, o.spender, o.amount, a, u.v, u.r, u.s]
                              )),
                              de({
                                signature: d,
                                deadline: a,
                                amount: o.amount,
                                approvedToken: o.spender,
                              }),
                              te({ txHash: Ie.Z, loading: !1, success: !0 }),
                              (e.next = 43);
                            break;
                          case 30:
                            return (p = E(o, { chainId: S, amount: n })), (e.next = 33), N(p, S);
                          case 33:
                            return (
                              (x = e.sent),
                              te(Le(Le({}, q), {}, { loading: !0 })),
                              (e.next = 37),
                              oe(x)
                            );
                          case 37:
                            return (m = e.sent), (e.next = 40), m.wait(1);
                          case 40:
                            te({ txHash: m.hash, loading: !1, success: !0 }), J(void 0), Be();
                          case 43:
                            e.next = 50;
                            break;
                          case 45:
                            (e.prev = 45),
                              (e.t0 = e.catch(14)),
                              (f = (0, V.WG)(e.t0, V.aD.GAS_ESTIMATION, !1)),
                              J(f),
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
            Be = (0, a.useCallback)(
              (0, b.Z)(
                y().mark(function e() {
                  var t, r, n, o, s, a;
                  return y().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!ge(k) || !k.optimalRateData.tokenTransferProxy) {
                            e.next = 13;
                            break;
                          }
                          return (
                            de(void 0),
                            te({ txHash: void 0, loading: !1, success: !1 }),
                            ee(!0),
                            (t = (0, u.VH)(S)),
                            (r = new je.A(t)),
                            (e.next = 8),
                            r.approvedAmount({
                              user: T,
                              token: i,
                              spender: k.optimalRateData.tokenTransferProxy,
                            })
                          );
                        case 8:
                          (n = e.sent), me(n), ee(!1), (e.next = 24);
                          break;
                        case 13:
                          if (!ye(k)) {
                            e.next = 24;
                            break;
                          }
                          return (
                            de(void 0),
                            te({ txHash: void 0, loading: !1, success: !1 }),
                            ee(!0),
                            (o = (0, u.VH)(S)),
                            (s = new je.A(o)),
                            (e.next = 21),
                            s.approvedAmount({
                              user: T,
                              token: i,
                              spender: w.COW_PROTOCOL_VAULT_RELAYER_ADDRESS[S],
                            })
                          );
                        case 21:
                          (a = e.sent), me(a), ee(!1);
                        case 24:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [S, ee, T, i, k, te]
            );
          return (
            (0, a.useEffect)(
              function () {
                T && Be();
              },
              [Be, T]
            ),
            (0, a.useEffect)(
              function () {
                var e = 0;
                ge(k) && (e += Number(H.eB[we.UQ.withdrawAndSwitch].recommended)),
                  Ae && !q.success && (e += Number(Re.pQ)),
                  (0, L.Mg)(i) && (e += Number(H.eB[we.UQ.withdrawAndSwitch].recommended)),
                  $(e.toString()),
                  D(Ae || (0, L.Mg)(i));
              },
              [Ae, q, $, D]
            ),
            (0, fe.jsx)(Pe.B, {
              mainTxState: Y,
              approvalTxState: q,
              isWrongNetwork: O,
              preparingTransactions: Q,
              handleAction: Ue,
              requiresAmount: !0,
              amount: s,
              handleApproval: function () {
                return _e();
              },
              requiresApproval: !v && Ae,
              actionText: (0, fe.jsx)(o.cC, { id: 'vH2C/2' }),
              actionInProgressText: (0, fe.jsx)(o.cC, { id: 'JPHuMW' }),
              errorParams: {
                loading: !1,
                disabled: v || (!q.success && Ae),
                content: (0, fe.jsx)(o.cC, { id: 'vH2C/2' }),
                handleClick: Ue,
              },
              fetchingData: g,
              blocked: v,
              tryPermit: be,
            })
          );
        },
        Be = r(4730),
        Me = r(19485),
        We = r(61744),
        He = r(58771),
        Fe = r(33740),
        Ve = r(6571),
        ze = r(2734),
        Ge = r(73601),
        qe = r(69417),
        Ye = r(59334),
        Qe = r(57333),
        Ke = r(13441),
        Xe = r(32867),
        Je = r(45640),
        $e = r(10818),
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
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var nt = a.forwardRef(function (e, t) {
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
            l = e.onChange,
            u = e.disabled,
            d = e.disableInput,
            p = e.onSelect,
            x = e.assets,
            m = e.maxValue,
            f = e.forcedMaxValue,
            v = e.isMaxSelected,
            b = e.loading,
            g = void 0 !== b && b,
            y = e.chainId,
            j = e.selectedAsset,
            w = e.balanceTitle,
            O = e.showBalance,
            I = void 0 === O || O,
            C = (0, ze.Z)(),
            A = function (e) {
              p && p(e), l && l(''), U();
            },
            T = (0, Ke.z)().erc20Service,
            Z = (0, a.useState)(!1),
            E = Z[0],
            N = Z[1],
            P = (0, a.useRef)(null),
            U = function () {
              N(!1), z();
            },
            L = (0, a.useState)(x),
            _ = L[0],
            B = L[1],
            M = (0, a.useState)(!1),
            W = M[0],
            H = M[1],
            F = (0, h.Y)(function (e) {
              return e.account;
            });
          (0, a.useEffect)(
            function () {
              B(x);
            },
            [x]
          );
          var V = x.filter(function (e) {
              return oe.xp.includes(e.symbol);
            }),
            z = function () {
              B(x), H(!1);
            };
          return (0, fe.jsxs)(s.Z, {
            ref: P,
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
                  g
                    ? (0, fe.jsx)(s.Z, {
                        sx: { flex: 1 },
                        children: (0, fe.jsx)(S.Z, { color: 'inherit', size: '16px' }),
                      })
                    : (0, fe.jsx)(Ge.ZP, {
                        sx: { flex: 1 },
                        placeholder: '0.00',
                        disabled: u || d,
                        value: r,
                        autoFocus: !0,
                        onChange: function (e) {
                          l && (Number(e.target.value) > Number(m) ? l('-1') : l(e.target.value));
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
                    (0, fe.jsx)(k.Z, {
                      sx: {
                        minWidth: 0,
                        p: 0,
                        left: 8,
                        zIndex: 1,
                        color: 'text.muted',
                        '&:hover': { color: 'text.secondary' },
                      },
                      onClick: function () {
                        l && l('');
                      },
                      disabled: u,
                      children: (0, fe.jsx)(Fe.Z, { height: 16 }),
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
                      (0, fe.jsx)(Je.UD, {
                        symbol: j.symbol,
                        logoURI: j.logoURI,
                        sx: { mr: 2, ml: 3, fontSize: '24px' },
                      }),
                      (0, fe.jsx)(i.Z, {
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
                          children: (0, fe.jsx)(He.Z, {}),
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
                        (0, fe.jsx)(i.Z, {
                          variant: 'main16',
                          sx: { fontSize: 18, fontWeight: 600, mb: 3 },
                          children: (0, fe.jsx)(o.cC, { id: '0RrIzN' }),
                        }),
                        (0, fe.jsxs)(s.Z, {
                          sx: {
                            borderBottom: '1px solid '.concat(C.palette.divider),
                            position: 'sticky',
                            top: 0,
                            zIndex: 2,
                            mb: 3,
                            pb: 3,
                            backgroundColor: C.palette.background.paper,
                            boxShadow: '0px 4px 6px -6px rgba(0, 0, 0, 0.1)',
                            marginTop: -3,
                            paddingTop: 3,
                          },
                          children: [
                            (0, fe.jsx)($e.M, {
                              onSearchTermChange: function (e) {
                                var t = e.trim().toLowerCase(),
                                  r = x.filter(function (e) {
                                    return (
                                      e.symbol.toLowerCase().includes(t) ||
                                      e.name.toLowerCase().includes(t) ||
                                      e.address.toLowerCase() === t
                                    );
                                  });
                                0 === r.length && (0, Me.isAddress)(e)
                                  ? (H(!0),
                                    Promise.all([T.getTokenInfo(e, y), T.getBalance(e, F, y)])
                                      .then(function (e) {
                                        var t = (0, R.Z)(e, 2),
                                          r = t[0],
                                          n = t[1],
                                          o = rt(
                                            {
                                              chainId: y,
                                              balance: (0, We.formatUnits)(n, r.decimals),
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
                                        return H(!1);
                                      }))
                                  : B(r);
                              },
                              placeholder: 'Search name or paste address',
                              disableFocus: !0,
                            }),
                            x.length > 3 &&
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
                                        borderColor: C.palette.divider,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        '&:hover': { backgroundColor: C.palette.divider },
                                      },
                                      onClick: function () {
                                        return A(e);
                                      },
                                      children: [
                                        (0, fe.jsx)(Je.UD, {
                                          logoURI: e.logoURI,
                                          symbol: e.symbol,
                                          sx: { width: 24, height: 24, mr: 1 },
                                        }),
                                        (0, fe.jsx)(i.Z, {
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
                              background: C.palette.divider,
                              borderRadius: '4px',
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                              background: C.palette.action.hover,
                            },
                          },
                          children: W
                            ? (0, fe.jsx)(s.Z, {
                                sx: {
                                  maxHeight: '220px',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  minHeight: '80px',
                                },
                                children: (0, fe.jsx)(S.Z, { sx: { mx: 'auto', my: 'auto' } }),
                              })
                            : _.length > 0
                              ? _.map(function (e) {
                                  var t;
                                  return (0, fe.jsxs)(
                                    xe.Z,
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
                                            'dark' === C.palette.mode
                                              ? 'rgba(255, 255, 255, 0.05)'
                                              : 'rgba(0, 0, 0, 0.03)',
                                        },
                                      },
                                      onClick: function () {
                                        return A(e);
                                      },
                                      children: [
                                        (0, fe.jsx)(Je.UD, {
                                          symbol: e.symbol,
                                          logoURI: e.logoURI,
                                          sx: { mr: 2, width: 28, height: 28 },
                                        }),
                                        (0, fe.jsx)(Ye.Z, {
                                          sx: { flexGrow: 0 },
                                          primary: (0, fe.jsx)(i.Z, {
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
                                            children: (0, fe.jsx)(He.Z, {}),
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
                              : (0, fe.jsx)(i.Z, {
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
                  g
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
                  I &&
                    j.balance &&
                    (0, fe.jsxs)(fe.Fragment, {
                      children: [
                        (0, fe.jsxs)(i.Z, {
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
                              l && l(f || '-1');
                            },
                            disabled: u || v || (!!f && Number(j.balance) < Number(f)),
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
        it = [
          {
            regex: /^Source and destination tokens cannot be the same$/,
            message: 'Source and destination tokens cannot be the same',
          },
        ];
      var at = function (e) {
          var t,
            r,
            n,
            o,
            s = e.error;
          s instanceof Error &&
            ((n = (0, K.aE)(s.message)) ||
              (o = (function (e) {
                var t;
                return e in st
                  ? st[e]
                  : null ===
                        (t = it.find(function (t) {
                          return t.regex.test(e);
                        })) || void 0 === t
                    ? void 0
                    : t.message;
              })(s.message)));
          var a =
            s instanceof Error
              ? null !== (t = null !== (r = n) && void 0 !== r ? r : o) && void 0 !== t
                ? t
                : s.message
              : 'There was an issue fetching rates.';
          return (0, fe.jsx)(T.v, {
            severity: 'error',
            icon: !1,
            sx: { mt: 4 },
            children: (0, fe.jsx)(i.Z, { variant: 'caption', children: a }),
          });
        },
        ct = function (e) {
          var t = e.ratesError,
            r = e.balance,
            n = e.inputAmount;
          return t
            ? (0, fe.jsx)(at, { error: t })
            : Number(n) > Number(r)
              ? (0, fe.jsx)(T.v, {
                  severity: 'error',
                  sx: { mt: 4 },
                  icon: !1,
                  children: (0, fe.jsx)(i.Z, {
                    variant: 'caption',
                    children: (0, fe.jsx)(o.cC, { id: 'aX31hk' }),
                  }),
                })
              : null;
        },
        lt = r(58364),
        ut = r(47739),
        dt = r(12523),
        pt = function (e) {
          var t = e.rates,
            r = e.srcSymbol,
            n = e.destSymbol,
            c = e.showPriceImpact,
            l = void 0 === c || c,
            u = (0, a.useState)(!1),
            d = u[0],
            p = u[1],
            x = (0, a.useMemo)(
              function () {
                var e = (0, j.pV)(t.srcAmount, t.srcDecimals),
                  r = (0, j.pV)(t.destAmount, t.destDecimals);
                return d ? e.div(r) : r.div(e);
              },
              [d, t.srcAmount, t.destAmount]
            ),
            m = (0, a.useMemo)(
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
              (0, fe.jsx)(ut.Z, {
                onClick: function () {
                  return p(function (e) {
                    return !e;
                  });
                },
                disableTouchRipple: !0,
                sx: { mx: 1 },
                children: (0, fe.jsx)(D.Z, {
                  sx: { fontSize: '12px' },
                  children: (0, fe.jsx)(lt.Z, {}),
                }),
              }),
              (0, fe.jsx)(Xe.B, {
                variant: 'main12',
                symbol: d ? r : n,
                symbolsVariant: 'secondary12',
                symbolsColor: 'text.secondary',
                value: x.toString(),
                visibleDecimals: 3,
              }),
              l &&
                (0, fe.jsx)(dt.y, {
                  title: (0, fe.jsx)(i.Z, {
                    variant: 'caption',
                    children: (0, fe.jsx)(o.cC, { id: 'kH6wUX' }),
                  }),
                  children: (0, fe.jsxs)(s.Z, {
                    sx: { display: 'flex', cursor: 'pointer' },
                    children: [
                      (0, fe.jsx)(i.Z, { variant: 'caption', children: '(' }),
                      (0, fe.jsx)(Xe.B, { variant: 'caption', value: m.toString(), percent: !0 }),
                      (0, fe.jsx)(i.Z, { variant: 'caption', children: ')' }),
                    ],
                  }),
                }),
            ],
          });
        },
        xt = r(22659),
        mt = r(35294),
        ft = r(591),
        ht = r(47120),
        vt = r(87109),
        bt = ['0.10', '0.50', '2.0'],
        gt = function (e) {
          var t = e.slippage,
            r = e.setSlippage,
            n = e.slippageValidation,
            c = (0, a.useState)(),
            l = c[0],
            u = c[1],
            d = (0, a.useState)(!1),
            p = d[0],
            x = d[1],
            m = Boolean(l);
          return (0, fe.jsxs)(s.Z, {
            sx: { display: 'flex', alignItems: 'center', gap: 1 },
            children: [
              (0, fe.jsxs)(i.Z, {
                variant: 'caption',
                color: 'text.secondary',
                children: [
                  (0, fe.jsx)(o.cC, { id: 'CMHmbm' }),
                  (0, fe.jsxs)(mt.Z, {
                    sx: { maxWidth: '330px' },
                    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                    transformOrigin: { vertical: 'top', horizontal: 'right' },
                    anchorEl: l,
                    id: 'switch-slippage-selector',
                    MenuListProps: {
                      'aria-labelledby': 'switch-slippage-selector-button',
                      sx: { py: 3, px: 4 },
                    },
                    open: m,
                    onClose: function () {
                      u(null);
                    },
                    children: [
                      (0, fe.jsx)(i.Z, {
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
                                r(e), x(!1);
                              })(t);
                            },
                            children: bt.map(function (e) {
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
                              r(e.target.value), x(!0);
                            },
                            placeholder: 'Custom',
                            endAdornment: (0, fe.jsx)(vt.Z, {
                              position: 'end',
                              children: (0, fe.jsx)(i.Z, {
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
                        (0, fe.jsx)(T.v, {
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
                  u(e.currentTarget);
                },
                'aria-controls': 'switch-slippage-selector',
                children: (0, fe.jsx)(D.Z, {
                  sx: { fontSize: '16px' },
                  children: (0, fe.jsx)(xt.Z, {}),
                }),
              }),
            ],
          });
        },
        yt = r(67720),
        jt = r(49212),
        wt = r(73695),
        Ot = r(61933),
        St = r(56365),
        kt = r(5506),
        Dt = function () {
          return (0, fe.jsx)(D.Z, {
            sx: { ml: 2, fontWeight: 800, fontSize: '20px', color: 'text.primary' },
            children: (0, fe.jsx)(St.Z, {}),
          });
        },
        It = function (e) {
          var t = e.txHash,
            r = e.children,
            a = e.hideTx,
            c = e.customExplorerLink,
            l = e.customExplorerLinkText,
            u = (0, n.vR)(),
            d = u.close,
            p = u.mainTxState,
            x = (0, h.Y)(function (e) {
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
                      children: (0, fe.jsx)(kt.Z, {}),
                    }),
                  }),
                  (0, fe.jsx)(i.Z, {
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
                  a
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
                        href: c || x.explorerLinkBuilder({ tx: t || p.txHash }),
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: [l || (0, fe.jsx)(o.cC, { id: 'W1SSoD' }), (0, fe.jsx)(Dt, {})],
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
        Ct = r(60386),
        At = r(15186),
        Tt = function () {
          return (0, fe.jsx)(D.Z, {
            sx: { ml: 2, fontWeight: 800, fontSize: '20px', color: 'text.primary' },
            children: (0, fe.jsx)(St.Z, {}),
          });
        },
        Zt = function (e) {
          var t = e.txHash,
            r = e.children,
            a = e.hideTx,
            c = e.customExplorerLink,
            l = e.customExplorerLinkText,
            u = (0, n.vR)(),
            d = u.close,
            p = u.mainTxState,
            x = (0, h.Y)(function (e) {
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
                      children: (0, fe.jsx)(At.Z, {}),
                    }),
                  }),
                  (0, fe.jsx)(i.Z, {
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
                  a
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
                        href: c || x.explorerLinkBuilder({ tx: t || p.txHash }),
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: [
                          l || (0, fe.jsx)(o.cC, { id: 'W1SSoD' }),
                          t && (0, fe.jsx)(Tt, {}),
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
            l = e.outAmount,
            u = e.outSymbol,
            d = e.outIconSymbol,
            p = e.iconUri,
            x = e.outIconUri,
            m = e.provider,
            f = e.chainId,
            h = e.destDecimals,
            v = e.srcDecimals,
            g = te({ chainId: f }),
            w = (0, wt.V)(),
            O = w.trackOrder,
            k = w.setHasActiveOrders,
            D = (0, a.useState)('open'),
            I = D[0],
            C = D[1],
            A = (0, a.useState)(void 0),
            T = A[0],
            Z = A[1],
            E = (0, a.useState)(r),
            N = E[0],
            P = E[1],
            R = (0, a.useState)(l),
            U = R[0],
            _ = R[1],
            B = Ot.m5[f].explorerLink;
          (0, a.useEffect)(
            function () {
              'cowprotocol' === g && t ? O(t, f) : 'cowprotocol' === g && 'open' === I && k(!0);
            },
            [t, f, g, O, k]
          );
          var M = (0, a.useRef)(null),
            W = (function () {
              var e = (0, b.Z)(
                y().mark(function e() {
                  return y().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          'cowprotocol' === g &&
                            t &&
                            (0, L.co)(t, f)
                              .then(function (e) {
                                (0, L.cZ)(e.status)
                                  ? (C('succeed'),
                                    Z(
                                      Oe.O$.from(e.executedBuyAmount)
                                        .sub(Oe.O$.from((0, ie.v)(l, h)))
                                        .toBigInt()
                                    ),
                                    _((0, j.Fv)(e.executedBuyAmount, h)),
                                    P((0, j.Fv)(e.executedSellAmount, v)),
                                    M.current && clearInterval(M.current))
                                  : (0, L.ec)(e.status)
                                    ? (C('failed'), M.current && clearInterval(M.current))
                                    : (0, L.j_)(e.status) && C('open');
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
          (0, a.useEffect)(
            function () {
              t &&
                'cowprotocol' === g &&
                f &&
                h &&
                null === M.current &&
                (M.current = setInterval(W, 1e4));
            },
            [t, f, g, h]
          );
          var H = (0, a.useMemo)(
              function () {
                return 'cowprotocol' === m && 'open' === I
                  ? Zt
                  : 'cowprotocol' === m && 'failed' === I
                    ? It
                    : Ct.R;
              },
              [I, m]
            ),
            F = T ? Number((0, j.Fv)(T.toString(), h)) : void 0,
            V =
              F && F > 0.01
                ? 'Includes +'
                    .concat(F.toLocaleString(void 0, { maximumFractionDigits: 2 }), ' ')
                    .concat(u, ' Surplus')
                : void 0,
            z = (0, a.useMemo)(
              function () {
                return 'cowprotocol' === m ? (0, L.kN)(f, t) : ''.concat(B, '/tx/').concat(t);
              },
              [m, f, t]
            ),
            G = (0, a.useMemo)(
              function () {
                return 'cowprotocol' === m
                  ? t
                    ? (0, fe.jsx)(fe.Fragment, { children: 'View details' })
                    : (0, fe.jsxs)(fe.Fragment, {
                        children: [
                          (0, fe.jsx)(S.Z, {
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
              [m, t]
            );
          return (0, fe.jsxs)(H, {
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
                children: (0, fe.jsx)(i.Z, {
                  color: 'text.secondary',
                  children:
                    'cowprotocol' === m
                      ? (0, fe.jsx)(fe.Fragment, {
                          children:
                            'open' === I
                              ? (0, fe.jsx)(o.cC, { id: 'CGiscJ' })
                              : 'failed' === I
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
                      (0, fe.jsx)(i.Z, {
                        color: 'text.secondary',
                        children:
                          'cowprotocol' != m || (('open' != I || (0, L.Mg)(n)) && 'failed' != I)
                            ? 'Sent'
                            : 'Send',
                      }),
                      (0, fe.jsxs)(s.Z, {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        children: [
                          (0, fe.jsx)(Je.UD, { symbol: c, logoURI: p, sx: { fontSize: 20 } }),
                          (0, fe.jsxs)(i.Z, {
                            fontWeight: 600,
                            children: [
                              Number(N).toLocaleString(void 0, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: Number(N) < 0.01 ? 4 : 2,
                              }),
                              ' ',
                            ],
                          }),
                          (0, fe.jsx)(i.Z, {
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
                      (0, fe.jsx)(i.Z, {
                        color: 'text.secondary',
                        children:
                          'cowprotocol' != m || ('open' != I && 'failed' != I)
                            ? 'Received'
                            : 'Receive',
                      }),
                      (0, fe.jsxs)(s.Z, {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        children: [
                          (0, fe.jsx)(Je.UD, { symbol: d, logoURI: x, sx: { fontSize: 20 } }),
                          (0, fe.jsx)(i.Z, {
                            fontWeight: 600,
                            children: Number(U).toLocaleString(void 0, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: Number(U) < 0.01 ? 4 : 2,
                            }),
                          }),
                          (0, fe.jsx)(i.Z, {
                            fontWeight: 600,
                            sx: { color: 'text.secondary' },
                            children: u,
                          }),
                        ],
                      }),
                    ],
                  }),
                  V &&
                    (0, fe.jsx)(i.Z, {
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
      function Pt(e, t) {
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
      function Rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pt(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Pt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Ut = function (e) {
          var t,
            r = oe.n3.tokens,
            n = localStorage.getItem('customTokens');
          n && (r = r.concat(JSON.parse(n)));
          var o = r.map(function (e) {
              return Rt(Rt({}, e), {}, { balance: '0' });
            }),
            s = null !== (t = (0, u.Mo)(e).underlyingChainId) && void 0 !== t ? t : e;
          return o.filter(function (e) {
            return e.chainId === s;
          });
        },
        Lt = function (e) {
          var t,
            r,
            c,
            l = e.showSwitchInputAndOutputAssetsButton,
            d = void 0 === l || l,
            p = e.showTitle,
            g = void 0 === p || p,
            R = e.forcedDefaultInputToken,
            U = e.forcedChainId,
            _ = e.forcedDefaultOutputToken,
            M = e.supportedNetworks,
            W = e.switchDetails,
            H = e.inputBalanceTitle,
            F = e.outputBalanceTitle,
            V = e.initialFromTokens,
            q = e.showChangeNetworkWarning,
            Y = void 0 === q || q,
            Q = (0, a.useState)(''),
            K = Q[0],
            X = Q[1],
            J = (0, a.useState)(''),
            ee = J[0],
            oe = J[1],
            ue = (0, n.vR)(),
            de = ue.mainTxState,
            pe = ue.gasLimit,
            xe = ue.txError,
            me = ue.setTxError,
            he = ue.close,
            ve = (0, h.Y)(function (e) {
              return e.account;
            }),
            ge = (0, f.Z)(),
            je = ge.readOnlyModeAddress,
            we = ge.chainId,
            Oe = u.ei[u.el.proto_mainnet_v3],
            Se = (0, a.useState)(function () {
              return x.find(function (e) {
                return e.chainId === U;
              })
                ? U
                : Oe.chainId;
            }),
            ke = Se[0],
            De = Se[1],
            Ie = te({ chainId: ke }),
            Ce = (0, a.useState)('cowprotocol' == Ie ? '2' : '0.10'),
            Ae = Ce[0],
            Te = Ce[1],
            Ze = (0, a.useState)('paraswap' == Ie),
            Ee = Ze[0],
            Ne = Ze[1],
            Pe = (0, u.Mo)(ke),
            Re = (0, re.Q)(ke),
            Ue = (0, a.useState)(V),
            Le = Ue[0],
            Be = Ue[1],
            Me = (0, E.h)(Le, ke, ve),
            We = Me.data,
            He = Me.refetch,
            Fe = (0, a.useState)(!1),
            Ve = Fe[0],
            ze = Fe[1];
          (0, a.useEffect)(
            function () {
              try {
                ve &&
                  we &&
                  (0, B.V)(z.g, { chainId: we }).then(function (e) {
                    (0, Z.k)(ve, e).then(function (e) {
                      ze(e);
                    });
                  });
              } catch (e) {
                console.error(e);
              }
            },
            [ve, we]
          );
          var Ge = (0, a.useMemo)(
              function () {
                return (0, C.debounce)(function (e) {
                  oe(e);
                }, 300);
              },
              [oe]
            ),
            qe = (0, I.NL)(),
            Ye = (function () {
              var e = (0, b.Z)(
                y().mark(function e(t) {
                  var r, n, o;
                  return y().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          qe.setQueryData(
                            P.B.tokensBalance(null !== We && void 0 !== We ? We : [], ke, ve),
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
            Qe = (0, a.useMemo)(
              function () {
                var e,
                  t,
                  r = R,
                  n = _,
                  o = We || Le,
                  s = We || Le;
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
              [We, Le]
            ),
            Ke = Qe.defaultInputToken,
            Xe = Qe.defaultOutputToken,
            Je = (0, a.useState)(null !== R && void 0 !== R ? R : Ke),
            $e = Je[0],
            et = Je[1],
            tt = (0, a.useState)(null !== _ && void 0 !== _ ? _ : Xe),
            rt = tt[0],
            nt = tt[1];
          (0, a.useEffect)(
            function () {
              et(Ke);
            },
            [Ke]
          ),
            (0, a.useEffect)(
              function () {
                nt(Xe);
              },
              [Xe]
            );
          var st = (function (e, t) {
              var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = arguments.length > 3 ? arguments[3] : void 0;
              try {
                var o = Number(e);
                if ('cowprotocol' !== n)
                  return Number.isNaN(o)
                    ? { message: 'Invalid slippage', severity: Et.ERROR }
                    : o > 30
                      ? { message: 'Slippage must be lower 30%', severity: Et.ERROR }
                      : o < 0
                        ? { message: 'Slippage must be positive', severity: Et.ERROR }
                        : o > 10
                          ? { message: 'High slippage', severity: Et.WARNING }
                          : o < 0.1
                            ? {
                                message:
                                  'Slippage lower than 0.1% may result in failed transactions',
                                severity: Et.WARNING,
                              }
                            : void 0;
                if (r)
                  if (1 === t) {
                    if (o < 2)
                      return {
                        message: 'Slippage lower than 2% may result in failed transactions',
                        severity: Et.ERROR,
                      };
                  } else if (o < 0.5)
                    return {
                      message: 'Slippage lower than 0.5% may result in failed transactions',
                      severity: Et.ERROR,
                    };
              } catch (s) {
                return { message: 'Invalid slippage', severity: Et.ERROR };
              }
            })(Ae, ke, (0, L.Mg)(null === $e || void 0 === $e ? void 0 : $e.address), Ie),
            it = st && st.severity === Et.ERROR ? 0 : Number(Ae) / 100,
            at = (function (e) {
              var t = e.chainId,
                r = e.amount,
                n = e.srcToken,
                o = e.destToken,
                s = e.user,
                i = e.inputSymbol,
                a = e.outputSymbol,
                c = e.srcDecimals,
                l = e.destDecimals,
                u = e.isTxSuccess,
                d = te({ chainId: t });
              return (0, N.a)({
                queryFn: (function () {
                  var e = (0, b.Z)(
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
                                  destDecimals: l,
                                  inputSymbol: i,
                                  outputSymbol: a,
                                })
                              );
                            case 9:
                            case 12:
                              return e.abrupt('return', e.sent);
                            case 10:
                              return (
                                (e.next = 12),
                                $({
                                  chainId: t,
                                  amount: r,
                                  srcToken: n,
                                  destToken: o,
                                  user: s,
                                  srcDecimals: c,
                                  destDecimals: l,
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
                queryKey: P.B.cowProtocolRates(t, r, n, o, s),
                enabled: '0' !== r && !u,
                retry: 0,
                throwOnError: !1,
                refetchOnWindowFocus: function (e) {
                  return !e.state.error;
                },
              });
            })({
              chainId: ke,
              amount: '' === ee ? '0' : (0, j.pV)(ee, -1 * $e.decimals).toFixed(0),
              srcToken: $e.address,
              srcDecimals: $e.decimals,
              destToken: rt.address,
              destDecimals: rt.decimals,
              inputSymbol: $e.symbol,
              outputSymbol: rt.symbol,
              user: ve,
              options: { partner: 'aave-widget' },
              isTxSuccess: de.success,
            }),
            lt = at.data,
            ut = at.error,
            dt = at.isFetching;
          (0, a.useEffect)(
            function () {
              'cowprotocol' == Ie && ye(lt) && Te(lt.suggestedSlippage.toString());
            },
            [lt, Ie]
          );
          var xt = (0, a.useState)(!1),
            mt = xt[0],
            ft = xt[1];
          (0, a.useEffect)(
            function () {
              var e = setTimeout(function () {
                ft(
                  ye(lt) &&
                    Number(Ae) < (null === lt || void 0 === lt ? void 0 : lt.suggestedSlippage)
                );
              }, 500);
              return function () {
                return clearTimeout(e);
              };
            },
            [Ae, lt]
          );
          var ht = (0, a.useState)(void 0),
            vt = ht[0],
            bt = ht[1];
          if (
            ((0, a.useEffect)(
              function () {
                'cowprotocol' == Ie && ve && ke && $e && rt
                  ? (bt(void 0),
                    (0, L.AU)(ke, ve).then(function (e) {
                      var t = e
                        .filter(function (e) {
                          return (
                            e.sellToken.toLowerCase() == $e.address.toLowerCase() &&
                            e.status == w.OrderStatus.OPEN
                          );
                        })
                        .map(function (e) {
                          return e.sellAmount;
                        })
                        .reduce(function (e, t) {
                          return e + Number(t);
                        }, 0);
                      bt(t > 0 ? (0, j.Fv)(t, $e.decimals).toString() : void 0);
                    }))
                  : bt(void 0);
              },
              [$e, rt, Ie, ke, ve]
            ),
            !We)
          )
            return (0, fe.jsx)(s.Z, {
              sx: { width: '100%', display: 'flex', justifyContent: 'center', my: '60px' },
              children: (0, fe.jsx)(S.Z, {}),
            });
          if (lt && de.success)
            return (0, fe.jsx)(Nt, {
              txHash: de.txHash,
              amount: (0, j.Fv)(lt.srcAmount, lt.srcDecimals).toString(),
              symbol: $e.symbol,
              iconSymbol: $e.symbol,
              iconUri: $e.logoURI,
              outSymbol: rt.symbol,
              outIconSymbol: rt.symbol,
              outIconUri: rt.logoURI,
              provider: null !== Ie && void 0 !== Ie ? Ie : 'paraswap',
              chainId: ke,
              destDecimals: rt.decimals,
              srcDecimals: $e.decimals,
              outAmount: (Number((0, j.Fv)(lt.destAmount, lt.destDecimals)) * (1 - it)).toString(),
            });
          var yt = (0, ie.v)('0.01', 18),
            jt = (0, L.Mg)($e.address) ? yt : void 0,
            wt = jt ? (0, ie.v)($e.balance, 18) - jt : void 0,
            Ot = wt ? (0, j.Fv)(wt.toString(), 18).toString() : void 0,
            St =
              W && lt
                ? W({
                    switchProvider: Ie,
                    user: ve,
                    switchRates: lt,
                    gasLimit: pe,
                    selectedChainId: ke,
                    selectedOutputToken: rt,
                    selectedInputToken: $e,
                    safeSlippage: it,
                    maxSlippage: Number(Ae),
                    ratesLoading: dt,
                    ratesError: ut,
                    showGasStation: Ee,
                  })
                : null;
          return (0, fe.jsxs)(fe.Fragment, {
            children: [
              g &&
                (0, fe.jsx)(ae.E, {
                  title: 'Swap '.concat(ee.length && $e ? $e.symbol : 'Assets'),
                }),
              Y &&
                Re.isWrongNetwork &&
                !je &&
                (0, fe.jsx)(ce.I, {
                  networkName: Pe.name,
                  chainId: ke,
                  event: { eventName: se.vh.SWITCH_NETWORK },
                  askManualSwitch: Ve,
                }),
              vt &&
                (0, fe.jsx)(T.v, {
                  severity: 'info',
                  icon: !1,
                  sx: { mt: 2, mb: 2 },
                  children: (0, fe.jsxs)(i.Z, {
                    variant: 'caption',
                    children: [
                      'You have open orders for ',
                      vt,
                      ' ',
                      $e.symbol,
                      '. ',
                      (0, fe.jsx)('br', {}),
                      ' Track them in your',
                      ' ',
                      (0, fe.jsx)(A.rU, {
                        target: '_blank',
                        href: '/history?marketName='.concat(
                          null === (t = (0, ne.N_)(ke)) || void 0 === t ? void 0 : t.market
                        ),
                        children: 'transaction history',
                      }),
                    ],
                  }),
                }),
              (0, fe.jsxs)(s.Z, {
                sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
                children: [
                  (0, fe.jsx)(be, {
                    networks: M,
                    selectedNetwork: ke,
                    setSelectedNetwork: function (e) {
                      me(void 0), De(e);
                      var t = Ut(e);
                      Be(t), He();
                    },
                  }),
                  (0, fe.jsx)(gt, { slippageValidation: st, slippage: Ae, setSlippage: Te }),
                ],
              }),
              $e && rt
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
                            chainId: ke,
                            balanceTitle: H,
                            assets: We.filter(function (e) {
                              var t, r;
                              return (
                                e.address !== rt.address &&
                                0 !== Number(e.balance) &&
                                !(
                                  (0, L.Mg)(rt.address) &&
                                  e.address ===
                                    (null === (t = w.WRAPPED_NATIVE_CURRENCIES[ke]) || void 0 === t
                                      ? void 0
                                      : t.address)
                                ) &&
                                !(
                                  rt.address ===
                                    (null === (r = w.WRAPPED_NATIVE_CURRENCIES[ke]) || void 0 === r
                                      ? void 0
                                      : r.address) && (0, L.Mg)(e.address)
                                )
                              );
                            }),
                            value: K,
                            onChange: function (e) {
                              me(void 0),
                                '-1' === e ? (X($e.balance), Ge($e.balance)) : (X(e), Ge(e));
                            },
                            usdValue: (null === lt || void 0 === lt ? void 0 : lt.srcUSD) || '0',
                            onSelect: function (e) {
                              null !== We &&
                              void 0 !== We &&
                              We.find(function (t) {
                                return t.address === e.address;
                              })
                                ? (et(e), me(void 0))
                                : Ye(e).then(function () {
                                    et(e), me(void 0);
                                  });
                            },
                            selectedAsset: $e,
                            forcedMaxValue: Ot,
                          }),
                          d &&
                            (0, fe.jsx)(k.Z, {
                              onClick: function () {
                                var e = $e,
                                  t = rt,
                                  r = lt
                                    ? (0, j.pV)(lt.destAmount, lt.destDecimals).toString()
                                    : '0';
                                et(t), nt(e), X(r), oe(r), me(void 0);
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
                                children: (0, fe.jsx)(O.Z, {}),
                              }),
                            }),
                          (0, fe.jsx)(ot, {
                            chainId: ke,
                            balanceTitle: F,
                            assets: We.filter(function (e) {
                              var t, r;
                              return (
                                e.address !== $e.address &&
                                !(
                                  (0, L.Mg)($e.address) &&
                                  e.address ===
                                    (null === (t = w.WRAPPED_NATIVE_CURRENCIES[ke]) || void 0 === t
                                      ? void 0
                                      : t.address)
                                ) &&
                                !(
                                  $e.address ===
                                    (null === (r = w.WRAPPED_NATIVE_CURRENCIES[ke]) || void 0 === r
                                      ? void 0
                                      : r.address) && (0, L.Mg)(e.address)
                                )
                              );
                            }),
                            value: lt ? (0, j.pV)(lt.destAmount, lt.destDecimals).toString() : '0',
                            usdValue: (null === lt || void 0 === lt ? void 0 : lt.destUSD) || '0',
                            loading: '0' !== ee && '' !== ee && dt && !ut,
                            onSelect: function (e) {
                              null !== We &&
                              void 0 !== We &&
                              We.find(function (t) {
                                return t.address === e.address;
                              })
                                ? (nt(e), me(void 0))
                                : Ye(e).then(function () {
                                    nt(e), me(void 0);
                                  });
                            },
                            disableInput: !0,
                            selectedAsset: rt,
                            showBalance: !1,
                          }),
                        ],
                      }),
                      lt &&
                        (0, fe.jsx)(fe.Fragment, {
                          children: (0, fe.jsx)(pt, {
                            rates: lt,
                            srcSymbol: $e.symbol,
                            destSymbol: rt.symbol,
                            showPriceImpact: !ye(lt),
                          }),
                        }),
                      ve
                        ? (0, fe.jsxs)(fe.Fragment, {
                            children: [
                              ((null === (r = $e.extensions) || void 0 === r
                                ? void 0
                                : r.isUserCustom) ||
                                (null === (c = rt.extensions) || void 0 === c
                                  ? void 0
                                  : c.isUserCustom)) &&
                                (0, fe.jsx)(T.v, {
                                  severity: 'warning',
                                  icon: !1,
                                  sx: { mt: 2, mb: 2 },
                                  children: (0, fe.jsx)(i.Z, {
                                    variant: 'caption',
                                    children: 'You have selected a custom imported token.',
                                  }),
                                }),
                              St,
                              mt &&
                                (0, fe.jsx)(T.v, {
                                  severity: 'warning',
                                  icon: !1,
                                  sx: { mt: 5 },
                                  children: (0, fe.jsx)(i.Z, {
                                    variant: 'caption',
                                    children:
                                      'Slippage is lower than recommended. The swap may be delayed or fail.',
                                  }),
                                }),
                              (0, fe.jsx)(ct, {
                                ratesError: ut,
                                balance: $e.balance,
                                inputAmount: ee,
                              }),
                              xe && (0, fe.jsx)(le.f, { txError: xe }),
                              (0, fe.jsx)(_e, {
                                isWrongNetwork: Re.isWrongNetwork,
                                inputAmount: ee,
                                inputToken: $e.address,
                                outputToken: rt.address,
                                inputName: $e.name,
                                outputName: rt.name,
                                inputSymbol: $e.symbol,
                                outputSymbol: rt.symbol,
                                slippage: it.toString(),
                                setShowGasStation: Ne,
                                blocked:
                                  !lt ||
                                  Number(ee) > Number($e.balance) ||
                                  !ve ||
                                  (null === st || void 0 === st ? void 0 : st.severity) ===
                                    Et.ERROR,
                                chainId: ke,
                                switchRates: lt,
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
                              (0, fe.jsx)(i.Z, {
                                sx: { mb: 6, textAlign: 'center' },
                                color: 'text.secondary',
                                children: (0, fe.jsx)(o.cC, { id: 'HtuY7v' }),
                              }),
                              (0, fe.jsx)(m.p, {
                                onClick: function () {
                                  he();
                                },
                              }),
                            ],
                          }),
                    ],
                  })
                : (0, fe.jsx)(S.Z, {}),
            ],
          });
        },
        _t = u.ei[u.el.proto_mainnet_v3],
        Bt = function (e) {
          var t = e.modalType,
            r = e.switchDetails,
            l = e.inputBalanceTitle,
            u = e.forcedDefaultInputToken,
            d = e.forcedDefaultOutputToken,
            p = (0, n.vR)(),
            v = p.type,
            b = p.close,
            g = p.args.chainId,
            y = (0, h.Y)(function (e) {
              return e.currentChainId;
            }),
            j = (0, f.Z)().chainId,
            w = (0, h.Y)(function (e) {
              return e.account;
            }),
            O = (0, a.useState)(function () {
              return x.find(function (e) {
                return e.chainId === y;
              })
                ? y
                : _t.chainId;
            }),
            S = O[0],
            k = O[1];
          (0, a.useEffect)(
            function () {
              if (
                g &&
                x.find(function (e) {
                  return e.chainId === g;
                })
              )
                k(g);
              else if (
                j &&
                x.find(function (e) {
                  return e.chainId === j;
                })
              ) {
                var e = x.find(function (e) {
                  return e.underlyingChainId === j;
                });
                k(e ? e.chainId : j);
              } else
                x.find(function (e) {
                  return e.chainId === y;
                })
                  ? k(y)
                  : k(_t.chainId);
            },
            [y, g, j]
          );
          var D = (0, a.useMemo)(
              function () {
                return Ut(S);
              },
              [S]
            ),
            I = (0, a.useMemo)(
              function () {
                return Ut(S);
              },
              [S]
            );
          return (0, fe.jsx)(c.P, {
            open: v === t,
            setOpen: b,
            children: w
              ? (0, fe.jsx)(Lt, {
                  forcedChainId: S,
                  supportedNetworks: x,
                  initialFromTokens: D,
                  initialToTokens: I,
                  modalType: t,
                  switchDetails: r,
                  inputBalanceTitle: l,
                  forcedDefaultInputToken: u,
                  forcedDefaultOutputToken: d,
                })
              : (0, fe.jsxs)(s.Z, {
                  sx: { display: 'flex', flexDirection: 'column', mt: 4, alignItems: 'center' },
                  children: [
                    (0, fe.jsx)(i.Z, {
                      sx: { mb: 6, textAlign: 'center' },
                      color: 'text.secondary',
                      children: (0, fe.jsx)(o.cC, { id: 'HtuY7v' }),
                    }),
                    (0, fe.jsx)(m.p, {
                      onClick: function () {
                        return b();
                      },
                    }),
                  ],
                }),
          });
        },
        Mt = r(23508),
        Wt = r(67358),
        Ht = r(38895),
        Ft = r(22797),
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
            i = (0, a.useState)(!1),
            c = i[0],
            l = i[1];
          if (!ye(t)) throw new Error('Invalid switch rates');
          var u = t.amountAndCosts.costs.networkFee.amountInBuyCurrency.toString(),
            d = (0, j.Fv)(u, t.destDecimals),
            p = Number(d) * t.destTokenPriceUsd,
            x = t.amountAndCosts.costs.partnerFee.amount.toString(),
            m = (0, j.Fv)(x, t.destDecimals),
            f = Number(m) * t.destTokenPriceUsd,
            h = p + f,
            v = (0, fe.jsx)(jt.G, {
              variant: 'caption',
              text: (0, fe.jsx)(o.cC, { id: 'bYtb3C' }),
              children: (0, fe.jsx)(o.cC, { id: 'h5hG6q' }),
            }),
            b = (0, fe.jsx)(jt.G, {
              variant: 'caption',
              text: (0, fe.jsx)(o.cC, { id: 'PLUB/s' }),
              children: (0, fe.jsx)(o.cC, {
                id: '5CCqcz',
                components: {
                  0: (0, fe.jsx)(A.rU, {
                    href: 'https://aave.com/docs/developers/smart-contracts/swap-features',
                    target: '_blank',
                    rel: 'noopener',
                  }),
                },
              }),
            });
          return (0, fe.jsxs)(fe.Fragment, {
            children: [
              (0, fe.jsxs)(Wt.Z, {
                sx: {
                  mb: 4,
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  '.MuiAccordionSummary-root': { minHeight: '24px', maxHeight: '24px' },
                  backgroundColor: 'transparent',
                },
                onChange: function (e, t) {
                  l(t);
                },
                children: [
                  (0, fe.jsx)(Ht.Z, {
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
                  (0, fe.jsxs)(Ft.Z, {
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
                                (0, fe.jsx)(Je.UD, {
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
                        caption: b,
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
                                (0, fe.jsx)(Je.UD, {
                                  symbol: r.symbol,
                                  logoURI: r.logoURI,
                                  sx: { mr: 2, ml: 4, fontSize: '16px' },
                                }),
                                (0, fe.jsx)(Xe.B, {
                                  value: m,
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
                        (0, fe.jsx)(Je.UD, {
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
                      (0, fe.jsx)(Je.UD, {
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
                i = e.safeSlippage,
                a = e.showGasStation;
              return r && t
                ? (0, fe.jsx)(Gt, {
                    switchRates: r,
                    selectedOutputToken: s,
                    safeSlippage: i,
                    gasLimit: n,
                    selectedChainId: o,
                    showGasStation: a,
                  })
                : null;
            },
          });
        };
    },
    19408: function (e, t, r) {
      r.d(t, {
        I: function () {
          return h;
        },
      });
      var n = r(59499),
        o = r(4730),
        s = r(57499),
        i = r(15861),
        a = r(69417),
        c = r(72005),
        l = r(3062),
        u = r(65361),
        d = r(35783),
        p = r(85893),
        x = ['networkName', 'chainId', 'event', 'funnel', 'askManualSwitch'];
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
      function f(e) {
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
      var h = function (e) {
        var t = e.networkName,
          r = e.chainId,
          n = e.event,
          m = e.funnel,
          h = e.askManualSwitch,
          v = void 0 !== h && h,
          b = (0, o.Z)(e, x),
          g = (0, c.Z)(),
          y = g.switchNetwork,
          j = g.switchNetworkError,
          w = (0, l.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, p.jsx)(
          d.v,
          f(
            f({ severity: 'error', icon: !1 }, b),
            {},
            {
              children: j
                ? (0, p.jsx)(i.Z, { children: (0, p.jsx)(s.cC, { id: '+eOPG+' }) })
                : (0, p.jsxs)(i.Z, {
                    variant: 'description',
                    children: [
                      (0, p.jsx)(s.cC, { id: 'nh2EJK', values: { networkName: t } }),
                      ' ',
                      !v &&
                        (0, p.jsx)(a.Z, {
                          variant: 'text',
                          sx: { ml: '2px', verticalAlign: 'top' },
                          onClick: function () {
                            w(
                              u.vh.SWITCH_NETWORK,
                              f(
                                f(
                                  { funnel: m },
                                  null === n || void 0 === n ? void 0 : n.eventParams
                                ),
                                {},
                                { network: t }
                              )
                            ),
                              y(r);
                          },
                          disableRipple: !0,
                          children: (0, p.jsx)(i.Z, {
                            variant: 'description',
                            children: (0, p.jsx)(s.cC, { id: '6s8L6f' }),
                          }),
                        }),
                    ],
                  }),
            }
          )
        );
      };
    },
    78864: function (e, t, r) {
      r.d(t, {
        f: function () {
          return l;
        },
      });
      var n = r(57499),
        o = r(80822),
        s = r(15861),
        i = r(35783),
        a = r(83063),
        c = r(85893),
        l = function (e) {
          var t = e.txError;
          return (0, c.jsxs)(o.Z, {
            children: [
              (0, c.jsx)(a.Q, { txError: t }),
              'MetaMask Message Signature: User denied message signature.' !== t.rawError.message &&
                'MetaMask Tx Signature: User denied transaction signature.' !==
                  t.rawError.message &&
                (0, c.jsx)(o.Z, {
                  sx: { pt: 4 },
                  children: (0, c.jsx)(i.v, {
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
          return i;
        },
        iv: function () {
          return l;
        },
        pQ: function () {
          return a;
        },
        yI: function () {
          return u;
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
      var i = function (e, t) {
          return '-1' !== e && new o.O(e).minus(new o.O(t)).lt('1.05');
        },
        a = 65e3,
        c = 55e3,
        l = function (e) {
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
        u = function (e, t, r, n) {
          var o = e.reserve;
          if (!o.usageAsCollateralEnabled) return s.z.UNAVAILABLE;
          var i = s.z.ENABLED,
            a = e && '0' !== e.scaledATokenBalance,
            c = '0' !== t;
          return (
            o.isIsolated
              ? n
                ? (i = s.z.UNAVAILABLE)
                : r
                  ? a
                    ? (i = e.usageAsCollateralEnabledOnUser ? s.z.ISOLATED_ENABLED : s.z.DISABLED)
                    : c && (i = s.z.UNAVAILABLE_DUE_TO_ISOLATION)
                  : (i = c ? s.z.ISOLATED_DISABLED : s.z.ISOLATED_ENABLED)
              : (i = r
                  ? s.z.UNAVAILABLE_DUE_TO_ISOLATION
                  : a
                    ? e.usageAsCollateralEnabledOnUser
                      ? s.z.ENABLED
                      : s.z.DISABLED
                    : s.z.ENABLED),
            i
          );
        };
    },
    96276: function (e, t, r) {
      r.d(t, {
        h: function () {
          return f;
        },
      });
      var n = r(17674),
        o = r(59499),
        s = r(50029),
        i = r(87794),
        a = r.n(i),
        c = r(61744),
        l = r(78551),
        u = r(53966),
        d = r(52251),
        p = r(79850);
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : x(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var f = function (e, t, r) {
        return (0, l.a)({
          queryKey: d.B.tokensBalance(e, t, r),
          enabled: e.length > 0,
          queryFn: (function () {
            var o = (0, s.Z)(
              a().mark(function o() {
                var s, i, l, d, x, f, h, v, b, g, y;
                return a().wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (
                          ((s = (0, p.VH)(t)),
                          (i = e.filter(function (e) {
                            var t;
                            return !(null !== (t = e.extensions) && void 0 !== t && t.isNative);
                          })),
                          (l = e.find(function (e) {
                            var t;
                            return null === (t = e.extensions) || void 0 === t
                              ? void 0
                              : t.isNative;
                          })),
                          (d = new u.m({
                            ethersProvider: s,
                            tryAggregate: !0,
                            multicallCustomContractAddress:
                              '0xcA11bde05977b3631167028862bE2a173976CA11',
                          })),
                          (x = i.map(function (e) {
                            return {
                              reference: e.address,
                              contractAddress: e.address,
                              abi: [
                                {
                                  name: 'balanceOf',
                                  type: 'function',
                                  stateMutability: 'view',
                                  inputs: [{ name: 'account', type: 'address' }],
                                  outputs: [{ name: 'balance', type: 'uint256' }],
                                },
                              ],
                              calls: [
                                {
                                  reference: 'balanceOfCall',
                                  methodName: 'balanceOf',
                                  methodParameters: [r],
                                },
                              ],
                            };
                          })),
                          l)
                        ) {
                          o.next = 11;
                          break;
                        }
                        return (o.next = 8), d.call(x);
                      case 8:
                        return (
                          (f = o.sent),
                          (h = f.results),
                          o.abrupt(
                            'return',
                            e
                              .map(function (e, t) {
                                return m(
                                  m({}, e),
                                  {},
                                  {
                                    balance: (0, c.formatUnits)(
                                      h[t].callsReturnContext[0].returnValues[0],
                                      e.decimals
                                    ),
                                  }
                                );
                              })
                              .sort(function (e, t) {
                                return Number(t.balance) - Number(e.balance);
                              })
                          )
                        );
                      case 11:
                        return (o.next = 13), Promise.all([s.getBalance(r), d.call(x)]);
                      case 13:
                        return (
                          (v = o.sent),
                          (b = (0, n.Z)(v, 2)),
                          (g = b[0]),
                          (y = b[1]),
                          o.abrupt(
                            'return',
                            e
                              .map(function (e) {
                                var t;
                                return m(
                                  m({}, e),
                                  {},
                                  {
                                    balance:
                                      null !== (t = e.extensions) && void 0 !== t && t.isNative
                                        ? (0, c.formatUnits)(g, e.decimals)
                                        : (0, c.formatUnits)(
                                            y.results[e.address].callsReturnContext[0]
                                              .returnValues[0],
                                            e.decimals
                                          ),
                                  }
                                );
                              })
                              .sort(function (e, t) {
                                return Number(t.balance) - Number(e.balance);
                              })
                          )
                        );
                      case 18:
                      case 'end':
                        return o.stop();
                    }
                }, o);
              })
            );
            return function () {
              return o.apply(this, arguments);
            };
          })(),
        });
      };
    },
  },
]);
