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
    (e._sentryDebugIds[t] = 'eaa5fe6f-7b2a-4a5c-8169-dafadbbe3c59'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-eaa5fe6f-7b2a-4a5c-8169-dafadbbe3c59'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [686, 3793, 9469, 2406, 2507, 2023, 2412],
  {
    55470: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 90626));
    },
    90626: function (e, t, n) {
      'use strict';
      n.d(t, {
        default: function () {
          return p;
        },
      });
      var r = n(78286),
        i = n(58258),
        a = n(23567),
        d = n(38819),
        o = n(54655);
      let l = (0, d.Z)('div', { target: 'eqlp4070' })(
          'background:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.gradient.pageBackground;
          },
          ';width:100%;'
        ),
        s = (0, d.Z)(o.Kqy, { shouldForwardProp: (0, o.uhK)(['withAside']), target: 'eqlp4071' })(
          'container-type:inline-size;container-name:content-root;margin:',
          (e) => {
            let { withAside: t } = e;
            return t
              ? (0, a.iv)('var(--navbar-height) 10px 10px 10px')
              : (0, a.iv)(
                  'var(--navbar-height) calc(var(--bundler-width) - var(--bundler-position) + 10px) 10px 10px'
                );
          },
          ';',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{margin:64px 10px 10px 10px;}flex-direction:row;min-height:calc(100vh - var(--navbar-height) - 10px);'
        );
      (0, d.Z)('div', { target: 'eqlp4072' })(
        'position:fixed;right:89px;top:105px;display:',
        (e) => {
          let { withAside: t } = e;
          return t ? 'flex' : 'none';
        },
        ';justify-content:center;align-items:center;width:350px;height:784px;max-height:calc(100vh - 36px - 10px - 80px - 33px);overflow-y:auto;z-index:',
        (e) => {
          let { theme: t } = e;
          return t.zIndex.base.default;
        },
        ';',
        (0, o.xJ_)('border-width'),
        ' ',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.down('l');
        },
        '{right:20px;}',
        (e) => {
          let { theme: t } = e;
          return t.breakpoints.down('s');
        },
        '{display:none;}'
      );
      var p = (0, i.memo)((e) => {
        let { children: t, withAside: n = !0, className: i, style: a } = e;
        return (0, r.tZ)(l, {
          className: i,
          style: a,
          children: (0, r.tZ)(s, { justify: 'end', grow: 1, withAside: n, children: t }),
        });
      });
    },
  },
  function (e) {
    e.O(0, [9913, 3261, 3173, 4655, 6269, 8577, 1744], function () {
      return e((e.s = 55470));
    }),
      (_N_E = e.O());
  },
]);
