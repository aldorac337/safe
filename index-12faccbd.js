import { i as u, h, d as f, x as c } from './index-6823ac84.js';
import { n as b, c as g } from './if-defined-5ea4ccf2.js';
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
      e = new t.Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = 'd87cd7b4-e35a-4b34-81ea-48b84a46af53'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-d87cd7b4-e35a-4b34-81ea-48b84a46af53'));
  } catch {}
})();
const p = u`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var l =
  (globalThis && globalThis.__decorate) ||
  function (t, e, a, r) {
    var i = arguments.length,
      s = i < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, a)) : r,
      o;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      s = Reflect.decorate(t, e, a, r);
    else
      for (var d = t.length - 1; d >= 0; d--)
        (o = t[d]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, a, s) : o(e, a)) || s);
    return i > 3 && s && Object.defineProperty(e, a, s), s;
  };
let n = class extends f {
  constructor() {
    super(...arguments), (this.radius = 36);
  }
  render() {
    return this.svgLoaderTemplate();
  }
  svgLoaderTemplate() {
    const e = this.radius > 50 ? 50 : this.radius,
      r = 36 - e,
      i = 116 + r,
      s = 245 + r,
      o = 360 + r * 1.75;
    return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${s}"
          stroke-dashoffset=${o}
        />
      </svg>
    `;
  }
};
n.styles = [h, p];
l([b({ type: Number })], n.prototype, 'radius', void 0);
n = l([g('wui-loading-thumbnail')], n);
