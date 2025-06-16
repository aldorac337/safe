var m = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty,
  S = Object.prototype.propertyIsEnumerable;
var y = (e, a, t) =>
    a in e ? m(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[a] = t),
  d = (e, a) => {
    for (var t in a || (a = {})) b.call(a, t) && y(e, t, a[t]);
    if (i) for (var t of i(a)) S.call(a, t) && y(e, t, a[t]);
    return e;
  };
var B = (e, a) => {
  var t = {};
  for (var n in e) b.call(e, n) && a.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && i) for (var n of i(e)) a.indexOf(n) < 0 && S.call(e, n) && (t[n] = e[n]);
  return t;
};
import { P as f, ai as w, bq as A, r as E, S as k, Z as _ } from './vendor-BCNtwJ5j.js';
import {
  a as T,
  u as g,
  Q as p,
  e as I,
  c as P,
  au as F,
  l as v,
  t as D,
} from './index-BInJAZZg.js';
import { f as K } from './findAtaBalance--rmFRYo8.js';
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
      a = new e.Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = '70563dcf-cb4d-42bc-9acd-5841d1ed0a58'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-70563dcf-cb4d-42bc-9acd-5841d1ed0a58'));
  } catch (t) {}
})();
class U {
  constructor(a) {
    (this.findAta = async (t, n) => {
      const c = O(t, n);
      return (await this._checkIfAccountExists(c)) ? c : null;
    }),
      (this.findAtaAndGetBalance = async (t, n) => {
        const c = await this.findAta(t, n);
        return c ? K(this._client.connection, c) : null;
      }),
      (this.getAccountInfo = async (t) => this._client.connection.getAccountInfo(t)),
      (this._checkIfAccountExists = async (t) =>
        (await this._client.connection.getAccountInfo(t)) !== null),
      (this._client = a);
  }
}
const O = (e, a) => f.findProgramAddressSync([e.toBuffer(), w.toBuffer(), a.toBuffer()], A)[0],
  x = () => {
    const { web3client: e } = T(),
      { walletPublicKey: a } = g();
    return E.useCallback(() => {
      if (!(!e || !a)) return new U(e);
    }, [e, a])();
  },
  N = 0,
  R = { cacheTime: 2 * 24 * 60 * 60 * 1e3, staleTime: 1 * 24 * 60 * 60 * 1e3 };
function C({ sharesMint: e }) {
  const { walletPublicKey: a } = g(),
    t = x(),
    n = async () => {
      if (!t || !a || !e) throw new Error('Wallet is not connected');
      return (await t.findAtaAndGetBalance(new f(a), new f(e))) || 0;
    },
    o = k(
      d(
        {
          queryKey: p.getSharesBalance(a || '', e || ''),
          enabled: !!t && !!a && !!e,
          queryFn: n,
          onError: (s) => {
            I(s), P({ message: 'Failed to load user shares balance', type: 'error' });
          },
        },
        R
      )
    ),
    { data: c } = o,
    l = B(o, ['data']);
  return d({ data: c || N }, l);
}
const G = { sharesBalance: 0, farmStakedBalance: 0, totalBalance: 0 };
function M({ sharesMint: e, sharesMintDecimals: a, farmAddress: t }) {
  const { data: n, isFetched: c } = C({ sharesMint: e }),
    { data: l, isFetched: o } = F({ farmAddress: t == null ? void 0 : t.toString() }),
    s = Object.values(l)[0],
    r =
      s != null && s.activeStakeScaled
        ? v(_.scaleDownWads(s == null ? void 0 : s.activeStakeScaled), Number(a || '6')).toNumber()
        : 0,
    u = !e && !D(t),
    h = E.useMemo(
      () =>
        u
          ? G
          : { sharesBalance: n, farmStakedBalance: r > 1 / 10 ** 6 ? r : 0, totalBalance: n + r },
      [n, r, u]
    );
  return u ? { data: h, isFetched: !1 } : { data: h, isFetched: o && c };
}
export { M as u };
//# sourceMappingURL=useUserStrategySharesBalance-BcYH3uYw.js.map
