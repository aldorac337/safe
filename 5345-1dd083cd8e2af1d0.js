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
    i = new e.Error().stack;
  i &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[i] = '6fbf7541-431f-4fee-a7df-84cae4ab0c03'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-6fbf7541-431f-4fee-a7df-84cae4ab0c03'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5345],
  {
    69213: function (e, i, n) {
      n.d(i, {
        jf: function () {
          return c;
        },
      });
      var t = n(55412),
        a = n(3245),
        o = n(95413),
        r = n(41512),
        l = n(24387);
      function d() {
        let e = (0, t._)([
          '\n  query GetUserTotalBorrowWithSdkPositions(\n    $where: MarketFilters\n    $orderBy: MarketOrderBy\n    $orderDirection: OrderDirection\n    $first: Int\n    $skip: Int\n  ) {\n    markets(\n      where: $where\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      first: $first\n      skip: $skip\n    ) {\n      items {\n        id\n        uniqueKey\n        loanAsset {\n          ...assetFields\n        }\n        collateralAsset {\n          ...assetFields\n        }\n        state {\n          id\n          borrowAssets\n          borrowShares\n          price\n        }\n      }\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      let s = {},
        u = (0, a.Ps)(d(), r.n, l.G);
      function c(e) {
        let i = { ...s, ...e };
        return o.aM(u, i);
      }
    },
    48402: function (e, i, n) {
      n.d(i, {
        _: function () {
          return W;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(17965),
        r = n(12556),
        l = n(54655),
        d = n(35047),
        s = n(45090),
        u = n(22683),
        c = n(34896),
        p = n(89805),
        v = n(89991),
        y = n(55412),
        h = n(3245),
        m = n(95413),
        g = n(41512),
        k = n(91576),
        f = n(24387);
      function w() {
        let e = (0, y._)([
          '\n  query GetMarketsWithSupplyingVaults(\n    $first: Int\n    $skip: Int\n    $orderBy: MarketOrderBy\n    $orderDirection: OrderDirection\n    $where: MarketFilters\n  ) {\n    markets(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      items {\n        id\n        whitelisted\n        lltv\n        uniqueKey\n        irmAddress\n        oracleAddress\n        collateralPrice\n        creationTimestamp\n        oracleFeed {\n          baseVault\n          baseFeedOneAddress\n          baseFeedOneDescription\n          baseFeedOneVendor\n          baseFeedTwoAddress\n          baseFeedTwoDescription\n          baseFeedTwoVendor\n          quoteVault\n          quoteFeedOneAddress\n          quoteFeedOneDescription\n          quoteFeedOneVendor\n          quoteFeedTwoAddress\n          quoteFeedTwoDescription\n          quoteFeedTwoVendor\n        }\n        loanAsset {\n          ...assetFields\n          chain {\n            id\n          }\n        }\n        collateralAsset {\n          ...assetFields\n          chain {\n            id\n          }\n        }\n        state {\n          id\n          dailyNetBorrowApy\n          dailyBorrowApy\n          liquidityAssets\n          liquidityAssetsUsd\n          rewards {\n            amountPerSuppliedToken\n            amountPerBorrowedToken\n            asset {\n              ...assetFields\n            }\n          }\n        }\n        warnings {\n          type\n          level\n        }\n        supplyingVaults {\n          id\n          name\n          address\n        }\n        publicAllocatorSharedLiquidity {\n          id\n          vault {\n            id\n            address\n            publicAllocatorConfig {\n              flowCaps {\n                market {\n                  id\n                  uniqueKey\n                  collateralAsset {\n                    ...assetFields\n                  }\n                  loanAsset {\n                    ...assetFields\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      let A = {},
        b = (0, h.Ps)(w(), g.n, f.G, k.Q);
      var Z = n(91794),
        q = n(19311),
        B = n(52832),
        x = n(66395),
        C = n(34550),
        K = n(39882),
        T = n(47528),
        D = n(99971),
        P = n(62239),
        F = n(70064),
        M = n(59934),
        O = n(4565),
        V = (e) => {
          let { markets: i, selectedMarketId: n } = e,
            { targetChain: t } = (0, v.Z_)();
          return (0, a.useMemo)(
            () =>
              i
                ? i.map((e) => {
                    var i, a, o, s, u, c, p;
                    let v = (0, r.wk)(e.loanAsset),
                      y = (0, r.wk)(e.collateralAsset),
                      h = (0, T.f)(e),
                      m = (0, d.isDefined)(
                        null === (i = e.state) || void 0 === i ? void 0 : i.dailyNetBorrowApy
                      )
                        ? (0, O.safeParseNumber)(
                            null === (a = e.state) || void 0 === a ? void 0 : a.dailyNetBorrowApy
                          )
                        : void 0,
                      g = (0, d.isDefined)(
                        null === (o = e.state) || void 0 === o ? void 0 : o.dailyBorrowApy
                      )
                        ? (0, O.safeParseNumber)(
                            null === (s = e.state) || void 0 === s ? void 0 : s.dailyBorrowApy
                          )
                        : void 0,
                      k = (0, l.bhT)(t.id, e.uniqueKey, null == y ? void 0 : y.address).filter(
                        d.isDefined
                      ),
                      f = (0, l.pTE)({ address: e.oracleAddress, ...e.oracleFeed });
                    return {
                      market: e,
                      loanAsset: v,
                      collateralAsset: y,
                      rewards: h,
                      oracleName: f,
                      liquidity: {
                        amount: null === (u = e.state) || void 0 === u ? void 0 : u.liquidityAssets,
                        value: (0, d.isDefined)(
                          null === (c = e.state) || void 0 === c ? void 0 : c.liquidityAssetsUsd
                        )
                          ? (0, O.safeParseNumber)(
                              null === (p = e.state) || void 0 === p
                                ? void 0
                                : p.liquidityAssetsUsd,
                              18
                            )
                          : void 0,
                      },
                      netApy: { dailyNetBorrowApy: m, dailyBorrowApy: g, rewards: h, points: k },
                      isSelected: e.uniqueKey === n,
                    };
                  })
                : [],
            [i, n, t.id]
          );
        },
        S = n(34571);
      let I = [
          {
            id: 'market',
            header: () =>
              (0, t.tZ)(l.xvT.Body.XXXS.Regular, {
                marginLeft: '12px',
                color: 'text.secondary',
                children: 'Market',
              }),
            cell: function (e) {
              let { row: i } = e,
                { targetChainId: n } = (0, v.Z_)();
              return (0, t.BX)(l.Kqy, {
                gap: 'xs',
                align: 'center',
                children: [
                  (0, t.tZ)(l.k1R, {
                    ...i.original.market,
                    chainId: n,
                    maxLength: 6,
                    TextVariant: l.xvT.Body.XXS.Regular,
                  }),
                  i.original.market.oracleFeed &&
                    (0, t.tZ)(l.Vp9, {
                      variant: 'main',
                      label: (0, d.formatLongString)(i.original.oracleName, 15),
                    }),
                  i.original.isSelected &&
                    (0, t.tZ)(l.JO$, { icon: 'CheckPlain20', color: 'text.body' }),
                ],
              });
            },
            accessorFn: (e) => e.market.lltv,
            sortingFn: (0, d.bigIntComparator)((e) => e.original.market.lltv),
          },
          {
            id: 'liquidity',
            header: 'Liquidity',
            cell: (e) => {
              var i;
              let { row: n } = e;
              return n.original.collateralAsset
                ? (0, t.tZ)(l.UuD, {
                    withAvatar: !0,
                    token: n.original.collateralAsset,
                    amount:
                      null === (i = n.original.market.state) || void 0 === i
                        ? void 0
                        : i.liquidityAssets,
                    maxLength: 6,
                    TextVariant: l.xvT.Body.XXXS.Regular,
                    value: n.original.liquidity.value,
                  })
                : null;
            },
            accessorFn: (e) => {
              var i;
              return null === (i = e.market.state) || void 0 === i ? void 0 : i.liquidityAssetsUsd;
            },
          },
          {
            id: 'netApy',
            header: 'Rate',
            accessorFn: (e) => e.netApy.dailyBorrowApy,
            cell: (e) => {
              let { row: i } = e;
              return i.original.netApy.dailyBorrowApy && i.original.netApy.dailyNetBorrowApy
                ? (0, t.tZ)(S.Z, {
                    variant: 'market',
                    performanceFee: BigInt(0),
                    netApy: i.original.netApy.dailyNetBorrowApy,
                    apy: i.original.netApy.dailyBorrowApy,
                    rewards: i.original.netApy.rewards,
                    points: i.original.netApy.points,
                    TextVariant: l.xvT.Body.XXXS.Regular,
                    isHoverable: !1,
                  })
                : null;
            },
          },
        ],
        U = [
          {
            id: 'market',
            header: 'Market',
            cell: (e) => {
              var i;
              let { row: n } = e;
              return (0, t.BX)(l.Kqy, {
                direction: 'row',
                gap: 'xs',
                align: 'center',
                wrap: 'wrap',
                style: { marginBlock: '12px' },
                children: [
                  (0, t.tZ)(l.k1R, { ...n.original.market, chainId: 1 }),
                  n.original.market.collateralAsset &&
                    (0, t.tZ)(l.UuD, {
                      withAvatar: !0,
                      token: (0, r.wk)(n.original.market.collateralAsset),
                      amount:
                        null === (i = n.original.market.state) || void 0 === i
                          ? void 0
                          : i.liquidityAssets,
                      value: n.original.liquidity.value,
                    }),
                  (0, t.tZ)(S.Z, {
                    netApy: n.original.netApy.dailyNetBorrowApy,
                    apy: n.original.netApy.dailyBorrowApy,
                    performanceFee: BigInt(0),
                    rewards: n.original.netApy.rewards,
                    variant: 'market',
                    isHoverable: !1,
                  }),
                ],
              });
            },
          },
        ];
      var L = (0, a.memo)((e) => {
        var i, n;
        let {
            isOpen: o,
            isLoading: r,
            markets: d,
            selectedMarket: s,
            onOpenChange: u,
            onSelect: c,
          } = e,
          p = (0, l.CPt)(),
          v = V({ markets: d, selectedMarketId: null == s ? void 0 : s.uniqueKey }),
          y = (0, a.useMemo)(() => (p ? U : I), [p]),
          h = (0, a.useMemo)(() => !d || (null == d ? void 0 : d.length) < 2, [d]),
          m = (0, a.useMemo)(() => {
            if (!s) return '';
            let e = (0, l.lAJ)({
                collateralAsset: null == s ? void 0 : s.collateralAsset,
                loanAsset: null == s ? void 0 : s.loanAsset,
                maxLength: 10,
              }),
              i = s.lltv
                ? l.$0l.percent
                    .readable()
                    .trailingZero(!1)
                    .digits(0)
                    .unit('%')
                    .of(BigInt(s.lltv), 18)
                : '';
            return ''.concat(e, ' ').concat(i);
          }, [s]);
        return r
          ? (0, t.tZ)(l.OdW, { width: '150px', height: '45px', borderRadius: '20px' })
          : (0, t.BX)(l.Ce2.Root, {
              open: o,
              onOpenChange: u,
              children: [
                (0, t.BX)(l.Kqy, {
                  direction: 'row',
                  align: 'center',
                  gap: 's',
                  children: [
                    (0, t.tZ)(l.xvT.Body.XXXS.Regular, { children: 'Switch to' }),
                    (0, t.tZ)(l.Ce2.Trigger, {
                      children: (0, t.tZ)(l.zxk, {
                        disabled: h,
                        iconLeft: (0, t.tZ)(l.Kqy, {
                          direction: 'row',
                          align: 'center',
                          gap: 'xs',
                          children: (0, t.tZ)(l.Pws, {
                            collateralAssetURI:
                              null == s
                                ? void 0
                                : null === (i = s.collateralAsset) || void 0 === i
                                  ? void 0
                                  : i.logoURI,
                            loanAssetURI:
                              null == s
                                ? void 0
                                : null === (n = s.loanAsset) || void 0 === n
                                  ? void 0
                                  : n.logoURI,
                          }),
                        }),
                        loading: r,
                        iconRight: 'ChevronPlain20',
                        variant: 'secondary',
                        label: m,
                        iconRightProps: {
                          style: {
                            transition: 'transform 0.2s ease-in-out',
                            transform: o ? 'rotate(180deg)' : 'rotate(0deg)',
                          },
                        },
                        onClick: () => u(!o),
                      }),
                    }),
                  ],
                }),
                (0, t.tZ)(l.Ce2.Portal, {
                  children: (0, t.tZ)(l.Ce2.Content, {
                    side: 'bottom',
                    sideOffset: 2,
                    align: 'end',
                    width: 'min(600px, 90vw)',
                    children: (0, t.tZ)(l.Ce2.Table, {
                      data: v,
                      columnsDefs: y,
                      columnWidths: ['53%', '190px'],
                      onRowClick: (e) => c(e.market.uniqueKey),
                    }),
                  }),
                }),
              ],
            });
      });
      let X = (e) => {
        var i, n, y, h, g, k, f, w;
        let { marketId: O, collateralAddress: V, loanAddress: S, initialOperation: I } = e,
          U = (0, l.CPt)(),
          { targetChainId: W, account: R } = (0, v.Z_)(),
          { toggleRightPanel: _ } = (0, l.s8G)(),
          {
            bundlerConfiguration: N,
            isPending: z,
            operations: $,
            blockError: E,
            simulationError: H,
            config: { addToSimulationState: G },
          } = (0, u.N)(),
          { toggleDialog: Y } = (0, l.DAv)(),
          j = (0, a.useMemo)(
            () => ({
              first: 100,
              where: {
                chainId_in: [W],
                collateralAssetAddress_in: [V],
                loanAssetAddress_in: [S],
                whitelisted: !0,
              },
              orderBy: o.MarketOrderBy.TotalLiquidityUsd,
              orderDirection: o.OrderDirection.Desc,
            }),
            [W, V, S]
          ),
          [J, Q] = (0, a.useState)(),
          { data: ee, loading: ei } = (function (e) {
            let i = { ...A, ...e };
            return m.aM(b, i);
          })({ variables: j, skip: !R.isConnected }),
          [en, et] = (0, a.useState)(!1),
          ea = (0, a.useMemo)(() => {
            var e, i, n;
            return (0, r.wk)(
              null == ee
                ? void 0
                : null === (n = ee.markets) || void 0 === n
                  ? void 0
                  : null === (i = n.items) || void 0 === i
                    ? void 0
                    : null === (e = i.find((e) => e.uniqueKey === O)) || void 0 === e
                      ? void 0
                      : e.collateralAsset
            );
          }, [ee, O]),
          eo = (0, a.useMemo)(() => {
            var e, i, n;
            return (0, r.wk)(
              null == ee
                ? void 0
                : null === (n = ee.markets) || void 0 === n
                  ? void 0
                  : null === (i = n.items) || void 0 === i
                    ? void 0
                    : null === (e = i.find((e) => e.uniqueKey === O)) || void 0 === e
                      ? void 0
                      : e.loanAsset
            );
          }, [ee, O]),
          er = (0, a.useMemo)(() => {
            var e, i;
            return null == ee
              ? void 0
              : null === (i = ee.markets) || void 0 === i
                ? void 0
                : null === (e = i.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.uniqueKey === O);
          }, [ee, O]),
          el = (0, a.useMemo)(() => {
            var e, i;
            return null == ee
              ? void 0
              : null === (i = ee.markets) || void 0 === i
                ? void 0
                : null === (e = i.items) || void 0 === e
                  ? void 0
                  : e.filter((e) => e.uniqueKey !== O);
          }, [ee, O]),
          ed = (0, a.useMemo)(() => {
            var e;
            return null !== (e = null == el ? void 0 : el.find((e) => e.uniqueKey === J)) &&
              void 0 !== e
              ? e
              : null == el
                ? void 0
                : el[0];
          }, [el, J]),
          es = (0, T.H)(er),
          {
            localOperation: eu,
            isNew: ec,
            isLoading: ep,
            initialState: ev,
            inputCollateralAmount: ey,
            inputBorrowAmount: eh,
            isMaxCollateral: em,
            isMaxBorrow: eg,
            maxBorrowAmount: ek,
            setInputCollateralAmount: ef,
            setInputBorrowAmount: ew,
            setIsMaxCollateral: eA,
            setIsMaxBorrow: eb,
            confirm: eZ,
            reset: eq,
          } = (0, Z.p)({
            marketFrom: O,
            marketTo: null == ed ? void 0 : ed.uniqueKey,
            initialOperation: I,
          }),
          eB = (0, K.t)({ market: er, withSharedLiquidity: !0 }),
          ex = (0, K.t)({ market: ed, withSharedLiquidity: !0 }),
          [eC, eK, , eT] = (0, p._)(ev.data, eu, N, ec),
          eD = (0, x.Z)(eT, null == eK ? void 0 : eK.message),
          eP = (0, a.useMemo)(
            () => !ei && (!(0, d.isDefined)(er) || !(0, d.isDefined)(ed)),
            [ei, er, ed]
          ),
          eF = (0, a.useCallback)(() => {
            eq(), Y(!1);
          }, [Y, eq]),
          eM = (0, a.useCallback)(
            (e) => {
              Q(e), et(!1), ew(0n), ef(0n), eb(!1), eA(!1);
            },
            [Q, et, ew, ef, eb, eA]
          ),
          [eO, eV] = null != eC ? eC : [],
          eS = (0, q.g)({
            marketId: O,
            isNewMarket: !1,
            initialState: eO,
            finalState: eV,
            operation: eu,
          }),
          eI = (0, q.g)({
            marketId: null == ed ? void 0 : ed.uniqueKey,
            isNewMarket: !0,
            initialState: eO,
            finalState: eV,
            operation: eu,
          }),
          eU = (0, B.Z)(eD, R.isWrongChain),
          eL = (0, a.useMemo)(() => !ep && !eS.initialMarketData, [ep, eS.initialMarketData]),
          eX = (0, a.useMemo)(() => !ep && !eI.initialMarketData, [ep, eI.initialMarketData]),
          eW = (0, a.useMemo)(
            () => !!eK || !!eT || !!eL || !!eX || !(0, c.H)(eu),
            [eu, eK, eT, eL, eX]
          ),
          eR = (0, a.useMemo)(() => {
            let e = Object.values(eS.errors).some(
                (e) => (null == e ? void 0 : e.level) === o.WarningLevel.Red
              ),
              i = Object.values(eI.errors).some(
                (e) => (null == e ? void 0 : e.level) === o.WarningLevel.Red
              );
            return e || i || eL || eX || (E && z) || !!eD || !!H || !(0, c.H)(eu) || R.isWrongChain;
          }, [eu, eS.errors, eI.errors, E, z, eD, H, R.isWrongChain, eL, eX]),
          e_ = (0, C.Z)(
            'refinance',
            0n === ey && 0n === eh,
            ec,
            !0,
            eD,
            $,
            H,
            E,
            z,
            R.isWrongChain,
            !1
          ),
          eN = (0, a.useCallback)(() => {
            Y(
              (0, t.tZ)(D.sG, {
                operations: [eu],
                headerActionSlot: (0, t.tZ)(l.zxk, {
                  variant: 'ghost',
                  iconRight: 'EditPlain20',
                  label: 'Edit refinance',
                  onClick: () => {
                    Y(
                      (0, t.tZ)(F.Z, {
                        fallback: (0, t.tZ)(l.SKT, {
                          text: 'An error has been encountered in the refinance process.',
                        }),
                        children: (0, t.tZ)(X, {
                          'data-testid': 'refinance-dialog',
                          marketId: O,
                          collateralAddress: V,
                          loanAddress: S,
                          initialOperation: eu,
                        }),
                      }),
                      { maxWidth: U ? void 0 : '900px', fullSize: U }
                    );
                  },
                }),
              })
            );
          }, [eu, U, V, S, O, Y]),
          ez = (0, a.useCallback)(() => {
            ec && eZ(), Y(!1), _(!0);
          }, [ec, eZ, _, Y]);
        return (
          (0, a.useEffect)(() => {
            G(eB), G(ex);
          }, [eB, ex, G]),
          (0, t.tZ)(
            P.Do,
            {
              title: 'Refinance Loan',
              loading: ei,
              error: eP ? 'No available markets to refinance your position into.' : null,
              onClose: eF,
              headerActionSlot: (0, t.tZ)(L, {
                isOpen: en,
                markets: null != el ? el : [],
                selectedMarket: ed,
                isLoading: ei,
                onOpenChange: et,
                onSelect: eM,
              }),
              inputSlots: [
                ea &&
                  (0, t.tZ)(
                    l.TGk,
                    {
                      fullWidth: !0,
                      token: ea,
                      amount: ey,
                      onChange: ef,
                      header: 'Collateral amount',
                      maxValue:
                        null === (i = eS.initialPosition) || void 0 === i ? void 0 : i.collateral,
                      onMaxClick: eA,
                      isMax: em,
                      disabled: ep || !eS.initialMarketData,
                    },
                    ea.address
                  ),
                eo &&
                  (0, t.tZ)(
                    l.TGk,
                    {
                      fullWidth: !0,
                      token: eo,
                      amount: eh,
                      onChange: ew,
                      header: 'Loan amount',
                      maxValue: null == ek ? void 0 : ek.assets,
                      onMaxClick: eb,
                      isMax: eg,
                      disabled: ep || !eI.initialMarketData,
                    },
                    eo.address
                  ),
              ],
              initialPositionSlot: eL
                ? (0, t.tZ)(l.SKT, {
                    text: 'Unknown market '.concat(
                      (0, d.formatLongString)(
                        null !== (k = null == er ? void 0 : er.uniqueKey) && void 0 !== k ? k : '',
                        10
                      ),
                      '.'
                    ),
                    width: '100%',
                    height: '312px',
                  })
                : er &&
                  (0, t.tZ)(s.F, {
                    chainId: W,
                    isLoading: ep || !eC,
                    state: eS,
                    errors: eS.errors,
                    market: {
                      uniqueKey: er.uniqueKey,
                      collateralToken: ea,
                      loanToken: eo,
                      rewards: es,
                      oracle: {
                        address: null !== (f = er.oracleAddress) && void 0 !== f ? f : '',
                        ...(null == er ? void 0 : er.oracleFeed),
                      },
                      warnings: er.warnings,
                      dailyBorrowApy:
                        null === (n = er.state) || void 0 === n ? void 0 : n.dailyBorrowApy,
                      dailyNetBorrowApy:
                        null === (y = er.state) || void 0 === y ? void 0 : y.dailyNetBorrowApy,
                    },
                  }),
              finalPositionSlot: eX
                ? (0, t.tZ)(l.SKT, {
                    text: 'Unknown market '.concat(
                      (0, d.formatLongString)(
                        null !== (w = null == ed ? void 0 : ed.uniqueKey) && void 0 !== w ? w : '',
                        10
                      ),
                      '.'
                    ),
                    width: '100%',
                    height: '312px',
                  })
                : ed &&
                  (0, t.tZ)(s.F, {
                    chainId: W,
                    isLoading: ep || !eC,
                    state: eI,
                    errors: eI.errors,
                    market: {
                      uniqueKey: ed.uniqueKey,
                      collateralToken: ea,
                      loanToken: eo,
                      rewards: es,
                      oracle: { address: ed.oracleAddress, ...ed.oracleFeed },
                      warnings: ed.warnings,
                      dailyBorrowApy:
                        null === (h = ed.state) || void 0 === h ? void 0 : h.dailyBorrowApy,
                      dailyNetBorrowApy:
                        null === (g = ed.state) || void 0 === g ? void 0 : g.dailyNetBorrowApy,
                    },
                  }),
              actionSlot:
                !eP &&
                (0, t.tZ)(M.N, {
                  'data-testid': 'finalize-button',
                  isLoading: ep,
                  isNew: ec,
                  handleFinalize: eN,
                  handleConfirm: ez,
                  finalizeLabel: eL || eX ? 'Unknown market' : e_,
                  isFinalizeDisabled: eR,
                  isConfirmDisabled: eW,
                  tooltipContent: eU,
                }),
            },
            O
          )
        );
      };
      var W = (0, a.memo)(X);
    },
    45090: function (e, i, n) {
      n.d(i, {
        F: function () {
          return m;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(40252),
        r = n(4565),
        l = n(12556),
        d = n(54655),
        s = n(35047),
        u = n(725),
        c = n(78017),
        p = n(35288),
        v = n(16820);
      let y = (0, n(38819).Z)(d.OdW, {
          shouldForwardProp: (e) => 'fullWidth' !== e,
          target: 'e1ezbkgr0',
        })(
          'width:100%;height:312px;',
          (e) => {
            let { fullWidth: i } = e;
            return !i && 'max-width: 394px;';
          },
          ' ',
          (e) => {
            let { theme: i } = e;
            return i.breakpoints.down('m');
          },
          '{width:100%;max-width:100%;}'
        ),
        h = (e) => d.$0l.percent.digits(2).trailingZero(!1).unit('%').default('-').of(e, 18);
      var m = (0, a.memo)((e) => {
        var i, n, m, g, k, f, w, A, b, Z, q;
        let {
            chainId: B,
            isLoading: x,
            errors: C,
            market: {
              collateralToken: K,
              loanToken: T,
              uniqueKey: D,
              oracle: P,
              warnings: F,
              dailyBorrowApy: M,
              dailyNetBorrowApy: O,
              rewards: V,
            },
            state: {
              initialPosition: S,
              finalMarketData: I,
              initialMarketData: U,
              preViewedMarket: L,
              preViewedPosition: X,
            },
          } = e,
          W = (0, u.B9)({ lltv: null == U ? void 0 : U.params.lltv, marketId: D }),
          R = (0, d.$4C)({
            chainId: B,
            uniqueKey: D,
            collateralAddress: null == K ? void 0 : K.address,
          }),
          _ = (0, a.useMemo)(() => (0, r.safeParseNumber)(M || 0, 18), [M]),
          N = (0, a.useMemo)(() => {
            var e;
            return (
              !!U &&
              null != S &&
              !!S.ltv &&
              !!W &&
              (0, l.M4)(null !== (e = S.ltv) && void 0 !== e ? e : 0n, W)
            );
          }, [S, U, W]),
          z = (0, a.useMemo)(() => d.$0l.percent.default('0.00').digits(2).unit('%').of(O), [O]);
        return K && T && U && !x
          ? (0, t.BX)(d.soA.Root, {
              width: '100%',
              children: [
                (0, t.BX)(d.soA.Header, {
                  children: [
                    (0, t.tZ)(d._nw, {
                      size: 'large',
                      leftAvatarProps: { src: null == K ? void 0 : K.logoURI },
                      rightAvatarProps: { src: null == T ? void 0 : T.logoURI },
                    }),
                    (0, t.BX)(d.Kqy, {
                      direction: 'column',
                      gap: 'xs',
                      children: [
                        (0, t.tZ)(d.xvT.Title.XS, {
                          children: (0, d.lAJ)({ loanAsset: T, collateralAsset: K, maxLength: 15 }),
                        }),
                        (0, t.BX)(d.Kqy, {
                          direction: 'row',
                          align: 'center',
                          gap: 4,
                          children: [
                            (0, t.tZ)(d.Vp9, {
                              variant: 'main',
                              label: h(null == U ? void 0 : U.params.lltv),
                            }),
                            (0, s.isDefined)(P) &&
                              (0, t.tZ)(p.Z, {
                                oracle: P,
                                warnings: null != F ? F : [],
                                typographyProps: { color: 'text.secondary' },
                              }),
                            (0, s.isDefined)(D) &&
                              (0, t.tZ)(d.mUV, {
                                size: 'small',
                                variant: 'ghost',
                                toCopy: D,
                                tooltipMessage: 'Copy Market ID.',
                                toastMessage: 'Market ID copied to clipboard.',
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.BX)(d.soA.List, {
                  children: [
                    (0, t.tZ)(d.soA.ListItem, {
                      warning: null == C ? void 0 : C.collateralError,
                      label: 'Collateral ('.concat(
                        (0, s.formatLongString)(null !== (k = K.symbol) && void 0 !== k ? k : ''),
                        ')'
                      ),
                      value: (0, t.tZ)(d.soA.ValueChange, {
                        initialProps: { value: (0, s.getValue)(S, 'collateral') },
                        finalProps: {
                          value: (0, s.getValue)(X, 'collateral'),
                          typographyProps: {
                            color:
                              null !==
                                (f =
                                  null == C
                                    ? void 0
                                    : null === (i = C.collateralError) || void 0 === i
                                      ? void 0
                                      : i.color) && void 0 !== f
                                ? f
                                : 'text.body',
                          },
                        },
                        formatter: (e) =>
                          (0, v.sL)({
                            price: K.price,
                            amount: e,
                            decimals: K.decimals,
                            withTrailingZero: !1,
                          }),
                      }),
                    }),
                    (0, t.tZ)(d.soA.ListItem, {
                      warning: null == C ? void 0 : C.borrowError,
                      label: 'Loan ('.concat(
                        (0, s.formatLongString)(null !== (w = T.symbol) && void 0 !== w ? w : ''),
                        ')'
                      ),
                      value: (0, t.tZ)(d.soA.ValueChange, {
                        initialProps: { value: (0, s.getValue)(S, 'borrowAssets') },
                        finalProps: {
                          value: (0, s.getValue)(X, 'borrowAssets'),
                          typographyProps: {
                            color:
                              null !==
                                (A =
                                  null == C
                                    ? void 0
                                    : null === (n = C.borrowError) || void 0 === n
                                      ? void 0
                                      : n.color) && void 0 !== A
                                ? A
                                : 'text.body',
                          },
                        },
                        formatter: (e) => {
                          var i;
                          return (0, v.sL)({
                            price: null !== (i = T.price) && void 0 !== i ? i : 0n,
                            amount: e,
                            decimals: T.decimals,
                            withTrailingZero: !1,
                          });
                        },
                      }),
                    }),
                    (0, t.tZ)(d.soA.ListItem, {
                      warning: null == C ? void 0 : C.ltvError,
                      label: (0, t.tZ)(u.gX, { marketId: D }),
                      value: (0, t.BX)(d.Kqy, {
                        direction: 'row',
                        align: 'center',
                        gap: '2px',
                        children: [
                          (0, t.tZ)(d.soA.ValueChange, {
                            initialProps: {
                              value: null == S ? void 0 : S.ltv,
                              typographyProps: { color: N ? 'text.interactive.error' : void 0 },
                            },
                            finalProps: {
                              value: (0, s.getValue)(X, 'ltv'),
                              typographyProps: {
                                color:
                                  null !==
                                    (b =
                                      null == C
                                        ? void 0
                                        : null === (m = C.ltvError) || void 0 === m
                                          ? void 0
                                          : m.color) && void 0 !== b
                                    ? b
                                    : 'text.body',
                              },
                            },
                            formatter: (e) =>
                              d.$0l.percent.unit('%').trailingZero(!1).digits(2).max(1).of(e, 18),
                          }),
                          (0, t.BX)(d.xvT.Body.XXS.Regular, {
                            display: 'flex',
                            alignItems: 'center',
                            lineHeight: 'normal',
                            gap: '2px',
                            color: 'text.body',
                            children: [
                              (0, t.tZ)(d.xvT.Inherit, { children: '/' }),
                              (0, t.tZ)(u.v1, {
                                lltv: null == U ? void 0 : U.params.lltv,
                                marketId: D,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.tZ)(d.soA.ListItem, {
                      label: 'Borrow Rate',
                      value: (0, t.tZ)(d.Kqy, {
                        gap: 2,
                        direction: 'row',
                        align: 'center',
                        children: (0, t.tZ)(c.w, {
                          RewardsHoverCardProps: {
                            apy: _,
                            rewards: V,
                            variant: 'market',
                            points: R,
                            asset: K,
                            netApy: (0, v.Pi)(O, r.safeParseNumber),
                          },
                          children: (0, t.tZ)(d.soA.Value, {
                            value: z,
                            typographyProps: { color: 'text.body' },
                          }),
                        }),
                      }),
                    }),
                    (0, t.tZ)(d.soA.ListItem, {
                      warning: null == C ? void 0 : C.liquidityError,
                      label: 'Total Liquidity ('.concat(
                        (0, s.formatLongString)(null !== (Z = T.symbol) && void 0 !== Z ? Z : ''),
                        ')'
                      ),
                      value: (0, t.tZ)(d.soA.ValueChange, {
                        initialProps: {
                          value: (0, s.transformValue)(
                            (0, s.getValue)(U, 'liquidity'),
                            o.MathLib.max.bind(void 0, 0n)
                          ),
                        },
                        finalProps: {
                          value: (0, s.transformValue)(
                            (0, s.getValue)(null != I ? I : L, 'liquidity'),
                            o.MathLib.max.bind(void 0, 0n)
                          ),
                          typographyProps: {
                            color:
                              null !==
                                (q =
                                  null == C
                                    ? void 0
                                    : null === (g = C.liquidityError) || void 0 === g
                                      ? void 0
                                      : g.color) && void 0 !== q
                                ? q
                                : 'text.body',
                          },
                        },
                        formatter: (e) => d.$0l.short.digits(2).trailingZero(!1).of(e, T.decimals),
                      }),
                    }),
                  ],
                }),
              ],
            })
          : (0, t.tZ)(y, { fullWidth: !0, borderRadius: '20px' });
      });
    },
    34571: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return l;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(27349),
        l = (0, a.memo)((e) => {
          let {
              netApy: i,
              apy: n,
              performanceFee: l,
              rewards: d,
              variant: s,
              points: u,
              isSimulated: c,
              isHoverable: p = !0,
              TextVariant: v = o.xvT.Body.XS.Regular,
              asset: y,
              withBackgroundEffect: h = !0,
            } = e,
            m = (0, a.useMemo)(() => o.$0l.percent.digits(2).unit('%').of(i, 18), [i]);
          return m
            ? (0, t.tZ)(o.KNv, {
                withBackgroundEffect: h,
                hoverCardContent: (0, t.tZ)(r.Z, {
                  netApy: i,
                  apy: n,
                  performanceFee: l,
                  rewards: d,
                  variant: s,
                  points: u,
                  asset: y,
                }),
                isDisabled: !p,
                padding: '0 11px 0 14px',
                children:
                  m &&
                  (0, t.BX)(o.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, t.tZ)(o.ZT$, {
                        TextVariant: v,
                        isSimulated: c,
                        display: 'flex',
                        alignItems: 'center',
                        lineHeight: 'normal',
                        color: 'text.body',
                        children: m,
                      }),
                      (null == d ? void 0 : d.length)
                        ? (0, t.tZ)(o.JO$, { icon: 'RewardsGradient20' })
                        : null,
                      (null == u ? void 0 : u.length)
                        ? (0, t.tZ)(o.JO$, { icon: 'PointsGradient20' })
                        : null,
                    ],
                  }),
              })
            : null;
        });
    },
    64219: function (e, i, n) {
      var t = n(78286),
        a = n(58258),
        o = n(12556),
        r = n(54655),
        l = n(48402),
        d = n(53863),
        s = n(70064),
        u = n(26726),
        c = n(50568),
        p = n(28219),
        v = n(92148),
        y = n(9629),
        h = n(32355),
        m = n(3883),
        g = n(67427);
      let k = '540px';
      i.default = (0, a.memo)((e) => {
        let {
            marketId: i,
            collateralAssetAddress: n,
            loanAssetAddress: f,
            chainId: w,
            showFeatureCallOut: A = !1,
            align: b = 'end',
            side: Z = 'top',
          } = e,
          q = (0, u.hz)({
            refinance: u.TP.POSITION_MANAGER_REFINANCE,
            repay: u.TP.POSITION_MANAGER_REPAY,
            supplyCollateral: u.TP.POSITION_MANAGER_SUPPLY_COLLATERAL,
            withdrawCollateral: u.TP.POSITION_MANAGER_WITHDRAW_COLLATERAL,
            borrowMore: u.TP.POSITION_MANAGER_BORROW_MORE,
            featureCallOut: u.TP.POSITION_MANAGER_FEATURE_CALL_OUT,
            autoDeleverage: u.TP.AUTO_DELEVERAGE,
          }),
          [B, x] = (0, a.useState)(!1),
          { toggleDialog: C } = (0, r.DAv)(),
          K = (0, r.CPt)(),
          T = (0, r.ajf)(860),
          { isRightPanelOpen: D } = (0, r.s8G)(),
          { status: P } = (0, p.P)(i);
        return (0, t.tZ)(v.Z, {
          side: 'top',
          enabled: A && q.featureCallOut && !T && !D,
          featureKey: 'position-manager',
          videoUrl: (0, o.$B)('v2/assets/videos/position-manager-feature-callout.mp4'),
          fallbackImageUrl: (0, o.$B)('v2/assets/images/position-manager-feature-callout.png'),
          title: 'Position Manager Is Live!',
          description: [
            'Introducing Position Manager – a faster way to manage your positions directly from the dashboard.',
            'No need to click into each vault or market—adjust, monitor, and optimize your positions in just a few clicks.',
          ],
          children: (e) => {
            let { visible: a, markAsSeen: o } = e;
            return (0, t.BX)(r.h_2.Root, {
              open: B,
              onOpenChange: (e) => {
                null == o || o(), x(e);
              },
              children: [
                (0, t.tZ)(r.h_2.Trigger, {
                  asChild: !0,
                  children: (0, t.tZ)('div', {
                    style: { display: 'flex' },
                    children: (0, t.tZ)(r.ua7, {
                      content: 'Manage your position.',
                      disabled: a,
                      children: (0, t.tZ)(r.zxk, {
                        'data-testid': 'position-manager-button',
                        size: 'small',
                        variant: 'ghost',
                        iconAlone: 'DotsPlain20',
                      }),
                    }),
                  }),
                }),
                (0, t.tZ)(r.h_2.Portal, {
                  children: (0, t.BX)(r.h_2.Content, {
                    align: b,
                    side: Z,
                    children: [
                      q.supplyCollateral &&
                        (0, t.BX)(r.h_2.Item, {
                          'data-testid': 'supply-collateral',
                          onClick: (e) => e.stopPropagation(),
                          onSelect: () => {
                            C((0, t.tZ)(y._, { marketId: i, chainId: w, onClose: () => C(!1) }), {
                              maxWidth: k,
                            });
                          },
                          children: [
                            (0, t.tZ)(r.JO$, { icon: 'AddPlain20', color: 'icon.primary' }),
                            'Add collateral',
                          ],
                        }),
                      q.borrowMore &&
                        (0, t.BX)(r.h_2.Item, {
                          'data-testid': 'borrow-more',
                          onClick: (e) => e.stopPropagation(),
                          onSelect: () => {
                            C((0, t.tZ)(h.q, { marketId: i, chainId: w, onClose: () => C(!1) }), {
                              maxWidth: k,
                            });
                          },
                          children: [
                            (0, t.tZ)(r.JO$, { icon: 'AddPlain20', color: 'icon.primary' }),
                            'Borrow more',
                          ],
                        }),
                      q.refinance &&
                        (0, t.BX)(r.h_2.Item, {
                          'data-testid': 'refinance',
                          disabled: !n,
                          onClick: (e) => e.stopPropagation(),
                          onSelect: () => {
                            n &&
                              C(
                                (0, t.tZ)(s.Z, {
                                  fallback: (0, t.tZ)(d.c, {}),
                                  children: (0, t.tZ)(l._, {
                                    'data-testid': 'refinance-dialog',
                                    marketId: i,
                                    collateralAddress: n,
                                    loanAddress: f,
                                  }),
                                }),
                                { maxWidth: K ? void 0 : '900px', fullSize: K }
                              );
                          },
                          children: [
                            (0, t.tZ)(r.JO$, {
                              icon: 'MovePositionPlain20',
                              color: 'icon.primary',
                            }),
                            'Refinance loan',
                          ],
                        }),
                      q.autoDeleverage &&
                        (0, t.BX)(r.h_2.Item, {
                          onClick: (e) => e.stopPropagation(),
                          onSelect: () => {
                            C((0, t.tZ)(c.F, { marketId: i, toEnable: 'unauthorized' === P }));
                          },
                          disabled: 'unauthorized' !== P && 'authorized' !== P,
                          children: [
                            (0, t.tZ)(r.JO$, { icon: 'ShieldCheckPlain20', color: 'icon.primary' }),
                            'authorized' === P ? 'Disable' : 'Enable',
                            ' ',
                            'Auto-Deleverage',
                          ],
                        }),
                      (0, t.tZ)(r.h_2.Separator, {}),
                      q.repay &&
                        (0, t.BX)(r.h_2.Item, {
                          'data-testid': 'repay',
                          onClick: (e) => e.stopPropagation(),
                          onSelect: () => {
                            x(!1),
                              C((0, t.tZ)(m.U, { marketId: i, chainId: w, onClose: () => C(!1) }), {
                                maxWidth: k,
                              });
                          },
                          children: [
                            (0, t.tZ)(r.JO$, { icon: 'RemovePlain20', color: 'icon.primary' }),
                            'Repay loan',
                          ],
                        }),
                      q.withdrawCollateral &&
                        (0, t.BX)(r.h_2.Item, {
                          'data-testid': 'withdraw',
                          onClick: (e) => e.stopPropagation(),
                          onSelect: () => {
                            x(!1),
                              C((0, t.tZ)(g.B, { marketId: i, chainId: w, onClose: () => C(!1) }), {
                                maxWidth: k,
                              });
                          },
                          children: [
                            (0, t.tZ)(r.JO$, { icon: 'RemovePlain20', color: 'icon.primary' }),
                            'Withdraw collateral',
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            });
          },
        });
      });
    },
    9629: function (e, i, n) {
      n.d(i, {
        _: function () {
          return M;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(53863),
        l = n(70064),
        d = n(12556),
        s = n(94646),
        u = n(53644),
        c = n(22683),
        p = n(34896),
        v = n(89805),
        y = n(89991),
        h = n(84030),
        m = n(18721),
        g = n(52832),
        k = n(64757),
        f = n(53745),
        w = n(66395),
        A = n(39882),
        b = n(47528),
        Z = n(45090),
        q = (0, a.memo)(() =>
          (0, t.BX)(o.Kqy, {
            direction: 'column',
            gap: '20px',
            minHeight: '500px',
            children: [
              (0, t.BX)(o.Kqy, {
                direction: 'column',
                gap: 'xs',
                children: [
                  (0, t.BX)(o.Kqy, {
                    direction: 'row',
                    justify: 'space-between',
                    children: [
                      (0, t.tZ)(o.OdW, { height: '20px', width: '170px' }),
                      (0, t.tZ)(o.OdW, { height: '20px', width: '80px' }),
                    ],
                  }),
                  (0, t.tZ)(o.OdW, { height: '87px', width: '100%', borderRadius: '20px' }),
                ],
              }),
              (0, t.tZ)(o.OdW, { height: '312px', width: '100%', borderRadius: '20px' }),
              (0, t.tZ)(o.OdW, { height: '48px', width: '100%', borderRadius: '100px' }),
            ],
          })
        ),
        B = n(55412),
        x = n(3245),
        C = n(95413),
        K = n(24387);
      function T() {
        let e = (0, B._)([
          '\n  query GetAddCollateralDialogState($uniqueKey: String!, $chainId: Int!) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      uniqueKey\n      oracleAddress\n      warnings {\n        level\n        type\n      }\n      oracleFeed {\n        baseVault\n        baseFeedOneAddress\n        baseFeedOneDescription\n        baseFeedOneVendor\n        baseFeedTwoAddress\n        baseFeedTwoDescription\n        baseFeedTwoVendor\n        quoteVault\n        quoteFeedOneAddress\n        quoteFeedOneDescription\n        quoteFeedOneVendor\n        quoteFeedTwoAddress\n        quoteFeedTwoDescription\n        quoteFeedTwoVendor\n      }\n      state {\n        id\n        dailyNetBorrowApy\n        dailyBorrowApy\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerBorrowedToken\n        }\n      }\n      collateralAsset {\n        ...simpleAssetFields\n        vault {\n          id\n          address\n        }\n      }\n      loanAsset {\n        ...simpleAssetFields\n      }\n    }\n  }\n  ',
          '\n',
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      let D = {},
        P = (0, x.Ps)(T(), K.G);
      var F = (0, a.memo)(function (e) {
          var i, n;
          let { marketId: l, chainId: B, onClose: x } = e,
            { account: K } = (0, y.Z_)(),
            { toggleRightPanel: T } = (0, o.s8G)(),
            { toggleDialog: F } = (0, o.DAv)(),
            {
              simulationError: M,
              operations: O,
              blockError: V,
              isPending: S,
              bundlerConfiguration: I,
              updateOperation: U,
              config: { addToSimulationState: L },
            } = (0, c.N)(),
            {
              data: X,
              loading: W,
              error: R,
            } = (function (e) {
              let i = { ...D, ...e };
              return C.aM(P, i);
            })({ variables: { uniqueKey: l, chainId: B } }),
            {
              isNew: _,
              inputCollateralAmount: N,
              setInputCollateralAmount: z,
              maxCollateral: $,
              isLoading: E,
              isMaxCollateral: H,
              setIsMaxCollateral: G,
              inputLoanAmount: Y,
              initialState: j,
              localOperation: J,
              confirm: Q,
              peripheralTokenOptions: ee,
              onPeripheralTokenOptionChange: ei,
              hasModifiedSupplyOperation: en,
            } = (0, m.f)(l, { origin: 'position-manager' }),
            [et, ea, , eo] = (0, v._)(j.data, J, I, _),
            { initialData: er, finalData: el } = (0, h.Z)(l, K.address, et),
            ed = (0, A.t)({
              market: null == X ? void 0 : X.marketByUniqueKey,
              withSharedLiquidity: !1,
            });
          (0, a.useEffect)(() => {
            L(ed);
          }, [ed, L]);
          let es = (0, a.useMemo)(
              () => (0, d.wk)(null == X ? void 0 : X.marketByUniqueKey.loanAsset),
              [null == X ? void 0 : X.marketByUniqueKey.loanAsset]
            ),
            eu = (0, a.useMemo)(
              () => (0, d.wk)(null == X ? void 0 : X.marketByUniqueKey.collateralAsset),
              [null == X ? void 0 : X.marketByUniqueKey.collateralAsset]
            ),
            ec = (0, w.Z)(eo, null == ea ? void 0 : ea.message),
            ep = (0, f.Z)(K.address, j.data, null == eu ? void 0 : eu.address),
            ev = (0, a.useMemo)(
              () => !!ea || !!eo || !!K.isWrongChain || !(0, p.H)(J),
              [K.isWrongChain, eo, J, ea]
            ),
            ey = (0, g.Z)(ec, K.isWrongChain),
            { confirmButtonLabel: eh, bundlerButtonLabel: em } = (0, k.Z)({
              operationLabel: 'add collateral',
              inputCollateralAmount: N,
              inputLoanAmount: Y,
              isNew: _,
              localErrorMessage: ec,
              operations: O,
              simulationError: M,
              blockError: V,
              isPending: S,
              isConfirmDisabled: ev,
              hasModifiedOperation: en,
            }),
            eg = (0, a.useMemo)(
              () => (V && S) || !!ec || !!M || !(0, p.H)(J) || K.isWrongChain || !ep,
              [K.isWrongChain, V, ep, S, ec, J, M]
            ),
            ek = (0, a.useCallback)(() => {
              F((0, t.tZ)(s.Z, { operations: [J] }));
            }, [J, F]),
            ef = (0, a.useCallback)(() => {
              _ ? Q() : en && U(J.id, () => J), T(!0), x();
            }, [Q, en, _, x, T, U, J]),
            ew = (0, b.H)(null == X ? void 0 : X.marketByUniqueKey),
            eA = (null == X ? void 0 : X.marketByUniqueKey.oracleAddress)
              ? { address: X.marketByUniqueKey.oracleAddress, ...X.marketByUniqueKey.oracleFeed }
              : void 0;
          return E || W
            ? (0, t.tZ)(q, {})
            : !R && es && eu
              ? (0, t.BX)(t.HY, {
                  children: [
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 2,
                      children: [
                        (0, t.tZ)(o.TGk, {
                          header: 'Supply Collateral '.concat(null == eu ? void 0 : eu.symbol),
                          amount: N,
                          token: eu,
                          onChange: z,
                          maxValue: null == $ ? void 0 : $.assets,
                          onMaxClick: G,
                          isMax: H,
                          peripheralTokenOptions: ee,
                          onPeripheralTokenChange: ei,
                        }),
                        !ep && (0, t.tZ)(u.r, { tokenAddress: eu.address }),
                      ],
                    }),
                    (0, t.tZ)(Z.F, {
                      chainId: B,
                      market: {
                        uniqueKey: l,
                        loanToken: es,
                        collateralToken: eu,
                        rewards: ew,
                        oracle: eA,
                        warnings: null == X ? void 0 : X.marketByUniqueKey.warnings,
                        dailyBorrowApy:
                          null == X
                            ? void 0
                            : null === (i = X.marketByUniqueKey.state) || void 0 === i
                              ? void 0
                              : i.dailyBorrowApy,
                        dailyNetBorrowApy:
                          null == X
                            ? void 0
                            : null === (n = X.marketByUniqueKey.state) || void 0 === n
                              ? void 0
                              : n.dailyNetBorrowApy,
                      },
                      state: {
                        initialMarketData: er.market,
                        finalMarketData: el.market,
                        initialPosition: er.position,
                        finalPosition: el.position,
                        preViewedMarket: el.market,
                        preViewedPosition: el.position,
                      },
                    }),
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === O.length &&
                          (0, t.tZ)(o.ua7, {
                            content: ey,
                            disabled: !ey,
                            children: (0, t.tZ)(o.zxk, {
                              size: 'big',
                              variant: eg ? 'secondary' : 'primary',
                              label: eh,
                              onClick: ek,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: ev,
                            }),
                          }),
                        (O.length > 0 || !ev) &&
                          (0, t.tZ)(o.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: ef,
                            label: em,
                            'data-testid': 'bundler-button',
                            disabled: eg,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, t.tZ)(r.c, { minHeight: '400px' });
        }),
        M = (0, a.memo)(function (e) {
          let { toggleDialog: i } = (0, o.DAv)();
          return (0, t.BX)(o.Kqy, {
            'data-testid': 'repay-dialog',
            direction: 'column',
            gap: 20,
            children: [
              (0, t.BX)(o.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, t.tZ)(o.xvT.Title.S, { children: 'Add Collateral' }),
                  (0, t.tZ)(o.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => i(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, t.tZ)(l.Z, {
                fallback: (0, t.tZ)(r.c, { minHeight: '494px' }),
                children: (0, t.tZ)(F, { ...e }),
              }),
            ],
          });
        });
    },
    32355: function (e, i, n) {
      n.d(i, {
        q: function () {
          return S;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(53863),
        l = n(70064),
        d = n(17965),
        s = n(12556),
        u = n(35047),
        c = n(94646),
        p = n(53644),
        v = n(22683),
        y = n(34896),
        h = n(89805),
        m = n(89991),
        g = n(84030),
        k = n(18721),
        f = n(52832),
        w = n(64757),
        A = n(53745),
        b = n(66395),
        Z = n(39882),
        q = n(47528),
        B = n(725),
        x = n(45090),
        C = (0, a.memo)(() =>
          (0, t.BX)(o.Kqy, {
            direction: 'column',
            gap: '20px',
            minHeight: '500px',
            children: [
              (0, t.BX)(o.Kqy, {
                direction: 'column',
                gap: 'xs',
                children: [
                  (0, t.BX)(o.Kqy, {
                    direction: 'row',
                    justify: 'space-between',
                    children: [
                      (0, t.tZ)(o.OdW, { height: '20px', width: '170px' }),
                      (0, t.tZ)(o.OdW, { height: '20px', width: '80px' }),
                    ],
                  }),
                  (0, t.tZ)(o.OdW, { height: '87px', width: '100%', borderRadius: '20px' }),
                ],
              }),
              (0, t.tZ)(o.OdW, { height: '312px', width: '100%', borderRadius: '20px' }),
              (0, t.tZ)(o.OdW, { height: '48px', width: '100%', borderRadius: '100px' }),
            ],
          })
        ),
        K = n(55412),
        T = n(3245),
        D = n(95413),
        P = n(24387);
      function F() {
        let e = (0, K._)([
          '\n  query GetBorrowMoreDialogState($uniqueKey: String!, $chainId: Int!) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      uniqueKey\n      oracleAddress\n      warnings {\n        level\n        type\n      }\n      oracleFeed {\n        baseVault\n        baseFeedOneAddress\n        baseFeedOneDescription\n        baseFeedOneVendor\n        baseFeedTwoAddress\n        baseFeedTwoDescription\n        baseFeedTwoVendor\n        quoteVault\n        quoteFeedOneAddress\n        quoteFeedOneDescription\n        quoteFeedOneVendor\n        quoteFeedTwoAddress\n        quoteFeedTwoDescription\n        quoteFeedTwoVendor\n      }\n      state {\n        id\n        dailyNetBorrowApy\n        dailyBorrowApy\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerBorrowedToken\n        }\n      }\n      collateralAsset {\n        ...simpleAssetFields\n      }\n      loanAsset {\n        ...simpleAssetFields\n      }\n      publicAllocatorSharedLiquidity {\n        id\n        vault {\n          id\n          address\n          asset {\n            id\n            address\n          }\n          publicAllocatorConfig {\n            flowCaps {\n              market {\n                id\n                uniqueKey\n                loanAsset {\n                  id\n                  address\n                }\n                collateralAsset {\n                  id\n                  address\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  ',
          '\n',
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      let M = {},
        O = (0, T.Ps)(F(), P.G);
      var V = (0, a.memo)(function (e) {
          var i, n, l, K;
          let { marketId: T, chainId: P, onClose: F } = e,
            { account: V } = (0, m.Z_)(),
            { toggleRightPanel: S } = (0, o.s8G)(),
            { toggleDialog: I } = (0, o.DAv)(),
            {
              simulationError: U,
              operations: L,
              blockError: X,
              isPending: W,
              bundlerConfiguration: R,
              updateOperation: _,
              config: { addToSimulationState: N },
            } = (0, v.N)(),
            {
              data: z,
              loading: $,
              error: E,
            } = (function (e) {
              let i = { ...M, ...e };
              return D.aM(O, i);
            })({ variables: { uniqueKey: T, chainId: P } }),
            {
              isNew: H,
              inputCollateralAmount: G,
              setInputLoanAmount: Y,
              maxLoan: j,
              isLoading: J,
              setIsMaxLoan: Q,
              isMaxLoan: ee,
              inputLoanAmount: ei,
              initialState: en,
              localOperation: et,
              confirm: ea,
              hasModifiedBorrowMoreOperation: eo,
            } = (0, k.f)(T, { origin: 'position-manager' }),
            [er, el, , ed] = (0, h._)(en.data, et, R, H),
            { initialData: es, finalData: eu } = (0, g.Z)(T, V.address, er),
            ec = (0, B.B9)({
              lltv: null === (i = eu.position) || void 0 === i ? void 0 : i.market.params.lltv,
              marketId: T,
            }),
            ep = (0, a.useMemo)(() => {
              var e;
              let i = null === (e = eu.position) || void 0 === e ? void 0 : e.ltv;
              if (i && ec) return (0, s.M4)(i, ec);
            }, [null === (n = eu.position) || void 0 === n ? void 0 : n.ltv, ec]),
            ev = (0, a.useMemo)(() => {
              if (
                (eu.position && !eu.position.isHealthy) ||
                ((0, u.getValue)(eu.position, 'ltv') && ec && ep)
              )
                return {
                  level: d.WarningLevel.Red,
                  message: "You're close to being liquidated.",
                  color: 'text.interactive.error',
                };
            }, [eu.position, ep, ec]),
            ey = (0, Z.t)({
              market: null == z ? void 0 : z.marketByUniqueKey,
              withSharedLiquidity: !0,
            });
          (0, a.useEffect)(() => {
            N(ey);
          }, [ey, N]);
          let eh = (0, a.useMemo)(
              () => (0, s.wk)(null == z ? void 0 : z.marketByUniqueKey.loanAsset),
              [null == z ? void 0 : z.marketByUniqueKey.loanAsset]
            ),
            em = (0, a.useMemo)(
              () => (0, s.wk)(null == z ? void 0 : z.marketByUniqueKey.collateralAsset),
              [null == z ? void 0 : z.marketByUniqueKey.collateralAsset]
            ),
            eg = (0, b.Z)(ed, null == el ? void 0 : el.message),
            ek = (0, A.Z)(V.address, en.data, null == eh ? void 0 : eh.address),
            ef = (0, a.useMemo)(
              () => !!el || !!ed || !ek || !!V.isWrongChain || !(0, y.H)(et),
              [V.isWrongChain, ek, ed, et, el]
            ),
            { confirmButtonLabel: ew, bundlerButtonLabel: eA } = (0, w.Z)({
              operationLabel: 'borrow',
              inputCollateralAmount: G,
              inputLoanAmount: ei,
              isNew: H,
              localErrorMessage: eg,
              operations: L,
              simulationError: U,
              blockError: X,
              isPending: W,
              isConfirmDisabled: ef,
              hasModifiedOperation: eo,
            }),
            eb = (0, f.Z)(eg, V.isWrongChain),
            eZ = (0, a.useMemo)(
              () => (X && W) || !!eg || !!U || !(0, y.H)(et) || V.isWrongChain || !ek,
              [V.isWrongChain, X, ek, W, eg, et, U]
            ),
            eq = (0, q.H)(null == z ? void 0 : z.marketByUniqueKey),
            eB = (null == z ? void 0 : z.marketByUniqueKey.oracleAddress)
              ? { address: z.marketByUniqueKey.oracleAddress, ...z.marketByUniqueKey.oracleFeed }
              : void 0,
            ex = (0, a.useCallback)(() => {
              I((0, t.tZ)(c.Z, { operations: [et] }));
            }, [et, I]),
            eC = (0, a.useCallback)(() => {
              H ? ea() : eo && _(et.id, () => et), S(!0), F();
            }, [ea, eo, H, F, S, _, et]);
          return J || $
            ? (0, t.tZ)(C, {})
            : !E && eh && em
              ? (0, t.BX)(t.HY, {
                  children: [
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 2,
                      children: [
                        (0, t.tZ)(o.TGk, {
                          header: 'Borrow '.concat(null == eh ? void 0 : eh.symbol),
                          amount: ei,
                          token: eh,
                          onChange: Y,
                          maxValue: null == j ? void 0 : j.assets,
                          onMaxClick: Q,
                          isMax: ee,
                        }),
                        !ek && (0, t.tZ)(p.r, { tokenAddress: eh.address }),
                      ],
                    }),
                    (0, t.tZ)(x.F, {
                      errors: { ltvError: ev },
                      chainId: P,
                      market: {
                        uniqueKey: T,
                        loanToken: eh,
                        collateralToken: em,
                        rewards: eq,
                        oracle: eB,
                        warnings: null == z ? void 0 : z.marketByUniqueKey.warnings,
                        dailyBorrowApy:
                          null == z
                            ? void 0
                            : null === (l = z.marketByUniqueKey.state) || void 0 === l
                              ? void 0
                              : l.dailyBorrowApy,
                        dailyNetBorrowApy:
                          null == z
                            ? void 0
                            : null === (K = z.marketByUniqueKey.state) || void 0 === K
                              ? void 0
                              : K.dailyNetBorrowApy,
                      },
                      state: {
                        initialMarketData: es.market,
                        initialPosition: es.position,
                        finalMarketData: eu.market,
                        finalPosition: eu.position,
                        preViewedMarket: eu.market,
                        preViewedPosition: eu.position,
                      },
                    }),
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === L.length &&
                          (0, t.tZ)(o.ua7, {
                            content: eb,
                            disabled: !eb,
                            children: (0, t.tZ)(o.zxk, {
                              size: 'big',
                              variant: ef ? 'secondary' : 'primary',
                              label: ew,
                              onClick: ex,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: ef,
                            }),
                          }),
                        (L.length > 0 || !ef) &&
                          (0, t.tZ)(o.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: eC,
                            label: eA,
                            'data-testid': 'bundler-button',
                            disabled: eZ,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, t.tZ)(r.c, { minHeight: '400px' });
        }),
        S = (0, a.memo)(function (e) {
          let { toggleDialog: i } = (0, o.DAv)();
          return (0, t.BX)(o.Kqy, {
            'data-testid': 'repay-dialog',
            direction: 'column',
            gap: 20,
            children: [
              (0, t.BX)(o.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, t.tZ)(o.xvT.Title.S, { children: 'Increase Loan' }),
                  (0, t.tZ)(o.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => i(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, t.tZ)(l.Z, {
                fallback: (0, t.tZ)(r.c, { minHeight: '494px' }),
                children: (0, t.tZ)(V, { ...e }),
              }),
            ],
          });
        });
    },
    3883: function (e, i, n) {
      n.d(i, {
        U: function () {
          return M;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(53863),
        l = n(70064),
        d = n(12556),
        s = n(94646),
        u = n(53644),
        c = n(22683),
        p = n(34896),
        v = n(89805),
        y = n(89991),
        h = n(84030),
        m = n(91622),
        g = n(52832),
        k = n(64757),
        f = n(53745),
        w = n(66395),
        A = n(39882),
        b = n(47528),
        Z = n(45090),
        q = (0, a.memo)(() =>
          (0, t.BX)(o.Kqy, {
            direction: 'column',
            gap: '20px',
            minHeight: '500px',
            children: [
              (0, t.BX)(o.Kqy, {
                direction: 'column',
                gap: 'xs',
                children: [
                  (0, t.BX)(o.Kqy, {
                    direction: 'row',
                    justify: 'space-between',
                    children: [
                      (0, t.tZ)(o.OdW, { height: '20px', width: '170px' }),
                      (0, t.tZ)(o.OdW, { height: '20px', width: '80px' }),
                    ],
                  }),
                  (0, t.tZ)(o.OdW, { height: '87px', width: '100%', borderRadius: '20px' }),
                ],
              }),
              (0, t.tZ)(o.OdW, { height: '312px', width: '100%', borderRadius: '20px' }),
              (0, t.tZ)(o.OdW, { height: '48px', width: '100%', borderRadius: '100px' }),
            ],
          })
        ),
        B = n(55412),
        x = n(3245),
        C = n(95413),
        K = n(24387);
      function T() {
        let e = (0, B._)([
          '\n  query GetRepayDialogState($uniqueKey: String!, $chainId: Int!) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      uniqueKey\n      oracleAddress\n      warnings {\n        level\n        type\n      }\n      oracleFeed {\n        baseVault\n        baseFeedOneAddress\n        baseFeedOneDescription\n        baseFeedOneVendor\n        baseFeedTwoAddress\n        baseFeedTwoDescription\n        baseFeedTwoVendor\n        quoteVault\n        quoteFeedOneAddress\n        quoteFeedOneDescription\n        quoteFeedOneVendor\n        quoteFeedTwoAddress\n        quoteFeedTwoDescription\n        quoteFeedTwoVendor\n      }\n      state {\n        id\n        dailyNetBorrowApy\n        dailyBorrowApy\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerBorrowedToken\n        }\n      }\n      collateralAsset {\n        ...simpleAssetFields\n      }\n      loanAsset {\n        ...simpleAssetFields\n      }\n    }\n  }\n  ',
          '\n',
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      let D = {},
        P = (0, x.Ps)(T(), K.G);
      var F = (0, a.memo)((e) => {
          var i, n;
          let { marketId: l, chainId: B, onClose: x } = e,
            { account: K } = (0, y.Z_)(),
            { toggleRightPanel: T } = (0, o.s8G)(),
            { toggleDialog: F } = (0, o.DAv)(),
            {
              simulationError: M,
              operations: O,
              blockError: V,
              isPending: S,
              bundlerConfiguration: I,
              updateOperation: U,
              config: { addToSimulationState: L },
            } = (0, c.N)(),
            {
              data: X,
              loading: W,
              error: R,
            } = (function (e) {
              let i = { ...D, ...e };
              return C.aM(P, i);
            })({ variables: { uniqueKey: l, chainId: B } }),
            _ = (0, A.t)({
              market: null == X ? void 0 : X.marketByUniqueKey,
              withSharedLiquidity: !1,
            });
          (0, a.useEffect)(() => {
            L(_);
          }, [_, L]);
          let N = (0, a.useMemo)(
              () => (0, d.wk)(null == X ? void 0 : X.marketByUniqueKey.loanAsset),
              [null == X ? void 0 : X.marketByUniqueKey.loanAsset]
            ),
            z = (0, a.useMemo)(
              () => (0, d.wk)(null == X ? void 0 : X.marketByUniqueKey.collateralAsset),
              [null == X ? void 0 : X.marketByUniqueKey.collateralAsset]
            ),
            {
              isNew: $,
              inputCollateralAmount: E,
              setInputLoanAmount: H,
              maxLoan: G,
              isLoading: Y,
              isMaxLoan: j,
              setIsMaxLoan: J,
              inputLoanAmount: Q,
              initialState: ee,
              localOperation: ei,
              peripheralTokenOptions: en,
              confirmLoan: et,
              onPeripheralTokenOptionChange: ea,
              hasModifiedRepayOperation: eo,
            } = (0, m.O)(l, { origin: 'position-manager' }),
            [er, el, , ed] = (0, v._)(ee.data, ei, I, $),
            { initialData: es, finalData: eu } = (0, h.Z)(l, K.address, er),
            ec = (0, w.Z)(ed, null == el ? void 0 : el.message),
            ep = (0, f.Z)(K.address, ee.data, null == N ? void 0 : N.address),
            ev = (0, a.useMemo)(
              () => !!el || !!ed || !ep || !!K.isWrongChain || !(0, p.H)(ei),
              [K.isWrongChain, ep, ed, ei, el]
            ),
            ey = (0, g.Z)(ec, K.isWrongChain),
            { confirmButtonLabel: eh, bundlerButtonLabel: em } = (0, k.Z)({
              operationLabel: 'repay',
              inputCollateralAmount: E,
              inputLoanAmount: Q,
              isNew: $,
              localErrorMessage: ec,
              operations: O,
              simulationError: M,
              blockError: V,
              isPending: S,
              isConfirmDisabled: ev,
              hasModifiedOperation: eo,
            }),
            eg = (0, a.useMemo)(
              () => (V && S) || !!ec || !!M || !(0, p.H)(ei) || K.isWrongChain || !ep,
              [K.isWrongChain, V, ep, S, ec, ei, M]
            ),
            ek = (0, b.H)(null == X ? void 0 : X.marketByUniqueKey),
            ef = (null == X ? void 0 : X.marketByUniqueKey.oracleAddress)
              ? { address: X.marketByUniqueKey.oracleAddress, ...X.marketByUniqueKey.oracleFeed }
              : void 0,
            ew = (0, a.useCallback)(() => {
              F((0, t.tZ)(s.Z, { operations: [ei] }));
            }, [ei, F]),
            eA = (0, a.useCallback)(() => {
              $ ? et() : eo && U(ei.id, () => ei), T(!0), x();
            }, [et, eo, $, x, T, U, ei]);
          return Y || W
            ? (0, t.tZ)(q, {})
            : !R && N && z
              ? (0, t.BX)(t.HY, {
                  children: [
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 2,
                      children: [
                        (0, t.tZ)(o.TGk, {
                          header: 'Repay '.concat(null == N ? void 0 : N.symbol),
                          amount: Q,
                          token: N,
                          onChange: H,
                          maxValue: null == G ? void 0 : G.assets,
                          onMaxClick: J,
                          isMax: j,
                          peripheralTokenOptions: en,
                          onPeripheralTokenChange: ea,
                          disabled: Y,
                        }),
                        !ep && (0, t.tZ)(u.r, { tokenAddress: N.address }),
                      ],
                    }),
                    (0, t.tZ)(Z.F, {
                      chainId: B,
                      market: {
                        uniqueKey: l,
                        loanToken: N,
                        collateralToken: z,
                        rewards: ek,
                        oracle: ef,
                        warnings: null == X ? void 0 : X.marketByUniqueKey.warnings,
                        dailyBorrowApy:
                          null == X
                            ? void 0
                            : null === (i = X.marketByUniqueKey.state) || void 0 === i
                              ? void 0
                              : i.dailyBorrowApy,
                        dailyNetBorrowApy:
                          null == X
                            ? void 0
                            : null === (n = X.marketByUniqueKey.state) || void 0 === n
                              ? void 0
                              : n.dailyNetBorrowApy,
                      },
                      state: {
                        initialMarketData: es.market,
                        initialPosition: es.position,
                        finalMarketData: eu.market,
                        finalPosition: eu.position,
                        preViewedMarket: eu.market,
                        preViewedPosition: eu.position,
                      },
                    }),
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === O.length &&
                          (0, t.tZ)(o.ua7, {
                            content: ey,
                            disabled: !ey,
                            children: (0, t.tZ)(o.zxk, {
                              size: 'big',
                              variant: ev ? 'secondary' : 'primary',
                              label: eh,
                              onClick: ew,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: ev,
                            }),
                          }),
                        (O.length > 0 || !ev) &&
                          (0, t.tZ)(o.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: eA,
                            label: em,
                            'data-testid': 'bundler-button',
                            disabled: eg,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, t.tZ)(r.c, { minHeight: '400px' });
        }),
        M = (0, a.memo)(function (e) {
          let { toggleDialog: i } = (0, o.DAv)();
          return (0, t.BX)(o.Kqy, {
            'data-testid': 'repay-dialog',
            direction: 'column',
            gap: 20,
            children: [
              (0, t.BX)(o.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, t.tZ)(o.xvT.Title.S, { children: 'Repay Loan' }),
                  (0, t.tZ)(o.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => i(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, t.tZ)(l.Z, {
                fallback: (0, t.tZ)(r.c, { minHeight: '494px' }),
                children: (0, t.tZ)(F, { ...e }),
              }),
            ],
          });
        });
    },
    67427: function (e, i, n) {
      n.d(i, {
        B: function () {
          return S;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(53863),
        l = n(70064),
        d = n(17965),
        s = n(12556),
        u = n(35047),
        c = n(94646),
        p = n(53644),
        v = n(22683),
        y = n(34896),
        h = n(89805),
        m = n(89991),
        g = n(84030),
        k = n(91622),
        f = n(52832),
        w = n(64757),
        A = n(53745),
        b = n(66395),
        Z = n(39882),
        q = n(47528),
        B = n(725),
        x = n(45090),
        C = (0, a.memo)(() =>
          (0, t.BX)(o.Kqy, {
            direction: 'column',
            gap: '20px',
            minHeight: '500px',
            children: [
              (0, t.BX)(o.Kqy, {
                direction: 'column',
                gap: 'xs',
                children: [
                  (0, t.BX)(o.Kqy, {
                    direction: 'row',
                    justify: 'space-between',
                    children: [
                      (0, t.tZ)(o.OdW, { height: '20px', width: '170px' }),
                      (0, t.tZ)(o.OdW, { height: '20px', width: '80px' }),
                    ],
                  }),
                  (0, t.tZ)(o.OdW, { height: '87px', width: '100%', borderRadius: '20px' }),
                ],
              }),
              (0, t.tZ)(o.OdW, { height: '312px', width: '100%', borderRadius: '20px' }),
              (0, t.tZ)(o.OdW, { height: '48px', width: '100%', borderRadius: '100px' }),
            ],
          })
        ),
        K = n(55412),
        T = n(3245),
        D = n(95413),
        P = n(24387);
      function F() {
        let e = (0, K._)([
          '\n  query GetWithdrawCollateralDialogState($uniqueKey: String!, $chainId: Int!) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      uniqueKey\n      oracleAddress\n      warnings {\n        level\n        type\n      }\n      oracleFeed {\n        baseVault\n        baseFeedOneAddress\n        baseFeedOneDescription\n        baseFeedOneVendor\n        baseFeedTwoAddress\n        baseFeedTwoDescription\n        baseFeedTwoVendor\n        quoteVault\n        quoteFeedOneAddress\n        quoteFeedOneDescription\n        quoteFeedOneVendor\n        quoteFeedTwoAddress\n        quoteFeedTwoDescription\n        quoteFeedTwoVendor\n      }\n      state {\n        id\n        dailyNetBorrowApy\n        dailyBorrowApy\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerBorrowedToken\n        }\n      }\n      collateralAsset {\n        ...simpleAssetFields\n      }\n      loanAsset {\n        ...simpleAssetFields\n      }\n    }\n  }\n  ',
          '\n',
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      let M = {},
        O = (0, T.Ps)(F(), P.G);
      var V = (0, a.memo)((e) => {
          var i, n, l;
          let { marketId: K, chainId: T, onClose: P } = e,
            { account: F } = (0, m.Z_)(),
            { toggleRightPanel: V } = (0, o.s8G)(),
            { toggleDialog: S } = (0, o.DAv)(),
            {
              simulationError: I,
              operations: U,
              blockError: L,
              isPending: X,
              bundlerConfiguration: W,
              updateOperation: R,
              config: { addToSimulationState: _ },
            } = (0, v.N)(),
            {
              data: N,
              error: z,
              loading: $,
            } = (function (e) {
              let i = { ...M, ...e };
              return D.aM(O, i);
            })({ variables: { uniqueKey: K, chainId: T } }),
            E = (0, Z.t)({
              market: null == N ? void 0 : N.marketByUniqueKey,
              withSharedLiquidity: !1,
            });
          (0, a.useEffect)(() => {
            _(E);
          }, [E, _]);
          let H = (0, s.wk)(null == N ? void 0 : N.marketByUniqueKey.loanAsset),
            G = (0, s.wk)(null == N ? void 0 : N.marketByUniqueKey.collateralAsset),
            {
              isNew: Y,
              inputCollateralAmount: j,
              setInputCollateralAmount: J,
              maxCollateral: Q,
              isLoading: ee,
              isMaxCollateral: ei,
              setIsMaxCollateral: en,
              inputLoanAmount: et,
              initialState: ea,
              localOperation: eo,
              confirm: er,
              hasModifiedWithdrawOperation: el,
            } = (0, k.O)(K, { origin: 'position-manager' }),
            [ed, es, , eu] = (0, h._)(ea.data, eo, W, Y),
            { initialData: ec, finalData: ep } = (0, g.Z)(K, F.address, ed),
            ev = (0, b.Z)(eu, null == es ? void 0 : es.message),
            ey = (0, A.Z)(F.address, ea.data, null == G ? void 0 : G.address),
            eh = (0, a.useMemo)(
              () => !!es || !!eu || !!F.isWrongChain || !(0, y.H)(eo),
              [F.isWrongChain, eu, eo, es]
            ),
            em = (0, f.Z)(ev, F.isWrongChain),
            { confirmButtonLabel: eg, bundlerButtonLabel: ek } = (0, w.Z)({
              operationLabel: 'withdraw',
              inputCollateralAmount: j,
              inputLoanAmount: et,
              isNew: Y,
              localErrorMessage: ev,
              operations: U,
              simulationError: I,
              blockError: L,
              isPending: X,
              isConfirmDisabled: eh,
              hasModifiedOperation: el,
            }),
            ef = (0, q.H)(null == N ? void 0 : N.marketByUniqueKey),
            ew = (null == N ? void 0 : N.marketByUniqueKey.oracleAddress)
              ? { address: N.marketByUniqueKey.oracleAddress, ...N.marketByUniqueKey.oracleFeed }
              : void 0,
            eA = (0, a.useMemo)(
              () => (L && X) || !!ev || !!I || !(0, y.H)(eo) || F.isWrongChain || !ey,
              [F.isWrongChain, L, ey, X, ev, eo, I]
            ),
            eb = (0, a.useCallback)(() => {
              S((0, t.tZ)(c.Z, { operations: [eo] }));
            }, [eo, S]),
            eZ = (0, a.useCallback)(() => {
              Y ? er() : el && R(eo.id, () => eo), V(!0), P();
            }, [er, el, Y, P, V, R, eo]),
            eq = (0, B.B9)({
              lltv: null === (i = ep.market) || void 0 === i ? void 0 : i.params.lltv,
              marketId: K,
            }),
            eB = (0, a.useMemo)(() => {
              let e = (0, u.getValue)(ep.position, 'ltv');
              if (e && eq && (0, s.M4)(e, eq))
                return {
                  level: d.WarningLevel.Red,
                  message: "You're close to being liquidated.",
                  color: 'text.interactive.error',
                };
            }, [eq, ep.position]);
          return ee || $
            ? (0, t.tZ)(C, {})
            : !z && H && G
              ? (0, t.BX)(t.HY, {
                  children: [
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 2,
                      children: [
                        G &&
                          (0, t.tZ)(o.TGk, {
                            header: 'Withdraw Collateral '.concat(G.symbol),
                            amount: j,
                            token: G,
                            onChange: J,
                            maxValue: null == Q ? void 0 : Q.assets,
                            onMaxClick: en,
                            isMax: ei,
                            maxTooltip: 'Max withdraws collateral up to LLTV - LTV = 5%',
                          }),
                        !ey && G && (0, t.tZ)(p.r, { tokenAddress: G.address }),
                      ],
                    }),
                    (null == N ? void 0 : N.marketByUniqueKey.loanAsset) &&
                      (0, t.tZ)(x.F, {
                        chainId: T,
                        market: {
                          uniqueKey: K,
                          loanToken: H,
                          collateralToken: G,
                          rewards: ef,
                          oracle: ew,
                          warnings: null == N ? void 0 : N.marketByUniqueKey.warnings,
                          dailyBorrowApy:
                            null == N
                              ? void 0
                              : null === (n = N.marketByUniqueKey.state) || void 0 === n
                                ? void 0
                                : n.dailyBorrowApy,
                          dailyNetBorrowApy:
                            null == N
                              ? void 0
                              : null === (l = N.marketByUniqueKey.state) || void 0 === l
                                ? void 0
                                : l.dailyNetBorrowApy,
                        },
                        state: {
                          initialPosition: ec.position,
                          finalPosition: ep.position,
                          preViewedPosition: ep.position,
                          initialMarketData: ec.market,
                          finalMarketData: ep.market,
                          preViewedMarket: ep.market,
                        },
                        errors: { ltvError: eB },
                      }),
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === U.length &&
                          (0, t.tZ)(o.ua7, {
                            content: em,
                            disabled: !em,
                            children: (0, t.tZ)(o.zxk, {
                              size: 'big',
                              variant: eA ? 'secondary' : 'primary',
                              label: eg,
                              onClick: eb,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: eh,
                            }),
                          }),
                        (U.length > 0 || !eh) &&
                          (0, t.tZ)(o.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: eZ,
                            label: ek,
                            'data-testid': 'bundler-button',
                            disabled: eA,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, t.tZ)(r.c, { minHeight: '400px' });
        }),
        S = (0, a.memo)((e) => {
          let { toggleDialog: i } = (0, o.DAv)();
          return (0, t.BX)(o.Kqy, {
            'data-testid': 'repay-dialog',
            direction: 'column',
            gap: 20,
            children: [
              (0, t.BX)(o.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, t.tZ)(o.xvT.Title.S, { children: 'Withdraw Collateral' }),
                  (0, t.tZ)(o.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => i(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, t.tZ)(l.Z, {
                fallback: (0, t.tZ)(r.c, { minHeight: '494px' }),
                children: (0, t.tZ)(V, { ...e }),
              }),
            ],
          });
        });
    },
    59934: function (e, i, n) {
      n.d(i, {
        N: function () {
          return d;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(89991);
      let l = (0, n(38819).Z)(o.Kqy, { target: 'ernm57p0' })(
        'padding-bottom:',
        (e) => {
          let { theme: i } = e;
          return i.spacing.s;
        },
        ';',
        (e) => {
          let { theme: i } = e;
          return i.breakpoints.down('s');
        },
        '{order:-1;padding-bottom:0;}'
      );
      var d = (0, a.memo)((e) => {
        let {
            isLoading: i,
            isNew: n,
            handleFinalize: a,
            handleConfirm: d,
            finalizeLabel: s,
            tooltipContent: u,
            isFinalizeDisabled: c,
            isConfirmDisabled: p,
          } = e,
          { account: v, modal: y } = (0, r.Z_)(),
          h = (0, o.ajf)('s');
        return (0, t.tZ)(t.HY, {
          children: v.isConnected
            ? (0, t.tZ)(o.Kqy, {
                direction: 'column',
                gap: 8,
                align: 'stretch',
                justify: 'start',
                style: { paddingBottom: 12 },
                children: i
                  ? (0, t.tZ)(o.zxk, {
                      variant: 'secondary',
                      size: 'big',
                      disabled: !0,
                      iconLeft: 'AlertPlain20',
                      label: 'Loading onchain state',
                    })
                  : (0, t.BX)(t.HY, {
                      children: [
                        (0, t.tZ)(o.ua7, {
                          content: u,
                          disabled: !u,
                          children: (0, t.tZ)(o.zxk, {
                            size: 'big',
                            autoCapitalize: 'on',
                            variant: c ? 'secondary' : 'primary',
                            label: s,
                            disabled: c,
                            onClick: a,
                            shortenByWidth: 220,
                            'data-testid': 'finalize-button',
                          }),
                        }),
                        !h &&
                          !p &&
                          (0, t.tZ)(o.zxk, {
                            autoCapitalize: 'on',
                            variant: 'secondary',
                            size: 'big',
                            onClick: d,
                            label: n ? 'Add to bundler' : 'View in bundler',
                            'data-testid': 'add-to-bundler-button',
                          }),
                      ],
                    }),
              })
            : (0, t.tZ)(l, {
                direction: 'column',
                gap: 8,
                align: 'stretch',
                justify: 'start',
                children: (0, t.tZ)(o.zxk, {
                  variant: 'primary',
                  size: 'big',
                  onClick: () => y.open(),
                  label: 'Connect Wallet',
                }),
              }),
        });
      });
    },
    91540: function (e, i, n) {
      n.d(i, {
        z: function () {
          return u;
        },
      });
      var t = n(40252),
        a = n(4565),
        o = n(12556),
        r = n(54655),
        l = n(35047);
      let d = (e) => {
          var i, n, d, u, c, p, v, y;
          let { userAddress: h, market: m, state: g, position: k } = e,
            { initial: f, latest: w } = g;
          if (!m.collateralAsset || !m.loanAsset) return;
          let A = (0, o.wk)(m.collateralAsset),
            b = (0, o.wk)(m.loanAsset),
            Z =
              null == f
                ? void 0
                : null === (i = f.tryGetAccrualPosition(h, m.uniqueKey)) || void 0 === i
                  ? void 0
                  : i.accrueInterest(),
            q =
              null == w
                ? void 0
                : null === (n = w.tryGetAccrualPosition(h, m.uniqueKey)) || void 0 === n
                  ? void 0
                  : n.accrueInterest(),
            B = (0, l.isDefined)(null == k ? void 0 : k.borrowAssets) ? k.borrowAssets : null,
            x = (0, l.isDefined)(Z) ? Z.borrowAssets : void 0,
            C = (0, l.isDefined)(q) ? q.borrowAssets : void 0,
            K = (0, l.isDefined)(null == k ? void 0 : k.borrowAssetsUsd)
              ? (0, a.safeParseNumber)(k.borrowAssetsUsd)
              : null,
            T = (0, l.isDefined)(x) ? (null == b ? void 0 : b.toUsd(x)) : void 0,
            D = (0, l.isDefined)(C) ? (null == b ? void 0 : b.toUsd(C)) : void 0,
            P = (0, l.isDefined)(null == k ? void 0 : k.borrowShares) ? k.borrowShares : null,
            F = (0, l.isDefined)(Z) ? Z.borrowShares : void 0,
            M = (0, l.isDefined)(q) ? q.borrowShares : void 0,
            O = (0, l.isDefined)(null == k ? void 0 : k.collateral) ? k.collateral : null,
            V = (0, l.isDefined)(Z) ? Z.collateral : void 0,
            S = (0, l.isDefined)(q) ? q.collateral : void 0,
            I = (0, l.isDefined)(null == k ? void 0 : k.collateralUsd)
              ? (0, a.safeParseNumber)(k.collateralUsd)
              : null,
            U = (0, l.isDefined)(Z) ? (null == A ? void 0 : A.toUsd(Z.collateral)) : void 0,
            L = (0, l.isDefined)(q) ? (null == A ? void 0 : A.toUsd(q.collateral)) : void 0,
            X = (0, l.isDefined)(null == k ? void 0 : k.healthFactor)
              ? (0, a.safeParseNumber)(k.healthFactor)
              : null,
            W = (0, l.isDefined)(Z) ? Z.healthFactor : void 0,
            R = (0, l.isDefined)(q) ? q.healthFactor : void 0,
            _ = (0, l.isDefined)(null == k ? void 0 : k.priceVariationToLiquidationPrice)
              ? (0, a.safeParseNumber)(k.priceVariationToLiquidationPrice)
              : null,
            N = (0, l.isDefined)(null == Z ? void 0 : Z.priceVariationToLiquidationPrice)
              ? Z.priceVariationToLiquidationPrice
              : void 0,
            z = (0, l.isDefined)(null == q ? void 0 : q.priceVariationToLiquidationPrice)
              ? q.priceVariationToLiquidationPrice
              : void 0,
            $ =
              (0, l.isDefined)(
                null == k
                  ? void 0
                  : null === (d = k.market.state) || void 0 === d
                    ? void 0
                    : d.price
              ) && (0, l.isDefined)(_)
                ? (0, o.DZ)({
                    collateralPrice: k.market.state.price,
                    priceVariationToLiquidationPrice: _,
                  })
                : null,
            E = (0, l.isDefined)(Z) ? (null == Z ? void 0 : Z.liquidationPrice) : void 0,
            H = (0, l.isDefined)(q) ? (null == q ? void 0 : q.liquidationPrice) : void 0,
            G =
              (0, l.isDefined)(B) &&
              (0, l.isDefined)(O) &&
              (0, l.isDefined)(null == k ? void 0 : k.borrowShares) &&
              (0, l.isDefined)(null == k ? void 0 : k.market.state) &&
              null !==
                (y = t.MarketUtils.getLtv(
                  { collateral: O, borrowShares: k.borrowShares },
                  {
                    totalBorrowAssets:
                      null == k
                        ? void 0
                        : null === (u = k.market.state) || void 0 === u
                          ? void 0
                          : u.borrowAssets,
                    totalBorrowShares:
                      null == k
                        ? void 0
                        : null === (c = k.market.state) || void 0 === c
                          ? void 0
                          : c.borrowShares,
                    price:
                      null !==
                        (v =
                          null == k
                            ? void 0
                            : null === (p = k.market.state) || void 0 === p
                              ? void 0
                              : p.price) && void 0 !== v
                        ? v
                        : void 0,
                  }
                )) &&
              void 0 !== y
                ? y
                : null,
            Y = (0, l.isDefined)(Z) ? (null == Z ? void 0 : Z.ltv) : void 0,
            j = (0, l.isDefined)(q) ? (null == q ? void 0 : q.ltv) : void 0,
            J = (!(0, l.isDefined)(x) || 0n === x) && (0, l.isDefined)(C),
            Q = (!(0, l.isDefined)(V) || 0n === V) && (0, l.isDefined)(S),
            ee = { apiValue: B, initialOnchainValue: x, latestSimulatedValue: C },
            ei = { apiValue: K, initialOnchainValue: T, latestSimulatedValue: D },
            en = { apiValue: P, initialOnchainValue: F, latestSimulatedValue: M },
            et = { apiValue: O, initialOnchainValue: V, latestSimulatedValue: S },
            ea = { apiValue: I, initialOnchainValue: U, latestSimulatedValue: L },
            eo = { apiValue: G, initialOnchainValue: Y, latestSimulatedValue: j },
            er = { apiValue: $, initialOnchainValue: E, latestSimulatedValue: H },
            el = { apiValue: _, initialOnchainValue: N, latestSimulatedValue: z },
            ed = { apiValue: X, initialOnchainValue: W, latestSimulatedValue: R },
            es = {
              ...(null != k ? k : {}),
              isSimulated: !1,
              market: m,
              isNew: J && Q,
              borrowAssets: ee,
              borrowAssetsUsd: ei,
              borrowShares: en,
              collateral: et,
              collateralUsd: ea,
              ltv: eo,
              liquidationPrice: er,
              priceVariationToLiquidationPrice: el,
              healthFactor: ed,
              simulatedValues: {
                borrowAssets: (0, r.rvY)(ee),
                borrowAssetsUsd: (0, r.rvY)(ei),
                borrowShares: (0, r.rvY)(en),
                collateral: (0, r.rvY)(et),
                collateralUsd: (0, r.rvY)(ea),
                ltv: (0, r.rvY)(eo),
                liquidationPrice: (0, r.rvY)(er),
                priceVariationToLiquidationPrice: (0, r.rvY)(el),
                healthFactor: (0, r.rvY)(ed),
              },
            };
          return { ...es, isSimulated: s(es) };
        },
        s = (e) => Object.values(e.simulatedValues).some((e) => e.isSimulated),
        u = (e) => {
          let { existingPositions: i, missingMarkets: n, state: t, userAddress: a } = e;
          if (!a) return { positions: [], isSimulated: !1 };
          if (!i && 0 === n.length) return { positions: i, isSimulated: !1 };
          let o = [];
          (0, l.isDefined)(i) &&
            i.length > 0 &&
            i.forEach((e) => {
              let i = d({ market: e.market, state: t, position: e, userAddress: a });
              i && o.push(i);
            }),
            (0, l.isDefined)(n) &&
              n.length > 0 &&
              n.forEach((e) => {
                let i = d({ market: e, state: t, userAddress: a });
                i && o.push(i);
              });
          let r = o.filter((e) => !e.isNew || !!s(e)),
            u = r.some((e) => s(e));
          return { positions: r, isSimulated: u };
        };
    },
    52832: function (e, i, n) {
      var t = n(78286),
        a = n(58258),
        o = n(54655);
      i.Z = (e, i) =>
        (0, a.useMemo)(
          () =>
            e
              ? (0, t.tZ)(o.xvT.Body.XXXS.Regular, { wordBreak: 'break-all', children: e })
              : i
                ? (0, t.tZ)(o.xvT.Body.XXXS.Regular, {
                    children: 'Please switch to the correct network',
                  })
                : void 0,
          [i, e]
        );
    },
    64757: function (e, i, n) {
      var t = n(89991),
        a = n(34550);
      i.Z = function (e) {
        let {
            operationLabel: i,
            inputLoanAmount: n,
            inputCollateralAmount: o,
            isNew: r,
            localErrorMessage: l,
            operations: d,
            simulationError: s,
            blockError: u,
            isPending: c,
            isConfirmDisabled: p,
            hasModifiedOperation: v,
          } = e,
          { account: y } = (0, t.Z_)(),
          h = (0, a.Z)(i, 0n === n && 0n === o, r, !1, l, d, s, u, c, y.isWrongChain, !1);
        return p && v
          ? { bundlerButtonLabel: h, confirmButtonLabel: h }
          : r
            ? { bundlerButtonLabel: 'Add to bundler', confirmButtonLabel: h }
            : {
                bundlerButtonLabel: v ? 'Save in bundler' : 'View in bundler',
                confirmButtonLabel: h,
              };
      };
    },
    39882: function (e, i, n) {
      n.d(i, {
        t: function () {
          return o;
        },
      });
      var t = n(58258),
        a = n(35047);
      let o = (e) => {
        let { market: i, withSharedLiquidity: n } = e;
        return (0, t.useMemo)(() => {
          var e, t, o;
          if (!i) return;
          let r = [],
            l = [],
            d = [];
          l.push(i.uniqueKey), i.collateralAsset && r.push(i.collateralAsset.address);
          let s =
            null === (t = i.collateralAsset) || void 0 === t
              ? void 0
              : null === (e = t.vault) || void 0 === e
                ? void 0
                : e.address;
          return (
            (0, a.isDefined)(s) && d.push(s),
            r.push(i.loanAsset.address),
            n &&
              (null === (o = i.publicAllocatorSharedLiquidity) ||
                void 0 === o ||
                o.forEach((e) => {
                  var i;
                  d.push(e.vault.address),
                    null === (i = e.vault.publicAllocatorConfig) ||
                      void 0 === i ||
                      i.flowCaps.forEach((e) => {
                        var i;
                        l.push(e.market.uniqueKey),
                          r.push(e.market.loanAsset.address),
                          (null === (i = e.market.collateralAsset) || void 0 === i
                            ? void 0
                            : i.address) && r.push(e.market.collateralAsset.address);
                      });
                })),
            { tokens: r, marketIds: l, vaults: d }
          );
        }, [i, n]);
      };
    },
    88308: function (e, i, n) {
      n.d(i, {
        k: function () {
          return l;
        },
      });
      var t = n(58258),
        a = n(89991),
        o = n(91540),
        r = n(4205);
      let l = (e) => {
        let { existingPositions: i, missingMarkets: n } = e,
          { data: l } = (0, r.f)(0),
          { data: d } = (0, r.f)(),
          { account: s } = (0, a.Z_)();
        return (0, t.useMemo)(
          () =>
            (0, o.z)({
              userAddress: null == s ? void 0 : s.address,
              state: { initial: l, latest: d },
              existingPositions: i,
              missingMarkets: n,
            }),
          [l, d, null == s ? void 0 : s.address, i, n]
        );
      };
    },
  },
]);
