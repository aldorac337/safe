var Ps = Object.defineProperty,
  Ds = Object.defineProperties;
var Ms = Object.getOwnPropertyDescriptors;
var Re = Object.getOwnPropertySymbols;
var Lt = Object.prototype.hasOwnProperty,
  Pt = Object.prototype.propertyIsEnumerable;
var Et = (e, s, t) =>
    s in e ? Ps(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[s] = t),
  g = (e, s) => {
    for (var t in s || (s = {})) Lt.call(s, t) && Et(e, t, s[t]);
    if (Re) for (var t of Re(s)) Pt.call(s, t) && Et(e, t, s[t]);
    return e;
  },
  Z = (e, s) => Ds(e, Ms(s));
var me = (e, s) => {
  var t = {};
  for (var n in e) Lt.call(e, n) && s.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Re) for (var n of Re(e)) s.indexOf(n) < 0 && Pt.call(e, n) && (t[n] = e[n]);
  return t;
};
import {
  r as V,
  j as a,
  z as Xt,
  w as et,
  l as ft,
  u as Zt,
  R as W,
  t as es,
  L as ts,
  D as Ae,
} from './vendor-CFRnETMC.js';
import {
  o as ss,
  a8 as Ws,
  x as Je,
  em as pt,
  en as Bs,
  eo as ht,
  ep as rs,
  eq as _t,
  h as re,
  f as I,
  p as We,
  C as Os,
  Z as Rs,
  dG as ns,
  dg as as,
  r as ke,
  d2 as $s,
  U as is,
  S as os,
  O as ls,
  er as cs,
  R as ds,
  dF as us,
  K as zs,
  es as Us,
  bo as Gs,
  j as vt,
  bg as Hs,
  bs as qs,
  bt as Ys,
  u as fs,
  i as Js,
  B as gt,
  L as Ks,
  aj as Qs,
  v as Xs,
  c as Zs,
  br as ps,
  I as yt,
  a3 as er,
  n as Dt,
  a5 as Mt,
  a4 as tr,
  X as sr,
  a7 as rr,
  et as nr,
  an as be,
  da as Ee,
  q as Wt,
  db as ar,
  D as Bt,
  dc as ir,
  aE as or,
  Y as lr,
} from './index-DwWh_48g.js';
import { N as mt } from './react-number-format.es-CDRTbwEY.js';
import { D as Ot } from './index-CEPaVQNN.js';
import { I as cr } from './Input-CiuSD0Wf.js';
import { u as $e } from './useObservableStoreValue-CEVbtnbe.js';
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
      s = new e.Error().stack;
    s &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[s] = '54b715a6-6524-4050-b08f-56be244e57bf'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-54b715a6-6524-4050-b08f-56be244e57bf'));
  } catch (t) {}
})();
const dr = () => {
    const { getToken: e } = ss(),
      { data: s } = Ws(),
      t = V.useMemo(() => {
        var o;
        if (!s || !((o = s == null ? void 0 : s.limoConfig) != null && o.supportedTokensV2))
          return [];
        const i = s.limoConfig.supportedTokensV2.map((d) => Z(g({}, e(d.mint)), { bps: d.bps }));
        return (
          Je.isStagingTokensEnabled &&
            s.limoConfig.stagingTokensV2 &&
            i.push(...s.limoConfig.stagingTokensV2.map((d) => Z(g({}, e(d.mint)), { bps: d.bps }))),
          i
        );
      }, [s, e]),
      n = V.useMemo(() => {
        var o;
        const i = {};
        return (
          (o = s == null ? void 0 : s.limoConfig) != null &&
            o.supportedTokensV2 &&
            (s.limoConfig.supportedTokensV2.forEach((d) => {
              i[d.mint] = d.priceFeedId;
            }),
            Je.isStagingTokensEnabled &&
              s.limoConfig.stagingTokensV2 &&
              s.limoConfig.stagingTokensV2.forEach((d) => {
                i[d.mint] = d.priceFeedId;
              })),
          i
        );
      }, [s]);
    return { tokensInfo: t, priceFeedMap: n };
  },
  pi =
    'WalletConnect does not support Versioned Transactions which is necessary for kLend Market. You can still try to send transaction but success is not guaranteed.',
  ur = 'Your slippage setting is above '
    .concat(pt, '%. Please proceed with caution, or considering adjusting it to ')
    .concat(Bs, '% (recommended).'),
  fr = 'Your slippage setting is above '
    .concat(ht, '%. Please proceed with caution, or considering adjusting it to ')
    .concat(rs, '% (recommended).'),
  pr = 'Your slippage setting is above '
    .concat(_t, '%. Please proceed with caution, or considering adjusting it to ')
    .concat(rs, '% (recommended).'),
  hi =
    'Your wallet has been identified to break the Terms & Conditions of the Kamino webapp. Please contact us on discord if you think there has been a mistake.',
  hr = 'Kamino Finance is not Available in Your Region',
  _i = {
    lending: { deposit: 0.05, withdraw: 0.01, borrow: 0.05, repay: 0.01 },
    liquidity: { deposit: 0.05, withdraw: 0.01 },
    leverage: { deposit: 0.05, withdraw: 0.01, adjust: 0.05 },
    staking: { stake: 0.05, unstake: 0.01 },
    earn: { deposit: 0.01, withdraw: 0.01 },
    swap: { deposit: 0.006, solNeededToTrade: 1e-4, solNeededToTradeNoAta: 0.006 },
    manageVaults: { create: 0.5 },
    manageMarkets: { create: 0.2 },
  },
  _r = '_root_11lsd_1',
  gr = '_title_11lsd_7',
  yr = '_row_11lsd_12',
  mr = '_icon_11lsd_16',
  ze = { root: _r, title: gr, row: yr, icon: mr },
  { formatToFirstNonNullDecimal: xr } = We,
  vr = ({ title: e, balance: s, minBalance: t }) => {
    const n = 'Minimum '.concat(t, ' SOL Required to transact');
    return a.jsxs('div', {
      className: ze.root,
      'data-sentry-component': 'NotEnoughSOLTooltip',
      'data-sentry-source-file': 'NotEnoughSOLTooltip.tsx',
      children: [
        a.jsxs('div', {
          className: ze.title,
          children: [
            a.jsx(re, {
              name: 'WarningInfo',
              size: 24,
              color: 'orange',
              className: ze.icon,
              'data-sentry-element': 'Icon',
              'data-sentry-source-file': 'NotEnoughSOLTooltip.tsx',
            }),
            a.jsx(I, {
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'NotEnoughSOLTooltip.tsx',
              children: e || n,
            }),
          ],
        }),
        a.jsxs('div', {
          className: ze.row,
          children: [
            a.jsx(I, {
              fs: 14,
              lh: 18,
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'NotEnoughSOLTooltip.tsx',
              children: 'Your SOL Balance',
            }),
            a.jsx(I, {
              fs: 14,
              lh: 18,
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'NotEnoughSOLTooltip.tsx',
              children: xr(s || 0),
            }),
          ],
        }),
      ],
    });
  },
  gi = (e, s, t, n, i) => {
    if (n && n && e > 0 && i && s < t)
      return {
        text: 'Minimum SOL Balance',
        variant: 'warning',
        tooltip: a.jsx(vr, { balance: s, minBalance: t }),
        hasIcon: !1,
        isCritical: !0,
      };
  },
  br = '_popupBody_1nphr_1',
  Tr = '_content_1nphr_15',
  kr = '_header_1nphr_29',
  Sr = '_highlights_1nphr_34',
  jr = '_highlightItem_1nphr_39',
  Ir = '_tokensListWrapper_1nphr_53',
  wr = '_tokensHeader_1nphr_57',
  Fr = '_tokensList_1nphr_53',
  Vr = '_noTopFade_1nphr_78',
  Cr = '_noBottomFade_1nphr_82',
  Nr = '_tokenItem_1nphr_90',
  Ar = '_itemLeft_1nphr_102',
  Er = '_address_1nphr_110',
  Lr = '_copyIcon_1nphr_118',
  Pr = '_copyIconHovered_1nphr_123',
  Dr = '_itemRight_1nphr_139',
  Mr = '_valuesWrapper_1nphr_144',
  Wr = '_tokenNameAddressWrapper_1nphr_149',
  Br = '_tokenAddressWrapper_1nphr_155',
  Or = '_tokenAddress_1nphr_155',
  Rr = '_tokenAddressCopyIcon_1nphr_167',
  $r = '_tokenSymbolWrapper_1nphr_173',
  zr = '_modalOverlay_1nphr_179',
  Q = {
    popupBody: br,
    content: Tr,
    header: kr,
    highlights: Sr,
    highlightItem: jr,
    tokensListWrapper: Ir,
    tokensHeader: wr,
    tokensList: Fr,
    noTopFade: Vr,
    noBottomFade: Cr,
    tokenItem: Nr,
    itemLeft: Ar,
    address: Er,
    copyIcon: Lr,
    copyIconHovered: Pr,
    itemRight: Dr,
    valuesWrapper: Mr,
    tokenNameAddressWrapper: Wr,
    tokenAddressWrapper: Br,
    tokenAddress: Or,
    tokenAddressCopyIcon: Rr,
    tokenSymbolWrapper: $r,
    modalOverlay: zr,
  },
  Ur = '_overlay_beefi_1',
  Gr = '_root_beefi_20',
  Hr = '__isFluid_beefi_26',
  qr = '__isMaxWidth_beefi_35',
  Yr = '_disabledScroll_beefi_38',
  Jr = '_content_beefi_41',
  Kr = '_closeBtn_beefi_50',
  Ve = {
    overlay: Ur,
    root: Gr,
    _isFluid: Hr,
    _isMaxWidth: qr,
    disabledScroll: Yr,
    content: Jr,
    closeBtn: Kr,
  },
  ot = et(Ve);
