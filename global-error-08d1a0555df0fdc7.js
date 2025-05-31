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
    (e._sentryDebugIds[t] = 'd5ebfe36-70f8-4bd5-978b-aa56b0fa2fc0'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-d5ebfe36-70f8-4bd5-978b-aa56b0fa2fc0'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6470],
  {
    43975: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 7332));
    },
    7332: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return c;
          },
        });
      var n = r(78286),
        o = r(58258),
        i = r(28264),
        l = r.n(i),
        s = r(88084),
        d = r(77187),
        a = r(49149);
      function c(e) {
        let { error: t } = e;
        return (
          (0, o.useEffect)(() => {
            a.QP.NEXT_PUBLIC_SENTRY_DSN &&
              s.$e(function (e) {
                e.setLevel('fatal'), d.Tb(t);
              });
          }, [t]),
          (0, n.tZ)('html', {
            children: (0, n.tZ)('body', { children: (0, n.tZ)(l(), { statusCode: 0 }) }),
          })
        );
      }
    },
    55059: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let n = r(88296),
        o = r(50256),
        i = n._(r(58258)),
        l = n._(r(1726)),
        s = {
          400: 'Bad Request',
          404: 'This page could not be found',
          405: 'Method Not Allowed',
          500: 'Internal Server Error',
        };
      function d(e) {
        let { res: t, err: r } = e;
        return { statusCode: t && t.statusCode ? t.statusCode : r ? r.statusCode : 404 };
      }
      let a = {
        error: {
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        desc: { lineHeight: '48px' },
        h1: {
          display: 'inline-block',
          margin: '0 20px 0 0',
          paddingRight: 23,
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: 'top',
        },
        h2: { fontSize: 14, fontWeight: 400, lineHeight: '28px' },
        wrap: { display: 'inline-block' },
      };
      class c extends i.default.Component {
        render() {
          let { statusCode: e, withDarkMode: t = !0 } = this.props,
            r = this.props.title || s[e] || 'An unexpected error has occurred';
          return (0, o.jsxs)('div', {
            style: a.error,
            children: [
              (0, o.jsx)(l.default, {
                children: (0, o.jsx)('title', {
                  children: e
                    ? e + ': ' + r
                    : 'Application error: a client-side exception has occurred',
                }),
              }),
              (0, o.jsxs)('div', {
                style: a.desc,
                children: [
                  (0, o.jsx)('style', {
                    dangerouslySetInnerHTML: {
                      __html:
                        'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}' +
                        (t
                          ? '@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}'
                          : ''),
                    },
                  }),
                  e
                    ? (0, o.jsx)('h1', { className: 'next-error-h1', style: a.h1, children: e })
                    : null,
                  (0, o.jsx)('div', {
                    style: a.wrap,
                    children: (0, o.jsxs)('h2', {
                      style: a.h2,
                      children: [
                        this.props.title || e
                          ? r
                          : (0, o.jsx)(o.Fragment, {
                              children:
                                'Application error: a client-side exception has occurred (see the browser console for more information)',
                            }),
                        '.',
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
      }
      (c.displayName = 'ErrorPage'),
        (c.getInitialProps = d),
        (c.origGetInitialProps = d),
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    28264: function (e, t, r) {
      e.exports = r(55059);
    },
  },
  function (e) {
    e.O(0, [3261, 6269, 8804, 1744], function () {
      return e((e.s = 43975));
    }),
      (_N_E = e.O());
  },
]);
