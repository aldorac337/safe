import { r as n, cS as c, h as f } from './vendor-CFRnETMC.js';
import { u as a, an as i } from './index-DwWh_48g.js';
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
      (t._sentryDebugIds[e] = 'eebd0d0c-9f59-4d23-9f34-cdc5308682f3'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-eebd0d0c-9f59-4d23-9f34-cdc5308682f3'));
  } catch (o) {}
})();
const r = (t) => 'wallet::'.concat(t, '::lastPositionUpdateAt'),
  g = () => {
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
  b = () => {
    const { walletPublicKey: t } = a(),
      { lastPositionUpdateAt: e } = i;
    return {
      isLastPositionTxWithin2Hours: n.useMemo(() => {
        if (!t || !e) return !1;
        const s = localStorage.getItem(r(t));
        if (!s) return !1;
        const d = c(s);
        return f(new Date(), d) <= 2;
      }, [e, t]),
    };
  };
export { b as a, g as u };
//# sourceMappingURL=useLastPostionUpdate-EAmXdRbC.js.map
