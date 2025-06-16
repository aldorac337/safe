const e = {},
  t = new Set(['Module', '__esModule', 'default', '_export_sfc']);
let n = {
  './BeaconQueue': () =>
    r('./rsa-plugins-remote-BeaconQueue.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './Bugsnag': () =>
    r('./rsa-plugins-remote-Bugsnag.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './CustomConsentManager': () =>
    r('./rsa-plugins-remote-CustomConsentManager.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './DeviceModeDestinations': () =>
    r('./rsa-plugins-remote-DeviceModeDestinations.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './DeviceModeTransformation': () =>
    r('./rsa-plugins-remote-DeviceModeTransformation.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './ErrorReporting': () =>
    r('./rsa-plugins-remote-ErrorReporting.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './ExternalAnonymousId': () =>
    r('./rsa-plugins-remote-ExternalAnonymousId.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './GoogleLinker': () =>
    r('./rsa-plugins-remote-GoogleLinker.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './IubendaConsentManager': () =>
    r('./rsa-plugins-remote-IubendaConsentManager.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './KetchConsentManager': () =>
    r('./rsa-plugins-remote-KetchConsentManager.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './NativeDestinationQueue': () =>
    r('./rsa-plugins-remote-NativeDestinationQueue.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './OneTrustConsentManager': () =>
    r('./rsa-plugins-remote-OneTrustConsentManager.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './StorageEncryption': () =>
    r('./rsa-plugins-remote-StorageEncryption.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './StorageEncryptionLegacy': () =>
    r('./rsa-plugins-remote-StorageEncryptionLegacy.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './StorageMigrator': () =>
    r('./rsa-plugins-remote-StorageMigrator.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
  './XhrQueue': () =>
    r('./rsa-plugins-remote-XhrQueue.min.js').then((e) =>
      Object.keys(e).every((e) => t.has(e)) ? () => e.default : () => e
    ),
};
async function r(t) {
  return e[t] || (e[t] = import(t)), e[t];
}
const a = (e) => {
    if (!n[e]) throw new Error('Can not find remote module ' + e);
    return n[e]();
  },
  o = (e) => {
    (globalThis.__federation_shared__ = globalThis.__federation_shared__ || {}),
      Object.entries(e).forEach(([e, t]) => {
        const n = Object.keys(t)[0],
          r = Object.values(t)[0],
          a = r.scope || 'default';
        globalThis.__federation_shared__[a] = globalThis.__federation_shared__[a] || {};
        const o = globalThis.__federation_shared__[a];
        (o[e] = o[e] || {})[n] = r;
      });
  };
export { a as get, o as init };
//# sourceMappingURL=rsa-plugins.js.map
