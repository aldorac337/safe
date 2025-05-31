'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8606],
  {
    52102: function (e, t) {
      var n, o;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.DirectContractMethods =
          t.DirectContractMethodsWithFeeModel =
          t.ContractMethod =
          t.ContractMethodV6 =
          t.ContractMethodV5 =
          t.SwapSide =
            void 0),
        (function (e) {
          (e.BUY = 'BUY'), (e.SELL = 'SELL');
        })(t.SwapSide || (t.SwapSide = {})),
        (function (e) {
          (e.swapOnUniswap = 'swapOnUniswap'),
            (e.buyOnUniswap = 'buyOnUniswap'),
            (e.swapOnUniswapFork = 'swapOnUniswapFork'),
            (e.buyOnUniswapFork = 'buyOnUniswapFork'),
            (e.swapOnUniswapV2Fork = 'swapOnUniswapV2Fork'),
            (e.buyOnUniswapV2Fork = 'buyOnUniswapV2Fork'),
            (e.simpleBuy = 'simpleBuy'),
            (e.simpleSwap = 'simpleSwap'),
            (e.multiSwap = 'multiSwap'),
            (e.megaSwap = 'megaSwap'),
            (e.protectedMultiSwap = 'protectedMultiSwap'),
            (e.protectedMegaSwap = 'protectedMegaSwap'),
            (e.protectedSimpleSwap = 'protectedSimpleSwap'),
            (e.protectedSimpleBuy = 'protectedSimpleBuy'),
            (e.swapOnZeroXv2 = 'swapOnZeroXv2'),
            (e.swapOnZeroXv4 = 'swapOnZeroXv4'),
            (e.buy = 'buy'),
            (e.directUniV3Swap = 'directUniV3Swap'),
            (e.directUniV3Buy = 'directUniV3Buy'),
            (e.directCurveV1Swap = 'directCurveV1Swap'),
            (e.directCurveV2Swap = 'directCurveV2Swap'),
            (e.directBalancerV2GivenInSwap = 'directBalancerV2GivenInSwap'),
            (e.directBalancerV2GivenOutSwap = 'directBalancerV2GivenOutSwap');
        })((n = t.ContractMethodV5 || (t.ContractMethodV5 = {}))),
        (function (e) {
          (e.swapExactAmountIn = 'swapExactAmountIn'),
            (e.swapExactAmountOut = 'swapExactAmountOut'),
            (e.swapExactAmountInOnUniswapV2 = 'swapExactAmountInOnUniswapV2'),
            (e.swapExactAmountOutOnUniswapV2 = 'swapExactAmountOutOnUniswapV2'),
            (e.swapExactAmountInOnUniswapV3 = 'swapExactAmountInOnUniswapV3'),
            (e.swapExactAmountOutOnUniswapV3 = 'swapExactAmountOutOnUniswapV3'),
            (e.swapExactAmountInOnBalancerV2 = 'swapExactAmountInOnBalancerV2'),
            (e.swapExactAmountOutOnBalancerV2 = 'swapExactAmountOutOnBalancerV2'),
            (e.swapExactAmountInOnCurveV1 = 'swapExactAmountInOnCurveV1'),
            (e.swapExactAmountInOnCurveV2 = 'swapExactAmountInOnCurveV2'),
            (e.swapOnAugustusRFQTryBatchFill = 'swapOnAugustusRFQTryBatchFill'),
            (e.swapExactAmountInOutOnMakerPSM = 'swapExactAmountInOutOnMakerPSM');
        })((o = t.ContractMethodV6 || (t.ContractMethodV6 = {}))),
        (t.ContractMethod = { ...n, ...o }),
        (t.DirectContractMethodsWithFeeModel = [
          n.directUniV3Swap,
          n.directUniV3Buy,
          n.directCurveV1Swap,
          n.directCurveV2Swap,
          n.directBalancerV2GivenInSwap,
          n.directBalancerV2GivenOutSwap,
          o.swapExactAmountInOnUniswapV2,
          o.swapExactAmountOutOnUniswapV2,
          o.swapExactAmountInOnUniswapV3,
          o.swapExactAmountOutOnUniswapV3,
          o.swapExactAmountInOnBalancerV2,
          o.swapExactAmountOutOnBalancerV2,
          o.swapExactAmountInOnCurveV1,
          o.swapExactAmountInOnCurveV2,
        ]),
        (t.DirectContractMethods = [
          n.swapOnUniswap,
          n.buyOnUniswap,
          n.swapOnUniswapFork,
          n.buyOnUniswapFork,
          n.swapOnUniswapV2Fork,
          n.buyOnUniswapV2Fork,
          n.swapOnZeroXv2,
          n.swapOnZeroXv4,
          o.swapOnAugustusRFQTryBatchFill,
          o.swapExactAmountInOutOnMakerPSM,
        ].concat(t.DirectContractMethodsWithFeeModel));
    },
    32524: function (e, t, n) {
      t.OZ = t.PC = void 0;
      var o = n(45473);
      var u = n(52102);
      Object.defineProperty(t, 'PC', {
        enumerable: !0,
        get: function () {
          return u.SwapSide;
        },
      }),
        Object.defineProperty(t, 'OZ', {
          enumerable: !0,
          get: function () {
            return u.ContractMethod;
          },
        });
    },
    45473: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ParaSwapVersion = void 0),
        (function (e) {
          (e.V5 = '5'), (e.V6 = '6.2');
        })(t.ParaSwapVersion || (t.ParaSwapVersion = {}));
    },
    43138: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    9150: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    65980: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    13410: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    40814: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    72101: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    69757: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    56708: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    98922: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    13022: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    67083: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    55042: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    49462: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    13617: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    93960: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    18428: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    98267: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    9679: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    44834: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    37790: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    83781: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    29563: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    24848: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    429: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.assert = void 0),
        (t.assert = function (e, t = 'no additional info provided') {
          if (!e) throw new Error('Assertion Error: ' + t);
        });
    },
    54544: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.createFactoryWithConstraint = void 0);
      t.createFactoryWithConstraint = () => (e) => e;
    },
    85751: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.isExact = void 0);
      t.isExact = () => (e) => e;
    },
    57515: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.noop = void 0),
        (t.noop = function (...e) {});
    },
    46094: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.UnreachableCaseError = void 0);
      class n extends Error {
        constructor(e) {
          super(`Unreachable case: ${e}`);
        }
      }
      t.UnreachableCaseError = n;
    },
    18649: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    82449: function (e, t, n) {
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, o) {
                void 0 === o && (o = n);
                var u = Object.getOwnPropertyDescriptor(t, n);
                (u && !('get' in u ? !t.__esModule : u.writable || u.configurable)) ||
                  (u = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, o, u);
              }
            : function (e, t, n, o) {
                void 0 === o && (o = n), (e[o] = t[n]);
              }),
        u =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              'default' === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
          };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        u(n(97604), t),
        u(n(56708), t),
        u(n(29287), t),
        u(n(2334), t),
        u(n(12633), t),
        u(n(18407), t),
        u(n(6659), t),
        u(n(40814), t),
        u(n(13410), t),
        u(n(83781), t),
        u(n(37790), t),
        u(n(49847), t),
        u(n(51330), t),
        u(n(83673), t),
        u(n(27478), t),
        u(n(8773), t),
        u(n(16712), t),
        u(n(22128), t),
        u(n(5280), t),
        u(n(4330), t),
        u(n(38301), t),
        u(n(47281), t),
        u(n(25059), t),
        u(n(77805), t),
        u(n(96889), t),
        u(n(18432), t),
        u(n(69757), t),
        u(n(67083), t),
        u(n(55042), t),
        u(n(49462), t),
        u(n(13617), t),
        u(n(93960), t),
        u(n(18428), t),
        u(n(98267), t),
        u(n(9679), t),
        u(n(44834), t),
        u(n(45840), t),
        u(n(75170), t),
        u(n(72638), t),
        u(n(60694), t),
        u(n(47972), t),
        u(n(24848), t),
        u(n(15038), t),
        u(n(85642), t),
        u(n(19857), t),
        u(n(22138), t),
        u(n(8697), t),
        u(n(43138), t),
        u(n(65980), t),
        u(n(29563), t),
        u(n(18649), t),
        u(n(75145), t),
        u(n(10237), t),
        u(n(93952), t),
        u(n(61779), t),
        u(n(98922), t),
        u(n(13022), t),
        u(n(9150), t),
        u(n(54102), t),
        u(n(3553), t),
        u(n(46094), t),
        u(n(429), t),
        u(n(54544), t),
        u(n(85751), t),
        u(n(57515), t),
        u(n(72101), t);
    },
    15038: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    85642: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    22138: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    19857: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    29287: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    25059: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    77805: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    96889: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    18432: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    51330: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    49847: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    83673: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    75145: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    8697: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    27478: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    8773: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    16712: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    45840: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    75170: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    22128: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    54102: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    3553: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    97604: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    10237: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    72638: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    60694: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    5280: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    2334: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    12633: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    18407: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    93952: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    61779: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    4330: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    38301: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    47972: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    6659: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    47281: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
  },
]);
