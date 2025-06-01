var I = Object.defineProperty,
  T = Object.defineProperties;
var Q = Object.getOwnPropertyDescriptors;
var E = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty,
  _ = Object.prototype.propertyIsEnumerable;
var F = (t, a, e) =>
    a in t ? I(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (t[a] = e),
  k = (t, a) => {
    for (var e in a || (a = {})) v.call(a, e) && F(t, e, a[e]);
    if (E) for (var e of E(a)) _.call(a, e) && F(t, e, a[e]);
    return t;
  },
  K = (t, a) => T(t, Q(a));
import { S as A, f as b, P as C, U as x, l as h } from './vendor-DpenelXu.js';
import {
  cA as H,
  a as z,
  Q as p,
  u as U,
  e as V,
  c as P,
  a8 as B,
  cx as q,
  x as w,
  m as G,
  bi as Y,
} from './index-DTTOaJYD.js';
import { u as j } from './useCurrentSlotDeprecated-DLqPzAqr.js';
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
      a = new t.Error().stack;
    a &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[a] = '2ffcc1c9-9b9e-4de4-816c-a079a9ab4562'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-2ffcc1c9-9b9e-4de4-816c-a079a9ab4562'));
  } catch (e) {}
})();
const M = () => {
    const { slotDuration: t } = H(),
      { web3client: a } = z(),
      e = a == null ? void 0 : a.connection,
      { data: r, isFetched: u } = A({
        queryKey: p.kaminoManager,
        enabled: !!e,
        queryFn: () => {
          if (e) return new b.KaminoManager(e, t);
        },
        refetchInterval: 60 * 1e3,
      });
    return { manager: r, isFetched: u };
  },
  D = new b.PubkeyHashMap(),
  L = () => {
    const { walletPublicKey: t } = U(),
      { manager: a } = M();
    return A({
      enabled: !!t && !!a,
      queryKey: p.getUserSharesBalanceAllVaults(t),
      queryFn: async () => {
        if (!t || !a) return D;
        try {
          const e = await a.getUserSharesBalanceAllVaults(new C(t)),
            r = new b.PubkeyHashMap();
          for (const [u, n] of e.entries()) n.totalShares.greaterThan(0) && r.set(u, n);
          return r;
        } catch (e) {
          return V(e), P({ type: 'error', message: 'Failed to load user shares balances' }), D;
        }
      },
    });
  },
  N = ['Cv4MFCqMqp5AwoEgybC17Qt4EqSQZ9oCf21AVPVuG8jC'],
  O = (t) => {
    const { managerName: a } = x(),
      { data: e } = B(),
      { manager: r } = M(),
      { walletPublicKey: u } = U(),
      { data: n, isFetched: d } = L(),
      l = A({
        queryKey: p.getAllEarnVaults,
        queryFn: async () => {
          var m, c;
          if (!r) throw new Error('Kamino manager is not loaded');
          if (q || w.earnShowAllVaults) {
            const s = (await r.getAllVaults()).filter((f) =>
              f.state
                ? w.managerShowVaultsAndMarketsOfTestingAdmins
                  ? !0
                  : !N.includes(f.state.vaultAdminAuthority.toString())
                : !1
            );
            return new Map(s.map((f) => [f.address.toString(), f]));
          }
          const o = Object.keys((m = e == null ? void 0 : e.vaults) != null ? m : {}),
            y = Array.from((c = n == null ? void 0 : n.keys()) != null ? c : []).map((s) =>
              s.toString()
            ),
            i = [...new Set([...o, ...y])],
            S = (await r.getVaults(i.map((s) => new C(s))))
              .filter((s) => (s == null ? void 0 : s.state))
              .map((s) => s);
          return new Map(S.map((s) => [s.address.toString(), s]));
        },
        enabled: !!r && !!e && !0 && (q || w.earnShowAllVaults || d || !u),
        onError: (o) => {
          V(o), P({ type: 'error', message: 'Failed to load vaults' });
        },
      }),
      g =
        a && l.data
          ? new Map(
              h.filter(Array.from(l.data), ([, o]) => {
                const y = h.findKey(
                  e == null ? void 0 : e.riskManagers,
                  (i) => h.kebabCase(i.name) === h.kebabCase(a)
                );
                return o.state.vaultAdminAuthority.toString() === y;
              })
            )
          : l.data;
    return K(k({}, l), { data: g });
  },
  $ = () => {
    const { getCurrentSlot: t } = j(),
      { getPriceByTokenMintDecimal: a, isFetched: e } = G(),
      { data: r } = O(),
      { manager: u } = M(),
      { allReservesMap: n } = Y();
    return A({
      enabled: !!(r != null && r.size) && e && !!u && !!(n != null && n.size),
      queryKey: p.getEarnVaultsPricePerShareMap,
      queryFn: async () => {
        if (!(r != null && r.size) || !u || !e || !(n != null && n.size)) return new Map();
        const d = r ? Array.from(r == null ? void 0 : r.values()) : [],
          l = await t(),
          g = new Map();
        return (
          await Promise.all(
            d.map(async (o) => {
              const y = o.state.vaultAllocationStrategy.map((c) => c.reserve),
                i = new b.PubkeyHashMap();
              y.forEach((c) => {
                const s = n.get(c);
                s && i.set(c, s);
              });
              const S = await u.getSharePriceInUSD(o, a(o.state.tokenMint), l, i, l),
                m = o.address.toString();
              g.set(m, S);
            })
          ),
          g
        );
      },
      onError: (d) => {
        V(d), P({ type: 'error', message: 'Failed to fetch price per share map' });
      },
    });
  };
export { O as a, $ as b, M as c, L as u };
//# sourceMappingURL=usePricePerShareMap-06iyJadP.js.map
