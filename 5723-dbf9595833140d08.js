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
    (e._sentryDebugIds[t] = '7cb8dd29-eb4a-4214-9bd1-9f9baef5eb83'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-7cb8dd29-eb4a-4214-9bd1-9f9baef5eb83'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5723],
  {
    34571: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        o = n(27349),
        l = (0, i.memo)((e) => {
          let {
              netApy: t,
              apy: n,
              performanceFee: l,
              rewards: d,
              variant: s,
              points: u,
              isSimulated: c,
              isHoverable: p = !0,
              TextVariant: g = a.xvT.Body.XS.Regular,
              asset: h,
              withBackgroundEffect: m = !0,
            } = e,
            y = (0, i.useMemo)(() => a.$0l.percent.digits(2).unit('%').of(t, 18), [t]);
          return y
            ? (0, r.tZ)(a.KNv, {
                withBackgroundEffect: m,
                hoverCardContent: (0, r.tZ)(o.Z, {
                  netApy: t,
                  apy: n,
                  performanceFee: l,
                  rewards: d,
                  variant: s,
                  points: u,
                  asset: h,
                }),
                isDisabled: !p,
                padding: '0 11px 0 14px',
                children:
                  y &&
                  (0, r.BX)(a.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, r.tZ)(a.ZT$, {
                        TextVariant: g,
                        isSimulated: c,
                        display: 'flex',
                        alignItems: 'center',
                        lineHeight: 'normal',
                        color: 'text.body',
                        children: y,
                      }),
                      (null == d ? void 0 : d.length)
                        ? (0, r.tZ)(a.JO$, { icon: 'RewardsGradient20' })
                        : null,
                      (null == u ? void 0 : u.length)
                        ? (0, r.tZ)(a.JO$, { icon: 'PointsGradient20' })
                        : null,
                    ],
                  }),
              })
            : null;
        });
    },
    99503: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        o = n(38819);
      let l = (0, o.Z)(a.Kqy, { target: 'ecpepk30' })(
        'padding:',
        (e) => {
          let { theme: t } = e;
          return t.padding.s;
        },
        ';gap:12px;'
      );
      var d = n(73478),
        s = n(55412),
        u = n(3245),
        c = n(95413),
        p = n(60059);
      function g() {
        let e = (0, s._)([
          '\n  query GetCreatorVaults($where: VaultFilters) {\n    vaults(where: $where) {\n      items {\n        ...simpleVaultFields\n        state {\n          id\n          totalAssetsUsd\n        }\n        chain {\n          id\n          network\n        }\n      }\n    }\n  }\n  ',
          '\n',
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      let h = {},
        m = (0, u.Ps)(g(), p.U);
      var y = n(6423);
      let v = (0, o.Z)(a.Kqy, { target: 'emgz5yv0' })('flex-direction:column;max-height:200px;'),
        x = (0, o.Z)(a.Kqy, { target: 'emgz5yv1' })(
          'width:240px;padding:4px ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';border-radius:8px;cursor:pointer;transition:background-color 0.15s;width:100%;&:hover{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.dark;
          },
          ';}'
        );
      var f = (0, i.memo)(() =>
        (0, r.tZ)(v, {
          children: Array.from({ length: 4 }).map((e, t) =>
            (0, r.tZ)(
              x,
              {
                align: 'center',
                children: (0, r.tZ)(a.OdW, { width: '100%', height: 21, borderRadius: '8px' }, t),
              },
              t
            )
          ),
        })
      );
      let b = (e) =>
        e.slice().sort((e, t) => {
          var n, r, i, a;
          let o =
              null !== (i = null === (n = e.state) || void 0 === n ? void 0 : n.totalAssetsUsd) &&
              void 0 !== i
                ? i
                : 0n,
            l =
              null !== (a = null === (r = t.state) || void 0 === r ? void 0 : r.totalAssetsUsd) &&
              void 0 !== a
                ? a
                : 0n;
          return l > o ? 1 : l < o ? -1 : 0;
        });
      var Z = (0, i.memo)((e) => {
          let { creatorName: t, chainId: n } = e,
            {
              data: o,
              error: l,
              loading: s,
            } = (function (e) {
              let t = { ...h, ...e };
              return c.aM(m, t);
            })({
              variables: {
                where: { search: t, chainId_in: [n], totalAssetsUsd_gte: 1, whitelisted: !0 },
              },
              skip: !t,
            }),
            u = (0, i.useMemo)(() => {
              var e;
              return b(null !== (e = null == o ? void 0 : o.vaults.items) && void 0 !== e ? e : []);
            }, [null == o ? void 0 : o.vaults.items]);
          return s
            ? (0, r.tZ)(f, {})
            : l
              ? (0, r.tZ)(a.xvT.Body.XS.Regular, {
                  color: 'text.interactive.error',
                  children: 'Error loading vaults',
                })
              : (0, r.tZ)(a.xrM, {
                  children: (0, r.tZ)(v, {
                    children:
                      0 === u.length
                        ? (0, r.BX)(a.xvT.Body.S.Regular, {
                            color: 'text.body',
                            children: ['No vaults found for this curator on ', n, '.'],
                          })
                        : u.map((e) => {
                            let {
                                id: t,
                                name: n,
                                address: i,
                                state: o,
                                metadata: l,
                                chain: { network: s },
                              } = e,
                              u = (0, y.Q)({ chainName: s, vaultAddress: i, vaultName: n });
                            return (0, r.tZ)(
                              d.h,
                              {
                                href: u,
                                prefetch: !0,
                                children: (0, r.BX)(x, {
                                  justify: 'space-between',
                                  gap: 'xs',
                                  align: 'center',
                                  children: [
                                    (0, r.BX)(a.Kqy, {
                                      gap: 4,
                                      align: 'center',
                                      children: [
                                        (0, r.tZ)(a.qEK, {
                                          src: null == l ? void 0 : l.image,
                                          size: 'small',
                                        }),
                                        (0, r.tZ)(a.xvT.Body.XXS.Regular, {
                                          shorten: 1,
                                          color: 'text.body',
                                          children: n,
                                        }),
                                      ],
                                    }),
                                    o &&
                                      (0, r.tZ)(a.xvT.Body.XXS.Regular, {
                                        color: 'text.body',
                                        children: a.$0l.short
                                          .unit('$')
                                          .digits(2)
                                          .of(o.totalAssetsUsd),
                                      }),
                                  ],
                                }),
                              },
                              t
                            );
                          }),
                  }),
                });
        }),
        w = (0, i.memo)((e) => {
          let { creatorName: t, riskCurators: n, chainId: i } = e;
          return 0 !== n.length && t
            ? (0, r.BX)(l, {
                direction: 'column',
                children: [
                  (0, r.tZ)(a.Kqy, {
                    gap: 's',
                    children: n.map((e) => {
                      let { name: t, image: n } = e;
                      return (0, r.BX)(
                        a.Kqy,
                        {
                          direction: 'row',
                          gap: 4,
                          align: 'center',
                          children: [
                            (0, r.tZ)(a.qEK, { src: n, size: 'medium' }),
                            (0, r.tZ)(a.xvT.Body.XS.Regular, { color: 'text.body', children: t }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                  (0, r.tZ)(Z, { creatorName: t, chainId: i }),
                ],
              })
            : null;
        }),
        k = (0, i.memo)((e) => {
          var t;
          let {
            curators: n,
            creatorAddress: i,
            TextVariant: o = a.xvT.Body.XS.Regular,
            isSimulated: l,
            isHoverable: d = !0,
            withLabel: s = !0,
            chainId: u,
          } = e;
          return n && 0 !== n.length
            ? (0, r.tZ)(a.KNv, {
                hoverCardContent:
                  i &&
                  (0, r.tZ)(w, {
                    creatorName: null === (t = n[0]) || void 0 === t ? void 0 : t.name,
                    riskCurators: n,
                    chainId: u,
                  }),
                isDisabled: !i || !d,
                children: (0, r.tZ)(a.Kqy, {
                  direction: 'row',
                  gap: 'xs',
                  align: 'center',
                  children: n.map((e, t) => {
                    let { name: n, image: i } = e;
                    return (0, r.BX)(
                      a.Kqy,
                      {
                        direction: 'row',
                        gap: 4,
                        align: 'center',
                        children: [
                          i && (0, r.tZ)(a.qEK, { src: i, size: 'medium' }),
                          s &&
                            (0, r.tZ)(a.ZT$, {
                              lineHeight: 'normal',
                              isSimulated: l,
                              TextVariant: o,
                              color: 'text.body',
                              children: n,
                            }),
                        ],
                      },
                      t
                    );
                  }),
                }),
              })
            : null;
        });
    },
    55872: function (e, t, n) {
      n.d(t, {
        m: function () {
          return y;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        o = n(17965),
        l = n(40252),
        d = n(35047),
        s = n(50825),
        u = n(38819);
      let c = (0, u.Z)('div', { target: 'eyr4h7c0' })(
          'min-width:220px;max-width:300px;padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ' 0;'
        ),
        p = (0, u.Z)(a.Kqy, { target: 'eyr4h7c1' })(
          'padding:0px ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';min-height:34px;'
        ),
        g = (0, u.Z)(p, { target: 'eyr4h7c2' })(
          'padding:10px ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';'
        ),
        h = (0, u.Z)(a.xvT.Body.XXS.Regular, { target: 'eyr4h7c3' })('display:contents;');
      var m = (0, i.memo)((e) => {
          let { className: t, collateralExposure: n, targetChainId: u } = e,
            m = (0, i.useMemo)(
              () =>
                Array.from(n.lltvs)
                  .map((e) =>
                    ''.concat(a.$0l.percent.unit('%').trailingZero(!1).digits(1).of(e, 18))
                  )
                  .join(', '),
              [n]
            ),
            y = (0, i.useMemo)(() => {
              let e = new Set();
              return Array.from(n.oracles)
                .map((e) => {
                  let t = 'string' == typeof e,
                    n = t ? e : e.address;
                  return {
                    label: t
                      ? (0, a.GQT)(e)
                      : e.type === o.OracleType.Unknown
                        ? (0, a.GQT)(n)
                        : (0, d.formatLongString)((0, a.pTE)(e), 30) || (0, a.GQT)(n),
                    url: l.ChainUtils.getExplorerAddressUrl(u, n),
                    address: n,
                  };
                })
                .filter((t) => {
                  let n = ''.concat(t.label, '-').concat(t.url, '-').concat(t.address);
                  return !e.has(n) && (e.add(n), !0);
                });
            }, [n.oracles, u]);
          return (0, r.tZ)(c, {
            className: t,
            children: (0, r.BX)(a.Kqy, {
              direction: 'column',
              children: [
                (0, r.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, r.tZ)(a.xvT.Body.XXS.Regular, {
                      color: 'text.body',
                      children: 'Collateral',
                    }),
                    (0, r.BX)(a.Kqy, {
                      align: 'center',
                      gap: 4,
                      children: [
                        (0, r.tZ)(a.qEK, { src: n.token.logoURI, size: 'small' }),
                        (0, r.tZ)(h, {
                          children: n.token.symbol
                            ? (0, d.formatLongString)(n.token.symbol, 35)
                            : '-',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.tZ)(a.Z0O, {}),
                (0, r.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, r.tZ)(a.xvT.Body.XXS.Regular, { color: 'text.body', children: 'LLTV' }),
                    (0, r.tZ)(a.xvT.Body.XXS.Regular, { children: m }),
                  ],
                }),
                (0, r.tZ)(a.Z0O, {}),
                (0, r.BX)(g, {
                  align: 'center',
                  justify: 'space-between',
                  gap: 's',
                  children: [
                    (0, r.tZ)(a.xvT.Body.XXS.Regular, { children: 'Oracle' }),
                    (0, r.tZ)(a.Kqy, {
                      direction: 'column',
                      gap: 5,
                      align: 'end',
                      children: y.map((e, t) =>
                        (0, r.tZ)(
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
        y = (0, i.memo)((e) => {
          let {
              className: t,
              collateralExposures: n,
              targetChainId: o,
              extraInfo: l,
              align: d = 'left',
              maxTokensCount: s,
            } = e,
            u = (0, i.useMemo)(
              () =>
                n.map((e) => ({
                  hoverCardContent: (0, r.tZ)(m, { collateralExposure: e, targetChainId: o }),
                  logoUrl: e.token.logoURI,
                })),
              [n, o]
            );
          return (0, r.tZ)(a.$xj, {
            className: t,
            items: u,
            extraInfo: l,
            align: d,
            maxTokensCount: s,
          });
        });
    },
    58810: function (e, t, n) {
      n.d(t, {
        A: function () {
          return h;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        o = n(18313),
        l = n(34937),
        d = n(55412),
        s = n(3245),
        u = n(95413);
      function c() {
        let e = (0, d._)([
          '\n  query GetMarketLiquidityTimeseries(\n    $uniqueKey: String!\n    $chainId: Int\n    $options: TimeseriesOptions\n  ) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      historicalState {\n        liquidityAssetsUsd(options: $options) {\n          x\n          y\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      let p = {},
        g = (0, s.Ps)(c());
      var h = (0, i.memo)((e) => {
        var t;
        let { uniqueKey: n, chainId: d, liquidityAssetsUsd: s, isSimulated: c } = e,
          h = (0, l.Iz)(60),
          [m, y] = (0, i.useState)(o.B),
          {
            data: v,
            loading: x,
            error: f,
          } = (function (e) {
            let t = { ...p, ...e };
            return u.aM(g, t);
          })({
            variables: { uniqueKey: n, chainId: d, options: (0, l.Ai)({ timeFrame: m, now: h }) },
          }),
          b = (0, i.useMemo)(() => {
            var e;
            return (0, a.EES)(
              null == v
                ? void 0
                : null === (e = v.marketByUniqueKey.historicalState) || void 0 === e
                  ? void 0
                  : e.liquidityAssetsUsd
            );
          }, [
            null == v
              ? void 0
              : null === (t = v.marketByUniqueKey.historicalState) || void 0 === t
                ? void 0
                : t.liquidityAssetsUsd,
          ]);
        return (0, r.tZ)(a.aeB, {
          data: b,
          timeFrameOptions: o.SC,
          total: s,
          decimals: 18,
          loading: x,
          error: f,
          title: 'Market Liquidity',
          timeFrame: m,
          setTimeFrame: y,
          isSimulated: c,
        });
      });
    },
    76992: function (e, t, n) {
      n.d(t, {
        E: function () {
          return h;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        o = n(50825),
        l = n(38819),
        d = n(16690);
      let s = (0, l.Z)('div', { target: 'eikqm6p0' })(
          'background-color:',
          (e) => {
            let { theme: t, backgroundVariant: n } = e;
            return 'primary' === n ? t.colors.background.primary : t.colors.constant.dark;
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
        u = (0, l.Z)('div', { target: 'eikqm6p1' })('position:relative;'),
        c = (0, l.Z)(a.Kqy, { target: 'eikqm6p2' })(
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
        p = (0, l.Z)(a.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        g = (0, i.forwardRef)(function (e, t) {
          let {
            options: n,
            id: i,
            value: l,
            noPadding: d = !1,
            noGap: g = !1,
            disabled: h = !1,
            variant: m = 'primary',
            backgroundVariant: y = 'primary',
            size: v = 'small',
            className: x,
            onChange: f,
            ...b
          } = e;
          return (0, r.tZ)(s, {
            noPadding: d,
            noGap: g,
            backgroundVariant: y,
            ref: t,
            className: x,
            ...b,
            children: n.map((e) =>
              (0, r.tZ)(
                a.ua7,
                {
                  disabled: !e.tooltip,
                  content: e.tooltip,
                  offset: d ? 4 : 9,
                  children: (0, r.BX)(u, {
                    children: [
                      e.href
                        ? (0, r.tZ)(o.Z, {
                            href: e.href,
                            prefetch: e.prefetch,
                            mode: 'internal',
                            buttonProps: {
                              variant: e.value === l ? m : 'ghost',
                              size: v,
                              disabled: h || e.isDisabled,
                              label: e.label,
                              iconAlone: e.icon,
                              onClick: () => (null == f ? void 0 : f(e.value)),
                            },
                          })
                        : (0, r.tZ)(a.zxk, {
                            variant: e.value === l ? m : 'ghost',
                            size: v,
                            disabled: h || e.isDisabled,
                            label: e.label,
                            iconAlone: e.icon,
                            onClick: () => (null == f ? void 0 : f(e.value)),
                          }),
                      e.counter && e.counter > 0
                        ? (0, r.tZ)(c, {
                            children: (0, r.tZ)(p, {
                              TextVariant: a.xvT.Body.XXXS.Regular,
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
      var h = (0, i.memo)(g);
    },
    81261: function (e, t, n) {
      n.d(t, {
        H: function () {
          return d;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        o = n(89991);
      let l = (0, n(38819).Z)('div', { target: 'epb4mgh0' })(
        'padding:4px 8px;display:flex;gap:',
        (e) => {
          let { theme: t } = e;
          return t.spacing.xxs;
        },
        ';justify-content:space-between;align-items:center;'
      );
      var d = (0, i.memo)((e) => {
        let { tagOptions: t, assetIdsFilter: n, clear: d, disabled: s } = e,
          u = (0, i.useId)(),
          {
            account: { isConnected: c },
          } = (0, o.Z_)();
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.BX)(l, {
              children: [
                (0, r.BX)(a.Kqy, {
                  gap: 'xxs',
                  align: 'center',
                  children: [
                    (0, r.tZ)(a.ket, { id: u, options: t, disabled: s }),
                    c &&
                      (0, r.tZ)(a.ua7, {
                        content: 'Filtering by wallet holdings is coming soon.',
                        withTouch: !0,
                        children: (0, r.tZ)(a.JO$, {
                          icon: 'WalletPlain20',
                          color: 'text.primary',
                          style: { margin: 4, opacity: 0.2, cursor: 'not-allowed' },
                        }),
                      }),
                  ],
                }),
                (0, r.tZ)(a.ua7, {
                  content: 'Clear all filters',
                  disabled: !n.length,
                  children: (0, r.tZ)(a.zxk, {
                    variant: 'ghost',
                    size: 'small',
                    disabled: !n.length,
                    label: 'Clear',
                    onClick: d,
                  }),
                }),
              ],
            }),
            (0, r.tZ)(a.Z0O, {}),
          ],
        });
      });
    },
    25629: function (e, t, n) {
      n.d(t, {
        F: function () {
          return s;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(40252),
        o = n(54655),
        l = n(50825);
      let d = (0, n(38819).Z)(o.Kqy, { target: 'evzhg7s0' })('height:25.6px;');
      var s = (0, i.memo)((e) => {
        let {
            address: t,
            toastMessage: n,
            tooltipMessage: s,
            targetChainId: u,
            explorerName: c,
            TextVariant: p = o.xvT.Body.M.Regular,
            noLink: g = !1,
          } = e,
          h = (0, i.useMemo)(() => a.ChainUtils.getExplorerAddressUrl(u, t), [t, u]),
          m = (0, i.useMemo)(() => (0, o.GQT)(t), [t]);
        return (0, r.BX)(d, {
          gap: 4,
          align: 'center',
          children: [
            (0, r.tZ)(o.ZT$, { TextVariant: p, lineHeight: 'normal', children: m }),
            (0, r.tZ)(o.mUV, {
              size: 'small',
              toCopy: t,
              toastMessage: n || 'Address copied to clipboard.',
              tooltipMessage: s,
            }),
            !(0, o.Czs)(t) &&
              (0, r.tZ)(o.Kqy, {
                align: 'center',
                children:
                  !g &&
                  (0, r.tZ)(o.ua7, {
                    content: 'Go to '.concat(c || 'block explorer', '.'),
                    children: (0, r.tZ)(o.Kqy, {
                      children: (0, r.tZ)(l.Z, {
                        href: h,
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
              }),
          ],
        });
      });
    },
    70827: function (e, t, n) {
      n.d(t, {
        g: function () {
          return g;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        o = n(40252),
        l = n(50825),
        d = n(38819);
      let s = (0, d.Z)('div', { target: 'eguic7y0' })(
          'width:300px;padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';'
        ),
        u = (0, d.Z)(a.Kqy, { target: 'eguic7y1' })('min-height:34px;'),
        c = (0, d.Z)(a.xvT.Body.XXS.Regular, { target: 'eguic7y2' })('display:contents;');
      var p = (0, i.memo)((e) => {
          let { className: t, vaultItem: n } = e,
            d = (0, i.useMemo)(
              () => (n.address ? o.ChainUtils.getExplorerAddressUrl(n.chainId, n.address) : ''),
              [n]
            ),
            p = (0, i.useMemo)(() => {
              if (n.totalSupply.token)
                return a.$0l.short
                  .unit(n.totalSupply.token.symbol)
                  .trailingZero(!1)
                  .digits(2)
                  .of(n.totalSupply.amount, Number(n.totalSupply.token.decimals));
            }, [n]),
            g = (0, i.useMemo)(() => n.curators.length > 0, [n.curators.length]);
          return (0, r.tZ)(s, {
            className: t,
            children: (0, r.BX)(a.Kqy, {
              direction: 'column',
              children: [
                (0, r.BX)(u, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, r.tZ)(a.xvT.Body.XXS.Regular, { children: 'Vault' }),
                    (0, r.tZ)(l.Z, {
                      href: n.url,
                      mode: 'internal',
                      buttonProps: {
                        variant: 'ghost',
                        size: 'small',
                        label: (0, a.Uaj)(n.name),
                        avatarProps: { src: n.image },
                      },
                    }),
                  ],
                }),
                g &&
                  (0, r.BX)(u, {
                    align: 'center',
                    justify: 'space-between',
                    children: [
                      (0, r.tZ)(a.xvT.Body.XXS.Regular, { children: g ? 'Curators' : 'Curator' }),
                      (0, r.tZ)(a.Kqy, {
                        direction: 'column',
                        gap: 2,
                        children: n.curators.map((e) =>
                          (0, r.tZ)(
                            l.Z,
                            {
                              href: e.url,
                              mode: 'external',
                              buttonProps: {
                                variant: 'ghost',
                                size: 'small',
                                label: e.name,
                                avatarProps: { src: e.image },
                              },
                            },
                            e.name
                          )
                        ),
                      }),
                    ],
                  }),
                (0, r.BX)(u, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, r.tZ)(a.xvT.Body.XXS.Regular, { children: 'Address' }),
                    (0, r.BX)(a.Kqy, {
                      align: 'center',
                      gap: 2,
                      children: [
                        (0, r.tZ)(l.Z, {
                          href: d,
                          mode: 'external',
                          buttonProps: {
                            variant: 'ghost',
                            size: 'small',
                            label: (0, a.GQT)(n.address),
                          },
                        }),
                        (0, r.tZ)(a.mUV, {
                          toCopy: n.address,
                          toastMessage: 'Address copied to clipboard.',
                          tooltipMessage: 'Copy address.',
                          size: 'small',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.BX)(u, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, r.tZ)(a.xvT.Body.XXS.Regular, { children: 'Total supply' }),
                    (0, r.BX)(a.Kqy, {
                      align: 'center',
                      gap: 2,
                      children: [
                        (0, r.tZ)(a.qEK, { src: n.totalSupply.token.logoURI, size: 'small' }),
                        (0, r.tZ)(c, { children: p }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        g = (0, i.memo)((e) => {
          let { className: t, vaultListing: n, extraInfo: o, maxVaultsCount: l } = e,
            d = (0, i.useMemo)(
              () =>
                n.map((e) => {
                  var t;
                  return {
                    hoverCardContent: (0, r.tZ)(p, { vaultItem: e }),
                    logoUrl: null === (t = e.curators[0]) || void 0 === t ? void 0 : t.image,
                  };
                }),
              [n]
            );
          return (0, r.tZ)(a.$xj, { className: t, items: d, extraInfo: o, maxTokensCount: l });
        });
    },
    94610: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(54655),
        o = n(35047),
        l = n(18313),
        d = n(34937),
        s = n(55412),
        u = n(3245),
        c = n(95413);
      function p() {
        let e = (0, s._)([
          '\n  query GetVaultSupplyTimeseries(\n    $address: String!\n    $chainId: Int\n    $options: TimeseriesOptions\n  ) {\n    vaultByAddress(address: $address, chainId: $chainId) {\n      id\n      historicalState {\n        totalAssetsUsd(options: $options) {\n          x\n          y\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      let g = {},
        h = (0, u.Ps)(p());
      var m = (0, i.memo)((e) => {
        var t;
        let { address: n, chainId: s, assetUsd: u, isSimulated: p = !1 } = e,
          m = (0, d.Iz)(60),
          [y, v] = (0, i.useState)(l.B),
          {
            data: x,
            loading: f,
            error: b,
          } = (function (e) {
            let t = { ...g, ...e };
            return c.aM(h, t);
          })({
            variables: { address: n, chainId: s, options: (0, d.Ai)({ timeFrame: y, now: m }) },
            skip: !(0, o.isDefined)(n) || !(0, o.isDefined)(s),
          }),
          Z = (0, i.useMemo)(() => {
            var e;
            return (0, a.EES)(
              null == x
                ? void 0
                : null === (e = x.vaultByAddress.historicalState) || void 0 === e
                  ? void 0
                  : e.totalAssetsUsd
            );
          }, [
            null == x
              ? void 0
              : null === (t = x.vaultByAddress.historicalState) || void 0 === t
                ? void 0
                : t.totalAssetsUsd,
          ]);
        return (0, r.tZ)(a.aeB, {
          data: Z,
          isSimulated: p,
          timeFrameOptions: l.SC,
          total: u,
          decimals: 18,
          loading: f,
          error: b,
          title: 'Total Supply',
          timeFrame: y,
          setTimeFrame: v,
        });
      });
    },
    28393: function (e, t, n) {
      n.d(t, {
        Rh: function () {
          return l;
        },
        cW: function () {
          return d;
        },
        ef: function () {
          return s;
        },
        wP: function () {
          return o;
        },
      });
      var r = n(23567),
        i = n(38819),
        a = n(54655);
      let o = (0, i.Z)('div', {
          shouldForwardProp: (0, a.uhK)(['noBackground']),
          target: 'e1i1nrgp0',
        })(
          'background:',
          (e) => {
            let { theme: t, noBackground: n } = e;
            return !n && t.colors.constant.gradient.pageBackground;
          },
          ';width:100%;'
        ),
        l = (0, i.Z)(a.Kqy, {
          shouldForwardProp: (0, a.uhK)(['hasLargerVerticalPadding', 'withoutAside', 'unshiftTop']),
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
        d = (0, i.Z)('div', { target: 'e1i1nrgp2' })(
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
        s = (0, i.Z)('div', { target: 'e1i1nrgp3' })(
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
          (0, a.xJ_)('border-width'),
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
        a = n(28393);
      t.default = (0, i.memo)((e) => {
        let {
          children: t,
          hasLargerVerticalPadding: n = !1,
          withoutAside: i = !1,
          withOverflowingBottomBorder: o = !1,
          unshiftTop: l = !1,
          noBackground: d = !1,
          className: s,
          style: u,
        } = e;
        return (0, r.BX)(a.wP, {
          noBackground: d,
          className: s,
          style: u,
          id: 'section-layout-background',
          children: [
            (0, r.tZ)(a.Rh, {
              hasLargerVerticalPadding: n,
              withoutAside: i,
              unshiftTop: l,
              id: 'section-layout',
              children: t,
            }),
            o && (0, r.tZ)(a.cW, {}),
          ],
        });
      });
    },
    28634: function (e, t, n) {
      var r, i;
      n.d(t, {
        y: function () {
          return r;
        },
      }),
        ((i = r || (r = {})).ALL = 'all'),
        (i.STABLECOIN = 'stablecoin'),
        (i.ETH = 'eth'),
        (i.BTC = 'btc');
    },
    34937: function (e, t, n) {
      n.d(t, {
        Ai: function () {
          return u;
        },
        Iz: function () {
          return s;
        },
        Vl: function () {
          return d;
        },
      });
      var r,
        i,
        a = n(56489),
        o = n(17965),
        l = n(35047);
      function d(e) {
        return (0, a.Z)(e, { unit: 'mo', duration: 3 })
          ? 'quarterlyNetApy'
          : 'mo' === e
            ? 'monthlyNetApy'
            : 'w' === e
              ? 'weeklyNetApy'
              : 'allTimeNetApy';
      }
      function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return Math.floor(Number(l.Time.timestamp()) / 60) * e;
      }
      function u(e) {
        let { timeFrame: t, now: n } = e;
        return {
          startTimestamp: t ? n - l.Time.s.fromPeriod(t) : 0,
          endTimestamp: n,
          interval: 'w' === t ? o.TimeseriesInterval.Hour : o.TimeseriesInterval.Day,
        };
      }
      ((r = i || (i = {})).OneDay = '1d'),
        (r.OneWeek = '1w'),
        (r.OneMonth = '1m'),
        (r.ThreeMonths = '3m'),
        (r.OneYear = '1y'),
        (r.YearToDay = 'ytd'),
        (r.AllTime = 'all');
    },
  },
]);
