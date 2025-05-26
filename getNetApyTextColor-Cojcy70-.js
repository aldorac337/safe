import './vendor-S4AjIOSE.js';
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
      (e._sentryDebugIds[n] = '714ffef8-6569-4eab-9bed-945bbe304ca9'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-714ffef8-6569-4eab-9bed-945bbe304ca9'));
  } catch (r) {}
})();
const f = (e, n = !0) =>
  e > 0 ? (n ? 'green' : 'orange') : e < 0 ? (n ? 'orange' : 'green') : 'white';
export { f as g };
//# sourceMappingURL=getNetApyTextColor-Cojcy70-.js.map
