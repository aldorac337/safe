var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable;
var r = (e, t, n) =>
    t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  s = (e, t) => {
    for (var n in t || (t = {})) a.call(t, n) && r(e, n, t[n]);
    if (o) for (var n of o(t)) c.call(t, n) && r(e, n, t[n]);
    return e;
  };
import { r as i, j as l } from './vendor-S4AjIOSE.js';
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
      (e._sentryDebugIds[t] = '14c99fe4-10df-4727-b2e2-0bd56c126454'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-14c99fe4-10df-4727-b2e2-0bd56c126454'));
  } catch (n) {}
})();
const f = (e) =>
    i.createElement(
      'svg',
      s(
        {
          width: 17,
          height: 16,
          viewBox: '0 0 17 16',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        e
      ),
      i.createElement('path', {
        d: 'M8.80078 14C12.1145 14 14.8008 11.3137 14.8008 8C14.8008 4.68629 12.1145 2 8.80078 2C5.48707 2 2.80078 4.68629 2.80078 8C2.80078 11.3137 5.48707 14 8.80078 14Z',
        stroke: '#FFA318',
        strokeWidth: 1.5,
        strokeMiterlimit: 10,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      i.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M5.02839 6.66602C4.88099 7.08305 4.80078 7.53184 4.80078 7.99935C4.80078 10.2085 6.59164 11.9993 8.80078 11.9993C11.0099 11.9993 12.8008 10.2085 12.8008 7.99935C12.8008 7.53184 12.7206 7.08305 12.5732 6.66602H5.02839Z',
        fill: '#FFA318',
      })
    ),
  u = () =>
    l.jsx(f, {
      'data-sentry-element': 'LimitIcon',
      'data-sentry-component': 'CapacityLimitIcon',
      'data-sentry-source-file': 'CapacityLimitIcon.tsx',
    });
export { u as C };
//# sourceMappingURL=CapacityLimitIcon-CWXOclGs.js.map
