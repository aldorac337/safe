var be = Object.defineProperty,
  Se = Object.defineProperties;
var Ie = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var Te = Object.prototype.hasOwnProperty,
  Le = Object.prototype.propertyIsEnumerable;
var ee = (e, t, o) =>
    t in e ? be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o),
  R = (e, t) => {
    for (var o in t || (t = {})) Te.call(t, o) && ee(e, o, t[o]);
    if (H) for (var o of H(t)) Le.call(t, o) && ee(e, o, t[o]);
    return e;
  },
  N = (e, t) => Se(e, Ie(t));
import {
  D as p,
  P as M,
  a5 as Z,
  r as B,
  f as L,
  a2 as Me,
  T as Ce,
  j as l,
  l as Ee,
  ao as De,
  t as je,
  aZ as ke,
  S as Re,
} from './vendor-DpenelXu.js';
import {
  s as we,
  a_ as X,
  u as Q,
  eV as Ne,
  x as Be,
  eW as Pe,
  Q as W,
  bi as G,
  k as _,
  dZ as K,
  al as Oe,
  aj as Y,
  o as F,
  c1 as Qe,
  c8 as te,
  dy as he,
  dH as se,
  h as _e,
  f as T,
  D as Fe,
  L as qe,
  aT as ve,
  aZ as We,
  p as ye,
  b as Ge,
  a as Ke,
  aa as Ue,
  c as U,
  e as Ve,
  d as ne,
  n as re,
  N as $e,
  an as Xe,
  T as V,
  S as oe,
  d3 as O,
  d$ as Ye,
  a$ as ze,
  bs as Ze,
  a9 as Je,
} from './index-DTTOaJYD.js';
import { J as xe } from './JupiterService-DZaWMIqf.js';
import { g as He, a as ae, c as et } from './transactions-CLlU6wy2.js';
import { a as ie } from './types-Cset0n2O.js';
import { C as z } from './CapacityLimitIcon-71duaemc.js';
import { t as tt, a as st } from './tryAnchorErrorMessageOr-DSgtA69k.js';
import { u as nt } from './useSignAllTransactions-CMsf5le8.js';
import { u as rt } from './useBudgetAndPriorityFeeIxns-G3EwBVgx.js';
import { u as ot } from './useModal-BWVU5GZ7.js';
import { u as le } from './useJupiterPriceQuery-C00Tb9hf.js';
import { c as at, b as it, a as ce } from './useGetLSTsStakeRatesQuery-CbRJCwww.js';
import { u as lt } from './useKswapSdk-CDkxmQxX.js';
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
      (e._sentryDebugIds[t] = 'ba76d26f-8e13-4473-8ce1-b73694d72bd6'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-ba76d26f-8e13-4473-8ce1-b73694d72bd6'));
  } catch (o) {}
})();
function Vt(e, t, o) {
  return we(e) ? p.max(new p(t).minus(o), 0) : t;
}
function ct(e, t) {
  const o = new p(e.inAmount),
    a = new p(e.outAmount),
    n = new p(e.otherAmountThreshold),
    i = t.div(o),
    s = a.mul(i).floor(),
    u = n.mul(i).floor(),
    c = e.routePlan.map((r) => {
      const x = r.swapInfo,
        v = N(R({}, x), {
          inAmount: new p(r.swapInfo.inAmount).mul(i).ceil().toString(),
          outAmount: new p(r.swapInfo.outAmount).mul(i).floor().toString(),
          feeAmount: new p(r.swapInfo.feeAmount).mul(i).ceil().toString(),
        });
      return N(R({}, r), { swapInfo: v });
    });
  return N(R({}, e), {
    inAmount: t.toString(),
    outAmount: s.toString(),
    otherAmountThreshold: u.toString(),
    routePlan: c,
  });
}
const $t = async (e, t) => {
    const {
      user: o,
      connection: a,
      quote: n,
      amountInLamports: i,
      isBudgetAndAtaIxnsIgnored: s = !0,
    } = t;
    if (!n) throw new Error('Jupiter quote is not found');
    const u = ct(n, i),
      {
        setupInstructions: c,
        swapInstruction: d,
        addressLookupTableAddresses: r,
        cleanupInstruction: x,
      } = await xe.getSwapInstructions(e, u, o, !1, !1);
    let v;
    v || (v = await Promise.all(r.map((I) => He(a, I))));
    const g = ae([...c, d, x].filter(X)),
      h = ae([d]);
    return { preActionIxs: [], swapIxs: s ? h : g, lookupTables: v.filter(X) };
  },
  Xt = () => {
    const { walletPublicKey: e } = Q(),
      t = localStorage.getItem(Ne);
    return !e || !t || e === t || !Be.isReferralPageEnabled
      ? { referrerWallet: M.default }
      : { referrerWallet: new M(t) };
  },
  ue = {
    '7u3HeHxYDLhnCoErrtycNokbQYbWGzLs6JSDqGAv5PfF': '284iwGtA9X9aLy3KsyV8uT2pXLARhYbiSi5SiM2g47M2',
    DxXdAyU3kCjnyggvHmY5nAwg5cRbbmdyX3npfDMjjMek: 'GprZNyWk67655JhX6Rq9KoebQ6WkQYRhATWzkx2P2LNc',
    ByYiZxp8QrdN9qbdtaAiePN8AAr3qvTPppNJDpf5DVJ5: 'x2uEQSaqrZs5UnyXjiNktRhrAy6iNFeSKai9VNYFFuy',
    '6WVSwDQXrBZeQVnu6hpnsRZhodaJTZBUaC334SiiBKdb': '9FLD8H4MVzmccLZ5Fy8yAk8G3e5zaHj6UvV9z9AEPr4o',
    '2rijnwAvXohjrv3Kwr62xTxhVQ9F6Aqgki7kWDT5VKSj': '86wnyzvFA3q5RbRQQsvz9tft6icnNqCdkMfzXvrSimc4',
    BJnbcRHqvppTyGesLzWASGKnmnF1wq9jZu6ExrjT7wvF: '5Cx8pxA2LuCPnt8RZG9LKjKc7PnzWwvCx6xJZis7MTwm',
  },
  Yt = ({ marketAddress: e }) => {
    const { data: t } = Pe(),
      o = t == null ? void 0 : t.find((n) => n.lendingMarket === e);
    return o != null && o.lookupTable ? [new M(o.lookupTable)] : ue[e] ? [new M(ue[e])] : [];
  },
  zt = () => {
    const e = Z(),
      { walletPublicKey: t } = Q();
    return {
      onInvalidate: B.useCallback(
        ({
          obligationAddress: a,
          marketAddress: n,
          depositReserveAddress: i,
          borrowReserveAddress: s,
        }) => {
          if (!t) return;
          const {
              getLendingObligation: u,
              getLendingObligations: c,
              getLendingObligationsForLeverage: d,
              userLendingObligations: r,
              getLeverageMultiplyMetrics: x,
              getObligationPnl: v,
              getObligationInterestFees: g,
              getMultiplyVault: h,
              lendingMarkets: I,
              longLeverageVaults: C,
              shortLeverageVaults: m,
            } = W,
            f = (a == null ? void 0 : a.toString()) || '';
          e.invalidateQueries(I),
            e.invalidateQueries(v(f)),
            e.invalidateQueries(c([])),
            e.invalidateQueries(d(t)),
            e.invalidateQueries(g(f)),
            e.invalidateQueries(C),
            e.invalidateQueries(m),
            e.invalidateQueries(u(f)),
            e.invalidateQueries(r(t)),
            e.invalidateQueries(x(n)),
            e.invalidateQueries(h(i, s));
        },
        [e, t]
      ),
    };
  },
  Zt = () => {
    const e = Z(),
      { walletPublicKey: t } = Q();
    return {
      onInvalidate: B.useCallback(
        ({
          obligationAddress: a,
          marketAddress: n,
          depositReserveAddress: i,
          borrowReserveAddress: s,
        }) => {
          if (!t) return;
          const {
              getLendingObligation: u,
              getLendingObligations: c,
              multiplyVaults: d,
              multiplyVaultsExtraData: r,
              userLendingObligations: x,
              getLeverageMultiplyMetrics: v,
              getObligationPnl: g,
              getObligationInterestFees: h,
              getMultiplyVault: I,
              lendingMarkets: C,
            } = W,
            m = (a == null ? void 0 : a.toString()) || '';
          e.invalidateQueries(C),
            e.invalidateQueries(g(m)),
            e.invalidateQueries(u(m)),
            e.invalidateQueries(c([])),
            e.invalidateQueries(h(m)),
            e.invalidateQueries(d(n.toString(), !0)),
            e.invalidateQueries(r(n.toString(), !0)),
            e.invalidateQueries(r(n.toString(), !0, 'jlp')),
            e.invalidateQueries(r(n.toString(), !0, 'pyusd')),
            e.invalidateQueries(x(t)),
            e.invalidateQueries(v(n)),
            e.invalidateQueries(I(i, s));
        },
        [e, t]
      ),
    };
  };
