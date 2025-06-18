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
    (e._sentryDebugIds[n] = 'a9e34cb2-76b3-4c67-8aa4-eb0719b71a25'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-a9e34cb2-76b3-4c67-8aa4-eb0719b71a25'));
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
            return c;
          },
        });
      var r = t(78286),
        i = t(54655),
        o = t(50825);
      function l(e) {
        let { title: n, description: t, buttonLabel: l, buttonHref: c } = e;
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
              href: c,
              mode: 'internal',
              buttonProps: { variant: 'secondary', label: l },
            }),
          ],
        });
      }
      function c() {
        return (0, r.tZ)(l, {
          title: 'Not Found',
          description: 'We could not find the page you were looking for.',
          buttonLabel: 'Go to Home',
          buttonHref: '/ethereum/earn',
        });
      }
    },
  },
  function (e) {
    e.O(0, [9913, 1811, 3261, 1083, 3248, 4655, 825, 6269, 8577, 1744], function () {
      return e((e.s = 98423));
    }),
      (_N_E = e.O());
  },
]);
