import {
  i as $,
  d as L,
  C as S,
  O as b,
  R as g,
  f as A,
  x as l,
  k as C,
  t as W,
  u as D,
  A as d,
  v as j,
  l as _,
  m as u,
  p as O,
  w as R,
  S as y,
  M as k,
  T as P,
  y as q,
} from './index-6823ac84.js';
import { n as z, r as c, c as T, o as v } from './if-defined-5ea4ccf2.js';
import { O as I } from './index-2c08184b.js';
import { e as F } from './index-0f2edb7e.js';
import './index-66bb34ae.js';
import './index-12faccbd.js';
import './index-fbd81dd5.js';
import './index-ac2c30fa.js';
import './index-30c3ff48.js';
import './index-f6d75cf3.js';
import './ref-51923e9b.js';
import './ConstantsUtil-30faab72.js';
import './index-6dd11eb1.js';
import './index-61a8f674.js';
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
      e = new r.Error().stack;
    e &&
      ((r._sentryDebugIds = r._sentryDebugIds || {}),
      (r._sentryDebugIds[e] = 'aacef459-b709-4615-9158-7c429af71462'),
      (r._sentryDebugIdIdentifier = 'sentry-dbid-aacef459-b709-4615-9158-7c429af71462'));
  } catch {}
})();
const M = $`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
var w =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var s = arguments.length,
      t = s < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      n;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var a = r.length - 1; a >= 0; a--)
        (n = r[a]) && (t = (s < 3 ? n(t) : s > 3 ? n(e, i, t) : n(e, i)) || t);
    return s > 3 && t && Object.defineProperty(e, i, t), t;
  };
let h = class extends L {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = S.state.connectors),
      (this.authConnector = this.connectors.find((e) => e.type === 'AUTH')),
      (this.features = b.state.features),
      (this.isPwaLoading = !1),
      this.unsubscribe.push(
        S.subscribeKey('connectors', (e) => {
          (this.connectors = e),
            (this.authConnector = this.connectors.find((i) => i.type === 'AUTH'));
        }),
        b.subscribeKey('features', (e) => (this.features = e))
      );
  }
  connectedCallback() {
    super.connectedCallback(), this.handlePwaFrameLoad();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    let e = this.features?.socials || [];
    const i = !!this.authConnector,
      o = e?.length,
      s = g.state.view === 'ConnectSocials';
    return (!i || !o) && !s
      ? null
      : (s && !o && (e = A.DEFAULT_FEATURES.socials),
        l` <wui-flex flexDirection="column" gap="xs">
      ${e.map(
        (t) => l`<wui-list-social
            @click=${() => {
              this.onSocialClick(t);
            }}
            data-testid=${`social-selector-${t}`}
            name=${t}
            logo=${t}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`
      )}
    </wui-flex>`);
  }
  async onSocialClick(e) {
    e && (await F(e));
  }
  async handlePwaFrameLoad() {
    if (C.isPWA()) {
      this.isPwaLoading = !0;
      try {
        this.authConnector?.provider instanceof W && (await this.authConnector.provider.init());
      } catch (e) {
        D.open(
          { shortMessage: 'Error loading embedded wallet in PWA', longMessage: e.message },
          'error'
        );
      } finally {
        this.isPwaLoading = !1;
      }
    }
  }
};
h.styles = M;
w([z()], h.prototype, 'tabIdx', void 0);
w([c()], h.prototype, 'connectors', void 0);
w([c()], h.prototype, 'authConnector', void 0);
w([c()], h.prototype, 'features', void 0);
w([c()], h.prototype, 'isPwaLoading', void 0);
h = w([T('w3m-social-login-list')], h);
const N = $`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;
var U =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var s = arguments.length,
      t = s < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      n;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var a = r.length - 1; a >= 0; a--)
        (n = r[a]) && (t = (s < 3 ? n(t) : s > 3 ? n(e, i, t) : n(e, i)) || t);
    return s > 3 && t && Object.defineProperty(e, i, t), t;
  };
