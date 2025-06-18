import { i as b, h, n as g, d as w, x as s } from './index-6823ac84.js';
import { n as e, c as v, o as p } from './if-defined-5ea4ccf2.js';
import './index-61a8f674.js';
import './index-6dd11eb1.js';
import './index-66bb34ae.js';
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
      t = new a.Error().stack;
    t &&
      ((a._sentryDebugIds = a._sentryDebugIds || {}),
      (a._sentryDebugIds[t] = 'b91d5637-af70-436d-a22a-8a37f821542a'),
      (a._sentryDebugIdIdentifier = 'sentry-dbid-b91d5637-af70-436d-a22a-8a37f821542a'));
  } catch {}
})();
const f = b`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
var o =
  (globalThis && globalThis.__decorate) ||
  function (a, t, n, u) {
    var l = arguments.length,
      r = l < 3 ? t : u === null ? (u = Object.getOwnPropertyDescriptor(t, n)) : u,
      d;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      r = Reflect.decorate(a, t, n, u);
    else
      for (var c = a.length - 1; c >= 0; c--)
        (d = a[c]) && (r = (l < 3 ? d(r) : l > 3 ? d(t, n, r) : d(t, n)) || r);
    return l > 3 && r && Object.defineProperty(t, n, r), r;
  };
let i = class extends w {
  constructor() {
    super(...arguments),
      (this.tabIdx = void 0),
      (this.variant = 'icon'),
      (this.disabled = !1),
      (this.imageSrc = void 0),
      (this.alt = void 0),
      (this.chevron = !1),
      (this.loading = !1);
  }
  render() {
    return s`
      <button
        ?disabled=${this.loading ? !0 : !!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${p(this.iconVariant)}
        tabindex=${p(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `;
  }
  visualTemplate() {
    if (this.variant === 'image' && this.imageSrc)
      return s`<wui-image src=${this.imageSrc} alt=${this.alt ?? 'list item'}></wui-image>`;
    if (this.iconVariant === 'square' && this.icon && this.variant === 'icon')
      return s`<wui-icon name=${this.icon}></wui-icon>`;
    if (this.variant === 'icon' && this.icon && this.iconVariant) {
      const t = ['blue', 'square-blue'].includes(this.iconVariant) ? 'accent-100' : 'fg-200',
        n = this.iconVariant === 'square-blue' ? 'mdl' : 'md',
        u = this.iconSize ? this.iconSize : n;
      return s`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${u}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${n}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  loadingTemplate() {
    return this.loading
      ? s`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`
      : s``;
  }
  chevronTemplate() {
    return this.chevron
      ? s`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`
      : null;
  }
};
i.styles = [h, g, f];
o([e()], i.prototype, 'icon', void 0);
o([e()], i.prototype, 'iconSize', void 0);
o([e()], i.prototype, 'tabIdx', void 0);
o([e()], i.prototype, 'variant', void 0);
o([e()], i.prototype, 'iconVariant', void 0);
o([e({ type: Boolean })], i.prototype, 'disabled', void 0);
o([e()], i.prototype, 'imageSrc', void 0);
o([e()], i.prototype, 'alt', void 0);
o([e({ type: Boolean })], i.prototype, 'chevron', void 0);
o([e({ type: Boolean })], i.prototype, 'loading', void 0);
i = o([v('wui-list-item')], i);
