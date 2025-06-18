'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9716],
  {
    62753: function (e, t, n) {
      var o = n(64836);
      t.Z = void 0;
      var r = o(n(64938)),
        a = n(85893);
      t.Z = (0, r.default)(
        (0, a.jsx)('path', {
          d: 'm19.77 7.23.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 10H6V5h6zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        }),
        'LocalGasStation'
      );
    },
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
      var r = n(52102);
      Object.defineProperty(t, 'PC', {
        enumerable: !0,
        get: function () {
          return r.SwapSide;
        },
      }),
        Object.defineProperty(t, 'OZ', {
          enumerable: !0,
          get: function () {
            return r.ContractMethod;
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
                var r = Object.getOwnPropertyDescriptor(t, n);
                (r && !('get' in r ? !t.__esModule : r.writable || r.configurable)) ||
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, o, r);
              }
            : function (e, t, n, o) {
                void 0 === o && (o = n), (e[o] = t[n]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              'default' === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
          };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        r(n(97604), t),
        r(n(56708), t),
        r(n(29287), t),
        r(n(2334), t),
        r(n(12633), t),
        r(n(18407), t),
        r(n(6659), t),
        r(n(40814), t),
        r(n(13410), t),
        r(n(83781), t),
        r(n(37790), t),
        r(n(49847), t),
        r(n(51330), t),
        r(n(83673), t),
        r(n(27478), t),
        r(n(8773), t),
        r(n(16712), t),
        r(n(22128), t),
        r(n(5280), t),
        r(n(4330), t),
        r(n(38301), t),
        r(n(47281), t),
        r(n(25059), t),
        r(n(77805), t),
        r(n(96889), t),
        r(n(18432), t),
        r(n(69757), t),
        r(n(67083), t),
        r(n(55042), t),
        r(n(49462), t),
        r(n(13617), t),
        r(n(93960), t),
        r(n(18428), t),
        r(n(98267), t),
        r(n(9679), t),
        r(n(44834), t),
        r(n(45840), t),
        r(n(75170), t),
        r(n(72638), t),
        r(n(60694), t),
        r(n(47972), t),
        r(n(24848), t),
        r(n(15038), t),
        r(n(85642), t),
        r(n(19857), t),
        r(n(22138), t),
        r(n(8697), t),
        r(n(43138), t),
        r(n(65980), t),
        r(n(29563), t),
        r(n(18649), t),
        r(n(75145), t),
        r(n(10237), t),
        r(n(93952), t),
        r(n(61779), t),
        r(n(98922), t),
        r(n(13022), t),
        r(n(9150), t),
        r(n(54102), t),
        r(n(3553), t),
        r(n(46094), t),
        r(n(429), t),
        r(n(54544), t),
        r(n(85751), t),
        r(n(57515), t),
        r(n(72101), t);
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
    64343: function (e, t, n) {
      var o = n(67294);
      const r = o.forwardRef(function (e, t) {
        return o.createElement(
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
          o.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M5 13l4 4L19 7',
          })
        );
      });
      t.Z = r;
    },
    80227: function (e, t, n) {
      var o = n(67294);
      const r = o.forwardRef(function (e, t) {
        return o.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          o.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z',
            clipRule: 'evenodd',
          })
        );
      });
      t.Z = r;
    },
    33740: function (e, t, n) {
      var o = n(67294);
      const r = o.forwardRef(function (e, t) {
        return o.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          o.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z',
            clipRule: 'evenodd',
          })
        );
      });
      t.Z = r;
    },
    36864: function (e, t, n) {
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
  },
]);
