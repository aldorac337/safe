import { i as h, h as f, d as p, x as g } from './index-6823ac84.js';
import { n as c, c as u } from './if-defined-5ea4ccf2.js';
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
      (e._sentryDebugIds[t] = '0f2375c5-619e-473f-a753-98843b28cc7b'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-0f2375c5-619e-473f-a753-98843b28cc7b'));
  } catch {}
})();
const y = h`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;
var d =
  (globalThis && globalThis.__decorate) ||
  function (e, t, o, r) {
    var a = arguments.length,
      s = a < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, o)) : r,
      n;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      s = Reflect.decorate(e, t, o, r);
    else
      for (var l = e.length - 1; l >= 0; l--)
        (n = e[l]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, o, s) : n(t, o)) || s);
    return a > 3 && s && Object.defineProperty(t, o, s), s;
  };
let i = class extends p {
  constructor() {
    super(...arguments), (this.color = 'accent-100'), (this.size = 'lg');
  }
  render() {
    return (
      (this.style.cssText = `--local-color: ${this.color === 'inherit' ? 'inherit' : `var(--wui-color-${this.color})`}`),
      (this.dataset.size = this.size),
      g`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`
    );
  }
};
i.styles = [f, y];
d([c()], i.prototype, 'color', void 0);
d([c()], i.prototype, 'size', void 0);
i = d([u('wui-loading-spinner')], i);
