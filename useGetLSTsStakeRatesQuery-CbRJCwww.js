var xe = Object.defineProperty;
var M = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty,
  V = Object.prototype.propertyIsEnumerable;
var W = (t, n, s) =>
    n in t ? xe(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[n] = s),
  D = (t, n) => {
    for (var s in n || (n = {})) H.call(n, s) && W(t, s, n[s]);
    if (M) for (var s of M(n)) V.call(n, s) && W(t, s, n[s]);
    return t;
  };
var z = (t, n) => {
  var s = {};
  for (var a in t) H.call(t, a) && n.indexOf(a) < 0 && (s[a] = t[a]);
  if (t != null && M) for (var a of M(t)) n.indexOf(a) < 0 && V.call(t, a) && (s[a] = t[a]);
  return s;
};
import {
  D as j,
  S as ae,
  f as S,
  P as q,
  t as re,
  r as y,
  j as e,
  w as fe,
  a6 as ie,
} from './vendor-DpenelXu.js';
import {
  m as ge,
  o as A,
  Q as oe,
  e as ce,
  ez as U,
  d3 as K,
  s as Y,
  bs as ye,
  f as _,
  h as F,
  eA as R,
  B as J,
  p as C,
  j as ve,
  a9 as be,
  l as Q,
  Y as pe,
  n as we,
  D as Ie,
  a as Te,
  eB as je,
  eC as Pe,
  R as Ne,
  eD as Ge,
  eE as Se,
  eF as Ce,
  eG as Me,
  eH as Le,
  eI as ke,
  eJ as Ae,
  eK as $e,
  eL as Ee,
  eM as De,
  eN as ze,
  eO as Oe,
  eP as Be,
  dX as qe,
  dF as Fe,
} from './index-DTTOaJYD.js';
import { J as Re } from './JupiterService-DZaWMIqf.js';
import { u as We } from './useKswapSdk-CDkxmQxX.js';
import { a as le, b as de, c as me, g as ue, P as v, d as He } from './priceImpact-CmilBeVd.js';
import { N as Ve } from './Notification-DZO90Yks.js';
import { W as O } from './TransactionSettingButton-C7bSz3pz.js';
import { C as Ue } from './CapacityLimitIcon-71duaemc.js';
(function () {
  try {
    var t =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      n = new t.Error().stack;
    n &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[n] = 'ba8b49e0-7751-44ad-9a42-392d10bfb6fd'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-ba8b49e0-7751-44ad-9a42-392d10bfb6fd'));
  } catch (s) {}
})();
function X(t) {
  return new j(t).mul(1e4);
}
const Nn = ({
    inputToOutputTheoreticalPrice: t,
    inputToOutputMarketPrice: n,
    inputAmount: s,
    outputAmount: a,
  }) => {
    const r = a.div(s),
      o = n.sub(r).div(n).abs(),
      i = t.minus(n).div(t);
    return {
      priceImpactBps: X(o),
      theoreticalPriceDivergenceBps: X(i),
      marketPrice: n,
      theoreticalPrice: t,
    };
  },
  Ke = new j(1);
