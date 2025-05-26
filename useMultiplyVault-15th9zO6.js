import { P as L, f as b, D as n, r as w } from './vendor-S4AjIOSE.js';
import { al as m, cb as S, bi as T, c7 as x, c1 as D, k as q } from './index-CroKpwmf.js';
import { J as B } from './JupiterService-DgkMwrEN.js';
import { u as F } from './useKswapSdk-6qh4k4RZ.js';
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
      s = new t.Error().stack;
    s &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[s] = 'ed7fc969-8333-4d16-9822-0810e88cfe30'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-ed7fc969-8333-4d16-9822-0810e88cfe30'));
  } catch (a) {}
})();
const V = ({
    depositReserve: t,
    borrowReserve: s,
    vaultType: a,
    jupiterPrice: i = 0,
    liquidStakingApy: o = 0,
    getMaxLeverage: f,
    getReserveApys: e,
  }) => {
    const d = e(t.address),
      r = f(new L(t.getLiquidityMint()), new L(s.getLiquidityMint())),
      p = o + d.totalDepositApy,
      l = 100,
      c = b.calcBorrowAmount({
        depositTokenAmount: new n(l),
        targetLeverage: new n(r),
        priceCollToDebt: new n(i),
        flashLoanFeeRatio: new n(t.getFlashLoanFee()),
      }),
      u = [
        {
          reserveAddress: t.address,
          amount: m(l * r, t.stats.decimals).floor(),
          mintAddress: t.getLiquidityMint(),
          marketValueRefreshed: m(l * r, t.stats.decimals)
            .floor()
            .mul(new n(i)),
          mintFactor: t.getMintFactor(),
        },
      ],
      g = [
        {
          reserveAddress: s.address,
          amount: m(c, s.stats.decimals).floor(),
          mintAddress: s.getLiquidityMint(),
          marketValueRefreshed: m(c, s.stats.decimals).floor().mul(new n(i)),
          mintFactor: s.getMintFactor(),
        },
      ],
      { netApy: y } = S({
        deposits: u,
        borrows: g,
        extraSupplyApy: o,
        reserves: [t, s],
        getReserveApys: e,
      });
    return {
      depositReserveAddress: t.address,
      borrowReserveAddress: s.address,
      collTokenMint: t.getLiquidityMint().toString(),
      minApy: p,
      maxApy: y,
      reserveLtvBps: t.stats.loanToValue || 0,
      maxLeverage: r,
      debtTokenMint: s.getLiquidityMint().toString(),
      vaultType: a,
      borrowApy: e(s.address).totalBorrowApy || 0,
      maxLtv: t.stats.loanToValue || 0,
    };
  },
  P = ({ marketAddress: t }) => {
    const { getReserveByAddress: s } = T(),
      { stakingYieldByMint: a, isLoading: i } = x(),
      { getReserveApys: o } = D(),
      { getMarketByAddress: f } = q(),
      { kswapSdk: e } = F(),
      d = f(t);
    return {
      getVaultByAddress: w.useCallback(
        async (p, l, c) => {
          var M;
          const u = s(p),
            g = s(l),
            y = u.getLiquidityMint(),
            A = (M = a[y.toString()]) != null ? M : 0,
            k = await B.getPrice(e, y.toString(), g.getLiquidityMint().toString());
          return V({
            depositReserve: u,
            borrowReserve: g,
            jupiterPrice: k,
            liquidStakingApy: A,
            vaultType: c,
            getMaxLeverage: d.getMaxLeverageForPair.bind(d),
            getReserveApys: o,
          });
        },
        [e, o, s, a, d]
      ),
      isLoading: i,
    };
  };
export { V as b, P as u };
//# sourceMappingURL=useMultiplyVault-15th9zO6.js.map
