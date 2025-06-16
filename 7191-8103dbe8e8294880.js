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
    (e._sentryDebugIds[t] = '729f5386-10b4-49bc-98ac-725f10d66ee4'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-729f5386-10b4-49bc-98ac-725f10d66ee4'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7191, 242, 9286],
  {
    29286: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return i;
          },
        });
      var o = a(78286),
        n = a(47567),
        r = a(34097);
      function i() {
        return (0, o.tZ)(n.Z, {
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
            return i;
          },
        });
      var o = a(78286),
        n = a(47567),
        r = a(34097);
      function i() {
        return (0, o.tZ)(n.Z, {
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
        n = a(78286),
        r = a(58258),
        i = a(54655),
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
              error: f,
              children: v,
              size: h = 'medium',
              onClose: y,
            } = e,
            m = (0, i.CPt)(),
            b = Array.isArray(r) ? r : [r];
          return (0, n.BX)(i.Kqy, {
            direction: 'column',
            gap: 20,
            'data-testid': 'operation-summary-dialog',
            children: [
              (0, n.BX)(i.Kqy, {
                gap: 'm',
                direction: 'column',
                children: [
                  (0, n.BX)(i.Kqy, {
                    align: 'center',
                    justify: 'space-between',
                    gap: 16,
                    children: [
                      t
                        ? (0, n.tZ)(i.OdW, { width: '280px', height: '45px', borderRadius: '20px' })
                        : (0, n.tZ)(i.ZT$, {
                            TextVariant: m ? i.xvT.Title.XS : i.xvT.Title.S,
                            children: a,
                          }),
                      (0, n.BX)(i.Kqy, {
                        direction: 'row',
                        align: 'center',
                        gap: 's',
                        children: [
                          !(0, l.isDefined)(f) && !t && !m && o,
                          (0, n.tZ)(i.zxk, {
                            iconAlone: 'ClosePlain20',
                            onClick: y,
                            variant: 'secondary',
                          }),
                        ],
                      }),
                    ],
                  }),
                  m && !(0, l.isDefined)(f) && !t && o,
                  (0, l.isDefined)(f) && c,
                ],
              }),
              (0, l.isDefined)(f)
                ? (0, n.tZ)(i.SKT, { height: '500px', text: f })
                : (0, n.BX)(i.Kqy, {
                    direction: 'column',
                    gap: 'm',
                    children: [
                      (0, n.BX)(i.Kqy, {
                        direction: 'column',
                        gap: 's',
                        children: [
                          d,
                          (0, n.tZ)(i.Z0O, { style: { marginBlock: '3px' } }),
                          (0, n.tZ)(i.Kqy, {
                            fullWidth: !0,
                            gap: 'm',
                            direction: m ? 'column' : 'row',
                            children: t
                              ? b.map((e, t) =>
                                  (0, n.tZ)(
                                    i.OdW,
                                    { width: '100%', height: '115px', borderRadius: '20px' },
                                    'input-skeleton-'.concat(t)
                                  )
                                )
                              : b,
                          }),
                          (0, n.tZ)(i.Z0O, { style: { marginBlock: '3px' } }),
                          (0, n.BX)(i.Kqy, {
                            direction: m ? 'column' : 'row',
                            align: 'center',
                            justify: 'space-between',
                            gap: 'xs',
                            width: '100%',
                            children: [
                              t &&
                                (0, n.tZ)(i.OdW, {
                                  width: '100%',
                                  height: s[h],
                                  borderRadius: '20px',
                                }),
                              !t && u,
                              t
                                ? (0, n.tZ)(i.Kqy, {
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '100px',
                                    children: (0, n.tZ)(i.OdW, {
                                      width: '32px',
                                      height: '32px',
                                      borderRadius: '100px',
                                    }),
                                  })
                                : (0, n.tZ)(i.zxk, {
                                    variant: 'secondary',
                                    size: 'default',
                                    iconAlone: 'ArrowRightPlain20',
                                    style: {
                                      pointerEvents: 'none',
                                      transform: m ? 'rotate(90deg)' : 'none',
                                    },
                                  }),
                              t &&
                                (0, n.tZ)(i.OdW, {
                                  width: '100%',
                                  height: s[h],
                                  borderRadius: '20px',
                                }),
                              !t && p,
                            ],
                          }),
                        ],
                      }),
                      t &&
                        (0, n.tZ)(i.Kqy, {
                          direction: 'column',
                          gap: 8,
                          align: 'stretch',
                          justify: 'start',
                          style: { paddingBottom: 12 },
                          children: (0, n.tZ)(i.OdW, {
                            width: '100%',
                            height: '48px',
                            borderRadius: '50px',
                          }),
                        }),
                      !t && c,
                    ],
                  }),
              v,
            ],
          });
        }),
        u = a(12556),
        p = a(49149),
        c = a(62788),
        f = a(38819),
        v = a(50825);
      let h = (0, f.Z)(v.Z, { target: 'e1o8iek70' })((e) => {
        let { theme: t } = e;
        return t.breakpoints.down('s');
      }, '{width:100%;}');
      var y = (0, r.memo)((e) => {
        let {} = e,
          { toggleDialog: t } = (0, i.DAv)(),
          { closeServiceUnavailableDialog: a } = (0, c.J1)(),
          o = (0, r.useCallback)(() => {
            t(!1), a();
          }, [t, a]);
        return (0, n.BX)(i.Kqy, {
          gap: 32,
          direction: 'column',
          align: 'center',
          children: [
            (0, n.tZ)(i.zxk, {
              size: 'default',
              iconAlone: 'ClosePlain20',
              onClick: o,
              variant: 'secondary',
              style: { position: 'absolute', top: 20, right: 20 },
            }),
            (0, n.BX)(i.Kqy, {
              direction: 'column',
              align: 'center',
              gap: 's',
              children: [
                (0, n.tZ)(i.xvT.Title.XS, {
                  textAlign: 'center',
                  children: 'Something went wrong.',
                }),
                (0, n.tZ)(i.xvT.Body.XS.Regular, {
                  color: 'text.secondary',
                  textAlign: 'center',
                  children:
                    'This could be due to connectivity or other local issues. Try refreshing the app or manage your positions through the Morpho Fallback App.',
                }),
              ],
            }),
            (0, n.BX)(i.Kqy, {
              align: 'center',
              gap: 's',
              wrap: 'wrap',
              justify: 'center',
              children: [
                (0, n.tZ)(h, {
                  mode: 'external',
                  href: u.hU,
                  buttonProps: {
                    size: 'default',
                    variant: 'primary',
                    label: 'Use Fallback App',
                    style: { width: '100%' },
                  },
                }),
                (0, n.tZ)(h, {
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
    34896: function (e, t, a) {
      a.d(t, {
        H: function () {
          return r;
        },
      });
      var o = a(45842),
        n = a(82803);
      let r = (e) => {
        switch (e.type) {
          case n.H.InterfaceOperationType.repay:
          case n.H.InterfaceOperationType.borrow:
          case n.H.InterfaceOperationType.metaMorphoDeposit:
          case n.H.InterfaceOperationType.metaMorphoWithdraw:
            return e.assets > 0n || e.shares > 0n;
          case n.H.InterfaceOperationType.withdrawCollateral:
          case n.H.InterfaceOperationType.supplyCollateral:
            return e.assets > 0n;
          case n.H.InterfaceOperationType.supplyCollateralBorrow:
          case n.H.InterfaceOperationType.withdrawCollateralRepay:
            return e.collateralAssets > 0n || e.loanAssets > 0n || e.loanShares > 0n;
          case n.H.InterfaceOperationType.zap:
            return e.collateralAssets > 0n && e.marketTo !== o.DR;
          case n.H.InterfaceOperationType.migrateSupply:
            return e.assets > 0n;
          case n.H.InterfaceOperationType.migrateBorrow:
            return e.collateralAssets > 0n;
          default:
            throw Error('Not implemented');
        }
      };
    },
    89805: function (e, t, a) {
      a.d(t, {
        _: function () {
          return c;
        },
      });
      var o = a(58258),
        n = a(68612),
        r = a(40252),
        i = a(35047),
        l = a(51196),
        s = a(89991),
        d = a(34896),
        u = a(57054);
      let p = r.MathLib.MAX_UINT_160,
        c = function (e, t, a) {
          var c;
          let f = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            { account: v } = (0, s.Z_)(),
            h =
              null !== (c = null == v ? void 0 : v.address) && void 0 !== c
                ? c
                : '0x0000000000000000000000000000000000000001',
            y = (0, o.useMemo)(
              () =>
                f
                  ? e &&
                    (0, l.produceImmutable)(e, (e) => {
                      var t, a;
                      (0, i.keys)(e.tokens).forEach((t) => {
                        var a, o, i, l;
                        let s =
                          null !==
                            (l = (o =
                              null !== (i = (a = e.holdings)[h]) && void 0 !== i ? i : (a[h] = {}))[
                              t
                            ]) && void 0 !== l
                            ? l
                            : (o[t] = new r.Holding({
                                user: h,
                                token: t,
                                balance: 0n,
                                erc20Allowances: {
                                  morpho: 0n,
                                  permit2: 0n,
                                  'bundler3.generalAdapter1': n.zL,
                                },
                                permit2BundlerAllowance: { amount: 0n, expiration: 0n, nonce: 0n },
                              }));
                        (s.canTransfer = !0), (s.balance += p);
                      }),
                        (0, i.keys)(e.markets).forEach((t) => {
                          var a, o, n, i;
                          (null !==
                            (i = (o =
                              null !== (n = (a = e.positions)[h]) && void 0 !== n
                                ? n
                                : (a[h] = {}))[t]) &&
                            void 0 !== i) ||
                            (o[t] = new r.Position({
                              user: h,
                              marketId: t,
                              supplyShares: 0n,
                              borrowShares: 0n,
                              collateral: 0n,
                            }));
                        }),
                        (null !== (a = (t = e.users)[h]) && void 0 !== a) ||
                          (t[h] = new r.User({
                            address: h,
                            isBundlerAuthorized: !1,
                            morphoNonce: 0n,
                          }));
                    })
                  : e,
              [e, f, h]
            ),
            m = (0, o.useMemo)(() => ((0, d.H)(t) ? [t] : []), [t]),
            [b, w] = (0, u.b)(y, m, a, h),
            { steps: k, exceededToken: g } = (0, o.useMemo)(() => {
              let e;
              return f
                ? {
                    steps:
                      h &&
                      (null == b
                        ? void 0
                        : b.map((a) =>
                            (0, l.produceImmutable)(a, (a) => {
                              var o;
                              let n = {};
                              (0, i.values)(
                                null !== (o = a.holdings[h]) && void 0 !== o ? o : {}
                              ).forEach((o) => {
                                if (!o) return;
                                let l = a.getBundleAssetBalances(
                                    h,
                                    o.token,
                                    r.DEFAULT_SLIPPAGE_TOLERANCE
                                  ),
                                  s = o.balance - p,
                                  { virtualFinalBalance: d, virtualDealtBalance: u } = (0,
                                  i.values)(null == l ? void 0 : l.allocations)
                                    .filter(i.isDefined)
                                    .reduce(
                                      (e, a) => {
                                        var o;
                                        let { type: n, srcAmount: r, dstAmount: i } = a;
                                        return (
                                          !(i > 0n) ||
                                            (null === (o = t.options.disabledPeripheralTokens) ||
                                            void 0 === o
                                              ? void 0
                                              : o.has(n)) ||
                                            ((e.virtualFinalBalance += i),
                                            (e.virtualDealtBalance += (p * i) / r)),
                                          e
                                        );
                                      },
                                      { virtualFinalBalance: 0n, virtualDealtBalance: 0n }
                                    ),
                                  c = a.tryGetToken(o.token);
                                d < u &&
                                  c &&
                                  (!e || (null == c ? void 0 : c.address) === r.NATIVE_ADDRESS) &&
                                  (e = new r.Token(c)),
                                  (n[o.token] = new r.Holding({
                                    ...o,
                                    balance: r.MathLib.max(0n, s),
                                  }));
                              }),
                                (a.holdings[h] = n);
                            })
                          )),
                    exceededToken: e,
                  }
                : { steps: b, exceededToken: void 0 };
            }, [t.options.disabledPeripheralTokens, f, h, b]);
          return [k, w, h, g];
        };
    },
    60410: function (e, t, a) {
      a.d(t, {
        e: function () {
          return o;
        },
      });
      function o(e) {
        let { type: t, srcToken: a } = e;
        switch (t) {
          case 'wrapped-vault':
          case 'vault':
            return 'Allow '.concat(a.symbol, ' deposit');
          case 'wrapped':
            return 'Allow '.concat(a.symbol, ' wrapping');
          case 'unwrapped-staked-wrapped':
          case 'staked-wrapped':
            return 'Allow '.concat(a.symbol, ' staking');
        }
        throw Error('Unhandled peripheral token type: "'.concat(t, '"'));
      }
    },
    23033: function (e, t, a) {
      a.d(t, {
        R: function () {
          return i;
        },
      });
      var o = a(58258),
        n = a(22683),
        r = a(4205);
      let i = (e, t) => {
        let { operations: a } = (0, n.N)(),
          {
            operation: i,
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
          operation: i,
          initialState: (0, r.f)(l),
          finalState: (0, r.f)(l + 1),
          isNew: s,
          index: l,
        };
      };
    },
    84030: function (e, t, a) {
      var o = a(58258),
        n = a(54655);
      t.Z = (e, t, a) =>
        (0, o.useMemo)(() => {
          var o, r;
          if ((0, n.Czs)(t) || !a)
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
          let [i, l] = a,
            s = i.tryGetMarket(e),
            d = null == l ? void 0 : l.tryGetMarket(e),
            u = i.tryGetAccrualPosition(t, e),
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
          return m;
        },
      });
      var o = a(58258),
        n = a(56489),
        r = a(40252),
        i = a(12556),
        l = a(35047),
        s = a(22683),
        d = a(82803),
        u = a(89991),
        p = a(60410);
      let c = (e, t, a) => {
        let { account: n } = (0, u.Z_)();
        return (0, o.useMemo)(() => {
          var o;
          if (!(null == n ? void 0 : n.address) || !t) return;
          let i = t.tryGetAccrualPosition(n.address, e),
            l = null == i ? void 0 : i.market;
          if (!l) return;
          let s = t.getBundleMaxBalance(
            n.address,
            l.params.loanToken,
            r.DEFAULT_SLIPPAGE_TOLERANCE,
            a
          );
          if (void 0 === s) return;
          let d =
            null == l
              ? void 0
              : l.getRepayCapacityLimit(
                  null !== (o = null == i ? void 0 : i.borrowShares) && void 0 !== o ? o : 0n,
                  s
                );
          return d.limiter === r.CapacityLimitReason.position
            ? { assets: d.value, shares: i.borrowShares }
            : { assets: d.value, shares: 0n };
        }, [n.address, t, e, a]);
      };
      var f = a(725);
      let v = (e, t, a, o) => {
        let { account: n } = (0, u.Z_)(),
          l = t && n.address && t.tryGetAccrualPosition(n.address, e),
          s = null == l ? void 0 : l.market,
          d = (0, f.B9)({ lltv: null == s ? void 0 : s.params.lltv, marketId: e });
        if (!(null == n ? void 0 : n.address) || !t || !d || !s) return;
        let p = o || s.toBorrowShares(a),
          c = s.getWithdrawCollateralCapacityLimit(
            { borrowShares: l.borrowShares - p, collateral: l.collateral },
            { maxLtv: r.MathLib.wMulDown(d, i.JC) }
          );
        return { assets: null == c ? void 0 : c.value, shares: 0n };
      };
      var h = a(23033),
        y = a(77458);
      let m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { account: a } = (0, u.Z_)(),
          {
            operation: f,
            initialState: m,
            isNew: b,
          } = (0, h.R)(e, d.H.InterfaceOperationType.withdrawCollateralRepay),
          [w, k] = (0, o.useState)(f.collateralAssets),
          [g, A] = (0, o.useState)(f.loanAssets),
          [T, M] = (0, o.useState)(f.loanShares),
          [x, I] = (0, o.useState)(
            f.options.isMax.includes(d.H.InterfaceOperationType.withdrawCollateral)
          ),
          [C, S] = (0, o.useState)(f.options.isMax.includes(d.H.InterfaceOperationType.repay)),
          [O, , , E, H] = (0, i.$X)(f.options.disabledPeripheralTokens),
          D = (0, o.useMemo)(() => {
            var t;
            let a = null === (t = m.data) || void 0 === t ? void 0 : t.tryGetMarket(e);
            return a && T ? a.toBorrowAssets(T) : g;
          }, [g, m.data, e, T]),
          P = c(e, null == m ? void 0 : m.data, O),
          B = v(e, null == m ? void 0 : m.data, D, T),
          Z = (0, y.Z)(
            a.isConnected,
            null == B ? void 0 : B.assets,
            null == P ? void 0 : P.assets,
            m.isFetchingAny || m.isPending
          ),
          _ = (0, o.useMemo)(
            () => ({
              type: d.H.InterfaceOperationType.withdrawCollateralRepay,
              marketId: e,
              collateralAssets: w,
              loanShares: T,
              loanAssets: g,
              id: f.id,
              options: {
                origin: t.origin,
                isMax: [
                  ...(x ? [d.H.InterfaceOperationType.withdrawCollateral] : []),
                  ...(C ? [d.H.InterfaceOperationType.repay] : []),
                ],
                disabledPeripheralTokens: O,
              },
            }),
            [w, f.id, x, C, T, g, O, e, t.origin]
          ),
          { updateOperation: L } = (0, s.N)(),
          R = (0, o.useMemo)(() => {
            var t, o;
            if (!a.address) return;
            let n =
                null == m
                  ? void 0
                  : null === (t = m.data) || void 0 === t
                    ? void 0
                    : t.tryGetMarket(e),
              i =
                n &&
                (null == m
                  ? void 0
                  : null === (o = m.data) || void 0 === o
                    ? void 0
                    : o.getBundleAssetBalances(
                        a.address,
                        n.params.loanToken,
                        r.DEFAULT_SLIPPAGE_TOLERANCE,
                        !0
                      ));
            if (i)
              return (0, l.values)(i.allocations)
                .filter(l.isDefined)
                .filter((e) => 'base' !== e.type && e.dstAmount > 0n)
                .map((e) => ({
                  id: e.type,
                  label: (0, p.e)(e),
                  value: !O.has(e.type),
                  srcToken: e.srcToken,
                }));
          }, [a.address, O, null == m ? void 0 : m.data, e]),
          q = 'position-manager' === t.origin,
          [z, U] = (0, o.useState)(b || q),
          [N, G] = (0, o.useState)(b || q),
          [X, F] = (0, o.useState)(b),
          [K, W] = (0, o.useState)(b),
          V = (0, o.useMemo)(() => {
            var e;
            let t = C !== f.options.isMax.includes(d.H.InterfaceOperationType.repay),
              a = !(0, n.Z)(
                Array.from(O),
                Array.from(
                  null !== (e = f.options.disabledPeripheralTokens) && void 0 !== e ? e : new Set()
                )
              ),
              o = g !== f.loanAssets;
            return t || a || o;
          }, [O, C, g, f.loanAssets, f.options.disabledPeripheralTokens, f.options.isMax]),
          j = (0, o.useMemo)(() => {
            let e = x !== f.options.isMax.includes(d.H.InterfaceOperationType.withdrawCollateral),
              t = w !== f.collateralAssets;
            return e || t;
          }, [w, x, f.collateralAssets, f.options.isMax]),
          $ = (0, o.useCallback)((e) => {
            I(!1), k(e);
          }, []),
          J = (0, o.useCallback)((e) => {
            S(!1), A(e), M(0n);
          }, []),
          Q = (0, o.useCallback)(() => {
            L(_.id, () => _), U(!1), G(!1);
          }, [_, L]),
          Y = (0, o.useCallback)(() => {
            L(_.id, () => _), G(!1);
          }, [_, L]),
          ee = (0, o.useCallback)(() => {
            L(_.id, () => _), U(!1);
          }, [_, L]),
          et = (0, o.useCallback)(() => {
            if (0n === f.loanAssets || 0n === f.collateralAssets) {
              L(_.id);
              return;
            }
            L(_.id, () => ({
              ...f,
              collateralAssets: 0n,
              options: { ...f.options, isMax: [...(C ? [d.H.InterfaceOperationType.repay] : [])] },
            }));
          }, [_, L, f, C]),
          ea = (0, o.useCallback)(() => {
            if (0n === f.loanAssets || 0n === f.collateralAssets) {
              L(_.id);
              return;
            }
            L(_.id, () => ({
              ...f,
              loanAssets: 0n,
              options: {
                ...f.options,
                isMax: [...(x ? [d.H.InterfaceOperationType.withdrawCollateral] : [])],
              },
            }));
          }, [_, L, f, x]),
          eo = (0, o.useCallback)(
            (e) => {
              if (e) {
                if ((null == B ? void 0 : B.assets) == null) return;
                k(B.assets);
              }
              I(e);
            },
            [null == B ? void 0 : B.assets]
          ),
          en = (0, o.useCallback)(
            (e) => {
              if (e) {
                if ((null == P ? void 0 : P.assets) == null) return;
                A(P.assets), M(P.shares);
              }
              S(e);
            },
            [null == P ? void 0 : P.assets, null == P ? void 0 : P.shares]
          );
        return (
          (0, o.useEffect)(() => {
            'bundler' === t.origin && Q();
          }, [Q, t.origin]),
          (0, o.useEffect)(() => {
            z ||
              ('bundler' !== f.options.origin && F(f.collateralAssets > 0n), k(f.collateralAssets));
          }, [z, f.collateralAssets, f.options.origin]),
          (0, o.useEffect)(() => {
            N ||
              ('bundler' !== f.options.origin && W(f.loanAssets > 0n),
              A(f.loanAssets),
              M(f.loanShares));
          }, [N, f.loanAssets, f.loanShares, f.options.origin]),
          (0, o.useEffect)(() => {
            eo(x);
          }, [x, eo]),
          (0, o.useEffect)(() => {
            en(C);
          }, [C, en]),
          (0, o.useEffect)(() => {
            z || N || H(f.options.disabledPeripheralTokens);
          }, [z, N, f.options.disabledPeripheralTokens, H]),
          (0, o.useEffect)(() => {
            if (N || z) return;
            let e = f.options.isMax.includes(d.H.InterfaceOperationType.withdrawCollateral),
              t = f.options.isMax.includes(d.H.InterfaceOperationType.repay);
            I(e), S(t);
          }, [N, z, f.options.isMax]),
          (0, o.useMemo)(
            () => ({
              isNew: b,
              inputCollateralAmount: w,
              setInputCollateralAmount: $,
              inputLoanAmount: D,
              setInputLoanAmount: J,
              hasModifiedRepayOperation: V,
              hasModifiedWithdrawOperation: j,
              isMaxCollateral: x,
              setIsMaxCollateral: eo,
              isMaxLoan: C,
              setIsMaxLoan: en,
              localOperation: _,
              maxCollateral: B,
              maxLoan: P,
              isLoading: Z,
              initialState: m,
              confirm: Q,
              confirmCollateral: ee,
              confirmLoan: Y,
              setIsEditingCollateral: U,
              setIsEditingLoan: G,
              peripheralTokenOptions: R,
              onPeripheralTokenOptionChange: E,
              isEditingCollateral: z,
              isEditingLoan: N,
              resetCollateral: et,
              resetLoan: ea,
              showCollateralInput: X,
              showLoanInput: K,
              setShowCollateralInput: F,
              setShowLoanInput: W,
            }),
            [
              b,
              w,
              $,
              D,
              J,
              V,
              j,
              x,
              eo,
              C,
              en,
              _,
              B,
              P,
              Z,
              m,
              Q,
              ee,
              Y,
              R,
              E,
              z,
              N,
              et,
              ea,
              X,
              K,
              F,
              W,
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
        n = a(56489),
        r = a(40252),
        i = a(12556),
        l = a(35047),
        s = a(22683),
        d = a(82803),
        u = a(89991),
        p = a(60410),
        c = a(88506);
      let f = (e, t, a) => {
        let { account: n } = (0, u.Z_)();
        return (0, o.useMemo)(() => {
          if (!(null == n ? void 0 : n.address) || !t) return;
          let o = t.tryGetMarket(e);
          if (!o) return;
          let i = t.getBundleMaxBalance(
            n.address,
            o.params.collateralToken,
            r.DEFAULT_SLIPPAGE_TOLERANCE,
            a
          );
          if (void 0 !== i) return { assets: i, shares: 0n };
        }, [n.address, t, e, a]);
      };
      var v = a(23033),
        h = a(77458);
      let y = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { account: a } = (0, u.Z_)(),
          {
            operation: y,
            initialState: m,
            isNew: b,
          } = (0, v.R)(e, d.H.InterfaceOperationType.supplyCollateralBorrow),
          [w, k] = (0, o.useState)(y.collateralAssets),
          [g, A] = (0, o.useState)(b),
          [T, M] = (0, o.useState)(b),
          [x, I] = (0, o.useState)(y.loanAssets),
          [C, S] = (0, o.useState)(
            y.options.isMax.includes(d.H.InterfaceOperationType.supplyCollateral)
          ),
          [O, E] = (0, o.useState)(y.options.isMax.includes(d.H.InterfaceOperationType.borrow)),
          [H, , , D, P] = (0, i.$X)(y.options.disabledPeripheralTokens),
          B = f(e, null == m ? void 0 : m.data, H),
          Z = (0, c.$)(e, null == m ? void 0 : m.data, w),
          _ = (0, h.Z)(
            a.isConnected,
            null == B ? void 0 : B.assets,
            null == Z ? void 0 : Z.assets,
            m.isFetchingAny || m.isPending
          ),
          L = (0, o.useMemo)(() => {
            var e;
            let t = C !== y.options.isMax.includes(d.H.InterfaceOperationType.supplyCollateral),
              a = !(0, n.Z)(
                Array.from(H),
                Array.from(
                  null !== (e = y.options.disabledPeripheralTokens) && void 0 !== e ? e : new Set()
                )
              ),
              o = w !== y.collateralAssets;
            return t || a || o;
          }, [w, H, C, y.collateralAssets, y.options.disabledPeripheralTokens, y.options.isMax]),
          R = (0, o.useMemo)(() => {
            let e = O !== y.options.isMax.includes(d.H.InterfaceOperationType.borrow),
              t = x !== y.loanAssets;
            return e || t;
          }, [x, O, y.loanAssets, y.options.isMax]),
          q = (0, o.useMemo)(
            () => ({
              type: d.H.InterfaceOperationType.supplyCollateralBorrow,
              marketId: e,
              collateralAssets: w,
              loanShares: 0n,
              loanAssets: x,
              id: y.id,
              options: {
                origin: t.origin,
                isMax: [
                  ...(C ? [d.H.InterfaceOperationType.supplyCollateral] : []),
                  ...(O ? [d.H.InterfaceOperationType.borrow] : []),
                ],
                disabledPeripheralTokens: H,
              },
            }),
            [e, w, x, y.id, t.origin, C, O, H]
          ),
          { updateOperation: z } = (0, s.N)(),
          U = (0, o.useMemo)(() => {
            var t, o;
            if (!a.address) return;
            let n =
                null == m
                  ? void 0
                  : null === (t = m.data) || void 0 === t
                    ? void 0
                    : t.tryGetMarket(e),
              i =
                n &&
                (null == m
                  ? void 0
                  : null === (o = m.data) || void 0 === o
                    ? void 0
                    : o.getBundleAssetBalances(
                        a.address,
                        n.params.collateralToken,
                        r.DEFAULT_SLIPPAGE_TOLERANCE,
                        !0
                      ));
            if (i)
              return (0, l.values)(i.allocations)
                .filter(l.isDefined)
                .filter((e) => 'base' !== e.type && e.dstAmount > 0n)
                .map((e) => ({
                  id: e.type,
                  label: (0, p.e)(e),
                  value: !H.has(e.type),
                  srcToken: e.srcToken,
                }));
          }, [a.address, H, null == m ? void 0 : m.data, e]),
          N = 'position-manager' === t.origin,
          [G, X] = (0, o.useState)(b || N),
          [F, K] = (0, o.useState)(b || N),
          W = (0, o.useCallback)((e) => {
            S(!1), k(e);
          }, []),
          V = (0, o.useCallback)((e) => {
            E(!1), I(e);
          }, []),
          j = (0, o.useCallback)(() => {
            z(q.id, () => q), X(!1), K(!1);
          }, [q, z]),
          $ = (0, o.useCallback)(() => {
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
                isMax: [...(C ? [d.H.InterfaceOperationType.supplyCollateral] : [])],
              },
            }));
          }, [q, z, y, C]),
          ee = (0, o.useCallback)(
            (e) => {
              if (e) {
                if ((null == B ? void 0 : B.assets) == null) return;
                k(B.assets);
              }
              S(e);
            },
            [null == B ? void 0 : B.assets]
          ),
          et = (0, o.useCallback)(
            (e) => {
              if (e) {
                if ((null == Z ? void 0 : Z.assets) == null) return;
                I(Z.assets);
              }
              E(e);
            },
            [null == Z ? void 0 : Z.assets]
          );
        return (
          (0, o.useEffect)(() => {
            'bundler' === t.origin && j();
          }, [j, t.origin]),
          (0, o.useEffect)(() => {
            G ||
              ('bundler' !== y.options.origin && A(y.collateralAssets > 0n), k(y.collateralAssets));
          }, [G, y.collateralAssets, y.options.origin]),
          (0, o.useEffect)(() => {
            F || ('bundler' !== y.options.origin && M(y.loanAssets > 0n), I(y.loanAssets));
          }, [F, y.loanAssets, y.loanShares, y.options.origin]),
          (0, o.useEffect)(() => {
            ee(C);
          }, [C, ee]),
          (0, o.useEffect)(() => {
            et(O);
          }, [O, et]),
          (0, o.useEffect)(() => {
            F || G || P(y.options.disabledPeripheralTokens);
          }, [F, G, y.options.disabledPeripheralTokens, P]),
          (0, o.useEffect)(() => {
            if (F || G) return;
            let e = y.options.isMax.includes(d.H.InterfaceOperationType.supplyCollateral),
              t = y.options.isMax.includes(d.H.InterfaceOperationType.borrow);
            S(e), E(t);
          }, [F, G, y.options.isMax]),
          (0, o.useMemo)(
            () => ({
              isNew: b,
              inputCollateralAmount: w,
              setInputCollateralAmount: W,
              inputLoanAmount: x,
              setInputLoanAmount: V,
              isMaxCollateral: C,
              setIsMaxCollateral: ee,
              isMaxLoan: O,
              setIsMaxLoan: et,
              localOperation: q,
              maxCollateral: B,
              maxLoan: Z,
              isLoading: _,
              initialState: m,
              confirm: j,
              confirmCollateral: $,
              confirmLoan: J,
              resetCollateral: Q,
              resetLoan: Y,
              peripheralTokenOptions: U,
              onPeripheralTokenOptionChange: D,
              isEditingCollateral: G,
              setIsEditingCollateral: X,
              isEditingLoan: F,
              setIsEditingLoan: K,
              hasModifiedSupplyOperation: L,
              hasModifiedBorrowMoreOperation: R,
              showCollateralInput: g,
              showLoanInput: T,
              setShowCollateralInput: A,
              setShowLoanInput: M,
            }),
            [
              b,
              w,
              W,
              x,
              V,
              C,
              ee,
              O,
              et,
              q,
              B,
              Z,
              _,
              m,
              j,
              $,
              J,
              U,
              D,
              G,
              X,
              F,
              K,
              Q,
              Y,
              L,
              R,
              g,
              T,
              A,
              M,
            ]
          )
        );
      };
    },
    91794: function (e, t, a) {
      a.d(t, {
        p: function () {
          return b;
        },
      });
      var o = a(58258),
        n = a(41592),
        r = a(45842),
        i = a(40252),
        l = a(12556),
        s = a(35047),
        d = a(22683),
        u = a(34896),
        p = a(82803),
        c = a(96278),
        f = a(89991),
        v = a(88506),
        h = a(4205);
      let y = (e) => {
          let { marketFrom: t, marketTo: a, operationId: n } = e,
            { targetChainId: r } = (0, f.Z_)(),
            { operations: i } = (0, d.N)(),
            {
              operation: l,
              index: u,
              isNew: c,
              error: v,
            } = (0, o.useMemo)(() => {
              let e = i.findIndex((e) => e.type === p.H.InterfaceOperationType.zap && e.id === n);
              if (!(0, s.isDefined)(a))
                return {
                  error: 'Market destination is not defined',
                  index: -1,
                  isNew: !1,
                  operation: void 0,
                };
              if (e >= 0) return { index: e, operation: i[e], isNew: !1 };
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
              return { isNew: !0, index: i.length, operation: o, isLoading: !1 };
            }, [t, a, i, r, n]);
          return {
            operation: l,
            initialState: (0, h.f)(u),
            finalState: (0, h.f)(u + 1),
            isNew: c,
            index: u,
            error: v,
          };
        },
        m = (0, n.v)('0.0001', 18),
        b = (e) => {
          var t, a, n, h, b, w, k, g, A, T, M;
          let { marketFrom: x, marketTo: I, initialOperation: C, options: S } = e,
            { account: O, targetChainId: E } = (0, f.Z_)(),
            { updateOperation: H } = (0, d.N)(),
            { publicAllocatorOptions: D } = (0, c.B)(),
            {
              operation: P,
              initialState: B,
              finalState: Z,
              isNew: _,
              index: L,
            } = y({ marketFrom: x, marketTo: I, operationId: null == C ? void 0 : C.id }),
            [R, q] = (0, o.useState)(
              null !==
                (a =
                  null !== (t = null == C ? void 0 : C.collateralAssets) && void 0 !== t
                    ? t
                    : null == P
                      ? void 0
                      : P.collateralAssets) && void 0 !== a
                ? a
                : 0n
            ),
            [z, U] = (0, o.useState)(
              null !==
                (h =
                  null !== (n = null == C ? void 0 : C.borrowAssets) && void 0 !== n
                    ? n
                    : null == P
                      ? void 0
                      : P.borrowAssets) && void 0 !== h
                ? h
                : 0n
            ),
            [N, G] = (0, o.useState)(
              null !==
                (w =
                  null !== (b = null == C ? void 0 : C.borrowShares) && void 0 !== b
                    ? b
                    : null == P
                      ? void 0
                      : P.borrowShares) && void 0 !== w
                ? w
                : 0n
            ),
            [X, F] = (0, o.useState)(
              null !==
                (g =
                  null !==
                    (k =
                      null == C
                        ? void 0
                        : C.options.isMax.includes(p.H.InterfaceOperationType.zap)) && void 0 !== k
                    ? k
                    : null == P
                      ? void 0
                      : P.options.isMax.includes(p.H.InterfaceOperationType.zap)) &&
                void 0 !== g &&
                g
            ),
            [K, W] = (0, o.useState)(
              null !==
                (T =
                  null !==
                    (A =
                      null == C
                        ? void 0
                        : C.options.isMax.includes(p.H.InterfaceOperationType.zap)) && void 0 !== A
                    ? A
                    : null == P
                      ? void 0
                      : P.options.isMax.includes(p.H.InterfaceOperationType.zap)) &&
                void 0 !== T &&
                T
            ),
            { initialMarketToData: V, initialFromPosition: j } = (0, o.useMemo)(() => {
              var e, t;
              return void 0 === D
                ? {}
                : Z
                  ? (0, s.isDefined)(I)
                    ? {
                        initialMarketToData:
                          null == B
                            ? void 0
                            : null === (e = B.data) || void 0 === e
                              ? void 0
                              : e.tryGetMarket(I),
                        initialFromPosition: (0, s.isDefined)(O.address)
                          ? null == B
                            ? void 0
                            : null === (t = B.data) || void 0 === t
                              ? void 0
                              : t.tryGetAccrualPosition(O.address, x)
                          : void 0,
                      }
                    : {}
                  : { initialMarketToData: Z, initialFromPosition: Z };
            }, [B, x, I, D, O.address, Z]),
            $ = (0, v.$)(
              null !== (M = null == P ? void 0 : P.marketTo) && void 0 !== M ? M : x,
              null == B ? void 0 : B.data,
              R
            ),
            J = (0, o.useMemo)(
              () =>
                B && (0, s.isDefined)(I)
                  ? (0, i._try)(() => {
                      var e;
                      return null === (e = B.data) || void 0 === e
                        ? void 0
                        : e.getMarketPublicReallocations(I, D).data.tryGetMarket(I);
                    }, i.UnknownDataError)
                  : void 0,
              [B, I, D]
            ),
            Q = (0, o.useMemo)(() => {
              if (!J || !V) return;
              let e = J.liquidity - V.liquidity;
              return V.liquidity + i.MathLib.wDivDown(e, i.MathLib.WAD + m);
            }, [J, V]),
            Y = (0, o.useMemo)(() => {
              let e = null == j ? void 0 : j.borrowAssets,
                t = null == j ? void 0 : j.borrowShares;
              if ((0, s.isDefined)(e) && (0, s.isDefined)($))
                return e < $.assets ? { assets: e, shares: t } : $;
            }, [null == j ? void 0 : j.borrowAssets, null == j ? void 0 : j.borrowShares, $]),
            ee = (0, l.nR)({
              dependencies: [O.isConnected],
              requiredData: [null == j ? void 0 : j.collateral, null == Y ? void 0 : Y.assets],
              isFetching: B.isFetchingAny || B.isPending,
            }),
            et = (0, o.useMemo)(() => {
              var e, t;
              return I
                ? {
                    type: p.H.InterfaceOperationType.zap,
                    marketId: x,
                    marketTo: I,
                    collateralAssets: null != R ? R : 0n,
                    borrowAssets: null != z ? z : 0n,
                    borrowShares: N,
                    id:
                      null !== (t = null == P ? void 0 : P.id) && void 0 !== t
                        ? t
                        : crypto.randomUUID(),
                    options: {
                      isMax: [
                        ...(X ? [p.H.InterfaceOperationType.zap] : []),
                        ...(K ? [p.H.InterfaceOperationType.zap] : []),
                      ],
                      disabledPeripheralTokens: new Set(),
                    },
                    chainId: E,
                  }
                : {
                    type: p.H.InterfaceOperationType.zap,
                    marketId: x,
                    marketTo: r.DR,
                    id:
                      null !== (e = null == P ? void 0 : P.id) && void 0 !== e
                        ? e
                        : crypto.randomUUID(),
                    collateralAssets: null != R ? R : 0n,
                    borrowAssets: null != z ? z : 0n,
                    borrowShares: N,
                    options: { isMax: [], disabledPeripheralTokens: new Set() },
                    chainId: E,
                  };
            }, [R, z, N, K, X, null == P ? void 0 : P.id, x, I, E]),
            ea = (0, o.useCallback)((e) => {
              F(!1), q(e);
            }, []),
            eo = (0, o.useCallback)((e) => {
              W(!1), U(e), G(0n);
            }, []),
            en = (0, o.useCallback)(
              (e) => {
                e && (null == j ? void 0 : j.collateral) && q(j.collateral), F(e);
              },
              [null == j ? void 0 : j.collateral]
            ),
            er = (0, o.useCallback)(
              (e) => {
                if (e && Y) {
                  var t;
                  if (null == Y.assets) return;
                  U(Y.assets), G(null !== (t = Y.shares) && void 0 !== t ? t : 0n);
                }
                W(e);
              },
              [Y]
            );
          (0, o.useEffect)(() => {
            if (K && Y) {
              var e;
              U(Y.assets), G(null !== (e = Y.shares) && void 0 !== e ? e : 0n);
            }
          }, [K, Y]);
          let ei = (0, o.useCallback)(() => {
              P && (0, u.H)(et) && H(P.id, () => et);
            }, [et, P, H]),
            el = (0, o.useCallback)(() => {
              P && H(P.id, () => void 0);
            }, [H, P]),
            es = (0, o.useCallback)(() => {
              Q && eo(Q);
            }, [Q, eo]);
          return (
            (0, o.useEffect)(() => {
              (null == S ? void 0 : S.autoConfirm) && ei();
            }, [null == S ? void 0 : S.autoConfirm, ei]),
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
              setIsMaxCollateral: en,
              isMaxBorrow: K,
              setIsMaxBorrow: er,
              localOperation: et,
              isLoading: ee,
              initialState: B,
              confirm: ei,
              reset: el,
              onMaxLiquidity: es,
            }
          );
        };
    },
  },
]);
