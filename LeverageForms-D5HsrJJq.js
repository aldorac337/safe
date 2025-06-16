var ao = Object.defineProperty,
  io = Object.defineProperties;
var ro = Object.getOwnPropertyDescriptors;
var $t = Object.getOwnPropertySymbols;
var Ks = Object.prototype.hasOwnProperty,
  Us = Object.prototype.propertyIsEnumerable;
var Os = (e, t, n) =>
    t in e ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  he = (e, t) => {
    for (var n in t || (t = {})) Ks.call(t, n) && Os(e, n, t[n]);
    if ($t) for (var n of $t(t)) Us.call(t, n) && Os(e, n, t[n]);
    return e;
  },
  Ce = (e, t) => io(e, ro(t));
var it = (e, t) => {
  var n = {};
  for (var o in e) Ks.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && $t) for (var o of $t(e)) t.indexOf(o) < 0 && Us.call(e, o) && (n[o] = e[o]);
  return n;
};
import {
  P as z,
  am as lo,
  bQ as co,
  r as S,
  D as $,
  f as ue,
  a1 as uo,
  t as Be,
  a$ as Gt,
  S as mo,
  E as Qs,
  F as Hs,
  j as s,
  l as vn,
  a5 as Et,
  a8 as Ys,
  T as po,
} from './vendor-BCNtwJ5j.js';
import {
  m as Fe,
  bh as je,
  k as Se,
  e as Ye,
  o as de,
  c0 as ht,
  c7 as ke,
  cg as go,
  u as me,
  d_ as fo,
  a as Wt,
  aa as ys,
  c as we,
  d as qt,
  n as Te,
  p as ae,
  N as pe,
  an as Vt,
  aZ as zt,
  aj as bs,
  dY as Ie,
  Q as _t,
  a8 as Ln,
  f as P,
  D as Sn,
  h as Mt,
  d$ as At,
  l as ft,
  e0 as ho,
  dZ as xo,
  S as yo,
  dG as bo,
  dJ as wo,
  ce as vo,
  cd as Lt,
  bZ as Lo,
  j as Tn,
  aQ as mt,
  dF as Ot,
  q as ws,
  al as Rt,
  e1 as _n,
  dT as So,
  s as Js,
  a_ as Mn,
  b0 as vs,
  d3 as To,
  ab as ms,
  a3 as _o,
  a4 as Mo,
  a7 as Ao,
  a5 as Co,
} from './index-BInJAZZg.js';
import {
  a as Kt,
  b as Ve,
  c as Je,
  d as An,
  g as Cn,
  D as Io,
  e as Ut,
  f as Ls,
  h as Xe,
  i as Qt,
  E as Ht,
  j as Yt,
  P as Jt,
  A as Xt,
  k as In,
  l as jo,
  m as Po,
  I as $o,
  n as Do,
} from './AccountSetupModal-D1p2t49d.js';
import { g as Ze, P as Ss } from './priceImpact-DGHNTFVa.js';
import { u as ko } from './useMultiplyVault-CyIy0OcK.js';
import { u as Zt } from './useLastPostionUpdate-gtmH8qvo.js';
import { u as Bo } from './useBalanceDeltaAfterTxn-BMdcyDvE.js';
import { c as Ts } from './transactions-C31x6g_6.js';
import { u as es } from './useBudgetAndPriorityFeeIxns-vWARj0QI.js';
import {
  h as xt,
  m as Ge,
  j as et,
  g as tt,
  T as ts,
  L as Ct,
  F as yt,
  W as Ee,
  R as Fo,
  a as Ro,
} from './TransactionSettingButton-CiO-5qiL.js';
import { u as _s } from './useKswapSdk-BcUNsnWQ.js';
import { u as ss } from './useTermsSignatureIxn-THtSbQVN.js';
import {
  u as Xs,
  i as ie,
  g as Ms,
  a as As,
  b as Cs,
  c as Is,
} from './useKswapMarketPrice-D641EmdI.js';
import { t as ns, s as Tt } from './tryAnchorErrorMessageOr-BT2GLov4.js';
import { u as st } from './useLoadBalances-hRSo0vg3.js';
import { S as ve, u as jn, F as Pn } from './FirstDepositInfoModal-DdJYHdII.js';
import {
  s as te,
  d as js,
  C as Ps,
  g as $n,
  b as os,
  u as as,
  P as is,
  f as rs,
  h as No,
} from './useGetLSTsStakeRatesQuery-BwIvt1P_.js';
import { C as $s } from './CapacityLimitIcon-BcO6WM5N.js';
import { a as Nt, u as Go } from './types-BnX4KR4A.js';
import { s as rt } from './DepositForm.module-CaastT4u.js';
import { a as Eo, S as Dn } from './index-Cl-BjDg0.js';
import { g as Wo } from './getNetApyTextColor-Bw2DC4w3.js';
import { B as qo } from './BlockTitle-CPU2nRsO.js';
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
      (e._sentryDebugIds[t] = 'e2b62c54-1e51-4f59-9a86-4a08890a835a'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-e2b62c54-1e51-4f59-9a86-4a08890a835a'));
  } catch (n) {}
})();
function Ds(e) {
  return async (t) => {
    typeof t == 'string' && (t = new z(t));
    const [n] = z.findProgramAddressSync(
        [lo.Buffer.from('authority'), t.toBuffer()],
        e.getProgramID()
      ),
      o = await e.getConnection().getAccountInfo(t);
    if (!o) throw new Error('Mint info not found');
    const a = co(t, o, o.owner);
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
  St = ((e) => (
    (e.addCollateral = 'Add Collateral'), (e.withdrawCollateral = 'Withdraw Collateral'), e
  ))(St || {}),
  pt = ((e) => ((e.borrowMore = 'Borrow More'), (e.repayDebt = 'Repay Debt'), e))(pt || {}),
  Me = ((e) => (
    (e.openLong = 'Open Long'),
    (e.openShort = 'Open Short'),
    (e.sizeIncrease = 'Deposit'),
    (e.sizeDecrease = 'Withdraw'),
    (e.repayDebt = 'Repay Debt'),
    (e.manageLeverage = 'Manage Leverage'),
    (e.topUpCollateral = 'Top Up Collateral'),
    (e.closePosition = 'Close Position'),
    e
  ))(Me || {});
const Vo = ({
  collateralAmountChange: e = 0,
  debtAmountChange: t = 0,
  depositAmount: n,
  withdrawAmount: o,
  deposited: a,
  borrowed: i,
  debtTokenMint: l,
  selectedTokenMint: r,
  collTokenMint: u,
  targetLeverage: p,
  activeTab: m,
  borrowFactor: d,
  marketAddress: g,
}) => {
  const { getPriceByTokenMintDecimal: c, isFetched: y } = Fe(),
    { getReserveByAddress: M } = je(),
    { getReserveByTokenMint: _ } = je(),
    { getMarketByAddress: L } = Se(),
    h = L(g),
    I = Xs({ inputMint: u, outputMint: l }),
    A = Xs({ inputMint: l, outputMint: u }),
    T = _(h.getAddress(), l);
  if (!T) throw new Error('Borrow reserve not found');
  const C = M(T.address),
    [G, D] = S.useState(null);
  return (
    S.useEffect(() => {
      var f, b;
      const x = async (j) => Promise.resolve(c(j));
      if (m !== ne.manageDebt && m !== ne.manageCollateral) {
        const j = new $((f = I.data) != null ? f : 1),
          w = new $((b = A.data) != null ? b : 1);
        ue.calculateMultiplyEffects(x, {
          depositAmount: new $(n),
          withdrawAmount: new $(o),
          deposited: new $(a),
          borrowed: new $(i),
          selectedTokenMint: new z(r),
          debtTokenMint: new z(l),
          collTokenMint: new z(u),
          targetLeverage: new $(p),
          activeLeverageOption: m === ne.closePosition ? ue.LeverageOption.close : m,
          flashLoanFeeRatio: new $((C == null ? void 0 : C.getFlashLoanFee()) || 0),
          debtBorrowFactorPct: new $(d * 100),
          priceCollToDebt: j,
          priceDebtToColl: w,
        })
          .then((v) => D(v))
          .catch(Ye);
        return;
      }
      zo(x, new $(e), new $(t), new $(a), new $(i), new z(l), new z(u), new $(d * 100))
        .then((j) => D(j))
        .catch(Ye);
    }, [m, n, o, p, a, i, r, y, e, t, d, g, u, l, C, c, I.data, A.data]),
    G
  );
};
async function zo(e, t, n, o, a, i, l, r) {
  const u = o.add(t),
    p = a.add(n),
    m = await e(i),
    g = (await e(l)).mul(u),
    c = m.mul(p),
    y = g.minus(c),
    M = y.div(m),
    _ = c.mul(r.div(100)).div(g);
  return {
    earned: uo.ZERO,
    totalDeposited: u,
    totalBorrowed: p,
    netValue: M,
    netValueUsd: y,
    ltv: _,
  };
}
const Oo = ({ vault: e, marketAddress: t }) => {
    const { getToken: n } = de(),
      { getPriceByTokenMintDecimal: o } = Fe(),
      { getReserveByTokenMint: a } = je(),
      { getReserveApys: i } = ht(),
      l = n(e.collTokenMint),
      r = n(e.debtTokenMint),
      u = a(t, r.address),
      { tvl: p } = ke({ reserve: u, getReserveApys: i }),
      m = go({ collTokenMint: l.address, debtTokenMint: r.address }),
      d = S.useMemo(() => (m ? l : r), [l, r, m]),
      g = S.useMemo(() => (m ? r : l), [l, r, m]),
      c = S.useMemo(() => o(d.address), [o, d.address]);
    return { lendToken: d, borrowToken: g, isLong: m, lendPrice: c, liquidity: p };
  },
  Ko = '_root_32737_1',
  Uo = '_header_32737_9',
  Qo = '_openLoanDashboardDivider_32737_17',
  Ho = '_emptyBody_32737_21',
  Yo = '_emptyHeader_32737_28',
  Jo = '_emptySubHeader_32737_34',
  qe = {
    root: Ko,
    header: Uo,
    openLoanDashboardDivider: Qo,
    emptyBody: Ho,
    emptyHeader: Yo,
    emptySubHeader: Jo,
  },
  ks = { leverage: 'Long / Short', multiply: 'Multiply' },
  { formatTokenAllDecimals: Zs } = ae,
  Xo = ({
    onSuccess: e = Te,
    mixpanelPrefix: t,
    marketAddress: n,
    elevationGroupOverride: o,
    getStatusMsg: a,
  }) => {
    const { walletPublicKey: i, wallet: l, signTransaction: r } = me(),
      u = Be(),
      { getToken: p } = de(),
      { getVaultByAddress: m } = ko({ marketAddress: n }),
      { getMarketByAddress: d } = Se(),
      { setPositionHasUpdated: g } = Zt(),
      { getTransactionDelta: c } = Bo(),
      { getBalanceByTokenMint: y } = fo(),
      { web3client: M } = Wt(),
      _ = ''.concat(pe.LENDING.MULTIPLY.BASE, ':deposit'),
      { kaminoSdk: L } = ys(),
      h = Kt({ marketAddress: n }),
      { createVersionedTxWithBudgetIxns: I, getIxns: A } = es(),
      { getSlippage: T } = xt(),
      { kswapSdk: C } = _s(),
      { getSignatureIxns: G } = ss(),
      { updateProviderParams: D } = Vt,
      { referrerWallet: x } = Ve(),
      f = async ({
        quote: w,
        selectedTokenMint: v,
        collTokenMint: F,
        debtTokenMint: k,
        amount: B,
        targetLeverage: N,
        marketAddress: E,
        vaultType: O,
        obligation: K,
        priceDebtToColl: V,
        getPriceAinB: R,
        currentSlot: U,
      }) => {
        if (!B) throw new Error('Amount should be > 0');
        ie(L, 'Kamino SDK is not loaded'),
          ie(i, 'Wallet is not connected'),
          ie(l, 'Wallet is not connected'),
          ie(w, 'Quote is not loaded. Please, reload the page and try again');
        const Q = d(E),
          q = Ds(L),
          H = await A({ units: 14e5, ixns: [] }),
          ee = T(),
          oe = ee.mul(100),
          J = new z(i);
        return await ue.getDepositWithLeverageIxs({
          budgetAndPriorityFeeIxs: H,
          owner: J,
          selectedTokenMint: new z(v),
          collTokenMint: new z(F),
          debtTokenMint: new z(k),
          targetLeverage: new $(N),
          kaminoMarket: Q,
          depositAmount: new $(B),
          slippagePct: Ts(ee, !0),
          priceDebtToColl: V,
          swapper: Cs(C, J, oe.toNumber()),
          quoter: Is(C, J, oe.toNumber()),
          referrer: x,
          isKtoken: q,
          priceAinB: R,
          obligationTypeTagOverride:
            O === 'multiply' ? ue.ObligationTypeTag.Multiply : ue.ObligationTypeTag.Leverage,
          kamino: L,
          obligation: K || null,
          currentSlot: U,
          quoteBufferBps: new $(0),
          elevationGroupOverride: o,
          useV2Ixs: !0,
        });
      },
      j = Gt(
        async ({
          quote: w,
          selectedTokenMint: v,
          collTokenMint: F,
          debtTokenMint: k,
          amount: B,
          targetLeverage: N,
          depositAddress: E,
          borrowAddress: O,
          marketAddress: K,
          vaultType: V,
          lookupTablesAddresses: R,
          obligation: U,
          priceDebtToColl: Q,
          getPriceAinB: q,
          currentSlot: H,
          mutationStartNotificationText: ee,
          mutationSuccessNotificationText: oe,
        }) => {
          if (!B) throw new Error('Amount should be > 0');
          ie(i, 'Wallet is not connected'),
            ie(l, 'Wallet is not connected'),
            ie(L, 'Kamino SDK is not loaded');
          const J = v.toString() === F.toString() ? k : F,
            W = y(v),
            Y = y(J);
          u.track(''.concat(t, ':vault:deposit'), {
            selectedTokenMint: v.toString(),
            collTokenMint: F.toString(),
            debtTokenMint: k.toString(),
            amount: B,
            leverage: N,
          });
          const Z = await m(E, O, V);
          if (N > Z.maxLeverage) throw new Error('Leverage is bigger than max');
          const _e = await f({
              quote: w,
              selectedTokenMint: v,
              collTokenMint: F,
              debtTokenMint: k,
              amount: B,
              targetLeverage: N,
              depositAddress: E,
              borrowAddress: O,
              marketAddress: K,
              vaultType: V,
              lookupTablesAddresses: R,
              obligation: U,
              priceDebtToColl: Q,
              getPriceAinB: q,
              currentSlot: H,
            }),
            Le = [...h, ...R.map(($e) => ($e && !$e.equals(z.default) ? $e : void 0))].filter(zt),
            Ae = await ue.getLookupTableAccountsFromAddresses(M.connection, Le),
            Pe = await G(),
            ge = await Ms(_e, Ae, M.connection, new z(i), Pe);
          if (ge.length === 0) throw new Error('No valid routes found');
          const fe = As(ge),
            ye = [...fe.ixs, ...Pe],
            ce = [...Ae, ...fe.lookupTables],
            xe = await I({ ixns: ye, lookupTablesAccounts: ce, defaultCu: 14e5 });
          return {
            txid: await Tt({
              signTransaction: r,
              tx: xe,
              mainConnection: M.sendConnection,
              extraConnections: M.sendConnectionsExtra,
              mixpanel: u,
            }),
            collTokenMint: F,
            debtTokenMint: k,
            amount: B,
            selectedTokenMint: v,
            preDepositBalanceSelectedToken: W,
            preDepositBalanceOtherToken: Y,
            otherToken: J,
            mutationStartNotificationText: ee,
            mutationSuccessNotificationText: oe,
            vaultType: V,
          };
        },
        {
          onMutate: ({ selectedTokenMint: w, vaultType: v, amount: F }) => {
            D({ isTransactionInProgress: !0 });
            const { symbol: k, decimals: B } = p(w),
              { message: N, description: E } = a({
                action: 'onMutate',
                amount: Zs(new $(F).toNumber(), B),
                defaults: {
                  message: 'Opening Position',
                  description: 'Depositing '.concat(k, ' into ').concat(ks[v]),
                },
              });
            we({ message: N, description: E, type: 'loading', key: _ });
          },
          onSuccess: async (w) => {
            const {
                collTokenMint: v,
                debtTokenMint: F,
                txid: k,
                amount: B,
                selectedTokenMint: N,
                otherToken: E,
              } = w,
              { symbol: O } = p(v),
              { symbol: K } = p(F),
              { decimals: V } = p(N),
              { message: R, description: U } = a({
                action: 'onSuccess',
                amount: Zs(new $(B).toNumber(), V),
                defaults: {
                  message: ''.concat(O, '/').concat(K, ' position opened'),
                  description: '',
                },
              });
            if (
              (we({
                type: 'success',
                key: _,
                message: R,
                description: U,
                txids: w != null && w.txid ? [w.txid] : [],
              }),
              e(),
              w && w.preDepositBalanceSelectedToken && w.preDepositBalanceOtherToken)
            ) {
              const { preDepositBalanceSelectedToken: Q, preDepositBalanceOtherToken: q } = w,
                { decimals: H, symbol: ee } = p(N),
                { decimals: oe, symbol: J } = p(E),
                [W, Y] = await Promise.all([
                  await c({
                    transactionSig: k,
                    tokenMint: N,
                    amount: B,
                    decimals: H,
                    preDepositBalance: Q,
                  }),
                  await c({
                    transactionSig: k,
                    tokenMint: E,
                    amount: 0,
                    decimals: oe,
                    preDepositBalance: q,
                  }),
                ]);
              let Z = '';
              W && Y
                ? (Z = ''
                    .concat(W.toFixed(H), ' ')
                    .concat(ee, ' dust and ')
                    .concat(Y.toFixed(oe), ' ')
                    .concat(J, ' dust returned to your wallet'))
                : W
                  ? (Z = ''.concat(W.toFixed(H), ' ').concat(ee, ' dust returned to your wallet'))
                  : Y &&
                    (Z = ''.concat(Y.toFixed(oe), ' ').concat(J, ' dust returned to your wallet')),
                Z &&
                  we({
                    type: 'success',
                    key: _,
                    message: 'Deposit succeeded!',
                    description: Z,
                    txids: k ? [k] : [],
                  });
            }
            g();
          },
          onError: (w, { amount: v }) => {
            Ye(w), qt(_);
            const { message: F, description: k } = a({
              action: 'onError',
              amount: v,
              defaults: {
                message: 'Failed to deposit into the Vault',
                description: ns(w, 'Deposit failed'),
              },
            });
            we({
              message: F,
              description: k,
              type: 'error',
              errorTxId: w.txId,
              walletPublicKey: i,
            });
          },
          onSettled: () => {
            D({ isTransactionInProgress: !1 });
          },
        }
      );
    return { onDeposit: j.mutate, isLoading: j.isLoading };
  },
  kn = ({ leverage: e, onLeverageUpdate: t, obligation: n }) => {
    const o = bs(n) ? Ie : n == null ? void 0 : n.refreshedStats.leverage.toNumber(),
      a = S.useCallback(
        (i) => {
          t({ leverage: i });
        },
        [t]
      );
    return { initLeverage: o, leverage: e || o, setLeverage: a };
  },
  Zo = { userLookupTable: z.default, setupIxns: [] },
  ls = ({ vaultType: e, collTokenMint: t, debtTokenMint: n, marketAddress: o }) => {
    const { walletPublicKey: a } = me(),
      { referrerWallet: i } = Ve(),
      { getMarketByAddress: l } = Se(),
      r = l(o),
      u = async () => {
        if (!a || !o) return;
        const g = [],
          c = [];
        e === 'leverage'
          ? c.push({ coll: new z(t), debt: new z(n) })
          : e === 'multiply' && g.push({ coll: new z(t), debt: new z(n) });
        const [y, M] = await ue.getUserLutAddressAndSetupIxs(r, new z(a), i, !0, g, c),
          _ = M.filter((L) => L.some((h) => h !== void 0));
        return { userLookupTable: y, setupIxns: _ };
      },
      d = mo({
        queryKey: _t.getUserLutAndSetupIxns(
          a || '-',
          e,
          (t == null ? void 0 : t.toString()) || '',
          (n == null ? void 0 : n.toString()) || ''
        ),
        enabled: !!a && !!o,
        queryFn: u,
        onError: (g) => {
          Ye(g), we({ message: 'Failed to load user lut address and setup ixns', type: 'error' });
        },
      }),
      { data: p } = d,
      m = it(d, ['data']);
    return he({ data: p || Zo }, m);
  },
  ea = {},
  ta = () => {
    const o = Ln(),
      { data: e } = o,
      t = it(o, ['data']),
      n = S.useMemo(() => (e == null ? void 0 : e.multiplyLUTsPairs) || ea, [e]);
    return he({ data: n || n }, t);
  },
  sa = {},
  na = () => {
    const o = Ln(),
      { data: e } = o,
      t = it(o, ['data']),
      n = S.useMemo(() => (e == null ? void 0 : e.leverageLUTs) || sa, [e]);
    return he({ data: n || n }, t);
  },
  oa = [],
  Bs = ({ leverageType: e, collTokenMint: t, debtTokenMint: n, marketAddress: o }) => {
    const {
        data: { userLookupTable: a },
        isFetched: i,
        isLoading: l,
      } = ls({ vaultType: e, collTokenMint: t, debtTokenMint: n, marketAddress: o.toString() }),
      { data: r, isFetched: u, isLoading: p } = ta(),
      { data: m, isFetched: d, isLoading: g } = na();
    return {
      data:
        S.useMemo(() => {
          const L = (r[t.toString()] || {})[n.toString()] || [],
            h = [m[''.concat(n.toString(), '-').concat(t.toString())] || void 0];
          return (
            e === 'multiply' &&
              !L.length &&
              Qs((A) => {
                A.setExtra('collTokenMint', t.toString()),
                  A.setExtra('debtTokenMint', n.toString()),
                  A.setExtra('product', 'multiply'),
                  Hs('Missing LUT');
              }),
            e === 'leverage' &&
              !h[0] &&
              Qs((A) => {
                A.setExtra('collTokenMint', t.toString()),
                  A.setExtra('debtTokenMint', n.toString()),
                  A.setExtra('product', 'leverage'),
                  Hs('Missing LUT');
              }),
            (e === 'multiply' ? [...L, a] : [...h, a])
              .map((A) => (A ? new z(A) : void 0))
              .map((A) => (A && !A.equals(z.default) ? A : void 0))
              .filter(zt)
          );
        }, [t, n, m, e, r, a]) || oa,
      isLoading: l || p || g,
      isFetched: i && u && d,
    };
  },
  { formatTokenAllDecimals: en } = ae,
  Fs = ({ borrowTokenMint: e, liquidityAvailable: t, liquidityRequired: n }) => {
    const { getToken: o } = de(),
      { symbol: a } = o(e);
    return s.jsxs('div', {
      className: te.root,
      'data-sentry-component': 'InsufficientLiquidityTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: [
        s.jsxs('div', {
          className: te.item,
          children: [
            s.jsxs('div', {
              className: te.title,
              children: [
                s.jsx($s, {
                  'data-sentry-element': 'CapacityLimitIcon',
                  'data-sentry-source-file': 'index.tsx',
                }),
                s.jsxs(P, {
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: ['Insufficient ', a, ' Liquidity'],
                }),
              ],
            }),
            s.jsxs('div', {
              className: te.row,
              children: [
                s.jsx(P, {
                  fs: 14,
                  lh: 18,
                  color: 'grey',
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: 'Liquidity Available',
                }),
                s.jsxs(P, {
                  fs: 14,
                  lh: 18,
                  weight: 'medium',
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'index.tsx',
                  children: [en(t, 4), ' ', a],
                }),
              ],
            }),
            t > 0 &&
              s.jsxs('div', {
                className: te.row,
                children: [
                  s.jsx(P, {
                    fs: 14,
                    lh: 18,
                    color: 'grey',
                    weight: 'medium',
                    children: 'Liquidity Required',
                  }),
                  s.jsxs(P, { fs: 14, lh: 18, weight: 'medium', children: [en(n, 4), ' ', a] }),
                ],
              }),
          ],
        }),
        s.jsx(Sn, {
          className: te.divider,
          'data-sentry-element': 'Divider',
          'data-sentry-source-file': 'index.tsx',
        }),
        s.jsx('div', {
          className: te.item,
          children: s.jsxs(P, {
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
  { formatPercent: ps } = ae,
  Rs = ({ currentSlippage: e, optimalSlippagePct: t }) =>
    s.jsx('div', {
      className: te.root,
      'data-sentry-component': 'SlippageTooHighTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: s.jsxs('div', {
        className: te.item,
        children: [
          s.jsxs('div', {
            className: te.title,
            children: [
              s.jsx(Mt, {
                name: 'WarningInfo',
                size: 18,
                color: 'yellow',
                'data-sentry-element': 'Icon',
                'data-sentry-source-file': 'index.tsx',
              }),
              s.jsxs(P, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [' Slippage Setting Is Above ', ps(t)],
              }),
            ],
          }),
          s.jsxs('div', {
            className: te.row,
            children: [
              s.jsx(P, {
                fs: 14,
                lh: 18,
                color: 'grey',
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Current',
              }),
              s.jsx(P, {
                fs: 14,
                lh: 18,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: ps(e),
              }),
            ],
          }),
          !bs(t) &&
            s.jsxs('div', {
              className: te.row,
              children: [
                s.jsx(P, {
                  fs: 14,
                  lh: 18,
                  color: 'grey',
                  weight: 'medium',
                  children: 'Recommended',
                }),
                s.jsxs(P, { fs: 14, lh: 18, weight: 'medium', children: ['<', ps(t)] }),
              ],
            }),
        ],
      }),
    }),
  Bn = new $(0),
  tn = { maxBorrowableAmountDecimal: Bn, elevationGroup: 0 },
  Fn = ({ marketAddress: e, collReserveAddress: t, debtReserveAddress: n }) => {
    const { getReserveByAddress: o } = je(),
      { getMarketByAddress: a } = Se(),
      { data: i } = At({ commitment: 'processed' });
    return S.useMemo(() => {
      if (!i || !t || !n) return tn;
      const l = a(e),
        r = o(t),
        u = o(n),
        p = l.getElevationGroupsForReservesCombination([r.address], u.address),
        m = vn.uniq([...p.map((g) => g.elevationGroup), 0]),
        d = u.getLiquidityAvailableForDebtReserveGivenCaps(l, m);
      for (let g = 0; g < d.length; g++)
        if (d[g].gt(Bn))
          return {
            maxBorrowableAmountDecimal: ue.lamportsToNumberDecimal(d[g], u.stats.decimals),
            elevationGroup: m[g],
          };
      return tn;
    }, [t, i, n, a, o, e]);
  },
  gs = new $(0),
  Rn = ({ marketAddress: e, collReserveAddress: t, debtReserveAddress: n }) => {
    const { getToken: o } = de(),
      { getReserveByAddress: a } = je(),
      { getMarketByAddress: i } = Se(),
      { data: l } = At({ refetchInterval: 10 * 1e3, commitment: 'processed' }),
      [r, u] = S.useState(gs);
    return (
      S.useEffect(() => {
        if (!l || !t || !n) {
          u(gs);
          return;
        }
        const p = i(e),
          m = a(t),
          d = a(n),
          g = o(d.getLiquidityMint());
        p.getMaxLeverageBorrowableAmount(m, d, l, !0)
          .then((c) => {
            u(ft(c, g.decimals));
          })
          .catch((c) => {
            console.error('currentSlot', c), u(gs);
          });
      }, [t, l, n, i, a, o, e]),
      { maxBorrowableAmountDecimal: r }
    );
  },
  re = (e, t) => ''.concat(e).concat(ho(t) ? '' : '/'.concat(t)),
  le = (e) => ''.concat(e ? 'long' : 'short'),
  aa = {
    [Me.openLong]: {
      onMutate: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Opening '.concat(re(t, n), ' ').concat(le(e), ' '),
        description: 'Depositing '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' opened'),
        description: 'Successfully deposited '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: t, quoteSymbol: n, defaults: o }) => ({
        message: 'Opening '.concat(re(t, n), ' ').concat(le(e), ' failed'),
        description: o.description,
      }),
    },
    [Me.openShort]: {
      onMutate: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Opening '.concat(re(t, n), ' ').concat(le(e), ' '),
        description: 'Depositing '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' opened'),
        description: 'Successfully deposited '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: t, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' open failed'),
        description: o.description,
      }),
    },
    [Me.closePosition]: {
      onMutate: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Closing '.concat(re(t, n), ' ').concat(le(e), ' position'),
        description: 'Withdrawing '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' closed'),
        description: 'Successfully withdrew '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: t, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' close failed'),
        description: o.description,
      }),
    },
    [Me.sizeIncrease]: {
      onMutate: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Increasing '.concat(re(t, n), ' ').concat(le(e), ' size'),
        description: 'Adjusting position by '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' size managed'),
        description: 'Successfully adjusted position by '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: t, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' size manage failed'),
        description: o.description,
      }),
    },
    [Me.sizeDecrease]: {
      onMutate: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Decreasing '.concat(re(t, n), ' ').concat(le(e), ' size'),
        description: 'Adjusting position by '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' size managed'),
        description: 'Successfully adjusted position by '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: t, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' size manage failed'),
        description: o.description,
      }),
    },
    [Me.manageLeverage]: {
      onMutate: ({ isLong: e, baseSymbol: t, quoteSymbol: n }) => ({
        message: 'Adjusting '.concat(re(t, n), ' ').concat(le(e), ' leverage'),
        description: '',
      }),
      onSuccess: () => ({ message: 'Leverage adjusted successfully', description: '' }),
      onError: ({ isLong: e, baseSymbol: t, quoteSymbol: n, defaults: o }) => ({
        message: 'Adjusting '.concat(re(t, n), ' ').concat(le(e), ' leverage failed'),
        description: o.description,
      }),
    },
    [Me.repayDebt]: {
      onMutate: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Repaying '.concat(re(t, n), ' ').concat(le(e), ' debt'),
        description: 'Repaying '.concat(o, ' ').concat(a),
      }),
      onSuccess: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' debt repaid'),
        description: 'Successfully repaid '.concat(o, ' ').concat(a),
      }),
      onError: ({ isLong: e, baseSymbol: t, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' debt repay failed'),
        description: o.description,
      }),
    },
    [Me.topUpCollateral]: {
      onMutate: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: 'Topping up '.concat(re(t, n), ' ').concat(le(e)),
        description: 'Adding '.concat(o, ' ').concat(a, ' as collateral'),
      }),
      onSuccess: ({ isLong: e, baseSymbol: t, quoteSymbol: n, amount: o, selectedSymbol: a }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' topped up'),
        description: 'Successfully added '.concat(o, ' ').concat(a, ' as collateral'),
      }),
      onError: ({ isLong: e, baseSymbol: t, quoteSymbol: n, defaults: o }) => ({
        message: ''.concat(re(t, n), ' ').concat(le(e), ' top up failed'),
        description: o.description,
      }),
    },
  },
  ze =
    ({
      leverageVaultType: e,
      formAction: t,
      isLong: n,
      collSymbol: o,
      debtSymbol: a,
      selectedSymbol: i,
    }) =>
    ({ action: l, amount: r, defaults: u }) => {
      if (e !== 'leverage') return u;
      const p = t && aa[t];
      return p
        ? p[l]({
            isLong: n,
            baseSymbol: n ? o : a,
            quoteSymbol: n ? a : o,
            amount: r,
            selectedSymbol: i,
            defaults: u,
          })
        : u;
    },
  Fl = 'leverage-form',
  gt = [3.2, 5];
