import { i as f, d as u, R as p, M as b, x as c } from './index-6823ac84.js';
import { n as g, r as y, c as w } from './if-defined-5ea4ccf2.js';
import { T as l } from './index-dbdf50e2.js';
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
      (t._sentryDebugIds[e] = '049e7c69-185c-42f0-9fd1-fba7eea0542a'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-049e7c69-185c-42f0-9fd1-fba7eea0542a'));
  } catch {}
})();
const R = {
    interpolate(t, e, n) {
      if (t.length !== 2 || e.length !== 2)
        throw new Error('inputRange and outputRange must be an array of length 2');
      const i = t[0] || 0,
        r = t[1] || 0,
        o = e[0] || 0,
        s = e[1] || 0;
      return n < i ? o : n > r ? s : ((s - o) / (r - i)) * (n - i) + o;
    },
  },
  m = f`
  :host {
    width: 100%;
    display: block;
  }
`;
var h =
  (globalThis && globalThis.__decorate) ||
  function (t, e, n, i) {
    var r = arguments.length,
      o = r < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, n)) : i,
      s;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      o = Reflect.decorate(t, e, n, i);
    else
      for (var d = t.length - 1; d >= 0; d--)
        (s = t[d]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, n, o) : s(e, n)) || o);
    return r > 3 && o && Object.defineProperty(e, n, o), o;
  };
let a = class extends u {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.text = ''),
      (this.open = l.state.open),
      this.unsubscribe.push(
        p.subscribeKey('view', () => {
          l.hide();
        }),
        b.subscribeKey('open', (e) => {
          e || l.hide();
        }),
        l.subscribeKey('open', (e) => {
          this.open = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), l.hide();
  }
  render() {
    return c`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `;
  }
  renderChildren() {
    return c`<slot></slot> `;
  }
  onMouseEnter() {
    const e = this.getBoundingClientRect();
    this.open ||
      l.showTooltip({
        message: this.text,
        triggerRect: { width: e.width, height: e.height, left: e.left, top: e.top },
        variant: 'shade',
      });
  }
  onMouseLeave(e) {
    this.contains(e.relatedTarget) || l.hide();
  }
};
a.styles = [m];
h([g()], a.prototype, 'text', void 0);
h([y()], a.prototype, 'open', void 0);
a = h([w('w3m-tooltip-trigger')], a);
export { R as M };
