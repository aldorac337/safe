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
    r = new e.Error().stack;
  r &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[r] = '7e8442fc-e82b-4e79-885e-c272db35cb6d'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-7e8442fc-e82b-4e79-885e-c272db35cb6d'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3183],
  {
    63039: function (e, r, n) {
      Promise.resolve().then(n.bind(n, 34058));
    },
    34058: function (e, r, n) {
      'use strict';
      n.r(r),
        n.d(r, {
          default: function () {
            return a;
          },
        });
      var t = n(78286),
        o = n(4841);
      function a(e) {
        let { error: r, reset: n } = e;
        return (0, t.tZ)(o.Z, {
          error: r,
          reset: n,
          title: 'Error loading Borrow page data',
          description: 'Something went wrong while loading Borrow page data. Please try again.',
          homeRoute: '/',
          route: '/borrow',
        });
      }
    },
    4841: function (e, r, n) {
      'use strict';
      n.d(r, {
        Z: function () {
          return l;
        },
      });
      var t = n(78286),
        o = n(58258),
        a = n(85957),
        i = n(88084),
        s = n(77187),
        u = n(54655),
        c = n(49149);
      function l(e) {
        let {
            error: r,
            reset: n,
            title: l = 'Something went wrong!',
            description: d = 'Please try again.',
            homeRoute: f = '/',
            route: m = '/',
            showErrorMessage: g = !0,
          } = e,
          h = (0, a.useRouter)();
        return (
          (0, o.useEffect)(() => {
            console.error('Route error: '.concat(null == r ? void 0 : r.message, ' on ').concat(m)),
              c.QP.NEXT_PUBLIC_SENTRY_DSN &&
                i.$e(function (e) {
                  e.setLevel('fatal'), s.Tb(r);
                });
          }, [r, m]),
          (0, t.BX)(u.Kqy, {
            direction: 'column',
            align: 'center',
            justify: 'center',
            className: 'min-h-screen p-4',
            gap: 'm',
            style: { margin: '0 auto' },
            children: [
              (0, t.BX)(u.Kqy, {
                align: 'center',
                gap: 'xs',
                children: [
                  (0, t.tZ)(u.JO$, { icon: 'AlertPlain20', size: 24, color: 'icon.primary' }),
                  (0, t.tZ)(u.xvT.Title.XS, {
                    color: 'text.primary',
                    className: 'mb-4',
                    children: l,
                  }),
                ],
              }),
              (0, t.BX)(u.Kqy, {
                direction: 'column',
                align: 'center',
                gap: 'xs',
                children: [
                  (0, t.tZ)(u.xvT.Body.S.Regular, {
                    color: 'text.primary',
                    className: 'mb-8',
                    children: d,
                  }),
                  g &&
                    (null == r ? void 0 : r.message) &&
                    (0, t.tZ)(u.xvT.Body.S.Regular, {
                      color: 'text.primary',
                      className: 'mb-8',
                      children: null == r ? void 0 : r.message,
                    }),
                ],
              }),
              (0, t.BX)(u.Kqy, {
                direction: 'row',
                gap: 's',
                children: [
                  (0, t.tZ)(u.zxk, { onClick: n, variant: 'primary', label: 'Try Again' }),
                  (0, t.tZ)(u.zxk, {
                    onClick: () => h.push(f),
                    variant: 'secondary',
                    label: 'Go to home',
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    85957: function (e, r, n) {
      'use strict';
      var t = n(21876);
      n.o(t, 'useParams') &&
        n.d(r, {
          useParams: function () {
            return t.useParams;
          },
        }),
        n.o(t, 'usePathname') &&
          n.d(r, {
            usePathname: function () {
              return t.usePathname;
            },
          }),
        n.o(t, 'useRouter') &&
          n.d(r, {
            useRouter: function () {
              return t.useRouter;
            },
          }),
        n.o(t, 'useSearchParams') &&
          n.d(r, {
            useSearchParams: function () {
              return t.useSearchParams;
            },
          });
    },
  },
  function (e) {
    e.O(0, [9913, 3261, 1083, 4655, 6269, 8577, 1744], function () {
      return e((e.s = 63039));
    }),
      (_N_E = e.O());
  },
]);
