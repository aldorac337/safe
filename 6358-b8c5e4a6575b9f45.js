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
    (e._sentryDebugIds[t] = '8ab343a4-34e0-4833-9644-65b4a791467f'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-8ab343a4-34e0-4833-9644-65b4a791467f'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6358],
  {
    77345: function (e, t, n) {
      n.d(t, {
        sW: function () {
          return c;
        },
      });
      var a = n(55412),
        i = n(3245),
        s = n(63658),
        r = n(41512),
        l = n(24387);
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
        u = (0, i.Ps)(o(), r.n, l.G);
      function c(e) {
        let t = { ...d, ...e };
        return s.aM(u, t);
      }
    },
    55872: function (e, t, n) {
      n.d(t, {
        m: function () {
          return y;
        },
      });
      var a = n(78286),
        i = n(58258),
        s = n(54655),
        r = n(13191),
        l = n(40252),
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
        p = (0, u.Z)(s.Kqy, { target: 'eyr4h7c1' })(
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
        h = (0, u.Z)(s.xvT.Body.XXS.Regular, { target: 'eyr4h7c3' })('display:contents;');
      var m = (0, i.memo)((e) => {
          let { className: t, collateralExposure: n, targetChainId: u } = e,
            m = (0, i.useMemo)(
              () =>
                Array.from(n.lltvs)
                  .map((e) =>
                    ''.concat(s.$0l.percent.unit('%').trailingZero(!1).digits(1).of(e, 18))
                  )
                  .join(', '),
              [n]
            ),
            y = (0, i.useMemo)(() => {
              let e = new Set();
              return Array.from(n.oracles)
                .map((e) => {
                  let t = 'string' == typeof e,
                    n = t ? e : e.address;
                  return {
                    label: t
                      ? (0, s.GQT)(e)
                      : e.type === r.OracleType.Unknown
                        ? (0, s.GQT)(n)
                        : (0, o.formatLongString)((0, s.pTE)(e), 30) || (0, s.GQT)(n),
                    url: l.ChainUtils.getExplorerAddressUrl(u, n),
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
            children: (0, a.BX)(s.Kqy, {
              direction: 'column',
              children: [
                (0, a.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, a.tZ)(s.xvT.Body.XXS.Regular, {
                      color: 'text.body',
                      children: 'Collateral',
                    }),
                    (0, a.BX)(s.Kqy, {
                      align: 'center',
                      gap: 4,
                      children: [
                        (0, a.tZ)(s.qEK, { src: n.token.logoURI, size: 'small' }),
                        (0, a.tZ)(h, {
                          children: n.token.symbol
                            ? (0, o.formatLongString)(n.token.symbol, 35)
                            : '-',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.tZ)(s.Z0O, {}),
                (0, a.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, a.tZ)(s.xvT.Body.XXS.Regular, { color: 'text.body', children: 'LLTV' }),
                    (0, a.tZ)(s.xvT.Body.XXS.Regular, { children: m }),
                  ],
                }),
                (0, a.tZ)(s.Z0O, {}),
                (0, a.BX)(v, {
                  align: 'center',
                  justify: 'space-between',
                  gap: 's',
                  children: [
                    (0, a.tZ)(s.xvT.Body.XXS.Regular, { children: 'Oracle' }),
                    (0, a.tZ)(s.Kqy, {
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
        y = (0, i.memo)((e) => {
          let {
              className: t,
              collateralExposures: n,
              targetChainId: r,
              extraInfo: l,
              align: o = 'left',
              maxTokensCount: d,
              size: u,
            } = e,
            c = (0, i.useMemo)(
              () =>
                n.map((e) => ({
                  hoverCardContent: (0, a.tZ)(m, { collateralExposure: e, targetChainId: r }),
                  logoUrl: e.token.logoURI,
                })),
              [n, r]
            );
          return (0, a.tZ)(s.$xj, {
            className: t,
            items: c,
            extraInfo: l,
            align: o,
            maxTokensCount: d,
            avatarSize: u,
          });
        });
    },
    53644: function (e, t, n) {
      n.d(t, {
        r: function () {
          return d;
        },
      });
      var a = n(78286),
        i = n(58258),
        s = n(40252),
        r = n(54655),
        l = n(89991);
      let o = (0, n(38819).Z)(r.xvT.Body.XXS.Regular, { target: 'e1sp0bs60' })('text-align:end;'),
        d = (0, i.memo)((e) => {
          var t, n;
          let { tokenAddress: i } = e,
            { targetChainId: r } = (0, l.Z_)();
          return (
            null === (t = s.permissionedCoinbaseTokens[r]) || void 0 === t ? void 0 : t.has(i)
          )
            ? (0, a.tZ)(p, {})
            : (null === (n = s.permissionedBackedTokens[r]) || void 0 === n ? void 0 : n.has(i))
              ? (0, a.tZ)(c, {})
              : (0, a.tZ)(u, {});
        }),
        u = () =>
          (0, a.tZ)(o, { color: 'constant.color.error', children: 'Authorization required.' }),
        c = () =>
          (0, a.BX)(o, {
            color: 'constant.color.error',
            children: [
              'Backed authorization required.',
              ' ',
              (0, a.tZ)(r.dLw, {
                href: 'https://assets.backed.fi/onboarding',
                underlined: !0,
                children: 'Learn more here →',
              }),
            ],
          }),
        p = () =>
          (0, a.BX)(o, {
            color: 'constant.color.error',
            children: [
              'Coinbase attestation required.',
              ' ',
              (0, a.tZ)(r.dLw, {
                href: 'https://www.coinbase.com/onchain-verify',
                underlined: !0,
                children: 'Learn more here →',
              }),
            ],
          });
    },
    92148: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var a = n(78286),
        i = n(58258),
        s = n(15328),
        r = n(54655),
        l = n(38819);
      let o = '125px',
        d = (0, l.Z)('div', { target: 'ebvbqmv0' })('position:relative;width:100%;height:', o, ';'),
        u = (0, l.Z)('video', { target: 'ebvbqmv1' })(
          'width:100%;height:100%;object-fit:cover;opacity:',
          (e) => {
            let { $isLoading: t } = e;
            return t ? 0 : 1;
          },
          ';transition:opacity 0.3s ease-in-out;'
        ),
        c = (0, l.Z)('div', { target: 'ebvbqmv2' })(
          'position:absolute;width:100%;height:100%;border-radius:50%;border:',
          '1.25px',
          ' solid\n    ',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.color.active;
          },
          ';top:50%;left:50%;transform:translate(-50%,-50%);will-change:transform,opacity;animation:pulse 1s infinite;@keyframes pulse{0%{transform:translate(-50%,-50%) scale(1);opacity:1;}100%{transform:translate(-50%,-50%) scale(',
          2,
          ');opacity:0;}}'
        ),
        p = (0, l.Z)('div', { target: 'ebvbqmv3' })('position:relative;z-index:2;'),
        v = (0, l.Z)('div', { target: 'ebvbqmv4' })('position:relative;'),
        h = (0, l.Z)('img', { target: 'ebvbqmv5' })('width:100%;height:', o, ';object-fit:cover;');
      var m = (0, i.memo)((e) => {
        let {
            children: t,
            featureKey: n,
            videoUrl: l,
            fallbackImageUrl: o,
            title: m,
            description: y,
            autoplay: f = !0,
            enabled: g = !0,
            side: A = 'top',
            align: b = 'center',
          } = e,
          [Z, w] = (0, s._)('morpho.'.concat(n, '-callout'), !1),
          [x, k] = (0, i.useState)(!0),
          [B, T] = (0, i.useState)(!1),
          I = (0, i.useCallback)(() => {
            w(!0);
          }, [w]),
          M = g && !Z;
        return M
          ? (0, a.BX)(r.J2e.Root, {
              open: !0,
              children: [
                (0, a.tZ)(r.J2e.Anchor, {
                  children: (0, a.BX)(v, {
                    children: [
                      (0, a.tZ)(c, { 'aria-hidden': 'true' }),
                      (0, a.tZ)(p, { children: t({ visible: M, markAsSeen: I }) }),
                    ],
                  }),
                }),
                (0, a.tZ)(r.J2e.Portal, {
                  children: (0, a.BX)(r.J2e.Content, {
                    style: { border: 'none', padding: 0, outline: 'none', maxWidth: 300 },
                    collisionPadding: 12,
                    zIndex: 'mid',
                    onClick: (e) => e.stopPropagation(),
                    role: 'dialog',
                    'aria-labelledby': ''.concat(n, '-title'),
                    side: A,
                    align: b,
                    children: [
                      (0, a.BX)(d, {
                        children: [
                          x &&
                            !B &&
                            (0, a.tZ)(r.OdW, { borderRadius: 0, width: '100%', height: '125px' }),
                          B
                            ? (0, a.tZ)(h, {
                                src: o,
                                alt: 'Feature callout',
                                'aria-hidden': 'true',
                              })
                            : (0, a.tZ)(u, {
                                src: l,
                                autoPlay: f,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                preload: 'metadata',
                                $isLoading: x,
                                onLoadedData: () => k(!1),
                                onError: () => {
                                  T(!0), k(!1);
                                },
                                'aria-hidden': 'true',
                              }),
                          (0, a.tZ)(r.zxk, {
                            style: { position: 'absolute', top: 10, right: 10 },
                            onClick: I,
                            size: 'small',
                            variant: 'ghost',
                            iconAlone: 'ClosePlain20',
                          }),
                        ],
                      }),
                      (0, a.BX)(r.Kqy, {
                        padding: 's',
                        direction: 'column',
                        gap: 'xs',
                        children: [
                          (0, a.tZ)(r.xvT.Body.XS.Regular, {
                            id: ''.concat(n, '-title'),
                            color: 'text.body',
                            children: m,
                          }),
                          (0, a.tZ)(r.Kqy, {
                            direction: 'column',
                            gap: 'xs',
                            children: y.map((e, t) =>
                              (0, a.tZ)(
                                r.xvT.Body.XS.Regular,
                                { color: 'text.secondary', children: e },
                                t
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
          : t({});
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
          return X;
        },
      });
      var a = n(78286),
        i = n(58258),
        s = n(54655),
        r = n(51712),
        l = n(70064),
        o = n(12556),
        d = n(94646),
        u = n(53644),
        c = n(22683),
        p = n(34896),
        v = n(89805),
        h = n(89991),
        m = n(91766),
        y = n(53745),
        f = n(66395),
        g = n(71021),
        A = n(73057),
        b = n(25596),
        Z = n(83897),
        w = n(76280),
        x = n(12472),
        k = (0, i.memo)(() =>
          (0, a.BX)(s.Kqy, {
            direction: 'column',
            gap: '20px',
            children: [
              (0, a.BX)(s.Kqy, {
                direction: 'column',
                gap: 'xs',
                children: [
                  (0, a.BX)(s.Kqy, {
                    direction: 'row',
                    justify: 'space-between',
                    children: [
                      (0, a.tZ)(s.OdW, { height: '20px', width: '170px' }),
                      (0, a.tZ)(s.OdW, { height: '20px', width: '80px' }),
                    ],
                  }),
                  (0, a.tZ)(s.OdW, { height: '87px', width: '100%', borderRadius: '20px' }),
                ],
              }),
              (0, a.tZ)(s.OdW, { height: '257px', width: '100%', borderRadius: '20px' }),
              (0, a.tZ)(s.OdW, { height: '48px', width: '100%', borderRadius: '100px' }),
            ],
          })
        ),
        B = n(55412),
        T = n(3245),
        I = n(63658),
        M = n(93114),
        C = n(24387);
      function P() {
        let e = (0, B._)([
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
      let O = {},
        S = (0, T.Ps)(P(), C.G, M.j);
      var D = (0, i.memo)((e) => {
          var t, n, l, B, T, M, C, P, D, X, W, E, _;
          let { vaultAddress: q, chainId: L, onClose: N } = e,
            { account: H } = (0, h.Z_)(),
            { toggleRightPanel: R } = (0, s.s8G)(),
            { toggleDialog: V } = (0, s.DAv)(),
            {
              simulationError: z,
              operations: U,
              blockError: K,
              isPending: G,
              bundlerConfiguration: $,
              updateOperation: F,
              config: { addToSimulationState: j },
            } = (0, c.N)(),
            {
              data: Y,
              error: J,
              loading: Q,
            } = (function (e) {
              let t = { ...O, ...e };
              return I.aM(S, t);
            })({ variables: { chainId: L, address: q } }),
            ee = (0, w.q)(null == Y ? void 0 : Y.vaultByAddress);
          (0, i.useEffect)(() => {
            j(ee);
          }, [ee, j]);
          let {
              localOperation: et,
              inputAmount: en,
              setInputAmount: ea,
              isMax: ei,
              setIsMax: es,
              maxAmount: er,
              isNew: el,
              initialState: eo,
              hasModifiedDepositOperation: ed,
              confirm: eu,
              isLoading: ec,
              peripheralTokenOptions: ep,
              onPeripheralTokenOptionChange: ev,
            } = (0, g.o)(q, { origin: 'position-manager' }),
            eh = (0, i.useMemo)(
              () => (0, o.wk)(null == Y ? void 0 : Y.vaultByAddress.asset),
              [null == Y ? void 0 : Y.vaultByAddress.asset]
            ),
            [em, ey, , ef] = (0, v._)(eo.data, et, $, el),
            eg = (0, f.Z)(ef, null == ey ? void 0 : ey.message),
            eA = (0, b.ZP)({ address: q, error: eg, isWrongChain: H.isWrongChain, chainId: L }),
            eb = (0, y.Z)(H.address, eo.data, null == eh ? void 0 : eh.address),
            { isReadOnly: eZ } = (0, o.WW)({ chainId: L, address: q }),
            ew = (0, i.useMemo)(
              () => (K && G) || !!eg || !!z || !(0, p.H)(et) || eZ || H.isWrongChain || !eb,
              [H.isWrongChain, K, eb, G, eZ, eg, et, z]
            ),
            { initialData: ex, finalData: ek } = (0, A.Z)(H.address, em, et.vaultAddress, eh),
            eB = (0, Z.M)(
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
            eT = (0, s.vmq)({
              chainId: L,
              vaultAddress: et.vaultAddress,
              allocation:
                null == Y
                  ? void 0
                  : null === (B = Y.vaultByAddress) || void 0 === B
                    ? void 0
                    : null === (l = B.state) || void 0 === l
                      ? void 0
                      : l.allocation,
            }),
            eI = (0, i.useMemo)(
              () => !!ey || !!ef || !eb || !!H.isWrongChain || !(0, p.H)(et),
              [H.isWrongChain, eb, ef, et, ey]
            ),
            eM = (0, i.useCallback)(() => {
              el ? eu() : ed && F(et.id, () => et), R(!0), N();
            }, [eu, ed, el, et, N, R, F]),
            eC = (0, i.useCallback)(() => {
              V((0, a.tZ)(d.Z, { operations: [et] }));
            }, [et, V]),
            { confirmButtonLabel: eP, bundlerButtonLabel: eO } = (0, m.Z)({
              operationLabel: 'deposit',
              inputAmount: en,
              isNew: el,
              localErrorMessage: eg,
              operations: U,
              simulationError: z,
              blockError: K,
              isPending: G,
              isConfirmDisabled: eI,
              hasModifiedOperation: ed,
              vaultAddress: q,
              chainId: L,
            });
          return Q
            ? (0, a.tZ)(k, {})
            : J || !eh
              ? (0, a.tZ)(r.c, { minHeight: '400px' })
              : (0, a.BX)(a.HY, {
                  children: [
                    (0, a.BX)(s.Kqy, {
                      direction: 'column',
                      gap: 2,
                      children: [
                        eh &&
                          (0, a.tZ)(s.TGk, {
                            header: 'Deposit '.concat(eh.symbol),
                            amount: en,
                            token: eh,
                            onChange: ea,
                            maxValue: er,
                            onMaxClick: es,
                            isMax: ei,
                            peripheralTokenOptions: ep,
                            onPeripheralTokenChange: ev,
                            disabled: ec,
                          }),
                        !eb && (0, a.tZ)(u.r, { tokenAddress: eh.address }),
                      ],
                    }),
                    (0, a.tZ)(x.Z, {
                      vault: {
                        dailyNetApy:
                          null == Y
                            ? void 0
                            : null === (T = Y.vaultByAddress.state) || void 0 === T
                              ? void 0
                              : T.dailyNetApy,
                        dailyApy:
                          null == Y
                            ? void 0
                            : null === (M = Y.vaultByAddress.state) || void 0 === M
                              ? void 0
                              : M.dailyApy,
                        fee:
                          null == Y
                            ? void 0
                            : null === (C = Y.vaultByAddress.state) || void 0 === C
                              ? void 0
                              : C.fee,
                        allocation: (
                          null == Y
                            ? void 0
                            : null === (P = Y.vaultByAddress.state) || void 0 === P
                              ? void 0
                              : P.allocation
                        )
                          ? null == Y
                            ? void 0
                            : null === (D = Y.vaultByAddress.state) || void 0 === D
                              ? void 0
                              : D.allocation
                          : [],
                        rewards: eB,
                        points: eT,
                        address: q,
                        curators:
                          null !==
                            (W =
                              null == Y
                                ? void 0
                                : null === (X = Y.vaultByAddress.metadata) || void 0 === X
                                  ? void 0
                                  : X.curators) && void 0 !== W
                            ? W
                            : [],
                        warnings:
                          null !== (E = null == Y ? void 0 : Y.vaultByAddress.warnings) &&
                          void 0 !== E
                            ? E
                            : [],
                        name:
                          null !== (_ = null == Y ? void 0 : Y.vaultByAddress.name) && void 0 !== _
                            ? _
                            : '',
                        asset: eh,
                      },
                      initialPosition: ex.position,
                      finalPosition: ek.position,
                    }),
                    (0, a.BX)(s.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === U.length &&
                          (0, a.tZ)(s.ua7, {
                            content: eA,
                            disabled: !eA,
                            children: (0, a.tZ)(s.zxk, {
                              size: 'big',
                              variant: eI ? 'secondary' : 'primary',
                              label: eP,
                              onClick: eC,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: eI || ec,
                            }),
                          }),
                        (U.length > 0 || !eI) &&
                          (0, a.tZ)(s.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: eM,
                            label: eO,
                            'data-testid': 'bundler-button',
                            disabled: ew || ec,
                          }),
                      ],
                    }),
                  ],
                });
        }),
        X = (0, i.memo)((e) => {
          let { toggleDialog: t } = (0, s.DAv)();
          return (0, a.BX)(s.Kqy, {
            'data-testid': 'repay-dialog',
            direction: 'column',
            gap: 20,
            children: [
              (0, a.BX)(s.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, a.tZ)(s.xvT.Title.S, { children: 'Deposit' }),
                  (0, a.tZ)(s.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => t(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, a.tZ)(l.Z, {
                fallback: (0, a.tZ)(r.c, { minHeight: '494px' }),
                children: (0, a.tZ)(D, { ...e }),
              }),
            ],
          });
        });
    },
    55839: function (e, t, n) {
      n.d(t, {
        P: function () {
          return X;
        },
      });
      var a = n(78286),
        i = n(58258),
        s = n(54655),
        r = n(51712),
        l = n(70064),
        o = n(12556),
        d = n(94646),
        u = n(53644),
        c = n(22683),
        p = n(34896),
        v = n(89805),
        h = n(89991),
        m = n(91766),
        y = n(53745),
        f = n(66395),
        g = n(73057),
        A = n(48972),
        b = n(25596),
        Z = n(83897),
        w = n(76280),
        x = n(12472),
        k = (0, i.memo)(() =>
          (0, a.BX)(s.Kqy, {
            direction: 'column',
            gap: '20px',
            children: [
              (0, a.BX)(s.Kqy, {
                direction: 'column',
                gap: 'xs',
                children: [
                  (0, a.BX)(s.Kqy, {
                    direction: 'row',
                    justify: 'space-between',
                    children: [
                      (0, a.tZ)(s.OdW, { height: '20px', width: '170px' }),
                      (0, a.tZ)(s.OdW, { height: '20px', width: '80px' }),
                    ],
                  }),
                  (0, a.tZ)(s.OdW, { height: '87px', width: '100%', borderRadius: '20px' }),
                ],
              }),
              (0, a.tZ)(s.OdW, { height: '257px', width: '100%', borderRadius: '20px' }),
              (0, a.tZ)(s.OdW, { height: '48px', width: '100%', borderRadius: '100px' }),
            ],
          })
        ),
        B = n(55412),
        T = n(3245),
        I = n(63658),
        M = n(93114),
        C = n(24387);
      function P() {
        let e = (0, B._)([
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
      let O = {},
        S = (0, T.Ps)(P(), C.G, M.j);
      var D = (0, i.memo)((e) => {
          var t, n, l, B, T, M, C, P, D, X, W, E, _;
          let { vaultAddress: q, chainId: L, onClose: N } = e,
            { account: H } = (0, h.Z_)(),
            { toggleRightPanel: R } = (0, s.s8G)(),
            { toggleDialog: V } = (0, s.DAv)(),
            {
              simulationError: z,
              operations: U,
              blockError: K,
              isPending: G,
              bundlerConfiguration: $,
              updateOperation: F,
              config: { addToSimulationState: j },
            } = (0, c.N)(),
            {
              data: Y,
              error: J,
              loading: Q,
            } = (function (e) {
              let t = { ...O, ...e };
              return I.aM(S, t);
            })({ variables: { chainId: L, address: q } }),
            ee = (0, w.q)(null == Y ? void 0 : Y.vaultByAddress);
          (0, i.useEffect)(() => {
            j(ee);
          }, [ee, j]);
          let {
              localOperation: et,
              inputAmount: en,
              setInputAmount: ea,
              isMax: ei,
              setIsMax: es,
              maxAmount: er,
              isNew: el,
              initialState: eo,
              hasModifiedWithdrawOperation: ed,
              confirm: eu,
              isLoading: ec,
            } = (0, A.L)(q, { origin: 'position-manager' }),
            ep = (0, i.useMemo)(
              () => (0, o.wk)(null == Y ? void 0 : Y.vaultByAddress.asset),
              [null == Y ? void 0 : Y.vaultByAddress.asset]
            ),
            [ev, eh, , em] = (0, v._)(eo.data, et, $, el),
            ey = (0, f.Z)(em, null == eh ? void 0 : eh.message),
            ef = (0, b.ZP)({ address: q, error: ey, isWrongChain: H.isWrongChain, chainId: L }),
            eg = (0, y.Z)(H.address, eo.data, null == ep ? void 0 : ep.address),
            { isReadOnly: eA } = (0, o.WW)({ chainId: L, address: q }),
            eb = (0, i.useMemo)(
              () => (K && G) || !!ey || !!z || !(0, p.H)(et) || eA || H.isWrongChain || !eg,
              [H.isWrongChain, K, eg, G, eA, ey, et, z]
            ),
            { initialData: eZ, finalData: ew } = (0, g.Z)(H.address, ev, et.vaultAddress, ep),
            ex = (0, Z.M)(
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
            ek = (0, s.vmq)({
              chainId: L,
              vaultAddress: et.vaultAddress,
              allocation:
                null == Y
                  ? void 0
                  : null === (B = Y.vaultByAddress) || void 0 === B
                    ? void 0
                    : null === (l = B.state) || void 0 === l
                      ? void 0
                      : l.allocation,
            }),
            eB = (0, i.useMemo)(
              () => !!eh || !!em || !eg || !!H.isWrongChain || !(0, p.H)(et),
              [et, eh, em, eg, H.isWrongChain]
            ),
            eT = (0, i.useCallback)(() => {
              el ? eu() : ed && F(et.id, () => et), R(!0), N();
            }, [eu, ed, el, et, N, R, F]),
            eI = (0, i.useCallback)(() => {
              V((0, a.tZ)(d.Z, { operations: [et] }));
            }, [et, V]),
            { confirmButtonLabel: eM, bundlerButtonLabel: eC } = (0, m.Z)({
              operationLabel: 'withdraw',
              inputAmount: en,
              isNew: el,
              localErrorMessage: ey,
              operations: U,
              simulationError: z,
              blockError: K,
              isPending: G,
              isConfirmDisabled: eB,
              hasModifiedOperation: ed,
              vaultAddress: q,
              chainId: L,
            });
          return Q || !ep
            ? (0, a.tZ)(k, {})
            : J
              ? (0, a.tZ)(r.c, { minHeight: '400px' })
              : (0, a.BX)(a.HY, {
                  children: [
                    (0, a.BX)(s.Kqy, {
                      direction: 'column',
                      gap: 2,
                      children: [
                        ep &&
                          (0, a.tZ)(s.TGk, {
                            header: 'Withdraw '.concat(ep.symbol, ' from vault'),
                            amount: en,
                            token: ep,
                            onChange: ea,
                            maxValue: er,
                            onMaxClick: es,
                            isMax: ei,
                            disabled: ec,
                          }),
                        !eg && (0, a.tZ)(u.r, { tokenAddress: ep.address }),
                      ],
                    }),
                    (0, a.tZ)(x.Z, {
                      vault: {
                        dailyNetApy:
                          null == Y
                            ? void 0
                            : null === (T = Y.vaultByAddress.state) || void 0 === T
                              ? void 0
                              : T.dailyNetApy,
                        dailyApy:
                          null == Y
                            ? void 0
                            : null === (M = Y.vaultByAddress.state) || void 0 === M
                              ? void 0
                              : M.dailyApy,
                        fee:
                          null == Y
                            ? void 0
                            : null === (C = Y.vaultByAddress.state) || void 0 === C
                              ? void 0
                              : C.fee,
                        allocation: (
                          null == Y
                            ? void 0
                            : null === (P = Y.vaultByAddress.state) || void 0 === P
                              ? void 0
                              : P.allocation
                        )
                          ? null == Y
                            ? void 0
                            : null === (D = Y.vaultByAddress.state) || void 0 === D
                              ? void 0
                              : D.allocation
                          : [],
                        rewards: ex,
                        points: ek,
                        address: q,
                        curators:
                          null !==
                            (W =
                              null == Y
                                ? void 0
                                : null === (X = Y.vaultByAddress.metadata) || void 0 === X
                                  ? void 0
                                  : X.curators) && void 0 !== W
                            ? W
                            : [],
                        warnings:
                          null !== (E = null == Y ? void 0 : Y.vaultByAddress.warnings) &&
                          void 0 !== E
                            ? E
                            : [],
                        name:
                          null !== (_ = null == Y ? void 0 : Y.vaultByAddress.name) && void 0 !== _
                            ? _
                            : '',
                        asset: ep,
                      },
                      initialPosition: eZ.position,
                      finalPosition: ew.position,
                    }),
                    (0, a.BX)(s.Kqy, {
                      direction: 'column',
                      gap: 's',
                      children: [
                        0 === U.length &&
                          (0, a.tZ)(s.ua7, {
                            content: ef,
                            disabled: !ef,
                            children: (0, a.tZ)(s.zxk, {
                              size: 'big',
                              variant: eB ? 'secondary' : 'primary',
                              label: eM,
                              onClick: eI,
                              shortenByWidth: 220,
                              'data-testid': 'finalize-button',
                              disabled: eB || ec,
                            }),
                          }),
                        (U.length > 0 || !eB) &&
                          (0, a.tZ)(s.zxk, {
                            variant: 'secondary',
                            size: 'big',
                            onClick: eT,
                            label: eC,
                            'data-testid': 'bundler-button',
                            disabled: eb || ec,
                          }),
                      ],
                    }),
                  ],
                });
        }),
        X = (0, i.memo)((e) => {
          let { toggleDialog: t } = (0, s.DAv)();
          return (0, a.BX)(s.Kqy, {
            'data-testid': 'repay-dialog',
            direction: 'column',
            gap: 20,
            children: [
              (0, a.BX)(s.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, a.tZ)(s.xvT.Title.S, { children: 'Withdraw' }),
                  (0, a.tZ)(s.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => t(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, a.tZ)(l.Z, {
                fallback: (0, a.tZ)(r.c, { minHeight: '494px' }),
                children: (0, a.tZ)(D, { ...e }),
              }),
            ],
          });
        });
    },
    1208: function (e, t, n) {
      var a = n(78286),
        i = n(58258),
        s = n(12556),
        r = n(54655),
        l = n(26726),
        o = n(73115),
        d = n(69430),
        u = n(55839);
      t.default = (0, i.memo)((e) => {
        let {
            vaultAddress: t,
            chainId: n,
            enableDeposit: c = !0,
            enableWithdraw: p = !0,
            showFeatureCallOut: v = !1,
            side: h = 'top',
            align: m = 'end',
          } = e,
          y = (0, l.hz)({
            depositVault: l.TP.POSITION_MANAGER_DEPOSIT_INTO_VAULT,
            withdrawVault: l.TP.POSITION_MANAGER_WITHDRAW_VAULT_DEPOSIT,
            featureCallOut: l.TP.POSITION_MANAGER_FEATURE_CALL_OUT,
          }),
          { toggleDialog: f } = (0, r.DAv)(),
          [g, A] = (0, i.useState)(!1),
          b = (0, r.ajf)(860),
          { isRightPanelOpen: Z } = (0, r.s8G)();
        return (0, a.tZ)(o.I, {
          side: 'top',
          enabled: v && y.featureCallOut && !b && !Z,
          featureKey: 'position-manager',
          videoUrl: (0, s.$B)('v2/assets/videos/position-manager-feature-callout.mp4'),
          fallbackImageUrl: (0, s.$B)('v2/assets/images/position-manager-feature-callout.png'),
          title: 'Position Manager Is Live!',
          description: [
            'Introducing Position Manager – a faster way to manage your positions directly from the dashboard.',
            'No need to click into each vault or market—adjust, monitor, and optimize your positions in just a few clicks.',
          ],
          children: (e) => {
            let { visible: i, markAsSeen: s } = e;
            return (0, a.BX)(r.h_2.Root, {
              open: g,
              onOpenChange: (e) => {
                null == s || s(), A(e);
              },
              children: [
                (0, a.tZ)(r.h_2.Trigger, {
                  asChild: !0,
                  children: (0, a.tZ)('div', {
                    style: { display: 'flex' },
                    children: (0, a.tZ)(r.ua7, {
                      content: 'Manage your position.',
                      disabled: i,
                      children: (0, a.tZ)(r.zxk, {
                        'data-testid': 'position-manager-button',
                        size: 'small',
                        variant: 'ghost',
                        iconAlone: 'DotsPlain20',
                      }),
                    }),
                  }),
                }),
                (0, a.tZ)(r.h_2.Portal, {
                  children: (0, a.BX)(r.h_2.Content, {
                    align: m,
                    side: h,
                    sideOffset: 7,
                    children: [
                      y.depositVault &&
                        c &&
                        (0, a.BX)(r.h_2.Item, {
                          'data-testid': 'deposit-into-vault',
                          onClick: (e) => {
                            e.stopPropagation();
                          },
                          onSelect: () => {
                            f(
                              (0, a.tZ)(d.p, { chainId: n, vaultAddress: t, onClose: () => f(!1) }),
                              { maxWidth: '540px' }
                            );
                          },
                          children: [
                            (0, a.tZ)(r.JO$, { icon: 'AddPlain20', color: 'icon.primary' }),
                            'Deposit into vault',
                          ],
                        }),
                      y.withdrawVault &&
                        p &&
                        (0, a.BX)(r.h_2.Item, {
                          'data-testid': 'withdraw-vault-deposit',
                          onClick: (e) => {
                            e.stopPropagation();
                          },
                          onSelect: () => {
                            f(
                              (0, a.tZ)(u.P, { chainId: n, vaultAddress: t, onClose: () => f(!1) }),
                              { maxWidth: '540px' }
                            );
                          },
                          children: [
                            (0, a.tZ)(r.JO$, { icon: 'RemovePlain20', color: 'icon.primary' }),
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
        i = n(58258),
        s = n(4565),
        r = n(12556),
        l = n(54655),
        o = n(35047),
        d = n(55872),
        u = n(89991),
        c = n(9834),
        p = n(16820),
        v = n(6423),
        h = n(78017),
        m = n(30806);
      t.Z = (0, i.memo)((e) => {
        var t, n, y;
        let { initialPosition: f, finalPosition: g, vault: A } = e,
          { targetChain: b } = (0, u.Z_)(),
          Z = (0, i.useMemo)(() => (0, c.m)(A.allocation), [A.allocation]),
          w = (0, i.useMemo)(
            () => l.$0l.percent.digits(2).unit('%').of(A.dailyNetApy),
            [A.dailyNetApy]
          ),
          x = (0, i.useMemo)(
            () => ((0, o.isDefined)(A.warnings) ? (0, l.Myy)(A.warnings) : void 0),
            [A.warnings]
          ),
          k = (0, i.useMemo)(() => {
            let e = (0, l.Uaj)(A.name);
            return e ? (0, o.formatLongString)(e, 22) : '';
          }, [A.name]),
          B = (0, i.useMemo)(() => {
            if (A.dailyApy) return (0, s.safeParseNumber)(A.dailyApy);
          }, [A.dailyApy]),
          T = (0, i.useMemo)(() => {
            if (A.fee) return (0, s.safeParseNumber)(A.fee);
          }, [A.fee]);
        return (0, a.BX)(l.soA.Root, {
          width: '100%',
          height: '257px',
          children: [
            (0, a.BX)(l.soA.Header, {
              children: [
                (0, a.tZ)(l.qEK, { size: 'large', src: A.asset.logoURI }),
                (0, a.BX)(l.Kqy, {
                  direction: 'column',
                  gap: 'xs',
                  children: [
                    (0, a.tZ)(l.ZT$, { TextVariant: l.xvT.Title.XS, children: k }),
                    (0, a.BX)(l.Kqy, {
                      direction: 'row',
                      align: 'center',
                      gap: 4,
                      children: [
                        null === (t = A.curators) || void 0 === t
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
                        (0, a.tZ)(m.x, {
                          tooltip: 'Open vault.',
                          href: (0, v.Q)({
                            chainName: r.FW.getNameById(b.id),
                            vaultAddress: A.address,
                            vaultName: A.name,
                          }),
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
                    (0, o.formatLongString)(null !== (n = A.asset.symbol) && void 0 !== n ? n : ''),
                    ')'
                  ),
                  value: (0, a.tZ)(l.soA.ValueChange, {
                    initialProps: { value: f },
                    finalProps: { value: g },
                    formatter: (e) =>
                      (0, p.sL)({
                        price: A.asset.price,
                        amount: e,
                        decimals: A.asset.decimals,
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
                      (0, a.tZ)(l.soA.Value, { value: w }),
                      (0, a.tZ)(h.w, {
                        RewardsHoverCardProps: {
                          performanceFee: T,
                          apy: B,
                          rewards: A.rewards,
                          points: null !== (y = A.points) && void 0 !== y ? y : [],
                          variant: 'vault',
                        },
                      }),
                    ],
                  }),
                }),
                (0, a.tZ)(l.soA.ListItem, {
                  label: 'Collateral Exposure',
                  value: (0, a.tZ)(d.m, {
                    align: 'right',
                    collateralExposures: Z,
                    extraInfo: (0, a.tZ)(l.aNP, { ...x }),
                    targetChainId: b.id,
                    maxTokensCount: 5,
                  }),
                }),
              ],
            }),
          ],
        });
      });
    },
    34896: function (e, t, n) {
      n.d(t, {
        H: function () {
          return s;
        },
      });
      var a = n(45842),
        i = n(82803);
      let s = (e) => {
        switch (e.type) {
          case i.H.InterfaceOperationType.repay:
          case i.H.InterfaceOperationType.borrow:
          case i.H.InterfaceOperationType.metaMorphoDeposit:
          case i.H.InterfaceOperationType.metaMorphoWithdraw:
            return e.assets > 0n || e.shares > 0n;
          case i.H.InterfaceOperationType.withdrawCollateral:
          case i.H.InterfaceOperationType.supplyCollateral:
            return e.assets > 0n;
          case i.H.InterfaceOperationType.supplyCollateralBorrow:
          case i.H.InterfaceOperationType.withdrawCollateralRepay:
            return e.collateralAssets > 0n || e.loanAssets > 0n || e.loanShares > 0n;
          case i.H.InterfaceOperationType.zap:
            return e.collateralAssets > 0n && e.marketTo !== a.DR;
          case i.H.InterfaceOperationType.migrateSupply:
            return e.assets > 0n;
          case i.H.InterfaceOperationType.migrateBorrow:
            return e.collateralAssets > 0n;
          default:
            throw Error('Not implemented');
        }
      };
    },
    89805: function (e, t, n) {
      n.d(t, {
        _: function () {
          return p;
        },
      });
      var a = n(58258),
        i = n(68612),
        s = n(40252),
        r = n(35047),
        l = n(51196),
        o = n(89991),
        d = n(34896),
        u = n(57054);
      let c = s.MathLib.MAX_UINT_160,
        p = function (e, t, n) {
          var p;
          let v = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            { account: h } = (0, o.Z_)(),
            m =
              null !== (p = null == h ? void 0 : h.address) && void 0 !== p
                ? p
                : '0x0000000000000000000000000000000000000001',
            y = (0, a.useMemo)(
              () =>
                v
                  ? e &&
                    (0, l.produceImmutable)(e, (e) => {
                      var t, n;
                      (0, r.keys)(e.tokens).forEach((t) => {
                        var n, a, r, l;
                        let o =
                          null !==
                            (l = (a =
                              null !== (r = (n = e.holdings)[m]) && void 0 !== r ? r : (n[m] = {}))[
                              t
                            ]) && void 0 !== l
                            ? l
                            : (a[t] = new s.Holding({
                                user: m,
                                token: t,
                                balance: 0n,
                                erc20Allowances: {
                                  morpho: 0n,
                                  permit2: 0n,
                                  'bundler3.generalAdapter1': i.zL,
                                },
                                permit2BundlerAllowance: { amount: 0n, expiration: 0n, nonce: 0n },
                              }));
                        (o.canTransfer = !0), (o.balance += c);
                      }),
                        (0, r.keys)(e.markets).forEach((t) => {
                          var n, a, i, r;
                          (null !==
                            (r = (a =
                              null !== (i = (n = e.positions)[m]) && void 0 !== i
                                ? i
                                : (n[m] = {}))[t]) &&
                            void 0 !== r) ||
                            (a[t] = new s.Position({
                              user: m,
                              marketId: t,
                              supplyShares: 0n,
                              borrowShares: 0n,
                              collateral: 0n,
                            }));
                        }),
                        (null !== (n = (t = e.users)[m]) && void 0 !== n) ||
                          (t[m] = new s.User({
                            address: m,
                            isBundlerAuthorized: !1,
                            morphoNonce: 0n,
                          }));
                    })
                  : e,
              [e, v, m]
            ),
            f = (0, a.useMemo)(() => ((0, d.H)(t) ? [t] : []), [t]),
            [g, A] = (0, u.b)(y, f, n, m),
            { steps: b, exceededToken: Z } = (0, a.useMemo)(() => {
              let e;
              return v
                ? {
                    steps:
                      m &&
                      (null == g
                        ? void 0
                        : g.map((n) =>
                            (0, l.produceImmutable)(n, (n) => {
                              var a;
                              let i = {};
                              (0, r.values)(
                                null !== (a = n.holdings[m]) && void 0 !== a ? a : {}
                              ).forEach((a) => {
                                if (!a) return;
                                let l = n.getBundleAssetBalances(
                                    m,
                                    a.token,
                                    s.DEFAULT_SLIPPAGE_TOLERANCE
                                  ),
                                  o = a.balance - c,
                                  { virtualFinalBalance: d, virtualDealtBalance: u } = (0,
                                  r.values)(null == l ? void 0 : l.allocations)
                                    .filter(r.isDefined)
                                    .reduce(
                                      (e, n) => {
                                        var a;
                                        let { type: i, srcAmount: s, dstAmount: r } = n;
                                        return (
                                          !(r > 0n) ||
                                            (null === (a = t.options.disabledPeripheralTokens) ||
                                            void 0 === a
                                              ? void 0
                                              : a.has(i)) ||
                                            ((e.virtualFinalBalance += r),
                                            (e.virtualDealtBalance += (c * r) / s)),
                                          e
                                        );
                                      },
                                      { virtualFinalBalance: 0n, virtualDealtBalance: 0n }
                                    ),
                                  p = n.tryGetToken(a.token);
                                d < u &&
                                  p &&
                                  (!e || (null == p ? void 0 : p.address) === s.NATIVE_ADDRESS) &&
                                  (e = new s.Token(p)),
                                  (i[a.token] = new s.Holding({
                                    ...a,
                                    balance: s.MathLib.max(0n, o),
                                  }));
                              }),
                                (n.holdings[m] = i);
                            })
                          )),
                    exceededToken: e,
                  }
                : { steps: g, exceededToken: void 0 };
            }, [t.options.disabledPeripheralTokens, v, m, g]);
          return [b, A, m, Z];
        };
    },
    61536: function (e, t, n) {
      n.d(t, {
        q: function () {
          return d;
        },
      });
      var a = n(4565),
        i = n(12556),
        s = n(54655),
        r = n(35047);
      let l = (e) => {
          var t, n;
          let { userAddress: l, state: d, vault: u, position: c } = e,
            { initial: p, latest: v } = d,
            h =
              null == p
                ? void 0
                : null === (t = p.tryGetAccrualVault(u.address)) || void 0 === t
                  ? void 0
                  : t.accrueInterest(p.block.timestamp),
            m =
              null == v
                ? void 0
                : null === (n = v.tryGetAccrualVault(u.address)) || void 0 === n
                  ? void 0
                  : n.accrueInterest(v.block.timestamp),
            y = (0, i.wk)(u.asset),
            f = (0, r.isDefined)(null == c ? void 0 : c.shares) ? c.shares : null,
            g = null == p ? void 0 : p.getBundleBalance(l, u.address),
            A = null == v ? void 0 : v.getBundleBalance(l, u.address),
            b = (0, r.isDefined)(null == c ? void 0 : c.assets) ? c.assets : null,
            Z = (0, r.isDefined)(g) && (0, r.isDefined)(h) ? h.toAssets(g) : void 0,
            w = (0, r.isDefined)(A) && (0, r.isDefined)(m) ? m.toAssets(A) : void 0,
            x = (0, r.isDefined)(null == c ? void 0 : c.assetsUsd)
              ? (0, a.safeParseNumber)(c.assetsUsd)
              : null,
            k =
              (0, r.isDefined)(Z) && (0, r.isDefined)(y)
                ? null == y
                  ? void 0
                  : y.toUsd(Z)
                : void 0,
            B =
              (0, r.isDefined)(w) && (0, r.isDefined)(y)
                ? null == y
                  ? void 0
                  : y.toUsd(w)
                : void 0,
            T = (!(0, r.isDefined)(g) || 0n === g) && (0, r.isDefined)(A),
            I = { apiValue: f, initialOnchainValue: g, latestSimulatedValue: A },
            M = { apiValue: b, initialOnchainValue: Z, latestSimulatedValue: w },
            C = { apiValue: x, initialOnchainValue: k, latestSimulatedValue: B },
            P = {
              ...(null != c ? c : {}),
              vault: u,
              isSimulated: !1,
              isNew: T,
              assetsUsd: C,
              assets: M,
              shares: I,
              simulatedValues: {
                shares: (0, s.rvY)(I),
                assets: (0, s.rvY)(M),
                assetsUsd: (0, s.rvY)(C),
              },
            };
          return { ...P, isSimulated: o(P) };
        },
        o = (e) => Object.values(e.simulatedValues).some((e) => e.isSimulated),
        d = (e) => {
          let { existingPositions: t, missingVaults: n, state: a, userAddress: i } = e;
          if (!i) return { positions: [], isSimulated: !1 };
          if (!t && 0 === n.length) return { positions: t, isSimulated: !1 };
          let s = [];
          (0, r.isDefined)(t) &&
            t.length > 0 &&
            t.forEach((e) => {
              let t = l({ userAddress: i, state: a, vault: e.vault, position: e });
              t && s.push(t);
            }),
            (0, r.isDefined)(n) &&
              n.length > 0 &&
              n.forEach((e) => {
                let t = l({ userAddress: i, state: a, vault: e });
                t && s.push(t);
              });
          let d = s.filter((e) => !e.isNew || !!o(e)),
            u = d.some((e) => o(e));
          return { positions: d, isSimulated: u };
        };
    },
    60410: function (e, t, n) {
      n.d(t, {
        e: function () {
          return a;
        },
      });
      function a(e) {
        let { type: t, srcToken: n } = e;
        switch (t) {
          case 'wrapped-vault':
          case 'vault':
            return 'Allow '.concat(n.symbol, ' deposit');
          case 'wrapped':
            return 'Allow '.concat(n.symbol, ' wrapping');
          case 'unwrapped-staked-wrapped':
          case 'staked-wrapped':
            return 'Allow '.concat(n.symbol, ' staking');
        }
        throw Error('Unhandled peripheral token type: "'.concat(t, '"'));
      }
    },
    34937: function (e, t, n) {
      n.d(t, {
        Ai: function () {
          return u;
        },
        Iz: function () {
          return d;
        },
        Vl: function () {
          return o;
        },
      });
      var a,
        i,
        s = n(56489),
        r = n(13191),
        l = n(35047);
      function o(e) {
        return (0, s.Z)(e, { unit: 'mo', duration: 3 })
          ? 'quarterlyNetApy'
          : 'mo' === e
            ? 'monthlyNetApy'
            : 'w' === e
              ? 'weeklyNetApy'
              : 'allTimeNetApy';
      }
      function d() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return Math.floor(Number(l.Time.timestamp()) / 60) * e;
      }
      function u(e) {
        let { timeFrame: t, now: n } = e;
        return {
          startTimestamp: t ? n - l.Time.s.fromPeriod(t) : 0,
          endTimestamp: n,
          interval: 'w' === t ? r.TimeseriesInterval.Hour : r.TimeseriesInterval.Day,
        };
      }
      ((a = i || (i = {})).OneDay = '1d'),
        (a.OneWeek = '1w'),
        (a.OneMonth = '1m'),
        (a.ThreeMonths = '3m'),
        (a.OneYear = '1y'),
        (a.YearToDay = 'ytd'),
        (a.AllTime = 'all');
    },
    91766: function (e, t, n) {
      var a = n(12556),
        i = n(89991),
        s = n(34550);
      t.Z = function (e) {
        let {
            vaultAddress: t,
            operationLabel: n,
            inputAmount: r,
            isNew: l,
            localErrorMessage: o,
            operations: d,
            simulationError: u,
            blockError: c,
            isPending: p,
            isConfirmDisabled: v,
            hasModifiedOperation: h,
            chainId: m,
          } = e,
          { account: y } = (0, i.Z_)(),
          { isReadOnly: f } = (0, a.WW)({ chainId: m, address: t }),
          g = (0, s.Z)(n, 0n === r, l, !1, o, d, u, c, p, y.isWrongChain, f);
        return v && h
          ? { bundlerButtonLabel: g, confirmButtonLabel: g }
          : l
            ? { bundlerButtonLabel: 'Add to bundler', confirmButtonLabel: g }
            : {
                bundlerButtonLabel: h ? 'Save in bundler' : 'View in bundler',
                confirmButtonLabel: g,
              };
      };
    },
    53745: function (e, t, n) {
      var a = n(58258);
      t.Z = (e, t, n) =>
        (0, a.useMemo)(() => {
          var a;
          if (!n) return !1;
          if (!e) return !0;
          let i = null == t ? void 0 : t.tryGetHolding(e, n);
          return null === (a = null == i ? void 0 : i.canTransfer) || void 0 === a || a;
        }, [t, e, n]);
    },
    66395: function (e, t, n) {
      var a = n(58258);
      t.Z = (e, t, n) =>
        (0, a.useMemo)(
          () =>
            n
              ? 'You must lower your LTV below the Liquidation LTV to take this action'
              : e
                ? 'Insufficient '.concat(e.symbol, ' Balance')
                : t,
          [t, n, e]
        );
    },
    34550: function (e, t, n) {
      var a = n(58258),
        i = n(3100);
      t.Z = (e, t, n, s, r, l, o, d, u, c, p) =>
        (0, a.useMemo)(
          () =>
            p
              ? ''.concat((0, i.Z)(e), ' disabled')
              : t
                ? 'Enter an amount'
                : c
                  ? 'Wrong network'
                  : !n && s
                    ? 'Editing'
                    : d && u
                      ? 'Could not fetch block'
                      : r ||
                        (o
                          ? o.message
                          : 0 !== l.length && (1 !== l.length || n)
                            ? 'Finalize bundle'
                            : 'Review '.concat(e)),
          [t, s, u, n, l.length, d, o, r, c, e, p]
        );
    },
    76258: function (e, t, n) {
      var a = n(58258),
        i = n(35047);
      t.Z = (e, t, n) => (0, a.useMemo)(() => !(!e || (0, i.isDefined)(t)) && n, [e, n, t]);
    },
    25465: function (e, t, n) {
      n.d(t, {
        D: function () {
          return r;
        },
      });
      var a = n(58258),
        i = n(22683),
        s = n(4205);
      let r = (e, t) => {
        let { operations: n } = (0, i.N)(),
          {
            operation: r,
            index: l,
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
          operation: r,
          initialState: (0, s.f)(l),
          finalState: (0, s.f)(l + 1),
          isNew: o,
          index: l,
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
        i = n(40252),
        s = n(12556),
        r = n(35047),
        l = n(22683),
        o = n(82803),
        d = n(89991),
        u = n(60410);
      let c = (e, t, n) => {
        let { account: s } = (0, d.Z_)();
        return (0, a.useMemo)(() => {
          var a;
          if (!(null == s ? void 0 : s.address) || !t) return;
          let r =
            null == t
              ? void 0
              : null === (a = t.tryGetAccrualVault(e)) || void 0 === a
                ? void 0
                : a.accrueInterest(t.block.timestamp);
          if (!r) return;
          let l = t.getBundleMaxBalance(s.address, r.asset, i.DEFAULT_SLIPPAGE_TOLERANCE, n);
          if (void 0 !== l) return { assets: r.getDepositCapacityLimit(l).value, shares: 0n };
        }, [s.address, t, e, n]);
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
          [f, g] = (0, a.useState)(h.assets),
          [A, b] = (0, a.useState)(
            h.options.isMax.includes(o.H.InterfaceOperationType.metaMorphoDeposit)
          ),
          [Z, , , w, x] = (0, s.$X)(h.options.disabledPeripheralTokens),
          k = c(e, null == m ? void 0 : m.data, Z),
          B = (0, a.useCallback)((e) => {
            b(!1), g(e);
          }, []),
          T = (0, p.Z)(
            n.isConnected,
            null == k ? void 0 : k.assets,
            m.isPending || m.isFetchingAny
          ),
          I = (0, a.useMemo)(
            () => ({
              type: o.H.InterfaceOperationType.metaMorphoDeposit,
              vaultAddress: e,
              assets: f,
              shares: 0n,
              id: h.id,
              options: {
                origin: t.origin,
                isMax: A ? [o.H.InterfaceOperationType.metaMorphoDeposit] : [],
                disabledPeripheralTokens: Z,
              },
            }),
            [f, Z, A, h.id, e, t.origin]
          ),
          { updateOperation: M } = (0, l.N)(),
          C = (0, a.useMemo)(() => {
            var t, a;
            if (!n.address) return;
            let s =
                null == m
                  ? void 0
                  : null === (t = m.data) || void 0 === t
                    ? void 0
                    : t.tryGetVault(e),
              l =
                s &&
                (null == m
                  ? void 0
                  : null === (a = m.data) || void 0 === a
                    ? void 0
                    : a.getBundleAssetBalances(
                        n.address,
                        s.asset,
                        i.DEFAULT_SLIPPAGE_TOLERANCE,
                        !0
                      ));
            if (l)
              return (0, r.values)(l.allocations)
                .filter(r.isDefined)
                .filter((e) => 'base' !== e.type && e.dstAmount > 0n)
                .map((e) => ({
                  id: e.type,
                  label: (0, u.e)(e),
                  value: !Z.has(e.type),
                  srcToken: e.srcToken,
                }));
          }, [n.address, Z, null == m ? void 0 : m.data, e]),
          P = 'position-manager' === t.origin,
          [O, S] = (0, a.useState)(y || P),
          D = (0, a.useMemo)(() => {
            let e = A !== h.options.isMax.includes(o.H.InterfaceOperationType.metaMorphoDeposit),
              t = f !== h.assets;
            return e || t;
          }, [f, A, h.assets, h.options.isMax]),
          X = (0, a.useCallback)(() => {
            M(I.id, () => I), S(!1);
          }, [I, M]);
        (0, a.useEffect)(() => {
          'bundler' === t.origin && X();
        }, [X, t.origin]),
          (0, a.useEffect)(() => {
            O || g(h.assets);
          }, [O, h.assets]);
        let W = (0, a.useCallback)(
          (e) => {
            if (e) {
              if ((null == k ? void 0 : k.assets) == null) return;
              g(k.assets);
            }
            b(e);
          },
          [null == k ? void 0 : k.assets]
        );
        (0, a.useEffect)(() => {
          O ||
            (b(h.options.isMax.includes(o.H.InterfaceOperationType.metaMorphoDeposit)),
            x(h.options.disabledPeripheralTokens));
        }, [O, h.options, x]),
          (0, a.useEffect)(() => {
            W(A);
          }, [A, W]);
        let E = (0, a.useCallback)(() => S(!1), []);
        return (0, a.useMemo)(
          () => ({
            isNew: y,
            inputAmount: f,
            setInputAmount: B,
            isMax: A,
            setIsMax: W,
            localOperation: I,
            maxAmount: null == k ? void 0 : k.assets,
            isLoading: T,
            initialState: m,
            confirm: X,
            cancel: E,
            setIsEditing: S,
            peripheralTokenOptions: C,
            onPeripheralTokenOptionChange: w,
            isEditing: O,
            hasModifiedDepositOperation: D,
          }),
          [y, f, B, A, W, T, I, m, X, E, C, w, O, null == k ? void 0 : k.assets, D]
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
        i = n(22683),
        s = n(82803),
        r = n(89991),
        l = n(40252);
      let o = (e, t) => {
        let { account: n } = (0, r.Z_)();
        return (0, a.useMemo)(() => {
          var a;
          if ((null == n ? void 0 : n.address) === void 0) return;
          let i = null == t ? void 0 : t.getBundleBalance(n.address, e, !0),
            s =
              null == t
                ? void 0
                : null === (a = t.tryGetAccrualVault(e)) || void 0 === a
                  ? void 0
                  : a.accrueInterest(t.block.timestamp);
          if (void 0 === i || void 0 === s) return;
          let r = null == s ? void 0 : s.getWithdrawCapacityLimit(i);
          if (void 0 !== r && void 0 !== i)
            return r.limiter === l.CapacityLimitReason.balance
              ? { shares: i, assets: r.value }
              : { shares: 0n, assets: r.value };
        }, [n.address, t, e]);
      };
      var d = (e, t, n, i) =>
          (0, a.useMemo)(() => {
            var a;
            let s =
              null == i
                ? void 0
                : null === (a = i.tryGetAccrualVault(e)) || void 0 === a
                  ? void 0
                  : a.accrueInterest(i.block.timestamp);
            return s && n ? s.toAssets(n) : t;
          }, [t, i, n, e]),
        u = n(76258),
        c = n(25465);
      let p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          {
            operation: n,
            initialState: l,
            isNew: p,
          } = (0, c.D)(e, s.H.InterfaceOperationType.metaMorphoWithdraw),
          { account: v } = (0, r.Z_)(),
          [h, m] = (0, a.useState)(n.assets),
          [y, f] = (0, a.useState)(n.shares),
          [g, A] = (0, a.useState)(
            n.options.isMax.includes(s.H.InterfaceOperationType.metaMorphoWithdraw)
          ),
          b = o(e, null == l ? void 0 : l.data),
          Z = d(e, h, y, l.data),
          w = (0, a.useCallback)((e) => {
            A(!1), m(e), f(0n);
          }, []),
          x = (0, a.useMemo)(() => {
            let e = g !== n.options.isMax.includes(s.H.InterfaceOperationType.metaMorphoWithdraw),
              t = h !== n.assets;
            return e || t;
          }, [h, g, n.assets, n.options.isMax]),
          k = (0, u.Z)(
            v.isConnected,
            null == b ? void 0 : b.assets,
            l.isFetchingAny || l.isPending
          ),
          B = (0, a.useMemo)(
            () => ({
              type: s.H.InterfaceOperationType.metaMorphoWithdraw,
              vaultAddress: e,
              assets: h,
              shares: y,
              id: n.id,
              options: {
                origin: t.origin,
                isMax: g ? [s.H.InterfaceOperationType.metaMorphoWithdraw] : [],
              },
            }),
            [h, g, n.id, t.origin, y, e]
          ),
          { updateOperation: T } = (0, i.N)(),
          I = 'position-manager' === t.origin,
          [M, C] = (0, a.useState)(p || I),
          P = (0, a.useCallback)(() => {
            T(B.id, () => B), C(!1);
          }, [B, T]);
        (0, a.useEffect)(() => {
          'bundler' === t.origin && P();
        }, [P, t.origin]);
        let O = (0, a.useCallback)(
          (e) => {
            if (e) {
              if ((null == b ? void 0 : b.assets) == null) return;
              m(b.assets), f(b.shares);
            }
            A(e);
          },
          [b]
        );
        (0, a.useEffect)(() => {
          M || (m(n.assets), f(n.shares), A(n.options.isMax.includes(n.type)));
        }, [M, n.assets, n.options.isMax, n.shares, n.type]),
          (0, a.useEffect)(() => {
            O(g);
          }, [g, O]);
        let S = (0, a.useCallback)(() => C(!1), []);
        return (0, a.useMemo)(
          () => ({
            isNew: p,
            inputAmount: Z,
            setInputAmount: w,
            isMax: g,
            setIsMax: O,
            localOperation: B,
            maxAmount: null == b ? void 0 : b.assets,
            isLoading: k,
            initialState: l,
            confirm: P,
            cancel: S,
            setIsEditing: C,
            isEditing: M,
            hasModifiedWithdrawOperation: x,
          }),
          [p, Z, w, g, O, B, null == b ? void 0 : b.assets, k, l, P, S, M, x]
        );
      };
    },
    25596: function (e, t, n) {
      n.d(t, {
        oP: function () {
          return l;
        },
      });
      var a = n(78286),
        i = n(58258),
        s = n(12556),
        r = n(54655);
      let l = (e) => {
        let { address: t, error: n, isWrongChain: a, chainId: r } = e,
          { isReadOnly: l, message: o } = (0, s.WW)({ chainId: r, address: t });
        return (0, i.useMemo)(
          () =>
            l
              ? { message: o, textProps: { whiteSpace: 'break-spaces' } }
              : n
                ? { message: n, textProps: { wordBreak: 'break-all' } }
                : a
                  ? { message: 'Please switch to the correct network', textProps: {} }
                  : void 0,
          [n, a, l, o]
        );
      };
      t.ZP = (e) => {
        let { address: t, error: n, isWrongChain: i, chainId: s } = e,
          o = l({ address: t, error: n, isWrongChain: i, chainId: s });
        if (o) return (0, a.tZ)(r.xvT.Body.XXXS.Regular, { ...o.textProps, children: o.message });
      };
    },
    57935: function (e, t, n) {
      n.d(t, {
        w: function () {
          return l;
        },
      });
      var a = n(58258),
        i = n(89991),
        s = n(61536),
        r = n(4205);
      let l = (e) => {
        let { existingPositions: t, missingVaults: n } = e,
          { data: l } = (0, r.f)(0),
          { data: o } = (0, r.f)(),
          { account: d } = (0, i.Z_)();
        return (0, a.useMemo)(
          () =>
            (0, s.q)({
              userAddress: null == d ? void 0 : d.address,
              state: { initial: l, latest: o },
              existingPositions: t,
              missingVaults: n,
            }),
          [l, o, null == d ? void 0 : d.address, t, n]
        );
      };
    },
    76280: function (e, t, n) {
      n.d(t, {
        q: function () {
          return i;
        },
      });
      var a = n(58258);
      let i = (e) =>
        (0, a.useMemo)(() => {
          if (!e) return;
          let t = [],
            n = [],
            a = [],
            { address: i, asset: s, state: r } = e;
          return (
            t.push(i),
            n.push(i, s.address),
            (null == r ? void 0 : r.allocation) &&
              r.allocation.forEach((e) => {
                var t;
                let { market: i } = e;
                a.push(i.uniqueKey);
                let s = null === (t = i.collateralAsset) || void 0 === t ? void 0 : t.address;
                s && n.push(s);
              }),
            { vaults: t, tokens: n, marketIds: a }
          );
        }, [e]);
    },
  },
]);
