import { r as s, f as l, D as d } from './vendor-DpenelXu.js';
import { k as i, l as u } from './index-DTTOaJYD.js';
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
      (t._sentryDebugIds[e] = 'a3044447-c2e7-4d77-9649-12f64ec9b0f9'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-a3044447-c2e7-4d77-9649-12f64ec9b0f9'));
  } catch (a) {}
})();
const f = () => {
    const { getMarketByAddress: t } = i();
    return { getBorrowingCapacity: s.useCallback((a) => n(a, t), [t]) };
  },
  p = (t) => {
    const { getMarketByAddress: e } = i();
    return s.useMemo(() => n(t, e), [t, e]);
  },
  n = (t, e) => {
    const a = e(t.state.lendingMarket.toString()),
      o = l.KaminoObligation.getElevationGroupsForReserves([t]),
      r = t.getLiquidityAvailableForDebtReserveGivenCaps(a, o.length === 0 ? [0] : [0, ...o]),
      c = d.max(...r);
    return u(c, t.stats.decimals);
  };
export { p as a, f as u };
//# sourceMappingURL=useBorrowingCapacity-hCOSKtzM.js.map
