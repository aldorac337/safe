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
    (e._sentryDebugIds[t] = '6313b609-6580-475f-8186-e35352d23056'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-6313b609-6580-475f-8186-e35352d23056'));
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
          return en;
        },
      });
      var n = r(78286),
        i = r(58258);
      r(7477);
      var a = r(65978),
        o = r(82803),
        f = r(45609),
        l = r(12556),
        d = r(54655),
        s = r(35047),
        u = r(725),
        c = r(89991),
        p = r(36247),
        m = r(4565),
        v = r(78017),
        b = r(35288),
        g = r(16820),
        h = r(47528),
        y = r(71985),
        w = (0, i.memo)((e) => {
          let { className: t, amount: r, asset: a, label: o } = e,
            f = (0, i.useMemo)(() => a.toUsd(r), [a, r]);
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
                      (0, s.isDefined)(f)
                        ? (0, n.tZ)(d.Vp9, {
                            variant: 'bundler',
                            children: (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
                              lineHeight: 'normal',
                              color: 'text.body',
                              children: d.$0l.short
                                .smallValuesWithCommas()
                                .digits(2)
                                .unit('$')
                                .of(f, 18),
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
      let x = d.$0l.percent.digits(2).default('0%').trailingZero(!1).unit('%'),
        Z = {
          [o.H.InterfaceOperationType.supplyCollateralBorrow]: 'Supply Collateral',
          [o.H.InterfaceOperationType.withdrawCollateralRepay]: 'Withdraw Collateral',
        },
        T = {
          [o.H.InterfaceOperationType.supplyCollateralBorrow]: 'Borrow',
          [o.H.InterfaceOperationType.withdrawCollateralRepay]: 'Repay',
        };
      var A = (0, i.memo)((e) => {
          let {
              collateralAsset: t,
              loanAsset: r,
              lltv: a,
              oracle: o,
              warnings: f,
              uniqueKey: p,
              operation: A,
              borrowAmount: k,
              mode: q,
              state: B,
              dailyBorrowApy: M,
              dailyNetBorrowApy: S,
              initialPosition: I,
              finalPosition: X,
              label: C,
              isPositionUnhealthy: R,
            } = e,
            { targetChainId: P } = (0, c.Z_)(),
            F = (0, h.H)({ state: B, loanAsset: r }),
            L = (0, i.useMemo)(() => (0, l.wk)(t), [t]),
            E = (0, i.useMemo)(() => (0, l.wk)(r), [r]),
            D = (0, d.$4C)({ chainId: P, uniqueKey: A.marketId, collateralAddress: t.address }),
            O = (0, i.useMemo)(() => (0, m.safeParseNumber)(M || 0, 18), [M]),
            K = (0, i.useMemo)(() => d.$0l.percent.default('0.00').digits(2).unit('%').of(S), [S]),
            _ = (0, i.useMemo)(() => {
              var e, t, r, n;
              return {
                collateral: (0, g.sL)({
                  price: null !== (e = L.price) && void 0 !== e ? e : 0n,
                  amount: null !== (t = null == I ? void 0 : I.collateral) && void 0 !== t ? t : 0n,
                  decimals: L.decimals,
                  withTrailingZero: !(null == I ? void 0 : I.collateral),
                }),
                borrowAssets: (0, g.sL)({
                  price: null !== (r = E.price) && void 0 !== r ? r : 0n,
                  amount:
                    null !== (n = null == I ? void 0 : I.borrowAssets) && void 0 !== n ? n : 0n,
                  decimals: E.decimals,
                  withTrailingZero: !(null == I ? void 0 : I.borrowAssets),
                }),
                ltv: x.of(null == I ? void 0 : I.ltv, 18),
              };
            }, [
              L.price,
              L.decimals,
              null == I ? void 0 : I.collateral,
              null == I ? void 0 : I.borrowAssets,
              null == I ? void 0 : I.ltv,
              E.price,
              E.decimals,
            ]),
            U = (0, i.useMemo)(() => {
              var e, t, r, n;
              return {
                collateral: (0, g.sL)({
                  price: null !== (e = L.price) && void 0 !== e ? e : 0n,
                  amount: null !== (t = null == X ? void 0 : X.collateral) && void 0 !== t ? t : 0n,
                  decimals: L.decimals,
                  withTrailingZero: !(null == X ? void 0 : X.collateral),
                }),
                borrowAssets: (0, g.sL)({
                  price: null !== (r = E.price) && void 0 !== r ? r : 0n,
                  amount:
                    null !== (n = null == X ? void 0 : X.borrowAssets) && void 0 !== n ? n : 0n,
                  decimals: E.decimals,
                  withTrailingZero: !(null == X ? void 0 : X.borrowAssets),
                }),
                ltv: x.of(null == X ? void 0 : X.ltv, 18),
              };
            }, [
              L.price,
              L.decimals,
              null == X ? void 0 : X.collateral,
              null == X ? void 0 : X.borrowAssets,
              null == X ? void 0 : X.ltv,
              E.price,
              E.decimals,
            ]),
            H = (0, i.useMemo)(
              () =>
                '0' === U.collateral && '0' === U.borrowAssets ? 0n : null == X ? void 0 : X.ltv,
              [U, X]
            ),
            V = (0, i.useMemo)(() => Z[C], [C]),
            z = (0, i.useMemo)(() => T[C], [C]);
          return (0, n.BX)(y.P, {
            direction: 'column',
            gap: 32,
            align: 'stretch',
            mode: q,
            children: [
              (0, n.BX)(d.Kqy, {
                gap: 8,
                align: 'center',
                children: [
                  (0, n.tZ)(d._nw, {
                    leftAvatarProps: { src: t.logoURI },
                    rightAvatarProps: { src: r.logoURI },
                    size: 'medium',
                  }),
                  (0, n.tZ)(d.xvT.Title.XS, {
                    color: 'text.body',
                    children: (0, d.lAJ)({ collateralAsset: t, loanAsset: r, maxLength: 20 }),
                  }),
                  (0, n.tZ)(d.Vp9, {
                    variant: 'bundler',
                    children: (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
                      lineHeight: 'normal',
                      color: 'text.body',
                      children: x.of(a, 18),
                    }),
                  }),
                  o &&
                    (0, n.tZ)(b.Z, {
                      tagProps: { variant: 'bundler' },
                      oracle: o,
                      warnings: null != f ? f : [],
                      typographyProps: { color: 'text.body' },
                    }),
                  (0, n.tZ)(d.mUV, {
                    toCopy: p,
                    toastMessage: 'Market ID copied to clipboard.',
                    tooltipMessage: 'Copy market ID.',
                    size: 'small',
                  }),
                ],
              }),
              (0, n.BX)(d.Kqy, {
                direction: 'column',
                gap: 12,
                align: 'stretch',
                children: [
                  A.collateralAssets > 0n &&
                    (0, n.BX)(n.HY, {
                      children: [
                        (0, n.tZ)(w, { amount: A.collateralAssets, asset: L, label: V }),
                        (0, n.tZ)(d.Z0O, {}),
                      ],
                    }),
                  (0, s.isDefined)(k) &&
                    k > 0n &&
                    (0, n.BX)(n.HY, {
                      children: [
                        (0, n.tZ)(w, { amount: k, asset: E, label: z }),
                        'Review' === q && (0, n.tZ)(d.Z0O, {}),
                      ],
                    }),
                  'Review' === q &&
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
                              children: ['Collateral (', L.symbol, ')'],
                            }),
                            (0, n.BX)(d.Kqy, {
                              gap: 4,
                              children: [
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.interactive.disabled',
                                  children: _.collateral,
                                }),
                                (0, n.tZ)(d.JO$, {
                                  icon: 'ArrowRightPlain20',
                                  color: 'text.body',
                                  size: 20,
                                }),
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.body',
                                  children: U.collateral,
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
                              children: ['Loan (', E.symbol, ')'],
                            }),
                            (0, n.BX)(d.Kqy, {
                              gap: 4,
                              children: [
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.interactive.disabled',
                                  children: _.borrowAssets,
                                }),
                                (0, n.tZ)(d.JO$, {
                                  icon: 'ArrowRightPlain20',
                                  color: 'text.body',
                                  size: 20,
                                }),
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.body',
                                  children: U.borrowAssets,
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
                                apy: O,
                                rewards: F,
                                points: D,
                                variant: 'market',
                                asset: t,
                                netApy: (0, g.Pi)(S, m.safeParseNumber),
                              },
                              children: (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                color: 'text.body',
                                lineHeight: 'normal',
                                children: K,
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
                                marketId: p,
                                label: 'LTV / Auto-Deleverage Liq. LTV',
                              }),
                            }),
                            (0, n.BX)(d.Kqy, {
                              align: 'center',
                              gap: '2px',
                              children: [
                                R &&
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
                                      color: R ? 'text.interactive.error' : 'inherit',
                                      children: x.of(H, 18),
                                    }),
                                    (0, n.tZ)(d.xvT.Inherit, { children: '/' }),
                                    (0, n.tZ)(u.v1, { lltv: a, marketId: p }),
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
        k = (0, i.memo)((e) => {
          var t, r, a;
          let {
              operation: o,
              initialState: f,
              finalState: m,
              mode: v,
              onRiskyPosition: b,
              onLiquidatablePosition: g,
            } = e,
            { targetChainId: h, account: y } = (0, c.Z_)(),
            w = (0, p.Zc)({ variables: { uniqueKey: o.marketId, chainId: h } }),
            x = null === (t = w.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            Z = (0, u.B9)({ lltv: null == x ? void 0 : x.lltv, marketId: o.marketId }),
            T = (0, i.useMemo)(() => {
              if (o.loanAssets) return o.loanAssets;
              let e = null == f ? void 0 : f.tryGetMarket(o.marketId);
              if (e) return e.toBorrowAssets(o.loanShares);
            }, [f, o.loanAssets, o.loanShares, o.marketId]),
            k = (0, i.useMemo)(() => x && (0, l.wk)(x.loanAsset), [x]),
            q = (0, i.useMemo)(() => x && (0, l.wk)(x.collateralAsset), [x]),
            B = (0, i.useMemo)(() => {
              if (f && y.address) return f.tryGetAccrualPosition(y.address, o.marketId);
            }, [y.address, f, o.marketId]),
            M = (0, i.useMemo)(() => {
              if (m && y.address) return m.tryGetAccrualPosition(y.address, o.marketId);
            }, [y.address, m, o.marketId]),
            S = (0, i.useMemo)(
              () => null != M && !!M.ltv && !!Z && (0, l.M4)(M.ltv, Z),
              [null == M ? void 0 : M.ltv, Z]
            );
          return ((0, i.useEffect)(() => {
            S && (null == b || b()),
              (null == M ? void 0 : M.ltv) && Z && M.ltv >= Z && (null == g || g());
          }, [S, b, g, null == M ? void 0 : M.ltv, Z]),
          w.loading)
            ? (0, n.tZ)(d.OdW, { height: '317px', borderRadius: '12px' })
            : (null == x ? void 0 : x.collateralAsset) &&
                (null == x ? void 0 : x.loanAsset) &&
                null != T &&
                k &&
                q &&
                B &&
                M
              ? (0, n.tZ)(A, {
                  label: o.type,
                  mode: v,
                  collateralAsset: x.collateralAsset,
                  loanAsset: x.loanAsset,
                  lltv: Z,
                  warnings: null == x ? void 0 : x.warnings,
                  uniqueKey: o.marketId,
                  operation: o,
                  borrowAmount: T,
                  initialPosition: B,
                  finalPosition: M,
                  state: x.state,
                  dailyBorrowApy:
                    null === (r = x.state) || void 0 === r ? void 0 : r.dailyBorrowApy,
                  dailyNetBorrowApy:
                    null === (a = x.state) || void 0 === a ? void 0 : a.dailyNetBorrowApy,
                  oracle: { address: x.oracleAddress, ...x.oracleFeed },
                  isPositionUnhealthy: S,
                })
              : (0, n.tZ)(d.SKT, {
                  height: '317px',
                  text: 'Cannot display interaction with market '.concat(
                    (0, s.formatLongString)(o.marketId, 20)
                  ),
                });
        }),
        q = r(17965),
        B = r(19311),
        M = r(82196),
        S = (0, i.memo)((e) => {
          var t, r, a, f;
          let {
              initialState: l,
              finalState: u,
              operation: p,
              mode: m,
              onRiskyPosition: v,
              onLiquidatablePosition: b,
            } = e,
            { targetChainId: g } = (0, c.Z_)(),
            h = (0, M.Pm)({
              variables: { where: { uniqueKey_in: [p.marketId, p.marketTo], chainId_in: [g] } },
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
            x = (0, B.g)({
              marketId: p.marketId,
              isNewMarket: !1,
              operation: p,
              initialState: l,
              finalState: u,
            }),
            Z = (0, B.g)({
              marketId: p.marketTo,
              isNewMarket: !0,
              operation: p,
              initialState: l,
              finalState: u,
            });
          return ((0, i.useEffect)(() => {
            let e = x.errors.ltvError,
              t = Z.errors.ltvError,
              r = [e, t].some((e) => (null == e ? void 0 : e.level) === q.WarningLevel.Red),
              n = [e, t].some((e) => (null == e ? void 0 : e.level) === q.WarningLevel.Yellow);
            r && (null == b || b()), n && (null == v || v());
          }, [x.errors.ltvError, Z.errors.ltvError, v, b]),
          h.loading)
            ? (0, n.tZ)(d.OdW, { height: '317px', borderRadius: '12px' })
            : (null == y ? void 0 : y.collateralAsset) &&
                (null == y ? void 0 : y.loanAsset) &&
                (null == w ? void 0 : w.collateralAsset) &&
                (null == w ? void 0 : w.loanAsset)
              ? (0, n.BX)(n.HY, {
                  children: [
                    (0, n.tZ)(A, {
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
                    (0, n.tZ)(A, {
                      mode: m,
                      label: o.H.InterfaceOperationType.supplyCollateralBorrow,
                      collateralAsset: null == w ? void 0 : w.collateralAsset,
                      loanAsset: null == w ? void 0 : w.loanAsset,
                      lltv: null == w ? void 0 : w.lltv,
                      warnings: null == w ? void 0 : w.warnings,
                      uniqueKey: p.marketTo,
                      operation: p,
                      borrowAmount: p.borrowAssets,
                      initialPosition: Z.initialPosition,
                      finalPosition: Z.finalPosition,
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
                          : null === (f = w.state) || void 0 === f
                            ? void 0
                            : f.dailyBorrowApy,
                      oracle: {
                        address: null == w ? void 0 : w.oracleAddress,
                        ...(null == w ? void 0 : w.oracleFeed),
                      },
                      isPositionUnhealthy: !!Z.errors.ltvError,
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
        I = r(23106),
        X = r(86144),
        C = r(9834),
        R = r(73057),
        P = r(83897),
        F = r(99153);
      let L = {
          [o.H.InterfaceOperationType.metaMorphoDeposit]: 'Deposit',
          [o.H.InterfaceOperationType.metaMorphoWithdraw]: 'Withdraw',
          [o.H.InterfaceOperationType.migrateSupply]: 'Deposit',
        },
        E = d.$0l.commas.trailingZero(!1);
      var D = (0, i.memo)((e) => {
          var t, r, a, f, s, u, p, v;
          let { operation: b, initialState: h, finalState: x, mode: Z } = e,
            { targetChainId: T, account: A } = (0, c.Z_)(),
            k = (0, F.eg)({ variables: { address: b.vaultAddress, chainId: T } }),
            q = null === (t = k.data) || void 0 === t ? void 0 : t.vaultByAddress,
            B = (0, i.useMemo)(() => {
              if (b.assets) return b.assets;
              let e = null == h ? void 0 : h.tryGetVault(b.vaultAddress);
              if (e) return e.toAssets(b.shares);
            }, [h, b.assets, b.shares, b.vaultAddress]),
            M = (0, i.useMemo)(
              () => (0, l.wk)(null == q ? void 0 : q.asset),
              [null == q ? void 0 : q.asset]
            ),
            { initialData: S, finalData: I } = (0, R.Z)(
              A.address,
              h && x ? [h, x] : void 0,
              b.vaultAddress,
              M
            ),
            D = (0, i.useMemo)(() => {
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
            O = (0, i.useMemo)(() => {
              var e;
              return (0, C.m)(
                null == q ? void 0 : null === (e = q.state) || void 0 === e ? void 0 : e.allocation
              );
            }, [
              null == q ? void 0 : null === (a = q.state) || void 0 === a ? void 0 : a.allocation,
            ]),
            K = (0, P.M)(
              b.vaultAddress,
              null == q ? void 0 : q.state,
              null == q ? void 0 : q.asset
            ),
            _ = (0, d.vmq)({
              chainId: T,
              vaultAddress: b.vaultAddress,
              allocation:
                null == q ? void 0 : null === (f = q.state) || void 0 === f ? void 0 : f.allocation,
            }),
            U = (0, i.useMemo)(() => {
              if (b.type === o.H.InterfaceOperationType.migrateSupply) {
                var e;
                return (null !== (e = S.position) && void 0 !== e ? e : 0n) + b.assets;
              }
              return I.position;
            }, [I.position, b.type, b.assets, S.position]);
          return k.loading
            ? (0, n.tZ)(d.OdW, { height: '282px', borderRadius: '12px' })
            : q && null != B && M
              ? (0, n.BX)(y.P, {
                  direction: 'column',
                  gap: 32,
                  mode: Z,
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
                        (0, n.tZ)(w, { amount: B, asset: M, label: L[b.type] }),
                        'Review' === Z &&
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
                                            children: E.digits((0, d.QQD)(M.price, S.position))
                                              .trailingZero(!S.position)
                                              .of(S.position, M.decimals),
                                          }),
                                          (0, n.tZ)(d.JO$, {
                                            icon: 'ArrowRightPlain20',
                                            color: 'text.body',
                                          }),
                                          (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                            color: 'text.body',
                                            children: E.digits((0, d.QQD)(M.price, U))
                                              .trailingZero(!I.position)
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
                                      (0, n.tZ)(X.Z, {
                                        RewardsHoverCardProps: {
                                          performanceFee: (0, g.Pi)(
                                            null == q
                                              ? void 0
                                              : null === (u = q.state) || void 0 === u
                                                ? void 0
                                                : u.fee,
                                            m.safeParseNumber
                                          ),
                                          apy: (0, g.Pi)(
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
                                          netApy: (0, g.Pi)(
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
                                          children: D,
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
                                        items: O.map((e) => ({ logoUrl: e.token.logoURI })),
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
                  text: 'Cannot display interaction with vault '.concat((0, g.Tg)(b.vaultAddress)),
                });
        }),
        O = r(98949),
        K = r(55412),
        _ = r(3245),
        U = r(63658),
        H = r(41512),
        V = r(24387);
      function z() {
        let e = (0, K._)([
          '\n  query GetToken($address: String!, $chainId: Int) {\n    assetByAddress(address: $address, chainId: $chainId) {\n      ...assetFields\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      let N = {},
        $ = (0, _.Ps)(z(), H.n, V.G);
      var W = r(49663),
        j = (0, i.memo)((e) => {
          var t, r;
          let { mode: a } = e,
            { legacyMorphoHolding: o } = (0, O.gz)(),
            { targetChainId: f } = (0, c.Z_)(),
            { data: s, loading: u } = (function (e) {
              let t = { ...N, ...e };
              return U.aM($, t);
            })({ variables: { address: W.rr.morphoToken, chainId: f } }),
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
                null === (t = (0, l.wk)(null == s ? void 0 : s.assetByAddress)) || void 0 === t
                  ? void 0
                  : t.toUsd(
                      null !== (r = null === (e = o.value) || void 0 === e ? void 0 : e.balance) &&
                        void 0 !== r
                        ? r
                        : 0n
                    );
              return d.$0l.short.digits(2).default('0').unit('$').trailingZero(!1).of(n, 18);
            }, [s, null === (r = o.value) || void 0 === r ? void 0 : r.balance]);
          return (0, n.tZ)(y.P, {
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
        Y = r(96278),
        G = r(42847);
      let J = d.$0l.percent.digits(2).default('0%').trailingZero(!1).unit('%');
      var Q = (0, i.memo)((e) => {
          var t, r, a, o, f, u, m, v, b, h;
          let { operation: x, mode: Z, onRiskyPosition: T, onLiquidatablePosition: A } = e,
            { targetChainId: k } = (0, c.Z_)(),
            q = (0, p.Zc)({ variables: { uniqueKey: x.marketId, chainId: k } }),
            B = null === (t = q.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            M = (0, i.useMemo)(() => B && (0, l.wk)(B.loanAsset), [B]),
            S = (0, i.useMemo)(() => B && (0, l.wk)(B.collateralAsset), [B]),
            I = (0, i.useMemo)(() => {
              var e;
              return d.$0l.percent
                .digits(2)
                .unit('%')
                .of(
                  null === (e = x.position) || void 0 === e
                    ? void 0
                    : e.migratablePosition.borrowApy
                );
            }, [x.position]),
            X = (0, i.useMemo)(() => {
              if (x.position)
                return l.FW.getProtocol({
                  chainId: k,
                  name: x.position.migratablePosition.protocol,
                });
            }, [x.position, k]),
            C = (0, i.useMemo)(() => {
              var e;
              return null === (e = x.position) || void 0 === e
                ? void 0
                : e.migratablePosition.getLtv();
            }, [null === (r = x.position) || void 0 === r ? void 0 : r.migratablePosition]),
            R = (0, i.useMemo)(() => {
              var e;
              return null === (e = x.position) || void 0 === e
                ? void 0
                : e.migratablePosition.getLtv({
                    withdrawn: x.collateralAssets,
                    repaid: x.loanAssets,
                  });
            }, [x.position, x.collateralAssets, x.loanAssets]),
            P = (0, i.useMemo)(() => {
              var e, t;
              return (
                !!R &&
                null !== (e = x.position) &&
                void 0 !== e &&
                !!e.migratablePosition.lltv &&
                (0, l.M4)(
                  R,
                  null === (t = x.position) || void 0 === t ? void 0 : t.migratablePosition.lltv
                )
              );
            }, [R, null === (a = x.position) || void 0 === a ? void 0 : a.migratablePosition.lltv]),
            F = (0, i.useMemo)(() => {
              var e, t, r, n, i, a, o, f, l, d;
              return {
                collateral: (0, g.sL)({
                  price: null !== (i = null == S ? void 0 : S.price) && void 0 !== i ? i : 0n,
                  amount:
                    null !==
                      (a =
                        null === (e = x.position) || void 0 === e
                          ? void 0
                          : e.migratablePosition.collateral) && void 0 !== a
                      ? a
                      : 0n,
                  decimals: null !== (o = null == S ? void 0 : S.decimals) && void 0 !== o ? o : 0,
                  withTrailingZero: !(null === (t = x.position) || void 0 === t
                    ? void 0
                    : t.migratablePosition.collateral),
                }),
                borrowAssets: (0, g.sL)({
                  price: null !== (f = null == M ? void 0 : M.price) && void 0 !== f ? f : 0n,
                  amount:
                    null !==
                      (l =
                        null === (r = x.position) || void 0 === r
                          ? void 0
                          : r.migratablePosition.borrow) && void 0 !== l
                      ? l
                      : 0n,
                  decimals: null !== (d = null == M ? void 0 : M.decimals) && void 0 !== d ? d : 0,
                  withTrailingZero: !(null === (n = x.position) || void 0 === n
                    ? void 0
                    : n.migratablePosition.borrow),
                }),
                ltv: J.of(C, 18),
              };
            }, [
              null == S ? void 0 : S.price,
              null == S ? void 0 : S.decimals,
              null === (o = x.position) || void 0 === o ? void 0 : o.migratablePosition.collateral,
              null === (f = x.position) || void 0 === f ? void 0 : f.migratablePosition.borrow,
              C,
              null == M ? void 0 : M.price,
              null == M ? void 0 : M.decimals,
            ]),
            L = (0, i.useMemo)(() => {
              var e, t, r, n, i, a, o, f, l, d;
              let s =
                  (null !==
                    (i =
                      null === (e = x.position) || void 0 === e
                        ? void 0
                        : e.migratablePosition.collateral) && void 0 !== i
                    ? i
                    : 0n) - x.collateralAssets,
                u =
                  (null !==
                    (a =
                      null === (t = x.position) || void 0 === t
                        ? void 0
                        : t.migratablePosition.borrow) && void 0 !== a
                    ? a
                    : 0n) - x.loanAssets;
              return {
                collateral: (0, g.sL)({
                  price: null !== (o = null == S ? void 0 : S.price) && void 0 !== o ? o : 0n,
                  amount: s,
                  decimals: null !== (f = null == S ? void 0 : S.decimals) && void 0 !== f ? f : 0,
                  withTrailingZero:
                    !(null === (r = x.position) || void 0 === r
                      ? void 0
                      : r.migratablePosition.collateral) || 0n === x.collateralAssets,
                }),
                borrowAssets: (0, g.sL)({
                  price: null !== (l = null == M ? void 0 : M.price) && void 0 !== l ? l : 0n,
                  amount: u,
                  decimals: null !== (d = null == M ? void 0 : M.decimals) && void 0 !== d ? d : 0,
                  withTrailingZero:
                    !(null === (n = x.position) || void 0 === n
                      ? void 0
                      : n.migratablePosition.borrow) || 0n === x.loanAssets,
                }),
                ltv: J.of(R, 18),
              };
            }, [
              null == S ? void 0 : S.price,
              null == S ? void 0 : S.decimals,
              null === (u = x.position) || void 0 === u ? void 0 : u.migratablePosition.collateral,
              null === (m = x.position) || void 0 === m ? void 0 : m.migratablePosition.borrow,
              x.collateralAssets,
              x.loanAssets,
              null == M ? void 0 : M.price,
              null == M ? void 0 : M.decimals,
              R,
            ]);
          return ((0, i.useEffect)(() => {
            var e;
            P && (null == T || T()),
              R &&
                (null == x
                  ? void 0
                  : null === (e = x.position) || void 0 === e
                    ? void 0
                    : e.migratablePosition.lltv) &&
                (null == A || A());
          }, [
            P,
            T,
            A,
            R,
            null == x
              ? void 0
              : null === (v = x.position) || void 0 === v
                ? void 0
                : v.migratablePosition.lltv,
          ]),
          q.loading)
            ? (0, n.tZ)(d.OdW, { height: '317px', borderRadius: '12px' })
            : B && M && S && x.position
              ? (0, n.BX)(y.P, {
                  direction: 'column',
                  gap: 32,
                  align: 'stretch',
                  mode: Z,
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      align: 'center',
                      children: [
                        (0, n.tZ)(d.qEK, { src: null == X ? void 0 : X.imageSrc, size: 'medium' }),
                        (0, n.tZ)(d.xvT.Title.XS, {
                          color: 'text.body',
                          children: null == X ? void 0 : X.name,
                        }),
                      ],
                    }),
                    (0, n.BX)(d.Kqy, {
                      direction: 'column',
                      gap: 12,
                      align: 'stretch',
                      children: [
                        x.collateralAssets > 0n &&
                          (0, n.BX)(n.HY, {
                            children: [
                              (0, n.tZ)(w, {
                                amount: x.collateralAssets,
                                asset: S,
                                label: 'Withdraw Collateral',
                              }),
                              (0, n.tZ)(d.Z0O, {}),
                            ],
                          }),
                        (0, s.isDefined)(x.loanAssets) &&
                          x.loanAssets > 0n &&
                          (0, n.BX)(n.HY, {
                            children: [
                              (0, n.tZ)(w, { amount: x.loanAssets, asset: M, label: 'Repay' }),
                              'Review' === Z && (0, n.tZ)(d.Z0O, {}),
                            ],
                          }),
                        'Review' === Z &&
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
                                        children: F.collateral,
                                      }),
                                      (0, n.tZ)(d.JO$, {
                                        icon: 'ArrowRightPlain20',
                                        color: 'text.body',
                                        size: 20,
                                      }),
                                      (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                        color: 'text.body',
                                        children: L.collateral,
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
                                        children: F.borrowAssets,
                                      }),
                                      (0, n.tZ)(d.JO$, {
                                        icon: 'ArrowRightPlain20',
                                        color: 'text.body',
                                        size: 20,
                                      }),
                                      (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                        color: 'text.body',
                                        children: L.borrowAssets,
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
                                    children: I,
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
                                      P &&
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
                                            color: P ? 'text.interactive.error' : 'inherit',
                                            children: J.of(R, 18),
                                          }),
                                          (0, n.tZ)(d.xvT.Inherit, { children: '/' }),
                                          (0, n.tZ)(d.xvT.Inherit, {
                                            children: J.of(
                                              null === (b = x.position) || void 0 === b
                                                ? void 0
                                                : b.migratablePosition.lltv,
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
                  height: '317px',
                  text: 'Cannot display interaction with '.concat(
                    (0, s.formatLongString)(
                      null !== (h = null == X ? void 0 : X.name) && void 0 !== h ? h : '',
                      20
                    ),
                    '.'
                  ),
                });
        }),
        ee = (0, i.memo)((e) => {
          var t, r, a;
          let { operation: f, initialState: m, mode: v } = e,
            { publicAllocatorOptions: b } = (0, Y.B)(),
            { targetChainId: g, account: h } = (0, c.Z_)(),
            y = (0, p.Zc)({ variables: { uniqueKey: f.marketId, chainId: g } }),
            w = null === (t = y.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            x = (0, i.useMemo)(
              () =>
                m &&
                f.marketId &&
                m.getMarketPublicReallocations(f.marketId, b).data.tryGetMarket(f.marketId),
              [m, f.marketId, b]
            ),
            Z = (0, i.useMemo)(
              () => m && h.address && f.marketId && m.tryGetAccrualPosition(h.address, f.marketId),
              [m, h, f.marketId]
            ),
            T = (0, G.z)({
              initialPosition: Z,
              initialMarket: x,
              migratedBorrow: f.loanAssets,
              migratedCollateral: f.collateralAssets,
              isNewMarket: !0,
            }),
            k = (0, u.B9)({ lltv: null == w ? void 0 : w.lltv, marketId: f.marketId }),
            q = (0, i.useMemo)(() => {
              let e = null == T ? void 0 : T.ltv;
              return !!e && !!k && (0, l.M4)(e, k);
            }, [T, k]);
          return y.loading
            ? (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(d.OdW, { height: '317px', borderRadius: '12px' }),
                  (0, n.tZ)(d.OdW, { height: '317px', borderRadius: '12px' }),
                ],
              })
            : (null == w ? void 0 : w.collateralAsset) && (null == w ? void 0 : w.loanAsset)
              ? (0, n.BX)(n.HY, {
                  children: [
                    (0, n.tZ)(Q, { operation: f, mode: v }),
                    (0, n.tZ)(A, {
                      mode: v,
                      label: o.H.InterfaceOperationType.supplyCollateralBorrow,
                      collateralAsset: w.collateralAsset,
                      loanAsset: w.loanAsset,
                      lltv: null == w ? void 0 : w.lltv,
                      warnings: null == w ? void 0 : w.warnings,
                      uniqueKey: f.marketId,
                      operation: f,
                      borrowAmount: f.loanAssets,
                      initialPosition: Z,
                      finalPosition: T,
                      dailyNetBorrowApy:
                        null == w
                          ? void 0
                          : null === (r = w.state) || void 0 === r
                            ? void 0
                            : r.dailyNetBorrowApy,
                      state: null == w ? void 0 : w.state,
                      dailyBorrowApy:
                        null == w
                          ? void 0
                          : null === (a = w.state) || void 0 === a
                            ? void 0
                            : a.dailyBorrowApy,
                      oracle: {
                        address: null == w ? void 0 : w.oracleAddress,
                        ...(null == w ? void 0 : w.oracleFeed),
                      },
                      isPositionUnhealthy: q,
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, {
                  height: '317px',
                  text: 'Cannot display interaction with market '.concat(
                    (0, s.formatLongString)(f.marketId, 20)
                  ),
                });
        }),
        et = (0, i.memo)((e) => {
          var t;
          let { operation: r, mode: a } = e,
            { targetChainId: o } = (0, c.Z_)(),
            f = (0, F.eg)({ variables: { address: r.vaultAddress, chainId: o } }),
            s = null === (t = f.data) || void 0 === t ? void 0 : t.vaultByAddress,
            u = (0, i.useMemo)(
              () => (0, l.wk)(null == s ? void 0 : s.asset),
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
                return l.FW.getProtocol({
                  chainId: o,
                  name: r.position.migratablePosition.protocol,
                });
            }, [r.position, o]);
          return f.loading
            ? (0, n.tZ)(d.OdW, { height: '282px', borderRadius: '12px' })
            : s && u && r.position
              ? (0, n.BX)(y.P, {
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
                        (0, n.tZ)(w, { amount: r.assets, asset: u, label: 'Withdraw' }),
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
                                            children: (0, g.sL)({
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
                                            children: (0, g.sL)({
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
                  text: 'Cannot display interaction with vault '.concat((0, g.Tg)(r.vaultAddress)),
                });
        }),
        er = (0, i.memo)((e) => {
          let { operation: t, initialState: r, finalState: i, mode: a } = e;
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(et, { operation: t, mode: a }),
              (0, n.tZ)(D, { operation: t, initialState: r, finalState: i, mode: a }),
            ],
          });
        }),
        en = (0, i.memo)((e) => {
          let {
            className: t,
            operations: r,
            initialState: l,
            finalState: d,
            mode: s,
            markPositionsAsRisky: u,
            markPositionsAsLiquidatable: c,
          } = e;
          return (0, n.tZ)(f.F, {
            className: t,
            children: r.map((e) =>
              (0, n.tZ)(
                i.Fragment,
                {
                  children: (() => {
                    switch (e.type) {
                      case o.H.InterfaceOperationType.supplyCollateralBorrow:
                      case o.H.InterfaceOperationType.withdrawCollateralRepay:
                        return (0, n.tZ)(k, {
                          operation: e,
                          initialState: l,
                          finalState: d,
                          mode: s,
                          onRiskyPosition: u,
                          onLiquidatablePosition: c,
                        });
                      case o.H.InterfaceOperationType.metaMorphoDeposit:
                      case o.H.InterfaceOperationType.metaMorphoWithdraw:
                        return (0, n.tZ)(D, {
                          operation: e,
                          initialState: l,
                          finalState: d,
                          mode: s,
                        });
                      case o.H.InterfaceOperationType.claimMerkl:
                        return (0, n.tZ)(I.Z, { mode: 'Confirm', rewardMode: 'MERKL' });
                      case o.H.InterfaceOperationType.claimMorpho:
                        return (0, n.tZ)(I.Z, { mode: 'Confirm', rewardMode: 'MORPHO' });
                      case o.H.InterfaceOperationType.wrap:
                        return (0, n.tZ)(j, { mode: 'Confirm' });
                      case o.H.InterfaceOperationType.zap:
                        return (0, n.tZ)(S, {
                          initialState: l,
                          finalState: d,
                          operation: e,
                          mode: s,
                          onRiskyPosition: u,
                          onLiquidatablePosition: c,
                        });
                      case o.H.InterfaceOperationType.migrateSupply:
                        return (0, n.tZ)(er, {
                          operation: e,
                          initialState: l,
                          finalState: d,
                          mode: s,
                        });
                      case o.H.InterfaceOperationType.migrateBorrow:
                        return (0, n.tZ)(ee, {
                          operation: e,
                          initialState: l,
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
        f = r(68906),
        l = r(71985);
      let d = (e, t) =>
          o.$0l.commas
            .digits((0, o.wmb)(null == t ? void 0 : t.price))
            .of(e, null == t ? void 0 : t.decimals),
        s = (e) => o.$0l.short.digits(2).unit('$').trailingZero(!1).of(e, 18);
      t.Z = (0, i.memo)((e) => {
        let { mode: t, rewardMode: r } = e,
          {
            display: { rewardsMerkl: u, rewardsMorpho: c },
          } = (0, f.D2)(),
          p = (0, i.useMemo)(() => ('MERKL' === r ? u : 'MORPHO' === r ? c : []), [u, c, r]);
        return (0, n.BX)(l.P, {
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
                  var r, f, l, u, c, m;
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
                                null === (f = e.rewardToken) || void 0 === f
                                  ? void 0
                                  : f.token.name,
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
                                              null === (l = e.claimable) || void 0 === l
                                                ? void 0
                                                : l.token
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
        f = r(45610);
      function l() {
        let e = (0, n._)([
          '\n  query MarketBundlerOperation($uniqueKey: String!, $chainId: Int) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      lltv\n      loanAsset {\n        ...simpleAssetFields\n      }\n      collateralAsset {\n        ...simpleAssetFieldsWithYield\n      }\n      state {\n        id\n        dailyNetBorrowApy\n        dailyBorrowApy\n        rewards {\n          asset {\n            ...simpleAssetFields\n          }\n          amountPerSuppliedToken\n          amountPerBorrowedToken\n        }\n      }\n      oracleAddress\n      warnings {\n        level\n        type\n      }\n      oracleFeed {\n        baseVault\n        baseFeedOneAddress\n        baseFeedOneDescription\n        baseFeedOneVendor\n        baseFeedTwoAddress\n        baseFeedTwoDescription\n        baseFeedTwoVendor\n        quoteVault\n        quoteFeedOneAddress\n        quoteFeedOneDescription\n        quoteFeedOneVendor\n        quoteFeedTwoAddress\n        quoteFeedTwoDescription\n        quoteFeedTwoVendor\n      }\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      let d = {},
        s = (0, i.Ps)(l(), o.G, f.N);
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
        f = r(45610);
      function l() {
        let e = (0, n._)([
          '\n  query MarketBundlerRefinanceOperation($where: MarketFilters) {\n    markets(where: $where) {\n      items {\n        id\n        uniqueKey\n        lltv\n        loanAsset {\n          ...simpleAssetFields\n        }\n        collateralAsset {\n          ...simpleAssetFieldsWithYield\n        }\n        state {\n          id\n          fee\n          dailyNetBorrowApy\n          dailyBorrowApy\n          rewards {\n            asset {\n              ...simpleAssetFields\n            }\n            amountPerSuppliedToken\n            amountPerBorrowedToken\n          }\n        }\n        oracleAddress\n        warnings {\n          level\n          type\n        }\n        oracleFeed {\n          baseVault\n          baseFeedOneAddress\n          baseFeedOneDescription\n          baseFeedOneVendor\n          baseFeedTwoAddress\n          baseFeedTwoDescription\n          baseFeedTwoVendor\n          quoteVault\n          quoteFeedOneAddress\n          quoteFeedOneDescription\n          quoteFeedOneVendor\n          quoteFeedTwoAddress\n          quoteFeedTwoDescription\n          quoteFeedTwoVendor\n        }\n      }\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      let d = {},
        s = (0, i.Ps)(l(), o.G, f.N);
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
        f = r(24387),
        l = r(45610);
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
        u = (0, i.Ps)(d(), l.N, f.G, o.j);
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
        f = r(54655),
        l = r(53863),
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
        b = (e, t) => {
          let r = (e, t) =>
              e >= o.MathLib.MAX_UINT_160
                ? '∞ '.concat(t.symbol)
                : f.$0l.short.smallValuesWithCommas().digits(2).unit(t.symbol).of(e, t.decimals),
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
      var g = r(4340),
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
            currentState: Z,
            pendingTxHash: T,
            bundleChainId: A,
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
        let { toggleDialog: I, setDialogOptions: X } = (0, f.DAv)(),
          { resetOperations: C } = (0, s.N)(),
          R = (0, i.useMemo)(() => {
            if (!Z || !v) return;
            if (null == k ? void 0 : k.isSafe) return { current: void 0, total: 0, index: 0 };
            let e = [...v.requirements.txs, ...v.requirements.signatures];
            if ('req' !== Z.type) return { current: void 0, total: e.length, index: e.length };
            let t = e.findIndex((e) => e.id === Z.id);
            return { current: t >= 0 ? e[t] : void 0, index: t, total: e.length };
          }, [v, Z, null == k ? void 0 : k.isSafe]),
          P = (0, i.useMemo)(
            () => (A && M ? o.ChainUtils.getExplorerTransactionUrl(A, M) : ''),
            [A, M]
          ),
          F = (0, i.useMemo)(() => {
            if (Z && R && A)
              switch (Z.status) {
                case c.qb.signing:
                  return 'Signature '
                    .concat(R.index + 1, ' /\n  ')
                    .concat(R.total + 1, ' - Proceed in your ')
                    .concat((null == k ? void 0 : k.isSafe) ? 'transaction queue' : 'wallet');
                case c.qb.pending:
                  return (0, n.BX)(n.HY, {
                    children: [
                      'Transaction',
                      ' ',
                      M
                        ? (0, n.BX)(f.dLw, {
                            href: P,
                            underlined: !0,
                            children: [(0, f.GQT)(M), ' '],
                          })
                        : '',
                      'is being processed...',
                    ],
                  });
                case c.qb.error:
                  return ''
                    .concat('req' === Z.type ? 'Signature' : 'Transaction', ' ')
                    .concat(R.index + 1, ' / ')
                    .concat(R.total + 1, ' - An error occurred');
                case c.qb.complete:
                  if ('tx' === Z.type)
                    return (0, n.BX)(n.HY, {
                      children: [
                        'Transaction',
                        ' ',
                        M
                          ? (0, n.tZ)(f.dLw, { href: P, underlined: !0, children: (0, f.GQT)(M) })
                          : '',
                        ' ',
                        (null == k ? void 0 : k.isContract)
                          ? 'is sent to your smart wallet!'
                          : 'is complete!',
                      ],
                    });
                  return 'Signature successfully processed';
              }
          }, [null == k ? void 0 : k.isContract, Z, M, R, A, P, null == k ? void 0 : k.isSafe]),
          L = (0, i.useMemo)(
            () =>
              (null == Z ? void 0 : Z.type) === 'tx' &&
              [c.qb.pending, c.qb.complete].includes(Z.status),
            [null == Z ? void 0 : Z.status, null == Z ? void 0 : Z.type]
          );
        (0, i.useEffect)(() => {
          X({ closable: L });
        }, [X, L]);
        let E = (0, i.useCallback)(() => {
            if (L) {
              (null == Z ? void 0 : Z.status) === c.qb.complete && w(), I(!1);
              return;
            }
            w(), I(!1);
          }, [null == Z ? void 0 : Z.status, w, I, L]),
          D = (0, i.useMemo)(
            () =>
              (null == Z ? void 0 : Z.type) === 'tx' &&
              (null == Z ? void 0 : Z.status) === c.qb.complete,
            [null == Z ? void 0 : Z.status, null == Z ? void 0 : Z.type]
          ),
          O = (0, i.useCallback)(() => {
            w(), C(), B(), I(!1);
          }, [w, C, I, B]);
        return v && Z && R
          ? (0, n.BX)(f.Kqy, {
              direction: 'column',
              gap: 'm',
              'data-testid': 'processing-dialog',
              children: [
                (0, n.BX)(f.Kqy, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(f.xvT.Title.S, { children: 'Confirm' }),
                    (0, n.tZ)(f.Kqy, {
                      gap: 12,
                      children: D
                        ? (0, n.tZ)(f.zxk, {
                            variant: 'secondary',
                            iconAlone: 'ClosePlain20',
                            onClick: O,
                          })
                        : (0, n.tZ)(f.VfW, {
                            headerLabel: 'Cancel Action',
                            body: 'Are you sure you want to close this modal? It will interrupt the current flow.',
                            ctaLabel: 'Cancel action',
                            cancelLabel: 'Close',
                            ctaAction: E,
                            children: (0, n.tZ)(f.zxk, {
                              variant: 'secondary',
                              iconAlone: 'ClosePlain20',
                            }),
                          }),
                    }),
                  ],
                }),
                (0, n.BX)(h.Z, {
                  fallback: (0, n.tZ)(l.c, { minHeight: '364px' }),
                  children: [
                    (0, n.tZ)(g.Z, {
                      operations: v.operations,
                      initialState: null === (t = v.steps) || void 0 === t ? void 0 : t[0],
                      finalState: (0, a.Z)(v.steps),
                      mode: 'Confirm',
                    }),
                    (0, n.BX)(f.Kqy, {
                      direction: 'column',
                      gap: 'm',
                      align: 'stretch',
                      children: [
                        !D &&
                          (0, n.BX)(n.HY, {
                            children: [
                              (0, n.tZ)(f.fDo, {
                                variant: {
                                  [c.qb.complete]: 'success',
                                  [c.qb.signing]: 'loading',
                                  [c.qb.pending]: 'loading',
                                  [c.qb.error]: 'error',
                                }[null == Z ? void 0 : Z.status],
                                ...((R.current &&
                                  (null === (r = v.steps) || void 0 === r ? void 0 : r[0]) &&
                                  b(R.current, v.steps[0])) ||
                                  ('tx' === Z.type && {
                                    contentIdle: m,
                                    contentSuccess: m,
                                    contentError: m,
                                  })),
                              }),
                              (0, n.BX)(f.Kqy, {
                                align: 'center',
                                gap: 8,
                                justify: 'stretch',
                                children: [
                                  Array.from({ length: R.total }).map((e, t) =>
                                    t < R.index
                                      ? (0, n.tZ)(y, { status: c.qb.complete }, t)
                                      : t === R.index
                                        ? (0, n.tZ)(y, { status: Z.status }, t)
                                        : (0, n.tZ)(y, {}, t)
                                  ),
                                  (0, n.tZ)(y, { status: 'tx' === Z.type ? Z.status : void 0 }),
                                ],
                              }),
                            ],
                          }),
                        D &&
                          (0, n.tZ)(f._Lo, {
                            onClick: O,
                            height: 48,
                            textVariant: 'small',
                            children: 'Done',
                          }),
                        (0, n.BX)(f.Kqy, {
                          justify: 'space-between',
                          align: 'center',
                          children: [
                            F &&
                              (0, n.tZ)(f.xvT.Body.XXXS.Regular, {
                                'data-matomo-event': 'transaction-status-message',
                                'data-matomo-step': 'confirmation-step-'.concat(
                                  Z.status.toLowerCase()
                                ),
                                color: 'text.secondary',
                                children: F,
                              }),
                            M &&
                              (0, n.BX)(f.Kqy, {
                                gap: 4,
                                align: 'center',
                                children: [
                                  (0, n.tZ)(f.mUV, {
                                    toCopy: M,
                                    toastMessage: 'Transaction hash copied to clipboard.',
                                    tooltipMessage: 'Copy transaction hash.',
                                    size: 'small',
                                  }),
                                  (0, n.tZ)(f.dLw, {
                                    href: P,
                                    children: (0, n.tZ)(f.zxk, {
                                      variant: 'ghost',
                                      children: (0, n.BX)(f.Kqy, {
                                        align: 'center',
                                        gap: 2,
                                        children: [
                                          (0, n.tZ)(f.xvT.Body.XXXS.Regular, {
                                            color: 'text.secondary',
                                            children: 'View on explorer',
                                          }),
                                          (0, n.tZ)(f.JO$, {
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
                    Z.status === c.qb.error &&
                      (0, n.tZ)(f.ua7, {
                        content: 'Please switch to the correct network.',
                        disabled: !q,
                        children: (0, n.tZ)(f._Lo, {
                          onClick: x,
                          height: 48,
                          disabled: q,
                          children: (0, n.tZ)(f.xvT.Body.S.Regular, {
                            color: q ? 'text.tertiary' : 'text.body',
                            children: 'Try again',
                          }),
                        }),
                      }),
                  ],
                }),
              ],
            })
          : (0, n.tZ)(f.xvT.Body.S.Regular, { children: 'No transaction to execute' });
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
        f = r(28219),
        l = r(38819);
      let d = (0, l.Z)('button', { target: 'ejg8vzf0' })(
          'background:',
          (e) => {
            let { theme: t } = e;
            return ''.concat(t.colors.constant.gradient.blueStroke);
          },
          ';border-radius:50px;padding:6px;border:none;cursor:pointer;'
        ),
        s = (0, l.Z)('button', { target: 'ejg8vzf1' })(
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
          { status: l, refetchAll: u } = (0, f.P)(t),
          c = () => {
            null == r || r(), i((0, n.tZ)(o.F, { marketId: t, toEnable: 'unauthorized' === l }));
          };
        switch (l) {
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
        f = r(35047),
        l = r(18313),
        d = r(89991),
        s = r(4205),
        u = r(69886),
        c = r(28219),
        p = r(40252),
        m = r(83793),
        v = r(71921),
        b = r(41976),
        g = (0, i.memo)((e) => {
          let { marketId: t, ltv: r, isPositionRisky: a } = e,
            { targetChainId: f } = (0, d.Z_)(),
            {
              data: {
                marketByUniqueKey: {
                  collateralAsset: l,
                  loanAsset: s,
                  lltv: u,
                  oracleAddress: c,
                  oracleFeed: g,
                  warnings: h,
                } = {},
              } = {},
              error: y,
              loading: w,
            } = (0, b.vz)({ variables: { uniqueKey: t, chainId: f } }),
            x = (0, i.useMemo)(
              () => o.$0l.percent.digits(2).default('-').trailingZero(!1).unit('%').of(u, 18),
              [u]
            ),
            Z = (0, i.useMemo)(() => {
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
          if (y || !s || !l)
            return (0, n.tZ)(o.SKT, {
              text: 'An error occurred while loading the market data.',
              background: 'background.secondary',
              borderRadius: '12px',
              height: '220px',
            });
          let A = c ? { address: c, ...g } : null;
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
                  collateralAsset: l,
                  loanAsset: s,
                  formattedLltv: x,
                  oracle: A,
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
                            (0, n.tZ)(o.xvT.Title.XS, { lineHeight: 'normal', children: Z }),
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
        w = r(56044),
        x = r(82078),
        Z = r(82803),
        T = r(86876),
        A = r(65978),
        k = (0, i.memo)((e) => {
          let { toEnable: t, marketId: r } = e,
            { toggleDialog: a } = (0, o.DAv)(),
            { account: f, targetChainId: l } = (0, d.Z_)(),
            { activeBundle: s, setActiveBundle: u } = (0, T.HT)(),
            { preLiquidationContractAddress: m, refetchAuthorizationQuery: v } = (0, c.P)(r),
            b = (0, i.useMemo)(() => {
              if (!m) return null;
              let e = new w.ActionBundleRequirements(),
                r = new w.ActionBundle(l, [], e);
              return (
                (r.tx = () => {
                  var e;
                  return {
                    to: null === (e = p.addresses[l]) || void 0 === e ? void 0 : e.morpho,
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
            }, [t, l, m]),
            g = (0, i.useMemo)(
              () =>
                s
                  ? 'Please complete the pending transaction to execute a new one.'
                  : f.isWrongChain
                    ? 'Please switch to the correct network.'
                    : null,
              [f.isWrongChain, s]
            ),
            k = (0, i.useCallback)(() => {
              if (!b) return console.error('No bundle found');
              u(
                b,
                [
                  {
                    id: 'toggleAutoDeleverage',
                    type: Z.H.InterfaceOperationType.toggleAutoDeleverage,
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
            }, [u, b, a, r, t, v]);
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
              (0, n.tZ)(A.Z, { toEnable: t, marketId: r }),
              (0, n.tZ)(o.ua7, {
                content: g,
                disabled: !g,
                children: (0, n.tZ)(o.Kqy, {
                  width: '100%',
                  direction: 'column',
                  children: (0, n.tZ)(o._Lo, {
                    onClick: k,
                    height: 47,
                    disabled: !!g,
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
          [b, h] = (0, i.useState)(!1),
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
          Z = (0, i.useMemo)(
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
            latestSimulatedValue: null == Z ? void 0 : Z.ltv,
          }),
          A = (0, f.isDefined)(T.value) && (0, f.isDefined)(m) && T.value >= m,
          q = (0, i.useMemo)(
            () => (0, f.isDefined)(T.value) && (0, f.isDefined)(m) && (0, a.M4)(T.value, m),
            [T.value, m]
          ),
          B = q && !b,
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
            (0, n.tZ)(g, { marketId: t, ltv: T, isPositionRisky: q }),
            r &&
              A &&
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
            !A &&
              q &&
              (0, n.tZ)(u.Z, {
                isRiskyPositionsAcknowledged: b,
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
                  disabled: A || B,
                  textVariant: 'small',
                  children: 'Enable Auto-Deleverage',
                })
              : (0, n.tZ)(o.zxk, {
                  variant: 'danger',
                  size: 'big',
                  label: 'Remove Auto-Deleverage',
                  onClick: S,
                  disabled: !A && B,
                }),
            (0, n.tZ)(o.Kqy, {
              justify: 'center',
              padding: '6px 7px',
              children: (0, n.tZ)(o.dLw, {
                href: l.lT,
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
          formattedLltv: f,
          oracle: l,
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
                children: f,
              }),
            }),
            l &&
              (0, n.tZ)(o.Z, {
                oracle: l,
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
        f = r(89991),
        l = r(83793),
        d = r(71921),
        s = r(41976);
      t.Z = (0, i.memo)((e) => {
        let { toEnable: t, marketId: r } = e,
          { targetChainId: u } = (0, f.Z_)(),
          {
            data: {
              marketByUniqueKey: {
                collateralAsset: c,
                loanAsset: p,
                lltv: m,
                oracleAddress: v,
                oracleFeed: b,
                warnings: g,
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
        let Z = v ? { address: v, ...b } : null;
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
                oracle: Z,
                warnings: null != g ? g : [],
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
                        content: l.l,
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
      let f = {},
        l = (0, i.Ps)(o());
      function d(e) {
        let t = { ...f, ...e };
        return a.aM(l, t);
      }
    },
    725: function (e, t, r) {
      r.d(t, {
        v1: function () {
          return l;
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
        f = r(64070),
        l = (0, i.memo)((e) => {
          let { lltv: t, marketId: r } = e,
            l = (0, f.s)(),
            { status: d, preLltv: s } = (0, o.P)(r),
            u = (0, i.useMemo)(
              () => a.$0l.percent.unit('%').trailingZero(!1).digits(2).of(t, 18),
              [t]
            ),
            c = (0, i.useMemo)(
              () => a.$0l.percent.unit('%').trailingZero(!1).digits(2).of(s, 18),
              [s]
            );
          return l
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
            n = (0, f.s)(),
            { status: i } = (0, o.P)(t);
          return n && 'authorized' === i ? r : 'LTV / Liq. LTV';
        }),
        s = (0, i.memo)((e) => {
          let { marketId: t } = e,
            r = (0, f.s)(),
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
          { status: o, preLltv: f } = (0, n.P)(r);
        return a && 'authorized' === o ? f : t;
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
        f = r(4565),
        l = r(12556),
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
            b = (0, n.useMemo)(() => {
              if (l.FW.isPreLiquidationSupported(r))
                return o.addressesRegistry[r].preLiquidationFactory;
            }, [r]),
            {
              data: [, , g, , h] = [],
              error: y,
              isLoading: w,
              refetch: x,
            } = (0, i.useReadContract)({
              query: { enabled: !!e, staleTime: 1 / 0 },
              chainId: r,
              abi: f.blueAbi,
              address: o.addressesRegistry[r].morpho,
              functionName: 'idToMarketParams',
              args: [e],
            }),
            Z = o.defaultPreLiquidationParamsRegistry.get(null != h ? h : 0n),
            T = (0, n.useMemo)(
              () =>
                Z && g && e && b
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
                      preLiquidationFactory: b,
                      marketId: e,
                      preLiquidationParams: { ...Z, preLiquidationOracle: g },
                    })
                  : null,
              [Z, g, e, r, b]
            ),
            {
              data: A,
              isLoading: k,
              isError: q,
              queryKey: B,
            } = (0, i.useReadContract)({
              query: { enabled: !!T && !!b, staleTime: 1 / 0 },
              chainId: r,
              abi: m,
              address: b,
              functionName: 'isPreLiquidation',
              args: [T],
            }),
            {
              data: M,
              isLoading: S,
              isError: I,
              queryKey: X,
            } = (0, i.useReadContract)({
              query: { enabled: !!t && !!T, staleTime: 1 / 0 },
              chainId: r,
              abi: f.blueAbi,
              address: o.addressesRegistry[r].morpho,
              functionName: 'isAuthorized',
              args: [t, T],
            });
          return {
            status: t
              ? w || k || S
                ? 'loading'
                : !1 === A
                  ? 'hidden'
                  : !1 === M
                    ? 'unauthorized'
                    : !0 === M
                      ? 'authorized'
                      : y || q || I
                        ? 'error'
                        : 'hidden'
              : 'hidden',
            refetchAll: (0, n.useCallback)(() => {
              x(), v.invalidateQueries({ queryKey: B }), v.invalidateQueries({ queryKey: X });
            }, [x, B, X, v]),
            refetchAuthorizationQuery: () => v.invalidateQueries({ queryKey: X }),
            preLltv: null == Z ? void 0 : Z.preLltv,
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
    53863: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return m;
        },
        c: function () {
          return u;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(12556),
        o = r(54655),
        f = r(50825),
        l = r(49149),
        d = r(38819);
      let s = (0, d.Z)(o.Kqy, { target: 'e1gk17kp0' })(
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
      var u = (0, i.memo)((e) => {
          let { minHeight: t = '200px' } = e;
          return (0, n.BX)(s, {
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
                  (0, n.tZ)(f.Z, {
                    mode: 'external',
                    href: a.hU,
                    buttonProps: { size: 'small', variant: 'primary', label: 'Use Fallback App' },
                  }),
                  (0, n.tZ)(f.Z, {
                    mode: 'external',
                    href: l.QP.NEXT_PUBLIC_STATUS_URL,
                    buttonProps: { size: 'small', variant: 'secondary', label: 'Check App Status' },
                  }),
                ],
              }),
            ],
          });
        }),
        c = r(85957);
      let p = (0, d.Z)(o.Kqy, { target: 'e6oot9d0' })(
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
      var m = (0, i.memo)((e) => {
        let { minHeight: t = '250px', className: r, style: i } = e,
          a = (0, c.useRouter)();
        return (0, n.BX)(p, {
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
                  onClick: () => a.refresh(),
                }),
                (0, n.tZ)(f.Z, {
                  mode: 'external',
                  href: l.QP.NEXT_PUBLIC_STATUS_URL,
                  buttonProps: { size: 'small', variant: 'secondary', label: 'Check App Status' },
                }),
              ],
            }),
          ],
        });
      });
    },
    86144: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(27349);
      t.Z = (0, i.memo)((e) => {
        var t, r;
        let { iconSize: f, RewardsHoverCardProps: l, children: d, noHover: s } = e,
          { points: u, rewards: c } = l,
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
                        size: f,
                      }),
                    !!(null === (r = m.current) || void 0 === r ? void 0 : r.length) &&
                      (0, n.tZ)(a.JO$, {
                        icon: 'PointsPlain20',
                        color: 'constant.color.active',
                        size: f,
                      }),
                  ],
                }),
              }),
              (0, n.tZ)(a.zsw.Content, { children: (0, n.tZ)(o.Z, { ...l }) }),
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
        f = r(45842),
        l = r(35047),
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
      function b(e, t, r) {
        return void 0 === e
          ? e
          : void 0 === t
            ? t
            : void 0 === r
              ? r
              : null === e && null === t && (0, l.isDefined)(r)
                ? (0, u.Tg)(r)
                : [e, t].filter(l.isDefined).join(' - ');
      }
      let g = (0, i.memo)((e) => {
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
              b(
                null == t ? void 0 : t.baseFeedOneVendor,
                null == t ? void 0 : t.baseFeedOneDescription,
                null == t ? void 0 : t.baseFeedOneAddress
              ) || '';
            return (0, l.formatLongString)(e, 25);
          }, [
            null == t ? void 0 : t.baseFeedOneVendor,
            null == t ? void 0 : t.baseFeedOneDescription,
            null == t ? void 0 : t.baseFeedOneAddress,
          ]),
          Z = (0, i.useMemo)(() => {
            let e =
              b(
                null == t ? void 0 : t.baseFeedTwoVendor,
                null == t ? void 0 : t.baseFeedTwoDescription,
                null == t ? void 0 : t.baseFeedTwoAddress
              ) || '';
            return (0, l.formatLongString)(e, 25);
          }, [
            null == t ? void 0 : t.baseFeedTwoVendor,
            null == t ? void 0 : t.baseFeedTwoDescription,
            null == t ? void 0 : t.baseFeedTwoAddress,
          ]),
          T = (0, i.useMemo)(() => {
            let e =
              b(
                null == t ? void 0 : t.quoteFeedOneVendor,
                null == t ? void 0 : t.quoteFeedOneDescription,
                null == t ? void 0 : t.quoteFeedOneAddress
              ) || '';
            return (0, l.formatLongString)(e, 25);
          }, [
            null == t ? void 0 : t.quoteFeedOneVendor,
            null == t ? void 0 : t.quoteFeedOneDescription,
            null == t ? void 0 : t.quoteFeedOneAddress,
          ]),
          A = (0, i.useMemo)(() => {
            let e =
              b(
                null == t ? void 0 : t.quoteFeedTwoVendor,
                null == t ? void 0 : t.quoteFeedTwoDescription,
                null == t ? void 0 : t.quoteFeedTwoAddress
              ) || '';
            return (0, l.formatLongString)(e, 25);
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
              t.address !== f.DR &&
              (0, n.tZ)(n.HY, {
                children: (0, n.BX)(m, {
                  align: 'center',
                  justify: 'space-between',
                  gap: 8,
                  children: [
                    (0, n.tZ)(o.xvT.Body.XXS.Regular, { color: 'text.body', children: 'Address' }),
                    (0, n.tZ)(g, { href: d.link, label: d.formattedAddress }),
                  ],
                }),
              }),
            (null == t ? void 0 : t.baseFeedOneAddress) &&
              (null == t ? void 0 : t.baseFeedOneAddress) !== f.DR &&
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
                      (0, n.tZ)(g, { href: c, label: x }),
                    ],
                  }),
                ],
              }),
            (null == t ? void 0 : t.baseFeedTwoAddress) &&
              (null == t ? void 0 : t.baseFeedTwoAddress) !== f.DR &&
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
                      (0, n.tZ)(g, { href: h, label: Z }),
                    ],
                  }),
                ],
              }),
            (null == t ? void 0 : t.quoteFeedOneAddress) &&
              (null == t ? void 0 : t.quoteFeedOneAddress) !== f.DR &&
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
                      (0, n.tZ)(g, { href: y, label: T }),
                    ],
                  }),
                ],
              }),
            (null == t ? void 0 : t.quoteFeedTwoAddress) &&
              (null == t ? void 0 : t.quoteFeedTwoAddress) !== f.DR &&
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
                      (0, n.tZ)(g, { href: w, label: A }),
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
        let { oracle: t, warnings: r, tagProps: f, typographyProps: l } = e,
          d = (0, i.useMemo)(() => (r ? (0, o._d)(r) : null), [r]),
          s = (0, i.useMemo)(() => ((0, a.isFetched)(t) ? (0, o.pTE)(t) : t), [t]);
        return 'string' == typeof t
          ? (0, n.BX)(o.Vp9, {
              ...f,
              children: [
                (0, n.tZ)(y, {
                  children: (0, n.tZ)(o.ZT$, {
                    TextVariant: o.xvT.Body.XXXS.Regular,
                    lineHeight: 'normal',
                    shorten: 1,
                    ...l,
                    children: s,
                  }),
                }),
                (null == d ? void 0 : d.message) && (0, n.tZ)(w, { text: d.message }),
              ],
            })
          : (0, n.BX)(o.Vp9, {
              ...f,
              children: [
                (0, n.BX)(o.zsw.Root, {
                  children: [
                    (0, n.tZ)(o.zsw.Trigger, {
                      children: (0, n.tZ)(y, {
                        children: (0, n.tZ)(o.ZT$, {
                          TextVariant: o.xvT.Body.XXXS.Regular,
                          lineHeight: 'normal',
                          shorten: 1,
                          ...l,
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
        f = r(54655),
        l = r(90626),
        d = r(49149);
      class s extends i.Component {
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          var r, n, i, f;
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
                null !== (f = null === (n = this.props) || void 0 === n ? void 0 : n.route) &&
                  void 0 !== f
                  ? f
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
              (0, n.tZ)(l.default, {
                children: (0, n.BX)(f.Kqy, {
                  direction: 'column',
                  align: 'center',
                  justify: 'center',
                  gap: 'm',
                  className: 'p-4',
                  children: [
                    (0, n.tZ)(f.xvT.Title.L, {
                      color: 'text.primary',
                      children:
                        null !== (e = this.props.title) && void 0 !== e ? e : 'Section Error',
                    }),
                    (0, n.tZ)(f.xvT.Body.L.Regular, {
                      color: 'text.primary',
                      children:
                        null !== (t = this.props.description) && void 0 !== t
                          ? t
                          : 'Something went wrong in '.concat(this.props.section, '.'),
                    }),
                    (0, n.tZ)(f.zxk, {
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
        f = r(54655);
      let l = (0, o.Z)('div', { target: 'eqlp4070' })(
          'background:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.gradient.pageBackground;
          },
          ';width:100%;'
        ),
        d = (0, o.Z)(f.Kqy, { shouldForwardProp: (0, f.uhK)(['withAside']), target: 'eqlp4071' })(
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
        (0, f.xJ_)('border-width'),
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
        return (0, n.tZ)(l, {
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
        f = r(89991),
        l = r(49663),
        d = r(91283);
      let s = (0, i.createContext)(null),
        u = () => {
          let e = (0, i.useContext)(s);
          if (!e) throw Error('useMorphoLegacyContext must be called inside a MorphoLegacyContext');
          return e;
        };
      t.ZP = (0, i.memo)((e) => {
        let { children: t } = e,
          { targetChainId: r } = (0, f.Z_)(),
          { data: i } = (0, a.useWalletClient)(),
          u = (0, d.g)(l.rr.legacyMorphoToken, {
            skip:
              r !== o.ChainId.EthMainnet ||
              (null == i ? void 0 : i.chain.id) !== o.ChainId.EthMainnet,
          }),
          c = (0, d.g)(l.rr.morphoToken, {
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
          return f;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(5469);
      let o = (0, i.createContext)(null),
        f = () => {
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
        f = r(81767),
        l = r(47312),
        d = r(36929),
        s = r(56044),
        u = r(54655),
        c = r(35047),
        p = r(18313),
        m = r(89991),
        v = r(59855),
        b = r(75571),
        g = r(96278),
        h = r(98267);
      let y = async (e, t) => {
          try {
            let r = await (0, o.a)(e, { hash: t });
            if ((null == r ? void 0 : r.status) !== 'success') throw r;
            return r;
          } catch (r) {
            return new Promise((r, n) => {
              let i = (0, f.p)(e, {
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
          { data: a } = (0, l.useWalletClient)(),
          { account: o, targetChain: f } = (0, m.Z_)(),
          { displayToast: s, displayTxToast: x } = (0, u.V6$)(),
          A = (0, g.B)(),
          [k, q] = (0, i.useState)(),
          B = (0, i.useRef)(a),
          M = (0, i.useRef)({ address: o.address, isContract: o.isContract, isSafe: o.isSafe }),
          S = (0, i.useRef)(f),
          [I, X] = (0, i.useState)(),
          [C, R, P] = (0, h.yk)(k, null === (t = M.current) || void 0 === t ? void 0 : t.isSafe),
          F = (0, i.useMemo)(() => C && (0, h.V0)(C), [C]),
          L = (0, i.useCallback)(() => {
            P(),
              q(void 0),
              X(void 0),
              (B.current = void 0),
              (M.current = void 0),
              (S.current = void 0);
          }, [P]),
          E = (0, i.useCallback)(
            (e, t, r, n) => {
              L(),
                (B.current = a),
                (M.current = { address: o.address, isContract: o.isContract, isSafe: o.isSafe }),
                (S.current = f),
                q((i) => {
                  if (i) throw Error('Cannot override action bundle');
                  return n ? new T(e, t, r) : new Z(e, t, r);
                });
            },
            [o.address, o.isContract, o.isSafe, f, a, L]
          ),
          D = (0, i.useCallback)(
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
                      R('signed'),
                      X(e),
                      await c.Time.wait(500),
                      await y(n, e),
                      X(void 0))
                    : await o.sign(n),
                    x({
                      notificationStatus: u.EzR.success,
                      txHash: e,
                      chainId: f.id,
                      userIsContract: i.isContract,
                    }),
                    R('success');
                } catch (e) {
                  s({
                    description:
                      null !== (r = (0, c.formatLongString)(e.message, 100)) && void 0 !== r
                        ? r
                        : 'An error occurred',
                    notificationStatus: u.EzR.error,
                  }),
                    R('error');
                }
            },
            [
              null == k ? void 0 : k.requirements.signatures,
              null == k ? void 0 : k.requirements.txs,
              s,
              x,
              R,
              f.id,
            ]
          ),
          O = (0, i.useCallback)(async () => {
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
                      .concat((0, b.RY)(o, '5AFEA44'))
                      .map((e) => {
                        let { value: t, ...r } = e;
                        return { ...r, value: null != t ? t.toString() : '0' };
                      }),
                  });
                t = r;
              } else
                t = await n.sendTransaction({
                  ...(0, b.RY)(o, p.clientEnvs.NEXT_PUBLIC_CALLDATA_ORIGIN),
                  account: i.address,
                  chain: a,
                });
              if ((R('signed'), 'object' == typeof t)) throw Error('Transaction failed');
              (r = t), X(t), await c.Time.wait(500);
              let l = await y(n, t);
              if ((null == l ? void 0 : l.status) !== 'success')
                throw Error('Transaction failed ' + t);
              X(void 0),
                x({
                  notificationStatus: u.EzR.success,
                  txHash: t,
                  chainId: f.id,
                  userIsContract: i.isContract,
                }),
                R('success');
              try {
                v.Q.debugSharedLiquidity({
                  bundlingOptions: A,
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
                    chainId: f.id,
                    userIsContract: i.isContract,
                  })
                : s({
                    description:
                      null !== (t = (0, c.formatLongString)(e.message, 100)) && void 0 !== t
                        ? t
                        : 'An error occurred',
                    notificationStatus: u.EzR.error,
                  }),
                R('error');
            }
          }, [k, A, s, x, R, f.id]);
        (0, i.useEffect)(() => {
          if (F && F.status === h.qb.signing)
            switch (F.type) {
              case 'tx':
                O();
                return;
              case 'req':
                D(F.id);
                return;
            }
        }, [O, D, F]);
        let K = (0, i.useMemo)(() => {
          var e;
          return {
            activeBundle: k,
            setActiveBundle: E,
            reset: L,
            retry: () => R('retry'),
            currentState: F,
            pendingTxHash: I,
            bundleChainId: null === (e = S.current) || void 0 === e ? void 0 : e.id,
            accountRef: M.current,
          };
        }, [k, E, L, F, I, R]);
        return (0, n.tZ)(w.Provider, { value: K, children: r });
      });
      class Z extends s.ActionBundle {
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
      class T extends Z {
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
      let f = (e) => {
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
            let f = setTimeout(() => r(i[a]), 1e3 * parseFloat(a.split('_')[1]));
            return () => clearTimeout(f);
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
      let l = (e, t) => {
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
        s = (e, t) => f((0, a.useMemo)(() => l(e, t), [e, t]));
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
          return f;
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
      let f = i.addresses[i.ChainId.BaseMainnet];
      (f.ezEth = '0x2416092f143378750bb29b79eD961ab195CcEea5'),
        (f.bsdEth = '0xCb327b99fF831bF8223cCEd12B1338FF3aA322Ff'),
        (f.deprecatedMorphoToken = '0x039b598c6b99e70058E1e9021E000BdacD33d026'),
        (f.morphoToken = '0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842'),
        (f.wellToken = '0xA88594D404727625A9437C3f886C7643872296AE');
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
                let { collateralAsset: o, oracle: f } = t.market;
                if (!(null == o ? void 0 : o.address) || !(null == o ? void 0 : o.symbol)) return e;
                let l = f
                    ? {
                        address: f.address,
                        type: null === (r = t.market.oracleInfo) || void 0 === r ? void 0 : r.type,
                        ...t.market.oracleFeed,
                      }
                    : void 0,
                  d = e.find((e) => e.token.address === o.address);
                return (
                  d
                    ? (d.lltvs.add(t.market.lltv),
                      l && d.oracles.add(l),
                      (d.supplyAssetsUsd +=
                        null !== (i = t.supplyAssetsUsd) && void 0 !== i ? i : 0))
                    : e.push({
                        token: (0, n.wk)(o),
                        lltvs: new Set([BigInt(t.market.lltv)]),
                        oracles: l ? new Set([l]) : new Set(),
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
          return f;
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
            f = n.$0l.commas.digits((0, n.QQD)(t, r)).trailingZero(a);
          return o && (f = f.unit(o)), f.of(r, i);
        },
        f = (e, t) => ((0, i.isDefined)(e) ? t(e) : e);
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
        f = r(75963);
      let l = {
        type: 'bytes32String',
        base: i().string(),
        messages: { 'bytes32String.base': '"{{#label}}" must be a parsable bytes32 string' },
        validate: (e, t) =>
          (0, f.v)(e) ? { value: e } : { value: e, errors: t.error('bytes32String.base') },
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
        l
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
        f = r(81961),
        l = r(31374);
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
          return (0, l.S)(
            null === (r = (0, f.N)(d.data)) || void 0 === r
              ? void 0
              : r.filter((e) => {
                  let { error: r } = c(t).validate(e, { abortEarly: !1 });
                  if (r) {
                    let t = (0, l.b)(r, e);
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
        f = r(42418),
        l = r(8937);
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
          if (!r || !t || d[n].includes(e)) return [];
          let i = (0, a.wk)(r),
            o = b(i, null == t ? void 0 : t.totalAssets, t.allocation),
            l = v(i, t.rewards),
            s = { tokens: new Map() };
          return (
            o.tokens.size > 0
              ? o.tokens.forEach((e) => {
                  s = y(e, l, i.price);
                })
              : (s = l),
            (0, f.yN)('apr', Array.from(s.tokens.values()))
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
              t = g(r, n);
              break;
            case 'supply':
              t = h(r, n);
          }
          return (0, f.yN)('apr', Array.from(t.tokens.values()));
        },
        p = (e) => {
          let { loanToken: t, rewardToken: r, rewardsPerToken: a } = e,
            o = r.toUsd(a),
            f = t.toUsd((0, i.safeParseUnits)('1', t.decimals));
          return o && f ? n.MathLib.wDivDown(o, f) : null;
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
        b = (e, t, r) => {
          let i = { tokens: new Map() };
          return (
            r &&
              r.map((r) => {
                var o, f, d;
                null == r ||
                  null === (d = r.market) ||
                  void 0 === d ||
                  null === (f = d.state) ||
                  void 0 === f ||
                  null === (o = f.rewards) ||
                  void 0 === o ||
                  o.map((o) => {
                    if (!o.amountPerSuppliedToken || 0n === o.amountPerSuppliedToken || !o.asset)
                      return;
                    let f = m({
                        loanToken: e,
                        rewardToken: (0, a.wk)(o.asset),
                        rewardsPerToken: o.amountPerSuppliedToken,
                      }),
                      d = (0, l.R)(t, r.supplyAssets);
                    if (!d) return;
                    let s = f.apr && n.MathLib.wMulDown(f.apr, d),
                      u = n.MathLib.wMulDown(f.proportional.rate, d);
                    i = y(
                      { ...f, apr: s, proportional: { ...f.proportional, rate: u } },
                      i,
                      e.price
                    );
                  });
              }),
            i
          );
        },
        g = (e, t) => {
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
          let { rewardToken: n, rewardsPerToken: i, proportional: a, apr: f } = e;
          if (t.tokens.has(n.address)) {
            let e = t.tokens.get(n.address),
              i = e.apr ? (f ? e.apr + f : e.apr) : f;
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
              apr: f,
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
        o = r(17965),
        f = r(35047);
      let l = {
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
          return null !== (t = l[e]) && void 0 !== t ? t : e;
        };
      function s(e, t) {
        let { data: r, ...o } = e;
        if (!r) return e;
        let l = [r, (0, n.eC)(f.Time.timestamp(), { size: 4 })];
        if (t)
          try {
            if (((t = t.replace(/^(?!0x)/, '')), !(0, i.v)('0x'.concat(t))))
              throw Error('Calldata origin must consists of only hex characters');
            if (t.length > 7) throw Error('Calldata origin must be at most 7 characters long');
            l.push('0x'.concat(t.padStart(8, '2')));
          } catch (e) {
            console.warn('Invalid calldata origin:\n', e.name);
          }
        return { data: (0, a.SM)(l), ...o };
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
          return f;
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
        f = (e, t) => {
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
        R: function () {
          return i;
        },
      });
      var n = r(40252);
      let i = (e, t) => (0n !== e ? n.MathLib.wDivDown(t, e) : 0n);
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
        f = r(4565),
        l = r(56044),
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
        let b = [],
          g = new l.ActionBundleRequirements();
        if (r < t) {
          if (m && null != p) {
            let e = d.Time.timestamp() + d.Time.s.from.h(24n),
              r = { type: 'permit', args: [u, s.rr.legacyMorphoToken, t, e, null, !0] };
            b.push(r),
              g.signatures.push({
                action: r,
                async sign(n) {
                  if (null != r.args[4]) return r.args[4];
                  let i = (0, f.getPermitTypedData)(
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
            g.txs.push({
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
          b.push(
            { type: 'erc20TransferFrom', args: [s.rr.legacyMorphoToken, t, v.generalAdapter1] },
            { type: 'morphoWrapperDepositFor', args: [u, t] }
          ),
          { actions: b, requirements: g }
        );
      };
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
        f = r(17965),
        l = r(40252),
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
        let { initialState: r, finalState: n, operation: i, marketId: v, isNewMarket: b } = e,
          { account: g } = (0, p.Z_)(),
          { publicAllocatorOptions: h } = (0, c.B)(),
          { migratedCollateral: y, migratedBorrow: w } = (0, a.useMemo)(() => {
            if (!r) return { migratedCollateral: r, migratedBorrow: r };
            if (!(null == g ? void 0 : g.address)) return {};
            let e = (0, s.isDefined)(v) ? r.tryGetAccrualPosition(g.address, v) : void 0;
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
            g.address,
            v,
            null == i ? void 0 : i.collateralAssets,
            null == i ? void 0 : i.borrowAssets,
          ]),
          x = (0, a.useMemo)(
            () => r && v && r.getMarketPublicReallocations(v, h).data.tryGetMarket(v),
            [r, v, h]
          ),
          Z = (0, a.useMemo)(
            () => n && v && n.getMarketPublicReallocations(v, h).data.tryGetMarket(v),
            [n, v, h]
          ),
          T = (0, a.useMemo)(
            () => r && g.address && v && r.tryGetAccrualPosition(g.address, v),
            [r, g, v]
          ),
          A = (0, a.useMemo)(
            () => n && g.address && v && n.tryGetAccrualPosition(g.address, v),
            [n, g, v]
          ),
          k = (0, m.z)({
            initialMarket: x,
            initialPosition: T,
            migratedBorrow: w,
            migratedCollateral: y,
            isNewMarket: b,
          }),
          q = (0, u.B9)({
            lltv:
              null !== (t = null == A ? void 0 : A.market.params.lltv) && void 0 !== t
                ? t
                : null == k
                  ? void 0
                  : k.market.params.lltv,
            marketId: null != v ? v : void 0,
          }),
          B = (0, a.useMemo)(() => {
            var e;
            let t =
              null !== (e = null == A ? void 0 : A.ltv) && void 0 !== e
                ? e
                : null == k
                  ? void 0
                  : k.ltv;
            if (t && q) return (0, d.M4)(t, q);
          }, [A, k, q]),
          M = (0, a.useMemo)(() => {
            let e = (0, s.getValue)(null != A ? A : k, 'ltv');
            return (k && !k.isHealthy) || (e && q && e > q)
              ? {
                  level: f.WarningLevel.Red,
                  message: 'Can not complete the transaction as your position is liquidatable.',
                  color: 'text.interactive.error',
                }
              : e && q && B
                ? {
                    level: f.WarningLevel.Yellow,
                    message: "You're close to being liquidated.",
                    color: 'text.interactive.warning',
                  }
                : void 0;
          }, [A, q, k, B]),
          S = (0, a.useMemo)(() => {
            if (T && null != y && !b && T.collateral < y)
              return {
                level: f.WarningLevel.Red,
                message: 'You cannot zap more than your current collateral position.',
                color: 'text.interactive.error',
              };
          }, [T, b, y]),
          I = (0, a.useMemo)(() => {
            if (T && null != w && !b && T.borrowAssets < w)
              return {
                level: f.WarningLevel.Red,
                message: 'You cannot zap more than your current borrow position.',
                color: 'text.interactive.error',
              };
          }, [T, b, w]),
          X = (0, a.useMemo)(() => {
            if (null == k ? void 0 : k.market) {
              if (k.market.liquidity < 0n)
                return {
                  level: f.WarningLevel.Red,
                  message: "There isn't enough liquidity on the market.",
                  color: 'text.interactive.error',
                };
              if (b && k.market.utilization > l.AdaptiveCurveIrmLib.TARGET_UTILIZATION)
                return {
                  level: f.WarningLevel.Yellow,
                  message: 'Utilization of the new market is >90%.',
                  color: 'text.interactive.warning',
                };
            }
          }, [b, k]);
        return {
          initialMarketData: x,
          finalMarketData: Z,
          liquidityError: X,
          previewedPosition: k,
          previewedMarket: null == k ? void 0 : k.market,
          initialPosition: T,
          finalPosition: A,
          errors: { borrowError: I, collateralError: S, ltvError: M, liquidityError: X },
        };
      };
    },
    73057: function (e, t, r) {
      var n = r(58258),
        i = r(54655);
      t.Z = (e, t, r, a) =>
        (0, n.useMemo)(() => {
          if ((0, i.Czs)(e) || !t || !(null == a ? void 0 : a.address))
            return {
              initialData: { position: void 0, balance: void 0 },
              finalData: { position: void 0, balance: void 0 },
            };
          let [n, o] = t,
            f = n.getBundleBalance(e, r),
            l = n.getBundleBalance(e, a.address),
            d = n.tryGetAccrualVault(r),
            s = null == o ? void 0 : o.getBundleBalance(e, r),
            u = null == o ? void 0 : o.getBundleBalance(e, a.address),
            c = null == o ? void 0 : o.tryGetAccrualVault(r);
          return {
            initialData: {
              position: null == d ? void 0 : d.toAssets(null != f ? f : 0n),
              balance: l,
            },
            finalData: {
              position: null == c ? void 0 : c.toAssets(null != s ? s : 0n),
              balance: u,
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
              migratedBorrow: f,
              isNewMarket: l,
            } = e,
            d = a({ initialMarket: t, migratedBorrow: f, isNewMarket: l });
          return (0, n.useMemo)(() => {
            if (!d || !r || null == o) return null;
            let e = r.collateral + (l ? 1n : -1n) * (null != o ? o : 1n),
              t = d.toBorrowShares(r.borrowAssets + (l ? 1n : -1n) * (null != f ? f : 1n));
            return new i.AccrualPosition(
              { ...r, collateral: i.MathLib.max(e, 0n), borrowShares: i.MathLib.max(t, 0n) },
              d
            );
          }, [r, o, f, l, d]);
        };
    },
    5469: function (e, t, r) {
      r.d(t, {
        z: function () {
          return L;
        },
        H: function () {
          return O;
        },
      });
      var n = r(58258),
        i = r(45842),
        a = r(30785),
        o = r(12556),
        f = r(26726),
        l = r(89991),
        d = r(55412),
        s = r(3245),
        u = r(63658),
        c = r(24387);
      function p() {
        let e = (0, d._)([
          '\n  query GetRewardsMetadata($assetsAddresses: [String!]!, $chainId: Int!) {\n    rewardsTokens: assets(\n      first: 1000\n      where: { address_in: $assetsAddresses, chainId_in: [$chainId] }\n    ) {\n      items {\n        ...simpleAssetFields\n      }\n    }\n  }\n  ',
          '\n',
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      let m = {},
        v = (0, s.Ps)(p(), c.G);
      var b = r(49663),
        g = r(18313),
        h = r(73529),
        y = r(81961),
        w = r(31374);
      let x = (e) =>
          h.Z.object({
            user: h.Z.address().required(),
            asset: h.Z.object({
              id: h.Z.string().required(),
              address: h.Z.address().required(),
              chainId: h.Z.number().valid(e).required(),
            })
              .unknown(!0)
              .required(),
            distributor: h.Z.object({
              id: h.Z.string().required(),
              address: h.Z.address().required(),
              chainId: h.Z.number().valid(e).required(),
            })
              .unknown(!0)
              .required(),
            claimable: h.Z.bigint().required(),
            proof: h.Z.array().items(h.Z.bytes32String()).required(),
            txData: h.Z.string(),
          }).unknown(!0),
        Z = (e) => h.Z.array().items(x(e)),
        T = async function (e, t) {
          var r;
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!e || !t) return [];
          let i = ''
            .concat(g.clientEnvs.NEXT_PUBLIC_REWARDS_API_URL, '/v1/users/')
            .concat(e, '/distributions?trusted=true&chain_id=')
            .concat(t);
          n && (i += '&noCache='.concat(Date.now().toString()));
          let a = await fetch(i),
            o = await a.json();
          return (0, w.S)(
            null === (r = (0, y.N)(o.data)) || void 0 === r
              ? void 0
              : r.filter((e) => {
                  let { error: r } = x(t).validate(e, { abortEarly: !1 });
                  if (r) {
                    let t = (0, w.b)(r, e);
                    console.error(
                      'Validation failed for rewards distribution. Error code: '.concat(t)
                    );
                  }
                  return !r;
                }),
            Z(t)
          );
        };
      var A = r(77672),
        k = r.n(A),
        q = r(50566);
      let B = k().object({
          id: k().string().required(),
          type: k().string().valid('ETHERSCAN').required(),
          url: k().string().uri().required(),
          chainId: k().number().required(),
        }),
        M = k().object({
          id: k().number().required(),
          name: k().string().required(),
          icon: k().string().uri().required(),
          Explorer: k().array().items(B).required(),
        }),
        S = k().object({
          address: k().string().required(),
          chainId: k().number().required(),
          symbol: k().string().required(),
          decimals: k().number().required(),
          price: k().number().allow(null),
        }),
        I = k().object({
          reason: k().string().required(),
          amount: k().string().required(),
          claimed: k().string().required(),
          pending: k().string().required(),
          campaignId: k().string().required(),
        }),
        X = k().object({
          root: k().string().required(),
          recipient: k().string().required(),
          amount: k().string().required(),
          claimed: k().string().required(),
          pending: k().string().required(),
          proofs: k().array().items(k().string()).required(),
          token: S.required(),
          breakdowns: k().array().items(I).required(),
        }),
        C = k().object({ chain: M.required(), rewards: k().array().items(X).required() }),
        R = (0, q.S)('https://api.merkl.xyz').v4,
        P = async (e, t) => {
          var r;
          if (!e || !t) return [];
          let n = await R.users({ address: e }).rewards.get({ query: { chainId: [t.toString()] } });
          return (
            await (0, w.S)(
              null == n
                ? void 0
                : null === (r = n.data) || void 0 === r
                  ? void 0
                  : r.filter((e) => {
                      let { error: t } = C.validate(e, { abortEarly: !1 });
                      if (t) {
                        let r = (0, w.b)(t, e);
                        console.error(
                          'Validation failed for rewards merkl. Error code: '.concat(r)
                        );
                      }
                      return !t;
                    }),
              k().array().items(C)
            ),
            null == n ? void 0 : n.data
          );
        };
      var F = r(81066);
      let L =
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
        D = [b.rr.legacyMorphoToken, b.rr.deprecatedMorphoToken],
        O = () => {
          var e, t;
          let { account: r, targetChainId: d } = (0, l.Z_)(),
            s = (0, f.nh)(f.TP.MERKL_REWARD),
            c = (0, a.h)({
              queries: [
                {
                  queryKey: ['rewards-morpho', r.address, d],
                  queryFn: async () => (0, F.AH)(r.address, d, !0),
                },
                {
                  queryKey: ['distributions', r.address, d],
                  queryFn: async () => T(r.address, d, !0),
                },
                {
                  queryKey: ['rewards-merkl', r.address, d],
                  queryFn: async () => P(r.address, d),
                  enabled: s,
                },
              ],
            }),
            [p, g, h] = c,
            y = (0, n.useCallback)(() => {
              c[0].refetch(), c[1].refetch(), c[2].refetch();
            }, [c]),
            w = (0, n.useMemo)(
              () =>
                h.data
                  ? h.data.flatMap((e) => {
                      let { rewards: t } = e;
                      return t;
                    })
                  : h.data,
              [h.data]
            ),
            x = (0, n.useMemo)(() => {
              var e;
              return p.data
                ? null === (e = p.data) || void 0 === e
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
                : p.data;
            }, [p.data]),
            Z = (0, n.useMemo)(() => {
              var e, t, r;
              if (p.isLoading || g.isLoading || h.isLoading) return;
              let n = Array.from(
                new Set(
                  null == x
                    ? void 0
                    : x
                        .map((e) => {
                          let { asset: t } = e;
                          return t.address;
                        })
                        .concat(
                          null !==
                            (t =
                              null === (e = g.data) || void 0 === e
                                ? void 0
                                : e.map((e) => {
                                    let { asset: t } = e;
                                    return t.address;
                                  })) && void 0 !== t
                            ? t
                            : []
                        )
                        .concat(
                          null !== (r = null == w ? void 0 : w.map((e) => e.token.address)) &&
                            void 0 !== r
                            ? r
                            : []
                        )
                )
              );
              return (
                D.forEach((e) => {
                  n.includes(e) && !n.includes(b.rr.morphoToken) && n.push(b.rr.morphoToken);
                }),
                n
              );
            }, [x, g.data, w, p.isLoading, g.isLoading, h.isLoading]),
            {
              data: A,
              error: k,
              loading: q,
            } = (function (e) {
              let t = { ...m, ...e };
              return u.aM(v, t);
            })({
              variables: { assetsAddresses: null != Z ? Z : [], chainId: d },
              skip: !(null == Z ? void 0 : Z.length),
            }),
            B = (0, n.useMemo)(
              () =>
                r.address
                  ? p.isLoading || g.isLoading || h.isLoading
                    ? void 0
                    : k || !A
                      ? {
                          distributions: g.data,
                          rewardsMorpho:
                            null == x ? void 0 : x.map((e) => ({ ...e, metadata: null })),
                          rewardsMerkl:
                            null == w ? void 0 : w.map((e) => ({ ...e, metadata: null })),
                        }
                      : {
                          distributions: g.data,
                          rewardsMorpho:
                            null == x
                              ? void 0
                              : x.map((e) => {
                                  var t, r;
                                  let n;
                                  let i =
                                    ((n = null),
                                    D.includes(e.asset.address) &&
                                      (n =
                                        null === (r = A.rewardsTokens.items) || void 0 === r
                                          ? void 0
                                          : r.find((e) => e.address === b.rr.morphoToken)),
                                    {
                                      assetPriced: n,
                                      asset:
                                        null === (t = A.rewardsTokens.items) || void 0 === t
                                          ? void 0
                                          : t.find((t) => t.address === e.asset.address),
                                    });
                                  return { ...e, metadata: { assets: i } };
                                }),
                          rewardsMerkl:
                            null == w
                              ? void 0
                              : w.map((e) => {
                                  var t;
                                  let r =
                                    null === (t = A.rewardsTokens.items) || void 0 === t
                                      ? void 0
                                      : t.find((t) => t.address === e.token.address);
                                  return { ...e, metadata: { asset: r } };
                                }),
                        }
                  : null,
              [r.address, g.data, x, w, k, A, p.isLoading, g.isLoading, h.isLoading]
            ),
            M = (0, n.useMemo)(() => {
              var e;
              return (
                null == B
                  ? void 0
                  : null === (e = B.rewardsMorpho) || void 0 === e
                    ? void 0
                    : e.some(F.JD)
              )
                ? [
                    {
                      type: 'safe',
                      claimable: { amount: null, amountUsd: null },
                      accruing: { amount: null, amountUsd: null },
                      rewardToken: {
                        token: (0, o.wk)({
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
            }, [null == B ? void 0 : B.rewardsMorpho]),
            S = (0, n.useMemo)(() => {
              var e;
              if (!B) return [];
              let t = new Map();
              return (
                null == B ||
                  null === (e = B.rewardsMorpho) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    var r, n, i, a, f, l, d, s, u, c, p, m, v, g, h, y, w, x, Z;
                    let T = ''.concat(e.asset.address),
                      A = (0, o.wk)(
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
                            null === (f = e.forCollateral) || void 0 === f
                              ? void 0
                              : f.claimableNext) && void 0 !== g
                          ? g
                          : 0n) +
                        (null !==
                          (h =
                            null === (l = e.amount) || void 0 === l ? void 0 : l.claimableNext) &&
                        void 0 !== h
                          ? h
                          : 0n),
                      q = null == A ? void 0 : A.toUsd(k),
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
                          (Z = null === (c = e.amount) || void 0 === c ? void 0 : c.claimableNow) &&
                        void 0 !== Z
                          ? Z
                          : 0n),
                      M = null == A ? void 0 : A.toUsd(B);
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
                    if (!A) return;
                    let S = [];
                    e.asset.address === b.rr.legacyMorphoToken &&
                      (e.type === F.Ii.Market || e.type === F.Ii.Vault) &&
                      S.push(E.MORPHO_LEGACY),
                      e.type === F.Ii.Airdrop && S.push(E.MORPHO_SAFE),
                      e.type === F.Ii.Uniform && S.push(E.MORPHO_CURRENT);
                    let I = {
                      type: e.type,
                      claimable: { amount: B, amountUsd: null != M ? M : 0n, token: A },
                      accruing: { amount: k, amountUsd: null != q ? q : 0n, token: A },
                      rewardToken: { token: A, badges: S },
                    };
                    t.set(T, I);
                  }),
                [...t.values(), ...M]
              );
            }, [B, M]),
            I = (0, n.useMemo)(() => {
              var e;
              if (!B) return [];
              let t = new Map();
              return (
                null == B ||
                  null === (e = B.rewardsMerkl) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    var r, n, i;
                    let a = ''.concat(e.token.address),
                      f = (null === (r = e.metadata) || void 0 === r ? void 0 : r.asset)
                        ? (0, o.wk)(null === (n = e.metadata) || void 0 === n ? void 0 : n.asset)
                        : (0, o.wk)({
                            address: e.token.address,
                            symbol: e.token.symbol,
                            name: null !== (i = e.token.name) && void 0 !== i ? i : e.token.symbol,
                            decimals: e.token.decimals,
                            chain: { id: e.token.chainId },
                            logoURI: null,
                            priceUsd: e.token.price,
                          }),
                      l = BigInt(e.amount) - BigInt(e.claimed),
                      d = null == f ? void 0 : f.toUsd(l);
                    if (!l) return;
                    let s = BigInt(e.pending),
                      u = null == f ? void 0 : f.toUsd(s);
                    if (t.has(a)) {
                      let e = t.get(a);
                      return (
                        (e.accruing.amount += s),
                        (e.accruing.amountUsd += null != u ? u : 0n),
                        (e.claimable.amount += l),
                        (e.claimable.amountUsd += null != d ? d : 0n),
                        t.set(a, e)
                      );
                    }
                    t.set(a, {
                      type: F.Ii.Merkl,
                      claimable: { amount: l, amountUsd: d, token: f },
                      accruing: { amount: s, amountUsd: u, token: f },
                      rewardToken: { token: f },
                    });
                  }),
                [...t.values()]
              );
            }, [B]),
            X = (0, n.useMemo)(() => {
              let e = new Map(),
                t = (t) => {
                  let r = t.rewardToken.token.address;
                  if (e.has(r)) {
                    var n, i, a, o, f, l, d, s;
                    let u = structuredClone(e.get(r));
                    (u.accruing.amount +=
                      null !==
                        (f = null === (n = t.accruing) || void 0 === n ? void 0 : n.amount) &&
                      void 0 !== f
                        ? f
                        : 0n),
                      (u.accruing.amountUsd +=
                        null !==
                          (l = null === (i = t.accruing) || void 0 === i ? void 0 : i.amountUsd) &&
                        void 0 !== l
                          ? l
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
              return I.forEach(t), S.forEach(t), [...e.values()];
            }, [S, I]);
          return {
            display: { rewardsMorpho: S, rewardsMerkl: I, rewardsMerged: X },
            txData: {
              distributions:
                null !== (e = null == B ? void 0 : B.distributions) && void 0 !== e ? e : [],
              rewardsMerkl:
                null !== (t = null == B ? void 0 : B.rewardsMerkl) && void 0 !== t ? t : [],
            },
            loading: q || p.isLoading || g.isLoading || h.isLoading,
            error: p.error || g.error || h.error,
            refetchRewards: y,
          };
        };
    },
    47528: function (e, t, r) {
      r.d(t, {
        H: function () {
          return l;
        },
        f: function () {
          return f;
        },
      });
      var n = r(58258),
        i = r(12556),
        a = r(35047),
        o = r(73828);
      let f = function (e) {
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
        l = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'borrow';
          return (0, n.useMemo)(() => f(e, t), [e, t]);
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
          return l;
        },
      });
      var n = r(58258),
        i = r(47312),
        a = r(4565),
        o = r(12556),
        f = r(89991);
      let l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { data: r } = (0, i.useWalletClient)(),
          { account: l } = (0, f.Z_)(),
          d = (0, o.ib)(() => {
            if ((null == l ? void 0 : l.address) && (null == t || !t.skip) && r)
              return (0, a.fetchHolding)(l.address, e, r);
          }, [null == l ? void 0 : l.address, null == t ? void 0 : t.skip, r, e]),
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
          isFetching: f,
          isFetchingAny: l,
          isPending: d,
        } = (0, i.N)();
        return {
          data: null != t ? (null != e ? t[e] : (0, n.getLastDefined)(t)) : void 0,
          error: r,
          blockError: a,
          simulationError: o,
          isFetching: f,
          isFetchingAny: l,
          isPending: d,
        };
      };
    },
  },
]);