function Jt() {
  const { walletPublicKey: e, wallet: t } = Q();
  return {
    isWalletConnect: B.useMemo(() => (!t || !e ? !1 : t.adapter.name === 'WalletConnect'), [t, e]),
  };
}
const ut = '_root_1k7i4_1',
  dt = '_item_1k7i4_4',
  mt = '_title_1k7i4_9',
  pt = '_row_1k7i4_14',
  ft = '_divider_1k7i4_19',
  wt = '_titleText_1k7i4_22',
  ht = '_whiteText_1k7i4_26',
  D = { root: ut, item: dt, title: mt, row: pt, divider: ft, titleText: wt, whiteText: ht },
  vt = () => {
    const { activeReserves: e } = G(),
      t = B.useMemo(
        () =>
          e.reduce(
            (a, n) => (a.set(n.address, !!n.state.config.disableUsageAsCollOutsideEmode), a),
            new L.PubkeyHashMap()
          ),
        [e]
      );
    return {
      isReserveDisabledToBeUseAsCollOutsideOfElevationGroup: B.useCallback((a) => t.get(a), [t]),
    };
  },
  Ht = ({ reserve: e }) => {
    const { getMarketByAddress: t } = _(),
      { getReserveByAddress: o } = G(),
      { data: a } = K({});
    return B.useMemo(
      () => ({
        checkIfElevationGroupExists: ({ oblg: i, r: s }) => {
          if (!i) return !1;
          const u = t(i.state.lendingMarket);
          if (!u) return !1;
          const c = Array.from(i.deposits.keys()).map((r) => new M(r)),
            d = Array.from(i.borrows.keys());
          return d.length > 1 || (d.length > 0 && d[0].toString() !== s.address.toString())
            ? !1
            : u.getElevationGroupsForReservesCombination(c, new M(e.address)).length > 0;
        },
        checkIfEmodeAvailabileForObligationElevationGroup: ({
          market: i,
          obligation: s,
          reserve: u,
        }) => {
          if (!s) return !1;
          if (s.state.elevationGroup === 0) return !0;
          const c = Array.from(s.deposits.keys()).map((r) => new M(r));
          return i
            .getElevationGroupsForReservesCombination(c, new M(u.address))
            .some((r) => r.elevationGroup === s.state.elevationGroup);
        },
        checkIsLiquidityAvailable: ({
          reserve: i,
          obligation: s,
          market: u,
          mode: c,
          amount: d,
        }) => {
          if (!s) return !1;
          const r = o(i.address),
            { decimals: x } = r.stats,
            v = Oe(d, x),
            g = Array.from(s.deposits.keys()).map((f) => new M(f)),
            h = Array.from(s.borrows.values()),
            I = u
              .getElevationGroupsForReservesCombination(g, new M(i.address))
              .map((f) => f.elevationGroup),
            C = [0, ...I],
            m = [r.address, ...h.map((f) => f.reserveAddress)]
              .map((f) => u.getReserveByAddress(f))
              .filter(X)
              .reduce((f, w) => {
                const S = w.getLiquidityAvailableForDebtReserveGivenCaps(u, C, g);
                return f.set(w.address, S), f;
              }, new Me());
          if (c === ie.cross) {
            const f = h.every((y) => {
                const { reserveAddress: b } = y,
                  A = s.state.elevationGroup === 0 ? new p(0) : y.amount,
                  E = r.address.equals(b) ? A.plus(v) : A,
                  j = m.get(b);
                return j ? E.lte(j[0]) : !1;
              }),
              w = m.get(r.address);
            return !Y(w) && v.lt(w[0]) && f;
          }
          if (c === ie.isolated) {
            if (!s || !I.length || (h.length > 0 && !h[0].reserveAddress.equals(r.address)))
              return !1;
            const f = h.every((y) => {
                const { reserveAddress: b } = y,
                  A = s.state.elevationGroup > 0 ? new p(0) : y.amount,
                  E = r.address.equals(b) ? A.plus(v) : A,
                  j = m.get(b);
                return j ? E.lte(j[1]) : !1;
              }),
              w = m.get(r.address);
            return !Y(w) && v.lt(w[1]) && f;
          }
          return !1;
        },
        checkIsMaxLtvReached: ({ obligation: i, market: s, newLtv: u }) => {
          if (!i || !a) return !1;
          const c = i.getMaxLoanLtvGivenElevationGroup(s, 0, a);
          return u * 100 > c.mul(100).toNumber();
        },
      }),
      [t, e.address, o, a]
    );
  },
  es = ({ obligation: e, marketAddress: t, tokenMint: o }) => {
    const { getToken: a } = F(),
      { getMarketByAddress: n } = _(),
      { data: i } = K({}),
      s = a(o);
    if (!i || !e) return { maxWithdrawableAmount: 0 };
    let u = 0;
    try {
      const c = e.getMaxWithdrawAmount(n(t), new M(o), i);
      u = L.lamportsToNumberDecimal(c, s.decimals).toNumber();
    } catch (c) {
      console.error(c);
    }
    return { maxWithdrawableAmount: u };
  },
  yt = [],
  xt = ({ reserveAddress: e, marketAddress: t }) => {
    const { getMarketByAddress: o } = _(),
      { getReserveByAddress: a } = G(),
      n = a(e),
      { getReserveApys: i } = Qe(),
      s = te({ reserve: n, getReserveApys: i }),
      u = t ? o(t) : null,
      c = B.useMemo(() => {
        if (!u || !t) return yt;
        const r = n.getBorrowCapForReserve(u);
        let x = [];
        r.debtAgainstCollateralReserveCaps.length &&
          (x = r.debtAgainstCollateralReserveCaps.map((I) => {
            const C = a(I.collateralReserve),
              m = te({ reserve: C, getReserveApys: i }),
              f = L.lamportsToNumberDecimal(new p(I.currentValue), s.decimals),
              w = new p(I.maxDebt),
              S = w.equals(L.U64_MAX) ? new p(L.U64_MAX) : L.lamportsToNumberDecimal(w, s.decimals);
            return N(R({}, r), {
              id: m.address,
              elevationGroupId: I.elevationGroup,
              collateralTokenMint: m.mintAddress,
              borrowCap: S,
              reserveSymbol: C.symbol,
              borrowCapValue: S.mul(s.price),
              name: he(m.asset) ? m.asset : ''.concat(m.asset, '/').concat(s.asset),
              isFilled: Number(f.div(S)) >= se,
              totalBorrow: f,
              isIsolated: !0,
              liquidationLtv: m.liquidationLtv,
              maxLtv: m.maxLtv,
              capacityRemaining: Math.max(Number(S.minus(f)), 0),
            });
          }));
        const v = L.lamportsToNumberDecimal(r.borrowedOutsideEmode, s.decimals),
          g = new p(r.debtOutsideEmodeCap),
          h = g.equals(L.U64_MAX) ? new p(L.U64_MAX) : L.lamportsToNumberDecimal(g, s.decimals);
        return (
          h.gt(0) &&
            !h.eq(L.U64_MAX) &&
            x.push(
              N(R({}, r), {
                id: s.address,
                elevationGroupId: 0,
                collateralTokenMint: s.mintAddress,
                borrowCap: h,
                borrowCapValue: h.mul(s.price),
                name: 'All Collateral',
                isIsolated: !1,
                isFilled: Number(v.div(h)) >= se,
                totalBorrow: v,
                capacityRemaining: Math.max(Number(h.minus(v)), 0),
              })
            ),
          x.filter((I) => I.borrowCap.greaterThan(0))
        );
      }, [u, t, n, a, i, s.decimals, s.address, s.mintAddress, s.price, s.asset]),
      d = B.useCallback((r) => c.find((x) => x.id === r.toString() && x.id !== '0'), [c]);
    return {
      data: c,
      borrowTokenSymbol: s.asset,
      borrowTokenAddress: s.mintAddress,
      getAvailableElevationGroupCapsData: d,
    };
  },
  de = ({ cappedTokens: e, isSol: t }) => {
    const o = Ce(),
      a = () => {
        o.push(ve.LENDING.LENDING_MULTIPLY);
      };
    return l.jsx('div', {
      className: D.root,
      'data-sentry-component': 'CappedAssetsTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: l.jsxs('div', {
        className: D.item,
        children: [
          l.jsxs('div', {
            className: D.title,
            children: [
              l.jsx(_e, {
                name: 'WarningInfo',
                size: 18,
                color: 'orange',
                'data-sentry-element': 'Icon',
                'data-sentry-source-file': 'index.tsx',
              }),
              l.jsx(T, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'This position contains Isolated Collateral ',
              }),
            ],
          }),
          l.jsxs('div', {
            className: D.row,
            children: [
              l.jsx(T, {
                fs: 14,
                lh: 18,
                color: 'grey',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Isolated Collateral',
              }),
              l.jsx(T, {
                fs: 14,
                lh: 18,
                weight: 'bold',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: e.join(', ').replace('MSOL', 'mSOL'),
              }),
            ],
          }),
          l.jsx(Fe, { 'data-sentry-element': 'Divider', 'data-sentry-source-file': 'index.tsx' }),
          l.jsx('div', {
            className: D.row,
            children: l.jsxs(T, {
              fs: 14,
              lh: 18,
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'index.tsx',
              children: [
                'Isolated Collateral assets can only be used as collateral in isolation. To borrow against an isolated asset, move other collateral assets to a different wallet.',
                t &&
                  l.jsxs(T, {
                    fs: 14,
                    lh: 18,
                    color: 'grey',
                    children: [
                      'Please use ',
                      l.jsx(qe, { onClick: a, children: 'Multiply' }),
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
  gt = [],
  ts = ({
    obligation: e,
    borrowReserveAddress: t,
    collateralReservesAddresses: o = [],
    page: a = 'leverage',
    mode: n,
  }) => {
    const { activeReserves: i, getReserveByAddress: s } = G(),
      { getToken: u } = F(),
      { data: c } = xt({
        reserveAddress: t,
        marketAddress: e == null ? void 0 : e.state.lendingMarket,
      }),
      { isReserveDisabledToBeUseAsCollOutsideOfElevationGroup: d } = vt(),
      r = c.map((y) => y.collateralTokenMint),
      x = s(t),
      v = x == null ? void 0 : x.getLiquidityMint().toString(),
      g = we(v),
      h = x.getBorrowLimitOutsideElevationGroup().lte(0),
      C = Array.from((e == null ? void 0 : e.deposits.values()) || []).map((y) =>
        y.mintAddress.toString()
      ),
      m = r.length && C.some((y) => !r.includes(y)),
      f =
        e &&
        !!r.length &&
        Array.from(e == null ? void 0 : e.borrows.keys()).some(
          (y) => y.toString() !== t.toString()
        ),
      w = B.useCallback(
        (y) => {
          const b = [],
            A = u(v),
            E = Array.from((e == null ? void 0 : e.deposits.values()) || [])
              .map((k) => k.reserveAddress)
              .concat(o.map((k) => new M(k))),
            j = i.filter((k) => d(k.address)),
            P = Array.from((e == null ? void 0 : e.deposits.values()) || []).map((k) =>
              k.reserveAddress.toString()
            ),
            q = j.reduce((k, J) => {
              if (P.includes(J.address.toString())) {
                const Ae = u(J.getLiquidityMint()).symbol;
                k.push(Ae);
              }
              return k;
            }, []),
            ge = Ee.some(E, (k) => d(k));
          return (
            (m || f) && h
              ? b.push({
                  tooltip: 'You can only borrow '
                    .concat(A.symbol, ' against ')
                    .concat(
                      r.map((k) => u(k).symbol).join(', '),
                      '. Please remove any other assets from your position, or open a new loan.'
                    ),
                  text: 'Unavailable E-Mode Group',
                  variant: 'warning',
                })
              : n === 'cross' &&
                ge &&
                (y
                  ? a === 'leverage'
                    ? b.push({
                        tooltip: l.jsxs(l.Fragment, {
                          children: [
                            'Borrowing SOL against ',
                            j.join(', ').replace('MSOL', 'mSOL'),
                            ' is at capacity.',
                            l.jsxs('div', {
                              children: [
                                'Please use ',
                                l.jsx(De, {
                                  to: ve.LENDING.LENDING_MULTIPLY,
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
                    : b.push({
                        tooltip: l.jsx(de, { cappedTokens: q, isSol: !0 }),
                        text: 'Isolated Collateral',
                        variant: 'warning',
                        hasIcon: !1,
                        isClickableTooltip: !0,
                      })
                  : a === 'leverage'
                    ? b.push({
                        tooltip: 'Borrowing against '.concat(
                          j.join(', ').replace('MSOL', 'mSOL'),
                          ' is at capacity. Please remove it from your position to continue borrowing.'
                        ),
                        text: 'Insufficient Liquidity',
                        variant: 'warning',
                      })
                    : b.push({
                        tooltip: l.jsx(de, { cappedTokens: q }),
                        text: 'Isolated Collateral',
                        variant: 'warning',
                        hasIcon: !1,
                      })),
            b
          );
        },
        [u, v, e, o, i, m, f, h, n, d, r, a]
      ),
      S = B.useMemo(() => w(g) || gt, [w, g]);
    return { isDisabled: S.length > 0, messages: S };
  },
  me = new p(0),
  At = 100,
  bt = { maxBorrowableAmountDecimal: me, maxBorrowableAmountWithBufferDecimal: me },
  ss = ({ obligation: e, marketAddress: t, tokenMint: o, currentElevationGroupId: a }) => {
    const { getMarketByAddress: n } = _(),
      { getToken: i } = F(),
      { data: s } = K({ refetchInterval: 10 * 1e3 });
    if (!e || !s) return bt;
    const u = L.lamportsToNumberDecimal(
      e.getMaxBorrowAmountV2(n(t), new M(o), s, a) || 0,
      i(o).decimals
    );
    return {
      maxBorrowableAmountDecimal: u.toDecimalPlaces(Math.min(i(o).decimals, 4), p.ROUND_DOWN),
      maxBorrowableAmountWithBufferDecimal: u
        .mul(1 - We(At))
        .toDecimalPlaces(Math.min(i(o).decimals, 4), p.ROUND_DOWN),
    };
  },
  { formatUsd: St, formatPercent: pe } = ye,
  ns = ({ maxLtv: e, currentLtv: t }) =>
    l.jsx('div', {
      className: D.root,
      'data-sentry-component': 'InsufficientBorrowPowerTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: l.jsxs('div', {
        className: D.item,
        children: [
          l.jsxs('div', {
            className: D.title,
            children: [
              l.jsx(z, {
                'data-sentry-element': 'CapacityLimitIcon',
                'data-sentry-source-file': 'index.tsx',
              }),
              l.jsx(T, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Insufficient Borrow Power ',
              }),
            ],
          }),
          l.jsxs('div', {
            className: D.row,
            children: [
              l.jsx(T, {
                fs: 14,
                lh: 18,
                color: 'grey',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Available Borrow Power',
              }),
              l.jsx(T, {
                fs: 14,
                lh: 18,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: St(0),
              }),
            ],
          }),
          l.jsxs('div', {
            className: D.row,
            children: [
              l.jsx(T, {
                fs: 14,
                lh: 18,
                color: 'grey',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Current / Max LTV',
              }),
              l.jsx(T, {
                fs: 14,
                lh: 18,
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: ''.concat(pe(t * 100), '/').concat(pe(e * 100)),
              }),
            ],
          }),
        ],
      }),
    }),
  { formatShortName: $ } = ye,
  rs = ({ tokenMint: e, resetsInMinutes: t, borrowAmount: o, dailyCapFilled: a, dailyCap: n }) => {
    const { getToken: i } = F(),
      { symbol: s } = i(e),
      u = a.plus(o),
      c = t.lte(new p(0)) ? n : p.max(n.minus(a), 0);
    return l.jsxs('div', {
      className: D.root,
      'data-sentry-component': 'DailyBorrowCapacityTooltip',
      'data-sentry-source-file': 'DailyBorrowCapacityTooltip.tsx',
      children: [
        a.gte(n) &&
          l.jsxs('div', {
            className: D.item,
            children: [
              l.jsxs('div', {
                className: D.title,
                children: [l.jsx(z, {}), l.jsxs(T, { children: [s, ' Daily Borrow Cap Reached'] })],
              }),
              l.jsxs('div', {
                className: D.row,
                children: [
                  l.jsx(T, { fs: 14, lh: 18, color: 'grey', children: 'Current / Cap' }),
                  l.jsx(T, {
                    fs: 14,
                    lh: 18,
                    children: ''.concat($(a.toNumber()), '/').concat($(n)),
                  }),
                ],
              }),
              l.jsxs('div', {
                className: D.row,
                children: [
                  l.jsx(T, { fs: 14, lh: 18, color: 'grey', children: 'Resets in' }),
                  l.jsx(T, {
                    fs: 14,
                    lh: 18,
                    children: ''.concat(p.max(t, 0).toString(), ' minutes'),
                  }),
                ],
              }),
            ],
          }),
        u.gte(n) &&
          !a.gte(n) &&
          l.jsxs('div', {
            className: D.item,
            children: [
              l.jsxs('div', {
                className: D.title,
                children: [l.jsx(z, {}), l.jsx(T, { children: 'Borrow Exceeds Daily Cap' })],
              }),
              l.jsxs('div', {
                className: D.row,
                children: [
                  l.jsx(T, { fs: 14, lh: 18, color: 'grey', children: 'Capacity Remaining' }),
                  l.jsx(T, { fs: 14, lh: 18, children: ''.concat($(c), ' ').concat(s) }),
                ],
              }),
              l.jsxs('div', {
                className: D.row,
                children: [
                  l.jsx(T, { fs: 14, lh: 18, color: 'grey', children: 'Resets in' }),
                  l.jsx(T, {
                    fs: 14,
                    lh: 18,
                    children: ''.concat(p.max(t, 0).toString(), ' minutes'),
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  It = ({ onSuccess: e = re, onCloseSetupModal: t = re }) => {
    const { walletPublicKey: o, wallet: a } = Q(),
      n = Z(),
      { addNotification: i, updateTxByIndex: s } = Ge(),
      { signAllTransactions: u } = nt(),
      { createVersionedTxWithBudgetIxns: c } = rt(),
      { web3client: d } = Ke(),
      r = ''.concat($e.LENDING.MULTIPLY.BASE, ':setupAccount'),
      { kaminoSdk: x } = Ue(),
      v = je(),
      { updateProviderParams: g } = Xe,
      h = ({ previousBlockhash: m, queryKey: f }) => {
        if (!d) throw new Error('Web3client is not loaded');
        let w = 0;
        const S = setInterval(() => {
          w >= 9 && clearInterval(S);
          try {
            d.sendConnection.getLatestBlockhash('confirmed').then((y) => {
              y.blockhash !== m.blockhash && (n.invalidateQueries(f), clearInterval(S));
            });
          } catch (y) {
            console.error('Error while checking for new block:', y);
          }
          w += 1;
        }, 500);
      },
      C = ke(
        async ({ txsIxns: m, queryKey: f }) => {
          if (!d) throw new Error('Web3client is not loaded');
          if (!o || !a) throw new Error('Wallet is not connected');
          if (!x) throw new Error('Kamino SDK is not loaded');
          const w = [],
            S = [];
          for (let b = 0; b < m.length; b++) {
            const A = m[b];
            if (A.length > 0) {
              const E = await c({ ixns: A, defaultCu: 3e5 });
              w.push(E), S.push('Setup '.concat(w.length));
            }
          }
          const y = [];
          if (w.length > 0) {
            ne(r), i({ id: r, transactions: S.map((A) => ({ label: A, status: V.Pending })) });
            const b = await u(w);
            for (let A = 0; A < b.length; A++) {
              const E = await st({
                mainConnection: d.sendConnection,
                extraConnections: d.sendConnectionsExtra,
                signedTx: b[A],
                commitment: 'confirmed',
                mixpanel: v,
              });
              y.push(E), s(r, A, { status: V.Success });
            }
            s(r, b.length, { status: V.Success });
          }
          return { txids: y, queryKey: f };
        },
        {
          onMutate: () => {
            g({ isTransactionInProgress: !0 }),
              U({ message: 'Setting up Account', type: 'loading', key: r });
          },
          onSuccess: async (m) => {
            if (!d) throw new Error('Web3client is not loaded');
            const { txids: f, queryKey: w } = m;
            U({ type: 'success', key: r, message: 'Setup account succeeded!', txids: f || [] });
            const S = await d.sendConnection.getLatestBlockhash('confirmed');
            h({ previousBlockhash: S, queryKey: w }), e();
          },
          onError: (m) => {
            Ve(m),
              ne(r),
              U({
                message: 'Failed to setup account',
                description: tt(m, 'Setup account failed'),
                type: 'error',
                errorTxId: m.txId,
                walletPublicKey: o,
              });
          },
          onSettled: () => {
            t(), g({ isTransactionInProgress: !1 });
          },
        }
      );
    return { onSetupAccount: C.mutate, isLoading: C.isLoading };
  };
function os({
  leverageType: e,
  collTokenMint: t,
  debtTokenMint: o,
  setupIxns: a,
  walletPublicKey: n,
}) {
  const { isOpen: i, onCloseModal: s, onOpenModal: u } = ot(),
    { onSetupAccount: c } = It({ onSuccess: () => {}, onCloseSetupModal: s });
  return {
    handleSetupAccount: () => {
      c({
        txsIxns: a,
        queryKey: W.getUserLutAndSetupIxns(n != null ? n : '', e, t || '', o || ''),
      }),
        u();
    },
    isSetupModalOpened: i,
    onCloseSetupModal: s,
  };
}
const Tt = 10;
function as({
  debtToCollPriceFromQuote: e,
  collToDebtPriceFromQuote: t,
  jupiterQuote: o,
  collTokenMint: a,
  pythHermesPrices: n,
  getPriceByTokenMintDecimal: i,
  getToken: s,
  stakeRates: u,
}) {
  const { inputMint: c, outputMint: d, inAmount: r, otherAmountThreshold: x } = o,
    v = at({
      inputMint: c,
      outputMint: d,
      stakeRates: u,
      inputOraclePrice: new p((n == null ? void 0 : n[c]) || i(c)),
      outputOraclePrice: new p((n == null ? void 0 : n[d]) || i(d)),
      solOraclePrice: new p((n == null ? void 0 : n[oe]) || i(oe)),
    }),
    g = new p(1).div(e).add(t).div(2);
  return it({
    inputToOutputMarketPrice: a === c ? g : new p(1).div(g),
    inputToOutputTheoreticalPrice: v,
    inputAmount: L.lamportsToNumberDecimal(r, s(c).decimals),
    outputAmount: L.lamportsToNumberDecimal(x, s(d).decimals),
  });
}
async function Lt({
  kswapSdk: e,
  walletPublicKey: t,
  collTokenMint: o,
  debtTokenMint: a,
  leverage: n,
  priceDebtToColl: i,
  priceCollToDebt: s,
  currentSlot: u,
  slippage: c,
  market: d,
  obligation: r,
  leverageType: x,
  getToken: v,
  specificProps: g,
}) {
  const h = async (w, S) => {
      const y = await xe.getBestRoute({
          kswapSdk: e,
          amountLamports: new p(w.inputAmountLamports || 0),
          inputMint: w.inputMint,
          outputMint: w.outputMint,
          slippage: et(c, !0).toNumber(),
          mode: 'ExactIn',
          onlyDirectRoutes: !1,
          klendAccounts: S,
          asLegacyTransaction: !1,
          excludeDexes: void 0,
          restrictIntermediateTokens: x === 'multiply',
          userPublicKey: t,
          withMoreMaxAccounts: !0,
        }),
        b = L.lamportsToNumberDecimal(new p(y.inAmount), v(y.inputMint).decimals);
      return {
        priceAInB: L.lamportsToNumberDecimal(
          new p(y.otherAmountThreshold),
          v(y.outputMint).decimals
        ).div(b),
        quoteResponse: y,
      };
    },
    I = async (w) => Promise.resolve(w.toString() === o ? s : i),
    C = async (w) => Promise.resolve(he(v(w).symbol)),
    m = {
      owner: new M(t),
      debtTokenMint: new M(a),
      collTokenMint: new M(o),
      kaminoMarket: d,
      slippagePct: c,
      currentSlot: u,
      referrer: M.default,
      quoteBufferBps: new p(0),
      kamino: void 0,
      isKtoken: C,
      quoter: h,
      useV2Ixs: !0,
      priceAinB: I,
    },
    f = await (async () => {
      var w, S, y, b;
      switch (g.formType) {
        case 'adjustLeverage': {
          if (!r) throw new Error('No obligation found. Please, refresh the page and try again');
          const A =
              (S = (w = r.deposits.values().next().value) == null ? void 0 : w.amount) != null
                ? S
                : O,
            E =
              (b = (y = r.borrows.values().next().value) == null ? void 0 : y.amount) != null
                ? b
                : O;
          return L.getAdjustLeverageSwapInputs(
            N(R({}, m), {
              depositedLamports: A,
              borrowedLamports: E,
              priceCollToDebt: s,
              priceDebtToColl: i,
              targetLeverage: n,
              obligation: r,
            })
          );
        }
        case 'deposit': {
          const { amount: A, selectedTokenMint: E, elevationGroupOverride: j } = g;
          return L.getDepositWithLeverageSwapInputs(
            N(R({}, m), {
              depositAmount: new p(A),
              priceDebtToColl: i,
              obligation: null,
              referrer: M.default,
              targetLeverage: n,
              selectedTokenMint: new M(E),
              obligationTypeTagOverride:
                x === 'multiply' ? L.ObligationTypeTag.Multiply : L.ObligationTypeTag.Leverage,
              elevationGroupOverride: j,
            })
          );
        }
        case 'withdraw': {
          if (!r) throw new Error('No obligation found. Please, refresh the page and try again');
          const { amount: A, selectedTokenMint: E, deposited: j, borrowed: P, maxAmount: q } = g;
          return L.getWithdrawWithLeverageSwapInputs(
            N(R({}, m), {
              withdrawAmount: new p(A),
              deposited: new p(j),
              borrowed: new p(P),
              priceCollToDebt: s,
              selectedTokenMint: new M(E),
              isClosingPosition: ze(q, new p(A)),
              obligation: r,
            })
          );
        }
        case 'repayWithCollateral': {
          if (!r) throw new Error('No obligation found. Please, refresh the page and try again');
          const { amount: A, getComputeBudgetAndPriorityFeeIxns: E } = g,
            j = await E({ units: 14e5, ixns: [] });
          return L.getRepayWithCollSwapInputs(
            N(R({}, m), {
              repayAmount: new p(A),
              budgetAndPriorityFeeIxs: j,
              referrer: M.default,
              isClosingPosition: !1,
              obligation: r,
            })
          );
        }
        default:
          throw new Error('Unsupported form type');
      }
    })();
  return {
    initialInputs: f.initialInputs,
    flashLoanInfo: f.flashLoanInfo,
    inputAmountLamports: f.swapInputs.inputAmountLamports,
  };
}
function Mt({
  marketAddress: e,
  obligation: t,
  slippage: o,
  debtTokenMint: a,
  collTokenMint: n,
  leverage: i,
  leverageType: s,
  specificProps: u,
}) {
  const { kswapSdk: c } = lt(),
    d = le({ inputMint: a, outputMint: n, enabled: !1 }),
    r = le({ inputMint: n, outputMint: a, enabled: !1 }),
    x = K({ enabled: !1 }),
    { getMarketByAddress: v } = _(),
    { getToken: g } = F(),
    { walletPublicKey: h } = Q(),
    I = Ye(),
    C = v(e);
  return async () => {
    if (!I) throw new Error('Scope is not loaded');
    if (!c) throw new Error('Kswap SDK is not initialized. Please, refresh the page and try again');
    if (Y(h)) throw new Error('Wallet not connected');
    const [m, f, w] = await Promise.all([d.refetch(), r.refetch(), x.refetch()]);
    if (!m.data || !f.data || !w.data) throw new Error('price impact fetches failed');
    const S = new p(m.data),
      y = new p(f.data),
      b = w.data,
      {
        initialInputs: A,
        flashLoanInfo: E,
        inputAmountLamports: j,
      } = await Lt({
        kswapSdk: c,
        walletPublicKey: h,
        collTokenMint: n,
        debtTokenMint: a,
        slippage: o,
        market: C,
        priceDebtToColl: S,
        priceCollToDebt: y,
        currentSlot: b,
        leverage: new p(i),
        leverageType: s,
        obligation: t,
        getToken: g,
        specificProps: u,
      }),
      P = A.swapQuote.quoteResponse;
    if (!P) throw new Error('Something went wrong');
    return {
      currentSlot: b,
      priceDebtToColl: S,
      priceCollToDebt: y,
      jupiterQuote: P,
      flashLoanInfo: E,
      inputAmountLamports: j,
    };
  };
}
function is({
  marketAddress: e,
  obligation: t,
  slippage: o,
  debtTokenMint: a,
  collTokenMint: n,
  leverage: i,
  leverageType: s,
  enabled: u,
  specificProps: c,
}) {
  const d = s === 'multiply' && n !== 'HUBsveNpjo5pWqNkH57QzxjQASdTVXcSK7bVKTSZtcSX',
    r = ce({
      inputMint: a,
      outputMint: n,
      enabled: !1,
      onlyDirectRoutes: !1,
      restrictIntermediateTokens: d,
    }),
    x = ce({
      inputMint: n,
      outputMint: a,
      enabled: !1,
      onlyDirectRoutes: !1,
      restrictIntermediateTokens: d,
    }),
    v = Mt({
      marketAddress: e,
      obligation: t,
      slippage: o,
      debtTokenMint: a,
      collTokenMint: n,
      leverage: i,
      leverageType: s,
      specificProps: c,
    }),
    g = async () => {
      const [h, I, C] = await Promise.all([v(), r.refetch(), x.refetch()]);
      if (!I.data || !C.data) throw new Error('price impact second fetches failed');
      return {
        priceCollToDebt: h.priceCollToDebt,
        priceDebtToColl: h.priceDebtToColl,
        currentSlot: h.currentSlot,
        jupiterQuote: h.jupiterQuote,
        flashLoanInfo: h.flashLoanInfo,
        debtToCollPriceFromQuote: I.data,
        collToDebtPriceFromQuote: C.data,
        inputAmountLamports: h.inputAmountLamports,
      };
    };
  return Re({
    queryKey: W.getPriceImpactRequiredData({
      marketAddress: e,
      debtTokenMint: a,
      collTokenMint: n,
      leverage: i,
      slippage: o,
      amount: c.formType !== 'adjustLeverage' ? c.amount : void 0,
    }),
    queryFn: g,
    refetchInterval: Tt * 1e3,
    enabled: u,
    keepPreviousData: !1,
  });
}
const ls = {
    priceImpactBps: O,
    theoreticalPriceDivergenceBps: O,
    marketPrice: O,
    theoreticalPrice: O,
  },
  Ct = '_root_x32i6_1',
  Et = '_grey_x32i6_11',
  Dt = '_titleWrapper_x32i6_14',
  fe = { root: Ct, grey: Et, titleWrapper: Dt };
function jt(e) {
  return e === 'leverage'
    ? 'Account setup for Long/Short. Once created, all \n Long/Short transactions will be one-click.'
    : e === 'multiply'
      ? 'Account setup for Multiply. Once created, all \n Multiply transactions will be one-click.'
      : e === 'vanilla'
        ? 'Account setup for Repay with Collateral. Once created, all \n Repay with Collateral transactions will be one-click.'
        : '';
}
const cs = ({ isOpen: e, contentType: t, onClose: o }) =>
  l.jsx(Ze, {
    isOpen: e,
    onClose: o,
    isFluid: !0,
    'data-sentry-element': 'Modal',
    'data-sentry-component': 'AccountSetupModal',
    'data-sentry-source-file': 'AccountSetupModal.tsx',
    children: l.jsxs('div', {
      className: fe.root,
      children: [
        l.jsxs('div', {
          className: fe.titleWrapper,
          children: [
            l.jsx(Je, {
              'data-sentry-element': 'Spinner',
              'data-sentry-source-file': 'AccountSetupModal.tsx',
            }),
            l.jsx(T, {
              color: 'white',
              fs: 20,
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'AccountSetupModal.tsx',
              children: 'Account Setup In Progress',
            }),
          ],
        }),
        l.jsx(T, {
          color: 'grey',
          'data-sentry-element': 'Text',
          'data-sentry-source-file': 'AccountSetupModal.tsx',
          children: jt(t),
        }),
      ],
    }),
  });
export {
  cs as A,
  rs as D,
  ls as E,
  ns as I,
  Tt as P,
  Yt as a,
  Xt as b,
  Jt as c,
  ts as d,
  Zt as e,
  zt as f,
  Vt as g,
  as as h,
  is as i,
  $t as j,
  os as k,
  ss as l,
  Ht as m,
  es as n,
  vt as o,
  It as p,
  D as s,
  xt as u,
};
//# sourceMappingURL=AccountSetupModal-D8zYiEdP.js.map
