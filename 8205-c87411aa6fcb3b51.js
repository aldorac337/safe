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
    n = new e.Error().stack;
  n &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[n] = 'ed3c5763-29b6-4ebb-90ca-1cb889aed109'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-ed3c5763-29b6-4ebb-90ca-1cb889aed109'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8205],
  {
    16586: function (e, n, t) {
      t.d(n, {
        X: function () {
          return a;
        },
      });
      var r = t(78286),
        i = t(58258),
        l = t(54655),
        o = t(50825),
        a = (0, i.memo)((e) => {
          let { point: n } = e;
          return n.noHoverCard
            ? null
            : (0, r.BX)(l.zsw.Root, {
                children: [
                  (0, r.tZ)(l.zsw.Trigger, {
                    children: (0, r.tZ)(l.Kqy, { children: (0, r.tZ)(l.bEE, { disabled: !0 }) }),
                  }),
                  (0, r.tZ)(l.zsw.Content, {
                    children: (0, r.BX)(l.Kqy, {
                      gap: 20,
                      direction: 'column',
                      padding: 's',
                      children: [
                        (0, r.BX)(l.Kqy, {
                          gap: 's',
                          direction: 'column',
                          children: [
                            (0, r.tZ)(l.xvT.Body.M.Regular, {
                              textAlign: 'center',
                              children: n.title ? ''.concat(n.title, ' campaign') : 'Campaign',
                            }),
                            (0, r.BX)(l.xvT.Body.XXS.Regular, {
                              textAlign: 'center',
                              children: [
                                'This points campaign is administered independently',
                                n.label ? ' by '.concat(n.label) : '',
                                '. The Morpho Association is not responsible for determining eligibility, distribution, or the accuracy of the information displayed.',
                              ],
                            }),
                          ],
                        }),
                        n.link &&
                          (0, r.tZ)(o.Z, {
                            mode: 'external',
                            href: n.link,
                            buttonProps: {
                              label: 'Learn more',
                              size: 'default',
                              variant: 'secondary',
                              style: { width: '100%' },
                            },
                          }),
                      ],
                    }),
                  }),
                ],
              });
        });
    },
    27349: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var r = t(78286),
        i = t(58258),
        l = t(4899),
        o = t(40252),
        a = t(12556),
        _ = t(54655),
        A = t(35047),
        E = t(26726),
        c = t(964),
        T = t(16586),
        d = t(38819);
      let I = (0, d.Z)('div', { target: 'e1x7on5g0' })(
          'width:',
          (e) => {
            let { theme: n } = e;
            return n.padding.s;
          },
          ';height:',
          (e) => {
            let { theme: n } = e;
            return n.padding.s;
          },
          ';margin:2px;border-radius:50%;background:',
          (e) => {
            let { theme: n } = e;
            return n.colors.constant.gradient.earth;
          },
          ';'
        ),
        u = (0, d.Z)('div', { target: 'e1x7on5g1' })(
          'display:flex;align-items:center;padding:1px ',
          (e) => {
            let { theme: n } = e;
            return n.spacing.s;
          },
          ';justify-content:space-between;height:',
          (e) => {
            let { theme: n } = e;
            return n.padding.m;
          },
          ';box-sizing:content-box;'
        ),
        s = (0, d.Z)('div', { target: 'e1x7on5g2' })('padding:0 22px;margin:6px 0;'),
        R = (0, d.Z)('div', { target: 'e1x7on5g3' })(
          'background-color:',
          (e) => {
            let { theme: n } = e;
            return n.colors.background.primary;
          },
          ';width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;'
        );
      var O = (0, i.memo)((e) => {
        var n, t, i;
        let { asset: o, isVault: a } = e;
        return (0, r.BX)(u, {
          children: [
            (0, r.BX)(_.Kqy, {
              gap: 4,
              align: 'center',
              children: [
                (null == o ? void 0 : o.logoURI)
                  ? (0, r.tZ)(l.default, {
                      src: o.logoURI,
                      alt:
                        null !== (t = null !== (n = o.name) && void 0 !== n ? n : o.symbol) &&
                        void 0 !== t
                          ? t
                          : 'Native Yield token',
                      width: 20,
                      height: 20,
                      style: { margin: '2px' },
                    })
                  : (0, r.tZ)(I, {}),
                (0, r.BX)(_.xvT.Body.XXS.Regular, {
                  children: [
                    (0, A.formatLongString)(null !== (i = o.symbol) && void 0 !== i ? i : '', 8),
                    ' Yield',
                  ],
                }),
                (0, r.tZ)(_.mUV, {
                  toCopy: o.address,
                  toastMessage: 'Address copied to clipboard.',
                  tooltipMessage: 'Copy address.',
                  size: 'small',
                }),
                !a &&
                  (0, r.tZ)(_.ua7, {
                    content:
                      "This APY applies only to the collateral and doesn't impact the borrowing rate.",
                    children: (0, r.tZ)(_.JO$, { icon: 'InfoPlain20', color: 'icon.secondary' }),
                  }),
              ],
            }),
            (0, r.tZ)(_.xvT.Body.XXS.Regular, {
              children: _.$0l.percent.digits(2).unit('%').trailingZero(!1).sign().of(o.yield),
            }),
          ],
        });
      });
      let L = {
          market: 'Per year per $1000 borrowed.',
          vault: 'Per year per $1000 deposited.',
          supply: 'Per year per $1000 supplied.',
        },
        N = { market: 'Rate', vault: 'APY', supply: 'Supply APY' },
        P = _.$0l.percent.digits(2).unit('%').default('-');
      var g = (0, i.memo)((e) => {
        let {
            rewards: n,
            netApy: t,
            apy: d,
            performanceFee: g,
            variant: v,
            points: U,
            asset: M,
            durationText: p,
          } = e,
          { theme: h } = (0, _.TCT)(),
          S = (0, E.nh)(E.TP.FE_CALCULATION_NATIVE_APY),
          B = (0, i.useMemo)(
            () => _.$0l.percent.trailingZero(!1).digits(2).unit('%').default('0').of(g, 18),
            [g]
          ),
          G = (0, i.useMemo)(() => {
            if (!(0, A.isDefined)(g)) return g;
            if (!(0, A.isDefined)(d)) return d;
            let e = o.MathLib.wMulDown(-g, d);
            return 0n === e ? '0.00%' : P.sign().of(e, 18);
          }, [g, d]),
          f = (0, i.useCallback)(
            (e) => {
              if (e.apr) return _.$0l.percent.digits(2).unit('%').sign().of(e.apr, 18);
              let { decimals: n } = e.rewardToken;
              return (0, r.tZ)(_.ua7, {
                content: L[v],
                children: (0, r.BX)(_.Kqy, {
                  gap: 3,
                  align: 'center',
                  children: [
                    A.format.short.digits(2).sign().of(e.proportional.rate, n),
                    (0, r.tZ)(_.JO$, {
                      hoverColor: 'icon.primary',
                      icon: 'QuestionPlain20',
                      color: 'text.secondary',
                      size: 16,
                    }),
                  ],
                }),
              });
            },
            [v]
          ),
          y = (0, i.useMemo)(() => {
            if (!S) return d;
            switch (v) {
              case 'vault':
                return (0, c.H2)({
                  rewards: n,
                  netApy: t,
                  nativeApy: d,
                  performanceFee: g,
                  asset: M,
                });
              case 'market':
                return (0, c.yz)({ rewards: n, netRate: t });
              case 'supply':
                return (0, c.Ji)({ rewards: n, netApy: t });
              default:
                return d;
            }
          }, [n, t, d, g, M, v, S]);
        if (!(0, A.isDefined)(d)) return null;
        let C = 'vault' === v;
        return (0, r.BX)(_.Kqy, {
          style: { padding: ''.concat(h.spacing.s, ' 0') },
          direction: 'column',
          children: [
            (0, r.BX)(u, {
              children: [
                (0, r.BX)(_.Kqy, {
                  gap: 4,
                  align: 'center',
                  children: [
                    (0, r.tZ)(R, {
                      children: (0, r.tZ)(_.JO$, { icon: 'InterestGeneratedGradient20', size: 14 }),
                    }),
                    (0, r.tZ)(_.xvT.Body.XXS.Regular, {
                      color: 'text.body',
                      children: ''.concat(p ? p + ' ' : '', 'Native ').concat(N[v]),
                    }),
                  ],
                }),
                (0, r.tZ)(_.xvT.Body.XXS.Regular, { color: 'text.body', children: P.of(y, 18) }),
              ],
            }),
            M instanceof a.YK && C && (0, r.tZ)(O, { asset: M, isVault: !0 }),
            null == n
              ? void 0
              : n.map((e) => {
                  var n, t;
                  return (0, r.BX)(
                    u,
                    {
                      children: [
                        (0, r.BX)(_.Kqy, {
                          gap: 4,
                          align: 'center',
                          children: [
                            e.rewardToken.logoURI
                              ? (0, r.tZ)(l.default, {
                                  src: e.rewardToken.logoURI,
                                  alt:
                                    null !==
                                      (t =
                                        null !== (n = e.rewardToken.name) && void 0 !== n
                                          ? n
                                          : e.rewardToken.symbol) && void 0 !== t
                                      ? t
                                      : 'Reward token',
                                  width: 20,
                                  height: 20,
                                  style: { margin: '2px' },
                                })
                              : (0, r.tZ)(I, {}),
                            (0, r.tZ)(_.xvT.Body.XXS.Regular, {
                              color: 'text.body',
                              children: e.rewardToken.symbol,
                            }),
                            (0, r.tZ)(_.mUV, {
                              toCopy: e.rewardToken.address,
                              toastMessage: 'Address copied to clipboard.',
                              tooltipMessage: 'Copy address.',
                              size: 'small',
                            }),
                          ],
                        }),
                        (0, r.tZ)(_.xvT.Body.XXS.Regular, { color: 'text.body', children: f(e) }),
                      ],
                    },
                    e.rewardToken.address
                  );
                }),
            C &&
              (0, A.isDefined)(G) &&
              (0, r.BX)(u, {
                children: [
                  (0, r.BX)(_.Kqy, {
                    gap: 4,
                    align: 'center',
                    children: [
                      (0, r.tZ)(_.JO$, { icon: 'DollarPlain20', color: 'icon.primary' }),
                      (0, r.tZ)(_.xvT.Body.XXS.Regular, {
                        lineHeight: 'normal',
                        color: 'text.body',
                        children: 'Performance Fee',
                      }),
                      (0, r.tZ)(_.Vp9, { label: B }),
                    ],
                  }),
                  (0, r.tZ)(_.xvT.Body.XXS.Regular, { color: 'text.body', children: G }),
                ],
              }),
            (0, A.isDefined)(t) &&
              (0, r.BX)(u, {
                children: [
                  (0, r.BX)(_.Kqy, {
                    gap: 4,
                    align: 'center',
                    children: [
                      (0, r.tZ)(_.JO$, {
                        icon: 'RewardsPlain20',
                        color: 'text.interactive.active',
                      }),
                      (0, r.tZ)(_.xvT.Body.XXS.Regular, {
                        lineHeight: 'normal',
                        color: 'text.interactive.active',
                        children: ''.concat(p ? p + ' ' : '').concat(C ? 'Net APY' : 'Net Rate'),
                      }),
                    ],
                  }),
                  (0, r.BX)(_.xvT.Body.XXS.Regular, {
                    color: 'text.interactive.active',
                    children: ['=', P.of(t, 18)],
                  }),
                ],
              }),
            (M instanceof a.YK && !C) || (null == U ? void 0 : U.length)
              ? (0, r.tZ)(s, { children: (0, r.tZ)(_.Z0O, {}) })
              : null,
            M instanceof a.YK && !C && (0, r.tZ)(O, { asset: M }),
            U &&
              U.length > 0 &&
              (null == U
                ? void 0
                : U.map((e, n) =>
                    (0, r.BX)(
                      u,
                      {
                        children: [
                          (0, r.BX)(_.Kqy, {
                            gap: 4,
                            align: 'center',
                            children: [
                              (0, r.tZ)(_.JO$, { icon: 'PointsPlain20', color: 'icon.primary' }),
                              e.label && (0, r.tZ)(_.Vp9, { label: e.label }),
                              (0, r.tZ)(T.X, { point: e }),
                            ],
                          }),
                          (0, r.BX)(_.Kqy, {
                            gap: 'xxs',
                            align: 'center',
                            children: [
                              e.value &&
                                (0, r.tZ)(_.xvT.Body.XXS.Regular, {
                                  lineHeight: 'normal',
                                  color: 'text.body',
                                  children: e.value,
                                }),
                              e.title &&
                                (0, r.tZ)(_.xvT.Body.XXS.Regular, {
                                  lineHeight: 'normal',
                                  children: e.title,
                                }),
                            ],
                          }),
                        ],
                      },
                      'point-'.concat(n)
                    )
                  )),
          ],
        });
      });
    },
    26726: function (e, n, t) {
      t.d(n, {
        TP: function () {
          return i;
        },
        hz: function () {
          return R;
        },
        nh: function () {
          return s;
        },
      });
      var r,
        i,
        l,
        o,
        a,
        _,
        A,
        E,
        c = t(78286),
        T = t(58258),
        d = t(18313);
      ((r = i || (i = {})).UI_KIT = 'UI_KIT'),
        (r.POSITION_HISTORY = 'POSITION_HISTORY'),
        (r.SIMULATION_STATE_VIEWER = 'SIMULATION_STATE_VIEWER'),
        (r.MIGRATION_PAGE = 'MIGRATION_PAGE'),
        (r.MOBILE_VAULT_TABS = 'MOBILE_VAULT_TABS'),
        (r.MOBILE_MARKET_TABS = 'MOBILE_MARKET_TABS'),
        (r.LIGHT_MODE = 'LIGHT_MODE'),
        (r.AUTO_DELEVERAGE = 'AUTO_DELEVERAGE'),
        (r.POSITION_MANAGER_MARKET = 'POSITION_MANAGER_MARKET'),
        (r.POSITION_MANAGER_VAULT = 'POSITION_MANAGER_VAULT'),
        (r.POSITION_MANAGER_SUPPLY_COLLATERAL = 'POSITION_MANAGER_SUPPLY_COLLATERAL'),
        (r.POSITION_MANAGER_WITHDRAW_COLLATERAL = 'POSITION_MANAGER_WITHDRAW_COLLATERAL'),
        (r.POSITION_MANAGER_BORROW_MORE = 'POSITION_MANAGER_BORROW_MORE'),
        (r.POSITION_MANAGER_REPAY = 'POSITION_MANAGER_REPAY'),
        (r.POSITION_MANAGER_DEPOSIT_INTO_VAULT = 'POSITION_MANAGER_DEPOSIT_INTO_VAULT'),
        (r.POSITION_MANAGER_WITHDRAW_VAULT_DEPOSIT = 'POSITION_MANAGER_WITHDRAW_VAULT_DEPOSIT'),
        (r.POSITION_MANAGER_REFINANCE = 'POSITION_MANAGER_REFINANCE'),
        (r.CURATOR_PAGE = 'CURATOR_PAGE'),
        (r.POSITION_MANAGER_FEATURE_CALL_OUT = 'POSITION_MANAGER_FEATURE_CALL_OUT'),
        (r.MERKL_REWARD = 'MERKL_REWARD'),
        (r.CURATOR_RELEVANCE = 'CURATOR_RELEVANCE'),
        (r.MIGRATION_BORROW = 'MIGRATION_BORROW'),
        (r.FE_CALCULATION_NATIVE_APY = 'FE_CALCULATION_NATIVE_APY'),
        (r.EXPLICIT_WRAP_FLOW_ENABLED = 'EXPLICIT_WRAP_FLOW_ENABLED');
      let I = {
          UI_KIT: d.clientEnvs.NEXT_PUBLIC_UI_KIT_FEATURE_FLAG,
          POSITION_HISTORY: d.clientEnvs.NEXT_PUBLIC_POSITION_HISTORY_FEATURE_FLAG,
          SIMULATION_STATE_VIEWER:
            null !== (l = d.clientEnvs.NEXT_PUBLIC_SIMULATION_STATE_VIEWER_FEATURE_FLAG) &&
            void 0 !== l &&
            l,
          MIGRATION_PAGE:
            null !== (o = d.clientEnvs.NEXT_PUBLIC_MIGRATION_PAGE_FEATURE_FLAG) &&
            void 0 !== o &&
            o,
          MOBILE_VAULT_TABS: d.clientEnvs.NEXT_PUBLIC_MOBILE_VAULT_TABS_FEATURE_FLAG,
          MOBILE_MARKET_TABS:
            null !== (a = d.clientEnvs.NEXT_PUBLIC_MOBILE_MARKET_TABS_FEATURE_FLAG) &&
            void 0 !== a &&
            a,
          POSITION_MANAGER_REFINANCE:
            d.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_REFINANCE_FEATURE_FLAG,
          LIGHT_MODE:
            null !== (_ = d.clientEnvs.NEXT_PUBLIC_LIGHT_MODE_FEATURE_FLAG) && void 0 !== _ && _,
          AUTO_DELEVERAGE:
            null !== (A = d.clientEnvs.NEXT_PUBLIC_AUTO_DELEVERAGE_FEATURE_FLAG) &&
            void 0 !== A &&
            A,
          POSITION_MANAGER_MARKET: d.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_MARKET_FEATURE_FLAG,
          POSITION_MANAGER_VAULT: d.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_VAULT_FEATURE_FLAG,
          POSITION_MANAGER_SUPPLY_COLLATERAL:
            d.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_SUPPLY_COLLATERAL_FEATURE_FLAG,
          POSITION_MANAGER_WITHDRAW_COLLATERAL:
            d.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_WITHDRAW_COLLATERAL_FEATURE_FLAG,
          POSITION_MANAGER_BORROW_MORE:
            d.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_BORROW_MORE_FEATURE_FLAG,
          POSITION_MANAGER_REPAY: d.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_REPAY_FEATURE_FLAG,
          POSITION_MANAGER_DEPOSIT_INTO_VAULT:
            d.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_DEPOSIT_INTO_VAULT_FEATURE_FLAG,
          POSITION_MANAGER_WITHDRAW_VAULT_DEPOSIT:
            d.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_WITHDRAW_VAULT_DEPOSIT_FEATURE_FLAG,
          CURATOR_PAGE: d.clientEnvs.NEXT_PUBLIC_CURATOR_PAGE_FEATURE_FLAG,
          POSITION_MANAGER_FEATURE_CALL_OUT:
            d.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_FEATURE_CALL_OUT_FEATURE_FLAG,
          MERKL_REWARD: d.clientEnvs.NEXT_PUBLIC_MERKL_REWARD_FEATURE_FLAG,
          CURATOR_RELEVANCE:
            null !== (E = d.clientEnvs.NEXT_PUBLIC_CURATOR_RELEVANCE_FEATURE_FLAG) &&
            void 0 !== E &&
            E,
          MIGRATION_BORROW: d.clientEnvs.NEXT_PUBLIC_MIGRATION_BORROW_FEATURE_FLAG,
          FE_CALCULATION_NATIVE_APY:
            d.clientEnvs.NEXT_PUBLIC_FE_CALCULATION_NATIVE_APY_FEATURE_FLAG,
          EXPLICIT_WRAP_FLOW_ENABLED: d.clientEnvs.NEXT_PUBLIC_EXPLICIT_WRAP_FLOW_ENABLED,
        },
        u = (0, T.createContext)(null),
        s = (e) => {
          let { enabledFeatures: n } = O();
          return (0, T.useMemo)(() => n[e], [n, e]);
        },
        R = (e) => {
          let { enabledFeatures: n } = O();
          return (0, T.useMemo)(() => {
            let t = Object.entries(e).reduce((e, t) => {
                let [r, i] = t;
                return { ...e, [r]: n[i] };
              }, {}),
              r = Object.values(t).some(Boolean);
            return { ...t, hasAnyEnabled: r };
          }, [n, e]);
        },
        O = () => {
          let e = (0, T.useContext)(u);
          if (!e)
            throw Error(
              'useFeatureFlagsContext must be called inside a FeatureFlagsContextProvider'
            );
          return e;
        };
      n.ZP = (0, T.memo)((e) => {
        let { children: n } = e,
          [t, r] = (0, T.useState)(I),
          i = (0, T.useCallback)((e, n) => r((t) => ({ ...t, [e]: n })), [r]);
        return (0, c.tZ)(u.Provider, {
          value: { enabledFeatures: t, enableFeature: i },
          children: n,
        });
      });
    },
    964: function (e, n, t) {
      t.d(n, {
        H2: function () {
          return a;
        },
        Ji: function () {
          return _;
        },
        yz: function () {
          return A;
        },
      });
      var r = t(40252),
        i = t(4565),
        l = t(12556),
        o = t(35047);
      let a = (e) => {
          var n, t;
          let { rewards: a, netApy: _, nativeApy: A, performanceFee: E, asset: c } = e;
          if (!(0, o.isDefined)(A)) return A;
          if (!(0, o.isDefined)(_)) return _;
          let T =
              null !==
                (n =
                  null == a
                    ? void 0
                    : a.reduce((e, n) => {
                        var t;
                        return e + (null !== (t = n.apr) && void 0 !== t ? t : 0n);
                      }, 0n)) && void 0 !== n
                ? n
                : 0n,
            d = r.MathLib.wMulDown(null != E ? E : 0n, null != A ? A : 0n),
            I =
              c instanceof l.YK
                ? (0, i.safeParseNumber)(null !== (t = c.yield) && void 0 !== t ? t : 0)
                : 0n;
          return r.MathLib.max(_ + d - T - I, 0n);
        },
        _ = (e) => {
          var n;
          let { rewards: t, netApy: i } = e;
          if (!(0, o.isDefined)(i)) return i;
          let l =
            null !==
              (n =
                null == t
                  ? void 0
                  : t.reduce((e, n) => {
                      var t;
                      return e + (null !== (t = n.apr) && void 0 !== t ? t : 0n);
                    }, 0n)) && void 0 !== n
              ? n
              : 0n;
          return r.MathLib.max(i - l, 0n);
        },
        A = (e) => {
          var n;
          let { rewards: t, netRate: r } = e;
          return (0, o.isDefined)(r)
            ? r -
                (null !==
                  (n =
                    null == t
                      ? void 0
                      : t.reduce((e, n) => {
                          var t;
                          return e + (null !== (t = n.apr) && void 0 !== t ? t : 0n);
                        }, 0n)) && void 0 !== n
                  ? n
                  : 0n)
            : r;
        };
    },
    6423: function (e, n, t) {
      t.d(n, {
        B6: function () {
          return o;
        },
        BG: function () {
          return L;
        },
        E3: function () {
          return s;
        },
        Q: function () {
          return I;
        },
        Re: function () {
          return _;
        },
        bF: function () {
          return a;
        },
        ge: function () {
          return O;
        },
        tw: function () {
          return R;
        },
      });
      var r,
        i,
        l,
        o,
        a,
        _,
        A = t(16281),
        E = t.n(A);
      t(12556);
      var c = t(54655);
      t(18313);
      let T = (e) => E()(e, { remove: /[^a-zA-Z0-9 -]/g, strict: !0, trim: !0, lower: !0 }),
        d = (e) => T((0, c.Uaj)(e));
      ((r = o || (o = {})).Vault = 'vault'),
        (r.MyPosition = 'myPosition'),
        (r.ManagePosition = 'managePosition'),
        ((i = a || (a = {})).Curator = 'curator'),
        (i.ManagePosition = 'managePosition');
      let I = (e) => {
          let { chainName: n, vaultAddress: t, vaultName: r, mobileTab: i } = e;
          return '/'
            .concat(n.toLowerCase(), '/vault/')
            .concat(t, '/')
            .concat(d(r))
            .concat(i ? '?tab='.concat(i) : '');
        },
        u = (e) => {
          let { collateralSymbol: n, loanSymbol: t } = e;
          return T(''.concat(n.trim(), '-').concat(t.trim()));
        };
      ((l = _ || (_ = {})).Market = 'market'),
        (l.MyPosition = 'myPosition'),
        (l.ManagePosition = 'managePosition');
      let s = (e) => {
          let {
            chainName: n,
            marketUniqueKey: t,
            collateralSymbol: r,
            loanSymbol: i,
            mobileTab: l,
          } = e;
          return '/'
            .concat(n.toLowerCase(), '/market/')
            .concat(t, '/')
            .concat(u({ collateralSymbol: r, loanSymbol: i }))
            .concat(l ? '?tab='.concat(l) : '');
        },
        R = (e) => {
          let { chainName: n, curatorId: t } = e;
          return '/'.concat(n.toLowerCase(), '/curator/').concat(t);
        },
        O = (e) => {
          let { chainName: n, flags: t, migratablePositionCount: r } = e;
          return [
            { label: 'Earn', value: 'earn', href: '/'.concat(n, '/earn') },
            { label: 'Borrow', value: 'borrow', href: '/'.concat(n, '/borrow') },
            { label: 'Explore', value: 'explore', href: '/'.concat(n, '/explore') },
            ...(t.isMigrationPageEnabled
              ? [
                  {
                    label: 'Migrate',
                    value: 'migrate',
                    href: '/'.concat(n, '/migrate'),
                    counter: r,
                  },
                ]
              : []),
            ...(t.isUiKitAppEnabled
              ? [
                  { label: 'UI Kit', value: 'ui-kit', href: '/'.concat(n, '/ui-kit') },
                  { label: 'UI Chart', value: 'ui-chart', href: '/'.concat(n, '/ui-chart') },
                ]
              : []),
          ];
        },
        L = (e) => {
          let n = e.split('/')[2];
          return 'market' === n ? 'borrow' : 'vault' === n ? 'earn' : n || '/';
        };
    },
  },
]);
