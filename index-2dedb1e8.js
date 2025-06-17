import { i as u, h as g, d as b, x as v } from './index-84fa2459.js';
import { n as l, c as f } from './if-defined-0db99fa5.js';
(function () {
  try {
    var t =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      r = new t.Error().stack;
    r &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[r] = '3666b5c6-9ddd-4cd6-aad6-46d659cdbcc6'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-3666b5c6-9ddd-4cd6-aad6-46d659cdbcc6'));
  } catch {}
})();
const h = u`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;
var d =
  (globalThis && globalThis.__decorate) ||
  function (t, r, o, i) {
    var s = arguments.length,
      a = s < 3 ? r : i === null ? (i = Object.getOwnPropertyDescriptor(r, o)) : i,
      n;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      a = Reflect.decorate(t, r, o, i);
    else
      for (var c = t.length - 1; c >= 0; c--)
        (n = t[c]) && (a = (s < 3 ? n(a) : s > 3 ? n(r, o, a) : n(r, o)) || a);
    return s > 3 && a && Object.defineProperty(r, o, a), a;
  };
let e = class extends b {
  constructor() {
    super(...arguments), (this.variant = 'main'), (this.size = 'lg');
  }
  render() {
    (this.dataset.variant = this.variant), (this.dataset.size = this.size);
    const r = this.size === 'md' ? 'mini-700' : 'micro-700';
    return v`
      <wui-text data-variant=${this.variant} variant=${r} color="inherit">
        <slot></slot>
      </wui-text>
    `;
  }
};
e.styles = [g, h];
d([l()], e.prototype, 'variant', void 0);
d([l()], e.prototype, 'size', void 0);
e = d([f('wui-tag')], e);
