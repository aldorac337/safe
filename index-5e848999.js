import {
  A as d,
  l as w,
  m as _,
  R as f,
  C as b,
  S as y,
  k as c,
  w as T,
  j as E,
  i as v,
  h as m,
  d as x,
  x as h,
  n as $,
} from './index-84fa2459.js';
import { n as u, c as C, o as I } from './if-defined-0db99fa5.js';
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
      (e._sentryDebugIds[t] = '4105c8e7-8053-4ec3-b2fb-3fcf83e6c492'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-4105c8e7-8053-4ec3-b2fb-3fcf83e6c492'));
  } catch {}
})();
function R() {
  try {
    return c.returnOpenHref(
      `${E.SECURE_SITE_SDK_ORIGIN}/loading`,
      'popupWindow',
      'width=600,height=800,scrollbars=yes'
    );
  } catch {
    throw new Error('Could not open social popup');
  }
}
async function j() {
  f.push('ConnectingFarcaster');
  const e = b.getAuthConnector();
  if (e && !d.state.farcasterUrl)
    try {
      const { url: t } = await e.provider.getFarcasterUri();
      d.setFarcasterUrl(t, w.state.activeChain);
    } catch (t) {
      f.goBack(), y.showError(t);
    }
}
async function O(e) {
  f.push('ConnectingSocial');
  const t = b.getAuthConnector();
  let o = null;
  try {
    const i = setTimeout(() => {
      throw new Error('Social login timed out. Please try again.');
    }, 45e3);
    if (t && e) {
      if ((c.isTelegram() || (o = R()), o)) d.setSocialWindow(o, w.state.activeChain);
      else if (!c.isTelegram()) throw new Error('Could not create social popup');
      const { uri: n } = await t.provider.getSocialRedirectUri({ provider: e });
      if (!n) throw (o?.close(), new Error('Could not fetch the social redirect uri'));
      if ((o && (o.location.href = n), c.isTelegram())) {
        T.setTelegramSocialProvider(e);
        const r = c.formatTelegramSocialLoginUrl(n);
        c.openHref(r, '_top');
      }
      clearTimeout(i);
    }
  } catch (i) {
    o?.close(), y.showError(i?.message);
  }
}
async function A(e) {
  d.setSocialProvider(e, w.state.activeChain),
    _.sendEvent({ type: 'track', event: 'SOCIAL_LOGIN_STARTED', properties: { provider: e } }),
    e === 'farcaster' ? await j() : await O(e);
}
const U = v`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;
var S =
  (globalThis && globalThis.__decorate) ||
  function (e, t, o, i) {
    var n = arguments.length,
      r = n < 3 ? t : i === null ? (i = Object.getOwnPropertyDescriptor(t, o)) : i,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      r = Reflect.decorate(e, t, o, i);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, o, r) : a(t, o)) || r);
    return n > 3 && r && Object.defineProperty(t, o, r), r;
  };
let p = class extends x {
  constructor() {
    super(...arguments), (this.logo = 'google');
  }
  render() {
    return h`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `;
  }
};
p.styles = [m, U];
S([u()], p.prototype, 'logo', void 0);
p = S([C('wui-logo')], p);
const D = v`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;
var g =
  (globalThis && globalThis.__decorate) ||
  function (e, t, o, i) {
    var n = arguments.length,
      r = n < 3 ? t : i === null ? (i = Object.getOwnPropertyDescriptor(t, o)) : i,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      r = Reflect.decorate(e, t, o, i);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, o, r) : a(t, o)) || r);
    return n > 3 && r && Object.defineProperty(t, o, r), r;
  };
let l = class extends x {
  constructor() {
    super(...arguments),
      (this.logo = 'google'),
      (this.name = 'Continue with google'),
      (this.align = 'left'),
      (this.disabled = !1);
  }
  render() {
    return h`
      <button ?disabled=${this.disabled} tabindex=${I(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `;
  }
  templatePlacement() {
    return this.align === 'center'
      ? h` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`
      : null;
  }
};
l.styles = [m, $, D];
g([u()], l.prototype, 'logo', void 0);
g([u()], l.prototype, 'name', void 0);
g([u()], l.prototype, 'align', void 0);
g([u()], l.prototype, 'tabIdx', void 0);
g([u({ type: Boolean })], l.prototype, 'disabled', void 0);
l = g([C('wui-list-social')], l);
export { A as e };
