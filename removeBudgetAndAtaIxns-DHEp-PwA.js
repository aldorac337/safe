import { cp as d, bo as s } from './vendor-DpenelXu.js';
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
      (e._sentryDebugIds[r] = 'b7d6698d-10c6-4aea-9cc6-e330f3a8d34a'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-b7d6698d-10c6-4aea-9cc6-e330f3a8d34a'));
  } catch (t) {}
})();
function f(e, r) {
  return e.filter((t) => {
    const { programId: n, keys: a } = t;
    if (n.equals(d.programId)) return !1;
    if (n.equals(s)) {
      const o = a[3];
      return !r.includes(o.pubkey.toString());
    }
    return !0;
  });
}
function i(e) {
  return e.filter((r) => {
    const { programId: t } = r;
    return !t.equals(d.programId);
  });
}
export { f as a, i as r };
//# sourceMappingURL=removeBudgetAndAtaIxns-DHEp-PwA.js.map
