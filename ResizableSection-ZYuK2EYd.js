var ee = Object.defineProperty,
  te = Object.defineProperties;
var se = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var ne = Object.prototype.hasOwnProperty,
  re = Object.prototype.propertyIsEnumerable;
var O = (s, e, t) =>
    e in s ? ee(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (s[e] = t),
  $ = (s, e) => {
    for (var t in e || (e = {})) ne.call(e, t) && O(s, t, e[t]);
    if (L) for (var t of L(e)) re.call(e, t) && O(s, t, e[t]);
    return s;
  },
  P = (s, e) => te(s, se(e));
import { r as y, j as a, ao as oe, t as ae, c as F, w as ie } from './vendor-DpenelXu.js';
import { f as B, D as U, C as ce, h as Y, j as le, p as de, Z as he } from './index-DTTOaJYD.js';
import { D as ue } from './charting_library.esm-C3OAEUrQ.js';
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
      e = new s.Error().stack;
    e &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[e] = 'd78d9066-9a91-48d2-9936-0519fb477b5e'),
      (s._sentryDebugIdIdentifier = 'sentry-dbid-d78d9066-9a91-48d2-9936-0519fb477b5e'));
  } catch (t) {}
})();
const me = '_metalGreyGradient_1gcge_9',
  fe = '_goldGradient_1gcge_15',
  ge = '_silverGradient_1gcge_21',
  _e = '_bronzeGradient_1gcge_27',
  ye = '_pointsSilverTextGradient_1gcge_33',
  pe = '_root_1gcge_39',
  be = '_controls_1gcge_46',
  ve = '_controlSlides_1gcge_52',
  Se = '_slide_1gcge_57',
  xe = '_activeSlide_1gcge_63',
  we = '_dividerWrapper_1gcge_66',
  je = '_slideContent_1gcge_69',
  Ce = '_slideContentSection_1gcge_78',
  Be = '_slideContentSectionDescription_1gcge_83',
  Ge = '_slideButtonAvailable_1gcge_86',
  Te = '_slideButtonDisabled_1gcge_90',
  De = '_contentLink_1gcge_93',
  w = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1gcge_1',
    metalGreyGradient: me,
    goldGradient: fe,
    silverGradient: ge,
    bronzeGradient: _e,
    pointsSilverTextGradient: ye,
    root: pe,
    controls: be,
    controlSlides: ve,
    slide: Se,
    activeSlide: xe,
    dividerWrapper: we,
    slideContent: je,
    slideContentSection: Ce,
    slideContentSectionDescription: Be,
    slideButtonAvailable: Ge,
    slideButtonDisabled: Te,
    contentLink: De,
  },
  ft = ({ slides: s, onClose: e }) => {
    const [t, r] = y.useState(0),
      i = y.useRef(null);
    y.useEffect(() => {
      i.current && (i.current.scrollTop = 0);
    }, [t]);
    const c = () => {
        t > 0 && r(t - 1);
      },
      n = () => {
        t < s.length - 1 ? r(t + 1) : e();
      };
    return a.jsxs('div', {
      className: w.root,
      'data-sentry-component': 'SlideShow',
      'data-sentry-source-file': 'SlideShow.tsx',
      children: [
        a.jsxs('div', {
          className: w.slideContent,
          ref: i,
          children: [
            a.jsx(B, {
              fs: 18,
              lh: 22,
              weight: 'medium',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'SlideShow.tsx',
              children: s[t].title,
            }),
            s[t].sections.map((o) =>
              a.jsx(
                $e,
                {
                  title: o.title,
                  text: o.text,
                  learnMoreLink: o.learnMoreLink,
                  learnMoreText: o.learnMoreText,
                },
                o.title
              )
            ),
          ],
        }),
        a.jsx('div', {
          className: w.dividerWrapper,
          children: a.jsx(U, {
            'data-sentry-element': 'Divider',
            'data-sentry-source-file': 'SlideShow.tsx',
          }),
        }),
        a.jsxs('div', {
          className: w.controls,
          children: [
            a.jsx('div', {
              onClick: c,
              children: a.jsx(B, {
                fs: 14,
                lh: 20,
                className: t > 0 ? w.slideButtonAvailable : w.slideButtonDisabled,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'SlideShow.tsx',
                children: '< Back',
              }),
            }),
            a.jsx('div', {
              className: w.controlSlides,
              children: [...Array(s.length)].map((o, m) =>
                a.jsx(
                  'div',
                  { className: ''.concat(w.slide, ' ').concat(m === t ? w.activeSlide : '') },
                  m
                )
              ),
            }),
            a.jsx('div', {
              onClick: n,
              children: a.jsx(B, {
                fs: 14,
                lh: 20,
                className: w.slideButtonAvailable,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'SlideShow.tsx',
                children: t < s.length - 1 ? 'Next >' : 'Close X',
              }),
            }),
          ],
        }),
      ],
    });
  },
  $e = ({ title: s, text: e, learnMoreText: t, learnMoreLink: r }) => {
    const i = r && (r.startsWith('http://') || r.startsWith('https://')),
      c =
        r && i
          ? a.jsx('a', {
              className: w.contentLink,
              href: r,
              target: '_blank',
              rel: 'noopener noreferrer',
              children: t || 'Learn More',
            })
          : r && a.jsx(oe, { to: r, children: t || 'Learn More' });
    return a.jsxs('div', {
      className: w.slideCondentSection,
      'data-sentry-component': 'SlideContentSection',
      'data-sentry-source-file': 'SlideShow.tsx',
      children: [
        a.jsx(B, {
          fs: 14,
          lh: 20,
          weight: 'medium',
          'data-sentry-element': 'Text',
          'data-sentry-source-file': 'SlideShow.tsx',
          children: s,
        }),
        a.jsxs(B, {
          fs: 14,
          lh: 24,
          className: w.slideContentSectionDescription,
          weight: 'regular',
          'data-sentry-element': 'Text',
          'data-sentry-source-file': 'SlideShow.tsx',
          children: [e, ' ', r && c],
        }),
      ],
    });
  },
  ke = '_metalGreyGradient_ewqjf_9',
  Ie = '_goldGradient_ewqjf_15',
  Re = '_silverGradient_ewqjf_21',
  Ee = '_bronzeGradient_ewqjf_27',
  Pe = '_pointsSilverTextGradient_ewqjf_33',
  Ne = '_root_ewqjf_39',
  ze = '_icon_ewqjf_46',
  Me = '_textSecondary_ewqjf_49',
  Ae = '_textGreen_ewqjf_52',
  Le = '_textGolden_ewqjf_58',
  N = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_ewqjf_1',
    metalGreyGradient: ke,
    goldGradient: Ie,
    silverGradient: Re,
    bronzeGradient: Ee,
    pointsSilverTextGradient: Pe,
    root: Ne,
    icon: ze,
    textSecondary: Me,
    textGreen: Ae,
    textGolden: Le,
  },
  Oe = '_metalGreyGradient_1bj9t_9',
  We = '_goldGradient_1bj9t_15',
  qe = '_silverGradient_1bj9t_21',
  Ve = '_bronzeGradient_1bj9t_27',
  Fe = '_pointsSilverTextGradient_1bj9t_33',
  Ue = '_root_1bj9t_39',
  Ye = '_bottomValueWrapper_1bj9t_45',
  Qe = '_textSecondary_1bj9t_50',
  M = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1bj9t_1',
    metalGreyGradient: Oe,
    goldGradient: We,
    silverGradient: qe,
    bronzeGradient: Ve,
    pointsSilverTextGradient: Fe,
    root: Ue,
    bottomValueWrapper: Ye,
    textSecondary: Qe,
  },
  Je = ({ sections: s, bottomValues: e }) =>
    a.jsxs('div', {
      className: M.root,
      'data-sentry-component': 'StatsCardTooltip',
      'data-sentry-source-file': 'StatsCardTooltip.tsx',
      children: [
        s.map((t, r) =>
          a.jsxs(
            y.Fragment,
            {
              children: [
                t.title && a.jsx(B, { fs: 14, lh: 18, weight: 'medium', children: t.title }),
                a.jsx(B, {
                  fs: 14,
                  lh: 18,
                  weight: 'regular',
                  className: M.textSecondary,
                  children: t.description,
                }),
              ],
            },
            r
          )
        ),
        s.length > 0 && e.length > 0 && a.jsx(U, {}),
        e.map((t) => a.jsx(Xe, { text: t.text, value: t.value }, t.text)),
      ],
    }),
  Xe = ({ text: s, value: e }) =>
    a.jsxs('div', {
      className: M.bottomValueWrapper,
      'data-sentry-component': 'BottomValue',
      'data-sentry-source-file': 'StatsCardTooltip.tsx',
      children: [
        a.jsx(B, {
          fs: 14,
          lh: 18,
          weight: 'medium',
          'data-sentry-element': 'Text',
          'data-sentry-source-file': 'StatsCardTooltip.tsx',
          children: s,
        }),
        a.jsx(B, {
          fs: 14,
          lh: 18,
          weight: 'regular',
          className: M.textSecondary,
          'data-sentry-element': 'Text',
          'data-sentry-source-file': 'StatsCardTooltip.tsx',
          children: e,
        }),
      ],
    }),
  gt = ({
    icon: s,
    text: e,
    value: t,
    valueComponent: r,
    textType: i = 'default',
    tooltipProps: c = { sections: [], bottomValues: [] },
    variant: n = 'default',
  }) => {
    let o = '';
    return (
      i === 'green' && (o = N.textGreen),
      i === 'golden' && (o = N.textGolden),
      a.jsxs(ce, {
        className: N.root,
        'data-sentry-element': 'Card',
        'data-sentry-component': 'StatsCard',
        'data-sentry-source-file': 'StatsCard.tsx',
        children: [
          s &&
            a.jsx(Y, {
              name: s,
              color: n === 'howItWorks' ? 'blue' : 'grey',
              className: N.icon,
              size: 16,
            }),
          c.sections.length > 0 || c.sections.length > 0
            ? a.jsx(le, {
                render: () => a.jsx(Je, $({}, c)),
                children: a.jsx(B, {
                  underline: !0,
                  className: N.textSecondary,
                  lh: n === 'howItWorks' ? 16 : void 0,
                  children: e,
                }),
              })
            : a.jsx(B, {
                color: n === 'howItWorks' ? 'white' : 'grey',
                lh: n === 'howItWorks' ? 16 : void 0,
                children: e,
              }),
          t && a.jsx(B, { className: o, children: t }),
          r,
        ],
      })
    );
  },
  _t = ({ initialKey: s, mixpanelPrefix: e }) => {
    const t = ae(),
      [r, i] = y.useState(s);
    return {
      onChangeKey: y.useCallback(
        (n) => {
          i(n), e && t.track(''.concat(e, ':tab'), { tab: n });
        },
        [t, e]
      ),
      activeKey: r,
    };
  },
  Ze = 'https://benchmarks.pyth.network/v1/shims/tradingview/streaming',
  T = new Map();