Xt.setAppElement('#root');
const Qr = (T) => {
    var x = T,
      {
        children: e,
        onClose: s,
        shouldCloseOnOverlayClick: t,
        isShowCloseBtn: n = !0,
        isFluid: i = !1,
        isMaxWidth: o = !1,
        contentOpenClassName: d,
        className: u,
        overlayClassName: y,
      } = x,
      S = me(x, [
        'children',
        'onClose',
        'shouldCloseOnOverlayClick',
        'isShowCloseBtn',
        'isFluid',
        'isMaxWidth',
        'contentOpenClassName',
        'className',
        'overlayClassName',
      ]);
    const b = V.useCallback(
      (L) => {
        L.stopPropagation(), s == null || s(L);
      },
      [s]
    );
    return a.jsx(
      Xt,
      Z(
        g(
          {
            onRequestClose: t ? b : void 0,
            shouldCloseOnOverlayClick: t,
            overlayClassName: ot(Ve.overlay, y),
            closeTimeoutMS: 100,
            bodyOpenClassName: Ve.disabledScroll,
            className: ot(Ve.root, { isFluid: i, isMaxWidth: o }, u),
            onAfterOpen: (L) => (L == null ? void 0 : L.contentEl.focus()),
          },
          S
        ),
        {
          'data-sentry-element': 'BaseModal',
          'data-sentry-component': 'Modal',
          'data-sentry-source-file': 'Modal.tsx',
          children: a.jsxs(Os, {
            className: ot(Ve.content, d),
            'data-sentry-element': 'Card',
            'data-sentry-source-file': 'Modal.tsx',
            children: [
              n &&
                a.jsx('div', {
                  className: Ve.closeBtn,
                  children: a.jsx(Rs, {
                    onClick: b,
                    size: 'small',
                    variant: 'secondary',
                    shape: 'circle',
                    icon: a.jsx(re, { name: 'Close', color: 'grey' }),
                  }),
                }),
              e,
            ],
          }),
        }
      )
    );
  },
  { formatTokenAllDecimals: Xr, formatUsd: Zr } = We,
  en = ({ onSelect: e, token: s, isSwap: t }) => {
    const n = ''.concat(s.address.slice(0, 4), '...').concat(s.address.slice(-4)),
      [i, o] = V.useState(!1),
      d = V.useRef(null);
    V.useEffect(
      () => () => {
        d.current && clearTimeout(d.current);
      },
      []
    );
    const u = (S) => {
        S.preventDefault(),
          S.stopPropagation(),
          navigator.clipboard.writeText(s.address),
          o(!0),
          d.current && clearTimeout(d.current),
          (d.current = setTimeout(() => {
            o(!1), (d.current = null);
          }, 1e3));
      },
      y = t ? s.verified || s.address === ns : !0;
    return a.jsxs(
      'div',
      {
        className: Q.tokenItem,
        onClick: () => e(t ? s : s.address),
        'data-sentry-component': 'TokenItem',
        'data-sentry-source-file': 'TokenItem.tsx',
        children: [
          a.jsxs('div', {
            className: Q.itemLeft,
            children: [
              t
                ? a.jsx(as, { tokenInfo: s, size: 30 })
                : a.jsx(ke, { tokenMint: s.address, size: 30 }),
              a.jsxs('div', {
                children: [
                  a.jsxs('div', {
                    className: Q.tokenSymbolWrapper,
                    children: [
                      a.jsx(I, {
                        fs: 16,
                        lh: 22,
                        'data-sentry-element': 'Text',
                        'data-sentry-source-file': 'TokenItem.tsx',
                        children: s.symbol,
                      }),
                      a.jsx(re, {
                        name: y ? 'CheckVerified' : 'HelpOctagon',
                        color: y ? 'green' : 'grey',
                        size: 14,
                        'data-sentry-element': 'Icon',
                        'data-sentry-source-file': 'TokenItem.tsx',
                      }),
                    ],
                  }),
                  a.jsxs('div', {
                    className: Q.tokenNameAddressWrapper,
                    children: [
                      a.jsx(I, {
                        fs: 10,
                        lh: 10,
                        color: 'grey-deep',
                        'data-sentry-element': 'Text',
                        'data-sentry-source-file': 'TokenItem.tsx',
                        children: s.name,
                      }),
                      a.jsx(I, {
                        fs: 10,
                        lh: 10,
                        color: 'grey-deep',
                        'data-sentry-element': 'Text',
                        'data-sentry-source-file': 'TokenItem.tsx',
                        children: '・',
                      }),
                      a.jsxs('div', {
                        onClick: u,
                        className: Q.tokenAddressWrapper,
                        children: [
                          a.jsx(I, {
                            fs: 10,
                            lh: 10,
                            color: 'grey-deep',
                            className: Q.tokenAddress,
                            'data-sentry-element': 'Text',
                            'data-sentry-source-file': 'TokenItem.tsx',
                            children: i ? 'Address Copied' : n,
                          }),
                          a.jsx(re, {
                            name: 'Copy',
                            size: 10,
                            className: Q.tokenAddressCopyIcon,
                            'data-sentry-element': 'Icon',
                            'data-sentry-source-file': 'TokenItem.tsx',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.jsx('div', {
            className: Q.itemRight,
            children:
              !!s.amount.toNumber() &&
              a.jsxs('div', {
                className: Q.valuesWrapper,
                children: [
                  a.jsx(I, {
                    fs: 14,
                    lh: 18,
                    color: 'grey',
                    textAlign: 'right',
                    children: Xr(s.amount.toNumber(), s.decimals),
                  }),
                  !s.value.eq($s) &&
                    a.jsx(I, {
                      fs: 12,
                      lh: 16,
                      color: 'grey',
                      textAlign: 'right',
                      children: Zr(s.value.toNumber()),
                    }),
                ],
              }),
          }),
        ],
      },
      s.address
    );
  },
  tn = [is, os, ls, cs, ds, us, zs, Us, ns],
  sn = '_root_w63hs_1',
  rn = '_textWrapper_w63hs_12',
  Rt = { root: sn, textWrapper: rn },
  nn = () =>
    a.jsxs('div', {
      className: Rt.root,
      'data-sentry-component': 'TokensPopupEmptyState',
      'data-sentry-source-file': 'TokensPopupEmptyState.tsx',
      children: [
        a.jsx(re, {
          name: 'FileQuestion',
          size: 24,
          color: 'white',
          'data-sentry-element': 'Icon',
          'data-sentry-source-file': 'TokensPopupEmptyState.tsx',
        }),
        a.jsxs('div', {
          className: Rt.textWrapper,
          children: [
            a.jsx(I, {
              fs: 14,
              lh: 20,
              weight: 'medium',
              color: 'white',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'TokensPopupEmptyState.tsx',
              children: 'No results',
            }),
            a.jsx(I, {
              fs: 12,
              lh: 16,
              weight: 'regular',
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'TokensPopupEmptyState.tsx',
              children: 'No results were found for this search',
            }),
          ],
        }),
      ],
    }),
  an = ({
    tokens: e,
    isVisible: s,
    onSelect: t,
    onVisibleChange: n,
    onSearchChange: i,
    isSwap: o,
    isLimo: d,
  }) => {
    const [u, y] = V.useState(e),
      [S, T] = V.useState(''),
      [x, b] = V.useState(!0),
      [L, R] = V.useState(!1),
      $ = V.useRef(null),
      { data: B } = Gs(),
      { tokensInfo: U } = dr(),
      j = () => {
        n(!1);
      },
      C = V.useMemo(() => i && ft.debounce(i, 300), [i]),
      P = V.useCallback(
        (N) => {
          T(N), C && C(N);
        },
        [C]
      );
    V.useEffect(() => {
      P('');
    }, [s, P]);
    const D = (N) => {
        const m = N.currentTarget,
          k = m.scrollTop === 0,
          A = Math.abs(m.scrollHeight - m.scrollTop - m.clientHeight) < 1;
        b(k), R(A);
      },
      M = V.useMemo(
        () =>
          ft.debounce((N, m) => {
            y(
              N
                ? m.filter(
                    (k) => k.symbol.toLowerCase().includes(N.toLowerCase()) || k.address === N
                  )
                : m
            );
          }, 500),
        []
      );
    V.useEffect(() => {
      i || M(S, e);
    }, [M, S, e, i]);
    const oe = (N) => {
        P(N.target.value);
      },
      le = V.useMemo(() => {
        if (o && i) {
          if (S) {
            const m = e.find((k) => k.address === S);
            if (m) return [m];
          }
          return e.slice(0, 50);
        }
        return u;
      }, [e, u, i, o, S]),
      ee = [],
      q = V.useMemo(() => new Set(U.map((N) => N.address)), [U]);
    for (const N of tn) {
      const m = B == null ? void 0 : B.tokenInfosByAddress[N],
        k = m || e.find((E) => E.address === N),
        A = o ? k : m;
      A &&
        (!S || A.symbol.toLowerCase().includes(S.toLowerCase())) &&
        (d ? q.has(A.address) : !0) &&
        ee.push({ tokenMint: N, token: A });
    }
    return a.jsx(Qr, {
      isOpen: s,
      onClose: j,
      isFluid: !0,
      shouldCloseOnOverlayClick: !0,
      contentOpenClassName: Q.popupBody,
      overlayClassName: Q.modalOverlay,
      'data-sentry-element': 'Modal',
      'data-sentry-component': 'TokensPopup',
      'data-sentry-source-file': 'TokensPopup.tsx',
      children: a.jsxs('div', {
        className: Q.content,
        children: [
          a.jsx(cr, {
            autoFocus: !0,
            defaultValue: S,
            placeholder: 'Search token',
            size: 'large',
            onChange: oe,
            prefix: a.jsx(re, { name: 'Search', size: 16 }),
            'data-sentry-element': 'Input',
            'data-sentry-source-file': 'TokensPopup.tsx',
          }),
          ee.length > 0 &&
            a.jsx('div', {
              className: Q.highlights,
              children: ee.map(({ tokenMint: N, token: m }) =>
                a.jsxs(
                  'div',
                  {
                    className: Q.highlightItem,
                    onClick: () => t(o && m ? m : N),
                    children: [
                      a.jsx(ke, { tokenMint: N, size: 16 }),
                      a.jsx(I, { fs: 14, lh: 20, children: m.symbol }),
                    ],
                  },
                  N
                )
              ),
            }),
          le.length > 0
            ? a.jsxs('div', {
                className: ''
                  .concat(Q.tokensList, ' ')
                  .concat(x ? Q.noTopFade : '', ' ')
                  .concat(L ? Q.noBottomFade : ''),
                ref: $,
                onScroll: D,
                children: [
                  a.jsxs('div', {
                    className: Q.tokensHeader,
                    children: [
                      a.jsx(I, { fs: 14, lh: 18, color: 'grey', children: 'All Tokens' }),
                      a.jsx(I, { fs: 14, lh: 18, color: 'grey', children: 'Balance' }),
                    ],
                  }),
                  le.map((N) => a.jsx(en, { onSelect: t, token: N, isSwap: o }, N.address)),
                ],
              })
            : a.jsx(nn, {}),
        ],
      }),
    });
  },
  on = '_root_vep39_1',
  ln = '_connectBtn_vep39_7',
  cn = '_warningsWrapper_vep39_10',
  lt = { root: on, connectBtn: ln, warningsWrapper: cn },
  dn = '_root_khafo_1',
  un = '_item_khafo_4',
  fn = '_title_khafo_9',
  pn = '_row_khafo_14',
  Ue = { root: dn, item: un, title: fn, row: pn },
  hs = ({ title: e, description: s }) =>
    a.jsx('div', {
      className: Ue.root,
      'data-sentry-component': 'WarningTooltip',
      'data-sentry-source-file': 'WarningTooltip.tsx',
      children: a.jsxs('div', {
        className: Ue.item,
        children: [
          a.jsxs('div', {
            className: Ue.title,
            children: [
              a.jsx(re, {
                name: 'WarningInfo',
                size: 18,
                color: 'orange',
                'data-sentry-element': 'Icon',
                'data-sentry-source-file': 'WarningTooltip.tsx',
              }),
              a.jsx('div', { children: e }),
            ],
          }),
          a.jsx('div', { className: Ue.row, children: a.jsx('div', { children: s }) }),
        ],
      }),
    }),
  hn = '_tooltipOverlay_go1cg_1',
  _n = '_alignItemsCenter_go1cg_7',
  gn = '_icon_go1cg_13',
  yn = '__isFluid_go1cg_16',
  qe = { tooltipOverlay: hn, alignItemsCenter: _n, icon: gn, _isFluid: yn },
  mn = et(qe),
  xn = (e) => {
    switch (e) {
      case 'primary':
        return 'green';
      case 'warning':
        return 'orange';
      case 'danger':
        return 'red';
      case 'info':
        return 'blue';
      case 'secondary':
        return 'grey';
      case 'highlight':
        return 'blueWhite';
    }
  },
  $t = ({
    variant: e,
    text: s,
    tooltip: t,
    details: n,
    icon: i,
    hasIcon: o = !0,
    isClickableTooltip: d = !1,
    isFluid: u = !1,
    isOpen: y,
  }) =>
    a.jsx(vt, {
      clickable: d,
      isOpen: y,
      render: () =>
        a.jsxs('div', {
          className: mn(qe.tooltipOverlay, { isFluid: u }),
          children: [
            a.jsxs('div', {
              className: qe.alignItemsCenter,
              children: [
                o && !i
                  ? a.jsxs('div', {
                      className: qe.icon,
                      children: [
                        e === 'primary' &&
                          o &&
                          !i &&
                          a.jsx(re, { name: 'Check', color: 'green', size: 18 }),
                        (e === 'warning' || e === 'danger') &&
                          o &&
                          !i &&
                          a.jsx(re, { name: 'WarningInfo', size: 18, color: 'orange' }),
                        i,
                      ],
                    })
                  : null,
                typeof t == 'string' ? a.jsx(I, { lh: 18, children: t }) : t,
              ],
            }),
            n && typeof n == 'string' ? a.jsx(I, { fs: 14, lh: 18, children: n }) : n,
          ],
        }),
      'data-sentry-element': 'Tooltip',
      'data-sentry-component': 'WarningTag',
      'data-sentry-source-file': 'WarningTag.tsx',
      children: a.jsx(Hs, {
        label: s,
        variant: xn(e),
        underlinedLabel: !0,
        'data-sentry-element': 'Tag',
        'data-sentry-source-file': 'WarningTag.tsx',
      }),
    }),
  yi = V.forwardRef(function (x, T) {
    var b = x,
      {
        disabled: s,
        isRestrictionsIgnored: t,
        tooltipMessages: n,
        children: i,
        disableIfNotConnected: o = !1,
        useConnectButtonSecondary: d = !1,
        hideWarnings: u = !1,
        transitionConfig: y,
      } = b,
      S = me(b, [
        'disabled',
        'isRestrictionsIgnored',
        'tooltipMessages',
        'children',
        'disableIfNotConnected',
        'useConnectButtonSecondary',
        'hideWarnings',
        'transitionConfig',
      ]);
    const { isRestricted: L, isEnabled: R, isGeoblockChecked: $ } = qs(),
      { hasWalletRestriction: B } = Ys(),
      { walletPublicKey: U } = fs(),
      j = $ && L && R && !t,
      C = !Qs(B) && B && !t;
    return U
      ? a.jsxs('div', {
          className: lt.root,
          children: [
            !u &&
              (j || C) &&
              a.jsxs('div', {
                className: lt.warningsWrapper,
                children: [
                  j &&
                    a.jsx($t, {
                      tooltip: a.jsx(bn, {}),
                      text: 'Region Unavailable',
                      variant: 'warning',
                      hasIcon: !1,
                      isCritical: !0,
                    }),
                  C &&
                    a.jsx($t, {
                      tooltip: a.jsx(vn, {}),
                      text: 'Restricted Wallet',
                      variant: 'warning',
                      isCritical: !0,
                      hasIcon: !1,
                      isClickableTooltip: !0,
                    }),
                ],
              }),
            a.jsx(vt, {
              isFluid: !0,
              hidden: !(n != null && n.length),
              render: () =>
                a.jsx(a.Fragment, {
                  children:
                    n == null
                      ? void 0
                      : n.map((P, D) => a.jsx(I, { color: 'grey', children: P }, D)),
                }),
              children: a.jsx(
                gt,
                Z(g({ ref: T, disabled: s || j || C, transitionConfig: y }, S), { children: i })
              ),
            }),
          ],
        })
      : a.jsx('div', {
          className: lt.connectBtn,
          children: a.jsx(Js, {
            variant: d ? 'secondary' : 'primary',
            isFullWidth: !0,
            disabled: o,
          }),
        });
  }),
  vn = () =>
    a.jsx(hs, {
      title: a.jsxs(I, {
        fs: 14,
        lh: 20,
        children: [
          'Wallet Has Broken',
          ' ',
          a.jsx(Ks, {
            href: 'https://app.kamino.finance/terms',
            target: '_blank',
            children: 'Terms of Service',
          }),
        ],
      }),
      description: a.jsx(I, {
        fs: 14,
        lh: 18,
        color: 'grey',
        weight: 'regular',
        children: 'Please contact us on Discord if you think there has been a mistake.',
      }),
      'data-sentry-element': 'WarningTooltip',
      'data-sentry-component': 'WalletRestrictionWarning',
      'data-sentry-source-file': 'FormButton.tsx',
    }),
  bn = () =>
    a.jsx(hs, {
      title: a.jsx(I, { fs: 14, lh: 20, children: 'Region Unavailable' }),
      description: a.jsx(I, { fs: 14, lh: 18, color: 'grey', weight: 'regular', children: hr }),
      'data-sentry-element': 'WarningTooltip',
      'data-sentry-component': 'RegionRestrictionWarning',
      'data-sentry-source-file': 'FormButton.tsx',
    }),
  Tn = '_root_1wb5z_1',
  kn = '__isSwap_1wb5z_9',
  Sn = '__disabled_1wb5z_16',
  jn = '_input_1wb5z_22',
  In = '_icon_1wb5z_23',
  wn = '_inputContainer_1wb5z_84',
  Fn = '_top_1wb5z_89',
  Vn = '_bottom_1wb5z_94',
  Cn = '__filled_1wb5z_103',
  Nn = '_buttons_1wb5z_109',
  An = '_btn_1wb5z_114',
  En = '__readonly_1wb5z_146',
  Ln = '_dropDownList_1wb5z_152',
  Pn = '_tokenButton_1wb5z_156',
  Dn = '_tokenTextAndIcon_1wb5z_159',
  se = {
    root: Tn,
    _isSwap: kn,
    '_variant-primary': '__variant-primary_1wb5z_13',
    _disabled: Sn,
    input: jn,
    icon: In,
    '_variant-secondary': '__variant-secondary_1wb5z_26',
    '_variant-secondaryTransparent': '__variant-secondaryTransparent_1wb5z_39',
    '_variant-primarySwap': '__variant-primarySwap_1wb5z_57',
    '_variant-secondarySwap': '__variant-secondarySwap_1wb5z_71',
    inputContainer: wn,
    top: Fn,
    bottom: Vn,
    _filled: Cn,
    buttons: Nn,
    btn: An,
    _readonly: En,
    dropDownList: Ln,
    tokenButton: Pn,
    tokenTextAndIcon: Dn,
  },
  Mn = '_content_1urzv_1',
  Wn = '_header_1urzv_10',
  Bn = '_highlights_1urzv_15',
  On = '_highlightItem_1urzv_20',
  Rn = '_tokensList_1urzv_33',
  $n = '_noTopFade_1urzv_44',
  zn = '_noBottomFade_1urzv_48',
  Un = '_tokensHeader_1urzv_56',
  Gn = '_tokenItem_1urzv_64',
  Hn = '_itemLeft_1urzv_77',
  qn = '_address_1urzv_85',
  Yn = '_copyIcon_1urzv_93',
  Jn = '_copyIconHovered_1urzv_98',
  Kn = '_itemRight_1urzv_112',
  Qn = '_valuesWrapper_1urzv_117',
  ae = {
    content: Mn,
    header: Wn,
    highlights: Bn,
    highlightItem: On,
    tokensList: Rn,
    noTopFade: $n,
    noBottomFade: zn,
    tokensHeader: Un,
    tokenItem: Gn,
    itemLeft: Hn,
    address: qn,
    copyIcon: Yn,
    copyIconHovered: Jn,
    itemRight: Kn,
    valuesWrapper: Qn,
  },
  { formatTokenAllDecimals: Xn, formatUsd: Zn } = We,
  ea = ({ onSelect: e, token: s, isActive: t }) => {
    const n = async (i) => {
      i.preventDefault(),
        i.stopPropagation(),
        s.address &&
          (await navigator.clipboard.writeText(s.address),
          Zs({ type: 'success', message: 'Copied!' }));
    };
    return a.jsxs(
      'div',
      {
        className: ae.tokenItem,
        onClick: () => e(s.address),
        'data-sentry-component': 'TokenItem',
        'data-sentry-source-file': 'TokenItem.tsx',
        children: [
          a.jsxs('div', {
            className: ae.itemLeft,
            children: [
              a.jsx(ke, {
                tokenMint: s.address,
                size: 24,
                'data-sentry-element': 'TokenIcon',
                'data-sentry-source-file': 'TokenItem.tsx',
              }),
              a.jsx(I, {
                fs: 14,
                lh: 18,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'TokenItem.tsx',
                children: s.symbol,
              }),
              a.jsxs('div', {
                className: ae.address,
                onClick: n,
                children: [
                  a.jsx(I, {
                    fs: 10,
                    lh: 10,
                    'data-sentry-element': 'Text',
                    'data-sentry-source-file': 'TokenItem.tsx',
                    children: Xs(s.address, 4),
                  }),
                  a.jsx('div', {
                    className: ae.copyIcon,
                    children: a.jsx(re, {
                      name: 'Copy',
                      size: 10,
                      color: 'grey',
                      'data-sentry-element': 'Icon',
                      'data-sentry-source-file': 'TokenItem.tsx',
                    }),
                  }),
                  a.jsx('div', {
                    className: ae.copyIconHovered,
                    children: a.jsx(re, {
                      name: 'Copy',
                      size: 10,
                      color: 'blue',
                      'data-sentry-element': 'Icon',
                      'data-sentry-source-file': 'TokenItem.tsx',
                    }),
                  }),
                ],
              }),
            ],
          }),
          a.jsxs('div', {
            className: ae.itemRight,
            children: [
              !!s.amount.toNumber() &&
                a.jsxs('div', {
                  className: ae.valuesWrapper,
                  children: [
                    a.jsx(I, {
                      fs: 14,
                      lh: 18,
                      textAlign: 'right',
                      children: Xn(s.amount.toNumber(), s.decimals),
                    }),
                    a.jsx(I, {
                      fs: 10,
                      lh: 10,
                      color: 'grey',
                      textAlign: 'right',
                      children: Zn(s.value.toNumber()),
                    }),
                  ],
                }),
              t && a.jsx(re, { name: 'Check', size: 16, color: 'blue' }),
            ],
          }),
        ],
      },
      s.address
    );
  },
  ta = [is, os, ls, cs, ds, us],
  sa = ({ selectedToken: e, tokens: s, isVisible: t, onSelect: n, onVisibleChange: i }) => {
    const [o, d] = V.useState(!0),
      [u, y] = V.useState(!1),
      [S, T] = V.useState(s),
      [x, b] = V.useState(''),
      L = V.useRef(null),
      { getToken: R } = ss(),
      $ = () => {
        i(!1);
      },
      B = V.useMemo(
        () =>
          ft.debounce((C, P) => {
            T(C ? P.filter((D) => D.symbol.toLowerCase().includes(C.toLowerCase())) : P);
          }, 500),
        []
      );
    V.useEffect(() => {
      B(x, s);
    }, [B, x, s]);
    const U = (C) => {
        b(C.target.value);
      },
      j = (C) => {
        const P = C.currentTarget,
          D = P.scrollTop === 0,
          M = Math.abs(P.scrollHeight - P.scrollTop - P.clientHeight) < 1;
        d(D), y(M);
      };
    return a.jsx(ps, {
      isOpen: t,
      onClose: $,
      isFluid: !0,
      isOverSidepanel: !0,
      'data-sentry-element': 'Modal',
      'data-sentry-component': 'TokensPopup',
      'data-sentry-source-file': 'TokensPopup.tsx',
      children: a.jsxs('div', {
        className: ae.content,
        children: [
          a.jsxs('div', {
            className: ae.header,
            children: [
              a.jsx(I, {
                fs: 18,
                lh: 22,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'TokensPopup.tsx',
                children: 'Select Tokens',
              }),
              a.jsx(yt, {
                defaultValue: x,
                placeholder: 'Search...',
                size: 'small',
                onChange: U,
                prefix: a.jsx(re, { name: 'Search', size: 16 }),
                autoFocus: !0,
                'data-sentry-element': 'Input',
                'data-sentry-source-file': 'TokensPopup.tsx',
              }),
            ],
          }),
          a.jsx(Ot, {
            'data-sentry-element': 'Divider',
            'data-sentry-source-file': 'TokensPopup.tsx',
          }),
          a.jsx('div', {
            className: ae.highlights,
            children: ta.map((C) => {
              const P = R(C);
              return a.jsxs('div', {
                className: ae.highlightItem,
                onClick: () => n(C),
                children: [
                  a.jsx(ke, { tokenMint: C, size: 16 }),
                  ' ',
                  a.jsx(I, { fs: 14, lh: 20, children: P.symbol }),
                ],
              });
            }),
          }),
          a.jsx(Ot, {
            'data-sentry-element': 'Divider',
            'data-sentry-source-file': 'TokensPopup.tsx',
          }),
          a.jsxs('div', {
            className: ae.tokensHeader,
            children: [
              a.jsx(I, {
                fs: 12,
                lh: 16,
                weight: 'bold',
                color: 'grey-deep',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'TokensPopup.tsx',
                children: 'Asset',
              }),
              a.jsx(I, {
                fs: 12,
                lh: 16,
                weight: 'bold',
                color: 'grey-deep',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'TokensPopup.tsx',
                children: 'Wallet Balance',
              }),
            ],
          }),
          a.jsx('div', {
            className: ''
              .concat(ae.tokensList, ' ')
              .concat(o ? ae.noTopFade : '', ' ')
              .concat(u ? ae.noBottomFade : ''),
            ref: L,
            onScroll: j,
            children: S.map((C) =>
              a.jsx(ea, { onSelect: n, token: C, isActive: e === C.address }, C.address)
            ),
          }),
        ],
      }),
    });
  },
  Ge = et(se),
  { formatUsd: ra } = We,
  na = ({ tokensInfos: e, onSelect: s }) =>
    a.jsx(a.Fragment, {
      children: e.map((t) => {
        const { address: n, symbol: i } = t;
        return a.jsx(rr, {
          title: i,
          startIcon: a.jsx(ke, { tokenMint: n, size: 24 }),
          onClick: () => s(n),
        });
      }),
    }),
  mi = V.forwardRef((e, s) => {
    var Ne, we;
    const Ie = e,
      {
        className: t,
        value: n,
        disabled: i,
        label: o,
        topStat: d,
        topComp: u,
        bottomLeftStat: y,
        bottomRightStat: S,
        variant: T = 'primary',
        isTokenPopup: x,
        tokensInfos: b,
        defaultSelectedTokenMint: L,
        onSelectedTokenChange: R = Dt,
        onSelectedSwapTokenChange: $ = Dt,
        onInputChange: B,
        onHalf: U,
        onMax: j,
        useNewTokensPopup: C = !1,
        isLoading: P = !1,
        onTokensSearch: D,
        isSwap: M = !1,
        selectedTokenInfo: oe,
        isLimo: le = !1,
      } = Ie,
      ee = me(Ie, [
        'className',
        'value',
        'disabled',
        'label',
        'topStat',
        'topComp',
        'bottomLeftStat',
        'bottomRightStat',
        'variant',
        'isTokenPopup',
        'tokensInfos',
        'defaultSelectedTokenMint',
        'onSelectedTokenChange',
        'onSelectedSwapTokenChange',
        'onInputChange',
        'onHalf',
        'onMax',
        'useNewTokensPopup',
        'isLoading',
        'onTokensSearch',
        'isSwap',
        'selectedTokenInfo',
        'isLimo',
      ]),
      [q, N] = V.useState(!1),
      m = !!n,
      {
        selectedOption: k,
        onSelectedOptionChange: A,
        isVisible: w,
        onVisibleChange: E,
      } = er({
        initialSelectedOption:
          L || ((Ne = b == null ? void 0 : b[0]) == null ? void 0 : Ne.address),
      }),
      X = b.filter((z) => z.address !== k),
      pe = M && oe ? oe : (we = b.filter((z) => z.address === k)) == null ? void 0 : we[0],
      { symbol: ne, decimals: ve, address: Se } = pe || {},
      je = (z) => {
        M && typeof z != 'string' ? (A(z.address), $(z)) : (A(z), R(z)), E(!1), N(!1);
      },
      st = (z, nt) => {
        nt.source === 'event' && !['.', ','].includes(z.value.slice(-1)) && B(z.floatValue || 0);
      },
      Oe = () => {
        N(!0);
      };
    V.useEffect(() => {
      var z;
      A(L || ((z = b == null ? void 0 : b[0]) == null ? void 0 : z.address));
    }, [L]);
    const rt = () =>
      pe
        ? x
          ? a.jsx(Mt, {
              variant: 'ghost',
              onClick: Oe,
              startIcon: M
                ? a.jsx(as, { tokenInfo: pe, size: 24 })
                : a.jsx(ke, { tokenMint: Se, size: 24 }),
              text: ne,
              endIcon: a.jsx(re, { name: 'ChevronDown', className: se.chevron, size: M ? 18 : 14 }),
              textProps: { fs: M ? 18 : 16, lh: 22, className: se.title },
              isActive: w,
              btnClassName: M ? se.tokenButton : void 0,
              iconClassName: M ? se.tokenTextAndIcon : void 0,
            })
          : X.length
            ? a.jsx(tr, {
                overlay: a.jsx(na, { tokensInfos: X, onSelect: je }),
                overlayClassName: se.dropDownList,
                isVisible: w,
                onVisibleChange: E,
                children: a.jsx(Mt, {
                  variant: 'ghost',
                  startIcon: a.jsx(ke, { tokenMint: Se, size: 24 }),
                  text: ne,
                  endIcon: a.jsx(re, {
                    name: 'ChevronDown',
                    className: se.chevron,
                    size: M ? 18 : 14,
                  }),
                  textProps: { fs: M ? 18 : 16, lh: 22, className: se.title },
                  isActive: w,
                  btnClassName: M ? se.tokenButton : void 0,
                  iconClassName: M ? se.tokenTextAndIcon : void 0,
                }),
              })
            : a.jsx(sr, {
                tokensProps: { tokensAddresses: [Se], size: 24 },
                textProps: { fs: M ? 18 : 16, lh: 22 },
                text: ne,
                align: 'left',
                gap: 6,
                'data-sentry-element': 'TokensWithText',
                'data-sentry-component': 'triggerElement',
                'data-sentry-source-file': 'LargeInput.tsx',
              })
        : null;
    return a.jsxs('label', {
      htmlFor: 'input',
      className: Ge('root', { disabled: i, filled: m, variant: T, isSwap: M }),
      children: [
        a.jsxs('div', {
          className: se.top,
          children: [
            a.jsx(I, {
              fs: 12,
              lh: 12,
              className: Ge('label'),
              color: M ? 'grey-deep' : 'grey-light',
              children: o,
            }),
            d &&
              a.jsx(I, {
                fs: 12,
                lh: 12,
                color: 'grey-deep',
                className: se.value,
                children: '~'.concat(ra(d)),
              }),
            u && u,
          ],
        }),
        a.jsxs('div', {
          className: Ge('inputContainer', t, { disabled: i, filled: m }),
          children: [
            rt(),
            a.jsx(
              mt,
              g(
                {
                  getInputRef: s,
                  placeholder: P ? ' ' : '0',
                  className: Ge('input', {
                    disabled: i,
                    filled: m,
                    readonly: e.readOnly,
                    isSwap: M,
                  }),
                  disabled: i,
                  value: n || '',
                  decimalScale: ve,
                  id: 'input',
                  allowNegative: !1,
                  autoComplete: 'off',
                  onValueChange: st,
                  allowedDecimalSeparators: ['.', ','],
                  decimalSeparator: '.',
                  thousandSeparator: ',',
                  lang: 'en-US',
                  inputMode: 'decimal',
                  pattern: '[0-9]*[.,]?[0-9]*',
                },
                ee
              )
            ),
          ],
        }),
        !y && !S && !U && !j
          ? null
          : a.jsxs('div', {
              className: se.bottom,
              children: [
                y && a.jsx(I, { fs: 12, lh: 12, color: 'grey-deep', children: y }),
                S ||
                  a.jsx(a.Fragment, {
                    children:
                      U &&
                      j &&
                      a.jsxs('div', {
                        className: se.buttons,
                        children: [
                          a.jsx('div', {
                            className: se.btn,
                            onClick: (z) => {
                              z.preventDefault(), z.stopPropagation(), U();
                            },
                            children: 'half',
                          }),
                          a.jsx('div', {
                            className: se.btn,
                            onClick: (z) => {
                              z.preventDefault(), z.stopPropagation(), j();
                            },
                            children: 'max',
                          }),
                        ],
                      }),
                  }),
              ],
            }),
        x &&
          (C
            ? a.jsx(an, {
                isVisible: q,
                tokens: b,
                onSelect: je,
                onVisibleChange: () => N(!1),
                onSearchChange: D,
                isSwap: M,
                isLimo: le,
              })
            : a.jsx(sa, {
                selectedToken: k,
                isVisible: q,
                tokens: b,
                onSelect: je,
                onVisibleChange: () => N(!1),
              })),
      ],
    });
  }),
  aa = '_metalGreyGradient_1jynp_9',
  ia = '_goldGradient_1jynp_15',
  oa = '_silverGradient_1jynp_21',
  la = '_bronzeGradient_1jynp_27',
  ca = '_pointsSilverTextGradient_1jynp_33',
  da = '_root_1jynp_39',
  ua = '_settings_1jynp_43',
  fa = '_clickable_1jynp_48',
  pa = '_feeTypeText_1jynp_51',
  ha = '_title_1jynp_54',
  _a = '_priorityFeeText_1jynp_57',
  Ce = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1jynp_1',
    metalGreyGradient: aa,
    goldGradient: ia,
    silverGradient: oa,
    bronzeGradient: la,
    pointsSilverTextGradient: ca,
    root: da,
    settings: ua,
    clickable: fa,
    feeTypeText: pa,
    '_variant-minimal': '__variant-minimal_1jynp_54',
    title: ha,
    priorityFeeText: _a,
  },
  bt = (e) => e.includes('multiply'),
  _s = (e) => bt(e) && e.includes(nr),
  gs = (e) => e.includes('/v3/leverage'),
  ga = () => {
    const e = Zt(),
      s = $e(be, (b) => b.slippage),
      t = $e(be, (b) => b.slippageMultiply),
      n = $e(be, (b) => b.slippageJlpMultiply),
      i = $e(be, (b) => b.slippageLeverageV3),
      o = _s(e.pathname),
      d = bt(e.pathname),
      u = gs(e.pathname),
      y = V.useCallback(() => (o ? n : d ? t : u ? i : s), [o, d, s, n, t, i, u]),
      S = V.useMemo(() => (o ? ht : d ? pt : u ? _t : 10), [o, d, u]),
      T = V.useCallback(() => {
        const b = y();
        return o ? b.gt(ht) : d ? b.gt(pt) : u ? b.gt(_t) : !1;
      }, [y, o, d, u]),
      x = V.useCallback(() => {
        const b = T();
        if (b && o) return fr;
        if (b && d) return ur;
        if (b && u) return pr;
      }, [o, d, u, T]);
    return {
      getSlippage: y,
      isSlippageTooHigh: T,
      getSlippageWarningMessage: x,
      optimalSlippage: S,
    };
  };
var Be = (e) => e.type === 'checkbox',
  Te = (e) => e instanceof Date,
  ie = (e) => e == null;
const ys = (e) => typeof e == 'object';
var H = (e) => !ie(e) && !Array.isArray(e) && ys(e) && !Te(e),
  ms = (e) => (H(e) && e.target ? (Be(e.target) ? e.target.checked : e.target.value) : e),
  ya = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  xs = (e, s) => e.has(ya(s)),
  ma = (e) => {
    const s = e.constructor && e.constructor.prototype;
    return H(s) && s.hasOwnProperty('isPrototypeOf');
  },
  Tt = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function ce(e) {
  let s;
  const t = Array.isArray(e),
    n = typeof FileList < 'u' ? e instanceof FileList : !1;
  if (e instanceof Date) s = new Date(e);
  else if (e instanceof Set) s = new Set(e);
  else if (!(Tt && (e instanceof Blob || n)) && (t || H(e)))
    if (((s = t ? [] : {}), !t && !ma(e))) s = e;
    else for (const i in e) e.hasOwnProperty(i) && (s[i] = ce(e[i]));
  else return e;
  return s;
}
var tt = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  G = (e) => e === void 0,
  p = (e, s, t) => {
    if (!s || !H(e)) return t;
    const n = tt(s.split(/[,[\].]+?/)).reduce((i, o) => (ie(i) ? i : i[o]), e);
    return G(n) || n === e ? (G(e[s]) ? t : e[s]) : n;
  },
  fe = (e) => typeof e == 'boolean',
  kt = (e) => /^\w*$/.test(e),
  vs = (e) => tt(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  O = (e, s, t) => {
    let n = -1;
    const i = kt(s) ? [s] : vs(s),
      o = i.length,
      d = o - 1;
    for (; ++n < o; ) {
      const u = i[n];
      let y = t;
      if (n !== d) {
        const S = e[u];
        y = H(S) || Array.isArray(S) ? S : isNaN(+i[n + 1]) ? {} : [];
      }
      if (u === '__proto__' || u === 'constructor' || u === 'prototype') return;
      (e[u] = y), (e = e[u]);
    }
    return e;
  };
const Ke = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  he = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  ye = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  xa = W.createContext(null),
  St = () => W.useContext(xa);
var bs = (e, s, t, n = !0) => {
    const i = { defaultValues: s._defaultValues };
    for (const o in e)
      Object.defineProperty(i, o, {
        get: () => {
          const d = o;
          return (
            s._proxyFormState[d] !== he.all && (s._proxyFormState[d] = !n || he.all),
            t && (t[d] = !0),
            e[d]
          );
        },
      });
    return i;
  },
  de = (e) => H(e) && !Object.keys(e).length,
  Ts = (e, s, t, n) => {
    t(e);
    const d = e,
      { name: i } = d,
      o = me(d, ['name']);
    return (
      de(o) ||
      Object.keys(o).length >= Object.keys(s).length ||
      Object.keys(o).find((u) => s[u] === (!n || he.all))
    );
  },
  De = (e) => (Array.isArray(e) ? e : [e]),
  ks = (e, s, t) =>
    !e ||
    !s ||
    e === s ||
    De(e).some((n) => n && (t ? n === s : n.startsWith(s) || s.startsWith(n)));
function jt(e) {
  const s = W.useRef(e);
  (s.current = e),
    W.useEffect(() => {
      const t =
        !e.disabled && s.current.subject && s.current.subject.subscribe({ next: s.current.next });
      return () => {
        t && t.unsubscribe();
      };
    }, [e.disabled]);
}
function va(e) {
  const s = St(),
    { control: t = s.control, disabled: n, name: i, exact: o } = e,
    [d, u] = W.useState(t._formState),
    y = W.useRef(!0),
    S = W.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    T = W.useRef(i);
  return (
    (T.current = i),
    jt({
      disabled: n,
      next: (x) =>
        y.current &&
        ks(T.current, x.name, o) &&
        Ts(x, S.current, t._updateFormState) &&
        u(g(g({}, t._formState), x)),
      subject: t._subjects.state,
    }),
    W.useEffect(
      () => (
        (y.current = !0),
        S.current.isValid && t._updateValid(!0),
        () => {
          y.current = !1;
        }
      ),
      [t]
    ),
    W.useMemo(() => bs(d, t, S.current, !1), [d, t])
  );
}
var ge = (e) => typeof e == 'string',
  Ss = (e, s, t, n, i) =>
    ge(e)
      ? (n && s.watch.add(e), p(t, e, i))
      : Array.isArray(e)
        ? e.map((o) => (n && s.watch.add(o), p(t, o)))
        : (n && (s.watchAll = !0), t);
function ba(e) {
  const s = St(),
    { control: t = s.control, name: n, defaultValue: i, disabled: o, exact: d } = e,
    u = W.useRef(n);
  (u.current = n),
    jt({
      disabled: o,
      subject: t._subjects.values,
      next: (T) => {
        ks(u.current, T.name, d) &&
          S(ce(Ss(u.current, t._names, T.values || t._formValues, !1, i)));
      },
    });
  const [y, S] = W.useState(t._getWatch(n, i));
  return W.useEffect(() => t._removeUnmounted()), y;
}
function Ta(e) {
  const s = St(),
    { name: t, disabled: n, control: i = s.control, shouldUnregister: o } = e,
    d = xs(i._names.array, t),
    u = ba({
      control: i,
      name: t,
      defaultValue: p(i._formValues, t, p(i._defaultValues, t, e.defaultValue)),
      exact: !0,
    }),
    y = va({ control: i, name: t, exact: !0 }),
    S = W.useRef(
      i.register(
        t,
        g(Z(g({}, e.rules), { value: u }), fe(e.disabled) ? { disabled: e.disabled } : {})
      )
    ),
    T = W.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!p(y.errors, t) },
            isDirty: { enumerable: !0, get: () => !!p(y.dirtyFields, t) },
            isTouched: { enumerable: !0, get: () => !!p(y.touchedFields, t) },
            isValidating: { enumerable: !0, get: () => !!p(y.validatingFields, t) },
            error: { enumerable: !0, get: () => p(y.errors, t) },
          }
        ),
      [y, t]
    ),
    x = W.useMemo(
      () =>
        Z(g({ name: t, value: u }, fe(n) || y.disabled ? { disabled: y.disabled || n } : {}), {
          onChange: (b) =>
            S.current.onChange({ target: { value: ms(b), name: t }, type: Ke.CHANGE }),
          onBlur: () =>
            S.current.onBlur({ target: { value: p(i._formValues, t), name: t }, type: Ke.BLUR }),
          ref: (b) => {
            const L = p(i._fields, t);
            L &&
              b &&
              (L._f.ref = {
                focus: () => b.focus(),
                select: () => b.select(),
                setCustomValidity: (R) => b.setCustomValidity(R),
                reportValidity: () => b.reportValidity(),
              });
          },
        }),
      [t, i._formValues, n, y.disabled, u, i._fields]
    );
  return (
    W.useEffect(() => {
      const b = i._options.shouldUnregister || o,
        L = (R, $) => {
          const B = p(i._fields, R);
          B && B._f && (B._f.mount = $);
        };
      if ((L(t, !0), b)) {
        const R = ce(p(i._options.defaultValues, t));
        O(i._defaultValues, t, R), G(p(i._formValues, t)) && O(i._formValues, t, R);
      }
      return (
        !d && i.register(t),
        () => {
          (d ? b && !i._state.action : b) ? i.unregister(t) : L(t, !1);
        }
      );
    }, [t, i, d, o]),
    W.useEffect(() => {
      i._updateDisabledField({ disabled: n, fields: i._fields, name: t });
    }, [n, t, i]),
    W.useMemo(() => ({ field: x, formState: y, fieldState: T }), [x, y, T])
  );
}
const He = (e) => e.render(Ta(e));
var ka = (e, s, t, n, i) =>
    s
      ? Z(g({}, t[e]), { types: Z(g({}, t[e] && t[e].types ? t[e].types : {}), { [n]: i || !0 }) })
      : {},
  zt = (e) => ({
    isOnSubmit: !e || e === he.onSubmit,
    isOnBlur: e === he.onBlur,
    isOnChange: e === he.onChange,
    isOnAll: e === he.all,
    isOnTouch: e === he.onTouched,
  }),
  Ut = (e, s, t) =>
    !t &&
    (s.watchAll ||
      s.watch.has(e) ||
      [...s.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const Me = (e, s, t, n) => {
  for (const o of t || Object.keys(e)) {
    const d = p(e, o);
    if (d) {
      const i = d,
        { _f: u } = i,
        y = me(i, ['_f']);
      if (u) {
        if (u.refs && u.refs[0] && s(u.refs[0], o) && !n) return !0;
        if (u.ref && s(u.ref, u.name) && !n) return !0;
        if (Me(y, s)) break;
      } else if (H(y) && Me(y, s)) break;
    }
  }
};
var Sa = (e, s, t) => {
    const n = De(p(e, t));
    return O(n, 'root', s[t]), O(e, t, n), e;
  },
  It = (e) => e.type === 'file',
  _e = (e) => typeof e == 'function',
  Qe = (e) => {
    if (!Tt) return !1;
    const s = e ? e.ownerDocument : 0;
    return e instanceof (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement);
  },
  Ye = (e) => ge(e),
  wt = (e) => e.type === 'radio',
  Xe = (e) => e instanceof RegExp;
const Gt = { value: !1, isValid: !1 },
  Ht = { value: !0, isValid: !0 };
var js = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !G(e[0].attributes.value)
        ? G(e[0].value) || e[0].value === ''
          ? Ht
          : { value: e[0].value, isValid: !0 }
        : Ht
      : Gt;
  }
  return Gt;
};
const qt = { isValid: !1, value: null };
var Is = (e) =>
  Array.isArray(e)
    ? e.reduce((s, t) => (t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : s), qt)
    : qt;
function Yt(e, s, t = 'validate') {
  if (Ye(e) || (Array.isArray(e) && e.every(Ye)) || (fe(e) && !e))
    return { type: t, message: Ye(e) ? e : '', ref: s };
}
var Fe = (e) => (H(e) && !Xe(e) ? e : { value: e, message: '' }),
  Jt = async (e, s, t, n, i, o) => {
    const {
        ref: d,
        refs: u,
        required: y,
        maxLength: S,
        minLength: T,
        min: x,
        max: b,
        pattern: L,
        validate: R,
        name: $,
        valueAsNumber: B,
        mount: U,
      } = e._f,
      j = p(t, $);
    if (!U || s.has($)) return {};
    const C = u ? u[0] : d,
      P = (m) => {
        i && C.reportValidity && (C.setCustomValidity(fe(m) ? '' : m || ''), C.reportValidity());
      },
      D = {},
      M = wt(d),
      oe = Be(d),
      le = M || oe,
      ee =
        ((B || It(d)) && G(d.value) && G(j)) ||
        (Qe(d) && d.value === '') ||
        j === '' ||
        (Array.isArray(j) && !j.length),
      q = ka.bind(null, $, n, D),
      N = (m, k, A, w = ye.maxLength, E = ye.minLength) => {
        const X = m ? k : A;
        D[$] = g({ type: m ? w : E, message: X, ref: d }, q(m ? w : E, X));
      };
    if (
      o
        ? !Array.isArray(j) || !j.length
        : y &&
          ((!le && (ee || ie(j))) ||
            (fe(j) && !j) ||
            (oe && !js(u).isValid) ||
            (M && !Is(u).isValid))
    ) {
      const { value: m, message: k } = Ye(y) ? { value: !!y, message: y } : Fe(y);
      if (m && ((D[$] = g({ type: ye.required, message: k, ref: C }, q(ye.required, k))), !n))
        return P(k), D;
    }
    if (!ee && (!ie(x) || !ie(b))) {
      let m, k;
      const A = Fe(b),
        w = Fe(x);
      if (!ie(j) && !isNaN(j)) {
        const E = d.valueAsNumber || (j && +j);
        ie(A.value) || (m = E > A.value), ie(w.value) || (k = E < w.value);
      } else {
        const E = d.valueAsDate || new Date(j),
          X = (ve) => new Date(new Date().toDateString() + ' ' + ve),
          pe = d.type == 'time',
          ne = d.type == 'week';
        ge(A.value) && j && (m = pe ? X(j) > X(A.value) : ne ? j > A.value : E > new Date(A.value)),
          ge(w.value) &&
            j &&
            (k = pe ? X(j) < X(w.value) : ne ? j < w.value : E < new Date(w.value));
      }
      if ((m || k) && (N(!!m, A.message, w.message, ye.max, ye.min), !n)) return P(D[$].message), D;
    }
    if ((S || T) && !ee && (ge(j) || (o && Array.isArray(j)))) {
      const m = Fe(S),
        k = Fe(T),
        A = !ie(m.value) && j.length > +m.value,
        w = !ie(k.value) && j.length < +k.value;
      if ((A || w) && (N(A, m.message, k.message), !n)) return P(D[$].message), D;
    }
    if (L && !ee && ge(j)) {
      const { value: m, message: k } = Fe(L);
      if (
        Xe(m) &&
        !j.match(m) &&
        ((D[$] = g({ type: ye.pattern, message: k, ref: d }, q(ye.pattern, k))), !n)
      )
        return P(k), D;
    }
    if (R) {
      if (_e(R)) {
        const m = await R(j, t),
          k = Yt(m, C);
        if (k && ((D[$] = g(g({}, k), q(ye.validate, k.message))), !n)) return P(k.message), D;
      } else if (H(R)) {
        let m = {};
        for (const k in R) {
          if (!de(m) && !n) break;
          const A = Yt(await R[k](j, t), C, k);
          A && ((m = g(g({}, A), q(k, A.message))), P(A.message), n && (D[$] = m));
        }
        if (!de(m) && ((D[$] = g({ ref: C }, m)), !n)) return D;
      }
    }
    return P(!0), D;
  };
function ja(e, s) {
  const t = s.slice(0, -1).length;
  let n = 0;
  for (; n < t; ) e = G(e) ? n++ : e[s[n++]];
  return e;
}
function Ia(e) {
  for (const s in e) if (e.hasOwnProperty(s) && !G(e[s])) return !1;
  return !0;
}
function J(e, s) {
  const t = Array.isArray(s) ? s : kt(s) ? [s] : vs(s),
    n = t.length === 1 ? e : ja(e, t),
    i = t.length - 1,
    o = t[i];
  return (
    n && delete n[o],
    i !== 0 && ((H(n) && de(n)) || (Array.isArray(n) && Ia(n))) && J(e, t.slice(0, -1)),
    e
  );
}
var ct = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (i) => {
        for (const o of e) o.next && o.next(i);
      },
      subscribe: (i) => (
        e.push(i),
        {
          unsubscribe: () => {
            e = e.filter((o) => o !== i);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  xt = (e) => ie(e) || !ys(e);
function xe(e, s) {
  if (xt(e) || xt(s)) return e === s;
  if (Te(e) && Te(s)) return e.getTime() === s.getTime();
  const t = Object.keys(e),
    n = Object.keys(s);
  if (t.length !== n.length) return !1;
  for (const i of t) {
    const o = e[i];
    if (!n.includes(i)) return !1;
    if (i !== 'ref') {
      const d = s[i];
      if (
        (Te(o) && Te(d)) || (H(o) && H(d)) || (Array.isArray(o) && Array.isArray(d))
          ? !xe(o, d)
          : o !== d
      )
        return !1;
    }
  }
  return !0;
}
var ws = (e) => e.type === 'select-multiple',
  wa = (e) => wt(e) || Be(e),
  dt = (e) => Qe(e) && e.isConnected,
  Fs = (e) => {
    for (const s in e) if (_e(e[s])) return !0;
    return !1;
  };
function Ze(e, s = {}) {
  const t = Array.isArray(e);
  if (H(e) || t)
    for (const n in e)
      Array.isArray(e[n]) || (H(e[n]) && !Fs(e[n]))
        ? ((s[n] = Array.isArray(e[n]) ? [] : {}), Ze(e[n], s[n]))
        : ie(e[n]) || (s[n] = !0);
  return s;
}
function Vs(e, s, t) {
  const n = Array.isArray(e);
  if (H(e) || n)
    for (const i in e)
      Array.isArray(e[i]) || (H(e[i]) && !Fs(e[i]))
        ? G(s) || xt(t[i])
          ? (t[i] = Array.isArray(e[i]) ? Ze(e[i], []) : g({}, Ze(e[i])))
          : Vs(e[i], ie(s) ? {} : s[i], t[i])
        : (t[i] = !xe(e[i], s[i]));
  return t;
}
var Le = (e, s) => Vs(e, s, Ze(s)),
  Cs = (e, { valueAsNumber: s, valueAsDate: t, setValueAs: n }) =>
    G(e) ? e : s ? (e === '' ? NaN : e && +e) : t && ge(e) ? new Date(e) : n ? n(e) : e;
function ut(e) {
  const s = e.ref;
  return It(s)
    ? s.files
    : wt(s)
      ? Is(e.refs).value
      : ws(s)
        ? [...s.selectedOptions].map(({ value: t }) => t)
        : Be(s)
          ? js(e.refs).value
          : Cs(G(s.value) ? e.ref.value : s.value, e);
}
var Fa = (e, s, t, n) => {
    const i = {};
    for (const o of e) {
      const d = p(s, o);
      d && O(i, o, d._f);
    }
    return { criteriaMode: t, names: [...e], fields: i, shouldUseNativeValidation: n };
  },
  Pe = (e) => (G(e) ? e : Xe(e) ? e.source : H(e) ? (Xe(e.value) ? e.value.source : e.value) : e);
const Kt = 'AsyncFunction';
var Va = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (_e(e.validate) && e.validate.constructor.name === Kt) ||
      (H(e.validate) && Object.values(e.validate).find((s) => s.constructor.name === Kt))
    ),
  Ca = (e) =>
    e.mount &&
    (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Qt(e, s, t) {
  const n = p(e, t);
  if (n || kt(t)) return { error: n, name: t };
  const i = t.split('.');
  for (; i.length; ) {
    const o = i.join('.'),
      d = p(s, o),
      u = p(e, o);
    if (d && !Array.isArray(d) && t !== o) return { name: t };
    if (u && u.type) return { name: o, error: u };
    i.pop();
  }
  return { name: t };
}
var Na = (e, s, t, n, i) =>
    i.isOnAll
      ? !1
      : !t && i.isOnTouch
        ? !(s || e)
        : (t ? n.isOnBlur : i.isOnBlur)
          ? !e
          : (t ? n.isOnChange : i.isOnChange)
            ? e
            : !0,
  Aa = (e, s) => !tt(p(e, s)).length && J(e, s);
const Ea = { mode: he.onSubmit, reValidateMode: he.onChange, shouldFocusError: !0 };
function La(e = {}) {
  let s = g(g({}, Ea), e),
    t = {
      submitCount: 0,
      isDirty: !1,
      isLoading: _e(s.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: s.errors || {},
      disabled: s.disabled || !1,
    },
    n = {},
    i = H(s.defaultValues) || H(s.values) ? ce(s.defaultValues || s.values) || {} : {},
    o = s.shouldUnregister ? {} : ce(i),
    d = { action: !1, mount: !1, watch: !1 },
    u = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    y,
    S = 0;
  const T = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    x = { values: ct(), array: ct(), state: ct() },
    b = zt(s.mode),
    L = zt(s.reValidateMode),
    R = s.criteriaMode === he.all,
    $ = (r) => (l) => {
      clearTimeout(S), (S = setTimeout(r, l));
    },
    B = async (r) => {
      if (!s.disabled && (T.isValid || r)) {
        const l = s.resolver ? de((await le()).errors) : await q(n, !0);
        l !== t.isValid && x.state.next({ isValid: l });
      }
    },
    U = (r, l) => {
      !s.disabled &&
        (T.isValidating || T.validatingFields) &&
        ((r || Array.from(u.mount)).forEach((c) => {
          c && (l ? O(t.validatingFields, c, l) : J(t.validatingFields, c));
        }),
        x.state.next({
          validatingFields: t.validatingFields,
          isValidating: !de(t.validatingFields),
        }));
    },
    j = (r, l = [], c, _, h = !0, f = !0) => {
      if (_ && c && !s.disabled) {
        if (((d.action = !0), f && Array.isArray(p(n, r)))) {
          const v = c(p(n, r), _.argA, _.argB);
          h && O(n, r, v);
        }
        if (f && Array.isArray(p(t.errors, r))) {
          const v = c(p(t.errors, r), _.argA, _.argB);
          h && O(t.errors, r, v), Aa(t.errors, r);
        }
        if (T.touchedFields && f && Array.isArray(p(t.touchedFields, r))) {
          const v = c(p(t.touchedFields, r), _.argA, _.argB);
          h && O(t.touchedFields, r, v);
        }
        T.dirtyFields && (t.dirtyFields = Le(i, o)),
          x.state.next({
            name: r,
            isDirty: m(r, l),
            dirtyFields: t.dirtyFields,
            errors: t.errors,
            isValid: t.isValid,
          });
      } else O(o, r, l);
    },
    C = (r, l) => {
      O(t.errors, r, l), x.state.next({ errors: t.errors });
    },
    P = (r) => {
      (t.errors = r), x.state.next({ errors: t.errors, isValid: !1 });
    },
    D = (r, l, c, _) => {
      const h = p(n, r);
      if (h) {
        const f = p(o, r, G(c) ? p(i, r) : c);
        G(f) || (_ && _.defaultChecked) || l ? O(o, r, l ? f : ut(h._f)) : w(r, f), d.mount && B();
      }
    },
    M = (r, l, c, _, h) => {
      let f = !1,
        v = !1;
      const F = { name: r };
      if (!s.disabled) {
        const K = !!(p(n, r) && p(n, r)._f && p(n, r)._f.disabled);
        if (!c || _) {
          T.isDirty && ((v = t.isDirty), (t.isDirty = F.isDirty = m()), (f = v !== F.isDirty));
          const Y = K || xe(p(i, r), l);
          (v = !!(!K && p(t.dirtyFields, r))),
            Y || K ? J(t.dirtyFields, r) : O(t.dirtyFields, r, !0),
            (F.dirtyFields = t.dirtyFields),
            (f = f || (T.dirtyFields && v !== !Y));
        }
        if (c) {
          const Y = p(t.touchedFields, r);
          Y ||
            (O(t.touchedFields, r, c),
            (F.touchedFields = t.touchedFields),
            (f = f || (T.touchedFields && Y !== c)));
        }
        f && h && x.state.next(F);
      }
      return f ? F : {};
    },
    oe = (r, l, c, _) => {
      const h = p(t.errors, r),
        f = T.isValid && fe(l) && t.isValid !== l;
      if (
        (s.delayError && c
          ? ((y = $(() => C(r, c))), y(s.delayError))
          : (clearTimeout(S), (y = null), c ? O(t.errors, r, c) : J(t.errors, r)),
        (c ? !xe(h, c) : h) || !de(_) || f)
      ) {
        const v = Z(g(g({}, _), f && fe(l) ? { isValid: l } : {}), { errors: t.errors, name: r });
        (t = g(g({}, t), v)), x.state.next(v);
      }
    },
    le = async (r) => {
      U(r, !0);
      const l = await s.resolver(
        o,
        s.context,
        Fa(r || u.mount, n, s.criteriaMode, s.shouldUseNativeValidation)
      );
      return U(r), l;
    },
    ee = async (r) => {
      const { errors: l } = await le(r);
      if (r)
        for (const c of r) {
          const _ = p(l, c);
          _ ? O(t.errors, c, _) : J(t.errors, c);
        }
      else t.errors = l;
      return l;
    },
    q = async (r, l, c = { valid: !0 }) => {
      for (const h in r) {
        const f = r[h];
        if (f) {
          const _ = f,
            { _f: v } = _,
            F = me(_, ['_f']);
          if (v) {
            const K = u.array.has(v.name),
              Y = f._f && Va(f._f);
            Y && T.validatingFields && U([h], !0);
            const ue = await Jt(f, u.disabled, o, R, s.shouldUseNativeValidation && !l, K);
            if ((Y && T.validatingFields && U([h]), ue[v.name] && ((c.valid = !1), l))) break;
            !l &&
              (p(ue, v.name)
                ? K
                  ? Sa(t.errors, ue, v.name)
                  : O(t.errors, v.name, ue[v.name])
                : J(t.errors, v.name));
          }
          !de(F) && (await q(F, l, c));
        }
      }
      return c.valid;
    },
    N = () => {
      for (const r of u.unMount) {
        const l = p(n, r);
        l && (l._f.refs ? l._f.refs.every((c) => !dt(c)) : !dt(l._f.ref)) && Ie(r);
      }
      u.unMount = new Set();
    },
    m = (r, l) => !s.disabled && (r && l && O(o, r, l), !xe(Se(), i)),
    k = (r, l, c) => Ss(r, u, g({}, d.mount ? o : G(l) ? i : ge(r) ? { [r]: l } : l), c, l),
    A = (r) => tt(p(d.mount ? o : i, r, s.shouldUnregister ? p(i, r, []) : [])),
    w = (r, l, c = {}) => {
      const _ = p(n, r);
      let h = l;
      if (_) {
        const f = _._f;
        f &&
          (!f.disabled && O(o, r, Cs(l, f)),
          (h = Qe(f.ref) && ie(l) ? '' : l),
          ws(f.ref)
            ? [...f.ref.options].forEach((v) => (v.selected = h.includes(v.value)))
            : f.refs
              ? Be(f.ref)
                ? f.refs.length > 1
                  ? f.refs.forEach(
                      (v) =>
                        (!v.defaultChecked || !v.disabled) &&
                        (v.checked = Array.isArray(h)
                          ? !!h.find((F) => F === v.value)
                          : h === v.value)
                    )
                  : f.refs[0] && (f.refs[0].checked = !!h)
                : f.refs.forEach((v) => (v.checked = v.value === h))
              : It(f.ref)
                ? (f.ref.value = '')
                : ((f.ref.value = h), f.ref.type || x.values.next({ name: r, values: g({}, o) })));
      }
      (c.shouldDirty || c.shouldTouch) && M(r, h, c.shouldTouch, c.shouldDirty, !0),
        c.shouldValidate && ve(r);
    },
    E = (r, l, c) => {
      for (const _ in l) {
        const h = l[_],
          f = ''.concat(r, '.').concat(_),
          v = p(n, f);
        (u.array.has(r) || H(h) || (v && !v._f)) && !Te(h) ? E(f, h, c) : w(f, h, c);
      }
    },
    X = (r, l, c = {}) => {
      const _ = p(n, r),
        h = u.array.has(r),
        f = ce(l);
      O(o, r, f),
        h
          ? (x.array.next({ name: r, values: g({}, o) }),
            (T.isDirty || T.dirtyFields) &&
              c.shouldDirty &&
              x.state.next({ name: r, dirtyFields: Le(i, o), isDirty: m(r, f) }))
          : _ && !_._f && !ie(f)
            ? E(r, f, c)
            : w(r, f, c),
        Ut(r, u) && x.state.next(g({}, t)),
        x.values.next({ name: d.mount ? r : void 0, values: g({}, o) });
    },
    pe = async (r) => {
      d.mount = !0;
      const l = r.target;
      let c = l.name,
        _ = !0;
      const h = p(n, c),
        f = () => (l.type ? ut(h._f) : ms(r)),
        v = (F) => {
          _ = Number.isNaN(F) || (Te(F) && isNaN(F.getTime())) || xe(F, p(o, c, F));
        };
      if (h) {
        let F, K;
        const Y = f(),
          ue = r.type === Ke.BLUR || r.type === Ke.FOCUS_OUT,
          As =
            (!Ca(h._f) && !s.resolver && !p(t.errors, c) && !h._f.deps) ||
            Na(ue, p(t.touchedFields, c), t.isSubmitted, L, b),
          at = Ut(c, u, ue);
        O(o, c, Y),
          ue ? (h._f.onBlur && h._f.onBlur(r), y && y(0)) : h._f.onChange && h._f.onChange(r);
        const it = M(c, Y, ue, !1),
          Es = !de(it) || at;
        if ((!ue && x.values.next({ name: c, type: r.type, values: g({}, o) }), As))
          return (
            T.isValid && (s.mode === 'onBlur' && ue ? B() : ue || B()),
            Es && x.state.next(g({ name: c }, at ? {} : it))
          );
        if ((!ue && at && x.state.next(g({}, t)), s.resolver)) {
          const { errors: Nt } = await le([c]);
          if ((v(Y), _)) {
            const Ls = Qt(t.errors, n, c),
              At = Qt(Nt, n, Ls.name || c);
            (F = At.error), (c = At.name), (K = de(Nt));
          }
        } else
          U([c], !0),
            (F = (await Jt(h, u.disabled, o, R, s.shouldUseNativeValidation))[c]),
            U([c]),
            v(Y),
            _ && (F ? (K = !1) : T.isValid && (K = await q(n, !0)));
        _ && (h._f.deps && ve(h._f.deps), oe(c, K, F, it));
      }
    },
    ne = (r, l) => {
      if (p(t.errors, l) && r.focus) return r.focus(), 1;
    },
    ve = async (r, l = {}) => {
      let c, _;
      const h = De(r);
      if (s.resolver) {
        const f = await ee(G(r) ? r : h);
        (c = de(f)), (_ = r ? !h.some((v) => p(f, v)) : c);
      } else
        r
          ? ((_ = (
              await Promise.all(
                h.map(async (f) => {
                  const v = p(n, f);
                  return await q(v && v._f ? { [f]: v } : v);
                })
              )
            ).every(Boolean)),
            !(!_ && !t.isValid) && B())
          : (_ = c = await q(n));
      return (
        x.state.next(
          Z(
            g(
              g({}, !ge(r) || (T.isValid && c !== t.isValid) ? {} : { name: r }),
              s.resolver || !r ? { isValid: c } : {}
            ),
            { errors: t.errors }
          )
        ),
        l.shouldFocus && !_ && Me(n, ne, r ? h : u.mount),
        _
      );
    },
    Se = (r) => {
      const l = g({}, d.mount ? o : i);
      return G(r) ? l : ge(r) ? p(l, r) : r.map((c) => p(l, c));
    },
    je = (r, l) => ({
      invalid: !!p((l || t).errors, r),
      isDirty: !!p((l || t).dirtyFields, r),
      error: p((l || t).errors, r),
      isValidating: !!p(t.validatingFields, r),
      isTouched: !!p((l || t).touchedFields, r),
    }),
    st = (r) => {
      r && De(r).forEach((l) => J(t.errors, l)), x.state.next({ errors: r ? t.errors : {} });
    },
    Oe = (r, l, c) => {
      const _ = (p(n, r, { _f: {} })._f || {}).ref,
        Y = p(t.errors, r) || {},
        { ref: f, message: v, type: F } = Y,
        K = me(Y, ['ref', 'message', 'type']);
      O(t.errors, r, Z(g(g({}, K), l), { ref: _ })),
        x.state.next({ name: r, errors: t.errors, isValid: !1 }),
        c && c.shouldFocus && _ && _.focus && _.focus();
    },
    rt = (r, l) => (_e(r) ? x.values.subscribe({ next: (c) => r(k(void 0, l), c) }) : k(r, l, !0)),
    Ie = (r, l = {}) => {
      for (const c of r ? De(r) : u.mount)
        u.mount.delete(c),
          u.array.delete(c),
          l.keepValue || (J(n, c), J(o, c)),
          !l.keepError && J(t.errors, c),
          !l.keepDirty && J(t.dirtyFields, c),
          !l.keepTouched && J(t.touchedFields, c),
          !l.keepIsValidating && J(t.validatingFields, c),
          !s.shouldUnregister && !l.keepDefaultValue && J(i, c);
      x.values.next({ values: g({}, o) }),
        x.state.next(g(g({}, t), l.keepDirty ? { isDirty: m() } : {})),
        !l.keepIsValid && B();
    },
    Ne = ({ disabled: r, name: l, field: c, fields: _ }) => {
      ((fe(r) && d.mount) || r || u.disabled.has(l)) &&
        (r ? u.disabled.add(l) : u.disabled.delete(l), M(l, ut(c ? c._f : p(_, l)._f), !1, !1, !0));
    },
    we = (r, l = {}) => {
      let c = p(n, r);
      const _ = fe(l.disabled) || fe(s.disabled);
      return (
        O(
          n,
          r,
          Z(g({}, c || {}), {
            _f: g(Z(g({}, c && c._f ? c._f : { ref: { name: r } }), { name: r, mount: !0 }), l),
          })
        ),
        u.mount.add(r),
        c
          ? Ne({ field: c, disabled: fe(l.disabled) ? l.disabled : s.disabled, name: r })
          : D(r, !0, l.value),
        Z(
          g(
            g({}, _ ? { disabled: l.disabled || s.disabled } : {}),
            s.progressive
              ? {
                  required: !!l.required,
                  min: Pe(l.min),
                  max: Pe(l.max),
                  minLength: Pe(l.minLength),
                  maxLength: Pe(l.maxLength),
                  pattern: Pe(l.pattern),
                }
              : {}
          ),
          {
            name: r,
            onChange: pe,
            onBlur: pe,
            ref: (h) => {
              if (h) {
                we(r, l), (c = p(n, r));
                const f =
                    (G(h.value) &&
                      h.querySelectorAll &&
                      h.querySelectorAll('input,select,textarea')[0]) ||
                    h,
                  v = wa(f),
                  F = c._f.refs || [];
                if (v ? F.find((K) => K === f) : f === c._f.ref) return;
                O(n, r, {
                  _f: g(
                    g({}, c._f),
                    v
                      ? {
                          refs: [...F.filter(dt), f, ...(Array.isArray(p(i, r)) ? [{}] : [])],
                          ref: { type: f.type, name: r },
                        }
                      : { ref: f }
                  ),
                }),
                  D(r, !1, void 0, f);
              } else
                (c = p(n, r, {})),
                  c._f && (c._f.mount = !1),
                  (s.shouldUnregister || l.shouldUnregister) &&
                    !(xs(u.array, r) && d.action) &&
                    u.unMount.add(r);
            },
          }
        )
      );
    },
    z = () => s.shouldFocusError && Me(n, ne, u.mount),
    nt = (r) => {
      fe(r) &&
        (x.state.next({ disabled: r }),
        Me(
          n,
          (l, c) => {
            const _ = p(n, c);
            _ &&
              ((l.disabled = _._f.disabled || r),
              Array.isArray(_._f.refs) &&
                _._f.refs.forEach((h) => {
                  h.disabled = _._f.disabled || r;
                }));
          },
          0,
          !1
        ));
    },
    Ft = (r, l) => async (c) => {
      let _;
      c && (c.preventDefault && c.preventDefault(), c.persist && c.persist());
      let h = ce(o);
      if (u.disabled.size) for (const f of u.disabled) O(h, f, void 0);
      if ((x.state.next({ isSubmitting: !0 }), s.resolver)) {
        const { errors: f, values: v } = await le();
        (t.errors = f), (h = v);
      } else await q(n);
      if ((J(t.errors, 'root'), de(t.errors))) {
        x.state.next({ errors: {} });
        try {
          await r(h, c);
        } catch (f) {
          _ = f;
        }
      } else l && (await l(g({}, t.errors), c)), z(), setTimeout(z);
      if (
        (x.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: de(t.errors) && !_,
          submitCount: t.submitCount + 1,
          errors: t.errors,
        }),
        _)
      )
        throw _;
    },
    Ns = (r, l = {}) => {
      p(n, r) &&
        (G(l.defaultValue)
          ? X(r, ce(p(i, r)))
          : (X(r, l.defaultValue), O(i, r, ce(l.defaultValue))),
        l.keepTouched || J(t.touchedFields, r),
        l.keepDirty ||
          (J(t.dirtyFields, r), (t.isDirty = l.defaultValue ? m(r, ce(p(i, r))) : m())),
        l.keepError || (J(t.errors, r), T.isValid && B()),
        x.state.next(g({}, t)));
    },
    Vt = (r, l = {}) => {
      const c = r ? ce(r) : i,
        _ = ce(c),
        h = de(r),
        f = h ? i : _;
      if ((l.keepDefaultValues || (i = c), !l.keepValues)) {
        if (l.keepDirtyValues) {
          const v = new Set([...u.mount, ...Object.keys(Le(i, o))]);
          for (const F of Array.from(v)) p(t.dirtyFields, F) ? O(f, F, p(o, F)) : X(F, p(f, F));
        } else {
          if (Tt && G(r))
            for (const v of u.mount) {
              const F = p(n, v);
              if (F && F._f) {
                const K = Array.isArray(F._f.refs) ? F._f.refs[0] : F._f.ref;
                if (Qe(K)) {
                  const Y = K.closest('form');
                  if (Y) {
                    Y.reset();
                    break;
                  }
                }
              }
            }
          n = {};
        }
        (o = s.shouldUnregister ? (l.keepDefaultValues ? ce(i) : {}) : ce(f)),
          x.array.next({ values: g({}, f) }),
          x.values.next({ values: g({}, f) });
      }
      (u = {
        mount: l.keepDirtyValues ? u.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (d.mount = !T.isValid || !!l.keepIsValid || !!l.keepDirtyValues),
        (d.watch = !!s.shouldUnregister),
        x.state.next({
          submitCount: l.keepSubmitCount ? t.submitCount : 0,
          isDirty: h ? !1 : l.keepDirty ? t.isDirty : !!(l.keepDefaultValues && !xe(r, i)),
          isSubmitted: l.keepIsSubmitted ? t.isSubmitted : !1,
          dirtyFields: h
            ? {}
            : l.keepDirtyValues
              ? l.keepDefaultValues && o
                ? Le(i, o)
                : t.dirtyFields
              : l.keepDefaultValues && r
                ? Le(i, r)
                : l.keepDirty
                  ? t.dirtyFields
                  : {},
          touchedFields: l.keepTouched ? t.touchedFields : {},
          errors: l.keepErrors ? t.errors : {},
          isSubmitSuccessful: l.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
          isSubmitting: !1,
        });
    },
    Ct = (r, l) => Vt(_e(r) ? r(o) : r, l);
  return {
    control: {
      register: we,
      unregister: Ie,
      getFieldState: je,
      handleSubmit: Ft,
      setError: Oe,
      _executeSchema: le,
      _getWatch: k,
      _getDirty: m,
      _updateValid: B,
      _removeUnmounted: N,
      _updateFieldArray: j,
      _updateDisabledField: Ne,
      _getFieldArray: A,
      _reset: Vt,
      _resetDefaultValues: () =>
        _e(s.defaultValues) &&
        s.defaultValues().then((r) => {
          Ct(r, s.resetOptions), x.state.next({ isLoading: !1 });
        }),
      _updateFormState: (r) => {
        t = g(g({}, t), r);
      },
      _disableForm: nt,
      _subjects: x,
      _proxyFormState: T,
      _setErrors: P,
      get _fields() {
        return n;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return d;
      },
      set _state(r) {
        d = r;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return u;
      },
      set _names(r) {
        u = r;
      },
      get _formState() {
        return t;
      },
      set _formState(r) {
        t = r;
      },
      get _options() {
        return s;
      },
      set _options(r) {
        s = g(g({}, s), r);
      },
    },
    trigger: ve,
    register: we,
    handleSubmit: Ft,
    watch: rt,
    setValue: X,
    getValues: Se,
    reset: Ct,
    resetField: Ns,
    clearErrors: st,
    unregister: Ie,
    setError: Oe,
    setFocus: (r, l = {}) => {
      const c = p(n, r),
        _ = c && c._f;
      if (_) {
        const h = _.refs ? _.refs[0] : _.ref;
        h.focus && (h.focus(), l.shouldSelect && _e(h.select) && h.select());
      }
    },
    getFieldState: je,
  };
}
function Pa(e = {}) {
  const s = W.useRef(void 0),
    t = W.useRef(void 0),
    [n, i] = W.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: _e(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: _e(e.defaultValues) ? void 0 : e.defaultValues,
    });
  s.current || (s.current = Z(g({}, La(e)), { formState: n }));
  const o = s.current.control;
  return (
    (o._options = e),
    jt({
      subject: o._subjects.state,
      next: (d) => {
        Ts(d, o._proxyFormState, o._updateFormState, !0) && i(g({}, o._formState));
      },
    }),
    W.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    W.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const d = o._getDirty();
        d !== n.isDirty && o._subjects.state.next({ isDirty: d });
      }
    }, [o, n.isDirty]),
    W.useEffect(() => {
      e.values && !xe(e.values, t.current)
        ? (o._reset(e.values, o._options.resetOptions), (t.current = e.values), i((d) => g({}, d)))
        : o._resetDefaultValues();
    }, [e.values, o]),
    W.useEffect(() => {
      e.errors && o._setErrors(e.errors);
    }, [e.errors, o]),
    W.useEffect(() => {
      o._state.mount || (o._updateValid(), (o._state.mount = !0)),
        o._state.watch && ((o._state.watch = !1), o._subjects.state.next(g({}, o._formState))),
        o._removeUnmounted();
    }),
    W.useEffect(() => {
      e.shouldUnregister && o._subjects.values.next({ values: o._getWatch() });
    }, [e.shouldUnregister, o]),
    (s.current.formState = bs(n, o)),
    s.current
  );
}
const Da = () => {
    const { wallet: e } = fs(),
      s = es(),
      { isVersionedTxEnabled: t, updateProviderParams: n } = be,
      i = V.useCallback(() => {
        var d;
        return e
          ? ((d = e.adapter.supportedTransactionVersions) == null ? void 0 : d.has(0)) || !1
          : !0;
      }, [e]);
    return (
      V.useEffect(() => {
        n({ isVersionedTxEnabled: Je.isVersionedTransactionsEnabled && i() });
      }, [i, n]),
      {
        isVersionedTxEnabled: t,
        onVersionedTxChange: (d) => {
          n({ isVersionedTxEnabled: d }),
            s.track('kamino:liquidity:deposit-form:toggle-version', { value: d });
        },
        checkIfVersionedTransactionsSupported: i,
      }
    );
  },
  Ma = '_checkboxWrapper_vuedd_1',
  Wa = '_content_vuedd_4',
  Ba = '_title_vuedd_9',
  Oa = '_slippageSettings_vuedd_12',
  Ra = '_settingBlock_vuedd_17',
  $a = '_heading_vuedd_25',
  za = '_buttons_vuedd_35',
  Ua = '_slippage_vuedd_12',
  Ga = '_label_vuedd_46',
  Ha = '_slippageInput_vuedd_49',
  qa = '_fee_vuedd_52',
  Ya = '_feeInputWrapper_vuedd_57',
  Ja = '_feeInputPrefix_vuedd_60',
  Ka = '_feeInput_vuedd_57',
  Qa = '_divider_vuedd_74',
  Xa = '_dividerMarginBottom_vuedd_77',
  te = {
    checkboxWrapper: Ma,
    content: Wa,
    title: Ba,
    slippageSettings: Oa,
    settingBlock: Ra,
    heading: $a,
    buttons: za,
    slippage: Ua,
    label: Ga,
    slippageInput: Ha,
    fee: qa,
    feeInputWrapper: Ya,
    feeInputPrefix: Ja,
    feeInput: Ka,
    divider: Qa,
    dividerMarginBottom: Xa,
  },
  Za = ['0.1', '0.5', '1.0'].map((e) => ({ key: e, label: ''.concat(e, '%') })),
  ei = ts(({ withSlippage: e, extraContent: s }) => {
    const t = Zt(),
      n = _s(t.pathname),
      i = bt(t.pathname),
      o = gs(t.pathname),
      d = V.useMemo(
        () => [
          { key: Ee.normal, label: 'Normal' },
          { key: Ee.turbo, label: 'Turbo' },
          { key: Ee.custom, label: 'Custom' },
        ],
        []
      ),
      {
        slippage: u,
        slippageMultiply: y,
        slippageJlpMultiply: S,
        priorityFee: T,
        priorityFeeType: x,
        isVersionedTxEnabled: b,
        isTransactionSettingsModalVisible: L,
        slippageLeverageV3: R,
        updateProviderParams: $,
      } = be,
      [B, U] = V.useState(x),
      C = {
        slippage: (n ? S : i ? y : o ? R : u).toString(),
        feeType: x.toString(),
        priorityFee: T.toString(),
        isVersionedTxEnabled: b,
      },
      { reset: P, watch: D, handleSubmit: M, control: oe, register: le } = Pa({ defaultValues: C });
    V.useEffect(() => {
      L && P(C);
    }, [L, P]);
    const ee = d.find((w) => w.key === D('feeType')),
      q = (w) => {
        const { slippage: E, priorityFee: X, isVersionedTxEnabled: pe } = w,
          ne = {
            priorityFeeType: (ee == null ? void 0 : ee.key) || Ee.normal,
            priorityFee: new Ae(X),
            isVersionedTxEnabled: pe,
            isTransactionSettingsModalVisible: !1,
          };
        n
          ? (ne.slippageJlpMultiply = new Ae(E))
          : i
            ? (ne.slippageMultiply = new Ae(E))
            : o
              ? (ne.slippageLeverageV3 = new Ae(E))
              : (ne.slippage = new Ae(E)),
          $(ne, !0);
      },
      { checkIfVersionedTransactionsSupported: N } = Da(),
      m = es(),
      k = () => {
        $({ isTransactionSettingsModalVisible: !1 }),
          P(),
          m.track('kamino:liquidity:strategy-settings-modal:click-cancel');
      },
      A = N()
        ? 'Older versions of Ledger do not support versioned txns. Uncheck this box if transactions are not executing'
        : 'Your current wallet does not support Versioned Transactions';
    return a.jsxs(ps, {
      isOpen: L,
      onClose: k,
      isOverSidepanel: !0,
      children: [
        a.jsxs('form', {
          onSubmit: M(q),
          className: te.content,
          children: [
            a.jsx(I, { fs: 20, lh: 26, className: te.title, children: 'Settings' }),
            s,
            e &&
              a.jsxs('div', {
                className: te.slippageSettings,
                children: [
                  a.jsx(I, {
                    fs: 14,
                    lh: 20,
                    color: 'grey',
                    weight: 'bold',
                    className: te.label,
                    children: 'Slippage Tolerance',
                  }),
                  a.jsxs('div', {
                    className: te.slippage,
                    children: [
                      a.jsx(He, {
                        name: 'slippage',
                        control: oe,
                        render: ({ field: w }) =>
                          a.jsx(Wt, {
                            isFullWidth: !0,
                            onChange: w.onChange,
                            tabs: Za,
                            activeKey: w.value === '1' ? '1.0' : w.value,
                          }),
                      }),
                      a.jsx(He, {
                        name: 'slippage',
                        control: oe,
                        render: ({ field: w }) =>
                          a.jsx(mt, {
                            value: w.value,
                            onValueChange: ({ value: E }) => {
                              w.onChange(E);
                            },
                            isAllowed: ({ floatValue: E = 0 }) => E <= ar,
                            suffix: '%',
                            className: te.slippageInput,
                            customInput: yt,
                            placeholder: '0.00%',
                            maxLength: 5,
                            decimalScale: 2,
                            size: 'small',
                            allowNegative: !1,
                          }),
                      }),
                    ],
                  }),
                  a.jsx(I, {
                    fs: 12,
                    lh: 16,
                    color: 'grey',
                    weight: 'regular',
                    className: te.note,
                    children:
                      'Your transaction will revert if the price changes unfavorably by more than this percentage.',
                  }),
                  a.jsx(Bt, {}),
                ],
              }),
            a.jsxs('div', {
              className: te.settingBlock,
              children: [
                a.jsx(I, {
                  fs: 14,
                  lh: 20,
                  color: 'grey',
                  weight: 'bold',
                  className: te.label,
                  children: 'Priority fee',
                }),
                a.jsxs('div', {
                  className: te.fee,
                  children: [
                    a.jsx(He, {
                      name: 'feeType',
                      control: oe,
                      render: ({ field: w }) =>
                        a.jsx(Wt, {
                          isFullWidth: !0,
                          onChange: (E) => {
                            U(E), w.onChange(E);
                          },
                          tabs: d,
                          activeKey: w.value,
                        }),
                    }),
                    B === Ee.custom &&
                      a.jsx(He, {
                        name: 'priorityFee',
                        control: oe,
                        render: ({ field: w }) =>
                          a.jsxs('div', {
                            className: te.feeInputWrapper,
                            children: [
                              a.jsx(I, {
                                fs: 14,
                                lh: 20,
                                color: 'grey',
                                className: te.feeInputPrefix,
                                children: 'Custom max priority fee (SOL)',
                              }),
                              a.jsx(mt, {
                                value: w.value,
                                onValueChange: ({ value: E }) => {
                                  w.onChange(E);
                                },
                                className: te.feeInput,
                                customInput: yt,
                                placeholder: '0.000',
                                maxLength: 8,
                                isAllowed: ({ floatValue: E = 0 }) => E <= 1,
                                decimalScale: ir,
                                size: 'small',
                                allowNegative: !1,
                              }),
                            ],
                          }),
                      }),
                  ],
                }),
                a.jsx(I, {
                  fs: 12,
                  lh: 16,
                  weight: 'regular',
                  color: 'grey',
                  children:
                    'The priority fee is paid to the Solana network. This additional fee helps boost how a transaction is prioritized against others, resulting in faster transaction execution times.',
                }),
              ],
            }),
            Je.isVersionedTransactionsEnabled &&
              a.jsxs('div', {
                className: te.checkboxWrapper,
                children: [
                  a.jsx(Bt, { className: te.dividerMarginBottom }),
                  a.jsx(
                    or,
                    Z(g({}, le('isVersionedTxEnabled')), {
                      title: a.jsx(lr, {
                        id: 'versioned-transaction-tooltip',
                        children: a.jsx(I, { children: 'Versioned Transaction' }),
                      }),
                      subtitle: a.jsx(I, {
                        fs: 12,
                        lh: 12,
                        color: 'grey',
                        children: '(Please, uncheck if using Ledger or WalletConnect)',
                      }),
                      disabled: !N(),
                    })
                  ),
                ],
              }),
            a.jsxs('div', {
              className: te.buttons,
              children: [
                a.jsx(gt, { isFullWidth: !0, type: 'submit', children: 'Save' }),
                a.jsx(gt, {
                  isFullWidth: !0,
                  variant: 'secondary',
                  onClick: k,
                  children: 'Cancel',
                }),
              ],
            }),
          ],
        }),
        a.jsx(vt, { id: 'versioned-transaction-tooltip', content: A }),
      ],
    });
  }),
  { formatPercent: ti } = We,
  si = et(Ce),
  xi = ts(
    ({
      withSlippage: e,
      variant: s = 'normal',
      additionalSettingsText: t,
      modalExtraContent: n,
    }) => {
      const { updateProviderParams: i } = be,
        { getSlippage: o } = ga(),
        d = o();
      return a.jsxs('div', {
        className: si(Ce.root, { variant: s }),
        children: [
          a.jsx(I, {
            className: Ce.title,
            lh: 18,
            color: 'grey',
            children: 'Transaction Settings',
          }),
          a.jsxs('div', {
            className: Ce.settings,
            onClick: () => {
              i({ isTransactionSettingsModalVisible: !0 });
            },
            children: [
              a.jsxs(I, {
                lh: 18,
                className: Ce.priorityFeeText,
                children: [e && ''.concat(ti(d)), t && ', '.concat(t)],
              }),
              a.jsx(re, {
                name: 'SettingsFilled',
                className: Ce.clickable,
                size: 16,
                color: 'grey-deep',
              }),
            ],
          }),
          a.jsx(ei, { withSlippage: e, extraContent: n }),
        ],
      });
    }
  );
export {
  He as C,
  yi as F,
  mi as L,
  Qr as M,
  hi as R,
  xi as T,
  $t as W,
  hr as a,
  an as b,
  bt as c,
  gs as d,
  Pa as e,
  Da as f,
  gi as g,
  ga as h,
  _s as i,
  pi as j,
  _i as m,
  dr as u,
};
//# sourceMappingURL=TransactionSettingButton-DR4gT726.js.map
