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
    (e._sentryDebugIds[i] = '22a36b82-70df-447a-9398-353d967c3de9'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-22a36b82-70df-447a-9398-353d967c3de9'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7909],
  {
    69213: function (e, i, n) {
      n.d(i, {
        jf: function () {
          return c;
        },
      });
      var t = n(55412),
        a = n(3245),
        o = n(63658),
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
    4362: function (e, i, n) {
      n.d(i, {
        _: function () {
          return V;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(13191),
        r = n(12556),
        l = n(54655),
        d = n(35047),
        s = n(45090),
        u = n(22683),
        c = n(34896),
        v = n(89805),
        p = n(89991),
        h = n(55412),
        m = n(3245),
        y = n(63658),
        g = n(41512);
      function k() {
        let e = (0, h._)([
          '\n  fragment pageInfoFields on PageInfo {\n    countTotal\n    count\n    limit\n    skip\n  }\n',
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      let f = (0, m.Ps)(k());
      var b = n(24387);
      function w() {
        let e = (0, h._)([
          '\n  query GetMarketsWithSupplyingVaults(\n    $first: Int\n    $skip: Int\n    $orderBy: MarketOrderBy\n    $orderDirection: OrderDirection\n    $where: MarketFilters\n  ) {\n    markets(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      items {\n        id\n        whitelisted\n        reallocatableLiquidityAssets\n        lltv\n        uniqueKey\n        irmAddress\n        oracleAddress\n        collateralPrice\n        creationTimestamp\n        oracleFeed {\n          baseVault\n          baseFeedOneAddress\n          baseFeedOneDescription\n          baseFeedOneVendor\n          baseFeedTwoAddress\n          baseFeedTwoDescription\n          baseFeedTwoVendor\n          quoteVault\n          quoteFeedOneAddress\n          quoteFeedOneDescription\n          quoteFeedOneVendor\n          quoteFeedTwoAddress\n          quoteFeedTwoDescription\n          quoteFeedTwoVendor\n        }\n        loanAsset {\n          ...assetFields\n          chain {\n            id\n          }\n        }\n        collateralAsset {\n          ...assetFields\n          chain {\n            id\n          }\n        }\n        state {\n          id\n          dailyNetBorrowApy\n          dailyBorrowApy\n          liquidityAssets\n          liquidityAssetsUsd\n          rewards {\n            amountPerSuppliedToken\n            amountPerBorrowedToken\n            asset {\n              ...assetFields\n            }\n          }\n        }\n        warnings {\n          type\n          level\n        }\n        supplyingVaults {\n          id\n          name\n          address\n        }\n        publicAllocatorSharedLiquidity {\n          id\n          vault {\n            id\n            address\n            publicAllocatorConfig {\n              flowCaps {\n                market {\n                  id\n                  uniqueKey\n                  collateralAsset {\n                    ...assetFields\n                  }\n                  loanAsset {\n                    ...assetFields\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      pageInfo {\n        ...pageInfoFields\n      }\n    }\n  }\n  ',
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
        Z = (0, m.Ps)(w(), g.n, b.G, f);
      var q = n(91794),
        B = n(19311),
        x = n(52832),
        C = n(66395),
        K = n(34550),
        T = n(39882),
        P = n(47528),
        F = n(99971),
        D = n(62239),
        O = n(70064),
        M = n(9124),
        S = n(59934);
      let I = (e) => {
        var i, n, h, m, g, k, f, b;
        let { marketId: w, collateralAddress: V, loanAddress: L, initialOperation: U } = e,
          X = (0, l.CPt)(),
          { targetChainId: W, account: R } = (0, p.Z_)(),
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
                loanAssetAddress_in: [L],
                whitelisted: !0,
              },
              orderBy: o.MarketOrderBy.TotalLiquidityUsd,
              orderDirection: o.OrderDirection.Desc,
            }),
            [W, V, L]
          ),
          [J, Q] = (0, a.useState)(),
          { data: ee, loading: ei } = (function (e) {
            let i = { ...A, ...e };
            return y.aM(Z, i);
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
                    : null === (e = i.find((e) => e.uniqueKey === w)) || void 0 === e
                      ? void 0
                      : e.collateralAsset
            );
          }, [ee, w]),
          eo = (0, a.useMemo)(() => {
            var e, i, n;
            return (0, r.wk)(
              null == ee
                ? void 0
                : null === (n = ee.markets) || void 0 === n
                  ? void 0
                  : null === (i = n.items) || void 0 === i
                    ? void 0
                    : null === (e = i.find((e) => e.uniqueKey === w)) || void 0 === e
                      ? void 0
                      : e.loanAsset
            );
          }, [ee, w]),
          er = (0, a.useMemo)(() => {
            var e, i;
            return null == ee
              ? void 0
              : null === (i = ee.markets) || void 0 === i
                ? void 0
                : null === (e = i.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.uniqueKey === w);
          }, [ee, w]),
          el = (0, a.useMemo)(() => {
            var e, i;
            return null == ee
              ? void 0
              : null === (i = ee.markets) || void 0 === i
                ? void 0
                : null === (e = i.items) || void 0 === e
                  ? void 0
                  : e.filter((e) => e.uniqueKey !== w);
          }, [ee, w]),
          ed = (0, a.useMemo)(() => {
            var e;
            return null !== (e = null == el ? void 0 : el.find((e) => e.uniqueKey === J)) &&
              void 0 !== e
              ? e
              : null == el
                ? void 0
                : el[0];
          }, [el, J]),
          es = (0, P.H)(er),
          {
            localOperation: eu,
            isNew: ec,
            isLoading: ev,
            initialState: ep,
            inputCollateralAmount: eh,
            inputBorrowAmount: em,
            isMaxCollateral: ey,
            isMaxBorrow: eg,
            maxBorrowAmount: ek,
            setInputCollateralAmount: ef,
            setInputBorrowAmount: eb,
            setIsMaxCollateral: ew,
            setIsMaxBorrow: eA,
            confirm: eZ,
            reset: eq,
          } = (0, q.p)({
            marketFrom: w,
            marketTo: null == ed ? void 0 : ed.uniqueKey,
            initialOperation: U,
          }),
          eB = (0, T.t)({ market: er, withSharedLiquidity: !0 }),
          ex = (0, T.t)({ market: ed, withSharedLiquidity: !0 }),
          [eC, eK, , eT] = (0, v._)(ep.data, eu, N, ec),
          eP = (0, C.Z)(eT, null == eK ? void 0 : eK.message),
          eF = (0, a.useMemo)(
            () => !ei && (!(0, d.isDefined)(er) || !(0, d.isDefined)(ed)),
            [ei, er, ed]
          ),
          eD = (0, a.useCallback)(() => {
            eq(), Y(!1);
          }, [Y, eq]),
          eO = (0, a.useCallback)(
            (e) => {
              Q(e), et(!1), eb(0n), ef(0n), eA(!1), ew(!1);
            },
            [Q, et, eb, ef, eA, ew]
          ),
          [eM, eS] = null != eC ? eC : [],
          eI = (0, B.g)({
            marketId: w,
            isNewMarket: !1,
            initialState: eM,
            finalState: eS,
            operation: eu,
          }),
          eV = (0, B.g)({
            marketId: null == ed ? void 0 : ed.uniqueKey,
            isNewMarket: !0,
            initialState: eM,
            finalState: eS,
            operation: eu,
          }),
          eL = (0, x.Z)(eP, R.isWrongChain),
          eU = (0, a.useMemo)(() => !ev && !eI.initialMarketData, [ev, eI.initialMarketData]),
          eX = (0, a.useMemo)(() => !ev && !eV.initialMarketData, [ev, eV.initialMarketData]),
          eW = (0, a.useMemo)(
            () => !!eK || !!eT || !!eU || !!eX || !(0, c.H)(eu),
            [eu, eK, eT, eU, eX]
          ),
          eR = (0, a.useMemo)(() => {
            let e = Object.values(eI.errors).some(
                (e) => (null == e ? void 0 : e.level) === o.WarningLevel.Red
              ),
              i = Object.values(eV.errors).some(
                (e) => (null == e ? void 0 : e.level) === o.WarningLevel.Red
              );
            return e || i || eU || eX || (E && z) || !!eP || !!H || !(0, c.H)(eu) || R.isWrongChain;
          }, [eu, eI.errors, eV.errors, E, z, eP, H, R.isWrongChain, eU, eX]),
          e_ = (0, K.Z)(
            'refinance',
            0n === eh && 0n === em,
            ec,
            !0,
            eP,
            $,
            H,
            E,
            z,
            R.isWrongChain,
            !1
          ),
          eN = (0, a.useCallback)(() => {
            Y(
              (0, t.tZ)(F.sG, {
                operations: [eu],
                headerActionSlot: (0, t.tZ)(l.zxk, {
                  variant: 'ghost',
                  iconRight: 'EditPlain20',
                  label: 'Edit refinance',
                  onClick: () => {
                    Y(
                      (0, t.tZ)(O.Z, {
                        fallback: (0, t.tZ)(l.SKT, {
                          text: 'An error has been encountered in the refinance process.',
                        }),
                        children: (0, t.tZ)(I, {
                          'data-testid': 'refinance-dialog',
                          marketId: w,
                          collateralAddress: V,
                          loanAddress: L,
                          initialOperation: eu,
                        }),
                      }),
                      { maxWidth: X ? void 0 : '900px', fullSize: X }
                    );
                  },
                }),
              })
            );
          }, [eu, X, V, L, w, Y]),
          ez = (0, a.useCallback)(() => {
            ec && eZ(), Y(!1), _(!0);
          }, [ec, eZ, _, Y]);
        return (
          (0, a.useEffect)(() => {
            G(eB), G(ex);
          }, [eB, ex, G]),
          (0, t.tZ)(
            D.Do,
            {
              title: 'Refinance Loan',
              loading: ei,
              error: eF ? 'No available markets to refinance your position into.' : null,
              onClose: eD,
              headerActionSlot: (0, t.tZ)(M.K, {
                isOpen: en,
                direction: 'row',
                markets: null != el ? el : [],
                selectedMarket: ed,
                isLoading: ei,
                onOpenChange: et,
                onSelect: eO,
                buttonLabel: 'Switch to',
              }),
              inputSlots: [
                ea &&
                  (0, t.tZ)(
                    l.TGk,
                    {
                      fullWidth: !0,
                      token: ea,
                      amount: eh,
                      onChange: ef,
                      header: 'Collateral amount',
                      maxValue:
                        null === (i = eI.initialPosition) || void 0 === i ? void 0 : i.collateral,
                      onMaxClick: ew,
                      isMax: ey,
                      disabled: ev || !eI.initialMarketData,
                    },
                    ea.address
                  ),
                eo &&
                  (0, t.tZ)(
                    l.TGk,
                    {
                      fullWidth: !0,
                      token: eo,
                      amount: em,
                      onChange: eb,
                      header: 'Loan amount',
                      maxValue: null == ek ? void 0 : ek.assets,
                      onMaxClick: eA,
                      isMax: eg,
                      disabled: ev || !eV.initialMarketData,
                    },
                    eo.address
                  ),
              ],
              initialPositionSlot: eU
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
                    isLoading: ev || !eC,
                    state: eI,
                    errors: eI.errors,
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
                        null === (h = er.state) || void 0 === h ? void 0 : h.dailyNetBorrowApy,
                    },
                  }),
              finalPositionSlot: eX
                ? (0, t.tZ)(l.SKT, {
                    text: 'Unknown market '.concat(
                      (0, d.formatLongString)(
                        null !== (b = null == ed ? void 0 : ed.uniqueKey) && void 0 !== b ? b : '',
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
                    isLoading: ev || !eC,
                    state: eV,
                    errors: eV.errors,
                    market: {
                      uniqueKey: ed.uniqueKey,
                      collateralToken: ea,
                      loanToken: eo,
                      rewards: es,
                      oracle: { address: ed.oracleAddress, ...ed.oracleFeed },
                      warnings: ed.warnings,
                      dailyBorrowApy:
                        null === (m = ed.state) || void 0 === m ? void 0 : m.dailyBorrowApy,
                      dailyNetBorrowApy:
                        null === (g = ed.state) || void 0 === g ? void 0 : g.dailyNetBorrowApy,
                    },
                  }),
              actionSlot:
                !eF &&
                (0, t.tZ)(S.N, {
                  'data-testid': 'finalize-button',
                  isLoading: ev,
                  isNew: ec,
                  handleFinalize: eN,
                  handleConfirm: ez,
                  finalizeLabel: eU || eX ? 'Unknown market' : e_,
                  isFinalizeDisabled: eR,
                  isConfirmDisabled: eW,
                  tooltipContent: eL,
                }),
            },
            w
          )
        );
      };
      var V = (0, a.memo)(I);
    },
    45090: function (e, i, n) {
      n.d(i, {
        F: function () {
          return k;
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
        v = n(35288),
        p = n(16820),
        h = n(6423),
        m = n(30806);
      let y = (0, n(38819).Z)(d.OdW, {
          shouldForwardProp: (e) => 'fullWidth' !== e,
          target: 'eyb0hni0',
        })(
          'width:100%;height:304px;',
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
        g = (e) => d.$0l.percent.digits(2).trailingZero(!1).unit('%').default('-').of(e, 18);
      var k = (0, a.memo)((e) => {
        var i, n, k, f, b, w, A, Z, q, B, x, C, K;
        let {
            chainId: T,
            isLoading: P,
            errors: F,
            market: {
              collateralToken: D,
              loanToken: O,
              uniqueKey: M,
              oracle: S,
              warnings: I,
              dailyBorrowApy: V,
              dailyNetBorrowApy: L,
              rewards: U,
            },
            state: {
              initialPosition: X,
              finalMarketData: W,
              initialMarketData: R,
              previewedMarket: _,
              previewedPosition: N,
            },
          } = e,
          z = (0, u.B9)({ lltv: null == R ? void 0 : R.params.lltv, marketId: M }),
          $ = (0, d.$4C)({
            chainId: T,
            uniqueKey: M,
            collateralAddress: null == D ? void 0 : D.address,
          }),
          E = (0, a.useMemo)(() => (0, r.safeParseNumber)(V || 0, 18), [V]),
          H = (0, a.useMemo)(() => {
            var e;
            return (
              !!R &&
              null != X &&
              !!X.ltv &&
              !!z &&
              (0, l.M4)(null !== (e = X.ltv) && void 0 !== e ? e : 0n, z)
            );
          }, [X, R, z]),
          G = (0, a.useMemo)(() => d.$0l.percent.default('0.00').digits(2).unit('%').of(L), [L]);
        return D && O && R && !P
          ? (0, t.BX)(d.soA.Root, {
              width: '100%',
              children: [
                (0, t.BX)(d.soA.Header, {
                  children: [
                    (0, t.tZ)(d._nw, {
                      size: 'large',
                      leftAvatarProps: { src: null == D ? void 0 : D.logoURI },
                      rightAvatarProps: { src: null == O ? void 0 : O.logoURI },
                    }),
                    (0, t.BX)(d.Kqy, {
                      direction: 'column',
                      gap: 'xs',
                      children: [
                        (0, t.tZ)(d.xvT.Title.XS, {
                          children: (0, d.lAJ)({ loanAsset: O, collateralAsset: D, maxLength: 15 }),
                        }),
                        (0, t.BX)(d.Kqy, {
                          direction: 'row',
                          align: 'center',
                          gap: 4,
                          children: [
                            (0, t.tZ)(d.Vp9, {
                              variant: 'main',
                              label: g(null == R ? void 0 : R.params.lltv),
                            }),
                            (0, s.isDefined)(S) &&
                              (0, t.tZ)(v.Z, {
                                oracle: S,
                                warnings: null != I ? I : [],
                                typographyProps: { color: 'text.secondary' },
                              }),
                            (0, s.isDefined)(M) &&
                              (0, t.tZ)(m.x, {
                                tooltip: 'Open market.',
                                href: (0, h.E3)({
                                  chainName: l.FW.getNameById(T),
                                  marketUniqueKey: M,
                                  collateralSymbol:
                                    null !== (b = D.symbol) && void 0 !== b ? b : '',
                                  loanSymbol: null !== (w = O.symbol) && void 0 !== w ? w : '',
                                }),
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
                      warning: null == F ? void 0 : F.collateralError,
                      label: 'Collateral ('.concat(
                        (0, s.formatLongString)(null !== (A = D.symbol) && void 0 !== A ? A : ''),
                        ')'
                      ),
                      value: (0, t.tZ)(d.soA.ValueChange, {
                        initialProps: { value: (0, s.getValue)(X, 'collateral') },
                        finalProps: {
                          value: (0, s.getValue)(N, 'collateral'),
                          typographyProps: {
                            color:
                              null !==
                                (Z =
                                  null == F
                                    ? void 0
                                    : null === (i = F.collateralError) || void 0 === i
                                      ? void 0
                                      : i.color) && void 0 !== Z
                                ? Z
                                : 'text.body',
                          },
                        },
                        formatter: (e) =>
                          (0, p.sL)({
                            price: D.price,
                            amount: e,
                            decimals: D.decimals,
                            withTrailingZero: !1,
                          }),
                      }),
                    }),
                    (0, t.tZ)(d.soA.ListItem, {
                      warning: null == F ? void 0 : F.borrowError,
                      label: 'Loan ('.concat(
                        (0, s.formatLongString)(null !== (q = O.symbol) && void 0 !== q ? q : ''),
                        ')'
                      ),
                      value: (0, t.tZ)(d.soA.ValueChange, {
                        initialProps: { value: (0, s.getValue)(X, 'borrowAssets') },
                        finalProps: {
                          value: (0, s.getValue)(N, 'borrowAssets'),
                          typographyProps: {
                            color:
                              null !==
                                (B =
                                  null == F
                                    ? void 0
                                    : null === (n = F.borrowError) || void 0 === n
                                      ? void 0
                                      : n.color) && void 0 !== B
                                ? B
                                : 'text.body',
                          },
                        },
                        formatter: (e) => {
                          var i;
                          return (0, p.sL)({
                            price: null !== (i = O.price) && void 0 !== i ? i : 0n,
                            amount: e,
                            decimals: O.decimals,
                            withTrailingZero: !1,
                          });
                        },
                      }),
                    }),
                    (0, t.tZ)(d.soA.ListItem, {
                      warning: null == F ? void 0 : F.ltvError,
                      label: (0, t.tZ)(u.gX, { marketId: M }),
                      value: (0, t.BX)(d.Kqy, {
                        direction: 'row',
                        align: 'center',
                        gap: '2px',
                        children: [
                          (0, t.tZ)(d.soA.ValueChange, {
                            initialProps: {
                              value: null == X ? void 0 : X.ltv,
                              typographyProps: { color: H ? 'text.interactive.error' : void 0 },
                            },
                            finalProps: {
                              value: (0, s.getValue)(N, 'ltv'),
                              typographyProps: {
                                color:
                                  null !==
                                    (x =
                                      null == F
                                        ? void 0
                                        : null === (k = F.ltvError) || void 0 === k
                                          ? void 0
                                          : k.color) && void 0 !== x
                                    ? x
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
                                lltv: null == R ? void 0 : R.params.lltv,
                                marketId: M,
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
                            apy: E,
                            rewards: U,
                            variant: 'market',
                            points: $,
                            asset: D,
                            netApy: (0, p.Pi)(L, r.safeParseNumber),
                          },
                          children: (0, t.tZ)(d.soA.Value, {
                            value: G,
                            typographyProps: { color: 'text.body' },
                          }),
                        }),
                      }),
                    }),
                    (0, t.tZ)(d.soA.ListItem, {
                      warning: null == F ? void 0 : F.liquidityError,
                      label: 'Total Liquidity ('.concat(
                        (0, s.formatLongString)(null !== (C = O.symbol) && void 0 !== C ? C : ''),
                        ')'
                      ),
                      value: (0, t.tZ)(d.soA.ValueChange, {
                        initialProps: {
                          value: (0, s.transformValue)(
                            (0, s.getValue)(R, 'liquidity'),
                            o.MathLib.max.bind(void 0, 0n)
                          ),
                        },
                        finalProps: {
                          value: (0, s.transformValue)(
                            (0, s.getValue)(null != W ? W : _, 'liquidity'),
                            o.MathLib.max.bind(void 0, 0n)
                          ),
                          typographyProps: {
                            color:
                              null !==
                                (K =
                                  null == F
                                    ? void 0
                                    : null === (f = F.liquidityError) || void 0 === f
                                      ? void 0
                                      : f.color) && void 0 !== K
                                ? K
                                : 'text.body',
                          },
                        },
                        formatter: (e) => {
                          var i;
                          return (0, p.sL)({
                            price: null !== (i = O.price) && void 0 !== i ? i : 0n,
                            amount: e,
                            decimals: O.decimals,
                            withTrailingZero: !1,
                          });
                        },
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
              isHoverable: v = !0,
              TextVariant: p = o.xvT.Body.XS.Regular,
              asset: h,
              withBackgroundEffect: m = !0,
            } = e,
            y = (0, a.useMemo)(() => o.$0l.percent.digits(2).unit('%').of(i, 18), [i]);
          return y
            ? (0, t.tZ)(o.KNv, {
                withBackgroundEffect: m,
                hoverCardContent: (0, t.tZ)(r.Z, {
                  netApy: i,
                  apy: n,
                  performanceFee: l,
                  rewards: d,
                  variant: s,
                  points: u,
                  asset: h,
                }),
                isDisabled: !v,
                padding: '0 11px 0 14px',
                children:
                  y &&
                  (0, t.BX)(o.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, t.tZ)(o.ZT$, {
                        TextVariant: p,
                        isSimulated: c,
                        display: 'flex',
                        alignItems: 'center',
                        lineHeight: 'normal',
                        color: 'text.body',
                        children: y,
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
    53644: function (e, i, n) {
      n.d(i, {
        r: function () {
          return s;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(40252),
        r = n(54655),
        l = n(89991);
      let d = (0, n(38819).Z)(r.xvT.Body.XXS.Regular, { target: 'e1sp0bs60' })('text-align:end;'),
        s = (0, a.memo)((e) => {
          var i, n;
          let { tokenAddress: a } = e,
            { targetChainId: r } = (0, l.Z_)();
          return (
            null === (i = o.permissionedCoinbaseTokens[r]) || void 0 === i ? void 0 : i.has(a)
          )
            ? (0, t.tZ)(v, {})
            : (null === (n = o.permissionedBackedTokens[r]) || void 0 === n ? void 0 : n.has(a))
              ? (0, t.tZ)(c, {})
              : (0, t.tZ)(u, {});
        }),
        u = () =>
          (0, t.tZ)(d, { color: 'constant.color.error', children: 'Authorization required.' }),
        c = () =>
          (0, t.BX)(d, {
            color: 'constant.color.error',
            children: [
              'Backed authorization required.',
              ' ',
              (0, t.tZ)(r.dLw, {
                href: 'https://assets.backed.fi/onboarding',
                underlined: !0,
                children: 'Learn more here →',
              }),
            ],
          }),
        v = () =>
          (0, t.BX)(d, {
            color: 'constant.color.error',
            children: [
              'Coinbase attestation required.',
              ' ',
              (0, t.tZ)(r.dLw, {
                href: 'https://www.coinbase.com/onchain-verify',
                underlined: !0,
                children: 'Learn more here →',
              }),
            ],
          });
    },
    92148: function (e, i, n) {
      n.d(i, {
        Z: function () {
          return m;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(15328),
        r = n(54655),
        l = n(38819);
      let d = '125px',
        s = (0, l.Z)('div', { target: 'ebvbqmv0' })('position:relative;width:100%;height:', d, ';'),
        u = (0, l.Z)('video', { target: 'ebvbqmv1' })(
          'width:100%;height:100%;object-fit:cover;opacity:',
          (e) => {
            let { $isLoading: i } = e;
            return i ? 0 : 1;
          },
          ';transition:opacity 0.3s ease-in-out;'
        ),
        c = (0, l.Z)('div', { target: 'ebvbqmv2' })(
          'position:absolute;width:100%;height:100%;border-radius:50%;border:',
          '1.25px',
          ' solid\n    ',
          (e) => {
            let { theme: i } = e;
            return i.colors.constant.color.active;
          },
          ';top:50%;left:50%;transform:translate(-50%,-50%);will-change:transform,opacity;animation:pulse 1s infinite;@keyframes pulse{0%{transform:translate(-50%,-50%) scale(1);opacity:1;}100%{transform:translate(-50%,-50%) scale(',
          2,
          ');opacity:0;}}'
        ),
        v = (0, l.Z)('div', { target: 'ebvbqmv3' })('position:relative;z-index:2;'),
        p = (0, l.Z)('div', { target: 'ebvbqmv4' })('position:relative;'),
        h = (0, l.Z)('img', { target: 'ebvbqmv5' })('width:100%;height:', d, ';object-fit:cover;');
      var m = (0, a.memo)((e) => {
        let {
            children: i,
            featureKey: n,
            videoUrl: l,
            fallbackImageUrl: d,
            title: m,
            description: y,
            autoplay: g = !0,
            enabled: k = !0,
            side: f = 'top',
            align: b = 'center',
          } = e,
          [w, A] = (0, o._)('morpho.'.concat(n, '-callout'), !1),
          [Z, q] = (0, a.useState)(!0),
          [B, x] = (0, a.useState)(!1),
          C = (0, a.useCallback)(() => {
            A(!0);
          }, [A]),
          K = k && !w;
        return K
          ? (0, t.BX)(r.J2e.Root, {
              open: !0,
              children: [
                (0, t.tZ)(r.J2e.Anchor, {
                  children: (0, t.BX)(p, {
                    children: [
                      (0, t.tZ)(c, { 'aria-hidden': 'true' }),
                      (0, t.tZ)(v, { children: i({ visible: K, markAsSeen: C }) }),
                    ],
                  }),
                }),
                (0, t.tZ)(r.J2e.Portal, {
                  children: (0, t.BX)(r.J2e.Content, {
                    style: { border: 'none', padding: 0, outline: 'none', maxWidth: 300 },
                    collisionPadding: 12,
                    zIndex: 'mid',
                    onClick: (e) => e.stopPropagation(),
                    role: 'dialog',
                    'aria-labelledby': ''.concat(n, '-title'),
                    side: f,
                    align: b,
                    children: [
                      (0, t.BX)(s, {
                        children: [
                          Z &&
                            !B &&
                            (0, t.tZ)(r.OdW, { borderRadius: 0, width: '100%', height: '125px' }),
                          B
                            ? (0, t.tZ)(h, {
                                src: d,
                                alt: 'Feature callout',
                                'aria-hidden': 'true',
                              })
                            : (0, t.tZ)(u, {
                                src: l,
                                autoPlay: g,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                preload: 'metadata',
                                $isLoading: Z,
                                onLoadedData: () => q(!1),
                                onError: () => {
                                  x(!0), q(!1);
                                },
                                'aria-hidden': 'true',
                              }),
                          (0, t.tZ)(r.zxk, {
                            style: { position: 'absolute', top: 10, right: 10 },
                            onClick: C,
                            size: 'small',
                            variant: 'ghost',
                            iconAlone: 'ClosePlain20',
                          }),
                        ],
                      }),
                      (0, t.BX)(r.Kqy, {
                        padding: 's',
                        direction: 'column',
                        gap: 'xs',
                        children: [
                          (0, t.tZ)(r.xvT.Body.XS.Regular, {
                            id: ''.concat(n, '-title'),
                            color: 'text.body',
                            children: m,
                          }),
                          (0, t.tZ)(r.Kqy, {
                            direction: 'column',
                            gap: 'xs',
                            children: y.map((e, i) =>
                              (0, t.tZ)(
                                r.xvT.Body.XS.Regular,
                                { color: 'text.secondary', children: e },
                                i
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : i({});
      });
    },
    64219: function (e, i, n) {
      var t = n(78286),
        a = n(58258),
        o = n(12556),
        r = n(54655),
        l = n(4362),
        d = n(51712),
        s = n(70064),
        u = n(26726),
        c = n(50568),
        v = n(28219),
        p = n(92148),
        h = n(9629),
        m = n(32355),
        y = n(3883),
        g = n(67427);
      let k = '540px';
      i.default = (0, a.memo)((e) => {
        let {
            marketId: i,
            collateralAssetAddress: n,
            loanAssetAddress: f,
            chainId: b,
            showFeatureCallOut: w = !1,
            align: A = 'end',
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
          { isRightPanelOpen: P } = (0, r.s8G)(),
          { status: F } = (0, v.P)(i);
        return (0, t.tZ)(p.Z, {
          side: 'top',
          enabled: w && q.featureCallOut && !T && !P,
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
                    align: A,
                    side: Z,
                    children: [
                      q.supplyCollateral &&
                        (0, t.BX)(r.h_2.Item, {
                          'data-testid': 'supply-collateral',
                          onClick: (e) => e.stopPropagation(),
                          onSelect: () => {
                            C((0, t.tZ)(h._, { marketId: i, chainId: b, onClose: () => C(!1) }), {
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
                            C((0, t.tZ)(m.q, { marketId: i, chainId: b, onClose: () => C(!1) }), {
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
                            C((0, t.tZ)(c.F, { marketId: i, toEnable: 'unauthorized' === F }));
                          },
                          disabled: 'unauthorized' !== F && 'authorized' !== F,
                          children: [
                            (0, t.tZ)(r.JO$, { icon: 'ShieldCheckPlain20', color: 'icon.primary' }),
                            'authorized' === F ? 'Disable' : 'Enable',
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
                              C((0, t.tZ)(y.U, { marketId: i, chainId: b, onClose: () => C(!1) }), {
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
                              C((0, t.tZ)(g.B, { marketId: i, chainId: b, onClose: () => C(!1) }), {
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
          return O;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(51712),
        l = n(70064),
        d = n(12556),
        s = n(94646),
        u = n(53644),
        c = n(22683),
        v = n(34896),
        p = n(89805),
        h = n(89991),
        m = n(84030),
        y = n(18721),
        g = n(52832),
        k = n(64757),
        f = n(53745),
        b = n(66395),
        w = n(39882),
        A = n(47528),
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
        C = n(63658),
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
      let P = {},
        F = (0, x.Ps)(T(), K.G);
      var D = (0, a.memo)(function (e) {
          var i, n;
          let { marketId: l, chainId: B, onClose: x } = e,
            { account: K } = (0, h.Z_)(),
            { toggleRightPanel: T } = (0, o.s8G)(),
            { toggleDialog: D } = (0, o.DAv)(),
            {
              simulationError: O,
              operations: M,
              blockError: S,
              isPending: I,
              bundlerConfiguration: V,
              updateOperation: L,
              config: { addToSimulationState: U },
            } = (0, c.N)(),
            {
              data: X,
              loading: W,
              error: R,
            } = (function (e) {
              let i = { ...P, ...e };
              return C.aM(F, i);
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
            } = (0, y.f)(l, { origin: 'position-manager' }),
            [et, ea, , eo] = (0, p._)(j.data, J, V, _),
            { initialData: er, finalData: el } = (0, m.Z)(l, K.address, et),
            ed = (0, w.t)({
              market: null == X ? void 0 : X.marketByUniqueKey,
              withSharedLiquidity: !1,
            });
          (0, a.useEffect)(() => {
            U(ed);
          }, [ed, U]);
          let es = (0, a.useMemo)(
              () => (0, d.wk)(null == X ? void 0 : X.marketByUniqueKey.loanAsset),
              [null == X ? void 0 : X.marketByUniqueKey.loanAsset]
            ),
            eu = (0, a.useMemo)(
              () => (0, d.wk)(null == X ? void 0 : X.marketByUniqueKey.collateralAsset),
              [null == X ? void 0 : X.marketByUniqueKey.collateralAsset]
            ),
            ec = (0, b.Z)(eo, null == ea ? void 0 : ea.message),
            ev = (0, f.Z)(K.address, j.data, null == eu ? void 0 : eu.address),
            ep = (0, a.useMemo)(
              () => !!ea || !!eo || !!K.isWrongChain || !(0, v.H)(J),
              [K.isWrongChain, eo, J, ea]
            ),
            eh = (0, g.Z)(ec, K.isWrongChain),
            { confirmButtonLabel: em, bundlerButtonLabel: ey } = (0, k.Z)({
              operationLabel: 'add collateral',
              inputCollateralAmount: N,
              inputLoanAmount: Y,
              isNew: _,
              localErrorMessage: ec,
              operations: M,
              simulationError: O,
              blockError: S,
              isPending: I,
              isConfirmDisabled: ep,
              hasModifiedOperation: en,
            }),
            eg = (0, a.useMemo)(
              () => (S && I) || !!ec || !!O || !(0, v.H)(J) || K.isWrongChain || !ev,
              [K.isWrongChain, S, ev, I, ec, J, O]
            ),
            ek = (0, a.useCallback)(() => {
              D((0, t.tZ)(s.Z, { operations: [J] }));
            }, [J, D]),
            ef = (0, a.useCallback)(() => {
              _ ? Q() : en && L(J.id, () => J), T(!0), x();
            }, [Q, en, _, x, T, L, J]),
            eb = (0, A.H)(null == X ? void 0 : X.marketByUniqueKey),
            ew = (null == X ? void 0 : X.marketByUniqueKey.oracleAddress)
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
                        !ev && (0, t.tZ)(u.r, { tokenAddress: eu.address }),
                      ],
                    }),
                    (0, t.tZ)(Z.F, {
                      chainId: B,
                      market: {
                        uniqueKey: l,
                        loanToken: es,
                        collateralToken: eu,
                        rewards: eb,
                        oracle: ew,
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
                        previewedMarket: el.market,
                        previewedPosition: el.position,
                      },
                    }),
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === M.length &&
                          (0, t.tZ)(o.ua7, {
                            content: eh,
                            disabled: !eh,
                            children: (0, t.tZ)(o.zxk, {
                              size: 'big',
                              variant: eg ? 'secondary' : 'primary',
                              label: em,
                              onClick: ek,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: ep,
                            }),
                          }),
                        (M.length > 0 || !ep) &&
                          (0, t.tZ)(o.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: ef,
                            label: ey,
                            'data-testid': 'bundler-button',
                            disabled: eg,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, t.tZ)(r.c, { minHeight: '400px' });
        }),
        O = (0, a.memo)(function (e) {
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
                children: (0, t.tZ)(D, { ...e }),
              }),
            ],
          });
        });
    },
    32355: function (e, i, n) {
      n.d(i, {
        q: function () {
          return I;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(51712),
        l = n(70064),
        d = n(13191),
        s = n(12556),
        u = n(35047),
        c = n(94646),
        v = n(53644),
        p = n(22683),
        h = n(34896),
        m = n(89805),
        y = n(89991),
        g = n(84030),
        k = n(18721),
        f = n(52832),
        b = n(64757),
        w = n(53745),
        A = n(66395),
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
        P = n(63658),
        F = n(24387);
      function D() {
        let e = (0, K._)([
          '\n  query GetBorrowMoreDialogState($uniqueKey: String!, $chainId: Int!) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      uniqueKey\n      oracleAddress\n      warnings {\n        level\n        type\n      }\n      oracleFeed {\n        baseVault\n        baseFeedOneAddress\n        baseFeedOneDescription\n        baseFeedOneVendor\n        baseFeedTwoAddress\n        baseFeedTwoDescription\n        baseFeedTwoVendor\n        quoteVault\n        quoteFeedOneAddress\n        quoteFeedOneDescription\n        quoteFeedOneVendor\n        quoteFeedTwoAddress\n        quoteFeedTwoDescription\n        quoteFeedTwoVendor\n      }\n      state {\n        id\n        dailyNetBorrowApy\n        dailyBorrowApy\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerBorrowedToken\n        }\n      }\n      collateralAsset {\n        ...simpleAssetFields\n      }\n      loanAsset {\n        ...simpleAssetFields\n      }\n      publicAllocatorSharedLiquidity {\n        id\n        vault {\n          id\n          address\n          asset {\n            id\n            address\n          }\n          publicAllocatorConfig {\n            flowCaps {\n              market {\n                id\n                uniqueKey\n                loanAsset {\n                  id\n                  address\n                }\n                collateralAsset {\n                  id\n                  address\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  ',
          '\n',
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      let O = {},
        M = (0, T.Ps)(D(), F.G);
      var S = (0, a.memo)(function (e) {
          var i, n, l, K;
          let { marketId: T, chainId: F, onClose: D } = e,
            { account: S } = (0, y.Z_)(),
            { toggleRightPanel: I } = (0, o.s8G)(),
            { toggleDialog: V } = (0, o.DAv)(),
            {
              simulationError: L,
              operations: U,
              blockError: X,
              isPending: W,
              bundlerConfiguration: R,
              updateOperation: _,
              config: { addToSimulationState: N },
            } = (0, p.N)(),
            {
              data: z,
              loading: $,
              error: E,
            } = (function (e) {
              let i = { ...O, ...e };
              return P.aM(M, i);
            })({ variables: { uniqueKey: T, chainId: F } }),
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
            [er, el, , ed] = (0, m._)(en.data, et, R, H),
            { initialData: es, finalData: eu } = (0, g.Z)(T, S.address, er),
            ec = (0, B.B9)({
              lltv: null === (i = eu.position) || void 0 === i ? void 0 : i.market.params.lltv,
              marketId: T,
            }),
            ev = (0, a.useMemo)(() => {
              var e;
              let i = null === (e = eu.position) || void 0 === e ? void 0 : e.ltv;
              if (i && ec) return (0, s.M4)(i, ec);
            }, [null === (n = eu.position) || void 0 === n ? void 0 : n.ltv, ec]),
            ep = (0, a.useMemo)(() => {
              if (
                (eu.position && !eu.position.isHealthy) ||
                ((0, u.getValue)(eu.position, 'ltv') && ec && ev)
              )
                return {
                  level: d.WarningLevel.Red,
                  message: "You're close to being liquidated.",
                  color: 'text.interactive.error',
                };
            }, [eu.position, ev, ec]),
            eh = (0, Z.t)({
              market: null == z ? void 0 : z.marketByUniqueKey,
              withSharedLiquidity: !0,
            });
          (0, a.useEffect)(() => {
            N(eh);
          }, [eh, N]);
          let em = (0, a.useMemo)(
              () => (0, s.wk)(null == z ? void 0 : z.marketByUniqueKey.loanAsset),
              [null == z ? void 0 : z.marketByUniqueKey.loanAsset]
            ),
            ey = (0, a.useMemo)(
              () => (0, s.wk)(null == z ? void 0 : z.marketByUniqueKey.collateralAsset),
              [null == z ? void 0 : z.marketByUniqueKey.collateralAsset]
            ),
            eg = (0, A.Z)(ed, null == el ? void 0 : el.message),
            ek = (0, w.Z)(S.address, en.data, null == em ? void 0 : em.address),
            ef = (0, a.useMemo)(
              () => !!el || !!ed || !ek || !!S.isWrongChain || !(0, h.H)(et),
              [S.isWrongChain, ek, ed, et, el]
            ),
            { confirmButtonLabel: eb, bundlerButtonLabel: ew } = (0, b.Z)({
              operationLabel: 'borrow',
              inputCollateralAmount: G,
              inputLoanAmount: ei,
              isNew: H,
              localErrorMessage: eg,
              operations: U,
              simulationError: L,
              blockError: X,
              isPending: W,
              isConfirmDisabled: ef,
              hasModifiedOperation: eo,
            }),
            eA = (0, f.Z)(eg, S.isWrongChain),
            eZ = (0, a.useMemo)(
              () => (X && W) || !!eg || !!L || !(0, h.H)(et) || S.isWrongChain || !ek,
              [S.isWrongChain, X, ek, W, eg, et, L]
            ),
            eq = (0, q.H)(null == z ? void 0 : z.marketByUniqueKey),
            eB = (null == z ? void 0 : z.marketByUniqueKey.oracleAddress)
              ? { address: z.marketByUniqueKey.oracleAddress, ...z.marketByUniqueKey.oracleFeed }
              : void 0,
            ex = (0, a.useCallback)(() => {
              V((0, t.tZ)(c.Z, { operations: [et] }));
            }, [et, V]),
            eC = (0, a.useCallback)(() => {
              H ? ea() : eo && _(et.id, () => et), I(!0), D();
            }, [ea, eo, H, D, I, _, et]);
          return J || $
            ? (0, t.tZ)(C, {})
            : !E && em && ey
              ? (0, t.BX)(t.HY, {
                  children: [
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 2,
                      children: [
                        (0, t.tZ)(o.TGk, {
                          header: 'Borrow '.concat(null == em ? void 0 : em.symbol),
                          amount: ei,
                          token: em,
                          onChange: Y,
                          maxValue: null == j ? void 0 : j.assets,
                          onMaxClick: Q,
                          isMax: ee,
                        }),
                        !ek && (0, t.tZ)(v.r, { tokenAddress: em.address }),
                      ],
                    }),
                    (0, t.tZ)(x.F, {
                      errors: { ltvError: ep },
                      chainId: F,
                      market: {
                        uniqueKey: T,
                        loanToken: em,
                        collateralToken: ey,
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
                        previewedMarket: eu.market,
                        previewedPosition: eu.position,
                      },
                    }),
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === U.length &&
                          (0, t.tZ)(o.ua7, {
                            content: eA,
                            disabled: !eA,
                            children: (0, t.tZ)(o.zxk, {
                              size: 'big',
                              variant: ef ? 'secondary' : 'primary',
                              label: eb,
                              onClick: ex,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: ef,
                            }),
                          }),
                        (U.length > 0 || !ef) &&
                          (0, t.tZ)(o.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: eC,
                            label: ew,
                            'data-testid': 'bundler-button',
                            disabled: eZ,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, t.tZ)(r.c, { minHeight: '400px' });
        }),
        I = (0, a.memo)(function (e) {
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
                children: (0, t.tZ)(S, { ...e }),
              }),
            ],
          });
        });
    },
    3883: function (e, i, n) {
      n.d(i, {
        U: function () {
          return O;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(51712),
        l = n(70064),
        d = n(12556),
        s = n(94646),
        u = n(53644),
        c = n(22683),
        v = n(34896),
        p = n(89805),
        h = n(89991),
        m = n(84030),
        y = n(91622),
        g = n(52832),
        k = n(64757),
        f = n(53745),
        b = n(66395),
        w = n(39882),
        A = n(47528),
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
        C = n(63658),
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
      let P = {},
        F = (0, x.Ps)(T(), K.G);
      var D = (0, a.memo)((e) => {
          var i, n;
          let { marketId: l, chainId: B, onClose: x } = e,
            { account: K } = (0, h.Z_)(),
            { toggleRightPanel: T } = (0, o.s8G)(),
            { toggleDialog: D } = (0, o.DAv)(),
            {
              simulationError: O,
              operations: M,
              blockError: S,
              isPending: I,
              bundlerConfiguration: V,
              updateOperation: L,
              config: { addToSimulationState: U },
            } = (0, c.N)(),
            {
              data: X,
              loading: W,
              error: R,
            } = (function (e) {
              let i = { ...P, ...e };
              return C.aM(F, i);
            })({ variables: { uniqueKey: l, chainId: B } }),
            _ = (0, w.t)({
              market: null == X ? void 0 : X.marketByUniqueKey,
              withSharedLiquidity: !1,
            });
          (0, a.useEffect)(() => {
            U(_);
          }, [_, U]);
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
            } = (0, y.O)(l, { origin: 'position-manager' }),
            [er, el, , ed] = (0, p._)(ee.data, ei, V, $),
            { initialData: es, finalData: eu } = (0, m.Z)(l, K.address, er),
            ec = (0, b.Z)(ed, null == el ? void 0 : el.message),
            ev = (0, f.Z)(K.address, ee.data, null == N ? void 0 : N.address),
            ep = (0, a.useMemo)(
              () => !!el || !!ed || !ev || !!K.isWrongChain || !(0, v.H)(ei),
              [K.isWrongChain, ev, ed, ei, el]
            ),
            eh = (0, g.Z)(ec, K.isWrongChain),
            { confirmButtonLabel: em, bundlerButtonLabel: ey } = (0, k.Z)({
              operationLabel: 'repay',
              inputCollateralAmount: E,
              inputLoanAmount: Q,
              isNew: $,
              localErrorMessage: ec,
              operations: M,
              simulationError: O,
              blockError: S,
              isPending: I,
              isConfirmDisabled: ep,
              hasModifiedOperation: eo,
            }),
            eg = (0, a.useMemo)(
              () => (S && I) || !!ec || !!O || !(0, v.H)(ei) || K.isWrongChain || !ev,
              [K.isWrongChain, S, ev, I, ec, ei, O]
            ),
            ek = (0, A.H)(null == X ? void 0 : X.marketByUniqueKey),
            ef = (null == X ? void 0 : X.marketByUniqueKey.oracleAddress)
              ? { address: X.marketByUniqueKey.oracleAddress, ...X.marketByUniqueKey.oracleFeed }
              : void 0,
            eb = (0, a.useCallback)(() => {
              D((0, t.tZ)(s.Z, { operations: [ei] }));
            }, [ei, D]),
            ew = (0, a.useCallback)(() => {
              $ ? et() : eo && L(ei.id, () => ei), T(!0), x();
            }, [et, eo, $, x, T, L, ei]);
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
                        !ev && (0, t.tZ)(u.r, { tokenAddress: N.address }),
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
                        previewedMarket: eu.market,
                        previewedPosition: eu.position,
                      },
                    }),
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === M.length &&
                          (0, t.tZ)(o.ua7, {
                            content: eh,
                            disabled: !eh,
                            children: (0, t.tZ)(o.zxk, {
                              size: 'big',
                              variant: ep ? 'secondary' : 'primary',
                              label: em,
                              onClick: eb,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: ep,
                            }),
                          }),
                        (M.length > 0 || !ep) &&
                          (0, t.tZ)(o.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: ew,
                            label: ey,
                            'data-testid': 'bundler-button',
                            disabled: eg,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, t.tZ)(r.c, { minHeight: '400px' });
        }),
        O = (0, a.memo)(function (e) {
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
                children: (0, t.tZ)(D, { ...e }),
              }),
            ],
          });
        });
    },
    67427: function (e, i, n) {
      n.d(i, {
        B: function () {
          return I;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(51712),
        l = n(70064),
        d = n(13191),
        s = n(12556),
        u = n(35047),
        c = n(94646),
        v = n(53644),
        p = n(22683),
        h = n(34896),
        m = n(89805),
        y = n(89991),
        g = n(84030),
        k = n(91622),
        f = n(52832),
        b = n(64757),
        w = n(53745),
        A = n(66395),
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
        P = n(63658),
        F = n(24387);
      function D() {
        let e = (0, K._)([
          '\n  query GetWithdrawCollateralDialogState($uniqueKey: String!, $chainId: Int!) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      uniqueKey\n      oracleAddress\n      warnings {\n        level\n        type\n      }\n      oracleFeed {\n        baseVault\n        baseFeedOneAddress\n        baseFeedOneDescription\n        baseFeedOneVendor\n        baseFeedTwoAddress\n        baseFeedTwoDescription\n        baseFeedTwoVendor\n        quoteVault\n        quoteFeedOneAddress\n        quoteFeedOneDescription\n        quoteFeedOneVendor\n        quoteFeedTwoAddress\n        quoteFeedTwoDescription\n        quoteFeedTwoVendor\n      }\n      state {\n        id\n        dailyNetBorrowApy\n        dailyBorrowApy\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerBorrowedToken\n        }\n      }\n      collateralAsset {\n        ...simpleAssetFields\n      }\n      loanAsset {\n        ...simpleAssetFields\n      }\n    }\n  }\n  ',
          '\n',
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      let O = {},
        M = (0, T.Ps)(D(), F.G);
      var S = (0, a.memo)((e) => {
          var i, n, l;
          let { marketId: K, chainId: T, onClose: F } = e,
            { account: D } = (0, y.Z_)(),
            { toggleRightPanel: S } = (0, o.s8G)(),
            { toggleDialog: I } = (0, o.DAv)(),
            {
              simulationError: V,
              operations: L,
              blockError: U,
              isPending: X,
              bundlerConfiguration: W,
              updateOperation: R,
              config: { addToSimulationState: _ },
            } = (0, p.N)(),
            {
              data: N,
              error: z,
              loading: $,
            } = (function (e) {
              let i = { ...O, ...e };
              return P.aM(M, i);
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
            [ed, es, , eu] = (0, m._)(ea.data, eo, W, Y),
            { initialData: ec, finalData: ev } = (0, g.Z)(K, D.address, ed),
            ep = (0, A.Z)(eu, null == es ? void 0 : es.message),
            eh = (0, w.Z)(D.address, ea.data, null == G ? void 0 : G.address),
            em = (0, a.useMemo)(
              () => !!es || !!eu || !!D.isWrongChain || !(0, h.H)(eo),
              [D.isWrongChain, eu, eo, es]
            ),
            ey = (0, f.Z)(ep, D.isWrongChain),
            { confirmButtonLabel: eg, bundlerButtonLabel: ek } = (0, b.Z)({
              operationLabel: 'withdraw',
              inputCollateralAmount: j,
              inputLoanAmount: et,
              isNew: Y,
              localErrorMessage: ep,
              operations: L,
              simulationError: V,
              blockError: U,
              isPending: X,
              isConfirmDisabled: em,
              hasModifiedOperation: el,
            }),
            ef = (0, q.H)(null == N ? void 0 : N.marketByUniqueKey),
            eb = (null == N ? void 0 : N.marketByUniqueKey.oracleAddress)
              ? { address: N.marketByUniqueKey.oracleAddress, ...N.marketByUniqueKey.oracleFeed }
              : void 0,
            ew = (0, a.useMemo)(
              () => (U && X) || !!ep || !!V || !(0, h.H)(eo) || D.isWrongChain || !eh,
              [D.isWrongChain, U, eh, X, ep, eo, V]
            ),
            eA = (0, a.useCallback)(() => {
              I((0, t.tZ)(c.Z, { operations: [eo] }));
            }, [eo, I]),
            eZ = (0, a.useCallback)(() => {
              Y ? er() : el && R(eo.id, () => eo), S(!0), F();
            }, [er, el, Y, F, S, R, eo]),
            eq = (0, B.B9)({
              lltv: null === (i = ev.market) || void 0 === i ? void 0 : i.params.lltv,
              marketId: K,
            }),
            eB = (0, a.useMemo)(() => {
              let e = (0, u.getValue)(ev.position, 'ltv');
              if (e && eq && (0, s.M4)(e, eq))
                return {
                  level: d.WarningLevel.Red,
                  message: "You're close to being liquidated.",
                  color: 'text.interactive.error',
                };
            }, [eq, ev.position]);
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
                        !eh && G && (0, t.tZ)(v.r, { tokenAddress: G.address }),
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
                          oracle: eb,
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
                          finalPosition: ev.position,
                          previewedPosition: ev.position,
                          initialMarketData: ec.market,
                          finalMarketData: ev.market,
                          previewedMarket: ev.market,
                        },
                        errors: { ltvError: eB },
                      }),
                    (0, t.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === L.length &&
                          (0, t.tZ)(o.ua7, {
                            content: ey,
                            disabled: !ey,
                            children: (0, t.tZ)(o.zxk, {
                              size: 'big',
                              variant: ew ? 'secondary' : 'primary',
                              label: eg,
                              onClick: eA,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: em,
                            }),
                          }),
                        (L.length > 0 || !em) &&
                          (0, t.tZ)(o.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: eZ,
                            label: ek,
                            'data-testid': 'bundler-button',
                            disabled: ew,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, t.tZ)(r.c, { minHeight: '400px' });
        }),
        I = (0, a.memo)((e) => {
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
                children: (0, t.tZ)(S, { ...e }),
              }),
            ],
          });
        });
    },
    9124: function (e, i, n) {
      n.d(i, {
        K: function () {
          return y;
        },
      });
      var t = n(78286),
        a = n(58258),
        o = n(54655),
        r = n(4565),
        l = n(12556),
        d = n(35047),
        s = n(89991),
        u = n(16820),
        c = n(47528),
        v = (e) => {
          let { markets: i, selectedMarketId: n } = e,
            { targetChain: t } = (0, s.Z_)();
          return (0, a.useMemo)(
            () =>
              i
                ? i
                    .map((e) => {
                      var i, a, s, v, p;
                      let h = (0, l.wk)(e.loanAsset),
                        m = (0, l.wk)(e.collateralAsset),
                        y = (0, c.f)(e),
                        g = (0, u.Pi)(
                          null === (i = e.state) || void 0 === i ? void 0 : i.dailyNetBorrowApy,
                          r.safeParseNumber
                        ),
                        k = (0, u.Pi)(
                          null === (a = e.state) || void 0 === a ? void 0 : a.dailyBorrowApy,
                          r.safeParseNumber
                        ),
                        f = (0, o.bhT)(t.id, e.uniqueKey, null == m ? void 0 : m.address).filter(
                          d.isDefined
                        ),
                        b = (0, o.pTE)({ address: e.oracleAddress, ...e.oracleFeed }),
                        w =
                          (null !==
                            (v =
                              null === (s = e.state) || void 0 === s
                                ? void 0
                                : s.liquidityAssets) && void 0 !== v
                            ? v
                            : 0n) +
                          (null !== (p = e.reallocatableLiquidityAssets) && void 0 !== p ? p : 0n),
                        A = h.toUsd(w);
                      return {
                        market: e,
                        loanAsset: h,
                        collateralAsset: m,
                        rewards: y,
                        oracleName: b,
                        liquidity: { amount: w, value: A },
                        netApy: { dailyNetBorrowApy: g, dailyBorrowApy: k, rewards: y, points: f },
                        isSelected: e.uniqueKey === n,
                      };
                    })
                    .sort((0, d.bigIntComparator)((e) => e.liquidity.value, 'desc'))
                : [],
            [i, n, t.id]
          );
        },
        p = n(34571);
      let h = [
          {
            id: 'market',
            header: () =>
              (0, t.tZ)(o.xvT.Body.XXXS.Regular, {
                marginLeft: '12px',
                color: 'text.secondary',
                children: 'Market',
              }),
            cell: function (e) {
              let { row: i } = e,
                { targetChainId: n } = (0, s.Z_)();
              return (0, t.BX)(o.Kqy, {
                gap: 'xs',
                align: 'center',
                'data-testid': 'market-cell-'.concat(i.original.market.uniqueKey.toLowerCase()),
                children: [
                  (0, t.tZ)(o.k1R, {
                    ...i.original.market,
                    chainId: n,
                    maxLength: 6,
                    TextVariant: o.xvT.Body.XXS.Regular,
                  }),
                  i.original.market.oracleFeed &&
                    (0, t.tZ)(o.Vp9, {
                      variant: 'main',
                      label: (0, d.formatLongString)(i.original.oracleName, 15),
                    }),
                  i.original.isSelected &&
                    (0, t.tZ)(o.JO$, { icon: 'CheckPlain20', color: 'text.body' }),
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
              let { row: i } = e;
              return i.original.loanAsset
                ? (0, t.tZ)(o.UuD, {
                    withAvatar: !0,
                    token: i.original.loanAsset,
                    amount: i.original.liquidity.amount,
                    maxLength: 6,
                    TextVariant: o.xvT.Body.XXXS.Regular,
                    value: i.original.liquidity.value,
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
                ? (0, t.tZ)(p.Z, {
                    variant: 'market',
                    performanceFee: BigInt(0),
                    netApy: i.original.netApy.dailyNetBorrowApy,
                    apy: i.original.netApy.dailyBorrowApy,
                    rewards: i.original.netApy.rewards,
                    points: i.original.netApy.points,
                    TextVariant: o.xvT.Body.XXXS.Regular,
                    isHoverable: !1,
                  })
                : null;
            },
          },
        ],
        m = [
          {
            id: 'market',
            header: 'Market',
            cell: (e) => {
              var i;
              let { row: n } = e;
              return (0, t.BX)(o.Kqy, {
                direction: 'row',
                gap: 'xs',
                align: 'center',
                wrap: 'wrap',
                style: { marginBlock: '12px' },
                children: [
                  (0, t.tZ)(o.k1R, { ...n.original.market, chainId: 1 }),
                  n.original.market.collateralAsset &&
                    (0, t.tZ)(o.UuD, {
                      withAvatar: !0,
                      token: (0, l.wk)(n.original.market.collateralAsset),
                      amount:
                        null === (i = n.original.market.state) || void 0 === i
                          ? void 0
                          : i.liquidityAssets,
                      value: n.original.liquidity.value,
                    }),
                  (0, t.tZ)(p.Z, {
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
      var y = (0, a.memo)((e) => {
        var i, n;
        let {
            isOpen: r,
            isLoading: l,
            markets: d,
            selectedMarket: s,
            buttonLabel: u,
            side: c = 'bottom',
            align: p = 'end',
            direction: y = 'column',
            onOpenChange: g,
            onSelect: k,
          } = e,
          f = (0, o.CPt)(),
          b = v({ markets: d, selectedMarketId: null == s ? void 0 : s.uniqueKey }),
          w = (0, a.useMemo)(() => (f ? m : h), [f]),
          A = (0, a.useMemo)(() => {
            if (!s) return '';
            let e = (0, o.lAJ)({
                collateralAsset: null == s ? void 0 : s.collateralAsset,
                loanAsset: null == s ? void 0 : s.loanAsset,
                maxLength: 10,
              }),
              i = s.lltv
                ? o.$0l.percent
                    .readable()
                    .trailingZero(!1)
                    .digits(0)
                    .unit('%')
                    .of(BigInt(s.lltv), 18)
                : '';
            return ''.concat(e, ' ').concat(i);
          }, [s]);
        return l
          ? (0, t.tZ)(o.OdW, { width: '150px', height: '57px', borderRadius: '20px' })
          : (0, t.BX)(o.Ce2.Root, {
              open: r,
              onOpenChange: g,
              children: [
                (0, t.BX)(o.Kqy, {
                  direction: y,
                  gap: 'xs',
                  flex: 1,
                  align: 'row' === y ? 'center' : 'start',
                  children: [
                    u &&
                      (0, t.tZ)(o.xvT.Body.XXXS.Regular, { color: 'text.secondary', children: u }),
                    (0, t.tZ)(o.Ce2.Trigger, {
                      children: (0, t.tZ)(o.zxk, {
                        iconLeft: (0, t.tZ)(o.Kqy, {
                          direction: 'row',
                          align: 'center',
                          gap: 'xs',
                          children: (0, t.tZ)(o.Pws, {
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
                        loading: l,
                        iconRight: 'ChevronPlain20',
                        variant: 'secondary',
                        label: A,
                        iconRightProps: {
                          style: {
                            transition: 'transform 0.2s ease-in-out',
                            transform: r ? 'rotate(180deg)' : 'rotate(0deg)',
                          },
                        },
                        onClick: () => g(!r),
                        'data-testid': 'select-market-trigger',
                      }),
                    }),
                  ],
                }),
                (0, t.tZ)(o.Ce2.Portal, {
                  children: (0, t.tZ)(o.Ce2.Content, {
                    side: c,
                    sideOffset: 2,
                    align: p,
                    width: 'min(600px, 90vw)',
                    children: (0, t.tZ)(o.Ce2.Table, {
                      maxHeight: 262,
                      data: b,
                      columnsDefs: w,
                      columnWidths: ['53%', '190px'],
                      onRowClick: (e) => k(e.market.uniqueKey),
                    }),
                  }),
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
            isConfirmDisabled: v,
          } = e,
          { account: p, modal: h } = (0, r.Z_)(),
          m = (0, o.ajf)('s');
        return (0, t.tZ)(t.HY, {
          children: p.isConnected
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
                        !m &&
                          !v &&
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
                  onClick: () => h.open(),
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
          var i, n, d, u, c, v, p, h, m, y, g, k, f, b;
          let { userAddress: w, market: A, state: Z, position: q } = e,
            { initial: B, latest: x } = Z;
          if (!A.collateralAsset || !A.loanAsset) return;
          let C = (0, o.wk)(A.collateralAsset),
            K = (0, o.wk)(A.loanAsset),
            T =
              null == B
                ? void 0
                : null === (i = B.tryGetAccrualPosition(w, A.uniqueKey)) || void 0 === i
                  ? void 0
                  : i.accrueInterest(B.block.timestamp),
            P =
              null == x
                ? void 0
                : null === (n = x.tryGetAccrualPosition(w, A.uniqueKey)) || void 0 === n
                  ? void 0
                  : n.accrueInterest(x.block.timestamp),
            F = (0, l.isDefined)(
              null == q ? void 0 : null === (d = q.state) || void 0 === d ? void 0 : d.borrowAssets
            )
              ? null === (u = q.state) || void 0 === u
                ? void 0
                : u.borrowAssets
              : null,
            D = (0, l.isDefined)(T) ? T.borrowAssets : void 0,
            O = (0, l.isDefined)(P) ? P.borrowAssets : void 0,
            M = (0, l.isDefined)(null == q ? void 0 : q.borrowAssetsUsd)
              ? (0, a.safeParseNumber)(q.borrowAssetsUsd)
              : null,
            S = (0, l.isDefined)(D) ? (null == K ? void 0 : K.toUsd(D)) : void 0,
            I = (0, l.isDefined)(O) ? (null == K ? void 0 : K.toUsd(O)) : void 0,
            V = (0, l.isDefined)(
              null == q ? void 0 : null === (c = q.state) || void 0 === c ? void 0 : c.borrowShares
            )
              ? null === (v = q.state) || void 0 === v
                ? void 0
                : v.borrowShares
              : null,
            L = (0, l.isDefined)(T) ? T.borrowShares : void 0,
            U = (0, l.isDefined)(P) ? P.borrowShares : void 0,
            X = (0, l.isDefined)(
              null == q ? void 0 : null === (p = q.state) || void 0 === p ? void 0 : p.collateral
            )
              ? q.state.collateral
              : null,
            W = (0, l.isDefined)(T) ? T.collateral : void 0,
            R = (0, l.isDefined)(P) ? P.collateral : void 0,
            _ = (0, l.isDefined)(null == q ? void 0 : q.collateralUsd)
              ? (0, a.safeParseNumber)(q.collateralUsd)
              : null,
            N = (0, l.isDefined)(T) ? (null == C ? void 0 : C.toUsd(T.collateral)) : void 0,
            z = (0, l.isDefined)(P) ? (null == C ? void 0 : C.toUsd(P.collateral)) : void 0,
            $ = (0, l.isDefined)(null == q ? void 0 : q.healthFactor)
              ? (0, a.safeParseNumber)(q.healthFactor)
              : null,
            E = (0, l.isDefined)(T) ? T.healthFactor : void 0,
            H = (0, l.isDefined)(P) ? P.healthFactor : void 0,
            G = (0, l.isDefined)(null == q ? void 0 : q.priceVariationToLiquidationPrice)
              ? (0, a.safeParseNumber)(q.priceVariationToLiquidationPrice)
              : null,
            Y = (0, l.isDefined)(null == T ? void 0 : T.priceVariationToLiquidationPrice)
              ? T.priceVariationToLiquidationPrice
              : void 0,
            j = (0, l.isDefined)(null == P ? void 0 : P.priceVariationToLiquidationPrice)
              ? P.priceVariationToLiquidationPrice
              : void 0,
            J =
              (0, l.isDefined)(
                null == q
                  ? void 0
                  : null === (h = q.market.state) || void 0 === h
                    ? void 0
                    : h.price
              ) && (0, l.isDefined)(G)
                ? (0, o.DZ)({
                    collateralPrice: q.market.state.price,
                    priceVariationToLiquidationPrice: G,
                  })
                : null,
            Q = (0, l.isDefined)(T) ? (null == T ? void 0 : T.liquidationPrice) : void 0,
            ee = (0, l.isDefined)(P) ? (null == P ? void 0 : P.liquidationPrice) : void 0,
            ei =
              (0, l.isDefined)(F) &&
              (0, l.isDefined)(X) &&
              (0, l.isDefined)(
                null == q
                  ? void 0
                  : null === (m = q.state) || void 0 === m
                    ? void 0
                    : m.borrowShares
              ) &&
              (0, l.isDefined)(null == q ? void 0 : q.market.state) &&
              null !==
                (b = t.MarketUtils.getLtv(
                  { collateral: X, borrowShares: q.state.borrowShares },
                  {
                    totalBorrowAssets:
                      null == q
                        ? void 0
                        : null === (y = q.market.state) || void 0 === y
                          ? void 0
                          : y.borrowAssets,
                    totalBorrowShares:
                      null == q
                        ? void 0
                        : null === (g = q.market.state) || void 0 === g
                          ? void 0
                          : g.borrowShares,
                    price:
                      null !==
                        (f =
                          null == q
                            ? void 0
                            : null === (k = q.market.state) || void 0 === k
                              ? void 0
                              : k.price) && void 0 !== f
                        ? f
                        : void 0,
                  }
                )) &&
              void 0 !== b
                ? b
                : null,
            en = (0, l.isDefined)(T) ? (null == T ? void 0 : T.ltv) : void 0,
            et = (0, l.isDefined)(P) ? (null == P ? void 0 : P.ltv) : void 0,
            ea = (!(0, l.isDefined)(D) || 0n === D) && (0, l.isDefined)(O),
            eo = (!(0, l.isDefined)(W) || 0n === W) && (0, l.isDefined)(R),
            er = { apiValue: F, initialOnchainValue: D, latestSimulatedValue: O },
            el = { apiValue: M, initialOnchainValue: S, latestSimulatedValue: I },
            ed = { apiValue: V, initialOnchainValue: L, latestSimulatedValue: U },
            es = { apiValue: X, initialOnchainValue: W, latestSimulatedValue: R },
            eu = { apiValue: _, initialOnchainValue: N, latestSimulatedValue: z },
            ec = { apiValue: ei, initialOnchainValue: en, latestSimulatedValue: et },
            ev = { apiValue: J, initialOnchainValue: Q, latestSimulatedValue: ee },
            ep = { apiValue: G, initialOnchainValue: Y, latestSimulatedValue: j },
            eh = { apiValue: $, initialOnchainValue: E, latestSimulatedValue: H },
            em = {
              ...(null != q ? q : {}),
              isSimulated: !1,
              market: A,
              isNew: ea && eo,
              borrowAssets: er,
              borrowAssetsUsd: el,
              borrowShares: ed,
              collateral: es,
              collateralUsd: eu,
              ltv: ec,
              liquidationPrice: ev,
              priceVariationToLiquidationPrice: ep,
              healthFactor: eh,
              simulatedValues: {
                borrowAssets: (0, r.rvY)(er),
                borrowAssetsUsd: (0, r.rvY)(el),
                borrowShares: (0, r.rvY)(ed),
                collateral: (0, r.rvY)(es),
                collateralUsd: (0, r.rvY)(eu),
                ltv: (0, r.rvY)(ec),
                liquidationPrice: (0, r.rvY)(ev),
                priceVariationToLiquidationPrice: (0, r.rvY)(ep),
                healthFactor: (0, r.rvY)(eh),
              },
            };
          return { ...em, isSimulated: s(em) };
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
    34937: function (e, i, n) {
      n.d(i, {
        Ai: function () {
          return u;
        },
        Iz: function () {
          return s;
        },
        Vl: function () {
          return d;
        },
      });
      var t,
        a,
        o = n(56489),
        r = n(13191),
        l = n(35047);
      function d(e) {
        return (0, o.Z)(e, { unit: 'mo', duration: 3 })
          ? 'quarterlyNetApy'
          : 'mo' === e
            ? 'monthlyNetApy'
            : 'w' === e
              ? 'weeklyNetApy'
              : 'allTimeNetApy';
      }
      function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return Math.floor(Number(l.Time.timestamp()) / 60) * e;
      }
      function u(e) {
        let { timeFrame: i, now: n } = e;
        return {
          startTimestamp: i ? n - l.Time.s.fromPeriod(i) : 0,
          endTimestamp: n,
          interval: 'w' === i ? r.TimeseriesInterval.Hour : r.TimeseriesInterval.Day,
        };
      }
      ((t = a || (a = {})).OneDay = '1d'),
        (t.OneWeek = '1w'),
        (t.OneMonth = '1m'),
        (t.ThreeMonths = '3m'),
        (t.OneYear = '1y'),
        (t.YearToDay = 'ytd'),
        (t.AllTime = 'all');
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
            isConfirmDisabled: v,
            hasModifiedOperation: p,
          } = e,
          { account: h } = (0, t.Z_)(),
          m = (0, a.Z)(i, 0n === n && 0n === o, r, !1, l, d, s, u, c, h.isWrongChain, !1);
        return v && p
          ? { bundlerButtonLabel: m, confirmButtonLabel: m }
          : r
            ? { bundlerButtonLabel: 'Add to bundler', confirmButtonLabel: m }
            : {
                bundlerButtonLabel: p ? 'Save in bundler' : 'View in bundler',
                confirmButtonLabel: m,
              };
      };
    },
    53745: function (e, i, n) {
      var t = n(58258);
      i.Z = (e, i, n) =>
        (0, t.useMemo)(() => {
          var t;
          if (!n) return !1;
          if (!e) return !0;
          let a = null == i ? void 0 : i.tryGetHolding(e, n);
          return null === (t = null == a ? void 0 : a.canTransfer) || void 0 === t || t;
        }, [i, e, n]);
    },
    66395: function (e, i, n) {
      var t = n(58258);
      i.Z = (e, i, n) =>
        (0, t.useMemo)(
          () =>
            n
              ? 'You must lower your LTV below the Liquidation LTV to take this action'
              : e
                ? 'Insufficient '.concat(e.symbol, ' Balance')
                : i,
          [i, n, e]
        );
    },
    34550: function (e, i, n) {
      var t = n(58258),
        a = n(3100);
      i.Z = (e, i, n, o, r, l, d, s, u, c, v) =>
        (0, t.useMemo)(
          () =>
            v
              ? ''.concat((0, a.Z)(e), ' disabled')
              : i
                ? 'Enter an amount'
                : c
                  ? 'Wrong network'
                  : !n && o
                    ? 'Editing'
                    : s && u
                      ? 'Could not fetch block'
                      : r ||
                        (d
                          ? d.message
                          : 0 !== l.length && (1 !== l.length || n)
                            ? 'Finalize bundle'
                            : 'Review '.concat(e)),
          [i, o, u, n, l.length, s, d, r, c, e, v]
        );
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
