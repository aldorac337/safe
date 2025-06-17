import './vendor-CFRnETMC.js';
import { x as d } from './index-DwWh_48g.js';
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
      (e._sentryDebugIds[t] = '0c6ab8a6-d564-4ed8-87bf-05b02b2b51f7'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-0c6ab8a6-d564-4ed8-87bf-05b02b2b51f7'));
  } catch (o) {}
})();
const s = [
    'jupiter',
    'per',
    'dflow',
    'fluxbeam',
    'raydium',
    'hashflow',
    'okx',
    'clover',
    ...(d.enableJupSelfHosted ? ['jupiterSelfHosted'] : []),
  ],
  a = [
    'dflow',
    'jupiter',
    'okx',
    'jupiterLite',
    ...(d.enableJupSelfHosted ? ['jupiterSelfHosted'] : []),
  ];
export { s as A, a };
//# sourceMappingURL=kswap-DQObBGyq.js.map
