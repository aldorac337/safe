import { j as i, v as s } from './vendor-BCNtwJ5j.js';
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
      d = new e.Error().stack;
    d &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[d] = '14f994ef-1a4f-4ce6-a582-8cbc00d5420e'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-14f994ef-1a4f-4ce6-a582-8cbc00d5420e'));
  } catch (r) {}
})();
const t = '_divider_iafqi_1',
  n = { divider: t },
  a = ({ className: e }) =>
    i.jsx('div', {
      className: s(e, n.divider),
      'data-sentry-component': 'Divider',
      'data-sentry-source-file': 'index.tsx',
    });
export { a as D };
//# sourceMappingURL=index-DoxpZ_iT.js.map
