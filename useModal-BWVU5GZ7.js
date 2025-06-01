import { r as n } from './vendor-DpenelXu.js';
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
      o = new e.Error().stack;
    o &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[o] = '1f7eac2b-6cce-4146-8f82-1a1bb6b36df4'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-1f7eac2b-6cce-4146-8f82-1a1bb6b36df4'));
  } catch (s) {}
})();
const b = (e = !1) => {
  const [o, s] = n.useState(e),
    t = n.useCallback(() => s(!0), []),
    a = n.useCallback(() => s(!1), []),
    l = n.useCallback(() => s((d) => !d), []);
  return { isOpen: o, onOpenModal: t, onCloseModal: a, onToggleModal: l };
};
export { b as u };
//# sourceMappingURL=useModal-BWVU5GZ7.js.map
