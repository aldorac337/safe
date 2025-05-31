var Zn = Object.defineProperty,
  eo = Object.defineProperties;
var to = Object.getOwnPropertyDescriptors;
var jt = Object.getOwnPropertySymbols;
var Vs = Object.prototype.hasOwnProperty,
  qs = Object.prototype.propertyIsEnumerable;
var Ws = (e, s, n) =>
    s in e ? Zn(e, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[s] = n),
  ge = (e, s) => {
    for (var n in s || (s = {})) Vs.call(s, n) && Ws(e, n, s[n]);
    if (jt) for (var n of jt(s)) qs.call(s, n) && Ws(e, n, s[n]);
    return e;
  },
  Ce = (e, s) => eo(e, to(s));
var rt = (e, s) => {
  var n = {};
  for (var o in e) Vs.call(e, o) && s.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && jt) for (var o of jt(e)) s.indexOf(o) < 0 && qs.call(e, o) && (n[o] = e[o]);
  return n;
};
import {
  P as z,
  ak as so,
  bO as no,
  r as v,
  f as me,
  D as P,
  a1 as oo,
  t as Be,
  aZ as Nt,
  S as ao,
  E as zs,
  F as Os,
  j as t,
  l as ro,
  a5 as Et,
  a8 as Us,
  T as io,
} from './vendor-DpenelXu.js';
import {
  m as ke,
  bi as Ie,
  k as ve,
  e as He,
  o as oe,
  c1 as ft,
  c8 as $e,
  ch as lo,
  u as de,
  dY as co,
  a as Gt,
  aa as ys,
  c as xe,
  d as Wt,
  n as Le,
  p as re,
  N as pe,
  an as Vt,
  a_ as qt,
  l as Me,
  aj as kt,
  dW as Ae,
  Q as Tt,
  a8 as xn,
  f as $,
  D as yn,
  h as St,
  dZ as _t,
  d_ as uo,
  dX as mo,
  cf as po,
  ce as vt,
  b_ as go,
  j as bn,
  aQ as mt,
  dG as zt,
  q as bs,
  al as Ft,
  d$ as wn,
  dR as fo,
  s as Ks,
  a$ as vn,
  b1 as ws,
  d4 as ho,
  ab as ms,
  a3 as xo,
  a4 as yo,
  a7 as bo,
  a5 as wo,
} from './index-DTTOaJYD.js';
import {
  a as Ot,
  b as We,
  j as vs,
  c as Ye,
  d as Ln,
  g as Tn,
  D as vo,
  e as Ut,
  f as Ls,
  h as Je,
  i as Kt,
  E as Qt,
  k as Ht,
  P as Yt,
  A as Jt,
  l as Lo,
  m as To,
  I as So,
  n as _o,
} from './AccountSetupModal-D8zYiEdP.js';
import { g as Xe, P as Ts } from './priceImpact-CmilBeVd.js';
import { t as Xt, s as Zt } from './tryAnchorErrorMessageOr-DSgtA69k.js';
import { u as Ao } from './useMultiplyVault-7MQekXRJ.js';
import { u as es } from './useLastPostionUpdate-BkWy-FVT.js';
import { u as Mo } from './useBalanceDeltaAfterTxn-BIYtQiQS.js';
import { c as Ss } from './transactions-CLlU6wy2.js';
import { u as ts } from './useBudgetAndPriorityFeeIxns-G3EwBVgx.js';
import {
  f as ht,
  m as Ne,
  h as Ze,
  g as et,
  T as ss,
  L as At,
  F as xt,
  W as Ee,
  R as Co,
  a as Io,
} from './TransactionSettingButton-C7bSz3pz.js';
import { u as _s } from './useKswapSdk-CDkxmQxX.js';
import { u as tt } from './useLoadBalances-z8VNqvnR.js';
import { S as ye, u as Sn, F as _n } from './FirstDepositInfoModal--RuvdDVE.js';
import {
  s as Z,
  e as As,
  C as Ms,
  f as An,
  d as ns,
  u as os,
  P as as,
  g as rs,
  h as jo,
} from './useGetLSTsStakeRatesQuery-CbRJCwww.js';
import { C as Cs } from './CapacityLimitIcon-71duaemc.js';
import { a as Rt, u as Po } from './types-Cset0n2O.js';
import { s as it } from './DepositForm.module-CaastT4u.js';
import { b as Do, a as Mn, S as is } from './labels-J3WqV6AO.js';
import { g as $o } from './getNetApyTextColor-BZC_rP73.js';
import { u as Bo } from './useTermsSignatureIxn-D6FK9aBZ.js';
import { u as Qs } from './useJupiterPriceQuery-C00Tb9hf.js';
import { B as ko } from './BlockTitle-BdyISeM8.js';
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
      (e._sentryDebugIds[s] = '3b10a9b9-3265-436c-bdaa-f808cbdc216b'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-3b10a9b9-3265-436c-bdaa-f808cbdc216b'));
  } catch (n) {}
})();
function Is(e) {
  return async (s) => {
    typeof s == 'string' && (s = new z(s));
    const [n] = z.findProgramAddressSync(
        [so.Buffer.from('authority'), s.toBuffer()],
        e.getProgramID()
      ),
      o = await e.getConnection().getAccountInfo(s);
    if (!o) throw new Error('Mint info not found');
    const a = no(s, o, o.owner);
    return a.mintAuthority !== null && a.mintAuthority.equals(n);
  };
}
var ne = ((e) => (
    (e.manageCollateral = 'Manage Collateral'),
    (e.manageDebt = 'Manage Debt'),
    (e.withdraw = 'Withdraw'),
    (e.adjust = 'Adjust'),
    (e.deposit = 'Deposit'),
    (e.closePosition = 'Close Position'),
    (e.openLoanDashboard = 'Open Loan Dashboard'),
    (e.openPosition = 'Open Position'),
    (e.manageSize = 'Manage Size'),
    (e.manageLeverage = 'Manage Leverage'),
    (e.repayDebt = 'Repay Debt'),
    (e.topUpCollateral = 'Top Up Collateral'),
    e
  ))(ne || {}),
  Lt = ((e) => (
    (e.addCollateral = 'Add Collateral'), (e.withdrawCollateral = 'Withdraw Collateral'), e
  ))(Lt || {}),
  pt = ((e) => ((e.borrowMore = 'Borrow More'), (e.repayDebt = 'Repay Debt'), e))(pt || {}),
  _e = ((e) => (
    (e.openLong = 'Open Long'),
    (e.openShort = 'Open Short'),
    (e.sizeIncrease = 'Deposit'),
    (e.sizeDecrease = 'Withdraw'),
    (e.repayDebt = 'Repay Debt'),
    (e.manageLeverage = 'Manage Leverage'),
    (e.topUpCollateral = 'Top Up Collateral'),
    (e.closePosition = 'Close Position'),
    e
  ))(_e || {});
const Fo = ({
  collateralAmountChange: e = 0,
  debtAmountChange: s = 0,
  depositAmount: n,
  withdrawAmount: o,
  deposited: a,
  borrowed: r,
  debtTokenMint: c,
  selectedTokenMint: i,
  collTokenMint: d,
  targetLeverage: p,
  activeTab: m,
  borrowFactor: h,
  marketAddress: l,
}) => {
  const { getPriceByTokenMintDecimal: u, isFetched: f } = ke(),
    { getReserveByAddress: S } = Ie(),
    { getReserveByTokenMint: A } = Ie(),
    { getMarketByAddress: w } = ve(),
    b = w(l),
    { data: D } = Qs({ inputMint: d, outputMint: c }),
    { data: L } = Qs({ inputMint: c, outputMint: d }),
    M = A(b.getAddress(), c);
  if (!M) throw new Error('Borrow reserve not found');
  const j = S(M.address),
    [N, T] = v.useState(null);
  return (
    v.useEffect(() => {
      const y = async (g) => Promise.resolve(u(g));
      if (m !== ne.manageDebt && m !== ne.manageCollateral) {
        me.calculateMultiplyEffects(y, {
          depositAmount: new P(n),
          withdrawAmount: new P(o),
          deposited: new P(a),
          borrowed: new P(r),
          selectedTokenMint: new z(i),
          debtTokenMint: new z(c),
          collTokenMint: new z(d),
          targetLeverage: new P(p),
          activeLeverageOption: m === ne.closePosition ? me.LeverageOption.close : m,
          flashLoanFeeRatio: new P((j == null ? void 0 : j.getFlashLoanFee()) || 0),
          debtBorrowFactorPct: new P(h * 100),
          priceCollToDebt: new P(D),
          priceDebtToColl: new P(L),
        })
          .then((g) => T(g))
          .catch(He);
        return;
      }
      Ro(y, new P(e), new P(s), new P(a), new P(r), new z(c), new z(d), new P(h * 100))
        .then((g) => T(g))
        .catch(He);
    }, [m, n, o, p, a, r, i, f, e, s, h, l, d, c, j, u, D, L]),
    N
  );
};
async function Ro(e, s, n, o, a, r, c, i) {
  const d = o.add(s),
    p = a.add(n),
    m = await e(r),
    l = (await e(c)).mul(d),
    u = m.mul(p),
    f = l.minus(u),
    S = f.div(m),
    A = u.mul(i.div(100)).div(l);
  return {
    earned: oo.ZERO,
    totalDeposited: d,
    totalBorrowed: p,
    netValue: S,
    netValueUsd: f,
    ltv: A,
  };
}
const No = ({ vault: e, marketAddress: s }) => {
    const { getToken: n } = oe(),
      { getPriceByTokenMintDecimal: o } = ke(),
      { getReserveByTokenMint: a } = Ie(),
      { getReserveApys: r } = ft(),
      c = n(e.collTokenMint),
      i = n(e.debtTokenMint),
      d = a(s, i.address),
      { tvl: p } = $e({ reserve: d, getReserveApys: r }),
      m = lo({ collTokenMint: c.address, debtTokenMint: i.address }),
      h = v.useMemo(() => (m ? c : i), [c, i, m]),
      l = v.useMemo(() => (m ? i : c), [c, i, m]),
      u = v.useMemo(() => o(h.address), [o, h.address]);
    return { lendToken: h, borrowToken: l, isLong: m, lendPrice: u, liquidity: p };
  },
  Eo = '_root_32737_1',
  Go = '_header_32737_9',
  Wo = '_openLoanDashboardDivider_32737_17',
  Vo = '_emptyBody_32737_21',
  qo = '_emptyHeader_32737_28',
  zo = '_emptySubHeader_32737_34',
  Ge = {
    root: Eo,
    header: Go,
    openLoanDashboardDivider: Wo,
    emptyBody: Vo,
    emptyHeader: qo,
    emptySubHeader: zo,
  },
  js = { leverage: 'Long / Short', multiply: 'Multiply' },
  { formatTokenAllDecimals: Hs } = re,
  Oo = ({
    onSuccess: e = Le,
    mixpanelPrefix: s,
    marketAddress: n,
    elevationGroupOverride: o,
    getStatusMsg: a,
  }) => {
    const { walletPublicKey: r, wallet: c, signTransaction: i } = de(),
      d = Be(),
      { getToken: p } = oe(),
      { getVaultByAddress: m } = Ao({ marketAddress: n }),
      { getMarketByAddress: h } = ve(),
      { setPositionHasUpdated: l } = es(),
      { getTransactionDelta: u } = Mo(),
      { getBalanceByTokenMint: f } = co(),
      { web3client: S } = Gt(),
      A = ''.concat(pe.LENDING.MULTIPLY.BASE, ':deposit'),
      { kaminoSdk: w } = ys(),
      b = Ot({ marketAddress: n }),
      { createVersionedTxWithBudgetIxns: D, getIxns: L } = ts(),
      { getSlippage: M } = ht(),
      { kswapSdk: j } = _s(),
      { updateProviderParams: N } = Vt,
      { referrerWallet: T } = We(),
      y = async ({
        jupiterQuote: _,
        selectedTokenMint: C,
        collTokenMint: R,
        debtTokenMint: I,
        amount: B,
        targetLeverage: k,
        marketAddress: E,
        vaultType: G,
        obligation: U,
        priceDebtToColl: V,
        getPriceAinB: O,
        currentSlot: K,
      }) => {
        if (!B) throw new Error('Amount should be > 0');
        if (!S) throw new Error('Web3client is not loaded');
        if (!r || !c) throw new Error('Wallet is not connected');
        if (!w) throw new Error('Kamino SDK is not loaded');
        if (!j)
          throw new Error('Kswap SDK is not initialized. Please, refresh the page and try again');
        if (!_)
          throw new Error('Jupiter quote is not loaded. Please, reload the page and try again');
        const W = h(E),
          Y = Is(w),
          F = await L({ units: 14e5, ixns: [] }),
          H = vs,
          X = M(),
          { ixs: ae, lookupTables: ee } = await me.getDepositWithLeverageIxs({
            budgetAndPriorityFeeIxs: F,
            owner: new z(r),
            selectedTokenMint: new z(C),
            collTokenMint: new z(R),
            debtTokenMint: new z(I),
            targetLeverage: new P(k),
            kaminoMarket: W,
            depositAmount: new P(B),
            slippagePct: Ss(X, !0),
            priceDebtToColl: V,
            swapper: (Q, q, te) =>
              H(j, {
                user: new z(r),
                connection: S.connection,
                quote: te.quoteResponse,
                amountInLamports: Q.inputAmountLamports,
                isBudgetAndAtaIxnsIgnored: !0,
              }),
            referrer: T,
            isKtoken: Y,
            priceAinB: O,
            obligationTypeTagOverride:
              G === 'multiply' ? me.ObligationTypeTag.Multiply : me.ObligationTypeTag.Leverage,
            kamino: w,
            obligation: U || null,
            currentSlot: K,
            quoteBufferBps: new P(0),
            elevationGroupOverride: o,
            quoter: () => {
              const Q = Me(new P(_.inAmount), p(_.inputMint).decimals),
                te = Me(new P(_.otherAmountThreshold), p(_.outputMint).decimals).div(Q);
              return Promise.resolve({ priceAInB: te, quoteResponse: _ });
            },
            useV2Ixs: !0,
          });
        return { ixns: ae, operationLUTs: ee };
      },
      x = Nt(
        async ({
          jupiterQuote: _,
          selectedTokenMint: C,
          collTokenMint: R,
          debtTokenMint: I,
          amount: B,
          targetLeverage: k,
          depositAddress: E,
          borrowAddress: G,
          marketAddress: U,
          vaultType: V,
          lookupTablesAddresses: O,
          obligation: K,
          priceDebtToColl: W,
          getPriceAinB: Y,
          currentSlot: F,
          mutationStartNotificationText: H,
          mutationSuccessNotificationText: X,
        }) => {
          if (!B) throw new Error('Amount should be > 0');
          if (!S) throw new Error('Web3client is not loaded');
          if (!r || !c) throw new Error('Wallet is not connected');
          if (!w) throw new Error('Kamino SDK is not loaded');
          const ae = C.toString() === R.toString() ? I : R,
            ee = f(C),
            Q = f(ae);
          d.track(''.concat(s, ':vault:deposit'), {
            selectedTokenMint: C.toString(),
            collTokenMint: R.toString(),
            debtTokenMint: I.toString(),
            amount: B,
            leverage: k,
          });
          const q = await m(E, G, V);
          if (k > q.maxLeverage) throw new Error('Leverage is bigger than max');
          const { ixns: te, operationLUTs: be } = await y({
              jupiterQuote: _,
              selectedTokenMint: C,
              collTokenMint: R,
              debtTokenMint: I,
              amount: B,
              targetLeverage: k,
              depositAddress: E,
              borrowAddress: G,
              marketAddress: U,
              vaultType: V,
              lookupTablesAddresses: O,
              obligation: K,
              priceDebtToColl: W,
              getPriceAinB: Y,
              currentSlot: F,
            }),
            Te = [
              ...be.map((ue) => ue.key),
              ...b,
              ...O.map((ue) => (ue && !ue.equals(z.default) ? ue : void 0)),
            ].filter(qt),
            Pe = await D({ ixns: te, lookupTablesAddresses: Te, defaultCu: 14e5 });
          return {
            txid: await Zt({
              signTransaction: i,
              tx: Pe,
              mainConnection: S.sendConnection,
              extraConnections: S.sendConnectionsExtra,
              mixpanel: d,
            }),
            collTokenMint: R,
            debtTokenMint: I,
            amount: B,
            selectedTokenMint: C,
            preDepositBalanceSelectedToken: ee,
            preDepositBalanceOtherToken: Q,
            otherToken: ae,
            mutationStartNotificationText: H,
            mutationSuccessNotificationText: X,
            vaultType: V,
          };
        },
        {
          onMutate: ({ selectedTokenMint: _, vaultType: C, amount: R }) => {
            N({ isTransactionInProgress: !0 });
            const { symbol: I, decimals: B } = p(_),
              { message: k, description: E } = a({
                action: 'onMutate',
                amount: Hs(new P(R).toNumber(), B),
                defaults: {
                  message: 'Opening Position',
                  description: 'Depositing '.concat(I, ' into ').concat(js[C]),
                },
              });
            xe({ message: k, description: E, type: 'loading', key: A });
          },
          onSuccess: async (_) => {
            const {
                collTokenMint: C,
                debtTokenMint: R,
                txid: I,
                amount: B,
                selectedTokenMint: k,
                otherToken: E,
              } = _,
              { symbol: G } = p(C),
              { symbol: U } = p(R),
              { decimals: V } = p(k),
              { message: O, description: K } = a({
                action: 'onSuccess',
                amount: Hs(new P(B).toNumber(), V),
                defaults: {
                  message: ''.concat(G, '/').concat(U, ' position opened'),
                  description: '',
                },
              });
            if (
              (xe({
                type: 'success',
                key: A,
                message: O,
                description: K,
                txids: _ != null && _.txid ? [_.txid] : [],
              }),
              e(),
              _ && _.preDepositBalanceSelectedToken && _.preDepositBalanceOtherToken)
            ) {
              const { preDepositBalanceSelectedToken: W, preDepositBalanceOtherToken: Y } = _,
                { decimals: F, symbol: H } = p(k),
                { decimals: X, symbol: ae } = p(E),
                [ee, Q] = await Promise.all([
                  await u({
                    transactionSig: I,
                    tokenMint: k,
                    amount: B,
                    decimals: F,
                    preDepositBalance: W,
                  }),
                  await u({
                    transactionSig: I,
                    tokenMint: E,
                    amount: 0,
                    decimals: X,
                    preDepositBalance: Y,
                  }),
                ]);
              let q = '';
              ee && Q
                ? (q = ''
                    .concat(ee.toFixed(F), ' ')
                    .concat(H, ' dust and ')
                    .concat(Q.toFixed(X), ' ')
                    .concat(ae, ' dust returned to your wallet'))
                : ee
                  ? (q = ''.concat(ee.toFixed(F), ' ').concat(H, ' dust returned to your wallet'))
                  : Q &&
                    (q = ''.concat(Q.toFixed(X), ' ').concat(ae, ' dust returned to your wallet')),
                q &&
                  xe({
                    type: 'success',
                    key: A,
                    message: 'Deposit succeeded!',
                    description: q,
                    txids: I ? [I] : [],
                  });
            }
            l();
          },
          onError: (_, { amount: C }) => {
            He(_), Wt(A);
            const { message: R, description: I } = a({
              action: 'onError',
              amount: C,
              defaults: {
                message: 'Failed to deposit into the Vault',
                description: Xt(_, 'Deposit failed'),
              },
            });
            xe({
              message: R,
              description: I,
              type: 'error',
              errorTxId: _.txId,
              walletPublicKey: r,
            });
          },
          onSettled: () => {
            N({ isTransactionInProgress: !1 });
          },
        }
      );
    return { onDeposit: x.mutate, isLoading: x.isLoading };
  },
  Cn = ({ leverage: e, onLeverageUpdate: s, obligation: n }) => {
    const o = kt(n) ? Ae : n == null ? void 0 : n.refreshedStats.leverage.toNumber(),
      a = v.useCallback(
        (r) => {
          s({ leverage: r });
        },
        [s]
      );
    return { initLeverage: o, leverage: e || o, setLeverage: a };
  },
  Uo = { userLookupTable: z.default, setupIxns: [] },
  ls = ({ vaultType: e, collTokenMint: s, debtTokenMint: n, marketAddress: o }) => {
    const { walletPublicKey: a } = de(),
      { referrerWallet: r } = We(),
      { getMarketByAddress: c } = ve(),
      i = c(o),
      d = async () => {
        if (!a || !o) return;
        const l = [],
          u = [];
        e === 'leverage'
          ? u.push({ coll: new z(s), debt: new z(n) })
          : e === 'multiply' && l.push({ coll: new z(s), debt: new z(n) });
        const [f, S] = await me.getUserLutAddressAndSetupIxs(i, new z(a), r, !0, l, u),
          A = S.filter((w) => w.some((b) => b !== void 0));
        return { userLookupTable: f, setupIxns: A };
      },
      h = ao({
        queryKey: Tt.getUserLutAndSetupIxns(
          a || '-',
          e,
          (s == null ? void 0 : s.toString()) || '',
          (n == null ? void 0 : n.toString()) || ''
        ),
        enabled: !!a && !!o,
        queryFn: d,
        onError: (l) => {
          He(l), xe({ message: 'Failed to load user lut address and setup ixns', type: 'error' });
        },
      }),
      { data: p } = h,
      m = rt(h, ['data']);
    return ge({ data: p || Uo }, m);
  },
  Ko = {},
  Qo = () => {
    const o = xn(),
      { data: e } = o,
      s = rt(o, ['data']),
      n = v.useMemo(() => (e == null ? void 0 : e.multiplyLUTsPairs) || Ko, [e]);
    return ge({ data: n || n }, s);
  },
  Ho = {},
  Yo = () => {
    const o = xn(),
      { data: e } = o,
      s = rt(o, ['data']),
      n = v.useMemo(() => (e == null ? void 0 : e.leverageLUTs) || Ho, [e]);
    return ge({ data: n || n }, s);
  },
  Jo = [],
  Ps = ({ leverageType: e, collTokenMint: s, debtTokenMint: n, marketAddress: o }) => {
    const {
        data: { userLookupTable: a },
        isFetched: r,
        isLoading: c,
      } = ls({ vaultType: e, collTokenMint: s, debtTokenMint: n, marketAddress: o.toString() }),
      { data: i, isFetched: d, isLoading: p } = Qo(),
      { data: m, isFetched: h, isLoading: l } = Yo();
    return {
      data:
        v.useMemo(() => {
          const w = (i[s.toString()] || {})[n.toString()] || [],
            b = [m[''.concat(n.toString(), '-').concat(s.toString())] || void 0];
          return (
            e === 'multiply' &&
              !w.length &&
              zs((L) => {
                L.setExtra('collTokenMint', s.toString()),
                  L.setExtra('debtTokenMint', n.toString()),
                  L.setExtra('product', 'multiply'),
                  Os('Missing LUT');
              }),
            e === 'leverage' &&
              !b[0] &&
              zs((L) => {
                L.setExtra('collTokenMint', s.toString()),
                  L.setExtra('debtTokenMint', n.toString()),
                  L.setExtra('product', 'leverage'),
                  Os('Missing LUT');
              }),
            (e === 'multiply' ? [...w, a] : [...b, a])
              .map((L) => (L ? new z(L) : void 0))
              .map((L) => (L && !L.equals(z.default) ? L : void 0))
              .filter(qt)
          );
        }, [s, n, m, e, i, a]) || Jo,
      isLoading: c || p || l,
      isFetched: r && d && h,
    };
  },
  { formatTokenAllDecimals: Ys } = re,
  Ds = ({ borrowTokenMint: e, liquidityAvailable: s, liquidityRequired: n }) => {
    const { getToken: o } = oe(),
      { symbol: a } = o(e);
    return t.jsxs('div', {
      className: Z.root,
      'data-sentry-component': 'InsufficientLiquidityTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: [
        t.jsxs('div', {
          className: Z.item,
          children: [
            t.jsxs('div', {
              className: Z.title,
              children: [
                t.jsx(Cs, {
                  'data-sentry-element': 'CapacityLimitIcon',
                  'data-sentry-source-file': 'index.tsx',
                }),
                t.jsxs($, {
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: ['Insufficient ', a, ' Liquidity'],
                }),
              ],
            }),
            t.jsxs('div', {
              className: Z.row,
              children: [
                t.jsx($, {
                  fs: 14,
                  lh: 18,
                  color: 'grey',
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: 'Liquidity Available',
                }),
                t.jsxs($, {
                  fs: 14,
                  lh: 18,
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: [Ys(s, 4), ' ', a],
                }),
              ],
            }),
            s > 0 &&
              t.jsxs('div', {
                className: Z.row,
                children: [
                  t.jsx($, {
                    fs: 14,
                    lh: 18,
                    color: 'grey',
                    weight: 'medium',
                    children: 'Liquidity Required',
                  }),
                  t.jsxs($, { fs: 14, lh: 18, weight: 'medium', children: [Ys(n, 4), ' ', a] }),
                ],
              }),
          ],
        }),
        t.jsx(yn, {
          className: Z.divider,
          'data-sentry-element': 'Divider',
          'data-sentry-source-file': 'index.tsx',
        }),
        t.jsx('div', {
          className: Z.item,
          children: t.jsxs($, {
            fs: 14,
            lh: 18,
            color: 'grey',
            weight: 'regular',
            'data-sentry-element': 'Text',
            'data-sentry-source-file': 'index.tsx',
            children: ['More ', a, ' Supply required in Kamino Lend'],
          }),
        }),
      ],
    });
  },
  { formatPercent: ps } = re,
  $s = ({ currentSlippage: e, optimalSlippagePct: s }) =>
    t.jsx('div', {
      className: Z.root,
      'data-sentry-component': 'SlippageTooHighTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: t.jsxs('div', {
        className: Z.item,
        children: [
          t.jsxs('div', {
            className: Z.title,
            children: [
              t.jsx(St, {
                name: 'WarningInfo',
                size: 18,
                color: 'yellow',
                'data-sentry-element': 'Icon',
                'data-sentry-source-file': 'index.tsx',
              }),
              t.jsxs($, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [' Slippage Setting Is Above ', ps(s)],
              }),
            ],
          }),
          t.jsxs('div', {
            className: Z.row,
            children: [
              t.jsx($, {
                fs: 14,
                lh: 18,
                color: 'grey',
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Current',
              }),
              t.jsx($, {
                fs: 14,
                lh: 18,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: ps(e),
              }),
            ],
          }),
          !kt(s) &&
            t.jsxs('div', {
              className: Z.row,
              children: [
                t.jsx($, {
                  fs: 14,
                  lh: 18,
                  color: 'grey',
                  weight: 'medium',
                  children: 'Recommended',
                }),
                t.jsxs($, { fs: 14, lh: 18, weight: 'medium', children: ['<', ps(s)] }),
              ],
            }),
        ],
      }),
    }),
  In = new P(0),
  Js = { maxBorrowableAmountDecimal: In, elevationGroup: 0 },
  jn = ({ marketAddress: e, collReserveAddress: s, debtReserveAddress: n }) => {
    const { getReserveByAddress: o } = Ie(),
      { getMarketByAddress: a } = ve(),
      { data: r } = _t({ commitment: 'processed' });
    return v.useMemo(() => {
      if (!r || !s || !n) return Js;
      const c = a(e),
        i = o(s),
        d = o(n),
        p = c.getElevationGroupsForReservesCombination([i.address], d.address),
        m = ro.uniq([...p.map((l) => l.elevationGroup), 0]),
        h = d.getLiquidityAvailableForDebtReserveGivenCaps(c, m);
      for (let l = 0; l < h.length; l++)
        if (h[l].gt(In))
          return {
            maxBorrowableAmountDecimal: me.lamportsToNumberDecimal(h[l], d.stats.decimals),
            elevationGroup: m[l],
          };
      return Js;
    }, [s, r, n, a, o, e]);
  },
  gs = new P(0),
  Pn = ({ marketAddress: e, collReserveAddress: s, debtReserveAddress: n }) => {
    const { getToken: o } = oe(),
      { getReserveByAddress: a } = Ie(),
      { getMarketByAddress: r } = ve(),
      { data: c } = _t({ refetchInterval: 10 * 1e3, commitment: 'processed' }),
      [i, d] = v.useState(gs);
    return (
      v.useEffect(() => {
        if (!c || !s || !n) {
          d(gs);
          return;
        }
        const p = r(e),
          m = a(s),
          h = a(n),
          l = o(h.getLiquidityMint());
        p.getMaxLeverageBorrowableAmount(m, h, c, !0)
          .then((u) => {
            d(Me(u, l.decimals));
          })
          .catch((u) => {
            console.error('currentSlot', u), d(gs);
          });
      }, [s, c, n, r, a, o, e]),
      { maxBorrowableAmountDecimal: i }
    );
  },
  ie = (e, s) => ''.concat(e).concat(uo(s) ? '' : '/'.concat(s)),
  le = (e) => ''.concat(e ? 'long' : 'short'),
  Xo = {
    [_e.openLong]: {
      onMutate: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Opening '.concat(ie(s, n), ' ').concat(le(e), ' '),
        description: 'Depositing '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' opened'),
        description: 'Successfully deposited '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: s, quoteSymbol: n, defaults: o }) => ({
        message: 'Opening '.concat(ie(s, n), ' ').concat(le(e), ' failed'),
        description: o.description,
      }),
    },
    [_e.openShort]: {
      onMutate: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Opening '.concat(ie(s, n), ' ').concat(le(e), ' '),
        description: 'Depositing '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' opened'),
        description: 'Successfully deposited '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: s, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' open failed'),
        description: o.description,
      }),
    },
    [_e.closePosition]: {
      onMutate: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Closing '.concat(ie(s, n), ' ').concat(le(e), ' position'),
        description: 'Withdrawing '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' closed'),
        description: 'Successfully withdrew '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: s, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' close failed'),
        description: o.description,
      }),
    },
    [_e.sizeIncrease]: {
      onMutate: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Increasing '.concat(ie(s, n), ' ').concat(le(e), ' size'),
        description: 'Adjusting position by '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' size managed'),
        description: 'Successfully adjusted position by '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: s, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' size manage failed'),
        description: o.description,
      }),
    },
    [_e.sizeDecrease]: {
      onMutate: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Decreasing '.concat(ie(s, n), ' ').concat(le(e), ' size'),
        description: 'Adjusting position by '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' size managed'),
        description: 'Successfully adjusted position by '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: s, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' size manage failed'),
        description: o.description,
      }),
    },
    [_e.manageLeverage]: {
      onMutate: ({ isLong: e, baseSymbol: s, quoteSymbol: n }) => ({
        message: 'Adjusting '.concat(ie(s, n), ' ').concat(le(e), ' leverage'),
        description: '',
      }),
      onSuccess: () => ({ message: 'Leverage adjusted successfully', description: '' }),
      onError: ({ isLong: e, baseSymbol: s, quoteSymbol: n, defaults: o }) => ({
        message: 'Adjusting '.concat(ie(s, n), ' ').concat(le(e), ' leverage failed'),
        description: o.description,
      }),
    },
    [_e.repayDebt]: {
      onMutate: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Repaying '.concat(ie(s, n), ' ').concat(le(e), ' debt'),
        description: 'Repaying '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' debt repaid'),
        description: 'Successfully repaid '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: s, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' debt repay failed'),
        description: o.description,
      }),
    },
    [_e.topUpCollateral]: {
      onMutate: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Topping up '.concat(ie(s, n), ' ').concat(le(e)),
        description: 'Adding '.concat(o, ' ').concat(a, ' as collateral'),
      }),
      onSuccess: ({ isLong: e, baseSymbol: s, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' topped up'),
        description: 'Successfully added '.concat(o, ' ').concat(a, ' as collateral'),
      }),
      onError: ({ isLong: e, baseSymbol: s, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(ie(s, n), ' ').concat(le(e), ' top up failed'),
        description: o.description,
      }),
    },
  },
  Ve =
    ({
      leverageVaultType: e,
      formAction: s,
      isLong: n,
      collSymbol: o,
      debtSymbol: a,
      selectedSymbol: r,
    }) =>
    ({ action: c, amount: i, defaults: d }) => {
      if (e !== 'leverage') return d;
      const p = s && Xo[s];
      return p
        ? p[c]({
            isLong: n,
            baseSymbol: n ? o : a,
            quoteSymbol: n ? a : o,
            amount: i,
            selectedSymbol: r,
            defaults: d,
          })
        : d;
    },
  Cl = 'leverage-form',
  gt = [3.2, 5];