let G = null;
function He(s, e, t) {
  var v;
  const { id: r, p: i, t: c } = s,
    n = i,
    o = c * 1e3,
    m = r;
  if (![e, t].includes(m)) return;
  const _ = T.get(e),
    h = T.get(t);
  if (_ && h) {
    const f = _.lastDailyBar,
      p = h.lastDailyBar;
    let g;
    if (m === e) {
      const l = W(f.time);
      o >= l
        ? (g = {
            time: l,
            open: n / h.lastDailyBar.open,
            high: n / h.lastDailyBar.high,
            low: n / h.lastDailyBar.low,
            close: n / h.lastDailyBar.close,
          })
        : (g = P($({}, f), {
            high: n / h.lastDailyBar.high,
            low: n / h.lastDailyBar.low,
            close: n / h.lastDailyBar.close,
          })),
        (_.lastDailyBar = g),
        (v = _.handlers) == null || v.forEach((b) => b.callback(g));
    }
    if (m === t) {
      const l = W(p.time);
      o >= l
        ? (g = { time: l, open: n, high: Math.max(p.high, n), low: Math.min(p.low, n), close: n })
        : (g = P($({}, p), { high: n, low: n, close: n })),
        (h.lastDailyBar = g);
    }
    T.set(e, _), T.set(t, h);
  }
}
function Q(s, e, t = 3, r = 3e3) {
  if (G) return;
  fetch(Ze)
    .then((c) => {
      c.body && (G = c.body.getReader());
      function n() {
        G &&
          G.read()
            .then(({ value: o, done: m }) => {
              if (m) {
                G = null;
                return;
              }
              new TextDecoder()
                .decode(o)
                .split('\n')
                .forEach((h) => {
                  const v = h.trim();
                  if (v)
                    try {
                      const f = JSON.parse(v);
                      He(f, s, e);
                    } catch (f) {}
                }),
                n();
            })
            .catch((o) => {
              console.error('[stream] Error reading from stream:', o), (G = null), i(t, r);
            });
      }
      n();
    })
    .catch((c) => {
      console.error('[stream] Error fetching from streaming endpoint:', c), (G = null);
    });
  function i(c, n) {
    c > 0
      ? setTimeout(() => {
          Q(s, e, c - 1, n);
        }, n)
      : console.error('[stream] Maximum reconnection attempts reached.');
  }
}
function W(s) {
  const e = new Date(s * 1e3);
  return e.setDate(e.getDate() + 1), e.getTime() / 1e3;
}
function Ke(s, e, t, r, i, c, n, o) {
  var h, v;
  const m = s.ticker,
    _ = e.ticker;
  if (m && _) {
    const f = { id: i, callback: r },
      p = T.get(m) || { handlers: [], resolution: t, lastDailyBar: n };
    p.handlers && (p.handlers = (h = p.handlers) == null ? void 0 : h.filter((l) => l.id !== i)),
      (v = p.handlers) == null || v.push(f),
      (p.resolution = t),
      T.set(m, p);
    const g = T.get(_) || { resolution: t, lastDailyBar: o };
    (g.resolution = t), T.set(_, g), G || Q(m, _);
  }
}
function et(s) {
  let e = !0;
  for (const [t, r] of T.entries())
    r.handlers &&
      ((r.handlers = r.handlers.filter((i) => i.id !== s)),
      r.handlers.length > 0 && (e = !1),
      r.handlers.length === 0 ? T.delete(t) : T.set(t, r));
  e && G && (G.cancel(), (G = null));
}
const R = 'https://benchmarks.pyth.network/v1/shims/tradingview',
  z = new Map(),
  yt = {
    onReady: (s) => {
      fetch(''.concat(R, '/config')).then((e) => {
        e.json().then((t) => {
          setTimeout(() =>
            s(P($({}, t), { exchanges: [{ value: '', name: 'All Exchanges', desc: '' }] }))
          );
        });
      });
    },
    searchSymbols: (s, e, t, r) => {
      fetch(''.concat(R, '/search?query=').concat(s)).then((i) => {
        i.json().then((c) => {
          r(c);
        });
      });
    },
    resolveSymbol: async (s, e, t) => {
      const [r, i] = s.split('/'),
        c = await fetch(''.concat(R, '/symbols?symbol=').concat(r, 'USD')).then((o) =>
          o.json().catch(() => t('Cannot resolve symbol'))
        ),
        n = await fetch(''.concat(R, '/symbols?symbol=').concat(i, 'USD')).then((o) =>
          o.json().catch(() => t('Cannot resolve symbol'))
        );
      e(
        P($({ symbolAInfo: c, symbolBInfo: n }, c), { description: ''.concat(r, ' / ').concat(i) })
      );
    },
    getBars: async (s, e, t, r, i) => {
      const { from: c, to: n, firstDataRequest: o } = t,
        { symbolAInfo: m, symbolBInfo: _ } = s,
        h = 365 * 24 * 60 * 60,
        v = 3 * 365 * 24 * 60 * 60,
        f = Math.floor(Date.now() / 1e3) - v;
      let g = Math.max(c, f),
        l;
      const b = [];
      for (; g < n; ) (l = Math.min(n, g + h)), b.push({ from: g, to: l }), (g = l);
      const u = [],
        S = [],
        D = b.map((d) =>
          fetch(
            ''
              .concat(R, '/history?symbol=')
              .concat(m.ticker || '', '&from=')
              .concat(d.from, '&to=')
              .concat(d.to, '&resolution=')
              .concat(e)
          ).then((I) => I.json())
        ),
        j = b.map((d) =>
          fetch(
            ''
              .concat(R, '/history?symbol=')
              .concat(_.ticker || '', '&from=')
              .concat(d.from, '&to=')
              .concat(d.to, '&resolution=')
              .concat(e)
          ).then((I) => I.json())
        ),
        [E, k] = await Promise.all([Promise.all(D), Promise.all(j)]).catch((d) => (i(d), [[], []]));
      E.forEach((d, I) => {
        const x = k[I];
        d.t.length > 0 &&
          x.t.length > 0 &&
          d.t.forEach((J, C) => {
            const X = x.l[C] ? d.l[C] / x.l[C] : 0,
              Z = x.h[C] ? d.h[C] / x.h[C] : 0,
              H = x.o[C] ? d.o[C] / x.o[C] : 0,
              K = x.c[C] ? d.c[C] / x.c[C] : 0;
            u.push({ time: J * 1e3, low: X, high: Z, open: H, close: K });
          });
      }),
        k.forEach((d) => {
          d.t.length > 0 &&
            d.t.forEach((I, x) => {
              S.push({ time: I * 1e3, low: d.l[x], high: d.h[x], open: d.o[x], close: d.c[x] });
            });
        }),
        o && u.length > 0 && z.set(m.ticker, $({}, u[u.length - 1])),
        o && S.length > 0 && z.set(_.ticker, $({}, S[S.length - 1])),
        r(u, { noData: u.length === 0 || S.length === 0 });
    },
    subscribeBars: (s, e, t, r, i) => {
      const { symbolAInfo: c, symbolBInfo: n } = s;
      Ke(c, n, e, t, r, i, z.get(c.ticker), z.get(n.ticker));
    },
    unsubscribeBars: (s) => {
      et(s);
    },
  },
  tt = '_wrapper_miogb_1',
  st = { wrapper: tt },
  { formatPrice: q } = de,
  V = (s) => {
    if (s.current)
      try {
        s.current.forEach((e) => {
          e && e.remove();
        });
      } catch (e) {
        F(e);
      }
  },
  nt = {},
  rt = [],
  pt = ({
    tokenASymbol: s,
    tokenBSymbol: e,
    datafeed: t,
    interval: r,
    priceLines: i = rt,
    options: c = nt,
  }) => {
    const n = y.useRef(),
      o = y.useRef(null),
      [m, _] = y.useState(!1),
      h = y.useRef([]),
      v = y.useRef(!1),
      f = y.useMemo(
        () => ({
          symbol: ''.concat(s, '/').concat(e),
          interval: r || 'D',
          datafeedUrl: 'https://benchmarks.pyth.network/v1/shims/tradingview',
          libraryPath: '/charting_library/',
          chartsStorageApiVersion: '1.1',
          clientId: 'tradingview.com',
          userId: 'public_user_id',
          fullscreen: !1,
          autosize: !0,
          studiesOverrides: {},
        }),
        [s, e, r]
      ),
      p = y.useCallback(() => {
        var b;
        const l = (b = o.current) == null ? void 0 : b.activeChart();
        if (l) {
          const u = l.getTimeScale(),
            S = u.barSpacing(),
            D = u.rightOffset();
          l.executeActionById('chartReset'),
            u.setBarSpacing(S),
            u.setRightOffset(D),
            (v.current = !1);
        }
      }, []),
      g = y.useCallback(() => {
        if (!(!m || !o.current))
          try {
            if ((V(h), i.length > 0)) {
              const l = o.current.activeChart(),
                b = i.filter((u) => u.forceLineInViewOnMainPane);
              for (let u = 0; u < i.length; u++) {
                const S = i[u],
                  { value: D, color: j = '#49afe9', title: E, textColor: k = '#fff' } = S;
                try {
                  const d = l.createPositionLine();
                  d
                    .setPrice(D)
                    .setQuantity(''.concat(E, ': ').concat(q(D)) || '')
                    .setText('')
                    .setLineStyle(1)
                    .setLineColor(j)
                    .setBodyBackgroundColor(j)
                    .setBodyBorderColor(j)
                    .setQuantityBackgroundColor(j)
                    .setQuantityBorderColor(j)
                    .setQuantityTextColor(k),
                    (h.current[u] = d);
                } catch (d) {
                  console.error('Error creating position line:', d);
                }
              }
              if (b.length > 0) {
                const u = l.getPanes()[0].getRightPriceScales()[0];
                if (u) {
                  const S = u.getVisiblePriceRange();
                  if (S) {
                    const D = b.filter((j) => j.value >= S.from * 0.5 && j.value <= S.to * 1.5);
                    if (D.length > 0) {
                      const j = Math.min(...D.map((k) => k.value * 0.995), S.from),
                        E = Math.max(...D.map((k) => k.value * 1.005), S.to);
                      u.setVisiblePriceRange({ from: j, to: E }), (v.current = !0);
                    } else p();
                  }
                }
              }
            } else v.current && p();
          } catch (l) {
            F(l);
          }
      }, [m, i, p]);
    return (
      y.useEffect(() => {
        const l = $(
            {
              symbol: s && e ? ''.concat(s, '/').concat(e) : f.symbol,
              datafeed: t,
              interval: f.interval,
              container: n.current,
              library_path: f.libraryPath,
              locale: 'en',
              disabled_features: [
                'use_localstorage_for_settings',
                'left_toolbar',
                'timeframes_toolbar',
                'header_symbol_search',
                'header_compare',
                'header_screenshot',
                'header_undo_redo',
                'header_quick_search',
                'legend_inplace_edit',
              ],
              charts_storage_api_version: f.chartsStorageApiVersion,
              client_id: f.clientId,
              user_id: f.userId,
              fullscreen: f.fullscreen,
              autosize: f.autosize,
              studies_overrides: f.studiesOverrides,
              theme: 'dark',
              timezone: 'Etc/UTC',
              overrides: {
                'paneProperties.backgroundType': 'solid',
                'paneProperties.background': '#121C30',
                'headerProperties.background': '#121C30',
              },
              custom_css_url: '../tv-chart-styles.css',
              custom_formatters: { priceFormatterFactory: () => ({ format: (u) => q(u) }) },
              loading_screen: { backgroundColor: '#121C30', foregroundColor: '#121C30' },
            },
            c
          ),
          b = new ue(l);
        return (
          (o.current = b),
          b.onChartReady(() => {
            _(!0);
          }),
          () => {
            _(!1), V(h), b.remove(), (o.current = null);
          }
        );
      }, [n, t, f, c, s, e]),
      y.useEffect(() => {
        m && g();
      }, [m, g]),
      a.jsx('div', {
        ref: n,
        className: st.wrapper,
        'data-sentry-component': 'TradingviewChart',
        'data-sentry-source-file': 'TradingviewChart.tsx',
      })
    );
  },
  ot = '_resizableSection_a977l_1',
  at = '_content_a977l_5',
  it = '__isBlockPointerEvents_a977l_8',
  ct = '_resizer_a977l_11',
  A = { resizableSection: ot, content: at, _isBlockPointerEvents: it, resizer: ct },
  lt = ie(A),
  bt = ({ children: s, startHeight: e }) => {
    const [t, r] = y.useState(e),
      [i, c] = y.useState(!1),
      n = y.useRef(null),
      o = y.useRef(!1),
      m = () => {
        c(!0),
          (o.current = !0),
          document.addEventListener('mousemove', _),
          document.addEventListener('mouseup', h);
      },
      _ = (g) => {
        if (o.current && n.current) {
          const l = g.clientY - n.current.getBoundingClientRect().top;
          l < e ? r(e) : r(l);
        }
      },
      h = () => {
        c(!1),
          (o.current = !1),
          document.removeEventListener('mousemove', _),
          document.removeEventListener('mouseup', h);
      },
      v = () => {
        (o.current = !0),
          document.addEventListener('touchmove', f, { passive: !1 }),
          document.addEventListener('touchend', p);
      },
      f = (g) => {
        if (o.current && n.current) {
          const b = g.touches[0].clientY - n.current.getBoundingClientRect().top;
          b > e && r(b), g.preventDefault();
        }
      },
      p = () => {
        (o.current = !1),
          document.removeEventListener('touchmove', f),
          document.removeEventListener('touchend', p);
      };
    return a.jsxs('div', {
      className: A.resizableSection,
      ref: n,
      style: { height: ''.concat(t, 'px') },
      'data-sentry-component': 'ResizableSection',
      'data-sentry-source-file': 'ResizableSection.tsx',
      children: [
        a.jsx('div', { className: lt('content', { isBlockPointerEvents: i }), children: s }),
        a.jsx(he, {
          className: A.resizer,
          icon: a.jsx(Y, { name: 'UnfoldMore', size: 24 }),
          onMouseDown: m,
          onTouchStart: v,
          variant: 'ghost',
          'data-sentry-element': 'IconButton',
          'data-sentry-source-file': 'ResizableSection.tsx',
        }),
      ],
    });
  };
export { bt as R, gt as S, pt as T, ft as a, Je as b, yt as d, _t as u };
//# sourceMappingURL=ResizableSection-ZYuK2EYd.js.map
