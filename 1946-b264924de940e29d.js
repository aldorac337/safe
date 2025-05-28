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
    (e._sentryDebugIds[t] = 'd6bc034a-e37a-45f7-831e-376e3135efe2'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-d6bc034a-e37a-45f7-831e-376e3135efe2'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1946],
  {
    77345: function (e, t, n) {
      n.d(t, {
        sW: function () {
          return c;
        },
      });
      var a = n(55412),
        s = n(3245),
        i = n(95413),
        l = n(41512),
        r = n(24387);
      function o() {
        let e = (0, a._)([
          '\n  query GetUserTotalDepositWithSdkPositions(\n    $where: VaultFilters\n    $orderBy: VaultOrderBy\n    $orderDirection: OrderDirection\n    $first: Int\n    $skip: Int\n  ) {\n    vaults(\n      where: $where\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      first: $first\n      skip: $skip\n    ) {\n      items {\n        id\n        address\n        asset {\n          ...assetFields\n        }\n      }\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      let d = {},
        u = (0, s.Ps)(o(), l.n, r.G);
      function c(e) {
        let t = { ...d, ...e };
        return i.aM(u, t);
      }
    },
    55872: function (e, t, n) {
      n.d(t, {
        m: function () {
          return y;
        },
      });
      var a = n(78286),
        s = n(58258),
        i = n(54655),
        l = n(17965),
        r = n(40252),
        o = n(35047),
        d = n(50825),
        u = n(38819);
      let c = (0, u.Z)('div', { target: 'eyr4h7c0' })(
          'min-width:220px;max-width:300px;padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ' 0;'
        ),
        p = (0, u.Z)(i.Kqy, { target: 'eyr4h7c1' })(
          'padding:0px ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';min-height:34px;'
        ),
        v = (0, u.Z)(p, { target: 'eyr4h7c2' })(
          'padding:10px ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';'
        ),
        h = (0, u.Z)(i.xvT.Body.XXS.Regular, { target: 'eyr4h7c3' })('display:contents;');
      var m = (0, s.memo)((e) => {
          let { className: t, collateralExposure: n, targetChainId: u } = e,
            m = (0, s.useMemo)(
              () =>
                Array.from(n.lltvs)
                  .map((e) =>
                    ''.concat(i.$0l.percent.unit('%').trailingZero(!1).digits(1).of(e, 18))
                  )
                  .join(', '),
              [n]
            ),
            y = (0, s.useMemo)(() => {
              let e = new Set();
              return Array.from(n.oracles)
                .map((e) => {
                  let t = 'string' == typeof e,
                    n = t ? e : e.address;
                  return {
                    label: t
                      ? (0, i.GQT)(e)
                      : e.type === l.OracleType.Unknown
                        ? (0, i.GQT)(n)
                        : (0, o.formatLongString)((0, i.pTE)(e), 30) || (0, i.GQT)(n),
                    url: r.ChainUtils.getExplorerAddressUrl(u, n),
                    address: n,
                  };
                })
                .filter((t) => {
                  let n = ''.concat(t.label, '-').concat(t.url, '-').concat(t.address);
                  return !e.has(n) && (e.add(n), !0);
                });
            }, [n.oracles, u]);
          return (0, a.tZ)(c, {
            className: t,
            children: (0, a.BX)(i.Kqy, {
              direction: 'column',
              children: [
                (0, a.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, a.tZ)(i.xvT.Body.XXS.Regular, {
                      color: 'text.body',
                      children: 'Collateral',
                    }),
                    (0, a.BX)(i.Kqy, {
                      align: 'center',
                      gap: 4,
                      children: [
                        (0, a.tZ)(i.qEK, { src: n.token.logoURI, size: 'small' }),
                        (0, a.tZ)(h, {
                          children: n.token.symbol
                            ? (0, o.formatLongString)(n.token.symbol, 35)
                            : '-',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.tZ)(i.Z0O, {}),
                (0, a.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, a.tZ)(i.xvT.Body.XXS.Regular, { color: 'text.body', children: 'LLTV' }),
                    (0, a.tZ)(i.xvT.Body.XXS.Regular, { children: m }),
                  ],
                }),
                (0, a.tZ)(i.Z0O, {}),
                (0, a.BX)(v, {
                  align: 'center',
                  justify: 'space-between',
                  gap: 's',
                  children: [
                    (0, a.tZ)(i.xvT.Body.XXS.Regular, { children: 'Oracle' }),
                    (0, a.tZ)(i.Kqy, {
                      direction: 'column',
                      gap: 5,
                      align: 'end',
                      children: y.map((e, t) =>
                        (0, a.tZ)(
                          d.Z,
                          {
                            href: e.url,
                            mode: 'external',
                            buttonProps: { variant: 'ghost', size: 'small', label: e.label },
                          },
                          'oracleLink_'.concat(t)
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        y = (0, s.memo)((e) => {
          let {
              className: t,
              collateralExposures: n,
              targetChainId: l,
              extraInfo: r,
              align: o = 'left',
              maxTokensCount: d,
            } = e,
            u = (0, s.useMemo)(
              () =>
                n.map((e) => ({
                  hoverCardContent: (0, a.tZ)(m, { collateralExposure: e, targetChainId: l }),
                  logoUrl: e.token.logoURI,
                })),
              [n, l]
            );
          return (0, a.tZ)(i.$xj, {
            className: t,
            items: u,
            extraInfo: r,
            align: o,
            maxTokensCount: d,
          });
        });
    },
    73115: function (e, t, n) {
      n.d(t, {
        I: function () {
          return a.Z;
        },
      });
      var a = n(92148);
    },
    69430: function (e, t, n) {
      n.d(t, {
        p: function () {
          return W;
        },
      });
      var a = n(78286),
        s = n(58258),
        i = n(54655),
        l = n(53863),
        r = n(70064),
        o = n(12556),
        d = n(94646),
        u = n(53644),
        c = n(22683),
        p = n(34896),
        v = n(89805),
        h = n(89991),
        m = n(91766),
        y = n(53745),
        g = n(66395),
        f = n(71021),
        A = n(73057),
        Z = n(25596),
        b = n(83897),
        x = n(76280),
        w = n(12472),
        B = (0, s.memo)(() =>
          (0, a.BX)(i.Kqy, {
            direction: 'column',
            gap: '20px',
            children: [
              (0, a.BX)(i.Kqy, {
                direction: 'column',
                gap: 'xs',
                children: [
                  (0, a.BX)(i.Kqy, {
                    direction: 'row',
                    justify: 'space-between',
                    children: [
                      (0, a.tZ)(i.OdW, { height: '20px', width: '170px' }),
                      (0, a.tZ)(i.OdW, { height: '20px', width: '80px' }),
                    ],
                  }),
                  (0, a.tZ)(i.OdW, { height: '87px', width: '100%', borderRadius: '20px' }),
                ],
              }),
              (0, a.tZ)(i.OdW, { height: '257px', width: '100%', borderRadius: '20px' }),
              (0, a.tZ)(i.OdW, { height: '48px', width: '100%', borderRadius: '100px' }),
            ],
          })
        ),
        k = n(55412),
        M = n(3245),
        C = n(95413),
        T = n(93114),
        I = n(24387);
      function P() {
        let e = (0, k._)([
          '\n  query GetDepositDialogState($address: String!, $chainId: Int!) {\n    vaultByAddress(address: $address, chainId: $chainId) {\n      id\n      name\n      address\n      asset {\n        ...simpleAssetFields\n      }\n      metadata {\n        image\n        curators {\n          name\n          image\n        }\n      }\n      warnings {\n        level\n        type\n      }\n      state {\n        id\n        dailyNetApy\n        totalAssets\n        dailyApy\n        fee\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerSuppliedToken\n          supplyApr\n        }\n        allocation {\n          id\n          supplyAssets\n          supplyAssetsUsd\n          market {\n            id\n            uniqueKey\n            lltv\n            irmAddress\n            oracleAddress\n            oracle {\n              id\n              address\n            }\n            oracleInfo {\n              type\n            }\n            loanAsset {\n              id\n              address\n            }\n            collateralAsset {\n              id\n              address\n            }\n            collateralPrice\n            ...collateralExposuresFields\n            state {\n              id\n              supplyAssets\n              borrowAssets\n              supplyShares\n              borrowShares\n              fee\n              rateAtTarget\n              timestamp\n              rewards {\n                asset {\n                  ...simpleAssetFields\n                }\n                supplyApr\n                amountPerSuppliedToken\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      let D = {},
        S = (0, M.Ps)(P(), I.G, T.j);
      var O = (0, s.memo)((e) => {
          var t, n, r, k, M, T, I, P, O, W, X, _, E;
          let { vaultAddress: q, chainId: N, onClose: V } = e,
            { account: L } = (0, h.Z_)(),
            { toggleRightPanel: K } = (0, i.s8G)(),
            { toggleDialog: U } = (0, i.DAv)(),
            {
              simulationError: R,
              operations: $,
              blockError: G,
              isPending: H,
              bundlerConfiguration: z,
              updateOperation: j,
              config: { addToSimulationState: F },
            } = (0, c.N)(),
            {
              data: Y,
              error: Q,
              loading: J,
            } = (function (e) {
              let t = { ...D, ...e };
              return C.aM(S, t);
            })({ variables: { chainId: N, address: q } }),
            ee = (0, x.q)(null == Y ? void 0 : Y.vaultByAddress);
          (0, s.useEffect)(() => {
            F(ee);
          }, [ee, F]);
          let {
              localOperation: et,
              inputAmount: en,
              setInputAmount: ea,
              isMax: es,
              setIsMax: ei,
              maxAmount: el,
              isNew: er,
              initialState: eo,
              hasModifiedDepositOperation: ed,
              confirm: eu,
              isLoading: ec,
              peripheralTokenOptions: ep,
              onPeripheralTokenOptionChange: ev,
            } = (0, f.o)(q, { origin: 'position-manager' }),
            eh = (0, s.useMemo)(
              () => (0, o.wk)(null == Y ? void 0 : Y.vaultByAddress.asset),
              [null == Y ? void 0 : Y.vaultByAddress.asset]
            ),
            [em, ey, , eg] = (0, v._)(eo.data, et, z, er),
            ef = (0, g.Z)(eg, null == ey ? void 0 : ey.message),
            eA = (0, Z.ZP)({ address: q, error: ef, isWrongChain: L.isWrongChain, chainId: N }),
            eZ = (0, y.Z)(L.address, eo.data, null == eh ? void 0 : eh.address),
            { isReadOnly: eb } = (0, o.WW)({ chainId: N, address: q }),
            ex = (0, s.useMemo)(
              () => (G && H) || !!ef || !!R || !(0, p.H)(et) || eb || L.isWrongChain || !eZ,
              [L.isWrongChain, G, eZ, H, eb, ef, et, R]
            ),
            { initialData: ew, finalData: eB } = (0, A.Z)(L.address, em, et.vaultAddress, eh),
            ek = (0, b.M)(
              et.vaultAddress,
              null == Y
                ? void 0
                : null === (t = Y.vaultByAddress) || void 0 === t
                  ? void 0
                  : t.state,
              null == Y
                ? void 0
                : null === (n = Y.vaultByAddress) || void 0 === n
                  ? void 0
                  : n.asset
            ),
            eM = (0, i.vmq)({
              chainId: N,
              vaultAddress: et.vaultAddress,
              allocation:
                null == Y
                  ? void 0
                  : null === (k = Y.vaultByAddress) || void 0 === k
                    ? void 0
                    : null === (r = k.state) || void 0 === r
                      ? void 0
                      : r.allocation,
            }),
            eC = (0, s.useMemo)(
              () => !!ey || !!eg || !eZ || !!L.isWrongChain || !(0, p.H)(et),
              [L.isWrongChain, eZ, eg, et, ey]
            ),
            eT = (0, s.useCallback)(() => {
              er ? eu() : ed && j(et.id, () => et), K(!0), V();
            }, [eu, ed, er, et, V, K, j]),
            eI = (0, s.useCallback)(() => {
              U((0, a.tZ)(d.Z, { operations: [et] }));
            }, [et, U]),
            { confirmButtonLabel: eP, bundlerButtonLabel: eD } = (0, m.Z)({
              operationLabel: 'deposit',
              inputAmount: en,
              isNew: er,
              localErrorMessage: ef,
              operations: $,
              simulationError: R,
              blockError: G,
              isPending: H,
              isConfirmDisabled: eC,
              hasModifiedOperation: ed,
              vaultAddress: q,
              chainId: N,
            });
          return J
            ? (0, a.tZ)(B, {})
            : Q || !eh
              ? (0, a.tZ)(l.c, { minHeight: '400px' })
              : (0, a.BX)(a.HY, {
                  children: [
                    (0, a.BX)(i.Kqy, {
                      direction: 'column',
                      gap: 2,
                      children: [
                        eh &&
                          (0, a.tZ)(i.TGk, {
                            header: 'Deposit '.concat(eh.symbol),
                            amount: en,
                            token: eh,
                            onChange: ea,
                            maxValue: el,
                            onMaxClick: ei,
                            isMax: es,
                            peripheralTokenOptions: ep,
                            onPeripheralTokenChange: ev,
                            disabled: ec,
                          }),
                        !eZ && (0, a.tZ)(u.r, { tokenAddress: eh.address }),
                      ],
                    }),
                    (0, a.tZ)(w.Z, {
                      vault: {
                        dailyNetApy:
                          null == Y
                            ? void 0
                            : null === (M = Y.vaultByAddress.state) || void 0 === M
                              ? void 0
                              : M.dailyNetApy,
                        dailyApy:
                          null == Y
                            ? void 0
                            : null === (T = Y.vaultByAddress.state) || void 0 === T
                              ? void 0
                              : T.dailyApy,
                        fee:
                          null == Y
                            ? void 0
                            : null === (I = Y.vaultByAddress.state) || void 0 === I
                              ? void 0
                              : I.fee,
                        allocation: (
                          null == Y
                            ? void 0
                            : null === (P = Y.vaultByAddress.state) || void 0 === P
                              ? void 0
                              : P.allocation
                        )
                          ? null == Y
                            ? void 0
                            : null === (O = Y.vaultByAddress.state) || void 0 === O
                              ? void 0
                              : O.allocation
                          : [],
                        rewards: ek,
                        points: eM,
                        address: q,
                        curators:
                          null !==
                            (X =
                              null == Y
                                ? void 0
                                : null === (W = Y.vaultByAddress.metadata) || void 0 === W
                                  ? void 0
                                  : W.curators) && void 0 !== X
                            ? X
                            : [],
                        warnings:
                          null !== (_ = null == Y ? void 0 : Y.vaultByAddress.warnings) &&
                          void 0 !== _
                            ? _
                            : [],
                        name:
                          null !== (E = null == Y ? void 0 : Y.vaultByAddress.name) && void 0 !== E
                            ? E
                            : '',
                        asset: eh,
                      },
                      initialPosition: ew.position,
                      finalPosition: eB.position,
                    }),
                    (0, a.BX)(i.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === $.length &&
                          (0, a.tZ)(i.ua7, {
                            content: eA,
                            disabled: !eA,
                            children: (0, a.tZ)(i.zxk, {
                              size: 'big',
                              variant: eC ? 'secondary' : 'primary',
                              label: eP,
                              onClick: eI,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: eC || ec,
                            }),
                          }),
                        ($.length > 0 || !eC) &&
                          (0, a.tZ)(i.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: eT,
                            label: eD,
                            'data-testid': 'bundler-button',
                            disabled: ex || ec,
                          }),
                      ],
                    }),
                  ],
                });
        }),
        W = (0, s.memo)((e) => {
          let { toggleDialog: t } = (0, i.DAv)();
          return (0, a.BX)(i.Kqy, {
            'data-testid': 'repay-dialog',
            direction: 'column',
            gap: 20,
            children: [
              (0, a.BX)(i.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, a.tZ)(i.xvT.Title.S, { children: 'Deposit' }),
                  (0, a.tZ)(i.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => t(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, a.tZ)(r.Z, {
                fallback: (0, a.tZ)(l.c, { minHeight: '494px' }),
                children: (0, a.tZ)(O, { ...e }),
              }),
            ],
          });
        });
    },
    55839: function (e, t, n) {
      n.d(t, {
        P: function () {
          return W;
        },
      });
      var a = n(78286),
        s = n(58258),
        i = n(54655),
        l = n(53863),
        r = n(70064),
        o = n(12556),
        d = n(94646),
        u = n(53644),
        c = n(22683),
        p = n(34896),
        v = n(89805),
        h = n(89991),
        m = n(91766),
        y = n(53745),
        g = n(66395),
        f = n(73057),
        A = n(48972),
        Z = n(25596),
        b = n(83897),
        x = n(76280),
        w = n(12472),
        B = (0, s.memo)(() =>
          (0, a.BX)(i.Kqy, {
            direction: 'column',
            gap: '20px',
            children: [
              (0, a.BX)(i.Kqy, {
                direction: 'column',
                gap: 'xs',
                children: [
                  (0, a.BX)(i.Kqy, {
                    direction: 'row',
                    justify: 'space-between',
                    children: [
                      (0, a.tZ)(i.OdW, { height: '20px', width: '170px' }),
                      (0, a.tZ)(i.OdW, { height: '20px', width: '80px' }),
                    ],
                  }),
                  (0, a.tZ)(i.OdW, { height: '87px', width: '100%', borderRadius: '20px' }),
                ],
              }),
              (0, a.tZ)(i.OdW, { height: '257px', width: '100%', borderRadius: '20px' }),
              (0, a.tZ)(i.OdW, { height: '48px', width: '100%', borderRadius: '100px' }),
            ],
          })
        ),
        k = n(55412),
        M = n(3245),
        C = n(95413),
        T = n(93114),
        I = n(24387);
      function P() {
        let e = (0, k._)([
          '\n  query GetWithdrawDepositDialogState($address: String!, $chainId: Int!) {\n    vaultByAddress(address: $address, chainId: $chainId) {\n      id\n      name\n      address\n      asset {\n        ...simpleAssetFields\n      }\n      metadata {\n        image\n        curators {\n          name\n          image\n        }\n      }\n      warnings {\n        level\n        type\n      }\n      state {\n        id\n        dailyNetApy\n        totalAssets\n        dailyApy\n        fee\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerSuppliedToken\n          supplyApr\n        }\n        allocation {\n          id\n          supplyAssets\n          supplyAssetsUsd\n          market {\n            id\n            uniqueKey\n            lltv\n            irmAddress\n            oracleAddress\n            oracle {\n              id\n              address\n            }\n            oracleInfo {\n              type\n            }\n            loanAsset {\n              id\n              address\n            }\n            collateralAsset {\n              id\n              address\n            }\n            collateralPrice\n            ...collateralExposuresFields\n            state {\n              id\n              supplyAssets\n              borrowAssets\n              supplyShares\n              borrowShares\n              fee\n              rateAtTarget\n              timestamp\n              rewards {\n                asset {\n                  ...simpleAssetFields\n                }\n                supplyApr\n                amountPerSuppliedToken\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      let D = {},
        S = (0, M.Ps)(P(), I.G, T.j);
      var O = (0, s.memo)((e) => {
          var t, n, r, k, M, T, I, P, O, W, X, _, E;
          let { vaultAddress: q, chainId: N, onClose: V } = e,
            { account: L } = (0, h.Z_)(),
            { toggleRightPanel: K } = (0, i.s8G)(),
            { toggleDialog: U } = (0, i.DAv)(),
            {
              simulationError: R,
              operations: $,
              blockError: G,
              isPending: H,
              bundlerConfiguration: z,
              updateOperation: j,
              config: { addToSimulationState: F },
            } = (0, c.N)(),
            {
              data: Y,
              error: Q,
              loading: J,
            } = (function (e) {
              let t = { ...D, ...e };
              return C.aM(S, t);
            })({ variables: { chainId: N, address: q } }),
            ee = (0, x.q)(null == Y ? void 0 : Y.vaultByAddress);
          (0, s.useEffect)(() => {
            F(ee);
          }, [ee, F]);
          let {
              localOperation: et,
              inputAmount: en,
              setInputAmount: ea,
              isMax: es,
              setIsMax: ei,
              maxAmount: el,
              isNew: er,
              initialState: eo,
              hasModifiedWithdrawOperation: ed,
              confirm: eu,
              isLoading: ec,
            } = (0, A.L)(q, { origin: 'position-manager' }),
            ep = (0, s.useMemo)(
              () => (0, o.wk)(null == Y ? void 0 : Y.vaultByAddress.asset),
              [null == Y ? void 0 : Y.vaultByAddress.asset]
            ),
            [ev, eh, , em] = (0, v._)(eo.data, et, z, er),
            ey = (0, g.Z)(em, null == eh ? void 0 : eh.message),
            eg = (0, Z.ZP)({ address: q, error: ey, isWrongChain: L.isWrongChain, chainId: N }),
            ef = (0, y.Z)(L.address, eo.data, null == ep ? void 0 : ep.address),
            { isReadOnly: eA } = (0, o.WW)({ chainId: N, address: q }),
            eZ = (0, s.useMemo)(
              () => (G && H) || !!ey || !!R || !(0, p.H)(et) || eA || L.isWrongChain || !ef,
              [L.isWrongChain, G, ef, H, eA, ey, et, R]
            ),
            { initialData: eb, finalData: ex } = (0, f.Z)(L.address, ev, et.vaultAddress, ep),
            ew = (0, b.M)(
              et.vaultAddress,
              null == Y
                ? void 0
                : null === (t = Y.vaultByAddress) || void 0 === t
                  ? void 0
                  : t.state,
              null == Y
                ? void 0
                : null === (n = Y.vaultByAddress) || void 0 === n
                  ? void 0
                  : n.asset
            ),
            eB = (0, i.vmq)({
              chainId: N,
              vaultAddress: et.vaultAddress,
              allocation:
                null == Y
                  ? void 0
                  : null === (k = Y.vaultByAddress) || void 0 === k
                    ? void 0
                    : null === (r = k.state) || void 0 === r
                      ? void 0
                      : r.allocation,
            }),
            ek = (0, s.useMemo)(
              () => !!eh || !!em || !ef || !!L.isWrongChain || !(0, p.H)(et),
              [et, eh, em, ef, L.isWrongChain]
            ),
            eM = (0, s.useCallback)(() => {
              er ? eu() : ed && j(et.id, () => et), K(!0), V();
            }, [eu, ed, er, et, V, K, j]),
            eC = (0, s.useCallback)(() => {
              U((0, a.tZ)(d.Z, { operations: [et] }));
            }, [et, U]),
            { confirmButtonLabel: eT, bundlerButtonLabel: eI } = (0, m.Z)({
              operationLabel: 'withdraw',
              inputAmount: en,
              isNew: er,
              localErrorMessage: ey,
              operations: $,
              simulationError: R,
              blockError: G,
              isPending: H,
              isConfirmDisabled: ek,
              hasModifiedOperation: ed,
              vaultAddress: q,
              chainId: N,
            });
          return J || !ep
            ? (0, a.tZ)(B, {})
            : Q
              ? (0, a.tZ)(l.c, { minHeight: '400px' })
              : (0, a.BX)(a.HY, {
                  children: [
                    (0, a.BX)(i.Kqy, {
                      direction: 'column',
                      gap: 2,
                      children: [
                        ep &&
                          (0, a.tZ)(i.TGk, {
                            header: 'Withdraw '.concat(ep.symbol, ' from vault'),
                            amount: en,
                            token: ep,
                            onChange: ea,
                            maxValue: el,
                            onMaxClick: ei,
                            isMax: es,
                            disabled: ec,
                          }),
                        !ef && (0, a.tZ)(u.r, { tokenAddress: ep.address }),
                      ],
                    }),
                    (0, a.tZ)(w.Z, {
                      vault: {
                        dailyNetApy:
                          null == Y
                            ? void 0
                            : null === (M = Y.vaultByAddress.state) || void 0 === M
                              ? void 0
                              : M.dailyNetApy,
                        dailyApy:
                          null == Y
                            ? void 0
                            : null === (T = Y.vaultByAddress.state) || void 0 === T
                              ? void 0
                              : T.dailyApy,
                        fee:
                          null == Y
                            ? void 0
                            : null === (I = Y.vaultByAddress.state) || void 0 === I
                              ? void 0
                              : I.fee,
                        allocation: (
                          null == Y
                            ? void 0
                            : null === (P = Y.vaultByAddress.state) || void 0 === P
                              ? void 0
                              : P.allocation
                        )
                          ? null == Y
                            ? void 0
                            : null === (O = Y.vaultByAddress.state) || void 0 === O
                              ? void 0
                              : O.allocation
                          : [],
                        rewards: ew,
                        points: eB,
                        address: q,
                        curators:
                          null !==
                            (X =
                              null == Y
                                ? void 0
                                : null === (W = Y.vaultByAddress.metadata) || void 0 === W
                                  ? void 0
                                  : W.curators) && void 0 !== X
                            ? X
                            : [],
                        warnings:
                          null !== (_ = null == Y ? void 0 : Y.vaultByAddress.warnings) &&
                          void 0 !== _
                            ? _
                            : [],
                        name:
                          null !== (E = null == Y ? void 0 : Y.vaultByAddress.name) && void 0 !== E
                            ? E
                            : '',
                        asset: ep,
                      },
                      initialPosition: eb.position,
                      finalPosition: ex.position,
                    }),
                    (0, a.BX)(i.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === $.length &&
                          (0, a.tZ)(i.ua7, {
                            content: eg,
                            disabled: !eg,
                            children: (0, a.tZ)(i.zxk, {
                              size: 'big',
                              variant: ek ? 'secondary' : 'primary',
                              label: eT,
                              onClick: eC,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: ek || ec,
                            }),
                          }),
                        ($.length > 0 || !ek) &&
                          (0, a.tZ)(i.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: eM,
                            label: eI,
                            'data-testid': 'bundler-button',
                            disabled: eZ || ec,
                          }),
                      ],
                    }),
                  ],
                });
        }),
        W = (0, s.memo)((e) => {
          let { toggleDialog: t } = (0, i.DAv)();
          return (0, a.BX)(i.Kqy, {
            'data-testid': 'repay-dialog',
            direction: 'column',
            gap: 20,
            children: [
              (0, a.BX)(i.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, a.tZ)(i.xvT.Title.S, { children: 'Withdraw' }),
                  (0, a.tZ)(i.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => t(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, a.tZ)(r.Z, {
                fallback: (0, a.tZ)(l.c, { minHeight: '494px' }),
                children: (0, a.tZ)(O, { ...e }),
              }),
            ],
          });
        });
    },
    1208: function (e, t, n) {
      var a = n(78286),
        s = n(58258),
        i = n(12556),
        l = n(54655),
        r = n(26726),
        o = n(73115),
        d = n(69430),
        u = n(55839);
      t.default = (0, s.memo)((e) => {
        let {
            vaultAddress: t,
            chainId: n,
            enableDeposit: c = !0,
            enableWithdraw: p = !0,
            showFeatureCallOut: v = !1,
            side: h = 'top',
            align: m = 'end',
          } = e,
          y = (0, r.hz)({
            depositVault: r.TP.POSITION_MANAGER_DEPOSIT_INTO_VAULT,
            withdrawVault: r.TP.POSITION_MANAGER_WITHDRAW_VAULT_DEPOSIT,
            featureCallOut: r.TP.POSITION_MANAGER_FEATURE_CALL_OUT,
          }),
          { toggleDialog: g } = (0, l.DAv)(),
          [f, A] = (0, s.useState)(!1),
          Z = (0, l.ajf)(860),
          { isRightPanelOpen: b } = (0, l.s8G)();
        return (0, a.tZ)(o.I, {
          side: 'top',
          enabled: v && y.featureCallOut && !Z && !b,
          featureKey: 'position-manager',
          videoUrl: (0, i.$B)('v2/assets/videos/position-manager-feature-callout.mp4'),
          fallbackImageUrl: (0, i.$B)('v2/assets/images/position-manager-feature-callout.png'),
          title: 'Position Manager Is Live!',
          description: [
            'Introducing Position Manager – a faster way to manage your positions directly from the dashboard.',
            'No need to click into each vault or market—adjust, monitor, and optimize your positions in just a few clicks.',
          ],
          children: (e) => {
            let { visible: s, markAsSeen: i } = e;
            return (0, a.BX)(l.h_2.Root, {
              open: f,
              onOpenChange: (e) => {
                null == i || i(), A(e);
              },
              children: [
                (0, a.tZ)(l.h_2.Trigger, {
                  asChild: !0,
                  children: (0, a.tZ)('div', {
                    style: { display: 'flex' },
                    children: (0, a.tZ)(l.ua7, {
                      content: 'Manage your position.',
                      disabled: s,
                      children: (0, a.tZ)(l.zxk, {
                        'data-testid': 'position-manager-button',
                        size: 'small',
                        variant: 'ghost',
                        iconAlone: 'DotsPlain20',
                      }),
                    }),
                  }),
                }),
                (0, a.tZ)(l.h_2.Portal, {
                  children: (0, a.BX)(l.h_2.Content, {
                    align: m,
                    side: h,
                    sideOffset: 7,
                    children: [
                      y.depositVault &&
                        c &&
                        (0, a.BX)(l.h_2.Item, {
                          'data-testid': 'deposit-into-vault',
                          onClick: (e) => {
                            e.stopPropagation();
                          },
                          onSelect: () => {
                            g(
                              (0, a.tZ)(d.p, { chainId: n, vaultAddress: t, onClose: () => g(!1) }),
                              { maxWidth: '540px' }
                            );
                          },
                          children: [
                            (0, a.tZ)(l.JO$, { icon: 'AddPlain20', color: 'icon.primary' }),
                            'Deposit into vault',
                          ],
                        }),
                      y.withdrawVault &&
                        p &&
                        (0, a.BX)(l.h_2.Item, {
                          'data-testid': 'withdraw-vault-deposit',
                          onClick: (e) => {
                            e.stopPropagation();
                          },
                          onSelect: () => {
                            g(
                              (0, a.tZ)(u.P, { chainId: n, vaultAddress: t, onClose: () => g(!1) }),
                              { maxWidth: '540px' }
                            );
                          },
                          children: [
                            (0, a.tZ)(l.JO$, { icon: 'RemovePlain20', color: 'icon.primary' }),
                            'Withdraw from vault',
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
    12472: function (e, t, n) {
      var a = n(78286),
        s = n(58258),
        i = n(4565),
        l = n(54655),
        r = n(35047),
        o = n(55872),
        d = n(73478),
        u = n(89991),
        c = n(9834),
        p = n(16820),
        v = n(6423),
        h = n(78017);
      t.Z = (0, s.memo)((e) => {
        var t, n, m;
        let { initialPosition: y, finalPosition: g, vault: f } = e,
          { targetChain: A } = (0, u.Z_)(),
          Z = (0, s.useMemo)(() => (0, c.m)(f.allocation), [f.allocation]),
          b = (0, s.useMemo)(
            () => l.$0l.percent.digits(2).unit('%').of(f.dailyNetApy),
            [f.dailyNetApy]
          ),
          x = (0, s.useMemo)(
            () => (0, v.Q)({ chainName: A.name, vaultAddress: f.address, vaultName: f.name }),
            [f.address, f.name, A.name]
          ),
          w = (0, s.useMemo)(
            () => ((0, r.isDefined)(f.warnings) ? (0, l.Myy)(f.warnings) : void 0),
            [f.warnings]
          ),
          B = (0, s.useMemo)(() => {
            let e = (0, l.Uaj)(f.name);
            return e ? (0, r.formatLongString)(e, 22) : '';
          }, [f.name]),
          k = (0, s.useMemo)(() => {
            if (f.dailyApy) return (0, i.safeParseNumber)(f.dailyApy);
          }, [f.dailyApy]),
          M = (0, s.useMemo)(() => {
            if (f.fee) return (0, i.safeParseNumber)(f.fee);
          }, [f.fee]);
        return (0, a.BX)(l.soA.Root, {
          width: '100%',
          height: '257px',
          children: [
            (0, a.BX)(l.soA.Header, {
              children: [
                (0, a.tZ)(l.qEK, { size: 'large', src: f.asset.logoURI }),
                (0, a.BX)(l.Kqy, {
                  direction: 'column',
                  gap: 'xs',
                  children: [
                    (0, a.tZ)(l.ua7, {
                      content: 'Go to vault.',
                      children: (0, a.tZ)(l.Kqy, {
                        children: (0, a.tZ)(d.h, {
                          href: x,
                          target: '_blank',
                          children: (0, a.tZ)(l.ZT$, {
                            TextVariant: l.xvT.Title.XS,
                            underlineOnHover: !0,
                            children: B,
                          }),
                        }),
                      }),
                    }),
                    (0, a.BX)(l.Kqy, {
                      direction: 'row',
                      align: 'center',
                      gap: 4,
                      children: [
                        null === (t = f.curators) || void 0 === t
                          ? void 0
                          : t.map((e) =>
                              (0, a.tZ)(
                                l.Vp9,
                                {
                                  variant: 'main',
                                  label: e.name,
                                  startIcon: (0, a.tZ)(l.qEK, {
                                    src: e.image,
                                    size: 'small',
                                    style: { width: 16, height: 16 },
                                  }),
                                },
                                e.name
                              )
                            ),
                        (0, a.tZ)(l.mUV, {
                          size: 'small',
                          variant: 'ghost',
                          toCopy: f.address,
                          tooltipMessage: 'Copy Vault Address.',
                          toastMessage: 'Vault address copied to clipboard.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.BX)(l.soA.List, {
              children: [
                (0, a.tZ)(l.soA.ListItem, {
                  label: 'My Position ('.concat(
                    (0, r.formatLongString)(null !== (n = f.asset.symbol) && void 0 !== n ? n : ''),
                    ')'
                  ),
                  value: (0, a.tZ)(l.soA.ValueChange, {
                    initialProps: { value: y },
                    finalProps: { value: g },
                    formatter: (e) =>
                      (0, p.sL)({
                        price: f.asset.price,
                        amount: e,
                        decimals: f.asset.decimals,
                        withTrailingZero: !1,
                      }),
                  }),
                }),
                (0, a.tZ)(l.soA.ListItem, {
                  label: 'APY',
                  value: (0, a.BX)(l.Kqy, {
                    gap: 2,
                    direction: 'row',
                    align: 'center',
                    children: [
                      (0, a.tZ)(l.soA.Value, { value: b }),
                      (0, a.tZ)(h.w, {
                        RewardsHoverCardProps: {
                          performanceFee: M,
                          apy: k,
                          rewards: f.rewards,
                          points: null !== (m = f.points) && void 0 !== m ? m : [],
                          variant: 'vault',
                        },
                      }),
                    ],
                  }),
                }),
                (0, a.tZ)(l.soA.ListItem, {
                  label: 'Collateral Exposure',
                  value: (0, a.tZ)(o.m, {
                    align: 'right',
                    collateralExposures: Z,
                    extraInfo: (0, a.tZ)(l.aNP, { ...w }),
                    targetChainId: A.id,
                    maxTokensCount: 5,
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    61536: function (e, t, n) {
      n.d(t, {
        q: function () {
          return d;
        },
      });
      var a = n(4565),
        s = n(12556),
        i = n(54655),
        l = n(35047);
      let r = (e) => {
          let { userAddress: t, state: n, vault: r, position: d } = e,
            { initial: u, latest: c } = n,
            p = null == u ? void 0 : u.tryGetAccrualVault(r.address),
            v = null == c ? void 0 : c.tryGetAccrualVault(r.address),
            h = (0, s.wk)(r.asset),
            m = (0, l.isDefined)(null == d ? void 0 : d.shares) ? d.shares : null,
            y = null == u ? void 0 : u.getBundleBalance(t, r.address),
            g = null == c ? void 0 : c.getBundleBalance(t, r.address),
            f = (0, l.isDefined)(null == d ? void 0 : d.assets) ? d.assets : null,
            A = (0, l.isDefined)(y) && (0, l.isDefined)(p) ? p.toAssets(y) : void 0,
            Z = (0, l.isDefined)(g) && (0, l.isDefined)(v) ? v.toAssets(g) : void 0,
            b = (0, l.isDefined)(null == d ? void 0 : d.assetsUsd)
              ? (0, a.safeParseNumber)(d.assetsUsd)
              : null,
            x =
              (0, l.isDefined)(A) && (0, l.isDefined)(h)
                ? null == h
                  ? void 0
                  : h.toUsd(A)
                : void 0,
            w =
              (0, l.isDefined)(Z) && (0, l.isDefined)(h)
                ? null == h
                  ? void 0
                  : h.toUsd(Z)
                : void 0,
            B = (!(0, l.isDefined)(y) || 0n === y) && (0, l.isDefined)(g),
            k = { apiValue: m, initialOnchainValue: y, latestSimulatedValue: g },
            M = { apiValue: f, initialOnchainValue: A, latestSimulatedValue: Z },
            C = { apiValue: b, initialOnchainValue: x, latestSimulatedValue: w },
            T = {
              ...(null != d ? d : {}),
              vault: r,
              isSimulated: !1,
              isNew: B,
              assetsUsd: C,
              assets: M,
              shares: k,
              simulatedValues: {
                shares: (0, i.rvY)(k),
                assets: (0, i.rvY)(M),
                assetsUsd: (0, i.rvY)(C),
              },
            };
          return { ...T, isSimulated: o(T) };
        },
        o = (e) => Object.values(e.simulatedValues).some((e) => e.isSimulated),
        d = (e) => {
          let { existingPositions: t, missingVaults: n, state: a, userAddress: s } = e;
          if (!s) return { positions: [], isSimulated: !1 };
          if (!t && 0 === n.length) return { positions: t, isSimulated: !1 };
          let i = [];
          (0, l.isDefined)(t) &&
            t.length > 0 &&
            t.forEach((e) => {
              let t = r({ userAddress: s, state: a, vault: e.vault, position: e });
              t && i.push(t);
            }),
            (0, l.isDefined)(n) &&
              n.length > 0 &&
              n.forEach((e) => {
                let t = r({ userAddress: s, state: a, vault: e });
                t && i.push(t);
              });
          let d = i.filter((e) => !e.isNew || !!o(e)),
            u = d.some((e) => o(e));
          return { positions: d, isSimulated: u };
        };
    },
    91766: function (e, t, n) {
      var a = n(12556),
        s = n(89991),
        i = n(34550);
      t.Z = function (e) {
        let {
            vaultAddress: t,
            operationLabel: n,
            inputAmount: l,
            isNew: r,
            localErrorMessage: o,
            operations: d,
            simulationError: u,
            blockError: c,
            isPending: p,
            isConfirmDisabled: v,
            hasModifiedOperation: h,
            chainId: m,
          } = e,
          { account: y } = (0, s.Z_)(),
          { isReadOnly: g } = (0, a.WW)({ chainId: m, address: t }),
          f = (0, i.Z)(n, 0n === l, r, !1, o, d, u, c, p, y.isWrongChain, g);
        return v && h
          ? { bundlerButtonLabel: f, confirmButtonLabel: f }
          : r
            ? { bundlerButtonLabel: 'Add to bundler', confirmButtonLabel: f }
            : {
                bundlerButtonLabel: h ? 'Save in bundler' : 'View in bundler',
                confirmButtonLabel: f,
              };
      };
    },
    76258: function (e, t, n) {
      var a = n(58258),
        s = n(35047);
      t.Z = (e, t, n) => (0, a.useMemo)(() => !(!e || (0, s.isDefined)(t)) && n, [e, n, t]);
    },
    25465: function (e, t, n) {
      n.d(t, {
        D: function () {
          return l;
        },
      });
      var a = n(58258),
        s = n(22683),
        i = n(4205);
      let l = (e, t) => {
        let { operations: n } = (0, s.N)(),
          {
            operation: l,
            index: r,
            isNew: o,
          } = (0, a.useMemo)(() => {
            let a = n.findIndex((n) => n.type === t && n.vaultAddress === e);
            return a >= 0
              ? { index: a, operation: n[a], isNew: !1 }
              : {
                  isNew: !0,
                  index: n.length,
                  operation: {
                    id: crypto.randomUUID(),
                    type: t,
                    vaultAddress: e,
                    assets: 0n,
                    shares: 0n,
                    options: { isMax: [] },
                  },
                };
          }, [n, e, t]);
        return {
          operation: l,
          initialState: (0, i.f)(r),
          finalState: (0, i.f)(r + 1),
          isNew: o,
          index: r,
        };
      };
    },
    71021: function (e, t, n) {
      n.d(t, {
        o: function () {
          return h;
        },
      });
      var a = n(58258),
        s = n(40252),
        i = n(12556),
        l = n(35047),
        r = n(22683),
        o = n(82803),
        d = n(89991),
        u = n(60410);
      let c = (e, t, n) => {
        let { account: i } = (0, d.Z_)();
        return (0, a.useMemo)(() => {
          if (!(null == i ? void 0 : i.address) || !t) return;
          let a = t.tryGetAccrualVault(e);
          if (!a) return;
          let l = t.getBundleMaxBalance(i.address, a.asset, s.DEFAULT_SLIPPAGE_TOLERANCE, n);
          if (void 0 !== l) return { assets: a.getDepositCapacityLimit(l).value, shares: 0n };
        }, [i.address, t, e, n]);
      };
      var p = n(76258),
        v = n(25465);
      let h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { account: n } = (0, d.Z_)(),
          {
            operation: h,
            initialState: m,
            isNew: y,
          } = (0, v.D)(e, o.H.InterfaceOperationType.metaMorphoDeposit),
          [g, f] = (0, a.useState)(h.assets),
          [A, Z] = (0, a.useState)(
            h.options.isMax.includes(o.H.InterfaceOperationType.metaMorphoDeposit)
          ),
          [b, , , x, w] = (0, i.$X)(h.options.disabledPeripheralTokens),
          B = c(e, null == m ? void 0 : m.data, b),
          k = (0, a.useCallback)((e) => {
            Z(!1), f(e);
          }, []),
          M = (0, p.Z)(
            n.isConnected,
            null == B ? void 0 : B.assets,
            m.isPending || m.isFetchingAny
          ),
          C = (0, a.useMemo)(
            () => ({
              type: o.H.InterfaceOperationType.metaMorphoDeposit,
              vaultAddress: e,
              assets: g,
              shares: 0n,
              id: h.id,
              options: {
                origin: t.origin,
                isMax: A ? [o.H.InterfaceOperationType.metaMorphoDeposit] : [],
                disabledPeripheralTokens: b,
              },
            }),
            [g, b, A, h.id, e, t.origin]
          ),
          { updateOperation: T } = (0, r.N)(),
          I = (0, a.useMemo)(() => {
            var t, a;
            if (!n.address) return;
            let i =
                null == m
                  ? void 0
                  : null === (t = m.data) || void 0 === t
                    ? void 0
                    : t.tryGetVault(e),
              r =
                i &&
                (null == m
                  ? void 0
                  : null === (a = m.data) || void 0 === a
                    ? void 0
                    : a.getBundleAssetBalances(
                        n.address,
                        i.asset,
                        s.DEFAULT_SLIPPAGE_TOLERANCE,
                        !0
                      ));
            if (r)
              return (0, l.values)(r.allocations)
                .filter(l.isDefined)
                .filter((e) => 'base' !== e.type && e.dstAmount > 0n)
                .map((e) => ({
                  id: e.type,
                  label: (0, u.e)(e),
                  value: !b.has(e.type),
                  srcToken: e.srcToken,
                }));
          }, [n.address, b, null == m ? void 0 : m.data, e]),
          P = 'position-manager' === t.origin,
          [D, S] = (0, a.useState)(y || P),
          O = (0, a.useMemo)(() => {
            let e = A !== h.options.isMax.includes(o.H.InterfaceOperationType.metaMorphoDeposit),
              t = g !== h.assets;
            return e || t;
          }, [g, A, h.assets, h.options.isMax]),
          W = (0, a.useCallback)(() => {
            T(C.id, () => C), S(!1);
          }, [C, T]);
        (0, a.useEffect)(() => {
          'bundler' === t.origin && W();
        }, [W, t.origin]),
          (0, a.useEffect)(() => {
            D || f(h.assets);
          }, [D, h.assets]);
        let X = (0, a.useCallback)(
          (e) => {
            if (e) {
              if ((null == B ? void 0 : B.assets) == null) return;
              f(B.assets);
            }
            Z(e);
          },
          [null == B ? void 0 : B.assets]
        );
        (0, a.useEffect)(() => {
          D ||
            (Z(h.options.isMax.includes(o.H.InterfaceOperationType.metaMorphoDeposit)),
            w(h.options.disabledPeripheralTokens));
        }, [D, h.options, w]),
          (0, a.useEffect)(() => {
            X(A);
          }, [A, X]);
        let _ = (0, a.useCallback)(() => S(!1), []);
        return (0, a.useMemo)(
          () => ({
            isNew: y,
            inputAmount: g,
            setInputAmount: k,
            isMax: A,
            setIsMax: X,
            localOperation: C,
            maxAmount: null == B ? void 0 : B.assets,
            isLoading: M,
            initialState: m,
            confirm: W,
            cancel: _,
            setIsEditing: S,
            peripheralTokenOptions: I,
            onPeripheralTokenOptionChange: x,
            isEditing: D,
            hasModifiedDepositOperation: O,
          }),
          [y, g, k, A, X, M, C, m, W, _, I, x, D, null == B ? void 0 : B.assets, O]
        );
      };
    },
    48972: function (e, t, n) {
      n.d(t, {
        L: function () {
          return p;
        },
      });
      var a = n(58258),
        s = n(22683),
        i = n(82803),
        l = n(89991),
        r = n(40252);
      let o = (e, t) => {
        let { account: n } = (0, l.Z_)();
        return (0, a.useMemo)(() => {
          if ((null == n ? void 0 : n.address) === void 0) return;
          let a = null == t ? void 0 : t.getBundleBalance(n.address, e, !0),
            s = null == t ? void 0 : t.tryGetAccrualVault(e);
          if (void 0 === a || void 0 === s) return;
          let i = null == s ? void 0 : s.getWithdrawCapacityLimit(a);
          if (void 0 !== i && void 0 !== a)
            return i.limiter === r.CapacityLimitReason.balance
              ? { shares: a, assets: i.value }
              : { shares: 0n, assets: i.value };
        }, [n.address, t, e]);
      };
      var d = (e, t, n, s) =>
          (0, a.useMemo)(() => {
            let a = null == s ? void 0 : s.tryGetAccrualVault(e);
            return a && n ? a.toAssets(n) : t;
          }, [t, s, n, e]),
        u = n(76258),
        c = n(25465);
      let p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          {
            operation: n,
            initialState: r,
            isNew: p,
          } = (0, c.D)(e, i.H.InterfaceOperationType.metaMorphoWithdraw),
          { account: v } = (0, l.Z_)(),
          [h, m] = (0, a.useState)(n.assets),
          [y, g] = (0, a.useState)(n.shares),
          [f, A] = (0, a.useState)(
            n.options.isMax.includes(i.H.InterfaceOperationType.metaMorphoWithdraw)
          ),
          Z = o(e, null == r ? void 0 : r.data),
          b = d(e, h, y, r.data),
          x = (0, a.useCallback)((e) => {
            A(!1), m(e), g(0n);
          }, []),
          w = (0, a.useMemo)(() => {
            let e = f !== n.options.isMax.includes(i.H.InterfaceOperationType.metaMorphoWithdraw),
              t = h !== n.assets;
            return e || t;
          }, [h, f, n.assets, n.options.isMax]),
          B = (0, u.Z)(
            v.isConnected,
            null == Z ? void 0 : Z.assets,
            r.isFetchingAny || r.isPending
          ),
          k = (0, a.useMemo)(
            () => ({
              type: i.H.InterfaceOperationType.metaMorphoWithdraw,
              vaultAddress: e,
              assets: h,
              shares: y,
              id: n.id,
              options: {
                origin: t.origin,
                isMax: f ? [i.H.InterfaceOperationType.metaMorphoWithdraw] : [],
              },
            }),
            [h, f, n.id, t.origin, y, e]
          ),
          { updateOperation: M } = (0, s.N)(),
          C = 'position-manager' === t.origin,
          [T, I] = (0, a.useState)(p || C),
          P = (0, a.useCallback)(() => {
            M(k.id, () => k), I(!1);
          }, [k, M]);
        (0, a.useEffect)(() => {
          'bundler' === t.origin && P();
        }, [P, t.origin]);
        let D = (0, a.useCallback)(
          (e) => {
            if (e) {
              if ((null == Z ? void 0 : Z.assets) == null) return;
              m(Z.assets), g(Z.shares);
            }
            A(e);
          },
          [Z]
        );
        (0, a.useEffect)(() => {
          T || (m(n.assets), g(n.shares), A(n.options.isMax.includes(n.type)));
        }, [T, n.assets, n.options.isMax, n.shares, n.type]),
          (0, a.useEffect)(() => {
            D(f);
          }, [f, D]);
        let S = (0, a.useCallback)(() => I(!1), []);
        return (0, a.useMemo)(
          () => ({
            isNew: p,
            inputAmount: b,
            setInputAmount: x,
            isMax: f,
            setIsMax: D,
            localOperation: k,
            maxAmount: null == Z ? void 0 : Z.assets,
            isLoading: B,
            initialState: r,
            confirm: P,
            cancel: S,
            setIsEditing: I,
            isEditing: T,
            hasModifiedWithdrawOperation: w,
          }),
          [p, b, x, f, D, k, null == Z ? void 0 : Z.assets, B, r, P, S, T, w]
        );
      };
    },
    25596: function (e, t, n) {
      n.d(t, {
        oP: function () {
          return r;
        },
      });
      var a = n(78286),
        s = n(58258),
        i = n(12556),
        l = n(54655);
      let r = (e) => {
        let { address: t, error: n, isWrongChain: a, chainId: l } = e,
          { isReadOnly: r, message: o } = (0, i.WW)({ chainId: l, address: t });
        return (0, s.useMemo)(
          () =>
            r
              ? { message: o, textProps: { whiteSpace: 'break-spaces' } }
              : n
                ? { message: n, textProps: { wordBreak: 'break-all' } }
                : a
                  ? { message: 'Please switch to the correct network', textProps: {} }
                  : void 0,
          [n, a, r, o]
        );
      };
      t.ZP = (e) => {
        let { address: t, error: n, isWrongChain: s, chainId: i } = e,
          o = r({ address: t, error: n, isWrongChain: s, chainId: i });
        if (o) return (0, a.tZ)(l.xvT.Body.XXXS.Regular, { ...o.textProps, children: o.message });
      };
    },
    57935: function (e, t, n) {
      n.d(t, {
        w: function () {
          return r;
        },
      });
      var a = n(58258),
        s = n(89991),
        i = n(61536),
        l = n(4205);
      let r = (e) => {
        let { existingPositions: t, missingVaults: n } = e,
          { data: r } = (0, l.f)(0),
          { data: o } = (0, l.f)(),
          { account: d } = (0, s.Z_)();
        return (0, a.useMemo)(
          () =>
            (0, i.q)({
              userAddress: null == d ? void 0 : d.address,
              state: { initial: r, latest: o },
              existingPositions: t,
              missingVaults: n,
            }),
          [r, o, null == d ? void 0 : d.address, t, n]
        );
      };
    },
    76280: function (e, t, n) {
      n.d(t, {
        q: function () {
          return s;
        },
      });
      var a = n(58258);
      let s = (e) =>
        (0, a.useMemo)(() => {
          if (!e) return;
          let t = [],
            n = [],
            a = [],
            { address: s, asset: i, state: l } = e;
          return (
            t.push(s),
            n.push(s, i.address),
            (null == l ? void 0 : l.allocation) &&
              l.allocation.forEach((e) => {
                var t;
                let { market: s } = e;
                a.push(s.uniqueKey);
                let i = null === (t = s.collateralAsset) || void 0 === t ? void 0 : t.address;
                i && n.push(i);
              }),
            { vaults: t, tokens: n, marketIds: a }
          );
        }, [e]);
    },
  },
]);
