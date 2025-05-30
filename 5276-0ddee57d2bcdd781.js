'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5276],
  {
    5276: function (e, o, n) {
      n.d(o, {
        GV: function () {
          return xe;
        },
        xY: function () {
          return ye;
        },
        MB: function () {
          return Ae;
        },
        ET: function () {
          return Te;
        },
        DF: function () {
          return Ee;
        },
        OP: function () {
          return Se;
        },
      });
      var t,
        r,
        s,
        a = n(1279),
        i = n(80059),
        c = n(80822),
        l = n(15861),
        u = n(53219),
        p = n(67294),
        d = n(3439),
        m = n(11011),
        T = new Map([
          [d.ou.USDe.A_TOKEN, 25],
          [d.ou.sUSDe.A_TOKEN, 5],
          [m.ou.sUSDe.A_TOKEN, 5],
          [d.ou.GHO.V_TOKEN, 5],
          [m.ou.GHO.V_TOKEN, 5],
          [d.ou.PT_eUSDE_29MAY2025.A_TOKEN, 2],
          [d.ou.PT_sUSDE_31JUL2025.A_TOKEN, 1],
        ]),
        S = function (e) {
          var o;
          if (e) return (o = e), T.get(o);
        },
        x = n(75331),
        y = n(25074),
        E = new Map([
          [''.concat(y.e.proto_mainnet_v3, '-').concat(x.UQ.supply, '-weETH'), 3],
          [''.concat(y.e.proto_mainnet_v3, '-').concat(x.UQ.supply, '-eBTC'), 3],
          [''.concat(y.e.proto_etherfi_v3, '-').concat(x.UQ.supply, '-weETH'), 3],
          [''.concat(y.e.proto_lido_v3, '-').concat(x.UQ.supply, '-weETH'), 3],
          [''.concat(y.e.proto_arbitrum_v3, '-').concat(x.UQ.supply, '-weETH'), 3],
          [''.concat(y.e.proto_base_v3, '-').concat(x.UQ.supply, '-weETH'), 3],
          [''.concat(y.e.proto_scroll_v3, '-').concat(x.UQ.supply, '-weETH'), 3],
          [''.concat(y.e.proto_zksync_v3, '-').concat(x.UQ.supply, '-weETH'), 3],
          [''.concat(y.e.proto_linea_v3, '-').concat(x.UQ.supply, '-weETH'), 3],
        ]),
        A = function (e, o, n) {
          if (e && n && o)
            return (function (e, o, n) {
              return E.get(''.concat(e, '-').concat(o, '-').concat(n));
            })(e, n, o);
        },
        h = n(50029),
        U = n(59499),
        b = n(87794),
        _ = n.n(b),
        v = n(49575),
        f = n(4482),
        w = n(38486),
        k = n(42499),
        g = n(77682),
        P = n(78551);
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
          (e.GNOSIS_BORROW_EURE = 'gnosis-borrow-eure');
      })(s || (s = {}));
      var j,
        C,
        R =
          'Borrowing of some assets may impact the amount of rewards you are eligible for. Please check the forum post for the full eligibility criteria.',
        O =
          'Supplying of some assets may impact the amount of rewards you are eligible for. Please check the forum post for the full eligibility criteria.',
        H =
          'You must supply LBTC and borrow cbBTC, while maintaining a health factor of 1.5 or below, in order to receive merit rewards. Please check the forum post for the full eligibility criteria.',
        L =
          'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/56',
        B =
          'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/70',
        D =
          'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/77',
        I =
          'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/89',
        Z =
          'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/91',
        N =
          ((r = {}),
          (0, U.Z)(r, y.e.proto_mainnet_v3, {
            GHO: [
              {
                action: s.ETHEREUM_STKGHO,
                rewardTokenAddress: d.ou.GHO.UNDERLYING,
                rewardTokenSymbol: 'GHO',
                customForumLink:
                  'https://governance.aave.com/t/arfc-merit-a-new-aave-alignment-user-reward-system/16646',
              },
            ],
            cbBTC: [
              {
                action: s.SUPPLY_CBBTC_BORROW_USDC,
                rewardTokenAddress: d.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aEthUSDC',
                protocolAction: x.UQ.supply,
                customMessage:
                  'You must supply cbBTC and borrow USDC in order to receive merit rewards.',
              },
            ],
            USDC: [
              {
                action: s.SUPPLY_CBBTC_BORROW_USDC,
                rewardTokenAddress: d.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aEthUSDC',
                protocolAction: x.UQ.borrow,
                customMessage:
                  'You must supply cbBTC and borrow USDC in order to receive merit rewards.',
              },
            ],
            WBTC: [
              {
                action: s.SUPPLY_WBTC_BORROW_USDT,
                rewardTokenAddress: d.ou.USDT.A_TOKEN,
                rewardTokenSymbol: 'aEthUSDT',
                protocolAction: x.UQ.supply,
                customMessage:
                  'You must supply wBTC and borrow USDT in order to receive merit rewards.',
              },
            ],
            USDT: [
              {
                action: s.SUPPLY_WBTC_BORROW_USDT,
                rewardTokenAddress: d.ou.USDT.A_TOKEN,
                rewardTokenSymbol: 'aEthUSDT',
                protocolAction: x.UQ.borrow,
                customMessage:
                  'You must supply wBTC and borrow USDT in order to receive merit rewards.',
              },
            ],
            PYUSD: [
              {
                action: s.ETHEREUM_SUPPLY_PYUSD,
                rewardTokenAddress: d.ou.PYUSD.A_TOKEN,
                rewardTokenSymbol: 'aEthPYUSD',
                protocolAction: x.UQ.supply,
                customForumLink:
                  'https://governance.aave.com/t/arfc-pyusd-reserve-configuration-update-incentive-campaign/19573',
                customMessage: R,
              },
            ],
            ETHx: [
              {
                action: s.ETHEREUM_SUPPLY_ETHX,
                rewardTokenAddress: '0x30D20208d987713f46DFD34EF128Bb16C404D10f',
                rewardTokenSymbol: 'SD',
                protocolAction: x.UQ.supply,
              },
            ],
            RLUSD: [
              {
                action: s.ETHEREUM_SUPPLY_RLUSD,
                rewardTokenAddress: d.ou.RLUSD.A_TOKEN,
                rewardTokenSymbol: 'aEthRLUSD',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink:
                  'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/85',
              },
            ],
          }),
          (0, U.Z)(r, y.e.proto_lido_v3, {
            ETH: [
              {
                action: s.ETHEREUM_PRIME_SUPPLY_ETH,
                rewardTokenAddress: m.ou.WETH.A_TOKEN,
                rewardTokenSymbol: 'aEthLidoWETH',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: L,
              },
            ],
            WETH: [
              {
                action: s.ETHEREUM_PRIME_SUPPLY_ETH,
                rewardTokenAddress: m.ou.WETH.A_TOKEN,
                rewardTokenSymbol: 'aEthLidoWETH',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: L,
              },
            ],
            ezETH: [
              {
                action: s.ETHEREUM_PRIME_SUPPLY_EZETH,
                rewardTokenAddress: '0x3B50805453023a91a8bf641e279401a0b23FA6F9',
                rewardTokenSymbol: 'REZ',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: L,
              },
            ],
          }),
          (0, U.Z)(r, y.e.proto_arbitrum_v3, {
            ETH: [
              {
                action: s.ARBITRUM_SUPPLY_ETH,
                rewardTokenAddress: v.ou.WETH.A_TOKEN,
                rewardTokenSymbol: 'aArbWETH',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: L,
              },
            ],
            WETH: [
              {
                action: s.ARBITRUM_SUPPLY_ETH,
                rewardTokenAddress: v.ou.WETH.A_TOKEN,
                rewardTokenSymbol: 'aArbWETH',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: L,
              },
            ],
            wstETH: [
              {
                action: s.ARBITRUM_SUPPLY_WSTETH,
                rewardTokenAddress: d.ou.wstETH.UNDERLYING,
                rewardTokenSymbol: 'aArbwstETH',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: L,
              },
            ],
            ezETH: [
              {
                action: s.ARBITRUM_SUPPLY_EZETH,
                rewardTokenAddress: '0x3B50805453023a91a8bf641e279401a0b23FA6F9',
                rewardTokenSymbol: 'REZ',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: L,
              },
            ],
          }),
          (0, U.Z)(r, y.e.proto_base_v3, {
            cbBTC: [
              {
                action: s.BASE_SUPPLY_CBBTC,
                rewardTokenAddress: f.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aBasUSDC',
                protocolAction: x.UQ.supply,
              },
              {
                action: s.BASE_SUPPLY_LBTC_BORROW_CBBTC,
                rewardTokenAddress: f.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aBasUSDC',
                protocolAction: x.UQ.borrow,
                customMessage: H,
                customForumLink: Z,
              },
            ],
            USDC: [
              {
                action: s.BASE_SUPPLY_USDC,
                rewardTokenAddress: f.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aBasUSDC',
                protocolAction: x.UQ.supply,
              },
              {
                action: s.BASE_BORROW_USDC,
                rewardTokenAddress: f.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aBasUSDC',
                protocolAction: x.UQ.borrow,
              },
            ],
            wstETH: [
              {
                action: s.BASE_SUPPLY_WSTETH,
                rewardTokenAddress: f.ou.wstETH.A_TOKEN,
                rewardTokenSymbol: 'aBaswstETH',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: L,
              },
              {
                action: s.BASE_BORROW_WSTETH,
                rewardTokenAddress: f.ou.wstETH.A_TOKEN,
                rewardTokenSymbol: 'aBaswstETH',
                protocolAction: x.UQ.borrow,
                customMessage: O,
                customForumLink: B,
              },
            ],
            ezETH: [
              {
                action: s.BASE_SUPPLY_EZETH,
                rewardTokenAddress: '0x3B50805453023a91a8bf641e279401a0b23FA6F9',
                rewardTokenSymbol: 'REZ',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: L,
              },
            ],
            weETH: [
              {
                action: s.BASE_SUPPLY_WEETH,
                rewardTokenAddress: f.ou.weETH.A_TOKEN,
                rewardTokenSymbol: 'aBasweETH',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: B,
              },
            ],
            EURC: [
              {
                action: s.BASE_SUPPLY_EURC,
                rewardTokenAddress: f.ou.EURC.A_TOKEN,
                rewardTokenSymbol: 'aBasEURC',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: D,
              },
              {
                action: s.BASE_BORROW_EURC,
                rewardTokenAddress: f.ou.EURC.A_TOKEN,
                rewardTokenSymbol: 'aBasEURC',
                protocolAction: x.UQ.borrow,
                customMessage: O,
                customForumLink: D,
              },
            ],
            LBTC: [
              {
                action: s.BASE_SUPPLY_LBTC_BORROW_CBBTC,
                rewardTokenAddress: f.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aBasUSDC',
                protocolAction: x.UQ.supply,
                customMessage: H,
                customForumLink: Z,
              },
            ],
            GHO: [
              {
                action: s.BASE_BORROW_GHO,
                rewardTokenAddress: f.ou.GHO.A_TOKEN,
                rewardTokenSymbol: 'aBasGHO',
                protocolAction: x.UQ.borrow,
                customMessage: O,
                customForumLink:
                  'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/94',
              },
            ],
          }),
          (0, U.Z)(
            r,
            y.e.proto_avalanche_v3,
            ((t = {}),
            (0, U.Z)(t, 'BTC.b', [
              {
                action: s.AVALANCHE_SUPPLY_BTCB,
                rewardTokenAddress: w.ou.BTCb.A_TOKEN,
                rewardTokenSymbol: 'aAvaSAVAX',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: I,
              },
            ]),
            (0, U.Z)(t, 'USDC', [
              {
                action: s.AVALANCHE_SUPPLY_USDC,
                rewardTokenAddress: w.ou.USDC.A_TOKEN,
                rewardTokenSymbol: 'aAvaSAVAX',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: I,
              },
            ]),
            (0, U.Z)(t, 'USDt', [
              {
                action: s.AVALANCHE_SUPPLY_USDT,
                rewardTokenAddress: w.ou.USDt.A_TOKEN,
                rewardTokenSymbol: 'aAvaSAVAX',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: I,
              },
            ]),
            (0, U.Z)(t, 'sAVAX', [
              {
                action: s.AVALANCHE_SUPPLY_SAVAX,
                rewardTokenAddress: w.ou.sAVAX.A_TOKEN,
                rewardTokenSymbol: 'aAvaSAVAX',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink: I,
              },
            ]),
            (0, U.Z)(t, 'AUSD', [
              {
                action: s.AVALANCHE_SUPPLY_AUSD,
                rewardTokenAddress: w.ou.AUSD.A_TOKEN,
                rewardTokenSymbol: 'aAvaSAVAX',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink:
                  'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/88',
              },
            ]),
            t)
          ),
          (0, U.Z)(
            r,
            y.e.proto_sonic_v3,
            (0, U.Z)({}, 'USDC', [
              {
                action: s.SONIC_SUPPLY_USDCE,
                rewardTokenAddress: k.ou.USDCe.A_TOKEN,
                rewardTokenSymbol: 'aSonwS',
                protocolAction: x.UQ.supply,
                customMessage: R,
                customForumLink:
                  'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/61',
              },
            ])
          ),
          (0, U.Z)(
            r,
            y.e.proto_gnosis_v3,
            (0, U.Z)({}, 'EURe', [
              {
                action: s.GNOSIS_BORROW_EURE,
                rewardTokenAddress: g.ou.EURe.V_TOKEN,
                rewardTokenSymbol: 'aGnoEURe',
                protocolAction: x.UQ.borrow,
                customMessage: R,
                customForumLink:
                  'https://governance.aave.com/t/arfc-set-aci-as-emission-manager-for-liquidity-mining-programs/17898/83',
              },
            ])
          ),
          r),
        Y = function (e) {
          var o = e.symbol,
            n = e.market,
            t = e.protocolAction;
          return (0, P.a)({
            queryFn: (function () {
              var e = (0, h.Z)(
                _().mark(function e() {
                  var o, n, t;
                  return _().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), fetch('https://apps.aavechan.com/api/merit/aprs');
                        case 2:
                          return (o = e.sent), (e.next = 5), o.json();
                        case 5:
                          return (n = e.sent), (t = n.currentAPR), e.abrupt('return', t);
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
              var r = (function (e, o) {
                var n;
                return null === (n = N[e]) || void 0 === n ? void 0 : n[o];
              })(n, o);
              if (!r) return null;
              var s = r.find(function (e) {
                return e.protocolAction === t;
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
        },
        M = new Map([
          [k.ou.WETH.A_TOKEN, 4],
          [k.ou.USDCe.A_TOKEN, 12],
          [k.ou.wS.A_TOKEN, 8],
          [k.ou.stS.A_TOKEN, 8],
        ]),
        W = function (e) {
          var o;
          if (e) return (o = e), M.get(o);
        },
        Q = n(63607);
      !(function (e) {
        (e.LEND = 'LEND'), (e.BORROW = 'BORROW');
      })(j || (j = {})),
        (function (e) {
          (e.LIVE = 'LIVE'), (e.PAST = 'PAST'), (e.UPCOMING = 'UPCOMING');
        })(C || (C = {}));
      var K = Q.ou.ZK.UNDERLYING,
        F = function (e) {
          var o = e.market,
            n = e.rewardedAsset,
            t = e.protocolAction;
          return (0, P.a)({
            queryFn: (function () {
              var e = (0, h.Z)(
                _().mark(function e() {
                  var n, t;
                  return _().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (o !== y.e.proto_zksync_v3) {
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
                          return (t = e.sent), e.abrupt('return', t);
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
                  t &&
                  (function (e, o) {
                    switch (e) {
                      case j.LEND:
                        return o === x.UQ.supply;
                      case j.BORROW:
                        return o === x.UQ.borrow;
                      default:
                        return !1;
                    }
                  })(e.action, t)
                );
              });
              if (0 === o.length) return null;
              var r = o[0];
              return r.status !== C.LIVE
                ? null
                : {
                    incentiveAPR: (r.apr / 100).toString(),
                    rewardTokenAddress: K,
                    rewardTokenSymbol: 'ZK',
                  };
            },
          });
        },
        V = n(3062),
        z = n(65361),
        G = n(2127),
        X = n(32867),
        q = n(45640),
        J = n(57499),
        $ = n(38577),
        ee = n(85893),
        oe = function (e) {
          var o = e.points;
          return (0, ee.jsxs)(c.Z, {
            children: [
              (0, ee.jsx)(J.cC, {
                id: '11xQTX',
                values: { 0: (0, ee.jsxs)('b', { children: [o, 'x'] }) },
              }),
              (0, ee.jsx)('br', {}),
              (0, ee.jsx)(J.cC, { id: 'L2tU22' }),
              ' ',
              (0, ee.jsx)($.rU, {
                href: 'https://app.ethena.fi/join',
                sx: { textDecoration: 'underline' },
                variant: 'caption',
                color: 'text.secondary',
                children: 'here',
              }),
              '.',
              (0, ee.jsx)('br', {}),
              (0, ee.jsx)('br', {}),
              (0, ee.jsx)(J.cC, { id: '+KaZP2' }),
            ],
          });
        },
        ne = function (e) {
          var o = e.multiplier;
          return (0, ee.jsxs)(c.Z, {
            children: [
              (0, ee.jsx)(J.cC, {
                id: '2S7oCr',
                values: { multiplier: o },
                components: { 0: (0, ee.jsx)('b', {}) },
              }),
              (0, ee.jsx)('br', {}),
              (0, ee.jsx)(J.cC, { id: 'o7Yloh' }),
              ' ',
              (0, ee.jsx)($.rU, {
                href: 'https://etherfi.gitbook.io/etherfi/getting-started/loyalty-points',
                sx: { textDecoration: 'underline' },
                variant: 'caption',
                color: 'text.secondary',
                children: 'here',
              }),
              '.',
              (0, ee.jsx)('br', {}),
              (0, ee.jsx)('br', {}),
              (0, ee.jsx)(J.cC, { id: '+KaZP2' }),
            ],
          });
        },
        te = n(20986);
      function re(e, o) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          o &&
            (t = t.filter(function (o) {
              return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function se(e) {
        for (var o = 1; o < arguments.length; o++) {
          var n = null != arguments[o] ? arguments[o] : {};
          o % 2
            ? re(Object(n), !0).forEach(function (o) {
                (0, U.Z)(e, o, n[o]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : re(Object(n)).forEach(function (o) {
                  Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
                });
        }
        return e;
      }
      var ae = {
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
          aGnoEURe: { tokenIconSymbol: 'EURe', symbol: 'aEURe', aToken: !0 },
        },
        ie = function (e) {
          var o = e.rewardTokenSymbol;
          return ae[o]
            ? se(
                se({}, ae[o]),
                {},
                { rewardTokenAddress: e.rewardTokenAddress, incentiveAPR: e.incentiveAPR }
              )
            : se(se({}, e), {}, { tokenIconSymbol: o, symbol: o, aToken: !1 });
        },
        ce = function (e) {
          var o = e.incentives,
            n = e.incentivesNetAPR,
            t = e.symbol,
            r = 'secondary12',
            s = function (e) {
              var o = e.incentiveAPR;
              return (0, ee.jsx)(c.Z, {
                sx: { display: 'inline-flex', alignItems: 'center' },
                children:
                  'Infinity' !== o
                    ? (0, ee.jsxs)(ee.Fragment, {
                        children: [
                          (0, ee.jsx)(X.B, { value: +o, percent: !0, variant: r }),
                          (0, ee.jsx)(l.Z, {
                            variant: r,
                            sx: { ml: 1 },
                            children: (0, ee.jsx)(J.cC, { id: '70wH1Q' }),
                          }),
                        ],
                      })
                    : (0, ee.jsxs)(ee.Fragment, {
                        children: [
                          (0, ee.jsx)(l.Z, { variant: r, children: '\u221e %' }),
                          (0, ee.jsx)(l.Z, {
                            variant: r,
                            sx: { ml: 1 },
                            children: (0, ee.jsx)(J.cC, { id: '70wH1Q' }),
                          }),
                        ],
                      }),
              });
            };
          return (0, ee.jsxs)(c.Z, {
            sx: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            },
            children: [
              (0, ee.jsx)(l.Z, {
                variant: 'caption',
                color: 'text.secondary',
                mb: 3,
                children: (0, ee.jsx)(J.cC, { id: '+VR63W', values: { symbol: t } }),
              }),
              (0, ee.jsxs)(c.Z, {
                sx: { width: '100%' },
                children: [
                  o.map(ie).map(function (e) {
                    return (0, ee.jsx)(
                      te.X,
                      {
                        height: 32,
                        caption: (0, ee.jsxs)(c.Z, {
                          sx: { display: 'flex', alignItems: 'center', mb: o.length > 1 ? 2 : 0 },
                          children: [
                            (0, ee.jsx)(q.T1, {
                              aToken: e.aToken,
                              symbol: e.tokenIconSymbol,
                              sx: { fontSize: '20px', mr: 1 },
                            }),
                            (0, ee.jsx)(l.Z, { variant: r, children: e.symbol }),
                          ],
                        }),
                        width: '100%',
                        children: (0, ee.jsx)(s, { incentiveAPR: e.incentiveAPR }),
                      },
                      e.rewardTokenAddress
                    );
                  }),
                  o.length > 1 &&
                    (0, ee.jsx)(c.Z, {
                      sx: function () {
                        return { pt: 1, mt: 1 };
                      },
                      children: (0, ee.jsx)(te.X, {
                        caption: (0, ee.jsx)(J.cC, { id: 'fHcELk' }),
                        height: 32,
                        children: (0, ee.jsx)(s, { incentiveAPR: n }),
                      }),
                    }),
                ],
              }),
            ],
          });
        },
        le = n(2734),
        ue = function (e) {
          var o = e.meritIncentives,
            n = (0, le.Z)(),
            t = 'secondary12',
            r = ie(o);
          return (0, ee.jsxs)(c.Z, {
            sx: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'column',
              gap: '10px',
            },
            children: [
              (0, ee.jsx)('img', {
                src:
                  'dark' === n.palette.mode
                    ? '/icons/other/aci-white.svg'
                    : '/icons/other/aci-black.svg',
                width: '100px',
                height: '40px',
                alt: '',
              }),
              (0, ee.jsx)(l.Z, {
                variant: 'caption',
                color: 'text.primary',
                fontSize: 13,
                children: (0, ee.jsx)(J.cC, { id: 'avgETN' }),
              }),
              (0, ee.jsxs)(l.Z, {
                variant: 'caption',
                color: 'text.secondary',
                children: [
                  (0, ee.jsx)(J.cC, { id: 'bm/mjh' }),
                  ' ',
                  (0, ee.jsx)($.rU, {
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
                ? (0, ee.jsx)(l.Z, {
                    variant: 'caption',
                    color: 'text.secondary',
                    children: (0, ee.jsx)(J.cC, { id: 'J/hVSQ', values: { 0: o.customMessage } }),
                  })
                : null,
              (0, ee.jsxs)(l.Z, {
                variant: 'caption',
                color: 'text.primary',
                fontSize: 13,
                fontWeight: '600',
                children: [
                  (0, ee.jsx)(J.cC, { id: 'zzzTXS' }),
                  (0, ee.jsx)($.rU, {
                    href: 'https://apps.aavechan.com/merit/'.concat(o.action),
                    sx: { textDecoration: 'underline', ml: 1 },
                    variant: 'caption',
                    children: (0, ee.jsx)('span', {
                      style: { fontSize: '13px', fontWeight: '600' },
                      children: 'Aave Chan Initiative interface',
                    }),
                  }),
                  (0, ee.jsx)('span', {
                    style: { fontSize: '13px', fontWeight: '600' },
                    children: '.',
                  }),
                ],
              }),
              (0, ee.jsx)(c.Z, {
                sx: { width: '100%' },
                children: (0, ee.jsx)(te.X, {
                  height: 32,
                  caption: (0, ee.jsxs)(c.Z, {
                    sx: { display: 'flex', alignItems: 'center', mb: 0 },
                    children: [
                      (0, ee.jsx)(q.T1, {
                        aToken: r.aToken,
                        symbol: r.tokenIconSymbol,
                        sx: { fontSize: '20px', mr: 1 },
                      }),
                      (0, ee.jsx)(l.Z, { variant: t, children: r.symbol }),
                    ],
                  }),
                  width: '100%',
                  children: (0, ee.jsxs)(c.Z, {
                    sx: { display: 'inline-flex', alignItems: 'center' },
                    children: [
                      (0, ee.jsx)(X.B, { value: +r.incentiveAPR, percent: !0, variant: t }),
                      (0, ee.jsx)(l.Z, {
                        variant: t,
                        sx: { ml: 1 },
                        children: (0, ee.jsx)(J.cC, { id: '70wH1Q' }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        pe = function (e) {
          var o = e.points;
          return (0, ee.jsxs)(c.Z, {
            children: [
              (0, ee.jsx)(J.cC, {
                id: 'wuMdlk',
                values: { 0: (0, ee.jsxs)('b', { children: [o, 'x'] }) },
              }),
              (0, ee.jsx)('br', {}),
              (0, ee.jsx)(J.cC, { id: '7c6Gy8' }),
              ' ',
              (0, ee.jsx)($.rU, {
                href: 'https://blog.soniclabs.com/sonic-points-simplified-how-to-qualify-for-200-million-s-airdrop/',
                sx: { textDecoration: 'underline' },
                variant: 'caption',
                color: 'text.secondary',
                children: 'here',
              }),
              '.',
              (0, ee.jsx)('br', {}),
              (0, ee.jsx)('br', {}),
              (0, ee.jsx)(J.cC, { id: '+KaZP2' }),
            ],
          });
        },
        de = function (e) {
          var o = e.zkSyncIgniteIncentives,
            n = 'secondary12',
            t = ie(o);
          return (0, ee.jsxs)(c.Z, {
            sx: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'column',
            },
            children: [
              (0, ee.jsx)('img', {
                src: '/icons/other/zksync-ignite.svg',
                width: '100px',
                height: '40px',
                alt: '',
              }),
              (0, ee.jsx)(l.Z, {
                variant: 'caption',
                color: 'text.primary',
                mb: 3,
                children: (0, ee.jsx)(J.cC, { id: 'ov0+mq' }),
              }),
              (0, ee.jsxs)(l.Z, {
                variant: 'caption',
                color: 'text.secondary',
                mb: 3,
                children: [
                  (0, ee.jsx)(J.cC, { id: 'Ha/U5f' }),
                  ' ',
                  (0, ee.jsx)($.rU, {
                    href: 'https://zksyncignite.xyz/',
                    sx: { textDecoration: 'underline' },
                    variant: 'caption',
                    color: 'text.secondary',
                    children: 'Learn more',
                  }),
                ],
              }),
              (0, ee.jsxs)(l.Z, {
                variant: 'caption',
                color: 'text.secondary',
                mb: 3,
                children: [
                  (0, ee.jsx)(J.cC, { id: 'bSruit' }),
                  ' ',
                  (0, ee.jsx)($.rU, {
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
                ? (0, ee.jsx)(l.Z, {
                    variant: 'caption',
                    color: 'text.strong',
                    mb: 3,
                    children: (0, ee.jsx)(J.cC, { id: 'J/hVSQ', values: { 0: o.customMessage } }),
                  })
                : null,
              (0, ee.jsx)(c.Z, {
                sx: { width: '100%' },
                children: (0, ee.jsx)(te.X, {
                  height: 32,
                  caption: (0, ee.jsxs)(c.Z, {
                    sx: { display: 'flex', alignItems: 'center', mb: 0 },
                    children: [
                      (0, ee.jsx)(q.T1, {
                        aToken: t.aToken,
                        symbol: t.tokenIconSymbol,
                        sx: { fontSize: '20px', mr: 1 },
                      }),
                      (0, ee.jsx)(l.Z, { variant: n, children: t.symbol }),
                    ],
                  }),
                  width: '100%',
                  children: (0, ee.jsxs)(c.Z, {
                    sx: { display: 'inline-flex', alignItems: 'center' },
                    children: [
                      (0, ee.jsx)(X.B, { value: +t.incentiveAPR, percent: !0, variant: n }),
                      (0, ee.jsx)(l.Z, {
                        variant: n,
                        sx: { ml: 1 },
                        children: (0, ee.jsx)(J.cC, { id: '70wH1Q' }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        me = function () {
          return (0, ee.jsx)(c.Z, {
            sx: {
              p: { xs: '0 4px', xsm: '3.625px 4px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: (0, ee.jsx)(l.Z, {
              variant: 'main12',
              color: 'text.secondary',
              children: '\xa0',
            }),
          });
        },
        Te = function (e) {
          var o = (0, p.useState)(!1),
            n = o[0],
            t = o[1],
            r = Y(e).data;
          return r
            ? (0, ee.jsx)(G.a, {
                tooltipContent: (0, ee.jsx)(ue, { meritIncentives: r }),
                withoutHover: !0,
                setOpen: t,
                open: n,
                children: (0, ee.jsx)(he, { incentives: [r], incentivesNetAPR: +r.incentiveAPR }),
              })
            : null;
        },
        Se = function (e) {
          var o = (0, p.useState)(!1),
            n = o[0],
            t = o[1],
            r = F(e).data;
          return r
            ? (0, ee.jsx)(G.a, {
                tooltipContent: (0, ee.jsx)(de, { zkSyncIgniteIncentives: r }),
                withoutHover: !0,
                setOpen: t,
                open: n,
                children: (0, ee.jsx)(he, { incentives: [r], incentivesNetAPR: +r.incentiveAPR }),
              })
            : null;
        },
        xe = function (e) {
          var o = e.rewardedAsset,
            n = (0, p.useState)(!1),
            t = n[0],
            r = n[1],
            s = S(o);
          return s
            ? (0, ee.jsx)(G.a, {
                tooltipContent: (0, ee.jsx)(oe, { points: s }),
                withoutHover: !0,
                setOpen: r,
                open: t,
                children: (0, ee.jsx)(be, { points: s }),
              })
            : null;
        },
        ye = function (e) {
          var o = (0, p.useState)(!1),
            n = o[0],
            t = o[1],
            r = e.market,
            s = e.protocolAction,
            a = e.symbol,
            i = A(r, a, s);
          return i
            ? (0, ee.jsx)(G.a, {
                tooltipContent: (0, ee.jsx)(ne, { multiplier: i }),
                withoutHover: !0,
                setOpen: t,
                open: n,
                children: (0, ee.jsx)(_e, { multiplier: i }),
              })
            : null;
        },
        Ee = function (e) {
          var o = e.rewardedAsset,
            n = (0, p.useState)(!1),
            t = n[0],
            r = n[1],
            s = W(o);
          return s
            ? (0, ee.jsx)(G.a, {
                tooltipContent: (0, ee.jsx)(pe, { points: s }),
                withoutHover: !0,
                setOpen: r,
                open: t,
                children: (0, ee.jsx)(ve, { points: s }),
              })
            : null;
        },
        Ae = function (e) {
          var o = e.incentives,
            n = e.symbol,
            t = e.displayBlank,
            r = (0, p.useState)(!1),
            s = r[0],
            i = r[1];
          if (!(o && o.length > 0)) return t ? (0, ee.jsx)(me, {}) : null;
          var c = o.some(function (e) {
              return 'Infinity' === e.incentiveAPR;
            }),
            l = c
              ? 'Infinity'
              : o.reduce(function (e, o) {
                  return e + +o.incentiveAPR;
                }, 0),
            u = c ? 'Infinity' : 'Infinity' !== l ? (0, a.hE)(l || 0).toNumber() : 'Infinity';
          return (0, ee.jsx)(G.a, {
            tooltipContent: (0, ee.jsx)(ce, { incentives: o, incentivesNetAPR: u, symbol: n }),
            withoutHover: !0,
            setOpen: i,
            open: s,
            children: (0, ee.jsx)(he, { incentives: o, incentivesNetAPR: u, displayBlank: t }),
          });
        },
        he = function (e) {
          var o = e.incentives,
            n = e.incentivesNetAPR,
            t = e.displayBlank,
            r = e.plus,
            s = (0, p.useState)(!1),
            a = s[0],
            d = s[1],
            m = (0, V.Y)(function (e) {
              return e.trackEvent;
            });
          if (!(o && o.length > 0)) return t ? (0, ee.jsx)(me, {}) : null;
          if (0 === n) return t ? (0, ee.jsx)(me, {}) : null;
          return (0, ee.jsxs)(c.Z, {
            sx: function (e) {
              return {
                p: { xs: '0 4px', xsm: '2px 4px' },
                border: '1px solid '.concat(a ? e.palette.action.disabled : e.palette.divider),
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s ease',
                bgcolor: a ? 'action.hover' : 'transparent',
                '&:hover': { bgcolor: 'action.hover', borderColor: 'action.disabled' },
              };
            },
            onClick: function () {
              m(z.h1.VIEW_LM_DETAILS_DASHBOARD, {}), d(!a);
            },
            children: [
              (0, ee.jsxs)(c.Z, {
                sx: { mr: 2 },
                children: [
                  r ? '+' : '',
                  ' ',
                  'Infinity' !== n && n < 1e4
                    ? (0, ee.jsx)(X.B, {
                        value: n,
                        percent: !0,
                        variant: 'secondary12',
                        color: 'text.secondary',
                      })
                    : 'Infinity' !== n && n > 9999
                      ? (0, ee.jsx)(X.B, {
                          value: n,
                          percent: !0,
                          compact: !0,
                          variant: 'secondary12',
                          color: 'text.secondary',
                        })
                      : 'Infinity' === n
                        ? (0, ee.jsx)(l.Z, {
                            variant: 'main12',
                            color: 'text.secondary',
                            children: '\u221e',
                          })
                        : void 0,
                ],
              }),
              (0, ee.jsx)(c.Z, {
                sx: { display: 'inline-flex' },
                children: (0, ee.jsx)(ee.Fragment, {
                  children:
                    o.length < 5
                      ? (0, ee.jsx)(ee.Fragment, {
                          children: o.map(ie).map(function (e, o) {
                            return (0, ee.jsx)(
                              q.T1,
                              {
                                aToken: e.aToken,
                                symbol: e.tokenIconSymbol,
                                sx: { fontSize: ''.concat(12, 'px'), ml: -1 },
                              },
                              o
                            );
                          }),
                        })
                      : (0, ee.jsxs)(ee.Fragment, {
                          children: [
                            o
                              .slice(0, 3)
                              .map(ie)
                              .map(function (e, o) {
                                return (0, ee.jsx)(
                                  q.T1,
                                  {
                                    symbol: e.tokenIconSymbol,
                                    sx: { fontSize: ''.concat(12, 'px'), ml: -1 },
                                  },
                                  o
                                );
                              }),
                            (0, ee.jsx)(u.Z, {
                              sx: {
                                fontSize: ''.concat(12, 'px'),
                                borderRadius: '50%',
                                bgcolor: 'common.white',
                                color: 'common.black',
                                ml: -1,
                                zIndex: 5,
                              },
                              children: (0, ee.jsx)(i.Z, {}),
                            }),
                          ],
                        }),
                }),
              }),
            ],
          });
        },
        Ue = function (e) {
          var o = e.value,
            n = e.iconSrc,
            t = (0, p.useState)(!1),
            r = t[0],
            s = t[1],
            a = (0, V.Y)(function (e) {
              return e.trackEvent;
            });
          return (0, ee.jsxs)(c.Z, {
            sx: function (e) {
              return {
                p: { xs: '0 4px', xsm: '2px 4px' },
                border: '1px solid '.concat(r ? e.palette.action.disabled : e.palette.divider),
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s ease',
                bgcolor: r ? 'action.hover' : 'transparent',
                '&:hover': { bgcolor: 'action.hover', borderColor: 'action.disabled' },
              };
            },
            onClick: function () {
              a(z.h1.VIEW_LM_DETAILS_DASHBOARD, {}), s(!r);
            },
            children: [
              (0, ee.jsx)(c.Z, {
                sx: { mr: 2 },
                children: (0, ee.jsx)(l.Z, {
                  component: 'span',
                  variant: 'secondary12',
                  color: 'text.secondary',
                  children: ''.concat(o, 'x'),
                }),
              }),
              (0, ee.jsx)(c.Z, {
                sx: { display: 'inline-flex' },
                children: (0, ee.jsx)('img', { src: n, width: 12, height: 12, alt: 'icon' }),
              }),
            ],
          });
        },
        be = function (e) {
          var o = e.points;
          return (0, ee.jsx)(Ue, { value: o, iconSrc: '/icons/other/ethena.svg' });
        },
        _e = function (e) {
          var o = e.multiplier;
          return (0, ee.jsx)(Ue, { value: o, iconSrc: '/icons/other/ether.fi.svg' });
        },
        ve = function (e) {
          var o = e.points;
          return (0, ee.jsx)(Ue, { value: o, iconSrc: '/icons/networks/sonic.svg' });
        };
    },
  },
]);
