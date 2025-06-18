import {
  G as k,
  I as C,
  J as $,
  i as b,
  h as x,
  d,
  x as s,
  O as c,
  n as _,
} from './index-6823ac84.js';
import { n as T, c as f, o as R, r as O } from './if-defined-5ea4ccf2.js';
import { e as j, n as P } from './ref-51923e9b.js';
import { R as U } from './ConstantsUtil-30faab72.js';
(function () {
  try {
    var o =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new o.Error().stack;
    e &&
      ((o._sentryDebugIds = o._sentryDebugIds || {}),
      (o._sentryDebugIds[e] = '60a7884e-78d0-4eea-8e87-af65ee8ab6eb'),
      (o._sentryDebugIdIdentifier = 'sentry-dbid-60a7884e-78d0-4eea-8e87-af65ee8ab6eb'));
  } catch {}
})();
const u = k({ isLegalCheckboxChecked: !1 }),
  g = {
    state: u,
    subscribe(o) {
      return C(u, () => o(u));
    },
    subscribeKey(o, e) {
      return $(u, o, e);
    },
    setIsLegalCheckboxChecked(o) {
      u.isLegalCheckboxChecked = o;
    },
  },
  E = b`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;
var m =
  (globalThis && globalThis.__decorate) ||
  function (o, e, n, r) {
    var i = arguments.length,
      t = i < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, n)) : r,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(o, e, n, r);
    else
      for (var a = o.length - 1; a >= 0; a--)
        (l = o[a]) && (t = (i < 3 ? l(t) : i > 3 ? l(e, n, t) : l(e, n)) || t);
    return i > 3 && t && Object.defineProperty(e, n, t), t;
  };
let h = class extends d {
  constructor() {
    super(...arguments), (this.inputElementRef = j()), (this.checked = void 0);
  }
  render() {
    return s`
      <label>
        <input
          ${P(this.inputElementRef)}
          ?checked=${R(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `;
  }
  dispatchChangeEvent() {
    this.dispatchEvent(
      new CustomEvent('checkboxChange', {
        detail: this.inputElementRef.value?.checked,
        bubbles: !0,
        composed: !0,
      })
    );
  }
};
h.styles = [x, E];
m([T({ type: Boolean })], h.prototype, 'checked', void 0);
h = m([f('wui-checkbox')], h);
const L = b`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;
var v =
  (globalThis && globalThis.__decorate) ||
  function (o, e, n, r) {
    var i = arguments.length,
      t = i < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, n)) : r,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(o, e, n, r);
    else
      for (var a = o.length - 1; a >= 0; a--)
        (l = o[a]) && (t = (i < 3 ? l(t) : i > 3 ? l(e, n, t) : l(e, n)) || t);
    return i > 3 && t && Object.defineProperty(e, n, t), t;
  };
let p = class extends d {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.checked = g.state.isLegalCheckboxChecked),
      this.unsubscribe.push(
        g.subscribeKey('isLegalCheckboxChecked', (e) => {
          this.checked = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = c.state,
      r = c.state.features?.legalCheckbox;
    return (!e && !n) || !r
      ? null
      : s`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = c.state;
    return e && n ? 'and' : '';
  }
  termsTemplate() {
    const { termsConditionsUrl: e } = c.state;
    return e ? s`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>` : null;
  }
  privacyTemplate() {
    const { privacyPolicyUrl: e } = c.state;
    return e ? s`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>` : null;
  }
  onCheckboxChange() {
    g.setIsLegalCheckboxChecked(!this.checked);
  }
};
p.styles = [L];
v([O()], p.prototype, 'checked', void 0);
p = v([f('w3m-legal-checkbox')], p);
const D = b`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;
var I =
  (globalThis && globalThis.__decorate) ||
  function (o, e, n, r) {
    var i = arguments.length,
      t = i < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, n)) : r,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(o, e, n, r);
    else
      for (var a = o.length - 1; a >= 0; a--)
        (l = o[a]) && (t = (i < 3 ? l(t) : i > 3 ? l(e, n, t) : l(e, n)) || t);
    return i > 3 && t && Object.defineProperty(e, n, t), t;
  };
let w = class extends d {
  render() {
    return s`
      <a href=${U} rel="noreferrer" target="_blank" style="text-decoration: none;">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${['0', '0', 'l', '0']}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `;
  }
};
w.styles = [x, _, D];
w = I([f('wui-ux-by-reown')], w);
const B = b`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: var(--wui-spacing-m);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;
var W =
  (globalThis && globalThis.__decorate) ||
  function (o, e, n, r) {
    var i = arguments.length,
      t = i < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, n)) : r,
      l;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(o, e, n, r);
    else
      for (var a = o.length - 1; a >= 0; a--)
        (l = o[a]) && (t = (i < 3 ? l(t) : i > 3 ? l(e, n, t) : l(e, n)) || t);
    return i > 3 && t && Object.defineProperty(e, n, t), t;
  };
let y = class extends d {
  render() {
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = c.state,
      r = c.state.features?.legalCheckbox;
    return (!e && !n) || r
      ? s`
        <wui-flex flexDirection="column">
          <wui-ux-by-reown class="branding-only"></wui-ux-by-reown>
        </wui-flex>
      `
      : s`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${['m', 's', 's', 's']} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl: e, privacyPolicyUrl: n } = c.state;
    return e && n ? 'and' : '';
  }
  termsTemplate() {
    const { termsConditionsUrl: e } = c.state;
    return e ? s`<a href=${e}>Terms of Service</a>` : null;
  }
  privacyTemplate() {
    const { privacyPolicyUrl: e } = c.state;
    return e ? s`<a href=${e}>Privacy Policy</a>` : null;
  }
};
y.styles = [B];
y = W([f('w3m-legal-footer')], y);
export { g as O };
