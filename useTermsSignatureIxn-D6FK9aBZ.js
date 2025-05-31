import { y as a, P as s } from './vendor-DpenelXu.js';
import { u as i, aa as o, x as u, ex as d } from './index-DTTOaJYD.js';
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
      (e._sentryDebugIds[t] = '52ac7d14-222d-4422-8085-03bd34e517bb'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-52ac7d14-222d-4422-8085-03bd34e517bb'));
  } catch (n) {}
})();
function w() {
  const { walletPublicKey: e } = i(),
    { signMessage: t } = a(),
    { kaminoSdk: n } = o();
  return {
    getSignatureIxns: async () => {
      if (!u.isTermsSignatureEnabled) return [];
      if (!n || !e || !t) throw new Error('Wallet is not connected');
      if (await n.getUserTermsSignatureState(new s(e))) return [];
      const r = await t(new TextEncoder().encode(d));
      return [await n.getUserTermsSignatureIx(new s(e), r)];
    },
  };
}
export { w as u };
//# sourceMappingURL=useTermsSignatureIxn-D6FK9aBZ.js.map
