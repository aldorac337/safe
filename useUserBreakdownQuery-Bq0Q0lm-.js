var k = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty,
  b = Object.prototype.propertyIsEnumerable;
var u = (e, r, n) =>
    r in e ? k(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[r] = n),
  y = (e, r) => {
    for (var n in r || (r = {})) c.call(r, n) && u(e, n, r[n]);
    if (i) for (var n of i(r)) b.call(r, n) && u(e, n, r[n]);
    return e;
  };
var p = (e, r) => {
  var n = {};
  for (var t in e) c.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && i) for (var t of i(e)) r.indexOf(t) < 0 && b.call(e, t) && (n[t] = e[t]);
  return n;
};
import { S, P as B, a as K } from './vendor-BCNtwJ5j.js';
import { u as L, t as h, Q as v, e as m, aQ as D } from './index-BInJAZZg.js';
import { b as I } from './points-C37DpPPs.js';
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
      (e._sentryDebugIds[r] = '6790bf21-f00b-44b1-a66e-e7ae968123e5'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-6790bf21-f00b-44b1-a66e-e7ae968123e5'));
  } catch (n) {}
})();
const w = {
    leaderboardRank: 0,
    updatedOnBorrowLend: '0',
    updatedOnLeverage: '0',
    updatedOnMultiply: '0',
    updatedOnStrategies: '0',
    updatedOnStaking: '0',
    pointsEarnedStrategies: '0',
    pointsEarnedBorrowLend: '0',
    pointsEarnedLeverage: '0',
    pointsEarnedMultiply: '0',
    pointsEarnedStaking: '0',
    currentPointsPerSecondStrategies: '0',
    currentPointsPerSecondBorrowLend: '0',
    currentPointsPerSecondLeverage: '0',
    currentPointsPerSecondMultiply: '0',
    currentPointsPerSecondStaking: '0',
    totalPointsEarned: '0',
    totalCurrentPointsPerSecond: '0',
    avgBoost: '0',
    strategiesBreakdown: [],
    klendBreakdown: [],
    stakingBreakdown: [],
    boosts: [],
  },
  T = ({ walletPublicKey: e, season: r }) => {
    const { env: n, walletPublicKey: t } = L(),
      a = e || t,
      P = async () => {
        var s;
        if (!a) throw new Error('Wallet is not connected');
        try {
          return await I({ env: n, walletPublicKey: new B(a), source: D(r) });
        } catch (o) {
          if (
            o &&
            K.isAxiosError(o) &&
            o.response &&
            ((s = o.response) == null ? void 0 : s.status) === 404
          )
            return w;
          throw o;
        }
      },
      d = !!(a && h(a)),
      l = S({
        queryKey: v.getPointsUserBreakdown(n, a || '', r),
        queryFn: P,
        enabled: d,
        onError: (s) => {
          m(s), console.error('Error: Failed to fetch "Points Breakdown"', s);
        },
      }),
      { data: g, isLoading: f } = l,
      E = p(l, ['data', 'isLoading']);
    return y({ data: g || w, isLoading: f && d }, E);
  };
export { T as u };
//# sourceMappingURL=useUserBreakdownQuery-Bq0Q0lm-.js.map
