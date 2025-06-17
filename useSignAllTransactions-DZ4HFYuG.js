import { r as i, P as c, b9 as l, cH as d } from './vendor-CFRnETMC.js';
import { a as u, u as f } from './index-DwWh_48g.js';
(function () {
  try {
    var n =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new n.Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = '002c1ae4-91b4-4516-8c12-39288cea0800'),
      (n._sentryDebugIdIdentifier = 'sentry-dbid-002c1ae4-91b4-4516-8c12-39288cea0800'));
  } catch (r) {}
})();
function b(n) {
  return n.every((e) => e instanceof l);
}
function y(n) {
  return n.every((e) => e instanceof d);
}
const p = () => {
  const { web3client: n } = u(),
    { walletPublicKey: e, signAllTransactions: r } = f();
  return {
    signAllTransactions: i.useCallback(
      async (a) => {
        if (!n || !e || !r) throw new Error('wallet is not connected');
        const o = await n.sendConnection.getLatestBlockhash('finalized');
        let s = [];
        if (b(a))
          return (
            (s = a.map((t) => ((t.feePayer = new c(e)), (t.recentBlockhash = o.blockhash), t))),
            r(s)
          );
        if (y(a)) return (s = a), r(s);
        throw new Error('Invalid transaction type');
      },
      [r, e, n]
    ),
  };
};
export { p as u };
//# sourceMappingURL=useSignAllTransactions-DZ4HFYuG.js.map
