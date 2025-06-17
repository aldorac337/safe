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
    (e._sentryDebugIds[t] = '2fa8edf3-5080-4e6e-a591-f7111436c700'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-2fa8edf3-5080-4e6e-a591-f7111436c700'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6266],
  {
    81919: function (e, t, a) {
      var r = a(78286),
        i = a(58258),
        n = a(54655),
        l = a(4366);
      let o = (e) => {
          var t, a, r;
          let i = null === (t = e[0]) || void 0 === t ? void 0 : t[1],
            n = null === (a = e[e.length - 1]) || void 0 === a ? void 0 : a[1];
          if ('number' != typeof i || 'number' != typeof n) return { hasChange: !1 };
          let l =
            i ||
            (null === (r = e.find((e) => null !== e[1] && e[1] > 0)) || void 0 === r
              ? void 0
              : r[1]);
          return l
            ? { percentageChange: (n - l) / l, rawChange: n - l, hasChange: !0 }
            : { hasChange: !1 };
        },
        s = { percentageChange: 'Click to show $ change.', rawChange: 'Click to show % change.' };
      t.Z = (0, i.memo)((e) => {
        let { formattedData: t } = e,
          [a, d] = (0, i.useState)(!0),
          {
            percentageChange: c,
            rawChange: u,
            hasChange: h,
          } = (0, i.useMemo)(() => o(null != t ? t : []), [t]),
          p = (0, i.useMemo)(
            () =>
              a
                ? n.$0l.percent.default('-').digits(2).unit('%').sign().trailingZero(!1).of(c)
                : n.$0l.short.unit('$').sign().digits(2).readable().of(u),
            [a, c, u]
          );
        return h && t
          ? (0, r.tZ)(n.ua7, {
              content: s[a ? 'percentageChange' : 'rawChange'],
              children: (0, r.tZ)(n.Vp9, {
                className: l.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                variant: 'pnl',
                label: p,
                onClick: () => d((e) => !e),
              }),
            })
          : null;
      });
    },
    31560: function (e, t, a) {
      a.d(t, {
        uu: function () {
          return k;
        },
        $e: function () {
          return O;
        },
        q8: function () {
          return _;
        },
        gy: function () {
          return B;
        },
      });
      var r = a(78286),
        i = a(58258),
        n = a(78830),
        l = a(79070),
        o = a(54655),
        s = a(4366),
        d = a(38819);
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
          (0, o.xJ_)('border-width'),
          '  text-align:center;padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.m;
          },
          ';'
        ),
        u = { default: o.xvT.Body.XS.Regular, small: o.xvT.Body.XXS.Regular },
        h = {
          small: 'Temporarily unavailable.',
          default: 'Position History is temporarily unavailable.',
        };
      var p = (0, i.memo)((e) => {
          let { height: t, variant: a = 'default' } = e,
            i = u[a],
            n = h[a];
          return (0, r.BX)(c, {
            height: t,
            children: [
              (0, r.tZ)(o.JO$, { icon: 'TVLPlain20', color: 'icon.primary' }),
              (0, r.tZ)(o.ZT$, { TextVariant: i, children: n }),
            ],
          });
        }),
        g = a(26726);
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
      var x = (0, i.memo)((e) => {
          var t;
          let { data: a, statuses: n, variant: l = 'default', className: s } = e,
            d = (0, g.nh)(g.TP.POSITION_HISTORY),
            { palette: c } = (0, o.rFV)(),
            { theme: u } = (0, o.TCT)(),
            { borderRadius: h, hideXAxis: x, margins: f, hideBorder: b, hideYAxis: v } = m[l],
            y = (0, i.useMemo)(() => !(0, o.ckA)(null != a ? a : []), [a]);
          return d
            ? (0, r.tZ)(o._9J, {
                className: s,
                statuses: n,
                unit: '$',
                hideXAxis: x,
                hideYAxis: v,
                borderRadius: h,
                margins: f,
                hideBorder: b,
                noAnimation: !0,
                series: y
                  ? [
                      {
                        type: 'areaspline',
                        name: 'Your Deposits',
                        data: a,
                        color: c.colors[0],
                        lineColor: c.colors[0],
                        fillColor: c.areaChartColors[0],
                      },
                    ]
                  : [],
                plotlinesY: [
                  {
                    value:
                      (null == a ? void 0 : null === (t = a[0]) || void 0 === t ? void 0 : t[1]) ||
                      void 0,
                    color: u.colors.border.primary,
                    dashStyle: 'Dash',
                    width: 2,
                  },
                ],
                height: 'inherit',
                flexGrow: 1,
              })
            : (0, r.tZ)(p, { height: 'inherit', variant: l });
        }),
        f = a(76992),
        b = a(18313),
        v = a(81919);
      let y = (0, d.Z)('div', { target: 'e9l35f0' })(
          'gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';justify-content:space-between;flex-direction:row;display:flex;'
        ),
        Z = (0, d.Z)(l.E.div, { target: 'e9l35f1' })(
          'display:flex;align-items:center;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';flex-wrap:wrap;justify-content:flex-end;'
        );
      var w = a(45331),
        C = (0, i.memo)((e) => {
          let { isExpanded: t, isHovered: a } = e;
          return (0, r.tZ)(o.Kqy, {
            background: a ? 'background.primary' : 'transparent',
            color: a ? 'icon.primary' : 'text.secondary',
            borderRadius: '50%',
            width: 26,
            height: 26,
            justify: 'center',
            align: 'center',
            style: { transition: 'background-color 0.05s ease-in-out' },
            children: t
              ? (0, r.tZ)(w.CollapsePlain20, { isExpanded: !a })
              : (0, r.tZ)(w.ExpandPlain20, { isExpanded: a }),
          });
        }),
        S = (0, i.memo)((e) => {
          let { title: t, state: a, isFilterDisabled: i, totalSlot: d } = e,
            { theme: c } = (0, o.TCT)(),
            u = (0, o.dD4)(),
            h = a.isSmall || a.isExpanded,
            p = (0, g.nh)(g.TP.POSITION_HISTORY);
          return (0, r.BX)(y, {
            children: [
              (0, r.BX)(o.Kqy, {
                direction: 'column',
                gap: 'xs',
                children: [
                  (0, r.BX)(o.Kqy, {
                    gap: 'xs',
                    align: 'center',
                    children: [
                      (0, r.tZ)(o.xvT.Body.XS.Regular, {
                        color: 'text.secondary',
                        lineHeight: 'normal',
                        children: t,
                      }),
                      (0, r.tZ)(n.M, {
                        mode: 'wait',
                        children:
                          !a.isSmall &&
                          (0, r.tZ)(C, { isExpanded: a.isExpanded, isHovered: a.isHovered }),
                      }),
                    ],
                  }),
                  (0, r.BX)(o.Kqy, {
                    gap: 's',
                    align: 'center',
                    children: [
                      d,
                      p &&
                        (a.isLoading
                          ? (0, r.tZ)(o.OdW, {
                              height: '18px',
                              width: '50px',
                              borderRadius: '120px',
                            })
                          : (0, r.tZ)(v.Z, { formattedData: a.data })),
                    ],
                  }),
                ],
              }),
              (0, r.BX)(n.M, {
                mode: 'wait',
                initial: !1,
                children: [
                  h &&
                    (0, r.BX)(
                      Z,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.2 },
                        children: [
                          a.setMode &&
                            a.modeOptions &&
                            a.mode &&
                            (0, r.tZ)(r.HY, {
                              children: u
                                ? (0, r.tZ)(o.PhF, {
                                    options: a.modeOptions,
                                    value: a.mode,
                                    onChange: a.setMode,
                                    triggerClassName:
                                      s.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                                  })
                                : (0, r.tZ)(f.E, {
                                    variant: 'secondary',
                                    id: 'chart-options-mode',
                                    options: a.modeOptions,
                                    value: a.mode,
                                    onChange: a.setMode,
                                    className: s.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                                  }),
                            }),
                          (0, r.tZ)(o.PhF, {
                            options: b.SC,
                            value: a.timeFrame,
                            onChange: a.setTimeFrame,
                            disabled: i,
                            triggerClassName: s.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                          }),
                        ],
                      },
                      'card-dashboard-select'
                    ),
                  !h &&
                    (0, r.tZ)(
                      l.E.div,
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
                        children: (0, r.tZ)(x, {
                          data: a.data,
                          statuses: { loading: a.isLoading, error: a.error },
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
        k = (0, i.memo)((e) => {
          let { title: t, totalSlot: a, state: d, isFilterDisabled: c } = e,
            u = (0, o.dD4)(),
            h = d.isSmall || d.isExpanded,
            [p, g] = (0, i.useState)(d.isSmall),
            m = (0, i.useRef)(d.isExpanded),
            f = !m.current;
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
          let b = (0, i.useMemo)(() => {
            var e;
            return !(0, o.ckA)(null !== (e = d.data) && void 0 !== e ? e : []);
          }, [d.data]);
          return (0, r.BX)(o.Zbd, {
            background: 'transparent',
            direction: 'column',
            gap: 'm',
            padding: 0,
            grow: 1,
            children: [
              (0, r.tZ)(S, { title: t, totalSlot: a, state: d, isFilterDisabled: c }),
              (0, r.tZ)(n.M, {
                mode: 'sync',
                initial: !1,
                children:
                  h && p
                    ? (0, r.tZ)(
                        l.E.div,
                        {
                          layout: !0,
                          initial: f ? { opacity: 0, z: 0 } : void 0,
                          animate: { opacity: 1, transition: { delay: f ? 0.2 : 0, z: 0 } },
                          className: s.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                          exit: { opacity: 0, z: 0, height: 0 },
                          transition: { duration: 0.2 },
                          style: {
                            height: d.isSmall ? (u ? '200px' : '322px') : '100%',
                            width: '100%',
                            display: 'flex',
                          },
                          children: (0, r.tZ)(x, {
                            data: b ? d.data : void 0,
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
      let A = {
          small: { height: { expanded: 'unset', collapsed: 'unset' } },
          large: { height: { expanded: '500px', collapsed: '155px' } },
        },
        E = (e) => {
          let t = e.isSmall ? 'small' : 'large',
            a = e.isExpanded ? 'expanded' : 'collapsed';
          return { height: A[t].height[a] };
        },
        { PREVENT_DASHBOARD_CARD_HOVER_CLASS: R, DASHBOARD_CARD_BUTTON_EXPAND_CLASS: T } =
          s.DashboardClass,
        D = (0, d.Z)(o.Zbd, { shouldForwardProp: (e) => 'isExpanded' !== e, target: 'e1uk5o8o0' })(
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
          T,
          '{transition:background-color 0.5s ease-out;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.up('m');
          },
          '{&:hover:not(:has(.',
          R,
          ':hover)){cursor:pointer;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.components.tableRowHover;
          },
          ';transition:background-color 0.05s ease-in;.',
          T,
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
      var _ = (0, i.memo)((e) => {
          let {
              chartMyDepositsSlot: t,
              earnApyCardSlot: a,
              isExpanded: i,
              isSmall: n,
              onMouseEnter: s,
              onMouseLeave: d,
              onClick: c,
            } = e,
            u = E({ isExpanded: i, isSmall: n });
          return n
            ? (0, r.BX)(r.HY, {
                children: [
                  (0, r.tZ)(D, { isExpanded: i, children: t }),
                  (0, r.tZ)(o.Kqy, { fullWidth: !0, children: a }),
                ],
              })
            : (0, r.tZ)(
                l.E.div,
                {
                  layout: !0,
                  animate: { height: u.height },
                  initial: !1,
                  transition: { duration: 0.3, z: 0 },
                  style: { width: '100%' },
                  children: (0, r.BX)(D, {
                    isExpanded: i,
                    onMouseEnter: s,
                    onMouseLeave: d,
                    onClick: c,
                    children: [t, a],
                  }),
                },
                'card-dashboard-layout'
              );
        }),
        B = (0, i.memo)((e) => {
          let { isExpanded: t, isSmallDashboard: a } = e,
            i = (0, o.dD4)();
          return (0, r.BX)(o.Kqy, {
            flex: 1,
            direction: 'column',
            fullHeight: !0,
            gap: 'm',
            fullWidth: !0,
            children: [
              (0, r.BX)(o.Kqy, {
                justify: 'space-between',
                align: 'center',
                children: [
                  (0, r.BX)(o.Kqy, {
                    direction: 'column',
                    gap: 'xs',
                    height: { base: 87, xs: 76 },
                    children: [
                      (0, r.tZ)(o.OdW, {
                        height: i ? 16 : 26,
                        borderRadius: '20px',
                        width: i ? 54 : 90,
                      }),
                      (0, r.tZ)(o.OdW, { height: i ? 24 : 53, borderRadius: '20px', width: 160 }),
                    ],
                  }),
                  (0, r.tZ)(n.M, {
                    mode: 'wait',
                    initial: !1,
                    children:
                      !t &&
                      !a &&
                      (0, r.tZ)(
                        l.E.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          transition: { duration: 0.2 },
                          children: (0, r.tZ)(o.OdW, {
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
              (0, r.tZ)(o.OdW, { height: i ? 200 : a ? 292 : 288, borderRadius: '5px' }),
            ],
          });
        }),
        O = (0, i.memo)((e) => {
          let { message: t } = e;
          return (0, r.tZ)(o.Kqy, {
            gap: 'xs',
            align: 'center',
            justify: 'center',
            flex: 1,
            children: (0, r.tZ)(
              l.E.div,
              {
                layout: !0,
                animate: { height: '100%' },
                transition: { duration: 0.2 },
                style: { width: '100%', height: '100%' },
                children: (0, r.tZ)(o.SKT, { width: '100%', height: '100%', text: t }),
              },
              'card-net-apy-error'
            ),
          });
        });
    },
    73694: function (e, t, a) {
      a.d(t, {
        $F: function () {
          return c;
        },
        Im: function () {
          return s;
        },
        K9: function () {
          return o;
        },
        ML: function () {
          return d;
        },
        OO: function () {
          return l;
        },
        PQ: function () {
          return n;
        },
        UZ: function () {
          return h;
        },
        w6: function () {
          return u;
        },
      });
      var r = a(38819),
        i = a(54655);
      let n = (0, r.Z)('div', { target: 'e8gjljs0' })(
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
        l = (0, r.Z)('div', { target: 'e8gjljs1' })(
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
        o = (0, r.Z)(i.xvT.Title.L, { target: 'e8gjljs2' })('white-space:nowrap;'),
        s = (0, r.Z)(i.xvT.Title.M, { target: 'e8gjljs3' })('white-space:nowrap;'),
        d = (0, r.Z)(i.xvT.Title.S, { target: 'e8gjljs4' })(),
        c = (0, r.Z)(i.xvT.Title.XS, { target: 'e8gjljs5' })('font-size:8vw;'),
        u = (0, r.Z)('div', { target: 'e8gjljs6' })(
          'opacity:0;transform:translate(0,40px);transition:800ms ',
          (e) => {
            let { theme: t } = e;
            return t.easings.aggressiveOut;
          },
          ';transition-property:opacity,transform;'
        ),
        h = (0, r.Z)('video', { target: 'e8gjljs7' })(
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
    68690: function (e, t, a) {
      var r = a(78286),
        i = a(58258),
        n = a(73694);
      t.Z = (0, i.memo)(() => (0, r.tZ)(n.PQ, {}));
    },
    76600: function (e, t, a) {
      a.d(t, {
        _: function () {
          return p;
        },
      });
      var r = a(78286),
        i = a(58258),
        n = a(54655),
        l = a(85957),
        o = a(12556),
        s = a(707);
      let d = { earn: 'Earn', borrow: 'Borrow' },
        c = (e, t) =>
          ''
            .concat(e, ' ')
            .concat(d[t], ' ')
            .concat((0, n._6H)(e, 'Position'));
      var u = (0, i.memo)((e) => {
        let { chainId: t, count: a, variant: d } = e,
          { navigateTo: u } = (0, s.R)(),
          h = (0, l.useRouter)(),
          p = o.FW.getMetadata(t),
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
        p && a)
          ? (0, r.tZ)(n.zxk, {
              onClick: m,
              avatarProps: { src: p.img },
              label: c(a, d),
              size: 'small',
              iconRight: (0, r.tZ)(n.Vp9, {
                color: 'text.secondary',
                style: { marginLeft: 4, cursor: 'inherit' },
                textTransform: 'capitalize',
                label: p.chain.name,
              }),
              variant: 'ghost',
            })
          : null;
      });
      let h = (0, a(38819).Z)(n.Kqy, { target: 'ehpfc240' })(
        'gap:',
        (e) => {
          let { theme: t } = e;
          return t.spacing.s;
        },
        ';flex-direction:row;flex-wrap:wrap;width:fit-content;min-width:0;display:flex;align-items:center;justify-content:center;'
      );
      var p = (0, i.memo)((e) => {
        let { buttons: t, loading: a, skeletonCount: l = 2 } = e,
          o = (0, n.dD4)(),
          s = (0, i.useMemo)(
            () => (null == t ? void 0 : t.sort((e, t) => e.chainId - t.chainId)),
            [t]
          );
        return a
          ? (0, r.tZ)(n.Kqy, {
              style: { marginBottom: o ? '50px' : '0px' },
              justify: 'center',
              align: 'center',
              children: (0, r.tZ)(h, {
                children: Array.from({ length: l }).map((e, t) =>
                  (0, r.tZ)(n.OdW, { height: 26, borderRadius: '20px', width: 150 }, t)
                ),
              }),
            })
          : (0, r.tZ)(h, {
              children:
                null == s
                  ? void 0
                  : s.map((e) =>
                      (0, r.tZ)(u, { ...e }, ''.concat(e.chainId, '-').concat(e.variant))
                    ),
            });
      });
    },
    76992: function (e, t, a) {
      a.d(t, {
        E: function () {
          return g;
        },
      });
      var r = a(78286),
        i = a(58258),
        n = a(54655),
        l = a(50825),
        o = a(38819),
        s = a(16690);
      let d = (0, o.Z)('div', { target: 'eikqm6p0' })(
          'background-color:',
          (e) => {
            let { theme: t, backgroundVariant: a } = e;
            return 'primary' === a ? t.colors.background.primary : t.colors.constant.dark;
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
        c = (0, o.Z)('div', { target: 'eikqm6p1' })('position:relative;'),
        u = (0, o.Z)(n.Kqy, { target: 'eikqm6p2' })(
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
        h = (0, o.Z)(n.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        p = (0, i.forwardRef)(function (e, t) {
          let {
            options: a,
            id: i,
            value: o,
            noPadding: s = !1,
            noGap: p = !1,
            disabled: g = !1,
            variant: m = 'primary',
            backgroundVariant: x = 'primary',
            size: f = 'small',
            className: b,
            onChange: v,
            ...y
          } = e;
          return (0, r.tZ)(d, {
            noPadding: s,
            noGap: p,
            backgroundVariant: x,
            ref: t,
            className: b,
            ...y,
            children: a.map((e) =>
              (0, r.tZ)(
                n.ua7,
                {
                  disabled: !e.tooltip,
                  content: e.tooltip,
                  offset: s ? 4 : 9,
                  children: (0, r.BX)(c, {
                    children: [
                      e.href
                        ? (0, r.tZ)(l.Z, {
                            href: e.href,
                            prefetch: e.prefetch,
                            mode: 'internal',
                            buttonProps: {
                              variant: e.value === o ? m : 'ghost',
                              size: f,
                              disabled: g || e.isDisabled,
                              label: e.label,
                              iconAlone: e.icon,
                              onClick: () => (null == v ? void 0 : v(e.value)),
                            },
                          })
                        : (0, r.tZ)(n.zxk, {
                            variant: e.value === o ? m : 'ghost',
                            size: f,
                            disabled: g || e.isDisabled,
                            label: e.label,
                            iconAlone: e.icon,
                            onClick: () => (null == v ? void 0 : v(e.value)),
                          }),
                      e.counter && e.counter > 0
                        ? (0, r.tZ)(u, {
                            children: (0, r.tZ)(h, {
                              TextVariant: n.xvT.Body.XXXS.Regular,
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
      var g = (0, i.memo)(p);
    },
    23698: function (e, t, a) {
      var r = a(78286),
        i = a(58258),
        n = a(3100),
        l = a(15341),
        o = a(12556),
        s = a(54655);
      let d = a(18313).Cq.AVAILABLE_CHAIN_IDS.map((e) => ({
        id: String(e),
        label: (0, n.Z)(o.FW.getNameById(e)),
        value: e,
        img: o.FW.getMetadata(e).img,
      }));
      t.Z = (0, i.memo)((e) => {
        let {
            chainIdsFilter: t,
            handleChainIdsFilterChange: a,
            disabled: n,
            hasHighestZIndex: o,
          } = e,
          [c, u] = (0, i.useState)(d),
          h = (0, i.useMemo)(
            () => c.map((e) => ({ ...e, isChecked: t.includes(e.value) })),
            [c, t]
          ),
          p = (0, i.useCallback)(() => {
            u(
              [...d].sort((e, a) => {
                let r = Number(t.includes(e.value));
                return Number(t.includes(a.value)) - r || e.label.localeCompare(a.label);
              })
            );
          }, [t]),
          g = (0, i.useCallback)(
            (e) => {
              a((0, l.Z)(t, [e]));
            },
            [t, a]
          );
        return (0, r.BX)(s.Kqy, {
          align: 'center',
          gap: 'xs',
          children: [
            (0, r.tZ)(s.xvT.Body.XXXS.Regular, { color: 'text.body', children: 'Network:' }),
            (0, r.tZ)(s.h4n, {
              items: h,
              sortItems: p,
              toggleItem: g,
              clear: () => a([]),
              inputPlaceholder: 'Search for network',
              clearTooltipText: 'Remove Network filter',
              withSeparator: !1,
              disabled: n,
              hasHighestZIndex: o,
            }),
          ],
        });
      });
    },
    68905: function (e, t, a) {
      var r = a(78286),
        i = a(58258),
        n = a(3100),
        l = a(15341),
        o = a(56489),
        s = a(54655),
        d = a(28634),
        c = a(81261);
      t.Z = (0, i.memo)((e) => {
        let {
            label: t,
            assets: a,
            assetIdsFilter: u,
            chainIdsFilter: h,
            handleAssetIdsFilterChange: p,
            disabled: g,
            hasHighestZIndex: m,
          } = e,
          [x, f] = (0, i.useState)(a),
          b = (0, i.useMemo)(
            () =>
              x
                .filter((e) => null == h || !h.length || h.includes(e.chain.id))
                .map((e) => ({
                  id: e.id,
                  label: e.symbol,
                  value: e.id,
                  isChecked: u.includes(e.id),
                  img: e.logoURI,
                  chain: h && { id: e.chain.id, name: (0, n.Z)(e.chain.network) },
                })),
            [x, u, h]
          ),
          v = (0, i.useCallback)(
            (e) => {
              let t = null != e ? e : u;
              f(
                [...a].sort((e, a) => {
                  let r = Number(t.includes(e.id));
                  return Number(t.includes(a.id)) - r || e.symbol.localeCompare(a.symbol);
                })
              );
            },
            [a, u]
          ),
          y = (0, i.useCallback)(
            (e) => {
              p((0, l.Z)(u, [e]));
            },
            [u, p]
          ),
          Z = (0, i.useCallback)(
            (e) =>
              e === d.y.ALL
                ? []
                : a
                    .filter((t) => {
                      var a;
                      return null === (a = t.tags) || void 0 === a ? void 0 : a.includes(e);
                    })
                    .map((e) => e.id),
            [a]
          ),
          w = (0, i.useCallback)(
            (e) => {
              let t = Z(e.value);
              p(t), v(t);
            },
            [p, Z, v]
          ),
          C = (0, i.useCallback)(() => {
            p([]), v([]);
          }, [p, v]),
          S = (0, i.useMemo)(
            () => [
              { value: d.y.ALL, label: 'All', isActive: !u.length, action: w },
              {
                value: d.y.ETH,
                label: 'Eth',
                isActive: (0, o.Z)(new Set(Z(d.y.ETH)), new Set(u)),
                action: w,
                tooltip: 'All ETH related/derivative assets.',
              },
              {
                value: d.y.BTC,
                label: 'Btc',
                isActive: (0, o.Z)(new Set(Z(d.y.BTC)), new Set(u)),
                action: w,
                tooltip: 'All BTC related/derivative assets.',
              },
              {
                value: d.y.STABLECOIN,
                label: 'Stables',
                isActive: (0, o.Z)(new Set(Z(d.y.STABLECOIN)), new Set(u)),
                action: w,
                tooltip: 'Assets pegged to fiat currencies.',
              },
            ],
            [u, w, Z]
          );
        return (0, r.BX)(s.Kqy, {
          align: 'center',
          gap: 'xs',
          children: [
            (0, r.BX)(s.xvT.Body.XXXS.Regular, {
              color: 'text.body',
              children: [(0, n.Z)(t), ':'],
            }),
            (0, r.tZ)(s.h4n, {
              items: b,
              sortItems: v,
              toggleItem: y,
              clear: C,
              slot: (0, r.tZ)(c.H, { tagOptions: S, assetIdsFilter: u, clear: C, disabled: g }),
              inputPlaceholder: 'Search for '.concat(t, ' asset'),
              clearTooltipText: 'Remove '.concat((0, n.Z)(t), ' filter'),
              disabled: g,
              hasHighestZIndex: m,
            }),
          ],
        });
      });
    },
    81261: function (e, t, a) {
      a.d(t, {
        H: function () {
          return s;
        },
      });
      var r = a(78286),
        i = a(58258),
        n = a(54655),
        l = a(89991);
      let o = (0, a(38819).Z)('div', { target: 'epb4mgh0' })(
        'padding:4px 8px;display:flex;gap:',
        (e) => {
          let { theme: t } = e;
          return t.spacing.xxs;
        },
        ';justify-content:space-between;align-items:center;'
      );
      var s = (0, i.memo)((e) => {
        let { tagOptions: t, assetIdsFilter: a, clear: s, disabled: d } = e,
          c = (0, i.useId)(),
          {
            account: { isConnected: u },
          } = (0, l.Z_)();
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.BX)(o, {
              children: [
                (0, r.BX)(n.Kqy, {
                  gap: 'xxs',
                  align: 'center',
                  children: [
                    (0, r.tZ)(n.ket, { id: c, options: t, disabled: d }),
                    u &&
                      (0, r.tZ)(n.ua7, {
                        content: 'Filtering by wallet holdings is coming soon.',
                        withTouch: !0,
                        children: (0, r.tZ)(n.JO$, {
                          icon: 'WalletPlain20',
                          color: 'text.primary',
                          style: { margin: 4, opacity: 0.2, cursor: 'not-allowed' },
                        }),
                      }),
                  ],
                }),
                (0, r.tZ)(n.ua7, {
                  content: 'Clear all filters',
                  disabled: !a.length,
                  children: (0, r.tZ)(n.zxk, {
                    variant: 'ghost',
                    size: 'small',
                    disabled: !a.length,
                    label: 'Clear',
                    onClick: s,
                  }),
                }),
              ],
            }),
            (0, r.tZ)(n.Z0O, {}),
          ],
        });
      });
    },
    4366: function (e, t, a) {
      a.d(t, {
        DashboardClass: function () {
          return i;
        },
        iv: function () {
          return d;
        },
      });
      var r,
        i,
        n = a(78286),
        l = a(58258),
        o = a(54655);
      let s = (0, l.createContext)(null);
      ((r = i || (i = {})).PREVENT_DASHBOARD_CARD_HOVER_CLASS = 'prevent-dashboard-card-hover'),
        (r.DASHBOARD_CARD_BUTTON_EXPAND_CLASS = 'dashboard-card-button-expand');
      let d = () => {
          let e = (0, l.useContext)(s);
          if (!e)
            throw Error('useDashboardContext must be called inside a DashboardContextProvider');
          return e;
        },
        c = (e) => {
          let { isSmallDashboard: t } = e,
            [a, r] = (0, l.useState)(!1),
            [i, n] = (0, l.useState)(!1),
            o = (0, l.useCallback)(() => {
              r((e) => !e);
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
              t && r(!1);
            }, [t, r]),
            {
              isDashboardExpanded: a,
              isDashboardHovered: i,
              toggleDashboard: o,
              setIsDashboardHovered: n,
              onClickToggleDashboard: s,
            }
          );
        };
      t.ZP = (0, l.memo)((e) => {
        let { children: t } = e,
          a = (0, o.CPt)(),
          [r, i] = (0, l.useState)('loan'),
          d = c({ isSmallDashboard: a }),
          u = (0, l.useMemo)(
            () => ({
              isSmallDashboard: a,
              borrowDashboardMode: r,
              setBorrowDashboardMode: i,
              ...d,
            }),
            [a, d, r, i]
          );
        return (0, n.tZ)(s.Provider, { value: u, children: t });
      });
    },
    28634: function (e, t, a) {
      var r, i;
      a.d(t, {
        y: function () {
          return r;
        },
      }),
        ((i = r || (r = {})).ALL = 'all'),
        (i.STABLECOIN = 'stablecoin'),
        (i.ETH = 'eth'),
        (i.BTC = 'btc');
    },
  },
]);
