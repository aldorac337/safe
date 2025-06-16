'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8300],
  {
    54167: function (e, r, n) {
      n.r(r),
        n.d(r, {
          CollateralChangeModal: function () {
            return w;
          },
        });
      var t,
        s = n(59499),
        a = n(57499),
        o = n(67294),
        i = n(49679),
        l = n(44949),
        c = n(15629),
        u = n(92519),
        d = n(1279),
        C = n(20854),
        v = n(15861),
        _ = n(35783),
        f = n(89771),
        A = n(7568),
        h = n(83063),
        O = n(44880),
        y = n(67944),
        E = n(13918),
        T = n(50029),
        g = n(87794),
        p = n.n(g),
        b = n(75331),
        x = n(92997),
        j = n(3062),
        R = n(84207),
        m = n(85893),
        S = function (e) {
          var r = e.poolReserve,
            n = e.isWrongNetwork,
            t = e.usageAsCollateral,
            s = e.blocked,
            o = e.symbol,
            i = (0, j.Y)(function (e) {
              return e.setUsageAsCollateral;
            }),
            l = (0, x.Q)({
              tryPermit: !1,
              protocolAction: b.UQ.setUsageAsCollateral,
              eventTxInfo: {
                assetName: r.name,
                asset: r.underlyingAsset,
                previousState: (!t).toString(),
                newState: t.toString(),
              },
              handleGetTxns: (function () {
                var e = (0, T.Z)(
                  p().mark(function e() {
                    return p().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              i({ reserve: r.underlyingAsset, usageAsCollateral: t })
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
              skip: s,
            }),
            c = l.action,
            u = l.loadingTxns,
            d = l.mainTxState,
            C = l.requiresApproval;
          return (0, m.jsx)(R.B, {
            requiresApproval: C,
            blocked: s,
            preparingTransactions: u,
            mainTxState: d,
            isWrongNetwork: n,
            actionText: t
              ? (0, m.jsx)(a.cC, { id: 'y66tBm', values: { symbol: o } })
              : (0, m.jsx)(a.cC, { id: 'RIfckG', values: { symbol: o } }),
            actionInProgressText: (0, m.jsx)(a.cC, { id: 'NF0e1Q' }),
            handleAction: c,
          });
        };
      !(function (e) {
        (e[(e.DO_NOT_HAVE_SUPPLIES_IN_THIS_CURRENCY = 0)] =
          'DO_NOT_HAVE_SUPPLIES_IN_THIS_CURRENCY'),
          (e[(e.CAN_NOT_USE_THIS_CURRENCY_AS_COLLATERAL = 1)] =
            'CAN_NOT_USE_THIS_CURRENCY_AS_COLLATERAL'),
          (e[(e.CAN_NOT_SWITCH_USAGE_AS_COLLATERAL_MODE = 2)] =
            'CAN_NOT_SWITCH_USAGE_AS_COLLATERAL_MODE'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 3)] = 'ZERO_LTV_WITHDRAW_BLOCKED');
      })(t || (t = {}));
      var L = function (e) {
        var r = e.poolReserve,
          n = e.userReserve,
          s = e.isWrongNetwork,
          i = e.symbol,
          c = e.user,
          u = (0, l.vR)(),
          T = u.gasLimit,
          g = u.mainTxState,
          p = u.txError,
          b = (0, f.ov)().debtCeiling,
          x = (0, o.useState)(n.usageAsCollateralEnabledOnUser),
          j = x[0],
          R = x[1],
          L = !n.usageAsCollateralEnabledOnUser,
          N = (0, d.hE)(c.totalCollateralMarketReferenceCurrency),
          I = !r.isIsolated && L,
          w = !r.isIsolated && !L,
          k = r.isIsolated && L,
          U = r.isIsolated && !L,
          D = N[L ? 'plus' : 'minus'](n.underlyingBalanceMarketReferenceCurrency),
          P = (0, C.L1)({
            collateralBalanceMarketReferenceCurrency: D,
            borrowBalanceMarketReferenceCurrency: c.totalBorrowsMarketReferenceCurrency,
            currentLiquidationThreshold: c.currentLiquidationThreshold,
          }),
          W = (0, A.W)(),
          H = void 0;
        W.length > 0 && !W.includes(r.symbol)
          ? (H = t.ZERO_LTV_WITHDRAW_BLOCKED)
          : (0, d.hE)(n.underlyingBalance).eq(0)
            ? (H = t.DO_NOT_HAVE_SUPPLIES_IN_THIS_CURRENCY)
            : (!n.usageAsCollateralEnabledOnUser && '0' === r.reserveLiquidationThreshold) ||
                '0' === r.reserveLiquidationThreshold
              ? (H = t.CAN_NOT_USE_THIS_CURRENCY_AS_COLLATERAL)
              : n.usageAsCollateralEnabledOnUser &&
                '0' !== c.totalBorrowsMarketReferenceCurrency &&
                P.lte('1') &&
                (H = t.CAN_NOT_SWITCH_USAGE_AS_COLLATERAL_MODE);
        var B = function () {
          switch (H) {
            case t.DO_NOT_HAVE_SUPPLIES_IN_THIS_CURRENCY:
              return (0, m.jsx)(a.cC, { id: 'wRRqvW' });
            case t.CAN_NOT_USE_THIS_CURRENCY_AS_COLLATERAL:
              return (0, m.jsx)(a.cC, { id: 'JPrLjO' });
            case t.CAN_NOT_SWITCH_USAGE_AS_COLLATERAL_MODE:
              return (0, m.jsx)(a.cC, { id: 'yhvj6d' });
            case t.ZERO_LTV_WITHDRAW_BLOCKED:
              return (0, m.jsx)(a.cC, { id: 'nUK1ou', values: { 0: W.join(', ') } });
            default:
              return null;
          }
        };
        return (
          (0, o.useEffect)(
            function () {
              g.success && R(L);
            },
            [g.success, j]
          ),
          g.success
            ? (0, m.jsx)(O.R, { collateral: j, symbol: r.symbol })
            : (0, m.jsxs)(m.Fragment, {
                children: [
                  I &&
                    (0, m.jsx)(_.v, {
                      severity: 'warning',
                      icon: !1,
                      sx: { mb: 3 },
                      children: (0, m.jsx)(a.cC, { id: 'PpqD5g' }),
                    }),
                  w &&
                    (0, m.jsx)(_.v, {
                      severity: 'warning',
                      icon: !1,
                      sx: { mb: 3 },
                      children: (0, m.jsx)(a.cC, { id: 'a5RYZd' }),
                    }),
                  k && (0, m.jsx)(E.i, { asset: r.symbol }),
                  U &&
                    (0, m.jsx)(_.v, {
                      severity: 'info',
                      icon: !1,
                      sx: { mb: 3 },
                      children: (0, m.jsx)(a.cC, { id: 'XZzneG' }),
                    }),
                  r.isIsolated && b.determineWarningDisplay({ debtCeiling: b }),
                  (0, m.jsxs)(y.m6, {
                    gasLimit: T,
                    children: [
                      (0, m.jsx)(y.oD, {
                        symbol: r.symbol,
                        iconSymbol: r.iconSymbol,
                        description: (0, m.jsx)(a.cC, { id: 'zmTPiV' }),
                        value: n.underlyingBalance,
                      }),
                      (0, m.jsx)(y.jz, {
                        visibleHfChange: !0,
                        healthFactor: c.healthFactor,
                        futureHealthFactor: P.toString(10),
                      }),
                    ],
                  }),
                  void 0 !== H &&
                    (0, m.jsx)(v.Z, {
                      variant: 'helperText',
                      color: 'error.main',
                      children: (0, m.jsx)(B, {}),
                    }),
                  p && (0, m.jsx)(h.Q, { txError: p }),
                  (0, m.jsx)(S, {
                    symbol: i,
                    poolReserve: r,
                    usageAsCollateral: L,
                    isWrongNetwork: s,
                    blocked: void 0 !== H,
                  }),
                ],
              })
        );
      };
      function N(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function I(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? N(Object(n), !0).forEach(function (r) {
                (0, s.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : N(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var w = function () {
        var e = (0, l.vR)(),
          r = e.type,
          n = e.close,
          t = e.args;
        return (0, m.jsx)(c.P, {
          open: r === l.w8.CollateralChange,
          setOpen: n,
          children: (0, m.jsx)(u.A, {
            title: (0, m.jsx)(a.cC, { id: 'sK+Nag' }),
            underlyingAsset: t.underlyingAsset,
            children: function (e) {
              return (0, m.jsx)(i.X, {
                children: function (r) {
                  return (0, m.jsx)(L, I(I({}, e), {}, { user: r }));
                },
              });
            },
          }),
        });
      };
    },
    92519: function (e, r, n) {
      n.d(r, {
        A: function () {
          return h;
        },
      });
      var t = n(80854),
        s = (n(67294), n(60377)),
        a = n(50060),
        o = n(89771),
        i = n(53097),
        l = n(44949),
        c = n(72005),
        u = n(3062),
        d = n(65361),
        C = n(79850),
        v = n(37096),
        _ = n(19408),
        f = n(40429),
        A = n(85893),
        h = function (e) {
          var r,
            n,
            h = e.hideTitleSymbol,
            O = e.underlyingAsset,
            y = e.children,
            E = e.requiredChainId,
            T = e.title,
            g = e.keepWrappedSymbol,
            p = (0, c.Z)().readOnlyModeAddress,
            b = (0, u.Y)(function (e) {
              return e.currentMarketData;
            }),
            x = (0, u.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            j = (0, a.P)(b).walletBalances,
            R = (0, s.HT)(),
            m = R.user,
            S = R.reserves,
            L = (0, l.vR)(),
            N = L.txError,
            I = L.mainTxState,
            w = (0, i.Q)(E),
            k = w.isWrongNetwork,
            U = w.requiredChainId;
          if (N && N.blocking) return (0, A.jsx)(f.D, { txError: N });
          var D = S.find(function (e) {
              return O.toLowerCase() === t.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : O === e.underlyingAsset;
            }),
            P =
              null === m || void 0 === m
                ? void 0
                : m.userReservesData.find(function (e) {
                    return O.toLowerCase() === t.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : O === e.underlyingAsset;
                  }),
            W = D.isWrappedBaseAsset && !g ? x.baseAssetSymbol : D.symbol;
          return (0, A.jsxs)(o.hv, {
            asset: D,
            children: [
              !I.success && (0, A.jsx)(v.E, { title: T, symbol: h ? void 0 : W }),
              k &&
                !p &&
                (0, A.jsx)(_.I, {
                  networkName: (0, C.Mo)(U).name,
                  chainId: U,
                  event: { eventName: d.vh.SWITCH_NETWORK, eventParams: { asset: O } },
                }),
              y({
                isWrongNetwork: k,
                nativeBalance:
                  (null === (r = j[t.hP.toLowerCase()]) || void 0 === r ? void 0 : r.amount) || '0',
                tokenBalance:
                  (null === (n = j[D.underlyingAsset.toLowerCase()]) || void 0 === n
                    ? void 0
                    : n.amount) || '0',
                poolReserve: D,
                symbol: W,
                underlyingAsset: O,
                userReserve: P,
              }),
            ],
          });
        };
    },
    13918: function (e, r, n) {
      n.d(r, {
        i: function () {
          return l;
        },
      });
      var t = n(57499),
        s = n(15861),
        a = n(38577),
        o = n(35783),
        i = n(85893),
        l = function (e) {
          var r = e.asset,
            n = e.severity;
          return (0, i.jsxs)(o.v, {
            severity: n || 'info',
            sx: { mb: 3 },
            children: [
              (0, i.jsx)(s.Z, {
                variant: 'subheader1',
                mb: 0.5,
                children: (0, i.jsx)(t.cC, { id: '94OHPx' }),
              }),
              (0, i.jsx)(s.Z, {
                children: (0, i.jsx)(t.cC, {
                  id: 'igkfR1',
                  values: { 0: r || '' },
                  components: {
                    0: (0, i.jsx)(a.rU, {
                      href: 'https://docs.aave.com/faq/aave-v3-features#isolation-mode',
                    }),
                  },
                }),
              }),
            ],
          });
        };
    },
    53097: function (e, r, n) {
      n.d(r, {
        Q: function () {
          return a;
        },
      });
      var t = n(72005),
        s = n(3062);
      function a(e) {
        var r = (0, s.Y)(function (e) {
            return e.currentChainId;
          }),
          n = e || r;
        return { isWrongNetwork: (0, t.Z)().chainId !== n, requiredChainId: n };
      }
    },
    7568: function (e, r, n) {
      n.d(r, {
        W: function () {
          return a;
        },
      });
      var t = n(3062),
        s = n(62535),
        a = function () {
          var e = (0, t.Y)(function (e) {
              return e.currentMarketData;
            }),
            r = (0, s.C)(e).data;
          if (!e.v3 || !r) return [];
          if ('0' === r.totalBorrowsUSD) return [];
          var n = [];
          return (
            r.userReservesData.forEach(function (e) {
              Number(e.scaledATokenBalance) > 0 &&
                '0' === e.reserve.baseLTVasCollateral &&
                e.usageAsCollateralEnabledOnUser &&
                '0' !== e.reserve.reserveLiquidationThreshold &&
                n.push(e.reserve.symbol);
            }),
            n
          );
        };
    },
    36864: function (e, r, n) {
      function t() {
        return (
          (t =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              }
              return e;
            }),
          t.apply(this, arguments)
        );
      }
      n.d(r, {
        Z: function () {
          return t;
        },
      });
    },
  },
]);
