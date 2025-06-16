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
    (e._sentryDebugIds[t] = '4f513f21-2a88-4637-b44a-1e5cd5003b48'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-4f513f21-2a88-4637-b44a-1e5cd5003b48'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5208, 242],
  {
    77943: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 40768));
    },
    40768: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var i = r(78286),
        a = r(54655),
        n = r(359),
        s = r(51029),
        l = r(68690),
        o = r(4078),
        d = r(89991);
      function u() {
        let {
            account: { isConnected: e },
          } = (0, d.Z_)(),
          t = (0, a.dD4)();
        return (0, i.BX)(a.Kqy, {
          direction: 'column',
          basis: '100%',
          children: [
            (0, i.BX)(o.default, {
              withOverflowingBottomBorder: !0,
              hasLargerVerticalPadding: !0,
              withoutAside: !0,
              children: [!e && (0, i.tZ)(l.Z, {}), e && (0, i.tZ)(n.default, {})],
            }),
            (0, i.tZ)(o.default, {
              withoutAside: !0,
              style: { flexGrow: 1 },
              children: (0, i.tZ)(s.x, { withHeader: !t }),
            }),
          ],
        });
      }
    },
    30260: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return p;
          },
        });
      var i = r(78286),
        a = r(58258),
        n = r(31560),
        s = r(70064),
        l = r(4366),
        o = r(98049),
        d = r(75519),
        u = (0, a.memo)(() =>
          (0, i.tZ)(n.$e, { message: 'Something went wrong while loading My Deposits chart.' })
        ),
        c = r(10190),
        h = (0, a.memo)(() => {
          let { isSmallDashboard: e, isDashboardExpanded: t } = (0, l.iv)();
          return (0, i.tZ)(c.UT, {
            message: t
              ? 'Something went wrong while loading the APY card.'
              : 'Something went wrong.',
            isSmall: e,
            isExpanded: t,
          });
        }),
        p = (0, a.memo)((e) => {
          let { chartMyDepositsSlot: t, earnApyCardSlot: r } = e,
            {
              isDashboardExpanded: c,
              isSmallDashboard: p,
              setIsDashboardHovered: f,
              onClickToggleDashboard: m,
            } = (0, l.iv)();
          return (0, i.tZ)(n.q8, {
            isExpanded: c,
            isSmall: p,
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            onClick: m,
            chartMyDepositsSlot: (0, i.tZ)(s.Z, {
              fallback: (0, i.tZ)(u, {}),
              children: (0, i.tZ)(a.Suspense, { fallback: (0, i.tZ)(d.Z, {}), children: t }),
            }),
            earnApyCardSlot: (0, i.tZ)(s.Z, {
              fallback: (0, i.tZ)(h, {}),
              children: (0, i.tZ)(a.Suspense, { fallback: (0, i.tZ)(o.Z, {}), children: r }),
            }),
          });
        });
    },
    5615: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return p;
        },
      });
      var i = r(78286),
        a = r(58258),
        n = r(38819),
        s = r(54655),
        l = r(51712),
        o = r(76600),
        d = r(70064),
        u = r(39105),
        c = (0, a.memo)((e) => {
          let { children: t } = e;
          return (0, i.tZ)(a.Suspense, { fallback: (0, i.tZ)(u.Z, {}), children: t });
        });
      let h = (0, n.Z)(s.Kqy, { target: 'evv7z8i0' })(
        'width:100%;display:flex;flex-direction:column;align-items:center;'
      );
      var p = (0, a.memo)((e) => {
        let { dashboardCardSlot: t, vaultPositionsTableSlot: r, positionShortcutsSlot: n } = e;
        return (0, i.BX)(h, {
          gap: { base: 10, xs: 's' },
          children: [
            t,
            (0, i.tZ)(d.K, {
              fallback: (0, i.tZ)(l.c, {}),
              children: (0, i.tZ)(c, { children: r }),
            }),
            (0, i.tZ)(d.K, {
              fallback: (0, i.tZ)(s.xvT.Body.XXXS.Regular, {
                color: 'text.secondary',
                children: 'Something went wrong while loading your positions.',
              }),
              children: (0, i.tZ)(a.Suspense, {
                fallback: (0, i.tZ)(o._, { loading: !0 }),
                children: n,
              }),
            }),
          ],
        });
      });
    },
    359: function (e, t, r) {
      'use strict';
      var i = r(78286),
        a = r(58258),
        n = r(76600),
        s = r(17482),
        l = r(39105),
        o = r(30260),
        d = r(5615);
      t.default = (0, a.memo)((e) => {
        let {} = e;
        return (0, i.tZ)(d.default, {
          dashboardCardSlot: (0, i.tZ)(o.default, {
            chartMyDepositsSlot: (0, i.tZ)(s.Pr, {}),
            earnApyCardSlot: (0, i.tZ)(s.eH, {}),
          }),
          vaultPositionsTableSlot: (0, i.tZ)(l.Z, {}),
          positionShortcutsSlot: (0, i.tZ)(n._, { loading: !0 }),
        });
      });
    },
    98049: function (e, t, r) {
      'use strict';
      var i = r(78286),
        a = r(58258),
        n = r(12597),
        s = r(4366);
      t.Z = (0, a.memo)(() => {
        let { isDashboardExpanded: e, isSmallDashboard: t } = (0, s.iv)();
        return (0, i.tZ)(n.o, { isExpanded: e, small: t });
      });
    },
    75519: function (e, t, r) {
      'use strict';
      var i = r(78286),
        a = r(58258),
        n = r(31560),
        s = r(4366);
      t.Z = (0, a.memo)(() => {
        let { isDashboardExpanded: e, isSmallDashboard: t } = (0, s.iv)();
        return (0, i.tZ)(n.gy, { isExpanded: e, isSmallDashboard: t });
      });
    },
    39105: function (e, t, r) {
      'use strict';
      var i = r(78286),
        a = r(58258),
        n = r(54655);
      t.Z = (0, a.memo)((e) => {
        let { excludeFilter: t } = e,
          r = (0, n.dD4)();
        return (0, i.BX)(n.Kqy, {
          direction: 'column',
          fullWidth: !0,
          children: [
            !t &&
              !r &&
              (0, i.tZ)(n.Kqy, {
                style: { margin: '0 0 10px' },
                children: (0, i.tZ)(n.OdW, { height: 40, width: '100%', borderRadius: '8px' }),
              }),
            (0, i.BX)(n.Kqy, {
              gap: { base: 10, s: 's' },
              direction: 'column',
              fullWidth: !0,
              children: [
                (0, i.tZ)(n.OdW, {
                  height: r ? 154 : 60,
                  width: '100%',
                  borderRadius: r ? '20px' : '8px',
                }),
                (0, i.tZ)(n.OdW, {
                  height: r ? 154 : 60,
                  width: '100%',
                  borderRadius: r ? '20px' : '8px',
                }),
              ],
            }),
          ],
        });
      });
    },
    44215: function (e, t, r) {
      'use strict';
      r(58258), r(54655), r(31560), r(4366), r(98049), r(75519), r(39105);
    },
    17482: function (e, t, r) {
      'use strict';
      r.d(t, {
        Pr: function () {
          return a.Z;
        },
        eH: function () {
          return i.Z;
        },
      });
      var i = r(98049),
        a = r(75519);
      r(44215);
    },
    51029: function (e, t, r) {
      'use strict';
      r.d(t, {
        x: function () {
          return o;
        },
      }),
        r(44215);
      var i = r(78286),
        a = r(58258),
        n = r(54655),
        s = r(86352),
        l = (0, a.memo)((e) => {
          let { rows: t } = e,
            r = (0, n.dD4)();
          return (0, i.tZ)(n.Kqy, {
            direction: 'column',
            gap: { s: 's', base: 10 },
            fullWidth: !0,
            height: 'unset',
            children: Array.from({ length: t }).map((e, t) =>
              (0, i.tZ)(
                n.Kqy,
                {
                  fullWidth: !0,
                  height: 'unset',
                  children: (0, i.tZ)(n.OdW, {
                    height: r ? 145 : 60,
                    width: '100%',
                    borderRadius: r ? '20px' : '8px',
                  }),
                },
                t
              )
            ),
          });
        }),
        o = (0, a.memo)((e) => {
          let { withFilters: t = !0, withPagination: r = !0, withHeader: a = !0, rows: o = 10 } = e,
            d = (0, n.dD4)();
          return (0, i.BX)(n.Kqy, {
            direction: 'column',
            gap: 20,
            children: [
              t &&
                (0, i.tZ)(s.H, {
                  disabled: !0,
                  filters: { assetIdsFilter: [], curatorAddressesFilter: [], search: '' },
                  onFiltersChange: () => {},
                  withNetworkFilter: !1,
                  withGlobalSearch: !1,
                  assets: [],
                  curators: [],
                }),
              (0, i.BX)(n.Kqy, {
                direction: 'column',
                children: [
                  a &&
                    !d &&
                    (0, i.tZ)(n.Kqy, {
                      style: { margin: '0 0 10px' },
                      children: (0, i.tZ)(n.OdW, {
                        height: 40,
                        width: '100%',
                        borderRadius: '8px',
                      }),
                    }),
                  (0, i.tZ)(l, { rows: o }),
                  r &&
                    (0, i.BX)(n.Kqy, {
                      justify: 'center',
                      align: 'center',
                      gap: 's',
                      marginTop: '20px',
                      children: [
                        (0, i.tZ)(n.OdW, { height: 32, width: 32, borderRadius: '50%' }),
                        (0, i.tZ)(n.OdW, { height: 20, width: 30, borderRadius: '4px' }),
                        (0, i.tZ)(n.OdW, { height: 32, width: 32, borderRadius: '50%' }),
                      ],
                    }),
                ],
              }),
            ],
          });
        });
    },
    90242: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        });
      var i = r(78286),
        a = r(47567),
        n = r(34097);
      function s() {
        return (0, i.tZ)(a.Z, {
          type: n.RX.Earn,
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
    71016: function (e, t, r) {
      'use strict';
      r.d(t, {
        X: function () {
          return i.Z;
        },
      }),
        r(23698);
      var i = r(68905);
    },
    86352: function (e, t, r) {
      'use strict';
      r.d(t, {
        H: function () {
          return p;
        },
      });
      var i = r(78286),
        a = r(58258),
        n = r(54655),
        s = r(90242),
        l = r(71016),
        o = r(15341);
      function d(e, t) {
        var r, i;
        return (
          null !==
            (i =
              null === (r = e.addresses) || void 0 === r
                ? void 0
                : r.every((e) => t.includes(e.address))) &&
          void 0 !== i &&
          i
        );
      }
      var u = (0, a.memo)((e) => {
          let {
              curators: t,
              curatorAddressesFilter: r,
              chainIdsFilter: s,
              handleCuratorAddressesFilterChange: l,
              disabled: u,
            } = e,
            [c, h] = (0, a.useState)(t),
            p = (0, a.useMemo)(
              () =>
                c
                  .filter((e) => {
                    var t;
                    return (
                      null == s ||
                      !s.length ||
                      (null === (t = e.addresses) || void 0 === t
                        ? void 0
                        : t.some((e) => s.includes(e.chainId)))
                    );
                  })
                  .map((e) => {
                    var t, i;
                    return {
                      id: e.id,
                      label: e.name,
                      value:
                        null !==
                          (i =
                            null === (t = e.addresses) || void 0 === t
                              ? void 0
                              : t.map((e) => e.address)) && void 0 !== i
                          ? i
                          : [],
                      img: e.image,
                      isChecked: d(e, r),
                    };
                  }),
              [r, c, s]
            ),
            f = (0, a.useCallback)(() => {
              h(
                [...t].sort((e, t) => {
                  let i = Number(d(e, r));
                  return Number(d(t, r)) - i || e.name.localeCompare(t.name);
                })
              );
            }, [t, r]),
            m = (0, a.useCallback)(
              (e) => {
                l((0, o.Z)(r, e));
              },
              [r, l]
            );
          return (0, i.BX)(n.Kqy, {
            align: 'center',
            gap: 'xs',
            children: [
              (0, i.tZ)(n.xvT.Body.XXXS.Regular, { color: 'text.body', children: 'Curator:' }),
              (0, i.tZ)(n.h4n, {
                items: p,
                sortItems: f,
                toggleItem: m,
                clear: () => l([]),
                inputPlaceholder: 'Search for curator',
                clearTooltipText: 'Remove Curator filter',
                withSeparator: !0,
                disabled: u,
              }),
            ],
          });
        }),
        c = r(23698);
      let h = (0, r(38819).Z)(n.Kqy, { target: 'e1y2xt820' })(
        'justify-content:space-between;flex:1;',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.down('m');
        },
        '{justify-content:flex-start;}'
      );
      var p = (0, a.memo)((e) => {
        var t;
        let {
            filters: r,
            curators: o,
            onFiltersChange: d,
            disabled: p,
            withNetworkFilter: f,
            withGlobalSearch: m,
            assets: g,
            editPropertiesSlot: b,
          } = e,
          Z = (0, n.dD4)(),
          { toggleDialog: y } = (0, n.DAv)(),
          v = (0, a.useCallback)(
            (e) => {
              d({ ...r, assetIdsFilter: e });
            },
            [d, r]
          ),
          w = (0, a.useCallback)(
            (e) => {
              d({
                chainIdsFilter: e,
                search: r.search,
                assetIdsFilter: [],
                curatorAddressesFilter: [],
              });
            },
            [d, r]
          ),
          k = (0, a.useCallback)(
            (e) => {
              d({ ...r, curatorAddressesFilter: e });
            },
            [d, r]
          ),
          x = (0, a.useCallback)(
            (e) => {
              d({ ...r, search: e.trim() });
            },
            [d, r]
          );
        return (0, i.BX)(n.Kqy, {
          justify: 'space-between',
          direction: { base: 'row', m: 'column' },
          gap: 's',
          children: [
            (0, i.BX)(h, {
              children: [
                (0, i.BX)(n.Kqy, {
                  gap: '12px 32px',
                  align: 'center',
                  wrap: 'wrap',
                  children: [
                    f &&
                      (0, i.tZ)(c.Z, {
                        chainIdsFilter: null !== (t = r.chainIdsFilter) && void 0 !== t ? t : [],
                        handleChainIdsFilterChange: w,
                        disabled: p,
                      }),
                    (0, i.tZ)(l.X, {
                      label: 'deposit',
                      assets: g,
                      assetIdsFilter: r.assetIdsFilter,
                      chainIdsFilter: f ? r.chainIdsFilter : void 0,
                      handleAssetIdsFilterChange: v,
                      disabled: p,
                    }),
                    (0, i.tZ)(u, {
                      curators: o,
                      curatorAddressesFilter: r.curatorAddressesFilter,
                      chainIdsFilter: f ? r.chainIdsFilter : void 0,
                      handleCuratorAddressesFilterChange: k,
                      disabled: p,
                    }),
                  ],
                }),
                (0, i.tZ)(n.ua7, {
                  content: 'How Earn works',
                  children: (0, i.tZ)(n.zxk, {
                    variant: 'ghost',
                    size: 'small',
                    iconAlone: 'QuestionPlain20',
                    color: 'icon.secondary',
                    onClick: function () {
                      y((0, i.tZ)(s.default, {}), { closable: !0, fullSize: !0 });
                    },
                  }),
                }),
              ],
            }),
            (0, i.BX)(n.Kqy, {
              gap: 's',
              direction: { base: 'row', xs: 'column' },
              children: [
                b,
                (0, i.tZ)(n.olm, {
                  placeholder: 'Filter vaults',
                  width: 200,
                  fullWidth: Z,
                  value: r.search,
                  onChange: x,
                  disabled: p,
                  debounceTime: 500,
                  isGlobalSearchInput: m,
                }),
              ],
            }),
          ],
        });
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        9913, 1811, 3261, 3173, 3248, 7287, 6929, 3391, 3515, 6489, 4516, 3613, 1594, 9851, 4655,
        825, 8205, 9255, 7567, 9510, 6266, 6269, 8577, 1744,
      ],
      function () {
        return e((e.s = 77943));
      }
    ),
      (_N_E = e.O());
  },
]);
