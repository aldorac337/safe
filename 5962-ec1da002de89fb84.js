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
    (e._sentryDebugIds[t] = 'a222a1c3-48c8-4823-8c31-9f885430057e'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-a222a1c3-48c8-4823-8c31-9f885430057e'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5962],
  {
    16586: function (e, t, n) {
      n.d(t, {
        X: function () {
          return a;
        },
      });
      var r = n(78286),
        i = n(58258),
        l = n(54655),
        o = n(50825),
        a = (0, i.memo)((e) => {
          let { point: t } = e;
          return t.noHoverCard
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
                              children: t.title ? ''.concat(t.title, ' campaign') : 'Campaign',
                            }),
                            (0, r.BX)(l.xvT.Body.XXS.Regular, {
                              textAlign: 'center',
                              children: [
                                'This points campaign is administered independently',
                                t.label ? ' by '.concat(t.label) : '',
                                '. The Morpho Association is not responsible for determining eligibility, distribution, or the accuracy of the information displayed.',
                              ],
                            }),
                          ],
                        }),
                        t.link &&
                          (0, r.tZ)(o.Z, {
                            mode: 'external',
                            href: t.link,
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
    27349: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var r = n(78286),
        i = n(58258),
        l = n(4899),
        o = n(40252),
        a = n(12556),
        _ = n(54655),
        c = n(35047),
        A = n(16586),
        E = n(38819);
      let T = (0, E.Z)('div', { target: 'e1x7on5g0' })(
          'width:',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';height:',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';margin:2px;border-radius:50%;background:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.gradient.earth;
          },
          ';'
        ),
        d = (0, E.Z)('div', { target: 'e1x7on5g1' })(
          'display:flex;align-items:center;padding:1px ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';justify-content:space-between;height:',
          (e) => {
            let { theme: t } = e;
            return t.padding.m;
          },
          ';box-sizing:content-box;'
        ),
        I = (0, E.Z)('div', { target: 'e1x7on5g2' })('padding:0 22px;margin:6px 0;'),
        s = (0, E.Z)('div', { target: 'e1x7on5g3' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.primary;
          },
          ';width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;'
        );
      var u = (0, i.memo)((e) => {
        var t, n, i;
        let { asset: o, isVault: a } = e;
        return (0, r.BX)(d, {
          children: [
            (0, r.BX)(_.Kqy, {
              gap: 4,
              align: 'center',
              children: [
                (null == o ? void 0 : o.logoURI)
                  ? (0, r.tZ)(l.default, {
                      src: o.logoURI,
                      alt:
                        null !== (n = null !== (t = o.name) && void 0 !== t ? t : o.symbol) &&
                        void 0 !== n
                          ? n
                          : 'Native Yield token',
                      width: 20,
                      height: 20,
                      style: { margin: '2px' },
                    })
                  : (0, r.tZ)(T, {}),
                (0, r.BX)(_.xvT.Body.XXS.Regular, {
                  children: [
                    (0, c.formatLongString)(null !== (i = o.symbol) && void 0 !== i ? i : '', 8),
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
      let O = {
          market: 'Per year per $1000 borrowed.',
          vault: 'Per year per $1000 deposited.',
          supply: 'Per year per $1000 supplied.',
        },
        R = { market: 'Rate', vault: 'APY', supply: 'Supply APY' },
        N = _.$0l.percent.digits(2).unit('%');
      var g = (0, i.memo)((e) => {
        let {
            rewards: t,
            netApy: n,
            apy: E,
            performanceFee: g,
            variant: L,
            points: P,
            asset: p,
          } = e,
          { theme: M } = (0, _.TCT)(),
          h = (0, i.useMemo)(
            () => _.$0l.percent.trailingZero(!1).digits(2).unit('%').default('0').of(g, 18),
            [g]
          ),
          S = (0, i.useMemo)(() => {
            if (!(0, c.isDefined)(g)) return g;
            if (!(0, c.isDefined)(E)) return E;
            let e = o.MathLib.wMulDown(-g, E);
            return 0n === e ? '0.00%' : N.sign().of(e, 18);
          }, [g, E]),
          v = (0, i.useCallback)(
            (e) => {
              if (e.apr) return c.format.percent.digits(2).unit('%').sign().of(e.apr, 18);
              let { decimals: t } = e.rewardToken;
              return (0, r.tZ)(_.ua7, {
                content: O[L],
                children: (0, r.BX)(_.Kqy, {
                  gap: 3,
                  align: 'center',
                  children: [
                    c.format.short.digits(2).sign().of(e.proportional.rate, t),
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
            [L]
          );
        if (!(0, c.isDefined)(E)) return null;
        let U = 'vault' === L;
        return (0, r.BX)(_.Kqy, {
          style: { padding: ''.concat(M.spacing.s, ' 0') },
          direction: 'column',
          children: [
            (0, r.BX)(d, {
              children: [
                (0, r.BX)(_.Kqy, {
                  gap: 4,
                  align: 'center',
                  children: [
                    (0, r.tZ)(s, {
                      children: (0, r.tZ)(_.JO$, { icon: 'InterestGeneratedGradient20', size: 14 }),
                    }),
                    (0, r.tZ)(_.xvT.Body.XXS.Regular, {
                      color: 'text.body',
                      children: 'Native '.concat(R[L]),
                    }),
                  ],
                }),
                (0, r.tZ)(_.xvT.Body.XXS.Regular, { color: 'text.body', children: N.of(E, 18) }),
              ],
            }),
            p instanceof a.YK && U && (0, r.tZ)(u, { asset: p, isVault: !0 }),
            null == t
              ? void 0
              : t.map((e) => {
                  var t, n;
                  return (0, r.BX)(
                    d,
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
                                      (n =
                                        null !== (t = e.rewardToken.name) && void 0 !== t
                                          ? t
                                          : e.rewardToken.symbol) && void 0 !== n
                                      ? n
                                      : 'Reward token',
                                  width: 20,
                                  height: 20,
                                  style: { margin: '2px' },
                                })
                              : (0, r.tZ)(T, {}),
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
                        (0, r.tZ)(_.xvT.Body.XXS.Regular, { color: 'text.body', children: v(e) }),
                      ],
                    },
                    e.rewardToken.address
                  );
                }),
            U &&
              (0, c.isDefined)(S) &&
              (0, r.BX)(d, {
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
                      (0, r.tZ)(_.Vp9, { label: h }),
                    ],
                  }),
                  (0, r.tZ)(_.xvT.Body.XXS.Regular, { color: 'text.body', children: S }),
                ],
              }),
            (0, c.isDefined)(n) &&
              (0, r.BX)(d, {
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
                        children: U ? 'Net APY' : 'Net Rate',
                      }),
                    ],
                  }),
                  (0, r.BX)(_.xvT.Body.XXS.Regular, {
                    color: 'text.interactive.active',
                    children: ['=', N.of(n, 18)],
                  }),
                ],
              }),
            (p instanceof a.YK && !U) || (null == P ? void 0 : P.length)
              ? (0, r.tZ)(I, { children: (0, r.tZ)(_.Z0O, {}) })
              : null,
            p instanceof a.YK && !U && (0, r.tZ)(u, { asset: p }),
            P &&
              P.length > 0 &&
              (null == P
                ? void 0
                : P.map((e, t) =>
                    (0, r.BX)(
                      d,
                      {
                        children: [
                          (0, r.BX)(_.Kqy, {
                            gap: 4,
                            align: 'center',
                            children: [
                              (0, r.tZ)(_.JO$, { icon: 'PointsPlain20', color: 'icon.primary' }),
                              e.label && (0, r.tZ)(_.Vp9, { label: e.label }),
                              (0, r.tZ)(A.X, { point: e }),
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
                      'point-'.concat(t)
                    )
                  )),
          ],
        });
      });
    },
    26726: function (e, t, n) {
      n.d(t, {
        TP: function () {
          return i;
        },
        hz: function () {
          return u;
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
        c,
        A = n(78286),
        E = n(58258),
        T = n(18313);
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
        (r.POSITION_MANAGER_FEATURE_CALL_OUT = 'POSITION_MANAGER_FEATURE_CALL_OUT'),
        (r.MERKL_REWARD = 'MERKL_REWARD');
      let d = {
          UI_KIT: T.clientEnvs.NEXT_PUBLIC_UI_KIT_FEATURE_FLAG,
          POSITION_HISTORY: T.clientEnvs.NEXT_PUBLIC_POSITION_HISTORY_FEATURE_FLAG,
          SIMULATION_STATE_VIEWER:
            null !== (l = T.clientEnvs.NEXT_PUBLIC_SIMULATION_STATE_VIEWER_FEATURE_FLAG) &&
            void 0 !== l &&
            l,
          MIGRATION_PAGE:
            null !== (o = T.clientEnvs.NEXT_PUBLIC_MIGRATION_PAGE_FEATURE_FLAG) &&
            void 0 !== o &&
            o,
          MOBILE_VAULT_TABS: T.clientEnvs.NEXT_PUBLIC_MOBILE_VAULT_TABS_FEATURE_FLAG,
          MOBILE_MARKET_TABS:
            null !== (a = T.clientEnvs.NEXT_PUBLIC_MOBILE_MARKET_TABS_FEATURE_FLAG) &&
            void 0 !== a &&
            a,
          POSITION_MANAGER_REFINANCE:
            T.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_REFINANCE_FEATURE_FLAG,
          LIGHT_MODE:
            null !== (_ = T.clientEnvs.NEXT_PUBLIC_LIGHT_MODE_FEATURE_FLAG) && void 0 !== _ && _,
          AUTO_DELEVERAGE:
            null !== (c = T.clientEnvs.NEXT_PUBLIC_AUTO_DELEVERAGE_FEATURE_FLAG) &&
            void 0 !== c &&
            c,
          POSITION_MANAGER_MARKET: T.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_MARKET_FEATURE_FLAG,
          POSITION_MANAGER_VAULT: T.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_VAULT_FEATURE_FLAG,
          POSITION_MANAGER_SUPPLY_COLLATERAL:
            T.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_SUPPLY_COLLATERAL_FEATURE_FLAG,
          POSITION_MANAGER_WITHDRAW_COLLATERAL:
            T.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_WITHDRAW_COLLATERAL_FEATURE_FLAG,
          POSITION_MANAGER_BORROW_MORE:
            T.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_BORROW_MORE_FEATURE_FLAG,
          POSITION_MANAGER_REPAY: T.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_REPAY_FEATURE_FLAG,
          POSITION_MANAGER_DEPOSIT_INTO_VAULT:
            T.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_DEPOSIT_INTO_VAULT_FEATURE_FLAG,
          POSITION_MANAGER_WITHDRAW_VAULT_DEPOSIT:
            T.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_WITHDRAW_VAULT_DEPOSIT_FEATURE_FLAG,
          POSITION_MANAGER_FEATURE_CALL_OUT:
            T.clientEnvs.NEXT_PUBLIC_POSITION_MANAGER_FEATURE_CALL_OUT_FEATURE_FLAG,
          MERKL_REWARD: T.clientEnvs.NEXT_PUBLIC_MERKL_REWARD_FEATURE_FLAG,
        },
        I = (0, E.createContext)(null),
        s = (e) => {
          let { enabledFeatures: t } = O();
          return (0, E.useMemo)(() => t[e], [t, e]);
        },
        u = (e) => {
          let { enabledFeatures: t } = O();
          return (0, E.useMemo)(() => {
            let n = Object.entries(e).reduce((e, n) => {
                let [r, i] = n;
                return { ...e, [r]: t[i] };
              }, {}),
              r = Object.values(n).some(Boolean);
            return { ...n, hasAnyEnabled: r };
          }, [t, e]);
        },
        O = () => {
          let e = (0, E.useContext)(I);
          if (!e)
            throw Error(
              'useFeatureFlagsContext must be called inside a FeatureFlagsContextProvider'
            );
          return e;
        };
      t.ZP = (0, E.memo)((e) => {
        let { children: t } = e,
          [n, r] = (0, E.useState)(d),
          i = (0, E.useCallback)((e, t) => r((n) => ({ ...n, [e]: t })), [r]);
        return (0, A.tZ)(I.Provider, {
          value: { enabledFeatures: n, enableFeature: i },
          children: t,
        });
      });
    },
    6423: function (e, t, n) {
      n.d(t, {
        B6: function () {
          return l;
        },
        BG: function () {
          return u;
        },
        E3: function () {
          return I;
        },
        Q: function () {
          return T;
        },
        Re: function () {
          return o;
        },
        ge: function () {
          return s;
        },
      });
      var r,
        i,
        l,
        o,
        a = n(16281),
        _ = n.n(a);
      n(12556);
      var c = n(54655);
      n(18313);
      let A = (e) => _()(e, { remove: /[^a-zA-Z0-9 -]/g, strict: !0, trim: !0, lower: !0 }),
        E = (e) => A((0, c.Uaj)(e));
      ((r = l || (l = {})).Vault = 'vault'),
        (r.MyPosition = 'myPosition'),
        (r.ManagePosition = 'managePosition');
      let T = (e) => {
          let { chainName: t, vaultAddress: n, vaultName: r, mobileTab: i } = e;
          return '/'
            .concat(t.toLowerCase(), '/vault/')
            .concat(n, '/')
            .concat(E(r))
            .concat(i ? '?tab='.concat(i) : '');
        },
        d = (e) => {
          let { collateralSymbol: t, loanSymbol: n } = e;
          return A(''.concat(t.trim(), '-').concat(n.trim()));
        };
      ((i = o || (o = {})).Market = 'market'),
        (i.MyPosition = 'myPosition'),
        (i.ManagePosition = 'managePosition');
      let I = (e) => {
          let {
            chainName: t,
            marketUniqueKey: n,
            collateralSymbol: r,
            loanSymbol: i,
            mobileTab: l,
          } = e;
          return '/'
            .concat(t.toLowerCase(), '/market/')
            .concat(n, '/')
            .concat(d({ collateralSymbol: r, loanSymbol: i }))
            .concat(l ? '?tab='.concat(l) : '');
        },
        s = (e) => {
          let { chainName: t, flags: n, migratablePositionCounter: r } = e;
          return [
            { label: 'Earn', value: 'earn', href: '/'.concat(t, '/earn') },
            { label: 'Borrow', value: 'borrow', href: '/'.concat(t, '/borrow') },
            { label: 'Explore', value: 'explore', href: '/'.concat(t, '/explore') },
            ...(n.isMigrationPageEnabled
              ? [
                  {
                    label: 'Migrate',
                    value: 'migrate',
                    href: '/'.concat(t, '/migrate'),
                    counter: r,
                  },
                ]
              : []),
            ...(n.isUiKitAppEnabled
              ? [
                  { label: 'UI Kit', value: 'ui-kit', href: '/'.concat(t, '/ui-kit') },
                  { label: 'UI Chart', value: 'ui-chart', href: '/'.concat(t, '/ui-chart') },
                ]
              : []),
          ];
        },
        u = (e) => {
          let t = e.split('/')[2];
          return 'market' === t ? 'borrow' : 'vault' === t ? 'earn' : t || '/';
        };
    },
  },
]);
