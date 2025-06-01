'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8029],
  {
    78864: function (e, r, t) {
      t.d(r, {
        f: function () {
          return c;
        },
      });
      var n = t(57499),
        a = t(80822),
        o = t(15861),
        i = t(35783),
        s = t(83063),
        u = t(85893),
        c = function (e) {
          var r = e.txError;
          return (0, u.jsxs)(a.Z, {
            children: [
              (0, u.jsx)(s.Q, { txError: r }),
              'MetaMask Message Signature: User denied message signature.' !== r.rawError.message &&
                'MetaMask Tx Signature: User denied transaction signature.' !==
                  r.rawError.message &&
                (0, u.jsx)(a.Z, {
                  sx: { pt: 4 },
                  children: (0, u.jsx)(i.v, {
                    severity: 'info',
                    children: (0, u.jsxs)(o.Z, {
                      variant: 'description',
                      children: [' ', (0, u.jsx)(n.cC, { id: 'M2sknc' })],
                    }),
                  }),
                }),
            ],
          });
        };
    },
    15058: function (e, r, t) {
      t.d(r, {
        P: function () {
          return C;
        },
      });
      var n = t(90116),
        a = t(59499),
        o = t(50029),
        i = t(17674),
        s = t(87794),
        u = t.n(s),
        c = t(75331),
        l = t(30202),
        d = t(67294),
        f = t(87886),
        h = t(44949),
        p = t(72005),
        v = t(3062),
        m = t(64041),
        x = t(805),
        y = t(52251),
        b = t(73886),
        k = t(92997);
      function T(e, r) {
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
      function g(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? T(Object(t), !0).forEach(function (r) {
                (0, a.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : T(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var C = function (e) {
        var r = e.handleGetTxns,
          t = e.handleGetApprovalTxns,
          a = e.gasLimitRecommendation,
          s = e.skip,
          T = e.spender,
          C = e.protocolAction,
          E = e.deps,
          M = void 0 === E ? [] : E,
          A = (0, h.vR)(),
          R = A.approvalTxState,
          S = A.setApprovalTxState,
          w = A.mainTxState,
          L = A.setMainTxState,
          O = A.setGasLimit,
          I = A.loadingTxns,
          B = A.setLoadingTxns,
          D = A.setTxError,
          q = (0, p.Z)(),
          P = q.sendTx,
          N = q.getTxError,
          U = q.signTxData,
          j = (0, v.Y)(
            (0, b.N)(function (e) {
              return [
                e.walletApprovalMethodPreference,
                e.generateSignatureRequest,
                e.addTransaction,
              ];
            })
          ),
          G = (0, i.Z)(j, 3),
          _ = G[0],
          Z = G[1],
          H = G[2],
          W = (0, d.useState)(),
          F = W[0],
          V = W[1],
          Q = (0, d.useState)(),
          Y = Q[0],
          K = Q[1],
          X = (0, d.useState)(),
          $ = X[0],
          z = X[1],
          J = (0, d.useState)(),
          ee = J[0],
          re = J[1],
          te = (0, d.useState)({ asset: M[0], amount: M[1] }),
          ne = te[0],
          ae = te[1],
          oe = (0, d.useState)(!1),
          ie = oe[0],
          se = oe[1],
          ue = (0, d.useRef)(!1),
          ce = (0, l.NL)();
        (0, d.useEffect)(function () {
          return (
            (ue.current = !0),
            function () {
              ue.current = !1;
            }
          );
        }, []);
        var le = (function () {
            var e = (0, o.Z)(
              u().mark(function e(r) {
                var t, n, a, o, i;
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r.tx),
                            (n = r.errorCallback),
                            (a = r.successCallback),
                            (e.prev = 1),
                            (e.next = 4),
                            t()
                          );
                        case 4:
                          return (o = e.sent), (e.prev = 5), (e.next = 8), o.wait(1);
                        case 8:
                          ue.current && a && a(o),
                            H(o.hash, { txState: 'success', action: C || c.UQ.default }),
                            ce.invalidateQueries({ queryKey: y.B.pool }),
                            (e.next = 30);
                          break;
                        case 13:
                          return (
                            (e.prev = 13),
                            (e.t0 = e.catch(5)),
                            (e.prev = 15),
                            (e.next = 18),
                            N(o.hash)
                          );
                        case 18:
                          return (
                            (i = e.sent),
                            ue.current && n && n(new Error(i), o.hash),
                            e.abrupt('return')
                          );
                        case 23:
                          return (
                            (e.prev = 23),
                            (e.t1 = e.catch(15)),
                            ue.current && n && n(e.t1, o.hash),
                            e.abrupt('return')
                          );
                        case 27:
                          return (
                            (e.prev = 27),
                            H(o.hash, { txState: 'failed', action: C || c.UQ.default }),
                            e.finish(27)
                          );
                        case 30:
                          return e.abrupt('return');
                        case 33:
                          (e.prev = 33), (e.t2 = e.catch(1)), n && n(e.t2);
                        case 36:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [1, 33],
                    [5, 13],
                    [15, 23, 27, 30],
                  ]
                );
              })
            );
            return function (r) {
              return e.apply(this, arguments);
            };
          })(),
          de = (function () {
            var e = (0, o.Z)(
              u().mark(function e(r) {
                var t, n, a, o, i, s, c, l, d;
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((t = r.amount), (n = r.underlyingAsset), !(ie && t && n))) {
                            e.next = 38;
                            break;
                          }
                          return (
                            S(g(g({}, R), {}, { loading: !0 })),
                            (e.prev = 3),
                            (a = Math.floor(Date.now() / 1e3 + 3600).toString()),
                            (e.next = 7),
                            Z({ token: n, amount: t, deadline: a, spender: T })
                          );
                        case 7:
                          return (o = e.sent), (e.prev = 8), (e.next = 11), U(o);
                        case 11:
                          if (((i = e.sent), ue.current)) {
                            e.next = 14;
                            break;
                          }
                          return e.abrupt('return');
                        case 14:
                          z(i),
                            re(a),
                            S({ txHash: k.Z, loading: !1, success: !0 }),
                            D(void 0),
                            (e.next = 27);
                          break;
                        case 20:
                          if (((e.prev = 20), (e.t0 = e.catch(8)), ue.current)) {
                            e.next = 24;
                            break;
                          }
                          return e.abrupt('return');
                        case 24:
                          (s = (0, x.WG)(e.t0, x.aD.APPROVAL, !1)),
                            D(s),
                            S({ txHash: void 0, loading: !1 });
                        case 27:
                          e.next = 36;
                          break;
                        case 29:
                          if (((e.prev = 29), (e.t1 = e.catch(3)), ue.current)) {
                            e.next = 33;
                            break;
                          }
                          return e.abrupt('return');
                        case 33:
                          (c = (0, x.WG)(e.t1, x.aD.GAS_ESTIMATION, !1)),
                            D(c),
                            S({ txHash: void 0, loading: !1 });
                        case 36:
                          e.next = 56;
                          break;
                        case 38:
                          if (!F) {
                            e.next = 56;
                            break;
                          }
                          return (
                            (e.prev = 39),
                            S(g(g({}, R), {}, { loading: !0 })),
                            (e.next = 43),
                            F.tx()
                          );
                        case 43:
                          return (
                            delete (l = e.sent).gasPrice,
                            (e.next = 47),
                            le({
                              tx: function () {
                                return P(l);
                              },
                              successCallback: function (e) {
                                S({ txHash: e.hash, loading: !1, success: !0 }), D(void 0);
                              },
                              errorCallback: function (e, r) {
                                var t = (0, x.WG)(e, x.aD.APPROVAL, !1);
                                D(t), S({ txHash: r, loading: !1 });
                              },
                              action: x.aD.APPROVAL,
                            })
                          );
                        case 47:
                          e.next = 56;
                          break;
                        case 49:
                          if (((e.prev = 49), (e.t2 = e.catch(39)), ue.current)) {
                            e.next = 53;
                            break;
                          }
                          return e.abrupt('return');
                        case 53:
                          (d = (0, x.WG)(e.t2, x.aD.GAS_ESTIMATION, !1)),
                            D(d),
                            S({ txHash: void 0, loading: !1 });
                        case 56:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [3, 29],
                    [8, 20],
                    [39, 49],
                  ]
                );
              })
            );
            return function (r) {
              return e.apply(this, arguments);
            };
          })(),
          fe = (function () {
            var e = (0, o.Z)(
              u().mark(function e() {
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          L(g(g({}, w), {}, { loading: !0 })),
                          D(void 0),
                          (e.next = 4),
                          r($, ee)
                            .then(
                              (function () {
                                var e = (0, o.Z)(
                                  u().mark(function e(r) {
                                    var t, n, a;
                                    return u().wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                !(t = r.find(function (e) {
                                                  return ['DLP_ACTION'].includes(e.txType);
                                                }))
                                              ) {
                                                e.next = 15;
                                                break;
                                              }
                                              return (e.prev = 2), (e.next = 5), t.tx();
                                            case 5:
                                              return (
                                                delete (n = e.sent).gasPrice,
                                                e.abrupt(
                                                  'return',
                                                  le({
                                                    tx: function () {
                                                      return P(n);
                                                    },
                                                    successCallback: function (e) {
                                                      L({
                                                        txHash: e.hash,
                                                        loading: !1,
                                                        success: !0,
                                                      }),
                                                        D(void 0);
                                                    },
                                                    errorCallback: function (e, r) {
                                                      var t = (0, x.WG)(e, x.aD.MAIN_ACTION);
                                                      D(t), L({ txHash: r, loading: !1 });
                                                    },
                                                    action: x.aD.MAIN_ACTION,
                                                  })
                                                )
                                              );
                                            case 10:
                                              (e.prev = 10),
                                                (e.t0 = e.catch(2)),
                                                (a = (0, x.WG)(e.t0, x.aD.GAS_ESTIMATION, !1)),
                                                D(a),
                                                L(g(g({}, w), {}, { loading: !1 }));
                                            case 15:
                                            case 'end':
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[2, 10]]
                                    );
                                  })
                                );
                                return function (r) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                            .catch(function (e) {
                              var r = (0, x.WG)(e, x.aD.GAS_ESTIMATION, !1);
                              D(r), L(g(g({}, w), {}, { loading: !1 }));
                            })
                        );
                      case 4:
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
        return (
          (0, d.useEffect)(
            function () {
              s
                ? (V(void 0), K(void 0))
                : (B(!0),
                  t()
                    .then(
                      (function () {
                        var e = (0, o.Z)(
                          u().mark(function e(r) {
                            var t, n;
                            return u().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    (t = r.find(function (e) {
                                      return 'ERC20_APPROVAL' === e.txType;
                                    })),
                                      (n = _ === m.n.PERMIT),
                                      (M[0] !== ne.asset ||
                                        Number(M[1]) >
                                          Number(ne.amount) + Number(ne.amount) * (f.Ik / 2)) &&
                                        (S({ success: !1 }), D(void 0)),
                                      Number(M[1]) < Number(ne.amount) && D(void 0),
                                      ae({ asset: M[0], amount: M[1] }),
                                      t && n
                                        ? (se(!0), L({ txHash: void 0 }), B(!1))
                                        : (se(!1), V(t));
                                  case 6:
                                  case 'end':
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (r) {
                          return e.apply(this, arguments);
                        };
                      })()
                    )
                    .finally(function () {
                      L({ txHash: void 0 }), O(a), B(!1);
                    }));
            },
            [s].concat((0, n.Z)(M), [_])
          ),
          {
            approval: de,
            action: fe,
            loadingTxns: I,
            requiresApproval: !!F || ie,
            approvalTxState: R,
            mainTxState: w,
            actionTx: Y,
            approvalTx: F,
          }
        );
      };
    },
    7568: function (e, r, t) {
      t.d(r, {
        W: function () {
          return o;
        },
      });
      var n = t(3062),
        a = t(62535),
        o = function () {
          var e = (0, n.Y)(function (e) {
              return e.currentMarketData;
            }),
            r = (0, a.C)(e).data;
          if (!e.v3 || !r) return [];
          if ('0' === r.totalBorrowsUSD) return [];
          var t = [];
          return (
            r.userReservesData.forEach(function (e) {
              Number(e.scaledATokenBalance) > 0 &&
                '0' === e.reserve.baseLTVasCollateral &&
                e.usageAsCollateralEnabledOnUser &&
                '0' !== e.reserve.reserveLiquidationThreshold &&
                t.push(e.reserve.symbol);
            }),
            t
          );
        };
    },
    58730: function (e, r, t) {
      t.d(r, {
        $m: function () {
          return c;
        },
        DX: function () {
          return u;
        },
        _S: function () {
          return i;
        },
        bU: function () {
          return s;
        },
      });
      var n = t(20854),
        a = t(1279),
        o = t(70794);
      function i(e) {
        var r,
          t = e.fromAmount,
          o = e.fromAssetData,
          i = e.fromAssetUserData,
          s = e.toAmountAfterSlippage,
          u = e.toAssetData,
          c = e.user,
          l = o.eModes.find(function (e) {
            return e.id === c.userEmodeCategoryId;
          }),
          d = u.eModes.find(function (e) {
            return e.id === c.userEmodeCategoryId;
          }),
          f =
            c.isInEmode && l
              ? l.eMode.formattedLiquidationThreshold
              : o.formattedReserveLiquidationThreshold,
          h = '0';
        i.usageAsCollateralEnabledOnUser &&
          '0' !== o.reserveLiquidationThreshold &&
          (h = (0, n.L1)({
            collateralBalanceMarketReferenceCurrency: (0, a.hE)(t).multipliedBy(
              o.formattedPriceInMarketReferenceCurrency
            ),
            borrowBalanceMarketReferenceCurrency: c.totalBorrowsMarketReferenceCurrency,
            currentLiquidationThreshold: f,
          }).toString());
        var p = '0';
        return (
          ((!c.isInIsolationMode && !u.isIsolated) ||
            (c.isInIsolationMode &&
              (null === (r = c.isolatedReserve) || void 0 === r ? void 0 : r.underlyingAsset) ===
                u.underlyingAsset)) &&
            (p = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, a.hE)(s).multipliedBy(
                u.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: c.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold:
                c.isInEmode && d
                  ? d.eMode.formattedLiquidationThreshold
                  : u.formattedReserveLiquidationThreshold,
            }).toString()),
          {
            hfEffectOfFromAmount: h,
            hfAfterSwap:
              '-1' === c.healthFactor
                ? (0, a.hE)('-1')
                : (0, a.hE)(c.healthFactor).plus(p).minus(h),
          }
        );
      }
      var s = function (e) {
          var r = e.user,
            t = e.amountToReceiveAfterSwap,
            i = e.amountToSwap,
            s = e.fromAssetData,
            u = e.toAssetData,
            c = e.repayWithUserReserve,
            l = e.debt,
            d = s.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            f =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : s.formattedReserveLiquidationThreshold,
            h = '0';
          null !== c &&
            void 0 !== c &&
            c.usageAsCollateralEnabledOnUser &&
            s.usageAsCollateralEnabled &&
            (h = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, a.hE)(i).multipliedBy(
                s.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold: f,
            }).toString());
          var p = (0, a.hE)(o.O.min(t, l)).multipliedBy(u.priceInUSD).toString(10),
            v = (0, a.hE)(r.totalBorrowsUSD).minus(p);
          v = o.O.max(v, (0, a.hE)('0'));
          var m = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: r.totalCollateralUSD,
              borrowBalanceMarketReferenceCurrency: v.toString(10),
              currentLiquidationThreshold: r.currentLiquidationThreshold,
            }),
            x =
              '0' !== s.reserveLiquidationThreshold &&
              null !== c &&
              void 0 !== c &&
              c.usageAsCollateralEnabledOnUser
                ? (0, n.L1)({
                    collateralBalanceMarketReferenceCurrency: (0, a.hE)(i).multipliedBy(
                      s.priceInUSD
                    ),
                    borrowBalanceMarketReferenceCurrency: v.toString(10),
                    currentLiquidationThreshold: s.formattedReserveLiquidationThreshold,
                  }).toString()
                : '0',
            y = m.eq(-1) ? m : m.minus(x);
          return {
            hfEffectOfFromAmount: (0, a.hE)(h),
            hfAfterSwap: y.isLessThan(0) && !y.eq(-1) ? 0 : y,
          };
        },
        u = function (e) {
          var r = e.user,
            t = e.userReserve,
            i = e.poolReserve,
            s = e.withdrawAmount,
            u = (0, a.hE)(r.totalCollateralMarketReferenceCurrency),
            c = r.currentLiquidationThreshold,
            l = (0, a.hE)(r.healthFactor),
            d = i.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            f =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : i.formattedReserveLiquidationThreshold;
          if (
            null !== t &&
            void 0 !== t &&
            t.usageAsCollateralEnabledOnUser &&
            '0' !== i.reserveLiquidationThreshold
          ) {
            var h = (0, a.hE)(s).multipliedBy(i.formattedPriceInMarketReferenceCurrency);
            (u = u.minus(h)),
              (c = (0, a.hE)(r.totalCollateralMarketReferenceCurrency)
                .multipliedBy((0, a.hE)(r.currentLiquidationThreshold))
                .minus((0, a.hE)(h).multipliedBy(f))
                .div(u)
                .toFixed(4, o.O.ROUND_DOWN)),
              (l = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: u,
                borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
                currentLiquidationThreshold: c,
              }));
          }
          return l;
        },
        c = function (e, r, t) {
          var o,
            i = e ? (0, a.hE)(e.healthFactor) : '-1',
            s = e ? (0, a.hE)(e.totalCollateralMarketReferenceCurrency).plus(t) : '-1',
            u = e
              ? (0, a.hE)(e.totalCollateralMarketReferenceCurrency)
                  .multipliedBy(e.currentLiquidationThreshold)
                  .plus(t.multipliedBy(r.formattedReserveLiquidationThreshold))
                  .dividedBy(s)
              : '-1';
          return (
            e &&
              ((!e.isInIsolationMode && !r.isIsolated) ||
                (e.isInIsolationMode &&
                  (null === (o = e.isolatedReserve) || void 0 === o
                    ? void 0
                    : o.underlyingAsset) === r.underlyingAsset)) &&
              (i = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: s,
                borrowBalanceMarketReferenceCurrency: (0, a.hE)(
                  e.totalBorrowsMarketReferenceCurrency
                ),
                currentLiquidationThreshold: u,
              })),
            i
          );
        };
    },
  },
]);
