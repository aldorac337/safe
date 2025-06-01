import { P as M, f as k, D as a, r as w } from './vendor-DpenelXu.js';
import { al as m, cb as S, bi as T, c7 as x, c1 as D, k as q } from './index-DTTOaJYD.js';
import { J as B } from './JupiterService-DZaWMIqf.js';
import { u as F } from './useKswapSdk-CDkxmQxX.js';
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
      (t._sentryDebugIds[s] = 'c07e02d5-6d14-4b8e-9f4b-39f9e75a305a'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-c07e02d5-6d14-4b8e-9f4b-39f9e75a305a'));
  } catch (n) {}
})();
const V = ({
    depositReserve: t,
    borrowReserve: s,
    vaultType: n,
    jupiterPrice: i = 0,
    liquidStakingApy: o = 0,
    getMaxLeverage: f,
    getReserveApys: e,
  }) => {
    const d = e(t.address),
      r = f(new M(t.getLiquidityMint()), new M(s.getLiquidityMint())),
      p = o + d.totalDepositApy,
      l = 100,
      c = k.calcBorrowAmount({
        depositTokenAmount: new a(l),
        targetLeverage: new a(r),
        priceCollToDebt: new a(i),
        flashLoanFeeRatio: new a(t.getFlashLoanFee()),
      }),
      u = [
        {
          reserveAddress: t.address,
          amount: m(l * r, t.stats.decimals).floor(),
          mintAddress: t.getLiquidityMint(),
          marketValueRefreshed: m(l * r, t.stats.decimals)
            .floor()
            .mul(new a(i)),
          mintFactor: t.getMintFactor(),
        },
      ],
      g = [
        {
          reserveAddress: s.address,
          amount: m(c, s.stats.decimals).floor(),
          mintAddress: s.getLiquidityMint(),
          marketValueRefreshed: m(c, s.stats.decimals).floor().mul(new a(i)),
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
      vaultType: n,
      borrowApy: e(s.address).totalBorrowApy || 0,
      maxLtv: t.stats.loanToValue || 0,
    };
  },
  P = ({ marketAddress: t }) => {
    const { getReserveByAddress: s } = T(),
      { stakingYieldByMint: n, isLoading: i } = x(),
      { getReserveApys: o } = D(),
      { getMarketByAddress: f } = q(),
      { kswapSdk: e } = F(),
      d = f(t);
    return {
      getVaultByAddress: w.useCallback(
        async (p, l, c) => {
          var b;
          const u = s(p),
            g = s(l),
            y = u.getLiquidityMint(),
            A = (b = n[y.toString()]) != null ? b : 0,
            L = await B.getPrice(e, y.toString(), g.getLiquidityMint().toString());
          return V({
            depositReserve: u,
            borrowReserve: g,
            jupiterPrice: L,
            liquidStakingApy: A,
            vaultType: c,
            getMaxLeverage: d.getMaxLeverageForPair.bind(d),
            getReserveApys: o,
          });
        },
        [e, o, s, n, d]
      ),
      isLoading: i,
    };
  };
export { V as b, P as u };
//# sourceMappingURL=useMultiplyVault-7MQekXRJ.js.map