function Gn({
  inputMint: t,
  outputMint: n,
  onlyDirectRoutes: s = !1,
  excludeDexes: a,
  refetchIntervalSeconds: r = 10,
  enabled: o = !0,
  restrictIntermediateTokens: i,
}) {
  const { getPriceByTokenMintDecimal: c } = ge(),
    { getToken: h } = A(),
    { kswapSdk: l } = We(),
    d = async () => {
      if (!t || !n) throw new Error('Invalid swap params. Try again');
      if (!l)
        throw new Error('Kswap SDK is not initialized. Please, refresh the page and try again');
      const x = c(t),
        p = x.eq(0) ? new j(1) : new j(1).div(x),
        w = await Re.getBestRoute({
          kswapSdk: l,
          amountLamports: S.numberToLamportsDecimal(p.mul(100), h(t).decimals),
          inputMint: t,
          outputMint: n,
          slippage: 0,
          mode: 'ExactIn',
          onlyDirectRoutes: s,
          asLegacyTransaction: !1,
          excludeDexes: a,
          restrictIntermediateTokens: i,
        }),
        P = S.lamportsToNumberDecimal(w.inAmount, h(t).decimals);
      return S.lamportsToNumberDecimal(w.outAmount, h(n).decimals).div(P);
    },
    m = ae({
      queryKey: oe.getJupiterPriceFromQuote(t, n, s, a),
      enabled: !!t && !!n && !!l && o,
      queryFn: d,
      onError: (x) => {
        ce(x);
      },
      refetchInterval: r * 1e3,
    }),
    { data: u } = m,
    f = z(m, ['data']);
  return D({ data: u || Ke, queryFn: d }, f);
}
const Sn = ({
    inputMint: t,
    outputMint: n,
    stakeRates: s,
    inputOraclePrice: a,
    outputOraclePrice: r,
    solOraclePrice: o,
  }) => {
    const i = U(t),
      c = U(n);
    if (!i && !c) return a.dividedBy(r);
    const h = new q(t),
      l = new q(n),
      d = s.get(h) || K,
      u = s.get(l) || K;
    if (Y(t) && c) return u.equals(0) ? a.dividedBy(r) : new j(1).div(u);
    if (i && Y(n)) return d.equals(0) ? a.dividedBy(r) : d;
    if (i && c) {
      if (d.equals(0) || u.equals(0)) return a.dividedBy(r);
      const f = d.mul(o),
        m = u.mul(o);
      return f.dividedBy(m);
    }
    if (i) return d.equals(0) ? a.dividedBy(r) : d.mul(o).dividedBy(r);
    if (c) {
      if (u.equals(0)) return a.dividedBy(r);
      const f = u.mul(o);
      return a.dividedBy(f);
    }
    throw new Error(
      'Unknown case for input to output price calculation. Input: '
        .concat(t, ', output: ')
        .concat(n)
    );
  },
  Ye = '_title_1ygta_1',
  Je = '_content_1ygta_9',
  Qe = '_paragraph_1ygta_16',
  Xe = '_buttons_1ygta_22',
  I = { title: Ye, content: Je, paragraph: Qe, buttons: Xe },
  $ = (t, n) => {
    const s = t === 'jlpMultiply' ? le : t === 'multiply' ? de : me;
    return n.abs().gte(s);
  },
  Ze = (t, n, s) => {
    const a = t === 'jlpMultiply' ? le : t === 'multiply' ? de : me;
    return s ? n.gte(a) : -n.gte(a);
  },
  { formatTokenAllDecimals: Z, formatPercent: b } = C;
