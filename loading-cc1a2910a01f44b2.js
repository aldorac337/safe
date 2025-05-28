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
    (e._sentryDebugIds[t] = 'd5bc74ea-af00-482e-95d3-96f2afeeec98'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-d5bc74ea-af00-482e-95d3-96f2afeeec98'));
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
      var n = r(78286),
        a = r(54655),
        i = r(359),
        l = r(51029),
        o = r(68690),
        s = r(4078),
        d = r(89991);
      function u() {
        let {
            account: { isConnected: e },
          } = (0, d.Z_)(),
          t = (0, a.dD4)();
        return (0, n.BX)(a.Kqy, {
          direction: 'column',
          basis: '100%',
          children: [
            (0, n.BX)(s.default, {
              withOverflowingBottomBorder: !0,
              hasLargerVerticalPadding: !0,
              withoutAside: !0,
              children: [!e && (0, n.tZ)(o.Z, {}), e && (0, n.tZ)(i.default, {})],
            }),
            (0, n.tZ)(s.default, {
              withoutAside: !0,
              style: { flexGrow: 1 },
              children: (0, n.tZ)(l.x, { withHeader: !t }),
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
      var n = r(78286),
        a = r(58258),
        i = r(31560),
        l = r(70064),
        o = r(4366),
        s = r(98049),
        d = r(75519),
        u = (0, a.memo)(() =>
          (0, n.tZ)(i.$e, { message: 'Something went wrong while loading My Deposits chart.' })
        ),
        c = r(10190),
        h = (0, a.memo)(() => {
          let { isSmallDashboard: e, isDashboardExpanded: t } = (0, o.iv)();
          return (0, n.tZ)(c.UT, {
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
              onClickToggleDashboard: g,
            } = (0, o.iv)();
          return (0, n.tZ)(i.q8, {
            isExpanded: c,
            isSmall: p,
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            onClick: g,
            chartMyDepositsSlot: (0, n.tZ)(l.Z, {
              fallback: (0, n.tZ)(u, {}),
              children: (0, n.tZ)(a.Suspense, { fallback: (0, n.tZ)(d.Z, {}), children: t }),
            }),
            earnApyCardSlot: (0, n.tZ)(l.Z, {
              fallback: (0, n.tZ)(h, {}),
              children: (0, n.tZ)(a.Suspense, { fallback: (0, n.tZ)(s.Z, {}), children: r }),
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
      var n = r(78286),
        a = r(58258),
        i = r(38819),
        l = r(54655),
        o = r(53863),
        s = r(76600),
        d = r(70064),
        u = r(39105),
        c = (0, a.memo)((e) => {
          let { children: t } = e;
          return (0, n.tZ)(a.Suspense, { fallback: (0, n.tZ)(u.Z, {}), children: t });
        });
      let h = (0, i.Z)(l.Kqy, { target: 'evv7z8i0' })(
        'width:100%;display:flex;flex-direction:column;align-items:center;'
      );
      var p = (0, a.memo)((e) => {
        let { dashboardCardSlot: t, vaultPositionsTableSlot: r, positionShortcutsSlot: i } = e;
        return (0, n.BX)(h, {
          gap: { base: 10, xs: 's' },
          children: [
            t,
            (0, n.tZ)(d.K, {
              fallback: (0, n.tZ)(o.c, {}),
              children: (0, n.tZ)(c, { children: r }),
            }),
            (0, n.tZ)(d.K, {
              fallback: (0, n.tZ)(l.xvT.Body.XXXS.Regular, {
                color: 'text.secondary',
                children: 'Something went wrong while loading your positions.',
              }),
              children: (0, n.tZ)(a.Suspense, {
                fallback: (0, n.tZ)(s._, { loading: !0 }),
                children: i,
              }),
            }),
          ],
        });
      });
    },
    359: function (e, t, r) {
      'use strict';
      var n = r(78286),
        a = r(58258),
        i = r(76600),
        l = r(17482),
        o = r(39105),
        s = r(30260),
        d = r(5615);
      t.default = (0, a.memo)((e) => {
        let {} = e;
        return (0, n.tZ)(d.default, {
          dashboardCardSlot: (0, n.tZ)(s.default, {
            chartMyDepositsSlot: (0, n.tZ)(l.Pr, {}),
            earnApyCardSlot: (0, n.tZ)(l.eH, {}),
          }),
          vaultPositionsTableSlot: (0, n.tZ)(o.Z, {}),
          positionShortcutsSlot: (0, n.tZ)(i._, { loading: !0 }),
        });
      });
    },
    98049: function (e, t, r) {
      'use strict';
      var n = r(78286),
        a = r(58258),
        i = r(12597),
        l = r(4366);
      t.Z = (0, a.memo)(() => {
        let { isDashboardExpanded: e, isSmallDashboard: t } = (0, l.iv)();
        return (0, n.tZ)(i.o, { isExpanded: e, small: t });
      });
    },
    75519: function (e, t, r) {
      'use strict';
      var n = r(78286),
        a = r(58258),
        i = r(31560),
        l = r(4366);
      t.Z = (0, a.memo)(() => {
        let { isDashboardExpanded: e, isSmallDashboard: t } = (0, l.iv)();
        return (0, n.tZ)(i.gy, { isExpanded: e, isSmall: t });
      });
    },
    39105: function (e, t, r) {
      'use strict';
      var n = r(78286),
        a = r(58258),
        i = r(54655);
      t.Z = (0, a.memo)((e) => {
        let { excludeFilter: t } = e,
          r = (0, i.dD4)();
        return (0, n.BX)(i.Kqy, {
          direction: 'column',
          fullWidth: !0,
          children: [
            !t &&
              !r &&
              (0, n.tZ)(i.Kqy, {
                style: { margin: '0 0 10px' },
                children: (0, n.tZ)(i.OdW, { height: 40, width: '100%', borderRadius: '8px' }),
              }),
            (0, n.BX)(i.Kqy, {
              gap: { base: 10, s: 's' },
              direction: 'column',
              fullWidth: !0,
              children: [
                (0, n.tZ)(i.OdW, {
                  height: r ? 154 : 60,
                  width: '100%',
                  borderRadius: r ? '20px' : '8px',
                }),
                (0, n.tZ)(i.OdW, {
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
          return n.Z;
        },
      });
      var n = r(98049),
        a = r(75519);
      r(44215);
    },
    51029: function (e, t, r) {
      'use strict';
      r.d(t, {
        x: function () {
          return s;
        },
      }),
        r(44215);
      var n = r(78286),
        a = r(58258),
        i = r(54655),
        l = r(11535),
        o = (0, a.memo)((e) => {
          let { rows: t } = e,
            r = (0, i.dD4)();
          return (0, n.tZ)(i.Kqy, {
            direction: 'column',
            gap: { s: 's', base: 10 },
            style: { width: '100%', height: 'unset' },
            children: Array.from({ length: t }).map((e, t) =>
              (0, n.tZ)(
                i.Kqy,
                {
                  style: { width: '100%', height: 'unset' },
                  children: (0, n.tZ)(i.OdW, {
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
        s = (0, a.memo)((e) => {
          let { withFilters: t = !0, withPagination: r = !0, withHeader: a = !0, rows: s = 10 } = e,
            d = (0, i.dD4)();
          return (0, n.BX)(i.Kqy, {
            direction: 'column',
            gap: 20,
            children: [
              t &&
                (0, n.tZ)(l.H, {
                  disabled: !0,
                  filters: { assetIdsFilter: [], curatorAddressesFilter: [], search: '' },
                  onFiltersChange: () => {},
                  withNetworkFilter: !1,
                  withGlobalSearch: !1,
                  assets: [],
                  curators: [],
                }),
              (0, n.BX)(i.Kqy, {
                direction: 'column',
                children: [
                  a &&
                    !d &&
                    (0, n.tZ)(i.Kqy, {
                      style: { margin: '0 0 10px' },
                      children: (0, n.tZ)(i.OdW, {
                        height: 40,
                        width: '100%',
                        borderRadius: '8px',
                      }),
                    }),
                  (0, n.tZ)(o, { rows: s }),
                  r &&
                    (0, n.BX)(i.Kqy, {
                      justify: 'center',
                      align: 'center',
                      gap: 's',
                      style: { marginTop: '20px' },
                      children: [
                        (0, n.tZ)(i.OdW, { height: 32, width: 32, borderRadius: '50%' }),
                        (0, n.tZ)(i.OdW, { height: 20, width: 30, borderRadius: '4px' }),
                        (0, n.tZ)(i.OdW, { height: 32, width: 32, borderRadius: '50%' }),
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
        a = r(58258),
        i = r(54655),
        l = r(4366);
      let o = (e) => {
          var t, r, n;
          let a = null === (t = e[0]) || void 0 === t ? void 0 : t[1],
            i = null === (r = e[e.length - 1]) || void 0 === r ? void 0 : r[1];
          if ('number' != typeof a || 'number' != typeof i) return { hasChange: !1 };
          let l =
            a ||
            (null === (n = e.find((e) => null !== e[1] && e[1] > 0)) || void 0 === n
              ? void 0
              : n[1]);
          return l
            ? { percentageChange: (i - l) / l, rawChange: i - l, hasChange: !0 }
            : { hasChange: !1 };
        },
        s = { percentageChange: 'Click to show $ change.', rawChange: 'Click to show % change.' };
      t.Z = (0, a.memo)((e) => {
        let { formattedData: t } = e,
          [r, d] = (0, a.useState)(!0),
          {
            percentageChange: u,
            rawChange: c,
            hasChange: h,
          } = (0, a.useMemo)(() => o(null != t ? t : []), [t]),
          p = (0, a.useMemo)(
            () =>
              r
                ? i.$0l.percent.default('-').digits(2).unit('%').sign().trailingZero(!1).of(u)
                : i.$0l.short.unit('$').sign().digits(2).readable().of(c),
            [r, u, c]
          );
        return h && t
          ? (0, n.tZ)(i.ua7, {
              content: s[r ? 'percentageChange' : 'rawChange'],
              children: (0, n.tZ)(i.Vp9, {
                className: l.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                variant: 'pnl',
                label: p,
                onClick: () => d((e) => !e),
              }),
            })
          : null;
      });
    },
    90242: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return l;
          },
        });
      var n = r(78286),
        a = r(47567),
        i = r(34097);
      function l() {
        return (0, n.tZ)(a.Z, {
          type: i.RX.Earn,
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
    76992: function (e, t, r) {
      'use strict';
      r.d(t, {
        E: function () {
          return f;
        },
      });
      var n = r(78286),
        a = r(58258),
        i = r(54655),
        l = r(50825),
        o = r(38819),
        s = r(16690);
      let d = (0, o.Z)('div', { target: 'eikqm6p0' })(
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
        u = (0, o.Z)('div', { target: 'eikqm6p1' })('position:relative;'),
        c = (0, o.Z)(i.Kqy, { target: 'eikqm6p2' })(
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
        h = (0, o.Z)(i.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        p = (0, a.forwardRef)(function (e, t) {
          let {
            options: r,
            id: a,
            value: o,
            noPadding: s = !1,
            noGap: p = !1,
            disabled: f = !1,
            variant: g = 'primary',
            backgroundVariant: m = 'primary',
            size: b = 'small',
            className: Z,
            onChange: v,
            ...y
          } = e;
          return (0, n.tZ)(d, {
            noPadding: s,
            noGap: p,
            backgroundVariant: m,
            ref: t,
            className: Z,
            ...y,
            children: r.map((e) =>
              (0, n.tZ)(
                i.ua7,
                {
                  disabled: !e.tooltip,
                  content: e.tooltip,
                  offset: s ? 4 : 9,
                  children: (0, n.BX)(u, {
                    children: [
                      e.href
                        ? (0, n.tZ)(l.Z, {
                            href: e.href,
                            prefetch: e.prefetch,
                            mode: 'internal',
                            buttonProps: {
                              variant: e.value === o ? g : 'ghost',
                              size: b,
                              disabled: f || e.isDisabled,
                              label: e.label,
                              iconAlone: e.icon,
                              onClick: () => (null == v ? void 0 : v(e.value)),
                            },
                          })
                        : (0, n.tZ)(i.zxk, {
                            variant: e.value === o ? g : 'ghost',
                            size: b,
                            disabled: f || e.isDisabled,
                            label: e.label,
                            iconAlone: e.icon,
                            onClick: () => (null == v ? void 0 : v(e.value)),
                          }),
                      e.counter && e.counter > 0
                        ? (0, n.tZ)(c, {
                            children: (0, n.tZ)(h, {
                              TextVariant: i.xvT.Body.XXXS.Regular,
                              children: e.counter,
                            }),
                          })
                        : null,
                    ],
                  }),
                },
                a + e.value
              )
            ),
          });
        });
      var f = (0, a.memo)(p);
    },
    11535: function (e, t, r) {
      'use strict';
      r.d(t, {
        H: function () {
          return p;
        },
      });
      var n = r(78286),
        a = r(58258),
        i = r(54655),
        l = r(90242),
        o = r(23698),
        s = r(68905),
        d = r(15341);
      function u(e, t) {
        var r, n;
        return (
          null !==
            (n =
              null === (r = e.addresses) || void 0 === r
                ? void 0
                : r.every((e) => t.includes(e.address))) &&
          void 0 !== n &&
          n
        );
      }
      var c = (0, a.memo)((e) => {
        let {
            curators: t,
            curatorAddressesFilter: r,
            chainIdsFilter: l,
            handleCuratorAddressesFilterChange: o,
            disabled: s,
          } = e,
          [c, h] = (0, a.useState)(t),
          p = (0, a.useMemo)(
            () =>
              c
                .filter((e) => {
                  var t;
                  return (
                    null == l ||
                    !l.length ||
                    (null === (t = e.addresses) || void 0 === t
                      ? void 0
                      : t.some((e) => l.includes(e.chainId)))
                  );
                })
                .map((e) => {
                  var t, n;
                  return {
                    id: e.id,
                    label: e.name,
                    value:
                      null !==
                        (n =
                          null === (t = e.addresses) || void 0 === t
                            ? void 0
                            : t.map((e) => e.address)) && void 0 !== n
                        ? n
                        : [],
                    img: e.image,
                    isChecked: u(e, r),
                  };
                }),
            [r, c, l]
          ),
          f = (0, a.useCallback)(() => {
            h(
              [...t].sort((e, t) => {
                let n = Number(u(e, r));
                return Number(u(t, r)) - n || e.name.localeCompare(t.name);
              })
            );
          }, [t, r]),
          g = (0, a.useCallback)(
            (e) => {
              o((0, d.Z)(r, e));
            },
            [r, o]
          );
        return (0, n.BX)(i.Kqy, {
          align: 'center',
          gap: 'xs',
          children: [
            (0, n.tZ)(i.xvT.Body.XXXS.Regular, { color: 'text.body', children: 'Curator:' }),
            (0, n.tZ)(i.h4n, {
              items: p,
              sortItems: f,
              toggleItem: g,
              clear: () => o([]),
              inputPlaceholder: 'Search for curator',
              clearTooltipText: 'Remove Curator filter',
              withSeparator: !0,
              disabled: s,
            }),
          ],
        });
      });
      let h = (0, r(38819).Z)(i.Kqy, { target: 'e1y2xt820' })(
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
            curators: d,
            onFiltersChange: u,
            disabled: p,
            withNetworkFilter: f,
            withGlobalSearch: g,
            assets: m,
            editPropertiesSlot: b,
          } = e,
          Z = (0, i.dD4)(),
          { toggleDialog: v } = (0, i.DAv)(),
          y = (0, a.useCallback)(
            (e) => {
              u({ ...r, assetIdsFilter: e });
            },
            [u, r]
          ),
          w = (0, a.useCallback)(
            (e) => {
              u({
                chainIdsFilter: e,
                search: r.search,
                assetIdsFilter: [],
                curatorAddressesFilter: [],
              });
            },
            [u, r]
          ),
          x = (0, a.useCallback)(
            (e) => {
              u({ ...r, curatorAddressesFilter: e });
            },
            [u, r]
          ),
          k = (0, a.useCallback)(
            (e) => {
              u({ ...r, search: e.trim() });
            },
            [u, r]
          );
        return (0, n.BX)(i.Kqy, {
          justify: 'space-between',
          direction: { base: 'row', m: 'column' },
          gap: 's',
          children: [
            (0, n.BX)(h, {
              children: [
                (0, n.BX)(i.Kqy, {
                  gap: '12px 32px',
                  align: 'center',
                  wrap: 'wrap',
                  children: [
                    f &&
                      (0, n.tZ)(o.Z, {
                        chainIdsFilter: null !== (t = r.chainIdsFilter) && void 0 !== t ? t : [],
                        handleChainIdsFilterChange: w,
                        disabled: p,
                      }),
                    (0, n.tZ)(s.Z, {
                      label: 'deposit',
                      assets: m,
                      assetIdsFilter: r.assetIdsFilter,
                      chainIdsFilter: f ? r.chainIdsFilter : void 0,
                      handleAssetIdsFilterChange: y,
                      disabled: p,
                    }),
                    (0, n.tZ)(c, {
                      curators: d,
                      curatorAddressesFilter: r.curatorAddressesFilter,
                      chainIdsFilter: f ? r.chainIdsFilter : void 0,
                      handleCuratorAddressesFilterChange: x,
                      disabled: p,
                    }),
                  ],
                }),
                (0, n.tZ)(i.ua7, {
                  content: 'How Earn works',
                  children: (0, n.tZ)(i.zxk, {
                    variant: 'ghost',
                    size: 'small',
                    iconAlone: 'QuestionPlain20',
                    color: 'icon.secondary',
                    onClick: function () {
                      v((0, n.tZ)(l.default, {}), { closable: !0, fullSize: !0 });
                    },
                  }),
                }),
              ],
            }),
            (0, n.BX)(i.Kqy, {
              gap: 's',
              direction: { base: 'row', xs: 'column' },
              children: [
                b,
                (0, n.tZ)(i.olm, {
                  placeholder: 'Filter vaults',
                  width: 200,
                  fullWidth: Z,
                  value: r.search,
                  onChange: k,
                  disabled: p,
                  debounceTime: 500,
                  isGlobalSearchInput: g,
                }),
              ],
            }),
          ],
        });
      });
    },
    4366: function (e, t, r) {
      'use strict';
      r.d(t, {
        DashboardClass: function () {
          return a;
        },
        iv: function () {
          return d;
        },
      });
      var n,
        a,
        i = r(78286),
        l = r(58258),
        o = r(54655);
      let s = (0, l.createContext)(null);
      ((n = a || (a = {})).PREVENT_DASHBOARD_CARD_HOVER_CLASS = 'prevent-dashboard-card-hover'),
        (n.DASHBOARD_CARD_BUTTON_EXPAND_CLASS = 'dashboard-card-button-expand');
      let d = () => {
          let e = (0, l.useContext)(s);
          if (!e)
            throw Error('useDashboardContext must be called inside a DashboardContextProvider');
          return e;
        },
        u = (e) => {
          let { isSmallDashboard: t } = e,
            [r, n] = (0, l.useState)(!1),
            [a, i] = (0, l.useState)(!1),
            o = (0, l.useCallback)(() => {
              n((e) => !e);
            }, []),
            s = (0, l.useCallback)(
              (e) => {
                var t;
                (null != e &&
                  null !== (t = e.target) &&
                  void 0 !== t &&
                  t.closest('.prevent-dashboard-card-hover')) ||
                  o();
              },
              [o]
            );
          return (
            (0, l.useEffect)(() => {
              t && n(!1);
            }, [t, n]),
            {
              isDashboardExpanded: r,
              isDashboardHovered: a,
              toggleDashboard: o,
              setIsDashboardHovered: i,
              onClickToggleDashboard: s,
            }
          );
        };
      t.ZP = (0, l.memo)((e) => {
        let { children: t } = e,
          r = (0, o.CPt)(),
          [n, a] = (0, l.useState)('loan'),
          d = u({ isSmallDashboard: r }),
          c = (0, l.useMemo)(
            () => ({
              isSmallDashboard: r,
              borrowDashboardMode: n,
              setBorrowDashboardMode: a,
              ...d,
            }),
            [r, d, n, a]
          );
        return (0, i.tZ)(s.Provider, { value: c, children: t });
      });
    },
    92559: function (e, t, r) {
      'use strict';
      var n = r(16601),
        a = (function () {
          try {
            var e = (0, n.Z)(Object, 'defineProperty');
            return e({}, '', {}), e;
          } catch (e) {}
        })();
      t.Z = a;
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
        return e((e.s = 77943));
      }
    ),
      (_N_E = e.O());
  },
]);
