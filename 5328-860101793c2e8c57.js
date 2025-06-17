try {
  let e =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    t = new e.Error().stack;
  t &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[t] = 'c9d8c99b-4e5e-40bc-b9e3-2810a6fc2a66'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-c9d8c99b-4e5e-40bc-b9e3-2810a6fc2a66'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5328],
  {
    15328: function (e, t, n) {
      n.d(t, {
        _: function () {
          return d;
        },
      });
      var o = n(58258);
      function r(e, t) {
        window.dispatchEvent(new StorageEvent('storage', { key: e, newValue: t }));
      }
      let l = (e, t) => {
          let n = JSON.stringify(t);
          window.localStorage.setItem(e, n), r(e, n);
        },
        a = (e) => {
          window.localStorage.removeItem(e), r(e, null);
        },
        s = (e) => window.localStorage.getItem(e),
        c = (e) => (
          window.addEventListener('storage', e), () => window.removeEventListener('storage', e)
        ),
        i = () => {
          throw Error('useLocalStorage is a client-only hook');
        };
      function d(e, t) {
        let n = o.useSyncExternalStore(c, () => s(e), i),
          r = o.useCallback(
            (t) => {
              try {
                let o = 'function' == typeof t ? t(JSON.parse(n)) : t;
                null == o ? a(e) : l(e, o);
              } catch (e) {
                console.warn(e);
              }
            },
            [e, n]
          );
        return (
          o.useEffect(() => {
            null === s(e) && void 0 !== t && l(e, t);
          }, [e, t]),
          [n ? JSON.parse(n) : t, r]
        );
      }
    },
  },
]);
