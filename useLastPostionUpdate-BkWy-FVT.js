import { r as n, cQ as f, h as c } from './vendor-DpenelXu.js';
import { u as a, an as i } from './index-DTTOaJYD.js';
(function () {
  try {
    var t =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = 'd00be612-3895-4832-b031-c6a1f0fbfd69'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-d00be612-3895-4832-b031-c6a1f0fbfd69'));
  } catch (o) {}
})();
const r = (t) => 'wallet::'.concat(t, '::lastPositionUpdateAt'),
  p = () => {
    const { updateProviderParams: t } = i,
      { walletPublicKey: e } = a();
    return {
      setPositionHasUpdated: n.useCallback(() => {
        if (e) {
          const s = new Date().toISOString();
          t({ lastPositionUpdateAt: s }, !0), localStorage.setItem(r(e), s);
        }
      }, [t, e]),
    };
  },
  g = () => {
    const { walletPublicKey: t } = a(),
      { lastPositionUpdateAt: e } = i;
    return {
      isLastPositionTxWithin2Hours: n.useMemo(() => {
        if (!t || !e) return !1;
        const s = localStorage.getItem(r(t));
        if (!s) return !1;
        const d = f(s);
        return c(new Date(), d) <= 2;
      }, [e, t]),
    };
  };
export { g as a, p as u };
//# sourceMappingURL=useLastPostionUpdate-BkWy-FVT.js.map
