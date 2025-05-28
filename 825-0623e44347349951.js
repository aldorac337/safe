try {
  let e =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    t = new e.Error().stack;
  t &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[t] = '90753326-942e-4cdd-88ac-f861c78331c1'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-90753326-942e-4cdd-88ac-f861c78331c1'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [825],
  {
    50825: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(78286),
        a = r(58258),
        s = r(54655),
        i = r(73478),
        o = (0, a.memo)(
          (0, a.forwardRef)((e, t) => {
            let {
                mode: r = 'external',
                href: o,
                buttonProps: l,
                prefetch: d = !0,
                className: u,
              } = e,
              c = (0, a.useMemo)(() => ('external' === r ? s.dLw : i.h), [r]);
            return (0, n.tZ)(c, {
              href: o,
              ref: t,
              prefetch: d,
              className: u,
              children: (0, n.tZ)(s.zxk, {
                iconRight: 'external' === r ? 'ArrowPlain20' : void 0,
                iconRightProps:
                  'external' === r ? { style: { transform: 'rotate(-45deg)' } } : void 0,
                ...l,
              }),
            });
          })
        );
    },
    73478: function (e, t, r) {
      r.d(t, {
        h: function () {
          return u;
        },
      });
      var n = r(78286),
        a = r(58258),
        s = r(17781),
        i = r(85957),
        o = r(54655),
        l = r(54899);
      let d = (0, r(38819).Z)('div', { target: 'e11i0goa0' })(
        'position:relative;background-color:',
        (e) => {
          let { theme: t } = e;
          return t.colors.constant.color.brand;
        },
        ';height:2px;width:100vw;transform:scaleX(0);transform-origin:left;border-radius:8px;animation:growNavigationProgressBar 5s ease-in-out forwards;@keyframes growNavigationProgressBar{0%{transform:scaleX(0);}15%{transform:scaleX(0.3);}20%{transform:scaleX(0.35);}60%{transform:scaleX(0.77);}65%{transform:scaleX(0.8);}90%{transform:scaleX(1);opacity:1;}99%{transform:scaleX(1);opacity:1;}100%{transform:scaleX(1);opacity:0;}}'
      );
      var u = (0, a.memo)((e) => {
        let { href: t, ...r } = e,
          [u, c] = (0, a.useState)(!1),
          { navigateTo: p } = (0, l.R)(),
          f = (0, i.usePathname)(),
          h = (0, a.useCallback)(
            (e) => {
              e.metaKey || (e.preventDefault(), p(t.toString(), () => c(!0)));
            },
            [t, p]
          );
        return (
          (0, a.useEffect)(() => {
            u && c(!1);
          }, [f]),
          (0, n.BX)(n.HY, {
            children: [
              u &&
                (0, n.tZ)(o.Kli, {
                  top: 0,
                  left: 0,
                  portalContainerId: 'fixed',
                  children: (0, n.tZ)(d, {}),
                }),
              (0, n.tZ)(s.default, { ...r, href: t, onClick: h }),
            ],
          })
        );
      });
    },
    62788: function (e, t, r) {
      r.d(t, {
        J1: function () {
          return i;
        },
      });
      var n = r(78286),
        a = r(58258);
      let s = (0, a.createContext)(null),
        i = () => {
          let e = (0, a.useContext)(s);
          if (!e)
            throw Error(
              'useServiceUnavailable must be called inside a ServiceUnavailableContextProvider'
            );
          return e;
        };
      t.ZP = (0, a.memo)((e) => {
        let { children: t } = e,
          [r, i] = (0, a.useState)(!1),
          [o, l] = (0, a.useState)(!1),
          d = (0, a.useCallback)(() => {
            o || (i(!0), l(!0));
          }, [o]),
          u = (0, a.useMemo)(
            () => ({
              isServiceUnavailableDialogOpen: r,
              signalServiceUnavailable: d,
              closeServiceUnavailableDialog: () => i(!1),
            }),
            [d, r]
          );
        return (0, n.tZ)(s.Provider, { value: u, children: t });
      });
    },
    22683: function (e, t, r) {
      r.d(t, {
        ZP: function () {
          return _;
        },
        N: function () {
          return E;
        },
      });
      var n = r(78286),
        a = r(58258),
        s = r(85957),
        i = r(89991);
      let o = [];
      var l = r(94282),
        d = r(40252),
        u = r(12556),
        c = r(35047),
        p = r(81239),
        f = r(62788),
        h = r(55412),
        v = r(3245),
        m = r(95413);
      function g() {
        let e = (0, h._)([
          '\n  query GetAllUserPositions($chainId: Int!, $userAddress: String!) {\n    marketPositions(\n      where: {\n        chainId_in: [$chainId]\n        userAddress_in: [$userAddress]\n        collateral_gte: 0\n      }\n    ) {\n      items {\n        id\n        state {\n          id\n          borrowShares\n          collateral\n        }\n        market {\n          id\n          uniqueKey\n          collateralAsset {\n            id\n            address\n          }\n          loanAsset {\n            id\n            address\n          }\n        }\n      }\n    }\n    vaultPositions(\n      where: {\n        chainId_in: [$chainId]\n        shares_gte: 0\n        userAddress_in: [$userAddress]\n      }\n    ) {\n      items {\n        id\n        state {\n          id\n          assets\n        }\n        vault {\n          id\n          address\n          asset {\n            id\n            address\n          }\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      let y = {},
        w = (0, v.Ps)(g());
      var A = r(243);
      let b = () => {
        var e, t;
        let { targetChainId: r, account: n } = (0, i.Z_)(),
          { signalServiceUnavailable: s } = (0, f.J1)(),
          [o, h, v, , g] = (0, u.$X)(),
          [b, C, k, , I] = (0, u.$X)(),
          [E, _, T, , S] = (0, u.$X)(),
          [B, P, L] = (0, u.$X)(),
          { wNative: N } = (0, d.getChainAddresses)(r),
          x = (0, a.useCallback)(
            function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              let a = t.map((e) => (0, d.getUnwrappedToken)(e, r)).filter(c.isDefined);
              _(...t, ...a);
            },
            [_, r]
          ),
          M = (0, a.useCallback)(
            function () {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
              C(...t), x(...t);
            },
            [C, x]
          ),
          O = (0, a.useCallback)(
            (e) => {
              e && (h(...e.marketIds), x(...e.tokens), M(...e.vaults));
            },
            [h, x, M]
          );
        (0, a.useEffect)(() => {
          let { bundler3: e, generalAdapter1: t } = (0, d.getChainAddresses)(r).bundler3;
          return (
            P(t, e),
            () => {
              L(t, e), g(), I(), S();
            }
          );
        }, [r, g, I, S, P, L]),
          (0, a.useEffect)(() => {
            let e = n.address;
            if (null != e)
              return (
                P(e),
                () => {
                  L(e);
                }
              );
          }, [n.address, P, L]);
        let U = (function (e) {
            let t = { ...y, ...e };
            return m.aM(w, t);
          })({
            variables: { chainId: r, userAddress: null == n ? void 0 : n.address },
            skip: !(null == n ? void 0 : n.address),
          }),
          W = (0, A.I)(U);
        (0, a.useEffect)(() => {
          (null == W ? void 0 : W.isNotFound) || !U.error || s();
        }, [null == W ? void 0 : W.isNotFound, U.error, s]),
          (0, a.useEffect)(() => {
            (null == n ? void 0 : n.address) && N && x(N);
          }, [null == n ? void 0 : n.address, x, N]),
          (0, a.useEffect)(() => {
            var e;
            if (
              !(null == n ? void 0 : n.address) ||
              !(null === (e = U.data) || void 0 === e ? void 0 : e.marketPositions.items)
            )
              return;
            let { marketIds: t, tokenAddresses: r } = U.data.marketPositions.items.reduce(
              (e, t) => (
                t.state &&
                  (t.state.collateral > 0n || t.state.borrowShares > 0n) &&
                  (e.marketIds.push(t.market.uniqueKey),
                  t.market.collateralAsset &&
                    e.tokenAddresses.push(t.market.collateralAsset.address),
                  t.market.loanAsset && e.tokenAddresses.push(t.market.loanAsset.address)),
                e
              ),
              { marketIds: [], tokenAddresses: [] }
            );
            h(...t), x(...r);
          }, [
            null == n ? void 0 : n.address,
            null === (e = U.data) || void 0 === e ? void 0 : e.marketPositions.items,
            h,
            x,
          ]),
          (0, a.useEffect)(() => {
            var e;
            if (
              !(null == n ? void 0 : n.address) ||
              !(null === (e = U.data) || void 0 === e ? void 0 : e.vaultPositions.items)
            )
              return;
            let { vaultAddresses: t, tokenAddresses: r } = U.data.vaultPositions.items.reduce(
              (e, t) => {
                var r;
                return (
                  (null === (r = t.state) || void 0 === r ? void 0 : r.assets) &&
                    t.state.assets > 0n &&
                    (e.vaultAddresses.push(t.vault.address),
                    e.tokenAddresses.push(t.vault.asset.address)),
                  e
                );
              },
              { vaultAddresses: [], tokenAddresses: [] }
            );
            M(...t), x(...r);
          }, [
            null == n ? void 0 : n.address,
            null === (t = U.data) || void 0 === t ? void 0 : t.vaultPositions.items,
            M,
            x,
          ]);
        let R = (0, a.useMemo)(() => {
            let e = [];
            return (
              E.forEach((t) => {
                let n = (0, d.getUnwrappedToken)(t, r);
                n && e.push(n);
              }),
              new Set([...E, ...e])
            );
          }, [E, r]),
          { data: Z, error: F } = (0, l.useBlock)({
            chainId: r,
            watch: {
              enabled: null == n ? void 0 : n.isConnected,
              blockTag: 'latest',
              includeTransactions: !1,
              poll: !0,
              pollingInterval: 5e3,
              syncConnectedChain: !0,
            },
            query: { enabled: null == n ? void 0 : n.isConnected, staleTime: 1 / 0 },
          }),
          {
            data: X,
            error: D,
            isFetching: H,
            isFetchingAny: $,
            isPending: q,
          } = (0, p.c)({
            query: { enabled: null == n ? void 0 : n.isConnected },
            chainId: r,
            marketIds: o,
            vaults: b,
            tokens: R,
            users: [...B, ...b],
            block: Z,
            deployless: !1,
          }),
          K = (0, a.useRef)(X);
        return (
          $ || (K.current = X),
          {
            data: K.current,
            error: D,
            blockError: F,
            isPending: q,
            isFetching: H,
            isFetchingAny: (q && !F) || $,
            config: {
              marketIds: o,
              vaults: b,
              users: B,
              addUsers: P,
              removeUsers: L,
              addMarketIds: h,
              removeMarketIds: v,
              addVaults: M,
              removeVaults: k,
              tokens: E,
              addTokens: x,
              removeTokens: T,
              addToSimulationState: O,
            },
          }
        );
      };
      var C = r(96278),
        k = r(57054);
      let I = (0, a.createContext)(null),
        E = () => {
          let e = (0, a.useContext)(I);
          if (!e)
            throw Error('useSimulationContext must be called inside a SimulationContextProvider');
          return e;
        };
      var _ = (0, a.memo)((e) => {
        let { children: t } = e,
          { data: r, config: l, ...d } = b(),
          { account: u } = (0, i.Z_)(),
          c = (0, s.useRouter)(),
          [p, f] = (0, a.useState)([void 0, void 0]),
          [h, v, m] = (function () {
            let [e, t] = (0, a.useState)([]);
            return [
              e,
              (0, a.useCallback)((e, r) => {
                t((t) => {
                  let n = t.find((t) => t.id === e),
                    a = null == r ? void 0 : r(n);
                  return void 0 === a
                    ? t.filter((t) => t.id !== e)
                    : void 0 === n
                      ? [...t, a]
                      : t.map((t) => (t.id === e ? a : t));
                });
              }, []),
              (0, a.useCallback)(() => {
                t(o);
              }, []),
            ];
          })(),
          g = (0, C.B)();
        (0, a.useEffect)(() => {
          f(
            (0, k.t)({
              operations: h,
              initialState: r,
              bundlerConfiguration: g,
              userAddress: u.address,
              isContract: u.isContract,
            })
          );
        }, [u.address, u.isContract, g, r, h, m, c]);
        let [y, w] = p;
        return (0, n.tZ)(I.Provider, {
          value: {
            ...d,
            config: l,
            operations: h,
            steps: y,
            simulationError: w,
            resetOperations: m,
            updateOperation: v,
            bundlerConfiguration: g,
          },
          children: t,
        });
      });
    },
    96278: function (e, t, r) {
      r.d(t, {
        B: function () {
          return v;
        },
      });
      var n = r(58258),
        a = r(40252),
        s = r(12556),
        i = r(35047),
        o = r(62788),
        l = r(89991),
        d = r(55412),
        u = r(3245),
        c = r(95413);
      function p() {
        let e = (0, d._)([
          '\n  query GetBundlerConfiguration(\n    $chainId: Int!\n    $maxPublicAllocatorFeeUsd: Float!\n    $whitelisted: Boolean!\n  ) {\n    markets(where: { chainId_in: [$chainId] }, first: 1000) {\n      items {\n        id\n        uniqueKey\n        targetBorrowUtilization\n        targetWithdrawUtilization\n      }\n    }\n    assets(where: { tags_in: ["simple-permit", "dai-specific-permit"] }) {\n      items {\n        id\n        address\n      }\n    }\n    vaults(\n      where: {\n        publicAllocatorFeeUsd_lte: $maxPublicAllocatorFeeUsd\n        chainId_in: [$chainId]\n        whitelisted: $whitelisted\n      }\n      first: 1000\n    ) {\n      items {\n        id\n        address\n        publicAllocatorConfig {\n          fee\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      let f = {},
        h = (0, u.Ps)(p()),
        v = () => {
          let { targetChainId: e } = (0, l.Z_)(),
            { signalServiceUnavailable: t } = (0, o.J1)(),
            { data: r, error: d } = (function (e) {
              let t = { ...f, ...e };
              return c.aM(h, t);
            })({ variables: { chainId: e, maxPublicAllocatorFeeUsd: 10, whitelisted: !0 } });
          return (
            (0, n.useEffect)(() => {
              d && t();
            }, [d, t]),
            (0, n.useMemo)(() => {
              var t, n, o, l, d, u, c, p;
              return {
                withSimplePermit: new Set([
                  ...(null !== (d = s.FW.getAssetsWithSimplePermit(e)) && void 0 !== d ? d : []),
                  ...(null !==
                    (u =
                      null == r
                        ? void 0
                        : null === (t = r.assets.items) || void 0 === t
                          ? void 0
                          : t.map((e) => {
                              let { address: t } = e;
                              return t;
                            })) && void 0 !== u
                    ? u
                    : []),
                ]),
                publicAllocatorOptions: {
                  enabled: null != r,
                  reallocatableVaults:
                    null == r
                      ? void 0
                      : null === (n = r.vaults.items) || void 0 === n
                        ? void 0
                        : n.map((e) => {
                            let { address: t } = e;
                            return t;
                          }),
                  supplyTargetUtilization: (0, i.fromEntries)(
                    null !==
                      (c =
                        null == r
                          ? void 0
                          : null === (o = r.markets.items) || void 0 === o
                            ? void 0
                            : o.map((e) => {
                                let { uniqueKey: t, targetBorrowUtilization: r } = e;
                                return [t, (0, a._try)(() => BigInt(r))];
                              })) && void 0 !== c
                      ? c
                      : []
                  ),
                  maxWithdrawalUtilization: (0, i.fromEntries)(
                    null !==
                      (p =
                        null == r
                          ? void 0
                          : null === (l = r.markets.items) || void 0 === l
                            ? void 0
                            : l.map((e) => {
                                let { uniqueKey: t, targetWithdrawUtilization: r } = e;
                                return [t, (0, a._try)(() => BigInt(r))];
                              })) && void 0 !== p
                      ? p
                      : []
                  ),
                },
              };
            }, [e, r])
          );
        };
    },
    52714: function (e, t, r) {
      r.d(t, {
        b: function () {
          return A;
        },
      });
      var n = r(26897),
        a = r(40252),
        s = r(56044),
        i = r(12556),
        o = r(35047),
        l = r(51196),
        d = r(35514),
        u = r(28888),
        c = r(33764),
        p = r(82803);
      let f = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null == e) return a.DEFAULT_SLIPPAGE_TOLERANCE;
          let r = o.Time.s.from.min(t ? 60n * 2n : 15n);
          return a.MathLib.wTaylorCompounded(4n * e, r);
        },
        h = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null == e) return a.DEFAULT_SLIPPAGE_TOLERANCE;
          let r = o.Time.s.from.min(t ? 120 : 15);
          return (0, d.f)(
            ((1 + parseFloat((0, u.d)(e))) ** (r / o.Time.s.from.y(1)) - 1).toFixed(18)
          );
        },
        v = (e) => {
          switch (e.type) {
            case p.H.InterfaceOperationType.supplyCollateralBorrow: {
              let t = [
                {
                  ...e,
                  type: p.H.InterfaceOperationType.supplyCollateral,
                  assets: e.collateralAssets,
                },
              ];
              return (
                (e.loanAssets > 0n || e.loanShares > 0n) &&
                  (t.push({
                    ...e,
                    type: p.H.InterfaceOperationType.borrow,
                    assets: e.loanAssets,
                    shares: e.loanShares,
                  }),
                  0n === e.collateralAssets && t.shift()),
                t
              );
            }
            case p.H.InterfaceOperationType.withdrawCollateralRepay: {
              let t = [
                {
                  ...e,
                  type: p.H.InterfaceOperationType.repay,
                  assets: e.loanAssets,
                  shares: e.loanShares,
                },
              ];
              return (
                e.collateralAssets > 0n &&
                  (t.push({
                    ...e,
                    type: p.H.InterfaceOperationType.withdrawCollateral,
                    assets: e.collateralAssets,
                  }),
                  0n === e.loanAssets && 0n === e.loanShares && t.shift()),
                t
              );
            }
          }
          return [e];
        },
        m = (e, t, r, n) => {
          var a, s, i, o;
          switch (e.type) {
            case p.H.InterfaceOperationType.supplyCollateral:
              return [
                {
                  operation: {
                    type: 'Blue_SupplyCollateral',
                    id: e.id,
                    address: '0x',
                    sender: t,
                    args: { assets: e.assets, id: e.marketId, onBehalf: t },
                  },
                  options: e.options,
                },
              ];
            case p.H.InterfaceOperationType.withdrawCollateral:
              return [
                {
                  operation: {
                    type: 'Blue_WithdrawCollateral',
                    id: e.id,
                    address: '0x',
                    sender: t,
                    args: { assets: e.assets, id: e.marketId, receiver: t, onBehalf: t },
                  },
                  options: e.options,
                },
              ];
            case p.H.InterfaceOperationType.borrow: {
              let s = 0n === e.shares ? { assets: e.assets } : { shares: e.shares };
              return [
                {
                  operation: {
                    type: 'Blue_Borrow',
                    id: e.id,
                    address: '0x',
                    sender: t,
                    args: {
                      ...s,
                      id: e.marketId,
                      onBehalf: t,
                      receiver: t,
                      slippage: f(
                        null === (a = r.tryGetMarket(e.marketId)) || void 0 === a
                          ? void 0
                          : a.rateAtTarget,
                        n
                      ),
                    },
                  },
                  options: e.options,
                },
              ];
            }
            case p.H.InterfaceOperationType.repay: {
              let a = 0n === e.shares ? { assets: e.assets } : { shares: e.shares };
              return [
                {
                  operation: {
                    type: 'Blue_Repay',
                    id: e.id,
                    address: '0x',
                    sender: t,
                    args: {
                      ...a,
                      id: e.marketId,
                      onBehalf: t,
                      slippage: f(
                        null === (s = r.tryGetMarket(e.marketId)) || void 0 === s
                          ? void 0
                          : s.rateAtTarget,
                        n
                      ),
                    },
                  },
                  options: e.options,
                },
              ];
            }
            case p.H.InterfaceOperationType.migrateSupply:
            case p.H.InterfaceOperationType.metaMorphoDeposit: {
              let a = 0n === e.shares ? { assets: e.assets } : { shares: e.shares };
              return [
                {
                  operation: {
                    type: 'MetaMorpho_Deposit',
                    id: e.id,
                    address: e.vaultAddress,
                    sender: t,
                    args: {
                      ...a,
                      owner: t,
                      slippage: h(
                        null === (i = r.tryGetAccrualVault(e.vaultAddress)) || void 0 === i
                          ? void 0
                          : i.apy,
                        n
                      ),
                    },
                  },
                  options: e.options,
                },
              ];
            }
            case p.H.InterfaceOperationType.metaMorphoWithdraw: {
              let a = 0n === e.shares ? { assets: e.assets } : { shares: e.shares };
              return [
                {
                  operation: {
                    type: 'MetaMorpho_Withdraw',
                    id: e.id,
                    address: e.vaultAddress,
                    sender: t,
                    args: {
                      ...a,
                      owner: t,
                      receiver: t,
                      slippage: h(
                        null === (o = r.tryGetAccrualVault(e.vaultAddress)) || void 0 === o
                          ? void 0
                          : o.apy,
                        n
                      ),
                    },
                  },
                  options: e.options,
                },
              ];
            }
            case p.H.InterfaceOperationType.withdrawCollateralRepay:
            case p.H.InterfaceOperationType.supplyCollateralBorrow:
              return v(e).map((e) => m(e, t, r, n)[0]);
            case p.H.InterfaceOperationType.zap: {
              let a = r.getMarket(e.marketId).accrueInterest(r.block.timestamp);
              return [
                {
                  operation: {
                    ...new c.MigratableBorrowPosition_Blue({
                      market: a,
                      position: r.getAccrualPosition(t, e.marketId),
                    }).getMigrationOperations(
                      { ...e, slippageFrom: f(a.rateAtTarget, n) },
                      e.chainId
                    ),
                    id: e.id,
                  },
                  options: e.options,
                },
              ];
            }
            default:
              throw Error('Not implemented');
          }
        },
        g = (e) =>
          e.reduceRight((e, t) => {
            if ('Erc20_Wrap' === t.type) {
              let r = e.findIndex(
                (e) =>
                  e.type === t.type &&
                  ('Erc20_Wrap' === e.type
                    ? e.type === t.type && e.address === t.address && e.args.owner === t.args.owner
                    : void 0)
              );
              if (r > -1)
                return (
                  (e[r] = (0, l.produceImmutable)(
                    e[r],
                    (e) => (
                      'Erc20_Wrap' === e.type &&
                        (e.args.amount += (0, o.getValue)(t, 'args.amount')),
                      e
                    )
                  )),
                  e
                );
            }
            return e.unshift(t), e;
          }, []),
        y = function (e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = arguments.length > 3 ? arguments[3] : void 0,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Set(),
            d = arguments.length > 5 ? arguments[5] : void 0,
            { chain: u } = i.FW.getMetadata(t.chainId),
            { stEth: c, wNative: p } = (0, a.getChainAddresses)(u.id),
            { wrapSlippage: f = a.DEFAULT_SLIPPAGE_TOLERANCE } = r;
          return (0, s.populateSubBundle)(e, t, {
            ...r,
            getRequirementOperations: (s) => {
              let i = [];
              for (let { token: r, required: n } of s) {
                let s = t.getBundleAssetBalances(e.sender, r, f, !1);
                if (s)
                  for (let { type: u, srcAmount: v, dstAmount: m } of (0, o.values)(s.allocations)
                    .filter(o.isDefined)
                    .filter((e) => {
                      let { type: t, srcAmount: r } = e;
                      return !l.has(t) && r > 0n;
                    })) {
                    if (0n === n) break;
                    switch (u) {
                      case 'base':
                        break;
                      case 'unwrapped-staked-wrapped':
                      case 'staked-wrapped': {
                        let s = t.getWrappedToken(c),
                          o = t.getWrappedToken(r),
                          l = o.toWrappedExactAmountOut(n, f),
                          d = s.toWrappedExactAmountOut(l, f),
                          h = s.toWrappedExactAmountIn(v, f);
                        if ('unwrapped-staked-wrapped' === u) {
                          if (!p) throw Error('wNative not found');
                          i.push({
                            id: e.id,
                            type: 'Erc20_Unwrap',
                            address: p,
                            args: { amount: a.MathLib.min(d, v), slippage: f, receiver: e.sender },
                            sender: e.sender,
                          });
                        }
                        i.push({
                          id: e.id,
                          type: 'Erc20_Wrap',
                          address: c,
                          args: { amount: a.MathLib.min(d, v), owner: e.sender },
                          sender: e.sender,
                        }),
                          i.push({
                            id: e.id,
                            type: 'Erc20_Wrap',
                            address: o.address,
                            args: { amount: a.MathLib.min(l, h), slippage: f, owner: e.sender },
                            sender: e.sender,
                          });
                        break;
                      }
                      case 'wrapped': {
                        let s = t.getWrappedToken(r),
                          o = s.toWrappedExactAmountOut(n, f);
                        i.push({
                          id: e.id,
                          type: 'Erc20_Wrap',
                          address: s.address,
                          args: { amount: a.MathLib.min(o, v), slippage: f, owner: e.sender },
                          sender: e.sender,
                        });
                        break;
                      }
                      case 'vault':
                        i.push({
                          id: e.id,
                          type: 'MetaMorpho_Deposit',
                          address: r,
                          args: {
                            shares: a.MathLib.min(n, m),
                            slippage: h(null == t ? void 0 : t.getAccrualVault(r).apy, d),
                            owner: e.sender,
                          },
                          sender: e.sender,
                        });
                        break;
                      case 'wrapped-vault': {
                        let s = t.getWrappedToken(r),
                          o = t.getWrappedToken(s.underlying),
                          l = s.toWrappedExactAmountOut(n, f),
                          d = o.toWrappedExactAmountOut(l, f);
                        i.push(
                          {
                            id: e.id,
                            type: 'Erc20_Wrap',
                            address: o.address,
                            args: { amount: a.MathLib.min(d, v), slippage: f, owner: e.sender },
                            sender: e.sender,
                          },
                          {
                            id: e.id,
                            type: 'MetaMorpho_Deposit',
                            address: r,
                            args: { shares: a.MathLib.min(n, m), slippage: f, owner: e.sender },
                            sender: e.sender,
                          }
                        );
                        break;
                      }
                      default:
                        continue;
                    }
                    n = a.MathLib.zeroFloorSub(n, m);
                  }
              }
              return w(
                g(i),
                (e) => [{ operation: e, options: { disabledPeripheralTokens: l, isMax: n } }],
                t,
                e.sender,
                r,
                d
              ).operations;
            },
          });
        },
        w = function (e, t, r, a) {
          let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            o = arguments.length > 5 ? arguments[5] : void 0,
            l = [r],
            d = r;
          return {
            operations: e.flatMap((e, r) => {
              let u = t(e, a, d, o).flatMap((e) => {
                let { operation: t, options: a } = e;
                try {
                  let e = y(t, d, i, a.isMax, null == a ? void 0 : a.disabledPeripheralTokens, o);
                  return (d = (0, n.Z)((0, s.simulateBundlerOperations)(e, d))), e;
                } catch (e) {
                  if (e instanceof s.BundlerErrors.Bundle) throw e;
                  throw new s.BundlerErrors.Bundle(e, r, t, l);
                }
              });
              return l.push(d), u;
            }),
            steps: l,
          };
        },
        A = function (e, t, r) {
          let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = arguments.length > 4 ? arguments[4] : void 0;
          return w(e, m, t, r, n, a);
        };
    },
    57054: function (e, t, r) {
      r.d(t, {
        b: function () {
          return l;
        },
        t: function () {
          return o;
        },
      });
      var n = r(58258),
        a = r(56044),
        s = r(89991),
        i = r(52714);
      let o = (e) => {
          let {
            operations: t,
            initialState: r,
            bundlerConfiguration: n,
            userAddress: s,
            isContract: o,
          } = e;
          if (!r) return [void 0, void 0];
          if (!s || 0 === t.length) return [[r], void 0];
          try {
            let { steps: e } = (0, i.b)(t, r, s, n, o);
            return [e, void 0];
          } catch (e) {
            if (e instanceof a.BundlerErrors.Bundle) return [e.steps, e];
            throw e;
          }
        },
        l = (e, t, r, a) => {
          let { account: i } = (0, s.Z_)(),
            l = null != a ? a : null == i ? void 0 : i.address;
          return (0, n.useMemo)(
            () =>
              o({
                operations: t,
                initialState: e,
                bundlerConfiguration: r,
                userAddress: l,
                isContract: i.isContract,
              }),
            [e, l, i.isContract, t, r]
          );
        };
    },
    1704: function (e, t, r) {
      r.d(t, {
        UK: function () {
          return a;
        },
        ZP: function () {
          return _;
        },
        Z_: function () {
          return E;
        },
      });
      var n,
        a,
        s = r(78286),
        i = r(58258),
        o = r(85957),
        l = r(34814),
        d = r(66911),
        u = r(22490),
        c = r(24505),
        p = r(70911),
        f = r(81082),
        h = r(99e3),
        v = r(12556),
        m = r(35047),
        g = r(55412),
        y = r(3245),
        w = r(95413);
      function A() {
        let e = (0, g._)([
          '\n  query GetAttestationCB1($address: String!, $schemaId: String!) {\n    findFirstAttestation(\n      where: {\n        recipient: { contains: $address }\n        schema: { is: { id: { contains: $schemaId } } }\n      }\n    ) {\n      revoked\n    }\n  }\n',
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      let b = {},
        C = (0, y.Ps)(A());
      var k = r(72054);
      ((n = a || (a = {}))[(n.start = 0)] = 'start'),
        (n[(n.pending = 1)] = 'pending'),
        (n[(n.success = 2)] = 'success');
      let I = (0, i.createContext)(null),
        E = () => {
          let e = (0, i.useContext)(I);
          if (!e) throw Error('useWeb3Context must be used within a Web3Provider');
          return e;
        };
      var _ = (0, i.memo)((e) => {
        var t, r, n;
        let { children: a, modalAppKit: g, onSetTargetChainEvent: y } = e,
          A = (0, o.useParams)(),
          E = (0, d.useAccount)(),
          _ = (0, u.useSwitchChain)(),
          T = (0, c.useEnsName)({ address: null == E ? void 0 : E.address }),
          S = (0, p.useEnsAvatar)({
            name: (0, l.F)(null !== (n = null == T ? void 0 : T.data) && void 0 !== n ? n : ''),
          }),
          B = (null === (t = E.connector) || void 0 === t ? void 0 : t.type) === 'safe',
          P = (0, f.useConfig)();
        (0, i.useEffect)(() => {
          B && null != E.address && P.setState((e) => ({ ...e, status: 'connected' }));
        }, [P, B, E.address]);
        let [L, N] = (0, i.useState)((0, k.g)(A.chainName));
        (0, i.useEffect)(() => {
          A.chainName && N((0, k.g)(A.chainName));
        }, [A]);
        let x = (0, i.useCallback)(
          async (e) => {
            var t;
            null == y || y({ type: 0, chain: e }),
              N(e),
              (null == E ? void 0 : E.address) &&
                e.id !==
                  (null == E ? void 0 : null === (t = E.chain) || void 0 === t ? void 0 : t.id) &&
                !B &&
                (null == y || y({ type: 1, chain: e }),
                _.isPending ||
                  (await _.switchChainAsync({ chainId: e.id }),
                  null == y || y({ type: 2, chain: e })));
          },
          [
            y,
            null == E ? void 0 : E.address,
            null == E ? void 0 : null === (r = E.chain) || void 0 === r ? void 0 : r.id,
            _,
            B,
          ]
        );
        (0, i.useEffect)(() => {
          var e;
          (null == E ? void 0 : null === (e = E.chain) || void 0 === e ? void 0 : e.id) &&
            B &&
            E.chain.id !== L.id &&
            v.FW.isDeployedOnChain.id(E.chain.id) &&
            x(E.chain);
        }, [B, null == E ? void 0 : E.chain, L.id, x]);
        let { data: M } = (0, h.useBytecode)({ address: E.address, chainId: L.id }),
          { data: O } = (function (e) {
            let t = { ...b, ...e };
            return w.aM(C, t);
          })({
            variables: {
              address: E.address,
              schemaId: '0x254bd1b63e0591fefa66818ca054c78627306f253f86be6023725a67ee6bf9f4',
            },
            skip: !E.address,
            context: { clientName: 'linkEasscan' },
          }),
          U = (0, i.useMemo)(() => {
            var e, t;
            return {
              ...E,
              ens: null == T ? void 0 : T.data,
              ensImage: null == S ? void 0 : S.data,
              isSafe: B,
              isContract: B || (0, m.isDefined)(M),
              isWrongChain:
                !!(null == E ? void 0 : E.address) &&
                (null == L ? void 0 : L.id) !==
                  (null === (e = E.chain) || void 0 === e ? void 0 : e.id),
              attestations: {
                base: {
                  coinbaseOne:
                    null != O &&
                    !!O.findFirstAttestation &&
                    !(null == O
                      ? void 0
                      : null === (t = O.findFirstAttestation) || void 0 === t
                        ? void 0
                        : t.revoked),
                },
              },
            };
          }, [
            E,
            null == T ? void 0 : T.data,
            null == S ? void 0 : S.data,
            B,
            M,
            null == L ? void 0 : L.id,
            null == O ? void 0 : O.findFirstAttestation,
          ]),
          W = (0, i.useMemo)(
            () => ({
              account: U,
              modal: g,
              targetChain: L,
              targetChainId: L.id,
              setTargetChain: N,
              onSetTargetChain: x,
            }),
            [g, L, N, x, U]
          );
        return (0, s.tZ)(I.Provider, { value: W, children: a });
      });
    },
    85475: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return L;
          },
        });
      var n = r(78286),
        a = r(58258),
        s = r(7327),
        i = r(92529),
        o = r(5168),
        l = r(25513),
        d = r(54655),
        u = r(1704),
        c = r(388),
        p = r(76018),
        f = r(56458),
        h = r(88496),
        v = r(58628),
        m = r(17203),
        g = r(34725),
        y = r(32224),
        w = r(12556),
        A = r(18313),
        b = r(43485);
      let C = (e) => (0, g.o6)({ storage: e ? localStorage : s.Dr }),
        k = (e, t) =>
          (0, c.t)([
            (0, p.H)(t ? f.T : h.L),
            ...e.map((e) => (0, y.d)(e, { batch: { batchSize: 10, wait: 50 } })),
          ]),
        I = (e) => {
          let { chainId: t, defaultRpcUrl: r, isSafeApp: n } = e;
          return A.clientEnvs.NEXT_PUBLIC_USE_VIRTUAL_CHAIN
            ? (0, y.d)(A.clientEnvs.NEXT_PUBLIC_RPC_HTTP_URL_VIRTUAL_MAINNET)
            : A.clientEnvs.NEXT_PUBLIC_DISABLE_RPC_FALLBACK
              ? (0, y.d)(r)
              : k([...w.FW.getMetadata(t).rpcUrls, r], n);
        },
        E = (e) => {
          let { isSafeApp: t } = e;
          return A.Cq.AVAILABLE_CHAIN_IDS.reduce((e, r) => {
            let n = A.Cq.getDefaultRpcUrl(r);
            if (!n) throw Error('No RPC URL found for chainId "'.concat(r, '"'));
            return (e[r] = I({ chainId: r, defaultRpcUrl: n, isSafeApp: t })), e;
          }, {});
        },
        _ = (e) =>
          e
            ? [(0, f.T)({ unstable_getInfoTimeout: 500 })]
            : [
                (function () {
                  let e = window,
                    t = {
                      target: () => ({
                        id: 'injected',
                        name: 'Browser Wallet',
                        provider: e.ethereum,
                      }),
                    };
                  return (0, b.K)((e) => (0, h.L)(t)(e));
                })(),
              ],
        T = () => {
          var e;
          let t =
            ('undefined' != typeof document && document.referrer) ||
            (null === (e = window.location.ancestorOrigins) || void 0 === e ? void 0 : e[0]);
          return !!t && 'app.safe.global' === new URL(t).hostname;
        },
        S = () => {
          let e = T();
          return new m.K({
            projectId: A.clientEnvs.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
            storage: C(e),
            transports: E({ isSafeApp: e }),
            connectors: _(e),
            networks: A.Cq.AVAILABLE_CHAINS,
            batch: { multicall: { wait: 50 } },
            ssr: !0,
          });
        },
        B = (e) => {
          let { wagmiAdapter: t, themeMode: r, themeVariables: n } = e;
          return (0, v.cz)({
            adapters: [t],
            projectId: A.clientEnvs.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
            networks: A.Cq.AVAILABLE_CHAINS,
            themeMode: r,
            themeVariables: n,
            metadata: {
              name: 'Morpho',
              description: 'Open infrastructure for onchain loans',
              url: A.clientEnvs.NEXT_PUBLIC_DEPLOYMENT_URL,
              icons: [(0, w.$B)('assets/logos/morpho.svg')],
            },
            featuredWalletIds: [
              'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
              '8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4',
              '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
              '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662',
            ],
            allowUnsupportedChain: !0,
            features: {
              analytics: !0,
              socials: !1,
              swaps: !1,
              email: !1,
              send: !1,
              onramp: !1,
              history: !0,
            },
          });
        },
        P = new o.S();
      var L = (0, a.memo)((e) => {
        let { cookies: t, onSetTargetChainEvent: r, children: o } = e,
          { themeMode: c, theme: p } = (0, d.TCT)(),
          f = (0, a.useRef)(null),
          h = (0, a.useRef)(null),
          v = (0, a.useRef)(null),
          m = (0, a.useMemo)(
            () => ({
              '--w3m-font-family': 'FK Grotesk, sans-serif',
              '--w3m-accent': p.colors.constant.color.active,
            }),
            [p]
          ),
          {
            wagmiAdapter: g,
            modalAppKit: y,
            initialState: w,
          } = (0, a.useMemo)(
            () => (
              (f.current && h.current && v.current) ||
                ((f.current = S()),
                (h.current = B({ wagmiAdapter: f.current, themeMode: c, themeVariables: m })),
                (v.current = (0, s.jx)(f.current.wagmiConfig, t))),
              { wagmiAdapter: f.current, modalAppKit: h.current, initialState: v.current }
            ),
            [f, h, v, t, c, m]
          );
        return (
          (0, a.useEffect)(() => {
            if (f.current) {
              var e, t;
              null === (e = h.current) || void 0 === e || e.setThemeMode(c),
                null === (t = h.current) || void 0 === t || t.setThemeVariables(m);
            }
          }, [c, m]),
          (0, n.tZ)(i.WagmiProvider, {
            config: g.wagmiConfig,
            initialState: w,
            children: (0, n.tZ)(l.aH, {
              client: P,
              children: (0, n.tZ)(u.ZP, { onSetTargetChainEvent: r, modalAppKit: y, children: o }),
            }),
          })
        );
      });
    },
    89991: function (e, t, r) {
      r.d(t, {
        UK: function () {
          return n.UK;
        },
        Z_: function () {
          return n.Z_;
        },
      }),
        r(85475);
      var n = r(1704);
      r(72054);
    },
    72054: function (e, t, r) {
      r.d(t, {
        g: function () {
          return s;
        },
      });
      var n = r(12556),
        a = r(18313);
      let s = (e) => {
        var t;
        return e && null !== (t = n.FW.tryGetChain(e)) && void 0 !== t ? t : a.Cq.DEFAULT_CHAIN;
      };
    },
    75026: function (e, t, r) {
      r.d(t, {
        V: function () {
          return s;
        },
      });
      var n = r(58258),
        a = r(85957);
      function s() {
        let e = (0, a.usePathname)(),
          t = (0, a.useSearchParams)();
        return (0, n.useCallback)(
          (r) => {
            let n = [...e.split('/').filter(Boolean)];
            r.chainName && (n[0] = r.chainName),
              r.marketId && (n[2] = r.marketId),
              r.marketSlug && (n[3] = r.marketSlug),
              r.vaultAddress && (n[2] = r.vaultAddress),
              r.vaultSlug && (n[3] = r.vaultSlug),
              r.marketId || r.marketSlug
                ? (n = [n[0], 'market', ...n.slice(2, 4)])
                : (r.vaultAddress || r.vaultSlug) && (n = [n[0], 'vault', ...n.slice(2, 4)]);
            let a = '/'.concat(n.join('/')),
              s = new URLSearchParams(t.toString());
            Object.entries(r).forEach((e) => {
              let [t, r] = e;
              !['chainName', 'marketId', 'marketSlug', 'vaultAddress', 'vaultSlug'].includes(t) &&
                r &&
                s.set(t, r);
            });
            let i = s.toString();
            return i ? ''.concat(a, '?').concat(i) : a;
          },
          [e, t]
        );
      }
    },
    54899: function (e, t, r) {
      r.d(t, {
        R: function () {
          return p;
        },
      });
      var n = r(78286),
        a = r(58258),
        s = r(85957),
        i = r(12556),
        o = r(54655),
        l = (0, a.memo)((e) => {
          let { onConfirmChangeNetwork: t } = e,
            { toggleDialog: r } = (0, o.DAv)();
          return (0, n.BX)(o.Kqy, {
            gap: 'm',
            direction: 'column',
            children: [
              (0, n.BX)(o.Kqy, {
                gap: 's',
                direction: 'column',
                align: 'center',
                children: [
                  (0, n.tZ)(o.xvT.Body.M.Regular, { children: 'Remove Bundler Transaction?' }),
                  (0, n.tZ)(o.xvT.Body.XXS.Regular, {
                    style: { textAlign: 'center' },
                    children:
                      'We currently do not support adding multiple networks to a bundled transaction. Switching networks will remove the transaction from the Bundler.',
                  }),
                ],
              }),
              (0, n.BX)(o.Kqy, {
                gap: 'xs',
                direction: 'column',
                children: [
                  (0, n.tZ)(o.zxk, {
                    onClick: t,
                    children: (0, n.tZ)(o.xvT.Body.XXS.Regular, { children: 'Remove Transaction' }),
                  }),
                  (0, n.tZ)(o.zxk, {
                    onClick: () => r(!1),
                    variant: 'ghost',
                    children: (0, n.tZ)(o.xvT.Body.XXS.Regular, { children: 'Cancel' }),
                  }),
                ],
              }),
            ],
          });
        }),
        d = r(22683),
        u = r(1704),
        c = r(75026);
      let p = () => {
        let { targetChain: e, onSetTargetChain: t } = (0, u.Z_)(),
          { operations: r, resetOperations: p } = (0, d.N)(),
          f = (0, c.V)(),
          h = (0, s.useRouter)(),
          { toggleDialog: v } = (0, o.DAv)(),
          m = (0, a.useCallback)(
            (a, s) => {
              if (a.id !== e.id && r.length > 0) {
                v(
                  (0, n.tZ)(l, {
                    onConfirmChangeNetwork: () => {
                      p(), t(a), v(!1), s();
                    },
                  })
                );
                return;
              }
              t(a), s();
            },
            [r.length, e.id, t, p, v]
          );
        return {
          selectByChainName: (0, a.useCallback)(
            (e) => {
              let t = i.FW.tryGetChain(e);
              if (!t) return;
              let r = f({ chainName: e });
              m(t, () => h.push(r));
            },
            [m, f, h]
          ),
          navigateTo: (0, a.useCallback)(
            (e, t) => {
              let r = e.split('/')[1],
                n = i.FW.tryGetChain(r);
              if (!n) {
                h.push(e), null == t || t();
                return;
              }
              m(n, () => {
                h.push(e), null == t || t();
              });
            },
            [m, h]
          ),
        };
      };
    },
    243: function (e, t, r) {
      r.d(t, {
        I: function () {
          return a;
        },
      });
      let n = 'NOT_FOUND';
      function a(e) {
        var t;
        let r = (null === (t = e.error) || void 0 === t ? void 0 : t.graphQLErrors) || [],
          a = r.some((e) => e.status !== n),
          s = r.some((e) => e.status === n);
        if (a) throw Error(JSON.stringify(r));
        return { ...e, isNotFound: s };
      }
    },
  },
]);
