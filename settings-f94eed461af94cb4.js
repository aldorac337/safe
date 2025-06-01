(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [199],
  {
    817: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/settings',
        function () {
          return t(49224);
        },
      ]);
    },
    49224: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { default: () => i });
      var s = t(6029),
        u = t(55729),
        n = t(77328),
        _ = t.n(n),
        c = t(89099),
        f = t(23084),
        h = t(94937);
      let i = () => {
        let e = (0, c.useRouter)();
        return (
          (0, u.useEffect)(() => {
            let r = e.query.safe ? f.Zt[0].href : f.r$[0].href;
            e.push(r, { query: e.query });
          }, [e, e.query.safe]),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(_(), {
              children: (0, s.jsx)('title', { children: ''.concat(h.Az, ' – Settings') }),
            }),
          })
        );
      };
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [636, 6593, 8792], () => r(817)), (_N_E = e.O());
  },
]);
//# sourceMappingURL=settings-f94eed461af94cb4.js.map
