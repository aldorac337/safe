import { i as f, h as c, d as b, x as p } from './index-6823ac84.js';
import { n as u, c as m, o as y } from './if-defined-5ea4ccf2.js';
import './index-a137b8c5.js';
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
      (e._sentryDebugIds[t] = '8a3a581d-ffa0-4761-b596-07584b659937'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-8a3a581d-ffa0-4761-b596-07584b659937'));
  } catch {}
})();
const g = f`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;
var o =
  (globalThis && globalThis.__decorate) ||
  function (e, t, a, n) {
    var s = arguments.length,
      i = s < 3 ? t : n === null ? (n = Object.getOwnPropertyDescriptor(t, a)) : n,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(e, t, a, n);
    else
      for (var d = e.length - 1; d >= 0; d--)
        (l = e[d]) && (i = (s < 3 ? l(i) : s > 3 ? l(t, a, i) : l(t, a)) || i);
    return s > 3 && i && Object.defineProperty(t, a, i), i;
  };
let r = class extends b {
  constructor() {
    super(...arguments), (this.disabled = !1);
  }
  render() {
    return p`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${y(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `;
  }
  templateError() {
    return this.errorMessage
      ? p`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`
      : null;
  }
};
r.styles = [c, g];
o([u()], r.prototype, 'errorMessage', void 0);
o([u({ type: Boolean })], r.prototype, 'disabled', void 0);
o([u()], r.prototype, 'value', void 0);
o([u()], r.prototype, 'tabIdx', void 0);
r = o([m('wui-email-input')], r);
