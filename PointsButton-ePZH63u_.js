var Ce = Object.defineProperty,
  xe = Object.defineProperties;
var ve = Object.getOwnPropertyDescriptors;
var B = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty,
  W = Object.prototype.propertyIsEnumerable;
var z = (s, r, a) =>
    r in s ? Ce(s, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (s[r] = a),
  h = (s, r) => {
    for (var a in r || (r = {})) K.call(r, a) && z(s, a, r[a]);
    if (B) for (var a of B(r)) W.call(r, a) && z(s, a, r[a]);
    return s;
  },
  O = (s, r) => xe(s, ve(r));
var U = (s, r) => {
  var a = {};
  for (var n in s) K.call(s, n) && r.indexOf(n) < 0 && (a[n] = s[n]);
  if (s != null && B) for (var n of B(s)) r.indexOf(n) < 0 && W.call(s, n) && (a[n] = s[n]);
  return a;
};
import {
  S as he,
  r as t,
  l as Q,
  j as e,
  T as $,
  t as te,
  L as se,
  n as Se,
  w as ge,
} from './vendor-CFRnETMC.js';
import {
  Q as Ee,
  e as Pe,
  u as H,
  ay as we,
  b8 as I,
  a8 as Be,
  a9 as ne,
  f as l,
  B as S,
  aT as F,
  D as E,
  h as j,
  p as Z,
  b2 as re,
  C as Y,
  q as je,
  a3 as be,
  fa as Le,
  dt as ae,
} from './index-DwWh_48g.js';
import { w as ke } from './withLendingPrefetchedMarkets-C9zkBK8v.js';
import { u as oe } from './useUserFormatPointsData-DZEGEAWy.js';
import { u as q } from './useUserBreakdownQuery-BvIzdiM1.js';
import { c as G } from './calcCurrentValues-BAmYgaYh.js';
import { c as Re } from './points-CIakpU_0.js';
import { a as Ne } from './useMyReferralLink-CKHvghUD.js';
import { u as ie } from './useGetUserReferralMetricsQuery-WIYdDDL4.js';
import { S as Te, C as Me } from './SwitchTransition-DuQLVk03.js';
import './index-BR0ixhiw.js';
import './useUserStrategySharesBalance-FxgbYN6y.js';
import './findAtaBalance-Bilnxw3W.js';
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
      r = new s.Error().stack;
    r &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[r] = 'b46ff8dc-988e-4381-93e0-493bc4006381'),
      (s._sentryDebugIdIdentifier = 'sentry-dbid-b46ff8dc-988e-4381-93e0-493bc4006381'));
  } catch (a) {}
})();
const Oe =
    "data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.5%202C9.5%202.55228%209.05228%203%208.5%203C7.94772%203%207.5%202.55228%207.5%202C7.5%201.44772%207.94772%201%208.5%201C9.05228%201%209.5%201.44772%209.5%202ZM14.5%206C15.0523%206%2015.5%205.55228%2015.5%205C15.5%204.44772%2015.0523%204%2014.5%204C13.9477%204%2013.5%204.44772%2013.5%205C13.5%205.55228%2013.9477%206%2014.5%206ZM9.37365%204.95829C8.95804%204.33487%208.04196%204.33487%207.62635%204.95829L5.49327%208.1579C5.41083%208.28156%205.23938%208.30642%205.12521%208.21128L3.47219%206.83377C2.7883%206.26386%201.75%206.75017%201.75%207.6404V12.4999C1.75%2013.4664%202.5335%2014.2499%203.5%2014.2499H13.5C14.4665%2014.2499%2015.25%2013.4664%2015.25%2012.4999V7.6404C15.25%206.75018%2014.2117%206.26386%2013.5278%206.83377L11.8748%208.21128C11.7606%208.30642%2011.5892%208.28156%2011.5067%208.1579L9.37365%204.95829ZM6.74134%208.98995L8.5%206.35197L10.2587%208.98995C10.8357%209.85552%2012.0359%2010.0296%2012.8351%209.36362L13.75%208.60117V12.4999C13.75%2012.638%2013.6381%2012.7499%2013.5%2012.7499H3.5C3.36193%2012.7499%203.25%2012.638%203.25%2012.4999V8.60117L4.16493%209.36362C4.9641%2010.0296%206.1643%209.85552%206.74134%208.98995ZM2.5%206C3.05228%206%203.5%205.55228%203.5%205C3.5%204.44772%203.05228%204%202.5%204C1.94772%204%201.5%204.44772%201.5%205C1.5%205.55228%201.94772%206%202.5%206Z'%20fill='url(%23paint0_linear_11967_153356)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_11967_153356'%20x1='8.50018'%20y1='1.21645'%20x2='14.5881'%20y2='4.53224'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFD37F'/%3e%3cstop%20offset='1'%20stop-color='%23D6971E'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  Ue = '_metalGreyGradient_1iptv_9',
  Ge = '_goldGradient_1iptv_15',
  Ae = '_silverGradient_1iptv_21',
  De = '_bronzeGradient_1iptv_27',
  Ve = '_pointsSilverTextGradient_1iptv_33',
  $e = '_btn_1iptv_39',
  He = '_children_1iptv_50',
  Ie = '__isActive_1iptv_60',
  Fe = '_text_1iptv_73',
  Ze = '_icon_1iptv_81',
  ze = '_overlayClassName_1iptv_89',
  Ke = '_emptyOverlay_1iptv_99',
  We = '_overlay_1iptv_89',
  Qe = '__isLoading_1iptv_110',
  Ye = '_spinner_1iptv_113',
  qe = '_mainStats_1iptv_118',
  Je = '_content_1iptv_125',
  Xe = '_emptyState_1iptv_128',
  et = '_title_1iptv_128',
  tt = '_img_1iptv_133',
  st = '_desc_1iptv_136',
  nt = '_points_1iptv_33',
  rt = '_pointsAmount_1iptv_145',
  at = '_iconContainer_1iptv_151',
  ot = '_divider_1iptv_161',
  it = '_stats_1iptv_164',
  lt = '_statItem_1iptv_171',
  ct = '_season2Stats_1iptv_181',
  dt = '_footerBtn_1iptv_200',
  pt = '_referralsContainerMobile_1iptv_220',
  mt = '_referralsTabsContainer_1iptv_224',
  ut = '_gridContent_1iptv_227',
  ft = '_spinnerContainer_1iptv_235',
  _t = '_viewButton_1iptv_238',
  yt = '__isSelected_1iptv_244',
  Ct = '_isSelected_1iptv_254',
  xt = '_viewButtonContent_1iptv_257',
  vt = '_openDropdown_1iptv_263',
  o = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1iptv_1',
    metalGreyGradient: Ue,
    goldGradient: Ge,
    silverGradient: Ae,
    bronzeGradient: De,
    pointsSilverTextGradient: Ve,
    btn: $e,
    children: He,
    _isActive: Ie,
    text: Fe,
    icon: Ze,
    overlayClassName: ze,
    emptyOverlay: Ke,
    overlay: We,
    _isLoading: Qe,
    spinner: Ye,
    mainStats: qe,
    content: Je,
    emptyState: Xe,
    title: et,
    img: tt,
    desc: st,
    points: nt,
    pointsAmount: rt,
    iconContainer: at,
    divider: ot,
    stats: it,
    statItem: lt,
    season2Stats: ct,
    footerBtn: dt,
    referralsContainerMobile: pt,
    referralsTabsContainer: mt,
    gridContent: ut,
    spinnerContainer: ft,
    viewButton: _t,
    _isSelected: yt,
    isSelected: Ct,
    viewButtonContent: xt,
    openDropdown: vt,
  },
  ht = {
    totalPointsEarned: 0,
    totalCurrentPointsPerSecond: 0,
    currentPointsPerSecondLeverage: 0,
    currentPointsPerSecondBorrowLend: 0,
    currentPointsPerSecondMultiply: 0,
    currentPointsPerSecondStrategies: 0,
    currentPointsPerSecondStaking: 0,
    numberOfUsers: 0,
    updatedOnLeverage: '',
    updatedOnMultiply: '',
    updatedOnStrategies: '',
    updatedOnBorrowLend: '',
    updatedOnStaking: '',
  },
  St = ({ season: s }) => {
    const n = he({
        queryKey: Ee.getPointsMetrics(s),
        queryFn: async () => {
          const w = await Re(s === 'season2' ? 'Season2' : 'Season1'),
            {
              totalPointsEarned: p,
              totalCurrentPointsPerSecond: c,
              currentPointsPerSecondLeverage: m,
              currentPointsPerSecondStrategies: f,
              currentPointsPerSecondMultiply: v,
              currentPointsPerSecondBorrowLend: b,
              currentPointsPerSecondStaking: L,
              numberOfUsers: k,
            } = w,
            R = U(w, [
              'totalPointsEarned',
              'totalCurrentPointsPerSecond',
              'currentPointsPerSecondLeverage',
              'currentPointsPerSecondStrategies',
              'currentPointsPerSecondMultiply',
              'currentPointsPerSecondBorrowLend',
              'currentPointsPerSecondStaking',
              'numberOfUsers',
            ]);
          return O(h({}, R), {
            totalPointsEarned: Number(p),
            totalCurrentPointsPerSecond: Number(c),
            currentPointsPerSecondLeverage: Number(m),
            currentPointsPerSecondBorrowLend: Number(b),
            currentPointsPerSecondMultiply: Number(v),
            currentPointsPerSecondStrategies: Number(f),
            currentPointsPerSecondStaking: Number(L),
            numberOfUsers: Number(k),
          });
        },
        onError: (i) => {
          Pe(i), console.error('Error: Failed to fetch "Points Metrics"', i);
        },
        staleTime: 3e5,
      }),
      { data: r } = n,
      a = U(n, ['data']);
    return h({ data: r || ht }, a);
  },
  A = ['Leverage', 'Multiply', 'BorrowLend', 'Strategies', 'Staking'],
  D = ({ season: s }) => {
    const { walletPublicKey: r } = H(),
      { walletPublicKey: a, isOwner: n } = we(),
      { data: i, isLoading: p } = q({ season: s }),
      { data: c } = q({ walletPublicKey: a, season: s }),
      { data: m, isLoading: f } = St({ season: s }),
      {
        updatedOnBorrowLend: v,
        updatedOnStrategies: b,
        updatedOnLeverage: L,
        updatedOnMultiply: k,
        updatedOnStaking: R,
        currentPointsPerSecondStrategies: w,
        currentPointsPerSecondMultiply: le,
        currentPointsPerSecondLeverage: ce,
        currentPointsPerSecondBorrowLend: de,
        currentPointsPerSecondStaking: pe,
        pointsEarnedStrategies: me,
        pointsEarnedLeverage: ue,
        pointsEarnedMultiply: fe,
        pointsEarnedBorrowLend: _e,
        pointsEarnedStaking: ye,
      } = i,
      { updateStoreParams: y } = I(),
      N = t.useMemo(
        () =>
          ({
            season1: 'totalPointsRealTime',
            season2: 'totalPointsRealTimeS2',
            season3: 'totalPointsRealTimeS3',
          })[s],
        [s]
      ),
      T = t.useMemo(
        () =>
          ({
            season1: 'totalPointsPortfolioPreviewRealTime',
            season2: 'totalPointsPortfolioPreviewRealTimeS2',
            season3: 'totalPointsPortfolioPreviewRealTimeS3',
          })[s],
        [s]
      ),
      M = t.useMemo(
        () =>
          ({
            season1: 'globalPointsRealTime',
            season2: 'globalPointsRealTimeS2',
            season3: 'globalPointsRealTimeS3',
          })[s],
        [s]
      );
    return (
      t.useEffect(() => {
        let u;
        return (
          r
            ? (u = setInterval(() => {
                const g = A.reduce(
                  (x, _) => (
                    (x += G(
                      Number(i['pointsEarned'.concat(_)]),
                      new Date(i['updatedOn'.concat(_)]),
                      Number(i['currentPointsPerSecond'.concat(_)])
                    )),
                    x
                  ),
                  0
                );
                y({ [N]: g });
              }, 100))
            : y({ [N]: 0 }),
          () => {
            u && clearInterval(u);
          }
        );
      }, [y, me, ue, fe, _e, ye, v, b, L, k, R, w, le, ce, de, pe, i, r, s, N]),
      t.useEffect(() => {
        let u;
        return (
          a && !n
            ? (u = setInterval(() => {
                const g = A.reduce(
                  (x, _) => (
                    (x += G(
                      Number(c['pointsEarned'.concat(_)]),
                      new Date(c['updatedOn'.concat(_)]),
                      Number(c['currentPointsPerSecond'.concat(_)])
                    )),
                    x
                  ),
                  0
                );
                y({ [T]: g });
              }, 100))
            : y({ [T]: 0 }),
          () => {
            u && clearInterval(u);
          }
        );
      }, [y, c, a, n, s, T]),
      t.useEffect(() => {
        let u;
        return (
          r
            ? (u = setInterval(() => {
                const g = A.reduce(
                  (x, _) => (
                    (x += G(
                      0,
                      new Date(m['updatedOn'.concat(_)]),
                      m['currentPointsPerSecond'.concat(_)]
                    )),
                    x
                  ),
                  0
                );
                y({ [M]: m.totalPointsEarned + g });
              }, 1e3))
            : y({ [M]: 0 }),
          () => {
            u && clearInterval(u);
          }
        );
      }, [y, m, i, r, s, M]),
      { isLoading: p || f }
    );
  },
  gt = '_metalGreyGradient_8ykiu_9',
  Et = '_goldGradient_8ykiu_15',
  Pt = '_silverGradient_8ykiu_21',
  wt = '_bronzeGradient_8ykiu_27',
  Bt = '_pointsSilverTextGradient_8ykiu_33',
  jt = '_referralContent_8ykiu_39',
  bt = '_referralContentBody_8ykiu_46',
  Lt = '_referralTitle_8ykiu_52',
  kt = '_rewardsContainer_8ykiu_58',
  Rt = '_referralBanner_8ykiu_67',
  Nt = '_referralButton_8ykiu_78',
  Tt = '_referralLoading_8ykiu_81',
  Mt = '_subtitle_8ykiu_87',
  Ot = '_mainStats_8ykiu_90',
  Ut = '_points_8ykiu_33',
  Gt = '_pointsAmount_8ykiu_103',
  At = '_divider_8ykiu_109',
  Dt = '_stats_8ykiu_112',
  Vt = '_statItem_8ykiu_119',
  $t = '_title_8ykiu_123',
  Ht = '_footerBtn_8ykiu_129',
  d = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_8ykiu_1',
    metalGreyGradient: gt,
    goldGradient: Et,
    silverGradient: Pt,
    bronzeGradient: wt,
    pointsSilverTextGradient: Bt,
    referralContent: jt,
    referralContentBody: bt,
    referralTitle: Lt,
    rewardsContainer: kt,
    referralBanner: Rt,
    referralButton: Nt,
    referralLoading: Tt,
    subtitle: Mt,
    mainStats: Ot,
    points: Ut,
    pointsAmount: Gt,
    divider: At,
    stats: Dt,
    statItem: Vt,
    title: $t,
    footerBtn: Ht,
  },
  It = () => {
    const { data: s, isLoading: r, isError: a } = Be();
    if (!s) return { data: void 0, isLoading: r, isError: a };
    const n = Q.sumBy(s.rewardPools.referralRewardPool, 'prizeUSD'),
      i = Q.sumBy(s.rewardPools.volumeRewardPool, 'prizeUSD'),
      p = n + i;
    return {
      data: {
        rewardPools: s == null ? void 0 : s.rewardPools,
        referralTotal: n,
        volumeTotal: i,
        total: p,
      },
      isLoading: r,
      isError: a,
    };
  },
  { formatWithoutDecimals: Ft, formatUsd: Zt } = Z,
  J = () => {
    const s = $(),
      { data: r } = It();
    return r
      ? e.jsxs('div', {
          className: d.referralContent,
          'data-sentry-component': 'ReferralsEmptyState',
          'data-sentry-source-file': 'Referrals.tsx',
          children: [
            e.jsxs('div', {
              className: d.referralContentBody,
              children: [
                e.jsxs('div', {
                  className: d.referralTitle,
                  children: [
                    e.jsx(l, {
                      fs: 30,
                      lh: 32,
                      gradient: 'pointsSilverTextGradient',
                      weight: 'bold',
                      'data-sentry-element': 'Text',
                      'data-sentry-source-file': 'Referrals.tsx',
                      children: 'Kamino Swap',
                    }),
                    e.jsx(l, {
                      fs: 14,
                      lh: 16,
                      color: 'grey',
                      'data-sentry-element': 'Text',
                      'data-sentry-source-file': 'Referrals.tsx',
                      children: 'Referral Program',
                    }),
                  ],
                }),
                e.jsx(l, {
                  className: d.subtitle,
                  fs: 12,
                  lh: 16,
                  color: 'grey-deep',
                  weight: 'regular',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'Referrals.tsx',
                  children:
                    'Kamino Swap is a meta-aggregator that finds the best prices for any token on Solana.',
                }),
              ],
            }),
            e.jsx(S, {
              onClick: () => {
                s.push(F.LEADERBOARD_AND_REFERRALS);
              },
              className: d.referralButton,
              variant: 'secondary',
              'data-sentry-element': 'Button',
              'data-sentry-source-file': 'Referrals.tsx',
              children: 'Create Referral Link',
            }),
          ],
        })
      : null;
  },
  zt = ({
    leaderboardRank: s,
    volumeUsd: r,
    weeklyLeaderboardRank: a,
    weeklyVolumeUsd: n,
    referredUsers: i,
  }) => {
    const p = $();
    return e.jsxs('div', {
      'data-sentry-component': 'ReferralsStats',
      'data-sentry-source-file': 'Referrals.tsx',
      children: [
        e.jsxs('div', {
          className: d.mainStats,
          children: [
            e.jsx(l, {
              fs: 14,
              lh: 16,
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Referrals.tsx',
              children: 'Weekly Ranking',
            }),
            e.jsx('div', {
              className: d.points,
              children: e.jsx(l, {
                fs: 24,
                lh: 28,
                className: d.pointsAmount,
                textAlign: 'center',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'Referrals.tsx',
                children: a ? '#'.concat(a) : '-',
              }),
            }),
            e.jsx(l, {
              fs: 14,
              lh: 16,
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Referrals.tsx',
              children: n ? '$'.concat(Ft(n), ' Volume') : '-',
            }),
          ],
        }),
        e.jsx(E, {
          className: d.divider,
          'data-sentry-element': 'Divider',
          'data-sentry-source-file': 'Referrals.tsx',
        }),
        e.jsxs('div', {
          className: d.stats,
          children: [
            !!s &&
              e.jsxs('div', {
                className: d.statItem,
                children: [
                  e.jsxs('div', {
                    className: d.title,
                    children: [
                      e.jsx(j, { color: 'grey', name: 'Trophy', size: 16 }),
                      e.jsx(l, { color: 'grey', children: 'Total Referred Wallets' }),
                    ],
                  }),
                  e.jsx(l, { children: i }),
                ],
              }),
            e.jsxs('div', {
              className: d.statItem,
              children: [
                e.jsxs('div', {
                  className: d.title,
                  children: [
                    e.jsx(j, {
                      color: 'grey',
                      name: 'BarChart02',
                      size: 16,
                      'data-sentry-element': 'Icon',
                      'data-sentry-source-file': 'Referrals.tsx',
                    }),
                    e.jsx(l, {
                      color: 'grey',
                      'data-sentry-element': 'Text',
                      'data-sentry-source-file': 'Referrals.tsx',
                      children: 'All Time Volume',
                    }),
                  ],
                }),
                e.jsx(l, {
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'Referrals.tsx',
                  children: r ? Zt(r) : '-',
                }),
              ],
            }),
          ],
        }),
        e.jsxs('div', {
          className: d.referralFooter,
          children: [
            e.jsx(E, {
              className: d.divider,
              'data-sentry-element': 'Divider',
              'data-sentry-source-file': 'Referrals.tsx',
            }),
            e.jsx(S, {
              onClick: () => {
                p.push(F.LEADERBOARD_AND_REFERRALS);
              },
              size: 'small',
              variant: 'ghost',
              isFullWidth: !0,
              className: d.footerBtn,
              'data-sentry-element': 'Button',
              'data-sentry-source-file': 'Referrals.tsx',
              children: 'Go To Referrals',
            }),
          ],
        }),
      ],
    });
  },
  X = () => {
    const { walletPublicKey: s } = H(),
      { link: r, isLoading: a } = Ne(),
      { data: n } = ie(),
      i = !!r;
    return s
      ? a || !n
        ? e.jsx('div', { className: d.referralLoading, children: e.jsx(ne, {}) })
        : i
          ? e.jsx(zt, {
              leaderboardRank: n == null ? void 0 : n.leaderboardRank,
              volumeUsd: n == null ? void 0 : n.volumeUsd,
              weeklyLeaderboardRank: n == null ? void 0 : n.weeklyLeaderboardRank,
              weeklyVolumeUsd: n == null ? void 0 : n.weeklyVolumeUsd,
              referredUsers: n == null ? void 0 : n.referredUsers,
              'data-sentry-element': 'ReferralsStats',
              'data-sentry-component': 'ReferralsContent',
              'data-sentry-source-file': 'Referrals.tsx',
            })
          : e.jsx(J, {
              'data-sentry-element': 'ReferralsEmptyState',
              'data-sentry-component': 'ReferralsContent',
              'data-sentry-source-file': 'Referrals.tsx',
            })
      : e.jsx(J, {});
  },
  Kt = (s) =>
    t.createElement(
      'svg',
      h(
        {
          width: 197,
          height: 130,
          viewBox: '0 0 197 130',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        s
      ),
      t.createElement(
        'g',
        { clipPath: 'url(#clip0_3794_617757)' },
        t.createElement('path', {
          opacity: 0.2,
          d: 'M182.62 31.43V0',
          stroke: 'url(#paint0_linear_3794_617757)',
          strokeMiterlimit: 10,
        }),
        t.createElement('path', {
          opacity: 0.2,
          d: 'M182.13 32.9805L133.53 81.5805',
          stroke: '#98B0C1',
          strokeMiterlimit: 10,
        }),
        t.createElement('path', {
          opacity: 0.2,
          d: 'M117.77 71.6602L152.35 37.0802C154.98 34.4502 158.53 32.9902 162.25 32.9902H189.32',
          stroke: '#98B0C1',
          strokeMiterlimit: 10,
        }),
        t.createElement('path', {
          opacity: 0.2,
          d: 'M118.12 71.6602L87.58 102.2C85.26 104.52 82.12 105.82 78.84 105.82H0.5',
          stroke: 'url(#paint1_linear_3794_617757)',
          strokeMiterlimit: 10,
        }),
        t.createElement('path', {
          opacity: 0.2,
          d: 'M135.62 42.2891H99.9299C93.5699 42.2891 88.4199 47.4391 88.4199 53.7991V89.4891C88.4199 95.8491 93.5699 100.999 99.9299 100.999H135.62C141.98 100.999 147.13 95.8491 147.13 89.4891V53.7991C147.13 47.4391 141.98 42.2891 135.62 42.2891Z',
          fill: 'url(#paint2_linear_3794_617757)',
        }),
        t.createElement('path', {
          d: 'M135.61 42.7601C141.71 42.7601 146.66 47.7101 146.66 53.8101V89.5001C146.66 95.6001 141.71 100.55 135.61 100.55H99.9202C93.8202 100.55 88.8702 95.6001 88.8702 89.5001V53.8101C88.8702 47.7101 93.8202 42.7601 99.9202 42.7601H135.61ZM135.61 41.8301H99.9202C93.3202 41.8301 87.9502 47.2001 87.9502 53.8001V89.4901C87.9502 96.0901 93.3202 101.47 99.9202 101.47H135.61C142.21 101.47 147.58 96.1001 147.58 89.4901V53.8001C147.58 47.2001 142.21 41.8301 135.61 41.8301Z',
          fill: '#212C42',
        }),
        t.createElement('path', {
          d: 'M132.88 47.1992H102.66C97.5001 47.1992 93.3101 51.3892 93.3101 56.5492V86.7692C93.3101 91.9292 97.4901 96.1192 102.66 96.1192H132.88C138.04 96.1192 142.23 91.9292 142.23 86.7692V56.5492C142.23 51.3892 138.04 47.1992 132.88 47.1992Z',
          fill: 'url(#paint3_linear_3794_617757)',
        }),
        t.createElement('path', {
          opacity: 0.3,
          d: 'M129.63 52.4707H105.92C101.87 52.4707 98.5898 55.7507 98.5898 59.8007V83.5107C98.5898 87.5607 101.87 90.8407 105.92 90.8407H129.63C133.68 90.8407 136.96 87.5607 136.96 83.5107V59.8007C136.96 55.7507 133.68 52.4707 129.63 52.4707Z',
          fill: 'url(#paint4_linear_3794_617757)',
          stroke: '#98B0C1',
          strokeMiterlimit: 10,
        }),
        t.createElement('path', {
          d: 'M119.02 65.7198L120.11 67.9198C120.31 68.3298 120.7 68.6098 121.15 68.6698L123.58 69.0198C124.71 69.1898 125.17 70.5798 124.35 71.3798L122.6 73.0998C122.28 73.4198 122.13 73.8798 122.2 74.3298L122.62 76.7498C122.82 77.8798 121.63 78.7398 120.61 78.2098L118.44 77.0698C118.04 76.8598 117.56 76.8598 117.15 77.0698L114.98 78.2098C113.97 78.7398 112.78 77.8898 112.97 76.7498L113.39 74.3298C113.46 73.8798 113.32 73.4198 112.99 73.0998L111.24 71.3798C110.42 70.5798 110.87 69.1898 112.01 69.0198L114.44 68.6698C114.9 68.6098 115.28 68.3198 115.48 67.9198L116.57 65.7198C117.08 64.6898 118.55 64.6898 119.05 65.7198H119.03H119.02Z',
          fill: 'url(#paint5_linear_3794_617757)',
        }),
        t.createElement('path', {
          d: 'M163.75 31.8398H167.96V34.7998H163.75C163.17 34.7998 162.7 34.3298 162.7 33.7498V32.8898C162.7 32.3098 163.17 31.8398 163.75 31.8398Z',
          fill: 'url(#paint6_linear_3794_617757)',
        }),
        t.createElement('path', {
          d: 'M182.13 47.3494C190.07 47.3494 196.5 40.9194 196.5 32.9794C196.5 25.0394 190.07 18.6094 182.13 18.6094C174.19 18.6094 167.76 25.0394 167.76 32.9794C167.76 40.9194 174.19 47.3494 182.13 47.3494Z',
          fill: 'url(#paint7_linear_3794_617757)',
        }),
        t.createElement('path', {
          opacity: 0.3,
          d: 'M182.13 44.5009C188.49 44.5009 193.65 39.3409 193.65 32.9809C193.65 26.6209 188.49 21.4609 182.13 21.4609C175.77 21.4609 170.61 26.6209 170.61 32.9809C170.61 39.3409 175.77 44.5009 182.13 44.5009Z',
          fill: 'url(#paint8_linear_3794_617757)',
          stroke: '#98B0C1',
          strokeMiterlimit: 10,
        }),
        t.createElement(
          'mask',
          {
            id: 'mask0_3794_617757',
            style: { maskType: 'luminance' },
            maskUnits: 'userSpaceOnUse',
            x: 175,
            y: 28,
            width: 14,
            height: 9,
          },
          t.createElement('path', {
            d: 'M188.57 28.3809H175.68V36.3109H188.57V28.3809Z',
            fill: 'white',
          })
        ),
        t.createElement(
          'g',
          { mask: 'url(#mask0_3794_617757)' },
          t.createElement('path', {
            d: 'M186.74 33.3411L188.48 31.6011C188.6 31.4811 188.6 31.2911 188.48 31.1711L187.77 30.4611C187.65 30.3411 187.46 30.3411 187.34 30.4611L185.6 32.2011L183.86 30.4611C183.74 30.3411 183.55 30.3411 183.43 30.4611L182.72 31.1711C182.6 31.2911 182.6 31.4811 182.72 31.6011L184.46 33.3411L182.72 35.0811C182.6 35.2011 182.6 35.3911 182.72 35.5111L183.43 36.2211C183.55 36.3411 183.74 36.3411 183.86 36.2211L185.6 34.4811L187.34 36.2211C187.46 36.3411 187.65 36.3411 187.77 36.2211L188.48 35.5111C188.6 35.3911 188.6 35.2011 188.48 35.0811L186.74 33.3411Z',
            fill: 'url(#paint9_linear_3794_617757)',
          }),
          t.createElement('path', {
            d: 'M181.01 34.8616H177.9L179.18 33.7616C179.42 33.5516 179.65 33.3416 179.87 33.1416C180.09 32.9316 180.29 32.7016 180.46 32.4616C180.63 32.2216 180.77 31.9616 180.87 31.6916C180.97 31.4116 181.02 31.1116 181.02 30.7916C181.02 30.4516 180.96 30.1316 180.85 29.8416C180.73 29.5516 180.56 29.2916 180.34 29.0716C180.12 28.8616 179.84 28.6916 179.52 28.5716C178.88 28.3416 177.99 28.3416 177.39 28.5516C177.09 28.6616 176.82 28.8116 176.6 28.9916C176.38 29.1816 176.19 29.3816 176.05 29.6116C175.91 29.8316 175.8 30.0716 175.71 30.3216C175.67 30.4416 175.73 30.5516 175.84 30.6016L176.88 31.0016C176.94 31.0316 177 31.0216 177.06 31.0016C177.11 30.9716 177.16 30.9216 177.17 30.8616C177.21 30.7216 177.26 30.5816 177.32 30.4516C177.38 30.3316 177.46 30.2316 177.55 30.1416C177.64 30.0516 177.75 29.9916 177.87 29.9316C177.99 29.8816 178.15 29.8616 178.32 29.8616C178.63 29.8616 178.86 29.9416 179.03 30.1016C179.2 30.2616 179.28 30.4816 179.28 30.7816V30.9116C179.28 31.2016 179.19 31.4816 179.01 31.7516C178.82 32.0416 178.55 32.3516 178.19 32.6716L175.85 34.7916C175.85 34.7916 175.78 34.9016 175.78 34.9616V36.1016C175.78 36.2216 175.88 36.3216 176 36.3216H180.99C181.11 36.3216 181.21 36.2216 181.21 36.1016V35.0916C181.21 34.9716 181.11 34.8716 180.99 34.8716L181.01 34.8616Z',
            fill: 'url(#paint10_linear_3794_617757)',
          })
        ),
        t.createElement('path', {
          opacity: 0.2,
          d: 'M66.6396 105.71V0',
          stroke: 'url(#paint11_linear_3794_617757)',
          strokeMiterlimit: 10,
        }),
        t.createElement('path', {
          d: 'M66.7201 107.6C67.7601 107.6 68.6001 106.76 68.6001 105.72C68.6001 104.68 67.7601 103.85 66.7201 103.85C65.6801 103.85 64.8501 104.69 64.8501 105.72C64.8501 106.75 65.6901 107.6 66.7201 107.6Z',
          fill: 'url(#paint12_linear_3794_617757)',
        })
      ),
      t.createElement(
        'defs',
        null,
        t.createElement(
          'linearGradient',
          {
            id: 'paint0_linear_3794_617757',
            x1: 182.5,
            y1: 1,
            x2: 182.5,
            y2: 32,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: '#98B0C1', stopOpacity: 0 }),
          t.createElement('stop', { offset: 0.03, stopColor: '#98B0C1', stopOpacity: 0.06 }),
          t.createElement('stop', { offset: 0.16, stopColor: '#98B0C1', stopOpacity: 0.31 }),
          t.createElement('stop', { offset: 0.29, stopColor: '#98B0C1', stopOpacity: 0.52 }),
          t.createElement('stop', { offset: 0.42, stopColor: '#98B0C1', stopOpacity: 0.69 }),
          t.createElement('stop', { offset: 0.56, stopColor: '#98B0C1', stopOpacity: 0.83 }),
          t.createElement('stop', { offset: 0.7, stopColor: '#98B0C1', stopOpacity: 0.92 }),
          t.createElement('stop', { offset: 0.84, stopColor: '#98B0C1', stopOpacity: 0.98 }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint1_linear_3794_617757',
            x1: 7,
            y1: 88.8102,
            x2: 118.47,
            y2: 88.8102,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: '#98B0C1', stopOpacity: 0 }),
          t.createElement('stop', { offset: 0.03, stopColor: '#98B0C1', stopOpacity: 0.06 }),
          t.createElement('stop', { offset: 0.16, stopColor: '#98B0C1', stopOpacity: 0.31 }),
          t.createElement('stop', { offset: 0.29, stopColor: '#98B0C1', stopOpacity: 0.52 }),
          t.createElement('stop', { offset: 0.42, stopColor: '#98B0C1', stopOpacity: 0.69 }),
          t.createElement('stop', { offset: 0.56, stopColor: '#98B0C1', stopOpacity: 0.83 }),
          t.createElement('stop', { offset: 0.7, stopColor: '#98B0C1', stopOpacity: 0.92 }),
          t.createElement('stop', { offset: 0.84, stopColor: '#98B0C1', stopOpacity: 0.98 }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint2_linear_3794_617757',
            x1: 117.78,
            y1: 100.999,
            x2: 117.78,
            y2: 42.2891,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: 'white' }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint3_linear_3794_617757',
            x1: 117.78,
            y1: 47.1892,
            x2: 117.78,
            y2: 96.0992,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: 'white' }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint4_linear_3794_617757',
            x1: 117.78,
            y1: 90.8407,
            x2: 117.78,
            y2: 52.4707,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: 'white' }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint5_linear_3794_617757',
            x1: 117.79,
            y1: 64.9398,
            x2: 117.79,
            y2: 78.3598,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: '#212C42' }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint6_linear_3794_617757',
            x1: 167.96,
            y1: 33.3198,
            x2: 162.71,
            y2: 33.3198,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: '#212C42' }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint7_linear_3794_617757',
            x1: 182.13,
            y1: 18.6094,
            x2: 182.13,
            y2: 47.3494,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: 'white' }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint8_linear_3794_617757',
            x1: 182.13,
            y1: 44.5009,
            x2: 182.13,
            y2: 21.4609,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: 'white' }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint9_linear_3794_617757',
            x1: 185.6,
            y1: 30.3611,
            x2: 185.6,
            y2: 38.9411,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: '#212C42' }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint10_linear_3794_617757',
            x1: 178.46,
            y1: 28.3816,
            x2: 178.46,
            y2: 39.2916,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: '#212C42' }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint11_linear_3794_617757',
            x1: 66.4997,
            y1: 0,
            x2: 66.4996,
            y2: 106,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: '#98B0C1', stopOpacity: 0 }),
          t.createElement('stop', { offset: 0.03, stopColor: '#98B0C1', stopOpacity: 0.06 }),
          t.createElement('stop', { offset: 0.16, stopColor: '#98B0C1', stopOpacity: 0.31 }),
          t.createElement('stop', { offset: 0.29, stopColor: '#98B0C1', stopOpacity: 0.52 }),
          t.createElement('stop', { offset: 0.42, stopColor: '#98B0C1', stopOpacity: 0.69 }),
          t.createElement('stop', { offset: 0.56, stopColor: '#98B0C1', stopOpacity: 0.83 }),
          t.createElement('stop', { offset: 0.7, stopColor: '#98B0C1', stopOpacity: 0.92 }),
          t.createElement('stop', { offset: 0.84, stopColor: '#98B0C1', stopOpacity: 0.98 }),
          t.createElement('stop', { offset: 1, stopColor: '#98B0C1' })
        ),
        t.createElement(
          'linearGradient',
          {
            id: 'paint12_linear_3794_617757',
            x1: 66.7201,
            y1: 103.85,
            x2: 66.7201,
            y2: 107.6,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: '#2C5070' }),
          t.createElement('stop', { offset: 1, stopColor: '#49AFE9' })
        ),
        t.createElement(
          'clipPath',
          { id: 'clip0_3794_617757' },
          t.createElement('rect', {
            width: 196,
            height: 130,
            fill: 'white',
            transform: 'translate(0.5)',
          })
        )
      )
    ),
  Wt = (s) =>
    t.createElement(
      'svg',
      h(
        {
          width: 16,
          height: 16,
          viewBox: '0 0 16 16',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        s
      ),
      t.createElement('path', {
        d: 'M8.4956 1L4.27358 8.53932C4.09175 8.86401 4.00083 9.02636 4.00001 9.16326C3.9993 9.28228 4.03593 9.39523 4.09944 9.4698C4.17247 9.55556 4.31604 9.55556 4.60319 9.55556H7.96325L7.43091 15L11.6529 7.46068C11.8348 7.13599 11.9257 6.97364 11.9265 6.83674C11.9272 6.71772 11.8906 6.60477 11.8271 6.5302C11.754 6.44444 11.6105 6.44444 11.3233 6.44444H7.96325L8.4956 1Z',
        fill: 'url(#paint0_linear_2991_525108)',
      }),
      t.createElement(
        'defs',
        null,
        t.createElement(
          'linearGradient',
          {
            id: 'paint0_linear_2991_525108',
            x1: 7.96335,
            y1: 1.22871,
            x2: 12.0819,
            y2: 2.43069,
            gradientUnits: 'userSpaceOnUse',
          },
          t.createElement('stop', { stopColor: '#FFD37F' }),
          t.createElement('stop', { offset: 1, stopColor: '#D6971E' })
        )
      )
    ),
  { formatTokenAllDecimals: V } = Z,
  Qt = ({
    totalPoints: s,
    currentBoost: r,
    userRank: a,
    currentPointsPerDay: n,
    season: i,
    isLoading: p,
  }) => {
    const c = () =>
        ({ season1: 'Season 1 Points', season2: 'Season 2 Points', season3: 'Season 3 Points' })[i],
      m = () =>
        ({ season1: 'Season 1 Ranking', season2: 'Season 2 Ranking', season3: 'Season 3 Ranking' })[
          i
        ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs('div', {
          className: o.mainStats,
          children: [
            e.jsx(l, {
              fs: 14,
              lh: 16,
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'SeasonStats.tsx',
              children: c(),
            }),
            e.jsxs('div', {
              className: o.points,
              children: [
                e.jsx(l, {
                  fs: 24,
                  lh: 28,
                  className: o.pointsAmount,
                  textAlign: 'center',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'SeasonStats.tsx',
                  children: V(s, s === 0 || s >= 1e6 ? 0 : 4, !0),
                }),
                e.jsxs('div', {
                  className: o.iconContainer,
                  children: [
                    e.jsx(Wt, {
                      'data-sentry-element': 'YellowLightning',
                      'data-sentry-source-file': 'SeasonStats.tsx',
                    }),
                    p
                      ? e.jsx('div', {
                          className: o.spinnerContainer,
                          children: e.jsx(ne, { size: 16 }),
                        })
                      : e.jsxs(l, {
                          color: 'grey',
                          lh: 16,
                          fs: 12,
                          children: [V(r, 1, !0), 'x Boost'],
                        }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(E, {
          className: o.divider,
          'data-sentry-element': 'Divider',
          'data-sentry-source-file': 'SeasonStats.tsx',
        }),
        e.jsxs('div', {
          className: o.stats,
          children: [
            !!a &&
              e.jsxs('div', {
                className: o.statItem,
                children: [
                  e.jsxs('div', {
                    className: o.title,
                    children: [
                      e.jsx(j, { color: 'grey', name: 'Trophy', size: 16 }),
                      e.jsx(l, { color: 'grey', children: m() }),
                    ],
                  }),
                  e.jsxs(l, { children: ['#', a] }),
                ],
              }),
            e.jsxs('div', {
              className: o.statItem,
              children: [
                e.jsxs('div', {
                  className: o.title,
                  children: [
                    e.jsx(j, {
                      color: 'grey',
                      name: 'Calendar',
                      size: 16,
                      'data-sentry-element': 'Icon',
                      'data-sentry-source-file': 'SeasonStats.tsx',
                    }),
                    e.jsx(l, {
                      color: 'grey',
                      'data-sentry-element': 'Text',
                      'data-sentry-source-file': 'SeasonStats.tsx',
                      children: 'Points Per Day',
                    }),
                  ],
                }),
                e.jsx(l, {
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'SeasonStats.tsx',
                  children: V(n, n === 0 || n >= 1e6 ? 0 : 4),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Yt = () =>
    e.jsxs('div', {
      className: o.emptyState,
      'data-sentry-component': 'NoWalletConnected',
      'data-sentry-source-file': 'Points.tsx',
      children: [
        e.jsx('div', {
          className: o.title,
          children: e.jsx(l, {
            fs: 24,
            lh: 28,
            weight: 'bold',
            textAlign: 'center',
            'data-sentry-element': 'Text',
            'data-sentry-source-file': 'Points.tsx',
            children: 'Season 3 is here',
          }),
        }),
        e.jsx('div', {
          className: o.img,
          children: e.jsx(Kt, {
            'data-sentry-element': 'PointsIllustration',
            'data-sentry-source-file': 'Points.tsx',
          }),
        }),
        e.jsx('div', {
          className: o.desc,
          children: e.jsx(l, {
            color: 'white',
            fs: 14,
            lh: 24,
            weight: 'bold',
            textAlign: 'center',
            'data-sentry-element': 'Text',
            'data-sentry-source-file': 'Points.tsx',
            children: 'Final season on the road to 10B!',
          }),
        }),
      ],
    }),
  ee = () => {
    const s = te(),
      r = $(),
      { walletPublicKey: a } = H(),
      n = () => {
        r.push(F.POINTS), s.track('header:points:popover:button:click');
      },
      {
        userRank: i,
        currentPointsPerDay: p,
        currentBoost: c,
        isLoading: m,
      } = oe({ season: 'season3' }),
      { totalPointsRealTimeS3: f } = I();
    return a
      ? e.jsxs(e.Fragment, {
          children: [
            e.jsx(Qt, {
              totalPoints: f,
              currentBoost: c,
              userRank: i,
              currentPointsPerDay: p,
              season: 'season3',
              isLoading: m,
              'data-sentry-element': 'SeasonStats',
              'data-sentry-source-file': 'Points.tsx',
            }),
            e.jsx(E, {
              className: o.divider,
              'data-sentry-element': 'Divider',
              'data-sentry-source-file': 'Points.tsx',
            }),
            e.jsx(S, {
              onClick: n,
              variant: 'ghost',
              isFullWidth: !0,
              size: 'small',
              className: o.footerBtn,
              'data-sentry-element': 'Button',
              'data-sentry-source-file': 'Points.tsx',
              children: 'View Points Hub',
            }),
          ],
        })
      : e.jsx(Yt, {
          'data-sentry-element': 'NoWalletConnected',
          'data-sentry-component': 'PointsContent',
          'data-sentry-source-file': 'Points.tsx',
        });
  },
  qt = '_fadeEnterDown_1i8ii_1',
  Jt = '_fadeEnterUp_1i8ii_5',
  Xt = '_fadeEnterActiveDown_1i8ii_9',
  es = '_fadeEnterActiveUp_1i8ii_13',
  ts = '_fadeExit_1i8ii_17',
  ss = '_fadeExitActiveUp_1i8ii_21',
  ns = '_fadeExitActiveDown_1i8ii_25',
  C = {
    fadeEnterDown: qt,
    fadeEnterUp: Jt,
    fadeEnterActiveDown: Xt,
    fadeEnterActiveUp: es,
    fadeExit: ts,
    fadeExitActiveUp: ss,
    fadeExitActiveDown: ns,
  },
  rs = ({ buttonProps: s, content1: r, content2: a }) => {
    const [n, i] = t.useState(!0);
    t.useEffect(() => {
      const f = setTimeout(() => i(!n), 5e3);
      return () => {
        f && clearTimeout(f);
      };
    }, [n]);
    const p = t.useRef(null),
      c = t.useRef(null),
      m = n ? p : c;
    return e.jsx(
      S,
      O(h({}, s), {
        'data-sentry-element': 'Button',
        'data-sentry-component': 'AnimatedButton',
        'data-sentry-source-file': 'AnimatedButton.tsx',
        children: e.jsx(Te, {
          mode: 'out-in',
          'data-sentry-element': 'SwitchTransition',
          'data-sentry-source-file': 'AnimatedButton.tsx',
          children: e.jsx(
            Me,
            {
              nodeRef: m,
              addEndListener: (f) => {
                var v;
                (v = m.current) == null || v.addEventListener('transitionend', f, !1);
              },
              classNames: {
                enter: n ? C.fadeEnterUp : C.fadeEnterDown,
                enterActive: n ? C.fadeEnterActiveDown : C.fadeEnterActiveUp,
                exit: C.fadeExit,
                exitActive: n ? C.fadeExitActiveUp : C.fadeExitActiveDown,
              },
              'data-sentry-element': 'CSSTransition',
              'data-sentry-source-file': 'AnimatedButton.tsx',
              children: e.jsx('div', {
                ref: m,
                className: C.buttonContainer,
                children: e.jsx('div', { className: C.children, children: n ? r : a }),
              }),
            },
            n ? 'content1' : 'content2'
          ),
        }),
      })
    );
  },
  { formatShortName: as, formatWithoutDecimals: os } = Z,
  P = ge(o),
  is = ({ selected: s, setSelectedTab: r }) => {
    const a = s === 'referrals',
      n = s === 'points';
    return e.jsxs('div', {
      className: o.viewSelector,
      'data-sentry-component': 'ViewSelector',
      'data-sentry-source-file': 'PointsButton.tsx',
      children: [
        e.jsx(S, {
          isFullWidth: !0,
          isActive: n,
          className: P(o.viewButton, { isSelected: n }),
          onMouseEnter: () => r('points'),
          'data-sentry-element': 'Button',
          'data-sentry-source-file': 'PointsButton.tsx',
          children: e.jsxs('div', {
            className: o.viewButtonContent,
            children: [
              e.jsx(l, {
                fs: 16,
                lh: 22,
                gradient: n ? 'pointsYellowTextGradient' : void 0,
                color: n ? void 0 : 'grey',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'PointsButton.tsx',
                children: 'Season 3 Points',
              }),
              e.jsx(l, {
                fs: 14,
                lh: 18,
                color: n ? 'white' : 'grey-deep',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'PointsButton.tsx',
                children: 'Use Kamino to Earn Points',
              }),
            ],
          }),
        }),
        e.jsx(S, {
          isFullWidth: !0,
          isActive: a,
          className: P(o.viewButton, { isSelected: a }),
          onMouseEnter: () => r('referrals'),
          'data-sentry-element': 'Button',
          'data-sentry-source-file': 'PointsButton.tsx',
          children: e.jsx('div', {
            className: o.viewButtonContent,
            children: e.jsx(l, {
              fs: 16,
              lh: 22,
              gradient: a ? 'pointsYellowTextGradient' : void 0,
              color: a ? void 0 : 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'PointsButton.tsx',
              children: 'Kamino Swap',
            }),
          }),
        }),
      ],
    });
  },
  ls = se(() => {
    const [s, r] = t.useState('points'),
      { isLoading: a } = oe({ season: 'season3' }),
      n = s === 'referrals',
      { width: i } = re();
    return i < ae
      ? e.jsx(Y, {
          className: P(o.overlay, { isLoading: a }),
          children: e.jsxs('div', {
            className: o.referralsContainerMobile,
            children: [
              e.jsx('div', {
                className: o.referralsTabsContainer,
                children: e.jsx(je, {
                  variant: 'golden',
                  onChange: (c) => r(c),
                  activeKey: s,
                  tabs: [
                    { key: 'points', label: 'Season 3 Points' },
                    { key: 'referrals', label: 'Kamino Swap Referrals' },
                  ],
                }),
              }),
              e.jsx('div', { children: n ? e.jsx(X, {}) : e.jsx(ee, {}) }),
            ],
          }),
        })
      : e.jsx(Y, {
          className: P(o.overlay, { isLoading: a }),
          children: e.jsxs('div', {
            className: o.gridContent,
            children: [
              e.jsx('div', { children: e.jsx(is, { selected: s, setSelectedTab: r }) }),
              e.jsx(E, { variant: 'vertical' }),
              e.jsx('div', { children: n ? e.jsx(X, {}) : e.jsx(ee, {}) }),
            ],
          }),
        });
  }),
  Es = ke(
    se(() => {
      const { width: s } = re(),
        r = s < ae,
        a = te(),
        { isVisible: n, onVisibleChange: i } = be({}),
        { totalPointsRealTimeS3: p } = I();
      D({ season: 'season1' }), D({ season: 'season2' }), D({ season: 'season3' });
      const { data: c } = ie(),
        m = () => {
          a.track('header:points:click'), i(!n);
        };
      return e.jsx(Se, {
        trigger: ['click'],
        visible: n,
        placement: r ? 'bottom' : 'bottomRight',
        onVisibleChange: i,
        overlayClassName: o.overlayClassName,
        overlay: e.jsx(ls, {}),
        openClassName: o.openDropdown,
        children: e.jsx(rs, {
          buttonProps: {
            className: P(o.btn, { isActive: n }),
            size: 'large',
            variant: 'none',
            onClick: m,
          },
          content1: e.jsxs('div', {
            className: o.children,
            children: [
              e.jsx('img', { className: o.icon, src: Le, alt: 'Points?' }),
              e.jsx(l, { className: o.text, children: as(p || 0) }),
            ],
          }),
          content2: e.jsxs('div', {
            className: o.children,
            children: [
              e.jsx('img', { className: o.icon, src: Oe, alt: 'ReferralRank?' }),
              e.jsx(l, {
                className: o.text,
                children:
                  c != null && c.weeklyLeaderboardRank
                    ? '#'.concat(os(c.weeklyLeaderboardRank))
                    : '-',
              }),
            ],
          }),
        }),
      });
    }),
    !1
  );
export { Es as PointsButton, Es as default };
//# sourceMappingURL=PointsButton-ePZH63u_.js.map
