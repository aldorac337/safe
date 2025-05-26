var b = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty,
  f = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) =>
    r in e ? b(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[r] = o),
  c = (e, r) => {
    for (var o in r || (r = {})) d.call(r, o) && t(e, o, r[o]);
    if (a) for (var o of a(r)) f.call(r, o) && t(e, o, r[o]);
    return e;
  };
var u = (e, r) => {
  var o = {};
  for (var s in e) d.call(e, s) && r.indexOf(s) < 0 && (o[s] = e[s]);
  if (e != null && a) for (var s of a(e)) r.indexOf(s) < 0 && f.call(e, s) && (o[s] = e[s]);
  return o;
};
import { Q as g, e as m } from './index-CroKpwmf.js';
import { J as w } from './JupiterService-DgkMwrEN.js';
import { u as I } from './useKswapSdk-6qh4k4RZ.js';
import { S as E } from './vendor-S4AjIOSE.js';
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
      (e._sentryDebugIds[r] = '737cfdf1-e041-4e76-a7e1-fc5e11c91878'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-737cfdf1-e041-4e76-a7e1-fc5e11c91878'));
  } catch (o) {}
})();
function Q({ inputMint: e, outputMint: r, enabled: o = !0 }) {
  const { kswapSdk: s } = I(),
    i = async () => w.getPrice(s, e, r),
    n = E({
      queryKey: g.getJupiterPrice(e, r),
      enabled: !!e && !!r && !!s && o,
      queryFn: i,
      onError: (p) => {
        m(p);
      },
      refetchInterval: 1e4,
    }),
    { data: y } = n,
    l = u(n, ['data']);
  return c({ data: y || 1 }, l);
}
export { Q as u };
//# sourceMappingURL=useJupiterPriceQuery-CWRiqL8a.js.map