function Dn({ variant: e }) {
  return t.jsx('div', {
    className: Z.root,
    'data-sentry-component': 'LeverageTooHighTooltip',
    'data-sentry-source-file': 'index.tsx',
    children: t.jsxs('div', {
      className: Z.item,
      children: [
        t.jsxs('div', {
          className: Z.title,
          children: [
            t.jsx(St, {
              name: 'WarningInfo',
              size: 24,
              color: e === 'high' ? 'yellow' : 'red',
              'data-sentry-element': 'Icon',
              'data-sentry-source-file': 'index.tsx',
            }),
            t.jsx($, {
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'index.tsx',
              children: e === 'high' ? 'High Leverage' : 'Extreme Leverage',
            }),
          ],
        }),
        t.jsx('div', {
          className: Z.row,
          children: t.jsxs($, {
            fs: 14,
            lh: 18,
            color: 'grey',
            weight: 'medium',
            'data-sentry-element': 'Text',
            'data-sentry-source-file': 'index.tsx',
            children: [
              'Your position has ',
              e === 'high' ? 'high leverage' : 'extreme leverage',
              ' and increases your liquidation likelihood. Proceed at your own risk.',
            ],
          }),
        }),
      ],
    }),
  });
}
const Bs = { [mo]: 250 },
  Zo = '_root_11lsd_1',
  ea = '_title_11lsd_7',
  ta = '_row_11lsd_12',
  sa = '_icon_11lsd_16',
  Pt = { root: Zo, title: ea, row: ta, icon: sa },
  na = () =>
    t.jsxs('div', {
      className: Pt.root,
      'data-sentry-component': 'LimitTooltip',
      'data-sentry-source-file': 'LimitTooltip.tsx',
      children: [
        t.jsxs('div', {
          className: Pt.title,
          children: [
            t.jsx(St, {
              name: 'WarningInfo',
              size: 24,
              color: 'orange',
              className: Pt.icon,
              'data-sentry-element': 'Icon',
              'data-sentry-source-file': 'LimitTooltip.tsx',
            }),
            t.jsx($, {
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'LimitTooltip.tsx',
              children: 'Limit Exceeded',
            }),
          ],
        }),
        t.jsx('div', {
          className: Pt.row,
          children: t.jsx($, {
            fs: 14,
            lh: 18,
            color: 'grey',
            'data-sentry-element': 'Text',
            'data-sentry-source-file': 'LimitTooltip.tsx',
            children:
              'To protect from price impact, the maximum size per transaction is 250 SOL or 250 ezSOL. Please reduce your transaction amount.',
          }),
        }),
      ],
    }),
  $n = (e, s, n, o) => {
    if (!n || o !== 'multiply') return;
    const a = Bs[s];
    if (a && n && e > a)
      return {
        text: 'Limit Exceeded',
        variant: 'warning',
        tooltip: t.jsx(na, {}),
        hasIcon: !1,
        isCritical: !0,
      };
  },
  Xs = 'Enter Deposit Amount',
  { formatTokenAllDecimals: Zs, formatPercent: oa } = re,
  aa = ({
    marketAddress: e,
    vault: s,
    leverageType: n,
    onStateUpdate: o,
    state: a,
    formStats: r,
    pythHermesPrices: c,
    obligation: i,
  }) => {
    var Gs;
    const { walletPublicKey: d } = de(),
      { getToken: p } = oe(),
      { getReserveByTokenMint: m, getReserveByAddress: h } = Ie(),
      { getReserveApys: l } = ft(),
      { isLong: u } = No({ vault: s, marketAddress: e }),
      { isWalletConnect: f } = Ye(),
      S = n === 'leverage' && u,
      { isDisabled: A, messages: w } = Ln({
        obligation: S ? i : void 0,
        borrowReserveAddress: s.borrowReserveAddress,
        collateralReservesAddresses: S ? [s.depositReserveAddress] : [],
        page: 'leverage',
        mode: Rt.isolated,
      }),
      { getSlippage: b, isSlippageTooHigh: D, optimalSlippage: L } = ht(),
      { collTokenMint: M, debtTokenMint: j, depositReserveAddress: N, borrowReserveAddress: T } = s,
      y = b(),
      g = p(M),
      x = p(j),
      { data: _, isFetched: C } = tt([M, j, ye]),
      R = v.useRef(c),
      I = v.useRef(new P(0)),
      B = v.useRef(new P(0));
    v.useEffect(() => {
      C && ((I.current = _[g.address]), (B.current = _[x.address]));
    }, [C, _, g, x]);
    const k = po(new z(M)),
      E = v.useMemo(() => {
        var J, De;
        return (
          ((J = a.selectedTokenInfo) == null ? void 0 : J.address) === M ||
          ((De = a.selectedTokenInfo) == null ? void 0 : De.address) === j
        );
      }, [M, j, a.selectedTokenInfo]),
      G = v.useMemo(
        () => (E ? a.selectedTokenInfo.address : u ? M : j),
        [E, M, j, a.selectedTokenInfo, u]
      ),
      U = p(G);
    v.useEffect(() => {
      E || o({ selectedTokenInfo: p(u ? M : j) });
    }, [M, j, p, o, E, u]),
      v.useEffect(() => {
        var J, De;
        if (C) {
          const Ue = I.current,
            Qn = B.current,
            Hn = ((J = R.current) == null ? void 0 : J[g.address]) || 1,
            Yn = ((De = R.current) == null ? void 0 : De[x.address]) || 1,
            Jn = Ue.toNumber() * Hn,
            Xn = Qn.toNumber() * Yn;
          Jn > Xn ? o({ selectedTokenInfo: g }) : o({ selectedTokenInfo: x });
        }
      }, [g, x, o, C]);
    const { maxBorrowableAmountDecimal: V, elevationGroup: O } = jn({
        marketAddress: e,
        collReserveAddress: s.depositReserveAddress,
        debtReserveAddress: s.borrowReserveAddress,
      }),
      { maxBorrowableAmountDecimal: K } = Pn({
        marketAddress: e,
        collReserveAddress: s.depositReserveAddress,
        debtReserveAddress: s.borrowReserveAddress,
      }),
      W = n === 'multiply' ? K : V,
      Y = n !== 'multiply' && O === 0 ? O : void 0,
      {
        data: { setupIxns: F },
      } = ls({ vaultType: n, collTokenMint: M, debtTokenMint: j, marketAddress: e }),
      H = !!F.length,
      { leverage: X, setLeverage: ae } = Cn({
        obligation: i,
        onLeverageUpdate: o,
        leverage: a.leverage,
      }),
      ee =
        a.currentTab === ne.manageSize
          ? (Gs = i == null ? void 0 : i.refreshedStats.leverage.toNumber()) != null
            ? Gs
            : Ae
          : X,
      Q = r,
      q = v.useMemo(() => a.amount || 0, [a.amount]),
      te = (J) => {
        o({ amount: J });
      },
      be = m(e, G);
    if (!be) throw new Error('Reserve is not found');
    const je = h(N);
    if (!je) throw new Error('Collateral reserve is not found');
    const Te = h(T);
    if (!Te) throw new Error('Debt reserve is not found');
    const Pe = $e({ reserve: Te, obligation: i || void 0, getReserveApys: l }),
      { debtEpochReset: fe, dailyDebtCapLimit: ue, dailyDebtCapFilled: Se } = Pe,
      we = (fe.lte(new P(0)) ? ue : P.max(Pe.dailyDebtCapLimit.minus(Se), 0)).lt(
        Q.simulated.totalBorrowAmount
      ),
      qe = $e({ reserve: be, obligation: i || void 0, getReserveApys: l }),
      { price: st, supplyCap: nt } = qe,
      yt = $e({ reserve: je, obligation: i || void 0, getReserveApys: l }),
      { supplyCap: ot, totalSupplyAmount: ze } = yt,
      Fe = _[ye].toNumber(),
      Oe = Be(),
      us = v.useMemo(() => new P(q).mul(st), [q, st]),
      bt = v.useMemo(() => _[G] || 0, [_, G]),
      Re = v.useMemo(() => P.min(nt, Tn(G, bt, Ne.leverage.deposit)), [bt, G, nt]),
      se = v.useMemo(() => {
        if (n !== 'multiply') return Re;
        const J = Bs[M] || 1 / 0;
        return P.min(J, Re);
      }, [Re, M, n]),
      Mt = () => {
        te(se.toNumber()), Oe.track('lending:'.concat(n, ':click-deposit-max'));
      },
      Ct = () => {
        te(se.div(2).toNumber()), Oe.track('lending:'.concat(n, ':click-deposit-half'));
      },
      Gn = (J) => {
        o({ selectedTokenInfo: p(J) });
      },
      Wn = Math.max(ot.minus(ze).toNumber(), 0),
      Rs = Q.simulated.totalCollateralAmount - Q.current.totalCollateralAmount,
      Vn = ze.plus(Rs).gt(ot),
      It = Q.simulated.totalBorrowAmount - Q.current.totalBorrowAmount,
      qn = v.useMemo(() => {
        let J = q ? 'Multiply '.concat(g.symbol) : Xs;
        const De = u ? g.symbol : x.symbol;
        let Ue =
          a.currentTab === ne.manageSize
            ? 'Deposit '.concat(U.symbol)
            : q
              ? 'Open '.concat(De, ' ').concat(u ? 'Long' : 'Short')
              : Xs;
        return H && ((J = 'Setup Account'), (Ue = 'Setup Account')), n === 'leverage' ? Ue : J;
      }, [q, x.symbol, u, g.symbol, H, n, a.currentTab, U]),
      zn = !!i && !!(i != null && i.refreshedStats.netAccountValue),
      Ns = () => {
        const J = [];
        return (
          q || J.push('Set deposit amount'),
          q > Re.toNumber() && J.push('Insufficient funds'),
          Vn &&
            J.push(
              'Deposit attempt is '
                .concat(Zs(Rs, 10), ' ')
                .concat(g.symbol, ' but there is only ')
                .concat(Zs(Wn, 6), ' ')
                .concat(g.symbol, ' capacity available')
            ),
          ee < Ae && J.push('Leverage should be higher than '.concat(Ae)),
          H ? [] : J
        );
      },
      On = v.useMemo(() => [g, x], [g, x]),
      at = k && ee > gt[1] ? 'extreme' : k && ee > gt[0] ? 'high' : 'default',
      Es = v.useMemo(() => {
        const J = [];
        f && J.push({ tooltip: Ze, text: 'Wallet Connect', variant: 'primary', isCritical: !0 });
        const De = et(q, Fe, Ne.leverage.deposit, !!d, C);
        De && J.push(De);
        const Ue = $n(q, M, !!d, n);
        return (
          Ue && J.push(Ue),
          we &&
            J.push({
              text: 'Daily Cap Reached',
              tooltip: t.jsx(vo, {
                borrowAmount: Q.simulated.totalBorrowAmount,
                tokenMint: j,
                dailyCap: ue,
                dailyCapFilled: Se,
                resetsInMinutes: fe,
              }),
              variant: 'warning',
              isCritical: !0,
              hasIcon: !1,
              isFluid: !0,
            }),
          It > 0 &&
            W.lt(It) &&
            J.push({
              text: 'Insufficient Liquidity',
              tooltip: t.jsx(Ds, {
                borrowTokenMint: j,
                liquidityAvailable: W.toNumber(),
                liquidityRequired: It,
              }),
              variant: 'warning',
              isCritical: !0,
              hasIcon: !1,
              isFluid: !0,
            }),
          at !== 'default' &&
            q > 0 &&
            J.push({
              tooltip: t.jsx(Dn, { variant: at }),
              text: at === 'high' ? 'High Leverage' : 'Extreme Leverage',
              variant: at === 'high' ? 'warning' : 'danger',
              hasIcon: !1,
            }),
          D() &&
            J.push({
              text: 'Slippage Setting >'.concat(oa(L)),
              tooltip: t.jsx($s, { currentSlippage: y.toNumber(), optimalSlippagePct: L }),
              variant: 'warning',
              hasIcon: !1,
            }),
          w && J.push(...w),
          J
        );
      }, [
        f,
        q,
        Fe,
        d,
        C,
        we,
        It,
        W,
        at,
        D,
        w,
        Q.simulated.totalBorrowAmount,
        j,
        ue,
        Se,
        fe,
        L,
        y,
        M,
        n,
      ]),
      Un = (!q || q > Re.toNumber() || !!Ns().length || A || Es.some((J) => J.isCritical)) && !H,
      Kn = k ? gt : [];
    return {
      amount: q,
      depositButtonText: qn,
      elevationGroupOverride: Y,
      errorMessages: Ns(),
      hasActiveObligation: zn,
      isDisabled: Un,
      setupIxns: F,
      leverage: ee,
      maxValue: Re,
      onAmountChange: te,
      onHalfDepositClick: Ct,
      onLeverageChange: ae,
      onMaxDepositClick: Mt,
      onSelectedTokenChange: Gn,
      selectedTokenInfo: U,
      selectedTokenMint: G,
      sliderBreakpoints: Kn,
      sliderVariant: at,
      slippage: y,
      stats: Q,
      tokensInfos: On,
      value: us,
      warnings: Es,
    };
  };
