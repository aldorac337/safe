var z = Object.defineProperty,
  Q = Object.defineProperties;
var R = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty,
  _ = Object.prototype.propertyIsEnumerable;
var v = (r, e, a) =>
    e in r ? z(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (r[e] = a),
  F = (r, e) => {
    for (var a in e || (e = {})) B.call(e, a) && v(r, a, e[a]);
    if (k) for (var a of k(e)) _.call(e, a) && v(r, a, e[a]);
    return r;
  },
  K = (r, e) => Q(r, R(e));
import {
  cz as D,
  a as I,
  Q as m,
  u as T,
  e as A,
  c as S,
  a8 as H,
  cw as q,
  x as b,
  m as G,
} from './index-BInJAZZg.js';
import { u as O } from './useCurrentSlotDeprecated-BUWlkj8l.js';
import { S as h, f as d, P as V, U as x, l as w } from './vendor-BCNtwJ5j.js';
(function () {
  try {
    var r =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new r.Error().stack;
    e &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[e] = 'ddc6e1d8-1fea-4ed1-af0a-27a7a243582d'),
      (r._sentryDebugIdIdentifier = 'sentry-dbid-ddc6e1d8-1fea-4ed1-af0a-27a7a243582d'));
  } catch (a) {}
})();
const E = () => {
    const { slotDuration: r } = D(),
      { web3client: e } = I(),
      a = e == null ? void 0 : e.connection,
      { data: t, isFetched: s } = h({
        queryKey: m.kaminoManager,
        enabled: !!a,
        queryFn: () => {
          if (a) return new d.KaminoManager(a, r);
        },
        refetchInterval: 60 * 1e3,
      });
    return { manager: t, isFetched: s };
  },
  C = new d.PubkeyHashMap(),
  Y = () => {
    const { walletPublicKey: r } = T(),
      { manager: e } = E();
    return h({
      enabled: !!r && !!e,
      queryKey: m.getUserSharesBalanceAllVaults(r),
      queryFn: async () => {
        if (!r || !e) return C;
        try {
          const a = await e.getUserSharesBalanceAllVaults(new V(r)),
            t = new d.PubkeyHashMap();
          for (const [s, n] of a.entries()) n.totalShares.greaterThan(0) && t.set(s, n);
          return t;
        } catch (a) {
          return A(a), S({ type: 'error', message: 'Failed to load user shares balances' }), C;
        }
      },
    });
  },
  $ = ['Cv4MFCqMqp5AwoEgybC17Qt4EqSQZ9oCf21AVPVuG8jC'],
  U = (r) => {
    const { managerName: e } = x(),
      { data: a } = H(),
      { manager: t } = E(),
      { walletPublicKey: s } = T(),
      { data: n, isFetched: f } = Y(),
      i = h({
        queryKey: m.getAllEarnVaults,
        queryFn: async () => {
          var M, P;
          if (!t) throw new Error('Kamino manager is not loaded');
          if (q || b.earnShowAllVaults) {
            const l = (await t.getAllVaults()).filter((g) =>
              g.state
                ? b.managerShowVaultsAndMarketsOfTestingAdmins
                  ? !0
                  : !$.includes(g.state.vaultAdminAuthority.toString())
                : !1
            );
            return new Map(l.map((g) => [g.address.toString(), g]));
          }
          const o = Object.keys((M = a == null ? void 0 : a.vaults) != null ? M : {}),
            u = Array.from((P = n == null ? void 0 : n.keys()) != null ? P : []).map((l) =>
              l.toString()
            ),
            c = [...new Set([...o, ...u])],
            p = (await t.getVaults(c.map((l) => new V(l))))
              .filter((l) => (l == null ? void 0 : l.state))
              .map((l) => l);
          return new Map(p.map((l) => [l.address.toString(), l]));
        },
        enabled: !!t && !!a && !0 && (q || b.earnShowAllVaults || f || !s),
        onError: (o) => {
          A(o), S({ type: 'error', message: 'Failed to load vaults' });
        },
      }),
      y =
        e && i.data
          ? new Map(
              w.filter(Array.from(i.data), ([, o]) => {
                const u = w.findKey(
                  a == null ? void 0 : a.riskManagers,
                  (c) => w.kebabCase(c.name) === w.kebabCase(e)
                );
                return o.state.vaultAdminAuthority.toString() === u;
              })
            )
          : i.data;
    return K(F({}, i), { data: y });
  },
  j = () => {
    const { web3client: r } = I(),
      { connection: e } = r,
      { slotDuration: a } = D(),
      { data: t } = U();
    return h({
      queryKey: m.kVaultsReserves,
      enabled: !!(t != null && t.size),
      queryFn: () => {
        if (t != null && t.size)
          return L(
            Array.from(t.values()).map((s) => s.state),
            e,
            a
          );
      },
      onError: (s) => {
        A(s), S({ type: 'error', message: 'Failed to fetch vaults reserves   ' });
      },
    });
  };
async function L(r, e, a) {
  const t = new d.PublicKeySet([]);
  for (const o of r)
    for (const u of o.vaultAllocationStrategy) u.reserve.equals(V.default) || t.add(u.reserve);
  const s = t.toArray(),
    n = await e.getMultipleAccountsInfo(s, 'processed'),
    f = n.map((o, u) => {
      if (o === null) throw new Error('Reserve account '.concat(s[u].toBase58(), ' was not found'));
      const c = d.Reserve.decode(o.data);
      if (!c) throw Error('Could not parse reserve '.concat(s[u].toBase58()));
      return c;
    }),
    i = await d.getTokenOracleData(e, f),
    y = new d.PubkeyHashMap();
  return (
    i.forEach(([o, u], c) => {
      if (!u)
        throw Error(
          'Could not find oracle for '.concat(
            d.parseTokenSymbol(o.config.tokenInfo.name),
            ' reserve'
          )
        );
      const p = d.KaminoReserve.initialize(n[c], s[c], o, u, e, a);
      y.set(p.address, p);
    }),
    y
  );
}
const X = () => {
  const { getCurrentSlot: r } = O(),
    { getPriceByTokenMintDecimal: e, isFetched: a } = G(),
    { data: t } = U(),
    { manager: s } = E(),
    { data: n } = j();
  return h({
    enabled: !!(t != null && t.size) && a && !!s && !!(n != null && n.size),
    queryKey: m.getEarnVaultsPricePerShareMap,
    queryFn: async () => {
      if (!(t != null && t.size) || !s || !a || !(n != null && n.size)) return new Map();
      const f = t ? Array.from(t == null ? void 0 : t.values()) : [],
        i = await r(),
        y = new Map();
      return (
        await Promise.all(
          f.map(async (o) => {
            const u = await s.getSharePriceInUSD(o, e(o.state.tokenMint), i, n, i),
              c = o.address.toString();
            y.set(c, u);
          })
        ),
        y
      );
    },
    onError: (f) => {
      A(f), S({ type: 'error', message: 'Failed to fetch price per share map' });
    },
  });
};
export { U as a, X as b, E as c, j as d, Y as u };
//# sourceMappingURL=usePricePerShareMap-CSztMAq9.js.map
