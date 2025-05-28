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
    n = new e.Error().stack;
  n &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[n] = '5234cf7b-7f3d-41c0-9317-71f7ddbda44a'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-5234cf7b-7f3d-41c0-9317-71f7ddbda44a'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9160],
  {
    98423: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 4745));
    },
    4745: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return l;
          },
        });
      var r = t(78286),
        i = t(54655),
        o = t(50825);
      function d(e) {
        let { title: n, description: t, buttonLabel: d, buttonHref: l } = e;
        return (0, r.BX)(i.Kqy, {
          direction: 'column',
          align: 'center',
          justify: 'center',
          gap: 'm',
          grow: 1,
          children: [
            (0, r.BX)(i.Kqy, {
              direction: 'column',
              align: 'center',
              justify: 'center',
              gap: 's',
              children: [
                (0, r.BX)(i.Kqy, {
                  align: 'center',
                  gap: 6,
                  children: [
                    (0, r.tZ)(i.JO$, { icon: 'AlertPlain20', color: 'icon.primary', size: 28 }),
                    (0, r.tZ)(i.xvT.Title.XS, { children: n }),
                  ],
                }),
                (0, r.tZ)(i.xvT.Body.S.Regular, { children: t }),
              ],
            }),
            (0, r.tZ)(o.Z, {
              href: l,
              mode: 'internal',
              buttonProps: { variant: 'secondary', label: d },
            }),
          ],
        });
      }
      function l() {
        return (0, r.tZ)(d, {
          title: 'Not Found',
          description: 'We could not find the page you were looking for.',
          buttonLabel: 'Go to Home',
          buttonHref: '/ethereum/earn',
        });
      }
    },
  },
  function (e) {
    e.O(0, [9913, 1811, 3261, 3918, 5852, 4655, 825, 6269, 8804, 1744], function () {
      return e((e.s = 98423));
    }),
      (_N_E = e.O());
  },
]);
