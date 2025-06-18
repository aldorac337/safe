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
    (t._sentryDebugIds[e] = '2af786ab-3711-4cfe-b617-9fcc930d0eed'),
    (t._sentryDebugIdIdentifier = 'sentry-dbid-2af786ab-3711-4cfe-b617-9fcc930d0eed'));
} catch (t) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3360],
  {
    10975: function (t, e, n) {
      var r = n(78286),
        o = n(58258),
        i = n(54655),
        a = n(4078);
      e.default = (0, o.memo)((t) => {
        let { statsSectionSlot: e, tabsSlot: n } = t;
        return (0, r.BX)(i.Kqy, {
          direction: 'column',
          basis: '100%',
          children: [e, (0, r.tZ)(a.default, { noBackground: !0, withoutAside: !0, children: n })],
        });
      });
    },
    11620: function (t, e, n) {
      n.d(e, {
        default: function () {
          return s;
        },
      });
      var r = n(78286),
        o = n(58258),
        i = n(90092),
        a = n(54655),
        l = n(42025);
      let d = (0, n(38819).Z)(a.v0h, { target: 'e5k1al90' })((t) => {
          let { theme: e } = t;
          return e.breakpoints.up('xl');
        }, '{width:calc(100% - 60px);}'),
        c = [
          { label: 'Markets', value: 'markets' },
          { label: 'Vaults', value: 'vaults' },
          { label: 'More on Morpho', value: 'moreOnMorpho' },
        ];
      var s = (0, o.memo)((t) => {
        let { slots: e } = t,
          [n, o] = (0, i.v1)('tab', { defaultValue: 'markets', parse: (t) => t });
        return (0, r.BX)(a.Kqy, {
          gap: 'm',
          direction: 'column',
          width: '100%',
          children: [
            (0, r.tZ)(l.Z, {
              topPosition: 1,
              children: (0, r.tZ)(d, {
                id: 'explore-tabs',
                options: c,
                value: n,
                onChange: o,
                hasActiveBorder: !0,
              }),
            }),
            e[n],
          ],
        });
      });
    },
    30450: function (t, e, n) {
      var r = n(78286),
        o = n(58258),
        i = n(54655);
      e.default = (0, o.memo)((t) => {
        let {} = t;
        return (0, r.BX)(i.Kqy, {
          gap: 'xs',
          direction: 'column',
          children: [
            (0, r.tZ)(i.OdW, { height: '725px', width: '100%', borderRadius: '20px' }),
            (0, r.tZ)(i.F3O, {}),
          ],
        });
      });
    },
    46316: function (t, e, n) {
      n.d(e, {
        default: function () {
          return y;
        },
      });
      var r = n(78286),
        o = n(58258),
        i = n(54655),
        a = n(18313),
        l = n(38819);
      let d = (0, l.Z)('div', { target: 'e1lc1cbd0' })('position:relative;height:20px;width:20px;'),
        c = (0, l.Z)(i.JO$, { target: 'e1lc1cbd1' })(
          'position:absolute;transition:all 0.2s ease-in-out;'
        ),
        s = (0, l.Z)(i.JO$, { target: 'e1lc1cbd2' })(
          'position:absolute;transition:all 0.2s ease-in-out;transform:translate(-10px,10px);opacity:0;'
        ),
        u = (0, l.Z)('div', { target: 'e1lc1cbd3' })(
          'align-self:end;padding:12px;background-color:',
          (t) => {
            let { theme: e } = t;
            return e.colors.background.primary;
          },
          ';border-radius:100%;',
          (t) => {
            let { parentHover: e } = t;
            return e;
          },
          ':hover &{',
          c,
          '{transform:translate(10px,-10px);opacity:0;}',
          s,
          '{transform:translate(0,0);opacity:1;}}'
        );
      var p = (0, o.memo)((t) => {
        let { parentHover: e } = t;
        return (0, r.tZ)(u, {
          parentHover: e,
          children: (0, r.BX)(d, {
            children: [
              (0, r.tZ)(c, { icon: 'ArrowDiagonalUpPlain20', color: 'icon.primary' }),
              (0, r.tZ)(s, { icon: 'ArrowDiagonalUpPlain20', color: 'icon.primary' }),
            ],
          }),
        });
      });
      let h = (0, l.Z)(i.xvT.Title.XS, { target: 'e14nxql0' })('transition:opacity 0.1s;'),
        m = (0, l.Z)(i.xvT.Body.M.Regular, { target: 'e14nxql1' })(
          'transition:all 0.2s ease-in-out;position:absolute;transform:translateY(20px);opacity:0;max-width:220px;'
        ),
        g = (0, l.Z)('div', { target: 'e14nxql2' })('transition:all 0.2s;align-self:center;'),
        f = (0, l.Z)(i.Zbd, { target: 'e14nxql3' })(
          'transition:background-color 0.2s;&:hover{background-color:',
          (t) => {
            let { theme: e } = t;
            return e.colors.constant.gray;
          },
          ';',
          h,
          '{opacity:0;}',
          m,
          '{transform:translateY(0);opacity:1;}',
          g,
          '{transform:translateY(-10px);opacity:0;}}'
        );
      var v = (0, o.memo)((t) => {
        let { title: e, icon: n, href: o, description: a } = t;
        return (0, r.tZ)(i.dLw, {
          href: o,
          children: (0, r.tZ)(f, {
            padding: 'm',
            children: (0, r.BX)(i.Kqy, {
              direction: 'column',
              gap: 36,
              height: '100%',
              width: '100%',
              position: 'relative',
              children: [
                (0, r.tZ)(h, { paddingBlockEnd: '16px', children: e }),
                (0, r.tZ)(m, { color: 'text.secondary', children: a }),
                (0, r.tZ)(g, { children: (0, r.tZ)(i.JO$, { size: 60, icon: n }) }),
                (0, r.tZ)(p, { parentHover: f }),
              ],
            }),
          }),
        });
      });
      let Z = (0, l.Z)('div', { target: 'e1g3tolm0' })(
          'width:50%;',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('m');
          },
          '{width:100%;}'
        ),
        x = (0, l.Z)('div', { target: 'e1g3tolm1' })(
          'width:33%;',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('m');
          },
          '{width:100%;}'
        );
      var b = (0, o.memo)(() =>
          (0, r.BX)(i.Kqy, {
            direction: 'column',
            gap: 24,
            children: [
              (0, r.BX)(i.JYT, {
                downBreakpoint: 'm',
                gap: 24,
                children: [
                  (0, r.tZ)(Z, {
                    children: (0, r.tZ)(v, {
                      title: 'Delegate MORPHO',
                      icon: 'DelegateGradient60',
                      href: a.$2,
                      description:
                        'Delegating lets you participate in governance without a time commitment. You keep full ownership of your MORPHO tokens and can revoke at any time.',
                    }),
                  }),
                  (0, r.tZ)(Z, {
                    children: (0, r.tZ)(v, {
                      title: 'Vote',
                      icon: 'VoteGradient60',
                      href: a.lH,
                      description: 'Participate in Morpho governance.',
                    }),
                  }),
                ],
              }),
              (0, r.BX)(i.JYT, {
                downBreakpoint: 'm',
                gap: 24,
                children: [
                  (0, r.tZ)(x, {
                    children: (0, r.tZ)(v, {
                      title: 'Forum',
                      icon: 'ForumGradient60',
                      href: a.xQ,
                      description: 'Discuss all things Morpho',
                    }),
                  }),
                  (0, r.tZ)(x, {
                    children: (0, r.tZ)(v, {
                      title: 'Documentation',
                      icon: 'DocumentationGradient60',
                      href: a.WU,
                      description: 'Lean more about the Morpho stack',
                    }),
                  }),
                  (0, r.tZ)(x, {
                    children: (0, r.tZ)(v, {
                      title: 'Morpho Rewards',
                      icon: 'EcosystemRewardsGradient60',
                      href: a.lp,
                      description: 'Track all the most recent Morpho rewards programs',
                    }),
                  }),
                ],
              }),
            ],
          })
        ),
        y = (0, o.memo)(() => (0, r.tZ)(b, {}));
    },
    26499: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return s;
        },
      });
      var r = n(78286),
        o = n(58258),
        i = n(54655),
        a = n(4078),
        l = n(38819);
      let d = (0, l.Z)(i.Zbd, { target: 'e1nhzox20' })(
          'padding:',
          (t) => {
            let { theme: e } = t;
            return e.padding.m;
          },
          ';',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('s');
          },
          '{padding:',
          (t) => {
            let { theme: e } = t;
            return ''.concat(e.padding.m, ' ').concat(e.padding.s);
          },
          ';}'
        ),
        c = (0, l.Z)(i.Kqy, { target: 'e1nhzox21' })((t) => {
          let { theme: e } = t;
          return e.breakpoints.containerDown('xs');
        }, '{flex-direction:column-reverse;gap:16px;}');
      var s = (0, o.memo)((t) => {
        let { mainStatsSlot: e, selectorsSlot: n, chartSlot: o, statsCardsSlot: l } = t;
        return (0, r.tZ)(a.default, {
          withOverflowingBottomBorder: !0,
          hasLargerVerticalPadding: !0,
          withoutAside: !0,
          children: (0, r.tZ)(d, {
            children: (0, r.BX)(i.JYT, {
              downBreakpoint: 'l',
              gap: 'm',
              width: '100%',
              justify: 'space-between',
              children: [
                (0, r.BX)(i.Kqy, {
                  direction: 'column',
                  gap: 24,
                  width: '100%',
                  children: [
                    (0, r.BX)(c, {
                      direction: 'row',
                      gap: 'm',
                      justify: 'space-between',
                      children: [e, n],
                    }),
                    o,
                  ],
                }),
                l,
              ],
            }),
          }),
        });
      });
    },
    24109: function (t, e, n) {
      n.d(e, {
        U: function () {
          return g;
        },
      });
      var r = n(78286),
        o = n(58258),
        i = n(3100),
        a = n(12556),
        l = n(54655),
        d = n(30392),
        c = n(38819);
      let s = (0, c.Z)('div', { target: 'e2laxn50' })('position:relative;'),
        u = (0, c.Z)('div', { target: 'e2laxn51' })('position:absolute;bottom:38px;left:10px;');
      var p = n(35047),
        h = n(18313),
        m = (0, o.memo)(() => {
          let t = (0, o.useMemo)(
            () => (0, p.formatEnumeration)(h.Cq.AVAILABLE_CHAIN_IDS.map(a.FW.getNameById).map(i.Z)),
            []
          );
          return (0, r.tZ)(u, {
            children: (0, r.tZ)(l.ua7, {
              content: 'Historical data is currently only available for '.concat(t, ' networks.'),
              withTouch: !0,
              children: (0, r.tZ)(l.JO$, {
                icon: 'QuestionPlain20',
                color: 'icon.secondary',
                hoverColor: 'icon.primary',
              }),
            }),
          });
        }),
        g = (0, o.memo)((t) => {
          let { loading: e, error: n, statType: c, queryData: u } = t,
            p = (0, l.dD4)(),
            { themeMode: h } = (0, l.TCT)(),
            g = (0, o.useMemo)(
              () =>
                (null == u ? void 0 : u.morphoBlues.items)
                  ? [...(null == u ? void 0 : u.morphoBlues.items)].reverse().map((t) => {
                      var e;
                      let n = a.FW.getColor(t.chain.id)[h];
                      return {
                        type: 'areaspline',
                        name: (0, i.Z)(t.chain.network),
                        data: (0, l.EES)(
                          null === (e = t.historicalState) || void 0 === e ? void 0 : e[d.cn[c]]
                        ),
                        color: n,
                        lineColor: n,
                        fillColor: (0, l.WOF)(n, 0.2, 0, 'down'),
                      };
                    })
                  : [],
              [u, c, h]
            );
          return (0, r.BX)(s, {
            children: [
              (0, r.tZ)(l.Qpo, {
                statuses: { loading: e, error: n },
                unit: '$',
                height: p ? '200px' : '230px',
                series: g,
                withLegend: !0,
                withTooltipAbsoluteValues: !0,
              }),
              !e && !n && (0, r.tZ)(m, {}),
            ],
          });
        });
    },
    9369: function (t, e, n) {
      var r = n(78286),
        o = n(58258),
        i = n(3100),
        a = n(54655),
        l = n(35047),
        d = n(18313),
        c = n(30392);
      e.Z = (0, o.memo)((t) => {
        let { statType: e, isLoading: n, metrics: s } = t,
          u = s[e],
          p = (0, o.useMemo)(() => a.$0l.short.default('-').digits(2).of(u), [u]);
        return (0, r.BX)(a.Kqy, {
          direction: 'column',
          gap: 'xs',
          children: [
            (0, r.BX)(a.Kqy, {
              gap: 'xxs',
              align: 'center',
              children: [
                (0, r.tZ)(a.xvT.Body.XS.Regular, { color: 'text.secondary', children: c.BY[e] }),
                (0, r.tZ)(a.ua7, {
                  withTouch: !0,
                  content: 'All metrics include Morpho Core ('.concat(
                    (0, l.formatEnumeration)(d.Cq.INTERFACE_CHAINS.map((t) => (0, i.Z)(t.name))),
                    '), Morpho Lite and Morpho Optimizer.'
                  ),
                  children: (0, r.tZ)(a.JO$, {
                    icon: 'InfoPlain20',
                    color: 'icon.secondary',
                    hoverColor: 'icon.primary',
                  }),
                }),
              ],
            }),
            (0, r.tZ)(r.HY, {
              children: n
                ? (0, r.tZ)(a.OdW, { width: 150, height: 53, borderRadius: '20px' })
                : (0, r.BX)(a.Kqy, {
                    children: [
                      (0, r.tZ)(a.xvT.Title.M, { color: 'text.tertiary', children: '$' }),
                      (0, r.tZ)(a.xvT.Title.M, { color: 'text.body', children: p }),
                    ],
                  }),
            }),
          ],
        });
      });
    },
    28312: function (t, e, n) {
      var r = n(78286),
        o = n(58258),
        i = n(54655),
        a = n(76992),
        l = n(30392);
      e.Z = (0, o.memo)((t) => {
        let { statType: e, setStatType: n, isDisabled: o = !1 } = t;
        return (0, i.dD4)()
          ? (0, r.tZ)(i.PhF, { options: l.g0, value: e, onChange: n, disabled: o })
          : (0, r.tZ)(a.E, {
              variant: 'secondary',
              id: 'chart-options-stat-type',
              options: l.g0,
              value: e,
              onChange: n,
              disabled: o,
            });
      });
    },
    50121: function (t, e, n) {
      n.d(e, {
        G: function () {
          return p;
        },
      });
      var r = n(78286),
        o = n(58258),
        i = n(54655),
        a = n(30392),
        l = n(12556),
        d = (0, o.memo)((t) => {
          let { label: e, value: n, isLoading: a = !1 } = t,
            [d, c] = (0, o.useState)(null),
            s = (0, l.DI)(n),
            u = (0, o.useMemo)(() => {
              var t;
              let e =
                (null !== (t = null == d ? void 0 : d.offsetWidth) && void 0 !== t ? t : 0) < 200
                  ? 'short'
                  : 'commas';
              return i.$0l[e]
                .default('-')
                .digits('short' === e ? 2 : 0)
                .unit('$')
                .of(s);
            }, [s, d]);
          return (0, r.BX)(i.Zbd, {
            ref: c,
            direction: 'column',
            gap: 17,
            background: 'background.tertiary',
            flex: 1,
            padding: '22px',
            children: [
              (0, r.tZ)(i.xvT.Body.XXS.Regular, { color: 'text.secondary', children: e }),
              a
                ? (0, r.tZ)(i.OdW, { width: 50, height: 24, borderRadius: '20px' })
                : (0, r.tZ)(i.xvT.Body.S.Regular, { children: u }),
            ],
          });
        }),
        c = n(38819);
      let s = (0, c.Z)(i.Kqy, { target: 'e1yjlmzq0' })(
          'min-width:370px;',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('l');
          },
          '{min-width:auto;}'
        ),
        u = (0, c.Z)(i.Kqy, { target: 'e1yjlmzq1' })(
          'flex-direction:column;',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('l');
          },
          '{flex-direction:row;}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('xs');
          },
          '{flex-direction:column;}'
        );
      var p = (0, o.memo)((t) => {
        let { metrics: e, isLoading: n } = t;
        return (0, r.BX)(s, {
          direction: 'column',
          gap: 's',
          children: [
            (0, r.BX)(u, {
              gap: 's',
              children: [
                (0, r.tZ)(d, { label: a.BY.deposits, value: e.deposits, isLoading: n }),
                (0, r.tZ)(d, { label: a.BY.loans, value: e.loans, isLoading: n }),
              ],
            }),
            (0, r.BX)(i.JYT, {
              downBreakpoint: 'xs',
              gap: 's',
              children: [
                (0, r.tZ)(d, { label: a.BY.tvl, value: e.tvl, isLoading: n }),
                (0, r.tZ)(d, { label: a.BY.supply, value: e.supply, isLoading: n }),
              ],
            }),
          ],
        });
      });
    },
    928: function (t, e, n) {
      var r = n(78286),
        o = n(58258),
        i = n(51712),
        a = n(4078);
      e.default = (0, o.memo)(() =>
        (0, r.tZ)(a.default, {
          withOverflowingBottomBorder: !0,
          hasLargerVerticalPadding: !0,
          withoutAside: !0,
          children: (0, r.tZ)(i.Z, { minHeight: '500px' }),
        })
      );
    },
    45328: function (t, e, n) {
      var r = n(78286),
        o = n(58258),
        i = n(54655),
        a = n(18313),
        l = n(26499),
        d = n(24109),
        c = n(9369),
        s = n(28312),
        u = n(50121);
      let p = { morphoBlues: { items: [] } },
        h = { deposits: 0, loans: 0, tvl: 0, supply: 0 };
      e.default = (0, o.memo)(() =>
        (0, r.tZ)(l.Z, {
          mainStatsSlot: (0, r.tZ)(c.Z, { statType: 'deposits', isLoading: !0, metrics: h }),
          selectorsSlot: (0, r.BX)(i.Kqy, {
            align: 'center',
            gap: 's',
            wrap: 'wrap',
            children: [
              (0, r.tZ)(s.Z, { statType: 'deposits', setStatType: () => {}, isDisabled: !0 }),
              (0, r.tZ)(i.PhF, {
                options: a.SC,
                value: null,
                onChange: () => {},
                size: 'default',
                disabled: !0,
              }),
            ],
          }),
          chartSlot: (0, r.tZ)(d.U, {
            loading: !0,
            error: void 0,
            queryData: p,
            statType: 'deposits',
          }),
          statsCardsSlot: (0, r.tZ)(u.G, { metrics: h, isLoading: !0 }),
        })
      );
    },
    46460: function (t, e, n) {
      n.d(e, {
        Q: function () {
          return r.default;
        },
        R: function () {
          return o.default;
        },
      });
      var r = n(928),
        o = n(45328);
    },
    30392: function (t, e, n) {
      n.d(e, {
        BY: function () {
          return r;
        },
        cn: function () {
          return i;
        },
        g0: function () {
          return o;
        },
      });
      let r = {
          deposits: 'Total Deposits',
          loans: 'Active Loans',
          tvl: 'Total Value Locked',
          supply: 'Total Supply',
        },
        o = [
          { value: 'deposits', label: 'Deposits' },
          { value: 'loans', label: 'Loans' },
          { value: 'tvl', label: 'TVL' },
        ],
        i = { deposits: 'totalDepositUsd', loans: 'totalBorrowUsd', tvl: 'tvlUsd' };
    },
    78688: function (t, e, n) {
      var r = n(78286),
        o = n(58258),
        i = n(51712);
      e.default = (0, o.memo)((t) => {
        let {} = t;
        return (0, r.tZ)(i.Z, { minHeight: '769px' });
      });
    },
    18903: function (t, e, n) {
      var r = n(78286),
        o = n(58258),
        i = n(54655);
      e.default = (0, o.memo)((t) => {
        let {} = t;
        return (0, r.BX)(i.Kqy, {
          gap: 'xs',
          direction: 'column',
          children: [
            (0, r.tZ)(i.OdW, { height: '725px', width: '100%', borderRadius: '20px' }),
            (0, r.tZ)(i.F3O, {}),
          ],
        });
      });
    },
    52575: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return u;
        },
      });
      var r = n(78286),
        o = n(58258),
        i = n(23567),
        a = n(38819),
        l = n(54655);
      let d = (0, a.Z)('div', { target: 'e1yywf3a0' })(
          'position:sticky;top:calc(var(--navbar-height) + ',
          (t) => {
            let { topPosition: e } = t;
            return e;
          },
          'px - 1px);z-index:',
          (t) => {
            let { theme: e } = t;
            return e.zIndex.base.default;
          },
          ';',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('s');
          },
          '{top:',
          (t) => {
            let { topPosition: e } = t;
            return 0 === e
              ? '\n      calc(var(--navbar-height) + var(--mobile-tabs-height) - '.concat(
                  2,
                  'px)\n    '
                )
              : '\n    calc(var(--navbar-height) + '.concat(e, 'px - ').concat(2, 'px)\n  ');
          },
          ';}'
        ),
        c = (0, i.iv)(
          'padding:0 ',
          22,
          'px;width:calc(100% + ',
          22,
          'px + ',
          22,
          'px);transform:translateX(-',
          22,
          'px);'
        ),
        s = (0, a.Z)(l.Kqy, { target: 'e1yywf3a1' })(
          'backdrop-filter:blur(8px);padding-left:',
          80,
          'px;width:calc(100% + ',
          80,
          'px + ',
          80,
          'px);transform:translateX(-',
          80,
          'px);',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.containerDown('xl', 'content-root');
          },
          '{',
          c,
          '}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('s');
          },
          '{',
          c,
          '}'
        );
      var u = (0, o.memo)(function (t) {
        let { topPosition: e, children: n, ...o } = t;
        return (0, r.tZ)(d, { topPosition: e, ...o, children: (0, r.tZ)(s, { children: n }) });
      });
    },
    42025: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r.Z;
        },
      });
      var r = n(52575);
    },
  },
]);
