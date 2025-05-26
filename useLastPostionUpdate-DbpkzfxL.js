import { r as a, cK as f, h as c } from './vendor-S4AjIOSE.js';
import { u as n, an as i } from './index-CroKpwmf.js';
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
      (t._sentryDebugIds[e] = 'ea9cf598-f20c-481e-9fef-0629426a94d5'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-ea9cf598-f20c-481e-9fef-0629426a94d5'));
  } catch (o) {}
})();
const r = (t) => 'wallet::'.concat(t, '::lastPositionUpdateAt'),
  g = () => {
    const { updateProviderParams: t } = i,
      { walletPublicKey: e } = n();
    return {
      setPositionHasUpdated: a.useCallback(() => {
        if (e) {
          const s = new Date().toISOString();
          t({ lastPositionUpdateAt: s }, !0), localStorage.setItem(r(e), s);
        }
      }, [t, e]),
    };
  },
  I = () => {
    const { walletPublicKey: t } = n(),
      { lastPositionUpdateAt: e } = i;
    return {
      isLastPositionTxWithin2Hours: a.useMemo(() => {
        if (!t || !e) return !1;
        const s = localStorage.getItem(r(t));
        if (!s) return !1;
        const d = f(s);
        return c(new Date(), d) <= 2;
      }, [e, t]),
    };
  };
export { I as a, g as u };
//# sourceMappingURL=useLastPostionUpdate-DbpkzfxL.js.map
