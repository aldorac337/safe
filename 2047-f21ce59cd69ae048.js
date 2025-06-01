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
    (e._sentryDebugIds[t] = '1859bfde-08f1-4cbc-9beb-105f25d59c1c'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-1859bfde-08f1-4cbc-9beb-105f25d59c1c'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2047, 6266],
  {
    31560: function (e, t, r) {
      r.d(t, {
        uu: function () {
          return R;
        },
        $e: function () {
          return P;
        },
        q8: function () {
          return X;
        },
        gy: function () {
          return M;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(78830),
        o = r(79070),
        l = r(54655),
        s = r(4366),
        d = r(38819);
      let c = (0, d.Z)('div', { target: 'eil16z30' })(
          'display:flex;align-items:center;justify-content:center;flex-direction:column;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ';width:100%;height:',
          (e) => {
            let { height: t } = e;
            return t || '391px';
          },
          ';border:1px solid ',
          (e) => {
            let { theme: t } = e;
            return t.colors.border.primary;
          },
          ';border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';',
          (0, l.xJ_)('border-width'),
          '  text-align:center;padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.m;
          },
          ';'
        ),
        u = { default: l.xvT.Body.XS.Regular, small: l.xvT.Body.XXS.Regular },
        h = {
          small: 'Temporarily unavailable.',
          default: 'Position History is temporarily unavailable.',
        };
      var p = (0, i.memo)((e) => {
          let { height: t, variant: r = 'default' } = e,
            i = u[r],
            a = h[r];
          return (0, n.BX)(c, {
            height: t,
            children: [
              (0, n.tZ)(l.JO$, { icon: 'TVLPlain20', color: 'icon.primary' }),
              (0, n.tZ)(l.ZT$, { TextVariant: i, children: a }),
            ],
          });
        }),
        g = r(26726);
      let m = {
        default: { borderRadius: 5, hideXAxis: !1, hideYAxis: !1 },
        small: {
          borderRadius: 20,
          hideBorder: !0,
          hideXAxis: !0,
          hideYAxis: !0,
          margins: [1, 1, 1, 1],
        },
      };
      var f = (0, i.memo)((e) => {
          var t;
          let { data: r, statuses: a, variant: o = 'default', className: s } = e,
            d = (0, g.nh)(g.TP.POSITION_HISTORY),
            { palette: c } = (0, l.rFV)(),
            { theme: u } = (0, l.TCT)(),
            { borderRadius: h, hideXAxis: f, margins: y, hideBorder: v, hideYAxis: x } = m[o],
            b = (0, i.useMemo)(() => !(0, l.ckA)(null != r ? r : []), [r]);
          return d
            ? (0, n.tZ)(l._9J, {
                className: s,
                statuses: a,
                unit: '$',
                hideXAxis: f,
                hideYAxis: x,
                borderRadius: h,
                margins: y,
                hideBorder: v,
                noAnimation: !0,
                series: b
                  ? [
                      {
                        type: 'areaspline',
                        name: 'Your Deposits',
                        data: r,
                        color: c.colors[0],
                        lineColor: c.colors[0],
                        fillColor: c.areaChartColors[0],
                      },
                    ]
                  : [],
                plotlinesY: [
                  {
                    value:
                      (null == r ? void 0 : null === (t = r[0]) || void 0 === t ? void 0 : t[1]) ||
                      void 0,
                    color: u.colors.border.primary,
                    dashStyle: 'Dash',
                    width: 2,
                  },
                ],
                height: 'inherit',
                flexGrow: 1,
              })
            : (0, n.tZ)(p, { height: 'inherit', variant: o });
        }),
        y = r(76992),
        v = r(18313),
        x = r(81919);
      let b = (0, d.Z)('div', { target: 'e9l35f0' })(
          'gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';justify-content:space-between;flex-direction:row;display:flex;'
        ),
        w = (0, d.Z)(o.E.div, { target: 'e9l35f1' })(
          'display:flex;align-items:center;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';flex-wrap:wrap;justify-content:flex-end;'
        );
      var Z = r(58191),
        S = (0, i.memo)((e) => {
          let { isExpanded: t, isHovered: r } = e;
          return (0, n.tZ)(l.Kqy, {
            background: r ? 'background.primary' : 'transparent',
            color: r ? 'icon.primary' : 'text.secondary',
            borderRadius: '50%',
            width: 26,
            height: 26,
            justify: 'center',
            align: 'center',
            style: { transition: 'background-color 0.05s ease-in-out' },
            children: t
              ? (0, n.tZ)(Z.CollapsePlain20, { isExpanded: !r })
              : (0, n.tZ)(Z.ExpandPlain20, { isExpanded: r }),
          });
        }),
        k = (0, i.memo)((e) => {
          let { title: t, state: r, isFilterDisabled: i, totalSlot: d } = e,
            { theme: c } = (0, l.TCT)(),
            u = (0, l.dD4)(),
            h = r.isSmall || r.isExpanded,
            p = (0, g.nh)(g.TP.POSITION_HISTORY);
          return (0, n.BX)(b, {
            children: [
              (0, n.BX)(l.Kqy, {
                direction: 'column',
                gap: 'xs',
                children: [
                  (0, n.BX)(l.Kqy, {
                    gap: 'xs',
                    align: 'center',
                    children: [
                      (0, n.tZ)(l.xvT.Body.XS.Regular, {
                        color: 'text.secondary',
                        lineHeight: 'normal',
                        children: t,
                      }),
                      (0, n.tZ)(a.M, {
                        mode: 'wait',
                        children:
                          !r.isSmall &&
                          (0, n.tZ)(S, { isExpanded: r.isExpanded, isHovered: r.isHovered }),
                      }),
                    ],
                  }),
                  (0, n.BX)(l.Kqy, {
                    gap: 's',
                    align: 'center',
                    children: [
                      d,
                      p &&
                        (r.isLoading
                          ? (0, n.tZ)(l.OdW, {
                              height: '18px',
                              width: '50px',
                              borderRadius: '120px',
                            })
                          : (0, n.tZ)(x.Z, { formattedData: r.data })),
                    ],
                  }),
                ],
              }),
              (0, n.BX)(a.M, {
                mode: 'wait',
                initial: !1,
                children: [
                  h &&
                    (0, n.BX)(
                      w,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.2 },
                        children: [
                          r.setMode &&
                            r.modeOptions &&
                            r.mode &&
                            (0, n.tZ)(n.HY, {
                              children: u
                                ? (0, n.tZ)(l.PhF, {
                                    options: r.modeOptions,
                                    value: r.mode,
                                    onChange: r.setMode,
                                    triggerClassName:
                                      s.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                                  })
                                : (0, n.tZ)(y.E, {
                                    variant: 'secondary',
                                    id: 'chart-options-mode',
                                    options: r.modeOptions,
                                    value: r.mode,
                                    onChange: r.setMode,
                                    className: s.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                                  }),
                            }),
                          (0, n.tZ)(l.PhF, {
                            options: v.SC,
                            value: r.timeFrame,
                            onChange: r.setTimeFrame,
                            disabled: i,
                            triggerClassName: s.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                          }),
                        ],
                      },
                      'card-dashboard-select'
                    ),
                  !h &&
                    (0, n.tZ)(
                      o.E.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.2 },
                        style: {
                          border: p ? '1px solid '.concat(c.colors.border.primary) : void 0,
                          borderRadius: '20px',
                          overflow: 'hidden',
                          maxWidth: '252px',
                          width: '100%',
                          height: '91px',
                        },
                        children: (0, n.tZ)(f, {
                          data: r.data,
                          statuses: { loading: r.isLoading, error: r.error },
                          variant: 'small',
                        }),
                      },
                      'card-dashboard-mini-chart'
                    ),
                ],
              }),
            ],
          });
        }),
        R = (0, i.memo)((e) => {
          let { title: t, totalSlot: r, state: d, isFilterDisabled: c } = e,
            u = (0, l.dD4)(),
            h = d.isSmall || d.isExpanded,
            [p, g] = (0, i.useState)(d.isSmall),
            m = (0, i.useRef)(d.isExpanded),
            y = !m.current;
          (0, i.useEffect)(() => {
            if (d.isSmall) {
              g(!0);
              return;
            }
            if (h) {
              let e = setTimeout(
                () => {
                  g(!0);
                },
                m.current ? 0 : 200
              );
              return () => {
                clearTimeout(e), g(!1);
              };
            }
          }, [h, d.isSmall]),
            (0, i.useEffect)(() => {
              d.isExpanded || (m.current = !1);
            }, [d.isExpanded]);
          let v = (0, i.useMemo)(() => {
            var e;
            return !(0, l.ckA)(null !== (e = d.data) && void 0 !== e ? e : []);
          }, [d.data]);
          return (0, n.BX)(l.Zbd, {
            background: 'transparent',
            direction: 'column',
            gap: 'm',
            padding: 0,
            grow: 1,
            children: [
              (0, n.tZ)(k, { title: t, totalSlot: r, state: d, isFilterDisabled: c }),
              (0, n.tZ)(a.M, {
                mode: 'sync',
                initial: !1,
                children:
                  h && p
                    ? (0, n.tZ)(
                        o.E.div,
                        {
                          layout: !0,
                          initial: y ? { opacity: 0, z: 0 } : void 0,
                          animate: { opacity: 1, transition: { delay: y ? 0.2 : 0, z: 0 } },
                          className: s.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                          exit: { opacity: 0, z: 0, height: 0 },
                          transition: { duration: 0.2 },
                          style: {
                            height: d.isSmall ? (u ? '200px' : '322px') : '100%',
                            width: '100%',
                            display: 'flex',
                          },
                          children: (0, n.tZ)(f, {
                            data: v ? d.data : void 0,
                            statuses: { loading: d.isLoading, error: d.error },
                            variant: 'default',
                            className: s.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                          }),
                        },
                        'card-dashboard-chart'
                      )
                    : null,
              }),
            ],
          });
        });
      let C = {
          small: { height: { expanded: 'unset', collapsed: 'unset' } },
          large: { height: { expanded: '500px', collapsed: '155px' } },
        },
        T = (e) => {
          let t = e.isSmall ? 'small' : 'large',
            r = e.isExpanded ? 'expanded' : 'collapsed';
          return { height: C[t].height[r] };
        },
        { PREVENT_DASHBOARD_CARD_HOVER_CLASS: B, DASHBOARD_CARD_BUTTON_EXPAND_CLASS: E } =
          s.DashboardClass,
        A = (0, d.Z)(l.Zbd, { shouldForwardProp: (e) => 'isExpanded' !== e, target: 'e1uk5o8o0' })(
          'width:100%;padding:',
          (e) => {
            let { theme: t } = e;
            return t.padding.m;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('xs');
          },
          '{padding:',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';padding-top:',
          (e) => {
            let { theme: t } = e;
            return t.padding.m;
          },
          ';padding-bottom:',
          (e) => {
            let { theme: t } = e;
            return t.padding.m;
          },
          ';}gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.m;
          },
          ';height:100%;transition:background-color 0.2s ease-out;.',
          E,
          '{transition:background-color 0.5s ease-out;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.up('m');
          },
          '{&:hover:not(:has(.',
          B,
          ':hover)){cursor:pointer;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.components.tableRowHover;
          },
          ';transition:background-color 0.05s ease-in;.',
          E,
          '{background:',
          (e) => {
            let { theme: t } = e;
            return t.colors.components.tableRowHover;
          },
          ';transition:background-color 0.05s ease-in;svg{color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.primary;
          },
          ';}}}}&:has(.',
          s.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
          ':hover){cursor:',
          (e) => {
            let { isExpanded: t } = e;
            return t ? 'default' : 'pointer';
          },
          ';}'
        );
      var X = (0, i.memo)((e) => {
          let {
              chartMyDepositsSlot: t,
              earnApyCardSlot: r,
              isExpanded: i,
              isSmall: a,
              onMouseEnter: s,
              onMouseLeave: d,
              onClick: c,
            } = e,
            u = T({ isExpanded: i, isSmall: a });
          return a
            ? (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(A, { isExpanded: i, children: t }),
                  (0, n.tZ)(l.Kqy, { fullWidth: !0, children: r }),
                ],
              })
            : (0, n.tZ)(
                o.E.div,
                {
                  layout: !0,
                  animate: { height: u.height },
                  initial: !1,
                  transition: { duration: 0.3, z: 0 },
                  style: { width: '100%' },
                  children: (0, n.BX)(A, {
                    isExpanded: i,
                    onMouseEnter: s,
                    onMouseLeave: d,
                    onClick: c,
                    children: [t, r],
                  }),
                },
                'card-dashboard-layout'
              );
        }),
        M = (0, i.memo)((e) => {
          let { isExpanded: t, isSmall: r } = e,
            i = (0, l.dD4)();
          return (0, n.BX)(l.Kqy, {
            flex: 1,
            direction: 'column',
            fullHeight: !0,
            gap: 'm',
            fullWidth: !0,
            children: [
              (0, n.BX)(l.Kqy, {
                justify: 'space-between',
                align: 'center',
                children: [
                  (0, n.BX)(l.Kqy, {
                    direction: 'column',
                    gap: 'xs',
                    height: i ? 76 : 91,
                    children: [
                      (0, n.tZ)(l.OdW, {
                        height: i ? 16 : 26,
                        borderRadius: '20px',
                        width: i ? 54 : 90,
                      }),
                      (0, n.tZ)(l.OdW, { height: i ? 24 : 53, borderRadius: '20px', width: 160 }),
                    ],
                  }),
                  (0, n.tZ)(a.M, {
                    mode: 'wait',
                    initial: !1,
                    children:
                      !t &&
                      !r &&
                      (0, n.tZ)(
                        o.E.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          transition: { duration: 0.2 },
                          children: (0, n.tZ)(l.OdW, {
                            height: 91,
                            borderRadius: '20px',
                            width: '250px',
                          }),
                        },
                        'card-dashboard-loading'
                      ),
                  }),
                ],
              }),
              (0, n.tZ)(l.OdW, { height: i ? 200 : r ? 329 : 300, borderRadius: '5px' }),
            ],
          });
        }),
        P = (0, i.memo)((e) => {
          let { message: t } = e;
          return (0, n.tZ)(l.Kqy, {
            gap: 'xs',
            align: 'center',
            justify: 'center',
            flex: 1,
            children: (0, n.tZ)(
              o.E.div,
              {
                layout: !0,
                animate: { height: '100%' },
                transition: { duration: 0.2 },
                style: { width: '100%', height: '100%' },
                children: (0, n.tZ)(l.SKT, { width: '100%', height: '100%', text: t }),
              },
              'card-net-apy-error'
            ),
          });
        });
    },
    83661: function (e, t, r) {
      r.d(t, {
        b: function () {
          return g;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(78830),
        o = r(79070),
        l = r(54655),
        s = r(28920),
        d = r(38819);
      let c = (0, d.Z)(l.Kqy, { target: 'ei056x80' })(
          'position:relative;height:32px;align-items:center;'
        ),
        u = (0, d.Z)(l.Kqy, { target: 'ei056x81' })(
          'position:absolute;top:1px;right:1px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.brand;
          },
          ';width:8px;height:8px;border-radius:50%;display:flex;justify-content:center;align-items:center;text-align:center;',
          (0, l.ClW)(l.c15, '300ms'),
          ';'
        ),
        h = (0, d.Z)('span', { target: 'ei056x82' })(
          'white-space:nowrap;',
          (e) => {
            let { theme: t } = e;
            return l.IED.body.xxs.regular(t, { color: 'text.secondary' });
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('xs');
          },
          '{',
          (e) => {
            let { theme: t } = e;
            return l.IED.body.xs.regular(t, { color: 'text.secondary' });
          },
          '}'
        ),
        p = {
          vault: {
            apy: {
              title: 'Net APY',
              tooltip: "The net APY you're earning across all Morpho Vaults.",
              tooltipButton: 'View your Net APY.',
            },
            reward: {
              title: 'Claimable Rewards',
              tooltip: 'Rewards that you can claim from Morpho.',
            },
          },
          market: {
            apy: {
              title: 'Net Rate',
              tooltip: "The net rate you're borrowing across all Morpho Markets.",
              tooltipButton: 'View your Net Rate.',
            },
            reward: {
              title: 'Claimable Rewards',
              tooltip: 'Rewards that you can claim from Morpho.',
            },
          },
        };
      var g = (0, i.memo)((e) => {
        let {
            value: t,
            isExpanded: r,
            isSimulated: i,
            variant: d,
            mode: g,
            onModeChange: m,
            hasRewardClaimable: f,
            loading: y,
          } = e,
          v = p[d][g].tooltip,
          x = p[d][g].title,
          b = p[d].apy.tooltipButton;
        return (0, n.BX)(s.xN, {
          isExpanded: r,
          children: [
            (0, n.BX)(l.Kqy, {
              gap: 'xs',
              direction: 'column',
              align: 'start',
              children: [
                (0, n.BX)(l.Kqy, {
                  direction: 'row',
                  gap: 'xs',
                  children: [
                    (0, n.tZ)(l.ua7, {
                      content: v,
                      disabled: !v,
                      children: (0, n.tZ)(h, { children: x }),
                    }),
                    'reward' === g &&
                      (0, n.tZ)(l.bEE, {
                        tooltipContent: 'Some rewards may be claimable from Merkl.',
                      }),
                  ],
                }),
                y && 'reward' === g
                  ? (0, n.tZ)(l.OdW, { width: '72px', height: '24px' })
                  : (0, n.BX)(l.Kqy, {
                      gap: 1,
                      children: [
                        'reward' === g &&
                          (0, n.tZ)(l.xvT.Title.XS, { color: 'text.tertiary', children: '$' }),
                        (0, n.tZ)(l.ZT$, {
                          TextVariant: l.xvT.Title.XS,
                          color: 'text.body',
                          isSimulated: i && 'apy' === g,
                          children: t,
                        }),
                        'apy' === g &&
                          (0, n.tZ)(l.ZT$, {
                            TextVariant: l.xvT.Title.XS,
                            isSimulated: i,
                            color: 'text.tertiary',
                            children: '%',
                          }),
                      ],
                    }),
              ],
            }),
            (0, n.BX)(l.Kqy, {
              gap: 'xs',
              align: 'center',
              children: [
                (0, n.tZ)(a.M, {
                  mode: 'wait',
                  initial: !1,
                  children: (0, n.tZ)(l.ua7, {
                    content: b,
                    children: r
                      ? (0, n.tZ)(
                          o.E.div,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.1 },
                            children: (0, n.tZ)(l.zxk, {
                              variant: 'apy' === g ? 'secondary' : 'ghost',
                              size: 'small',
                              iconLeft: 'InterestGeneratedPlain20',
                              label: 'APY',
                              onClick: () => m('apy'),
                            }),
                          },
                          'apy-button-expanded'
                        )
                      : (0, n.tZ)(
                          o.E.div,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.1 },
                            children: (0, n.tZ)(l.zxk, {
                              variant: 'apy' === g ? 'secondary' : 'ghost',
                              iconAlone: 'InterestGeneratedPlain20',
                              onClick: () => m('apy'),
                            }),
                          },
                          'apy-button-collapsed'
                        ),
                  }),
                }),
                (0, n.BX)(c, {
                  children: [
                    f && (0, n.tZ)(u, {}),
                    (0, n.tZ)(a.M, {
                      mode: 'wait',
                      initial: !1,
                      children: (0, n.tZ)(l.ua7, {
                        content: 'View and claim your rewards.',
                        children: r
                          ? (0, n.tZ)(
                              o.E.div,
                              {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: { duration: 0.1 },
                                children: (0, n.tZ)(l.zxk, {
                                  'data-testid': 'reward-button',
                                  size: 'small',
                                  variant: 'reward' === g ? 'secondary' : 'ghost',
                                  iconLeft: 'RewardsPlain20',
                                  label: 'Rewards',
                                  onClick: () => m('reward'),
                                }),
                              },
                              'reward-button-expanded'
                            )
                          : (0, n.tZ)(
                              o.E.div,
                              {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: { duration: 0.1 },
                                children: (0, n.tZ)(l.zxk, {
                                  'data-testid': 'reward-button',
                                  variant: 'reward' === g ? 'secondary' : 'ghost',
                                  iconAlone: 'RewardsPlain20',
                                  onClick: () => m('reward'),
                                }),
                              },
                              'reward-button-collapsed'
                            ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
    },
    3694: function (e, t, r) {
      r.d(t, {
        O: function () {
          return B;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(27878),
        o = r(55385),
        l = r(60626),
        s = r(54655),
        d = r(99971),
        c = r(43779),
        u = r(89991),
        h = r(81066),
        p = r(71618),
        g = r(38819);
      let m = (0, g.Z)('div', { target: 'egmjgf40' })(
          'height:346px;display:flex;flex-direction:column;justify-content:space-between;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{height:auto;}'
        ),
        f = (0, g.Z)(a.l_, {
          shouldForwardProp: (e) => 'hasOneRewardProvider' !== e,
          target: 'egmjgf41',
        })(
          'max-height:',
          (e) => {
            let { hasOneRewardProvider: t } = e;
            return t ? '218px' : '192px';
          },
          ';'
        ),
        y = (0, g.Z)('div', { target: 'egmjgf42' })(
          'position:relative;bottom:0;width:100%;padding:',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';display:flex;flex-direction:column;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{padding-bottom:',
          (e) => {
            let { theme: t } = e;
            return t.padding.m;
          },
          ';}'
        );
      var v = r(42418),
        x = r(35047),
        b = r(40252),
        w = r(50825),
        Z = r(5469);
      let S = (0, g.Z)('div', { target: 'e2j7l80' })(
        'display:flex;align-items:center;padding:',
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
      );
      var k = (0, i.memo)((e) => {
          let { asset: t, type: r } = e,
            { targetChainId: a } = (0, u.Z_)(),
            o = (0, i.useMemo)(
              () => b.ChainUtils.getExplorerAddressUrl(a, t.address),
              [t.address, a]
            ),
            l = (0, i.useMemo)(() => (0, s.GQT)(t.address), [t.address]),
            d = (0, i.useMemo)(() => !(0, s.Czs)(t.address), [t.address]);
          return (0, n.BX)(S, {
            children: [
              (0, n.BX)(s.Kqy, {
                gap: 4,
                align: 'center',
                children: [
                  (0, n.tZ)(s.qEK, { src: t.logoURI }),
                  (0, n.tZ)(s.xvT.Body.XXS.Regular, { children: t.symbol }),
                  d &&
                    (0, n.tZ)(s.mUV, {
                      toCopy: t.address,
                      toastMessage: 'Address copied to clipboard.',
                      tooltipMessage: 'Copy address.',
                      size: 'small',
                    }),
                ],
              }),
              'safe' === r
                ? (0, n.tZ)(w.Z, {
                    href: Z.z,
                    buttonProps: { variant: 'secondary', size: 'small', label: 'Learn more' },
                  })
                : (0, n.tZ)(w.Z, {
                    href: o,
                    buttonProps: { variant: 'secondary', size: 'small', label: l },
                  }),
            ],
          });
        }),
        R = (0, i.memo)((e) => {
          var t, r;
          let { reward: i, maxWidth: a } = e,
            o = null === (t = i.rewardToken) || void 0 === t ? void 0 : t.token;
          return o
            ? (0, n.tZ)(s.KNv, {
                hoverCardContent: (0, n.tZ)(k, { asset: o, type: i.type }),
                padding: '2px 6px',
                children: (0, n.BX)(s.Kqy, {
                  align: 'center',
                  gap: 2,
                  maxWidth: a,
                  children: [
                    (0, n.tZ)(s.qEK, { src: null == o ? void 0 : o.logoURI, size: 'medium' }),
                    (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                      lineHeight: 'normal',
                      shorten: 1,
                      children: (0, x.formatLongString)(
                        null !== (r = null == o ? void 0 : o.symbol) && void 0 !== r ? r : '',
                        8
                      ),
                    }),
                  ],
                }),
              })
            : (0, n.tZ)(s.Kqy, {
                padding: '2px 6px',
                children: (0, n.tZ)(s.qEK, { size: 'medium' }),
              });
        });
      let C = [
          {
            accessorKey: 'rewardToken.token.symbol',
            header: () =>
              (0, n.tZ)(s.ua7, {
                content: "The token you're earning rewards in.",
                children: (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  marginLeft: '7px',
                  children: 'Token',
                }),
              }),
            cell: (e) => {
              let { row: t } = e;
              return (0, n.tZ)(R, { reward: t.original, maxWidth: '100px' });
            },
            skeletonCell: (0, n.BX)(s.Kqy, {
              align: 'center',
              gap: 2,
              children: [
                (0, n.tZ)(s.OdW, { width: '24px', height: '24px', borderRadius: '50px' }),
                (0, n.tZ)(s.OdW, { width: '56px', height: '16px' }),
              ],
            }),
          },
          {
            accessorKey: 'claimable',
            sortingFn: (e, t) => {
              var r, n, i, a;
              return (0, v.JJ)(
                null !==
                  (i =
                    null === (r = e.original.claimable) || void 0 === r ? void 0 : r.amountUsd) &&
                  void 0 !== i
                  ? i
                  : 0n,
                null !==
                  (a =
                    null === (n = t.original.claimable) || void 0 === n ? void 0 : n.amountUsd) &&
                  void 0 !== a
                  ? a
                  : 0n
              );
            },
            header: () =>
              (0, n.tZ)(s.ua7, {
                content: 'Rewards that are currently claimable.',
                children: (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  children: 'Claimable',
                }),
              }),
            cell: (e) => {
              var t, r, i;
              let { row: a } = e;
              return 'safe' === a.original.type
                ? null
                : (0, n.tZ)(s.F4u, {
                    token: null === (t = a.original.rewardToken) || void 0 === t ? void 0 : t.token,
                    amount: null === (r = a.original.claimable) || void 0 === r ? void 0 : r.amount,
                    amountUsd:
                      null === (i = a.original.claimable) || void 0 === i ? void 0 : i.amountUsd,
                  });
            },
            skeletonCell: (0, n.BX)(s.Kqy, {
              direction: 'column',
              gap: 2,
              children: [
                (0, n.tZ)(s.OdW, { width: '30px', height: '17px' }),
                (0, n.tZ)(s.OdW, { width: '36px', height: '17px' }),
              ],
            }),
          },
          {
            accessorKey: 'accruing',
            sortingFn: (e, t) => {
              var r, n, i, a;
              return (0, v.JJ)(
                null !==
                  (i = null === (r = e.original.accruing) || void 0 === r ? void 0 : r.amountUsd) &&
                  void 0 !== i
                  ? i
                  : 0n,
                null !==
                  (a = null === (n = t.original.accruing) || void 0 === n ? void 0 : n.amountUsd) &&
                  void 0 !== a
                  ? a
                  : 0n
              );
            },
            header: () =>
              (0, n.tZ)(s.ua7, {
                content: 'Accruing rewards that will be claimable at the end of this epoch.',
                children: (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                  color: 'text.secondary',
                  children: 'Accruing',
                }),
              }),
            cell: (e) => {
              var t, r, i;
              let { row: a } = e;
              return 'safe' === a.original.type
                ? null
                : (0, n.tZ)(s.F4u, {
                    token: null === (t = a.original.rewardToken) || void 0 === t ? void 0 : t.token,
                    amount: null === (r = a.original.accruing) || void 0 === r ? void 0 : r.amount,
                    amountUsd:
                      null === (i = a.original.accruing) || void 0 === i ? void 0 : i.amountUsd,
                  });
            },
            skeletonCell: (0, n.BX)(s.Kqy, {
              direction: 'column',
              gap: 2,
              children: [
                (0, n.tZ)(s.OdW, { width: '30px', height: '17px' }),
                (0, n.tZ)(s.OdW, { width: '36px', height: '17px' }),
              ],
            }),
          },
        ],
        T = { claimable: 'Claimable amount', accruing: 'Accruing amount' };
      var B = (0, i.memo)((e) => {
        let { rewardData: t } = e,
          { targetChain: r } = (0, u.Z_)(),
          { toggleDialog: g } = (0, s.DAv)(),
          [v, x] = (0, i.useState)([{ id: 'claimable', desc: !0 }]),
          b = (0, i.useMemo)(
            () => C.map((e) => ({ ...e, enableSorting: t.display.rewardsMerged.length > 1 })),
            [t.display.rewardsMerged.length]
          ),
          w = (0, o.b7)({
            data: t.display.rewardsMerged,
            getCoreRowModel: (0, l.sC)(),
            onSortingChange: x,
            getSortedRowModel: (0, l.tj)(),
            manualSorting: !1,
            state: { sorting: v },
            columns: b,
            enableSortingRemoval: !1,
            sortDescFirst: !0,
            manualPagination: !0,
          }),
          Z = (0, i.useCallback)(() => {
            g((0, n.tZ)(d.ar, {}));
          }, [g]),
          S = (0, i.useCallback)(() => {
            g((0, n.tZ)(d.GI, {}));
          }, [g]),
          k = Array.from({ length: 2 }, () => C.map((e) => e.skeletonCell)),
          R = (0, i.useMemo)(
            () =>
              t.display.rewardsMorpho
                .filter((e) => e.type !== h.Ii.Merkl)
                .some((e) => {
                  var t;
                  return null === (t = e.claimable) || void 0 === t ? void 0 : t.amount;
                }),
            [t.display.rewardsMorpho]
          ),
          B = (0, i.useMemo)(
            () =>
              t.display.rewardsMerkl
                .filter((e) => e.type === h.Ii.Merkl)
                .some((e) => {
                  var t;
                  return null === (t = e.claimable) || void 0 === t ? void 0 : t.amount;
                }),
            [t.display.rewardsMerkl]
          );
        return t.error
          ? (0, n.tZ)(p.bX, { message: 'Something went wrong.' })
          : 0 !== t.display.rewardsMerged.length || t.loading
            ? (0, n.BX)(m, {
                'data-testid': 'reward-card',
                children: [
                  (0, n.BX)('div', {
                    children: [
                      (0, n.tZ)(c.Ei.Root, {
                        children: (0, n.tZ)(c.Ei.Thead, {
                          children: w
                            .getHeaderGroups()
                            .map((e) => (0, n.tZ)(c._5, { headerGroup: e, columnLabels: T }, e.id)),
                        }),
                      }),
                      (0, n.BX)(a.fC, {
                        children: [
                          (0, n.tZ)(f, {
                            hasOneRewardProvider: B !== R || (!B && !R),
                            children: (0, n.tZ)(c.Ei.Root, {
                              children: (0, n.BX)(c.Ei.Tbody, {
                                children: [
                                  !t.loading &&
                                    w
                                      .getRowModel()
                                      .rows.map((e) => (0, n.tZ)(c.KL, { row: e }, e.id)),
                                  t.loading &&
                                    k.map((e, t) =>
                                      (0, n.tZ)(
                                        c.KL,
                                        { skeletonRow: e },
                                        t + 'skeleton-table-reward'
                                      )
                                    ),
                                ],
                              }),
                            }),
                          }),
                          (0, n.tZ)(a.LW, {
                            orientation: 'vertical',
                            children: (0, n.tZ)(a.bU, {}),
                          }),
                          (0, n.tZ)(a.Ns, {}),
                        ],
                      }),
                    ],
                  }),
                  !t.loading &&
                    (0, n.BX)(y, {
                      children: [
                        B &&
                          (0, n.tZ)(s.zxk, {
                            onClick: S,
                            style: { width: '100%' },
                            size: R ? 'default' : 'big',
                            'data-testid': 'claim-merkl-button',
                            children: (0, n.BX)(s.Kqy, {
                              align: 'center',
                              gap: 4,
                              children: [
                                (0, n.tZ)(s.JO$, { icon: 'RewardsPlain20' }),
                                R
                                  ? (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                                      lineHeight: 'normal',
                                      color: 'text.button.primary',
                                      children: 'Claim on',
                                    })
                                  : (0, n.tZ)(s.xvT.Body.S.Regular, {
                                      lineHeight: 'normal',
                                      color: 'text.button.primary',
                                      children: 'Claim on',
                                    }),
                                (0, n.tZ)(s.JO$, {
                                  icon: 'MerklPlain32',
                                  size: R ? 32 : 40,
                                  color: 'icon.button.primary',
                                }),
                              ],
                            }),
                          }),
                        (R || (!R && !B)) &&
                          (0, n.tZ)(s.zxk, {
                            onClick: Z,
                            style: { width: '100%' },
                            size: B ? 'default' : 'big',
                            disabled: !R,
                            'data-testid': 'claim-morpho-button',
                            children: (0, n.BX)(s.Kqy, {
                              align: 'center',
                              gap: 4,
                              children: [
                                (0, n.tZ)(s.JO$, { icon: 'RewardsPlain20' }),
                                B
                                  ? (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                                      lineHeight: 'normal',
                                      color: 'text.button.primary',
                                      children: 'Claim on Morpho',
                                    })
                                  : (0, n.tZ)(s.xvT.Body.S.Regular, {
                                      lineHeight: 'normal',
                                      color: R ? 'text.button.primary' : 'icon.button.disabled',
                                      children: 'Claim on Morpho',
                                    }),
                              ],
                            }),
                          }),
                      ],
                    }),
                ],
              })
            : (0, n.tZ)(p.bX, {
                message: 'You currently have no claimable or accruing rewards on '.concat(
                  r.name,
                  '.'
                ),
              });
      });
    },
    73694: function (e, t, r) {
      r.d(t, {
        $F: function () {
          return c;
        },
        Im: function () {
          return s;
        },
        K9: function () {
          return l;
        },
        ML: function () {
          return d;
        },
        OO: function () {
          return o;
        },
        PQ: function () {
          return a;
        },
        UZ: function () {
          return h;
        },
        w6: function () {
          return u;
        },
      });
      var n = r(38819),
        i = r(54655);
      let a = (0, n.Z)('div', { target: 'e8gjljs0' })(
          'display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:0 auto;height:calc(40vw - 200px);width:100%;min-height:380px;max-height:520px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.containerDown('xl');
          },
          '{padding:0 10px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{flex-direction:column-reverse;min-height:unset;max-height:unset;height:unset;margin-top:-13px;padding-bottom:50px;}'
        ),
        o = (0, n.Z)('div', { target: 'e8gjljs1' })(
          'display:flex;gap:60px;flex-direction:column;justify-content:flex-start;align-items:flex-start;text-align:left;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.containerDown('xl');
          },
          '{padding:0 10px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{padding:0;text-align:center;align-items:center;width:100%;gap:32px;}'
        ),
        l = (0, n.Z)(i.xvT.Title.L, { target: 'e8gjljs2' })('white-space:nowrap;'),
        s = (0, n.Z)(i.xvT.Title.M, { target: 'e8gjljs3' })('white-space:nowrap;'),
        d = (0, n.Z)(i.xvT.Title.S, { target: 'e8gjljs4' })(),
        c = (0, n.Z)(i.xvT.Title.XS, { target: 'e8gjljs5' })('font-size:8vw;'),
        u = (0, n.Z)('div', { target: 'e8gjljs6' })(
          'opacity:0;transform:translate(0,40px);transition:800ms ',
          (e) => {
            let { theme: t } = e;
            return t.easings.aggressiveOut;
          },
          ';transition-property:opacity,transform;'
        ),
        h = (0, n.Z)('video', { target: 'e8gjljs7' })(
          'height:calc(100% + 100px);margin-right:24px;aspect-ratio:512 / 800;object-fit:contain;flex-shrink:0;opacity:0;transform:scale(0.84);transition:1400ms ',
          (e) => {
            let { theme: t } = e;
            return t.easings.aggressiveOut;
          },
          ';transition-property:opacity,transform;position:relative;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.containerDown('l');
          },
          '{margin-right:0;height:calc(100% + 80px);}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.containerDown(830);
          },
          '{height:calc(100% + 20px);margin-right:-8px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.containerDown('xl');
          },
          '{margin-left:-200px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{margin:10px 0;width:100%;height:280px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('xs');
          },
          '{height:200px;}'
        );
    },
    85462: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(40388),
        l = r(89991),
        s = r(70064),
        d = r(73694);
      function c(e, t) {
        setTimeout(() => {
          (e.style.opacity = '1'), (e.style.transform = 'translate(0, 0)');
        }, t);
      }
      t.Z = (0, i.memo)((e) => {
        let {
            title: t,
            animationMovURL: r,
            animationWebmURL: u,
            metricSlot: h,
            animationSpeed: p,
          } = e,
          { modal: g } = (0, l.Z_)(),
          { theme: m } = (0, a.TCT)(),
          f = (0, a.ach)(m.breakpoints.down('s')),
          y = (0, a.ach)(m.breakpoints.down('xs')),
          v = (0, a.ach)(m.breakpoints.down('m')),
          x = (0, i.useRef)([]),
          b = (e) => (t) => {
            x.current && (x.current[e] = t);
          };
        (0, i.useLayoutEffect)(() => {
          x.current.forEach((e, t) => {
            e && c(e, 500 + 150 * t);
          });
        }, [y, f, v]);
        let w = (0, i.useMemo)(
            () =>
              (0, n.BX)(n.HY, {
                children: [
                  (0, n.tZ)(d.w6, { ref: b(1), children: t[0] }, '0'),
                  (0, n.tZ)(d.w6, { ref: b(2), children: t[1] }, '1'),
                ],
              }),
            [t]
          ),
          Z = (0, n.tZ)(d.K9, { children: w });
        y
          ? (Z = (0, n.tZ)(d.$F, { children: w }))
          : f
            ? (Z = (0, n.tZ)(d.ML, { children: w }))
            : v && (Z = (0, n.tZ)(d.Im, { children: w }));
        let S = (0, i.useRef)(null);
        return (
          (0, i.useLayoutEffect)(() => {
            let e = S.current;
            if (!e) return;
            (e.volume = 0),
              (e.muted = !0),
              'number' != typeof p || isNaN(p) || (e.playbackRate = p);
            let t = async () => {
              try {
                await e.play(), c(e, 100);
              } catch (e) {}
            };
            if (e.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
              t();
              return;
            }
            return (
              e.addEventListener('canplay', t),
              () => {
                e.removeEventListener('canplay', t);
              }
            );
          }, [p]),
          (0, i.useEffect)(() => {
            let e = S.current;
            e && e.load();
          }, [r, u]),
          (0, n.BX)(d.PQ, {
            children: [
              (0, n.BX)(d.OO, {
                children: [
                  (0, n.tZ)(d.w6, {
                    ref: b(0),
                    children: (0, n.tZ)(s.Z, {
                      fallback: (0, n.tZ)(n.HY, {}),
                      children: (0, n.tZ)(i.Suspense, {
                        fallback: (0, n.tZ)(a.OdW, {
                          borderRadius: '50px',
                          width: 220,
                          height: 31,
                        }),
                        children: h,
                      }),
                    }),
                  }),
                  Z,
                  (0, n.tZ)(d.w6, {
                    ref: b(3),
                    children: (0, n.tZ)(o.default, {
                      onClick: () => g.open(),
                      children: 'Connect Wallet',
                    }),
                  }),
                ],
              }),
              (0, n.BX)(d.UZ, {
                loop: !0,
                autoPlay: !0,
                preload: 'metadata',
                playsInline: !0,
                muted: !0,
                ref: S,
                children: [
                  (0, n.tZ)('source', { src: r, type: 'video/mp4; codecs="hvc1"' }),
                  (0, n.tZ)('source', { src: u, type: 'video/webm; codecs=vp09.00.41.08' }),
                ],
              }),
            ],
          })
        );
      });
    },
    68690: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(73694);
      t.Z = (0, i.memo)(() => (0, n.tZ)(a.PQ, {}));
    },
    30328: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(70064),
        l = r(4078),
        s = r(89991),
        d = r(68690);
      t.default = (0, i.memo)((e) => {
        let { dashboardSlot: t, dashboardSkeleton: r, disconnectedSlot: c } = e,
          {
            account: { isConnected: u },
          } = (0, s.Z_)(),
          h = (0, i.useMemo)(() => (u ? r : (0, n.tZ)(d.Z, {})), [u, r]),
          p = (0, i.useMemo)(() => (u ? t : c), [u, t, c]);
        return (0, n.tZ)(l.default, {
          withOverflowingBottomBorder: !0,
          hasLargerVerticalPadding: !0,
          withoutAside: !0,
          children: (0, n.tZ)(o.Z, {
            fallback: (0, n.BX)(a.Kqy, {
              direction: 'column',
              align: 'center',
              justify: 'center',
              gap: 'm',
              style: { padding: '60px 0 40px 0' },
              children: [
                (0, n.BX)(a.xvT.Title.L, {
                  color: 'text.primary',
                  textAlign: 'center',
                  children: ['Error processing ', u ? 'Dashboard' : 'Hero'],
                }),
                (0, n.tZ)(a.xvT.Body.L.Regular, {
                  color: 'text.primary',
                  textAlign: 'center',
                  children: 'Something went wrong while loading Earn or Borrow data',
                }),
              ],
            }),
            children: (0, n.tZ)(i.Suspense, { fallback: h, children: p }),
          }),
        });
      });
    },
    98718: function (e, t, r) {
      r.d(t, {
        default: function () {
          return m;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(55412),
        l = r(23567),
        s = r(38819);
      function d() {
        let e = (0, o._)(['\n      transform: rotateX(180deg);\n    ']);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        let e = (0, o._)(['\n      transform: rotateX(180deg);\n    ']);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      let u = (0, s.Z)('div', { target: 'ej7nhho0' })('perspective:1000px;'),
        h = (0, s.Z)('div', { target: 'ej7nhho1' })(
          'position:relative;width:100%;height:100%;transition:transform 0.4s;transform-style:preserve-3d;',
          (e) => {
            let { isFlipped: t } = e;
            return t && (0, l.iv)(d());
          }
        ),
        p = (0, s.Z)('div', { target: 'ej7nhho2' })(
          'position:',
          (e) => {
            let { isBack: t } = e;
            return t ? 'absolute' : 'relative';
          },
          ';top:0;left:0;width:100%;height:100%;backface-visibility:hidden;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.tertiary;
          },
          ';border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';display:flex;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ';padding:5px 20px;white-space:nowrap;',
          (e) => {
            let { isBack: t } = e;
            return t && (0, l.iv)(c());
          }
        ),
        g = 'https://x.com/intent/tweet?text='.concat(
          encodeURIComponent('Easter egg found on @MorphoLabs app! My custom colors \uD83D\uDC47')
        );
      var m = (0, i.memo)(function (e) {
        let { label: t, value: r } = e,
          { toggleLeva: o } = (0, a.TCT)(),
          [l, s] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          o(l);
        }, [l, o]);
        let d = (0, i.useMemo)(() => a.$0l.commas.digits(0).unit('$').trailingZero(!1).of(r), [r]);
        return d
          ? (0, n.tZ)(u, {
              onClick: () => {
                s((e) => !e);
              },
              children: (0, n.BX)(h, {
                isFlipped: l,
                children: [
                  (0, n.BX)(p, {
                    children: [
                      (0, n.tZ)(a.xvT.Body.XS.Regular, { color: 'text.secondary', children: t }),
                      (0, n.tZ)(a.xvT.Body.XS.Regular, { color: 'text.primary', children: d }),
                    ],
                  }),
                  (0, n.tZ)(p, {
                    isBack: !0,
                    children: (0, n.BX)(a.Kqy, {
                      justify: 'space-between',
                      align: 'center',
                      gap: 6,
                      grow: 1,
                      children: [
                        (0, n.BX)(a.Kqy, {
                          align: 'center',
                          gap: 6,
                          children: [
                            (0, n.tZ)(a.xvT.Body.XS.Regular, {
                              color: 'text.secondary',
                              children: 'You found a',
                            }),
                            (0, n.tZ)(a.JO$, { icon: 'MorphoGradient20', size: 16 }),
                          ],
                        }),
                        (0, n.tZ)(a.dLw, {
                          href: g,
                          children: (0, n.BX)(a.zxk, {
                            size: 'small',
                            variant: 'ghost',
                            style: { padding: '0 4px' },
                            onClick: (e) => {
                              e.stopPropagation();
                            },
                            children: [
                              (0, n.tZ)(a.JO$, {
                                icon: 'XPlain20',
                                size: 14,
                                color: 'text.secondary',
                              }),
                              (0, n.tZ)(a.JO$, {
                                icon: 'ArrowDiagonalUpPlain20',
                                size: 16,
                                color: 'text.secondary',
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null;
      });
    },
    76600: function (e, t, r) {
      r.d(t, {
        _: function () {
          return v;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(85957),
        l = r(12556),
        s = r(54899);
      let d = { earn: 'Earn', borrow: 'Borrow' },
        c = (e, t) =>
          ''
            .concat(e, ' ')
            .concat(d[t], ' ')
            .concat((0, a._6H)(e, 'Position'));
      var u = (0, i.memo)((e) => {
          let { chainId: t, count: r, variant: d } = e,
            { navigateTo: u } = (0, s.R)(),
            h = (0, o.useRouter)(),
            p = l.FW.getMetadata(t),
            g = (0, i.useMemo)(() => {
              let e = p.chain.name.toLowerCase(),
                t = 'earn' === d ? 'earn' : 'borrow';
              return '/'.concat(e, '/').concat(t);
            }, [p, d]),
            m = (0, i.useCallback)(() => {
              u(g);
            }, [u, g]);
          return ((0, i.useEffect)(() => {
            h.prefetch(g);
          }, [g, h]),
          p && r)
            ? (0, n.tZ)(a.zxk, {
                onClick: m,
                avatarProps: { src: p.img },
                label: c(r, d),
                size: 'small',
                iconRight: (0, n.tZ)(a.Vp9, {
                  color: 'text.secondary',
                  style: { marginLeft: 4, cursor: 'inherit' },
                  textTransform: 'capitalize',
                  label: p.chain.name,
                }),
                variant: 'ghost',
              })
            : null;
        }),
        h = r(38819),
        p = r(27878);
      let g = (0, h.Z)(p.fC, { target: 'e1so62lt0' })('width:100%;'),
        m = (0, h.Z)(p.l_, { target: 'e1so62lt1' })('width:100%;padding:4px;'),
        f = (0, h.Z)(p.LW, { target: 'e1so62lt2' })('display:none;'),
        y = (0, h.Z)(a.Kqy, { target: 'e1so62lt3' })(
          'gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';flex-direction:row;flex-wrap:nowrap;width:fit-content;min-width:0;display:flex;'
        );
      var v = (0, i.memo)((e) => {
        let { buttons: t, loading: r, skeletonCount: o = 2 } = e,
          l = (0, a.dD4)(),
          s = (0, i.useMemo)(
            () => (null == t ? void 0 : t.sort((e, t) => e.chainId - t.chainId)),
            [t]
          );
        return r
          ? (0, n.tZ)(a.Kqy, {
              style: { marginBottom: l ? '50px' : '0px' },
              justify: 'center',
              align: 'center',
              children: (0, n.tZ)(g, {
                children: (0, n.tZ)(m, {
                  children: (0, n.tZ)(y, {
                    children: Array.from({ length: o }).map((e, t) =>
                      (0, n.tZ)(a.OdW, { height: 26, borderRadius: '20px', width: 150 }, t)
                    ),
                  }),
                }),
              }),
            })
          : (0, n.BX)(g, {
              children: [
                (0, n.tZ)(m, {
                  children: (0, n.tZ)(y, {
                    children:
                      null == s
                        ? void 0
                        : s.map((e) =>
                            (0, n.tZ)(u, { ...e }, ''.concat(e.chainId, '-').concat(e.variant))
                          ),
                  }),
                }),
                (0, n.tZ)(f, { orientation: 'horizontal' }),
              ],
            });
      });
    },
    23698: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(3100),
        o = r(15341),
        l = r(12556),
        s = r(54655);
      let d = r(18313).Cq.AVAILABLE_CHAIN_IDS.map((e) => ({
        id: String(e),
        label: (0, a.Z)(l.FW.getNameById(e)),
        value: e,
        img: l.FW.getMetadata(e).img,
      }));
      t.Z = (0, i.memo)((e) => {
        let { chainIdsFilter: t, handleChainIdsFilterChange: r, disabled: a } = e,
          [l, c] = (0, i.useState)(d),
          u = (0, i.useMemo)(
            () => l.map((e) => ({ ...e, isChecked: t.includes(e.value) })),
            [l, t]
          ),
          h = (0, i.useCallback)(() => {
            c(
              [...d].sort((e, r) => {
                let n = Number(t.includes(e.value));
                return Number(t.includes(r.value)) - n || e.label.localeCompare(r.label);
              })
            );
          }, [t]),
          p = (0, i.useCallback)(
            (e) => {
              r((0, o.Z)(t, [e]));
            },
            [t, r]
          );
        return (0, n.BX)(s.Kqy, {
          align: 'center',
          gap: 'xs',
          children: [
            (0, n.tZ)(s.xvT.Body.XXXS.Regular, { color: 'text.body', children: 'Network:' }),
            (0, n.tZ)(s.h4n, {
              items: u,
              sortItems: h,
              toggleItem: p,
              clear: () => r([]),
              inputPlaceholder: 'Search for network',
              clearTooltipText: 'Remove Network filter',
              withSeparator: !1,
              disabled: a,
            }),
          ],
        });
      });
    },
    68905: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        a = r(3100),
        o = r(15341),
        l = r(56489),
        s = r(54655),
        d = r(28634),
        c = r(81261);
      t.Z = (0, i.memo)((e) => {
        let {
            label: t,
            assets: r,
            assetIdsFilter: u,
            chainIdsFilter: h,
            handleAssetIdsFilterChange: p,
            disabled: g,
          } = e,
          [m, f] = (0, i.useState)(r),
          y = (0, i.useMemo)(
            () =>
              m
                .filter((e) => null == h || !h.length || h.includes(e.chain.id))
                .map((e) => ({
                  id: e.id,
                  label: e.symbol,
                  value: e.id,
                  isChecked: u.includes(e.id),
                  img: e.logoURI,
                  chain: h && { id: e.chain.id, name: (0, a.Z)(e.chain.network) },
                })),
            [m, u, h]
          ),
          v = (0, i.useCallback)(
            (e) => {
              let t = null != e ? e : u;
              f(
                [...r].sort((e, r) => {
                  let n = Number(t.includes(e.id));
                  return Number(t.includes(r.id)) - n || e.symbol.localeCompare(r.symbol);
                })
              );
            },
            [r, u]
          ),
          x = (0, i.useCallback)(
            (e) => {
              p((0, o.Z)(u, [e]));
            },
            [u, p]
          ),
          b = (0, i.useCallback)(
            (e) =>
              e === d.y.ALL
                ? []
                : r
                    .filter((t) => {
                      var r;
                      return null === (r = t.tags) || void 0 === r ? void 0 : r.includes(e);
                    })
                    .map((e) => e.id),
            [r]
          ),
          w = (0, i.useCallback)(
            (e) => {
              let t = b(e.value);
              p(t), v(t);
            },
            [p, b, v]
          ),
          Z = (0, i.useCallback)(() => {
            p([]), v([]);
          }, [p, v]),
          S = (0, i.useMemo)(
            () => [
              { value: d.y.ALL, label: 'All', isActive: !u.length, action: w },
              {
                value: d.y.ETH,
                label: 'Eth',
                isActive: (0, l.Z)(new Set(b(d.y.ETH)), new Set(u)),
                action: w,
                tooltip: 'All ETH related/derivative assets.',
              },
              {
                value: d.y.BTC,
                label: 'Btc',
                isActive: (0, l.Z)(new Set(b(d.y.BTC)), new Set(u)),
                action: w,
                tooltip: 'All BTC related/derivative assets.',
              },
              {
                value: d.y.STABLECOIN,
                label: 'Stables',
                isActive: (0, l.Z)(new Set(b(d.y.STABLECOIN)), new Set(u)),
                action: w,
                tooltip: 'Assets pegged to fiat currencies.',
              },
            ],
            [u, w, b]
          );
        return (0, n.BX)(s.Kqy, {
          align: 'center',
          gap: 'xs',
          children: [
            (0, n.BX)(s.xvT.Body.XXXS.Regular, {
              color: 'text.body',
              children: [(0, a.Z)(t), ':'],
            }),
            (0, n.tZ)(s.h4n, {
              items: y,
              sortItems: v,
              toggleItem: x,
              clear: Z,
              slot: (0, n.tZ)(c.H, { tagOptions: S, assetIdsFilter: u, clear: Z, disabled: g }),
              inputPlaceholder: 'Search for '.concat(t, ' asset'),
              clearTooltipText: 'Remove '.concat((0, a.Z)(t), ' filter'),
              disabled: g,
            }),
          ],
        });
      });
    },
    81261: function (e, t, r) {
      r.d(t, {
        H: function () {
          return s;
        },
      });
      var n = r(78286),
        i = r(58258),
        a = r(54655),
        o = r(89991);
      let l = (0, r(38819).Z)('div', { target: 'epb4mgh0' })(
        'padding:4px 8px;display:flex;gap:',
        (e) => {
          let { theme: t } = e;
          return t.spacing.xxs;
        },
        ';justify-content:space-between;align-items:center;'
      );
      var s = (0, i.memo)((e) => {
        let { tagOptions: t, assetIdsFilter: r, clear: s, disabled: d } = e,
          c = (0, i.useId)(),
          {
            account: { isConnected: u },
          } = (0, o.Z_)();
        return (0, n.BX)(n.HY, {
          children: [
            (0, n.BX)(l, {
              children: [
                (0, n.BX)(a.Kqy, {
                  gap: 'xxs',
                  align: 'center',
                  children: [
                    (0, n.tZ)(a.ket, { id: c, options: t, disabled: d }),
                    u &&
                      (0, n.tZ)(a.ua7, {
                        content: 'Filtering by wallet holdings is coming soon.',
                        withTouch: !0,
                        children: (0, n.tZ)(a.JO$, {
                          icon: 'WalletPlain20',
                          color: 'text.primary',
                          style: { margin: 4, opacity: 0.2, cursor: 'not-allowed' },
                        }),
                      }),
                  ],
                }),
                (0, n.tZ)(a.ua7, {
                  content: 'Clear all filters',
                  disabled: !r.length,
                  children: (0, n.tZ)(a.zxk, {
                    variant: 'ghost',
                    size: 'small',
                    disabled: !r.length,
                    label: 'Clear',
                    onClick: s,
                  }),
                }),
              ],
            }),
            (0, n.tZ)(a.Z0O, {}),
          ],
        });
      });
    },
    28634: function (e, t, r) {
      var n, i;
      r.d(t, {
        y: function () {
          return n;
        },
      }),
        ((i = n || (n = {})).ALL = 'all'),
        (i.STABLECOIN = 'stablecoin'),
        (i.ETH = 'eth'),
        (i.BTC = 'btc');
    },
    34204: function (e, t, r) {
      r.d(t, {
        M: function () {
          return d;
        },
      });
      var n = r(58258),
        i = r(54655),
        a = r(18313),
        o = r(34937),
        l = r(243),
        s = r(83669);
      function d(e) {
        let {
            queryDocument: t,
            queryVariables: r,
            serverQueryVariables: d,
            serverQueryResult: c,
            now: u,
            skipClientQuery: h,
            initialTimeFrame: p = a.B,
            dataExtractor: g,
          } = e,
          [m, f] = (0, n.useState)(p),
          y = (0, n.useMemo)(
            () => ({ ...r, options: (0, o.Ai)({ timeFrame: m, now: u }) }),
            [r, u, m]
          ),
          v = (0, s.s)({
            queryDocument: t,
            queryVariables: y,
            serverQueryVariables: d,
            serverQueryResult: c,
            skipClientQuery: h,
          }),
          { data: x, loading: b, error: w, isNotFound: Z } = (0, n.useMemo)(() => (0, l.I)(v), [v]);
        return {
          timeFrame: m,
          setTimeFrame: f,
          data: (0, n.useMemo)(() => {
            if (!x) return [];
            let e = g(x);
            switch (e.type) {
              case 'BigInt':
                return (0, i.EES)(e.value, e.decimals);
              case 'Float':
              case 'Int':
                return (0, i.EES)(e.value);
            }
          }, [x, g]),
          loading: b,
          error: (0, n.useMemo)(() => (Z ? void 0 : w), [Z, w]),
        };
      }
    },
    93022: function (e, t, r) {
      r.d(t, {
        V: function () {
          return p;
        },
      });
      var n = r(58258),
        i = r(35047),
        a = r(18313),
        o = r(89991),
        l = r(55412);
      function s() {
        let e = (0, l._)([
          '\n  query GetUserPositionCount(\n    $marketPositionFilters: MarketPositionFilters\n    $vaultPositionFilters: VaultPositionFilters\n  ) {\n    marketPositions(where: $marketPositionFilters) {\n      items {\n        id\n        market {\n          id\n          loanAsset {\n            id\n            chain {\n              id\n            }\n          }\n        }\n      }\n      pageInfo {\n        countTotal\n      }\n    }\n    vaultPositions(where: $vaultPositionFilters) {\n      items {\n        id\n        vault {\n          id\n          asset {\n            id\n            chain {\n              id\n            }\n          }\n        }\n      }\n      pageInfo {\n        countTotal\n      }\n    }\n  }\n',
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      let d = (0, r(3245).Ps)(s());
      var c = r(243),
        u = r(83669);
      let h = (e) => {
          let { queryResult: t } = e;
          return (0, n.useMemo)(
            () =>
              a.Cq.AVAILABLE_CHAINS.reduce((e, r) => {
                var n, i;
                return {
                  ...e,
                  [r.id]: {
                    earn:
                      null == t
                        ? void 0
                        : null === (n = t.vaultPositions.items) || void 0 === n
                          ? void 0
                          : n.filter((e) => e.vault.asset.chain.id === r.id).length,
                    borrow:
                      null == t
                        ? void 0
                        : null === (i = t.marketPositions.items) || void 0 === i
                          ? void 0
                          : i.filter((e) => e.market.loanAsset.chain.id === r.id).length,
                  },
                };
              }, {}),
            [t]
          );
        },
        p = (e) => {
          let { queryVariables: t, queryResult: r, type: l } = e,
            { account: s, targetChainId: p } = (0, o.Z_)(),
            g = (0, n.useMemo)(
              () => ({
                ...t,
                marketPositionFilters: {
                  ...(null == t ? void 0 : t.marketPositionFilters),
                  userAddress_in: [s.address],
                },
                vaultPositionFilters: {
                  ...(null == t ? void 0 : t.vaultPositionFilters),
                  userAddress_in: [s.address],
                },
              }),
              [s.address, t]
            ),
            m = (0, n.useMemo)(() => {
              if (!(0, i.isDefined)(s.address) || !(0, i.isDefined)(p)) return !0;
            }, [s.address, p]),
            f = (0, u.s)({
              queryDocument: d,
              queryVariables: g,
              serverQueryResult: r,
              serverQueryVariables: t,
              skipClientQuery: m,
            }),
            {
              data: y,
              loading: v,
              isNotFound: x,
              error: b,
            } = (0, n.useMemo)(() => (0, c.I)(f), [f]);
          if (b && !x) throw b;
          let w = h({ queryResult: y });
          return {
            positionButtons: (0, n.useMemo)(
              () =>
                a.Cq.AVAILABLE_CHAIN_IDS.map((e) =>
                  (0, i.entries)(w[e]).map((t) => {
                    let [r, n] = t;
                    return { chainId: e, count: n, variant: r };
                  })
                )
                  .flat()
                  .filter((e) => !(e.chainId === p && e.variant === l)),
              [w, l, p]
            ),
            loading: v,
            isNotFound: x,
            error: b,
          };
        };
    },
    34334: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return i;
        },
      });
      var n = r(58258);
      function i(e) {
        let { existingAddresses: t, newAddresses: r } = e;
        return (0, n.useMemo)(() => {
          let e = new Set(),
            n = new Set(t);
          return (
            r.forEach((t) => {
              n.has(t) || e.add(t);
            }),
            Array.from(e)
          );
        }, [t, r]);
      }
    },
    42324: function (e, t, r) {
      r.d(t, {
        Cg: function () {
          return l;
        },
        Oi: function () {
          return u;
        },
        S$: function () {
          return g;
        },
        U: function () {
          return h;
        },
      });
      var n = r(58258),
        i = {
          303: 'Multiple adapter contexts detected. This might happen in monorepos.',
          404: 'nuqs requires an adapter to work with your framework.',
          409: 'Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` (via the %s adapter) was about to load on top.',
          414: 'Max safe URL length exceeded. Some browsers may not be able to accept this URL. Consider limiting the amount of state stored in the URL.',
          429: 'URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O',
          500: "Empty search params cache. Search params can't be accessed in Layouts.",
          501: 'Search params cache already populated. Have you called `parse` twice?',
        };
      function a(e) {
        return `[nuqs] ${i[e]}
  See https://err.47ng.com/NUQS-${e}`;
      }
      var o = Symbol('Input');
      function l(e, { urlKeys: t = {} } = {}) {
        let r = (function (e, { urlKeys: t = {} } = {}) {
            return function r(n) {
              if (n instanceof Promise) return n.then((e) => r(e));
              let i = (function (e) {
                  try {
                    if (e instanceof Request) {
                      if (e.url) return new URL(e.url).searchParams;
                      return new URLSearchParams();
                    }
                    if (e instanceof URL) return e.searchParams;
                    if (e instanceof URLSearchParams) return e;
                    if ('object' == typeof e) {
                      let t = Object.entries(e),
                        r = new URLSearchParams();
                      for (let [e, n] of t)
                        if (Array.isArray(n)) for (let t of n) r.append(e, t);
                        else void 0 !== n && r.set(e, n);
                      return r;
                    }
                    if ('string' == typeof e) {
                      if ('canParse' in URL && URL.canParse(e)) return new URL(e).searchParams;
                      return new URLSearchParams(e);
                    }
                  } catch (e) {}
                  return new URLSearchParams();
                })(n),
                a = {};
              for (let [r, n] of Object.entries(e)) {
                let e = t[r] ?? r,
                  o = i.get(e);
                a[r] = n.parseServerSide(o ?? void 0);
              }
              return a;
            };
          })(e, { urlKeys: t }),
          i = n.cache(() => ({ searchParams: {} }));
        function l(e) {
          let t = i();
          if (Object.isFrozen(t.searchParams)) {
            if (
              t[o] &&
              (function (e, t) {
                if (e === t) return !0;
                if (Object.keys(e).length !== Object.keys(t).length) return !1;
                for (let r in e) if (e[r] !== t[r]) return !1;
                return !0;
              })(e, t[o])
            )
              return s();
            throw Error(a(501));
          }
          return (t.searchParams = r(e)), (t[o] = e), Object.freeze(t.searchParams);
        }
        function s() {
          let { searchParams: e } = i();
          if (0 === Object.keys(e).length) throw Error(a(500));
          return e;
        }
        return {
          parse: function (e) {
            return e instanceof Promise ? e.then(l) : l(e);
          },
          get: function (e) {
            let { searchParams: t } = i(),
              r = t[e];
            if (void 0 === r)
              throw Error(
                a(500) +
                  `
  in get(${String(e)})`
              );
            return r;
          },
          all: s,
        };
      }
      var s = (function () {
        try {
          if ('undefined' == typeof localStorage) return !1;
          let e = 'nuqs-localStorage-test';
          localStorage.setItem(e, e);
          let t = localStorage.getItem(e) === e;
          if ((localStorage.removeItem(e), !t)) return !1;
        } catch (e) {
          return console.error('[nuqs]: debug mode is disabled (localStorage unavailable).', e), !1;
        }
        return (localStorage.getItem('debug') ?? '').includes('nuqs');
      })();
      function d(e, t, r) {
        try {
          return e(t);
        } catch (e) {
          return (
            !(function (e, ...t) {
              s && console.warn(e, ...t);
            })('[nuqs] Error while parsing value `%s`: %O' + (r ? ' (for key `%s`)' : ''), t, e, r),
            null
          );
        }
      }
      function c(e) {
        function t(t) {
          if (void 0 === t) return null;
          let r = '';
          if (Array.isArray(t)) {
            if (void 0 === t[0]) return null;
            r = t[0];
          }
          return 'string' == typeof t && (r = t), d(e.parse, r);
        }
        return {
          eq: (e, t) => e === t,
          ...e,
          parseServerSide: t,
          withDefault(e) {
            return { ...this, defaultValue: e, parseServerSide: (r) => t(r) ?? e };
          },
          withOptions(e) {
            return { ...this, ...e };
          },
        };
      }
      var u = c({ parse: (e) => e, serialize: (e) => `${e}` }),
        h = c({
          parse: (e) => {
            let t = parseInt(e);
            return Number.isNaN(t) ? null : t;
          },
          serialize: (e) => Math.round(e).toFixed(),
        });
      function p(e, t) {
        return e.valueOf() === t.valueOf();
      }
      function g(e, t = ',') {
        let r = e.eq ?? ((e, t) => e === t),
          n = encodeURIComponent(t);
        return c({
          parse: (r) =>
            '' === r
              ? []
              : r
                  .split(t)
                  .map((r, i) => d(e.parse, r.replaceAll(n, t), `[${i}]`))
                  .filter((e) => null != e),
          serialize: (r) =>
            r.map((r) => (e.serialize ? e.serialize(r) : String(r)).replaceAll(t, n)).join(t),
          eq: (e, t) => e === t || (e.length === t.length && e.every((e, n) => r(e, t[n]))),
        });
      }
      c({
        parse: (e) => {
          let t = h.parse(e);
          return null === t ? null : t - 1;
        },
        serialize: (e) => h.serialize(e + 1),
      }),
        c({
          parse: (e) => {
            let t = parseInt(e, 16);
            return Number.isNaN(t) ? null : t;
          },
          serialize: (e) => {
            let t = Math.round(e).toString(16);
            return t.padStart(t.length + (t.length % 2), '0');
          },
        }),
        c({
          parse: (e) => {
            let t = parseFloat(e);
            return Number.isNaN(t) ? null : t;
          },
          serialize: (e) => e.toString(),
        }),
        c({ parse: (e) => 'true' === e, serialize: (e) => (e ? 'true' : 'false') }),
        c({
          parse: (e) => {
            let t = parseInt(e);
            return Number.isNaN(t) ? null : new Date(t);
          },
          serialize: (e) => e.valueOf().toString(),
          eq: p,
        }),
        c({
          parse: (e) => {
            let t = new Date(e);
            return Number.isNaN(t.valueOf()) ? null : t;
          },
          serialize: (e) => e.toISOString(),
          eq: p,
        }),
        c({
          parse: (e) => {
            let t = new Date(e.slice(0, 10));
            return Number.isNaN(t.valueOf()) ? null : t;
          },
          serialize: (e) => e.toISOString().slice(0, 10),
          eq: p,
        });
    },
  },
]);
