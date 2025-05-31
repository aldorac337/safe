'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2641],
  {
    37836: function (e, r, t) {
      t.d(r, {
        v: function () {
          return a;
        },
      });
      var n = t(57499),
        o = t(38577),
        s = t(85893),
        a = function () {
          return (0, s.jsx)(n.cC, {
            id: 'WaZyaV',
            components: {
              0: (0, s.jsx)('b', {}),
              1: (0, s.jsx)(o.rU, {
                href: 'https://docs.aave.com/developers/v/2.0/guides/ampl-asset-listing',
                underline: 'always',
              }),
            },
          });
        };
    },
    88178: function (e, r, t) {
      t.d(r, {
        C: function () {
          return m;
        },
      });
      var n = t(57499),
        o = t(80227),
        s = t(26447),
        a = t(15861),
        i = t(80822),
        l = t(88078),
        u = t(53219),
        c = t(66510),
        d = t(32867),
        p = t(85893),
        m = function (e) {
          var r = e.decimals,
            t = e.tokenWrapperAddress,
            m = e.tokenInSymbol,
            y = e.tokenOutSymbol,
            f = (0, c.v)('1', r, t),
            v = f.isLoading,
            h = f.data;
          return (0, p.jsxs)(s.Z, {
            direction: 'column',
            gap: 3,
            children: [
              (0, p.jsx)(a.Z, { variant: 'tooltip', children: (0, p.jsx)(n.cC, { id: 'kzZyM4' }) }),
              (0, p.jsxs)(s.Z, {
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, p.jsx)(i.Z, {
                    children: (0, p.jsx)(a.Z, {
                      variant: 'secondary12',
                      children: (0, p.jsx)(n.cC, { id: 'sXKb3l' }),
                    }),
                  }),
                  v
                    ? (0, p.jsx)(l.Z, { variant: 'rectangular', width: 120, height: 14 })
                    : (0, p.jsxs)(s.Z, {
                        direction: 'row',
                        alignItems: 'center',
                        gap: 1,
                        children: [
                          (0, p.jsx)(d.B, {
                            value: '1',
                            visibleDecimals: 0,
                            variant: 'secondary12',
                            color: 'text.primary',
                          }),
                          (0, p.jsx)(a.Z, { variant: 'tooltip', children: m }),
                          (0, p.jsx)(u.Z, {
                            color: 'primary',
                            sx: { fontSize: '12px' },
                            children: (0, p.jsx)(o.Z, {}),
                          }),
                          (0, p.jsx)(d.B, {
                            value: h || '0',
                            visibleDecimals: 4,
                            variant: 'secondary12',
                            color: 'text.primary',
                          }),
                          (0, p.jsx)(a.Z, { variant: 'tooltip', children: y }),
                        ],
                      }),
                ],
              }),
            ],
          });
        };
    },
    92519: function (e, r, t) {
      t.d(r, {
        A: function () {
          return h;
        },
      });
      var n = t(80854),
        o = (t(67294), t(60377)),
        s = t(50060),
        a = t(89771),
        i = t(53097),
        l = t(44949),
        u = t(72005),
        c = t(3062),
        d = t(65361),
        p = t(79850),
        m = t(37096),
        y = t(19408),
        f = t(40429),
        v = t(85893),
        h = function (e) {
          var r,
            t,
            h = e.hideTitleSymbol,
            b = e.underlyingAsset,
            g = e.children,
            x = e.requiredChainId,
            k = e.title,
            j = e.keepWrappedSymbol,
            A = (0, u.Z)().readOnlyModeAddress,
            C = (0, c.Y)(function (e) {
              return e.currentMarketData;
            }),
            S = (0, c.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            O = (0, s.P)(C).walletBalances,
            T = (0, o.HT)(),
            w = T.user,
            I = T.reserves,
            P = (0, l.vR)(),
            M = P.txError,
            E = P.mainTxState,
            R = (0, i.Q)(x),
            B = R.isWrongNetwork,
            L = R.requiredChainId;
          if (M && M.blocking) return (0, v.jsx)(f.D, { txError: M });
          var W = I.find(function (e) {
              return b.toLowerCase() === n.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : b === e.underlyingAsset;
            }),
            D =
              null === w || void 0 === w
                ? void 0
                : w.userReservesData.find(function (e) {
                    return b.toLowerCase() === n.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : b === e.underlyingAsset;
                  }),
            N = W.isWrappedBaseAsset && !j ? S.baseAssetSymbol : W.symbol;
          return (0, v.jsxs)(a.hv, {
            asset: W,
            children: [
              !E.success && (0, v.jsx)(m.E, { title: k, symbol: h ? void 0 : N }),
              B &&
                !A &&
                (0, v.jsx)(y.I, {
                  networkName: (0, p.Mo)(L).name,
                  chainId: L,
                  event: { eventName: d.vh.SWITCH_NETWORK, eventParams: { asset: b } },
                }),
              g({
                isWrongNetwork: B,
                nativeBalance:
                  (null === (r = O[n.hP.toLowerCase()]) || void 0 === r ? void 0 : r.amount) || '0',
                tokenBalance:
                  (null === (t = O[W.underlyingAsset.toLowerCase()]) || void 0 === t
                    ? void 0
                    : t.amount) || '0',
                poolReserve: W,
                symbol: N,
                underlyingAsset: b,
                userReserve: D,
              }),
            ],
          });
        };
    },
    82641: function (e, r, t) {
      t.r(r),
        t.d(r, {
          SupplyModal: function () {
            return Oe;
          },
        });
      var n = t(59499),
        o = t(57499),
        s = t(67294),
        a = t(49679),
        i = t(44949),
        l = t(15629),
        u = t(92519),
        c = t(17674),
        d = t(80854),
        p = t(82403),
        m = t(1279),
        y = t(26447),
        f = t(15861),
        v = t(88078),
        h = t(70794),
        b = t(88178),
        g = t(32867),
        x = t(45640),
        k = t(35783),
        j = t(49212),
        A = t(37836),
        C = t(50060),
        S = t(66510),
        O = t(89771),
        T = t(43666),
        w = t(3062),
        I = t(65361),
        P = t(56705),
        M = t(58730),
        E = t(79850),
        R = t(84314),
        B = t(73886),
        L = t(60377),
        W = t(73592),
        D = t(23478),
        N = t(83063),
        q = t(44880),
        U = t(67944),
        Z = t(53008),
        F = t(23795),
        Q = t(38577),
        Y = t(85893),
        _ = function () {
          return (0, Y.jsx)(k.v, {
            severity: 'info',
            children: (0, Y.jsxs)(f.Z, {
              children: [
                (0, Y.jsx)(o.cC, { id: 'jA2QeW' }),
                ' AAVE',
                ' ',
                (0, Y.jsx)(o.cC, { id: 'iUo5rv' }),
                ' AAVE',
                ' ',
                (0, Y.jsx)(o.cC, { id: 'x9iLRD' }),
                ' ',
                (0, Y.jsx)(F.Z, {
                  href: Q.Z6.staking,
                  children: (0, Y.jsx)(o.cC, { id: 'Ma/MtY' }),
                }),
              ],
            }),
          });
        },
        z = t(13918),
        H = function () {
          return (0, Y.jsx)(k.v, {
            severity: 'warning',
            children: (0, Y.jsxs)(f.Z, {
              children: [
                (0, Y.jsx)(o.cC, { id: 'ZfUGFb' }),
                ' SNX',
                ' ',
                (0, Y.jsx)(o.cC, { id: 'piPrJ7' }),
              ],
            }),
          });
        },
        G = t(50029),
        $ = t(4730),
        K = t(87794),
        V = t.n(K),
        X = t(75331),
        J = t(30202),
        ee = t(56371),
        re = t(94303),
        te = t(69986),
        ne = t(72005),
        oe = t(64041),
        se = t(805),
        ae = t(52251),
        ie = t(84207),
        le = [
          'amountToSupply',
          'poolAddress',
          'isWrongNetwork',
          'sx',
          'symbol',
          'blocked',
          'decimals',
          'isWrappedBaseAsset',
        ];
      function ue(e, r) {
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
      function ce(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ue(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ue(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var de = s.memo(function (e) {
          var r = e.amountToSupply,
            t = e.poolAddress,
            n = e.isWrongNetwork,
            a = e.sx,
            l = e.symbol,
            u = e.blocked,
            p = e.decimals,
            m = e.isWrappedBaseAsset,
            y = (0, $.Z)(e, le),
            f = (0, w.Y)(
              (0, B.N)(function (e) {
                return [
                  e.tryPermit,
                  e.supply,
                  e.supplyWithPermit,
                  e.walletApprovalMethodPreference,
                  e.estimateGasLimit,
                  e.addTransaction,
                  e.currentMarketData,
                ];
              })
            ),
            v = (0, c.Z)(f, 7),
            h = v[0],
            b = v[1],
            g = v[2],
            x = v[3],
            k = v[4],
            j = v[5],
            A = v[6],
            C = (0, i.vR)(),
            S = C.approvalTxState,
            O = C.mainTxState,
            T = C.loadingTxns,
            I = C.setLoadingTxns,
            P = C.setApprovalTxState,
            M = C.setMainTxState,
            E = C.setGasLimit,
            R = C.setTxError,
            L = h({ reserveAddress: t, isWrappedBaseAsset: m }),
            W = (0, ne.Z)().sendTx,
            D = (0, J.NL)(),
            N = (0, s.useState)(),
            q = N[0],
            U = N[1],
            F = (0, te.y)(A, t),
            Q = F.data,
            _ = F.refetch,
            z = F.isRefetching,
            H = F.isFetchedAfterMount;
          I(z);
          var K =
            0 !== Number(r) &&
            (0, Z.iv)({
              approvedAmount: (null === Q || void 0 === Q ? void 0 : Q.amount) || '0',
              amount: r,
              signedAmount: q ? q.amount : '0',
            });
          K && null !== S && void 0 !== S && S.success && P({});
          var ue = L && x === oe.n.PERMIT,
            de = (0, re.M)({
              usePermit: ue,
              approvedAmount: Q,
              requiresApproval: K,
              assetAddress: t,
              symbol: l,
              decimals: p,
              signatureAmount: r,
              onApprovalTxConfirmed: _,
              onSignTxCompleted: function (e) {
                return U(e);
              },
            }).approval;
          (0, s.useEffect)(
            function () {
              H || _();
            },
            [_, H]
          ),
            (0, s.useEffect)(
              function () {
                var e = 0;
                ue
                  ? (e = Number(d.eB[X.UQ.supplyWithPermit].recommended))
                  : ((e = Number(d.eB[X.UQ.supply].recommended)),
                    K && !S.success && (e += Number(Z.pQ))),
                  E(e.toString());
              },
              [K, S, ue, E]
            );
          var pe = (function () {
            var e = (0, G.Z)(
              V().mark(function e() {
                var n, o, s, a, i;
                return V().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            M(ce(ce({}, O), {}, { loading: !0 })),
                            (o = X.UQ.default),
                            !ue || !q)
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (o = X.UQ.supplyWithPermit),
                            (s = g({
                              signature: q.signature,
                              amount: (0, ee.parseUnits)(r, p).toString(),
                              reserve: t,
                              deadline: q.deadline,
                            })),
                            (e.next = 8),
                            k(s)
                          );
                        case 8:
                          return (s = e.sent), (e.next = 11), W(s);
                        case 11:
                          return (n = e.sent), (e.next = 14), n.wait(1);
                        case 14:
                          e.next = 26;
                          break;
                        case 16:
                          return (
                            (o = X.UQ.supply),
                            (a = b({ amount: (0, ee.parseUnits)(r, p).toString(), reserve: t })),
                            (e.next = 20),
                            k(a)
                          );
                        case 20:
                          return (a = e.sent), (e.next = 23), W(a);
                        case 23:
                          return (n = e.sent), (e.next = 26), n.wait(1);
                        case 26:
                          M({ txHash: n.hash, loading: !1, success: !0 }),
                            j(n.hash, {
                              action: o,
                              txState: 'success',
                              asset: t,
                              amount: r,
                              assetName: l,
                            }),
                            D.invalidateQueries({ queryKey: ae.B.pool }),
                            (e.next = 36);
                          break;
                        case 31:
                          (e.prev = 31),
                            (e.t0 = e.catch(0)),
                            (i = (0, se.WG)(e.t0, se.aD.GAS_ESTIMATION, !1)),
                            R(i),
                            M({ txHash: void 0, loading: !1 });
                        case 36:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 31]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (0, Y.jsx)(
            ie.B,
            ce(
              {
                blocked: u,
                mainTxState: O,
                approvalTxState: S,
                isWrongNetwork: n,
                requiresAmount: !0,
                amount: r,
                symbol: l,
                preparingTransactions: T || !Q,
                actionText: (0, Y.jsx)(o.cC, { id: '3Np5O8', values: { symbol: l } }),
                actionInProgressText: (0, Y.jsx)(o.cC, { id: 'z5Y+p6', values: { symbol: l } }),
                handleApproval: de,
                handleAction: pe,
                requiresApproval: K,
                tryPermit: L,
                sx: a,
              },
              y
            )
          );
        }),
        pe = t(35258),
        me = [
          'tokenIn',
          'amountToSupply',
          'decimals',
          'symbol',
          'tokenWrapperAddress',
          'isWrongNetwork',
          'sx',
        ];
      function ye(e, r) {
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
      function fe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ye(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ye(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var ve,
        he = function (e) {
          var r = e.tokenIn,
            t = e.amountToSupply,
            n = e.decimals,
            a = e.symbol,
            l = e.tokenWrapperAddress,
            u = e.isWrongNetwork,
            p = e.sx,
            m = (0, $.Z)(e, me),
            y = (0, w.Y)(
              (0, B.N)(function (e) {
                return [e.account, e.estimateGasLimit, e.addTransaction, e.currentMarketData];
              })
            ),
            f = (0, c.Z)(y, 4),
            v = f[0],
            h = f[1],
            b = f[2],
            g = f[3],
            x = (0, pe.z)().tokenWrapperService,
            k = (0, s.useState)(),
            j = k[0],
            A = k[1],
            C = (0, i.vR)(),
            S = C.approvalTxState,
            O = C.mainTxState,
            T = C.loadingTxns,
            I = C.setApprovalTxState,
            P = C.setMainTxState,
            M = C.setTxError,
            E = C.setGasLimit,
            R = (0, ne.Z)().sendTx,
            L = (0, J.NL)(),
            W = (0, te.i)({ chainId: g.chainId, token: r, spender: l }),
            D = W.data,
            N = W.isFetching,
            q = W.refetch,
            U = !1;
          void 0 !== D &&
            (U = (0, Z.iv)({
              approvedAmount: D.toString(),
              amount: t,
              signedAmount: j ? j.amount : '0',
            }));
          var F = !1,
            Q = 0;
          (Q = Number(d.eB[X.UQ.supply].recommended)),
            U && !S.success && (Q += Number(Z.pQ)),
            E(Q.toString()),
            U && null !== S && void 0 !== S && S.success && I({});
          var _ = (0, re.M)({
              usePermit: F,
              approvedAmount: {
                amount: (null === D || void 0 === D ? void 0 : D.toString()) || '0',
                spender: l,
                token: r,
                user: v,
              },
              requiresApproval: U,
              assetAddress: r,
              symbol: a,
              decimals: n,
              signatureAmount: t,
              onApprovalTxConfirmed: q,
              onSignTxCompleted: function (e) {
                return A(e);
              },
            }).approval,
            z = (function () {
              var e = (0, G.Z)(
                V().mark(function e() {
                  var o, s, i, u, c;
                  return V().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (e.prev = 0),
                              P(fe(fe({}, O), {}, { loading: !0 })),
                              (s = X.UQ.default),
                              (e.next = 18);
                            break;
                          case 7:
                            return (i = e.sent), (e.next = 10), h(i);
                          case 10:
                            return (i = e.sent), (e.next = 13), R(i);
                          case 13:
                            return (o = e.sent), (e.next = 16), o.wait(1);
                          case 16:
                            e.next = 30;
                            break;
                          case 18:
                            return (
                              (s = X.UQ.supply),
                              (e.next = 21),
                              x.supplyWrappedToken((0, ee.parseUnits)(t, n).toString(), l, v)
                            );
                          case 21:
                            return (u = e.sent), (e.next = 24), h(u);
                          case 24:
                            return (u = e.sent), (e.next = 27), R(u);
                          case 27:
                            return (o = e.sent), (e.next = 30), o.wait(1);
                          case 30:
                            P({ txHash: o.hash, loading: !1, success: !0 }),
                              b(o.hash, {
                                action: s,
                                txState: 'success',
                                asset: r,
                                amount: t,
                                assetName: a,
                              }),
                              L.invalidateQueries({ queryKey: ae.B.pool }),
                              L.invalidateQueries({
                                queryKey: ae.B.approvedAmount(v, r, l, g.chainId),
                              }),
                              (e.next = 41);
                            break;
                          case 36:
                            (e.prev = 36),
                              (e.t0 = e.catch(0)),
                              (c = (0, se.WG)(e.t0, se.aD.GAS_ESTIMATION, !1)),
                              M(c),
                              P({ txHash: void 0, loading: !1 });
                          case 41:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 36]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, Y.jsx)(
            ie.B,
            fe(
              {
                blocked: !1,
                mainTxState: O,
                approvalTxState: S,
                isWrongNetwork: u,
                requiresAmount: !0,
                amount: t,
                symbol: a,
                preparingTransactions: T || N,
                actionText: (0, Y.jsx)(o.cC, { id: '3Np5O8', values: { symbol: a } }),
                actionInProgressText: (0, Y.jsx)(o.cC, { id: 'z5Y+p6', values: { symbol: a } }),
                handleApproval: function () {
                  return _();
                },
                handleAction: z,
                requiresApproval: U,
                tryPermit: F,
                sx: p,
              },
              m
            )
          );
        };
      function be(e, r) {
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
      function ge(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? be(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : be(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      !(function (e) {
        e[(e.CAP_REACHED = 0)] = 'CAP_REACHED';
      })(ve || (ve = {}));
      var xe = function (e) {
          var r = e.user,
            t = (0, w.Y)(function (e) {
              return e.currentMarketData;
            }),
            n = (0, T.P)(),
            o = (0, C.P)(t).walletBalances,
            s = (0, O.ov)(),
            a = s.supplyCap,
            i = s.debtCeiling,
            l = e.poolReserve,
            u = e.userReserve,
            c = n.find(function (r) {
              return r.tokenOut.underlyingAsset === e.underlyingAsset;
            }),
            d = c && '0' !== o[c.tokenIn.underlyingAsset.toLowerCase()].amount,
            p = r.userReservesData.find(function (e) {
              return e.usageAsCollateralEnabledOnUser && e.reserve.id !== l.id;
            }),
            m =
              !r.isInIsolationMode &&
              l.isIsolated &&
              !p &&
              (!u || '0' === u.underlyingBalance || u.usageAsCollateralEnabledOnUser),
            y = ge(
              ge({}, e),
              {},
              {
                isolationModeWarning: m ? (0, Y.jsx)(z.i, { asset: l.symbol }) : null,
                addTokenProps: {
                  address: l.aTokenAddress,
                  symbol: l.iconSymbol,
                  decimals: l.decimals,
                  aToken: !0,
                },
                collateralType: (0, Z.yI)(u, r.totalCollateralUSD, r.isInIsolationMode, i.isMaxed),
                supplyCapWarning: a.determineWarningDisplay({ supplyCap: a }),
                debtCeilingWarning: i.determineWarningDisplay({ debtCeiling: i }),
                wrappedTokenConfig: n.find(function (r) {
                  return r.tokenOut.underlyingAsset === e.underlyingAsset;
                }),
              }
            );
          return d ? (0, Y.jsx)(je, ge({}, y)) : (0, Y.jsx)(ke, ge({}, y));
        },
        ke = s.memo(function (e) {
          var r = e.underlyingAsset,
            t = e.poolReserve,
            n = e.isWrongNetwork,
            a = e.nativeBalance,
            l = e.tokenBalance,
            u = e.isolationModeWarning,
            m = e.addTokenProps,
            y = e.collateralType,
            f = e.supplyCapWarning,
            v = e.debtCeilingWarning,
            b = e.user,
            g = (0, L.HT)().marketReferencePriceInUsd,
            x = (0, i.vR)(),
            j = x.mainTxState,
            C = x.gasLimit,
            S = x.txError,
            O = (0, w.Y)(
              (0, B.N)(function (e) {
                return [
                  e.poolComputed.minRemainingBaseTokenBalance,
                  e.currentMarketData,
                  e.currentNetworkConfig,
                ];
              })
            ),
            T = (0, c.Z)(O, 3),
            Z = T[0],
            F = T[1],
            Q = T[2],
            z = (0, s.useState)(''),
            G = z[0],
            $ = z[1],
            K = r.toLowerCase() === d.hP.toLowerCase(),
            V = K ? a : l,
            X = t.supplyAPY,
            J = t.supplyCap,
            ee = t.totalLiquidity,
            re = t.isFrozen,
            te = t.decimals,
            ne = t.debtCeiling,
            oe = t.isolationModeTotalDebt,
            se = (0, P.I)(
              V,
              {
                supplyCap: J,
                totalLiquidity: ee,
                isFrozen: re,
                decimals: te,
                debtCeiling: ne,
                isolationModeTotalDebt: oe,
              },
              r,
              Z
            ),
            ae = new h.O(G).multipliedBy(t.formattedPriceInMarketReferenceCurrency),
            ie = ae.multipliedBy(g).shiftedBy(-p.$3),
            le = G === se,
            ue = (0, M.$m)(b, t, ae),
            ce = {
              amountToSupply: G,
              isWrongNetwork: n,
              poolAddress: K ? d.hP : t.underlyingAsset,
              symbol: K ? Q.baseAssetSymbol : t.symbol,
              blocked: !1,
              decimals: t.decimals,
              isWrappedBaseAsset: t.isWrappedBaseAsset,
            };
          return j.success
            ? (0, Y.jsx)(q.R, {
                action: (0, Y.jsx)(o.cC, { id: 'fwjWSI' }),
                amount: G,
                symbol: K ? Q.baseAssetSymbol : t.symbol,
                addToken: m,
              })
            : (0, Y.jsxs)(Y.Fragment, {
                children: [
                  u,
                  f,
                  v,
                  'AMPL' === t.symbol &&
                    (0, Y.jsx)(k.v, {
                      sx: { mt: '16px', mb: '40px' },
                      severity: 'warning',
                      children: (0, Y.jsx)(A.v, {}),
                    }),
                  'AAVE' === t.symbol && E.cr.staking(F) && (0, Y.jsx)(_, {}),
                  'SNX' === t.symbol && '0' !== se && (0, Y.jsx)(H, {}),
                  (0, Y.jsx)(D.W, {
                    value: G,
                    onChange: function (e) {
                      if ('-1' === e) $(se);
                      else {
                        var r = (0, R.$w)(e, t.decimals);
                        $(r);
                      }
                    },
                    usdValue: ie.toString(10),
                    symbol: K ? Q.baseAssetSymbol : t.symbol,
                    assets: [
                      {
                        balance: se,
                        symbol: K ? Q.baseAssetSymbol : t.symbol,
                        iconSymbol: K ? Q.baseAssetSymbol : t.iconSymbol,
                      },
                    ],
                    capType: W.R.supplyCap,
                    isMaxSelected: le,
                    disabled: j.loading,
                    maxValue: se,
                    balanceText: (0, Y.jsx)(o.cC, { id: 'JoMQnI' }),
                    event: {
                      eventName: I.vh.MAX_INPUT_SELECTION,
                      eventParams: { asset: t.underlyingAsset, assetName: t.name },
                    },
                  }),
                  (0, Y.jsxs)(U.m6, {
                    gasLimit: C,
                    skipLoad: !0,
                    disabled: 0 === Number(G),
                    children: [
                      (0, Y.jsx)(U.oD, {
                        description: (0, Y.jsx)(o.cC, { id: 'qB4kPi' }),
                        value: X,
                        percent: !0,
                      }),
                      (0, Y.jsx)(U.aE, { incentives: t.aIncentivesData, symbol: t.symbol }),
                      (0, Y.jsx)(U.Bx, { collateralType: y }),
                      (0, Y.jsx)(U.jz, {
                        visibleHfChange: !!G,
                        healthFactor: b ? b.healthFactor : '-1',
                        futureHealthFactor: ue.toString(),
                      }),
                    ],
                  }),
                  S && (0, Y.jsx)(N.Q, { txError: S }),
                  (0, Y.jsx)(de, ge({}, ce)),
                ],
              });
        }),
        je = function (e) {
          var r = e.poolReserve,
            t = e.wrappedTokenConfig,
            n = e.isolationModeWarning,
            a = e.supplyCapWarning,
            l = e.debtCeilingWarning,
            u = e.addTokenProps,
            c = e.collateralType,
            d = e.isWrongNetwork,
            y = e.user,
            f = (0, L.HT)().marketReferencePriceInUsd,
            v = (0, w.Y)(function (e) {
              return e.currentMarketData;
            }),
            b = (0, i.vR)(),
            g = b.mainTxState,
            x = b.gasLimit,
            k = b.txError,
            j = (0, C.P)(v).walletBalances,
            A = (0, w.Y)(function (e) {
              return e.poolComputed.minRemainingBaseTokenBalance;
            });
          if (!t) throw new Error('Wrapped token config is not defined');
          var O = j[t.tokenIn.underlyingAsset].amount,
            T = j[t.tokenOut.underlyingAsset].amount,
            E = [
              {
                balance: O,
                symbol: t.tokenIn.symbol,
                iconSymbol: t.tokenIn.symbol,
                address: t.tokenIn.underlyingAsset,
              },
            ];
          '0' !== T &&
            E.unshift({
              balance: T,
              symbol: t.tokenOut.symbol,
              iconSymbol: t.tokenOut.symbol,
              address: t.tokenOut.underlyingAsset,
            });
          var B = (0, s.useState)(E[0]),
            Z = B[0],
            F = B[1],
            Q = (0, s.useState)(''),
            _ = Q[0],
            z = Q[1],
            H = (0, s.useState)('0'),
            G = H[0],
            $ = H[1],
            K = (0, S.E)('1', r.decimals, t.tokenWrapperAddress).data;
          (0, s.useEffect)(
            function () {
              if (K) {
                var e = (0, m.hE)(O).multipliedBy(K).toString();
                $(e);
              }
            },
            [K, O]
          );
          var V = r.supplyCap,
            X = r.totalLiquidity,
            J = r.isFrozen,
            ee = r.decimals,
            re = r.debtCeiling,
            te = r.isolationModeTotalDebt,
            ne = (0, P.I)(
              T,
              {
                supplyCap: V,
                totalLiquidity: X,
                isFrozen: J,
                decimals: ee,
                debtCeiling: re,
                isolationModeTotalDebt: te,
              },
              r.underlyingAsset,
              A
            ),
            oe = (0, P.x)(r.supplyCap, r.totalLiquidity),
            se = O;
          (0, h.O)(G).isGreaterThan(oe) &&
            ((se = (0, h.O)(oe)
              .dividedBy(K || '0')
              .toString()),
            (se = (0, R.$w)(se, r.decimals)));
          var ae = !1;
          t && (ae = Z.address === t.tokenIn.underlyingAsset);
          var ie = new h.O(_).multipliedBy(
              ae
                ? t.tokenIn.formattedPriceInMarketReferenceCurrency
                : r.formattedPriceInMarketReferenceCurrency
            ),
            le = ie.multipliedBy(f).shiftedBy(-p.$3),
            ue = _ === ne,
            ce = (0, M.$m)(y, r, ie);
          if (g.success) {
            var pe = ae
              ? (0, h.O)(_)
                  .dividedBy(K || '1')
                  .toString()
              : _;
            return (0, Y.jsx)(q.R, {
              action: (0, Y.jsx)(o.cC, { id: 'fwjWSI' }),
              amount: pe,
              symbol: r.symbol,
              addToken: u,
            });
          }
          return (0, Y.jsxs)(Y.Fragment, {
            children: [
              n,
              a,
              l,
              (0, Y.jsx)(D.W, {
                value: _,
                onChange: function (e) {
                  if ('-1' === e) z(ae ? se : ne);
                  else {
                    var t = (0, R.$w)(e, r.decimals);
                    z(t);
                  }
                },
                usdValue: le.toString(10),
                symbol: Z.symbol,
                assets: E,
                onSelect: F,
                capType: W.R.supplyCap,
                isMaxSelected: ue,
                disabled: g.loading,
                balanceText: (0, Y.jsx)(o.cC, { id: 'JoMQnI' }),
                event: {
                  eventName: I.vh.MAX_INPUT_SELECTION,
                  eventParams: { asset: r.underlyingAsset, assetName: r.name },
                },
                exchangeRateComponent:
                  ae &&
                  (0, Y.jsx)(Ae, {
                    supplyAmount: _,
                    decimals: r.decimals,
                    tokenWrapperAddress: t.tokenWrapperAddress,
                    tokenInSymbol: t.tokenIn.symbol,
                    tokenOutSymbol: t.tokenOut.symbol,
                  }),
              }),
              (0, Y.jsxs)(U.m6, {
                gasLimit: x,
                skipLoad: !0,
                disabled: 0 === Number(_),
                children: [
                  (0, Y.jsx)(U.oD, {
                    description: (0, Y.jsx)(o.cC, { id: 'qB4kPi' }),
                    value: r.supplyAPY,
                    percent: !0,
                  }),
                  (0, Y.jsx)(U.aE, { incentives: r.aIncentivesData, symbol: r.symbol }),
                  (0, Y.jsx)(U.Bx, { collateralType: c }),
                  (0, Y.jsx)(U.jz, {
                    visibleHfChange: !!_,
                    healthFactor: y ? y.healthFactor : '-1',
                    futureHealthFactor: ce.toString(),
                  }),
                ],
              }),
              k && (0, Y.jsx)(N.Q, { txError: k }),
              ae
                ? (0, Y.jsx)(he, {
                    tokenWrapperAddress: t.tokenWrapperAddress,
                    tokenIn: t.tokenIn.underlyingAsset,
                    amountToSupply: _,
                    decimals: 18,
                    symbol: t.tokenIn.symbol,
                    isWrongNetwork: d,
                  })
                : (0, Y.jsx)(de, {
                    isWrongNetwork: d,
                    amountToSupply: _,
                    poolAddress: r.underlyingAsset,
                    symbol: r.symbol,
                    blocked: !1,
                    decimals: r.decimals,
                    isWrappedBaseAsset: !1,
                  }),
            ],
          });
        },
        Ae = function (e) {
          var r = e.supplyAmount,
            t = e.decimals,
            n = e.tokenInSymbol,
            o = e.tokenOutSymbol,
            s = e.tokenWrapperAddress,
            a = (0, S.v)(r, t, s),
            i = a.isFetching,
            l = a.data;
          return (0, Y.jsxs)(y.Z, {
            direction: 'row',
            alignItems: 'center',
            gap: 1,
            children: [
              (0, Y.jsx)(f.Z, { variant: 'caption', children: 'Supply amount' }),
              (0, Y.jsx)(x.T1, { sx: { fontSize: '16px' }, symbol: 'sdai' }),
              i
                ? (0, Y.jsx)(v.Z, { variant: 'rectangular', width: 80, height: 14 })
                : (0, Y.jsxs)(Y.Fragment, {
                    children: [
                      (0, Y.jsx)(g.B, {
                        value: l || '',
                        variant: 'subheader2',
                        color: 'text.primary',
                        visibleDecimals: 2,
                      }),
                      (0, Y.jsx)(f.Z, {
                        variant: 'subheader2',
                        color: 'text.secondary',
                        children: 'sDAI',
                      }),
                    ],
                  }),
              (0, Y.jsx)(j.G, {
                children: (0, Y.jsx)(b.C, {
                  decimals: t,
                  tokenWrapperAddress: s,
                  tokenInSymbol: n,
                  tokenOutSymbol: o,
                }),
              }),
            ],
          });
        };
      function Ce(e, r) {
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
      function Se(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Ce(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : Ce(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var Oe = function () {
        var e = (0, i.vR)(),
          r = e.type,
          t = e.close,
          n = e.args;
        return (0, Y.jsx)(l.P, {
          open: r === i.w8.Supply,
          setOpen: t,
          children: (0, Y.jsx)(u.A, {
            action: 'supply',
            title: (0, Y.jsx)(o.cC, { id: 'bwSQI0' }),
            underlyingAsset: n.underlyingAsset,
            children: function (e) {
              return (0, Y.jsx)(a.X, {
                children: function (r) {
                  return (0, Y.jsx)(xe, Se(Se({}, e), {}, { user: r }));
                },
              });
            },
          }),
        });
      };
    },
    13918: function (e, r, t) {
      t.d(r, {
        i: function () {
          return l;
        },
      });
      var n = t(57499),
        o = t(15861),
        s = t(38577),
        a = t(35783),
        i = t(85893),
        l = function (e) {
          var r = e.asset,
            t = e.severity;
          return (0, i.jsxs)(a.v, {
            severity: t || 'info',
            sx: { mb: 3 },
            children: [
              (0, i.jsx)(o.Z, {
                variant: 'subheader1',
                mb: 0.5,
                children: (0, i.jsx)(n.cC, { id: '94OHPx' }),
              }),
              (0, i.jsx)(o.Z, {
                children: (0, i.jsx)(n.cC, {
                  id: 'igkfR1',
                  values: { 0: r || '' },
                  components: {
                    0: (0, i.jsx)(s.rU, {
                      href: 'https://docs.aave.com/faq/aave-v3-features#isolation-mode',
                    }),
                  },
                }),
              }),
            ],
          });
        };
    },
    66510: function (e, r, t) {
      t.d(r, {
        E: function () {
          return i;
        },
        v: function () {
          return l;
        },
      });
      var n = t(78551),
        o = t(2593),
        s = t(56371),
        a = t(35258),
        i = function (e, r, t) {
          var i = (0, a.z)().tokenWrapperService;
          return (0, n.a)({
            queryFn: function () {
              return '' === e || '0' === e
                ? Promise.resolve(o.O$.from(0))
                : i.getTokenInForTokenOut((0, s.parseUnits)(e, r).toString(), t);
            },
            queryKey: ['tokenInForTokenOut', t, e],
            select: function (e) {
              return (0, s.formatUnits)(e.toString(), r);
            },
          });
        },
        l = function (e, r, t) {
          var i = (0, a.z)().tokenWrapperService;
          return (0, n.a)({
            queryFn: function () {
              return '' === e || '0' === e
                ? Promise.resolve(o.O$.from(0))
                : i.getTokenOutForTokenIn((0, s.parseUnits)(e, r).toString(), t);
            },
            queryKey: ['tokenOutForTokenIn', t, e],
            select: function (e) {
              return (0, s.formatUnits)(e.toString(), r);
            },
          });
        };
    },
    53097: function (e, r, t) {
      t.d(r, {
        Q: function () {
          return s;
        },
      });
      var n = t(72005),
        o = t(3062);
      function s(e) {
        var r = (0, o.Y)(function (e) {
            return e.currentChainId;
          }),
          t = e || r;
        return { isWrongNetwork: (0, n.Z)().chainId !== t, requiredChainId: t };
      }
    },
    43666: function (e, r, t) {
      t.d(r, {
        P: function () {
          return d;
        },
      });
      var n = t(59499),
        o = t(1279),
        s = t(3439),
        a = t(3062),
        i = t(25074),
        l = t(84314),
        u = t(60377),
        c = (0, n.Z)({}, i.el.proto_mainnet_v3, [
          {
            tokenIn: s.ou.DAI.UNDERLYING.toLowerCase(),
            tokenOut: s.ou.sDAI.UNDERLYING.toLowerCase(),
            tokenWrapperContractAddress: s.zq,
          },
        ]),
        d = function () {
          var e,
            r = (0, u.HT)(),
            t = r.marketReferencePriceInUsd,
            n = r.marketReferenceCurrencyDecimals,
            s = r.reserves,
            i = (0, a.Y)(function (e) {
              return e.currentMarket;
            });
          if (!s || 0 === s.length) return [];
          return (null !== (e = c[i]) && void 0 !== e ? e : []).map(function (e) {
            var r = s.find(function (r) {
                return r.underlyingAsset === e.tokenIn;
              }),
              a = s.find(function (r) {
                return r.underlyingAsset === e.tokenOut;
              });
            if (!r || !a) throw new Error('wrapped token reserves not found');
            var i = (0, o.Fv)(r.priceInMarketReferenceCurrency, n),
              u = (0, o.Fv)(a.priceInMarketReferenceCurrency, n);
            return {
              tokenIn: {
                symbol: r.symbol,
                underlyingAsset: r.underlyingAsset,
                decimals: r.decimals,
                priceInUSD: (0, l.N4)(1, i, t).toString(),
                formattedPriceInMarketReferenceCurrency: i,
              },
              tokenOut: {
                symbol: a.symbol,
                underlyingAsset: a.underlyingAsset,
                decimals: a.decimals,
                priceInUSD: (0, l.N4)(1, u, t).toString(),
                formattedPriceInMarketReferenceCurrency: u,
              },
              tokenWrapperAddress: e.tokenWrapperContractAddress,
            };
          });
        };
    },
    56705: function (e, r, t) {
      t.d(r, {
        I: function () {
          return l;
        },
        x: function () {
          return i;
        },
      });
      var n = t(80854),
        o = t(1279),
        s = t(70794),
        a = t(84314);
      function i(e, r) {
        return '0' === e ? new s.O(-1) : new s.O(e).minus(r);
      }
      function l(e, r, t, l) {
        if (r.isFrozen) return '0';
        var u = (0, o.hE)(e);
        return (
          u.gt(0) && t.toLowerCase() === n.hP.toLowerCase() && (u = u.minus(l)),
          '0' !== r.supplyCap && (u = s.O.min(u, i(r.supplyCap, r.totalLiquidity))),
          u.lte(0) ? '0' : (0, a.$w)(u.toString(10), r.decimals)
        );
      }
    },
    58730: function (e, r, t) {
      t.d(r, {
        $m: function () {
          return u;
        },
        DX: function () {
          return l;
        },
        _S: function () {
          return a;
        },
        bU: function () {
          return i;
        },
      });
      var n = t(20854),
        o = t(1279),
        s = t(70794);
      function a(e) {
        var r,
          t = e.fromAmount,
          s = e.fromAssetData,
          a = e.fromAssetUserData,
          i = e.toAmountAfterSlippage,
          l = e.toAssetData,
          u = e.user,
          c = s.eModes.find(function (e) {
            return e.id === u.userEmodeCategoryId;
          }),
          d = l.eModes.find(function (e) {
            return e.id === u.userEmodeCategoryId;
          }),
          p =
            u.isInEmode && c
              ? c.eMode.formattedLiquidationThreshold
              : s.formattedReserveLiquidationThreshold,
          m = '0';
        a.usageAsCollateralEnabledOnUser &&
          '0' !== s.reserveLiquidationThreshold &&
          (m = (0, n.L1)({
            collateralBalanceMarketReferenceCurrency: (0, o.hE)(t).multipliedBy(
              s.formattedPriceInMarketReferenceCurrency
            ),
            borrowBalanceMarketReferenceCurrency: u.totalBorrowsMarketReferenceCurrency,
            currentLiquidationThreshold: p,
          }).toString());
        var y = '0';
        return (
          ((!u.isInIsolationMode && !l.isIsolated) ||
            (u.isInIsolationMode &&
              (null === (r = u.isolatedReserve) || void 0 === r ? void 0 : r.underlyingAsset) ===
                l.underlyingAsset)) &&
            (y = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, o.hE)(i).multipliedBy(
                l.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: u.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold:
                u.isInEmode && d
                  ? d.eMode.formattedLiquidationThreshold
                  : l.formattedReserveLiquidationThreshold,
            }).toString()),
          {
            hfEffectOfFromAmount: m,
            hfAfterSwap:
              '-1' === u.healthFactor
                ? (0, o.hE)('-1')
                : (0, o.hE)(u.healthFactor).plus(y).minus(m),
          }
        );
      }
      var i = function (e) {
          var r = e.user,
            t = e.amountToReceiveAfterSwap,
            a = e.amountToSwap,
            i = e.fromAssetData,
            l = e.toAssetData,
            u = e.repayWithUserReserve,
            c = e.debt,
            d = i.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            p =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : i.formattedReserveLiquidationThreshold,
            m = '0';
          null !== u &&
            void 0 !== u &&
            u.usageAsCollateralEnabledOnUser &&
            i.usageAsCollateralEnabled &&
            (m = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, o.hE)(a).multipliedBy(
                i.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold: p,
            }).toString());
          var y = (0, o.hE)(s.O.min(t, c)).multipliedBy(l.priceInUSD).toString(10),
            f = (0, o.hE)(r.totalBorrowsUSD).minus(y);
          f = s.O.max(f, (0, o.hE)('0'));
          var v = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: r.totalCollateralUSD,
              borrowBalanceMarketReferenceCurrency: f.toString(10),
              currentLiquidationThreshold: r.currentLiquidationThreshold,
            }),
            h =
              '0' !== i.reserveLiquidationThreshold &&
              null !== u &&
              void 0 !== u &&
              u.usageAsCollateralEnabledOnUser
                ? (0, n.L1)({
                    collateralBalanceMarketReferenceCurrency: (0, o.hE)(a).multipliedBy(
                      i.priceInUSD
                    ),
                    borrowBalanceMarketReferenceCurrency: f.toString(10),
                    currentLiquidationThreshold: i.formattedReserveLiquidationThreshold,
                  }).toString()
                : '0',
            b = v.eq(-1) ? v : v.minus(h);
          return {
            hfEffectOfFromAmount: (0, o.hE)(m),
            hfAfterSwap: b.isLessThan(0) && !b.eq(-1) ? 0 : b,
          };
        },
        l = function (e) {
          var r = e.user,
            t = e.userReserve,
            a = e.poolReserve,
            i = e.withdrawAmount,
            l = (0, o.hE)(r.totalCollateralMarketReferenceCurrency),
            u = r.currentLiquidationThreshold,
            c = (0, o.hE)(r.healthFactor),
            d = a.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            p =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : a.formattedReserveLiquidationThreshold;
          if (
            null !== t &&
            void 0 !== t &&
            t.usageAsCollateralEnabledOnUser &&
            '0' !== a.reserveLiquidationThreshold
          ) {
            var m = (0, o.hE)(i).multipliedBy(a.formattedPriceInMarketReferenceCurrency);
            (l = l.minus(m)),
              (u = (0, o.hE)(r.totalCollateralMarketReferenceCurrency)
                .multipliedBy((0, o.hE)(r.currentLiquidationThreshold))
                .minus((0, o.hE)(m).multipliedBy(p))
                .div(l)
                .toFixed(4, s.O.ROUND_DOWN)),
              (c = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: l,
                borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
                currentLiquidationThreshold: u,
              }));
          }
          return c;
        },
        u = function (e, r, t) {
          var s,
            a = e ? (0, o.hE)(e.healthFactor) : '-1',
            i = e ? (0, o.hE)(e.totalCollateralMarketReferenceCurrency).plus(t) : '-1',
            l = e
              ? (0, o.hE)(e.totalCollateralMarketReferenceCurrency)
                  .multipliedBy(e.currentLiquidationThreshold)
                  .plus(t.multipliedBy(r.formattedReserveLiquidationThreshold))
                  .dividedBy(i)
              : '-1';
          return (
            e &&
              ((!e.isInIsolationMode && !r.isIsolated) ||
                (e.isInIsolationMode &&
                  (null === (s = e.isolatedReserve) || void 0 === s
                    ? void 0
                    : s.underlyingAsset) === r.underlyingAsset)) &&
              (a = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: i,
                borrowBalanceMarketReferenceCurrency: (0, o.hE)(
                  e.totalBorrowsMarketReferenceCurrency
                ),
                currentLiquidationThreshold: l,
              })),
            a
          );
        };
    },
  },
]);
