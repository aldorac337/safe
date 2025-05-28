'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3960],
  {
    53960: (e, r, t) => {
      t.r(r), t.d(r, { default: () => y });
      var a = t(66416),
        s = t(88683),
        n = t(68992),
        c = t(7717),
        i = t(47347),
        l = t(14232),
        u = t(12426),
        o = t(42205),
        f = t(57187),
        E = t(30697),
        d = t(57910),
        g = t(7639);
      let v = {
        [a.Zf.PROCESSING]: 'Validating...',
        [a.Zf.RELAYING]: 'Validating...',
        [a.Zf.INDEXED]: 'Successfully executed.',
        [a.Zf.FAILED]: 'Failed.',
        [a.Zf.REVERTED]: 'Reverted. Please check your gas settings.',
      };
      var R = (function (e) {
        return (e.INFO = 'info'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e;
      })(R || {});
      let h = () => {
        let e = (0, f.jL)(),
          r = (0, E._J)(),
          t = (0, d.A)(),
          { address: R = '' } = (0, s.Ay)() || {},
          { refetch: h } = (0, n.C3)('' === R ? i.hT : { walletAddress: R });
        (0, l.useEffect)(() => {
          if (!r) return;
          let t = Object.entries(v).map((t) => {
            let [s, n] = t;
            return (0, a.fG)(s, async (t) => {
              let i = 'error' in t;
              if (i && (0, g.jG)(t.error)) return;
              let l = s === a.Zf.INDEXED,
                f = i ? ''.concat(n, ' ').concat((0, u.Wk)(t.error)) : n,
                E = 'txHash' in t ? t.txHash : void 0,
                d = 'groupKey' in t && t.groupKey ? t.groupKey : E || '',
                v = r && E ? (0, c.R1)(r, E) : void 0;
              l && h(),
                e(
                  (0, o.Ds)({
                    title: 'Safe Account activation',
                    message: f,
                    detailedMessage: i ? t.error.message : void 0,
                    groupKey: d,
                    variant: i ? 'error' : l ? 'success' : 'info',
                    link: v,
                  })
                );
            });
          });
          return () => {
            t.forEach((e) => e());
          };
        }, [e, t, r, h]);
      };
      var p = t(64108);
      let y = () => ((0, p.A)(), h(), null);
    },
  },
]);
//# sourceMappingURL=3960.1b8a9e4b167779d1.js.map