let E = class extends L {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.checked = I.state.isLegalCheckboxChecked),
      this.unsubscribe.push(
        I.subscribeKey('isLegalCheckboxChecked', (e) => {
          this.checked = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { termsConditionsUrl: e, privacyPolicyUrl: i } = b.state,
      o = b.state.features?.legalCheckbox,
      t = !!(e || i) && !!o,
      n = t && !this.checked,
      a = n ? -1 : void 0;
    return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${t ? ['0', 's', 's', 's'] : 's'}
        gap="xs"
        class=${v(n ? 'disabled' : void 0)}
      >
        <w3m-social-login-list tabIdx=${v(a)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
};
E.styles = N;
U([c()], E.prototype, 'checked', void 0);
E = U([T('w3m-connect-socials-view')], E);
const V = $`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;
var m =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var s = arguments.length,
      t = s < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      n;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var a = r.length - 1; a >= 0; a--)
        (n = r[a]) && (t = (s < 3 ? n(t) : s > 3 ? n(e, i, t) : n(e, i)) || t);
    return s > 3 && t && Object.defineProperty(e, i, t), t;
  };
let p = class extends L {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.socialProvider = d.state.socialProvider),
      (this.socialWindow = d.state.socialWindow),
      (this.error = !1),
      (this.connecting = !1),
      (this.message = 'Connect in the provider window'),
      (this.authConnector = S.getAuthConnector()),
      (this.handleSocialConnection = async (i) => {
        if (i.data?.resultUri)
          if (i.origin === j.SECURE_SITE_ORIGIN) {
            window.removeEventListener('message', this.handleSocialConnection, !1);
            try {
              if (this.authConnector && !this.connecting) {
                this.socialWindow &&
                  (this.socialWindow.close(), d.setSocialWindow(void 0, _.state.activeChain)),
                  (this.connecting = !0),
                  this.updateMessage();
                const o = i.data.resultUri;
                this.socialProvider &&
                  u.sendEvent({
                    type: 'track',
                    event: 'SOCIAL_LOGIN_REQUEST_USER_DATA',
                    properties: { provider: this.socialProvider },
                  }),
                  await O.connectExternal(
                    { id: this.authConnector.id, type: this.authConnector.type, socialUri: o },
                    this.authConnector.chain
                  ),
                  this.socialProvider &&
                    (R.setConnectedSocialProvider(this.socialProvider),
                    u.sendEvent({
                      type: 'track',
                      event: 'SOCIAL_LOGIN_SUCCESS',
                      properties: { provider: this.socialProvider },
                    }));
              }
            } catch {
              (this.error = !0),
                this.updateMessage(),
                this.socialProvider &&
                  u.sendEvent({
                    type: 'track',
                    event: 'SOCIAL_LOGIN_ERROR',
                    properties: { provider: this.socialProvider },
                  });
            }
          } else
            g.goBack(),
              y.showError('Untrusted Origin'),
              this.socialProvider &&
                u.sendEvent({
                  type: 'track',
                  event: 'SOCIAL_LOGIN_ERROR',
                  properties: { provider: this.socialProvider },
                });
      }),
      q.EmbeddedWalletAbortController.signal.addEventListener('abort', () => {
        this.socialWindow &&
          (this.socialWindow.close(), d.setSocialWindow(void 0, _.state.activeChain));
      }),
      this.unsubscribe.push(
        d.subscribe((i) => {
          i.socialProvider && (this.socialProvider = i.socialProvider),
            i.socialWindow && (this.socialWindow = i.socialWindow),
            i.address && (k.state.open || b.state.enableEmbedded) && k.close();
        })
      ),
      this.authConnector && this.connectSocial();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()),
      window.removeEventListener('message', this.handleSocialConnection, !1),
      this.socialWindow?.close(),
      d.setSocialWindow(void 0, _.state.activeChain);
  }
  render() {
    return l`
      <wui-flex
        data-error=${v(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${v(this.socialProvider)}></wui-logo>
          ${this.error ? null : this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider ?? 'Social'}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error ? 'error-100' : 'fg-200'}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `;
  }
  loaderTemplate() {
    const e = P.state.themeVariables['--w3m-border-radius-master'],
      i = e ? parseInt(e.replace('px', ''), 10) : 4;
    return l`<wui-loading-thumbnail radius=${i * 9}></wui-loading-thumbnail>`;
  }
  connectSocial() {
    const e = setInterval(() => {
      this.socialWindow?.closed &&
        (!this.connecting &&
          g.state.view === 'ConnectingSocial' &&
          (this.socialProvider &&
            u.sendEvent({
              type: 'track',
              event: 'SOCIAL_LOGIN_CANCELED',
              properties: { provider: this.socialProvider },
            }),
          g.goBack()),
        clearInterval(e));
    }, 1e3);
    window.addEventListener('message', this.handleSocialConnection, !1);
  }
  updateMessage() {
    this.error
      ? (this.message = 'Something went wrong')
      : this.connecting
        ? (this.message = 'Retrieving user data')
        : (this.message = 'Connect in the provider window');
  }
};
p.styles = V;
m([c()], p.prototype, 'socialProvider', void 0);
m([c()], p.prototype, 'socialWindow', void 0);
m([c()], p.prototype, 'error', void 0);
m([c()], p.prototype, 'connecting', void 0);
m([c()], p.prototype, 'message', void 0);
p = m([T('w3m-connecting-social-view')], p);
const G = $`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;
var x =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var s = arguments.length,
      t = s < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      n;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var a = r.length - 1; a >= 0; a--)
        (n = r[a]) && (t = (s < 3 ? n(t) : s > 3 ? n(e, i, t) : n(e, i)) || t);
    return s > 3 && t && Object.defineProperty(e, i, t), t;
  };
let f = class extends L {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.timeout = void 0),
      (this.socialProvider = d.state.socialProvider),
      (this.uri = d.state.farcasterUrl),
      (this.ready = !1),
      (this.loading = !1),
      (this.authConnector = S.getAuthConnector()),
      (this.forceUpdate = () => {
        this.requestUpdate();
      }),
      this.unsubscribe.push(
        d.subscribeKey('farcasterUrl', (e) => {
          e && ((this.uri = e), this.connectFarcaster());
        }),
        d.subscribeKey('socialProvider', (e) => {
          e && (this.socialProvider = e);
        })
      ),
      window.addEventListener('resize', this.forceUpdate);
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      clearTimeout(this.timeout),
      window.removeEventListener('resize', this.forceUpdate);
  }
  render() {
    return this.onRenderProxy(), l`${this.platformTemplate()}`;
  }
  platformTemplate() {
    return C.isMobile() ? l`${this.mobileTemplate()}` : l`${this.desktopTemplate()}`;
  }
  desktopTemplate() {
    return this.loading ? l`${this.loadingTemplate()}` : l`${this.qrTemplate()}`;
  }
  qrTemplate() {
    return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${['0', 'xl', 'xl', 'xl']}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`;
  }
  loadingTemplate() {
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['xl', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `;
  }
  mobileTemplate() {
    return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${['3xl', 'xl', 'xl', 'xl']}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`;
  }
  loaderTemplate() {
    const e = P.state.themeVariables['--w3m-border-radius-master'],
      i = e ? parseInt(e.replace('px', ''), 10) : 4;
    return l`<wui-loading-thumbnail radius=${i * 9}></wui-loading-thumbnail>`;
  }
  async connectFarcaster() {
    if (this.authConnector)
      try {
        await this.authConnector?.provider.connectFarcaster(),
          this.socialProvider &&
            (R.setConnectedSocialProvider(this.socialProvider),
            u.sendEvent({
              type: 'track',
              event: 'SOCIAL_LOGIN_REQUEST_USER_DATA',
              properties: { provider: this.socialProvider },
            })),
          (this.loading = !0),
          await O.connectExternal(this.authConnector, this.authConnector.chain),
          this.socialProvider &&
            u.sendEvent({
              type: 'track',
              event: 'SOCIAL_LOGIN_SUCCESS',
              properties: { provider: this.socialProvider },
            }),
          (this.loading = !1),
          k.close();
      } catch (e) {
        this.socialProvider &&
          u.sendEvent({
            type: 'track',
            event: 'SOCIAL_LOGIN_ERROR',
            properties: { provider: this.socialProvider },
          }),
          g.goBack(),
          y.showError(e);
      }
  }
  mobileLinkTemplate() {
    return l`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri || this.loading}
      @click=${() => {
        this.uri && C.openHref(this.uri, '_blank');
      }}
    >
      Open farcaster</wui-button
    >`;
  }
  onRenderProxy() {
    !this.ready &&
      this.uri &&
      (this.timeout = setTimeout(() => {
        this.ready = !0;
      }, 200));
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) return null;
    const e = this.getBoundingClientRect().width - 40;
    return l` <wui-qr-code
      size=${e}
      theme=${P.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${v(P.state.themeVariables['--w3m-qr-color'])}
    ></wui-qr-code>`;
  }
  copyTemplate() {
    const e = !this.uri || !this.ready;
    return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
  }
  onCopyUri() {
    try {
      this.uri && (C.copyToClopboard(this.uri), y.showSuccess('Link copied'));
    } catch {
      y.showError('Failed to copy');
    }
  }
};
f.styles = G;
x([c()], f.prototype, 'socialProvider', void 0);
x([c()], f.prototype, 'uri', void 0);
x([c()], f.prototype, 'ready', void 0);
x([c()], f.prototype, 'loading', void 0);
f = x([T('w3m-connecting-farcaster-view')], f);
export {
  E as W3mConnectSocialsView,
  f as W3mConnectingFarcasterView,
  p as W3mConnectingSocialView,
};
