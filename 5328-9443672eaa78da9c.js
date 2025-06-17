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
    (e._sentryDebugIds[t] = '29c97a32-44a6-44a2-8ad0-f94b68084bd1'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-29c97a32-44a6-44a2-8ad0-f94b68084bd1'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5328],
  {
    15328: function (e, t, n) {
      n.d(t, {
        _: function () {
          return u;
        },
      });
      var o = n(58258);
      function a(e, t) {
        window.dispatchEvent(new StorageEvent('storage', { key: e, newValue: t }));
      }
      let r = (e, t) => {
          let n = JSON.stringify(t);
          window.localStorage.setItem(e, n), a(e, n);
        },
        l = (e) => {
          window.localStorage.removeItem(e), a(e, null);
        },
        s = (e) => window.localStorage.getItem(e),
        d = (e) => (
          window.addEventListener('storage', e), () => window.removeEventListener('storage', e)
        ),
        i = () => {
          throw Error('useLocalStorage is a client-only hook');
        };
      function u(e, t) {
        let n = o.useSyncExternalStore(d, () => s(e), i),
          a = o.useCallback(
            (t) => {
              try {
                let o = 'function' == typeof t ? t(JSON.parse(n)) : t;
                null == o ? l(e) : r(e, o);
              } catch (e) {
                console.warn(e);
              }
            },
            [e, n]
          );
        return (
          o.useEffect(() => {
            null === s(e) && void 0 !== t && r(e, t);
          }, [e, t]),
          [n ? JSON.parse(n) : t, a]
        );
      }
    },
  },
]);
