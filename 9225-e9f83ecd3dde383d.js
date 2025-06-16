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
    (t._sentryDebugIds[e] = '13603a90-2b88-49f1-a0b8-4a36871f1786'),
    (t._sentryDebugIdIdentifier = 'sentry-dbid-13603a90-2b88-49f1-a0b8-4a36871f1786'));
} catch (t) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9225],
  {
    60846: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655);
      e.default = (0, i.memo)((t) => {
        let { children: e } = t;
        return (0, n.tZ)(o.Kqy, { direction: 'column', gap: 'l', fullWidth: !0, children: e });
      });
    },
    37095: function (t, e, r) {
      r.d(e, {
        A_: function () {
          return o;
        },
        FF: function () {
          return d;
        },
        qs: function () {
          return a;
        },
        zc: function () {
          return l;
        },
      });
      var n = r(38819),
        i = r(54655);
      let o = (0, n.Z)(i.xrM, { target: 'ebbbhvu1' })(
          'width:100%;height:100%;border-radius:',
          (t) => {
            let { theme: e } = t;
            return e.borderRadius;
          },
          ';display:grid;'
        ),
        l = (0, n.Z)(i.Kqy, { target: 'ebbbhvu2' })(
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
        o = r(54655),
        l = r(37095);
      e.Z = (0, i.memo)((t) => {
        let { children: e, tableSettingsSlot: r } = t;
        return (0, n.BX)(o.Kqy, {
          direction: 'column',
          basis: '100%',
          gap: 's',
          children: [
            (0, n.BX)(l.zc, {
              children: [
                (0, n.tZ)(o.xvT.Body.XS.Regular, {
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
        o = r(54655),
        l = r(62132),
        a = r(58784);
      e.default = (0, i.memo)((t) => {
        let { tableHeight: e = '338px' } = t,
          r = (0, o.ajf)('m');
        return (0, n.tZ)(a.Z, {
          tableSettingsSlot: (0, n.tZ)(n.HY, {
            children: r
              ? (0, n.BX)(o.Kqy, {
                  direction: 'column',
                  gap: 'xs',
                  width: '100%',
                  children: [
                    (0, n.tZ)(o.OdW, { height: '24px', width: '127px', borderRadius: '20px' }),
                    (0, n.tZ)(o.OdW, {
                      height: '24px',
                      width: { base: '127px', xs: '100%' },
                      borderRadius: '20px',
                    }),
                  ],
                })
              : (0, n.tZ)(o.OdW, { height: '24px', width: '127px', borderRadius: '20px' }),
          }),
          children: (0, n.BX)(o.Kqy, {
            gap: 'xs',
            direction: 'column',
            children: [
              (0, n.tZ)(o.OdW, { height: e, width: '100%', borderRadius: '20px' }),
              (0, n.tZ)(l.F, {}),
            ],
          }),
        });
      });
    },
    3849: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(60846),
        l = r(93665);
      e.default = (0, i.memo)(() =>
        (0, n.BX)(o.default, {
          children: [
            (0, n.tZ)(l.default, { title: 'Distribution', tableHeight: '337px' }),
            (0, n.tZ)(l.default, { title: 'Transactions', tableHeight: '337px' }),
          ],
        })
      );
    },
    60647: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(60846),
        l = r(73673),
        a = r(391);
      e.default = (0, i.memo)(() =>
        (0, n.BX)(o.default, {
          children: [
            (0, n.tZ)(a.default, { title: 'User Distribution', tableHeight: '337px' }),
            (0, n.tZ)(l.default, { title: 'All Transactions' }),
          ],
        })
      );
    },
    93665: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(51712),
        a = r(6893);
      e.default = (0, i.memo)((t) => {
        let { title: e, tableHeight: r = '378px' } = t;
        return (0, n.BX)(o.Kqy, {
          gap: 's',
          direction: 'column',
          children: [(0, n.tZ)(a.$, { children: e }), (0, n.tZ)(l.Z, { minHeight: r })],
        });
      });
    },
    391: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(6893);
      e.default = (0, i.memo)((t) => {
        let { title: e, tableHeight: r = '338px' } = t;
        return (0, n.BX)(o.Kqy, {
          gap: 's',
          direction: 'column',
          children: [
            (0, n.tZ)(l.$, { children: e }),
            (0, n.BX)(o.Kqy, {
              gap: 'xs',
              direction: 'column',
              children: [
                (0, n.tZ)(o.OdW, { height: r, width: '100%', borderRadius: '20px' }),
                (0, n.tZ)(o.F3O, {}),
              ],
            }),
          ],
        });
      });
    },
    92275: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(51712);
      e.default = (0, i.memo)(() => (0, n.tZ)(o.Z, { minHeight: '338px' }));
    },
    73635: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655);
      let l = () =>
        (0, n.BX)(o.Kqy, {
          gap: 's',
          direction: 'column',
          flex: 1,
          children: [
            (0, n.tZ)(o.OdW, { height: '21px', width: '180px' }),
            (0, n.tZ)(o.OdW, { height: '46px', width: '160px' }),
          ],
        });
      e.default = (0, i.memo)(() => {
        let t = (0, o.dD4)();
        return (0, n.BX)(o.Kqy, {
          gap: 48,
          direction: 'column',
          style: { width: '100%' },
          children: [
            (0, n.BX)(o.Kqy, {
              direction: 'column',
              gap: 's',
              children: [
                (0, n.tZ)(o.OdW, { height: '66px', width: '65%' }),
                (0, n.tZ)(o.OdW, { height: '27px', width: '170px' }),
              ],
            }),
            (0, n.tZ)(o.OdW, { height: '20px', width: '100%' }),
            (0, n.BX)(o.Kqy, {
              direction: t ? 'column' : 'row',
              justify: 'start',
              wrap: 'wrap',
              gap: 'm',
              children: [
                (0, n.BX)(o.Kqy, {
                  gap: 's',
                  direction: 'column',
                  flex: 1,
                  children: [
                    (0, n.tZ)(o.OdW, { height: '21px', width: '180px' }),
                    (0, n.tZ)(o.OdW, { height: '46px', width: '160px' }),
                    (0, n.tZ)(o.OdW, { height: '21px', width: '80px' }),
                  ],
                }),
                (0, n.BX)(o.Kqy, {
                  gap: 's',
                  direction: 'column',
                  flex: 1,
                  children: [
                    (0, n.tZ)(o.OdW, { height: '21px', width: '180px' }),
                    (0, n.tZ)(o.OdW, { height: '46px', width: '160px' }),
                    (0, n.tZ)(o.OdW, { height: '21px', width: '80px' }),
                  ],
                }),
                (0, n.tZ)(l, {}),
                (0, n.tZ)(l, {}),
              ],
            }),
          ],
        });
      });
    },
    40405: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(51712);
      e.default = (0, i.memo)((t) => {
        let {} = t,
          e = (0, o.CPt)();
        return (0, n.BX)(n.HY, {
          children: [
            (0, n.tZ)(l.Z, { minHeight: '395px' }),
            e && (0, n.tZ)(o.SKT, { height: '165px', text: 'An error has been encountered' }),
          ],
        });
      });
    },
    50544: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655);
      e.default = (0, i.memo)((t) => {
        let {} = t,
          e = (0, o.CPt)();
        return (0, n.BX)(n.HY, {
          children: [
            (0, n.tZ)(o.OdW, { height: '395px', width: '100%', borderRadius: '20px' }),
            e && (0, n.tZ)(o.OdW, { height: '165px', width: '100%', borderRadius: '20px' }),
          ],
        });
      });
    },
    35038: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(51712);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(o.Z, { minHeight: '395px' });
      });
    },
    13180: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(o.OdW, { height: '395px', width: '100%', borderRadius: '20px' });
      });
    },
    18530: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(51712);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(o.Z, { minHeight: '320px' });
      });
    },
    87982: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(62132);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.BX)(o.Kqy, {
          gap: 'xs',
          direction: 'column',
          children: [
            (0, n.tZ)(o.OdW, { height: '320px', width: '100%', borderRadius: '20px' }),
            (0, n.tZ)(l.F, {}),
          ],
        });
      });
    },
    39177: function (t, e, r) {
      r.d(e, {
        default: function () {
          return k;
        },
      });
      var n,
        i,
        o = r(78286),
        l = r(58258),
        a = r(54655),
        d = r(83638),
        u = r(99095),
        c = r(26726),
        h = r(90835),
        s = r(28393),
        p = r(38819);
      let f = (0, p.Z)('div', { target: 'ey5v3rc0' })(
        'display:flex;flex-direction:column;width:100%;gap:64px;'
      );
      var g = r(90092),
        m = r(89991),
        Z = r(6423),
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
      var b = r(20624);
      let B = b.WW.filter((t) => 'yourPosition' !== t.value);
      function K(t) {
        let {
            heroSlot: e,
            simpleActionPanelSlot: r,
            yourPositionSlots: n,
            overviewSlots: i,
            performanceSlots: d,
            riskSlots: c,
            activitySlots: h,
          } = t,
          {
            account: { isConnected: s },
          } = (0, m.Z_)(),
          [p, K] = (0, g.v1)('tab', (0, g.jx)(Object.values(Z.B6))),
          {
            activeSubTab: q,
            setActiveSubTab: X,
            subTabSlot: k,
            mobileScrollAnchor: W,
          } = (0, b.ZP)({ overviewSlots: i, performanceSlots: d, riskSlots: c, activitySlots: h }),
          { bannersToShow: R } = (0, u.l5)(),
          O = (0, l.useMemo)(
            () => (null == R ? void 0 : R.length) * 68,
            [null == R ? void 0 : R.length]
          );
        return (
          (0, l.useEffect)(() => {
            if (!p) {
              K(Z.B6.Vault);
              return;
            }
            s || p !== Z.B6.MyPosition || K(Z.B6.Vault);
          }, [s, p, K]),
          (0, o.tZ)(w, {
            children: (0, o.BX)(a.mQc.Root, {
              orientation: 'horizontal',
              value: null != p ? p : void 0,
              onValueChange: (t) => K(t),
              children: [
                (0, o.tZ)(y, {
                  children: (0, o.BX)(a.mQc.List, {
                    'aria-label': 'Navigation',
                    children: [
                      (0, o.tZ)(a.mQc.Trigger, { value: Z.B6.Vault, children: 'Vault' }),
                      s &&
                        (0, o.tZ)(a.mQc.Trigger, {
                          value: Z.B6.MyPosition,
                          children: 'My Position',
                        }),
                      (0, o.tZ)(a.mQc.Trigger, {
                        value: Z.B6.ManagePosition,
                        children: s ? 'Manage position' : 'Open position',
                      }),
                    ],
                  }),
                }),
                (0, o.tZ)(v.default, {
                  hasLargerVerticalPadding: !0,
                  noBackground: !0,
                  children: (0, o.BX)(f, {
                    children: [
                      (0, o.tZ)(a.mQc.Content, {
                        value: Z.B6.Vault,
                        children: (0, o.BX)(a.Kqy, {
                          marginTop: 60,
                          gap: 'm',
                          direction: 'column',
                          children: [
                            e,
                            (0, o.tZ)(x.Z, {
                              'data-testid': 'vault-tabs',
                              topPosition: O,
                              children: (0, o.tZ)(a.v0h, {
                                id: 'mobile-sub-tabs',
                                options: B,
                                value: q,
                                onChange: X,
                                ref: W,
                              }),
                            }),
                            (0, o.tZ)(a.Kqy, { gap: 'l', direction: 'column', children: k }),
                          ],
                        }),
                      }),
                      s && (0, o.tZ)(a.mQc.Content, { value: Z.B6.MyPosition, children: n }),
                      (0, o.tZ)(a.mQc.Content, { value: Z.B6.ManagePosition, children: r }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
      let q = (0, p.Z)(a.v0h, { target: 'e1r83idk0' })(
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
      var X = (0, l.memo)((t) => {
        let {
            performanceSlots: e,
            riskSlots: r,
            activitySlots: n,
            overviewSlots: i,
            yourPositionSlots: d,
          } = t,
          {
            account: { isConnected: c },
          } = (0, m.Z_)(),
          h = (0, l.useRef)(c),
          {
            activeSubTab: s,
            setActiveSubTab: p,
            subTabSlot: f,
          } = (0, b.ZP)({
            yourPositionSlots: d,
            overviewSlots: i,
            performanceSlots: e,
            riskSlots: r,
            activitySlots: n,
          }),
          { bannersToShow: g } = (0, u.l5)(),
          Z = (0, l.useMemo)(
            () => (null == g ? void 0 : g.length) * 54,
            [null == g ? void 0 : g.length]
          ),
          v = (0, l.useMemo)(
            () => (c ? b.WW : b.WW.filter((t) => 'yourPosition' !== t.value)),
            [c]
          );
        return (
          (0, l.useEffect)(() => {
            let t = h.current;
            !c && t && 'yourPosition' === s && p('overview'), (h.current = c);
          }, [c, p, s]),
          (0, o.BX)(a.Kqy, {
            gap: 'm',
            direction: 'column',
            width: '100%',
            children: [
              (0, o.tZ)(x.Z, {
                'data-testid': 'vault-tabs',
                topPosition: Z,
                children: (0, o.tZ)(q, {
                  id: 'overview-segment',
                  options: v,
                  value: s,
                  onChange: p,
                  hasActiveBorder: !0,
                }),
              }),
              (0, o.tZ)(a.Kqy, { gap: 'l', direction: 'column', width: '100%', children: f }),
            ],
          })
        );
      });
      ((n = i || (i = {})).Market = 'market'),
        (n.MyPosition = 'myposition'),
        (n.ManagePosition = 'manageposition');
      var k = (0, l.memo)((t) => {
        var e;
        let {
            simpleActionPanelSlot: r,
            heroSlot: n,
            performanceSlots: i,
            riskSlots: l,
            activitySlots: p,
            overviewSlots: g,
            yourPositionSlots: m,
          } = t,
          { bannersToShow: Z } = (0, u.l5)(),
          x = (0, a.ajf)('s'),
          v = (0, c.nh)(c.TP.MOBILE_VAULT_TABS);
        return x && v
          ? (0, o.tZ)(K, {
              simpleActionPanelSlot: r,
              heroSlot: n,
              yourPositionSlots: m,
              overviewSlots: g,
              performanceSlots: i,
              riskSlots: l,
              activitySlots: p,
            })
          : (0, o.BX)(o.HY, {
              children: [
                (0, o.tZ)(h.A, {
                  hasLargerVerticalPadding: !0,
                  noBackground: !0,
                  children: (0, o.BX)(f, {
                    children: [
                      n,
                      (0, o.tZ)(X, {
                        yourPositionSlots: m,
                        overviewSlots: g,
                        performanceSlots: i,
                        riskSlots: l,
                        activitySlots: p,
                      }),
                    ],
                  }),
                }),
                (0, o.tZ)(s.ef, {
                  top: (null !== (e = null == Z ? void 0 : Z.length) && void 0 !== e ? e : 1) * d.w,
                  children: r,
                }),
              ],
            });
      });
    },
    57864: function (t, e, r) {
      r.d(e, {
        default: function () {
          return s;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(40252),
        l = r(54655),
        a = r(89991),
        d = r(35047),
        u = r(12597);
      let c = (0, r(38819).Z)(l.Kqy, { target: 'ecjqmen0' })('flex-grow:1;min-width:250px;');
      var h = (0, i.memo)((t) => {
          let { title: e, value: r } = t,
            o = (0, i.useMemo)(
              () => d.format.percent.default('-').trailingZero(!1).digits(2).of(r),
              [r]
            );
          return (0, n.tZ)(c, {
            children: (0, n.BX)(u.xr, {
              height: '143px',
              variant: 'full',
              children: [
                (0, n.tZ)(l.xvT.Body.XS.Regular, { color: 'text.secondary', children: e }),
                (0, n.BX)(l.Kqy, {
                  children: [
                    (0, n.tZ)(l.xvT.Title.S, { color: 'text.primary', children: o }),
                    (0, n.tZ)(l.xvT.Title.S, { color: 'text.secondary', children: '%' }),
                  ],
                }),
              ],
            }),
          });
        }),
        s = (0, i.memo)((t) => {
          let { apy7d: e, apy30d: r, apy90d: i } = t,
            { targetChainId: d } = (0, a.Z_)();
          return (0, n.tZ)(l.Kqy, {
            gap: 'm',
            direction: 'column',
            align: 'start',
            children: (0, n.BX)(l.Kqy, {
              gap: 's',
              wrap: 'wrap',
              style: { width: '100%' },
              children: [
                (0, n.tZ)(h, { title: '7D APY', value: e }),
                (0, n.tZ)(h, { title: '30D APY', value: r }),
                d !== o.ChainId.PolygonMainnet && (0, n.tZ)(h, { title: '90D APY', value: i }),
              ],
            }),
          });
        });
    },
    83747: function (t, e, r) {
      r.d(e, {
        jX: function () {
          return n.default;
        },
        S5: function () {
          return i.default;
        },
      }),
        r(57864);
      var n = r(47205),
        i = r(78707);
    },
    47205: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(40252),
        l = r(54655),
        a = r(89991),
        d = r(3965);
      let u = () =>
        (0, n.tZ)(d.h, {
          children: (0, n.tZ)(l.SKT, { height: '143px', text: 'An error occurred' }),
        });
      e.default = (0, i.memo)((t) => {
        let {} = t,
          { targetChainId: e } = (0, a.Z_)();
        return (0, n.BX)(l.Kqy, {
          gap: 's',
          wrap: 'wrap',
          style: { width: '100%' },
          children: [
            (0, n.tZ)(u, {}),
            (0, n.tZ)(u, {}),
            e !== o.ChainId.PolygonMainnet && (0, n.tZ)(u, {}),
          ],
        });
      });
    },
    78707: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(40252),
        l = r(54655),
        a = r(89991),
        d = r(3965);
      let u = () =>
        (0, n.tZ)(d.h, {
          children: (0, n.tZ)(l.OdW, { height: '143px', width: '100%', borderRadius: '20px' }),
        });
      e.default = (0, i.memo)((t) => {
        let {} = t,
          { targetChainId: e } = (0, a.Z_)();
        return (0, n.BX)(l.Kqy, {
          gap: 's',
          wrap: 'wrap',
          style: { width: '100%' },
          children: [
            (0, n.tZ)(u, {}),
            (0, n.tZ)(u, {}),
            e !== o.ChainId.PolygonMainnet && (0, n.tZ)(u, {}),
          ],
        });
      });
    },
    3965: function (t, e, r) {
      r.d(e, {
        h: function () {
          return o;
        },
      });
      var n = r(38819),
        i = r(54655);
      let o = (0, n.Z)(i.Kqy, { target: 'e1kd0mye0' })('flex:1;min-width:250px;');
    },
    68283: function (t, e, r) {
      r.d(e, {
        default: function () {
          return u;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(35047),
        a = r(12597);
      let d = (0, r(38819).Z)(o.Kqy, { target: 'epvujuh0' })(
        'flex:1;height:120px;',
        (t) => {
          let { theme: e } = t;
          return e.breakpoints.down('xs');
        },
        '{height:116px;}'
      );
      var u = (0, i.memo)((t) => {
        let { performanceFee: e, feeRecipient: r } = t;
        return (0, n.BX)(o.Kqy, {
          gap: 's',
          wrap: 'wrap',
          children: [
            (0, n.tZ)(d, {
              children: (0, n.BX)(a.xr, {
                height: '100%',
                children: [
                  (0, n.tZ)(o.xvT.Body.XS.Regular, {
                    color: 'text.secondary',
                    children: 'Performance Fee',
                  }),
                  (0, n.tZ)(o.xvT.Body.M.Regular, {
                    children: l.format.percent.digits(2).unit('%').default('0').of(e),
                  }),
                ],
              }),
            }),
            r &&
              (0, n.tZ)(d, {
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
    },
    69653: function (t, e, r) {
      r.d(e, {
        HB: function () {
          return n.default;
        },
        ih: function () {
          return i.default;
        },
      }),
        r(68283);
      var n = r(15408),
        i = r(28971);
    },
    15408: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(40308);
      let a = () =>
        (0, n.tZ)(l.x, {
          children: (0, n.tZ)(o.SKT, { height: '100%', text: 'An error occurred' }),
        });
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.BX)(o.Kqy, {
          gap: 's',
          wrap: 'wrap',
          children: [(0, n.tZ)(a, {}), (0, n.tZ)(a, {})],
        });
      });
    },
    28971: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(40308);
      let a = () =>
        (0, n.tZ)(l.x, {
          children: (0, n.tZ)(o.OdW, { height: '100%', width: '100%', borderRadius: '20px' }),
        });
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.BX)(o.Kqy, {
          gap: 's',
          wrap: 'wrap',
          children: [(0, n.tZ)(a, {}), (0, n.tZ)(a, {})],
        });
      });
    },
    40308: function (t, e, r) {
      r.d(e, {
        x: function () {
          return o;
        },
      });
      var n = r(38819),
        i = r(54655);
      let o = (0, n.Z)(i.Kqy, { target: 'e1chjq1m0' })('flex:1;min-width:250px;height:120px;');
    },
    15176: function (t, e, r) {
      var n = r(78286),
        i = r(58258);
      let o = (0, r(38819).Z)('div', { target: 'e10sa5870' })(
        'display:flex;flex-direction:column;gap:12px;width:100%;'
      );
      e.default = (0, i.memo)((t) => {
        let { children: e } = t;
        return (0, n.tZ)(o, { children: e });
      });
    },
    89690: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(6893),
        a = r(42662);
      let d = () =>
        (0, n.tZ)(a.a, {
          children: (0, n.tZ)(o.SKT, { height: '120px', text: 'An error occurred.' }),
        });
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(o.Kqy, {
          gap: 's',
          direction: 'column',
          children: (0, n.BX)(o.Kqy, {
            gap: 's',
            direction: 'column',
            children: [
              (0, n.tZ)(l.$, { children: 'Risk Curation' }),
              (0, n.BX)(o.Kqy, {
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
        o = r(54655),
        l = r(6893),
        a = r(42662);
      let d = () =>
        (0, n.tZ)(a.a, {
          children: (0, n.tZ)(o.OdW, { height: '120px', width: '100%', borderRadius: '20px' }),
        });
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(o.Kqy, {
          gap: 's',
          direction: 'column',
          children: (0, n.BX)(o.Kqy, {
            gap: 's',
            direction: 'column',
            children: [
              (0, n.tZ)(l.$, { children: 'Risk Curation' }),
              (0, n.BX)(o.Kqy, {
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
          return o;
        },
      });
      var n = r(38819),
        i = r(54655);
      let o = (0, n.Z)(i.Kqy, { target: 'e1jihsp60' })('flex:1;min-width:215px;');
    },
    45751: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(51712);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(o.Z, { minHeight: '334px' });
      });
    },
    39306: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(o.OdW, { height: '334px', width: '100%', borderRadius: '20px' });
      });
    },
    3167: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(51712);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.tZ)(o.Z, { minHeight: '378px' });
      });
    },
    89778: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655);
      e.default = (0, i.memo)((t) => {
        let {} = t;
        return (0, n.BX)(o.Kqy, {
          direction: 'column',
          gap: 'xs',
          children: [
            (0, n.tZ)(o.OdW, { height: '338px', width: '100%', borderRadius: '20px' }),
            (0, n.tZ)(o.F3O, {}),
          ],
        });
      });
    },
    52754: function (t, e, r) {
      r.d(e, {
        VaultRiskCurationLayout: function () {
          return l;
        },
      });
      var n = r(78286),
        i = r(58258);
      let o = (0, r(38819).Z)('div', { target: 'ecprb5z0' })(
          'display:flex;flex-direction:column;gap:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.s;
          },
          ';width:100%;'
        ),
        l = (0, i.memo)((t) => {
          let { children: e } = t;
          return (0, n.tZ)(o, { children: e });
        });
    },
    72561: function (t, e, r) {
      r.d(e, {
        P$: function () {
          return l;
        },
        T5: function () {
          return i;
        },
        ac: function () {
          return o;
        },
      });
      var n = r(38819);
      let i = (0, n.Z)('div', { target: 'ekvf0iq0' })(
          'width:100%;display:grid;grid-template-columns:repeat(3,1fr);gap:',
          (t) => {
            let { theme: e } = t;
            return e.spacing.s;
          },
          ';> *{grid-column:auto / span 1;}> *:last-child:nth-of-type(3n-1):nth-last-of-type(1),> *:last-child:nth-of-type(3n-2):nth-last-of-type(1){grid-column:1 / -1;}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('l');
          },
          '{grid-template-columns:repeat(2,1fr);> *:last-child:nth-of-type(2n-1):nth-last-of-type(1){grid-column:1 / -1;}}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('m');
          },
          '{grid-template-columns:1fr;}'
        ),
        o = (0, n.Z)('div', { target: 'ekvf0iq1' })(
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
        l = (0, n.Z)('div', { target: 'ekvf0iq2' })(
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
        o = r(54655),
        l = r(51712),
        a = r(72561);
      let d = () =>
        (0, n.tZ)(o.SKT, { width: '100%', height: '120px', text: 'An error occurred.' });
      e.default = (0, i.memo)(() =>
        (0, n.BX)(o.Kqy, {
          gap: 's',
          direction: 'column',
          align: 'start',
          fullWidth: !0,
          children: [
            (0, n.tZ)(o.xvT.Body.XS.Regular, {
              color: 'text.secondary',
              children: 'Risk Disclosures',
            }),
            (0, n.BX)(a.T5, {
              children: [
                (0, n.tZ)(d, {}),
                (0, n.tZ)(d, {}),
                (0, n.tZ)(d, {}),
                (0, n.tZ)(d, {}),
                (0, n.tZ)(d, {}),
                (0, n.tZ)(d, {}),
              ],
            }),
            (0, n.tZ)(l.Z, {}),
          ],
        })
      );
    },
    91747: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(72561);
      let a = () =>
        (0, n.tZ)(o.Kqy, {
          children: (0, n.tZ)(o.OdW, { height: '120px', width: '100%', borderRadius: '20px' }),
        });
      e.default = (0, i.memo)(() =>
        (0, n.BX)(o.Kqy, {
          gap: 's',
          direction: 'column',
          align: 'start',
          fullWidth: !0,
          children: [
            (0, n.tZ)(o.xvT.Body.XS.Regular, {
              color: 'text.secondary',
              children: 'Risk Disclosures',
            }),
            (0, n.BX)(l.T5, {
              children: [
                (0, n.tZ)(a, {}),
                (0, n.tZ)(a, {}),
                (0, n.tZ)(a, {}),
                (0, n.tZ)(a, {}),
                (0, n.tZ)(a, {}),
                (0, n.tZ)(a, {}),
                (0, n.tZ)(a, {}),
              ],
            }),
            (0, n.tZ)(o.OdW, { height: '250px', width: '100%', borderRadius: '20px' }),
          ],
        })
      );
    },
    77051: function (t, e, r) {
      r.d(e, {
        VaultRiskDisclosuresLayout: function () {
          return l;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655);
      let l = (0, i.memo)((t) => {
        let { children: e } = t;
        return (0, n.tZ)(o.Kqy, { gap: 'm', direction: 'column', fullWidth: !0, children: e });
      });
    },
    94108: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(51712);
      e.default = (0, i.memo)(() =>
        (0, n.tZ)('div', { children: (0, n.tZ)(o.c, { minHeight: '600px' }) })
      );
    },
    57261: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655);
      e.default = (0, i.memo)(() =>
        (0, n.BX)(o.Kqy, {
          direction: 'column',
          gap: 's',
          basis: '100%',
          grow: 1,
          children: [
            (0, n.tZ)(o.OdW, { height: 135, width: '100%', borderRadius: '20px' }),
            (0, n.tZ)(o.OdW, { height: 358, width: '100%', borderRadius: '20px' }),
            (0, n.tZ)(o.OdW, { height: 48, width: '100%', borderRadius: '50px' }),
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
        o = r(54655),
        l = r(12597),
        a = r(19469),
        d = r(92093);
      e.default = (0, i.memo)((t) => {
        var e;
        let { queryResult: r } = t,
          u =
            null == r ? void 0 : null === (e = r.data) || void 0 === e ? void 0 : e.vaultByAddress,
          c = (0, i.useMemo)(() => {
            var t;
            let e = (
              null !== (t = null == u ? void 0 : u.warnings) && void 0 !== t ? t : []
            ).filter((t) => {
              let e = (0, o._KI)(t),
                r = (0, o.uQK)(t);
              return !!e && !!r;
            });
            return (0, o.A3V)(e);
          }, [null == u ? void 0 : u.warnings]);
        return c.length
          ? (0, n.tZ)(d.default, {
              warningsSlot: (0, n.tZ)(a.c, {
                children: c.map((t) =>
                  (0, n.tZ)(
                    l.IM,
                    {
                      title: (0, o._KI)(t),
                      description: (0, o.uQK)(t),
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
          return u;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(50825),
        a = r(6893),
        d = (0, i.memo)(() =>
          (0, n.BX)(o.Kqy, {
            direction: 'row',
            justify: 'space-between',
            align: 'center',
            children: [
              (0, n.tZ)(a.$, { children: 'Warnings' }),
              (0, n.tZ)(o.Kqy, {
                direction: 'row',
                justify: 'space-between',
                children: (0, n.tZ)(l.Z, {
                  href: 'https://docs.morpho.org/interface/warnings/#what-are-the-warnings-on-the-morpho-interface',
                  mode: 'external',
                  buttonProps: { variant: 'secondary', size: 'small', label: 'Learn more' },
                }),
              }),
            ],
          })
        ),
        u = (0, i.memo)((t) => {
          let { warningsSlot: e } = t;
          return (0, n.BX)(o.Kqy, {
            direction: 'column',
            gap: 's',
            children: [(0, n.tZ)(d, {}), e],
          });
        });
    },
    61512: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(92093);
      e.default = (0, i.memo)(() =>
        (0, n.tZ)(l.default, {
          warningsSlot: (0, n.tZ)(o.SKT, {
            text: 'Something went wrong while loading the warnings for this vault.',
            height: '121px',
          }),
        })
      );
    },
    20147: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = r(19469),
        a = r(92093);
      e.default = (0, i.memo)(() =>
        (0, n.tZ)(a.default, {
          warningsSlot: (0, n.tZ)(l.c, {
            children: Array.from({ length: 2 }).map((t, e) =>
              (0, n.tZ)(o.OdW, { height: '121px', width: '100%', borderRadius: '8px' }, e)
            ),
          }),
        })
      );
    },
    75794: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(51712);
      e.default = (0, i.memo)(() => (0, n.tZ)(o.c, { minHeight: '395px' }));
    },
    39228: function (t, e, r) {
      var n = r(78286),
        i = r(58258),
        o = r(54655);
      e.default = (0, i.memo)(() =>
        (0, n.tZ)(o.OdW, { height: '395px', width: '100%', borderRadius: '20px' })
      );
    },
    20624: function (t, e, r) {
      r.d(e, {
        WW: function () {
          return l;
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
        o = r(54655);
      let l = [
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
            riskSlots: l,
            activitySlots: d,
          } = t,
          u = (0, n.useRef)(null),
          c = (0, o.dD4)(),
          [h, s] = a(),
          p = (0, n.useCallback)(
            (t) => {
              s(t), !c && window.scrollY > 600 && window.scrollTo({ top: 480, behavior: 'smooth' });
            },
            [s, c]
          ),
          f = (0, n.useMemo)(() => {
            var t;
            return null !==
              (t = { yourPosition: r, overview: e, performance: i, risk: l, activity: d }[h]) &&
              void 0 !== t
              ? t
              : e;
          }, [h, d, e, i, l, r]);
        return { activeSubTab: h, setActiveSubTab: p, subTabSlot: f, mobileScrollAnchor: u };
      }
    },
    6893: function (t, e, r) {
      r.d(e, {
        $: function () {
          return l;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        l = (0, i.memo)(function (t) {
          let { children: e } = t;
          return (0, n.tZ)(o.xvT.Body.XS.Regular, { color: 'text.secondary', children: e });
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
        o = r(23567),
        l = r(38819),
        a = r(54655);
      let d = (0, l.Z)('div', { target: 'e1yywf3a0' })(
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
        u = (0, o.iv)(
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
        c = (0, l.Z)(a.Kqy, { target: 'e1yywf3a1' })(
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
          u,
          '}',
          (t) => {
            let { theme: e } = t;
            return e.breakpoints.down('s');
          },
          '{',
          u,
          '}'
        );
      var h = (0, i.memo)(function (t) {
        let { topPosition: e, children: r, ...i } = t;
        return (0, n.tZ)(d, { topPosition: e, ...i, children: (0, n.tZ)(c, { children: r }) });
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
