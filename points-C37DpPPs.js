import { a as n } from './vendor-BCNtwJ5j.js';
import { bq as o, e as a } from './index-BInJAZZg.js';
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
      (e._sentryDebugIds[t] = '905f8e80-0e44-4569-a3b9-d1434882cfb4'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-905f8e80-0e44-4569-a3b9-d1434882cfb4'));
  } catch (s) {}
})();
const f = ({ limit: e, offset: t, source: s }) =>
    n
      .get(''.concat(o, '/points/leaderboard'), { params: { limit: e, offset: t, source: s } })
      .then(({ data: r }) => r),
  c = ({ env: e, walletPublicKey: t, source: s }) =>
    n
      .get(''.concat(o, '/points/users/').concat(t.toString(), '/breakdown'), {
        params: { env: e, source: s },
      })
      .then(({ data: r }) => r),
  g = ({ env: e }) =>
    n.get(''.concat(o, '/points/rules'), { params: { env: e } }).then(({ data: t }) => t),
  b = (e) =>
    n.get(''.concat(o, '/points/metrics'), { params: { source: e } }).then(({ data: t }) => t),
  p = () =>
    n
      .get('https://cdn.kamino.finance/points.json')
      .then((e) => e.data)
      .catch(a);
export { g as a, c as b, b as c, p as f, f as g };
//# sourceMappingURL=points-C37DpPPs.js.map
