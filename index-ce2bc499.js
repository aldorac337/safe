import { i as f, h as d, d as p, x as c } from './index-6823ac84.js';
import { n as g, c as b } from './if-defined-5ea4ccf2.js';
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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = '88f62d4d-acf9-4806-885f-ece776f3131c'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-88f62d4d-acf9-4806-885f-ece776f3131c'));
  } catch {}
})();
const h = f`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;
var u =
  (globalThis && globalThis.__decorate) ||
  function (e, t, r, n) {
    var i = arguments.length,
      o = i < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, r)) : n,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      o = Reflect.decorate(e, t, r, n);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (l = e[s]) && (o = (i < 3 ? l(o) : i > 3 ? l(t, r, o) : l(t, r)) || o);
    return i > 3 && o && Object.defineProperty(t, r, o), o;
  };
let a = class extends p {
  constructor() {
    super(...arguments), (this.text = '');
  }
  render() {
    return c`${this.template()}`;
  }
  template() {
    return this.text
      ? c`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`
      : null;
  }
};
a.styles = [d, h];
u([g()], a.prototype, 'text', void 0);
a = u([b('wui-separator')], a);
