import './vendor-DpenelXu.js';
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
      (e._sentryDebugIds[n] = 'aab1eed4-56b0-44d8-9070-fea587b030ec'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-aab1eed4-56b0-44d8-9070-fea587b030ec'));
  } catch (t) {}
})();
const d = async (e, n) => {
  const t = await e.getTokenAccountBalance(n);
  return t && t.value ? t.value.uiAmount : null;
};
export { d as f };
//# sourceMappingURL=findAtaBalance-CZjg32lm.js.map
