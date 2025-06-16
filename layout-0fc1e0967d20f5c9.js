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
    (e._sentryDebugIds[t] = '64ec12d9-ab65-4d5e-ad23-f9d9c064dd4b'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-64ec12d9-ab65-4d5e-ad23-f9d9c064dd4b'));
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
          return v;
        },
      });
      var n = r(78286),
        l = r(58258),
        i = r(54655),
        o = r(13191),
        a = r(40252),
        d = r(35047),
        s = r(50825),
        c = r(38819);
      let u = (0, c.Z)('div', { target: 'eyr4h7c0' })(
          'min-width:220px;max-width:300px;padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ' 0;'
        ),
        p = (0, c.Z)(i.Kqy, { target: 'eyr4h7c1' })(
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
        m = (0, c.Z)(i.xvT.Body.XXS.Regular, { target: 'eyr4h7c3' })('display:contents;');
      var g = (0, l.memo)((e) => {
          let { className: t, collateralExposure: r, targetChainId: c } = e,
            g = (0, l.useMemo)(
              () =>
                Array.from(r.lltvs)
                  .map((e) =>
                    ''.concat(i.$0l.percent.unit('%').trailingZero(!1).digits(1).of(e, 18))
                  )
                  .join(', '),
              [r]
            ),
            v = (0, l.useMemo)(() => {
              let e = new Set();
              return Array.from(r.oracles)
                .map((e) => {
                  let t = 'string' == typeof e,
                    r = t ? e : e.address;
                  return {
                    label: t
                      ? (0, i.GQT)(e)
                      : e.type === o.OracleType.Unknown
                        ? (0, i.GQT)(r)
                        : (0, d.formatLongString)((0, i.pTE)(e), 30) || (0, i.GQT)(r),
                    url: a.ChainUtils.getExplorerAddressUrl(c, r),
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
            children: (0, n.BX)(i.Kqy, {
              direction: 'column',
              children: [
                (0, n.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(i.xvT.Body.XXS.Regular, {
                      color: 'text.body',
                      children: 'Collateral',
                    }),
                    (0, n.BX)(i.Kqy, {
                      align: 'center',
                      gap: 4,
                      children: [
                        (0, n.tZ)(i.qEK, { src: r.token.logoURI, size: 'small' }),
                        (0, n.tZ)(m, {
                          children: r.token.symbol
                            ? (0, d.formatLongString)(r.token.symbol, 35)
                            : '-',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.tZ)(i.Z0O, {}),
                (0, n.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(i.xvT.Body.XXS.Regular, { color: 'text.body', children: 'LLTV' }),
                    (0, n.tZ)(i.xvT.Body.XXS.Regular, { children: g }),
                  ],
                }),
                (0, n.tZ)(i.Z0O, {}),
                (0, n.BX)(h, {
                  align: 'center',
                  justify: 'space-between',
                  gap: 's',
                  children: [
                    (0, n.tZ)(i.xvT.Body.XXS.Regular, { children: 'Oracle' }),
                    (0, n.tZ)(i.Kqy, {
                      direction: 'column',
                      gap: 5,
                      align: 'end',
                      children: v.map((e, t) =>
                        (0, n.tZ)(
                          s.Z,
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
        v = (0, l.memo)((e) => {
          let {
              className: t,
              collateralExposures: r,
              targetChainId: o,
              extraInfo: a,
              align: d = 'left',
              maxTokensCount: s,
              size: c,
            } = e,
            u = (0, l.useMemo)(
              () =>
                r.map((e) => ({
                  hoverCardContent: (0, n.tZ)(g, { collateralExposure: e, targetChainId: o }),
                  logoUrl: e.token.logoURI,
                })),
              [r, o]
            );
          return (0, n.tZ)(i.$xj, {
            className: t,
            items: u,
            extraInfo: a,
            align: d,
            maxTokensCount: s,
            avatarSize: c,
          });
        });
    },
    76992: function (e, t, r) {
      'use strict';
      r.d(t, {
        E: function () {
          return m;
        },
      });
      var n = r(78286),
        l = r(58258),
        i = r(54655),
        o = r(50825),
        a = r(38819),
        d = r(16690);
      let s = (0, a.Z)('div', { target: 'eikqm6p0' })(
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
        c = (0, a.Z)('div', { target: 'eikqm6p1' })('position:relative;'),
        u = (0, a.Z)(i.Kqy, { target: 'eikqm6p2' })(
          'position:absolute;top:0px;right:0px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.brand;
          },
          ';width:14px;height:14px;border-radius:50%;display:flex;justify-content:center;align-items:center;text-align:center;',
          (0, d.animationCubicBezier)(d.popUpScale, '300ms'),
          ';& >:first-of-type{transform:translate(0.2px,0.4px);font-size:8px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{top:-5px !important;right:-5px !important;}'
        ),
        p = (0, a.Z)(i.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        h = (0, l.forwardRef)(function (e, t) {
          let {
            options: r,
            id: l,
            value: a,
            noPadding: d = !1,
            noGap: h = !1,
            disabled: m = !1,
            variant: g = 'primary',
            backgroundVariant: v = 'primary',
            size: y = 'small',
            className: f,
            onChange: x,
            ...Z
          } = e;
          return (0, n.tZ)(s, {
            noPadding: d,
            noGap: h,
            backgroundVariant: v,
            ref: t,
            className: f,
            ...Z,
            children: r.map((e) =>
              (0, n.tZ)(
                i.ua7,
                {
                  disabled: !e.tooltip,
                  content: e.tooltip,
                  offset: d ? 4 : 9,
                  children: (0, n.BX)(c, {
                    children: [
                      e.href
                        ? (0, n.tZ)(o.Z, {
                            href: e.href,
                            prefetch: e.prefetch,
                            mode: 'internal',
                            buttonProps: {
                              variant: e.value === a ? g : 'ghost',
                              size: y,
                              disabled: m || e.isDisabled,
                              label: e.label,
                              iconAlone: e.icon,
                              onClick: () => (null == x ? void 0 : x(e.value)),
                            },
                          })
                        : (0, n.tZ)(i.zxk, {
                            variant: e.value === a ? g : 'ghost',
                            size: y,
                            disabled: m || e.isDisabled,
                            label: e.label,
                            iconAlone: e.icon,
                            onClick: () => (null == x ? void 0 : x(e.value)),
                          }),
                      e.counter && e.counter > 0
                        ? (0, n.tZ)(u, {
                            children: (0, n.tZ)(p, {
                              TextVariant: i.xvT.Body.XXXS.Regular,
                              children: e.counter,
                            }),
                          })
                        : null,
                    ],
                  }),
                },
                l + e.value
              )
            ),
          });
        });
      var m = (0, l.memo)(h);
    },
    62231: function (e, t, r) {
      'use strict';
      r.d(t, {
        R: function () {
          return A;
        },
      });
      var n = r(78286),
        l = r(58258),
        i = r(3100),
        o = r(85957),
        a = r(96801),
        d = r(12556),
        s = r(54655),
        c = r(18313),
        u = r(89991),
        p = r(75026),
        h = r(707),
        m = r(23567),
        g = r(38819);
      let v = (e) =>
          (0, m.iv)(
            'z-index:',
            e.zIndex.dropdown.mid,
            ';box-shadow:',
            e.boxShadow.dp4,
            ';background:',
            e.colors.constant.gray,
            ';width:min(200px,70vw);',
            (0, s.WGn)(s.JiD),
            '  max-height:calc(50svh - ',
            e.spacing.s,
            ');',
            e.breakpoints.down('s'),
            '{max-height:calc(50svh - ',
            e.spacing.s,
            ');}'
          ),
        y = (0, g.Z)(a.VY, { target: 'e1k2e47h0' })((e) => {
          let { theme: t } = e;
          return v(t);
        }, '  border-radius:20px;padding:8px;'),
        f = (0, g.Z)(a.l_, { target: 'e1k2e47h1' })('display:flex;flex-direction:column;gap:8px;'),
        x = (0, g.Z)(a.ck, { target: 'e1k2e47h2' })('outline:none;'),
        Z = (e) =>
          (0, m.iv)(
            'border-radius:8px;cursor:pointer;&:hover{background:',
            e.colors.constant.dark,
            ';}'
          ),
        b = (0, g.Z)(s.Kqy, { target: 'e1k2e47h3' })('padding:5px 8px;', (e) => {
          let { theme: t } = e;
          return Z(t);
        }),
        w = (0, g.Z)(s.xvT.Body.XXS.Regular, { target: 'e1k2e47h4' })('display:contents;'),
        k = [
          (0, d.$B)('assets/chains/polygon.svg'),
          (0, d.$B)('assets/chains/world.png'),
          (0, d.$B)('assets/chains/plume.svg'),
          (0, d.$B)('assets/chains/optimism.svg'),
        ];
      var B = (0, l.memo)(() =>
          (0, n.BX)(s.Kqy, {
            direction: 'column',
            gap: '2px',
            justify: 'center',
            align: 'center',
            padding: '2.5px',
            width: '20px',
            height: '20px',
            children: [
              (0, n.BX)(s.Kqy, {
                gap: '2px',
                children: [
                  (0, n.tZ)(s.qEK, { src: k[0], padding: 0, size: 6.5 }),
                  (0, n.tZ)(s.qEK, { src: k[1], padding: 0, size: 6.5 }),
                ],
              }),
              (0, n.BX)(s.Kqy, {
                gap: '2px',
                children: [
                  (0, n.tZ)(s.qEK, { src: k[2], padding: 0, size: 6.5 }),
                  (0, n.tZ)(s.qEK, { src: k[3], padding: 0, size: 6.5 }),
                ],
              }),
            ],
          })
        ),
        C = (0, l.memo)(() =>
          (0, n.tZ)(s.dLw, {
            href: c.bF,
            children: (0, n.tZ)(s.ua7, {
              content: 'Explore all chains in the Morpho Lite App',
              children: (0, n.BX)(b, {
                justify: 'space-between',
                align: 'center',
                children: [
                  (0, n.BX)(s.Kqy, {
                    gap: 'xxs',
                    align: 'center',
                    children: [
                      (0, n.tZ)(B, {}),
                      (0, n.tZ)(w, { color: 'text.body', children: 'Explore chains' }),
                    ],
                  }),
                  (0, n.tZ)(s.JO$, { icon: 'ArrowDiagonalUpPlain20', color: 'icon.primary' }),
                ],
              }),
            }),
          })
        );
      function X(e) {
        let { chainId: t, value: r, children: l, selected: i } = e;
        return (0, n.tZ)(x, {
          value: r,
          children: (0, n.tZ)(a.eT, {
            children: (0, n.BX)(b, {
              justify: 'space-between',
              children: [
                (0, n.BX)(s.Kqy, {
                  gap: 4,
                  children: [
                    (0, n.tZ)(s.ZcK, { chainId: t }),
                    (0, n.tZ)(w, { color: 'text.body', children: l }),
                  ],
                }),
                (0, n.tZ)(a.wU, {
                  children: i && (0, n.tZ)(s.JO$, { icon: 'CheckPlain20', color: 'icon.primary' }),
                }),
              ],
            }),
          }),
        });
      }
      var A = (0, l.memo)(function (e) {
        let { disabled: t, supportedChains: r } = e,
          { targetChain: m, onSetTargetChain: g, account: v } = (0, u.Z_)(),
          { selectByChainName: x } = (0, h.R)(),
          [Z, b] = (0, l.useState)(!1),
          w = (0, p.V)(),
          k = (0, o.useRouter)(),
          [B, A] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          B &&
            c.Cq.AVAILABLE_CHAIN_IDS.filter((e) => e !== (null == m ? void 0 : m.id)).forEach(
              (e) => {
                let t = w({ chainName: d.FW.getNameById(e) }, !1);
                k.prefetch(t);
              }
            );
        }, [B, k, null == m ? void 0 : m.id, w]),
          (0, l.useEffect)(() => {
            document.body.removeAttribute('data-scroll-locked');
          }, [B]);
        let T = (0, l.useMemo)(() => {
            var e;
            return null === (e = d.FW.tryGetChain(null == m ? void 0 : m.name)) || void 0 === e
              ? void 0
              : e.id;
          }, [m]),
          P = (0, l.useCallback)(
            (e) => {
              let t = d.FW.tryGetChain(e.toLocaleLowerCase());
              t && x(t.name);
            },
            [x]
          ),
          M = (0, l.useCallback)(
            (e) => {
              e.preventDefault(), e.stopPropagation(), m && g(m);
            },
            [m, g]
          ),
          S = (0, l.useRef)();
        return (
          (0, l.useEffect)(() => {
            if ((S.current && clearTimeout(S.current), v.isWrongChain)) {
              S.current = setTimeout(() => {
                b(!0);
              }, 1200);
              return;
            }
            return (
              b(!1),
              () => {
                S.current && clearTimeout(S.current);
              }
            );
          }, [v.isWrongChain]),
          (0, n.BX)(s.Kqy, {
            direction: 'row',
            align: 'center',
            gap: 'xs',
            children: [
              Z &&
                (0, n.tZ)(s.ua7, {
                  content: 'You are connected to the wrong network.\nSwitch to '.concat(
                    null == m ? void 0 : m.name,
                    '?'
                  ),
                  children: (0, n.tZ)(s.zxk, {
                    variant: 'ghost',
                    size: 'small',
                    iconRight: 'AlertPlain20',
                    onPointerDownCapture: M,
                    label: 'Wrong Network',
                  }),
                }),
              (0, n.BX)(a.fC, {
                value: null == m ? void 0 : m.name.toLowerCase(),
                onValueChange: P,
                disabled: t,
                onOpenChange: A,
                children: [
                  (0, n.tZ)(a.xz, {
                    asChild: !0,
                    children: (0, n.BX)(s.zxk, {
                      variant: v.isConnected ? 'secondary' : 'dark',
                      size: 'medium',
                      style: { padding: '0px 3px 0px 8px', position: 'relative' },
                      children: [
                        (0, n.tZ)(s.ZcK, {
                          chainId: T,
                          srcAvatarProps: { rounded: !0, size: 'medium' },
                        }),
                        (0, n.tZ)(s.JO$, {
                          icon: 'ChevronPlain20',
                          color: 'text.body',
                          style: { transform: 'rotate('.concat(B ? 180 : 0, 'deg)') },
                        }),
                      ],
                    }),
                  }),
                  (0, n.tZ)(a.h_, {
                    children: (0, n.tZ)(y, {
                      align: 'end',
                      position: 'popper',
                      sideOffset: 4,
                      children: (0, n.BX)(f, {
                        children: [
                          (0, n.tZ)(a.ZA, {
                            children:
                              null == r
                                ? void 0
                                : r.map((e) =>
                                    (0, n.tZ)(
                                      X,
                                      {
                                        value: e.name,
                                        chainId: e.chain.id,
                                        selected: e.chain.id === m.id,
                                        children: (0, i.Z)(e.name),
                                      },
                                      e.name
                                    )
                                  ),
                          }),
                          (0, n.tZ)(s.Z0O, {}),
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
          return a;
        },
      });
      var n = r(78286),
        l = r(58258),
        i = r(54655),
        o = r(76992),
        a = (0, l.memo)(
          (0, l.forwardRef)((e, t) => {
            let { isLightModeEnabled: r = !1, ...a } = e,
              {
                toggleThemeMode: d,
                themeRaw: { mode: s },
              } = (0, i.TCT)(),
              c = (0, l.useMemo)(
                () => [
                  {
                    value: i.hYm.Dark,
                    icon: 'DarkModePlain20',
                    tooltip: s === i.hYm.Dark ? null : 'Switch to dark mode',
                  },
                  {
                    value: i.hYm.Light,
                    icon: 'LightModePlain20',
                    isDisabled: !r,
                    tooltip: r
                      ? s === i.hYm.Light
                        ? null
                        : 'Switch to light mode'
                      : 'Light theme is coming soon.',
                  },
                ],
                [r, s]
              );
            return (0, n.tZ)(o.E, {
              id: 'theme-switch',
              options: c,
              value: s,
              onChange: d,
              variant: 'secondary',
              backgroundVariant: 'dark',
              ref: t,
              size: 'small',
              ...a,
            });
          })
        );
    },
    93690: function (e, t, r) {
      'use strict';
      r.d(t, {
        default: function () {
          return tR;
        },
      });
      var n = r(78286);
      r(65063), r(36806);
      var l = r(54945),
        i = r(94119),
        o = r(44982),
        a = r(58258),
        d = r(54655),
        s = r(78830),
        c = r(62231),
        u = r(35047),
        p = r(89991),
        h = r(12635),
        m = r(95438),
        g = r(26726),
        v = r(23567),
        y = r(38819);
      let f = (0, y.Z)(d.Kqy, { target: 'ewiym810' })(
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
            return t && (0, v.iv)('position:fixed;top:74px;right:20px;');
          },
          '  &[data-state="closed"]{',
          (0, d.ClW)(d.wso, '300ms'),
          ';}&[data-state="open"]{',
          (0, d.ClW)(d.ieI, '300ms'),
          ';}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('xs');
          },
          '{width:calc(100vw - 40px);}'
        ),
        Z = (0, y.Z)(d.zxk, { target: 'ewiym812' })((e) => {
          let { theme: t } = e;
          return t.breakpoints.up('m');
        }, '{padding:0 12px 0 10px;}');
      var b = (0, a.memo)(
          (0, a.forwardRef)((e, t) => {
            let {
                user: { ens: r, address: l, ensImage: i },
                trigger: o,
                rootProps: a,
                triggerProps: s,
                portalProps: c,
                contentProps: v,
                positionRelativeToViewport: y = !0,
              } = e,
              { account: Z, modal: b } = (0, p.Z_)(),
              w = (0, g.nh)(g.TP.LIGHT_MODE),
              k = (0, n.BX)(x, {
                ref: t,
                ...v,
                positionRelativeToViewport: y,
                children: [
                  (0, n.BX)(d.Kqy, {
                    justify: 'space-between',
                    align: 'center',
                    children: [
                      (0, n.BX)(d.Kqy, {
                        align: 'center',
                        gap: 8,
                        children: [
                          (0, n.tZ)(d.qEK, { size: 'medium', address: l, ensUrl: i }),
                          (0, n.BX)(d.Kqy, {
                            gap: 4,
                            align: 'center',
                            children: [
                              (0, n.tZ)(d.xvT.Body.S.Regular, {
                                shortenByWidth: 120,
                                lineHeight: 'normal',
                                children: r ? (0, u.formatLongString)(r, 20) : (0, d.GQT)(l),
                              }),
                              (0, n.tZ)(d.mUV, {
                                toCopy: l,
                                toastMessage: 'Address copied to clipboard.',
                                tooltipMessage: 'Copy address.',
                                size: 'small',
                              }),
                            ],
                          }),
                        ],
                      }),
                      !Z.isSafe &&
                        (0, n.BX)(d.Kqy, {
                          align: 'center',
                          gap: 'xs',
                          children: [
                            (0, n.tZ)(d.zxk, {
                              variant: 'secondary',
                              iconAlone: 'WalletPlain20',
                              onClick: () => {
                                b.open();
                              },
                            }),
                            (0, n.tZ)(d.zxk, {
                              variant: 'secondary',
                              iconAlone: 'LogoutPlain20',
                              onClick: () => b.disconnect(),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, n.BX)(d.Kqy, {
                    justify: 'space-between',
                    align: 'center',
                    children: [
                      (0, n.tZ)(d.xvT.Body.XS.Regular, {
                        color: 'text.body',
                        lineHeight: 'normal',
                        children: 'Theme',
                      }),
                      (0, n.tZ)(m.R, { isLightModeEnabled: w }),
                    ],
                  }),
                ],
              }),
              B = y ? (0, n.tZ)(f, { children: k }) : k;
            return (0, n.BX)(h.fC, {
              ...a,
              modal: !1,
              children: [
                (0, n.tZ)(h.xz, { asChild: !0, ...s, children: o }),
                (0, n.tZ)(h.Uv, { ...c, children: B }),
              ],
            });
          })
        ),
        w = (0, a.memo)(() => {
          let {
              modal: e,
              account: { address: t, ens: r, ensImage: l },
            } = (0, p.Z_)(),
            i = (0, d.CPt)();
          return t
            ? (0, n.tZ)(b, {
                user: { address: t, ens: r, ensImage: l },
                trigger: (0, n.tZ)(Z, {
                  variant: 'secondary',
                  size: 'medium',
                  avatarProps: {
                    ensUrl: null != l ? l : void 0,
                    address: l ? void 0 : t,
                    size: 'medium',
                  },
                  label: i ? void 0 : r ? (0, u.formatLongString)(r, 20) : (0, d.GQT)(t),
                  'data-testid': 'wallet-dropdown',
                }),
              })
            : (0, n.tZ)(d.zxk, {
                variant: 'dark',
                size: 'medium',
                label: 'Connect Wallet',
                onClick: () => e.open(),
              });
        }),
        k = r(18313),
        B = r(22683),
        C = r(75638),
        X = r(29009),
        A = r(76992);
      let T = (0, y.Z)(d.Kqy, { target: 'euds8620' })(
          '[data-radix-popper-content-wrapper]{position:relative !important;transform:none !important;will-change:initial !important;}'
        ),
        P = (0, y.Z)(d.Kqy, { target: 'euds8621' })('width:100%;'),
        M = (0, y.Z)(d.xvT.Body.XS.Regular, { target: 'euds8622' })('margin-left:6px;height:25px;'),
        S = (0, y.Z)(d.dLw, { target: 'euds8623' })('width:100%;'),
        R = (0, y.Z)(d.xvT.Body.XS.Regular, { target: 'euds8624' })(
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
          target: 'euds8625',
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
            return t && (0, v.iv)('position:fixed;top:74px;left:20px;');
          },
          '  &[data-state="closed"]{',
          (0, d.ClW)(d.wso, '300ms'),
          ';}&[data-state="open"]{',
          (0, d.ClW)(d.ieI, '300ms'),
          ';}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{width:calc(100vw - 40px);}'
        ),
        q = (0, y.Z)(A.E, { target: 'euds8626' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.primary;
          },
          ';gap:4px;display:none;align-self:center;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{display:flex;}'
        );
      var K = (0, a.memo)(
          (0, a.forwardRef)((e, t) => {
            let {
                trigger: r,
                rootProps: l,
                triggerProps: i,
                portalProps: o,
                contentProps: a,
                positionRelativeToViewport: s = !0,
                isOpen: c,
                onOpenChange: u,
              } = e,
              { navigationValue: p, navigationOptions: m, onNavigationValueChange: g } = (0, C.v)(),
              v = (e) => {
                g(e);
              },
              y = (0, n.BX)(I, {
                ref: t,
                ...a,
                positionRelativeToViewport: s,
                children: [
                  (0, n.tZ)(q, {
                    variant: 'secondary',
                    size: 'small',
                    id: 'navbar-segment-control-mobile',
                    options: m.slice(0, 5),
                    onChange: (e) => {
                      u(!1), v(e);
                    },
                    value: p,
                  }),
                  (0, n.BX)(d.Kqy, {
                    direction: 'column',
                    gap: 's',
                    align: 'start',
                    children: [
                      (0, n.BX)(P, {
                        direction: 'column',
                        align: 'start',
                        children: [
                          (0, n.tZ)(M, { color: 'text.body', children: 'Company' }),
                          (0, n.tZ)(S, {
                            href: X.Sn,
                            children: (0, n.tZ)(R, { children: 'Morpho.org' }),
                          }),
                          (0, n.tZ)(S, {
                            href: X.UB,
                            children: (0, n.tZ)(R, { children: 'Legacy App' }),
                          }),
                          (0, n.tZ)(S, {
                            href: X.Ih,
                            children: (0, n.tZ)(R, { children: 'Career' }),
                          }),
                          (0, n.tZ)(S, {
                            href: X.Ql,
                            children: (0, n.tZ)(R, { children: 'Blog' }),
                          }),
                        ],
                      }),
                      (0, n.BX)(P, {
                        direction: 'column',
                        children: [
                          (0, n.tZ)(M, { color: 'text.body', children: 'Protocol' }),
                          (0, n.tZ)(S, {
                            href: X.$2,
                            children: (0, n.tZ)(R, { children: 'Delegate' }),
                          }),
                          (0, n.tZ)(S, {
                            href: X.lp,
                            children: (0, n.tZ)(R, { children: 'Rewards' }),
                          }),
                          (0, n.tZ)(S, {
                            href: X.xQ,
                            children: (0, n.tZ)(R, { children: 'Forum' }),
                          }),
                          (0, n.tZ)(S, {
                            href: X.lH,
                            children: (0, n.tZ)(R, { children: 'Vote' }),
                          }),
                          (0, n.tZ)(S, {
                            href: X.WU,
                            children: (0, n.tZ)(R, { children: 'Documentation' }),
                          }),
                          (0, n.tZ)(S, {
                            href: X.qy,
                            children: (0, n.tZ)(R, { children: 'Terms' }),
                          }),
                        ],
                      }),
                      (0, n.tZ)(P, {
                        align: 'center',
                        justify: 'space-between',
                        gap: 12,
                        wrap: 'wrap',
                        children: (0, n.BX)(d.Kqy, {
                          align: 'center',
                          gap: 's',
                          children: [
                            (0, n.tZ)(d.dLw, {
                              href: X.jW,
                              children: (0, n.tZ)(d.zxk, {
                                iconAlone: 'XPlain20',
                                variant: 'secondary',
                              }),
                            }),
                            (0, n.tZ)(d.dLw, {
                              href: X.PX,
                              children: (0, n.tZ)(d.zxk, {
                                iconAlone: 'FarcasterPlain20',
                                variant: 'secondary',
                              }),
                            }),
                            (0, n.tZ)(d.dLw, {
                              href: X.Vs,
                              children: (0, n.tZ)(d.zxk, {
                                iconAlone: 'DiscordPlain20',
                                variant: 'secondary',
                              }),
                            }),
                            (0, n.tZ)(d.dLw, {
                              href: X.uH,
                              children: (0, n.tZ)(d.zxk, {
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
              f = s ? (0, n.tZ)(T, { children: y }) : y;
            return (0, n.BX)(h.fC, {
              ...l,
              modal: !1,
              onOpenChange: u,
              open: c,
              children: [
                (0, n.tZ)(h.xz, { asChild: !0, ...i, children: r }),
                (0, n.tZ)(h.Uv, { ...o, children: f }),
              ],
            });
          })
        ),
        L = (0, a.memo)(() => {
          let { theme: e } = (0, d.TCT)();
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
      let E = (0, y.Z)('button', { target: 'e9ydlzj0' })(
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
      var z = (0, a.memo)((e) => {
          let { variant: t = 'secondary' } = e,
            { themeRaw: r } = (0, d.TCT)(),
            l = (0, d.ajf)('s'),
            [i, o] = (0, a.useState)(!1),
            s = r.mode === d.hYm.Dark;
          (0, a.useEffect)(() => {
            if (i && l) {
              document.body.style.overflow = 'hidden';
              return;
            }
            document.body.style.overflow = 'auto';
          }, [l, i]);
          let c = (0, a.useMemo)(() => (s ? 'MorphoPlain20' : 'MorphoGradient20'), [s]);
          return (0, n.tZ)(K, {
            isOpen: i,
            onOpenChange: o,
            trigger: (0, n.BX)(E, {
              as: l ? 'div' : 'button',
              children: [
                (0, n.tZ)(d.JO$, { icon: c, size: 28 }),
                l && (0, n.tZ)(d.zxk, { iconAlone: 'BurgerMenuPlain20', variant: t }),
                !l &&
                  (0, n.BX)(n.HY, {
                    children: [
                      (0, n.tZ)(L, {}),
                      (0, n.tZ)(d.JO$, {
                        icon: 'ChevronPlain20',
                        color: 'icon.primary',
                        style: { transform: 'rotate('.concat(i ? 180 : 0, 'deg)') },
                      }),
                    ],
                  }),
              ],
            }),
          });
        }),
        H = r(79070);
      let _ = (0, y.Z)(d.Kqy, { target: 'ejv3lib0' })(
          'height:100%;padding:12px 24px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{padding:16px 12px;}'
        ),
        D = (0, y.Z)(A.E, { target: 'ejv3lib1' })(
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
        V = (0, y.Z)(d.zxk, { target: 'ejv3lib2' })(
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
        N = (0, y.Z)(d.Kqy, { target: 'ejv3lib3' })('position:relative;'),
        O = (0, y.Z)(H.E.div, { target: 'ejv3lib4' })(
          'position:absolute;top:0px;right:0px;width:14px;height:14px;border-radius:50%;transform-origin:center center;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.brand;
          },
          ';display:flex;justify-content:center;align-items:center;text-align:center;& >:first-of-type{transform:translate(0.2px,0.4px);font-size:8px;}'
        ),
        U = (0, y.Z)(d.xvT.Body.XXXS.Regular, { target: 'ejv3lib5' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        );
      var j = (0, a.memo)((e) => {
          let { className: t } = e,
            { toggleRightPanel: r, isRightPanelOpen: l } = (0, d.s8G)(),
            { account: i } = (0, p.Z_)(),
            { operations: o } = (0, B.N)(),
            u = (0, a.useMemo)(() => o.length, [o]),
            { navigationValue: h, navigationOptions: m, onNavigationValueChange: g } = (0, C.v)();
          return (0, n.BX)(_, {
            justify: 'space-between',
            className: t,
            children: [
              (0, n.BX)(d.Kqy, {
                align: 'center',
                gap: 28,
                children: [
                  (0, n.tZ)(z, { variant: i.isConnected ? 'secondary' : 'dark' }),
                  (0, n.tZ)(D, {
                    variant: 'secondary',
                    size: 'medium',
                    id: 'navbar-segment-control',
                    options: m,
                    onChange: (e) => g(e),
                    value: h,
                    noPadding: !0,
                  }),
                ],
              }),
              (0, n.BX)(d.Kqy, {
                align: 'center',
                gap: 8,
                children: [
                  (0, n.BX)(a.Suspense, {
                    children: [
                      !i.isSafe && (0, n.tZ)(c.R, { supportedChains: k.Cq.INTERFACE_CHAINS }),
                      (0, n.tZ)(w, {}),
                    ],
                  }),
                  i.isConnected &&
                    (0, n.BX)(N, {
                      children: [
                        (0, n.tZ)(V, {
                          variant: 'secondary',
                          size: 'medium',
                          onClick: () => r(),
                          iconAlone: 'BundlerPlain20',
                          iconAloneProps: {
                            active: l,
                            color: l ? 'icon.primary' : 'icon.secondary',
                          },
                          'data-testid': 'bundler-button',
                        }),
                        (0, n.tZ)(s.M, {
                          mode: 'popLayout',
                          children:
                            u > 0 &&
                            !l &&
                            (0, n.tZ)(
                              O,
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
        W = r(85957),
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
            return t.themeMode === d.hYm.Dark ? '#0f0f0f' : '#779de4';
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
        el = (0, y.Z)('svg', { target: 'egby6zh8' })(
          'margin-top:4px;width:180px;',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('l');
          },
          '{width:170px;}'
        ),
        ei = (0, y.Z)('div', { target: 'egby6zh9' })(
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
      function eo(e) {
        let {
            leftImage: t,
            leftLabel: r,
            rightImage: l,
            rightLabel: i,
            arrowDirection: o,
            arrowLabel: a,
          } = e,
          { theme: s } = (0, d.TCT)(),
          c = (e) => (0, G.$B)('v2/assets/animations-assets/'.concat(e));
        function u(e, t) {
          return (0, n.BX)(et, {
            children: [
              (0, n.tZ)(er, { src: c(e), alt: t }),
              (0, n.tZ)(d.xvT.Body.XXXS.Regular, { children: t }),
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
                stroke: s.colors.text.primary,
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
                (0, n.tZ)(el, {
                  height: '20',
                  viewBox: '0 0 150 9',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  style: { transform: 'rotate('.concat('left' === o ? '180deg' : '0deg', ')') },
                  children: (0, n.BX)('g', {
                    opacity: '0.6',
                    children: [
                      (0, n.tZ)('path', {
                        d: 'M5 4.5L145 4.5',
                        id: 'arrow-path',
                        stroke: s.colors.text.primary,
                        strokeWidth: '1.25',
                        strokeLinecap: 'round',
                        strokeDasharray: '0.1 4',
                      }),
                      p(0),
                      p(0.5),
                    ],
                  }),
                }),
                (0, n.tZ)(ei, { children: (0, n.tZ)(d.xvT.Body.XXXS.Regular, { children: a }) }),
              ],
            }),
            u(l, i),
          ],
        });
      }
      var ea = (0, a.memo)(function () {
          let { themeMode: e } = (0, d.TCT)(),
            t = (0, a.useRef)(null),
            { isRightPanelOpen: r } = (0, d.s8G)(),
            l = (0, a.useRef)(null);
          return (
            (0, a.useLayoutEffect)(() => {
              try {
                l.current = d.oYj.backgroundShader({ parent: t.current, paused: !r });
              } catch (e) {}
              return () => {
                var e, t;
                null === (t = l.current) ||
                  void 0 === t ||
                  null === (e = t.dispose) ||
                  void 0 === e ||
                  e.call(t);
              };
            }, []),
            (0, a.useLayoutEffect)(() => {
              var e, t;
              null === (t = l.current) ||
                void 0 === t ||
                null === (e = t.setPaused) ||
                void 0 === e ||
                e.call(t, !r);
            }, [r]),
            (0, a.useLayoutEffect)(() => {
              var t, r;
              null === (r = l.current) ||
                void 0 === r ||
                null === (t = r.setUniform) ||
                void 0 === t ||
                t.call(r, 'themeAmount', e === d.hYm.Dark ? 0 : 1);
            }, [e]),
            (0, n.tZ)(F, {
              children: (0, n.BX)(Q, {
                children: [
                  (0, n.tZ)(J, {
                    children: (0, n.BX)(d.xvT.Body.XS.Regular, {
                      children: [
                        'The Morpho Bundler lets you bundle multiple actions into one transaction.',
                        (0, n.tZ)('br', {}),
                        '\xa0',
                        (0, n.tZ)('br', {}),
                        'For example: use wstETH collateral to borrow USDC, and then supply USDC into a vault.',
                      ],
                    }),
                  }),
                  (0, n.tZ)(eo, {
                    leftImage: 'wsteth.png',
                    leftLabel: 'wstETH',
                    rightImage: 'coinstack.png',
                    rightLabel: 'Market A',
                    arrowDirection: 'right',
                    arrowLabel: 'Supply wstETH as collateral',
                  }),
                  (0, n.tZ)(eo, {
                    leftImage: 'usdc.png',
                    leftLabel: 'USDC',
                    rightImage: 'coinstack.png',
                    rightLabel: 'Market A',
                    arrowDirection: 'left',
                    arrowLabel: 'Borrow USDC',
                  }),
                  (0, n.tZ)(eo, {
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
        ed = r(51712),
        es = r(70064),
        ec = r(82803),
        eu = r(51196),
        ep = (e) => {
          let { error: t, tokens: r, returnOnlyFormattedMessage: n } = e;
          return (0, a.useMemo)(() => {
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
      let eh = (0, y.Z)(d.Kqy, { target: 'e1bzc6kv0' })('height:100%;'),
        em = (0, y.Z)(d.Kqy, { target: 'e1bzc6kv1' })('overflow-y:auto;height:100%;'),
        eg = (0, y.Z)('div', { target: 'e1bzc6kv2' })('padding:30px 0;'),
        ev = (0, y.Z)(d.zxk, { target: 'e1bzc6kv3' })('width:100%;');
      var ey = r(94646),
        ef = r(73478),
        ex = r(35288),
        eZ = r(89805),
        eb = r(6423),
        ew = r(18721);
      let ek = (e, t, r) =>
          (0, a.useMemo)(() => {
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
      var eC = (0, a.memo)((e) => {
          let { text: t } = e;
          return t
            ? (0, n.tZ)(d.ua7, {
                content: (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
                  wordBreak: 'break-all',
                  children: t,
                }),
                children: (0, n.BX)(d.Kqy, {
                  gap: 4,
                  style: { marginLeft: 'auto' },
                  align: 'center',
                  children: [
                    (0, n.tZ)(d.JO$, {
                      icon: 'AlertPlain20',
                      color: 'text.interactive.error',
                      size: 20,
                      padding: 2,
                    }),
                    (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
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
        eX = r(4565),
        eA = r(725),
        eT = r(78017),
        eP = r(16820),
        eM = r(84030),
        eS = r(47528),
        eR = (0, a.memo)((e) => {
          var t, r, l;
          let {
              collateralAsset: i,
              loanAsset: o,
              market: s,
              localSimulationResult: c,
              userAddress: u,
              marketId: h,
            } = e,
            { initialData: m, finalData: g } = (0, eM.Z)(h, u, c),
            v = (0, eA.B9)({ lltv: null == s ? void 0 : s.lltv, marketId: h }),
            { targetChainId: y } = (0, p.Z_)(),
            f = (0, a.useMemo)(
              () =>
                d.$0l.short
                  .default('-')
                  .digits((0, d.QQD)(i.price, m.collateral))
                  .trailingZero(!m.collateral)
                  .of(m.collateral, i.decimals),
              [m.collateral, i.decimals, i.price]
            ),
            x = (0, a.useMemo)(
              () =>
                d.$0l.short
                  .digits((0, d.QQD)(i.price, null == g ? void 0 : g.collateral))
                  .trailingZero(!(null == g ? void 0 : g.collateral))
                  .of(null == g ? void 0 : g.collateral, i.decimals),
              [null == g ? void 0 : g.collateral, i.decimals, i.price]
            ),
            Z = (0, a.useMemo)(
              () =>
                d.$0l.short
                  .digits((0, d.QQD)(o.price, m.loan))
                  .trailingZero(!m.loan)
                  .of(m.loan, o.decimals),
              [null == m ? void 0 : m.loan, o.decimals, o.price]
            ),
            b = (0, a.useMemo)(
              () =>
                d.$0l.short
                  .digits((0, d.QQD)(o.price, null == g ? void 0 : g.loan))
                  .trailingZero(!(null == g ? void 0 : g.loan))
                  .of(null == g ? void 0 : g.loan, o.decimals),
              [null == g ? void 0 : g.loan, o.decimals, o.price]
            ),
            w = (0, a.useMemo)(() => {
              var e;
              return d.$0l.percent
                .default('0.00')
                .digits(2)
                .unit('%')
                .of(
                  null == s
                    ? void 0
                    : null === (e = s.state) || void 0 === e
                      ? void 0
                      : e.dailyNetBorrowApy
                );
            }, [
              null == s
                ? void 0
                : null === (t = s.state) || void 0 === t
                  ? void 0
                  : t.dailyNetBorrowApy,
            ]),
            k = (0, a.useMemo)(
              () => d.$0l.percent.unit('%').default('0%').digits(2).of(m.ltv, 18),
              [m.ltv]
            ),
            B = (0, a.useMemo)(() => d.$0l.percent.unit('%').digits(2).of(g.ltv, 18), [g.ltv]),
            C = (0, eS.H)(s),
            X = (0, d.$4C)({
              chainId: y,
              uniqueKey: h,
              collateralAddress: null == i ? void 0 : i.address,
            }),
            A = (0, a.useMemo)(() => {
              var e;
              return (0, eX.safeParseNumber)(
                (null == s
                  ? void 0
                  : null === (e = s.state) || void 0 === e
                    ? void 0
                    : e.dailyBorrowApy) || 0,
                18
              );
            }, [
              null == s
                ? void 0
                : null === (r = s.state) || void 0 === r
                  ? void 0
                  : r.dailyBorrowApy,
            ]),
            T = (0, a.useMemo)(
              () => null != m && !!m.ltv && !!v && (0, G.M4)(m.ltv, v),
              [null == m ? void 0 : m.ltv, v]
            ),
            P = (0, a.useMemo)(
              () => null != g && !!g.ltv && !!v && (0, G.M4)(g.ltv, v),
              [null == g ? void 0 : g.ltv, v]
            );
          return (0, n.BX)(d.Kqy, {
            gap: 4,
            direction: 'column',
            children: [
              (0, n.BX)(d.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: 'Borrow Rate',
                  }),
                  (0, n.tZ)(eT.w, {
                    RewardsHoverCardProps: {
                      apy: A,
                      rewards: C,
                      variant: 'market',
                      points: X,
                      netApy: (0, eP.Pi)(
                        null == s
                          ? void 0
                          : null === (l = s.state) || void 0 === l
                            ? void 0
                            : l.dailyNetBorrowApy,
                        eX.safeParseNumber
                      ),
                      asset: i,
                    },
                    children: (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                      color: 'text.body',
                      children: w,
                    }),
                  }),
                ],
              }),
              (0, n.BX)(d.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: (0, n.tZ)(eA.gX, { marketId: h }),
                  }),
                  (0, n.BX)(d.Kqy, {
                    gap: '2px',
                    align: 'center',
                    children: [
                      (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                        color: T ? 'text.interactive.error' : B ? 'text.tertiary' : 'text.body',
                        lineHeight: 'normal',
                        children: k,
                      }),
                      B &&
                        (0, n.BX)(n.HY, {
                          children: [
                            (0, n.tZ)(d.JO$, { icon: 'ArrowRightPlain20', color: 'icon.primary' }),
                            (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                              lineHeight: 'normal',
                              color: P ? 'text.interactive.error' : 'text.body',
                              children: B,
                            }),
                          ],
                        }),
                      (0, n.BX)(d.xvT.Body.XXS.Regular, {
                        lineHeight: 'normal',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px',
                        color: 'text.body',
                        children: [
                          (0, n.tZ)(d.xvT.Inherit, { children: '/' }),
                          (0, n.tZ)(eA.v1, { lltv: null == s ? void 0 : s.lltv, marketId: h }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.BX)(d.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: 'Collateral ('.concat(i.symbol, ')'),
                  }),
                  (0, n.BX)(d.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                        color: x ? 'text.tertiary' : 'text.body',
                        lineHeight: 'normal',
                        children: f,
                      }),
                      x &&
                        (0, n.BX)(n.HY, {
                          children: [
                            (0, n.tZ)(d.JO$, { icon: 'ArrowRightPlain20', color: 'icon.primary' }),
                            (0, n.tZ)(d.xvT.Body.XXS.Regular, {
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
              (0, n.BX)(d.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: 'Loan ('.concat(o.symbol, ')'),
                  }),
                  (0, n.BX)(d.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                        color: b ? 'text.tertiary' : 'text.body',
                        lineHeight: 'normal',
                        children: Z,
                      }),
                      b &&
                        (0, n.BX)(n.HY, {
                          children: [
                            (0, n.tZ)(d.JO$, { icon: 'ArrowRightPlain20', color: 'icon.primary' }),
                            (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                              lineHeight: 'normal',
                              color: 'text.body',
                              children: b,
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
        eq = (0, a.memo)((e) => {
          var t, r, l;
          let { marketId: i } = e,
            {
              updateOperation: o,
              operations: s,
              simulationError: c,
              bundlerConfiguration: u,
            } = (0, B.N)(),
            { targetChainId: h, targetChain: m } = (0, p.Z_)(),
            g = (0, eI.Zc)({ variables: { uniqueKey: i, chainId: h } }),
            {
              localOperation: v,
              inputCollateralAmount: y,
              setInputCollateralAmount: f,
              isMaxCollateral: x,
              setIsMaxCollateral: Z,
              maxCollateral: b,
              inputLoanAmount: w,
              setInputLoanAmount: k,
              isMaxLoan: C,
              setIsMaxLoan: X,
              maxLoan: A,
              peripheralTokenOptions: T,
              isNew: P,
              initialState: M,
              onPeripheralTokenOptionChange: S,
              showCollateralInput: R,
              showLoanInput: I,
              setShowCollateralInput: q,
              setShowLoanInput: K,
            } = (0, ew.f)(i, { origin: 'bundler' }),
            [L, , E] = (0, eZ._)(M.data, v, u, P),
            z = (0, a.useCallback)(() => {
              o(v.id);
            }, [v.id, o]),
            H = (0, a.useCallback)(() => {
              if (!I) {
                z();
                return;
              }
              q(!1), f(0n);
            }, [q, f, z, I]),
            _ = (0, a.useCallback)(() => {
              if (!R) {
                z();
                return;
              }
              K(!1), k(0n);
            }, [K, k, z, R]),
            D = null === (t = g.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            V = (0, a.useMemo)(
              () => (0, G.wk)(null == D ? void 0 : D.collateralAsset),
              [null == D ? void 0 : D.collateralAsset]
            ),
            N = (0, a.useMemo)(
              () => (0, G.wk)(null == D ? void 0 : D.loanAsset),
              [null == D ? void 0 : D.loanAsset]
            ),
            O = (0, a.useMemo)(
              () =>
                d.$0l.percent
                  .unit('%')
                  .default('0%')
                  .trailingZero(!1)
                  .digits(2)
                  .of(null == D ? void 0 : D.lltv, 18),
              [null == D ? void 0 : D.lltv]
            ),
            U = ek(s, null == c ? void 0 : c.index, v.id),
            j = ep({ error: c, tokens: [V, N] });
          return g.loading
            ? (0, n.tZ)(d.OdW, { height: '542px', borderRadius: '20px' })
            : D && V && N
              ? (0, n.BX)(eB, {
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.BX)(d.Kqy, {
                          gap: 8,
                          align: 'center',
                          justify: 'space-between',
                          children: [
                            (0, n.tZ)(ef.h, {
                              href: (0, eb.E3)({
                                chainName: m.name,
                                marketUniqueKey: i,
                                collateralSymbol:
                                  null !== (r = null == V ? void 0 : V.symbol) && void 0 !== r
                                    ? r
                                    : '',
                                loanSymbol:
                                  null !== (l = null == N ? void 0 : N.symbol) && void 0 !== l
                                    ? l
                                    : '',
                              }),
                              children: (0, n.BX)(d.Kqy, {
                                gap: 'xs',
                                align: 'center',
                                children: [
                                  (0, n.tZ)(d._nw, {
                                    leftAvatarProps: { src: V.logoURI },
                                    rightAvatarProps: { src: D.loanAsset.logoURI },
                                    size: 'medium',
                                  }),
                                  (0, n.tZ)(d.xvT.Title.XS, {
                                    color: 'text.body',
                                    shorten: 1,
                                    lineHeight: 'normal',
                                    children: (0, d.lAJ)({
                                      loanAsset: D.loanAsset,
                                      collateralAsset: D.collateralAsset,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, n.tZ)(d.VfW, {
                              headerLabel: 'Remove transaction from Bundler?',
                              body: 'Closing this modal will remove this transaction from the Bundler.',
                              ctaLabel: 'Remove from Bundler',
                              cancelLabel: 'Cancel',
                              ctaAction: z,
                              children: (0, n.tZ)(d.zxk, {
                                variant: 'secondary',
                                size: 'small',
                                iconAlone: 'ClosePlain20',
                              }),
                            }),
                          ],
                        }),
                        (0, n.BX)(d.Kqy, {
                          gap: 4,
                          children: [
                            (0, n.tZ)(d.Vp9, {
                              variant: 'bundler',
                              children: (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
                                lineHeight: 'normal',
                                color: 'text.body',
                                children: O,
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
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.BX)(d.Kqy, {
                          gap: 'm',
                          direction: 'column',
                          children: [
                            R &&
                              (0, n.tZ)(d.TGk, {
                                header: 'Supply Collateral',
                                amount: y,
                                token: V,
                                onChange: f,
                                maxValue: null == b ? void 0 : b.assets,
                                onMaxClick: Z,
                                isMax: x,
                                onClose: H,
                                peripheralTokenOptions: T,
                                onPeripheralTokenChange: S,
                                islastInput: !I,
                              }),
                            I &&
                              (0, n.tZ)(d.TGk, {
                                header: 'Borrow '.concat(null == N ? void 0 : N.symbol),
                                amount: w,
                                token: N,
                                onChange: k,
                                maxValue: null == A ? void 0 : A.assets,
                                onMaxClick: X,
                                isMax: C,
                                onClose: _,
                                islastInput: !R,
                              }),
                          ],
                        }),
                        U && (0, n.tZ)(eC, { text: j }),
                      ],
                    }),
                    (0, n.tZ)(eR, {
                      collateralAsset: V,
                      loanAsset: N,
                      market: D,
                      localSimulationResult: L,
                      userAddress: E,
                      marketId: i,
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, { height: '542px', text: 'Cannot display operation' });
        }),
        eK = r(91622),
        eL = (0, a.memo)((e) => {
          var t, r, l;
          let { marketId: i } = e,
            {
              updateOperation: o,
              operations: s,
              simulationError: c,
              bundlerConfiguration: u,
            } = (0, B.N)(),
            { targetChainId: h, targetChain: m } = (0, p.Z_)(),
            g = (0, eI.Zc)({ variables: { uniqueKey: i, chainId: h } }),
            {
              localOperation: v,
              inputCollateralAmount: y,
              setInputCollateralAmount: f,
              isMaxCollateral: x,
              setIsMaxCollateral: Z,
              maxCollateral: b,
              inputLoanAmount: w,
              setInputLoanAmount: k,
              isMaxLoan: C,
              setIsMaxLoan: X,
              maxLoan: A,
              peripheralTokenOptions: T,
              onPeripheralTokenOptionChange: P,
              isNew: M,
              initialState: S,
              showCollateralInput: R,
              showLoanInput: I,
              setShowCollateralInput: q,
              setShowLoanInput: K,
            } = (0, eK.O)(i, { origin: 'bundler' }),
            L = (0, a.useCallback)(() => {
              o(v.id);
            }, [v.id, o]),
            [E, , z] = (0, eZ._)(S.data, v, u, M),
            H = (0, a.useCallback)(() => {
              if (!I) {
                L();
                return;
              }
              q(!1), f(0n);
            }, [q, f, L, I]),
            _ = (0, a.useCallback)(() => {
              if (!R) {
                L();
                return;
              }
              K(!1), k(0n);
            }, [K, k, L, R]),
            D = null === (t = g.data) || void 0 === t ? void 0 : t.marketByUniqueKey,
            V = (0, a.useMemo)(
              () => (0, G.wk)(null == D ? void 0 : D.collateralAsset),
              [null == D ? void 0 : D.collateralAsset]
            ),
            N = (0, a.useMemo)(
              () => (0, G.wk)(null == D ? void 0 : D.loanAsset),
              [null == D ? void 0 : D.loanAsset]
            ),
            O = (0, a.useMemo)(
              () =>
                d.$0l.percent
                  .unit('%')
                  .default('0%')
                  .trailingZero(!1)
                  .digits(2)
                  .of(null == D ? void 0 : D.lltv, 18),
              [null == D ? void 0 : D.lltv]
            ),
            U = ek(s, null == c ? void 0 : c.index, v.id),
            j = ep({ error: c, tokens: [V, N] });
          return g.loading
            ? (0, n.tZ)(d.OdW, { height: '542px', borderRadius: '20px' })
            : D && V && N
              ? (0, n.BX)(eB, {
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.BX)(d.Kqy, {
                          gap: 8,
                          align: 'center',
                          justify: 'space-between',
                          children: [
                            (0, n.tZ)(ef.h, {
                              href: (0, eb.E3)({
                                chainName: m.name,
                                marketUniqueKey: i,
                                collateralSymbol:
                                  null !== (r = null == V ? void 0 : V.symbol) && void 0 !== r
                                    ? r
                                    : '',
                                loanSymbol:
                                  null !== (l = null == N ? void 0 : N.symbol) && void 0 !== l
                                    ? l
                                    : '',
                              }),
                              children: (0, n.BX)(d.Kqy, {
                                gap: 'xs',
                                align: 'center',
                                children: [
                                  (0, n.tZ)(d._nw, {
                                    leftAvatarProps: { src: V.logoURI },
                                    rightAvatarProps: { src: D.loanAsset.logoURI },
                                    size: 'medium',
                                  }),
                                  (0, n.tZ)(d.xvT.Title.XS, {
                                    color: 'text.body',
                                    shorten: 1,
                                    lineHeight: 'normal',
                                    children: (0, d.lAJ)({
                                      loanAsset: D.loanAsset,
                                      collateralAsset: D.collateralAsset,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, n.tZ)(d.VfW, {
                              headerLabel: 'Remove transaction from Bundler?',
                              body: 'Closing this modal will remove this transaction from the Bundler.',
                              ctaLabel: 'Remove from Bundler',
                              cancelLabel: 'Cancel',
                              ctaAction: L,
                              children: (0, n.tZ)(d.zxk, {
                                variant: 'secondary',
                                size: 'small',
                                iconAlone: 'ClosePlain20',
                              }),
                            }),
                          ],
                        }),
                        (0, n.BX)(d.Kqy, {
                          gap: 4,
                          children: [
                            (0, n.tZ)(d.Vp9, {
                              variant: 'bundler',
                              children: (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
                                lineHeight: 'normal',
                                color: 'text.body',
                                children: O,
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
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.BX)(d.Kqy, {
                          gap: 'm',
                          direction: 'column',
                          children: [
                            I &&
                              (0, n.tZ)(d.TGk, {
                                header: 'Repay '.concat(null == N ? void 0 : N.symbol),
                                amount: w,
                                token: N,
                                onChange: k,
                                maxValue: null == A ? void 0 : A.assets,
                                onMaxClick: X,
                                isMax: C,
                                onClose: _,
                                peripheralTokenOptions: T,
                                onPeripheralTokenChange: P,
                                islastInput: !R,
                              }),
                            R &&
                              (0, n.tZ)(d.TGk, {
                                header: 'Withdraw '.concat(null == V ? void 0 : V.symbol),
                                amount: y,
                                token: V,
                                onChange: f,
                                maxValue: null == b ? void 0 : b.assets,
                                onMaxClick: Z,
                                isMax: x,
                                onClose: H,
                                islastInput: !I,
                              }),
                          ],
                        }),
                        U && (0, n.tZ)(eC, { text: j }),
                      ],
                    }),
                    (0, n.tZ)(eR, {
                      collateralAsset: V,
                      loanAsset: N,
                      market: D,
                      localSimulationResult: E,
                      userAddress: z,
                      marketId: i,
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, { height: '542px', text: 'Cannot display operation' });
        }),
        eE = r(48972),
        ez = r(55872),
        eH = r(9834),
        e_ = r(73057),
        eD = r(83897),
        eV = (0, a.memo)((e) => {
          var t, r, l, i, o, s;
          let {
              vaultAsset: c,
              vault: u,
              warnings: h,
              localSimulationResult: m,
              userAddress: g,
              vaultAddress: v,
            } = e,
            { initialData: y, finalData: f } = (0, e_.Z)(g, m, v, c),
            { targetChainId: x } = (0, p.Z_)(),
            Z = (0, a.useMemo)(() => {
              var e;
              return (0, eH.m)(
                null == u ? void 0 : null === (e = u.state) || void 0 === e ? void 0 : e.allocation
              );
            }, [
              null == u ? void 0 : null === (t = u.state) || void 0 === t ? void 0 : t.allocation,
            ]),
            b = (0, a.useMemo)(() => {
              if (h) return (0, d.Myy)(h);
            }, [h]),
            w = (0, a.useMemo)(
              () =>
                d.$0l.short
                  .default('-')
                  .digits((0, d.QQD)(c.price, null == y ? void 0 : y.position))
                  .trailingZero(!(null == y ? void 0 : y.position))
                  .of(null == y ? void 0 : y.position, c.decimals),
              [null == y ? void 0 : y.position, c.decimals, c.price]
            ),
            k = (0, a.useMemo)(
              () =>
                d.$0l.short
                  .digits((0, d.QQD)(c.price, null == f ? void 0 : f.position))
                  .trailingZero(!(null == f ? void 0 : f.position))
                  .of(null == f ? void 0 : f.position, c.decimals),
              [null == f ? void 0 : f.position, c.decimals, c.price]
            ),
            B = (0, a.useMemo)(() => {
              var e;
              return d.$0l.percent
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
            C = (0, eD.M)(v, null == u ? void 0 : u.state, null == u ? void 0 : u.asset),
            X = (0, d.vmq)({
              chainId: x,
              vaultAddress: v,
              allocation:
                null == u ? void 0 : null === (l = u.state) || void 0 === l ? void 0 : l.allocation,
            });
          return (0, n.BX)(d.Kqy, {
            gap: 4,
            direction: 'column',
            children: [
              (0, n.BX)(d.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: 'Position ('.concat(c.symbol, ')'),
                  }),
                  (0, n.BX)(d.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                        color: 'text.tertiary',
                        lineHeight: 'normal',
                        children: w,
                      }),
                      k &&
                        (0, n.BX)(n.HY, {
                          children: [
                            (0, n.tZ)(d.JO$, { icon: 'ArrowRightPlain20', color: 'icon.tertiary' }),
                            (0, n.tZ)(d.xvT.Body.XXS.Regular, {
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
              (0, n.BX)(d.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(d.xvT.Body.XXS.Regular, { color: 'text.secondary', children: 'APY' }),
                  (0, n.tZ)(eT.w, {
                    RewardsHoverCardProps: {
                      performanceFee: (0, eP.Pi)(
                        null == u
                          ? void 0
                          : null === (i = u.state) || void 0 === i
                            ? void 0
                            : i.fee,
                        eX.safeParseNumber
                      ),
                      apy: (0, eP.Pi)(
                        null == u
                          ? void 0
                          : null === (o = u.state) || void 0 === o
                            ? void 0
                            : o.dailyApy,
                        eX.safeParseNumber
                      ),
                      netApy: (0, eP.Pi)(
                        null == u
                          ? void 0
                          : null === (s = u.state) || void 0 === s
                            ? void 0
                            : s.dailyNetApy,
                        eX.safeParseNumber
                      ),
                      rewards: C,
                      variant: 'vault',
                      points: X,
                      asset: (0, G.wk)(null == u ? void 0 : u.asset),
                    },
                    children: (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                      lineHeight: 'normal',
                      color: 'text.body',
                      children: B,
                    }),
                  }),
                ],
              }),
              (0, n.BX)(d.Kqy, {
                justify: 'space-between',
                children: [
                  (0, n.tZ)(d.xvT.Body.XXS.Regular, {
                    color: 'text.secondary',
                    children: 'Collateral Exposure',
                  }),
                  (0, n.tZ)(d.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: (0, n.tZ)(ez.m, {
                      collateralExposures: Z,
                      extraInfo: b && (0, n.tZ)(d.aNP, { ...b }),
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
        eO = (0, a.memo)((e) => {
          var t, r, l, i, o;
          let { vaultAddress: s } = e,
            {
              updateOperation: c,
              operations: u,
              simulationError: h,
              bundlerConfiguration: m,
            } = (0, B.N)(),
            { targetChainId: g, targetChain: v } = (0, p.Z_)(),
            y = (0, eN.eg)({ variables: { address: s, chainId: g } }),
            f = null === (t = y.data) || void 0 === t ? void 0 : t.vaultByAddress,
            x = (0, a.useMemo)(
              () => (0, G.wk)(null == f ? void 0 : f.asset),
              [null == f ? void 0 : f.asset]
            ),
            {
              localOperation: Z,
              inputAmount: b,
              setInputAmount: w,
              isMax: k,
              setIsMax: C,
              maxAmount: X,
              isNew: A,
              initialState: T,
            } = (0, eE.L)(s, { origin: 'bundler' }),
            [P, , M] = (0, eZ._)(T.data, Z, m, A),
            S = (0, a.useCallback)(() => {
              c(Z.id);
            }, [Z.id, c]),
            R = ek(u, null == h ? void 0 : h.index, Z.id),
            I = ep({ error: h, tokens: [x] });
          return y.loading
            ? (0, n.tZ)(d.OdW, { height: '365px', borderRadius: '20px' })
            : f
              ? (0, n.BX)(eB, {
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      align: 'center',
                      justify: 'space-between',
                      children: [
                        (0, n.tZ)(ef.h, {
                          href: (0, eb.Q)({
                            chainName: v.name,
                            vaultAddress: s,
                            vaultName:
                              null !==
                                (o =
                                  null === (r = y.data) || void 0 === r
                                    ? void 0
                                    : r.vaultByAddress.name) && void 0 !== o
                                ? o
                                : '',
                          }),
                          children: (0, n.BX)(d.Kqy, {
                            gap: 'xs',
                            align: 'center',
                            children: [
                              (0, n.tZ)(d.qEK, { src: f.asset.logoURI, size: 'medium' }),
                              (0, n.tZ)(d.xvT.Title.XS, {
                                color: 'text.body',
                                shorten: 1,
                                lineHeight: 'normal',
                                children: f.name,
                              }),
                            ],
                          }),
                        }),
                        (0, n.tZ)(d.VfW, {
                          headerLabel: 'Remove transaction from Bundler?',
                          body: 'Closing this modal will remove this transaction from the Bundler.',
                          ctaLabel: 'Remove from Bundler',
                          cancelLabel: 'Cancel',
                          ctaAction: S,
                          children: (0, n.tZ)(d.zxk, {
                            variant: 'secondary',
                            size: 'small',
                            iconAlone: 'ClosePlain20',
                          }),
                        }),
                      ],
                    }),
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.tZ)(d.TGk, {
                          header: 'Withdraw '.concat(null == f ? void 0 : f.asset.symbol),
                          amount: b,
                          token: x,
                          onChange: w,
                          isMax: k,
                          maxValue: X,
                          onMaxClick: C,
                        }),
                        R && (0, n.tZ)(eC, { text: I }),
                      ],
                    }),
                    (0, n.tZ)(eV, {
                      vaultAsset: x,
                      vault: null === (l = y.data) || void 0 === l ? void 0 : l.vaultByAddress,
                      warnings:
                        null === (i = y.data) || void 0 === i ? void 0 : i.vaultByAddress.warnings,
                      localSimulationResult: P,
                      userAddress: M,
                      vaultAddress: s,
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, { height: '365px', text: 'Cannot display operation' });
        }),
        eU = r(71021),
        ej = (0, a.memo)((e) => {
          var t, r, l, i, o;
          let { vaultAddress: s } = e,
            {
              updateOperation: c,
              operations: u,
              simulationError: h,
              bundlerConfiguration: m,
            } = (0, B.N)(),
            { targetChainId: g, targetChain: v } = (0, p.Z_)(),
            y = (0, eN.eg)({ variables: { address: s, chainId: g } }),
            f = null === (t = y.data) || void 0 === t ? void 0 : t.vaultByAddress,
            x = (0, a.useMemo)(
              () => (0, G.wk)(null == f ? void 0 : f.asset),
              [null == f ? void 0 : f.asset]
            ),
            {
              localOperation: Z,
              inputAmount: b,
              setInputAmount: w,
              isMax: k,
              isNew: C,
              setIsMax: X,
              maxAmount: A,
              peripheralTokenOptions: T,
              initialState: P,
              onPeripheralTokenOptionChange: M,
            } = (0, eU.o)(s, { origin: 'bundler' }),
            [S, , R] = (0, eZ._)(P.data, Z, m, C),
            I = (0, a.useCallback)(() => {
              c(Z.id);
            }, [Z.id, c]),
            q = ek(u, null == h ? void 0 : h.index, Z.id),
            K = ep({ error: h, tokens: [x] });
          return y.loading
            ? (0, n.tZ)(d.OdW, { height: '365px', borderRadius: '20px' })
            : f
              ? (0, n.BX)(eB, {
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      align: 'center',
                      justify: 'space-between',
                      children: [
                        (0, n.tZ)(ef.h, {
                          href: (0, eb.Q)({
                            chainName: v.name,
                            vaultAddress: s,
                            vaultName:
                              null !==
                                (o =
                                  null === (r = y.data) || void 0 === r
                                    ? void 0
                                    : r.vaultByAddress.name) && void 0 !== o
                                ? o
                                : '',
                          }),
                          children: (0, n.BX)(d.Kqy, {
                            gap: 'xs',
                            align: 'center',
                            children: [
                              (0, n.tZ)(d.qEK, { src: f.asset.logoURI, size: 'medium' }),
                              (0, n.tZ)(d.xvT.Title.XS, {
                                color: 'text.body',
                                shorten: 1,
                                lineHeight: 'normal',
                                children: f.name,
                              }),
                            ],
                          }),
                        }),
                        (0, n.tZ)(d.VfW, {
                          headerLabel: 'Remove transaction from Bundler?',
                          body: 'Closing this modal will remove this transaction from the Bundler.',
                          ctaLabel: 'Remove from Bundler',
                          cancelLabel: 'Cancel',
                          ctaAction: I,
                          children: (0, n.tZ)(d.zxk, {
                            variant: 'secondary',
                            size: 'small',
                            iconAlone: 'ClosePlain20',
                          }),
                        }),
                      ],
                    }),
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.tZ)(d.TGk, {
                          header: 'Deposit '.concat(null == f ? void 0 : f.asset.symbol),
                          amount: b,
                          token: x,
                          onChange: w,
                          isMax: k,
                          maxValue: A,
                          onMaxClick: X,
                          peripheralTokenOptions: T,
                          onPeripheralTokenChange: M,
                        }),
                        q && (0, n.tZ)(eC, { text: K }),
                      ],
                    }),
                    (0, n.tZ)(eV, {
                      vaultAsset: x,
                      vault: null === (l = y.data) || void 0 === l ? void 0 : l.vaultByAddress,
                      warnings:
                        null === (i = y.data) || void 0 === i ? void 0 : i.vaultByAddress.warnings,
                      localSimulationResult: S,
                      userAddress: R,
                      vaultAddress: s,
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, { height: '365px', text: 'Cannot display operation' });
        }),
        eW = r(91794),
        e$ = r(19311),
        eG = r(40252);
      let eF = (e) => d.$0l.percent.digits(2).trailingZero(!1).unit('%').default('-').of(e, 18);
      var eQ = (0, a.memo)((e) => {
          var t, r, l, i, o, s, c, h, m, g, v, y, f, x, Z, b, w, k, B;
          let {
              loading: C,
              apiMarket: X,
              initialMarketData: A,
              finalMarketData: T,
              initialPosition: P,
              previewedMarket: M,
              previewedPosition: S,
              errors: R,
            } = e,
            { targetChain: I, targetChainId: q } = (0, p.Z_)(),
            K = (0, eA.B9)({
              lltv: null == X ? void 0 : X.lltv,
              marketId: null == X ? void 0 : X.uniqueKey,
            }),
            L = (0, eS.H)(X),
            E = (0, d.$4C)({
              chainId: q,
              uniqueKey: null == X ? void 0 : X.uniqueKey,
              collateralAddress:
                null == X
                  ? void 0
                  : null === (t = X.collateralAsset) || void 0 === t
                    ? void 0
                    : t.address,
            }),
            z = (0, a.useMemo)(
              () => !!A && null != P && !!P.ltv && !!K && (0, G.M4)(P.ltv, K),
              [P, A, K]
            ),
            H = (0, a.useMemo)(() => {
              var e;
              return d.$0l.percent
                .default('0.00')
                .digits(2)
                .unit('%')
                .of(
                  null == X
                    ? void 0
                    : null === (e = X.state) || void 0 === e
                      ? void 0
                      : e.dailyNetBorrowApy
                );
            }, [
              null == X
                ? void 0
                : null === (r = X.state) || void 0 === r
                  ? void 0
                  : r.dailyNetBorrowApy,
            ]);
          return C
            ? (0, n.tZ)(d.OdW, { height: '542px', borderRadius: '20px' })
            : X && X.collateralAsset
              ? (0, n.BX)(eB, {
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 8,
                      direction: 'column',
                      children: [
                        (0, n.tZ)(d.Kqy, {
                          gap: 8,
                          align: 'center',
                          justify: 'space-between',
                          children: (0, n.tZ)(ef.h, {
                            href: (0, eb.E3)({
                              chainName: I.name,
                              marketUniqueKey: X.uniqueKey,
                              collateralSymbol:
                                null === (l = X.collateralAsset) || void 0 === l
                                  ? void 0
                                  : l.symbol,
                              loanSymbol: X.loanAsset.symbol,
                            }),
                            children: (0, n.BX)(d.Kqy, {
                              gap: 'xs',
                              align: 'center',
                              children: [
                                (0, n.tZ)(d._nw, {
                                  leftAvatarProps: {
                                    src:
                                      null === (i = X.collateralAsset) || void 0 === i
                                        ? void 0
                                        : i.logoURI,
                                  },
                                  rightAvatarProps: { src: X.loanAsset.logoURI },
                                  size: 'medium',
                                }),
                                (0, n.tZ)(d.xvT.Title.XS, {
                                  color: 'text.body',
                                  shorten: 1,
                                  lineHeight: 'normal',
                                  children: (0, d.lAJ)({
                                    loanAsset: X.loanAsset,
                                    collateralAsset: X.collateralAsset,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, n.BX)(d.Kqy, {
                          gap: 4,
                          children: [
                            (0, n.tZ)(d.Vp9, {
                              variant: 'bundler',
                              children: (0, n.tZ)(d.xvT.Body.XXXS.Regular, {
                                lineHeight: 'normal',
                                color: 'text.body',
                                children: eF(null == A ? void 0 : A.params.lltv),
                              }),
                            }),
                            (0, n.tZ)(ex.Z, {
                              tagProps: { variant: 'bundler' },
                              oracle: { address: X.oracleAddress, ...X.oracleFeed },
                              warnings: X.warnings,
                              typographyProps: { color: 'text.body' },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.BX)(d.soA.List, {
                      children: [
                        (0, n.tZ)(d.soA.ListItem, {
                          label: 'Borrow Rate',
                          value: (0, n.tZ)(eT.w, {
                            RewardsHoverCardProps: {
                              performanceFee: (0, eP.Pi)(
                                null === (o = X.state) || void 0 === o ? void 0 : o.fee,
                                eX.safeParseNumber
                              ),
                              apy: (0, eP.Pi)(
                                null === (s = X.state) || void 0 === s ? void 0 : s.dailyBorrowApy,
                                eX.safeParseNumber
                              ),
                              rewards: L,
                              variant: 'market',
                              points: E,
                              asset: X.collateralAsset,
                              netApy: (0, eP.Pi)(
                                null === (c = X.state) || void 0 === c
                                  ? void 0
                                  : c.dailyNetBorrowApy,
                                eX.safeParseNumber
                              ),
                            },
                            children: (0, n.tZ)(d.soA.Value, { value: H }),
                          }),
                        }),
                        (0, n.tZ)(d.soA.ListItem, {
                          warning: R.ltvError,
                          label: (0, n.tZ)(eA.gX, { marketId: X.uniqueKey }),
                          value: (0, n.BX)(d.Kqy, {
                            direction: 'row',
                            align: 'center',
                            gap: '2px',
                            children: [
                              (0, n.tZ)(d.soA.ValueChange, {
                                initialProps: {
                                  value: null == P ? void 0 : P.ltv,
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
                                  d.$0l.percent
                                    .unit('%')
                                    .trailingZero(!1)
                                    .digits(2)
                                    .max(1)
                                    .of(e, 18),
                              }),
                              (0, n.BX)(d.xvT.Body.XXS.Regular, {
                                display: 'flex',
                                alignItems: 'center',
                                lineHeight: 'normal',
                                gap: '2px',
                                children: [
                                  (0, n.tZ)(d.xvT.Inherit, { children: '/' }),
                                  (0, n.tZ)(eA.v1, {
                                    lltv: null == A ? void 0 : A.params.lltv,
                                    marketId: X.uniqueKey,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, n.tZ)(d.soA.ListItem, {
                          warning: R.collateralError,
                          label: 'Collateral ('.concat(
                            (0, u.formatLongString)(
                              null !==
                                (x =
                                  null === (m = X.collateralAsset) || void 0 === m
                                    ? void 0
                                    : m.symbol) && void 0 !== x
                                ? x
                                : ''
                            ),
                            ')'
                          ),
                          value: (0, n.tZ)(d.soA.ValueChange, {
                            initialProps: { value: (0, u.getValue)(P, 'collateral') },
                            finalProps: {
                              value: (0, u.getValue)(S, 'collateral'),
                              typographyProps: {
                                color:
                                  null !==
                                    (Z =
                                      null === (g = R.collateralError) || void 0 === g
                                        ? void 0
                                        : g.color) && void 0 !== Z
                                    ? Z
                                    : 'text.body',
                              },
                            },
                            formatter: (e) => {
                              var t, r;
                              return d.$0l.commas
                                .digits(2)
                                .trailingZero(!1)
                                .of(
                                  e,
                                  null !==
                                    (r =
                                      null === (t = X.collateralAsset) || void 0 === t
                                        ? void 0
                                        : t.decimals) && void 0 !== r
                                    ? r
                                    : 18
                                );
                            },
                          }),
                        }),
                        (0, n.tZ)(d.soA.ListItem, {
                          warning: R.borrowError,
                          label: 'Loan ('.concat(
                            (0, u.formatLongString)(
                              null !== (b = X.loanAsset.symbol) && void 0 !== b ? b : ''
                            ),
                            ')'
                          ),
                          value: (0, n.tZ)(d.soA.ValueChange, {
                            initialProps: { value: (0, u.getValue)(P, 'borrowAssets') },
                            finalProps: {
                              value: (0, u.getValue)(S, 'borrowAssets'),
                              typographyProps: {
                                color:
                                  null !==
                                    (w =
                                      null === (v = R.borrowError) || void 0 === v
                                        ? void 0
                                        : v.color) && void 0 !== w
                                    ? w
                                    : 'text.body',
                              },
                            },
                            formatter: (e) =>
                              d.$0l.commas.digits(2).trailingZero(!1).of(e, X.loanAsset.decimals),
                          }),
                        }),
                        (0, n.tZ)(d.soA.ListItem, {
                          warning: R.liquidityError,
                          label: 'Liquidity ('.concat(
                            (0, u.formatLongString)(
                              null !== (k = X.loanAsset.symbol) && void 0 !== k ? k : ''
                            ),
                            ')'
                          ),
                          value: (0, n.tZ)(d.soA.ValueChange, {
                            initialProps: {
                              value: (0, u.transformValue)(
                                (0, u.getValue)(A, 'liquidity'),
                                eG.MathLib.max.bind(void 0, 0n)
                              ),
                            },
                            finalProps: {
                              value: (0, u.transformValue)(
                                (0, u.getValue)(null != T ? T : M, 'liquidity'),
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
                              d.$0l.commas.digits(2).trailingZero(!1).of(e, X.loanAsset.decimals),
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : (0, n.tZ)(d.SKT, { height: '542px', text: 'Cannot display operation' });
        }),
        eY = r(82196),
        eJ = (0, a.memo)((e) => {
          var t, r, l, i, o;
          let { operation: s } = e,
            {
              updateOperation: c,
              bundlerConfiguration: u,
              simulationError: h,
              operations: m,
            } = (0, B.N)(),
            { targetChainId: g } = (0, p.Z_)(),
            v = (0, eY.Pm)({
              variables: { where: { uniqueKey_in: [s.marketId, s.marketTo], chainId_in: [g] } },
            }),
            y = (0, a.useMemo)(() => {
              var e, t, r;
              return (0, G.wk)(
                null === (r = v.data) || void 0 === r
                  ? void 0
                  : null === (t = r.markets.items) || void 0 === t
                    ? void 0
                    : null === (e = t[0]) || void 0 === e
                      ? void 0
                      : e.collateralAsset
              );
            }, [null === (t = v.data) || void 0 === t ? void 0 : t.markets.items]),
            f = (0, a.useMemo)(() => {
              var e, t, r;
              return (0, G.wk)(
                null === (r = v.data) || void 0 === r
                  ? void 0
                  : null === (t = r.markets.items) || void 0 === t
                    ? void 0
                    : null === (e = t[0]) || void 0 === e
                      ? void 0
                      : e.loanAsset
              );
            }, [null === (r = v.data) || void 0 === r ? void 0 : r.markets.items]),
            x = (0, a.useMemo)(() => {
              var e, t;
              return null === (t = v.data) || void 0 === t
                ? void 0
                : null === (e = t.markets.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.uniqueKey === s.marketId);
            }, [null === (l = v.data) || void 0 === l ? void 0 : l.markets.items, s.marketId]),
            Z = (0, a.useMemo)(() => {
              var e, t;
              return null === (t = v.data) || void 0 === t
                ? void 0
                : null === (e = t.markets.items) || void 0 === e
                  ? void 0
                  : e.find((e) => e.uniqueKey === s.marketTo);
            }, [null === (i = v.data) || void 0 === i ? void 0 : i.markets.items, s.marketTo]),
            {
              localOperation: b,
              isNew: w,
              isLoading: k,
              initialState: C,
              inputCollateralAmount: X,
              inputBorrowAmount: A,
              isMaxCollateral: T,
              isMaxBorrow: P,
              maxBorrowAmount: M,
              setInputCollateralAmount: S,
              setInputBorrowAmount: R,
              setIsMaxCollateral: I,
              setIsMaxBorrow: q,
            } = (0, eW.p)({
              marketFrom: s.marketId,
              marketTo: s.marketTo,
              initialOperation: s,
              options: { autoConfirm: !0 },
            }),
            [K] = (0, eZ._)(C.data, b, u, w),
            [L, E] = null != K ? K : [],
            z = (0, e$.g)({ marketId: s.marketId, initialState: L, finalState: E, operation: b }),
            H = (0, e$.g)({
              marketId: s.marketTo,
              initialState: L,
              finalState: E,
              operation: b,
              isNewMarket: !0,
            }),
            _ = ep({ error: h, tokens: [y, f] }),
            D = ek(m, null == h ? void 0 : h.index, b.id),
            V = (0, a.useCallback)(() => {
              c(b.id);
            }, [b.id, c]);
          return (0, n.tZ)(eB, {
            children: (0, n.BX)(d.Kqy, {
              gap: 'm',
              direction: 'column',
              children: [
                (0, n.BX)(d.Kqy, {
                  gap: 8,
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(d.xvT.Title.XS, { children: 'Refinance Position' }),
                    (0, n.tZ)(d.VfW, {
                      headerLabel: 'Remove transaction from Bundler?',
                      body: 'Closing this modal will remove this transaction from the Bundler.',
                      ctaLabel: 'Remove from Bundler',
                      cancelLabel: 'Cancel',
                      ctaAction: V,
                      children: (0, n.tZ)(d.zxk, {
                        variant: 'secondary',
                        size: 'small',
                        iconAlone: 'ClosePlain20',
                      }),
                    }),
                  ],
                }),
                (0, n.BX)(d.Kqy, {
                  gap: 8,
                  direction: 'column',
                  children: [
                    (0, n.BX)(d.Kqy, {
                      gap: 'm',
                      direction: 'column',
                      children: [
                        v.loading || !y
                          ? (0, n.tZ)(d.OdW, {
                              width: '100%',
                              height: '115px',
                              borderRadius: '20px',
                            })
                          : (0, n.tZ)(d.TGk, {
                              fullWidth: !0,
                              token: y,
                              amount: X,
                              onChange: S,
                              header: 'Collateral amount',
                              maxValue:
                                null === (o = z.initialPosition) || void 0 === o
                                  ? void 0
                                  : o.collateral,
                              onMaxClick: I,
                              isMax: T,
                              disabled: k,
                            }),
                        v.loading || !f
                          ? (0, n.tZ)(d.OdW, {
                              width: '100%',
                              height: '115px',
                              borderRadius: '20px',
                            })
                          : (0, n.tZ)(d.TGk, {
                              fullWidth: !0,
                              token: f,
                              amount: A,
                              onChange: R,
                              header: 'Loan amount',
                              maxValue: null == M ? void 0 : M.assets,
                              onMaxClick: q,
                              isMax: P,
                              disabled: k,
                            }),
                      ],
                    }),
                    D && (0, n.tZ)(eC, { text: _ }),
                  ],
                }),
                (0, n.BX)(d.Kqy, {
                  gap: 8,
                  direction: 'column',
                  children: [
                    (0, n.tZ)(eQ, { loading: v.loading, apiMarket: x, ...z }),
                    (0, n.tZ)(d.Kqy, {
                      direction: 'row',
                      justify: 'center',
                      children: (0, n.tZ)(d.zxk, {
                        variant: 'secondary',
                        size: 'default',
                        iconAlone: 'ArrowRightPlain20',
                        style: { transform: 'rotate(90deg)', pointerEvents: 'none' },
                      }),
                    }),
                    (0, n.tZ)(eQ, { loading: v.loading, apiMarket: Z, ...H }),
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
            return (0, n.tZ)(ej, { vaultAddress: t.vaultAddress });
          case ec.H.InterfaceOperationType.metaMorphoWithdraw:
            return (0, n.tZ)(eO, { vaultAddress: t.vaultAddress });
          case ec.H.InterfaceOperationType.supplyCollateralBorrow:
            return (0, n.tZ)(eq, { marketId: t.marketId });
          case ec.H.InterfaceOperationType.withdrawCollateralRepay:
            return (0, n.tZ)(eL, { marketId: t.marketId });
          case ec.H.InterfaceOperationType.zap:
            return (0, n.tZ)(eJ, { operation: t });
          default:
            return (0, n.tZ)(d.xvT.Label.M, { children: 'Unsupported Operation' });
        }
      };
      var e1 = (0, a.memo)(() => {
          let { operations: e, simulationError: t, resetOperations: r } = (0, B.N)(),
            { isOpen: l, toggleDialog: i } = (0, d.DAv)(),
            { toggleRightPanel: o } = (0, d.s8G)(),
            s = (0, a.useRef)(null),
            c = (0, a.useRef)(0),
            u = (0, a.useRef)(null),
            { account: h } = (0, p.Z_)(),
            m = (0, W.useRouter)(),
            g = (0, W.usePathname)(),
            v = (0, a.useRef)(void 0);
          (0, a.useEffect)(() => {
            o(!1);
          }, [g, o]),
            (0, a.useEffect)(() => {
              h.address || (r(), o(!1)),
                h.address &&
                  v.current &&
                  !(0, $.E)(v.current, h.address) &&
                  window.location.reload(),
                (v.current = h.address);
            }, [h.address, r, o, m]);
          let y = ep({ error: t, returnOnlyFormattedMessage: !0 }),
            f = (0, a.useCallback)(() => {
              s.current &&
                requestAnimationFrame(() => {
                  var e;
                  null === (e = s.current) ||
                    void 0 === e ||
                    e.scrollTo({ top: s.current.scrollHeight, behavior: 'smooth' });
                });
            }, []);
          return (
            (0, a.useEffect)(
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
            (0, n.tZ)(es.K, {
              fallback: (0, n.tZ)(ed.c, { minHeight: '400px' }),
              children: (0, n.BX)(eh, {
                'data-testid': 'bundler-container',
                direction: 'column',
                align: 'stretch',
                children: [
                  (0, n.BX)(em, {
                    ref: s,
                    direction: 'column',
                    gap: 16,
                    align: 'stretch',
                    children: [
                      0 === e.length && (0, n.tZ)(ea, {}),
                      e.map((e) => (0, n.tZ)(e0, { operation: e }, e.id)),
                    ],
                  }),
                  (0, n.tZ)(eg, {
                    children: (0, n.tZ)(ev, {
                      label: null != y ? y : 'Review',
                      size: 'large',
                      disabled: l || !!t || 0 === e.length,
                      onClick: () => i((0, n.tZ)(ey.Z, { operations: e })),
                      'data-testid': 'bundler-finalize-button',
                    }),
                  }),
                ],
              }),
            })
          );
        }),
        e2 = r(66888);
      let e5 = (0, a.lazy)(() => r.e(898).then(r.bind(r, 40898)));
      var e4 = (0, a.memo)((e) => {
          let { children: t } = e,
            r = (0, g.nh)(g.TP.SIMULATION_STATE_VIEWER);
          return (0, n.BX)(d.RQC, {
            navBar: (0, n.tZ)(j, {}),
            bundler: (0, n.tZ)(e1, {}),
            children: [(0, n.tZ)(e2.Z, {}), t, r && (0, n.tZ)(e5, {})],
          });
        }),
        e8 = r(4366),
        e6 = r(62239),
        e3 = r(62788),
        e7 = r(73866),
        e9 = r(58321);
      let te = (0, a.createContext)(null);
      var tt = (e) => {
          let { children: t } = e,
            { dialogs: r } = (0, e9.il)(),
            { toggleDialog: l, isOpen: i } = (0, d.DAv)(),
            { isServiceUnavailableDialogOpen: o } = (0, e3.J1)();
          return (
            (0, a.useEffect)(() => {
              let { dialog: e } = (0, e7.F)(r);
              e && l(null == e ? void 0 : e.component, null == e ? void 0 : e.dialogOptions);
            }, [r, l]),
            (0, a.useEffect)(() => {
              o && !i && l((0, n.tZ)(e6.dm, {}), { closable: !1, maxWidth: '400px' });
            }, [o, l, i]),
            (0, n.tZ)(te.Provider, { value: {}, children: t })
          );
        },
        tr = (0, a.memo)((e) => {
          let { children: t } = e;
          return (0, n.tZ)(e9.ZP, {
            children: (0, n.tZ)(d.re2, { children: (0, n.tZ)(tt, { children: t }) }),
          });
        }),
        tn = r(34895),
        tl = r(99095),
        ti = r(55694),
        to = r(98949),
        ta = r(68906),
        td = r(3918),
        ts = r(23403),
        tc = r(78676),
        tu = r.n(tc),
        tp = r(36396),
        th = r(91988),
        tm = r(45933),
        tg = r(50577),
        tv = r(72398),
        ty = r(77404),
        tf = r(13191);
      BigInt.prototype.toJSON = function () {
        return this.toString();
      };
      let tx = new ty.h({ typePolicies: tf.typePolicies }),
        tZ = (function () {
          let e = k.clientEnvs.NEXT_PUBLIC_BLUE_API_URL,
            t = new tp.u({ uri: e }),
            r = new tv.W({ delay: { initial: 800 }, attempts: { max: 3 } }).concat(t),
            n = (0, tg.N)({
              sha256: (e) => tu().createHash('sha256').update(e).digest('hex'),
              useGETForHashedQueries: !0,
            }).concat(r),
            l = new tp.u({ uri: 'https://base.easscan.org/graphql' });
          return new th.f({
            link: tm.i.split((e) => 'linkEasscan' === e.getContext().clientName, l, n),
            cache: tx,
          });
        })();
      function tb(e) {
        let { children: t } = e;
        return (0, n.tZ)(ts.e, { client: tZ, children: t });
      }
      var tw = r(86876);
      let tk = (0, r(42729).default)(() => Promise.resolve().then(r.bind(r, 85475)), {
        loadableGenerated: { webpack: () => [85475] },
        ssr: !1,
      });
      var tB = (e) => {
          let { children: t, cookies: r } = e,
            { displayToast: l } = (0, d.V6$)(),
            i = (0, a.useCallback)(
              (e) => {
                e.type === p.UK.success &&
                  l({
                    description: 'Wallet network successfully switched to '.concat(
                      e.chain.name,
                      '.'
                    ),
                    notificationStatus: d.EzR.success,
                    duration: 1200,
                  });
              },
              [l]
            );
          return (0, n.tZ)(tk, { cookies: r, onSetTargetChainEvent: i, children: t });
        },
        tC = () =>
          (0, n.tZ)(d.Kqy, {
            direction: 'column',
            align: 'center',
            justify: 'center',
            gap: 'm',
            grow: 1,
            width: '100vw',
            height: '100vh',
            children: (0, n.BX)(d.Kqy, {
              direction: 'column',
              align: 'center',
              justify: 'center',
              gap: 's',
              children: [
                (0, n.tZ)(d.JO$, { icon: 'MorphoPlain20', size: 46 }),
                (0, n.BX)(d.Kqy, {
                  direction: 'column',
                  align: 'center',
                  justify: 'center',
                  gap: 'm',
                  grow: 1,
                  maxWidth: '400px',
                  children: [
                    (0, n.BX)(d.Kqy, {
                      direction: 'column',
                      align: 'center',
                      justify: 'center',
                      gap: 's',
                      children: [
                        (0, n.BX)(d.Kqy, {
                          align: 'center',
                          gap: 6,
                          children: [
                            (0, n.tZ)(d.JO$, {
                              icon: 'AlertPlain20',
                              color: 'icon.primary',
                              size: 28,
                            }),
                            (0, n.tZ)(d.xvT.Title.XS, { children: 'Oops! Something went wrong.' }),
                          ],
                        }),
                        (0, n.BX)(d.xvT.Body.S.Regular, {
                          textAlign: 'center',
                          children: [
                            "We're sorry for the inconvenience. If the issue persists, please reach out to our support team on",
                            ' ',
                            (0, n.tZ)(d.dLw, { href: k.Vs, underlined: !0, children: 'Discord' }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, n.tZ)(d.zxk, {
                      variant: 'secondary',
                      label: 'Reload page',
                      onClick: () => window.location.reload(),
                    }),
                  ],
                }),
              ],
            }),
          }),
        tX = r(91289),
        tA = r(55135);
      let tT = ''.concat(tA.CT.Root, '.').concat('theme'),
        tP = (e) => {
          let { children: t, themeCookie: r } = e,
            l = !!k.clientEnvs.NEXT_PUBLIC_LIGHT_MODE_FEATURE_FLAG,
            i = (0, a.useCallback)((e) => {
              (0, tX.K)(tT, e);
            }, []);
          return (0, n.tZ)(d.$26, {
            isLightModeEnabled: l,
            themeCookie: r,
            storeThemePreference: i,
            children: t,
          });
        };
      var tM = r(77187);
      let tS = () => (
        (0, a.useEffect)(() => {
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
        (o.ZP.configure({ sdkKey: k.clientEnvs.NEXT_PUBLIC_SPINDL_SDK_KEY, debugMode: !1 }),
        o.ZP.enableAutoPageViews());
      var tR = (e) => {
        let { children: t, cookies: r, countryCode: o, themeCookie: a } = e;
        return (0, n.BX)(i.SV, {
          beforeCapture: (e) => e.setLevel('fatal'),
          fallback: (0, n.tZ)(tP, { themeCookie: a, children: (0, n.tZ)(tC, {}) }),
          children: [
            (0, n.tZ)(tS, {}),
            (0, n.tZ)(l.Y, {
              children: (0, n.tZ)(td.ZP, {
                countryCode: o,
                children: (0, n.tZ)(tb, {
                  children: (0, n.tZ)(tP, {
                    themeCookie: a,
                    children: (0, n.tZ)(tB, {
                      cookies: r,
                      children: (0, n.tZ)(tn.ZP, {
                        children: (0, n.tZ)(g.ZP, {
                          children: (0, n.tZ)(e3.ZP, {
                            children: (0, n.tZ)(B.ZP, {
                              children: (0, n.tZ)(tw.ZP, {
                                children: (0, n.tZ)(to.ZP, {
                                  children: (0, n.tZ)(ta.ZP, {
                                    children: (0, n.tZ)(ti.Z, {
                                      children: (0, n.tZ)(tr, {
                                        children: (0, n.tZ)(tl.ZP, {
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
          return l;
        },
        iv: function () {
          return s;
        },
      });
      var n,
        l,
        i = r(78286),
        o = r(58258),
        a = r(54655);
      let d = (0, o.createContext)(null);
      ((n = l || (l = {})).PREVENT_DASHBOARD_CARD_HOVER_CLASS = 'prevent-dashboard-card-hover'),
        (n.DASHBOARD_CARD_BUTTON_EXPAND_CLASS = 'dashboard-card-button-expand');
      let s = () => {
          let e = (0, o.useContext)(d);
          if (!e)
            throw Error('useDashboardContext must be called inside a DashboardContextProvider');
          return e;
        },
        c = (e) => {
          let { isSmallDashboard: t } = e,
            [r, n] = (0, o.useState)(!1),
            [l, i] = (0, o.useState)(!1),
            a = (0, o.useCallback)(() => {
              n((e) => !e);
            }, []),
            d = (0, o.useCallback)(
              (e) => {
                var t;
                (null != e &&
                  null !== (t = e.target) &&
                  void 0 !== t &&
                  t.closest('.prevent-dashboard-card-hover')) ||
                  a();
              },
              [a]
            );
          return (
            (0, o.useEffect)(() => {
              t && n(!1);
            }, [t, n]),
            {
              isDashboardExpanded: r,
              isDashboardHovered: l,
              toggleDashboard: a,
              setIsDashboardHovered: i,
              onClickToggleDashboard: d,
            }
          );
        };
      t.ZP = (0, o.memo)((e) => {
        let { children: t } = e,
          r = (0, a.CPt)(),
          [n, l] = (0, o.useState)('loan'),
          s = c({ isSmallDashboard: r }),
          u = (0, o.useMemo)(
            () => ({
              isSmallDashboard: r,
              borrowDashboardMode: n,
              setBorrowDashboardMode: l,
              ...s,
            }),
            [r, s, n, l]
          );
        return (0, i.tZ)(d.Provider, { value: u, children: t });
      });
    },
    55135: function (e, t, r) {
      'use strict';
      r.d(t, {
        CT: function () {
          return l;
        },
        Mh: function () {
          return a;
        },
        qk: function () {
          return s;
        },
        ub: function () {
          return o;
        },
      });
      var n,
        l,
        i = r(16035);
      let o = 'morpho.userSettings',
        a = 1;
      ((n = l || (l = {})).Root = 'root'),
        (n.Earn = 'earn'),
        (n.Borrow = 'borrow'),
        (n.Explore = 'explore'),
        (n.Vault = 'vault'),
        (n.Market = 'market'),
        (n.Curator = 'curator');
      let d = i.z.object({
          version: i.z.coerce
            .number()
            .refine((e) => e === a, { message: 'Version must be exactly '.concat(a) }),
          root: i.z.record(i.z.unknown()).optional(),
          earn: i.z.record(i.z.unknown()).optional(),
          borrow: i.z.record(i.z.unknown()).optional(),
          explore: i.z.record(i.z.unknown()).optional(),
          vault: i.z.record(i.z.unknown()).optional(),
          market: i.z.record(i.z.unknown()).optional(),
          curator: i.z.record(i.z.unknown()).optional(),
        }),
        s = (e) => {
          try {
            let t = JSON.parse(e),
              r = d.safeParse(t);
            if (r.success) return r.data;
            return null;
          } catch (e) {
            return null;
          }
        };
    },
    91289: function (e, t, r) {
      'use strict';
      r.d(t, {
        K: function () {
          return s;
        },
        e: function () {
          return d;
        },
      });
      var n = r(71938),
        l = r(75833),
        i = r(35047),
        o = r(55135);
      let a = { version: o.Mh },
        d = () => {
          let e = (0, n.getCookie)(o.ub),
            t = (0, o.qk)(e);
          return (0, i.isDefined)(e) && !(0, i.isDefined)(t) && (0, n.deleteCookie)(o.ub), t;
        },
        s = (e, t) => {
          let r = d() || a,
            i = (0, l.Z)(r, e, t);
          (0, n.setCookie)(o.ub, JSON.stringify(i));
        };
    },
    76258: function (e, t, r) {
      'use strict';
      var n = r(58258),
        l = r(35047);
      t.Z = (e, t, r) => (0, n.useMemo)(() => !(!e || (0, l.isDefined)(t)) && r, [e, r, t]);
    },
    25465: function (e, t, r) {
      'use strict';
      r.d(t, {
        D: function () {
          return o;
        },
      });
      var n = r(58258),
        l = r(22683),
        i = r(4205);
      let o = (e, t) => {
        let { operations: r } = (0, l.N)(),
          {
            operation: o,
            index: a,
            isNew: d,
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
          operation: o,
          initialState: (0, i.f)(a),
          finalState: (0, i.f)(a + 1),
          isNew: d,
          index: a,
        };
      };
    },
    71021: function (e, t, r) {
      'use strict';
      r.d(t, {
        o: function () {
          return m;
        },
      });
      var n = r(58258),
        l = r(40252),
        i = r(12556),
        o = r(35047),
        a = r(22683),
        d = r(82803),
        s = r(89991),
        c = r(60410);
      let u = (e, t, r) => {
        let { account: i } = (0, s.Z_)();
        return (0, n.useMemo)(() => {
          var n;
          if (!(null == i ? void 0 : i.address) || !t) return;
          let o =
            null == t
              ? void 0
              : null === (n = t.tryGetAccrualVault(e)) || void 0 === n
                ? void 0
                : n.accrueInterest(t.block.timestamp);
          if (!o) return;
          let a = t.getBundleMaxBalance(i.address, o.asset, l.DEFAULT_SLIPPAGE_TOLERANCE, r);
          if (void 0 !== a) return { assets: o.getDepositCapacityLimit(a).value, shares: 0n };
        }, [i.address, t, e, r]);
      };
      var p = r(76258),
        h = r(25465);
      let m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { account: r } = (0, s.Z_)(),
          {
            operation: m,
            initialState: g,
            isNew: v,
          } = (0, h.D)(e, d.H.InterfaceOperationType.metaMorphoDeposit),
          [y, f] = (0, n.useState)(m.assets),
          [x, Z] = (0, n.useState)(
            m.options.isMax.includes(d.H.InterfaceOperationType.metaMorphoDeposit)
          ),
          [b, , , w, k] = (0, i.$X)(m.options.disabledPeripheralTokens),
          B = u(e, null == g ? void 0 : g.data, b),
          C = (0, n.useCallback)((e) => {
            Z(!1), f(e);
          }, []),
          X = (0, p.Z)(
            r.isConnected,
            null == B ? void 0 : B.assets,
            g.isPending || g.isFetchingAny
          ),
          A = (0, n.useMemo)(
            () => ({
              type: d.H.InterfaceOperationType.metaMorphoDeposit,
              vaultAddress: e,
              assets: y,
              shares: 0n,
              id: m.id,
              options: {
                origin: t.origin,
                isMax: x ? [d.H.InterfaceOperationType.metaMorphoDeposit] : [],
                disabledPeripheralTokens: b,
              },
            }),
            [y, b, x, m.id, e, t.origin]
          ),
          { updateOperation: T } = (0, a.N)(),
          P = (0, n.useMemo)(() => {
            var t, n;
            if (!r.address) return;
            let i =
                null == g
                  ? void 0
                  : null === (t = g.data) || void 0 === t
                    ? void 0
                    : t.tryGetVault(e),
              a =
                i &&
                (null == g
                  ? void 0
                  : null === (n = g.data) || void 0 === n
                    ? void 0
                    : n.getBundleAssetBalances(
                        r.address,
                        i.asset,
                        l.DEFAULT_SLIPPAGE_TOLERANCE,
                        !0
                      ));
            if (a)
              return (0, o.values)(a.allocations)
                .filter(o.isDefined)
                .filter((e) => 'base' !== e.type && e.dstAmount > 0n)
                .map((e) => ({
                  id: e.type,
                  label: (0, c.e)(e),
                  value: !b.has(e.type),
                  srcToken: e.srcToken,
                }));
          }, [r.address, b, null == g ? void 0 : g.data, e]),
          M = 'position-manager' === t.origin,
          [S, R] = (0, n.useState)(v || M),
          I = (0, n.useMemo)(() => {
            let e = x !== m.options.isMax.includes(d.H.InterfaceOperationType.metaMorphoDeposit),
              t = y !== m.assets;
            return e || t;
          }, [y, x, m.assets, m.options.isMax]),
          q = (0, n.useCallback)(() => {
            T(A.id, () => A), R(!1);
          }, [A, T]);
        (0, n.useEffect)(() => {
          'bundler' === t.origin && q();
        }, [q, t.origin]),
          (0, n.useEffect)(() => {
            S || f(m.assets);
          }, [S, m.assets]);
        let K = (0, n.useCallback)(
          (e) => {
            if (e) {
              if ((null == B ? void 0 : B.assets) == null) return;
              f(B.assets);
            }
            Z(e);
          },
          [null == B ? void 0 : B.assets]
        );
        (0, n.useEffect)(() => {
          S ||
            (Z(m.options.isMax.includes(d.H.InterfaceOperationType.metaMorphoDeposit)),
            k(m.options.disabledPeripheralTokens));
        }, [S, m.options, k]),
          (0, n.useEffect)(() => {
            K(x);
          }, [x, K]);
        let L = (0, n.useCallback)(() => R(!1), []);
        return (0, n.useMemo)(
          () => ({
            isNew: v,
            inputAmount: y,
            setInputAmount: C,
            isMax: x,
            setIsMax: K,
            localOperation: A,
            maxAmount: null == B ? void 0 : B.assets,
            isLoading: X,
            initialState: g,
            confirm: q,
            cancel: L,
            setIsEditing: R,
            peripheralTokenOptions: P,
            onPeripheralTokenOptionChange: w,
            isEditing: S,
            hasModifiedDepositOperation: I,
          }),
          [v, y, C, x, K, X, A, g, q, L, P, w, S, null == B ? void 0 : B.assets, I]
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
        l = r(22683),
        i = r(82803),
        o = r(89991),
        a = r(40252);
      let d = (e, t) => {
        let { account: r } = (0, o.Z_)();
        return (0, n.useMemo)(() => {
          var n;
          if ((null == r ? void 0 : r.address) === void 0) return;
          let l = null == t ? void 0 : t.getBundleBalance(r.address, e, !0),
            i =
              null == t
                ? void 0
                : null === (n = t.tryGetAccrualVault(e)) || void 0 === n
                  ? void 0
                  : n.accrueInterest(t.block.timestamp);
          if (void 0 === l || void 0 === i) return;
          let o = null == i ? void 0 : i.getWithdrawCapacityLimit(l);
          if (void 0 !== o && void 0 !== l)
            return o.limiter === a.CapacityLimitReason.balance
              ? { shares: l, assets: o.value }
              : { shares: 0n, assets: o.value };
        }, [r.address, t, e]);
      };
      var s = (e, t, r, l) =>
          (0, n.useMemo)(() => {
            var n;
            let i =
              null == l
                ? void 0
                : null === (n = l.tryGetAccrualVault(e)) || void 0 === n
                  ? void 0
                  : n.accrueInterest(l.block.timestamp);
            return i && r ? i.toAssets(r) : t;
          }, [t, l, r, e]),
        c = r(76258),
        u = r(25465);
      let p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          {
            operation: r,
            initialState: a,
            isNew: p,
          } = (0, u.D)(e, i.H.InterfaceOperationType.metaMorphoWithdraw),
          { account: h } = (0, o.Z_)(),
          [m, g] = (0, n.useState)(r.assets),
          [v, y] = (0, n.useState)(r.shares),
          [f, x] = (0, n.useState)(
            r.options.isMax.includes(i.H.InterfaceOperationType.metaMorphoWithdraw)
          ),
          Z = d(e, null == a ? void 0 : a.data),
          b = s(e, m, v, a.data),
          w = (0, n.useCallback)((e) => {
            x(!1), g(e), y(0n);
          }, []),
          k = (0, n.useMemo)(() => {
            let e = f !== r.options.isMax.includes(i.H.InterfaceOperationType.metaMorphoWithdraw),
              t = m !== r.assets;
            return e || t;
          }, [m, f, r.assets, r.options.isMax]),
          B = (0, c.Z)(
            h.isConnected,
            null == Z ? void 0 : Z.assets,
            a.isFetchingAny || a.isPending
          ),
          C = (0, n.useMemo)(
            () => ({
              type: i.H.InterfaceOperationType.metaMorphoWithdraw,
              vaultAddress: e,
              assets: m,
              shares: v,
              id: r.id,
              options: {
                origin: t.origin,
                isMax: f ? [i.H.InterfaceOperationType.metaMorphoWithdraw] : [],
              },
            }),
            [m, f, r.id, t.origin, v, e]
          ),
          { updateOperation: X } = (0, l.N)(),
          A = 'position-manager' === t.origin,
          [T, P] = (0, n.useState)(p || A),
          M = (0, n.useCallback)(() => {
            X(C.id, () => C), P(!1);
          }, [C, X]);
        (0, n.useEffect)(() => {
          'bundler' === t.origin && M();
        }, [M, t.origin]);
        let S = (0, n.useCallback)(
          (e) => {
            if (e) {
              if ((null == Z ? void 0 : Z.assets) == null) return;
              g(Z.assets), y(Z.shares);
            }
            x(e);
          },
          [Z]
        );
        (0, n.useEffect)(() => {
          T || (g(r.assets), y(r.shares), x(r.options.isMax.includes(r.type)));
        }, [T, r.assets, r.options.isMax, r.shares, r.type]),
          (0, n.useEffect)(() => {
            S(f);
          }, [f, S]);
        let R = (0, n.useCallback)(() => P(!1), []);
        return (0, n.useMemo)(
          () => ({
            isNew: p,
            inputAmount: b,
            setInputAmount: w,
            isMax: f,
            setIsMax: S,
            localOperation: C,
            maxAmount: null == Z ? void 0 : Z.assets,
            isLoading: B,
            initialState: a,
            confirm: M,
            cancel: R,
            setIsEditing: P,
            isEditing: T,
            hasModifiedWithdrawOperation: k,
          }),
          [p, b, w, f, S, C, null == Z ? void 0 : Z.assets, B, a, M, R, T, k]
        );
      };
    },
    57806: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        8894, 9913, 1811, 8849, 3261, 3173, 3248, 7287, 6929, 3391, 3515, 6489, 4516, 3613, 1594,
        5328, 8051, 1245, 4655, 825, 8205, 9255, 7567, 4916, 7191, 6269, 8577, 1744,
      ],
      function () {
        return e((e.s = 75927));
      }
    ),
      (_N_E = e.O());
  },
]);
