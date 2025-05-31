var Ls = Object.defineProperty,
  Ps = Object.defineProperties;
var Ds = Object.getOwnPropertyDescriptors;
var $e = Object.getOwnPropertySymbols;
var Ct = Object.prototype.hasOwnProperty,
  Et = Object.prototype.propertyIsEnumerable;
var At = (e, s, t) =>
    s in e ? Ls(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[s] = t),
  g = (e, s) => {
    for (var t in s || (s = {})) Ct.call(s, t) && At(e, t, s[t]);
    if ($e) for (var t of $e(s)) Et.call(s, t) && At(e, t, s[t]);
    return e;
  },
  ae = (e, s) => Ps(e, Ds(s));
var xe = (e, s) => {
  var t = {};
  for (var n in e) Ct.call(e, n) && s.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && $e) for (var n of $e(e)) s.indexOf(n) < 0 && Et.call(e, n) && (t[n] = e[n]);
  return t;
};
import {
  j as a,
  z as Kt,
  r as N,
  w as et,
  l as dt,
  u as Qt,
  R as B,
  t as Xt,
  L as Zt,
  D as Ne,
} from './vendor-DpenelXu.js';
import {
  ek as ut,
  el as Ws,
  em as ft,
  en as es,
  eo as pt,
  h as ne,
  f as S,
  p as De,
  C as Ms,
  Z as Bs,
  dh as ts,
  r as ke,
  d3 as Os,
  U as ss,
  S as rs,
  O as ns,
  ep as as,
  R as is,
  dG as os,
  o as ls,
  j as mt,
  bh as Rs,
  bt as $s,
  bu as zs,
  u as cs,
  i as Us,
  B as ht,
  L as Gs,
  aj as Hs,
  v as qs,
  c as Ys,
  bs as ds,
  I as _t,
  a3 as Js,
  n as Lt,
  a5 as Pt,
  a4 as Ks,
  X as Qs,
  a7 as Xs,
  eq as Zs,
  an as be,
  x as us,
  db as Ae,
  q as Dt,
  dc as er,
  D as Wt,
  dd as tr,
  aE as sr,
  Y as rr,
} from './index-DTTOaJYD.js';
import { N as yt } from './react-number-format.es-DYnlygnL.js';
import { D as Mt } from './index-DFCF9w1P.js';
import { I as nr } from './Input-ce49Shfj.js';
import { u as ze } from './useObservableStoreValue-DRD8Y5Al.js';
import './JupiterService-DZaWMIqf.js';
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
      (e._sentryDebugIds[s] = '80f9c94b-0032-4443-a1c9-8e54b8327d4b'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-80f9c94b-0032-4443-a1c9-8e54b8327d4b'));
  } catch (t) {}
})();
const li =
    'WalletConnect does not support Versioned Transactions which is necessary for kLend Market. You can still try to send transaction but success is not guaranteed.',
  ar = 'Your slippage setting is above '
    .concat(ut, '%. Please proceed with caution, or considering adjusting it to ')
    .concat(Ws, '% (recommended).'),
  ir = 'Your slippage setting is above '
    .concat(ft, '%. Please proceed with caution, or considering adjusting it to ')
    .concat(es, '% (recommended).'),
  or = 'Your slippage setting is above '
    .concat(pt, '%. Please proceed with caution, or considering adjusting it to ')
    .concat(es, '% (recommended).'),
  ci =
    'Your wallet has been identified to break the Terms & Conditions of the Kamino webapp. Please contact us on discord if you think there has been a mistake.',
  lr = 'Kamino Finance is not Available in Your Region',
  di = {
    lending: { deposit: 0.05, withdraw: 0.01, borrow: 0.05, repay: 0.01 },
    liquidity: { deposit: 0.05, withdraw: 0.01 },
    leverage: { deposit: 0.05, withdraw: 0.01, adjust: 0.05 },
    staking: { stake: 0.05, unstake: 0.01 },
    earn: { deposit: 0.01, withdraw: 0.01 },
    swap: { deposit: 0.006, solNeededToTrade: 1e-4, solNeededToTradeNoAta: 0.006 },
    manageVaults: { create: 0.5 },
    manageMarkets: { create: 0.2 },
  },
  cr = '_root_11lsd_1',
  dr = '_title_11lsd_7',
  ur = '_row_11lsd_12',
  fr = '_icon_11lsd_16',
  Ue = { root: cr, title: dr, row: ur, icon: fr },
  { formatToFirstNonNullDecimal: pr } = De,
  hr = ({ title: e, balance: s, minBalance: t }) => {
    const n = 'Minimum '.concat(t, ' SOL Required to transact');
    return a.jsxs('div', {
      className: Ue.root,
      'data-sentry-component': 'NotEnoughSOLTooltip',
      'data-sentry-source-file': 'NotEnoughSOLTooltip.tsx',
      children: [
        a.jsxs('div', {
          className: Ue.title,
          children: [
            a.jsx(ne, {
              name: 'WarningInfo',
              size: 24,
              color: 'orange',
              className: Ue.icon,
              'data-sentry-element': 'Icon',
              'data-sentry-source-file': 'NotEnoughSOLTooltip.tsx',
            }),
            a.jsx(S, {
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'NotEnoughSOLTooltip.tsx',
              children: e || n,
            }),
          ],
        }),
        a.jsxs('div', {
          className: Ue.row,
          children: [
            a.jsx(S, {
              fs: 14,
              lh: 18,
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'NotEnoughSOLTooltip.tsx',
              children: 'Your SOL Balance',
            }),
            a.jsx(S, {
              fs: 14,
              lh: 18,
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'NotEnoughSOLTooltip.tsx',
              children: pr(s || 0),
            }),
          ],
        }),
      ],
    });
  },
  ui = (e, s, t, n, i) => {
    if (n && n && e > 0 && i && s < t)
      return {
        text: 'Minimum SOL Balance',
        variant: 'warning',
        tooltip: a.jsx(hr, { balance: s, minBalance: t }),
        hasIcon: !1,
        isCritical: !0,
      };
  },
  _r = '_popupBody_1nphr_1',
  yr = '_content_1nphr_15',
  gr = '_header_1nphr_29',
  mr = '_highlights_1nphr_34',
  xr = '_highlightItem_1nphr_39',
  vr = '_tokensListWrapper_1nphr_53',
  br = '_tokensHeader_1nphr_57',
  Tr = '_tokensList_1nphr_53',
  kr = '_noTopFade_1nphr_78',
  Sr = '_noBottomFade_1nphr_82',
  jr = '_tokenItem_1nphr_90',
  Ir = '_itemLeft_1nphr_102',
  wr = '_address_1nphr_110',
  Fr = '_copyIcon_1nphr_118',
  Vr = '_copyIconHovered_1nphr_123',
  Nr = '_itemRight_1nphr_139',
  Ar = '_valuesWrapper_1nphr_144',
  Cr = '_tokenNameAddressWrapper_1nphr_149',
  Er = '_tokenAddressWrapper_1nphr_155',
  Lr = '_tokenAddress_1nphr_155',
  Pr = '_tokenAddressCopyIcon_1nphr_167',
  Dr = '_tokenSymbolWrapper_1nphr_173',
  Wr = '_modalOverlay_1nphr_179',
  Z = {
    popupBody: _r,
    content: yr,
    header: gr,
    highlights: mr,
    highlightItem: xr,
    tokensListWrapper: vr,
    tokensHeader: br,
    tokensList: Tr,
    noTopFade: kr,
    noBottomFade: Sr,
    tokenItem: jr,
    itemLeft: Ir,
    address: wr,
    copyIcon: Fr,
    copyIconHovered: Vr,
    itemRight: Nr,
    valuesWrapper: Ar,
    tokenNameAddressWrapper: Cr,
    tokenAddressWrapper: Er,
    tokenAddress: Lr,
    tokenAddressCopyIcon: Pr,
    tokenSymbolWrapper: Dr,
    modalOverlay: Wr,
  },
  Mr = '_overlay_beefi_1',
  Br = '_root_beefi_20',
  Or = '__isFluid_beefi_26',
  Rr = '__isMaxWidth_beefi_35',
  $r = '_disabledScroll_beefi_38',
  zr = '_content_beefi_41',
  Ur = '_closeBtn_beefi_50',
  we = {
    overlay: Mr,
    root: Br,
    _isFluid: Or,
    _isMaxWidth: Rr,
    disabledScroll: $r,
    content: zr,
    closeBtn: Ur,
  },
  at = et(we);
