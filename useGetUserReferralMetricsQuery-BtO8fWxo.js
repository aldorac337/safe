import { u as n, Q as o, e as l, bu as u } from './index-CroKpwmf.js';
import { S as d } from './vendor-S4AjIOSE.js';
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
      (e._sentryDebugIds[t] = '20977057-c293-4b4f-b996-5331a96826ba'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-20977057-c293-4b4f-b996-5331a96826ba'));
  } catch (s) {}
})();
const c = 'User not found on referral leaderboard',
  b = (e) => {
    const { walletPublicKey: t } = n(),
      s = t || '',
      a = async () => {
        const r = await fetch(''.concat(u, '/referral/leaderboard/users/').concat(s, '/metrics'));
        if (!r.ok) {
          if (r.status === 400) throw new Error('Invalid wallet address format');
          return r.json();
        }
        return r.json();
      };
    return d({
      queryKey: o.getUserReferralMetrics(s || ''),
      queryFn: a,
      enabled: !!s,
      cacheTime: 5 * 60 * 1e3,
      staleTime: 5 * 60 * 1e3,
      onError: (r) => {
        l(r);
      },
    });
  };
export { c as U, b as u };
//# sourceMappingURL=useGetUserReferralMetricsQuery-BtO8fWxo.js.map
