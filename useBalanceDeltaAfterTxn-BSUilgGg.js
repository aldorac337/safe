import { r as g, f as A, a1 as I, P as m, D as o } from './vendor-S4AjIOSE.js';
import { a as w, u as B, S as E, d3 as p } from './index-CroKpwmf.js';
import { u as _ } from './useAtaQuery-CV7TJD4B.js';
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
      (e._sentryDebugIds[t] = '4fafdcb0-b574-4c33-8b2c-615561fbad5e'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-4fafdcb0-b574-4c33-8b2c-615561fbad5e'));
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
              b = ((d = n == null ? void 0 : n.meta) == null ? void 0 : d.fee) || 0;
            f = A.lamportsToNumberDecimal(b, I.DECIMALS_SOL);
            const r = await e.connection.getBalance(new m(s));
            c = new o(r).div(new o(10).pow(l));
          } else {
            const n = await t(u, void 0, !0);
            if (n) {
              const r = (await e.connection.getTokenAccountBalance(new m(n))).value.uiAmount || 0;
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
//# sourceMappingURL=useBalanceDeltaAfterTxn-BSUilgGg.js.map
