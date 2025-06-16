import { i as b, h as g, n as v, d as h, x as l } from './index-84fa2459.js';
import { n, c as w } from './if-defined-0db99fa5.js';
import './index-ad14d90f.js';
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
      a = new t.Error().stack;
    a &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[a] = '094a1169-0d2a-464f-840b-ee548dcc719b'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-094a1169-0d2a-464f-840b-ee548dcc719b'));
  } catch {}
})();
const p = b`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;
var r =
  (globalThis && globalThis.__decorate) ||
  function (t, a, e, s) {
    var c = arguments.length,
      i = c < 3 ? a : s === null ? (s = Object.getOwnPropertyDescriptor(a, e)) : s,
      d;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(t, a, e, s);
    else
      for (var u = t.length - 1; u >= 0; u--)
        (d = t[u]) && (i = (c < 3 ? d(i) : c > 3 ? d(a, e, i) : d(a, e)) || i);
    return c > 3 && i && Object.defineProperty(a, e, i), i;
  };
let o = class extends h {
  constructor() {
    super(...arguments),
      (this.variant = 'accent'),
      (this.imageSrc = ''),
      (this.disabled = !1),
      (this.icon = 'externalLink'),
      (this.size = 'md'),
      (this.text = '');
  }
  render() {
    const a = this.size === 'sm' ? 'small-600' : 'paragraph-600';
    return l`
      <button
        class=${this.disabled ? 'disabled' : ''}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc ? l`<wui-image src=${this.imageSrc}></wui-image>` : null}
        <wui-text variant=${a} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `;
  }
};
o.styles = [g, v, p];
r([n()], o.prototype, 'variant', void 0);
r([n()], o.prototype, 'imageSrc', void 0);
r([n({ type: Boolean })], o.prototype, 'disabled', void 0);
r([n()], o.prototype, 'icon', void 0);
r([n()], o.prototype, 'size', void 0);
r([n()], o.prototype, 'text', void 0);
o = r([w('wui-chip-button')], o);
