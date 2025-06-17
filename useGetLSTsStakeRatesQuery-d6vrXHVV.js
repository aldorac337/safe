var we = Object.defineProperty;
var k = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty,
  J = Object.prototype.propertyIsEnumerable;
var q = (t, n, s) =>
    n in t ? we(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[n] = s),
  Z = (t, n) => {
    for (var s in n || (n = {})) K.call(n, s) && q(t, s, n[s]);
    if (k) for (var s of k(n)) J.call(n, s) && q(t, s, n[s]);
    return t;
  };
var Q = (t, n) => {
  var s = {};
  for (var a in t) K.call(t, a) && n.indexOf(a) < 0 && (s[a] = t[a]);
  if (t != null && k) for (var a of k(t)) n.indexOf(a) < 0 && J.call(t, a) && (s[a] = t[a]);
  return s;
};
import {
  P as F,
  D as N,
  t as le,
  r as p,
  j as e,
  w as Pe,
  f as de,
  S as Te,
  a6 as me,
} from './vendor-CFRnETMC.js';
import {
  eC as X,
  d2 as ee,
  s as te,
  br as Ne,
  f as c,
  h as W,
  eD as B,
  B as ne,
  p as M,
  j as Ce,
  a9 as Ge,
  o as E,
  l as A,
  Y as he,
  n as _e,
  D as Se,
  a as Me,
  Q as Le,
  e as ke,
  eE as $e,
  eF as Ae,
  R as Ee,
  eG as De,
  eH as Oe,
  eI as ze,
  eJ as Re,
  eK as Fe,
  eL as We,
  eM as Be,
  eN as He,
  eO as Ve,
  eP as Ue,
  eQ as Ye,
  eR as qe,
  eS as Ke,
  dZ as Je,
  dE as Ze,
  dH as Qe,
} from './index-DwWh_48g.js';
import { a as ue, b as xe, c as fe, g as ge, P as v, d as ye } from './priceImpact-BN5_pZuY.js';
import { N as Xe } from './Notification-BZNlcLWy.js';
import { W as z } from './TransactionSettingButton-DR4gT726.js';
import { C as et } from './CapacityLimitIcon-DPnNcMgM.js';
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
      (t._sentryDebugIds[n] = 'dbba12cf-af61-4175-a367-421ca8c4b14b'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-dbba12cf-af61-4175-a367-421ca8c4b14b'));
  } catch (s) {}
})();
const Ln = ({
  inputMint: t,
  outputMint: n,
  stakeRates: s,
  inputOraclePrice: a,
  outputOraclePrice: r,
  solOraclePrice: o,
}) => {
  const i = X(t),
    l = X(n);
  if (!i && !l) return a.dividedBy(r);
  const m = new F(t),
    d = new F(n),
    u = s.get(m) || ee,
    h = s.get(d) || ee;
  if (te(t) && l) return h.equals(0) ? a.dividedBy(r) : new N(1).div(h);
  if (i && te(n)) return u.equals(0) ? a.dividedBy(r) : u;
  if (i && l) {
    if (u.equals(0) || h.equals(0)) return a.dividedBy(r);
    const f = u.mul(o),
      _ = h.mul(o);
    return f.dividedBy(_);
  }
  if (i) return u.equals(0) ? a.dividedBy(r) : u.mul(o).dividedBy(r);
  if (l) {
    if (h.equals(0)) return a.dividedBy(r);
    const f = h.mul(o);
    return a.dividedBy(f);
  }
  throw new Error(
    'Unknown case for input to output price calculation. Input: '.concat(t, ', output: ').concat(n)
  );
};
function se(t) {
  return new N(t).mul(1e4);
}
const kn = ({
    inputToOutputTheoreticalPrice: t,
    inputToOutputMarketPrice: n,
    inputAmount: s,
    outputAmount: a,
    leverage: r,
  }) => {
    const o = a.div(s),
      i = n.sub(o).div(n).abs(),
      l = t.minus(n).div(t);
    return {
      priceImpactBps: se(i),
      theoreticalPriceDivergenceBps: se(l),
      marketPrice: n,
      theoreticalPrice: t,
    };
  },
  tt = '_title_1ygta_1',
  nt = '_content_1ygta_9',
  st = '_paragraph_1ygta_16',
  at = '_buttons_1ygta_22',
  j = { title: tt, content: nt, paragraph: st, buttons: at },
  D = (t, n) => {
    const s = t === 'jlpMultiply' ? ue : t === 'multiply' ? xe : fe;
    return n.abs().gte(s);
  },
  rt = (t, n, s) => {
    const a = t === 'jlpMultiply' ? ue : t === 'multiply' ? xe : fe;
    return s ? n.gte(a) : -n.gte(a);
  },
  { formatTokenAllDecimals: ae, formatPercent: I } = M;
