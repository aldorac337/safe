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
    (e._sentryDebugIds[n] = '8a2130b5-4439-406c-a944-e3dd1e7cd4f2'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-8a2130b5-4439-406c-a944-e3dd1e7cd4f2'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3960],
  {
    72280: function (e, n, t) {
      t.d(n, {
        v4q: function () {
          return l;
        },
      });
      var r = t(58258),
        d = ['color'],
        l = (0, r.forwardRef)(function (e, n) {
          var t = e.color,
            l = (function (e, n) {
              if (null == e) return {};
              var t,
                r,
                d = {},
                l = Object.keys(e);
              for (r = 0; r < l.length; r++) (t = l[r]), n.indexOf(t) >= 0 || (d[t] = e[t]);
              return d;
            })(e, d);
          return (0, r.createElement)(
            'svg',
            Object.assign(
              {
                width: '15',
                height: '15',
                viewBox: '0 0 15 15',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              l,
              { ref: n }
            ),
            (0, r.createElement)('path', {
              d: 'M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z',
              fill: void 0 === t ? 'currentColor' : t,
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            })
          );
        });
    },
  },
]);