function Nn({ variant: e }) {
  return s.jsx('div', {
    className: te.root,
    'data-sentry-component': 'LeverageTooHighTooltip',
    'data-sentry-source-file': 'index.tsx',
    children: s.jsxs('div', {
      className: te.item,
      children: [
        s.jsxs('div', {
          className: te.title,
          children: [
            s.jsx(Mt, {
              name: 'WarningInfo',
              size: 24,
              color: e === 'high' ? 'yellow' : 'red',
              'data-sentry-element': 'Icon',
              'data-sentry-source-file': 'index.tsx',
            }),
            s.jsx(P, {
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'index.tsx',
              children: e === 'high' ? 'High Leverage' : 'Extreme Leverage',
            }),
          ],
        }),
        s.jsx('div', {
          className: te.row,
          children: s.jsxs(P, {
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
const Ns = { [''.concat(xo, ':').concat(yo)]: 250, [''.concat(bo, ':').concat(wo)]: 1e6 },
  ia = '_root_11lsd_1',
  ra = '_title_11lsd_7',
  la = '_row_11lsd_12',
  ca = '_icon_11lsd_16',
  Dt = { root: ia, title: ra, row: la, icon: ca },
  da = ({ collTokenMint: e, debtTokenMint: t, limit: n }) => {
    const { getToken: o } = de(),
      { symbol: a } = o(e),
      { symbol: i } = o(t);
    return s.jsxs('div', {
      className: Dt.root,
      'data-sentry-component': 'LimitTooltip',
      'data-sentry-source-file': 'LimitTooltip.tsx',
      children: [
        s.jsxs('div', {
          className: Dt.title,
          children: [
            s.jsx(Mt, {
              name: 'WarningInfo',
              size: 24,
              color: 'orange',
              className: Dt.icon,
              'data-sentry-element': 'Icon',
              'data-sentry-source-file': 'LimitTooltip.tsx',
            }),
            s.jsx(P, {
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'LimitTooltip.tsx',
              children: 'Limit Exceeded',
            }),
          ],
        }),
        s.jsx('div', {
          className: Dt.row,
          children: s.jsxs(P, {
            fs: 14,
            lh: 18,
            color: 'grey',
            'data-sentry-element': 'Text',
            'data-sentry-source-file': 'LimitTooltip.tsx',
            children: [
              'To protect from price impact, the maximum size per transaction is ',
              n,
              ' ',
              i,
              ' or ',
              n,
              ' ',
              a,
              '. Please reduce your transaction amount.',
            ],
          }),
        }),
      ],
    });
  },
  { formatShortName: ua } = ae,
  Gn = (e, t, n, o, a) => {
    if (!o || a !== 'multiply') return;
    const i = Ns[''.concat(t, ':').concat(n)];
    if (i && o && e > i)
      return {
        text: 'Limit Exceeded',
        variant: 'warning',
        tooltip: s.jsx(da, { collTokenMint: t, debtTokenMint: n, limit: ua(i) }),
        hasIcon: !1,
        isCritical: !0,
      };
  },
  sn = 'Enter Deposit Amount',
  { formatTokenAllDecimals: nn, formatPercent: ma } = ae,
  pa = ({
    marketAddress: e,
    vault: t,
    leverageType: n,
    onStateUpdate: o,
    state: a,
    formStats: i,
    pythHermesPrices: l,
    obligation: r,
  }) => {
    var zs;
    const { walletPublicKey: u } = me(),
      { getToken: p } = de(),
      { getReserveByTokenMint: m, getReserveByAddress: d } = je(),
      { getReserveApys: g } = ht(),
      { isLong: c } = Oo({ vault: t, marketAddress: e }),
      { isWalletConnect: y } = Je(),
      M = n === 'leverage' && c,
      { isDisabled: _, messages: L } = An({
        obligation: M ? r : void 0,
        borrowReserveAddress: t.borrowReserveAddress,
        collateralReservesAddresses: M ? [t.depositReserveAddress] : [],
        page: 'leverage',
        mode: Nt.isolated,
      }),
      { getSlippage: h, isSlippageTooHigh: I, optimalSlippage: A } = xt(),
      { collTokenMint: T, debtTokenMint: C, depositReserveAddress: G, borrowReserveAddress: D } = t,
      x = h(),
      f = p(T),
      b = p(C),
      { data: j, isFetched: w } = st([T, C, ve]),
      v = S.useRef(l),
      F = S.useRef(new $(0)),
      k = S.useRef(new $(0));
    S.useEffect(() => {
      w && ((F.current = j[f.address]), (k.current = j[b.address]));
    }, [w, j, f, b]);
    const B = vo(new z(T)),
      N = S.useMemo(() => {
        var X, De;
        return (
          ((X = a.selectedTokenInfo) == null ? void 0 : X.address) === T ||
          ((De = a.selectedTokenInfo) == null ? void 0 : De.address) === C
        );
      }, [T, C, a.selectedTokenInfo]),
      E = S.useMemo(
        () => (N ? a.selectedTokenInfo.address : c ? T : C),
        [N, T, C, a.selectedTokenInfo, c]
      ),
      O = p(E);
    S.useEffect(() => {
      N || o({ selectedTokenInfo: p(c ? T : C) });
    }, [T, C, p, o, N, c]),
      S.useEffect(() => {
        var X, De;
        if (w) {
          const Ue = F.current,
            eo = k.current,
            to = ((X = v.current) == null ? void 0 : X[f.address]) || 1,
            so = ((De = v.current) == null ? void 0 : De[b.address]) || 1,
            no = Ue.toNumber() * to,
            oo = eo.toNumber() * so;
          no > oo ? o({ selectedTokenInfo: f }) : o({ selectedTokenInfo: b });
        }
      }, [f, b, o, w]);
    const { maxBorrowableAmountDecimal: K, elevationGroup: V } = Fn({
        marketAddress: e,
        collReserveAddress: t.depositReserveAddress,
        debtReserveAddress: t.borrowReserveAddress,
      }),
      { maxBorrowableAmountDecimal: R } = Rn({
        marketAddress: e,
        collReserveAddress: t.depositReserveAddress,
        debtReserveAddress: t.borrowReserveAddress,
      }),
      U = n === 'multiply' ? R : K,
      Q = n !== 'multiply' && V === 0 ? V : void 0,
      {
        data: { setupIxns: q },
      } = ls({ vaultType: n, collTokenMint: T, debtTokenMint: C, marketAddress: e }),
      H = !!q.length,
      { leverage: ee, setLeverage: oe } = kn({
        obligation: r,
        onLeverageUpdate: o,
        leverage: a.leverage,
      }),
      J =
        a.currentTab === ne.manageSize
          ? (zs = r == null ? void 0 : r.refreshedStats.leverage.toNumber()) != null
            ? zs
            : Ie
          : ee,
      W = i,
      Y = S.useMemo(() => a.amount || 0, [a.amount]),
      Z = (X) => {
        o({ amount: X });
      },
      _e = m(e, E);
    if (!_e) throw new Error('Reserve is not found');
    const Le = d(G);
    if (!Le) throw new Error('Collateral reserve is not found');
    const Ae = d(D);
    if (!Ae) throw new Error('Debt reserve is not found');
    const Pe = ke({ reserve: Ae, obligation: r || void 0, getReserveApys: g }),
      { debtEpochReset: ge, dailyDebtCapLimit: fe, dailyDebtCapFilled: ye } = Pe,
      xe = (ge.lte(new $(0)) ? fe : $.max(Pe.dailyDebtCapLimit.minus(ye), 0)).lt(
        W.simulated.totalBorrowAmount
      ),
      We = ke({ reserve: _e, obligation: r || void 0, getReserveApys: g }),
      { price: $e, supplyCap: nt } = We,
      bt = ke({ reserve: Le, obligation: r || void 0, getReserveApys: g }),
      { supplyCap: ot, totalSupplyAmount: Oe } = bt,
      Re = j[ve].toNumber(),
      Ke = Be(),
      us = S.useMemo(() => new $(Y).mul($e), [Y, $e]),
      wt = S.useMemo(() => j[E] || 0, [j, E]),
      Ne = S.useMemo(() => $.min(nt, Cn(E, wt, Ge.leverage.deposit)), [wt, E, nt]),
      se = S.useMemo(() => {
        if (n !== 'multiply') return Ne;
        const X = Ns[''.concat(T, ':').concat(C)] || 1 / 0;
        return $.min(X, Ne);
      }, [Ne, T, C, n]),
      It = () => {
        Z(se.toNumber()), Ke.track('lending:'.concat(n, ':click-deposit-max'));
      },
      jt = () => {
        Z(se.div(2).toNumber()), Ke.track('lending:'.concat(n, ':click-deposit-half'));
      },
      Kn = (X) => {
        o({ selectedTokenInfo: p(X) });
      },
      Un = Math.max(ot.minus(Oe).toNumber(), 0),
      Ws = W.simulated.totalCollateralAmount - W.current.totalCollateralAmount,
      Qn = Oe.plus(Ws).gt(ot),
      Pt = W.simulated.totalBorrowAmount - W.current.totalBorrowAmount,
      Hn = S.useMemo(() => {
        let X = Y ? 'Multiply '.concat(f.symbol) : sn;
        const De = c ? f.symbol : b.symbol;
        let Ue =
          a.currentTab === ne.manageSize
            ? 'Deposit '.concat(O.symbol)
            : Y
              ? 'Open '.concat(De, ' ').concat(c ? 'Long' : 'Short')
              : sn;
        return H && ((X = 'Setup Account'), (Ue = 'Setup Account')), n === 'leverage' ? Ue : X;
      }, [Y, b.symbol, c, f.symbol, H, n, a.currentTab, O]),
      Yn = !!r && !!(r != null && r.refreshedStats.netAccountValue),
      qs = () => {
        const X = [];
        return (
          Y || X.push('Set deposit amount'),
          Y > Ne.toNumber() && X.push('Insufficient funds'),
          Qn &&
            X.push(
              'Deposit attempt is '
                .concat(nn(Ws, 10), ' ')
                .concat(f.symbol, ' but there is only ')
                .concat(nn(Un, 6), ' ')
                .concat(f.symbol, ' capacity available')
            ),
          J < Ie && X.push('Leverage should be higher than '.concat(Ie)),
          H ? [] : X
        );
      },
      Jn = S.useMemo(() => [f, b], [f, b]),
      at = B && J > gt[1] ? 'extreme' : B && J > gt[0] ? 'high' : 'default',
      Vs = S.useMemo(() => {
        const X = [];
        y && X.push({ tooltip: et, text: 'Wallet Connect', variant: 'primary', isCritical: !0 });
        const De = tt(Y, Re, Ge.leverage.deposit, !!u, w);
        De && X.push(De);
        const Ue = Gn(Y, T, C, !!u, n);
        return (
          Ue && X.push(Ue),
          xe &&
            X.push({
              text: 'Daily Cap Reached',
              tooltip: s.jsx(Io, {
                borrowAmount: W.simulated.totalBorrowAmount,
                tokenMint: C,
                dailyCap: fe,
                dailyCapFilled: ye,
                resetsInMinutes: ge,
              }),
              variant: 'warning',
              isCritical: !0,
              hasIcon: !1,
              isFluid: !0,
            }),
          Pt > 0 &&
            U.lt(Pt) &&
            X.push({
              text: 'Insufficient Liquidity',
              tooltip: s.jsx(Fs, {
                borrowTokenMint: C,
                liquidityAvailable: U.toNumber(),
                liquidityRequired: Pt,
              }),
              variant: 'warning',
              isCritical: !0,
              hasIcon: !1,
              isFluid: !0,
            }),
          at !== 'default' &&
            Y > 0 &&
            X.push({
              tooltip: s.jsx(Nn, { variant: at }),
              text: at === 'high' ? 'High Leverage' : 'Extreme Leverage',
              variant: at === 'high' ? 'warning' : 'danger',
              hasIcon: !1,
            }),
          I() &&
            X.push({
              text: 'Slippage Setting >'.concat(ma(A)),
              tooltip: s.jsx(Rs, { currentSlippage: x.toNumber(), optimalSlippagePct: A }),
              variant: 'warning',
              hasIcon: !1,
            }),
          L && X.push(...L),
          X
        );
      }, [
        y,
        Y,
        Re,
        u,
        w,
        xe,
        Pt,
        U,
        at,
        I,
        L,
        W.simulated.totalBorrowAmount,
        C,
        fe,
        ye,
        ge,
        A,
        x,
        T,
        n,
      ]),
      Xn = (!Y || Y > Ne.toNumber() || !!qs().length || _ || Vs.some((X) => X.isCritical)) && !H,
      Zn = B ? gt : [];
    return {
      amount: Y,
      depositButtonText: Hn,
      elevationGroupOverride: Q,
      errorMessages: qs(),
      hasActiveObligation: Yn,
      isDisabled: Xn,
      setupIxns: q,
      leverage: J,
      maxValue: Ne,
      onAmountChange: Z,
      onHalfDepositClick: jt,
      onLeverageChange: oe,
      onMaxDepositClick: It,
      onSelectedTokenChange: Kn,
      selectedTokenInfo: O,
      selectedTokenMint: E,
      sliderBreakpoints: Zn,
      sliderVariant: at,
      slippage: x,
      stats: W,
      tokensInfos: Jn,
      value: us,
      warnings: Vs,
    };
  };
function ga({
  leverageType: e,
  vault: t,
  obligation: n,
  state: o,
  marketAddress: a,
  onSuccess: i,
  collTokenMint: l,
  debtTokenMint: r,
  leverage: u,
  priceImpactType: p,
  pythHermesPrices: m,
  stakeRates: d,
  onPriceImpactModalVisibleChange: g,
  refetchPriceImpactAll: c,
  elevationGroupOverride: y,
  selectedTokenMint: M,
  amount: _,
}) {
  const { borrowReserveAddress: L, depositReserveAddress: h } = t,
    I = Et(),
    { getPriceByTokenMintDecimal: A } = Fe(),
    { onInvalidate: T } = Ut(),
    { onInvalidate: C } = Ls(),
    { getToken: G } = de(),
    { data: D } = Bs({ leverageType: e, collTokenMint: l, debtTokenMint: r, marketAddress: a }),
    x = G(l),
    f = G(r),
    b = G(M),
    j = S.useMemo(
      () =>
        ze({
          leverageVaultType: e,
          formAction: o.currentFormAction,
          isLong: !!o.isLong,
          collSymbol: x.symbol,
          debtSymbol: f.symbol,
          selectedSymbol: b.symbol,
        }),
      [e, o.currentFormAction, o.isLong, x.symbol, f.symbol, b.symbol]
    ),
    { onDeposit: w, isLoading: v } = Xo({
      getStatusMsg: j,
      marketAddress: a,
      mixpanelPrefix: e === 'multiply' ? pe.LENDING.MULTIPLY.BASE : pe.LENDING.LEVERAGE.BASE,
      elevationGroupOverride: y,
      onSuccess: async () => {
        await I.invalidateQueries({ queryKey: _t.metrics }),
          i(),
          e === 'multiply'
            ? T({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: h,
                borrowReserveAddress: L,
              })
            : C({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: h,
                borrowReserveAddress: L,
              });
      },
    });
  return {
    handleDepositTransaction: async ({ ingorePriceImpactWarning: k = !1 }) => {
      const B = await c();
      if (!B || !B.quote) return;
      const {
          priceCollToDebt: N,
          priceDebtToColl: E,
          collToDebtPriceFromQuote: O,
          debtToCollPriceFromQuote: K,
          quote: V,
          currentSlot: R,
          inputMint: U,
          outputMint: Q,
        } = B,
        q = Xe({
          collToDebtPriceFromQuote: O,
          debtToCollPriceFromQuote: K,
          quote: V,
          collTokenMint: l,
          pythHermesPrices: m,
          getPriceByTokenMintDecimal: A,
          stakeRates: d,
          inputMint: U,
          outputMint: Q,
          leverage: u,
        }),
        H = Ze(p, q.priceImpactBps);
      if (!k && (H > Ss.safe || js(p, q.theoreticalPriceDivergenceBps))) {
        g(!0);
        return;
      }
      w({
        selectedTokenMint: M,
        collTokenMint: l,
        debtTokenMint: r,
        amount: _,
        targetLeverage: u,
        depositAddress: h,
        borrowAddress: L,
        marketAddress: a,
        vaultType: e,
        lookupTablesAddresses: D,
        obligation: n,
        quote: V,
        priceDebtToColl: E,
        getPriceAinB: async (ee) => Promise.resolve(ee.toString() === l ? N : E),
        currentSlot: R,
        mutationStartNotificationText: o.currentTab === ne.manageSize ? 'Depositing' : void 0,
        mutationSuccessNotificationText:
          o.currentTab === ne.manageSize ? 'Deposit was successful' : void 0,
      });
    },
    isLoadingMutation: v,
  };
}
const fa = '_metalGreyGradient_1n4qz_9',
  ha = '_goldGradient_1n4qz_15',
  xa = '_silverGradient_1n4qz_21',
  ya = '_bronzeGradient_1n4qz_27',
  ba = '_pointsSilverTextGradient_1n4qz_33',
  wa = '_root_1n4qz_39',
  va = '_statsPanel_1n4qz_40',
  La = '_statsItem_1n4qz_45',
  Sa = '_statsSimupationWrapper_1n4qz_51',
  Qe = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1n4qz_1',
    metalGreyGradient: fa,
    goldGradient: ha,
    silverGradient: xa,
    bronzeGradient: ya,
    pointsSilverTextGradient: ba,
    root: wa,
    statsPanel: va,
    statsItem: La,
    statsSimupationWrapper: Sa,
  },
  Ta = '_metalGreyGradient_h2x7l_9',
  _a = '_goldGradient_h2x7l_15',
  Ma = '_silverGradient_h2x7l_21',
  Aa = '_bronzeGradient_h2x7l_27',
  Ca = '_pointsSilverTextGradient_h2x7l_33',
  Ia = '_root_h2x7l_39',
  ja = '_statsPanel_h2x7l_40',
  Pa = '_statsItem_h2x7l_45',
  kt = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_h2x7l_1',
    metalGreyGradient: Ta,
    goldGradient: _a,
    silverGradient: Ma,
    bronzeGradient: Aa,
    pointsSilverTextGradient: Ca,
    root: Ia,
    statsPanel: ja,
    statsItem: Pa,
  },
  { formatTokenAllDecimals: lt } = ae,
  $a = ({ stats: e, collateralTokenInfo: t, debtTokenInfo: n }) =>
    s.jsx(s.Fragment, {
      children: s.jsx(Ps, {
        panel: s.jsxs('div', {
          className: kt.statsPanel,
          children: [
            s.jsxs('div', {
              className: kt.statsItem,
              children: [
                s.jsxs(P, {
                  color: 'grey',
                  children: [t == null ? void 0 : t.symbol, ' Collateral'],
                }),
                s.jsxs(P, {
                  color: 'white',
                  children: [
                    lt(e.current.totalCollateralAmount, 6),
                    ' → ',
                    lt(e.simulated.totalCollateralAmount, 6),
                    ' ',
                    t == null ? void 0 : t.symbol,
                  ],
                }),
              ],
            }),
            s.jsxs('div', {
              className: kt.statsItem,
              children: [
                s.jsxs(P, { color: 'grey', children: [n == null ? void 0 : n.symbol, ' Debt'] }),
                s.jsxs(P, {
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
        children: s.jsxs('div', {
          className: kt.statsItem,
          children: [
            s.jsx(P, {
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'NetValueCollapsiblePanel.tsx',
              children: 'Net Value',
            }),
            s.jsxs(P, {
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
  Da = '_metalGreyGradient_1d33x_9',
  ka = '_goldGradient_1d33x_15',
  Ba = '_silverGradient_1d33x_21',
  Fa = '_bronzeGradient_1d33x_27',
  Ra = '_pointsSilverTextGradient_1d33x_33',
  Na = '_root_1d33x_39',
  Ga = '_statsPanel_1d33x_40',
  Ea = '_statsItem_1d33x_45',
  Wa = '_statsWrapper_1d33x_50',
  vt = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1d33x_1',
    metalGreyGradient: Da,
    goldGradient: ka,
    silverGradient: Ba,
    bronzeGradient: Fa,
    pointsSilverTextGradient: Ra,
    root: Na,
    statsPanel: Ga,
    statsItem: Ea,
    statsWrapper: Wa,
  },
  { formatPercent: Bt } = ae,
  qa = ({ stats: e, leverageType: t }) => {
    const n = t === 'multiply' ? Lt : Lo;
    return s.jsx(Ps, {
      panel: s.jsxs('div', {
        className: vt.statsPanel,
        children: [
          s.jsxs('div', {
            className: vt.statsItem,
            children: [
              s.jsx(P, { color: 'grey', children: 'Max LTV' }),
              s.jsx(P, { color: 'yellow', children: Bt(e.simulated.maxLtv * 100) }),
            ],
          }),
          s.jsxs('div', {
            className: vt.statsItem,
            children: [
              s.jsx(P, { color: 'grey', children: 'Liquidation LTV' }),
              s.jsx(P, { color: 'red', children: Bt(e.simulated.liquidationLtv * 100) }),
            ],
          }),
        ],
      }),
      'data-sentry-element': 'CollapsiblePanel',
      'data-sentry-component': 'LoanToValueCollapsiblePanel',
      'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
      children: s.jsxs('div', {
        className: vt.statsItem,
        children: [
          s.jsx(P, {
            color: 'grey',
            'data-sentry-element': 'Text',
            'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
            children: 'Loan-to-Value Ratio',
          }),
          s.jsxs('div', {
            className: vt.statsWrapper,
            children: [
              s.jsx(P, {
                color: n(e.current.ltv, e.current.maxLtv, e.current.liquidationLtv),
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
                children: e.current.ltv ? Bt(e.current.ltv * 100) : 0,
              }),
              '→',
              s.jsx(P, {
                color: n(e.simulated.ltv, e.simulated.maxLtv, e.current.liquidationLtv),
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
                children: Bt(e.simulated.ltv * 100),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Va = (e) => (e > 0 ? 'Net Supply APY' : e < 0 ? 'Net Borrow APY' : 'Net APY'),
  { formatPercent: za, formatCcy: Oa } = ae,
  En = ({ liquidationPrice: e, priceCollToDebt: t, isLong: n }) =>
    S.useMemo(() => {
      if (e === 1 / 0 || e === 0) return 'N/A';
      const o = n ? t : 1 / t,
        a = n ? '-' : '+',
        i = Math.abs(e / o - 1);
      return i === 100
        ? ''
        : ''
            .concat(Oa('', e), ' (')
            .concat(a)
            .concat(za(i * 100, 1, !0), ')');
    }, [e, t, n]),
  { formatApyWithCap: on, formatLeverageSliderV2: Ka, formatTokenAllDecimals: Ua } = ae,
  Gs = (e) => {
    const A = e,
      {
        stats: t,
        collateralTokenMint: n,
        debtTokenMint: o,
        isHidden: a,
        leverageType: i,
        isLong: l,
        flashLoanInfo: r,
      } = A,
      u = it(A, [
        'stats',
        'collateralTokenMint',
        'debtTokenMint',
        'isHidden',
        'leverageType',
        'isLong',
        'flashLoanInfo',
      ]),
      { getToken: p } = de(),
      m = p(n),
      d = p(o),
      {
        liquidationPrice: g,
        priceCollToDebt: c,
        netApy: y,
        leverage: M,
        borrowFee: _,
      } = t.simulated,
      L = En({ liquidationPrice: g, priceCollToDebt: c, isLong: l }),
      h = (r == null ? void 0 : r.flashLoanFee.mul(100).toNumber()) || 0,
      I = i === 'multiply' && t.current.debtTokenInfo.symbol === 'SOL';
    return s.jsxs('div', {
      className: Qe.root,
      'data-sentry-component': 'StatsDefault',
      'data-sentry-source-file': 'StatsDefault.tsx',
      children: [
        s.jsx(ts, {
          withSlippage: !0,
          'data-sentry-element': 'TransactionSettingButton',
          'data-sentry-source-file': 'StatsDefault.tsx',
        }),
        !a &&
          s.jsxs(s.Fragment, {
            children: [
              s.jsxs('div', {
                className: Qe.statsItem,
                children: [
                  s.jsx(P, { color: 'grey', children: Va(y) }),
                  s.jsx('div', {
                    className: Qe.statsSimupationWrapper,
                    children: s.jsx(P, { color: Wo(y * 100), children: on(Math.abs(y) * 100) }),
                  }),
                ],
              }),
              s.jsxs('div', {
                className: Qe.statsItem,
                children: [
                  s.jsx(P, { color: 'grey', children: 'Leverage' }),
                  s.jsx(P, { color: 'white', children: Ka(M) }),
                ],
              }),
              !I &&
                s.jsxs('div', {
                  className: Qe.statsItem,
                  children: [
                    s.jsx(P, { color: 'grey', children: 'Liquidation Price' }),
                    s.jsx(P, { color: 'white', children: L }),
                  ],
                }),
              s.jsx($a, { stats: t, collateralTokenInfo: m, debtTokenInfo: d }),
              s.jsx(qa, { leverageType: i, stats: t }),
              s.jsx(
                $n,
                he(
                  {
                    defaultIsCollapsed: !0,
                    withFillPrice: !0,
                    leverageType: i,
                    isLong: l,
                    debtTokenMint: o.toString(),
                    collTokenMint: n.toString(),
                  },
                  u
                )
              ),
              !!_ &&
                s.jsxs('div', {
                  className: Qe.statsItem,
                  children: [
                    s.jsx(P, { color: 'grey', children: 'Borrow fee' }),
                    s.jsx(P, { color: 'white', children: on(_ * 100, 1, !0) }),
                  ],
                }),
              h > 0 &&
                s.jsxs('div', {
                  className: Qe.statsItem,
                  children: [
                    s.jsx(Tn, {
                      render: () =>
                        s.jsx(P, {
                          children:
                            "Flash loan fee, added to the protocol to prevent spamming of Kamino's flash loan mechanism",
                        }),
                      clickable: !0,
                      children: s.jsx(P, {
                        color: 'grey',
                        underline: !0,
                        children: 'Flash borrow fee',
                      }),
                    }),
                    s.jsxs(P, { color: 'white', children: [Ua(h, 3), '%'] }),
                  ],
                }),
            ],
          }),
      ],
    });
  },
  Es = () =>
    s.jsx('div', {
      className: te.root,
      'data-sentry-component': 'JupiterRoutingTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: s.jsxs('div', {
        className: te.item,
        children: [
          s.jsxs('div', {
            className: te.title,
            children: [
              s.jsx(Mt, {
                name: 'WarningInfo',
                size: 18,
                color: 'blue',
                'data-sentry-element': 'Icon',
                'data-sentry-source-file': 'index.tsx',
              }),
              s.jsx(P, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: ' Jupiter Transaction Routing',
              }),
            ],
          }),
          s.jsx('div', {
            className: te.row,
            children: s.jsx(P, {
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
  Qa = 0.95,
  Wn = (e) => e * Qa,
  { formatTokenAllDecimals: Ha, formatLeverageSliderV2: Ya } = ae,
  fs = ({
    vault: e,
    leverageType: t,
    state: n,
    marketAddress: o,
    obligation: a,
    pythHermesPrices: i,
    formStats: l,
    onStateUpdate: r,
    onSuccess: u,
  }) => {
    const { walletPublicKey: p } = me(),
      { debtTokenMint: m, collTokenMint: d } = e,
      { getPriceByTokenMintDecimal: g } = Fe(),
      {
        amount: c,
        depositButtonText: y,
        elevationGroupOverride: M,
        errorMessages: _,
        hasActiveObligation: L,
        isDisabled: h,
        leverage: I,
        maxValue: A,
        onAmountChange: T,
        onHalfDepositClick: C,
        onLeverageChange: G,
        onMaxDepositClick: D,
        onSelectedTokenChange: x,
        selectedTokenInfo: f,
        selectedTokenMint: b,
        setupIxns: j,
        sliderBreakpoints: w,
        sliderVariant: v,
        slippage: F,
        stats: k,
        tokensInfos: B,
        value: N,
        warnings: E,
      } = pa({
        vault: e,
        leverageType: t,
        state: n,
        marketAddress: o,
        obligation: a,
        pythHermesPrices: i,
        formStats: l,
        onStateUpdate: r,
      }),
      O = mt(t),
      {
        isConfirm: K,
        isModalVisible: V,
        onModalVisibleChange: R,
        onConfirm: U,
        onConfirmChange: Q,
      } = jn({
        dontRemindAgainLocalStorageKey:
          t === 'leverage'
            ? 'long/short.dontShowFirstDepositInfoModal'
            : 'multiply.dontShowFirstDepositInfoModal',
      }),
      q = d.toString() === Ot && t === 'multiply' ? 'jlpMultiply' : t,
      { sliderValue: H, setSliderValue: ee } = Eo(G, I || 1, 200),
      { isModalVisible: oe, onModalVisibleChange: J } = os(),
      {
        data: W,
        isFetching: Y,
        refetch: Z,
        dataUpdatedAt: _e,
      } = Qt({
        marketAddress: o,
        obligation: a,
        slippage: F,
        debtTokenMint: m,
        collTokenMint: d,
        leverage: I,
        leverageType: t,
        enabled: c > 0,
        specificProps: {
          formType: 'deposit',
          amount: c,
          selectedTokenMint: b,
          elevationGroupOverride: M,
        },
      }),
      { data: Le, isLoading: Ae } = as({ refetchIntervalSeconds: 600 }),
      ge = Ae || (W === void 0 && Y),
      {
        priceImpactBps: fe,
        theoreticalPrice: ye,
        marketPrice: ce,
        theoreticalPriceDivergenceBps: xe,
      } = S.useMemo(
        () =>
          W
            ? Xe({
                debtToCollPriceFromQuote: W.debtToCollPriceFromQuote,
                collToDebtPriceFromQuote: W.collToDebtPriceFromQuote,
                quote: W.quote,
                collTokenMint: d,
                pythHermesPrices: i,
                getPriceByTokenMintDecimal: g,
                stakeRates: Le,
                inputMint: W.inputMint,
                outputMint: W.outputMint,
                leverage: I,
              })
            : Ht,
        [d, g, i, W, Le, I]
      ),
      { handleDepositTransaction: We, isLoadingMutation: $e } = ga({
        leverageType: t,
        vault: e,
        obligation: a,
        state: n,
        marketAddress: o,
        onSuccess: () => {
          u == null || u(), r({ amount: 0, leverage: Ie });
        },
        collTokenMint: d,
        debtTokenMint: m,
        leverage: I,
        walletPublicKey: p,
        priceImpactType: q,
        pythHermesPrices: i,
        stakeRates: Le,
        onPriceImpactModalVisibleChange: J,
        refetchPriceImpactAll: async () => (await Z()).data,
        selectedTokenMint: b,
        amount: c,
      }),
      {
        handleSetupAccount: nt,
        onCloseSetupModal: bt,
        isSetupModalOpened: ot,
      } = Yt({
        leverageType: t,
        collTokenMint: d,
        debtTokenMint: m,
        setupIxns: j,
        walletPublicKey: p,
      }),
      Oe = async () => {
        if (!K) {
          R(!0);
          return;
        }
        if (j.length) {
          nt();
          return;
        }
        await We({ ingorePriceImpactWarning: !1 });
      };
    return s.jsxs('div', {
      className: rt.root,
      'data-sentry-component': 'DepositForm',
      'data-sentry-source-file': 'DepositForm.tsx',
      children: [
        s.jsx('div', {
          className: rt.input,
          children: s.jsx(Ct, {
            value: c,
            label: 'You deposit',
            topStat: new $(N),
            variant: 'secondary',
            tokensInfos: B,
            bottomLeftStat: 'Available: '.concat(Ha(A, f.decimals)),
            defaultSelectedTokenMint: f.address,
            onSelectedTokenChange: x,
            onInputChange: T,
            onMax: D,
            onHalf: C,
            'data-sentry-element': 'LargeInput',
            'data-sentry-source-file': 'DepositForm.tsx',
          }),
        }),
        !L &&
          s.jsxs('div', {
            className: rt.slider,
            children: [
              s.jsx(P, { className: rt.title, children: O }),
              s.jsx(Dn, {
                min: Ie,
                value: H,
                step: 0.01,
                max: Wn(e.maxLeverage),
                onValueChange: ee,
                formatter: Ya,
                breakpoints: w,
                variant: v,
              }),
            ],
          }),
        s.jsx(yt, {
          size: 'large',
          disabled: h || ge || $e,
          isFullWidth: !0,
          isLoading: ge,
          tooltipMessages: _,
          onClick: Oe,
          'data-sentry-element': 'FormButton',
          'data-sentry-source-file': 'DepositForm.tsx',
          children: y,
        }),
        s.jsxs('div', {
          className: rt.warnings,
          children: [
            q === 'jlpMultiply' &&
              c > 0 &&
              s.jsx(Ee, {
                variant: 'info',
                hasIcon: !1,
                tooltip: s.jsx(Es, {}),
                text: 'Jupiter Routing',
              }),
            E.map((Re, Ke) =>
              S.createElement(
                Ee,
                Ce(he({}, Re), { key: ''.concat(Re.text.toString() || '', '-').concat(Ke) })
              )
            ),
            s.jsx(is, {
              type: q,
              priceImpactBps: fe,
              collTokenMint: d,
              theoreticalPriceDivergenceBps: xe,
              marketPrice: ce,
              theoreticalPrice: ye,
              variant: 'tag',
              isLong: !!n.isLong,
              'data-sentry-element': 'PriceImpactNotifications',
              'data-sentry-source-file': 'DepositForm.tsx',
            }),
          ],
        }),
        s.jsx('div', {
          className: rt.stats,
          children: s.jsx(Gs, {
            isLoading: ge,
            isHidden: !c || !p,
            stats: k,
            priceImpactBps: fe,
            leverageType: t,
            quote: W == null ? void 0 : W.quote,
            onRefetchData: Z,
            dataUpdatedAt: _e,
            isLong: !!n.isLong,
            durationSeconds: Jt,
            collateralTokenMint: d,
            debtTokenMint: m,
            flashLoanInfo: W == null ? void 0 : W.flashLoanInfo,
            inputMint: W == null ? void 0 : W.inputMint,
            outputMint: W == null ? void 0 : W.outputMint,
            'data-sentry-element': 'StatsDefault',
            'data-sentry-source-file': 'DepositForm.tsx',
          }),
        }),
        s.jsx(Xt, {
          isOpen: ot,
          contentType: t,
          onClose: bt,
          'data-sentry-element': 'AccountSetupModal',
          'data-sentry-source-file': 'DepositForm.tsx',
        }),
        s.jsx(Pn, {
          isConfirm: K,
          onConfirmChange: Q,
          isVisible: V,
          onHide: () => R(!1),
          onConfirmDeposit: (Re) => {
            U(Re), Oe();
          },
          'data-sentry-element': 'FirstDepositInfoModal',
          'data-sentry-source-file': 'DepositForm.tsx',
        }),
        s.jsx(rs, {
          type: Ze(q, fe),
          priceImpactType: q,
          priceImpactBps: fe,
          theoreticalPriceDivergenceBps: xe,
          marketPrice: ce,
          theoreticalPrice: ye,
          onOk: () => {
            J(!1), We({ ingorePriceImpactWarning: !0 });
          },
          onCancel: () => {
            J(!1);
          },
          isVisible: oe,
          isLoading: ge,
          'data-sentry-element': 'PriceImpactWarningModal',
          'data-sentry-source-file': 'DepositForm.tsx',
        }),
      ],
    });
  },
  Ja = ({ obligation: e, reserveAddress: t }) => {
    const { getReserveByAddress: n } = je(),
      { getReserveApys: o } = ht(),
      a = n(t);
    return ke({ reserve: a, obligation: e, getReserveApys: o });
  },
  Xa = ({ tokenMint: e }) => {
    const { getToken: t } = de();
    return { tokenInfo: t(e) };
  },
  Za = '_metalGreyGradient_1d33x_9',
  ei = '_goldGradient_1d33x_15',
  ti = '_silverGradient_1d33x_21',
  si = '_bronzeGradient_1d33x_27',
  ni = '_pointsSilverTextGradient_1d33x_33',
  oi = '_root_1d33x_39',
  ai = '_statsPanel_1d33x_40',
  ii = '_statsItem_1d33x_45',
  ri = '_statsWrapper_1d33x_50',
  He = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1d33x_1',
    metalGreyGradient: Za,
    goldGradient: ei,
    silverGradient: ti,
    bronzeGradient: si,
    pointsSilverTextGradient: ni,
    root: oi,
    statsPanel: ai,
    statsItem: ii,
    statsWrapper: ri,
  },
  { formatPercent: hs, formatPrice: li } = ae,
  ci = ({
    currentLTV: e,
    currentMaxLTV: t,
    currentLiquidationLTV: n,
    currentLiquidationPrice: o,
    currentPrice: a,
    simulatedLTV: i,
    simulatedLiquidationLTV: l,
    simulatedLiquidationPrice: r,
    simulatedMaxLTV: u,
  }) =>
    s.jsx(s.Fragment, {
      children: s.jsx(Ps, {
        panel: s.jsxs('div', {
          className: He.statsPanel,
          children: [
            s.jsxs('div', {
              className: He.statsItem,
              children: [
                s.jsx(P, { color: 'grey', children: 'Liquidation LTV' }),
                s.jsx(P, { color: 'yellow', children: hs(l * 100) }),
              ],
            }),
            s.jsxs('div', {
              className: He.statsItem,
              children: [
                s.jsx(P, { color: 'grey', children: 'Liquidation Price' }),
                s.jsxs('div', {
                  className: He.statsWrapper,
                  children: [
                    s.jsx(P, { color: Lt(e, t, n), children: o.toFixed(4) }),
                    '→',
                    s.jsx(P, { color: Lt(i, u, n), children: r.toFixed(4) }),
                  ],
                }),
              ],
            }),
            s.jsxs('div', {
              className: He.statsItem,
              children: [
                s.jsx(P, { color: 'grey', children: 'Current Price' }),
                s.jsx(P, { color: 'white', children: li(a) }),
              ],
            }),
          ],
        }),
        'data-sentry-element': 'CollapsiblePanel',
        'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
        children: s.jsxs('div', {
          className: He.statsItem,
          children: [
            s.jsx(P, {
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
              children: 'Loan-to-Value Ratio',
            }),
            s.jsxs('div', {
              className: He.statsWrapper,
              children: [
                s.jsx(P, {
                  color: Lt(e, t, n),
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
                  children: hs(e * 100),
                }),
                '→',
                s.jsx(P, {
                  color: Lt(i, u, n),
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'LoanToValueCollapsiblePanel.tsx',
                  children: hs(i * 100),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  di = '_metalGreyGradient_d2z55_9',
  ui = '_goldGradient_d2z55_15',
  mi = '_silverGradient_d2z55_21',
  pi = '_bronzeGradient_d2z55_27',
  gi = '_pointsSilverTextGradient_d2z55_33',
  fi = '_root_d2z55_39',
  hi = '_statsPanel_d2z55_40',
  xi = '_statsItem_d2z55_45',
  yi = '_statsWrapper_d2z55_51',
  ct = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_d2z55_1',
    metalGreyGradient: di,
    goldGradient: ui,
    silverGradient: mi,
    bronzeGradient: pi,
    pointsSilverTextGradient: gi,
    root: fi,
    statsPanel: hi,
    statsItem: xi,
    statsWrapper: yi,
  },
  { formatTokenAllDecimals: an, formatPercent: bi } = ae,
  wi = ({
    stats: e,
    tokenSymbol: t,
    obligationType: n,
    getCurrentTotalAmount: o,
    getSimulatedTotalAmount: a,
    isLong: i,
    pairPrice: l,
  }) => {
    const { current: r, simulated: u } = e,
      { liquidationPrice: p, priceCollToDebt: m } = e.simulated,
      d = En({ liquidationPrice: p, priceCollToDebt: m, isLong: i }),
      g = S.useMemo(
        () =>
          l ||
          (i
            ? r.collateralTokenPrice / r.borrowTokenPrice
            : r.borrowTokenPrice / r.collateralTokenPrice),
        [l, r.borrowTokenPrice, i, r.collateralTokenPrice]
      );
    return s.jsxs('div', {
      className: ct.root,
      'data-sentry-component': 'Stats',
      'data-sentry-source-file': 'Stats.tsx',
      children: [
        s.jsx(ts, {
          'data-sentry-element': 'TransactionSettingButton',
          'data-sentry-source-file': 'Stats.tsx',
        }),
        s.jsx(ci, {
          currentLTV: r.ltv,
          currentMaxLTV: r.maxLtv,
          currentLiquidationLTV: r.liquidationLtv,
          currentLiquidationPrice: r.liquidationPrice,
          currentPrice: g,
          simulatedLTV: u.ltv,
          simulatedLiquidationLTV: u.liquidationLtv,
          simulatedLiquidationPrice: u.liquidationPrice,
          simulatedMaxLTV: u.maxLtv,
          'data-sentry-element': 'LoanToValueCollapsiblePanel',
          'data-sentry-source-file': 'Stats.tsx',
        }),
        s.jsxs('div', {
          className: ct.statsItem,
          children: [
            s.jsxs(P, {
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Stats.tsx',
              children: [n, ' '],
            }),
            s.jsxs(P, {
              color: 'white',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Stats.tsx',
              children: [an(o(r), 6), ' → ', an(a(u), 6), ' ', t],
            }),
          ],
        }),
        s.jsxs('div', {
          className: ct.statsItem,
          children: [
            s.jsx(P, {
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Stats.tsx',
              children: 'Liquidation Price',
            }),
            s.jsx(P, {
              color: 'white',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Stats.tsx',
              children: d,
            }),
          ],
        }),
        s.jsxs('div', {
          className: ct.statsItem,
          children: [
            s.jsx(P, {
              color: 'grey',
              'data-sentry-element': 'Text',
              'data-sentry-source-file': 'Stats.tsx',
              children: 'Leverage Change',
            }),
            s.jsxs('div', {
              className: ct.statsWrapper,
              children: [
                s.jsxs(P, {
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'Stats.tsx',
                  children: [e.current.leverage.toFixed(1), 'x'],
                }),
                '→',
                s.jsxs(P, {
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'Stats.tsx',
                  children: [e.simulated.leverage.toFixed(1), 'x'],
                }),
              ],
            }),
          ],
        }),
        !!e.simulated.borrowFee &&
          s.jsxs('div', {
            className: ct.statsItem,
            children: [
              s.jsx(P, { color: 'grey', children: 'Borrow fee' }),
              s.jsx(P, { color: 'white', children: bi(e.simulated.borrowFee * 100, 1, !0) }),
            ],
          }),
      ],
    });
  },
  vi = '_metalGreyGradient_nfj4s_9',
  Li = '_goldGradient_nfj4s_15',
  Si = '_silverGradient_nfj4s_21',
  Ti = '_bronzeGradient_nfj4s_27',
  _i = '_pointsSilverTextGradient_nfj4s_33',
  Mi = '_input_nfj4s_39',
  Ai = '_slider_nfj4s_42',
  Ci = '_title_nfj4s_45',
  Ii = '_notifications_nfj4s_48',
  ji = '_stats_nfj4s_58',
  Pi = '_statsItem_nfj4s_64',
  $i = '_statsSimupationWrapper_nfj4s_68',
  Di = '_notificationMb_nfj4s_73',
  ki = '_notificationMt_nfj4s_76',
  Bi = '_epochResetText_nfj4s_79',
  Fi = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_nfj4s_1',
    metalGreyGradient: vi,
    goldGradient: Li,
    silverGradient: Si,
    bronzeGradient: Ti,
    pointsSilverTextGradient: _i,
    input: Mi,
    slider: Ai,
    title: Ci,
    notifications: Ii,
    stats: ji,
    statsItem: Pi,
    statsSimupationWrapper: $i,
    notificationMb: Di,
    notificationMt: ki,
    epochResetText: Bi,
  },
  qn = (e) => {
    var b;
    const {
        formProps: t,
        tabs: n,
        tabContentComponents: o,
        initialSelectedTab: a,
        tokenMint: i,
        reserveAddress: l,
        obligationType: r,
        getCurrentTotalAmount: u,
        getSimulatedTotalAmount: p,
        formStats: m,
      } = e,
      d = Et(),
      { marketAddress: g, vault: c, obligation: y, state: M, onStateUpdate: _, onSuccess: L } = t;
    if ((Object.values(pt), !y))
      throw Error('Missing obligation. Please refresh the page and try again.');
    const h = ((b = t.state) == null ? void 0 : b.currentSubtab) || a,
      I = (j) => {
        _({ amount: 0, currentSubtab: j });
      },
      { onInvalidate: A } = Ut(),
      T = async () => {
        await d.invalidateQueries({ queryKey: _t.metrics }),
          _({ amount: 0 }),
          L == null || L(),
          A({
            marketAddress: g,
            obligationAddress: y == null ? void 0 : y.obligationAddress,
            depositReserveAddress: c.depositReserveAddress,
            borrowReserveAddress: c.borrowReserveAddress,
          });
      },
      { tokenInfo: C } = Xa({ tokenMint: i }),
      G = Ja({ obligation: y, reserveAddress: l }),
      D = m,
      x = h === n[0] ? o[0] : o[1],
      f = { onSuccess: T, reserveStats: G, tokenInfo: C, formStats: m };
    return s.jsxs('div', {
      'data-sentry-component': 'ManageLoanLayoutTemplate',
      'data-sentry-source-file': 'ManageLoanLayoutTemplate.tsx',
      children: [
        s.jsx(ws, {
          isFullWidth: !0,
          onChange: I,
          tabs: n.map((j) => ({ key: j, label: j })),
          activeKey: h,
          'data-sentry-element': 'Tabs',
          'data-sentry-source-file': 'ManageLoanLayoutTemplate.tsx',
        }),
        s.jsx(
          x,
          Ce(he(he({}, e.formProps), f), {
            'data-sentry-element': 'TabContentComponent',
            'data-sentry-source-file': 'ManageLoanLayoutTemplate.tsx',
          })
        ),
        !!M.amount &&
          s.jsx('div', {
            className: Fi.stats,
            children: s.jsx(wi, {
              stats: D,
              tokenSymbol: C.symbol,
              obligationType: r,
              getCurrentTotalAmount: u,
              getSimulatedTotalAmount: p,
              isLong: !!M.isLong,
            }),
          }),
      ],
    });
  },
  Ri = '_metalGreyGradient_pe2t2_9',
  Ni = '_goldGradient_pe2t2_15',
  Gi = '_silverGradient_pe2t2_21',
  Ei = '_bronzeGradient_pe2t2_27',
  Wi = '_pointsSilverTextGradient_pe2t2_33',
  qi = '_input_pe2t2_39',
  Vi = '_warnings_pe2t2_43',
  zi = '_stats_pe2t2_55',
  Oi = '_statsItem_pe2t2_61',
  Ki = '_statsSimupationWrapper_pe2t2_65',
  rn = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_pe2t2_1',
    metalGreyGradient: Ri,
    goldGradient: Ni,
    silverGradient: Gi,
    bronzeGradient: Ei,
    pointsSilverTextGradient: Wi,
    input: qi,
    warnings: Vi,
    stats: zi,
    statsItem: Oi,
    statsSimupationWrapper: Ki,
  },
  cs = ({
    amount: e,
    bottomLeftStat: t,
    errorMessages: n,
    handleAmountChange: o,
    handleHalf: a,
    handleMax: i,
    handleSubmit: l,
    isSubmitting: r,
    isSubmitDisabled: u,
    label: p,
    submitButtonText: m,
    tokenInfo: d,
    value: g,
    warnings: c = [],
  }) =>
    s.jsxs('div', {
      'data-sentry-component': 'ManageLoanFormTemplate',
      'data-sentry-source-file': 'ManageLoanFormTemplate.tsx',
      children: [
        s.jsx('div', {
          className: rn.input,
          children: s.jsx(Ct, {
            value: e,
            label: p,
            topStat: new $(g),
            variant: 'secondary',
            tokensInfos: [d],
            bottomLeftStat: t,
            defaultSelectedTokenMint: d.address,
            onInputChange: o,
            onHalf: a,
            onMax: i,
            'data-sentry-element': 'LargeInput',
            'data-sentry-source-file': 'ManageLoanFormTemplate.tsx',
          }),
        }),
        s.jsx('div', {
          className: rn.warnings,
          children: c.map((y, M) =>
            S.createElement(
              Ee,
              Ce(he({}, y), { key: ''.concat(y.text.toString() || '', '-').concat(M) })
            )
          ),
        }),
        s.jsx(yt, {
          size: 'large',
          disabled: u,
          isFullWidth: !0,
          isLoading: r,
          onClick: l,
          tooltipMessages: n,
          'data-sentry-element': 'FormButton',
          'data-sentry-source-file': 'ManageLoanFormTemplate.tsx',
          children: m,
        }),
      ],
    }),
  { formatTokenAllDecimals: ln } = ae,
  ds = ({
    buildTxns: e,
    onSuccess: t = Te,
    marketAddress: n,
    notificationKey: o,
    notificationLoadingMessage: a,
    getNotificationLoadingDescription: i,
    notificationSuccessMessage: l,
    notificationSuccessDescriptionPrefix: r,
    notificationErrorMessage: u,
    notificationErrorDescription: p,
    getStatusMsg: m,
  }) => {
    const { walletPublicKey: d, wallet: g, signTransaction: c } = me(),
      y = Be(),
      { getToken: M } = de(),
      { setPositionHasUpdated: _ } = Zt(),
      { web3client: L } = Wt(),
      { createVersionedTxWithBudgetIxns: h } = es(),
      { getSignatureIxns: I } = ss(),
      { updateProviderParams: A } = Vt,
      T = Kt({ marketAddress: n }),
      { data: C } = At({}),
      D = Gt(
        async ({ tokenMint: x, amount: f, obligation: b }) => {
          if (!f) return;
          if (!b) throw new Error('Obligation is not found');
          if (!L) throw new Error('Web3client is not loaded');
          if (!d || !g) throw new Error('Wallet is not connected');
          if (!C) throw new Error('Slot is not loaded, please try again');
          const { symbol: j, decimals: w } = M(x);
          y.track(''.concat(o, ':click'), { amount: f, symbol: j });
          const v = await I(),
            F = Rt(new $(f).toFixed(w), w).floor().toString(),
            k = await e({
              walletPublicKey: d,
              tokenMint: x,
              amountFormat: F,
              obligation: b,
              symbol: j,
              amount: f,
            }),
            B = [...k.setupIxs, ...k.lendingIxs, ...k.cleanupIxs, ...v],
            N = await h({
              ixns: B,
              connection: L.connection,
              defaultCu: 15e5,
              lookupTablesAddresses: T,
            });
          return {
            txid: await Tt({
              signTransaction: c,
              tx: N,
              mainConnection: L.sendConnection,
              extraConnections: L.sendConnectionsExtra,
              mixpanel: y,
            }),
            amount: f,
            decimals: w,
            symbol: j,
            obligation: b,
          };
        },
        {
          onMutate: ({ tokenMint: x, amount: f }) => {
            const { symbol: b, decimals: j } = M(x);
            A({ isTransactionInProgress: !0 });
            const { message: w, description: v } = m({
              action: 'onMutate',
              amount: ln(new $(f).toNumber(), j),
              defaults: { message: a, description: i({ amount: f, symbol: b }) },
            });
            we({ message: w, description: v, type: 'loading', key: o });
          },
          onSuccess: (x) => {
            if (!x) return;
            const { txid: f, amount: b, symbol: j, decimals: w } = x,
              v = ln(new $(b).toNumber(), w),
              { message: F, description: k } = m({
                action: 'onSuccess',
                amount: v,
                defaults: { message: l, description: ''.concat(r, ' ').concat(v, ' ').concat(j) },
              });
            we({ type: 'success', key: o, message: F, description: k, txids: [f] }),
              t(x.obligation),
              _();
          },
          onError: (x, { amount: f }) => {
            Ye(x), qt(o);
            const { message: b, description: j } = m({
              action: 'onError',
              amount: f,
              defaults: { message: u, description: ns(x, p) },
            });
            we({
              message: b,
              description: j,
              type: 'error',
              errorTxId: x.txId,
              walletPublicKey: d,
            });
          },
          onSettled: () => {
            A({ isTransactionInProgress: !1 });
          },
        }
      );
    return { mutate: D.mutate, isLoading: D.isLoading };
  },
  Ui = ''.concat(pe.LENDING.MULTIPLY.BASE, ':borrow'),
  Qi = ({ onSuccess: e = Te, marketAddress: t, getStatusMsg: n }) => {
    const { wallet: o } = me(),
      { getMarketByAddress: a } = Se(),
      { data: i } = At({}),
      { referrerWallet: l } = Ve(),
      r = _n(),
      u = async ({ walletPublicKey: d, tokenMint: g, amountFormat: c, obligation: y }) => {
        const M = a(t);
        if (!r) throw new Error('Scope is not loaded');
        return ue.KaminoAction.buildBorrowTxns(
          M,
          c,
          new z(g),
          new z(d),
          y,
          !0,
          In(o == null ? void 0 : o.adapter.name) ? void 0 : { scope: r, scopeFeed: 'hubble' },
          0,
          !0,
          !1,
          {
            skipInitialization: !1,
            skipLutCreation: (o == null ? void 0 : o.adapter.name) === 'SquadsX',
          },
          l,
          i
        );
      },
      { mutate: p, isLoading: m } = ds({
        buildTxns: u,
        notificationKey: Ui,
        onSuccess: e,
        marketAddress: t,
        notificationLoadingMessage: 'Borrowing',
        getNotificationLoadingDescription: ({ amount: d, symbol: g }) =>
          'Borrowing '.concat(String(d), ' ').concat(g, ' from the pool'),
        notificationSuccessMessage: 'Borrow succeeded!',
        notificationSuccessDescriptionPrefix: 'Received',
        notificationErrorMessage: 'Failed to borrow from lending pool',
        notificationErrorDescription: 'Borrow failed',
        getStatusMsg: n,
      });
    return { borrow: p, isLoading: m };
  },
  { formatTokenAllDecimals: Hi } = ae,
  cn = pe.LENDING.MULTIPLY.BASE,
  dn = [],
  Yi = ({
    amount: e,
    marketAddress: t,
    onAmountChange: n,
    onSuccess: o = Te,
    obligation: a,
    reserveStats: i,
    tokenInfo: l,
    tokenMint: r,
    depositReserveAddress: u,
    borrowReserveAddress: p,
    formStats: m,
    getStatusMsg: d,
  }) => {
    if (!a) throw Error('Missing obligation. Please refresh the page and try again.');
    const { walletPublicKey: g } = me(),
      c = Be(),
      { getMarketByAddress: y } = Se(),
      { getReserveByAddress: M } = je(),
      { borrow: _, isLoading: L } = Qi({ marketAddress: t, onSuccess: o, getStatusMsg: d }),
      { maxBorrowableAmountDecimal: h } = jo({ obligation: a, marketAddress: t, tokenMint: r }),
      { isWalletConnect: I } = Je(),
      { checkIsLiquidityAvailable: A } = Po({ reserve: i }),
      T = S.useCallback(() => m.simulated.ltv > m.current.maxLtv, [m]),
      C = S.useMemo(() => $.max($.min(h.mul(0.999)), 0), [h]),
      { data: G, isFetched: D } = st([ve]),
      x = G[ve].toNumber(),
      f = S.useCallback(() => {
        _({ tokenMint: r, amount: e, obligation: a });
      }, [e, _, a, r]),
      b = () => {
        const k = i.borrowCap.minus(i.totalBorrowAmount).toNumber(),
          B = k > 0 ? $.min(C, k) : new $(0);
        n(B.toNumber()), c.track(''.concat(cn, ':click-borrow-max'));
      },
      j = () => {
        const k = i.borrowCap.minus(i.totalBorrowAmount).toNumber(),
          B = k > 0 ? $.min(h.div(2), k) : new $(0);
        n(B.toNumber()), c.track(''.concat(cn, ':click-borrow-half'));
      },
      w = S.useMemo(() => {
        const F = [];
        I && F.push({ tooltip: et, text: 'Wallet Connect', variant: 'primary', isCritical: !0 });
        const k = !T();
        if (
          e > 0 &&
          !A({
            market: y(t),
            reserve: i,
            obligation: a,
            amount: e,
            mode: a.state.elevationGroup === 0 ? Nt.cross : Nt.isolated,
          })
        ) {
          const E = M(p).getLiquidityAvailableForDebtReserveGivenCaps(
            y(t),
            [a.state.elevationGroup],
            [new z(u)]
          );
          F.push({
            text: 'Insufficient Liquidity',
            tooltip: s.jsx(Fs, {
              borrowTokenMint: r,
              liquidityAvailable: ft(E[0].toNumber(), i.decimals).toNumber(),
              liquidityRequired: e,
            }),
            variant: 'warning',
            isCritical: !0,
            hasIcon: !1,
            isFluid: !0,
          });
        }
        k ||
          F.push({
            tooltip: s.jsx($o, { maxLtv: m.current.maxLtv, currentLtv: m.simulated.ltv }),
            text: 'Insufficient Borrow Power',
            variant: 'warning',
            hasIcon: !1,
            isCritical: !0,
          });
        const B = tt(e, x, Ge.lending.repay, !!g, D);
        return B && F.push(B), F;
      }, [e, D, p, A, u, m, y, M, T, I, t, a, i, x, r, g]),
      v = S.useMemo(() => {
        const { debtEpochReset: F, dailyDebtCapLimit: k, dailyDebtCapFilled: B } = i,
          E = (F.lte(new $(0)) ? k : k.minus(B)).lt(e);
        return !e || !i || E || !!dn.length || w.some((O) => O.isCritical);
      }, [e, i, w]);
    return {
      bottomLeftStat: 'Available: '.concat(Hi(h, l.decimals)),
      errorMessages: dn,
      isSubmitDisabled: v,
      isSubmitting: L,
      submitButtonText: e ? 'Borrow '.concat(l.symbol) : 'Enter Borrow Amount',
      value: new $(e).mul(i.price),
      handleSubmit: f,
      handleMax: b,
      handleHalf: j,
      warnings: w,
    };
  },
  Ji = ({
    marketAddress: e,
    obligation: t,
    onSuccess: n,
    onStateUpdate: o,
    reserveStats: a,
    state: i,
    tokenInfo: l,
    vault: r,
    formStats: u,
    leverageType: p,
  }) => {
    const { amount: m } = i,
      { collTokenMint: d, debtTokenMint: g } = r,
      { getToken: c } = de(),
      y = c(d),
      M = c(g),
      _ = S.useMemo(
        () =>
          ze({
            leverageVaultType: p,
            formAction: i.currentFormAction,
            isLong: !!i.isLong,
            collSymbol: y.symbol,
            debtSymbol: M.symbol,
            selectedSymbol: M.symbol,
          }),
        [p, i.isLong, y.symbol, M.symbol, i.currentFormAction]
      ),
      L = S.useCallback((j) => o({ amount: j }), [o]),
      {
        bottomLeftStat: h,
        errorMessages: I,
        isSubmitDisabled: A,
        isSubmitting: T,
        handleSubmit: C,
        handleMax: G,
        handleHalf: D,
        submitButtonText: x,
        value: f,
        warnings: b,
      } = Yi({
        amount: m,
        marketAddress: e,
        obligation: t,
        borrowReserveAddress: r.borrowReserveAddress,
        depositReserveAddress: r.depositReserveAddress,
        reserveStats: a,
        tokenInfo: l,
        tokenMint: r.debtTokenMint,
        onAmountChange: L,
        onSuccess: n,
        formStats: u,
        getStatusMsg: _,
      });
    return s.jsx(cs, {
      amount: m,
      bottomLeftStat: h,
      errorMessages: I,
      handleAmountChange: L,
      handleHalf: D,
      handleMax: G,
      handleSubmit: C,
      isSubmitting: T,
      isSubmitDisabled: A,
      label: 'You Borrow',
      submitButtonText: x,
      tokenInfo: l,
      value: f,
      warnings: b,
      'data-sentry-element': 'ManageLoanFormTemplate',
      'data-sentry-component': 'BorrowMoreForm',
      'data-sentry-source-file': 'BorrowMoreForm.tsx',
    });
  },
  Xi = ({ onSuccess: e = Te, marketAddress: t, isClosingPosition: n, getStatusMsg: o }) => {
    const { wallet: a } = me(),
      { getMarketByAddress: i } = Se(),
      { referrerWallet: l } = Ve(),
      { data: r } = At({}),
      u = ''.concat(pe.LENDING.MULTIPLY.BASE, ':repay'),
      p = async ({ amountFormat: g, walletPublicKey: c, tokenMint: y, obligation: M }) => {
        if (!r) throw new Error('Slot is not loaded, please try again');
        return ue.KaminoAction.buildRepayTxns(
          i(t),
          n ? ue.U64_MAX : g,
          new z(y),
          new z(c),
          M,
          !0,
          void 0,
          r,
          void 0,
          0,
          !0,
          void 0,
          {
            skipInitialization: !1,
            skipLutCreation: (a == null ? void 0 : a.adapter.name) === 'SquadsX',
          },
          l
        );
      },
      { mutate: m, isLoading: d } = ds({
        buildTxns: p,
        notificationKey: u,
        onSuccess: e,
        marketAddress: t,
        notificationLoadingMessage: 'Repaying',
        getNotificationLoadingDescription: () => 'Repaying borrowed funds',
        notificationSuccessMessage: 'Repay succeeded!',
        notificationSuccessDescriptionPrefix: 'Repaid',
        notificationErrorMessage: 'Failed to repay borrowed amount',
        notificationErrorDescription: 'Repay failed',
        getStatusMsg: o,
      });
    return { repay: m, isLoading: d };
  },
  { formatTokenAllDecimals: un } = ae,
  Zi = ({ tokenMint: e, amount: t, maxAmount: n }) => {
    const { getToken: o } = de(),
      { symbol: a, decimals: i } = o(e);
    return s.jsx('div', {
      className: te.root,
      'data-sentry-component': 'RepayTooBigTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: s.jsxs('div', {
        className: te.item,
        children: [
          s.jsxs('div', {
            className: te.title,
            children: [
              s.jsx($s, {
                'data-sentry-element': 'CapacityLimitIcon',
                'data-sentry-source-file': 'index.tsx',
              }),
              s.jsx(P, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Repay Exceeds Debt Amount',
              }),
            ],
          }),
          s.jsxs('div', {
            className: te.row,
            children: [
              s.jsx(P, {
                fs: 14,
                lh: 18,
                color: 'grey',
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Debt',
              }),
              s.jsxs(P, {
                fs: 14,
                lh: 18,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [un(n, i), ' ', a],
              }),
            ],
          }),
          s.jsxs('div', {
            className: te.row,
            children: [
              s.jsx(P, {
                fs: 14,
                lh: 18,
                color: 'grey',
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Repay Attempt',
              }),
              s.jsxs(P, {
                fs: 14,
                lh: 18,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [un(t, i), ' ', a],
              }),
            ],
          }),
        ],
      }),
    });
  },
  { formatTokenAllDecimals: er } = ae,
  mn = pe.LENDING.MULTIPLY.BASE,
  tr = [],
  sr = ({
    amount: e,
    marketAddress: t,
    onSuccess: n = Te,
    obligation: o,
    reserveStats: a,
    tokenInfo: i,
    tokenMint: l,
    onAmountChange: r,
    getStatusMsg: u,
  }) => {
    if (!o) throw Error('Missing obligation. Please refresh the page and try again.');
    const p = Be(),
      { walletPublicKey: m } = me(),
      { isWalletConnect: d } = Je(),
      { data: g, isFetched: c } = st([a.mintAddress, ve]),
      y = g[ve].toNumber(),
      M = S.useMemo(() => g[a.mintAddress.toString()] || 0, [g, a.mintAddress]),
      [_, L] = S.useMemo(() => {
        const x = new $(a.userAmount.borrows),
          f = $.min(x, M);
        return [x, f];
      }, [M, a.userAmount.borrows]),
      { repay: h, isLoading: I } = Xi({
        marketAddress: t,
        onSuccess: n,
        isClosingPosition: new $(e).gte(_),
        getStatusMsg: u,
      }),
      A = S.useCallback(() => {
        h({ tokenMint: l, amount: e, obligation: o });
      }, [e, o, h, l]),
      T = () => {
        r(L.toNumber()), p.track(''.concat(mn, ':click-repay-max'));
      },
      C = () => {
        r(L.div(2).toNumber()), p.track(''.concat(mn, ':click-repay-half'));
      },
      G = S.useMemo(() => {
        const x = [];
        d && x.push({ tooltip: et, text: 'Wallet Connect', variant: 'primary', isCritical: !0 });
        const f = tt(e, y, Ge.leverage.deposit, !!m, c);
        return (
          f && x.push(f),
          e > L.toNumber() &&
            x.push({
              text: 'Reduce Repay',
              variant: 'warning',
              tooltip: s.jsx(Zi, { amount: e, maxAmount: L.toNumber(), tokenMint: a.mintAddress }),
              hasIcon: !1,
              isCritical: !0,
            }),
          x
        );
      }, [e, c, d, L, a.mintAddress, y, m]),
      D = !e || !a || G.some((x) => x.isCritical);
    return {
      bottomLeftStat: 'Wallet: '.concat(er(M, i.decimals)),
      errorMessages: tr,
      warnings: G,
      isSubmitDisabled: D,
      isSubmitting: I,
      submitButtonText: e ? 'Repay '.concat(i.symbol) : 'Enter Repay Amount',
      tokenInfo: i,
      value: new $(e).mul(a.price),
      handleSubmit: A,
      handleMax: T,
      handleHalf: C,
      maxAmount: L,
    };
  },
  nr = ({
    marketAddress: e,
    obligation: t,
    onSuccess: n,
    onStateUpdate: o,
    reserveStats: a,
    state: i,
    tokenInfo: l,
    vault: r,
    leverageType: u,
  }) => {
    const { amount: p } = i,
      { collTokenMint: m, debtTokenMint: d } = r,
      { getToken: g } = de(),
      c = g(m),
      y = g(d),
      M = S.useMemo(
        () =>
          ze({
            leverageVaultType: u,
            formAction: i.currentFormAction,
            isLong: !!i.isLong,
            collSymbol: c.symbol,
            debtSymbol: y.symbol,
            selectedSymbol: y.symbol,
          }),
        [u, i.isLong, c.symbol, y.symbol, i.currentFormAction]
      ),
      _ = S.useCallback((b) => o({ amount: b }), [o]),
      {
        bottomLeftStat: L,
        errorMessages: h,
        isSubmitDisabled: I,
        isSubmitting: A,
        handleSubmit: T,
        handleMax: C,
        handleHalf: G,
        submitButtonText: D,
        value: x,
        warnings: f,
      } = sr({
        amount: p,
        marketAddress: e,
        obligation: t,
        borrowReserveAddress: r.borrowReserveAddress,
        depositReserveAddress: r.depositReserveAddress,
        reserveStats: a,
        tokenInfo: l,
        tokenMint: r.debtTokenMint,
        onAmountChange: _,
        onSuccess: n,
        getStatusMsg: M,
      });
    return s.jsx(cs, {
      amount: p,
      bottomLeftStat: L,
      errorMessages: h,
      handleAmountChange: _,
      handleHalf: G,
      handleMax: C,
      handleSubmit: T,
      isSubmitting: A,
      isSubmitDisabled: I,
      label: 'You Repay',
      submitButtonText: D,
      tokenInfo: l,
      value: x,
      warnings: f,
      'data-sentry-element': 'ManageLoanFormTemplate',
      'data-sentry-component': 'RepayDebtForm',
      'data-sentry-source-file': 'RepayDebtForm.tsx',
    });
  },
  pn = (e) =>
    s.jsx(qn, {
      getCurrentTotalAmount: (t) => t.totalBorrowAmount,
      getSimulatedTotalAmount: (t) => t.totalBorrowAmount,
      tokenMint: e.vault.debtTokenMint,
      reserveAddress: e.vault.borrowReserveAddress,
      formProps: e,
      tabs: [pt.borrowMore, pt.repayDebt],
      tabContentComponents: [Ji, nr],
      initialSelectedTab: pt.borrowMore,
      obligationType: 'Debt',
      formStats: e.formStats,
      'data-sentry-element': 'ManageLoanLayoutTemplate',
      'data-sentry-component': 'ManageDebtForm',
      'data-sentry-source-file': 'ManageDebtForm.tsx',
    }),
  or = '_metalGreyGradient_52aeg_9',
  ar = '_goldGradient_52aeg_15',
  ir = '_silverGradient_52aeg_21',
  rr = '_bronzeGradient_52aeg_27',
  lr = '_pointsSilverTextGradient_52aeg_33',
  cr = '_slider_52aeg_39',
  dr = '_title_52aeg_42',
  ur = '_warning_52aeg_45',
  mr = '_warnings_52aeg_51',
  pr = '_stats_52aeg_63',
  gr = '_epochResetText_52aeg_66',
  dt = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_52aeg_1',
    metalGreyGradient: or,
    goldGradient: ar,
    silverGradient: ir,
    bronzeGradient: rr,
    pointsSilverTextGradient: lr,
    slider: cr,
    title: dr,
    warning: ur,
    warnings: mr,
    stats: pr,
    epochResetText: gr,
  },
  fr = ({ onSuccess: e = Te, marketAddress: t, mixpanelPrefix: n, getStatusMsg: o }) => {
    const { walletPublicKey: a, wallet: i, signTransaction: l } = me(),
      r = Be(),
      { getMarketByAddress: u } = Se(),
      { setPositionHasUpdated: p } = Zt(),
      { createVersionedTxWithBudgetIxns: m, getIxns: d } = es(),
      { kswapSdk: g } = _s(),
      { web3client: c } = Wt(),
      y = ''.concat(pe.LENDING.MULTIPLY.BASE, ':adjust'),
      { getSignatureIxns: M } = ss(),
      { kaminoSdk: _ } = ys(),
      L = Kt({ marketAddress: t }),
      { getSlippage: h } = xt(),
      { updateProviderParams: I } = Vt,
      { referrerWallet: A } = Ve(),
      T = S.useCallback(
        async ({
          quote: D,
          collTokenMint: x,
          debtTokenMint: f,
          totalDeposited: b,
          totalBorrowed: j,
          targetLeverage: w,
          obligation: v,
          priceCollToDebt: F,
          priceDebtToColl: k,
          getPriceAinB: B,
          currentSlot: N,
        }) => {
          ie(a, 'Wallet is not connected'),
            ie(i, 'Wallet is not connected'),
            ie(_, 'Kamino SDK is not loaded'),
            ie(D, 'Quote is not loaded');
          const E = u(t),
            O = E.getReserveByMint(new z(x)),
            K = E.getReserveByMint(new z(f));
          ie(O, 'Collateral Reserve is not found'), ie(K, 'Debt Reserve is not found');
          const V = await d({ units: 14e5, ixns: [] }),
            R = h(),
            U = R.mul(100),
            Q = new z(a);
          return await ue.getAdjustLeverageIxs({
            budgetAndPriorityFeeIxs: V,
            owner: Q,
            kaminoMarket: E,
            priceDebtToColl: new $(k),
            priceCollToDebt: new $(F),
            targetLeverage: new $(w),
            slippagePct: Ts(R, !0),
            depositedLamports: Rt(b, O.stats.decimals),
            borrowedLamports: Rt(j, K.stats.decimals),
            collTokenMint: O.getLiquidityMint(),
            debtTokenMint: K.getLiquidityMint(),
            swapper: Cs(g, Q, U.toNumber()),
            quoter: Is(g, Q, U.toNumber()),
            referrer: A,
            isKtoken: Ds(_),
            priceAinB: B,
            kamino: _,
            obligation: v,
            currentSlot: N,
            quoteBufferBps: new $(0),
            useV2Ixs: !0,
          });
        },
        [d, u, h, _, t, A, i, a, g]
      ),
      G = Gt(
        async ({
          quote: D,
          collTokenMint: x,
          debtTokenMint: f,
          totalDeposited: b,
          totalBorrowed: j,
          targetLeverage: w,
          vaultType: v,
          lookupTablesAddresses: F,
          obligation: k,
          priceCollToDebt: B,
          priceDebtToColl: N,
          getPriceAinB: E,
          currentSlot: O,
        }) => {
          ie(a, 'Wallet is not connected'),
            ie(i, 'Wallet is not connected'),
            ie(_, 'Kamino SDK is not loaded'),
            r.track(''.concat(n, ':vault:adjust'), {
              collTokenMint: x.toString(),
              debtTokenMint: f.toString(),
              leverage: w,
            });
          const K = await T({
              quote: D,
              collTokenMint: x,
              debtTokenMint: f,
              totalDeposited: b,
              totalBorrowed: j,
              targetLeverage: w,
              vaultType: v,
              lookupTablesAddresses: F,
              obligation: k,
              priceCollToDebt: B,
              priceDebtToColl: N,
              getPriceAinB: E,
              currentSlot: O,
            }),
            V = [...L, ...F.map((W) => (W && !W.equals(z.default) ? W : void 0))].filter(zt),
            R = await ue.getLookupTableAccountsFromAddresses(c.connection, V),
            U = await M(),
            Q = await Ms(K, R, c.connection, new z(a), U);
          if (Q.length === 0) throw new Error('No valid routes found');
          const q = As(Q),
            H = [...q.ixs, ...U],
            ee = [...R, ...q.lookupTables],
            oe = await m({ ixns: H, lookupTablesAccounts: ee, defaultCu: 14e5 });
          return {
            txid: await Tt({
              signTransaction: l,
              tx: oe,
              mainConnection: c.sendConnection,
              extraConnections: c.sendConnectionsExtra,
              mixpanel: r,
            }),
            collTokenMint: x,
            debtTokenMint: f,
          };
        },
        {
          onMutate: ({ vaultType: D }) => {
            I({ isTransactionInProgress: !0 });
            const { message: x, description: f } = o({
              action: 'onMutate',
              amount: 0,
              defaults: {
                message: 'Adjusting leverage',
                description: 'Adjusting the leverage of '.concat(ks[D]),
              },
            });
            we({ message: x, description: f, type: 'loading', key: y });
          },
          onSuccess: (D) => {
            const x = D == null ? void 0 : D.txid,
              { message: f, description: b } = o({
                action: 'onSuccess',
                amount: 0,
                defaults: { message: 'Leverage successfully adjusted!', description: '' },
              });
            we({ type: 'success', key: y, message: f, description: b, txids: x ? [x] : [] }),
              e(),
              p();
          },
          onError: (D) => {
            Ye(D), qt(y);
            const { message: x, description: f } = o({
              action: 'onError',
              amount: 0,
              defaults: {
                message: 'Failed to adjust the leverage of the vault',
                description: ns(D, 'Leverage adjust failed'),
              },
            });
            we({
              message: x,
              description: f,
              type: 'error',
              errorTxId: D.txId,
              walletPublicKey: a,
            });
          },
          onSettled: () => {
            I({ isTransactionInProgress: !1 });
          },
        }
      );
    return { onAdjust: G.mutate, isLoading: G.isLoading };
  },
  { formatTokenAllDecimals: Ft, formatPercent: hr } = ae,
  gn = new $(0);
function xr({ leverage: e, debtTokenInfo: t, debtReserveStats: n, amount: o }) {
  const {
      totalBorrowAmount: a,
      borrowCap: i,
      dailyDebtCapFilled: l,
      dailyDebtCapLimit: r,
      debtEpochReset: u,
    } = n,
    p = Math.max(i.minus(a).toNumber(), 0),
    m = a.plus(o).gt(i),
    g = (u.lte(new $(0)) ? r : r.minus(l)).lt(o),
    c = [],
    y = So.includes(t.symbol),
    M = y ? Ft(o, 2) : Ft(o, 6);
  if (m) {
    const _ = y ? Ft(p, 2) : Ft(p, 6);
    c.push(
      'Borrow attempt is '
        .concat(M, ' ')
        .concat(t.symbol, ' but there is only ')
        .concat(_, ' ')
        .concat(t.symbol, ' capacity available')
    );
  }
  return (
    g && c.push('Daily debt cap was reached.'),
    e === Ie && c.push('Leverage should be higher than 1'),
    c
  );
}
const yr = ({
  leverageType: e,
  vault: t,
  obligation: n,
  marketAddress: o,
  formStats: a,
  setupIxns: i,
  leverage: l,
  initialLeverage: r,
}) => {
  const { walletPublicKey: u } = me(),
    { getToken: p } = de(),
    { getReserveByTokenMint: m } = je(),
    { getReserveApys: d } = ht(),
    { collTokenMint: g, debtTokenMint: c, depositReserveAddress: y, borrowReserveAddress: M } = t,
    { isWalletConnect: _ } = Je(),
    { data: L, isFetched: h } = st([ve]),
    { getSlippage: I, isSlippageTooHigh: A, optimalSlippage: T } = xt(),
    C = L[ve].toNumber(),
    G = p(c),
    D = g === Ot,
    x = I(),
    f = e === 'leverage' && a.isLong && l > r,
    { isDisabled: b, messages: j } = An({
      obligation: f ? n : void 0,
      borrowReserveAddress: t.borrowReserveAddress,
      collateralReservesAddresses: f ? [t.depositReserveAddress] : [],
      page: 'leverage',
      mode: Nt.isolated,
    }),
    w = !!i.length,
    { maxBorrowableAmountDecimal: v } = Fn({
      marketAddress: o,
      collReserveAddress: y,
      debtReserveAddress: M,
    }),
    { maxBorrowableAmountDecimal: F } = Rn({
      marketAddress: o,
      collReserveAddress: t.depositReserveAddress,
      debtReserveAddress: t.borrowReserveAddress,
    }),
    k = e === 'multiply' ? F : v,
    B = m(o, c);
  if (!B) throw new Error('Reserve is not found');
  const N = a.simulated.totalBorrowAmount - a.current.totalBorrowAmount,
    E = ke({ reserve: B, obligation: n || void 0, getReserveApys: d }),
    O = S.useMemo(() => {
      const q = mt(e);
      return w ? 'Setup Account' : 'Adjust '.concat(e === 'leverage' ? q : '');
    }, [w, e]),
    K = D && l > gt[1] ? 'extreme' : D && l > gt[0] ? 'high' : 'default',
    V = S.useMemo(() => {
      const q = [];
      _ && q.push({ tooltip: et, text: 'Wallet Connect', variant: 'primary', isCritical: !0 }),
        N > 0 &&
          k.lt(N) &&
          q.push({
            text: 'Insufficient Liquidity',
            tooltip: s.jsx(Fs, {
              borrowTokenMint: c,
              liquidityAvailable: k.toNumber(),
              liquidityRequired: N,
            }),
            variant: 'warning',
            isCritical: !0,
            hasIcon: !1,
            isFluid: !0,
          }),
        K !== 'default' &&
          N > 0 &&
          q.push({
            tooltip: s.jsx(Nn, { variant: K }),
            text: K === 'high' ? 'High Leverage' : 'Extreme Leverage',
            variant: K === 'high' ? 'warning' : 'danger',
            hasIcon: !1,
          }),
        A() &&
          q.push({
            text: 'Slippage Setting >'.concat(hr(T)),
            tooltip: s.jsx(Rs, { currentSlippage: x.toNumber(), optimalSlippagePct: T }),
            variant: 'warning',
            hasIcon: !1,
          });
      const H = tt(N, C, Ge.leverage.adjust, !!u, h);
      return H && q.push(H), j && q.push(...j), q;
    }, [_, N, k, K, A, C, u, h, j, c, T, x]),
    R = S.useMemo(
      () => (w ? [] : xr({ leverage: l, debtTokenInfo: G, debtReserveStats: E, amount: N })),
      [N, E, G, w, l]
    );
  return {
    isDisabled: (r === l || R.length || b || V.some((q) => q.isCritical)) && !w,
    errorMessages: R,
    warnings: V,
    buttonText: O,
    isSetupAccountsRequired: w,
    slippage: x,
    sliderBreakpoints: D ? gt : [],
    sliderVariant: K,
  };
};
function br({
  leverageType: e,
  vault: t,
  obligation: n,
  state: o,
  marketAddress: a,
  onSuccess: i,
  collTokenMint: l,
  debtTokenMint: r,
  leverage: u,
  priceImpactType: p,
  pythHermesPrices: m,
  stakeRates: d,
  onPriceImpactModalVisibleChange: g,
  refetchPriceImpactAll: c,
}) {
  const y = Et(),
    { getPriceByTokenMintDecimal: M } = Fe(),
    { onInvalidate: _ } = Ut(),
    { onInvalidate: L } = Ls(),
    { getToken: h } = de(),
    { data: I } = Bs({ leverageType: e, collTokenMint: l, debtTokenMint: r, marketAddress: a }),
    A = h(l),
    T = h(r),
    C = S.useMemo(
      () =>
        ze({
          leverageVaultType: e,
          formAction: o.currentFormAction,
          isLong: !!o.isLong,
          collSymbol: A.symbol,
          debtSymbol: T.symbol,
          selectedSymbol: A.symbol,
        }),
      [e, o.currentFormAction, o.isLong, A.symbol, T.symbol]
    ),
    { onAdjust: G, isLoading: D } = fr({
      getStatusMsg: C,
      marketAddress: a,
      mixpanelPrefix: e === 'multiply' ? pe.LENDING.MULTIPLY.BASE : pe.LENDING.LEVERAGE.BASE,
      onSuccess: async () => {
        await y.invalidateQueries({ queryKey: _t.metrics }),
          i && i(),
          e === 'multiply'
            ? _({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: t.depositReserveAddress,
                borrowReserveAddress: t.borrowReserveAddress,
              })
            : L({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: t.depositReserveAddress,
                borrowReserveAddress: t.borrowReserveAddress,
              });
      },
    });
  return {
    handleAdjustTransaction: async ({ ingorePriceImpactWarning: f = !1 }) => {
      var U, Q, q, H;
      const b = await c();
      if (!b || !b.quote) return;
      const {
          priceCollToDebt: j,
          priceDebtToColl: w,
          collToDebtPriceFromQuote: v,
          debtToCollPriceFromQuote: F,
          quote: k,
          currentSlot: B,
          inputMint: N,
          outputMint: E,
        } = b,
        O = Xe({
          collToDebtPriceFromQuote: v,
          debtToCollPriceFromQuote: F,
          quote: k,
          collTokenMint: l,
          pythHermesPrices: m,
          getPriceByTokenMintDecimal: M,
          stakeRates: d,
          inputMint: N,
          outputMint: E,
          leverage: u,
        }),
        K = Ze(p, O.priceImpactBps);
      if (!f && (K > Ss.safe || js(p, O.theoreticalPriceDivergenceBps))) {
        g(!0);
        return;
      }
      const V = ft(
          (Q =
            (U = n == null ? void 0 : n.borrows.values().next().value) == null
              ? void 0
              : U.amount) != null
            ? Q
            : gn,
          T.decimals
        ),
        R = ft(
          (H =
            (q = n == null ? void 0 : n.deposits.values().next().value) == null
              ? void 0
              : q.amount) != null
            ? H
            : gn,
          A.decimals
        );
      G({
        quote: k,
        collTokenMint: l,
        debtTokenMint: r,
        totalBorrowed: V,
        totalDeposited: R,
        targetLeverage: u,
        vaultType: e,
        lookupTablesAddresses: I,
        priceCollToDebt: j,
        priceDebtToColl: w,
        getPriceAinB: async (ee) => Promise.resolve(ee.toString() === l ? j : w),
        currentSlot: B,
        obligation: n,
      });
    },
    isLoadingAdjustMutation: D,
  };
}
const { formatLeverageSliderV2: wr } = ae,
  fn = ({
    leverageType: e,
    vault: t,
    state: n,
    onStateUpdate: o,
    formStats: a,
    obligation: i,
    marketAddress: l,
    onSuccess: r,
    pythHermesPrices: u,
  }) => {
    var W;
    if (!i) throw new Error('AdjustForm requires an existing obligation');
    const { walletPublicKey: p } = me(),
      { debtTokenMint: m, collTokenMint: d } = t,
      g = mt(e),
      { getPriceByTokenMintDecimal: c } = Fe(),
      {
        data: { setupIxns: y },
      } = ls({ vaultType: e, collTokenMint: d, debtTokenMint: m, marketAddress: l }),
      M = i.refreshedStats.leverage.toNumber(),
      _ = (W = n.leverage) != null ? W : M,
      L = S.useCallback(
        (Y) => {
          o({ leverage: Y });
        },
        [o]
      ),
      h = Math.abs(1 - _ / M) < 0.005,
      {
        isDisabled: I,
        errorMessages: A,
        warnings: T,
        buttonText: C,
        slippage: G,
        sliderBreakpoints: D,
        sliderVariant: x,
      } = yr({
        leverageType: e,
        vault: t,
        obligation: i,
        leverage: _,
        initialLeverage: M,
        marketAddress: l,
        formStats: a,
        setupIxns: y,
      }),
      { data: f, isLoading: b } = as({ refetchIntervalSeconds: 600 });
    S.useEffect(() => {
      o({ currentFormAction: Me.manageLeverage });
    }, [o]);
    const { isModalVisible: j, onModalVisibleChange: w } = os(),
      {
        data: v,
        isFetching: F,
        refetch: k,
        dataUpdatedAt: B,
      } = Qt({
        marketAddress: l,
        obligation: i,
        slippage: G,
        debtTokenMint: m,
        collTokenMint: d,
        leverage: _,
        leverageType: e,
        enabled: !h,
        specificProps: { formType: 'adjustLeverage' },
      }),
      E = b || (v === void 0 && F),
      {
        priceImpactBps: O,
        theoreticalPrice: K,
        marketPrice: V,
        theoreticalPriceDivergenceBps: R,
      } = S.useMemo(
        () =>
          v
            ? Xe({
                debtToCollPriceFromQuote: v.debtToCollPriceFromQuote,
                collToDebtPriceFromQuote: v.collToDebtPriceFromQuote,
                quote: v.quote,
                collTokenMint: d,
                pythHermesPrices: u,
                getPriceByTokenMintDecimal: c,
                stakeRates: f,
                inputMint: v.inputMint,
                outputMint: v.outputMint,
                leverage: _,
              })
            : Ht,
        [d, c, u, v, f, _]
      ),
      U = d.toString() === Ot && e === 'multiply' ? 'jlpMultiply' : e,
      { handleAdjustTransaction: Q, isLoadingAdjustMutation: q } = br({
        leverageType: e,
        vault: t,
        obligation: i,
        state: n,
        marketAddress: l,
        onSuccess: r,
        collTokenMint: d,
        debtTokenMint: m,
        leverage: _,
        walletPublicKey: p,
        priceImpactType: U,
        pythHermesPrices: u,
        stakeRates: f,
        onPriceImpactModalVisibleChange: w,
        refetchPriceImpactAll: async () => (await k()).data,
      }),
      {
        handleSetupAccount: H,
        onCloseSetupModal: ee,
        isSetupModalOpened: oe,
      } = Yt({
        leverageType: e,
        collTokenMint: d,
        debtTokenMint: m,
        setupIxns: y,
        walletPublicKey: p,
      }),
      J = async () => {
        if (y.length > 0) {
          H();
          return;
        }
        await Q({ ingorePriceImpactWarning: !1 });
      };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs('div', {
          className: dt.root,
          children: [
            s.jsxs('div', {
              className: dt.slider,
              children: [
                s.jsx(P, {
                  className: dt.title,
                  'data-sentry-element': 'Text',
                  'data-sentry-source-file': 'AdjustForm.tsx',
                  children: g,
                }),
                s.jsx(Dn, {
                  min: Ie,
                  value: _,
                  step: 0.1,
                  max: Wn(t.maxLeverage),
                  onValueChange: L,
                  formatter: wr,
                  breakpoints: D,
                  variant: x,
                  'data-sentry-element': 'Slider',
                  'data-sentry-source-file': 'AdjustForm.tsx',
                }),
              ],
            }),
            s.jsx('div', {
              className: dt.button,
              children: s.jsx(yt, {
                isFullWidth: !0,
                size: 'large',
                disabled: !!(I || E || q || h),
                isLoading: E,
                tooltipMessages: A,
                onClick: J,
                hideWarnings: !0,
                'data-sentry-element': 'FormButton',
                'data-sentry-source-file': 'AdjustForm.tsx',
                children: C,
              }),
            }),
            s.jsxs('div', {
              className: dt.warnings,
              children: [
                U === 'jlpMultiply' &&
                  _ !== M &&
                  s.jsx(Ee, {
                    variant: 'info',
                    hasIcon: !1,
                    tooltip: s.jsx(Es, {}),
                    text: 'Jupiter Routing',
                  }),
                T.map((Y, Z) =>
                  S.createElement(
                    Ee,
                    Ce(he({}, Y), { key: ''.concat(Y.text.toString() || '', '-').concat(Z) })
                  )
                ),
                s.jsx(is, {
                  type: U,
                  priceImpactBps: O,
                  collTokenMint: d,
                  theoreticalPriceDivergenceBps: R,
                  marketPrice: V,
                  theoreticalPrice: K,
                  variant: 'tag',
                  isLong: !!n.isLong,
                  'data-sentry-element': 'PriceImpactNotifications',
                  'data-sentry-source-file': 'AdjustForm.tsx',
                }),
              ],
            }),
            s.jsx('div', {
              className: dt.stats,
              children: s.jsx(Gs, {
                isLoading: E,
                isHidden: h || !p,
                stats: a,
                priceImpactBps: O,
                leverageType: e,
                quote: v == null ? void 0 : v.quote,
                onRefetchData: k,
                dataUpdatedAt: B,
                isLong: !!n.isLong,
                durationSeconds: Jt,
                collateralTokenMint: d,
                debtTokenMint: m,
                flashLoanInfo: v == null ? void 0 : v.flashLoanInfo,
                inputMint: v == null ? void 0 : v.inputMint,
                outputMint: v == null ? void 0 : v.outputMint,
                'data-sentry-element': 'StatsDefault',
                'data-sentry-source-file': 'AdjustForm.tsx',
              }),
            }),
          ],
        }),
        s.jsx(rs, {
          type: Ze(U, O),
          priceImpactType: U,
          priceImpactBps: O,
          theoreticalPriceDivergenceBps: R,
          marketPrice: V,
          theoreticalPrice: K,
          onOk: () => {
            w(!1), Q({ ingorePriceImpactWarning: !0 });
          },
          onCancel: () => {
            w(!1);
          },
          isVisible: j,
          isLoading: E,
          'data-sentry-element': 'PriceImpactWarningModal',
          'data-sentry-source-file': 'AdjustForm.tsx',
        }),
        s.jsx(Xt, {
          isOpen: oe,
          contentType: e,
          onClose: ee,
          'data-sentry-element': 'AccountSetupModal',
          'data-sentry-source-file': 'AdjustForm.tsx',
        }),
      ],
    });
  },
  vr = '_metalGreyGradient_129wd_9',
  Lr = '_goldGradient_129wd_15',
  Sr = '_silverGradient_129wd_21',
  Tr = '_bronzeGradient_129wd_27',
  _r = '_pointsSilverTextGradient_129wd_33',
  Mr = '_input_129wd_39',
  Ar = '_slider_129wd_42',
  Cr = '_title_129wd_45',
  Ir = '_warning_129wd_48',
  jr = '_warnings_129wd_54',
  Pr = '_stats_129wd_66',
  $r = '_epochResetText_129wd_69',
  ut = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_129wd_1',
    metalGreyGradient: vr,
    goldGradient: Lr,
    silverGradient: Sr,
    bronzeGradient: Tr,
    pointsSilverTextGradient: _r,
    input: Mr,
    slider: Ar,
    title: Cr,
    warning: Ir,
    warnings: jr,
    stats: Pr,
    epochResetText: $r,
  },
  Dr = (e) => {
    const { obligation: t, isLoading: n, isFetched: o, obligationPda: a } = Go(e);
    return { obligation: t, isLoading: n, isFetched: o, obligationPda: a };
  },
  { formatTokenAllDecimals: hn } = ae,
  kr = ({ onSuccess: e = Te, mixpanelPrefix: t, marketAddress: n, getStatusMsg: o }) => {
    const { walletPublicKey: a, wallet: i, signTransaction: l } = me(),
      r = Be(),
      { getToken: u } = de(),
      { getMarketByAddress: p } = Se(),
      { web3client: m } = Wt(),
      d = ''.concat(pe.LENDING.MULTIPLY.BASE, ':withdraw'),
      { kaminoSdk: g } = ys(),
      c = Kt({ marketAddress: n }),
      { setPositionHasUpdated: y } = Zt(),
      { createVersionedTxWithBudgetIxns: M, getIxns: _ } = es(),
      { getSlippage: L } = xt(),
      { kswapSdk: h } = _s(),
      { updateProviderParams: I } = Vt,
      { getSignatureIxns: A } = ss(),
      { referrerWallet: T } = Ve(),
      C = S.useCallback(
        async ({
          selectedTokenMint: x,
          collTokenMint: f,
          debtTokenMint: b,
          amount: j,
          deposited: w,
          borrowed: v,
          isClosingPosition: F,
          obligation: k,
          quote: B,
          priceCollToDebt: N,
          currentSlot: E,
        }) => {
          if (!j) throw new Error('Amount should be > 0');
          ie(a, 'Wallet public key is not loaded'),
            ie(i, 'Wallet is not connected'),
            ie(g, 'Kamino SDK is not loaded'),
            ie(k, 'Missing obligation. Please refresh the page and try again.');
          const O = p(n);
          if (!(k != null && k.borrows.size)) {
            const { decimals: H } = u(f),
              ee = F ? ue.U64_MAX : Rt(new $(j).toFixed(H), H).floor().toString();
            return {
              ixns: await ue.KaminoAction.buildWithdrawTxns(
                O,
                ee,
                new z(f),
                new z(a),
                k,
                !0,
                void 0,
                0,
                !0,
                void 0,
                {
                  skipInitialization: !1,
                  skipLutCreation: (i == null ? void 0 : i.adapter.name) === 'SquadsX',
                },
                T,
                void 0
              ).then((J) => [...J.setupIxs, ...J.lendingIxs, ...J.cleanupIxs]),
              operationLUTs: [],
            };
          }
          ie(B, 'Quote is not loaded. Please, reload the page and try again');
          const V = await _({ units: 14e5, ixns: [] }),
            R = L(),
            U = R.mul(100),
            Q = new z(a);
          return await ue.getWithdrawWithLeverageIxs({
            budgetAndPriorityFeeIxs: V,
            owner: new z(a),
            deposited: w,
            borrowed: v,
            withdrawAmount: new $(j),
            debtTokenMint: new z(b),
            collTokenMint: new z(f),
            selectedTokenMint: new z(x),
            priceCollToDebt: new $(N),
            isClosingPosition: !!F,
            kaminoMarket: O,
            slippagePct: Ts(R, !0),
            swapper: Cs(h, Q, U.toNumber()),
            quoter: Is(h, Q, U.toNumber()),
            referrer: T,
            isKtoken: Ds(g),
            kamino: g,
            obligation: k || null,
            currentSlot: E,
            quoteBufferBps: new $(0),
            useV2Ixs: !0,
          });
        },
        [_, p, L, u, g, n, T, i, a, h]
      ),
      D = Gt(
        async ({
          selectedTokenMint: x,
          collTokenMint: f,
          debtTokenMint: b,
          amount: j,
          deposited: w,
          borrowed: v,
          vaultType: F,
          isClosingPosition: k,
          lookupTablesAddresses: B,
          obligation: N,
          quote: E,
          priceCollToDebt: O,
          currentSlot: K,
        }) => {
          if (!j) return;
          ie(a, 'Wallet public key is not loaded'),
            ie(i, 'Wallet is not connected'),
            ie(g, 'Kamino SDK is not loaded'),
            r.track(''.concat(t, ':vault:withdraw'), {
              selectedTokenMint: x.toString(),
              collTokenMint: f.toString(),
              debtTokenMint: b.toString(),
              amount: j,
            });
          const V = await C({
              selectedTokenMint: x,
              collTokenMint: f,
              debtTokenMint: b,
              amount: j,
              deposited: w,
              borrowed: v,
              vaultType: F,
              isClosingPosition: k,
              lookupTablesAddresses: B,
              obligation: N,
              quote: E,
              priceCollToDebt: O,
              currentSlot: K,
            }),
            R = [...c, ...B.map((Y) => (Y && !Y.equals(z.default) ? Y : void 0))].filter(zt),
            U = await ue.getLookupTableAccountsFromAddresses(m.connection, R),
            Q = await A();
          if (!vn.isArray(V)) {
            const Y = await M({
              ixns: [...V.ixns, ...Q],
              lookupTablesAccounts: U,
              defaultCu: 14e5,
            });
            return {
              txid: await Tt({
                signTransaction: l,
                tx: Y,
                mainConnection: m.sendConnection,
                extraConnections: m.sendConnectionsExtra,
                mixpanel: r,
              }),
              collTokenMint: f,
              debtTokenMint: b,
              amount: j,
              selectedTokenMint: x,
            };
          }
          const q = await Ms(V, U, m.connection, new z(a), Q);
          if (q.length === 0) throw new Error('No valid routes found');
          const H = As(q),
            ee = [...H.ixs, ...Q],
            oe = [...U, ...H.lookupTables],
            J = await M({ ixns: ee, lookupTablesAccounts: oe, defaultCu: 14e5 });
          return {
            txid: await Tt({
              signTransaction: l,
              tx: J,
              mainConnection: m.sendConnection,
              extraConnections: m.sendConnectionsExtra,
              mixpanel: r,
            }),
            collTokenMint: f,
            debtTokenMint: b,
            amount: j,
            selectedTokenMint: x,
          };
        },
        {
          onMutate: ({ selectedTokenMint: x, vaultType: f, amount: b }) => {
            const { symbol: j, decimals: w } = u(x);
            I({ isTransactionInProgress: !0 });
            const { message: v, description: F } = o({
              action: 'onMutate',
              amount: hn(new $(b).toNumber(), w),
              defaults: {
                message: 'Withdrawing',
                description: 'Withdrawing '.concat(j, ' from ').concat(ks[f]),
              },
            });
            we({ message: v, description: F, type: 'loading', key: d });
          },
          onSuccess: (x) => {
            const { txid: f, amount: b = 0, selectedTokenMint: j = '' } = x || {},
              { decimals: w } = u(j),
              { message: v, description: F } = o({
                action: 'onSuccess',
                amount: hn(new $(b).toNumber(), w),
                defaults: { message: 'Withdraw succeeded!', description: '' },
              });
            we({ type: 'success', key: d, message: v, description: F, txids: f ? [f] : [] }),
              e(),
              y();
          },
          onError: (x, { amount: f }) => {
            Ye(x), qt(d);
            const { message: b, description: j } = o({
              action: 'onError',
              amount: f,
              defaults: {
                message: 'Failed to withdraw from the Vault',
                description: ns(x, 'Withdraw failed'),
              },
            });
            we({
              message: b,
              description: j,
              type: 'error',
              errorTxId: x.txId,
              walletPublicKey: a,
            });
          },
          onSettled: () => {
            I({ isTransactionInProgress: !1 });
          },
        }
      );
    return { onWithdraw: D.mutate, isLoading: D.isLoading };
  },
  { formatPercent: Br } = ae,
  Vn = ({
    vault: e,
    leverageType: t,
    marketAddress: n,
    formStats: o,
    onStateUpdate: a,
    state: i,
  }) => {
    var wt, Ne;
    const { walletPublicKey: l } = me(),
      { getToken: r } = de(),
      { getReserveByTokenMint: u } = je(),
      p = Be(),
      { getPriceByTokenMintDecimal: m } = Fe(),
      { getReserveApys: d } = ht(),
      { isWalletConnect: g } = Je(),
      { getMarketByAddress: c } = Se(),
      y = c(n),
      { getSlippage: M, isSlippageTooHigh: _, optimalSlippage: L } = xt(),
      { collTokenMint: h, debtTokenMint: I } = e,
      A = r(h),
      T = r(I),
      C = S.useMemo(() => {
        var se;
        return t === 'multiply' && Js(I)
          ? h
          : ((se = i == null ? void 0 : i.selectedTokenInfo) == null ? void 0 : se.address) || I;
      }, [h, I, t, i]),
      G = r(C),
      { data: D, isFetched: x } = st([ve]),
      f = D[ve].toNumber(),
      b = M(),
      {
        data: { setupIxns: j },
      } = ls({ vaultType: t, collTokenMint: h, debtTokenMint: I, marketAddress: n }),
      { obligation: w, isLoading: v } = Dr({
        tag: t === 'multiply' ? Ys.Multiply : Ys.Leverage,
        tokenMint: h,
        debtToken: I,
        marketAddress: n,
      }),
      { leverage: F, setLeverage: k } = kn({
        obligation: w,
        onLeverageUpdate: a,
        leverage: i.leverage,
      }),
      B = S.useMemo(() => i.amount || 0, [i.amount]),
      N = (se) => {
        a({ amount: se });
      };
    S.useEffect(() => {
      (!i.selectedTokenInfo ||
        (i.selectedTokenInfo.address !== I && i.selectedTokenInfo.address !== h)) &&
        a({ selectedTokenInfo: r(h) });
    }, [i.selectedTokenInfo, I, a, r, h]);
    const E = u(n, C),
      O = y.getReserveByMint(new z(I)),
      K = y.getReserveByMint(new z(h));
    if (!E || !O || !K) throw new Error('Reserve is not found');
    const V = ke({ reserve: K, obligation: w || void 0, getReserveApys: d }),
      { price: R, dailyWithdrawCapFilled: U, dailyWithdrawCapLimit: Q, withdrawEpochReset: q } = V,
      H = ke({ reserve: O, obligation: w || void 0, getReserveApys: d }),
      { price: ee, mintAddress: oe } = H,
      J = ke({ reserve: E, obligation: w || void 0, getReserveApys: d }),
      { price: W } = J,
      Y = C === oe ? U.mul(R).div(ee) : U,
      Z = C === oe ? Q.mul(R).div(ee) : Q,
      Le = (q.lte(new $(0)) ? Z : Z.minus(Y)).lt(B),
      Ae = S.useMemo(() => new $(B).mul(W), [B, W]),
      Pe = o,
      ge = m(h),
      fe = w
        ? ft(
            ((wt = Array.from(w.deposits.values())[0]) == null ? void 0 : wt.amount.toString()) ||
              '0',
            A.decimals
          )
        : new $(0),
      ye = w
        ? ft(
            ((Ne = Array.from(w.borrows.values())[0]) == null ? void 0 : Ne.amount.toString()) ||
              '0',
            T.decimals
          )
        : new $(0),
      ce = Vo({
        depositAmount: 0,
        withdrawAmount: 0,
        deposited: fe.toNumber(),
        borrowed: ye.toNumber(),
        depositReserveAddress: K.address,
        borrowReserveAddress: O.address,
        selectedTokenMint: C,
        debtTokenMint: I,
        collTokenMint: h,
        targetLeverage: (w == null ? void 0 : w.refreshedStats.leverage.toNumber()) || 1,
        activeTab: ne.withdraw,
        borrowFactor: 0,
        marketAddress: n,
      }),
      xe = S.useMemo(() => {
        let se = new $(0);
        return (
          C === h && ce && (se = ce == null ? void 0 : ce.netValueUsd.div(ge)),
          C === I && ce && (se = ce == null ? void 0 : ce.netValue),
          $.max(0, se)
        );
      }, [C, h, ce, I, ge]),
      We = S.useMemo(() => {
        if (t !== 'multiply') return xe;
        const se = Ns[''.concat(h, ':').concat(I)] || 1 / 0;
        return $.min(se, xe);
      }, [xe, h, I, t]),
      $e = () => {
        N(We.toNumber()), p.track('lending:'.concat(t, ':click-deposit-max'));
      },
      nt = () => {
        N(We.div(2).toNumber()), p.track('lending:'.concat(t, ':click-deposit-half'));
      },
      bt = (se) => N(se),
      ot = (se) => k(se),
      Oe = (se) => {
        a({ selectedTokenInfo: r(se) });
      },
      Re = S.useMemo(() => (t === 'multiply' && Js(T.address) ? [A] : [A, T]), [A, T, t]),
      Ke = S.useMemo(() => {
        const se = [];
        g && se.push({ tooltip: et, text: 'Wallet Connect', variant: 'primary', isCritical: !0 }),
          _() &&
            se.push({
              text: 'Slippage Setting >'.concat(Br(L)),
              tooltip: s.jsx(Rs, { currentSlippage: b.toNumber(), optimalSlippagePct: L }),
              variant: 'warning',
              hasIcon: !1,
            });
        const It = tt(B, f, Ge.leverage.withdraw, !!l, x);
        It && se.push(It);
        const jt = Gn(B, h, I, !!l, t);
        return jt && se.push(jt), se;
      }, [B, x, _, g, L, b, f, l, t, h, I]),
      us = !B || B > xe.toNumber() || Le || Ke.some((se) => se.isCritical);
    return {
      amount: B,
      borrowed: ye,
      deposited: fe,
      hasActiveObligation: !v && !!w && !!(w != null && w.refreshedStats.netAccountValue),
      isDisabled: us,
      leverage: F,
      maxAmount: xe,
      onAmountChange: bt,
      onHalfDepositClick: nt,
      onLeverageChange: ot,
      onMaxDepositClick: $e,
      onSelectedTokenChange: Oe,
      selectedTokenInfo: G,
      selectedTokenMint: C,
      setupIxns: j,
      slippage: b,
      stats: Pe,
      tokensInfos: Re,
      value: Ae,
      warnings: Ke,
    };
  };
function zn({
  leverageType: e,
  vault: t,
  obligation: n,
  state: o,
  marketAddress: a,
  onSuccess: i,
  collTokenMint: l,
  debtTokenMint: r,
  priceImpactType: u,
  pythHermesPrices: p,
  stakeRates: m,
  onPriceImpactModalVisibleChange: d,
  refetchPriceImpactAll: g,
  selectedTokenMint: c,
  amount: y,
  deposited: M,
  borrowed: _,
  maxAmount: L,
}) {
  const { borrowReserveAddress: h, depositReserveAddress: I } = t,
    A = Et(),
    { getPriceByTokenMintDecimal: T } = Fe(),
    { onInvalidate: C } = Ut(),
    { onInvalidate: G } = Ls(),
    { getToken: D } = de(),
    { data: x } = Bs({ leverageType: e, collTokenMint: l, debtTokenMint: r, marketAddress: a }),
    f = D(l),
    b = D(r),
    j = D(c),
    w = S.useMemo(
      () =>
        ze({
          leverageVaultType: e,
          formAction: o.currentFormAction,
          isLong: !!o.isLong,
          collSymbol: f.symbol,
          debtSymbol: b.symbol,
          selectedSymbol: j.symbol,
        }),
      [e, o.isLong, f.symbol, b.symbol, j.symbol, o.currentFormAction]
    ),
    { onWithdraw: v, isLoading: F } = kr({
      getStatusMsg: w,
      marketAddress: a,
      mixpanelPrefix: e === 'multiply' ? pe.LENDING.MULTIPLY.BASE : pe.LENDING.LEVERAGE.BASE,
      onSuccess: async () => {
        await A.invalidateQueries({ queryKey: _t.metrics }),
          i(),
          e === 'multiply'
            ? C({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: I,
                borrowReserveAddress: h,
              })
            : G({
                marketAddress: a,
                obligationAddress: n == null ? void 0 : n.obligationAddress,
                depositReserveAddress: I,
                borrowReserveAddress: h,
              });
      },
    });
  return {
    handleWithdrawTransaction: async ({ ingorePriceImpactWarning: B = !1 }) => {
      var H;
      const N = await g();
      if (!N || !N.quote) return;
      const {
          priceCollToDebt: E,
          collToDebtPriceFromQuote: O,
          debtToCollPriceFromQuote: K,
          quote: V,
          inputMint: R,
          outputMint: U,
        } = N,
        Q = Xe({
          collToDebtPriceFromQuote: O,
          debtToCollPriceFromQuote: K,
          quote: V,
          collTokenMint: l,
          pythHermesPrices: p,
          getPriceByTokenMintDecimal: T,
          stakeRates: m,
          inputMint: R,
          outputMint: U,
          leverage: (H = n == null ? void 0 : n.refreshedStats.leverage.toNumber()) != null ? H : 1,
        }),
        q = Ze(u, Q.priceImpactBps);
      if (!B && (q > Ss.safe || js(u, Q.theoreticalPriceDivergenceBps))) {
        d(!0);
        return;
      }
      v({
        selectedTokenMint: c,
        collTokenMint: l,
        quote: V,
        priceCollToDebt: E,
        debtTokenMint: r,
        amount: y,
        deposited: M,
        borrowed: _,
        vaultType: e,
        isClosingPosition: Mn(L, new $(y)),
        lookupTablesAddresses: x,
        obligation: n,
        currentSlot: N.currentSlot,
      });
    },
    isLoadingMutation: F,
  };
}
const { formatTokenAllDecimals: Fr } = ae,
  Rr = ({
    leverageType: e,
    vault: t,
    onStateUpdate: n,
    marketAddress: o,
    obligation: a,
    pythHermesPrices: i,
    formStats: l,
    onSuccess: r,
    state: u,
  }) => {
    const { walletPublicKey: p } = me(),
      { debtTokenMint: m, collTokenMint: d } = t,
      { getPriceByTokenMintDecimal: g } = Fe(),
      {
        amount: c,
        borrowed: y,
        deposited: M,
        isDisabled: _,
        leverage: L,
        maxAmount: h,
        onAmountChange: I,
        onHalfDepositClick: A,
        onMaxDepositClick: T,
        onSelectedTokenChange: C,
        selectedTokenInfo: G,
        selectedTokenMint: D,
        setupIxns: x,
        slippage: f,
        stats: b,
        tokensInfos: j,
        value: w,
        warnings: v,
      } = Vn({
        vault: t,
        leverageType: e,
        marketAddress: o,
        onStateUpdate: n,
        state: u,
        formStats: l,
      }),
      F = d.toString() === Ot && e === 'multiply' ? 'jlpMultiply' : e,
      {
        isConfirm: k,
        isModalVisible: B,
        onModalVisibleChange: N,
        onConfirm: E,
        onConfirmChange: O,
      } = jn({ dontRemindAgainLocalStorageKey: 'multiply.dontShowFirstDepositInfoModal' }),
      { isModalVisible: K, onModalVisibleChange: V } = os(),
      {
        data: R,
        isFetching: U,
        refetch: Q,
        dataUpdatedAt: q,
      } = Qt({
        marketAddress: o,
        obligation: a,
        slippage: f,
        debtTokenMint: m,
        collTokenMint: d,
        leverage: L,
        leverageType: e,
        enabled: c > 0,
        specificProps: {
          formType: 'withdraw',
          amount: c,
          selectedTokenMint: D,
          deposited: M,
          borrowed: y,
          maxAmount: h,
        },
      }),
      { data: H, isLoading: ee } = as({ refetchIntervalSeconds: 600 }),
      J = ee || (R === void 0 && U),
      {
        priceImpactBps: W,
        theoreticalPrice: Y,
        marketPrice: Z,
        theoreticalPriceDivergenceBps: _e,
      } = S.useMemo(
        () =>
          R
            ? Xe({
                debtToCollPriceFromQuote: R.debtToCollPriceFromQuote,
                collToDebtPriceFromQuote: R.collToDebtPriceFromQuote,
                quote: R.quote,
                collTokenMint: d,
                pythHermesPrices: i,
                getPriceByTokenMintDecimal: g,
                stakeRates: H,
                inputMint: R.inputMint,
                outputMint: R.outputMint,
                leverage: L,
              })
            : Ht,
        [d, g, i, R, H, L]
      ),
      { handleWithdrawTransaction: Le, isLoadingMutation: Ae } = zn({
        leverageType: e,
        vault: t,
        obligation: a,
        state: u,
        marketAddress: o,
        onSuccess: () => {
          r == null || r(), n({ amount: 0, leverage: Ie });
        },
        collTokenMint: d,
        debtTokenMint: m,
        priceImpactType: e,
        pythHermesPrices: i,
        stakeRates: H,
        onPriceImpactModalVisibleChange: V,
        refetchPriceImpactAll: async () => (await Q()).data,
        selectedTokenMint: D,
        amount: c,
        deposited: M,
        borrowed: y,
        maxAmount: h,
        walletPublicKey: p,
      }),
      {
        handleSetupAccount: Pe,
        onCloseSetupModal: ge,
        isSetupModalOpened: fe,
      } = Yt({
        leverageType: e,
        collTokenMint: d,
        debtTokenMint: m,
        setupIxns: x,
        walletPublicKey: p,
      }),
      ye = async ({ ingorePriceImpactWarning: ce = !1 }) => {
        if (x.length) {
          Pe();
          return;
        }
        await Le({ ingorePriceImpactWarning: ce });
      };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs('div', {
          className: ut.root,
          children: [
            s.jsx('div', {
              className: ut.input,
              children: s.jsx(Ct, {
                value: c,
                label: 'You withdraw',
                topStat: new $(w),
                variant: 'secondary',
                tokensInfos: j,
                bottomLeftStat: 'Available: '.concat(Fr(h, G.decimals)),
                defaultSelectedTokenMint: G.address,
                onSelectedTokenChange: C,
                onInputChange: I,
                onMax: T,
                onHalf: A,
                'data-sentry-element': 'LargeInput',
                'data-sentry-source-file': 'WithdrawForm.tsx',
              }),
            }),
            s.jsx('div', { className: ut.warning }),
            s.jsx('div', {
              className: ut.button,
              children: s.jsx(yt, {
                isFullWidth: !0,
                size: 'large',
                disabled: _ || J || Ae,
                isLoading: J,
                onClick: () => ye({ ingorePriceImpactWarning: !1 }),
                isRestrictionsIgnored: vs,
                'data-sentry-element': 'FormButton',
                'data-sentry-source-file': 'WithdrawForm.tsx',
                children: x.length ? 'Setup Account' : 'Withdraw '.concat(G.symbol),
              }),
            }),
            s.jsxs('div', {
              className: ut.warnings,
              children: [
                F === 'jlpMultiply' &&
                  c > 0 &&
                  s.jsx(Ee, {
                    variant: 'info',
                    hasIcon: !1,
                    tooltip: s.jsx(Es, {}),
                    text: 'Jupiter Routing',
                  }),
                v.map((ce, xe) =>
                  S.createElement(
                    Ee,
                    Ce(he({}, ce), { key: ''.concat(ce.text.toString() || '', '-').concat(xe) })
                  )
                ),
                s.jsx(is, {
                  type: F,
                  priceImpactBps: W,
                  collTokenMint: d,
                  theoreticalPriceDivergenceBps: _e,
                  marketPrice: Z,
                  theoreticalPrice: Y,
                  variant: 'tag',
                  isLong: !u.isLong,
                  'data-sentry-element': 'PriceImpactNotifications',
                  'data-sentry-source-file': 'WithdrawForm.tsx',
                }),
              ],
            }),
            s.jsx('div', {
              className: ut.stats,
              children: s.jsx(Gs, {
                isLoading: J,
                isHidden: !c || !p,
                collateralTokenMint: d,
                debtTokenMint: m,
                stats: b,
                priceImpactBps: W,
                leverageType: e,
                quote: R == null ? void 0 : R.quote,
                onRefetchData: Q,
                dataUpdatedAt: q,
                isLong: !!u.isLong,
                durationSeconds: Jt,
                flashLoanInfo: R == null ? void 0 : R.flashLoanInfo,
                inputMint: R == null ? void 0 : R.inputMint,
                outputMint: R == null ? void 0 : R.outputMint,
                'data-sentry-element': 'StatsDefault',
                'data-sentry-source-file': 'WithdrawForm.tsx',
              }),
            }),
            s.jsx(Pn, {
              isConfirm: k,
              onConfirmChange: O,
              isVisible: B,
              onHide: () => N(!1),
              onConfirmDeposit: (ce) => {
                E(ce), Le({ ingorePriceImpactWarning: !1 });
              },
              'data-sentry-element': 'FirstDepositInfoModal',
              'data-sentry-source-file': 'WithdrawForm.tsx',
            }),
          ],
        }),
        s.jsx(rs, {
          type: Ze(F, W),
          priceImpactType: F,
          priceImpactBps: W,
          theoreticalPriceDivergenceBps: _e,
          marketPrice: Z,
          theoreticalPrice: Y,
          onOk: () => {
            V(!1), ye({ ingorePriceImpactWarning: !0 });
          },
          onCancel: () => {
            V(!1);
          },
          isVisible: K,
          isLoading: J,
          'data-sentry-element': 'PriceImpactWarningModal',
          'data-sentry-source-file': 'WithdrawForm.tsx',
        }),
        s.jsx(Xt, {
          isOpen: fe,
          contentType: e,
          onClose: ge,
          'data-sentry-element': 'AccountSetupModal',
          'data-sentry-source-file': 'WithdrawForm.tsx',
        }),
      ],
    });
  },
  Nr = '_metalGreyGradient_1i7vd_9',
  Gr = '_goldGradient_1i7vd_15',
  Er = '_silverGradient_1i7vd_21',
  Wr = '_bronzeGradient_1i7vd_27',
  qr = '_pointsSilverTextGradient_1i7vd_33',
  Vr = '_input_1i7vd_39',
  zr = '_warning_1i7vd_42',
  Or = '_notificationMb_1i7vd_48',
  Kr = '_notificationMt_1i7vd_51',
  Ur = '_slider_1i7vd_54',
  Qr = '_title_1i7vd_57',
  Hr = '_warnings_1i7vd_60',
  Yr = '_stats_1i7vd_72',
  Jr = '_statsItem_1i7vd_78',
  Xr = '_tabs_1i7vd_83',
  Zr = '_notificationsCloseNoBorrowPosition_1i7vd_86',
  be = {
    'header-stats-mobile-divider': '_header-stats-mobile-divider_1i7vd_1',
    metalGreyGradient: Nr,
    goldGradient: Gr,
    silverGradient: Er,
    bronzeGradient: Wr,
    pointsSilverTextGradient: qr,
    input: Vr,
    warning: zr,
    notificationMb: Or,
    notificationMt: Kr,
    slider: Ur,
    title: Qr,
    warnings: Hr,
    stats: Yr,
    statsItem: Jr,
    tabs: Xr,
    notificationsCloseNoBorrowPosition: Zr,
  },
  { formatTokenAllDecimals: el } = ae,
  tl = ({
    leverageType: e,
    vault: t,
    onStateUpdate: n,
    marketAddress: o,
    obligation: a,
    pythHermesPrices: i,
    formStats: l,
    onSuccess: r,
    state: u,
  }) => {
    const { walletPublicKey: p } = me(),
      { debtTokenMint: m, collTokenMint: d } = t,
      { getPriceByTokenMintDecimal: g } = Fe(),
      {
        amount: c,
        borrowed: y,
        deposited: M,
        isDisabled: _,
        leverage: L,
        maxAmount: h,
        onMaxDepositClick: I,
        onSelectedTokenChange: A,
        selectedTokenInfo: T,
        selectedTokenMint: C,
        setupIxns: G,
        slippage: D,
        tokensInfos: x,
        value: f,
        warnings: b,
      } = Vn({
        formStats: l,
        leverageType: e,
        marketAddress: o,
        onStateUpdate: n,
        state: u,
        vault: t,
      });
    S.useEffect(() => {
      n({ currentFormAction: Me.closePosition });
    }, [n]);
    const { isModalVisible: j, onModalVisibleChange: w } = os(),
      {
        data: v,
        isFetching: F,
        refetch: k,
        dataUpdatedAt: B,
      } = Qt({
        marketAddress: o,
        obligation: a,
        slippage: D,
        debtTokenMint: m,
        collTokenMint: d,
        leverage: L,
        leverageType: e,
        enabled: c > 0,
        specificProps: {
          formType: 'withdraw',
          amount: c,
          selectedTokenMint: C,
          deposited: M,
          borrowed: y,
          maxAmount: h,
        },
      }),
      { data: N, isLoading: E } = as({ refetchIntervalSeconds: 600 }),
      K = E || (v === void 0 && F),
      {
        priceImpactBps: V,
        theoreticalPrice: R,
        marketPrice: U,
        theoreticalPriceDivergenceBps: Q,
      } = S.useMemo(
        () =>
          v
            ? Xe({
                debtToCollPriceFromQuote: v.debtToCollPriceFromQuote,
                collToDebtPriceFromQuote: v.collToDebtPriceFromQuote,
                quote: v.quote,
                collTokenMint: d,
                pythHermesPrices: i,
                getPriceByTokenMintDecimal: g,
                stakeRates: N,
                inputMint: v.inputMint,
                outputMint: v.outputMint,
                leverage: L,
              })
            : Ht,
        [d, g, i, v, N, L]
      ),
      q = (v == null ? void 0 : v.flashLoanInfo.flashLoanFee.mul(100).toNumber()) || 0,
      { handleWithdrawTransaction: H, isLoadingMutation: ee } = zn({
        leverageType: e,
        vault: t,
        obligation: a,
        state: u,
        marketAddress: o,
        onSuccess: () => {
          r == null || r(), n({ amount: 0, leverage: Ie });
        },
        collTokenMint: d,
        debtTokenMint: m,
        priceImpactType: e,
        pythHermesPrices: i,
        stakeRates: N,
        onPriceImpactModalVisibleChange: w,
        refetchPriceImpactAll: async () => (await k()).data,
        selectedTokenMint: C,
        amount: c,
        deposited: M,
        borrowed: y,
        maxAmount: h,
        walletPublicKey: p,
      }),
      {
        handleSetupAccount: oe,
        onCloseSetupModal: J,
        isSetupModalOpened: W,
      } = Yt({
        leverageType: e,
        collTokenMint: d,
        debtTokenMint: m,
        setupIxns: G,
        walletPublicKey: p,
      }),
      Y = async ({ ingorePriceImpactWarning: Z = !1 }) => {
        if (G.length) {
          oe();
          return;
        }
        await H({ ingorePriceImpactWarning: Z });
      };
    return (
      S.useEffect(() => {
        I();
      }, [I, T.address]),
      s.jsxs(s.Fragment, {
        children: [
          s.jsxs('div', {
            className: be.root,
            children: [
              s.jsx('div', {
                className: be.tabs,
                children: s.jsx(ws, {
                  isFullWidth: !0,
                  onChange: A,
                  tabs: x.map((Z) => ({ key: Z.address, label: 'Close to '.concat(Z.symbol) })),
                  activeKey: T.address,
                  'data-sentry-element': 'Tabs',
                  'data-sentry-source-file': 'ClosePositionForm.tsx',
                }),
              }),
              s.jsx('div', {
                className: be.input,
                children: s.jsx(Ct, {
                  value: c,
                  label: 'You Receive',
                  topStat: new $(f),
                  variant: 'secondary',
                  tokensInfos: [T],
                  defaultSelectedTokenMint: T.address,
                  onInputChange: Te,
                  disabled: !0,
                  'data-sentry-element': 'LargeInput',
                  'data-sentry-source-file': 'ClosePositionForm.tsx',
                }),
              }),
              s.jsx('div', { className: be.warning }),
              s.jsx('div', {
                className: be.button,
                children: s.jsx(yt, {
                  isFullWidth: !0,
                  size: 'large',
                  disabled: _ || K || ee,
                  isLoading: K,
                  onClick: () => Y({ ingorePriceImpactWarning: !1 }),
                  isRestrictionsIgnored: vs,
                  'data-sentry-element': 'FormButton',
                  'data-sentry-source-file': 'ClosePositionForm.tsx',
                  children: G.length ? 'Setup Account' : 'Close Position',
                }),
              }),
              s.jsxs('div', {
                className: be.warnings,
                children: [
                  b.map((Z, _e) =>
                    S.createElement(
                      Ee,
                      Ce(he({}, Z), { key: ''.concat(Z.text.toString() || '', '-').concat(_e) })
                    )
                  ),
                  s.jsx(is, {
                    type: e,
                    priceImpactBps: V,
                    collTokenMint: d,
                    theoreticalPriceDivergenceBps: Q,
                    marketPrice: U,
                    theoreticalPrice: R,
                    variant: 'tag',
                    isLong: !u.isLong,
                    'data-sentry-element': 'PriceImpactNotifications',
                    'data-sentry-source-file': 'ClosePositionForm.tsx',
                  }),
                ],
              }),
              s.jsxs('div', {
                className: be.stats,
                children: [
                  s.jsx(ts, {
                    withSlippage: !0,
                    'data-sentry-element': 'TransactionSettingButton',
                    'data-sentry-source-file': 'ClosePositionForm.tsx',
                  }),
                  p &&
                    s.jsxs(s.Fragment, {
                      children: [
                        s.jsx($n, {
                          withFillPrice: !0,
                          priceImpactBps: V,
                          leverageType: e,
                          quote: v == null ? void 0 : v.quote,
                          isLoading: K,
                          onRefetchData: k,
                          dataUpdatedAt: B,
                          defaultIsCollapsed: !0,
                          durationSeconds: Jt,
                          inputMint: v == null ? void 0 : v.inputMint,
                          outputMint: v == null ? void 0 : v.outputMint,
                          collTokenMint: d,
                          debtTokenMint: m,
                        }),
                        q > 0 &&
                          s.jsxs('div', {
                            className: be.statsItem,
                            children: [
                              s.jsx(Tn, {
                                render: () =>
                                  s.jsx(P, {
                                    children:
                                      "Flash loan fee, added to the protocol to prevent spamming of Kamino's flash loan mechanism",
                                  }),
                                clickable: !0,
                                children: s.jsx(P, {
                                  color: 'grey',
                                  underline: !0,
                                  children: 'Flash borrow fee',
                                }),
                              }),
                              s.jsx(P, { color: 'white', children: el(q, 3) }),
                            ],
                          }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          s.jsx(rs, {
            type: Ze(e, V),
            priceImpactType: e,
            priceImpactBps: V,
            theoreticalPriceDivergenceBps: Q,
            marketPrice: U,
            theoreticalPrice: R,
            onOk: () => {
              w(!1), Y({ ingorePriceImpactWarning: !0 });
            },
            onCancel: () => {
              w(!1);
            },
            isVisible: j,
            isLoading: K,
            'data-sentry-element': 'PriceImpactWarningModal',
            'data-sentry-source-file': 'ClosePositionForm.tsx',
          }),
          s.jsx(Xt, {
            isOpen: W,
            contentType: e,
            onClose: J,
            'data-sentry-element': 'AccountSetupModal',
            'data-sentry-source-file': 'ClosePositionForm.tsx',
          }),
        ],
      })
    );
  },
  sl = ({ onSuccess: e = Te, marketAddress: t, getStatusMsg: n }) => {
    const o = ''.concat(pe.LENDING.MULTIPLY.BASE, ':deposit'),
      { wallet: a } = me(),
      { getMarketByAddress: i } = Se(),
      { referrerWallet: l } = Ve(),
      r = async ({ amountFormat: m, walletPublicKey: d, tokenMint: g, obligation: c }) =>
        ue.KaminoAction.buildDepositTxns(
          i(t),
          m,
          new z(g),
          new z(d),
          c,
          !0,
          void 0,
          0,
          void 0,
          void 0,
          {
            skipInitialization: !1,
            skipLutCreation: (a == null ? void 0 : a.adapter.name) === 'SquadsX',
          },
          l
        ),
      { mutate: u, isLoading: p } = ds({
        buildTxns: r,
        notificationKey: o,
        onSuccess: e,
        marketAddress: t,
        notificationLoadingMessage: 'Depositing',
        getNotificationLoadingDescription: ({ symbol: m }) =>
          'Depositing '.concat(m, ' into the market'),
        notificationSuccessMessage: 'Deposit succeeded!',
        notificationSuccessDescriptionPrefix: 'Deposited',
        notificationErrorMessage: 'Failed to deposit to lending',
        notificationErrorDescription: 'Deposit failed',
        getStatusMsg: n,
      });
    return { deposit: u, isLoading: p };
  },
  { formatTokenAllDecimals: xn } = ae,
  yn = pe.LENDING.MULTIPLY.BASE,
  nl = ({
    amount: e,
    marketAddress: t,
    onAmountChange: n,
    onSuccess: o = Te,
    obligation: a,
    reserveStats: i,
    tokenInfo: l,
    tokenMint: r,
    getStatusMsg: u,
  }) => {
    if (!a) throw Error('Missing obligation. Please refresh the page and try again.');
    const p = Be(),
      { deposit: m, isLoading: d } = sl({ marketAddress: t, onSuccess: o, getStatusMsg: u }),
      { walletPublicKey: g } = me(),
      { isWalletConnect: c } = Je(),
      { data: y, isFetched: M } = st([i.mintAddress, ve]),
      _ = Math.max(i.supplyCap.minus(i.totalSupplyAmount).toNumber(), 0),
      L = y[ve].toNumber(),
      h = S.useMemo(() => {
        const b = y[i.mintAddress.toString()] || 0;
        return $.min(_, Cn(i.mintAddress, b, Ge.leverage.deposit));
      }, [y, i.mintAddress, _]),
      { isIPAccessRestricted: I, hasWalletRestriction: A } = To(),
      T = S.useMemo(() => {
        const b = [];
        return A
          ? [Fo]
          : I
            ? [Ro]
            : (e > h.toNumber() && b.push('Insufficient funds'),
              i.totalSupplyAmount.plus(e).gt(i.supplyCap) &&
                b.push(
                  'Deposit attempt is '
                    .concat(e, ' ')
                    .concat(l.symbol, ' but there is only ')
                    .concat(xn(_, 6), ' ')
                    .concat(l.symbol, ' capacity available')
                ),
              b);
      }, [e, A, I, h, i.supplyCap, i.totalSupplyAmount, _, l.symbol]),
      C = S.useMemo(() => {
        const b = [];
        c && b.push({ tooltip: et, text: 'Wallet Connect', variant: 'primary', isCritical: !0 });
        const j = tt(e, L, Ge.leverage.deposit, !!g, M);
        return j && b.push(j), b;
      }, [e, M, c, L, g]),
      G = () => {
        n(h.toNumber()), p.track(''.concat(yn, ':click-deposit-max'));
      },
      D = () => {
        n(h.div(2).toNumber()), p.track(''.concat(yn, ':click-deposit-half'));
      },
      x = S.useCallback(() => {
        m({ tokenMint: r, amount: e, obligation: a });
      }, [e, m, a, r]),
      f = S.useMemo(
        () => !e || e > h.toNumber() || !!T.length || C.some((b) => b.isCritical),
        [e, T.length, h, C]
      );
    return {
      bottomLeftStat: 'Available: '.concat(xn(h, l.decimals)),
      errorMessages: T,
      warnings: C,
      isSubmitDisabled: f,
      isSubmitting: d,
      submitButtonText: e ? 'Deposit '.concat(l.symbol) : 'Enter Deposit Amount',
      value: new $(e).mul(i.price),
      handleSubmit: x,
      handleMax: G,
      handleHalf: D,
      maxAmount: h,
    };
  },
  ol = ({
    marketAddress: e,
    obligation: t,
    onSuccess: n,
    onStateUpdate: o,
    reserveStats: a,
    state: i,
    tokenInfo: l,
    vault: r,
    leverageType: u,
  }) => {
    const { amount: p } = i,
      { collTokenMint: m, debtTokenMint: d } = r,
      { getToken: g } = de(),
      c = g(m),
      y = g(d),
      M = S.useMemo(
        () =>
          ze({
            leverageVaultType: u,
            formAction: i.currentFormAction,
            isLong: !!i.isLong,
            collSymbol: c.symbol,
            debtSymbol: y.symbol,
            selectedSymbol: c.symbol,
          }),
        [u, i.isLong, c.symbol, y.symbol, i.currentFormAction]
      ),
      _ = S.useCallback((b) => o({ amount: b }), [o]),
      {
        bottomLeftStat: L,
        errorMessages: h,
        isSubmitDisabled: I,
        isSubmitting: A,
        handleSubmit: T,
        handleMax: C,
        handleHalf: G,
        submitButtonText: D,
        value: x,
        warnings: f,
      } = nl({
        amount: p,
        marketAddress: e,
        obligation: t,
        borrowReserveAddress: r.borrowReserveAddress,
        depositReserveAddress: r.depositReserveAddress,
        reserveStats: a,
        tokenInfo: l,
        tokenMint: r.collTokenMint,
        onAmountChange: _,
        onSuccess: n,
        getStatusMsg: M,
      });
    return s.jsx(cs, {
      amount: p,
      bottomLeftStat: L,
      errorMessages: h,
      handleAmountChange: _,
      handleHalf: G,
      handleMax: C,
      handleSubmit: T,
      isSubmitting: A,
      isSubmitDisabled: I,
      label: 'You Deposit',
      submitButtonText: D,
      tokenInfo: l,
      value: x,
      warnings: f,
      'data-sentry-element': 'ManageLoanFormTemplate',
      'data-sentry-component': 'AddCollateralForm',
      'data-sentry-source-file': 'AddCollateralForm.tsx',
    });
  },
  al = ({ onSuccess: e = Te, marketAddress: t, isClosingPosition: n, getStatusMsg: o }) => {
    const { wallet: a } = me(),
      { getMarketByAddress: i } = Se(),
      { referrerWallet: l } = Ve(),
      r = _n(),
      u = ''.concat(pe.LENDING.MULTIPLY.BASE, ':withdraw'),
      p = async ({ amountFormat: g, walletPublicKey: c, tokenMint: y, obligation: M }) => {
        const _ = i(t);
        if (!r) throw new Error('Scope is not loaded');
        return ue.KaminoAction.buildWithdrawTxns(
          _,
          n ? ue.U64_MAX : g,
          new z(y),
          new z(c),
          M,
          !0,
          In(a == null ? void 0 : a.adapter.name) ? void 0 : { scope: r, scopeFeed: 'hubble' },
          0,
          !0,
          void 0,
          {
            skipInitialization: !1,
            skipLutCreation: (a == null ? void 0 : a.adapter.name) === 'SquadsX',
          },
          l,
          void 0
        );
      },
      { mutate: m, isLoading: d } = ds({
        buildTxns: p,
        notificationKey: u,
        onSuccess: e,
        marketAddress: t,
        notificationLoadingMessage: 'Withdrawing',
        getNotificationLoadingDescription: () => 'Withdrawing funds from multiply',
        notificationSuccessMessage: 'Withdraw succeeded!',
        notificationSuccessDescriptionPrefix: 'Received',
        notificationErrorMessage: 'Failed to withdraw from lending market',
        notificationErrorDescription: 'Withdraw failed',
        getStatusMsg: o,
      });
    return { withdraw: m, isLoading: d };
  },
  { formatTokenAllDecimals: bn } = ae,
  il = ({ tokenMint: e, amount: t, maxAmount: n }) => {
    const { getToken: o } = de(),
      { symbol: a, decimals: i } = o(e);
    return s.jsx('div', {
      className: te.root,
      'data-sentry-component': 'WithdrawAmountTooBigTooltip',
      'data-sentry-source-file': 'index.tsx',
      children: s.jsxs('div', {
        className: te.item,
        children: [
          s.jsxs('div', {
            className: te.title,
            children: [
              s.jsx($s, {
                'data-sentry-element': 'CapacityLimitIcon',
                'data-sentry-source-file': 'index.tsx',
              }),
              s.jsx(P, {
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Withdrawal Exceeds Threshold',
              }),
            ],
          }),
          s.jsxs('div', {
            className: te.row,
            children: [
              s.jsx(P, {
                fs: 14,
                lh: 18,
                color: 'grey',
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Withdrawal Allowed',
              }),
              s.jsxs(P, {
                fs: 14,
                lh: 18,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [bn(n, i), ' ', a],
              }),
            ],
          }),
          s.jsxs('div', {
            className: te.row,
            children: [
              s.jsx(P, {
                fs: 14,
                lh: 18,
                color: 'grey',
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: 'Withdrawal Attempted',
              }),
              s.jsxs(P, {
                fs: 14,
                lh: 18,
                weight: 'medium',
                'data-sentry-element': 'Text',
                'data-sentry-source-file': 'index.tsx',
                children: [bn(t, i), ' ', a],
              }),
            ],
          }),
        ],
      }),
    });
  },
  { formatTokenAllDecimals: rl } = ae,
  wn = pe.LENDING.MULTIPLY.BASE,
  ll = [],
  On = ({
    amount: e,
    marketAddress: t,
    onSuccess: n = Te,
    obligation: o,
    reserveStats: a,
    tokenInfo: i,
    tokenMint: l,
    onAmountChange: r,
    getStatusMsg: u,
  }) => {
    if (!o) throw Error('Missing obligation. Please refresh the page and try again.');
    const { walletPublicKey: p } = me(),
      m = Be(),
      { isWalletConnect: d } = Je(),
      g = o.refreshedStats.borrowLimit.div(o.refreshedStats.userTotalCollateralDeposit).toNumber(),
      { maxWithdrawableAmount: c } = Do({ obligation: o, marketAddress: t, tokenMint: l }),
      { withdraw: y, isLoading: M } = al({
        marketAddress: t,
        onSuccess: n,
        isClosingPosition: Mn(c, new $(e)),
        getStatusMsg: u,
      }),
      { data: _, isFetched: L } = st([ve]),
      h = _[ve].toNumber(),
      I = () => {
        r == null || r(c), m.track(''.concat(wn, ':click-withdraw-max'));
      },
      A = () => {
        r == null || r(c / 2), m.track(''.concat(wn, ':click-withdraw-half'));
      },
      T = S.useCallback(() => {
        y({ tokenMint: l, amount: e, obligation: o });
      }, [y, l, e, o]),
      C = !!g && g > 0 && o.refreshedStats.loanToValue.toNumber() >= g,
      G = S.useMemo(
        () =>
          (a.withdrawEpochReset.lte(new $(0))
            ? a.dailyWithdrawCapLimit
            : a.dailyWithdrawCapLimit.minus(a.dailyWithdrawCapFilled)
          ).lt(e),
        [e, a.dailyWithdrawCapFilled, a.dailyWithdrawCapLimit, a.withdrawEpochReset]
      ),
      D = S.useMemo(() => {
        const f = [];
        d && f.push({ tooltip: et, text: 'Wallet Connect', variant: 'primary', isCritical: !0 });
        const b = tt(e, h, Ge.leverage.withdraw, !!p, L);
        return (
          b && f.push(b),
          e > c &&
            f.push({
              text: 'Reduce Withdrawal',
              variant: 'warning',
              tooltip: s.jsx(il, { tokenMint: l, amount: e, maxAmount: c }),
              hasIcon: !1,
              isCritical: !0,
            }),
          f
        );
      }, [e, L, d, c, h, l, p]),
      x = C || !e || e > c || G;
    return {
      bottomLeftStat: 'Available: '.concat(rl(c, i.decimals)),
      errorMessages: ll,
      warnings: D,
      isSubmitDisabled: x,
      isSubmitting: M,
      submitButtonText: e ? 'Withdraw '.concat(i.symbol) : 'Enter Withdraw Amount',
      tokenInfo: i,
      value: new $(e).mul(a.price),
      handleSubmit: T,
      handleMax: I,
      handleHalf: A,
      maxWithdrawableAmount: c,
    };
  },
  cl = ({
    marketAddress: e,
    obligation: t,
    onSuccess: n,
    onStateUpdate: o,
    reserveStats: a,
    state: i,
    tokenInfo: l,
    vault: r,
    leverageType: u,
  }) => {
    const { amount: p } = i,
      { collTokenMint: m, debtTokenMint: d } = r,
      { getToken: g } = de(),
      c = g(m),
      y = g(d),
      M = S.useMemo(
        () =>
          ze({
            leverageVaultType: u,
            formAction: i.currentFormAction,
            isLong: !!i.isLong,
            collSymbol: c.symbol,
            debtSymbol: y.symbol,
            selectedSymbol: c.symbol,
          }),
        [u, i.isLong, c.symbol, y.symbol, i.currentFormAction]
      ),
      _ = S.useCallback((b) => o({ amount: b }), [o]),
      {
        bottomLeftStat: L,
        errorMessages: h,
        isSubmitDisabled: I,
        isSubmitting: A,
        handleSubmit: T,
        handleMax: C,
        handleHalf: G,
        submitButtonText: D,
        value: x,
        warnings: f,
      } = On({
        amount: p,
        marketAddress: e,
        obligation: t,
        reserveStats: a,
        tokenInfo: l,
        tokenMint: r.collTokenMint,
        onAmountChange: _,
        onSuccess: n,
        getStatusMsg: M,
      });
    return s.jsx(cs, {
      amount: p,
      bottomLeftStat: L,
      errorMessages: h,
      handleAmountChange: _,
      handleHalf: G,
      handleMax: C,
      handleSubmit: T,
      isSubmitting: A,
      isSubmitDisabled: I,
      label: 'You Withdraw',
      submitButtonText: D,
      tokenInfo: l,
      value: x,
      warnings: f,
      'data-sentry-element': 'ManageLoanFormTemplate',
      'data-sentry-component': 'WithdrawCollateralForm',
      'data-sentry-source-file': 'WithdrawCollateralForm.tsx',
    });
  },
  xs = (e) =>
    s.jsx(qn, {
      getCurrentTotalAmount: (t) => t.totalCollateralAmount,
      getSimulatedTotalAmount: (t) => t.totalCollateralAmount,
      tokenMint: e.vault.collTokenMint,
      reserveAddress: e.vault.depositReserveAddress,
      formProps: e,
      tabs: [St.addCollateral, St.withdrawCollateral],
      tabContentComponents: [ol, cl],
      initialSelectedTab: St.addCollateral,
      obligationType: 'Collateral',
      formStats: e.formStats,
      'data-sentry-element': 'ManageLoanLayoutTemplate',
      'data-sentry-component': 'ManageCollateralForm',
      'data-sentry-source-file': 'ManageCollateralForm.tsx',
    }),
  dl = (e) => {
    const { obligation: t } = e;
    return t
      ? s.jsx(
          ul,
          Ce(he({}, e), {
            'data-sentry-element': 'ClosePosition',
            'data-sentry-component': 'ClosePositionWithoutBorrowsForm',
            'data-sentry-source-file': 'ClosePositionWithoutBorrowsForm.tsx',
          })
        )
      : null;
  },
  ul = (e) => {
    const { obligation: t, marketAddress: n, leverageType: o, vault: a, state: i } = e,
      [l, r] = S.useState(0),
      u = S.useMemo(() => {
        var f;
        return (f =
          t == null
            ? void 0
            : t.state.deposits.find((b) => b.depositedAmount.toString() !== '0')) == null
          ? void 0
          : f.depositReserve;
      }, [t]);
    if (!u) throw new Error('Deposit address is not found');
    const { getReserveByAddress: p } = je(),
      { getReserveApys: m } = ht(),
      { getToken: d } = de(),
      g = ke({ reserve: p(u), obligation: t, getReserveApys: m });
    if (!g) throw new Error('Reserve stats not found');
    const { collTokenMint: c, debtTokenMint: y } = a,
      M = d(c),
      _ = d(y),
      L = d(g.mintAddress),
      h = S.useMemo(
        () =>
          ze({
            leverageVaultType: o,
            formAction: i.currentFormAction,
            isLong: !!i.isLong,
            collSymbol: M.symbol,
            debtSymbol: _.symbol,
            selectedSymbol: L.symbol,
          }),
        [o, i.isLong, M.symbol, _.symbol, L.symbol, i.currentFormAction]
      ),
      {
        isSubmitDisabled: I,
        isSubmitting: A,
        handleSubmit: T,
        handleMax: C,
        maxWithdrawableAmount: G,
        value: D,
        warnings: x,
      } = On({
        amount: l,
        marketAddress: n,
        obligation: t,
        reserveStats: g,
        tokenInfo: L,
        tokenMint: L.address,
        onSuccess: e.onSuccess,
        getStatusMsg: h,
      });
    return (
      S.useEffect(() => {
        e.onStateUpdate({ currentFormAction: Me.closePosition });
      }, [e]),
      S.useEffect(() => {
        C(), r(G);
      }, [G, C]),
      s.jsx(s.Fragment, {
        children: s.jsxs('div', {
          className: be.root,
          children: [
            s.jsx('div', {
              className: be.tabs,
              children: s.jsx(ws, {
                isFullWidth: !0,
                tabs: [{ key: L.address, label: 'Close to '.concat(L.symbol) }],
                activeKey: L.address,
                'data-sentry-element': 'Tabs',
                'data-sentry-source-file': 'ClosePositionWithoutBorrowsForm.tsx',
              }),
            }),
            s.jsx('div', {
              className: be.input,
              children: s.jsx(Ct, {
                value: l,
                label: 'You withdraw',
                topStat: new $(D),
                variant: 'secondary',
                tokensInfos: [L],
                defaultSelectedTokenMint: L.address,
                onInputChange: r,
                disabled: !0,
                'data-sentry-element': 'LargeInput',
                'data-sentry-source-file': 'ClosePositionWithoutBorrowsForm.tsx',
              }),
            }),
            s.jsx('div', {
              className: be.button,
              children: s.jsx(yt, {
                isFullWidth: !0,
                size: 'large',
                disabled: !!A || I,
                isLoading: A,
                onClick: T,
                isRestrictionsIgnored: vs,
                'data-sentry-element': 'FormButton',
                'data-sentry-source-file': 'ClosePositionWithoutBorrowsForm.tsx',
                children: 'Close Position',
              }),
            }),
            s.jsx('div', {
              className: be.notificationsCloseNoBorrowPosition,
              children: x.map((f, b) =>
                S.createElement(
                  Ee,
                  Ce(he({}, f), {
                    key: ''.concat((f == null ? void 0 : f.toString()) || '', '-').concat(b),
                  })
                )
              ),
            }),
            s.jsx('div', {
              className: be.stats,
              children: s.jsx(ts, {
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
  Rl = (e) => {
    const A = e,
      {
        leverageType: t,
        enabledFormTypes: n,
        isHeaderVisible: o,
        onStateUpdate: a,
        obligation: i,
        state: l,
        formStats: r,
        dashboardPath: u,
      } = A,
      p = it(A, [
        'leverageType',
        'enabledFormTypes',
        'isHeaderVisible',
        'onStateUpdate',
        'obligation',
        'state',
        'formStats',
        'dashboardPath',
      ]),
      m = mt(t),
      { isVisible: d, onVisibleChange: g } = _o({}),
      c = S.useRef(!1),
      y = po();
    S.useEffect(() => {
      c.current || ((c.current = !0), a({ amount: 0 }));
    }, [i, a]);
    const M = S.useMemo(
        () => ((i == null ? void 0 : i.borrows.size) === 0 ? dl : tl),
        [i == null ? void 0 : i.borrows.size]
      ),
      _ = {
        [ne.openPosition]: fs,
        [ne.deposit]: fs,
        [ne.manageSize]: xs,
        [ne.manageLeverage]: fn,
        [ne.repayDebt]: pn,
        [ne.topUpCollateral]: xs,
        [ne.closePosition]: M,
        [ne.openLoanDashboard]: fs,
        [ne.manageDebt]: pn,
        [ne.manageCollateral]: xs,
        [ne.withdraw]: Rr,
        [ne.adjust]: fn,
      },
      L = l.currentTab || ne.deposit,
      h = _[L],
      I = (T) =>
        T === ne.manageCollateral
          ? { currentTab: T, currentSubtab: St.addCollateral }
          : T === ne.manageDebt
            ? { currentTab: T, currentSubtab: pt.borrowMore }
            : { currentTab: T };
    return s.jsxs('div', {
      className: qe.root,
      'data-sentry-component': 'LeverageForms',
      'data-sentry-source-file': 'LeverageForms.tsx',
      children: [
        o &&
          s.jsxs('div', {
            className: qe.header,
            children: [
              s.jsxs(qo, { variant: 'small', children: ['Manage ', m] }),
              s.jsx('div', {
                className: qe.dropdown,
                children: s.jsx(Mo, {
                  isVisible: d,
                  onVisibleChange: g,
                  placement: 'bottomRight',
                  overlay: s.jsx('div', {
                    children: n.map((T) =>
                      s.jsxs(
                        S.Fragment,
                        {
                          children: [
                            T === ne.openLoanDashboard &&
                              s.jsx(Sn, { className: qe.openLoanDashboardDivider }),
                            s.jsx(Ao, {
                              title: mt(T),
                              onClick: () => {
                                if (T === ne.openLoanDashboard && u) return y.push(u);
                                const C = I(T);
                                g(!1),
                                  a(
                                    Ce(he({}, C), {
                                      amount: 0,
                                      leverage:
                                        (bs(i)
                                          ? l.leverage
                                          : i == null
                                            ? void 0
                                            : i.refreshedStats.leverage.toNumber()) || Ie,
                                    })
                                  );
                              },
                            }),
                          ],
                        },
                        T.toString()
                      )
                    ),
                  }),
                  children: s.jsx(Co, {
                    isFullWidth: !0,
                    justifyContent: 'center',
                    variant: 'secondary',
                    text: mt(L),
                    endIcon: s.jsx(Mt, { name: 'ChevronDown', height: 12, width: 12 }),
                  }),
                }),
              }),
            ],
          }),
        s.jsx(
          h,
          Ce(he({ leverageType: t, onStateUpdate: a, obligation: i, state: l, formStats: r }, p), {
            'data-sentry-element': 'FormComponent',
            'data-sentry-source-file': 'LeverageForms.tsx',
          })
        ),
        s.jsx(No, {
          'data-sentry-element': 'PriceImpactTooltip',
          'data-sentry-source-file': 'LeverageForms.tsx',
        }),
      ],
    });
  },
  Nl = () =>
    s.jsxs('div', {
      className: qe.emptyBody,
      'data-sentry-component': 'EmptyLeverageForms',
      'data-sentry-source-file': 'LeverageForms.tsx',
      children: [
        s.jsx('div', {
          className: qe.emptyHeader,
          children: s.jsx(ms, {
            width: '100%',
            height: '100%',
            'data-sentry-element': 'SkeletonParagraph',
            'data-sentry-source-file': 'LeverageForms.tsx',
          }),
        }),
        s.jsx('div', {
          className: qe.emptyHeader,
          children: s.jsx(ms, {
            width: '100%',
            height: '100%',
            'data-sentry-element': 'SkeletonParagraph',
            'data-sentry-source-file': 'LeverageForms.tsx',
          }),
        }),
        s.jsx('div', {
          className: qe.emptySubHeader,
          children: s.jsx(ms, {
            width: '100%',
            height: '100%',
            'data-sentry-element': 'SkeletonParagraph',
            'data-sentry-source-file': 'LeverageForms.tsx',
          }),
        }),
      ],
    });
export {
  dl as C,
  Nl as E,
  Es as J,
  ne as L,
  Gs as S,
  pt as a,
  Rl as b,
  Oo as c,
  St as d,
  Vo as e,
  tl as f,
  En as g,
  Va as h,
  pa as i,
  ga as j,
  Wn as k,
  Vn as l,
  zn as m,
  ls as n,
  yr as o,
  Me as p,
  br as q,
  Fl as r,
  Ja as s,
  wi as t,
  Dr as u,
  ze as v,
  sr as w,
  nl as x,
};
//# sourceMappingURL=LeverageForms-D5HsrJJq.js.map
