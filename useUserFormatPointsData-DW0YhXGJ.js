import { P as m, r as I, D as e } from './vendor-DpenelXu.js';
import { u as t } from './useUserBreakdownQuery-CL-iX5Ai.js';
import { o as M, m as h, co as N, bo as r, bn as E } from './index-DTTOaJYD.js';
import { u as K } from './useUserStrategySharesBalance-CrVZJQRX.js';
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
      (s._sentryDebugIds[a] = 'dd1df089-f8c8-4ef0-92cd-74d0466061ac'),
      (s._sentryDebugIdIdentifier = 'sentry-dbid-dd1df089-f8c8-4ef0-92cd-74d0466061ac'));
  } catch (d) {}
})();
const x = ({ walletPublicKey: s, season: a }) => {
  const { getToken: d } = M(),
    { getPriceByTokenMintDecimal: g } = h(),
    { data: i, isLoading: b } = t({ walletPublicKey: s, season: 'season1' }),
    { data: c, isLoading: k } = t({ walletPublicKey: s, season: 'season2' }),
    { data: u, isLoading: D } = t({ walletPublicKey: s, season: 'season3' }),
    { data: w, isLoading: y } = N(),
    {
      data: { farmStakedBalance: p },
    } = K({ sharesMint: new m(r), sharesMintDecimals: d(r).decimals, farmAddress: new m(E) }),
    S = b || k || D,
    o = I.useMemo(() => ({ season1: i, season2: c, season3: u })[a], [a, i, c, u]),
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
//# sourceMappingURL=useUserFormatPointsData-DW0YhXGJ.js.map
