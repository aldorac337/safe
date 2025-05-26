import { P as m, r as I, D as e } from './vendor-S4AjIOSE.js';
import { u as t } from './useUserBreakdownQuery-DNg2_wLZ.js';
import { o as M, m as h, co as N, bo as r, bn as E } from './index-CroKpwmf.js';
import { u as K } from './useUserStrategySharesBalance-X76he8Xy.js';
(function () {
  try {
    var s =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      a = new s.Error().stack;
    a &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[a] = '23280ae6-d106-4bd9-9e9a-f5f967fc5a6b'),
      (s._sentryDebugIdIdentifier = 'sentry-dbid-23280ae6-d106-4bd9-9e9a-f5f967fc5a6b'));
  } catch (i) {}
})();
const x = ({ walletPublicKey: s, season: a }) => {
  const { getToken: i } = M(),
    { getPriceByTokenMintDecimal: g } = h(),
    { data: d, isLoading: b } = t({ walletPublicKey: s, season: 'season1' }),
    { data: c, isLoading: k } = t({ walletPublicKey: s, season: 'season2' }),
    { data: u, isLoading: D } = t({ walletPublicKey: s, season: 'season3' }),
    { data: w, isLoading: y } = N(),
    {
      data: { farmStakedBalance: p },
    } = K({ sharesMint: new m(r), sharesMintDecimals: i(r).decimals, farmAddress: new m(E) }),
    S = b || k || D,
    o = I.useMemo(() => ({ season1: d, season2: c, season3: u })[a], [a, d, c, u]),
    l = S || y,
    T = o.leaderboardRank,
    P = o.boosts || [],
    B = Number(o.totalPointsEarned),
    n = Number(o.totalCurrentPointsPerSecond) * 24 * 60 * 60,
    L = new e(p).mul(g(r)),
    f = new e(w.netValue).plus(L),
    _ = f.toNumber() && !l && n ? new e(n).div(f) : new e(0);
  return {
    totalPoints: B,
    currentBoost: _,
    currentPointsPerDay: n,
    userRank: T,
    boosts: P,
    isLoading: l,
  };
};
export { x as u };
//# sourceMappingURL=useUserFormatPointsData-B79DvjX-.js.map
