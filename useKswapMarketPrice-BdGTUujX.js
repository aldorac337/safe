var S = Object.defineProperty,
  A = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty,
  D = Object.prototype.propertyIsEnumerable;
var g = (e, t, n) =>
    t in e ? S(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  w = (e, t) => {
    for (var n in t || (t = {})) R.call(t, n) && g(e, n, t[n]);
    if (f) for (var n of f(t)) D.call(t, n) && g(e, n, t[n]);
    return e;
  },
  y = (e, t) => A(e, B(t));
import { Q as P, e as h } from './index-DwWh_48g.js';
import { u as E } from './useKswapSdk-otbk_5aK.js';
import { D as c, P as b, f as K, l as I, B as v, S as q } from './vendor-CFRnETMC.js';
import { a as L } from './kswap-DQObBGyq.js';
(function () {
  try {
    var e =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = 'b6240ddf-09b5-4de5-a99a-0b4e752bfa6c'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-b6240ddf-09b5-4de5-a99a-0b4e752bfa6c'));
  } catch (n) {}
})();
function i(e, t) {
  if (e == null) throw new Error(t);
}
const m = (e) => {
    const t = new c(e.amountsExactIn.amountIn.toString()),
      n = new c(e.amountsExactIn.amountOutGuaranteed.toString()),
      r = e.inputTokenDecimals,
      a = e.outputTokenDecimals;
    return (
      i(r, 'Input decimals are missing'),
      i(a, 'Output decimals are missing'),
      n.div(10 ** a).div(t.div(10 ** r))
    );
  },
  _ = new c(1);
async function O(e, t, n) {
  var o, s;
  const r = await e.getBatchTokenPrices([new b(t), new b(n)]),
    a = (o = r.get(t.toString())) == null ? void 0 : o.value,
    u = (s = r.get(n.toString())) == null ? void 0 : s.value;
  return !a || !u ? _ : new c(a).div(u);
}
const k = (e, t, n) => ({
    executor: t,
    tokenIn: e.inputMint,
    tokenOut: e.outputMint,
    amount: new v(e.inputAmountLamports.toDP(0).toString()),
    maxSlippageBps: n,
    wrapAndUnwrapSol: !1,
    swapType: 'exactIn',
    routerTypes: L,
    includeRfq: !1,
    includeLimoLogs: !1,
    includeSetupIxs: !1,
  }),
  Q = async (e, t, n, r) => {
    const a = await t.getAllRoutes(k(e, n, r)),
      u = I.maxBy(
        a,
        (s) => (
          i(s.inputTokenDecimals, 'Input token decimals are missing'),
          i(s.outputTokenDecimals, 'Output token decimals are missing'),
          m(s).toNumber()
        )
      );
    return (
      i(u, 'We could not find any routes, please try again'), { priceAInB: m(u), quoteResponse: u }
    );
  };
function V(e, t, n) {
  return async (a) => Q(a, e, t, n);
}
function $(e, t, n) {
  return async (a) =>
    (await e.getAllRoutes(k(a, t, n))).map((o) => {
      i(o.ixsRouter, 'IXs router is missing'),
        i(o.lookupTableAccounts, 'Lookup table accounts are missing'),
        i(o.inputTokenDecimals, 'Input token decimals are missing'),
        i(o.outputTokenDecimals, 'Output token decimals are missing');
      const s = m(o);
      return {
        preActionIxs: [],
        swapIxs: o.ixsRouter,
        lookupTables: o.lookupTableAccounts,
        quote: { priceAInB: new c(s), quoteResponse: o },
      };
    });
}
const C = async (e, t, n, r, a) => {
    const u = await n.getLatestBlockhash('confirmed');
    return (
      await Promise.all(
        e.map(async (s, p) => {
          const T = [...s.ixs, ...a],
            x = [...t, ...s.lookupTables];
          try {
            const l = K.buildVersionedTransactionSync(r, T, u.blockhash, x),
              d = await n.simulateTransaction(l, { sigVerify: !1, commitment: 'confirmed' });
            if (d.value.err) {
              console.error('Simulation failed for route '.concat(p), d.value.err);
              return;
            }
            return (
              i(s.quote, 'We could not find any routes, please try again'),
              y(w({}, s), { tx: l, routeOutput: s.quote, swapInputs: s.swapInputs })
            );
          } catch (l) {
            console.error('Simulation failed for route '.concat(p), l);
            return;
          }
        })
      )
    ).filter((s) => s !== void 0);
  },
  G = (e) => {
    const t = I.maxBy(e, (n) => m(n.routeOutput).toNumber());
    return i(t, 'We could not find any routes, please try again'), t;
  };
function X({ inputMint: e, outputMint: t, refetchIntervalSeconds: n = 10, enabled: r = !0 }) {
  const { kswapSdk: a } = E(),
    u = async () => (i(e, 'Input mint is missing'), i(t, 'Output mint is missing'), O(a, e, t));
  return q({
    queryKey: P.getKswapMarketPrice(e, t),
    enabled: !!e && !!t && r,
    queryFn: u,
    onError: (o) => {
      h(o);
    },
    refetchInterval: n * 2e3,
  });
}
export { G as a, $ as b, V as c, Q as d, C as g, i, X as u };
//# sourceMappingURL=useKswapMarketPrice-BdGTUujX.js.map
