import { r as i, P as c, b7 as l, cs as f } from './vendor-DpenelXu.js';
import { a as d, u } from './index-DTTOaJYD.js';
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
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = '0c81be51-b144-4409-acf9-7a8ae2afebfd'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-0c81be51-b144-4409-acf9-7a8ae2afebfd'));
  } catch (a) {}
})();
function b(e) {
  return e.every((n) => n instanceof l);
}
function y(e) {
  return e.every((n) => n instanceof f);
}
const p = () => {
  const { web3client: e } = d(),
    { walletPublicKey: n, signAllTransactions: a } = u();
  return {
    signAllTransactions: i.useCallback(
      async (r) => {
        if (!e || !n || !a) throw new Error('wallet is not connected');
        const o = await e.sendConnection.getLatestBlockhash('finalized');
        let s = [];
        if (b(r))
          return (
            (s = r.map((t) => ((t.feePayer = new c(n)), (t.recentBlockhash = o.blockhash), t))),
            a(s)
          );
        if (y(r)) return (s = r), a(s);
        throw new Error('Invalid transaction type');
      },
      [a, n, e]
    ),
  };
};
export { p as u };
//# sourceMappingURL=useSignAllTransactions-CMsf5le8.js.map
