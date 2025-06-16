import './vendor-BCNtwJ5j.js';
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
      (e._sentryDebugIds[n] = 'f9223830-ef5f-4e40-b235-52d4aaf42e87'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-f9223830-ef5f-4e40-b235-52d4aaf42e87'));
  } catch (f) {}
})();
function o(e, n, f) {
  const t = Date.now() - n.valueOf();
  return t < 0 ? e : e + (f * t) / 1e3;
}
export { o as c };
//# sourceMappingURL=calcCurrentValues-ClepGxtB.js.map
