var k = Object.freeze,
  R = Object.defineProperty;
var m = (o, e) => k(R(o, 'raw', { value: k(e || o.slice()) }));
import {
  eC as _,
  eD as D,
  eE as C,
  eF as n,
  eG as d,
  eH as N,
  eI as x,
  eJ as w,
  eK as z,
  eL as p,
  eM as S,
  eN as P,
  eO as M,
  eP as $,
  eQ as W,
  eR as j,
  eS as Y,
  eT as u,
  eU as B,
  eV as H,
} from './vendor-BCNtwJ5j.js';
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
      (o._sentryDebugIds[e] = '28e81906-1e81-4ff5-85f1-3d9790b5b0c4'),
      (o._sentryDebugIdIdentifier = 'sentry-dbid-28e81906-1e81-4ff5-85f1-3d9790b5b0c4'));
  } catch (t) {}
})();
var I;
const q = _(
  I ||
    (I = m([
      "\n  :host {\n    z-index: var(--w3m-z-index);\n    display: block;\n    backface-visibility: hidden;\n    will-change: opacity;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    opacity: 0;\n    background-color: var(--wui-cover);\n    transition: opacity 0.2s var(--wui-ease-out-power-2);\n    will-change: opacity;\n  }\n\n  :host(.open) {\n    opacity: 1;\n  }\n\n  :host(.embedded) {\n    position: relative;\n    pointer-events: unset;\n    background: none;\n    width: 100%;\n    opacity: 1;\n  }\n\n  wui-card {\n    max-width: var(--w3m-modal-width);\n    width: 100%;\n    position: relative;\n    animation: zoom-in 0.2s var(--wui-ease-out-power-2);\n    animation-fill-mode: backwards;\n    outline: none;\n    transition:\n      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: border-radius, background-color;\n  }\n\n  :host(.embedded) wui-card {\n    max-width: 400px;\n  }\n\n  wui-card[shake='true'] {\n    animation:\n      zoom-in 0.2s var(--wui-ease-out-power-2),\n      w3m-shake 0.5s var(--wui-ease-out-power-2);\n  }\n\n  wui-flex {\n    overflow-x: hidden;\n    overflow-y: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-height: 700px) and (min-width: 431px) {\n    wui-flex {\n      align-items: flex-start;\n    }\n\n    wui-card {\n      margin: var(--wui-spacing-xxl) 0px;\n    }\n  }\n\n  @media (max-width: 430px) {\n    wui-flex {\n      align-items: flex-end;\n    }\n\n    wui-card {\n      max-width: 100%;\n      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);\n      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);\n      border-bottom: none;\n      animation: slide-in 0.2s var(--wui-ease-out-power-2);\n    }\n\n    wui-card[shake='true'] {\n      animation:\n        slide-in 0.2s var(--wui-ease-out-power-2),\n        w3m-shake 0.5s var(--wui-ease-out-power-2);\n    }\n  }\n\n  @keyframes zoom-in {\n    0% {\n      transform: scale(0.95) translateY(0);\n    }\n    100% {\n      transform: scale(1) translateY(0);\n    }\n  }\n\n  @keyframes slide-in {\n    0% {\n      transform: scale(1) translateY(50px);\n    }\n    100% {\n      transform: scale(1) translateY(0);\n    }\n  }\n\n  @keyframes w3m-shake {\n    0% {\n      transform: scale(1) rotate(0deg);\n    }\n    20% {\n      transform: scale(1) rotate(-1deg);\n    }\n    40% {\n      transform: scale(1) rotate(1.5deg);\n    }\n    60% {\n      transform: scale(1) rotate(-1.5deg);\n    }\n    80% {\n      transform: scale(1) rotate(1deg);\n    }\n    100% {\n      transform: scale(1) rotate(0deg);\n    }\n  }\n\n  @keyframes w3m-view-height {\n    from {\n      height: var(--prev-height);\n    }\n    to {\n      height: var(--new-height);\n    }\n  }\n",
    ]))
);
var c = function (o, e, t, s) {
  var i = arguments.length,
    a = i < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
    l;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    a = Reflect.decorate(o, e, t, s);
  else
    for (var h = o.length - 1; h >= 0; h--)
      (l = o[h]) && (a = (i < 3 ? l(a) : i > 3 ? l(e, t, a) : l(e, t)) || a);
  return i > 3 && a && Object.defineProperty(e, t, a), a;
};
const E = 'scroll-lock';
var A, T, U;
let r = class extends D {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.abortController = void 0),
      (this.hasPrefetched = !1),
      (this.enableEmbedded = C.state.enableEmbedded),
      (this.open = n.state.open),
      (this.caipAddress = d.state.activeCaipAddress),
      (this.caipNetwork = d.state.activeCaipNetwork),
      (this.shake = n.state.shake),
      this.initializeTheming(),
      N.prefetchAnalyticsConfig(),
      this.unsubscribe.push(
        n.subscribeKey('open', (e) => (e ? this.onOpen() : this.onClose())),
        n.subscribeKey('shake', (e) => (this.shake = e)),
        d.subscribeKey('activeCaipNetwork', (e) => this.onNewNetwork(e)),
        d.subscribeKey('activeCaipAddress', (e) => this.onNewAddress(e)),
        C.subscribeKey('enableEmbedded', (e) => (this.enableEmbedded = e))
      );
  }
  firstUpdated() {
    var e, t;
    if (
      (x.fetchNetworkImage(
        (t = (e = this.caipNetwork) == null ? void 0 : e.assets) == null ? void 0 : t.imageId
      ),
      this.caipAddress)
    ) {
      if (this.enableEmbedded) {
        n.close(), this.prefetch();
        return;
      }
      this.onNewAddress(this.caipAddress);
    }
    this.open && this.onOpen(), this.enableEmbedded && this.prefetch();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), this.onRemoveKeyboardListener();
  }
  render() {
    return (
      (this.style.cssText = '\n      --local-border-bottom-mobile-radius: '.concat(
        this.enableEmbedded ? 'clamp(0px, var(--wui-border-radius-l), 44px)' : '0px',
        ';\n    '
      )),
      this.enableEmbedded
        ? w(A || (A = m(['', '\n        <w3m-tooltip></w3m-tooltip> '])), this.contentTemplate())
        : this.open
          ? w(
              T ||
                (T = m([
                  '\n          <wui-flex @click=',
                  ' data-testid="w3m-modal-overlay">\n            ',
                  '\n          </wui-flex>\n          <w3m-tooltip></w3m-tooltip>\n        ',
                ])),
              this.onOverlayClick.bind(this),
              this.contentTemplate()
            )
          : null
    );
  }
  contentTemplate() {
    return w(
      U ||
        (U = m([
          ' <wui-card\n      shake="',
          '"\n      data-embedded="',
          '"\n      role="alertdialog"\n      aria-modal="true"\n      tabindex="0"\n      data-testid="w3m-modal-card"\n    >\n      <w3m-header></w3m-header>\n      <w3m-router></w3m-router>\n      <w3m-snackbar></w3m-snackbar>\n      <w3m-alertbar></w3m-alertbar>\n    </wui-card>',
        ])),
      this.shake,
      z(this.enableEmbedded)
    );
  }
  async onOverlayClick(e) {
    e.target === e.currentTarget && (await this.handleClose());
  }
  async handleClose() {
    p.state.view === 'UnsupportedChain' || (await S.isSIWXCloseDisabled()) ? n.shake() : n.close();
  }
  initializeTheming() {
    const { themeVariables: e, themeMode: t } = H.state,
      s = P.getColorTheme(t);
    M(e, s);
  }
  onClose() {
    (this.open = !1),
      this.classList.remove('open'),
      this.onScrollUnlock(),
      $.hide(),
      this.onRemoveKeyboardListener();
  }
  onOpen() {
    this.prefetch(),
      (this.open = !0),
      this.classList.add('open'),
      this.onScrollLock(),
      this.onAddKeyboardListener();
  }
  onScrollLock() {
    const e = document.createElement('style');
    (e.dataset.w3m = E),
      (e.textContent =
        '\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    '),
      document.head.appendChild(e);
  }
  onScrollUnlock() {
    const e = document.head.querySelector('style[data-w3m="'.concat(E, '"]'));
    e && e.remove();
  }
  onAddKeyboardListener() {
    var t;
    this.abortController = new AbortController();
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector('wui-card');
    e == null || e.focus(),
      window.addEventListener(
        'keydown',
        (s) => {
          if (s.key === 'Escape') this.handleClose();
          else if (s.key === 'Tab') {
            const { tagName: i } = s.target;
            i && !i.includes('W3M-') && !i.includes('WUI-') && (e == null || e.focus());
          }
        },
        this.abortController
      );
  }
  onRemoveKeyboardListener() {
    var e;
    (e = this.abortController) == null || e.abort(), (this.abortController = void 0);
  }
  async onNewAddress(e) {
    const t = d.state.isSwitchingNamespace,
      s = W.getPlainAddress(e);
    !s && !t ? n.close() : t && s && p.goBack(),
      await S.initializeIfEnabled(),
      (this.caipAddress = e),
      d.setIsSwitchingNamespace(!1);
  }
  onNewNetwork(e) {
    var b, f, g, y, v;
    x.fetchNetworkImage((b = e == null ? void 0 : e.assets) == null ? void 0 : b.imageId);
    const t =
        (g = (f = this.caipNetwork) == null ? void 0 : f.caipNetworkId) == null
          ? void 0
          : g.toString(),
      s = (y = e == null ? void 0 : e.caipNetworkId) == null ? void 0 : y.toString(),
      i = t && s && t !== s,
      a = d.state.isSwitchingNamespace,
      l = ((v = this.caipNetwork) == null ? void 0 : v.name) === j.UNSUPPORTED_NETWORK_NAME,
      h = p.state.view === 'ConnectingExternal',
      L = !this.caipAddress,
      O = i && !l && !a,
      K = p.state.view === 'UnsupportedChain';
    !h && (L || K || O) && p.goBack(), (this.caipNetwork = e);
  }
  prefetch() {
    this.hasPrefetched || ((this.hasPrefetched = !0), N.prefetch());
  }
};
r.styles = q;
c([Y({ type: Boolean })], r.prototype, 'enableEmbedded', void 0);
c([u()], r.prototype, 'open', void 0);
c([u()], r.prototype, 'caipAddress', void 0);
c([u()], r.prototype, 'caipNetwork', void 0);
c([u()], r.prototype, 'shake', void 0);
r = c([B('w3m-modal')], r);
export { r as W3mModal };
//# sourceMappingURL=w3m-modal-DhYv0erI.js.map
