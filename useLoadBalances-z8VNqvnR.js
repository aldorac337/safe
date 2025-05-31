import {
  a5 as F,
  r as T,
  D as i,
  S as q,
  c as K,
  P as f,
  ag as L,
  bs as O,
} from './vendor-DpenelXu.js';
import { u as v, a as x, o as C, dY as R, bp as W, Q as w, l as Y } from './index-DTTOaJYD.js';
import { a as j, g } from './useAtaQuery-15khGZ6w.js';
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
      u = new t.Error().stack;
    u &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[u] = 'b740f49c-22f4-42d5-8488-8ffccac5738e'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-b740f49c-22f4-42d5-8488-8ffccac5738e'));
  } catch (o) {}
})();
const I = 5 * 60 * 1e3;
function z(t, u) {
  const { walletPublicKey: o, wallet: k } = v(),
    { web3client: l } = x(),
    { getToken: E } = C(),
    { getBalanceByTokenMint: y } = R(u),
    d = F(),
    { isFetched: p } = W(),
    { tokenProgramIdsMap: A, isFetched: D } = j(),
    b = T.useMemo(() => t.reduce((s, r) => ((s[r.toString()] = new i(0)), s), {}), [t]),
    h = async () => {
      if (!l) throw new Error('Web3client is not loaded');
      if (!o || !k) throw new Error('Wallet is not connected');
      const s = await Promise.all(
          t.map((e, c) => {
            var n;
            const a =
              (n = u == null ? void 0 : u.liquidityMintTokenProgramIds) == null ? void 0 : n[c];
            return a
              ? a === f.default.toString()
                ? g(e, o)
                : g(e, o, new f(a))
              : g(e, o, A[e.toString()] || L);
          })
        ),
        r = t.reduce((e, c, a) => {
          const n = s[a];
          return n && !n.equals(f.default) && (e[c.toString()] = n), e;
        }, {}),
        M = await l.connection.getMultipleAccountsInfo(Object.values(r)),
        B = Object.keys(r).reduce((e, c, a) => {
          const n = M[a];
          return n && (e[c] = n), e;
        }, {});
      return (
        t.forEach((e) => {
          const c = r[e.toString()],
            a = B[e.toString()],
            n = w.getTokenBalance(o, e);
          if (a && c) {
            const Q = O(c, a, a.owner),
              _ = Y(new i(Q.amount.toString()), E(e).decimals);
            d.setQueryDefaults(n, { staleTime: I }), d.setQueryData(n, _);
          } else d.removeQueries(n, { exact: !0, stale: !0 });
        }),
        Date.now()
      );
    },
    {
      data: m,
      isFetched: P,
      isLoading: S,
    } = q(w.getTokensBalances(o || '-', t), h, {
      enabled: !!(l && o) && p && D,
      staleTime: I,
      onError: (s) => {
        K(s);
      },
    });
  return {
    data: T.useMemo(
      () => (o ? t.reduce((s, r) => ((s[r.toString()] = y(r) || new i(0)), s), {}) : b),
      [b, y, t, o]
    ),
    dataUpdatedAt: m,
    isFetched: P,
    isLoading: S,
  };
}
export { z as u };
//# sourceMappingURL=useLoadBalances-z8VNqvnR.js.map
