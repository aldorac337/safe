import {
  a5 as F,
  r as T,
  D as i,
  S as q,
  c as K,
  P as f,
  ag as L,
  bt as O,
} from './vendor-S4AjIOSE.js';
import { u as v, a as x, o as C, dY as R, bp as W, Q as w, l as Y } from './index-CroKpwmf.js';
import { a as j, g } from './useAtaQuery-CV7TJD4B.js';
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
      (t._sentryDebugIds[u] = '7dbee07d-aa51-41b3-9fe4-64b5c9ccad4c'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-7dbee07d-aa51-41b3-9fe4-64b5c9ccad4c'));
  } catch (o) {}
})();
const I = 5 * 60 * 1e3;
function z(t, u) {
  const { walletPublicKey: o, wallet: k } = v(),
    { web3client: d } = x(),
    { getToken: E } = C(),
    { getBalanceByTokenMint: b } = R(u),
    l = F(),
    { isFetched: p } = W(),
    { tokenProgramIdsMap: A, isFetched: D } = j(),
    y = T.useMemo(() => t.reduce((s, r) => ((s[r.toString()] = new i(0)), s), {}), [t]),
    h = async () => {
      if (!d) throw new Error('Web3client is not loaded');
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
        M = await d.connection.getMultipleAccountsInfo(Object.values(r)),
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
            l.setQueryDefaults(n, { staleTime: I }), l.setQueryData(n, _);
          } else l.removeQueries(n, { exact: !0, stale: !0 });
        }),
        Date.now()
      );
    },
    {
      data: m,
      isFetched: P,
      isLoading: S,
    } = q(w.getTokensBalances(o || '-', t), h, {
      enabled: !!(d && o) && p && D,
      staleTime: I,
      onError: (s) => {
        K(s);
      },
    });
  return {
    data: T.useMemo(
      () => (o ? t.reduce((s, r) => ((s[r.toString()] = b(r) || new i(0)), s), {}) : y),
      [y, b, t, o]
    ),
    dataUpdatedAt: m,
    isFetched: P,
    isLoading: S,
  };
}
export { z as u };
//# sourceMappingURL=useLoadBalances-DGYv7XbQ.js.map
