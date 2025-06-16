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
    (e._sentryDebugIds[n] = 'f9c7ef96-adf6-4218-984d-ffa0d3f09731'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-f9c7ef96-adf6-4218-984d-ffa0d3f09731'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3960],
  {
    72280: function (e, n, f) {
      f.d(n, {
        v4q: function () {
          return d;
        },
      });
      var t = f(58258),
        r = ['color'],
        d = (0, t.forwardRef)(function (e, n) {
          var f = e.color,
            d = (function (e, n) {
              if (null == e) return {};
              var f,
                t,
                r = {},
                d = Object.keys(e);
              for (t = 0; t < d.length; t++) (f = d[t]), n.indexOf(f) >= 0 || (r[f] = e[f]);
              return r;
            })(e, r);
          return (0, t.createElement)(
            'svg',
            Object.assign(
              {
                width: '15',
                height: '15',
                viewBox: '0 0 15 15',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              d,
              { ref: n }
            ),
            (0, t.createElement)('path', {
              d: 'M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z',
              fill: void 0 === f ? 'currentColor' : f,
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            })
          );
        });
    },
  },
]);
