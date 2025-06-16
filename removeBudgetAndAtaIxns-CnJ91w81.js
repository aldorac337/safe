import { cG as a, bq as u } from './vendor-BCNtwJ5j.js';
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
      (e._sentryDebugIds[r] = '92360325-731e-4c29-a615-bc7a0cc11a26'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-92360325-731e-4c29-a615-bc7a0cc11a26'));
  } catch (t) {}
})();
function i(e, r) {
  return e.filter((t) => {
    const { programId: n, keys: o } = t;
    if (n.equals(a.programId)) return !1;
    if (n.equals(u)) {
      const s = o[3];
      return !r.includes(s.pubkey.toString());
    }
    return !0;
  });
}
function f(e) {
  return e.filter((r) => {
    const { programId: t } = r;
    return !t.equals(a.programId);
  });
}
export { i as a, f as r };
//# sourceMappingURL=removeBudgetAndAtaIxns-CnJ91w81.js.map
