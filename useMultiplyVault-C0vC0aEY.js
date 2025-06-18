import { P as M, f as k, D as e, r as w } from './vendor-CFRnETMC.js';
import { al as m, ca as S, bh as T, c6 as x, c0 as D, k as h } from './index-DwWh_48g.js';
import { u as q } from './useKswapSdk-otbk_5aK.js';
import { J as B } from './JupiterService-CPhXo3U-.js';
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
      (t._sentryDebugIds[s] = '220d9a37-3c87-4209-b504-a9b5bc34cda1'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-220d9a37-3c87-4209-b504-a9b5bc34cda1'));
  } catch (n) {}
})();
const F = ({
    depositReserve: t,
    borrowReserve: s,
    vaultType: n,
    jupiterPrice: i = 0,
    liquidStakingApy: o = 0,
    getMaxLeverage: f,
    getReserveApys: a,
  }) => {
    const d = a(t.address),
      r = f(new M(t.getLiquidityMint()), new M(s.getLiquidityMint())),
      p = o + d.totalDepositApy,
      c = 100,
      l = k.calcBorrowAmount({
        depositTokenAmount: new e(c),
        targetLeverage: new e(r),
        priceCollToDebt: new e(i),
        flashLoanFeeRatio: new e(t.getFlashLoanFee()),
      }),
      u = [
        {
          reserveAddress: t.address,
          amount: m(c * r, t.stats.decimals).floor(),
          mintAddress: t.getLiquidityMint(),
          marketValueRefreshed: m(c * r, t.stats.decimals)
            .floor()
            .mul(new e(i)),
          mintFactor: t.getMintFactor(),
        },
      ],
      g = [
        {
          reserveAddress: s.address,
          amount: m(l, s.stats.decimals).floor(),
          mintAddress: s.getLiquidityMint(),
          marketValueRefreshed: m(l, s.stats.decimals).floor().mul(new e(i)),
          mintFactor: s.getMintFactor(),
        },
      ],
      { netApy: y } = S({
        deposits: u,
        borrows: g,
        extraSupplyApy: o,
        reserves: [t, s],
        getReserveApys: a,
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
      borrowApy: a(s.address).totalBorrowApy || 0,
      maxLtv: t.stats.loanToValue || 0,
    };
  },
  P = ({ marketAddress: t }) => {
    const { getReserveByAddress: s } = T(),
      { stakingYieldByMint: n, isLoading: i } = x(),
      { getReserveApys: o } = D(),
      { getMarketByAddress: f } = h(),
      { kswapSdk: a } = q(),
      d = f(t);
    return {
      getVaultByAddress: w.useCallback(
        async (p, c, l) => {
          var b;
          const u = s(p),
            g = s(c),
            y = u.getLiquidityMint(),
            A = (b = n[y.toString()]) != null ? b : 0,
            L = await B.getPrice(a, y.toString(), g.getLiquidityMint().toString());
          return F({
            depositReserve: u,
            borrowReserve: g,
            jupiterPrice: L,
            liquidStakingApy: A,
            vaultType: l,
            getMaxLeverage: d.getMaxLeverageForPair.bind(d),
            getReserveApys: o,
          });
        },
        [a, o, s, n, d]
      ),
      isLoading: i,
    };
  };
export { F as b, P as u };
//# sourceMappingURL=useMultiplyVault-C0vC0aEY.js.map
