import {
  i as v,
  d as f,
  M as R,
  x as l,
  C as U,
  T as E,
  e as D,
  f as _,
  h as W,
  j as $,
  E as u,
  A as h,
  k as I,
  l as j,
  m as x,
  W as T,
  S as M,
  R as k,
} from './index-84fa2459.js';
import { r as p, c as g, n as w, o as P } from './if-defined-0db99fa5.js';
import { N as z } from './index-9c521ce4.js';
import { e as H, n as V } from './ref-8a494c57.js';
import './index-a1f64d4e.js';
import './index-62d18e5a.js';
import './index-61d240bb.js';
import './index-2dedb1e8.js';
import './index-3a9c6927.js';
import './index-ca591eed.js';
import './index-159e9322.js';
import './index-ad14d90f.js';
(function () {
  try {
    var n =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new n.Error().stack;
    e &&
      ((n._sentryDebugIds = n._sentryDebugIds || {}),
      (n._sentryDebugIds[e] = 'df307445-cb71-40fd-9021-c75c714d0f56'),
      (n._sentryDebugIdIdentifier = 'sentry-dbid-df307445-cb71-40fd-9021-c75c714d0f56'));
  } catch {}
})();
const F = v`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;
var O =
  (globalThis && globalThis.__decorate) ||
  function (n, e, t, s) {
    var r = arguments.length,
      i = r < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
      o;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(n, e, t, s);
    else
      for (var a = n.length - 1; a >= 0; a--)
        (o = n[a]) && (i = (r < 3 ? o(i) : r > 3 ? o(e, t, i) : o(e, t)) || i);
    return r > 3 && i && Object.defineProperty(e, t, i), i;
  };
const S = 600,
  A = 360,
  B = 64;
let y = class extends f {
  constructor() {
    super(),
      (this.bodyObserver = void 0),
      (this.unsubscribe = []),
      (this.iframe = document.getElementById('w3m-iframe')),
      (this.ready = !1),
      this.unsubscribe.push(
        R.subscribeKey('open', (e) => {
          e || this.onHideIframe();
        }),
        R.subscribeKey('shake', (e) => {
          e
            ? (this.iframe.style.animation = 'w3m-shake 500ms var(--wui-ease-out-power-2)')
            : (this.iframe.style.animation = 'none');
        })
      );
  }
  disconnectedCallback() {
    this.onHideIframe(),
      this.unsubscribe.forEach((e) => e()),
      this.bodyObserver?.unobserve(window.document.body);
  }
  async firstUpdated() {
    await this.syncTheme(), (this.iframe.style.display = 'block');
    const e = this?.renderRoot?.querySelector('div');
    (this.bodyObserver = new ResizeObserver((t) => {
      const r = t?.[0]?.contentBoxSize?.[0]?.inlineSize;
      (this.iframe.style.height = `${S}px`),
        (e.style.height = `${S}px`),
        r && r <= 430
          ? ((this.iframe.style.width = '100%'),
            (this.iframe.style.left = '0px'),
            (this.iframe.style.bottom = '0px'),
            (this.iframe.style.top = 'unset'))
          : ((this.iframe.style.width = `${A}px`),
            (this.iframe.style.left = `calc(50% - ${A / 2}px)`),
            (this.iframe.style.top = `calc(50% - ${S / 2}px + ${B / 2}px)`),
            (this.iframe.style.bottom = 'unset')),
        (this.ready = !0),
        this.onShowIframe();
    })),
      this.bodyObserver.observe(window.document.body);
  }
  render() {
    return l`<div data-ready=${this.ready} id="w3m-frame-container"></div>`;
  }
  onShowIframe() {
    const e = window.innerWidth <= 430;
    this.iframe.style.animation = e
      ? 'w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)'
      : 'w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)';
  }
  onHideIframe() {
    (this.iframe.style.display = 'none'),
      (this.iframe.style.animation = 'w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)');
  }
  async syncTheme() {
    const e = U.getAuthConnector();
    if (e) {
      const t = E.getSnapshot().themeMode,
        s = E.getSnapshot().themeVariables;
      await e.provider.syncTheme({ themeVariables: s, w3mThemeVariables: D(s, t) });
    }
  }
};
y.styles = F;
O([p()], y.prototype, 'ready', void 0);
y = O([g('w3m-approve-transaction-view')], y);
var G =
  (globalThis && globalThis.__decorate) ||
  function (n, e, t, s) {
    var r = arguments.length,
      i = r < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
      o;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(n, e, t, s);
    else
      for (var a = n.length - 1; a >= 0; a--)
        (o = n[a]) && (i = (r < 3 ? o(i) : r > 3 ? o(e, t, i) : o(e, t)) || i);
    return r > 3 && i && Object.defineProperty(e, t, i), i;
  };
let N = class extends f {
  render() {
    return l`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${_.SECURE_SITE_DASHBOARD}
          imageSrc=${_.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `;
  }
};
N = G([g('w3m-upgrade-wallet-view')], N);
const Y = v`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;
var b =
  (globalThis && globalThis.__decorate) ||
  function (n, e, t, s) {
    var r = arguments.length,
      i = r < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
      o;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(n, e, t, s);
    else
      for (var a = n.length - 1; a >= 0; a--)
        (o = n[a]) && (i = (r < 3 ? o(i) : r > 3 ? o(e, t, i) : o(e, t)) || i);
    return r > 3 && i && Object.defineProperty(e, t, i), i;
  };
let d = class extends f {
  constructor() {
    super(...arguments), (this.disabled = !1), (this.loading = !1);
  }
  render() {
    return l`
      <wui-input-text
        value=${P(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value || ''}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `;
  }
  baseNameTemplate() {
    return l`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${$.WC_NAME_SUFFIX}
    </wui-text>`;
  }
  loadingTemplate() {
    return this.loading
      ? l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`
      : null;
  }
  errorTemplate() {
    return this.errorMessage
      ? l`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`
      : null;
  }
};
d.styles = [W, Y];
b([w()], d.prototype, 'errorMessage', void 0);
b([w({ type: Boolean })], d.prototype, 'disabled', void 0);
b([w()], d.prototype, 'value', void 0);
b([w({ type: Boolean })], d.prototype, 'loading', void 0);
d = b([g('wui-ens-input')], d);
const L = v`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;
var m =
  (globalThis && globalThis.__decorate) ||
  function (n, e, t, s) {
    var r = arguments.length,
      i = r < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
      o;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(n, e, t, s);
    else
      for (var a = n.length - 1; a >= 0; a--)
        (o = n[a]) && (i = (r < 3 ? o(i) : r > 3 ? o(e, t, i) : o(e, t)) || i);
    return r > 3 && i && Object.defineProperty(e, t, i), i;
  };
let c = class extends f {
  constructor() {
    super(),
      (this.formRef = H()),
      (this.usubscribe = []),
      (this.name = ''),
      (this.error = ''),
      (this.loading = u.state.loading),
      (this.suggestions = u.state.suggestions),
      (this.registered = !1),
      (this.profileName = h.state.profileName),
      (this.onDebouncedNameInputChange = I.debounce((e) => {
        u.validateName(e)
          ? ((this.error = ''),
            (this.name = e),
            u.getSuggestions(e),
            u.isNameRegistered(e).then((t) => {
              this.registered = t;
            }))
          : e.length < 4
            ? (this.error = 'Name must be at least 4 characters long')
            : (this.error = 'Can only contain letters, numbers and - characters');
      })),
      this.usubscribe.push(
        u.subscribe((e) => {
          (this.suggestions = e.suggestions), (this.loading = e.loading);
        }),
        h.subscribeKey('profileName', (e) => {
          (this.profileName = e), e && (this.error = 'You already own a name');
        })
      );
  }
  firstUpdated() {
    this.formRef.value?.addEventListener('keydown', this.onEnterKey.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this.usubscribe.forEach((e) => e()),
      this.formRef.value?.removeEventListener('keydown', this.onEnterKey.bind(this));
  }
  render() {
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${['0', 's', 'm', 's']}
      >
        <form ${V(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `;
  }
  submitButtonTemplate() {
    return this.isAllowedToSubmit()
      ? l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `
      : null;
  }
  onSelectSuggestion(e) {
    return () => {
      (this.name = e), (this.registered = !1), this.requestUpdate();
    };
  }
  onNameInputChange(e) {
    this.onDebouncedNameInputChange(e.detail);
  }
  nameSuggestionTagTemplate() {
    return this.loading
      ? l`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`
      : this.registered
        ? l`<wui-tag variant="shade" size="lg">Registered</wui-tag>`
        : l`<wui-tag variant="success" size="lg">Available</wui-tag>`;
  }
  templateSuggestions() {
    if (!this.name || this.name.length < 4 || this.error) return null;
    const e = this.registered ? this.suggestions.filter((t) => t.name !== this.name) : [];
    return l`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${['m', 'm', 'm', 'm']}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map((t) => this.availableNameTemplate(t.name))}
    </wui-flex>`;
  }
  availableNameTemplate(e) {
    return l` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${['m', 'm', 'm', 'm']}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`;
  }
  isAllowedToSubmit() {
    return (
      !this.loading &&
      !this.registered &&
      !this.error &&
      !this.profileName &&
      u.validateName(this.name)
    );
  }
  async onSubmitName() {
    const e = j.state.activeChain;
    try {
      if (!this.isAllowedToSubmit()) return;
      const t = `${this.name}${$.WC_NAME_SUFFIX}`;
      x.sendEvent({
        type: 'track',
        event: 'REGISTER_NAME_INITIATED',
        properties: {
          isSmartAccount: h.state.preferredAccountTypes?.[e] === T.ACCOUNT_TYPES.SMART_ACCOUNT,
          ensName: t,
        },
      }),
        await u.registerName(t),
        x.sendEvent({
          type: 'track',
          event: 'REGISTER_NAME_SUCCESS',
          properties: {
            isSmartAccount: h.state.preferredAccountTypes?.[e] === T.ACCOUNT_TYPES.SMART_ACCOUNT,
            ensName: t,
          },
        });
    } catch (t) {
      M.showError(t.message),
        x.sendEvent({
          type: 'track',
          event: 'REGISTER_NAME_ERROR',
          properties: {
            isSmartAccount: h.state.preferredAccountTypes?.[e] === T.ACCOUNT_TYPES.SMART_ACCOUNT,
            ensName: `${this.name}${$.WC_NAME_SUFFIX}`,
            error: t?.message || 'Unknown error',
          },
        });
    }
  }
  onEnterKey(e) {
    e.key === 'Enter' && this.isAllowedToSubmit() && this.onSubmitName();
  }
};
c.styles = L;
m([w()], c.prototype, 'errorMessage', void 0);
m([p()], c.prototype, 'name', void 0);
m([p()], c.prototype, 'error', void 0);
m([p()], c.prototype, 'loading', void 0);
m([p()], c.prototype, 'suggestions', void 0);
m([p()], c.prototype, 'registered', void 0);
m([p()], c.prototype, 'profileName', void 0);
c = m([g('w3m-register-account-name-view')], c);
const K = v`
  .continue-button-container {
    width: 100%;
  }
`;
var q =
  (globalThis && globalThis.__decorate) ||
  function (n, e, t, s) {
    var r = arguments.length,
      i = r < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
      o;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      i = Reflect.decorate(n, e, t, s);
    else
      for (var a = n.length - 1; a >= 0; a--)
        (o = n[a]) && (i = (r < 3 ? o(i) : r > 3 ? o(e, t, i) : o(e, t)) || i);
    return r > 3 && i && Object.defineProperty(e, t, i), i;
  };
let C = class extends f {
  render() {
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${['0', '0', 'l', '0']}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${() => {
            I.openHref(z.URLS.FAQ, '_blank');
          }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `;
  }
  onboardingTemplate() {
    return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${['0', 'xxl', '0', 'xxl']}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`;
  }
  buttonsTemplate() {
    return l`<wui-flex
      .padding=${['0', '2l', '0', '2l']}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`;
  }
  redirectToAccount() {
    k.replace('Account');
  }
};
C.styles = K;
C = q([g('w3m-register-account-name-success-view')], C);
export {
  y as W3mApproveTransactionView,
  C as W3mRegisterAccountNameSuccess,
  c as W3mRegisterAccountNameView,
  N as W3mUpgradeWalletView,
};
