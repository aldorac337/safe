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
    (e._sentryDebugIds[t] = '7804a627-b537-49f4-b02d-a0c03774ab9e'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-7804a627-b537-49f4-b02d-a0c03774ab9e'));
} catch (e) {}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [686, 3793, 2406, 2412, 2023, 2507],
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
        o = n(38819),
        d = n(54655);
      let l = (0, o.Z)('div', { target: 'eqlp4070' })(
          'background:',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.gradient.pageBackground;
          },
          ';width:100%;'
        ),
        s = (0, o.Z)(d.Kqy, { shouldForwardProp: (0, d.uhK)(['withAside']), target: 'eqlp4071' })(
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
      (0, o.Z)('div', { target: 'eqlp4072' })(
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
        (0, d.xJ_)('border-width'),
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
    e.O(0, [9913, 3261, 1087, 4655, 6269, 8804, 1744], function () {
      return e((e.s = 55470));
    }),
      (_N_E = e.O());
  },
]);
