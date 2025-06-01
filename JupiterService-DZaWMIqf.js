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
import { b6 as h, cR as R, f as I, D as C } from './vendor-DpenelXu.js';
import { a as f } from './removeBudgetAndAtaIxns-DHEp-PwA.js';
import { x as D, ey as K, t as E } from './index-DTTOaJYD.js';
import { c as X, a as T } from './transactions-CLlU6wy2.js';
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
      (s._sentryDebugIds[t] = '1d428c27-78d4-45c1-a0ca-53fcb3bbe843'),
      (s._sentryDebugIdIdentifier = 'sentry-dbid-1d428c27-78d4-45c1-a0ca-53fcb3bbe843'));
  } catch (n) {}
})();
const l = class l {};
(l.getSwapInstructions = async (t, n, r, i = !1, a) =>
  t.getJupiterSwapInstructionsPostWithFallback({
    quoteResponse: n,
    userPublicKey: r.toString(),
    wrapAndUnwrapSol: i,
    asLegacyTransaction: a,
  })),
  (l.getBestRouteImpl = async ({
    kswapSdk: t,
    amountLamports: n,
    inputMint: r,
    outputMint: i,
    slippage: a,
    mode: e = R.ExactIn,
    onlyDirectRoutes: c,
    klendAccounts: u,
    asLegacyTransaction: g,
    excludeDexes: o,
    restrictIntermediateTokens: m,
    userPublicKey: b,
    withMoreMaxAccounts: A,
    strictMaxAccounts: d,
  }) => {
    const p = w(
      {
        inputMint: r.toString(),
        outputMint: i.toString(),
        amount: n.ceil().toNumber(),
        slippageBps: X(a * 100).toNumber(),
        onlyDirectRoutes: c,
        maxAccounts: d || (u ? h.MAX_ACCOUNTS_PER_TRANSACTION - u.length : void 0),
        asLegacyTransaction: g,
        swapMode: e,
        restrictIntermediateTokens: m && D.isRestrictIntermediateTokensEnabled,
      },
      o != null && o.length ? { excludeDexes: o } : {}
    );
    return !u || d || !A
      ? t.getJupiterQuoteWithFallback(p)
      : l.getBestRouteWithMoreMaxAccounts({
          kswapSdk: t,
          params: p,
          klendAccounts: u,
          userPublicKey: b || K,
        });
  }),
  (l.getBestRouteWithMoreMaxAccounts = async ({
    kswapSdk: t,
    params: n,
    klendAccounts: r,
    userPublicKey: i,
  }) => {
    const { inputMint: a, outputMint: e } = n,
      c = 11,
      u = h.MAX_ACCOUNTS_PER_TRANSACTION - r.length;
    let g = Math.min(h.MAX_ACCOUNTS_PER_TRANSACTION, u + c),
      o = null;
    for (; !o && g >= u; )
      try {
        o = await t.getJupiterQuoteWithFallback(N(w({}, n), { maxAccounts: g }));
        const {
            setupInstructions: m,
            computeBudgetInstructions: b,
            swapInstruction: A,
            cleanupInstruction: d,
            tokenLedgerInstruction: p,
          } = await t.getJupiterSwapInstructionsPostWithFallback({
            quoteResponse: o,
            userPublicKey: i,
            wrapAndUnwrapSol: !1,
            asLegacyTransaction: n.asLegacyTransaction,
          }),
          B = f(T(m), [a.toString(), e.toString()]),
          x = f(T(b), [a.toString(), e.toString()]),
          M = f(T([A]), [a.toString(), e.toString()]),
          q = d ? f(T([d]), [a.toString(), e.toString()]) : [],
          O = p ? f(T([p]), [a.toString(), e.toString()]) : [],
          F = [...B, ...M, ...x, ...q, ...O],
          L = I.uniqueAccountsWithProgramIds(F);
        if (new I.PublicKeySet([...L, ...r]).size() <= h.MAX_ACCOUNTS_PER_TRANSACTION) break;
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
    slippage: a,
    mode: e = R.ExactIn,
    onlyDirectRoutes: c,
    klendAccounts: u,
    asLegacyTransaction: g,
    excludeDexes: o,
    getToken: m,
    restrictIntermediateTokens: b,
    userPublicKey: A,
    withMoreMaxAccounts: d,
    strictMaxAccounts: p,
  }) =>
    l.getBestRouteImpl({
      kswapSdk: t,
      amountLamports: n,
      inputMint: r,
      outputMint: i,
      slippage: a,
      mode: e,
      onlyDirectRoutes: c,
      klendAccounts: u,
      asLegacyTransaction: g,
      excludeDexes: o,
      getToken: m,
      restrictIntermediateTokens: b,
      userPublicKey: A,
      withMoreMaxAccounts: d,
      strictMaxAccounts: p,
    })),
  (l.getTopOfBookBestRouteQuote = async ({
    inputMint: t,
    outputMint: n,
    onlyDirectRoutes: r = !1,
    excludeDexes: i = [],
    scopePrice: a,
    kswapSdk: e,
    inputMintDecimals: c,
    outputMintDecimals: u,
  }) => {
    if (!t || !E(t) || !n || !E(n)) throw new Error('Invalid swap params. Try again');
    const g = a.eq(0) ? new C(1) : new C(1).div(a),
      o = await l.getBestRoute({
        kswapSdk: e,
        amountLamports: I.numberToLamportsDecimal(g.mul(100), c),
        inputMint: t,
        outputMint: n,
        slippage: 0,
        mode: 'ExactIn',
        onlyDirectRoutes: r,
        asLegacyTransaction: !1,
        excludeDexes: i,
      }),
      m = I.lamportsToNumberDecimal(o.inAmount, c);
    return I.lamportsToNumberDecimal(o.outAmount, u).div(m);
  }),
  (l.getPrice = async (t, n, r) => {
    var c;
    const i = { ids: n.toString(), vsToken: r.toString() },
      e =
        (c = (await t.getJupiterPriceWithFallback(i)).data[n.toString()]) == null
          ? void 0
          : c.price;
    return e ? Number(e) : 0;
  });
let P = l;
const Z = { cacheTime: 1 * 60 * 1e3, staleTime: 25 * 1e3 };
export { P as J, Z as j };
//# sourceMappingURL=JupiterService-DZaWMIqf.js.map
