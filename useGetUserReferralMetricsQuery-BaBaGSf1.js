import { u as o, Q as a, e as l, br as d } from './index-DTTOaJYD.js';
import { S as u } from './vendor-DpenelXu.js';
(function () {
  try {
    var e =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = '29b997d2-50c6-4c18-9353-1313f493d268'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-29b997d2-50c6-4c18-9353-1313f493d268'));
  } catch (s) {}
})();
const i = 'User not found on referral leaderboard',
  y = (e) => {
    const { walletPublicKey: t } = o(),
      s = t || '',
      n = async () => {
        const r = await fetch(''.concat(d, '/referral/leaderboard/users/').concat(s, '/metrics'));
        if (!r.ok) {
          if (r.status === 400) throw new Error('Invalid wallet address format');
          return r.json();
        }
        return r.json();
      };
    return u({
      queryKey: a.getUserReferralMetrics(s || ''),
      queryFn: n,
      enabled: !!s,
      cacheTime: 5 * 60 * 1e3,
      staleTime: 5 * 60 * 1e3,
      onError: (r) => {
        l(r);
      },
    });
  };
export { i as U, y as u };
//# sourceMappingURL=useGetUserReferralMetricsQuery-BaBaGSf1.js.map
