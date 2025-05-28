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
    (e._sentryDebugIds[t] = 'ffe7ecd6-5268-4ecf-9bf0-eb077535fa0f'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-ffe7ecd6-5268-4ecf-9bf0-eb077535fa0f'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7363, 9286],
  {
    2453: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 89701));
    },
    89701: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var n = r(78286),
        i = r(54655),
        a = r(3823),
        o = r(84108),
        l = r(68690),
        s = r(4078),
        d = r(89991);
      function u() {
        let {
            account: { isConnected: e },
          } = (0, d.Z_)(),
          t = (0, i.dD4)();
        return (0, n.BX)(i.Kqy, {
          direction: 'column',
          basis: '100%',
          children: [
            (0, n.BX)(s.default, {
              withOverflowingBottomBorder: !0,
              hasLargerVerticalPadding: !0,
              withoutAside: !0,
              children: [!e && (0, n.tZ)(l.Z, {}), e && (0, n.tZ)(a.default, {})],
            }),
            (0, n.tZ)(s.default, {
              withoutAside: !0,
              style: { flexGrow: 1 },
              children: (0, n.tZ)(o.r, { withHeader: !t }),
            }),
          ],
        });
      }
    },
    57788: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return p;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(38819),
        o = r(54655),
        l = r(53863),
        s = r(76600),
        d = r(70064),
        u = r(94087),
        c = (0, i.memo)((e) => {
          let { children: t } = e;
          return (0, n.tZ)(i.Suspense, { fallback: (0, n.tZ)(u.Z, {}), children: t });
        });
      let h = (0, a.Z)(o.Kqy, { target: 'e1xswx7u0' })(
        'width:100%;display:flex;flex-direction:column;align-items:center;gap:10px;',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.down('xs');
        },
        '{gap:',
        (e) => {
          let { theme: t } = e;
          return t.spacing.s;
        },
        ';}'
      );
      var p = (0, i.memo)((e) => {
        let { dashboardCardSlot: t, marketPositionsTableSlot: r, positionShortcutsSlot: a } = e;
        return (0, n.BX)(h, {
          children: [
            t,
            (0, n.tZ)(d.K, {
              fallback: (0, n.tZ)(l.c, {}),
              children: (0, n.tZ)(c, { children: r }),
            }),
            (0, n.tZ)(d.K, {
              fallback: (0, n.tZ)(o.xvT.Body.XXXS.Regular, {
                color: 'text.secondary',
                children: 'Something went wrong while loading your positions.',
              }),
              children: (0, n.tZ)(i.Suspense, {
                fallback: (0, n.tZ)(s._, { loading: !0 }),
                children: a,
              }),
            }),
          ],
        });
      });
    },
    99746: function (e, t, r) {
      'use strict';
      r.d(t, {
        R: function () {
          return n.default;
        },
      });
      var n = r(1218);
    },
    1218: function (e, t, r) {
      'use strict';
      var n = r(78286),
        i = r(58258),
        a = r(12597),
        o = r(4366);
      t.default = (0, i.memo)(() => {
        let { isSmallDashboard: e, isDashboardExpanded: t } = (0, o.iv)();
        return (0, n.tZ)(a.UT, {
          message: t
            ? 'Something went wrong while loading the Rate card.'
            : 'Something went wrong.',
          isSmall: e,
          isExpanded: t,
        });
      });
    },
    52108: function (e, t, r) {
      'use strict';
      r.d(t, {
        N: function () {
          return n.default;
        },
      });
      var n = r(13139);
    },
    13139: function (e, t, r) {
      'use strict';
      var n = r(78286),
        i = r(58258),
        a = r(31560);
      t.default = (0, i.memo)(() =>
        (0, n.tZ)(a.$e, { message: 'Something went wrong while loading My Borrow chart.' })
      );
    },
    8617: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r(78286),
        i = r(58258),
        a = r(31560),
        o = r(70064),
        l = r(4366),
        s = r(61813),
        d = r(99746),
        u = r(52108);
      t.default = (0, i.memo)((e) => {
        let { chartMyBorrowSlot: t, netBorrowApySlot: r } = e,
          {
            isDashboardExpanded: c,
            isSmallDashboard: h,
            setIsDashboardHovered: p,
            onClickToggleDashboard: f,
          } = (0, l.iv)();
        return (0, n.tZ)(a.q8, {
          isExpanded: c,
          isSmall: h,
          onMouseEnter: () => p(!0),
          onMouseLeave: () => p(!1),
          onClick: f,
          chartMyDepositsSlot: (0, n.tZ)(o.Z, {
            fallback: (0, n.tZ)(u.N, {}),
            children: (0, n.tZ)(i.Suspense, { fallback: (0, n.tZ)(s.r_, {}), children: t }),
          }),
          earnApyCardSlot: (0, n.tZ)(o.Z, {
            fallback: (0, n.tZ)(d.R, {}),
            children: (0, n.tZ)(i.Suspense, { fallback: (0, n.tZ)(s.Us, {}), children: r }),
          }),
        });
      });
    },
    3823: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return u;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(76600),
        o = r(61813),
        l = r(94087),
        s = r(57788),
        d = r(8617);
      r(99746), r(52108);
      var u = (0, i.memo)((e) => {
        let {} = e;
        return (0, n.tZ)(s.default, {
          dashboardCardSlot: (0, n.tZ)(d.default, {
            chartMyBorrowSlot: (0, n.tZ)(o.r_, {}),
            netBorrowApySlot: (0, n.tZ)(o.Us, {}),
          }),
          marketPositionsTableSlot: (0, n.tZ)(l.Z, {}),
          positionShortcutsSlot: (0, n.tZ)(a._, { loading: !0 }),
        });
      });
    },
    36614: function (e, t, r) {
      'use strict';
      var n = r(78286),
        i = r(58258),
        a = r(12597),
        o = r(4366);
      t.Z = (0, i.memo)(() => {
        let { isDashboardExpanded: e, isSmallDashboard: t } = (0, o.iv)();
        return (0, n.tZ)(a.o, { isExpanded: e, small: t });
      });
    },
    7850: function (e, t, r) {
      'use strict';
      var n = r(78286),
        i = r(58258),
        a = r(31560),
        o = r(4366);
      t.Z = (0, i.memo)(() => {
        let { isDashboardExpanded: e, isSmallDashboard: t } = (0, o.iv)();
        return (0, n.tZ)(a.gy, { isExpanded: e, isSmall: t });
      });
    },
    94087: function (e, t, r) {
      'use strict';
      var n = r(78286),
        i = r(58258),
        a = r(54655);
      t.Z = (0, i.memo)(() => {
        let e = (0, a.dD4)();
        return (0, n.BX)(a.Kqy, {
          direction: 'column',
          fullWidth: !0,
          children: [
            !e &&
              (0, n.tZ)(a.Kqy, {
                marginTop: 0,
                marginRight: 0,
                marginBottom: 10,
                marginLeft: 0,
                children: (0, n.tZ)(a.OdW, { height: 40, width: '100%', borderRadius: '8px' }),
              }),
            (0, n.tZ)(a.Kqy, {
              gap: { base: 10, s: 's' },
              direction: 'column',
              fullWidth: !0,
              children: e
                ? (0, n.BX)(a.Kqy, {
                    gap: 'm',
                    direction: 'column',
                    minHeight: '189px',
                    background: 'background.bloc',
                    fullWidth: !0,
                    borderRadius: '20px',
                    paddingBlock: 'm',
                    paddingInline: 's',
                    children: [
                      (0, n.BX)(a.Kqy, {
                        direction: 'column',
                        gap: 's',
                        children: [
                          (0, n.tZ)(a.OdW, { borderRadius: '20px', width: 142, height: 24 }),
                          (0, n.tZ)(a.OdW, { borderRadius: '20px', width: 142, height: 24 }),
                        ],
                      }),
                      (0, n.tZ)(a.Z0O, {}),
                      (0, n.tZ)(a.Kqy, {
                        direction: 'column',
                        gap: 's',
                        children: (0, n.tZ)(a.OdW, {
                          borderRadius: '20px',
                          width: 142,
                          height: 24,
                        }),
                      }),
                    ],
                  })
                : (0, n.BX)(n.HY, {
                    children: [
                      (0, n.tZ)(a.OdW, { height: 60, width: '100%', borderRadius: '8px' }),
                      (0, n.tZ)(a.OdW, {
                        height: e ? 154 : 60,
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
    84675: function (e, t, r) {
      'use strict';
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(31560),
        l = r(4366),
        s = r(36614),
        d = r(7850),
        u = r(94087);
      t.Z = (0, i.memo)(() => {
        let {
          isDashboardExpanded: e,
          isSmallDashboard: t,
          setIsDashboardHovered: r,
          onClickToggleDashboard: i,
        } = (0, l.iv)();
        return (0, n.BX)(a.Kqy, {
          fullWidth: !0,
          gap: 's',
          direction: 'column',
          children: [
            (0, n.tZ)(o.q8, {
              chartMyDepositsSlot: (0, n.tZ)(d.Z, {}),
              earnApyCardSlot: (0, n.tZ)(s.Z, {}),
              isExpanded: e,
              isSmall: t,
              onMouseEnter: () => r(!0),
              onMouseLeave: () => r(!1),
              onClick: i,
            }),
            (0, n.tZ)(u.Z, {}),
          ],
        });
      });
    },
    61813: function (e, t, r) {
      'use strict';
      r.d(t, {
        Us: function () {
          return n.Z;
        },
        r_: function () {
          return i.Z;
        },
      });
      var n = r(36614),
        i = r(7850);
      r(84675);
    },
    84108: function (e, t, r) {
      'use strict';
      r.d(t, {
        u: function () {
          return n.Z;
        },
        r: function () {
          return d;
        },
      });
      var n = r(84675),
        i = r(78286),
        a = r(58258),
        o = r(54655),
        l = r(550),
        s = (0, a.memo)((e) => {
          let { rows: t } = e,
            r = (0, o.dD4)();
          return (0, i.tZ)(o.Kqy, {
            direction: 'column',
            gap: { base: 10, s: '12px' },
            style: { width: '100%', height: 'unset' },
            children: Array.from({ length: t }).map((e, t) =>
              (0, i.tZ)(
                o.Kqy,
                {
                  style: { width: '100%', height: 'unset' },
                  children: (0, i.tZ)(o.OdW, {
                    height: r ? 154 : 60,
                    width: '100%',
                    borderRadius: r ? '20px' : '8px',
                  }),
                },
                t
              )
            ),
          });
        }),
        d = (0, a.memo)((e) => {
          let { withFilters: t = !0, withPagination: r = !0, withHeader: n = !0, rows: a = 10 } = e;
          return (0, i.BX)(o.Kqy, {
            direction: 'column',
            gap: 20,
            children: [
              t &&
                (0, i.tZ)(l.Z, {
                  disabled: !0,
                  collateralAssets: [],
                  loanAssets: [],
                  filters: { collateralAssetIdsFilter: [], loanAssetIdsFilter: [], search: '' },
                  onFiltersChange: () => {},
                  withNetworkFilter: !1,
                  withGlobalSearch: !1,
                }),
              (0, i.BX)(o.Kqy, {
                direction: 'column',
                children: [
                  n &&
                    (0, i.tZ)(o.Kqy, {
                      style: { margin: '0 0 10px' },
                      children: (0, i.tZ)(o.OdW, {
                        height: 40,
                        width: '100%',
                        borderRadius: '8px',
                      }),
                    }),
                  (0, i.tZ)(s, { rows: a }),
                  r &&
                    (0, i.BX)(o.Kqy, {
                      justify: 'center',
                      align: 'center',
                      gap: 's',
                      style: { marginTop: '20px' },
                      children: [
                        (0, i.tZ)(o.OdW, { height: 32, width: 32, borderRadius: '50%' }),
                        (0, i.tZ)(o.OdW, { height: 20, width: 30, borderRadius: '4px' }),
                        (0, i.tZ)(o.OdW, { height: 32, width: 32, borderRadius: '50%' }),
                      ],
                    }),
                ],
              }),
            ],
          });
        });
    },
    81919: function (e, t, r) {
      'use strict';
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(4366);
      let l = (e) => {
          var t, r, n;
          let i = null === (t = e[0]) || void 0 === t ? void 0 : t[1],
            a = null === (r = e[e.length - 1]) || void 0 === r ? void 0 : r[1];
          if ('number' != typeof i || 'number' != typeof a) return { hasChange: !1 };
          let o =
            i ||
            (null === (n = e.find((e) => null !== e[1] && e[1] > 0)) || void 0 === n
              ? void 0
              : n[1]);
          return o
            ? { percentageChange: (a - o) / o, rawChange: a - o, hasChange: !0 }
            : { hasChange: !1 };
        },
        s = { percentageChange: 'Click to show $ change.', rawChange: 'Click to show % change.' };
      t.Z = (0, i.memo)((e) => {
        let { formattedData: t } = e,
          [r, d] = (0, i.useState)(!0),
          {
            percentageChange: u,
            rawChange: c,
            hasChange: h,
          } = (0, i.useMemo)(() => l(null != t ? t : []), [t]),
          p = (0, i.useMemo)(
            () =>
              r
                ? a.$0l.percent.default('-').digits(2).unit('%').sign().trailingZero(!1).of(u)
                : a.$0l.short.unit('$').sign().digits(2).readable().of(c),
            [r, u, c]
          );
        return h && t
          ? (0, n.tZ)(a.ua7, {
              content: s[r ? 'percentageChange' : 'rawChange'],
              children: (0, n.tZ)(a.Vp9, {
                className: o.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                variant: 'pnl',
                label: p,
                onClick: () => d((e) => !e),
              }),
            })
          : null;
      });
    },
    29286: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return o;
          },
        });
      var n = r(78286),
        i = r(47567),
        a = r(34097);
      function o() {
        return (0, n.tZ)(i.Z, {
          type: a.RX.Borrow,
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
    550: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(29286),
        l = r(23698),
        s = r(68905);
      let d = (0, r(38819).Z)(a.Kqy, { target: 'e1y2xt820' })(
        'justify-content:space-between;flex:1;',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.down('m');
        },
        '{justify-content:flex-start;}'
      );
      var u = (0, i.memo)((e) => {
        var t;
        let {
            collateralAssets: r,
            loanAssets: u,
            filters: c,
            onFiltersChange: h,
            withNetworkFilter: p,
            withGlobalSearch: f,
            editPropertiesSlot: g,
            disabled: m,
          } = e,
          { toggleDialog: b } = (0, a.DAv)(),
          Z = (0, a.dD4)(),
          y = (0, i.useCallback)(
            (e) => {
              h({ ...c, collateralAssetIdsFilter: e });
            },
            [h, c]
          ),
          v = (0, i.useCallback)(
            (e) => {
              h({ ...c, loanAssetIdsFilter: e });
            },
            [h, c]
          ),
          w = (0, i.useCallback)(
            (e) => {
              h({
                chainIdsFilter: e,
                search: c.search,
                collateralAssetIdsFilter: [],
                loanAssetIdsFilter: [],
              });
            },
            [h, c]
          ),
          x = (0, i.useCallback)(
            (e) => {
              h({ ...c, search: e.trim() });
            },
            [h, c]
          );
        return (0, n.BX)(a.Kqy, {
          justify: 'space-between',
          direction: { base: 'row', m: 'column' },
          gap: 's',
          children: [
            (0, n.BX)(d, {
              children: [
                (0, n.BX)(a.Kqy, {
                  gap: '12px 32px',
                  align: 'center',
                  wrap: 'wrap',
                  children: [
                    p &&
                      (0, n.tZ)(l.Z, {
                        chainIdsFilter: null !== (t = c.chainIdsFilter) && void 0 !== t ? t : [],
                        handleChainIdsFilterChange: w,
                        disabled: m,
                      }),
                    (0, n.tZ)(s.Z, {
                      label: 'collateral',
                      assets: r,
                      assetIdsFilter: c.collateralAssetIdsFilter,
                      chainIdsFilter: p ? c.chainIdsFilter : void 0,
                      handleAssetIdsFilterChange: y,
                      disabled: m,
                    }),
                    (0, n.tZ)(s.Z, {
                      label: 'loan',
                      assets: u,
                      assetIdsFilter: c.loanAssetIdsFilter,
                      chainIdsFilter: p ? c.chainIdsFilter : void 0,
                      handleAssetIdsFilterChange: v,
                      disabled: m,
                    }),
                  ],
                }),
                (0, n.tZ)(a.ua7, {
                  content: 'How Borrowing works',
                  children: (0, n.tZ)(a.zxk, {
                    variant: 'ghost',
                    size: 'small',
                    iconAlone: 'QuestionPlain20',
                    color: 'icon.secondary',
                    onClick: function () {
                      b((0, n.tZ)(o.default, {}), { closable: !0, fullSize: !0 });
                    },
                  }),
                }),
              ],
            }),
            (0, n.BX)(a.Kqy, {
              gap: 's',
              direction: { base: 'row', xs: 'column' },
              children: [
                g,
                (0, n.tZ)(a.olm, {
                  placeholder: 'Filter markets',
                  width: 200,
                  fullWidth: Z,
                  value: c.search,
                  onChange: x,
                  isGlobalSearchInput: f,
                  disabled: m,
                  debounceTime: 500,
                }),
              ],
            }),
          ],
        });
      });
    },
    76992: function (e, t, r) {
      'use strict';
      r.d(t, {
        E: function () {
          return f;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(50825),
        l = r(38819),
        s = r(16690);
      let d = (0, l.Z)('div', { target: 'eikqm6p0' })(
          'background-color:',
          (e) => {
            let { theme: t, backgroundVariant: r } = e;
            return 'primary' === r ? t.colors.background.primary : t.colors.constant.dark;
          },
          ';padding:',
          (e) => {
            let { noPadding: t } = e;
            return t ? '0px' : '3px';
          },
          ';display:flex;gap:',
          (e) => {
            let { noGap: t } = e;
            return t ? '0px' : '4px';
          },
          ';border-radius:100px;height:fit-content;'
        ),
        u = (0, l.Z)('div', { target: 'eikqm6p1' })('position:relative;'),
        c = (0, l.Z)(a.Kqy, { target: 'eikqm6p2' })(
          'position:absolute;top:0px;right:0px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.brand;
          },
          ';width:14px;height:14px;border-radius:50%;display:flex;justify-content:center;align-items:center;text-align:center;',
          (0, s.animationCubicBezier)(s.popUpScale, '300ms'),
          ';& >:first-of-type{transform:translate(0.2px,0.4px);font-size:8px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{top:-5px !important;right:-5px !important;}'
        ),
        h = (0, l.Z)(a.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        p = (0, i.forwardRef)(function (e, t) {
          let {
            options: r,
            id: i,
            value: l,
            noPadding: s = !1,
            noGap: p = !1,
            disabled: f = !1,
            variant: g = 'primary',
            backgroundVariant: m = 'primary',
            size: b = 'small',
            className: Z,
            onChange: y,
            ...v
          } = e;
          return (0, n.tZ)(d, {
            noPadding: s,
            noGap: p,
            backgroundVariant: m,
            ref: t,
            className: Z,
            ...v,
            children: r.map((e) =>
              (0, n.tZ)(
                a.ua7,
                {
                  disabled: !e.tooltip,
                  content: e.tooltip,
                  offset: s ? 4 : 9,
                  children: (0, n.BX)(u, {
                    children: [
                      e.href
                        ? (0, n.tZ)(o.Z, {
                            href: e.href,
                            prefetch: e.prefetch,
                            mode: 'internal',
                            buttonProps: {
                              variant: e.value === l ? g : 'ghost',
                              size: b,
                              disabled: f || e.isDisabled,
                              label: e.label,
                              iconAlone: e.icon,
                              onClick: () => (null == y ? void 0 : y(e.value)),
                            },
                          })
                        : (0, n.tZ)(a.zxk, {
                            variant: e.value === l ? g : 'ghost',
                            size: b,
                            disabled: f || e.isDisabled,
                            label: e.label,
                            iconAlone: e.icon,
                            onClick: () => (null == y ? void 0 : y(e.value)),
                          }),
                      e.counter && e.counter > 0
                        ? (0, n.tZ)(c, {
                            children: (0, n.tZ)(h, {
                              TextVariant: a.xvT.Body.XXXS.Regular,
                              children: e.counter,
                            }),
                          })
                        : null,
                    ],
                  }),
                },
                i + e.value
              )
            ),
          });
        });
      var f = (0, i.memo)(p);
    },
    4366: function (e, t, r) {
      'use strict';
      r.d(t, {
        DashboardClass: function () {
          return i;
        },
        iv: function () {
          return d;
        },
      });
      var n,
        i,
        a = r(78286),
        o = r(58258),
        l = r(54655);
      let s = (0, o.createContext)(null);
      ((n = i || (i = {})).PREVENT_DASHBOARD_CARD_HOVER_CLASS = 'prevent-dashboard-card-hover'),
        (n.DASHBOARD_CARD_BUTTON_EXPAND_CLASS = 'dashboard-card-button-expand');
      let d = () => {
          let e = (0, o.useContext)(s);
          if (!e)
            throw Error('useDashboardContext must be called inside a DashboardContextProvider');
          return e;
        },
        u = (e) => {
          let { isSmallDashboard: t } = e,
            [r, n] = (0, o.useState)(!1),
            [i, a] = (0, o.useState)(!1),
            l = (0, o.useCallback)(() => {
              n((e) => !e);
            }, []),
            s = (0, o.useCallback)(
              (e) => {
                var t;
                (null != e &&
                  null !== (t = e.target) &&
                  void 0 !== t &&
                  t.closest('.prevent-dashboard-card-hover')) ||
                  l();
              },
              [l]
            );
          return (
            (0, o.useEffect)(() => {
              t && n(!1);
            }, [t, n]),
            {
              isDashboardExpanded: r,
              isDashboardHovered: i,
              toggleDashboard: l,
              setIsDashboardHovered: a,
              onClickToggleDashboard: s,
            }
          );
        };
      t.ZP = (0, o.memo)((e) => {
        let { children: t } = e,
          r = (0, l.CPt)(),
          [n, i] = (0, o.useState)('loan'),
          d = u({ isSmallDashboard: r }),
          c = (0, o.useMemo)(
            () => ({
              isSmallDashboard: r,
              borrowDashboardMode: n,
              setBorrowDashboardMode: i,
              ...d,
            }),
            [r, d, n, i]
          );
        return (0, a.tZ)(s.Provider, { value: c, children: t });
      });
    },
    92559: function (e, t, r) {
      'use strict';
      var n = r(16601),
        i = (function () {
          try {
            var e = (0, n.Z)(Object, 'defineProperty');
            return e({}, '', {}), e;
          } catch (e) {}
        })();
      t.Z = i;
    },
  },
  function (e) {
    e.O(
      0,
      [
        9913, 1811, 3261, 3918, 5852, 7287, 6929, 3391, 3515, 4516, 3613, 6489, 1594, 6544, 4655,
        825, 5962, 9626, 7567, 9510, 6266, 6269, 8804, 1744,
      ],
      function () {
        return e((e.s = 2453));
      }
    ),
      (_N_E = e.O());
  },
]);
