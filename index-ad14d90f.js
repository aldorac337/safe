import { i as h, h as f, _ as u, d as b, x as p } from './index-84fa2459.js';
import { n as d, c as g } from './if-defined-0db99fa5.js';
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
      (e._sentryDebugIds[t] = '5f2f00b1-75f4-46d9-bc7c-e5855695c530'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-5f2f00b1-75f4-46d9-bc7c-e5855695c530'));
  } catch {}
})();
const y = h`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;
var c =
  (globalThis && globalThis.__decorate) ||
  function (e, t, s, r) {
    var n = arguments.length,
      i = n < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, s)) : r,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(e, t, s, r);
    else
      for (var a = e.length - 1; a >= 0; a--)
        (l = e[a]) && (i = (n < 3 ? l(i) : n > 3 ? l(t, s, i) : l(t, s)) || i);
    return n > 3 && i && Object.defineProperty(t, s, i), i;
  };
let o = class extends b {
  constructor() {
    super(...arguments),
      (this.src = './path/to/image.jpg'),
      (this.alt = 'Image'),
      (this.size = void 0);
  }
  render() {
    return (
      (this.style.cssText = `
      --local-width: ${this.size ? `var(--wui-icon-size-${this.size});` : '100%'};
      --local-height: ${this.size ? `var(--wui-icon-size-${this.size});` : '100%'};
      `),
      p`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`
    );
  }
  handleImageError() {
    this.dispatchEvent(new CustomEvent('onLoadError', { bubbles: !0, composed: !0 }));
  }
};
o.styles = [f, u, y];
c([d()], o.prototype, 'src', void 0);
c([d()], o.prototype, 'alt', void 0);
c([d()], o.prototype, 'size', void 0);
o = c([g('wui-image')], o);
