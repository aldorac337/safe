var p = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var t = Object.prototype.hasOwnProperty,
  f = Object.prototype.propertyIsEnumerable;
var n = (e, r, o) =>
    r in e ? p(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[r] = o),
  u = (e, r) => {
    for (var o in r || (r = {})) t.call(r, o) && n(e, o, r[o]);
    if (s) for (var o of s(r)) f.call(r, o) && n(e, o, r[o]);
    return e;
  };
var c = (e, r) => {
  var o = {};
  for (var a in e) t.call(e, a) && r.indexOf(a) < 0 && (o[a] = e[a]);
  if (e != null && s) for (var a of s(e)) r.indexOf(a) < 0 && f.call(e, a) && (o[a] = e[a]);
  return o;
};
import { Q as g, e as m } from './index-DTTOaJYD.js';
import { J as w } from './JupiterService-DZaWMIqf.js';
import { u as I } from './useKswapSdk-CDkxmQxX.js';
import { S as E } from './vendor-DpenelXu.js';
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
      r = new e.Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = 'ff87df54-61e0-4cdb-8b9f-63aa30bc7e8d'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-ff87df54-61e0-4cdb-8b9f-63aa30bc7e8d'));
  } catch (o) {}
})();
function Q({ inputMint: e, outputMint: r, enabled: o = !0 }) {
  const { kswapSdk: a } = I(),
    i = async () => w.getPrice(a, e, r),
    d = E({
      queryKey: g.getJupiterPrice(e, r),
      enabled: !!e && !!r && !!a && o,
      queryFn: i,
      onError: (l) => {
        m(l);
      },
      refetchInterval: 1e4,
    }),
    { data: b } = d,
    y = c(d, ['data']);
  return u({ data: b || 1 }, y);
}
export { Q as u };
//# sourceMappingURL=useJupiterPriceQuery-C00Tb9hf.js.map
