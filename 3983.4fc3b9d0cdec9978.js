'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3983],
  {
    70946: function (e, t, r) {
      r.d(t, {
        B: function () {
          return x;
        },
      });
      var n = r(59499),
        a = r(4730),
        s = r(57499),
        i = r(80822),
        o = r(88078),
        u = r(70794),
        c = r(65361),
        l = r(32867),
        p = r(49212),
        d = r(85893),
        f = ['loading', 'outputAmountUSD', 'inputAmountUSD'];
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
      function v(e) {
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
      var x = function (e) {
        var t = e.loading,
          r = e.outputAmountUSD,
          n = e.inputAmountUSD,
          m = (0, a.Z)(e, f),
          x = new u.O(r).minus(n),
          h = n && '0' !== n ? x.dividedBy(n).times(100).toFixed(2) : '0';
        '-0.00' === h && (h = '0.00');
        var g = Math.abs(Number(h)) > 10;
        return (0, d.jsx)(
          p.G,
          v(
            v(
              {
                variant: 'secondary12',
                color: 'text.secondary',
                event: { eventName: c.vh.TOOL_TIP, eventParams: { tooltip: 'Price Impact' } },
                text: (0, d.jsx)(i.Z, {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    color: g ? 'warning.main' : 'unset',
                  },
                  children: (0, d.jsx)(s.cC, {
                    id: 'yh2sjd',
                    values: {
                      0: t
                        ? (0, d.jsx)(o.Z, {
                            variant: 'rectangular',
                            height: 12,
                            width: 25,
                            sx: { borderRadius: '4px', display: 'flex', marginLeft: '4px' },
                          })
                        : (0, d.jsx)(l.B, {
                            value: h,
                            visibleDecimals: 2,
                            variant: 'secondary12',
                            color: 'text.secondary',
                            sx: { marginLeft: '4px', color: g ? 'warning.main' : 'unset' },
                          }),
                    },
                  }),
                }),
              },
              m
            ),
            {},
            { children: (0, d.jsx)(s.cC, { id: 'UAOZRe' }) }
          )
        );
      };
    },
    92519: function (e, t, r) {
      r.d(t, {
        A: function () {
          return h;
        },
      });
      var n = r(80854),
        a = (r(67294), r(60377)),
        s = r(50060),
        i = r(89771),
        o = r(53097),
        u = r(44949),
        c = r(72005),
        l = r(3062),
        p = r(65361),
        d = r(79850),
        f = r(37096),
        m = r(19408),
        v = r(40429),
        x = r(85893),
        h = function (e) {
          var t,
            r,
            h = e.hideTitleSymbol,
            g = e.underlyingAsset,
            y = e.children,
            w = e.requiredChainId,
            b = e.title,
            j = e.keepWrappedSymbol,
            A = (0, c.Z)().readOnlyModeAddress,
            Z = (0, l.Y)(function (e) {
              return e.currentMarketData;
            }),
            O = (0, l.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            T = (0, s.P)(Z).walletBalances,
            k = (0, a.HT)(),
            P = k.user,
            C = k.reserves,
            D = (0, u.vR)(),
            S = D.txError,
            E = D.mainTxState,
            _ = (0, o.Q)(w),
            I = _.isWrongNetwork,
            L = _.requiredChainId;
          if (S && S.blocking) return (0, x.jsx)(v.D, { txError: S });
          var B = C.find(function (e) {
              return g.toLowerCase() === n.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : g === e.underlyingAsset;
            }),
            N =
              null === P || void 0 === P
                ? void 0
                : P.userReservesData.find(function (e) {
                    return g.toLowerCase() === n.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : g === e.underlyingAsset;
                  }),
            R = B.isWrappedBaseAsset && !j ? O.baseAssetSymbol : B.symbol;
          return (0, x.jsxs)(i.hv, {
            asset: B,
            children: [
              !E.success && (0, x.jsx)(f.E, { title: b, symbol: h ? void 0 : R }),
              I &&
                !A &&
                (0, x.jsx)(m.I, {
                  networkName: (0, d.Mo)(L).name,
                  chainId: L,
                  event: { eventName: p.vh.SWITCH_NETWORK, eventParams: { asset: g } },
                }),
              y({
                isWrongNetwork: I,
                nativeBalance:
                  (null === (t = T[n.hP.toLowerCase()]) || void 0 === t ? void 0 : t.amount) || '0',
                tokenBalance:
                  (null === (r = T[B.underlyingAsset.toLowerCase()]) || void 0 === r
                    ? void 0
                    : r.amount) || '0',
                poolReserve: B,
                symbol: R,
                underlyingAsset: g,
                userReserve: N,
              }),
            ],
          });
        };
    },
    87886: function (e, t, r) {
      r.d(t, {
        F8: function () {
          return P;
        },
        IG: function () {
          return F;
        },
        Ik: function () {
          return B;
        },
        LN: function () {
          return R;
        },
        _n: function () {
          return D;
        },
        aE: function () {
          return O;
        },
        sm: function () {
          return N;
        },
        wP: function () {
          return E;
        },
        w_: function () {
          return j;
        },
        xS: function () {
          return T;
        },
      });
      var n,
        a = r(50029),
        s = r(59499),
        i = r(87794),
        o = r.n(i),
        u = r(75331),
        c = r(80854),
        l = r(1279),
        p = r(3439),
        d = r(63645),
        f = r(38486),
        m = r(49575),
        v = r(80063),
        x = r(4482),
        h = r(25383),
        g = r(77682),
        y = r(79643),
        w = function (e) {
          var t = (0, y.Sv)(fetch);
          return (0, y.A6)({ chainId: e, fetcher: t, version: '6.2' }, y.QA, y.TG);
        },
        b =
          ((n = {}),
          (0, s.Z)(n, u.a_.mainnet, { paraswap: w(u.a_.mainnet), feeTarget: p.y$ }),
          (0, s.Z)(n, u.a_.polygon, { paraswap: w(u.a_.polygon), feeTarget: d.y$ }),
          (0, s.Z)(n, u.a_.avalanche, { paraswap: w(u.a_.avalanche), feeTarget: f.y$ }),
          (0, s.Z)(n, u.a_.arbitrum_one, { paraswap: w(u.a_.arbitrum_one), feeTarget: m.y$ }),
          (0, s.Z)(n, u.a_.optimism, { paraswap: w(u.a_.optimism), feeTarget: v.y$ }),
          (0, s.Z)(n, u.a_.base, { paraswap: w(u.a_.base), feeTarget: x.y$ }),
          (0, s.Z)(n, u.a_.bnb, { paraswap: w(u.a_.bnb), feeTarget: h.y$ }),
          (0, s.Z)(n, u.a_.xdai, { paraswap: w(u.a_.xdai), feeTarget: g.y$ }),
          n),
        j = function (e) {
          var t = b[e];
          if (t) return t;
          throw new Error('Chain not supported');
        },
        A = {
          ESTIMATED_LOSS_GREATER_THAN_MAX_IMPACT:
            'Price impact too high. Please try a different amount or asset pair.',
          'No routes found with enough liquidity': 'No routes found with enough liquidity.',
        },
        Z = [
          {
            regex: /^Amount \d+ is too small to proceed$/,
            message: 'Amount is too small. Please try larger amount.',
          },
        ];
      function O(e) {
        var t;
        return e in A
          ? A[e]
          : null ===
                (t = Z.find(function (t) {
                  return t.regex.test(e);
                })) || void 0 === t
            ? void 0
            : t.message;
      }
      function T(e, t, r, n, a, s) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = (0, a.Z)(
          o().mark(function e(t, r, n, a, s, i) {
            var u, c, p, d;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (u = I(a)),
                      (e.next = 3),
                      u.getTransactionParams(
                        r.underlyingAsset,
                        r.decimals,
                        n.underlyingAsset,
                        n.decimals,
                        s,
                        t,
                        i
                      )
                    );
                  case 3:
                    return (
                      (c = e.sent),
                      (p = c.swapCallData),
                      (d = c.augustus),
                      e.abrupt('return', {
                        swapCallData: p,
                        augustus: d,
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
      function P(e, t, r, n, a) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = (0, a.Z)(
          o().mark(function e(t, r, n, a, s) {
            var i, u, c, p;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = (0, l.hE)(t.amount)),
                      s &&
                        '0' !== t.supplyAPY &&
                        (i = i.plus(i.multipliedBy(t.supplyAPY).dividedBy(17280))),
                      (u = (0, l.pV)(i, -1 * t.decimals)),
                      (c = { partner: 'aave' }),
                      s && (c.includeContractMethods = [y.OZ.swapExactAmountIn]),
                      (p = I(n)),
                      (e.next = 8),
                      p.getRate(
                        u.toFixed(0),
                        t.underlyingAsset,
                        t.decimals,
                        r.underlyingAsset,
                        r.decimals,
                        a,
                        c
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
      function D(e, t, r, n, a, s) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = (0, a.Z)(
          o().mark(function e(t, r, n, a, s, i) {
            var u, c, p, d;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (u = L(a)),
                      (e.next = 3),
                      u.getTransactionParams(
                        r.underlyingAsset,
                        r.decimals,
                        n.underlyingAsset,
                        n.decimals,
                        s,
                        t,
                        i
                      )
                    );
                  case 3:
                    return (
                      (c = e.sent),
                      (p = c.swapCallData),
                      (d = c.augustus),
                      e.abrupt('return', {
                        swapCallData: p,
                        augustus: d,
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
      function E(e, t, r, n, a) {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = (0, a.Z)(
          o().mark(function e(t, r, n, a, s) {
            var i, u, c, p;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = (0, l.hE)(r.amount)),
                      (u = (0, l.pV)(i, -1 * r.decimals)),
                      (c = { partner: 'aave' }),
                      s && (c.includeContractMethods = [y.OZ.swapExactAmountOut]),
                      (p = L(n)),
                      (e.next = 7),
                      p.getRate(
                        u.toFixed(0),
                        t.underlyingAsset,
                        t.decimals,
                        r.underlyingAsset,
                        r.decimals,
                        a,
                        c
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
      var I = function (e) {
          var t = j(e),
            r = t.paraswap,
            n = t.feeTarget,
            s = (function () {
              var e = (0, a.Z)(
                o().mark(function e(t, n, a, s, i, u, c) {
                  var l;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            r.getRate({
                              amount: t,
                              srcToken: n,
                              srcDecimals: a,
                              destToken: s,
                              destDecimals: i,
                              userAddress: u,
                              side: y.PC.SELL,
                              options: c,
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
              return function (t, r, n, a, s, i, o) {
                return e.apply(this, arguments);
              };
            })(),
            i = (function () {
              var e = (0, a.Z)(
                o().mark(function e(t, a, s, i, u, c, l) {
                  var p;
                  return o().wrap(
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
                                  srcDecimals: a,
                                  srcAmount: c.srcAmount,
                                  destToken: s,
                                  destDecimals: i,
                                  slippage: 100 * l,
                                  priceRoute: c,
                                  userAddress: u,
                                  partnerAddress: n,
                                  takeSurplus: !0,
                                  isDirectFeeTransfer: !0,
                                },
                                { ignoreChecks: !0 }
                              )
                            );
                          case 3:
                            return (
                              (p = e.sent),
                              e.abrupt('return', { swapCallData: p.data, augustus: p.to })
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
              return function (t, r, n, a, s, i, o) {
                return e.apply(this, arguments);
              };
            })();
          return { getRate: s, getTransactionParams: i };
        },
        L = function (e) {
          var t = j(e),
            r = t.paraswap,
            n = t.feeTarget,
            s = (function () {
              var e = (0, a.Z)(
                o().mark(function e(t, n, a, s, i, u, c) {
                  var l;
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            r.getRate({
                              amount: t,
                              srcToken: n,
                              srcDecimals: a,
                              destToken: s,
                              destDecimals: i,
                              userAddress: u,
                              side: y.PC.BUY,
                              options: c,
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
              return function (t, r, n, a, s, i, o) {
                return e.apply(this, arguments);
              };
            })(),
            i = (function () {
              var e = (0, a.Z)(
                o().mark(function e(t, a, s, i, u, c, l) {
                  var p;
                  return o().wrap(
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
                                  destAmount: c.destAmount,
                                  slippage: 100 * l,
                                  priceRoute: c,
                                  userAddress: u,
                                  partnerAddress: n,
                                  takeSurplus: !0,
                                  srcDecimals: a,
                                  destDecimals: i,
                                  isDirectFeeTransfer: !0,
                                },
                                { ignoreChecks: !0 }
                              )
                            );
                          case 3:
                            return (
                              (p = e.sent),
                              e.abrupt('return', { swapCallData: p.data, augustus: p.to })
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
              return function (t, r, n, a, s, i, o) {
                return e.apply(this, arguments);
              };
            })();
          return { getRate: s, getTransactionParams: i };
        },
        B = 0.1,
        N = function (e, t, r) {
          var n = (0, l.hE)(e),
            a = (0, l.hE)(null !== r && void 0 !== r ? r : B),
            s = n.plus(n.multipliedBy(a));
          return (0, c.gU)(s.toString(), t);
        },
        R = function (e, t, r) {
          return '0' === e
            ? '0'
            : (0, l.hE)(e)
                .multipliedBy(1 + Number(t) / 100)
                .toFixed(r);
        },
        F = function (e, t, r) {
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
        a = r(3062);
      function s(e) {
        var t = (0, a.Y)(function (e) {
            return e.currentChainId;
          }),
          r = e || t;
        return { isWrongNetwork: (0, n.Z)().chainId !== r, requiredChainId: r };
      }
    },
    32356: function (e, t, r) {
      r.d(t, {
        n: function () {
          return S;
        },
      });
      var n = r(17674),
        a = r(57499),
        s = r(67294);
      var i = s.forwardRef(function (e, t) {
          return s.createElement(
            'svg',
            Object.assign(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 2,
                stroke: 'currentColor',
                'aria-hidden': 'true',
                ref: t,
              },
              e
            ),
            s.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M5 15l7-7 7 7',
            })
          );
        }),
        o = r(61782),
        u = r(64343),
        c = r(69417),
        l = r(80822),
        p = r(15861),
        d = r(53219),
        f = r(35294),
        m = r(18972),
        v = r(59334),
        x = r(48885),
        h = r(67720),
        g = r(59499),
        y = r(4730),
        w = r(65361),
        b = r(49212),
        j = r(85893),
        A = ['headerContent'];
      function Z(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(r), !0).forEach(function (t) {
                (0, g.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Z(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var T,
        k = function (e) {
          var t = e.headerContent,
            r = (0, y.Z)(e, A);
          return (0, j.jsx)(
            b.G,
            O(
              O(
                {
                  event: {
                    eventName: w.vh.TOOL_TIP,
                    eventParams: { tooltip: 'Slippage Tollerance' },
                  },
                },
                r
              ),
              {},
              {
                children: (0, j.jsxs)(j.Fragment, {
                  children: [
                    t &&
                      (0, j.jsxs)(j.Fragment, {
                        children: [t, (0, j.jsx)(h.Z, { sx: { my: 2 } })],
                      }),
                    (0, j.jsx)(a.cC, { id: 'eLh0cL' }),
                  ],
                }),
              }
            )
          );
        },
        P = r(3062);
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          C.apply(null, arguments)
        );
      }
      var D = function (e) {
          return s.createElement(
            'svg',
            C(
              {
                width: 15,
                height: 12,
                viewBox: '0 0 15 12',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              e
            ),
            T ||
              (T = s.createElement('path', {
                d: 'M14.948 12 8.035 0 1.12 12h13.827ZM3.176 5.625 6.353 0H0l3.176 5.625Zm8.949 4.787h-8.18l4.09-7.1 4.09 7.1Z',
                fill: '#2669F5',
              }))
          );
        },
        S = function (e) {
          var t = e.setSlippage,
            r = e.selectedSlippage,
            g = e.slippageTooltipHeader,
            y = s.useState(null),
            b = (0, n.Z)(y, 2),
            A = b[0],
            Z = b[1],
            O = Boolean(A),
            T = (0, P.Y)(function (e) {
              return e.trackEvent;
            }),
            C = function () {
              Z(null);
            };
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)(c.Z, {
                variant: 'text',
                onClick: function (e) {
                  Z(e.currentTarget);
                },
                size: 'medium',
                endIcon: (0, j.jsx)(k, {
                  headerContent: g,
                  text: (0, j.jsx)(l.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: (0, j.jsx)(a.cC, {
                      id: 'LVt3TI',
                      values: {
                        0: O ? (0, j.jsx)(i, {}) : (0, j.jsx)(o.Z, {}),
                        selectedSlippage: r,
                      },
                      components: {
                        0: (0, j.jsx)(p.Z, { color: 'text.secondary', variant: 'description' }),
                        1: (0, j.jsx)(p.Z, {
                          color: 'text.main',
                          variant: 'secondary14',
                          sx: { px: '4px' },
                        }),
                        2: (0, j.jsx)(d.Z, { sx: { fontSize: '14px !important', mr: '4px' } }),
                      },
                    }),
                  }),
                  variant: 'secondary14',
                }),
                disabled: !1,
                'data-cy': 'slippageButton_'.concat(r),
              }),
              (0, j.jsxs)(f.Z, {
                anchorEl: A,
                open: O,
                onClose: C,
                MenuListProps: { 'aria-labelledby': 'basic-button' },
                keepMounted: !0,
                'data-cy': 'slippageMenu_'.concat(r),
                children: [
                  (0, j.jsx)(l.Z, {
                    sx: { px: '16px', py: '12px' },
                    children: (0, j.jsx)(p.Z, {
                      variant: 'secondary12',
                      color: 'text.secondary',
                      children: (0, j.jsx)(a.cC, { id: 'iMVZk9' }),
                    }),
                  }),
                  ['0.1', '0.5', '1'].map(function (e) {
                    var n = e === r;
                    return (0, j.jsxs)(
                      m.Z,
                      {
                        selected: n,
                        value: e,
                        onClick: function () {
                          t(e), T(w.vh.SET_SLIPPAGE, { amount: e }), C();
                        },
                        children: [
                          (0, j.jsxs)(v.Z, {
                            primaryTypographyProps: { variant: 'subheader1' },
                            children: [e, '%'],
                          }),
                          (0, j.jsx)(x.Z, {
                            children: (0, j.jsx)(d.Z, { children: n && (0, j.jsx)(u.Z, {}) }),
                          }),
                        ],
                      },
                      e
                    );
                  }),
                  (0, j.jsx)(h.Z, {}),
                  (0, j.jsxs)(l.Z, {
                    sx: { px: '16px', py: '12px', display: 'inline-flex', alignItems: 'center' },
                    children: [
                      (0, j.jsxs)(p.Z, {
                        variant: 'secondary12',
                        color: 'text.secondary',
                        sx: { display: 'flex', alignItems: 'center' },
                        children: [
                          (0, j.jsx)(a.cC, { id: 'g2UNkE' }),
                          (0, j.jsx)(d.Z, {
                            sx: {
                              fontSize: '20px',
                              width: '20px',
                              color: '#2669F5',
                              position: 'relative',
                              top: '5px',
                              left: '5px',
                            },
                            children: (0, j.jsx)(D, {}),
                          }),
                        ],
                      }),
                      (0, j.jsx)(p.Z, {
                        variant: 'main12',
                        color: 'text.secondary',
                        children: 'Paraswap',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
