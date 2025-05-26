import { r as s, cQ as r } from './vendor-S4AjIOSE.js';
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
      (e._sentryDebugIds[n] = '9f641899-4306-4f6e-984c-f14a918ad133'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-9f641899-4306-4f6e-984c-f14a918ad133'));
  } catch (t) {}
})();
function o(e, n) {
  const [t, a] = s.useState(() => n(e));
  return (
    s.useEffect(() => {
      const f = r(() => {
        const u = n(e);
        a(u);
      });
      return () => f();
    }, [n, e]),
    t
  );
}
export { o as u };
//# sourceMappingURL=useObservableStoreValue-Cyw_vEBN.js.map
