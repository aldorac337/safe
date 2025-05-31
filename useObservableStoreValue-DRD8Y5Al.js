import { r as a, co as u } from './vendor-DpenelXu.js';
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
      (e._sentryDebugIds[n] = 'cef12842-3920-48bf-a6b6-a9dd591978fa'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-cef12842-3920-48bf-a6b6-a9dd591978fa'));
  } catch (t) {}
})();
function o(e, n) {
  const [t, s] = a.useState(() => n(e));
  return (
    a.useEffect(() => {
      const d = u(() => {
        const f = n(e);
        s(f);
      });
      return () => d();
    }, [n, e]),
    t
  );
}
export { o as u };
//# sourceMappingURL=useObservableStoreValue-DRD8Y5Al.js.map
