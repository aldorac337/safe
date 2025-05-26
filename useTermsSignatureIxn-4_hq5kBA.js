import { y as a, P as s } from './vendor-S4AjIOSE.js';
import { u as i, aa as o, x as u, eq as d } from './index-CroKpwmf.js';
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
      (e._sentryDebugIds[t] = 'fed35863-46fb-4d30-8e6d-e225d8060e33'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-fed35863-46fb-4d30-8e6d-e225d8060e33'));
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
//# sourceMappingURL=useTermsSignatureIxn-4_hq5kBA.js.map
