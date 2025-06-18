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
    (t._sentryDebugIds[e] = '91e22637-0136-44b9-bb3b-97d6b71f98cf'),
    (t._sentryDebugIdIdentifier = 'sentry-dbid-91e22637-0136-44b9-bb3b-97d6b71f98cf'));
} catch (t) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9429],
  {
    60846: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655);
      e.default = (0, i.memo)((t) => {
        let { children: e } = t;
        return (0, n.tZ)(l.Kqy, { direction: 'column', gap: 'l', fullWidth: !0, children: e });
      });
    },
    37095: function (t, e, r) {
      r.d(e, {
        A_: function () {
          return l;
        },
        FF: function () {
          return d;
        },
        qs: function () {
          return a;
        },
        zc: function () {
          return o;
        },
      });
      var n = r(38819),
        i = r(54655);
      let l = (0, n.Z)(i.xrM, { target: 'ebbbhvu1' })(
          'width:100%;height:100%;border-radius:',
          (t) => {
            let { theme: e } = t;
            return e.borderRadius;
          },
          ';display:grid;'
        ),
        o = (0, n.Z)(i.Kqy, { target: 'ebbbhvu2' })(
          'flex-direction:row;align-items:center;justify-content:space-between;',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('m');
          },
          '{flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.xs;
          },
          ';}'
        ),
        a = (0, n.Z)(i.Kqy, { target: 'ebbbhvu3' })(
          'gap:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.s;
          },
          ';flex-direction:row;align-items:center;',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('m');
          },
          '{width:100%;flex-direction:column;align-items:flex-start;gap:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.xs;
          },
          ';}'
        ),
        d = (0, n.Z)('div', { target: 'ebbbhvu4' })((t) => {
          let { theme: e } = t;
          return e.breakpoints.down('xs');
        }, '{width:100%;button{width:inherit;}}');
    },
    58784: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(37095);
      e.Z = (0, i.memo)((t) => {
        let { children: e, tableSettingsSlot: r } = t;
        return (0, n.BX)(l.Kqy, {
          direction: 'column',
          basis: '100%',
          gap: 's',
          children: [
            (0, n.BX)(o.zc, {
              children: [
                (0, n.tZ)(l.xvT.Body.XS.Regular, {
                  color: 'text.secondary',
                  children: 'All Transactions',
                }),
                r,
              ],
            }),
            e,
          ],
        });
      });
    },
    73673: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(62132),
        a = r(58784);
      e.default = (0, i.memo)((t) => {
        let { tableHeight: e = '338px' } = t,
          r = (0, l.ajf)('m');
        return (0, n.tZ)(a.Z, {
          tableSettingsSlot: (0, n.tZ)(n.HY, {
            children: r
              ? (0, n.BX)(l.Kqy, {
                  direction: 'column',
                  gap: 'xs',
                  width: '100%',
                  children: [
                    (0, n.tZ)(l.OdW, { height: '24px', width: '127px', borderRadius: '20px' }),
                    (0, n.tZ)(l.OdW, {
                      height: '24px',
                      width: { base: '127px', xs: '100%' },
                      borderRadius: '20px',
                    }),
                  ],
                })
              : (0, n.tZ)(l.OdW, { height: '24px', width: '127px', borderRadius: '20px' }),
          }),
          children: (0, n.BX)(l.Kqy, {
            gap: 'xs',
            direction: 'column',
            children: [
              (0, n.tZ)(l.OdW, { height: e, width: '100%', borderRadius: '20px' }),
              (0, n.tZ)(o.F, {}),
            ],
          }),
        });
      });
    },
    3849: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(60846),
        o = r(93665);
      e.default = (0, i.memo)(() =>
        (0, n.BX)(l.default, {
          children: [
            (0, n.tZ)(o.default, { title: 'Distribution', tableHeight: '337px' }),
            (0, n.tZ)(o.default, { title: 'Transactions', tableHeight: '337px' }),
          ],
        })
      );
    },
    60647: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(60846),
        o = r(73673),
        a = r(391);
      e.default = (0, i.memo)(() =>
        (0, n.BX)(l.default, {
          children: [
            (0, n.tZ)(a.default, { title: 'User Distribution', tableHeight: '337px' }),
            (0, n.tZ)(o.default, { title: 'All Transactions' }),
          ],
        })
      );
    },
    93665: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(51712),
        a = r(6893);
      e.default = (0, i.memo)((t) => {
        let { title: e, tableHeight: r = '378px' } = t;
        return (0, n.BX)(l.Kqy, {
          gap: 's',
          direction: 'column',
          children: [(0, n.tZ)(a.$, { children: e }), (0, n.tZ)(o.Z, { minHeight: r })],
        });
      });
    },
    391: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(6893);
      e.default = (0, i.memo)((t) => {
        let { title: e, tableHeight: r = '338px' } = t;
        return (0, n.BX)(l.Kqy, {
          gap: 's',
          direction: 'column',
          children: [
            (0, n.tZ)(o.$, { children: e }),
            (0, n.BX)(l.Kqy, {
              gap: 'xs',
              direction: 'column',
              children: [
                (0, n.tZ)(l.OdW, { height: r, width: '100%', borderRadius: '20px' }),
                (0, n.tZ)(l.F3O, {}),
              ],
            }),
          ],
        });
      });
    },
    92275: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(51712);
      e.default = (0, i.memo)(() => (0, n.tZ)(l.Z, { minHeight: '338px' }));
    },
    73635: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655);
      let o = () =>
        (0, n.BX)(l.Kqy, {
          gap: 's',
          direction: 'column',
          flex: 1,
          children: [
            (0, n.tZ)(l.OdW, { height: '21px', width: '180px' }),
            (0, n.tZ)(l.OdW, { height: '46px', width: '160px' }),
          ],
        });
      e.default = (0, i.memo)(() => {
        let t = (0, l.dD4)();
        return (0, n.BX)(l.Kqy, {
          gap: 48,
          direction: 'column',
          style: { width: '100%' },
          children: [
            (0, n.BX)(l.Kqy, {
              direction: 'column',
              gap: 's',
              children: [
                (0, n.tZ)(l.OdW, { height: '66px', width: '65%' }),
                (0, n.tZ)(l.OdW, { height: '27px', width: '170px' }),
              ],
            }),
            (0, n.tZ)(l.OdW, { height: '20px', width: '100%' }),
            (0, n.BX)(l.Kqy, {
              direction: t ? 'column' : 'row',
              justify: 'start',
              wrap: 'wrap',
              gap: 'm',
              children: [
                (0, n.BX)(l.Kqy, {
                  gap: 's',
                  direction: 'column',
                  flex: 1,
                  children: [
                    (0, n.tZ)(l.OdW, { height: '21px', width: '180px' }),
                    (0, n.tZ)(l.OdW, { height: '46px', width: '160px' }),
                    (0, n.tZ)(l.OdW, { height: '21px', width: '80px' }),
                  ],
                }),
                (0, n.BX)(l.Kqy, {
                  gap: 's',
                  direction: 'column',
                  flex: 1,
                  children: [
                    (0, n.tZ)(l.OdW, { height: '21px', width: '180px' }),
                    (0, n.tZ)(l.OdW, { height: '46px', width: '160px' }),
                    (0, n.tZ)(l.OdW, { height: '21px', width: '80px' }),
                  ],
                }),
                (0, n.tZ)(o, {}),
                (0, n.tZ)(o, {}),
              ],
            }),
          ],
        });
      });
    },
    40405: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(51712);
      e.default = (0, i.memo)((t) => {
        let {} = t,
          e = (0, l.CPt)();
        return (0, n.BX)(n.HY, {
          children: [
            (0, n.tZ)(o.Z, { minHeight: '395px' }),
            e && (0, n.tZ)(l.SKT, { height: '165px', text: 'An error has been encountered' }),
          ],
        });
      });
    },
    50544: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655);
      e.default = (0, i.memo)((t) => {
        let {} = t,
          e = (0, l.CPt)();
        return (0, n.BX)(n.HY, {
          children: [
            (0, n.tZ)(l.OdW, { height: '395px', width: '100%', borderRadius: '20px' }),
            e && (0, n.tZ)(l.OdW, { height: '165px', width: '100%', borderRadius: '20px' }),
          ],
        });
      });
    },
    35038: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(51712);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(l.Z, { minHeight: '395px' });
      });
    },
    13180: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(l.OdW, { height: '395px', width: '100%', borderRadius: '20px' });
      });
    },
    18530: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(51712);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(l.Z, { minHeight: '320px' });
      });
    },
    87982: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(62132);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.BX)(l.Kqy, {
          gap: 'xs',
          direction: 'column',
          children: [
            (0, n.tZ)(l.OdW, { height: '320px', width: '100%', borderRadius: '20px' }),
            (0, n.tZ)(o.F, {}),
          ],
        });
      });
    },
    39177: function (t, e, r) {
      r.d(e, {
        default: function () {
          return P;
        },
      });
      var n,
        i,
        l = r(78286),
        o = r(58258),
        a = r(54655),
        d = r(83638),
        c = r(99095),
        u = r(26726),
        h = r(90835),
        s = r(28393),
        p = r(38819);
      let g = (0, p.Z)('div', { target: 'ey5v3rc0' })(
        'display:flex;flex-direction:column;width:100%;gap:64px;'
      );
      var f = r(90092),
        Z = r(89991),
        m = r(6423),
        x = r(42025),
        v = r(4078);
      let w = (0, p.Z)('div', { target: 'e1ed7txa0' })('flex:1;'),
        y = (0, p.Z)('div', { target: 'e1ed7txa1' })(
          'backdrop-filter:blur(8px);height:var(--mobile-tabs-height);padding-top:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.s;
          },
          ';position:sticky;top:calc(var(--navbar-height) - 1px);z-index:',
          (t) => {
            let { theme: e } = t;
            return e.zIndex.base.higher;
          },
          ';margin-bottom:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.s;
          },
          ';'
        );
      var b = r(75924);
      let B = b.WW.filter((t) => 'yourPosition' !== t.value);
      function K(t) {
        let {
            heroSlot: e,
            simpleActionPanelSlot: r,
            yourPositionSlots: n,
            overviewSlots: i,
            performanceSlots: d,
            riskSlots: u,
            activitySlots: h,
          } = t,
          {
            account: { isConnected: s },
          } = (0, Z.Z_)(),
          [p, K] = (0, f.v1)('tab', (0, f.jx)(Object.values(m.B6))),
          {
            activeSubTab: X,
            setActiveSubTab: q,
            subTabSlot: P,
            mobileScrollAnchor: W,
          } = (0, b.ZP)({ overviewSlots: i, performanceSlots: d, riskSlots: u, activitySlots: h }),
          { bannersToShow: R } = (0, c.l5)(),
          k = (0, o.useMemo)(
            () => (null == R ? void 0 : R.length) * 68,
            [null == R ? void 0 : R.length]
          );
        return (
          (0, o.useEffect)(() => {
            if (!p) {
              K(m.B6.Vault);
              return;
            }
            s || p !== m.B6.MyPosition || K(m.B6.Vault);
          }, [s, p, K]),
          (0, l.tZ)(w, {
            children: (0, l.BX)(a.mQc.Root, {
              orientation: 'horizontal',
              value: null != p ? p : void 0,
              onValueChange: (t) => K(t),
              children: [
                (0, l.tZ)(y, {
                  children: (0, l.BX)(a.mQc.List, {
                    'aria-label': 'Navigation',
                    children: [
                      (0, l.tZ)(a.mQc.Trigger, { value: m.B6.Vault, children: 'Vault' }),
                      s &&
                        (0, l.tZ)(a.mQc.Trigger, {
                          value: m.B6.MyPosition,
                          children: 'My Position',
                        }),
                      (0, l.tZ)(a.mQc.Trigger, {
                        value: m.B6.ManagePosition,
                        children: s ? 'Manage position' : 'Open position',
                      }),
                    ],
                  }),
                }),
                (0, l.tZ)(v.default, {
                  hasLargerVerticalPadding: !0,
                  noBackground: !0,
                  children: (0, l.BX)(g, {
                    children: [
                      (0, l.tZ)(a.mQc.Content, {
                        value: m.B6.Vault,
                        children: (0, l.BX)(a.Kqy, {
                          marginTop: 60,
                          gap: 'm',
                          direction: 'column',
                          children: [
                            e,
                            (0, l.tZ)(x.Z, {
                              'data-testid': 'vault-tabs',
                              topPosition: k,
                              children: (0, l.tZ)(a.v0h, {
                                id: 'mobile-sub-tabs',
                                options: B,
                                value: X,
                                onChange: q,
                                ref: W,
                              }),
                            }),
                            (0, l.tZ)(a.Kqy, { gap: 'l', direction: 'column', children: P }),
                          ],
                        }),
                      }),
                      s && (0, l.tZ)(a.mQc.Content, { value: m.B6.MyPosition, children: n }),
                      (0, l.tZ)(a.mQc.Content, { value: m.B6.ManagePosition, children: r }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
      let X = (0, p.Z)(a.v0h, { target: 'e1r83idk0' })(
        'width:calc(100% - 80px);',
        (t) => {
          let { theme: e } = t;
          return e.breakpoints.down('s');
        },
        '{width:calc(100% - 12px);}',
        (t) => {
          let { theme: e } = t;
          return e.breakpoints.containerDown('xl', 'content-root');
        },
        '{width:calc(100% - 12px);}'
      );
      var q = (0, o.memo)((t) => {
        let {
            performanceSlots: e,
            riskSlots: r,
            activitySlots: n,
            overviewSlots: i,
            yourPositionSlots: d,
          } = t,
          {
            account: { isConnected: u },
          } = (0, Z.Z_)(),
          h = (0, o.useRef)(u),
          {
            activeSubTab: s,
            setActiveSubTab: p,
            subTabSlot: g,
          } = (0, b.ZP)({
            yourPositionSlots: d,
            overviewSlots: i,
            performanceSlots: e,
            riskSlots: r,
            activitySlots: n,
          }),
          { bannersToShow: f } = (0, c.l5)(),
          m = (0, o.useMemo)(
            () => (null == f ? void 0 : f.length) * 54,
            [null == f ? void 0 : f.length]
          ),
          v = (0, o.useMemo)(
            () => (u ? b.WW : b.WW.filter((t) => 'yourPosition' !== t.value)),
            [u]
          );
        return (
          (0, o.useEffect)(() => {
            let t = h.current;
            !u && t && 'yourPosition' === s && p('overview'), (h.current = u);
          }, [u, p, s]),
          (0, l.BX)(a.Kqy, {
            gap: 'm',
            direction: 'column',
            width: '100%',
            children: [
              (0, l.tZ)(x.Z, {
                'data-testid': 'vault-tabs',
                topPosition: m,
                children: (0, l.tZ)(X, {
                  id: 'overview-segment',
                  options: v,
                  value: s,
                  onChange: p,
                  hasActiveBorder: !0,
                }),
              }),
              (0, l.tZ)(a.Kqy, { gap: 'l', direction: 'column', width: '100%', children: g }),
            ],
          })
        );
      });
      ((n = i || (i = {})).Market = 'market'),
        (n.MyPosition = 'myposition'),
        (n.ManagePosition = 'manageposition');
      var P = (0, o.memo)((t) => {
        var e;
        let {
            simpleActionPanelSlot: r,
            heroSlot: n,
            performanceSlots: i,
            riskSlots: o,
            activitySlots: p,
            overviewSlots: f,
            yourPositionSlots: Z,
          } = t,
          { bannersToShow: m } = (0, c.l5)(),
          x = (0, a.ajf)('s'),
          v = (0, u.nh)(u.TP.MOBILE_VAULT_TABS);
        return x && v
          ? (0, l.tZ)(K, {
              simpleActionPanelSlot: r,
              heroSlot: n,
              yourPositionSlots: Z,
              overviewSlots: f,
              performanceSlots: i,
              riskSlots: o,
              activitySlots: p,
            })
          : (0, l.BX)(l.HY, {
              children: [
                (0, l.tZ)(h.A, {
                  hasLargerVerticalPadding: !0,
                  noBackground: !0,
                  children: (0, l.BX)(g, {
                    children: [
                      n,
                      (0, l.tZ)(q, {
                        yourPositionSlots: Z,
                        overviewSlots: f,
                        performanceSlots: i,
                        riskSlots: o,
                        activitySlots: p,
                      }),
                    ],
                  }),
                }),
                (0, l.tZ)(s.ef, {
                  top: (null !== (e = null == m ? void 0 : m.length) && void 0 !== e ? e : 1) * d.w,
                  children: r,
                }),
              ],
            });
      });
    },
    1456: function (t, e, r) {
      r.d(e, {
        jX: function () {
          return w;
        },
        S5: function () {
          return b;
        },
        ZP: function () {
          return m;
        },
      });
      var n = r(78286),
        i = r(58258),
        l = r(40252),
        o = r(54655),
        a = r(89991),
        d = r(35047),
        c = r(36947),
        u = r(38819);
      let h = (0, u.Z)(o.Kqy, { target: 'ecjqmen0' })('flex-grow:1;min-width:250px;');
      var s = (0, i.memo)((t) => {
          let { title: e, value: r } = t,
            l = (0, i.useMemo)(
              () => d.format.percent.default('-').trailingZero(!1).digits(2).of(r),
              [r]
            );
          return (0, n.tZ)(h, {
            children: (0, n.BX)(c.xr, {
              height: '143px',
              variant: 'full',
              children: [
                (0, n.tZ)(o.Kqy, {
                  gap: 'xxs',
                  direction: 'row',
                  align: 'center',
                  children: (0, n.tZ)(o.xvT.Body.XS.Regular, {
                    color: 'text.secondary',
                    children: e,
                  }),
                }),
                (0, n.BX)(o.Kqy, {
                  direction: 'row',
                  align: 'center',
                  children: [
                    (0, n.tZ)(o.xvT.Title.S, { color: 'text.primary', children: l }),
                    (0, n.tZ)(o.xvT.Title.S, { color: 'text.secondary', children: '%' }),
                  ],
                }),
              ],
            }),
          });
        }),
        p = r(4565),
        g = r(78017),
        f = r(16820),
        Z = (0, i.memo)((t) => {
          let { apy: e, netApy: r, rewards: l, points: a, asset: u, performanceFee: s } = t,
            Z = (0, i.useMemo)(
              () => d.format.percent.default('-').trailingZero(!1).digits(2).of(r),
              [r]
            );
          return (0, n.tZ)(h, {
            children: (0, n.BX)(c.xr, {
              height: '143px',
              variant: 'full',
              children: [
                (0, n.BX)(o.Kqy, {
                  gap: 'xxs',
                  direction: 'row',
                  align: 'center',
                  children: [
                    (0, n.tZ)(o.xvT.Body.XS.Regular, {
                      color: 'text.secondary',
                      children: 'Instant APY',
                    }),
                    (0, n.tZ)(o.bEE, { tooltipContent: 'Instant Native APY + Rewards - Fees' }),
                  ],
                }),
                (0, n.tZ)(o.Kqy, {
                  children: (0, n.tZ)(g.w, {
                    RewardsHoverCardProps: {
                      performanceFee: (0, f.Pi)(s, p.safeParseNumber),
                      apy: (0, f.Pi)(e, p.safeParseNumber),
                      rewards: l,
                      points: a,
                      variant: 'vault',
                      netApy: (0, f.Pi)(r, p.safeParseNumber),
                      asset: u,
                      durationText: 'Instant',
                    },
                    iconSize: 35,
                    children: (0, n.BX)(o.Kqy, {
                      children: [
                        (0, n.tZ)(o.xvT.Title.S, { color: 'text.primary', children: Z }),
                        (0, n.tZ)(o.Kqy, {
                          gap: 4,
                          align: 'center',
                          children: (0, n.tZ)(o.xvT.Title.S, {
                            color: 'text.tertiary',
                            children: '%',
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        }),
        m = (0, i.memo)((t) => {
          let {
              rewards: e,
              points: r,
              apy: i,
              netApy: d,
              apy7d: c,
              apy30d: u,
              apy90d: h,
              asset: p,
              performanceFee: g,
            } = t,
            { targetChainId: f } = (0, a.Z_)();
          return (0, n.BX)(o.Kqy, {
            gap: 's',
            direction: 'column',
            align: 'start',
            children: [
              (0, n.tZ)(o.Kqy, {
                fullWidth: !0,
                children: (0, n.tZ)(Z, {
                  apy: i,
                  netApy: d,
                  rewards: e,
                  points: r,
                  asset: p,
                  performanceFee: g,
                }),
              }),
              (0, n.BX)(o.Kqy, {
                gap: 's',
                wrap: 'wrap',
                fullWidth: !0,
                children: [
                  (0, n.tZ)(s, { title: '7D APY', value: c }),
                  (0, n.tZ)(s, { title: '30D APY', value: u }),
                  f !== l.ChainId.PolygonMainnet && (0, n.tZ)(s, { title: '90D APY', value: h }),
                ],
              }),
            ],
          });
        });
      let x = (0, u.Z)(o.Kqy, { target: 'e1kd0mye0' })('flex:1;min-width:250px;'),
        v = () =>
          (0, n.tZ)(x, {
            children: (0, n.tZ)(o.SKT, { height: '143px', text: 'An error occurred' }),
          });
      var w = (0, i.memo)((t) => {
        let {} = t,
          { targetChainId: e } = (0, a.Z_)();
        return (0, n.BX)(o.Kqy, {
          gap: 's',
          wrap: 'wrap',
          style: { width: '100%' },
          children: [
            (0, n.tZ)(v, {}),
            (0, n.tZ)(v, {}),
            e !== l.ChainId.PolygonMainnet && (0, n.tZ)(v, {}),
          ],
        });
      });
      let y = () =>
        (0, n.tZ)(x, {
          children: (0, n.tZ)(o.OdW, { height: '143px', width: '100%', borderRadius: '20px' }),
        });
      var b = (0, i.memo)((t) => {
        let {} = t,
          { targetChainId: e } = (0, a.Z_)();
        return (0, n.BX)(o.Kqy, {
          gap: 's',
          wrap: 'wrap',
          style: { width: '100%' },
          children: [
            (0, n.tZ)(y, {}),
            (0, n.tZ)(y, {}),
            e !== l.ChainId.PolygonMainnet && (0, n.tZ)(y, {}),
            (0, n.tZ)(y, {}),
          ],
        });
      });
    },
    84967: function (t, e, r) {
      r.d(e, {
        HB: function () {
          return p;
        },
        ih: function () {
          return f;
        },
        ZP: function () {
          return u;
        },
      });
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(35047),
        a = r(36947),
        d = r(38819);
      let c = (0, d.Z)(l.Kqy, { target: 'epvujuh0' })(
        'flex:1;height:120px;',
        (t) => {
          let { theme: e } = t;
          return e.breakpoints.down('xs');
        },
        '{height:116px;}'
      );
      var u = (0, i.memo)((t) => {
        let { performanceFee: e, feeRecipient: r } = t;
        return (0, n.BX)(l.Kqy, {
          gap: 's',
          wrap: 'wrap',
          children: [
            (0, n.tZ)(c, {
              children: (0, n.BX)(a.xr, {
                height: '100%',
                children: [
                  (0, n.tZ)(l.xvT.Body.XS.Regular, {
                    color: 'text.secondary',
                    children: 'Performance Fee',
                  }),
                  (0, n.tZ)(l.xvT.Body.M.Regular, {
                    children: o.format.percent.digits(2).unit('%').default('0').of(e),
                  }),
                ],
              }),
            }),
            r &&
              (0, n.tZ)(c, {
                children: (0, n.tZ)(a.mD, {
                  title: 'Fee Recipient',
                  tooltipMessage: 'Copy fee recipient address.',
                  toastMessage: 'Fee recipient address copied to clipboard.',
                  address: r,
                  height: '100%',
                }),
              }),
          ],
        });
      });
      let h = (0, d.Z)(l.Kqy, { target: 'e1chjq1m0' })('flex:1;min-width:250px;height:120px;'),
        s = () =>
          (0, n.tZ)(h, {
            children: (0, n.tZ)(l.SKT, { height: '100%', text: 'An error occurred' }),
          });
      var p = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.BX)(l.Kqy, {
          gap: 's',
          wrap: 'wrap',
          children: [(0, n.tZ)(s, {}), (0, n.tZ)(s, {})],
        });
      });
      let g = () =>
        (0, n.tZ)(h, {
          children: (0, n.tZ)(l.OdW, { height: '100%', width: '100%', borderRadius: '20px' }),
        });
      var f = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.BX)(l.Kqy, {
          gap: 's',
          wrap: 'wrap',
          children: [(0, n.tZ)(g, {}), (0, n.tZ)(g, {})],
        });
      });
    },
    15176: function (t, e, r) {
      var n = r(78286),
        i = r(58258);
      let l = (0, r(38819).Z)('div', { target: 'e10sa5870' })(
        'display:flex;flex-direction:column;gap:12px;width:100%;'
      );
      e.default = (0, i.memo)((t) => {
        let { children: e } = t;
        return (0, n.tZ)(l, { children: e });
      });
    },
    89690: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(6893),
        a = r(42662);
      let d = () =>
        (0, n.tZ)(a.a, {
          children: (0, n.tZ)(l.SKT, { height: '120px', text: 'An error occurred.' }),
        });
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(l.Kqy, {
          gap: 's',
          direction: 'column',
          children: (0, n.BX)(l.Kqy, {
            gap: 's',
            direction: 'column',
            children: [
              (0, n.tZ)(o.$, { children: 'Risk Curation' }),
              (0, n.BX)(l.Kqy, {
                gap: 's',
                wrap: 'wrap',
                children: [(0, n.tZ)(d, {}), (0, n.tZ)(d, {})],
              }),
            ],
          }),
        });
      });
    },
    77834: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(6893),
        a = r(42662);
      let d = () =>
        (0, n.tZ)(a.a, {
          children: (0, n.tZ)(l.OdW, { height: '120px', width: '100%', borderRadius: '20px' }),
        });
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(l.Kqy, {
          gap: 's',
          direction: 'column',
          children: (0, n.BX)(l.Kqy, {
            gap: 's',
            direction: 'column',
            children: [
              (0, n.tZ)(o.$, { children: 'Risk Curation' }),
              (0, n.BX)(l.Kqy, {
                gap: 's',
                wrap: 'wrap',
                children: [(0, n.tZ)(d, {}), (0, n.tZ)(d, {})],
              }),
            ],
          }),
        });
      });
    },
    42662: function (t, e, r) {
      r.d(e, {
        a: function () {
          return l;
        },
      });
      var n = r(38819),
        i = r(54655);
      let l = (0, n.Z)(i.Kqy, { target: 'e1jihsp60' })('flex:1;min-width:215px;');
    },
    45751: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(51712);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(l.Z, { minHeight: '334px' });
      });
    },
    39306: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(l.OdW, { height: '334px', width: '100%', borderRadius: '20px' });
      });
    },
    3167: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(51712);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(l.Z, { minHeight: '378px' });
      });
    },
    89778: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.BX)(l.Kqy, {
          direction: 'column',
          gap: 'xs',
          children: [
            (0, n.tZ)(l.OdW, { height: '338px', width: '100%', borderRadius: '20px' }),
            (0, n.tZ)(l.F3O, {}),
          ],
        });
      });
    },
    52754: function (t, e, r) {
      r.d(e, {
        VaultRiskCurationLayout: function () {
          return o;
        },
      });
      var n = r(78286),
        i = r(58258);
      let l = (0, r(38819).Z)('div', { target: 'ecprb5z0' })(
          'display:flex;flex-direction:column;gap:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.s;
          },
          ';width:100%;'
        ),
        o = (0, i.memo)((t) => {
          let { children: e } = t;
          return (0, n.tZ)(l, { children: e });
        });
    },
    72561: function (t, e, r) {
      r.d(e, {
        Jf: function () {
          return i;
        },
        P$: function () {
          return a;
        },
        _L: function () {
          return l;
        },
        ac: function () {
          return o;
        },
      });
      var n = r(38819);
      let i = (0, n.Z)('div', { target: 'e112gwt90' })(
          'display:flex;flex-wrap:wrap;gap:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.s;
          },
          ';width:100%;'
        ),
        l = (0, n.Z)('div', { target: 'e112gwt91' })(
          'flex:1;&:nth-of-type(1),&:nth-of-type(2),&:nth-of-type(3){flex:1 1 calc(33.333% - ',
          (t) => {
            let { theme: e } = t;
            return e.spacing.s;
          },
          ' * 2 / 3);}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('l');
          },
          '{flex:1 1 calc(50% - ',
          (t) => {
            let { theme: e } = t;
            return e.spacing.s;
          },
          ' / 2) !important;}'
        ),
        o = (0, n.Z)('div', { target: 'e112gwt92' })(
          'max-height:350px;overflow:auto;background-color:',
          (t) => {
            let { theme: e } = t;
            return e.colors.background.bloc;
          },
          ';overflow:auto;width:100%;border-radius:',
          (t) => {
            let { theme: e } = t;
            return e.borderRadius;
          },
          ';'
        ),
        a = (0, n.Z)('div', { target: 'e112gwt93' })(
          'position:sticky;bottom:0;height:30px;background:',
          (t) => {
            let { theme: e } = t;
            return e.colors.constant.gradient.scrollIndicatorBottom;
          },
          ';opacity:',
          (t) => {
            let { isScrolledToBottom: e } = t;
            return e ? 0 : 1;
          },
          ';transition:opacity 0.5s ease;'
        );
    },
    84215: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(51712),
        a = r(72561);
      let d = () =>
        (0, n.tZ)(l.SKT, { width: '100%', height: '120px', text: 'An error occurred.' });
      e.default = (0, i.memo)(() =>
        (0, n.BX)(l.Kqy, {
          gap: 's',
          direction: 'column',
          align: 'start',
          fullWidth: !0,
          children: [
            (0, n.tZ)(l.xvT.Body.XS.Regular, {
              color: 'text.secondary',
              children: 'Risk Disclosures',
            }),
            (0, n.BX)(a.Jf, {
              children: [
                (0, n.tZ)(a._L, { children: (0, n.tZ)(d, {}) }),
                (0, n.tZ)(a._L, { children: (0, n.tZ)(d, {}) }),
                (0, n.tZ)(a._L, { children: (0, n.tZ)(d, {}) }),
                (0, n.tZ)(a._L, { children: (0, n.tZ)(d, {}) }),
                (0, n.tZ)(a._L, { children: (0, n.tZ)(d, {}) }),
                (0, n.tZ)(a._L, { children: (0, n.tZ)(d, {}) }),
                (0, n.tZ)(a._L, { children: (0, n.tZ)(d, {}) }),
              ],
            }),
            (0, n.tZ)(o.Z, {}),
          ],
        })
      );
    },
    91747: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(72561);
      let a = () =>
        (0, n.tZ)(l.Kqy, {
          children: (0, n.tZ)(l.OdW, { height: '120px', width: '100%', borderRadius: '20px' }),
        });
      e.default = (0, i.memo)(() =>
        (0, n.BX)(l.Kqy, {
          gap: 's',
          direction: 'column',
          align: 'start',
          fullWidth: !0,
          children: [
            (0, n.tZ)(l.xvT.Body.XS.Regular, {
              color: 'text.secondary',
              children: 'Risk Disclosures',
            }),
            (0, n.BX)(o.Jf, {
              children: [
                (0, n.tZ)(o._L, { children: (0, n.tZ)(a, {}) }),
                (0, n.tZ)(o._L, { children: (0, n.tZ)(a, {}) }),
                (0, n.tZ)(o._L, { children: (0, n.tZ)(a, {}) }),
                (0, n.tZ)(o._L, { children: (0, n.tZ)(a, {}) }),
                (0, n.tZ)(o._L, { children: (0, n.tZ)(a, {}) }),
                (0, n.tZ)(o._L, { children: (0, n.tZ)(a, {}) }),
                (0, n.tZ)(o._L, { children: (0, n.tZ)(a, {}) }),
              ],
            }),
            (0, n.tZ)(l.OdW, { height: '250px', width: '100%', borderRadius: '20px' }),
          ],
        })
      );
    },
    77051: function (t, e, r) {
      r.d(e, {
        VaultRiskDisclosuresLayout: function () {
          return o;
        },
      });
      var n = r(78286),
        i = r(58258),
        l = r(54655);
      let o = (0, i.memo)((t) => {
        let { children: e } = t;
        return (0, n.tZ)(l.Kqy, { gap: 'm', direction: 'column', fullWidth: !0, children: e });
      });
    },
    94108: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(51712);
      e.default = (0, i.memo)(() =>
        (0, n.tZ)('div', { children: (0, n.tZ)(l.c, { minHeight: '600px' }) })
      );
    },
    57261: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655);
      e.default = (0, i.memo)(() =>
        (0, n.BX)(l.Kqy, {
          direction: 'column',
          gap: 's',
          basis: '100%',
          grow: 1,
          children: [
            (0, n.tZ)(l.OdW, { height: 135, width: '100%', borderRadius: '20px' }),
            (0, n.tZ)(l.OdW, { height: 358, width: '100%', borderRadius: '20px' }),
            (0, n.tZ)(l.OdW, { height: 48, width: '100%', borderRadius: '50px' }),
          ],
        })
      );
    },
    19469: function (t, e, r) {
      r.d(e, {
        c: function () {
          return n;
        },
      });
      let n = (0, r(38819).Z)('div', { target: 'erwer1r0' })(
        'display:grid;grid-template-columns:repeat(2,1fr);gap:',
        (t) => {
          let { theme: e } = t;
          return e.spacing.s;
        },
        ';',
        (t) => {
          let { theme: e } = t;
          return e.breakpoints.containerDown('m');
        },
        '{gap:8px;grid-template-columns:1fr;}'
      );
    },
    70058: function (t, e, r) {
      r.r(e);
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(36947),
        a = r(19469),
        d = r(92093);
      e.default = (0, i.memo)((t) => {
        var e;
        let { queryResult: r } = t,
          c =
            null == r ? void 0 : null === (e = r.data) || void 0 === e ? void 0 : e.vaultByAddress,
          u = (0, i.useMemo)(() => {
            var t;
            let e = (
              null !== (t = null == c ? void 0 : c.warnings) && void 0 !== t ? t : []
            ).filter((t) => {
              let e = (0, l._KI)(t),
                r = (0, l.uQK)(t);
              return !!e && !!r;
            });
            return (0, l.A3V)(e);
          }, [null == c ? void 0 : c.warnings]);
        return u.length
          ? (0, n.tZ)(d.default, {
              warningsSlot: (0, n.tZ)(a.c, {
                children: u.map((t) =>
                  (0, n.tZ)(
                    o.IM,
                    {
                      title: (0, l._KI)(t),
                      description: (0, l.uQK)(t),
                      type: t.type,
                      level: t.level,
                    },
                    t.type
                  )
                ),
              }),
            })
          : null;
      });
    },
    92093: function (t, e, r) {
      r.d(e, {
        default: function () {
          return c;
        },
      });
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(50825),
        a = r(6893),
        d = (0, i.memo)(() =>
          (0, n.BX)(l.Kqy, {
            direction: 'row',
            justify: 'space-between',
            align: 'center',
            children: [
              (0, n.tZ)(a.$, { children: 'Warnings' }),
              (0, n.tZ)(l.Kqy, {
                direction: 'row',
                justify: 'space-between',
                children: (0, n.tZ)(o.Z, {
                  href: 'https://docs.morpho.org/interface/warnings/#what-are-the-warnings-on-the-morpho-interface',
                  mode: 'external',
                  buttonProps: { variant: 'secondary', size: 'small', label: 'Learn more' },
                }),
              }),
            ],
          })
        ),
        c = (0, i.memo)((t) => {
          let { warningsSlot: e } = t;
          return (0, n.BX)(l.Kqy, {
            direction: 'column',
            gap: 's',
            children: [(0, n.tZ)(d, {}), e],
          });
        });
    },
    61512: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(92093);
      e.default = (0, i.memo)(() =>
        (0, n.tZ)(o.default, {
          warningsSlot: (0, n.tZ)(l.SKT, {
            text: 'Something went wrong while loading the warnings for this vault.',
            height: '121px',
          }),
        })
      );
    },
    20147: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = r(19469),
        a = r(92093);
      e.default = (0, i.memo)(() =>
        (0, n.tZ)(a.default, {
          warningsSlot: (0, n.tZ)(o.c, {
            children: Array.from({ length: 2 }).map((t, e) =>
              (0, n.tZ)(l.OdW, { height: '121px', width: '100%', borderRadius: '8px' }, e)
            ),
          }),
        })
      );
    },
    75794: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(51712);
      e.default = (0, i.memo)(() => (0, n.tZ)(l.c, { minHeight: '395px' }));
    },
    39228: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        l = r(54655);
      e.default = (0, i.memo)(() =>
        (0, n.tZ)(l.OdW, { height: '395px', width: '100%', borderRadius: '20px' })
      );
    },
    75924: function (t, e, r) {
      r.d(e, {
        WW: function () {
          return o;
        },
        ZP: function () {
          return d;
        },
        kq: function () {
          return a;
        },
      });
      var n = r(58258),
        i = r(90092),
        l = r(54655);
      let o = [
        { label: 'Your Position', value: 'yourPosition' },
        { label: 'Overview', value: 'overview' },
        { label: 'Performance', value: 'performance' },
        { label: 'Risk', value: 'risk' },
        { label: 'Activity', value: 'activity' },
      ];
      function a() {
        let [t, e] = (0, i.v1)('subTab', { defaultValue: 'overview', parse: (t) => t });
        return [t, e];
      }
      function d(t) {
        let {
            overviewSlots: e,
            yourPositionSlots: r,
            performanceSlots: i,
            riskSlots: o,
            activitySlots: d,
          } = t,
          c = (0, n.useRef)(null),
          u = (0, l.dD4)(),
          [h, s] = a(),
          p = (0, n.useCallback)(
            (t) => {
              s(t), !u && window.scrollY > 600 && window.scrollTo({ top: 480, behavior: 'smooth' });
            },
            [s, u]
          ),
          g = (0, n.useMemo)(() => {
            var t;
            return null !==
              (t = { yourPosition: r, overview: e, performance: i, risk: o, activity: d }[h]) &&
              void 0 !== t
              ? t
              : e;
          }, [h, d, e, i, o, r]);
        return { activeSubTab: h, setActiveSubTab: p, subTabSlot: g, mobileScrollAnchor: c };
      }
    },
    6893: function (t, e, r) {
      r.d(e, {
        $: function () {
          return o;
        },
      });
      var n = r(78286),
        i = r(58258),
        l = r(54655),
        o = (0, i.memo)(function (t) {
          let { children: e } = t;
          return (0, n.tZ)(l.xvT.Body.XS.Regular, { color: 'text.secondary', children: e });
        });
    },
    52575: function (t, e, r) {
      r.d(e, {
        Z: function () {
          return h;
        },
      });
      var n = r(78286),
        i = r(58258),
        l = r(23567),
        o = r(38819),
        a = r(54655);
      let d = (0, o.Z)('div', { target: 'e1yywf3a0' })(
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
        c = (0, l.iv)(
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
        u = (0, o.Z)(a.Kqy, { target: 'e1yywf3a1' })(
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
      var h = (0, i.memo)(function (t) {
        let { topPosition: e, children: r, ...i } = t;
        return (0, n.tZ)(d, { topPosition: e, ...i, children: (0, n.tZ)(u, { children: r }) });
      });
    },
    42025: function (t, e, r) {
      r.d(e, {
        Z: function () {
          return n.Z;
        },
      });
      var n = r(52575);
    },
    90835: function (t, e, r) {
      r.d(e, {
        A: function () {
          return n.default;
        },
      });
      var n = r(4078);
    },
    83638: function (t, e, r) {
      r.d(e, {
        w: function () {
          return n;
        },
      });
      let n = 54;
    },
  },
]);
