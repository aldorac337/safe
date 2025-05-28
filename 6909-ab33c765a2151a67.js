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
    (e._sentryDebugIds[t] = 'c5f35c05-24ce-487c-b972-2289de471762'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-c5f35c05-24ce-487c-b972-2289de471762'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6909, 242, 9286],
  {
    29286: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var o = a(78286),
        i = a(47567),
        r = a(34097);
      function n() {
        return (0, o.tZ)(i.Z, {
          type: r.RX.Borrow,
          title: 'How Borrowing Works',
          steps: [
            {
              title: 'Provide Collateral',
              description:
                "Deposit the asset you want to borrow against. Keep in mind that you can only borrow from the market where you've supplied collateral. If you intend to borrow from multiple markets, you'll need to supply collateral to each market.",
            },
            {
              title: 'Borrow Liquidity',
              description:
                "Borrow liquidity up to an amount based on the value of provided collateral and available liquidity. Borrowers are charged a variable interest rate on the borrowed amount, determined by the market's interest rate model.",
            },
            {
              title: 'Monitor Position',
              description:
                'Monitor the LTV of your positions to avoid being eligible for liquidation. If the loan-to-value-ratio of a position exceeds the liquidation loan-to-value-ratio of a given market, external liquidators can seize your collateral to repay your outstanding debt.',
            },
            {
              title: 'Repay Debt',
              description:
                'Repay your outstanding loans by returning the initial borrowed amount plus the accrued interest.',
            },
          ],
          terms:
            'Morpho is committed to industry-leading security practices, but there are still risks associated with <a href="https://docs.morpho.org/morpho/concepts/risk-documentation" target="_blank">Morpho</a> including liquidation risk.',
        });
      }
    },
    99598: function (e, t, a) {
      a.d(t, {
        M: function () {
          return o.default;
        },
      });
      var o = a(29286);
    },
    90242: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var o = a(78286),
        i = a(47567),
        r = a(34097);
      function n() {
        return (0, o.tZ)(i.Z, {
          type: r.RX.Earn,
          title: 'How Earn Works',
          steps: [
            {
              title: 'Deposit in a Morpho Vault',
              description:
                'Earn yield by depositing an asset into a vault curated by third-party risk curators. Each vault has a unique risk profile and strategy determined by the curator. Creating a vault is permissionless, so users should assess a vault’s curator and risk exposure before depositing.',
            },
            {
              title: 'Assets are supplied to Morpho Markets',
              description:
                'A Morpho Vault can only allocate deposits to Morpho Markets whitelisted by the curator. Depositors in the vault are exposed to risks related to each market, including the collateral asset, liquidation LTV, and oracles.',
            },
            {
              title: 'Earn yield from borrowers',
              description:
                'Vaults generate a yield from over-collateralized lending. Borrowers deposit collateral and borrow assets supplied to Morpho Markets, paying interest to the vault.',
            },
          ],
          terms:
            'Morpho is committed to industry-leading security practices,  but there are still risks associated with <a href="https://docs.morpho.org/morpho/concepts/risk-documentation" target="_blank">Morpho</a>&nbsp;and&nbsp;<a href="https://docs.morpho.org/morpho-vaults/concepts/risk-documentation" target="_blank">Morpho&nbsp;Vaults</a>.',
        });
      }
    },
    62239: function (e, t, a) {
      a.d(t, {
        Uj: function () {
          return o.default;
        },
        Do: function () {
          return d;
        },
        dm: function () {
          return y;
        },
      }),
        a(99598);
      var o = a(90242),
        i = a(78286),
        r = a(58258),
        n = a(54655),
        l = a(35047);
      let s = { small: '257px', medium: '312px' };
      var d = (0, r.memo)((e) => {
          let {
              loading: t,
              title: a,
              headerActionSlot: o,
              inputSlots: r,
              topSlot: d,
              initialPositionSlot: u,
              finalPositionSlot: p,
              actionSlot: c,
              error: v,
              children: f,
              size: h = 'medium',
              onClose: y,
            } = e,
            b = (0, n.CPt)(),
            m = Array.isArray(r) ? r : [r];
          return (0, i.BX)(n.Kqy, {
            direction: 'column',
            gap: 20,
            'data-testid': 'operation-summary-dialog',
            children: [
              (0, i.BX)(n.Kqy, {
                gap: 'm',
                direction: 'column',
                children: [
                  (0, i.BX)(n.Kqy, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 16,
                    children: [
                      t
                        ? (0, i.tZ)(n.OdW, { width: '280px', height: '45px', borderRadius: '20px' })
                        : (0, i.tZ)(n.ZT$, {
                            TextVariant: b ? n.xvT.Title.XS : n.xvT.Title.S,
                            children: a,
                          }),
                      (0, i.BX)(n.Kqy, {
                        direction: 'row',
                        align: 'center',
                        gap: 's',
                        children: [
                          !(0, l.isDefined)(v) && !t && !b && o,
                          (0, i.tZ)(n.zxk, {
                            iconAlone: 'ClosePlain20',
                            onClick: y,
                            variant: 'secondary',
                          }),
                        ],
                      }),
                    ],
                  }),
                  b && !(0, l.isDefined)(v) && !t && o,
                  (0, l.isDefined)(v) && c,
                ],
              }),
              (0, l.isDefined)(v)
                ? (0, i.tZ)(n.SKT, { height: '500px', text: v })
                : (0, i.BX)(n.Kqy, {
                    direction: 'column',
                    gap: 'm',
                    children: [
                      d,
                      (0, i.tZ)(n.Kqy, {
                        fullWidth: !0,
                        gap: 'm',
                        direction: b ? 'column' : 'row',
                        children: t
                          ? m.map((e, t) =>
                              (0, i.tZ)(
                                n.OdW,
                                { width: '100%', height: '115px', borderRadius: '20px' },
                                'input-skeleton-'.concat(t)
                              )
                            )
                          : m,
                      }),
                      (0, i.BX)(n.Kqy, {
                        direction: b ? 'column' : 'row',
                        align: 'center',
                        justify: 'space-between',
                        gap: 'xs',
                        width: '100%',
                        children: [
                          t &&
                            (0, i.tZ)(n.OdW, { width: '100%', height: s[h], borderRadius: '20px' }),
                          !t && u,
                          t
                            ? (0, i.tZ)(n.Kqy, {
                                width: '32px',
                                height: '32px',
                                borderRadius: '100px',
                                children: (0, i.tZ)(n.OdW, {
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: '100px',
                                }),
                              })
                            : (0, i.tZ)(n.zxk, {
                                variant: 'secondary',
                                size: 'default',
                                iconAlone: 'ArrowRightPlain20',
                                style: {
                                  pointerEvents: 'none',
                                  transform: b ? 'rotate(90deg)' : 'none',
                                },
                              }),
                          t &&
                            (0, i.tZ)(n.OdW, { width: '100%', height: s[h], borderRadius: '20px' }),
                          !t && p,
                        ],
                      }),
                      t &&
                        (0, i.tZ)(n.Kqy, {
                          direction: 'column',
                          gap: 8,
                          align: 'stretch',
                          justify: 'start',
                          style: { paddingBottom: 12 },
                          children: (0, i.tZ)(n.OdW, {
                            width: '100%',
                            height: '48px',
                            borderRadius: '50px',
                          }),
                        }),
                      !t && c,
                    ],
                  }),
              f,
            ],
          });
        }),
        u = a(12556),
        p = a(49149),
        c = a(62788),
        v = a(38819),
        f = a(50825);
      let h = (0, v.Z)(f.Z, { target: 'e1o8iek70' })((e) => {
        let { theme: t } = e;
        return t.breakpoints.down('s');
      }, '{width:100%;}');
      var y = (0, r.memo)((e) => {
        let {} = e,
          { toggleDialog: t } = (0, n.DAv)(),
          { closeServiceUnavailableDialog: a } = (0, c.J1)(),
          o = (0, r.useCallback)(() => {
            t(!1), a();
          }, [t, a]);
        return (0, i.BX)(n.Kqy, {
          padding: { base: 72, s: 18 },
          gap: 32,
          direction: 'column',
          align: 'center',
          children: [
            (0, i.tZ)(n.zxk, {
              size: 'medium',
              iconAlone: 'ClosePlain20',
              onClick: o,
              variant: 'secondary',
              style: { position: 'absolute', top: 20, right: 20 },
            }),
            (0, i.tZ)(n.JO$, { icon: 'AlertPlain20', size: 40, padding: 0, color: 'icon.primary' }),
            (0, i.BX)(n.Kqy, {
              direction: 'column',
              align: 'center',
              gap: 's',
              children: [
                (0, i.tZ)(n.xvT.Title.XS, {
                  textAlign: 'center',
                  children: 'Service temporarily unavailable.',
                }),
                (0, i.tZ)(n.xvT.Body.XS.Regular, {
                  color: 'text.secondary',
                  textAlign: 'center',
                  children:
                    "We're experiencing an outage and are working to restore service as soon as possible. The data shown on the app may not be reliable. In the meantime you can manage your positions through our Fallback App.",
                }),
              ],
            }),
            (0, i.BX)(n.Kqy, {
              align: 'center',
              gap: 's',
              wrap: 'wrap',
              justify: 'center',
              children: [
                (0, i.tZ)(h, {
                  mode: 'external',
                  href: u.hU,
                  buttonProps: {
                    size: 'default',
                    variant: 'primary',
                    label: 'Use Fallback App',
                    style: { width: '100%' },
                  },
                }),
                (0, i.tZ)(h, {
                  mode: 'external',
                  href: p.QP.NEXT_PUBLIC_STATUS_URL,
                  buttonProps: {
                    size: 'default',
                    variant: 'secondary',
                    label: 'Check App Status',
                    style: { width: '100%' },
                  },
                }),
              ],
            }),
          ],
        });
      });
    },
    88506: function (e, t, a) {
      a.d(t, {
        $: function () {
          return s;
        },
      });
      var o = a(40252),
        i = a(12556),
        r = a(725),
        n = a(89991),
        l = a(22683);
      let s = (e, t, a) => {
        let { account: s } = (0, n.Z_)(),
          { bundlerConfiguration: d } = (0, l.N)(),
          u = {
            ...d.publicAllocatorOptions,
            supplyTargetUtilization: {},
            maxWithdrawalUtilization: {},
            defaultMaxWithdrawalUtilization: o.MathLib.WAD,
          },
          p =
            s.address &&
            (null == t
              ? void 0
              : t.getMarketPublicReallocations(e, u).data.tryGetAccrualPosition(s.address, e)),
          c = (0, r.B9)({ lltv: null == p ? void 0 : p.market.params.lltv, marketId: e });
        if (!s.address || !c) return;
        let v =
          null == p
            ? void 0
            : p.market.getBorrowCapacityLimit(
                { collateral: p.collateral + a, borrowShares: p.borrowShares },
                { maxLtv: o.MathLib.wMulDown(c, i.JC) }
              );
        if (void 0 !== v) return { shares: 0n, assets: v.value };
      };
    },
    23033: function (e, t, a) {
      a.d(t, {
        R: function () {
          return n;
        },
      });
      var o = a(58258),
        i = a(22683),
        r = a(4205);
      let n = (e, t) => {
        let { operations: a } = (0, i.N)(),
          {
            operation: n,
            index: l,
            isNew: s,
          } = (0, o.useMemo)(() => {
            let o = a.findIndex((a) => a.type === t && a.marketId === e);
            return o >= 0
              ? { index: o, operation: a[o], isNew: !1 }
              : {
                  isNew: !0,
                  index: a.length,
                  operation: {
                    id: crypto.randomUUID(),
                    type: t,
                    marketId: e,
                    loanAssets: 0n,
                    loanShares: 0n,
                    collateralAssets: 0n,
                    options: { isMax: [] },
                  },
                };
          }, [e, a, t]);
        return {
          operation: n,
          initialState: (0, r.f)(l),
          finalState: (0, r.f)(l + 1),
          isNew: s,
          index: l,
        };
      };
    },
    77458: function (e, t, a) {
      var o = a(12556);
      t.Z = (e, t, a, i) => (0, o.nR)({ dependencies: [e], requiredData: [t, a], isFetching: i });
    },
    84030: function (e, t, a) {
      var o = a(58258),
        i = a(54655);
      t.Z = (e, t, a) =>
        (0, o.useMemo)(() => {
          var o, r;
          if ((0, i.Czs)(t) || !a)
            return {
              initialData: {
                collateral: void 0,
                loan: void 0,
                ltv: void 0,
                market: void 0,
                position: void 0,
              },
              finalData: {
                collateral: void 0,
                loan: void 0,
                ltv: void 0,
                market: void 0,
                position: void 0,
              },
            };
          let [n, l] = a,
            s = n.tryGetMarket(e),
            d = null == l ? void 0 : l.tryGetMarket(e),
            u = n.tryGetAccrualPosition(t, e),
            p = null == l ? void 0 : l.tryGetAccrualPosition(t, e);
          return {
            initialData: {
              collateral: null !== (o = null == u ? void 0 : u.collateral) && void 0 !== o ? o : 0n,
              loan:
                null == s
                  ? void 0
                  : s.toBorrowAssets(
                      null !== (r = null == u ? void 0 : u.borrowShares) && void 0 !== r ? r : 0n
                    ),
              ltv: null == u ? void 0 : u.ltv,
              market: s,
              position: u,
            },
            finalData: {
              collateral: null == p ? void 0 : p.collateral,
              loan: (null == p ? void 0 : p.borrowShares)
                ? null == d
                  ? void 0
                  : d.toBorrowAssets(null == p ? void 0 : p.borrowShares)
                : void 0,
              ltv: null == p ? void 0 : p.ltv,
              market: d,
              position: p,
            },
          };
        }, [a, t, e]);
    },
    91622: function (e, t, a) {
      a.d(t, {
        O: function () {
          return b;
        },
      });
      var o = a(58258),
        i = a(56489),
        r = a(40252),
        n = a(12556),
        l = a(35047),
        s = a(22683),
        d = a(82803),
        u = a(89991),
        p = a(60410);
      let c = (e, t, a) => {
        let { account: i } = (0, u.Z_)();
        return (0, o.useMemo)(() => {
          var o;
          if (!(null == i ? void 0 : i.address) || !t) return;
          let n = t.tryGetAccrualPosition(i.address, e),
            l = null == n ? void 0 : n.market;
          if (!l) return;
          let s = t.getBundleMaxBalance(
            i.address,
            l.params.loanToken,
            r.DEFAULT_SLIPPAGE_TOLERANCE,
            a
          );
          if (void 0 === s) return;
          let d =
            null == l
              ? void 0
              : l.getRepayCapacityLimit(
                  null !== (o = null == n ? void 0 : n.borrowShares) && void 0 !== o ? o : 0n,
                  s
                );
          return d.limiter === r.CapacityLimitReason.position
            ? { assets: d.value, shares: n.borrowShares }
            : { assets: d.value, shares: 0n };
        }, [i.address, t, e, a]);
      };
      var v = a(725);
      let f = (e, t, a, o) => {
        let { account: i } = (0, u.Z_)(),
          l = t && i.address && t.tryGetAccrualPosition(i.address, e),
          s = null == l ? void 0 : l.market,
          d = (0, v.B9)({ lltv: null == s ? void 0 : s.params.lltv, marketId: e });
        if (!(null == i ? void 0 : i.address) || !t || !d || !s) return;
        let p = o || s.toBorrowShares(a),
          c = s.getWithdrawCollateralCapacityLimit(
            { borrowShares: l.borrowShares - p, collateral: l.collateral },
            { maxLtv: r.MathLib.wMulDown(d, n.JC) }
          );
        return { assets: null == c ? void 0 : c.value, shares: 0n };
      };
      var h = a(23033),
        y = a(77458);
      let b = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { account: a } = (0, u.Z_)(),
          {
            operation: v,
            initialState: b,
            isNew: m,
          } = (0, h.R)(e, d.H.InterfaceOperationType.withdrawCollateralRepay),
          [g, k] = (0, o.useState)(v.collateralAssets),
          [w, A] = (0, o.useState)(v.loanAssets),
          [M, T] = (0, o.useState)(v.loanShares),
          [x, C] = (0, o.useState)(
            v.options.isMax.includes(d.H.InterfaceOperationType.withdrawCollateral)
          ),
          [S, I] = (0, o.useState)(v.options.isMax.includes(d.H.InterfaceOperationType.repay)),
          [O, , , P, D] = (0, n.$X)(v.options.disabledPeripheralTokens),
          E = (0, o.useMemo)(() => {
            var t;
            let a = null === (t = b.data) || void 0 === t ? void 0 : t.tryGetMarket(e);
            return a && M ? a.toBorrowAssets(M) : w;
          }, [w, b.data, e, M]),
          Z = c(e, null == b ? void 0 : b.data, O),
          B = f(e, null == b ? void 0 : b.data, E, M),
          H = (0, y.Z)(
            a.isConnected,
            null == B ? void 0 : B.assets,
            null == Z ? void 0 : Z.assets,
            b.isFetchingAny || b.isPending
          ),
          _ = (0, o.useMemo)(
            () => ({
              type: d.H.InterfaceOperationType.withdrawCollateralRepay,
              marketId: e,
              collateralAssets: g,
              loanShares: M,
              loanAssets: w,
              id: v.id,
              options: {
                origin: t.origin,
                isMax: [
                  ...(x ? [d.H.InterfaceOperationType.withdrawCollateral] : []),
                  ...(S ? [d.H.InterfaceOperationType.repay] : []),
                ],
                disabledPeripheralTokens: O,
              },
            }),
            [g, v.id, x, S, M, w, O, e, t.origin]
          ),
          { updateOperation: L } = (0, s.N)(),
          R = (0, o.useMemo)(() => {
            var t, o;
            if (!a.address) return;
            let i =
                null == b
                  ? void 0
                  : null === (t = b.data) || void 0 === t
                    ? void 0
                    : t.tryGetMarket(e),
              n =
                i &&
                (null == b
                  ? void 0
                  : null === (o = b.data) || void 0 === o
                    ? void 0
                    : o.getBundleAssetBalances(
                        a.address,
                        i.params.loanToken,
                        r.DEFAULT_SLIPPAGE_TOLERANCE,
                        !0
                      ));
            if (n)
              return (0, l.values)(n.allocations)
                .filter(l.isDefined)
                .filter((e) => 'base' !== e.type && e.dstAmount > 0n)
                .map((e) => ({
                  id: e.type,
                  label: (0, p.e)(e),
                  value: !O.has(e.type),
                  srcToken: e.srcToken,
                }));
          }, [a.address, O, null == b ? void 0 : b.data, e]),
          q = 'position-manager' === t.origin,
          [z, U] = (0, o.useState)(m || q),
          [G, N] = (0, o.useState)(m || q),
          [X, W] = (0, o.useState)(m),
          [K, F] = (0, o.useState)(m),
          V = (0, o.useMemo)(() => {
            var e;
            let t = S !== v.options.isMax.includes(d.H.InterfaceOperationType.repay),
              a = !(0, i.Z)(
                Array.from(O),
                Array.from(
                  null !== (e = v.options.disabledPeripheralTokens) && void 0 !== e ? e : new Set()
                )
              ),
              o = w !== v.loanAssets;
            return t || a || o;
          }, [O, S, w, v.loanAssets, v.options.disabledPeripheralTokens, v.options.isMax]),
          $ = (0, o.useMemo)(() => {
            let e = x !== v.options.isMax.includes(d.H.InterfaceOperationType.withdrawCollateral),
              t = g !== v.collateralAssets;
            return e || t;
          }, [g, x, v.collateralAssets, v.options.isMax]),
          j = (0, o.useCallback)((e) => {
            C(!1), k(e);
          }, []),
          J = (0, o.useCallback)((e) => {
            I(!1), A(e), T(0n);
          }, []),
          Q = (0, o.useCallback)(() => {
            L(_.id, () => _), U(!1), N(!1);
          }, [_, L]),
          Y = (0, o.useCallback)(() => {
            L(_.id, () => _), N(!1);
          }, [_, L]),
          ee = (0, o.useCallback)(() => {
            L(_.id, () => _), U(!1);
          }, [_, L]),
          et = (0, o.useCallback)(() => {
            if (0n === v.loanAssets || 0n === v.collateralAssets) {
              L(_.id);
              return;
            }
            L(_.id, () => ({
              ...v,
              collateralAssets: 0n,
              options: { ...v.options, isMax: [...(S ? [d.H.InterfaceOperationType.repay] : [])] },
            }));
          }, [_, L, v, S]),
          ea = (0, o.useCallback)(() => {
            if (0n === v.loanAssets || 0n === v.collateralAssets) {
              L(_.id);
              return;
            }
            L(_.id, () => ({
              ...v,
              loanAssets: 0n,
              options: {
                ...v.options,
                isMax: [...(x ? [d.H.InterfaceOperationType.withdrawCollateral] : [])],
              },
            }));
          }, [_, L, v, x]),
          eo = (0, o.useCallback)(
            (e) => {
              if (e) {
                if ((null == B ? void 0 : B.assets) == null) return;
                k(B.assets);
              }
              C(e);
            },
            [null == B ? void 0 : B.assets]
          ),
          ei = (0, o.useCallback)(
            (e) => {
              if (e) {
                if ((null == Z ? void 0 : Z.assets) == null) return;
                A(Z.assets), T(Z.shares);
              }
              I(e);
            },
            [null == Z ? void 0 : Z.assets, null == Z ? void 0 : Z.shares]
          );
        return (
          (0, o.useEffect)(() => {
            'bundler' === t.origin && Q();
          }, [Q, t.origin]),
          (0, o.useEffect)(() => {
            z ||
              ('bundler' !== v.options.origin && W(v.collateralAssets > 0n), k(v.collateralAssets));
          }, [z, v.collateralAssets, v.options.origin]),
          (0, o.useEffect)(() => {
            G ||
              ('bundler' !== v.options.origin && F(v.loanAssets > 0n),
              A(v.loanAssets),
              T(v.loanShares));
          }, [G, v.loanAssets, v.loanShares, v.options.origin]),
          (0, o.useEffect)(() => {
            eo(x);
          }, [x, eo]),
          (0, o.useEffect)(() => {
            ei(S);
          }, [S, ei]),
          (0, o.useEffect)(() => {
            z || G || D(v.options.disabledPeripheralTokens);
          }, [z, G, v.options.disabledPeripheralTokens, D]),
          (0, o.useEffect)(() => {
            if (G || z) return;
            let e = v.options.isMax.includes(d.H.InterfaceOperationType.withdrawCollateral),
              t = v.options.isMax.includes(d.H.InterfaceOperationType.repay);
            C(e), I(t);
          }, [G, z, v.options.isMax]),
          (0, o.useMemo)(
            () => ({
              isNew: m,
              inputCollateralAmount: g,
              setInputCollateralAmount: j,
              inputLoanAmount: E,
              setInputLoanAmount: J,
              hasModifiedRepayOperation: V,
              hasModifiedWithdrawOperation: $,
              isMaxCollateral: x,
              setIsMaxCollateral: eo,
              isMaxLoan: S,
              setIsMaxLoan: ei,
              localOperation: _,
              maxCollateral: B,
              maxLoan: Z,
              isLoading: H,
              initialState: b,
              confirm: Q,
              confirmCollateral: ee,
              confirmLoan: Y,
              setIsEditingCollateral: U,
              setIsEditingLoan: N,
              peripheralTokenOptions: R,
              onPeripheralTokenOptionChange: P,
              isEditingCollateral: z,
              isEditingLoan: G,
              resetCollateral: et,
              resetLoan: ea,
              showCollateralInput: X,
              showLoanInput: K,
              setShowCollateralInput: W,
              setShowLoanInput: F,
            }),
            [
              m,
              g,
              j,
              E,
              J,
              V,
              $,
              x,
              eo,
              S,
              ei,
              _,
              B,
              Z,
              H,
              b,
              Q,
              ee,
              Y,
              R,
              P,
              z,
              G,
              et,
              ea,
              X,
              K,
              W,
              F,
            ]
          )
        );
      };
    },
    18721: function (e, t, a) {
      a.d(t, {
        f: function () {
          return y;
        },
      });
      var o = a(58258),
        i = a(56489),
        r = a(40252),
        n = a(12556),
        l = a(35047),
        s = a(22683),
        d = a(82803),
        u = a(89991),
        p = a(60410),
        c = a(88506);
      let v = (e, t, a) => {
        let { account: i } = (0, u.Z_)();
        return (0, o.useMemo)(() => {
          if (!(null == i ? void 0 : i.address) || !t) return;
          let o = t.tryGetMarket(e);
          if (!o) return;
          let n = t.getBundleMaxBalance(
            i.address,
            o.params.collateralToken,
            r.DEFAULT_SLIPPAGE_TOLERANCE,
            a
          );
          if (void 0 !== n) return { assets: n, shares: 0n };
        }, [i.address, t, e, a]);
      };
      var f = a(23033),
        h = a(77458);
      let y = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { account: a } = (0, u.Z_)(),
          {
            operation: y,
            initialState: b,
            isNew: m,
          } = (0, f.R)(e, d.H.InterfaceOperationType.supplyCollateralBorrow),
          [g, k] = (0, o.useState)(y.collateralAssets),
          [w, A] = (0, o.useState)(m),
          [M, T] = (0, o.useState)(m),
          [x, C] = (0, o.useState)(y.loanAssets),
          [S, I] = (0, o.useState)(
            y.options.isMax.includes(d.H.InterfaceOperationType.supplyCollateral)
          ),
          [O, P] = (0, o.useState)(y.options.isMax.includes(d.H.InterfaceOperationType.borrow)),
          [D, , , E, Z] = (0, n.$X)(y.options.disabledPeripheralTokens),
          B = v(e, null == b ? void 0 : b.data, D),
          H = (0, c.$)(e, null == b ? void 0 : b.data, g),
          _ = (0, h.Z)(
            a.isConnected,
            null == B ? void 0 : B.assets,
            null == H ? void 0 : H.assets,
            b.isFetchingAny || b.isPending
          ),
          L = (0, o.useMemo)(() => {
            var e;
            let t = S !== y.options.isMax.includes(d.H.InterfaceOperationType.supplyCollateral),
              a = !(0, i.Z)(
                Array.from(D),
                Array.from(
                  null !== (e = y.options.disabledPeripheralTokens) && void 0 !== e ? e : new Set()
                )
              ),
              o = g !== y.collateralAssets;
            return t || a || o;
          }, [g, D, S, y.collateralAssets, y.options.disabledPeripheralTokens, y.options.isMax]),
          R = (0, o.useMemo)(() => {
            let e = O !== y.options.isMax.includes(d.H.InterfaceOperationType.borrow),
              t = x !== y.loanAssets;
            return e || t;
          }, [x, O, y.loanAssets, y.options.isMax]),
          q = (0, o.useMemo)(
            () => ({
              type: d.H.InterfaceOperationType.supplyCollateralBorrow,
              marketId: e,
              collateralAssets: g,
              loanShares: 0n,
              loanAssets: x,
              id: y.id,
              options: {
                origin: t.origin,
                isMax: [
                  ...(S ? [d.H.InterfaceOperationType.supplyCollateral] : []),
                  ...(O ? [d.H.InterfaceOperationType.borrow] : []),
                ],
                disabledPeripheralTokens: D,
              },
            }),
            [e, g, x, y.id, t.origin, S, O, D]
          ),
          { updateOperation: z } = (0, s.N)(),
          U = (0, o.useMemo)(() => {
            var t, o;
            if (!a.address) return;
            let i =
                null == b
                  ? void 0
                  : null === (t = b.data) || void 0 === t
                    ? void 0
                    : t.tryGetMarket(e),
              n =
                i &&
                (null == b
                  ? void 0
                  : null === (o = b.data) || void 0 === o
                    ? void 0
                    : o.getBundleAssetBalances(
                        a.address,
                        i.params.collateralToken,
                        r.DEFAULT_SLIPPAGE_TOLERANCE,
                        !0
                      ));
            if (n)
              return (0, l.values)(n.allocations)
                .filter(l.isDefined)
                .filter((e) => 'base' !== e.type && e.dstAmount > 0n)
                .map((e) => ({
                  id: e.type,
                  label: (0, p.e)(e),
                  value: !D.has(e.type),
                  srcToken: e.srcToken,
                }));
          }, [a.address, D, null == b ? void 0 : b.data, e]),
          G = 'position-manager' === t.origin,
          [N, X] = (0, o.useState)(m || G),
          [W, K] = (0, o.useState)(m || G),
          F = (0, o.useCallback)((e) => {
            I(!1), k(e);
          }, []),
          V = (0, o.useCallback)((e) => {
            P(!1), C(e);
          }, []),
          $ = (0, o.useCallback)(() => {
            z(q.id, () => q), X(!1), K(!1);
          }, [q, z]),
          j = (0, o.useCallback)(() => {
            z(q.id, () => q), X(!1);
          }, [q, z]),
          J = (0, o.useCallback)(() => {
            z(q.id, () => q), K(!1);
          }, [q, z]),
          Q = (0, o.useCallback)(() => {
            if (0n === y.loanAssets || 0n === y.collateralAssets) {
              z(q.id);
              return;
            }
            z(q.id, () => ({
              ...y,
              collateralAssets: 0n,
              options: { ...y.options, isMax: [...(O ? [d.H.InterfaceOperationType.borrow] : [])] },
            }));
          }, [q, z, y, O]),
          Y = (0, o.useCallback)(() => {
            if (0n === y.collateralAssets || 0n === y.loanAssets) {
              z(q.id);
              return;
            }
            z(q.id, () => ({
              ...y,
              loanAssets: 0n,
              options: {
                ...y.options,
                isMax: [...(S ? [d.H.InterfaceOperationType.supplyCollateral] : [])],
              },
            }));
          }, [q, z, y, S]),
          ee = (0, o.useCallback)(
            (e) => {
              if (e) {
                if ((null == B ? void 0 : B.assets) == null) return;
                k(B.assets);
              }
              I(e);
            },
            [null == B ? void 0 : B.assets]
          ),
          et = (0, o.useCallback)(
            (e) => {
              if (e) {
                if ((null == H ? void 0 : H.assets) == null) return;
                C(H.assets);
              }
              P(e);
            },
            [null == H ? void 0 : H.assets]
          );
        return (
          (0, o.useEffect)(() => {
            'bundler' === t.origin && $();
          }, [$, t.origin]),
          (0, o.useEffect)(() => {
            N ||
              ('bundler' !== y.options.origin && A(y.collateralAssets > 0n), k(y.collateralAssets));
          }, [N, y.collateralAssets, y.options.origin]),
          (0, o.useEffect)(() => {
            W || ('bundler' !== y.options.origin && T(y.loanAssets > 0n), C(y.loanAssets));
          }, [W, y.loanAssets, y.loanShares, y.options.origin]),
          (0, o.useEffect)(() => {
            ee(S);
          }, [S, ee]),
          (0, o.useEffect)(() => {
            et(O);
          }, [O, et]),
          (0, o.useEffect)(() => {
            W || N || Z(y.options.disabledPeripheralTokens);
          }, [W, N, y.options.disabledPeripheralTokens, Z]),
          (0, o.useEffect)(() => {
            if (W || N) return;
            let e = y.options.isMax.includes(d.H.InterfaceOperationType.supplyCollateral),
              t = y.options.isMax.includes(d.H.InterfaceOperationType.borrow);
            I(e), P(t);
          }, [W, N, y.options.isMax]),
          (0, o.useMemo)(
            () => ({
              isNew: m,
              inputCollateralAmount: g,
              setInputCollateralAmount: F,
              inputLoanAmount: x,
              setInputLoanAmount: V,
              isMaxCollateral: S,
              setIsMaxCollateral: ee,
              isMaxLoan: O,
              setIsMaxLoan: et,
              localOperation: q,
              maxCollateral: B,
              maxLoan: H,
              isLoading: _,
              initialState: b,
              confirm: $,
              confirmCollateral: j,
              confirmLoan: J,
              resetCollateral: Q,
              resetLoan: Y,
              peripheralTokenOptions: U,
              onPeripheralTokenOptionChange: E,
              isEditingCollateral: N,
              setIsEditingCollateral: X,
              isEditingLoan: W,
              setIsEditingLoan: K,
              hasModifiedSupplyOperation: L,
              hasModifiedBorrowMoreOperation: R,
              showCollateralInput: w,
              showLoanInput: M,
              setShowCollateralInput: A,
              setShowLoanInput: T,
            }),
            [
              m,
              g,
              F,
              x,
              V,
              S,
              ee,
              O,
              et,
              q,
              B,
              H,
              _,
              b,
              $,
              j,
              J,
              U,
              E,
              N,
              X,
              W,
              K,
              Q,
              Y,
              L,
              R,
              w,
              M,
              A,
              T,
            ]
          )
        );
      };
    },
    91794: function (e, t, a) {
      a.d(t, {
        p: function () {
          return m;
        },
      });
      var o = a(58258),
        i = a(41592),
        r = a(45842),
        n = a(40252),
        l = a(12556),
        s = a(35047),
        d = a(22683),
        u = a(34896),
        p = a(82803),
        c = a(96278),
        v = a(89991),
        f = a(88506),
        h = a(4205);
      let y = (e) => {
          let { marketFrom: t, marketTo: a, operationId: i } = e,
            { targetChainId: r } = (0, v.Z_)(),
            { operations: n } = (0, d.N)(),
            {
              operation: l,
              index: u,
              isNew: c,
              error: f,
            } = (0, o.useMemo)(() => {
              let e = n.findIndex((e) => e.type === p.H.InterfaceOperationType.zap && e.id === i);
              if (!(0, s.isDefined)(a))
                return {
                  error: 'Market destination is not defined',
                  index: -1,
                  isNew: !1,
                  operation: void 0,
                };
              if (e >= 0) return { index: e, operation: n[e], isNew: !1 };
              let o = {
                id: crypto.randomUUID(),
                type: p.H.InterfaceOperationType.zap,
                marketId: t,
                marketTo: a,
                collateralAssets: 0n,
                borrowAssets: 0n,
                borrowShares: 0n,
                chainId: r,
                options: { isMax: [], disabledPeripheralTokens: new Set() },
              };
              return { isNew: !0, index: n.length, operation: o, isLoading: !1 };
            }, [t, a, n, r, i]);
          return {
            operation: l,
            initialState: (0, h.f)(u),
            finalState: (0, h.f)(u + 1),
            isNew: c,
            index: u,
            error: f,
          };
        },
        b = (0, i.v)('0.0001', 18),
        m = (e) => {
          var t, a, i, h, m, g, k, w, A, M, T;
          let { marketFrom: x, marketTo: C, initialOperation: S, options: I } = e,
            { account: O, targetChainId: P } = (0, v.Z_)(),
            { updateOperation: D } = (0, d.N)(),
            { publicAllocatorOptions: E } = (0, c.B)(),
            {
              operation: Z,
              initialState: B,
              finalState: H,
              isNew: _,
              index: L,
            } = y({ marketFrom: x, marketTo: C, operationId: null == S ? void 0 : S.id }),
            [R, q] = (0, o.useState)(
              null !==
                (a =
                  null !== (t = null == S ? void 0 : S.collateralAssets) && void 0 !== t
                    ? t
                    : null == Z
                      ? void 0
                      : Z.collateralAssets) && void 0 !== a
                ? a
                : 0n
            ),
            [z, U] = (0, o.useState)(
              null !==
                (h =
                  null !== (i = null == S ? void 0 : S.borrowAssets) && void 0 !== i
                    ? i
                    : null == Z
                      ? void 0
                      : Z.borrowAssets) && void 0 !== h
                ? h
                : 0n
            ),
            [G, N] = (0, o.useState)(
              null !==
                (g =
                  null !== (m = null == S ? void 0 : S.borrowShares) && void 0 !== m
                    ? m
                    : null == Z
                      ? void 0
                      : Z.borrowShares) && void 0 !== g
                ? g
                : 0n
            ),
            [X, W] = (0, o.useState)(
              null !==
                (w =
                  null !==
                    (k =
                      null == S
                        ? void 0
                        : S.options.isMax.includes(p.H.InterfaceOperationType.zap)) && void 0 !== k
                    ? k
                    : null == Z
                      ? void 0
                      : Z.options.isMax.includes(p.H.InterfaceOperationType.zap)) &&
                void 0 !== w &&
                w
            ),
            [K, F] = (0, o.useState)(
              null !==
                (M =
                  null !==
                    (A =
                      null == S
                        ? void 0
                        : S.options.isMax.includes(p.H.InterfaceOperationType.zap)) && void 0 !== A
                    ? A
                    : null == Z
                      ? void 0
                      : Z.options.isMax.includes(p.H.InterfaceOperationType.zap)) &&
                void 0 !== M &&
                M
            ),
            { initialMarketToData: V, initialFromPosition: $ } = (0, o.useMemo)(() => {
              var e, t;
              return void 0 === E
                ? {}
                : H
                  ? (0, s.isDefined)(C)
                    ? {
                        initialMarketToData:
                          null == B
                            ? void 0
                            : null === (e = B.data) || void 0 === e
                              ? void 0
                              : e.tryGetMarket(C),
                        initialFromPosition: (0, s.isDefined)(O.address)
                          ? null == B
                            ? void 0
                            : null === (t = B.data) || void 0 === t
                              ? void 0
                              : t.tryGetAccrualPosition(O.address, x)
                          : void 0,
                      }
                    : {}
                  : { initialMarketToData: H, initialFromPosition: H };
            }, [B, x, C, E, O.address, H]),
            j = (0, f.$)(
              null !== (T = null == Z ? void 0 : Z.marketTo) && void 0 !== T ? T : x,
              null == B ? void 0 : B.data,
              R
            ),
            J = (0, o.useMemo)(
              () =>
                B && (0, s.isDefined)(C)
                  ? (0, n._try)(() => {
                      var e;
                      return null === (e = B.data) || void 0 === e
                        ? void 0
                        : e.getMarketPublicReallocations(C, E).data.tryGetMarket(C);
                    }, n.UnknownDataError)
                  : void 0,
              [B, C, E]
            ),
            Q = (0, o.useMemo)(() => {
              if (!J || !V) return;
              let e = J.liquidity - V.liquidity;
              return V.liquidity + n.MathLib.wDivDown(e, n.MathLib.WAD + b);
            }, [J, V]),
            Y = (0, o.useMemo)(() => {
              let e = null == $ ? void 0 : $.borrowAssets,
                t = null == $ ? void 0 : $.borrowShares;
              if ((0, s.isDefined)(e) && (0, s.isDefined)(j))
                return e < j.assets ? { assets: e, shares: t } : j;
            }, [null == $ ? void 0 : $.borrowAssets, null == $ ? void 0 : $.borrowShares, j]),
            ee = (0, l.nR)({
              dependencies: [O.isConnected],
              requiredData: [null == $ ? void 0 : $.collateral, null == Y ? void 0 : Y.assets],
              isFetching: B.isFetchingAny || B.isPending,
            }),
            et = (0, o.useMemo)(() => {
              var e, t;
              return C
                ? {
                    type: p.H.InterfaceOperationType.zap,
                    marketId: x,
                    marketTo: C,
                    collateralAssets: null != R ? R : 0n,
                    borrowAssets: null != z ? z : 0n,
                    borrowShares: G,
                    id:
                      null !== (t = null == Z ? void 0 : Z.id) && void 0 !== t
                        ? t
                        : crypto.randomUUID(),
                    options: {
                      isMax: [
                        ...(X ? [p.H.InterfaceOperationType.zap] : []),
                        ...(K ? [p.H.InterfaceOperationType.zap] : []),
                      ],
                      disabledPeripheralTokens: new Set(),
                    },
                    chainId: P,
                  }
                : {
                    type: p.H.InterfaceOperationType.zap,
                    marketId: x,
                    marketTo: r.DR,
                    id:
                      null !== (e = null == Z ? void 0 : Z.id) && void 0 !== e
                        ? e
                        : crypto.randomUUID(),
                    collateralAssets: null != R ? R : 0n,
                    borrowAssets: null != z ? z : 0n,
                    borrowShares: G,
                    options: { isMax: [], disabledPeripheralTokens: new Set() },
                    chainId: P,
                  };
            }, [R, z, G, K, X, null == Z ? void 0 : Z.id, x, C, P]),
            ea = (0, o.useCallback)((e) => {
              W(!1), q(e);
            }, []),
            eo = (0, o.useCallback)((e) => {
              F(!1), U(e), N(0n);
            }, []),
            ei = (0, o.useCallback)(
              (e) => {
                e && (null == $ ? void 0 : $.collateral) && q($.collateral), W(e);
              },
              [null == $ ? void 0 : $.collateral]
            ),
            er = (0, o.useCallback)(
              (e) => {
                if (e && Y) {
                  var t;
                  if (null == Y.assets) return;
                  U(Y.assets), N(null !== (t = Y.shares) && void 0 !== t ? t : 0n);
                }
                F(e);
              },
              [Y]
            );
          (0, o.useEffect)(() => {
            if (K && Y) {
              var e;
              U(Y.assets), N(null !== (e = Y.shares) && void 0 !== e ? e : 0n);
            }
          }, [K, Y]);
          let en = (0, o.useCallback)(() => {
              Z && (0, u.H)(et) && D(Z.id, () => et);
            }, [et, Z, D]),
            el = (0, o.useCallback)(() => {
              Z && D(Z.id, () => void 0);
            }, [D, Z]),
            es = (0, o.useCallback)(() => {
              Q && eo(Q);
            }, [Q, eo]);
          return (
            (0, o.useEffect)(() => {
              (null == I ? void 0 : I.autoConfirm) && en();
            }, [null == I ? void 0 : I.autoConfirm, en]),
            {
              index: L,
              isNew: _,
              maxBorrowAmount: Y,
              maxMarketToLiquidity: Q,
              inputCollateralAmount: R,
              setInputCollateralAmount: ea,
              inputBorrowAmount: z,
              setInputBorrowAmount: eo,
              isMaxCollateral: X,
              setIsMaxCollateral: ei,
              isMaxBorrow: K,
              setIsMaxBorrow: er,
              localOperation: et,
              isLoading: ee,
              initialState: B,
              confirm: en,
              reset: el,
              onMaxLiquidity: es,
            }
          );
        };
    },
  },
]);
