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
    (e._sentryDebugIds[t] = 'bcfe2ee3-1cf6-4eeb-a4e8-a14506a45ecc'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-bcfe2ee3-1cf6-4eeb-a4e8-a14506a45ecc'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9255],
  {
    45609: function (e, t, r) {
      r.d(t, {
        F: function () {
          return a;
        },
      });
      var n = r(38819),
        i = r(54655);
      let a = (0, n.Z)(i.Kqy, { target: 'ebb6v3g0' })(
        'max-height:450px;flex-direction:column;overflow-y:auto;gap:20px;'
      );
    },
    4340: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return ea;
        },
      });
      var n = r(78286),
        i = r(58258);
      r(7477);
      var a = r(65978),
        o = r(82803),
        l = r(45609),
        f = r(12556),
        d = r(54655),
        s = r(35047),
        u = r(725),
        c = r(89991),
        p = r(36247),
        m = r(4565),
        v = r(78017),
        g = r(30806),
        b = r(35288),
        h = r(16820),
        y = r(6423),
        w = r(47528),
        x = r(71985),
        A = (0, i.memo)((e) => {
          let { className: t, amount: r, asset: a, label: o } = e,
            l = (0, i.useMemo)(() => a.toUsd(r), [a, r]);
          return (0, n.BX)(d.Kqy, {
            className: t,
            direction: 'column',
            gap: 12,
            align: 'stretch',
            paddingBottom: 4,
            children: [
              (0, n.tZ)(d.xvT.Body.XS.Regular, { color: 'text.secondary', children: o }),
              (0, n.BX)(d.Kqy, {
                align: 'center',
                gap: 16,
                justify: 'space-between',
                children: [
                  (0, n.BX)(d.Kqy, {
                    gap: 4,
                    align: 'center',
                    children: [
                      (0, n.tZ)(d.xvT.Title.XS, {
                        color: 'text.primary',
                        children: d.$0l.short
                          .digits((0, d.QQD)(a.price, r))
                          .trailingZero(!r)
                          .of(r, a.decimals),
                      }),
                      (0, n.tZ)(d.xvT.Title.XS, { color: 'text.tertiary', children: a.symbol }),
                      (0, s.isDefined)(l)
                        ? (0, n.tZ)(d.Vp9, {
                            variant: 'bundler',
                            children: (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
                              lineHeight: 'normal',
                              color: 'text.body',
                              children: d.$0l.short
                                .smallValuesWithCommas()
                                .digits(2)
                                .unit('$')
                                .of(l, 18),
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, n.tZ)(d.qEK, { src: a.logoURI, size: 24, padding: 0 }),
                ],
              }),
            ],
          });
        });
      let T = d.$0l.percent.digits(2).default('0%').trailingZero(!1).unit('%'),
        Z = {
          [o.H.InterfaceOperationType.supplyCollateralBorrow]: 'Supply Collateral',
          [o.H.InterfaceOperationType.withdrawCollateralRepay]: 'Withdraw Collateral',
        },
        k = {
          [o.H.InterfaceOperationType.supplyCollateralBorrow]: 'Borrow',
          [o.H.InterfaceOperationType.withdrawCollateralRepay]: 'Repay',
        };
      var q = (0, i.memo)((e) => {
          var t, r;
          let {
              collateralAsset: a,
              loanAsset: o,
              lltv: l,
              oracle: p,
              warnings: q,
              uniqueKey: B,
              operation: M,
              borrowAmount: S,
              mode: P,
              state: I,
              dailyBorrowApy: R,
              dailyNetBorrowApy: C,
              initialPosition: X,
              finalPosition: L,
              label: F,
              isPositionUnhealthy: O,
            } = e,
            { targetChainId: E } = (0, c.Z_)(),
            D = (0, w.H)({ state: I, loanAsset: o }),
            K = (0, i.useMemo)(() => (0, f.wk)(a), [a]),
            _ = (0, i.useMemo)(() => (0, f.wk)(o), [o]),
            U = (0, d.$4C)({ chainId: E, uniqueKey: M.marketId, collateralAddress: a.address }),
            H = (0, i.useMemo)(() => (0, m.safeParseNumber)(R || 0, 18), [R]),
            z = (0, i.useMemo)(() => d.$0l.percent.default('0.00').digits(2).unit('%').of(C), [C]),
            V = (0, i.useMemo)(() => {
              var e, t;
              return {
                collateral: (0, h.sL)({
                  price: K.price,
                  amount: null !== (e = null == X ? void 0 : X.collateral) && void 0 !== e ? e : 0n,
                  decimals: K.decimals,
                  withTrailingZero: !(null == X ? void 0 : X.collateral),
                }),
                borrowAssets: (0, h.sL)({
                  price: _.price,
                  amount:
                    null !== (t = null == X ? void 0 : X.borrowAssets) && void 0 !== t ? t : 0n,
                  decimals: _.decimals,
                  withTrailingZero: !(null == X ? void 0 : X.borrowAssets),
                }),
                ltv: T.of(null == X ? void 0 : X.ltv, 18),
              };
            }, [
              K.price,
              K.decimals,
              null == X ? void 0 : X.collateral,
              null == X ? void 0 : X.borrowAssets,
              null == X ? void 0 : X.ltv,
              _.price,
              _.decimals,
            ]),
            W = (0, i.useMemo)(() => {
              var e, t, r, n;
              return {
                collateral: (0, h.sL)({
                  price: null !== (e = K.price) && void 0 !== e ? e : 0n,
                  amount: null !== (t = null == L ? void 0 : L.collateral) && void 0 !== t ? t : 0n,
                  decimals: K.decimals,
                  withTrailingZero: !(null == L ? void 0 : L.collateral),
                }),
                borrowAssets: (0, h.sL)({
                  price: null !== (r = _.price) && void 0 !== r ? r : 0n,
                  amount:
                    null !== (n = null == L ? void 0 : L.borrowAssets) && void 0 !== n ? n : 0n,
                  decimals: _.decimals,
                  withTrailingZero: !(null == L ? void 0 : L.borrowAssets),
                }),
                ltv: T.of(null == L ? void 0 : L.ltv, 18),
              };
            }, [
              K.price,
              K.decimals,
              null == L ? void 0 : L.collateral,
              null == L ? void 0 : L.borrowAssets,
              null == L ? void 0 : L.ltv,
              _.price,
              _.decimals,
            ]),
            N = (0, i.useMemo)(
              () =>
                '0' === W.collateral && '0' === W.borrowAssets ? 0n : null == L ? void 0 : L.ltv,
              [W, L]
            ),
            $ = (0, i.useMemo)(() => Z[F], [F]),
            j = (0, i.useMemo)(() => k[F], [F]);
          return (0, n.BX)(x.P, {
            direction: 'column',
            gap: 32,
            align: 'stretch',
            mode: P,
            children: [
              (0, n.BX)(d.Kqy, {
                gap: 8,
                align: 'center',
                children: [
                  (0, n.tZ)(d._nw, {
                    leftAvatarProps: { src: a.logoURI },
                    rightAvatarProps: { src: o.logoURI },
                    size: 'medium',
                  }),
                  (0, n.tZ)(d.xvT.Title.XS, {
                    color: 'text.body',
                    children: (0, d.lAJ)({ collateralAsset: a, loanAsset: o, maxLength: 20 }),
                  }),
                  (0, n.tZ)(d.Vp9, {
                    variant: 'bundler',
                    children: (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
                      lineHeight: 'normal',
                      color: 'text.body',
                      children: T.of(l, 18),
                    }),
                  }),
                  p &&
                    (0, n.tZ)(b.Z, {
                      tagProps: { variant: 'bundler' },
                      oracle: p,
                      warnings: null != q ? q : [],
                      typographyProps: { color: 'text.body' },
                    }),
                  (0, n.tZ)(g.x, {
                    tooltip: 'Open market.',
                    href: (0, y.E3)({
                      chainName: f.FW.getNameById(E),
                      marketUniqueKey: B,
                      collateralSymbol: null !== (t = K.symbol) && void 0 !== t ? t : '',
                      loanSymbol: null !== (r = _.symbol) && void 0 !== r ? r : '',
                    }),
                  }),
                ],
              }),
              (0, n.BX)(d.Kqy, {
                direction: 'column',
                gap: 12,
                align: 'stretch',
                children: [
                  M.collateralAssets > 0n &&
                    (0, n.BX)(n.HY, {
                      children: [
                        (0, n.tZ)(A, { amount: M.collateralAssets, asset: K, label: $ }),
                        (0, n.tZ)(d.Z0O, {}),
                      ],
                    }),
                  (0, s.isDefined)(S) &&
                    S > 0n &&
                    (0, n.BX)(n.HY, {
                      children: [
                        (0, n.tZ)(A, { amount: S, asset: _, label: j }),
                        'Review' === P && (0, n.tZ)(d.Z0O, {}),
                      ],
                    }),
                  'Review' === P &&
                    (0, n.BX)(d.Kqy, {
                      direction: 'column',
                      gap: 8,
                      align: 'stretch',
                      children: [
                        (0, n.BX)(d.Kqy, {
                          gap: 16,
                          align: 'center',
                          justify: 'space-between',
                          children: [
                            (0, n.BX)(d.xvT.Body.XS.Regular, {
                              color: 'text.secondary',
                              children: ['Collateral (', K.symbol, ')'],
                            }),
                            (0, n.BX)(d.Kqy, {
                              gap: 4,
                              children: [
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.interactive.disabled',
                                  children: V.collateral,
                                }),
                                (0, n.tZ)(d.JO$, {
                                  icon: 'ArrowRightPlain20',
                                  color: 'text.body',
                                  size: 20,
                                }),
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.body',
                                  children: W.collateral,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.BX)(d.Kqy, {
                          gap: 16,
                          align: 'center',
                          justify: 'space-between',
                          children: [
                            (0, n.BX)(d.xvT.Body.XS.Regular, {
                              color: 'text.secondary',
                              children: ['Loan (', _.symbol, ')'],
                            }),
                            (0, n.BX)(d.Kqy, {
                              gap: 4,
                              children: [
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.interactive.disabled',
                                  children: V.borrowAssets,
                                }),
                                (0, n.tZ)(d.JO$, {
                                  icon: 'ArrowRightPlain20',
                                  color: 'text.body',
                                  size: 20,
                                }),
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.body',
                                  children: W.borrowAssets,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.BX)(d.Kqy, {
                          gap: 16,
                          align: 'center',
                          justify: 'space-between',
                          children: [
                            (0, n.tZ)(d.xvT.Body.XS.Regular, {
                              color: 'text.secondary',
                              children: 'Borrow Rate',
                            }),
                            (0, n.tZ)(v.w, {
                              RewardsHoverCardProps: {
                                apy: H,
                                rewards: D,
                                points: U,
                                variant: 'market',
                                asset: a,
                                netApy: (0, h.Pi)(C, m.safeParseNumber),
                              },
                              children: (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                color: 'text.body',
                                lineHeight: 'normal',
                                children: z,
                              }),
                            }),
                          ],
                        }),
                        (0, n.BX)(d.Kqy, {
                          gap: 16,
                          align: 'center',
                          justify: 'space-between',
                          children: [
                            (0, n.tZ)(d.xvT.Body.XS.Regular, {
                              color: 'text.secondary',
                              children: (0, n.tZ)(u.gX, {
                                marketId: B,
                                label: 'LTV / Auto-Deleverage Liq. LTV',
                              }),
                            }),
                            (0, n.BX)(d.Kqy, {
                              align: 'center',
                              gap: '2px',
                              children: [
                                O &&
                                  (0, n.tZ)(d.JO$, {
                                    icon: 'AlertPlain20',
                                    color: 'icon.interactive.error',
                                  }),
                                (0, n.BX)(d.xvT.Body.XS.Regular, {
                                  color: 'text.body',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '2px',
                                  lineHeight: 'normal',
                                  children: [
                                    (0, n.tZ)(d.xvT.Inherit, {
                                      color: O ? 'text.interactive.error' : 'inherit',
                                      children: T.of(N, 18),
                                    }),
                                    (0, n.tZ)(d.xvT.Inherit, { children: '/' }),
                                    (0, n.tZ)(u.v1, { lltv: l, marketId: B }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }),
        B = (0, i.memo)((e) => {
          var t, r, a;
          let {
              operation: o,
              initialState: l,
              finalState: m,
              mode: v,
              onRiskyPosition: g,
              onLiquidatablePosition: b,
            } = e,
            { targetChainId: h, account: y } = (0, c.Z_)(),
            w = (0, p.Zc)({ variables: { uniqueKey: o.marketId, chainId: h } }),
            x = null === (t = w.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            A = (0, u.B9)({ lltv: null == x ? void 0 : x.lltv, marketId: o.marketId }),
            T = (0, i.useMemo)(() => {
              if (o.loanAssets) return o.loanAssets;
              let e = null == l ? void 0 : l.tryGetMarket(o.marketId);
              if (e) return e.toBorrowAssets(o.loanShares);
            }, [l, o.loanAssets, o.loanShares, o.marketId]),
            Z = (0, i.useMemo)(() => {
              if (l && y.address) return l.tryGetAccrualPosition(y.address, o.marketId);
            }, [y.address, l, o.marketId]),
            k = (0, i.useMemo)(() => {
              if (m && y.address) return m.tryGetAccrualPosition(y.address, o.marketId);
            }, [y.address, m, o.marketId]),
            B = (0, i.useMemo)(
              () => null != k && !!k.ltv && !!A && (0, f.M4)(k.ltv, A),
              [null == k ? void 0 : k.ltv, A]
            );
          return ((0, i.useEffect)(() => {
            B && (null == g || g()),
              (null == k ? void 0 : k.ltv) && A && k.ltv >= A && (null == b || b());
          }, [B, g, b, null == k ? void 0 : k.ltv, A]),
          w.loading)
            ? (0, n.tZ)(d.OdW, { height: '317px', borderRadius: '12px' })
            : (null == x ? void 0 : x.collateralAsset) &&
                (null == x ? void 0 : x.loanAsset) &&
                null != T &&
                Z &&
                k
              ? (0, n.tZ)(q, {
                  label: o.type,
                  mode: v,
                  collateralAsset: x.collateralAsset,
                  loanAsset: x.loanAsset,
                  lltv: A,
                  warnings: null == x ? void 0 : x.warnings,
                  uniqueKey: o.marketId,
                  operation: o,
                  borrowAmount: T,
                  initialPosition: Z,
                  finalPosition: k,
                  state: x.state,
                  dailyBorrowApy:
                    null === (r = x.state) || void 0 === r ? void 0 : r.dailyBorrowApy,
                  dailyNetBorrowApy:
                    null === (a = x.state) || void 0 === a ? void 0 : a.dailyNetBorrowApy,
                  oracle: { address: x.oracleAddress, ...x.oracleFeed },
                  isPositionUnhealthy: B,
                })
              : (0, n.tZ)(d.SKT, {
                  height: '317px',
                  text: 'Cannot display interaction with market '.concat(
                    (0, s.formatLongString)(o.marketId, 20)
                  ),
                });
        }),
        M = r(13191),
        S = r(19311),
        P = r(82196),
        I = (0, i.memo)((e) => {
          var t, r, a, l;
          let {
              initialState: f,
              finalState: u,
              operation: p,
              mode: m,
              onRiskyPosition: v,
              onLiquidatablePosition: g,
            } = e,
            { targetChainId: b } = (0, c.Z_)(),
            h = (0, P.Pm)({
              variables: { where: { uniqueKey_in: [p.marketId, p.marketTo], chainId_in: [b] } },
            }),
            y = (0, i.useMemo)(() => {
              var e, t;
              return null === (t = h.data) || void 0 === t
                ? void 0
                : null === (e = t.markets.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.uniqueKey === p.marketId);
            }, [h.data, p.marketId]),
            w = (0, i.useMemo)(() => {
              var e, t;
              return null === (t = h.data) || void 0 === t
                ? void 0
                : null === (e = t.markets.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.uniqueKey === p.marketTo);
            }, [h.data, p.marketTo]),
            x = (0, S.g)({
              marketId: p.marketId,
              isNewMarket: !1,
              operation: p,
              initialState: f,
              finalState: u,
            }),
            A = (0, S.g)({
              marketId: p.marketTo,
              isNewMarket: !0,
              operation: p,
              initialState: f,
              finalState: u,
            });
          return ((0, i.useEffect)(() => {
            let e = x.errors.ltvError,
              t = A.errors.ltvError,
              r = [e, t].some((e) => (null == e ? void 0 : e.level) === M.WarningLevel.Red),
              n = [e, t].some((e) => (null == e ? void 0 : e.level) === M.WarningLevel.Yellow);
            r && (null == g || g()), n && (null == v || v());
          }, [x.errors.ltvError, A.errors.ltvError, v, g]),
          h.loading)
            ? (0, n.tZ)(d.OdW, { height: '317px', borderRadius: '12px' })
            : (null == y ? void 0 : y.collateralAsset) &&
                (null == y ? void 0 : y.loanAsset) &&
                (null == w ? void 0 : w.collateralAsset) &&
                (null == w ? void 0 : w.loanAsset)
              ? (0, n.BX)(n.HY, {
                  children: [
                    (0, n.tZ)(q, {
                      mode: m,
                      label: o.H.InterfaceOperationType.withdrawCollateralRepay,
                      collateralAsset: null == y ? void 0 : y.collateralAsset,
                      loanAsset: null == y ? void 0 : y.loanAsset,
                      lltv: null == y ? void 0 : y.lltv,
                      warnings: null == y ? void 0 : y.warnings,
                      uniqueKey: p.marketId,
                      operation: p,
                      borrowAmount: p.borrowAssets,
                      initialPosition: x.initialPosition,
                      finalPosition: x.finalPosition,
                      state: null == y ? void 0 : y.state,
                      dailyBorrowApy:
                        null == y
                          ? void 0
                          : null === (t = y.state) || void 0 === t
                            ? void 0
                            : t.dailyBorrowApy,
                      dailyNetBorrowApy:
                        null == y
                          ? void 0
                          : null === (r = y.state) || void 0 === r
                            ? void 0
                            : r.dailyNetBorrowApy,
                      oracle: {
                        address: null == y ? void 0 : y.oracleAddress,
                        ...(null == y ? void 0 : y.oracleFeed),
                      },
                      isPositionUnhealthy: !!x.errors.ltvError,
                    }),
                    (0, n.tZ)(q, {
                      mode: m,
                      label: o.H.InterfaceOperationType.supplyCollateralBorrow,
                      collateralAsset: null == w ? void 0 : w.collateralAsset,
                      loanAsset: null == w ? void 0 : w.loanAsset,
                      lltv: null == w ? void 0 : w.lltv,
                      warnings: null == w ? void 0 : w.warnings,
                      uniqueKey: p.marketTo,
                      operation: p,
                      borrowAmount: p.borrowAssets,
                      initialPosition: A.initialPosition,
                      finalPosition: A.finalPosition,
                      dailyNetBorrowApy:
                        null == w
                          ? void 0
                          : null === (a = w.state) || void 0 === a
                            ? void 0
                            : a.dailyNetBorrowApy,
                      state: null == w ? void 0 : w.state,
                      dailyBorrowApy:
                        null == w
                          ? void 0
                          : null === (l = w.state) || void 0 === l
                            ? void 0
                            : l.dailyBorrowApy,
                      oracle: {
                        address: null == w ? void 0 : w.oracleAddress,
                        ...(null == w ? void 0 : w.oracleFeed),
                      },
                      isPositionUnhealthy: !!A.errors.ltvError,
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, {
                  height: '317px',
                  text: 'Cannot display interaction with market '.concat(
                    (0, s.formatLongString)(p.marketId, 20)
                  ),
                });
        }),
        R = r(23106),
        C = r(86144),
        X = r(9834),
        L = r(73057),
        F = r(83897),
        O = r(99153);
      let E = {
          [o.H.InterfaceOperationType.metaMorphoDeposit]: 'Deposit',
          [o.H.InterfaceOperationType.metaMorphoWithdraw]: 'Withdraw',
          [o.H.InterfaceOperationType.migrateSupply]: 'Deposit',
        },
        D = d.$0l.commas.trailingZero(!1);
      var K = (0, i.memo)((e) => {
          var t, r, a, l, s, u, p, v;
          let { operation: g, initialState: b, finalState: y, mode: w } = e,
            { targetChainId: T, account: Z } = (0, c.Z_)(),
            k = (0, O.eg)({ variables: { address: g.vaultAddress, chainId: T } }),
            q = null === (t = k.data) || void 0 === t ? void 0 : t.vaultByAddress,
            B = (0, i.useMemo)(() => {
              if (g.assets) return g.assets;
              let e = null == b ? void 0 : b.tryGetVault(g.vaultAddress);
              if (e) return e.toAssets(g.shares);
            }, [b, g.assets, g.shares, g.vaultAddress]),
            M = (0, i.useMemo)(
              () => (0, f.wk)(null == q ? void 0 : q.asset),
              [null == q ? void 0 : q.asset]
            ),
            { initialData: S, finalData: P } = (0, L.Z)(
              Z.address,
              b && y ? [b, y] : void 0,
              g.vaultAddress,
              M
            ),
            I = (0, i.useMemo)(() => {
              var e;
              return d.$0l.percent
                .digits(2)
                .unit('%')
                .of(
                  null == q
                    ? void 0
                    : null === (e = q.state) || void 0 === e
                      ? void 0
                      : e.dailyNetApy
                );
            }, [
              null == q ? void 0 : null === (r = q.state) || void 0 === r ? void 0 : r.dailyNetApy,
            ]),
            R = (0, i.useMemo)(() => {
              var e;
              return (0, X.m)(
                null == q ? void 0 : null === (e = q.state) || void 0 === e ? void 0 : e.allocation
              );
            }, [
              null == q ? void 0 : null === (a = q.state) || void 0 === a ? void 0 : a.allocation,
            ]),
            K = (0, F.M)(
              g.vaultAddress,
              null == q ? void 0 : q.state,
              null == q ? void 0 : q.asset
            ),
            _ = (0, d.vmq)({
              chainId: T,
              vaultAddress: g.vaultAddress,
              allocation:
                null == q ? void 0 : null === (l = q.state) || void 0 === l ? void 0 : l.allocation,
            }),
            U = (0, i.useMemo)(() => {
              if (g.type === o.H.InterfaceOperationType.migrateSupply) {
                var e;
                return (null !== (e = S.position) && void 0 !== e ? e : 0n) + g.assets;
              }
              return P.position;
            }, [P.position, g.type, g.assets, S.position]);
          return k.loading
            ? (0, n.tZ)(d.OdW, { height: '282px', borderRadius: '12px' })
            : q && null != B && M
              ? (0, n.BX)(x.P, {
                  direction: 'column',
                  gap: 32,
                  mode: w,
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      align: 'center',
                      children: [
                        (0, n.tZ)(d.qEK, {
                          src: null === (s = q.metadata) || void 0 === s ? void 0 : s.image,
                          size: 24,
                          padding: 2,
                        }),
                        (0, n.tZ)(d.xvT.Title.XS, { color: 'text.body', children: q.name }),
                      ],
                    }),
                    (0, n.BX)(d.Kqy, {
                      direction: 'column',
                      gap: 12,
                      align: 'stretch',
                      children: [
                        (0, n.tZ)(A, { amount: B, asset: M, label: E[g.type] }),
                        'Review' === w &&
                          (0, n.BX)(n.HY, {
                            children: [
                              (0, n.tZ)(d.Z0O, {}),
                              (0, n.BX)(d.Kqy, {
                                direction: 'column',
                                gap: 12,
                                align: 'stretch',
                                children: [
                                  (0, n.BX)(d.Kqy, {
                                    gap: 16,
                                    align: 'center',
                                    justify: 'space-between',
                                    children: [
                                      (0, n.BX)(d.xvT.Body.XS.Regular, {
                                        color: 'text.secondary',
                                        children: ['Deposit (', M.symbol, ')'],
                                      }),
                                      (0, n.BX)(d.Kqy, {
                                        gap: 2,
                                        children: [
                                          (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                            color: 'text.interactive.disabled',
                                            children: D.digits((0, d.QQD)(M.price, S.position))
                                              .trailingZero(!S.position)
                                              .of(S.position, M.decimals),
                                          }),
                                          (0, n.tZ)(d.JO$, {
                                            icon: 'ArrowRightPlain20',
                                            color: 'text.body',
                                          }),
                                          (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                            color: 'text.body',
                                            children: D.digits((0, d.QQD)(M.price, U))
                                              .trailingZero(!P.position)
                                              .of(U, M.decimals),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.BX)(d.Kqy, {
                                    gap: 16,
                                    align: 'center',
                                    justify: 'space-between',
                                    children: [
                                      (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                        color: 'text.secondary',
                                        children: 'APY',
                                      }),
                                      (0, n.tZ)(C.Z, {
                                        RewardsHoverCardProps: {
                                          performanceFee: (0, h.Pi)(
                                            null == q
                                              ? void 0
                                              : null === (u = q.state) || void 0 === u
                                                ? void 0
                                                : u.fee,
                                            m.safeParseNumber
                                          ),
                                          apy: (0, h.Pi)(
                                            null == q
                                              ? void 0
                                              : null === (p = q.state) || void 0 === p
                                                ? void 0
                                                : p.dailyApy,
                                            m.safeParseNumber
                                          ),
                                          rewards: K,
                                          points: _,
                                          variant: 'vault',
                                          asset: M,
                                          netApy: (0, h.Pi)(
                                            null == q
                                              ? void 0
                                              : null === (v = q.state) || void 0 === v
                                                ? void 0
                                                : v.dailyNetApy,
                                            m.safeParseNumber
                                          ),
                                        },
                                        children: (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                          color: 'text.body',
                                          children: I,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, n.BX)(d.Kqy, {
                                    gap: 16,
                                    align: 'center',
                                    justify: 'space-between',
                                    children: [
                                      (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                        color: 'text.secondary',
                                        children: 'Collateral',
                                      }),
                                      (0, n.tZ)(d.$xj, {
                                        align: 'right',
                                        items: R.map((e) => ({ logoUrl: e.token.logoURI })),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, {
                  height: '282px',
                  text: 'Cannot display interaction with vault '.concat((0, h.Tg)(g.vaultAddress)),
                });
        }),
        _ = r(98949),
        U = r(55412),
        H = r(3245),
        z = r(63658),
        V = r(41512),
        W = r(24387);
      function N() {
        let e = (0, U._)([
          '\n  query GetToken($address: String!, $chainId: Int) {\n    assetByAddress(address: $address, chainId: $chainId) {\n      ...assetFields\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      let $ = {},
        j = (0, H.Ps)(N(), V.n, W.G);
      var Y = r(49663),
        G = (0, i.memo)((e) => {
          var t, r;
          let { mode: a } = e,
            { legacyMorphoHolding: o } = (0, _.gz)(),
            { targetChainId: l } = (0, c.Z_)(),
            { data: s, loading: u } = (function (e) {
              let t = { ...$, ...e };
              return z.aM(j, t);
            })({ variables: { address: Y.rr.morphoToken, chainId: l } }),
            p = (0, i.useMemo)(() => {
              var e, t;
              return d.$0l.commas
                .digits(2)
                .of(
                  null !== (t = null === (e = o.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (t = o.value) || void 0 === t ? void 0 : t.balance]),
            m = (0, i.useMemo)(() => {
              var e, t, r;
              let n =
                null === (t = (0, f.wk)(null == s ? void 0 : s.assetByAddress)) || void 0 === t
                  ? void 0
                  : t.toUsd(
                      null !== (r = null === (e = o.value) || void 0 === e ? void 0 : e.balance) &&
                        void 0 !== r
                        ? r
                        : 0n
                    );
              return d.$0l.short.digits(2).default('0').unit('$').trailingZero(!1).of(n, 18);
            }, [s, null === (r = o.value) || void 0 === r ? void 0 : r.balance]);
          return (0, n.tZ)(x.P, {
            direction: 'column',
            gap: 32,
            mode: a,
            children: (0, n.tZ)(d.Kqy, {
              direction: 'column',
              gap: 12,
              align: 'stretch',
              children: (0, n.BX)(d.Kqy, {
                direction: 'column',
                gap: 12,
                align: 'stretch',
                children: [
                  (0, n.tZ)(d.xvT.Body.S.Regular, {
                    color: 'text.body',
                    shorten: 1,
                    children: 'Wrap Legacy MORPHO',
                  }),
                  (0, n.BX)(d.Kqy, {
                    justify: 'space-between',
                    children: [
                      (0, n.BX)(d.Kqy, {
                        gap: 4,
                        align: 'center',
                        children: [
                          (0, n.BX)(d.Kqy, {
                            gap: 4,
                            children: [
                              (0, n.tZ)(d.xvT.Title.XS, { color: 'text.body', children: p }),
                              (0, n.tZ)(d.xvT.Title.XS, {
                                color: 'text.tertiary',
                                children: 'MORPHO',
                              }),
                            ],
                          }),
                          u
                            ? (0, n.tZ)(d.OdW, { width: 62, height: 26, borderRadius: 24 })
                            : (0, n.tZ)(d.Vp9, {
                                variant: 'bundler',
                                children: (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
                                  lineHeight: 'normal',
                                  color: 'text.body',
                                  children: m,
                                }),
                              }),
                        ],
                      }),
                      u
                        ? (0, n.tZ)(d.OdW, { width: 24, height: 24, borderRadius: 50 })
                        : (0, n.tZ)(d.qEK, {
                            src: null == s ? void 0 : s.assetByAddress.logoURI,
                            size: 'medium',
                            padding: 0,
                          }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }),
        J = r(60145),
        Q = r(40252);
      let ee = d.$0l.percent.digits(2).default('0%').trailingZero(!1).unit('%');
      var et = (0, i.memo)((e) => {
          var t, r, a, o, l, u, m, v, g, b;
          let { operation: y, mode: w, onRiskyPosition: T, onLiquidatablePosition: Z } = e,
            { targetChainId: k } = (0, c.Z_)(),
            q = (0, p.Zc)({ variables: { uniqueKey: y.marketId, chainId: k } }),
            B = null === (t = q.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            M = (0, i.useMemo)(() => B && (0, f.wk)(B.loanAsset), [B]),
            S = (0, i.useMemo)(() => B && (0, f.wk)(B.collateralAsset), [B]),
            P = (0, i.useMemo)(() => {
              var e;
              return d.$0l.percent
                .digits(2)
                .unit('%')
                .of(
                  null === (e = y.position) || void 0 === e
                    ? void 0
                    : e.migratablePosition.borrowApy
                );
            }, [y.position]),
            I = (0, i.useMemo)(() => {
              if (y.position)
                return f.FW.getProtocol({
                  chainId: k,
                  name: y.position.migratablePosition.protocol,
                });
            }, [y.position, k]),
            R = (0, i.useMemo)(() => {
              var e;
              return null === (e = y.position) || void 0 === e
                ? void 0
                : e.migratablePosition.getLtv();
            }, [null === (r = y.position) || void 0 === r ? void 0 : r.migratablePosition]),
            C = (0, i.useMemo)(() => {
              var e;
              return null === (e = y.position) || void 0 === e
                ? void 0
                : e.migratablePosition.getLtv({
                    withdrawn: y.collateralAssets,
                    repaid: y.loanAssets,
                  });
            }, [y.position, y.collateralAssets, y.loanAssets]),
            X = (0, i.useMemo)(() => {
              var e, t;
              return (
                !!C &&
                null !== (e = y.position) &&
                void 0 !== e &&
                !!e.migratablePosition.lltv &&
                (0, f.M4)(
                  C,
                  null === (t = y.position) || void 0 === t ? void 0 : t.migratablePosition.lltv
                )
              );
            }, [C, null === (a = y.position) || void 0 === a ? void 0 : a.migratablePosition.lltv]),
            L = (0, i.useMemo)(() => {
              var e, t, r, n, i, a, o, l, f, d;
              return {
                collateral: (0, h.sL)({
                  price: null !== (i = null == S ? void 0 : S.price) && void 0 !== i ? i : 0n,
                  amount:
                    null !==
                      (a =
                        null === (e = y.position) || void 0 === e
                          ? void 0
                          : e.migratablePosition.collateral) && void 0 !== a
                      ? a
                      : 0n,
                  decimals: null !== (o = null == S ? void 0 : S.decimals) && void 0 !== o ? o : 0,
                  withTrailingZero: !(null === (t = y.position) || void 0 === t
                    ? void 0
                    : t.migratablePosition.collateral),
                }),
                borrowAssets: (0, h.sL)({
                  price: null !== (l = null == M ? void 0 : M.price) && void 0 !== l ? l : 0n,
                  amount:
                    null !==
                      (f =
                        null === (r = y.position) || void 0 === r
                          ? void 0
                          : r.migratablePosition.borrow) && void 0 !== f
                      ? f
                      : 0n,
                  decimals: null !== (d = null == M ? void 0 : M.decimals) && void 0 !== d ? d : 0,
                  withTrailingZero: !(null === (n = y.position) || void 0 === n
                    ? void 0
                    : n.migratablePosition.borrow),
                }),
                ltv: ee.of(R, 18),
              };
            }, [
              null == S ? void 0 : S.price,
              null == S ? void 0 : S.decimals,
              null === (o = y.position) || void 0 === o ? void 0 : o.migratablePosition.collateral,
              null === (l = y.position) || void 0 === l ? void 0 : l.migratablePosition.borrow,
              R,
              null == M ? void 0 : M.price,
              null == M ? void 0 : M.decimals,
            ]),
            F = (0, i.useMemo)(() => {
              var e, t, r, n, i, a, o, l, f, d;
              let s = Q.MathLib.max(
                  0n,
                  (null !==
                    (i =
                      null === (e = y.position) || void 0 === e
                        ? void 0
                        : e.migratablePosition.collateral) && void 0 !== i
                    ? i
                    : 0n) - y.collateralAssets
                ),
                u = Q.MathLib.max(
                  0n,
                  (null !==
                    (a =
                      null === (t = y.position) || void 0 === t
                        ? void 0
                        : t.migratablePosition.borrow) && void 0 !== a
                    ? a
                    : 0n) - y.loanAssets
                );
              return {
                collateral: (0, h.sL)({
                  price: null !== (o = null == S ? void 0 : S.price) && void 0 !== o ? o : 0n,
                  amount: s,
                  decimals: null !== (l = null == S ? void 0 : S.decimals) && void 0 !== l ? l : 0,
                  withTrailingZero:
                    !(null === (r = y.position) || void 0 === r
                      ? void 0
                      : r.migratablePosition.collateral) || 0n === y.collateralAssets,
                }),
                borrowAssets: (0, h.sL)({
                  price: null !== (f = null == M ? void 0 : M.price) && void 0 !== f ? f : 0n,
                  amount: u,
                  decimals: null !== (d = null == M ? void 0 : M.decimals) && void 0 !== d ? d : 0,
                  withTrailingZero:
                    !(null === (n = y.position) || void 0 === n
                      ? void 0
                      : n.migratablePosition.borrow) || 0n === y.loanAssets,
                }),
                ltv: ee.of(C, 18),
              };
            }, [
              null == S ? void 0 : S.price,
              null == S ? void 0 : S.decimals,
              null === (u = y.position) || void 0 === u ? void 0 : u.migratablePosition.collateral,
              null === (m = y.position) || void 0 === m ? void 0 : m.migratablePosition.borrow,
              y.collateralAssets,
              y.loanAssets,
              null == M ? void 0 : M.price,
              null == M ? void 0 : M.decimals,
              C,
            ]);
          return ((0, i.useEffect)(() => {
            var e, t;
            X && (null == T || T()),
              C &&
                (null == y
                  ? void 0
                  : null === (e = y.position) || void 0 === e
                    ? void 0
                    : e.migratablePosition.lltv) &&
                C >=
                  (null == y
                    ? void 0
                    : null === (t = y.position) || void 0 === t
                      ? void 0
                      : t.migratablePosition.lltv) &&
                (null == Z || Z());
          }, [
            X,
            T,
            Z,
            C,
            null == y
              ? void 0
              : null === (v = y.position) || void 0 === v
                ? void 0
                : v.migratablePosition.lltv,
          ]),
          q.loading)
            ? (0, n.tZ)(d.OdW, { height: '401px', borderRadius: '12px' })
            : B && M && S && y.position && !q.error
              ? (0, n.BX)(x.P, {
                  direction: 'column',
                  gap: 32,
                  align: 'stretch',
                  mode: w,
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      align: 'center',
                      children: [
                        (0, n.tZ)(d.qEK, { src: null == I ? void 0 : I.imageSrc, size: 'medium' }),
                        (0, n.tZ)(d.xvT.Title.XS, {
                          color: 'text.body',
                          children: null == I ? void 0 : I.name,
                        }),
                      ],
                    }),
                    (0, n.BX)(d.Kqy, {
                      direction: 'column',
                      gap: 12,
                      align: 'stretch',
                      children: [
                        y.collateralAssets > 0n &&
                          (0, n.BX)(n.HY, {
                            children: [
                              (0, n.tZ)(A, {
                                amount: y.collateralAssets,
                                asset: S,
                                label: 'Withdraw Collateral',
                              }),
                              (0, n.tZ)(d.Z0O, {}),
                            ],
                          }),
                        (0, s.isDefined)(y.loanAssets) &&
                          y.loanAssets > 0n &&
                          (0, n.BX)(n.HY, {
                            children: [
                              (0, n.tZ)(A, { amount: y.loanAssets, asset: M, label: 'Repay' }),
                              'Review' === w && (0, n.tZ)(d.Z0O, {}),
                            ],
                          }),
                        'Review' === w &&
                          (0, n.BX)(d.Kqy, {
                            direction: 'column',
                            gap: 8,
                            align: 'stretch',
                            children: [
                              (0, n.BX)(d.Kqy, {
                                gap: 16,
                                align: 'center',
                                justify: 'space-between',
                                children: [
                                  (0, n.BX)(d.xvT.Body.XS.Regular, {
                                    color: 'text.secondary',
                                    children: ['Collateral (', S.symbol, ')'],
                                  }),
                                  (0, n.BX)(d.Kqy, {
                                    gap: 4,
                                    children: [
                                      (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                        color: 'text.interactive.disabled',
                                        children: L.collateral,
                                      }),
                                      (0, n.tZ)(d.JO$, {
                                        icon: 'ArrowRightPlain20',
                                        color: 'text.body',
                                        size: 20,
                                      }),
                                      (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                        color: 'text.body',
                                        children: F.collateral,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.BX)(d.Kqy, {
                                gap: 16,
                                align: 'center',
                                justify: 'space-between',
                                children: [
                                  (0, n.BX)(d.xvT.Body.XS.Regular, {
                                    color: 'text.secondary',
                                    children: ['Loan (', M.symbol, ')'],
                                  }),
                                  (0, n.BX)(d.Kqy, {
                                    gap: 4,
                                    children: [
                                      (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                        color: 'text.interactive.disabled',
                                        children: L.borrowAssets,
                                      }),
                                      (0, n.tZ)(d.JO$, {
                                        icon: 'ArrowRightPlain20',
                                        color: 'text.body',
                                        size: 20,
                                      }),
                                      (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                        color: 'text.body',
                                        children: F.borrowAssets,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.BX)(d.Kqy, {
                                gap: 16,
                                align: 'center',
                                justify: 'space-between',
                                children: [
                                  (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                    color: 'text.secondary',
                                    children: 'Rate',
                                  }),
                                  (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                    color: 'text.body',
                                    lineHeight: 'normal',
                                    children: P,
                                  }),
                                ],
                              }),
                              (0, n.BX)(d.Kqy, {
                                gap: 16,
                                align: 'center',
                                justify: 'space-between',
                                children: [
                                  (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                    color: 'text.secondary',
                                    children: 'LTV / Liq. LTV',
                                  }),
                                  (0, n.BX)(d.Kqy, {
                                    align: 'center',
                                    gap: '2px',
                                    children: [
                                      X &&
                                        (0, n.tZ)(d.JO$, {
                                          icon: 'AlertPlain20',
                                          color: 'icon.interactive.error',
                                        }),
                                      (0, n.BX)(d.xvT.Body.XS.Regular, {
                                        color: 'text.body',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '2px',
                                        lineHeight: 'normal',
                                        children: [
                                          (0, n.tZ)(d.xvT.Inherit, {
                                            color: X ? 'text.interactive.error' : 'inherit',
                                            children: ee.of(C, 18),
                                          }),
                                          (0, n.tZ)(d.xvT.Inherit, { children: '/' }),
                                          (0, n.tZ)(d.xvT.Inherit, {
                                            children: ee.of(
                                              null === (g = y.position) || void 0 === g
                                                ? void 0
                                                : g.migratablePosition.lltv,
                                              18
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, {
                  height: '401px',
                  text: 'Cannot display interaction with '.concat(
                    (0, s.formatLongString)(
                      null !== (b = null == I ? void 0 : I.name) && void 0 !== b ? b : '',
                      20
                    ),
                    '.'
                  ),
                });
        }),
        er = (0, i.memo)((e) => {
          var t, r, a, l, m;
          let { operation: v, initialState: g, finalState: b, mode: h } = e,
            { targetChainId: y } = (0, c.Z_)(),
            w = (0, p.Zc)({ variables: { uniqueKey: v.marketId, chainId: y } }),
            x = null === (t = w.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            A = (0, J.K)({
              initialState: g,
              finalState: b,
              operation: v,
              marketId: v.marketId,
              position: v.position,
              protocol: f.FW.getProtocol({
                name:
                  null !==
                    (m =
                      null === (r = v.position) || void 0 === r
                        ? void 0
                        : r.migratablePosition.protocol) && void 0 !== m
                    ? m
                    : 'aaveV2',
                chainId: y,
              }),
            }),
            T = (0, u.B9)({ lltv: null == x ? void 0 : x.lltv, marketId: v.marketId }),
            Z = (0, i.useMemo)(() => {
              var e;
              let t = null === (e = A.finalPosition) || void 0 === e ? void 0 : e.ltv;
              return !!t && !!T && (0, f.M4)(t, T);
            }, [A.finalPosition, T]);
          return w.loading
            ? (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(d.OdW, { height: '401px', borderRadius: '12px' }),
                  (0, n.tZ)(d.OdW, { height: '401px', borderRadius: '12px' }),
                ],
              })
            : (null == x ? void 0 : x.collateralAsset) && (null == x ? void 0 : x.loanAsset)
              ? (0, n.BX)(n.HY, {
                  children: [
                    (0, n.tZ)(et, { operation: v, mode: h }),
                    (0, n.tZ)(q, {
                      mode: h,
                      label: o.H.InterfaceOperationType.supplyCollateralBorrow,
                      collateralAsset: x.collateralAsset,
                      loanAsset: x.loanAsset,
                      lltv: null == x ? void 0 : x.lltv,
                      warnings: null == x ? void 0 : x.warnings,
                      uniqueKey: v.marketId,
                      operation: v,
                      borrowAmount: v.loanAssets,
                      initialPosition: A.initialPosition,
                      finalPosition: A.previewedPosition,
                      dailyNetBorrowApy:
                        null == x
                          ? void 0
                          : null === (a = x.state) || void 0 === a
                            ? void 0
                            : a.dailyNetBorrowApy,
                      state: null == x ? void 0 : x.state,
                      dailyBorrowApy:
                        null == x
                          ? void 0
                          : null === (l = x.state) || void 0 === l
                            ? void 0
                            : l.dailyBorrowApy,
                      oracle: {
                        address: null == x ? void 0 : x.oracleAddress,
                        ...(null == x ? void 0 : x.oracleFeed),
                      },
                      isPositionUnhealthy: Z,
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, {
                  height: '401px',
                  text: 'Cannot display interaction with market '.concat(
                    (0, s.formatLongString)(v.marketId, 20)
                  ),
                });
        }),
        en = (0, i.memo)((e) => {
          var t;
          let { operation: r, mode: a } = e,
            { targetChainId: o } = (0, c.Z_)(),
            l = (0, O.eg)({ variables: { address: r.vaultAddress, chainId: o } }),
            s = null === (t = l.data) || void 0 === t ? void 0 : t.vaultByAddress,
            u = (0, i.useMemo)(
              () => (0, f.wk)(null == s ? void 0 : s.asset),
              [null == s ? void 0 : s.asset]
            ),
            p = (0, i.useMemo)(() => {
              var e;
              return d.$0l.percent
                .digits(2)
                .unit('%')
                .of(
                  null === (e = r.position) || void 0 === e
                    ? void 0
                    : e.migratablePosition.supplyApy
                );
            }, [r.position]),
            m = (0, i.useMemo)(() => {
              if (r.position)
                return f.FW.getProtocol({
                  chainId: o,
                  name: r.position.migratablePosition.protocol,
                });
            }, [r.position, o]);
          return l.loading
            ? (0, n.tZ)(d.OdW, { height: '282px', borderRadius: '12px' })
            : s && u && r.position
              ? (0, n.BX)(x.P, {
                  direction: 'column',
                  gap: 32,
                  mode: a,
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      align: 'center',
                      children: [
                        (0, n.tZ)(d.qEK, {
                          src: null == m ? void 0 : m.imageSrc,
                          size: 24,
                          padding: 2,
                        }),
                        (0, n.tZ)(d.xvT.Title.XS, {
                          color: 'text.body',
                          children: null == m ? void 0 : m.name,
                        }),
                      ],
                    }),
                    (0, n.BX)(d.Kqy, {
                      direction: 'column',
                      gap: 12,
                      align: 'stretch',
                      children: [
                        (0, n.tZ)(A, { amount: r.assets, asset: u, label: 'Withdraw' }),
                        'Review' === a &&
                          (0, n.BX)(n.HY, {
                            children: [
                              (0, n.tZ)(d.Z0O, {}),
                              (0, n.BX)(d.Kqy, {
                                direction: 'column',
                                gap: 12,
                                align: 'stretch',
                                children: [
                                  (0, n.BX)(d.Kqy, {
                                    gap: 16,
                                    align: 'center',
                                    justify: 'space-between',
                                    children: [
                                      (0, n.BX)(d.xvT.Body.XS.Regular, {
                                        color: 'text.secondary',
                                        children: ['Withdraw (', u.symbol, ')'],
                                      }),
                                      (0, n.BX)(d.Kqy, {
                                        gap: 2,
                                        children: [
                                          (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                            color: 'text.interactive.disabled',
                                            children: (0, h.sL)({
                                              price: u.price,
                                              amount: r.position.migratablePosition.max.value,
                                              decimals: u.decimals,
                                              withTrailingZero: !1,
                                            }),
                                          }),
                                          (0, n.tZ)(d.JO$, {
                                            icon: 'ArrowRightPlain20',
                                            color: 'text.body',
                                          }),
                                          (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                            color: 'text.body',
                                            children: (0, h.sL)({
                                              price: u.price,
                                              amount:
                                                r.position.migratablePosition.max.value - r.assets,
                                              decimals: u.decimals,
                                              withTrailingZero: !1,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.BX)(d.Kqy, {
                                    gap: 16,
                                    align: 'center',
                                    justify: 'space-between',
                                    children: [
                                      (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                        color: 'text.secondary',
                                        children: 'APY',
                                      }),
                                      (0, n.tZ)(d.Kqy, {
                                        gap: 2,
                                        children: (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                          color: 'text.body',
                                          children: p,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, {
                  height: '282px',
                  text: 'Cannot display interaction with vault '.concat((0, h.Tg)(r.vaultAddress)),
                });
        }),
        ei = (0, i.memo)((e) => {
          let { operation: t, initialState: r, finalState: i, mode: a } = e;
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(en, { operation: t, mode: a }),
              (0, n.tZ)(K, { operation: t, initialState: r, finalState: i, mode: a }),
            ],
          });
        }),
        ea = (0, i.memo)((e) => {
          let {
            className: t,
            operations: r,
            initialState: f,
            finalState: d,
            mode: s,
            markPositionsAsRisky: u,
            markPositionsAsLiquidatable: c,
          } = e;
          return (0, n.tZ)(l.F, {
            className: t,
            children: r.map((e) =>
              (0, n.tZ)(
                i.Fragment,
                {
                  children: (() => {
                    switch (e.type) {
                      case o.H.InterfaceOperationType.supplyCollateralBorrow:
                      case o.H.InterfaceOperationType.withdrawCollateralRepay:
                        return (0, n.tZ)(B, {
                          operation: e,
                          initialState: f,
                          finalState: d,
                          mode: s,
                          onRiskyPosition: u,
                          onLiquidatablePosition: c,
                        });
                      case o.H.InterfaceOperationType.metaMorphoDeposit:
                      case o.H.InterfaceOperationType.metaMorphoWithdraw:
                        return (0, n.tZ)(K, {
                          operation: e,
                          initialState: f,
                          finalState: d,
                          mode: s,
                        });
                      case o.H.InterfaceOperationType.claimMerkl:
                        return (0, n.tZ)(R.Z, { mode: 'Confirm', rewardMode: 'MERKL' });
                      case o.H.InterfaceOperationType.claimMorpho:
                        return (0, n.tZ)(R.Z, { mode: 'Confirm', rewardMode: 'MORPHO' });
                      case o.H.InterfaceOperationType.wrap:
                        return (0, n.tZ)(G, { mode: 'Confirm' });
                      case o.H.InterfaceOperationType.zap:
                        return (0, n.tZ)(I, {
                          initialState: f,
                          finalState: d,
                          operation: e,
                          mode: s,
                          onRiskyPosition: u,
                          onLiquidatablePosition: c,
                        });
                      case o.H.InterfaceOperationType.migrateSupply:
                        return (0, n.tZ)(ei, {
                          operation: e,
                          initialState: f,
                          finalState: d,
                          mode: s,
                        });
                      case o.H.InterfaceOperationType.migrateBorrow:
                        return (0, n.tZ)(er, {
                          operation: e,
                          initialState: f,
                          finalState: d,
                          mode: s,
                        });
                      case o.H.InterfaceOperationType.toggleAutoDeleverage:
                        return (0, n.tZ)(a.Z, { toEnable: e.toEnable, marketId: e.marketId });
                      default:
                        return 'unhandled';
                    }
                  })(),
                },
                e.id
              )
            ),
          });
        });
    },
    71985: function (e, t, r) {
      r.d(t, {
        P: function () {
          return a;
        },
      });
      var n = r(38819),
        i = r(54655);
      let a = (0, n.Z)(i.Kqy, { target: 'e14kl2h60' })(
        'background-color:',
        (e) => {
          let { theme: t } = e;
          return t.colors.background.secondary;
        },
        ';padding:',
        (e) => {
          let { theme: t, mode: r } = e;
          return 'Review' === r ? ''.concat(t.padding.m, ' ').concat(t.padding.s) : t.padding.s;
        },
        ';border-radius:12px;'
      );
    },
    23106: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(12556),
        o = r(54655),
        l = r(68906),
        f = r(71985);
      let d = (e, t) =>
          o.$0l.commas
            .digits((0, o.wmb)(null == t ? void 0 : t.price))
            .of(e, null == t ? void 0 : t.decimals),
        s = (e) => o.$0l.short.digits(2).unit('$').trailingZero(!1).of(e, 18);
      t.Z = (0, i.memo)((e) => {
        let { mode: t, rewardMode: r } = e,
          {
            display: { rewardsMerkl: u, rewardsMorpho: c },
          } = (0, l.D2)(),
          p = (0, i.useMemo)(() => ('MERKL' === r ? u : 'MORPHO' === r ? c : []), [u, c, r]);
        return (0, n.BX)(f.P, {
          direction: 'column',
          gap: 32,
          mode: t,
          children: [
            (0, n.BX)(o.Kqy, {
              gap: 8,
              align: 'center',
              children: [
                (0, n.tZ)(o.JO$, { icon: 'RewardsPlain20', color: 'icon.primary', size: 24 }),
                (0, n.tZ)(o.xvT.Title.XS, {
                  color: 'text.body',
                  lineHeight: 'normal',
                  children: 'MORPHO' === r ? 'Claim on Morpho' : 'Claim on Merkl',
                }),
              ],
            }),
            (0, n.tZ)(o.Kqy, {
              direction: 'column',
              gap: 12,
              align: 'stretch',
              children: (0, n.tZ)(o.Kqy, {
                direction: 'column',
                gap: 12,
                align: 'stretch',
                children: p.map((e, t) => {
                  var r, l, f, u, c, m;
                  return (null === (r = e.claimable) || void 0 === r ? void 0 : r.amount)
                    ? (0, n.BX)(
                        i.Fragment,
                        {
                          children: [
                            (0, n.BX)(o.xvT.Body.S.Regular, {
                              color: 'text.body',
                              shorten: 1,
                              children: [
                                'Claim ',
                                null === (l = e.rewardToken) || void 0 === l
                                  ? void 0
                                  : l.token.name,
                              ],
                            }),
                            (0, n.BX)(o.Kqy, {
                              justify: 'space-between',
                              children: [
                                (0, n.BX)(o.Kqy, {
                                  gap: 4,
                                  children: [
                                    (0, n.BX)(o.Kqy, {
                                      gap: 2,
                                      children: [
                                        (0, n.tZ)(o.xvT.Title.XS, {
                                          color: 'text.body',
                                          lineHeight: 'normal',
                                          children: d(
                                            e.claimable.amount,
                                            (0, a.wk)(
                                              null === (f = e.claimable) || void 0 === f
                                                ? void 0
                                                : f.token
                                            )
                                          ),
                                        }),
                                        (0, n.tZ)(o.xvT.Title.XS, {
                                          color: 'text.tertiary',
                                          lineHeight: 'normal',
                                          children:
                                            null === (c = e.claimable) || void 0 === c
                                              ? void 0
                                              : null === (u = c.token) || void 0 === u
                                                ? void 0
                                                : u.symbol,
                                        }),
                                      ],
                                    }),
                                    e.claimable.amountUsd
                                      ? (0, n.tZ)(o.Vp9, {
                                          variant: 'bundler',
                                          children: (0, n.tZ)(o.xvT.Body.XXXS.Regular, {
                                            lineHeight: 'normal',
                                            color: 'text.body',
                                            children: s(e.claimable.amountUsd),
                                          }),
                                        })
                                      : null,
                                  ],
                                }),
                                (0, n.tZ)(o.qEK, {
                                  src:
                                    null === (m = e.rewardToken) || void 0 === m
                                      ? void 0
                                      : m.token.logoURI,
                                  size: 'medium',
                                  padding: 0,
                                }),
                              ],
                            }),
                            t !== p.length - 1 && (0, n.tZ)(o.Z0O, {}),
                          ],
                        },
                        'reward' + t
                      )
                    : null;
                }),
              }),
            }),
          ],
        });
      });
    },
    36247: function (e, t, r) {
      r.d(t, {
        Zc: function () {
          return u;
        },
      });
      var n = r(55412),
        i = r(3245),
        a = r(63658),
        o = r(24387),
        l = r(45610);
      function f() {
        let e = (0, n._)([
          '\n  query MarketBundlerOperation($uniqueKey: String!, $chainId: Int) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      lltv\n      loanAsset {\n        ...simpleAssetFields\n      }\n      collateralAsset {\n        ...simpleAssetFieldsWithYield\n      }\n      state {\n        id\n        dailyNetBorrowApy\n        dailyBorrowApy\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerSuppliedToken\n          amountPerBorrowedToken\n        }\n      }\n      oracleAddress\n      warnings {\n        level\n        type\n      }\n      oracleFeed {\n        baseVault\n        baseFeedOneAddress\n        baseFeedOneDescription\n        baseFeedOneVendor\n        baseFeedTwoAddress\n        baseFeedTwoDescription\n        baseFeedTwoVendor\n        quoteVault\n        quoteFeedOneAddress\n        quoteFeedOneDescription\n        quoteFeedOneVendor\n        quoteFeedTwoAddress\n        quoteFeedTwoDescription\n        quoteFeedTwoVendor\n      }\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      let d = {},
        s = (0, i.Ps)(f(), o.G, l.N);
      function u(e) {
        let t = { ...d, ...e };
        return a.aM(s, t);
      }
    },
    82196: function (e, t, r) {
      r.d(t, {
        Pm: function () {
          return u;
        },
      });
      var n = r(55412),
        i = r(3245),
        a = r(63658),
        o = r(24387),
        l = r(45610);
      function f() {
        let e = (0, n._)([
          '\n  query MarketBundlerRefinanceOperation($where: MarketFilters) {\n    markets(where: $where) {\n      items {\n        id\n        uniqueKey\n        lltv\n        loanAsset {\n          ...simpleAssetFields\n        }\n        collateralAsset {\n          ...simpleAssetFieldsWithYield\n        }\n        state {\n          id\n          fee\n          dailyNetBorrowApy\n          dailyBorrowApy\n          rewards {\n            asset {\n              ...simpleAssetFields\n            }\n            amountPerSuppliedToken\n            amountPerBorrowedToken\n          }\n        }\n        oracleAddress\n        warnings {\n          level\n          type\n        }\n        oracleFeed {\n          baseVault\n          baseFeedOneAddress\n          baseFeedOneDescription\n          baseFeedOneVendor\n          baseFeedTwoAddress\n          baseFeedTwoDescription\n          baseFeedTwoVendor\n          quoteVault\n          quoteFeedOneAddress\n          quoteFeedOneDescription\n          quoteFeedOneVendor\n          quoteFeedTwoAddress\n          quoteFeedTwoDescription\n          quoteFeedTwoVendor\n        }\n      }\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      let d = {},
        s = (0, i.Ps)(f(), o.G, l.N);
      function u(e) {
        let t = { ...d, ...e };
        return a.aM(s, t);
      }
    },
    99153: function (e, t, r) {
      r.d(t, {
        eg: function () {
          return c;
        },
      });
      var n = r(55412),
        i = r(3245),
        a = r(63658),
        o = r(93114),
        l = r(24387),
        f = r(45610);
      function d() {
        let e = (0, n._)([
          '\n  query VaultBundlerOperation($address: String!, $chainId: Int!) {\n    vaultByAddress(address: $address, chainId: $chainId) {\n      id\n      name\n      address\n      asset {\n        ...simpleAssetFieldsWithYield\n      }\n      metadata {\n        image\n      }\n      warnings {\n        level\n        type\n      }\n      state {\n        id\n        dailyNetApy\n        totalAssets\n        dailyApy\n        fee\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerSuppliedToken\n          supplyApr\n        }\n        allocation {\n          id\n          supplyAssets\n          supplyAssetsUsd\n          market {\n            id\n            uniqueKey\n            lltv\n            ...collateralExposuresFields\n            loanAsset {\n              id\n              name\n            }\n            state {\n              id\n              rewards {\n                asset {\n                  ...simpleAssetFields\n                }\n                supplyApr\n                amountPerSuppliedToken\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  ',
          '\n  ',
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
        u = (0, i.Ps)(d(), f.N, l.G, o.j);
      function c(e) {
        let t = { ...s, ...e };
        return a.aM(u, t);
      }
    },
    82078: function (e, t, r) {
      r.d(t, {
        h: function () {
          return w;
        },
        Z: function () {
          return w;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(26897),
        o = r(40252),
        l = r(54655),
        f = r(51712),
        d = r(68906),
        s = r(22683),
        u = r(75147),
        c = r(98267),
        p = r(89991),
        m = r(35047);
      let v = (e) => {
          switch (e) {
            case o.addressesRegistry[o.ChainId.EthMainnet].bundler3.bundler3:
              return 'bundler';
            case o.addressesRegistry[o.ChainId.EthMainnet].bundler3.generalAdapter1:
              return 'general adapter 1';
            case o.addressesRegistry[o.ChainId.BaseMainnet].bundler3.bundler3:
              return 'bundler';
            case o.addressesRegistry[o.ChainId.BaseMainnet].bundler3.generalAdapter1:
              return 'general adapter 1';
            case o.addressesRegistry[o.ChainId.EthMainnet].permit2:
              return 'permit2';
            default:
              return (0, m.formatLongString)(e, 10);
          }
        },
        g = (e, t) => {
          let r = (e, t) =>
              e >= o.MathLib.MAX_UINT_160
                ? '∞ '.concat(t.symbol)
                : l.$0l.short.smallValuesWithCommas().digits(2).unit(t.symbol).of(e, t.decimals),
            n = 'Unknown action';
          if ('tx' in e) {
            switch (e.type) {
              case 'erc20Approve': {
                let i = t.getToken(e.args[0]),
                  a = r(e.args[2], i);
                n =
                  e.args[1] === o.addressesRegistry[o.ChainId.EthMainnet].permit2
                    ? 'Enable permit2 contract'
                    : 'Allow '.concat(v(e.args[1]), ' to spend ').concat(a);
                break;
              }
              case 'morphoSetAuthorization':
                n = 'Authorize the bundler to manage your positions';
            }
            return { contentIdle: n, contentSuccess: n, contentError: n };
          }
          switch (e.action.type) {
            case 'approve2': {
              let {
                  details: { token: i, amount: a },
                } = e.action.args[1],
                o = r(a, t.getToken(i));
              n = 'Allow general adapter 1 to spend '.concat(o);
              break;
            }
            case 'permit': {
              let [, i, a] = e.action.args,
                o = r(a, t.getToken(i));
              n = 'Allow bundler to spend '.concat(o, ' (via Permit)');
              break;
            }
            case 'permitDai':
              n = 'Allow bundler to spend your DAI (via Permit)';
              break;
            case 'morphoSetAuthorizationWithSig':
              n = 'Authorize the bundler to manage your positions';
          }
          return { contentIdle: n, contentSuccess: n, contentError: n };
        };
      var b = r(4340),
        h = r(70064);
      let y = (0, r(38819).Z)('span', { target: 'e14ou8tt0' })(
        'height:4px;background-color:',
        (e) => {
          let { theme: t, status: r } = e;
          switch (r) {
            case void 0:
              return t.colors.icon.secondary;
            case c.qb.signing:
              return t.colors.icon.interactive.active;
            case c.qb.pending:
              return t.colors.icon.softWarning;
            case c.qb.complete:
              return t.colors.icon.interactive.valid;
            case c.qb.error:
              return t.colors.icon.interactive.error;
          }
        },
        ';flex-grow:1;'
      );
      var w = (0, i.memo)((e) => {
        var t, r;
        let { txMessage: m = 'Execute your bundle' } = e,
          {
            activeBundle: v,
            reset: w,
            retry: x,
            currentState: A,
            pendingTxHash: T,
            bundleChainId: Z,
            accountRef: k,
          } = (0, u.H)(),
          {
            account: { isWrongChain: q },
          } = (0, p.Z_)(),
          { refetchRewards: B } = (0, d.D2)(),
          [M, S] = (0, i.useState)();
        (0, i.useEffect)(() => {
          T && S(T);
        }, [T]);
        let { toggleDialog: P, setDialogOptions: I } = (0, l.DAv)(),
          { resetOperations: R } = (0, s.N)(),
          C = (0, i.useMemo)(() => {
            if (!A || !v) return;
            if (null == k ? void 0 : k.isSafe) return { current: void 0, total: 0, index: 0 };
            let e = [...v.requirements.txs, ...v.requirements.signatures];
            if ('req' !== A.type) return { current: void 0, total: e.length, index: e.length };
            let t = e.findIndex((e) => e.id === A.id);
            return { current: t >= 0 ? e[t] : void 0, index: t, total: e.length };
          }, [v, A, null == k ? void 0 : k.isSafe]),
          X = (0, i.useMemo)(
            () => (Z && M ? o.ChainUtils.getExplorerTransactionUrl(Z, M) : ''),
            [Z, M]
          ),
          L = (0, i.useMemo)(() => {
            if (A && C && Z)
              switch (A.status) {
                case c.qb.signing:
                  return 'Signature '
                    .concat(C.index + 1, ' /\n  ')
                    .concat(C.total + 1, ' - Proceed in your ')
                    .concat((null == k ? void 0 : k.isSafe) ? 'transaction queue' : 'wallet');
                case c.qb.pending:
                  return (0, n.BX)(n.HY, {
                    children: [
                      'Transaction',
                      ' ',
                      M
                        ? (0, n.BX)(l.dLw, {
                            href: X,
                            underlined: !0,
                            children: [(0, l.GQT)(M), ' '],
                          })
                        : '',
                      'is being processed...',
                    ],
                  });
                case c.qb.error:
                  return ''
                    .concat('req' === A.type ? 'Signature' : 'Transaction', ' ')
                    .concat(C.index + 1, ' / ')
                    .concat(C.total + 1, ' - An error occurred');
                case c.qb.complete:
                  if ('tx' === A.type)
                    return (0, n.BX)(n.HY, {
                      children: [
                        'Transaction',
                        ' ',
                        M
                          ? (0, n.tZ)(l.dLw, { href: X, underlined: !0, children: (0, l.GQT)(M) })
                          : '',
                        ' ',
                        (null == k ? void 0 : k.isContract)
                          ? 'is sent to your smart wallet!'
                          : 'is complete!',
                      ],
                    });
                  return 'Signature successfully processed';
              }
          }, [null == k ? void 0 : k.isContract, A, M, C, Z, X, null == k ? void 0 : k.isSafe]),
          F = (0, i.useMemo)(
            () =>
              (null == A ? void 0 : A.type) === 'tx' &&
              [c.qb.pending, c.qb.complete].includes(A.status),
            [null == A ? void 0 : A.status, null == A ? void 0 : A.type]
          );
        (0, i.useEffect)(() => {
          I({ closable: F });
        }, [I, F]);
        let O = (0, i.useCallback)(() => {
            if (F) {
              (null == A ? void 0 : A.status) === c.qb.complete && w(), P(!1);
              return;
            }
            w(), P(!1);
          }, [null == A ? void 0 : A.status, w, P, F]),
          E = (0, i.useMemo)(
            () =>
              (null == A ? void 0 : A.type) === 'tx' &&
              (null == A ? void 0 : A.status) === c.qb.complete,
            [null == A ? void 0 : A.status, null == A ? void 0 : A.type]
          ),
          D = (0, i.useCallback)(() => {
            w(), R(), B(), P(!1);
          }, [w, R, P, B]);
        return v && A && C
          ? (0, n.BX)(l.Kqy, {
              direction: 'column',
              gap: 'm',
              'data-testid': 'processing-dialog',
              children: [
                (0, n.BX)(l.Kqy, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(l.xvT.Title.S, { children: 'Confirm' }),
                    (0, n.tZ)(l.Kqy, {
                      gap: 12,
                      children: E
                        ? (0, n.tZ)(l.zxk, {
                            variant: 'secondary',
                            iconAlone: 'ClosePlain20',
                            onClick: D,
                          })
                        : (0, n.tZ)(l.VfW, {
                            headerLabel: 'Cancel Action',
                            body: 'Are you sure you want to close this modal? It will interrupt the current flow.',
                            ctaLabel: 'Cancel action',
                            cancelLabel: 'Close',
                            ctaAction: O,
                            children: (0, n.tZ)(l.zxk, {
                              variant: 'secondary',
                              iconAlone: 'ClosePlain20',
                            }),
                          }),
                    }),
                  ],
                }),
                (0, n.BX)(h.Z, {
                  fallback: (0, n.tZ)(f.c, { minHeight: '364px' }),
                  children: [
                    (0, n.tZ)(b.Z, {
                      operations: v.operations,
                      initialState: null === (t = v.steps) || void 0 === t ? void 0 : t[0],
                      finalState: (0, a.Z)(v.steps),
                      mode: 'Confirm',
                    }),
                    (0, n.BX)(l.Kqy, {
                      direction: 'column',
                      gap: 'm',
                      align: 'stretch',
                      children: [
                        !E &&
                          (0, n.BX)(n.HY, {
                            children: [
                              (0, n.tZ)(l.fDo, {
                                variant: {
                                  [c.qb.complete]: 'success',
                                  [c.qb.signing]: 'loading',
                                  [c.qb.pending]: 'loading',
                                  [c.qb.error]: 'error',
                                }[null == A ? void 0 : A.status],
                                ...((C.current &&
                                  (null === (r = v.steps) || void 0 === r ? void 0 : r[0]) &&
                                  g(C.current, v.steps[0])) ||
                                  ('tx' === A.type && {
                                    contentIdle: m,
                                    contentSuccess: m,
                                    contentError: m,
                                  })),
                              }),
                              (0, n.BX)(l.Kqy, {
                                align: 'center',
                                gap: 8,
                                justify: 'stretch',
                                children: [
                                  Array.from({ length: C.total }).map((e, t) =>
                                    t < C.index
                                      ? (0, n.tZ)(y, { status: c.qb.complete }, t)
                                      : t === C.index
                                        ? (0, n.tZ)(y, { status: A.status }, t)
                                        : (0, n.tZ)(y, {}, t)
                                  ),
                                  (0, n.tZ)(y, { status: 'tx' === A.type ? A.status : void 0 }),
                                ],
                              }),
                            ],
                          }),
                        E &&
                          (0, n.tZ)(l._Lo, {
                            onClick: D,
                            height: 48,
                            textVariant: 'small',
                            children: 'Done',
                          }),
                        (0, n.BX)(l.Kqy, {
                          justify: 'space-between',
                          align: 'center',
                          children: [
                            L &&
                              (0, n.tZ)(l.xvT.Body.XXXS.Regular, {
                                'data-matomo-event': 'transaction-status-message',
                                'data-matomo-step': 'confirmation-step-'.concat(
                                  A.status.toLowerCase()
                                ),
                                color: 'text.secondary',
                                children: L,
                              }),
                            M &&
                              (0, n.BX)(l.Kqy, {
                                gap: 4,
                                align: 'center',
                                children: [
                                  (0, n.tZ)(l.mUV, {
                                    toCopy: M,
                                    toastMessage: 'Transaction hash copied to clipboard.',
                                    tooltipMessage: 'Copy transaction hash.',
                                    size: 'small',
                                  }),
                                  (0, n.tZ)(l.dLw, {
                                    href: X,
                                    children: (0, n.tZ)(l.zxk, {
                                      variant: 'ghost',
                                      children: (0, n.BX)(l.Kqy, {
                                        align: 'center',
                                        gap: 2,
                                        children: [
                                          (0, n.tZ)(l.xvT.Body.XXXS.Regular, {
                                            color: 'text.secondary',
                                            children: 'View on explorer',
                                          }),
                                          (0, n.tZ)(l.JO$, {
                                            icon: 'ArrowPlain20',
                                            color: 'text.secondary',
                                            style: { transform: 'rotate(-45deg)' },
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    A.status === c.qb.error &&
                      (0, n.tZ)(l.ua7, {
                        content: 'Please switch to the correct network.',
                        disabled: !q,
                        children: (0, n.tZ)(l._Lo, {
                          onClick: x,
                          height: 48,
                          disabled: q,
                          children: (0, n.tZ)(l.xvT.Body.S.Regular, {
                            color: q ? 'text.tertiary' : 'text.body',
                            children: 'Try again',
                          }),
                        }),
                      }),
                  ],
                }),
              ],
            })
          : (0, n.tZ)(l.xvT.Body.S.Regular, { children: 'No transaction to execute' });
      });
    },
    7477: function (e, t, r) {
      r.d(t, {
        y: function () {
          return u;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(50568),
        l = r(28219),
        f = r(38819);
      let d = (0, f.Z)('button', { target: 'ejg8vzf0' })(
          'background:',
          (e) => {
            let { theme: t } = e;
            return ''.concat(t.colors.constant.gradient.blueStroke);
          },
          ';border-radius:50px;padding:6px;border:none;cursor:pointer;'
        ),
        s = (0, f.Z)('button', { target: 'ejg8vzf1' })(
          'background:',
          (e) => {
            let { theme: t } = e;
            return ''.concat(t.colors.background.interactive.hover);
          },
          ';border-radius:50px;padding:3px 10px 3px 5px;border:none;cursor:pointer;display:flex;align-items:center;gap:2px;'
        );
      var u = (0, i.memo)((e) => {
        let { marketId: t, onOpen: r } = e,
          { toggleDialog: i } = (0, a.DAv)(),
          { status: f, refetchAll: u } = (0, l.P)(t),
          c = () => {
            null == r || r(), i((0, n.tZ)(o.F, { marketId: t, toEnable: 'unauthorized' === f }));
          };
        switch (f) {
          case 'loading':
            return (0, n.tZ)(a.OdW, { width: '32px', height: '32px', borderRadius: '50px' });
          case 'error':
            return (0, n.tZ)(a.ua7, {
              content:
                'An error occurred while gathering data for Auto-Deleverage. Click to retry.',
              children: (0, n.BX)(a.Kqy, {
                align: 'center',
                gap: 'xxs',
                onClick: u,
                children: [
                  (0, n.tZ)(a.JO$, { icon: 'AlertPlain20', color: 'icon.interactive.error' }),
                  (0, n.tZ)(a.xvT.Body.XXXS.Regular, {
                    color: 'text.interactive.error',
                    lineHeight: 'normal',
                    children: 'An error occurred',
                  }),
                ],
              }),
            });
          case 'hidden':
            return null;
          case 'unauthorized':
            return (0, n.tZ)(a.ua7, {
              content: 'Enable Auto-Deleverage',
              children: (0, n.tZ)(d, {
                onClick: c,
                'data-testid': 'enable-auto-deleverage',
                children: (0, n.tZ)(a.JO$, { icon: 'ShieldCheckPlain20', color: 'constant.white' }),
              }),
            });
          case 'authorized':
            return (0, n.tZ)(a.ua7, {
              content: 'Manage Auto-Deleverage on this market',
              children: (0, n.BX)(s, {
                onClick: c,
                'data-testid': 'manage-auto-deleverage',
                children: [
                  (0, n.tZ)(a.JO$, { icon: 'ShieldCheckPlain20', color: 'icon.primary' }),
                  (0, n.tZ)(a.xvT.Body.XXXS.Regular, {
                    lineHeight: 'normal',
                    color: 'text.body',
                    children: 'Manage',
                  }),
                ],
              }),
            });
        }
      });
    },
    50568: function (e, t, r) {
      r.d(t, {
        F: function () {
          return q;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(12556),
        o = r(54655),
        l = r(35047),
        f = r(18313),
        d = r(89991),
        s = r(4205),
        u = r(69886),
        c = r(28219),
        p = r(40252),
        m = r(83793),
        v = r(71921),
        g = r(41976),
        b = (0, i.memo)((e) => {
          let { marketId: t, ltv: r, isPositionRisky: a } = e,
            { targetChainId: l } = (0, d.Z_)(),
            {
              data: {
                marketByUniqueKey: {
                  collateralAsset: f,
                  loanAsset: s,
                  lltv: u,
                  oracleAddress: c,
                  oracleFeed: b,
                  warnings: h,
                } = {},
              } = {},
              error: y,
              loading: w,
            } = (0, g.vz)({ variables: { uniqueKey: t, chainId: l } }),
            x = (0, i.useMemo)(
              () => o.$0l.percent.digits(2).default('-').trailingZero(!1).unit('%').of(u, 18),
              [u]
            ),
            A = (0, i.useMemo)(() => {
              var e;
              return o.$0l.percent
                .digits(2)
                .default('-')
                .trailingZero(!1)
                .unit('%')
                .of(
                  null === (e = p.defaultPreLiquidationParamsRegistry.get(null != u ? u : 0n)) ||
                    void 0 === e
                    ? void 0
                    : e.preLltv,
                  18
                );
            }, [u]),
            T = (0, i.useMemo)(
              () =>
                o.$0l.percent.digits(2).default('0%').trailingZero(!1).unit('%').of(r.value, 18),
              [r]
            );
          if (w) return (0, n.tZ)(o.OdW, { height: '220px', borderRadius: '12px' });
          if (y || !s || !f)
            return (0, n.tZ)(o.SKT, {
              text: 'An error occurred while loading the market data.',
              background: 'background.secondary',
              borderRadius: '12px',
              height: '220px',
            });
          let Z = c ? { address: c, ...b } : null;
          return (0, n.tZ)(o.Zbd, {
            padding: 's',
            background: 'background.secondary',
            borderRadius: '12px',
            children: (0, n.BX)(o.Kqy, {
              direction: 'column',
              gap: 'm',
              width: '100%',
              children: [
                (0, n.tZ)(v.Z, {
                  collateralAsset: f,
                  loanAsset: s,
                  formattedLltv: x,
                  oracle: Z,
                  warnings: null != h ? h : [],
                  marketId: t,
                }),
                (0, n.BX)(o.Kqy, {
                  direction: 'column',
                  gap: 's',
                  width: '100%',
                  children: [
                    !!r.value &&
                      (0, n.BX)(n.HY, {
                        children: [
                          (0, n.BX)(o.Kqy, {
                            justify: 'space-between',
                            align: 'center',
                            children: [
                              (0, n.tZ)(o.xvT.Body.XS.Regular, {
                                color: 'text.secondary',
                                children: 'Your LTV',
                              }),
                              (0, n.tZ)(o.xvT.Title.XS, {
                                color: a ? 'text.interactive.error' : (0, o.ybe)(r.isSimulated),
                                children: T,
                              }),
                            ],
                          }),
                          (0, n.tZ)(o.Z0O, {}),
                        ],
                      }),
                    (0, n.BX)(o.Kqy, {
                      justify: 'space-between',
                      align: 'center',
                      children: [
                        (0, n.BX)(o.Kqy, {
                          align: 'center',
                          gap: 'xxs',
                          children: [
                            (0, n.tZ)(o.xvT.Body.XS.Regular, {
                              color: 'text.secondary',
                              lineHeight: 'normal',
                              children: 'Auto Deleverage Liq. LTV',
                            }),
                            (0, n.tZ)(o.ua7, {
                              content: m.l,
                              withTouch: !0,
                              children: (0, n.tZ)(o.JO$, {
                                icon: 'QuestionPlain20',
                                color: 'icon.secondary',
                                hoverColor: 'icon.primary',
                              }),
                            }),
                          ],
                        }),
                        (0, n.BX)(o.Kqy, {
                          gap: 2,
                          align: 'center',
                          children: [
                            (0, n.tZ)(o.JO$, { icon: 'ShieldCheckGradient20' }),
                            (0, n.tZ)(o.xvT.Title.XS, { lineHeight: 'normal', children: A }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.tZ)(o.Z0O, {}),
                    (0, n.BX)(o.Kqy, {
                      justify: 'space-between',
                      align: 'center',
                      children: [
                        (0, n.tZ)(o.xvT.Body.XS.Regular, {
                          color: 'text.secondary',
                          children: 'Liquidation LTV',
                        }),
                        (0, n.tZ)(o.xvT.Title.XS, { children: x }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        h = r(392),
        y = r(4565),
        w = r(25834),
        x = r(82078),
        A = r(82803),
        T = r(86876),
        Z = r(65978),
        k = (0, i.memo)((e) => {
          let { toEnable: t, marketId: r } = e,
            { toggleDialog: a } = (0, o.DAv)(),
            { account: l, targetChainId: f } = (0, d.Z_)(),
            { activeBundle: s, setActiveBundle: u } = (0, T.HT)(),
            { preLiquidationContractAddress: m, refetchAuthorizationQuery: v } = (0, c.P)(r),
            g = (0, i.useMemo)(() => {
              if (!m) return null;
              let e = new w.ActionBundleRequirements(),
                r = new w.ActionBundle(f, [], e);
              return (
                (r.tx = () => {
                  var e;
                  return {
                    to: null === (e = p.addresses[f]) || void 0 === e ? void 0 : e.morpho,
                    data: (0, h.R)({
                      abi: y.blueAbi,
                      functionName: 'setAuthorization',
                      args: [m, t],
                    }),
                    value: 0n,
                  };
                }),
                r
              );
            }, [t, f, m]),
            b = (0, i.useMemo)(
              () =>
                s
                  ? 'Please complete the pending transaction to execute a new one.'
                  : l.isWrongChain
                    ? 'Please switch to the correct network.'
                    : null,
              [l.isWrongChain, s]
            ),
            k = (0, i.useCallback)(() => {
              if (!g) return console.error('No bundle found');
              u(
                g,
                [
                  {
                    id: 'toggleAutoDeleverage',
                    type: A.H.InterfaceOperationType.toggleAutoDeleverage,
                    marketId: r,
                    toEnable: t,
                    options: { isMax: [], disabledPeripheralTokens: new Set() },
                  },
                ],
                v,
                !0
              ),
                a(
                  (0, n.tZ)(x.h, {
                    txMessage: ''.concat(t ? 'Authorize' : 'Remove', ' Auto-Deleverage contract'),
                  }),
                  { closable: !1 }
                );
            }, [u, g, a, r, t, v]);
          return (0, n.BX)(o.Kqy, {
            direction: 'column',
            gap: 20,
            'data-testid': 'confirm-dialog',
            children: [
              (0, n.BX)(o.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, n.tZ)(o.xvT.Title.S, { children: 'Review' }),
                  (0, n.tZ)(o.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => a(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, n.tZ)(Z.Z, { toEnable: t, marketId: r }),
              (0, n.tZ)(o.ua7, {
                content: b,
                disabled: !b,
                children: (0, n.tZ)(o.Kqy, {
                  width: '100%',
                  direction: 'column',
                  children: (0, n.tZ)(o._Lo, {
                    onClick: k,
                    height: 47,
                    disabled: !!b,
                    textVariant: 'small',
                    children: 'Confirm',
                  }),
                }),
              }),
            ],
          });
        });
      let q = (e) => {
        let { marketId: t, toEnable: r } = e,
          { toggleDialog: p } = (0, o.DAv)(),
          { preLltv: m } = (0, c.P)(t),
          { account: v } = (0, d.Z_)(),
          [g, h] = (0, i.useState)(!1),
          { data: y } = (0, s.f)(0),
          { data: w } = (0, s.f)(),
          x = (0, i.useMemo)(
            () =>
              (null == v ? void 0 : v.address)
                ? null == y
                  ? void 0
                  : y.tryGetAccrualPosition(v.address, t)
                : null,
            [y, null == v ? void 0 : v.address, t]
          ),
          A = (0, i.useMemo)(
            () =>
              (null == v ? void 0 : v.address)
                ? null == w
                  ? void 0
                  : w.tryGetAccrualPosition(v.address, t)
                : null,
            [w, null == v ? void 0 : v.address, t]
          ),
          T = (0, o.AwN)({
            initialOnchainValue: null == x ? void 0 : x.ltv,
            latestSimulatedValue: null == A ? void 0 : A.ltv,
          }),
          Z = (0, l.isDefined)(T.value) && (0, l.isDefined)(m) && T.value >= m,
          q = (0, i.useMemo)(
            () => (0, l.isDefined)(T.value) && (0, l.isDefined)(m) && (0, a.M4)(T.value, m),
            [T.value, m]
          ),
          B = q && !g,
          M = (0, i.useMemo)(
            () => o.$0l.percent.digits(2).default('-').trailingZero(!1).unit('%').of(m, 18),
            [m]
          ),
          S = () => {
            p((0, n.tZ)(k, { toEnable: r, marketId: t }));
          };
        return (0, n.BX)(o.Kqy, {
          direction: 'column',
          gap: 'm',
          children: [
            (0, n.BX)(o.Kqy, {
              justify: 'space-between',
              align: 'center',
              gap: 's',
              children: [
                (0, n.BX)(o.xvT.Title.S, { children: [r && 'Enable', ' Auto-Deleverage'] }),
                (0, n.tZ)(o.zxk, {
                  iconAlone: 'ClosePlain20',
                  onClick: () => p(!1),
                  variant: 'secondary',
                }),
              ],
            }),
            (0, n.tZ)(o.xvT.Body.XS.Regular, {
              color: 'text.secondary',
              children:
                'Auto-Deleverage is a feature designed to reduce the risk of full liquidation. When enabled, if your LTV exceeds a pre-set threshold, a portion of your position may be closed to bring it back to safer levels. This mechanism relies on on-chain liquidators and may not keep up with rapid market movements.',
            }),
            (0, n.tZ)(b, { marketId: t, ltv: T, isPositionRisky: q }),
            r &&
              Z &&
              (0, n.tZ)(o.Kqy, {
                align: 'center',
                gap: 'xs',
                background: 'background.alert',
                padding: '8px',
                borderRadius: '4px',
                justify: 'center',
                children: (0, n.BX)(o.xvT.Body.XXS.Regular, {
                  color: 'text.interactive.error',
                  children: ['You must lower your LTV below ', M, ' to activate Auto-Deleverage.'],
                }),
              }),
            !Z &&
              q &&
              (0, n.tZ)(u.Z, {
                isRiskyPositionsAcknowledged: g,
                setIsRiskyPositionsAcknowledged: h,
              }),
            (0, n.BX)(o.xvT.Body.XXXS.Regular, {
              color: 'text.secondary',
              children: [
                'By using this feature, you agree to the',
                ' ',
                (0, n.tZ)(o.dLw, { href: a.CL, underlined: !0, children: 'Terms of Use' }),
                ' ',
                'and acknowledge that you are responsible for monitoring your own position.',
              ],
            }),
            r
              ? (0, n.tZ)(o._Lo, {
                  height: 48,
                  onClick: S,
                  disabled: Z || B,
                  textVariant: 'small',
                  children: 'Enable Auto-Deleverage',
                })
              : (0, n.tZ)(o.zxk, {
                  variant: 'danger',
                  size: 'big',
                  label: 'Remove Auto-Deleverage',
                  onClick: S,
                  disabled: !Z && B,
                }),
            (0, n.tZ)(o.Kqy, {
              justify: 'center',
              padding: '6px 7px',
              children: (0, n.tZ)(o.dLw, {
                href: f.lT,
                children: (0, n.tZ)(o.zxk, {
                  variant: 'ghost',
                  size: 'default',
                  label: 'How does it work?',
                  iconRight: 'ArrowDiagonalUpPlain20',
                }),
              }),
            }),
          ],
        });
      };
    },
    71921: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(35288);
      t.Z = (0, i.memo)((e) => {
        let {
          marketId: t,
          collateralAsset: r,
          loanAsset: i,
          formattedLltv: l,
          oracle: f,
          warnings: d,
        } = e;
        return (0, n.BX)(a.Kqy, {
          align: 'center',
          gap: 8,
          children: [
            (0, n.tZ)(a._nw, {
              leftAvatarProps: { src: r.logoURI },
              rightAvatarProps: { src: i.logoURI },
              size: 'medium',
            }),
            (0, n.BX)(a.xvT.Title.XS, {
              lineHeight: 'normal',
              children: [r.symbol, ' / ', i.symbol],
            }),
            (0, n.tZ)(a.Vp9, {
              variant: 'main',
              children: (0, n.tZ)(a.xvT.Body.XXXS.Regular, {
                lineHeight: 'normal',
                color: 'text.body',
                children: l,
              }),
            }),
            f &&
              (0, n.tZ)(o.Z, {
                oracle: f,
                warnings: null != d ? d : [],
                typographyProps: { color: 'text.body' },
              }),
            (0, n.tZ)(a.mUV, {
              toCopy: t,
              toastMessage: 'Market ID copied to clipboard.',
              tooltipMessage: 'Copy market ID.',
              size: 'small',
            }),
          ],
        });
      });
    },
    65978: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(40252),
        o = r(54655),
        l = r(89991),
        f = r(83793),
        d = r(71921),
        s = r(41976);
      t.Z = (0, i.memo)((e) => {
        let { toEnable: t, marketId: r } = e,
          { targetChainId: u } = (0, l.Z_)(),
          {
            data: {
              marketByUniqueKey: {
                collateralAsset: c,
                loanAsset: p,
                lltv: m,
                oracleAddress: v,
                oracleFeed: g,
                warnings: b,
              } = {},
            } = {},
            error: h,
            loading: y,
          } = (0, s.vz)({ variables: { uniqueKey: r, chainId: u } }),
          w = (0, i.useMemo)(
            () => o.$0l.percent.digits(2).default('-').trailingZero(!1).unit('%').of(m, 18),
            [m]
          ),
          x = (0, i.useMemo)(() => {
            var e;
            return o.$0l.percent
              .digits(2)
              .default('-')
              .trailingZero(!1)
              .unit('%')
              .of(
                null === (e = a.defaultPreLiquidationParamsRegistry.get(null != m ? m : 0n)) ||
                  void 0 === e
                  ? void 0
                  : e.preLltv,
                18
              );
          }, [m]);
        if (y) return (0, n.tZ)(o.OdW, { height: '170px', borderRadius: '12px' });
        if (h || !p || !c)
          return (0, n.tZ)(o.SKT, {
            text: 'An error occurred while loading the market data.',
            background: 'background.secondary',
            borderRadius: '12px',
            height: '170px',
          });
        let A = v ? { address: v, ...g } : null;
        return (0, n.tZ)(o.Zbd, {
          padding: 's',
          background: 'background.secondary',
          borderRadius: '12px',
          children: (0, n.BX)(o.Kqy, {
            direction: 'column',
            gap: 'm',
            width: '100%',
            children: [
              (0, n.tZ)(d.Z, {
                collateralAsset: c,
                loanAsset: p,
                formattedLltv: w,
                oracle: A,
                warnings: null != b ? b : [],
                marketId: r,
              }),
              (0, n.BX)(o.Kqy, {
                direction: 'column',
                gap: 's',
                width: '100%',
                children: [
                  (0, n.tZ)(o.Z0O, {}),
                  (0, n.BX)(o.Kqy, {
                    align: 'center',
                    gap: 'xxs',
                    children: [
                      (0, n.BX)(o.xvT.Body.XS.Regular, {
                        color: 'text.secondary',
                        lineHeight: 'normal',
                        children: [t ? 'Enable' : 'Remove', ' Auto Deleverage Liq. LTV'],
                      }),
                      (0, n.tZ)(o.ua7, {
                        content: f.l,
                        withTouch: !0,
                        children: (0, n.tZ)(o.JO$, {
                          icon: 'QuestionPlain20',
                          color: 'icon.secondary',
                          hoverColor: 'icon.primary',
                        }),
                      }),
                    ],
                  }),
                  (0, n.BX)(o.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, n.tZ)(o.JO$, { icon: 'ShieldCheckGradient20' }),
                      (0, n.tZ)(o.xvT.Title.XS, { lineHeight: 'normal', children: x }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      });
    },
    41976: function (e, t, r) {
      r.d(t, {
        vz: function () {
          return d;
        },
      });
      var n = r(55412),
        i = r(3245),
        a = r(63658);
      function o() {
        let e = (0, n._)([
          '\n  query GetAutoDeleverageDialogData($uniqueKey: String!, $chainId: Int) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      uniqueKey\n      lltv\n      oracleAddress\n      collateralAsset {\n        id\n        symbol\n        logoURI\n      }\n      loanAsset {\n        id\n        symbol\n        logoURI\n      }\n      warnings {\n        level\n        type\n      }\n      oracleFeed {\n        baseVault\n        baseFeedOneAddress\n        baseFeedOneDescription\n        baseFeedOneVendor\n        baseFeedTwoAddress\n        baseFeedTwoDescription\n        baseFeedTwoVendor\n        quoteVault\n        quoteFeedOneAddress\n        quoteFeedOneDescription\n        quoteFeedOneVendor\n        quoteFeedTwoAddress\n        quoteFeedTwoDescription\n        quoteFeedTwoVendor\n      }\n    }\n  }\n',
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      let l = {},
        f = (0, i.Ps)(o());
      function d(e) {
        let t = { ...l, ...e };
        return a.aM(f, t);
      }
    },
    725: function (e, t, r) {
      r.d(t, {
        v1: function () {
          return f;
        },
        gX: function () {
          return d;
        },
        sC: function () {
          return s;
        },
        B9: function () {
          return u.B;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(28219),
        l = r(64070),
        f = (0, i.memo)((e) => {
          let { lltv: t, marketId: r } = e,
            f = (0, l.s)(),
            { status: d, preLltv: s } = (0, o.P)(r),
            u = (0, i.useMemo)(
              () => a.$0l.percent.unit('%').trailingZero(!1).digits(2).of(t, 18),
              [t]
            ),
            c = (0, i.useMemo)(
              () => a.$0l.percent.unit('%').trailingZero(!1).digits(2).of(s, 18),
              [s]
            );
          return f
            ? 'loading' === d
              ? (0, n.tZ)(a.OdW, { width: '70px', height: '20px', borderRadius: '6px' })
              : 'authorized' === d
                ? (0, n.BX)(a.Kqy, {
                    gap: '2px',
                    align: 'center',
                    children: [
                      (0, n.tZ)(a.JO$, { icon: 'ShieldCheckGradient20' }),
                      (0, n.tZ)(a.xvT.Inherit, { lineHeight: 'normal', children: c }),
                    ],
                  })
                : u
            : u;
        }),
        d = (0, i.memo)((e) => {
          let { marketId: t, label: r = 'LTV / Auto-Delev. LTV' } = e,
            n = (0, l.s)(),
            { status: i } = (0, o.P)(t);
          return n && 'authorized' === i ? r : 'LTV / Liq. LTV';
        }),
        s = (0, i.memo)((e) => {
          let { marketId: t } = e,
            r = (0, l.s)(),
            { status: i } = (0, o.P)(t);
          return r && 'authorized' === i
            ? (0, n.tZ)(a.ua7, {
                content: 'This value takes into account the Auto-Deleverage LTV.',
                children: (0, n.tZ)(a.JO$, { icon: 'ShieldCheckGradient20' }),
              })
            : null;
        }),
        u = r(52882);
    },
    52882: function (e, t, r) {
      r.d(t, {
        B: function () {
          return a;
        },
      });
      var n = r(28219),
        i = r(64070);
      let a = (e) => {
        let { lltv: t, marketId: r } = e,
          a = (0, i.s)(),
          { status: o, preLltv: l } = (0, n.P)(r);
        return a && 'authorized' === o ? l : t;
      };
    },
    28219: function (e, t, r) {
      r.d(t, {
        P: function () {
          return v;
        },
      });
      var n = r(58258),
        i = r(50964),
        a = r(25513),
        o = r(40252),
        l = r(4565),
        f = r(12556),
        d = r(89991),
        s = r(9691),
        u = r(47824),
        c = r(77518),
        p = r(16880);
      let m = [
          {
            inputs: [{ internalType: 'address', name: 'morpho', type: 'address' }],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          { inputs: [], name: 'ZeroAddress', type: 'error' },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, internalType: 'address', name: 'preLiquidation', type: 'address' },
              { indexed: !1, internalType: 'Id', name: 'id', type: 'bytes32' },
              {
                components: [
                  { internalType: 'uint256', name: 'preLltv', type: 'uint256' },
                  { internalType: 'uint256', name: 'preLCF1', type: 'uint256' },
                  { internalType: 'uint256', name: 'preLCF2', type: 'uint256' },
                  { internalType: 'uint256', name: 'preLIF1', type: 'uint256' },
                  { internalType: 'uint256', name: 'preLIF2', type: 'uint256' },
                  { internalType: 'address', name: 'preLiquidationOracle', type: 'address' },
                ],
                indexed: !1,
                internalType: 'struct PreLiquidationParams',
                name: 'preLiquidationParams',
                type: 'tuple',
              },
            ],
            name: 'CreatePreLiquidation',
            type: 'event',
          },
          {
            inputs: [],
            name: 'MORPHO',
            outputs: [{ internalType: 'contract IMorpho', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [
              { internalType: 'Id', name: 'id', type: 'bytes32' },
              {
                components: [
                  { internalType: 'uint256', name: 'preLltv', type: 'uint256' },
                  { internalType: 'uint256', name: 'preLCF1', type: 'uint256' },
                  { internalType: 'uint256', name: 'preLCF2', type: 'uint256' },
                  { internalType: 'uint256', name: 'preLIF1', type: 'uint256' },
                  { internalType: 'uint256', name: 'preLIF2', type: 'uint256' },
                  { internalType: 'address', name: 'preLiquidationOracle', type: 'address' },
                ],
                internalType: 'struct PreLiquidationParams',
                name: 'preLiquidationParams',
                type: 'tuple',
              },
            ],
            name: 'createPreLiquidation',
            outputs: [{ internalType: 'contract IPreLiquidation', name: '', type: 'address' }],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'isPreLiquidation',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
          },
        ],
        v = (e) => {
          let {
              account: { address: t },
              targetChainId: r,
            } = (0, d.Z_)(),
            v = (0, a.NL)(),
            g = (0, n.useMemo)(() => {
              if (f.FW.isPreLiquidationSupported(r))
                return o.addressesRegistry[r].preLiquidationFactory;
            }, [r]),
            {
              data: [, , b, , h] = [],
              error: y,
              isLoading: w,
              refetch: x,
            } = (0, i.useReadContract)({
              query: { enabled: !!e, staleTime: 1 / 0 },
              chainId: r,
              abi: l.blueAbi,
              address: o.addressesRegistry[r].morpho,
              functionName: 'idToMarketParams',
              args: [e],
            }),
            A = o.defaultPreLiquidationParamsRegistry.get(null != h ? h : 0n),
            T = (0, n.useMemo)(
              () =>
                A && b && e && g
                  ? (function (e) {
                      let {
                          morpho: t,
                          preLiquidationFactory: r,
                          marketId: n,
                          preLiquidationParams: i,
                        } = e,
                        a = (0, s.E)(
                          [
                            { name: 'morpho', type: 'address' },
                            { name: 'id', type: 'bytes32' },
                            {
                              name: 'preLiquidationParams',
                              type: 'tuple',
                              components: [
                                { name: 'preLltv', type: 'uint256' },
                                { name: 'preLCF1', type: 'uint256' },
                                { name: 'preLCF2', type: 'uint256' },
                                { name: 'preLIF1', type: 'uint256' },
                                { name: 'preLIF2', type: 'uint256' },
                                { name: 'preLiquidationOracle', type: 'address' },
                              ],
                            },
                          ],
                          [t, n, i]
                        ),
                        o = (0, u.w)(
                          (0, c._)(
                            ['bytes', 'bytes'],
                            [
                              '0x61022080604052346104675780611dd5803803809161001e8285610545565b83398101039061010082126104675761003681610568565b60c0602083015193603f19011261046757604051916100548361052a565b60408101518352606081015193602084019485526080820151926040850193845260a0830151906060860191825261009a60e060c0860151956080890196875201610568565b60a08701908152604051632e3071cd60e11b8152600481018590526001600160a01b0390921694909160c081602481895afa908115610473575f9161048d575b50608001516001600160801b03161561047e57604051632c3c915760e01b8152600481018590529260a084602481895afa938415610473575f946103c2575b508751966080850197885111156103b35789518151106103a457670de0b6b3a76400008a5111610395578151670de0b6b3a76400001161038657815183511061037757825188518015610363576ec097ce7bc90715b34b9f1000000000041061035457608087905260a09590955283516001600160a01b0390811660c052602085810151821660e052604080870151831661010052606087015183166101205298516101405298516101605298516101805293516101a05292516101c05291516101e052905185166102005251915163095ea7b360e01b815260048101919091525f19602482015291925f9260449290918491165af13d15601f3d1160015f51141617161561031e57604051611844908161059182396080518181816101ce0152818161028d0152611113015260a0518181816095015281816103b3015281816104180152610a94015260c051818181611361015261167f015260e051816116b8015261010051816116f401526101205181611730015261014051818181610590015281816106a101526117570152610160518181816105ca01528181610655015281816106800152610f740152610180518181816108310152610fbe01526101a0518181816108570152610fe501526101c0518181816106f0015261100d01526101e05181818161071701526110370152610200518181816104b4015261105d0152f35b60405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b6044820152606490fd5b6331aff75360e01b5f5260045ffd5b634e487b7160e01b5f52601260045260245ffd5b63141da4bd60e21b5f5260045ffd5b630136247b60e51b5f5260045ffd5b630287fe3b60e31b5f5260045ffd5b631bc4f82360e01b5f5260045ffd5b63f0586c2360e01b5f5260045ffd5b90935060a0813d60a01161046b575b816103de60a09383610545565b81010312610467576040519060a08201906001600160401b038211838310176104535760809160405261041081610568565b835261041e60208201610568565b602084015261042f60408201610568565b604084015261044060608201610568565b606084015201516080820152925f610119565b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b3d91506103d1565b6040513d5f823e3d90fd5b630ecde9b360e31b5f5260045ffd5b905060c0813d60c011610522575b816104a860c09383610545565b810103126104675761051760a0604051926104c28461052a565b6104cb8161057c565b84526104d96020820161057c565b60208501526104ea6040820161057c565b60408501526104fb6060820161057c565b606085015261050c6080820161057c565b60808501520161057c565b60a08201525f6100da565b3d915061049b565b60c081019081106001600160401b0382111761045357604052565b601f909101601f19168101906001600160401b0382119082101761045357604052565b51906001600160a01b038216820361046757565b51906001600160801b03821682036104675756fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816305b4591c146110a6575080631d553cee14610f165780633078f50a146101f25780633acb5624146101835780637b9e68f2146100bb5763b3cea21714610060575f80fd5b346100b857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b85760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b80fd5b50346100b857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b85760a06100f4611636565b61018160405180926080809173ffffffffffffffffffffffffffffffffffffffff815116845273ffffffffffffffffffffffffffffffffffffffff602082015116602085015273ffffffffffffffffffffffffffffffffffffffff604082015116604085015273ffffffffffffffffffffffffffffffffffffffff60608201511660608501520151910152565bf35b50346100b857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b857602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346100b85760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b85760043573ffffffffffffffffffffffffffffffffffffffff81168103610f125760243560643567ffffffffffffffff8111610f0e576102659036906004016114f4565b60443594918391908215871514610ee65773ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926102b6611636565b843b15610eb657610371604051917f151c1ade00000000000000000000000000000000000000000000000000000000835260048301906080809173ffffffffffffffffffffffffffffffffffffffff815116845273ffffffffffffffffffffffffffffffffffffffff602082015116602085015273ffffffffffffffffffffffffffffffffffffffff604082015116604085015273ffffffffffffffffffffffffffffffffffffffff60608201511660608501520151910152565b858160a48183895af18015610ec257908691610ecd575b5050604051907f5c60e39a0000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000600483015260c082602481885afa918215610ec2578692610e1f575b50604051917f93c520620000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000600484015273ffffffffffffffffffffffffffffffffffffffff89166024840152606083604481895afa928315610e14578793610d6c575b50604051917fa035b1fe00000000000000000000000000000000000000000000000000000000835260208360048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa928315610d61578893610d29575b5060206ec097ce7bc90715b34b9f1000000000610517856fffffffffffffffffffffffffffffffff60408901511661177e565b049401926fffffffffffffffffffffffffffffffff8451166fffffffffffffffffffffffffffffffff6040850151166fffffffffffffffffffffffffffffffff6060860151169160018201809211610c7f57620f42408301809311610c7f579061058192916117c8565b94670de0b6b3a76400006105b57f00000000000000000000000000000000000000000000000000000000000000008361177e565b048611610d0157670de0b6b3a76400006105ef7f00000000000000000000000000000000000000000000000000000000000000008361177e565b04861115610cd957670de0b6b3a76400009586810290808204881490151715610cac577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820190828211610c7f579161064e6106539261067a94611629565b611791565b7f00000000000000000000000000000000000000000000000000000000000000009061161c565b9b6106c57f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061161c565b9c86810290808204881490151715610b78578a876107429c9d9e9f6106ed9061074894611791565b9c7f0000000000000000000000000000000000000000000000000000000000000000928e61073b857f000000000000000000000000000000000000000000000000000000000000000061161c565b915061177e565b04611629565b9215610ba55750610759908b61177e565b6ec097ce7bc90715b34b9f0fffffffff8101809111610b4b576ec097ce7bc90715b34b9f1000000000900484810290808204861490151715610b4b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820190828211610b78576107ce929161064e91611629565b6fffffffffffffffffffffffffffffffff6060816040850151169301511690620f42408201809211610b4b5760018301809311610b4b5761082861088394936fffffffffffffffffffffffffffffffff9361087b936117c8565b985b856107428c7f00000000000000000000000000000000000000000000000000000000000000009361073b857f000000000000000000000000000000000000000000000000000000000000000061161c565b91511661177e565b04808511610b1b5750610a2f9261093160c0887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f876040988e9873ffffffffffffffffffffffffffffffffffffffff8b519a8b976020890152168b8701523360608701526080808701528160a0870152868601378b8582860101520116810103017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810184528361157b565b6109f38661093d611636565b8551968795869485937f20b76e8100000000000000000000000000000000000000000000000000000000855260048501906080809173ffffffffffffffffffffffffffffffffffffffff815116845273ffffffffffffffffffffffffffffffffffffffff602082015116602085015273ffffffffffffffffffffffffffffffffffffffff604082015116604085015273ffffffffffffffffffffffffffffffffffffffff60608201511660608501520151910152565b8360a48401528960c484015273ffffffffffffffffffffffffffffffffffffffff8d1660e48401526101206101048401526101248301906115bc565b03925af1928315610b0f578093610ac1575b505073ffffffffffffffffffffffffffffffffffffffff60409485519284845260208401528486840152169033907fd5b01f148b35d6069b626af105bf8881bc2e30ee1ce3de4630903abab0ba858060607f000000000000000000000000000000000000000000000000000000000000000092a482519182526020820152f35b909492506040853d604011610b07575b81610ade6040938361157b565b810103126100b8575073ffffffffffffffffffffffffffffffffffffffff604094519294610a41565b3d9150610ad1565b604051903d90823e3d90fd5b85604491867f44bb1e75000000000000000000000000000000000000000000000000000000008352600452602452fd5b60248a7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b60248b7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b989a50916fffffffffffffffffffffffffffffffff606081604084015116920151169060018101809111610b7857620f42408201809211610b785791610bf5610bfa9261064e889560443561177e565b61177e565b046ec097ce7bc90715b34b9f10000000008102908082046ec097ce7bc90715b34b9f10000000001490151715610c525761087b610c4c61088394936fffffffffffffffffffffffffffffffff93611791565b9a61082a565b6024897f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b60248c7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b60048a7f0bb9a651000000000000000000000000000000000000000000000000000000008152fd5b60048a7ff78266a2000000000000000000000000000000000000000000000000000000008152fd5b9092506020813d602011610d59575b81610d456020938361157b565b81010312610d555751915f6104e4565b8780fd5b3d9150610d38565b6040513d8a823e3d90fd5b9092506060813d606011610e0c575b81610d886060938361157b565b81010312610e0857604051906060820182811067ffffffffffffffff821117610ddb57610dcf91604091825280518452610dc4602082016115ff565b6020850152016115ff565b6040820152915f61046f565b6024897f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b8680fd5b3d9150610d7b565b6040513d89823e3d90fd5b90915060c0813d60c011610eba575b81610e3b60c0938361157b565b81010312610eb657610eaa60a060405192610e5584611543565b610e5e816115ff565b8452610e6c602082016115ff565b6020850152610e7d604082016115ff565b6040850152610e8e606082016115ff565b6060850152610e9f608082016115ff565b6080850152016115ff565b60a0820152905f6103ee565b8580fd5b3d9150610e2e565b6040513d88823e3d90fd5b81610ed79161157b565b610ee257845f610388565b8480fd5b6004847ff0732dd7000000000000000000000000000000000000000000000000000000008152fd5b8380fd5b5080fd5b50346100b857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b85760a0604051610f5381611543565b828152826020820152826040820152826060820152826080820152015260c07f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff604051610fb481611543565b82815260208101907f00000000000000000000000000000000000000000000000000000000000000008252604081017f0000000000000000000000000000000000000000000000000000000000000000815260608201907f0000000000000000000000000000000000000000000000000000000000000000825260a060808401937f000000000000000000000000000000000000000000000000000000000000000085520193857f0000000000000000000000000000000000000000000000000000000000000000168552604051968752516020870152516040860152516060850152516080840152511660a0820152f35b90503461149b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261149b5760043560243567ffffffffffffffff811161149b576110fa9036906004016114f4565b929073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016938433036114cc5781019360808286031261149b5761115460208301611522565b9461116160408401611522565b606084013567ffffffffffffffff811161149b5784019180601f8401121561149b5782359067ffffffffffffffff821161149f576111c760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f850116018861157b565b8187526020828501011161149b576020815f928273ffffffffffffffffffffffffffffffffffffffff9601838a0137870101521694611204611636565b91803b1561149b575f92836101049273ffffffffffffffffffffffffffffffffffffffff6112e19560405198899788967f8720316d00000000000000000000000000000000000000000000000000000000885260048801906080809173ffffffffffffffffffffffffffffffffffffffff815116845273ffffffffffffffffffffffffffffffffffffffff602082015116602085015273ffffffffffffffffffffffffffffffffffffffff604082015116604085015273ffffffffffffffffffffffffffffffffffffffff60608201511660608501520151910152565b3560a48601521660c48401528960e48401525af1801561149057611479575b5090818492516113f7575b50602092606491604051917f23b872dd000000000000000000000000000000000000000000000000000000008352600483015230602483015260448201528273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af13d15601f3d116001845114161716156113995780f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152fd5b833b15611475578261144491604051809381927f8e8beec40000000000000000000000000000000000000000000000000000000083528660048401526040602484015260448301906115bc565b038183885af1801561146a571561130b5761146083809261157b565b610f12575f61130b565b6040513d85823e3d90fd5b8280fd5b611487919294505f9061157b565b5f92905f611300565b6040513d5f823e3d90fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7fe51b5123000000000000000000000000000000000000000000000000000000005f5260045ffd5b9181601f8401121561149b5782359167ffffffffffffffff831161149b576020838186019501011161149b57565b359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b60c0810190811067ffffffffffffffff82111761149f57604052565b60a0810190811067ffffffffffffffff82111761149f57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761149f57604052565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602080948051918291828752018686015e5f8582860101520116010190565b51906fffffffffffffffffffffffffffffffff8216820361149b57565b91908203918211610cac57565b91908201809211610cac57565b5f60806040516116458161155f565b82815282602082015282604082015282606082015201526040516116688161155f565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602082015273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016604082015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660608201527f0000000000000000000000000000000000000000000000000000000000000000608082015290565b81810292918115918404141715610cac57565b811561179b570490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b906117d29161177e565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810191818311610cac5761180b9261064e91611629565b9056fea2646970667358221220a4400fdf55e00b78e863db05b6eb11bb6abb2d070d36a8977b6db4ab9c9282b464736f6c634300081b0033',
                              a,
                            ]
                          )
                        );
                      return (0, p.CR)({
                        bytecodeHash: o,
                        from: r,
                        salt: '0x0000000000000000000000000000000000000000000000000000000000000000',
                        opcode: 'CREATE2',
                      });
                    })({
                      morpho: o.addressesRegistry[r].morpho,
                      preLiquidationFactory: g,
                      marketId: e,
                      preLiquidationParams: { ...A, preLiquidationOracle: b },
                    })
                  : null,
              [A, b, e, r, g]
            ),
            {
              data: Z,
              isLoading: k,
              isError: q,
              queryKey: B,
            } = (0, i.useReadContract)({
              query: { enabled: !!T && !!g, staleTime: 1 / 0 },
              chainId: r,
              abi: m,
              address: g,
              functionName: 'isPreLiquidation',
              args: [T],
            }),
            {
              data: M,
              isLoading: S,
              isError: P,
              queryKey: I,
            } = (0, i.useReadContract)({
              query: { enabled: !!t && !!T, staleTime: 1 / 0 },
              chainId: r,
              abi: l.blueAbi,
              address: o.addressesRegistry[r].morpho,
              functionName: 'isAuthorized',
              args: [t, T],
            });
          return {
            status: t
              ? w || k || S
                ? 'loading'
                : !1 === Z
                  ? 'hidden'
                  : !1 === M
                    ? 'unauthorized'
                    : !0 === M
                      ? 'authorized'
                      : y || q || P
                        ? 'error'
                        : 'hidden'
              : 'hidden',
            refetchAll: (0, n.useCallback)(() => {
              x(), v.invalidateQueries({ queryKey: B }), v.invalidateQueries({ queryKey: I });
            }, [x, B, I, v]),
            refetchAuthorizationQuery: () => v.invalidateQueries({ queryKey: I }),
            preLltv: null == A ? void 0 : A.preLltv,
            preLiquidationContractAddress: T,
          };
        };
    },
    64070: function (e, t, r) {
      r.d(t, {
        s: function () {
          return o;
        },
      });
      var n = r(12556),
        i = r(26726),
        a = r(89991);
      let o = (e) => {
        let { targetChainId: t } = (0, a.Z_)(),
          r = (0, i.nh)(i.TP.AUTO_DELEVERAGE),
          o = n.FW.isPreLiquidationSupported(null != e ? e : t);
        return r && o;
      };
    },
    83793: function (e, t, r) {
      r.d(t, {
        l: function () {
          return n;
        },
      });
      let n = 'The LTV threshold where liquidators can start partially unwinding your position.';
    },
    69886: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(54655);
      t.Z = (0, i.memo)((e) => {
        let { isRiskyPositionsAcknowledged: t, setIsRiskyPositionsAcknowledged: r } = e;
        return (0, n.BX)(a.Kqy, {
          align: 'center',
          gap: 'xs',
          background: 'background.alert',
          padding: '8px',
          borderRadius: '4px',
          children: [
            (0, n.tZ)(a.XZJ, {
              id: 'is-position-risky-checkbox',
              checked: t,
              onChange: r,
              color: 'primary',
            }),
            (0, n.tZ)(a.xvT.Body.XXS.Regular, {
              color: 'text.interactive.error',
              as: 'label',
              htmlFor: 'is-position-risky-checkbox',
              cursor: 'pointer',
              children:
                'You are close to being liquidated. By clicking the box you understand & acknowledge the risk of the position.',
            }),
          ],
        });
      });
    },
    9866: function (e, t, r) {
      r.d(t, {
        default: function () {
          return s;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(85957),
        o = r(54655),
        l = r(50825),
        f = r(49149);
      let d = (0, r(38819).Z)(o.Kqy, { target: 'e6oot9d0' })(
        'background-color:',
        (e) => {
          let { theme: t } = e;
          return t.colors.background.bloc;
        },
        ';border-radius:',
        (e) => {
          let { theme: t } = e;
          return t.borderRadius;
        },
        ';align-items:center;justify-content:center;width:100%;'
      );
      var s = (0, i.memo)((e) => {
        let { minHeight: t = '250px', className: r, style: i } = e,
          s = (0, a.useRouter)();
        return (0, n.BX)(d, {
          className: r,
          style: i,
          gap: 20,
          direction: 'column',
          minHeight: t,
          padding: 's',
          children: [
            (0, n.BX)(o.Kqy, {
              direction: 'column',
              gap: 's',
              children: [
                (0, n.tZ)(o.xvT.Body.S.Regular, {
                  textAlign: 'center',
                  children: 'Something went wrong.',
                }),
                (0, n.tZ)(o.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  maxWidth: '450px',
                  textAlign: 'center',
                  children: 'This could be due to connectivity or other local issues.',
                }),
              ],
            }),
            (0, n.BX)(o.Kqy, {
              gap: 's',
              children: [
                (0, n.tZ)(o.zxk, {
                  size: 'small',
                  variant: 'primary',
                  label: 'Refresh App',
                  onClick: () => s.refresh(),
                }),
                (0, n.tZ)(l.Z, {
                  mode: 'external',
                  href: f.QP.NEXT_PUBLIC_STATUS_URL,
                  buttonProps: { size: 'small', variant: 'secondary', label: 'Check App Status' },
                }),
              ],
            }),
          ],
        });
      });
    },
    68763: function (e, t, r) {
      r.d(t, {
        default: function () {
          return s;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(12556),
        o = r(54655),
        l = r(50825),
        f = r(49149);
      let d = (0, r(38819).Z)(o.Kqy, { target: 'e1gk17kp0' })(
        'background-color:',
        (e) => {
          let { theme: t } = e;
          return t.colors.background.bloc;
        },
        ';border-radius:',
        (e) => {
          let { theme: t } = e;
          return t.borderRadius;
        },
        ';align-items:center;justify-content:center;width:100%;'
      );
      var s = (0, i.memo)((e) => {
        let { minHeight: t = '200px' } = e;
        return (0, n.BX)(d, {
          gap: 20,
          direction: 'column',
          minHeight: t,
          padding: 's',
          children: [
            (0, n.BX)(o.Kqy, {
              direction: 'column',
              gap: 's',
              children: [
                (0, n.tZ)(o.xvT.Body.S.Regular, {
                  textAlign: 'center',
                  children: 'Something went wrong.',
                }),
                (0, n.tZ)(o.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  maxWidth: '450px',
                  textAlign: 'center',
                  children:
                    'This could be due to connectivity or other local issues. Try refreshing the app or manage your positions through the Morpho Fallback App.',
                }),
              ],
            }),
            (0, n.BX)(o.Kqy, {
              gap: 's',
              children: [
                (0, n.tZ)(l.Z, {
                  mode: 'external',
                  href: a.hU,
                  buttonProps: { size: 'small', variant: 'primary', label: 'Use Fallback App' },
                }),
                (0, n.tZ)(l.Z, {
                  mode: 'external',
                  href: f.QP.NEXT_PUBLIC_STATUS_URL,
                  buttonProps: { size: 'small', variant: 'secondary', label: 'Check App Status' },
                }),
              ],
            }),
          ],
        });
      });
    },
    51712: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return i.default;
        },
        c: function () {
          return n.default;
        },
      });
      var n = r(68763),
        i = r(9866);
    },
    86144: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(27349);
      t.Z = (0, i.memo)((e) => {
        var t, r;
        let { iconSize: l, RewardsHoverCardProps: f, children: d, noHover: s } = e,
          { points: u, rewards: c } = f,
          p = (0, i.useRef)(c),
          m = (0, i.useRef)(u);
        return (
          (null == c ? void 0 : c.length) && (p.current = c),
          (null == u ? void 0 : u.length) && (m.current = u),
          (0, n.BX)(a.zsw.Root, {
            children: [
              (0, n.tZ)(a.zsw.Trigger, {
                isDisabled: s,
                children: (0, n.BX)(a.Kqy, {
                  gap: 2,
                  align: 'center',
                  children: [
                    d,
                    !!(null === (t = p.current) || void 0 === t ? void 0 : t.length) &&
                      (0, n.tZ)(a.JO$, {
                        icon: 'RewardsPlain20',
                        color: 'constant.color.active',
                        size: l,
                      }),
                    !!(null === (r = m.current) || void 0 === r ? void 0 : r.length) &&
                      (0, n.tZ)(a.JO$, {
                        icon: 'PointsPlain20',
                        color: 'constant.color.active',
                        size: l,
                      }),
                  ],
                }),
              }),
              (0, n.tZ)(a.zsw.Content, { children: (0, n.tZ)(o.Z, { ...f }) }),
            ],
          })
        );
      });
    },
    78017: function (e, t, r) {
      r.d(t, {
        w: function () {
          return n.Z;
        },
      });
      var n = r(86144);
    },
    30806: function (e, t, r) {
      r.d(t, {
        x: function () {
          return l;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(50825),
        l = (0, i.memo)((e) => {
          let { tooltip: t, href: r } = e;
          return (0, n.tZ)(a.ua7, {
            content: t,
            children: (0, n.tZ)(a.Kqy, {
              children: (0, n.tZ)(o.Z, {
                href: r,
                buttonProps: {
                  variant: 'secondary',
                  size: 'small',
                  iconRight: void 0,
                  iconAlone: 'ArrowDiagonalUpPlain20',
                  iconAloneProps: { color: 'icon.secondary' },
                },
              }),
            }),
          });
        });
    },
    35288: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return x;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(40252),
        o = r(54655),
        l = r(45842),
        f = r(35047),
        d = r(50825),
        s = r(89991),
        u = r(16820),
        c = r(38819);
      let p = (0, c.Z)('div', { target: 'e1u62bbu0' })(
          'padding:',
          (e) => {
            let { theme: t } = e;
            return ''.concat(t.padding.s, ' 0');
          },
          ';'
        ),
        m = (0, c.Z)(o.Kqy, { target: 'e1u62bbu1' })(
          'padding:',
          (e) => {
            let { theme: t } = e;
            return '8px '.concat(t.padding.s, ' 8px ').concat(t.padding.s);
          },
          ';'
        ),
        v = (0, c.Z)('div', { target: 'e1u62bbu2' })(
          'margin-bottom:8px;margin-left:',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';'
        );
      function g(e, t, r) {
        return void 0 === e
          ? e
          : void 0 === t
            ? t
            : void 0 === r
              ? r
              : null === e && null === t && (0, f.isDefined)(r)
                ? (0, u.Tg)(r)
                : [e, t].filter(f.isDefined).join(' - ');
      }
      let b = (0, i.memo)((e) => {
        let { href: t, label: r } = e;
        return (0, n.tZ)(o.Kqy, {
          children: (0, n.tZ)(d.Z, {
            href: t,
            mode: 'external',
            buttonProps: { variant: 'ghost', size: 'small', label: r || 'View' },
          }),
        });
      });
      var h = (0, i.memo)((e) => {
        let { oracle: t } = e,
          { targetChainId: r } = (0, s.Z_)(),
          d = (0, i.useMemo)(
            () => ({
              link: a.ChainUtils.getExplorerAddressUrl(r, t.address),
              formattedAddress: (0, u.Tg)(t.address),
            }),
            [t.address, r]
          ),
          c = (0, i.useMemo)(
            () =>
              ((null == t ? void 0 : t.baseFeedOneAddress) &&
                a.ChainUtils.getExplorerAddressUrl(r, null == t ? void 0 : t.baseFeedOneAddress)) ||
              '',
            [null == t ? void 0 : t.baseFeedOneAddress, r]
          ),
          h = (0, i.useMemo)(
            () =>
              ((null == t ? void 0 : t.baseFeedTwoAddress) &&
                a.ChainUtils.getExplorerAddressUrl(r, null == t ? void 0 : t.baseFeedTwoAddress)) ||
              '',
            [null == t ? void 0 : t.baseFeedTwoAddress, r]
          ),
          y = (0, i.useMemo)(
            () =>
              ((null == t ? void 0 : t.quoteFeedOneAddress) &&
                a.ChainUtils.getExplorerAddressUrl(
                  r,
                  null == t ? void 0 : t.quoteFeedOneAddress
                )) ||
              '',
            [null == t ? void 0 : t.quoteFeedOneAddress, r]
          ),
          w = (0, i.useMemo)(
            () =>
              ((null == t ? void 0 : t.quoteFeedTwoAddress) &&
                a.ChainUtils.getExplorerAddressUrl(
                  r,
                  null == t ? void 0 : t.quoteFeedTwoAddress
                )) ||
              '',
            [null == t ? void 0 : t.quoteFeedTwoAddress, r]
          ),
          x = (0, i.useMemo)(() => {
            let e =
              g(
                null == t ? void 0 : t.baseFeedOneVendor,
                null == t ? void 0 : t.baseFeedOneDescription,
                null == t ? void 0 : t.baseFeedOneAddress
              ) || '';
            return (0, f.formatLongString)(e, 25);
          }, [
            null == t ? void 0 : t.baseFeedOneVendor,
            null == t ? void 0 : t.baseFeedOneDescription,
            null == t ? void 0 : t.baseFeedOneAddress,
          ]),
          A = (0, i.useMemo)(() => {
            let e =
              g(
                null == t ? void 0 : t.baseFeedTwoVendor,
                null == t ? void 0 : t.baseFeedTwoDescription,
                null == t ? void 0 : t.baseFeedTwoAddress
              ) || '';
            return (0, f.formatLongString)(e, 25);
          }, [
            null == t ? void 0 : t.baseFeedTwoVendor,
            null == t ? void 0 : t.baseFeedTwoDescription,
            null == t ? void 0 : t.baseFeedTwoAddress,
          ]),
          T = (0, i.useMemo)(() => {
            let e =
              g(
                null == t ? void 0 : t.quoteFeedOneVendor,
                null == t ? void 0 : t.quoteFeedOneDescription,
                null == t ? void 0 : t.quoteFeedOneAddress
              ) || '';
            return (0, f.formatLongString)(e, 25);
          }, [
            null == t ? void 0 : t.quoteFeedOneVendor,
            null == t ? void 0 : t.quoteFeedOneDescription,
            null == t ? void 0 : t.quoteFeedOneAddress,
          ]),
          Z = (0, i.useMemo)(() => {
            let e =
              g(
                null == t ? void 0 : t.quoteFeedTwoVendor,
                null == t ? void 0 : t.quoteFeedTwoDescription,
                null == t ? void 0 : t.quoteFeedTwoAddress
              ) || '';
            return (0, f.formatLongString)(e, 25);
          }, [
            null == t ? void 0 : t.quoteFeedTwoVendor,
            null == t ? void 0 : t.quoteFeedTwoDescription,
            null == t ? void 0 : t.quoteFeedTwoAddress,
          ]);
        return (0, n.BX)(p, {
          children: [
            (0, n.tZ)(v, {
              children: (0, n.tZ)(o.xvT.Body.S.Regular, { color: 'text.body', children: 'Oracle' }),
            }),
            (0, n.tZ)(o.Z0O, {}),
            t.address &&
              t.address !== l.DR &&
              (0, n.tZ)(n.HY, {
                children: (0, n.BX)(m, {
                  align: 'center',
                  justify: 'space-between',
                  gap: 8,
                  children: [
                    (0, n.tZ)(o.xvT.Body.XXS.Regular, { color: 'text.body', children: 'Address' }),
                    (0, n.tZ)(b, { href: d.link, label: d.formattedAddress }),
                  ],
                }),
              }),
            (null == t ? void 0 : t.baseFeedOneAddress) &&
              (null == t ? void 0 : t.baseFeedOneAddress) !== l.DR &&
              (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(o.Z0O, {}),
                  (0, n.BX)(m, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 8,
                    children: [
                      (0, n.tZ)(o.xvT.Body.XXS.Regular, {
                        color: 'text.body',
                        whiteSpace: 'nowrap',
                        lineHeight: 'normal',
                        children: 'Base Feed 1',
                      }),
                      (0, n.tZ)(b, { href: c, label: x }),
                    ],
                  }),
                ],
              }),
            (null == t ? void 0 : t.baseFeedTwoAddress) &&
              (null == t ? void 0 : t.baseFeedTwoAddress) !== l.DR &&
              (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(o.Z0O, {}),
                  (0, n.BX)(m, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 8,
                    children: [
                      (0, n.tZ)(o.xvT.Body.XXS.Regular, {
                        color: 'text.body',
                        whiteSpace: 'nowrap',
                        lineHeight: 'normal',
                        children: 'Base Feed 2',
                      }),
                      (0, n.tZ)(b, { href: h, label: A }),
                    ],
                  }),
                ],
              }),
            (null == t ? void 0 : t.quoteFeedOneAddress) &&
              (null == t ? void 0 : t.quoteFeedOneAddress) !== l.DR &&
              (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(o.Z0O, {}),
                  (0, n.BX)(m, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 8,
                    children: [
                      (0, n.tZ)(o.xvT.Body.XXS.Regular, {
                        color: 'text.body',
                        whiteSpace: 'nowrap',
                        lineHeight: 'normal',
                        children: 'Quote Feed 1',
                      }),
                      (0, n.tZ)(b, { href: y, label: T }),
                    ],
                  }),
                ],
              }),
            (null == t ? void 0 : t.quoteFeedTwoAddress) &&
              (null == t ? void 0 : t.quoteFeedTwoAddress) !== l.DR &&
              (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(o.Z0O, {}),
                  (0, n.BX)(m, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 8,
                    children: [
                      (0, n.tZ)(o.xvT.Body.XXS.Regular, {
                        color: 'text.body',
                        whiteSpace: 'nowrap',
                        lineHeight: 'normal',
                        children: 'Quote Feed 2',
                      }),
                      (0, n.tZ)(b, { href: w, label: Z }),
                    ],
                  }),
                ],
              }),
          ],
        });
      });
      let y = (0, c.Z)('div', { target: 'eeaqcug0' })(
          'max-width:120px;height:22px;display:flex;align-items:center;margin-right:4px;'
        ),
        w = (0, i.memo)((e) => {
          let { text: t } = e;
          return (0, n.tZ)(o.ua7, {
            content: t,
            disabled: !t,
            withTouch: !0,
            children: (0, n.tZ)(o.JO$, { icon: 'WarningPlain20', color: 'icon.secondary' }),
          });
        });
      var x = (0, i.memo)((e) => {
        let { oracle: t, warnings: r, tagProps: l, typographyProps: f } = e,
          d = (0, i.useMemo)(() => (r ? (0, o._d)(r) : null), [r]),
          s = (0, i.useMemo)(() => ((0, a.isFetched)(t) ? (0, o.pTE)(t) : t), [t]);
        return 'string' == typeof t
          ? (0, n.BX)(o.Vp9, {
              ...l,
              children: [
                (0, n.tZ)(y, {
                  children: (0, n.tZ)(o.ZT$, {
                    TextVariant: o.xvT.Body.XXXS.Regular,
                    lineHeight: 'normal',
                    shorten: 1,
                    ...f,
                    children: s,
                  }),
                }),
                (null == d ? void 0 : d.message) && (0, n.tZ)(w, { text: d.message }),
              ],
            })
          : (0, n.BX)(o.Vp9, {
              ...l,
              children: [
                (0, n.BX)(o.zsw.Root, {
                  children: [
                    (0, n.tZ)(o.zsw.Trigger, {
                      children: (0, n.tZ)(y, {
                        children: (0, n.tZ)(o.ZT$, {
                          TextVariant: o.xvT.Body.XXXS.Regular,
                          lineHeight: 'normal',
                          shorten: 1,
                          ...f,
                          children: s,
                        }),
                      }),
                    }),
                    (0, n.tZ)(o.zsw.Content, { children: (0, n.tZ)(h, { oracle: t }) }),
                  ],
                }),
                (null == d ? void 0 : d.message) && (0, n.tZ)(w, { text: d.message }),
              ],
            });
      });
    },
    46997: function (e, t, r) {
      r.r(t);
      var n = r(78286),
        i = r(58258),
        a = r(88084),
        o = r(77187),
        l = r(54655),
        f = r(90626),
        d = r(49149);
      class s extends i.Component {
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          var r, n, i, l;
          console.error(
            'Section error: '
              .concat(e, ', ')
              .concat(t, '. Section: ')
              .concat(
                null !== (i = null === (r = this.props) || void 0 === r ? void 0 : r.section) &&
                  void 0 !== i
                  ? i
                  : 'N/A',
                ', Route: '
              )
              .concat(
                null !== (l = null === (n = this.props) || void 0 === n ? void 0 : n.route) &&
                  void 0 !== l
                  ? l
                  : 'N/A'
              )
          ),
            d.QP.NEXT_PUBLIC_SENTRY_DSN &&
              a.$e(function (t) {
                t.setLevel('fatal'), o.Tb(e);
              });
        }
        render() {
          if (this.state.hasError) {
            var e, t;
            return (
              this.props.fallback ||
              (0, n.tZ)(f.default, {
                children: (0, n.BX)(l.Kqy, {
                  direction: 'column',
                  align: 'center',
                  justify: 'center',
                  gap: 'm',
                  className: 'p-4',
                  children: [
                    (0, n.tZ)(l.xvT.Title.L, {
                      color: 'text.primary',
                      children:
                        null !== (e = this.props.title) && void 0 !== e ? e : 'Section Error',
                    }),
                    (0, n.tZ)(l.xvT.Body.L.Regular, {
                      color: 'text.primary',
                      children:
                        null !== (t = this.props.description) && void 0 !== t
                          ? t
                          : 'Something went wrong in '.concat(this.props.section, '.'),
                    }),
                    (0, n.tZ)(l.zxk, {
                      onClick: () => this.setState({ hasError: !1 }),
                      variant: 'primary',
                      size: 'medium',
                      children: 'Try again',
                    }),
                  ],
                }),
              })
            );
          }
          return this.props.children;
        }
        constructor(e) {
          super(e), (this.state = { hasError: !1 });
        }
      }
      t.default = s;
    },
    70064: function (e, t, r) {
      r.d(t, {
        K: function () {
          return n.default;
        },
        Z: function () {
          return n.default;
        },
      });
      var n = r(46997);
    },
    90626: function (e, t, r) {
      r.d(t, {
        default: function () {
          return s;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(23567),
        o = r(38819),
        l = r(54655);
      let f = (0, o.Z)('div', { target: 'eqlp4070' })(
          'background:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.gradient.pageBackground;
          },
          ';width:100%;'
        ),
        d = (0, o.Z)(l.Kqy, { shouldForwardProp: (0, l.uhK)(['withAside']), target: 'eqlp4071' })(
          'container-type:inline-size;container-name:content-root;margin:',
          (e) => {
            let { withAside: t } = e;
            return t
              ? (0, a.iv)('var(--navbar-height) 10px 10px 10px')
              : (0, a.iv)(
                  'var(--navbar-height) calc(var(--bundler-width) - var(--bundler-position) + 10px) 10px 10px'
                );
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{margin:64px 10px 10px 10px;}flex-direction:row;min-height:calc(100vh - var(--navbar-height) - 10px);'
        );
      (0, o.Z)('div', { target: 'eqlp4072' })(
        'position:fixed;right:89px;top:105px;display:',
        (e) => {
          let { withAside: t } = e;
          return t ? 'flex' : 'none';
        },
        ';justify-content:center;align-items:center;width:350px;height:784px;max-height:calc(100vh - 36px - 10px - 80px - 33px);overflow-y:auto;z-index:',
        (e) => {
          let { theme: t } = e;
          return t.zIndex.base.default;
        },
        ';',
        (0, l.xJ_)('border-width'),
        ' ',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.down('l');
        },
        '{right:20px;}',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.down('s');
        },
        '{display:none;}'
      );
      var s = (0, i.memo)((e) => {
        let { children: t, withAside: r = !0, className: i, style: a } = e;
        return (0, n.tZ)(f, {
          className: i,
          style: a,
          children: (0, n.tZ)(d, { justify: 'end', grow: 1, withAside: r, children: t }),
        });
      });
    },
    98949: function (e, t, r) {
      r.d(t, {
        gz: function () {
          return u;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(47312),
        o = r(40252),
        l = r(89991),
        f = r(49663),
        d = r(91283);
      let s = (0, i.createContext)(null),
        u = () => {
          let e = (0, i.useContext)(s);
          if (!e) throw Error('useMorphoLegacyContext must be called inside a MorphoLegacyContext');
          return e;
        };
      t.ZP = (0, i.memo)((e) => {
        let { children: t } = e,
          { targetChainId: r } = (0, l.Z_)(),
          { data: i } = (0, a.useWalletClient)(),
          u = (0, d.g)(f.rr.legacyMorphoToken, {
            skip:
              r !== o.ChainId.EthMainnet ||
              (null == i ? void 0 : i.chain.id) !== o.ChainId.EthMainnet,
          }),
          c = (0, d.g)(f.rr.morphoToken, {
            skip:
              r !== o.ChainId.EthMainnet ||
              (null == i ? void 0 : i.chain.id) !== o.ChainId.EthMainnet,
          });
        return (0, n.tZ)(s.Provider, {
          value: { legacyMorphoHolding: u, morphoHolding: c },
          children: t,
        });
      });
    },
    68906: function (e, t, r) {
      r.d(t, {
        D2: function () {
          return l;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(5469);
      let o = (0, i.createContext)(null),
        l = () => {
          let e = (0, i.useContext)(o);
          if (!e) throw Error('useRewardContext must be called inside a RewardContextProvider');
          return e;
        };
      t.ZP = (0, i.memo)((e) => {
        let { children: t } = e,
          r = (0, a.H)();
        return (0, n.tZ)(o.Provider, { value: { ...r }, children: t });
      });
    },
    86876: function (e, t, r) {
      r.d(t, {
        HT: function () {
          return x;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(4311),
        o = r(34940),
        l = r(81767),
        f = r(47312),
        d = r(36929),
        s = r(25834),
        u = r(54655),
        c = r(35047),
        p = r(18313),
        m = r(89991),
        v = r(59855),
        g = r(75571),
        b = r(96278),
        h = r(98267);
      let y = async (e, t) => {
          try {
            let r = await (0, o.a)(e, { hash: t });
            if ((null == r ? void 0 : r.status) !== 'success') throw r;
            return r;
          } catch (r) {
            return new Promise((r, n) => {
              let i = (0, l.p)(e, {
                onBlock: (0, a.Z)(
                  async () => {
                    try {
                      let a = await (0, o.a)(e, { hash: t });
                      i(), (null == a ? void 0 : a.status) === 'success' ? r(a) : n(a);
                    } catch (e) {}
                  },
                  3e3,
                  { trailing: !1 }
                ),
              });
            });
          }
        },
        w = (0, i.createContext)(null),
        x = () => {
          let e = (0, i.useContext)(w);
          if (!e)
            throw Error('useTransactionContext must be called inside a TransactionContextProvider');
          return e;
        };
      t.ZP = (0, i.memo)((e) => {
        var t;
        let { children: r } = e,
          { data: a } = (0, f.useWalletClient)(),
          { account: o, targetChain: l } = (0, m.Z_)(),
          { displayToast: s, displayTxToast: x } = (0, u.V6$)(),
          Z = (0, b.B)(),
          [k, q] = (0, i.useState)(),
          B = (0, i.useRef)(a),
          M = (0, i.useRef)({ address: o.address, isContract: o.isContract, isSafe: o.isSafe }),
          S = (0, i.useRef)(l),
          [P, I] = (0, i.useState)(),
          [R, C, X] = (0, h.yk)(k, null === (t = M.current) || void 0 === t ? void 0 : t.isSafe),
          L = (0, i.useMemo)(() => R && (0, h.V0)(R), [R]),
          F = (0, i.useCallback)(() => {
            X(),
              q(void 0),
              I(void 0),
              (B.current = void 0),
              (M.current = void 0),
              (S.current = void 0);
          }, [X]),
          O = (0, i.useCallback)(
            (e, t, r, n) => {
              F(),
                (B.current = a),
                (M.current = { address: o.address, isContract: o.isContract, isSafe: o.isSafe }),
                (S.current = l),
                q((i) => {
                  if (i) throw Error('Cannot override action bundle');
                  return n ? new T(e, t, r) : new A(e, t, r);
                });
            },
            [o.address, o.isContract, o.isSafe, l, a, F]
          ),
          E = (0, i.useCallback)(
            async (e) => {
              var t, r;
              let n = B.current,
                i = M.current,
                a = S.current;
              if (!n || !(null == i ? void 0 : i.address) || i.isSafe || !a) return;
              let o =
                null !== (t = null == k ? void 0 : k.requirements.txs.find((t) => t.id === e)) &&
                void 0 !== t
                  ? t
                  : null == k
                    ? void 0
                    : k.requirements.signatures.find((t) => t.id === e);
              if (o)
                try {
                  let e;
                  'tx' in o
                    ? ((e = await n.sendTransaction({ ...o.tx, account: i.address, chain: a })),
                      C('signed'),
                      I(e),
                      await c.Time.wait(500),
                      await y(n, e),
                      I(void 0))
                    : await o.sign(n),
                    x({
                      notificationStatus: u.EzR.success,
                      txHash: e,
                      chainId: l.id,
                      userIsContract: i.isContract,
                    }),
                    C('success');
                } catch (e) {
                  s({
                    description:
                      null !== (r = (0, c.formatLongString)(e.message, 100)) && void 0 !== r
                        ? r
                        : 'An error occurred',
                    notificationStatus: u.EzR.error,
                  }),
                    C('error');
                }
            },
            [
              null == k ? void 0 : k.requirements.signatures,
              null == k ? void 0 : k.requirements.txs,
              s,
              x,
              C,
              l.id,
            ]
          ),
          D = (0, i.useCallback)(async () => {
            var e, t;
            let r;
            let n = B.current,
              i = M.current,
              a = S.current;
            if (!n || !(null == i ? void 0 : i.address) || !a || !k) return;
            let o = k.tx();
            try {
              let t;
              if (i.isSafe) {
                let e = new d.default(),
                  { safeTxHash: r } = await e.txs.send({
                    txs: k.requirements.txs
                      .map((e) => {
                        let { tx: t } = e;
                        return t;
                      })
                      .concat((0, g.RY)(o, '25AFEA44'))
                      .map((e) => {
                        let { value: t, ...r } = e;
                        return { ...r, value: null != t ? t.toString() : '0' };
                      }),
                  });
                t = r;
              } else
                t = await n.sendTransaction({
                  ...(0, g.RY)(o, p.clientEnvs.NEXT_PUBLIC_CALLDATA_ORIGIN),
                  account: i.address,
                  chain: a,
                });
              if ((C('signed'), 'object' == typeof t)) throw Error('Transaction failed');
              (r = t), I(t), await c.Time.wait(500);
              let f = await y(n, t);
              if ((null == f ? void 0 : f.status) !== 'success')
                throw Error('Transaction failed ' + t);
              I(void 0),
                x({
                  notificationStatus: u.EzR.success,
                  txHash: t,
                  chainId: l.id,
                  userIsContract: i.isContract,
                }),
                C('success');
              try {
                v.Q.debugSharedLiquidity({
                  bundlingOptions: Z,
                  userAddress: i.address,
                  txHash: t,
                  operations: null == k ? void 0 : k.operations,
                  steps: null == k ? void 0 : k.steps,
                });
              } catch (e) {
                console.error('Error while debugging Shared Liquidity', e);
              }
              null === (e = k.onTxSuccess) || void 0 === e || e.call(k);
            } catch (e) {
              r
                ? x({
                    notificationStatus: u.EzR.error,
                    txHash: r,
                    chainId: l.id,
                    userIsContract: i.isContract,
                  })
                : s({
                    description:
                      null !== (t = (0, c.formatLongString)(e.message, 100)) && void 0 !== t
                        ? t
                        : 'An error occurred',
                    notificationStatus: u.EzR.error,
                  }),
                C('error');
            }
          }, [k, Z, s, x, C, l.id]);
        (0, i.useEffect)(() => {
          if (L && L.status === h.qb.signing)
            switch (L.type) {
              case 'tx':
                D();
                return;
              case 'req':
                E(L.id);
                return;
            }
        }, [D, E, L]);
        let K = (0, i.useMemo)(() => {
          var e;
          return {
            activeBundle: k,
            setActiveBundle: O,
            reset: F,
            retry: () => C('retry'),
            currentState: L,
            pendingTxHash: P,
            bundleChainId: null === (e = S.current) || void 0 === e ? void 0 : e.id,
            accountRef: M.current,
          };
        }, [k, O, F, L, P, C]);
        return (0, n.tZ)(w.Provider, { value: K, children: r });
      });
      class A extends s.ActionBundle {
        constructor(e, t, r) {
          let n = new s.ActionBundleRequirements(
            e.requirements.txs.map((e) => ({ ...e, id: crypto.randomUUID() })),
            e.requirements.signatures.map((e) => ({ ...e, id: crypto.randomUUID() }))
          );
          e.steps ? super(e.steps, e.actions, n) : super(e.chainId, e.actions, n),
            (this.operations = t),
            (this.onTxSuccess = r);
        }
      }
      class T extends A {
        constructor(e, t, r) {
          let n = e.tx;
          super(e, [], r), (this.operations = t), (this.onTxSuccess = r), (this.tx = n);
        }
      }
    },
    75147: function (e, t, r) {
      r.d(t, {
        H: function () {
          return n.HT;
        },
      });
      var n = r(86876);
    },
    98267: function (e, t, r) {
      r.d(t, {
        qb: function () {
          return i;
        },
        V0: function () {
          return d;
        },
        yk: function () {
          return s;
        },
      });
      var n,
        i,
        a = r(58258),
        o = r(18983);
      let l = (e) => {
        let [t, r] = (0, a.useState)(e.initial);
        return (
          (0, a.useEffect)(() => {
            r(e.initial);
          }, [e.initial]),
          (0, a.useEffect)(() => {
            var n;
            if (!t) return;
            let i = null === (n = e.states[t]) || void 0 === n ? void 0 : n.on;
            if (!i) return;
            let a = (0, o.keys)(i).find((e) => /^timer_(\d+(\.\d+)?)s/.test(e));
            if (!a) return;
            let l = setTimeout(() => r(i[a]), 1e3 * parseFloat(a.split('_')[1]));
            return () => clearTimeout(l);
          }, [t, e]),
          [
            t,
            (0, a.useCallback)(
              (t) => {
                r((r) => {
                  var n;
                  if (!r) return r;
                  let i = null === (n = e.states[r]) || void 0 === n ? void 0 : n.on;
                  return (null == i ? void 0 : i[t])
                    ? i[t]
                    : (console.warn(
                        'State machine got the message "'
                          .concat(t, '" while being in state "')
                          .concat(r, '", which is inconsistent')
                      ),
                      r);
                });
              },
              [e]
            ),
            (0, a.useCallback)(() => r(void 0), []),
          ]
        );
      };
      ((n = i || (i = {})).complete = 'complete'),
        (n.signing = 'signing'),
        (n.pending = 'pending'),
        (n.error = 'error');
      let f = (e, t) => {
          if (!e || null == t) return { initial: void 0, states: {} };
          let r = [...e.requirements.txs, ...e.requirements.signatures],
            n = {
              initial: !t && r.length ? 'req_signing_'.concat(r[0].id) : 'tx_signing',
              states: {
                tx_pending: { on: { success: 'tx_complete', error: 'tx_error' } },
                tx_signing: { on: { signed: 'tx_pending', error: 'tx_error' } },
                tx_error: { on: { retry: 'tx_signing' } },
              },
            };
          if (!t)
            for (let e = 0; e < r.length; e++) {
              let t = r[e],
                i = r[e + 1];
              'tx' in t
                ? ((n.states['req_signing_'.concat(t.id)] = {
                    on: { signed: 'req_pending_'.concat(t.id), error: 'req_error_'.concat(t.id) },
                  }),
                  (n.states['req_pending_'.concat(t.id)] = {
                    on: { success: 'req_complete_'.concat(t.id), error: 'req_error_'.concat(t.id) },
                  }))
                : (n.states['req_signing_'.concat(t.id)] = {
                    on: {
                      signed: 'req_complete_'.concat(t.id),
                      success: 'req_complete_'.concat(t.id),
                      error: 'req_error_'.concat(t.id),
                    },
                  }),
                (n.states['req_complete_'.concat(t.id)] = {
                  on: { timer_1s: i ? 'req_signing_'.concat(i.id) : 'tx_signing' },
                }),
                (n.states['req_error_'.concat(t.id)] = {
                  on: { retry: 'req_signing_'.concat(t.id) },
                });
            }
          return n;
        },
        d = (e) => {
          let [t, r, n] = e.split('_');
          return { type: t, status: r, id: n };
        },
        s = (e, t) => l((0, a.useMemo)(() => f(e, t), [e, t]));
    },
    41512: function (e, t, r) {
      r.d(t, {
        n: function () {
          return a;
        },
      });
      var n = r(55412);
      function i() {
        let e = (0, n._)([
          '\n  fragment assetFields on Asset {\n    ...simpleAssetFields\n    yield {\n      apr\n    }\n    vault {\n      id\n      address\n      asset {\n        ...simpleAssetFields\n      }\n      state {\n        id\n        netApy\n      }\n    }\n  }\n',
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      let a = (0, r(3245).Ps)(i());
    },
    93114: function (e, t, r) {
      r.d(t, {
        j: function () {
          return a;
        },
      });
      var n = r(55412);
      function i() {
        let e = (0, n._)([
          '\n  fragment collateralExposuresFields on Market {\n    id\n    collateralAsset {\n      ...simpleAssetFields\n    }\n    oracle {\n      id\n      address\n    }\n    oracleInfo {\n      type\n    }\n    oracleFeed {\n      baseVault\n      baseFeedOneAddress\n      baseFeedOneDescription\n      baseFeedOneVendor\n      baseFeedTwoAddress\n      baseFeedTwoDescription\n      baseFeedTwoVendor\n      quoteVault\n      quoteFeedOneAddress\n      quoteFeedOneDescription\n      quoteFeedOneVendor\n      quoteFeedTwoAddress\n      quoteFeedTwoDescription\n      quoteFeedTwoVendor\n    }\n  }\n',
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      let a = (0, r(3245).Ps)(i());
    },
    24387: function (e, t, r) {
      r.d(t, {
        G: function () {
          return a;
        },
      });
      var n = r(55412);
      function i() {
        let e = (0, n._)([
          '\n  fragment simpleAssetFields on Asset {\n    id\n    address\n    symbol\n    name\n    decimals\n    priceUsd\n    tags\n    logoURI\n    chain {\n      id\n    }\n  }\n',
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      let a = (0, r(3245).Ps)(i());
    },
    45610: function (e, t, r) {
      r.d(t, {
        N: function () {
          return a;
        },
      });
      var n = r(55412);
      function i() {
        let e = (0, n._)([
          '\n  fragment simpleAssetFieldsWithYield on Asset {\n    ...simpleAssetFields\n    yield {\n      apr\n    }\n  }\n',
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      let a = (0, r(3245).Ps)(i());
    },
    49663: function (e, t, r) {
      r.d(t, {
        id: function () {
          return l;
        },
        rr: function () {
          return a;
        },
        tV: function () {
          return o;
        },
      });
      var n,
        i = r(40252);
      let a = i.addresses[i.ChainId.EthMainnet];
      (a.timeBoundedUrd = '0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb'),
        (a.marketRewardsProgramRegistry = '0x5148bF15bb722E1854F66430Bc9FeD0E9FDaCE7D'),
        (a.weEth = '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee'),
        (a.ezEth = '0xbf5495Efe5DB9ce00f80364C8B423567e58d2110'),
        (a.rsEth = '0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7'),
        (a.usdE = '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3'),
        (a.sUsdE = '0x9D39A5DE30e57443BfF2A8307A4256c8797A3497'),
        (a['usd0++'] = '0x35D8949372D46B7a3D5A56006AE77B215fc69bC0'),
        (a['usd0usd0++'] = '0x1d08E7adC263CfC70b1BaBe6dC5Bb339c16Eec52'),
        (a.rsweth = '0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0'),
        (a.re7Weth = '0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0'),
        (a.legacyMorphoToken = '0x9994E35Db50125E0DF82e4c2dde62496CE330999'),
        (a.deprecatedMorphoToken = '0x039b598c6b99e70058E1e9021E000BdacD33d026'),
        (a.morphoToken = '0x58D97B57BB95320F9a05dC918Aef65434969c2B2'),
        (a.morphoTokenWrapper = '0x9D03bb2092270648d7480049d0E58d2FcF0E5123');
      let o = new i.Token({
        address: a.legacyMorphoToken,
        decimals: 18,
        symbol: 'MORPHO',
        name: 'Morpho Token',
        eip5267Domain: new i.Eip5267Domain({
          fields: '0xf',
          name: 'Morpho Token',
          version: '1',
          chainId: BigInt(i.ChainId.EthMainnet),
          verifyingContract: a.legacyMorphoToken,
          salt: '0x0',
          extensions: [],
        }),
      });
      null === (n = i.erc20WrapperTokens[i.ChainId.EthMainnet]) ||
        void 0 === n ||
        n.add(a.morphoTokenWrapper);
      let l = i.addresses[i.ChainId.BaseMainnet];
      (l.ezEth = '0x2416092f143378750bb29b79eD961ab195CcEea5'),
        (l.bsdEth = '0xCb327b99fF831bF8223cCEd12B1338FF3aA322Ff'),
        (l.deprecatedMorphoToken = '0x039b598c6b99e70058E1e9021E000BdacD33d026'),
        (l.morphoToken = '0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842'),
        (l.wellToken = '0xA88594D404727625A9437C3f886C7643872296AE');
    },
    9834: function (e, t, r) {
      r.d(t, {
        m: function () {
          return i;
        },
      });
      var n = r(12556);
      let i = (e) =>
        e
          ? e
              .reduce((e, t) => {
                var r, i, a;
                let { collateralAsset: o, oracle: l } = t.market;
                if (!(null == o ? void 0 : o.address) || !(null == o ? void 0 : o.symbol)) return e;
                let f = l
                    ? {
                        address: l.address,
                        type: null === (r = t.market.oracleInfo) || void 0 === r ? void 0 : r.type,
                        ...t.market.oracleFeed,
                      }
                    : void 0,
                  d = e.find((e) => e.token.address === o.address);
                return (
                  d
                    ? (d.lltvs.add(t.market.lltv),
                      f && d.oracles.add(f),
                      (d.supplyAssetsUsd +=
                        null !== (i = t.supplyAssetsUsd) && void 0 !== i ? i : 0))
                    : e.push({
                        token: (0, n.wk)(o),
                        lltvs: new Set([BigInt(t.market.lltv)]),
                        oracles: f ? new Set([f]) : new Set(),
                        supplyAssetsUsd: null !== (a = t.supplyAssetsUsd) && void 0 !== a ? a : 0,
                      }),
                  e
                );
              }, [])
              .sort((e, t) => t.supplyAssetsUsd - e.supplyAssetsUsd)
          : [];
    },
    16820: function (e, t, r) {
      r.d(t, {
        Pi: function () {
          return l;
        },
        Tg: function () {
          return a;
        },
        sL: function () {
          return o;
        },
      });
      var n = r(54655),
        i = r(35047);
      let a = (e) => '0x' + (0, i.formatLongString)(e.slice(2), 11),
        o = (e) => {
          let { price: t, amount: r, decimals: i, withTrailingZero: a, symbol: o } = e,
            l = n.$0l.commas.digits((0, n.QQD)(t, r)).trailingZero(a);
          return o && (l = l.unit(o)), l.of(r, i);
        },
        l = (e, t) => ((0, i.isDefined)(e) ? t(e) : e);
    },
    73529: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = r(77672),
        i = r.n(n);
      BigInt.prototype.toJSON = function () {
        return this.toString();
      };
      var a = r(40252),
        o = r(4565),
        l = r(75963);
      let f = {
        type: 'bytes32String',
        base: i().string(),
        messages: { 'bytes32String.base': '"{{#label}}" must be a parsable bytes32 string' },
        validate: (e, t) =>
          (0, l.v)(e) ? { value: e } : { value: e, errors: t.error('bytes32String.base') },
      };
      var d = i().extend(
        (e) => ({
          type: 'marketId',
          base: e.string(),
          messages: { 'marketId.base': '{{#label}} must be a valid MarketId' },
          validate: (e, t) =>
            /^0x[a-fA-F0-9]{64}$/.test(e)
              ? { value: e }
              : { value: null, errors: t.error('marketId.base') },
        }),
        (e) => ({
          type: 'chainId',
          base: e.alternatives([e.string(), e.number()]),
          messages: { 'chainId.base': '{{#label}} must be a valid ChainId' },
          validate: (e, t) =>
            Object.values(a.ChainId)
              .filter((e) => 'number' == typeof e)
              .map(String)
              .includes(e.toString())
              ? { value: parseInt(e.toString(), 10) }
              : { value: null, errors: t.error('chainId.base') },
        }),
        (e) => ({
          type: 'address',
          base: e.string(),
          messages: { 'address.checksum': '{{#label}} must be a valid checksummed address' },
          coerce: { method: (e) => ({ value: e }) },
          validate(e, t) {
            try {
              return { value: (0, o.safeGetAddress)(e) };
            } catch (e) {
              return { value: null, errors: t.error('address.checksum') };
            }
          },
        }),
        (e) => ({
          type: 'bigint',
          base: e.any(),
          coerce: {
            from: ['string', 'number'],
            method(e, t) {
              try {
                return { value: BigInt(e) };
              } catch (r) {
                return { value: e, errors: [t.error('bigint.base')] };
              }
            },
          },
          messages: {
            'bigint.base': '{{#value}} must be a bigint',
            'bigint.gt': '{{#value}} must be greater than {{#limit}}',
            'bigint.lt': '{{#value}} must be less than {{#limit}}',
            'bigint.gte': '{{#value}} must be greater or equal to {{#limit}}',
            'bigint.lte': '{{#value}} must be less or equal to {{#limit}}',
          },
          rules: {
            gt: {
              method(e) {
                return this.$_addRule({ name: 'gt', args: { limit: BigInt(e) } });
              },
              args: [
                {
                  name: 'limit',
                  assert: (e) =>
                    'bigint' == typeof e || 'number' == typeof e || 'string' == typeof e,
                  message: 'must be a number, string or bigint',
                },
              ],
              validate: (e, t, r) => (e <= r.limit ? t.error('bigint.gt', { limit: r.limit }) : e),
            },
            lt: {
              method(e) {
                return this.$_addRule({ name: 'lt', args: { limit: BigInt(e) } });
              },
              args: [
                {
                  name: 'limit',
                  assert: (e) =>
                    'bigint' == typeof e || 'number' == typeof e || 'string' == typeof e,
                  message: 'must be a number, string or bigint',
                },
              ],
              validate: (e, t, r) => (e >= r.limit ? t.error('bigint.lt', { limit: r.limit }) : e),
            },
            gte: {
              method(e) {
                return this.$_addRule({ name: 'gte', args: { limit: BigInt(e) } });
              },
              args: [
                {
                  name: 'limit',
                  assert: (e) =>
                    'bigint' == typeof e || 'number' == typeof e || 'string' == typeof e,
                  message: 'must be a number, string or bigint',
                },
              ],
              validate: (e, t, r) => (e < r.limit ? t.error('bigint.gte', { limit: r.limit }) : e),
            },
            lte: {
              method(e) {
                return this.$_addRule({ name: 'lte', args: { limit: BigInt(e) } });
              },
              args: [
                {
                  name: 'limit',
                  assert: (e) =>
                    'bigint' == typeof e || 'number' == typeof e || 'string' == typeof e,
                  message: 'must be a number, string or bigint',
                },
              ],
              validate: (e, t, r) => (e > r.limit ? t.error('bigint.lte', { limit: r.limit }) : e),
            },
          },
        }),
        f
      );
    },
    81066: function (e, t, r) {
      r.d(t, {
        AH: function () {
          return v;
        },
        Ii: function () {
          return i;
        },
        JD: function () {
          return m;
        },
      });
      var n,
        i,
        a = r(18313),
        o = r(73529),
        l = r(81961),
        f = r(31374);
      ((n = i || (i = {})).Market = 'market-reward'),
        (n.Vault = 'vault-reward'),
        (n.Airdrop = 'airdrop-reward'),
        (n.Uniform = 'uniform-reward'),
        (n.Merkl = 'merkl-reward');
      let d = o.Z.alternatives().try(
          o.Z.object({
            total: o.Z.bigint().required(),
            claimableNow: o.Z.bigint().required(),
            claimableNext: o.Z.bigint().required(),
            claimed: o.Z.bigint().required(),
          }).unknown(!0),
          o.Z.allow(null)
        ),
        s = (e) =>
          o.Z.object({
            marketId: o.Z.string().required(),
            chainId: o.Z.number().valid(e).required(),
          }).unknown(!0),
        u = (e) =>
          o.Z.object({
            vault: o.Z.address().required(),
            chainId: o.Z.number().valid(e).required(),
          }).unknown(!0),
        c = (e) =>
          o.Z.object({
            user: o.Z.address().required(),
            type: o.Z.string().required(),
            asset: o.Z.object({
              address: o.Z.address().required(),
              chainId: o.Z.number().valid(e).required(),
            })
              .unknown(!0)
              .required(),
            program: o.Z.alternatives().try(s(e), u(e), o.Z.object().unknown(!0)).optional(),
            forSupply: d.optional(),
            forBorrow: d.optional(),
            forCollateral: d.optional(),
            amount: d.optional(),
          }).unknown(!0),
        p = (e) => o.Z.array().items(c(e)),
        m = (e) => 'airdrop-reward' === e.type,
        v = async function (e, t) {
          var r;
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!e || !t) return [];
          let i = ''
            .concat(a.clientEnvs.NEXT_PUBLIC_REWARDS_API_URL, '/v1/users/')
            .concat(e, '/rewards?trusted=true&chain_id=')
            .concat(t);
          n && (i += '&noCache='.concat(Date.now().toString()));
          let o = await fetch(i),
            d = await o.json();
          return (0, f.S)(
            null === (r = (0, l.N)(d.data)) || void 0 === r
              ? void 0
              : r.filter((e) => {
                  let { error: r } = c(t).validate(e, { abortEarly: !1 });
                  if (r) {
                    let t = (0, f.b)(r, e);
                    console.error(
                      'Validation failed for rewards distribution. Error code: '
                        .concat(t, ', item: ')
                        .concat(JSON.stringify(e), ', error: ')
                        .concat(r)
                    );
                  }
                  return !r;
                }),
            p(t)
          );
        };
    },
    73828: function (e, t, r) {
      r.d(t, {
        Cn: function () {
          return w;
        },
        _x: function () {
          return c;
        },
        pf: function () {
          return s;
        },
      });
      var n = r(40252),
        i = r(4565),
        a = r(12556),
        o = r(35047),
        l = r(42418),
        f = r(8937);
      let d = {
          [n.ChainId.EthMainnet]: ['0x73e65DBD630f90604062f6E02fAb9138e713edD9'],
          [n.ChainId.BaseMainnet]: ['0x7BfA7C4f149E7415b73bdeDfe609237e29CBF34A'],
          [n.ChainId.ArbitrumMainnet]: [],
          [n.ChainId.OptimismMainnet]: [],
          [n.ChainId.PolygonMainnet]: [],
          [n.ChainId.WorldChainMainnet]: [],
          [n.ChainId.FraxtalMainnet]: [],
          [n.ChainId.ScrollMainnet]: [],
          [n.ChainId.InkMainnet]: [],
          [n.ChainId.Unichain]: [],
          [n.ChainId.SonicMainnet]: [],
          [n.ChainId.HemiMainnet]: [],
          [n.ChainId.ModeMainnet]: [],
          [n.ChainId.CornMainnet]: [],
          [n.ChainId.PlumeMainnet]: [],
          [n.ChainId.CampMainnet]: [],
        },
        s = (e, t, r, n) => {
          if (!r || !t || (d[n] && d[n].includes(e))) return [];
          let i = (0, a.wk)(r),
            o = g(i, null == t ? void 0 : t.totalAssets, t.allocation),
            f = v(i, t.rewards),
            s = { tokens: new Map() };
          return (
            o.tokens.size > 0
              ? o.tokens.forEach((e) => {
                  s = y(e, f, i.price);
                })
              : (s = f),
            (0, l.yN)('apr', Array.from(s.tokens.values()))
          );
        },
        u = (e, t) => {
          if (!t.price) return 1000n * BigInt(e);
          let r = ((0, i.safeParseUnits)('1000') * 10n ** BigInt(t.decimals)) / t.price;
          return n.MathLib.mulDivDown(e, r, (0, i.safeParseUnits)('1', t.decimals));
        },
        c = (e) => {
          let t,
            { market: r, loanAsset: n, type: i = 'borrow' } = e;
          if (!n || !r) return [];
          switch (i) {
            case 'borrow':
              t = b(r, n);
              break;
            case 'supply':
              t = h(r, n);
          }
          return (0, l.yN)('apr', Array.from(t.tokens.values()));
        },
        p = (e) => {
          let { loanToken: t, rewardToken: r, rewardsPerToken: a } = e,
            o = r.toUsd(a),
            l = t.toUsd((0, i.safeParseUnits)('1', t.decimals));
          return o && l ? n.MathLib.wDivDown(o, l) : null;
        },
        m = (e) => {
          let { loanToken: t, rewardToken: r, rewardsPerToken: n } = e,
            i = u(n, t),
            a = p({ loanToken: t, rewardToken: r, rewardsPerToken: n });
          return {
            rewardsPerToken: n,
            apr: a,
            rewardToken: r,
            proportional: { rate: i, isPriced: (0, o.isDefined)(t.price) },
          };
        },
        v = (e, t) => {
          let r = { tokens: new Map() };
          return (
            t &&
              t.forEach((t) => {
                t.amountPerSuppliedToken &&
                  0n !== t.amountPerSuppliedToken &&
                  (r = y(
                    m({
                      loanToken: e,
                      rewardToken: (0, a.wk)(t.asset),
                      rewardsPerToken: t.amountPerSuppliedToken,
                    }),
                    r,
                    e.price
                  ));
              }),
            r
          );
        },
        g = (e, t, r) => {
          let i = { tokens: new Map() };
          return (
            r &&
              r.map((r) => {
                var o, l, d;
                null == r ||
                  null === (d = r.market) ||
                  void 0 === d ||
                  null === (l = d.state) ||
                  void 0 === l ||
                  null === (o = l.rewards) ||
                  void 0 === o ||
                  o.map((o) => {
                    if (!o.amountPerSuppliedToken || 0n === o.amountPerSuppliedToken || !o.asset)
                      return;
                    let l = m({
                        loanToken: e,
                        rewardToken: (0, a.wk)(o.asset),
                        rewardsPerToken: o.amountPerSuppliedToken,
                      }),
                      d = (0, f.R)(t, r.supplyAssets);
                    if (!d) return;
                    let s = l.apr && n.MathLib.wMulDown(l.apr, d),
                      u = n.MathLib.wMulDown(l.proportional.rate, d);
                    i = y(
                      { ...l, apr: s, proportional: { ...l.proportional, rate: u } },
                      i,
                      e.price
                    );
                  });
              }),
            i
          );
        },
        b = (e, t) => {
          var r;
          let n = { tokens: new Map() };
          return (
            (null == e ? void 0 : null === (r = e.state) || void 0 === r ? void 0 : r.rewards) &&
              e.state.rewards.map((e) => {
                e.amountPerBorrowedToken &&
                  0n !== e.amountPerBorrowedToken &&
                  e.asset &&
                  (n = y(
                    m({
                      loanToken: t,
                      rewardToken: (0, a.wk)(e.asset),
                      rewardsPerToken: e.amountPerBorrowedToken,
                    }),
                    n,
                    t.price
                  ));
              }),
            n
          );
        },
        h = (e, t) => {
          var r;
          let n = { tokens: new Map() };
          return (
            (null == e ? void 0 : null === (r = e.state) || void 0 === r ? void 0 : r.rewards) &&
              e.state.rewards.map((e) => {
                e.amountPerSuppliedToken &&
                  0n !== e.amountPerSuppliedToken &&
                  e.asset &&
                  (n = y(
                    m({
                      loanToken: t,
                      rewardToken: (0, a.wk)(e.asset),
                      rewardsPerToken: e.amountPerSuppliedToken,
                    }),
                    n,
                    t.price
                  ));
              }),
            n
          );
        },
        y = (e, t, r) => {
          let { rewardToken: n, rewardsPerToken: i, proportional: a, apr: l } = e;
          if (t.tokens.has(n.address)) {
            let e = t.tokens.get(n.address),
              i = e.apr ? (l ? e.apr + l : e.apr) : l;
            t.tokens.set(n.address, {
              ...e,
              proportional: { isPriced: (0, o.isDefined)(r), rate: e.proportional.rate + a.rate },
              apr: i,
            });
          } else
            t.tokens.set(n.address, {
              rewardToken: n,
              rewardsPerToken: i,
              proportional: a,
              apr: l,
            });
          return t;
        },
        w = (e) => {
          if (e.apr) return o.format.percent.digits(2).unit('%').sign().of(e.apr, 18);
          if (e.proportional) {
            let { decimals: t } = e.rewardToken;
            return o.format.short.digits(2).sign().of(e.proportional.rate, t);
          }
        };
    },
    42418: function (e, t, r) {
      r.d(t, {
        Dt: function () {
          return n;
        },
        JJ: function () {
          return i;
        },
        yN: function () {
          return a;
        },
      });
      let n = (e, t) =>
          e || t
            ? e
              ? t
                ? 'string' == typeof e && 'string' == typeof t
                  ? e.localeCompare(t)
                  : 0
                : 1
              : -1
            : 0,
        i = (e, t) => (e || t ? (e ? (!t || e > t ? 1 : e < t ? -1 : 0) : -1) : 0),
        a = (e, t) =>
          t
            ? t.sort((t, r) =>
                t[e] ? (r[e] ? (t[e] && r[e] ? (t[e] > r[e] ? -1 : 1) : 0) : -1) : 1
              )
            : [];
    },
    75571: function (e, t, r) {
      r.d(t, {
        $L: function () {
          return d;
        },
        RY: function () {
          return s;
        },
      });
      var n = r(84196),
        i = r(75963),
        a = r(63171),
        o = r(13191),
        l = r(35047);
      let f = {
          [o.TransactionType.MarketBorrow]: 'Borrow',
          [o.TransactionType.MarketLiquidation]: 'Liquidation',
          [o.TransactionType.MarketRepay]: 'Repay',
          [o.TransactionType.MarketSupply]: 'Supply',
          [o.TransactionType.MarketSupplyCollateral]: 'Supply collateral',
          [o.TransactionType.MarketWithdraw]: 'Withdraw',
          [o.TransactionType.MarketWithdrawCollateral]: 'Withdraw collateral',
          [o.TransactionType.MetaMorphoDeposit]: 'Vault Deposit',
          [o.TransactionType.MetaMorphoFee]: 'Vault Fee',
          [o.TransactionType.MetaMorphoWithdraw]: 'Vault Withdraw',
          [o.TransactionType.MetaMorphoTransfer]: 'Vault Transfer',
        },
        d = (e) => {
          var t;
          return null !== (t = f[e]) && void 0 !== t ? t : e;
        };
      function s(e, t) {
        let { data: r, ...o } = e;
        if (!r) return e;
        let f = [r, (0, n.eC)(l.Time.timestamp(), { size: 4 })];
        if (t)
          try {
            if (((t = t.replace(/^(?!0x)/, '')), !(0, i.v)('0x'.concat(t))))
              throw Error('Calldata origin must consists of only hex characters');
            if (t.length > 8) throw Error('Calldata origin must be at most 8 characters long');
            f.push('0x'.concat(t));
          } catch (e) {
            console.warn('Invalid calldata origin:\n', e.name);
          }
        return { data: (0, a.SM)(f), ...o };
      }
    },
    81961: function (e, t, r) {
      r.d(t, {
        N: function () {
          return i;
        },
      });
      var n = r(16476);
      let i = (e) =>
        Array.isArray(e)
          ? e.map(i)
          : null != e && e.constructor === Object
            ? Object.fromEntries(
                Object.entries(e).map((e) => {
                  let [t, r] = e;
                  return [(0, n.Z)(t), i(r)];
                })
              )
            : e;
    },
    31374: function (e, t, r) {
      r.d(t, {
        S: function () {
          return o;
        },
        b: function () {
          return l;
        },
      });
      var n = r(77672),
        i = r(77187),
        a = r(88084);
      let o = (e, t) => {
          let { error: r, value: a } = t.validate(e, { abortEarly: !1 });
          return (
            r &&
              (i.Tb(r),
              r instanceof n.ValidationError &&
                console.error('Validation failed: '.concat(r.message), {
                  errorDetails: r.details,
                  data: e,
                }),
              console.error('An unexpected error occurred during validation', r)),
            a
          );
        },
        l = (e, t) => {
          let r = null;
          return (
            a.$e((n) => {
              n.addBreadcrumb({
                category: 'dataValidation',
                message: 'Validation failed',
                data: { errorDetails: e.details, data: t },
              }),
                (r = i.Tb(e));
            }),
            r
          );
        };
    },
    8937: function (e, t, r) {
      r.d(t, {
        G: function () {
          return a;
        },
        R: function () {
          return i;
        },
      });
      var n = r(40252);
      let i = (e, t) => (0n !== e ? n.MathLib.wDivDown(t, e) : 0n),
        a = (e, t) => (null == e ? void 0 : e.find((e) => e.market.uniqueKey === t));
    },
    40816: function (e, t, r) {
      r.d(t, {
        S: function () {
          return u;
        },
      });
      var n = r(392),
        i = r(59370),
        a = r(93800),
        o = r(40252),
        l = r(4565),
        f = r(25834),
        d = r(35047),
        s = r(49663);
      let u = (e) => {
        let {
            amount: t,
            bundlerAllowance: r,
            userAddress: u,
            chainId: c,
            erc2612Nonce: p,
            supportsSignatures: m = !0,
          } = e,
          { bundler3: v } = (0, o.getChainAddresses)(c);
        if (c !== o.ChainId.EthMainnet) return;
        let g = [],
          b = new f.ActionBundleRequirements();
        if (r < t) {
          if (m && null != p) {
            let e = d.Time.timestamp() + d.Time.s.from.h(24n),
              r = { type: 'permit', args: [u, s.rr.legacyMorphoToken, t, e, null, !0] };
            g.push(r),
              b.signatures.push({
                action: r,
                async sign(n) {
                  if (null != r.args[4]) return r.args[4];
                  let i = (0, l.getPermitTypedData)(
                      {
                        deadline: e,
                        owner: u,
                        nonce: p,
                        spender: v.generalAdapter1,
                        erc20: s.tV,
                        allowance: t,
                      },
                      c
                    ),
                    o = await (0, a.x)(n, { ...i, account: u });
                  return (r.args[4] = o);
                },
              });
          } else
            b.txs.push({
              type: 'erc20Approve',
              args: [s.rr.legacyMorphoToken, v.generalAdapter1, t],
              tx: {
                to: s.rr.legacyMorphoToken,
                data: (0, n.R)({
                  abi: i.Wo,
                  functionName: 'approve',
                  args: [v.generalAdapter1, t],
                }),
              },
            });
        }
        return (
          g.push(
            { type: 'erc20TransferFrom', args: [s.rr.legacyMorphoToken, t, v.generalAdapter1] },
            { type: 'morphoWrapperDepositFor', args: [u, t] }
          ),
          { actions: g, requirements: b }
        );
      };
    },
    88506: function (e, t, r) {
      r.d(t, {
        $: function () {
          return f;
        },
      });
      var n = r(40252),
        i = r(12556),
        a = r(725),
        o = r(89991),
        l = r(22683);
      let f = (e, t, r) => {
        let { account: f } = (0, o.Z_)(),
          { bundlerConfiguration: d } = (0, l.N)(),
          s = {
            ...d.publicAllocatorOptions,
            supplyTargetUtilization: {},
            maxWithdrawalUtilization: {},
            defaultMaxWithdrawalUtilization: n.MathLib.WAD,
          },
          u =
            f.address &&
            (null == t
              ? void 0
              : t.getMarketPublicReallocations(e, s).data.tryGetAccrualPosition(f.address, e)),
          c = (0, a.B9)({ lltv: null == u ? void 0 : u.market.params.lltv, marketId: e });
        if (!f.address || !c) return;
        let p =
          null == u
            ? void 0
            : u.market.getBorrowCapacityLimit(
                { collateral: u.collateral + r, borrowShares: u.borrowShares },
                { maxLtv: n.MathLib.wMulDown(c, i.JC) }
              );
        if (void 0 !== p) return { shares: 0n, assets: p.value };
      };
    },
    77458: function (e, t, r) {
      var n = r(12556);
      t.Z = (e, t, r, i) => (0, n.nR)({ dependencies: [e], requiredData: [t, r], isFetching: i });
    },
    19311: function (e, t, r) {
      r.d(t, {
        g: function () {
          return v;
        },
      });
      var n,
        i,
        a = r(58258),
        o = r(68612),
        l = r(13191),
        f = r(40252),
        d = r(12556),
        s = r(35047),
        u = r(725),
        c = r(96278),
        p = r(89991),
        m = r(42847);
      ((n = i || (i = {})).Liquidatable =
        'Can not complete the transaction as your position is liquidatable.'),
        (n.CloseToLTV = "You're close to being liquidated."),
        (n.HighUtilization = 'Utilization of the new market is >90%.'),
        (n.InsufficientLiquidity = "There isn't enough liquidity on the market."),
        (n.InsufficientCollateral = 'You cannot zap more than your current collateral position.'),
        (n.InsufficientBorrow = 'You cannot zap more than your current borrow position.');
      let v = (e) => {
        var t;
        let { initialState: r, finalState: n, operation: i, marketId: v, isNewMarket: g } = e,
          { account: b } = (0, p.Z_)(),
          { publicAllocatorOptions: h } = (0, c.B)(),
          { migratedCollateral: y, migratedBorrow: w } = (0, a.useMemo)(() => {
            if (!r) return { migratedCollateral: r, migratedBorrow: r };
            if (!(null == b ? void 0 : b.address)) return {};
            let e = (0, s.isDefined)(v) ? r.tryGetAccrualPosition(b.address, v) : void 0;
            return (0, s.isDefined)(e)
              ? {
                  migratedCollateral:
                    (null == i ? void 0 : i.collateralAssets) === o.zL
                      ? null == e
                        ? void 0
                        : e.collateral
                      : null == i
                        ? void 0
                        : i.collateralAssets,
                  migratedBorrow:
                    (null == i ? void 0 : i.borrowAssets) === o.zL
                      ? null == e
                        ? void 0
                        : e.borrowAssets
                      : null == i
                        ? void 0
                        : i.borrowAssets,
                }
              : {};
          }, [
            r,
            b.address,
            v,
            null == i ? void 0 : i.collateralAssets,
            null == i ? void 0 : i.borrowAssets,
          ]),
          x = (0, a.useMemo)(
            () => r && v && r.getMarketPublicReallocations(v, h).data.tryGetMarket(v),
            [r, v, h]
          ),
          A = (0, a.useMemo)(
            () => n && v && n.getMarketPublicReallocations(v, h).data.tryGetMarket(v),
            [n, v, h]
          ),
          T = (0, a.useMemo)(
            () => r && b.address && v && r.tryGetAccrualPosition(b.address, v),
            [r, b, v]
          ),
          Z = (0, a.useMemo)(
            () => n && b.address && v && n.tryGetAccrualPosition(b.address, v),
            [n, b, v]
          ),
          k = (0, m.z)({
            initialMarket: x,
            initialPosition: T,
            migratedBorrow: w,
            migratedCollateral: y,
            isNewMarket: g,
          }),
          q = (0, u.B9)({
            lltv:
              null !== (t = null == Z ? void 0 : Z.market.params.lltv) && void 0 !== t
                ? t
                : null == k
                  ? void 0
                  : k.market.params.lltv,
            marketId: null != v ? v : void 0,
          }),
          B = (0, a.useMemo)(() => {
            var e;
            let t =
              null !== (e = null == Z ? void 0 : Z.ltv) && void 0 !== e
                ? e
                : null == k
                  ? void 0
                  : k.ltv;
            if (t && q) return (0, d.M4)(t, q);
          }, [Z, k, q]),
          M = (0, a.useMemo)(() => {
            let e = (0, s.getValue)(null != Z ? Z : k, 'ltv');
            return (k && !k.isHealthy) || (e && q && e > q)
              ? {
                  level: l.WarningLevel.Red,
                  message: 'Can not complete the transaction as your position is liquidatable.',
                  color: 'text.interactive.error',
                }
              : e && q && B
                ? {
                    level: l.WarningLevel.Yellow,
                    message: "You're close to being liquidated.",
                    color: 'text.interactive.warning',
                  }
                : void 0;
          }, [Z, q, k, B]),
          S = (0, a.useMemo)(() => {
            if (T && null != y && !g && T.collateral < y)
              return {
                level: l.WarningLevel.Red,
                message: 'You cannot zap more than your current collateral position.',
                color: 'text.interactive.error',
              };
          }, [T, g, y]),
          P = (0, a.useMemo)(() => {
            if (T && null != w && !g && T.borrowAssets < w)
              return {
                level: l.WarningLevel.Red,
                message: 'You cannot zap more than your current borrow position.',
                color: 'text.interactive.error',
              };
          }, [T, g, w]),
          I = (0, a.useMemo)(() => {
            if (null == k ? void 0 : k.market) {
              if (k.market.liquidity < 0n)
                return {
                  level: l.WarningLevel.Red,
                  message: "There isn't enough liquidity on the market.",
                  color: 'text.interactive.error',
                };
              if (g && k.market.utilization > f.AdaptiveCurveIrmLib.TARGET_UTILIZATION)
                return {
                  level: l.WarningLevel.Yellow,
                  message: 'Utilization of the new market is >90%.',
                  color: 'text.interactive.warning',
                };
            }
          }, [g, k]);
        return {
          initialMarketData: x,
          finalMarketData: A,
          liquidityError: I,
          previewedPosition: k,
          previewedMarket: null == k ? void 0 : k.market,
          initialPosition: T,
          finalPosition: Z,
          errors: { borrowError: P, collateralError: S, ltvError: M, liquidityError: I },
        };
      };
    },
    89672: function (e, t, r) {
      r.d(t, {
        p: function () {
          return o;
        },
      });
      var n = r(58258),
        i = r(82803),
        a = r(4205);
      let o = (e) => {
        let { marketId: t, position: r } = e,
          {
            operation: o,
            index: l,
            isNew: f,
            error: d,
          } = (0, n.useMemo)(
            () => ({
              isNew: !0,
              index: 0,
              operation: {
                id: crypto.randomUUID(),
                type: i.H.InterfaceOperationType.migrateBorrow,
                marketId: t,
                loanAssets: 0n,
                loanShares: 0n,
                collateralAssets: 0n,
                position: r,
                options: { isMax: [] },
              },
              error: void 0,
            }),
            [t, r]
          ),
          s = (0, a.f)(l),
          u = (0, a.f)(l + 1);
        return { operation: o, index: l, isNew: f, error: d, initialState: s, finalState: u };
      };
    },
    9635: function (e, t, r) {
      r.d(t, {
        M: function () {
          return v;
        },
        u: function () {
          return i;
        },
      });
      var n,
        i,
        a = r(58258),
        o = r(40252),
        l = r(12556),
        f = r(82803),
        d = r(96278),
        s = r(76631),
        u = r(89991),
        c = r(88506),
        p = r(77458),
        m = r(89672);
      ((n = i || (i = {})).InsufficientLiquidity = 'Insufficient liquidity'),
        (n.HighUtilization = 'High utilization'),
        (n.Liquidatable = 'Your position is at risk of liquidation'),
        (n.CloseToLTV = 'Close to LTV');
      let v = (e) => {
        var t, r, n, i, v, g;
        let { marketId: b, position: h, initialOperation: y } = e,
          { account: w, targetChainId: x } = (0, u.Z_)(),
          A = (0, d.B)(),
          { operation: T, initialState: Z } = (0, m.p)({ marketId: b, position: h }),
          [k, q] = (0, a.useState)(
            null !== (t = null == y ? void 0 : y.collateralAssets) && void 0 !== t
              ? t
              : T.collateralAssets
          ),
          [B, M] = (0, a.useState)(
            null !== (r = null == y ? void 0 : y.loanAssets) && void 0 !== r ? r : T.loanAssets
          ),
          [S, P] = (0, a.useState)(
            null !==
              (i =
                null !==
                  (n =
                    null == y
                      ? void 0
                      : y.options.isMax.includes(f.H.InterfaceOperationType.migrateSupply)) &&
                void 0 !== n
                  ? n
                  : T.options.isMax.includes(f.H.InterfaceOperationType.migrateSupply)) &&
              void 0 !== i &&
              i
          ),
          [I, R] = (0, a.useState)(
            null !==
              (g =
                null !==
                  (v =
                    null == y
                      ? void 0
                      : y.options.isMax.includes(f.H.InterfaceOperationType.migrateBorrow)) &&
                void 0 !== v
                  ? v
                  : T.options.isMax.includes(f.H.InterfaceOperationType.migrateBorrow)) &&
              void 0 !== g &&
              g
          ),
          C = (0, a.useMemo)(() => (null == h ? void 0 : h.migratablePosition.maxWithdraw), [h]),
          X = (0, c.$)(b, Z.data, k),
          L = (0, a.useMemo)(() => {
            if (h && X) return o.MathLib.min(h.migratablePosition.maxRepay.value, X.assets);
          }, [h, X]),
          F = (0, p.Z)(
            w.isConnected,
            null == C ? void 0 : C.value,
            L,
            Z.isFetchingAny || Z.isPending
          ),
          O = (0, a.useMemo)(
            () => ({
              type: f.H.InterfaceOperationType.migrateBorrow,
              marketId: b,
              collateralAssets: k,
              loanAssets: B,
              loanShares: 0n,
              id: T.id,
              options: {
                isMax: [
                  ...(S ? [f.H.InterfaceOperationType.migrateSupply] : []),
                  ...(I ? [f.H.InterfaceOperationType.migrateBorrow] : []),
                ],
              },
              position: h,
            }),
            [k, B, T.id, S, I, b, h]
          ),
          E = (0, a.useMemo)(() => {
            if (h) return l.FW.getProtocol({ name: h.migratablePosition.protocol, chainId: x });
          }, [h, x]),
          D = (0, a.useMemo)(
            () =>
              Z.data &&
              b &&
              Z.data.getMarketPublicReallocations(b, A.publicAllocatorOptions).data.tryGetMarket(b),
            [Z, b, A]
          ),
          K = (0, a.useMemo)(() => {
            var e;
            if (h && D && 0n !== O.collateralAssets)
              return {
                collateralAmount: O.collateralAssets,
                borrowAmount: O.loanAssets,
                marketTo: D.params,
                minSharePrice:
                  O.loanAssets > 0n
                    ? o.MathLib.mulDivDown(
                        O.loanAssets,
                        o.MathLib.wToRay(o.MathLib.WAD - (0, s.Js)(D.rateAtTarget)),
                        null !== (e = D.toBorrowShares(O.loanAssets)) && void 0 !== e ? e : 0n
                      )
                    : 0n,
              };
          }, [D, O.collateralAssets, O.loanAssets, h]),
          _ = (0, a.useMemo)(() => {
            if (h && K)
              try {
                return h.migratablePosition.getMigrationTx(
                  K,
                  !w.isContract && !!(null == E ? void 0 : E.supportSignature)
                );
              } catch (e) {
                return;
              }
          }, [K, h, w.isContract, null == E ? void 0 : E.supportSignature]),
          U = (0, a.useCallback)((e) => {
            P(!1), q(e);
          }, []),
          H = (0, a.useCallback)((e) => {
            R(!1), M(e);
          }, []),
          z = (0, a.useCallback)(
            (e) => {
              if (e) {
                if ((null == C ? void 0 : C.value) == null) return;
                q(C.value);
              }
              P(e);
            },
            [null == C ? void 0 : C.value]
          ),
          V = (0, a.useCallback)(
            (e) => {
              if (e) {
                if (null == L) return;
                M(L);
              }
              R(e);
            },
            [L]
          );
        return {
          collateralAssets: k,
          loanAssets: B,
          isMaxCollateral: S,
          isMaxLoan: I,
          args: K,
          bundle: _,
          localOperation: O,
          isLoading: F,
          maxCollateral: C,
          maxLoan: L,
          initialState: Z,
          protocol: E,
          setInputCollateralAmount: U,
          setInputLoanAmount: H,
          setIsMaxCollateral: z,
          setIsMaxLoan: V,
        };
      };
    },
    60145: function (e, t, r) {
      r.d(t, {
        K: function () {
          return m;
        },
      });
      var n = r(58258),
        i = r(13191),
        a = r(40252),
        o = r(12556),
        l = r(54655),
        f = r(54775),
        d = r(725),
        s = r(96278),
        u = r(89991),
        c = r(42847),
        p = r(9635);
      let m = (e) => {
        var t, r, m, v, g, b;
        let {
            initialState: h,
            finalState: y,
            operation: w,
            marketId: x,
            position: A,
            protocol: T,
          } = e,
          { account: Z } = (0, u.Z_)(),
          k = (0, s.B)(),
          q = (0, n.useMemo)(
            () => ({
              ...k.publicAllocatorOptions,
              supplyTargetUtilization: {},
              maxWithdrawalUtilization: {},
              defaultMaxWithdrawalUtilization: a.MathLib.WAD,
            }),
            [k]
          ),
          { migratedCollateral: B, migratedBorrow: M } = (0, n.useMemo)(
            () => ({
              migratedCollateral: null == w ? void 0 : w.collateralAssets,
              migratedBorrow: null == w ? void 0 : w.loanAssets,
            }),
            [null == w ? void 0 : w.collateralAssets, null == w ? void 0 : w.loanAssets]
          ),
          S = (0, n.useMemo)(
            () => h && x && h.getMarketPublicReallocations(x, q).data.tryGetMarket(x),
            [h, x, q]
          ),
          P = (0, n.useMemo)(
            () => y && x && y.getMarketPublicReallocations(x, q).data.tryGetMarket(x),
            [y, x, q]
          ),
          I = (0, n.useMemo)(
            () => h && Z.address && x && h.tryGetAccrualPosition(Z.address, x),
            [h, Z, x]
          ),
          R = (0, n.useMemo)(
            () => y && Z.address && x && y.tryGetAccrualPosition(Z.address, x),
            [y, Z, x]
          ),
          C = (0, c.z)({
            initialMarket: S,
            initialPosition: I,
            migratedBorrow: M,
            migratedCollateral: B,
            isNewMarket: !0,
          }),
          X = (0, d.B9)({
            lltv:
              null !== (t = null == R ? void 0 : R.market.params.lltv) && void 0 !== t
                ? t
                : null == C
                  ? void 0
                  : C.market.params.lltv,
            marketId: null != x ? x : void 0,
          }),
          L = (0, n.useMemo)(() => {
            var e;
            let t =
              null !== (e = null == R ? void 0 : R.ltv) && void 0 !== e
                ? e
                : null == C
                  ? void 0
                  : C.ltv;
            if (t && X) return (0, o.M4)(t, X);
          }, [R, C, X]),
          F = (0, n.useMemo)(() => {
            let e = null == A ? void 0 : A.migratablePosition.getLtv({ withdrawn: B, repaid: M });
            if (
              e &&
              (null == A ? void 0 : A.migratablePosition.lltv) &&
              (0, o.M4)(e, A.migratablePosition.lltv)
            )
              return {
                level: i.WarningLevel.Red,
                message: p.u.Liquidatable,
                color: 'text.interactive.error',
              };
          }, [A, B, M]),
          O = (0, n.useMemo)(() => {
            if (A && M && M > A.migratablePosition.maxRepay.value) {
              let e = l.$0l.commas
                .digits(2)
                .unit(A.migratablePosition.loanToken.symbol)
                .of(A.migratablePosition.maxRepay.value, A.migratablePosition.loanToken.decimals);
              switch (A.migratablePosition.maxRepay.limiter) {
                case f.BorrowMigrationLimiter.position:
                  return {
                    reason: f.BorrowMigrationLimiter.position,
                    message: 'Limited by balance: '.concat(e),
                    level: i.WarningLevel.Red,
                    color: 'text.interactive.error',
                  };
                case f.BorrowMigrationLimiter.repayPaused:
                  return {
                    reason: f.BorrowMigrationLimiter.repayPaused,
                    message: 'Repayment is paused',
                    level: i.WarningLevel.Red,
                    color: 'text.interactive.error',
                  };
              }
            }
          }, [M, A]),
          E = (0, n.useMemo)(() => {
            if (A && B && B > A.migratablePosition.maxWithdraw.value) {
              let e = l.$0l.commas
                .digits(2)
                .unit(A.migratablePosition.collateralToken.symbol)
                .of(
                  A.migratablePosition.maxWithdraw.value,
                  A.migratablePosition.collateralToken.decimals
                );
              switch (A.migratablePosition.maxWithdraw.limiter) {
                case f.SupplyMigrationLimiter.position:
                  return {
                    reason: f.SupplyMigrationLimiter.position,
                    message: 'Limited by balance: '.concat(e),
                    level: i.WarningLevel.Red,
                    color: 'text.interactive.error',
                  };
                case f.SupplyMigrationLimiter.borrowPaused:
                  return {
                    reason: f.SupplyMigrationLimiter.borrowPaused,
                    message: 'Borrowing is paused',
                    level: i.WarningLevel.Red,
                    color: 'text.interactive.error',
                  };
                case f.SupplyMigrationLimiter.liquidity:
                  return {
                    reason: f.SupplyMigrationLimiter.liquidity,
                    message: 'Limited by liquidity on '
                      .concat(null == T ? void 0 : T.name, ': ')
                      .concat(e),
                    level: i.WarningLevel.Red,
                    color: 'text.interactive.error',
                  };
                case f.SupplyMigrationLimiter.protocolCap:
                  return {
                    reason: f.SupplyMigrationLimiter.protocolCap,
                    message: 'Limited by protocol cap: '.concat(e),
                    level: i.WarningLevel.Red,
                    color: 'text.interactive.error',
                  };
                case f.SupplyMigrationLimiter.withdrawPaused:
                  return {
                    reason: f.SupplyMigrationLimiter.withdrawPaused,
                    message: 'Withdrawal is paused',
                    level: i.WarningLevel.Red,
                    color: 'text.interactive.error',
                  };
              }
            }
          }, [B, A, null == T ? void 0 : T.name]),
          D = (0, n.useMemo)(() => {
            if (!C) return;
            let e = C.ltv;
            return (C && !C.isHealthy) || (e && X && e > X)
              ? {
                  level: i.WarningLevel.Red,
                  message: p.u.Liquidatable,
                  color: 'text.interactive.error',
                }
              : e && X && L
                ? {
                    level: i.WarningLevel.Yellow,
                    message: p.u.CloseToLTV,
                    color: 'text.interactive.warning',
                  }
                : void 0;
          }, [C, X, L]),
          K = (0, n.useMemo)(() => {
            if (null == C ? void 0 : C.market) {
              if (C.market.liquidity < 0n)
                return {
                  level: i.WarningLevel.Red,
                  message: p.u.InsufficientLiquidity,
                  color: 'text.interactive.error',
                };
              if (C.market.utilization > a.AdaptiveCurveIrmLib.TARGET_UTILIZATION)
                return {
                  level: i.WarningLevel.Yellow,
                  message: p.u.HighUtilization,
                  color: 'text.interactive.warning',
                };
            }
          }, [null == C ? void 0 : C.market]),
          _ = (0, n.useMemo)(
            () =>
              [
                null == O ? void 0 : O.level,
                null == E ? void 0 : E.level,
                null == D ? void 0 : D.level,
                null == K ? void 0 : K.level,
                null == F ? void 0 : F.level,
              ].some((e) => e === i.WarningLevel.Red),
            [O, E, D, K, F]
          );
        return {
          initialMarketData: S,
          finalMarketData: P,
          liquidityError: K,
          previewedPosition: C,
          previewedMarket: null == C ? void 0 : C.market,
          initialPosition: I,
          finalPosition: R,
          errors: {
            message:
              null !==
                (b =
                  null !==
                    (g =
                      null !==
                        (v =
                          null !==
                            (m =
                              null !== (r = null == O ? void 0 : O.message) && void 0 !== r
                                ? r
                                : null == E
                                  ? void 0
                                  : E.message) && void 0 !== m
                            ? m
                            : null == D
                              ? void 0
                              : D.message) && void 0 !== v
                        ? v
                        : null == K
                          ? void 0
                          : K.message) && void 0 !== g
                    ? g
                    : null == F
                      ? void 0
                      : F.message) && void 0 !== b
                ? b
                : void 0,
            borrowError: O,
            collateralError: E,
            ltvError: D,
            liquidityError: K,
            migratablePositionLtvError: F,
          },
          isBlocked: _,
        };
      };
    },
    73057: function (e, t, r) {
      var n = r(58258),
        i = r(54655);
      t.Z = (e, t, r, a) =>
        (0, n.useMemo)(() => {
          var n, o;
          if ((0, i.Czs)(e) || !t || !(null == a ? void 0 : a.address))
            return {
              initialData: { position: void 0, balance: void 0 },
              finalData: { position: void 0, balance: void 0 },
            };
          let [l, f] = t,
            d = l.getBundleBalance(e, r),
            s = l.getBundleBalance(e, a.address),
            u =
              null == l
                ? void 0
                : null === (n = l.tryGetAccrualVault(r)) || void 0 === n
                  ? void 0
                  : n.accrueInterest(l.block.timestamp),
            c = null == f ? void 0 : f.getBundleBalance(e, r),
            p = null == f ? void 0 : f.getBundleBalance(e, a.address),
            m =
              null == f
                ? void 0
                : null === (o = f.tryGetAccrualVault(r)) || void 0 === o
                  ? void 0
                  : o.accrueInterest(f.block.timestamp);
          return {
            initialData: {
              position: null == u ? void 0 : u.toAssets(null != d ? d : 0n),
              balance: s,
            },
            finalData: {
              position: null == m ? void 0 : m.toAssets(null != c ? c : 0n),
              balance: p,
            },
          };
        }, [t, e, r, null == a ? void 0 : a.address]);
    },
    42847: function (e, t, r) {
      r.d(t, {
        z: function () {
          return o;
        },
      });
      var n = r(58258),
        i = r(40252);
      let a = (e) => {
          let { initialMarket: t, migratedBorrow: r, isNewMarket: a } = e;
          return (0, n.useMemo)(() => {
            if (!t || null == r) return null;
            let e = t.totalBorrowShares + (a ? 1n : -1n) * t.toBorrowShares(r),
              n = t.totalBorrowAssets + (a ? 1n : -1n) * r;
            return new i.Market({
              ...t,
              totalBorrowShares: i.MathLib.max(e, 0n),
              totalBorrowAssets: i.MathLib.max(n, 0n),
            });
          }, [t, r, a]);
        },
        o = (e) => {
          let {
              initialMarket: t,
              initialPosition: r,
              migratedCollateral: o,
              migratedBorrow: l,
              isNewMarket: f,
            } = e,
            d = a({ initialMarket: t, migratedBorrow: l, isNewMarket: f });
          return (0, n.useMemo)(() => {
            if (!d || !r || null == o) return null;
            let e = r.collateral + (f ? 1n : -1n) * (null != o ? o : 1n),
              t = d.toBorrowShares(r.borrowAssets + (f ? 1n : -1n) * (null != l ? l : 1n));
            return new i.AccrualPosition(
              { ...r, collateral: i.MathLib.max(e, 0n), borrowShares: i.MathLib.max(t, 0n) },
              d
            );
          }, [r, o, l, f, d]);
        };
    },
    5469: function (e, t, r) {
      r.d(t, {
        z: function () {
          return O;
        },
        H: function () {
          return K;
        },
      });
      var n = r(58258),
        i = r(45842),
        a = r(30785),
        o = r(40252),
        l = r(12556),
        f = r(18313),
        d = r(26726),
        s = r(89991),
        u = r(55412),
        c = r(3245),
        p = r(63658),
        m = r(24387);
      function v() {
        let e = (0, u._)([
          '\n  query GetRewardsMetadata($assetsAddresses: [String!]!) {\n    rewardsTokens: assets(\n      first: 1000\n      where: { address_in: $assetsAddresses }\n    ) {\n      items {\n        ...simpleAssetFields\n      }\n    }\n  }\n  ',
          '\n',
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      let g = {},
        b = (0, c.Ps)(v(), m.G);
      var h = r(49663),
        y = r(73529),
        w = r(81961),
        x = r(31374);
      let A = (e) =>
          y.Z.object({
            user: y.Z.address().required(),
            asset: y.Z.object({
              id: y.Z.string().required(),
              address: y.Z.address().required(),
              chainId: y.Z.number().valid(e).required(),
            })
              .unknown(!0)
              .required(),
            distributor: y.Z.object({
              id: y.Z.string().required(),
              address: y.Z.address().required(),
              chainId: y.Z.number().valid(e).required(),
            })
              .unknown(!0)
              .required(),
            claimable: y.Z.bigint().required(),
            proof: y.Z.array().items(y.Z.bytes32String()).required(),
            txData: y.Z.string(),
          }).unknown(!0),
        T = (e) => y.Z.array().items(A(e)),
        Z = async function (e, t) {
          var r;
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!e || !t) return [];
          let i = ''
            .concat(f.clientEnvs.NEXT_PUBLIC_REWARDS_API_URL, '/v1/users/')
            .concat(e, '/distributions?trusted=true&chain_id=')
            .concat(t);
          n && (i += '&noCache='.concat(Date.now().toString()));
          let a = await fetch(i),
            o = await a.json();
          return (0, x.S)(
            null === (r = (0, w.N)(o.data)) || void 0 === r
              ? void 0
              : r.filter((e) => {
                  let { error: r } = A(t).validate(e, { abortEarly: !1 });
                  if (r) {
                    let t = (0, x.b)(r, e);
                    console.error(
                      'Validation failed for rewards distribution. Error code: '.concat(t)
                    );
                  }
                  return !r;
                }),
            T(t)
          );
        };
      var k = r(77672),
        q = r.n(k),
        B = r(50566);
      let M = q().object({
          id: q().string().required(),
          type: q().string().valid('ETHERSCAN').required(),
          url: q().string().uri().required(),
          chainId: q().number().required(),
        }),
        S = q().object({
          id: q().number().required(),
          name: q().string().required(),
          icon: q().string().uri().required(),
          Explorer: q().array().items(M).required(),
        }),
        P = q().object({
          address: q().string().required(),
          chainId: q().number().required(),
          symbol: q().string().required(),
          decimals: q().number().required(),
          price: q().number().allow(null),
        }),
        I = q().object({
          reason: q().string().required(),
          amount: q().string().required(),
          claimed: q().string().required(),
          pending: q().string().required(),
          campaignId: q().string().required(),
        }),
        R = q().object({
          root: q().string().required(),
          recipient: q().string().required(),
          amount: q().string().required(),
          claimed: q().string().required(),
          pending: q().string().required(),
          proofs: q().array().items(q().string()).required(),
          token: P.required(),
          breakdowns: q().array().items(I).required(),
        }),
        C = q().object({ chain: S.required(), rewards: q().array().items(R).required() }),
        X = (0, B.S)('https://api.merkl.xyz').v4,
        L = async (e, t) => {
          var r;
          if (!e || !t) return [];
          let n = await X.users({ address: e }).rewards.get({ query: { chainId: t } });
          return (
            await (0, x.S)(
              null == n
                ? void 0
                : null === (r = n.data) || void 0 === r
                  ? void 0
                  : r.filter((e) => {
                      let { error: t } = C.validate(e, { abortEarly: !1 });
                      if (t) {
                        let r = (0, x.b)(t, e);
                        console.error(
                          'Validation failed for rewards merkl. Error code: '.concat(r)
                        );
                      }
                      return !t;
                    }),
              q().array().items(C)
            ),
            null == n ? void 0 : n.data
          );
        };
      var F = r(81066);
      let O =
          'https://app.safe.global/share/safe-app?appUrl=https%3A%2F%2Fcommunity.safe.global&chain=eth',
        E = {
          MORPHO_LEGACY: { label: 'Legacy Rewards Program' },
          MORPHO_CURRENT: {
            label: 'Uniform Rewards Program',
            href: 'https://forum.morpho.org/t/mip65-new-scalable-rewards-model/617',
          },
          MORPHO_SAFE: { label: 'Safe Rewards Campaign' },
          POINTS: { label: 'Points' },
        },
        D = [h.rr.legacyMorphoToken, h.rr.deprecatedMorphoToken],
        K = () => {
          var e, t;
          let { account: r, targetChainId: u } = (0, s.Z_)(),
            c = (0, d.nh)(d.TP.MERKL_REWARD),
            m = (0, a.h)({
              queries: [
                {
                  queryKey: ['rewards-morpho', r.address, u],
                  queryFn: async () => (0, F.AH)(r.address, u, !0),
                },
                {
                  queryKey: ['distributions', r.address, u],
                  queryFn: async () => Z(r.address, u, !0),
                },
                {
                  queryKey: ['rewards-merkl', r.address, u],
                  queryFn: async () =>
                    L(r.address, [
                      ...f.Cq.AVAILABLE_CHAIN_IDS.map((e) => e.toString()),
                      o.ChainId.OptimismMainnet.toString(),
                    ]),
                  enabled: c,
                },
              ],
            }),
            [v, y, w] = m,
            x = (0, n.useCallback)(() => {
              m[0].refetch(), m[1].refetch(), m[2].refetch();
            }, [m]),
            A = (0, n.useMemo)(
              () =>
                w.data
                  ? w.data.flatMap((e) => {
                      let { rewards: t } = e;
                      return t;
                    })
                  : w.data,
              [w.data]
            ),
            T = (0, n.useMemo)(() => {
              var e;
              return v.data
                ? null === (e = v.data) || void 0 === e
                  ? void 0
                  : e.filter((e) => {
                      let t =
                          e.forSupply &&
                          (e.forSupply.claimableNext > 0n || e.forSupply.claimableNow > 0n),
                        r =
                          e.forBorrow &&
                          (e.forBorrow.claimableNext > 0n || e.forBorrow.claimableNow > 0n),
                        n =
                          e.forCollateral &&
                          (e.forCollateral.claimableNext > 0n || e.forCollateral.claimableNow > 0n),
                        i = e.amount && (e.amount.claimableNext > 0n || e.amount.claimableNow > 0n),
                        a = !1;
                      return (
                        'program' in e &&
                          (a =
                            '0x0000000000000000000000000000000000000001' ===
                            e.program.distributor.address),
                        (t || r || n || i) && !a
                      );
                    })
                : v.data;
            }, [v.data]),
            k = (0, n.useMemo)(() => {
              var e, t, r;
              if (v.isLoading || y.isLoading || w.isLoading) return;
              let n = Array.from(
                new Set(
                  null == T
                    ? void 0
                    : T.map((e) => {
                        let { asset: t } = e;
                        return t.address;
                      })
                        .concat(
                          null !==
                            (t =
                              null === (e = y.data) || void 0 === e
                                ? void 0
                                : e.map((e) => {
                                    let { asset: t } = e;
                                    return t.address;
                                  })) && void 0 !== t
                            ? t
                            : []
                        )
                        .concat(
                          null !== (r = null == A ? void 0 : A.map((e) => e.token.address)) &&
                            void 0 !== r
                            ? r
                            : []
                        )
                )
              );
              return (
                D.forEach((e) => {
                  n.includes(e) && !n.includes(h.rr.morphoToken) && n.push(h.rr.morphoToken);
                }),
                n
              );
            }, [T, y.data, A, v.isLoading, y.isLoading, w.isLoading]),
            {
              data: q,
              error: B,
              loading: M,
            } = (function (e) {
              let t = { ...g, ...e };
              return p.aM(b, t);
            })({
              variables: { assetsAddresses: null != k ? k : [] },
              skip: !(null == k ? void 0 : k.length),
            }),
            S = (0, n.useMemo)(
              () =>
                r.address
                  ? v.isLoading || y.isLoading || w.isLoading
                    ? void 0
                    : B || !q
                      ? {
                          distributions: y.data,
                          rewardsMorpho:
                            null == T ? void 0 : T.map((e) => ({ ...e, metadata: null })),
                          rewardsMerkl:
                            null == A ? void 0 : A.map((e) => ({ ...e, metadata: null })),
                        }
                      : {
                          distributions: y.data,
                          rewardsMorpho:
                            null == T
                              ? void 0
                              : T.map((e) => {
                                  var t, r;
                                  let n;
                                  let i =
                                    ((n = null),
                                    D.includes(e.asset.address) &&
                                      (n =
                                        null === (r = q.rewardsTokens.items) || void 0 === r
                                          ? void 0
                                          : r.find((e) => e.address === h.rr.morphoToken)),
                                    {
                                      assetPriced: n,
                                      asset:
                                        null === (t = q.rewardsTokens.items) || void 0 === t
                                          ? void 0
                                          : t.find((t) => t.address === e.asset.address),
                                    });
                                  return { ...e, metadata: { assets: i } };
                                }),
                          rewardsMerkl:
                            null == A
                              ? void 0
                              : A.map((e) => {
                                  var t;
                                  let r =
                                    null === (t = q.rewardsTokens.items) || void 0 === t
                                      ? void 0
                                      : t.find((t) => t.address === e.token.address);
                                  return { ...e, metadata: { asset: r } };
                                }),
                        }
                  : null,
              [r.address, y.data, T, A, B, q, v.isLoading, y.isLoading, w.isLoading]
            ),
            P = (0, n.useMemo)(() => {
              var e;
              return (
                null == S
                  ? void 0
                  : null === (e = S.rewardsMorpho) || void 0 === e
                    ? void 0
                    : e.some(F.JD)
              )
                ? [
                    {
                      type: 'safe',
                      claimable: { amount: null, amountUsd: null },
                      accruing: { amount: null, amountUsd: null },
                      rewardToken: {
                        token: (0, l.wk)({
                          address: i.DR,
                          decimals: 18,
                          symbol: 'SAFE',
                          name: 'SAFE',
                          chain: { id: 1 },
                          logoURI: 'https://cdn.morpho.org/assets/logos/safe.svg',
                        }),
                        badges: [E.POINTS],
                      },
                    },
                  ]
                : [];
            }, [null == S ? void 0 : S.rewardsMorpho]),
            I = (0, n.useMemo)(() => {
              var e;
              if (!S) return [];
              let t = new Map();
              return (
                null == S ||
                  null === (e = S.rewardsMorpho) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    var r, n, i, a, o, f, d, s, u, c, p, m, v, g, b, y, w, x, A;
                    let T = ''.concat(e.asset.address),
                      Z = (0, l.wk)(
                        null !==
                          (p =
                            null === (r = e.metadata) || void 0 === r
                              ? void 0
                              : r.assets.assetPriced) && void 0 !== p
                          ? p
                          : null === (n = e.metadata) || void 0 === n
                            ? void 0
                            : n.assets.asset
                      ),
                      k =
                        (null !==
                          (m =
                            null === (i = e.forSupply) || void 0 === i
                              ? void 0
                              : i.claimableNext) && void 0 !== m
                          ? m
                          : 0n) +
                        (null !==
                          (v =
                            null === (a = e.forBorrow) || void 0 === a
                              ? void 0
                              : a.claimableNext) && void 0 !== v
                          ? v
                          : 0n) +
                        (null !==
                          (g =
                            null === (o = e.forCollateral) || void 0 === o
                              ? void 0
                              : o.claimableNext) && void 0 !== g
                          ? g
                          : 0n) +
                        (null !==
                          (b =
                            null === (f = e.amount) || void 0 === f ? void 0 : f.claimableNext) &&
                        void 0 !== b
                          ? b
                          : 0n),
                      q = null == Z ? void 0 : Z.toUsd(k),
                      B =
                        (null !==
                          (y =
                            null === (d = e.forSupply) || void 0 === d ? void 0 : d.claimableNow) &&
                        void 0 !== y
                          ? y
                          : 0n) +
                        (null !==
                          (w =
                            null === (s = e.forBorrow) || void 0 === s ? void 0 : s.claimableNow) &&
                        void 0 !== w
                          ? w
                          : 0n) +
                        (null !==
                          (x =
                            null === (u = e.forCollateral) || void 0 === u
                              ? void 0
                              : u.claimableNow) && void 0 !== x
                          ? x
                          : 0n) +
                        (null !==
                          (A = null === (c = e.amount) || void 0 === c ? void 0 : c.claimableNow) &&
                        void 0 !== A
                          ? A
                          : 0n),
                      M = null == Z ? void 0 : Z.toUsd(B);
                    if (t.has(T)) {
                      let e = t.get(T);
                      return (
                        (e.accruing.amount += k),
                        (e.accruing.amountUsd += null != q ? q : 0n),
                        (e.claimable.amount += B),
                        (e.claimable.amountUsd += null != M ? M : 0n),
                        t.set(T, e)
                      );
                    }
                    if (!Z) return;
                    let S = [];
                    e.asset.address === h.rr.legacyMorphoToken &&
                      (e.type === F.Ii.Market || e.type === F.Ii.Vault) &&
                      S.push(E.MORPHO_LEGACY),
                      e.type === F.Ii.Airdrop && S.push(E.MORPHO_SAFE),
                      e.type === F.Ii.Uniform && S.push(E.MORPHO_CURRENT);
                    let P = {
                      type: e.type,
                      claimable: { amount: B, amountUsd: null != M ? M : 0n, token: Z },
                      accruing: { amount: k, amountUsd: null != q ? q : 0n, token: Z },
                      rewardToken: { token: Z, badges: S },
                    };
                    t.set(T, P);
                  }),
                [...t.values(), ...P]
              );
            }, [S, P]),
            R = (0, n.useMemo)(() => {
              var e;
              if (!S) return [];
              let t = new Map();
              return (
                null == S ||
                  null === (e = S.rewardsMerkl) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    var r, n, i;
                    let a = ''.concat(e.token.address),
                      o = (null === (r = e.metadata) || void 0 === r ? void 0 : r.asset)
                        ? (0, l.wk)({
                            ...(null === (n = e.metadata) || void 0 === n ? void 0 : n.asset),
                            priceUsd: e.token.price,
                          })
                        : (0, l.wk)({
                            address: e.token.address,
                            symbol: e.token.symbol,
                            name: null !== (i = e.token.name) && void 0 !== i ? i : e.token.symbol,
                            decimals: e.token.decimals,
                            chain: { id: e.token.chainId },
                            logoURI: null,
                            priceUsd: e.token.price,
                          }),
                      f = BigInt(e.amount) - BigInt(e.claimed),
                      d = null == o ? void 0 : o.toUsd(f);
                    if (!f) return;
                    let s = BigInt(e.pending),
                      u = null == o ? void 0 : o.toUsd(s);
                    if (t.has(a)) {
                      let e = t.get(a);
                      return (
                        (e.accruing.amount += s),
                        (e.accruing.amountUsd += null != u ? u : 0n),
                        (e.claimable.amount += f),
                        (e.claimable.amountUsd += null != d ? d : 0n),
                        t.set(a, e)
                      );
                    }
                    t.set(a, {
                      type: F.Ii.Merkl,
                      claimable: { amount: f, amountUsd: d, token: o },
                      accruing: { amount: s, amountUsd: u, token: o },
                      rewardToken: { token: o },
                    });
                  }),
                [...t.values()]
              );
            }, [S]),
            C = (0, n.useMemo)(() => {
              let e = new Map(),
                t = (t) => {
                  let r = t.rewardToken.token.address;
                  if (e.has(r)) {
                    var n, i, a, o, l, f, d, s;
                    let u = structuredClone(e.get(r));
                    (u.accruing.amount +=
                      null !==
                        (l = null === (n = t.accruing) || void 0 === n ? void 0 : n.amount) &&
                      void 0 !== l
                        ? l
                        : 0n),
                      (u.accruing.amountUsd +=
                        null !==
                          (f = null === (i = t.accruing) || void 0 === i ? void 0 : i.amountUsd) &&
                        void 0 !== f
                          ? f
                          : 0n),
                      (u.claimable.amount +=
                        null !==
                          (d = null === (a = t.claimable) || void 0 === a ? void 0 : a.amount) &&
                        void 0 !== d
                          ? d
                          : 0n),
                      (u.claimable.amountUsd +=
                        null !==
                          (s = null === (o = t.claimable) || void 0 === o ? void 0 : o.amountUsd) &&
                        void 0 !== s
                          ? s
                          : 0n),
                      e.set(r, u);
                  } else e.set(r, { ...t });
                };
              return R.forEach(t), I.forEach(t), [...e.values()];
            }, [I, R]);
          return {
            display: { rewardsMorpho: I, rewardsMerkl: R, rewardsMerged: C },
            txData: {
              distributions:
                null !== (e = null == S ? void 0 : S.distributions) && void 0 !== e ? e : [],
              rewardsMerkl:
                null !== (t = null == S ? void 0 : S.rewardsMerkl) && void 0 !== t ? t : [],
            },
            loading: M || v.isLoading || y.isLoading || w.isLoading,
            error: v.error || y.error || w.error,
            refetchRewards: x,
          };
        };
    },
    47528: function (e, t, r) {
      r.d(t, {
        H: function () {
          return f;
        },
        f: function () {
          return l;
        },
      });
      var n = r(58258),
        i = r(12556),
        a = r(35047),
        o = r(73828);
      let l = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'borrow',
            r = (0, o._x)({
              market: e,
              loanAsset: (0, i.wk)(null == e ? void 0 : e.loanAsset),
              type: t,
            });
          switch (t) {
            case 'borrow':
              return r.map((e) => ({ ...e, apr: (0, a.isDefined)(e.apr) ? -e.apr : null }));
            case 'supply':
              return r;
          }
        },
        f = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'borrow';
          return (0, n.useMemo)(() => l(e, t), [e, t]);
        };
    },
    83897: function (e, t, r) {
      r.d(t, {
        M: function () {
          return o;
        },
      });
      var n = r(58258),
        i = r(89991),
        a = r(73828);
      let o = (e, t, r) => {
        let { targetChainId: o } = (0, i.Z_)();
        return (0, n.useMemo)(() => {
          var n;
          return (0, a.pf)(
            e,
            t,
            r,
            null !== (n = null == r ? void 0 : r.chain.id) && void 0 !== n ? n : o
          );
        }, [t, r, e, o]);
      };
    },
    91283: function (e, t, r) {
      r.d(t, {
        g: function () {
          return f;
        },
      });
      var n = r(58258),
        i = r(47312),
        a = r(4565),
        o = r(12556),
        l = r(89991);
      let f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { data: r } = (0, i.useWalletClient)(),
          { account: f } = (0, l.Z_)(),
          d = (0, o.ib)(() => {
            if ((null == f ? void 0 : f.address) && (null == t || !t.skip) && r)
              return (0, a.fetchHolding)(f.address, e, r);
          }, [null == f ? void 0 : f.address, null == t ? void 0 : t.skip, r, e]),
          { refresh: s } = d;
        return (
          (0, n.useEffect)(() => {
            (null != t && t.skip) || s();
          }, [null == t ? void 0 : t.skip, s]),
          d
        );
      };
    },
    4205: function (e, t, r) {
      r.d(t, {
        f: function () {
          return a;
        },
      });
      var n = r(35047),
        i = r(22683);
      let a = (e) => {
        let {
          steps: t,
          error: r,
          blockError: a,
          simulationError: o,
          isFetching: l,
          isFetchingAny: f,
          isPending: d,
        } = (0, i.N)();
        return {
          data: null != t ? (null != e ? t[e] : (0, n.getLastDefined)(t)) : void 0,
          error: r,
          blockError: a,
          simulationError: o,
          isFetching: l,
          isFetchingAny: f,
          isPending: d,
        };
      };
    },
  },
]);
