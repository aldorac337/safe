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
    (e._sentryDebugIds[t] = '3d896f97-687a-4e4d-9fc4-f96ef2fb3933'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-3d896f97-687a-4e4d-9fc4-f96ef2fb3933'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6419],
  {
    34571: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        a = r(27349),
        l = (0, i.memo)((e) => {
          let {
              netApy: t,
              apy: r,
              performanceFee: l,
              rewards: d,
              variant: c,
              points: s,
              isSimulated: u,
              isHoverable: p = !0,
              TextVariant: g = o.xvT.Body.XS.Regular,
              asset: h,
              withBackgroundEffect: m = !0,
            } = e,
            f = (0, i.useMemo)(() => o.$0l.percent.digits(2).unit('%').of(t, 18), [t]);
          return f
            ? (0, n.tZ)(o.KNv, {
                withBackgroundEffect: m,
                hoverCardContent: (0, n.tZ)(a.Z, {
                  netApy: t,
                  apy: r,
                  performanceFee: l,
                  rewards: d,
                  variant: c,
                  points: s,
                  asset: h,
                }),
                isDisabled: !p,
                padding: '0 11px 0 14px',
                children:
                  f &&
                  (0, n.BX)(o.Kqy, {
                    gap: 2,
                    align: 'center',
                    children: [
                      (0, n.tZ)(o.ZT$, {
                        TextVariant: g,
                        isSimulated: u,
                        display: 'flex',
                        alignItems: 'center',
                        lineHeight: 'normal',
                        color: 'text.body',
                        children: f,
                      }),
                      (null == d ? void 0 : d.length)
                        ? (0, n.tZ)(o.JO$, { icon: 'RewardsGradient20' })
                        : null,
                      (null == s ? void 0 : s.length)
                        ? (0, n.tZ)(o.JO$, { icon: 'PointsGradient20' })
                        : null,
                    ],
                  }),
              })
            : null;
        });
    },
    32926: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return Z;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        a = r(55412),
        l = r(3245),
        d = r(63658),
        c = r(60059);
      function s() {
        let e = (0, a._)([
          '\n  query GetCreatorVaults($where: VaultFilters) {\n    vaults(where: $where) {\n      items {\n        ...simpleVaultFields\n        state {\n          id\n          totalAssetsUsd\n        }\n        chain {\n          id\n          network\n        }\n      }\n    }\n  }\n  ',
          '\n',
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      let u = {},
        p = (0, l.Ps)(s(), c.U);
      var g = r(85501),
        h = r(4407),
        m = (0, i.memo)(() =>
          (0, n.tZ)(h.M, {
            children: Array.from({ length: 4 }).map((e, t) =>
              (0, n.tZ)(
                h.n,
                {
                  align: 'center',
                  children: (0, n.tZ)(o.OdW, { width: '100%', height: 21, borderRadius: '8px' }, t),
                },
                t
              )
            ),
          })
        );
      let f = (e) =>
        e.slice().sort((e, t) => {
          var r, n, i, o;
          let a =
              null !== (i = null === (r = e.state) || void 0 === r ? void 0 : r.totalAssetsUsd) &&
              void 0 !== i
                ? i
                : 0,
            l =
              null !== (o = null === (n = t.state) || void 0 === n ? void 0 : n.totalAssetsUsd) &&
              void 0 !== o
                ? o
                : 0;
          return l > a ? 1 : l < a ? -1 : 0;
        });
      var x = (0, i.memo)((e) => {
        let { creatorName: t, chainId: r } = e,
          {
            data: a,
            error: l,
            loading: c,
          } = (function (e) {
            let t = { ...u, ...e };
            return d.aM(p, t);
          })({
            variables: {
              where: { search: t, chainId_in: [r], totalAssetsUsd_gte: 1, whitelisted: !0 },
            },
            skip: !t,
          }),
          s = (0, i.useMemo)(() => {
            var e;
            return f(
              null !== (e = null == a ? void 0 : a.vaults.items) && void 0 !== e ? e : []
            ).map((e) => {
              var t, r, n;
              let i = o.$0l.short
                .unit('$')
                .digits(2)
                .of(null === (t = e.state) || void 0 === t ? void 0 : t.totalAssetsUsd);
              return {
                id: e.id,
                vaultName: e.name,
                address: e.address,
                imageURI:
                  null !== (n = null === (r = e.metadata) || void 0 === r ? void 0 : r.image) &&
                  void 0 !== n
                    ? n
                    : '',
                network: e.chain.network,
                vaultDeposit: i,
              };
            });
          }, [null == a ? void 0 : a.vaults.items]);
        return c
          ? (0, n.tZ)(m, {})
          : l
            ? (0, n.tZ)(o.xvT.Body.XS.Regular, {
                color: 'text.interactive.error',
                children: 'Error loading vaults',
              })
            : (0, n.tZ)(g.T, {
                vaults: s,
                emptyMessage: 'No vaults found for this curator on '.concat(r, '.'),
              });
      });
      let y = (0, r(38819).Z)(o.Kqy, { target: 'ecpepk30' })(
        'padding:',
        (e) => {
          let { theme: t } = e;
          return t.padding.s;
        },
        ';gap:12px;'
      );
      var b = (0, i.memo)((e) => {
          let { creatorName: t, riskCurators: r, chainId: i } = e;
          return 0 !== r.length && t
            ? (0, n.BX)(y, {
                direction: 'column',
                children: [
                  (0, n.tZ)(o.Kqy, {
                    gap: 's',
                    children: r.map((e) => {
                      let { name: t, image: r } = e;
                      return (0, n.BX)(
                        o.Kqy,
                        {
                          direction: 'row',
                          gap: 4,
                          align: 'center',
                          children: [
                            (0, n.tZ)(o.qEK, { src: r, size: 'medium' }),
                            (0, n.tZ)(o.xvT.Body.XS.Regular, { color: 'text.body', children: t }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                  (0, n.tZ)(x, { creatorName: t, chainId: i }),
                ],
              })
            : null;
        }),
        Z = (0, i.memo)((e) => {
          var t;
          let {
            curators: r,
            creatorAddress: i,
            TextVariant: a = o.xvT.Body.XS.Regular,
            isSimulated: l,
            isHoverable: d = !0,
            withLabel: c = !0,
            chainId: s,
          } = e;
          return r && 0 !== r.length
            ? (0, n.tZ)(o.KNv, {
                hoverCardContent:
                  i &&
                  (0, n.tZ)(b, {
                    creatorName: null === (t = r[0]) || void 0 === t ? void 0 : t.name,
                    riskCurators: r,
                    chainId: s,
                  }),
                isDisabled: !i || !d,
                children: (0, n.tZ)(o.Kqy, {
                  direction: 'row',
                  gap: 'xs',
                  align: 'center',
                  children: r.map((e, t) => {
                    let { name: r, image: i } = e;
                    return (0, n.BX)(
                      o.Kqy,
                      {
                        direction: 'row',
                        gap: 4,
                        align: 'center',
                        children: [
                          i && (0, n.tZ)(o.qEK, { src: i, size: 'medium' }),
                          c &&
                            (0, n.tZ)(o.ZT$, {
                              lineHeight: 'normal',
                              isSimulated: l,
                              TextVariant: a,
                              color: 'text.body',
                              children: r,
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
    55872: function (e, t, r) {
      r.d(t, {
        m: function () {
          return f;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        a = r(13191),
        l = r(40252),
        d = r(35047),
        c = r(50825),
        s = r(38819);
      let u = (0, s.Z)('div', { target: 'eyr4h7c0' })(
          'min-width:220px;max-width:300px;padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ' 0;'
        ),
        p = (0, s.Z)(o.Kqy, { target: 'eyr4h7c1' })(
          'padding:0px ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';min-height:34px;'
        ),
        g = (0, s.Z)(p, { target: 'eyr4h7c2' })(
          'padding:10px ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';'
        ),
        h = (0, s.Z)(o.xvT.Body.XXS.Regular, { target: 'eyr4h7c3' })('display:contents;');
      var m = (0, i.memo)((e) => {
          let { className: t, collateralExposure: r, targetChainId: s } = e,
            m = (0, i.useMemo)(
              () =>
                Array.from(r.lltvs)
                  .map((e) =>
                    ''.concat(o.$0l.percent.unit('%').trailingZero(!1).digits(1).of(e, 18))
                  )
                  .join(', '),
              [r]
            ),
            f = (0, i.useMemo)(() => {
              let e = new Set();
              return Array.from(r.oracles)
                .map((e) => {
                  let t = 'string' == typeof e,
                    r = t ? e : e.address;
                  return {
                    label: t
                      ? (0, o.GQT)(e)
                      : e.type === a.OracleType.Unknown
                        ? (0, o.GQT)(r)
                        : (0, d.formatLongString)((0, o.pTE)(e), 30) || (0, o.GQT)(r),
                    url: l.ChainUtils.getExplorerAddressUrl(s, r),
                    address: r,
                  };
                })
                .filter((t) => {
                  let r = ''.concat(t.label, '-').concat(t.url, '-').concat(t.address);
                  return !e.has(r) && (e.add(r), !0);
                });
            }, [r.oracles, s]);
          return (0, n.tZ)(u, {
            className: t,
            children: (0, n.BX)(o.Kqy, {
              direction: 'column',
              children: [
                (0, n.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(o.xvT.Body.XXS.Regular, {
                      color: 'text.body',
                      children: 'Collateral',
                    }),
                    (0, n.BX)(o.Kqy, {
                      align: 'center',
                      gap: 4,
                      children: [
                        (0, n.tZ)(o.qEK, { src: r.token.logoURI, size: 'small' }),
                        (0, n.tZ)(h, {
                          children: r.token.symbol
                            ? (0, d.formatLongString)(r.token.symbol, 35)
                            : '-',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.tZ)(o.Z0O, {}),
                (0, n.BX)(p, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(o.xvT.Body.XXS.Regular, { color: 'text.body', children: 'LLTV' }),
                    (0, n.tZ)(o.xvT.Body.XXS.Regular, { children: m }),
                  ],
                }),
                (0, n.tZ)(o.Z0O, {}),
                (0, n.BX)(g, {
                  align: 'center',
                  justify: 'space-between',
                  gap: 's',
                  children: [
                    (0, n.tZ)(o.xvT.Body.XXS.Regular, { children: 'Oracle' }),
                    (0, n.tZ)(o.Kqy, {
                      direction: 'column',
                      gap: 5,
                      align: 'end',
                      children: f.map((e, t) =>
                        (0, n.tZ)(
                          c.Z,
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
        f = (0, i.memo)((e) => {
          let {
              className: t,
              collateralExposures: r,
              targetChainId: a,
              extraInfo: l,
              align: d = 'left',
              maxTokensCount: c,
              size: s,
            } = e,
            u = (0, i.useMemo)(
              () =>
                r.map((e) => ({
                  hoverCardContent: (0, n.tZ)(m, { collateralExposure: e, targetChainId: a }),
                  logoUrl: e.token.logoURI,
                })),
              [r, a]
            );
          return (0, n.tZ)(o.$xj, {
            className: t,
            items: u,
            extraInfo: l,
            align: d,
            maxTokensCount: c,
            avatarSize: s,
          });
        });
    },
    58810: function (e, t, r) {
      r.d(t, {
        A: function () {
          return h;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        a = r(18313),
        l = r(34937),
        d = r(55412),
        c = r(3245),
        s = r(63658);
      function u() {
        let e = (0, d._)([
          '\n  query GetMarketLiquidityTimeseries(\n    $uniqueKey: String!\n    $chainId: Int\n    $options: TimeseriesOptions\n  ) {\n    marketByUniqueKey(uniqueKey: $uniqueKey, chainId: $chainId) {\n      id\n      historicalState {\n        liquidityAssetsUsd(options: $options) {\n          x\n          y\n        }\n      }\n    }\n  }\n',
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      let p = {},
        g = (0, c.Ps)(u());
      var h = (0, i.memo)((e) => {
        var t;
        let { uniqueKey: r, chainId: d, liquidityAssetsUsd: c, isSimulated: u } = e,
          h = (0, l.Iz)(60),
          [m, f] = (0, i.useState)(a.B),
          {
            data: x,
            loading: y,
            error: b,
          } = (function (e) {
            let t = { ...p, ...e };
            return s.aM(g, t);
          })({
            variables: { uniqueKey: r, chainId: d, options: (0, l.Ai)({ timeFrame: m, now: h }) },
          }),
          Z = (0, i.useMemo)(() => {
            var e;
            return (0, o.EES)(
              null == x
                ? void 0
                : null === (e = x.marketByUniqueKey.historicalState) || void 0 === e
                  ? void 0
                  : e.liquidityAssetsUsd
            );
          }, [
            null == x
              ? void 0
              : null === (t = x.marketByUniqueKey.historicalState) || void 0 === t
                ? void 0
                : t.liquidityAssetsUsd,
          ]);
        return (0, n.tZ)(o.aeB, {
          data: Z,
          timeFrameOptions: a.SC,
          total: c,
          decimals: 18,
          loading: y,
          error: b,
          title: 'Market Liquidity',
          timeFrame: m,
          setTimeFrame: f,
          isSimulated: u,
        });
      });
    },
    76992: function (e, t, r) {
      r.d(t, {
        E: function () {
          return h;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        a = r(50825),
        l = r(38819),
        d = r(16690);
      let c = (0, l.Z)('div', { target: 'eikqm6p0' })(
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
        s = (0, l.Z)('div', { target: 'eikqm6p1' })('position:relative;'),
        u = (0, l.Z)(o.Kqy, { target: 'eikqm6p2' })(
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
        p = (0, l.Z)(o.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        g = (0, i.forwardRef)(function (e, t) {
          let {
            options: r,
            id: i,
            value: l,
            noPadding: d = !1,
            noGap: g = !1,
            disabled: h = !1,
            variant: m = 'primary',
            backgroundVariant: f = 'primary',
            size: x = 'small',
            className: y,
            onChange: b,
            ...Z
          } = e;
          return (0, n.tZ)(c, {
            noPadding: d,
            noGap: g,
            backgroundVariant: f,
            ref: t,
            className: y,
            ...Z,
            children: r.map((e) =>
              (0, n.tZ)(
                o.ua7,
                {
                  disabled: !e.tooltip,
                  content: e.tooltip,
                  offset: d ? 4 : 9,
                  children: (0, n.BX)(s, {
                    children: [
                      e.href
                        ? (0, n.tZ)(a.Z, {
                            href: e.href,
                            prefetch: e.prefetch,
                            mode: 'internal',
                            buttonProps: {
                              variant: e.value === l ? m : 'ghost',
                              size: x,
                              disabled: h || e.isDisabled,
                              label: e.label,
                              iconAlone: e.icon,
                              onClick: () => (null == b ? void 0 : b(e.value)),
                            },
                          })
                        : (0, n.tZ)(o.zxk, {
                            variant: e.value === l ? m : 'ghost',
                            size: x,
                            disabled: h || e.isDisabled,
                            label: e.label,
                            iconAlone: e.icon,
                            onClick: () => (null == b ? void 0 : b(e.value)),
                          }),
                      e.counter && e.counter > 0
                        ? (0, n.tZ)(u, {
                            children: (0, n.tZ)(p, {
                              TextVariant: o.xvT.Body.XXXS.Regular,
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
    43779: function (e, t, r) {
      r.d(t, {
        us: function () {
          return O;
        },
        iA: function () {
          return n;
        },
        Ei: function () {
          return en;
        },
        yL: function () {
          return L;
        },
        KL: function () {
          return ec;
        },
        uq: function () {
          return j;
        },
        _5: function () {
          return ed;
        },
      });
      var n = {};
      r.r(n),
        r.d(n, {
          iA: function () {
            return T;
          },
          ny: function () {
            return k;
          },
          p3: function () {
            return B;
          },
          Td: function () {
            return C;
          },
          hr: function () {
            return S;
          },
          Tr: function () {
            return X;
          },
          zC: function () {
            return w;
          },
        });
      var i = r(78286),
        o = r(58258),
        a = r(54655),
        l = r(38819),
        d = r(73478),
        c = r(55412),
        s = r(23567);
      let u = (0, l.Z)('table', { target: 'e1bk3cde0' })(
          'border-collapse:separate;border-spacing:0;width:100%;'
        ),
        p = (0, l.Z)('tr', { target: 'e1bk3cde1' })(
          'position:relative;white-space:nowrap;td > a > div{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';transition:background-color 0.5s ease-out;}:hover > td > a > div{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.components.tableRowHover;
          },
          ';transition:background-color 0.05s ease-in;}'
        ),
        g = (0, l.Z)('td', { target: 'e1bk3cde2' })(
          'width:',
          (e) => {
            let { width: t } = e;
            return t || 'auto';
          },
          ';&:first-of-type .td-content{border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' 0 0\n      ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ';}&:last-of-type .td-content{border-radius:0 ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' 0;}'
        ),
        h = (0, l.Z)('div', { target: 'e1bk3cde3' })(
          'display:flex;align-items:center;box-sizing:border-box;margin:0;height:100%;margin-top:10px;padding:0 ',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';height:60px;white-space:nowrap;align-content:center;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';'
        );
      function m() {
        let e = (0, c._)(['\n      position: sticky;\n      top: calc(64px + 10px);\n    ']);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      let f = (e) => {
          let { children: t } = e;
          return (0, i.tZ)(k.Provider, { value: 'large', children: (0, i.tZ)(u, { children: t }) });
        },
        x = (0, l.Z)('thead', { target: 'e1kgv7tm0' })(
          (e) => {
            let { position: t } = e;
            return 'sticky' === t && (0, s.iv)(m());
          },
          '  z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.base.default;
          },
          ';:before,:after{content:"";position:absolute;top:-10px;width:100%;height:10px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.base;
          },
          ';}'
        ),
        y = (0, l.Z)('th', { target: 'e1kgv7tm1' })(
          'position:relative;height:40px;text-align:start;white-space:nowrap;padding:0 ',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return a.IED.body.xxxs.regular(t, { color: 'text.body' });
          },
          ';&:first-of-type{border-radius:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' 0 0\n      ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ';}&:last-of-type{border-radius:0 ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' 0;}:before,:after{content:"";position:absolute;display:block;top:0;left:0;width:100%;height:100%;padding-bottom:10px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.base;
          },
          ';z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.hidden;
          },
          ';}'
        ),
        b = (0, l.Z)('tbody', { target: 'e1kgv7tm2' })(),
        Z = (e) => {
          let { children: t, ...r } = e;
          return o.Children.toArray(t)[0].props.href
            ? (0, i.tZ)(p, { ...r, children: t })
            : (0, i.tZ)('tr', { ...r, children: t });
        },
        v = (e) => {
          let { children: t, href: r, width: n, prefetch: o = !0, ...a } = e;
          return (0, i.tZ)(g, {
            ...a,
            width: n,
            children: r
              ? (0, i.tZ)(d.h, {
                  href: r,
                  prefetch: o,
                  children: (0, i.tZ)(h, { className: 'td-content', children: t }),
                })
              : (0, i.tZ)(h, { className: 'td-content', children: t }),
          });
        },
        k = (0, o.createContext)('large'),
        w = () => (0, o.useContext)(k),
        T = (e) => {
          let { tableVariant: t = 'large', children: r, ...n } = e;
          return (0, i.tZ)(k.Provider, {
            value: t,
            children:
              'compact' === t || 'compact-filter' === t
                ? (0, i.tZ)(R, { tableVariant: t, ...n, children: r })
                : (0, i.tZ)(f, { ...n, children: r }),
          });
        },
        S = (e) => {
          let { children: t, position: r = 'default' } = e,
            n = w();
          return 'compact' === n || 'compact-filter' === n
            ? (0, i.tZ)(z, { children: t })
            : (0, i.tZ)(x, { position: r, children: t });
        },
        B = (e) => {
          let { children: t } = e,
            r = w();
          return 'compact' === r || 'compact-filter' === r
            ? (0, i.tZ)(U, { tableVariant: r, children: t })
            : (0, i.tZ)(b, { children: t });
        },
        X = (e) => {
          let t = w();
          return 'compact' === t || 'compact-filter' === t
            ? (0, i.tZ)(M, { ...e })
            : (0, i.tZ)(Z, { ...e });
        },
        C = (e) => {
          let { children: t, href: r, width: n, prefetch: o = !0 } = e,
            a = w();
          return 'compact' === a || 'compact-filter' === a
            ? (0, i.tZ)(P, { tableVariant: a, width: n, href: r, prefetch: o, children: t })
            : (0, i.tZ)(v, { href: r, width: n, prefetch: o, children: t });
        },
        q = (0, l.Z)('table', { target: 'ecrx3n00' })(
          'width:100%;border-collapse:separate;border-spacing:0 0;'
        ),
        A = (0, l.Z)('td', { target: 'ecrx3n01' })(
          'width:',
          (e) => {
            let { width: t } = e;
            return t || 'auto';
          },
          ';'
        ),
        K = (0, l.Z)('div', { target: 'ecrx3n02' })(
          'display:flex;align-items:center;box-sizing:border-box;border-top:1px solid ',
          (e) => {
            let { theme: t } = e;
            return t.colors.border.primary;
          },
          ';',
          (0, a.xJ_)('border-top-width'),
          ';padding:',
          (e) => {
            let { theme: t, tableVariant: r } = e;
            return 'compact-filter' === r
              ? ''.concat(t.spacing.xs, ' 40px ').concat(t.spacing.xs, ' 20px')
              : ''.concat(t.spacing.xs, ' 72px ').concat(t.spacing.xs, ' 20px');
          },
          ';height:60px;white-space:nowrap;align-content:center;'
        ),
        I = (0, l.Z)('tr', { target: 'ecrx3n03' })(
          'position:relative;white-space:nowrap;td > a > div{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';transition:background-color 0.5s ease-out;}:hover > td > a > div{background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.components.tableRowHover;
          },
          ';transition:background-color 0.05s ease-in;}'
        ),
        R = (e) => {
          let { children: t, tableVariant: r, ...n } = e;
          return (0, i.tZ)(k.Provider, { value: r, children: (0, i.tZ)(q, { ...n, children: t }) });
        },
        z = (0, l.Z)('thead', { target: 'ekadpii0' })(),
        N = (0, l.Z)('th', { target: 'ekadpii1' })(
          'height:36px;text-align:start;white-space:nowrap;padding:',
          (e) => {
            let { theme: t, tableVariant: r } = e;
            return 'compact-filter' === r
              ? ''.concat(t.spacing.s, ' 72px ').concat(t.spacing.s, ' 20px')
              : '10px 72px 10px 20px';
          },
          ';background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return a.IED.body.xxxs.regular(t, { color: 'text.secondary' });
          },
          ';',
          (e) => {
            let { tableVariant: t, theme: r } = e;
            return (
              'compact-filter' !== t &&
              '\n      &:first-of-type {\n        border-top-left-radius: '
                .concat(
                  r.borderRadius,
                  ';\n      }\n      &:last-of-type {\n        border-top-right-radius: '
                )
                .concat(r.borderRadius, ';\n      }\n    ')
            );
          }
        ),
        U = (0, l.Z)('tbody', { target: 'ekadpii2' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.bloc;
          },
          ';tr:last-child td{&:first-of-type{border-bottom-left-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';}&:last-of-type{border-bottom-right-radius:',
          (e) => {
            let { theme: t } = e;
            return t.borderRadius;
          },
          ';}}'
        ),
        M = (e) => {
          let { children: t, ...r } = e;
          return o.Children.toArray(t)[0].props.href
            ? (0, i.tZ)(I, { ...r, children: t })
            : (0, i.tZ)('tr', { ...r, children: t });
        },
        P = (e) => {
          let {
            children: t,
            tableVariant: r = 'compact',
            width: n,
            href: o,
            prefetch: a = !0,
            ...l
          } = e;
          return o
            ? (0, i.tZ)(A, {
                ...l,
                width: n,
                children: (0, i.tZ)(d.h, {
                  href: o,
                  prefetch: a,
                  children: (0, i.tZ)(K, { tableVariant: r, className: 'td-content', children: t }),
                }),
              })
            : (0, i.tZ)(A, {
                ...l,
                width: n,
                children: (0, i.tZ)(K, { tableVariant: r, className: 'td-content', children: t }),
              });
        },
        $ = (0, l.Z)(a.Kqy, { target: 'ek8xskd0' })(),
        E = (0, l.Z)(a.Kqy, { shouldForwardProp: (0, a.uhK)(['isSorted']), target: 'ek8xskd1' })(
          'width:20px;cursor:pointer;color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.secondary;
          },
          ';opacity:',
          (e) => {
            let { isSorted: t } = e;
            return t ? 1 : 0;
          },
          ';transition:color 150ms,opacity 150ms;',
          $,
          ':hover &{color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.primary;
          },
          ';opacity:1;}'
        ),
        V = (0, l.Z)(a.JO$, { target: 'ek8xskd2' })(
          'transform:rotate(90deg) translateY(-0.5px);&[data-is-sorted="asc"]{transform:rotate(-90deg);}'
        ),
        D = (e) => {
          let { children: t, ...r } = e,
            n = w();
          return 'compact' === n || 'compact-filter' === n
            ? (0, i.tZ)(N, { tableVariant: n, ...r, children: t })
            : (0, i.tZ)(y, { ...r, children: t });
        };
      var O = (0, o.memo)((e) => {
          let {
              columnName: t,
              colSpan: r,
              className: n,
              children: l,
              isSorted: d = !1,
              isSortable: c = !0,
              onClick: s,
            } = e,
            u = (0, o.useMemo)(() => (t ? 'Sort by '.concat(t) : 'Sort'), [t]);
          return (0, i.tZ)(D, {
            className: n,
            colSpan: r,
            children: (0, i.BX)($, {
              display: 'inline-flex',
              align: 'center',
              onClick: s,
              cursor: c ? 'pointer' : 'text',
              children: [
                l,
                c &&
                  (0, i.tZ)(a.ua7, {
                    content: u,
                    children: (0, i.tZ)(E, {
                      className: n,
                      align: 'center',
                      justify: 'center',
                      isSorted: d,
                      children: (0, i.tZ)(V, { icon: 'ArrowPlain20', 'data-is-sorted': d }),
                    }),
                  }),
              ],
            }),
          });
        }),
        _ = r(55385);
      function j(e) {
        let { headerGroup: t, columnLabels: r } = e;
        return (0, i.tZ)(X, {
          children: t.headers.map((e) =>
            (0, i.tZ)(
              O,
              {
                colSpan: e.colSpan,
                columnName: null == r ? void 0 : r[e.id],
                isSorted: e.column.getIsSorted(),
                isSortable: e.column.getCanSort(),
                onClick: () => {
                  e.column.getCanSort() && e.column.toggleSorting();
                },
                children: e.isPlaceholder
                  ? null
                  : (0, _.ie)(e.column.columnDef.header, e.getContext()),
              },
              e.id
            )
          ),
        });
      }
      function L(e) {
        let { row: t, skeletonRow: r, href: n, prefetch: o = !0, ...l } = e;
        return (0, i.BX)(X, {
          ...l,
          children: [
            r && r.map((e, t) => (0, i.tZ)(C, { children: e }, t)),
            t &&
              t
                .getVisibleCells()
                .map((e) =>
                  (0, i.tZ)(
                    C,
                    {
                      href: n,
                      prefetch: o,
                      children: (0, i.tZ)(a.xvT.Body.XS.Regular, {
                        children: (0, _.ie)(e.column.columnDef.cell, e.getContext()),
                      }),
                    },
                    e.id
                  )
                ),
          ],
        });
      }
      var F = r(84430);
      let G = (0, l.Z)('table', { target: 'eui5eny0' })(
          'width:100%;border-collapse:separate;border-spacing:0 0;'
        ),
        H = (0, l.Z)('thead', { target: 'eui5eny1' })(),
        J = (0, l.Z)('th', { target: 'eui5eny2' })(
          'height:38px;text-align:start;white-space:nowrap;',
          (e) => {
            let { theme: t } = e;
            return a.IED.body.xxxs.regular(t, { color: 'text.secondary' });
          },
          ';position:relative;padding:0 0 0 ',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';border-bottom:1px solid ',
          (e) => {
            let { theme: t } = e;
            return t.colors.border.primary;
          },
          ';'
        ),
        Q = (0, l.Z)('td', { target: 'eui5eny3' })(),
        W = (0, l.Z)('div', { target: 'eui5eny4' })(
          'display:flex;align-items:center;box-sizing:border-box;',
          (0, a.xJ_)('border-top-width'),
          ';padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' 0\n    ',
          (e) => {
            let { theme: t } = e;
            return t.spacing.xs;
          },
          ' ',
          (e) => {
            let { theme: t } = e;
            return t.padding.s;
          },
          ';white-space:nowrap;align-content:center;'
        ),
        Y = (0, l.Z)('tbody', { target: 'eui5eny5' })(),
        ee = (0, l.Z)('tr', { target: 'eui5eny6' })('display:table;width:100%;table-layout:fixed;'),
        et = (e) => {
          let { children: t, ...r } = e;
          return (0, i.tZ)(ee, { ...r, children: t });
        },
        er = (e) => {
          let { children: t, ...r } = e;
          return (0, i.tZ)(Q, {
            ...r,
            children: (0, i.tZ)(W, { className: 'td-content', children: t }),
          });
        },
        en = {
          Root: (e) => {
            let { children: t } = e;
            return (0, i.tZ)(G, { children: t });
          },
          Thead: (e) => {
            let { children: t } = e;
            return (0, i.tZ)(H, { children: t });
          },
          Th: (e) => {
            let { children: t } = e;
            return (0, i.tZ)(J, { children: t });
          },
          Tbody: (e) => {
            let { children: t } = e;
            return (0, i.tZ)(Y, { children: t });
          },
          Tr: (e) => {
            let { children: t } = e;
            return (0, i.tZ)(et, { children: t });
          },
          Td: (e) => {
            let { children: t } = e;
            return (0, i.tZ)(er, { children: t });
          },
        },
        ei = (0, l.Z)(a.Kqy, {
          shouldForwardProp: (0, a.uhK)(['isSorted', 'isVisible']),
          target: 'ekf9ntb0',
        })(
          'width:20px;cursor:pointer;color:',
          (e) => {
            let { theme: t, isSorted: r } = e;
            return r ? t.colors.icon.secondary : t.colors.icon.interactive.disabled;
          },
          ';opacity:',
          (e) => {
            let { isVisible: t } = e;
            return t ? 1 : 0;
          },
          ';transition:color 150ms,opacity 150ms;&:hover{color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.primary;
          },
          ';opacity:1;}'
        ),
        eo = (0, l.Z)(a.JO$, { target: 'ekf9ntb1' })(
          'transform:rotate(90deg) translateY(-0.5px);&[data-is-sorted="asc"]{transform:rotate(-90deg);}'
        ),
        ea = (e) => {
          let { children: t, ...r } = e;
          return (0, i.tZ)(en.Th, { ...r, children: t });
        };
      var el = (0, o.memo)((e) => {
        let {
            columnName: t,
            colSpan: r,
            className: n,
            children: l,
            isSorted: d = !1,
            isSortable: c = !0,
            onClick: s,
          } = e,
          [u, p] = (0, o.useState)(!1),
          g = (0, o.useRef)(null),
          h = (0, o.useCallback)((e) => {
            g.current && p(g.current.contains(e.target));
          }, []),
          m = (0, F.y1)(h, 200);
        (0, o.useEffect)(
          () => (
            document.addEventListener('mousemove', m),
            () => document.removeEventListener('mousemove', m)
          ),
          [m]
        );
        let f = (0, o.useMemo)(() => (t ? 'Sort by '.concat(t) : 'Sort'), [t]);
        return (0, i.tZ)(ea, {
          className: n,
          colSpan: r,
          children: (0, i.BX)(a.Kqy, {
            display: 'inline-flex',
            ref: g,
            align: 'center',
            children: [
              l,
              c &&
                (0, i.tZ)(a.ua7, {
                  content: f,
                  children: (0, i.tZ)(ei, {
                    className: n,
                    align: 'center',
                    justify: 'center',
                    isVisible: c && (u || !!d),
                    isSorted: d,
                    onClick: s,
                    children: (0, i.tZ)(eo, { icon: 'ArrowPlain20', 'data-is-sorted': d }),
                  }),
                }),
            ],
          }),
        });
      });
      function ed(e) {
        let { headerGroup: t, columnLabels: r } = e;
        return (0, i.tZ)(en.Tr, {
          children: t.headers.map((e) =>
            (0, i.tZ)(
              el,
              {
                colSpan: e.colSpan,
                columnName: null == r ? void 0 : r[e.id],
                isSorted: e.column.getIsSorted(),
                isSortable: e.column.getCanSort(),
                onClick: () => {
                  e.column.getCanSort() && e.column.toggleSorting();
                },
                children: e.isPlaceholder
                  ? null
                  : (0, _.ie)(e.column.columnDef.header, e.getContext()),
              },
              e.id
            )
          ),
        });
      }
      function ec(e) {
        let { row: t, skeletonRow: r } = e;
        return (0, i.BX)(en.Tr, {
          children: [
            r && r.map((e, t) => (0, i.tZ)(en.Td, { children: e }, t)),
            t &&
              t
                .getVisibleCells()
                .map((e) =>
                  (0, i.tZ)(
                    en.Td,
                    {
                      children: (0, i.tZ)(a.xvT.Body.XS.Regular, {
                        children: (0, _.ie)(e.column.columnDef.cell, e.getContext()),
                      }),
                    },
                    e.id
                  )
                ),
          ],
        });
      }
    },
    81261: function (e, t, r) {
      r.d(t, {
        H: function () {
          return d;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        a = r(89991);
      let l = (0, r(38819).Z)('div', { target: 'epb4mgh0' })(
        'padding:4px 8px;display:flex;gap:',
        (e) => {
          let { theme: t } = e;
          return t.spacing.xxs;
        },
        ';justify-content:space-between;align-items:center;'
      );
      var d = (0, i.memo)((e) => {
        let { tagOptions: t, assetIdsFilter: r, clear: d, disabled: c } = e,
          s = (0, i.useId)(),
          {
            account: { isConnected: u },
          } = (0, a.Z_)();
        return (0, n.BX)(n.HY, {
          children: [
            (0, n.BX)(l, {
              children: [
                (0, n.BX)(o.Kqy, {
                  gap: 'xxs',
                  align: 'center',
                  children: [
                    (0, n.tZ)(o.ket, { id: s, options: t, disabled: c }),
                    u &&
                      (0, n.tZ)(o.ua7, {
                        content: 'Filtering by wallet holdings is coming soon.',
                        withTouch: !0,
                        children: (0, n.tZ)(o.JO$, {
                          icon: 'WalletPlain20',
                          color: 'text.primary',
                          style: { margin: 4, opacity: 0.2, cursor: 'not-allowed' },
                        }),
                      }),
                  ],
                }),
                (0, n.tZ)(o.ua7, {
                  content: 'Clear all filters',
                  disabled: !r.length,
                  children: (0, n.tZ)(o.zxk, {
                    variant: 'ghost',
                    size: 'small',
                    disabled: !r.length,
                    label: 'Clear',
                    onClick: d,
                  }),
                }),
              ],
            }),
            (0, n.tZ)(o.Z0O, {}),
          ],
        });
      });
    },
    25629: function (e, t, r) {
      r.d(t, {
        F: function () {
          return c;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(40252),
        a = r(54655),
        l = r(50825);
      let d = (0, r(38819).Z)(a.Kqy, { target: 'evzhg7s0' })('height:25.6px;');
      var c = (0, i.memo)((e) => {
        let {
            address: t,
            toastMessage: r,
            tooltipMessage: c,
            targetChainId: s,
            explorerName: u,
            TextVariant: p = a.xvT.Body.M.Regular,
            noLink: g = !1,
          } = e,
          h = (0, i.useMemo)(() => o.ChainUtils.getExplorerAddressUrl(s, t), [t, s]),
          m = (0, i.useMemo)(() => (0, a.GQT)(t), [t]);
        return (0, n.BX)(d, {
          gap: 4,
          align: 'center',
          children: [
            (0, n.tZ)(a.ZT$, { TextVariant: p, lineHeight: 'normal', children: m }),
            (0, n.tZ)(a.mUV, {
              size: 'small',
              toCopy: t,
              toastMessage: r || 'Address copied to clipboard.',
              tooltipMessage: c,
            }),
            !(0, a.Czs)(t) &&
              (0, n.tZ)(a.Kqy, {
                align: 'center',
                children:
                  !g &&
                  (0, n.tZ)(a.ua7, {
                    content: 'Go to '.concat(u || 'block explorer', '.'),
                    children: (0, n.tZ)(a.Kqy, {
                      children: (0, n.tZ)(l.Z, {
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
    4407: function (e, t, r) {
      r.d(t, {
        M: function () {
          return o;
        },
        n: function () {
          return a;
        },
      });
      var n = r(38819),
        i = r(54655);
      let o = (0, n.Z)(i.Kqy, { target: 'emgz5yv0' })('flex-direction:column;max-height:200px;'),
        a = (0, n.Z)(i.Kqy, { target: 'emgz5yv1' })(
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
    },
    85501: function (e, t, r) {
      r.d(t, {
        T: function () {
          return c;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        a = r(6423),
        l = r(73478),
        d = r(4407),
        c = (0, i.memo)((e) => {
          let { vaults: t, emptyMessage: r, shouldOpenLinkInNewTab: i } = e;
          return (0, n.tZ)(o.xrM, {
            children: (0, n.tZ)(d.M, {
              children:
                0 === t.length
                  ? (0, n.tZ)(o.xvT.Body.S.Regular, { color: 'text.body', children: r })
                  : t.map((e) => {
                      let {
                          id: t,
                          vaultName: r,
                          address: c,
                          imageURI: s,
                          network: u,
                          vaultDeposit: p,
                        } = e,
                        g = (0, a.Q)({ chainName: u, vaultAddress: c, vaultName: r });
                      return (0, n.tZ)(
                        l.h,
                        {
                          href: g,
                          prefetch: !0,
                          shouldOpenLinkInNewTab: i,
                          children: (0, n.BX)(d.n, {
                            justify: 'space-between',
                            gap: 'xs',
                            align: 'center',
                            children: [
                              (0, n.BX)(o.Kqy, {
                                gap: 'xxs',
                                align: 'center',
                                children: [
                                  (0, n.tZ)(o.qEK, { src: s, size: 'small' }),
                                  (0, n.tZ)(o.xvT.Body.XXS.Regular, {
                                    shorten: 1,
                                    color: 'text.body',
                                    children: (0, o.Uaj)(r),
                                  }),
                                ],
                              }),
                              p &&
                                (0, n.tZ)(o.xvT.Body.XXS.Regular, {
                                  color: 'text.body',
                                  children: p,
                                }),
                            ],
                          }),
                        },
                        t
                      );
                    }),
            }),
          });
        });
    },
    70827: function (e, t, r) {
      r.d(t, {
        g: function () {
          return f;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        a = r(40252),
        l = r(12556),
        d = r(50825),
        c = r(89991),
        s = r(6423),
        u = r(38819);
      let p = (0, u.Z)('div', { target: 'eguic7y0' })(
          'width:300px;padding:',
          (e) => {
            let { theme: t } = e;
            return t.spacing.s;
          },
          ';'
        ),
        g = (0, u.Z)(o.Kqy, { target: 'eguic7y1' })('min-height:34px;'),
        h = (0, u.Z)(o.xvT.Body.XXS.Regular, { target: 'eguic7y2' })('display:contents;');
      var m = (0, i.memo)((e) => {
          let { className: t, vaultItem: r } = e,
            { targetChain: u } = (0, c.Z_)(),
            m = (0, i.useMemo)(
              () => (r.address ? a.ChainUtils.getExplorerAddressUrl(r.chainId, r.address) : ''),
              [r]
            ),
            f = (0, i.useMemo)(() => {
              if (r.totalSupply.token)
                return o.$0l.short
                  .unit(r.totalSupply.token.symbol)
                  .trailingZero(!1)
                  .digits(2)
                  .of(r.totalSupply.amount, Number(r.totalSupply.token.decimals));
            }, [r]),
            x = (0, i.useMemo)(() => r.curators.length > 0, [r.curators.length]);
          return (0, n.tZ)(p, {
            className: t,
            children: (0, n.BX)(o.Kqy, {
              direction: 'column',
              children: [
                (0, n.BX)(g, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(o.xvT.Body.XXS.Regular, { children: 'Vault' }),
                    (0, n.tZ)(d.Z, {
                      href: r.url,
                      mode: 'internal',
                      buttonProps: {
                        variant: 'ghost',
                        size: 'small',
                        label: (0, o.Uaj)(r.name),
                        avatarProps: { src: r.image },
                      },
                    }),
                  ],
                }),
                x &&
                  (0, n.BX)(g, {
                    align: 'center',
                    justify: 'space-between',
                    children: [
                      (0, n.tZ)(o.xvT.Body.XXS.Regular, { children: x ? 'Curators' : 'Curator' }),
                      (0, n.tZ)(o.Kqy, {
                        direction: 'column',
                        gap: 2,
                        children: r.curators.map((e) =>
                          (0, n.tZ)(
                            d.Z,
                            {
                              href: (0, s.tw)({
                                chainName: l.FW.getNameById(u.id),
                                curatorId: e.id,
                              }),
                              mode: 'internal',
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
                (0, n.BX)(g, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(o.xvT.Body.XXS.Regular, { children: 'Address' }),
                    (0, n.BX)(o.Kqy, {
                      align: 'center',
                      gap: 2,
                      children: [
                        (0, n.tZ)(d.Z, {
                          href: m,
                          mode: 'external',
                          buttonProps: {
                            variant: 'ghost',
                            size: 'small',
                            label: (0, o.GQT)(r.address),
                          },
                        }),
                        (0, n.tZ)(o.mUV, {
                          toCopy: r.address,
                          toastMessage: 'Address copied to clipboard.',
                          tooltipMessage: 'Copy address.',
                          size: 'small',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.BX)(g, {
                  align: 'center',
                  justify: 'space-between',
                  children: [
                    (0, n.tZ)(o.xvT.Body.XXS.Regular, { children: 'Total supply' }),
                    (0, n.BX)(o.Kqy, {
                      align: 'center',
                      gap: 2,
                      children: [
                        (0, n.tZ)(o.qEK, { src: r.totalSupply.token.logoURI, size: 'small' }),
                        (0, n.tZ)(h, { children: f }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        f = (0, i.memo)((e) => {
          let { className: t, vaultListing: r, extraInfo: a, maxVaultsCount: l } = e,
            d = (0, i.useMemo)(
              () =>
                r.map((e) => {
                  var t;
                  return {
                    hoverCardContent: (0, n.tZ)(m, { vaultItem: e }),
                    logoUrl: null === (t = e.curators[0]) || void 0 === t ? void 0 : t.image,
                  };
                }),
              [r]
            );
          return (0, n.tZ)(o.$xj, { className: t, items: d, extraInfo: a, maxTokensCount: l });
        });
    },
    94610: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = r(78286),
        i = r(58258),
        o = r(54655),
        a = r(35047),
        l = r(18313),
        d = r(34937),
        c = r(55412),
        s = r(3245),
        u = r(63658);
      function p() {
        let e = (0, c._)([
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
        h = (0, s.Ps)(p());
      var m = (0, i.memo)((e) => {
        var t;
        let { address: r, chainId: c, assetUsd: s, isSimulated: p = !1 } = e,
          m = (0, d.Iz)(60),
          [f, x] = (0, i.useState)(l.B),
          {
            data: y,
            loading: b,
            error: Z,
          } = (function (e) {
            let t = { ...g, ...e };
            return u.aM(h, t);
          })({
            variables: { address: r, chainId: c, options: (0, d.Ai)({ timeFrame: f, now: m }) },
            skip: !(0, a.isDefined)(r) || !(0, a.isDefined)(c),
          }),
          v = (0, i.useMemo)(() => {
            var e;
            return (0, o.EES)(
              null == y
                ? void 0
                : null === (e = y.vaultByAddress.historicalState) || void 0 === e
                  ? void 0
                  : e.totalAssetsUsd
            );
          }, [
            null == y
              ? void 0
              : null === (t = y.vaultByAddress.historicalState) || void 0 === t
                ? void 0
                : t.totalAssetsUsd,
          ]);
        return (0, n.tZ)(o.aeB, {
          data: v,
          isSimulated: p,
          timeFrameOptions: l.SC,
          total: s,
          decimals: 18,
          loading: b,
          error: Z,
          title: 'Total Supply',
          timeFrame: f,
          setTimeFrame: x,
        });
      });
    },
    28393: function (e, t, r) {
      r.d(t, {
        Rh: function () {
          return l;
        },
        cW: function () {
          return d;
        },
        ef: function () {
          return c;
        },
        wP: function () {
          return a;
        },
      });
      var n = r(23567),
        i = r(38819),
        o = r(54655);
      let a = (0, i.Z)('div', {
          shouldForwardProp: (0, o.uhK)(['noBackground']),
          target: 'e1i1nrgp0',
        })(
          'background:',
          (e) => {
            let { theme: t, noBackground: r } = e;
            return !r && t.colors.constant.gradient.pageBackground;
          },
          ';width:100%;'
        ),
        l = (0, i.Z)(o.Kqy, {
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
              ? (0, n.iv)('padding-top:100px;padding-bottom:100px;')
              : (0, n.iv)('padding-top:80px;padding-bottom:80px;');
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
              ? (0, n.iv)('padding-left:120px;padding-right:120px;')
              : (0, n.iv)('padding-left:80px;padding-right:80px;');
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
              ? (0, n.iv)('padding-left:60px;padding-right:60px;')
              : (0, n.iv)('padding-left:12px;padding-right:12px;');
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
    4078: function (e, t, r) {
      var n = r(78286),
        i = r(58258),
        o = r(28393);
      t.default = (0, i.memo)((e) => {
        let {
          children: t,
          hasLargerVerticalPadding: r = !1,
          withoutAside: i = !1,
          withOverflowingBottomBorder: a = !1,
          unshiftTop: l = !1,
          noBackground: d = !1,
          className: c,
          style: s,
        } = e;
        return (0, n.BX)(o.wP, {
          noBackground: d,
          className: c,
          style: s,
          id: 'section-layout-background',
          children: [
            (0, n.tZ)(o.Rh, {
              hasLargerVerticalPadding: r,
              withoutAside: i,
              unshiftTop: l,
              id: 'section-layout',
              children: t,
            }),
            a && (0, n.tZ)(o.cW, {}),
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
    34937: function (e, t, r) {
      r.d(t, {
        Ai: function () {
          return s;
        },
        Iz: function () {
          return c;
        },
        Vl: function () {
          return d;
        },
      });
      var n,
        i,
        o = r(56489),
        a = r(13191),
        l = r(35047);
      function d(e) {
        return (0, o.Z)(e, { unit: 'mo', duration: 3 })
          ? 'quarterlyNetApy'
          : 'mo' === e
            ? 'monthlyNetApy'
            : 'w' === e
              ? 'weeklyNetApy'
              : 'allTimeNetApy';
      }
      function c() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return Math.floor(Number(l.Time.timestamp()) / 60) * e;
      }
      function s(e) {
        let { timeFrame: t, now: r } = e;
        return {
          startTimestamp: t ? r - l.Time.s.fromPeriod(t) : 0,
          endTimestamp: r,
          interval: 'w' === t ? a.TimeseriesInterval.Hour : a.TimeseriesInterval.Day,
        };
      }
      ((n = i || (i = {})).OneDay = '1d'),
        (n.OneWeek = '1w'),
        (n.OneMonth = '1m'),
        (n.ThreeMonths = '3m'),
        (n.OneYear = '1y'),
        (n.YearToDay = 'ytd'),
        (n.AllTime = 'all');
    },
  },
]);
