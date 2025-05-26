import { r as i, P as c, b7 as l, c3 as d } from './vendor-S4AjIOSE.js';
import { a as f, u } from './index-CroKpwmf.js';
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
      (n._sentryDebugIds[e] = '0d46c863-fa3f-4886-9a3c-33d76c8f5503'),
      (n._sentryDebugIdIdentifier = 'sentry-dbid-0d46c863-fa3f-4886-9a3c-33d76c8f5503'));
  } catch (r) {}
})();
function y(n) {
  return n.every((e) => e instanceof l);
}
function b(n) {
  return n.every((e) => e instanceof d);
}
const p = () => {
  const { web3client: n } = f(),
    { walletPublicKey: e, signAllTransactions: r } = u();
  return {
    signAllTransactions: i.useCallback(
      async (a) => {
        if (!n || !e || !r) throw new Error('wallet is not connected');
        const o = await n.sendConnection.getLatestBlockhash('finalized');
        let s = [];
        if (y(a))
          return (
            (s = a.map((t) => ((t.feePayer = new c(e)), (t.recentBlockhash = o.blockhash), t))),
            r(s)
          );
        if (b(a)) return (s = a), r(s);
        throw new Error('Invalid transaction type');
      },
      [r, e, n]
    ),
  };
};
export { p as u };
//# sourceMappingURL=useSignAllTransactions-DXWp4UND.js.map
