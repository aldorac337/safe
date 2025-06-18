'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3526],
  {
    83526: function (e, t, r) {
      r.r(t),
        r.d(t, {
          RepayModal: function () {
            return he;
          },
        });
      var n = r(59499),
        a = r(57499),
        s = r(67294),
        o = r(49679),
        i = r(60377),
        u = r(44949),
        l = r(3062),
        c = r(79850),
        d = r(15629),
        p = r(92519),
        m = r(17674),
        y = r(1279),
        b = r(94684),
        f = r(80822),
        v = r(53219),
        x = r(15861),
        A = r(26447),
        g = r(70794),
        h = r(70946),
        S = r(32867),
        j = r(45640),
        O = r(87886),
        T = r(50029),
        w = r(87794),
        k = r.n(w),
        C = r(7568),
        E = r(72005),
        P = r(32356),
        D = r(58730),
        L = r(73886),
        R = r(23478),
        B = r(44880),
        N = r(67944),
        I = r(53008),
        U = r(78864),
        W = r(4730),
        M = r(75331),
        _ = r(80854),
        F = r(15058),
        Z = r(84207),
        Y = r(85893),
        V = [
          'repayAmount',
          'poolReserve',
          'fromAssetData',
          'isWrongNetwork',
          'sx',
          'symbol',
          'rateMode',
          'repayAllDebt',
          'useFlashLoan',
          'blocked',
          'loading',
          'repayWithAmount',
          'buildTxFn',
        ];
      function H(e, t) {
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
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : H(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Q = function (e) {
        var t,
          r = e.repayAmount,
          n = e.poolReserve,
          s = e.fromAssetData,
          o = e.isWrongNetwork,
          i = e.sx,
          u = e.symbol,
          c = e.rateMode,
          d = e.repayAllDebt,
          p = e.useFlashLoan,
          y = e.blocked,
          b = e.loading,
          f = e.repayWithAmount,
          v = e.buildTxFn,
          x = (0, W.Z)(e, V),
          A = (0, l.Y)(
            (0, L.N)(function (e) {
              return [e.paraswapRepayWithCollateral, e.currentMarketData];
            })
          ),
          g = (0, m.Z)(A, 2),
          h = g[0],
          S = g[1],
          j = (0, F.P)({
            protocolAction: M.UQ.repayCollateral,
            handleGetTxns: (function () {
              var e = (0, T.Z)(
                k().mark(function e(t, a) {
                  var i;
                  return k().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), v();
                        case 2:
                          return (
                            (i = e.sent),
                            e.abrupt(
                              'return',
                              h({
                                repayAllDebt: d,
                                repayAmount: r,
                                rateMode: c,
                                repayWithAmount: f,
                                fromAssetData: s,
                                poolReserve: n,
                                isWrongNetwork: o,
                                symbol: u,
                                useFlashLoan: p,
                                blocked: y,
                                swapCallData: i.swapCallData,
                                augustus: i.augustus,
                                signature: t,
                                deadline: a,
                                signedAmount: (0, O.sm)(f, s.decimals),
                              })
                            )
                          );
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })(),
            handleGetApprovalTxns: (function () {
              var e = (0, T.Z)(
                k().mark(function e() {
                  return k().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            h({
                              repayAllDebt: d,
                              repayAmount: r,
                              rateMode: c,
                              repayWithAmount: f,
                              fromAssetData: s,
                              poolReserve: n,
                              isWrongNetwork: o,
                              symbol: u,
                              useFlashLoan: !1,
                              blocked: y,
                              swapCallData: '0x',
                              augustus: _.hP,
                            })
                          );
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
            })(),
            gasLimitRecommendation: _.eB[M.UQ.repayCollateral].limit,
            skip: b || !r || 0 === parseFloat(r) || y,
            spender:
              null !== (t = S.addresses.REPAY_WITH_COLLATERAL_ADAPTER) && void 0 !== t ? t : '',
            deps: [s.symbol, f],
          }),
          w = j.approval,
          C = j.action,
          E = j.loadingTxns,
          P = j.approvalTxState,
          D = j.mainTxState,
          R = j.requiresApproval;
        return (0, Y.jsx)(
          Z.B,
          q(
            q(
              {
                preparingTransactions: E,
                mainTxState: D,
                approvalTxState: P,
                requiresAmount: !0,
                amount: r,
                requiresApproval: R,
                isWrongNetwork: o,
                blocked: y,
                sx: i,
              },
              x
            ),
            {},
            {
              handleAction: C,
              handleApproval: function () {
                return w({ amount: (0, O.sm)(f, s.decimals), underlyingAsset: s.aTokenAddress });
              },
              actionText: (0, Y.jsx)(a.cC, { id: '6Jrv+z', values: { symbol: u } }),
              actionInProgressText: (0, Y.jsx)(a.cC, { id: 'ckf7gX', values: { symbol: u } }),
              fetchingData: b,
              errorParams: {
                loading: !1,
                disabled: y,
                content: (0, Y.jsx)(a.cC, { id: '6Jrv+z', values: { symbol: u } }),
                handleClick: C,
              },
              tryPermit: !0,
            }
          )
        );
      };
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
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : z(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function J(e) {
        var t = e.poolReserve,
          r = e.symbol,
          n = e.debtType,
          o = e.userReserve,
          c = e.isWrongNetwork,
          d = e.user,
          p = (0, i.HT)(),
          w = p.reserves,
          W = p.userReserves,
          M = (0, u.vR)(),
          _ = M.gasLimit,
          F = M.txError,
          Z = M.mainTxState,
          V = (0, l.Y)(
            (0, L.N)(function (e) {
              return [e.currentChainId, e.currentNetworkConfig];
            })
          ),
          H = (0, m.Z)(V, 2),
          q = H[0],
          z = H[1],
          J = (0, E.Z)().currentAccount,
          X = d.userReservesData
            .filter(function (e) {
              return (
                '0' !== e.underlyingBalance &&
                e.underlyingAsset !== t.underlyingAsset &&
                'stETH' !== e.reserve.symbol
              );
            })
            .map(function (e) {
              return {
                address: e.underlyingAsset,
                balance: e.underlyingBalance,
                balanceUSD: e.underlyingBalanceUSD,
                symbol: e.reserve.symbol,
                iconSymbol: e.reserve.iconSymbol,
                decimals: e.reserve.decimals,
              };
            })
            .sort(function (e, t) {
              return Number(t.balanceUSD) - Number(e.balanceUSD);
            }),
          K = (0, s.useState)(X[0]),
          $ = K[0],
          ee = K[1],
          te = $.balance || '0',
          re = 'exactOut',
          ne = (0, s.useState)(''),
          ae = ne[0],
          se = ne[1],
          oe = (0, s.useState)('0.5'),
          ie = oe[0],
          ue = oe[1],
          le = (0, s.useRef)(''),
          ce = w.find(function (e) {
            return e.underlyingAsset === $.address;
          }),
          de = (null === o || void 0 === o ? void 0 : o.variableBorrows) || '0',
          pe = (0, y.hE)(de);
        pe = pe.plus(pe.multipliedBy(t.variableBorrowAPY).dividedBy(17280));
        var me = '-1' === ae,
          ye = me ? pe.toString() : ae,
          be = (0, y.hE)(ye).multipliedBy(t.priceInUSD).toString(),
          fe = pe
            .multipliedBy(t.priceInUSD)
            .multipliedBy(100 + Number(ie))
            .dividedBy(100)
            .dividedBy(ce.priceInUSD),
          ve = G(G({}, ce), {}, { amount: te }),
          xe = G(G({}, t), {}, { amount: le.current }),
          Ae = me && (0, y.hE)(te).gte(fe),
          ge = (function (e) {
            var t = e.chainId,
              r = e.max,
              n = e.maxSlippage,
              a = e.skip,
              o = e.swapIn,
              i = e.swapOut,
              u = e.userAddress,
              l = e.swapVariant,
              c = (0, s.useState)('0'),
              d = c[0],
              p = c[1],
              m = (0, s.useState)('0'),
              b = m[0],
              f = m[1],
              v = (0, s.useState)('0'),
              x = v[0],
              A = v[1],
              g = (0, s.useState)('0'),
              h = g[0],
              S = g[1],
              j = (0, s.useState)(),
              w = j[0],
              C = j[1],
              E = (0, s.useState)(!1),
              P = E[0],
              D = E[1],
              L = (0, s.useState)(''),
              R = L[0],
              B = L[1],
              N = (0, s.useMemo)(
                function () {
                  return {
                    underlyingAsset: o.underlyingAsset,
                    decimals: o.decimals,
                    supplyAPY: o.supplyAPY,
                    amount: o.amount,
                    variableBorrowAPY: o.variableBorrowAPY,
                  };
                },
                [o.amount, o.decimals, o.supplyAPY, o.underlyingAsset, o.variableBorrowAPY]
              ),
              I = (0, s.useMemo)(
                function () {
                  return {
                    underlyingAsset: i.underlyingAsset,
                    decimals: i.decimals,
                    supplyAPY: i.supplyAPY,
                    amount: i.amount,
                    variableBorrowAPY: i.variableBorrowAPY,
                  };
                },
                [i.amount, i.decimals, i.supplyAPY, i.underlyingAsset, i.variableBorrowAPY]
              ),
              U = (0, s.useCallback)(
                function () {
                  return (0, O.F8)(N, I, t, u);
                },
                [t, N, I, u]
              ),
              W = (0, s.useCallback)(
                function () {
                  return (0, O.wP)(N, I, t, u, r);
                },
                [t, r, N, I, u]
              );
            return (
              (0, s.useEffect)(
                function () {
                  if (!a) {
                    var e = (function () {
                        var e = (0, T.Z)(
                          k().mark(function e() {
                            var t, r;
                            return k().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        N.underlyingAsset &&
                                        I.underlyingAsset &&
                                        ('exactIn' !== l ||
                                          (N.amount && '0' !== N.amount && !isNaN(+N.amount))) &&
                                        ('exactOut' !== l ||
                                          (I.amount && '0' !== I.amount && !isNaN(+I.amount)))
                                      ) {
                                        e.next = 7;
                                        break;
                                      }
                                      return (
                                        p('0'),
                                        f('0'),
                                        A('0'),
                                        S('0'),
                                        C(void 0),
                                        e.abrupt('return')
                                      );
                                    case 7:
                                      if ((D(!0), (e.prev = 8), 'exactIn' !== l)) {
                                        e.next = 15;
                                        break;
                                      }
                                      return (e.next = 12), U();
                                    case 12:
                                      (t = e.sent), (e.next = 18);
                                      break;
                                    case 15:
                                      return (e.next = 17), W();
                                    case 17:
                                      t = e.sent;
                                    case 18:
                                      B(''),
                                        C(t),
                                        p((0, y.Fv)(t.srcAmount, t.srcDecimals)),
                                        A((0, y.Fv)(t.destAmount, t.destDecimals)),
                                        f(t.srcUSD),
                                        S(t.destUSD),
                                        (e.next = 31);
                                      break;
                                    case 26:
                                      (e.prev = 26),
                                        (e.t0 = e.catch(8)),
                                        console.error(e.t0),
                                        (r =
                                          (0, O.aE)(e.t0.message) ||
                                          'There was an issue fetching data from Paraswap'),
                                        B(r);
                                    case 31:
                                      return (e.prev = 31), D(!1), e.finish(31);
                                    case 34:
                                    case 'end':
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[8, 26, 31, 34]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                      t = setTimeout(function () {
                        e();
                      }, 400);
                    return function () {
                      clearTimeout(t);
                    };
                  }
                },
                [a, l, N.underlyingAsset, N.amount, I.underlyingAsset, I.amount, U, W, n]
              ),
              {
                outputAmount: x,
                outputAmountUSD: h,
                inputAmount: d,
                inputAmountUSD: b,
                loading: P,
                error: R,
                buildTxFn: (function () {
                  var e = (0, T.Z)(
                    k().mark(function e() {
                      return k().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (w) {
                                e.next = 2;
                                break;
                              }
                              throw new Error('Route required to build transaction');
                            case 2:
                              if ('exactIn' !== l) {
                                e.next = 6;
                                break;
                              }
                              return e.abrupt('return', (0, O.xS)(w, o, i, t, u, n));
                            case 6:
                              return e.abrupt('return', (0, O._n)(w, o, i, t, u, n));
                            case 7:
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
              }
            );
          })({
            chainId: z.underlyingChainId || q,
            userAddress: J,
            swapVariant: re,
            swapIn: ve,
            swapOut: xe,
            max: Ae,
            skip: Z.loading || !1,
            maxSlippage: Number(ie),
          }),
          he = ge.inputAmountUSD,
          Se = ge.inputAmount,
          je = ge.outputAmount,
          Oe = ge.outputAmountUSD,
          Te = ge.loading,
          we = ge.error,
          ke = ge.buildTxFn,
          Ce = Te && '0' === he,
          Ee = function (e) {
            var t = '-1' === e;
            (le.current = t ? pe.toString(10) : e), se(e);
          },
          Pe = W.find(function (e) {
            return e.underlyingAsset === $.address;
          }),
          De = (0, D.bU)({
            amountToReceiveAfterSwap: je,
            amountToSwap: Se,
            fromAssetData: ce,
            user: d,
            toAssetData: t,
            repayWithUserReserve: Pe,
            debt: de,
          }),
          Le = De.hfAfterSwap,
          Re = De.hfEffectOfFromAmount,
          Be =
            (0, I.gK)(d.healthFactor, Re.toString()) ||
            (null === ce || void 0 === ce ? void 0 : ce.isFrozen),
          Ne = (0, y.hE)(de).minus(g.O.min(je, de)),
          Ie = Ne.multipliedBy(t.priceInUSD),
          Ue = te ? (0, y.hE)(te).minus(Se) : (0, y.hE)('0'),
          We = Ue.multipliedBy(ce.priceInUSD),
          Me = ye,
          _e = be,
          Fe = (0, C.W)(),
          Ze = void 0;
        Fe.length > 0 && !Fe.includes($.symbol)
          ? (Ze = I.NI.ZERO_LTV_WITHDRAW_BLOCKED)
          : (0, y.hE)(te).lt(Se)
            ? (Ze = I.NI.NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH)
            : Be && !ce.flashLoanEnabled && (Ze = I.NI.FLASH_LOAN_NOT_AVAILABLE);
        var Ye = function () {
            switch (Ze) {
              case I.NI.NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH:
                return (0, Y.jsx)(a.cC, { id: 'bxmzSh' });
              case I.NI.ZERO_LTV_WITHDRAW_BLOCKED:
                return (0, Y.jsx)(a.cC, { id: 'nUK1ou', values: { 0: Fe.join(', ') } });
              case I.NI.FLASH_LOAN_NOT_AVAILABLE:
                return (0, Y.jsx)(a.cC, { id: 'BJyN77' });
              default:
                return null;
            }
          },
          Ve = (0, O.LN)(Se, ie, $.decimals || 18);
        (0, O.IG)(je, ie, t.decimals);
        return Z.success
          ? (0, Y.jsx)(B.R, {
              action: (0, Y.jsx)(a.cC, { id: 'ARu1L4' }),
              amount: je,
              symbol: t.symbol,
            })
          : (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(R.W, {
                  value: Me,
                  onChange: Ee,
                  usdValue: _e,
                  symbol: t.symbol,
                  assets: [
                    {
                      address: t.underlyingAsset,
                      symbol: t.symbol,
                      iconSymbol: t.iconSymbol,
                      balance: de,
                    },
                  ],
                  isMaxSelected: me,
                  maxValue: de,
                  inputTitle: (0, Y.jsx)(a.cC, { id: 'mIM0qu' }),
                  balanceText: (0, Y.jsx)(a.cC, { id: 'hxi7vE' }),
                }),
                (0, Y.jsxs)(f.Z, {
                  sx: {
                    padding: '18px',
                    pt: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  },
                  children: [
                    (0, Y.jsx)(v.Z, {
                      sx: { fontSize: '18px !important' },
                      children: (0, Y.jsx)(b.Z, {}),
                    }),
                    (0, Y.jsx)(h.B, { loading: Ce, outputAmountUSD: Oe, inputAmountUSD: he }),
                  ],
                }),
                (0, Y.jsx)(R.W, {
                  value: Se,
                  usdValue: he,
                  symbol: $.symbol,
                  assets: X,
                  onSelect: ee,
                  onChange: Ee,
                  inputTitle: (0, Y.jsx)(a.cC, { id: 'lt6bpt' }),
                  balanceText: (0, Y.jsx)(a.cC, { id: 'hxi7vE' }),
                  maxValue: te,
                  loading: Ce,
                  disableInput: !0,
                }),
                we &&
                  !Ce &&
                  (0, Y.jsx)(x.Z, { variant: 'helperText', color: 'error.main', children: we }),
                void 0 !== Ze &&
                  (0, Y.jsx)(x.Z, {
                    variant: 'helperText',
                    color: 'error.main',
                    children: (0, Y.jsx)(Ye, {}),
                  }),
                (0, Y.jsxs)(N.m6, {
                  gasLimit: _,
                  slippageSelector: (0, Y.jsx)(P.n, {
                    selectedSlippage: ie,
                    setSlippage: ue,
                    slippageTooltipHeader: (0, Y.jsx)(A.Z, {
                      direction: 'row',
                      alignItems: 'center',
                      children: (0, Y.jsxs)(Y.Fragment, {
                        children: [
                          (0, Y.jsx)(a.cC, { id: 'LjafV8' }),
                          (0, Y.jsx)(A.Z, {
                            alignItems: 'end',
                            children: (0, Y.jsxs)(A.Z, {
                              direction: 'row',
                              children: [
                                (0, Y.jsx)(j.T1, {
                                  symbol: $.iconSymbol || '',
                                  sx: { mr: 1, fontSize: '14px' },
                                }),
                                (0, Y.jsx)(S.B, { value: Ve, variant: 'secondary12' }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  children: [
                    (0, Y.jsx)(N.jz, {
                      visibleHfChange: !!ae,
                      healthFactor: null === d || void 0 === d ? void 0 : d.healthFactor,
                      futureHealthFactor: Le.toString(10),
                      loading: Ce,
                    }),
                    (0, Y.jsx)(N.XJ, {
                      description: (0, Y.jsx)(a.cC, { id: 'JtwD8u' }),
                      futureValue: Ne.toString(),
                      futureValueUSD: Ie.toString(),
                      symbol: r,
                      tokenIcon: t.iconSymbol,
                      loading: Ce,
                      hideSymbolSuffix: !0,
                    }),
                    (0, Y.jsx)(N.XJ, {
                      description: (0, Y.jsx)(a.cC, { id: 'qGz5zl' }),
                      futureValue: Ue.toString(),
                      futureValueUSD: We.toString(),
                      symbol: $.symbol,
                      tokenIcon: $.iconSymbol,
                      loading: Ce,
                      hideSymbolSuffix: !0,
                    }),
                  ],
                }),
                F && (0, Y.jsx)(U.f, { txError: F }),
                (0, Y.jsx)(Q, {
                  poolReserve: t,
                  fromAssetData: ce,
                  repayAmount: je,
                  repayWithAmount: Ve,
                  repayAllDebt: Ae,
                  useFlashLoan: Be,
                  isWrongNetwork: c,
                  symbol: r,
                  rateMode: n,
                  blocked: void 0 !== Ze || '' !== we,
                  loading: Te,
                  buildTxFn: ke,
                }),
              ],
            });
      }
      var X = r(84707),
        K = r(82403),
        $ = r(20854),
        ee = r(69951),
        te = r(83063),
        re = r(30202),
        ne = r(56371),
        ae = r(94303),
        se = r(69986),
        oe = r(64041),
        ie = r(805),
        ue = r(52251),
        le = [
          'amountToRepay',
          'poolReserve',
          'poolAddress',
          'isWrongNetwork',
          'sx',
          'symbol',
          'repayWithATokens',
          'blocked',
          'maxApproveNeeded',
        ];
      function ce(e, t) {
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
      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ce(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ce(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var pe,
        me = function (e) {
          var t = e.amountToRepay,
            r = e.poolReserve,
            n = e.poolAddress,
            o = e.isWrongNetwork,
            i = e.sx,
            c = e.symbol,
            d = e.repayWithATokens,
            p = e.blocked,
            y = e.maxApproveNeeded,
            b = (0, W.Z)(e, le),
            f = (0, l.Y)(
              (0, L.N)(function (e) {
                return [
                  e.repay,
                  e.repayWithPermit,
                  e.encodeRepayParams,
                  e.encodeRepayWithPermitParams,
                  e.tryPermit,
                  e.walletApprovalMethodPreference,
                  e.estimateGasLimit,
                  e.addTransaction,
                  e.useOptimizedPath,
                  e.currentMarketData,
                ];
              })
            ),
            v = (0, m.Z)(f, 10),
            x = v[0],
            A = v[1],
            g = v[2],
            h = v[3],
            S = v[4],
            j = v[5],
            O = v[6],
            w = v[7],
            C = v[8],
            P = v[9],
            D = (0, E.Z)().sendTx,
            R = (0, re.NL)(),
            B = (0, s.useState)(),
            N = B[0],
            U = B[1],
            F = (0, u.vR)(),
            V = F.approvalTxState,
            H = F.mainTxState,
            q = F.loadingTxns,
            Q = F.setMainTxState,
            z = F.setTxError,
            G = F.setGasLimit,
            J = F.setLoadingTxns,
            X = F.setApprovalTxState,
            K = (0, se.y)(P, n),
            $ = K.data,
            ee = K.refetch,
            te = K.isFetching,
            ce = K.isFetchedAfterMount,
            pe = S({ reserveAddress: n, isWrappedBaseAsset: r.isWrappedBaseAsset }),
            me = pe && j === oe.n.PERMIT;
          J(te);
          var ye =
            !d &&
            0 !== Number(t) &&
            (0, I.iv)({
              approvedAmount: (null === $ || void 0 === $ ? void 0 : $.amount) || '0',
              amount: -1 === Number(t) ? y : t,
              signedAmount: N ? N.amount : '0',
            });
          ye && null !== V && void 0 !== V && V.success && X({});
          var be = (0, ae.M)({
            usePermit: me,
            approvedAmount: $,
            requiresApproval: ye,
            assetAddress: n,
            symbol: c,
            decimals: r.decimals,
            signatureAmount: t,
            onApprovalTxConfirmed: ee,
            onSignTxCompleted: function (e) {
              return U(e);
            },
          }).approval;
          (0, s.useEffect)(
            function () {
              ce || d || ee();
            },
            [ee, ce, d]
          );
          var fe = (function () {
            var e = (0, T.Z)(
              k().mark(function e() {
                var a, s, o, i, u, l, p, m, y;
                return k().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            Q(de(de({}, H), {}, { loading: !0 })),
                            (s = M.UQ.default),
                            !me || !N)
                          ) {
                            e.next = 21;
                            break;
                          }
                          if (
                            ((o = {
                              amount: '-1' === t ? t : (0, ne.parseUnits)(t, r.decimals).toString(),
                              reserve: n,
                              interestRateMode: M.tk.Variable,
                              signature: N.signature,
                              deadline: N.deadline,
                            }),
                            !C())
                          ) {
                            e.next = 9;
                            break;
                          }
                          return (e.next = 8), h(o);
                        case 8:
                          i = e.sent;
                        case 9:
                          return (
                            (s = M.UQ.repayWithPermit),
                            (u = A(de(de({}, o), {}, { encodedTxData: i ? i[0] : void 0 }))),
                            (e.next = 13),
                            O(u)
                          );
                        case 13:
                          return (u = e.sent), (e.next = 16), D(u);
                        case 16:
                          return (a = e.sent), (e.next = 19), a.wait(1);
                        case 19:
                          e.next = 36;
                          break;
                        case 21:
                          if (
                            ((l = {
                              amountToRepay:
                                '-1' === t ? t : (0, ne.parseUnits)(t, r.decimals).toString(),
                              poolAddress: n,
                              repayWithATokens: d,
                              debtType: M.tk.Variable,
                            }),
                            !C())
                          ) {
                            e.next = 26;
                            break;
                          }
                          return (e.next = 25), g(l);
                        case 25:
                          p = e.sent;
                        case 26:
                          return (
                            (s = M.UQ.repay),
                            (m = x(de(de({}, l), {}, { encodedTxData: p }))),
                            (e.next = 30),
                            O(m)
                          );
                        case 30:
                          return (m = e.sent), (e.next = 33), D(m);
                        case 33:
                          return (a = e.sent), (e.next = 36), a.wait(1);
                        case 36:
                          Q({ txHash: a.hash, loading: !1, success: !0 }),
                            w(a.hash, {
                              action: s,
                              txState: 'success',
                              asset: n,
                              amount: t,
                              assetName: c,
                            }),
                            R.invalidateQueries({ queryKey: ue.B.pool }),
                            R.invalidateQueries({ queryKey: ue.B.gho }),
                            (e.next = 47);
                          break;
                        case 42:
                          (e.prev = 42),
                            (e.t0 = e.catch(0)),
                            (y = (0, ie.WG)(e.t0, ie.aD.GAS_ESTIMATION, !1)),
                            z(y),
                            Q({ txHash: void 0, loading: !1 });
                        case 47:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 42]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (
            (0, s.useEffect)(
              function () {
                var e = 0;
                me
                  ? (e = Number(_.eB[M.UQ.supplyWithPermit].recommended))
                  : ((e = Number(_.eB[M.UQ.supply].recommended)),
                    ye && !V.success && (e += Number(I.pQ))),
                  G(e.toString());
              },
              [ye, V, me, G]
            ),
            (0, Y.jsx)(
              Z.B,
              de(
                de(
                  {
                    blocked: p,
                    preparingTransactions: q || !$,
                    symbol: r.symbol,
                    mainTxState: H,
                    approvalTxState: V,
                    requiresAmount: !0,
                    amount: t,
                    requiresApproval: ye,
                    isWrongNetwork: o,
                    sx: i,
                  },
                  b
                ),
                {},
                {
                  handleAction: fe,
                  handleApproval: be,
                  actionText: (0, Y.jsx)(a.cC, { id: '6Jrv+z', values: { symbol: c } }),
                  actionInProgressText: (0, Y.jsx)(a.cC, { id: 'ckf7gX', values: { symbol: c } }),
                  tryPermit: pe,
                }
              )
            )
          );
        },
        ye = function (e) {
          var t,
            r,
            n,
            o = e.poolReserve,
            d = e.userReserve,
            p = e.symbol,
            b = e.tokenBalance,
            f = e.nativeBalance,
            v = e.isWrongNetwork,
            A = e.user,
            h = (0, u.vR)(),
            S = h.gasLimit,
            j = h.mainTxState,
            O = h.txError,
            T = (0, i.HT)().marketReferencePriceInUsd,
            w = (0, l.Y)(
              (0, L.N)(function (e) {
                return [
                  e.poolComputed.minRemainingBaseTokenBalance,
                  e.currentChainId,
                  e.currentMarketData,
                  e.currentMarket,
                ];
              })
            ),
            k = (0, m.Z)(w, 4),
            C = k[0],
            E = k[1],
            P = k[2],
            D = k[3],
            I = (0, s.useState)({
              address: o.underlyingAsset,
              symbol: o.symbol,
              iconSymbol: o.iconSymbol,
              balance: b,
            }),
            U = I[0],
            W = I[1],
            M = (0, s.useState)([U]),
            F = M[0],
            Z = M[1],
            V = (0, s.useState)(''),
            H = V[0],
            q = V[1],
            Q = (0, s.useState)(''),
            z = Q[0],
            G = Q[1],
            J = (0, s.useRef)(),
            re = (0, c.Mo)(E),
            ne = d.underlyingBalance,
            ae = d.usageAsCollateralEnabledOnUser,
            se = d.reserve,
            oe = U.address === o.aTokenAddress,
            ie = (null === d || void 0 === d ? void 0 : d.variableBorrows) || '0',
            ue = new g.O(ie)
              .multipliedBy(o.formattedPriceInMarketReferenceCurrency)
              .multipliedBy(T)
              .shiftedBy(-K.$3),
            le = (0, y.hE)(ie).multipliedBy('1.0025').decimalPlaces(o.decimals, g.O.ROUND_UP);
          if (oe) (r = g.O.min(ne, ie)), (n = ne);
          else {
            var ce = (0, y.hE)(U.balance).minus(
              (null === d || void 0 === d ? void 0 : d.reserve.symbol.toUpperCase()) ===
                re.baseAssetSymbol
                ? C
                : '0'
            );
            (n = ce.toString(10)), (r = g.O.min(ce, ie));
          }
          var de = '-1' === z,
            pe = de ? r.toString(10) : z;
          (0, s.useEffect)(function () {
            var e = [];
            if (o.symbol === re.wrappedBaseAssetSymbol) {
              var t = (0, y.hE)(f),
                r = g.O.max(t, g.O.min(t, ie));
              e.push({
                address: _.hP.toLowerCase(),
                symbol: re.baseAssetSymbol,
                balance: r.toString(10),
              });
            }
            var n = g.O.min((0, y.hE)(b), ie),
              a = g.O.max(n, b);
            if (
              (e.push({
                address: o.underlyingAsset,
                symbol: o.symbol,
                iconSymbol: o.iconSymbol,
                balance: a.toString(10),
              }),
              P.v3 && !(0, ee.F$)({ symbol: o.symbol, currentMarket: D }))
            ) {
              var s = (0, y.hE)(ne),
                i = g.O.max(s, g.O.min(s, ie).toString(10));
              e.push({
                address: o.aTokenAddress,
                symbol: 'a'.concat(o.symbol),
                iconSymbol: o.iconSymbol,
                aToken: !0,
                balance: i.toString(10),
              });
            }
            Z(e), W(e[0]);
          }, []);
          var ye = (0, y.hE)(ie)
              .minus(pe || '0')
              .toString(10),
            be = new g.O(ye)
              .multipliedBy(o.formattedPriceInMarketReferenceCurrency)
              .multipliedBy(T)
              .shiftedBy(-K.$3),
            fe = de && be.toNumber() > 0,
            ve = null === A || void 0 === A ? void 0 : A.healthFactor;
          if (pe) {
            var xe = (null === A || void 0 === A ? void 0 : A.totalCollateralUSD) || '0';
            oe &&
              ae &&
              (xe = (0, y.hE)(
                (null === A || void 0 === A ? void 0 : A.totalCollateralUSD) || '0'
              ).minus((0, y.hE)(se.priceInUSD).multipliedBy(pe)));
            var Ae = (0, y.hE)(
                (null === A || void 0 === A ? void 0 : A.totalBorrowsUSD) || '0'
              ).minus((0, y.hE)(se.priceInUSD).multipliedBy(pe)),
              ge = g.O.max(Ae, 0),
              he = (0, $.L1)({
                collateralBalanceMarketReferenceCurrency: xe,
                borrowBalanceMarketReferenceCurrency: ge,
                currentLiquidationThreshold:
                  (null === A || void 0 === A ? void 0 : A.currentLiquidationThreshold) || '0',
              });
            ve = he.isLessThan(0) && !he.eq(-1) ? '0' : he.toString(10);
          }
          var Se = (0, y.hE)(pe).multipliedBy(se.priceInUSD);
          return j.success
            ? (0, Y.jsx)(B.R, {
                action: (0, Y.jsx)(a.cC, { id: '6h3Q5G' }),
                amount: J.current,
                symbol: oe ? o.symbol : U.symbol,
              })
            : (0, Y.jsxs)(Y.Fragment, {
                children: [
                  (0, Y.jsx)(R.W, {
                    value: pe,
                    onChange: function (e) {
                      var t = '-1' === e;
                      (J.current = t ? r.toString(10) : e),
                        G(e),
                        t && (oe || r.eq(ie))
                          ? U.address === _.hP.toLowerCase() ||
                            (X.U[E] && X.U[E].toLowerCase() === se.underlyingAsset.toLowerCase())
                            ? q(le.toString(10))
                            : q('-1')
                          : q(le.lt(n) ? le.toString(10) : r.toString(10));
                    },
                    usdValue: Se.toString(10),
                    symbol: U.symbol,
                    assets: F,
                    onSelect: W,
                    isMaxSelected: de,
                    maxValue: r.toString(10),
                    balanceText: (0, Y.jsx)(a.cC, { id: 'JoMQnI' }),
                  }),
                  fe &&
                    (0, Y.jsx)(x.Z, {
                      color: 'warning.main',
                      variant: 'helperText',
                      children: (0, Y.jsx)(a.cC, { id: 'dVfODp' }),
                    }),
                  (0, Y.jsxs)(N.m6, {
                    gasLimit: S,
                    children: [
                      (0, Y.jsx)(N.XJ, {
                        description: (0, Y.jsx)(a.cC, { id: 'zgtIDV' }),
                        futureValue: ye,
                        futureValueUSD: be.toString(10),
                        value: ie,
                        valueUSD: ue.toString(),
                        symbol:
                          o.iconSymbol === re.wrappedBaseAssetSymbol
                            ? re.baseAssetSymbol
                            : o.iconSymbol,
                      }),
                      (0, Y.jsx)(N.jz, {
                        visibleHfChange: !!z,
                        healthFactor: null === A || void 0 === A ? void 0 : A.healthFactor,
                        futureHealthFactor: ve,
                      }),
                    ],
                  }),
                  O && (0, Y.jsx)(te.Q, { txError: O }),
                  (0, Y.jsx)(me, {
                    maxApproveNeeded: le.toString(),
                    poolReserve: o,
                    amountToRepay: de ? H : pe,
                    poolAddress: oe
                      ? o.underlyingAsset
                      : null !== (t = U.address) && void 0 !== t
                        ? t
                        : '',
                    isWrongNetwork: v,
                    symbol: p,
                    repayWithATokens: oe,
                  }),
                ],
              });
        },
        be = r(17231),
        fe = r(15925),
        ve = r(65361);
      function xe(e) {
        var t,
          r = e.repayType,
          n = e.setRepayType,
          s = (0, l.Y)(
            (0, L.N)(function (e) {
              return [e.trackEvent, e.currentMarketData];
            })
          ),
          o = (0, m.Z)(s, 2),
          i = o[0];
        return null !== (t = o[1].enabledFeatures) && void 0 !== t && t.collateralRepay
          ? (0, Y.jsxs)(f.Z, {
              sx: { mb: 6 },
              children: [
                (0, Y.jsx)(x.Z, {
                  mb: 1,
                  color: 'text.secondary',
                  children: (0, Y.jsx)(a.cC, { id: 'xNy/UG' }),
                }),
                (0, Y.jsxs)(fe.f, {
                  color: 'primary',
                  value: r,
                  exclusive: !0,
                  onChange: function (e, t) {
                    return n(t);
                  },
                  children: [
                    (0, Y.jsx)(be.Y, {
                      value: pe.BALANCE,
                      disabled: r === pe.BALANCE,
                      onClick: function () {
                        return i(ve.rQ.SWITCH_REPAY_TYPE, { repayType: 'Wallet Balance' });
                      },
                      children: (0, Y.jsx)(x.Z, {
                        variant: 'buttonM',
                        children: (0, Y.jsx)(a.cC, { id: 'JoMQnI' }),
                      }),
                    }),
                    (0, Y.jsx)(be.Y, {
                      value: pe.COLLATERAL,
                      disabled: r === pe.COLLATERAL,
                      onClick: function () {
                        return i(ve.rQ.SWITCH_REPAY_TYPE, { repayType: 'Collateral' });
                      },
                      children: (0, Y.jsx)(x.Z, {
                        variant: 'buttonM',
                        children: (0, Y.jsx)(a.cC, { id: '62Xcjh' }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
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
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ae(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ae(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      !(function (e) {
        (e[(e.BALANCE = 0)] = 'BALANCE'), (e[(e.COLLATERAL = 1)] = 'COLLATERAL');
      })(pe || (pe = {}));
      var he = function () {
        var e = (0, u.vR)(),
          t = e.type,
          r = e.close,
          n = e.args,
          m = e.mainTxState,
          y = (0, i.HT)().userReserves,
          b = (0, l.Y)(function (e) {
            return e.currentMarketData;
          }),
          f = (0, s.useState)(pe.BALANCE),
          v = f[0],
          x = f[1],
          A =
            c.cr.collateralRepay(b) &&
            y.some(function (e) {
              return '0' !== e.scaledATokenBalance && e.underlyingAsset !== n.underlyingAsset;
            });
        return (0, Y.jsx)(d.P, {
          open: t === u.w8.Repay,
          setOpen: function () {
            x(pe.BALANCE), r();
          },
          children: (0, Y.jsx)(p.A, {
            title: (0, Y.jsx)(a.cC, { id: '3q3mFy' }),
            underlyingAsset: n.underlyingAsset,
            children: function (e) {
              return (0, Y.jsx)(o.X, {
                children: function (t) {
                  return (0, Y.jsxs)(Y.Fragment, {
                    children: [
                      A && !m.txHash && (0, Y.jsx)(xe, { repayType: v, setRepayType: x }),
                      v === pe.BALANCE && (0, Y.jsx)(ye, ge(ge({}, e), {}, { user: t })),
                      v === pe.COLLATERAL &&
                        (0, Y.jsx)(J, ge(ge({}, e), {}, { debtType: n.currentRateMode, user: t })),
                    ],
                  });
                },
              });
            },
          }),
        });
      };
    },
    94684: function (e, t, r) {
      var n = r(67294);
      const a = n.forwardRef(function (e, t) {
        return n.createElement(
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
          n.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M19 14l-7 7m0 0l-7-7m7 7V3',
          })
        );
      });
      t.Z = a;
    },
  },
]);
