import { r as g, f as A, a1 as I, P as b, D as o } from './vendor-CFRnETMC.js';
import { a as w, u as B, S as E, d2 as p } from './index-DwWh_48g.js';
import { u as _ } from './useAtaQuery-BdoJyBgW.js';
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
      (e._sentryDebugIds[t] = '8f1dc591-b263-46ce-9af1-c5d46798eb48'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-8f1dc591-b263-46ce-9af1-c5d46798eb48'));
  } catch (a) {}
})();
const k = () => {
    const { web3client: e } = w();
    return {
      getTransactionDetails: g.useCallback(
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
    const { web3client: e } = w(),
      { getAtaByTokenMint: t } = _(),
      { getTransactionDetails: a } = k(),
      { walletPublicKey: s } = B();
    return {
      getTransactionDelta: g.useCallback(
        async ({
          transactionSig: D,
          tokenMint: u,
          amount: y,
          preDepositBalance: T,
          decimals: l,
        }) => {
          var d;
          if (!e || !s) return 0;
          let c = p,
            f = p;
          if (u === E) {
            const n = await a(D),
              m = ((d = n == null ? void 0 : n.meta) == null ? void 0 : d.fee) || 0;
            f = A.lamportsToNumberDecimal(m, I.DECIMALS_SOL);
            const r = await e.connection.getBalance(new b(s));
            c = new o(r).div(new o(10).pow(l));
          } else {
            const n = await t(u, void 0, !0);
            if (n) {
              const r = (await e.connection.getTokenAccountBalance(new b(n))).value.uiAmount || 0;
              c = new o(r);
            }
          }
          const i = c.plus(new o(y)).plus(f).minus(T);
          return i.gt(0) && i.mul(new o(10).pow(l)).gt(0) ? i.toNumber() : 0;
        },
        [e, s, a, t]
      ),
    };
  };
export { v as u };
//# sourceMappingURL=useBalanceDeltaAfterTxn-GcvcyN6A.js.map