function it(t, n, s, a, r) {
  const o = D(t, a),
    i = s > v.safe,
    l = r && (r == null ? void 0 : r.greaterThan(B));
  return o && i
    ? 'Continue with '
        .concat(I(n.div(100)), ' price impact and ')
        .concat(I(a.div(100)), ' price divergence')
    : o
      ? 'Continue with '.concat(I(a.div(100)), ' price divergence')
      : i
        ? 'Continue with '.concat(I(n.div(100)), ' price impact')
        : l
          ? 'Proceed With '.concat(I(r == null ? void 0 : r.toNumber(), 2, !0), ' Slippage')
          : 'Continue';
}
function ot(t, n, s, a) {
  const r = D(t, s),
    o = n > v.safe;
  return a && (a == null ? void 0 : a.greaterThan(B)) && !(r || o)
    ? 'Slippage Warning!'
    : 'Price Impact Warning';
}
function ct(t) {
  return t === v.danger ? 'danger' : 'warning';
}
function lt(t) {
  return t === v.danger ? 'red' : 'yellow';
}
const $n = ({
    type: t,
    priceImpactType: n,
    priceImpactBps: s,
    theoreticalPriceDivergenceBps: a,
    marketPrice: r,
    theoreticalPrice: o,
    slippage: i,
    isVisible: l,
    isLoading: m,
    onCancel: d,
    onOk: u,
    isOverSidepanel: h,
  }) => {
    const f = le(),
      _ = ge(n, s),
      x = () => {
        f.track('price_impact:modal:confirm', {
          priceImpactPct: s.div(100).toFixed(),
          marketPrice: r.toFixed(),
          theoreticalPrice: o.toString(),
        }),
          u();
      },
      b = () => {
        f.track('price_impact:modal:cancel', {
          priceImpactPct: s.div(100).toFixed(),
          marketPrice: r.toFixed(),
          theoreticalPrice: o.toString(),
        }),
          d();
      },
      P = p.useMemo(() => ot(n, _, a, i), [n, _, i, a]),
      T = p.useMemo(() => it(n, s, _, a, i), [n, s, _, i, a]);
    return e.jsxs(Ne, {
      isOpen: l,
      onClose: b,
      isOverSidepanel: h,
      'data-sentry-element': 'Modal',
      'data-sentry-component': 'PriceImpactWarningModal',
      'data-sentry-source-file': 'PriceImpactWarningModal.tsx',
      children: [
        e.jsxs(c, {
          fs: 22,
          lh: 32,
          weight: 'medium',
          className: j.title,
          'data-sentry-element': 'Text',
          'data-sentry-source-file': 'PriceImpactWarningModal.tsx',
          children: [
            e.jsx(W, {
              name: 'Info',
              size: 24,
              color: lt(t),
              'data-sentry-element': 'Icon',
              'data-sentry-source-file': 'PriceImpactWarningModal.tsx',
            }),
            P,
          ],
        }),
        e.jsxs('div', {
          className: j.content,
          children: [
            _ > v.safe
              ? e.jsxs('div', {
                  className: j.paragraph,
                  children: [
                    'The estimated price impact for this transaction is ',
                    e.jsx('b', { children: I(s.div(100)) }),
                    '. Proceed with caution',
                  ],
                })
              : null,
            D(n, a)
              ? e.jsxs('div', {
                  className: j.paragraph,
                  children: [
                    'Market price ',
                    e.jsxs('b', { children: ['(', ae(r, 9), ')'] }),
                    ' and oracle price ',
                    e.jsxs('b', { children: ['(', ae(o, 9), ')'] }),
                    ' are different by ',
                    e.jsx('b', { children: I(a.div(100)) }),
                    '.',
                  ],
                })
              : null,
            i != null && i.greaterThan(B)
              ? e.jsxs('div', {
                  className: j.paragraph,
                  children: [
                    'Your maximum slippage setting is ',
                    I(i == null ? void 0 : i.toNumber(), 2, !0),
                    '. It’s generally recommended to keep this below 1%.',
                  ],
                })
              : null,
            e.jsx('div', { className: j.paragraph, children: 'Are you sure you want to proceed?' }),
          ],
        }),
        e.jsxs('div', {
          className: j.buttons,
          children: [
            e.jsx(ne, {
              size: 'large',
              isFullWidth: !0,
              variant: ct(t),
              onClick: x,
              isLoading: m,
              disabled: m,
              'data-sentry-element': 'Button',
              'data-sentry-source-file': 'PriceImpactWarningModal.tsx',
              children: T,
            }),
            e.jsx(ne, {
              size: 'large',
              isFullWidth: !0,
              variant: 'secondary',
              onClick: b,
              'data-sentry-element': 'Button',
              'data-sentry-source-file': 'PriceImpactWarningModal.tsx',
              children: 'Cancel',
            }),
          ],
        }),
      ],
    });
  },
  An = () => {
    const [t, n] = p.useState(!1);
    return {
      isModalVisible: t,
      onModalVisibleChange: (a) => {
        n(a);
      },
    };
  },
  dt = '_metalGreyGradient_1glom_9',
  mt = '_goldGradient_1glom_15',
  ht = '_silverGradient_1glom_21',
  _t = '_bronzeGradient_1glom_27',
  ut = '_pointsSilverTextGradient_1glom_33',
  xt = '_root_1glom_39',
  ft = '_statsPanel_1glom_40',
  gt = '_statsItem_1glom_45',
  yt = '_flex_1glom_50',
  pt = '_router_1glom_55',
  g = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1glom_1',
    metalGreyGradient: dt,
    goldGradient: mt,
    silverGradient: ht,
    bronzeGradient: _t,
    pointsSilverTextGradient: ut,
    root: xt,
    statsPanel: ft,
    statsItem: gt,
    flex: yt,
    router: pt,
  },
  vt = '_container_byb4x_1',
  bt = '_trigger_byb4x_4',
  It = '_content_byb4x_11',
  jt = '_icon_byb4x_17',
  wt = '__isOpen_byb4x_21',
  S = { container: vt, trigger: bt, content: It, icon: jt, _isOpen: wt },
  Pt = Pe(S),
  pe = ({ children: t, defaultIsOpen: n = !1, panel: s, icon: a, isEmpty: r }) => {
    const [o, i] = p.useState(n),
      l = () => {
        i(!o);
      };
    return e.jsxs('div', {
      className: Pt(S.root, { isOpen: o }),
      'data-sentry-component': 'CollapsiblePanel',
      'data-sentry-source-file': 'CollapsiblePanel.tsx',
      children: [
        e.jsxs('div', {
          className: S.trigger,
          onClick: l,
          children: [
            t,
            !r &&
              e.jsx('div', {
                className: S.icon,
                children: a || e.jsx(W, { name: 'ChevronDown', size: 16 }),
              }),
          ],
        }),
        o && !r && e.jsx('div', { className: S.content, children: s }),
      ],
    });
  },
  Tt = '_metalGreyGradient_1h3ic_9',
  Nt = '_goldGradient_1h3ic_15',
  Ct = '_silverGradient_1h3ic_21',
  Gt = '_bronzeGradient_1h3ic_27',
  St = '_pointsSilverTextGradient_1h3ic_33',
  Mt = '_root_1h3ic_39',
  Lt = '_paragraph_1h3ic_42',
  kt = '_list_1h3ic_45',
  R = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1h3ic_1',
    metalGreyGradient: Tt,
    goldGradient: Nt,
    silverGradient: Ct,
    bronzeGradient: Gt,
    pointsSilverTextGradient: St,
    root: Mt,
    paragraph: Lt,
    list: kt,
  },
  H = 'price-impact-tooltip',
  En = () =>
    e.jsx(Ce, {
      place: 'left',
      uncontrolled: !0,
      clickable: !0,
      id: H,
      render: () =>
        e.jsx('div', {
          className: R.root,
          children: e.jsxs('div', {
            children: [
              e.jsx('div', {
                className: R.paragraph,
                children:
                  'Price impact is the amount that could be lost on the transaction due to the swap. A large Price Impact could be caused by:',
              }),
              e.jsxs('ul', {
                className: R.list,
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
  $t = '_metalGreyGradient_1n4qz_9',
  At = '_goldGradient_1n4qz_15',
  Et = '_silverGradient_1n4qz_21',
  Dt = '_bronzeGradient_1n4qz_27',
  Ot = '_pointsSilverTextGradient_1n4qz_33',
  zt = '_root_1n4qz_39',
  Rt = '_statsPanel_1n4qz_40',
  Ft = '_statsItem_1n4qz_45',
  Wt = '_statsSimupationWrapper_1n4qz_51',
  Bt = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1n4qz_1',
    metalGreyGradient: $t,
    goldGradient: At,
    silverGradient: Et,
    bronzeGradient: Dt,
    pointsSilverTextGradient: Ot,
    root: zt,
    statsPanel: Rt,
    statsItem: Ft,
    statsSimupationWrapper: Wt,
  },
  Ht = '_progressContainer_w8gb5_2',
  Vt = '_circularChart_w8gb5_9',
  Ut = '_circle_w8gb5_14',
  Yt = '_outerCircle_w8gb5_22',
  $ = { progressContainer: Ht, circularChart: Vt, circle: Ut, outerCircle: Yt },
  qt = ({ duration: t, isLoading: n, onFinished: s }) => {
    const [a, r] = p.useState(0),
      o = p.useRef(null),
      i = p.useCallback(() => {
        o.current && (clearInterval(o.current), (o.current = null));
      }, []),
      l = p.useCallback(() => {
        i(), r(0);
        const d = setInterval(() => {
          r((u) => {
            const h = u + 100 / t;
            return h >= 100 ? (clearInterval(d), s(), 100) : h;
          });
        }, 1e3);
        o.current = d;
      }, [i, t, s]);
    p.useEffect(
      () => (
        l(),
        () => {
          i();
        }
      ),
      [n, t, l, i]
    );
    const m = ''.concat(a, ', 100');
    return e.jsx('div', {
      className: $.progressContainer,
      'data-sentry-component': 'CircularProgressBar',
      'data-sentry-source-file': 'CircularProgressBar.tsx',
      children: n
        ? e.jsx(Ge, { size: 16 })
        : e.jsxs('svg', {
            className: $.circularChart,
            width: '14',
            height: '14',
            viewBox: '0 0 36 36',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              e.jsx('path', {
                className: $.outerCircle,
                fill: 'none',
                stroke: 'initial',
                strokeWidth: '4',
                d: 'M18 2.5\n        a 15.5 15.5 0 0 1 0 31\n        a 15.5 15.5 0 0 1 0 -31',
              }),
              e.jsx('path', {
                className: $.circle,
                fill: 'none',
                stroke: 'initial',
                strokeWidth: '4',
                strokeDasharray: m,
                strokeLinecap: 'round',
                d: 'M18 2.5\n        a 15.5 15.5 0 0 1 0 31\n        a 15.5 15.5 0 0 1 0 -31',
              }),
            ],
          }),
    });
  },
  ve = (t) => {
    const {
        durationSeconds: n = 25,
        onClick: s,
        isLoading: a,
        dataUpdatedAt: r,
        onFinished: o,
      } = t,
      i = le(),
      l = p.useMemo(() => {
        if (!r) return n;
        const d = n - (Date.now() - r) / 1e3;
        return d < 0 ? n : d;
      }, [r, n]),
      m = (d) => {
        i.track('quote_refresh:click'), s(d);
      };
    return e.jsx('div', {
      className: Bt.root,
      onClick: m,
      'data-sentry-component': 'QuoteLoadingIndicator',
      'data-sentry-source-file': 'QuoteLoadingIndicator.tsx',
      children: e.jsx(qt, {
        onFinished: o,
        duration: l,
        isLoading: a,
        'data-sentry-element': 'CircularProgressBar',
        'data-sentry-source-file': 'QuoteLoadingIndicator.tsx',
      }),
    });
  },
  { formatTokenAllDecimals: w, formatPercent: be } = M,
  Dn = ({
    leverageType: t,
    priceImpactBps: n,
    quote: s,
    isLoading: a,
    onRefetchData: r = _e,
    dataUpdatedAt: o,
    durationSeconds: i,
    withFillPrice: l,
    inputMint: m,
    outputMint: d,
    defaultIsCollapsed: u,
    isLong: h = !0,
    collTokenMint: f,
    debtTokenMint: _,
  }) => {
    var V, U, Y;
    const { getToken: x } = E(),
      b = (s == null ? void 0 : s.routerType) || '',
      P = (V = s == null ? void 0 : s.amountsExactIn.amountIn.toNumber()) != null ? V : 0,
      T =
        (Y =
          (U = s == null ? void 0 : s.amountsExactIn.amountOutGuaranteed) == null
            ? void 0
            : U.toNumber()) != null
          ? Y
          : 0,
      L = (je) => {
        je.stopPropagation(), r();
      },
      C = m ? A(P, x(m).decimals) : new N(0),
      O = d ? A(T, x(d).decimals) : new N(0),
      Ie = (h ? _ === m : f === m) ? C.div(O) : O.div(C);
    return e.jsx(e.Fragment, {
      children: e.jsx(pe, {
        defaultIsOpen: !u,
        isEmpty: !b,
        panel: e.jsxs('div', {
          className: g.statsPanel,
          children: [
            e.jsxs('div', {
              className: g.statsItem,
              children: [
                e.jsx(c, { color: 'grey', children: 'Swap In' }),
                e.jsxs(c, { color: 'white', children: [w(C, 6), ' ', m ? x(m).symbol : ''] }),
              ],
            }),
            e.jsxs('div', {
              className: g.statsItem,
              children: [
                e.jsx(c, { color: 'grey', children: 'Minimal Expected Swap Out' }),
                e.jsxs(c, { color: 'white', children: [w(O, 6), ' ', d ? x(d).symbol : ''] }),
              ],
            }),
            l &&
              m &&
              d &&
              e.jsxs('div', {
                className: g.statsItem,
                children: [
                  e.jsx(c, { color: 'grey', children: 'Fill Price' }),
                  e.jsxs(c, {
                    color: 'white',
                    children: [w(Ie, 6), ' ', x(h ? f : _).symbol, ' /', ' ', x(h ? _ : f).symbol],
                  }),
                ],
              }),
            e.jsxs('div', {
              className: g.statsItem,
              children: [
                e.jsx(c, { color: 'grey', children: 'Router' }),
                e.jsx(c, { color: 'white', className: g.router, children: b }),
              ],
            }),
          ],
        }),
        'data-sentry-element': 'CollapsiblePanel',
        'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
        children: e.jsxs('div', {
          className: g.statsItem,
          children: [
            e.jsx(he, {
              id: H,
              content: t,
              'data-sentry-element': 'TooltipTrigger',
              'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
              children: e.jsx(c, {
                color: 'grey',
                underline: !0,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
                children: 'Max Price Impact',
              }),
            }),
            e.jsxs('div', {
              className: g.flex,
              children: [
                e.jsx(c, {
                  color: ye(t, n),
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
                  children: be(n.div(100)),
                }),
                e.jsx(ve, {
                  onClick: L,
                  onFinished: r,
                  isLoading: a,
                  durationSeconds: i,
                  dataUpdatedAt: o,
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
  On = (t) => {
    var L;
    const { getToken: n } = E(),
      {
        leverageType: s,
        priceImpactBps: a,
        jupiterQuote: r,
        isLoading: o,
        onRefetchData: i = _e,
        dataUpdatedAt: l,
        durationSeconds: m,
        withFillPrice: d,
      } = t,
      u = ((L = r == null ? void 0 : r.routePlan) == null ? void 0 : L.length) || 0,
      h = (r == null ? void 0 : r.inAmount) || '0',
      f = (r == null ? void 0 : r.outAmount) || '0',
      _ = r == null ? void 0 : r.inputMint,
      x = r == null ? void 0 : r.outputMint,
      b = (C) => {
        C.stopPropagation(), i();
      },
      P = _ ? A(h, n(_).decimals) : new N(0),
      T = x ? A(f, n(x).decimals) : new N(0);
    return e.jsx(e.Fragment, {
      children: e.jsx(pe, {
        defaultIsOpen: !t.defaultIsCollapsed,
        isEmpty: !u,
        panel: e.jsxs('div', {
          className: g.statsPanel,
          children: [
            e.jsxs('div', {
              className: g.statsItem,
              children: [
                e.jsx(c, { color: 'grey', children: 'Swap In' }),
                e.jsxs(c, { color: 'white', children: [w(P, 6), ' ', _ ? n(_).symbol : ''] }),
              ],
            }),
            e.jsxs('div', {
              className: g.statsItem,
              children: [
                e.jsx(c, { color: 'grey', children: 'Minimal Expected Swap Out' }),
                e.jsxs(c, { color: 'white', children: [w(T, 6), ' ', x ? n(x).symbol : ''] }),
              ],
            }),
            d &&
              e.jsxs('div', {
                className: g.statsItem,
                children: [
                  e.jsx(c, { color: 'grey', children: 'Fill Price' }),
                  e.jsxs(c, {
                    color: 'white',
                    children: [
                      w(P.div(T), 6),
                      ' ',
                      _ ? n(_).symbol : '',
                      ' /',
                      ' ',
                      x ? n(x).symbol : '',
                    ],
                  }),
                ],
              }),
            e.jsxs('div', {
              className: g.statsItem,
              children: [
                e.jsx(c, { color: 'grey', children: 'Hops' }),
                e.jsx(c, { color: 'white', children: w(u, 0) }),
              ],
            }),
          ],
        }),
        'data-sentry-element': 'CollapsiblePanel',
        'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
        children: e.jsxs('div', {
          className: g.statsItem,
          children: [
            e.jsx(he, {
              id: H,
              content: s,
              'data-sentry-element': 'TooltipTrigger',
              'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
              children: e.jsx(c, {
                color: 'grey',
                underline: !0,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
                children: 'Max Price Impact',
              }),
            }),
            e.jsxs('div', {
              className: g.flex,
              children: [
                e.jsx(c, {
                  color: ye(s, a),
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'PriceImpactCollapsiblePanel.tsx',
                  children: be(a.div(100)),
                }),
                e.jsx(ve, {
                  onClick: b,
                  onFinished: i,
                  isLoading: o,
                  durationSeconds: m,
                  dataUpdatedAt: l,
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
  Kt = '_metalGreyGradient_11v1w_9',
  Jt = '_goldGradient_11v1w_15',
  Zt = '_silverGradient_11v1w_21',
  Qt = '_bronzeGradient_11v1w_27',
  Xt = '_pointsSilverTextGradient_11v1w_33',
  en = '_paragraph_11v1w_39',
  tn = '_notificationBody_11v1w_42',
  nn = '_list_11v1w_47',
  sn = '_notification_11v1w_42',
  an = '_notificationMb_11v1w_59',
  rn = '_notificationMt_11v1w_62',
  re = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_11v1w_1',
    metalGreyGradient: Kt,
    goldGradient: Jt,
    silverGradient: Zt,
    bronzeGradient: Qt,
    pointsSilverTextGradient: Xt,
    paragraph: en,
    notificationBody: tn,
    list: nn,
    notification: sn,
    notificationMb: an,
    notificationMt: rn,
  },
  on = '_root_2iyjl_1',
  cn = '_item_2iyjl_4',
  ln = '_title_2iyjl_9',
  dn = '_row_2iyjl_14',
  mn = '_divider_2iyjl_19',
  hn = '_titleText_2iyjl_22',
  _n = '_whiteText_2iyjl_26',
  y = { root: on, item: cn, title: ln, row: dn, divider: mn, titleText: hn, whiteText: _n },
  { formatPercent: un } = M,
  xn = ({ priceImpactBps: t, dangerLevel: n }) =>
    e.jsx('div', {
      className: y.root,
      'data-sentry-component': 'MaxPriceImpactTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: e.jsxs('div', {
        className: y.item,
        children: [
          e.jsxs('div', {
            className: y.title,
            children: [
              e.jsx(W, {
                name: 'WarningInfo',
                size: 18,
                color: n === v.danger ? 'red' : 'yellow',
                'data-sentry-element': 'Icon',
                'data-sentry-source-file': 'index.tsx',
              }),
              e.jsxs(c, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [' Max Price Impact Is ', un(t / 100)],
              }),
            ],
          }),
          e.jsx('div', {
            className: y.row,
            children: e.jsx(c, {
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
  { formatTokenAllDecimals: ie, formatPercent: fn } = M,
  oe = ({ priceDivergenceBps: t, oraclePrice: n, marketPrice: s, priceTokenMint: a }) => {
    const { getToken: r } = E(),
      { symbol: o } = r(a),
      i = t.gt(0);
    return e.jsxs('div', {
      className: y.root,
      'data-sentry-component': 'PriceDivergenceTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: [
        e.jsxs('div', {
          className: y.item,
          children: [
            e.jsxs('div', {
              className: y.title,
              children: [
                i && e.jsx(et, {}),
                e.jsxs(c, {
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: ['Oracle & Market Prices Differ by ', fn(t.div(100))],
                }),
              ],
            }),
            e.jsxs('div', {
              className: y.row,
              children: [
                e.jsx(c, {
                  fs: 14,
                  lh: 18,
                  color: 'grey',
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: 'Oracle Price',
                }),
                e.jsxs(c, {
                  fs: 14,
                  lh: 18,
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: [ie(n, 6), ' ', o],
                }),
              ],
            }),
            e.jsxs('div', {
              className: y.row,
              children: [
                e.jsx(c, {
                  fs: 14,
                  lh: 18,
                  color: 'grey',
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: 'Market Price',
                }),
                e.jsxs(c, {
                  fs: 14,
                  lh: 18,
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: [ie(s, 6), ' ', o],
                }),
              ],
            }),
          ],
        }),
        i &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx(Se, { className: y.divider }),
              e.jsx('div', {
                className: y.item,
                children: e.jsx(c, {
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
  { formatPercent: G, formatTokenAllDecimals: ce } = M;
function gn(t, n, s) {
  return t === v.danger ? 'danger' : t === v.warning || D(s, n) ? 'warning' : 'info';
}
const yn = (t) => {
    switch (t) {
      case 'danger':
        return 'danger';
      case 'warning':
        return 'warning';
      case 'info':
        return 'primary';
    }
  },
  zn = ({
    priceImpactBps: t,
    collTokenMint: n,
    theoreticalPriceDivergenceBps: s,
    theoreticalPrice: a,
    marketPrice: r,
    type: o,
    variant: i = 'notification',
    isLong: l,
  }) => {
    const { getToken: m } = E(),
      d = ge(o, t),
      u = gn(d, s, o),
      h = m(n),
      f = d > v.safe,
      _ = rt(o, s, l),
      x = s.lt(-10);
    return f || _ || x
      ? e.jsx(e.Fragment, {
          children:
            i === 'notification'
              ? e.jsx(Xe, {
                  className: re.notification,
                  variant: u,
                  text: e.jsxs('div', {
                    className: re.notificationBody,
                    children: [
                      f
                        ? e.jsxs('div', {
                            children: [
                              'Max price impact is ',
                              e.jsx('b', { children: G(t.div(100)) }),
                              ' due to swap size or current',
                              ' ',
                              h.symbol,
                              ' market price or your slippage settings. Carefully review the wallet values before confirming and consider breaking up the trade into smaller amounts.',
                            ],
                          })
                        : null,
                      _
                        ? e.jsxs('div', {
                            children: [
                              'Market price ',
                              e.jsxs('b', { children: ['(', ce(r, 9), ')'] }),
                              ' and oracle price ',
                              e.jsxs('b', { children: ['(', ce(a, 9), ')'] }),
                              ' are different by ',
                              e.jsx('b', { children: G(s.div(100)) }),
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
                      ? e.jsx(z, {
                          text: 'Price Impact '.concat(G(t.div(100))),
                          hasIcon: !1,
                          tooltip: e.jsx(xn, { priceImpactBps: t.toNumber(), dangerLevel: d }),
                          variant: yn(u),
                        })
                      : null,
                    _
                      ? e.jsx(z, {
                          text: 'Price Difference '.concat(G(s.div(100))),
                          hasIcon: !1,
                          tooltip: e.jsx(oe, {
                            priceDivergenceBps: s,
                            marketPrice: r,
                            oraclePrice: a,
                            priceTokenMint: n,
                          }),
                          variant: 'warning',
                        })
                      : null,
                    x
                      ? e.jsx(z, {
                          text: 'Buying '
                            .concat(h.symbol, ' at a ')
                            .concat(G(s.div(100).abs()), ' discount'),
                          hasIcon: !1,
                          variant: 'primary',
                          tooltip: e.jsx(oe, {
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
  pn = (t) => t.concat(Array(4 - t.length).fill(me.U16_MAX)),
  vn = [
    { mintAddress: $e, chain: [122] },
    { mintAddress: Ae, chain: [72] },
    { mintAddress: Ee, chain: [51] },
    { mintAddress: De, chain: [382] },
    { mintAddress: Oe, chain: [383] },
    { mintAddress: ze, chain: [388] },
    { mintAddress: Re, chain: [497] },
    { mintAddress: Fe, chain: [494] },
    { mintAddress: We, chain: [487] },
    { mintAddress: Be, chain: [387] },
    { mintAddress: He, chain: [385] },
    { mintAddress: Ve, chain: [197] },
    { mintAddress: Ue, chain: [92] },
    { mintAddress: Ye, chain: [80] },
    { mintAddress: qe, chain: [248] },
    { mintAddress: Ke, chain: [223] },
    { mintAddress: Je, chain: [137, 51] },
    { mintAddress: Ze, chain: [135, 51] },
    { mintAddress: Qe, chain: [278] },
  ],
  bn = new de.PubkeyHashMap();
function Rn({ refetchIntervalSeconds: t = 10, enabled: n = !0 }) {
  const { web3client: s } = Me(),
    a = async () => {
      if (!s) throw new Error('web3client is required');
      const l = new me.Scope('mainnet-beta', s.connection),
        m = await l.getOraclePrices(),
        d = await Promise.all(
          vn.map(async (u) => {
            const h = await l.getPriceFromChain(pn(u.chain), m);
            return [new F(u.mintAddress), h.price];
          })
        );
      return new de.PubkeyHashMap(d);
    },
    i = Te({
      queryKey: Le.lstStakeRates,
      enabled: !!s && n,
      queryFn: a,
      onError: (l) => {
        ke(l);
      },
      refetchInterval: t * 1e3,
    }),
    { data: r } = i,
    o = Q(i, ['data']);
  return Z({ data: r || bn }, o);
}
export {
  pe as C,
  zn as P,
  kn as a,
  An as b,
  Ln as c,
  D as d,
  On as e,
  $n as f,
  Dn as g,
  En as h,
  y as s,
  Rn as u,
};
//# sourceMappingURL=useGetLSTsStakeRatesQuery-d6vrXHVV.js.map
