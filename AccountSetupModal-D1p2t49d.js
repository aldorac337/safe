var Ie = Object.defineProperty,
  Le = Object.defineProperties;
var Me = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var te = Object.prototype.hasOwnProperty,
  se = Object.prototype.propertyIsEnumerable;
var ee = (e, t, s) =>
    t in e ? Ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s),
  P = (e, t) => {
    for (var s in t || (t = {})) te.call(t, s) && ee(e, s, t[s]);
    if (V) for (var s of V(t)) se.call(t, s) && ee(e, s, t[s]);
    return e;
  },
  B = (e, t) => Le(e, Me(t));
var ne = (e, t) => {
  var s = {};
  for (var n in e) te.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
  if (e != null && V) for (var n of V(e)) t.indexOf(n) < 0 && se.call(e, n) && (s[n] = e[n]);
  return s;
};
import {
  D as v,
  P as T,
  a5 as H,
  r as N,
  f as L,
  a2 as ke,
  T as De,
  j as i,
  l as Ee,
  aq as Re,
  t as Ne,
  a$ as je,
  S as ge,
} from './vendor-BCNtwJ5j.js';
import {
  s as he,
  u as Q,
  eY as Pe,
  x as Be,
  eZ as Qe,
  Q as W,
  bh as Y,
  k as K,
  d$ as z,
  al as Oe,
  aZ as _e,
  aj as re,
  o as F,
  c0 as Fe,
  c7 as ae,
  dx as xe,
  dI as oe,
  h as qe,
  f as I,
  D as Ge,
  L as We,
  aT as be,
  aY as Ke,
  p as Ae,
  b as Ue,
  a as Ve,
  aa as Ye,
  c as $,
  e as Se,
  d as ie,
  n as le,
  N as ze,
  an as $e,
  T as X,
  m as Xe,
  S as ce,
  d2 as _,
  e1 as Ze,
  a_ as Je,
  br as He,
  a9 as et,
} from './index-BInJAZZg.js';
import { a as ue } from './types-BnX4KR4A.js';
import { C as J } from './CapacityLimitIcon-BcO6WM5N.js';
import { t as tt, a as st } from './tryAnchorErrorMessageOr-BT2GLov4.js';
import { u as nt } from './useSignAllTransactions-DMNYtus0.js';
import { u as rt } from './useBudgetAndPriorityFeeIxns-vWARj0QI.js';
import { u as at } from './useModal-BD5K4LIB.js';
import { d as ot, i as j, u as de, c as it } from './useKswapMarketPrice-D641EmdI.js';
import { c as lt, a as ct } from './useGetLSTsStakeRatesQuery-BwIvt1P_.js';
import { u as Te } from './useKswapSdk-BcUNsnWQ.js';
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
      (e._sentryDebugIds[t] = '0b240b79-5c8c-4924-85ef-d94ac7920c9b'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-0b240b79-5c8c-4924-85ef-d94ac7920c9b'));
  } catch (s) {}
})();
function Kt(e, t, s) {
  return he(e) ? v.max(new v(t).minus(s), 0) : t;
}
const Ut = () => {
    const { walletPublicKey: e } = Q(),
      t = localStorage.getItem(Pe);
    return !e || !t || e === t || !Be.isReferralPageEnabled
      ? { referrerWallet: T.default }
      : { referrerWallet: new T(t) };
  },
  me = {
    '7u3HeHxYDLhnCoErrtycNokbQYbWGzLs6JSDqGAv5PfF': '284iwGtA9X9aLy3KsyV8uT2pXLARhYbiSi5SiM2g47M2',
    DxXdAyU3kCjnyggvHmY5nAwg5cRbbmdyX3npfDMjjMek: 'GprZNyWk67655JhX6Rq9KoebQ6WkQYRhATWzkx2P2LNc',
    ByYiZxp8QrdN9qbdtaAiePN8AAr3qvTPppNJDpf5DVJ5: 'x2uEQSaqrZs5UnyXjiNktRhrAy6iNFeSKai9VNYFFuy',
    '6WVSwDQXrBZeQVnu6hpnsRZhodaJTZBUaC334SiiBKdb': '9FLD8H4MVzmccLZ5Fy8yAk8G3e5zaHj6UvV9z9AEPr4o',
    '2rijnwAvXohjrv3Kwr62xTxhVQ9F6Aqgki7kWDT5VKSj': '86wnyzvFA3q5RbRQQsvz9tft6icnNqCdkMfzXvrSimc4',
    BJnbcRHqvppTyGesLzWASGKnmnF1wq9jZu6ExrjT7wvF: '5Cx8pxA2LuCPnt8RZG9LKjKc7PnzWwvCx6xJZis7MTwm',
    H6rHXmXoCQvq8Ue81MqNh7ow5ysPa1dSozwW3PU1dDH6: '7J58uyRavy93zY3NMStRJCKHd7G2kt7wu3mpscAUGte1',
    '6WEGfej9B9wjxRs6t4BYpb9iCXd8CpTpJ8fVSNzHCC5y': 'CC6dR5rz9tuhdxzvePGvVhqJPnBu9BFyc1qdRjxbquWZ',
  },
  Vt = ({ marketAddress: e }) => {
    const { data: t } = Qe(),
      s = t == null ? void 0 : t.find((a) => a.lendingMarket === e);
    return s != null && s.lookupTable ? [new T(s.lookupTable)] : me[e] ? [new T(me[e])] : [];
  },
  Yt = (e) => !0,
  zt = () => {
    const e = H(),
      { walletPublicKey: t } = Q();
    return {
      onInvalidate: N.useCallback(
        ({
          obligationAddress: n,
          marketAddress: a,
          depositReserveAddress: l,
          borrowReserveAddress: r,
        }) => {
          if (!t) return;
          const {
              getLendingObligation: c,
              getLendingObligations: u,
              getLendingObligationsForLeverage: p,
              userLendingObligations: o,
              getLeverageMultiplyMetrics: y,
              getObligationPnl: h,
              getObligationInterestFees: w,
              getMultiplyVault: g,
              lendingMarkets: C,
              longLeverageVaults: D,
              shortLeverageVaults: d,
            } = W,
            m = (n == null ? void 0 : n.toString()) || '';
          e.invalidateQueries(C),
            e.invalidateQueries(h(m)),
            e.invalidateQueries(u([])),
            e.invalidateQueries(p(t)),
            e.invalidateQueries(w(m)),
            e.invalidateQueries(D),
            e.invalidateQueries(d),
            e.invalidateQueries(c(m)),
            e.invalidateQueries(o(t)),
            e.invalidateQueries(y(a)),
            e.invalidateQueries(g(l, r));
        },
        [e, t]
      ),
    };
  },
  $t = () => {
    const e = H(),
      { walletPublicKey: t } = Q();
    return {
      onInvalidate: N.useCallback(
        ({
          obligationAddress: n,
          marketAddress: a,
          depositReserveAddress: l,
          borrowReserveAddress: r,
        }) => {
          if (!t) return;
          const {
              getLendingObligation: c,
              getLendingObligations: u,
              multiplyVaults: p,
              multiplyVaultsExtraData: o,
              userLendingObligations: y,
              getLeverageMultiplyMetrics: h,
              getObligationPnl: w,
              getObligationInterestFees: g,
              getMultiplyVault: C,
              lendingMarkets: D,
            } = W,
            d = (n == null ? void 0 : n.toString()) || '';
          e.invalidateQueries(D),
            e.invalidateQueries(w(d)),
            e.invalidateQueries(c(d)),
            e.invalidateQueries(u([])),
            e.invalidateQueries(g(d)),
            e.invalidateQueries(p(a.toString(), !0)),
            e.invalidateQueries(o(a.toString(), !0)),
            e.invalidateQueries(o(a.toString(), !0, 'jlp')),
            e.invalidateQueries(o(a.toString(), !0, 'pyusd')),
            e.invalidateQueries(y(t)),
            e.invalidateQueries(h(a)),
            e.invalidateQueries(C(l, r));
        },
        [e, t]
      ),
    };
  };
