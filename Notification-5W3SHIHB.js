import { j as n, w as s } from './vendor-S4AjIOSE.js';
import { e2 as _, f as d } from './index-CroKpwmf.js';
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
      (e._sentryDebugIds[t] = '535b5530-6985-4950-9e7d-032351da17b9'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-535b5530-6985-4950-9e7d-032351da17b9'));
  } catch (i) {}
})();
const v = '_metalGreyGradient_1wvjv_9',
  l = '_goldGradient_1wvjv_15',
  c = '_silverGradient_1wvjv_21',
  f = '_bronzeGradient_1wvjv_27',
  w = '_pointsSilverTextGradient_1wvjv_33',
  g = '_root_1wvjv_39',
  j = '_icon_1wvjv_55',
  b = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1wvjv_1',
    metalGreyGradient: v,
    goldGradient: l,
    silverGradient: c,
    bronzeGradient: f,
    pointsSilverTextGradient: w,
    root: g,
    icon: j,
    '_variant-info': '__variant-info_1wvjv_59',
    '_variant-info-green': '__variant-info-green_1wvjv_66',
    '_variant-success': '__variant-success_1wvjv_73',
    '_variant-warning': '__variant-warning_1wvjv_80',
    '_variant-danger': '__variant-danger_1wvjv_87',
    '_variant-boost': '__variant-boost_1wvjv_94',
  },
  r = s(b),
  u = ({ className: e, variant: t, text: i, customIcon: a, noIcon: o = !1 }) =>
    n.jsxs('div', {
      className: r('root', e, { variant: t }),
      'data-sentry-component': 'Notification',
      'data-sentry-source-file': 'Notification.tsx',
      children: [
        !o && n.jsx('div', { children: a || n.jsx(_, { className: r('icon') }) }),
        n.jsx('div', {
          children:
            typeof i == 'string'
              ? n.jsx(d, { fs: 14, lh: 18, color: 'white', weight: 'regular', children: i })
              : i,
        }),
      ],
    });
export { u as N };
//# sourceMappingURL=Notification-5W3SHIHB.js.map
