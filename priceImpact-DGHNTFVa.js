import { D as _ } from './vendor-BCNtwJ5j.js';
(function () {
  try {
    var n =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new n.Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = '8a12fbf2-ddcb-4e1c-8f2f-8e63d0fbd594'),
      (n._sentryDebugIdIdentifier = 'sentry-dbid-8a12fbf2-ddcb-4e1c-8f2f-8e63d0fbd594'));
  } catch (t) {}
})();
const l = 20,
  g = 50,
  o = 50,
  r = 75,
  d = 100,
  E = 100,
  f = 50,
  P = 100,
  a = 100,
  c = 500,
  i = 100,
  R = 200,
  A = 50;
var S = ((n) => (
  (n[(n.safe = 0)] = 'safe'), (n[(n.warning = 1)] = 'warning'), (n[(n.danger = 2)] = 'danger'), n
))(S || {});
const u = {
    leverage: [E, r],
    multiply: [d, o],
    swap: [P, f],
    newSwap: [c, a],
    jlpMultiply: [R, i],
  },
  I = (n, e) => {
    const t = new _(e),
      s = u[n];
    return t.gte(s[0]) ? 2 : t.gte(s[1]) ? 1 : 0;
  },
  L = (n, e) => {
    const t = I(n, e);
    return t === 0 ? 'green' : t === 1 ? 'yellow' : t === 2 ? 'red' : 'white';
  };
export { c as D, S as P, A as a, l as b, g as c, L as d, I as g };
//# sourceMappingURL=priceImpact-DGHNTFVa.js.map