Kt.setAppElement('#root');
const Gr = (b) => {
    var m = b,
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
      } = m,
      I = xe(m, [
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
    const v = N.useCallback(
      (C) => {
        C.stopPropagation(), s == null || s(C);
      },
      [s]
    );
    return a.jsx(
      Kt,
      ae(
        g(
          {
            onRequestClose: t ? v : void 0,
            shouldCloseOnOverlayClick: t,
            overlayClassName: at(we.overlay, y),
            closeTimeoutMS: 100,
            bodyOpenClassName: we.disabledScroll,
            className: at(we.root, { isFluid: i, isMaxWidth: o }, u),
            onAfterOpen: (C) => (C == null ? void 0 : C.contentEl.focus()),
          },
          I
        ),
        {
          'data-sentry-element': 'BaseModal',
          'data-sentry-component': 'Modal',
          'data-sentry-source-file': 'Modal.tsx',
          children: a.jsxs(Ms, {
            className: at(we.content, d),
            'data-sentry-element': 'Card',
            'data-sentry-source-file': 'Modal.tsx',
            children: [
              n &&
                a.jsx('div', {
                  className: we.closeBtn,
                  children: a.jsx(Bs, {
                    onClick: v,
                    size: 'small',
                    variant: 'secondary',
                    shape: 'circle',
                    icon: a.jsx(ne, { name: 'Close', color: 'grey' }),
                  }),
                }),
              e,
            ],
          }),
        }
      )
    );
  },
  { formatTokenAllDecimals: Hr, formatUsd: qr } = De,
  Yr = ({ onSelect: e, token: s, isSwap: t }) => {
    const n = ''.concat(s.address.slice(0, 4), '...').concat(s.address.slice(-4)),
      [i, o] = N.useState(!1),
      d = N.useRef(null);
    N.useEffect(
      () => () => {
        d.current && clearTimeout(d.current);
      },
      []
    );
    const u = (I) => {
        I.preventDefault(),
          I.stopPropagation(),
          navigator.clipboard.writeText(s.address),
          o(!0),
          d.current && clearTimeout(d.current),
          (d.current = setTimeout(() => {
            o(!1), (d.current = null);
          }, 1e3));
      },
      y = t ? s.verified : !0;
    return a.jsxs(
      'div',
      {
        className: Z.tokenItem,
        onClick: () => e(t ? s : s.address),
        'data-sentry-component': 'TokenItem',
        'data-sentry-source-file': 'TokenItem.tsx',
        children: [
          a.jsxs('div', {
            className: Z.itemLeft,
            children: [
              t
                ? a.jsx(ts, { tokenInfo: s, size: 30 })
                : a.jsx(ke, { tokenMint: s.address, size: 30 }),
              a.jsxs('div', {
                children: [
                  a.jsxs('div', {
                    className: Z.tokenSymbolWrapper,
                    children: [
                      a.jsx(S, {
                        fs: 16,
                        lh: 22,
                        'data-sentry-element': 'Text',
                        'data-sentry-source-file': 'TokenItem.tsx',
                        children: s.symbol,
                      }),
                      a.jsx(ne, {
                        name: y ? 'CheckVerified' : 'HelpOctagon',
                        color: y ? 'green' : 'grey',
                        size: 14,
                        'data-sentry-element': 'Icon',
                        'data-sentry-source-file': 'TokenItem.tsx',
                      }),
                    ],
                  }),
                  a.jsxs('div', {
                    className: Z.tokenNameAddressWrapper,
                    children: [
                      a.jsx(S, {
                        fs: 10,
                        lh: 10,
                        color: 'grey-deep',
                        'data-sentry-element': 'Text',
                        'data-sentry-source-file': 'TokenItem.tsx',
                        children: s.name,
                      }),
                      a.jsx(S, {
                        fs: 10,
                        lh: 10,
                        color: 'grey-deep',
                        'data-sentry-element': 'Text',
                        'data-sentry-source-file': 'TokenItem.tsx',
                        children: '・',
                      }),
                      a.jsxs('div', {
                        onClick: u,
                        className: Z.tokenAddressWrapper,
                        children: [
                          a.jsx(S, {
                            fs: 10,
                            lh: 10,
                            color: 'grey-deep',
                            className: Z.tokenAddress,
                            'data-sentry-element': 'Text',
                            'data-sentry-source-file': 'TokenItem.tsx',
                            children: i ? 'Address Copied' : n,
                          }),
                          a.jsx(ne, {
                            name: 'Copy',
                            size: 10,
                            className: Z.tokenAddressCopyIcon,
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
            className: Z.itemRight,
            children:
              !!s.amount.toNumber() &&
              a.jsxs('div', {
                className: Z.valuesWrapper,
                children: [
                  a.jsx(S, {
                    fs: 14,
                    lh: 18,
                    color: 'grey',
                    textAlign: 'right',
                    children: Hr(s.amount.toNumber(), s.decimals),
                  }),
                  !s.value.eq(Os) &&
                    a.jsx(S, {
                      fs: 12,
                      lh: 16,
                      color: 'grey',
                      textAlign: 'right',
                      children: qr(s.value.toNumber()),
                    }),
                ],
              }),
          }),
        ],
      },
      s.address
    );
  },
  Jr = [ss, rs, ns, as, is, os],
  Kr = '_root_w63hs_1',
  Qr = '_textWrapper_w63hs_12',
  Bt = { root: Kr, textWrapper: Qr },
  Xr = () =>
    a.jsxs('div', {
      className: Bt.root,
      'data-sentry-component': 'TokensPopupEmptyState',
      'data-sentry-source-file': 'TokensPopupEmptyState.tsx',
      children: [
        a.jsx(ne, {
          name: 'FileQuestion',
          size: 24,
          color: 'white',
          'data-sentry-element': 'Icon',
          'data-sentry-source-file': 'TokensPopupEmptyState.tsx',
        }),
        a.jsxs('div', {
          className: Bt.textWrapper,
          children: [
            a.jsx(S, {
              fs: 14,
              lh: 20,
              weight: 'medium',
              color: 'white',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'TokensPopupEmptyState.tsx',
              children: 'No results',
            }),
            a.jsx(S, {
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
  Zr = ({
    tokens: e,
    isVisible: s,
    onSelect: t,
    onVisibleChange: n,
    onSearchChange: i,
    isSwap: o,
  }) => {
    const [d, u] = N.useState(e),
      [y, I] = N.useState(''),
      [b, m] = N.useState(!0),
      [v, C] = N.useState(!1),
      R = N.useRef(null),
      { getToken: $ } = ls(),
      z = () => {
        n(!1);
      },
      H = N.useMemo(() => i && dt.debounce(i, 300), [i]),
      T = N.useCallback(
        (A) => {
          I(A), H && H(A);
        },
        [H]
      );
    N.useEffect(() => {
      T('');
    }, [s, T]);
    const V = (A) => {
        const D = A.currentTarget,
          M = D.scrollTop === 0,
          te = Math.abs(D.scrollHeight - D.scrollTop - D.clientHeight) < 1;
        m(M), C(te);
      },
      L = N.useMemo(
        () =>
          dt.debounce((A, D) => {
            u(
              A
                ? D.filter(
                    (M) => M.symbol.toLowerCase().includes(A.toLowerCase()) || M.address === A
                  )
                : D
            );
          }, 500),
        []
      );
    N.useEffect(() => {
      i || L(y, e);
    }, [L, y, e, i]);
    const E = (A) => {
        T(A.target.value);
      },
      P = N.useMemo(() => {
        if (o && i) {
          if (y) {
            const D = e.find((M) => M.address === y);
            if (D) return [D];
          }
          return e.slice(0, 50);
        }
        return d;
      }, [e, d, i, o, y]),
      ee = [];
    for (const A of Jr) {
      const D = $(A),
        M = e.find((k) => k.address === A),
        te = o ? M : D;
      te && ee.push({ tokenMint: A, token: te });
    }
    return a.jsx(Gr, {
      isOpen: s,
      onClose: z,
      isFluid: !0,
      shouldCloseOnOverlayClick: !0,
      contentOpenClassName: Z.popupBody,
      overlayClassName: Z.modalOverlay,
      'data-sentry-element': 'Modal',
      'data-sentry-component': 'TokensPopup',
      'data-sentry-source-file': 'TokensPopup.tsx',
      children: a.jsxs('div', {
        className: Z.content,
        children: [
          a.jsx(nr, {
            autoFocus: !0,
            defaultValue: y,
            placeholder: 'Search token',
            size: 'large',
            onChange: E,
            prefix: a.jsx(ne, { name: 'Search', size: 16 }),
            'data-sentry-element': 'Input',
            'data-sentry-source-file': 'TokensPopup.tsx',
          }),
          ee.length > 0 &&
            a.jsx('div', {
              className: Z.highlights,
              children: ee.map(({ tokenMint: A, token: D }) =>
                a.jsxs(
                  'div',
                  {
                    className: Z.highlightItem,
                    onClick: () => t(o && D ? D : A),
                    children: [
                      a.jsx(ke, { tokenMint: A, size: 16 }),
                      a.jsx(S, { fs: 14, lh: 20, children: D.symbol }),
                    ],
                  },
                  A
                )
              ),
            }),
          P.length > 0
            ? a.jsxs('div', {
                className: ''
                  .concat(Z.tokensList, ' ')
                  .concat(b ? Z.noTopFade : '', ' ')
                  .concat(v ? Z.noBottomFade : ''),
                ref: R,
                onScroll: V,
                children: [
                  a.jsxs('div', {
                    className: Z.tokensHeader,
                    children: [
                      a.jsx(S, { fs: 14, lh: 18, color: 'grey', children: 'All Tokens' }),
                      a.jsx(S, { fs: 14, lh: 18, color: 'grey', children: 'Balance' }),
                    ],
                  }),
                  P.map((A) => a.jsx(Yr, { onSelect: t, token: A, isSwap: o }, A.address)),
                ],
              })
            : a.jsx(Xr, {}),
        ],
      }),
    });
  },
  en = '_root_vep39_1',
  tn = '_connectBtn_vep39_7',
  sn = '_warningsWrapper_vep39_10',
  it = { root: en, connectBtn: tn, warningsWrapper: sn },
  rn = '_root_khafo_1',
  nn = '_item_khafo_4',
  an = '_title_khafo_9',
  on = '_row_khafo_14',
  Ge = { root: rn, item: nn, title: an, row: on },
  fs = ({ title: e, description: s }) =>
    a.jsx('div', {
      className: Ge.root,
      'data-sentry-component': 'WarningTooltip',
      'data-sentry-source-file': 'WarningTooltip.tsx',
      children: a.jsxs('div', {
        className: Ge.item,
        children: [
          a.jsxs('div', {
            className: Ge.title,
            children: [
              a.jsx(ne, {
                name: 'WarningInfo',
                size: 18,
                color: 'orange',
                'data-sentry-element': 'Icon',
                'data-sentry-source-file': 'WarningTooltip.tsx',
              }),
              a.jsx('div', { children: e }),
            ],
          }),
          a.jsx('div', { className: Ge.row, children: a.jsx('div', { children: s }) }),
        ],
      }),
    }),
  ln = '_tooltipOverlay_go1cg_1',
  cn = '_alignItemsCenter_go1cg_7',
  dn = '_icon_go1cg_13',
  un = '__isFluid_go1cg_16',
  Ye = { tooltipOverlay: ln, alignItemsCenter: cn, icon: dn, _isFluid: un },
  fn = et(Ye),
  pn = (e) => {
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
  Ot = ({
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
    a.jsx(mt, {
      clickable: d,
      isOpen: y,
      render: () =>
        a.jsxs('div', {
          className: fn(Ye.tooltipOverlay, { isFluid: u }),
          children: [
            a.jsxs('div', {
              className: Ye.alignItemsCenter,
              children: [
                o && !i
                  ? a.jsxs('div', {
                      className: Ye.icon,
                      children: [
                        e === 'primary' &&
                          o &&
                          !i &&
                          a.jsx(ne, { name: 'Check', color: 'green', size: 18 }),
                        (e === 'warning' || e === 'danger') &&
                          o &&
                          !i &&
                          a.jsx(ne, { name: 'WarningInfo', size: 18, color: 'orange' }),
                        i,
                      ],
                    })
                  : null,
                typeof t == 'string' ? a.jsx(S, { lh: 18, children: t }) : t,
              ],
            }),
            n && typeof n == 'string' ? a.jsx(S, { fs: 14, lh: 18, children: n }) : n,
          ],
        }),
      'data-sentry-element': 'Tooltip',
      'data-sentry-component': 'WarningTag',
      'data-sentry-source-file': 'WarningTag.tsx',
      children: a.jsx(Rs, {
        label: s,
        variant: pn(e),
        underlinedLabel: !0,
        'data-sentry-element': 'Tag',
        'data-sentry-source-file': 'WarningTag.tsx',
      }),
    }),
  fi = N.forwardRef(function (m, b) {
    var v = m,
      {
        disabled: s,
        isRestrictionsIgnored: t,
        tooltipMessages: n,
        children: i,
        disableIfNotConnected: o = !1,
        useConnectButtonSecondary: d = !1,
        hideWarnings: u = !1,
        transitionConfig: y,
      } = v,
      I = xe(v, [
        'disabled',
        'isRestrictionsIgnored',
        'tooltipMessages',
        'children',
        'disableIfNotConnected',
        'useConnectButtonSecondary',
        'hideWarnings',
        'transitionConfig',
      ]);
    const { isRestricted: C, isEnabled: R, isGeoblockChecked: $ } = $s(),
      { hasWalletRestriction: z } = zs(),
      { walletPublicKey: H } = cs(),
      T = $ && C && R && !t,
      V = !Hs(z) && z && !t;
    return H
      ? a.jsxs('div', {
          className: it.root,
          children: [
            !u &&
              (T || V) &&
              a.jsxs('div', {
                className: it.warningsWrapper,
                children: [
                  T &&
                    a.jsx(Ot, {
                      tooltip: a.jsx(_n, {}),
                      text: 'Region Unavailable',
                      variant: 'warning',
                      hasIcon: !1,
                      isCritical: !0,
                    }),
                  V &&
                    a.jsx(Ot, {
                      tooltip: a.jsx(hn, {}),
                      text: 'Restricted Wallet',
                      variant: 'warning',
                      isCritical: !0,
                      hasIcon: !1,
                      isClickableTooltip: !0,
                    }),
                ],
              }),
            a.jsx(mt, {
              isFluid: !0,
              hidden: !(n != null && n.length),
              render: () =>
                a.jsx(a.Fragment, {
                  children:
                    n == null
                      ? void 0
                      : n.map((L, E) => a.jsx(S, { color: 'grey', children: L }, E)),
                }),
              children: a.jsx(
                ht,
                ae(g({ ref: b, disabled: s || T || V, transitionConfig: y }, I), { children: i })
              ),
            }),
          ],
        })
      : a.jsx('div', {
          className: it.connectBtn,
          children: a.jsx(Us, {
            variant: d ? 'secondary' : 'primary',
            isFullWidth: !0,
            disabled: o,
          }),
        });
  }),
  hn = () =>
    a.jsx(fs, {
      title: a.jsxs(S, {
        fs: 14,
        lh: 20,
        children: [
          'Wallet Has Broken',
          ' ',
          a.jsx(Gs, {
            href: 'https://app.kamino.finance/terms',
            target: '_blank',
            children: 'Terms of Service',
          }),
        ],
      }),
      description: a.jsx(S, {
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
  _n = () =>
    a.jsx(fs, {
      title: a.jsx(S, { fs: 14, lh: 20, children: 'Region Unavailable' }),
      description: a.jsx(S, { fs: 14, lh: 18, color: 'grey', weight: 'regular', children: lr }),
      'data-sentry-element': 'WarningTooltip',
      'data-sentry-component': 'RegionRestrictionWarning',
      'data-sentry-source-file': 'FormButton.tsx',
    }),
  yn = '_root_1wb5z_1',
  gn = '__isSwap_1wb5z_9',
  mn = '__disabled_1wb5z_16',
  xn = '_input_1wb5z_22',
  vn = '_icon_1wb5z_23',
  bn = '_inputContainer_1wb5z_84',
  Tn = '_top_1wb5z_89',
  kn = '_bottom_1wb5z_94',
  Sn = '__filled_1wb5z_103',
  jn = '_buttons_1wb5z_109',
  In = '_btn_1wb5z_114',
  wn = '__readonly_1wb5z_146',
  Fn = '_dropDownList_1wb5z_152',
  Vn = '_tokenButton_1wb5z_156',
  Nn = '_tokenTextAndIcon_1wb5z_159',
  re = {
    root: yn,
    _isSwap: gn,
    '_variant-primary': '__variant-primary_1wb5z_13',
    _disabled: mn,
    input: xn,
    icon: vn,
    '_variant-secondary': '__variant-secondary_1wb5z_26',
    '_variant-secondaryTransparent': '__variant-secondaryTransparent_1wb5z_39',
    '_variant-primarySwap': '__variant-primarySwap_1wb5z_57',
    '_variant-secondarySwap': '__variant-secondarySwap_1wb5z_71',
    inputContainer: bn,
    top: Tn,
    bottom: kn,
    _filled: Sn,
    buttons: jn,
    btn: In,
    _readonly: wn,
    dropDownList: Fn,
    tokenButton: Vn,
    tokenTextAndIcon: Nn,
  },
  An = '_content_1urzv_1',
  Cn = '_header_1urzv_10',
  En = '_highlights_1urzv_15',
  Ln = '_highlightItem_1urzv_20',
  Pn = '_tokensList_1urzv_33',
  Dn = '_noTopFade_1urzv_44',
  Wn = '_noBottomFade_1urzv_48',
  Mn = '_tokensHeader_1urzv_56',
  Bn = '_tokenItem_1urzv_64',
  On = '_itemLeft_1urzv_77',
  Rn = '_address_1urzv_85',
  $n = '_copyIcon_1urzv_93',
  zn = '_copyIconHovered_1urzv_98',
  Un = '_itemRight_1urzv_112',
  Gn = '_valuesWrapper_1urzv_117',
  ie = {
    content: An,
    header: Cn,
    highlights: En,
    highlightItem: Ln,
    tokensList: Pn,
    noTopFade: Dn,
    noBottomFade: Wn,
    tokensHeader: Mn,
    tokenItem: Bn,
    itemLeft: On,
    address: Rn,
    copyIcon: $n,
    copyIconHovered: zn,
    itemRight: Un,
    valuesWrapper: Gn,
  },
  { formatTokenAllDecimals: Hn, formatUsd: qn } = De,
  Yn = ({ onSelect: e, token: s, isActive: t }) => {
    const n = async (i) => {
      i.preventDefault(),
        i.stopPropagation(),
        s.address &&
          (await navigator.clipboard.writeText(s.address),
          Ys({ type: 'success', message: 'Copied!' }));
    };
    return a.jsxs(
      'div',
      {
        className: ie.tokenItem,
        onClick: () => e(s.address),
        'data-sentry-component': 'TokenItem',
        'data-sentry-source-file': 'TokenItem.tsx',
        children: [
          a.jsxs('div', {
            className: ie.itemLeft,
            children: [
              a.jsx(ke, {
                tokenMint: s.address,
                size: 24,
                'data-sentry-element': 'TokenIcon',
                'data-sentry-source-file': 'TokenItem.tsx',
              }),
              a.jsx(S, {
                fs: 14,
                lh: 18,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'TokenItem.tsx',
                children: s.symbol,
              }),
              a.jsxs('div', {
                className: ie.address,
                onClick: n,
                children: [
                  a.jsx(S, {
                    fs: 10,
                    lh: 10,
                    'data-sentry-element': 'Text',
                    'data-sentry-source-file': 'TokenItem.tsx',
                    children: qs(s.address, 4),
                  }),
                  a.jsx('div', {
                    className: ie.copyIcon,
                    children: a.jsx(ne, {
                      name: 'Copy',
                      size: 10,
                      color: 'grey',
                      'data-sentry-element': 'Icon',
                      'data-sentry-source-file': 'TokenItem.tsx',
                    }),
                  }),
                  a.jsx('div', {
                    className: ie.copyIconHovered,
                    children: a.jsx(ne, {
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
            className: ie.itemRight,
            children: [
              !!s.amount.toNumber() &&
                a.jsxs('div', {
                  className: ie.valuesWrapper,
                  children: [
                    a.jsx(S, {
                      fs: 14,
                      lh: 18,
                      textAlign: 'right',
                      children: Hn(s.amount.toNumber(), s.decimals),
                    }),
                    a.jsx(S, {
                      fs: 10,
                      lh: 10,
                      color: 'grey',
                      textAlign: 'right',
                      children: qn(s.value.toNumber()),
                    }),
                  ],
                }),
              t && a.jsx(ne, { name: 'Check', size: 16, color: 'blue' }),
            ],
          }),
        ],
      },
      s.address
    );
  },
  Jn = [ss, rs, ns, as, is, os],
  Kn = ({ selectedToken: e, tokens: s, isVisible: t, onSelect: n, onVisibleChange: i }) => {
    const [o, d] = N.useState(!0),
      [u, y] = N.useState(!1),
      [I, b] = N.useState(s),
      [m, v] = N.useState(''),
      C = N.useRef(null),
      { getToken: R } = ls(),
      $ = () => {
        i(!1);
      },
      z = N.useMemo(
        () =>
          dt.debounce((V, L) => {
            b(V ? L.filter((E) => E.symbol.toLowerCase().includes(V.toLowerCase())) : L);
          }, 500),
        []
      );
    N.useEffect(() => {
      z(m, s);
    }, [z, m, s]);
    const H = (V) => {
        v(V.target.value);
      },
      T = (V) => {
        const L = V.currentTarget,
          E = L.scrollTop === 0,
          P = Math.abs(L.scrollHeight - L.scrollTop - L.clientHeight) < 1;
        d(E), y(P);
      };
    return a.jsx(ds, {
      isOpen: t,
      onClose: $,
      isFluid: !0,
      isOverSidepanel: !0,
      'data-sentry-element': 'Modal',
      'data-sentry-component': 'TokensPopup',
      'data-sentry-source-file': 'TokensPopup.tsx',
      children: a.jsxs('div', {
        className: ie.content,
        children: [
          a.jsxs('div', {
            className: ie.header,
            children: [
              a.jsx(S, {
                fs: 18,
                lh: 22,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'TokensPopup.tsx',
                children: 'Select Tokens',
              }),
              a.jsx(_t, {
                defaultValue: m,
                placeholder: 'Search...',
                size: 'small',
                onChange: H,
                prefix: a.jsx(ne, { name: 'Search', size: 16 }),
                autoFocus: !0,
                'data-sentry-element': 'Input',
                'data-sentry-source-file': 'TokensPopup.tsx',
              }),
            ],
          }),
          a.jsx(Mt, {
            'data-sentry-element': 'Divider',
            'data-sentry-source-file': 'TokensPopup.tsx',
          }),
          a.jsx('div', {
            className: ie.highlights,
            children: Jn.map((V) => {
              const L = R(V);
              return a.jsxs('div', {
                className: ie.highlightItem,
                onClick: () => n(V),
                children: [
                  a.jsx(ke, { tokenMint: V, size: 16 }),
                  ' ',
                  a.jsx(S, { fs: 14, lh: 20, children: L.symbol }),
                ],
              });
            }),
          }),
          a.jsx(Mt, {
            'data-sentry-element': 'Divider',
            'data-sentry-source-file': 'TokensPopup.tsx',
          }),
          a.jsxs('div', {
            className: ie.tokensHeader,
            children: [
              a.jsx(S, {
                fs: 12,
                lh: 16,
                weight: 'bold',
                color: 'grey-deep',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'TokensPopup.tsx',
                children: 'Asset',
              }),
              a.jsx(S, {
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
              .concat(ie.tokensList, ' ')
              .concat(o ? ie.noTopFade : '', ' ')
              .concat(u ? ie.noBottomFade : ''),
            ref: C,
            onScroll: T,
            children: I.map((V) =>
              a.jsx(Yn, { onSelect: n, token: V, isActive: e === V.address }, V.address)
            ),
          }),
        ],
      }),
    });
  },
  He = et(re),
  { formatUsd: Qn } = De,
  Xn = ({ tokensInfos: e, onSelect: s }) =>
    a.jsx(a.Fragment, {
      children: e.map((t) => {
        const { address: n, symbol: i } = t;
        return a.jsx(Xs, {
          title: i,
          startIcon: a.jsx(ke, { tokenMint: n, size: 24 }),
          onClick: () => s(n),
        });
      }),
    }),
  pi = N.forwardRef((e, s) => {
    var je, Ve;
    const Oe = e,
      {
        className: t,
        value: n,
        disabled: i,
        label: o,
        topStat: d,
        topComp: u,
        bottomLeftStat: y,
        bottomRightStat: I,
        variant: b = 'primary',
        isTokenPopup: m,
        tokensInfos: v,
        defaultSelectedTokenMint: C,
        onSelectedTokenChange: R = Lt,
        onSelectedSwapTokenChange: $ = Lt,
        onInputChange: z,
        onHalf: H,
        onMax: T,
        useNewTokensPopup: V = !1,
        isLoading: L = !1,
        onTokensSearch: E,
        isSwap: P = !1,
        selectedTokenInfo: ee,
      } = Oe,
      A = xe(Oe, [
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
      ]),
      [D, M] = N.useState(!1),
      te = !!n,
      {
        selectedOption: k,
        onSelectedOptionChange: w,
        isVisible: U,
        onVisibleChange: F,
      } = Js({
        initialSelectedOption:
          C || ((je = v == null ? void 0 : v[0]) == null ? void 0 : je.address),
      }),
      W = v.filter((G) => G.address !== k),
      Q = P && ee ? ee : (Ve = v.filter((G) => G.address === k)) == null ? void 0 : Ve[0],
      { symbol: pe, decimals: de, address: ge } = Q || {},
      Se = (G) => {
        P && typeof G != 'string' ? (w(G.address), $(G)) : (w(G), R(G)), F(!1), M(!1);
      },
      Me = (G, Re) => {
        Re.source === 'event' && !['.', ','].includes(G.value.slice(-1)) && z(G.floatValue || 0);
      },
      st = () => {
        M(!0);
      };
    N.useEffect(() => {
      var G;
      w(C || ((G = v == null ? void 0 : v[0]) == null ? void 0 : G.address));
    }, [C]);
    const Be = () =>
      Q
        ? m
          ? a.jsx(Pt, {
              variant: 'ghost',
              onClick: st,
              startIcon: P
                ? a.jsx(ts, { tokenInfo: Q, size: 24 })
                : a.jsx(ke, { tokenMint: ge, size: 24 }),
              text: pe,
              endIcon: a.jsx(ne, { name: 'ChevronDown', className: re.chevron, size: P ? 18 : 14 }),
              textProps: { fs: P ? 18 : 16, lh: 22, className: re.title },
              isActive: U,
              btnClassName: P ? re.tokenButton : void 0,
              iconClassName: P ? re.tokenTextAndIcon : void 0,
            })
          : W.length
            ? a.jsx(Ks, {
                overlay: a.jsx(Xn, { tokensInfos: W, onSelect: Se }),
                overlayClassName: re.dropDownList,
                isVisible: U,
                onVisibleChange: F,
                children: a.jsx(Pt, {
                  variant: 'ghost',
                  startIcon: a.jsx(ke, { tokenMint: ge, size: 24 }),
                  text: pe,
                  endIcon: a.jsx(ne, {
                    name: 'ChevronDown',
                    className: re.chevron,
                    size: P ? 18 : 14,
                  }),
                  textProps: { fs: P ? 18 : 16, lh: 22, className: re.title },
                  isActive: U,
                  btnClassName: P ? re.tokenButton : void 0,
                  iconClassName: P ? re.tokenTextAndIcon : void 0,
                }),
              })
            : a.jsx(Qs, {
                tokensProps: { tokensAddresses: [ge], size: 24 },
                textProps: { fs: P ? 18 : 16, lh: 22 },
                text: pe,
                align: 'left',
                gap: 6,
                'data-sentry-element': 'TokensWithText',
                'data-sentry-component': 'triggerElement',
                'data-sentry-source-file': 'LargeInput.tsx',
              })
        : null;
    return a.jsxs('label', {
      htmlFor: 'input',
      className: He('root', { disabled: i, filled: te, variant: b, isSwap: P }),
      children: [
        a.jsxs('div', {
          className: re.top,
          children: [
            a.jsx(S, {
              fs: 12,
              lh: 12,
              className: He('label'),
              color: P ? 'grey-deep' : 'grey-light',
              children: o,
            }),
            d &&
              a.jsx(S, {
                fs: 12,
                lh: 12,
                color: 'grey-deep',
                className: re.value,
                children: '~'.concat(Qn(d)),
              }),
            u && u,
          ],
        }),
        a.jsxs('div', {
          className: He('inputContainer', t, { disabled: i, filled: te }),
          children: [
            Be(),
            a.jsx(
              yt,
              g(
                {
                  getInputRef: s,
                  placeholder: L ? ' ' : '0',
                  className: He('input', {
                    disabled: i,
                    filled: te,
                    readonly: e.readOnly,
                    isSwap: P,
                  }),
                  disabled: i,
                  value: n || '',
                  decimalScale: de,
                  id: 'input',
                  allowNegative: !1,
                  autoComplete: 'off',
                  onValueChange: Me,
                  allowedDecimalSeparators: ['.', ','],
                  decimalSeparator: '.',
                  thousandSeparator: ',',
                  lang: 'en-US',
                  inputMode: 'decimal',
                  pattern: '[0-9]*[.,]?[0-9]*',
                },
                A
              )
            ),
          ],
        }),
        !y && !I && !H && !T
          ? null
          : a.jsxs('div', {
              className: re.bottom,
              children: [
                y && a.jsx(S, { fs: 12, lh: 12, color: 'grey-deep', children: y }),
                I ||
                  a.jsx(a.Fragment, {
                    children:
                      H &&
                      T &&
                      a.jsxs('div', {
                        className: re.buttons,
                        children: [
                          a.jsx('div', {
                            className: re.btn,
                            onClick: (G) => {
                              G.preventDefault(), G.stopPropagation(), H();
                            },
                            children: 'half',
                          }),
                          a.jsx('div', {
                            className: re.btn,
                            onClick: (G) => {
                              G.preventDefault(), G.stopPropagation(), T();
                            },
                            children: 'max',
                          }),
                        ],
                      }),
                  }),
              ],
            }),
        m &&
          (V
            ? a.jsx(Zr, {
                isVisible: D,
                tokens: v,
                onSelect: Se,
                onVisibleChange: () => M(!1),
                onSearchChange: E,
                isSwap: P,
              })
            : a.jsx(Kn, {
                selectedToken: k,
                isVisible: D,
                tokens: v,
                onSelect: Se,
                onVisibleChange: () => M(!1),
              })),
      ],
    });
  }),
  Zn = '_metalGreyGradient_1jynp_9',
  ea = '_goldGradient_1jynp_15',
  ta = '_silverGradient_1jynp_21',
  sa = '_bronzeGradient_1jynp_27',
  ra = '_pointsSilverTextGradient_1jynp_33',
  na = '_root_1jynp_39',
  aa = '_settings_1jynp_43',
  ia = '_clickable_1jynp_48',
  oa = '_feeTypeText_1jynp_51',
  la = '_title_1jynp_54',
  ca = '_priorityFeeText_1jynp_57',
  Fe = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1jynp_1',
    metalGreyGradient: Zn,
    goldGradient: ea,
    silverGradient: ta,
    bronzeGradient: sa,
    pointsSilverTextGradient: ra,
    root: na,
    settings: aa,
    clickable: ia,
    feeTypeText: oa,
    '_variant-minimal': '__variant-minimal_1jynp_54',
    title: la,
    priorityFeeText: ca,
  },
  xt = (e) => e.includes('multiply'),
  ps = (e) => xt(e) && e.includes(Zs),
  hs = (e) => e.includes('/v3/leverage'),
  da = () => {
    const e = Qt(),
      s = ze(be, (v) => v.slippage),
      t = ze(be, (v) => v.slippageMultiply),
      n = ze(be, (v) => v.slippageJlpMultiply),
      i = ze(be, (v) => v.slippageLeverageV3),
      o = ps(e.pathname),
      d = xt(e.pathname),
      u = hs(e.pathname),
      y = N.useCallback(() => (o ? n : d ? t : u ? i : s), [o, d, s, n, t, i, u]),
      I = N.useMemo(() => (o ? ft : d ? ut : u ? pt : 10), [o, d, u]),
      b = N.useCallback(() => {
        const v = y();
        return o ? v.gt(ft) : d ? v.gt(ut) : u ? v.gt(pt) : !1;
      }, [y, o, d, u]),
      m = N.useCallback(() => {
        const v = b();
        if (v && o) return ir;
        if (v && d) return ar;
        if (v && u) return or;
      }, [o, d, u, b]);
    return {
      getSlippage: y,
      isSlippageTooHigh: b,
      getSlippageWarningMessage: m,
      optimalSlippage: I,
    };
  };
var We = (e) => e.type === 'checkbox',
  Te = (e) => e instanceof Date,
  oe = (e) => e == null;
const _s = (e) => typeof e == 'object';
var Y = (e) => !oe(e) && !Array.isArray(e) && _s(e) && !Te(e),
  ys = (e) => (Y(e) && e.target ? (We(e.target) ? e.target.checked : e.target.value) : e),
  ua = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  gs = (e, s) => e.has(ua(s)),
  fa = (e) => {
    const s = e.constructor && e.constructor.prototype;
    return Y(s) && s.hasOwnProperty('isPrototypeOf');
  },
  vt = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function le(e) {
  let s;
  const t = Array.isArray(e),
    n = typeof FileList < 'u' ? e instanceof FileList : !1;
  if (e instanceof Date) s = new Date(e);
  else if (e instanceof Set) s = new Set(e);
  else if (!(vt && (e instanceof Blob || n)) && (t || Y(e)))
    if (((s = t ? [] : {}), !t && !fa(e))) s = e;
    else for (const i in e) e.hasOwnProperty(i) && (s[i] = le(e[i]));
  else return e;
  return s;
}
var tt = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  q = (e) => e === void 0,
  p = (e, s, t) => {
    if (!s || !Y(e)) return t;
    const n = tt(s.split(/[,[\].]+?/)).reduce((i, o) => (oe(i) ? i : i[o]), e);
    return q(n) || n === e ? (q(e[s]) ? t : e[s]) : n;
  },
  fe = (e) => typeof e == 'boolean',
  bt = (e) => /^\w*$/.test(e),
  ms = (e) => tt(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  O = (e, s, t) => {
    let n = -1;
    const i = bt(s) ? [s] : ms(s),
      o = i.length,
      d = o - 1;
    for (; ++n < o; ) {
      const u = i[n];
      let y = t;
      if (n !== d) {
        const I = e[u];
        y = Y(I) || Array.isArray(I) ? I : isNaN(+i[n + 1]) ? {} : [];
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
  me = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  pa = B.createContext(null),
  Tt = () => B.useContext(pa);
var xs = (e, s, t, n = !0) => {
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
  ce = (e) => Y(e) && !Object.keys(e).length,
  vs = (e, s, t, n) => {
    t(e);
    const d = e,
      { name: i } = d,
      o = xe(d, ['name']);
    return (
      ce(o) ||
      Object.keys(o).length >= Object.keys(s).length ||
      Object.keys(o).find((u) => s[u] === (!n || he.all))
    );
  },
  Le = (e) => (Array.isArray(e) ? e : [e]),
  bs = (e, s, t) =>
    !e ||
    !s ||
    e === s ||
    Le(e).some((n) => n && (t ? n === s : n.startsWith(s) || s.startsWith(n)));
function kt(e) {
  const s = B.useRef(e);
  (s.current = e),
    B.useEffect(() => {
      const t =
        !e.disabled && s.current.subject && s.current.subject.subscribe({ next: s.current.next });
      return () => {
        t && t.unsubscribe();
      };
    }, [e.disabled]);
}
function ha(e) {
  const s = Tt(),
    { control: t = s.control, disabled: n, name: i, exact: o } = e,
    [d, u] = B.useState(t._formState),
    y = B.useRef(!0),
    I = B.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    b = B.useRef(i);
  return (
    (b.current = i),
    kt({
      disabled: n,
      next: (m) =>
        y.current &&
        bs(b.current, m.name, o) &&
        vs(m, I.current, t._updateFormState) &&
        u(g(g({}, t._formState), m)),
      subject: t._subjects.state,
    }),
    B.useEffect(
      () => (
        (y.current = !0),
        I.current.isValid && t._updateValid(!0),
        () => {
          y.current = !1;
        }
      ),
      [t]
    ),
    B.useMemo(() => xs(d, t, I.current, !1), [d, t])
  );
}
var ye = (e) => typeof e == 'string',
  Ts = (e, s, t, n, i) =>
    ye(e)
      ? (n && s.watch.add(e), p(t, e, i))
      : Array.isArray(e)
        ? e.map((o) => (n && s.watch.add(o), p(t, o)))
        : (n && (s.watchAll = !0), t);
function _a(e) {
  const s = Tt(),
    { control: t = s.control, name: n, defaultValue: i, disabled: o, exact: d } = e,
    u = B.useRef(n);
  (u.current = n),
    kt({
      disabled: o,
      subject: t._subjects.values,
      next: (b) => {
        bs(u.current, b.name, d) &&
          I(le(Ts(u.current, t._names, b.values || t._formValues, !1, i)));
      },
    });
  const [y, I] = B.useState(t._getWatch(n, i));
  return B.useEffect(() => t._removeUnmounted()), y;
}
function ya(e) {
  const s = Tt(),
    { name: t, disabled: n, control: i = s.control, shouldUnregister: o } = e,
    d = gs(i._names.array, t),
    u = _a({
      control: i,
      name: t,
      defaultValue: p(i._formValues, t, p(i._defaultValues, t, e.defaultValue)),
      exact: !0,
    }),
    y = ha({ control: i, name: t, exact: !0 }),
    I = B.useRef(
      i.register(
        t,
        g(ae(g({}, e.rules), { value: u }), fe(e.disabled) ? { disabled: e.disabled } : {})
      )
    ),
    b = B.useMemo(
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
    m = B.useMemo(
      () =>
        ae(g({ name: t, value: u }, fe(n) || y.disabled ? { disabled: y.disabled || n } : {}), {
          onChange: (v) =>
            I.current.onChange({ target: { value: ys(v), name: t }, type: Ke.CHANGE }),
          onBlur: () =>
            I.current.onBlur({ target: { value: p(i._formValues, t), name: t }, type: Ke.BLUR }),
          ref: (v) => {
            const C = p(i._fields, t);
            C &&
              v &&
              (C._f.ref = {
                focus: () => v.focus(),
                select: () => v.select(),
                setCustomValidity: (R) => v.setCustomValidity(R),
                reportValidity: () => v.reportValidity(),
              });
          },
        }),
      [t, i._formValues, n, y.disabled, u, i._fields]
    );
  return (
    B.useEffect(() => {
      const v = i._options.shouldUnregister || o,
        C = (R, $) => {
          const z = p(i._fields, R);
          z && z._f && (z._f.mount = $);
        };
      if ((C(t, !0), v)) {
        const R = le(p(i._options.defaultValues, t));
        O(i._defaultValues, t, R), q(p(i._formValues, t)) && O(i._formValues, t, R);
      }
      return (
        !d && i.register(t),
        () => {
          (d ? v && !i._state.action : v) ? i.unregister(t) : C(t, !1);
        }
      );
    }, [t, i, d, o]),
    B.useEffect(() => {
      i._updateDisabledField({ disabled: n, fields: i._fields, name: t });
    }, [n, t, i]),
    B.useMemo(() => ({ field: m, formState: y, fieldState: b }), [m, y, b])
  );
}
const qe = (e) => e.render(ya(e));
var ga = (e, s, t, n, i) =>
    s
      ? ae(g({}, t[e]), {
          types: ae(g({}, t[e] && t[e].types ? t[e].types : {}), { [n]: i || !0 }),
        })
      : {},
  Rt = (e) => ({
    isOnSubmit: !e || e === he.onSubmit,
    isOnBlur: e === he.onBlur,
    isOnChange: e === he.onChange,
    isOnAll: e === he.all,
    isOnTouch: e === he.onTouched,
  }),
  $t = (e, s, t) =>
    !t &&
    (s.watchAll ||
      s.watch.has(e) ||
      [...s.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const Pe = (e, s, t, n) => {
  for (const o of t || Object.keys(e)) {
    const d = p(e, o);
    if (d) {
      const i = d,
        { _f: u } = i,
        y = xe(i, ['_f']);
      if (u) {
        if (u.refs && u.refs[0] && s(u.refs[0], o) && !n) return !0;
        if (u.ref && s(u.ref, u.name) && !n) return !0;
        if (Pe(y, s)) break;
      } else if (Y(y) && Pe(y, s)) break;
    }
  }
};
var ma = (e, s, t) => {
    const n = Le(p(e, t));
    return O(n, 'root', s[t]), O(e, t, n), e;
  },
  St = (e) => e.type === 'file',
  _e = (e) => typeof e == 'function',
  Qe = (e) => {
    if (!vt) return !1;
    const s = e ? e.ownerDocument : 0;
    return e instanceof (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement);
  },
  Je = (e) => ye(e),
  jt = (e) => e.type === 'radio',
  Xe = (e) => e instanceof RegExp;
const zt = { value: !1, isValid: !1 },
  Ut = { value: !0, isValid: !0 };
var ks = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !q(e[0].attributes.value)
        ? q(e[0].value) || e[0].value === ''
          ? Ut
          : { value: e[0].value, isValid: !0 }
        : Ut
      : zt;
  }
  return zt;
};
const Gt = { isValid: !1, value: null };
var Ss = (e) =>
  Array.isArray(e)
    ? e.reduce((s, t) => (t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : s), Gt)
    : Gt;
function Ht(e, s, t = 'validate') {
  if (Je(e) || (Array.isArray(e) && e.every(Je)) || (fe(e) && !e))
    return { type: t, message: Je(e) ? e : '', ref: s };
}
var Ie = (e) => (Y(e) && !Xe(e) ? e : { value: e, message: '' }),
  qt = async (e, s, t, n, i, o) => {
    const {
        ref: d,
        refs: u,
        required: y,
        maxLength: I,
        minLength: b,
        min: m,
        max: v,
        pattern: C,
        validate: R,
        name: $,
        valueAsNumber: z,
        mount: H,
      } = e._f,
      T = p(t, $);
    if (!H || s.has($)) return {};
    const V = u ? u[0] : d,
      L = (k) => {
        i && V.reportValidity && (V.setCustomValidity(fe(k) ? '' : k || ''), V.reportValidity());
      },
      E = {},
      P = jt(d),
      ee = We(d),
      A = P || ee,
      D =
        ((z || St(d)) && q(d.value) && q(T)) ||
        (Qe(d) && d.value === '') ||
        T === '' ||
        (Array.isArray(T) && !T.length),
      M = ga.bind(null, $, n, E),
      te = (k, w, U, F = me.maxLength, W = me.minLength) => {
        const Q = k ? w : U;
        E[$] = g({ type: k ? F : W, message: Q, ref: d }, M(k ? F : W, Q));
      };
    if (
      o
        ? !Array.isArray(T) || !T.length
        : y &&
          ((!A && (D || oe(T))) || (fe(T) && !T) || (ee && !ks(u).isValid) || (P && !Ss(u).isValid))
    ) {
      const { value: k, message: w } = Je(y) ? { value: !!y, message: y } : Ie(y);
      if (k && ((E[$] = g({ type: me.required, message: w, ref: V }, M(me.required, w))), !n))
        return L(w), E;
    }
    if (!D && (!oe(m) || !oe(v))) {
      let k, w;
      const U = Ie(v),
        F = Ie(m);
      if (!oe(T) && !isNaN(T)) {
        const W = d.valueAsNumber || (T && +T);
        oe(U.value) || (k = W > U.value), oe(F.value) || (w = W < F.value);
      } else {
        const W = d.valueAsDate || new Date(T),
          Q = (ge) => new Date(new Date().toDateString() + ' ' + ge),
          pe = d.type == 'time',
          de = d.type == 'week';
        ye(U.value) && T && (k = pe ? Q(T) > Q(U.value) : de ? T > U.value : W > new Date(U.value)),
          ye(F.value) &&
            T &&
            (w = pe ? Q(T) < Q(F.value) : de ? T < F.value : W < new Date(F.value));
      }
      if ((k || w) && (te(!!k, U.message, F.message, me.max, me.min), !n))
        return L(E[$].message), E;
    }
    if ((I || b) && !D && (ye(T) || (o && Array.isArray(T)))) {
      const k = Ie(I),
        w = Ie(b),
        U = !oe(k.value) && T.length > +k.value,
        F = !oe(w.value) && T.length < +w.value;
      if ((U || F) && (te(U, k.message, w.message), !n)) return L(E[$].message), E;
    }
    if (C && !D && ye(T)) {
      const { value: k, message: w } = Ie(C);
      if (
        Xe(k) &&
        !T.match(k) &&
        ((E[$] = g({ type: me.pattern, message: w, ref: d }, M(me.pattern, w))), !n)
      )
        return L(w), E;
    }
    if (R) {
      if (_e(R)) {
        const k = await R(T, t),
          w = Ht(k, V);
        if (w && ((E[$] = g(g({}, w), M(me.validate, w.message))), !n)) return L(w.message), E;
      } else if (Y(R)) {
        let k = {};
        for (const w in R) {
          if (!ce(k) && !n) break;
          const U = Ht(await R[w](T, t), V, w);
          U && ((k = g(g({}, U), M(w, U.message))), L(U.message), n && (E[$] = k));
        }
        if (!ce(k) && ((E[$] = g({ ref: V }, k)), !n)) return E;
      }
    }
    return L(!0), E;
  };
function xa(e, s) {
  const t = s.slice(0, -1).length;
  let n = 0;
  for (; n < t; ) e = q(e) ? n++ : e[s[n++]];
  return e;
}
function va(e) {
  for (const s in e) if (e.hasOwnProperty(s) && !q(e[s])) return !1;
  return !0;
}
function K(e, s) {
  const t = Array.isArray(s) ? s : bt(s) ? [s] : ms(s),
    n = t.length === 1 ? e : xa(e, t),
    i = t.length - 1,
    o = t[i];
  return (
    n && delete n[o],
    i !== 0 && ((Y(n) && ce(n)) || (Array.isArray(n) && va(n))) && K(e, t.slice(0, -1)),
    e
  );
}
var ot = () => {
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
  gt = (e) => oe(e) || !_s(e);
function ve(e, s) {
  if (gt(e) || gt(s)) return e === s;
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
        (Te(o) && Te(d)) || (Y(o) && Y(d)) || (Array.isArray(o) && Array.isArray(d))
          ? !ve(o, d)
          : o !== d
      )
        return !1;
    }
  }
  return !0;
}
var js = (e) => e.type === 'select-multiple',
  ba = (e) => jt(e) || We(e),
  lt = (e) => Qe(e) && e.isConnected,
  Is = (e) => {
    for (const s in e) if (_e(e[s])) return !0;
    return !1;
  };
function Ze(e, s = {}) {
  const t = Array.isArray(e);
  if (Y(e) || t)
    for (const n in e)
      Array.isArray(e[n]) || (Y(e[n]) && !Is(e[n]))
        ? ((s[n] = Array.isArray(e[n]) ? [] : {}), Ze(e[n], s[n]))
        : oe(e[n]) || (s[n] = !0);
  return s;
}
function ws(e, s, t) {
  const n = Array.isArray(e);
  if (Y(e) || n)
    for (const i in e)
      Array.isArray(e[i]) || (Y(e[i]) && !Is(e[i]))
        ? q(s) || gt(t[i])
          ? (t[i] = Array.isArray(e[i]) ? Ze(e[i], []) : g({}, Ze(e[i])))
          : ws(e[i], oe(s) ? {} : s[i], t[i])
        : (t[i] = !ve(e[i], s[i]));
  return t;
}
var Ce = (e, s) => ws(e, s, Ze(s)),
  Fs = (e, { valueAsNumber: s, valueAsDate: t, setValueAs: n }) =>
    q(e) ? e : s ? (e === '' ? NaN : e && +e) : t && ye(e) ? new Date(e) : n ? n(e) : e;
function ct(e) {
  const s = e.ref;
  return St(s)
    ? s.files
    : jt(s)
      ? Ss(e.refs).value
      : js(s)
        ? [...s.selectedOptions].map(({ value: t }) => t)
        : We(s)
          ? ks(e.refs).value
          : Fs(q(s.value) ? e.ref.value : s.value, e);
}
var Ta = (e, s, t, n) => {
    const i = {};
    for (const o of e) {
      const d = p(s, o);
      d && O(i, o, d._f);
    }
    return { criteriaMode: t, names: [...e], fields: i, shouldUseNativeValidation: n };
  },
  Ee = (e) => (q(e) ? e : Xe(e) ? e.source : Y(e) ? (Xe(e.value) ? e.value.source : e.value) : e);
const Yt = 'AsyncFunction';
var ka = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (_e(e.validate) && e.validate.constructor.name === Yt) ||
      (Y(e.validate) && Object.values(e.validate).find((s) => s.constructor.name === Yt))
    ),
  Sa = (e) =>
    e.mount &&
    (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Jt(e, s, t) {
  const n = p(e, t);
  if (n || bt(t)) return { error: n, name: t };
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
var ja = (e, s, t, n, i) =>
    i.isOnAll
      ? !1
      : !t && i.isOnTouch
        ? !(s || e)
        : (t ? n.isOnBlur : i.isOnBlur)
          ? !e
          : (t ? n.isOnChange : i.isOnChange)
            ? e
            : !0,
  Ia = (e, s) => !tt(p(e, s)).length && K(e, s);
const wa = { mode: he.onSubmit, reValidateMode: he.onChange, shouldFocusError: !0 };
function Fa(e = {}) {
  let s = g(g({}, wa), e),
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
    i = Y(s.defaultValues) || Y(s.values) ? le(s.defaultValues || s.values) || {} : {},
    o = s.shouldUnregister ? {} : le(i),
    d = { action: !1, mount: !1, watch: !1 },
    u = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    y,
    I = 0;
  const b = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    m = { values: ot(), array: ot(), state: ot() },
    v = Rt(s.mode),
    C = Rt(s.reValidateMode),
    R = s.criteriaMode === he.all,
    $ = (r) => (l) => {
      clearTimeout(I), (I = setTimeout(r, l));
    },
    z = async (r) => {
      if (!s.disabled && (b.isValid || r)) {
        const l = s.resolver ? ce((await A()).errors) : await M(n, !0);
        l !== t.isValid && m.state.next({ isValid: l });
      }
    },
    H = (r, l) => {
      !s.disabled &&
        (b.isValidating || b.validatingFields) &&
        ((r || Array.from(u.mount)).forEach((c) => {
          c && (l ? O(t.validatingFields, c, l) : K(t.validatingFields, c));
        }),
        m.state.next({
          validatingFields: t.validatingFields,
          isValidating: !ce(t.validatingFields),
        }));
    },
    T = (r, l = [], c, _, h = !0, f = !0) => {
      if (_ && c && !s.disabled) {
        if (((d.action = !0), f && Array.isArray(p(n, r)))) {
          const x = c(p(n, r), _.argA, _.argB);
          h && O(n, r, x);
        }
        if (f && Array.isArray(p(t.errors, r))) {
          const x = c(p(t.errors, r), _.argA, _.argB);
          h && O(t.errors, r, x), Ia(t.errors, r);
        }
        if (b.touchedFields && f && Array.isArray(p(t.touchedFields, r))) {
          const x = c(p(t.touchedFields, r), _.argA, _.argB);
          h && O(t.touchedFields, r, x);
        }
        b.dirtyFields && (t.dirtyFields = Ce(i, o)),
          m.state.next({
            name: r,
            isDirty: k(r, l),
            dirtyFields: t.dirtyFields,
            errors: t.errors,
            isValid: t.isValid,
          });
      } else O(o, r, l);
    },
    V = (r, l) => {
      O(t.errors, r, l), m.state.next({ errors: t.errors });
    },
    L = (r) => {
      (t.errors = r), m.state.next({ errors: t.errors, isValid: !1 });
    },
    E = (r, l, c, _) => {
      const h = p(n, r);
      if (h) {
        const f = p(o, r, q(c) ? p(i, r) : c);
        q(f) || (_ && _.defaultChecked) || l ? O(o, r, l ? f : ct(h._f)) : F(r, f), d.mount && z();
      }
    },
    P = (r, l, c, _, h) => {
      let f = !1,
        x = !1;
      const j = { name: r };
      if (!s.disabled) {
        const X = !!(p(n, r) && p(n, r)._f && p(n, r)._f.disabled);
        if (!c || _) {
          b.isDirty && ((x = t.isDirty), (t.isDirty = j.isDirty = k()), (f = x !== j.isDirty));
          const J = X || ve(p(i, r), l);
          (x = !!(!X && p(t.dirtyFields, r))),
            J || X ? K(t.dirtyFields, r) : O(t.dirtyFields, r, !0),
            (j.dirtyFields = t.dirtyFields),
            (f = f || (b.dirtyFields && x !== !J));
        }
        if (c) {
          const J = p(t.touchedFields, r);
          J ||
            (O(t.touchedFields, r, c),
            (j.touchedFields = t.touchedFields),
            (f = f || (b.touchedFields && J !== c)));
        }
        f && h && m.state.next(j);
      }
      return f ? j : {};
    },
    ee = (r, l, c, _) => {
      const h = p(t.errors, r),
        f = b.isValid && fe(l) && t.isValid !== l;
      if (
        (s.delayError && c
          ? ((y = $(() => V(r, c))), y(s.delayError))
          : (clearTimeout(I), (y = null), c ? O(t.errors, r, c) : K(t.errors, r)),
        (c ? !ve(h, c) : h) || !ce(_) || f)
      ) {
        const x = ae(g(g({}, _), f && fe(l) ? { isValid: l } : {}), { errors: t.errors, name: r });
        (t = g(g({}, t), x)), m.state.next(x);
      }
    },
    A = async (r) => {
      H(r, !0);
      const l = await s.resolver(
        o,
        s.context,
        Ta(r || u.mount, n, s.criteriaMode, s.shouldUseNativeValidation)
      );
      return H(r), l;
    },
    D = async (r) => {
      const { errors: l } = await A(r);
      if (r)
        for (const c of r) {
          const _ = p(l, c);
          _ ? O(t.errors, c, _) : K(t.errors, c);
        }
      else t.errors = l;
      return l;
    },
    M = async (r, l, c = { valid: !0 }) => {
      for (const h in r) {
        const f = r[h];
        if (f) {
          const _ = f,
            { _f: x } = _,
            j = xe(_, ['_f']);
          if (x) {
            const X = u.array.has(x.name),
              J = f._f && ka(f._f);
            J && b.validatingFields && H([h], !0);
            const ue = await qt(f, u.disabled, o, R, s.shouldUseNativeValidation && !l, X);
            if ((J && b.validatingFields && H([h]), ue[x.name] && ((c.valid = !1), l))) break;
            !l &&
              (p(ue, x.name)
                ? X
                  ? ma(t.errors, ue, x.name)
                  : O(t.errors, x.name, ue[x.name])
                : K(t.errors, x.name));
          }
          !ce(j) && (await M(j, l, c));
        }
      }
      return c.valid;
    },
    te = () => {
      for (const r of u.unMount) {
        const l = p(n, r);
        l && (l._f.refs ? l._f.refs.every((c) => !lt(c)) : !lt(l._f.ref)) && je(r);
      }
      u.unMount = new Set();
    },
    k = (r, l) => !s.disabled && (r && l && O(o, r, l), !ve(Se(), i)),
    w = (r, l, c) => Ts(r, u, g({}, d.mount ? o : q(l) ? i : ye(r) ? { [r]: l } : l), c, l),
    U = (r) => tt(p(d.mount ? o : i, r, s.shouldUnregister ? p(i, r, []) : [])),
    F = (r, l, c = {}) => {
      const _ = p(n, r);
      let h = l;
      if (_) {
        const f = _._f;
        f &&
          (!f.disabled && O(o, r, Fs(l, f)),
          (h = Qe(f.ref) && oe(l) ? '' : l),
          js(f.ref)
            ? [...f.ref.options].forEach((x) => (x.selected = h.includes(x.value)))
            : f.refs
              ? We(f.ref)
                ? f.refs.length > 1
                  ? f.refs.forEach(
                      (x) =>
                        (!x.defaultChecked || !x.disabled) &&
                        (x.checked = Array.isArray(h)
                          ? !!h.find((j) => j === x.value)
                          : h === x.value)
                    )
                  : f.refs[0] && (f.refs[0].checked = !!h)
                : f.refs.forEach((x) => (x.checked = x.value === h))
              : St(f.ref)
                ? (f.ref.value = '')
                : ((f.ref.value = h), f.ref.type || m.values.next({ name: r, values: g({}, o) })));
      }
      (c.shouldDirty || c.shouldTouch) && P(r, h, c.shouldTouch, c.shouldDirty, !0),
        c.shouldValidate && ge(r);
    },
    W = (r, l, c) => {
      for (const _ in l) {
        const h = l[_],
          f = ''.concat(r, '.').concat(_),
          x = p(n, f);
        (u.array.has(r) || Y(h) || (x && !x._f)) && !Te(h) ? W(f, h, c) : F(f, h, c);
      }
    },
    Q = (r, l, c = {}) => {
      const _ = p(n, r),
        h = u.array.has(r),
        f = le(l);
      O(o, r, f),
        h
          ? (m.array.next({ name: r, values: g({}, o) }),
            (b.isDirty || b.dirtyFields) &&
              c.shouldDirty &&
              m.state.next({ name: r, dirtyFields: Ce(i, o), isDirty: k(r, f) }))
          : _ && !_._f && !oe(f)
            ? W(r, f, c)
            : F(r, f, c),
        $t(r, u) && m.state.next(g({}, t)),
        m.values.next({ name: d.mount ? r : void 0, values: g({}, o) });
    },
    pe = async (r) => {
      d.mount = !0;
      const l = r.target;
      let c = l.name,
        _ = !0;
      const h = p(n, c),
        f = () => (l.type ? ct(h._f) : ys(r)),
        x = (j) => {
          _ = Number.isNaN(j) || (Te(j) && isNaN(j.getTime())) || ve(j, p(o, c, j));
        };
      if (h) {
        let j, X;
        const J = f(),
          ue = r.type === Ke.BLUR || r.type === Ke.FOCUS_OUT,
          As =
            (!Sa(h._f) && !s.resolver && !p(t.errors, c) && !h._f.deps) ||
            ja(ue, p(t.touchedFields, c), t.isSubmitted, C, v),
          rt = $t(c, u, ue);
        O(o, c, J),
          ue ? (h._f.onBlur && h._f.onBlur(r), y && y(0)) : h._f.onChange && h._f.onChange(r);
        const nt = P(c, J, ue, !1),
          Cs = !ce(nt) || rt;
        if ((!ue && m.values.next({ name: c, type: r.type, values: g({}, o) }), As))
          return (
            b.isValid && (s.mode === 'onBlur' && ue ? z() : ue || z()),
            Cs && m.state.next(g({ name: c }, rt ? {} : nt))
          );
        if ((!ue && rt && m.state.next(g({}, t)), s.resolver)) {
          const { errors: Vt } = await A([c]);
          if ((x(J), _)) {
            const Es = Jt(t.errors, n, c),
              Nt = Jt(Vt, n, Es.name || c);
            (j = Nt.error), (c = Nt.name), (X = ce(Vt));
          }
        } else
          H([c], !0),
            (j = (await qt(h, u.disabled, o, R, s.shouldUseNativeValidation))[c]),
            H([c]),
            x(J),
            _ && (j ? (X = !1) : b.isValid && (X = await M(n, !0)));
        _ && (h._f.deps && ge(h._f.deps), ee(c, X, j, nt));
      }
    },
    de = (r, l) => {
      if (p(t.errors, l) && r.focus) return r.focus(), 1;
    },
    ge = async (r, l = {}) => {
      let c, _;
      const h = Le(r);
      if (s.resolver) {
        const f = await D(q(r) ? r : h);
        (c = ce(f)), (_ = r ? !h.some((x) => p(f, x)) : c);
      } else
        r
          ? ((_ = (
              await Promise.all(
                h.map(async (f) => {
                  const x = p(n, f);
                  return await M(x && x._f ? { [f]: x } : x);
                })
              )
            ).every(Boolean)),
            !(!_ && !t.isValid) && z())
          : (_ = c = await M(n));
      return (
        m.state.next(
          ae(
            g(
              g({}, !ye(r) || (b.isValid && c !== t.isValid) ? {} : { name: r }),
              s.resolver || !r ? { isValid: c } : {}
            ),
            { errors: t.errors }
          )
        ),
        l.shouldFocus && !_ && Pe(n, de, r ? h : u.mount),
        _
      );
    },
    Se = (r) => {
      const l = g({}, d.mount ? o : i);
      return q(r) ? l : ye(r) ? p(l, r) : r.map((c) => p(l, c));
    },
    Me = (r, l) => ({
      invalid: !!p((l || t).errors, r),
      isDirty: !!p((l || t).dirtyFields, r),
      error: p((l || t).errors, r),
      isValidating: !!p(t.validatingFields, r),
      isTouched: !!p((l || t).touchedFields, r),
    }),
    st = (r) => {
      r && Le(r).forEach((l) => K(t.errors, l)), m.state.next({ errors: r ? t.errors : {} });
    },
    Be = (r, l, c) => {
      const _ = (p(n, r, { _f: {} })._f || {}).ref,
        J = p(t.errors, r) || {},
        { ref: f, message: x, type: j } = J,
        X = xe(J, ['ref', 'message', 'type']);
      O(t.errors, r, ae(g(g({}, X), l), { ref: _ })),
        m.state.next({ name: r, errors: t.errors, isValid: !1 }),
        c && c.shouldFocus && _ && _.focus && _.focus();
    },
    Oe = (r, l) => (_e(r) ? m.values.subscribe({ next: (c) => r(w(void 0, l), c) }) : w(r, l, !0)),
    je = (r, l = {}) => {
      for (const c of r ? Le(r) : u.mount)
        u.mount.delete(c),
          u.array.delete(c),
          l.keepValue || (K(n, c), K(o, c)),
          !l.keepError && K(t.errors, c),
          !l.keepDirty && K(t.dirtyFields, c),
          !l.keepTouched && K(t.touchedFields, c),
          !l.keepIsValidating && K(t.validatingFields, c),
          !s.shouldUnregister && !l.keepDefaultValue && K(i, c);
      m.values.next({ values: g({}, o) }),
        m.state.next(g(g({}, t), l.keepDirty ? { isDirty: k() } : {})),
        !l.keepIsValid && z();
    },
    Ve = ({ disabled: r, name: l, field: c, fields: _ }) => {
      ((fe(r) && d.mount) || r || u.disabled.has(l)) &&
        (r ? u.disabled.add(l) : u.disabled.delete(l), P(l, ct(c ? c._f : p(_, l)._f), !1, !1, !0));
    },
    G = (r, l = {}) => {
      let c = p(n, r);
      const _ = fe(l.disabled) || fe(s.disabled);
      return (
        O(
          n,
          r,
          ae(g({}, c || {}), {
            _f: g(ae(g({}, c && c._f ? c._f : { ref: { name: r } }), { name: r, mount: !0 }), l),
          })
        ),
        u.mount.add(r),
        c
          ? Ve({ field: c, disabled: fe(l.disabled) ? l.disabled : s.disabled, name: r })
          : E(r, !0, l.value),
        ae(
          g(
            g({}, _ ? { disabled: l.disabled || s.disabled } : {}),
            s.progressive
              ? {
                  required: !!l.required,
                  min: Ee(l.min),
                  max: Ee(l.max),
                  minLength: Ee(l.minLength),
                  maxLength: Ee(l.maxLength),
                  pattern: Ee(l.pattern),
                }
              : {}
          ),
          {
            name: r,
            onChange: pe,
            onBlur: pe,
            ref: (h) => {
              if (h) {
                G(r, l), (c = p(n, r));
                const f =
                    (q(h.value) &&
                      h.querySelectorAll &&
                      h.querySelectorAll('input,select,textarea')[0]) ||
                    h,
                  x = ba(f),
                  j = c._f.refs || [];
                if (x ? j.find((X) => X === f) : f === c._f.ref) return;
                O(n, r, {
                  _f: g(
                    g({}, c._f),
                    x
                      ? {
                          refs: [...j.filter(lt), f, ...(Array.isArray(p(i, r)) ? [{}] : [])],
                          ref: { type: f.type, name: r },
                        }
                      : { ref: f }
                  ),
                }),
                  E(r, !1, void 0, f);
              } else
                (c = p(n, r, {})),
                  c._f && (c._f.mount = !1),
                  (s.shouldUnregister || l.shouldUnregister) &&
                    !(gs(u.array, r) && d.action) &&
                    u.unMount.add(r);
            },
          }
        )
      );
    },
    Re = () => s.shouldFocusError && Pe(n, de, u.mount),
    Vs = (r) => {
      fe(r) &&
        (m.state.next({ disabled: r }),
        Pe(
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
    It = (r, l) => async (c) => {
      let _;
      c && (c.preventDefault && c.preventDefault(), c.persist && c.persist());
      let h = le(o);
      if (u.disabled.size) for (const f of u.disabled) O(h, f, void 0);
      if ((m.state.next({ isSubmitting: !0 }), s.resolver)) {
        const { errors: f, values: x } = await A();
        (t.errors = f), (h = x);
      } else await M(n);
      if ((K(t.errors, 'root'), ce(t.errors))) {
        m.state.next({ errors: {} });
        try {
          await r(h, c);
        } catch (f) {
          _ = f;
        }
      } else l && (await l(g({}, t.errors), c)), Re(), setTimeout(Re);
      if (
        (m.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: ce(t.errors) && !_,
          submitCount: t.submitCount + 1,
          errors: t.errors,
        }),
        _)
      )
        throw _;
    },
    Ns = (r, l = {}) => {
      p(n, r) &&
        (q(l.defaultValue)
          ? Q(r, le(p(i, r)))
          : (Q(r, l.defaultValue), O(i, r, le(l.defaultValue))),
        l.keepTouched || K(t.touchedFields, r),
        l.keepDirty ||
          (K(t.dirtyFields, r), (t.isDirty = l.defaultValue ? k(r, le(p(i, r))) : k())),
        l.keepError || (K(t.errors, r), b.isValid && z()),
        m.state.next(g({}, t)));
    },
    wt = (r, l = {}) => {
      const c = r ? le(r) : i,
        _ = le(c),
        h = ce(r),
        f = h ? i : _;
      if ((l.keepDefaultValues || (i = c), !l.keepValues)) {
        if (l.keepDirtyValues) {
          const x = new Set([...u.mount, ...Object.keys(Ce(i, o))]);
          for (const j of Array.from(x)) p(t.dirtyFields, j) ? O(f, j, p(o, j)) : Q(j, p(f, j));
        } else {
          if (vt && q(r))
            for (const x of u.mount) {
              const j = p(n, x);
              if (j && j._f) {
                const X = Array.isArray(j._f.refs) ? j._f.refs[0] : j._f.ref;
                if (Qe(X)) {
                  const J = X.closest('form');
                  if (J) {
                    J.reset();
                    break;
                  }
                }
              }
            }
          n = {};
        }
        (o = s.shouldUnregister ? (l.keepDefaultValues ? le(i) : {}) : le(f)),
          m.array.next({ values: g({}, f) }),
          m.values.next({ values: g({}, f) });
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
        (d.mount = !b.isValid || !!l.keepIsValid || !!l.keepDirtyValues),
        (d.watch = !!s.shouldUnregister),
        m.state.next({
          submitCount: l.keepSubmitCount ? t.submitCount : 0,
          isDirty: h ? !1 : l.keepDirty ? t.isDirty : !!(l.keepDefaultValues && !ve(r, i)),
          isSubmitted: l.keepIsSubmitted ? t.isSubmitted : !1,
          dirtyFields: h
            ? {}
            : l.keepDirtyValues
              ? l.keepDefaultValues && o
                ? Ce(i, o)
                : t.dirtyFields
              : l.keepDefaultValues && r
                ? Ce(i, r)
                : l.keepDirty
                  ? t.dirtyFields
                  : {},
          touchedFields: l.keepTouched ? t.touchedFields : {},
          errors: l.keepErrors ? t.errors : {},
          isSubmitSuccessful: l.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
          isSubmitting: !1,
        });
    },
    Ft = (r, l) => wt(_e(r) ? r(o) : r, l);
  return {
    control: {
      register: G,
      unregister: je,
      getFieldState: Me,
      handleSubmit: It,
      setError: Be,
      _executeSchema: A,
      _getWatch: w,
      _getDirty: k,
      _updateValid: z,
      _removeUnmounted: te,
      _updateFieldArray: T,
      _updateDisabledField: Ve,
      _getFieldArray: U,
      _reset: wt,
      _resetDefaultValues: () =>
        _e(s.defaultValues) &&
        s.defaultValues().then((r) => {
          Ft(r, s.resetOptions), m.state.next({ isLoading: !1 });
        }),
      _updateFormState: (r) => {
        t = g(g({}, t), r);
      },
      _disableForm: Vs,
      _subjects: m,
      _proxyFormState: b,
      _setErrors: L,
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
    trigger: ge,
    register: G,
    handleSubmit: It,
    watch: Oe,
    setValue: Q,
    getValues: Se,
    reset: Ft,
    resetField: Ns,
    clearErrors: st,
    unregister: je,
    setError: Be,
    setFocus: (r, l = {}) => {
      const c = p(n, r),
        _ = c && c._f;
      if (_) {
        const h = _.refs ? _.refs[0] : _.ref;
        h.focus && (h.focus(), l.shouldSelect && _e(h.select) && h.select());
      }
    },
    getFieldState: Me,
  };
}
function Va(e = {}) {
  const s = B.useRef(void 0),
    t = B.useRef(void 0),
    [n, i] = B.useState({
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
  s.current || (s.current = ae(g({}, Fa(e)), { formState: n }));
  const o = s.current.control;
  return (
    (o._options = e),
    kt({
      subject: o._subjects.state,
      next: (d) => {
        vs(d, o._proxyFormState, o._updateFormState, !0) && i(g({}, o._formState));
      },
    }),
    B.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    B.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const d = o._getDirty();
        d !== n.isDirty && o._subjects.state.next({ isDirty: d });
      }
    }, [o, n.isDirty]),
    B.useEffect(() => {
      e.values && !ve(e.values, t.current)
        ? (o._reset(e.values, o._options.resetOptions), (t.current = e.values), i((d) => g({}, d)))
        : o._resetDefaultValues();
    }, [e.values, o]),
    B.useEffect(() => {
      e.errors && o._setErrors(e.errors);
    }, [e.errors, o]),
    B.useEffect(() => {
      o._state.mount || (o._updateValid(), (o._state.mount = !0)),
        o._state.watch && ((o._state.watch = !1), o._subjects.state.next(g({}, o._formState))),
        o._removeUnmounted();
    }),
    B.useEffect(() => {
      e.shouldUnregister && o._subjects.values.next({ values: o._getWatch() });
    }, [e.shouldUnregister, o]),
    (s.current.formState = xs(n, o)),
    s.current
  );
}
const Na = () => {
    const { wallet: e } = cs(),
      s = Xt(),
      { isVersionedTxEnabled: t, updateProviderParams: n } = be,
      i = N.useCallback(() => {
        var d;
        return e
          ? ((d = e.adapter.supportedTransactionVersions) == null ? void 0 : d.has(0)) || !1
          : !0;
      }, [e]);
    return (
      N.useEffect(() => {
        n({ isVersionedTxEnabled: us.isVersionedTransactionsEnabled && i() });
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
  Aa = '_checkboxWrapper_vuedd_1',
  Ca = '_content_vuedd_4',
  Ea = '_title_vuedd_9',
  La = '_slippageSettings_vuedd_12',
  Pa = '_settingBlock_vuedd_17',
  Da = '_heading_vuedd_25',
  Wa = '_buttons_vuedd_35',
  Ma = '_slippage_vuedd_12',
  Ba = '_label_vuedd_46',
  Oa = '_slippageInput_vuedd_49',
  Ra = '_fee_vuedd_52',
  $a = '_feeInputWrapper_vuedd_57',
  za = '_feeInputPrefix_vuedd_60',
  Ua = '_feeInput_vuedd_57',
  Ga = '_divider_vuedd_74',
  Ha = '_dividerMarginBottom_vuedd_77',
  se = {
    checkboxWrapper: Aa,
    content: Ca,
    title: Ea,
    slippageSettings: La,
    settingBlock: Pa,
    heading: Da,
    buttons: Wa,
    slippage: Ma,
    label: Ba,
    slippageInput: Oa,
    fee: Ra,
    feeInputWrapper: $a,
    feeInputPrefix: za,
    feeInput: Ua,
    divider: Ga,
    dividerMarginBottom: Ha,
  },
  qa = ['0.1', '0.5', '1.0'].map((e) => ({ key: e, label: ''.concat(e, '%') })),
  Ya = Zt(({ withSlippage: e, extraContent: s }) => {
    const t = Qt(),
      n = ps(t.pathname),
      i = xt(t.pathname),
      o = hs(t.pathname),
      d = N.useMemo(
        () => [
          { key: Ae.normal, label: 'Normal' },
          { key: Ae.turbo, label: 'Turbo' },
          { key: Ae.custom, label: 'Custom' },
        ],
        []
      ),
      {
        slippage: u,
        slippageMultiply: y,
        slippageJlpMultiply: I,
        priorityFee: b,
        priorityFeeType: m,
        isVersionedTxEnabled: v,
        isTransactionSettingsModalVisible: C,
        slippageLeverageV3: R,
        updateProviderParams: $,
      } = be,
      [z, H] = N.useState(m),
      V = {
        slippage: (n ? I : i ? y : o ? R : u).toString(),
        feeType: m.toString(),
        priorityFee: b.toString(),
        isVersionedTxEnabled: v,
      },
      { reset: L, watch: E, handleSubmit: P, control: ee, register: A } = Va({ defaultValues: V });
    N.useEffect(() => {
      C && L(V);
    }, [C, L]);
    const D = d.find((F) => F.key === E('feeType')),
      M = (F) => {
        const { slippage: W, priorityFee: Q, isVersionedTxEnabled: pe } = F,
          de = {
            priorityFeeType: (D == null ? void 0 : D.key) || Ae.normal,
            priorityFee: new Ne(Q),
            isVersionedTxEnabled: pe,
            isTransactionSettingsModalVisible: !1,
          };
        n
          ? (de.slippageJlpMultiply = new Ne(W))
          : i
            ? (de.slippageMultiply = new Ne(W))
            : o
              ? (de.slippageLeverageV3 = new Ne(W))
              : (de.slippage = new Ne(W)),
          $(de, !0);
      },
      { checkIfVersionedTransactionsSupported: te } = Na(),
      k = Xt(),
      w = () => {
        $({ isTransactionSettingsModalVisible: !1 }),
          L(),
          k.track('kamino:liquidity:strategy-settings-modal:click-cancel');
      },
      U = te()
        ? 'Older versions of Ledger do not support versioned txns. Uncheck this box if transactions are not executing'
        : 'Your current wallet does not support Versioned Transactions';
    return a.jsxs(ds, {
      isOpen: C,
      onClose: w,
      isOverSidepanel: !0,
      children: [
        a.jsxs('form', {
          onSubmit: P(M),
          className: se.content,
          children: [
            a.jsx(S, { fs: 20, lh: 26, className: se.title, children: 'Settings' }),
            s,
            e &&
              a.jsxs('div', {
                className: se.slippageSettings,
                children: [
                  a.jsx(S, {
                    fs: 14,
                    lh: 20,
                    color: 'grey',
                    weight: 'bold',
                    className: se.label,
                    children: 'Slippage Tolerance',
                  }),
                  a.jsxs('div', {
                    className: se.slippage,
                    children: [
                      a.jsx(qe, {
                        name: 'slippage',
                        control: ee,
                        render: ({ field: F }) =>
                          a.jsx(Dt, {
                            isFullWidth: !0,
                            onChange: F.onChange,
                            tabs: qa,
                            activeKey: F.value === '1' ? '1.0' : F.value,
                          }),
                      }),
                      a.jsx(qe, {
                        name: 'slippage',
                        control: ee,
                        render: ({ field: F }) =>
                          a.jsx(yt, {
                            value: F.value,
                            onValueChange: ({ value: W }) => {
                              F.onChange(W);
                            },
                            isAllowed: ({ floatValue: W = 0 }) => W <= er,
                            suffix: '%',
                            className: se.slippageInput,
                            customInput: _t,
                            placeholder: '0.00%',
                            maxLength: 5,
                            decimalScale: 2,
                            size: 'small',
                            allowNegative: !1,
                          }),
                      }),
                    ],
                  }),
                  a.jsx(S, {
                    fs: 12,
                    lh: 16,
                    color: 'grey',
                    weight: 'regular',
                    className: se.note,
                    children:
                      'Your transaction will revert if the price changes unfavorably by more than this percentage.',
                  }),
                  a.jsx(Wt, {}),
                ],
              }),
            a.jsxs('div', {
              className: se.settingBlock,
              children: [
                a.jsx(S, {
                  fs: 14,
                  lh: 20,
                  color: 'grey',
                  weight: 'bold',
                  className: se.label,
                  children: 'Priority fee',
                }),
                a.jsxs('div', {
                  className: se.fee,
                  children: [
                    a.jsx(qe, {
                      name: 'feeType',
                      control: ee,
                      render: ({ field: F }) =>
                        a.jsx(Dt, {
                          isFullWidth: !0,
                          onChange: (W) => {
                            H(W), F.onChange(W);
                          },
                          tabs: d,
                          activeKey: F.value,
                        }),
                    }),
                    z === Ae.custom &&
                      a.jsx(qe, {
                        name: 'priorityFee',
                        control: ee,
                        render: ({ field: F }) =>
                          a.jsxs('div', {
                            className: se.feeInputWrapper,
                            children: [
                              a.jsx(S, {
                                fs: 14,
                                lh: 20,
                                color: 'grey',
                                className: se.feeInputPrefix,
                                children: 'Custom max priority fee (SOL)',
                              }),
                              a.jsx(yt, {
                                value: F.value,
                                onValueChange: ({ value: W }) => {
                                  F.onChange(W);
                                },
                                className: se.feeInput,
                                customInput: _t,
                                placeholder: '0.000',
                                maxLength: 8,
                                isAllowed: ({ floatValue: W = 0 }) => W <= 1,
                                decimalScale: tr,
                                size: 'small',
                                allowNegative: !1,
                              }),
                            ],
                          }),
                      }),
                  ],
                }),
                a.jsx(S, {
                  fs: 12,
                  lh: 16,
                  weight: 'regular',
                  color: 'grey',
                  children:
                    'The priority fee is paid to the Solana network. This additional fee helps boost how a transaction is prioritized against others, resulting in faster transaction execution times.',
                }),
              ],
            }),
            us.isVersionedTransactionsEnabled &&
              a.jsxs('div', {
                className: se.checkboxWrapper,
                children: [
                  a.jsx(Wt, { className: se.dividerMarginBottom }),
                  a.jsx(
                    sr,
                    ae(g({}, A('isVersionedTxEnabled')), {
                      title: a.jsx(rr, {
                        id: 'versioned-transaction-tooltip',
                        children: a.jsx(S, { children: 'Versioned Transaction' }),
                      }),
                      subtitle: a.jsx(S, {
                        fs: 12,
                        lh: 12,
                        color: 'grey',
                        children: '(Please, uncheck if using Ledger or WalletConnect)',
                      }),
                      disabled: !te(),
                    })
                  ),
                ],
              }),
            a.jsxs('div', {
              className: se.buttons,
              children: [
                a.jsx(ht, { isFullWidth: !0, type: 'submit', children: 'Save' }),
                a.jsx(ht, {
                  isFullWidth: !0,
                  variant: 'secondary',
                  onClick: w,
                  children: 'Cancel',
                }),
              ],
            }),
          ],
        }),
        a.jsx(mt, { id: 'versioned-transaction-tooltip', content: U }),
      ],
    });
  }),
  { formatPercent: Ja } = De,
  Ka = et(Fe),
  hi = Zt(
    ({
      withSlippage: e,
      variant: s = 'normal',
      additionalSettingsText: t,
      modalExtraContent: n,
    }) => {
      const { updateProviderParams: i } = be,
        { getSlippage: o } = da(),
        d = o();
      return a.jsxs('div', {
        className: Ka(Fe.root, { variant: s }),
        children: [
          a.jsx(S, {
            className: Fe.title,
            lh: 18,
            color: 'grey',
            children: 'Transaction Settings',
          }),
          a.jsxs('div', {
            className: Fe.settings,
            onClick: () => {
              i({ isTransactionSettingsModalVisible: !0 });
            },
            children: [
              a.jsxs(S, {
                lh: 18,
                className: Fe.priorityFeeText,
                children: [e && ''.concat(Ja(d)), t && ', '.concat(t)],
              }),
              a.jsx(ne, {
                name: 'SettingsFilled',
                className: Fe.clickable,
                size: 16,
                color: 'grey-deep',
              }),
            ],
          }),
          a.jsx(Ya, { withSlippage: e, extraContent: n }),
        ],
      });
    }
  );
export {
  qe as C,
  fi as F,
  pi as L,
  Gr as M,
  ci as R,
  hi as T,
  Ot as W,
  lr as a,
  Zr as b,
  xt as c,
  hs as d,
  Na as e,
  da as f,
  ui as g,
  li as h,
  ps as i,
  di as m,
  Va as u,
};
//# sourceMappingURL=TransactionSettingButton-C7bSz3pz.js.map
