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
    (e._sentryDebugIds[t] = 'c46116fa-941f-49fb-b109-32a3c8a96f89'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-c46116fa-941f-49fb-b109-32a3c8a96f89'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9626],
  {
    45609: function (e, t, r) {
      r.d(t, {
        F: function () {
          return i;
        },
      });
      var n = r(38819),
        a = r(54655);
      let i = (0, n.Z)(a.Kqy, { target: 'ebb6v3g0' })(
        'max-height:450px;flex-direction:column;overflow-y:auto;gap:20px;'
      );
    },
    7149: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return Q;
        },
      });
      var n = r(78286),
        a = r(58258);
      r(7477);
      var i = r(65978),
        f = r(82803),
        o = r(45609),
        l = r(12556),
        d = r(54655),
        s = r(35047),
        u = r(725),
        c = r(89991),
        p = r(36247),
        b = r(4565),
        m = r(78017),
        g = r(35288),
        v = r(16820),
        h = r(47528),
        y = r(71985),
        w = (0, a.memo)((e) => {
          let { className: t, amount: r, asset: i, label: f } = e,
            o = (0, a.useMemo)(() => i.toUsd(r), [i, r]);
          return (0, n.BX)(d.Kqy, {
            className: t,
            direction: 'column',
            gap: 12,
            align: 'stretch',
            paddingBottom: 4,
            children: [
              (0, n.tZ)(d.xvT.Body.XS.Regular, { color: 'text.secondary', children: f }),
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
                          .digits((0, d.QQD)(i.price, r))
                          .trailingZero(!r)
                          .of(r, i.decimals),
                      }),
                      (0, n.tZ)(d.xvT.Title.XS, { color: 'text.tertiary', children: i.symbol }),
                      (0, s.isDefined)(o)
                        ? (0, n.tZ)(d.Vp9, {
                            variant: 'bundler',
                            children: (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
                              lineHeight: 'normal',
                              color: 'text.body',
                              children: d.$0l.short
                                .smallValuesWithCommas()
                                .digits(2)
                                .unit('$')
                                .of(o, 18),
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, n.tZ)(d.qEK, { src: i.logoURI, size: 24, padding: 0 }),
                ],
              }),
            ],
          });
        });
      let x = (e) => {
          let { price: t, amount: r, decimals: n, withTrailingZero: a } = e;
          return d.$0l.commas
            .digits((0, d.QQD)(t, r))
            .trailingZero(a)
            .of(r, n);
        },
        T = d.$0l.percent.digits(2).default('0%').trailingZero(!1).unit('%'),
        Z = {
          [f.H.InterfaceOperationType.supplyCollateralBorrow]: 'Supply Collateral',
          [f.H.InterfaceOperationType.withdrawCollateralRepay]: 'Withdraw Collateral',
        },
        k = {
          [f.H.InterfaceOperationType.supplyCollateralBorrow]: 'Borrow',
          [f.H.InterfaceOperationType.withdrawCollateralRepay]: 'Repay',
        };
      var A = (0, a.memo)((e) => {
          let {
              collateralAsset: t,
              loanAsset: r,
              lltv: i,
              oracle: f,
              warnings: o,
              uniqueKey: l,
              operation: p,
              borrowAmount: A,
              mode: q,
              state: B,
              dailyBorrowApy: M,
              dailyNetBorrowApy: S,
              initialPosition: C,
              finalPosition: I,
              label: R,
              isPositionUnhealthy: X,
            } = e,
            { targetChainId: P } = (0, c.Z_)(),
            F = (0, h.H)({ state: B, loanAsset: r }),
            E = (0, d.$4C)({ chainId: P, uniqueKey: p.marketId, collateralAddress: t.address }),
            D = (0, a.useMemo)(() => (0, b.safeParseNumber)(M || 0, 18), [M]),
            L = (0, a.useMemo)(() => d.$0l.percent.default('0.00').digits(2).unit('%').of(S), [S]),
            O = (0, a.useMemo)(() => {
              var e, n;
              return {
                collateral: x({
                  price: null !== (e = t.price) && void 0 !== e ? e : 0n,
                  amount: null == C ? void 0 : C.collateral,
                  decimals: t.decimals,
                  withTrailingZero: !(null == C ? void 0 : C.collateral),
                }),
                borrowAssets: x({
                  price: null !== (n = r.price) && void 0 !== n ? n : 0n,
                  amount: null == C ? void 0 : C.borrowAssets,
                  decimals: r.decimals,
                  withTrailingZero: !(null == C ? void 0 : C.borrowAssets),
                }),
                ltv: T.of(null == C ? void 0 : C.ltv, 18),
              };
            }, [
              t.price,
              t.decimals,
              null == C ? void 0 : C.collateral,
              null == C ? void 0 : C.borrowAssets,
              null == C ? void 0 : C.ltv,
              r.price,
              r.decimals,
            ]),
            _ = (0, a.useMemo)(() => {
              var e, n;
              return {
                collateral: x({
                  price: null !== (e = t.price) && void 0 !== e ? e : 0n,
                  amount: null == I ? void 0 : I.collateral,
                  decimals: t.decimals,
                  withTrailingZero: !(null == I ? void 0 : I.collateral),
                }),
                borrowAssets: x({
                  price: null !== (n = r.price) && void 0 !== n ? n : 0n,
                  amount: null == I ? void 0 : I.borrowAssets,
                  decimals: r.decimals,
                  withTrailingZero: !(null == I ? void 0 : I.borrowAssets),
                }),
                ltv: T.of(null == I ? void 0 : I.ltv, 18),
              };
            }, [
              t.price,
              t.decimals,
              null == I ? void 0 : I.collateral,
              null == I ? void 0 : I.borrowAssets,
              null == I ? void 0 : I.ltv,
              r.price,
              r.decimals,
            ]),
            K = (0, a.useMemo)(
              () =>
                '0' === _.collateral && '0' === _.borrowAssets ? 0n : null == I ? void 0 : I.ltv,
              [_, I]
            ),
            U = (0, a.useMemo)(() => Z[R], [R]),
            H = (0, a.useMemo)(() => k[R], [R]);
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
                      children: T.of(i, 18),
                    }),
                  }),
                  f &&
                    (0, n.tZ)(g.Z, {
                      tagProps: { variant: 'bundler' },
                      oracle: f,
                      warnings: null != o ? o : [],
                      typographyProps: { color: 'text.body' },
                    }),
                  (0, n.tZ)(d.mUV, {
                    toCopy: l,
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
                  p.collateralAssets > 0n &&
                    (0, n.BX)(n.HY, {
                      children: [
                        (0, n.tZ)(w, { amount: p.collateralAssets, asset: t, label: U }),
                        (0, n.tZ)(d.Z0O, {}),
                      ],
                    }),
                  (0, s.isDefined)(A) &&
                    A > 0n &&
                    (0, n.BX)(n.HY, {
                      children: [
                        (0, n.tZ)(w, { amount: A, asset: r, label: H }),
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
                              children: ['Collateral (', t.symbol, ')'],
                            }),
                            (0, n.BX)(d.Kqy, {
                              gap: 4,
                              children: [
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.interactive.disabled',
                                  children: O.collateral,
                                }),
                                (0, n.tZ)(d.JO$, {
                                  icon: 'ArrowRightPlain20',
                                  color: 'text.body',
                                  size: 20,
                                }),
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.body',
                                  children: _.collateral,
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
                              children: ['Loan (', r.symbol, ')'],
                            }),
                            (0, n.BX)(d.Kqy, {
                              gap: 4,
                              children: [
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.interactive.disabled',
                                  children: O.borrowAssets,
                                }),
                                (0, n.tZ)(d.JO$, {
                                  icon: 'ArrowRightPlain20',
                                  color: 'text.body',
                                  size: 20,
                                }),
                                (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                  color: 'text.body',
                                  children: _.borrowAssets,
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
                            (0, n.tZ)(m.w, {
                              RewardsHoverCardProps: {
                                apy: D,
                                rewards: F,
                                points: E,
                                variant: 'market',
                                asset: t,
                                netApy: (0, v.Pi)(S, b.safeParseNumber),
                              },
                              children: (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                color: 'text.body',
                                lineHeight: 'normal',
                                children: L,
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
                                marketId: l,
                                label: 'LTV / Auto-Deleverage Liq. LTV',
                              }),
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
                                      children: T.of(K, 18),
                                    }),
                                    (0, n.tZ)(d.xvT.Inherit, { children: '/' }),
                                    (0, n.tZ)(u.v1, { lltv: i, marketId: l }),
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
        q = (0, a.memo)((e) => {
          var t, r, i;
          let {
              operation: f,
              initialState: o,
              finalState: b,
              mode: m,
              onRiskyPosition: g,
              onLiquidatablePosition: v,
            } = e,
            { targetChainId: h, account: y } = (0, c.Z_)(),
            w = (0, p.Zc)({ variables: { uniqueKey: f.marketId, chainId: h } }),
            x = null === (t = w.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            T = (0, u.B9)({ lltv: null == x ? void 0 : x.lltv, marketId: f.marketId }),
            Z = (0, a.useMemo)(() => {
              if (f.loanAssets) return f.loanAssets;
              let e = null == o ? void 0 : o.tryGetMarket(f.marketId);
              if (e) return e.toBorrowAssets(f.loanShares);
            }, [o, f.loanAssets, f.loanShares, f.marketId]),
            k = (0, a.useMemo)(() => x && (0, l.wk)(x.loanAsset), [x]),
            q = (0, a.useMemo)(() => x && (0, l.wk)(x.collateralAsset), [x]),
            B = (0, a.useMemo)(() => {
              if (o && y.address) return o.tryGetAccrualPosition(y.address, f.marketId);
            }, [y.address, o, f.marketId]),
            M = (0, a.useMemo)(() => {
              if (b && y.address) return b.tryGetAccrualPosition(y.address, f.marketId);
            }, [y.address, b, f.marketId]),
            S = (0, a.useMemo)(
              () => null != M && !!M.ltv && !!T && (0, l.M4)(M.ltv, T),
              [null == M ? void 0 : M.ltv, T]
            );
          return ((0, a.useEffect)(() => {
            S && (null == g || g()),
              (null == M ? void 0 : M.ltv) && T && M.ltv >= T && (null == v || v());
          }, [S, g, v, null == M ? void 0 : M.ltv, T]),
          w.loading)
            ? (0, n.tZ)(d.OdW, { height: '317px', borderRadius: '12px' })
            : x && null != Z && k && q && B && M
              ? (0, n.tZ)(A, {
                  label: f.type,
                  mode: m,
                  collateralAsset: q,
                  loanAsset: k,
                  lltv: T,
                  warnings: null == x ? void 0 : x.warnings,
                  uniqueKey: f.marketId,
                  operation: f,
                  borrowAmount: Z,
                  initialPosition: B,
                  finalPosition: M,
                  state: x.state,
                  dailyBorrowApy:
                    null === (r = x.state) || void 0 === r ? void 0 : r.dailyBorrowApy,
                  dailyNetBorrowApy:
                    null === (i = x.state) || void 0 === i ? void 0 : i.dailyNetBorrowApy,
                  oracle: { address: x.oracleAddress, ...x.oracleFeed },
                  isPositionUnhealthy: S,
                })
              : (0, n.tZ)(d.SKT, {
                  height: '317px',
                  text: 'Cannot display interaction with market '.concat(
                    (0, s.formatLongString)(f.marketId, 20)
                  ),
                });
        }),
        B = r(99153),
        M = (0, a.memo)((e) => {
          var t;
          let { operation: r, mode: i } = e,
            { targetChainId: f } = (0, c.Z_)(),
            o = (0, B.eg)({ variables: { address: r.vaultAddress, chainId: f } }),
            s = null === (t = o.data) || void 0 === t ? void 0 : t.vaultByAddress,
            u = (0, a.useMemo)(
              () => (0, l.wk)(null == s ? void 0 : s.asset),
              [null == s ? void 0 : s.asset]
            ),
            p = (0, a.useMemo)(() => {
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
            b = (0, a.useMemo)(() => {
              if (r.position)
                return l.FW.getProtocol({
                  chainId: f,
                  name: r.position.migratablePosition.protocol,
                });
            }, [r.position, f]);
          return o.loading
            ? (0, n.tZ)(d.OdW, { height: '282px', borderRadius: '12px' })
            : s && u && r.position
              ? (0, n.BX)(y.P, {
                  direction: 'column',
                  gap: 32,
                  mode: i,
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      align: 'center',
                      children: [
                        (0, n.tZ)(d.qEK, {
                          src: null == b ? void 0 : b.imageSrc,
                          size: 24,
                          padding: 2,
                        }),
                        (0, n.tZ)(d.xvT.Title.XS, {
                          color: 'text.body',
                          children: null == b ? void 0 : b.name,
                        }),
                      ],
                    }),
                    (0, n.BX)(d.Kqy, {
                      direction: 'column',
                      gap: 12,
                      align: 'stretch',
                      children: [
                        (0, n.tZ)(w, { amount: r.assets, asset: u, label: 'Withdraw' }),
                        'Review' === i &&
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
                                            children: (0, v.sL)({
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
                                            children: (0, v.sL)({
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
                  text: 'Cannot display interaction with vault '.concat((0, v.Tg)(r.vaultAddress)),
                });
        }),
        S = r(86144),
        C = r(9834),
        I = r(73057),
        R = r(83897);
      let X = {
          [f.H.InterfaceOperationType.metaMorphoDeposit]: 'Deposit',
          [f.H.InterfaceOperationType.metaMorphoWithdraw]: 'Withdraw',
          [f.H.InterfaceOperationType.migrateSupply]: 'Deposit',
        },
        P = d.$0l.commas.trailingZero(!1);
      var F = (0, a.memo)((e) => {
          var t, r, i, o, s, u, p, m;
          let { operation: g, initialState: h, finalState: x, mode: T } = e,
            { targetChainId: Z, account: k } = (0, c.Z_)(),
            A = (0, B.eg)({ variables: { address: g.vaultAddress, chainId: Z } }),
            q = null === (t = A.data) || void 0 === t ? void 0 : t.vaultByAddress,
            M = (0, a.useMemo)(() => {
              if (g.assets) return g.assets;
              let e = null == h ? void 0 : h.tryGetVault(g.vaultAddress);
              if (e) return e.toAssets(g.shares);
            }, [h, g.assets, g.shares, g.vaultAddress]),
            F = (0, a.useMemo)(
              () => (0, l.wk)(null == q ? void 0 : q.asset),
              [null == q ? void 0 : q.asset]
            ),
            { initialData: E, finalData: D } = (0, I.Z)(
              k.address,
              h && x ? [h, x] : void 0,
              g.vaultAddress,
              F
            ),
            L = (0, a.useMemo)(() => {
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
            O = (0, a.useMemo)(() => {
              var e;
              return (0, C.m)(
                null == q ? void 0 : null === (e = q.state) || void 0 === e ? void 0 : e.allocation
              );
            }, [
              null == q ? void 0 : null === (i = q.state) || void 0 === i ? void 0 : i.allocation,
            ]),
            _ = (0, R.M)(
              g.vaultAddress,
              null == q ? void 0 : q.state,
              null == q ? void 0 : q.asset
            ),
            K = (0, d.vmq)({
              chainId: Z,
              vaultAddress: g.vaultAddress,
              allocation:
                null == q ? void 0 : null === (o = q.state) || void 0 === o ? void 0 : o.allocation,
            }),
            U = (0, a.useMemo)(() => {
              if (g.type === f.H.InterfaceOperationType.migrateSupply) {
                var e;
                return (null !== (e = E.position) && void 0 !== e ? e : 0n) + g.assets;
              }
              return D.position;
            }, [D.position, g.type, g.assets, E.position]);
          return A.loading
            ? (0, n.tZ)(d.OdW, { height: '282px', borderRadius: '12px' })
            : q && null != M && F
              ? (0, n.BX)(y.P, {
                  direction: 'column',
                  gap: 32,
                  mode: T,
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
                        (0, n.tZ)(w, { amount: M, asset: F, label: X[g.type] }),
                        'Review' === T &&
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
                                        children: ['Deposit (', F.symbol, ')'],
                                      }),
                                      (0, n.BX)(d.Kqy, {
                                        gap: 2,
                                        children: [
                                          (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                            color: 'text.interactive.disabled',
                                            children: P.digits((0, d.QQD)(F.price, E.position))
                                              .trailingZero(!E.position)
                                              .of(E.position, F.decimals),
                                          }),
                                          (0, n.tZ)(d.JO$, {
                                            icon: 'ArrowRightPlain20',
                                            color: 'text.body',
                                          }),
                                          (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                            color: 'text.body',
                                            children: P.digits((0, d.QQD)(F.price, U))
                                              .trailingZero(!D.position)
                                              .of(U, F.decimals),
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
                                      (0, n.tZ)(S.Z, {
                                        RewardsHoverCardProps: {
                                          performanceFee: (0, v.Pi)(
                                            null == q
                                              ? void 0
                                              : null === (u = q.state) || void 0 === u
                                                ? void 0
                                                : u.fee,
                                            b.safeParseNumber
                                          ),
                                          apy: (0, v.Pi)(
                                            null == q
                                              ? void 0
                                              : null === (p = q.state) || void 0 === p
                                                ? void 0
                                                : p.dailyApy,
                                            b.safeParseNumber
                                          ),
                                          rewards: _,
                                          points: K,
                                          variant: 'vault',
                                          asset: F,
                                          netApy: (0, v.Pi)(
                                            null == q
                                              ? void 0
                                              : null === (m = q.state) || void 0 === m
                                                ? void 0
                                                : m.dailyNetApy,
                                            b.safeParseNumber
                                          ),
                                        },
                                        children: (0, n.tZ)(d.xvT.Body.XS.Regular, {
                                          color: 'text.body',
                                          children: L,
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
                  text: 'Cannot display interaction with vault '.concat((0, v.Tg)(g.vaultAddress)),
                });
        }),
        E = (0, a.memo)((e) => {
          let { operation: t, initialState: r, finalState: a, mode: i } = e;
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(M, { operation: t, mode: i }),
              (0, n.tZ)(F, { operation: t, initialState: r, finalState: a, mode: i }),
            ],
          });
        }),
        D = r(17965),
        L = r(19311),
        O = r(82196),
        _ = (0, a.memo)((e) => {
          var t, r, i, o;
          let {
              initialState: u,
              finalState: p,
              operation: b,
              mode: m,
              onRiskyPosition: g,
              onLiquidatablePosition: v,
            } = e,
            { targetChainId: h } = (0, c.Z_)(),
            y = (0, O.Pm)({
              variables: { where: { uniqueKey_in: [b.marketId, b.marketTo], chainId_in: [h] } },
            }),
            w = (0, a.useMemo)(() => {
              var e, t;
              return null === (t = y.data) || void 0 === t
                ? void 0
                : null === (e = t.markets.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.uniqueKey === b.marketId);
            }, [y.data, b.marketId]),
            x = (0, a.useMemo)(() => {
              var e, t;
              return null === (t = y.data) || void 0 === t
                ? void 0
                : null === (e = t.markets.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.uniqueKey === b.marketTo);
            }, [y.data, b.marketTo]),
            T = (0, a.useMemo)(() => {
              if (w)
                return {
                  collateralToken: (0, l.wk)(w.collateralAsset),
                  loanToken: (0, l.wk)(w.loanAsset),
                };
            }, [w]),
            Z = (0, a.useMemo)(() => {
              if (x)
                return {
                  collateralToken: (0, l.wk)(x.collateralAsset),
                  loanToken: (0, l.wk)(x.loanAsset),
                };
            }, [x]),
            k = (0, L.g)({
              marketId: b.marketId,
              isNewMarket: !1,
              operation: b,
              initialState: u,
              finalState: p,
            }),
            q = (0, L.g)({
              marketId: b.marketTo,
              isNewMarket: !0,
              operation: b,
              initialState: u,
              finalState: p,
            });
          return ((0, a.useEffect)(() => {
            let e = k.errors.ltvError,
              t = q.errors.ltvError,
              r = [e, t].some((e) => (null == e ? void 0 : e.level) === D.WarningLevel.Red),
              n = [e, t].some((e) => (null == e ? void 0 : e.level) === D.WarningLevel.Yellow);
            r && (null == v || v()), n && (null == g || g());
          }, [k.errors.ltvError, q.errors.ltvError, g, v]),
          y.loading)
            ? (0, n.tZ)(d.OdW, { height: '317px', borderRadius: '12px' })
            : w &&
                x &&
                (null == T ? void 0 : T.collateralToken) &&
                (null == T ? void 0 : T.loanToken) &&
                (null == Z ? void 0 : Z.collateralToken) &&
                (null == Z ? void 0 : Z.loanToken)
              ? (0, n.BX)(n.HY, {
                  children: [
                    (0, n.tZ)(A, {
                      mode: m,
                      label: f.H.InterfaceOperationType.withdrawCollateralRepay,
                      collateralAsset: T.collateralToken,
                      loanAsset: T.loanToken,
                      lltv: null == w ? void 0 : w.lltv,
                      warnings: null == w ? void 0 : w.warnings,
                      uniqueKey: b.marketId,
                      operation: b,
                      borrowAmount: b.borrowAssets,
                      initialPosition: k.initialPosition,
                      finalPosition: k.finalPosition,
                      state: null == w ? void 0 : w.state,
                      dailyBorrowApy:
                        null == w
                          ? void 0
                          : null === (t = w.state) || void 0 === t
                            ? void 0
                            : t.dailyBorrowApy,
                      dailyNetBorrowApy:
                        null == w
                          ? void 0
                          : null === (r = w.state) || void 0 === r
                            ? void 0
                            : r.dailyNetBorrowApy,
                      oracle: {
                        address: null == w ? void 0 : w.oracleAddress,
                        ...(null == w ? void 0 : w.oracleFeed),
                      },
                      isPositionUnhealthy: !!k.errors.ltvError,
                    }),
                    (0, n.tZ)(A, {
                      mode: m,
                      label: f.H.InterfaceOperationType.supplyCollateralBorrow,
                      collateralAsset: Z.collateralToken,
                      loanAsset: Z.loanToken,
                      lltv: null == x ? void 0 : x.lltv,
                      warnings: null == x ? void 0 : x.warnings,
                      uniqueKey: b.marketTo,
                      operation: b,
                      borrowAmount: b.borrowAssets,
                      initialPosition: q.initialPosition,
                      finalPosition: q.finalPosition,
                      dailyNetBorrowApy:
                        null == x
                          ? void 0
                          : null === (i = x.state) || void 0 === i
                            ? void 0
                            : i.dailyNetBorrowApy,
                      state: null == x ? void 0 : x.state,
                      dailyBorrowApy:
                        null == x
                          ? void 0
                          : null === (o = x.state) || void 0 === o
                            ? void 0
                            : o.dailyBorrowApy,
                      oracle: {
                        address: null == x ? void 0 : x.oracleAddress,
                        ...(null == x ? void 0 : x.oracleFeed),
                      },
                      isPositionUnhealthy: !!q.errors.ltvError,
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, {
                  height: '317px',
                  text: 'Cannot display interaction with market '.concat(
                    (0, s.formatLongString)(b.marketId, 20)
                  ),
                });
        }),
        K = r(23106),
        U = r(98949),
        H = r(55412),
        V = r(3245),
        z = r(95413),
        N = r(41512),
        $ = r(24387);
      function W() {
        let e = (0, H._)([
          '\n  query GetToken($address: String!, $chainId: Int) {\n    assetByAddress(address: $address, chainId: $chainId) {\n      ...assetFields\n    }\n  }\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (W = function () {
            return e;
          }),
          e
        );
      }
      let j = {},
        Y = (0, V.Ps)(W(), N.n, $.G);
      var G = r(49663),
        J = (0, a.memo)((e) => {
          var t, r;
          let { mode: i } = e,
            { legacyMorphoHolding: f } = (0, U.gz)(),
            { targetChainId: o } = (0, c.Z_)(),
            { data: s, loading: u } = (function (e) {
              let t = { ...j, ...e };
              return z.aM(Y, t);
            })({ variables: { address: G.rr.morphoToken, chainId: o } }),
            p = (0, a.useMemo)(() => {
              var e, t;
              return d.$0l.commas
                .digits(2)
                .of(
                  null !== (t = null === (e = f.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (t = f.value) || void 0 === t ? void 0 : t.balance]),
            b = (0, a.useMemo)(() => {
              var e, t, r;
              let n =
                null === (t = (0, l.wk)(null == s ? void 0 : s.assetByAddress)) || void 0 === t
                  ? void 0
                  : t.toUsd(
                      null !== (r = null === (e = f.value) || void 0 === e ? void 0 : e.balance) &&
                        void 0 !== r
                        ? r
                        : 0n
                    );
              return d.$0l.short.digits(2).default('0').unit('$').trailingZero(!1).of(n, 18);
            }, [s, null === (r = f.value) || void 0 === r ? void 0 : r.balance]);
          return (0, n.tZ)(y.P, {
            direction: 'column',
            gap: 32,
            mode: i,
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
                                  children: b,
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
        Q = (0, a.memo)((e) => {
          let {
            className: t,
            operations: r,
            initialState: l,
            finalState: d,
            mode: s,
            markPositionsAsRisky: u,
            markPositionsAsLiquidatable: c,
          } = e;
          return (0, n.tZ)(o.F, {
            className: t,
            children: r.map((e) =>
              (0, n.tZ)(
                a.Fragment,
                {
                  children: (() => {
                    switch (e.type) {
                      case f.H.InterfaceOperationType.supplyCollateralBorrow:
                      case f.H.InterfaceOperationType.withdrawCollateralRepay:
                        return (0, n.tZ)(q, {
                          operation: e,
                          initialState: l,
                          finalState: d,
                          mode: s,
                          onRiskyPosition: u,
                          onLiquidatablePosition: c,
                        });
                      case f.H.InterfaceOperationType.metaMorphoDeposit:
                      case f.H.InterfaceOperationType.metaMorphoWithdraw:
                        return (0, n.tZ)(F, {
                          operation: e,
                          initialState: l,
                          finalState: d,
                          mode: s,
                        });
                      case f.H.InterfaceOperationType.claimMerkl:
                        return (0, n.tZ)(K.Z, { mode: 'Confirm', rewardMode: 'MERKL' });
                      case f.H.InterfaceOperationType.claimMorpho:
                        return (0, n.tZ)(K.Z, { mode: 'Confirm', rewardMode: 'MORPHO' });
                      case f.H.InterfaceOperationType.wrap:
                        return (0, n.tZ)(J, { mode: 'Confirm' });
                      case f.H.InterfaceOperationType.zap:
                        return (0, n.tZ)(_, {
                          initialState: l,
                          finalState: d,
                          operation: e,
                          mode: s,
                          onRiskyPosition: u,
                          onLiquidatablePosition: c,
                        });
                      case f.H.InterfaceOperationType.migrateSupply:
                        return (0, n.tZ)(E, {
                          operation: e,
                          initialState: l,
                          finalState: d,
                          mode: s,
                        });
                      case f.H.InterfaceOperationType.toggleAutoDeleverage:
                        return (0, n.tZ)(i.Z, { toEnable: e.toEnable, marketId: e.marketId });
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
          return i;
        },
      });
      var n = r(38819),
        a = r(54655);
      let i = (0, n.Z)(a.Kqy, { target: 'e14kl2h60' })(
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
        a = r(58258),
        i = r(12556),
        f = r(54655),
        o = r(68906),
        l = r(71985);
      let d = (e, t) =>
          f.$0l.commas
            .digits((0, f.wmb)(null == t ? void 0 : t.price))
            .of(e, null == t ? void 0 : t.decimals),
        s = (e) => f.$0l.short.digits(2).unit('$').trailingZero(!1).of(e, 18);
      t.Z = (0, a.memo)((e) => {
        let { mode: t, rewardMode: r } = e,
          {
            display: { rewardsMerkl: u, rewardsMorpho: c },
          } = (0, o.D2)(),
          p = (0, a.useMemo)(() => ('MERKL' === r ? u : 'MORPHO' === r ? c : []), [u, c, r]);
        return (0, n.BX)(l.P, {
          direction: 'column',
          gap: 32,
          mode: t,
          children: [
            (0, n.BX)(f.Kqy, {
              gap: 8,
              align: 'center',
              children: [
                (0, n.tZ)(f.JO$, { icon: 'RewardsPlain20', color: 'icon.primary', size: 24 }),
                (0, n.tZ)(f.xvT.Title.XS, {
                  color: 'text.body',
                  lineHeight: 'normal',
                  children: 'MORPHO' === r ? 'Claim on Morpho' : 'Claim on Merkl',
                }),
              ],
            }),
            (0, n.tZ)(f.Kqy, {
              direction: 'column',
              gap: 12,
              align: 'stretch',
              children: (0, n.tZ)(f.Kqy, {
                direction: 'column',
                gap: 12,
                align: 'stretch',
                children: p.map((e, t) => {
                  var r, o, l, u, c, b;
                  return (null === (r = e.claimable) || void 0 === r ? void 0 : r.amount)
                    ? (0, n.BX)(
                        a.Fragment,
                        {
                          children: [
                            (0, n.BX)(f.xvT.Body.S.Regular, {
                              color: 'text.body',
                              shorten: 1,
                              children: [
                                'Claim ',
                                null === (o = e.rewardToken) || void 0 === o
                                  ? void 0
                                  : o.token.name,
                              ],
                            }),
                            (0, n.BX)(f.Kqy, {
                              justify: 'space-between',
                              children: [
                                (0, n.BX)(f.Kqy, {
                                  gap: 4,
                                  children: [
                                    (0, n.BX)(f.Kqy, {
                                      gap: 2,
                                      children: [
                                        (0, n.tZ)(f.xvT.Title.XS, {
                                          color: 'text.body',
                                          lineHeight: 'normal',
                                          children: d(
                                            e.claimable.amount,
                                            (0, i.wk)(
                                              null === (l = e.claimable) || void 0 === l
                                                ? void 0
                                                : l.token
                                            )
                                          ),
                                        }),
                                        (0, n.tZ)(f.xvT.Title.XS, {
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
                                      ? (0, n.tZ)(f.Vp9, {
                                          variant: 'bundler',
                                          children: (0, n.tZ)(f.xvT.Body.XXXS.Regular, {
                                            lineHeight: 'normal',
                                            color: 'text.body',
                                            children: s(e.claimable.amountUsd),
                                          }),
                                        })
                                      : null,
                                  ],
                                }),
                                (0, n.tZ)(f.qEK, {
                                  src:
                                    null === (b = e.rewardToken) || void 0 === b
                                      ? void 0
                                      : b.token.logoURI,
                                  size: 'medium',
                                  padding: 0,
                                }),
                              ],
                            }),
                            t !== p.length - 1 && (0, n.tZ)(f.Z0O, {}),
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
        a = r(3245),
        i = r(95413),
        f = r(24387),
        o = r(45610);
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
        s = (0, a.Ps)(l(), f.G, o.N);
      function u(e) {
        let t = { ...d, ...e };
        return i.aM(s, t);
      }
    },
    82196: function (e, t, r) {
      r.d(t, {
        Pm: function () {
          return u;
        },
      });
      var n = r(55412),
        a = r(3245),
        i = r(95413),
        f = r(24387),
        o = r(45610);
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
        s = (0, a.Ps)(l(), f.G, o.N);
      function u(e) {
        let t = { ...d, ...e };
        return i.aM(s, t);
      }
    },
    99153: function (e, t, r) {
      r.d(t, {
        eg: function () {
          return c;
        },
      });
      var n = r(55412),
        a = r(3245),
        i = r(95413),
        f = r(93114),
        o = r(24387),
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
        u = (0, a.Ps)(d(), l.N, o.G, f.j);
      function c(e) {
        let t = { ...s, ...e };
        return i.aM(u, t);
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
        a = r(58258),
        i = r(26897),
        f = r(40252),
        o = r(54655),
        l = r(53863),
        d = r(68906),
        s = r(22683),
        u = r(75147),
        c = r(98267),
        p = r(89991),
        b = r(35047);
      let m = (e) => {
          switch (e) {
            case f.addressesRegistry[f.ChainId.EthMainnet].bundler3.bundler3:
              return 'bundler';
            case f.addressesRegistry[f.ChainId.EthMainnet].bundler3.generalAdapter1:
              return 'general adapter 1';
            case f.addressesRegistry[f.ChainId.BaseMainnet].bundler3.bundler3:
              return 'bundler';
            case f.addressesRegistry[f.ChainId.BaseMainnet].bundler3.generalAdapter1:
              return 'general adapter 1';
            case f.addressesRegistry[f.ChainId.EthMainnet].permit2:
              return 'permit2';
            default:
              return (0, b.formatLongString)(e, 10);
          }
        },
        g = (e, t) => {
          let r = (e, t) =>
              e >= f.MathLib.MAX_UINT_160
                ? '∞ '.concat(t.symbol)
                : o.$0l.short.smallValuesWithCommas().digits(2).unit(t.symbol).of(e, t.decimals),
            n = 'Unknown action';
          if ('tx' in e) {
            switch (e.type) {
              case 'erc20Approve': {
                let a = t.getToken(e.args[0]),
                  i = r(e.args[2], a);
                n =
                  e.args[1] === f.addressesRegistry[f.ChainId.EthMainnet].permit2
                    ? 'Enable permit2 contract'
                    : 'Allow '.concat(m(e.args[1]), ' to spend ').concat(i);
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
                  details: { token: a, amount: i },
                } = e.action.args[1],
                f = r(i, t.getToken(a));
              n = 'Allow general adapter 1 to spend '.concat(f);
              break;
            }
            case 'permit': {
              let [, a, i] = e.action.args,
                f = r(i, t.getToken(a));
              n = 'Allow bundler to spend '.concat(f, ' (via Permit)');
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
      var v = r(7149),
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
      var w = (0, a.memo)((e) => {
        var t, r;
        let { txMessage: b = 'Execute your bundle' } = e,
          {
            activeBundle: m,
            reset: w,
            retry: x,
            currentState: T,
            pendingTxHash: Z,
            bundleChainId: k,
            accountRef: A,
          } = (0, u.H)(),
          {
            account: { isWrongChain: q },
          } = (0, p.Z_)(),
          { refetchRewards: B } = (0, d.D2)(),
          [M, S] = (0, a.useState)();
        (0, a.useEffect)(() => {
          Z && S(Z);
        }, [Z]);
        let { toggleDialog: C, setDialogOptions: I } = (0, o.DAv)(),
          { resetOperations: R } = (0, s.N)(),
          X = (0, a.useMemo)(() => {
            if (!T || !m) return;
            if (null == A ? void 0 : A.isSafe) return { current: void 0, total: 0, index: 0 };
            let e = [...m.requirements.txs, ...m.requirements.signatures];
            if ('req' !== T.type) return { current: void 0, total: e.length, index: e.length };
            let t = e.findIndex((e) => e.id === T.id);
            return { current: t >= 0 ? e[t] : void 0, index: t, total: e.length };
          }, [m, T, null == A ? void 0 : A.isSafe]),
          P = (0, a.useMemo)(
            () => (k && M ? f.ChainUtils.getExplorerTransactionUrl(k, M) : ''),
            [k, M]
          ),
          F = (0, a.useMemo)(() => {
            if (T && X && k)
              switch (T.status) {
                case c.qb.signing:
                  return 'Signature '
                    .concat(X.index + 1, ' /\n  ')
                    .concat(X.total + 1, ' - Proceed in your ')
                    .concat((null == A ? void 0 : A.isSafe) ? 'transaction queue' : 'wallet');
                case c.qb.pending:
                  return (0, n.BX)(n.HY, {
                    children: [
                      'Transaction',
                      ' ',
                      M
                        ? (0, n.BX)(o.dLw, {
                            href: P,
                            underlined: !0,
                            children: [(0, o.GQT)(M), ' '],
                          })
                        : '',
                      'is being processed...',
                    ],
                  });
                case c.qb.error:
                  return ''
                    .concat('req' === T.type ? 'Signature' : 'Transaction', ' ')
                    .concat(X.index + 1, ' / ')
                    .concat(X.total + 1, ' - An error occurred');
                case c.qb.complete:
                  if ('tx' === T.type)
                    return (0, n.BX)(n.HY, {
                      children: [
                        'Transaction',
                        ' ',
                        M
                          ? (0, n.tZ)(o.dLw, { href: P, underlined: !0, children: (0, o.GQT)(M) })
                          : '',
                        ' ',
                        (null == A ? void 0 : A.isContract)
                          ? 'is sent to your smart wallet!'
                          : 'is complete!',
                      ],
                    });
                  return 'Signature successfully processed';
              }
          }, [null == A ? void 0 : A.isContract, T, M, X, k, P, null == A ? void 0 : A.isSafe]),
          E = (0, a.useMemo)(
            () =>
              (null == T ? void 0 : T.type) === 'tx' &&
              [c.qb.pending, c.qb.complete].includes(T.status),
            [null == T ? void 0 : T.status, null == T ? void 0 : T.type]
          );
        (0, a.useEffect)(() => {
          I({ closable: E });
        }, [I, E]);
        let D = (0, a.useCallback)(() => {
            if (E) {
              (null == T ? void 0 : T.status) === c.qb.complete && w(), C(!1);
              return;
            }
            w(), C(!1);
          }, [null == T ? void 0 : T.status, w, C, E]),
          L = (0, a.useMemo)(
            () =>
              (null == T ? void 0 : T.type) === 'tx' &&
              (null == T ? void 0 : T.status) === c.qb.complete,
            [null == T ? void 0 : T.status, null == T ? void 0 : T.type]
          ),
          O = (0, a.useCallback)(() => {
            w(), R(), B(), C(!1);
          }, [w, R, C, B]);
        return m && T && X
          ? (0, n.BX)(o.Kqy, {
              direction: 'column',
              gap: 'm',
              'data-testid': 'processing-dialog',
              children: [
                (0, n.BX)(o.Kqy, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(o.xvT.Title.S, { children: 'Confirm' }),
                    (0, n.tZ)(o.Kqy, {
                      gap: 12,
                      children: L
                        ? (0, n.tZ)(o.zxk, {
                            variant: 'secondary',
                            iconAlone: 'ClosePlain20',
                            onClick: O,
                          })
                        : (0, n.tZ)(o.VfW, {
                            headerLabel: 'Cancel transaction',
                            body: 'Closing this modal will cancel the transaction and you will be forced to restart.',
                            ctaLabel: 'Cancel Transaction',
                            cancelLabel: 'Close',
                            ctaAction: D,
                            children: (0, n.tZ)(o.zxk, {
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
                    (0, n.tZ)(v.Z, {
                      operations: m.operations,
                      initialState: null === (t = m.steps) || void 0 === t ? void 0 : t[0],
                      finalState: (0, i.Z)(m.steps),
                      mode: 'Confirm',
                    }),
                    (0, n.BX)(o.Kqy, {
                      direction: 'column',
                      gap: 'm',
                      align: 'stretch',
                      children: [
                        !L &&
                          (0, n.BX)(n.HY, {
                            children: [
                              (0, n.tZ)(o.fDo, {
                                variant: {
                                  [c.qb.complete]: 'success',
                                  [c.qb.signing]: 'loading',
                                  [c.qb.pending]: 'loading',
                                  [c.qb.error]: 'error',
                                }[null == T ? void 0 : T.status],
                                ...((X.current &&
                                  (null === (r = m.steps) || void 0 === r ? void 0 : r[0]) &&
                                  g(X.current, m.steps[0])) ||
                                  ('tx' === T.type && {
                                    contentIdle: b,
                                    contentSuccess: b,
                                    contentError: b,
                                  })),
                              }),
                              (0, n.BX)(o.Kqy, {
                                align: 'center',
                                gap: 8,
                                justify: 'stretch',
                                children: [
                                  Array.from({ length: X.total }).map((e, t) =>
                                    t < X.index
                                      ? (0, n.tZ)(y, { status: c.qb.complete }, t)
                                      : t === X.index
                                        ? (0, n.tZ)(y, { status: T.status }, t)
                                        : (0, n.tZ)(y, {}, t)
                                  ),
                                  (0, n.tZ)(y, { status: 'tx' === T.type ? T.status : void 0 }),
                                ],
                              }),
                            ],
                          }),
                        L &&
                          (0, n.tZ)(o._Lo, {
                            onClick: O,
                            height: 48,
                            textVariant: 'small',
                            children: 'Done',
                          }),
                        (0, n.BX)(o.Kqy, {
                          justify: 'space-between',
                          align: 'center',
                          children: [
                            F &&
                              (0, n.tZ)(o.xvT.Body.XXXS.Regular, {
                                'data-matomo-event': 'transaction-status-message',
                                'data-matomo-step': 'confirmation-step-'.concat(
                                  T.status.toLowerCase()
                                ),
                                color: 'text.secondary',
                                children: F,
                              }),
                            M &&
                              (0, n.BX)(o.Kqy, {
                                gap: 4,
                                align: 'center',
                                children: [
                                  (0, n.tZ)(o.mUV, {
                                    toCopy: M,
                                    toastMessage: 'Transaction hash copied to clipboard.',
                                    tooltipMessage: 'Copy transaction hash.',
                                    size: 'small',
                                  }),
                                  (0, n.tZ)(o.dLw, {
                                    href: P,
                                    children: (0, n.tZ)(o.zxk, {
                                      variant: 'ghost',
                                      children: (0, n.BX)(o.Kqy, {
                                        align: 'center',
                                        gap: 2,
                                        children: [
                                          (0, n.tZ)(o.xvT.Body.XXXS.Regular, {
                                            color: 'text.secondary',
                                            children: 'View on explorer',
                                          }),
                                          (0, n.tZ)(o.JO$, {
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
                    T.status === c.qb.error &&
                      (0, n.tZ)(o.ua7, {
                        content: 'Please switch to the correct network.',
                        disabled: !q,
                        children: (0, n.tZ)(o._Lo, {
                          onClick: x,
                          height: 48,
                          disabled: q,
                          children: (0, n.tZ)(o.xvT.Body.S.Regular, {
                            color: q ? 'text.tertiary' : 'text.body',
                            children: 'Try again',
                          }),
                        }),
                      }),
                  ],
                }),
              ],
            })
          : (0, n.tZ)(o.xvT.Body.S.Regular, { children: 'No transaction to execute' });
      });
    },
    7477: function (e, t, r) {
      r.d(t, {
        y: function () {
          return u;
        },
      });
      var n = r(78286),
        a = r(58258),
        i = r(54655),
        f = r(50568),
        o = r(28219),
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
      var u = (0, a.memo)((e) => {
        let { marketId: t, onOpen: r } = e,
          { toggleDialog: a } = (0, i.DAv)(),
          { status: l, refetchAll: u } = (0, o.P)(t),
          c = () => {
            null == r || r(), a((0, n.tZ)(f.F, { marketId: t, toEnable: 'unauthorized' === l }));
          };
        switch (l) {
          case 'loading':
            return (0, n.tZ)(i.OdW, { width: '32px', height: '32px', borderRadius: '50px' });
          case 'error':
            return (0, n.tZ)(i.ua7, {
              content:
                'An error occurred while gathering data for Auto-Deleverage. Click to retry.',
              children: (0, n.BX)(i.Kqy, {
                align: 'center',
                gap: 'xxs',
                onClick: u,
                children: [
                  (0, n.tZ)(i.JO$, { icon: 'AlertPlain20', color: 'icon.interactive.error' }),
                  (0, n.tZ)(i.xvT.Body.XXXS.Regular, {
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
            return (0, n.tZ)(i.ua7, {
              content: 'Enable Auto-Deleverage',
              children: (0, n.tZ)(d, {
                onClick: c,
                'data-testid': 'enable-auto-deleverage',
                children: (0, n.tZ)(i.JO$, { icon: 'ShieldCheckPlain20', color: 'constant.white' }),
              }),
            });
          case 'authorized':
            return (0, n.tZ)(i.ua7, {
              content: 'Manage Auto-Deleverage on this market',
              children: (0, n.BX)(s, {
                onClick: c,
                'data-testid': 'manage-auto-deleverage',
                children: [
                  (0, n.tZ)(i.JO$, { icon: 'ShieldCheckPlain20', color: 'icon.primary' }),
                  (0, n.tZ)(i.xvT.Body.XXXS.Regular, {
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
        a = r(58258),
        i = r(12556),
        f = r(54655),
        o = r(35047),
        l = r(18313),
        d = r(89991),
        s = r(4205),
        u = r(69886),
        c = r(28219),
        p = r(40252),
        b = r(83793),
        m = r(71921),
        g = r(41976),
        v = (0, a.memo)((e) => {
          let { marketId: t, ltv: r, isPositionRisky: i } = e,
            { targetChainId: o } = (0, d.Z_)(),
            {
              data: {
                marketByUniqueKey: {
                  collateralAsset: l,
                  loanAsset: s,
                  lltv: u,
                  oracleAddress: c,
                  oracleFeed: v,
                  warnings: h,
                } = {},
              } = {},
              error: y,
              loading: w,
            } = (0, g.vz)({ variables: { uniqueKey: t, chainId: o } }),
            x = (0, a.useMemo)(
              () => f.$0l.percent.digits(2).default('-').trailingZero(!1).unit('%').of(u, 18),
              [u]
            ),
            T = (0, a.useMemo)(() => {
              var e;
              return f.$0l.percent
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
            Z = (0, a.useMemo)(
              () =>
                f.$0l.percent.digits(2).default('0%').trailingZero(!1).unit('%').of(r.value, 18),
              [r]
            );
          if (w) return (0, n.tZ)(f.OdW, { height: '220px', borderRadius: '12px' });
          if (y || !s || !l)
            return (0, n.tZ)(f.SKT, {
              text: 'An error occurred while loading the market data.',
              background: 'background.secondary',
              borderRadius: '12px',
              height: '220px',
            });
          let k = c ? { address: c, ...v } : null;
          return (0, n.tZ)(f.Zbd, {
            padding: 's',
            background: 'background.secondary',
            borderRadius: '12px',
            children: (0, n.BX)(f.Kqy, {
              direction: 'column',
              gap: 'm',
              width: '100%',
              children: [
                (0, n.tZ)(m.Z, {
                  collateralAsset: l,
                  loanAsset: s,
                  formattedLltv: x,
                  oracle: k,
                  warnings: null != h ? h : [],
                  marketId: t,
                }),
                (0, n.BX)(f.Kqy, {
                  direction: 'column',
                  gap: 's',
                  width: '100%',
                  children: [
                    !!r.value &&
                      (0, n.BX)(n.HY, {
                        children: [
                          (0, n.BX)(f.Kqy, {
                            justify: 'space-between',
                            align: 'center',
                            children: [
                              (0, n.tZ)(f.xvT.Body.XS.Regular, {
                                color: 'text.secondary',
                                children: 'Your LTV',
                              }),
                              (0, n.tZ)(f.xvT.Title.XS, {
                                color: i ? 'text.interactive.error' : (0, f.ybe)(r.isSimulated),
                                children: Z,
                              }),
                            ],
                          }),
                          (0, n.tZ)(f.Z0O, {}),
                        ],
                      }),
                    (0, n.BX)(f.Kqy, {
                      justify: 'space-between',
                      align: 'center',
                      children: [
                        (0, n.BX)(f.Kqy, {
                          align: 'center',
                          gap: 'xxs',
                          children: [
                            (0, n.tZ)(f.xvT.Body.XS.Regular, {
                              color: 'text.secondary',
                              lineHeight: 'normal',
                              children: 'Auto Deleverage Liq. LTV',
                            }),
                            (0, n.tZ)(f.ua7, {
                              content: b.l,
                              withTouch: !0,
                              children: (0, n.tZ)(f.JO$, {
                                icon: 'QuestionPlain20',
                                color: 'icon.secondary',
                                hoverColor: 'icon.primary',
                              }),
                            }),
                          ],
                        }),
                        (0, n.BX)(f.Kqy, {
                          gap: 2,
                          align: 'center',
                          children: [
                            (0, n.tZ)(f.JO$, { icon: 'ShieldCheckGradient20' }),
                            (0, n.tZ)(f.xvT.Title.XS, { lineHeight: 'normal', children: T }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.tZ)(f.Z0O, {}),
                    (0, n.BX)(f.Kqy, {
                      justify: 'space-between',
                      align: 'center',
                      children: [
                        (0, n.tZ)(f.xvT.Body.XS.Regular, {
                          color: 'text.secondary',
                          children: 'Liquidation LTV',
                        }),
                        (0, n.tZ)(f.xvT.Title.XS, { children: x }),
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
        T = r(82803),
        Z = r(86876),
        k = r(65978),
        A = (0, a.memo)((e) => {
          let { toEnable: t, marketId: r } = e,
            { toggleDialog: i } = (0, f.DAv)(),
            { account: o, targetChainId: l } = (0, d.Z_)(),
            { activeBundle: s, setActiveBundle: u } = (0, Z.HT)(),
            { preLiquidationContractAddress: b, refetchAuthorizationQuery: m } = (0, c.P)(r),
            g = (0, a.useMemo)(() => {
              if (!b) return null;
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
                      args: [b, t],
                    }),
                    value: 0n,
                  };
                }),
                r
              );
            }, [t, l, b]),
            v = (0, a.useMemo)(
              () =>
                s
                  ? 'Please complete the pending transaction to execute a new one.'
                  : o.isWrongChain
                    ? 'Please switch to the correct network.'
                    : null,
              [o.isWrongChain, s]
            ),
            A = (0, a.useCallback)(() => {
              if (!g) return console.error('No bundle found');
              u(
                g,
                [
                  {
                    id: 'toggleAutoDeleverage',
                    type: T.H.InterfaceOperationType.toggleAutoDeleverage,
                    marketId: r,
                    toEnable: t,
                    options: { isMax: [], disabledPeripheralTokens: new Set() },
                  },
                ],
                m,
                !0
              ),
                i(
                  (0, n.tZ)(x.h, {
                    txMessage: ''.concat(t ? 'Authorize' : 'Remove', ' Auto-Deleverage contract'),
                  }),
                  { closable: !1 }
                );
            }, [u, g, i, r, t, m]);
          return (0, n.BX)(f.Kqy, {
            direction: 'column',
            gap: 20,
            'data-testid': 'confirm-dialog',
            children: [
              (0, n.BX)(f.Kqy, {
                align: 'center',
                justify: 'space-between',
                gap: 16,
                children: [
                  (0, n.tZ)(f.xvT.Title.S, { children: 'Review' }),
                  (0, n.tZ)(f.zxk, {
                    iconAlone: 'ClosePlain20',
                    onClick: () => i(!1),
                    variant: 'secondary',
                  }),
                ],
              }),
              (0, n.tZ)(k.Z, { toEnable: t, marketId: r }),
              (0, n.tZ)(f.ua7, {
                content: v,
                disabled: !v,
                children: (0, n.tZ)(f.Kqy, {
                  width: '100%',
                  direction: 'column',
                  children: (0, n.tZ)(f._Lo, {
                    onClick: A,
                    height: 47,
                    disabled: !!v,
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
          { toggleDialog: p } = (0, f.DAv)(),
          { preLltv: b } = (0, c.P)(t),
          { account: m } = (0, d.Z_)(),
          [g, h] = (0, a.useState)(!1),
          { data: y } = (0, s.f)(0),
          { data: w } = (0, s.f)(),
          x = (0, a.useMemo)(
            () =>
              (null == m ? void 0 : m.address)
                ? null == y
                  ? void 0
                  : y.tryGetAccrualPosition(m.address, t)
                : null,
            [y, null == m ? void 0 : m.address, t]
          ),
          T = (0, a.useMemo)(
            () =>
              (null == m ? void 0 : m.address)
                ? null == w
                  ? void 0
                  : w.tryGetAccrualPosition(m.address, t)
                : null,
            [w, null == m ? void 0 : m.address, t]
          ),
          Z = (0, f.AwN)({
            initialOnchainValue: null == x ? void 0 : x.ltv,
            latestSimulatedValue: null == T ? void 0 : T.ltv,
          }),
          k = (0, o.isDefined)(Z.value) && (0, o.isDefined)(b) && Z.value >= b,
          q = (0, a.useMemo)(
            () => (0, o.isDefined)(Z.value) && (0, o.isDefined)(b) && (0, i.M4)(Z.value, b),
            [Z.value, b]
          ),
          B = q && !g,
          M = (0, a.useMemo)(
            () => f.$0l.percent.digits(2).default('-').trailingZero(!1).unit('%').of(b, 18),
            [b]
          ),
          S = () => {
            p((0, n.tZ)(A, { toEnable: r, marketId: t }));
          };
        return (0, n.BX)(f.Kqy, {
          direction: 'column',
          gap: 'm',
          children: [
            (0, n.BX)(f.Kqy, {
              justify: 'space-between',
              align: 'center',
              gap: 's',
              children: [
                (0, n.BX)(f.xvT.Title.S, { children: [r && 'Enable', ' Auto-Deleverage'] }),
                (0, n.tZ)(f.zxk, {
                  iconAlone: 'ClosePlain20',
                  onClick: () => p(!1),
                  variant: 'secondary',
                }),
              ],
            }),
            (0, n.tZ)(f.xvT.Body.XS.Regular, {
              color: 'text.secondary',
              children:
                'Auto-Deleverage is a feature designed to reduce the risk of full liquidation. When enabled, if your LTV exceeds a pre-set threshold, a portion of your position may be closed to bring it back to safer levels. This mechanism relies on on-chain liquidators and may not keep up with rapid market movements.',
            }),
            (0, n.tZ)(v, { marketId: t, ltv: Z, isPositionRisky: q }),
            r &&
              k &&
              (0, n.tZ)(f.Kqy, {
                align: 'center',
                gap: 'xs',
                background: 'background.alert',
                padding: '8px',
                borderRadius: '4px',
                justify: 'center',
                children: (0, n.BX)(f.xvT.Body.XXS.Regular, {
                  color: 'text.interactive.error',
                  children: ['You must lower your LTV below ', M, ' to activate Auto-Deleverage.'],
                }),
              }),
            !k &&
              q &&
              (0, n.tZ)(u.Z, {
                isRiskyPositionsAcknowledged: g,
                setIsRiskyPositionsAcknowledged: h,
              }),
            (0, n.BX)(f.xvT.Body.XXXS.Regular, {
              color: 'text.secondary',
              children: [
                'By using this feature, you agree to the',
                ' ',
                (0, n.tZ)(f.dLw, { href: i.CL, underlined: !0, children: 'Terms of Use' }),
                ' ',
                'and acknowledge that you are responsible for monitoring your own position.',
              ],
            }),
            r
              ? (0, n.tZ)(f._Lo, {
                  height: 48,
                  onClick: S,
                  disabled: k || B,
                  textVariant: 'small',
                  children: 'Enable Auto-Deleverage',
                })
              : (0, n.tZ)(f.zxk, {
                  variant: 'danger',
                  size: 'big',
                  label: 'Remove Auto-Deleverage',
                  onClick: S,
                  disabled: !k && B,
                }),
            (0, n.tZ)(f.Kqy, {
              justify: 'center',
              padding: '6px 7px',
              children: (0, n.tZ)(f.dLw, {
                href: l.lT,
                children: (0, n.tZ)(f.zxk, {
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
        a = r(58258),
        i = r(54655),
        f = r(35288);
      t.Z = (0, a.memo)((e) => {
        let {
          marketId: t,
          collateralAsset: r,
          loanAsset: a,
          formattedLltv: o,
          oracle: l,
          warnings: d,
        } = e;
        return (0, n.BX)(i.Kqy, {
          align: 'center',
          gap: 8,
          children: [
            (0, n.tZ)(i._nw, {
              leftAvatarProps: { src: r.logoURI },
              rightAvatarProps: { src: a.logoURI },
              size: 'medium',
            }),
            (0, n.BX)(i.xvT.Title.XS, {
              lineHeight: 'normal',
              children: [r.symbol, ' / ', a.symbol],
            }),
            (0, n.tZ)(i.Vp9, {
              variant: 'main',
              children: (0, n.tZ)(i.xvT.Body.XXXS.Regular, {
                lineHeight: 'normal',
                color: 'text.body',
                children: o,
              }),
            }),
            l &&
              (0, n.tZ)(f.Z, {
                oracle: l,
                warnings: null != d ? d : [],
                typographyProps: { color: 'text.body' },
              }),
            (0, n.tZ)(i.mUV, {
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
        a = r(58258),
        i = r(40252),
        f = r(54655),
        o = r(89991),
        l = r(83793),
        d = r(71921),
        s = r(41976);
      t.Z = (0, a.memo)((e) => {
        let { toEnable: t, marketId: r } = e,
          { targetChainId: u } = (0, o.Z_)(),
          {
            data: {
              marketByUniqueKey: {
                collateralAsset: c,
                loanAsset: p,
                lltv: b,
                oracleAddress: m,
                oracleFeed: g,
                warnings: v,
              } = {},
            } = {},
            error: h,
            loading: y,
          } = (0, s.vz)({ variables: { uniqueKey: r, chainId: u } }),
          w = (0, a.useMemo)(
            () => f.$0l.percent.digits(2).default('-').trailingZero(!1).unit('%').of(b, 18),
            [b]
          ),
          x = (0, a.useMemo)(() => {
            var e;
            return f.$0l.percent
              .digits(2)
              .default('-')
              .trailingZero(!1)
              .unit('%')
              .of(
                null === (e = i.defaultPreLiquidationParamsRegistry.get(null != b ? b : 0n)) ||
                  void 0 === e
                  ? void 0
                  : e.preLltv,
                18
              );
          }, [b]);
        if (y) return (0, n.tZ)(f.OdW, { height: '170px', borderRadius: '12px' });
        if (h || !p || !c)
          return (0, n.tZ)(f.SKT, {
            text: 'An error occurred while loading the market data.',
            background: 'background.secondary',
            borderRadius: '12px',
            height: '170px',
          });
        let T = m ? { address: m, ...g } : null;
        return (0, n.tZ)(f.Zbd, {
          padding: 's',
          background: 'background.secondary',
          borderRadius: '12px',
          children: (0, n.BX)(f.Kqy, {
            direction: 'column',
            gap: 'm',
            width: '100%',
            children: [
              (0, n.tZ)(d.Z, {
                collateralAsset: c,
                loanAsset: p,
                formattedLltv: w,
                oracle: T,
                warnings: null != v ? v : [],
                marketId: r,
              }),
              (0, n.BX)(f.Kqy, {
                direction: 'column',
                gap: 's',
                width: '100%',
                children: [
                  (0, n.tZ)(f.Z0O, {}),
                  (0, n.BX)(f.Kqy, {
                    align: 'center',
                    gap: 'xxs',
                    children: [
                      (0, n.BX)(f.xvT.Body.XS.Regular, {
                        color: 'text.secondary',
                        lineHeight: 'normal',
                        children: [t ? 'Enable' : 'Remove', ' Auto Deleverage Liq. LTV'],
                      }),
                      (0, n.tZ)(f.ua7, {
                        content: l.l,
                        withTouch: !0,
                        children: (0, n.tZ)(f.JO$, {
                          icon: 'QuestionPlain20',
                          color: 'icon.secondary',
                          hoverColor: 'icon.primary',
                        }),
                      }),
                    ],
                  }),
                  (0, n.BX)(f.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, n.tZ)(f.JO$, { icon: 'ShieldCheckGradient20' }),
                      (0, n.tZ)(f.xvT.Title.XS, { lineHeight: 'normal', children: x }),
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
        a = r(3245),
        i = r(95413);
      function f() {
        let e = (0, n._)([
          '\n  query GetAutoDeleverageDialogData($uniqueKey: String!, $chainId: Int) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      uniqueKey\n      lltv\n      oracleAddress\n      collateralAsset {\n        id\n        symbol\n        logoURI\n      }\n      loanAsset {\n        id\n        symbol\n        logoURI\n      }\n      warnings {\n        level\n        type\n      }\n      oracleFeed {\n        baseVault\n        baseFeedOneAddress\n        baseFeedOneDescription\n        baseFeedOneVendor\n        baseFeedTwoAddress\n        baseFeedTwoDescription\n        baseFeedTwoVendor\n        quoteVault\n        quoteFeedOneAddress\n        quoteFeedOneDescription\n        quoteFeedOneVendor\n        quoteFeedTwoAddress\n        quoteFeedTwoDescription\n        quoteFeedTwoVendor\n      }\n    }\n  }\n',
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      let o = {},
        l = (0, a.Ps)(f());
      function d(e) {
        let t = { ...o, ...e };
        return i.aM(l, t);
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
        a = r(58258),
        i = r(54655),
        f = r(28219),
        o = r(64070),
        l = (0, a.memo)((e) => {
          let { lltv: t, marketId: r } = e,
            l = (0, o.s)(),
            { status: d, preLltv: s } = (0, f.P)(r),
            u = (0, a.useMemo)(
              () => i.$0l.percent.unit('%').trailingZero(!1).digits(2).of(t, 18),
              [t]
            ),
            c = (0, a.useMemo)(
              () => i.$0l.percent.unit('%').trailingZero(!1).digits(2).of(s, 18),
              [s]
            );
          return l
            ? 'loading' === d
              ? (0, n.tZ)(i.OdW, { width: '70px', height: '20px', borderRadius: '6px' })
              : 'authorized' === d
                ? (0, n.BX)(i.Kqy, {
                    gap: '2px',
                    align: 'center',
                    children: [
                      (0, n.tZ)(i.JO$, { icon: 'ShieldCheckGradient20' }),
                      (0, n.tZ)(i.xvT.Inherit, { lineHeight: 'normal', children: c }),
                    ],
                  })
                : u
            : u;
        }),
        d = (0, a.memo)((e) => {
          let { marketId: t, label: r = 'LTV / Auto-Delev. LTV' } = e,
            n = (0, o.s)(),
            { status: a } = (0, f.P)(t);
          return n && 'authorized' === a ? r : 'LTV / Liq. LTV';
        }),
        s = (0, a.memo)((e) => {
          let { marketId: t } = e,
            r = (0, o.s)(),
            { status: a } = (0, f.P)(t);
          return r && 'authorized' === a
            ? (0, n.tZ)(i.ua7, {
                content: 'This value takes into account the Auto-Deleverage LTV.',
                children: (0, n.tZ)(i.JO$, { icon: 'ShieldCheckGradient20' }),
              })
            : null;
        }),
        u = r(52882);
    },
    52882: function (e, t, r) {
      r.d(t, {
        B: function () {
          return i;
        },
      });
      var n = r(28219),
        a = r(64070);
      let i = (e) => {
        let { lltv: t, marketId: r } = e,
          i = (0, a.s)(),
          { status: f, preLltv: o } = (0, n.P)(r);
        return i && 'authorized' === f ? o : t;
      };
    },
    28219: function (e, t, r) {
      r.d(t, {
        P: function () {
          return m;
        },
      });
      var n = r(58258),
        a = r(50964),
        i = r(25513),
        f = r(40252),
        o = r(4565),
        l = r(12556),
        d = r(89991),
        s = r(9691),
        u = r(47824),
        c = r(77518),
        p = r(16880);
      let b = [
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
        m = (e) => {
          let {
              account: { address: t },
              targetChainId: r,
            } = (0, d.Z_)(),
            m = (0, i.NL)(),
            g = (0, n.useMemo)(() => {
              if (l.FW.isPreLiquidationSupported(r))
                return f.addressesRegistry[r].preLiquidationFactory;
            }, [r]),
            {
              data: [, , v, , h] = [],
              error: y,
              isLoading: w,
              refetch: x,
            } = (0, a.useReadContract)({
              query: { enabled: !!e, staleTime: 1 / 0 },
              chainId: r,
              abi: o.blueAbi,
              address: f.addressesRegistry[r].morpho,
              functionName: 'idToMarketParams',
              args: [e],
            }),
            T = f.defaultPreLiquidationParamsRegistry.get(null != h ? h : 0n),
            Z = (0, n.useMemo)(
              () =>
                T && v && e && g
                  ? (function (e) {
                      let {
                          morpho: t,
                          preLiquidationFactory: r,
                          marketId: n,
                          preLiquidationParams: a,
                        } = e,
                        i = (0, s.E)(
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
                          [t, n, a]
                        ),
                        f = (0, u.w)(
                          (0, c._)(
                            ['bytes', 'bytes'],
                            [
                              '0x61022080604052346104675780611dd5803803809161001e8285610545565b83398101039061010082126104675761003681610568565b60c0602083015193603f19011261046757604051916100548361052a565b60408101518352606081015193602084019485526080820151926040850193845260a0830151906060860191825261009a60e060c0860151956080890196875201610568565b60a08701908152604051632e3071cd60e11b8152600481018590526001600160a01b0390921694909160c081602481895afa908115610473575f9161048d575b50608001516001600160801b03161561047e57604051632c3c915760e01b8152600481018590529260a084602481895afa938415610473575f946103c2575b508751966080850197885111156103b35789518151106103a457670de0b6b3a76400008a5111610395578151670de0b6b3a76400001161038657815183511061037757825188518015610363576ec097ce7bc90715b34b9f1000000000041061035457608087905260a09590955283516001600160a01b0390811660c052602085810151821660e052604080870151831661010052606087015183166101205298516101405298516101605298516101805293516101a05292516101c05291516101e052905185166102005251915163095ea7b360e01b815260048101919091525f19602482015291925f9260449290918491165af13d15601f3d1160015f51141617161561031e57604051611844908161059182396080518181816101ce0152818161028d0152611113015260a0518181816095015281816103b3015281816104180152610a94015260c051818181611361015261167f015260e051816116b8015261010051816116f401526101205181611730015261014051818181610590015281816106a101526117570152610160518181816105ca01528181610655015281816106800152610f740152610180518181816108310152610fbe01526101a0518181816108570152610fe501526101c0518181816106f0015261100d01526101e05181818161071701526110370152610200518181816104b4015261105d0152f35b60405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b6044820152606490fd5b6331aff75360e01b5f5260045ffd5b634e487b7160e01b5f52601260045260245ffd5b63141da4bd60e21b5f5260045ffd5b630136247b60e51b5f5260045ffd5b630287fe3b60e31b5f5260045ffd5b631bc4f82360e01b5f5260045ffd5b63f0586c2360e01b5f5260045ffd5b90935060a0813d60a01161046b575b816103de60a09383610545565b81010312610467576040519060a08201906001600160401b038211838310176104535760809160405261041081610568565b835261041e60208201610568565b602084015261042f60408201610568565b604084015261044060608201610568565b606084015201516080820152925f610119565b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b3d91506103d1565b6040513d5f823e3d90fd5b630ecde9b360e31b5f5260045ffd5b905060c0813d60c011610522575b816104a860c09383610545565b810103126104675761051760a0604051926104c28461052a565b6104cb8161057c565b84526104d96020820161057c565b60208501526104ea6040820161057c565b60408501526104fb6060820161057c565b606085015261050c6080820161057c565b60808501520161057c565b60a08201525f6100da565b3d915061049b565b60c081019081106001600160401b0382111761045357604052565b601f909101601f19168101906001600160401b0382119082101761045357604052565b51906001600160a01b038216820361046757565b51906001600160801b03821682036104675756fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816305b4591c146110a6575080631d553cee14610f165780633078f50a146101f25780633acb5624146101835780637b9e68f2146100bb5763b3cea21714610060575f80fd5b346100b857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b85760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b80fd5b50346100b857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b85760a06100f4611636565b61018160405180926080809173ffffffffffffffffffffffffffffffffffffffff815116845273ffffffffffffffffffffffffffffffffffffffff602082015116602085015273ffffffffffffffffffffffffffffffffffffffff604082015116604085015273ffffffffffffffffffffffffffffffffffffffff60608201511660608501520151910152565bf35b50346100b857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b857602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346100b85760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b85760043573ffffffffffffffffffffffffffffffffffffffff81168103610f125760243560643567ffffffffffffffff8111610f0e576102659036906004016114f4565b60443594918391908215871514610ee65773ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926102b6611636565b843b15610eb657610371604051917f151c1ade00000000000000000000000000000000000000000000000000000000835260048301906080809173ffffffffffffffffffffffffffffffffffffffff815116845273ffffffffffffffffffffffffffffffffffffffff602082015116602085015273ffffffffffffffffffffffffffffffffffffffff604082015116604085015273ffffffffffffffffffffffffffffffffffffffff60608201511660608501520151910152565b858160a48183895af18015610ec257908691610ecd575b5050604051907f5c60e39a0000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000600483015260c082602481885afa918215610ec2578692610e1f575b50604051917f93c520620000000000000000000000000000000000000000000000000000000083527f0000000000000000000000000000000000000000000000000000000000000000600484015273ffffffffffffffffffffffffffffffffffffffff89166024840152606083604481895afa928315610e14578793610d6c575b50604051917fa035b1fe00000000000000000000000000000000000000000000000000000000835260208360048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa928315610d61578893610d29575b5060206ec097ce7bc90715b34b9f1000000000610517856fffffffffffffffffffffffffffffffff60408901511661177e565b049401926fffffffffffffffffffffffffffffffff8451166fffffffffffffffffffffffffffffffff6040850151166fffffffffffffffffffffffffffffffff6060860151169160018201809211610c7f57620f42408301809311610c7f579061058192916117c8565b94670de0b6b3a76400006105b57f00000000000000000000000000000000000000000000000000000000000000008361177e565b048611610d0157670de0b6b3a76400006105ef7f00000000000000000000000000000000000000000000000000000000000000008361177e565b04861115610cd957670de0b6b3a76400009586810290808204881490151715610cac577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820190828211610c7f579161064e6106539261067a94611629565b611791565b7f00000000000000000000000000000000000000000000000000000000000000009061161c565b9b6106c57f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061161c565b9c86810290808204881490151715610b78578a876107429c9d9e9f6106ed9061074894611791565b9c7f0000000000000000000000000000000000000000000000000000000000000000928e61073b857f000000000000000000000000000000000000000000000000000000000000000061161c565b915061177e565b04611629565b9215610ba55750610759908b61177e565b6ec097ce7bc90715b34b9f0fffffffff8101809111610b4b576ec097ce7bc90715b34b9f1000000000900484810290808204861490151715610b4b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820190828211610b78576107ce929161064e91611629565b6fffffffffffffffffffffffffffffffff6060816040850151169301511690620f42408201809211610b4b5760018301809311610b4b5761082861088394936fffffffffffffffffffffffffffffffff9361087b936117c8565b985b856107428c7f00000000000000000000000000000000000000000000000000000000000000009361073b857f000000000000000000000000000000000000000000000000000000000000000061161c565b91511661177e565b04808511610b1b5750610a2f9261093160c0887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f876040988e9873ffffffffffffffffffffffffffffffffffffffff8b519a8b976020890152168b8701523360608701526080808701528160a0870152868601378b8582860101520116810103017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810184528361157b565b6109f38661093d611636565b8551968795869485937f20b76e8100000000000000000000000000000000000000000000000000000000855260048501906080809173ffffffffffffffffffffffffffffffffffffffff815116845273ffffffffffffffffffffffffffffffffffffffff602082015116602085015273ffffffffffffffffffffffffffffffffffffffff604082015116604085015273ffffffffffffffffffffffffffffffffffffffff60608201511660608501520151910152565b8360a48401528960c484015273ffffffffffffffffffffffffffffffffffffffff8d1660e48401526101206101048401526101248301906115bc565b03925af1928315610b0f578093610ac1575b505073ffffffffffffffffffffffffffffffffffffffff60409485519284845260208401528486840152169033907fd5b01f148b35d6069b626af105bf8881bc2e30ee1ce3de4630903abab0ba858060607f000000000000000000000000000000000000000000000000000000000000000092a482519182526020820152f35b909492506040853d604011610b07575b81610ade6040938361157b565b810103126100b8575073ffffffffffffffffffffffffffffffffffffffff604094519294610a41565b3d9150610ad1565b604051903d90823e3d90fd5b85604491867f44bb1e75000000000000000000000000000000000000000000000000000000008352600452602452fd5b60248a7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b60248b7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b989a50916fffffffffffffffffffffffffffffffff606081604084015116920151169060018101809111610b7857620f42408201809211610b785791610bf5610bfa9261064e889560443561177e565b61177e565b046ec097ce7bc90715b34b9f10000000008102908082046ec097ce7bc90715b34b9f10000000001490151715610c525761087b610c4c61088394936fffffffffffffffffffffffffffffffff93611791565b9a61082a565b6024897f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b60248c7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b60048a7f0bb9a651000000000000000000000000000000000000000000000000000000008152fd5b60048a7ff78266a2000000000000000000000000000000000000000000000000000000008152fd5b9092506020813d602011610d59575b81610d456020938361157b565b81010312610d555751915f6104e4565b8780fd5b3d9150610d38565b6040513d8a823e3d90fd5b9092506060813d606011610e0c575b81610d886060938361157b565b81010312610e0857604051906060820182811067ffffffffffffffff821117610ddb57610dcf91604091825280518452610dc4602082016115ff565b6020850152016115ff565b6040820152915f61046f565b6024897f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b8680fd5b3d9150610d7b565b6040513d89823e3d90fd5b90915060c0813d60c011610eba575b81610e3b60c0938361157b565b81010312610eb657610eaa60a060405192610e5584611543565b610e5e816115ff565b8452610e6c602082016115ff565b6020850152610e7d604082016115ff565b6040850152610e8e606082016115ff565b6060850152610e9f608082016115ff565b6080850152016115ff565b60a0820152905f6103ee565b8580fd5b3d9150610e2e565b6040513d88823e3d90fd5b81610ed79161157b565b610ee257845f610388565b8480fd5b6004847ff0732dd7000000000000000000000000000000000000000000000000000000008152fd5b8380fd5b5080fd5b50346100b857807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b85760a0604051610f5381611543565b828152826020820152826040820152826060820152826080820152015260c07f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff604051610fb481611543565b82815260208101907f00000000000000000000000000000000000000000000000000000000000000008252604081017f0000000000000000000000000000000000000000000000000000000000000000815260608201907f0000000000000000000000000000000000000000000000000000000000000000825260a060808401937f000000000000000000000000000000000000000000000000000000000000000085520193857f0000000000000000000000000000000000000000000000000000000000000000168552604051968752516020870152516040860152516060850152516080840152511660a0820152f35b90503461149b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261149b5760043560243567ffffffffffffffff811161149b576110fa9036906004016114f4565b929073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016938433036114cc5781019360808286031261149b5761115460208301611522565b9461116160408401611522565b606084013567ffffffffffffffff811161149b5784019180601f8401121561149b5782359067ffffffffffffffff821161149f576111c760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f850116018861157b565b8187526020828501011161149b576020815f928273ffffffffffffffffffffffffffffffffffffffff9601838a0137870101521694611204611636565b91803b1561149b575f92836101049273ffffffffffffffffffffffffffffffffffffffff6112e19560405198899788967f8720316d00000000000000000000000000000000000000000000000000000000885260048801906080809173ffffffffffffffffffffffffffffffffffffffff815116845273ffffffffffffffffffffffffffffffffffffffff602082015116602085015273ffffffffffffffffffffffffffffffffffffffff604082015116604085015273ffffffffffffffffffffffffffffffffffffffff60608201511660608501520151910152565b3560a48601521660c48401528960e48401525af1801561149057611479575b5090818492516113f7575b50602092606491604051917f23b872dd000000000000000000000000000000000000000000000000000000008352600483015230602483015260448201528273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af13d15601f3d116001845114161716156113995780f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152fd5b833b15611475578261144491604051809381927f8e8beec40000000000000000000000000000000000000000000000000000000083528660048401526040602484015260448301906115bc565b038183885af1801561146a571561130b5761146083809261157b565b610f12575f61130b565b6040513d85823e3d90fd5b8280fd5b611487919294505f9061157b565b5f92905f611300565b6040513d5f823e3d90fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7fe51b5123000000000000000000000000000000000000000000000000000000005f5260045ffd5b9181601f8401121561149b5782359167ffffffffffffffff831161149b576020838186019501011161149b57565b359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b60c0810190811067ffffffffffffffff82111761149f57604052565b60a0810190811067ffffffffffffffff82111761149f57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761149f57604052565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602080948051918291828752018686015e5f8582860101520116010190565b51906fffffffffffffffffffffffffffffffff8216820361149b57565b91908203918211610cac57565b91908201809211610cac57565b5f60806040516116458161155f565b82815282602082015282604082015282606082015201526040516116688161155f565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602082015273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016604082015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660608201527f0000000000000000000000000000000000000000000000000000000000000000608082015290565b81810292918115918404141715610cac57565b811561179b570490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b906117d29161177e565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810191818311610cac5761180b9261064e91611629565b9056fea2646970667358221220a4400fdf55e00b78e863db05b6eb11bb6abb2d070d36a8977b6db4ab9c9282b464736f6c634300081b0033',
                              i,
                            ]
                          )
                        );
                      return (0, p.CR)({
                        bytecodeHash: f,
                        from: r,
                        salt: '0x0000000000000000000000000000000000000000000000000000000000000000',
                        opcode: 'CREATE2',
                      });
                    })({
                      morpho: f.addressesRegistry[r].morpho,
                      preLiquidationFactory: g,
                      marketId: e,
                      preLiquidationParams: { ...T, preLiquidationOracle: v },
                    })
                  : null,
              [T, v, e, r, g]
            ),
            {
              data: k,
              isLoading: A,
              isError: q,
              queryKey: B,
            } = (0, a.useReadContract)({
              query: { enabled: !!Z && !!g, staleTime: 1 / 0 },
              chainId: r,
              abi: b,
              address: g,
              functionName: 'isPreLiquidation',
              args: [Z],
            }),
            {
              data: M,
              isLoading: S,
              isError: C,
              queryKey: I,
            } = (0, a.useReadContract)({
              query: { enabled: !!t && !!Z, staleTime: 1 / 0 },
              chainId: r,
              abi: o.blueAbi,
              address: f.addressesRegistry[r].morpho,
              functionName: 'isAuthorized',
              args: [t, Z],
            });
          return {
            status: t
              ? w || A || S
                ? 'loading'
                : !1 === k
                  ? 'hidden'
                  : !1 === M
                    ? 'unauthorized'
                    : !0 === M
                      ? 'authorized'
                      : y || q || C
                        ? 'error'
                        : 'hidden'
              : 'hidden',
            refetchAll: (0, n.useCallback)(() => {
              x(), m.invalidateQueries({ queryKey: B }), m.invalidateQueries({ queryKey: I });
            }, [x, B, I, m]),
            refetchAuthorizationQuery: () => m.invalidateQueries({ queryKey: I }),
            preLltv: null == T ? void 0 : T.preLltv,
            preLiquidationContractAddress: Z,
          };
        };
    },
    64070: function (e, t, r) {
      r.d(t, {
        s: function () {
          return f;
        },
      });
      var n = r(12556),
        a = r(26726),
        i = r(89991);
      let f = (e) => {
        let { targetChainId: t } = (0, i.Z_)(),
          r = (0, a.nh)(a.TP.AUTO_DELEVERAGE),
          f = n.FW.isPreLiquidationSupported(null != e ? e : t);
        return r && f;
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
        a = r(58258),
        i = r(54655);
      t.Z = (0, a.memo)((e) => {
        let { isRiskyPositionsAcknowledged: t, setIsRiskyPositionsAcknowledged: r } = e;
        return (0, n.BX)(i.Kqy, {
          align: 'center',
          gap: 'xs',
          background: 'background.alert',
          padding: '8px',
          borderRadius: '4px',
          children: [
            (0, n.tZ)(i.XZJ, {
              id: 'is-position-risky-checkbox',
              checked: t,
              onChange: r,
              color: 'primary',
            }),
            (0, n.tZ)(i.xvT.Body.XXS.Regular, {
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
          return b;
        },
        c: function () {
          return u;
        },
      });
      var n = r(78286),
        a = r(58258),
        i = r(12556),
        f = r(54655),
        o = r(50825),
        l = r(49149),
        d = r(38819);
      let s = (0, d.Z)(f.Kqy, { target: 'e1gk17kp0' })(
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
      var u = (0, a.memo)((e) => {
          let { minHeight: t = '200px' } = e;
          return (0, n.BX)(s, {
            gap: 20,
            direction: 'column',
            minHeight: t,
            padding: 's',
            children: [
              (0, n.BX)(f.Kqy, {
                direction: 'column',
                gap: 's',
                children: [
                  (0, n.tZ)(f.xvT.Body.S.Regular, {
                    textAlign: 'center',
                    children: 'Service temporarily unavailable.',
                  }),
                  (0, n.tZ)(f.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    maxWidth: '450px',
                    textAlign: 'center',
                    children:
                      "We're experiencing an outage and are working to restore service as soon as possible. The data shown on the app may not be reliable. In the meantime you can manage your positions through our Fallback App.",
                  }),
                ],
              }),
              (0, n.BX)(f.Kqy, {
                gap: 's',
                children: [
                  (0, n.tZ)(o.Z, {
                    mode: 'external',
                    href: i.hU,
                    buttonProps: { size: 'small', variant: 'primary', label: 'Use Fallback App' },
                  }),
                  (0, n.tZ)(o.Z, {
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
      let p = (0, d.Z)(f.Kqy, { target: 'e6oot9d0' })(
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
      var b = (0, a.memo)((e) => {
        let { minHeight: t = '250px', className: r, style: a } = e,
          i = (0, c.useRouter)();
        return (0, n.BX)(p, {
          className: r,
          style: a,
          gap: 20,
          direction: 'column',
          minHeight: t,
          padding: 's',
          children: [
            (0, n.BX)(f.Kqy, {
              direction: 'column',
              gap: 's',
              children: [
                (0, n.tZ)(f.xvT.Body.S.Regular, {
                  textAlign: 'center',
                  children: 'Data temporarily unavailable.',
                }),
                (0, n.tZ)(f.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  maxWidth: '450px',
                  textAlign: 'center',
                  children:
                    "We're experiencing an outage and are working to restore service as soon as possible. The data shown on the app may not be reliable.",
                }),
              ],
            }),
            (0, n.BX)(f.Kqy, {
              gap: 's',
              children: [
                (0, n.tZ)(f.zxk, {
                  size: 'small',
                  variant: 'primary',
                  label: 'Refresh App',
                  onClick: () => i.refresh(),
                }),
                (0, n.tZ)(o.Z, {
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
        a = r(58258),
        i = r(54655),
        f = r(27349);
      t.Z = (0, a.memo)((e) => {
        var t, r;
        let { iconSize: o, RewardsHoverCardProps: l, children: d, noHover: s } = e,
          { points: u, rewards: c } = l,
          p = (0, a.useRef)(c),
          b = (0, a.useRef)(u);
        return (
          (null == c ? void 0 : c.length) && (p.current = c),
          (null == u ? void 0 : u.length) && (b.current = u),
          (0, n.BX)(i.zsw.Root, {
            children: [
              (0, n.tZ)(i.zsw.Trigger, {
                isDisabled: s,
                children: (0, n.BX)(i.Kqy, {
                  gap: 2,
                  align: 'center',
                  children: [
                    d,
                    !!(null === (t = p.current) || void 0 === t ? void 0 : t.length) &&
                      (0, n.tZ)(i.JO$, {
                        icon: 'RewardsPlain20',
                        color: 'constant.color.active',
                        size: o,
                      }),
                    !!(null === (r = b.current) || void 0 === r ? void 0 : r.length) &&
                      (0, n.tZ)(i.JO$, {
                        icon: 'PointsPlain20',
                        color: 'constant.color.active',
                        size: o,
                      }),
                  ],
                }),
              }),
              (0, n.tZ)(i.zsw.Content, { children: (0, n.tZ)(f.Z, { ...l }) }),
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
        a = r(58258),
        i = r(40252),
        f = r(54655),
        o = r(45842),
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
        b = (0, c.Z)(f.Kqy, { target: 'e1u62bbu1' })(
          'padding:',
          (e) => {
            let { theme: t } = e;
            return '8px '.concat(t.padding.s, ' 8px ').concat(t.padding.s);
          },
          ';'
        ),
        m = (0, c.Z)('div', { target: 'e1u62bbu2' })(
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
              : null === e && null === t && (0, l.isDefined)(r)
                ? (0, u.Tg)(r)
                : [e, t].filter(l.isDefined).join(' - ');
      }
      let v = (0, a.memo)((e) => {
        let { href: t, label: r } = e;
        return (0, n.tZ)(f.Kqy, {
          children: (0, n.tZ)(d.Z, {
            href: t,
            mode: 'external',
            buttonProps: { variant: 'ghost', size: 'small', label: r || 'View' },
          }),
        });
      });
      var h = (0, a.memo)((e) => {
        let { oracle: t } = e,
          { targetChainId: r } = (0, s.Z_)(),
          d = (0, a.useMemo)(
            () => ({
              link: i.ChainUtils.getExplorerAddressUrl(r, t.address),
              formattedAddress: (0, u.Tg)(t.address),
            }),
            [t.address, r]
          ),
          c = (0, a.useMemo)(
            () =>
              ((null == t ? void 0 : t.baseFeedOneAddress) &&
                i.ChainUtils.getExplorerAddressUrl(r, null == t ? void 0 : t.baseFeedOneAddress)) ||
              '',
            [null == t ? void 0 : t.baseFeedOneAddress, r]
          ),
          h = (0, a.useMemo)(
            () =>
              ((null == t ? void 0 : t.baseFeedTwoAddress) &&
                i.ChainUtils.getExplorerAddressUrl(r, null == t ? void 0 : t.baseFeedTwoAddress)) ||
              '',
            [null == t ? void 0 : t.baseFeedTwoAddress, r]
          ),
          y = (0, a.useMemo)(
            () =>
              ((null == t ? void 0 : t.quoteFeedOneAddress) &&
                i.ChainUtils.getExplorerAddressUrl(
                  r,
                  null == t ? void 0 : t.quoteFeedOneAddress
                )) ||
              '',
            [null == t ? void 0 : t.quoteFeedOneAddress, r]
          ),
          w = (0, a.useMemo)(
            () =>
              ((null == t ? void 0 : t.quoteFeedTwoAddress) &&
                i.ChainUtils.getExplorerAddressUrl(
                  r,
                  null == t ? void 0 : t.quoteFeedTwoAddress
                )) ||
              '',
            [null == t ? void 0 : t.quoteFeedTwoAddress, r]
          ),
          x = (0, a.useMemo)(() => {
            let e =
              g(
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
          T = (0, a.useMemo)(() => {
            let e =
              g(
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
          Z = (0, a.useMemo)(() => {
            let e =
              g(
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
          k = (0, a.useMemo)(() => {
            let e =
              g(
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
            (0, n.tZ)(m, {
              children: (0, n.tZ)(f.xvT.Body.S.Regular, { color: 'text.body', children: 'Oracle' }),
            }),
            (0, n.tZ)(f.Z0O, {}),
            t.address &&
              t.address !== o.DR &&
              (0, n.tZ)(n.HY, {
                children: (0, n.BX)(b, {
                  align: 'center',
                  justify: 'space-between',
                  gap: 8,
                  children: [
                    (0, n.tZ)(f.xvT.Body.XXS.Regular, { color: 'text.body', children: 'Address' }),
                    (0, n.tZ)(v, { href: d.link, label: d.formattedAddress }),
                  ],
                }),
              }),
            (null == t ? void 0 : t.baseFeedOneAddress) &&
              (null == t ? void 0 : t.baseFeedOneAddress) !== o.DR &&
              (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(f.Z0O, {}),
                  (0, n.BX)(b, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 8,
                    children: [
                      (0, n.tZ)(f.xvT.Body.XXS.Regular, {
                        color: 'text.body',
                        whiteSpace: 'nowrap',
                        lineHeight: 'normal',
                        children: 'Base Feed 1',
                      }),
                      (0, n.tZ)(v, { href: c, label: x }),
                    ],
                  }),
                ],
              }),
            (null == t ? void 0 : t.baseFeedTwoAddress) &&
              (null == t ? void 0 : t.baseFeedTwoAddress) !== o.DR &&
              (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(f.Z0O, {}),
                  (0, n.BX)(b, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 8,
                    children: [
                      (0, n.tZ)(f.xvT.Body.XXS.Regular, {
                        color: 'text.body',
                        whiteSpace: 'nowrap',
                        lineHeight: 'normal',
                        children: 'Base Feed 2',
                      }),
                      (0, n.tZ)(v, { href: h, label: T }),
                    ],
                  }),
                ],
              }),
            (null == t ? void 0 : t.quoteFeedOneAddress) &&
              (null == t ? void 0 : t.quoteFeedOneAddress) !== o.DR &&
              (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(f.Z0O, {}),
                  (0, n.BX)(b, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 8,
                    children: [
                      (0, n.tZ)(f.xvT.Body.XXS.Regular, {
                        color: 'text.body',
                        whiteSpace: 'nowrap',
                        lineHeight: 'normal',
                        children: 'Quote Feed 1',
                      }),
                      (0, n.tZ)(v, { href: y, label: Z }),
                    ],
                  }),
                ],
              }),
            (null == t ? void 0 : t.quoteFeedTwoAddress) &&
              (null == t ? void 0 : t.quoteFeedTwoAddress) !== o.DR &&
              (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(f.Z0O, {}),
                  (0, n.BX)(b, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 8,
                    children: [
                      (0, n.tZ)(f.xvT.Body.XXS.Regular, {
                        color: 'text.body',
                        whiteSpace: 'nowrap',
                        lineHeight: 'normal',
                        children: 'Quote Feed 2',
                      }),
                      (0, n.tZ)(v, { href: w, label: k }),
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
        w = (0, a.memo)((e) => {
          let { text: t } = e;
          return (0, n.tZ)(f.ua7, {
            content: t,
            disabled: !t,
            withTouch: !0,
            children: (0, n.tZ)(f.JO$, { icon: 'WarningPlain20', color: 'icon.secondary' }),
          });
        });
      var x = (0, a.memo)((e) => {
        let { oracle: t, warnings: r, tagProps: o, typographyProps: l } = e,
          d = (0, a.useMemo)(() => (r ? (0, f._d)(r) : null), [r]),
          s = (0, a.useMemo)(() => ((0, i.isFetched)(t) ? (0, f.pTE)(t) : t), [t]);
        return 'string' == typeof t
          ? (0, n.BX)(f.Vp9, {
              ...o,
              children: [
                (0, n.tZ)(y, {
                  children: (0, n.tZ)(f.ZT$, {
                    TextVariant: f.xvT.Body.XXXS.Regular,
                    lineHeight: 'normal',
                    shorten: 1,
                    ...l,
                    children: s,
                  }),
                }),
                (null == d ? void 0 : d.message) && (0, n.tZ)(w, { text: d.message }),
              ],
            })
          : (0, n.BX)(f.Vp9, {
              ...o,
              children: [
                (0, n.BX)(f.zsw.Root, {
                  children: [
                    (0, n.tZ)(f.zsw.Trigger, {
                      children: (0, n.tZ)(y, {
                        children: (0, n.tZ)(f.ZT$, {
                          TextVariant: f.xvT.Body.XXXS.Regular,
                          lineHeight: 'normal',
                          shorten: 1,
                          ...l,
                          children: s,
                        }),
                      }),
                    }),
                    (0, n.tZ)(f.zsw.Content, { children: (0, n.tZ)(h, { oracle: t }) }),
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
        a = r(58258),
        i = r(88084),
        f = r(77187),
        o = r(54655),
        l = r(90626),
        d = r(49149);
      class s extends a.Component {
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          var r, n, a, o;
          console.error(
            'Section error: '
              .concat(e, ', ')
              .concat(t, '. Section: ')
              .concat(
                null !== (a = null === (r = this.props) || void 0 === r ? void 0 : r.section) &&
                  void 0 !== a
                  ? a
                  : 'N/A',
                ', Route: '
              )
              .concat(
                null !== (o = null === (n = this.props) || void 0 === n ? void 0 : n.route) &&
                  void 0 !== o
                  ? o
                  : 'N/A'
              )
          ),
            d.QP.NEXT_PUBLIC_SENTRY_DSN &&
              i.$e(function (t) {
                t.setLevel('fatal'), f.Tb(e);
              });
        }
        render() {
          if (this.state.hasError) {
            var e, t;
            return (
              this.props.fallback ||
              (0, n.tZ)(l.default, {
                children: (0, n.BX)(o.Kqy, {
                  direction: 'column',
                  align: 'center',
                  justify: 'center',
                  gap: 'm',
                  className: 'p-4',
                  children: [
                    (0, n.tZ)(o.xvT.Title.L, {
                      color: 'text.primary',
                      children:
                        null !== (e = this.props.title) && void 0 !== e ? e : 'Section Error',
                    }),
                    (0, n.tZ)(o.xvT.Body.L.Regular, {
                      color: 'text.primary',
                      children:
                        null !== (t = this.props.description) && void 0 !== t
                          ? t
                          : 'Something went wrong in '.concat(this.props.section, '.'),
                    }),
                    (0, n.tZ)(o.zxk, {
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
        a = r(58258),
        i = r(23567),
        f = r(38819),
        o = r(54655);
      let l = (0, f.Z)('div', { target: 'eqlp4070' })(
          'background:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.gradient.pageBackground;
          },
          ';width:100%;'
        ),
        d = (0, f.Z)(o.Kqy, { shouldForwardProp: (0, o.uhK)(['withAside']), target: 'eqlp4071' })(
          'container-type:inline-size;container-name:content-root;margin:',
          (e) => {
            let { withAside: t } = e;
            return t
              ? (0, i.iv)('var(--navbar-height) 10px 10px 10px')
              : (0, i.iv)(
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
      (0, f.Z)('div', { target: 'eqlp4072' })(
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
        (0, o.xJ_)('border-width'),
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
      var s = (0, a.memo)((e) => {
        let { children: t, withAside: r = !0, className: a, style: i } = e;
        return (0, n.tZ)(l, {
          className: a,
          style: i,
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
        a = r(58258),
        i = r(47312),
        f = r(40252),
        o = r(89991),
        l = r(49663),
        d = r(91283);
      let s = (0, a.createContext)(null),
        u = () => {
          let e = (0, a.useContext)(s);
          if (!e) throw Error('useMorphoLegacyContext must be called inside a MorphoLegacyContext');
          return e;
        };
      t.ZP = (0, a.memo)((e) => {
        let { children: t } = e,
          { targetChainId: r } = (0, o.Z_)(),
          { data: a } = (0, i.useWalletClient)(),
          u = (0, d.g)(l.rr.legacyMorphoToken, {
            skip:
              r !== f.ChainId.EthMainnet ||
              (null == a ? void 0 : a.chain.id) !== f.ChainId.EthMainnet,
          }),
          c = (0, d.g)(l.rr.morphoToken, {
            skip:
              r !== f.ChainId.EthMainnet ||
              (null == a ? void 0 : a.chain.id) !== f.ChainId.EthMainnet,
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
          return o;
        },
      });
      var n = r(78286),
        a = r(58258),
        i = r(5469);
      let f = (0, a.createContext)(null),
        o = () => {
          let e = (0, a.useContext)(f);
          if (!e) throw Error('useRewardContext must be called inside a RewardContextProvider');
          return e;
        };
      t.ZP = (0, a.memo)((e) => {
        let { children: t } = e,
          r = (0, i.H)();
        return (0, n.tZ)(f.Provider, { value: { ...r }, children: t });
      });
    },
    86876: function (e, t, r) {
      r.d(t, {
        HT: function () {
          return x;
        },
      });
      var n = r(78286),
        a = r(58258),
        i = r(4311),
        f = r(34940),
        o = r(81767),
        l = r(47312),
        d = r(36929),
        s = r(56044),
        u = r(54655),
        c = r(35047),
        p = r(18313),
        b = r(89991),
        m = r(21464),
        g = r(75571),
        v = r(96278),
        h = r(98267);
      let y = async (e, t) => {
          try {
            let r = await (0, f.a)(e, { hash: t });
            if ((null == r ? void 0 : r.status) !== 'success') throw r;
            return r;
          } catch (r) {
            return new Promise((r, n) => {
              let a = (0, o.p)(e, {
                onBlock: (0, i.Z)(
                  async () => {
                    try {
                      let i = await (0, f.a)(e, { hash: t });
                      a(), (null == i ? void 0 : i.status) === 'success' ? r(i) : n(i);
                    } catch (e) {}
                  },
                  3e3,
                  { trailing: !1 }
                ),
              });
            });
          }
        },
        w = (0, a.createContext)(null),
        x = () => {
          let e = (0, a.useContext)(w);
          if (!e)
            throw Error('useTransactionContext must be called inside a TransactionContextProvider');
          return e;
        };
      t.ZP = (0, a.memo)((e) => {
        var t;
        let { children: r } = e,
          { data: i } = (0, l.useWalletClient)(),
          { account: f, targetChain: o } = (0, b.Z_)(),
          { displayToast: s, displayTxToast: x } = (0, u.V6$)(),
          k = (0, v.B)(),
          [A, q] = (0, a.useState)(),
          B = (0, a.useRef)(i),
          M = (0, a.useRef)({ address: f.address, isContract: f.isContract, isSafe: f.isSafe }),
          S = (0, a.useRef)(o),
          [C, I] = (0, a.useState)(),
          [R, X, P] = (0, h.yk)(A, null === (t = M.current) || void 0 === t ? void 0 : t.isSafe),
          F = (0, a.useMemo)(() => R && (0, h.V0)(R), [R]),
          E = (0, a.useCallback)(() => {
            P(),
              q(void 0),
              I(void 0),
              (B.current = void 0),
              (M.current = void 0),
              (S.current = void 0);
          }, [P]),
          D = (0, a.useCallback)(
            (e, t, r, n) => {
              E(),
                (B.current = i),
                (M.current = { address: f.address, isContract: f.isContract, isSafe: f.isSafe }),
                (S.current = o),
                q((a) => {
                  if (a) throw Error('Cannot override action bundle');
                  return n ? new Z(e, t, r) : new T(e, t, r);
                });
            },
            [f.address, f.isContract, f.isSafe, o, i, E]
          ),
          L = (0, a.useCallback)(
            async (e) => {
              var t, r;
              let n = B.current,
                a = M.current,
                i = S.current;
              if (!n || !(null == a ? void 0 : a.address) || a.isSafe || !i) return;
              let f =
                null !== (t = null == A ? void 0 : A.requirements.txs.find((t) => t.id === e)) &&
                void 0 !== t
                  ? t
                  : null == A
                    ? void 0
                    : A.requirements.signatures.find((t) => t.id === e);
              if (f)
                try {
                  let e;
                  'tx' in f
                    ? ((e = await n.sendTransaction({ ...f.tx, account: a.address, chain: i })),
                      X('signed'),
                      I(e),
                      await c.Time.wait(500),
                      await y(n, e),
                      I(void 0))
                    : await f.sign(n),
                    x({
                      notificationStatus: u.EzR.success,
                      txHash: e,
                      chainId: o.id,
                      userIsContract: a.isContract,
                    }),
                    X('success');
                } catch (e) {
                  s({
                    description:
                      null !== (r = (0, c.formatLongString)(e.message, 100)) && void 0 !== r
                        ? r
                        : 'An error occurred',
                    notificationStatus: u.EzR.error,
                  }),
                    X('error');
                }
            },
            [
              null == A ? void 0 : A.requirements.signatures,
              null == A ? void 0 : A.requirements.txs,
              s,
              x,
              X,
              o.id,
            ]
          ),
          O = (0, a.useCallback)(async () => {
            var e, t;
            let r;
            let n = B.current,
              a = M.current,
              i = S.current;
            if (!n || !(null == a ? void 0 : a.address) || !i || !A) return;
            let f = A.tx();
            try {
              let t;
              if (a.isSafe) {
                let e = new d.default(),
                  { safeTxHash: r } = await e.txs.send({
                    txs: A.requirements.txs
                      .map((e) => {
                        let { tx: t } = e;
                        return t;
                      })
                      .concat((0, g.RY)(f, '5AFEA44'))
                      .map((e) => {
                        let { value: t, ...r } = e;
                        return { ...r, value: null != t ? t.toString() : '0' };
                      }),
                  });
                t = r;
              } else
                t = await n.sendTransaction({
                  ...(0, g.RY)(f, p.clientEnvs.NEXT_PUBLIC_CALLDATA_ORIGIN),
                  account: a.address,
                  chain: i,
                });
              if ((X('signed'), 'object' == typeof t)) throw Error('Transaction failed');
              (r = t), I(t), await c.Time.wait(500);
              let l = await y(n, t);
              if ((null == l ? void 0 : l.status) !== 'success')
                throw Error('Transaction failed ' + t);
              I(void 0),
                x({
                  notificationStatus: u.EzR.success,
                  txHash: t,
                  chainId: o.id,
                  userIsContract: a.isContract,
                }),
                X('success'),
                m.Q.debugSharedLiquidity({
                  bundlingOptions: k,
                  userAddress: a.address,
                  txHash: t,
                  operations: null == A ? void 0 : A.operations,
                  steps: null == A ? void 0 : A.steps,
                }),
                null === (e = A.onTxSuccess) || void 0 === e || e.call(A);
            } catch (e) {
              r
                ? x({
                    notificationStatus: u.EzR.error,
                    txHash: r,
                    chainId: o.id,
                    userIsContract: a.isContract,
                  })
                : s({
                    description:
                      null !== (t = (0, c.formatLongString)(e.message, 100)) && void 0 !== t
                        ? t
                        : 'An error occurred',
                    notificationStatus: u.EzR.error,
                  }),
                X('error');
            }
          }, [A, k, s, x, X, o.id]);
        (0, a.useEffect)(() => {
          if (F && F.status === h.qb.signing)
            switch (F.type) {
              case 'tx':
                O();
                return;
              case 'req':
                L(F.id);
                return;
            }
        }, [O, L, F]);
        let _ = (0, a.useMemo)(() => {
          var e;
          return {
            activeBundle: A,
            setActiveBundle: D,
            reset: E,
            retry: () => X('retry'),
            currentState: F,
            pendingTxHash: C,
            bundleChainId: null === (e = S.current) || void 0 === e ? void 0 : e.id,
            accountRef: M.current,
          };
        }, [A, D, E, F, C, X]);
        return (0, n.tZ)(w.Provider, { value: _, children: r });
      });
      class T extends s.ActionBundle {
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
      class Z extends T {
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
          return a;
        },
        V0: function () {
          return d;
        },
        yk: function () {
          return s;
        },
      });
      var n,
        a,
        i = r(58258),
        f = r(18983);
      let o = (e) => {
        let [t, r] = (0, i.useState)(e.initial);
        return (
          (0, i.useEffect)(() => {
            r(e.initial);
          }, [e.initial]),
          (0, i.useEffect)(() => {
            var n;
            if (!t) return;
            let a = null === (n = e.states[t]) || void 0 === n ? void 0 : n.on;
            if (!a) return;
            let i = (0, f.keys)(a).find((e) => /^timer_(\d+(\.\d+)?)s/.test(e));
            if (!i) return;
            let o = setTimeout(() => r(a[i]), 1e3 * parseFloat(i.split('_')[1]));
            return () => clearTimeout(o);
          }, [t, e]),
          [
            t,
            (0, i.useCallback)(
              (t) => {
                r((r) => {
                  var n;
                  if (!r) return r;
                  let a = null === (n = e.states[r]) || void 0 === n ? void 0 : n.on;
                  return (null == a ? void 0 : a[t])
                    ? a[t]
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
            (0, i.useCallback)(() => r(void 0), []),
          ]
        );
      };
      ((n = a || (a = {})).complete = 'complete'),
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
                a = r[e + 1];
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
                  on: { timer_1s: a ? 'req_signing_'.concat(a.id) : 'tx_signing' },
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
        s = (e, t) => o((0, i.useMemo)(() => l(e, t), [e, t]));
    },
    41512: function (e, t, r) {
      r.d(t, {
        n: function () {
          return i;
        },
      });
      var n = r(55412);
      function a() {
        let e = (0, n._)([
          '\n  fragment assetFields on Asset {\n    ...simpleAssetFields\n    yield {\n      apr\n    }\n    vault {\n      id\n      address\n      asset {\n        ...simpleAssetFields\n      }\n      state {\n        id\n        netApy\n      }\n    }\n  }\n',
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let i = (0, r(3245).Ps)(a());
    },
    93114: function (e, t, r) {
      r.d(t, {
        j: function () {
          return i;
        },
      });
      var n = r(55412);
      function a() {
        let e = (0, n._)([
          '\n  fragment collateralExposuresFields on Market {\n    id\n    collateralAsset {\n      ...simpleAssetFields\n    }\n    oracle {\n      id\n      address\n    }\n    oracleInfo {\n      type\n    }\n    oracleFeed {\n      baseVault\n      baseFeedOneAddress\n      baseFeedOneDescription\n      baseFeedOneVendor\n      baseFeedTwoAddress\n      baseFeedTwoDescription\n      baseFeedTwoVendor\n      quoteVault\n      quoteFeedOneAddress\n      quoteFeedOneDescription\n      quoteFeedOneVendor\n      quoteFeedTwoAddress\n      quoteFeedTwoDescription\n      quoteFeedTwoVendor\n    }\n  }\n',
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let i = (0, r(3245).Ps)(a());
    },
    24387: function (e, t, r) {
      r.d(t, {
        G: function () {
          return i;
        },
      });
      var n = r(55412);
      function a() {
        let e = (0, n._)([
          '\n  fragment simpleAssetFields on Asset {\n    id\n    address\n    symbol\n    name\n    decimals\n    priceUsd\n    tags\n    logoURI\n    chain {\n      id\n    }\n  }\n',
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let i = (0, r(3245).Ps)(a());
    },
    45610: function (e, t, r) {
      r.d(t, {
        N: function () {
          return i;
        },
      });
      var n = r(55412);
      function a() {
        let e = (0, n._)([
          '\n  fragment simpleAssetFieldsWithYield on Asset {\n    ...simpleAssetFields\n    yield {\n      apr\n    }\n  }\n',
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      let i = (0, r(3245).Ps)(a());
    },
    49663: function (e, t, r) {
      r.d(t, {
        id: function () {
          return o;
        },
        rr: function () {
          return i;
        },
        tV: function () {
          return f;
        },
      });
      var n,
        a = r(40252);
      let i = a.addresses[a.ChainId.EthMainnet];
      (i.timeBoundedUrd = '0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb'),
        (i.marketRewardsProgramRegistry = '0x5148bF15bb722E1854F66430Bc9FeD0E9FDaCE7D'),
        (i.weEth = '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee'),
        (i.ezEth = '0xbf5495Efe5DB9ce00f80364C8B423567e58d2110'),
        (i.rsEth = '0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7'),
        (i.usdE = '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3'),
        (i.sUsdE = '0x9D39A5DE30e57443BfF2A8307A4256c8797A3497'),
        (i['usd0++'] = '0x35D8949372D46B7a3D5A56006AE77B215fc69bC0'),
        (i['usd0usd0++'] = '0x1d08E7adC263CfC70b1BaBe6dC5Bb339c16Eec52'),
        (i.rsweth = '0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0'),
        (i.re7Weth = '0x78Fc2c2eD1A4cDb5402365934aE5648aDAd094d0'),
        (i.legacyMorphoToken = '0x9994E35Db50125E0DF82e4c2dde62496CE330999'),
        (i.deprecatedMorphoToken = '0x039b598c6b99e70058E1e9021E000BdacD33d026'),
        (i.morphoToken = '0x58D97B57BB95320F9a05dC918Aef65434969c2B2'),
        (i.morphoTokenWrapper = '0x9D03bb2092270648d7480049d0E58d2FcF0E5123');
      let f = new a.Token({
        address: i.legacyMorphoToken,
        decimals: 18,
        symbol: 'MORPHO',
        name: 'Morpho Token',
        eip5267Domain: new a.Eip5267Domain({
          fields: '0xf',
          name: 'Morpho Token',
          version: '1',
          chainId: BigInt(a.ChainId.EthMainnet),
          verifyingContract: i.legacyMorphoToken,
          salt: '0x0',
          extensions: [],
        }),
      });
      null === (n = a.erc20WrapperTokens[a.ChainId.EthMainnet]) ||
        void 0 === n ||
        n.add(i.morphoTokenWrapper);
      let o = a.addresses[a.ChainId.BaseMainnet];
      (o.ezEth = '0x2416092f143378750bb29b79eD961ab195CcEea5'),
        (o.bsdEth = '0xCb327b99fF831bF8223cCEd12B1338FF3aA322Ff'),
        (o.deprecatedMorphoToken = '0x039b598c6b99e70058E1e9021E000BdacD33d026'),
        (o.morphoToken = '0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842'),
        (o.wellToken = '0xA88594D404727625A9437C3f886C7643872296AE');
    },
    9834: function (e, t, r) {
      r.d(t, {
        m: function () {
          return a;
        },
      });
      var n = r(12556);
      let a = (e) =>
        e
          ? e
              .reduce((e, t) => {
                var r, a, i;
                let { collateralAsset: f, oracle: o } = t.market;
                if (!(null == f ? void 0 : f.address) || !(null == f ? void 0 : f.symbol)) return e;
                let l = o
                    ? {
                        address: o.address,
                        type: null === (r = t.market.oracleInfo) || void 0 === r ? void 0 : r.type,
                        ...t.market.oracleFeed,
                      }
                    : void 0,
                  d = e.find((e) => e.token.address === f.address);
                return (
                  d
                    ? (d.lltvs.add(t.market.lltv),
                      l && d.oracles.add(l),
                      (d.supplyAssetsUsd +=
                        null !== (a = t.supplyAssetsUsd) && void 0 !== a ? a : 0))
                    : e.push({
                        token: (0, n.wk)(f),
                        lltvs: new Set([BigInt(t.market.lltv)]),
                        oracles: l ? new Set([l]) : new Set(),
                        supplyAssetsUsd: null !== (i = t.supplyAssetsUsd) && void 0 !== i ? i : 0,
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
          return o;
        },
        Tg: function () {
          return i;
        },
        sL: function () {
          return f;
        },
      });
      var n = r(54655),
        a = r(35047);
      let i = (e) => '0x' + (0, a.formatLongString)(e.slice(2), 11),
        f = (e) => {
          let { price: t, amount: r, decimals: a, withTrailingZero: i } = e;
          return n.$0l.short
            .digits((0, n.QQD)(t, r))
            .trailingZero(i)
            .of(r, a);
        },
        o = (e, t) => ((0, a.isDefined)(e) ? t(e) : e);
    },
    73529: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = r(77672),
        a = r.n(n);
      BigInt.prototype.toJSON = function () {
        return this.toString();
      };
      var i = r(40252),
        f = r(4565),
        o = r(75963);
      let l = {
        type: 'bytes32String',
        base: a().string(),
        messages: { 'bytes32String.base': '"{{#label}}" must be a parsable bytes32 string' },
        validate: (e, t) =>
          (0, o.v)(e) ? { value: e } : { value: e, errors: t.error('bytes32String.base') },
      };
      var d = a().extend(
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
            Object.values(i.ChainId)
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
              return { value: (0, f.safeGetAddress)(e) };
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
          return m;
        },
        Ii: function () {
          return a;
        },
        JD: function () {
          return b;
        },
      });
      var n,
        a,
        i = r(18313),
        f = r(73529),
        o = r(81961),
        l = r(31374);
      ((n = a || (a = {})).Market = 'market-reward'),
        (n.Vault = 'vault-reward'),
        (n.Airdrop = 'airdrop-reward'),
        (n.Uniform = 'uniform-reward'),
        (n.Merkl = 'merkl-reward');
      let d = f.Z.alternatives().try(
          f.Z.object({
            total: f.Z.bigint().required(),
            claimableNow: f.Z.bigint().required(),
            claimableNext: f.Z.bigint().required(),
            claimed: f.Z.bigint().required(),
          }).unknown(!0),
          f.Z.allow(null)
        ),
        s = (e) =>
          f.Z.object({
            marketId: f.Z.string().required(),
            chainId: f.Z.number().valid(e).required(),
          }).unknown(!0),
        u = (e) =>
          f.Z.object({
            vault: f.Z.address().required(),
            chainId: f.Z.number().valid(e).required(),
          }).unknown(!0),
        c = (e) =>
          f.Z.object({
            user: f.Z.address().required(),
            type: f.Z.string().required(),
            asset: f.Z.object({
              address: f.Z.address().required(),
              chainId: f.Z.number().valid(e).required(),
            })
              .unknown(!0)
              .required(),
            program: f.Z.alternatives().try(s(e), u(e), f.Z.object().unknown(!0)).optional(),
            forSupply: d.optional(),
            forBorrow: d.optional(),
            forCollateral: d.optional(),
            amount: d.optional(),
          }).unknown(!0),
        p = (e) => f.Z.array().items(c(e)),
        b = (e) => 'airdrop-reward' === e.type,
        m = async function (e, t) {
          var r;
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!e || !t) return [];
          let a = ''
            .concat(i.clientEnvs.NEXT_PUBLIC_REWARDS_API_URL, '/v1/users/')
            .concat(e, '/rewards?trusted=true&chain_id=')
            .concat(t);
          n && (a += '&noCache='.concat(Date.now().toString()));
          let f = await fetch(a),
            d = await f.json();
          return (0, l.S)(
            null === (r = (0, o.N)(d.data)) || void 0 === r
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
        a = r(4565),
        i = r(12556),
        f = r(35047),
        o = r(42418),
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
          let a = (0, i.wk)(r),
            f = g(a, null == t ? void 0 : t.totalAssets, t.allocation),
            l = m(a, t.rewards),
            s = { tokens: new Map() };
          return (
            f.tokens.size > 0
              ? f.tokens.forEach((e) => {
                  s = y(e, l, a.price);
                })
              : (s = l),
            (0, o.yN)('apr', Array.from(s.tokens.values()))
          );
        },
        u = (e, t) => {
          if (!t.price) return 1000n * BigInt(e);
          let r = ((0, a.safeParseUnits)('1000') * 10n ** BigInt(t.decimals)) / t.price;
          return n.MathLib.mulDivDown(e, r, (0, a.safeParseUnits)('1', t.decimals));
        },
        c = (e) => {
          let t,
            { market: r, loanAsset: n, type: a = 'borrow' } = e;
          if (!n || !r) return [];
          switch (a) {
            case 'borrow':
              t = v(r, n);
              break;
            case 'supply':
              t = h(r, n);
          }
          return (0, o.yN)('apr', Array.from(t.tokens.values()));
        },
        p = (e) => {
          let { loanToken: t, rewardToken: r, rewardsPerToken: i } = e,
            f = r.toUsd(i),
            o = t.toUsd((0, a.safeParseUnits)('1', t.decimals));
          return f && o ? n.MathLib.wDivDown(f, o) : null;
        },
        b = (e) => {
          let { loanToken: t, rewardToken: r, rewardsPerToken: n } = e,
            a = u(n, t),
            i = p({ loanToken: t, rewardToken: r, rewardsPerToken: n });
          return {
            rewardsPerToken: n,
            apr: i,
            rewardToken: r,
            proportional: { rate: a, isPriced: (0, f.isDefined)(t.price) },
          };
        },
        m = (e, t) => {
          let r = { tokens: new Map() };
          return (
            t &&
              t.forEach((t) => {
                t.amountPerSuppliedToken &&
                  0n !== t.amountPerSuppliedToken &&
                  (r = y(
                    b({
                      loanToken: e,
                      rewardToken: (0, i.wk)(t.asset),
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
          let a = { tokens: new Map() };
          return (
            r &&
              r.map((r) => {
                var f, o, d;
                null == r ||
                  null === (d = r.market) ||
                  void 0 === d ||
                  null === (o = d.state) ||
                  void 0 === o ||
                  null === (f = o.rewards) ||
                  void 0 === f ||
                  f.map((f) => {
                    if (!f.amountPerSuppliedToken || 0n === f.amountPerSuppliedToken || !f.asset)
                      return;
                    let o = b({
                        loanToken: e,
                        rewardToken: (0, i.wk)(f.asset),
                        rewardsPerToken: f.amountPerSuppliedToken,
                      }),
                      d = (0, l.R)(t, r.supplyAssets);
                    if (!d) return;
                    let s = o.apr && n.MathLib.wMulDown(o.apr, d),
                      u = n.MathLib.wMulDown(o.proportional.rate, d);
                    a = y(
                      { ...o, apr: s, proportional: { ...o.proportional, rate: u } },
                      a,
                      e.price
                    );
                  });
              }),
            a
          );
        },
        v = (e, t) => {
          var r;
          let n = { tokens: new Map() };
          return (
            (null == e ? void 0 : null === (r = e.state) || void 0 === r ? void 0 : r.rewards) &&
              e.state.rewards.map((e) => {
                e.amountPerBorrowedToken &&
                  0n !== e.amountPerBorrowedToken &&
                  e.asset &&
                  (n = y(
                    b({
                      loanToken: t,
                      rewardToken: (0, i.wk)(e.asset),
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
                    b({
                      loanToken: t,
                      rewardToken: (0, i.wk)(e.asset),
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
          let { rewardToken: n, rewardsPerToken: a, proportional: i, apr: o } = e;
          if (t.tokens.has(n.address)) {
            let e = t.tokens.get(n.address),
              a = e.apr ? (o ? e.apr + o : e.apr) : o;
            t.tokens.set(n.address, {
              ...e,
              proportional: { isPriced: (0, f.isDefined)(r), rate: e.proportional.rate + i.rate },
              apr: a,
            });
          } else
            t.tokens.set(n.address, {
              rewardToken: n,
              rewardsPerToken: a,
              proportional: i,
              apr: o,
            });
          return t;
        },
        w = (e) => {
          if (e.apr) return f.format.percent.digits(2).unit('%').sign().of(e.apr, 18);
          if (e.proportional) {
            let { decimals: t } = e.rewardToken;
            return f.format.short.digits(2).sign().of(e.proportional.rate, t);
          }
        };
    },
    42418: function (e, t, r) {
      r.d(t, {
        Dt: function () {
          return n;
        },
        JJ: function () {
          return a;
        },
        yN: function () {
          return i;
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
        a = (e, t) => (e || t ? (e ? (!t || e > t ? 1 : e < t ? -1 : 0) : -1) : 0),
        i = (e, t) =>
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
        a = r(75963),
        i = r(63171),
        f = r(17965),
        o = r(35047);
      let l = {
          [f.TransactionType.MarketBorrow]: 'Borrow',
          [f.TransactionType.MarketLiquidation]: 'Liquidation',
          [f.TransactionType.MarketRepay]: 'Repay',
          [f.TransactionType.MarketSupply]: 'Supply',
          [f.TransactionType.MarketSupplyCollateral]: 'Supply collateral',
          [f.TransactionType.MarketWithdraw]: 'Withdraw',
          [f.TransactionType.MarketWithdrawCollateral]: 'Withdraw collateral',
          [f.TransactionType.MetaMorphoDeposit]: 'Vault Deposit',
          [f.TransactionType.MetaMorphoFee]: 'Vault Fee',
          [f.TransactionType.MetaMorphoWithdraw]: 'Vault Withdraw',
          [f.TransactionType.MetaMorphoTransfer]: 'Vault Transfer',
        },
        d = (e) => {
          var t;
          return null !== (t = l[e]) && void 0 !== t ? t : e;
        };
      function s(e, t) {
        let { data: r, ...f } = e;
        if (!r) return e;
        let l = [r, (0, n.eC)(o.Time.timestamp(), { size: 4 })];
        if (t)
          try {
            if (((t = t.replace(/^(?!0x)/, '')), !(0, a.v)('0x'.concat(t))))
              throw Error('Calldata origin must consists of only hex characters');
            if (t.length > 7) throw Error('Calldata origin must be at most 7 characters long');
            l.push('0x'.concat(t.padStart(8, '2')));
          } catch (e) {
            console.warn('Invalid calldata origin:\n', e.name);
          }
        return { data: (0, i.SM)(l), ...f };
      }
    },
    81961: function (e, t, r) {
      r.d(t, {
        N: function () {
          return a;
        },
      });
      var n = r(16476);
      let a = (e) =>
        Array.isArray(e)
          ? e.map(a)
          : null != e && e.constructor === Object
            ? Object.fromEntries(
                Object.entries(e).map((e) => {
                  let [t, r] = e;
                  return [(0, n.Z)(t), a(r)];
                })
              )
            : e;
    },
    31374: function (e, t, r) {
      r.d(t, {
        S: function () {
          return f;
        },
        b: function () {
          return o;
        },
      });
      var n = r(77672),
        a = r(77187),
        i = r(88084);
      let f = (e, t) => {
          let { error: r, value: i } = t.validate(e, { abortEarly: !1 });
          return (
            r &&
              (a.Tb(r),
              r instanceof n.ValidationError &&
                console.error('Validation failed: '.concat(r.message), {
                  errorDetails: r.details,
                  data: e,
                }),
              console.error('An unexpected error occurred during validation', r)),
            i
          );
        },
        o = (e, t) => {
          let r = null;
          return (
            i.$e((n) => {
              n.addBreadcrumb({
                category: 'dataValidation',
                message: 'Validation failed',
                data: { errorDetails: e.details, data: t },
              }),
                (r = a.Tb(e));
            }),
            r
          );
        };
    },
    8937: function (e, t, r) {
      r.d(t, {
        R: function () {
          return a;
        },
      });
      var n = r(40252);
      let a = (e, t) => (0n !== e ? n.MathLib.wDivDown(t, e) : 0n);
    },
    40816: function (e, t, r) {
      r.d(t, {
        S: function () {
          return u;
        },
      });
      var n = r(392),
        a = r(59370),
        i = r(93800),
        f = r(40252),
        o = r(4565),
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
            supportsSignatures: b = !0,
          } = e,
          { bundler3: m } = (0, f.getChainAddresses)(c);
        if (c !== f.ChainId.EthMainnet) return;
        let g = [],
          v = new l.ActionBundleRequirements();
        if (r < t) {
          if (b && null != p) {
            let e = d.Time.timestamp() + d.Time.s.from.h(24n),
              r = { type: 'permit', args: [u, s.rr.legacyMorphoToken, t, e, null, !0] };
            g.push(r),
              v.signatures.push({
                action: r,
                async sign(n) {
                  if (null != r.args[4]) return r.args[4];
                  let a = (0, o.getPermitTypedData)(
                      {
                        deadline: e,
                        owner: u,
                        nonce: p,
                        spender: m.generalAdapter1,
                        erc20: s.tV,
                        allowance: t,
                      },
                      c
                    ),
                    f = await (0, i.x)(n, { ...a, account: u });
                  return (r.args[4] = f);
                },
              });
          } else
            v.txs.push({
              type: 'erc20Approve',
              args: [s.rr.legacyMorphoToken, m.generalAdapter1, t],
              tx: {
                to: s.rr.legacyMorphoToken,
                data: (0, n.R)({
                  abi: a.Wo,
                  functionName: 'approve',
                  args: [m.generalAdapter1, t],
                }),
              },
            });
        }
        return (
          g.push(
            { type: 'erc20TransferFrom', args: [s.rr.legacyMorphoToken, t, m.generalAdapter1] },
            { type: 'morphoWrapperDepositFor', args: [u, t] }
          ),
          { actions: g, requirements: v }
        );
      };
    },
    19311: function (e, t, r) {
      r.d(t, {
        g: function () {
          return b;
        },
      });
      var n,
        a,
        i = r(58258),
        f = r(68612),
        o = r(17965),
        l = r(40252),
        d = r(12556),
        s = r(35047),
        u = r(725),
        c = r(96278),
        p = r(89991);
      ((n = a || (a = {})).Liquidatable =
        'Can not complete the transaction as your position is liquidatable.'),
        (n.CloseToLTV = "You're close to being liquidated."),
        (n.HighUtilization = 'Utilization of the new market is >90%.'),
        (n.InsufficientLiquidity = "There isn't enough liquidity on the market."),
        (n.InsufficientCollateral = 'You cannot zap more than your current collateral position.'),
        (n.InsufficientBorrow = 'You cannot zap more than your current borrow position.');
      let b = (e) => {
        var t;
        let { initialState: r, finalState: n, operation: a, marketId: b, isNewMarket: m } = e,
          { account: g } = (0, p.Z_)(),
          { publicAllocatorOptions: v } = (0, c.B)(),
          { migratedCollateral: h, migratedBorrow: y } = (0, i.useMemo)(() => {
            if (!r) return { migratedCollateral: r, migratedBorrow: r };
            if (!(null == g ? void 0 : g.address)) return {};
            let e = (0, s.isDefined)(b) ? r.tryGetAccrualPosition(g.address, b) : void 0;
            return (0, s.isDefined)(e)
              ? {
                  migratedCollateral:
                    (null == a ? void 0 : a.collateralAssets) === f.zL
                      ? null == e
                        ? void 0
                        : e.collateral
                      : null == a
                        ? void 0
                        : a.collateralAssets,
                  migratedBorrow:
                    (null == a ? void 0 : a.borrowAssets) === f.zL
                      ? null == e
                        ? void 0
                        : e.borrowAssets
                      : null == a
                        ? void 0
                        : a.borrowAssets,
                }
              : {};
          }, [
            r,
            g.address,
            b,
            null == a ? void 0 : a.collateralAssets,
            null == a ? void 0 : a.borrowAssets,
          ]),
          w = (0, i.useMemo)(
            () => r && b && r.getMarketPublicReallocations(b, v).data.tryGetMarket(b),
            [r, b, v]
          ),
          x = (0, i.useMemo)(
            () => n && b && n.getMarketPublicReallocations(b, v).data.tryGetMarket(b),
            [n, b, v]
          ),
          T = (0, i.useMemo)(
            () => r && g.address && b && r.tryGetAccrualPosition(g.address, b),
            [r, g, b]
          ),
          Z = (0, i.useMemo)(
            () => n && g.address && b && n.tryGetAccrualPosition(g.address, b),
            [n, g, b]
          ),
          k = (0, i.useMemo)(() => {
            if (!w) return w;
            if (null == y) return y;
            let e = w.totalBorrowShares + (m ? 1n : -1n) * w.toBorrowShares(y),
              t = w.totalBorrowAssets + (m ? 1n : -1n) * y;
            return new l.Market({
              ...w,
              totalBorrowAssets: l.MathLib.max(t, 0n),
              totalBorrowShares: l.MathLib.max(e, 0n),
            });
          }, [w, m, y]),
          A = (0, i.useMemo)(() => {
            if (!k) return k;
            if (!T) return T;
            if (null == h) return h;
            let e = T.collateral + (m ? 1n : -1n) * (null != h ? h : 1n),
              t = k.toBorrowShares(T.borrowAssets + (m ? 1n : -1n) * (null != y ? y : 1n));
            return new l.AccrualPosition(
              { ...T, collateral: l.MathLib.max(e, 0n), borrowShares: l.MathLib.max(t, 0n) },
              k
            );
          }, [k, T, m, y, h]),
          q = (0, u.B9)({
            lltv:
              null !== (t = null == Z ? void 0 : Z.market.params.lltv) && void 0 !== t
                ? t
                : null == A
                  ? void 0
                  : A.market.params.lltv,
            marketId: null != b ? b : void 0,
          }),
          B = (0, i.useMemo)(() => {
            var e;
            let t =
              null !== (e = null == Z ? void 0 : Z.ltv) && void 0 !== e
                ? e
                : null == A
                  ? void 0
                  : A.ltv;
            if (t && q) return (0, d.M4)(t, q);
          }, [Z, A, q]),
          M = (0, i.useMemo)(() => {
            let e = (0, s.getValue)(null != Z ? Z : A, 'ltv');
            return (A && !A.isHealthy) || (e && q && e > q)
              ? {
                  level: o.WarningLevel.Red,
                  message: 'Can not complete the transaction as your position is liquidatable.',
                  color: 'text.interactive.error',
                }
              : e && q && B
                ? {
                    level: o.WarningLevel.Yellow,
                    message: "You're close to being liquidated.",
                    color: 'text.interactive.warning',
                  }
                : void 0;
          }, [Z, q, A, B]),
          S = (0, i.useMemo)(() => {
            if (T && null != h && !m && T.collateral < h)
              return {
                level: o.WarningLevel.Red,
                message: 'You cannot zap more than your current collateral position.',
                color: 'text.interactive.error',
              };
          }, [T, m, h]),
          C = (0, i.useMemo)(() => {
            if (T && null != y && !m && T.borrowAssets < y)
              return {
                level: o.WarningLevel.Red,
                message: 'You cannot zap more than your current borrow position.',
                color: 'text.interactive.error',
              };
          }, [T, m, y]),
          I = (0, i.useMemo)(() => {
            if (k) {
              if (k.liquidity < 0n)
                return {
                  level: o.WarningLevel.Red,
                  message: "There isn't enough liquidity on the market.",
                  color: 'text.interactive.error',
                };
              if (m && k.utilization > l.AdaptiveCurveIrmLib.TARGET_UTILIZATION)
                return {
                  level: o.WarningLevel.Yellow,
                  message: 'Utilization of the new market is >90%.',
                  color: 'text.interactive.warning',
                };
            }
          }, [m, k]);
        return {
          initialMarketData: w,
          finalMarketData: x,
          liquidityError: I,
          preViewedPosition: A,
          preViewedMarket: k,
          initialPosition: T,
          finalPosition: Z,
          errors: { borrowError: C, collateralError: S, ltvError: M, liquidityError: I },
        };
      };
    },
    73057: function (e, t, r) {
      var n = r(58258),
        a = r(54655);
      t.Z = (e, t, r, i) =>
        (0, n.useMemo)(() => {
          if ((0, a.Czs)(e) || !t || !(null == i ? void 0 : i.address))
            return {
              initialData: { position: void 0, balance: void 0 },
              finalData: { position: void 0, balance: void 0 },
            };
          let [n, f] = t,
            o = n.getBundleBalance(e, r),
            l = n.getBundleBalance(e, i.address),
            d = n.tryGetAccrualVault(r),
            s = null == f ? void 0 : f.getBundleBalance(e, r),
            u = null == f ? void 0 : f.getBundleBalance(e, i.address),
            c = null == f ? void 0 : f.tryGetAccrualVault(r);
          return {
            initialData: {
              position: null == d ? void 0 : d.toAssets(null != o ? o : 0n),
              balance: l,
            },
            finalData: {
              position: null == c ? void 0 : c.toAssets(null != s ? s : 0n),
              balance: u,
            },
          };
        }, [t, e, r, null == i ? void 0 : i.address]);
    },
    5469: function (e, t, r) {
      r.d(t, {
        z: function () {
          return E;
        },
        H: function () {
          return O;
        },
      });
      var n = r(58258),
        a = r(45842),
        i = r(30785),
        f = r(12556),
        o = r(26726),
        l = r(89991),
        d = r(55412),
        s = r(3245),
        u = r(95413),
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
      let b = {},
        m = (0, s.Ps)(p(), c.G);
      var g = r(49663),
        v = r(18313),
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
        T = (e) => h.Z.array().items(x(e)),
        Z = async function (e, t) {
          var r;
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!e || !t) return [];
          let a = ''
            .concat(v.clientEnvs.NEXT_PUBLIC_REWARDS_API_URL, '/v1/users/')
            .concat(e, '/distributions?trusted=true&chain_id=')
            .concat(t);
          n && (a += '&noCache='.concat(Date.now().toString()));
          let i = await fetch(a),
            f = await i.json();
          return (0, w.S)(
            null === (r = (0, y.N)(f.data)) || void 0 === r
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
            T(t)
          );
        };
      var k = r(77672),
        A = r.n(k),
        q = r(50566);
      let B = A().object({
          id: A().string().required(),
          type: A().string().valid('ETHERSCAN').required(),
          url: A().string().uri().required(),
          chainId: A().number().required(),
        }),
        M = A().object({
          id: A().number().required(),
          name: A().string().required(),
          icon: A().string().uri().required(),
          Explorer: A().array().items(B).required(),
        }),
        S = A().object({
          address: A().string().required(),
          chainId: A().number().required(),
          symbol: A().string().required(),
          decimals: A().number().required(),
          price: A().number().allow(null),
        }),
        C = A().object({
          reason: A().string().required(),
          amount: A().string().required(),
          claimed: A().string().required(),
          pending: A().string().required(),
          campaignId: A().string().required(),
        }),
        I = A().object({
          root: A().string().required(),
          recipient: A().string().required(),
          amount: A().string().required(),
          claimed: A().string().required(),
          pending: A().string().required(),
          proofs: A().array().items(A().string()).required(),
          token: S.required(),
          breakdowns: A().array().items(C).required(),
        }),
        R = A().object({ chain: M.required(), rewards: A().array().items(I).required() }),
        X = (0, q.S)('https://api.merkl.xyz').v4,
        P = async (e, t) => {
          var r;
          if (!e || !t) return [];
          let n = await X.users({ address: e }).rewards.get({ query: { chainId: [t.toString()] } });
          return (
            await (0, w.S)(
              null == n
                ? void 0
                : null === (r = n.data) || void 0 === r
                  ? void 0
                  : r.filter((e) => {
                      let { error: t } = R.validate(e, { abortEarly: !1 });
                      if (t) {
                        let r = (0, w.b)(t, e);
                        console.error(
                          'Validation failed for rewards merkl. Error code: '.concat(r)
                        );
                      }
                      return !t;
                    }),
              A().array().items(R)
            ),
            null == n ? void 0 : n.data
          );
        };
      var F = r(81066);
      let E =
          'https://app.safe.global/share/safe-app?appUrl=https%3A%2F%2Fcommunity.safe.global&chain=eth',
        D = {
          MORPHO_LEGACY: { label: 'Legacy Rewards Program' },
          MORPHO_CURRENT: {
            label: 'Uniform Rewards Program',
            href: 'https://forum.morpho.org/t/mip65-new-scalable-rewards-model/617',
          },
          MORPHO_SAFE: { label: 'Safe Rewards Campaign' },
          POINTS: { label: 'Points' },
        },
        L = [g.rr.legacyMorphoToken, g.rr.deprecatedMorphoToken],
        O = () => {
          var e, t;
          let { account: r, targetChainId: d } = (0, l.Z_)(),
            s = (0, o.nh)(o.TP.MERKL_REWARD),
            c = (0, i.h)({
              queries: [
                {
                  queryKey: ['rewards-morpho', r.address, d],
                  queryFn: async () => (0, F.AH)(r.address, d, !0),
                },
                {
                  queryKey: ['distributions', r.address, d],
                  queryFn: async () => Z(r.address, d, !0),
                },
                {
                  queryKey: ['rewards-merkl', r.address, d],
                  queryFn: async () => P(r.address, d),
                  enabled: s,
                },
              ],
            }),
            [p, v, h] = c,
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
                        a = e.amount && (e.amount.claimableNext > 0n || e.amount.claimableNow > 0n),
                        i = !1;
                      return (
                        'program' in e &&
                          (i =
                            '0x0000000000000000000000000000000000000001' ===
                            e.program.distributor.address),
                        (t || r || n || a) && !i
                      );
                    })
                : p.data;
            }, [p.data]),
            T = (0, n.useMemo)(() => {
              var e, t, r;
              if (p.isLoading || v.isLoading || h.isLoading) return;
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
                              null === (e = v.data) || void 0 === e
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
                L.forEach((e) => {
                  n.includes(e) && !n.includes(g.rr.morphoToken) && n.push(g.rr.morphoToken);
                }),
                n
              );
            }, [x, v.data, w, p.isLoading, v.isLoading, h.isLoading]),
            {
              data: k,
              error: A,
              loading: q,
            } = (function (e) {
              let t = { ...b, ...e };
              return u.aM(m, t);
            })({
              variables: { assetsAddresses: null != T ? T : [], chainId: d },
              skip: !(null == T ? void 0 : T.length),
            }),
            B = (0, n.useMemo)(
              () =>
                r.address
                  ? p.isLoading || v.isLoading || h.isLoading
                    ? void 0
                    : A || !k
                      ? {
                          distributions: v.data,
                          rewardsMorpho:
                            null == x ? void 0 : x.map((e) => ({ ...e, metadata: null })),
                          rewardsMerkl:
                            null == w ? void 0 : w.map((e) => ({ ...e, metadata: null })),
                        }
                      : {
                          distributions: v.data,
                          rewardsMorpho:
                            null == x
                              ? void 0
                              : x.map((e) => {
                                  var t, r;
                                  let n;
                                  let a =
                                    ((n = null),
                                    L.includes(e.asset.address) &&
                                      (n =
                                        null === (r = k.rewardsTokens.items) || void 0 === r
                                          ? void 0
                                          : r.find((e) => e.address === g.rr.morphoToken)),
                                    {
                                      assetPriced: n,
                                      asset:
                                        null === (t = k.rewardsTokens.items) || void 0 === t
                                          ? void 0
                                          : t.find((t) => t.address === e.asset.address),
                                    });
                                  return { ...e, metadata: { assets: a } };
                                }),
                          rewardsMerkl:
                            null == w
                              ? void 0
                              : w.map((e) => {
                                  var t;
                                  let r =
                                    null === (t = k.rewardsTokens.items) || void 0 === t
                                      ? void 0
                                      : t.find((t) => t.address === e.token.address);
                                  return { ...e, metadata: { asset: r } };
                                }),
                        }
                  : null,
              [r.address, v.data, x, w, A, k, p.isLoading, v.isLoading, h.isLoading]
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
                        token: (0, f.wk)({
                          address: a.DR,
                          decimals: 18,
                          symbol: 'SAFE',
                          name: 'SAFE',
                          chain: { id: 1 },
                          logoURI: 'https://cdn.morpho.org/assets/logos/safe.svg',
                        }),
                        badges: [D.POINTS],
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
                    var r, n, a, i, o, l, d, s, u, c, p, b, m, v, h, y, w, x, T;
                    let Z = ''.concat(e.asset.address),
                      k = (0, f.wk)(
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
                      A =
                        (null !==
                          (b =
                            null === (a = e.forSupply) || void 0 === a
                              ? void 0
                              : a.claimableNext) && void 0 !== b
                          ? b
                          : 0n) +
                        (null !==
                          (m =
                            null === (i = e.forBorrow) || void 0 === i
                              ? void 0
                              : i.claimableNext) && void 0 !== m
                          ? m
                          : 0n) +
                        (null !==
                          (v =
                            null === (o = e.forCollateral) || void 0 === o
                              ? void 0
                              : o.claimableNext) && void 0 !== v
                          ? v
                          : 0n) +
                        (null !==
                          (h =
                            null === (l = e.amount) || void 0 === l ? void 0 : l.claimableNext) &&
                        void 0 !== h
                          ? h
                          : 0n),
                      q = null == k ? void 0 : k.toUsd(A),
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
                          (T = null === (c = e.amount) || void 0 === c ? void 0 : c.claimableNow) &&
                        void 0 !== T
                          ? T
                          : 0n),
                      M = null == k ? void 0 : k.toUsd(B);
                    if (t.has(Z)) {
                      let e = t.get(Z);
                      return (
                        (e.accruing.amount += A),
                        (e.accruing.amountUsd += null != q ? q : 0n),
                        (e.claimable.amount += B),
                        (e.claimable.amountUsd += null != M ? M : 0n),
                        t.set(Z, e)
                      );
                    }
                    if (!k) return;
                    let S = [];
                    e.asset.address === g.rr.legacyMorphoToken &&
                      (e.type === F.Ii.Market || e.type === F.Ii.Vault) &&
                      S.push(D.MORPHO_LEGACY),
                      e.type === F.Ii.Airdrop && S.push(D.MORPHO_SAFE),
                      e.type === F.Ii.Uniform && S.push(D.MORPHO_CURRENT);
                    let C = {
                      type: e.type,
                      claimable: { amount: B, amountUsd: null != M ? M : 0n, token: k },
                      accruing: { amount: A, amountUsd: null != q ? q : 0n, token: k },
                      rewardToken: { token: k, badges: S },
                    };
                    t.set(Z, C);
                  }),
                [...t.values(), ...M]
              );
            }, [B, M]),
            C = (0, n.useMemo)(() => {
              var e;
              if (!B) return [];
              let t = new Map();
              return (
                null == B ||
                  null === (e = B.rewardsMerkl) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    var r, n, a;
                    let i = ''.concat(e.token.address),
                      o = (null === (r = e.metadata) || void 0 === r ? void 0 : r.asset)
                        ? (0, f.wk)(null === (n = e.metadata) || void 0 === n ? void 0 : n.asset)
                        : (0, f.wk)({
                            address: e.token.address,
                            symbol: e.token.symbol,
                            name: null !== (a = e.token.name) && void 0 !== a ? a : e.token.symbol,
                            decimals: e.token.decimals,
                            chain: { id: e.token.chainId },
                            logoURI: null,
                            priceUsd: e.token.price,
                          }),
                      l = BigInt(e.amount) - BigInt(e.claimed),
                      d = null == o ? void 0 : o.toUsd(l);
                    if (!l) return;
                    let s = BigInt(e.pending),
                      u = null == o ? void 0 : o.toUsd(s);
                    if (t.has(i)) {
                      let e = t.get(i);
                      return (
                        (e.accruing.amount += s),
                        (e.accruing.amountUsd += null != u ? u : 0n),
                        (e.claimable.amount += l),
                        (e.claimable.amountUsd += null != d ? d : 0n),
                        t.set(i, e)
                      );
                    }
                    t.set(i, {
                      type: F.Ii.Merkl,
                      claimable: { amount: l, amountUsd: d, token: o },
                      accruing: { amount: s, amountUsd: u, token: o },
                      rewardToken: { token: o },
                    });
                  }),
                [...t.values()]
              );
            }, [B]),
            I = (0, n.useMemo)(() => {
              let e = new Map(),
                t = (t) => {
                  let r = t.rewardToken.token.address;
                  if (e.has(r)) {
                    var n, a, i, f, o, l, d, s;
                    let u = structuredClone(e.get(r));
                    (u.accruing.amount +=
                      null !==
                        (o = null === (n = t.accruing) || void 0 === n ? void 0 : n.amount) &&
                      void 0 !== o
                        ? o
                        : 0n),
                      (u.accruing.amountUsd +=
                        null !==
                          (l = null === (a = t.accruing) || void 0 === a ? void 0 : a.amountUsd) &&
                        void 0 !== l
                          ? l
                          : 0n),
                      (u.claimable.amount +=
                        null !==
                          (d = null === (i = t.claimable) || void 0 === i ? void 0 : i.amount) &&
                        void 0 !== d
                          ? d
                          : 0n),
                      (u.claimable.amountUsd +=
                        null !==
                          (s = null === (f = t.claimable) || void 0 === f ? void 0 : f.amountUsd) &&
                        void 0 !== s
                          ? s
                          : 0n),
                      e.set(r, u);
                  } else e.set(r, { ...t });
                };
              return C.forEach(t), S.forEach(t), [...e.values()];
            }, [S, C]);
          return {
            display: { rewardsMorpho: S, rewardsMerkl: C, rewardsMerged: I },
            txData: {
              distributions:
                null !== (e = null == B ? void 0 : B.distributions) && void 0 !== e ? e : [],
              rewardsMerkl:
                null !== (t = null == B ? void 0 : B.rewardsMerkl) && void 0 !== t ? t : [],
            },
            loading: q || p.isLoading || v.isLoading || h.isLoading,
            error: p.error || v.error || h.error,
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
          return o;
        },
      });
      var n = r(58258),
        a = r(12556),
        i = r(35047),
        f = r(73828);
      let o = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'borrow',
            r = (0, f._x)({
              market: e,
              loanAsset: (0, a.wk)(null == e ? void 0 : e.loanAsset),
              type: t,
            });
          switch (t) {
            case 'borrow':
              return r.map((e) => ({ ...e, apr: (0, i.isDefined)(e.apr) ? -e.apr : null }));
            case 'supply':
              return r;
          }
        },
        l = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'borrow';
          return (0, n.useMemo)(() => o(e, t), [e, t]);
        };
    },
    83897: function (e, t, r) {
      r.d(t, {
        M: function () {
          return f;
        },
      });
      var n = r(58258),
        a = r(89991),
        i = r(73828);
      let f = (e, t, r) => {
        let { targetChainId: f } = (0, a.Z_)();
        return (0, n.useMemo)(() => {
          var n;
          return (0, i.pf)(
            e,
            t,
            r,
            null !== (n = null == r ? void 0 : r.chain.id) && void 0 !== n ? n : f
          );
        }, [t, r, e, f]);
      };
    },
    91283: function (e, t, r) {
      r.d(t, {
        g: function () {
          return l;
        },
      });
      var n = r(58258),
        a = r(47312),
        i = r(4565),
        f = r(12556),
        o = r(89991);
      let l = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { data: r } = (0, a.useWalletClient)(),
          { account: l } = (0, o.Z_)(),
          d = (0, f.ib)(() => {
            if ((null == l ? void 0 : l.address) && (null == t || !t.skip) && r)
              return (0, i.fetchHolding)(l.address, e, r);
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
          return i;
        },
      });
      var n = r(35047),
        a = r(22683);
      let i = (e) => {
        let {
          steps: t,
          error: r,
          blockError: i,
          simulationError: f,
          isFetching: o,
          isFetchingAny: l,
          isPending: d,
        } = (0, a.N)();
        return {
          data: null != t ? (null != e ? t[e] : (0, n.getLastDefined)(t)) : void 0,
          error: r,
          blockError: i,
          simulationError: f,
          isFetching: o,
          isFetchingAny: l,
          isPending: d,
        };
      };
    },
  },
]);
