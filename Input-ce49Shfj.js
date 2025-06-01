var v = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty,
  g = Object.prototype.propertyIsEnumerable;
var x = (e, s, n) =>
    s in e ? v(e, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[s] = n),
  w = (e, s) => {
    for (var n in s || (s = {})) y.call(s, n) && x(e, n, s[n]);
    if (l) for (var n of l(s)) g.call(s, n) && x(e, n, s[n]);
    return e;
  };
var h = (e, s) => {
  var n = {};
  for (var t in e) y.call(e, t) && s.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && l) for (var t of l(e)) s.indexOf(t) < 0 && g.call(e, t) && (n[t] = e[t]);
  return n;
};
import { r as _, j as r, w as z } from './vendor-DpenelXu.js';
import { f as I } from './index-DTTOaJYD.js';
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
      s = new e.Error().stack;
    s &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[s] = '08d39b17-bddd-4515-a6b9-442fd120bec2'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-08d39b17-bddd-4515-a6b9-442fd120bec2'));
  } catch (n) {}
})();
const N = '_label_27r13_1',
  E = '_container_27r13_4',
  R = '__disabled_27r13_13',
  T = '_icon_27r13_25',
  M = '_prefix_27r13_28',
  k = '_input_27r13_31',
  C = {
    label: N,
    container: E,
    _disabled: R,
    '_size-large': '__size-large_27r13_16',
    '_size-medium': '__size-medium_27r13_19',
    '_size-small': '__size-small_27r13_22',
    icon: T,
    prefix: M,
    input: k,
  },
  o = z(C),
  q = _.forwardRef((e, s) => {
    const m = e,
      {
        size: n = 'medium',
        className: t,
        containerClassname: D,
        disabled: c,
        prefix: f,
        suffix: p,
        label: a,
        onMouseDown: d,
        autoFocus: b,
      } = m,
      j = h(m, [
        'size',
        'className',
        'containerClassname',
        'disabled',
        'prefix',
        'suffix',
        'label',
        'onMouseDown',
        'autoFocus',
      ]),
      u = _.useRef(null);
    return (
      _.useEffect(() => {
        b &&
          setTimeout(() => {
            u.current && u.current.focus();
          }, 0);
      }, [b]),
      r.jsxs('label', {
        className: o(t),
        children: [
          a &&
            (typeof a != 'string'
              ? a
              : r.jsx(I, {
                  fs: 14,
                  lh: 18,
                  className: o('label'),
                  color: c ? 'grey-deep' : 'grey',
                  children: a,
                })),
          r.jsxs('div', {
            className: o('container', D, { size: n, disabled: c }),
            onMouseDown: (i) => {
              i.preventDefault(), s && typeof s == 'object' && s.current && s.current.focus();
            },
            children: [
              r.jsx(
                'input',
                w(
                  {
                    onMouseDown: (i) => {
                      i.stopPropagation(), d == null || d(i);
                    },
                    ref: u,
                    className: o('input', { size: n }),
                    disabled: c,
                  },
                  j
                )
              ),
              f &&
                r.jsx('div', {
                  onMouseDown: (i) => i.preventDefault(),
                  className: o('icon', 'prefix'),
                  children: f,
                }),
              p &&
                r.jsx('div', {
                  onMouseDown: (i) => i.preventDefault(),
                  className: o('icon'),
                  children: p,
                }),
            ],
          }),
        ],
      })
    );
  });
export { q as I };
//# sourceMappingURL=Input-ce49Shfj.js.map
