import { u as n, Q as o, e as d, bq as l } from './index-DwWh_48g.js';
import { S as u } from './vendor-CFRnETMC.js';
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
      (e._sentryDebugIds[t] = 'c940e894-9e0f-4da7-85dd-ab28e1468dce'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-c940e894-9e0f-4da7-85dd-ab28e1468dce'));
  } catch (s) {}
})();
const i = 'User not found on referral leaderboard',
  y = (e) => {
    const { walletPublicKey: t } = n(),
      s = t || '',
      a = async () => {
        const r = await fetch(''.concat(l, '/referral/leaderboard/users/').concat(s, '/metrics'));
        if (!r.ok) {
          if (r.status === 400) throw new Error('Invalid wallet address format');
          return r.json();
        }
        return r.json();
      };
    return u({
      queryKey: o.getUserReferralMetrics(s || ''),
      queryFn: a,
      enabled: !!s,
      cacheTime: 5 * 60 * 1e3,
      staleTime: 5 * 60 * 1e3,
      onError: (r) => {
        d(r);
      },
    });
  };
export { i as U, y as u };
//# sourceMappingURL=useGetUserReferralMetricsQuery-WIYdDDL4.js.map
