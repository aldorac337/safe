import { y as r, P as s } from './vendor-BCNtwJ5j.js';
import { u as i, aa as o, x as u, eA as d } from './index-BInJAZZg.js';
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
      (e._sentryDebugIds[t] = '21484b12-3aa5-487e-ab84-626d641c6eee'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-21484b12-3aa5-487e-ab84-626d641c6eee'));
  } catch (n) {}
})();
function w() {
  const { walletPublicKey: e } = i(),
    { signMessage: t } = r(),
    { kaminoSdk: n } = o();
  return {
    getSignatureIxns: async () => {
      if (!u.isTermsSignatureEnabled) return [];
      if (!n || !e || !t) throw new Error('Wallet is not connected');
      if (await n.getUserTermsSignatureState(new s(e))) return [];
      const a = await t(new TextEncoder().encode(d));
      return [await n.getUserTermsSignatureIx(new s(e), a)];
    },
  };
}
export { w as u };
//# sourceMappingURL=useTermsSignatureIxn-THtSbQVN.js.map
