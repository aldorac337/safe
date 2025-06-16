import { P as f, r as I, D as o } from './vendor-BCNtwJ5j.js';
import { u as t } from './useUserBreakdownQuery-Bq0Q0lm-.js';
import { o as M, m as h, cn as N, bn as r, bm as E } from './index-BInJAZZg.js';
import { u as K } from './useUserStrategySharesBalance-BcYH3uYw.js';
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
      (s._sentryDebugIds[a] = '82c61c79-5030-4cae-9f68-372216ecc7e3'),
      (s._sentryDebugIdIdentifier = 'sentry-dbid-82c61c79-5030-4cae-9f68-372216ecc7e3'));
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
    } = K({ sharesMint: new f(r), sharesMintDecimals: i(r).decimals, farmAddress: new f(E) }),
    S = b || k || D,
    e = I.useMemo(() => ({ season1: d, season2: c, season3: u })[a], [a, d, c, u]),
    l = S || y,
    T = e.leaderboardRank,
    P = e.boosts || [],
    B = Number(e.totalPointsEarned),
    n = Number(e.totalCurrentPointsPerSecond) * 24 * 60 * 60,
    L = new o(p).mul(g(r)),
    m = new o(w.netValue).plus(L),
    _ = m.toNumber() && !l && n ? new o(n).div(m) : new o(0);
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
//# sourceMappingURL=useUserFormatPointsData-CnY668SG.js.map
