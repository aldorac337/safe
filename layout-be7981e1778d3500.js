(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9024],
  {
    21135: (e, r, t) => {
      'use strict';
      t.d(r, { InjectServeSideData: () => c });
      var s = t(7620),
        a = t(28822);
      let c = ({ chainId: e, pools: r, tvl: t, volume: c, children: l }) => {
        let n = (0, a.A)((e) => e.storeCache.setServerPreloadData);
        return (
          (0, s.useEffect)(() => {
            (r || t || c) && n(e, { pools: r, tvl: t, volume: c });
          }, [n, e, r, t, c]),
          l
        );
      };
    },
    71608: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 21135));
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(
      0,
      [
        4599, 921, 9335, 909, 7261, 5077, 8341, 9902, 7806, 4439, 7388, 7208, 2519, 1356, 7999,
        8867, 7496, 7044, 4925, 9720, 9556, 168, 4148, 9630, 2059, 4612, 4034, 2038, 3627, 2193,
        6467, 6116, 7399, 5911, 8173, 8822, 587, 8315, 7358,
      ],
      () => r(71608)
    ),
      (_N_E = e.O());
  },
]);
