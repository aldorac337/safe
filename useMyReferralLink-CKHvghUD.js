var f = Object.defineProperty,
  g = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable;
var s = (e, r, t) =>
    r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[r] = t),
  c = (e, r) => {
    for (var t in r || (r = {})) b.call(r, t) && s(e, t, r[t]);
    if (o) for (var t of o(r)) p.call(r, t) && s(e, t, r[t]);
    return e;
  },
  i = (e, r) => g(e, y(r));
import { S as m, f as k, P as w, x as S, r as U } from './vendor-CFRnETMC.js';
import { a as L, u as l, Q as P, e as h, g as v } from './index-DwWh_48g.js';
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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = '3ed95340-cc3c-484a-9756-dcbc825248f6'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-3ed95340-cc3c-484a-9756-dcbc825248f6'));
  } catch (t) {}
})();
const R = () => {
  const { web3client: e } = L(),
    { walletPublicKey: r } = l(),
    t = async () => {
      if (!e || !r) throw new Error('Wallet is not connected');
      try {
        const a = await k.getReferrerShortUrl(e.connection, new w(r), v());
        return a ? a[1] : null;
      } catch (a) {
        console.error(a);
      }
      return null;
    };
  return m({
    queryKey: P.getReferrerUrl(r || '-'),
    queryFn: t,
    enabled: !!(e && r),
    cacheTime: 2 * 24 * 60 * 60 * 1e3,
    staleTime: 1 * 24 * 60 * 60 * 1e3,
    onError: (a) => {
      h(a);
    },
  });
};
var d = ((e) => ((e.rankings = 'Rankings'), (e.userReferrals = 'My Referrals'), e))(d || {}),
  n = ((e) => (
    (e.noLink = 'No Link'), (e.link = 'Link'), (e.create = 'Create'), (e.update = 'Update'), e
  ))(n || {});
const T = () => {
    const e = new URLSearchParams(document.location.search),
      r = e.get('tab');
    return {
      referralsSortBy: e.get('referralsSortBy') || [{ id: 'referralDate', desc: !0 }],
      selectedTab: r || d.rankings,
      activeForm: n.noLink,
    };
  },
  u = S(
    i(c({}, T()), {
      updateStoreParams: (e) => {
        Object.assign(u, e);
      },
    })
  ),
  C = () => {
    const { walletPublicKey: e } = l(),
      { data: r, isLoading: t } = R(),
      { updateStoreParams: a } = u;
    return (
      U.useEffect(() => {
        r && a({ activeForm: n.link });
      }, [r, a]),
      {
        link: r,
        isLoading: t,
        isWalletConnected: !!e,
        goToCreateForm: () => {
          a({ activeForm: n.create });
        },
        goToUpdateForm: () => {
          a({ activeForm: n.update });
        },
      }
    );
  };
export { n as F, d as R, C as a, u as s, R as u };
//# sourceMappingURL=useMyReferralLink-CKHvghUD.js.map
