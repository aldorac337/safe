import { r as w, f as A, a1 as I, P as p, D as o } from './vendor-DpenelXu.js';
import { a as D, u as B, S as E, d3 as g } from './index-DTTOaJYD.js';
import { u as _ } from './useAtaQuery-15khGZ6w.js';
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
      (e._sentryDebugIds[t] = 'daf71d23-2808-4954-9c9a-608e55439193'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-daf71d23-2808-4954-9c9a-608e55439193'));
  } catch (a) {}
})();
const k = () => {
    const { web3client: e } = D();
    return {
      getTransactionDetails: w.useCallback(
        async (a) =>
          e == null
            ? void 0
            : e.connection.getTransaction(a, {
                commitment: 'confirmed',
                maxSupportedTransactionVersion: 0,
              }),
        [e]
      ),
    };
  },
  v = () => {
    const { web3client: e } = D(),
      { getAtaByTokenMint: t } = _(),
      { getTransactionDetails: a } = k(),
      { walletPublicKey: s } = B();
    return {
      getTransactionDelta: w.useCallback(
        async ({
          transactionSig: b,
          tokenMint: u,
          amount: y,
          preDepositBalance: T,
          decimals: l,
        }) => {
          var f;
          if (!e || !s) return 0;
          let c = g,
            d = g;
          if (u === E) {
            const n = await a(b),
              m = ((f = n == null ? void 0 : n.meta) == null ? void 0 : f.fee) || 0;
            d = A.lamportsToNumberDecimal(m, I.DECIMALS_SOL);
            const r = await e.connection.getBalance(new p(s));
            c = new o(r).div(new o(10).pow(l));
          } else {
            const n = await t(u, void 0, !0);
            if (n) {
              const r = (await e.connection.getTokenAccountBalance(new p(n))).value.uiAmount || 0;
              c = new o(r);
            }
          }
          const i = c.plus(new o(y)).plus(d).minus(T);
          return i.gt(0) && i.mul(new o(10).pow(l)).gt(0) ? i.toNumber() : 0;
        },
        [e, s, a, t]
      ),
    };
  };
export { v as u };
//# sourceMappingURL=useBalanceDeltaAfterTxn-BIYtQiQS.js.map
