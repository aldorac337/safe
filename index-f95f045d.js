import { i as u, h as b, n as p, _ as f, d as g, x as y } from './index-6823ac84.js';
import { n as l, c as h } from './if-defined-5ea4ccf2.js';
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
      o = new e.Error().stack;
    o &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[o] = '59ace90f-a7ed-436a-a234-05871a992a1e'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-59ace90f-a7ed-436a-a234-05871a992a1e'));
  } catch {}
})();
const w = u`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;
var s =
  (globalThis && globalThis.__decorate) ||
  function (e, o, i, r) {
    var a = arguments.length,
      t = a < 3 ? o : r === null ? (r = Object.getOwnPropertyDescriptor(o, i)) : r,
      d;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(e, o, i, r);
    else
      for (var c = e.length - 1; c >= 0; c--)
        (d = e[c]) && (t = (a < 3 ? d(t) : a > 3 ? d(o, i, t) : d(o, i)) || t);
    return a > 3 && t && Object.defineProperty(o, i, t), t;
  };
let n = class extends g {
  constructor() {
    super(...arguments),
      (this.size = 'md'),
      (this.disabled = !1),
      (this.icon = 'copy'),
      (this.iconColor = 'inherit');
  }
  render() {
    const o = this.size === 'lg' ? '--wui-border-radius-xs' : '--wui-border-radius-xxs',
      i = this.size === 'lg' ? '--wui-spacing-1xs' : '--wui-spacing-2xs';
    return (
      (this.style.cssText = `
    --local-border-radius: var(${o});
    --local-padding: var(${i});
`),
      y`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `
    );
  }
};
n.styles = [b, p, f, w];
s([l()], n.prototype, 'size', void 0);
s([l({ type: Boolean })], n.prototype, 'disabled', void 0);
s([l()], n.prototype, 'icon', void 0);
s([l()], n.prototype, 'iconColor', void 0);
n = s([h('wui-icon-link')], n);
