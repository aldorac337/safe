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
    (e._sentryDebugIds[t] = 'd091e429-82b9-4072-b00f-8e7d3f5033b6'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-d091e429-82b9-4072-b00f-8e7d3f5033b6'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9510],
  {
    86536: function (e, t, n) {
      n.d(t, {
        x: function () {
          return c;
        },
      });
      var r = n(78286),
        i = n(58258),
        o = n(38819),
        a = n(54655);
      let d = (e, t) =>
          ({
            compact: e.padding.s,
            default: ''.concat(e.padding.m, ' ').concat(e.padding.s),
            full: ''.concat(e.padding.m),
          })[t || 'default'],
        l = (0, o.Z)(a.Zbd, { target: 'e13dmi8u0' })(
          'flex:1;padding:',
          (e) => {
            let { theme: t, variant: n } = e;
            return d(t, n);
          },
          ';min-width:',
          (e) => {
            let { minWidth: t } = e;
            return t;
          },
          ';max-height:',
          (e) => {
            let { maxHeight: t } = e;
            return t;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('m');
          },
          '{padding:',
          (e) => {
            let { theme: t } = e;
            return ''.concat(t.padding.m, ' ').concat(t.padding.s);
          },
          ';}'
        );
      var c = (0, i.memo)((e) => {
        let {
          children: t,
          height: n = '120px',
          maxHeight: i,
          minWidth: o = '250px',
          width: a,
          variant: d,
          ...c
        } = e;
        return (0, r.tZ)(l, {
          direction: 'column',
          justify: 'space-between',
          height: n,
          maxHeight: i,
          width: a,
          minWidth: o,
          variant: d,
          ...c,
          children: t,
        });
      });
    },
    65849: function (e, t, n) {
      n.d(t, {
        f: function () {
          return d;
        },
      });
      var r = n(78286),
        i = n(58258),
        o = n(79070),
        a = n(5314),
        d = (0, i.memo)((e) => {
          let { children: t, isExpanded: n, isSmall: i } = e,
            { width: d } = (0, a.v)(i, n);
          return (0, r.tZ)(
            o.E.div,
            {
              animate: { width: d, height: '100%', z: 0 },
              initial: !1,
              transition: { duration: 0.2, height: { duration: 0.6 } },
              style: { width: d, height: '100%', flexShrink: 0 },
              children: t,
            },
            'card-net-apy-wrapper'
          );
        });
    },
    5314: function (e, t, n) {
      n.d(t, {
        v: function () {
          return o;
        },
      });
      let r = { small: 'background.bloc', large: 'background.tertiary' },
        i = {
          small: {
            height: { expanded: '100%', collapsed: '100%' },
            width: { expanded: '100%', collapsed: '100%' },
          },
          large: {
            height: { expanded: 'auto', collapsed: '91px' },
            width: { expanded: '342px', collapsed: '250px' },
          },
        },
        o = (e, t) => {
          let n = e ? 'small' : 'large',
            o = t ? 'expanded' : 'collapsed';
          return { height: i[n].height[o], width: i[n].width[o], background: r[n] };
        };
    },
    28920: function (e, t, n) {
      n.d(t, {
        H0: function () {
          return h;
        },
        JR: function () {
          return m;
        },
        Q$: function () {
          return Z;
        },
        QC: function () {
          return w;
        },
        V$: function () {
          return b;
        },
        dg: function () {
          return y;
        },
        n7: function () {
          return x;
        },
        on: function () {
          return g;
        },
        sl: function () {
          return f;
        },
        xN: function () {
          return p;
        },
      });
      var r = n(55412),
        i = n(38819),
        o = n(27878),
        a = n(54655);
      function d() {
        let e = (0, r._)([
          '\n  cursor: pointer;\n  &:hover {\n    background-color: ',
          ';\n  }\n  transition: background-color 0.2s ease;\n  ',
          '\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        let e = (0, r._)([
          '\n  justify-content: space-between;\n  align-items: center;\n  padding: ',
          ';\n\n  ',
          ' {\n    padding-top: ',
          ';\n    padding-inline: ',
          ';\n  }\n\n  ',
          ' {\n    padding-top: ',
          ';\n    padding-inline: ',
          ';\n  }\n',
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        let e = (0, r._)(['\n  align-items: center;\n  width: 100%;\n  padding: ', ' 0;\n']);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        let e = (0, r._)([
          '\n  flex-direction: column;\n  max-height: ',
          ';\n  overflow: hidden;\n  opacity: ',
          ';\n  transition:\n    max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    opacity 0.2s ease-in-out;\n',
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      let u = (0, i.Z)(a.Kqy, { shouldForwardProp: (e) => 'isExpanded' !== e }),
        g = u(
          d(),
          (e) => {
            let { theme: t } = e;
            return t.colors.background.secondary;
          },
          (e) => {
            let { isExpanded: t, theme: n } = e;
            return (
              t &&
              '\n    &:hover {\n      background-color: '.concat(
                n.colors.background.secondary,
                ';\n    }\n  '
              )
            );
          }
        ),
        p = u(
          l(),
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          (e) => {
            let { theme: t } = e;
            return t.padding.m;
          },
          (e) => {
            let { theme: t } = e;
            return t.padding.m;
          },
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('xs');
          },
          (e) => {
            let { theme: t } = e;
            return t.padding.m;
          },
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          }
        ),
        h = u(c(), (e) => {
          let { theme: t } = e;
          return t.spacing.xs;
        }),
        x = u(
          s(),
          (e) => (e.isExpanded ? '1000px' : '0'),
          (e) => (e.isExpanded ? 1 : 0)
        ),
        m = (0, i.Z)('div', { target: 'enrqusl0' })(
          'display:flex;justify-content:space-between;padding:0 ',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';align-items:center;height:40px;'
        ),
        f = (0, i.Z)('div', { target: 'enrqusl2' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.tertiary;
          },
          ';border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';overflow:hidden;text-align:center;width:100%;height:100%;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';}'
        ),
        y = (0, i.Z)(a.Kqy, { target: 'enrqusl3' })(
          'flex-direction:column;padding-bottom:0;height:100%;'
        ),
        b = (0, i.Z)(o.l_, { target: 'enrqusl4' })(
          'max-height:340px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{height:auto;padding-bottom:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.m;
          },
          ';}'
        ),
        Z = (0, i.Z)(a.xvT.Body.XXS.Regular, { target: 'enrqusl5' })(
          'padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';display:flex;align-items:center;justify-content:center;height:340px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{height:auto;padding-bottom:',
          (e) => {
            let { theme: t } = e;
            return t.padding.m;
          },
          ';padding-inline:',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';}'
        ),
        w = (0, i.Z)(a.JO$, { shouldForwardProp: (e) => 'isExpanded' !== e, target: 'enrqusl6' })(
          'transform:',
          (e) => {
            let { isExpanded: t } = e;
            return t ? 'rotate(180deg)' : 'rotate(0deg)';
          },
          ';transition:transform 0.2s ease;'
        );
    },
    10190: function (e, t, n) {
      n.d(t, {
        UT: function () {
          return m.UT;
        },
        o: function () {
          return m.o;
        },
        bj: function () {
          return f;
        },
      });
      var r = n(78286),
        i = n(58258),
        o = n(27878),
        a = n(54655),
        d = n(89991),
        l = n(28920);
      let c = a.$0l.percent.trailingZero(!1).digits(2).unit('%'),
        s = a.$0l.short.trailingZero(!1).digits(2).unit('$');
      var u = (0, i.memo)((e) => {
          let {
              name: t,
              logoURIs: n,
              weight: i,
              allocation: o,
              apr: d,
              index: u,
              percentageOffset: g,
              symbol: p,
              hideAllocation: h,
              tooltipContent: x,
              isSimulated: m,
              isNew: f,
            } = e,
            y = n && n.length > 1;
          return (0, r.BX)(
            l.JR,
            {
              children: [
                (0, r.BX)(a.Kqy, {
                  gap: 4,
                  align: 'center',
                  children: [
                    y
                      ? (0, r.tZ)(a._nw, {
                          leftAvatarProps: { src: n[1] },
                          rightAvatarProps: { src: n[0] },
                          size: 'small',
                        })
                      : (null == n ? void 0 : n.length) === 1
                        ? (0, r.tZ)(a.qEK, { src: n[0], size: 'small' })
                        : null,
                    (0, r.tZ)(a.ZT$, {
                      isSimulated: f,
                      TextVariant: a.xvT.Body.XXXS.Regular,
                      color: 'text.secondary',
                      shorten: 1,
                      children: t,
                    }),
                  ],
                }),
                (0, r.tZ)(a.ua7, {
                  content: null == x ? void 0 : x({ allocation: o, assetsUsd: i, symbol: p }),
                  children: (0, r.BX)(a.Kqy, {
                    gap: 8,
                    align: 'center',
                    justify: h ? 'end' : 'space-between',
                    style: { width: '120px' },
                    children: [
                      !h &&
                        (0, r.tZ)(a.lR8, {
                          TextVariant: a.xvT.Body.XXXS.Regular,
                          hideLabel: !0,
                          index: u,
                          allocation: o,
                          percentageOffset: g,
                        }),
                      (0, r.tZ)(a.ZT$, {
                        TextVariant: a.xvT.Body.XXXS.Regular,
                        isSimulated: m || f,
                        color: 'text.secondary',
                        textAlign: 'right',
                        children: s.of(i, 18),
                      }),
                      (0, r.tZ)(a.ZT$, {
                        TextVariant: a.xvT.Body.XXXS.Regular,
                        color: 'text.secondary',
                        isSimulated: f,
                        textAlign: 'right',
                        children: c.of(d, 18),
                      }),
                    ],
                  }),
                }),
              ],
            },
            t
          );
        }),
        g = (0, i.memo)((e) => {
          let {
              apy: t,
              isExpanded: n,
              apys: o,
              title: d,
              isSimulated: c,
              setIsExpanded: s,
              tooltipContent: g,
            } = e,
            p = (0, i.useCallback)(() => {
              o.length > 0 && s(!n);
            }, [o.length, n, s]);
          return (0, r.tZ)(l.on, {
            isExpanded: n,
            onClick: p,
            children: (0, r.tZ)(l.H0, {
              isExpanded: n,
              children: (0, r.BX)(a.Kqy, {
                direction: 'column',
                style: { width: '100%' },
                children: [
                  (0, r.BX)(a.Kqy, {
                    justify: 'space-between',
                    align: 'center',
                    style: { padding: '0 20px', height: '32px' },
                    children: [
                      (0, r.BX)(a.Kqy, {
                        gap: 4,
                        align: 'center',
                        children: [
                          (0, r.tZ)(a.JO$, { icon: 'InterestGeneratedGradient20', size: 24 }),
                          (0, r.tZ)(a.xvT.Body.XXS.Regular, { children: d }),
                        ],
                      }),
                      (0, r.BX)(a.Kqy, {
                        gap: 4,
                        align: 'center',
                        children: [
                          (0, r.tZ)(a.ZT$, {
                            TextVariant: a.xvT.Body.XXS.Regular,
                            isSimulated: c,
                            children: a.$0l.percent.trailingZero(!1).digits(2).unit('%').of(t, 18),
                          }),
                          (0, r.tZ)(l.QC, {
                            isExpanded: n,
                            icon: 'ChevronPlain20',
                            size: 20,
                            color: 'text.secondary',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.tZ)(l.n7, {
                    isExpanded: n,
                    children: o.map((e, t) =>
                      (0, r.tZ)(
                        u,
                        {
                          isSimulated: e.isSimulated,
                          isNew: e.isNew,
                          index: t,
                          apr: e.apy,
                          tooltipContent: g,
                          logoURIs: e.logoURIs,
                          allocation: e.allocation,
                          percentageOffset: e.percentageOffset,
                          weight: e.weight,
                          name: e.name,
                          hideAllocation: 1 === o.length,
                        },
                        'apy-'.concat(e.name, '-').concat(t)
                      )
                    ),
                  }),
                ],
              }),
            }),
          });
        });
      let p = a.$0l.percent.trailingZero(!1).digits(2).sign().unit('%'),
        h = (e, t) => p.of('vault' === t ? e : -e, 18);
      var x = (0, i.memo)((e) => {
          let {
            variant: t,
            rewardTokens: n,
            expandedRewardSymbol: o,
            setExpandedRewardSymbol: d,
            tooltipContent: c,
          } = e;
          return (0, r.tZ)(i.Fragment, {
            children: n.map((e) =>
              (0, r.tZ)(
                i.Fragment,
                {
                  children: (0, r.tZ)(l.on, {
                    onClick: () =>
                      e.items.length > 0 &&
                      d((t) => (t === e.asset.symbol ? null : e.asset.symbol)),
                    isExpanded: o === e.asset.symbol,
                    children: (0, r.tZ)(l.H0, {
                      children: (0, r.BX)(a.Kqy, {
                        direction: 'column',
                        style: { width: '100%' },
                        children: [
                          (0, r.BX)(a.Kqy, {
                            justify: 'space-between',
                            align: 'center',
                            style: { padding: '0 20px', height: '32px' },
                            children: [
                              (0, r.BX)(a.Kqy, {
                                gap: 4,
                                align: 'center',
                                children: [
                                  (0, r.tZ)(a.qEK, { src: e.asset.logoURI, size: 'medium' }),
                                  (0, r.tZ)(a.xvT.Body.XXS.Regular, { children: e.asset.symbol }),
                                ],
                              }),
                              (0, r.BX)(a.Kqy, {
                                gap: 'xs',
                                align: 'center',
                                children: [
                                  (0, r.tZ)(a.ZT$, {
                                    TextVariant: a.xvT.Body.XXS.Regular,
                                    isSimulated: e.isSimulated,
                                    children: h(e.totalApr, t),
                                  }),
                                  (0, r.tZ)(l.QC, {
                                    isExpanded: o === e.asset.symbol,
                                    icon: 'ChevronPlain20',
                                    size: 20,
                                    color: 'text.secondary',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.tZ)(l.n7, {
                            isExpanded: o === e.asset.symbol,
                            children: e.items.map((t, n) =>
                              (0, r.tZ)(
                                u,
                                {
                                  isSimulated: t.isSimulated,
                                  isNew: t.isNew,
                                  index: n,
                                  tooltipContent: c,
                                  percentageOffset: t.percentageOffset,
                                  allocation: t.allocation,
                                  name: t.name,
                                  apr: t.apr,
                                  weight: t.weight,
                                  logoURIs: t.logoURIs,
                                  symbol: e.asset.symbol,
                                  hideAllocation: 1 === e.items.length,
                                },
                                'reward-'.concat(e.asset.symbol, '-').concat(t.name, '-').concat(n)
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  }),
                },
                e.asset.symbol
              )
            ),
          });
        }),
        m = n(71618),
        f = (0, i.memo)((e) => {
          let {
              aggregatedApy: t,
              apyTitle: n,
              variant: c,
              apyTooltipContent: s,
              rewardTokenTooltipContent: u,
              error: p,
              isFound: h,
              hasNoPositions: f,
            } = e,
            [y, b] = (0, i.useState)(!1),
            [Z, w] = (0, i.useState)(null),
            { targetChain: v } = (0, d.Z_)();
          return f || !t
            ? (0, r.tZ)(m.bX, {
                message: 'You currently have no '
                  .concat('market' === c ? 'Borrow' : 'Earn', ' position on ')
                  .concat(v.name, '.'),
              })
            : p && h
              ? (0, r.tZ)(m.bX, { message: 'Something went wrong.' })
              : (0, r.BX)(o.fC, {
                  children: [
                    (0, r.BX)(l.V$, {
                      children: [
                        (0, r.tZ)(g, {
                          isExpanded: y,
                          isSimulated: t.isSimulated,
                          setIsExpanded: b,
                          apy: t.itemApy,
                          apys: t.itemApys,
                          title: n,
                          tooltipContent: s,
                        }),
                        (0, r.tZ)(a.Z0O, {}),
                        (0, r.tZ)(x, {
                          rewardTokens: t.rewardTokens,
                          expandedRewardSymbol: Z,
                          setExpandedRewardSymbol: w,
                          variant: c,
                          tooltipContent: u,
                        }),
                      ],
                    }),
                    (0, r.tZ)(o.LW, { orientation: 'vertical', children: (0, r.tZ)(o.bU, {}) }),
                    (0, r.tZ)(o.Ns, {}),
                  ],
                });
        });
    },
    71618: function (e, t, n) {
      n.d(t, {
        UT: function () {
          return p;
        },
        o: function () {
          return g;
        },
        bX: function () {
          return a;
        },
      });
      var r = n(78286),
        i = n(58258),
        o = n(28920),
        a = (0, i.memo)((e) => {
          let { message: t } = e;
          return (0, r.tZ)(o.Q$, { color: 'text.secondary', children: t });
        }),
        d = n(78830),
        l = n(79070),
        c = n(54655),
        s = n(65849),
        u = n(5314),
        g = (0, i.memo)((e) => {
          let { isExpanded: t, small: n } = e,
            { background: i } = (0, u.v)(n, t),
            o = (0, c.dD4)();
          return (0, r.tZ)(s.f, {
            isExpanded: t,
            isSmall: n,
            children: (0, r.BX)(c.Kqy, {
              flex: 1,
              direction: 'column',
              fullHeight: !0,
              fullWidth: !0,
              gap: 'm',
              shrink: 0,
              background: i,
              borderRadius: 'default',
              paddingBlock: { base: 's', xs: 'm' },
              paddingInline: { base: 's', xs: 's' },
              children: [
                (0, r.BX)(c.Kqy, {
                  justify: 'space-between',
                  align: 'center',
                  children: [
                    (0, r.BX)(c.Kqy, {
                      direction: 'column',
                      gap: 'xs',
                      children: [
                        (0, r.tZ)(c.OdW, { height: o ? 16 : 20, borderRadius: '20px', width: 55 }),
                        (0, r.tZ)(c.OdW, { height: 24, borderRadius: '20px', width: 55 }),
                      ],
                    }),
                    (0, r.BX)(c.Kqy, {
                      direction: 'row',
                      gap: 'xs',
                      children: [
                        (0, r.tZ)(c.OdW, {
                          height: t ? 26 : 32,
                          width: t ? 82 : 32,
                          borderRadius: '100px',
                        }),
                        (0, r.tZ)(c.OdW, {
                          height: t ? 26 : 32,
                          width: t ? 86 : 32,
                          borderRadius: '100px',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.tZ)(d.M, {
                  mode: 'sync',
                  initial: !1,
                  children:
                    (n || t) &&
                    (0, r.tZ)(
                      l.E.div,
                      {
                        initial: { opacity: 0, height: 0, z: 0 },
                        animate: { opacity: 1, height: '100%', z: 0 },
                        exit: { opacity: 0, height: 0, z: 0 },
                        transition: { duration: 0.2 },
                        children: (0, r.BX)(c.Kqy, {
                          direction: 'column',
                          gap: 's',
                          children: [
                            (0, r.tZ)(c.OdW, { height: 32, borderRadius: '20px' }),
                            (0, r.tZ)(c.OdW, { height: 32, borderRadius: '20px' }),
                            (0, r.tZ)(c.OdW, { height: 32, borderRadius: '20px' }),
                          ],
                        }),
                      },
                      'card-net-apy-loading'
                    ),
                }),
              ],
            }),
          });
        }),
        p = (0, i.memo)((e) => {
          let { message: t, className: n, isSmall: i, isExpanded: a } = e;
          return (0, r.tZ)(s.f, {
            isSmall: i,
            isExpanded: a,
            children: (0, r.tZ)(o.sl, {
              className: n,
              style: { height: '100%' },
              children: (0, r.tZ)(o.dg, {
                style: { height: '100%' },
                children: (0, r.tZ)(c.Kqy, {
                  gap: 'xs',
                  align: 'center',
                  justify: 'center',
                  height: '100%',
                  children: (0, r.tZ)(c.SKT, {
                    text: t,
                    height: 'auto',
                    width: '100%',
                    style: { backgroundColor: 'transparent' },
                  }),
                }),
              }),
            }),
          });
        });
    },
    19686: function (e, t, n) {
      n.d(t, {
        E: function () {
          return s;
        },
      });
      var r = n(78286),
        i = n(12556),
        o = n(54655),
        a = n(50825),
        d = n(86536);
      let l = (0, n(38819).Z)(o.Kqy, { target: 'eaflhai0' })('position:relative;top:2px;'),
        c = {
          'v1.0': 'https://github.com/morpho-org/metamorpho',
          'v1.1': 'https://github.com/morpho-org/metamorpho-v1.1',
        };
      function s(e) {
        let { chainId: t, factoryAddress: n } = e,
          s = i.FW.getVaultVersionByAddress(t, n);
        if (!s) return null;
        let u = c[s];
        return (0, r.tZ)(d.x, {
          minWidth: '220px',
          children: (0, r.BX)(o.Kqy, {
            direction: 'column',
            gap: 's',
            children: [
              (0, r.tZ)(o.xvT.Body.XS.Regular, {
                color: 'text.secondary',
                children: 'Morpho Vault Version',
              }),
              (0, r.tZ)(o.xvT.Body.M.Regular, {
                children: (0, r.BX)(o.Kqy, {
                  align: 'center',
                  gap: 4,
                  children: [
                    (0, r.tZ)('span', { children: s }),
                    (0, r.tZ)(o.ua7, {
                      content: 'Go to Github repository.',
                      children: (0, r.tZ)(l, {
                        children: (0, r.tZ)(a.Z, {
                          href: u,
                          buttonProps: {
                            variant: 'ghost',
                            size: 'small',
                            iconRight: void 0,
                            iconAlone: 'ArrowDiagonalUpPlain20',
                            iconAloneProps: { color: 'icon.secondary' },
                          },
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    12597: function (e, t, n) {
      n.d(t, {
        mD: function () {
          return u;
        },
        xr: function () {
          return c.x;
        },
        UT: function () {
          return g.UT;
        },
        o: function () {
          return g.o;
        },
        bj: function () {
          return g.bj;
        },
        IM: function () {
          return p;
        },
      });
      var r = n(78286),
        i = n(58258),
        o = n(40252),
        a = n(54655),
        d = n(50825),
        l = n(89991),
        c = n(86536);
      let s = (0, n(38819).Z)(a.Kqy, { target: 'e1xehfhk0' })('height:25.6px;');
      var u = (0, i.memo)((e) => {
          var t;
          let { title: n, address: u, labelTag: g, tooltipMessage: p, toastMessage: h, ...x } = e,
            { targetChainId: m, targetChain: f } = (0, l.Z_)(),
            y = (0, i.useMemo)(() => o.ChainUtils.getExplorerAddressUrl(m, u), [u, m]),
            b = (0, i.useMemo)(() => (0, a.GQT)(u), [u]);
          return (0, r.tZ)(c.x, {
            ...x,
            children: (0, r.BX)(a.Kqy, {
              justify: 'center',
              direction: 'column',
              gap: 's',
              children: [
                (0, r.BX)(a.Kqy, {
                  gap: 6,
                  align: 'center',
                  children: [
                    (0, r.tZ)(a.xvT.Body.XS.Regular, { color: 'text.secondary', children: n }),
                    g && (0, r.tZ)(a.Vp9, { variant: 'main', label: g }),
                  ],
                }),
                (0, r.BX)(s, {
                  gap: 4,
                  align: 'center',
                  children: [
                    (0, r.tZ)(a.xvT.Body.M.Regular, { children: b }),
                    !(0, a.Czs)(u) &&
                      (0, r.BX)(a.Kqy, {
                        align: 'center',
                        children: [
                          (0, r.tZ)(a.mUV, {
                            toCopy: u,
                            toastMessage: h || 'Address copied to clipboard.',
                            tooltipMessage: p,
                          }),
                          (0, r.tZ)(a.ua7, {
                            content: 'Go to '.concat(
                              (null === (t = f.blockExplorers) || void 0 === t
                                ? void 0
                                : t.default.name) || 'block explorer',
                              '.'
                            ),
                            children: (0, r.tZ)(a.Kqy, {
                              children: (0, r.tZ)(d.Z, {
                                href: y,
                                buttonProps: {
                                  variant: 'ghost',
                                  size: 'small',
                                  iconRight: void 0,
                                  iconAlone: 'ArrowDiagonalUpPlain20',
                                  iconAloneProps: { color: 'icon.secondary' },
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          });
        }),
        g = n(10190),
        p = (0, i.memo)((e) => {
          let { title: t, description: n, type: o, level: d } = e,
            l = (0, i.useMemo)(() => (d ? (0, a.ziG)(d) : null), [d]);
          return t && n
            ? (0, r.BX)(
                a.Zbd,
                {
                  gap: 's',
                  direction: 'column',
                  paddingBlock: 'm',
                  paddingInline: 's',
                  borderRadius: '8px',
                  children: [
                    (0, r.BX)(a.Kqy, {
                      direction: 'row',
                      align: 'center',
                      gap: 6,
                      children: [
                        (0, r.tZ)(a.aNP, { level: d }),
                        (0, r.tZ)(a.xvT.Body.XS.Regular, {
                          color: null != l ? l : 'text.body',
                          children: t,
                        }),
                      ],
                    }),
                    (0, r.tZ)(a.xvT.Body.XS.Regular, { children: n }),
                  ],
                },
                o
              )
            : null;
        });
      n(19686);
    },
    28393: function (e, t, n) {
      n.d(t, {
        Rh: function () {
          return d;
        },
        cW: function () {
          return l;
        },
        ef: function () {
          return c;
        },
        wP: function () {
          return a;
        },
      });
      var r = n(23567),
        i = n(38819),
        o = n(54655);
      let a = (0, i.Z)('div', {
          shouldForwardProp: (0, o.uhK)(['noBackground']),
          target: 'e1i1nrgp0',
        })(
          'background:',
          (e) => {
            let { theme: t, noBackground: n } = e;
            return !n && t.colors.constant.gradient.pageBackground;
          },
          ';width:100%;'
        ),
        d = (0, i.Z)(o.Kqy, {
          shouldForwardProp: (0, o.uhK)(['hasLargerVerticalPadding', 'withoutAside', 'unshiftTop']),
          target: 'e1i1nrgp1',
        })(
          'max-width:1600px;margin-left:auto;margin-right:auto;flex-direction:column;border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';padding-left:200px;padding-right:200px;',
          (e) => {
            let { hasLargerVerticalPadding: t } = e;
            return t
              ? (0, r.iv)('padding-top:100px;padding-bottom:100px;')
              : (0, r.iv)('padding-top:80px;padding-bottom:80px;');
          },
          ' ',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.containerDown('content-xxl', 'content-root');
          },
          '{',
          (e) => {
            let { withoutAside: t } = e;
            return t
              ? (0, r.iv)('padding-left:120px;padding-right:120px;')
              : (0, r.iv)('padding-left:80px;padding-right:80px;');
          },
          '}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.containerDown('content-xl', 'content-root');
          },
          '{',
          (e) => {
            let { withoutAside: t } = e;
            return t
              ? (0, r.iv)('padding-left:60px;padding-right:60px;')
              : (0, r.iv)('padding-left:12px;padding-right:12px;');
          },
          '}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.containerDown('content-l', 'content-root');
          },
          '{padding-left:12px;padding-right:12px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('m');
          },
          '{padding:12px;}',
          (e) => {
            let { unshiftTop: t } = e;
            return t && 'margin-top: -20px;';
          }
        ),
        l = (0, i.Z)('div', { target: 'e1i1nrgp2' })(
          'width:100%;height:',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('xs');
          },
          '{height:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.l;
          },
          ';}background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.base;
          },
          ';border-radius:',
          (e) => {
            let { theme: t } = e;
            return ''.concat(t.borderRadius, ' ').concat(t.borderRadius, ' 0 0');
          },
          ';'
        ),
        c = (0, i.Z)('div', { target: 'e1i1nrgp3' })(
          'position:sticky;top:',
          (e) => {
            let { top: t } = e;
            return t;
          },
          'px;display:flex;flex-shrink:0;width:430px;margin-top:64px;padding-top:76px;padding-left:1px;padding-right:80px;overflow-y:auto;max-height:calc(100vh - 10px - ',
          (e) => {
            let { top: t } = e;
            return t;
          },
          'px);z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.base.default;
          },
          ';',
          (0, o.xJ_)('border-width'),
          ' ',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.containerDown('content-xl', 'content-root');
          },
          '{padding-right:12px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('l');
          },
          '{width:360px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{display:none;}'
        );
    },
    4078: function (e, t, n) {
      var r = n(78286),
        i = n(58258),
        o = n(28393);
      t.default = (0, i.memo)((e) => {
        let {
          children: t,
          hasLargerVerticalPadding: n = !1,
          withoutAside: i = !1,
          withOverflowingBottomBorder: a = !1,
          unshiftTop: d = !1,
          noBackground: l = !1,
          className: c,
          style: s,
        } = e;
        return (0, r.BX)(o.wP, {
          noBackground: l,
          className: c,
          style: s,
          id: 'section-layout-background',
          children: [
            (0, r.tZ)(o.Rh, {
              hasLargerVerticalPadding: n,
              withoutAside: i,
              unshiftTop: d,
              id: 'section-layout',
              children: t,
            }),
            a && (0, r.tZ)(o.cW, {}),
          ],
        });
      });
    },
  },
]);
