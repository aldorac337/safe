import { i as g, h, n as p, d as f, x as v } from './index-6823ac84.js';
import { n as c, c as y } from './if-defined-5ea4ccf2.js';
(function () {
  try {
    var i =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      o = new i.Error().stack;
    o &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[o] = '736c1a1f-3191-4ac2-bc4a-6bb991213cc0'),
      (i._sentryDebugIdIdentifier = 'sentry-dbid-736c1a1f-3191-4ac2-bc4a-6bb991213cc0'));
  } catch {}
})();
const x = g`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;
var s =
  (globalThis && globalThis.__decorate) ||
  function (i, o, t, a) {
    var d = arguments.length,
      e = d < 3 ? o : a === null ? (a = Object.getOwnPropertyDescriptor(o, t)) : a,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      e = Reflect.decorate(i, o, t, a);
    else
      for (var n = i.length - 1; n >= 0; n--)
        (l = i[n]) && (e = (d < 3 ? l(e) : d > 3 ? l(o, t, e) : l(o, t)) || e);
    return d > 3 && e && Object.defineProperty(o, t, e), e;
  };
let r = class extends f {
  constructor() {
    super(...arguments),
      (this.size = 'md'),
      (this.backgroundColor = 'accent-100'),
      (this.iconColor = 'accent-100'),
      (this.background = 'transparent'),
      (this.border = !1),
      (this.borderColor = 'wui-color-bg-125'),
      (this.icon = 'copy');
  }
  render() {
    const o = this.iconSize || this.size,
      t = this.size === 'lg',
      a = this.size === 'xl',
      d = t ? '12%' : '16%',
      e = t ? 'xxs' : a ? 's' : '3xl',
      l = this.background === 'gray',
      n = this.background === 'opaque',
      u =
        (this.backgroundColor === 'accent-100' && n) ||
        (this.backgroundColor === 'success-100' && n) ||
        (this.backgroundColor === 'error-100' && n) ||
        (this.backgroundColor === 'inverse-100' && n);
    let b = `var(--wui-color-${this.backgroundColor})`;
    return (
      u
        ? (b = `var(--wui-icon-box-bg-${this.backgroundColor})`)
        : l && (b = `var(--wui-color-gray-${this.backgroundColor})`),
      (this.style.cssText = `
       --local-bg-value: ${b};
       --local-bg-mix: ${u || l ? '100%' : d};
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor === 'wui-color-bg-125' ? '2px' : '1px'} solid ${this.border ? `var(--${this.borderColor})` : 'transparent'}
   `),
      v` <wui-icon color=${this.iconColor} size=${o} name=${this.icon}></wui-icon> `
    );
  }
};
r.styles = [h, p, x];
s([c()], r.prototype, 'size', void 0);
s([c()], r.prototype, 'backgroundColor', void 0);
s([c()], r.prototype, 'iconColor', void 0);
s([c()], r.prototype, 'iconSize', void 0);
s([c()], r.prototype, 'background', void 0);
s([c({ type: Boolean })], r.prototype, 'border', void 0);
s([c()], r.prototype, 'borderColor', void 0);
s([c()], r.prototype, 'icon', void 0);
r = s([y('wui-icon-box')], r);
