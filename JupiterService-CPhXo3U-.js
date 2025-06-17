var U = Object.defineProperty,
  W = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
  Q = Object.prototype.propertyIsEnumerable;
var S = (s, t, n) =>
    t in s ? U(s, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (s[t] = n),
  w = (s, t) => {
    for (var n in t || (t = {})) k.call(t, n) && S(s, n, t[n]);
    if (y) for (var n of y(t)) Q.call(t, n) && S(s, n, t[n]);
    return s;
  },
  N = (s, t) => W(s, _(t));
import { b8 as h, df as R, f as b, D as C } from './vendor-CFRnETMC.js';
import { a as f } from './removeBudgetAndAtaIxns-DhYxCfUy.js';
import { x as D, eV as K, t as E } from './index-DwWh_48g.js';
import { c as X, a as T } from './transactions-DV1wf2_d.js';
(function () {
  try {
    var s =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      t = new s.Error().stack;
    t &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[t] = 'ee4d8271-6d5b-47c6-8a1b-75f674898dca'),
      (s._sentryDebugIdIdentifier = 'sentry-dbid-ee4d8271-6d5b-47c6-8a1b-75f674898dca'));
  } catch (n) {}
})();
const l = class l {};
(l.getSwapInstructions = async (t, n, r, i = !1, e) =>
  t.getJupiterSwapInstructionsPostWithFallback({
    quoteResponse: n,
    userPublicKey: r.toString(),
    wrapAndUnwrapSol: i,
    asLegacyTransaction: e,
  })),
  (l.getBestRouteImpl = async ({
    kswapSdk: t,
    amountLamports: n,
    inputMint: r,
    outputMint: i,
    slippage: e,
    mode: a = R.ExactIn,
    onlyDirectRoutes: c,
    klendAccounts: u,
    asLegacyTransaction: g,
    excludeDexes: o,
    restrictIntermediateTokens: m,
    userPublicKey: A,
    withMoreMaxAccounts: I,
    strictMaxAccounts: d,
  }) => {
    const p = w(
      {
        inputMint: r.toString(),
        outputMint: i.toString(),
        amount: n.ceil().toNumber(),
        slippageBps: X(e * 100).toNumber(),
        onlyDirectRoutes: c,
        maxAccounts: d || (u ? h.MAX_ACCOUNTS_PER_TRANSACTION - u.length : void 0),
        asLegacyTransaction: g,
        swapMode: a,
        restrictIntermediateTokens: m && D.isRestrictIntermediateTokensEnabled,
      },
      o != null && o.length ? { excludeDexes: o } : {}
    );
    return !u || d || !I
      ? t.getJupiterQuoteWithFallback(p)
      : l.getBestRouteWithMoreMaxAccounts({
          kswapSdk: t,
          params: p,
          klendAccounts: u,
          userPublicKey: A || K,
        });
  }),
  (l.getBestRouteWithMoreMaxAccounts = async ({
    kswapSdk: t,
    params: n,
    klendAccounts: r,
    userPublicKey: i,
  }) => {
    const { inputMint: e, outputMint: a } = n,
      c = 11,
      u = h.MAX_ACCOUNTS_PER_TRANSACTION - r.length;
    let g = Math.min(h.MAX_ACCOUNTS_PER_TRANSACTION, u + c),
      o = null;
    for (; !o && g >= u; )
      try {
        o = await t.getJupiterQuoteWithFallback(N(w({}, n), { maxAccounts: g }));
        const {
            setupInstructions: m,
            computeBudgetInstructions: A,
            swapInstruction: I,
            cleanupInstruction: d,
            tokenLedgerInstruction: p,
          } = await t.getJupiterSwapInstructionsPostWithFallback({
            quoteResponse: o,
            userPublicKey: i,
            wrapAndUnwrapSol: !1,
            asLegacyTransaction: n.asLegacyTransaction,
          }),
          B = f(T(m), [e.toString(), a.toString()]),
          x = f(T(A), [e.toString(), a.toString()]),
          M = f(T([I]), [e.toString(), a.toString()]),
          q = d ? f(T([d]), [e.toString(), a.toString()]) : [],
          O = p ? f(T([p]), [e.toString(), a.toString()]) : [],
          F = [...B, ...M, ...x, ...q, ...O],
          L = b.uniqueAccountsWithProgramIds(F);
        if (new b.PublicKeySet([...L, ...r]).size() <= h.MAX_ACCOUNTS_PER_TRANSACTION) break;
        (o = null), (g -= 2);
      } catch (m) {
        g -= 2;
      }
    if (!o) throw new Error('Could not find valid route');
    return o;
  }),
  (l.getBestRoute = async ({
    kswapSdk: t,
    amountLamports: n,
    inputMint: r,
    outputMint: i,
    slippage: e,
    mode: a = R.ExactIn,
    onlyDirectRoutes: c,
    klendAccounts: u,
    asLegacyTransaction: g,
    excludeDexes: o,
    getToken: m,
    restrictIntermediateTokens: A,
    userPublicKey: I,
    withMoreMaxAccounts: d,
    strictMaxAccounts: p,
  }) =>
    l.getBestRouteImpl({
      kswapSdk: t,
      amountLamports: n,
      inputMint: r,
      outputMint: i,
      slippage: e,
      mode: a,
      onlyDirectRoutes: c,
      klendAccounts: u,
      asLegacyTransaction: g,
      excludeDexes: o,
      getToken: m,
      restrictIntermediateTokens: A,
      userPublicKey: I,
      withMoreMaxAccounts: d,
      strictMaxAccounts: p,
    })),
  (l.getTopOfBookBestRouteQuote = async ({
    inputMint: t,
    outputMint: n,
    onlyDirectRoutes: r = !1,
    excludeDexes: i = [],
    scopePrice: e,
    kswapSdk: a,
    inputMintDecimals: c,
    outputMintDecimals: u,
  }) => {
    if (!t || !E(t) || !n || !E(n)) throw new Error('Invalid swap params. Try again');
    const g = e.eq(0) ? new C(1) : new C(1).div(e),
      o = await l.getBestRoute({
        kswapSdk: a,
        amountLamports: b.numberToLamportsDecimal(g.mul(100), c),
        inputMint: t,
        outputMint: n,
        slippage: 0,
        mode: 'ExactIn',
        onlyDirectRoutes: r,
        asLegacyTransaction: !1,
        excludeDexes: i,
      }),
      m = b.lamportsToNumberDecimal(o.inAmount, c);
    return b.lamportsToNumberDecimal(o.outAmount, u).div(m);
  }),
  (l.getPrice = async (t, n, r) => {
    var c;
    const i = { ids: n.toString(), vsToken: r.toString() },
      a =
        (c = (await t.getJupiterPriceWithFallback(i)).data[n.toString()]) == null
          ? void 0
          : c.price;
    return a ? Number(a) : 0;
  });
let P = l;
const Z = { cacheTime: 1 * 60 * 1e3, staleTime: 25 * 1e3 };
export { P as J, Z as j };
//# sourceMappingURL=JupiterService-CPhXo3U-.js.map
