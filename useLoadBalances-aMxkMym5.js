import {
  a5 as F,
  r as T,
  D as i,
  S as q,
  c as K,
  P as f,
  ai as L,
  bu as O,
} from './vendor-CFRnETMC.js';
import { u as v, a as x, o as C, d_ as R, bo as W, Q as w, l as j } from './index-DwWh_48g.js';
import { a as G, g } from './useAtaQuery-BdoJyBgW.js';
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
      (t._sentryDebugIds[u] = 'f4b0dbc1-2c0c-47c6-9c73-fd2833f1a850'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-f4b0dbc1-2c0c-47c6-9c73-fd2833f1a850'));
  } catch (a) {}
})();
const I = 5 * 60 * 1e3;
function z(t, u) {
  const { walletPublicKey: a, wallet: k } = v(),
    { web3client: l } = x(),
    { getToken: E } = C(),
    { getBalanceByTokenMint: b } = R(u),
    d = F(),
    { isFetched: p } = W(),
    { tokenProgramIdsMap: A, isFetched: D } = G(),
    y = T.useMemo(() => t.reduce((s, r) => ((s[r.toString()] = new i(0)), s), {}), [t]),
    h = async () => {
      if (!l) throw new Error('Web3client is not loaded');
      if (!a || !k) throw new Error('Wallet is not connected');
      const s = await Promise.all(
          t.map((e, c) => {
            var n;
            const o =
              (n = u == null ? void 0 : u.liquidityMintTokenProgramIds) == null ? void 0 : n[c];
            return o
              ? o === f.default.toString()
                ? g(e, a)
                : g(e, a, new f(o))
              : g(e, a, A[e.toString()] || L);
          })
        ),
        r = t.reduce((e, c, o) => {
          const n = s[o];
          return n && !n.equals(f.default) && (e[c.toString()] = n), e;
        }, {}),
        M = await l.connection.getMultipleAccountsInfo(Object.values(r)),
        B = Object.keys(r).reduce((e, c, o) => {
          const n = M[o];
          return n && (e[c] = n), e;
        }, {});
      return (
        t.forEach((e) => {
          const c = r[e.toString()],
            o = B[e.toString()],
            n = w.getTokenBalance(a, e);
          if (o && c) {
            const _ = O(c, o, o.owner),
              Q = j(new i(_.amount.toString()), E(e).decimals);
            d.setQueryDefaults(n, { staleTime: I }), d.setQueryData(n, Q);
          } else d.removeQueries(n, { exact: !0, stale: !0 });
        }),
        Date.now()
      );
    },
    {
      data: m,
      isFetched: P,
      isLoading: S,
    } = q(w.getTokensBalances(a || '-', t), h, {
      enabled: !!(l && a) && p && D,
      staleTime: I,
      onError: (s) => {
        K(s);
      },
    });
  return {
    data: T.useMemo(
      () => (a ? t.reduce((s, r) => ((s[r.toString()] = b(r) || new i(0)), s), {}) : y),
      [y, b, t, a]
    ),
    dataUpdatedAt: m,
    isFetched: P,
    isLoading: S,
  };
}
export { z as u };
//# sourceMappingURL=useLoadBalances-aMxkMym5.js.map
