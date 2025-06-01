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
    (e._sentryDebugIds[t] = '37a17e24-d295-4ec4-8abd-ad33e9f2d475'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-37a17e24-d295-4ec4-8abd-ad33e9f2d475'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2783],
  {
    60846: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655);
      t.default = (0, i.memo)((e) => {
        let { children: t } = e;
        return (0, r.tZ)(a.Kqy, { direction: 'column', gap: 'l', fullWidth: !0, children: t });
      });
    },
    3849: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(60846),
        l = n(93665);
      t.default = (0, i.memo)(() =>
        (0, r.BX)(a.default, {
          children: [
            (0, r.tZ)(l.default, { title: 'Distribution', tableHeight: '337px' }),
            (0, r.tZ)(l.default, { title: 'Transactions', tableHeight: '337px' }),
          ],
        })
      );
    },
    60647: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(60846),
        l = n(391);
      t.default = (0, i.memo)(() =>
        (0, r.BX)(a.default, {
          children: [
            (0, r.tZ)(l.default, { title: 'User Distribution', tableHeight: '337px' }),
            (0, r.tZ)(l.default, { title: 'All Transactions' }),
          ],
        })
      );
    },
    93665: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(53863),
        o = n(6893);
      t.default = (0, i.memo)((e) => {
        let { title: t, tableHeight: n = '378px' } = e;
        return (0, r.BX)(a.Kqy, {
          gap: 's',
          direction: 'column',
          children: [(0, r.tZ)(o.$, { children: t }), (0, r.tZ)(l.Z, { minHeight: n })],
        });
      });
    },
    391: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(6893);
      t.default = (0, i.memo)((e) => {
        let { title: t, tableHeight: n = '338px' } = e;
        return (0, r.BX)(a.Kqy, {
          gap: 's',
          direction: 'column',
          children: [
            (0, r.tZ)(l.$, { children: t }),
            (0, r.BX)(a.Kqy, {
              gap: 'xs',
              direction: 'column',
              children: [
                (0, r.tZ)(a.OdW, { height: n, width: '100%', borderRadius: '20px' }),
                (0, r.tZ)(a.F3O, {}),
              ],
            }),
          ],
        });
      });
    },
    92275: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(53863);
      t.default = (0, i.memo)(() => (0, r.tZ)(a.Z, { minHeight: '338px' }));
    },
    73635: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655);
      let l = () =>
        (0, r.BX)(a.Kqy, {
          gap: 's',
          direction: 'column',
          flex: 1,
          children: [
            (0, r.tZ)(a.OdW, { height: '21px', width: '180px' }),
            (0, r.tZ)(a.OdW, { height: '46px', width: '160px' }),
          ],
        });
      t.default = (0, i.memo)(() => {
        let e = (0, a.dD4)();
        return (0, r.BX)(a.Kqy, {
          gap: 48,
          direction: 'column',
          style: { width: '100%' },
          children: [
            (0, r.BX)(a.Kqy, {
              direction: 'column',
              gap: 's',
              children: [
                (0, r.tZ)(a.OdW, { height: '66px', width: '65%' }),
                (0, r.tZ)(a.OdW, { height: '27px', width: '170px' }),
              ],
            }),
            (0, r.tZ)(a.OdW, { height: '20px', width: '100%' }),
            (0, r.BX)(a.Kqy, {
              direction: e ? 'column' : 'row',
              justify: 'start',
              wrap: 'wrap',
              gap: 'm',
              children: [
                (0, r.BX)(a.Kqy, {
                  gap: 's',
                  direction: 'column',
                  flex: 1,
                  children: [
                    (0, r.tZ)(a.OdW, { height: '21px', width: '180px' }),
                    (0, r.tZ)(a.OdW, { height: '46px', width: '160px' }),
                    (0, r.tZ)(a.OdW, { height: '21px', width: '80px' }),
                  ],
                }),
                (0, r.BX)(a.Kqy, {
                  gap: 's',
                  direction: 'column',
                  flex: 1,
                  children: [
                    (0, r.tZ)(a.OdW, { height: '21px', width: '180px' }),
                    (0, r.tZ)(a.OdW, { height: '46px', width: '160px' }),
                    (0, r.tZ)(a.OdW, { height: '21px', width: '80px' }),
                  ],
                }),
                (0, r.tZ)(l, {}),
                (0, r.tZ)(l, {}),
              ],
            }),
          ],
        });
      });
    },
    40405: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(53863);
      t.default = (0, i.memo)((e) => {
        let {} = e,
          t = (0, a.CPt)();
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.tZ)(l.Z, { minHeight: '395px' }),
            t && (0, r.tZ)(a.SKT, { height: '165px', text: 'An error has been encountered' }),
          ],
        });
      });
    },
    50544: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655);
      t.default = (0, i.memo)((e) => {
        let {} = e,
          t = (0, a.CPt)();
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.tZ)(a.OdW, { height: '395px', width: '100%', borderRadius: '20px' }),
            t && (0, r.tZ)(a.OdW, { height: '165px', width: '100%', borderRadius: '20px' }),
          ],
        });
      });
    },
    35038: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(53863);
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.tZ)(a.Z, { minHeight: '395px' });
      });
    },
    13180: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655);
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.tZ)(a.OdW, { height: '395px', width: '100%', borderRadius: '20px' });
      });
    },
    18530: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(53863);
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.tZ)(a.Z, { minHeight: '320px' });
      });
    },
    87982: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(62132);
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.BX)(a.Kqy, {
          gap: 'xs',
          direction: 'column',
          children: [
            (0, r.tZ)(a.OdW, { height: '320px', width: '100%', borderRadius: '20px' }),
            (0, r.tZ)(l.F, {}),
          ],
        });
      });
    },
    31950: function (e, t, n) {
      n.d(t, {
        default: function () {
          return K;
        },
      });
      var r,
        i,
        a = n(78286),
        l = n(58258),
        o = n(54655),
        d = n(99095),
        u = n(26726),
        c = n(4078),
        s = n(28393),
        h = n(38819);
      let p = (0, h.Z)('div', { target: 'ey5v3rc0' })(
        'display:flex;flex-direction:column;width:100%;gap:64px;'
      );
      var g = n(90092),
        f = n(89991),
        m = n(6423),
        v = n(42025);
      let Z = (0, h.Z)('div', { target: 'e1ed7txa0' })('flex:1;'),
        y = (0, h.Z)('div', { target: 'e1ed7txa1' })(
          'backdrop-filter:blur(8px);height:var(--mobile-tabs-height);padding-top:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';position:sticky;top:calc(var(--navbar-height) - 1px);z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.base.higher;
          },
          ';margin-bottom:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';'
        );
      var x = n(20624);
      let b = x.WW.filter((e) => 'yourPosition' !== e.value);
      function w(e) {
        let {
            heroSlot: t,
            simpleActionPanelSlot: n,
            yourPositionSlots: r,
            overviewSlots: i,
            performanceSlots: u,
            riskSlots: s,
            activitySlots: h,
          } = e,
          {
            account: { isConnected: w },
          } = (0, f.Z_)(),
          [B, k] = (0, g.v1)('tab', (0, g.jx)(Object.values(m.B6))),
          {
            activeSubTab: K,
            setActiveSubTab: P,
            subTabSlot: X,
            mobileScrollAnchor: q,
          } = (0, x.ZP)({ overviewSlots: i, performanceSlots: u, riskSlots: s, activitySlots: h }),
          { bannersToShow: R } = (0, d.l5)(),
          O = (0, l.useMemo)(
            () => (null == R ? void 0 : R.length) * 68,
            [null == R ? void 0 : R.length]
          );
        return (
          (0, l.useEffect)(() => {
            if (!B) {
              k(m.B6.Vault);
              return;
            }
            w || B !== m.B6.MyPosition || k(m.B6.Vault);
          }, [w, B, k]),
          (0, a.tZ)(Z, {
            children: (0, a.BX)(o.mQc.Root, {
              orientation: 'horizontal',
              value: null != B ? B : void 0,
              onValueChange: (e) => k(e),
              children: [
                (0, a.tZ)(y, {
                  children: (0, a.BX)(o.mQc.List, {
                    'aria-label': 'Navigation',
                    children: [
                      (0, a.tZ)(o.mQc.Trigger, { value: m.B6.Vault, children: 'Vault' }),
                      w &&
                        (0, a.tZ)(o.mQc.Trigger, {
                          value: m.B6.MyPosition,
                          children: 'My Position',
                        }),
                      (0, a.tZ)(o.mQc.Trigger, {
                        value: m.B6.ManagePosition,
                        children: w ? 'Manage position' : 'Open position',
                      }),
                    ],
                  }),
                }),
                (0, a.tZ)(c.default, {
                  hasLargerVerticalPadding: !0,
                  noBackground: !0,
                  children: (0, a.BX)(p, {
                    children: [
                      (0, a.tZ)(o.mQc.Content, {
                        value: m.B6.Vault,
                        children: (0, a.BX)(o.Kqy, {
                          marginTop: 60,
                          gap: 'm',
                          direction: 'column',
                          children: [
                            t,
                            (0, a.tZ)(v.Z, {
                              'data-testid': 'vault-tabs',
                              topPosition: O,
                              children: (0, a.tZ)(o.v0h, {
                                id: 'mobile-sub-tabs',
                                options: b,
                                value: K,
                                onChange: P,
                                ref: q,
                              }),
                            }),
                            (0, a.tZ)(o.Kqy, { gap: 'l', direction: 'column', children: X }),
                          ],
                        }),
                      }),
                      w && (0, a.tZ)(o.mQc.Content, { value: m.B6.MyPosition, children: r }),
                      (0, a.tZ)(o.mQc.Content, { value: m.B6.ManagePosition, children: n }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
      let B = (0, h.Z)(o.v0h, { target: 'e1r83idk0' })(
        'width:calc(100% - 80px);',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.down('s');
        },
        '{width:calc(100% - 12px);}',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.containerDown('xl', 'content-root');
        },
        '{width:calc(100% - 12px);}'
      );
      var k = (0, l.memo)((e) => {
        let {
            performanceSlots: t,
            riskSlots: n,
            activitySlots: r,
            overviewSlots: i,
            yourPositionSlots: u,
          } = e,
          {
            account: { isConnected: c },
          } = (0, f.Z_)(),
          s = (0, l.useRef)(c),
          {
            activeSubTab: h,
            setActiveSubTab: p,
            subTabSlot: g,
          } = (0, x.ZP)({
            yourPositionSlots: u,
            overviewSlots: i,
            performanceSlots: t,
            riskSlots: n,
            activitySlots: r,
          }),
          { bannersToShow: m } = (0, d.l5)(),
          Z = (0, l.useMemo)(
            () => (null == m ? void 0 : m.length) * 54,
            [null == m ? void 0 : m.length]
          ),
          y = (0, l.useMemo)(
            () => (c ? x.WW : x.WW.filter((e) => 'yourPosition' !== e.value)),
            [c]
          );
        return (
          (0, l.useEffect)(() => {
            let e = s.current;
            !c && e && 'yourPosition' === h && p('overview'), (s.current = c);
          }, [c, p, h]),
          (0, a.BX)(o.Kqy, {
            gap: 'm',
            direction: 'column',
            width: '100%',
            children: [
              (0, a.tZ)(v.Z, {
                'data-testid': 'vault-tabs',
                topPosition: Z,
                children: (0, a.tZ)(B, {
                  id: 'overview-segment',
                  options: y,
                  value: h,
                  onChange: p,
                  hasActiveBorder: !0,
                }),
              }),
              (0, a.tZ)(o.Kqy, { gap: 'l', direction: 'column', width: '100%', children: g }),
            ],
          })
        );
      });
      ((r = i || (i = {})).Market = 'market'),
        (r.MyPosition = 'myposition'),
        (r.ManagePosition = 'manageposition');
      var K = (0, l.memo)((e) => {
        var t;
        let {
            simpleActionPanelSlot: n,
            heroSlot: r,
            performanceSlots: i,
            riskSlots: l,
            activitySlots: h,
            overviewSlots: g,
            yourPositionSlots: f,
          } = e,
          { bannersToShow: m } = (0, d.l5)(),
          v = (0, o.ajf)('s'),
          Z = (0, u.nh)(u.TP.MOBILE_VAULT_TABS);
        return v && Z
          ? (0, a.tZ)(w, {
              simpleActionPanelSlot: n,
              heroSlot: r,
              yourPositionSlots: f,
              overviewSlots: g,
              performanceSlots: i,
              riskSlots: l,
              activitySlots: h,
            })
          : (0, a.BX)(a.HY, {
              children: [
                (0, a.tZ)(c.default, {
                  hasLargerVerticalPadding: !0,
                  noBackground: !0,
                  children: (0, a.BX)(p, {
                    children: [
                      r,
                      (0, a.tZ)(k, {
                        yourPositionSlots: f,
                        overviewSlots: g,
                        performanceSlots: i,
                        riskSlots: l,
                        activitySlots: h,
                      }),
                    ],
                  }),
                }),
                (0, a.tZ)(s.ef, {
                  top: (null !== (t = null == m ? void 0 : m.length) && void 0 !== t ? t : 1) * 54,
                  children: n,
                }),
              ],
            });
      });
    },
    57864: function (e, t, n) {
      n.d(t, {
        default: function () {
          return h;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(40252),
        l = n(54655),
        o = n(89991),
        d = n(35047),
        u = n(12597);
      let c = (0, n(38819).Z)(l.Kqy, { target: 'ecjqmen0' })('flex-grow:1;min-width:250px;');
      var s = (0, i.memo)((e) => {
          let { title: t, value: n } = e,
            a = (0, i.useMemo)(
              () => d.format.percent.default('-').trailingZero(!1).digits(2).of(n),
              [n]
            );
          return (0, r.tZ)(c, {
            children: (0, r.BX)(u.xr, {
              height: '143px',
              variant: 'full',
              children: [
                (0, r.tZ)(l.xvT.Body.XS.Regular, { color: 'text.secondary', children: t }),
                (0, r.BX)(l.Kqy, {
                  children: [
                    (0, r.tZ)(l.xvT.Title.S, { color: 'text.primary', children: a }),
                    (0, r.tZ)(l.xvT.Title.S, { color: 'text.secondary', children: '%' }),
                  ],
                }),
              ],
            }),
          });
        }),
        h = (0, i.memo)((e) => {
          let { apy7d: t, apy30d: n, apy90d: i } = e,
            { targetChainId: d } = (0, o.Z_)();
          return (0, r.tZ)(l.Kqy, {
            gap: 'm',
            direction: 'column',
            align: 'start',
            children: (0, r.BX)(l.Kqy, {
              gap: 's',
              wrap: 'wrap',
              style: { width: '100%' },
              children: [
                (0, r.tZ)(s, { title: '7D APY', value: t }),
                (0, r.tZ)(s, { title: '30D APY', value: n }),
                d !== a.ChainId.PolygonMainnet && (0, r.tZ)(s, { title: '90D APY', value: i }),
              ],
            }),
          });
        });
    },
    83747: function (e, t, n) {
      n.d(t, {
        jX: function () {
          return r.default;
        },
        S5: function () {
          return i.default;
        },
      }),
        n(57864);
      var r = n(47205),
        i = n(78707);
    },
    47205: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(40252),
        l = n(54655),
        o = n(89991),
        d = n(3965);
      let u = () =>
        (0, r.tZ)(d.h, {
          children: (0, r.tZ)(l.SKT, { height: '143px', text: 'An error occurred' }),
        });
      t.default = (0, i.memo)((e) => {
        let {} = e,
          { targetChainId: t } = (0, o.Z_)();
        return (0, r.BX)(l.Kqy, {
          gap: 's',
          wrap: 'wrap',
          style: { width: '100%' },
          children: [
            (0, r.tZ)(u, {}),
            (0, r.tZ)(u, {}),
            t !== a.ChainId.PolygonMainnet && (0, r.tZ)(u, {}),
          ],
        });
      });
    },
    78707: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(40252),
        l = n(54655),
        o = n(89991),
        d = n(3965);
      let u = () =>
        (0, r.tZ)(d.h, {
          children: (0, r.tZ)(l.OdW, { height: '143px', width: '100%', borderRadius: '20px' }),
        });
      t.default = (0, i.memo)((e) => {
        let {} = e,
          { targetChainId: t } = (0, o.Z_)();
        return (0, r.BX)(l.Kqy, {
          gap: 's',
          wrap: 'wrap',
          style: { width: '100%' },
          children: [
            (0, r.tZ)(u, {}),
            (0, r.tZ)(u, {}),
            t !== a.ChainId.PolygonMainnet && (0, r.tZ)(u, {}),
          ],
        });
      });
    },
    3965: function (e, t, n) {
      n.d(t, {
        h: function () {
          return a;
        },
      });
      var r = n(38819),
        i = n(54655);
      let a = (0, r.Z)(i.Kqy, { target: 'e1kd0mye0' })('flex:1;min-width:250px;');
    },
    68283: function (e, t, n) {
      n.d(t, {
        default: function () {
          return u;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(35047),
        o = n(12597);
      let d = (0, n(38819).Z)(a.Kqy, { target: 'epvujuh0' })(
        'flex:1;height:120px;',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.down('xs');
        },
        '{height:116px;}'
      );
      var u = (0, i.memo)((e) => {
        let { performanceFee: t, feeRecipient: n } = e;
        return (0, r.BX)(a.Kqy, {
          gap: 's',
          wrap: 'wrap',
          children: [
            (0, r.tZ)(d, {
              children: (0, r.BX)(o.xr, {
                height: '100%',
                children: [
                  (0, r.tZ)(a.xvT.Body.XS.Regular, {
                    color: 'text.secondary',
                    children: 'Performance Fee',
                  }),
                  (0, r.tZ)(a.xvT.Body.M.Regular, {
                    children: l.format.percent.digits(2).unit('%').default('0').of(t),
                  }),
                ],
              }),
            }),
            n &&
              (0, r.tZ)(d, {
                children: (0, r.tZ)(o.mD, {
                  title: 'Fee Recipient',
                  tooltipMessage: 'Copy fee recipient address.',
                  toastMessage: 'Fee recipient address copied to clipboard.',
                  address: n,
                  height: '100%',
                }),
              }),
          ],
        });
      });
    },
    69653: function (e, t, n) {
      n.d(t, {
        HB: function () {
          return r.default;
        },
        ih: function () {
          return i.default;
        },
      }),
        n(68283);
      var r = n(15408),
        i = n(28971);
    },
    15408: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(40308);
      let o = () =>
        (0, r.tZ)(l.x, {
          children: (0, r.tZ)(a.SKT, { height: '100%', text: 'An error occurred' }),
        });
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.BX)(a.Kqy, {
          gap: 's',
          wrap: 'wrap',
          children: [(0, r.tZ)(o, {}), (0, r.tZ)(o, {})],
        });
      });
    },
    28971: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(40308);
      let o = () =>
        (0, r.tZ)(l.x, {
          children: (0, r.tZ)(a.OdW, { height: '100%', width: '100%', borderRadius: '20px' }),
        });
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.BX)(a.Kqy, {
          gap: 's',
          wrap: 'wrap',
          children: [(0, r.tZ)(o, {}), (0, r.tZ)(o, {})],
        });
      });
    },
    40308: function (e, t, n) {
      n.d(t, {
        x: function () {
          return a;
        },
      });
      var r = n(38819),
        i = n(54655);
      let a = (0, r.Z)(i.Kqy, { target: 'e1chjq1m0' })('flex:1;min-width:250px;height:120px;');
    },
    15176: function (e, t, n) {
      var r = n(78286),
        i = n(58258);
      let a = (0, n(38819).Z)('div', { target: 'e10sa5870' })(
        'display:flex;flex-direction:column;gap:12px;width:100%;'
      );
      t.default = (0, i.memo)((e) => {
        let { children: t } = e;
        return (0, r.tZ)(a, { children: t });
      });
    },
    89690: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(6893),
        o = n(42662);
      let d = () =>
        (0, r.tZ)(o.a, {
          children: (0, r.tZ)(a.SKT, { height: '120px', text: 'An error occurred.' }),
        });
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.tZ)(a.Kqy, {
          gap: 's',
          direction: 'column',
          children: (0, r.BX)(a.Kqy, {
            gap: 's',
            direction: 'column',
            children: [
              (0, r.tZ)(l.$, { children: 'Risk Curation' }),
              (0, r.BX)(a.Kqy, {
                gap: 's',
                wrap: 'wrap',
                children: [(0, r.tZ)(d, {}), (0, r.tZ)(d, {})],
              }),
            ],
          }),
        });
      });
    },
    77834: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(6893),
        o = n(42662);
      let d = () =>
        (0, r.tZ)(o.a, {
          children: (0, r.tZ)(a.OdW, { height: '120px', width: '100%', borderRadius: '20px' }),
        });
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.tZ)(a.Kqy, {
          gap: 's',
          direction: 'column',
          children: (0, r.BX)(a.Kqy, {
            gap: 's',
            direction: 'column',
            children: [
              (0, r.tZ)(l.$, { children: 'Risk Curation' }),
              (0, r.BX)(a.Kqy, {
                gap: 's',
                wrap: 'wrap',
                children: [(0, r.tZ)(d, {}), (0, r.tZ)(d, {})],
              }),
            ],
          }),
        });
      });
    },
    42662: function (e, t, n) {
      n.d(t, {
        a: function () {
          return a;
        },
      });
      var r = n(38819),
        i = n(54655);
      let a = (0, r.Z)(i.Kqy, { target: 'e1jihsp60' })('flex:1;min-width:215px;');
    },
    45751: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(53863);
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.tZ)(a.Z, { minHeight: '334px' });
      });
    },
    39306: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655);
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.tZ)(a.OdW, { height: '334px', width: '100%', borderRadius: '20px' });
      });
    },
    3167: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(53863);
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.tZ)(a.Z, { minHeight: '378px' });
      });
    },
    89778: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655);
      t.default = (0, i.memo)((e) => {
        let {} = e;
        return (0, r.BX)(a.Kqy, {
          direction: 'column',
          gap: 'xs',
          children: [
            (0, r.tZ)(a.OdW, { height: '338px', width: '100%', borderRadius: '20px' }),
            (0, r.tZ)(a.F3O, {}),
          ],
        });
      });
    },
    52754: function (e, t, n) {
      n.d(t, {
        VaultRiskCurationLayout: function () {
          return l;
        },
      });
      var r = n(78286),
        i = n(58258);
      let a = (0, n(38819).Z)('div', { target: 'ecprb5z0' })(
          'display:flex;flex-direction:column;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';width:100%;'
        ),
        l = (0, i.memo)((e) => {
          let { children: t } = e;
          return (0, r.tZ)(a, { children: t });
        });
    },
    72561: function (e, t, n) {
      n.d(t, {
        P$: function () {
          return l;
        },
        T5: function () {
          return i;
        },
        ac: function () {
          return a;
        },
      });
      var r = n(38819);
      let i = (0, r.Z)('div', { target: 'ekvf0iq0' })(
          'width:100%;display:grid;grid-template-columns:repeat(3,1fr);gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';> *{grid-column:auto / span 1;}> *:last-child:nth-of-type(3n-1):nth-last-of-type(1),> *:last-child:nth-of-type(3n-2):nth-last-of-type(1){grid-column:1 / -1;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('l');
          },
          '{grid-template-columns:repeat(2,1fr);> *:last-child:nth-of-type(2n-1):nth-last-of-type(1){grid-column:1 / -1;}}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('m');
          },
          '{grid-template-columns:1fr;}'
        ),
        a = (0, r.Z)('div', { target: 'ekvf0iq1' })(
          'max-height:350px;overflow:auto;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';overflow:auto;width:100%;border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';'
        ),
        l = (0, r.Z)('div', { target: 'ekvf0iq2' })(
          'position:sticky;bottom:0;height:30px;background:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.gradient.scrollIndicatorBottom;
          },
          ';opacity:',
          (e) => {
            let { isScrolledToBottom: t } = e;
            return t ? 0 : 1;
          },
          ';transition:opacity 0.5s ease;'
        );
    },
    84215: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(53863),
        o = n(72561);
      let d = () =>
        (0, r.tZ)(a.SKT, { width: '100%', height: '120px', text: 'An error occurred.' });
      t.default = (0, i.memo)(() =>
        (0, r.BX)(a.Kqy, {
          gap: 's',
          direction: 'column',
          align: 'start',
          fullWidth: !0,
          children: [
            (0, r.tZ)(a.xvT.Body.XS.Regular, {
              color: 'text.secondary',
              children: 'Risk Disclosures',
            }),
            (0, r.BX)(o.T5, {
              children: [
                (0, r.tZ)(d, {}),
                (0, r.tZ)(d, {}),
                (0, r.tZ)(d, {}),
                (0, r.tZ)(d, {}),
                (0, r.tZ)(d, {}),
                (0, r.tZ)(d, {}),
              ],
            }),
            (0, r.tZ)(l.Z, {}),
          ],
        })
      );
    },
    91747: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(72561);
      let o = () =>
        (0, r.tZ)(a.Kqy, {
          children: (0, r.tZ)(a.OdW, { height: '120px', width: '100%', borderRadius: '20px' }),
        });
      t.default = (0, i.memo)(() =>
        (0, r.BX)(a.Kqy, {
          gap: 's',
          direction: 'column',
          align: 'start',
          fullWidth: !0,
          children: [
            (0, r.tZ)(a.xvT.Body.XS.Regular, {
              color: 'text.secondary',
              children: 'Risk Disclosures',
            }),
            (0, r.BX)(l.T5, {
              children: [
                (0, r.tZ)(o, {}),
                (0, r.tZ)(o, {}),
                (0, r.tZ)(o, {}),
                (0, r.tZ)(o, {}),
                (0, r.tZ)(o, {}),
                (0, r.tZ)(o, {}),
                (0, r.tZ)(o, {}),
              ],
            }),
            (0, r.tZ)(a.OdW, { height: '250px', width: '100%', borderRadius: '20px' }),
          ],
        })
      );
    },
    77051: function (e, t, n) {
      n.d(t, {
        VaultRiskDisclosuresLayout: function () {
          return l;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655);
      let l = (0, i.memo)((e) => {
        let { children: t } = e;
        return (0, r.tZ)(a.Kqy, { gap: 'm', direction: 'column', fullWidth: !0, children: t });
      });
    },
    94108: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(53863);
      t.default = (0, i.memo)(() =>
        (0, r.tZ)('div', { children: (0, r.tZ)(a.c, { minHeight: '600px' }) })
      );
    },
    57261: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655);
      t.default = (0, i.memo)(() =>
        (0, r.BX)(a.Kqy, {
          direction: 'column',
          gap: 's',
          basis: '100%',
          grow: 1,
          children: [
            (0, r.tZ)(a.OdW, { height: 135, width: '100%', borderRadius: '20px' }),
            (0, r.tZ)(a.OdW, { height: 358, width: '100%', borderRadius: '20px' }),
            (0, r.tZ)(a.OdW, { height: 48, width: '100%', borderRadius: '50px' }),
          ],
        })
      );
    },
    19469: function (e, t, n) {
      n.d(t, {
        c: function () {
          return r;
        },
      });
      let r = (0, n(38819).Z)('div', { target: 'erwer1r0' })(
        'display:grid;grid-template-columns:repeat(2,1fr);gap:',
        (e) => {
          let { theme: t } = e;
          return t.spacing.s;
        },
        ';',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.containerDown('m');
        },
        '{gap:8px;grid-template-columns:1fr;}'
      );
    },
    70058: function (e, t, n) {
      n.r(t);
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(12597),
        o = n(19469),
        d = n(92093);
      t.default = (0, i.memo)((e) => {
        var t;
        let { queryResult: n } = e,
          u =
            null == n ? void 0 : null === (t = n.data) || void 0 === t ? void 0 : t.vaultByAddress,
          c = (0, i.useMemo)(() => {
            var e;
            let t = (
              null !== (e = null == u ? void 0 : u.warnings) && void 0 !== e ? e : []
            ).filter((e) => {
              let t = (0, a._KI)(e),
                n = (0, a.uQK)(e);
              return !!t && !!n;
            });
            return (0, a.A3V)(t);
          }, [null == u ? void 0 : u.warnings]);
        return c.length
          ? (0, r.tZ)(d.default, {
              warningsSlot: (0, r.tZ)(o.c, {
                children: c.map((e) =>
                  (0, r.tZ)(
                    l.IM,
                    {
                      title: (0, a._KI)(e),
                      description: (0, a.uQK)(e),
                      type: e.type,
                      level: e.level,
                    },
                    e.type
                  )
                ),
              }),
            })
          : null;
      });
    },
    92093: function (e, t, n) {
      n.d(t, {
        default: function () {
          return u;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(50825),
        o = n(6893),
        d = (0, i.memo)(() =>
          (0, r.BX)(a.Kqy, {
            direction: 'row',
            justify: 'space-between',
            align: 'center',
            children: [
              (0, r.tZ)(o.$, { children: 'Warnings' }),
              (0, r.tZ)(a.Kqy, {
                direction: 'row',
                justify: 'space-between',
                children: (0, r.tZ)(l.Z, {
                  href: 'https://docs.morpho.org/interface/warnings/#what-are-the-warnings-on-the-morpho-interface',
                  mode: 'external',
                  buttonProps: { variant: 'secondary', size: 'small', label: 'Learn more' },
                }),
              }),
            ],
          })
        ),
        u = (0, i.memo)((e) => {
          let { warningsSlot: t } = e;
          return (0, r.BX)(a.Kqy, {
            direction: 'column',
            gap: 's',
            children: [(0, r.tZ)(d, {}), t],
          });
        });
    },
    61512: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(92093);
      t.default = (0, i.memo)(() =>
        (0, r.tZ)(l.default, {
          warningsSlot: (0, r.tZ)(a.SKT, {
            text: 'Something went wrong while loading the warnings for this vault.',
            height: '121px',
          }),
        })
      );
    },
    20147: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = n(19469),
        o = n(92093);
      t.default = (0, i.memo)(() =>
        (0, r.tZ)(o.default, {
          warningsSlot: (0, r.tZ)(l.c, {
            children: Array.from({ length: 2 }).map((e, t) =>
              (0, r.tZ)(a.OdW, { height: '121px', width: '100%', borderRadius: '8px' }, t)
            ),
          }),
        })
      );
    },
    75794: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(53863);
      t.default = (0, i.memo)(() => (0, r.tZ)(a.c, { minHeight: '395px' }));
    },
    39228: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        a = n(54655);
      t.default = (0, i.memo)(() =>
        (0, r.tZ)(a.OdW, { height: '395px', width: '100%', borderRadius: '20px' })
      );
    },
    20624: function (e, t, n) {
      n.d(t, {
        WW: function () {
          return l;
        },
        ZP: function () {
          return d;
        },
        kq: function () {
          return o;
        },
      });
      var r = n(58258),
        i = n(90092),
        a = n(54655);
      let l = [
        { label: 'Your Position', value: 'yourPosition' },
        { label: 'Overview', value: 'overview' },
        { label: 'Performance', value: 'performance' },
        { label: 'Risk', value: 'risk' },
        { label: 'Activity', value: 'activity' },
      ];
      function o() {
        let [e, t] = (0, i.v1)('subTab', { defaultValue: 'overview', parse: (e) => e });
        return [e, t];
      }
      function d(e) {
        let {
            overviewSlots: t,
            yourPositionSlots: n,
            performanceSlots: i,
            riskSlots: l,
            activitySlots: d,
          } = e,
          u = (0, r.useRef)(null),
          c = (0, a.dD4)(),
          [s, h] = o(),
          p = (0, r.useCallback)(
            (e) => {
              h(e), !c && window.scrollY > 600 && window.scrollTo({ top: 480, behavior: 'smooth' });
            },
            [h, c]
          ),
          g = (0, r.useMemo)(() => {
            var e;
            return null !==
              (e = { yourPosition: n, overview: t, performance: i, risk: l, activity: d }[s]) &&
              void 0 !== e
              ? e
              : t;
          }, [s, d, t, i, l, n]);
        return { activeSubTab: s, setActiveSubTab: p, subTabSlot: g, mobileScrollAnchor: u };
      }
    },
    6893: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        l = (0, i.memo)(function (e) {
          let { children: t } = e;
          return (0, r.tZ)(a.xvT.Body.XS.Regular, { color: 'text.secondary', children: t });
        });
    },
    52575: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(23567),
        l = n(38819),
        o = n(54655);
      let d = (0, l.Z)('div', { target: 'e1yywf3a0' })(
          'position:sticky;top:calc(var(--navbar-height) + ',
          (e) => {
            let { topPosition: t } = e;
            return t;
          },
          'px - 1px);z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.base.default;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{top:',
          (e) => {
            let { topPosition: t } = e;
            return 0 === t
              ? '\n      calc(var(--navbar-height) + var(--mobile-tabs-height) - '.concat(
                  2,
                  'px)\n    '
                )
              : '\n    calc(var(--navbar-height) + '.concat(t, 'px - ').concat(2, 'px)\n  ');
          },
          ';}'
        ),
        u = (0, a.iv)(
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
        c = (0, l.Z)(o.Kqy, { target: 'e1yywf3a1' })(
          'backdrop-filter:blur(8px);padding-left:',
          80,
          'px;width:calc(100% + ',
          80,
          'px + ',
          80,
          'px);transform:translateX(-',
          80,
          'px);',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.containerDown('xl', 'content-root');
          },
          '{',
          u,
          '}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{',
          u,
          '}'
        );
      var s = (0, i.memo)(function (e) {
        let { topPosition: t, children: n, ...i } = e;
        return (0, r.tZ)(d, { topPosition: t, ...i, children: (0, r.tZ)(c, { children: n }) });
      });
    },
    42025: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r.Z;
        },
      });
      var r = n(52575);
    },
    66888: function (e, t, n) {
      n.d(t, {
        u: function () {
          return i;
        },
        Z: function () {
          return W;
        },
      });
      var r,
        i,
        a = n(78286),
        l = n(58258),
        o = n(99095),
        d = n(54655),
        u = n(38819),
        c = n(56044),
        s = n(12556),
        h = n(82078),
        p = n(50825),
        g = n(98949),
        f = n(82803),
        m = n(75147),
        v = n(89991),
        Z = n(40816);
      let y = (0, u.Z)(d.Kqy, { target: 'ef7kvr40' })('width:100%;'),
        x = (0, u.Z)(d.zxk, { target: 'ef7kvr41' })('margin-left:auto;'),
        b = (0, u.Z)(d.Kqy, { target: 'ef7kvr42' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.tertiary;
          },
          ';border-radius:10px;width:100%;'
        ),
        w = (0, l.memo)(() => {
          var e, t;
          let { toggleDialog: n } = (0, d.DAv)(),
            { targetChainId: r, account: i } = (0, v.Z_)(),
            { setActiveBundle: o } = (0, m.H)(),
            { legacyMorphoHolding: u, morphoHolding: y } = (0, g.gz)(),
            w = (0, l.useMemo)(() => {
              var e, t;
              return d.$0l.short
                .digits(2)
                .min(0.01)
                .of(
                  null !== (t = null === (e = u.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (e = u.value) || void 0 === e ? void 0 : e.balance]),
            B = (0, l.useMemo)(() => {
              var e, t;
              return d.$0l.short
                .digits(2)
                .min(0.01)
                .of(
                  null !== (t = null === (e = y.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (t = y.value) || void 0 === t ? void 0 : t.balance]),
            k = (0, l.useMemo)(() => {
              var e;
              if (!i.address) return;
              let t = i.address,
                n = new c.ActionBundleRequirements(),
                a = [];
              if (null === (e = u.value) || void 0 === e ? void 0 : e.balance) {
                let e = (0, Z.S)({
                  amount: u.value.balance,
                  userAddress: t,
                  supportsSignatures: !i.isContract,
                  bundlerAllowance: u.value.erc20Allowances['bundler3.generalAdapter1'],
                  erc2612Nonce: u.value.erc2612Nonce,
                  chainId: r,
                });
                e &&
                  (a.push(...e.actions),
                  n.signatures.push(...e.requirements.signatures),
                  n.txs.push(...e.requirements.txs));
              }
              return new c.ActionBundle(r, a, n);
            }, [i.address, i.isContract, u.value, r]),
            K = (0, l.useCallback)(() => {
              k &&
                (o(k, [
                  {
                    id: 'wrap',
                    type: f.H.InterfaceOperationType.wrap,
                    options: { isMax: [], disabledPeripheralTokens: new Set() },
                  },
                ]),
                n((0, a.tZ)(h.Z, {}), { closable: !1 }));
            }, [k, o, n]);
          return (0, a.BX)(d.Kqy, {
            direction: 'column',
            align: 'center',
            justify: 'center',
            gap: 24,
            children: [
              (0, a.tZ)(x, {
                variant: 'secondary',
                iconAlone: 'ClosePlain20',
                onClick: () => n(!1),
              }),
              (0, a.tZ)(d.qEK, {
                src: 'https://cdn.morpho.org/assets/logos/morpho.svg',
                padding: 0,
                style: { width: '40px', height: '40px' },
              }),
              (0, a.tZ)(d.xvT.Title.S, {
                textAlign: 'center',
                children: 'Wrap your legacy MORPHO',
              }),
              (0, a.tZ)(d.xvT.Body.M.Regular, {
                textAlign: 'center',
                children: 'The Morpho DAO has enabled transferability for the MORPHO token!',
              }),
              (0, a.tZ)(d.xvT.Body.M.Regular, {
                textAlign: 'center',
                children:
                  'Holders of legacy MORPHO tokens on Ethereum will need to wrap their tokens to enable transferability.',
              }),
              (0, a.BX)(d.Kqy, {
                direction: 'column',
                gap: 's',
                align: 'center',
                children: [
                  (0, a.tZ)(d.zxk, {
                    size: 'big',
                    variant: 'primary',
                    label: 'Wrap MORPHO',
                    onClick: K,
                  }),
                  (0, a.tZ)(p.Z, {
                    href: s.IA,
                    buttonProps: { variant: 'secondary', size: 'small', label: 'FAQ' },
                  }),
                ],
              }),
              (0, a.BX)(b, {
                direction: 'column',
                align: 'center',
                padding: 's',
                gap: 6,
                children: [
                  (0, a.tZ)(d.xvT.Body.XS.Regular, { children: 'Wallet Balance' }),
                  (0, a.tZ)(d.xvT.Body.XS.Regular, {
                    children: 'Legacy MORPHO: '.concat(w, ' MORPHO'),
                  }),
                  (0, a.tZ)(d.xvT.Body.XS.Regular, {
                    children: 'Wrapped MORPHO: '.concat(B, ' MORPHO'),
                  }),
                ],
              }),
            ],
          });
        });
      var B = (0, l.memo)((e) => {
          let {} = e,
            { toggleDialog: t } = (0, d.DAv)();
          return (0, a.BX)(y, {
            align: 'center',
            gap: 8,
            justify: 'space-between',
            'data-testid': 'wrap-banner',
            children: [
              (0, a.tZ)('div', {}),
              (0, a.tZ)(d.xvT.Body.M.Regular, {
                lineHeight: 'normal',
                children:
                  'MORPHO is now transferable! Please wrap your MORPHO to the latest version to enable transferability.',
              }),
              (0, a.BX)(d.Kqy, {
                align: 'center',
                gap: 8,
                children: [
                  (0, a.tZ)(d.zxk, {
                    variant: 'primary',
                    size: 'default',
                    onClick: () => t((0, a.tZ)(w, {}), { closable: !0 }),
                    label: 'Wrap',
                  }),
                  (0, a.tZ)(p.Z, {
                    href: s.IA,
                    buttonProps: { variant: 'secondary', size: 'default', label: 'FAQ' },
                  }),
                ],
              }),
            ],
          });
        }),
        k = n(18313),
        K = (0, l.memo)((e) => {
          let {} = e,
            { account: t, targetChainId: n } = (0, v.Z_)(),
            r = (0, l.useMemo)(() => {
              let e = s.FW.getSafeIdentifier(n),
                r = s.FW.getNameById(n);
              return e
                ? 'https://app.safe.global/apps/open?safe='
                    .concat(e, ':')
                    .concat(null == t ? void 0 : t.address, '&appUrl=')
                    .concat(k.clientEnvs.NEXT_PUBLIC_DEPLOYMENT_URL, '/')
                    .concat(r, '/earn')
                : '#';
            }, [n, null == t ? void 0 : t.address]);
          return (0, a.BX)(d.xvT.Body.M.Regular, {
            lineHeight: 'normal',
            width: '100%',
            justifyContent: 'center',
            textAlign: 'center',
            children: [
              'If you are using a Safe, use the ',
              (0, a.tZ)('a', { href: r, children: 'Morpho Safe App' }),
              ' for an optimal experience',
            ],
          });
        });
      let P =
        'Morpho Association (ADDMO) is not authorized or regulated by the Financial Conduct Authority (FCA), and accordingly, the protections provided by the UK regulatory system will not be available to you when using the products and services provided by Morpho Association. It is your responsibility to ascertain whether you are permitted to use the products and services provided by Morpho Association according to applicable laws or regulations. By accessing this website and the products and services available through it, you acknowledge and confirm that you are a company or partnership with share capital or net assets of at least \xa35m or a trust with total cash and investments of at least \xa310m, or that you have professional experience in matters relating to investments and your ordinary activities involve you in dealing in cryptoassets for the purpose of a business carried on by you. You also acknowledge that cryptoassets are high risk investments and that you deal in them at your own risk.';
      function X() {
        return (0, a.BX)(d.Kqy, {
          direction: 'column',
          align: 'center',
          justify: 'center',
          gap: 'm',
          children: [
            (0, a.tZ)(d.xvT.Body.L.Regular, { children: 'Disclaimer for UK residents' }),
            (0, a.tZ)(d.xvT.Body.S.Regular, { children: P }),
          ],
        });
      }
      var q = (0, l.memo)((e) => {
        let {} = e,
          t = (0, d.dD4)(),
          { toggleDialog: n } = (0, d.DAv)(),
          r = (0, l.useMemo)(() => ''.concat(P.slice(0, 110), '...'), []);
        return (0, a.BX)(d.Kqy, {
          align: 'center',
          justify: 'space-between',
          width: '100%',
          gap: 8,
          children: [
            (0, a.tZ)('div', {}),
            (0, a.tZ)(d.ZT$, {
              TextVariant: t ? d.xvT.Body.XXS.Regular : d.xvT.Body.M.Regular,
              lineHeight: 'normal',
              children: r,
            }),
            (0, a.tZ)(d.zxk, {
              variant: 'ghost',
              size: 'small',
              onClick: () => n((0, a.tZ)(X, {}), { closable: !0 }),
              children: 'See more',
            }),
          ],
        });
      });
      ((r = i || (i = {})).CONFIG = {
        legacyMorpho: { type: 'info', content: (0, a.tZ)(B, {}), dismissable: !0 },
        pageWarning: { type: 'alert', content: null, dismissable: !1 },
        simulate: {
          type: 'info',
          content: (0, a.tZ)(d.xvT.Body.M.Regular, {
            lineHeight: 'normal',
            width: '100%',
            textAlign: 'center',
            children: 'Simulating data based on transactions in Bundler',
          }),
          dismissable: !0,
        },
        ukDisclaimer: { type: 'info', content: (0, a.tZ)(q, {}), dismissable: !1 },
        safeAccount: { type: 'info', content: (0, a.tZ)(K, {}), dismissable: !0 },
      }),
        (r.TypeDef = {
          alert: { background: (e) => e.colors.components.badge },
          info: { background: (e) => e.colors.background.banner },
        });
      let R = (0, u.Z)(d.Kqy, { target: 'e1igxb3q0' })(
        'background:',
        (e) => {
          let { theme: t, variant: n } = e;
          return i.TypeDef[n].background(t);
        },
        ';backdrop-filter:blur(100px);padding:14px 24px;min-height:54px;',
        (0, d.ClW)(d.ieP),
        ';a{text-decoration:underline;}'
      );
      var O = (0, l.memo)((e) => {
          let { className: t, children: n, variant: r = 'alert', onDismiss: i } = e;
          return (0, a.BX)(R, {
            className: t,
            variant: r,
            align: 'center',
            gap: 8,
            children: [
              n,
              i &&
                (0, a.tZ)(d.zxk, {
                  onClick: i,
                  variant: 'ghost',
                  size: 'small',
                  iconAlone: 'ClosePlain20',
                }),
            ],
          });
        }),
        M = n(23567);
      let T = (0, u.Z)(d.Kqy, { target: 'esgdglv0' })(
          'z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.banner.mid;
          },
          ';margin-top:',
          (0, M.iv)('var(--navbar-height)'),
          ';position:relative;'
        ),
        S = (0, u.Z)('div', { target: 'esgdglv1' })(
          'width:calc(100% - (var(--bundler-width) - var(--bundler-position)));',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{width:100%;}position:fixed;'
        );
      var W = (0, l.memo)((e) => {
        let { className: t } = e,
          { bannersToShow: n, toggleBanner: r } = (0, o.l5)();
        return (0, a.tZ)(T, {
          className: t,
          direction: 'column',
          children: (0, a.tZ)(S, {
            children: n.map((e) => {
              let { id: t, content: n, type: i, dismissable: l } = e;
              return (0, a.tZ)(
                O,
                { variant: i, onDismiss: l ? () => r(t, !1) : void 0, children: n },
                t
              );
            }),
          }),
        });
      });
    },
    99095: function (e, t, n) {
      n.d(t, {
        l5: function () {
          return f;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(44982),
        l = n(54655),
        o = n(35047),
        d = n(66888),
        u = n(18313),
        c = n(89991),
        s = n(98949),
        h = n(22683),
        p = n(3918);
      let g = (0, i.createContext)(null),
        f = () => {
          let e = (0, i.useContext)(g);
          if (!e) throw Error('useLayoutContext must be called inside a LayoutContextProvider');
          return e;
        };
      t.ZP = (0, i.memo)((e) => {
        var t;
        let { children: n } = e,
          [f, m] = (0, i.useState)(!1),
          [v, Z] = (0, i.useState)(!1),
          [y, x] = (0, i.useState)(!0),
          { operations: b } = (0, h.N)(),
          { toggleAnimation: w } = (0, l.s8G)(),
          B = (0, l.ajf)('s'),
          {
            account: { isConnected: k },
          } = (0, c.Z_)();
        (0, i.useLayoutEffect)(() => {
          k ? w('default') : w('loading');
        }, [k, w]);
        let [K, P] = (0, i.useState)({}),
          [X, q] = (0, i.useState)(),
          R = (0, i.useCallback)(
            (e) => {
              if (B && e) {
                q({ ...e, dismissable: !0 });
                return;
              }
              q(e);
            },
            [B, q]
          ),
          O = (0, i.useMemo)(
            () =>
              (0, o.entries)(K)
                .filter((e) => {
                  let [, t] = e;
                  return t;
                })
                .map((e) => {
                  let [t] = e;
                  return 'pageWarning' === t && (null == X ? void 0 : X.content)
                    ? { ...X, id: t }
                    : { ...d.u.CONFIG[t], id: t };
                })
                .sort((e, t) => (e.type === t.type ? 0 : 'alert' === e.type ? -1 : 1)),
            [K, X]
          ),
          M = (0, i.useCallback)((e, t) => {
            P((n) => ({ ...n, [e]: t }));
          }, []),
          { account: T } = (0, c.Z_)(),
          [S, W] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          M('pageWarning', !!X && (0, o.isDefined)(X.content));
        }, [X, null == X ? void 0 : X.content, M]),
          (0, i.useEffect)(() => {
            b.length > 0 ? M('simulate', !0) : M('simulate', !1);
          }, [b, M]),
          (0, i.useEffect)(() => {
            M('safeAccount', !T.isSafe && !!T.isContract);
          }, [M, T.isSafe, T.isContract]);
        let { countryCode: A } = (0, p.RA)();
        (0, i.useEffect)(() => {
          M('ukDisclaimer', 'GB' === A);
        }, [M, A]);
        let { legacyMorphoHolding: C } = (0, s.gz)();
        (0, i.useEffect)(() => {
          var e;
          M(
            'legacyMorpho',
            !!(
              (null === (e = C.value) || void 0 === e ? void 0 : e.balance) && C.value.balance > 0n
            )
          );
        }, [null === (t = C.value) || void 0 === t ? void 0 : t.balance, M]),
          (0, i.useEffect)(() => {
            u.clientEnvs.NEXT_PUBLIC_SPINDL_SDK_KEY &&
              (null == T ? void 0 : T.address) &&
              a.ZP.attribute(T.address);
          }, [null == T ? void 0 : T.address]);
        let D = (0, i.useMemo)(
          () => ({
            isMobileLeftPanelOpen: f,
            setMobileLeftPanelOpen: m,
            isMobileRightPanelOpen: v,
            setMobileRightPanelOpen: Z,
            isLeftPanelExpanded: y,
            setIsLeftPanelExpanded: x,
            setShowRightPanelMask: W,
            bannersToShow: O,
            toggleBanner: M,
            setPageWarning: R,
            showRightPanelMask: S,
          }),
          [f, v, y, O, M, R, S]
        );
        return (0, r.tZ)(g.Provider, { value: D, children: n });
      });
    },
    3918: function (e, t, n) {
      n.d(t, {
        RA: function () {
          return l;
        },
      });
      var r = n(78286),
        i = n(58258);
      let a = (0, i.createContext)(null),
        l = () => {
          let e = (0, i.useContext)(a);
          if (!e) throw Error('useUtilityContext must be called inside a UtilityContextProvider');
          return e;
        };
      t.ZP = (e) => {
        let { children: t, countryCode: n } = e;
        return (0, r.tZ)(a.Provider, { value: { countryCode: n }, children: t });
      };
    },
  },
]);
