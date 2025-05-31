import { a as n } from './vendor-DpenelXu.js';
import { br as r, e as a } from './index-DTTOaJYD.js';
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
      (t._sentryDebugIds[e] = 'bdd1fc6d-0343-4248-8501-f3855a320ffe'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-bdd1fc6d-0343-4248-8501-f3855a320ffe'));
  } catch (s) {}
})();
const f = ({ limit: t, offset: e, source: s }) =>
    n
      .get(''.concat(r, '/points/leaderboard'), { params: { limit: t, offset: e, source: s } })
      .then(({ data: o }) => o),
  c = ({ env: t, walletPublicKey: e, source: s }) =>
    n
      .get(''.concat(r, '/points/users/').concat(e.toString(), '/breakdown'), {
        params: { env: t, source: s },
      })
      .then(({ data: o }) => o),
  g = ({ env: t }) =>
    n.get(''.concat(r, '/points/rules'), { params: { env: t } }).then(({ data: e }) => e),
  p = (t) =>
    n.get(''.concat(r, '/points/metrics'), { params: { source: t } }).then(({ data: e }) => e),
  b = () =>
    n
      .get('https://cdn.kamino.finance/points.json')
      .then((t) => t.data)
      .catch(a);
export { g as a, c as b, p as c, b as f, f as g };
//# sourceMappingURL=points-BxD1hUKg.js.map
