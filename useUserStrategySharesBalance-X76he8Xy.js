var m = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty,
  S = Object.prototype.propertyIsEnumerable;
var h = (e, n, t) =>
    n in e ? m(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[n] = t),
  f = (e, n) => {
    for (var t in n || (n = {})) y.call(n, t) && h(e, t, n[t]);
    if (i) for (var t of i(n)) S.call(n, t) && h(e, t, n[t]);
    return e;
  };
var B = (e, n) => {
  var t = {};
  for (var a in e) y.call(e, a) && n.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && i) for (var a of i(e)) n.indexOf(a) < 0 && S.call(e, a) && (t[a] = e[a]);
  return t;
};
import { P as d, ag as w, bp as A, r as g, S as k, Z as _ } from './vendor-S4AjIOSE.js';
import {
  a as p,
  u as E,
  Q as T,
  e as I,
  c as P,
  au as F,
  l as v,
  t as D,
} from './index-CroKpwmf.js';
import { f as K } from './findAtaBalance-ktoeDHzq.js';
(function () {
  try {
    var e =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = 'a0bfdbfb-75b8-4f53-8684-3f2c41cb24c2'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-a0bfdbfb-75b8-4f53-8684-3f2c41cb24c2'));
  } catch (t) {}
})();
class U {
  constructor(n) {
    (this.findAta = async (t, a) => {
      const c = O(t, a);
      return (await this._checkIfAccountExists(c)) ? c : null;
    }),
      (this.findAtaAndGetBalance = async (t, a) => {
        const c = await this.findAta(t, a);
        return c ? K(this._client.connection, c) : null;
      }),
      (this.getAccountInfo = async (t) => this._client.connection.getAccountInfo(t)),
      (this._checkIfAccountExists = async (t) =>
        (await this._client.connection.getAccountInfo(t)) !== null),
      (this._client = n);
  }
}
const O = (e, n) => d.findProgramAddressSync([e.toBuffer(), w.toBuffer(), n.toBuffer()], A)[0],
  x = () => {
    const { web3client: e } = p(),
      { walletPublicKey: n } = E();
    return g.useCallback(() => {
      if (!(!e || !n)) return new U(e);
    }, [e, n])();
  },
  N = 0,
  R = { cacheTime: 2 * 24 * 60 * 60 * 1e3, staleTime: 1 * 24 * 60 * 60 * 1e3 };
function C({ sharesMint: e }) {
  const { walletPublicKey: n } = E(),
    t = x(),
    a = async () => {
      if (!t || !n || !e) throw new Error('Wallet is not connected');
      return (await t.findAtaAndGetBalance(new d(n), new d(e))) || 0;
    },
    o = k(
      f(
        {
          queryKey: T.getSharesBalance(n || '', e || ''),
          enabled: !!t && !!n && !!e,
          queryFn: a,
          onError: (s) => {
            I(s), P({ message: 'Failed to load user shares balance', type: 'error' });
          },
        },
        R
      )
    ),
    { data: c } = o,
    l = B(o, ['data']);
  return f({ data: c || N }, l);
}
const G = { sharesBalance: 0, farmStakedBalance: 0, totalBalance: 0 };
function W({ sharesMint: e, sharesMintDecimals: n, farmAddress: t }) {
  const { data: a, isFetched: c } = C({ sharesMint: e }),
    { data: l, isFetched: o } = F({ farmAddress: t == null ? void 0 : t.toString() }),
    s = Object.values(l)[0],
    r =
      s != null && s.activeStakeScaled
        ? v(_.scaleDownWads(s == null ? void 0 : s.activeStakeScaled), Number(n || '6')).toNumber()
        : 0,
    u = !e && !D(t),
    b = g.useMemo(
      () =>
        u
          ? G
          : { sharesBalance: a, farmStakedBalance: r > 1 / 10 ** 6 ? r : 0, totalBalance: a + r },
      [a, r, u]
    );
  return u ? { data: b, isFetched: !1 } : { data: b, isFetched: o && c };
}
export { W as u };
//# sourceMappingURL=useUserStrategySharesBalance-X76he8Xy.js.map
