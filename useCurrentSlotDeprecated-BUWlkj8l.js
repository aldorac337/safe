import { r } from './vendor-BCNtwJ5j.js';
import { a as n } from './index-BInJAZZg.js';
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
      (e._sentryDebugIds[t] = 'b0d7e18a-33c0-49d9-82eb-2921b42acad5'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-b0d7e18a-33c0-49d9-82eb-2921b42acad5'));
  } catch (o) {}
})();
const a = () => {
  const { web3client: e } = n();
  return {
    getCurrentSlot: r.useCallback(async () => {
      if (!e) throw new Error('web3client is required');
      return e.connection.getSlot();
    }, [e]),
  };
};
export { a as u };
//# sourceMappingURL=useCurrentSlotDeprecated-BUWlkj8l.js.map
