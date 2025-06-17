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
    (e._sentryDebugIds[n] = '23589f6c-565a-4749-9eb5-204a8162d28a'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-23589f6c-565a-4749-9eb5-204a8162d28a'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9812],
  {
    25658: function (e, n, r) {
      Promise.resolve().then(r.bind(r, 64672));
    },
    64672: function (e, n, r) {
      'use strict';
      r.r(n),
        r.d(n, {
          default: function () {
            return o;
          },
        });
      var t = r(78286),
        a = r(4841);
      function o(e) {
        let { error: n, reset: r } = e;
        return (0, t.tZ)(a.Z, {
          error: n,
          reset: r,
          title: 'Error loading Explore page data',
          description: 'Something went wrong while loading Explore page data. Please try again.',
          homeRoute: '/',
          route: '/explore',
        });
      }
    },
    4841: function (e, n, r) {
      'use strict';
      r.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = r(78286),
        a = r(58258),
        o = r(85957),
        i = r(88084),
        s = r(77187),
        u = r(54655),
        l = r(49149);
      function c(e) {
        let {
            error: n,
            reset: r,
            title: c = 'Something went wrong!',
            description: d = 'Please try again.',
            homeRoute: f = '/',
            route: m = '/',
            showErrorMessage: g = !0,
          } = e,
          h = (0, o.useRouter)();
        return (
          (0, a.useEffect)(() => {
            console.error('Route error: '.concat(null == n ? void 0 : n.message, ' on ').concat(m)),
              l.QP.NEXT_PUBLIC_SENTRY_DSN &&
                i.$e(function (e) {
                  e.setLevel('fatal'), s.Tb(n);
                });
          }, [n, m]),
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
                    children: c,
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
                    (null == n ? void 0 : n.message) &&
                    (0, t.tZ)(u.xvT.Body.S.Regular, {
                      color: 'text.primary',
                      className: 'mb-8',
                      children: null == n ? void 0 : n.message,
                    }),
                ],
              }),
              (0, t.BX)(u.Kqy, {
                direction: 'row',
                gap: 's',
                children: [
                  (0, t.tZ)(u.zxk, { onClick: r, variant: 'primary', label: 'Try Again' }),
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
    85957: function (e, n, r) {
      'use strict';
      var t = r(21876);
      r.o(t, 'useParams') &&
        r.d(n, {
          useParams: function () {
            return t.useParams;
          },
        }),
        r.o(t, 'usePathname') &&
          r.d(n, {
            usePathname: function () {
              return t.usePathname;
            },
          }),
        r.o(t, 'useRouter') &&
          r.d(n, {
            useRouter: function () {
              return t.useRouter;
            },
          }),
        r.o(t, 'useSearchParams') &&
          r.d(n, {
            useSearchParams: function () {
              return t.useSearchParams;
            },
          });
    },
  },
  function (e) {
    e.O(0, [9913, 3261, 3173, 4655, 6269, 8577, 1744], function () {
      return e((e.s = 25658));
    }),
      (_N_E = e.O());
  },
]);