function et(t, n, s, a, r) {
  const o = $(t, a),
    i = s > v.safe,
    c = r && (r == null ? void 0 : r.greaterThan(R));
  return o && i
    ? 'Continue with '
        .concat(b(n.div(100)), ' price impact and ')
        .concat(b(a.div(100)), ' price divergence')
    : o
      ? 'Continue with '.concat(b(a.div(100)), ' price divergence')
      : i
        ? 'Continue with '.concat(b(n.div(100)), ' price impact')
        : c
          ? 'Proceed With '.concat(b(r == null ? void 0 : r.toNumber(), 2, !0), ' Slippage')
          : 'Continue';
}
function tt(t, n, s, a) {
  const r = $(t, s),
    o = n > v.safe;
  return a && (a == null ? void 0 : a.greaterThan(R)) && !(r || o)
    ? 'Slippage Warning!'
    : 'Price Impact Warning';
}
function nt(t) {
  return t === v.danger ? 'danger' : 'warning';
}
function st(t) {
  return t === v.danger ? 'red' : 'yellow';
}
const Cn = ({
    type: t,
    priceImpactType: n,
    priceImpactBps: s,
    theoreticalPriceDivergenceBps: a,
    marketPrice: r,
    theoreticalPrice: o,
    slippage: i,
    isVisible: c,
    isLoading: h,
    onCancel: l,
    onOk: d,
    isOverSidepanel: u,
  }) => {
    const f = re(),
      m = ue(n, s),
      x = () => {
        f.track('price_impact:modal:confirm', {
          priceImpactPct: s.div(100).toFixed(),
          marketPrice: r.toFixed(),
          theoreticalPrice: o.toString(),
        }),
          d();
      },
      p = () => {
        f.track('price_impact:modal:cancel', {
          priceImpactPct: s.div(100).toFixed(),
          marketPrice: r.toFixed(),
          theoreticalPrice: o.toString(),
        }),
          l();
      },
      w = y.useMemo(() => tt(n, m, a, i), [n, m, i, a]),
      P = y.useMemo(() => et(n, s, m, a, i), [n, s, m, i, a]);
    return e.jsxs(ye, {
      isOpen: c,
      onClose: p,
      isOverSidepanel: u,
      'data-sentry-element': 'Modal',
      'data-sentry-component': 'PriceImpactWarningModal',
      'data-sentry-source-file': 'PriceImpactWarningModal.tsx',
      children: [
        e.jsxs(_, {
          fs: 22,
          lh: 32,
          weight: 'medium',
          className: I.title,
          'data-sentry-element': 'Text',
          'data-sentry-source-file': 'PriceImpactWarningModal.tsx',
          children: [
            e.jsx(F, {
              name: 'Info',
              size: 24,
              color: st(t),
              'data-sentry-element': 'Icon',
              'data-sentry-source-file': 'PriceImpactWarningModal.tsx',
            }),
            w,
          ],
        }),
        e.jsxs('div', {
          className: I.content,
          children: [
            m > v.safe
              ? e.jsxs('div', {
                  className: I.paragraph,
                  children: [
                    'The estimated price impact for this transaction is ',
                    e.jsx('b', { children: b(s.div(100)) }),
                    '. Proceed with caution',
                  ],
                })
              : null,
            $(n, a)
              ? e.jsxs('div', {
                  className: I.paragraph,
                  children: [
                    'Market price ',
                    e.jsxs('b', { children: ['(', Z(r, 9), ')'] }),
                    ' and oracle price ',
                    e.jsxs('b', { children: ['(', Z(o, 9), ')'] }),
                    ' are different by ',
                    e.jsx('b', { children: b(a.div(100)) }),
                    '.',
                  ],
                })
              : null,
            i != null && i.greaterThan(R)
              ? e.jsxs('div', {
                  className: I.paragraph,
                  children: [
                    'Your maximum slippage setting is ',
                    b(i == null ? void 0 : i.toNumber(), 2, !0),
                    '. It’s generally recommended to keep this below 1%.',
                  ],
                })
              : null,
            e.jsx('div', { className: I.paragraph, children: 'Are you sure you want to proceed?' }),
          ],
        }),
        e.jsxs('div', {
          className: I.buttons,
          children: [
            e.jsx(J, {
              size: 'large',
              isFullWidth: !0,
              variant: nt(t),
              onClick: x,
              isLoading: h,
              disabled: h,
              'data-sentry-element': 'Button',
              'data-sentry-source-file': 'PriceImpactWarningModal.tsx',
              children: P,
            }),
            e.jsx(J, {
              size: 'large',
              isFullWidth: !0,
              variant: 'secondary',
              onClick: p,
              'data-sentry-element': 'Button',
              'data-sentry-source-file': 'PriceImpactWarningModal.tsx',
              children: 'Cancel',
            }),
          ],
        }),
      ],
    });
  },
  Mn = () => {
    const [t, n] = y.useState(!1);
    return {
      isModalVisible: t,
      onModalVisibleChange: (a) => {
        n(a);
      },
    };
  },
  at = '_metalGreyGradient_a6hsb_9',
  rt = '_goldGradient_a6hsb_15',
  it = '_silverGradient_a6hsb_21',
  ot = '_bronzeGradient_a6hsb_27',
  ct = '_pointsSilverTextGradient_a6hsb_33',
  lt = '_root_a6hsb_39',
  dt = '_statsPanel_a6hsb_40',
  mt = '_statsItem_a6hsb_45',
  ut = '_flex_a6hsb_50',
  T = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_a6hsb_1',
    metalGreyGradient: at,
    goldGradient: rt,
    silverGradient: it,
    bronzeGradient: ot,
    pointsSilverTextGradient: ct,
    root: lt,
    statsPanel: dt,
    statsItem: mt,
    flex: ut,
  },
  _t = '_container_byb4x_1',
  ht = '_trigger_byb4x_4',
  xt = '_content_byb4x_11',
  ft = '_icon_byb4x_17',
  gt = '__isOpen_byb4x_21',
  G = { container: _t, trigger: ht, content: xt, icon: ft, _isOpen: gt },
  yt = fe(G),
  vt = ({ children: t, defaultIsOpen: n = !1, panel: s, icon: a, isEmpty: r }) => {
    const [o, i] = y.useState(n),
      c = () => {
        i(!o);
      };
    return e.jsxs('div', {
      className: yt(G.root, { isOpen: o }),
      'data-sentry-component': 'CollapsiblePanel',
      'data-sentry-source-file': 'CollapsiblePanel.tsx',
      children: [
        e.jsxs('div', {
          className: G.trigger,
          onClick: c,
          children: [
            t,
            !r &&
              e.jsx('div', {
                className: G.icon,
                children: a || e.jsx(F, { name: 'ChevronDown', size: 16 }),
              }),
          ],
        }),
        o && !r && e.jsx('div', { className: G.content, children: s }),
      ],
    });
  },
  bt = '_metalGreyGradient_1h3ic_9',
  pt = '_goldGradient_1h3ic_15',
  wt = '_silverGradient_1h3ic_21',
  It = '_bronzeGradient_1h3ic_27',
  Tt = '_pointsSilverTextGradient_1h3ic_33',
  jt = '_root_1h3ic_39',
  Pt = '_paragraph_1h3ic_42',
  Nt = '_list_1h3ic_45',
  B = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1h3ic_1',
    metalGreyGradient: bt,
    goldGradient: pt,
    silverGradient: wt,
    bronzeGradient: It,
    pointsSilverTextGradient: Tt,
    root: jt,
    paragraph: Pt,
    list: Nt,
  },
  _e = 'price-impact-tooltip',
  Ln = () =>
    e.jsx(ve, {
      place: 'left',
      uncontrolled: !0,
      clickable: !0,
      id: _e,
      render: () =>
        e.jsx('div', {
          className: B.root,
          children: e.jsxs('div', {
            children: [
              e.jsx('div', {
                className: B.paragraph,
                children:
                  'Price impact is the amount that could be lost on the transaction due to the swap. A large Price Impact could be caused by:',
              }),
              e.jsxs('ul', {
                className: B.list,
                children: [
                  e.jsx('li', { children: '1. Available liquidity in the market' }),
                  e.jsx('li', { children: '2. Trade size' }),
                ],
              }),
            ],
          }),
        }),
      'data-sentry-element': 'Tooltip',
      'data-sentry-component': 'PriceImpactTooltip',
      'data-sentry-source-file': 'PriceImpactTooltip.tsx',
    }),
  Gt = '_metalGreyGradient_1n4qz_9',
  St = '_goldGradient_1n4qz_15',
  Ct = '_silverGradient_1n4qz_21',
  Mt = '_bronzeGradient_1n4qz_27',
  Lt = '_pointsSilverTextGradient_1n4qz_33',
  kt = '_root_1n4qz_39',
  At = '_statsPanel_1n4qz_40',
  $t = '_statsItem_1n4qz_45',
  Et = '_statsSimupationWrapper_1n4qz_51',
  Dt = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1n4qz_1',
    metalGreyGradient: Gt,
    goldGradient: St,
    silverGradient: Ct,
    bronzeGradient: Mt,
    pointsSilverTextGradient: Lt,
    root: kt,
    statsPanel: At,
    statsItem: $t,
    statsSimupationWrapper: Et,
  },
  zt = '_progressContainer_w8gb5_2',
  Ot = '_circularChart_w8gb5_9',
  Bt = '_circle_w8gb5_14',
  qt = '_outerCircle_w8gb5_22',
  L = { progressContainer: zt, circularChart: Ot, circle: Bt, outerCircle: qt },
  Ft = ({ duration: t, isLoading: n, onFinished: s }) => {
    const [a, r] = y.useState(0),
      o = y.useRef(null),
      i = y.useCallback(() => {
        o.current && (clearInterval(o.current), (o.current = null));
      }, []),
      c = y.useCallback(() => {
        i(), r(0);
        const l = setInterval(() => {
          r((d) => {
            const u = d + 100 / t;
            return u >= 100 ? (clearInterval(l), s(), 100) : u;
          });
        }, 1e3);
        o.current = l;
      }, [i, t, s]);
    y.useEffect(
      () => (
        c(),
        () => {
          i();
        }
      ),
      [n, t, c, i]
    );
    const h = ''.concat(a, ', 100');
    return e.jsx('div', {
      className: L.progressContainer,
      'data-sentry-component': 'CircularProgressBar',
      'data-sentry-source-file': 'CircularProgressBar.tsx',
      children: n
        ? e.jsx(be, { size: 16 })
        : e.jsxs('svg', {
            className: L.circularChart,
            width: '14',
            height: '14',
            viewBox: '0 0 36 36',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              e.jsx('path', {
                className: L.outerCircle,
                fill: 'none',
                stroke: 'initial',
                strokeWidth: '4',
                d: 'M18 2.5\n        a 15.5 15.5 0 0 1 0 31\n        a 15.5 15.5 0 0 1 0 -31',
              }),
              e.jsx('path', {
                className: L.circle,
                fill: 'none',
                stroke: 'initial',
                strokeWidth: '4',
                strokeDasharray: h,
                strokeLinecap: 'round',
                d: 'M18 2.5\n        a 15.5 15.5 0 0 1 0 31\n        a 15.5 15.5 0 0 1 0 -31',
              }),
            ],
          }),
    });
  },
  Rt = (t) => {
    const {
        durationSeconds: n = 25,
        onClick: s,
        isLoading: a,
        dataUpdatedAt: r,
        onFinished: o,
      } = t,
      i = re(),
      c = y.useMemo(() => {
        if (!r) return n;
        const l = n - (Date.now() - r) / 1e3;
        return l < 0 ? n : l;
      }, [r, n]),
      h = (l) => {
        i.track('quote_refresh:click'), s(l);
      };
    return e.jsx('div', {
      className: Dt.root,
      onClick: h,
      'data-sentry-component': 'QuoteLoadingIndicator',
      'data-sentry-source-file': 'QuoteLoadingIndicator.tsx',
      children: e.jsx(Ft, {
        onFinished: o,
        duration: c,
        isLoading: a,
        'data-sentry-element': 'CircularProgressBar',
        'data-sentry-source-file': 'QuoteLoadingIndicator.tsx',
      }),
    });
  },
  { formatTokenAllDecimals: k, formatPercent: Wt } = C,
  kn = (t) => {
    var E;
    const { getToken: n } = A(),
      {
        leverageType: s,
        priceImpactBps: a,
        jupiterQuote: r,
        isLoading: o,
        onRefetchData: i = we,
        dataUpdatedAt: c,
        durationSeconds: h,
        withFillPrice: l,
      } = t,
      d = ((E = r == null ? void 0 : r.routePlan) == null ? void 0 : E.length) || 0,
      u = (r == null ? void 0 : r.inAmount) || '0',
      f = (r == null ? void 0 : r.outAmount) || '0',
      m = r == null ? void 0 : r.inputMint,
      x = r == null ? void 0 : r.outputMint,
      p = (he) => {
        he.stopPropagation(), i();
      },
      w = m ? Q(u, n(m).decimals) : new j(0),
      P = x ? Q(f, n(x).decimals) : new j(0);
    return e.jsx(e.Fragment, {
      children: e.jsx(vt, {
        defaultIsOpen: !t.defaultIsCollapsed,
        isEmpty: !d,
        panel: e.jsxs('div', {
          className: T.statsPanel,
          children: [
            e.jsxs('div', {
              className: T.statsItem,
              children: [
                e.jsx(_, { color: 'grey', children: 'Swap In' }),
                e.jsxs(_, { color: 'white', children: [k(w, 6), ' ', m ? n(m).symbol : ''] }),
              ],
            }),
            e.jsxs('div', {
              className: T.statsItem,
              children: [
                e.jsx(_, { color: 'grey', children: 'Minimal Expected Swap Out' }),
                e.jsxs(_, { color: 'white', children: [k(P, 6), ' ', x ? n(x).symbol : ''] }),
              ],
            }),
            l &&
              e.jsxs('div', {
                className: T.statsItem,
                children: [
                  e.jsx(_, { color: 'grey', children: 'Fill Price' }),
                  e.jsxs(_, {
                    color: 'white',
                    children: [
                      k(w.div(P), 6),
                      ' ',
                      m ? n(m).symbol : '',
                      ' /',
                      ' ',
                      x ? n(x).symbol : '',
                    ],
                  }),
                ],
              }),
            e.jsxs('div', {
              className: T.statsItem,
              children: [
                e.jsx(_, { color: 'grey', children: 'Hops' }),
                e.jsx(_, { color: 'white', children: k(d, 0) }),
              ],
            }),
          ],
        }),
        'data-sentry-element': 'CollapsiblePanel',
        'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
        children: e.jsxs('div', {
          className: T.statsItem,
          children: [
            e.jsx(pe, {
              id: _e,
              content: s,
              'data-sentry-element': 'TooltipTrigger',
              'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
              children: e.jsx(_, {
                color: 'grey',
                underline: !0,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
                children: 'Max Price Impact',
              }),
            }),
            e.jsxs('div', {
              className: T.flex,
              children: [
                e.jsx(_, {
                  color: He(s, a),
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
                  children: Wt(a.div(100)),
                }),
                e.jsx(Rt, {
                  onClick: p,
                  onFinished: i,
                  isLoading: o,
                  durationSeconds: h,
                  dataUpdatedAt: c,
                  'data-sentry-element': 'QuoteLoadingIndicator',
                  'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Ht = '_metalGreyGradient_11v1w_9',
  Vt = '_goldGradient_11v1w_15',
  Ut = '_silverGradient_11v1w_21',
  Kt = '_bronzeGradient_11v1w_27',
  Yt = '_pointsSilverTextGradient_11v1w_33',
  Jt = '_paragraph_11v1w_39',
  Qt = '_notificationBody_11v1w_42',
  Xt = '_list_11v1w_47',
  Zt = '_notification_11v1w_42',
  en = '_notificationMb_11v1w_59',
  tn = '_notificationMt_11v1w_62',
  ee = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_11v1w_1',
    metalGreyGradient: Ht,
    goldGradient: Vt,
    silverGradient: Ut,
    bronzeGradient: Kt,
    pointsSilverTextGradient: Yt,
    paragraph: Jt,
    notificationBody: Qt,
    list: Xt,
    notification: Zt,
    notificationMb: en,
    notificationMt: tn,
  },
  nn = '_root_2iyjl_1',
  sn = '_item_2iyjl_4',
  an = '_title_2iyjl_9',
  rn = '_row_2iyjl_14',
  on = '_divider_2iyjl_19',
  cn = '_titleText_2iyjl_22',
  ln = '_whiteText_2iyjl_26',
  g = { root: nn, item: sn, title: an, row: rn, divider: on, titleText: cn, whiteText: ln },
  { formatPercent: dn } = C,
  mn = ({ priceImpactBps: t, dangerLevel: n }) =>
    e.jsx('div', {
      className: g.root,
      'data-sentry-component': 'MaxPriceImpactTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: e.jsxs('div', {
        className: g.item,
        children: [
          e.jsxs('div', {
            className: g.title,
            children: [
              e.jsx(F, {
                name: 'WarningInfo',
                size: 18,
                color: n === v.danger ? 'red' : 'yellow',
                'data-sentry-element': 'Icon',
                'data-sentry-source-file': 'index.tsx',
              }),
              e.jsxs(_, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [' Max Price Impact Is ', dn(t / 100)],
              }),
            ],
          }),
          e.jsx('div', {
            className: g.row,
            children: e.jsx(_, {
              fs: 14,
              lh: 18,
              color: 'grey',
              weight: 'regular',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'index.tsx',
              children:
                'If you proceed with this transaction, you may suffer price impact. This could be due to deposit size, slippage settings, or oracle/market price differences. Consider breaking your trade into smaller amounts.',
            }),
          }),
        ],
      }),
    }),
  { formatTokenAllDecimals: te, formatPercent: un } = C,
  ne = ({ priceDivergenceBps: t, oraclePrice: n, marketPrice: s, priceTokenMint: a }) => {
    const { getToken: r } = A(),
      { symbol: o } = r(a),
      i = t.gt(0);
    return e.jsxs('div', {
      className: g.root,
      'data-sentry-component': 'PriceDivergenceTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: [
        e.jsxs('div', {
          className: g.item,
          children: [
            e.jsxs('div', {
              className: g.title,
              children: [
                i && e.jsx(Ue, {}),
                e.jsxs(_, {
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: ['Oracle & Market Prices Differ by ', un(t.div(100))],
                }),
              ],
            }),
            e.jsxs('div', {
              className: g.row,
              children: [
                e.jsx(_, {
                  fs: 14,
                  lh: 18,
                  color: 'grey',
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: 'Oracle Price',
                }),
                e.jsxs(_, {
                  fs: 14,
                  lh: 18,
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: [te(n, 6), ' ', o],
                }),
              ],
            }),
            e.jsxs('div', {
              className: g.row,
              children: [
                e.jsx(_, {
                  fs: 14,
                  lh: 18,
                  color: 'grey',
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: 'Market Price',
                }),
                e.jsxs(_, {
                  fs: 14,
                  lh: 18,
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: [te(s, 6), ' ', o],
                }),
              ],
            }),
          ],
        }),
        i &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx(Ie, { className: g.divider }),
              e.jsx('div', {
                className: g.item,
                children: e.jsx(_, {
                  fs: 14,
                  lh: 18,
                  color: 'grey',
                  weight: 'regular',
                  children:
                    'This can lead to price impact on your transaction. Please proceed with caution.',
                }),
              }),
            ],
          }),
      ],
    });
  },
  { formatPercent: N, formatTokenAllDecimals: se } = C;
function _n(t, n, s) {
  return t === v.danger ? 'danger' : t === v.warning || $(s, n) ? 'warning' : 'info';
}
const hn = (t) => {
    switch (t) {
      case 'danger':
        return 'danger';
      case 'warning':
        return 'warning';
      case 'info':
        return 'primary';
    }
  },
  An = ({
    priceImpactBps: t,
    collTokenMint: n,
    theoreticalPriceDivergenceBps: s,
    theoreticalPrice: a,
    marketPrice: r,
    type: o,
    variant: i = 'notification',
    isLong: c,
  }) => {
    const { getToken: h } = A(),
      l = ue(o, t),
      d = _n(l, s, o),
      u = h(n),
      f = l > v.safe,
      m = Ze(o, s, c),
      x = s.lt(-10);
    return f || m || x
      ? e.jsx(e.Fragment, {
          children:
            i === 'notification'
              ? e.jsx(Ve, {
                  className: ee.notification,
                  variant: d,
                  text: e.jsxs('div', {
                    className: ee.notificationBody,
                    children: [
                      f
                        ? e.jsxs('div', {
                            children: [
                              'Max price impact is ',
                              e.jsx('b', { children: N(t.div(100)) }),
                              ' due to swap size or current',
                              ' ',
                              u.symbol,
                              ' market price or your slippage settings. Carefully review the wallet values before confirming and consider breaking up the trade into smaller amounts.',
                            ],
                          })
                        : null,
                      m
                        ? e.jsxs('div', {
                            children: [
                              'Market price ',
                              e.jsxs('b', { children: ['(', se(r, 9), ')'] }),
                              ' and oracle price ',
                              e.jsxs('b', { children: ['(', se(a, 9), ')'] }),
                              ' are different by ',
                              e.jsx('b', { children: N(s.div(100)) }),
                              '.',
                            ],
                          })
                        : null,
                    ],
                  }),
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    f
                      ? e.jsx(O, {
                          text: 'Price Impact '.concat(N(t.div(100))),
                          hasIcon: !1,
                          tooltip: e.jsx(mn, { priceImpactBps: t.toNumber(), dangerLevel: l }),
                          variant: hn(d),
                        })
                      : null,
                    m
                      ? e.jsx(O, {
                          text: 'Price Difference '.concat(N(s.div(100))),
                          hasIcon: !1,
                          tooltip: e.jsx(ne, {
                            priceDivergenceBps: s,
                            marketPrice: r,
                            oraclePrice: a,
                            priceTokenMint: n,
                          }),
                          variant: 'warning',
                        })
                      : null,
                    x
                      ? e.jsx(O, {
                          text: 'Buying '
                            .concat(u.symbol, ' at a ')
                            .concat(N(s.div(100).abs()), ' discount'),
                          hasIcon: !1,
                          variant: 'primary',
                          tooltip: e.jsx(ne, {
                            priceDivergenceBps: s,
                            marketPrice: r,
                            oraclePrice: a,
                            priceTokenMint: n,
                          }),
                        })
                      : null,
                  ],
                }),
        })
      : null;
  },
  xn = (t) => t.concat(Array(4 - t.length).fill(ie.U16_MAX)),
  fn = [
    { mintAddress: je, chain: [122] },
    { mintAddress: Pe, chain: [72] },
    { mintAddress: Ne, chain: [51] },
    { mintAddress: Ge, chain: [382] },
    { mintAddress: Se, chain: [383] },
    { mintAddress: Ce, chain: [388] },
    { mintAddress: Me, chain: [497] },
    { mintAddress: Le, chain: [494] },
    { mintAddress: ke, chain: [487] },
    { mintAddress: Ae, chain: [387] },
    { mintAddress: $e, chain: [385] },
    { mintAddress: Ee, chain: [197] },
    { mintAddress: De, chain: [92] },
    { mintAddress: ze, chain: [80] },
    { mintAddress: Oe, chain: [248] },
    { mintAddress: Be, chain: [223] },
    { mintAddress: qe, chain: [137, 51] },
    { mintAddress: Fe, chain: [135, 51] },
  ],
  gn = new S.PubkeyHashMap();
function $n({ refetchIntervalSeconds: t = 10, enabled: n = !0 }) {
  const { web3client: s } = Te(),
    a = async () => {
      if (!s) throw new Error('web3client is required');
      const c = new ie.Scope('mainnet-beta', s.connection),
        h = await c.getOraclePrices(),
        l = await Promise.all(
          fn.map(async (d) => {
            const u = await c.getPriceFromChain(xn(d.chain), h);
            return [new q(d.mintAddress), u.price];
          })
        );
      return new S.PubkeyHashMap(l);
    },
    i = ae({
      queryKey: oe.lstStakeRates,
      enabled: !!s && n,
      queryFn: a,
      onError: (c) => {
        ce(c);
      },
      refetchInterval: t * 1e3,
    }),
    { data: r } = i,
    o = z(i, ['data']);
  return D({ data: r || gn }, o);
}
export {
  vt as C,
  An as P,
  Gn as a,
  Nn as b,
  Sn as c,
  Mn as d,
  $ as e,
  kn as f,
  Cn as g,
  Ln as h,
  g as s,
  $n as u,
};
//# sourceMappingURL=useGetLSTsStakeRatesQuery-CbRJCwww.js.map
