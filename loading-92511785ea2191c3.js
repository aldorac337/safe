try {
  let t =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    e = new t.Error().stack;
  e &&
    ((t._sentryDebugIds = t._sentryDebugIds || {}),
    (t._sentryDebugIds[e] = 'c4c16c99-3625-46bd-9221-af85dc9a2265'),
    (t._sentryDebugIdIdentifier = 'sentry-dbid-c4c16c99-3625-46bd-9221-af85dc9a2265'));
} catch (t) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7363, 9286],
  {
    2453: function (t, e, i) {
      Promise.resolve().then(i.bind(i, 89701));
    },
    89701: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, {
          default: function () {
            return c;
          },
        });
      var r = i(78286),
        n = i(54655),
        o = i(3823),
        l = i(84108),
        a = i(68690),
        d = i(4078),
        s = i(89991);
      function c() {
        let {
            account: { isConnected: t },
          } = (0, s.Z_)(),
          e = (0, n.dD4)();
        return (0, r.BX)(n.Kqy, {
          direction: 'column',
          basis: '100%',
          children: [
            (0, r.BX)(d.default, {
              withOverflowingBottomBorder: !0,
              hasLargerVerticalPadding: !0,
              withoutAside: !0,
              children: [!t && (0, r.tZ)(a.Z, {}), t && (0, r.tZ)(o.default, {})],
            }),
            (0, r.tZ)(d.default, {
              withoutAside: !0,
              style: { flexGrow: 1 },
              children: (0, r.tZ)(l.r, { withHeader: !e }),
            }),
          ],
        });
      }
    },
    57788: function (t, e, i) {
      'use strict';
      i.d(e, {
        default: function () {
          return f;
        },
      });
      var r = i(78286),
        n = i(58258),
        o = i(38819),
        l = i(54655),
        a = i(51712),
        d = i(76600),
        s = i(70064),
        c = i(94087),
        u = (0, n.memo)((t) => {
          let { children: e } = t;
          return (0, r.tZ)(n.Suspense, { fallback: (0, r.tZ)(c.Z, {}), children: e });
        });
      let h = (0, o.Z)(l.Kqy, { target: 'e1xswx7u0' })(
        'width:100%;display:flex;flex-direction:column;align-items:center;gap:10px;',
        (t) => {
          let { theme: e } = t;
          return e.breakpoints.down('xs');
        },
        '{gap:',
        (t) => {
          let { theme: e } = t;
          return e.spacing.s;
        },
        ';}'
      );
      var f = (0, n.memo)((t) => {
        let { dashboardCardSlot: e, marketPositionsTableSlot: i, positionShortcutsSlot: o } = t;
        return (0, r.BX)(h, {
          children: [
            e,
            (0, r.tZ)(s.K, {
              fallback: (0, r.tZ)(a.c, {}),
              children: (0, r.tZ)(u, { children: i }),
            }),
            (0, r.tZ)(s.K, {
              fallback: (0, r.tZ)(l.xvT.Body.XXXS.Regular, {
                color: 'text.secondary',
                children: 'Something went wrong while loading your positions.',
              }),
              children: (0, r.tZ)(n.Suspense, {
                fallback: (0, r.tZ)(d._, { loading: !0 }),
                children: o,
              }),
            }),
          ],
        });
      });
    },
    99746: function (t, e, i) {
      'use strict';
      i.d(e, {
        R: function () {
          return r.default;
        },
      });
      var r = i(1218);
    },
    1218: function (t, e, i) {
      'use strict';
      var r = i(78286),
        n = i(58258),
        o = i(12597),
        l = i(4366);
      e.default = (0, n.memo)(() => {
        let { isSmallDashboard: t, isDashboardExpanded: e } = (0, l.iv)();
        return (0, r.tZ)(o.UT, {
          message: e
            ? 'Something went wrong while loading the Rate card.'
            : 'Something went wrong.',
          isSmall: t,
          isExpanded: e,
        });
      });
    },
    52108: function (t, e, i) {
      'use strict';
      i.d(e, {
        N: function () {
          return r.default;
        },
      });
      var r = i(13139);
    },
    13139: function (t, e, i) {
      'use strict';
      var r = i(78286),
        n = i(58258),
        o = i(31560);
      e.default = (0, n.memo)(() =>
        (0, r.tZ)(o.$e, { message: 'Something went wrong while loading My Borrow chart.' })
      );
    },
    8617: function (t, e, i) {
      'use strict';
      i.r(e);
      var r = i(78286),
        n = i(58258),
        o = i(31560),
        l = i(70064),
        a = i(4366),
        d = i(61813),
        s = i(99746),
        c = i(52108);
      e.default = (0, n.memo)((t) => {
        let { chartMyBorrowSlot: e, netBorrowApySlot: i } = t,
          {
            isDashboardExpanded: u,
            isSmallDashboard: h,
            setIsDashboardHovered: f,
            onClickToggleDashboard: p,
          } = (0, a.iv)();
        return (0, r.tZ)(o.q8, {
          isExpanded: u,
          isSmall: h,
          onMouseEnter: () => f(!0),
          onMouseLeave: () => f(!1),
          onClick: p,
          chartMyDepositsSlot: (0, r.tZ)(l.Z, {
            fallback: (0, r.tZ)(c.N, {}),
            children: (0, r.tZ)(n.Suspense, { fallback: (0, r.tZ)(d.r_, {}), children: e }),
          }),
          earnApyCardSlot: (0, r.tZ)(l.Z, {
            fallback: (0, r.tZ)(s.R, {}),
            children: (0, r.tZ)(n.Suspense, { fallback: (0, r.tZ)(d.Us, {}), children: i }),
          }),
        });
      });
    },
    3823: function (t, e, i) {
      'use strict';
      i.d(e, {
        default: function () {
          return c;
        },
      });
      var r = i(78286),
        n = i(58258),
        o = i(76600),
        l = i(61813),
        a = i(94087),
        d = i(57788),
        s = i(8617);
      i(99746), i(52108);
      var c = (0, n.memo)((t) => {
        let {} = t;
        return (0, r.tZ)(d.default, {
          dashboardCardSlot: (0, r.tZ)(s.default, {
            chartMyBorrowSlot: (0, r.tZ)(l.r_, {}),
            netBorrowApySlot: (0, r.tZ)(l.Us, {}),
          }),
          marketPositionsTableSlot: (0, r.tZ)(a.Z, {}),
          positionShortcutsSlot: (0, r.tZ)(o._, { loading: !0 }),
        });
      });
    },
    36614: function (t, e, i) {
      'use strict';
      var r = i(78286),
        n = i(58258),
        o = i(12597),
        l = i(4366);
      e.Z = (0, n.memo)(() => {
        let { isDashboardExpanded: t, isSmallDashboard: e } = (0, l.iv)();
        return (0, r.tZ)(o.o, { isExpanded: t, small: e });
      });
    },
    7850: function (t, e, i) {
      'use strict';
      var r = i(78286),
        n = i(58258),
        o = i(31560),
        l = i(4366);
      e.Z = (0, n.memo)(() => {
        let { isDashboardExpanded: t, isSmallDashboard: e } = (0, l.iv)();
        return (0, r.tZ)(o.gy, { isExpanded: t, isSmallDashboard: e });
      });
    },
    94087: function (t, e, i) {
      'use strict';
      var r = i(78286),
        n = i(58258),
        o = i(54655);
      e.Z = (0, n.memo)(() => {
        let t = (0, o.dD4)();
        return (0, r.BX)(o.Kqy, {
          direction: 'column',
          fullWidth: !0,
          children: [
            !t &&
              (0, r.tZ)(o.Kqy, {
                marginTop: 0,
                marginRight: 0,
                marginBottom: 10,
                marginLeft: 0,
                children: (0, r.tZ)(o.OdW, { height: 40, width: '100%', borderRadius: '8px' }),
              }),
            (0, r.tZ)(o.Kqy, {
              gap: { base: 10, s: 's' },
              direction: 'column',
              fullWidth: !0,
              children: t
                ? (0, r.BX)(o.Kqy, {
                    gap: 'm',
                    direction: 'column',
                    minHeight: '189px',
                    background: 'background.bloc',
                    fullWidth: !0,
                    borderRadius: '20px',
                    paddingBlock: 'm',
                    paddingInline: 's',
                    children: [
                      (0, r.BX)(o.Kqy, {
                        direction: 'column',
                        gap: 's',
                        children: [
                          (0, r.tZ)(o.OdW, { borderRadius: '20px', width: 142, height: 24 }),
                          (0, r.tZ)(o.OdW, { borderRadius: '20px', width: 142, height: 24 }),
                        ],
                      }),
                      (0, r.tZ)(o.Z0O, {}),
                      (0, r.tZ)(o.Kqy, {
                        direction: 'column',
                        gap: 's',
                        children: (0, r.tZ)(o.OdW, {
                          borderRadius: '20px',
                          width: 142,
                          height: 24,
                        }),
                      }),
                    ],
                  })
                : (0, r.BX)(r.HY, {
                    children: [
                      (0, r.tZ)(o.OdW, { height: 60, width: '100%', borderRadius: '8px' }),
                      (0, r.tZ)(o.OdW, {
                        height: t ? 154 : 60,
                        width: '100%',
                        borderRadius: '8px',
                      }),
                    ],
                  }),
            }),
          ],
        });
      });
    },
    84675: function (t, e, i) {
      'use strict';
      var r = i(78286),
        n = i(58258),
        o = i(54655),
        l = i(31560),
        a = i(4366),
        d = i(36614),
        s = i(7850),
        c = i(94087);
      e.Z = (0, n.memo)(() => {
        let {
          isDashboardExpanded: t,
          isSmallDashboard: e,
          setIsDashboardHovered: i,
          onClickToggleDashboard: n,
        } = (0, a.iv)();
        return (0, r.BX)(o.Kqy, {
          fullWidth: !0,
          gap: 's',
          direction: 'column',
          children: [
            (0, r.tZ)(l.q8, {
              chartMyDepositsSlot: (0, r.tZ)(s.Z, {}),
              earnApyCardSlot: (0, r.tZ)(d.Z, {}),
              isExpanded: t,
              isSmall: e,
              onMouseEnter: () => i(!0),
              onMouseLeave: () => i(!1),
              onClick: n,
            }),
            (0, r.tZ)(c.Z, {}),
          ],
        });
      });
    },
    61813: function (t, e, i) {
      'use strict';
      i.d(e, {
        Us: function () {
          return r.Z;
        },
        r_: function () {
          return n.Z;
        },
      });
      var r = i(36614),
        n = i(7850);
      i(84675);
    },
    84108: function (t, e, i) {
      'use strict';
      i.d(e, {
        u: function () {
          return r.Z;
        },
        r: function () {
          return s;
        },
      });
      var r = i(84675),
        n = i(78286),
        o = i(58258),
        l = i(54655),
        a = i(550),
        d = (0, o.memo)((t) => {
          let { rows: e } = t,
            i = (0, l.dD4)();
          return (0, n.tZ)(l.Kqy, {
            direction: 'column',
            gap: { base: 10, s: '12px' },
            fullWidth: !0,
            height: 'unset',
            children: Array.from({ length: e }).map((t, e) =>
              (0, n.tZ)(
                l.Kqy,
                {
                  fullWidth: !0,
                  height: 'unset',
                  children: (0, n.tZ)(l.OdW, {
                    height: i ? 154 : 60,
                    width: '100%',
                    borderRadius: i ? '20px' : '8px',
                  }),
                },
                e
              )
            ),
          });
        }),
        s = (0, o.memo)((t) => {
          let { withFilters: e = !0, withPagination: i = !0, withHeader: r = !0, rows: o = 10 } = t;
          return (0, n.BX)(l.Kqy, {
            direction: 'column',
            gap: 20,
            children: [
              e &&
                (0, n.tZ)(a.Z, {
                  disabled: !0,
                  collateralAssets: [],
                  loanAssets: [],
                  filters: { collateralAssetIdsFilter: [], loanAssetIdsFilter: [], search: '' },
                  onFiltersChange: () => {},
                  withNetworkFilter: !1,
                  withGlobalSearch: !1,
                }),
              (0, n.BX)(l.Kqy, {
                direction: 'column',
                children: [
                  r &&
                    (0, n.tZ)(l.Kqy, {
                      style: { margin: '0 0 10px' },
                      children: (0, n.tZ)(l.OdW, {
                        height: 40,
                        width: '100%',
                        borderRadius: '8px',
                      }),
                    }),
                  (0, n.tZ)(d, { rows: o }),
                  i &&
                    (0, n.BX)(l.Kqy, {
                      justify: 'center',
                      align: 'center',
                      gap: 's',
                      marginTop: '20px',
                      children: [
                        (0, n.tZ)(l.OdW, { height: 32, width: 32, borderRadius: '50%' }),
                        (0, n.tZ)(l.OdW, { height: 20, width: 30, borderRadius: '4px' }),
                        (0, n.tZ)(l.OdW, { height: 32, width: 32, borderRadius: '50%' }),
                      ],
                    }),
                ],
              }),
            ],
          });
        });
    },
    29286: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, {
          default: function () {
            return l;
          },
        });
      var r = i(78286),
        n = i(47567),
        o = i(34097);
      function l() {
        return (0, r.tZ)(n.Z, {
          type: o.RX.Borrow,
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
    550: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var r = i(78286),
        n = i(58258),
        o = i(54655),
        l = i(29286),
        a = i(23698),
        d = i(68905);
      let s = (0, i(38819).Z)(o.Kqy, { target: 'e1y2xt820' })(
        'justify-content:space-between;flex:1;',
        (t) => {
          let { theme: e } = t;
          return e.breakpoints.down('m');
        },
        '{justify-content:flex-start;}'
      );
      var c = (0, n.memo)((t) => {
        var e;
        let {
            collateralAssets: i,
            loanAssets: c,
            filters: u,
            onFiltersChange: h,
            withNetworkFilter: f,
            withGlobalSearch: p,
            editPropertiesSlot: g,
            disabled: m,
          } = t,
          { toggleDialog: Z } = (0, o.DAv)(),
          b = (0, o.dD4)(),
          y = (0, n.useCallback)(
            (t) => {
              h({ ...u, collateralAssetIdsFilter: t });
            },
            [h, u]
          ),
          w = (0, n.useCallback)(
            (t) => {
              h({ ...u, loanAssetIdsFilter: t });
            },
            [h, u]
          ),
          v = (0, n.useCallback)(
            (t) => {
              h({
                chainIdsFilter: t,
                search: u.search,
                collateralAssetIdsFilter: [],
                loanAssetIdsFilter: [],
              });
            },
            [h, u]
          ),
          k = (0, n.useCallback)(
            (t) => {
              h({ ...u, search: t.trim() });
            },
            [h, u]
          );
        return (0, r.BX)(o.Kqy, {
          justify: 'space-between',
          direction: { base: 'row', m: 'column' },
          gap: 's',
          children: [
            (0, r.BX)(s, {
              children: [
                (0, r.BX)(o.Kqy, {
                  gap: '12px 32px',
                  align: 'center',
                  wrap: 'wrap',
                  children: [
                    f &&
                      (0, r.tZ)(a.Z, {
                        chainIdsFilter: null !== (e = u.chainIdsFilter) && void 0 !== e ? e : [],
                        handleChainIdsFilterChange: v,
                        disabled: m,
                      }),
                    (0, r.tZ)(d.Z, {
                      label: 'collateral',
                      assets: i,
                      assetIdsFilter: u.collateralAssetIdsFilter,
                      chainIdsFilter: f ? u.chainIdsFilter : void 0,
                      handleAssetIdsFilterChange: y,
                      disabled: m,
                    }),
                    (0, r.tZ)(d.Z, {
                      label: 'loan',
                      assets: c,
                      assetIdsFilter: u.loanAssetIdsFilter,
                      chainIdsFilter: f ? u.chainIdsFilter : void 0,
                      handleAssetIdsFilterChange: w,
                      disabled: m,
                    }),
                  ],
                }),
                (0, r.tZ)(o.ua7, {
                  content: 'How Borrowing works',
                  children: (0, r.tZ)(o.zxk, {
                    variant: 'ghost',
                    size: 'small',
                    iconAlone: 'QuestionPlain20',
                    color: 'icon.secondary',
                    onClick: function () {
                      Z((0, r.tZ)(l.default, {}), { closable: !0, fullSize: !0 });
                    },
                  }),
                }),
              ],
            }),
            (0, r.BX)(o.Kqy, {
              gap: 's',
              direction: { base: 'row', xs: 'column' },
              children: [
                g,
                (0, r.tZ)(o.olm, {
                  placeholder: 'Filter markets',
                  width: 200,
                  fullWidth: b,
                  value: u.search,
                  onChange: k,
                  isGlobalSearchInput: p,
                  disabled: m,
                  debounceTime: 500,
                }),
              ],
            }),
          ],
        });
      });
    },
  },
  function (t) {
    t.O(
      0,
      [
        9913, 1811, 3261, 1083, 3248, 7287, 6929, 3391, 3515, 6489, 4516, 3613, 1594, 9851, 4655,
        825, 8205, 9255, 7567, 9510, 6266, 6269, 8577, 1744,
      ],
      function () {
        return t((t.s = 2453));
      }
    ),
      (_N_E = t.O());
  },
]);
