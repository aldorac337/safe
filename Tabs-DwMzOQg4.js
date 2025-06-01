import { r as y, j as t, w as D } from './vendor-DpenelXu.js';
import { b3 as I, h as q, f as w, bh as G, a4 as S, a7 as B, a5 as A } from './index-DTTOaJYD.js';
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
      a = new e.Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = 'e8e1c54c-70b7-4bea-a8ea-3784ca219d02'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-e8e1c54c-70b7-4bea-a8ea-3784ca219d02'));
  } catch (s) {}
})();
const N = '_metalGreyGradient_orqyv_9',
  E = '_goldGradient_orqyv_15',
  W = '_silverGradient_orqyv_21',
  C = '_bronzeGradient_orqyv_27',
  z = '_pointsSilverTextGradient_orqyv_33',
  F = '_root_orqyv_39',
  R = '_dropdownTriggerText_orqyv_45',
  $ = '_noBorderBottom_orqyv_49',
  L = '_scrollableTabs_orqyv_52',
  O = '_scrollableTabsContainer_orqyv_65',
  M = '__isFullWidth_orqyv_89',
  P = '_tabItem_orqyv_93',
  Y = '__isActive_orqyv_110',
  H = '_labelContainer_orqyv_237',
  J = '_labelAndIconContainer_orqyv_243',
  Q = '_tabTag_orqyv_249',
  U = '__isDisabled_orqyv_255',
  X = '__textDisabled_orqyv_266',
  Z = '_noWrap_orqyv_269',
  i = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_orqyv_1',
    metalGreyGradient: N,
    goldGradient: E,
    silverGradient: W,
    bronzeGradient: C,
    pointsSilverTextGradient: z,
    root: F,
    dropdownTriggerText: R,
    noBorderBottom: $,
    scrollableTabs: L,
    scrollableTabsContainer: O,
    '_variant-default': '__variant-default_orqyv_73',
    '_variant-leverage': '__variant-leverage_orqyv_74',
    '_variant-position': '__variant-position_orqyv_75',
    '_variant-plain': '__variant-plain_orqyv_78',
    '_variant-swap': '__variant-swap_orqyv_84',
    _isFullWidth: M,
    tabItem: P,
    '_tabItemVariant-default': '__tabItemVariant-default_orqyv_106',
    _isActive: Y,
    '_tabItemVariant-leverage': '__tabItemVariant-leverage_orqyv_129',
    '_tabItemVariant-position': '__tabItemVariant-position_orqyv_130',
    '_tabItemVariant-leverage-open-position-long':
      '__tabItemVariant-leverage-open-position-long_orqyv_131',
    '_tabItemVariant-leverage-open-position-short':
      '__tabItemVariant-leverage-open-position-short_orqyv_132',
    '_tabItemVariant-plain': '__tabItemVariant-plain_orqyv_175',
    '_tabItemVariant-swap': '__tabItemVariant-swap_orqyv_184',
    '_labelItemVariant-position': '__labelItemVariant-position_orqyv_199',
    '_labelItemVariant-swap': '__labelItemVariant-swap_orqyv_203',
    labelContainer: H,
    labelAndIconContainer: J,
    tabTag: Q,
    _isDisabled: U,
    _textDisabled: X,
    noWrap: Z,
  },
  m = D(i),
  T = [],
  K = () =>
    t.jsx('div', {
      'data-testid': 'asd123asd',
      style: {
        position: 'absolute',
        right: 0,
        height: 45,
        width: 39,
        backgroundImage: 'linear-gradient(90deg, rgba(9, 19, 38, 0) 0.67%, #091326 100%)',
      },
      'data-sentry-component': 'Fade',
      'data-sentry-source-file': 'Tabs.tsx',
    }),
  g = ({
    tab: e,
    onChange: a,
    activeKey: s,
    variant: n,
    endIcon: o,
    isFullWidth: d,
    minWidth: _,
  }) => {
    const c = d && e.noWrap && _ ? { flex: '0 1 auto', minWidth: _ } : void 0;
    return t.jsxs(
      'button',
      {
        type: 'button',
        style: c,
        className: m('tabItem', {
          isActive: e.key === s,
          tabItemVariant: n,
          isDisabled: e.disabled,
        }),
        onClick: (b) => {
          b.preventDefault(), e.disabled || a == null || a(e.key);
        },
        'data-sentry-component': 'TabButton',
        'data-sentry-source-file': 'Tabs.tsx',
        children: [
          t.jsx('div', {
            className: i.labelContainer,
            children: t.jsxs('div', {
              className: i.labelAndIconContainer,
              children: [
                e.icon &&
                  t.jsx(q, {
                    name: e.icon,
                    height: 16,
                    width: 16,
                    color: e.key === s ? 'blue' : void 0,
                  }),
                t.jsx(w, {
                  fs: 16,
                  lh: 22,
                  className: ''
                    .concat(m('label', { labelItemVariant: n, textDisabled: e.disabled }), ' ')
                    .concat(e.noWrap ? i.noWrap : ''),
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'Tabs.tsx',
                  children: e.label,
                }),
                e.tag &&
                  t.jsx('div', {
                    className: i.tabTag,
                    children: t.jsx(G, { variant: 'blue', size: 'small', label: e.tag.label }),
                  }),
              ],
            }),
          }),
          o,
        ],
      },
      e.key
    );
  },
  ae = ({
    activeKey: e,
    onChange: a,
    variant: s = 'default',
    tabs: n = T,
    isFullWidth: o = !1,
    breakpoint: d,
    rightContent: _,
    noBorderBottom: c,
  }) => {
    const { width: b } = I(),
      v = !d || b >= d,
      p = o ? 'calc(100% / '.concat(n.length, ')') : void 0,
      u = y.useRef(null),
      [f, r] = y.useState(!1),
      x = () => {
        if (u.current) {
          const { scrollWidth: l, clientWidth: h, scrollLeft: j } = u.current,
            V = l > h,
            k = Math.ceil(j + h) >= l;
          r(V && !k);
        }
      };
    return (
      y.useEffect(
        () => (
          x(), window.addEventListener('resize', x), () => window.removeEventListener('resize', x)
        ),
        [n]
      ),
      t.jsxs('div', {
        className: m('scrollableTabs', c ? i.noBorderBottom : '', { variant: s, isFullWidth: o }),
        'data-sentry-component': 'ScrollableTabs',
        'data-sentry-source-file': 'Tabs.tsx',
        children: [
          t.jsx('div', {
            className: i.scrollableTabsContainer,
            ref: u,
            onScroll: x,
            children: v
              ? n.map((l) =>
                  t.jsx(
                    g,
                    { tab: l, activeKey: e, variant: s, onChange: a, isFullWidth: o, minWidth: p },
                    l.key
                  )
                )
              : t.jsxs(t.Fragment, {
                  children: [
                    n.map((l) =>
                      t.jsx(
                        g,
                        {
                          tab: l,
                          activeKey: e,
                          variant: s,
                          onChange: a,
                          isFullWidth: o,
                          minWidth: p,
                        },
                        l.key
                      )
                    ),
                    t.jsx('div', { style: { marginRight: 36 } }),
                  ],
                }),
          }),
          !v && f && t.jsx(K, {}),
          v && _,
        ],
      })
    );
  },
  ne = ({
    activeKey: e,
    onChange: a,
    variant: s = 'default',
    tabs: n = T,
    isFullWidth: o = !1,
    breakpoint: d,
    noBorderBottom: _,
  }) => {
    var f;
    const [c, b] = y.useState(!1),
      { width: v } = I(),
      p = !d || v >= d,
      u = o ? 'calc(100% / '.concat(n.length, ')') : void 0;
    return t.jsx('div', {
      className: m('root', _ || !p ? i.noBorderBottom : '', { variant: s, isFullWidth: o }),
      'data-sentry-component': 'Tabs',
      'data-sentry-source-file': 'Tabs.tsx',
      children: p
        ? n.map((r) =>
            t.jsx(
              g,
              {
                tab: r,
                activeKey: e,
                variant: s,
                onChange: a,
                endIcon: r.endIcon,
                isFullWidth: o,
                minWidth: u,
              },
              r.key
            )
          )
        : t.jsx(S, {
            isVisible: c,
            overlay: t.jsx(t.Fragment, {
              children: n.map((r) =>
                t.jsx(
                  B,
                  {
                    isActive: r.key === e,
                    title: r.label,
                    onClick: () => {
                      a == null || a(r.key), b(!1);
                    },
                  },
                  r.key
                )
              ),
            }),
            onVisibleChange: () => b((r) => !r),
            children: t.jsx(A, {
              text: ((f = n.find((r) => r.key === e)) == null ? void 0 : f.label) || n[0].label,
              textProps: { fs: 16, lh: 22 },
              textClassName: i.dropdownTriggerText,
              btnClassName: i.dropdownTriggerBtn,
              variant: 'ghost',
              isActive: c,
              endIcon: t.jsx(q, { name: 'ChevronDown', height: 20 }),
            }),
          }),
    });
  },
  se = ({ content: e, activeKey: a }) => {
    const [s, n] = y.useState([a]);
    return (
      y.useEffect(() => {
        s.includes(a) || n([...s, a]);
      }, [a, s]),
      t.jsx(t.Fragment, {
        children: e.map((o) =>
          o.key === a || s.includes(o.key)
            ? t.jsx(
                'div',
                { style: { display: o.key === a ? 'block' : 'none' }, children: o.component },
                o.key
              )
            : null
        ),
      })
    );
  },
  oe = ({ variant: e = 'default', tabs: a = T, isFullWidth: s = !1 }) =>
    t.jsx('div', {
      className: m('root', { variant: e, isFullWidth: s }),
      'data-sentry-component': 'EmpytTabs',
      'data-sentry-source-file': 'Tabs.tsx',
      children: a.map((n) =>
        t.jsx(
          'button',
          {
            type: 'button',
            className: m('tabItem', { tabItemVariant: e }),
            children: t.jsx(w, { fs: 16, lh: 22, className: i.label, children: n.label }),
          },
          n.key
        )
      ),
    });
export { oe as E, ae as S, ne as T, se as a };
//# sourceMappingURL=Tabs-DwMzOQg4.js.map
