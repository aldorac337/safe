import {
  bf as i,
  aN as n,
  bb as d,
  bm as b,
  bs as f,
  bt as c,
  bu as l,
  bl as p,
  bg as h,
  bk as I,
  bq as g,
  bj as y,
  bo as w,
  bn as m,
  bp as u,
  br as x,
  bh as E,
  bi as T,
} from './index-1f238f57.js';
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
      e = new a.Error().stack;
    e &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[e] = 'bc6bccfc-aa6d-43c0-9ca9-19fd792d7406'),
      (a._sentryDebugIdIdentifier = 'sentry-dbid-bc6bccfc-aa6d-43c0-9ca9-19fd792d7406'));
  } catch {}
})();
const t = `
@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 300 600;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/InterVariable.woff2") format("woff2-variations");
}
`;
export {
  t as InterVar,
  i as ProviderRpcError,
  n as ProviderRpcErrorCode,
  d as bigIntToHex,
  b as chainIdToViemImport,
  f as chainIdValidation,
  c as chainNamespaceValidation,
  l as chainValidation,
  p as createDownloadMessage,
  h as createEIP1193Provider,
  I as ethToWeiBigInt,
  g as fromHex,
  y as isAddress,
  w as isHex,
  m as parseEther,
  u as toHex,
  x as validate,
  E as weiHexToEth,
  T as weiToEth,
};
