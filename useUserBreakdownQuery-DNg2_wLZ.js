var k = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty,
  y = Object.prototype.propertyIsEnumerable;
var l = (e, r, n) =>
    r in e ? k(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[r] = n),
  f = (e, r) => {
    for (var n in r || (r = {})) u.call(r, n) && l(e, n, r[n]);
    if (d) for (var n of d(r)) y.call(r, n) && l(e, n, r[n]);
    return e;
  };
var p = (e, r) => {
  var n = {};
  for (var t in e) u.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && d) for (var t of d(e)) r.indexOf(t) < 0 && y.call(e, t) && (n[t] = e[t]);
  return n;
};
import { S, P as B, a as K } from './vendor-S4AjIOSE.js';
import { u as L, t as h, Q as v, e as m, aQ as D } from './index-CroKpwmf.js';
import { b as I } from './points-OCNgEIU2.js';
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
      (e._sentryDebugIds[r] = '25d75457-943c-40cc-837f-5a791fc0faad'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-25d75457-943c-40cc-837f-5a791fc0faad'));
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
      i = !!(a && h(a)),
      c = S({
        queryKey: v.getPointsUserBreakdown(n, a || '', r),
        queryFn: P,
        enabled: i,
        onError: (s) => {
          m(s), console.error('Error: Failed to fetch "Points Breakdown"', s);
        },
      }),
      { data: g, isLoading: b } = c,
      E = p(c, ['data', 'isLoading']);
    return f({ data: g || w, isLoading: b && i }, E);
  };
export { T as u };
//# sourceMappingURL=useUserBreakdownQuery-DNg2_wLZ.js.map
