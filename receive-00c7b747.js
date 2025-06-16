import {
  i as k,
  h as N,
  n as C,
  d as y,
  x as l,
  A as w,
  l as d,
  S as h,
  D as m,
  T as g,
  W as T,
  R as $,
  k as A,
} from './index-84fa2459.js';
import { n as v, c as x, U as I, o as R, r as f } from './if-defined-0db99fa5.js';
import './index-87550db7.js';
import './index-ad14d90f.js';
import './index-ffd0c09c.js';
(function () {
  try {
    var i =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new i.Error().stack;
    e &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[e] = '91b752fa-edfc-4b7f-a932-a33392b94430'),
      (i._sentryDebugIdIdentifier = 'sentry-dbid-91b752fa-edfc-4b7f-a932-a33392b94430'));
  } catch {}
})();
const _ = k`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;
var b =
  (globalThis && globalThis.__decorate) ||
  function (i, e, r, o) {
    var s = arguments.length,
      t = s < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(i, e, r, o);
    else
      for (var n = i.length - 1; n >= 0; n--)
        (a = i[n]) && (t = (s < 3 ? a(t) : s > 3 ? a(e, r, t) : a(e, r)) || t);
    return s > 3 && t && Object.defineProperty(e, r, t), t;
  };
let u = class extends y {
  constructor() {
    super(...arguments), (this.networkImages = ['']), (this.text = '');
  }
  render() {
    return l`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `;
  }
  networksTemplate() {
    const e = this.networkImages.slice(0, 5);
    return l` <wui-flex class="networks">
      ${e?.map((r) => l` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`)}
    </wui-flex>`;
  }
};
u.styles = [N, C, _];
b([v({ type: Array })], u.prototype, 'networkImages', void 0);
b([v()], u.prototype, 'text', void 0);
u = b([x('wui-compatible-network')], u);
const S = k`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;
var p =
  (globalThis && globalThis.__decorate) ||
  function (i, e, r, o) {
    var s = arguments.length,
      t = s < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(i, e, r, o);
    else
      for (var n = i.length - 1; n >= 0; n--)
        (a = i[n]) && (t = (s < 3 ? a(t) : s > 3 ? a(e, r, t) : a(e, r)) || t);
    return s > 3 && t && Object.defineProperty(e, r, t), t;
  };
let c = class extends y {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.address = w.state.address),
      (this.profileName = w.state.profileName),
      (this.network = d.state.activeCaipNetwork),
      (this.preferredAccountTypes = w.state.preferredAccountTypes),
      this.unsubscribe.push(
        w.subscribe((e) => {
          e.address
            ? ((this.address = e.address),
              (this.profileName = e.profileName),
              (this.preferredAccountTypes = e.preferredAccountTypes))
            : h.showError('Account not found');
        }),
        d.subscribeKey('activeCaipNetwork', (e) => {
          e?.id && (this.network = e);
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    if (!this.address) throw new Error('w3m-wallet-receive-view: No account provided');
    const e = m.getNetworkImage(this.network);
    return l` <wui-flex
      flexDirection="column"
      .padding=${['0', 'l', 'l', 'l']}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${I.getTruncateString({ string: this.profileName || this.address || '', charsStart: this.profileName ? 18 : 4, charsEnd: this.profileName ? 0 : 4, truncate: this.profileName ? 'end' : 'middle' })}
        icon="copy"
        size="sm"
        imageSrc=${e || ''}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${['l', '0', '0', '0']}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${g.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${R(g.state.themeVariables['--w3m-qr-color'])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    const e = d.getAllRequestedCaipNetworks(),
      r = d.checkIfSmartAccountEnabled(),
      o = d.state.activeCaipNetwork,
      s = e.filter((n) => n?.chainNamespace === o?.chainNamespace);
    if (this.preferredAccountTypes?.[o?.chainNamespace] === T.ACCOUNT_TYPES.SMART_ACCOUNT && r)
      return o
        ? l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[m.getNetworkImage(o) ?? '']}
      ></wui-compatible-network>`
        : null;
    const a = s
      ?.filter((n) => n?.assets?.imageId)
      ?.slice(0, 5)
      .map(m.getNetworkImage)
      .filter(Boolean);
    return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${a}
    ></wui-compatible-network>`;
  }
  onReceiveClick() {
    $.push('WalletCompatibleNetworks');
  }
  onCopyClick() {
    try {
      this.address && (A.copyToClopboard(this.address), h.showSuccess('Address copied'));
    } catch {
      h.showError('Failed to copy');
    }
  }
};
c.styles = S;
p([f()], c.prototype, 'address', void 0);
p([f()], c.prototype, 'profileName', void 0);
p([f()], c.prototype, 'network', void 0);
p([f()], c.prototype, 'preferredAccountTypes', void 0);
c = p([x('w3m-wallet-receive-view')], c);
export { c as W3mWalletReceiveView };
