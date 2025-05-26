var U = Object.defineProperty,
  W = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
  Q = Object.prototype.propertyIsEnumerable;
var S = (e, t, n) =>
    t in e ? U(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  w = (e, t) => {
    for (var n in t || (t = {})) k.call(t, n) && S(e, n, t[n]);
    if (y) for (var n of y(t)) Q.call(t, n) && S(e, n, t[n]);
    return e;
  },
  N = (e, t) => W(e, _(t));
import { b6 as h, cR as R, f as I, D as C } from './vendor-S4AjIOSE.js';
import { a as f } from './removeBudgetAndAtaIxns-CKdGNZMX.js';
import { x as D, er as K, t as E } from './index-CroKpwmf.js';
import { c as X, a as T } from './transactions-CiIB2wJI.js';
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
      (e._sentryDebugIds[t] = 'c243472b-6f29-4254-aee8-6cd57178e5bb'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-c243472b-6f29-4254-aee8-6cd57178e5bb'));
  } catch (n) {}
})();
const l = class l {};
(l.getSwapInstructions = async (t, n, r, i = !1, s) =>
  t.getJupiterSwapInstructionsPostWithFallback({
    quoteResponse: n,
    userPublicKey: r.toString(),
    wrapAndUnwrapSol: i,
    asLegacyTransaction: s,
  })),
  (l.getBestRouteImpl = async ({
    kswapSdk: t,
    amountLamports: n,
    inputMint: r,
    outputMint: i,
    slippage: s,
    mode: a = R.ExactIn,
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
        slippageBps: X(s * 100).toNumber(),
        onlyDirectRoutes: c,
        maxAccounts: d || (u ? h.MAX_ACCOUNTS_PER_TRANSACTION - u.length : void 0),
        asLegacyTransaction: g,
        swapMode: a,
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
    const { inputMint: s, outputMint: a } = n,
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
          B = f(T(m), [s.toString(), a.toString()]),
          x = f(T(b), [s.toString(), a.toString()]),
          M = f(T([A]), [s.toString(), a.toString()]),
          q = d ? f(T([d]), [s.toString(), a.toString()]) : [],
          O = p ? f(T([p]), [s.toString(), a.toString()]) : [],
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
    slippage: s,
    mode: a = R.ExactIn,
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
      slippage: s,
      mode: a,
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
    scopePrice: s,
    kswapSdk: a,
    inputMintDecimals: c,
    outputMintDecimals: u,
  }) => {
    if (!t || !E(t) || !n || !E(n)) throw new Error('Invalid swap params. Try again');
    const g = s.eq(0) ? new C(1) : new C(1).div(s),
      o = await l.getBestRoute({
        kswapSdk: a,
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
      a =
        (c = (await t.getJupiterPriceWithFallback(i)).data[n.toString()]) == null
          ? void 0
          : c.price;
    return a ? Number(a) : 0;
  });
let P = l;
const Z = { cacheTime: 1 * 60 * 1e3, staleTime: 25 * 1e3 };
export { P as J, Z as j };
//# sourceMappingURL=JupiterService-DgkMwrEN.js.map
