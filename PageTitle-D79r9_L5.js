import { j as e } from './vendor-BCNtwJ5j.js';
import { f as o, h as a } from './index-BInJAZZg.js';
(function () {
  try {
    var s =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      t = new s.Error().stack;
    t &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[t] = '3114644b-502d-4a11-bf71-068e98a577a5'),
      (s._sentryDebugIdIdentifier = 'sentry-dbid-3114644b-502d-4a11-bf71-068e98a577a5'));
  } catch (i) {}
})();
const d = '_root_1vfjf_1',
  f = '_subTitle_1vfjf_13',
  c = '_howItWorks_1vfjf_23',
  r = { root: d, subTitle: f, howItWorks: c },
  b = ({
    title: s,
    description: t,
    isExplainerOpened: i,
    explainerStepsComponent: l,
    onHowItWorksClick: n,
  }) =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsxs('div', {
          className: r.root,
          children: [
            e.jsx(o, {
              fs: 32,
              lh: 36,
              color: 'white',
              weight: 'medium',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'PageTitle.tsx',
              children: s,
            }),
            e.jsxs('div', {
              className: r.subTitle,
              children: [
                e.jsx(o, {
                  fs: 16,
                  lh: 22,
                  color: 'grey',
                  weight: 'regular',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'PageTitle.tsx',
                  children: t,
                }),
                n &&
                  e.jsxs('div', {
                    className: r.howItWorks,
                    onClick: n,
                    children: [
                      e.jsx(o, {
                        fs: 16,
                        lh: 22,
                        color: 'blue',
                        weight: 'medium',
                        children: 'How it works',
                      }),
                      e.jsx(a, { name: 'Info', size: 16, color: 'blue' }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        i && l,
      ],
    });
export { b as P };
//# sourceMappingURL=PageTitle-D79r9_L5.js.map
