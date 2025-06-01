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
    (e._sentryDebugIds[t] = '22507162-a1bd-47cc-9e17-e4663c41e2d1'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-22507162-a1bd-47cc-9e17-e4663c41e2d1'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    75927: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 93690)),
        Promise.resolve().then(r.t.bind(r, 57806, 23)),
        Promise.resolve().then(r.bind(r, 9009)),
        Promise.resolve().then(r.bind(r, 30726)),
        Promise.resolve().then(r.bind(r, 95955)),
        Promise.resolve().then(r.bind(r, 59586)),
        Promise.resolve().then(r.bind(r, 68843)),
        Promise.resolve().then(r.bind(r, 1017));
    },
    55872: function (e, t, r) {
      'use strict';
      r.d(t, {
        m: function () {
          return m;
        },
      });
      var n = r(78286),
        a = r(58258),
        l = r(54655),
        i = r(17965),
        o = r(40252),
        s = r(35047),
        d = r(50825),
        c = r(38819);
      let u = (0, c.Z)('div', { target: 'eyr4h7c0' })(
          'min-width:220px;max-width:300px;padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ' 0;'
        ),
        p = (0, c.Z)(l.Kqy, { target: 'eyr4h7c1' })(
          'padding:0px ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';min-height:34px;'
        ),
        h = (0, c.Z)(p, { target: 'eyr4h7c2' })(
          'padding:10px ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';'
        ),
        g = (0, c.Z)(l.xvT.Body.XXS.Regular, { target: 'eyr4h7c3' })('display:contents;');
      var v = (0, a.memo)((e) => {
          let { className: t, collateralExposure: r, targetChainId: c } = e,
            v = (0, a.useMemo)(
              () =>
                Array.from(r.lltvs)
                  .map((e) =>
                    ''.concat(l.$0l.percent.unit('%').trailingZero(!1).digits(1).of(e, 18))
                  )
                  .join(', '),
              [r]
            ),
            m = (0, a.useMemo)(() => {
              let e = new Set();
              return Array.from(r.oracles)
                .map((e) => {
                  let t = 'string' == typeof e,
                    r = t ? e : e.address;
                  return {
                    label: t
                      ? (0, l.GQT)(e)
                      : e.type === i.OracleType.Unknown
                        ? (0, l.GQT)(r)
                        : (0, s.formatLongString)((0, l.pTE)(e), 30) || (0, l.GQT)(r),
                    url: o.ChainUtils.getExplorerAddressUrl(c, r),
                    address: r,
                  };
                })
                .filter((t) => {
                  let r = ''.concat(t.label, '-').concat(t.url, '-').concat(t.address);
                  return !e.has(r) && (e.add(r), !0);
                });
            }, [r.oracles, c]);
          return (0, n.tZ)(u, {
            className: t,
            children: (0, n.BX)(l.Kqy, {
              direction: 'column',
              children: [
                (0, n.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(l.xvT.Body.XXS.Regular, {
                      color: 'text.body',
                      children: 'Collateral',
                    }),
                    (0, n.BX)(l.Kqy, {
                      align: 'center',
                      gap: 4,
                      children: [
                        (0, n.tZ)(l.qEK, { src: r.token.logoURI, size: 'small' }),
                        (0, n.tZ)(g, {
                          children: r.token.symbol
                            ? (0, s.formatLongString)(r.token.symbol, 35)
                            : '-',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.tZ)(l.Z0O, {}),
                (0, n.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(l.xvT.Body.XXS.Regular, { color: 'text.body', children: 'LLTV' }),
                    (0, n.tZ)(l.xvT.Body.XXS.Regular, { children: v }),
                  ],
                }),
                (0, n.tZ)(l.Z0O, {}),
                (0, n.BX)(h, {
                  align: 'center',
                  justify: 'space-between',
                  gap: 's',
                  children: [
                    (0, n.tZ)(l.xvT.Body.XXS.Regular, { children: 'Oracle' }),
                    (0, n.tZ)(l.Kqy, {
                      direction: 'column',
                      gap: 5,
                      align: 'end',
                      children: m.map((e, t) =>
                        (0, n.tZ)(
                          d.Z,
                          {
                            href: e.url,
                            mode: 'external',
                            buttonProps: { variant: 'ghost', size: 'small', label: e.label },
                          },
                          'oracleLink_'.concat(t)
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        m = (0, a.memo)((e) => {
          let {
              className: t,
              collateralExposures: r,
              targetChainId: i,
              extraInfo: o,
              align: s = 'left',
              maxTokensCount: d,
            } = e,
            c = (0, a.useMemo)(
              () =>
                r.map((e) => ({
                  hoverCardContent: (0, n.tZ)(v, { collateralExposure: e, targetChainId: i }),
                  logoUrl: e.token.logoURI,
                })),
              [r, i]
            );
          return (0, n.tZ)(l.$xj, {
            className: t,
            items: c,
            extraInfo: o,
            align: s,
            maxTokensCount: d,
          });
        });
    },
    76992: function (e, t, r) {
      'use strict';
      r.d(t, {
        E: function () {
          return g;
        },
      });
      var n = r(78286),
        a = r(58258),
        l = r(54655),
        i = r(50825),
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
        c = (0, o.Z)('div', { target: 'eikqm6p1' })('position:relative;'),
        u = (0, o.Z)(l.Kqy, { target: 'eikqm6p2' })(
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
        p = (0, o.Z)(l.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        h = (0, a.forwardRef)(function (e, t) {
          let {
            options: r,
            id: a,
            value: o,
            noPadding: s = !1,
            noGap: h = !1,
            disabled: g = !1,
            variant: v = 'primary',
            backgroundVariant: m = 'primary',
            size: y = 'small',
            className: f,
            onChange: x,
            ...b
          } = e;
          return (0, n.tZ)(d, {
            noPadding: s,
            noGap: h,
            backgroundVariant: m,
            ref: t,
            className: f,
            ...b,
            children: r.map((e) =>
              (0, n.tZ)(
                l.ua7,
                {
                  disabled: !e.tooltip,
                  content: e.tooltip,
                  offset: s ? 4 : 9,
                  children: (0, n.BX)(c, {
                    children: [
                      e.href
                        ? (0, n.tZ)(i.Z, {
                            href: e.href,
                            prefetch: e.prefetch,
                            mode: 'internal',
                            buttonProps: {
                              variant: e.value === o ? v : 'ghost',
                              size: y,
                              disabled: g || e.isDisabled,
                              label: e.label,
                              iconAlone: e.icon,
                              onClick: () => (null == x ? void 0 : x(e.value)),
                            },
                          })
                        : (0, n.tZ)(l.zxk, {
                            variant: e.value === o ? v : 'ghost',
                            size: y,
                            disabled: g || e.isDisabled,
                            label: e.label,
                            iconAlone: e.icon,
                            onClick: () => (null == x ? void 0 : x(e.value)),
                          }),
                      e.counter && e.counter > 0
                        ? (0, n.tZ)(u, {
                            children: (0, n.tZ)(p, {
                              TextVariant: l.xvT.Body.XXXS.Regular,
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
      var g = (0, a.memo)(h);
    },
    62231: function (e, t, r) {
      'use strict';
      r.d(t, {
        R: function () {
          return X;
        },
      });
      var n = r(78286),
        a = r(58258),
        l = r(3100),
        i = r(85957),
        o = r(96801),
        s = r(12556),
        d = r(54655),
        c = r(18313),
        u = r(89991),
        p = r(75026),
        h = r(54899),
        g = r(23567),
        v = r(38819);
      let m = (e) =>
          (0, g.iv)(
            'z-index:',
            e.zIndex.dropdown.mid,
            ';box-shadow:',
            e.boxShadow.dp4,
            ';background:',
            e.colors.constant.gray,
            ';width:min(200px,70vw);',
            (0, d.WGn)(d.JiD),
            '  max-height:calc(50svh - ',
            e.spacing.s,
            ');',
            e.breakpoints.down('s'),
            '{max-height:calc(50svh - ',
            e.spacing.s,
            ');}'
          ),
        y = (0, v.Z)(o.VY, { target: 'e1k2e47h0' })((e) => {
          let { theme: t } = e;
          return m(t);
        }, '  border-radius:20px;padding:8px;'),
        f = (0, v.Z)(o.l_, { target: 'e1k2e47h1' })('display:flex;flex-direction:column;gap:8px;'),
        x = (0, v.Z)(o.ck, { target: 'e1k2e47h2' })('outline:none;'),
        b = (e) =>
          (0, g.iv)(
            'border-radius:8px;cursor:pointer;&:hover{background:',
            e.colors.constant.dark,
            ';}'
          ),
        Z = (0, v.Z)(d.Kqy, { target: 'e1k2e47h3' })('padding:5px 8px;', (e) => {
          let { theme: t } = e;
          return b(t);
        }),
        w = (0, v.Z)(d.xvT.Body.XXS.Regular, { target: 'e1k2e47h4' })('display:contents;'),
        k = [
          (0, s.$B)('assets/chains/polygon.svg'),
          (0, s.$B)('assets/chains/world.png'),
          (0, s.$B)('assets/chains/plume.svg'),
          (0, s.$B)('assets/chains/optimism.svg'),
        ];
      var B = (0, a.memo)(() =>
          (0, n.BX)(d.Kqy, {
            direction: 'column',
            gap: '2px',
            justify: 'center',
            align: 'center',
            padding: '2.5px',
            width: '20px',
            height: '20px',
            children: [
              (0, n.BX)(d.Kqy, {
                gap: '2px',
                children: [
                  (0, n.tZ)(d.qEK, { src: k[0], padding: 0, size: 6.5 }),
                  (0, n.tZ)(d.qEK, { src: k[1], padding: 0, size: 6.5 }),
                ],
              }),
              (0, n.BX)(d.Kqy, {
                gap: '2px',
                children: [
                  (0, n.tZ)(d.qEK, { src: k[2], padding: 0, size: 6.5 }),
                  (0, n.tZ)(d.qEK, { src: k[3], padding: 0, size: 6.5 }),
                ],
              }),
            ],
          })
        ),
        C = (0, a.memo)(() =>
          (0, n.tZ)(d.dLw, {
            href: c.bF,
            children: (0, n.tZ)(d.ua7, {
              content: 'Explore all chains in the Morpho Lite App',
              children: (0, n.BX)(Z, {
                justify: 'space-between',
                align: 'center',
                children: [
                  (0, n.BX)(d.Kqy, {
                    gap: 'xxs',
                    align: 'center',
                    children: [
                      (0, n.tZ)(B, {}),
                      (0, n.tZ)(w, { color: 'text.body', children: 'Explore chains' }),
                    ],
                  }),
                  (0, n.tZ)(d.JO$, { icon: 'ArrowDiagonalUpPlain20', color: 'icon.primary' }),
                ],
              }),
            }),
          })
        );
      function A(e) {
        let { chainId: t, value: r, children: a, selected: l } = e;
        return (0, n.tZ)(x, {
          value: r,
          children: (0, n.tZ)(o.eT, {
            children: (0, n.BX)(Z, {
              justify: 'space-between',
              children: [
                (0, n.BX)(d.Kqy, {
                  gap: 4,
                  children: [
                    (0, n.tZ)(d.ZcK, { chainId: t }),
                    (0, n.tZ)(w, { color: 'text.body', children: a }),
                  ],
                }),
                (0, n.tZ)(o.wU, {
                  children: l && (0, n.tZ)(d.JO$, { icon: 'CheckPlain20', color: 'icon.primary' }),
                }),
              ],
            }),
          }),
        });
      }
      var X = (0, a.memo)(function (e) {
        let { disabled: t, supportedChains: r } = e,
          { targetChain: g, onSetTargetChain: v, account: m } = (0, u.Z_)(),
          { selectByChainName: x } = (0, h.R)(),
          [b, Z] = (0, a.useState)(!1),
          w = (0, p.V)(),
          k = (0, i.useRouter)(),
          [B, X] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          B &&
            c.Cq.AVAILABLE_CHAIN_IDS.filter((e) => e !== (null == g ? void 0 : g.id)).forEach(
              (e) => {
                let t = w({ chainName: s.FW.getNameById(e) });
                k.prefetch(t);
              }
            );
        }, [B, k, null == g ? void 0 : g.id, w]),
          (0, a.useEffect)(() => {
            document.body.removeAttribute('data-scroll-locked');
          }, [B]);
        let T = (0, a.useMemo)(() => {
            var e;
            return null === (e = s.FW.tryGetChain(null == g ? void 0 : g.name)) || void 0 === e
              ? void 0
              : e.id;
          }, [g]),
          M = (0, a.useCallback)(
            (e) => {
              let t = s.FW.tryGetChain(e.toLocaleLowerCase());
              t && x(t.name);
            },
            [x]
          ),
          P = (0, a.useCallback)(
            (e) => {
              e.preventDefault(), e.stopPropagation(), g && v(g);
            },
            [g, v]
          ),
          S = (0, a.useRef)();
        return (
          (0, a.useEffect)(() => {
            if ((S.current && clearTimeout(S.current), m.isWrongChain)) {
              S.current = setTimeout(() => {
                Z(!0);
              }, 1200);
              return;
            }
            return (
              Z(!1),
              () => {
                S.current && clearTimeout(S.current);
              }
            );
          }, [m.isWrongChain]),
          (0, n.BX)(d.Kqy, {
            direction: 'row',
            align: 'center',
            gap: 'xs',
            children: [
              b &&
                (0, n.tZ)(d.ua7, {
                  content: 'You are connected to the wrong network.\nSwitch to '.concat(
                    null == g ? void 0 : g.name,
                    '?'
                  ),
                  children: (0, n.tZ)(d.zxk, {
                    variant: 'ghost',
                    size: 'small',
                    iconRight: 'AlertPlain20',
                    onPointerDownCapture: P,
                    label: 'Wrong Network',
                  }),
                }),
              (0, n.BX)(o.fC, {
                value: null == g ? void 0 : g.name.toLowerCase(),
                onValueChange: M,
                disabled: t,
                onOpenChange: X,
                children: [
                  (0, n.tZ)(o.xz, {
                    asChild: !0,
                    children: (0, n.BX)(d.zxk, {
                      variant: m.isConnected ? 'secondary' : 'dark',
                      size: 'medium',
                      style: { padding: '0px 3px 0px 8px', position: 'relative' },
                      children: [
                        (0, n.tZ)(d.ZcK, {
                          chainId: T,
                          srcAvatarProps: { rounded: !0, size: 'medium' },
                        }),
                        (0, n.tZ)(d.JO$, {
                          icon: 'ChevronPlain20',
                          color: 'text.body',
                          style: { transform: 'rotate('.concat(B ? 180 : 0, 'deg)') },
                        }),
                      ],
                    }),
                  }),
                  (0, n.tZ)(o.h_, {
                    children: (0, n.tZ)(y, {
                      align: 'end',
                      position: 'popper',
                      sideOffset: 4,
                      children: (0, n.BX)(f, {
                        children: [
                          (0, n.tZ)(o.ZA, {
                            children:
                              null == r
                                ? void 0
                                : r.map((e) =>
                                    (0, n.tZ)(
                                      A,
                                      {
                                        value: e.name,
                                        chainId: e.chain.id,
                                        selected: e.chain.id === g.id,
                                        children: (0, l.Z)(e.name),
                                      },
                                      e.name
                                    )
                                  ),
                          }),
                          (0, n.tZ)(d.Z0O, {}),
                          (0, n.tZ)(C, {}),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      });
    },
    95438: function (e, t, r) {
      'use strict';
      r.d(t, {
        R: function () {
          return o;
        },
      });
      var n = r(78286),
        a = r(58258),
        l = r(54655),
        i = r(76992),
        o = (0, a.memo)(
          (0, a.forwardRef)((e, t) => {
            let { isLightModeEnabled: r = !1, ...o } = e,
              {
                toggleThemeMode: s,
                themeRaw: { mode: d },
              } = (0, l.TCT)(),
              c = (0, a.useMemo)(
                () => [
                  {
                    value: l.hYm.Dark,
                    icon: 'DarkModePlain20',
                    tooltip: d === l.hYm.Dark ? null : 'Switch to dark mode',
                  },
                  {
                    value: l.hYm.Light,
                    icon: 'LightModePlain20',
                    isDisabled: !r,
                    tooltip: r
                      ? d === l.hYm.Light
                        ? null
                        : 'Switch to light mode'
                      : 'Light theme is coming soon.',
                  },
                ],
                [r, d]
              );
            return (0, n.tZ)(i.E, {
              id: 'theme-switch',
              options: c,
              value: d,
              onChange: s,
              variant: 'secondary',
              backgroundVariant: 'dark',
              ref: t,
              size: 'small',
              ...o,
            });
          })
        );
    },
    66888: function (e, t, r) {
      'use strict';
      r.d(t, {
        u: function () {
          return a;
        },
        Z: function () {
          return E;
        },
      });
      var n,
        a,
        l = r(78286),
        i = r(58258),
        o = r(99095),
        s = r(54655),
        d = r(38819),
        c = r(56044),
        u = r(12556),
        p = r(82078),
        h = r(50825),
        g = r(98949),
        v = r(82803),
        m = r(75147),
        y = r(89991),
        f = r(40816);
      let x = (0, d.Z)(s.Kqy, { target: 'ef7kvr40' })('width:100%;'),
        b = (0, d.Z)(s.zxk, { target: 'ef7kvr41' })('margin-left:auto;'),
        Z = (0, d.Z)(s.Kqy, { target: 'ef7kvr42' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.tertiary;
          },
          ';border-radius:10px;width:100%;'
        ),
        w = (0, i.memo)(() => {
          var e, t;
          let { toggleDialog: r } = (0, s.DAv)(),
            { targetChainId: n, account: a } = (0, y.Z_)(),
            { setActiveBundle: o } = (0, m.H)(),
            { legacyMorphoHolding: d, morphoHolding: x } = (0, g.gz)(),
            w = (0, i.useMemo)(() => {
              var e, t;
              return s.$0l.short
                .digits(2)
                .min(0.01)
                .of(
                  null !== (t = null === (e = d.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (e = d.value) || void 0 === e ? void 0 : e.balance]),
            k = (0, i.useMemo)(() => {
              var e, t;
              return s.$0l.short
                .digits(2)
                .min(0.01)
                .of(
                  null !== (t = null === (e = x.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (t = x.value) || void 0 === t ? void 0 : t.balance]),
            B = (0, i.useMemo)(() => {
              var e;
              if (!a.address) return;
              let t = a.address,
                r = new c.ActionBundleRequirements(),
                l = [];
              if (null === (e = d.value) || void 0 === e ? void 0 : e.balance) {
                let e = (0, f.S)({
                  amount: d.value.balance,
                  userAddress: t,
                  supportsSignatures: !a.isContract,
                  bundlerAllowance: d.value.erc20Allowances['bundler3.generalAdapter1'],
                  erc2612Nonce: d.value.erc2612Nonce,
                  chainId: n,
                });
                e &&
                  (l.push(...e.actions),
                  r.signatures.push(...e.requirements.signatures),
                  r.txs.push(...e.requirements.txs));
              }
              return new c.ActionBundle(n, l, r);
            }, [a.address, a.isContract, d.value, n]),
            C = (0, i.useCallback)(() => {
              B &&
                (o(B, [
                  {
                    id: 'wrap',
                    type: v.H.InterfaceOperationType.wrap,
                    options: { isMax: [], disabledPeripheralTokens: new Set() },
                  },
                ]),
                r((0, l.tZ)(p.Z, {}), { closable: !1 }));
            }, [B, o, r]);
          return (0, l.BX)(s.Kqy, {
            direction: 'column',
            align: 'center',
            justify: 'center',
            gap: 24,
            children: [
              (0, l.tZ)(b, {
                variant: 'secondary',
                iconAlone: 'ClosePlain20',
                onClick: () => r(!1),
              }),
              (0, l.tZ)(s.qEK, {
                src: 'https://cdn.morpho.org/assets/logos/morpho.svg',
                padding: 0,
                style: { width: '40px', height: '40px' },
              }),
              (0, l.tZ)(s.xvT.Title.S, {
                textAlign: 'center',
                children: 'Wrap your legacy MORPHO',
              }),
              (0, l.tZ)(s.xvT.Body.M.Regular, {
                textAlign: 'center',
                children: 'The Morpho DAO has enabled transferability for the MORPHO token!',
              }),
              (0, l.tZ)(s.xvT.Body.M.Regular, {
                textAlign: 'center',
                children:
                  'Holders of legacy MORPHO tokens on Ethereum will need to wrap their tokens to enable transferability.',
              }),
              (0, l.BX)(s.Kqy, {
                direction: 'column',
                gap: 's',
                align: 'center',
                children: [
                  (0, l.tZ)(s.zxk, {
                    size: 'big',
                    variant: 'primary',
                    label: 'Wrap MORPHO',
                    onClick: C,
                  }),
                  (0, l.tZ)(h.Z, {
                    href: u.IA,
                    buttonProps: { variant: 'secondary', size: 'small', label: 'FAQ' },
                  }),
                ],
              }),
              (0, l.BX)(Z, {
                direction: 'column',
                align: 'center',
                padding: 's',
                gap: 6,
                children: [
                  (0, l.tZ)(s.xvT.Body.XS.Regular, { children: 'Wallet Balance' }),
                  (0, l.tZ)(s.xvT.Body.XS.Regular, {
                    children: 'Legacy MORPHO: '.concat(w, ' MORPHO'),
                  }),
                  (0, l.tZ)(s.xvT.Body.XS.Regular, {
                    children: 'Wrapped MORPHO: '.concat(k, ' MORPHO'),
                  }),
                ],
              }),
            ],
          });
        });
      var k = (0, i.memo)((e) => {
          let {} = e,
            { toggleDialog: t } = (0, s.DAv)();
          return (0, l.BX)(x, {
            align: 'center',
            gap: 8,
            justify: 'space-between',
            'data-testid': 'wrap-banner',
            children: [
              (0, l.tZ)('div', {}),
              (0, l.tZ)(s.xvT.Body.M.Regular, {
                lineHeight: 'normal',
                children:
                  'MORPHO is now transferable! Please wrap your MORPHO to the latest version to enable transferability.',
              }),
              (0, l.BX)(s.Kqy, {
                align: 'center',
                gap: 8,
                children: [
                  (0, l.tZ)(s.zxk, {
                    variant: 'primary',
                    size: 'default',
                    onClick: () => t((0, l.tZ)(w, {}), { closable: !0 }),
                    label: 'Wrap',
                  }),
                  (0, l.tZ)(h.Z, {
                    href: u.IA,
                    buttonProps: { variant: 'secondary', size: 'default', label: 'FAQ' },
                  }),
                ],
              }),
            ],
          });
        }),
        B = r(18313),
        C = (0, i.memo)((e) => {
          let {} = e,
            { account: t, targetChainId: r } = (0, y.Z_)(),
            n = (0, i.useMemo)(() => {
              let e = u.FW.getSafeIdentifier(r),
                n = u.FW.getNameById(r);
              return e
                ? 'https://app.safe.global/apps/open?safe='
                    .concat(e, ':')
                    .concat(null == t ? void 0 : t.address, '&appUrl=')
                    .concat(B.clientEnvs.NEXT_PUBLIC_DEPLOYMENT_URL, '/')
                    .concat(n, '/earn')
                : '#';
            }, [r, null == t ? void 0 : t.address]);
          return (0, l.BX)(s.xvT.Body.M.Regular, {
            lineHeight: 'normal',
            width: '100%',
            justifyContent: 'center',
            textAlign: 'center',
            children: [
              'If you are using a Safe, use the ',
              (0, l.tZ)('a', { href: n, children: 'Morpho Safe App' }),
              ' for an optimal experience',
            ],
          });
        });
      let A =
        'Morpho Association (ADDMO) is not authorized or regulated by the Financial Conduct Authority (FCA), and accordingly, the protections provided by the UK regulatory system will not be available to you when using the products and services provided by Morpho Association. It is your responsibility to ascertain whether you are permitted to use the products and services provided by Morpho Association according to applicable laws or regulations. By accessing this website and the products and services available through it, you acknowledge and confirm that you are a company or partnership with share capital or net assets of at least \xa35m or a trust with total cash and investments of at least \xa310m, or that you have professional experience in matters relating to investments and your ordinary activities involve you in dealing in cryptoassets for the purpose of a business carried on by you. You also acknowledge that cryptoassets are high risk investments and that you deal in them at your own risk.';
      function X() {
        return (0, l.BX)(s.Kqy, {
          direction: 'column',
          align: 'center',
          justify: 'center',
          gap: 'm',
          children: [
            (0, l.tZ)(s.xvT.Body.L.Regular, { children: 'Disclaimer for UK residents' }),
            (0, l.tZ)(s.xvT.Body.S.Regular, { children: A }),
          ],
        });
      }
      var T = (0, i.memo)((e) => {
        let {} = e,
          t = (0, s.dD4)(),
          { toggleDialog: r } = (0, s.DAv)(),
          n = (0, i.useMemo)(() => ''.concat(A.slice(0, 110), '...'), []);
        return (0, l.BX)(s.Kqy, {
          align: 'center',
          justify: 'space-between',
          width: '100%',
          gap: 8,
          children: [
            (0, l.tZ)('div', {}),
            (0, l.tZ)(s.ZT$, {
              TextVariant: t ? s.xvT.Body.XXS.Regular : s.xvT.Body.M.Regular,
              lineHeight: 'normal',
              children: n,
            }),
            (0, l.tZ)(s.zxk, {
              variant: 'ghost',
              size: 'small',
              onClick: () => r((0, l.tZ)(X, {}), { closable: !0 }),
              children: 'See more',
            }),
          ],
        });
      });
      ((n = a || (a = {})).CONFIG = {
        legacyMorpho: { type: 'info', content: (0, l.tZ)(k, {}), dismissable: !0 },
        pageWarning: { type: 'alert', content: null, dismissable: !1 },
        simulate: {
          type: 'info',
          content: (0, l.tZ)(s.xvT.Body.M.Regular, {
            lineHeight: 'normal',
            width: '100%',
            textAlign: 'center',
            children: 'Simulating data based on transactions in Bundler',
          }),
          dismissable: !0,
        },
        ukDisclaimer: { type: 'info', content: (0, l.tZ)(T, {}), dismissable: !1 },
        safeAccount: { type: 'info', content: (0, l.tZ)(C, {}), dismissable: !0 },
      }),
        (n.TypeDef = {
          alert: { background: (e) => e.colors.components.badge },
          info: { background: (e) => e.colors.background.banner },
        });
      let M = (0, d.Z)(s.Kqy, { target: 'e1igxb3q0' })(
        'background:',
        (e) => {
          let { theme: t, variant: r } = e;
          return a.TypeDef[r].background(t);
        },
        ';backdrop-filter:blur(100px);padding:14px 24px;min-height:54px;',
        (0, s.ClW)(s.ieP),
        ';a{text-decoration:underline;}'
      );
      var P = (0, i.memo)((e) => {
          let { className: t, children: r, variant: n = 'alert', onDismiss: a } = e;
          return (0, l.BX)(M, {
            className: t,
            variant: n,
            align: 'center',
            gap: 8,
            children: [
              r,
              a &&
                (0, l.tZ)(s.zxk, {
                  onClick: a,
                  variant: 'ghost',
                  size: 'small',
                  iconAlone: 'ClosePlain20',
                }),
            ],
          });
        }),
        S = r(23567);
      let R = (0, d.Z)(s.Kqy, { target: 'esgdglv0' })(
          'z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.banner.mid;
          },
          ';margin-top:',
          (0, S.iv)('var(--navbar-height)'),
          ';position:relative;'
        ),
        I = (0, d.Z)('div', { target: 'esgdglv1' })(
          'width:calc(100% - (var(--bundler-width) - var(--bundler-position)));',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{width:100%;}position:fixed;'
        );
      var E = (0, i.memo)((e) => {
        let { className: t } = e,
          { bannersToShow: r, toggleBanner: n } = (0, o.l5)();
        return (0, l.tZ)(R, {
          className: t,
          direction: 'column',
          children: (0, l.tZ)(I, {
            children: r.map((e) => {
              let { id: t, content: r, type: a, dismissable: i } = e;
              return (0, l.tZ)(
                P,
                { variant: a, onDismiss: i ? () => n(t, !1) : void 0, children: r },
                t
              );
            }),
          }),
        });
      });
    },
    93690: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return tS;
        },
      });
      var n = r(78286);
      r(65063), r(36806);
      var a = r(54945),
        l = r(94119),
        i = r(44982),
        o = r(58258),
        s = r(54655),
        d = r(78830),
        c = r(62231),
        u = r(35047),
        p = r(89991),
        h = r(12635),
        g = r(95438),
        v = r(26726),
        m = r(23567),
        y = r(38819);
      let f = (0, y.Z)(s.Kqy, { target: 'ewiym810' })(
          '[data-radix-popper-content-wrapper]{position:relative !important;transform:none !important;will-change:initial !important;}'
        ),
        x = (0, y.Z)(h.VY, {
          shouldForwardProp: (e) => !['positionRelativeToViewport'].includes(e),
          target: 'ewiym811',
        })(
          'display:flex;flex-direction:column;width:min(350px,95vw);border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';overflow:hidden;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.gray;
          },
          ';box-shadow:',
          (e) => {
            let { theme: t } = e;
            return t.boxShadow.dp8;
          },
          ';padding:',
          (e) => {
            let { theme: t } = e;
            return ''.concat(t.padding.m, ' ').concat(t.padding.s);
          },
          ';gap:20px;z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.dropdown.mid;
          },
          ';',
          (e) => {
            let { positionRelativeToViewport: t } = e;
            return t && (0, m.iv)('position:fixed;top:74px;right:20px;');
          },
          '  &[data-state="closed"]{',
          (0, s.ClW)(s.wso, '300ms'),
          ';}&[data-state="open"]{',
          (0, s.ClW)(s.ieI, '300ms'),
          ';}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('xs');
          },
          '{width:calc(100vw - 40px);}'
        ),
        b = (0, y.Z)(s.zxk, { target: 'ewiym812' })((e) => {
          let { theme: t } = e;
          return t.breakpoints.up('m');
        }, '{padding:0 12px 0 10px;}');
      var Z = (0, o.memo)(
          (0, o.forwardRef)((e, t) => {
            let {
                user: { ens: r, address: a, ensImage: l },
                trigger: i,
                rootProps: o,
                triggerProps: d,
                portalProps: c,
                contentProps: m,
                positionRelativeToViewport: y = !0,
              } = e,
              { account: b, modal: Z } = (0, p.Z_)(),
              w = (0, v.nh)(v.TP.LIGHT_MODE),
              k = (0, n.BX)(x, {
                ref: t,
                ...m,
                positionRelativeToViewport: y,
                children: [
                  (0, n.BX)(s.Kqy, {
                    justify: 'space-between',
                    align: 'center',
                    children: [
                      (0, n.BX)(s.Kqy, {
                        align: 'center',
                        gap: 8,
                        children: [
                          (0, n.tZ)(s.qEK, { size: 'medium', address: a, ensUrl: l }),
                          (0, n.BX)(s.Kqy, {
                            gap: 4,
                            align: 'center',
                            children: [
                              (0, n.tZ)(s.xvT.Body.S.Regular, {
                                shortenByWidth: 120,
                                lineHeight: 'normal',
                                children: r ? (0, u.formatLongString)(r, 20) : (0, s.GQT)(a),
                              }),
                              (0, n.tZ)(s.mUV, {
                                toCopy: a,
                                toastMessage: 'Address copied to clipboard.',
                                tooltipMessage: 'Copy address.',
                                size: 'small',
                              }),
                            ],
                          }),
                        ],
                      }),
                      !b.isSafe &&
                        (0, n.BX)(s.Kqy, {
                          align: 'center',
                          gap: 'xs',
                          children: [
                            (0, n.tZ)(s.zxk, {
                              variant: 'secondary',
                              iconAlone: 'WalletPlain20',
                              onClick: () => {
                                Z.open();
                              },
                            }),
                            (0, n.tZ)(s.zxk, {
                              variant: 'secondary',
                              iconAlone: 'LogoutPlain20',
                              onClick: () => Z.disconnect(),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, n.BX)(s.Kqy, {
                    justify: 'space-between',
                    align: 'center',
                    children: [
                      (0, n.tZ)(s.xvT.Body.XS.Regular, {
                        color: 'text.body',
                        lineHeight: 'normal',
                        children: 'Theme',
                      }),
                      (0, n.tZ)(g.R, { isLightModeEnabled: w }),
                    ],
                  }),
                ],
              }),
              B = y ? (0, n.tZ)(f, { children: k }) : k;
            return (0, n.BX)(h.fC, {
              ...o,
              modal: !1,
              children: [
                (0, n.tZ)(h.xz, { asChild: !0, ...d, children: i }),
                (0, n.tZ)(h.Uv, { ...c, children: B }),
              ],
            });
          })
        ),
        w = (0, o.memo)(() => {
          let {
              modal: e,
              account: { address: t, ens: r, ensImage: a },
            } = (0, p.Z_)(),
            l = (0, s.CPt)();
          return t
            ? (0, n.tZ)(Z, {
                user: { address: t, ens: r, ensImage: a },
                trigger: (0, n.tZ)(b, {
                  variant: 'secondary',
                  size: 'medium',
                  avatarProps: {
                    ensUrl: null != a ? a : void 0,
                    address: a ? void 0 : t,
                    size: 'medium',
                  },
                  label: l ? void 0 : r ? (0, u.formatLongString)(r, 20) : (0, s.GQT)(t),
                  'data-testid': 'wallet-dropdown',
                }),
              })
            : (0, n.tZ)(s.zxk, {
                variant: 'dark',
                size: 'medium',
                label: 'Connect Wallet',
                onClick: () => e.open(),
              });
        }),
        k = r(18313),
        B = r(22683),
        C = r(75638),
        A = r(29009),
        X = r(76992);
      let T = (0, y.Z)(s.Kqy, { target: 'e1g8icyk0' })(
          '[data-radix-popper-content-wrapper]{position:relative !important;transform:none !important;will-change:initial !important;}'
        ),
        M = (0, y.Z)(s.Kqy, { target: 'e1g8icyk1' })('width:100%;'),
        P = (0, y.Z)(s.xvT.Body.XS.Regular, { target: 'e1g8icyk2' })(
          'margin-left:6px;height:25px;'
        ),
        S = (0, y.Z)(s.dLw, { target: 'e1g8icyk3' })('width:100%;'),
        R = (0, y.Z)(s.xvT.Body.XS.Regular, { target: 'e1g8icyk4' })(
          'color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.tertiary;
          },
          ';border-radius:8px;padding:0 6px;height:25px;width:100%;min-width:176px;transition:all 0.15s ease;display:flex;align-items:center;&:hover{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.primary;
          },
          ';color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.body;
          },
          ';}&:active{color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.body;
          },
          ';}'
        ),
        I = (0, y.Z)(h.VY, {
          shouldForwardProp: (e) => !['positionRelativeToViewport'].includes(e),
          target: 'e1g8icyk5',
        })(
          'display:flex;flex-direction:column;border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';overflow:hidden;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.gray;
          },
          ';box-shadow:',
          (e) => {
            let { theme: t } = e;
            return t.boxShadow.dp8;
          },
          ';padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';gap:18px;z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.dropdown.mid;
          },
          ';',
          (e) => {
            let { positionRelativeToViewport: t } = e;
            return t && (0, m.iv)('position:fixed;top:74px;left:20px;');
          },
          '  &[data-state="closed"]{',
          (0, s.ClW)(s.wso, '300ms'),
          ';}&[data-state="open"]{',
          (0, s.ClW)(s.ieI, '300ms'),
          ';}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('xs');
          },
          '{width:calc(100vw - 40px);}'
        ),
        E = (0, y.Z)(X.E, { target: 'e1g8icyk6' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.primary;
          },
          ';gap:4px;display:none;align-self:center;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('xs');
          },
          '{display:flex;}'
        );
      var q = (0, o.memo)(
          (0, o.forwardRef)((e, t) => {
            let {
                trigger: r,
                rootProps: a,
                triggerProps: l,
                portalProps: i,
                contentProps: o,
                positionRelativeToViewport: d = !0,
                isOpen: c,
                onOpenChange: u,
              } = e,
              { navigationValue: p, navigationOptions: g, onNavigationValueChange: v } = (0, C.v)(),
              m = (e) => {
                v(e);
              },
              y = (0, n.BX)(I, {
                ref: t,
                ...o,
                positionRelativeToViewport: d,
                children: [
                  (0, n.tZ)(E, {
                    variant: 'secondary',
                    size: 'small',
                    id: 'navbar-segment-control-mobile',
                    options: g.slice(0, 5),
                    onChange: (e) => {
                      u(!1), m(e);
                    },
                    value: p,
                  }),
                  (0, n.BX)(s.Kqy, {
                    direction: 'column',
                    gap: 's',
                    align: 'start',
                    children: [
                      (0, n.BX)(M, {
                        direction: 'column',
                        align: 'start',
                        children: [
                          (0, n.tZ)(P, { color: 'text.body', children: 'Company' }),
                          (0, n.tZ)(S, {
                            href: A.Sn,
                            children: (0, n.tZ)(R, { children: 'Morpho.org' }),
                          }),
                          (0, n.tZ)(S, {
                            href: A.UB,
                            children: (0, n.tZ)(R, { children: 'Legacy App' }),
                          }),
                          (0, n.tZ)(S, {
                            href: A.Ih,
                            children: (0, n.tZ)(R, { children: 'Career' }),
                          }),
                          (0, n.tZ)(S, {
                            href: A.Ql,
                            children: (0, n.tZ)(R, { children: 'Blog' }),
                          }),
                        ],
                      }),
                      (0, n.BX)(M, {
                        direction: 'column',
                        children: [
                          (0, n.tZ)(P, { color: 'text.body', children: 'Protocol' }),
                          (0, n.tZ)(S, {
                            href: A.$2,
                            children: (0, n.tZ)(R, { children: 'Delegate' }),
                          }),
                          (0, n.tZ)(S, {
                            href: A.lp,
                            children: (0, n.tZ)(R, { children: 'Rewards' }),
                          }),
                          (0, n.tZ)(S, {
                            href: A.xQ,
                            children: (0, n.tZ)(R, { children: 'Forum' }),
                          }),
                          (0, n.tZ)(S, {
                            href: A.lH,
                            children: (0, n.tZ)(R, { children: 'Vote' }),
                          }),
                          (0, n.tZ)(S, {
                            href: A.WU,
                            children: (0, n.tZ)(R, { children: 'Documentation' }),
                          }),
                          (0, n.tZ)(S, {
                            href: A.qy,
                            children: (0, n.tZ)(R, { children: 'Terms' }),
                          }),
                        ],
                      }),
                      (0, n.tZ)(M, {
                        align: 'center',
                        justify: 'space-between',
                        gap: 12,
                        wrap: 'wrap',
                        children: (0, n.BX)(s.Kqy, {
                          align: 'center',
                          gap: 's',
                          children: [
                            (0, n.tZ)(s.dLw, {
                              href: A.jW,
                              children: (0, n.tZ)(s.zxk, {
                                iconAlone: 'XPlain20',
                                variant: 'secondary',
                              }),
                            }),
                            (0, n.tZ)(s.dLw, {
                              href: A.PX,
                              children: (0, n.tZ)(s.zxk, {
                                iconAlone: 'FarcasterPlain20',
                                variant: 'secondary',
                              }),
                            }),
                            (0, n.tZ)(s.dLw, {
                              href: A.Vs,
                              children: (0, n.tZ)(s.zxk, {
                                iconAlone: 'DiscordPlain20',
                                variant: 'secondary',
                              }),
                            }),
                            (0, n.tZ)(s.dLw, {
                              href: A.uH,
                              children: (0, n.tZ)(s.zxk, {
                                iconAlone: 'MirrorPlain20',
                                variant: 'secondary',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              f = d ? (0, n.tZ)(T, { children: y }) : y;
            return (0, n.BX)(h.fC, {
              ...a,
              modal: !1,
              onOpenChange: u,
              open: c,
              children: [
                (0, n.tZ)(h.xz, { asChild: !0, ...l, children: r }),
                (0, n.tZ)(h.Uv, { ...i, children: f }),
              ],
            });
          })
        ),
        K = (0, o.memo)(() => {
          let { theme: e } = (0, s.TCT)();
          return (0, n.BX)('svg', {
            width: '74',
            height: '21',
            viewBox: '0 0 74 21',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, n.tZ)('path', {
                d: 'M2.3855 1.96191H4.74115L10.2006 14.5894H10.3624L15.8218 1.96191H18.137V16.5205H16.4183V4.93429H16.2566L11.2521 16.5205H9.27048L4.26598 4.93429H4.10422V16.5205H2.3855V1.96191Z',
                fill: e.colors.text.primary,
              }),
              (0, n.tZ)('path', {
                d: 'M20.0354 11.3744C20.0354 7.89655 22.1484 5.97563 25.2825 5.97563C28.4065 5.97563 30.5297 7.89655 30.5297 11.3744C30.5297 14.8422 28.4065 16.7631 25.2825 16.7631C22.1484 16.7631 20.0354 14.8422 20.0354 11.3744ZM21.835 11.3744C21.835 13.9222 23.2201 15.3073 25.2825 15.3073C27.3349 15.3073 28.72 13.9222 28.72 11.3744C28.72 8.81657 27.3349 7.44159 25.2825 7.44159C23.2201 7.44159 21.835 8.81657 21.835 11.3744Z',
                fill: e.colors.text.primary,
              }),
              (0, n.tZ)('path', {
                d: 'M32.229 6.21827H33.9477V7.4517H34.1094C34.4633 6.72377 35.1103 6.17783 36.6572 6.17783H38.0928V7.71457H36.6976C34.7666 7.71457 34.0083 8.77613 34.0083 10.8689V16.5205H32.229V6.21827Z',
                fill: e.colors.text.primary,
              }),
              (0, n.tZ)('path', {
                d: 'M39.4616 20.5645V6.21827H41.2006V7.6438H41.3623C42.1307 6.4508 43.3844 5.98574 44.8402 5.98574C47.5194 5.98574 49.5717 7.80556 49.5717 11.3744C49.5717 14.9332 47.5194 16.753 44.8402 16.753C43.4147 16.753 42.1711 16.298 41.4028 15.1556H41.241V20.5645H39.4616ZM41.1803 11.3744C41.1803 13.8716 42.5149 15.2769 44.4762 15.2769C46.4477 15.2769 47.7822 13.8716 47.7822 11.3744C47.7822 8.86712 46.4477 7.46181 44.4762 7.46181C42.5149 7.46181 41.1803 8.86712 41.1803 11.3744Z',
                fill: e.colors.text.primary,
              }),
              (0, n.tZ)('path', {
                d: 'M51.2755 1.96191H53.0548V7.49214H53.2166C53.9546 6.40025 55.178 5.98574 56.6237 5.98574C59.0198 5.98574 60.5363 7.19895 60.5363 9.71637V16.5205H58.7569V9.88824C58.7569 8.20996 57.8369 7.47192 56.2294 7.47192C54.4702 7.47192 53.0548 8.51326 53.0548 10.7678V16.5205H51.2755V1.96191Z',
                fill: e.colors.text.primary,
              }),
              (0, n.tZ)('path', {
                d: 'M62.1369 11.3744C62.1369 7.89655 64.2499 5.97563 67.384 5.97563C70.508 5.97563 72.6312 7.89655 72.6312 11.3744C72.6312 14.8422 70.508 16.7631 67.384 16.7631C64.2499 16.7631 62.1369 14.8422 62.1369 11.3744ZM63.9365 11.3744C63.9365 13.9222 65.3215 15.3073 67.384 15.3073C69.4364 15.3073 70.8214 13.9222 70.8214 11.3744C70.8214 8.81657 69.4364 7.44159 67.384 7.44159C65.3215 7.44159 63.9365 8.81657 63.9365 11.3744Z',
                fill: e.colors.text.primary,
              }),
            ],
          });
        });
      let L = (0, y.Z)('button', { target: 'e9ydlzj0' })(
        'display:flex;align-items:center;cursor:pointer;gap:',
        (e) => {
          let { theme: t } = e;
          return t.spacing.xs;
        },
        ';border:none;background:none;padding:0;margin:0;font:inherit;color:inherit;outline:none;',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.down('s');
        },
        '{gap:18px;}'
      );
      var z = (0, o.memo)((e) => {
          let { variant: t = 'secondary' } = e,
            { themeRaw: r } = (0, s.TCT)(),
            a = (0, s.ajf)('s'),
            [l, i] = (0, o.useState)(!1),
            d = r.mode === s.hYm.Dark;
          (0, o.useEffect)(() => {
            if (l && a) {
              document.body.style.overflow = 'hidden';
              return;
            }
            document.body.style.overflow = 'auto';
          }, [a, l]);
          let c = (0, o.useMemo)(() => (d ? 'MorphoPlain20' : 'MorphoGradient20'), [d]);
          return (0, n.tZ)(q, {
            isOpen: l,
            onOpenChange: i,
            trigger: (0, n.BX)(L, {
              as: a ? 'div' : 'button',
              children: [
                (0, n.tZ)(s.JO$, { icon: c, size: 28 }),
                a && (0, n.tZ)(s.zxk, { iconAlone: 'BurgerMenuPlain20', variant: t }),
                !a &&
                  (0, n.BX)(n.HY, {
                    children: [
                      (0, n.tZ)(K, {}),
                      (0, n.tZ)(s.JO$, {
                        icon: 'ChevronPlain20',
                        color: 'icon.primary',
                        style: { transform: 'rotate('.concat(l ? 180 : 0, 'deg)') },
                      }),
                    ],
                  }),
              ],
            }),
          });
        }),
        H = r(79070);
      let O = (0, y.Z)(s.Kqy, { target: 'ejv3lib0' })(
          'height:100%;padding:12px 24px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{padding:16px 12px;}'
        ),
        D = (0, y.Z)(X.E, { target: 'ejv3lib1' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.dark;
          },
          ';padding:3px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{display:none;}'
        ),
        _ = (0, y.Z)(s.zxk, { target: 'ejv3lib2' })(
          'animation:ease-in-out 0.2s;&:hover{svg{color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.primary;
          },
          ';}}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{display:none;}'
        ),
        N = (0, y.Z)(s.Kqy, { target: 'ejv3lib3' })('position:relative;'),
        V = (0, y.Z)(H.E.div, { target: 'ejv3lib4' })(
          'position:absolute;top:0px;right:0px;width:14px;height:14px;border-radius:50%;transform-origin:center center;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.brand;
          },
          ';display:flex;justify-content:center;align-items:center;text-align:center;& >:first-of-type{transform:translate(0.2px,0.4px);font-size:8px;}'
        ),
        U = (0, y.Z)(s.xvT.Body.XXXS.Regular, { target: 'ejv3lib5' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        );
      var W = (0, o.memo)((e) => {
          let { className: t } = e,
            { toggleRightPanel: r, isRightPanelOpen: a } = (0, s.s8G)(),
            { account: l } = (0, p.Z_)(),
            { operations: i } = (0, B.N)(),
            u = (0, o.useMemo)(() => i.length, [i]),
            { navigationValue: h, navigationOptions: g, onNavigationValueChange: v } = (0, C.v)();
          return (0, n.BX)(O, {
            justify: 'space-between',
            className: t,
            children: [
              (0, n.BX)(s.Kqy, {
                align: 'center',
                gap: 28,
                children: [
                  (0, n.tZ)(z, { variant: l.isConnected ? 'secondary' : 'dark' }),
                  (0, n.tZ)(D, {
                    variant: 'secondary',
                    size: 'medium',
                    id: 'navbar-segment-control',
                    options: g,
                    onChange: (e) => v(e),
                    value: h,
                    noPadding: !0,
                  }),
                ],
              }),
              (0, n.BX)(s.Kqy, {
                align: 'center',
                gap: 8,
                children: [
                  (0, n.BX)(o.Suspense, {
                    children: [
                      !l.isSafe && (0, n.tZ)(c.R, { supportedChains: k.Cq.INTERFACE_CHAINS }),
                      (0, n.tZ)(w, {}),
                    ],
                  }),
                  l.isConnected &&
                    (0, n.BX)(N, {
                      children: [
                        (0, n.tZ)(_, {
                          variant: 'secondary',
                          size: 'medium',
                          onClick: () => r(),
                          iconAlone: 'BundlerPlain20',
                          iconAloneProps: {
                            active: a,
                            color: a ? 'icon.primary' : 'icon.secondary',
                          },
                          'data-testid': 'bundler-button',
                        }),
                        (0, n.tZ)(d.M, {
                          mode: 'popLayout',
                          children:
                            u > 0 &&
                            !a &&
                            (0, n.tZ)(
                              V,
                              {
                                initial: { scale: 0.7, opacity: 0 },
                                animate: { scale: 1, opacity: 1 },
                                exit: { scale: 0.7, opacity: 0 },
                                transition: { duration: 0.3, type: 'spring', bounce: 0 },
                                children: (0, n.tZ)(U, {
                                  color: 'text.button.primary',
                                  children: u,
                                }),
                              },
                              'badge'
                            ),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }),
        j = r(85957),
        $ = r(8152),
        G = r(12556);
      let F = (0, y.Z)('div', { target: 'egby6zh0' })(
          'display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;height:100%;'
        ),
        Q = (0, y.Z)('div', { target: 'egby6zh1' })(
          'position:relative;border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';padding:20px;text-align:center;z-index:0;overflow:hidden;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;gap:16px;@media (max-height:700px){gap:6px;}'
        ),
        Y = (0, y.Z)('div', { target: 'egby6zh2' })(
          'background:linear-gradient(\n      0deg,rgba(87,146,255,0.4) 0%,rgba(87,146,255,0.4) 100%\n    ),',
          (e) => {
            let { theme: t } = e;
            return t.themeMode === s.hYm.Dark ? '#0f0f0f' : '#779de4';
          },
          ';position:absolute;inset:0;z-index:-1;'
        ),
        J = (0, y.Z)('div', { target: 'egby6zh3' })(
          'max-width:316px;align-self:center;@media (max-height:700px){br{display:none;}}@media (max-height:600px){display:none;}'
        ),
        ee = (0, y.Z)('div', { target: 'egby6zh4' })(
          'border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.dark;
          },
          ';display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:4px 18px 6px 18px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('l');
          },
          '{padding:4px 9px 6px 9px;}@media (max-height:700px){padding-top:2px;padding-bottom:2px;}'
        ),
        et = (0, y.Z)('div', { target: 'egby6zh5' })(
          'width:70px;height:90px;flex-shrink:0;flex-grow:0;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.text.tertiary;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('l');
          },
          '{width:50px;}@media (max-height:500px){height:60px;}'
        ),
        er = (0, y.Z)('img', { target: 'egby6zh6' })(
          'width:100%;height:58px;object-fit:contain;margin-bottom:4px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('l');
          },
          '{height:45px;}@media (max-height:500px){height:30px;}'
        ),
        en = (0, y.Z)('div', { target: 'egby6zh7' })(
          'display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:center;gap:6px;'
        ),
        ea = (0, y.Z)('svg', { target: 'egby6zh8' })(
          'margin-top:4px;width:180px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('l');
          },
          '{width:170px;}'
        ),
        el = (0, y.Z)('div', { target: 'egby6zh9' })(
          'white-space:nowrap;border-radius:4px;padding:1px 6px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.gray;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('l');
          },
          '{font-size:4px;}'
        );
      function ei(e) {
        let {
            leftImage: t,
            leftLabel: r,
            rightImage: a,
            rightLabel: l,
            arrowDirection: i,
            arrowLabel: o,
          } = e,
          { theme: d } = (0, s.TCT)(),
          c = (e) => (0, G.$B)('v2/assets/animations-assets/'.concat(e));
        function u(e, t) {
          return (0, n.BX)(et, {
            children: [
              (0, n.tZ)(er, { src: c(e), alt: t }),
              (0, n.tZ)(s.xvT.Body.XXXS.Regular, { children: t }),
            ],
          });
        }
        function p(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
            r = 0.05 * t;
          return (0, n.BX)('g', {
            children: [
              (0, n.tZ)('path', {
                d: 'M0.944336 8.5L4.94434 4.5L0.944336 0.5',
                stroke: d.colors.text.primary,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                transform: 'translate(-6 -5)',
              }),
              (0, n.tZ)('animate', {
                attributeName: 'opacity',
                values: '0; 1; 1; 0',
                keyTimes: '0; '.concat(r, '; ').concat(1 - r, '; 1'),
                dur: ''.concat(t, 's'),
                begin: ''.concat(e * t, 's'),
                repeatCount: 'indefinite',
              }),
              (0, n.tZ)('animateMotion', {
                dur: ''.concat(t, 's'),
                begin: ''.concat(e * t, 's'),
                repeatCount: 'indefinite',
                children: (0, n.tZ)('mpath', { href: '#arrow-path' }),
              }),
            ],
          });
        }
        return (0, n.BX)(ee, {
          children: [
            u(t, r),
            (0, n.BX)(en, {
              children: [
                (0, n.tZ)(ea, {
                  height: '20',
                  viewBox: '0 0 150 9',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  style: { transform: 'rotate('.concat('left' === i ? '180deg' : '0deg', ')') },
                  children: (0, n.BX)('g', {
                    opacity: '0.6',
                    children: [
                      (0, n.tZ)('path', {
                        d: 'M5 4.5L145 4.5',
                        id: 'arrow-path',
                        stroke: d.colors.text.primary,
                        strokeWidth: '1.25',
                        strokeLinecap: 'round',
                        strokeDasharray: '0.1 4',
                      }),
                      p(0),
                      p(0.5),
                    ],
                  }),
                }),
                (0, n.tZ)(el, { children: (0, n.tZ)(s.xvT.Body.XXXS.Regular, { children: o }) }),
              ],
            }),
            u(a, l),
          ],
        });
      }
      var eo = (0, o.memo)(function () {
          let { themeMode: e } = (0, s.TCT)(),
            t = (0, o.useRef)(null),
            { isRightPanelOpen: r } = (0, s.s8G)(),
            a = (0, o.useRef)(null);
          return (
            (0, o.useLayoutEffect)(() => {
              try {
                a.current = s.oYj.backgroundShader({ parent: t.current, paused: !r });
              } catch (e) {}
              return () => {
                var e, t;
                null === (t = a.current) ||
                  void 0 === t ||
                  null === (e = t.dispose) ||
                  void 0 === e ||
                  e.call(t);
              };
            }, []),
            (0, o.useLayoutEffect)(() => {
              var e, t;
              null === (t = a.current) ||
                void 0 === t ||
                null === (e = t.setPaused) ||
                void 0 === e ||
                e.call(t, !r);
            }, [r]),
            (0, o.useLayoutEffect)(() => {
              var t, r;
              null === (r = a.current) ||
                void 0 === r ||
                null === (t = r.setUniform) ||
                void 0 === t ||
                t.call(r, 'themeAmount', e === s.hYm.Dark ? 0 : 1);
            }, [e]),
            (0, n.tZ)(F, {
              children: (0, n.BX)(Q, {
                children: [
                  (0, n.tZ)(J, {
                    children: (0, n.BX)(s.xvT.Body.XS.Regular, {
                      children: [
                        'The Morpho Bundler lets you bundle multiple actions into one transaction.',
                        (0, n.tZ)('br', {}),
                        '\xa0',
                        (0, n.tZ)('br', {}),
                        'For example: use wstETH collateral to borrow USDC, and then supply USDC into a vault.',
                      ],
                    }),
                  }),
                  (0, n.tZ)(ei, {
                    leftImage: 'wsteth.png',
                    leftLabel: 'wstETH',
                    rightImage: 'coinstack.png',
                    rightLabel: 'Market A',
                    arrowDirection: 'right',
                    arrowLabel: 'Supply wstETH as collateral',
                  }),
                  (0, n.tZ)(ei, {
                    leftImage: 'usdc.png',
                    leftLabel: 'USDC',
                    rightImage: 'coinstack.png',
                    rightLabel: 'Market A',
                    arrowDirection: 'left',
                    arrowLabel: 'Borrow USDC',
                  }),
                  (0, n.tZ)(ei, {
                    leftImage: 'usdc.png',
                    leftLabel: 'USDC',
                    rightImage: 'vault.png',
                    rightLabel: 'Vault A',
                    arrowDirection: 'right',
                    arrowLabel: 'Supply USDC',
                  }),
                  (0, n.tZ)(Y, { ref: t }),
                ],
              }),
            })
          );
        }),
        es = r(53863),
        ed = r(70064),
        ec = r(82803),
        eu = r(51196),
        ep = (e) => {
          let { error: t, tokens: r, returnOnlyFormattedMessage: n } = e;
          return (0, o.useMemo)(() => {
            let e = (0, eu.getWrappedInstanceOf)(t, eu.Erc20Errors.InsufficientBalance);
            if (e) {
              let t =
                null == r ? void 0 : r.find((t) => (null == t ? void 0 : t.address) === e.token);
              return (null == t ? void 0 : t.symbol)
                ? 'Insufficient '.concat(null == t ? void 0 : t.symbol, ' balance')
                : 'Insufficient balance';
            }
            return n ? void 0 : null == t ? void 0 : t.message;
          }, [t, r, n]);
        };
      let eh = (0, y.Z)(s.Kqy, { target: 'e1bzc6kv0' })('height:100%;'),
        eg = (0, y.Z)(s.Kqy, { target: 'e1bzc6kv1' })('overflow-y:auto;height:100%;'),
        ev = (0, y.Z)('div', { target: 'e1bzc6kv2' })('padding:30px 0;'),
        em = (0, y.Z)(s.zxk, { target: 'e1bzc6kv3' })('width:100%;');
      var ey = r(94646),
        ef = r(73478),
        ex = r(35288),
        eb = r(89805),
        eZ = r(6423),
        ew = r(18721);
      let ek = (e, t, r) =>
          (0, o.useMemo)(() => {
            var n;
            return (
              !!(0, u.isDefined)(t) && (null === (n = e[t]) || void 0 === n ? void 0 : n.id) === r
            );
          }, [e, t, r]),
        eB = (0, y.Z)('div', { target: 'evdol50' })(
          'display:flex;flex-direction:column;gap:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.m;
          },
          ';padding:',
          (e) => {
            let { theme: t } = e;
            return ''.concat(t.padding.m, ' ').concat(t.padding.s);
          },
          ';background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.secondary;
          },
          ';border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';'
        );
      var eC = (0, o.memo)((e) => {
          let { text: t } = e;
          return t
            ? (0, n.tZ)(s.ua7, {
                content: (0, n.tZ)(s.xvT.Body.XXXS.Regular, {
                  wordBreak: 'break-all',
                  children: t,
                }),
                children: (0, n.BX)(s.Kqy, {
                  gap: 4,
                  style: { marginLeft: 'auto' },
                  align: 'center',
                  children: [
                    (0, n.tZ)(s.JO$, {
                      icon: 'AlertPlain20',
                      color: 'text.interactive.error',
                      size: 20,
                      padding: 2,
                    }),
                    (0, n.tZ)(s.xvT.Body.XXXS.Regular, {
                      color: 'text.interactive.error',
                      shortenByWidth: 220,
                      lineHeight: 'normal',
                      children: t,
                    }),
                  ],
                }),
              })
            : null;
        }),
        eA = r(4565),
        eX = r(725),
        eT = r(78017),
        eM = r(16820),
        eP = r(84030),
        eS = r(47528),
        eR = (0, o.memo)((e) => {
          var t, r, a;
          let {
              collateralAsset: l,
              loanAsset: i,
              market: d,
              localSimulationResult: c,
              userAddress: u,
              marketId: h,
            } = e,
            { initialData: g, finalData: v } = (0, eP.Z)(h, u, c),
            m = (0, eX.B9)({ lltv: null == d ? void 0 : d.lltv, marketId: h }),
            { targetChainId: y } = (0, p.Z_)(),
            f = (0, o.useMemo)(
              () =>
                s.$0l.short
                  .default('-')
                  .digits((0, s.QQD)(l.price, g.collateral))
                  .trailingZero(!g.collateral)
                  .of(g.collateral, l.decimals),
              [g.collateral, l.decimals, l.price]
            ),
            x = (0, o.useMemo)(
              () =>
                s.$0l.short
                  .digits((0, s.QQD)(l.price, null == v ? void 0 : v.collateral))
                  .trailingZero(!(null == v ? void 0 : v.collateral))
                  .of(null == v ? void 0 : v.collateral, l.decimals),
              [null == v ? void 0 : v.collateral, l.decimals, l.price]
            ),
            b = (0, o.useMemo)(
              () =>
                s.$0l.short
                  .digits((0, s.QQD)(i.price, g.loan))
                  .trailingZero(!g.loan)
                  .of(g.loan, i.decimals),
              [null == g ? void 0 : g.loan, i.decimals, i.price]
            ),
            Z = (0, o.useMemo)(
              () =>
                s.$0l.short
                  .digits((0, s.QQD)(i.price, null == v ? void 0 : v.loan))
                  .trailingZero(!(null == v ? void 0 : v.loan))
                  .of(null == v ? void 0 : v.loan, i.decimals),
              [null == v ? void 0 : v.loan, i.decimals, i.price]
            ),
            w = (0, o.useMemo)(() => {
              var e;
              return s.$0l.percent
                .default('0.00')
                .digits(2)
                .unit('%')
                .of(
                  null == d
                    ? void 0
                    : null === (e = d.state) || void 0 === e
                      ? void 0
                      : e.dailyNetBorrowApy
                );
            }, [
              null == d
                ? void 0
                : null === (t = d.state) || void 0 === t
                  ? void 0
                  : t.dailyNetBorrowApy,
            ]),
            k = (0, o.useMemo)(
              () => s.$0l.percent.unit('%').default('0%').digits(2).of(g.ltv, 18),
              [g.ltv]
            ),
            B = (0, o.useMemo)(() => s.$0l.percent.unit('%').digits(2).of(v.ltv, 18), [v.ltv]),
            C = (0, eS.H)(d),
            A = (0, s.$4C)({
              chainId: y,
              uniqueKey: h,
              collateralAddress: null == l ? void 0 : l.address,
            }),
            X = (0, o.useMemo)(() => {
              var e;
              return (0, eA.safeParseNumber)(
                (null == d
                  ? void 0
                  : null === (e = d.state) || void 0 === e
                    ? void 0
                    : e.dailyBorrowApy) || 0,
                18
              );
            }, [
              null == d
                ? void 0
                : null === (r = d.state) || void 0 === r
                  ? void 0
                  : r.dailyBorrowApy,
            ]),
            T = (0, o.useMemo)(
              () => null != g && !!g.ltv && !!m && (0, G.M4)(g.ltv, m),
              [null == g ? void 0 : g.ltv, m]
            ),
            M = (0, o.useMemo)(
              () => null != v && !!v.ltv && !!m && (0, G.M4)(v.ltv, m),
              [null == v ? void 0 : v.ltv, m]
            );
          return (0, n.BX)(s.Kqy, {
            gap: 4,
            direction: 'column',
            children: [
              (0, n.BX)(s.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: 'Borrow Rate',
                  }),
                  (0, n.tZ)(eT.w, {
                    RewardsHoverCardProps: {
                      apy: X,
                      rewards: C,
                      variant: 'market',
                      points: A,
                      netApy: (0, eM.Pi)(
                        null == d
                          ? void 0
                          : null === (a = d.state) || void 0 === a
                            ? void 0
                            : a.dailyNetBorrowApy,
                        eA.safeParseNumber
                      ),
                      asset: l,
                    },
                    children: (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                      color: 'text.body',
                      children: w,
                    }),
                  }),
                ],
              }),
              (0, n.BX)(s.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: (0, n.tZ)(eX.gX, { marketId: h }),
                  }),
                  (0, n.BX)(s.Kqy, {
                    gap: '2px',
                    align: 'center',
                    children: [
                      (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                        color: T ? 'text.interactive.error' : B ? 'text.tertiary' : 'text.body',
                        lineHeight: 'normal',
                        children: k,
                      }),
                      B &&
                        (0, n.BX)(n.HY, {
                          children: [
                            (0, n.tZ)(s.JO$, { icon: 'ArrowRightPlain20', color: 'icon.primary' }),
                            (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                              lineHeight: 'normal',
                              color: M ? 'text.interactive.error' : 'text.body',
                              children: B,
                            }),
                          ],
                        }),
                      (0, n.BX)(s.xvT.Body.XXS.Regular, {
                        lineHeight: 'normal',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px',
                        color: 'text.body',
                        children: [
                          (0, n.tZ)(s.xvT.Inherit, { children: '/' }),
                          (0, n.tZ)(eX.v1, { lltv: null == d ? void 0 : d.lltv, marketId: h }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.BX)(s.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: 'Collateral ('.concat(l.symbol, ')'),
                  }),
                  (0, n.BX)(s.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                        color: x ? 'text.tertiary' : 'text.body',
                        lineHeight: 'normal',
                        children: f,
                      }),
                      x &&
                        (0, n.BX)(n.HY, {
                          children: [
                            (0, n.tZ)(s.JO$, { icon: 'ArrowRightPlain20', color: 'icon.primary' }),
                            (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                              lineHeight: 'normal',
                              color: 'text.body',
                              children: x,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.BX)(s.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: 'Loan ('.concat(i.symbol, ')'),
                  }),
                  (0, n.BX)(s.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                        color: Z ? 'text.tertiary' : 'text.body',
                        lineHeight: 'normal',
                        children: b,
                      }),
                      Z &&
                        (0, n.BX)(n.HY, {
                          children: [
                            (0, n.tZ)(s.JO$, { icon: 'ArrowRightPlain20', color: 'icon.primary' }),
                            (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                              lineHeight: 'normal',
                              color: 'text.body',
                              children: Z,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        eI = r(36247),
        eE = (0, o.memo)((e) => {
          var t, r, a;
          let { marketId: l } = e,
            {
              updateOperation: i,
              operations: d,
              simulationError: c,
              bundlerConfiguration: u,
            } = (0, B.N)(),
            { targetChainId: h, targetChain: g } = (0, p.Z_)(),
            v = (0, eI.Zc)({ variables: { uniqueKey: l, chainId: h } }),
            {
              localOperation: m,
              inputCollateralAmount: y,
              setInputCollateralAmount: f,
              isMaxCollateral: x,
              setIsMaxCollateral: b,
              maxCollateral: Z,
              inputLoanAmount: w,
              setInputLoanAmount: k,
              isMaxLoan: C,
              setIsMaxLoan: A,
              maxLoan: X,
              peripheralTokenOptions: T,
              isNew: M,
              initialState: P,
              onPeripheralTokenOptionChange: S,
              showCollateralInput: R,
              showLoanInput: I,
              setShowCollateralInput: E,
              setShowLoanInput: q,
            } = (0, ew.f)(l, { origin: 'bundler' }),
            [K, , L] = (0, eb._)(P.data, m, u, M),
            z = (0, o.useCallback)(() => {
              i(m.id);
            }, [m.id, i]),
            H = (0, o.useCallback)(() => {
              if (!I) {
                z();
                return;
              }
              E(!1), f(0n);
            }, [E, f, z, I]),
            O = (0, o.useCallback)(() => {
              if (!R) {
                z();
                return;
              }
              q(!1), k(0n);
            }, [q, k, z, R]),
            D = null === (t = v.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            _ = (0, o.useMemo)(
              () => (0, G.wk)(null == D ? void 0 : D.collateralAsset),
              [null == D ? void 0 : D.collateralAsset]
            ),
            N = (0, o.useMemo)(
              () => (0, G.wk)(null == D ? void 0 : D.loanAsset),
              [null == D ? void 0 : D.loanAsset]
            ),
            V = (0, o.useMemo)(
              () =>
                s.$0l.percent
                  .unit('%')
                  .default('0%')
                  .trailingZero(!1)
                  .digits(2)
                  .of(null == D ? void 0 : D.lltv, 18),
              [null == D ? void 0 : D.lltv]
            ),
            U = ek(d, null == c ? void 0 : c.index, m.id),
            W = ep({ error: c, tokens: [_, N] });
          return v.loading
            ? (0, n.tZ)(s.OdW, { height: '542px', borderRadius: '20px' })
            : D && _ && N
              ? (0, n.BX)(eB, {
                  children: [
                    (0, n.BX)(s.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.BX)(s.Kqy, {
                          gap: 8,
                          align: 'center',
                          justify: 'space-between',
                          children: [
                            (0, n.tZ)(ef.h, {
                              href: (0, eZ.E3)({
                                chainName: g.name,
                                marketUniqueKey: l,
                                collateralSymbol:
                                  null !== (r = null == _ ? void 0 : _.symbol) && void 0 !== r
                                    ? r
                                    : '',
                                loanSymbol:
                                  null !== (a = null == N ? void 0 : N.symbol) && void 0 !== a
                                    ? a
                                    : '',
                              }),
                              children: (0, n.BX)(s.Kqy, {
                                gap: 'xs',
                                align: 'center',
                                children: [
                                  (0, n.tZ)(s._nw, {
                                    leftAvatarProps: { src: _.logoURI },
                                    rightAvatarProps: { src: D.loanAsset.logoURI },
                                    size: 'medium',
                                  }),
                                  (0, n.tZ)(s.xvT.Title.XS, {
                                    color: 'text.body',
                                    shorten: 1,
                                    lineHeight: 'normal',
                                    children: (0, s.lAJ)({
                                      loanAsset: D.loanAsset,
                                      collateralAsset: D.collateralAsset,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, n.tZ)(s.VfW, {
                              headerLabel: 'Remove transaction from Bundler?',
                              body: 'Closing this modal will remove this transaction from the Bundler.',
                              ctaLabel: 'Remove from Bundler',
                              cancelLabel: 'Cancel',
                              ctaAction: z,
                              children: (0, n.tZ)(s.zxk, {
                                variant: 'secondary',
                                size: 'small',
                                iconAlone: 'ClosePlain20',
                              }),
                            }),
                          ],
                        }),
                        (0, n.BX)(s.Kqy, {
                          gap: 4,
                          children: [
                            (0, n.tZ)(s.Vp9, {
                              variant: 'bundler',
                              children: (0, n.tZ)(s.xvT.Body.XXXS.Regular, {
                                lineHeight: 'normal',
                                color: 'text.body',
                                children: V,
                              }),
                            }),
                            (0, n.tZ)(ex.Z, {
                              tagProps: { variant: 'bundler' },
                              oracle: { address: D.oracleAddress, ...D.oracleFeed },
                              warnings: D.warnings,
                              typographyProps: { color: 'text.body' },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.BX)(s.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.BX)(s.Kqy, {
                          gap: 'm',
                          direction: 'column',
                          children: [
                            R &&
                              (0, n.tZ)(s.TGk, {
                                header: 'Supply Collateral',
                                amount: y,
                                token: _,
                                onChange: f,
                                maxValue: null == Z ? void 0 : Z.assets,
                                onMaxClick: b,
                                isMax: x,
                                onClose: H,
                                peripheralTokenOptions: T,
                                onPeripheralTokenChange: S,
                                islastInput: !I,
                              }),
                            I &&
                              (0, n.tZ)(s.TGk, {
                                header: 'Borrow '.concat(null == N ? void 0 : N.symbol),
                                amount: w,
                                token: N,
                                onChange: k,
                                maxValue: null == X ? void 0 : X.assets,
                                onMaxClick: A,
                                isMax: C,
                                onClose: O,
                                islastInput: !R,
                              }),
                          ],
                        }),
                        U && (0, n.tZ)(eC, { text: W }),
                      ],
                    }),
                    (0, n.tZ)(eR, {
                      collateralAsset: _,
                      loanAsset: N,
                      market: D,
                      localSimulationResult: K,
                      userAddress: L,
                      marketId: l,
                    }),
                  ],
                })
              : (0, n.tZ)(s.SKT, { height: '542px', text: 'Cannot display operation' });
        }),
        eq = r(91622),
        eK = (0, o.memo)((e) => {
          var t, r, a;
          let { marketId: l } = e,
            {
              updateOperation: i,
              operations: d,
              simulationError: c,
              bundlerConfiguration: u,
            } = (0, B.N)(),
            { targetChainId: h, targetChain: g } = (0, p.Z_)(),
            v = (0, eI.Zc)({ variables: { uniqueKey: l, chainId: h } }),
            {
              localOperation: m,
              inputCollateralAmount: y,
              setInputCollateralAmount: f,
              isMaxCollateral: x,
              setIsMaxCollateral: b,
              maxCollateral: Z,
              inputLoanAmount: w,
              setInputLoanAmount: k,
              isMaxLoan: C,
              setIsMaxLoan: A,
              maxLoan: X,
              peripheralTokenOptions: T,
              onPeripheralTokenOptionChange: M,
              isNew: P,
              initialState: S,
              showCollateralInput: R,
              showLoanInput: I,
              setShowCollateralInput: E,
              setShowLoanInput: q,
            } = (0, eq.O)(l, { origin: 'bundler' }),
            K = (0, o.useCallback)(() => {
              i(m.id);
            }, [m.id, i]),
            [L, , z] = (0, eb._)(S.data, m, u, P),
            H = (0, o.useCallback)(() => {
              if (!I) {
                K();
                return;
              }
              E(!1), f(0n);
            }, [E, f, K, I]),
            O = (0, o.useCallback)(() => {
              if (!R) {
                K();
                return;
              }
              q(!1), k(0n);
            }, [q, k, K, R]),
            D = null === (t = v.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            _ = (0, o.useMemo)(
              () => (0, G.wk)(null == D ? void 0 : D.collateralAsset),
              [null == D ? void 0 : D.collateralAsset]
            ),
            N = (0, o.useMemo)(
              () => (0, G.wk)(null == D ? void 0 : D.loanAsset),
              [null == D ? void 0 : D.loanAsset]
            ),
            V = (0, o.useMemo)(
              () =>
                s.$0l.percent
                  .unit('%')
                  .default('0%')
                  .trailingZero(!1)
                  .digits(2)
                  .of(null == D ? void 0 : D.lltv, 18),
              [null == D ? void 0 : D.lltv]
            ),
            U = ek(d, null == c ? void 0 : c.index, m.id),
            W = ep({ error: c, tokens: [_, N] });
          return v.loading
            ? (0, n.tZ)(s.OdW, { height: '542px', borderRadius: '20px' })
            : D && _ && N
              ? (0, n.BX)(eB, {
                  children: [
                    (0, n.BX)(s.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.BX)(s.Kqy, {
                          gap: 8,
                          align: 'center',
                          justify: 'space-between',
                          children: [
                            (0, n.tZ)(ef.h, {
                              href: (0, eZ.E3)({
                                chainName: g.name,
                                marketUniqueKey: l,
                                collateralSymbol:
                                  null !== (r = null == _ ? void 0 : _.symbol) && void 0 !== r
                                    ? r
                                    : '',
                                loanSymbol:
                                  null !== (a = null == N ? void 0 : N.symbol) && void 0 !== a
                                    ? a
                                    : '',
                              }),
                              children: (0, n.BX)(s.Kqy, {
                                gap: 'xs',
                                align: 'center',
                                children: [
                                  (0, n.tZ)(s._nw, {
                                    leftAvatarProps: { src: _.logoURI },
                                    rightAvatarProps: { src: D.loanAsset.logoURI },
                                    size: 'medium',
                                  }),
                                  (0, n.tZ)(s.xvT.Title.XS, {
                                    color: 'text.body',
                                    shorten: 1,
                                    lineHeight: 'normal',
                                    children: (0, s.lAJ)({
                                      loanAsset: D.loanAsset,
                                      collateralAsset: D.collateralAsset,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, n.tZ)(s.VfW, {
                              headerLabel: 'Remove transaction from Bundler?',
                              body: 'Closing this modal will remove this transaction from the Bundler.',
                              ctaLabel: 'Remove from Bundler',
                              cancelLabel: 'Cancel',
                              ctaAction: K,
                              children: (0, n.tZ)(s.zxk, {
                                variant: 'secondary',
                                size: 'small',
                                iconAlone: 'ClosePlain20',
                              }),
                            }),
                          ],
                        }),
                        (0, n.BX)(s.Kqy, {
                          gap: 4,
                          children: [
                            (0, n.tZ)(s.Vp9, {
                              variant: 'bundler',
                              children: (0, n.tZ)(s.xvT.Body.XXXS.Regular, {
                                lineHeight: 'normal',
                                color: 'text.body',
                                children: V,
                              }),
                            }),
                            (0, n.tZ)(ex.Z, {
                              tagProps: { variant: 'bundler' },
                              oracle: { address: D.oracleAddress, ...D.oracleFeed },
                              warnings: D.warnings,
                              typographyProps: { color: 'text.body' },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.BX)(s.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.BX)(s.Kqy, {
                          gap: 'm',
                          direction: 'column',
                          children: [
                            I &&
                              (0, n.tZ)(s.TGk, {
                                header: 'Repay '.concat(null == N ? void 0 : N.symbol),
                                amount: w,
                                token: N,
                                onChange: k,
                                maxValue: null == X ? void 0 : X.assets,
                                onMaxClick: A,
                                isMax: C,
                                onClose: O,
                                peripheralTokenOptions: T,
                                onPeripheralTokenChange: M,
                                islastInput: !R,
                              }),
                            R &&
                              (0, n.tZ)(s.TGk, {
                                header: 'Withdraw '.concat(null == _ ? void 0 : _.symbol),
                                amount: y,
                                token: _,
                                onChange: f,
                                maxValue: null == Z ? void 0 : Z.assets,
                                onMaxClick: b,
                                isMax: x,
                                onClose: H,
                                islastInput: !I,
                              }),
                          ],
                        }),
                        U && (0, n.tZ)(eC, { text: W }),
                      ],
                    }),
                    (0, n.tZ)(eR, {
                      collateralAsset: _,
                      loanAsset: N,
                      market: D,
                      localSimulationResult: L,
                      userAddress: z,
                      marketId: l,
                    }),
                  ],
                })
              : (0, n.tZ)(s.SKT, { height: '542px', text: 'Cannot display operation' });
        }),
        eL = r(48972),
        ez = r(55872),
        eH = r(9834),
        eO = r(73057),
        eD = r(83897),
        e_ = (0, o.memo)((e) => {
          var t, r, a, l, i, d;
          let {
              vaultAsset: c,
              vault: u,
              warnings: h,
              localSimulationResult: g,
              userAddress: v,
              vaultAddress: m,
            } = e,
            { initialData: y, finalData: f } = (0, eO.Z)(v, g, m, c),
            { targetChainId: x } = (0, p.Z_)(),
            b = (0, o.useMemo)(() => {
              var e;
              return (0, eH.m)(
                null == u ? void 0 : null === (e = u.state) || void 0 === e ? void 0 : e.allocation
              );
            }, [
              null == u ? void 0 : null === (t = u.state) || void 0 === t ? void 0 : t.allocation,
            ]),
            Z = (0, o.useMemo)(() => {
              if (h) return (0, s.Myy)(h);
            }, [h]),
            w = (0, o.useMemo)(
              () =>
                s.$0l.short
                  .default('-')
                  .digits((0, s.QQD)(c.price, null == y ? void 0 : y.position))
                  .trailingZero(!(null == y ? void 0 : y.position))
                  .of(null == y ? void 0 : y.position, c.decimals),
              [null == y ? void 0 : y.position, c.decimals, c.price]
            ),
            k = (0, o.useMemo)(
              () =>
                s.$0l.short
                  .digits((0, s.QQD)(c.price, null == f ? void 0 : f.position))
                  .trailingZero(!(null == f ? void 0 : f.position))
                  .of(null == f ? void 0 : f.position, c.decimals),
              [null == f ? void 0 : f.position, c.decimals, c.price]
            ),
            B = (0, o.useMemo)(() => {
              var e;
              return s.$0l.percent
                .default('0.00')
                .digits(2)
                .unit('%')
                .of(
                  null == u
                    ? void 0
                    : null === (e = u.state) || void 0 === e
                      ? void 0
                      : e.dailyNetApy
                );
            }, [
              null == u ? void 0 : null === (r = u.state) || void 0 === r ? void 0 : r.dailyNetApy,
            ]),
            C = (0, eD.M)(m, null == u ? void 0 : u.state, null == u ? void 0 : u.asset),
            A = (0, s.vmq)({
              chainId: x,
              vaultAddress: m,
              allocation:
                null == u ? void 0 : null === (a = u.state) || void 0 === a ? void 0 : a.allocation,
            });
          return (0, n.BX)(s.Kqy, {
            gap: 4,
            direction: 'column',
            children: [
              (0, n.BX)(s.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: 'Position ('.concat(c.symbol, ')'),
                  }),
                  (0, n.BX)(s.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                        color: 'text.tertiary',
                        lineHeight: 'normal',
                        children: w,
                      }),
                      k &&
                        (0, n.BX)(n.HY, {
                          children: [
                            (0, n.tZ)(s.JO$, { icon: 'ArrowRightPlain20', color: 'icon.tertiary' }),
                            (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                              color: 'text.body',
                              lineHeight: 'normal',
                              children: k,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.BX)(s.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(s.xvT.Body.XXS.Regular, { color: 'text.secondary', children: 'APY' }),
                  (0, n.tZ)(eT.w, {
                    RewardsHoverCardProps: {
                      performanceFee: (0, eM.Pi)(
                        null == u
                          ? void 0
                          : null === (l = u.state) || void 0 === l
                            ? void 0
                            : l.fee,
                        eA.safeParseNumber
                      ),
                      apy: (0, eM.Pi)(
                        null == u
                          ? void 0
                          : null === (i = u.state) || void 0 === i
                            ? void 0
                            : i.dailyApy,
                        eA.safeParseNumber
                      ),
                      netApy: (0, eM.Pi)(
                        null == u
                          ? void 0
                          : null === (d = u.state) || void 0 === d
                            ? void 0
                            : d.dailyNetApy,
                        eA.safeParseNumber
                      ),
                      rewards: C,
                      variant: 'vault',
                      points: A,
                      asset: (0, G.wk)(null == u ? void 0 : u.asset),
                    },
                    children: (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                      lineHeight: 'normal',
                      color: 'text.body',
                      children: B,
                    }),
                  }),
                ],
              }),
              (0, n.BX)(s.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(s.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: 'Collateral Exposure',
                  }),
                  (0, n.tZ)(s.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: (0, n.tZ)(ez.m, {
                      collateralExposures: b,
                      extraInfo: Z && (0, n.tZ)(s.aNP, { ...Z }),
                      align: 'right',
                      targetChainId: x,
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        eN = r(99153),
        eV = (0, o.memo)((e) => {
          var t, r, a, l, i;
          let { vaultAddress: d } = e,
            {
              updateOperation: c,
              operations: u,
              simulationError: h,
              bundlerConfiguration: g,
            } = (0, B.N)(),
            { targetChainId: v, targetChain: m } = (0, p.Z_)(),
            y = (0, eN.eg)({ variables: { address: d, chainId: v } }),
            f = null === (t = y.data) || void 0 === t ? void 0 : t.vaultByAddress,
            x = (0, o.useMemo)(
              () => (0, G.wk)(null == f ? void 0 : f.asset),
              [null == f ? void 0 : f.asset]
            ),
            {
              localOperation: b,
              inputAmount: Z,
              setInputAmount: w,
              isMax: k,
              setIsMax: C,
              maxAmount: A,
              isNew: X,
              initialState: T,
            } = (0, eL.L)(d, { origin: 'bundler' }),
            [M, , P] = (0, eb._)(T.data, b, g, X),
            S = (0, o.useCallback)(() => {
              c(b.id);
            }, [b.id, c]),
            R = ek(u, null == h ? void 0 : h.index, b.id),
            I = ep({ error: h, tokens: [x] });
          return y.loading
            ? (0, n.tZ)(s.OdW, { height: '365px', borderRadius: '20px' })
            : f
              ? (0, n.BX)(eB, {
                  children: [
                    (0, n.BX)(s.Kqy, {
                      gap: 8,
                      align: 'center',
                      justify: 'space-between',
                      children: [
                        (0, n.tZ)(ef.h, {
                          href: (0, eZ.Q)({
                            chainName: m.name,
                            vaultAddress: d,
                            vaultName:
                              null !==
                                (i =
                                  null === (r = y.data) || void 0 === r
                                    ? void 0
                                    : r.vaultByAddress.name) && void 0 !== i
                                ? i
                                : '',
                          }),
                          children: (0, n.BX)(s.Kqy, {
                            gap: 'xs',
                            align: 'center',
                            children: [
                              (0, n.tZ)(s.qEK, { src: f.asset.logoURI, size: 'medium' }),
                              (0, n.tZ)(s.xvT.Title.XS, {
                                color: 'text.body',
                                shorten: 1,
                                lineHeight: 'normal',
                                children: f.name,
                              }),
                            ],
                          }),
                        }),
                        (0, n.tZ)(s.VfW, {
                          headerLabel: 'Remove transaction from Bundler?',
                          body: 'Closing this modal will remove this transaction from the Bundler.',
                          ctaLabel: 'Remove from Bundler',
                          cancelLabel: 'Cancel',
                          ctaAction: S,
                          children: (0, n.tZ)(s.zxk, {
                            variant: 'secondary',
                            size: 'small',
                            iconAlone: 'ClosePlain20',
                          }),
                        }),
                      ],
                    }),
                    (0, n.BX)(s.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.tZ)(s.TGk, {
                          header: 'Withdraw '.concat(null == f ? void 0 : f.asset.symbol),
                          amount: Z,
                          token: x,
                          onChange: w,
                          isMax: k,
                          maxValue: A,
                          onMaxClick: C,
                        }),
                        R && (0, n.tZ)(eC, { text: I }),
                      ],
                    }),
                    (0, n.tZ)(e_, {
                      vaultAsset: x,
                      vault: null === (a = y.data) || void 0 === a ? void 0 : a.vaultByAddress,
                      warnings:
                        null === (l = y.data) || void 0 === l ? void 0 : l.vaultByAddress.warnings,
                      localSimulationResult: M,
                      userAddress: P,
                      vaultAddress: d,
                    }),
                  ],
                })
              : (0, n.tZ)(s.SKT, { height: '365px', text: 'Cannot display operation' });
        }),
        eU = r(71021),
        eW = (0, o.memo)((e) => {
          var t, r, a, l, i;
          let { vaultAddress: d } = e,
            {
              updateOperation: c,
              operations: u,
              simulationError: h,
              bundlerConfiguration: g,
            } = (0, B.N)(),
            { targetChainId: v, targetChain: m } = (0, p.Z_)(),
            y = (0, eN.eg)({ variables: { address: d, chainId: v } }),
            f = null === (t = y.data) || void 0 === t ? void 0 : t.vaultByAddress,
            x = (0, o.useMemo)(
              () => (0, G.wk)(null == f ? void 0 : f.asset),
              [null == f ? void 0 : f.asset]
            ),
            {
              localOperation: b,
              inputAmount: Z,
              setInputAmount: w,
              isMax: k,
              isNew: C,
              setIsMax: A,
              maxAmount: X,
              peripheralTokenOptions: T,
              initialState: M,
              onPeripheralTokenOptionChange: P,
            } = (0, eU.o)(d, { origin: 'bundler' }),
            [S, , R] = (0, eb._)(M.data, b, g, C),
            I = (0, o.useCallback)(() => {
              c(b.id);
            }, [b.id, c]),
            E = ek(u, null == h ? void 0 : h.index, b.id),
            q = ep({ error: h, tokens: [x] });
          return y.loading
            ? (0, n.tZ)(s.OdW, { height: '365px', borderRadius: '20px' })
            : f
              ? (0, n.BX)(eB, {
                  children: [
                    (0, n.BX)(s.Kqy, {
                      gap: 8,
                      align: 'center',
                      justify: 'space-between',
                      children: [
                        (0, n.tZ)(ef.h, {
                          href: (0, eZ.Q)({
                            chainName: m.name,
                            vaultAddress: d,
                            vaultName:
                              null !==
                                (i =
                                  null === (r = y.data) || void 0 === r
                                    ? void 0
                                    : r.vaultByAddress.name) && void 0 !== i
                                ? i
                                : '',
                          }),
                          children: (0, n.BX)(s.Kqy, {
                            gap: 'xs',
                            align: 'center',
                            children: [
                              (0, n.tZ)(s.qEK, { src: f.asset.logoURI, size: 'medium' }),
                              (0, n.tZ)(s.xvT.Title.XS, {
                                color: 'text.body',
                                shorten: 1,
                                lineHeight: 'normal',
                                children: f.name,
                              }),
                            ],
                          }),
                        }),
                        (0, n.tZ)(s.VfW, {
                          headerLabel: 'Remove transaction from Bundler?',
                          body: 'Closing this modal will remove this transaction from the Bundler.',
                          ctaLabel: 'Remove from Bundler',
                          cancelLabel: 'Cancel',
                          ctaAction: I,
                          children: (0, n.tZ)(s.zxk, {
                            variant: 'secondary',
                            size: 'small',
                            iconAlone: 'ClosePlain20',
                          }),
                        }),
                      ],
                    }),
                    (0, n.BX)(s.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.tZ)(s.TGk, {
                          header: 'Deposit '.concat(null == f ? void 0 : f.asset.symbol),
                          amount: Z,
                          token: x,
                          onChange: w,
                          isMax: k,
                          maxValue: X,
                          onMaxClick: A,
                          peripheralTokenOptions: T,
                          onPeripheralTokenChange: P,
                        }),
                        E && (0, n.tZ)(eC, { text: q }),
                      ],
                    }),
                    (0, n.tZ)(e_, {
                      vaultAsset: x,
                      vault: null === (a = y.data) || void 0 === a ? void 0 : a.vaultByAddress,
                      warnings:
                        null === (l = y.data) || void 0 === l ? void 0 : l.vaultByAddress.warnings,
                      localSimulationResult: S,
                      userAddress: R,
                      vaultAddress: d,
                    }),
                  ],
                })
              : (0, n.tZ)(s.SKT, { height: '365px', text: 'Cannot display operation' });
        }),
        ej = r(91794),
        e$ = r(19311),
        eG = r(40252);
      let eF = (e) => s.$0l.percent.digits(2).trailingZero(!1).unit('%').default('-').of(e, 18);
      var eQ = (0, o.memo)((e) => {
          var t, r, a, l, i, d, c, h, g, v, m, y, f, x, b, Z, w, k, B;
          let {
              loading: C,
              apiMarket: A,
              initialMarketData: X,
              finalMarketData: T,
              initialPosition: M,
              previewedMarket: P,
              previewedPosition: S,
              errors: R,
            } = e,
            { targetChain: I, targetChainId: E } = (0, p.Z_)(),
            q = (0, eX.B9)({
              lltv: null == A ? void 0 : A.lltv,
              marketId: null == A ? void 0 : A.uniqueKey,
            }),
            K = (0, eS.H)(A),
            L = (0, s.$4C)({
              chainId: E,
              uniqueKey: null == A ? void 0 : A.uniqueKey,
              collateralAddress:
                null == A
                  ? void 0
                  : null === (t = A.collateralAsset) || void 0 === t
                    ? void 0
                    : t.address,
            }),
            z = (0, o.useMemo)(
              () => !!X && null != M && !!M.ltv && !!q && (0, G.M4)(M.ltv, q),
              [M, X, q]
            ),
            H = (0, o.useMemo)(() => {
              var e;
              return s.$0l.percent
                .default('0.00')
                .digits(2)
                .unit('%')
                .of(
                  null == A
                    ? void 0
                    : null === (e = A.state) || void 0 === e
                      ? void 0
                      : e.dailyNetBorrowApy
                );
            }, [
              null == A
                ? void 0
                : null === (r = A.state) || void 0 === r
                  ? void 0
                  : r.dailyNetBorrowApy,
            ]);
          return C
            ? (0, n.tZ)(s.OdW, { height: '542px', borderRadius: '20px' })
            : A && A.collateralAsset
              ? (0, n.BX)(eB, {
                  children: [
                    (0, n.BX)(s.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.tZ)(s.Kqy, {
                          gap: 8,
                          align: 'center',
                          justify: 'space-between',
                          children: (0, n.tZ)(ef.h, {
                            href: (0, eZ.E3)({
                              chainName: I.name,
                              marketUniqueKey: A.uniqueKey,
                              collateralSymbol:
                                null === (a = A.collateralAsset) || void 0 === a
                                  ? void 0
                                  : a.symbol,
                              loanSymbol: A.loanAsset.symbol,
                            }),
                            children: (0, n.BX)(s.Kqy, {
                              gap: 'xs',
                              align: 'center',
                              children: [
                                (0, n.tZ)(s._nw, {
                                  leftAvatarProps: {
                                    src:
                                      null === (l = A.collateralAsset) || void 0 === l
                                        ? void 0
                                        : l.logoURI,
                                  },
                                  rightAvatarProps: { src: A.loanAsset.logoURI },
                                  size: 'medium',
                                }),
                                (0, n.tZ)(s.xvT.Title.XS, {
                                  color: 'text.body',
                                  shorten: 1,
                                  lineHeight: 'normal',
                                  children: (0, s.lAJ)({
                                    loanAsset: A.loanAsset,
                                    collateralAsset: A.collateralAsset,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, n.BX)(s.Kqy, {
                          gap: 4,
                          children: [
                            (0, n.tZ)(s.Vp9, {
                              variant: 'bundler',
                              children: (0, n.tZ)(s.xvT.Body.XXXS.Regular, {
                                lineHeight: 'normal',
                                color: 'text.body',
                                children: eF(null == X ? void 0 : X.params.lltv),
                              }),
                            }),
                            (0, n.tZ)(ex.Z, {
                              tagProps: { variant: 'bundler' },
                              oracle: { address: A.oracleAddress, ...A.oracleFeed },
                              warnings: A.warnings,
                              typographyProps: { color: 'text.body' },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.BX)(s.soA.List, {
                      children: [
                        (0, n.tZ)(s.soA.ListItem, {
                          label: 'Borrow Rate',
                          value: (0, n.tZ)(eT.w, {
                            RewardsHoverCardProps: {
                              performanceFee: (0, eM.Pi)(
                                null === (i = A.state) || void 0 === i ? void 0 : i.fee,
                                eA.safeParseNumber
                              ),
                              apy: (0, eM.Pi)(
                                null === (d = A.state) || void 0 === d ? void 0 : d.dailyBorrowApy,
                                eA.safeParseNumber
                              ),
                              rewards: K,
                              variant: 'market',
                              points: L,
                              asset: A.collateralAsset,
                              netApy: (0, eM.Pi)(
                                null === (c = A.state) || void 0 === c
                                  ? void 0
                                  : c.dailyNetBorrowApy,
                                eA.safeParseNumber
                              ),
                            },
                            children: (0, n.tZ)(s.soA.Value, { value: H }),
                          }),
                        }),
                        (0, n.tZ)(s.soA.ListItem, {
                          warning: R.ltvError,
                          label: (0, n.tZ)(eX.gX, { marketId: A.uniqueKey }),
                          value: (0, n.BX)(s.Kqy, {
                            direction: 'row',
                            align: 'center',
                            gap: '2px',
                            children: [
                              (0, n.tZ)(s.soA.ValueChange, {
                                initialProps: {
                                  value: null == M ? void 0 : M.ltv,
                                  typographyProps: {
                                    color: z ? 'text.interactive.error' : 'text.tertiary',
                                  },
                                },
                                finalProps: {
                                  value: (0, u.getValue)(S, 'ltv'),
                                  typographyProps: {
                                    color:
                                      null !==
                                        (f =
                                          null === (h = R.ltvError) || void 0 === h
                                            ? void 0
                                            : h.color) && void 0 !== f
                                        ? f
                                        : 'text.body',
                                  },
                                },
                                formatter: (e) =>
                                  s.$0l.percent
                                    .unit('%')
                                    .trailingZero(!1)
                                    .digits(2)
                                    .max(1)
                                    .of(e, 18),
                              }),
                              (0, n.BX)(s.xvT.Body.XXS.Regular, {
                                display: 'flex',
                                alignItems: 'center',
                                lineHeight: 'normal',
                                gap: '2px',
                                children: [
                                  (0, n.tZ)(s.xvT.Inherit, { children: '/' }),
                                  (0, n.tZ)(eX.v1, {
                                    lltv: null == X ? void 0 : X.params.lltv,
                                    marketId: A.uniqueKey,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, n.tZ)(s.soA.ListItem, {
                          warning: R.collateralError,
                          label: 'Collateral ('.concat(
                            (0, u.formatLongString)(
                              null !==
                                (x =
                                  null === (g = A.collateralAsset) || void 0 === g
                                    ? void 0
                                    : g.symbol) && void 0 !== x
                                ? x
                                : ''
                            ),
                            ')'
                          ),
                          value: (0, n.tZ)(s.soA.ValueChange, {
                            initialProps: { value: (0, u.getValue)(M, 'collateral') },
                            finalProps: {
                              value: (0, u.getValue)(S, 'collateral'),
                              typographyProps: {
                                color:
                                  null !==
                                    (b =
                                      null === (v = R.collateralError) || void 0 === v
                                        ? void 0
                                        : v.color) && void 0 !== b
                                    ? b
                                    : 'text.body',
                              },
                            },
                            formatter: (e) => {
                              var t, r;
                              return s.$0l.commas
                                .digits(2)
                                .trailingZero(!1)
                                .of(
                                  e,
                                  null !==
                                    (r =
                                      null === (t = A.collateralAsset) || void 0 === t
                                        ? void 0
                                        : t.decimals) && void 0 !== r
                                    ? r
                                    : 18
                                );
                            },
                          }),
                        }),
                        (0, n.tZ)(s.soA.ListItem, {
                          warning: R.borrowError,
                          label: 'Loan ('.concat(
                            (0, u.formatLongString)(
                              null !== (Z = A.loanAsset.symbol) && void 0 !== Z ? Z : ''
                            ),
                            ')'
                          ),
                          value: (0, n.tZ)(s.soA.ValueChange, {
                            initialProps: { value: (0, u.getValue)(M, 'borrowAssets') },
                            finalProps: {
                              value: (0, u.getValue)(S, 'borrowAssets'),
                              typographyProps: {
                                color:
                                  null !==
                                    (w =
                                      null === (m = R.borrowError) || void 0 === m
                                        ? void 0
                                        : m.color) && void 0 !== w
                                    ? w
                                    : 'text.body',
                              },
                            },
                            formatter: (e) =>
                              s.$0l.commas.digits(2).trailingZero(!1).of(e, A.loanAsset.decimals),
                          }),
                        }),
                        (0, n.tZ)(s.soA.ListItem, {
                          warning: R.liquidityError,
                          label: 'Liquidity ('.concat(
                            (0, u.formatLongString)(
                              null !== (k = A.loanAsset.symbol) && void 0 !== k ? k : ''
                            ),
                            ')'
                          ),
                          value: (0, n.tZ)(s.soA.ValueChange, {
                            initialProps: {
                              value: (0, u.transformValue)(
                                (0, u.getValue)(X, 'liquidity'),
                                eG.MathLib.max.bind(void 0, 0n)
                              ),
                            },
                            finalProps: {
                              value: (0, u.transformValue)(
                                (0, u.getValue)(null != T ? T : P, 'liquidity'),
                                eG.MathLib.max.bind(void 0, 0n)
                              ),
                              typographyProps: {
                                color:
                                  null !==
                                    (B =
                                      null === (y = R.liquidityError) || void 0 === y
                                        ? void 0
                                        : y.color) && void 0 !== B
                                    ? B
                                    : 'text.body',
                              },
                            },
                            formatter: (e) =>
                              s.$0l.commas.digits(2).trailingZero(!1).of(e, A.loanAsset.decimals),
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : (0, n.tZ)(s.SKT, { height: '542px', text: 'Cannot display operation' });
        }),
        eY = r(82196),
        eJ = (0, o.memo)((e) => {
          var t, r, a, l, i;
          let { operation: d } = e,
            {
              updateOperation: c,
              bundlerConfiguration: u,
              simulationError: h,
              operations: g,
            } = (0, B.N)(),
            { targetChainId: v } = (0, p.Z_)(),
            m = (0, eY.Pm)({
              variables: { where: { uniqueKey_in: [d.marketId, d.marketTo], chainId_in: [v] } },
            }),
            y = (0, o.useMemo)(() => {
              var e, t, r;
              return (0, G.wk)(
                null === (r = m.data) || void 0 === r
                  ? void 0
                  : null === (t = r.markets.items) || void 0 === t
                    ? void 0
                    : null === (e = t[0]) || void 0 === e
                      ? void 0
                      : e.collateralAsset
              );
            }, [null === (t = m.data) || void 0 === t ? void 0 : t.markets.items]),
            f = (0, o.useMemo)(() => {
              var e, t, r;
              return (0, G.wk)(
                null === (r = m.data) || void 0 === r
                  ? void 0
                  : null === (t = r.markets.items) || void 0 === t
                    ? void 0
                    : null === (e = t[0]) || void 0 === e
                      ? void 0
                      : e.loanAsset
              );
            }, [null === (r = m.data) || void 0 === r ? void 0 : r.markets.items]),
            x = (0, o.useMemo)(() => {
              var e, t;
              return null === (t = m.data) || void 0 === t
                ? void 0
                : null === (e = t.markets.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.uniqueKey === d.marketId);
            }, [null === (a = m.data) || void 0 === a ? void 0 : a.markets.items, d.marketId]),
            b = (0, o.useMemo)(() => {
              var e, t;
              return null === (t = m.data) || void 0 === t
                ? void 0
                : null === (e = t.markets.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.uniqueKey === d.marketTo);
            }, [null === (l = m.data) || void 0 === l ? void 0 : l.markets.items, d.marketTo]),
            {
              localOperation: Z,
              isNew: w,
              isLoading: k,
              initialState: C,
              inputCollateralAmount: A,
              inputBorrowAmount: X,
              isMaxCollateral: T,
              isMaxBorrow: M,
              maxBorrowAmount: P,
              setInputCollateralAmount: S,
              setInputBorrowAmount: R,
              setIsMaxCollateral: I,
              setIsMaxBorrow: E,
            } = (0, ej.p)({
              marketFrom: d.marketId,
              marketTo: d.marketTo,
              initialOperation: d,
              options: { autoConfirm: !0 },
            }),
            [q] = (0, eb._)(C.data, Z, u, w),
            [K, L] = null != q ? q : [],
            z = (0, e$.g)({ marketId: d.marketId, initialState: K, finalState: L, operation: Z }),
            H = (0, e$.g)({
              marketId: d.marketTo,
              initialState: K,
              finalState: L,
              operation: Z,
              isNewMarket: !0,
            }),
            O = ep({ error: h, tokens: [y, f] }),
            D = ek(g, null == h ? void 0 : h.index, Z.id),
            _ = (0, o.useCallback)(() => {
              c(Z.id);
            }, [Z.id, c]);
          return (0, n.tZ)(eB, {
            children: (0, n.BX)(s.Kqy, {
              gap: 'm',
              direction: 'column',
              children: [
                (0, n.BX)(s.Kqy, {
                  gap: 8,
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(s.xvT.Title.XS, { children: 'Refinance Position' }),
                    (0, n.tZ)(s.VfW, {
                      headerLabel: 'Remove transaction from Bundler?',
                      body: 'Closing this modal will remove this transaction from the Bundler.',
                      ctaLabel: 'Remove from Bundler',
                      cancelLabel: 'Cancel',
                      ctaAction: _,
                      children: (0, n.tZ)(s.zxk, {
                        variant: 'secondary',
                        size: 'small',
                        iconAlone: 'ClosePlain20',
                      }),
                    }),
                  ],
                }),
                (0, n.BX)(s.Kqy, {
                  gap: 8,
                  direction: 'column',
                  children: [
                    (0, n.BX)(s.Kqy, {
                      gap: 'm',
                      direction: 'column',
                      children: [
                        m.loading || !y
                          ? (0, n.tZ)(s.OdW, {
                              width: '100%',
                              height: '115px',
                              borderRadius: '20px',
                            })
                          : (0, n.tZ)(s.TGk, {
                              fullWidth: !0,
                              token: y,
                              amount: A,
                              onChange: S,
                              header: 'Collateral amount',
                              maxValue:
                                null === (i = z.initialPosition) || void 0 === i
                                  ? void 0
                                  : i.collateral,
                              onMaxClick: I,
                              isMax: T,
                              disabled: k,
                            }),
                        m.loading || !f
                          ? (0, n.tZ)(s.OdW, {
                              width: '100%',
                              height: '115px',
                              borderRadius: '20px',
                            })
                          : (0, n.tZ)(s.TGk, {
                              fullWidth: !0,
                              token: f,
                              amount: X,
                              onChange: R,
                              header: 'Loan amount',
                              maxValue: null == P ? void 0 : P.assets,
                              onMaxClick: E,
                              isMax: M,
                              disabled: k,
                            }),
                      ],
                    }),
                    D && (0, n.tZ)(eC, { text: O }),
                  ],
                }),
                (0, n.BX)(s.Kqy, {
                  gap: 8,
                  direction: 'column',
                  children: [
                    (0, n.tZ)(eQ, { loading: m.loading, apiMarket: x, ...z }),
                    (0, n.tZ)(s.Kqy, {
                      direction: 'row',
                      justify: 'center',
                      children: (0, n.tZ)(s.zxk, {
                        variant: 'secondary',
                        size: 'default',
                        iconAlone: 'ArrowRightPlain20',
                        style: { transform: 'rotate(90deg)', pointerEvents: 'none' },
                      }),
                    }),
                    (0, n.tZ)(eQ, { loading: m.loading, apiMarket: b, ...H }),
                  ],
                }),
              ],
            }),
          });
        });
      let e0 = (e) => {
        let { operation: t } = e;
        switch (t.type) {
          case ec.H.InterfaceOperationType.metaMorphoDeposit:
            return (0, n.tZ)(eW, { vaultAddress: t.vaultAddress });
          case ec.H.InterfaceOperationType.metaMorphoWithdraw:
            return (0, n.tZ)(eV, { vaultAddress: t.vaultAddress });
          case ec.H.InterfaceOperationType.supplyCollateralBorrow:
            return (0, n.tZ)(eE, { marketId: t.marketId });
          case ec.H.InterfaceOperationType.withdrawCollateralRepay:
            return (0, n.tZ)(eK, { marketId: t.marketId });
          case ec.H.InterfaceOperationType.zap:
            return (0, n.tZ)(eJ, { operation: t });
          default:
            return (0, n.tZ)(s.xvT.Label.M, { children: 'Unsupported Operation' });
        }
      };
      var e1 = (0, o.memo)(() => {
          let { operations: e, simulationError: t, resetOperations: r } = (0, B.N)(),
            { isOpen: a, toggleDialog: l } = (0, s.DAv)(),
            { toggleRightPanel: i } = (0, s.s8G)(),
            d = (0, o.useRef)(null),
            c = (0, o.useRef)(0),
            u = (0, o.useRef)(null),
            { account: h } = (0, p.Z_)(),
            g = (0, j.useRouter)(),
            v = (0, j.usePathname)(),
            m = (0, o.useRef)(void 0);
          (0, o.useEffect)(() => {
            i(!1);
          }, [v, i]),
            (0, o.useEffect)(() => {
              h.address || (r(), i(!1)),
                h.address &&
                  m.current &&
                  !(0, $.E)(m.current, h.address) &&
                  window.location.reload(),
                (m.current = h.address);
            }, [h.address, r, i, g]);
          let y = ep({ error: t, returnOnlyFormattedMessage: !0 }),
            f = (0, o.useCallback)(() => {
              d.current &&
                requestAnimationFrame(() => {
                  var e;
                  null === (e = d.current) ||
                    void 0 === e ||
                    e.scrollTo({ top: d.current.scrollHeight, behavior: 'smooth' });
                });
            }, []);
          return (
            (0, o.useEffect)(
              () => (
                e.length > c.current &&
                  (u.current = setTimeout(() => {
                    f();
                  }, 100)),
                (c.current = e.length),
                () => {
                  u.current && clearTimeout(u.current);
                }
              ),
              [e.length, f]
            ),
            (0, n.tZ)(ed.K, {
              fallback: (0, n.tZ)(es.c, { minHeight: '400px' }),
              children: (0, n.BX)(eh, {
                'data-testid': 'bundler-container',
                direction: 'column',
                align: 'stretch',
                children: [
                  (0, n.BX)(eg, {
                    ref: d,
                    direction: 'column',
                    gap: 16,
                    align: 'stretch',
                    children: [
                      0 === e.length && (0, n.tZ)(eo, {}),
                      e.map((e) => (0, n.tZ)(e0, { operation: e }, e.id)),
                    ],
                  }),
                  (0, n.tZ)(ev, {
                    children: (0, n.tZ)(em, {
                      label: null != y ? y : 'Review',
                      size: 'large',
                      disabled: a || !!t || 0 === e.length,
                      onClick: () => l((0, n.tZ)(ey.Z, { operations: e })),
                      'data-testid': 'bundler-finalize-button',
                    }),
                  }),
                ],
              }),
            })
          );
        }),
        e2 = r(66888);
      let e5 = (0, o.lazy)(() => r.e(898).then(r.bind(r, 40898)));
      var e4 = (0, o.memo)((e) => {
          let { children: t } = e,
            r = (0, v.nh)(v.TP.SIMULATION_STATE_VIEWER);
          return (0, n.BX)(s.RQC, {
            navBar: (0, n.tZ)(W, {}),
            bundler: (0, n.tZ)(e1, {}),
            children: [(0, n.tZ)(e2.Z, {}), t, r && (0, n.tZ)(e5, {})],
          });
        }),
        e8 = r(4366),
        e6 = r(62239),
        e3 = r(62788),
        e7 = r(73866),
        e9 = r(58321);
      let te = (0, o.createContext)(null);
      var tt = (e) => {
          let { children: t } = e,
            { dialogs: r } = (0, e9.il)(),
            { toggleDialog: a, isOpen: l } = (0, s.DAv)(),
            { isServiceUnavailableDialogOpen: i } = (0, e3.J1)();
          return (
            (0, o.useEffect)(() => {
              let { dialog: e } = (0, e7.F)(r);
              e && a(null == e ? void 0 : e.component, null == e ? void 0 : e.dialogOptions);
            }, [r, a]),
            (0, o.useEffect)(() => {
              i && !l && a((0, n.tZ)(e6.dm, {}), { closable: !1, maxWidth: '400px' });
            }, [i, a, l]),
            (0, n.tZ)(te.Provider, { value: {}, children: t })
          );
        },
        tr = (0, o.memo)((e) => {
          let { children: t } = e;
          return (0, n.tZ)(e9.ZP, {
            children: (0, n.tZ)(s.re2, { children: (0, n.tZ)(tt, { children: t }) }),
          });
        }),
        tn = r(34895),
        ta = r(99095),
        tl = r(55694),
        ti = r(98949),
        to = r(68906),
        ts = r(3918),
        td = r(23403),
        tc = r(78676),
        tu = r.n(tc),
        tp = r(36396),
        th = r(91988),
        tg = r(45933),
        tv = r(50577),
        tm = r(77404),
        ty = r(17965);
      BigInt.prototype.toJSON = function () {
        return this.toString();
      };
      let tf = new tm.h({ typePolicies: ty.typePolicies }),
        tx = (function () {
          let e = k.clientEnvs.NEXT_PUBLIC_BLUE_API_URL,
            t = (0, tv.N)({
              sha256: (e) => tu().createHash('sha256').update(e).digest('hex'),
              useGETForHashedQueries: !0,
            }).concat(new tp.u({ uri: e })),
            r = new tp.u({ uri: 'https://base.easscan.org/graphql' });
          return new th.f({
            link: tg.i.split((e) => 'linkEasscan' === e.getContext().clientName, r, t),
            cache: tf,
          });
        })();
      function tb(e) {
        let { children: t } = e;
        return (0, n.tZ)(td.e, { client: tx, children: t });
      }
      var tZ = r(86876);
      let tw = (0, r(42729).default)(() => Promise.resolve().then(r.bind(r, 85475)), {
        loadableGenerated: { webpack: () => [85475] },
        ssr: !1,
      });
      var tk = (e) => {
          let { children: t, cookies: r } = e,
            { displayToast: a } = (0, s.V6$)(),
            l = (0, o.useCallback)(
              (e) => {
                e.type === p.UK.success &&
                  a({
                    description: 'Wallet network successfully switched to '.concat(
                      e.chain.name,
                      '.'
                    ),
                    notificationStatus: s.EzR.success,
                    duration: 1200,
                  });
              },
              [a]
            );
          return (0, n.tZ)(tw, { cookies: r, onSetTargetChainEvent: l, children: t });
        },
        tB = () =>
          (0, n.tZ)(s.Kqy, {
            direction: 'column',
            align: 'center',
            justify: 'center',
            gap: 'm',
            grow: 1,
            width: '100vw',
            height: '100vh',
            children: (0, n.BX)(s.Kqy, {
              direction: 'column',
              align: 'center',
              justify: 'center',
              gap: 's',
              children: [
                (0, n.tZ)(s.JO$, { icon: 'MorphoPlain20', size: 46 }),
                (0, n.BX)(s.Kqy, {
                  direction: 'column',
                  align: 'center',
                  justify: 'center',
                  gap: 'm',
                  grow: 1,
                  maxWidth: '400px',
                  children: [
                    (0, n.BX)(s.Kqy, {
                      direction: 'column',
                      align: 'center',
                      justify: 'center',
                      gap: 's',
                      children: [
                        (0, n.BX)(s.Kqy, {
                          align: 'center',
                          gap: 6,
                          children: [
                            (0, n.tZ)(s.JO$, {
                              icon: 'AlertPlain20',
                              color: 'icon.primary',
                              size: 28,
                            }),
                            (0, n.tZ)(s.xvT.Title.XS, { children: 'Oops! Something went wrong.' }),
                          ],
                        }),
                        (0, n.BX)(s.xvT.Body.S.Regular, {
                          textAlign: 'center',
                          children: [
                            "We're sorry for the inconvenience. If the issue persists, please reach out to our support team on",
                            ' ',
                            (0, n.tZ)(s.dLw, { href: k.Vs, underlined: !0, children: 'Discord' }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, n.tZ)(s.zxk, {
                      variant: 'secondary',
                      label: 'Reload page',
                      onClick: () => window.location.reload(),
                    }),
                  ],
                }),
              ],
            }),
          }),
        tC = r(91289),
        tA = r(55135);
      let tX = ''.concat(tA.CT.Root, '.').concat('theme'),
        tT = (e) => {
          let { children: t, themeCookie: r } = e,
            a = !!k.clientEnvs.NEXT_PUBLIC_LIGHT_MODE_FEATURE_FLAG,
            l = (0, o.useCallback)((e) => {
              (0, tC.K)(tX, e);
            }, []);
          return (0, n.tZ)(s.$26, {
            isLightModeEnabled: a,
            themeCookie: r,
            storeThemePreference: l,
            children: t,
          });
        };
      var tM = r(77187);
      let tP = () => (
        (0, o.useEffect)(() => {
          var e;
          try {
            let e = k.clientEnvs.NEXT_PUBLIC_MATOMO_CONTAINER_URL;
            if (!e) {
              console.warn('No Matomo Container: Analytics will be disabled');
              return;
            }
            let t = window;
            (t._mtm || (t._mtm = [])).push({
              'mtm.startTime': new Date().getTime(),
              event: 'mtm.Start',
            }),
              (() => {
                let t = document,
                  r = t.createElement('script'),
                  n = t.getElementsByTagName('script')[0];
                (r.async = !0), (r.src = e), n.parentNode.insertBefore(r, n);
              })();
          } catch (t) {
            console.error(null !== (e = t.message) && void 0 !== e ? e : t), (0, tM.Tb)(t);
          }
        }, []),
        null
      );
      k.clientEnvs.NEXT_PUBLIC_SPINDL_SDK_KEY &&
        (i.ZP.configure({ sdkKey: k.clientEnvs.NEXT_PUBLIC_SPINDL_SDK_KEY, debugMode: !1 }),
        i.ZP.enableAutoPageViews());
      var tS = (e) => {
        let { children: t, cookies: r, countryCode: i, themeCookie: o } = e;
        return (0, n.BX)(l.SV, {
          beforeCapture: (e) => e.setLevel('fatal'),
          fallback: (0, n.tZ)(tT, { themeCookie: o, children: (0, n.tZ)(tB, {}) }),
          children: [
            (0, n.tZ)(tP, {}),
            (0, n.tZ)(a.Y, {
              children: (0, n.tZ)(ts.ZP, {
                countryCode: i,
                children: (0, n.tZ)(tb, {
                  children: (0, n.tZ)(tT, {
                    themeCookie: o,
                    children: (0, n.tZ)(tk, {
                      cookies: r,
                      children: (0, n.tZ)(tn.ZP, {
                        children: (0, n.tZ)(v.ZP, {
                          children: (0, n.tZ)(e3.ZP, {
                            children: (0, n.tZ)(B.ZP, {
                              children: (0, n.tZ)(tZ.ZP, {
                                children: (0, n.tZ)(ti.ZP, {
                                  children: (0, n.tZ)(to.ZP, {
                                    children: (0, n.tZ)(tl.Z, {
                                      children: (0, n.tZ)(tr, {
                                        children: (0, n.tZ)(ta.ZP, {
                                          children: (0, n.tZ)(e8.ZP, {
                                            children: (0, n.tZ)(e4, { children: t }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      };
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
        l = r(78286),
        i = r(58258),
        o = r(54655);
      let s = (0, i.createContext)(null);
      ((n = a || (a = {})).PREVENT_DASHBOARD_CARD_HOVER_CLASS = 'prevent-dashboard-card-hover'),
        (n.DASHBOARD_CARD_BUTTON_EXPAND_CLASS = 'dashboard-card-button-expand');
      let d = () => {
          let e = (0, i.useContext)(s);
          if (!e)
            throw Error('useDashboardContext must be called inside a DashboardContextProvider');
          return e;
        },
        c = (e) => {
          let { isSmallDashboard: t } = e,
            [r, n] = (0, i.useState)(!1),
            [a, l] = (0, i.useState)(!1),
            o = (0, i.useCallback)(() => {
              n((e) => !e);
            }, []),
            s = (0, i.useCallback)(
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
            (0, i.useEffect)(() => {
              t && n(!1);
            }, [t, n]),
            {
              isDashboardExpanded: r,
              isDashboardHovered: a,
              toggleDashboard: o,
              setIsDashboardHovered: l,
              onClickToggleDashboard: s,
            }
          );
        };
      t.ZP = (0, i.memo)((e) => {
        let { children: t } = e,
          r = (0, o.CPt)(),
          [n, a] = (0, i.useState)('loan'),
          d = c({ isSmallDashboard: r }),
          u = (0, i.useMemo)(
            () => ({
              isSmallDashboard: r,
              borrowDashboardMode: n,
              setBorrowDashboardMode: a,
              ...d,
            }),
            [r, d, n, a]
          );
        return (0, l.tZ)(s.Provider, { value: u, children: t });
      });
    },
    99095: function (e, t, r) {
      'use strict';
      r.d(t, {
        l5: function () {
          return v;
        },
      });
      var n = r(78286),
        a = r(58258),
        l = r(44982),
        i = r(54655),
        o = r(35047),
        s = r(66888),
        d = r(18313),
        c = r(89991),
        u = r(98949),
        p = r(22683),
        h = r(3918);
      let g = (0, a.createContext)(null),
        v = () => {
          let e = (0, a.useContext)(g);
          if (!e) throw Error('useLayoutContext must be called inside a LayoutContextProvider');
          return e;
        };
      t.ZP = (0, a.memo)((e) => {
        var t;
        let { children: r } = e,
          [v, m] = (0, a.useState)(!1),
          [y, f] = (0, a.useState)(!1),
          [x, b] = (0, a.useState)(!0),
          { operations: Z } = (0, p.N)(),
          { toggleAnimation: w } = (0, i.s8G)(),
          k = (0, i.ajf)('s'),
          {
            account: { isConnected: B },
          } = (0, c.Z_)();
        (0, a.useLayoutEffect)(() => {
          B ? w('default') : w('loading');
        }, [B, w]);
        let [C, A] = (0, a.useState)({}),
          [X, T] = (0, a.useState)(),
          M = (0, a.useCallback)(
            (e) => {
              if (k && e) {
                T({ ...e, dismissable: !0 });
                return;
              }
              T(e);
            },
            [k, T]
          ),
          P = (0, a.useMemo)(
            () =>
              (0, o.entries)(C)
                .filter((e) => {
                  let [, t] = e;
                  return t;
                })
                .map((e) => {
                  let [t] = e;
                  return 'pageWarning' === t && (null == X ? void 0 : X.content)
                    ? { ...X, id: t }
                    : { ...s.u.CONFIG[t], id: t };
                })
                .sort((e, t) => (e.type === t.type ? 0 : 'alert' === e.type ? -1 : 1)),
            [C, X]
          ),
          S = (0, a.useCallback)((e, t) => {
            A((r) => ({ ...r, [e]: t }));
          }, []),
          { account: R } = (0, c.Z_)(),
          [I, E] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          S('pageWarning', !!X && (0, o.isDefined)(X.content));
        }, [X, null == X ? void 0 : X.content, S]),
          (0, a.useEffect)(() => {
            Z.length > 0 ? S('simulate', !0) : S('simulate', !1);
          }, [Z, S]),
          (0, a.useEffect)(() => {
            S('safeAccount', !R.isSafe && !!R.isContract);
          }, [S, R.isSafe, R.isContract]);
        let { countryCode: q } = (0, h.RA)();
        (0, a.useEffect)(() => {
          S('ukDisclaimer', 'GB' === q);
        }, [S, q]);
        let { legacyMorphoHolding: K } = (0, u.gz)();
        (0, a.useEffect)(() => {
          var e;
          S(
            'legacyMorpho',
            !!(
              (null === (e = K.value) || void 0 === e ? void 0 : e.balance) && K.value.balance > 0n
            )
          );
        }, [null === (t = K.value) || void 0 === t ? void 0 : t.balance, S]),
          (0, a.useEffect)(() => {
            d.clientEnvs.NEXT_PUBLIC_SPINDL_SDK_KEY &&
              (null == R ? void 0 : R.address) &&
              l.ZP.attribute(R.address);
          }, [null == R ? void 0 : R.address]);
        let L = (0, a.useMemo)(
          () => ({
            isMobileLeftPanelOpen: v,
            setMobileLeftPanelOpen: m,
            isMobileRightPanelOpen: y,
            setMobileRightPanelOpen: f,
            isLeftPanelExpanded: x,
            setIsLeftPanelExpanded: b,
            setShowRightPanelMask: E,
            bannersToShow: P,
            toggleBanner: S,
            setPageWarning: M,
            showRightPanelMask: I,
          }),
          [v, y, x, P, S, M, I]
        );
        return (0, n.tZ)(g.Provider, { value: L, children: r });
      });
    },
    34896: function (e, t, r) {
      'use strict';
      r.d(t, {
        H: function () {
          return l;
        },
      });
      var n = r(45842),
        a = r(82803);
      let l = (e) => {
        switch (e.type) {
          case a.H.InterfaceOperationType.repay:
          case a.H.InterfaceOperationType.borrow:
          case a.H.InterfaceOperationType.metaMorphoDeposit:
          case a.H.InterfaceOperationType.metaMorphoWithdraw:
            return e.assets > 0n || e.shares > 0n;
          case a.H.InterfaceOperationType.withdrawCollateral:
          case a.H.InterfaceOperationType.supplyCollateral:
            return e.assets > 0n;
          case a.H.InterfaceOperationType.supplyCollateralBorrow:
          case a.H.InterfaceOperationType.withdrawCollateralRepay:
            return e.collateralAssets > 0n || e.loanAssets > 0n || e.loanShares > 0n;
          case a.H.InterfaceOperationType.zap:
            return e.collateralAssets > 0n && e.marketTo !== n.DR;
          case a.H.InterfaceOperationType.migrateSupply:
            return e.assets > 0n;
          case a.H.InterfaceOperationType.migrateBorrow:
            return e.collateralAssets > 0n || e.loanAssets > 0n;
          default:
            throw Error('Not implemented');
        }
      };
    },
    89805: function (e, t, r) {
      'use strict';
      r.d(t, {
        _: function () {
          return p;
        },
      });
      var n = r(58258),
        a = r(68612),
        l = r(40252),
        i = r(35047),
        o = r(51196),
        s = r(89991),
        d = r(34896),
        c = r(57054);
      let u = l.MathLib.MAX_UINT_160,
        p = function (e, t, r) {
          var p;
          let h = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            { account: g } = (0, s.Z_)(),
            v =
              null !== (p = null == g ? void 0 : g.address) && void 0 !== p
                ? p
                : '0x0000000000000000000000000000000000000001',
            m = (0, n.useMemo)(
              () =>
                h
                  ? e &&
                    (0, o.produceImmutable)(e, (e) => {
                      var t, r;
                      (0, i.keys)(e.tokens).forEach((t) => {
                        var r, n, i, o;
                        let s =
                          null !==
                            (o = (n =
                              null !== (i = (r = e.holdings)[v]) && void 0 !== i ? i : (r[v] = {}))[
                              t
                            ]) && void 0 !== o
                            ? o
                            : (n[t] = new l.Holding({
                                user: v,
                                token: t,
                                balance: 0n,
                                erc20Allowances: {
                                  morpho: 0n,
                                  permit2: 0n,
                                  'bundler3.generalAdapter1': a.zL,
                                },
                                permit2BundlerAllowance: { amount: 0n, expiration: 0n, nonce: 0n },
                              }));
                        (s.canTransfer = !0), (s.balance += u);
                      }),
                        (0, i.keys)(e.markets).forEach((t) => {
                          var r, n, a, i;
                          (null !==
                            (i = (n =
                              null !== (a = (r = e.positions)[v]) && void 0 !== a
                                ? a
                                : (r[v] = {}))[t]) &&
                            void 0 !== i) ||
                            (n[t] = new l.Position({
                              user: v,
                              marketId: t,
                              supplyShares: 0n,
                              borrowShares: 0n,
                              collateral: 0n,
                            }));
                        }),
                        (null !== (r = (t = e.users)[v]) && void 0 !== r) ||
                          (t[v] = new l.User({
                            address: v,
                            isBundlerAuthorized: !1,
                            morphoNonce: 0n,
                          }));
                    })
                  : e,
              [e, h, v]
            ),
            y = (0, n.useMemo)(() => ((0, d.H)(t) ? [t] : []), [t]),
            [f, x] = (0, c.b)(m, y, r, v),
            { steps: b, exceededToken: Z } = (0, n.useMemo)(() => {
              let e;
              return h
                ? {
                    steps:
                      v &&
                      (null == f
                        ? void 0
                        : f.map((r) =>
                            (0, o.produceImmutable)(r, (r) => {
                              var n;
                              let a = {};
                              (0, i.values)(
                                null !== (n = r.holdings[v]) && void 0 !== n ? n : {}
                              ).forEach((n) => {
                                if (!n) return;
                                let o = r.getBundleAssetBalances(
                                    v,
                                    n.token,
                                    l.DEFAULT_SLIPPAGE_TOLERANCE
                                  ),
                                  s = n.balance - u,
                                  { virtualFinalBalance: d, virtualDealtBalance: c } = (0,
                                  i.values)(null == o ? void 0 : o.allocations)
                                    .filter(i.isDefined)
                                    .reduce(
                                      (e, r) => {
                                        var n;
                                        let { type: a, srcAmount: l, dstAmount: i } = r;
                                        return (
                                          !(i > 0n) ||
                                            (null === (n = t.options.disabledPeripheralTokens) ||
                                            void 0 === n
                                              ? void 0
                                              : n.has(a)) ||
                                            ((e.virtualFinalBalance += i),
                                            (e.virtualDealtBalance += (u * i) / l)),
                                          e
                                        );
                                      },
                                      { virtualFinalBalance: 0n, virtualDealtBalance: 0n }
                                    ),
                                  p = r.tryGetToken(n.token);
                                d < c &&
                                  p &&
                                  (!e || (null == p ? void 0 : p.address) === l.NATIVE_ADDRESS) &&
                                  (e = new l.Token(p)),
                                  (a[n.token] = new l.Holding({
                                    ...n,
                                    balance: l.MathLib.max(0n, s),
                                  }));
                              }),
                                (r.holdings[v] = a);
                            })
                          )),
                    exceededToken: e,
                  }
                : { steps: f, exceededToken: void 0 };
            }, [t.options.disabledPeripheralTokens, h, v, f]);
          return [b, x, v, Z];
        };
    },
    3918: function (e, t, r) {
      'use strict';
      r.d(t, {
        RA: function () {
          return i;
        },
      });
      var n = r(78286),
        a = r(58258);
      let l = (0, a.createContext)(null),
        i = () => {
          let e = (0, a.useContext)(l);
          if (!e) throw Error('useUtilityContext must be called inside a UtilityContextProvider');
          return e;
        };
      t.ZP = (e) => {
        let { children: t, countryCode: r } = e;
        return (0, n.tZ)(l.Provider, { value: { countryCode: r }, children: t });
      };
    },
    55135: function (e, t, r) {
      'use strict';
      r.d(t, {
        CT: function () {
          return a;
        },
        Mh: function () {
          return o;
        },
        qk: function () {
          return d;
        },
        ub: function () {
          return i;
        },
      });
      var n,
        a,
        l = r(16035);
      let i = 'morpho.userSettings',
        o = 1;
      ((n = a || (a = {})).Root = 'root'),
        (n.Earn = 'earn'),
        (n.Borrow = 'borrow'),
        (n.Explore = 'explore'),
        (n.Vault = 'vault'),
        (n.Market = 'market');
      let s = l.z.object({
          version: l.z.coerce
            .number()
            .refine((e) => e === o, { message: 'Version must be exactly '.concat(o) }),
          root: l.z.record(l.z.unknown()).optional(),
          earn: l.z.record(l.z.unknown()).optional(),
          borrow: l.z.record(l.z.unknown()).optional(),
          explore: l.z.record(l.z.unknown()).optional(),
          vault: l.z.record(l.z.unknown()).optional(),
          market: l.z.record(l.z.unknown()).optional(),
        }),
        d = (e) => {
          try {
            let t = JSON.parse(e),
              r = s.safeParse(t);
            if (r.success) return r.data;
            return (
              console.warn('Invalid UserSettings: '.concat(JSON.stringify(r.error.errors))), null
            );
          } catch (e) {
            return null;
          }
        };
    },
    91289: function (e, t, r) {
      'use strict';
      r.d(t, {
        K: function () {
          return d;
        },
        e: function () {
          return s;
        },
      });
      var n = r(71938),
        a = r(75833),
        l = r(35047),
        i = r(55135);
      let o = { version: i.Mh },
        s = () => {
          let e = (0, n.getCookie)(i.ub),
            t = (0, i.qk)(e);
          return (0, l.isDefined)(e) && !(0, l.isDefined)(t) && (0, n.deleteCookie)(i.ub), t;
        },
        d = (e, t) => {
          let r = s() || o,
            l = (0, a.Z)(r, e, t);
          (0, n.setCookie)(i.ub, JSON.stringify(l));
        };
    },
    60410: function (e, t, r) {
      'use strict';
      function n(e) {
        let { type: t, srcToken: r } = e;
        switch (t) {
          case 'wrapped-vault':
          case 'vault':
            return 'Allow '.concat(r.symbol, ' deposit');
          case 'wrapped':
            return 'Allow '.concat(r.symbol, ' wrapping');
          case 'unwrapped-staked-wrapped':
          case 'staked-wrapped':
            return 'Allow '.concat(r.symbol, ' staking');
        }
        throw Error('Unhandled peripheral token type: "'.concat(t, '"'));
      }
      r.d(t, {
        e: function () {
          return n;
        },
      });
    },
    76258: function (e, t, r) {
      'use strict';
      var n = r(58258),
        a = r(35047);
      t.Z = (e, t, r) => (0, n.useMemo)(() => !(!e || (0, a.isDefined)(t)) && r, [e, r, t]);
    },
    25465: function (e, t, r) {
      'use strict';
      r.d(t, {
        D: function () {
          return i;
        },
      });
      var n = r(58258),
        a = r(22683),
        l = r(4205);
      let i = (e, t) => {
        let { operations: r } = (0, a.N)(),
          {
            operation: i,
            index: o,
            isNew: s,
          } = (0, n.useMemo)(() => {
            let n = r.findIndex((r) => r.type === t && r.vaultAddress === e);
            return n >= 0
              ? { index: n, operation: r[n], isNew: !1 }
              : {
                  isNew: !0,
                  index: r.length,
                  operation: {
                    id: crypto.randomUUID(),
                    type: t,
                    vaultAddress: e,
                    assets: 0n,
                    shares: 0n,
                    options: { isMax: [] },
                  },
                };
          }, [r, e, t]);
        return {
          operation: i,
          initialState: (0, l.f)(o),
          finalState: (0, l.f)(o + 1),
          isNew: s,
          index: o,
        };
      };
    },
    71021: function (e, t, r) {
      'use strict';
      r.d(t, {
        o: function () {
          return g;
        },
      });
      var n = r(58258),
        a = r(40252),
        l = r(12556),
        i = r(35047),
        o = r(22683),
        s = r(82803),
        d = r(89991),
        c = r(60410);
      let u = (e, t, r) => {
        let { account: l } = (0, d.Z_)();
        return (0, n.useMemo)(() => {
          if (!(null == l ? void 0 : l.address) || !t) return;
          let n = t.tryGetAccrualVault(e);
          if (!n) return;
          let i = t.getBundleMaxBalance(l.address, n.asset, a.DEFAULT_SLIPPAGE_TOLERANCE, r);
          if (void 0 !== i) return { assets: n.getDepositCapacityLimit(i).value, shares: 0n };
        }, [l.address, t, e, r]);
      };
      var p = r(76258),
        h = r(25465);
      let g = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { account: r } = (0, d.Z_)(),
          {
            operation: g,
            initialState: v,
            isNew: m,
          } = (0, h.D)(e, s.H.InterfaceOperationType.metaMorphoDeposit),
          [y, f] = (0, n.useState)(g.assets),
          [x, b] = (0, n.useState)(
            g.options.isMax.includes(s.H.InterfaceOperationType.metaMorphoDeposit)
          ),
          [Z, , , w, k] = (0, l.$X)(g.options.disabledPeripheralTokens),
          B = u(e, null == v ? void 0 : v.data, Z),
          C = (0, n.useCallback)((e) => {
            b(!1), f(e);
          }, []),
          A = (0, p.Z)(
            r.isConnected,
            null == B ? void 0 : B.assets,
            v.isPending || v.isFetchingAny
          ),
          X = (0, n.useMemo)(
            () => ({
              type: s.H.InterfaceOperationType.metaMorphoDeposit,
              vaultAddress: e,
              assets: y,
              shares: 0n,
              id: g.id,
              options: {
                origin: t.origin,
                isMax: x ? [s.H.InterfaceOperationType.metaMorphoDeposit] : [],
                disabledPeripheralTokens: Z,
              },
            }),
            [y, Z, x, g.id, e, t.origin]
          ),
          { updateOperation: T } = (0, o.N)(),
          M = (0, n.useMemo)(() => {
            var t, n;
            if (!r.address) return;
            let l =
                null == v
                  ? void 0
                  : null === (t = v.data) || void 0 === t
                    ? void 0
                    : t.tryGetVault(e),
              o =
                l &&
                (null == v
                  ? void 0
                  : null === (n = v.data) || void 0 === n
                    ? void 0
                    : n.getBundleAssetBalances(
                        r.address,
                        l.asset,
                        a.DEFAULT_SLIPPAGE_TOLERANCE,
                        !0
                      ));
            if (o)
              return (0, i.values)(o.allocations)
                .filter(i.isDefined)
                .filter((e) => 'base' !== e.type && e.dstAmount > 0n)
                .map((e) => ({
                  id: e.type,
                  label: (0, c.e)(e),
                  value: !Z.has(e.type),
                  srcToken: e.srcToken,
                }));
          }, [r.address, Z, null == v ? void 0 : v.data, e]),
          P = 'position-manager' === t.origin,
          [S, R] = (0, n.useState)(m || P),
          I = (0, n.useMemo)(() => {
            let e = x !== g.options.isMax.includes(s.H.InterfaceOperationType.metaMorphoDeposit),
              t = y !== g.assets;
            return e || t;
          }, [y, x, g.assets, g.options.isMax]),
          E = (0, n.useCallback)(() => {
            T(X.id, () => X), R(!1);
          }, [X, T]);
        (0, n.useEffect)(() => {
          'bundler' === t.origin && E();
        }, [E, t.origin]),
          (0, n.useEffect)(() => {
            S || f(g.assets);
          }, [S, g.assets]);
        let q = (0, n.useCallback)(
          (e) => {
            if (e) {
              if ((null == B ? void 0 : B.assets) == null) return;
              f(B.assets);
            }
            b(e);
          },
          [null == B ? void 0 : B.assets]
        );
        (0, n.useEffect)(() => {
          S ||
            (b(g.options.isMax.includes(s.H.InterfaceOperationType.metaMorphoDeposit)),
            k(g.options.disabledPeripheralTokens));
        }, [S, g.options, k]),
          (0, n.useEffect)(() => {
            q(x);
          }, [x, q]);
        let K = (0, n.useCallback)(() => R(!1), []);
        return (0, n.useMemo)(
          () => ({
            isNew: m,
            inputAmount: y,
            setInputAmount: C,
            isMax: x,
            setIsMax: q,
            localOperation: X,
            maxAmount: null == B ? void 0 : B.assets,
            isLoading: A,
            initialState: v,
            confirm: E,
            cancel: K,
            setIsEditing: R,
            peripheralTokenOptions: M,
            onPeripheralTokenOptionChange: w,
            isEditing: S,
            hasModifiedDepositOperation: I,
          }),
          [m, y, C, x, q, A, X, v, E, K, M, w, S, null == B ? void 0 : B.assets, I]
        );
      };
    },
    48972: function (e, t, r) {
      'use strict';
      r.d(t, {
        L: function () {
          return p;
        },
      });
      var n = r(58258),
        a = r(22683),
        l = r(82803),
        i = r(89991),
        o = r(40252);
      let s = (e, t) => {
        let { account: r } = (0, i.Z_)();
        return (0, n.useMemo)(() => {
          if ((null == r ? void 0 : r.address) === void 0) return;
          let n = null == t ? void 0 : t.getBundleBalance(r.address, e, !0),
            a = null == t ? void 0 : t.tryGetAccrualVault(e);
          if (void 0 === n || void 0 === a) return;
          let l = null == a ? void 0 : a.getWithdrawCapacityLimit(n);
          if (void 0 !== l && void 0 !== n)
            return l.limiter === o.CapacityLimitReason.balance
              ? { shares: n, assets: l.value }
              : { shares: 0n, assets: l.value };
        }, [r.address, t, e]);
      };
      var d = (e, t, r, a) =>
          (0, n.useMemo)(() => {
            let n = null == a ? void 0 : a.tryGetAccrualVault(e);
            return n && r ? n.toAssets(r) : t;
          }, [t, a, r, e]),
        c = r(76258),
        u = r(25465);
      let p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          {
            operation: r,
            initialState: o,
            isNew: p,
          } = (0, u.D)(e, l.H.InterfaceOperationType.metaMorphoWithdraw),
          { account: h } = (0, i.Z_)(),
          [g, v] = (0, n.useState)(r.assets),
          [m, y] = (0, n.useState)(r.shares),
          [f, x] = (0, n.useState)(
            r.options.isMax.includes(l.H.InterfaceOperationType.metaMorphoWithdraw)
          ),
          b = s(e, null == o ? void 0 : o.data),
          Z = d(e, g, m, o.data),
          w = (0, n.useCallback)((e) => {
            x(!1), v(e), y(0n);
          }, []),
          k = (0, n.useMemo)(() => {
            let e = f !== r.options.isMax.includes(l.H.InterfaceOperationType.metaMorphoWithdraw),
              t = g !== r.assets;
            return e || t;
          }, [g, f, r.assets, r.options.isMax]),
          B = (0, c.Z)(
            h.isConnected,
            null == b ? void 0 : b.assets,
            o.isFetchingAny || o.isPending
          ),
          C = (0, n.useMemo)(
            () => ({
              type: l.H.InterfaceOperationType.metaMorphoWithdraw,
              vaultAddress: e,
              assets: g,
              shares: m,
              id: r.id,
              options: {
                origin: t.origin,
                isMax: f ? [l.H.InterfaceOperationType.metaMorphoWithdraw] : [],
              },
            }),
            [g, f, r.id, t.origin, m, e]
          ),
          { updateOperation: A } = (0, a.N)(),
          X = 'position-manager' === t.origin,
          [T, M] = (0, n.useState)(p || X),
          P = (0, n.useCallback)(() => {
            A(C.id, () => C), M(!1);
          }, [C, A]);
        (0, n.useEffect)(() => {
          'bundler' === t.origin && P();
        }, [P, t.origin]);
        let S = (0, n.useCallback)(
          (e) => {
            if (e) {
              if ((null == b ? void 0 : b.assets) == null) return;
              v(b.assets), y(b.shares);
            }
            x(e);
          },
          [b]
        );
        (0, n.useEffect)(() => {
          T || (v(r.assets), y(r.shares), x(r.options.isMax.includes(r.type)));
        }, [T, r.assets, r.options.isMax, r.shares, r.type]),
          (0, n.useEffect)(() => {
            S(f);
          }, [f, S]);
        let R = (0, n.useCallback)(() => M(!1), []);
        return (0, n.useMemo)(
          () => ({
            isNew: p,
            inputAmount: Z,
            setInputAmount: w,
            isMax: f,
            setIsMax: S,
            localOperation: C,
            maxAmount: null == b ? void 0 : b.assets,
            isLoading: B,
            initialState: o,
            confirm: P,
            cancel: R,
            setIsEditing: M,
            isEditing: T,
            hasModifiedWithdrawOperation: k,
          }),
          [p, Z, w, f, S, C, null == b ? void 0 : b.assets, B, o, P, R, T, k]
        );
      };
    },
    57806: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        7148, 9913, 1811, 8849, 3261, 1087, 115, 7287, 6929, 3391, 3515, 4516, 3613, 6489, 1594,
        8051, 5042, 3792, 4655, 825, 5962, 9255, 7567, 6909, 6269, 8804, 1744,
      ],
      function () {
        return e((e.s = 75927));
      }
    ),
      (_N_E = e.O());
  },
]);
