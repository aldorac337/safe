var T = Object.defineProperty,
  Q = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty,
  z = Object.prototype.propertyIsEnumerable;
var E = (a, t, e) =>
    t in a ? T(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (a[t] = e),
  F = (a, t) => {
    for (var e in t || (t = {})) x.call(t, e) && E(a, e, t[e]);
    if (M) for (var e of M(t)) z.call(t, e) && E(a, e, t[e]);
    return a;
  },
  q = (a, t) => Q(a, _(t));
import {
  cA as B,
  a as G,
  Q as f,
  u as C,
  e as p,
  c as w,
  a8 as H,
  cx as K,
  x as S,
  m as v,
} from './index-CroKpwmf.js';
import { u as Y } from './useCurrentSlotDeprecated-W3d5wOp7.js';
import { S as g, f as b, P as D, U as j, l as h } from './vendor-S4AjIOSE.js';
(function () {
  try {
    var a =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      t = new a.Error().stack;
    t &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[t] = 'fd17ffbe-e511-42e5-90d2-922357277981'),
      (a._sentryDebugIdIdentifier = 'sentry-dbid-fd17ffbe-e511-42e5-90d2-922357277981'));
  } catch (e) {}
})();
const A = () => {
    const { slotDuration: a } = B(),
      { web3client: t } = G(),
      e = t == null ? void 0 : t.connection,
      { data: r, isFetched: o } = g({
        queryKey: f.kaminoManager,
        enabled: !!e,
        queryFn: () => {
          if (e) return new b.KaminoManager(e, a);
        },
        refetchInterval: 60 * 1e3,
      });
    return { manager: r, isFetched: o };
  },
  k = new b.PubkeyHashMap(),
  L = () => {
    const { walletPublicKey: a } = C(),
      { manager: t } = A();
    return g({
      enabled: !!a && !!t,
      queryKey: f.getUserSharesBalanceAllVaults(a),
      queryFn: async () => {
        if (!a || !t) return k;
        try {
          const e = await t.getUserSharesBalanceAllVaults(new D(a)),
            r = new b.PubkeyHashMap();
          for (const [o, s] of e.entries()) s.totalShares.greaterThan(0) && r.set(o, s);
          return r;
        } catch (e) {
          return p(e), w({ type: 'error', message: 'Failed to load user shares balances' }), k;
        }
      },
    });
  },
  N = ['Cv4MFCqMqp5AwoEgybC17Qt4EqSQZ9oCf21AVPVuG8jC'],
  U = (a) => {
    const { managerName: t } = j(),
      { data: e } = H(),
      { manager: r } = A(),
      { walletPublicKey: o } = C(),
      { data: s, isFetched: l } = L(),
      i = g({
        queryKey: f.getAllEarnVaults,
        queryFn: async () => {
          var V, P;
          if (!r) throw new Error('Kamino manager is not loaded');
          if (K || S.earnShowAllVaults) {
            const n = (await r.getAllVaults()).filter((y) =>
              y.state
                ? S.managerShowVaultsAndMarketsOfTestingAdmins
                  ? !0
                  : !N.includes(y.state.vaultAdminAuthority.toString())
                : !1
            );
            return new Map(n.map((y) => [y.address.toString(), y]));
          }
          const u = Object.keys((V = e == null ? void 0 : e.vaults) != null ? V : {}),
            c = Array.from((P = s == null ? void 0 : s.keys()) != null ? P : []).map((n) =>
              n.toString()
            ),
            d = [...new Set([...u, ...c])],
            I = (await r.getVaults(d.map((n) => new D(n))))
              .filter((n) => (n == null ? void 0 : n.state))
              .map((n) => n);
          return new Map(I.map((n) => [n.address.toString(), n]));
        },
        enabled: !!r && !!e && !0 && (K || S.earnShowAllVaults || l || !o),
        onError: (u) => {
          p(u), w({ type: 'error', message: 'Failed to load vaults' });
        },
      }),
      m =
        t && i.data
          ? new Map(
              h.filter(Array.from(i.data), ([, u]) => {
                const c = h.findKey(
                  e == null ? void 0 : e.riskManagers,
                  (d) => h.kebabCase(d.name) === h.kebabCase(t)
                );
                return u.state.vaultAdminAuthority.toString() === c;
              })
            )
          : i.data;
    return q(F({}, i), { data: m });
  },
  O = () => {
    const { data: a } = U(),
      { manager: t } = A();
    return g({
      enabled: !!(a != null && a.size) && !!t,
      queryKey: f.vaultReservesMap,
      queryFn: async () => {
        const e = a ? Array.from(a == null ? void 0 : a.values()) : [];
        if (!e.length || !t) return new Map();
        const r = new Map();
        return (
          await Promise.all(
            e.map(async (o) => {
              const s = await t.loadVaultReserves(o.state),
                l = o.address.toString();
              r.set(l, s);
            })
          ),
          r
        );
      },
      onError: (e) => {
        p(e), w({ type: 'error', message: 'Failed to fetch vault reserves map' });
      },
    });
  },
  $ = () => {
    const { getCurrentSlot: a } = Y(),
      { getPriceByTokenMintDecimal: t, isFetched: e } = v(),
      { data: r } = U(),
      { manager: o } = A(),
      { data: s } = O();
    return g({
      enabled: !!(r != null && r.size) && e && !!o && !!(s != null && s.size),
      queryKey: f.getEarnVaultsPricePerShareMap,
      queryFn: async () => {
        if (!(r != null && r.size) || !o || !e || !(s != null && s.size)) return new Map();
        const l = r ? Array.from(r == null ? void 0 : r.values()) : [],
          i = await a(),
          m = new Map();
        return (
          await Promise.all(
            l.map(async (u) => {
              const c = await o.getSharePriceInUSD(
                  u,
                  t(u.state.tokenMint),
                  i,
                  s.get(u.address.toString()),
                  i
                ),
                d = u.address.toString();
              m.set(d, c);
            })
          ),
          m
        );
      },
      onError: (l) => {
        p(l), w({ type: 'error', message: 'Failed to fetch price per share map' });
      },
    });
  };
export { U as a, $ as b, A as c, O as d, L as u };
//# sourceMappingURL=usePricePerShareMap-BUSiD-SO.js.map
