import { i as u, h as b, n as f, d as p, x as g } from './index-84fa2459.js';
import { n as c, c as y, o as h } from './if-defined-0db99fa5.js';
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
      (e._sentryDebugIds[t] = 'd2677628-a1de-4a57-93c9-612740fe58cd'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-d2677628-a1de-4a57-93c9-612740fe58cd'));
  } catch {}
})();
const v = u`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;
var a =
  (globalThis && globalThis.__decorate) ||
  function (e, t, r, s) {
    var i = arguments.length,
      o = i < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, r)) : s,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      o = Reflect.decorate(e, t, r, s);
    else
      for (var d = e.length - 1; d >= 0; d--)
        (l = e[d]) && (o = (i < 3 ? l(o) : i > 3 ? l(t, r, o) : l(t, r)) || o);
    return i > 3 && o && Object.defineProperty(t, r, o), o;
  };
let n = class extends p {
  constructor() {
    super(...arguments), (this.tabIdx = void 0), (this.disabled = !1), (this.color = 'inherit');
  }
  render() {
    return g`
      <button ?disabled=${this.disabled} tabindex=${h(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
  }
};
n.styles = [b, f, v];
a([c()], n.prototype, 'tabIdx', void 0);
a([c({ type: Boolean })], n.prototype, 'disabled', void 0);
a([c()], n.prototype, 'color', void 0);
n = a([y('wui-link')], n);
