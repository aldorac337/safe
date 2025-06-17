'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1790],
  {
    1790: function (e, o, n) {
      n.d(o, {
        GV: function () {
          return ee;
        },
        xY: function () {
          return oe;
        },
        MB: function () {
          return re;
        },
        ET: function () {
          return J;
        },
        DF: function () {
          return ne;
        },
        OP: function () {
          return $;
        },
      });
      var r,
        t,
        s = n(1279),
        a = n(80059),
        i = n(80822),
        c = n(15861),
        l = n(53219),
        u = n(67294),
        d = n(3439),
        p = n(11011),
        m = new Map([
          [d.ou.USDe.A_TOKEN, 25],
          [d.ou.sUSDe.A_TOKEN, 5],
          [p.ou.sUSDe.A_TOKEN, 5],
          [d.ou.GHO.V_TOKEN, 5],
          [p.ou.GHO.V_TOKEN, 5],
          [d.ou.PT_eUSDE_29MAY2025.A_TOKEN, 2],
          [d.ou.PT_eUSDE_14AUG2025.A_TOKEN, 2],
          [d.ou.PT_USDe_31JUL2025.A_TOKEN, 2],
          [d.ou.PT_sUSDE_31JUL2025.A_TOKEN, 1],
          [d.ou.PT_sUSDE_31JUL2025.A_TOKEN, 1],
        ]),
        T = function (e) {
          var o;
          if (e) return (o = e), m.get(o);
        },
        E = n(75331),
        S = n(18376),
        y = new Map([
          [''.concat(S.el.proto_mainnet_v3, '-').concat(E.UQ.supply, '-weETH'), 3],
          [''.concat(S.el.proto_mainnet_v3, '-').concat(E.UQ.supply, '-eBTC'), 3],
          [''.concat(S.el.proto_etherfi_v3, '-').concat(E.UQ.supply, '-weETH'), 3],
          [''.concat(S.el.proto_lido_v3, '-').concat(E.UQ.supply, '-weETH'), 3],
          [''.concat(S.el.proto_arbitrum_v3, '-').concat(E.UQ.supply, '-weETH'), 3],
          [''.concat(S.el.proto_base_v3, '-').concat(E.UQ.supply, '-weETH'), 3],
          [''.concat(S.el.proto_scroll_v3, '-').concat(E.UQ.supply, '-weETH'), 3],
          [''.concat(S.el.proto_zksync_v3, '-').concat(E.UQ.supply, '-weETH'), 3],
          [''.concat(S.el.proto_linea_v3, '-').concat(E.UQ.supply, '-weETH'), 3],
        ]),
        _ = function (e, o, n) {
          if (e && n && o)
            return (function (e, o, n) {
              return y.get(''.concat(e, '-').concat(o, '-').concat(n));
            })(e, n, o);
        },
        A = n(99346),
        x = n(42499),
        U = new Map([
          [x.ou.WETH.A_TOKEN, 4],
          [x.ou.USDCe.A_TOKEN, 12],
          [x.ou.wS.A_TOKEN, 8],
          [x.ou.stS.A_TOKEN, 8],
        ]),
        b = function (e) {
          var o;
          if (e) return (o = e), U.get(o);
        },
        h = n(50029),
        w = n(87794),
        v = n.n(w),
        k = n(63607),
        f = n(78551);
      !(function (e) {
        (e.LEND = 'LEND'), (e.BORROW = 'BORROW');
      })(r || (r = {})),
        (function (e) {
          (e.LIVE = 'LIVE'), (e.PAST = 'PAST'), (e.UPCOMING = 'UPCOMING');
        })(t || (t = {}));
      var C = k.ou.ZK.UNDERLYING,
        O = function (e) {
          var o = e.market,
            n = e.rewardedAsset,
            s = e.protocolAction;
          return (0, f.a)({
            queryFn: (function () {
              var e = (0, h.Z)(
                v().mark(function e() {
                  var n, r;
                  return v().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (o !== S.el.proto_zksync_v3) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.next = 3),
                            fetch(
                              'https://api.merkl.xyz/v4/opportunities?tags=zksync&mainProtocolId=aave'
                            )
                          );
                        case 3:
                          return (n = e.sent), (e.next = 6), n.json();
                        case 6:
                          return (r = e.sent), e.abrupt('return', r);
                        case 10:
                          return e.abrupt('return', []);
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            queryKey: ['zkIgniteIncentives', o],
            staleTime: 3e5,
            select: function (e) {
              var o = e.filter(function (e) {
                return (
                  n &&
                  e.identifier.toLowerCase() === n.toLowerCase() &&
                  s &&
                  (function (e, o) {
                    switch (e) {
                      case r.LEND:
                        return o === E.UQ.supply;
                      case r.BORROW:
                        return o === E.UQ.borrow;
                      default:
                        return !1;
                    }
                  })(e.action, s)
                );
              });
              if (0 === o.length) return null;
              var a = o[0];
              return a.status !== t.LIVE
                ? null
                : {
                    incentiveAPR: (a.apr / 100).toString(),
                    rewardTokenAddress: C,
                    rewardTokenSymbol: 'ZK',
                  };
            },
          });
        },
        L = n(3062),
        P = n(65361),
        g = n(2127),
        j = n(32867),
        R = n(45640),
        H = n(57499),
        B = n(38577),
        D = n(85893),
        I = function (e) {
          var o = e.points;
          return (0, D.jsxs)(i.Z, {
            children: [
              (0, D.jsx)(H.cC, {
                id: '11xQTX',
                values: { 0: (0, D.jsxs)('b', { children: [o, 'x'] }) },
              }),
              (0, D.jsx)('br', {}),
              (0, D.jsx)(H.cC, { id: 'L2tU22' }),
              ' ',
              (0, D.jsx)(B.rU, {
                href: 'https://app.ethena.fi/join',
                sx: { textDecoration: 'underline' },
                variant: 'caption',
                color: 'text.secondary',
                children: 'here',
              }),
              '.',
              (0, D.jsx)('br', {}),
              (0, D.jsx)('br', {}),
              (0, D.jsx)(H.cC, { id: '+KaZP2' }),
            ],
          });
        },
        N = function (e) {
          var o = e.multiplier;
          return (0, D.jsxs)(i.Z, {
            children: [
              (0, D.jsx)(H.cC, {
                id: '2S7oCr',
                values: { multiplier: o },
                components: { 0: (0, D.jsx)('b', {}) },
              }),
              (0, D.jsx)('br', {}),
              (0, D.jsx)(H.cC, { id: 'o7Yloh' }),
              ' ',
              (0, D.jsx)(B.rU, {
                href: 'https://etherfi.gitbook.io/etherfi/getting-started/loyalty-points',
                sx: { textDecoration: 'underline' },
                variant: 'caption',
                color: 'text.secondary',
                children: 'here',
              }),
              '.',
              (0, D.jsx)('br', {}),
              (0, D.jsx)('br', {}),
              (0, D.jsx)(H.cC, { id: '+KaZP2' }),
            ],
          });
        },
        Z = n(59499),
        Y = n(20986);
      function M(e, o) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          o &&
            (r = r.filter(function (o) {
              return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function W(e) {
        for (var o = 1; o < arguments.length; o++) {
          var n = null != arguments[o] ? arguments[o] : {};
          o % 2
            ? M(Object(n), !0).forEach(function (o) {
                (0, Z.Z)(e, o, n[o]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : M(Object(n)).forEach(function (o) {
                  Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
                });
        }
        return e;
      }
      var Q = {
          aEthLidoWETH: { tokenIconSymbol: 'WETH', symbol: 'aWETH', aToken: !0 },
          aBasUSDC: { tokenIconSymbol: 'usdc', symbol: 'aUSDC', aToken: !0 },
          aEthUSDS: { tokenIconSymbol: 'usds', symbol: 'aUSDS', aToken: !0 },
          aEthLidowstETH: { tokenIconSymbol: 'wstETH', symbol: 'awstETH', aToken: !0 },
          aEthUSDC: { tokenIconSymbol: 'USDC', symbol: 'aUSDC', aToken: !0 },
          aEthUSDT: { tokenIconSymbol: 'USDT', symbol: 'aUSDT', aToken: !0 },
          aEthPYUSD: { tokenIconSymbol: 'PYUSD', symbol: 'aPYUSD', aToken: !0 },
          aArbWETH: { tokenIconSymbol: 'WETH', symbol: 'aWETH', aToken: !0 },
          aArbwstETH: { tokenIconSymbol: 'wstETH', symbol: 'awstETH', aToken: !0 },
          aBaswstETH: { tokenIconSymbol: 'wstETH', symbol: 'awstETH', aToken: !0 },
          aBasEURC: { tokenIconSymbol: 'EURC', symbol: 'aEURC', aToken: !0 },
          aBasGHO: { tokenIconSymbol: 'GHO', symbol: 'aGHO', aToken: !0 },
          aAvaSAVAX: { tokenIconSymbol: 'sAVAX', symbol: 'asAVAX', aToken: !0 },
          aEthRLUSD: { tokenIconSymbol: 'RLUSD', symbol: 'aRLUSD', aToken: !0 },
          aSonwS: { tokenIconSymbol: 'wS', symbol: 'awS', aToken: !0 },
          aBasweETH: { tokenIconSymbol: 'weETH', symbol: 'aweETH', aToken: !0 },
          aCelCELO: { tokenIconSymbol: 'CELO', symbol: 'aCELO', aToken: !0 },
          aGnoEURe: { tokenIconSymbol: 'EURe', symbol: 'aEURe', aToken: !0 },
        },
        K = function (e) {
          var o = e.rewardTokenSymbol;
          return Q[o]
            ? W(
                W({}, Q[o]),
                {},
                { rewardTokenAddress: e.rewardTokenAddress, incentiveAPR: e.incentiveAPR }
              )
            : W(W({}, e), {}, { tokenIconSymbol: o, symbol: o, aToken: !1 });
        },
        F = function (e) {
          var o = e.incentives,
            n = e.incentivesNetAPR,
            r = e.symbol,
            t = 'secondary12',
            s = function (e) {
              var o = e.incentiveAPR;
              return (0, D.jsx)(i.Z, {
                sx: { display: 'inline-flex', alignItems: 'center' },
                children:
                  'Infinity' !== o
                    ? (0, D.jsxs)(D.Fragment, {
                        children: [
                          (0, D.jsx)(j.B, { value: +o, percent: !0, variant: t }),
                          (0, D.jsx)(c.Z, {
                            variant: t,
                            sx: { ml: 1 },
                            children: (0, D.jsx)(H.cC, { id: '70wH1Q' }),
                          }),
                        ],
                      })
                    : (0, D.jsxs)(D.Fragment, {
                        children: [
                          (0, D.jsx)(c.Z, { variant: t, children: '\u221e %' }),
                          (0, D.jsx)(c.Z, {
                            variant: t,
                            sx: { ml: 1 },
                            children: (0, D.jsx)(H.cC, { id: '70wH1Q' }),
                          }),
                        ],
                      }),
              });
            };
          return (0, D.jsxs)(i.Z, {
            sx: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            },
            children: [
              (0, D.jsx)(c.Z, {
                variant: 'caption',
                color: 'text.secondary',
                mb: 3,
                children: (0, D.jsx)(H.cC, { id: '+VR63W', values: { symbol: r } }),
              }),
              (0, D.jsxs)(i.Z, {
                sx: { width: '100%' },
                children: [
                  o.map(K).map(function (e) {
                    return (0, D.jsx)(
                      Y.X,
                      {
                        height: 32,
                        caption: (0, D.jsxs)(i.Z, {
                          sx: { display: 'flex', alignItems: 'center', mb: o.length > 1 ? 2 : 0 },
                          children: [
                            (0, D.jsx)(R.T1, {
                              aToken: e.aToken,
                              symbol: e.tokenIconSymbol,
                              sx: { fontSize: '20px', mr: 1 },
                            }),
                            (0, D.jsx)(c.Z, { variant: t, children: e.symbol }),
                          ],
                        }),
                        width: '100%',
                        children: (0, D.jsx)(s, { incentiveAPR: e.incentiveAPR }),
                      },
                      e.rewardTokenAddress
                    );
                  }),
                  o.length > 1 &&
                    (0, D.jsx)(i.Z, {
                      sx: function () {
                        return { pt: 1, mt: 1 };
                      },
                      children: (0, D.jsx)(Y.X, {
                        caption: (0, D.jsx)(H.cC, { id: 'fHcELk' }),
                        height: 32,
                        children: (0, D.jsx)(s, { incentiveAPR: n }),
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        V = n(2734),
        z = function (e) {
          var o = e.meritIncentives,
            n = (0, V.Z)(),
            r = 'secondary12',
            t = K(o);
          return (0, D.jsxs)(i.Z, {
            sx: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'column',
              gap: '10px',
            },
            children: [
              (0, D.jsx)('img', {
                src:
                  'dark' === n.palette.mode
                    ? '/icons/other/aci-white.svg'
                    : '/icons/other/aci-black.svg',
                width: '100px',
                height: '40px',
                alt: '',
              }),
              (0, D.jsx)(c.Z, {
                variant: 'caption',
                color: 'text.primary',
                fontSize: 13,
                children: (0, D.jsx)(H.cC, { id: 'avgETN' }),
              }),
              (0, D.jsxs)(c.Z, {
                variant: 'caption',
                color: 'text.secondary',
                children: [
                  (0, D.jsx)(H.cC, { id: 'bm/mjh' }),
                  ' ',
                  (0, D.jsx)(B.rU, {
                    href: o.customForumLink
                      ? o.customForumLink
                      : 'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898',
                    sx: { textDecoration: 'underline' },
                    variant: 'caption',
                    color: 'text.secondary',
                    children: 'Learn more',
                  }),
                ],
              }),
              o.customMessage
                ? (0, D.jsx)(c.Z, {
                    variant: 'caption',
                    color: 'text.secondary',
                    children: (0, D.jsx)(H.cC, { id: 'J/hVSQ', values: { 0: o.customMessage } }),
                  })
                : null,
              (0, D.jsxs)(c.Z, {
                variant: 'caption',
                color: 'text.primary',
                fontSize: 13,
                fontWeight: '600',
                children: [
                  (0, D.jsx)(H.cC, { id: 'zzzTXS' }),
                  (0, D.jsx)(B.rU, {
                    href: 'https://apps.aavechan.com/merit/'.concat(o.action),
                    sx: { textDecoration: 'underline', ml: 1 },
                    variant: 'caption',
                    children: (0, D.jsx)('span', {
                      style: { fontSize: '13px', fontWeight: '600' },
                      children: 'Aave Chan Initiative interface',
                    }),
                  }),
                  (0, D.jsx)('span', {
                    style: { fontSize: '13px', fontWeight: '600' },
                    children: '.',
                  }),
                ],
              }),
              (0, D.jsx)(i.Z, {
                sx: { width: '100%' },
                children: (0, D.jsx)(Y.X, {
                  height: 32,
                  caption: (0, D.jsxs)(i.Z, {
                    sx: { display: 'flex', alignItems: 'center', mb: 0 },
                    children: [
                      (0, D.jsx)(R.T1, {
                        aToken: t.aToken,
                        symbol: t.tokenIconSymbol,
                        sx: { fontSize: '20px', mr: 1 },
                      }),
                      (0, D.jsx)(c.Z, { variant: r, children: t.symbol }),
                    ],
                  }),
                  width: '100%',
                  children: (0, D.jsxs)(i.Z, {
                    sx: { display: 'inline-flex', alignItems: 'center' },
                    children: [
                      (0, D.jsx)(j.B, { value: +t.incentiveAPR, percent: !0, variant: r }),
                      (0, D.jsx)(c.Z, {
                        variant: r,
                        sx: { ml: 1 },
                        children: (0, D.jsx)(H.cC, { id: '70wH1Q' }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        G = function (e) {
          var o = e.points;
          return (0, D.jsxs)(i.Z, {
            children: [
              (0, D.jsx)(H.cC, {
                id: 'wuMdlk',
                values: { 0: (0, D.jsxs)('b', { children: [o, 'x'] }) },
              }),
              (0, D.jsx)('br', {}),
              (0, D.jsx)(H.cC, { id: '7c6Gy8' }),
              ' ',
              (0, D.jsx)(B.rU, {
                href: 'https://blog.soniclabs.com/sonic-points-simplified-how-to-qualify-for-200-million-s-airdrop/',
                sx: { textDecoration: 'underline' },
                variant: 'caption',
                color: 'text.secondary',
                children: 'here',
              }),
              '.',
              (0, D.jsx)('br', {}),
              (0, D.jsx)('br', {}),
              (0, D.jsx)(H.cC, { id: '+KaZP2' }),
            ],
          });
        },
        X = function (e) {
          var o = e.zkSyncIgniteIncentives,
            n = 'secondary12',
            r = K(o);
          return (0, D.jsxs)(i.Z, {
            sx: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'column',
            },
            children: [
              (0, D.jsx)('img', {
                src: '/icons/other/zksync-ignite.svg',
                width: '100px',
                height: '40px',
                alt: '',
              }),
              (0, D.jsx)(c.Z, {
                variant: 'caption',
                color: 'text.primary',
                mb: 3,
                children: (0, D.jsx)(H.cC, { id: 'ov0+mq' }),
              }),
              (0, D.jsxs)(c.Z, {
                variant: 'caption',
                color: 'text.secondary',
                mb: 3,
                children: [
                  (0, D.jsx)(H.cC, { id: 'Ha/U5f' }),
                  ' ',
                  (0, D.jsx)(B.rU, {
                    href: 'https://zksyncignite.xyz/',
                    sx: { textDecoration: 'underline' },
                    variant: 'caption',
                    color: 'text.secondary',
                    children: 'Learn more',
                  }),
                ],
              }),
              (0, D.jsxs)(c.Z, {
                variant: 'caption',
                color: 'text.secondary',
                mb: 3,
                children: [
                  (0, D.jsx)(H.cC, { id: 'bSruit' }),
                  ' ',
                  (0, D.jsx)(B.rU, {
                    href: 'https://app.zksyncignite.xyz/users/',
                    sx: { textDecoration: 'underline' },
                    variant: 'caption',
                    color: 'text.secondary',
                    children: 'official app',
                  }),
                  '.',
                ],
              }),
              o.customMessage
                ? (0, D.jsx)(c.Z, {
                    variant: 'caption',
                    color: 'text.strong',
                    mb: 3,
                    children: (0, D.jsx)(H.cC, { id: 'J/hVSQ', values: { 0: o.customMessage } }),
                  })
                : null,
              (0, D.jsx)(i.Z, {
                sx: { width: '100%' },
                children: (0, D.jsx)(Y.X, {
                  height: 32,
                  caption: (0, D.jsxs)(i.Z, {
                    sx: { display: 'flex', alignItems: 'center', mb: 0 },
                    children: [
                      (0, D.jsx)(R.T1, {
                        aToken: r.aToken,
                        symbol: r.tokenIconSymbol,
                        sx: { fontSize: '20px', mr: 1 },
                      }),
                      (0, D.jsx)(c.Z, { variant: n, children: r.symbol }),
                    ],
                  }),
                  width: '100%',
                  children: (0, D.jsxs)(i.Z, {
                    sx: { display: 'inline-flex', alignItems: 'center' },
                    children: [
                      (0, D.jsx)(j.B, { value: +r.incentiveAPR, percent: !0, variant: n }),
                      (0, D.jsx)(c.Z, {
                        variant: n,
                        sx: { ml: 1 },
                        children: (0, D.jsx)(H.cC, { id: '70wH1Q' }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        q = function () {
          return (0, D.jsx)(i.Z, {
            sx: {
              p: { xs: '0 4px', xsm: '3.625px 4px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: (0, D.jsx)(c.Z, {
              variant: 'main12',
              color: 'text.secondary',
              children: '\xa0',
            }),
          });
        },
        J = function (e) {
          var o = (0, u.useState)(!1),
            n = o[0],
            r = o[1],
            t = (0, A.Q)(e).data;
          return t
            ? (0, D.jsx)(g.a, {
                tooltipContent: (0, D.jsx)(z, { meritIncentives: t }),
                withoutHover: !0,
                setOpen: r,
                open: n,
                children: (0, D.jsx)(te, { incentives: [t], incentivesNetAPR: +t.incentiveAPR }),
              })
            : null;
        },
        $ = function (e) {
          var o = (0, u.useState)(!1),
            n = o[0],
            r = o[1],
            t = O(e).data;
          return t
            ? (0, D.jsx)(g.a, {
                tooltipContent: (0, D.jsx)(X, { zkSyncIgniteIncentives: t }),
                withoutHover: !0,
                setOpen: r,
                open: n,
                children: (0, D.jsx)(te, { incentives: [t], incentivesNetAPR: +t.incentiveAPR }),
              })
            : null;
        },
        ee = function (e) {
          var o = e.rewardedAsset,
            n = (0, u.useState)(!1),
            r = n[0],
            t = n[1],
            s = T(o);
          return s
            ? (0, D.jsx)(g.a, {
                tooltipContent: (0, D.jsx)(I, { points: s }),
                withoutHover: !0,
                setOpen: t,
                open: r,
                children: (0, D.jsx)(ae, { points: s }),
              })
            : null;
        },
        oe = function (e) {
          var o = (0, u.useState)(!1),
            n = o[0],
            r = o[1],
            t = e.market,
            s = e.protocolAction,
            a = e.symbol,
            i = _(t, a, s);
          return i
            ? (0, D.jsx)(g.a, {
                tooltipContent: (0, D.jsx)(N, { multiplier: i }),
                withoutHover: !0,
                setOpen: r,
                open: n,
                children: (0, D.jsx)(ie, { multiplier: i }),
              })
            : null;
        },
        ne = function (e) {
          var o = e.rewardedAsset,
            n = (0, u.useState)(!1),
            r = n[0],
            t = n[1],
            s = b(o);
          return s
            ? (0, D.jsx)(g.a, {
                tooltipContent: (0, D.jsx)(G, { points: s }),
                withoutHover: !0,
                setOpen: t,
                open: r,
                children: (0, D.jsx)(ce, { points: s }),
              })
            : null;
        },
        re = function (e) {
          var o = e.incentives,
            n = e.symbol,
            r = e.displayBlank,
            t = (0, u.useState)(!1),
            a = t[0],
            i = t[1];
          if (!(o && o.length > 0)) return r ? (0, D.jsx)(q, {}) : null;
          var c = o.some(function (e) {
              return 'Infinity' === e.incentiveAPR;
            }),
            l = c
              ? 'Infinity'
              : o.reduce(function (e, o) {
                  return e + +o.incentiveAPR;
                }, 0),
            d = c ? 'Infinity' : 'Infinity' !== l ? (0, s.hE)(l || 0).toNumber() : 'Infinity';
          return (0, D.jsx)(g.a, {
            tooltipContent: (0, D.jsx)(F, { incentives: o, incentivesNetAPR: d, symbol: n }),
            withoutHover: !0,
            setOpen: i,
            open: a,
            children: (0, D.jsx)(te, { incentives: o, incentivesNetAPR: d, displayBlank: r }),
          });
        },
        te = function (e) {
          var o = e.incentives,
            n = e.incentivesNetAPR,
            r = e.displayBlank,
            t = e.plus,
            s = (0, u.useState)(!1),
            d = s[0],
            p = s[1],
            m = (0, L.Y)(function (e) {
              return e.trackEvent;
            });
          if (!(o && o.length > 0)) return r ? (0, D.jsx)(q, {}) : null;
          if (0 === n) return r ? (0, D.jsx)(q, {}) : null;
          return (0, D.jsxs)(i.Z, {
            sx: function (e) {
              return {
                p: { xs: '0 4px', xsm: '2px 4px' },
                border: '1px solid '.concat(d ? e.palette.action.disabled : e.palette.divider),
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s ease',
                bgcolor: d ? 'action.hover' : 'transparent',
                '&:hover': { bgcolor: 'action.hover', borderColor: 'action.disabled' },
              };
            },
            onClick: function () {
              m(P.h1.VIEW_LM_DETAILS_DASHBOARD, {}), p(!d);
            },
            children: [
              (0, D.jsxs)(i.Z, {
                sx: { mr: 2 },
                children: [
                  t ? '+' : '',
                  ' ',
                  'Infinity' !== n && n < 1e4
                    ? (0, D.jsx)(j.B, {
                        value: n,
                        percent: !0,
                        variant: 'secondary12',
                        color: 'text.secondary',
                      })
                    : 'Infinity' !== n && n > 9999
                      ? (0, D.jsx)(j.B, {
                          value: n,
                          percent: !0,
                          compact: !0,
                          variant: 'secondary12',
                          color: 'text.secondary',
                        })
                      : 'Infinity' === n
                        ? (0, D.jsx)(c.Z, {
                            variant: 'main12',
                            color: 'text.secondary',
                            children: '\u221e',
                          })
                        : void 0,
                ],
              }),
              (0, D.jsx)(i.Z, {
                sx: { display: 'inline-flex' },
                children: (0, D.jsx)(D.Fragment, {
                  children:
                    o.length < 5
                      ? (0, D.jsx)(D.Fragment, {
                          children: o.map(K).map(function (e, o) {
                            return (0, D.jsx)(
                              R.T1,
                              {
                                aToken: e.aToken,
                                symbol: e.tokenIconSymbol,
                                sx: { fontSize: ''.concat(12, 'px'), ml: -1 },
                              },
                              o
                            );
                          }),
                        })
                      : (0, D.jsxs)(D.Fragment, {
                          children: [
                            o
                              .slice(0, 3)
                              .map(K)
                              .map(function (e, o) {
                                return (0, D.jsx)(
                                  R.T1,
                                  {
                                    symbol: e.tokenIconSymbol,
                                    sx: { fontSize: ''.concat(12, 'px'), ml: -1 },
                                  },
                                  o
                                );
                              }),
                            (0, D.jsx)(l.Z, {
                              sx: {
                                fontSize: ''.concat(12, 'px'),
                                borderRadius: '50%',
                                bgcolor: 'common.white',
                                color: 'common.black',
                                ml: -1,
                                zIndex: 5,
                              },
                              children: (0, D.jsx)(a.Z, {}),
                            }),
                          ],
                        }),
                }),
              }),
            ],
          });
        },
        se = function (e) {
          var o = e.value,
            n = e.iconSrc,
            r = (0, u.useState)(!1),
            t = r[0],
            s = r[1],
            a = (0, L.Y)(function (e) {
              return e.trackEvent;
            });
          return (0, D.jsxs)(i.Z, {
            sx: function (e) {
              return {
                p: { xs: '0 4px', xsm: '2px 4px' },
                border: '1px solid '.concat(t ? e.palette.action.disabled : e.palette.divider),
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s ease',
                bgcolor: t ? 'action.hover' : 'transparent',
                '&:hover': { bgcolor: 'action.hover', borderColor: 'action.disabled' },
              };
            },
            onClick: function () {
              a(P.h1.VIEW_LM_DETAILS_DASHBOARD, {}), s(!t);
            },
            children: [
              (0, D.jsx)(i.Z, {
                sx: { mr: 2 },
                children: (0, D.jsx)(c.Z, {
                  component: 'span',
                  variant: 'secondary12',
                  color: 'text.secondary',
                  children: ''.concat(o, 'x'),
                }),
              }),
              (0, D.jsx)(i.Z, {
                sx: { display: 'inline-flex' },
                children: (0, D.jsx)('img', { src: n, width: 12, height: 12, alt: 'icon' }),
              }),
            ],
          });
        },
        ae = function (e) {
          var o = e.points;
          return (0, D.jsx)(se, { value: o, iconSrc: '/icons/other/ethena.svg' });
        },
        ie = function (e) {
          var o = e.multiplier;
          return (0, D.jsx)(se, { value: o, iconSrc: '/icons/other/ether.fi.svg' });
        },
        ce = function (e) {
          var o = e.points;
          return (0, D.jsx)(se, { value: o, iconSrc: '/icons/networks/sonic.svg' });
        };
    },
    99346: function (e, o, n) {
      n.d(o, {
        Q: function () {
          return P;
        },
      });
      var r,
        t,
        s,
        a,
        i = n(50029),
        c = n(59499),
        l = n(87794),
        u = n.n(l),
        d = n(75331),
        p = n(3439),
        m = n(11011),
        T = n(49575),
        E = n(4482),
        S = n(38486),
        y = n(42499),
        _ = n(77682),
        A = n(69235),
        x = n(78551),
        U = n(18376);
      !(function (e) {
        (e.ETHEREUM_STKGHO = 'ethereum-stkgho'),
          (e.ETHEREUM_SUPPLY_PYUSD = 'ethereum-supply-pyusd'),
          (e.ETHEREUM_SUPPLY_ETHX = 'ethereum-supply-ethx'),
          (e.ETHEREUM_SUPPLY_RLUSD = 'ethereum-supply-rlusd'),
          (e.ETHEREUM_PRIME_SUPPLY_ETH = 'ethereum-prime-supply-weth'),
          (e.ETHEREUM_PRIME_SUPPLY_EZETH = 'ethereum-prime-supply-ezeth'),
          (e.SUPPLY_CBBTC_BORROW_USDC = 'ethereum-supply-cbbtc-borrow-usdc'),
          (e.SUPPLY_WBTC_BORROW_USDT = 'ethereum-supply-wbtc-borrow-usdt'),
          (e.ARBITRUM_SUPPLY_ETH = 'arbitrum-supply-weth'),
          (e.ARBITRUM_SUPPLY_WSTETH = 'arbitrum-supply-wsteth'),
          (e.ARBITRUM_SUPPLY_EZETH = 'arbitrum-supply-ezeth'),
          (e.BASE_SUPPLY_CBBTC = 'base-supply-cbbtc'),
          (e.BASE_SUPPLY_USDC = 'base-supply-usdc'),
          (e.BASE_SUPPLY_WSTETH = 'base-supply-wsteth'),
          (e.BASE_SUPPLY_WEETH = 'base-supply-weeth'),
          (e.BASE_SUPPLY_EZETH = 'base-supply-ezeth'),
          (e.BASE_SUPPLY_EURC = 'base-supply-eurc'),
          (e.BASE_SUPPLY_LBTC_BORROW_CBBTC = 'base-supply-lbtc-borrow-cbbtc'),
          (e.BASE_BORROW_EURC = 'base-borrow-eurc'),
          (e.BASE_BORROW_USDC = 'base-borrow-usdc'),
          (e.BASE_BORROW_WSTETH = 'base-borrow-wsteth'),
          (e.BASE_BORROW_GHO = 'base-borrow-gho'),
          (e.AVALANCHE_SUPPLY_BTCB = 'avalanche-supply-btcb'),
          (e.AVALANCHE_SUPPLY_USDC = 'avalanche-supply-usdc'),
          (e.AVALANCHE_SUPPLY_USDT = 'avalanche-supply-usdt'),
          (e.AVALANCHE_SUPPLY_SAVAX = 'avalanche-supply-savax'),
          (e.AVALANCHE_SUPPLY_AUSD = 'avalanche-supply-ausd'),
          (e.SONIC_SUPPLY_USDCE = 'sonic-supply-usdce'),
          (e.GNOSIS_BORROW_EURE = 'gnosis-borrow-eure'),
          (e.CELO_SUPPLY_CELO = 'celo-supply-celo'),
          (e.CELO_SUPPLY_USDT = 'celo-supply-usdt'),
          (e.CELO_SUPPLY_USDC = 'celo-supply-usdc'),
          (e.CELO_SUPPLY_WETH = 'celo-supply-weth'),
          (e.CELO_BORROW_CELO = 'celo-borrow-celo'),
          (e.CELO_BORROW_USDT = 'celo-borrow-usdt'),
          (e.CELO_BORROW_USDC = 'celo-borrow-usdc'),
          (e.CELO_BORROW_WETH = 'celo-borrow-weth');
      })(a || (a = {}));
      var b =
          'Borrowing of some assets may impact the amount of rewards you are eligible for. Please check the forum post for the full eligibility criteria.',
        h =
          'Supplying of some assets may impact the amount of rewards you are eligible for. Please check the forum post for the full eligibility criteria.',
        w =
          'You must supply LBTC and borrow cbBTC, while maintaining a health factor of 1.5 or below, in order to receive merit rewards. Please check the forum post for the full eligibility criteria.',
        v =
          'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/56',
        k =
          'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/70',
        f =
          'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/77',
        C =
          'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/89',
        O =
          'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/91',
        L =
          ((s = {}),
          (0, c.Z)(s, U.el.proto_mainnet_v3, {
            GHO: [
              {
                action: a.ETHEREUM_STKGHO,
                rewardTokenAddress: p.ou.GHO.UNDERLYING,
                rewardTokenSymbol: 'GHO',
                customForumLink:
                  'https://governance.aave.com/t/arfc-merit-a-new-aave-alignment-user-reward-system/16646',
              },
            ],
            cbBTC: [
              {
                action: a.SUPPLY_CBBTC_BORROW_USDC,
                rewardTokenAddress: p.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aEthUSDC',
                protocolAction: d.UQ.supply,
                customMessage:
                  'You must supply cbBTC and borrow USDC in order to receive merit rewards.',
              },
            ],
            USDC: [
              {
                action: a.SUPPLY_CBBTC_BORROW_USDC,
                rewardTokenAddress: p.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aEthUSDC',
                protocolAction: d.UQ.borrow,
                customMessage:
                  'You must supply cbBTC and borrow USDC in order to receive merit rewards.',
              },
            ],
            WBTC: [
              {
                action: a.SUPPLY_WBTC_BORROW_USDT,
                rewardTokenAddress: p.ou.USDT.A_TOKEN,
                rewardTokenSymbol: 'aEthUSDT',
                protocolAction: d.UQ.supply,
                customMessage:
                  'You must supply wBTC and borrow USDT in order to receive merit rewards.',
              },
            ],
            USDT: [
              {
                action: a.SUPPLY_WBTC_BORROW_USDT,
                rewardTokenAddress: p.ou.USDT.A_TOKEN,
                rewardTokenSymbol: 'aEthUSDT',
                protocolAction: d.UQ.borrow,
                customMessage:
                  'You must supply wBTC and borrow USDT in order to receive merit rewards.',
              },
            ],
            PYUSD: [
              {
                action: a.ETHEREUM_SUPPLY_PYUSD,
                rewardTokenAddress: p.ou.PYUSD.A_TOKEN,
                rewardTokenSymbol: 'aEthPYUSD',
                protocolAction: d.UQ.supply,
                customForumLink:
                  'https://governance.aave.com/t/arfc-pyusd-reserve-configuration-update-incentive-campaign/19573',
                customMessage: b,
              },
            ],
            ETHx: [
              {
                action: a.ETHEREUM_SUPPLY_ETHX,
                rewardTokenAddress: '0x30D20208d987713f46DFD34EF128Bb16C404D10f',
                rewardTokenSymbol: 'SD',
                protocolAction: d.UQ.supply,
              },
            ],
            RLUSD: [
              {
                action: a.ETHEREUM_SUPPLY_RLUSD,
                rewardTokenAddress: p.ou.RLUSD.A_TOKEN,
                rewardTokenSymbol: 'aEthRLUSD',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink:
                  'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/85',
              },
            ],
          }),
          (0, c.Z)(s, U.el.proto_lido_v3, {
            ETH: [
              {
                action: a.ETHEREUM_PRIME_SUPPLY_ETH,
                rewardTokenAddress: m.ou.WETH.A_TOKEN,
                rewardTokenSymbol: 'aEthLidoWETH',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: v,
              },
            ],
            WETH: [
              {
                action: a.ETHEREUM_PRIME_SUPPLY_ETH,
                rewardTokenAddress: m.ou.WETH.A_TOKEN,
                rewardTokenSymbol: 'aEthLidoWETH',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: v,
              },
            ],
            ezETH: [
              {
                action: a.ETHEREUM_PRIME_SUPPLY_EZETH,
                rewardTokenAddress: '0x3B50805453023a91a8bf641e279401a0b23FA6F9',
                rewardTokenSymbol: 'REZ',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: v,
              },
            ],
          }),
          (0, c.Z)(s, U.el.proto_arbitrum_v3, {
            ETH: [
              {
                action: a.ARBITRUM_SUPPLY_ETH,
                rewardTokenAddress: T.ou.WETH.A_TOKEN,
                rewardTokenSymbol: 'aArbWETH',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: v,
              },
            ],
            WETH: [
              {
                action: a.ARBITRUM_SUPPLY_ETH,
                rewardTokenAddress: T.ou.WETH.A_TOKEN,
                rewardTokenSymbol: 'aArbWETH',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: v,
              },
            ],
            wstETH: [
              {
                action: a.ARBITRUM_SUPPLY_WSTETH,
                rewardTokenAddress: p.ou.wstETH.UNDERLYING,
                rewardTokenSymbol: 'aArbwstETH',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: v,
              },
            ],
            ezETH: [
              {
                action: a.ARBITRUM_SUPPLY_EZETH,
                rewardTokenAddress: '0x3B50805453023a91a8bf641e279401a0b23FA6F9',
                rewardTokenSymbol: 'REZ',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: v,
              },
            ],
          }),
          (0, c.Z)(s, U.el.proto_base_v3, {
            cbBTC: [
              {
                action: a.BASE_SUPPLY_CBBTC,
                rewardTokenAddress: E.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aBasUSDC',
                protocolAction: d.UQ.supply,
              },
              {
                action: a.BASE_SUPPLY_LBTC_BORROW_CBBTC,
                rewardTokenAddress: E.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aBasUSDC',
                protocolAction: d.UQ.borrow,
                customMessage: w,
                customForumLink: O,
              },
            ],
            USDC: [
              {
                action: a.BASE_SUPPLY_USDC,
                rewardTokenAddress: E.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aBasUSDC',
                protocolAction: d.UQ.supply,
              },
              {
                action: a.BASE_BORROW_USDC,
                rewardTokenAddress: E.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aBasUSDC',
                protocolAction: d.UQ.borrow,
              },
            ],
            wstETH: [
              {
                action: a.BASE_SUPPLY_WSTETH,
                rewardTokenAddress: E.ou.wstETH.A_TOKEN,
                rewardTokenSymbol: 'aBaswstETH',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: v,
              },
              {
                action: a.BASE_BORROW_WSTETH,
                rewardTokenAddress: E.ou.wstETH.A_TOKEN,
                rewardTokenSymbol: 'aBaswstETH',
                protocolAction: d.UQ.borrow,
                customMessage: h,
                customForumLink: k,
              },
            ],
            ezETH: [
              {
                action: a.BASE_SUPPLY_EZETH,
                rewardTokenAddress: '0x3B50805453023a91a8bf641e279401a0b23FA6F9',
                rewardTokenSymbol: 'REZ',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: v,
              },
            ],
            weETH: [
              {
                action: a.BASE_SUPPLY_WEETH,
                rewardTokenAddress: E.ou.weETH.A_TOKEN,
                rewardTokenSymbol: 'aBasweETH',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: k,
              },
            ],
            EURC: [
              {
                action: a.BASE_SUPPLY_EURC,
                rewardTokenAddress: E.ou.EURC.A_TOKEN,
                rewardTokenSymbol: 'aBasEURC',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: f,
              },
              {
                action: a.BASE_BORROW_EURC,
                rewardTokenAddress: E.ou.EURC.A_TOKEN,
                rewardTokenSymbol: 'aBasEURC',
                protocolAction: d.UQ.borrow,
                customMessage: h,
                customForumLink: f,
              },
            ],
            LBTC: [
              {
                action: a.BASE_SUPPLY_LBTC_BORROW_CBBTC,
                rewardTokenAddress: E.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aBasUSDC',
                protocolAction: d.UQ.supply,
                customMessage: w,
                customForumLink: O,
              },
            ],
            GHO: [
              {
                action: a.BASE_BORROW_GHO,
                rewardTokenAddress: E.ou.GHO.A_TOKEN,
                rewardTokenSymbol: 'aBasGHO',
                protocolAction: d.UQ.borrow,
                customMessage: h,
                customForumLink:
                  'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/94',
              },
            ],
          }),
          (0, c.Z)(
            s,
            U.el.proto_avalanche_v3,
            ((r = {}),
            (0, c.Z)(r, 'BTC.b', [
              {
                action: a.AVALANCHE_SUPPLY_BTCB,
                rewardTokenAddress: S.ou.BTCb.A_TOKEN,
                rewardTokenSymbol: 'aAvaSAVAX',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: C,
              },
            ]),
            (0, c.Z)(r, 'USDC', [
              {
                action: a.AVALANCHE_SUPPLY_USDC,
                rewardTokenAddress: S.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aAvaSAVAX',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: C,
              },
            ]),
            (0, c.Z)(r, 'USDt', [
              {
                action: a.AVALANCHE_SUPPLY_USDT,
                rewardTokenAddress: S.ou.USDt.A_TOKEN,
                rewardTokenSymbol: 'aAvaSAVAX',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: C,
              },
            ]),
            (0, c.Z)(r, 'sAVAX', [
              {
                action: a.AVALANCHE_SUPPLY_SAVAX,
                rewardTokenAddress: S.ou.sAVAX.A_TOKEN,
                rewardTokenSymbol: 'aAvaSAVAX',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink: C,
              },
            ]),
            (0, c.Z)(r, 'AUSD', [
              {
                action: a.AVALANCHE_SUPPLY_AUSD,
                rewardTokenAddress: S.ou.AUSD.A_TOKEN,
                rewardTokenSymbol: 'aAvaSAVAX',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink:
                  'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/88',
              },
            ]),
            r)
          ),
          (0, c.Z)(
            s,
            U.el.proto_sonic_v3,
            (0, c.Z)({}, 'USDC', [
              {
                action: a.SONIC_SUPPLY_USDCE,
                rewardTokenAddress: y.ou.USDCe.A_TOKEN,
                rewardTokenSymbol: 'aSonwS',
                protocolAction: d.UQ.supply,
                customMessage: b,
                customForumLink:
                  'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/61',
              },
            ])
          ),
          (0, c.Z)(
            s,
            U.el.proto_gnosis_v3,
            (0, c.Z)({}, 'EURe', [
              {
                action: a.GNOSIS_BORROW_EURE,
                rewardTokenAddress: _.ou.EURe.V_TOKEN,
                rewardTokenSymbol: 'aGnoEURe',
                protocolAction: d.UQ.borrow,
                customMessage: b,
                customForumLink:
                  'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/83',
              },
            ])
          ),
          (0, c.Z)(
            s,
            U.el.proto_celo_v3,
            ((t = {
              CELO: [
                {
                  action: a.CELO_SUPPLY_CELO,
                  rewardTokenAddress: A.ou.CELO.A_TOKEN,
                  rewardTokenSymbol: 'aCelCELO',
                  protocolAction: d.UQ.supply,
                  customMessage: b,
                },
                {
                  action: a.CELO_BORROW_CELO,
                  rewardTokenAddress: A.ou.CELO.A_TOKEN,
                  rewardTokenSymbol: 'aCelCELO',
                  protocolAction: d.UQ.borrow,
                  customMessage: h,
                },
              ],
            }),
            (0, c.Z)(t, 'USD\u20ae', [
              {
                action: a.CELO_SUPPLY_USDT,
                rewardTokenAddress: A.ou.CELO.A_TOKEN,
                rewardTokenSymbol: 'aCelCELO',
                protocolAction: d.UQ.supply,
                customMessage: b,
              },
              {
                action: a.CELO_BORROW_USDT,
                rewardTokenAddress: A.ou.CELO.A_TOKEN,
                rewardTokenSymbol: 'aCelCELO',
                protocolAction: d.UQ.borrow,
                customMessage: h,
              },
            ]),
            (0, c.Z)(t, 'USDC', [
              {
                action: a.CELO_SUPPLY_USDC,
                rewardTokenAddress: A.ou.CELO.A_TOKEN,
                rewardTokenSymbol: 'aCelCELO',
                protocolAction: d.UQ.supply,
                customMessage: b,
              },
              {
                action: a.CELO_BORROW_USDC,
                rewardTokenAddress: A.ou.CELO.A_TOKEN,
                rewardTokenSymbol: 'aCelCELO',
                protocolAction: d.UQ.borrow,
                customMessage: h,
              },
            ]),
            (0, c.Z)(t, 'WETH', [
              {
                action: a.CELO_SUPPLY_WETH,
                rewardTokenAddress: A.ou.CELO.A_TOKEN,
                rewardTokenSymbol: 'aCelCELO',
                protocolAction: d.UQ.supply,
                customMessage: b,
              },
              {
                action: a.CELO_BORROW_WETH,
                rewardTokenAddress: A.ou.CELO.A_TOKEN,
                rewardTokenSymbol: 'aCelCELO',
                protocolAction: d.UQ.borrow,
                customMessage: h,
              },
            ]),
            t)
          ),
          s),
        P = function (e) {
          var o = e.symbol,
            n = e.market,
            r = e.protocolAction;
          return (0, x.a)({
            queryFn: (function () {
              var e = (0, i.Z)(
                u().mark(function e() {
                  var o, n, r;
                  return u().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), fetch('https://apps.aavechan.com/api/merit/aprs');
                        case 2:
                          return (o = e.sent), (e.next = 5), o.json();
                        case 5:
                          return (n = e.sent), (r = n.currentAPR), e.abrupt('return', r);
                        case 8:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            queryKey: ['meritIncentives'],
            staleTime: 3e5,
            select: function (e) {
              var t = (function (e, o) {
                var n;
                return null === (n = L[e]) || void 0 === n ? void 0 : n[o];
              })(n, o);
              if (!t) return null;
              var s = t.find(function (e) {
                return e.protocolAction === r;
              });
              if (!s) return null;
              var a = e.actionsAPR[s.action];
              return a
                ? {
                    incentiveAPR: (a / 100).toString(),
                    rewardTokenAddress: s.rewardTokenAddress,
                    rewardTokenSymbol: s.rewardTokenSymbol,
                    action: s.action,
                    customMessage: s.customMessage,
                    customForumLink: s.customForumLink,
                  }
                : null;
            },
          });
        };
    },
  },
]);
