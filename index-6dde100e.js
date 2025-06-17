import {
  i as x,
  h as S,
  n as I,
  d as w,
  x as l,
  l as d,
  D as C,
  O as y,
  V as ce,
  A as b,
  k as g,
  M as W,
  m as $,
  w as me,
  C as m,
  j as T,
  R as f,
  f as L,
  S as P,
  W as M,
  p as v,
  z as uo,
  v as po,
  F as Mi,
  _ as ho,
  Q as k,
  $ as Ie,
  t as wo,
  u as fo,
  a0 as He,
  q as go,
  T as Ht,
  a1 as vi,
} from './index-84fa2459.js';
import { n as c, c as h, o as p, U as A, r as u, e as yi } from './if-defined-0db99fa5.js';
import './index-ad14d90f.js';
import './index-a1f64d4e.js';
import './index-461962a0.js';
import './index-ca591eed.js';
import { W as rs } from './index-e9a1ca2c.js';
import './index-61d240bb.js';
import './index-41ca02e4.js';
import './index-3a9c6927.js';
import './index-2dedb1e8.js';
import { n as bo } from './index-bfb5d2af.js';
import './index-77d14fcc.js';
import './index-159e9322.js';
import { M as Ci } from './index-b3ef47e6.js';
import './index-71ff72b7.js';
import { e as oi, n as ni } from './ref-8a494c57.js';
import './index-62d18e5a.js';
import './index-252eb873.js';
import './index-26a85ddb.js';
import './index-8979fb7d.js';
import { O as st } from './index-51da1d3a.js';
import { e as mo } from './index-5e848999.js';
import { N as xo } from './index-9c521ce4.js';
import './index-7d5ee1e7.js';
import './index-87550db7.js';
import './index-ffd0c09c.js';
import './index-e2ac98c0.js';
import './index-6e8f1fb2.js';
import './ConstantsUtil-30faab72.js';
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
      (r._sentryDebugIds[e] = '1d46e661-fe1e-47e7-ac86-25704718c7cb'),
      (r._sentryDebugIdIdentifier = 'sentry-dbid-1d46e661-fe1e-47e7-ac86-25704718c7cb'));
  } catch {}
})();
const vo = x`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;
var Q =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let V = class extends w {
  constructor() {
    super(...arguments),
      (this.networkSrc = void 0),
      (this.avatarSrc = void 0),
      (this.balance = void 0),
      (this.isUnsupportedChain = void 0),
      (this.disabled = !1),
      (this.loading = !1),
      (this.address = ''),
      (this.profileName = ''),
      (this.charsStart = 4),
      (this.charsEnd = 6);
  }
  render() {
    return l`
      <button
        ?disabled=${this.disabled}
        class=${p(this.balance ? void 0 : 'local-no-balance')}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address ? A.getTruncateString({ string: this.profileName || this.address, charsStart: this.profileName ? 18 : this.charsStart, charsEnd: this.profileName ? 0 : this.charsEnd, truncate: this.profileName ? 'end' : 'middle' }) : null}
          </wui-text>
        </wui-flex>
      </button>
    `;
  }
  balanceTemplate() {
    if (this.isUnsupportedChain)
      return l` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;
    if (this.balance) {
      const e = this.networkSrc
          ? l`<wui-image src=${this.networkSrc}></wui-image>`
          : l`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,
        i = this.loading
          ? l`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`
          : l`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;
      return l`${e} ${i}`;
    }
    return null;
  }
};
V.styles = [S, I, vo];
Q([c()], V.prototype, 'networkSrc', void 0);
Q([c()], V.prototype, 'avatarSrc', void 0);
Q([c()], V.prototype, 'balance', void 0);
Q([c({ type: Boolean })], V.prototype, 'isUnsupportedChain', void 0);
Q([c({ type: Boolean })], V.prototype, 'disabled', void 0);
Q([c({ type: Boolean })], V.prototype, 'loading', void 0);
Q([c()], V.prototype, 'address', void 0);
Q([c()], V.prototype, 'profileName', void 0);
Q([c()], V.prototype, 'charsStart', void 0);
Q([c()], V.prototype, 'charsEnd', void 0);
V = Q([h('wui-account-button')], V);
var j =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
class D extends w {
  constructor() {
    super(...arguments),
      (this.unsubscribe = []),
      (this.disabled = !1),
      (this.balance = 'show'),
      (this.charsStart = 4),
      (this.charsEnd = 6),
      (this.namespace = void 0),
      (this.caipAddress = d.getAccountData(this.namespace)?.caipAddress),
      (this.balanceVal = d.getAccountData(this.namespace)?.balance),
      (this.balanceSymbol = d.getAccountData(this.namespace)?.balanceSymbol),
      (this.profileName = d.getAccountData(this.namespace)?.profileName),
      (this.profileImage = d.getAccountData(this.namespace)?.profileImage),
      (this.network = d.getNetworkData(this.namespace)?.caipNetwork),
      (this.networkImage = C.getNetworkImage(this.network)),
      (this.isSupported = y.state.allowUnsupportedChain
        ? !0
        : d.state.activeChain
          ? d.checkIfSupportedNetwork(d.state.activeChain)
          : !0);
  }
  firstUpdated() {
    const e = this.namespace;
    e
      ? this.unsubscribe.push(
          d.subscribeChainProp(
            'accountState',
            (i) => {
              (this.caipAddress = i?.caipAddress),
                (this.balanceVal = i?.balance),
                (this.balanceSymbol = i?.balanceSymbol),
                (this.profileName = i?.profileName),
                (this.profileImage = i?.profileImage);
            },
            e
          ),
          d.subscribeChainProp(
            'networkState',
            (i) => {
              (this.network = i?.caipNetwork),
                (this.isSupported = d.checkIfSupportedNetwork(e, i?.caipNetwork)),
                (this.networkImage = C.getNetworkImage(i?.caipNetwork));
            },
            e
          )
        )
      : this.unsubscribe.push(
          ce.subscribeNetworkImages(() => {
            this.networkImage = C.getNetworkImage(this.network);
          }),
          d.subscribeKey('activeCaipAddress', (i) => {
            this.caipAddress = i;
          }),
          b.subscribeKey('balance', (i) => (this.balanceVal = i)),
          b.subscribeKey('balanceSymbol', (i) => (this.balanceSymbol = i)),
          b.subscribeKey('profileName', (i) => (this.profileName = i)),
          b.subscribeKey('profileImage', (i) => (this.profileImage = i)),
          d.subscribeKey('activeCaipNetwork', (i) => {
            (this.network = i),
              (this.networkImage = C.getNetworkImage(i)),
              (this.isSupported = i?.chainNamespace
                ? d.checkIfSupportedNetwork(i?.chainNamespace)
                : !0),
              this.fetchNetworkImage(i);
          })
        );
  }
  updated() {
    this.fetchNetworkImage(this.network);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    if (!d.state.activeChain) return null;
    const e = this.balance === 'show',
      i = typeof this.balanceVal != 'string';
    return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${y.state.allowUnsupportedChain ? !1 : !this.isSupported}
        address=${p(g.getPlainAddress(this.caipAddress))}
        profileName=${p(this.profileName)}
        networkSrc=${p(this.networkImage)}
        avatarSrc=${p(this.profileImage)}
        balance=${e ? g.formatBalance(this.balanceVal, this.balanceSymbol) : ''}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace ? `-${this.namespace}` : ''}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${i}
      >
      </wui-account-button>
    `;
  }
  async onClick() {
    await d.switchActiveNamespace(this.namespace),
      this.isSupported || y.state.allowUnsupportedChain
        ? W.open()
        : W.open({ view: 'UnsupportedChain' });
  }
  async fetchNetworkImage(e) {
    e?.assets?.imageId && (this.networkImage = await C.fetchNetworkImage(e?.assets?.imageId));
  }
}
j([c({ type: Boolean })], D.prototype, 'disabled', void 0);
j([c()], D.prototype, 'balance', void 0);
j([c()], D.prototype, 'charsStart', void 0);
j([c()], D.prototype, 'charsEnd', void 0);
j([c()], D.prototype, 'namespace', void 0);
j([u()], D.prototype, 'caipAddress', void 0);
j([u()], D.prototype, 'balanceVal', void 0);
j([u()], D.prototype, 'balanceSymbol', void 0);
j([u()], D.prototype, 'profileName', void 0);
j([u()], D.prototype, 'profileImage', void 0);
j([u()], D.prototype, 'network', void 0);
j([u()], D.prototype, 'networkImage', void 0);
j([u()], D.prototype, 'isSupported', void 0);
let $i = class extends D {};
$i = j([h('w3m-account-button')], $i);
let Ti = class extends D {};
Ti = j([h('appkit-account-button')], Ti);
const yo = x`
  :host {
    display: block;
    width: max-content;
  }
`;
var J =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
class F extends w {
  constructor() {
    super(...arguments),
      (this.unsubscribe = []),
      (this.disabled = !1),
      (this.balance = void 0),
      (this.size = void 0),
      (this.label = void 0),
      (this.loadingLabel = void 0),
      (this.charsStart = 4),
      (this.charsEnd = 6),
      (this.namespace = void 0),
      (this.caipAddress = d.state.activeCaipAddress);
  }
  firstUpdated() {
    this.namespace
      ? this.unsubscribe.push(
          d.subscribeChainProp(
            'accountState',
            (e) => {
              this.caipAddress = e?.caipAddress;
            },
            this.namespace
          )
        )
      : this.unsubscribe.push(d.subscribeKey('activeCaipAddress', (e) => (this.caipAddress = e)));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return this.caipAddress
      ? l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${p(this.balance)}
            .charsStart=${p(this.charsStart)}
            .charsEnd=${p(this.charsEnd)}
            namespace=${p(this.namespace)}
          >
          </appkit-account-button>
        `
      : l`
          <appkit-connect-button
            size=${p(this.size)}
            label=${p(this.label)}
            loadingLabel=${p(this.loadingLabel)}
            namespace=${p(this.namespace)}
          ></appkit-connect-button>
        `;
  }
}
F.styles = yo;
J([c({ type: Boolean })], F.prototype, 'disabled', void 0);
J([c()], F.prototype, 'balance', void 0);
J([c()], F.prototype, 'size', void 0);
J([c()], F.prototype, 'label', void 0);
J([c()], F.prototype, 'loadingLabel', void 0);
J([c()], F.prototype, 'charsStart', void 0);
J([c()], F.prototype, 'charsEnd', void 0);
J([c()], F.prototype, 'namespace', void 0);
J([u()], F.prototype, 'caipAddress', void 0);
let ki = class extends F {};
ki = J([h('w3m-button')], ki);
let Si = class extends F {};
Si = J([h('appkit-button')], Si);
const Co = x`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;
var ai =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Ke = class extends w {
  constructor() {
    super(...arguments), (this.size = 'md'), (this.loading = !1);
  }
  render() {
    const e = this.size === 'md' ? 'paragraph-600' : 'small-600';
    return l`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading ? 'accent-100' : 'inherit'}>
          <slot></slot>
        </wui-text>
      </button>
    `;
  }
  loadingTemplate() {
    return this.loading
      ? l`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`
      : null;
  }
};
Ke.styles = [S, I, Co];
ai([c()], Ke.prototype, 'size', void 0);
ai([c({ type: Boolean })], Ke.prototype, 'loading', void 0);
Ke = ai([h('wui-connect-button')], Ke);
var we =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
class fe extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.size = 'md'),
      (this.label = 'Connect Wallet'),
      (this.loadingLabel = 'Connecting...'),
      (this.open = W.state.open),
      (this.loading = this.namespace
        ? W.state.loadingNamespaceMap.get(this.namespace)
        : W.state.loading),
      this.unsubscribe.push(
        W.subscribe((e) => {
          (this.open = e.open),
            (this.loading = this.namespace ? e.loadingNamespaceMap.get(this.namespace) : e.loading);
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return l`
      <wui-connect-button
        size=${p(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace ? `-${this.namespace}` : ''}`}
      >
        ${this.loading ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
  }
  onClick() {
    this.open ? W.close() : this.loading || W.open({ view: 'Connect', namespace: this.namespace });
  }
}
we([c()], fe.prototype, 'size', void 0);
we([c()], fe.prototype, 'label', void 0);
we([c()], fe.prototype, 'loadingLabel', void 0);
we([c()], fe.prototype, 'namespace', void 0);
we([u()], fe.prototype, 'open', void 0);
we([u()], fe.prototype, 'loading', void 0);
let _i = class extends fe {};
_i = we([h('w3m-connect-button')], _i);
let Ii = class extends fe {};
Ii = we([h('appkit-connect-button')], Ii);
const $o = x`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;
var At =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Ae = class extends w {
  constructor() {
    super(...arguments),
      (this.imageSrc = void 0),
      (this.isUnsupportedChain = void 0),
      (this.disabled = !1);
  }
  render() {
    return l`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `;
  }
  visualTemplate() {
    return this.isUnsupportedChain
      ? l`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `
      : this.imageSrc
        ? l`<wui-image src=${this.imageSrc}></wui-image>`
        : l`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
  }
};
Ae.styles = [S, I, $o];
At([c()], Ae.prototype, 'imageSrc', void 0);
At([c({ type: Boolean })], Ae.prototype, 'isUnsupportedChain', void 0);
At([c({ type: Boolean })], Ae.prototype, 'disabled', void 0);
Ae = At([h('wui-network-button')], Ae);
const To = x`
  :host {
    display: block;
    width: max-content;
  }
`;
var le =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
class ie extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.disabled = !1),
      (this.network = d.state.activeCaipNetwork),
      (this.networkImage = C.getNetworkImage(this.network)),
      (this.caipAddress = d.state.activeCaipAddress),
      (this.loading = W.state.loading),
      (this.isSupported = y.state.allowUnsupportedChain
        ? !0
        : d.state.activeChain
          ? d.checkIfSupportedNetwork(d.state.activeChain)
          : !0),
      this.unsubscribe.push(
        ce.subscribeNetworkImages(() => {
          this.networkImage = C.getNetworkImage(this.network);
        }),
        d.subscribeKey('activeCaipAddress', (e) => {
          this.caipAddress = e;
        }),
        d.subscribeKey('activeCaipNetwork', (e) => {
          (this.network = e),
            (this.networkImage = C.getNetworkImage(e)),
            (this.isSupported = e?.chainNamespace
              ? d.checkIfSupportedNetwork(e.chainNamespace)
              : !0),
            C.fetchNetworkImage(e?.assets?.imageId);
        }),
        W.subscribeKey('loading', (e) => (this.loading = e))
      );
  }
  firstUpdated() {
    C.fetchNetworkImage(this.network?.assets?.imageId);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.network ? d.checkIfSupportedNetwork(this.network.chainNamespace) : !0;
    return l`
      <wui-network-button
        .disabled=${!!(this.disabled || this.loading)}
        .isUnsupportedChain=${y.state.allowUnsupportedChain ? !1 : !e}
        imageSrc=${p(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `;
  }
  getLabel() {
    return this.network
      ? !this.isSupported && !y.state.allowUnsupportedChain
        ? 'Switch Network'
        : this.network.name
      : this.label
        ? this.label
        : this.caipAddress
          ? 'Unknown Network'
          : 'Select Network';
  }
  onClick() {
    this.loading ||
      ($.sendEvent({ type: 'track', event: 'CLICK_NETWORKS' }), W.open({ view: 'Networks' }));
  }
}
ie.styles = To;
le([c({ type: Boolean })], ie.prototype, 'disabled', void 0);
le([c({ type: String })], ie.prototype, 'label', void 0);
le([u()], ie.prototype, 'network', void 0);
le([u()], ie.prototype, 'networkImage', void 0);
le([u()], ie.prototype, 'caipAddress', void 0);
le([u()], ie.prototype, 'loading', void 0);
le([u()], ie.prototype, 'isSupported', void 0);
let Ai = class extends ie {};
Ai = le([h('w3m-network-button')], Ai);
let Wi = class extends ie {};
Wi = le([h('appkit-network-button')], Wi);
const ko = x`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;
var Wt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let We = class extends w {
  constructor() {
    super(...arguments), (this.label = ''), (this.description = ''), (this.icon = 'wallet');
  }
  render() {
    return l`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `;
  }
};
We.styles = [S, I, ko];
Wt([c()], We.prototype, 'label', void 0);
Wt([c()], We.prototype, 'description', void 0);
Wt([c()], We.prototype, 'icon', void 0);
We = Wt([h('wui-notice-card')], We);
var Vi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Kt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.socialProvider = me.getConnectedSocialProvider()),
      (this.socialUsername = me.getConnectedSocialUsername()),
      (this.namespace = d.state.activeChain),
      this.unsubscribe.push(
        d.subscribeKey('activeChain', (e) => {
          this.namespace = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = m.getConnectorId(this.namespace),
      i = m.getAuthConnector();
    if (!i || e !== T.CONNECTOR_ID.AUTH) return (this.style.cssText = 'display: none'), null;
    const o = i.provider.getEmail() ?? '';
    return !o && !this.socialUsername
      ? ((this.style.cssText = 'display: none'), null)
      : l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider ?? 'mail'}
        iconSize=${this.socialProvider ? 'xxl' : 'sm'}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${() => {
          this.onGoToUpdateEmail(o, this.socialProvider);
        }}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(o)}</wui-text>
      </wui-list-item>
    `;
  }
  onGoToUpdateEmail(e, i) {
    i || f.push('UpdateEmailWallet', { email: e, redirectView: 'Account' });
  }
  getAuthName(e) {
    return this.socialUsername
      ? this.socialProvider === 'discord' && this.socialUsername.endsWith('0')
        ? this.socialUsername.slice(0, -1)
        : this.socialUsername
      : e.length > 30
        ? `${e.slice(0, -3)}...`
        : e;
  }
};
Vi([u()], Kt.prototype, 'namespace', void 0);
Kt = Vi([h('w3m-account-auth-button')], Kt);
var oe =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Y = class extends w {
  constructor() {
    super(),
      (this.usubscribe = []),
      (this.networkImages = ce.state.networkImages),
      (this.address = b.state.address),
      (this.profileImage = b.state.profileImage),
      (this.profileName = b.state.profileName),
      (this.network = d.state.activeCaipNetwork),
      (this.preferredAccountTypes = b.state.preferredAccountTypes),
      (this.disconnecting = !1),
      (this.loading = !1),
      (this.switched = !1),
      (this.text = ''),
      this.usubscribe.push(
        b.subscribe((e) => {
          e.address &&
            ((this.address = e.address),
            (this.profileImage = e.profileImage),
            (this.profileName = e.profileName),
            (this.preferredAccountTypes = e.preferredAccountTypes));
        }),
        b.subscribeKey('preferredAccountTypes', (e) => (this.preferredAccountTypes = e)),
        d.subscribeKey('activeCaipNetwork', (e) => {
          e?.id && (this.network = e);
        })
      );
  }
  disconnectedCallback() {
    this.usubscribe.forEach((e) => e());
  }
  render() {
    if (!this.address) throw new Error('w3m-account-settings-view: No account provided');
    const e = this.networkImages[this.network?.assets?.imageId ?? ''];
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${['0', 'xl', 'm', 'xl']}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${p(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${A.getTruncateString({ string: this.address, charsStart: 4, charsEnd: 6, truncate: 'middle' })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${['0', 'l', 'm', 'l']}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e ? 'image' : 'icon'}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${p(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name ?? 'Unknown'}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  chooseNameButtonTemplate() {
    const e = this.network?.chainNamespace,
      i = m.getConnectorId(e),
      o = m.getAuthConnector();
    return !d.checkIfNamesSupported() || !o || i !== T.CONNECTOR_ID.AUTH || this.profileName
      ? null
      : l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `;
  }
  authCardTemplate() {
    const e = this.network?.chainNamespace,
      i = m.getConnectorId(e),
      o = m.getAuthConnector(),
      { origin: n } = location;
    return !o || i !== T.CONNECTOR_ID.AUTH || n.includes(L.SECURE_SITE)
      ? null
      : l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
  }
  isAllowedNetworkSwitch() {
    const e = d.getAllRequestedCaipNetworks(),
      i = e ? e.length > 1 : !1,
      o = e?.find(({ id: n }) => n === this.network?.id);
    return i || !o;
  }
  onCopyAddress() {
    try {
      this.address && (g.copyToClopboard(this.address), P.showSuccess('Address copied'));
    } catch {
      P.showError('Failed to copy');
    }
  }
  togglePreferredAccountBtnTemplate() {
    const e = this.network?.chainNamespace,
      i = d.checkIfSmartAccountEnabled(),
      o = m.getConnectorId(e);
    return !m.getAuthConnector() || o !== T.CONNECTOR_ID.AUTH || !i
      ? null
      : (this.switched ||
          (this.text =
            this.preferredAccountTypes?.[e] === M.ACCOUNT_TYPES.SMART_ACCOUNT
              ? 'Switch to your EOA'
              : 'Switch to your smart account'),
        l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `);
  }
  onChooseName() {
    f.push('ChooseAccountName');
  }
  async changePreferredAccountType() {
    const e = this.network?.chainNamespace,
      i = d.checkIfSmartAccountEnabled(),
      o =
        this.preferredAccountTypes?.[e] === M.ACCOUNT_TYPES.SMART_ACCOUNT || !i
          ? M.ACCOUNT_TYPES.EOA
          : M.ACCOUNT_TYPES.SMART_ACCOUNT;
    m.getAuthConnector() &&
      ((this.loading = !0),
      await v.setPreferredAccountType(o, e),
      (this.text =
        o === M.ACCOUNT_TYPES.SMART_ACCOUNT
          ? 'Switch to your EOA'
          : 'Switch to your smart account'),
      (this.switched = !0),
      uo.resetSend(),
      (this.loading = !1),
      this.requestUpdate());
  }
  onNetworks() {
    this.isAllowedNetworkSwitch() && f.push('Networks');
  }
  async onDisconnect() {
    try {
      (this.disconnecting = !0), await v.disconnect(), W.close();
    } catch {
      $.sendEvent({ type: 'track', event: 'DISCONNECT_ERROR' }),
        P.showError('Failed to disconnect');
    } finally {
      this.disconnecting = !1;
    }
  }
  onGoToUpgradeView() {
    $.sendEvent({ type: 'track', event: 'EMAIL_UPGRADE_FROM_MODAL' }), f.push('UpgradeEmailWallet');
  }
};
oe([u()], Y.prototype, 'address', void 0);
oe([u()], Y.prototype, 'profileImage', void 0);
oe([u()], Y.prototype, 'profileName', void 0);
oe([u()], Y.prototype, 'network', void 0);
oe([u()], Y.prototype, 'preferredAccountTypes', void 0);
oe([u()], Y.prototype, 'disconnecting', void 0);
oe([u()], Y.prototype, 'loading', void 0);
oe([u()], Y.prototype, 'switched', void 0);
oe([u()], Y.prototype, 'text', void 0);
Y = oe([h('w3m-account-settings-view')], Y);
const So = x`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;
var Se =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let re = class extends w {
  constructor() {
    super(...arguments),
      (this.avatarSrc = void 0),
      (this.profileName = ''),
      (this.address = ''),
      (this.icon = 'mail');
  }
  render() {
    const e = d.state.activeChain,
      o = m.getConnectorId(e) === T.CONNECTOR_ID.AUTH;
    return l`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${o ? this.getIconTemplate(this.icon) : ''}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${A.getTruncateString({ string: this.profileName || this.address, charsStart: this.profileName ? 18 : 4, charsEnd: this.profileName ? 0 : 4, truncate: this.profileName ? 'end' : 'middle' })}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`;
  }
  handleClick(e) {
    if (e.target instanceof HTMLElement && e.target.id === 'copy-address') {
      this.onCopyClick?.(e);
      return;
    }
    this.onProfileClick?.(e);
  }
  getIconTemplate(e) {
    return l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e || 'networkPlaceholder'}"
      ></wui-icon-box>
    `;
  }
};
re.styles = [S, I, So];
Se([c()], re.prototype, 'avatarSrc', void 0);
Se([c()], re.prototype, 'profileName', void 0);
Se([c()], re.prototype, 'address', void 0);
Se([c()], re.prototype, 'icon', void 0);
Se([c()], re.prototype, 'onProfileClick', void 0);
Se([c()], re.prototype, 'onCopyClick', void 0);
re = Se([h('wui-profile-button-v2')], re);
const _o = x`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;
var ge =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ee = class extends w {
  constructor() {
    super(...arguments),
      (this.tabs = []),
      (this.onTabChange = () => null),
      (this.buttons = []),
      (this.disabled = !1),
      (this.localTabWidth = '100px'),
      (this.activeTab = 0),
      (this.isDense = !1);
  }
  render() {
    return (
      (this.isDense = this.tabs.length > 3),
      (this.style.cssText = `
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `),
      (this.dataset.type = this.isDense ? 'flex' : 'block'),
      this.tabs.map((e, i) => {
        const o = i === this.activeTab;
        return l`
        <button
          ?disabled=${this.disabled}
          @click=${() => this.onTabClick(i)}
          data-active=${o}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `;
      })
    );
  }
  firstUpdated() {
    this.shadowRoot &&
      this.isDense &&
      ((this.buttons = [...this.shadowRoot.querySelectorAll('button')]),
      setTimeout(() => {
        this.animateTabs(0, !0);
      }, 0));
  }
  iconTemplate(e) {
    return e.icon ? l`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>` : null;
  }
  onTabClick(e) {
    this.buttons && this.animateTabs(e, !1), (this.activeTab = e), this.onTabChange(e);
  }
  animateTabs(e, i) {
    const o = this.buttons[this.activeTab],
      n = this.buttons[e],
      t = o?.querySelector('wui-text'),
      a = n?.querySelector('wui-text'),
      s = n?.getBoundingClientRect(),
      _ = a?.getBoundingClientRect();
    o &&
      t &&
      !i &&
      e !== this.activeTab &&
      (t.animate([{ opacity: 0 }], { duration: 50, easing: 'ease', fill: 'forwards' }),
      o.animate([{ width: '34px' }], { duration: 500, easing: 'ease', fill: 'forwards' })),
      n &&
        s &&
        _ &&
        a &&
        (e !== this.activeTab || i) &&
        ((this.localTabWidth = `${Math.round(s.width + _.width) + 6}px`),
        n.animate([{ width: `${s.width + _.width}px` }], {
          duration: i ? 0 : 500,
          fill: 'forwards',
          easing: 'ease',
        }),
        a.animate([{ opacity: 1 }], {
          duration: i ? 0 : 125,
          delay: i ? 0 : 200,
          fill: 'forwards',
          easing: 'ease',
        }));
  }
};
ee.styles = [S, I, _o];
ge([c({ type: Array })], ee.prototype, 'tabs', void 0);
ge([c()], ee.prototype, 'onTabChange', void 0);
ge([c({ type: Array })], ee.prototype, 'buttons', void 0);
ge([c({ type: Boolean })], ee.prototype, 'disabled', void 0);
ge([c()], ee.prototype, 'localTabWidth', void 0);
ge([u()], ee.prototype, 'activeTab', void 0);
ge([u()], ee.prototype, 'isDense', void 0);
ee = ge([h('wui-tabs')], ee);
const Io = x`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;
var G =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let U = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.caipAddress = b.state.caipAddress),
      (this.address = g.getPlainAddress(b.state.caipAddress)),
      (this.allAccounts = b.state.allAccounts),
      (this.profileImage = b.state.profileImage),
      (this.profileName = b.state.profileName),
      (this.disconnecting = !1),
      (this.balance = b.state.balance),
      (this.balanceSymbol = b.state.balanceSymbol),
      (this.features = y.state.features),
      (this.namespace = d.state.activeChain),
      (this.chainId = d.state.activeCaipNetwork?.id),
      this.unsubscribe.push(
        b.subscribeKey('caipAddress', (e) => {
          (this.address = g.getPlainAddress(e)), (this.caipAddress = e);
        }),
        b.subscribeKey('balance', (e) => (this.balance = e)),
        b.subscribeKey('balanceSymbol', (e) => (this.balanceSymbol = e)),
        b.subscribeKey('profileName', (e) => (this.profileName = e)),
        b.subscribeKey('profileImage', (e) => (this.profileImage = e)),
        y.subscribeKey('features', (e) => (this.features = e)),
        b.subscribeKey('allAccounts', (e) => {
          this.allAccounts = e;
        }),
        d.subscribeKey('activeChain', (e) => (this.namespace = e)),
        d.subscribeKey('activeCaipNetwork', (e) => {
          if (e) {
            const [i, o] = e?.caipNetworkId?.split(':') || [];
            i && o && ((this.namespace = i), (this.chainId = o));
          }
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    if (!this.caipAddress) return null;
    const e = d.state.activeChain !== T.CHAIN.SOLANA && this.allAccounts.length > 1;
    return l`<wui-flex
        flexDirection="column"
        .padding=${['0', 'xl', 'm', 'xl']}
        alignItems="center"
        gap="l"
      >
        ${e ? this.multiAccountTemplate() : this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${g.formatBalance(this.balance, this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${['0', 's', 's', 's']}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`;
  }
  onrampTemplate() {
    if (!this.namespace) return null;
    const e = this.features?.onramp,
      i = L.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);
    return !e || !i
      ? null
      : l`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `;
  }
  orderedFeaturesTemplate() {
    return (this.features?.walletFeaturesOrder || L.DEFAULT_FEATURES.walletFeaturesOrder).map(
      (i) => {
        switch (i) {
          case 'onramp':
            return this.onrampTemplate();
          case 'swaps':
            return this.swapsTemplate();
          case 'send':
            return this.sendTemplate();
          default:
            return null;
        }
      }
    );
  }
  activityTemplate() {
    return this.namespace &&
      this.features?.history &&
      L.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)
      ? l` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`
      : null;
  }
  swapsTemplate() {
    const e = this.features?.swaps,
      i = d.state.activeChain === T.CHAIN.EVM;
    return !e || !i
      ? null
      : l`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `;
  }
  sendTemplate() {
    const e = this.features?.send,
      i = d.state.activeChain,
      o = L.SEND_SUPPORTED_NAMESPACES.includes(i);
    return !e || !o
      ? null
      : l`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `;
  }
  authCardTemplate() {
    const e = d.state.activeChain,
      i = m.getConnectorId(e),
      o = m.getAuthConnector(),
      { origin: n } = location;
    return !o || i !== T.CONNECTOR_ID.AUTH || n.includes(L.SECURE_SITE)
      ? null
      : l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `;
  }
  handleSwitchAccountsView() {
    f.push('SwitchAddress');
  }
  handleClickPay() {
    f.push('OnRampProviders');
  }
  handleClickSwap() {
    f.push('Swap');
  }
  handleClickSend() {
    f.push('WalletSend');
  }
  explorerBtnTemplate() {
    return b.state.addressExplorerUrl
      ? l`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `
      : null;
  }
  singleAccountTemplate() {
    return l`
      <wui-avatar
        alt=${p(this.caipAddress)}
        address=${p(g.getPlainAddress(this.caipAddress))}
        imageSrc=${p(this.profileImage === null ? void 0 : this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName ? A.getTruncateString({ string: this.profileName, charsStart: 20, charsEnd: 0, truncate: 'end' }) : A.getTruncateString({ string: this.address || '', charsStart: 4, charsEnd: 4, truncate: 'middle' })}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `;
  }
  multiAccountTemplate() {
    if (!this.address) throw new Error('w3m-account-view: No account provided');
    const e = this.allAccounts.find((o) => o.address === this.address),
      i = b.state.addressLabels.get(this.address);
    return this.namespace === 'bip122'
      ? this.btcAccountsTemplate()
      : l`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${p(this.address)}
        icon="${e?.type === M.ACCOUNT_TYPES.SMART_ACCOUNT && d.state.activeChain === T.CHAIN.EVM ? 'lightbulb' : 'mail'}"
        avatarSrc=${p(this.profileImage ? this.profileImage : void 0)}
        profileName=${p(i || this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `;
  }
  btcAccountsTemplate() {
    return l`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${p(this.profileImage ? this.profileImage : void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{ label: 'Payment' }, { label: 'Ordinals' }]}
        .onTabChange=${(e) => b.setCaipAddress(`bip122:${this.chainId}:${this.allAccounts[e]?.address || ''}`, this.namespace)}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${A.getTruncateString({ string: this.profileName || this.address || '', charsStart: this.profileName ? 18 : 4, charsEnd: this.profileName ? 0 : 4, truncate: this.profileName ? 'end' : 'middle' })}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`;
  }
  onCopyAddress() {
    try {
      this.address && (g.copyToClopboard(this.address), P.showSuccess('Address copied'));
    } catch {
      P.showError('Failed to copy');
    }
  }
  onTransactions() {
    const e = d.state.activeChain;
    $.sendEvent({
      type: 'track',
      event: 'CLICK_TRANSACTIONS',
      properties: {
        isSmartAccount: b.state.preferredAccountTypes?.[e] === M.ACCOUNT_TYPES.SMART_ACCOUNT,
      },
    }),
      f.push('Transactions');
  }
  async onDisconnect() {
    try {
      (this.disconnecting = !0), await v.disconnect(), W.close();
    } catch {
      $.sendEvent({ type: 'track', event: 'DISCONNECT_ERROR' }),
        P.showError('Failed to disconnect');
    } finally {
      this.disconnecting = !1;
    }
  }
  onExplorer() {
    const e = b.state.addressExplorerUrl;
    e && g.openHref(e, '_blank');
  }
  onGoToUpgradeView() {
    $.sendEvent({ type: 'track', event: 'EMAIL_UPGRADE_FROM_MODAL' }), f.push('UpgradeEmailWallet');
  }
};
U.styles = Io;
G([u()], U.prototype, 'caipAddress', void 0);
G([u()], U.prototype, 'address', void 0);
G([u()], U.prototype, 'allAccounts', void 0);
G([u()], U.prototype, 'profileImage', void 0);
G([u()], U.prototype, 'profileName', void 0);
G([u()], U.prototype, 'disconnecting', void 0);
G([u()], U.prototype, 'balance', void 0);
G([u()], U.prototype, 'balanceSymbol', void 0);
G([u()], U.prototype, 'features', void 0);
G([u()], U.prototype, 'namespace', void 0);
G([u()], U.prototype, 'chainId', void 0);
U = G([h('w3m-account-default-widget')], U);
const Ao = x`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;
var ri =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let qe = class extends w {
  constructor() {
    super(...arguments), (this.dollars = '0'), (this.pennies = '00');
  }
  render() {
    return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`;
  }
};
qe.styles = [S, Ao];
ri([c()], qe.prototype, 'dollars', void 0);
ri([c()], qe.prototype, 'pennies', void 0);
qe = ri([h('wui-balance')], qe);
const Wo = x`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;
var Le =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ue = class extends w {
  constructor() {
    super(...arguments),
      (this.networkSrc = void 0),
      (this.avatarSrc = void 0),
      (this.profileName = ''),
      (this.address = ''),
      (this.icon = 'chevronBottom');
  }
  render() {
    return l`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${A.getTruncateString({ string: this.profileName || this.address, charsStart: this.profileName ? 18 : 4, charsEnd: this.profileName ? 0 : 4, truncate: this.profileName ? 'end' : 'middle' })}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`;
  }
  networkImageTemplate() {
    return this.networkSrc
      ? l`<wui-image src=${this.networkSrc}></wui-image>`
      : l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
  }
};
ue.styles = [S, I, Wo];
Le([c()], ue.prototype, 'networkSrc', void 0);
Le([c()], ue.prototype, 'avatarSrc', void 0);
Le([c()], ue.prototype, 'profileName', void 0);
Le([c()], ue.prototype, 'address', void 0);
Le([c()], ue.prototype, 'icon', void 0);
ue = Le([h('wui-profile-button')], ue);
const Ro = x`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;
var Rt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Re = class extends w {
  constructor() {
    super(...arguments), (this.placement = 'top'), (this.variant = 'fill'), (this.message = '');
  }
  render() {
    return (
      (this.dataset.variant = this.variant),
      l`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant === 'fill' ? 'cursor' : 'cursorTransparent'}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`
    );
  }
};
Re.styles = [S, I, Ro];
Rt([c()], Re.prototype, 'placement', void 0);
Rt([c()], Re.prototype, 'variant', void 0);
Rt([c()], Re.prototype, 'message', void 0);
Re = Rt([h('wui-tooltip')], Re);
const No = {
    getTabsByNamespace(r) {
      return !!r && r === T.CHAIN.EVM ? po.ACCOUNT_TABS : [];
    },
  },
  Eo = x`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;
var Oo =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let qt = class extends w {
  render() {
    return l`<w3m-activity-list page="account"></w3m-activity-list>`;
  }
};
qt.styles = Eo;
qt = Oo([h('w3m-account-activity-widget')], qt);
const Po = x`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;
var jo =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Ft = class extends w {
  render() {
    return l`${this.nftTemplate()}`;
  }
  nftTemplate() {
    return l` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`;
  }
  onReceiveClick() {
    f.push('WalletReceive');
  }
};
Ft.styles = Po;
Ft = jo([h('w3m-account-nfts-widget')], Ft);
const Do = x`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;
var be =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let te = class extends w {
  constructor() {
    super(...arguments),
      (this.icon = 'card'),
      (this.text = ''),
      (this.description = ''),
      (this.tag = void 0),
      (this.iconBackgroundColor = 'accent-100'),
      (this.iconColor = 'accent-100'),
      (this.disabled = !1);
  }
  render() {
    return l`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `;
  }
  titleTemplate() {
    return this.tag
      ? l` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`
      : l`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`;
  }
};
te.styles = [S, I, Do];
be([c()], te.prototype, 'icon', void 0);
be([c()], te.prototype, 'text', void 0);
be([c()], te.prototype, 'description', void 0);
be([c()], te.prototype, 'tag', void 0);
be([c()], te.prototype, 'iconBackgroundColor', void 0);
be([c()], te.prototype, 'iconColor', void 0);
be([c({ type: Boolean })], te.prototype, 'disabled', void 0);
te = be([h('wui-list-description')], te);
const Lo = x`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;
var Hi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let lt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tokenBalance = b.state.tokenBalance),
      this.unsubscribe.push(
        b.subscribe((e) => {
          this.tokenBalance = e.tokenBalance;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return l`${this.tokenTemplate()}`;
  }
  tokenTemplate() {
    return this.tokenBalance && this.tokenBalance?.length > 0
      ? l`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`
      : l` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`;
  }
  tokenItemTemplate() {
    return this.tokenBalance?.map(
      (e) => l`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`
    );
  }
  onReceiveClick() {
    f.push('WalletReceive');
  }
  onBuyClick() {
    const e = d.state.activeChain;
    $.sendEvent({
      type: 'track',
      event: 'SELECT_BUY_CRYPTO',
      properties: {
        isSmartAccount: b.state.preferredAccountTypes?.[e] === M.ACCOUNT_TYPES.SMART_ACCOUNT,
      },
    }),
      f.push('OnRampProviders');
  }
};
lt.styles = Lo;
Hi([u()], lt.prototype, 'tokenBalance', void 0);
lt = Hi([h('w3m-account-tokens-widget')], lt);
const Uo = x`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;
var ne =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
const Bo = 3,
  zo = 48,
  Mo = 430;
let q = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.address = b.state.address),
      (this.profileImage = b.state.profileImage),
      (this.profileName = b.state.profileName),
      (this.network = d.state.activeCaipNetwork),
      (this.currentTab = b.state.currentTab),
      (this.tokenBalance = b.state.tokenBalance),
      (this.features = y.state.features),
      (this.networkImage = C.getNetworkImage(this.network)),
      this.unsubscribe.push(
        ce.subscribeNetworkImages(() => {
          this.networkImage = C.getNetworkImage(this.network);
        }),
        b.subscribe((e) => {
          e.address
            ? ((this.address = e.address),
              (this.profileImage = e.profileImage),
              (this.profileName = e.profileName),
              (this.currentTab = e.currentTab),
              (this.tokenBalance = e.tokenBalance))
            : W.close();
        }),
        d.subscribeKey('activeCaipNetwork', (e) => (this.network = e)),
        y.subscribeKey('features', (e) => (this.features = e))
      ),
      this.watchSwapValues();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), clearInterval(this.watchTokenBalance);
  }
  firstUpdated() {
    b.fetchTokenBalance();
  }
  render() {
    if (!this.address) throw new Error('w3m-account-view: No account provided');
    return l`<wui-flex
      flexDirection="column"
      .padding=${['0', 'xl', 'm', 'xl']}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${p(this.address)}
        networkSrc=${p(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${p(this.profileImage ? this.profileImage : void 0)}
        profileName=${p(this.profileName ?? void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()} ${this.tabsTemplate()}
      ${this.listContentTemplate()}
    </wui-flex>`;
  }
  orderedWalletFeatures() {
    const e = this.features?.walletFeaturesOrder || L.DEFAULT_FEATURES.walletFeaturesOrder;
    return e.every((o) => !this.features?.[o])
      ? null
      : l`<wui-flex gap="s">
      ${e.map((o) => {
        switch (o) {
          case 'onramp':
            return this.onrampTemplate();
          case 'swaps':
            return this.swapsTemplate();
          case 'receive':
            return this.receiveTemplate();
          case 'send':
            return this.sendTemplate();
          default:
            return null;
        }
      })}
    </wui-flex>`;
  }
  onrampTemplate() {
    return this.features?.onramp
      ? l`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `
      : null;
  }
  swapsTemplate() {
    const e = this.features?.swaps,
      i = d.state.activeChain === T.CHAIN.EVM;
    return !e || !i
      ? null
      : l`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `;
  }
  receiveTemplate() {
    return this.features?.receive
      ? l`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `
      : null;
  }
  sendTemplate() {
    const e = this.features?.send,
      i = d.state.activeChain,
      o = L.SEND_SUPPORTED_NAMESPACES.includes(i);
    return !e || !o
      ? null
      : l`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `;
  }
  watchSwapValues() {
    this.watchTokenBalance = setInterval(
      () => b.fetchTokenBalance((e) => this.onTokenBalanceError(e)),
      1e4
    );
  }
  onTokenBalanceError(e) {
    e instanceof Error &&
      e.cause instanceof Response &&
      e.cause.status === T.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE &&
      clearInterval(this.watchTokenBalance);
  }
  listContentTemplate() {
    return this.currentTab === 0
      ? l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`
      : this.currentTab === 1
        ? l`<w3m-account-nfts-widget></w3m-account-nfts-widget>`
        : this.currentTab === 2
          ? l`<w3m-account-activity-widget></w3m-account-activity-widget>`
          : l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`;
  }
  tokenBalanceTemplate() {
    if (this.tokenBalance && this.tokenBalance?.length >= 0) {
      const e = g.calculateBalance(this.tokenBalance),
        { dollars: i = '0', pennies: o = '00' } = g.formatTokenBalance(e);
      return l`<wui-balance dollars=${i} pennies=${o}></wui-balance>`;
    }
    return l`<wui-balance dollars="0" pennies="00"></wui-balance>`;
  }
  tabsTemplate() {
    const e = No.getTabsByNamespace(d.state.activeChain);
    return e.length === 0
      ? null
      : l`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${g.isMobile() && window.innerWidth < Mo ? `${(window.innerWidth - zo) / Bo}px` : '104px'}
      .tabs=${e}
    ></wui-tabs>`;
  }
  onTabChange(e) {
    b.setCurrentTab(e);
  }
  onProfileButtonClick() {
    const { allAccounts: e } = b.state;
    e.length > 1 ? f.push('Profile') : f.push('AccountSettings');
  }
  onBuyClick() {
    f.push('OnRampProviders');
  }
  onSwapClick() {
    const e = d.state.activeChain;
    this.network?.caipNetworkId && !L.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)
      ? f.push('UnsupportedChain', { swapUnsupportedChain: !0 })
      : ($.sendEvent({
          type: 'track',
          event: 'OPEN_SWAP',
          properties: {
            network: this.network?.caipNetworkId || '',
            isSmartAccount: b.state.preferredAccountTypes?.[e] === M.ACCOUNT_TYPES.SMART_ACCOUNT,
          },
        }),
        f.push('Swap'));
  }
  onReceiveClick() {
    f.push('WalletReceive');
  }
  onSendClick() {
    const e = d.state.activeChain;
    $.sendEvent({
      type: 'track',
      event: 'OPEN_SEND',
      properties: {
        network: this.network?.caipNetworkId || '',
        isSmartAccount: b.state.preferredAccountTypes?.[e] === M.ACCOUNT_TYPES.SMART_ACCOUNT,
      },
    }),
      f.push('WalletSend');
  }
};
q.styles = Uo;
ne([u()], q.prototype, 'watchTokenBalance', void 0);
ne([u()], q.prototype, 'address', void 0);
ne([u()], q.prototype, 'profileImage', void 0);
ne([u()], q.prototype, 'profileName', void 0);
ne([u()], q.prototype, 'network', void 0);
ne([u()], q.prototype, 'currentTab', void 0);
ne([u()], q.prototype, 'tokenBalance', void 0);
ne([u()], q.prototype, 'features', void 0);
ne([u()], q.prototype, 'networkImage', void 0);
q = ne([h('w3m-account-wallet-features-widget')], q);
var Ki =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Gt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.namespace = d.state.activeChain),
      this.unsubscribe.push(
        d.subscribeKey('activeChain', (e) => {
          this.namespace = e;
        })
      );
  }
  render() {
    if (!this.namespace) return null;
    const e = m.getConnectorId(this.namespace),
      i = m.getAuthConnector();
    return l`
      ${i && e === T.CONNECTOR_ID.AUTH ? this.walletFeaturesTemplate() : this.defaultTemplate()}
    `;
  }
  walletFeaturesTemplate() {
    return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`;
  }
  defaultTemplate() {
    return l`<w3m-account-default-widget></w3m-account-default-widget>`;
  }
};
Ki([u()], Gt.prototype, 'namespace', void 0);
Gt = Ki([h('w3m-account-view')], Gt);
const Vo = x`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;
var it =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let xe = class extends w {
  constructor() {
    super(...arguments),
      (this.accountAddress = ''),
      (this.accountType = ''),
      (this.labels = b.state.addressLabels),
      (this.caipNetwork = d.state.activeCaipNetwork),
      (this.socialProvider = me.getConnectedSocialProvider()),
      (this.balance = 0),
      (this.fetchingBalance = !0),
      (this.shouldShowIcon = !1),
      (this.selected = !1);
  }
  connectedCallback() {
    super.connectedCallback(),
      Mi.getBalance(this.accountAddress, this.caipNetwork?.caipNetworkId)
        .then((e) => {
          let i = this.balance;
          e.balances.length > 0 && (i = e.balances.reduce((o, n) => o + (n?.value || 0), 0)),
            (this.balance = i),
            (this.fetchingBalance = !1),
            this.requestUpdate();
        })
        .catch(() => {
          (this.fetchingBalance = !1), this.requestUpdate();
        });
  }
  render() {
    const e = this.getLabel(),
      i = d.state.activeChain,
      o = m.getConnectorId(i);
    return (
      (this.shouldShowIcon = o === T.CONNECTOR_ID.AUTH),
      l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${['0', '0', 's', '1xs']}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${
            this.shouldShowIcon
              ? l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType === M.ACCOUNT_TYPES.EOA ? (this.socialProvider ?? 'mail') : 'lightbulb'}
                background="fg-300"
              ></wui-icon-box>`
              : l`<wui-flex .padding="${['0', '0', '0', 's']}"></wui-flex>`
          }
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${A.getTruncateString({ string: this.accountAddress, charsStart: 4, charsEnd: 6, truncate: 'middle' })}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance ? l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>` : l` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `
    );
  }
  getLabel() {
    let e = this.labels?.get(this.accountAddress);
    const i = d.state.activeChain,
      o = m.getConnectorId(i);
    return (
      !e && o === T.CONNECTOR_ID.AUTH
        ? (e = `${this.accountType === 'eoa' ? (this.socialProvider ?? 'Email') : 'Smart'} Account`)
        : e || (e = 'EOA'),
      e
    );
  }
};
xe.styles = [S, I, Vo];
it([c()], xe.prototype, 'accountAddress', void 0);
it([c()], xe.prototype, 'accountType', void 0);
it([c({ type: Boolean })], xe.prototype, 'selected', void 0);
it([c({ type: Function })], xe.prototype, 'onSelect', void 0);
xe = it([h('wui-list-account')], xe);
const Ho = x`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;
var Ue =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let de = class extends w {
  constructor() {
    super(),
      (this.usubscribe = []),
      (this.address = b.state.address),
      (this.profileImage = b.state.profileImage),
      (this.profileName = b.state.profileName),
      (this.accounts = b.state.allAccounts),
      (this.loading = !1),
      this.usubscribe.push(
        b.subscribeKey('address', (e) => {
          e ? (this.address = e) : W.close();
        })
      ),
      this.usubscribe.push(
        b.subscribeKey('profileImage', (e) => {
          this.profileImage = e;
        })
      ),
      this.usubscribe.push(
        b.subscribeKey('profileName', (e) => {
          this.profileName = e;
        })
      );
  }
  disconnectedCallback() {
    this.usubscribe.forEach((e) => e());
  }
  render() {
    if (!this.address) throw new Error('w3m-profile-view: No account provided');
    return l`
      <wui-flex flexDirection="column" gap="l" .padding=${['0', 'xl', 'm', 'xl']}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${p(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName ? A.getTruncateString({ string: this.profileName, charsStart: 20, charsEnd: 0, truncate: 'end' }) : A.getTruncateString({ string: this.address, charsStart: 4, charsEnd: 6, truncate: 'middle' })}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${() => f.push('AccountSettings')}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `;
  }
  accountsTemplate() {
    return l`<wui-flex flexDirection="column">
      <wui-flex .padding=${['3xs', 'm', 's', 's']}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((e) => this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`;
  }
  async onSwitchAccount(e) {
    const i = d.state.activeCaipNetwork?.chainNamespace;
    if (((this.loading = !0), m.getAuthConnector())) {
      const n = e.type;
      await v.setPreferredAccountType(n, i);
    }
    b.setShouldUpdateToAddress(e.address, i), (this.loading = !1);
  }
  accountTemplate(e) {
    return l`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${
        e.address === this.address
          ? ''
          : l`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${() => this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`
      }
    </wui-list-account>`;
  }
  onCopyAddress() {
    try {
      this.address && (g.copyToClopboard(this.address), P.showSuccess('Address copied'));
    } catch {
      P.showError('Failed to copy');
    }
  }
};
de.styles = Ho;
Ue([u()], de.prototype, 'address', void 0);
Ue([u()], de.prototype, 'profileImage', void 0);
Ue([u()], de.prototype, 'profileName', void 0);
Ue([u()], de.prototype, 'accounts', void 0);
Ue([u()], de.prototype, 'loading', void 0);
de = Ue([h('w3m-profile-view')], de);
const Ko = x`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;
var Nt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Ne = class extends w {
  constructor() {
    super(...arguments), (this.imageSrc = ''), (this.text = ''), (this.size = '');
  }
  render() {
    return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `;
  }
};
Ne.styles = [S, I, Ko];
Nt([c()], Ne.prototype, 'imageSrc', void 0);
Nt([c()], Ne.prototype, 'text', void 0);
Nt([c()], Ne.prototype, 'size', void 0);
Ne = Nt([h('wui-banner-img')], Ne);
const qo = x`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;
var si =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Fe = class extends w {
  constructor() {
    super(),
      (this.metadata = y.state.metadata),
      (this.allAccounts = b.state.allAccounts || []),
      (this.balances = {}),
      (this.labels = b.state.addressLabels),
      (this.currentAddress = b.state.address || ''),
      (this.caipNetwork = d.state.activeCaipNetwork),
      b.subscribeKey('allAccounts', (e) => {
        this.allAccounts = e;
      });
  }
  connectedCallback() {
    super.connectedCallback(),
      this.allAccounts.forEach((e) => {
        Mi.getBalance(e.address, this.caipNetwork?.caipNetworkId).then((i) => {
          let o = this.balances[e.address] || 0;
          i.balances.length > 0 && (o = i.balances.reduce((n, t) => n + (t?.value || 0), 0)),
            (this.balances[e.address] = o),
            this.requestUpdate();
        });
      });
  }
  getAddressIcon(e) {
    return e === 'smartAccount' ? 'lightbulb' : 'mail';
  }
  render() {
    return l`
      <wui-flex justifyContent="center" .padding=${['xl', '0', 'xl', '0']}>
        <wui-banner-img
          imageSrc=${p(this.metadata?.icons[0])}
          text=${p(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${['l', 'xl', 'xl', 'xl']}>
        ${this.allAccounts.map((e, i) => this.getAddressTemplate(e, i))}
      </wui-flex>
    `;
  }
  getAddressTemplate(e, i) {
    const o = this.labels?.get(e.address),
      n = d.state.activeChain,
      a = m.getConnectorId(n) === T.CONNECTOR_ID.AUTH;
    return l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${
            a
              ? l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`
              : l`<wui-flex .padding="${['0', '0', '0', 's']}"></wui-flex>`
          }
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${o || A.getTruncateString({ string: e.address, charsStart: 4, charsEnd: 6, truncate: 'middle' })}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[e.address] == 'number' ? `$${this.balances[e.address]?.toFixed(2)}` : l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${
            e.address?.toLowerCase() === this.currentAddress?.toLowerCase()
              ? ''
              : l`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${i}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${() => this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `
          }
        </wui-flex>
      </wui-flex>
    `;
  }
  onSwitchAddress(e) {
    const i = d.state.activeCaipNetwork,
      o = i?.chainNamespace,
      n = `${o}:${i?.id}:${e}`;
    b.setCaipAddress(n, o), W.close();
  }
};
Fe.styles = qo;
si([u()], Fe.prototype, 'allAccounts', void 0);
si([u()], Fe.prototype, 'balances', void 0);
Fe = si([h('w3m-switch-address-view')], Fe);
const Fo = x`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;
var qi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ct = class extends w {
  constructor() {
    super(...arguments), (this.inputElementRef = oi()), (this.checked = void 0);
  }
  render() {
    return l`
      <label>
        <input
          ${ni(this.inputElementRef)}
          type="checkbox"
          ?checked=${p(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
  }
  dispatchChangeEvent() {
    this.dispatchEvent(
      new CustomEvent('switchChange', {
        detail: this.inputElementRef.value?.checked,
        bubbles: !0,
        composed: !0,
      })
    );
  }
};
ct.styles = [S, I, ho, Fo];
qi([c({ type: Boolean })], ct.prototype, 'checked', void 0);
ct = qi([h('wui-switch')], ct);
const Go = x`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;
var Fi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ut = class extends w {
  constructor() {
    super(...arguments), (this.checked = void 0);
  }
  render() {
    return l`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${p(this.checked)}></wui-switch>
      </button>
    `;
  }
};
ut.styles = [S, I, Go];
Fi([c({ type: Boolean })], ut.prototype, 'checked', void 0);
ut = Fi([h('wui-certified-switch')], ut);
const Xo = x`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;
var Gi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let dt = class extends w {
  constructor() {
    super(...arguments), (this.icon = 'copy');
  }
  render() {
    return l`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `;
  }
};
dt.styles = [S, I, Xo];
Gi([c()], dt.prototype, 'icon', void 0);
dt = Gi([h('wui-input-element')], dt);
const Yo = x`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
var Qo =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Xt = class extends w {
  constructor() {
    super(...arguments), (this.inputComponentRef = oi());
  }
  render() {
    return l`
      <wui-input-text
        ${ni(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `;
  }
  clearValue() {
    const i = this.inputComponentRef.value?.inputElementRef.value;
    i && ((i.value = ''), i.focus(), i.dispatchEvent(new Event('input')));
  }
};
Xt.styles = [S, Yo];
Xt = Qo([h('wui-search-bar')], Xt);
const Jo = x`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;
var Xi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let pt = class extends w {
  constructor() {
    super(...arguments), (this.type = 'wallet');
  }
  render() {
    return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `;
  }
  shimmerTemplate() {
    return this.type === 'network'
      ? l` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${bo}`
      : l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
  }
};
pt.styles = [S, I, Jo];
Xi([c()], pt.prototype, 'type', void 0);
pt = Xi([h('wui-card-select-loader')], pt);
const Zo = x`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
var X =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let B = class extends w {
  render() {
    return (
      (this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && A.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && A.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && A.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && A.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && A.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && A.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && A.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && A.getSpacingStyles(this.margin, 3)};
    `),
      l`<slot></slot>`
    );
  }
};
B.styles = [S, Zo];
X([c()], B.prototype, 'gridTemplateRows', void 0);
X([c()], B.prototype, 'gridTemplateColumns', void 0);
X([c()], B.prototype, 'justifyItems', void 0);
X([c()], B.prototype, 'alignItems', void 0);
X([c()], B.prototype, 'justifyContent', void 0);
X([c()], B.prototype, 'alignContent', void 0);
X([c()], B.prototype, 'columnGap', void 0);
X([c()], B.prototype, 'rowGap', void 0);
X([c()], B.prototype, 'gap', void 0);
X([c()], B.prototype, 'padding', void 0);
X([c()], B.prototype, 'margin', void 0);
B = X([h('wui-grid')], B);
const en = x`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;
var ot =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ve = class extends w {
  constructor() {
    super(),
      (this.observer = new IntersectionObserver(() => {})),
      (this.visible = !1),
      (this.imageSrc = void 0),
      (this.imageLoading = !1),
      (this.wallet = void 0),
      (this.observer = new IntersectionObserver(
        (e) => {
          e.forEach((i) => {
            i.isIntersecting ? ((this.visible = !0), this.fetchImageSrc()) : (this.visible = !1);
          });
        },
        { threshold: 0.01 }
      ));
  }
  firstUpdated() {
    this.observer.observe(this);
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    const e = this.wallet?.badge_type === 'certified';
    return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${p(e ? 'certified' : void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e ? l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
  }
  imageTemplate() {
    return (!this.visible && !this.imageSrc) || this.imageLoading
      ? this.shimmerTemplate()
      : l`
      <wui-wallet-image
        size="md"
        imageSrc=${p(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
  }
  shimmerTemplate() {
    return l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
  }
  async fetchImageSrc() {
    this.wallet &&
      ((this.imageSrc = C.getWalletImage(this.wallet)),
      !this.imageSrc &&
        ((this.imageLoading = !0),
        (this.imageSrc = await C.fetchWalletImage(this.wallet.image_id)),
        (this.imageLoading = !1)));
  }
};
ve.styles = en;
ot([u()], ve.prototype, 'visible', void 0);
ot([u()], ve.prototype, 'imageSrc', void 0);
ot([u()], ve.prototype, 'imageLoading', void 0);
ot([c()], ve.prototype, 'wallet', void 0);
ve = ot([h('w3m-all-wallets-list-item')], ve);
const tn = x`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
var Be =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
const Ri = 'local-paginator';
let pe = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.paginationObserver = void 0),
      (this.loading = !k.state.wallets.length),
      (this.wallets = k.state.wallets),
      (this.recommended = k.state.recommended),
      (this.featured = k.state.featured),
      (this.filteredWallets = k.state.filteredWallets),
      this.unsubscribe.push(
        k.subscribeKey('wallets', (e) => (this.wallets = e)),
        k.subscribeKey('recommended', (e) => (this.recommended = e)),
        k.subscribeKey('featured', (e) => (this.featured = e)),
        k.subscribeKey('filteredWallets', (e) => (this.filteredWallets = e))
      );
  }
  firstUpdated() {
    this.initialFetch(), this.createPaginationObserver();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), this.paginationObserver?.disconnect();
  }
  render() {
    return l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${['0', 's', 's', 's']}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    this.loading = !0;
    const e = this.shadowRoot?.querySelector('wui-grid');
    e &&
      (await k.fetchWalletsByPage({ page: 1 }),
      await e.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: 'forwards',
        easing: 'ease',
      }).finished,
      (this.loading = !1),
      e.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: 'forwards',
        easing: 'ease',
      }));
  }
  shimmerTemplate(e, i) {
    return [...Array(e)].map(
      () => l`
        <wui-card-select-loader type="wallet" id=${p(i)}></wui-card-select-loader>
      `
    );
  }
  walletsTemplate() {
    const e =
      this.filteredWallets?.length > 0
        ? g.uniqueBy([...this.featured, ...this.recommended, ...this.filteredWallets], 'id')
        : g.uniqueBy([...this.featured, ...this.recommended, ...this.wallets], 'id');
    return Ie.markWalletsAsInstalled(e).map(
      (o) => l`
        <w3m-all-wallets-list-item
          @click=${() => this.onConnectWallet(o)}
          .wallet=${o}
        ></w3m-all-wallets-list-item>
      `
    );
  }
  paginationLoaderTemplate() {
    const { wallets: e, recommended: i, featured: o, count: n } = k.state,
      t = window.innerWidth < 352 ? 3 : 4,
      a = e.length + i.length;
    let _ = Math.ceil(a / t) * t - a + t;
    return (
      (_ -= e.length ? o.length % t : 0),
      n === 0 && o.length > 0
        ? null
        : n === 0 || [...o, ...e, ...i].length < n
          ? this.shimmerTemplate(_, Ri)
          : null
    );
  }
  createPaginationObserver() {
    const e = this.shadowRoot?.querySelector(`#${Ri}`);
    e &&
      ((this.paginationObserver = new IntersectionObserver(([i]) => {
        if (i?.isIntersecting && !this.loading) {
          const { page: o, count: n, wallets: t } = k.state;
          t.length < n && k.fetchWalletsByPage({ page: o + 1 });
        }
      })),
      this.paginationObserver.observe(e));
  }
  onConnectWallet(e) {
    m.selectWalletConnector(e);
  }
};
pe.styles = tn;
Be([u()], pe.prototype, 'loading', void 0);
Be([u()], pe.prototype, 'wallets', void 0);
Be([u()], pe.prototype, 'recommended', void 0);
Be([u()], pe.prototype, 'featured', void 0);
Be([u()], pe.prototype, 'filteredWallets', void 0);
pe = Be([h('w3m-all-wallets-list')], pe);
const on = x`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
var Et =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Ee = class extends w {
  constructor() {
    super(...arguments),
      (this.prevQuery = ''),
      (this.prevBadge = void 0),
      (this.loading = !0),
      (this.query = '');
  }
  render() {
    return (
      this.onSearch(),
      this.loading
        ? l`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`
        : this.walletsTemplate()
    );
  }
  async onSearch() {
    (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) &&
      ((this.prevQuery = this.query),
      (this.prevBadge = this.badge),
      (this.loading = !0),
      await k.searchWallet({ search: this.query, badge: this.badge }),
      (this.loading = !1));
  }
  walletsTemplate() {
    const { search: e } = k.state,
      i = Ie.markWalletsAsInstalled(e);
    return e.length
      ? l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${['0', 's', 's', 's']}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${i.map(
          (o) => l`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
            ></w3m-all-wallets-list-item>
          `
        )}
      </wui-grid>
    `
      : l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
  }
  onConnectWallet(e) {
    m.selectWalletConnector(e);
  }
};
Ee.styles = on;
Et([u()], Ee.prototype, 'loading', void 0);
Et([c()], Ee.prototype, 'query', void 0);
Et([c()], Ee.prototype, 'badge', void 0);
Ee = Et([h('w3m-all-wallets-search')], Ee);
var li =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ht = class extends w {
  constructor() {
    super(...arguments),
      (this.search = ''),
      (this.onDebouncedSearch = g.debounce((e) => {
        this.search = e;
      }));
  }
  render() {
    const e = this.search.length >= 2;
    return l`
      <wui-flex .padding=${['0', 's', 's', 's']} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${
        e || this.badge
          ? l`<w3m-all-wallets-search
            query=${this.search}
            badge=${p(this.badge)}
          ></w3m-all-wallets-search>`
          : l`<w3m-all-wallets-list badge=${p(this.badge)}></w3m-all-wallets-list>`
      }
    `;
  }
  onInputChange(e) {
    this.onDebouncedSearch(e.detail);
  }
  onClick() {
    if (this.badge === 'certified') {
      this.badge = void 0;
      return;
    }
    (this.badge = 'certified'),
      P.showSvg('Only WalletConnect certified', {
        icon: 'walletConnectBrown',
        iconColor: 'accent-100',
      });
  }
  qrButtonTemplate() {
    return g.isMobile()
      ? l`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `
      : null;
  }
  onWalletConnectQr() {
    f.push('ConnectingWalletConnect');
  }
};
li([u()], ht.prototype, 'search', void 0);
li([u()], ht.prototype, 'badge', void 0);
ht = li([h('w3m-all-wallets-view')], ht);
const nn = x`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;
var Ot =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Oe = class extends w {
  constructor() {
    super(...arguments), (this.text = ''), (this.disabled = !1), (this.tabIdx = void 0);
  }
  render() {
    return l`
      <button ?disabled=${this.disabled} tabindex=${p(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `;
  }
};
Oe.styles = [S, I, nn];
Ot([c()], Oe.prototype, 'text', void 0);
Ot([c({ type: Boolean })], Oe.prototype, 'disabled', void 0);
Ot([c()], Oe.prototype, 'tabIdx', void 0);
Oe = Ot([h('wui-list-button')], Oe);
const an = x`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;
var nt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ye = class extends w {
  constructor() {
    super(...arguments),
      (this.unsubscribe = []),
      (this.formRef = oi()),
      (this.email = ''),
      (this.loading = !1),
      (this.error = '');
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  firstUpdated() {
    this.formRef.value?.addEventListener('keydown', (e) => {
      e.key === 'Enter' && this.onSubmitEmail(e);
    });
  }
  render() {
    return l`
      <form ${ni(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${p(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `;
  }
  submitButtonTemplate() {
    return !this.loading && this.email.length > 3
      ? l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `
      : null;
  }
  loadingTemplate() {
    return this.loading
      ? l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`
      : null;
  }
  templateError() {
    return this.error
      ? l`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`
      : null;
  }
  onEmailInputChange(e) {
    (this.email = e.detail.trim()), (this.error = '');
  }
  async onSubmitEmail(e) {
    if (!T.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((o) => o === d.state.activeChain)) {
      const o = d.getFirstCaipNetworkSupportsAuthConnector();
      if (o) {
        f.push('SwitchNetwork', { network: o });
        return;
      }
    }
    try {
      if (this.loading) return;
      (this.loading = !0), e.preventDefault();
      const o = m.getAuthConnector();
      if (!o) throw new Error('w3m-email-login-widget: Auth connector not found');
      const { action: n } = await o.provider.connectEmail({ email: this.email });
      $.sendEvent({ type: 'track', event: 'EMAIL_SUBMITTED' }),
        n === 'VERIFY_OTP'
          ? ($.sendEvent({ type: 'track', event: 'EMAIL_VERIFICATION_CODE_SENT' }),
            f.push('EmailVerifyOtp', { email: this.email }))
          : n === 'VERIFY_DEVICE'
            ? f.push('EmailVerifyDevice', { email: this.email })
            : n === 'CONNECT' &&
              (await v.connectExternal(o, d.state.activeChain), f.replace('Account'));
    } catch (o) {
      g.parseError(o)?.includes('Invalid email')
        ? (this.error = 'Invalid email. Try again.')
        : P.showError(o);
    } finally {
      this.loading = !1;
    }
  }
  onFocusEvent() {
    $.sendEvent({ type: 'track', event: 'EMAIL_LOGIN_SELECTED' });
  }
};
ye.styles = an;
nt([c()], ye.prototype, 'tabIdx', void 0);
nt([u()], ye.prototype, 'email', void 0);
nt([u()], ye.prototype, 'loading', void 0);
nt([u()], ye.prototype, 'error', void 0);
ye = nt([h('w3m-email-login-widget')], ye);
const rn = x`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;
var Pt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Pe = class extends w {
  constructor() {
    super(...arguments), (this.logo = 'google'), (this.disabled = !1), (this.tabIdx = void 0);
  }
  render() {
    return l`
      <button ?disabled=${this.disabled} tabindex=${p(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `;
  }
};
Pe.styles = [S, I, rn];
Pt([c()], Pe.prototype, 'logo', void 0);
Pt([c({ type: Boolean })], Pe.prototype, 'disabled', void 0);
Pt([c()], Pe.prototype, 'tabIdx', void 0);
Pe = Pt([h('wui-logo-select')], Pe);
const sn = x`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
var _e =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
const Ni = 2,
  Ei = 6;
let se = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.walletGuide = 'get-started'),
      (this.tabIdx = void 0),
      (this.connectors = m.state.connectors),
      (this.features = y.state.features),
      (this.authConnector = this.connectors.find((e) => e.type === 'AUTH')),
      (this.isPwaLoading = !1),
      this.unsubscribe.push(
        m.subscribeKey('connectors', (e) => {
          (this.connectors = e),
            (this.authConnector = this.connectors.find((i) => i.type === 'AUTH'));
        }),
        y.subscribeKey('features', (e) => (this.features = e))
      );
  }
  connectedCallback() {
    super.connectedCallback(), this.handlePwaFrameLoad();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `;
  }
  topViewTemplate() {
    const e = this.walletGuide === 'explore';
    let i = this.features?.socials;
    return !i && e
      ? ((i = L.DEFAULT_FEATURES.socials), this.renderTopViewContent(i))
      : i
        ? this.renderTopViewContent(i)
        : null;
  }
  renderTopViewContent(e) {
    return e.length === 2
      ? l` <wui-flex gap="xs">
        ${e.slice(0, Ni).map(
          (i) => l`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${() => {
                this.onSocialClick(i);
              }}
              logo=${i}
              tabIdx=${p(this.tabIdx)}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`
        )}
      </wui-flex>`
      : l` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${() => {
        this.onSocialClick(e[0]);
      }}
      logo=${p(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${p(this.tabIdx)}
      ?disabled=${this.isPwaLoading}
    ></wui-list-social>`;
  }
  bottomViewTemplate() {
    let e = this.features?.socials;
    const i = this.walletGuide === 'explore';
    return (
      (!this.authConnector || !e || !e?.length) && i && (e = L.DEFAULT_FEATURES.socials),
      !e || e.length <= Ni
        ? null
        : e && e.length > Ei
          ? l`<wui-flex gap="xs">
        ${e.slice(1, Ei - 1).map(
          (n) => l`<wui-logo-select
              data-testid=${`social-selector-${n}`}
              @click=${() => {
                this.onSocialClick(n);
              }}
              logo=${n}
              tabIdx=${p(this.tabIdx)}
              ?focusable=${this.tabIdx !== void 0 && this.tabIdx >= 0}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`
        )}
        <wui-logo-select
          logo="more"
          tabIdx=${p(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading}
        ></wui-logo-select>
      </wui-flex>`
          : e
            ? l`<wui-flex gap="xs">
      ${e.slice(1, e.length).map(
        (n) => l`<wui-logo-select
            data-testid=${`social-selector-${n}`}
            @click=${() => {
              this.onSocialClick(n);
            }}
            logo=${n}
            tabIdx=${p(this.tabIdx)}
            ?focusable=${this.tabIdx !== void 0 && this.tabIdx >= 0}
            ?disabled=${this.isPwaLoading}
          ></wui-logo-select>`
      )}
    </wui-flex>`
            : null
    );
  }
  onMoreSocialsClick() {
    f.push('ConnectSocials');
  }
  async onSocialClick(e) {
    if (!T.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((o) => o === d.state.activeChain)) {
      const o = d.getFirstCaipNetworkSupportsAuthConnector();
      if (o) {
        f.push('SwitchNetwork', { network: o });
        return;
      }
    }
    e && (await mo(e));
  }
  async handlePwaFrameLoad() {
    if (g.isPWA()) {
      this.isPwaLoading = !0;
      try {
        this.authConnector?.provider instanceof wo && (await this.authConnector.provider.init());
      } catch (e) {
        fo.open(
          { shortMessage: 'Error loading embedded wallet in PWA', longMessage: e.message },
          'error'
        );
      } finally {
        this.isPwaLoading = !1;
      }
    }
  }
};
se.styles = sn;
_e([c()], se.prototype, 'walletGuide', void 0);
_e([c()], se.prototype, 'tabIdx', void 0);
_e([u()], se.prototype, 'connectors', void 0);
_e([u()], se.prototype, 'features', void 0);
_e([u()], se.prototype, 'authConnector', void 0);
_e([u()], se.prototype, 'isPwaLoading', void 0);
se = _e([h('w3m-social-login-widget')], se);
const ln = x`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;
var ci =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Ge = class extends w {
  constructor() {
    super(...arguments), (this.walletGuide = 'get-started');
  }
  render() {
    return this.walletGuide === 'explore'
      ? l`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`
      : l`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${['s', '0', 's', '0']}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${p(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`;
  }
  onGetStarted() {
    f.push('Create');
  }
};
Ge.styles = ln;
ci([c()], Ge.prototype, 'tabIdx', void 0);
ci([c()], Ge.prototype, 'walletGuide', void 0);
Ge = ci([h('w3m-wallet-guide')], Ge);
const cn = x`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;
var Yi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
const Vt = 4;
let wt = class extends w {
  constructor() {
    super(...arguments), (this.walletImages = []);
  }
  render() {
    const e = this.walletImages.length < Vt;
    return l`${this.walletImages.slice(0, Vt).map(
      ({ src: i, walletName: o }) => l`
            <wui-wallet-image
              size="inherit"
              imageSrc=${i}
              name=${p(o)}
            ></wui-wallet-image>
          `
    )}
      ${e ? [...Array(Vt - this.walletImages.length)].map(() => l` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`) : null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`;
  }
};
wt.styles = [S, cn];
Yi([c({ type: Array })], wt.prototype, 'walletImages', void 0);
wt = Yi([h('wui-all-wallets-image')], wt);
const un = x`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;
var z =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let E = class extends w {
  constructor() {
    super(...arguments),
      (this.walletImages = []),
      (this.imageSrc = ''),
      (this.name = ''),
      (this.tabIdx = void 0),
      (this.installed = !1),
      (this.disabled = !1),
      (this.showAllWallets = !1),
      (this.loading = !1),
      (this.loadingSpinnerColor = 'accent-100');
  }
  render() {
    return l`
      <button ?disabled=${this.disabled} tabindex=${p(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `;
  }
  templateAllWallets() {
    return this.showAllWallets && this.imageSrc
      ? l` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `
      : this.showAllWallets && this.walletIcon
        ? l` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `
        : null;
  }
  templateWalletImage() {
    return !this.showAllWallets && this.imageSrc
      ? l`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`
      : !this.showAllWallets && !this.imageSrc
        ? l`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`
        : null;
  }
  templateStatus() {
    return this.loading
      ? l`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`
      : this.tagLabel && this.tagVariant
        ? l`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`
        : this.icon
          ? l`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`
          : null;
  }
};
E.styles = [S, I, un];
z([c({ type: Array })], E.prototype, 'walletImages', void 0);
z([c()], E.prototype, 'imageSrc', void 0);
z([c()], E.prototype, 'name', void 0);
z([c()], E.prototype, 'tagLabel', void 0);
z([c()], E.prototype, 'tagVariant', void 0);
z([c()], E.prototype, 'icon', void 0);
z([c()], E.prototype, 'walletIcon', void 0);
z([c()], E.prototype, 'tabIdx', void 0);
z([c({ type: Boolean })], E.prototype, 'installed', void 0);
z([c({ type: Boolean })], E.prototype, 'disabled', void 0);
z([c({ type: Boolean })], E.prototype, 'showAllWallets', void 0);
z([c({ type: Boolean })], E.prototype, 'loading', void 0);
z([c({ type: String })], E.prototype, 'loadingSpinnerColor', void 0);
E = z([h('wui-list-wallet')], E);
var ze =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Ce = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = m.state.connectors),
      (this.count = k.state.count),
      (this.filteredCount = k.state.filteredWallets.length),
      (this.isFetchingRecommendedWallets = k.state.isFetchingRecommendedWallets),
      this.unsubscribe.push(
        m.subscribeKey('connectors', (e) => (this.connectors = e)),
        k.subscribeKey('count', (e) => (this.count = e)),
        k.subscribeKey('filteredWallets', (e) => (this.filteredCount = e.length)),
        k.subscribeKey(
          'isFetchingRecommendedWallets',
          (e) => (this.isFetchingRecommendedWallets = e)
        )
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.find((_) => _.id === 'walletConnect'),
      { allWallets: i } = y.state;
    if (!e || i === 'HIDE' || (i === 'ONLY_MOBILE' && !g.isMobile())) return null;
    const o = k.state.featured.length,
      n = this.count + o,
      t = n < 10 ? n : Math.floor(n / 10) * 10,
      a = this.filteredCount > 0 ? this.filteredCount : t;
    let s = `${a}`;
    return (
      this.filteredCount > 0 ? (s = `${this.filteredCount}`) : a < n && (s = `${a}+`),
      l`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${p(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets ? 'fg-300' : 'accent-100'}
      ></wui-list-wallet>
    `
    );
  }
  onAllWallets() {
    $.sendEvent({ type: 'track', event: 'CLICK_ALL_WALLETS' }), f.push('AllWallets');
  }
};
ze([c()], Ce.prototype, 'tabIdx', void 0);
ze([u()], Ce.prototype, 'connectors', void 0);
ze([u()], Ce.prototype, 'count', void 0);
ze([u()], Ce.prototype, 'filteredCount', void 0);
ze([u()], Ce.prototype, 'isFetchingRecommendedWallets', void 0);
Ce = ze([h('w3m-all-wallets-widget')], Ce);
var ui =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ft = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = m.state.connectors),
      this.unsubscribe.push(m.subscribeKey('connectors', (e) => (this.connectors = e)));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.filter((i) => i.type === 'ANNOUNCED');
    return e?.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(He.showConnector).map(
          (i) => l`
              <wui-list-wallet
                imageSrc=${p(C.getConnectorImage(i))}
                name=${i.name ?? 'Unknown'}
                @click=${() => this.onConnector(i)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${i.id}`}
                .installed=${!0}
                tabIdx=${p(this.tabIdx)}
              >
              </wui-list-wallet>
            `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null);
  }
  onConnector(e) {
    e.id === 'walletConnect'
      ? g.isMobile()
        ? f.push('AllWallets')
        : f.push('ConnectingWalletConnect')
      : f.push('ConnectingExternal', { connector: e });
  }
};
ui([c()], ft.prototype, 'tabIdx', void 0);
ui([u()], ft.prototype, 'connectors', void 0);
ft = ui([h('w3m-connect-announced-widget')], ft);
var jt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Xe = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = m.state.connectors),
      (this.loading = !1),
      this.unsubscribe.push(m.subscribeKey('connectors', (e) => (this.connectors = e))),
      g.isTelegram() &&
        g.isIos() &&
        ((this.loading = !v.state.wcUri),
        this.unsubscribe.push(v.subscribeKey('wcUri', (e) => (this.loading = !e))));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { customWallets: e } = y.state;
    if (!e?.length) return (this.style.cssText = 'display: none'), null;
    const i = this.filterOutDuplicateWallets(e);
    return l`<wui-flex flexDirection="column" gap="xs">
      ${i.map(
        (o) => l`
          <wui-list-wallet
            imageSrc=${p(C.getWalletImage(o))}
            name=${o.name ?? 'Unknown'}
            @click=${() => this.onConnectWallet(o)}
            data-testid=${`wallet-selector-${o.id}`}
            tabIdx=${p(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `
      )}
    </wui-flex>`;
  }
  filterOutDuplicateWallets(e) {
    const i = me.getRecentWallets(),
      o = this.connectors.map((s) => s.info?.rdns).filter(Boolean),
      n = i.map((s) => s.rdns).filter(Boolean),
      t = o.concat(n);
    if (t.includes('io.metamask.mobile') && g.isMobile()) {
      const s = t.indexOf('io.metamask.mobile');
      t[s] = 'io.metamask';
    }
    return e.filter((s) => !t.includes(String(s?.rdns)));
  }
  onConnectWallet(e) {
    this.loading || f.push('ConnectingWalletConnect', { wallet: e });
  }
};
jt([c()], Xe.prototype, 'tabIdx', void 0);
jt([u()], Xe.prototype, 'connectors', void 0);
jt([u()], Xe.prototype, 'loading', void 0);
Xe = jt([h('w3m-connect-custom-widget')], Xe);
var di =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let gt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = m.state.connectors),
      this.unsubscribe.push(m.subscribeKey('connectors', (e) => (this.connectors = e)));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const o = this.connectors
      .filter((n) => n.type === 'EXTERNAL')
      .filter(He.showConnector)
      .filter((n) => n.id !== T.CONNECTOR_ID.COINBASE_SDK);
    return o?.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${o.map(
          (n) => l`
            <wui-list-wallet
              imageSrc=${p(C.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name ?? 'Unknown'}
              data-testid=${`wallet-selector-external-${n.id}`}
              @click=${() => this.onConnector(n)}
              tabIdx=${p(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null);
  }
  onConnector(e) {
    f.push('ConnectingExternal', { connector: e });
  }
};
di([c()], gt.prototype, 'tabIdx', void 0);
di([u()], gt.prototype, 'connectors', void 0);
gt = di([h('w3m-connect-external-widget')], gt);
var pi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let bt = class extends w {
  constructor() {
    super(...arguments), (this.tabIdx = void 0), (this.wallets = []);
  }
  render() {
    return this.wallets.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(
          (e) => l`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${p(C.getWalletImage(e))}
              name=${e.name ?? 'Unknown'}
              @click=${() => this.onConnectWallet(e)}
              tabIdx=${p(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null);
  }
  onConnectWallet(e) {
    m.selectWalletConnector(e);
  }
};
pi([c()], bt.prototype, 'tabIdx', void 0);
pi([c()], bt.prototype, 'wallets', void 0);
bt = pi([h('w3m-connect-featured-widget')], bt);
var hi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let mt = class extends w {
  constructor() {
    super(...arguments), (this.tabIdx = void 0), (this.connectors = []);
  }
  render() {
    const e = this.connectors.filter(He.showConnector);
    return e.length === 0
      ? ((this.style.cssText = 'display: none'), null)
      : l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(
          (i) => l`
            <wui-list-wallet
              imageSrc=${p(C.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name ?? 'Unknown'}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${() => this.onConnector(i)}
              tabIdx=${p(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `;
  }
  onConnector(e) {
    m.setActiveConnector(e), f.push('ConnectingExternal', { connector: e });
  }
};
hi([c()], mt.prototype, 'tabIdx', void 0);
hi([c()], mt.prototype, 'connectors', void 0);
mt = hi([h('w3m-connect-injected-widget')], mt);
var wi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let xt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = m.state.connectors),
      this.unsubscribe.push(m.subscribeKey('connectors', (e) => (this.connectors = e)));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.connectors.filter((i) => i.type === 'MULTI_CHAIN' && i.name !== 'WalletConnect');
    return e?.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(
          (i) => l`
            <wui-list-wallet
              imageSrc=${p(C.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name ?? 'Unknown'}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${() => this.onConnector(i)}
              tabIdx=${p(this.tabIdx)}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null);
  }
  onConnector(e) {
    m.setActiveConnector(e), f.push('ConnectingMultiChain');
  }
};
wi([c()], xt.prototype, 'tabIdx', void 0);
wi([u()], xt.prototype, 'connectors', void 0);
xt = wi([h('w3m-connect-multi-chain-widget')], xt);
var Dt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Ye = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = m.state.connectors),
      (this.loading = !1),
      this.unsubscribe.push(m.subscribeKey('connectors', (e) => (this.connectors = e))),
      g.isTelegram() &&
        g.isIos() &&
        ((this.loading = !v.state.wcUri),
        this.unsubscribe.push(v.subscribeKey('wcUri', (e) => (this.loading = !e))));
  }
  render() {
    const i = me
      .getRecentWallets()
      .filter((o) => !Ie.isExcluded(o))
      .filter((o) => !this.hasWalletConnector(o))
      .filter((o) => this.isWalletCompatibleWithCurrentChain(o));
    return i.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(
          (o) => l`
            <wui-list-wallet
              imageSrc=${p(C.getWalletImage(o))}
              name=${o.name ?? 'Unknown'}
              @click=${() => this.onConnectWallet(o)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${p(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null);
  }
  onConnectWallet(e) {
    this.loading || m.selectWalletConnector(e);
  }
  hasWalletConnector(e) {
    return this.connectors.some((i) => i.id === e.id || i.name === e.name);
  }
  isWalletCompatibleWithCurrentChain(e) {
    const i = d.state.activeChain;
    return i && e.chains
      ? e.chains.some((o) => {
          const n = o.split(':')[0];
          return i === n;
        })
      : !0;
  }
};
Dt([c()], Ye.prototype, 'tabIdx', void 0);
Dt([u()], Ye.prototype, 'connectors', void 0);
Dt([u()], Ye.prototype, 'loading', void 0);
Ye = Dt([h('w3m-connect-recent-widget')], Ye);
var Lt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Qe = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.wallets = []),
      (this.loading = !1),
      g.isTelegram() &&
        g.isIos() &&
        ((this.loading = !v.state.wcUri),
        this.unsubscribe.push(v.subscribeKey('wcUri', (e) => (this.loading = !e))));
  }
  render() {
    const { connectors: e } = m.state,
      { customWallets: i, featuredWalletIds: o } = y.state,
      n = me.getRecentWallets(),
      t = e.find((O) => O.id === 'walletConnect'),
      s = e
        .filter((O) => O.type === 'INJECTED' || O.type === 'ANNOUNCED' || O.type === 'MULTI_CHAIN')
        .filter((O) => O.name !== 'Browser Wallet');
    if (!t) return null;
    if (o || i || !this.wallets.length) return (this.style.cssText = 'display: none'), null;
    const _ = s.length + n.length,
      K = Math.max(0, 2 - _),
      N = Ie.filterOutDuplicateWallets(this.wallets).slice(0, K);
    return N.length
      ? l`
      <wui-flex flexDirection="column" gap="xs">
        ${N.map(
          (O) => l`
            <wui-list-wallet
              imageSrc=${p(C.getWalletImage(O))}
              name=${O?.name ?? 'Unknown'}
              @click=${() => this.onConnectWallet(O)}
              tabIdx=${p(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `
        )}
      </wui-flex>
    `
      : ((this.style.cssText = 'display: none'), null);
  }
  onConnectWallet(e) {
    if (this.loading) return;
    const i = m.getConnector(e.id, e.rdns);
    i
      ? f.push('ConnectingExternal', { connector: i })
      : f.push('ConnectingWalletConnect', { wallet: e });
  }
};
Lt([c()], Qe.prototype, 'tabIdx', void 0);
Lt([c()], Qe.prototype, 'wallets', void 0);
Lt([u()], Qe.prototype, 'loading', void 0);
Qe = Lt([h('w3m-connect-recommended-widget')], Qe);
var Ut =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Je = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = m.state.connectors),
      (this.connectorImages = ce.state.connectorImages),
      this.unsubscribe.push(
        m.subscribeKey('connectors', (e) => (this.connectors = e)),
        ce.subscribeKey('connectorImages', (e) => (this.connectorImages = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    if (g.isMobile()) return (this.style.cssText = 'display: none'), null;
    const e = this.connectors.find((o) => o.id === 'walletConnect');
    if (!e) return (this.style.cssText = 'display: none'), null;
    const i = e.imageUrl || this.connectorImages[e?.imageId ?? ''];
    return l`
      <wui-list-wallet
        imageSrc=${p(i)}
        name=${e.name ?? 'Unknown'}
        @click=${() => this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${p(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `;
  }
  onConnector(e) {
    m.setActiveConnector(e), f.push('ConnectingWalletConnect');
  }
};
Ut([c()], Je.prototype, 'tabIdx', void 0);
Ut([u()], Je.prototype, 'connectors', void 0);
Ut([u()], Je.prototype, 'connectorImages', void 0);
Je = Ut([h('w3m-connect-walletconnect-widget')], Je);
const dn = x`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
var at =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let $e = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.tabIdx = void 0),
      (this.connectors = m.state.connectors),
      (this.recommended = k.state.recommended),
      (this.featured = k.state.featured),
      this.unsubscribe.push(
        m.subscribeKey('connectors', (e) => (this.connectors = e)),
        k.subscribeKey('recommended', (e) => (this.recommended = e)),
        k.subscribeKey('featured', (e) => (this.featured = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return l`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `;
  }
  connectorListTemplate() {
    const {
      custom: e,
      recent: i,
      announced: o,
      injected: n,
      multiChain: t,
      recommended: a,
      featured: s,
      external: _,
    } = He.getConnectorsByType(this.connectors, this.recommended, this.featured);
    return He.getConnectorTypeOrder({
      custom: e,
      recent: i,
      announced: o,
      injected: n,
      multiChain: t,
      recommended: a,
      featured: s,
      external: _,
    }).map((N) => {
      switch (N) {
        case 'injected':
          return l`
            ${
              t.length
                ? l`<w3m-connect-multi-chain-widget
                  tabIdx=${p(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`
                : null
            }
            ${
              o.length
                ? l`<w3m-connect-announced-widget
                  tabIdx=${p(this.tabIdx)}
                ></w3m-connect-announced-widget>`
                : null
            }
            ${
              n.length
                ? l`<w3m-connect-injected-widget
                  .connectors=${n}
                  tabIdx=${p(this.tabIdx)}
                ></w3m-connect-injected-widget>`
                : null
            }
          `;
        case 'walletConnect':
          return l`<w3m-connect-walletconnect-widget
            tabIdx=${p(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;
        case 'recent':
          return l`<w3m-connect-recent-widget
            tabIdx=${p(this.tabIdx)}
          ></w3m-connect-recent-widget>`;
        case 'featured':
          return l`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${p(this.tabIdx)}
          ></w3m-connect-featured-widget>`;
        case 'custom':
          return l`<w3m-connect-custom-widget
            tabIdx=${p(this.tabIdx)}
          ></w3m-connect-custom-widget>`;
        case 'external':
          return l`<w3m-connect-external-widget
            tabIdx=${p(this.tabIdx)}
          ></w3m-connect-external-widget>`;
        case 'recommended':
          return l`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${p(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;
        default:
          return console.warn(`Unknown connector type: ${N}`), null;
      }
    });
  }
};
$e.styles = dn;
at([c()], $e.prototype, 'tabIdx', void 0);
at([u()], $e.prototype, 'connectors', void 0);
at([u()], $e.prototype, 'recommended', void 0);
at([u()], $e.prototype, 'featured', void 0);
$e = at([h('w3m-connector-list')], $e);
var Qi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Yt = class extends w {
  constructor() {
    super(...arguments), (this.tabIdx = void 0);
  }
  render() {
    return l`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${p(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${p(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `;
  }
};
Qi([c()], Yt.prototype, 'tabIdx', void 0);
Yt = Qi([h('w3m-wallet-login-list')], Yt);
const pn = x`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
var Z =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
const hn = 470;
let H = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.connectors = m.state.connectors),
      (this.authConnector = this.connectors.find((e) => e.type === 'AUTH')),
      (this.features = y.state.features),
      (this.enableWallets = y.state.enableWallets),
      (this.noAdapters = d.state.noAdapters),
      (this.walletGuide = 'get-started'),
      (this.checked = st.state.isLegalCheckboxChecked),
      (this.isEmailEnabled = this.features?.email && !d.state.noAdapters),
      (this.isSocialEnabled =
        this.features?.socials && this.features.socials.length > 0 && !d.state.noAdapters),
      (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors)),
      this.unsubscribe.push(
        m.subscribeKey('connectors', (e) => {
          (this.connectors = e),
            (this.authConnector = this.connectors.find((i) => i.type === 'AUTH')),
            (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors));
        }),
        y.subscribeKey('features', (e) => this.setEmailAndSocialEnableCheck(e, this.noAdapters)),
        y.subscribeKey('enableWallets', (e) => (this.enableWallets = e)),
        d.subscribeKey('noAdapters', (e) => this.setEmailAndSocialEnableCheck(this.features, e)),
        st.subscribeKey('isLegalCheckboxChecked', (e) => (this.checked = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((i) => i()),
      this.resizeObserver?.disconnect(),
      this.shadowRoot
        ?.querySelector('.connect')
        ?.removeEventListener('scroll', this.handleConnectListScroll.bind(this));
  }
  firstUpdated() {
    const e = this.shadowRoot?.querySelector('.connect');
    e &&
      (requestAnimationFrame(this.handleConnectListScroll.bind(this)),
      e?.addEventListener('scroll', this.handleConnectListScroll.bind(this)),
      (this.resizeObserver = new ResizeObserver(() => {
        this.handleConnectListScroll();
      })),
      this.resizeObserver?.observe(e),
      this.handleConnectListScroll());
  }
  render() {
    const { termsConditionsUrl: e, privacyPolicyUrl: i } = y.state,
      o = y.state.features?.legalCheckbox,
      a = !!(e || i) && !!o && this.walletGuide === 'get-started' && !this.checked,
      s = { connect: !0, disabled: a },
      _ = y.state.enableWalletGuide,
      K = this.enableWallets,
      N = this.isSocialEnabled || this.authConnector,
      O = a ? -1 : void 0;
    return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${yi(s)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${N && K && _ && this.walletGuide === 'get-started' ? ['3xs', 's', '0', 's'] : ['3xs', 's', 's', 's']}
          >
            ${this.renderConnectMethod(O)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(a)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `;
  }
  setEmailAndSocialEnableCheck(e, i) {
    (this.isEmailEnabled = e?.email && !i),
      (this.isSocialEnabled = e?.socials && e.socials.length > 0 && !i),
      (this.features = e),
      (this.noAdapters = i);
  }
  checkIfAuthEnabled(e) {
    const i = e.filter((n) => n.type === go.CONNECTOR_TYPE_AUTH).map((n) => n.chain);
    return T.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((n) => i.includes(n));
  }
  renderConnectMethod(e) {
    const i = Ie.getConnectOrderMethod(this.features, this.connectors);
    return l`${i.map((o, n) => {
      switch (o) {
        case 'email':
          return l`${this.emailTemplate(e)} ${this.separatorTemplate(n, 'email')}`;
        case 'social':
          return l`${this.socialListTemplate(e)}
          ${this.separatorTemplate(n, 'social')}`;
        case 'wallet':
          return l`${this.walletListTemplate(e)}
          ${this.separatorTemplate(n, 'wallet')}`;
        default:
          return null;
      }
    })}`;
  }
  checkMethodEnabled(e) {
    switch (e) {
      case 'wallet':
        return this.enableWallets;
      case 'social':
        return this.isSocialEnabled && this.isAuthEnabled;
      case 'email':
        return this.isEmailEnabled && this.isAuthEnabled;
      default:
        return null;
    }
  }
  checkIsThereNextMethod(e) {
    const o = Ie.getConnectOrderMethod(this.features, this.connectors)[e + 1];
    return o ? (this.checkMethodEnabled(o) ? o : this.checkIsThereNextMethod(e + 1)) : void 0;
  }
  separatorTemplate(e, i) {
    const o = this.checkIsThereNextMethod(e),
      n = this.walletGuide === 'explore';
    switch (i) {
      case 'wallet':
        return this.enableWallets && o && !n
          ? l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
          : null;
      case 'email': {
        const t = o === 'social';
        return this.isAuthEnabled && this.isEmailEnabled && !t && o
          ? l`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`
          : null;
      }
      case 'social': {
        const t = o === 'email';
        return this.isAuthEnabled && this.isSocialEnabled && !t && o
          ? l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`
          : null;
      }
      default:
        return null;
    }
  }
  emailTemplate(e) {
    return !this.isEmailEnabled || !this.isAuthEnabled
      ? null
      : l`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${p(e)}
    ></w3m-email-login-widget>`;
  }
  socialListTemplate(e) {
    return !this.isSocialEnabled || !this.isAuthEnabled
      ? null
      : l`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${p(e)}
    ></w3m-social-login-widget>`;
  }
  walletListTemplate(e) {
    const i = this.enableWallets,
      o = this.features?.emailShowWallets === !1,
      n = this.features?.collapseWallets,
      t = o || n;
    return !i ||
      (g.isTelegram() && (g.isSafari() || g.isIos()) && v.connectWalletConnect().catch((s) => ({})),
      this.walletGuide === 'explore')
      ? null
      : this.isAuthEnabled && (this.isEmailEnabled || this.isSocialEnabled) && t
        ? l`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${p(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`
        : l`<w3m-wallet-login-list tabIdx=${p(e)}></w3m-wallet-login-list>`;
  }
  guideTemplate(e = !1) {
    if (!y.state.enableWalletGuide) return null;
    const o = { guide: !0, disabled: e },
      n = e ? -1 : void 0;
    return !this.authConnector && !this.isSocialEnabled
      ? null
      : l`
      ${this.walletGuide === 'explore' && !d.state.noAdapters ? l`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>` : null}
      <w3m-wallet-guide
        class=${yi(o)}
        tabIdx=${p(n)}
        walletGuide=${this.walletGuide}
      ></w3m-wallet-guide>
    `;
  }
  legalCheckboxTemplate() {
    return this.walletGuide === 'explore'
      ? null
      : l`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`;
  }
  handleConnectListScroll() {
    const e = this.shadowRoot?.querySelector('.connect');
    if (!e) return;
    e.scrollHeight > hn
      ? (e.style.setProperty(
          '--connect-mask-image',
          `linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 40px,
          black calc(100% - 40px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`
        ),
        e.style.setProperty(
          '--connect-scroll--top-opacity',
          Ci.interpolate([0, 50], [0, 1], e.scrollTop).toString()
        ),
        e.style.setProperty(
          '--connect-scroll--bottom-opacity',
          Ci.interpolate([0, 50], [0, 1], e.scrollHeight - e.scrollTop - e.offsetHeight).toString()
        ))
      : (e.style.setProperty('--connect-mask-image', 'none'),
        e.style.setProperty('--connect-scroll--top-opacity', '0'),
        e.style.setProperty('--connect-scroll--bottom-opacity', '0'));
  }
  onContinueWalletClick() {
    f.push('ConnectWallets');
  }
};
H.styles = pn;
Z([u()], H.prototype, 'connectors', void 0);
Z([u()], H.prototype, 'authConnector', void 0);
Z([u()], H.prototype, 'features', void 0);
Z([u()], H.prototype, 'enableWallets', void 0);
Z([u()], H.prototype, 'noAdapters', void 0);
Z([c()], H.prototype, 'walletGuide', void 0);
Z([u()], H.prototype, 'checked', void 0);
Z([u()], H.prototype, 'isEmailEnabled', void 0);
Z([u()], H.prototype, 'isSocialEnabled', void 0);
Z([u()], H.prototype, 'isAuthEnabled', void 0);
H = Z([h('w3m-connect-view')], H);
const wn = x`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;
var Bt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let je = class extends w {
  constructor() {
    super(...arguments), (this.disabled = !1), (this.label = ''), (this.buttonLabel = '');
  }
  render() {
    return l`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${['1xs', '2l', '1xs', '2l']}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `;
  }
};
je.styles = [S, I, wn];
Bt([c({ type: Boolean })], je.prototype, 'disabled', void 0);
Bt([c()], je.prototype, 'label', void 0);
Bt([c()], je.prototype, 'buttonLabel', void 0);
je = Bt([h('wui-cta-button')], je);
const fn = x`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;
var Ji =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let vt = class extends w {
  constructor() {
    super(...arguments), (this.wallet = void 0);
  }
  render() {
    if (!this.wallet) return (this.style.display = 'none'), null;
    const { name: e, app_store: i, play_store: o, chrome_store: n, homepage: t } = this.wallet,
      a = g.isMobile(),
      s = g.isIos(),
      _ = g.isAndroid(),
      K = [i, o, t, n].filter(Boolean).length > 1,
      N = A.getTruncateString({ string: e, charsStart: 12, charsEnd: 0, truncate: 'end' });
    return K && !a
      ? l`
        <wui-cta-button
          label=${`Don't have ${N}?`}
          buttonLabel="Get"
          @click=${() => f.push('Downloads', { wallet: this.wallet })}
        ></wui-cta-button>
      `
      : !K && t
        ? l`
        <wui-cta-button
          label=${`Don't have ${N}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `
        : i && s
          ? l`
        <wui-cta-button
          label=${`Don't have ${N}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `
          : o && _
            ? l`
        <wui-cta-button
          label=${`Don't have ${N}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `
            : ((this.style.display = 'none'), null);
  }
  onAppStore() {
    this.wallet?.app_store && g.openHref(this.wallet.app_store, '_blank');
  }
  onPlayStore() {
    this.wallet?.play_store && g.openHref(this.wallet.play_store, '_blank');
  }
  onHomePage() {
    this.wallet?.homepage && g.openHref(this.wallet.homepage, '_blank');
  }
};
vt.styles = [fn];
Ji([c({ type: Object })], vt.prototype, 'wallet', void 0);
vt = Ji([h('w3m-mobile-download-links')], vt);
const gn = x`
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
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;
var ae =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
class R extends w {
  constructor() {
    super(),
      (this.wallet = f.state.data?.wallet),
      (this.connector = f.state.data?.connector),
      (this.timeout = void 0),
      (this.secondaryBtnIcon = 'refresh'),
      (this.onConnect = void 0),
      (this.onRender = void 0),
      (this.onAutoConnect = void 0),
      (this.isWalletConnect = !0),
      (this.unsubscribe = []),
      (this.imageSrc = C.getWalletImage(this.wallet) ?? C.getConnectorImage(this.connector)),
      (this.name = this.wallet?.name ?? this.connector?.name ?? 'Wallet'),
      (this.isRetrying = !1),
      (this.uri = v.state.wcUri),
      (this.error = v.state.wcError),
      (this.ready = !1),
      (this.showRetry = !1),
      (this.secondaryBtnLabel = 'Try again'),
      (this.secondaryLabel = 'Accept connection request in the wallet'),
      (this.isLoading = !1),
      (this.isMobile = !1),
      (this.onRetry = void 0),
      this.unsubscribe.push(
        v.subscribeKey('wcUri', (e) => {
          (this.uri = e),
            this.isRetrying && this.onRetry && ((this.isRetrying = !1), this.onConnect?.());
        }),
        v.subscribeKey('wcError', (e) => (this.error = e))
      ),
      (g.isTelegram() || g.isSafari()) && g.isIos() && v.state.wcUri && this.onConnect?.();
  }
  firstUpdated() {
    this.onAutoConnect?.(), (this.showRetry = !this.onAutoConnect);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), v.setWcError(!1), clearTimeout(this.timeout);
  }
  render() {
    this.onRender?.(), this.onShowRetry();
    const e = this.error
      ? 'Connection can be declined if a previous request is still active'
      : this.secondaryLabel;
    let i = `Continue in ${this.name}`;
    return (
      this.error && (i = 'Connection declined'),
      l`
      <wui-flex
        data-error=${p(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${p(this.imageSrc)}></wui-wallet-image>

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
          <wui-text variant="paragraph-500" color=${this.error ? 'error-100' : 'fg-100'}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${
          this.secondaryBtnLabel
            ? l`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying || this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `
            : null
        }
      </wui-flex>

      ${
        this.isWalletConnect
          ? l`
            <wui-flex .padding=${['0', 'xl', 'xl', 'xl']} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `
          : null
      }

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `
    );
  }
  onShowRetry() {
    this.error &&
      !this.showRetry &&
      ((this.showRetry = !0),
      this.shadowRoot
        ?.querySelector('wui-button')
        ?.animate([{ opacity: 0 }, { opacity: 1 }], { fill: 'forwards', easing: 'ease' }));
  }
  onTryAgain() {
    v.setWcError(!1),
      this.onRetry ? ((this.isRetrying = !0), this.onRetry?.()) : this.onConnect?.();
  }
  loaderTemplate() {
    const e = Ht.state.themeVariables['--w3m-border-radius-master'],
      i = e ? parseInt(e.replace('px', ''), 10) : 4;
    return l`<wui-loading-thumbnail radius=${i * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      this.uri && (g.copyToClopboard(this.uri), P.showSuccess('Link copied'));
    } catch {
      P.showError('Failed to copy');
    }
  }
}
R.styles = gn;
ae([u()], R.prototype, 'isRetrying', void 0);
ae([u()], R.prototype, 'uri', void 0);
ae([u()], R.prototype, 'error', void 0);
ae([u()], R.prototype, 'ready', void 0);
ae([u()], R.prototype, 'showRetry', void 0);
ae([u()], R.prototype, 'secondaryBtnLabel', void 0);
ae([u()], R.prototype, 'secondaryLabel', void 0);
ae([u()], R.prototype, 'isLoading', void 0);
ae([c({ type: Boolean })], R.prototype, 'isMobile', void 0);
ae([c()], R.prototype, 'onRetry', void 0);
var bn =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Oi = class extends R {
  constructor() {
    if ((super(), (this.externalViewUnsubscribe = []), !this.connector))
      throw new Error('w3m-connecting-view: No connector provided');
    $.sendEvent({
      type: 'track',
      event: 'SELECT_WALLET',
      properties: { name: this.connector.name ?? 'Unknown', platform: 'browser' },
    }),
      (this.onConnect = this.onConnectProxy.bind(this)),
      (this.onAutoConnect = this.onConnectProxy.bind(this)),
      (this.isWalletConnect = !1),
      this.externalViewUnsubscribe.push(
        d.subscribeKey('activeCaipAddress', (e) => {
          e && W.close();
        })
      );
  }
  disconnectedCallback() {
    this.externalViewUnsubscribe.forEach((e) => e());
  }
  async onConnectProxy() {
    try {
      (this.error = !1),
        this.connector &&
          (this.connector.id !== T.CONNECTOR_ID.COINBASE_SDK || !this.error) &&
          (await v.connectExternal(this.connector, this.connector.chain),
          $.sendEvent({
            type: 'track',
            event: 'CONNECT_SUCCESS',
            properties: { method: 'browser', name: this.connector.name || 'Unknown' },
          }));
    } catch (e) {
      $.sendEvent({
        type: 'track',
        event: 'CONNECT_ERROR',
        properties: { message: e?.message ?? 'Unknown' },
      }),
        (this.error = !0);
    }
  }
};
Oi = bn([h('w3m-connecting-external-view')], Oi);
const mn = x`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;
var Zi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let yt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.activeConnector = m.state.activeConnector),
      this.unsubscribe.push(m.subscribeKey('activeConnector', (e) => (this.activeConnector = e)));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['m', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${p(C.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${['0', 's', '0', 's']}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${['xs', '0', 'xs', '0']}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `;
  }
  networksTemplate() {
    return this.activeConnector?.connectors?.map((e) =>
      e.name
        ? l`
            <wui-list-wallet
              imageSrc=${p(C.getChainImage(e.chain))}
              name=${T.CHAIN_NAME_MAP[e.chain]}
              @click=${() => this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `
        : null
    );
  }
  onConnector(e) {
    const i = this.activeConnector?.connectors?.find((o) => o.chain === e.chain);
    if (!i) {
      P.showError('Failed to find connector');
      return;
    }
    i.id === 'walletConnect'
      ? g.isMobile()
        ? f.push('AllWallets')
        : f.push('ConnectingWalletConnect')
      : f.push('ConnectingExternal', { connector: i });
  }
};
yt.styles = mn;
Zi([u()], yt.prototype, 'activeConnector', void 0);
yt = Zi([h('w3m-connecting-multi-chain-view')], yt);
var fi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Ct = class extends w {
  constructor() {
    super(...arguments),
      (this.platformTabs = []),
      (this.unsubscribe = []),
      (this.platforms = []),
      (this.onSelectPlatfrom = void 0);
  }
  disconnectCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.generateTabs();
    return l`
      <wui-flex justifyContent="center" .padding=${['0', '0', 'l', '0']}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const e = this.platforms.map((i) =>
      i === 'browser'
        ? { label: 'Browser', icon: 'extension', platform: 'browser' }
        : i === 'mobile'
          ? { label: 'Mobile', icon: 'mobile', platform: 'mobile' }
          : i === 'qrcode'
            ? { label: 'Mobile', icon: 'mobile', platform: 'qrcode' }
            : i === 'web'
              ? { label: 'Webapp', icon: 'browser', platform: 'web' }
              : i === 'desktop'
                ? { label: 'Desktop', icon: 'desktop', platform: 'desktop' }
                : { label: 'Browser', icon: 'extension', platform: 'unsupported' }
    );
    return (this.platformTabs = e.map(({ platform: i }) => i)), e;
  }
  onTabChange(e) {
    const i = this.platformTabs[e];
    i && this.onSelectPlatfrom?.(i);
  }
};
fi([c({ type: Array })], Ct.prototype, 'platforms', void 0);
fi([c()], Ct.prototype, 'onSelectPlatfrom', void 0);
Ct = fi([h('w3m-connecting-header')], Ct);
var xn =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Pi = class extends R {
  constructor() {
    if ((super(), !this.wallet)) throw new Error('w3m-connecting-wc-browser: No wallet provided');
    (this.onConnect = this.onConnectProxy.bind(this)),
      (this.onAutoConnect = this.onConnectProxy.bind(this)),
      $.sendEvent({
        type: 'track',
        event: 'SELECT_WALLET',
        properties: { name: this.wallet.name, platform: 'browser' },
      });
  }
  async onConnectProxy() {
    try {
      this.error = !1;
      const { connectors: e } = m.state,
        i = e.find(
          (o) =>
            (o.type === 'ANNOUNCED' && o.info?.rdns === this.wallet?.rdns) ||
            o.type === 'INJECTED' ||
            o.name === this.wallet?.name
        );
      if (i) await v.connectExternal(i, i.chain);
      else throw new Error('w3m-connecting-wc-browser: No connector found');
      W.close(),
        $.sendEvent({
          type: 'track',
          event: 'CONNECT_SUCCESS',
          properties: { method: 'browser', name: this.wallet?.name || 'Unknown' },
        });
    } catch (e) {
      $.sendEvent({
        type: 'track',
        event: 'CONNECT_ERROR',
        properties: { message: e?.message ?? 'Unknown' },
      }),
        (this.error = !0);
    }
  }
};
Pi = xn([h('w3m-connecting-wc-browser')], Pi);
var vn =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ji = class extends R {
  constructor() {
    if ((super(), !this.wallet)) throw new Error('w3m-connecting-wc-desktop: No wallet provided');
    (this.onConnect = this.onConnectProxy.bind(this)),
      (this.onRender = this.onRenderProxy.bind(this)),
      $.sendEvent({
        type: 'track',
        event: 'SELECT_WALLET',
        properties: { name: this.wallet.name, platform: 'desktop' },
      });
  }
  onRenderProxy() {
    !this.ready && this.uri && ((this.ready = !0), this.onConnect?.());
  }
  onConnectProxy() {
    if (this.wallet?.desktop_link && this.uri)
      try {
        this.error = !1;
        const { desktop_link: e, name: i } = this.wallet,
          { redirect: o, href: n } = g.formatNativeUrl(e, this.uri);
        v.setWcLinking({ name: i, href: n }),
          v.setRecentWallet(this.wallet),
          g.openHref(o, '_blank');
      } catch {
        this.error = !0;
      }
  }
};
ji = vn([h('w3m-connecting-wc-desktop')], ji);
var Me =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Te = class extends R {
  constructor() {
    if (
      (super(),
      (this.btnLabelTimeout = void 0),
      (this.redirectDeeplink = void 0),
      (this.redirectUniversalLink = void 0),
      (this.target = void 0),
      (this.preferUniversalLinks = y.state.experimental_preferUniversalLinks),
      (this.isLoading = !0),
      (this.onConnect = () => {
        if (this.wallet?.mobile_link && this.uri)
          try {
            this.error = !1;
            const { mobile_link: e, link_mode: i, name: o } = this.wallet,
              {
                redirect: n,
                redirectUniversalLink: t,
                href: a,
              } = g.formatNativeUrl(e, this.uri, i);
            (this.redirectDeeplink = n),
              (this.redirectUniversalLink = t),
              (this.target = g.isIframe() ? '_top' : '_self'),
              v.setWcLinking({ name: o, href: a }),
              v.setRecentWallet(this.wallet),
              this.preferUniversalLinks && this.redirectUniversalLink
                ? g.openHref(this.redirectUniversalLink, this.target)
                : g.openHref(this.redirectDeeplink, this.target);
          } catch (e) {
            $.sendEvent({
              type: 'track',
              event: 'CONNECT_PROXY_ERROR',
              properties: {
                message: e instanceof Error ? e.message : 'Error parsing the deeplink',
                uri: this.uri,
                mobile_link: this.wallet.mobile_link,
                name: this.wallet.name,
              },
            }),
              (this.error = !0);
          }
      }),
      !this.wallet)
    )
      throw new Error('w3m-connecting-wc-mobile: No wallet provided');
    (this.secondaryBtnLabel = 'Open'),
      (this.secondaryLabel = L.CONNECT_LABELS.MOBILE),
      (this.secondaryBtnIcon = 'externalLink'),
      this.onHandleURI(),
      this.unsubscribe.push(
        v.subscribeKey('wcUri', () => {
          this.onHandleURI();
        })
      ),
      $.sendEvent({
        type: 'track',
        event: 'SELECT_WALLET',
        properties: { name: this.wallet.name, platform: 'mobile' },
      });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), clearTimeout(this.btnLabelTimeout);
  }
  onHandleURI() {
    (this.isLoading = !this.uri),
      !this.ready && this.uri && ((this.ready = !0), this.onConnect?.());
  }
  onTryAgain() {
    v.setWcError(!1), this.onConnect?.();
  }
};
Me([u()], Te.prototype, 'redirectDeeplink', void 0);
Me([u()], Te.prototype, 'redirectUniversalLink', void 0);
Me([u()], Te.prototype, 'target', void 0);
Me([u()], Te.prototype, 'preferUniversalLinks', void 0);
Me([u()], Te.prototype, 'isLoading', void 0);
Te = Me([h('w3m-connecting-wc-mobile')], Te);
const yn = x`
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
`;
var Cn =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Qt = class extends R {
  constructor() {
    super(),
      (this.forceUpdate = () => {
        this.requestUpdate();
      }),
      window.addEventListener('resize', this.forceUpdate),
      $.sendEvent({
        type: 'track',
        event: 'SELECT_WALLET',
        properties: { name: this.wallet?.name ?? 'WalletConnect', platform: 'qrcode' },
      });
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this.unsubscribe?.forEach((e) => e()),
      window.removeEventListener('resize', this.forceUpdate);
  }
  render() {
    return (
      this.onRenderProxy(),
      l`
      <wui-flex
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
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `
    );
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
    const e = this.getBoundingClientRect().width - 40,
      i = this.wallet ? this.wallet.name : void 0;
    return (
      v.setWcLinking(void 0),
      v.setRecentWallet(this.wallet),
      l` <wui-qr-code
      size=${e}
      theme=${Ht.state.themeMode}
      uri=${this.uri}
      imageSrc=${p(C.getWalletImage(this.wallet))}
      color=${p(Ht.state.themeVariables['--w3m-qr-color'])}
      alt=${p(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`
    );
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
};
Qt.styles = yn;
Qt = Cn([h('w3m-connecting-wc-qrcode')], Qt);
var $n =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Di = class extends w {
  constructor() {
    if ((super(), (this.wallet = f.state.data?.wallet), !this.wallet))
      throw new Error('w3m-connecting-wc-unsupported: No wallet provided');
    $.sendEvent({
      type: 'track',
      event: 'SELECT_WALLET',
      properties: { name: this.wallet.name, platform: 'browser' },
    });
  }
  render() {
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${p(C.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
Di = $n([h('w3m-connecting-wc-unsupported')], Di);
var eo =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Jt = class extends R {
  constructor() {
    if ((super(), (this.isLoading = !0), !this.wallet))
      throw new Error('w3m-connecting-wc-web: No wallet provided');
    (this.onConnect = this.onConnectProxy.bind(this)),
      (this.secondaryBtnLabel = 'Open'),
      (this.secondaryLabel = L.CONNECT_LABELS.MOBILE),
      (this.secondaryBtnIcon = 'externalLink'),
      this.updateLoadingState(),
      this.unsubscribe.push(
        v.subscribeKey('wcUri', () => {
          this.updateLoadingState();
        })
      ),
      $.sendEvent({
        type: 'track',
        event: 'SELECT_WALLET',
        properties: { name: this.wallet.name, platform: 'web' },
      });
  }
  updateLoadingState() {
    this.isLoading = !this.uri;
  }
  onConnectProxy() {
    if (this.wallet?.webapp_link && this.uri)
      try {
        this.error = !1;
        const { webapp_link: e, name: i } = this.wallet,
          { redirect: o, href: n } = g.formatUniversalUrl(e, this.uri);
        v.setWcLinking({ name: i, href: n }),
          v.setRecentWallet(this.wallet),
          g.openHref(o, '_blank');
      } catch {
        this.error = !0;
      }
  }
};
eo([u()], Jt.prototype, 'isLoading', void 0);
Jt = eo([h('w3m-connecting-wc-web')], Jt);
var zt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Ze = class extends w {
  constructor() {
    super(),
      (this.wallet = f.state.data?.wallet),
      (this.platform = void 0),
      (this.platforms = []),
      (this.isSiwxEnabled = !!y.state.siwx),
      this.determinePlatforms(),
      this.initializeConnection();
  }
  render() {
    return l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `;
  }
  async initializeConnection(e = !1) {
    if (!(this.platform === 'browser' || (y.state.manualWCControl && !e)))
      try {
        const { wcPairingExpiry: i, status: o } = v.state;
        (e || y.state.enableEmbedded || g.isPairingExpired(i) || o === 'connecting') &&
          (await v.connectWalletConnect(), this.isSiwxEnabled || W.close());
      } catch (i) {
        $.sendEvent({
          type: 'track',
          event: 'CONNECT_ERROR',
          properties: { message: i?.message ?? 'Unknown' },
        }),
          v.setWcError(!0),
          P.showError(i.message ?? 'Connection error'),
          v.resetWcConnection(),
          f.goBack();
      }
  }
  determinePlatforms() {
    if (!this.wallet) {
      this.platforms.push('qrcode'), (this.platform = 'qrcode');
      return;
    }
    if (this.platform) return;
    const { mobile_link: e, desktop_link: i, webapp_link: o, injected: n, rdns: t } = this.wallet,
      a = n?.map(({ injected_id: co }) => co).filter(Boolean),
      s = [...(t ? [t] : (a ?? []))],
      _ = y.state.isUniversalProvider ? !1 : s.length,
      K = e,
      N = o,
      O = v.checkInstalled(s),
      xi = _ && O,
      lo = i && !g.isMobile();
    xi && !d.state.noAdapters && this.platforms.push('browser'),
      K && this.platforms.push(g.isMobile() ? 'mobile' : 'qrcode'),
      N && this.platforms.push('web'),
      lo && this.platforms.push('desktop'),
      !xi && _ && !d.state.noAdapters && this.platforms.push('unsupported'),
      (this.platform = this.platforms[0]);
  }
  platformTemplate() {
    switch (this.platform) {
      case 'browser':
        return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case 'web':
        return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
      case 'desktop':
        return l`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;
      case 'mobile':
        return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;
      case 'qrcode':
        return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
      default:
        return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    return this.platforms.length > 1
      ? l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `
      : null;
  }
  async onSelectPlatform(e) {
    const i = this.shadowRoot?.querySelector('div');
    i &&
      (await i.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: 'forwards',
        easing: 'ease',
      }).finished,
      (this.platform = e),
      i.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: 'forwards',
        easing: 'ease',
      }));
  }
};
zt([u()], Ze.prototype, 'platform', void 0);
zt([u()], Ze.prototype, 'platforms', void 0);
zt([u()], Ze.prototype, 'isSiwxEnabled', void 0);
Ze = zt([h('w3m-connecting-wc-view')], Ze);
var to =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Zt = class extends w {
  constructor() {
    super(...arguments), (this.isMobile = g.isMobile());
  }
  render() {
    if (this.isMobile) {
      const { featured: e, recommended: i } = k.state,
        { customWallets: o } = y.state,
        n = me.getRecentWallets(),
        t = e.length || i.length || o?.length || n.length;
      return l`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${['3xs', 's', 's', 's']}
      >
        ${t ? l`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
    }
    return l`<wui-flex flexDirection="column" .padding=${['0', '0', 'l', '0']}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${['0', 'm', '0', 'm']}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`;
  }
};
to([u()], Zt.prototype, 'isMobile', void 0);
Zt = to([h('w3m-connecting-wc-basic-view')], Zt);
const Tn = x`
  .continue-button-container {
    width: 100%;
  }
`;
var io =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let $t = class extends w {
  constructor() {
    super(...arguments), (this.loading = !1);
  }
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
            g.openHref(xo.URLS.FAQ, '_blank');
          }}
        >
          Learn more about names
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
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
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
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`;
  }
  handleContinue() {
    const e = d.state.activeChain;
    f.push('RegisterAccountName'),
      $.sendEvent({
        type: 'track',
        event: 'OPEN_ENS_FLOW',
        properties: {
          isSmartAccount: b.state.preferredAccountTypes?.[e] === M.ACCOUNT_TYPES.SMART_ACCOUNT,
        },
      });
  }
};
$t.styles = Tn;
io([u()], $t.prototype, 'loading', void 0);
$t = io([h('w3m-choose-account-name-view')], $t);
var kn =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Li = class extends w {
  constructor() {
    super(...arguments), (this.wallet = f.state.data?.wallet);
  }
  render() {
    if (!this.wallet) throw new Error('w3m-downloads-view');
    return l`
      <wui-flex gap="xs" flexDirection="column" .padding=${['s', 's', 'l', 's']}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    return this.wallet?.chrome_store
      ? l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`
      : null;
  }
  iosTemplate() {
    return this.wallet?.app_store
      ? l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`
      : null;
  }
  androidTemplate() {
    return this.wallet?.play_store
      ? l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`
      : null;
  }
  homepageTemplate() {
    return this.wallet?.homepage
      ? l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `
      : null;
  }
  onChromeStore() {
    this.wallet?.chrome_store && g.openHref(this.wallet.chrome_store, '_blank');
  }
  onAppStore() {
    this.wallet?.app_store && g.openHref(this.wallet.app_store, '_blank');
  }
  onPlayStore() {
    this.wallet?.play_store && g.openHref(this.wallet.play_store, '_blank');
  }
  onHomePage() {
    this.wallet?.homepage && g.openHref(this.wallet.homepage, '_blank');
  }
};
Li = kn([h('w3m-downloads-view')], Li);
var Sn =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
const _n = 'https://walletconnect.com/explorer';
let Ui = class extends w {
  render() {
    return l`
      <wui-flex flexDirection="column" .padding=${['0', 's', 's', 's']} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${() => {
            g.openHref('https://walletconnect.com/explorer?type=wallet', '_blank');
          }}
        ></wui-list-wallet>
      </wui-flex>
    `;
  }
  recommendedWalletsTemplate() {
    const { recommended: e, featured: i } = k.state,
      { customWallets: o } = y.state;
    return [...i, ...(o ?? []), ...e].slice(0, 4).map(
      (t) => l`
        <wui-list-wallet
          name=${t.name ?? 'Unknown'}
          tagVariant="main"
          imageSrc=${p(C.getWalletImage(t))}
          @click=${() => {
            g.openHref(t.homepage ?? _n, '_blank');
          }}
        ></wui-list-wallet>
      `
    );
  }
};
Ui = Sn([h('w3m-get-wallet-view')], Ui);
var oo =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ei = class extends w {
  constructor() {
    super(...arguments), (this.data = []);
  }
  render() {
    return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(
          (e) => l`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((i) => l`<wui-visual name=${i}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `
        )}
      </wui-flex>
    `;
  }
};
oo([c({ type: Array })], ei.prototype, 'data', void 0);
ei = oo([h('w3m-help-widget')], ei);
var In =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
const An = [
  {
    images: ['login', 'profile', 'lock'],
    title: 'One login for all of web3',
    text: 'Log in to any app by connecting your wallet. Say goodbye to countless passwords!',
  },
  {
    images: ['defi', 'nft', 'eth'],
    title: 'A home for your digital assets',
    text: 'A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.',
  },
  {
    images: ['browser', 'noun', 'dao'],
    title: 'Your gateway to a new web',
    text: 'With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.',
  },
];
let Bi = class extends w {
  render() {
    return l`
      <wui-flex
        flexDirection="column"
        .padding=${['xxl', 'xl', 'xl', 'xl']}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${An}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `;
  }
  onGetWallet() {
    $.sendEvent({ type: 'track', event: 'CLICK_GET_WALLET' }), f.push('GetWallet');
  }
};
Bi = In([h('w3m-what-is-a-wallet-view')], Bi);
const Wn = x`
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
var no =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let Tt = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.checked = st.state.isLegalCheckboxChecked),
      this.unsubscribe.push(
        st.subscribeKey('isLegalCheckboxChecked', (e) => {
          this.checked = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { termsConditionsUrl: e, privacyPolicyUrl: i } = y.state,
      o = y.state.features?.legalCheckbox,
      t = !!(e || i) && !!o,
      a = t && !this.checked,
      s = a ? -1 : void 0;
    return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${t ? ['0', 's', 's', 's'] : 's'}
        gap="xs"
        class=${p(a ? 'disabled' : void 0)}
      >
        <w3m-wallet-login-list tabIdx=${p(s)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
};
Tt.styles = Wn;
no([u()], Tt.prototype, 'checked', void 0);
Tt = no([h('w3m-connect-wallets-view')], Tt);
const Rn = x`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
var Nn =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ti = class extends w {
  render() {
    return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `;
  }
};
ti.styles = [S, Rn];
ti = Nn([h('wui-loading-hexagon')], ti);
const En = x`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;
var gi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let et = class extends w {
  constructor() {
    super(),
      (this.network = f.state.data?.network),
      (this.unsubscribe = []),
      (this.showRetry = !1),
      (this.error = !1);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  firstUpdated() {
    this.onSwitchNetwork();
  }
  render() {
    if (!this.network) throw new Error('w3m-network-switch-view: No network provided');
    this.onShowRetry();
    const e = this.getLabel(),
      i = this.getSubLabel();
    return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', '3xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${p(C.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
  }
  getSubLabel() {
    const e = d.state.activeChain,
      i = m.getConnectorId(e);
    return m.getAuthConnector() && i === T.CONNECTOR_ID.AUTH
      ? ''
      : this.error
        ? 'Switch can be declined if chain is not supported by a wallet or previous request is still active'
        : 'Accept connection request in your wallet';
  }
  getLabel() {
    const e = d.state.activeChain,
      i = m.getConnectorId(e);
    return m.getAuthConnector() && i === T.CONNECTOR_ID.AUTH
      ? `Switching to ${this.network?.name ?? 'Unknown'} network...`
      : this.error
        ? 'Switch declined'
        : 'Approve in wallet';
  }
  onShowRetry() {
    this.error &&
      !this.showRetry &&
      ((this.showRetry = !0),
      this.shadowRoot
        ?.querySelector('wui-button')
        ?.animate([{ opacity: 0 }, { opacity: 1 }], { fill: 'forwards', easing: 'ease' }));
  }
  async onSwitchNetwork() {
    try {
      (this.error = !1),
        d.state.activeChain !== this.network?.chainNamespace && d.setIsSwitchingNamespace(!0),
        this.network && (await d.switchActiveNetwork(this.network));
    } catch {
      this.error = !0;
    }
  }
};
et.styles = En;
gi([u()], et.prototype, 'showRetry', void 0);
gi([u()], et.prototype, 'error', void 0);
et = gi([h('w3m-network-switch-view')], et);
const On = x`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;
var Ve =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let he = class extends w {
  constructor() {
    super(...arguments),
      (this.imageSrc = ''),
      (this.name = ''),
      (this.disabled = !1),
      (this.selected = !1),
      (this.transparent = !1);
  }
  render() {
    return l`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `;
  }
  checkmarkTemplate() {
    return this.selected
      ? l`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`
      : null;
  }
  templateNetworkImage() {
    return this.imageSrc
      ? l`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`
      : this.imageSrc
        ? null
        : l`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`;
  }
};
he.styles = [S, I, On];
Ve([c()], he.prototype, 'imageSrc', void 0);
Ve([c()], he.prototype, 'name', void 0);
Ve([c({ type: Boolean })], he.prototype, 'disabled', void 0);
Ve([c({ type: Boolean })], he.prototype, 'selected', void 0);
Ve([c({ type: Boolean })], he.prototype, 'transparent', void 0);
he = Ve([h('wui-list-network')], he);
const Pn = x`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;
var rt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ke = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.network = d.state.activeCaipNetwork),
      (this.requestedCaipNetworks = d.getCaipNetworks()),
      (this.search = ''),
      (this.onDebouncedSearch = g.debounce((e) => {
        this.search = e;
      }, 100)),
      this.unsubscribe.push(
        ce.subscribeNetworkImages(() => this.requestUpdate()),
        d.subscribeKey('activeCaipNetwork', (e) => (this.network = e)),
        d.subscribe(() => {
          this.requestedCaipNetworks = d.getAllRequestedCaipNetworks();
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${['0', 's', 's', 's']}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `;
  }
  templateSearchInput() {
    return l`
      <wui-flex gap="xs" .padding=${['0', 's', 's', 's']}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `;
  }
  onInputChange(e) {
    this.onDebouncedSearch(e.detail);
  }
  onNetworkHelp() {
    $.sendEvent({ type: 'track', event: 'CLICK_NETWORK_HELP' }), f.push('WhatIsANetwork');
  }
  networksTemplate() {
    const e = d.getAllApprovedCaipNetworkIds(),
      i = g.sortRequestedNetworks(e, this.requestedCaipNetworks);
    return (
      this.search
        ? (this.filteredNetworks = i?.filter((o) =>
            o?.name?.toLowerCase().includes(this.search.toLowerCase())
          ))
        : (this.filteredNetworks = i),
      this.filteredNetworks?.map(
        (o) => l`
        <wui-list-network
          .selected=${this.network?.id === o.id}
          imageSrc=${p(C.getNetworkImage(o))}
          type="network"
          name=${o.name ?? o.id}
          @click=${() => this.onSwitchNetwork(o)}
          .disabled=${this.getNetworkDisabled(o)}
          data-testid=${`w3m-network-switch-${o.name ?? o.id}`}
        ></wui-list-network>
      `
      )
    );
  }
  getNetworkDisabled(e) {
    const i = e.chainNamespace,
      o = b.getCaipAddress(i),
      n = d.getAllApprovedCaipNetworkIds(),
      t = d.getNetworkProp('supportsAllNetworks', i) !== !1,
      a = m.getConnectorId(i),
      s = m.getAuthConnector(),
      _ = a === T.CONNECTOR_ID.AUTH && s;
    return !o || t || _ ? !1 : !n?.includes(e.caipNetworkId);
  }
  onSwitchNetwork(e) {
    const i = f.state.data;
    if (e.id === this.network?.id) return;
    const n = e.chainNamespace !== d.state.activeChain,
      t = b.state.caipAddress,
      a = b.getCaipAddress(e.chainNamespace),
      _ = m.getConnectorId(d.state.activeChain) === T.CONNECTOR_ID.AUTH,
      K = T.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((N) => N === e.chainNamespace);
    t
      ? _ && K
        ? f.push('SwitchNetwork', { ...i, network: e })
        : (_ && !K) || (n && !a)
          ? f.push('SwitchActiveChain', {
              switchToChain: e.chainNamespace,
              navigateTo: 'Connect',
              navigateWithReplace: !0,
              network: e,
            })
          : f.push('SwitchNetwork', { ...i, network: e })
      : f.push('SwitchNetwork', { ...i, network: e });
  }
};
ke.styles = Pn;
rt([u()], ke.prototype, 'network', void 0);
rt([u()], ke.prototype, 'requestedCaipNetworks', void 0);
rt([u()], ke.prototype, 'filteredNetworks', void 0);
rt([u()], ke.prototype, 'search', void 0);
ke = rt([h('w3m-networks-view')], ke);
const jn = x`
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

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;
var ao =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
const Dn = { eip155: 'eth', solana: 'solana', bip122: 'bitcoin', polkadot: void 0 };
let kt = class extends w {
  constructor() {
    super(...arguments),
      (this.unsubscribe = []),
      (this.switchToChain = f.state.data?.switchToChain),
      (this.caipNetwork = f.state.data?.network),
      (this.activeChain = d.state.activeChain);
  }
  firstUpdated() {
    this.unsubscribe.push(d.subscribeKey('activeChain', (e) => (this.activeChain = e)));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const e = this.switchToChain ? T.CHAIN_NAME_MAP[this.switchToChain] : 'supported';
    if (!this.switchToChain) return null;
    const i = T.CHAIN_NAME_MAP[this.switchToChain];
    return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${['3xl', 'xl', 'xl', 'xl']}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${p(Dn[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${i}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${i}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `;
  }
  async switchActiveChain() {
    this.switchToChain &&
      (d.setIsSwitchingNamespace(!0),
      m.setFilterByNamespace(this.switchToChain),
      this.caipNetwork
        ? await d.switchActiveNetwork(this.caipNetwork)
        : d.setActiveNamespace(this.switchToChain),
      f.reset('Connect'));
  }
};
kt.styles = jn;
ao([c()], kt.prototype, 'activeChain', void 0);
kt = ao([h('w3m-switch-active-chain-view')], kt);
var Ln =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
const Un = [
  {
    images: ['network', 'layers', 'system'],
    title: 'The system’s nuts and bolts',
    text: 'A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.',
  },
  {
    images: ['noun', 'defiAlt', 'dao'],
    title: 'Designed for different uses',
    text: 'Each network is designed differently, and may therefore suit certain apps and experiences.',
  },
];
let zi = class extends w {
  render() {
    return l`
      <wui-flex
        flexDirection="column"
        .padding=${['xxl', 'xl', 'xl', 'xl']}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Un}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${() => {
            g.openHref('https://ethereum.org/en/developers/docs/networks/', '_blank');
          }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
zi = Ln([h('w3m-what-is-a-network-view')], zi);
const Bn = x`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
var ro =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let St = class extends w {
  constructor() {
    super(),
      (this.swapUnsupportedChain = f.state.data?.swapUnsupportedChain),
      (this.unsubscribe = []),
      (this.disconecting = !1),
      this.unsubscribe.push(ce.subscribeNetworkImages(() => this.requestUpdate()));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${['m', 'xl', 'xs', 'xl']}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `;
  }
  descriptionTemplate() {
    return this.swapUnsupportedChain
      ? l`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `
      : l`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `;
  }
  networksTemplate() {
    const e = d.getAllRequestedCaipNetworks(),
      i = d.getAllApprovedCaipNetworkIds(),
      o = g.sortRequestedNetworks(i, e);
    return (
      this.swapUnsupportedChain
        ? o.filter((t) => L.SWAP_SUPPORTED_NETWORKS.includes(t.caipNetworkId))
        : o
    ).map(
      (t) => l`
        <wui-list-network
          imageSrc=${p(C.getNetworkImage(t))}
          name=${t.name ?? 'Unknown'}
          @click=${() => this.onSwitchNetwork(t)}
        >
        </wui-list-network>
      `
    );
  }
  async onDisconnect() {
    try {
      (this.disconecting = !0), await v.disconnect(), W.close();
    } catch {
      $.sendEvent({ type: 'track', event: 'DISCONNECT_ERROR' }),
        P.showError('Failed to disconnect');
    } finally {
      this.disconecting = !1;
    }
  }
  async onSwitchNetwork(e) {
    const i = b.state.caipAddress,
      o = d.getAllApprovedCaipNetworkIds(),
      n = d.getNetworkProp('supportsAllNetworks', e.chainNamespace),
      t = f.state.data;
    i
      ? o?.includes(e.caipNetworkId)
        ? await d.switchActiveNetwork(e)
        : n
          ? f.push('SwitchNetwork', { ...t, network: e })
          : f.push('SwitchNetwork', { ...t, network: e })
      : i || (d.setActiveCaipNetwork(e), f.push('Connect'));
  }
};
St.styles = Bn;
ro([u()], St.prototype, 'disconecting', void 0);
St = ro([h('w3m-unsupported-chain-view')], St);
const zn = x`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;
var bi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let tt = class extends w {
  constructor() {
    super(...arguments), (this.icon = 'externalLink'), (this.text = '');
  }
  render() {
    return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `;
  }
};
tt.styles = [S, I, zn];
bi([c()], tt.prototype, 'icon', void 0);
bi([c()], tt.prototype, 'text', void 0);
tt = bi([h('wui-banner')], tt);
const Mn = x`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;
var so =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let _t = class extends w {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.preferredAccountTypes = b.state.preferredAccountTypes),
      this.unsubscribe.push(
        b.subscribeKey('preferredAccountTypes', (e) => {
          this.preferredAccountTypes = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return l` <wui-flex
      flexDirection="column"
      .padding=${['xs', 's', 'm', 's']}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`;
  }
  networkTemplate() {
    const e = d.getAllRequestedCaipNetworks(),
      i = d.getAllApprovedCaipNetworkIds(),
      o = d.state.activeCaipNetwork,
      n = d.checkIfSmartAccountEnabled();
    let t = g.sortRequestedNetworks(i, e);
    if (n && this.preferredAccountTypes?.[o?.chainNamespace] === M.ACCOUNT_TYPES.SMART_ACCOUNT) {
      if (!o) return null;
      t = [o];
    }
    return t
      .filter((s) => s.chainNamespace === o?.chainNamespace)
      .map(
        (s) => l`
        <wui-list-network
          imageSrc=${p(C.getNetworkImage(s))}
          name=${s.name ?? 'Unknown'}
          ?transparent=${!0}
        >
        </wui-list-network>
      `
      );
  }
};
_t.styles = Mn;
so([u()], _t.prototype, 'preferredAccountTypes', void 0);
_t = so([h('w3m-wallet-compatible-networks-view')], _t);
const Vn = x`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;
var Mt =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let De = class extends w {
  render() {
    return (
      (this.style.cssText = `--local-border-radius: ${this.borderRadiusFull ? '1000px' : '20px'}; background-color: var(--wui-color-modal-bg);`),
      l`${this.templateVisual()}`
    );
  }
  templateVisual() {
    return this.imageSrc
      ? l`<wui-image src=${this.imageSrc} alt=${this.alt ?? ''}></wui-image>`
      : l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
  }
};
De.styles = [S, Vn];
Mt([c()], De.prototype, 'imageSrc', void 0);
Mt([c()], De.prototype, 'alt', void 0);
Mt([c({ type: Boolean })], De.prototype, 'borderRadiusFull', void 0);
De = Mt([h('wui-visual-thumbnail')], De);
const Hn = x`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;
var Kn =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let ii = class extends w {
  constructor() {
    super(...arguments),
      (this.dappImageUrl = y.state.metadata?.icons),
      (this.walletImageUrl = b.state.connectedWalletInfo?.icon);
  }
  firstUpdated() {
    const e = this.shadowRoot?.querySelectorAll('wui-visual-thumbnail');
    e?.[0] && this.createAnimation(e[0], 'translate(18px)'),
      e?.[1] && this.createAnimation(e[1], 'translate(-18px)');
  }
  render() {
    return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `;
  }
  createAnimation(e, i) {
    e.animate([{ transform: 'translateX(0px)' }, { transform: i }], {
      duration: 1600,
      easing: 'cubic-bezier(0.56, 0, 0.48, 1)',
      direction: 'alternate',
      iterations: 1 / 0,
    });
  }
};
ii.styles = Hn;
ii = Kn([h('w3m-siwx-sign-message-thumbnails')], ii);
var mi =
  (globalThis && globalThis.__decorate) ||
  function (r, e, i, o) {
    var n = arguments.length,
      t = n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, i)) : o,
      a;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      t = Reflect.decorate(r, e, i, o);
    else
      for (var s = r.length - 1; s >= 0; s--)
        (a = r[s]) && (t = (n < 3 ? a(t) : n > 3 ? a(e, i, t) : a(e, i)) || t);
    return n > 3 && t && Object.defineProperty(e, i, t), t;
  };
let It = class extends w {
  constructor() {
    super(...arguments),
      (this.dappName = y.state.metadata?.name),
      (this.isCancelling = !1),
      (this.isSigning = !1);
  }
  render() {
    return l`
      <wui-flex justifyContent="center" .padding=${['2xl', '0', 'xxl', '0']}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${['0', '4xl', 'l', '4xl']}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName ?? 'Dapp'} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${['0', '3xl', 'l', '3xl']}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${['l', 'xl', 'xl', 'xl']} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling ? 'Cancelling...' : 'Cancel'}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning ? 'Signing...' : 'Sign'}
        </wui-button>
      </wui-flex>
    `;
  }
  async onSign() {
    (this.isSigning = !0), await vi.requestSignMessage().finally(() => (this.isSigning = !1));
  }
  async onCancel() {
    (this.isCancelling = !0), await vi.cancelSignMessage().finally(() => (this.isCancelling = !1));
  }
};
mi([u()], It.prototype, 'isCancelling', void 0);
mi([u()], It.prototype, 'isSigning', void 0);
It = mi([h('w3m-siwx-sign-message-view')], It);
export {
  Ti as AppKitAccountButton,
  Si as AppKitButton,
  Ii as AppKitConnectButton,
  Wi as AppKitNetworkButton,
  $i as W3mAccountButton,
  Y as W3mAccountSettingsView,
  Gt as W3mAccountView,
  ht as W3mAllWalletsView,
  ki as W3mButton,
  $t as W3mChooseAccountNameView,
  _i as W3mConnectButton,
  H as W3mConnectView,
  Tt as W3mConnectWalletsView,
  Oi as W3mConnectingExternalView,
  yt as W3mConnectingMultiChainView,
  Zt as W3mConnectingWcBasicView,
  Ze as W3mConnectingWcView,
  Li as W3mDownloadsView,
  Ui as W3mGetWalletView,
  Ai as W3mNetworkButton,
  et as W3mNetworkSwitchView,
  ke as W3mNetworksView,
  de as W3mProfileView,
  rs as W3mRouter,
  It as W3mSIWXSignMessageView,
  kt as W3mSwitchActiveChainView,
  Fe as W3mSwitchAddressView,
  St as W3mUnsupportedChainView,
  _t as W3mWalletCompatibleNetworksView,
  zi as W3mWhatIsANetworkView,
  Bi as W3mWhatIsAWalletView,
};
