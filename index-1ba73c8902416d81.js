(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    16760: (e, n, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(49306);
        },
      ]);
    },
    49306: (e, n, t) => {
      'use strict';
      t.r(n), t.d(n, { default: () => d });
      var u = t(37876),
        r = t(14232),
        a = t(89099),
        s = t(72830),
        _ = t(17203),
        l = t.n(_),
        c = t(26397),
        i = t(52283);
      let d = () => {
        let e = (0, a.useRouter)(),
          { chain: n } = e.query;
        return (
          (0, r.useEffect)(() => {
            if (!e.isReady || e.pathname !== s.S.index) return;
            let t = c.A.getItem(i.zH.name),
              u = null === t || l()(t) ? s.S.welcome.index : s.S.welcome.accounts;
            e.replace({ pathname: u, query: n ? { chain: n } : void 0 });
          }, [e, n]),
          (0, u.jsx)(u.Fragment, {})
        );
      };
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [636, 6593, 8792], () => n(16760)), (_N_E = e.O());
  },
]);
//# sourceMappingURL=index-1ba73c8902416d81.js.map
