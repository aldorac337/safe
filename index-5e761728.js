import {
  l as T,
  F as m,
  p as A,
  A as w,
  N as u,
  G as W,
  H as G,
  f as B,
  I as L,
  J as R,
  k as y,
  C as O,
  j as z,
  S as k,
  R as f,
  K as D,
  u as $,
  m as I,
  W as v,
  i as q,
  h as j,
  n as Q,
  d as V,
  x as N,
} from './index-84fa2459.js';
import { n as x, c as H } from './if-defined-0db99fa5.js';
import './index-ad14d90f.js';
import './index-ca591eed.js';
(function () {
  try {
    var n =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      t = new n.Error().stack;
    t &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[t] = '05bf3fd2-cd54-4ab2-8760-d569587a5448'),
      (n._sentryDebugIdIdentifier = 'sentry-dbid-05bf3fd2-cd54-4ab2-8760-d569587a5448'));
  } catch {}
})();
const C = {
    async getTokenList() {
      const n = T.state.activeCaipNetwork;
      return (
        (await m.fetchSwapTokens({ chainId: n?.caipNetworkId }))?.tokens?.map((s) => ({
          ...s,
          eip2612: !1,
          quantity: { decimals: '0', numeric: '0' },
          price: 0,
          value: 0,
        })) || []
      );
    },
    async fetchGasPrice() {
      const n = T.state.activeCaipNetwork;
      if (!n) return null;
      try {
        switch (n.chainNamespace) {
          case 'solana':
            const t = (await A?.estimateGas({ chainNamespace: 'solana' }))?.toString();
            return { standard: t, fast: t, instant: t };
          case 'eip155':
          default:
            return await m.fetchGasPrice({ chainId: n.caipNetworkId });
        }
      } catch {
        return null;
      }
    },
    async fetchSwapAllowance({
      tokenAddress: n,
      userAddress: t,
      sourceTokenAmount: o,
      sourceTokenDecimals: s,
    }) {
      const r = await m.fetchSwapAllowance({ tokenAddress: n, userAddress: t });
      if (r?.allowance && o && s) {
        const i = A.parseUnits(o, s) || 0;
        return BigInt(r.allowance) >= i;
      }
      return !1;
    },
    async getMyTokensWithBalance(n) {
      const t = w.state.address,
        o = T.state.activeCaipNetwork;
      if (!t || !o) return [];
      const r = (await m.getBalance(t, o.caipNetworkId, n)).balances.filter(
        (i) => i.quantity.decimals !== '0'
      );
      return w.setTokenBalance(r, T.state.activeChain), this.mapBalancesToSwapTokens(r);
    },
    mapBalancesToSwapTokens(n) {
      return (
        n?.map((t) => ({
          ...t,
          address: t?.address ? t.address : T.getActiveNetworkTokenAddress(),
          decimals: parseInt(t.quantity.decimals, 10),
          logoUri: t.iconUrl,
          eip2612: !1,
        })) || []
      );
    },
  },
  g = {
    getGasPriceInEther(n, t) {
      const o = t * n;
      return Number(o) / 1e18;
    },
    getGasPriceInUSD(n, t, o) {
      const s = g.getGasPriceInEther(t, o);
      return u.bigNumber(n).times(s).toNumber();
    },
    getPriceImpact({
      sourceTokenAmount: n,
      sourceTokenPriceInUSD: t,
      toTokenPriceInUSD: o,
      toTokenAmount: s,
    }) {
      const r = u.bigNumber(n).times(t),
        i = u.bigNumber(s).times(o);
      return r.minus(i).div(r).times(100).toNumber();
    },
    getMaxSlippage(n, t) {
      const o = u.bigNumber(n).div(100);
      return u.multiply(t, o).toNumber();
    },
    getProviderFee(n, t = 0.0085) {
      return u.bigNumber(n).times(t).toString();
    },
    isInsufficientNetworkTokenForGas(n, t) {
      const o = t || '0';
      return u.bigNumber(n).eq(0) ? !0 : u.bigNumber(u.bigNumber(o)).gt(n);
    },
    isInsufficientSourceTokenForSwap(n, t, o) {
      const s = o?.find((i) => i.address === t)?.quantity?.numeric;
      return u.bigNumber(s || '0').lt(n);
    },
    getToTokenAmount({
      sourceToken: n,
      toToken: t,
      sourceTokenPrice: o,
      toTokenPrice: s,
      sourceTokenAmount: r,
    }) {
      if (r === '0' || !n || !t) return '0';
      const i = n.decimals,
        c = o,
        d = t.decimals,
        p = s;
      if (p <= 0) return '0';
      const b = u.bigNumber(r).times(0.0085),
        F = u.bigNumber(r).minus(b).times(u.bigNumber(10).pow(i)),
        M = u.bigNumber(c).div(p),
        _ = i - d;
      return F.times(M)
        .div(u.bigNumber(10).pow(_))
        .div(u.bigNumber(10).pow(d))
        .toFixed(d)
        .toString();
    },
  },
  E = 15e4,
  K = 6,
  l = {
    initializing: !1,
    initialized: !1,
    loadingPrices: !1,
    loadingQuote: !1,
    loadingApprovalTransaction: !1,
    loadingBuildTransaction: !1,
    loadingTransaction: !1,
    fetchError: !1,
    approvalTransaction: void 0,
    swapTransaction: void 0,
    transactionError: void 0,
    sourceToken: void 0,
    sourceTokenAmount: '',
    sourceTokenPriceInUSD: 0,
    toToken: void 0,
    toTokenAmount: '',
    toTokenPriceInUSD: 0,
    networkPrice: '0',
    networkBalanceInUSD: '0',
    networkTokenSymbol: '',
    inputError: void 0,
    slippage: B.CONVERT_SLIPPAGE_TOLERANCE,
    tokens: void 0,
    popularTokens: void 0,
    suggestedTokens: void 0,
    foundTokens: void 0,
    myTokensWithBalance: void 0,
    tokensPriceMap: {},
    gasFee: '0',
    gasPriceInUSD: 0,
    priceImpact: void 0,
    maxSlippage: void 0,
    providerFee: void 0,
  },
  e = W(l),
  h = {
    state: e,
    subscribe(n) {
      return L(e, () => n(e));
    },
    subscribeKey(n, t) {
      return R(e, n, t);
    },
    getParams() {
      const n = T.state.activeCaipAddress,
        t = T.state.activeChain,
        o = y.getPlainAddress(n),
        s = T.getActiveNetworkTokenAddress(),
        r = O.getConnectorId(t);
      if (!o) throw new Error('No address found to swap the tokens from.');
      const i = !e.toToken?.address || !e.toToken?.decimals,
        c =
          !e.sourceToken?.address ||
          !e.sourceToken?.decimals ||
          !u.bigNumber(e.sourceTokenAmount).gt(0),
        d = !e.sourceTokenAmount;
      return {
        networkAddress: s,
        fromAddress: o,
        fromCaipAddress: n,
        sourceTokenAddress: e.sourceToken?.address,
        toTokenAddress: e.toToken?.address,
        toTokenAmount: e.toTokenAmount,
        toTokenDecimals: e.toToken?.decimals,
        sourceTokenAmount: e.sourceTokenAmount,
        sourceTokenDecimals: e.sourceToken?.decimals,
        invalidToToken: i,
        invalidSourceToken: c,
        invalidSourceTokenAmount: d,
        availableToSwap: n && !i && !c && !d,
        isAuthConnector: r === z.CONNECTOR_ID.AUTH,
      };
    },
    setSourceToken(n) {
      if (!n) {
        (e.sourceToken = n), (e.sourceTokenAmount = ''), (e.sourceTokenPriceInUSD = 0);
        return;
      }
      (e.sourceToken = n), a.setTokenPrice(n.address, 'sourceToken');
    },
    setSourceTokenAmount(n) {
      e.sourceTokenAmount = n;
    },
    setToToken(n) {
      if (!n) {
        (e.toToken = n), (e.toTokenAmount = ''), (e.toTokenPriceInUSD = 0);
        return;
      }
      (e.toToken = n), a.setTokenPrice(n.address, 'toToken');
    },
    setToTokenAmount(n) {
      e.toTokenAmount = n ? u.formatNumberToLocalString(n, K) : '';
    },
    async setTokenPrice(n, t) {
      let o = e.tokensPriceMap[n] || 0;
      o || ((e.loadingPrices = !0), (o = await a.getAddressPrice(n))),
        t === 'sourceToken'
          ? (e.sourceTokenPriceInUSD = o)
          : t === 'toToken' && (e.toTokenPriceInUSD = o),
        e.loadingPrices && (e.loadingPrices = !1),
        a.getParams().availableToSwap && a.swapTokens();
    },
    switchTokens() {
      if (e.initializing || !e.initialized) return;
      const n = e.toToken ? { ...e.toToken } : void 0,
        t = e.sourceToken ? { ...e.sourceToken } : void 0,
        o = n && e.toTokenAmount === '' ? '1' : e.toTokenAmount;
      a.setSourceToken(n),
        a.setToToken(t),
        a.setSourceTokenAmount(o),
        a.setToTokenAmount(''),
        a.swapTokens();
    },
    resetState() {
      (e.myTokensWithBalance = l.myTokensWithBalance),
        (e.tokensPriceMap = l.tokensPriceMap),
        (e.initialized = l.initialized),
        (e.sourceToken = l.sourceToken),
        (e.sourceTokenAmount = l.sourceTokenAmount),
        (e.sourceTokenPriceInUSD = l.sourceTokenPriceInUSD),
        (e.toToken = l.toToken),
        (e.toTokenAmount = l.toTokenAmount),
        (e.toTokenPriceInUSD = l.toTokenPriceInUSD),
        (e.networkPrice = l.networkPrice),
        (e.networkTokenSymbol = l.networkTokenSymbol),
        (e.networkBalanceInUSD = l.networkBalanceInUSD),
        (e.inputError = l.inputError),
        (e.myTokensWithBalance = l.myTokensWithBalance);
    },
    resetValues() {
      const { networkAddress: n } = a.getParams(),
        t = e.tokens?.find((o) => o.address === n);
      a.setSourceToken(t), a.setToToken(void 0);
    },
    getApprovalLoadingState() {
      return e.loadingApprovalTransaction;
    },
    clearError() {
      e.transactionError = void 0;
    },
    async initializeState() {
      if (!e.initializing) {
        if (((e.initializing = !0), !e.initialized))
          try {
            await a.fetchTokens(), (e.initialized = !0);
          } catch {
            (e.initialized = !1), k.showError('Failed to initialize swap'), f.goBack();
          }
        e.initializing = !1;
      }
    },
    async fetchTokens() {
      const { networkAddress: n } = a.getParams();
      await a.getTokenList(), await a.getNetworkTokenPrice(), await a.getMyTokensWithBalance();
      const t = e.tokens?.find((o) => o.address === n);
      t && ((e.networkTokenSymbol = t.symbol), a.setSourceToken(t), a.setSourceTokenAmount('1'));
    },
    async getTokenList() {
      const n = await C.getTokenList();
      (e.tokens = n),
        (e.popularTokens = n.sort((t, o) =>
          t.symbol < o.symbol ? -1 : t.symbol > o.symbol ? 1 : 0
        )),
        (e.suggestedTokens = n.filter((t) => !!B.SWAP_SUGGESTED_TOKENS.includes(t.symbol), {}));
    },
    async getAddressPrice(n) {
      const t = e.tokensPriceMap[n];
      if (t) return t;
      const s = (await m.fetchTokenPrice({ addresses: [n] }))?.fungibles || [],
        i = [...(e.tokens || []), ...(e.myTokensWithBalance || [])]?.find(
          (p) => p.address === n
        )?.symbol,
        c = s.find((p) => p.symbol.toLowerCase() === i?.toLowerCase())?.price || 0,
        d = parseFloat(c.toString());
      return (e.tokensPriceMap[n] = d), d;
    },
    async getNetworkTokenPrice() {
      const { networkAddress: n } = a.getParams(),
        o = (
          await m
            .fetchTokenPrice({ addresses: [n] })
            .catch(() => (k.showError('Failed to fetch network token price'), { fungibles: [] }))
        ).fungibles?.[0],
        s = o?.price.toString() || '0';
      (e.tokensPriceMap[n] = parseFloat(s)),
        (e.networkTokenSymbol = o?.symbol || ''),
        (e.networkPrice = s);
    },
    async getMyTokensWithBalance(n) {
      const t = await D.getMyTokensWithBalance(n),
        o = D.mapBalancesToSwapTokens(t);
      o && (await a.getInitialGasPrice(), a.setBalances(o));
    },
    setBalances(n) {
      const { networkAddress: t } = a.getParams(),
        o = T.state.activeCaipNetwork;
      if (!o) return;
      const s = n.find((r) => r.address === t);
      n.forEach((r) => {
        e.tokensPriceMap[r.address] = r.price || 0;
      }),
        (e.myTokensWithBalance = n.filter((r) => r.address.startsWith(o.caipNetworkId))),
        (e.networkBalanceInUSD = s ? u.multiply(s.quantity.numeric, s.price).toString() : '0');
    },
    async getInitialGasPrice() {
      const n = await C.fetchGasPrice();
      if (!n) return { gasPrice: null, gasPriceInUSD: null };
      switch (T.state?.activeCaipNetwork?.chainNamespace) {
        case 'solana':
          return (
            (e.gasFee = n.standard ?? '0'),
            (e.gasPriceInUSD = u.multiply(n.standard, e.networkPrice).div(1e9).toNumber()),
            { gasPrice: BigInt(e.gasFee), gasPriceInUSD: Number(e.gasPriceInUSD) }
          );
        case 'eip155':
        default:
          const t = n.standard ?? '0',
            o = BigInt(t),
            s = BigInt(E),
            r = g.getGasPriceInUSD(e.networkPrice, s, o);
          return (e.gasFee = t), (e.gasPriceInUSD = r), { gasPrice: o, gasPriceInUSD: r };
      }
    },
    async swapTokens() {
      const n = w.state.address,
        t = e.sourceToken,
        o = e.toToken,
        s = u.bigNumber(e.sourceTokenAmount).gt(0);
      if ((s || a.setToTokenAmount(''), !o || !t || e.loadingPrices || !s)) return;
      e.loadingQuote = !0;
      const r = u
        .bigNumber(e.sourceTokenAmount)
        .times(10 ** t.decimals)
        .round(0);
      try {
        const i = await m.fetchSwapQuote({
          userAddress: n,
          from: t.address,
          to: o.address,
          gasPrice: e.gasFee,
          amount: r.toString(),
        });
        e.loadingQuote = !1;
        const c = i?.quotes?.[0]?.toAmount;
        if (!c) {
          $.open(
            { shortMessage: 'Incorrect amount', longMessage: 'Please enter a valid amount' },
            'error'
          );
          return;
        }
        const d = u
          .bigNumber(c)
          .div(10 ** o.decimals)
          .toString();
        a.setToTokenAmount(d),
          a.hasInsufficientToken(e.sourceTokenAmount, t.address)
            ? (e.inputError = 'Insufficient balance')
            : ((e.inputError = void 0), a.setTransactionDetails());
      } catch {
        (e.loadingQuote = !1), (e.inputError = 'Insufficient balance');
      }
    },
    async getTransaction() {
      const { fromCaipAddress: n, availableToSwap: t } = a.getParams(),
        o = e.sourceToken,
        s = e.toToken;
      if (!(!n || !t || !o || !s || e.loadingQuote))
        try {
          e.loadingBuildTransaction = !0;
          const r = await C.fetchSwapAllowance({
            userAddress: n,
            tokenAddress: o.address,
            sourceTokenAmount: e.sourceTokenAmount,
            sourceTokenDecimals: o.decimals,
          });
          let i;
          return (
            r ? (i = await a.createSwapTransaction()) : (i = await a.createAllowanceTransaction()),
            (e.loadingBuildTransaction = !1),
            (e.fetchError = !1),
            i
          );
        } catch {
          f.goBack(),
            k.showError('Failed to check allowance'),
            (e.loadingBuildTransaction = !1),
            (e.approvalTransaction = void 0),
            (e.swapTransaction = void 0),
            (e.fetchError = !0);
          return;
        }
    },
    async createAllowanceTransaction() {
      const { fromCaipAddress: n, sourceTokenAddress: t, toTokenAddress: o } = a.getParams();
      if (!(!n || !o)) {
        if (!t) throw new Error('createAllowanceTransaction - No source token address found.');
        try {
          const s = await m.generateApproveCalldata({ from: t, to: o, userAddress: n }),
            r = {
              data: s.tx.data,
              to: y.getPlainAddress(s.tx.from),
              gasPrice: BigInt(s.tx.eip155.gasPrice),
              value: BigInt(s.tx.value),
              toAmount: e.toTokenAmount,
            };
          return (
            (e.swapTransaction = void 0),
            (e.approvalTransaction = {
              data: r.data,
              to: r.to,
              gasPrice: r.gasPrice,
              value: r.value,
              toAmount: r.toAmount,
            }),
            { data: r.data, to: r.to, gasPrice: r.gasPrice, value: r.value, toAmount: r.toAmount }
          );
        } catch {
          f.goBack(),
            k.showError('Failed to create approval transaction'),
            (e.approvalTransaction = void 0),
            (e.swapTransaction = void 0),
            (e.fetchError = !0);
          return;
        }
      }
    },
    async createSwapTransaction() {
      const { networkAddress: n, fromCaipAddress: t, sourceTokenAmount: o } = a.getParams(),
        s = e.sourceToken,
        r = e.toToken;
      if (!t || !o || !s || !r) return;
      const i = A.parseUnits(o, s.decimals)?.toString();
      try {
        const c = await m.generateSwapCalldata({
            userAddress: t,
            from: s.address,
            to: r.address,
            amount: i,
            disableEstimate: !0,
          }),
          d = s.address === n,
          p = BigInt(c.tx.eip155.gas),
          b = BigInt(c.tx.eip155.gasPrice),
          P = {
            data: c.tx.data,
            to: y.getPlainAddress(c.tx.to),
            gas: p,
            gasPrice: b,
            value: BigInt(d ? (i ?? '0') : '0'),
            toAmount: e.toTokenAmount,
          };
        return (
          (e.gasPriceInUSD = g.getGasPriceInUSD(e.networkPrice, p, b)),
          (e.approvalTransaction = void 0),
          (e.swapTransaction = P),
          P
        );
      } catch {
        f.goBack(),
          k.showError('Failed to create transaction'),
          (e.approvalTransaction = void 0),
          (e.swapTransaction = void 0),
          (e.fetchError = !0);
        return;
      }
    },
    async sendTransactionForApproval(n) {
      const { fromAddress: t, isAuthConnector: o } = a.getParams();
      e.loadingApprovalTransaction = !0;
      const s = 'Approve limit increase in your wallet';
      o
        ? f.pushTransactionStack({
            view: null,
            goBack: !0,
            onSuccess() {
              k.showLoading(s);
            },
          })
        : k.showLoading(s);
      try {
        await A.sendTransaction({
          address: t,
          to: n.to,
          data: n.data,
          value: n.value,
          chainNamespace: 'eip155',
        }),
          await a.swapTokens(),
          await a.getTransaction(),
          (e.approvalTransaction = void 0),
          (e.loadingApprovalTransaction = !1);
      } catch (r) {
        const i = r;
        (e.transactionError = i?.shortMessage),
          (e.loadingApprovalTransaction = !1),
          k.showError(i?.shortMessage || 'Transaction error'),
          I.sendEvent({
            type: 'track',
            event: 'SWAP_APPROVAL_ERROR',
            properties: {
              message: i?.shortMessage || i?.message || 'Unknown',
              network: T.state.activeCaipNetwork?.caipNetworkId || '',
              swapFromToken: a.state.sourceToken?.symbol || '',
              swapToToken: a.state.toToken?.symbol || '',
              swapFromAmount: a.state.sourceTokenAmount || '',
              swapToAmount: a.state.toTokenAmount || '',
              isSmartAccount:
                w.state.preferredAccountTypes?.eip155 === v.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          });
      }
    },
    async sendTransactionForSwap(n) {
      if (!n) return;
      const { fromAddress: t, toTokenAmount: o, isAuthConnector: s } = a.getParams();
      e.loadingTransaction = !0;
      const r = `Swapping ${e.sourceToken?.symbol} to ${u.formatNumberToLocalString(o, 3)} ${e.toToken?.symbol}`,
        i = `Swapped ${e.sourceToken?.symbol} to ${u.formatNumberToLocalString(o, 3)} ${e.toToken?.symbol}`;
      s
        ? f.pushTransactionStack({
            view: 'Account',
            goBack: !1,
            onSuccess() {
              k.showLoading(r), h.resetState();
            },
          })
        : k.showLoading('Confirm transaction in your wallet');
      try {
        const c = [e.sourceToken?.address, e.toToken?.address].join(','),
          d = await A.sendTransaction({
            address: t,
            to: n.to,
            data: n.data,
            value: n.value,
            chainNamespace: 'eip155',
          });
        return (
          (e.loadingTransaction = !1),
          k.showSuccess(i),
          I.sendEvent({
            type: 'track',
            event: 'SWAP_SUCCESS',
            properties: {
              network: T.state.activeCaipNetwork?.caipNetworkId || '',
              swapFromToken: a.state.sourceToken?.symbol || '',
              swapToToken: a.state.toToken?.symbol || '',
              swapFromAmount: a.state.sourceTokenAmount || '',
              swapToAmount: a.state.toTokenAmount || '',
              isSmartAccount:
                w.state.preferredAccountTypes?.eip155 === v.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
          h.resetState(),
          s || f.replace('Account'),
          h.getMyTokensWithBalance(c),
          d
        );
      } catch (c) {
        const d = c;
        (e.transactionError = d?.shortMessage),
          (e.loadingTransaction = !1),
          k.showError(d?.shortMessage || 'Transaction error'),
          I.sendEvent({
            type: 'track',
            event: 'SWAP_ERROR',
            properties: {
              message: d?.shortMessage || d?.message || 'Unknown',
              network: T.state.activeCaipNetwork?.caipNetworkId || '',
              swapFromToken: a.state.sourceToken?.symbol || '',
              swapToToken: a.state.toToken?.symbol || '',
              swapFromAmount: a.state.sourceTokenAmount || '',
              swapToAmount: a.state.toTokenAmount || '',
              isSmartAccount:
                w.state.preferredAccountTypes?.eip155 === v.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          });
        return;
      }
    },
    hasInsufficientToken(n, t) {
      return g.isInsufficientSourceTokenForSwap(n, t, e.myTokensWithBalance);
    },
    setTransactionDetails() {
      const { toTokenAddress: n, toTokenDecimals: t } = a.getParams();
      !n ||
        !t ||
        ((e.gasPriceInUSD = g.getGasPriceInUSD(e.networkPrice, BigInt(e.gasFee), BigInt(E))),
        (e.priceImpact = g.getPriceImpact({
          sourceTokenAmount: e.sourceTokenAmount,
          sourceTokenPriceInUSD: e.sourceTokenPriceInUSD,
          toTokenPriceInUSD: e.toTokenPriceInUSD,
          toTokenAmount: e.toTokenAmount,
        })),
        (e.maxSlippage = g.getMaxSlippage(e.slippage, e.toTokenAmount)),
        (e.providerFee = g.getProviderFee(e.sourceTokenAmount)));
    },
  },
  a = G(h),
  Y = q`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;
var U =
  (globalThis && globalThis.__decorate) ||
  function (n, t, o, s) {
    var r = arguments.length,
      i = r < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, o)) : s,
      c;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(n, t, o, s);
    else
      for (var d = n.length - 1; d >= 0; d--)
        (c = n[d]) && (i = (r < 3 ? c(i) : r > 3 ? c(t, o, i) : c(t, o)) || i);
    return r > 3 && i && Object.defineProperty(t, o, i), i;
  };
let S = class extends V {
  constructor() {
    super(...arguments), (this.text = '');
  }
  render() {
    return N`
      <button>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `;
  }
  tokenTemplate() {
    return this.imageSrc
      ? N`<wui-image src=${this.imageSrc}></wui-image>`
      : N`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
  }
};
S.styles = [j, Q, Y];
U([x()], S.prototype, 'imageSrc', void 0);
U([x()], S.prototype, 'text', void 0);
S = U([H('wui-token-button')], S);
export { a as S };
