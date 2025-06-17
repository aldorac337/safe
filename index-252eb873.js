import { i as u, d as b, x as g } from './index-84fa2459.js';
import { n, c as h } from './if-defined-0db99fa5.js';
(function () {
  try {
    var r =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      o = new r.Error().stack;
    o &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[o] = '354c555a-d5d4-451a-aca0-79665f0744d5'),
      (r._sentryDebugIdIdentifier = 'sentry-dbid-354c555a-d5d4-451a-aca0-79665f0744d5'));
  } catch {}
})();
const f = u`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;
var a =
  (globalThis && globalThis.__decorate) ||
  function (r, o, t, s) {
    var d = arguments.length,
      i = d < 3 ? o : s === null ? (s = Object.getOwnPropertyDescriptor(o, t)) : s,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(r, o, t, s);
    else
      for (var c = r.length - 1; c >= 0; c--)
        (l = r[c]) && (i = (d < 3 ? l(i) : d > 3 ? l(o, t, i) : l(o, t)) || i);
    return d > 3 && i && Object.defineProperty(o, t, i), i;
  };
let e = class extends b {
  constructor() {
    super(...arguments),
      (this.width = ''),
      (this.height = ''),
      (this.borderRadius = 'm'),
      (this.variant = 'default');
  }
  render() {
    return (
      (this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `),
      g`<slot></slot>`
    );
  }
};
e.styles = [f];
a([n()], e.prototype, 'width', void 0);
a([n()], e.prototype, 'height', void 0);
a([n()], e.prototype, 'borderRadius', void 0);
a([n()], e.prototype, 'variant', void 0);
e = a([h('wui-shimmer')], e);
