import { a as n } from './vendor-S4AjIOSE.js';
import { bu as o, e as a } from './index-CroKpwmf.js';
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
      (e._sentryDebugIds[t] = '26da8e1b-2302-4725-8397-38e77369e644'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-26da8e1b-2302-4725-8397-38e77369e644'));
  } catch (s) {}
})();
const g = ({ limit: e, offset: t, source: s }) =>
    n
      .get(''.concat(o, '/points/leaderboard'), { params: { limit: e, offset: t, source: s } })
      .then(({ data: r }) => r),
  c = ({ env: e, walletPublicKey: t, source: s }) =>
    n
      .get(''.concat(o, '/points/users/').concat(t.toString(), '/breakdown'), {
        params: { env: e, source: s },
      })
      .then(({ data: r }) => r),
  p = ({ env: e }) =>
    n.get(''.concat(o, '/points/rules'), { params: { env: e } }).then(({ data: t }) => t),
  f = (e) =>
    n.get(''.concat(o, '/points/metrics'), { params: { source: e } }).then(({ data: t }) => t),
  u = () =>
    n
      .get('https://cdn.kamino.finance/points.json')
      .then((e) => e.data)
      .catch(a);
export { p as a, c as b, f as c, u as f, g };
//# sourceMappingURL=points-OCNgEIU2.js.map
