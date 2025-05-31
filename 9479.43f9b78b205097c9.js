(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9479],
  {
    84110: function (e) {
      e.exports = (function () {
        'use strict';
        return function (e, t, n) {
          e = e || {};
          var r = t.prototype,
            a = {
              future: 'in %s',
              past: '%s ago',
              s: 'a few seconds',
              m: 'a minute',
              mm: '%d minutes',
              h: 'an hour',
              hh: '%d hours',
              d: 'a day',
              dd: '%d days',
              M: 'a month',
              MM: '%d months',
              y: 'a year',
              yy: '%d years',
            };
          function i(e, t, n, a) {
            return r.fromToBase(e, t, n, a);
          }
          (n.en.relativeTime = a),
            (r.fromToBase = function (t, r, i, o, s) {
              for (
                var c,
                  u,
                  d,
                  l = i.$locale().relativeTime || a,
                  p = e.thresholds || [
                    { l: 's', r: 44, d: 'second' },
                    { l: 'm', r: 89 },
                    { l: 'mm', r: 44, d: 'minute' },
                    { l: 'h', r: 89 },
                    { l: 'hh', r: 21, d: 'hour' },
                    { l: 'd', r: 35 },
                    { l: 'dd', r: 25, d: 'day' },
                    { l: 'M', r: 45 },
                    { l: 'MM', r: 10, d: 'month' },
                    { l: 'y', r: 17 },
                    { l: 'yy', d: 'year' },
                  ],
                  m = p.length,
                  f = 0;
                f < m;
                f += 1
              ) {
                var y = p[f];
                y.d && (c = o ? n(t).diff(i, y.d, !0) : i.diff(t, y.d, !0));
                var b = (e.rounding || Math.round)(Math.abs(c));
                if (((d = c > 0), b <= y.r || !y.r)) {
                  b <= 1 && f > 0 && (y = p[f - 1]);
                  var h = l[y.l];
                  s && (b = s('' + b)),
                    (u = 'string' == typeof h ? h.replace('%d', b) : h(b, r, y.l, d));
                  break;
                }
              }
              if (r) return u;
              var x = d ? l.future : l.past;
              return 'function' == typeof x ? x(u) : x.replace('%s', u);
            }),
            (r.to = function (e, t) {
              return i(e, t, this, !0);
            }),
            (r.from = function (e, t) {
              return i(e, t, this);
            });
          var o = function (e) {
            return e.$u ? n.utc() : n();
          };
          (r.toNow = function (e) {
            return this.to(o(this), e);
          }),
            (r.fromNow = function (e) {
              return this.from(o(this), e);
            });
        };
      })();
    },
    215: function (e, t, n) {
      'use strict';
      n.d(t, {
        o: function () {
          return d;
        },
      });
      var r = n(59499),
        a = n(4730),
        i = n(53219),
        o = n(85893),
        s = ['sx'];
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var d = function (e) {
        var t = e.sx,
          n = (0, a.Z)(e, s);
        return (0, o.jsxs)(
          i.Z,
          u(
            u(
              {
                sx: u({ fill: 'none', stroke: '#A5A8B6' }, t),
                viewBox: '0 0 21 19',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-label': 'Wallet',
              },
              n
            ),
            {},
            {
              children: [
                (0, o.jsxs)('g', {
                  clipPath: 'url(#clip0_3719_3323)',
                  strokeWidth: '2',
                  children: [
                    (0, o.jsx)('path', {
                      d: 'M17.3203 17.398H3.32031C2.78988 17.398 2.28117 17.1872 1.9061 16.8122C1.53103 16.4371 1.32031 15.9284 1.32031 15.3979V6.39795C1.32031 5.86752 1.53103 5.35881 1.9061 4.98374C2.28117 4.60866 2.78988 4.39795 3.32031 4.39795H17.3203C17.8507 4.39795 18.3595 4.60866 18.7345 4.98374C19.1096 5.35881 19.3203 5.86752 19.3203 6.39795V15.3979C19.3203 15.9284 19.1096 16.4371 18.7345 16.8122C18.3595 17.1872 17.8507 17.398 17.3203 17.398Z',
                    }),
                    (0, o.jsx)('path', {
                      d: 'M14.8203 11.3979C14.6877 11.3979 14.5605 11.3453 14.4668 11.2515C14.373 11.1577 14.3203 11.0306 14.3203 10.8979C14.3203 10.7653 14.373 10.6382 14.4668 10.5444C14.5605 10.4506 14.6877 10.3979 14.8203 10.3979C14.9529 10.3979 15.0801 10.4506 15.1739 10.5444C15.2676 10.6382 15.3203 10.7653 15.3203 10.8979C15.3203 11.0306 15.2676 11.1577 15.1739 11.2515C15.0801 11.3453 14.9529 11.3979 14.8203 11.3979Z',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    (0, o.jsx)('path', {
                      d: 'M16.3203 4.39793V2.99993C16.3202 2.69343 16.2497 2.39106 16.1142 2.11615C15.9787 1.84124 15.7818 1.60116 15.5387 1.41444C15.2956 1.22773 15.0129 1.09937 14.7124 1.03929C14.4118 0.979209 14.1015 0.989009 13.8053 1.06793L2.80531 4.00093C2.37937 4.11444 2.00285 4.36549 1.7343 4.71506C1.46575 5.06462 1.32021 5.49312 1.32031 5.93393V6.39793',
                    }),
                  ],
                }),
                (0, o.jsx)('defs', {
                  children: (0, o.jsx)('clipPath', {
                    id: 'clip0_3719_3323',
                    children: (0, o.jsx)('rect', {
                      width: '20',
                      height: '19',
                      fill: 'white',
                      transform: 'translate(0.320312)',
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
    },
    6308: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return c;
        },
      });
      var r = n(59499),
        a = n(15861),
        i = (n(67294), n(85893));
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var c = function (e) {
        return (0, i.jsx)(a.Z, s(s({}, e), {}, { children: '\u2014' }));
      };
    },
    37383: function (e, t, n) {
      'use strict';
      n.d(t, {
        Pp: function () {
          return j;
        },
        Uw: function () {
          return w;
        },
        Yz: function () {
          return O;
        },
        fN: function () {
          return g;
        },
        is: function () {
          return A;
        },
        nB: function () {
          return E;
        },
        rJ: function () {
          return v;
        },
        xz: function () {
          return F;
        },
        zK: function () {
          return k;
        },
      });
      var r = n(59499),
        a = n(75331),
        i = n(39973),
        o = n(3439),
        s = n(28052),
        c = n(49575),
        u = n(20805),
        d = n(4482),
        l = n(4510),
        p = n(15165),
        m = n(97986),
        f = n(9279),
        y = n(61933),
        b = n(79850);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var g,
        v = '252000';
      !(function (e) {
        (e[(e.UNTOUCHED = 0)] = 'UNTOUCHED'),
          (e[(e.IN_PROGRESS = 1)] = 'IN_PROGRESS'),
          (e[(e.SUCCESS = 2)] = 'SUCCESS'),
          (e[(e.FAILURE = 3)] = 'FAILURE');
      })(g || (g = {}));
      var T = [
          {
            sourceChainId: a.a_.mainnet,
            chainSelector: '5009297550715157269',
            lockReleaseTokenPool: i.EZ,
            router: '0x80226fc0ee2b096224eeac085bb9a8cba1146f7d',
            tokenOracle: '0x3f12643d3f6f874d39c2a4c9f2cd6f2dbac877fc',
            wrappedNativeOracle: o.ou.WETH.ORACLE,
            subgraphUrl: 'https://gateway-arbitrum.network.thegraph.com/api/'.concat(
              'bca0c129e00bb96513dc2438796971a8',
              '/subgraphs/id/E11p8T4Ff1DHZbwSUC527hkUb5innVMdTuP6A2s1xtm1'
            ),
            feeTokens: [
              {
                name: 'Gho Token',
                address: o.ou.GHO.UNDERLYING,
                symbol: 'GHO',
                decimals: 18,
                chainId: a.a_.mainnet,
                logoURI:
                  'https://assets.coingecko.com/coins/images/30663/standard/gho-token-logo.png?1720517092',
                oracle: o.ou.GHO.ORACLE,
                extensions: { isNative: !1 },
                balance: '0',
              },
              {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18,
                address: f.d,
                chainId: a.a_.mainnet,
                logoURI:
                  'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
                extensions: { isNative: !0 },
                balance: '0',
              },
            ],
          },
          {
            sourceChainId: a.a_.arbitrum_one,
            chainSelector: '4949039107694359620',
            burnMintTokenPool: s.EZ,
            router: '0x141fa059441e0ca23ce184b6a78bafd2a517dde8',
            tokenOracle: c.ou.GHO.ORACLE,
            wrappedNativeOracle: c.ou.WETH.ORACLE,
            subgraphUrl: 'https://gateway-arbitrum.network.thegraph.com/api/'.concat(
              'bca0c129e00bb96513dc2438796971a8',
              '/subgraphs/id/GPpZfiGoDChLsiWoMG5fxXdRNEYrsVDrKJ39moGcbz6i'
            ),
            feeTokens: [
              {
                name: 'Gho Token',
                address: c.ou.GHO.UNDERLYING,
                symbol: 'GHO',
                decimals: 18,
                chainId: a.a_.arbitrum_one,
                logoURI:
                  'https://assets.coingecko.com/coins/images/30663/standard/gho-token-logo.png?1720517092',
                oracle: c.ou.GHO.ORACLE,
                extensions: { isNative: !1 },
                balance: '0',
              },
              {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18,
                address: f.d,
                chainId: a.a_.arbitrum_one,
                logoURI:
                  'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
                extensions: { isNative: !0 },
                balance: '0',
              },
            ],
          },
          {
            sourceChainId: a.a_.base,
            chainSelector: '15971525489660198786',
            burnMintTokenPool: u.EZ,
            router: '0x881e3A65B4d4a04dD529061dd0071cf975F58bCD',
            tokenOracle: '0x42868EFcee13C0E71af89c04fF7d96f5bec479b0',
            wrappedNativeOracle: d.ou.WETH.ORACLE,
            subgraphUrl: 'https://gateway.thegraph.com/api/'.concat(
              'bca0c129e00bb96513dc2438796971a8',
              '/subgraphs/id/7RqaLvSMWBv4Z3xmv4kb6Jq3t59ikYG3wpcsTnLgBWzt'
            ),
            feeTokens: [
              {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18,
                address: f.d,
                chainId: a.a_.base,
                logoURI:
                  'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
                extensions: { isNative: !0 },
                balance: '0',
              },
            ],
          },
        ],
        C = [
          {
            sourceChainId: a.a_.sepolia,
            lockReleaseTokenPool: '0xd8bDb685320f7118085d5C8D0c2016A644881D40',
            chainSelector: '16015286601757825753',
            router: '0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59',
            tokenOracle: '0x98458D6A99489F15e6eB5aFa67ACFAcf6F211051',
            wrappedNativeOracle: l.ou.WETH.ORACLE,
            subgraphUrl: 'https://gateway.thegraph.com/api/'.concat(
              'bca0c129e00bb96513dc2438796971a8',
              '/subgraphs/id/8NWTrc4S6xwaBbajongofytQfQisqYm1zR2ghGEtRFSc'
            ),
            feeTokens: [
              {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18,
                address: f.d,
                chainId: 11155111,
                logoURI:
                  'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
                extensions: { isNative: !0 },
                balance: '0',
              },
            ],
          },
          {
            sourceChainId: a.a_.arbitrum_sepolia,
            burnMintTokenPool: '0xb4A1e95A2FA7ed83195C6c16660fCCa720163FF6',
            chainSelector: '3478487238524512106',
            router: '0x2a9C5afB0d0e4BAb2BCdaE109EC4b0c4Be15a165',
            tokenOracle: '0x1f885520b7BD528E46b390040F12E753Dce43004',
            wrappedNativeOracle: p.ou.WETH.ORACLE,
            subgraphUrl: 'https://gateway.thegraph.com/api/'.concat(
              'bca0c129e00bb96513dc2438796971a8',
              '/subgraphs/id/8bpqvL6XBCVhN4heE9rdEwgTketeZ2U5vVGEh5fDoUEH'
            ),
            feeTokens: [
              {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18,
                address: f.d,
                chainId: 421614,
                logoURI:
                  'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
                extensions: { isNative: !0 },
                balance: '0',
              },
            ],
          },
          {
            sourceChainId: a.a_.base_sepolia,
            burnMintTokenPool: '0x2a33945f942913b730aB36A24150A96c3D0CC9E9',
            chainSelector: '10344971235874465080',
            router: '0xD3b06cEbF099CE7DA4AcCf578aaebFDBd6e88a93',
            tokenOracle: '0xFD5ea2e57CDC98D371D8eA899d1F2C24bfFb39BD',
            wrappedNativeOracle: m.ou.WETH.ORACLE,
            subgraphUrl: 'https://gateway.thegraph.com/api/'.concat(
              'bca0c129e00bb96513dc2438796971a8',
              '/subgraphs/id/8bpqvL6XBCVhN4heE9rdEwgTketeZ2U5vVGEh5fDoUEH'
            ),
            feeTokens: [
              {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18,
                address: f.d,
                chainId: a.a_.base_sepolia,
                logoURI:
                  'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
                extensions: { isNative: !0 },
                balance: '0',
              },
            ],
          },
        ],
        j = b.p8 ? C : T;
      function E(e) {
        var t,
          n =
            null ===
              (t = j.find(function (t) {
                return t.sourceChainId === e;
              })) || void 0 === t
              ? void 0
              : t.chainSelector;
        if (!n) throw new Error('No chainSelector found for chain '.concat(e));
        return n;
      }
      function O(e) {
        var t,
          n =
            null ===
              (t = j.find(function (t) {
                return t.chainSelector === e;
              })) || void 0 === t
              ? void 0
              : t.sourceChainId;
        if (!n) throw new Error('No chainId found for chainSelector '.concat(e));
        return n;
      }
      function A(e) {
        var t,
          n =
            null ===
              (t = j.find(function (t) {
                return t.sourceChainId === e;
              })) || void 0 === t
              ? void 0
              : t.router;
        if (!n) throw new Error('No router found for chain '.concat(e));
        return n;
      }
      function k() {
        return j.map(function (e) {
          return e.sourceChainId;
        });
      }
      function w(e) {
        var t = j.find(function (t) {
          return t.sourceChainId === e;
        });
        if (!t) throw new Error('No config found for chain '.concat(e));
        return t;
      }
      var F = k().map(function (e) {
        return x(x({}, y.m5[e]), {}, { chainId: e });
      });
    },
    49479: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          BridgeModal: function () {
            return Ge;
          },
        });
      var r = n(15629),
        a = n(44949),
        i = n(59499),
        o = n(57499),
        s = n(67484),
        c = n(80822),
        u = n(69417),
        d = n(15861),
        l = n(26447),
        p = n(93946),
        m = n(53219),
        f = n(88078),
        y = n(70794),
        b = n(9279),
        h = n(56371),
        x = n(67294),
        g = n(38577),
        v = n(20986),
        T = n(35783),
        C = n(49212),
        j = n(67944),
        E = n(94054),
        O = n(10315),
        A = n(18972),
        k = n(85893);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : w(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var D = function (e) {
          var t = e.supportedBridgeMarkets,
            n = e.onNetworkChange,
            r = e.defaultNetwork,
            a = e.sx,
            i = void 0 === a ? {} : a,
            o = 1 === t.length;
          return (0, k.jsx)(c.Z, {
            sx: F({ width: '100%' }, i),
            children: (0, k.jsxs)(c.Z, {
              sx: function (e) {
                return {
                  p: '8px 0px',
                  border: '1px solid '.concat(e.palette.divider),
                  borderRadius: '6px',
                  mb: 1,
                };
              },
              children: [
                (0, k.jsx)(d.Z, {
                  color: 'text.secondary',
                  sx: { p: '0px 12px' },
                  children: 'Network',
                }),
                (0, k.jsx)(E.Z, {
                  fullWidth: !0,
                  children: (0, k.jsx)(O.Z, {
                    id: 'network-select',
                    disabled: o,
                    value: r.chainId.toString(),
                    onChange: function (e) {
                      var r = Number(e.target.value),
                        a = t.find(function (e) {
                          return e.chainId === r;
                        });
                      a && n(a);
                    },
                    variant: 'outlined',
                    sx: {
                      '.MuiSelect-select': { backgroundColor: 'transparent' },
                      '& .MuiOutlinedInput-root': {
                        background: 'transparent',
                        '&:hover': {
                          '.MuiOutlinedInput-notchedOutline': { borderColor: 'currentColor' },
                        },
                        '&.Mui-focused': {
                          '.MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                        },
                      },
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      '& .MuiSelect-icon': {
                        marginRight: '12px',
                        display: o ? 'none' : 'inline-block',
                      },
                      '& input.Mui-disabled': { color: 'red' },
                      '& .MuiOutlinedInput-input.Mui-disabled': {
                        backgroundColor: 'transparent',
                        opacity: 1,
                        '-webkit-text-fill-color': 'unset',
                      },
                    },
                    children: t.map(function (e) {
                      return (0, k.jsx)(
                        A.Z,
                        {
                          value: e.chainId,
                          children: (0, k.jsxs)(c.Z, {
                            sx: { display: 'flex', alignItems: 'center' },
                            children: [
                              (0, k.jsx)('img', {
                                src: e.networkLogoPath,
                                alt: e.name,
                                style: { marginRight: 8, width: 18, height: 18 },
                              }),
                              (0, k.jsx)(d.Z, {
                                variant: 'h3',
                                color: 'primary',
                                children: e.name,
                              }),
                            ],
                          }),
                        },
                        e.chainId
                      );
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        S = n(94010),
        I = n(17674),
        R = n(50029),
        N = n(87794),
        B = n.n(N),
        Z = n(78551),
        P = n(33174),
        M = n(2593),
        L = n(3062),
        _ = n(52251),
        U = n(35258),
        G = n(79850);
      function H(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : H(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var W = n(96276),
        z = n(72005),
        K = n(65361),
        Y = n(69951),
        q = n(23478),
        J = n(40429),
        X = n(83063),
        Q = n(44880),
        $ = n(19408),
        ee = n(4730),
        te = n(30202),
        ne = n(94303),
        re = n(69986),
        ae = n(805),
        ie = n(84207),
        oe = n(53008),
        se = n(37383),
        ce = n(7170),
        ue = [
          'amountToBridge',
          'isWrongNetwork',
          'sx',
          'symbol',
          'blocked',
          'decimals',
          'tokenAddress',
          'sourceChainId',
          'destinationChainId',
          'message',
          'fees',
          'isCustomFeeToken',
        ];
      function de(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? de(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : de(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var pe = x.memo(function (e) {
          var t = e.amountToBridge,
            n = e.isWrongNetwork,
            r = e.sx,
            i = e.symbol,
            s = e.blocked,
            c = (e.decimals, e.tokenAddress),
            u = e.sourceChainId,
            d = e.destinationChainId,
            l = e.message,
            p = e.fees,
            m = e.isCustomFeeToken,
            f = (0, ee.Z)(e, ue),
            y = (0, z.Z)().sendTx,
            b = (0, te.NL)(),
            g = (0, L.Y)(function (e) {
              return e.addTransaction;
            }),
            v = (0, a.vR)(),
            T = v.approvalTxState,
            C = v.mainTxState,
            j = v.loadingTxns,
            E = v.setLoadingTxns,
            O = v.setApprovalTxState,
            A = v.setMainTxState,
            w = v.setGasLimit,
            F = v.setTxError,
            D = (0, L.Y)(function (e) {
              return e.account;
            }),
            S = (0, re.i)({ chainId: u, token: c, spender: (0, se.is)(u) }),
            I = S.data,
            N = S.refetch,
            Z = S.isFetching,
            M = S.isFetchedAfterMount;
          E(Z);
          var _ =
            0 !== Number(t) &&
            (0, oe.iv)({ approvedAmount: I ? I.toString() : '0', amount: t, signedAmount: '0' });
          _ && null !== T && void 0 !== T && T.success && O({}),
            (0, x.useEffect)(
              function () {
                M || N();
              },
              [N, M]
            );
          var U = (0, ne.M)({
            usePermit: !1,
            approvedAmount: {
              amount: (null === I || void 0 === I ? void 0 : I.toString()) || '0',
              user: D,
              token: c,
              spender: (0, se.is)(u),
            },
            requiresApproval: _,
            assetAddress: c,
            symbol: Y.JP,
            decimals: 18,
            signatureAmount: t,
            onApprovalTxConfirmed: N,
            chainId: u,
            amountToApprove: (0, h.parseUnits)(t || '0', 18).toString(),
          }).approval;
          (0, x.useEffect)(
            function () {
              var e = 0;
              (e = Number(se.rJ)), _ && !T.success && (e += Number(oe.pQ)), w(e.toString());
            },
            [_, T, w]
          );
          var H = (function () {
            var e = (0, R.Z)(
              B().mark(function e() {
                var n, r, a, i, o, s, f, h;
                return B().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            A(le(le({}, C), {}, { loading: !0 })),
                            (n = (0, G.VH)(u)),
                            (r = (0, se.is)(u)),
                            (a = new P.Contract(r, ce, n)),
                            (i = (0, se.nB)(d)),
                            (o = {}),
                            m || (o.value = p),
                            (e.next = 10),
                            a.populateTransaction.ccipSend(i, l, o)
                          );
                        case 10:
                          return (s = e.sent), (e.next = 13), y(s);
                        case 13:
                          (f = e.sent),
                            b.invalidateQueries({ queryKey: ['sendRequests', D] }),
                            A({ txHash: f.hash, loading: !1, success: !0 }),
                            g(f.hash, {
                              action: 'bridge',
                              txState: 'success',
                              asset: c,
                              amount: t,
                              assetName: Y.JP,
                            }),
                            F(void 0),
                            (e.next = 25);
                          break;
                        case 20:
                          (e.prev = 20),
                            (e.t0 = e.catch(0)),
                            (h = (0, ae.WG)(e.t0, ae.aD.GAS_ESTIMATION, !1)),
                            F(h),
                            A({ txHash: void 0, loading: !1 });
                        case 25:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 20]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (0, k.jsx)(
            ie.B,
            le(
              {
                blocked: s,
                mainTxState: C,
                approvalTxState: T,
                isWrongNetwork: n,
                requiresAmount: !0,
                amount: t,
                symbol: i,
                preparingTransactions: j || !p,
                actionText: (0, k.jsx)(o.cC, { id: 'cp1ZDP', values: { symbol: i } }),
                actionInProgressText: (0, k.jsx)(o.cC, { id: 'rvbaFU', values: { symbol: i } }),
                handleApproval: U,
                handleAction: H,
                requiresApproval: _,
                tryPermit: !1,
                sx: r,
              },
              f
            )
          );
        }),
        me = n(2734),
        fe = n(32867),
        ye = function (e) {
          var t = e.amount,
            n = e.maxAmountToBridgeFormatted,
            r = e.maxAmountReducedDueToBridgeLimit,
            a = e.maxAmountReducedDueToRateLimit,
            i = e.refillRate,
            s = e.maxRateLimitCapacity,
            c = (0, me.Z)().palette,
            u = (0, k.jsxs)(d.Z, {
              variant: 'caption',
              children: [
                'Due to bridging limits, the maximum amount currently available to bridge is',
                ' ',
                (0, k.jsx)(fe.B, { variant: 'caption', value: n, visibleDecimals: 2 }),
              ],
            }),
            l = (0, k.jsxs)(d.Z, {
              variant: 'caption',
              children: [
                'The amount you can bridge is currently reduced because of the rate limit. The limit is raised at a rate of',
                ' ',
                (0, k.jsx)(fe.B, {
                  variant: 'caption',
                  value: (0, h.formatEther)(i),
                  visibleDecimals: 2,
                }),
                ' GHO per second, until the maximum amount of',
                ' ',
                (0, k.jsx)(fe.B, {
                  variant: 'caption',
                  value: (0, h.formatEther)(s),
                  visibleDecimals: 2,
                }),
                ' ',
                'is reached.',
              ],
            });
          return (0, k.jsx)(j.oD, {
            description:
              '' !== t && (r || a)
                ? (0, k.jsx)(C.G, {
                    text: (0, k.jsx)(d.Z, {
                      color: c.warning.main,
                      children: (0, k.jsx)(o.cC, { id: 'hehnjM' }),
                    }),
                    iconColor: 'warning.main',
                    children: (0, k.jsxs)(k.Fragment, { children: [r && u, a && l] }),
                  })
                : (0, k.jsx)(o.cC, { id: 'hehnjM' }),
            iconSymbol: Y.JP,
            symbol: Y.JP,
            value: t,
          });
        },
        be = n(89555),
        he = n(50480),
        xe = n(45843),
        ge = n(73601),
        ve = n(66489),
        Te = n(52479),
        Ce = function (e) {
          var t = e.connectedAccount,
            n = e.onInputValid,
            r = e.onInputError,
            a = e.sourceChainId,
            i = (0, Te.G)(t, a),
            s = i.data,
            c = i.isFetching,
            u = (0, x.useState)(!0),
            p = u[0],
            m = u[1],
            f = (0, x.useState)(''),
            y = f[0],
            b = f[1],
            g = (0, x.useState)(!1),
            v = g[0],
            T = g[1];
          (0, x.useEffect)(
            function () {
              void 0 !== s && (s ? (m(!1), b('')) : (m(!0), b(t)));
            },
            [t, s]
          ),
            (0, x.useEffect)(
              function () {
                var e = (function () {
                  var e = (0, R.Z)(
                    B().mark(function e() {
                      var t;
                      return B().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return T(!0), (e.next = 3), (0, G.Zs)().resolveName(y);
                            case 3:
                              (t = e.sent) && b(t.toLowerCase()), T(!1);
                            case 6:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                '.eth' === y.slice(-4) && e();
              },
              [y]
            ),
            (0, x.useEffect)(
              function () {
                (0, h.isAddress)(y) ? n(y) : r();
              },
              [y, r, n]
            );
          var C = !p && !(0, h.isAddress)(y);
          return (0, k.jsxs)(l.Z, {
            direction: 'column',
            gap: 1,
            width: '100%',
            children: [
              (0, k.jsxs)(l.Z, {
                direction: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                children: [
                  (0, k.jsx)(d.Z, {
                    color: 'text.secondary',
                    children: (0, k.jsx)(o.cC, { id: '/jQctM' }),
                  }),
                  (0, k.jsx)(l.Z, {
                    direction: 'row',
                    alignItems: 'center',
                    sx: { mb: -1 },
                    children: (0, k.jsx)(he.Z, {
                      sx: { mx: 0 },
                      control: (0, k.jsx)(xe.Z, {
                        disableRipple: !0,
                        checked: p,
                        onClick: function () {
                          var e = !p;
                          e ? (b(t), n(t)) : (b(''), r()), m(e);
                        },
                      }),
                      labelPlacement: 'start',
                      label: (0, k.jsx)(d.Z, {
                        sx: { fontSize: '0.75rem' },
                        color: 'text.secondary',
                        children: (0, k.jsx)(o.cC, { id: 'KLd6ky' }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, k.jsx)(ge.ZP, {
                fullWidth: !0,
                value: y,
                disabled: p || c,
                onChange: function (e) {
                  return b(e.target.value);
                },
                placeholder: be.ag._({ id: 'sJbIdI' }),
                sx: function (e) {
                  return {
                    height: '44px',
                    px: 2,
                    border: '1px solid '.concat(e.palette.divider),
                    borderRadius: '6px',
                    overflow: 'hidden',
                  };
                },
                endAdornment: v || c ? (0, k.jsx)(ve.Z, { color: 'inherit', size: '16px' }) : null,
              }),
              (0, k.jsx)(d.Z, {
                sx: { visibility: p || c ? 'hidden' : C ? 'visible' : 'hidden' },
                variant: 'helperText',
                color: 'error.main',
                children: (0, k.jsx)(o.cC, { id: 'a0YQoQ' }),
              }),
            ],
          });
        },
        je = n(6308),
        Ee = n(45640),
        Oe = function (e) {
          var t = e.feeTokens,
            n = e.selectedFeeToken,
            r = e.onFeeTokenChanged,
            a = e.bridgeFeeFormatted,
            i = e.bridgeFeeUSD,
            s = e.loading,
            u = (0, me.Z)(),
            d = (0, k.jsx)(C.G, {
              text: (0, k.jsx)(o.cC, { id: 'PLUB/s' }),
              children: (0, k.jsx)(o.cC, {
                id: 'Bsu7zX',
                components: {
                  0: (0, k.jsx)(g.rU, {
                    href: 'https://docs.chain.link/ccip/billing',
                    sx: { textDecoration: 'underline' },
                    variant: 'caption',
                    color: 'text.secondary',
                  }),
                },
              }),
            });
          return (0, k.jsxs)(v.X, {
            caption: d,
            captionVariant: 'description',
            mb: 4,
            children: [
              (0, k.jsx)(E.Z, {
                sx: { mr: 'auto' },
                children: (0, k.jsx)(O.Z, {
                  labelId: 'token-select-label',
                  value: n.symbol,
                  onChange: r,
                  sx: {
                    fontSize: '1.0em',
                    width: 'auto',
                    height: '24px',
                    minWidth: '70px',
                    borderRadius: '4px',
                    mb: 0.5,
                    maxWidth: '80px',
                    '.MuiSelect-select': {
                      backgroundColor: 'dark' === u.palette.mode ? '#292E41' : '#FFFFFF',
                      paddingLeft: '2px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
                  },
                  MenuProps: {
                    PaperProps: {
                      sx: {
                        backgroundColor: 'dark' === u.palette.mode ? '#292E41' : '#FFFFFF',
                        fontSize: '1.0em',
                      },
                    },
                  },
                  children: t.map(function (e) {
                    return (0, k.jsx)(
                      A.Z,
                      {
                        value: e.symbol,
                        sx: {
                          backgroundColor: 'dark' === u.palette.mode ? '#383D51' : '#FFFFFF',
                          '&:hover': {
                            backgroundColor: 'dark' === u.palette.mode ? '#292E41' : '#EAEBEF',
                          },
                          '&.Mui-selected, &.Mui-selected:hover': {
                            backgroundColor: 'dark' === u.palette.mode ? '#292E41' : '#FFFFFF',
                            boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.05)',
                          },
                        },
                        children: (0, k.jsxs)(c.Z, {
                          display: 'flex',
                          alignItems: 'center',
                          children: [
                            (0, k.jsx)(Ee.T1, {
                              sx: { fontSize: '1em', paddingRight: '4px' },
                              symbol: e.symbol,
                            }),
                            e.symbol,
                          ],
                        }),
                      },
                      e.symbol
                    );
                  }),
                }),
              }),
              a || s
                ? s
                  ? (0, k.jsx)(f.Z, {
                      variant: 'rectangular',
                      height: 20,
                      width: 100,
                      sx: { borderRadius: '4px' },
                    })
                  : (0, k.jsxs)(l.Z, {
                      direction: 'column',
                      alignItems: 'flex-end',
                      position: 'relative',
                      children: [
                        (0, k.jsxs)(l.Z, {
                          direction: 'row',
                          alignItems: 'center',
                          children: [
                            (0, k.jsx)(Ee.T1, {
                              symbol: null === n || void 0 === n ? void 0 : n.symbol,
                              sx: { mr: 1, fontSize: '16px' },
                            }),
                            (0, k.jsx)(fe.B, {
                              value: a,
                              symbol: null === n || void 0 === n ? void 0 : n.symbol,
                              variant: 'secondary14',
                            }),
                          ],
                        }),
                        (0, k.jsx)(fe.B, {
                          value: i,
                          variant: 'helperText',
                          compact: !0,
                          symbol: 'USD',
                          color: 'text.secondary',
                          sx: { position: 'absolute', top: '20px' },
                        }),
                      ],
                    })
                : (0, k.jsx)(je.J, { variant: 'secondary14', color: 'text.secondary' }),
            ],
          });
        },
        Ae = JSON.parse(
          '[{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"armProxy","type":"address"},{"internalType":"bool","name":"allowlistEnabled","type":"bool"},{"internalType":"bool","name":"acceptLiquidity","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getBridgeLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBridgedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"remoteChainSelector","type":"uint64"}],"name":"getCurrentOutboundRateLimiterState","outputs":[{"components":[{"internalType":"uint128","name":"tokens","type":"uint128"},{"internalType":"uint32","name":"lastUpdated","type":"uint32"},{"internalType":"bool","name":"isEnabled","type":"bool"},{"internalType":"uint128","name":"capacity","type":"uint128"},{"internalType":"uint128","name":"rate","type":"uint128"}],"internalType":"struct RateLimiter.TokenBucket","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}]'
        ),
        ke = n(32046),
        we = n(84243),
        Fe = n(61744),
        De = n(23279),
        Se = n.n(De),
        Ie = JSON.parse(
          '[{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}]'
        ),
        Re = n(27484),
        Ne = n.n(Re),
        Be = n(84110),
        Ze = n.n(Be);
      Ne().extend(Ze());
      function Pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pe(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Pe(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var Le = se.xz[0],
        _e = G.ei[Le.chainId],
        Ue = function () {
          var e,
            t,
            n,
            r,
            i = (0, a.vR)(),
            E = i.mainTxState,
            O = i.txError,
            A = i.close,
            w = i.gasLimit,
            F = (0, L.Y)(function (e) {
              return e.account;
            }),
            N = (0, x.useState)(F),
            H = N[0],
            ee = N[1],
            te = (0, x.useState)(''),
            ne = te[0],
            re = te[1],
            ae = (0, x.useState)(!1),
            ie = ae[0],
            oe = ae[1],
            ue = (0, z.Z)(),
            de = ue.readOnlyModeAddress,
            le = ue.chainId,
            me = (0, x.useState)(
              null !==
                (e = se.xz.find(function (e) {
                  return e.chainId === le;
                })) && void 0 !== e
                ? e
                : Le
            ),
            fe = me[0],
            be = me[1],
            he = se.xz.find(function (e) {
              return e.chainId !== fe.chainId;
            }),
            xe = (0, x.useState)(he),
            ge = xe[0],
            ve = xe[1],
            Te =
              ((n = fe.chainId),
              (0, Z.a)({
                queryFn: (function () {
                  var e = (0, R.Z)(
                    B().mark(function e() {
                      var t, r, a, i, o;
                      return B().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = (0, G.VH)(n)),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  t.send('eth_getBlockByNumber', ['finalized', !1])
                                );
                              case 4:
                                return (
                                  (r = e.sent),
                                  (a = parseInt(r.timestamp, 16)),
                                  (i = Ne()().unix()),
                                  (o = Ne()
                                    .unix(i + (i - a) + 120)
                                    .fromNow()),
                                  e.abrupt('return', o)
                                );
                              case 11:
                                return (
                                  (e.prev = 11),
                                  (e.t0 = e.catch(1)),
                                  console.error('Error fetching finality time', e.t0),
                                  e.abrupt(
                                    'return',
                                    Ne()
                                      .unix(Ne()().unix() + 1080)
                                      .fromNow()
                                  )
                                );
                              case 15:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 11]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
                queryKey: ['getFinalityTime', n],
                staleTime: 0,
              })),
            je = Te.data,
            Ee = Te.isFetching,
            De = function (e) {
              return se.Pp.filter(function (t) {
                return t.sourceChainId === e;
              }).flatMap(function (e) {
                return e.feeTokens;
              });
            },
            Re = De(fe.chainId),
            Be = (0, W.h)(Re, fe.chainId, F),
            Ze = Be.data,
            Pe = Be.isFetching,
            Ue = (0, x.useState)(
              (r = Ze || Re).find(function (e) {
                return 'GHO' === e.symbol;
              }) || r[0]
            ),
            Ge = Ue[0],
            He = Ue[1];
          (0, x.useEffect)(
            function () {
              Ze && Ze.length > 0 && !Ge && He(Ze[0]);
            },
            [Ze, fe]
          ),
            (0, x.useEffect)(
              function () {
                re(''), oe(!1);
              },
              [fe]
            );
          var Ve = (function (e, t) {
              var n = (0, U.z)().poolTokensBalanceService,
                r = (0, L.Y)(function (e) {
                  return e.account;
                });
              return (0, Z.a)({
                queryFn: (function () {
                  var a = (0, R.Z)(
                    B().mark(function a() {
                      var i, o, s, c, u, d, l;
                      return B().wrap(function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (i = (0, G.VH)(e.chainId)),
                                (o = new P.Contract(
                                  t,
                                  [
                                    'function latestAnswer() public view returns (int256 answer)',
                                    'function decimals() external view returns (uint8)',
                                  ],
                                  i
                                )),
                                (a.next = 4),
                                Promise.all([o.latestAnswer(), o.decimals()])
                              );
                            case 4:
                              return (
                                (s = a.sent),
                                (c = (0, I.Z)(s, 2)),
                                (u = c[0]),
                                (d = c[1]),
                                (a.next = 10),
                                n.getGhoBridgeBalancesTokenBalances(e, r)
                              );
                            case 10:
                              return (
                                (l = a.sent),
                                a.abrupt(
                                  'return',
                                  V(
                                    V({}, l),
                                    {},
                                    {
                                      tokenPriceUSD: u.toNumber() / M.O$.from(10).pow(d).toNumber(),
                                    }
                                  )
                                )
                              );
                            case 12:
                            case 'end':
                              return a.stop();
                          }
                      }, a);
                    })
                  );
                  return function () {
                    return a.apply(this, arguments);
                  };
                })(),
                queryKey: _.B.getGhoBridgeBalances(r, e),
                enabled: !!r,
                refetchInterval: _.g,
                initialData: {
                  bridgeTokenBalance: '0',
                  bridgeTokenBalanceFormatted: '0',
                  tokenPriceUSD: 1,
                  address: e.addresses.GHO_TOKEN_ADDRESS,
                },
              });
            })(
              Object.values(G.ei).find(function (e) {
                return e.chainId === fe.chainId;
              }) || _e,
              (0, se.Uw)(fe.chainId).tokenOracle
            ),
            We = Ve.data,
            ze = Ve.isFetching,
            Ke = le !== fe.chainId,
            Ye = (function (e) {
              var t = e.sourceChainId,
                n = e.destinationChainId,
                r = e.amount,
                a = e.sourceTokenAddress,
                i = e.destinationAccount,
                o = e.feeToken,
                s = e.feeTokenOracle,
                c = (0, x.useState)(),
                u = c[0],
                d = c[1],
                l = (0, x.useState)(''),
                p = l[0],
                m = l[1],
                f = (0, x.useState)(''),
                y = f[0],
                g = f[1],
                v = (0, x.useState)(''),
                T = v[0],
                C = v[1],
                j = (0, x.useState)(!1),
                E = j[0],
                O = j[1],
                A = (0, x.useState)(),
                k = A[0],
                w = A[1],
                F = (0, x.useMemo)(
                  function () {
                    return Se()(
                      (0, R.Z)(
                        B().mark(function e() {
                          var c,
                            u,
                            l,
                            p,
                            f,
                            y,
                            x,
                            v,
                            T,
                            j,
                            E,
                            A,
                            k,
                            F,
                            D,
                            S,
                            R,
                            N,
                            Z,
                            M,
                            L,
                            _,
                            U,
                            H,
                            V,
                            W;
                          return B().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (c = (0, G.VH)(t)),
                                      (u = (0, se.is)(t)),
                                      (l = new P.Contract(u, ce, c)),
                                      (e.prev = 3),
                                      (p = [
                                        {
                                          token: a,
                                          amount: (0, h.parseUnits)(r, 18).toString() || '0',
                                        },
                                      ]),
                                      (f = ke.id('CCIP EVMExtraArgsV1').slice(0, 10)),
                                      (y = we.$.encode(['uint256'], [0])),
                                      (x = f + y.slice(2)),
                                      (v = {
                                        receiver: we.$.encode(['address'], [i]),
                                        data: '0x',
                                        tokenAmounts: p,
                                        feeToken: o,
                                        extraArgs: x,
                                      }),
                                      (T = (0, se.nB)(n)),
                                      (e.next = 12),
                                      l.getFee(T, v)
                                    );
                                  case 12:
                                    if (
                                      ((j = e.sent),
                                      (E = Fe.parseUnits(r, 18)),
                                      (A = E.sub(j)),
                                      o !== b.d &&
                                        (v.tokenAmounts = [{ token: a, amount: A.toString() }]),
                                      se.Pp.find(function (e) {
                                        return e.sourceChainId === t;
                                      }))
                                    ) {
                                      e.next = 20;
                                      break;
                                    }
                                    throw (
                                      (O(!1), Error('No lane config found for chain '.concat(t)))
                                    );
                                  case 20:
                                    if (o !== b.d) {
                                      e.next = 37;
                                      break;
                                    }
                                    if (
                                      (console.log('fee token ETH'),
                                      (F = se.Pp.find(function (e) {
                                        return e.sourceChainId === t;
                                      })))
                                    ) {
                                      e.next = 26;
                                      break;
                                    }
                                    throw (
                                      (O(!1), Error('No lane config found for chain '.concat(t)))
                                    );
                                  case 26:
                                    return (
                                      (D = new P.Contract(F.wrappedNativeOracle, Ie, c)),
                                      (e.next = 29),
                                      Promise.all([D.latestAnswer(), D.decimals()])
                                    );
                                  case 29:
                                    (S = e.sent),
                                      (R = (0, I.Z)(S, 2)),
                                      (N = R[0]),
                                      (Z = R[1]),
                                      (M = (0, h.formatUnits)(N, Z)),
                                      (k = Number((0, h.formatUnits)(j, 18)) * Number(M)),
                                      (e.next = 50);
                                    break;
                                  case 37:
                                    if (
                                      se.Pp.find(function (e) {
                                        return e.sourceChainId === t;
                                      })
                                    ) {
                                      e.next = 41;
                                      break;
                                    }
                                    throw (
                                      (O(!1), Error('No lane config found for chain '.concat(t)))
                                    );
                                  case 41:
                                    return (
                                      (L = new P.Contract(s, Ie, c)),
                                      (e.next = 44),
                                      Promise.all([L.latestAnswer(), L.decimals()])
                                    );
                                  case 44:
                                    (_ = e.sent),
                                      (U = (0, I.Z)(_, 2)),
                                      (H = U[0]),
                                      (V = U[1]),
                                      (W = (0, h.formatUnits)(H, V)),
                                      (k = Number((0, h.formatUnits)(j, 18)) * Number(W));
                                  case 50:
                                    C(k.toString()),
                                      d(v),
                                      g((0, h.formatEther)(j)),
                                      m(j.toString()),
                                      (e.next = 60);
                                    break;
                                  case 56:
                                    (e.prev = 56),
                                      (e.t0 = e.catch(3)),
                                      w(e.t0.message),
                                      console.error(e.t0);
                                  case 60:
                                    return (e.prev = 60), O(!1), e.finish(60);
                                  case 63:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[3, 56, 60, 63]]
                          );
                        })
                      ),
                      500
                    );
                  },
                  [r, n, t, a, i, o]
                );
              return (
                (0, x.useEffect)(
                  function () {
                    return (
                      r && a ? (O(!0), F()) : (O(!1), d(void 0), m(''), g('')),
                      function () {
                        F.cancel();
                      }
                    );
                  },
                  [r, F, a, o]
                ),
                {
                  message: u,
                  bridgeFee: p,
                  bridgeFeeFormatted: y,
                  loading: E,
                  latestAnswer: T,
                  error: k,
                }
              );
            })({
              sourceChainId: fe.chainId,
              destinationChainId: (null === ge || void 0 === ge ? void 0 : ge.chainId) || 0,
              amount: ne,
              sourceTokenAddress: (null === We || void 0 === We ? void 0 : We.address) || '',
              destinationAccount: H,
              feeToken: (null === Ge || void 0 === Ge ? void 0 : Ge.address) || '',
              feeTokenOracle: (null === Ge || void 0 === Ge ? void 0 : Ge.oracle) || '',
            }),
            qe = Ye.message,
            Je = Ye.bridgeFee,
            Xe = Ye.bridgeFeeFormatted,
            Qe = Ye.loading,
            $e = Ye.latestAnswer,
            et = Ye.error,
            tt = (function (e) {
              return (0, Z.a)({
                queryFn: (function () {
                  var t = (0, R.Z)(
                    B().mark(function t() {
                      var n, r, a, i, o, s, c, u;
                      return B().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                (n = se.Pp.find(function (t) {
                                  return t.sourceChainId === e;
                                }))
                              ) {
                                t.next = 3;
                                break;
                              }
                              throw Error('No sourceLaneConfig found');
                            case 3:
                              if (((r = (0, G.VH)(e)), (a = n.lockReleaseTokenPool))) {
                                t.next = 7;
                                break;
                              }
                              return t.abrupt('return', {
                                bridgeLimit: '-1',
                                currentBridgedAmount: '-1',
                                remainingAmount: '-1',
                              });
                            case 7:
                              return (
                                (i = new P.Contract(a, Ae, r)),
                                (t.next = 10),
                                Promise.all([i.getBridgeLimit(), i.getCurrentBridgedAmount()])
                              );
                            case 10:
                              return (
                                (o = t.sent),
                                (s = (0, I.Z)(o, 2)),
                                (c = s[0]),
                                (u = s[1]),
                                t.abrupt('return', {
                                  bridgeLimit: c.toString(),
                                  currentBridgedAmount: u.toString(),
                                  remainingAmount: c.sub(u).toString(),
                                })
                              );
                            case 15:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
                queryKey: ['getBridgeLimit', e],
                gcTime: 0,
                staleTime: 0,
              });
            })(fe.chainId),
            nt = tt.data,
            rt = tt.isInitialLoading,
            at = (function (e) {
              var t = e.destinationChainId,
                n = e.sourceChainId;
              return (0, Z.a)({
                queryFn: (function () {
                  var e = (0, R.Z)(
                    B().mark(function e() {
                      var r, a, i, o, s, c, u, d, l, p, m, f;
                      return B().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (a = se.Pp.find(function (e) {
                                  return e.sourceChainId === n;
                                }))
                              ) {
                                e.next = 3;
                                break;
                              }
                              throw Error('No sourceLaneConfig found');
                            case 3:
                              if (
                                (i =
                                  null !== (r = a.lockReleaseTokenPool) && void 0 !== r
                                    ? r
                                    : a.burnMintTokenPool)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return e.abrupt('return', { tokens: '0', capacity: '0', rate: '0' });
                            case 6:
                              return (
                                (o = (0, G.VH)(n)),
                                (s = new P.Contract(i, Ae, o)),
                                (c = (0, se.nB)(t)),
                                (e.next = 11),
                                s.getCurrentOutboundRateLimiterState(c)
                              );
                            case 11:
                              return (
                                (u = e.sent),
                                (d = (0, I.Z)(u, 5)),
                                (l = d[0]),
                                (p = d[2]),
                                (m = d[3]),
                                (f = d[4]),
                                e.abrupt('return', {
                                  tokens: p ? l.toString() : '0',
                                  capacity: m.toString(),
                                  rate: f.toString(),
                                })
                              );
                            case 18:
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
                queryKey: ['getRateLimit', t, n],
                staleTime: 0,
                refetchInterval: 5e3,
              });
            })({
              destinationChainId: (null === ge || void 0 === ge ? void 0 : ge.chainId) || 0,
              sourceChainId: fe.chainId,
            }),
            it = at.data,
            ot = at.isInitialLoading,
            st = rt || ot,
            ct = function (e) {
              return function (t) {
                'sourceNetwork' === e ? be(t) : ve(t);
              };
            },
            ut = !1,
            dt = !1,
            lt = (null === We || void 0 === We ? void 0 : We.bridgeTokenBalance) || '0',
            pt = '-1' !== (null === nt || void 0 === nt ? void 0 : nt.bridgeLimit),
            mt = (0, y.O)((null === nt || void 0 === nt ? void 0 : nt.remainingAmount) || '0');
          !st &&
            nt &&
            it &&
            (pt && mt.lt(lt)
              ? ((lt = nt.remainingAmount), (ut = !0), (dt = !1))
              : (0, y.O)(it.tokens).lt(lt) && ((lt = it.tokens), (dt = !0), (ut = !1)));
          var ft = (0, h.formatUnits)(lt, 18),
            yt = Number(ne) * We.tokenPriceUSD,
            bt = new y.O(ne || '0'),
            ht = new y.O(Xe || '0'),
            xt = y.O.max(0, bt.minus(ht)),
            gt = xt.toString(),
            vt =
              (null === Ze ||
              void 0 === Ze ||
              null ===
                (t = Ze.find(function (e) {
                  return e.address === Ge.address;
                })) ||
              void 0 === t
                ? void 0
                : t.balance) || '0',
            Tt =
              !Qe &&
              !Pe &&
              0 !== yt &&
              ((Ge.address !== b.d && xt.lte(0)) || (Ge.address === b.d && ht.gte(vt))),
            Ct = {
              amountToBridge: ne,
              isWrongNetwork: Ke,
              symbol: Y.JP,
              blocked: Qe || Pe || !H || st || Tt,
              decimals: 18,
              message: qe,
              fees: Je,
              sourceChainId: fe.chainId,
              destinationChainId: ge.chainId,
              tokenAddress: (null === We || void 0 === We ? void 0 : We.address) || b.d,
              isCustomFeeToken: Ge.address !== b.d,
            };
          if (O && O.blocking) return (0, k.jsx)(J.D, { txError: O });
          if (E.success)
            return (0, k.jsx)(Q.R, {
              customAction: (0, k.jsx)(c.Z, {
                mt: 5,
                children: (0, k.jsx)(u.Z, {
                  component: g.rU,
                  href: g.Z6.bridge,
                  variant: 'outlined',
                  size: 'small',
                  onClick: A,
                  children: (0, k.jsx)(o.cC, { id: 'MrmQHg' }),
                }),
              }),
              customText: (0, k.jsx)(o.cC, { id: 'TwJI9F' }),
              action: (0, k.jsx)(o.cC, { id: '9rWaKF' }),
            });
          var jt = (0, k.jsx)(C.G, {
              text: (0, k.jsx)(o.cC, { id: '+nuEh/' }),
              children: (0, k.jsx)(o.cC, {
                id: 'EzMQbh',
                components: {
                  0: (0, k.jsx)(g.rU, {
                    href: 'https://docs.chain.link/ccip/concepts#finality',
                    sx: { textDecoration: 'underline' },
                    variant: 'caption',
                    color: 'text.secondary',
                  }),
                },
              }),
            }),
            Et = (0, k.jsx)(C.G, {
              text: (0, k.jsx)(o.cC, { id: 'j+K1Xj' }),
              children: (0, k.jsx)(o.cC, { id: 'YXOWXM' }),
            });
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsxs)(c.Z, {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                children: [
                  (0, k.jsx)(d.Z, { variant: 'h2', children: (0, k.jsx)(o.cC, { id: 'eVqvtf' }) }),
                  F &&
                    (0, k.jsx)(c.Z, {
                      sx: { right: '0px' },
                      children: (0, k.jsx)(u.Z, {
                        component: g.rU,
                        href: g.Z6.bridge,
                        sx: { mr: 8 },
                        variant: 'surface',
                        size: 'small',
                        onClick: A,
                        children: (0, k.jsx)(o.cC, { id: '4wyw8H' }),
                      }),
                    }),
                ],
              }),
              (0, k.jsx)($.I, {
                networkName: (0, G.Mo)(fe.chainId).name,
                chainId: fe.chainId,
                event: { eventName: K.vh.SWITCH_NETWORK },
                sx: { my: 1, visibility: Ke && !de ? 'visible' : 'hidden' },
              }),
              F
                ? (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsxs)(l.Z, {
                        sx: { mb: 3 },
                        gap: 3,
                        direction: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        children: [
                          (0, k.jsx)(D, {
                            supportedBridgeMarkets: se.xz.filter(function (e) {
                              return e.chainId !== ge.chainId;
                            }),
                            onNetworkChange: ct('sourceNetwork'),
                            defaultNetwork: fe,
                          }),
                          (0, k.jsx)(p.Z, {
                            onClick: function () {
                              var e = fe;
                              be(ge), ve(e);
                              var t = De(ge.chainId);
                              He(t[0]);
                            },
                            sx: {
                              border: '1px solid',
                              borderColor: 'divider',
                              position: 'absolute',
                              backgroundColor: 'background.paper',
                              mt: -1,
                              '&:hover': { backgroundColor: 'background.surface' },
                            },
                            children: (0, k.jsx)(m.Z, {
                              sx: { color: 'primary.main', fontSize: '18px' },
                              children: (0, k.jsx)(s.Z, {}),
                            }),
                          }),
                          (0, k.jsx)(D, {
                            supportedBridgeMarkets: se.xz.filter(function (e) {
                              return e.chainId !== fe.chainId;
                            }),
                            onNetworkChange: ct('destinationNetwork'),
                            defaultNetwork: ge,
                          }),
                        ],
                      }),
                      (0, k.jsx)(q.W, {
                        disableInput:
                          !Qe &&
                          '0' === (null === We || void 0 === We ? void 0 : We.bridgeTokenBalance),
                        value: ne,
                        onChange: function (e) {
                          '-1' === e ? (re(ft), oe(!0)) : (re(e), oe(!1));
                        },
                        usdValue: yt.toString(),
                        symbol: Y.JP,
                        assets: [
                          {
                            balance: We.bridgeTokenBalanceFormatted,
                            address: We.address,
                            symbol: Y.JP,
                            iconSymbol: Y.JP,
                          },
                        ],
                        maxValue: ft,
                        inputTitle: (0, k.jsx)(o.cC, { id: 'Xg5y9S' }),
                        balanceText: (0, k.jsx)(o.cC, { id: 'T4OhVl' }),
                        sx: { width: '100%' },
                        loading: ze || st,
                        isMaxSelected: ie,
                      }),
                      (0, k.jsx)(c.Z, {
                        sx: { mt: 3 },
                        children: (0, k.jsx)(Ce, {
                          connectedAccount: F,
                          onInputValid: function (e) {
                            ee(e);
                          },
                          onInputError: function () {
                            return ee('');
                          },
                          sourceChainId: fe.chainId,
                        }),
                      }),
                      (0, k.jsxs)(j.m6, {
                        gasLimit: w,
                        chainId: fe.chainId,
                        children: [
                          (0, k.jsx)(ye, {
                            amount: ne,
                            maxAmountToBridgeFormatted: ft,
                            maxAmountReducedDueToBridgeLimit: ie && ut,
                            maxAmountReducedDueToRateLimit: ie && dt,
                            refillRate: (null === it || void 0 === it ? void 0 : it.rate) || '0',
                            maxRateLimitCapacity:
                              (null === it || void 0 === it ? void 0 : it.capacity) || '0',
                          }),
                          (0, k.jsx)(Oe, {
                            feeTokens: Ze || [],
                            selectedFeeToken: Ge,
                            onFeeTokenChanged: function (e) {
                              var t =
                                null === Ze || void 0 === Ze
                                  ? void 0
                                  : Ze.find(function (t) {
                                      return t.symbol === e.target.value;
                                    });
                              He(t || Re[0]);
                            },
                            bridgeFeeFormatted: Xe,
                            bridgeFeeUSD: $e,
                            loading: Qe || Pe,
                          }),
                          Ge.address !== b.d &&
                            (0, k.jsx)(j.oD, {
                              description: Et,
                              iconSymbol: Y.JP,
                              symbol: Y.JP,
                              value: gt,
                              loading: Qe || Pe,
                            }),
                          (0, k.jsx)(v.X, {
                            caption: jt,
                            captionVariant: 'description',
                            mb: 4,
                            children: (0, k.jsx)(c.Z, {
                              sx: { display: 'flex', alignItems: 'center' },
                              children: Ee
                                ? (0, k.jsx)(f.Z, {
                                    variant: 'rectangular',
                                    height: 20,
                                    width: 100,
                                    sx: { borderRadius: '4px' },
                                  })
                                : (0, k.jsx)(d.Z, { variant: 'secondary14', children: je }),
                            }),
                          }),
                          (0, k.jsx)(v.X, {}),
                          ' ',
                          Tt &&
                            (0, k.jsx)(T.v, {
                              severity: 'warning',
                              sx: { my: 0 },
                              children: (0, k.jsx)(d.Z, {
                                variant: 'caption',
                                children: (0, k.jsx)(o.cC, { id: 'SWIgh4' }),
                              }),
                            }),
                        ],
                      }),
                      O && (0, k.jsx)(X.Q, { txError: O }),
                      et &&
                        (0, k.jsx)(T.v, {
                          severity: 'error',
                          sx: { mt: 4 },
                          icon: !1,
                          children: (0, k.jsx)(d.Z, {
                            variant: 'caption',
                            children: (0, k.jsx)(o.cC, { id: 'cZOeBk' }),
                          }),
                        }),
                      (0, k.jsx)(pe, Me({}, Ct)),
                    ],
                  })
                : (0, k.jsxs)(c.Z, {
                    sx: { display: 'flex', flexDirection: 'column', mt: 4, alignItems: 'center' },
                    children: [
                      (0, k.jsx)(d.Z, {
                        sx: { mb: 6, textAlign: 'center' },
                        color: 'text.secondary',
                        children: (0, k.jsx)(o.cC, { id: '8t/M0y' }),
                      }),
                      (0, k.jsx)(S.p, {}),
                    ],
                  }),
            ],
          });
        },
        Ge = function () {
          var e = (0, a.vR)(),
            t = e.type,
            n = e.close;
          return (0, k.jsx)(r.P, {
            open: t === a.w8.Bridge,
            setOpen: n,
            children: (0, k.jsx)(Ue, {}),
          });
        };
    },
    40429: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return m;
        },
      });
      var r = n(57499),
        a = n(5506),
        i = n(52758),
        o = n(80822),
        s = n(53219),
        c = n(15861),
        u = n(23795),
        d = n(69417),
        l = n(44949),
        p = n(85893),
        m = function (e) {
          var t = e.txError,
            n = (0, l.vR)().close;
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsxs)(o.Z, {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: '92px',
                },
                children: [
                  (0, p.jsx)(o.Z, {
                    sx: {
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'error.200',
                      borderRadius: '50%',
                      mt: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, p.jsx)(s.Z, {
                      sx: { color: 'error.main', fontSize: '32px' },
                      children: (0, p.jsx)(a.Z, {}),
                    }),
                  }),
                  (0, p.jsx)(c.Z, {
                    sx: { mt: 2 },
                    variant: 'h2',
                    children: (0, p.jsx)(r.cC, { id: 'u3ZeYl' }),
                  }),
                  (0, p.jsx)(c.Z, {
                    children: (0, p.jsx)(r.cC, {
                      id: 'DxfsGs',
                      components: {
                        0: (0, p.jsx)(u.Z, { href: 'https://discord.com/invite/aave' }),
                        1: (0, p.jsx)(u.Z, { href: 'https://github.com/aave/interface' }),
                      },
                    }),
                  }),
                  (0, p.jsxs)(d.Z, {
                    variant: 'outlined',
                    onClick: function () {
                      return navigator.clipboard.writeText(t.rawError.message.toString());
                    },
                    size: 'small',
                    sx: { mt: 6 },
                    children: [
                      (0, p.jsx)(r.cC, { id: 'X/ITG9' }),
                      (0, p.jsx)(s.Z, {
                        sx: { ml: 0.5, fontSize: '12px' },
                        children: (0, p.jsx)(i.Z, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, p.jsx)(o.Z, {
                sx: { display: 'flex', flexDirection: 'column', mt: 12 },
                children: (0, p.jsx)(d.Z, {
                  onClick: n,
                  variant: 'contained',
                  size: 'large',
                  sx: { minHeight: '44px' },
                  children: (0, p.jsx)(r.cC, { id: 'yz7wBu' }),
                }),
              }),
            ],
          });
        };
    },
    44880: function (e, t, n) {
      'use strict';
      n.d(t, {
        R: function () {
          return b;
        },
      });
      var r = n(57499),
        a = n(75331),
        i = n(2734),
        o = n(80822),
        s = n(15861),
        c = n(69417),
        u = n(67294),
        d = n(215),
        l = n(32867),
        p = n(45640),
        m = n(72005),
        f = n(60386),
        y = n(85893),
        b = function (e) {
          var t = e.txHash,
            n = e.action,
            b = e.amount,
            h = e.symbol,
            x = e.collateral,
            g = e.rate,
            v = e.addToken,
            T = e.customAction,
            C = e.customText,
            j = (0, m.Z)().addERC20Token,
            E = (0, u.useState)(''),
            O = E[0],
            A = E[1],
            k = (0, i.Z)();
          return (0, y.jsx)(f.R, {
            txHash: t,
            children: (0, y.jsxs)(o.Z, {
              sx: {
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              },
              children: [
                n &&
                  b &&
                  h &&
                  (0, y.jsx)(s.Z, {
                    children: (0, y.jsx)(r.cC, {
                      id: 'wAOL+X',
                      values: { action: n, symbol: h },
                      components: {
                        0: (0, y.jsx)(l.B, {
                          value: Number(b),
                          compact: !0,
                          variant: 'secondary14',
                        }),
                      },
                    }),
                  }),
                T && (0, y.jsxs)(s.Z, { children: [C, T] }),
                !n &&
                  !b &&
                  h &&
                  (0, y.jsxs)(s.Z, {
                    children: ['Your ', h, ' ', x ? 'now' : 'is not', ' used as collateral'],
                  }),
                g &&
                  (0, y.jsx)(s.Z, {
                    children: (0, y.jsx)(r.cC, {
                      id: 'f3W0Ej',
                      values: { 0: g === a.tk.Variable ? 'variable' : 'stable' },
                    }),
                  }),
                v &&
                  h &&
                  (0, y.jsxs)(o.Z, {
                    sx: function (e) {
                      return {
                        border:
                          'dark' === e.palette.mode
                            ? '1px solid '.concat(e.palette.divider)
                            : 'none',
                        background: 'dark' === e.palette.mode ? 'none' : '#F7F7F9',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: '24px',
                      };
                    },
                    children: [
                      (0, y.jsx)(p.T1, {
                        symbol: v.symbol,
                        aToken: !(!v || !v.aToken),
                        sx: { fontSize: '32px', mt: '12px', mb: '8px' },
                      }),
                      (0, y.jsx)(s.Z, {
                        variant: 'description',
                        color: 'text.primary',
                        sx: { mx: '24px' },
                        children: (0, y.jsx)(r.cC, {
                          id: 'YyydIq',
                          values: { 0: v && v.aToken ? 'aToken ' : 'token ' },
                        }),
                      }),
                      (0, y.jsxs)(c.Z, {
                        onClick: function () {
                          j({
                            address: v.address,
                            decimals: v.decimals,
                            symbol: v.aToken ? '' : v.symbol,
                            image: /_/.test(v.symbol) ? void 0 : O,
                          });
                        },
                        variant: 'dark' === k.palette.mode ? 'outlined' : 'contained',
                        size: 'medium',
                        sx: { mt: '8px', mb: '12px' },
                        children: [
                          v.symbol &&
                            !/_/.test(v.symbol) &&
                            (0, y.jsx)(p.Js, {
                              symbol: v.symbol,
                              onImageGenerated: A,
                              aToken: v.aToken,
                            }),
                          (0, y.jsx)(d.o, { sx: { width: '20px', height: '20px' } }),
                          (0, y.jsx)(s.Z, {
                            variant: 'buttonM',
                            color: 'white',
                            ml: '4px',
                            children: (0, y.jsx)(r.cC, { id: '8Q51DU' }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
    },
    97986: function (e, t, n) {
      'use strict';
      n.d(t, {
        ou: function () {
          return r;
        },
      });
      var r = {
        USDC: {
          decimals: 6,
          id: 0,
          UNDERLYING: '0xba50Cd2A20f6DA35D788639E581bca8d0B5d4D5f',
          A_TOKEN: '0x10F1A9D11CDf50041f3f8cB7191CBE2f31750ACC',
          V_TOKEN: '0xFB3e85601b7fEb3691bbb8779Ef0E1069E347204',
          INTEREST_RATE_STRATEGY: '0x705F7D9Ed0Ac3724eC974DaF6A099bA59d254b92',
          ORACLE: '0xd30e2101a97dcbAeBCBC04F14C3f624E67A35165',
          STATA_TOKEN: '0xf430cb6E2b85f99222fBFA6dFEa18Ff60FA6B32a',
        },
        USDT: {
          decimals: 6,
          id: 1,
          UNDERLYING: '0x0a215D8ba66387DCA84B284D18c3B4ec3de6E54a',
          A_TOKEN: '0xcE3CAae5Ed17A7AafCEEbc897DE843fA6CC0c018',
          V_TOKEN: '0xE3C742c88EE6A610157C16b60bBDD62351daeE39',
          INTEREST_RATE_STRATEGY: '0x705F7D9Ed0Ac3724eC974DaF6A099bA59d254b92',
          ORACLE: '0x3ec8593F930EA45ea58c968260e6e9FF53FC934f',
          STATA_TOKEN: '0xf63dA51069FAe9448747FA425F8Cb84B0149eC0F',
        },
        WBTC: {
          decimals: 8,
          id: 2,
          UNDERLYING: '0x54114591963CF60EF3aA63bEfD6eC263D98145a4',
          A_TOKEN: '0x47Db195BAf46898302C06c31bCF46c01C64ACcF9',
          V_TOKEN: '0x638291B5Ccb9fEd339FdD351Eb086e607fCA9561',
          INTEREST_RATE_STRATEGY: '0x705F7D9Ed0Ac3724eC974DaF6A099bA59d254b92',
          ORACLE: '0x0FB99723Aee6f420beAD13e6bBB79b7E6F034298',
          STATA_TOKEN: '0x5d7538579560F5fdD54F9D264DBe0e697b5BF668',
        },
        WETH: {
          decimals: 18,
          id: 3,
          UNDERLYING: '0x4200000000000000000000000000000000000006',
          A_TOKEN: '0x73a5bB60b0B0fc35710DDc0ea9c407031E31Bdbb',
          V_TOKEN: '0x562abf6562d6A2b165aDa02b5946bc3E7b4dD653',
          INTEREST_RATE_STRATEGY: '0x705F7D9Ed0Ac3724eC974DaF6A099bA59d254b92',
          ORACLE: '0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1',
          STATA_TOKEN: '0xde7820fFb73059608928cb9e29F6EB1369Ad1342',
        },
        cbETH: {
          decimals: 18,
          id: 4,
          UNDERLYING: '0xD171b9694f7A2597Ed006D41f7509aaD4B485c4B',
          A_TOKEN: '0x9Fd6d1DBAd7c052e0c43f46df36eEc6a68814B63',
          V_TOKEN: '0xa1a483652b157FF006292CDb0e9EB7FFad2a5142',
          INTEREST_RATE_STRATEGY: '0x705F7D9Ed0Ac3724eC974DaF6A099bA59d254b92',
          ORACLE: '0x3c65e28D357a37589e1C7C86044a9f44dDC17134',
          STATA_TOKEN: '0x9F56ff6c3441bb89eBFf1c0bc75D4096C33230d1',
        },
        LINK: {
          decimals: 18,
          id: 5,
          UNDERLYING: '0x810D46F9a9027E28F9B01F75E2bdde839dA61115',
          A_TOKEN: '0x0aD46dE765522399d7b25B438b230A894d72272B',
          V_TOKEN: '0xBA42C6752F347e3c22DD0A4e5578dCB0137C1325',
          INTEREST_RATE_STRATEGY: '0x705F7D9Ed0Ac3724eC974DaF6A099bA59d254b92',
          ORACLE: '0xb113F5A928BCfF189C998ab20d753a47F9dE5A61',
          STATA_TOKEN: '0xFb3AB5ABd3dE4703C0F296B1fe6f5E570e1631Ff',
        },
      };
    },
    28052: function (e, t, n) {
      'use strict';
      n.d(t, {
        EZ: function () {
          return r;
        },
      });
      var r = '0xB94Ab28c6869466a46a42abA834ca2B3cECCA5eB';
    },
    20805: function (e, t, n) {
      'use strict';
      n.d(t, {
        EZ: function () {
          return r;
        },
      });
      var r = '0x98217A06721Ebf727f2C8d9aD7718ec28b7aAe34';
    },
    39973: function (e, t, n) {
      'use strict';
      n.d(t, {
        EZ: function () {
          return r;
        },
      });
      var r = '0x06179f7C1be40863405f374E7f5F8806c728660A';
    },
    52758: function (e, t, n) {
      'use strict';
      var r = n(67294);
      const a = r.forwardRef(function (e, t) {
        return r.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 2,
              stroke: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          r.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
          })
        );
      });
      t.Z = a;
    },
    7170: function (e) {
      'use strict';
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"wrappedNative","type":"address"},{"internalType":"address","name":"armProxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"BadARMSignal","type":"error"},{"inputs":[],"name":"FailedToSendValue","type":"error"},{"inputs":[],"name":"InsufficientFeeTokenAmount","type":"error"},{"inputs":[],"name":"InvalidMsgValue","type":"error"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"InvalidRecipientAddress","type":"error"},{"inputs":[{"internalType":"uint64","name":"chainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"name":"OffRampMismatch","type":"error"},{"inputs":[],"name":"OnlyOffRamp","type":"error"},{"inputs":[{"internalType":"uint64","name":"destChainSelector","type":"uint64"}],"name":"UnsupportedDestinationChain","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"messageId","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"offRamp","type":"address"},{"indexed":false,"internalType":"bytes32","name":"calldataHash","type":"bytes32"}],"name":"MessageExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"offRamp","type":"address"}],"name":"OffRampAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"offRamp","type":"address"}],"name":"OffRampRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"destChainSelector","type":"uint64"},{"indexed":false,"internalType":"address","name":"onRamp","type":"address"}],"name":"OnRampSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"MAX_RET_BYTES","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint64","name":"destChainSelector","type":"uint64"},{"internalType":"address","name":"onRamp","type":"address"}],"internalType":"struct Router.OnRamp[]","name":"onRampUpdates","type":"tuple[]"},{"components":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"internalType":"struct Router.OffRamp[]","name":"offRampRemoves","type":"tuple[]"},{"components":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"internalType":"struct Router.OffRamp[]","name":"offRampAdds","type":"tuple[]"}],"name":"applyRampUpdates","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"destinationChainSelector","type":"uint64"},{"components":[{"internalType":"bytes","name":"receiver","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Client.EVMTokenAmount[]","name":"tokenAmounts","type":"tuple[]"},{"internalType":"address","name":"feeToken","type":"address"},{"internalType":"bytes","name":"extraArgs","type":"bytes"}],"internalType":"struct Client.EVM2AnyMessage","name":"message","type":"tuple"}],"name":"ccipSend","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getArmProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"destinationChainSelector","type":"uint64"},{"components":[{"internalType":"bytes","name":"receiver","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Client.EVMTokenAmount[]","name":"tokenAmounts","type":"tuple[]"},{"internalType":"address","name":"feeToken","type":"address"},{"internalType":"bytes","name":"extraArgs","type":"bytes"}],"internalType":"struct Client.EVM2AnyMessage","name":"message","type":"tuple"}],"name":"getFee","outputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOffRamps","outputs":[{"components":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"internalType":"struct Router.OffRamp[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"destChainSelector","type":"uint64"}],"name":"getOnRamp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"chainSelector","type":"uint64"}],"name":"getSupportedTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWrappedNative","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"chainSelector","type":"uint64"}],"name":"isChainSupported","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"address","name":"offRamp","type":"address"}],"name":"isOffRamp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"messageId","type":"bytes32"},{"internalType":"uint64","name":"sourceChainSelector","type":"uint64"},{"internalType":"bytes","name":"sender","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct Client.EVMTokenAmount[]","name":"destTokenAmounts","type":"tuple[]"}],"internalType":"struct Client.Any2EVMMessage","name":"message","type":"tuple"},{"internalType":"uint16","name":"gasForCallExactCheck","type":"uint16"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"routeMessage","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"retData","type":"bytes"},{"internalType":"uint256","name":"gasUsed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wrappedNative","type":"address"}],"name":"setWrappedNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"typeAndVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'
      );
    },
  },
]);