function Xt() {
  const { walletPublicKey: e, wallet: t } = Q();
  return {
    isWalletConnect: N.useMemo(() => (!t || !e ? !1 : t.adapter.name === 'WalletConnect'), [t, e]),
  };
}
const ut = '_root_1k7i4_1',
  dt = '_item_1k7i4_4',
  mt = '_title_1k7i4_9',
  pt = '_row_1k7i4_14',
  ft = '_divider_1k7i4_19',
  wt = '_titleText_1k7i4_22',
  vt = '_whiteText_1k7i4_26',
  k = { root: ut, item: dt, title: mt, row: pt, divider: ft, titleText: wt, whiteText: vt },
  yt = () => {
    const { activeReserves: e } = Y(),
      t = N.useMemo(
        () =>
          e.reduce(
            (n, a) => (n.set(a.address, !!a.state.config.disableUsageAsCollOutsideEmode), n),
            new L.PubkeyHashMap()
          ),
        [e]
      );
    return {
      isReserveDisabledToBeUseAsCollOutsideOfElevationGroup: N.useCallback((n) => t.get(n), [t]),
    };
  },
  Zt = ({ reserve: e }) => {
    const { getMarketByAddress: t } = K(),
      { getReserveByAddress: s } = Y(),
      { data: n } = z({});
    return N.useMemo(
      () => ({
        checkIfElevationGroupExists: ({ oblg: l, r }) => {
          if (!l) return !1;
          const c = t(l.state.lendingMarket);
          if (!c) return !1;
          const u = Array.from(l.deposits.keys()).map((o) => new T(o)),
            p = Array.from(l.borrows.keys());
          return p.length > 1 || (p.length > 0 && p[0].toString() !== r.address.toString())
            ? !1
            : c.getElevationGroupsForReservesCombination(u, new T(e.address)).length > 0;
        },
        checkIfEmodeAvailabileForObligationElevationGroup: ({
          market: l,
          obligation: r,
          reserve: c,
        }) => {
          if (!r) return !1;
          if (r.state.elevationGroup === 0) return !0;
          const u = Array.from(r.deposits.keys()).map((o) => new T(o));
          return l
            .getElevationGroupsForReservesCombination(u, new T(c.address))
            .some((o) => o.elevationGroup === r.state.elevationGroup);
        },
        checkIsLiquidityAvailable: ({
          reserve: l,
          obligation: r,
          market: c,
          mode: u,
          amount: p,
        }) => {
          if (!r) return !1;
          const o = s(l.address),
            { decimals: y } = o.stats,
            h = Oe(p, y),
            w = Array.from(r.deposits.keys()).map((m) => new T(m)),
            g = Array.from(r.borrows.values()),
            C = c
              .getElevationGroupsForReservesCombination(w, new T(l.address))
              .map((m) => m.elevationGroup),
            D = [0, ...C],
            d = [o.address, ...g.map((m) => m.reserveAddress)]
              .map((m) => c.getReserveByAddress(m))
              .filter(_e)
              .reduce((m, f) => {
                const S = f.getLiquidityAvailableForDebtReserveGivenCaps(c, D, w);
                return m.set(f.address, S), m;
              }, new ke());
          if (u === ue.cross) {
            const m = g.every((x) => {
                const { reserveAddress: A } = x,
                  b = r.state.elevationGroup === 0 ? new v(0) : x.amount,
                  M = o.address.equals(A) ? b.plus(h) : b,
                  E = d.get(A);
                return E ? M.lte(E[0]) : !1;
              }),
              f = d.get(o.address);
            return !re(f) && h.lt(f[0]) && m;
          }
          if (u === ue.isolated) {
            if (!r || !C.length || (g.length > 0 && !g[0].reserveAddress.equals(o.address)))
              return !1;
            const m = g.every((x) => {
                const { reserveAddress: A } = x,
                  b = r.state.elevationGroup > 0 ? new v(0) : x.amount,
                  M = o.address.equals(A) ? b.plus(h) : b,
                  E = d.get(A);
                return E ? M.lte(E[1]) : !1;
              }),
              f = d.get(o.address);
            return !re(f) && h.lt(f[1]) && m;
          }
          return !1;
        },
        checkIsMaxLtvReached: ({ obligation: l, market: r, newLtv: c }) => {
          if (!l || !n) return !1;
          const u = l.getMaxLoanLtvGivenElevationGroup(r, 0, n);
          return c * 100 > u.mul(100).toNumber();
        },
      }),
      [t, e.address, s, n]
    );
  },
  Jt = ({ obligation: e, marketAddress: t, tokenMint: s }) => {
    const { getToken: n } = F(),
      { getMarketByAddress: a } = K(),
      { data: l } = z({}),
      r = n(s);
    if (!l || !e) return { maxWithdrawableAmount: 0 };
    let c = 0;
    try {
      const u = e.getMaxWithdrawAmount(a(t), new T(s), l);
      c = L.lamportsToNumberDecimal(u, r.decimals).toNumber();
    } catch (u) {
      console.error(u);
    }
    return { maxWithdrawableAmount: c };
  },
  gt = [],
  ht = ({ reserveAddress: e, marketAddress: t }) => {
    const { getMarketByAddress: s } = K(),
      { getReserveByAddress: n } = Y(),
      a = n(e),
      { getReserveApys: l } = Fe(),
      r = ae({ reserve: a, getReserveApys: l }),
      c = t ? s(t) : null,
      u = N.useMemo(() => {
        if (!c || !t) return gt;
        const o = a.getBorrowCapForReserve(c);
        let y = [];
        o.debtAgainstCollateralReserveCaps.length &&
          (y = o.debtAgainstCollateralReserveCaps.map((C) => {
            const D = n(C.collateralReserve),
              d = ae({ reserve: D, getReserveApys: l }),
              m = L.lamportsToNumberDecimal(new v(C.currentValue), r.decimals),
              f = new v(C.maxDebt),
              S = f.equals(L.U64_MAX) ? new v(L.U64_MAX) : L.lamportsToNumberDecimal(f, r.decimals);
            return B(P({}, o), {
              id: d.address,
              elevationGroupId: C.elevationGroup,
              collateralTokenMint: d.mintAddress,
              borrowCap: S,
              reserveSymbol: D.symbol,
              borrowCapValue: S.mul(r.price),
              name: xe(d.asset) ? d.asset : ''.concat(d.asset, '/').concat(r.asset),
              isFilled: Number(m.div(S)) >= oe,
              totalBorrow: m,
              isIsolated: !0,
              liquidationLtv: d.liquidationLtv,
              maxLtv: d.maxLtv,
              capacityRemaining: Math.max(Number(S.minus(m)), 0),
            });
          }));
        const h = L.lamportsToNumberDecimal(o.borrowedOutsideEmode, r.decimals),
          w = new v(o.debtOutsideEmodeCap),
          g = w.equals(L.U64_MAX) ? new v(L.U64_MAX) : L.lamportsToNumberDecimal(w, r.decimals);
        return (
          g.gt(0) &&
            !g.eq(L.U64_MAX) &&
            y.push(
              B(P({}, o), {
                id: r.address,
                elevationGroupId: 0,
                collateralTokenMint: r.mintAddress,
                borrowCap: g,
                borrowCapValue: g.mul(r.price),
                name: 'All Collateral',
                isIsolated: !1,
                isFilled: Number(h.div(g)) >= oe,
                totalBorrow: h,
                capacityRemaining: Math.max(Number(g.minus(h)), 0),
              })
            ),
          y.filter((C) => C.borrowCap.greaterThan(0))
        );
      }, [c, t, a, n, l, r.decimals, r.address, r.mintAddress, r.price, r.asset]),
      p = N.useCallback((o) => u.find((y) => y.id === o.toString() && y.id !== '0'), [u]);
    return {
      data: u,
      borrowTokenSymbol: r.asset,
      borrowTokenAddress: r.mintAddress,
      getAvailableElevationGroupCapsData: p,
    };
  },
  pe = ({ cappedTokens: e, isSol: t }) => {
    const s = De(),
      n = () => {
        s.push(be.LENDING.LENDING_MULTIPLY);
      };
    return i.jsx('div', {
      className: k.root,
      'data-sentry-component': 'CappedAssetsTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: i.jsxs('div', {
        className: k.item,
        children: [
          i.jsxs('div', {
            className: k.title,
            children: [
              i.jsx(qe, {
                name: 'WarningInfo',
                size: 18,
                color: 'orange',
                'data-sentry-element': 'Icon',
                'data-sentry-source-file': 'index.tsx',
              }),
              i.jsx(I, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'This position contains Isolated Collateral ',
              }),
            ],
          }),
          i.jsxs('div', {
            className: k.row,
            children: [
              i.jsx(I, {
                fs: 14,
                lh: 18,
                color: 'grey',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Isolated Collateral',
              }),
              i.jsx(I, {
                fs: 14,
                lh: 18,
                weight: 'bold',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: e.join(', ').replace('MSOL', 'mSOL'),
              }),
            ],
          }),
          i.jsx(Ge, { 'data-sentry-element': 'Divider', 'data-sentry-source-file': 'index.tsx' }),
          i.jsx('div', {
            className: k.row,
            children: i.jsxs(I, {
              fs: 14,
              lh: 18,
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'index.tsx',
              children: [
                'Isolated Collateral assets can only be used as collateral in isolation. To borrow against an isolated asset, move other collateral assets to a different wallet.',
                t &&
                  i.jsxs(I, {
                    fs: 14,
                    lh: 18,
                    color: 'grey',
                    children: [
                      'Please use ',
                      i.jsx(We, { onClick: n, children: 'Multiply' }),
                      ' to continue borrowing.',
                    ],
                  }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  xt = [],
  Ht = ({
    obligation: e,
    borrowReserveAddress: t,
    collateralReservesAddresses: s = [],
    page: n = 'leverage',
    mode: a,
  }) => {
    const { activeReserves: l, getReserveByAddress: r } = Y(),
      { getToken: c } = F(),
      { data: u } = ht({
        reserveAddress: t,
        marketAddress: e == null ? void 0 : e.state.lendingMarket,
      }),
      { isReserveDisabledToBeUseAsCollOutsideOfElevationGroup: p } = yt(),
      o = u.map((x) => x.collateralTokenMint),
      y = r(t),
      h = y == null ? void 0 : y.getLiquidityMint().toString(),
      w = he(h),
      g = y.getBorrowLimitOutsideElevationGroup().lte(0),
      D = Array.from((e == null ? void 0 : e.deposits.values()) || []).map((x) =>
        x.mintAddress.toString()
      ),
      d = o.length && D.some((x) => !o.includes(x)),
      m =
        e &&
        !!o.length &&
        Array.from(e == null ? void 0 : e.borrows.keys()).some(
          (x) => x.toString() !== t.toString()
        ),
      f = N.useCallback(
        (x) => {
          const A = [],
            b = c(h),
            M = Array.from((e == null ? void 0 : e.deposits.values()) || [])
              .map((R) => R.reserveAddress)
              .concat(s.map((R) => new T(R))),
            E = l.filter((R) => p(R.address)),
            q = Array.from((e == null ? void 0 : e.deposits.values()) || []).map((R) =>
              R.reserveAddress.toString()
            ),
            O = E.reduce((R, G) => {
              if (q.includes(G.address.toString())) {
                const Ce = c(G.getLiquidityMint()).symbol;
                R.push(Ce);
              }
              return R;
            }, []),
            U = Ee.some(M, (R) => p(R));
          return (
            (d || m) && g
              ? A.push({
                  tooltip: 'You can only borrow '
                    .concat(b.symbol, ' against ')
                    .concat(
                      o.map((R) => c(R).symbol).join(', '),
                      '. Please remove any other assets from your position, or open a new loan.'
                    ),
                  text: 'Unavailable E-Mode Group',
                  variant: 'warning',
                })
              : a === 'cross' &&
                U &&
                (x
                  ? n === 'leverage'
                    ? A.push({
                        tooltip: i.jsxs(i.Fragment, {
                          children: [
                            'Borrowing SOL against ',
                            E.join(', ').replace('MSOL', 'mSOL'),
                            ' is at capacity.',
                            i.jsxs('div', {
                              children: [
                                'Please use ',
                                i.jsx(Re, {
                                  to: be.LENDING.LENDING_MULTIPLY,
                                  children: 'Multiply',
                                }),
                                ' to continue borrowing.',
                              ],
                            }),
                          ],
                        }),
                        text: 'Insufficient SOL Liquidity',
                        variant: 'warning',
                      })
                    : A.push({
                        tooltip: i.jsx(pe, { cappedTokens: O, isSol: !0 }),
                        text: 'Isolated Collateral',
                        variant: 'warning',
                        hasIcon: !1,
                        isClickableTooltip: !0,
                      })
                  : n === 'leverage'
                    ? A.push({
                        tooltip: 'Borrowing against '.concat(
                          E.join(', ').replace('MSOL', 'mSOL'),
                          ' is at capacity. Please remove it from your position to continue borrowing.'
                        ),
                        text: 'Insufficient Liquidity',
                        variant: 'warning',
                      })
                    : A.push({
                        tooltip: i.jsx(pe, { cappedTokens: O }),
                        text: 'Isolated Collateral',
                        variant: 'warning',
                        hasIcon: !1,
                      })),
            A
          );
        },
        [c, h, e, s, l, d, m, g, a, p, o, n]
      ),
      S = N.useMemo(() => f(w) || xt, [f, w]);
    return { isDisabled: S.length > 0, messages: S };
  },
  fe = new v(0),
  bt = 100,
  At = { maxBorrowableAmountDecimal: fe, maxBorrowableAmountWithBufferDecimal: fe },
  es = ({ obligation: e, marketAddress: t, tokenMint: s, currentElevationGroupId: n }) => {
    const { getMarketByAddress: a } = K(),
      { getToken: l } = F(),
      { data: r } = z({ refetchInterval: 10 * 1e3 });
    if (!e || !r) return At;
    const c = L.lamportsToNumberDecimal(
      e.getMaxBorrowAmountV2(a(t), new T(s), r, n) || 0,
      l(s).decimals
    );
    return {
      maxBorrowableAmountDecimal: c.toDecimalPlaces(Math.min(l(s).decimals, 4), v.ROUND_DOWN),
      maxBorrowableAmountWithBufferDecimal: c
        .mul(1 - Ke(bt))
        .toDecimalPlaces(Math.min(l(s).decimals, 4), v.ROUND_DOWN),
    };
  },
  { formatUsd: St, formatPercent: we } = Ae,
  ts = ({ maxLtv: e, currentLtv: t }) =>
    i.jsx('div', {
      className: k.root,
      'data-sentry-component': 'InsufficientBorrowPowerTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: i.jsxs('div', {
        className: k.item,
        children: [
          i.jsxs('div', {
            className: k.title,
            children: [
              i.jsx(J, {
                'data-sentry-element': 'CapacityLimitIcon',
                'data-sentry-source-file': 'index.tsx',
              }),
              i.jsx(I, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Insufficient Borrow Power ',
              }),
            ],
          }),
          i.jsxs('div', {
            className: k.row,
            children: [
              i.jsx(I, {
                fs: 14,
                lh: 18,
                color: 'grey',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Available Borrow Power',
              }),
              i.jsx(I, {
                fs: 14,
                lh: 18,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: St(0),
              }),
            ],
          }),
          i.jsxs('div', {
            className: k.row,
            children: [
              i.jsx(I, {
                fs: 14,
                lh: 18,
                color: 'grey',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Current / Max LTV',
              }),
              i.jsx(I, {
                fs: 14,
                lh: 18,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: ''.concat(we(t * 100), '/').concat(we(e * 100)),
              }),
            ],
          }),
        ],
      }),
    }),
  { formatShortName: Z } = Ae,
  ss = ({ tokenMint: e, resetsInMinutes: t, borrowAmount: s, dailyCapFilled: n, dailyCap: a }) => {
    const { getToken: l } = F(),
      { symbol: r } = l(e),
      c = n.plus(s),
      u = t.lte(new v(0)) ? a : v.max(a.minus(n), 0);
    return i.jsxs('div', {
      className: k.root,
      'data-sentry-component': 'DailyBorrowCapacityTooltip',
      'data-sentry-source-file': 'DailyBorrowCapacityTooltip.tsx',
      children: [
        n.gte(a) &&
          i.jsxs('div', {
            className: k.item,
            children: [
              i.jsxs('div', {
                className: k.title,
                children: [i.jsx(J, {}), i.jsxs(I, { children: [r, ' Daily Borrow Cap Reached'] })],
              }),
              i.jsxs('div', {
                className: k.row,
                children: [
                  i.jsx(I, { fs: 14, lh: 18, color: 'grey', children: 'Current / Cap' }),
                  i.jsx(I, {
                    fs: 14,
                    lh: 18,
                    children: ''.concat(Z(n.toNumber()), '/').concat(Z(a)),
                  }),
                ],
              }),
              i.jsxs('div', {
                className: k.row,
                children: [
                  i.jsx(I, { fs: 14, lh: 18, color: 'grey', children: 'Resets in' }),
                  i.jsx(I, {
                    fs: 14,
                    lh: 18,
                    children: ''.concat(v.max(t, 0).toString(), ' minutes'),
                  }),
                ],
              }),
            ],
          }),
        c.gte(a) &&
          !n.gte(a) &&
          i.jsxs('div', {
            className: k.item,
            children: [
              i.jsxs('div', {
                className: k.title,
                children: [i.jsx(J, {}), i.jsx(I, { children: 'Borrow Exceeds Daily Cap' })],
              }),
              i.jsxs('div', {
                className: k.row,
                children: [
                  i.jsx(I, { fs: 14, lh: 18, color: 'grey', children: 'Capacity Remaining' }),
                  i.jsx(I, { fs: 14, lh: 18, children: ''.concat(Z(u), ' ').concat(r) }),
                ],
              }),
              i.jsxs('div', {
                className: k.row,
                children: [
                  i.jsx(I, { fs: 14, lh: 18, color: 'grey', children: 'Resets in' }),
                  i.jsx(I, {
                    fs: 14,
                    lh: 18,
                    children: ''.concat(v.max(t, 0).toString(), ' minutes'),
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  Tt = ({ onSuccess: e = le, onCloseSetupModal: t = le }) => {
    const { walletPublicKey: s, wallet: n } = Q(),
      a = H(),
      { addNotification: l, updateTxByIndex: r } = Ue(),
      { signAllTransactions: c } = nt(),
      { createVersionedTxWithBudgetIxns: u } = rt(),
      { web3client: p } = Ve(),
      o = ''.concat(ze.LENDING.MULTIPLY.BASE, ':setupAccount'),
      { kaminoSdk: y } = Ye(),
      h = Ne(),
      { updateProviderParams: w } = $e,
      g = ({ previousBlockhash: d, queryKey: m }) => {
        if (!p) throw new Error('Web3client is not loaded');
        let f = 0;
        const S = setInterval(() => {
          f >= 9 && clearInterval(S);
          try {
            p.sendConnection.getLatestBlockhash('confirmed').then((x) => {
              x.blockhash !== d.blockhash && (a.invalidateQueries(m), clearInterval(S));
            });
          } catch (x) {
            console.error('Error while checking for new block:', x);
          }
          f += 1;
        }, 500);
      },
      D = je(
        async ({ txsIxns: d, queryKey: m }) => {
          if (!p) throw new Error('Web3client is not loaded');
          if (!s || !n) throw new Error('Wallet is not connected');
          if (!y) throw new Error('Kamino SDK is not loaded');
          const f = [],
            S = [];
          for (let A = 0; A < d.length; A++) {
            const b = d[A];
            if (b.length > 0) {
              const M = await u({ ixns: b, defaultCu: 3e5 });
              f.push(M), S.push('Setup '.concat(f.length));
            }
          }
          const x = [];
          if (f.length > 0) {
            ie(o), l({ id: o, transactions: S.map((b) => ({ label: b, status: X.Pending })) });
            const A = await c(f);
            for (let b = 0; b < A.length; b++) {
              const M = await st({
                mainConnection: p.sendConnection,
                extraConnections: p.sendConnectionsExtra,
                signedTx: A[b],
                commitment: 'confirmed',
                mixpanel: h,
              });
              x.push(M), r(o, b, { status: X.Success });
            }
            r(o, A.length, { status: X.Success });
          }
          return { txids: x, queryKey: m };
        },
        {
          onMutate: () => {
            w({ isTransactionInProgress: !0 }),
              $({ message: 'Setting up Account', type: 'loading', key: o });
          },
          onSuccess: async (d) => {
            if (!p) throw new Error('Web3client is not loaded');
            const { txids: m, queryKey: f } = d;
            $({ type: 'success', key: o, message: 'Setup account succeeded!', txids: m || [] });
            const S = await p.sendConnection.getLatestBlockhash('confirmed');
            g({ previousBlockhash: S, queryKey: f }), e();
          },
          onError: (d) => {
            Se(d),
              ie(o),
              $({
                message: 'Failed to setup account',
                description: tt(d, 'Setup account failed'),
                type: 'error',
                errorTxId: d.txId,
                walletPublicKey: s,
              });
          },
          onSettled: () => {
            t(), w({ isTransactionInProgress: !1 });
          },
        }
      );
    return { onSetupAccount: D.mutate, isLoading: D.isLoading };
  };
function ns({
  leverageType: e,
  collTokenMint: t,
  debtTokenMint: s,
  setupIxns: n,
  walletPublicKey: a,
}) {
  const { isOpen: l, onCloseModal: r, onOpenModal: c } = at(),
    { onSetupAccount: u } = Tt({ onSuccess: () => {}, onCloseSetupModal: r });
  return {
    handleSetupAccount: () => {
      u({
        txsIxns: n,
        queryKey: W.getUserLutAndSetupIxns(a != null ? a : '', e, t || '', s || ''),
      }),
        c();
    },
    isSetupModalOpened: l,
    onCloseSetupModal: r,
  };
}
function ve({ inputMint: e, outputMint: t, refetchIntervalSeconds: s = 3, enabled: n = !0 }) {
  const { getPriceByTokenMintDecimal: a } = Xe(),
    { getToken: l } = F(),
    { kswapSdk: r } = Te(),
    { walletPublicKey: c } = Q(),
    u = async () => {
      if (!r || !c)
        throw new Error('Kswap SDK is not initialized. Please, refresh the page and try again');
      const h = a(e),
        w = h.eq(0) ? new v(1) : new v(1).div(h),
        g = L.numberToLamportsDecimal(w, l(e).decimals);
      return (
        await ot(
          { inputMint: new T(e), outputMint: new T(t), inputAmountLamports: g },
          r,
          new T(c),
          0
        )
      ).priceAInB;
    },
    y = ge({
      queryKey: W.getKswapPriceFromQuote(e, t),
      enabled: !!e && !!t && !!r && n,
      queryFn: u,
      onError: (h) => {
        Se(h);
      },
      refetchInterval: s * 1e3,
    }),
    { data: p } = y,
    o = ne(y, ['data']);
  return P({ data: p, queryFn: u }, o);
}
const Ct = 3;
function rs({
  debtToCollPriceFromQuote: e,
  collToDebtPriceFromQuote: t,
  quote: s,
  collTokenMint: n,
  pythHermesPrices: a,
  getPriceByTokenMintDecimal: l,
  stakeRates: r,
  inputMint: c,
  outputMint: u,
  leverage: p,
}) {
  const o = lt({
      inputMint: c,
      outputMint: u,
      stakeRates: r,
      inputOraclePrice: new v((a == null ? void 0 : a[c]) || l(c)),
      outputOraclePrice: new v((a == null ? void 0 : a[u]) || l(u)),
      solOraclePrice: new v((a == null ? void 0 : a[ce]) || l(ce)),
    }),
    y = new v(1).div(e).add(t).div(2);
  return (
    j(s.inputTokenDecimals, 'Input token decimals are missing'),
    j(s.outputTokenDecimals, 'Output token decimals are missing'),
    ct({
      inputToOutputMarketPrice: n === c ? y : new v(1).div(y),
      inputToOutputTheoreticalPrice: o,
      leverage: p,
      inputAmount: L.lamportsToNumberDecimal(
        s.amountsExactIn.amountIn.toString(),
        s.inputTokenDecimals
      ),
      outputAmount: L.lamportsToNumberDecimal(
        s.amountsExactIn.amountOutGuaranteed.toString(),
        s.outputTokenDecimals
      ),
    })
  );
}
async function It({
  kswapSdk: e,
  walletPublicKey: t,
  collTokenMint: s,
  debtTokenMint: n,
  leverage: a,
  priceDebtToColl: l,
  priceCollToDebt: r,
  currentSlot: c,
  slippage: u,
  market: p,
  obligation: o,
  leverageType: y,
  getToken: h,
  specificProps: w,
}) {
  const g = it(e, new T(t), u.mul(100).toNumber()),
    C = async (f) => Promise.resolve(f.toString() === s ? r : l),
    D = async (f) => Promise.resolve(xe(h(f).symbol)),
    d = {
      owner: new T(t),
      debtTokenMint: new T(n),
      collTokenMint: new T(s),
      kaminoMarket: p,
      slippagePct: u,
      currentSlot: c,
      referrer: T.default,
      quoteBufferBps: new v(0),
      kamino: void 0,
      isKtoken: D,
      quoter: g,
      useV2Ixs: !0,
      priceAinB: C,
    },
    m = await (async () => {
      var f, S, x, A;
      switch (w.formType) {
        case 'adjustLeverage': {
          if (!o) throw new Error('No obligation found. Please, refresh the page and try again');
          const b =
              (S = (f = o.deposits.values().next().value) == null ? void 0 : f.amount) != null
                ? S
                : _,
            M =
              (A = (x = o.borrows.values().next().value) == null ? void 0 : x.amount) != null
                ? A
                : _;
          return L.getAdjustLeverageSwapInputs(
            B(P({}, d), {
              depositedLamports: b,
              borrowedLamports: M,
              priceCollToDebt: r,
              priceDebtToColl: l,
              targetLeverage: a,
              obligation: o,
            })
          );
        }
        case 'deposit': {
          const { amount: b, selectedTokenMint: M, elevationGroupOverride: E } = w;
          return L.getDepositWithLeverageSwapInputs(
            B(P({}, d), {
              depositAmount: new v(b),
              priceDebtToColl: l,
              obligation: null,
              referrer: T.default,
              targetLeverage: a,
              selectedTokenMint: new T(M),
              obligationTypeTagOverride:
                y === 'multiply' ? L.ObligationTypeTag.Multiply : L.ObligationTypeTag.Leverage,
              elevationGroupOverride: E,
            })
          );
        }
        case 'withdraw': {
          if (!o) throw new Error('No obligation found. Please, refresh the page and try again');
          const { amount: b, selectedTokenMint: M, deposited: E, borrowed: q, maxAmount: O } = w;
          return L.getWithdrawWithLeverageSwapInputs(
            B(P({}, d), {
              withdrawAmount: new v(b),
              deposited: new v(E),
              borrowed: new v(q),
              priceCollToDebt: r,
              selectedTokenMint: new T(M),
              isClosingPosition: Je(O, new v(b)),
              obligation: o,
            })
          );
        }
        case 'repayWithCollateral': {
          if (!o) throw new Error('No obligation found. Please, refresh the page and try again');
          const { amount: b, getComputeBudgetAndPriorityFeeIxns: M } = w,
            E = await M({ units: 14e5, ixns: [] });
          return L.getRepayWithCollSwapInputs(
            B(P({}, d), {
              repayAmount: new v(b),
              budgetAndPriorityFeeIxs: E,
              referrer: T.default,
              isClosingPosition: !1,
              obligation: o,
            })
          );
        }
        default:
          throw new Error('Unsupported form type');
      }
    })();
  return {
    initialInputs: m.initialInputs,
    flashLoanInfo: m.flashLoanInfo,
    inputAmountLamports: m.swapInputs.inputAmountLamports,
    inputMint: m.swapInputs.inputMint,
    outputMint: m.swapInputs.outputMint,
  };
}
function Lt({
  marketAddress: e,
  obligation: t,
  slippage: s,
  debtTokenMint: n,
  collTokenMint: a,
  leverage: l,
  leverageType: r,
  specificProps: c,
}) {
  const { kswapSdk: u } = Te(),
    p = de({ inputMint: n, outputMint: a, enabled: !1 }),
    o = de({ inputMint: a, outputMint: n, enabled: !1 }),
    y = z({ enabled: !1 }),
    { getMarketByAddress: h } = K(),
    { getToken: w } = F(),
    { walletPublicKey: g } = Q(),
    C = Ze(),
    D = h(e);
  return async () => {
    var R, G;
    j(C, 'Scope is not loaded'), j(g, 'Wallet not connected');
    const [d, m, f] = await Promise.all([p.refetch(), o.refetch(), y.refetch()]);
    j(d.data, 'priceDebtToCollResult is missing'), j(f.data, 'currentSlotResult is missing');
    const S = new v((R = d.data) != null ? R : 1),
      x = new v((G = m.data) != null ? G : 1),
      A = f.data,
      {
        initialInputs: b,
        flashLoanInfo: M,
        inputAmountLamports: E,
        inputMint: q,
        outputMint: O,
      } = await It({
        kswapSdk: u,
        walletPublicKey: g,
        collTokenMint: a,
        debtTokenMint: n,
        slippage: s,
        market: D,
        priceDebtToColl: S,
        priceCollToDebt: x,
        currentSlot: A,
        leverage: new v(l),
        leverageType: r,
        obligation: t,
        getToken: w,
        specificProps: c,
      }),
      U = b.swapQuote.quoteResponse;
    return (
      j(U, 'Something went wrong'),
      {
        currentSlot: A,
        priceDebtToColl: S,
        priceCollToDebt: x,
        quote: U,
        flashLoanInfo: M,
        inputAmountLamports: E,
        inputMint: q,
        outputMint: O,
      }
    );
  };
}
function as({
  marketAddress: e,
  obligation: t,
  slippage: s,
  debtTokenMint: n,
  collTokenMint: a,
  leverage: l,
  leverageType: r,
  enabled: c,
  specificProps: u,
}) {
  const p = ve({ inputMint: n, outputMint: a, enabled: !1 }),
    o = ve({ inputMint: a, outputMint: n, enabled: !1 }),
    y = Lt({
      marketAddress: e,
      obligation: t,
      slippage: s,
      debtTokenMint: n,
      collTokenMint: a,
      leverage: l,
      leverageType: r,
      specificProps: u,
    }),
    h = async () => {
      const [w, g, C] = await Promise.all([y(), p.refetch(), o.refetch()]);
      return (
        j(g.data, 'debtToCollPriceFromQuote is missing'),
        j(C.data, 'collToDebtPriceFromQuote is missing'),
        {
          priceCollToDebt: w.priceCollToDebt,
          priceDebtToColl: w.priceDebtToColl,
          currentSlot: w.currentSlot,
          quote: w.quote,
          flashLoanInfo: w.flashLoanInfo,
          debtToCollPriceFromQuote: g.data,
          collToDebtPriceFromQuote: C.data,
          inputAmountLamports: w.inputAmountLamports,
          inputMint: w.inputMint.toString(),
          outputMint: w.outputMint.toString(),
        }
      );
    };
  return ge({
    queryKey: W.getPriceImpactRequiredData({
      marketAddress: e,
      debtTokenMint: n,
      collTokenMint: a,
      leverage: l,
      slippage: s,
      amount: u.formType !== 'adjustLeverage' ? u.amount : void 0,
    }),
    queryFn: h,
    refetchInterval: Ct * 1e3,
    enabled: c,
    keepPreviousData: !0,
  });
}
const os = {
    priceImpactBps: _,
    theoreticalPriceDivergenceBps: _,
    marketPrice: _,
    theoreticalPrice: _,
  },
  Mt = '_root_x32i6_1',
  kt = '_grey_x32i6_11',
  Dt = '_titleWrapper_x32i6_14',
  ye = { root: Mt, grey: kt, titleWrapper: Dt };
function Et(e) {
  return e === 'leverage'
    ? 'Account setup for Long/Short. Once created, all \n Long/Short transactions will be one-click.'
    : e === 'multiply'
      ? 'Account setup for Multiply. Once created, all \n Multiply transactions will be one-click.'
      : e === 'vanilla'
        ? 'Account setup for Repay with Collateral. Once created, all \n Repay with Collateral transactions will be one-click.'
        : '';
}
const is = ({ isOpen: e, contentType: t, onClose: s }) =>
  i.jsx(He, {
    isOpen: e,
    onClose: s,
    isFluid: !0,
    'data-sentry-element': 'Modal',
    'data-sentry-component': 'AccountSetupModal',
    'data-sentry-source-file': 'AccountSetupModal.tsx',
    children: i.jsxs('div', {
      className: ye.root,
      children: [
        i.jsxs('div', {
          className: ye.titleWrapper,
          children: [
            i.jsx(et, {
              'data-sentry-element': 'Spinner',
              'data-sentry-source-file': 'AccountSetupModal.tsx',
            }),
            i.jsx(I, {
              color: 'white',
              fs: 20,
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'AccountSetupModal.tsx',
              children: 'Account Setup In Progress',
            }),
          ],
        }),
        i.jsx(I, {
          color: 'grey',
          'data-sentry-element': 'Text',
          'data-sentry-source-file': 'AccountSetupModal.tsx',
          children: Et(t),
        }),
      ],
    }),
  });
export {
  is as A,
  ss as D,
  os as E,
  ts as I,
  Ct as P,
  Vt as a,
  Ut as b,
  Xt as c,
  Ht as d,
  $t as e,
  zt as f,
  Kt as g,
  rs as h,
  as as i,
  ns as j,
  Yt as k,
  es as l,
  Zt as m,
  Jt as n,
  yt as o,
  Tt as p,
  k as s,
  ht as u,
};
//# sourceMappingURL=AccountSetupModal-D1p2t49d.js.map
