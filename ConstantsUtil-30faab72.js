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
      (e._sentryDebugIds[n] = '52d96f79-b9c2-4268-a18e-dca7846ff317'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-52d96f79-b9c2-4268-a18e-dca7846ff317'));
  } catch {}
})();
const d = /[.*+?^${}()|[\]\\]/gu,
  t = /[0-9,.]/u,
  f = 'https://reown.com';
export { f as R, t as n, d as s };