function ra({
  leverageType: e,
  vault: s,
  obligation: n,
  state: o,
  marketAddress: a,
  onSuccess: r,
  collTokenMint: c,
  debtTokenMint: i,
  leverage: d,
  priceImpactType: p,
  pythHermesPrices: m,
  stakeRates: h,
  onPriceImpactModalVisibleChange: l,
  refetchPriceImpactAll: u,
  elevationGroupOverride: f,
  selectedTokenMint: S,
  amount: A,
}) {
  const { borrowReserveAddress: w, depositReserveAddress: b } = s,
    D = Et(),
    { getPriceByTokenMintDecimal: L } = ke(),
    { onInvalidate: M } = Ut(),
    { onInvalidate: j } = Ls(),
    { getToken: N } = oe(),
    { data: T } = Ps({ leverageType: e, collTokenMint: c, debtTokenMint: i, marketAddress: a }),
    y = N(c),
    g = N(i),
    x = N(S),
    _ = v.useMemo(
      () =>
        Ve({
          leverageVaultType: e,
          formAction: o.currentFormAction,
          isLong: !!o.isLong,
          collSymbol: y.symbol,
          debtSymbol: g.symbol,
          selectedSymbol: x.symbol,
        }),
      [e, o.currentFormAction, o.isLong, y.symbol, g.symbol, x.symbol]
    ),
    { onDeposit: C, isLoading: R } = Oo({
      getStatusMsg: _,
      marketAddress: a,
      mixpanelPrefix: e === 'multiply' ? pe.LENDING.MULTIPLY.BASE : pe.LENDING.LEVERAGE.BASE,
      elevationGroupOverride: f,
      onSuccess: async () => {
        await D.invalidateQueries({ queryKey: Tt.metrics }),
          r(),
          e === 'multiply'
            ? M({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: b,
                borrowReserveAddress: w,
              })
            : j({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: b,
                borrowReserveAddress: w,
              });
      },
    });
  return {
    handleDepositTransaction: async ({ ingorePriceImpactWarning: B = !1 }) => {
      const k = await u();
      if (!k || !k.jupiterQuote) return;
      const {
          priceCollToDebt: E,
          priceDebtToColl: G,
          collToDebtPriceFromQuote: U,
          debtToCollPriceFromQuote: V,
          jupiterQuote: O,
          currentSlot: K,
        } = k,
        W = Je({
          collToDebtPriceFromQuote: U,
          debtToCollPriceFromQuote: V,
          jupiterQuote: O,
          collTokenMint: c,
          pythHermesPrices: m,
          getPriceByTokenMintDecimal: L,
          getToken: N,
          stakeRates: h,
        }),
        Y = Xe(p, W.priceImpactBps);
      if (!B && (Y > Ts.safe || As(p, W.theoreticalPriceDivergenceBps))) {
        l(!0);
        return;
      }
      C({
        selectedTokenMint: S,
        collTokenMint: c,
        debtTokenMint: i,
        amount: A,
        targetLeverage: d,
        depositAddress: b,
        borrowAddress: w,
        marketAddress: a,
        vaultType: e,
        lookupTablesAddresses: T,
        obligation: n,
        jupiterQuote: O,
        priceDebtToColl: G,
        getPriceAinB: async (F) => Promise.resolve(F.toString() === c ? E : G),
        currentSlot: K,
        mutationStartNotificationText: o.currentTab === ne.manageSize ? 'Depositing' : void 0,
        mutationSuccessNotificationText:
          o.currentTab === ne.manageSize ? 'Deposit was successful' : void 0,
      });
    },
    isLoadingMutation: R,
  };
}
const ia = '_metalGreyGradient_1n4qz_9',
  la = '_goldGradient_1n4qz_15',
  ca = '_silverGradient_1n4qz_21',
  da = '_bronzeGradient_1n4qz_27',
  ua = '_pointsSilverTextGradient_1n4qz_33',
  ma = '_root_1n4qz_39',
  pa = '_statsPanel_1n4qz_40',
  ga = '_statsItem_1n4qz_45',
  fa = '_statsSimupationWrapper_1n4qz_51',
  Ke = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1n4qz_1',
    metalGreyGradient: ia,
    goldGradient: la,
    silverGradient: ca,
    bronzeGradient: da,
    pointsSilverTextGradient: ua,
    root: ma,
    statsPanel: pa,
    statsItem: ga,
    statsSimupationWrapper: fa,
  },
  ha = '_metalGreyGradient_h2x7l_9',
  xa = '_goldGradient_h2x7l_15',
  ya = '_silverGradient_h2x7l_21',
  ba = '_bronzeGradient_h2x7l_27',
  wa = '_pointsSilverTextGradient_h2x7l_33',
  va = '_root_h2x7l_39',
  La = '_statsPanel_h2x7l_40',
  Ta = '_statsItem_h2x7l_45',
  Dt = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_h2x7l_1',
    metalGreyGradient: ha,
    goldGradient: xa,
    silverGradient: ya,
    bronzeGradient: ba,
    pointsSilverTextGradient: wa,
    root: va,
    statsPanel: La,
    statsItem: Ta,
  },
  { formatTokenAllDecimals: lt } = re,
  Sa = ({ stats: e, collateralTokenInfo: s, debtTokenInfo: n }) =>
    t.jsx(t.Fragment, {
      children: t.jsx(Ms, {
        panel: t.jsxs('div', {
          className: Dt.statsPanel,
          children: [
            t.jsxs('div', {
              className: Dt.statsItem,
              children: [
                t.jsxs($, {
                  color: 'grey',
                  children: [s == null ? void 0 : s.symbol, ' Collateral'],
                }),
                t.jsxs($, {
                  color: 'white',
                  children: [
                    lt(e.current.totalCollateralAmount, 6),
                    ' → ',
                    lt(e.simulated.totalCollateralAmount, 6),
                    ' ',
                    s == null ? void 0 : s.symbol,
                  ],
                }),
              ],
            }),
            t.jsxs('div', {
              className: Dt.statsItem,
              children: [
                t.jsxs($, { color: 'grey', children: [n == null ? void 0 : n.symbol, ' Debt'] }),
                t.jsxs($, {
                  color: 'white',
                  children: [
                    lt(e.current.totalBorrowAmount, 6),
                    ' → ',
                    lt(e.simulated.totalBorrowAmount, 6),
                    ' ',
                    n == null ? void 0 : n.symbol,
                  ],
                }),
              ],
            }),
          ],
        }),
        'data-sentry-element': 'CollapsiblePanel',
        'data-sentry-source-file': 'NetValueCollapsiblePanel.tsx',
        children: t.jsxs('div', {
          className: Dt.statsItem,
          children: [
            t.jsx($, {
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'NetValueCollapsiblePanel.tsx',
              children: 'Net Value',
            }),
            t.jsxs($, {
              color: 'white',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'NetValueCollapsiblePanel.tsx',
              children: [
                lt(e.current.netValue, 6),
                ' → ',
                lt(e.simulated.netValue, 6),
                ' ',
                n == null ? void 0 : n.symbol,
              ],
            }),
          ],
        }),
      }),
    }),
  _a = '_metalGreyGradient_1d33x_9',
  Aa = '_goldGradient_1d33x_15',
  Ma = '_silverGradient_1d33x_21',
  Ca = '_bronzeGradient_1d33x_27',
  Ia = '_pointsSilverTextGradient_1d33x_33',
  ja = '_root_1d33x_39',
  Pa = '_statsPanel_1d33x_40',
  Da = '_statsItem_1d33x_45',
  $a = '_statsWrapper_1d33x_50',
  wt = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1d33x_1',
    metalGreyGradient: _a,
    goldGradient: Aa,
    silverGradient: Ma,
    bronzeGradient: Ca,
    pointsSilverTextGradient: Ia,
    root: ja,
    statsPanel: Pa,
    statsItem: Da,
    statsWrapper: $a,
  },
  { formatPercent: $t } = re,
  Ba = ({ stats: e, leverageType: s }) => {
    const n = s === 'multiply' ? vt : go;
    return t.jsx(Ms, {
      panel: t.jsxs('div', {
        className: wt.statsPanel,
        children: [
          t.jsxs('div', {
            className: wt.statsItem,
            children: [
              t.jsx($, { color: 'grey', children: 'Max LTV' }),
              t.jsx($, { color: 'yellow', children: $t(e.simulated.maxLtv * 100) }),
            ],
          }),
          t.jsxs('div', {
            className: wt.statsItem,
            children: [
              t.jsx($, { color: 'grey', children: 'Liquidation LTV' }),
              t.jsx($, { color: 'red', children: $t(e.simulated.liquidationLtv * 100) }),
            ],
          }),
        ],
      }),
      'data-sentry-element': 'CollapsiblePanel',
      'data-sentry-component': 'LoanToValueCollapsiblePanel',
      'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
      children: t.jsxs('div', {
        className: wt.statsItem,
        children: [
          t.jsx($, {
            color: 'grey',
            'data-sentry-element': 'Text',
            'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
            children: 'Loan-to-Value Ratio',
          }),
          t.jsxs('div', {
            className: wt.statsWrapper,
            children: [
              t.jsx($, {
                color: n(e.current.ltv, e.current.maxLtv, e.current.liquidationLtv),
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
                children: e.current.ltv ? $t(e.current.ltv * 100) : 0,
              }),
              '→',
              t.jsx($, {
                color: n(e.simulated.ltv, e.simulated.maxLtv, e.current.liquidationLtv),
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
                children: $t(e.simulated.ltv * 100),
              }),
            ],
          }),
        ],
      }),
    });
  },
  ka = (e) => (e > 0 ? 'Net Supply APY' : e < 0 ? 'Net Borrow APY' : 'Net APY'),
  { formatPercent: Fa, formatCcy: Ra } = re,
  Bn = ({ liquidationPrice: e, priceCollToDebt: s, isLong: n }) =>
    v.useMemo(() => {
      if (e === 1 / 0 || e === 0) return 'N/A';
      const o = n ? s : 1 / s,
        a = n ? '-' : '+',
        r = Math.abs(e / o - 1);
      return r === 100
        ? ''
        : ''
            .concat(Ra('', e), ' (')
            .concat(a)
            .concat(Fa(r * 100, 1, !0), ')');
    }, [e, s, n]),
  { formatApyWithCap: en, formatLeverageSliderV2: Na, formatTokenAllDecimals: Ea } = re,
  ks = (e) => {
    const L = e,
      {
        stats: s,
        collateralTokenMint: n,
        debtTokenMint: o,
        isHidden: a,
        leverageType: r,
        isLong: c,
        flashLoanInfo: i,
      } = L,
      d = rt(L, [
        'stats',
        'collateralTokenMint',
        'debtTokenMint',
        'isHidden',
        'leverageType',
        'isLong',
        'flashLoanInfo',
      ]),
      { getToken: p } = oe(),
      m = p(n),
      h = p(o),
      {
        liquidationPrice: l,
        priceCollToDebt: u,
        netApy: f,
        leverage: S,
        borrowFee: A,
      } = s.simulated,
      w = Bn({ liquidationPrice: l, priceCollToDebt: u, isLong: c }),
      b = (i == null ? void 0 : i.flashLoanFee.mul(100).toNumber()) || 0,
      D = r === 'multiply' && s.current.debtTokenInfo.symbol === 'SOL';
    return t.jsxs('div', {
      className: Ke.root,
      'data-sentry-component': 'StatsDefault',
      'data-sentry-source-file': 'StatsDefault.tsx',
      children: [
        t.jsx(ss, {
          withSlippage: !0,
          'data-sentry-element': 'TransactionSettingButton',
          'data-sentry-source-file': 'StatsDefault.tsx',
        }),
        !a &&
          t.jsxs(t.Fragment, {
            children: [
              t.jsxs('div', {
                className: Ke.statsItem,
                children: [
                  t.jsx($, { color: 'grey', children: ka(f) }),
                  t.jsx('div', {
                    className: Ke.statsSimupationWrapper,
                    children: t.jsx($, { color: $o(f * 100), children: en(Math.abs(f) * 100) }),
                  }),
                ],
              }),
              t.jsxs('div', {
                className: Ke.statsItem,
                children: [
                  t.jsx($, { color: 'grey', children: 'Leverage' }),
                  t.jsx($, { color: 'white', children: Na(S) }),
                ],
              }),
              !D &&
                t.jsxs('div', {
                  className: Ke.statsItem,
                  children: [
                    t.jsx($, { color: 'grey', children: 'Liquidation Price' }),
                    t.jsx($, { color: 'white', children: w }),
                  ],
                }),
              t.jsx(Sa, { stats: s, collateralTokenInfo: m, debtTokenInfo: h }),
              t.jsx(Ba, { leverageType: r, stats: s }),
              t.jsx(An, ge({ defaultIsCollapsed: !0, withFillPrice: !0, leverageType: r }, d)),
              !!A &&
                t.jsxs('div', {
                  className: Ke.statsItem,
                  children: [
                    t.jsx($, { color: 'grey', children: 'Borrow fee' }),
                    t.jsx($, { color: 'white', children: en(A * 100, 1, !0) }),
                  ],
                }),
              b > 0 &&
                t.jsxs('div', {
                  className: Ke.statsItem,
                  children: [
                    t.jsx(bn, {
                      render: () =>
                        t.jsx($, {
                          children:
                            "Flash loan fee, added to the protocol to prevent spamming of Kamino's flash loan mechanism",
                        }),
                      clickable: !0,
                      children: t.jsx($, {
                        color: 'grey',
                        underline: !0,
                        children: 'Flash borrow fee',
                      }),
                    }),
                    t.jsxs($, { color: 'white', children: [Ea(b, 3), '%'] }),
                  ],
                }),
            ],
          }),
      ],
    });
  },
  Fs = () =>
    t.jsx('div', {
      className: Z.root,
      'data-sentry-component': 'JupiterRoutingTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: t.jsxs('div', {
        className: Z.item,
        children: [
          t.jsxs('div', {
            className: Z.title,
            children: [
              t.jsx(St, {
                name: 'WarningInfo',
                size: 18,
                color: 'blue',
                'data-sentry-element': 'Icon',
                'data-sentry-source-file': 'index.tsx',
              }),
              t.jsx($, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: ' Jupiter Transaction Routing',
              }),
            ],
          }),
          t.jsx('div', {
            className: Z.row,
            children: t.jsx($, {
              fs: 14,
              lh: 18,
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'index.tsx',
              children:
                'Swapping in and out of JLP may go through Jupiter Perps which incurs minting and redemption fees.',
            }),
          }),
        ],
      }),
    }),
  Ga = 0.95,
  kn = (e) => e * Ga,
  { formatTokenAllDecimals: Wa, formatLeverageSliderV2: Va } = re,
  fs = ({
    vault: e,
    leverageType: s,
    state: n,
    marketAddress: o,
    obligation: a,
    pythHermesPrices: r,
    formStats: c,
    onStateUpdate: i,
    onSuccess: d,
  }) => {
    const { getToken: p } = oe(),
      { walletPublicKey: m } = de(),
      { debtTokenMint: h, collTokenMint: l } = e,
      { getPriceByTokenMintDecimal: u } = ke(),
      {
        amount: f,
        depositButtonText: S,
        elevationGroupOverride: A,
        errorMessages: w,
        hasActiveObligation: b,
        isDisabled: D,
        leverage: L,
        maxValue: M,
        onAmountChange: j,
        onHalfDepositClick: N,
        onLeverageChange: T,
        onMaxDepositClick: y,
        onSelectedTokenChange: g,
        selectedTokenInfo: x,
        selectedTokenMint: _,
        setupIxns: C,
        sliderBreakpoints: R,
        sliderVariant: I,
        slippage: B,
        stats: k,
        tokensInfos: E,
        value: G,
        warnings: U,
      } = aa({
        vault: e,
        leverageType: s,
        state: n,
        marketAddress: o,
        obligation: a,
        pythHermesPrices: r,
        formStats: c,
        onStateUpdate: i,
      }),
      V = mt(s),
      {
        isConfirm: O,
        isModalVisible: K,
        onModalVisibleChange: W,
        onConfirm: Y,
        onConfirmChange: F,
      } = Sn({
        dontRemindAgainLocalStorageKey:
          s === 'leverage'
            ? 'long/short.dontShowFirstDepositInfoModal'
            : 'multiply.dontShowFirstDepositInfoModal',
      }),
      H = l.toString() === zt && s === 'multiply' ? 'jlpMultiply' : s,
      { sliderValue: X, setSliderValue: ae } = Do(T, L || 1, 200),
      { isModalVisible: ee, onModalVisibleChange: Q } = ns(),
      {
        data: q,
        isFetching: te,
        refetch: be,
        dataUpdatedAt: je,
      } = Kt({
        marketAddress: o,
        obligation: a,
        slippage: B,
        debtTokenMint: h,
        collTokenMint: l,
        leverage: L,
        leverageType: s,
        enabled: f > 0,
        specificProps: {
          formType: 'deposit',
          amount: f,
          selectedTokenMint: _,
          elevationGroupOverride: A,
        },
      }),
      { data: Te, isLoading: Pe } = os({ refetchIntervalSeconds: 600 }),
      fe = Pe || te,
      {
        priceImpactBps: ue,
        theoreticalPrice: Se,
        marketPrice: ce,
        theoreticalPriceDivergenceBps: we,
      } = v.useMemo(
        () =>
          q
            ? Je({
                debtToCollPriceFromQuote: q.debtToCollPriceFromQuote,
                collToDebtPriceFromQuote: q.collToDebtPriceFromQuote,
                jupiterQuote: q.jupiterQuote,
                collTokenMint: l,
                pythHermesPrices: r,
                getPriceByTokenMintDecimal: u,
                getToken: p,
                stakeRates: Te,
              })
            : Qt,
        [l, u, p, r, q, Te]
      ),
      { handleDepositTransaction: qe, isLoadingMutation: st } = ra({
        leverageType: s,
        vault: e,
        obligation: a,
        state: n,
        marketAddress: o,
        onSuccess: () => {
          d == null || d(), i({ amount: 0, leverage: Ae });
        },
        collTokenMint: l,
        debtTokenMint: h,
        leverage: L,
        walletPublicKey: m,
        priceImpactType: H,
        pythHermesPrices: r,
        stakeRates: Te,
        onPriceImpactModalVisibleChange: Q,
        refetchPriceImpactAll: async () => (await be()).data,
        selectedTokenMint: _,
        amount: f,
      }),
      {
        handleSetupAccount: nt,
        onCloseSetupModal: yt,
        isSetupModalOpened: ot,
      } = Ht({
        leverageType: s,
        collTokenMint: l,
        debtTokenMint: h,
        setupIxns: C,
        walletPublicKey: m,
      }),
      ze = async () => {
        if (!O) {
          W(!0);
          return;
        }
        if (C.length) {
          nt();
          return;
        }
        await qe({ ingorePriceImpactWarning: !1 });
      };
    return t.jsxs('div', {
      className: it.root,
      'data-sentry-component': 'DepositForm',
      'data-sentry-source-file': 'DepositForm.tsx',
      children: [
        t.jsx('div', {
          className: it.input,
          children: t.jsx(At, {
            value: f,
            label: 'You deposit',
            topStat: new P(G),
            variant: 'secondary',
            tokensInfos: E,
            bottomLeftStat: 'Available: '.concat(Wa(M, x.decimals)),
            defaultSelectedTokenMint: x.address,
            onSelectedTokenChange: g,
            onInputChange: j,
            onMax: y,
            onHalf: N,
            'data-sentry-element': 'LargeInput',
            'data-sentry-source-file': 'DepositForm.tsx',
          }),
        }),
        !b &&
          t.jsxs('div', {
            className: it.slider,
            children: [
              t.jsx($, { className: it.title, children: V }),
              t.jsx(Mn, {
                min: Ae,
                value: X,
                step: 0.01,
                max: kn(e.maxLeverage),
                onValueChange: ae,
                formatter: Va,
                breakpoints: R,
                variant: I,
              }),
            ],
          }),
        t.jsx(xt, {
          size: 'large',
          disabled: D || fe || st,
          isFullWidth: !0,
          isLoading: fe,
          loadingLabel: fe ? is : '',
          tooltipMessages: w,
          onClick: ze,
          'data-sentry-element': 'FormButton',
          'data-sentry-source-file': 'DepositForm.tsx',
          children: S,
        }),
        t.jsxs('div', {
          className: it.warnings,
          children: [
            H === 'jlpMultiply' &&
              f > 0 &&
              t.jsx(Ee, {
                variant: 'info',
                hasIcon: !1,
                tooltip: t.jsx(Fs, {}),
                text: 'Jupiter Routing',
              }),
            U.map((Fe, Oe) =>
              v.createElement(
                Ee,
                Ce(ge({}, Fe), { key: ''.concat(Fe.text.toString() || '', '-').concat(Oe) })
              )
            ),
            t.jsx(as, {
              type: H,
              priceImpactBps: ue,
              collTokenMint: l,
              theoreticalPriceDivergenceBps: we,
              marketPrice: ce,
              theoreticalPrice: Se,
              variant: 'tag',
              isLong: !!n.isLong,
              'data-sentry-element': 'PriceImpactNotifications',
              'data-sentry-source-file': 'DepositForm.tsx',
            }),
          ],
        }),
        t.jsx('div', {
          className: it.stats,
          children: t.jsx(ks, {
            isLoading: fe,
            isHidden: !f || !m,
            stats: k,
            priceImpactBps: ue,
            leverageType: s,
            jupiterQuote: q == null ? void 0 : q.jupiterQuote,
            onRefetchData: be,
            dataUpdatedAt: je,
            isLong: !!n.isLong,
            durationSeconds: Yt,
            collateralTokenMint: l,
            debtTokenMint: h,
            flashLoanInfo: q == null ? void 0 : q.flashLoanInfo,
            'data-sentry-element': 'StatsDefault',
            'data-sentry-source-file': 'DepositForm.tsx',
          }),
        }),
        t.jsx(Jt, {
          isOpen: ot,
          contentType: s,
          onClose: yt,
          'data-sentry-element': 'AccountSetupModal',
          'data-sentry-source-file': 'DepositForm.tsx',
        }),
        t.jsx(_n, {
          isConfirm: O,
          onConfirmChange: F,
          isVisible: K,
          onHide: () => W(!1),
          onConfirmDeposit: (Fe) => {
            Y(Fe), ze();
          },
          'data-sentry-element': 'FirstDepositInfoModal',
          'data-sentry-source-file': 'DepositForm.tsx',
        }),
        t.jsx(rs, {
          type: Xe(H, ue),
          priceImpactType: H,
          priceImpactBps: ue,
          theoreticalPriceDivergenceBps: we,
          marketPrice: ce,
          theoreticalPrice: Se,
          onOk: () => {
            Q(!1), qe({ ingorePriceImpactWarning: !0 });
          },
          onCancel: () => {
            Q(!1);
          },
          isVisible: ee,
          isLoading: fe,
          'data-sentry-element': 'PriceImpactWarningModal',
          'data-sentry-source-file': 'DepositForm.tsx',
        }),
      ],
    });
  },
  qa = ({ obligation: e, reserveAddress: s }) => {
    const { getReserveByAddress: n } = Ie(),
      { getReserveApys: o } = ft(),
      a = n(s);
    return $e({ reserve: a, obligation: e, getReserveApys: o });
  },
  za = ({ tokenMint: e }) => {
    const { getToken: s } = oe();
    return { tokenInfo: s(e) };
  },
  Oa = '_metalGreyGradient_1d33x_9',
  Ua = '_goldGradient_1d33x_15',
  Ka = '_silverGradient_1d33x_21',
  Qa = '_bronzeGradient_1d33x_27',
  Ha = '_pointsSilverTextGradient_1d33x_33',
  Ya = '_root_1d33x_39',
  Ja = '_statsPanel_1d33x_40',
  Xa = '_statsItem_1d33x_45',
  Za = '_statsWrapper_1d33x_50',
  Qe = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1d33x_1',
    metalGreyGradient: Oa,
    goldGradient: Ua,
    silverGradient: Ka,
    bronzeGradient: Qa,
    pointsSilverTextGradient: Ha,
    root: Ya,
    statsPanel: Ja,
    statsItem: Xa,
    statsWrapper: Za,
  },
  { formatPercent: hs, formatPrice: er } = re,
  tr = ({
    currentLTV: e,
    currentMaxLTV: s,
    currentLiquidationLTV: n,
    currentLiquidationPrice: o,
    currentPrice: a,
    simulatedLTV: r,
    simulatedLiquidationLTV: c,
    simulatedLiquidationPrice: i,
    simulatedMaxLTV: d,
  }) =>
    t.jsx(t.Fragment, {
      children: t.jsx(Ms, {
        panel: t.jsxs('div', {
          className: Qe.statsPanel,
          children: [
            t.jsxs('div', {
              className: Qe.statsItem,
              children: [
                t.jsx($, { color: 'grey', children: 'Liquidation LTV' }),
                t.jsx($, { color: 'yellow', children: hs(c * 100) }),
              ],
            }),
            t.jsxs('div', {
              className: Qe.statsItem,
              children: [
                t.jsx($, { color: 'grey', children: 'Liquidation Price' }),
                t.jsxs('div', {
                  className: Qe.statsWrapper,
                  children: [
                    t.jsx($, { color: vt(e, s, n), children: o.toFixed(4) }),
                    '→',
                    t.jsx($, { color: vt(r, d, n), children: i.toFixed(4) }),
                  ],
                }),
              ],
            }),
            t.jsxs('div', {
              className: Qe.statsItem,
              children: [
                t.jsx($, { color: 'grey', children: 'Current Price' }),
                t.jsx($, { color: 'white', children: er(a) }),
              ],
            }),
          ],
        }),
        'data-sentry-element': 'CollapsiblePanel',
        'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
        children: t.jsxs('div', {
          className: Qe.statsItem,
          children: [
            t.jsx($, {
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
              children: 'Loan-to-Value Ratio',
            }),
            t.jsxs('div', {
              className: Qe.statsWrapper,
              children: [
                t.jsx($, {
                  color: vt(e, s, n),
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
                  children: hs(e * 100),
                }),
                '→',
                t.jsx($, {
                  color: vt(r, d, n),
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
                  children: hs(r * 100),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  sr = '_metalGreyGradient_d2z55_9',
  nr = '_goldGradient_d2z55_15',
  or = '_silverGradient_d2z55_21',
  ar = '_bronzeGradient_d2z55_27',
  rr = '_pointsSilverTextGradient_d2z55_33',
  ir = '_root_d2z55_39',
  lr = '_statsPanel_d2z55_40',
  cr = '_statsItem_d2z55_45',
  dr = '_statsWrapper_d2z55_51',
  ct = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_d2z55_1',
    metalGreyGradient: sr,
    goldGradient: nr,
    silverGradient: or,
    bronzeGradient: ar,
    pointsSilverTextGradient: rr,
    root: ir,
    statsPanel: lr,
    statsItem: cr,
    statsWrapper: dr,
  },
  { formatTokenAllDecimals: tn, formatPercent: ur } = re,
  mr = ({
    stats: e,
    tokenSymbol: s,
    obligationType: n,
    getCurrentTotalAmount: o,
    getSimulatedTotalAmount: a,
    isLong: r,
    pairPrice: c,
  }) => {
    const { current: i, simulated: d } = e,
      { liquidationPrice: p, priceCollToDebt: m } = e.simulated,
      h = Bn({ liquidationPrice: p, priceCollToDebt: m, isLong: r }),
      l = v.useMemo(
        () =>
          c ||
          (r
            ? i.collateralTokenPrice / i.borrowTokenPrice
            : i.borrowTokenPrice / i.collateralTokenPrice),
        [c, i.borrowTokenPrice, r, i.collateralTokenPrice]
      );
    return t.jsxs('div', {
      className: ct.root,
      'data-sentry-component': 'Stats',
      'data-sentry-source-file': 'Stats.tsx',
      children: [
        t.jsx(ss, {
          'data-sentry-element': 'TransactionSettingButton',
          'data-sentry-source-file': 'Stats.tsx',
        }),
        t.jsx(tr, {
          currentLTV: i.ltv,
          currentMaxLTV: i.maxLtv,
          currentLiquidationLTV: i.liquidationLtv,
          currentLiquidationPrice: i.liquidationPrice,
          currentPrice: l,
          simulatedLTV: d.ltv,
          simulatedLiquidationLTV: d.liquidationLtv,
          simulatedLiquidationPrice: d.liquidationPrice,
          simulatedMaxLTV: d.maxLtv,
          'data-sentry-element': 'LoanToValueCollapsiblePanel',
          'data-sentry-source-file': 'Stats.tsx',
        }),
        t.jsxs('div', {
          className: ct.statsItem,
          children: [
            t.jsxs($, {
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Stats.tsx',
              children: [n, ' '],
            }),
            t.jsxs($, {
              color: 'white',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Stats.tsx',
              children: [tn(o(i), 6), ' → ', tn(a(d), 6), ' ', s],
            }),
          ],
        }),
        t.jsxs('div', {
          className: ct.statsItem,
          children: [
            t.jsx($, {
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Stats.tsx',
              children: 'Liquidation Price',
            }),
            t.jsx($, {
              color: 'white',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Stats.tsx',
              children: h,
            }),
          ],
        }),
        t.jsxs('div', {
          className: ct.statsItem,
          children: [
            t.jsx($, {
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Stats.tsx',
              children: 'Leverage Change',
            }),
            t.jsxs('div', {
              className: ct.statsWrapper,
              children: [
                t.jsxs($, {
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'Stats.tsx',
                  children: [e.current.leverage.toFixed(1), 'x'],
                }),
                '→',
                t.jsxs($, {
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'Stats.tsx',
                  children: [e.simulated.leverage.toFixed(1), 'x'],
                }),
              ],
            }),
          ],
        }),
        !!e.simulated.borrowFee &&
          t.jsxs('div', {
            className: ct.statsItem,
            children: [
              t.jsx($, { color: 'grey', children: 'Borrow fee' }),
              t.jsx($, { color: 'white', children: ur(e.simulated.borrowFee * 100, 1, !0) }),
            ],
          }),
      ],
    });
  },
  pr = '_metalGreyGradient_nfj4s_9',
  gr = '_goldGradient_nfj4s_15',
  fr = '_silverGradient_nfj4s_21',
  hr = '_bronzeGradient_nfj4s_27',
  xr = '_pointsSilverTextGradient_nfj4s_33',
  yr = '_input_nfj4s_39',
  br = '_slider_nfj4s_42',
  wr = '_title_nfj4s_45',
  vr = '_notifications_nfj4s_48',
  Lr = '_stats_nfj4s_58',
  Tr = '_statsItem_nfj4s_64',
  Sr = '_statsSimupationWrapper_nfj4s_68',
  _r = '_notificationMb_nfj4s_73',
  Ar = '_notificationMt_nfj4s_76',
  Mr = '_epochResetText_nfj4s_79',
  Cr = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_nfj4s_1',
    metalGreyGradient: pr,
    goldGradient: gr,
    silverGradient: fr,
    bronzeGradient: hr,
    pointsSilverTextGradient: xr,
    input: yr,
    slider: br,
    title: wr,
    notifications: vr,
    stats: Lr,
    statsItem: Tr,
    statsSimupationWrapper: Sr,
    notificationMb: _r,
    notificationMt: Ar,
    epochResetText: Mr,
  },
  Fn = (e) => {
    var x;
    const {
        formProps: s,
        tabs: n,
        tabContentComponents: o,
        initialSelectedTab: a,
        tokenMint: r,
        reserveAddress: c,
        obligationType: i,
        getCurrentTotalAmount: d,
        getSimulatedTotalAmount: p,
        formStats: m,
      } = e,
      h = Et(),
      { marketAddress: l, vault: u, obligation: f, state: S, onStateUpdate: A, onSuccess: w } = s;
    if ((Object.values(pt), !f))
      throw Error('Missing obligation. Please refresh the page and try again.');
    const b = ((x = s.state) == null ? void 0 : x.currentSubtab) || a,
      D = (_) => {
        A({ amount: 0, currentSubtab: _ });
      },
      { onInvalidate: L } = Ut(),
      M = async () => {
        await h.invalidateQueries({ queryKey: Tt.metrics }),
          A({ amount: 0 }),
          w == null || w(),
          L({
            marketAddress: l,
            obligationAddress: f == null ? void 0 : f.obligationAddress,
            depositReserveAddress: u.depositReserveAddress,
            borrowReserveAddress: u.borrowReserveAddress,
          });
      },
      { tokenInfo: j } = za({ tokenMint: r }),
      N = qa({ obligation: f, reserveAddress: c }),
      T = m,
      y = b === n[0] ? o[0] : o[1],
      g = { onSuccess: M, reserveStats: N, tokenInfo: j, formStats: m };
    return t.jsxs('div', {
      'data-sentry-component': 'ManageLoanLayoutTemplate',
      'data-sentry-source-file': 'ManageLoanLayoutTemplate.tsx',
      children: [
        t.jsx(bs, {
          isFullWidth: !0,
          onChange: D,
          tabs: n.map((_) => ({ key: _, label: _ })),
          activeKey: b,
          'data-sentry-element': 'Tabs',
          'data-sentry-source-file': 'ManageLoanLayoutTemplate.tsx',
        }),
        t.jsx(
          y,
          Ce(ge(ge({}, e.formProps), g), {
            'data-sentry-element': 'TabContentComponent',
            'data-sentry-source-file': 'ManageLoanLayoutTemplate.tsx',
          })
        ),
        !!S.amount &&
          t.jsx('div', {
            className: Cr.stats,
            children: t.jsx(mr, {
              stats: T,
              tokenSymbol: j.symbol,
              obligationType: i,
              getCurrentTotalAmount: d,
              getSimulatedTotalAmount: p,
              isLong: !!S.isLong,
            }),
          }),
      ],
    });
  },
  Ir = '_metalGreyGradient_pe2t2_9',
  jr = '_goldGradient_pe2t2_15',
  Pr = '_silverGradient_pe2t2_21',
  Dr = '_bronzeGradient_pe2t2_27',
  $r = '_pointsSilverTextGradient_pe2t2_33',
  Br = '_input_pe2t2_39',
  kr = '_warnings_pe2t2_43',
  Fr = '_stats_pe2t2_55',
  Rr = '_statsItem_pe2t2_61',
  Nr = '_statsSimupationWrapper_pe2t2_65',
  sn = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_pe2t2_1',
    metalGreyGradient: Ir,
    goldGradient: jr,
    silverGradient: Pr,
    bronzeGradient: Dr,
    pointsSilverTextGradient: $r,
    input: Br,
    warnings: kr,
    stats: Fr,
    statsItem: Rr,
    statsSimupationWrapper: Nr,
  },
  cs = ({
    amount: e,
    bottomLeftStat: s,
    errorMessages: n,
    handleAmountChange: o,
    handleHalf: a,
    handleMax: r,
    handleSubmit: c,
    isSubmitting: i,
    isSubmitDisabled: d,
    label: p,
    submitButtonText: m,
    tokenInfo: h,
    value: l,
    warnings: u = [],
  }) =>
    t.jsxs('div', {
      'data-sentry-component': 'ManageLoanFormTemplate',
      'data-sentry-source-file': 'ManageLoanFormTemplate.tsx',
      children: [
        t.jsx('div', {
          className: sn.input,
          children: t.jsx(At, {
            value: e,
            label: p,
            topStat: new P(l),
            variant: 'secondary',
            tokensInfos: [h],
            bottomLeftStat: s,
            defaultSelectedTokenMint: h.address,
            onInputChange: o,
            onHalf: a,
            onMax: r,
            'data-sentry-element': 'LargeInput',
            'data-sentry-source-file': 'ManageLoanFormTemplate.tsx',
          }),
        }),
        t.jsx('div', {
          className: sn.warnings,
          children: u.map((f, S) =>
            v.createElement(
              Ee,
              Ce(ge({}, f), { key: ''.concat(f.text.toString() || '', '-').concat(S) })
            )
          ),
        }),
        t.jsx(xt, {
          size: 'large',
          disabled: d,
          isFullWidth: !0,
          isLoading: i,
          onClick: c,
          tooltipMessages: n,
          'data-sentry-element': 'FormButton',
          'data-sentry-source-file': 'ManageLoanFormTemplate.tsx',
          children: m,
        }),
      ],
    }),
  { formatTokenAllDecimals: nn } = re,
  ds = ({
    buildTxns: e,
    onSuccess: s = Le,
    marketAddress: n,
    notificationKey: o,
    notificationLoadingMessage: a,
    getNotificationLoadingDescription: r,
    notificationSuccessMessage: c,
    notificationSuccessDescriptionPrefix: i,
    notificationErrorMessage: d,
    notificationErrorDescription: p,
    getStatusMsg: m,
  }) => {
    const { walletPublicKey: h, wallet: l, signTransaction: u } = de(),
      f = Be(),
      { getToken: S } = oe(),
      { setPositionHasUpdated: A } = es(),
      { web3client: w } = Gt(),
      { createVersionedTxWithBudgetIxns: b } = ts(),
      { getSignatureIxns: D } = Bo(),
      { updateProviderParams: L } = Vt,
      M = Ot({ marketAddress: n }),
      { data: j } = _t({}),
      T = Nt(
        async ({ tokenMint: y, amount: g, obligation: x }) => {
          if (!g) return;
          if (!x) throw new Error('Obligation is not found');
          if (!w) throw new Error('Web3client is not loaded');
          if (!h || !l) throw new Error('Wallet is not connected');
          if (!j) throw new Error('Slot is not loaded, please try again');
          const { symbol: _, decimals: C } = S(y);
          f.track(''.concat(o, ':click'), { amount: g, symbol: _ });
          const R = await D(),
            I = Ft(new P(g).toFixed(C), C).floor().toString(),
            B = await e({
              walletPublicKey: h,
              tokenMint: y,
              amountFormat: I,
              obligation: x,
              symbol: _,
              amount: g,
            }),
            k = [...B.setupIxs, ...B.lendingIxs, ...B.cleanupIxs, ...R],
            E = await b({
              ixns: k,
              connection: w.connection,
              defaultCu: 15e5,
              lookupTablesAddresses: M,
            });
          return {
            txid: await Zt({
              signTransaction: u,
              tx: E,
              mainConnection: w.sendConnection,
              extraConnections: w.sendConnectionsExtra,
              mixpanel: f,
            }),
            amount: g,
            decimals: C,
            symbol: _,
            obligation: x,
          };
        },
        {
          onMutate: ({ tokenMint: y, amount: g }) => {
            const { symbol: x, decimals: _ } = S(y);
            L({ isTransactionInProgress: !0 });
            const { message: C, description: R } = m({
              action: 'onMutate',
              amount: nn(new P(g).toNumber(), _),
              defaults: { message: a, description: r({ amount: g, symbol: x }) },
            });
            xe({ message: C, description: R, type: 'loading', key: o });
          },
          onSuccess: (y) => {
            if (!y) return;
            const { txid: g, amount: x, symbol: _, decimals: C } = y,
              R = nn(new P(x).toNumber(), C),
              { message: I, description: B } = m({
                action: 'onSuccess',
                amount: R,
                defaults: { message: c, description: ''.concat(i, ' ').concat(R, ' ').concat(_) },
              });
            xe({ type: 'success', key: o, message: I, description: B, txids: [g] }),
              s(y.obligation),
              A();
          },
          onError: (y, { amount: g }) => {
            He(y), Wt(o);
            const { message: x, description: _ } = m({
              action: 'onError',
              amount: g,
              defaults: { message: d, description: Xt(y, p) },
            });
            xe({
              message: x,
              description: _,
              type: 'error',
              errorTxId: y.txId,
              walletPublicKey: h,
            });
          },
          onSettled: () => {
            L({ isTransactionInProgress: !1 });
          },
        }
      );
    return { mutate: T.mutate, isLoading: T.isLoading };
  },
  Er = ''.concat(pe.LENDING.MULTIPLY.BASE, ':borrow'),
  Gr = ({ onSuccess: e = Le, marketAddress: s, getStatusMsg: n }) => {
    const { wallet: o } = de(),
      { getMarketByAddress: a } = ve(),
      { data: r } = _t({}),
      { referrerWallet: c } = We(),
      i = wn(),
      d = async ({ walletPublicKey: h, tokenMint: l, amountFormat: u, obligation: f }) => {
        const S = a(s);
        if (!i) throw new Error('Scope is not loaded');
        return me.KaminoAction.buildBorrowTxns(
          S,
          u,
          new z(l),
          new z(h),
          f,
          !0,
          (o == null ? void 0 : o.adapter.name) === 'SquadsX'
            ? void 0
            : { scope: i, scopeFeed: 'hubble' },
          0,
          !0,
          !1,
          {
            skipInitialization: !1,
            skipLutCreation: (o == null ? void 0 : o.adapter.name) === 'SquadsX',
          },
          c,
          r
        );
      },
      { mutate: p, isLoading: m } = ds({
        buildTxns: d,
        notificationKey: Er,
        onSuccess: e,
        marketAddress: s,
        notificationLoadingMessage: 'Borrowing',
        getNotificationLoadingDescription: ({ amount: h, symbol: l }) =>
          'Borrowing '.concat(String(h), ' ').concat(l, ' from the pool'),
        notificationSuccessMessage: 'Borrow succeeded!',
        notificationSuccessDescriptionPrefix: 'Received',
        notificationErrorMessage: 'Failed to borrow from lending pool',
        notificationErrorDescription: 'Borrow failed',
        getStatusMsg: n,
      });
    return { borrow: p, isLoading: m };
  },
  { formatTokenAllDecimals: Wr } = re,
  on = pe.LENDING.MULTIPLY.BASE,
  an = [],
  Vr = ({
    amount: e,
    marketAddress: s,
    onAmountChange: n,
    onSuccess: o = Le,
    obligation: a,
    reserveStats: r,
    tokenInfo: c,
    tokenMint: i,
    depositReserveAddress: d,
    borrowReserveAddress: p,
    formStats: m,
    getStatusMsg: h,
  }) => {
    if (!a) throw Error('Missing obligation. Please refresh the page and try again.');
    const { walletPublicKey: l } = de(),
      u = Be(),
      { getMarketByAddress: f } = ve(),
      { getReserveByAddress: S } = Ie(),
      { borrow: A, isLoading: w } = Gr({ marketAddress: s, onSuccess: o, getStatusMsg: h }),
      { maxBorrowableAmountDecimal: b } = Lo({ obligation: a, marketAddress: s, tokenMint: i }),
      { isWalletConnect: D } = Ye(),
      { checkIsLiquidityAvailable: L } = To({ reserve: r }),
      M = v.useCallback(() => m.simulated.ltv > m.current.maxLtv, [m]),
      j = v.useMemo(() => P.max(P.min(b.mul(0.999)), 0), [b]),
      { data: N, isFetched: T } = tt([ye]),
      y = N[ye].toNumber(),
      g = v.useCallback(() => {
        A({ tokenMint: i, amount: e, obligation: a });
      }, [e, A, a, i]),
      x = () => {
        const B = r.borrowCap.minus(r.totalBorrowAmount).toNumber(),
          k = B > 0 ? P.min(j, B) : new P(0);
        n(k.toNumber()), u.track(''.concat(on, ':click-borrow-max'));
      },
      _ = () => {
        const B = r.borrowCap.minus(r.totalBorrowAmount).toNumber(),
          k = B > 0 ? P.min(b.div(2), B) : new P(0);
        n(k.toNumber()), u.track(''.concat(on, ':click-borrow-half'));
      },
      C = v.useMemo(() => {
        const I = [];
        D && I.push({ tooltip: Ze, text: 'Wallet Connect', variant: 'primary', isCritical: !0 });
        const B = !M();
        if (
          e > 0 &&
          !L({
            market: f(s),
            reserve: r,
            obligation: a,
            amount: e,
            mode: a.state.elevationGroup === 0 ? Rt.cross : Rt.isolated,
          })
        ) {
          const G = S(p).getLiquidityAvailableForDebtReserveGivenCaps(
            f(s),
            [a.state.elevationGroup],
            [new z(d)]
          );
          I.push({
            text: 'Insufficient Liquidity',
            tooltip: t.jsx(Ds, {
              borrowTokenMint: i,
              liquidityAvailable: Me(G[0].toNumber(), r.decimals).toNumber(),
              liquidityRequired: e,
            }),
            variant: 'warning',
            isCritical: !0,
            hasIcon: !1,
            isFluid: !0,
          });
        }
        B ||
          I.push({
            tooltip: t.jsx(So, { maxLtv: m.current.maxLtv, currentLtv: m.simulated.ltv }),
            text: 'Insufficient Borrow Power',
            variant: 'warning',
            hasIcon: !1,
            isCritical: !0,
          });
        const k = et(e, y, Ne.lending.repay, !!l, T);
        return k && I.push(k), I;
      }, [e, T, p, L, d, m, f, S, M, D, s, a, r, y, i, l]),
      R = v.useMemo(() => {
        const { debtEpochReset: I, dailyDebtCapLimit: B, dailyDebtCapFilled: k } = r,
          G = (I.lte(new P(0)) ? B : B.minus(k)).lt(e);
        return !e || !r || G || !!an.length || C.some((U) => U.isCritical);
      }, [e, r, C]);
    return {
      bottomLeftStat: 'Available: '.concat(Wr(b, c.decimals)),
      errorMessages: an,
      isSubmitDisabled: R,
      isSubmitting: w,
      submitButtonText: e ? 'Borrow '.concat(c.symbol) : 'Enter Borrow Amount',
      value: new P(e).mul(r.price),
      handleSubmit: g,
      handleMax: x,
      handleHalf: _,
      warnings: C,
    };
  },
  qr = ({
    marketAddress: e,
    obligation: s,
    onSuccess: n,
    onStateUpdate: o,
    reserveStats: a,
    state: r,
    tokenInfo: c,
    vault: i,
    formStats: d,
    leverageType: p,
  }) => {
    const { amount: m } = r,
      { collTokenMint: h, debtTokenMint: l } = i,
      { getToken: u } = oe(),
      f = u(h),
      S = u(l),
      A = v.useMemo(
        () =>
          Ve({
            leverageVaultType: p,
            formAction: r.currentFormAction,
            isLong: !!r.isLong,
            collSymbol: f.symbol,
            debtSymbol: S.symbol,
            selectedSymbol: S.symbol,
          }),
        [p, r.isLong, f.symbol, S.symbol, r.currentFormAction]
      ),
      w = v.useCallback((_) => o({ amount: _ }), [o]),
      {
        bottomLeftStat: b,
        errorMessages: D,
        isSubmitDisabled: L,
        isSubmitting: M,
        handleSubmit: j,
        handleMax: N,
        handleHalf: T,
        submitButtonText: y,
        value: g,
        warnings: x,
      } = Vr({
        amount: m,
        marketAddress: e,
        obligation: s,
        borrowReserveAddress: i.borrowReserveAddress,
        depositReserveAddress: i.depositReserveAddress,
        reserveStats: a,
        tokenInfo: c,
        tokenMint: i.debtTokenMint,
        onAmountChange: w,
        onSuccess: n,
        formStats: d,
        getStatusMsg: A,
      });
    return t.jsx(cs, {
      amount: m,
      bottomLeftStat: b,
      errorMessages: D,
      handleAmountChange: w,
      handleHalf: T,
      handleMax: N,
      handleSubmit: j,
      isSubmitting: M,
      isSubmitDisabled: L,
      label: 'You Borrow',
      submitButtonText: y,
      tokenInfo: c,
      value: g,
      warnings: x,
      'data-sentry-element': 'ManageLoanFormTemplate',
      'data-sentry-component': 'BorrowMoreForm',
      'data-sentry-source-file': 'BorrowMoreForm.tsx',
    });
  },
  zr = ({ onSuccess: e = Le, marketAddress: s, isClosingPosition: n, getStatusMsg: o }) => {
    const { wallet: a } = de(),
      { getMarketByAddress: r } = ve(),
      { referrerWallet: c } = We(),
      { data: i } = _t({}),
      d = ''.concat(pe.LENDING.MULTIPLY.BASE, ':repay'),
      p = async ({ amountFormat: l, walletPublicKey: u, tokenMint: f, obligation: S }) => {
        if (!i) throw new Error('Slot is not loaded, please try again');
        return me.KaminoAction.buildRepayTxns(
          r(s),
          n ? me.U64_MAX : l,
          new z(f),
          new z(u),
          S,
          !0,
          void 0,
          i,
          void 0,
          0,
          !0,
          void 0,
          {
            skipInitialization: !1,
            skipLutCreation: (a == null ? void 0 : a.adapter.name) === 'SquadsX',
          },
          c
        );
      },
      { mutate: m, isLoading: h } = ds({
        buildTxns: p,
        notificationKey: d,
        onSuccess: e,
        marketAddress: s,
        notificationLoadingMessage: 'Repaying',
        getNotificationLoadingDescription: () => 'Repaying borrowed funds',
        notificationSuccessMessage: 'Repay succeeded!',
        notificationSuccessDescriptionPrefix: 'Repaid',
        notificationErrorMessage: 'Failed to repay borrowed amount',
        notificationErrorDescription: 'Repay failed',
        getStatusMsg: o,
      });
    return { repay: m, isLoading: h };
  },
  { formatTokenAllDecimals: rn } = re,
  Or = ({ tokenMint: e, amount: s, maxAmount: n }) => {
    const { getToken: o } = oe(),
      { symbol: a, decimals: r } = o(e);
    return t.jsx('div', {
      className: Z.root,
      'data-sentry-component': 'RepayTooBigTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: t.jsxs('div', {
        className: Z.item,
        children: [
          t.jsxs('div', {
            className: Z.title,
            children: [
              t.jsx(Cs, {
                'data-sentry-element': 'CapacityLimitIcon',
                'data-sentry-source-file': 'index.tsx',
              }),
              t.jsx($, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Repay Exceeds Debt Amount',
              }),
            ],
          }),
          t.jsxs('div', {
            className: Z.row,
            children: [
              t.jsx($, {
                fs: 14,
                lh: 18,
                color: 'grey',
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Debt',
              }),
              t.jsxs($, {
                fs: 14,
                lh: 18,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [rn(n, r), ' ', a],
              }),
            ],
          }),
          t.jsxs('div', {
            className: Z.row,
            children: [
              t.jsx($, {
                fs: 14,
                lh: 18,
                color: 'grey',
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Repay Attempt',
              }),
              t.jsxs($, {
                fs: 14,
                lh: 18,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [rn(s, r), ' ', a],
              }),
            ],
          }),
        ],
      }),
    });
  },
  { formatTokenAllDecimals: Ur } = re,
  ln = pe.LENDING.MULTIPLY.BASE,
  Kr = [],
  Qr = ({
    amount: e,
    marketAddress: s,
    onSuccess: n = Le,
    obligation: o,
    reserveStats: a,
    tokenInfo: r,
    tokenMint: c,
    onAmountChange: i,
    getStatusMsg: d,
  }) => {
    if (!o) throw Error('Missing obligation. Please refresh the page and try again.');
    const p = Be(),
      { walletPublicKey: m } = de(),
      { isWalletConnect: h } = Ye(),
      { data: l, isFetched: u } = tt([a.mintAddress, ye]),
      f = l[ye].toNumber(),
      S = v.useMemo(() => l[a.mintAddress.toString()] || 0, [l, a.mintAddress]),
      [A, w] = v.useMemo(() => {
        const y = new P(a.userAmount.borrows),
          g = P.min(y, S);
        return [y, g];
      }, [S, a.userAmount.borrows]),
      { repay: b, isLoading: D } = zr({
        marketAddress: s,
        onSuccess: n,
        isClosingPosition: new P(e).gte(A),
        getStatusMsg: d,
      }),
      L = v.useCallback(() => {
        b({ tokenMint: c, amount: e, obligation: o });
      }, [e, o, b, c]),
      M = () => {
        i(w.toNumber()), p.track(''.concat(ln, ':click-repay-max'));
      },
      j = () => {
        i(w.div(2).toNumber()), p.track(''.concat(ln, ':click-repay-half'));
      },
      N = v.useMemo(() => {
        const y = [];
        h && y.push({ tooltip: Ze, text: 'Wallet Connect', variant: 'primary', isCritical: !0 });
        const g = et(e, f, Ne.leverage.deposit, !!m, u);
        return (
          g && y.push(g),
          e > w.toNumber() &&
            y.push({
              text: 'Reduce Repay',
              variant: 'warning',
              tooltip: t.jsx(Or, { amount: e, maxAmount: w.toNumber(), tokenMint: a.mintAddress }),
              hasIcon: !1,
              isCritical: !0,
            }),
          y
        );
      }, [e, u, h, w, a.mintAddress, f, m]),
      T = !e || !a || N.some((y) => y.isCritical);
    return {
      bottomLeftStat: 'Wallet: '.concat(Ur(S, r.decimals)),
      errorMessages: Kr,
      warnings: N,
      isSubmitDisabled: T,
      isSubmitting: D,
      submitButtonText: e ? 'Repay '.concat(r.symbol) : 'Enter Repay Amount',
      tokenInfo: r,
      value: new P(e).mul(a.price),
      handleSubmit: L,
      handleMax: M,
      handleHalf: j,
      maxAmount: w,
    };
  },
  Hr = ({
    marketAddress: e,
    obligation: s,
    onSuccess: n,
    onStateUpdate: o,
    reserveStats: a,
    state: r,
    tokenInfo: c,
    vault: i,
    leverageType: d,
  }) => {
    const { amount: p } = r,
      { collTokenMint: m, debtTokenMint: h } = i,
      { getToken: l } = oe(),
      u = l(m),
      f = l(h),
      S = v.useMemo(
        () =>
          Ve({
            leverageVaultType: d,
            formAction: r.currentFormAction,
            isLong: !!r.isLong,
            collSymbol: u.symbol,
            debtSymbol: f.symbol,
            selectedSymbol: f.symbol,
          }),
        [d, r.isLong, u.symbol, f.symbol, r.currentFormAction]
      ),
      A = v.useCallback((x) => o({ amount: x }), [o]),
      {
        bottomLeftStat: w,
        errorMessages: b,
        isSubmitDisabled: D,
        isSubmitting: L,
        handleSubmit: M,
        handleMax: j,
        handleHalf: N,
        submitButtonText: T,
        value: y,
        warnings: g,
      } = Qr({
        amount: p,
        marketAddress: e,
        obligation: s,
        borrowReserveAddress: i.borrowReserveAddress,
        depositReserveAddress: i.depositReserveAddress,
        reserveStats: a,
        tokenInfo: c,
        tokenMint: i.debtTokenMint,
        onAmountChange: A,
        onSuccess: n,
        getStatusMsg: S,
      });
    return t.jsx(cs, {
      amount: p,
      bottomLeftStat: w,
      errorMessages: b,
      handleAmountChange: A,
      handleHalf: N,
      handleMax: j,
      handleSubmit: M,
      isSubmitting: L,
      isSubmitDisabled: D,
      label: 'You Repay',
      submitButtonText: T,
      tokenInfo: c,
      value: y,
      warnings: g,
      'data-sentry-element': 'ManageLoanFormTemplate',
      'data-sentry-component': 'RepayDebtForm',
      'data-sentry-source-file': 'RepayDebtForm.tsx',
    });
  },
  cn = (e) =>
    t.jsx(Fn, {
      getCurrentTotalAmount: (s) => s.totalBorrowAmount,
      getSimulatedTotalAmount: (s) => s.totalBorrowAmount,
      tokenMint: e.vault.debtTokenMint,
      reserveAddress: e.vault.borrowReserveAddress,
      formProps: e,
      tabs: [pt.borrowMore, pt.repayDebt],
      tabContentComponents: [qr, Hr],
      initialSelectedTab: pt.borrowMore,
      obligationType: 'Debt',
      formStats: e.formStats,
      'data-sentry-element': 'ManageLoanLayoutTemplate',
      'data-sentry-component': 'ManageDebtForm',
      'data-sentry-source-file': 'ManageDebtForm.tsx',
    }),
  Yr = '_metalGreyGradient_52aeg_9',
  Jr = '_goldGradient_52aeg_15',
  Xr = '_silverGradient_52aeg_21',
  Zr = '_bronzeGradient_52aeg_27',
  ei = '_pointsSilverTextGradient_52aeg_33',
  ti = '_slider_52aeg_39',
  si = '_title_52aeg_42',
  ni = '_warning_52aeg_45',
  oi = '_warnings_52aeg_51',
  ai = '_stats_52aeg_63',
  ri = '_epochResetText_52aeg_66',
  dt = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_52aeg_1',
    metalGreyGradient: Yr,
    goldGradient: Jr,
    silverGradient: Xr,
    bronzeGradient: Zr,
    pointsSilverTextGradient: ei,
    slider: ti,
    title: si,
    warning: ni,
    warnings: oi,
    stats: ai,
    epochResetText: ri,
  },
  ii = ({ onSuccess: e = Le, marketAddress: s, mixpanelPrefix: n, getStatusMsg: o }) => {
    const { walletPublicKey: a, wallet: r, signTransaction: c } = de(),
      i = Be(),
      { getToken: d } = oe(),
      { getMarketByAddress: p } = ve(),
      { setPositionHasUpdated: m } = es(),
      { createVersionedTxWithBudgetIxns: h, getIxns: l } = ts(),
      { kswapSdk: u } = _s(),
      { web3client: f } = Gt(),
      S = ''.concat(pe.LENDING.MULTIPLY.BASE, ':adjust'),
      { kaminoSdk: A } = ys(),
      w = Ot({ marketAddress: s }),
      { getSlippage: b } = ht(),
      { updateProviderParams: D } = Vt,
      { referrerWallet: L } = We(),
      M = v.useCallback(
        async ({
          jupiterQuote: T,
          collTokenMint: y,
          debtTokenMint: g,
          totalDeposited: x,
          totalBorrowed: _,
          targetLeverage: C,
          obligation: R,
          priceCollToDebt: I,
          priceDebtToColl: B,
          getPriceAinB: k,
          currentSlot: E,
        }) => {
          if (!f) throw new Error('Web3client is not loaded');
          if (!a || !r) throw new Error('Wallet is not connected');
          if (!A) throw new Error('Kamino SDK is not loaded');
          if (!T)
            throw new Error('Jupiter quote is not loaded. Please, reload the page and try again');
          if (!u)
            throw new Error('Kswap SDK is not initialized. Please, refresh the page and try again');
          const G = p(s),
            U = G.getReserveByMint(new z(y)),
            V = G.getReserveByMint(new z(g));
          if (!U) throw Error('Collateral Reserve is not found');
          if (!V) throw Error('Debt Reserve is not found');
          const O = await l({ units: 14e5, ixns: [] }),
            K = b(),
            { ixs: W, lookupTables: Y } = await me.getAdjustLeverageIxs({
              budgetAndPriorityFeeIxs: O,
              owner: new z(a),
              kaminoMarket: G,
              priceDebtToColl: new P(B),
              priceCollToDebt: new P(I),
              targetLeverage: new P(C),
              slippagePct: Ss(K, !0),
              depositedLamports: Ft(x, U.stats.decimals),
              borrowedLamports: Ft(_, V.stats.decimals),
              collTokenMint: U.getLiquidityMint(),
              debtTokenMint: V.getLiquidityMint(),
              swapper: (F, H, X) =>
                vs(u, {
                  user: new z(a),
                  connection: f.connection,
                  quote: X.quoteResponse,
                  amountInLamports: F.inputAmountLamports,
                  isBudgetAndAtaIxnsIgnored: !0,
                }),
              referrer: L,
              isKtoken: Is(A),
              priceAinB: k,
              kamino: A,
              obligation: R,
              currentSlot: E,
              quoteBufferBps: new P(0),
              quoter: () => {
                const F = Me(new P(T.inAmount), d(T.inputMint).decimals),
                  X = Me(new P(T.otherAmountThreshold), d(T.outputMint).decimals).div(F);
                return Promise.resolve({ priceAInB: X, quoteResponse: T });
              },
              useV2Ixs: !0,
            });
          return { ixs: W, operationLUTs: Y.map((F) => F.key) };
        },
        [l, p, b, d, A, s, L, r, a, f, u]
      ),
      N = Nt(
        async ({
          jupiterQuote: T,
          collTokenMint: y,
          debtTokenMint: g,
          totalDeposited: x,
          totalBorrowed: _,
          targetLeverage: C,
          vaultType: R,
          lookupTablesAddresses: I,
          obligation: B,
          priceCollToDebt: k,
          priceDebtToColl: E,
          getPriceAinB: G,
          currentSlot: U,
        }) => {
          if (!f) throw new Error('Web3client is not loaded');
          if (!a || !r) throw new Error('Wallet is not connected');
          if (!A) throw new Error('Kamino SDK is not loaded');
          i.track(''.concat(n, ':vault:adjust'), {
            collTokenMint: y.toString(),
            debtTokenMint: g.toString(),
            leverage: C,
          });
          const { ixs: V, operationLUTs: O } = await M({
              jupiterQuote: T,
              collTokenMint: y,
              debtTokenMint: g,
              totalDeposited: x,
              totalBorrowed: _,
              targetLeverage: C,
              vaultType: R,
              lookupTablesAddresses: I,
              obligation: B,
              priceCollToDebt: k,
              priceDebtToColl: E,
              getPriceAinB: G,
              currentSlot: U,
            }),
            K = [...O, ...w, ...I.map((F) => (F && !F.equals(z.default) ? F : void 0))].filter(qt),
            W = await h({ ixns: V, lookupTablesAddresses: K, defaultCu: 14e5 });
          return {
            txid: await Zt({
              signTransaction: c,
              tx: W,
              mainConnection: f.sendConnection,
              extraConnections: f.sendConnectionsExtra,
              mixpanel: i,
            }),
            collTokenMint: y,
            debtTokenMint: g,
          };
        },
        {
          onMutate: ({ vaultType: T }) => {
            D({ isTransactionInProgress: !0 });
            const { message: y, description: g } = o({
              action: 'onMutate',
              amount: 0,
              defaults: {
                message: 'Adjusting leverage',
                description: 'Adjusting the leverage of '.concat(js[T]),
              },
            });
            xe({ message: y, description: g, type: 'loading', key: S });
          },
          onSuccess: (T) => {
            const y = T == null ? void 0 : T.txid,
              { message: g, description: x } = o({
                action: 'onSuccess',
                amount: 0,
                defaults: { message: 'Leverage successfully adjusted!', description: '' },
              });
            xe({ type: 'success', key: S, message: g, description: x, txids: y ? [y] : [] }),
              e(),
              m();
          },
          onError: (T) => {
            He(T), Wt(S);
            const { message: y, description: g } = o({
              action: 'onError',
              amount: 0,
              defaults: {
                message: 'Failed to adjust the leverage of the vault',
                description: Xt(T, 'Leverage adjust failed'),
              },
            });
            xe({
              message: y,
              description: g,
              type: 'error',
              errorTxId: T.txId,
              walletPublicKey: a,
            });
          },
          onSettled: () => {
            D({ isTransactionInProgress: !1 });
          },
        }
      );
    return { onAdjust: N.mutate, isLoading: N.isLoading };
  },
  { formatTokenAllDecimals: Bt, formatPercent: li } = re,
  dn = new P(0);
function ci({ leverage: e, debtTokenInfo: s, debtReserveStats: n, amount: o }) {
  const {
      totalBorrowAmount: a,
      borrowCap: r,
      dailyDebtCapFilled: c,
      dailyDebtCapLimit: i,
      debtEpochReset: d,
    } = n,
    p = Math.max(r.minus(a).toNumber(), 0),
    m = a.plus(o).gt(r),
    l = (d.lte(new P(0)) ? i : i.minus(c)).lt(o),
    u = [],
    f = fo.includes(s.symbol),
    S = f ? Bt(o, 2) : Bt(o, 6);
  if (m) {
    const A = f ? Bt(p, 2) : Bt(p, 6);
    u.push(
      'Borrow attempt is '
        .concat(S, ' ')
        .concat(s.symbol, ' but there is only ')
        .concat(A, ' ')
        .concat(s.symbol, ' capacity available')
    );
  }
  return (
    l && u.push('Daily debt cap was reached.'),
    e === Ae && u.push('Leverage should be higher than 1'),
    u
  );
}
const di = ({
  leverageType: e,
  vault: s,
  obligation: n,
  marketAddress: o,
  formStats: a,
  setupIxns: r,
  leverage: c,
  initialLeverage: i,
}) => {
  const { walletPublicKey: d } = de(),
    { getToken: p } = oe(),
    { getReserveByTokenMint: m } = Ie(),
    { getReserveApys: h } = ft(),
    { collTokenMint: l, debtTokenMint: u, depositReserveAddress: f, borrowReserveAddress: S } = s,
    { isWalletConnect: A } = Ye(),
    { data: w, isFetched: b } = tt([ye]),
    { getSlippage: D, isSlippageTooHigh: L, optimalSlippage: M } = ht(),
    j = w[ye].toNumber(),
    N = p(u),
    T = l === zt,
    y = D(),
    g = e === 'leverage' && a.isLong && c > i,
    { isDisabled: x, messages: _ } = Ln({
      obligation: g ? n : void 0,
      borrowReserveAddress: s.borrowReserveAddress,
      collateralReservesAddresses: g ? [s.depositReserveAddress] : [],
      page: 'leverage',
      mode: Rt.isolated,
    }),
    C = !!r.length,
    { maxBorrowableAmountDecimal: R } = jn({
      marketAddress: o,
      collReserveAddress: f,
      debtReserveAddress: S,
    }),
    { maxBorrowableAmountDecimal: I } = Pn({
      marketAddress: o,
      collReserveAddress: s.depositReserveAddress,
      debtReserveAddress: s.borrowReserveAddress,
    }),
    B = e === 'multiply' ? I : R,
    k = m(o, u);
  if (!k) throw new Error('Reserve is not found');
  const E = a.simulated.totalBorrowAmount - a.current.totalBorrowAmount,
    G = $e({ reserve: k, obligation: n || void 0, getReserveApys: h }),
    U = v.useMemo(() => {
      const F = mt(e);
      return C ? 'Setup Account' : 'Adjust '.concat(e === 'leverage' ? F : '');
    }, [C, e]),
    V = T && c > gt[1] ? 'extreme' : T && c > gt[0] ? 'high' : 'default',
    O = v.useMemo(() => {
      const F = [];
      A && F.push({ tooltip: Ze, text: 'Wallet Connect', variant: 'primary', isCritical: !0 }),
        E > 0 &&
          B.lt(E) &&
          F.push({
            text: 'Insufficient Liquidity',
            tooltip: t.jsx(Ds, {
              borrowTokenMint: u,
              liquidityAvailable: B.toNumber(),
              liquidityRequired: E,
            }),
            variant: 'warning',
            isCritical: !0,
            hasIcon: !1,
            isFluid: !0,
          }),
        V !== 'default' &&
          E > 0 &&
          F.push({
            tooltip: t.jsx(Dn, { variant: V }),
            text: V === 'high' ? 'High Leverage' : 'Extreme Leverage',
            variant: V === 'high' ? 'warning' : 'danger',
            hasIcon: !1,
          }),
        L() &&
          F.push({
            text: 'Slippage Setting >'.concat(li(M)),
            tooltip: t.jsx($s, { currentSlippage: y.toNumber(), optimalSlippagePct: M }),
            variant: 'warning',
            hasIcon: !1,
          });
      const H = et(E, j, Ne.leverage.adjust, !!d, b);
      return H && F.push(H), _ && F.push(..._), F;
    }, [A, E, B, V, L, j, d, b, _, u, M, y]),
    K = v.useMemo(
      () => (C ? [] : ci({ leverage: c, debtTokenInfo: N, debtReserveStats: G, amount: E })),
      [E, G, N, C, c]
    );
  return {
    isDisabled: (i === c || K.length || x || O.some((F) => F.isCritical)) && !C,
    errorMessages: K,
    warnings: O,
    buttonText: U,
    isSetupAccountsRequired: C,
    slippage: y,
    sliderBreakpoints: T ? gt : [],
    sliderVariant: V,
  };
};
function ui({
  leverageType: e,
  vault: s,
  obligation: n,
  state: o,
  marketAddress: a,
  onSuccess: r,
  collTokenMint: c,
  debtTokenMint: i,
  leverage: d,
  priceImpactType: p,
  pythHermesPrices: m,
  stakeRates: h,
  onPriceImpactModalVisibleChange: l,
  refetchPriceImpactAll: u,
}) {
  const f = Et(),
    { getPriceByTokenMintDecimal: S } = ke(),
    { onInvalidate: A } = Ut(),
    { onInvalidate: w } = Ls(),
    { getToken: b } = oe(),
    { data: D } = Ps({ leverageType: e, collTokenMint: c, debtTokenMint: i, marketAddress: a }),
    L = b(c),
    M = b(i),
    j = v.useMemo(
      () =>
        Ve({
          leverageVaultType: e,
          formAction: o.currentFormAction,
          isLong: !!o.isLong,
          collSymbol: L.symbol,
          debtSymbol: M.symbol,
          selectedSymbol: L.symbol,
        }),
      [e, o.currentFormAction, o.isLong, L.symbol, M.symbol]
    ),
    { onAdjust: N, isLoading: T } = ii({
      getStatusMsg: j,
      marketAddress: a,
      mixpanelPrefix: e === 'multiply' ? pe.LENDING.MULTIPLY.BASE : pe.LENDING.LEVERAGE.BASE,
      onSuccess: async () => {
        await f.invalidateQueries({ queryKey: Tt.metrics }),
          r && r(),
          e === 'multiply'
            ? A({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: s.depositReserveAddress,
                borrowReserveAddress: s.borrowReserveAddress,
              })
            : w({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: s.depositReserveAddress,
                borrowReserveAddress: s.borrowReserveAddress,
              });
      },
    });
  return {
    handleAdjustTransaction: async ({ ingorePriceImpactWarning: g = !1 }) => {
      var O, K, W, Y;
      const x = await u();
      if (!x || !x.jupiterQuote) return;
      const {
          priceCollToDebt: _,
          priceDebtToColl: C,
          collToDebtPriceFromQuote: R,
          debtToCollPriceFromQuote: I,
          jupiterQuote: B,
          currentSlot: k,
        } = x,
        E = Je({
          collToDebtPriceFromQuote: R,
          debtToCollPriceFromQuote: I,
          jupiterQuote: B,
          collTokenMint: c,
          pythHermesPrices: m,
          getPriceByTokenMintDecimal: S,
          getToken: b,
          stakeRates: h,
        }),
        G = Xe(p, E.priceImpactBps);
      if (!g && (G > Ts.safe || As(p, E.theoreticalPriceDivergenceBps))) {
        l(!0);
        return;
      }
      const U = Me(
          (K =
            (O = n == null ? void 0 : n.borrows.values().next().value) == null
              ? void 0
              : O.amount) != null
            ? K
            : dn,
          M.decimals
        ),
        V = Me(
          (Y =
            (W = n == null ? void 0 : n.deposits.values().next().value) == null
              ? void 0
              : W.amount) != null
            ? Y
            : dn,
          L.decimals
        );
      N({
        jupiterQuote: B,
        collTokenMint: c,
        debtTokenMint: i,
        totalBorrowed: U,
        totalDeposited: V,
        targetLeverage: d,
        vaultType: e,
        lookupTablesAddresses: D,
        priceCollToDebt: _,
        priceDebtToColl: C,
        getPriceAinB: async (F) => Promise.resolve(F.toString() === c ? _ : C),
        currentSlot: k,
        obligation: n,
      });
    },
    isLoadingAdjustMutation: T,
  };
}
const { formatLeverageSliderV2: mi } = re,
  un = ({
    leverageType: e,
    vault: s,
    state: n,
    onStateUpdate: o,
    formStats: a,
    obligation: r,
    marketAddress: c,
    onSuccess: i,
    pythHermesPrices: d,
  }) => {
    var Q;
    if (!r) throw new Error('AdjustForm requires an existing obligation');
    const { getToken: p } = oe(),
      { walletPublicKey: m } = de(),
      { debtTokenMint: h, collTokenMint: l } = s,
      u = mt(e),
      { getPriceByTokenMintDecimal: f } = ke(),
      {
        data: { setupIxns: S },
      } = ls({ vaultType: e, collTokenMint: l, debtTokenMint: h, marketAddress: c }),
      A = r.refreshedStats.leverage.toNumber(),
      w = (Q = n.leverage) != null ? Q : A,
      b = v.useCallback(
        (q) => {
          o({ leverage: q });
        },
        [o]
      ),
      D = Math.abs(1 - w / A) < 0.005,
      {
        isDisabled: L,
        errorMessages: M,
        warnings: j,
        buttonText: N,
        slippage: T,
        sliderBreakpoints: y,
        sliderVariant: g,
      } = di({
        leverageType: e,
        vault: s,
        obligation: r,
        leverage: w,
        initialLeverage: A,
        marketAddress: c,
        formStats: a,
        setupIxns: S,
      }),
      { data: x, isLoading: _ } = os({ refetchIntervalSeconds: 600 });
    v.useEffect(() => {
      o({ currentFormAction: _e.manageLeverage });
    }, [o]);
    const { isModalVisible: C, onModalVisibleChange: R } = ns(),
      {
        data: I,
        isFetching: B,
        refetch: k,
        dataUpdatedAt: E,
      } = Kt({
        marketAddress: c,
        obligation: r,
        slippage: T,
        debtTokenMint: h,
        collTokenMint: l,
        leverage: w,
        leverageType: e,
        enabled: !D,
        specificProps: { formType: 'adjustLeverage' },
      }),
      G = _ || B,
      {
        priceImpactBps: U,
        theoreticalPrice: V,
        marketPrice: O,
        theoreticalPriceDivergenceBps: K,
      } = v.useMemo(
        () =>
          I
            ? Je({
                debtToCollPriceFromQuote: I.debtToCollPriceFromQuote,
                collToDebtPriceFromQuote: I.collToDebtPriceFromQuote,
                jupiterQuote: I.jupiterQuote,
                collTokenMint: l,
                pythHermesPrices: d,
                getPriceByTokenMintDecimal: f,
                getToken: p,
                stakeRates: x,
              })
            : Qt,
        [l, f, p, d, I, x]
      ),
      W = l.toString() === zt && e === 'multiply' ? 'jlpMultiply' : e,
      { handleAdjustTransaction: Y, isLoadingAdjustMutation: F } = ui({
        leverageType: e,
        vault: s,
        obligation: r,
        state: n,
        marketAddress: c,
        onSuccess: i,
        collTokenMint: l,
        debtTokenMint: h,
        leverage: w,
        walletPublicKey: m,
        priceImpactType: W,
        pythHermesPrices: d,
        stakeRates: x,
        onPriceImpactModalVisibleChange: R,
        refetchPriceImpactAll: async () => (await k()).data,
      }),
      {
        handleSetupAccount: H,
        onCloseSetupModal: X,
        isSetupModalOpened: ae,
      } = Ht({
        leverageType: e,
        collTokenMint: l,
        debtTokenMint: h,
        setupIxns: S,
        walletPublicKey: m,
      }),
      ee = async () => {
        if (S.length > 0) {
          H();
          return;
        }
        await Y({ ingorePriceImpactWarning: !1 });
      };
    return t.jsxs(t.Fragment, {
      children: [
        t.jsxs('div', {
          className: dt.root,
          children: [
            t.jsxs('div', {
              className: dt.slider,
              children: [
                t.jsx($, {
                  className: dt.title,
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'AdjustForm.tsx',
                  children: u,
                }),
                t.jsx(Mn, {
                  min: Ae,
                  value: w,
                  step: 0.1,
                  max: kn(s.maxLeverage),
                  onValueChange: b,
                  formatter: mi,
                  breakpoints: y,
                  variant: g,
                  'data-sentry-element': 'Slider',
                  'data-sentry-source-file': 'AdjustForm.tsx',
                }),
              ],
            }),
            t.jsx('div', {
              className: dt.button,
              children: t.jsx(xt, {
                isFullWidth: !0,
                size: 'large',
                disabled: !!(L || G || F || D),
                isLoading: G,
                loadingLabel: is,
                tooltipMessages: M,
                onClick: ee,
                hideWarnings: !0,
                'data-sentry-element': 'FormButton',
                'data-sentry-source-file': 'AdjustForm.tsx',
                children: N,
              }),
            }),
            t.jsxs('div', {
              className: dt.warnings,
              children: [
                W === 'jlpMultiply' &&
                  w !== A &&
                  t.jsx(Ee, {
                    variant: 'info',
                    hasIcon: !1,
                    tooltip: t.jsx(Fs, {}),
                    text: 'Jupiter Routing',
                  }),
                j.map((q, te) =>
                  v.createElement(
                    Ee,
                    Ce(ge({}, q), { key: ''.concat(q.text.toString() || '', '-').concat(te) })
                  )
                ),
                t.jsx(as, {
                  type: W,
                  priceImpactBps: U,
                  collTokenMint: l,
                  theoreticalPriceDivergenceBps: K,
                  marketPrice: O,
                  theoreticalPrice: V,
                  variant: 'tag',
                  isLong: !!n.isLong,
                  'data-sentry-element': 'PriceImpactNotifications',
                  'data-sentry-source-file': 'AdjustForm.tsx',
                }),
              ],
            }),
            t.jsx('div', {
              className: dt.stats,
              children: t.jsx(ks, {
                isLoading: G,
                isHidden: D || !m,
                stats: a,
                priceImpactBps: U,
                leverageType: e,
                jupiterQuote: I == null ? void 0 : I.jupiterQuote,
                onRefetchData: k,
                dataUpdatedAt: E,
                isLong: !!n.isLong,
                durationSeconds: Yt,
                collateralTokenMint: l,
                debtTokenMint: h,
                flashLoanInfo: I == null ? void 0 : I.flashLoanInfo,
                'data-sentry-element': 'StatsDefault',
                'data-sentry-source-file': 'AdjustForm.tsx',
              }),
            }),
          ],
        }),
        t.jsx(rs, {
          type: Xe(W, U),
          priceImpactType: W,
          priceImpactBps: U,
          theoreticalPriceDivergenceBps: K,
          marketPrice: O,
          theoreticalPrice: V,
          onOk: () => {
            R(!1), Y({ ingorePriceImpactWarning: !0 });
          },
          onCancel: () => {
            R(!1);
          },
          isVisible: C,
          isLoading: G,
          'data-sentry-element': 'PriceImpactWarningModal',
          'data-sentry-source-file': 'AdjustForm.tsx',
        }),
        t.jsx(Jt, {
          isOpen: ae,
          contentType: e,
          onClose: X,
          'data-sentry-element': 'AccountSetupModal',
          'data-sentry-source-file': 'AdjustForm.tsx',
        }),
      ],
    });
  },
  pi = '_metalGreyGradient_129wd_9',
  gi = '_goldGradient_129wd_15',
  fi = '_silverGradient_129wd_21',
  hi = '_bronzeGradient_129wd_27',
  xi = '_pointsSilverTextGradient_129wd_33',
  yi = '_input_129wd_39',
  bi = '_slider_129wd_42',
  wi = '_title_129wd_45',
  vi = '_warning_129wd_48',
  Li = '_warnings_129wd_54',
  Ti = '_stats_129wd_66',
  Si = '_epochResetText_129wd_69',
  ut = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_129wd_1',
    metalGreyGradient: pi,
    goldGradient: gi,
    silverGradient: fi,
    bronzeGradient: hi,
    pointsSilverTextGradient: xi,
    input: yi,
    slider: bi,
    title: wi,
    warning: vi,
    warnings: Li,
    stats: Ti,
    epochResetText: Si,
  },
  _i = (e) => {
    const { obligation: s, isLoading: n, isFetched: o, obligationPda: a } = Po(e);
    return { obligation: s, isLoading: n, isFetched: o, obligationPda: a };
  },
  { formatTokenAllDecimals: mn } = re,
  Ai = ({ onSuccess: e = Le, mixpanelPrefix: s, marketAddress: n, getStatusMsg: o }) => {
    const { walletPublicKey: a, wallet: r, signTransaction: c } = de(),
      i = Be(),
      { getToken: d } = oe(),
      { getMarketByAddress: p } = ve(),
      { web3client: m } = Gt(),
      h = ''.concat(pe.LENDING.MULTIPLY.BASE, ':withdraw'),
      { kaminoSdk: l } = ys(),
      u = Ot({ marketAddress: n }),
      { setPositionHasUpdated: f } = es(),
      { createVersionedTxWithBudgetIxns: S, getIxns: A } = ts(),
      { getSlippage: w } = ht(),
      { kswapSdk: b } = _s(),
      { updateProviderParams: D } = Vt,
      { referrerWallet: L } = We(),
      M = v.useCallback(
        async ({
          selectedTokenMint: T,
          collTokenMint: y,
          debtTokenMint: g,
          amount: x,
          deposited: _,
          borrowed: C,
          isClosingPosition: R,
          obligation: I,
          jupiterQuote: B,
          priceCollToDebt: k,
          currentSlot: E,
        }) => {
          if (!x) throw new Error('Amount should be > 0');
          if (!m) throw new Error('Web3client is not loaded');
          if (!a || !r) throw new Error('Wallet is not connected');
          if (!l) throw new Error('Kamino SDK is not loaded');
          if (!I) throw new Error('Missing obligation. Please refresh the page and try again.');
          if (!b)
            throw new Error('Kswap SDK is not initialized. Please, refresh the page and try again');
          const G = p(n);
          if (!(I != null && I.borrows.size)) {
            const { decimals: F } = d(y),
              H = R ? me.U64_MAX : Ft(new P(x).toFixed(F), F).floor().toString();
            return {
              ixns: await me.KaminoAction.buildWithdrawTxns(
                G,
                H,
                new z(y),
                new z(a),
                I,
                !0,
                void 0,
                0,
                !0,
                void 0,
                {
                  skipInitialization: !1,
                  skipLutCreation: (r == null ? void 0 : r.adapter.name) === 'SquadsX',
                },
                L,
                void 0
              ).then((ae) => [...ae.setupIxs, ...ae.lendingIxs, ...ae.cleanupIxs]),
              operationLUTs: [],
            };
          }
          if (!B)
            throw new Error('Jupiter quote is not loaded. Please, reload the page and try again');
          const V = await A({ units: 14e5, ixns: [] }),
            O = vs,
            K = w(),
            { ixs: W, lookupTables: Y } = await me.getWithdrawWithLeverageIxs({
              budgetAndPriorityFeeIxs: V,
              owner: new z(a),
              deposited: _,
              borrowed: C,
              withdrawAmount: new P(x),
              debtTokenMint: new z(g),
              collTokenMint: new z(y),
              selectedTokenMint: new z(T),
              priceCollToDebt: new P(k),
              isClosingPosition: !!R,
              kaminoMarket: G,
              slippagePct: Ss(K, !0),
              swapper: (F, H, X) =>
                O(b, {
                  user: new z(a),
                  connection: m.connection,
                  quote: X.quoteResponse,
                  amountInLamports: F.inputAmountLamports,
                  isBudgetAndAtaIxnsIgnored: !0,
                }),
              referrer: L,
              isKtoken: Is(l),
              kamino: l,
              obligation: I || null,
              currentSlot: E,
              quoteBufferBps: new P(0),
              quoter: () => {
                const F = Me(new P(B.inAmount), d(B.inputMint).decimals),
                  X = Me(new P(B.otherAmountThreshold), d(B.outputMint).decimals).div(F);
                return Promise.resolve({ priceAInB: X, quoteResponse: B });
              },
              useV2Ixs: !0,
            });
          return { ixns: W, operationLUTs: Y.map((F) => F.key) };
        },
        [A, p, w, d, l, n, L, r, a, m, b]
      ),
      N = Nt(
        async ({
          selectedTokenMint: T,
          collTokenMint: y,
          debtTokenMint: g,
          amount: x,
          deposited: _,
          borrowed: C,
          vaultType: R,
          isClosingPosition: I,
          lookupTablesAddresses: B,
          obligation: k,
          jupiterQuote: E,
          priceCollToDebt: G,
          currentSlot: U,
        }) => {
          if (!x) return;
          if (!m) throw new Error('Web3client is not loaded');
          if (!a || !r) throw new Error('Wallet is not connected');
          if (!l) throw new Error('Kamino SDK is not loaded');
          i.track(''.concat(s, ':vault:withdraw'), {
            selectedTokenMint: T.toString(),
            collTokenMint: y.toString(),
            debtTokenMint: g.toString(),
            amount: x,
          });
          const { ixns: V, operationLUTs: O } = await M({
              selectedTokenMint: T,
              collTokenMint: y,
              debtTokenMint: g,
              amount: x,
              deposited: _,
              borrowed: C,
              vaultType: R,
              isClosingPosition: I,
              lookupTablesAddresses: B,
              obligation: k,
              jupiterQuote: E,
              priceCollToDebt: G,
              currentSlot: U,
            }),
            K = [...O, ...u, ...B.map((F) => (F && !F.equals(z.default) ? F : void 0))].filter(qt),
            W = await S({ ixns: V, lookupTablesAddresses: K, defaultCu: 14e5 });
          return {
            txid: await Zt({
              signTransaction: c,
              tx: W,
              mainConnection: m.sendConnection,
              extraConnections: m.sendConnectionsExtra,
              mixpanel: i,
            }),
            collTokenMint: y,
            debtTokenMint: g,
            amount: x,
            selectedTokenMint: T,
          };
        },
        {
          onMutate: ({ selectedTokenMint: T, vaultType: y, amount: g }) => {
            const { symbol: x, decimals: _ } = d(T);
            D({ isTransactionInProgress: !0 });
            const { message: C, description: R } = o({
              action: 'onMutate',
              amount: mn(new P(g).toNumber(), _),
              defaults: {
                message: 'Withdrawing',
                description: 'Withdrawing '.concat(x, ' from ').concat(js[y]),
              },
            });
            xe({ message: C, description: R, type: 'loading', key: h });
          },
          onSuccess: (T) => {
            const { txid: y, amount: g = 0, selectedTokenMint: x = '' } = T || {},
              { decimals: _ } = d(x),
              { message: C, description: R } = o({
                action: 'onSuccess',
                amount: mn(new P(g).toNumber(), _),
                defaults: { message: 'Withdraw succeeded!', description: '' },
              });
            xe({ type: 'success', key: h, message: C, description: R, txids: y ? [y] : [] }),
              e(),
              f();
          },
          onError: (T, { amount: y }) => {
            He(T), Wt(h);
            const { message: g, description: x } = o({
              action: 'onError',
              amount: y,
              defaults: {
                message: 'Failed to withdraw from the Vault',
                description: Xt(T, 'Withdraw failed'),
              },
            });
            xe({
              message: g,
              description: x,
              type: 'error',
              errorTxId: T.txId,
              walletPublicKey: a,
            });
          },
          onSettled: () => {
            D({ isTransactionInProgress: !1 });
          },
        }
      );
    return { onWithdraw: N.mutate, isLoading: N.isLoading };
  },
  { formatPercent: Mi } = re,
  Rn = ({
    vault: e,
    leverageType: s,
    marketAddress: n,
    formStats: o,
    onStateUpdate: a,
    state: r,
  }) => {
    var bt, Re;
    const { walletPublicKey: c } = de(),
      { getToken: i } = oe(),
      { getReserveByTokenMint: d } = Ie(),
      p = Be(),
      { getPriceByTokenMintDecimal: m } = ke(),
      { getReserveApys: h } = ft(),
      { isWalletConnect: l } = Ye(),
      { getMarketByAddress: u } = ve(),
      f = u(n),
      { getSlippage: S, isSlippageTooHigh: A, optimalSlippage: w } = ht(),
      { collTokenMint: b, debtTokenMint: D } = e,
      L = i(b),
      M = i(D),
      j = v.useMemo(() => {
        var se;
        return s === 'multiply' && Ks(D)
          ? b
          : ((se = r == null ? void 0 : r.selectedTokenInfo) == null ? void 0 : se.address) || D;
      }, [b, D, s, r]),
      N = i(j),
      { data: T, isFetched: y } = tt([ye]),
      g = T[ye].toNumber(),
      x = S(),
      {
        data: { setupIxns: _ },
      } = ls({ vaultType: s, collTokenMint: b, debtTokenMint: D, marketAddress: n }),
      { obligation: C, isLoading: R } = _i({
        tag: s === 'multiply' ? Us.Multiply : Us.Leverage,
        tokenMint: b,
        debtToken: D,
        marketAddress: n,
      }),
      { leverage: I, setLeverage: B } = Cn({
        obligation: C,
        onLeverageUpdate: a,
        leverage: r.leverage,
      }),
      k = v.useMemo(() => r.amount || 0, [r.amount]),
      E = (se) => {
        a({ amount: se });
      };
    v.useEffect(() => {
      (!r.selectedTokenInfo ||
        (r.selectedTokenInfo.address !== D && r.selectedTokenInfo.address !== b)) &&
        a({ selectedTokenInfo: i(b) });
    }, [r.selectedTokenInfo, D, a, i, b]);
    const G = d(n, j),
      U = f.getReserveByMint(new z(D)),
      V = f.getReserveByMint(new z(b));
    if (!G || !U || !V) throw new Error('Reserve is not found');
    const O = $e({ reserve: V, obligation: C || void 0, getReserveApys: h }),
      { price: K, dailyWithdrawCapFilled: W, dailyWithdrawCapLimit: Y, withdrawEpochReset: F } = O,
      H = $e({ reserve: U, obligation: C || void 0, getReserveApys: h }),
      { price: X, mintAddress: ae } = H,
      ee = $e({ reserve: G, obligation: C || void 0, getReserveApys: h }),
      { price: Q } = ee,
      q = j === ae ? W.mul(K).div(X) : W,
      te = j === ae ? Y.mul(K).div(X) : Y,
      je = (F.lte(new P(0)) ? te : te.minus(q)).lt(k),
      Te = v.useMemo(() => new P(k).mul(Q), [k, Q]),
      Pe = o,
      fe = m(b),
      ue = C
        ? Me(
            ((bt = Array.from(C.deposits.values())[0]) == null ? void 0 : bt.amount.toString()) ||
              '0',
            L.decimals
          )
        : new P(0),
      Se = C
        ? Me(
            ((Re = Array.from(C.borrows.values())[0]) == null ? void 0 : Re.amount.toString()) ||
              '0',
            M.decimals
          )
        : new P(0),
      ce = Fo({
        depositAmount: 0,
        withdrawAmount: 0,
        deposited: ue.toNumber(),
        borrowed: Se.toNumber(),
        depositReserveAddress: V.address,
        borrowReserveAddress: U.address,
        selectedTokenMint: j,
        debtTokenMint: D,
        collTokenMint: b,
        targetLeverage: (C == null ? void 0 : C.refreshedStats.leverage.toNumber()) || 1,
        activeTab: ne.withdraw,
        borrowFactor: 0,
        marketAddress: n,
      }),
      we = v.useMemo(() => {
        let se = new P(0);
        return (
          j === b && ce && (se = ce == null ? void 0 : ce.netValueUsd.div(fe)),
          j === D && ce && (se = ce == null ? void 0 : ce.netValue),
          P.max(0, se)
        );
      }, [j, b, ce, D, fe]),
      qe = v.useMemo(() => {
        if (s !== 'multiply') return we;
        const se = Bs[b] || 1 / 0;
        return P.min(se, we);
      }, [we, b, s]),
      st = () => {
        E(qe.toNumber()), p.track('lending:'.concat(s, ':click-deposit-max'));
      },
      nt = () => {
        E(qe.div(2).toNumber()), p.track('lending:'.concat(s, ':click-deposit-half'));
      },
      yt = (se) => E(se),
      ot = (se) => B(se),
      ze = (se) => {
        a({ selectedTokenInfo: i(se) });
      },
      Fe = v.useMemo(() => (s === 'multiply' && Ks(M.address) ? [L] : [L, M]), [L, M, s]),
      Oe = v.useMemo(() => {
        const se = [];
        l && se.push({ tooltip: Ze, text: 'Wallet Connect', variant: 'primary', isCritical: !0 }),
          A() &&
            se.push({
              text: 'Slippage Setting >'.concat(Mi(w)),
              tooltip: t.jsx($s, { currentSlippage: x.toNumber(), optimalSlippagePct: w }),
              variant: 'warning',
              hasIcon: !1,
            });
        const Mt = et(k, g, Ne.leverage.withdraw, !!c, y);
        Mt && se.push(Mt);
        const Ct = $n(k, b, !!c, s);
        return Ct && se.push(Ct), se;
      }, [k, y, A, l, w, x, g, c, s, b]),
      us = !k || k > we.toNumber() || je || Oe.some((se) => se.isCritical);
    return {
      amount: k,
      borrowed: Se,
      deposited: ue,
      hasActiveObligation: !R && !!C && !!(C != null && C.refreshedStats.netAccountValue),
      isDisabled: us,
      leverage: I,
      maxAmount: we,
      onAmountChange: yt,
      onHalfDepositClick: nt,
      onLeverageChange: ot,
      onMaxDepositClick: st,
      onSelectedTokenChange: ze,
      selectedTokenInfo: N,
      selectedTokenMint: j,
      setupIxns: _,
      slippage: x,
      stats: Pe,
      tokensInfos: Fe,
      value: Te,
      warnings: Oe,
    };
  };
function Nn({
  leverageType: e,
  vault: s,
  obligation: n,
  state: o,
  marketAddress: a,
  onSuccess: r,
  collTokenMint: c,
  debtTokenMint: i,
  priceImpactType: d,
  pythHermesPrices: p,
  stakeRates: m,
  onPriceImpactModalVisibleChange: h,
  refetchPriceImpactAll: l,
  selectedTokenMint: u,
  amount: f,
  deposited: S,
  borrowed: A,
  maxAmount: w,
}) {
  const { borrowReserveAddress: b, depositReserveAddress: D } = s,
    L = Et(),
    { getPriceByTokenMintDecimal: M } = ke(),
    { onInvalidate: j } = Ut(),
    { onInvalidate: N } = Ls(),
    { getToken: T } = oe(),
    { data: y } = Ps({ leverageType: e, collTokenMint: c, debtTokenMint: i, marketAddress: a }),
    g = T(c),
    x = T(i),
    _ = T(u),
    C = v.useMemo(
      () =>
        Ve({
          leverageVaultType: e,
          formAction: o.currentFormAction,
          isLong: !!o.isLong,
          collSymbol: g.symbol,
          debtSymbol: x.symbol,
          selectedSymbol: _.symbol,
        }),
      [e, o.isLong, g.symbol, x.symbol, _.symbol, o.currentFormAction]
    ),
    { onWithdraw: R, isLoading: I } = Ai({
      getStatusMsg: C,
      marketAddress: a,
      mixpanelPrefix: e === 'multiply' ? pe.LENDING.MULTIPLY.BASE : pe.LENDING.LEVERAGE.BASE,
      onSuccess: async () => {
        await L.invalidateQueries({ queryKey: Tt.metrics }),
          r(),
          e === 'multiply'
            ? j({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: D,
                borrowReserveAddress: b,
              })
            : N({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: D,
                borrowReserveAddress: b,
              });
      },
    });
  return {
    handleWithdrawTransaction: async ({ ingorePriceImpactWarning: k = !1 }) => {
      const E = await l();
      if (!E || !E.jupiterQuote) return;
      const {
          priceCollToDebt: G,
          collToDebtPriceFromQuote: U,
          debtToCollPriceFromQuote: V,
          jupiterQuote: O,
        } = E,
        K = Je({
          collToDebtPriceFromQuote: U,
          debtToCollPriceFromQuote: V,
          jupiterQuote: O,
          collTokenMint: c,
          pythHermesPrices: p,
          getPriceByTokenMintDecimal: M,
          getToken: T,
          stakeRates: m,
        }),
        W = Xe(d, K.priceImpactBps);
      if (!k && (W > Ts.safe || As(d, K.theoreticalPriceDivergenceBps))) {
        h(!0);
        return;
      }
      R({
        selectedTokenMint: u,
        collTokenMint: c,
        jupiterQuote: O,
        priceCollToDebt: G,
        debtTokenMint: i,
        amount: f,
        deposited: S,
        borrowed: A,
        vaultType: e,
        isClosingPosition: vn(w, new P(f)),
        lookupTablesAddresses: y,
        obligation: n,
        currentSlot: E.currentSlot,
      });
    },
    isLoadingMutation: I,
  };
}
const { formatTokenAllDecimals: Ci } = re,
  Ii = ({
    leverageType: e,
    vault: s,
    onStateUpdate: n,
    marketAddress: o,
    obligation: a,
    pythHermesPrices: r,
    formStats: c,
    onSuccess: i,
    state: d,
  }) => {
    const { getToken: p } = oe(),
      { walletPublicKey: m } = de(),
      { debtTokenMint: h, collTokenMint: l } = s,
      { getPriceByTokenMintDecimal: u } = ke(),
      {
        amount: f,
        borrowed: S,
        deposited: A,
        isDisabled: w,
        leverage: b,
        maxAmount: D,
        onAmountChange: L,
        onHalfDepositClick: M,
        onMaxDepositClick: j,
        onSelectedTokenChange: N,
        selectedTokenInfo: T,
        selectedTokenMint: y,
        setupIxns: g,
        slippage: x,
        stats: _,
        tokensInfos: C,
        value: R,
        warnings: I,
      } = Rn({
        vault: s,
        leverageType: e,
        marketAddress: o,
        onStateUpdate: n,
        state: d,
        formStats: c,
      }),
      B = l.toString() === zt && e === 'multiply' ? 'jlpMultiply' : e,
      {
        isConfirm: k,
        isModalVisible: E,
        onModalVisibleChange: G,
        onConfirm: U,
        onConfirmChange: V,
      } = Sn({ dontRemindAgainLocalStorageKey: 'multiply.dontShowFirstDepositInfoModal' }),
      { isModalVisible: O, onModalVisibleChange: K } = ns(),
      {
        data: W,
        isFetching: Y,
        refetch: F,
        dataUpdatedAt: H,
      } = Kt({
        marketAddress: o,
        obligation: a,
        slippage: x,
        debtTokenMint: h,
        collTokenMint: l,
        leverage: b,
        leverageType: e,
        enabled: f > 0,
        specificProps: {
          formType: 'withdraw',
          amount: f,
          selectedTokenMint: y,
          deposited: A,
          borrowed: S,
          maxAmount: D,
        },
      }),
      { data: X, isLoading: ae } = os({ refetchIntervalSeconds: 600 }),
      ee = ae || Y,
      {
        priceImpactBps: Q,
        theoreticalPrice: q,
        marketPrice: te,
        theoreticalPriceDivergenceBps: be,
      } = v.useMemo(
        () =>
          W
            ? Je({
                debtToCollPriceFromQuote: W.debtToCollPriceFromQuote,
                collToDebtPriceFromQuote: W.collToDebtPriceFromQuote,
                jupiterQuote: W.jupiterQuote,
                collTokenMint: l,
                pythHermesPrices: r,
                getPriceByTokenMintDecimal: u,
                getToken: p,
                stakeRates: X,
              })
            : Qt,
        [l, u, p, r, W, X]
      ),
      { handleWithdrawTransaction: je, isLoadingMutation: Te } = Nn({
        leverageType: e,
        vault: s,
        obligation: a,
        state: d,
        marketAddress: o,
        onSuccess: () => {
          i == null || i(), n({ amount: 0, leverage: Ae });
        },
        collTokenMint: l,
        debtTokenMint: h,
        priceImpactType: e,
        pythHermesPrices: r,
        stakeRates: X,
        onPriceImpactModalVisibleChange: K,
        refetchPriceImpactAll: async () => (await F()).data,
        selectedTokenMint: y,
        amount: f,
        deposited: A,
        borrowed: S,
        maxAmount: D,
        walletPublicKey: m,
      }),
      {
        handleSetupAccount: Pe,
        onCloseSetupModal: fe,
        isSetupModalOpened: ue,
      } = Ht({
        leverageType: e,
        collTokenMint: l,
        debtTokenMint: h,
        setupIxns: g,
        walletPublicKey: m,
      }),
      Se = async ({ ingorePriceImpactWarning: ce = !1 }) => {
        if (g.length) {
          Pe();
          return;
        }
        await je({ ingorePriceImpactWarning: ce });
      };
    return t.jsxs(t.Fragment, {
      children: [
        t.jsxs('div', {
          className: ut.root,
          children: [
            t.jsx('div', {
              className: ut.input,
              children: t.jsx(At, {
                value: f,
                label: 'You withdraw',
                topStat: new P(R),
                variant: 'secondary',
                tokensInfos: C,
                bottomLeftStat: 'Available: '.concat(Ci(D, T.decimals)),
                defaultSelectedTokenMint: T.address,
                onSelectedTokenChange: N,
                onInputChange: L,
                onMax: j,
                onHalf: M,
                'data-sentry-element': 'LargeInput',
                'data-sentry-source-file': 'WithdrawForm.tsx',
              }),
            }),
            t.jsx('div', { className: ut.warning }),
            t.jsx('div', {
              className: ut.button,
              children: t.jsx(xt, {
                isFullWidth: !0,
                size: 'large',
                disabled: w || ee || Te,
                isLoading: ee,
                loadingLabel: ee ? is : '',
                onClick: () => Se({ ingorePriceImpactWarning: !1 }),
                isRestrictionsIgnored: ws,
                'data-sentry-element': 'FormButton',
                'data-sentry-source-file': 'WithdrawForm.tsx',
                children: g.length ? 'Setup Account' : 'Withdraw '.concat(T.symbol),
              }),
            }),
            t.jsxs('div', {
              className: ut.warnings,
              children: [
                B === 'jlpMultiply' &&
                  f > 0 &&
                  t.jsx(Ee, {
                    variant: 'info',
                    hasIcon: !1,
                    tooltip: t.jsx(Fs, {}),
                    text: 'Jupiter Routing',
                  }),
                I.map((ce, we) =>
                  v.createElement(
                    Ee,
                    Ce(ge({}, ce), { key: ''.concat(ce.text.toString() || '', '-').concat(we) })
                  )
                ),
                t.jsx(as, {
                  type: B,
                  priceImpactBps: Q,
                  collTokenMint: l,
                  theoreticalPriceDivergenceBps: be,
                  marketPrice: te,
                  theoreticalPrice: q,
                  variant: 'tag',
                  isLong: !d.isLong,
                  'data-sentry-element': 'PriceImpactNotifications',
                  'data-sentry-source-file': 'WithdrawForm.tsx',
                }),
              ],
            }),
            t.jsx('div', {
              className: ut.stats,
              children: t.jsx(ks, {
                isLoading: ee,
                isHidden: !f || !m,
                collateralTokenMint: l,
                debtTokenMint: h,
                stats: _,
                priceImpactBps: Q,
                leverageType: e,
                jupiterQuote: W == null ? void 0 : W.jupiterQuote,
                onRefetchData: F,
                dataUpdatedAt: H,
                isLong: !!d.isLong,
                durationSeconds: Yt,
                flashLoanInfo: W == null ? void 0 : W.flashLoanInfo,
                'data-sentry-element': 'StatsDefault',
                'data-sentry-source-file': 'WithdrawForm.tsx',
              }),
            }),
            t.jsx(_n, {
              isConfirm: k,
              onConfirmChange: V,
              isVisible: E,
              onHide: () => G(!1),
              onConfirmDeposit: (ce) => {
                U(ce), je({ ingorePriceImpactWarning: !1 });
              },
              'data-sentry-element': 'FirstDepositInfoModal',
              'data-sentry-source-file': 'WithdrawForm.tsx',
            }),
          ],
        }),
        t.jsx(rs, {
          type: Xe(B, Q),
          priceImpactType: B,
          priceImpactBps: Q,
          theoreticalPriceDivergenceBps: be,
          marketPrice: te,
          theoreticalPrice: q,
          onOk: () => {
            K(!1), Se({ ingorePriceImpactWarning: !0 });
          },
          onCancel: () => {
            K(!1);
          },
          isVisible: O,
          isLoading: ee,
          'data-sentry-element': 'PriceImpactWarningModal',
          'data-sentry-source-file': 'WithdrawForm.tsx',
        }),
        t.jsx(Jt, {
          isOpen: ue,
          contentType: e,
          onClose: fe,
          'data-sentry-element': 'AccountSetupModal',
          'data-sentry-source-file': 'WithdrawForm.tsx',
        }),
      ],
    });
  },
  ji = '_metalGreyGradient_1i7vd_9',
  Pi = '_goldGradient_1i7vd_15',
  Di = '_silverGradient_1i7vd_21',
  $i = '_bronzeGradient_1i7vd_27',
  Bi = '_pointsSilverTextGradient_1i7vd_33',
  ki = '_input_1i7vd_39',
  Fi = '_warning_1i7vd_42',
  Ri = '_notificationMb_1i7vd_48',
  Ni = '_notificationMt_1i7vd_51',
  Ei = '_slider_1i7vd_54',
  Gi = '_title_1i7vd_57',
  Wi = '_warnings_1i7vd_60',
  Vi = '_stats_1i7vd_72',
  qi = '_statsItem_1i7vd_78',
  zi = '_tabs_1i7vd_83',
  Oi = '_notificationsCloseNoBorrowPosition_1i7vd_86',
  he = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1i7vd_1',
    metalGreyGradient: ji,
    goldGradient: Pi,
    silverGradient: Di,
    bronzeGradient: $i,
    pointsSilverTextGradient: Bi,
    input: ki,
    warning: Fi,
    notificationMb: Ri,
    notificationMt: Ni,
    slider: Ei,
    title: Gi,
    warnings: Wi,
    stats: Vi,
    statsItem: qi,
    tabs: zi,
    notificationsCloseNoBorrowPosition: Oi,
  },
  { formatTokenAllDecimals: Ui } = re,
  Ki = ({
    leverageType: e,
    vault: s,
    onStateUpdate: n,
    marketAddress: o,
    obligation: a,
    pythHermesPrices: r,
    formStats: c,
    onSuccess: i,
    state: d,
  }) => {
    const { getToken: p } = oe(),
      { walletPublicKey: m } = de(),
      { debtTokenMint: h, collTokenMint: l } = s,
      { getPriceByTokenMintDecimal: u } = ke(),
      {
        amount: f,
        borrowed: S,
        deposited: A,
        isDisabled: w,
        leverage: b,
        maxAmount: D,
        onMaxDepositClick: L,
        onSelectedTokenChange: M,
        selectedTokenInfo: j,
        selectedTokenMint: N,
        setupIxns: T,
        slippage: y,
        tokensInfos: g,
        value: x,
        warnings: _,
      } = Rn({
        formStats: c,
        leverageType: e,
        marketAddress: o,
        onStateUpdate: n,
        state: d,
        vault: s,
      });
    v.useEffect(() => {
      n({ currentFormAction: _e.closePosition });
    }, [n]);
    const { isModalVisible: C, onModalVisibleChange: R } = ns(),
      {
        data: I,
        isFetching: B,
        refetch: k,
        dataUpdatedAt: E,
      } = Kt({
        marketAddress: o,
        obligation: a,
        slippage: y,
        debtTokenMint: h,
        collTokenMint: l,
        leverage: b,
        leverageType: e,
        enabled: f > 0,
        specificProps: {
          formType: 'withdraw',
          amount: f,
          selectedTokenMint: N,
          deposited: A,
          borrowed: S,
          maxAmount: D,
        },
      }),
      { data: G, isLoading: U } = os({ refetchIntervalSeconds: 600 }),
      V = U || B,
      {
        priceImpactBps: O,
        theoreticalPrice: K,
        marketPrice: W,
        theoreticalPriceDivergenceBps: Y,
      } = v.useMemo(
        () =>
          I
            ? Je({
                debtToCollPriceFromQuote: I.debtToCollPriceFromQuote,
                collToDebtPriceFromQuote: I.collToDebtPriceFromQuote,
                jupiterQuote: I.jupiterQuote,
                collTokenMint: l,
                pythHermesPrices: r,
                getPriceByTokenMintDecimal: u,
                getToken: p,
                stakeRates: G,
              })
            : Qt,
        [l, u, p, r, I, G]
      ),
      F = (I == null ? void 0 : I.flashLoanInfo.flashLoanFee.mul(100).toNumber()) || 0,
      { handleWithdrawTransaction: H, isLoadingMutation: X } = Nn({
        leverageType: e,
        vault: s,
        obligation: a,
        state: d,
        marketAddress: o,
        onSuccess: () => {
          i == null || i(), n({ amount: 0, leverage: Ae });
        },
        collTokenMint: l,
        debtTokenMint: h,
        priceImpactType: e,
        pythHermesPrices: r,
        stakeRates: G,
        onPriceImpactModalVisibleChange: R,
        refetchPriceImpactAll: async () => (await k()).data,
        selectedTokenMint: N,
        amount: f,
        deposited: A,
        borrowed: S,
        maxAmount: D,
        walletPublicKey: m,
      }),
      {
        handleSetupAccount: ae,
        onCloseSetupModal: ee,
        isSetupModalOpened: Q,
      } = Ht({
        leverageType: e,
        collTokenMint: l,
        debtTokenMint: h,
        setupIxns: T,
        walletPublicKey: m,
      }),
      q = async ({ ingorePriceImpactWarning: te = !1 }) => {
        if (T.length) {
          ae();
          return;
        }
        await H({ ingorePriceImpactWarning: te });
      };
    return (
      v.useEffect(() => {
        L();
      }, [L, j.address]),
      t.jsxs(t.Fragment, {
        children: [
          t.jsxs('div', {
            className: he.root,
            children: [
              t.jsx('div', {
                className: he.tabs,
                children: t.jsx(bs, {
                  isFullWidth: !0,
                  onChange: M,
                  tabs: g.map((te) => ({ key: te.address, label: 'Close to '.concat(te.symbol) })),
                  activeKey: j.address,
                  'data-sentry-element': 'Tabs',
                  'data-sentry-source-file': 'ClosePositionForm.tsx',
                }),
              }),
              t.jsx('div', {
                className: he.input,
                children: t.jsx(At, {
                  value: f,
                  label: 'You Receive',
                  topStat: new P(x),
                  variant: 'secondary',
                  tokensInfos: [j],
                  defaultSelectedTokenMint: j.address,
                  onInputChange: Le,
                  disabled: !0,
                  'data-sentry-element': 'LargeInput',
                  'data-sentry-source-file': 'ClosePositionForm.tsx',
                }),
              }),
              t.jsx('div', { className: he.warning }),
              t.jsx('div', {
                className: he.button,
                children: t.jsx(xt, {
                  isFullWidth: !0,
                  size: 'large',
                  disabled: w || V || X,
                  isLoading: V,
                  loadingLabel: V ? is : '',
                  onClick: () => q({ ingorePriceImpactWarning: !1 }),
                  isRestrictionsIgnored: ws,
                  'data-sentry-element': 'FormButton',
                  'data-sentry-source-file': 'ClosePositionForm.tsx',
                  children: T.length ? 'Setup Account' : 'Close Position',
                }),
              }),
              t.jsxs('div', {
                className: he.warnings,
                children: [
                  _.map((te, be) =>
                    v.createElement(
                      Ee,
                      Ce(ge({}, te), { key: ''.concat(te.text.toString() || '', '-').concat(be) })
                    )
                  ),
                  t.jsx(as, {
                    type: e,
                    priceImpactBps: O,
                    collTokenMint: l,
                    theoreticalPriceDivergenceBps: Y,
                    marketPrice: W,
                    theoreticalPrice: K,
                    variant: 'tag',
                    isLong: !d.isLong,
                    'data-sentry-element': 'PriceImpactNotifications',
                    'data-sentry-source-file': 'ClosePositionForm.tsx',
                  }),
                ],
              }),
              t.jsxs('div', {
                className: he.stats,
                children: [
                  t.jsx(ss, {
                    withSlippage: !0,
                    'data-sentry-element': 'TransactionSettingButton',
                    'data-sentry-source-file': 'ClosePositionForm.tsx',
                  }),
                  m &&
                    t.jsxs(t.Fragment, {
                      children: [
                        t.jsx(An, {
                          withFillPrice: !0,
                          priceImpactBps: O,
                          leverageType: e,
                          jupiterQuote: I == null ? void 0 : I.jupiterQuote,
                          isLoading: V,
                          onRefetchData: k,
                          dataUpdatedAt: E,
                          defaultIsCollapsed: !0,
                          durationSeconds: Yt,
                        }),
                        F > 0 &&
                          t.jsxs('div', {
                            className: he.statsItem,
                            children: [
                              t.jsx(bn, {
                                render: () =>
                                  t.jsx($, {
                                    children:
                                      "Flash loan fee, added to the protocol to prevent spamming of Kamino's flash loan mechanism",
                                  }),
                                clickable: !0,
                                children: t.jsx($, {
                                  color: 'grey',
                                  underline: !0,
                                  children: 'Flash borrow fee',
                                }),
                              }),
                              t.jsx($, { color: 'white', children: Ui(F, 3) }),
                            ],
                          }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          t.jsx(rs, {
            type: Xe(e, O),
            priceImpactType: e,
            priceImpactBps: O,
            theoreticalPriceDivergenceBps: Y,
            marketPrice: W,
            theoreticalPrice: K,
            onOk: () => {
              R(!1), q({ ingorePriceImpactWarning: !0 });
            },
            onCancel: () => {
              R(!1);
            },
            isVisible: C,
            isLoading: V,
            'data-sentry-element': 'PriceImpactWarningModal',
            'data-sentry-source-file': 'ClosePositionForm.tsx',
          }),
          t.jsx(Jt, {
            isOpen: Q,
            contentType: e,
            onClose: ee,
            'data-sentry-element': 'AccountSetupModal',
            'data-sentry-source-file': 'ClosePositionForm.tsx',
          }),
        ],
      })
    );
  },
  Qi = ({ onSuccess: e = Le, marketAddress: s, getStatusMsg: n }) => {
    const o = ''.concat(pe.LENDING.MULTIPLY.BASE, ':deposit'),
      { wallet: a } = de(),
      { getMarketByAddress: r } = ve(),
      { referrerWallet: c } = We(),
      i = async ({ amountFormat: m, walletPublicKey: h, tokenMint: l, obligation: u }) =>
        me.KaminoAction.buildDepositTxns(
          r(s),
          m,
          new z(l),
          new z(h),
          u,
          !0,
          void 0,
          0,
          void 0,
          void 0,
          {
            skipInitialization: !1,
            skipLutCreation: (a == null ? void 0 : a.adapter.name) === 'SquadsX',
          },
          c
        ),
      { mutate: d, isLoading: p } = ds({
        buildTxns: i,
        notificationKey: o,
        onSuccess: e,
        marketAddress: s,
        notificationLoadingMessage: 'Depositing',
        getNotificationLoadingDescription: ({ symbol: m }) =>
          'Depositing '.concat(m, ' into the market'),
        notificationSuccessMessage: 'Deposit succeeded!',
        notificationSuccessDescriptionPrefix: 'Deposited',
        notificationErrorMessage: 'Failed to deposit to lending',
        notificationErrorDescription: 'Deposit failed',
        getStatusMsg: n,
      });
    return { deposit: d, isLoading: p };
  },
  { formatTokenAllDecimals: pn } = re,
  gn = pe.LENDING.MULTIPLY.BASE,
  Hi = ({
    amount: e,
    marketAddress: s,
    onAmountChange: n,
    onSuccess: o = Le,
    obligation: a,
    reserveStats: r,
    tokenInfo: c,
    tokenMint: i,
    getStatusMsg: d,
  }) => {
    if (!a) throw Error('Missing obligation. Please refresh the page and try again.');
    const p = Be(),
      { deposit: m, isLoading: h } = Qi({ marketAddress: s, onSuccess: o, getStatusMsg: d }),
      { walletPublicKey: l } = de(),
      { isWalletConnect: u } = Ye(),
      { data: f, isFetched: S } = tt([r.mintAddress, ye]),
      A = Math.max(r.supplyCap.minus(r.totalSupplyAmount).toNumber(), 0),
      w = f[ye].toNumber(),
      b = v.useMemo(() => {
        const x = f[r.mintAddress.toString()] || 0;
        return P.min(A, Tn(r.mintAddress, x, Ne.leverage.deposit));
      }, [f, r.mintAddress, A]),
      { isIPAccessRestricted: D, hasWalletRestriction: L } = ho(),
      M = v.useMemo(() => {
        const x = [];
        return L
          ? [Co]
          : D
            ? [Io]
            : (e > b.toNumber() && x.push('Insufficient funds'),
              r.totalSupplyAmount.plus(e).gt(r.supplyCap) &&
                x.push(
                  'Deposit attempt is '
                    .concat(e, ' ')
                    .concat(c.symbol, ' but there is only ')
                    .concat(pn(A, 6), ' ')
                    .concat(c.symbol, ' capacity available')
                ),
              x);
      }, [e, L, D, b, r.supplyCap, r.totalSupplyAmount, A, c.symbol]),
      j = v.useMemo(() => {
        const x = [];
        u && x.push({ tooltip: Ze, text: 'Wallet Connect', variant: 'primary', isCritical: !0 });
        const _ = et(e, w, Ne.leverage.deposit, !!l, S);
        return _ && x.push(_), x;
      }, [e, S, u, w, l]),
      N = () => {
        n(b.toNumber()), p.track(''.concat(gn, ':click-deposit-max'));
      },
      T = () => {
        n(b.div(2).toNumber()), p.track(''.concat(gn, ':click-deposit-half'));
      },
      y = v.useCallback(() => {
        m({ tokenMint: i, amount: e, obligation: a });
      }, [e, m, a, i]),
      g = v.useMemo(
        () => !e || e > b.toNumber() || !!M.length || j.some((x) => x.isCritical),
        [e, M.length, b, j]
      );
    return {
      bottomLeftStat: 'Available: '.concat(pn(b, c.decimals)),
      errorMessages: M,
      warnings: j,
      isSubmitDisabled: g,
      isSubmitting: h,
      submitButtonText: e ? 'Deposit '.concat(c.symbol) : 'Enter Deposit Amount',
      value: new P(e).mul(r.price),
      handleSubmit: y,
      handleMax: N,
      handleHalf: T,
      maxAmount: b,
    };
  },
  Yi = ({
    marketAddress: e,
    obligation: s,
    onSuccess: n,
    onStateUpdate: o,
    reserveStats: a,
    state: r,
    tokenInfo: c,
    vault: i,
    leverageType: d,
  }) => {
    const { amount: p } = r,
      { collTokenMint: m, debtTokenMint: h } = i,
      { getToken: l } = oe(),
      u = l(m),
      f = l(h),
      S = v.useMemo(
        () =>
          Ve({
            leverageVaultType: d,
            formAction: r.currentFormAction,
            isLong: !!r.isLong,
            collSymbol: u.symbol,
            debtSymbol: f.symbol,
            selectedSymbol: u.symbol,
          }),
        [d, r.isLong, u.symbol, f.symbol, r.currentFormAction]
      ),
      A = v.useCallback((x) => o({ amount: x }), [o]),
      {
        bottomLeftStat: w,
        errorMessages: b,
        isSubmitDisabled: D,
        isSubmitting: L,
        handleSubmit: M,
        handleMax: j,
        handleHalf: N,
        submitButtonText: T,
        value: y,
        warnings: g,
      } = Hi({
        amount: p,
        marketAddress: e,
        obligation: s,
        borrowReserveAddress: i.borrowReserveAddress,
        depositReserveAddress: i.depositReserveAddress,
        reserveStats: a,
        tokenInfo: c,
        tokenMint: i.collTokenMint,
        onAmountChange: A,
        onSuccess: n,
        getStatusMsg: S,
      });
    return t.jsx(cs, {
      amount: p,
      bottomLeftStat: w,
      errorMessages: b,
      handleAmountChange: A,
      handleHalf: N,
      handleMax: j,
      handleSubmit: M,
      isSubmitting: L,
      isSubmitDisabled: D,
      label: 'You Deposit',
      submitButtonText: T,
      tokenInfo: c,
      value: y,
      warnings: g,
      'data-sentry-element': 'ManageLoanFormTemplate',
      'data-sentry-component': 'AddCollateralForm',
      'data-sentry-source-file': 'AddCollateralForm.tsx',
    });
  },
  Ji = ({ onSuccess: e = Le, marketAddress: s, isClosingPosition: n, getStatusMsg: o }) => {
    const { wallet: a } = de(),
      { getMarketByAddress: r } = ve(),
      { referrerWallet: c } = We(),
      i = wn(),
      d = ''.concat(pe.LENDING.MULTIPLY.BASE, ':withdraw'),
      p = async ({ amountFormat: l, walletPublicKey: u, tokenMint: f, obligation: S }) => {
        const A = r(s);
        if (!i) throw new Error('Scope is not loaded');
        return me.KaminoAction.buildWithdrawTxns(
          A,
          n ? me.U64_MAX : l,
          new z(f),
          new z(u),
          S,
          !0,
          (a == null ? void 0 : a.adapter.name) === 'SquadsX'
            ? void 0
            : { scope: i, scopeFeed: 'hubble' },
          0,
          !0,
          void 0,
          {
            skipInitialization: !1,
            skipLutCreation: (a == null ? void 0 : a.adapter.name) === 'SquadsX',
          },
          c,
          void 0
        );
      },
      { mutate: m, isLoading: h } = ds({
        buildTxns: p,
        notificationKey: d,
        onSuccess: e,
        marketAddress: s,
        notificationLoadingMessage: 'Withdrawing',
        getNotificationLoadingDescription: () => 'Withdrawing funds from multiply',
        notificationSuccessMessage: 'Withdraw succeeded!',
        notificationSuccessDescriptionPrefix: 'Received',
        notificationErrorMessage: 'Failed to withdraw from lending market',
        notificationErrorDescription: 'Withdraw failed',
        getStatusMsg: o,
      });
    return { withdraw: m, isLoading: h };
  },
  { formatTokenAllDecimals: fn } = re,
  Xi = ({ tokenMint: e, amount: s, maxAmount: n }) => {
    const { getToken: o } = oe(),
      { symbol: a, decimals: r } = o(e);
    return t.jsx('div', {
      className: Z.root,
      'data-sentry-component': 'WithdrawAmountTooBigTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: t.jsxs('div', {
        className: Z.item,
        children: [
          t.jsxs('div', {
            className: Z.title,
            children: [
              t.jsx(Cs, {
                'data-sentry-element': 'CapacityLimitIcon',
                'data-sentry-source-file': 'index.tsx',
              }),
              t.jsx($, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Withdrawal Exceeds Threshold',
              }),
            ],
          }),
          t.jsxs('div', {
            className: Z.row,
            children: [
              t.jsx($, {
                fs: 14,
                lh: 18,
                color: 'grey',
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Withdrawal Allowed',
              }),
              t.jsxs($, {
                fs: 14,
                lh: 18,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [fn(n, r), ' ', a],
              }),
            ],
          }),
          t.jsxs('div', {
            className: Z.row,
            children: [
              t.jsx($, {
                fs: 14,
                lh: 18,
                color: 'grey',
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Withdrawal Attempted',
              }),
              t.jsxs($, {
                fs: 14,
                lh: 18,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [fn(s, r), ' ', a],
              }),
            ],
          }),
        ],
      }),
    });
  },
  { formatTokenAllDecimals: Zi } = re,
  hn = pe.LENDING.MULTIPLY.BASE,
  el = [],
  En = ({
    amount: e,
    marketAddress: s,
    onSuccess: n = Le,
    obligation: o,
    reserveStats: a,
    tokenInfo: r,
    tokenMint: c,
    onAmountChange: i,
    getStatusMsg: d,
  }) => {
    if (!o) throw Error('Missing obligation. Please refresh the page and try again.');
    const { walletPublicKey: p } = de(),
      m = Be(),
      { isWalletConnect: h } = Ye(),
      l = o.refreshedStats.borrowLimit.div(o.refreshedStats.userTotalCollateralDeposit).toNumber(),
      { maxWithdrawableAmount: u } = _o({ obligation: o, marketAddress: s, tokenMint: c }),
      { withdraw: f, isLoading: S } = Ji({
        marketAddress: s,
        onSuccess: n,
        isClosingPosition: vn(u, new P(e)),
        getStatusMsg: d,
      }),
      { data: A, isFetched: w } = tt([ye]),
      b = A[ye].toNumber(),
      D = () => {
        i == null || i(u), m.track(''.concat(hn, ':click-withdraw-max'));
      },
      L = () => {
        i == null || i(u / 2), m.track(''.concat(hn, ':click-withdraw-half'));
      },
      M = v.useCallback(() => {
        f({ tokenMint: c, amount: e, obligation: o });
      }, [f, c, e, o]),
      j = !!l && l > 0 && o.refreshedStats.loanToValue.toNumber() >= l,
      N = v.useMemo(
        () =>
          (a.withdrawEpochReset.lte(new P(0))
            ? a.dailyWithdrawCapLimit
            : a.dailyWithdrawCapLimit.minus(a.dailyWithdrawCapFilled)
          ).lt(e),
        [e, a.dailyWithdrawCapFilled, a.dailyWithdrawCapLimit, a.withdrawEpochReset]
      ),
      T = v.useMemo(() => {
        const g = [];
        h && g.push({ tooltip: Ze, text: 'Wallet Connect', variant: 'primary', isCritical: !0 });
        const x = et(e, b, Ne.leverage.withdraw, !!p, w);
        return (
          x && g.push(x),
          e > u &&
            g.push({
              text: 'Reduce Withdrawal',
              variant: 'warning',
              tooltip: t.jsx(Xi, { tokenMint: c, amount: e, maxAmount: u }),
              hasIcon: !1,
              isCritical: !0,
            }),
          g
        );
      }, [e, w, h, u, b, c, p]),
      y = j || !e || e > u || N;
    return {
      bottomLeftStat: 'Available: '.concat(Zi(u, r.decimals)),
      errorMessages: el,
      warnings: T,
      isSubmitDisabled: y,
      isSubmitting: S,
      submitButtonText: e ? 'Withdraw '.concat(r.symbol) : 'Enter Withdraw Amount',
      tokenInfo: r,
      value: new P(e).mul(a.price),
      handleSubmit: M,
      handleMax: D,
      handleHalf: L,
      maxWithdrawableAmount: u,
    };
  },
  tl = ({
    marketAddress: e,
    obligation: s,
    onSuccess: n,
    onStateUpdate: o,
    reserveStats: a,
    state: r,
    tokenInfo: c,
    vault: i,
    leverageType: d,
  }) => {
    const { amount: p } = r,
      { collTokenMint: m, debtTokenMint: h } = i,
      { getToken: l } = oe(),
      u = l(m),
      f = l(h),
      S = v.useMemo(
        () =>
          Ve({
            leverageVaultType: d,
            formAction: r.currentFormAction,
            isLong: !!r.isLong,
            collSymbol: u.symbol,
            debtSymbol: f.symbol,
            selectedSymbol: u.symbol,
          }),
        [d, r.isLong, u.symbol, f.symbol, r.currentFormAction]
      ),
      A = v.useCallback((x) => o({ amount: x }), [o]),
      {
        bottomLeftStat: w,
        errorMessages: b,
        isSubmitDisabled: D,
        isSubmitting: L,
        handleSubmit: M,
        handleMax: j,
        handleHalf: N,
        submitButtonText: T,
        value: y,
        warnings: g,
      } = En({
        amount: p,
        marketAddress: e,
        obligation: s,
        reserveStats: a,
        tokenInfo: c,
        tokenMint: i.collTokenMint,
        onAmountChange: A,
        onSuccess: n,
        getStatusMsg: S,
      });
    return t.jsx(cs, {
      amount: p,
      bottomLeftStat: w,
      errorMessages: b,
      handleAmountChange: A,
      handleHalf: N,
      handleMax: j,
      handleSubmit: M,
      isSubmitting: L,
      isSubmitDisabled: D,
      label: 'You Withdraw',
      submitButtonText: T,
      tokenInfo: c,
      value: y,
      warnings: g,
      'data-sentry-element': 'ManageLoanFormTemplate',
      'data-sentry-component': 'WithdrawCollateralForm',
      'data-sentry-source-file': 'WithdrawCollateralForm.tsx',
    });
  },
  xs = (e) =>
    t.jsx(Fn, {
      getCurrentTotalAmount: (s) => s.totalCollateralAmount,
      getSimulatedTotalAmount: (s) => s.totalCollateralAmount,
      tokenMint: e.vault.collTokenMint,
      reserveAddress: e.vault.depositReserveAddress,
      formProps: e,
      tabs: [Lt.addCollateral, Lt.withdrawCollateral],
      tabContentComponents: [Yi, tl],
      initialSelectedTab: Lt.addCollateral,
      obligationType: 'Collateral',
      formStats: e.formStats,
      'data-sentry-element': 'ManageLoanLayoutTemplate',
      'data-sentry-component': 'ManageCollateralForm',
      'data-sentry-source-file': 'ManageCollateralForm.tsx',
    }),
  sl = (e) => {
    const { obligation: s } = e;
    return s
      ? t.jsx(
          nl,
          Ce(ge({}, e), {
            'data-sentry-element': 'ClosePosition',
            'data-sentry-component': 'ClosePositionWithoutBorrowsForm',
            'data-sentry-source-file': 'ClosePositionWithoutBorrowsForm.tsx',
          })
        )
      : null;
  },
  nl = (e) => {
    const { obligation: s, marketAddress: n, leverageType: o, vault: a, state: r } = e,
      [c, i] = v.useState(0),
      d = v.useMemo(() => {
        var g;
        return (g =
          s == null
            ? void 0
            : s.state.deposits.find((x) => x.depositedAmount.toString() !== '0')) == null
          ? void 0
          : g.depositReserve;
      }, [s]);
    if (!d) throw new Error('Deposit address is not found');
    const { getReserveByAddress: p } = Ie(),
      { getReserveApys: m } = ft(),
      { getToken: h } = oe(),
      l = $e({ reserve: p(d), obligation: s, getReserveApys: m });
    if (!l) throw new Error('Reserve stats not found');
    const { collTokenMint: u, debtTokenMint: f } = a,
      S = h(u),
      A = h(f),
      w = h(l.mintAddress),
      b = v.useMemo(
        () =>
          Ve({
            leverageVaultType: o,
            formAction: r.currentFormAction,
            isLong: !!r.isLong,
            collSymbol: S.symbol,
            debtSymbol: A.symbol,
            selectedSymbol: w.symbol,
          }),
        [o, r.isLong, S.symbol, A.symbol, w.symbol, r.currentFormAction]
      ),
      {
        isSubmitDisabled: D,
        isSubmitting: L,
        handleSubmit: M,
        handleMax: j,
        maxWithdrawableAmount: N,
        value: T,
        warnings: y,
      } = En({
        amount: c,
        marketAddress: n,
        obligation: s,
        reserveStats: l,
        tokenInfo: w,
        tokenMint: w.address,
        onSuccess: e.onSuccess,
        getStatusMsg: b,
      });
    return (
      v.useEffect(() => {
        e.onStateUpdate({ currentFormAction: _e.closePosition });
      }, [e]),
      v.useEffect(() => {
        j(), i(N);
      }, [N, j]),
      t.jsx(t.Fragment, {
        children: t.jsxs('div', {
          className: he.root,
          children: [
            t.jsx('div', {
              className: he.tabs,
              children: t.jsx(bs, {
                isFullWidth: !0,
                tabs: [{ key: w.address, label: 'Close to '.concat(w.symbol) }],
                activeKey: w.address,
                'data-sentry-element': 'Tabs',
                'data-sentry-source-file': 'ClosePositionWithoutBorrowsForm.tsx',
              }),
            }),
            t.jsx('div', {
              className: he.input,
              children: t.jsx(At, {
                value: c,
                label: 'You withdraw',
                topStat: new P(T),
                variant: 'secondary',
                tokensInfos: [w],
                defaultSelectedTokenMint: w.address,
                onInputChange: i,
                disabled: !0,
                'data-sentry-element': 'LargeInput',
                'data-sentry-source-file': 'ClosePositionWithoutBorrowsForm.tsx',
              }),
            }),
            t.jsx('div', {
              className: he.button,
              children: t.jsx(xt, {
                isFullWidth: !0,
                size: 'large',
                disabled: !!L || D,
                isLoading: L,
                onClick: M,
                isRestrictionsIgnored: ws,
                'data-sentry-element': 'FormButton',
                'data-sentry-source-file': 'ClosePositionWithoutBorrowsForm.tsx',
                children: 'Close Position',
              }),
            }),
            t.jsx('div', {
              className: he.notificationsCloseNoBorrowPosition,
              children: y.map((g, x) =>
                v.createElement(
                  Ee,
                  Ce(ge({}, g), {
                    key: ''.concat((g == null ? void 0 : g.toString()) || '', '-').concat(x),
                  })
                )
              ),
            }),
            t.jsx('div', {
              className: he.stats,
              children: t.jsx(ss, {
                withSlippage: !0,
                'data-sentry-element': 'TransactionSettingButton',
                'data-sentry-source-file': 'ClosePositionWithoutBorrowsForm.tsx',
              }),
            }),
          ],
        }),
      })
    );
  },
  Il = (e) => {
    const L = e,
      {
        leverageType: s,
        enabledFormTypes: n,
        isHeaderVisible: o,
        onStateUpdate: a,
        obligation: r,
        state: c,
        formStats: i,
        dashboardPath: d,
      } = L,
      p = rt(L, [
        'leverageType',
        'enabledFormTypes',
        'isHeaderVisible',
        'onStateUpdate',
        'obligation',
        'state',
        'formStats',
        'dashboardPath',
      ]),
      m = mt(s),
      { isVisible: h, onVisibleChange: l } = xo({}),
      u = v.useRef(!1),
      f = io();
    v.useEffect(() => {
      u.current ||
        ((u.current = !0),
        a({
          amount: 0,
          leverage:
            (kt(r) ? c.leverage : r == null ? void 0 : r.refreshedStats.leverage.toNumber()) || Ae,
        }));
    }, [r, a, c.leverage]);
    const S = v.useMemo(
        () => ((r == null ? void 0 : r.borrows.size) === 0 ? sl : Ki),
        [r == null ? void 0 : r.borrows.size]
      ),
      A = {
        [ne.openPosition]: fs,
        [ne.deposit]: fs,
        [ne.manageSize]: xs,
        [ne.manageLeverage]: un,
        [ne.repayDebt]: cn,
        [ne.topUpCollateral]: xs,
        [ne.closePosition]: S,
        [ne.openLoanDashboard]: fs,
        [ne.manageDebt]: cn,
        [ne.manageCollateral]: xs,
        [ne.withdraw]: Ii,
        [ne.adjust]: un,
      },
      w = c.currentTab || ne.deposit,
      b = A[w],
      D = (M) =>
        M === ne.manageCollateral
          ? { currentTab: M, currentSubtab: Lt.addCollateral }
          : M === ne.manageDebt
            ? { currentTab: M, currentSubtab: pt.borrowMore }
            : { currentTab: M };
    return t.jsxs('div', {
      className: Ge.root,
      'data-sentry-component': 'LeverageForms',
      'data-sentry-source-file': 'LeverageForms.tsx',
      children: [
        o &&
          t.jsxs('div', {
            className: Ge.header,
            children: [
              t.jsxs(ko, { variant: 'small', children: ['Manage ', m] }),
              t.jsx('div', {
                className: Ge.dropdown,
                children: t.jsx(yo, {
                  isVisible: h,
                  onVisibleChange: l,
                  placement: 'bottomRight',
                  overlay: t.jsx('div', {
                    children: n.map((M) =>
                      t.jsxs(
                        v.Fragment,
                        {
                          children: [
                            M === ne.openLoanDashboard &&
                              t.jsx(yn, { className: Ge.openLoanDashboardDivider }),
                            t.jsx(bo, {
                              title: mt(M),
                              onClick: () => {
                                if (M === ne.openLoanDashboard && d) return f.push(d);
                                const j = D(M);
                                l(!1),
                                  a(
                                    Ce(ge({}, j), {
                                      amount: 0,
                                      leverage:
                                        (kt(r)
                                          ? c.leverage
                                          : r == null
                                            ? void 0
                                            : r.refreshedStats.leverage.toNumber()) || Ae,
                                    })
                                  );
                              },
                            }),
                          ],
                        },
                        M.toString()
                      )
                    ),
                  }),
                  children: t.jsx(wo, {
                    isFullWidth: !0,
                    justifyContent: 'center',
                    variant: 'secondary',
                    text: mt(w),
                    endIcon: t.jsx(St, { name: 'ChevronDown', height: 12, width: 12 }),
                  }),
                }),
              }),
            ],
          }),
        t.jsx(
          b,
          Ce(ge({ leverageType: s, onStateUpdate: a, obligation: r, state: c, formStats: i }, p), {
            'data-sentry-element': 'FormComponent',
            'data-sentry-source-file': 'LeverageForms.tsx',
          })
        ),
        t.jsx(jo, {
          'data-sentry-element': 'PriceImpactTooltip',
          'data-sentry-source-file': 'LeverageForms.tsx',
        }),
      ],
    });
  },
  jl = () =>
    t.jsxs('div', {
      className: Ge.emptyBody,
      'data-sentry-component': 'EmptyLeverageForms',
      'data-sentry-source-file': 'LeverageForms.tsx',
      children: [
        t.jsx('div', {
          className: Ge.emptyHeader,
          children: t.jsx(ms, {
            width: '100%',
            height: '100%',
            'data-sentry-element': 'SkeletonParagraph',
            'data-sentry-source-file': 'LeverageForms.tsx',
          }),
        }),
        t.jsx('div', {
          className: Ge.emptyHeader,
          children: t.jsx(ms, {
            width: '100%',
            height: '100%',
            'data-sentry-element': 'SkeletonParagraph',
            'data-sentry-source-file': 'LeverageForms.tsx',
          }),
        }),
        t.jsx('div', {
          className: Ge.emptySubHeader,
          children: t.jsx(ms, {
            width: '100%',
            height: '100%',
            'data-sentry-element': 'SkeletonParagraph',
            'data-sentry-source-file': 'LeverageForms.tsx',
          }),
        }),
      ],
    });
export {
  sl as C,
  jl as E,
  Fs as J,
  ne as L,
  ks as S,
  pt as a,
  Il as b,
  No as c,
  Lt as d,
  Fo as e,
  Ki as f,
  Bn as g,
  ka as h,
  aa as i,
  ra as j,
  kn as k,
  Rn as l,
  Nn as m,
  ls as n,
  di as o,
  _e as p,
  ui as q,
  Cl as r,
  qa as s,
  mr as t,
  _i as u,
  Ve as v,
  Qr as w,
  Hi as x,
};
//# sourceMappingURL=LeverageForms-Ba6xEAi2.js.map
