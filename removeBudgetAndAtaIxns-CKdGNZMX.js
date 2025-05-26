import { c2 as d, bp as s } from './vendor-S4AjIOSE.js';
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
      (e._sentryDebugIds[r] = 'a5ab666b-fb0e-40c2-bded-9df5eab23513'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-a5ab666b-fb0e-40c2-bded-9df5eab23513'));
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
//# sourceMappingURL=removeBudgetAndAtaIxns-CKdGNZMX.js.map
