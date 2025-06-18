import { r as s, cq as o } from './vendor-CFRnETMC.js';
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
      (e._sentryDebugIds[n] = '3eeb147f-7852-4548-9f94-78e92c5e645f'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-3eeb147f-7852-4548-9f94-78e92c5e645f'));
  } catch (t) {}
})();
function d(e, n) {
  const [t, f] = s.useState(() => n(e));
  return (
    s.useEffect(() => {
      const u = o(() => {
        const r = n(e);
        f(r);
      });
      return () => u();
    }, [n, e]),
    t
  );
}
export { d as u };
//# sourceMappingURL=useObservableStoreValue-CEVbtnbe.js.map
