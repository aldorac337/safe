import {
  a6 as k,
  a7 as B,
  a8 as A,
  i as b,
  h as R,
  _ as j,
  d as P,
  x as E,
  a9 as o,
  a3 as M,
} from './index-6823ac84.js';
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
      (t._sentryDebugIds[e] = 'bd9fbd9d-15e2-4f4a-babc-cef87c164f5b'),
      (t._sentryDebugIdIdentifier = 'sentry-dbid-bd9fbd9d-15e2-4f4a-babc-cef87c164f5b'));
  } catch {}
})();
const h = {
  getSpacingStyles(t, e) {
    if (Array.isArray(t)) return t[e] ? `var(--wui-spacing-${t[e]})` : void 0;
    if (typeof t == 'string') return `var(--wui-spacing-${t})`;
  },
  getFormattedDate(t) {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(t);
  },
  getHostName(t) {
    try {
      return new URL(t).hostname;
    } catch {
      return '';
    }
  },
  getTruncateString({ string: t, charsStart: e, charsEnd: i, truncate: r }) {
    return t.length <= e + i
      ? t
      : r === 'end'
        ? `${t.substring(0, e)}...`
        : r === 'start'
          ? `...${t.substring(t.length - i)}`
          : `${t.substring(0, Math.floor(e))}...${t.substring(t.length - Math.floor(i))}`;
  },
  generateAvatarColors(t) {
    const i = t
        .toLowerCase()
        .replace(/^0x/iu, '')
        .replace(/[^a-f0-9]/gu, '')
        .substring(0, 6)
        .padEnd(6, '0'),
      r = this.hexToRgb(i),
      n = getComputedStyle(document.documentElement).getPropertyValue('--w3m-border-radius-master'),
      c = 100 - 3 * Number(n?.replace('px', '')),
      s = `${c}% ${c}% at 65% 40%`,
      _ = [];
    for (let f = 0; f < 5; f += 1) {
      const p = this.tintColor(r, 0.15 * f);
      _.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`);
    }
    return `
    --local-color-1: ${_[0]};
    --local-color-2: ${_[1]};
    --local-color-3: ${_[2]};
    --local-color-4: ${_[3]};
    --local-color-5: ${_[4]};
    --local-radial-circle: ${s}
   `;
  },
  hexToRgb(t) {
    const e = parseInt(t, 16),
      i = (e >> 16) & 255,
      r = (e >> 8) & 255,
      n = e & 255;
    return [i, r, n];
  },
  tintColor(t, e) {
    const [i, r, n] = t,
      a = Math.round(i + (255 - i) * e),
      c = Math.round(r + (255 - r) * e),
      s = Math.round(n + (255 - n) * e);
    return [a, c, s];
  },
  isNumber(t) {
    return { number: /^[0-9]+$/u }.number.test(t);
  },
  getColorTheme(t) {
    return (
      t ||
      (typeof window < 'u' && window.matchMedia
        ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
          ? 'dark'
          : 'light'
        : 'dark')
    );
  },
  splitBalance(t) {
    const e = t.split('.');
    return e.length === 2 ? [e[0], e[1]] : ['0', '00'];
  },
  roundNumber(t, e, i) {
    return t.toString().length >= e ? Number(t).toFixed(i) : t;
  },
  formatNumberToLocalString(t, e = 2) {
    return t === void 0
      ? '0.00'
      : typeof t == 'number'
        ? t.toLocaleString('en-US', { maximumFractionDigits: e, minimumFractionDigits: e })
        : parseFloat(t).toLocaleString('en-US', {
            maximumFractionDigits: e,
            minimumFractionDigits: e,
          });
  },
};
function U(t, e) {
  const { kind: i, elements: r } = e;
  return {
    kind: i,
    elements: r,
    finisher(n) {
      customElements.get(t) || customElements.define(t, n);
    },
  };
}
function H(t, e) {
  return customElements.get(t) || customElements.define(t, e), e;
}
function I(t) {
  return function (i) {
    return typeof i == 'function' ? H(t, i) : U(t, i);
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const N = { attribute: !0, type: String, converter: k, reflect: !1, hasChanged: B },
  F = (t = N, e, i) => {
    const { kind: r, metadata: n } = i;
    let a = globalThis.litPropertyMetadata.get(n);
    if (
      (a === void 0 && globalThis.litPropertyMetadata.set(n, (a = new Map())),
      r === 'setter' && ((t = Object.create(t)).wrapped = !0),
      a.set(i.name, t),
      r === 'accessor')
    ) {
      const { name: c } = i;
      return {
        set(s) {
          const _ = e.get.call(this);
          e.set.call(this, s), this.requestUpdate(c, _, t);
        },
        init(s) {
          return s !== void 0 && this.C(c, void 0, t, s), s;
        },
      };
    }
    if (r === 'setter') {
      const { name: c } = i;
      return function (s) {
        const _ = this[c];
        e.call(this, s), this.requestUpdate(c, _, t);
      };
    }
    throw Error('Unsupported decorator location: ' + r);
  };
function l(t) {
  return (e, i) =>
    typeof i == 'object'
      ? F(t, e, i)
      : ((r, n, a) => {
          const c = n.hasOwnProperty(a);
          return (
            n.constructor.createProperty(a, r), c ? Object.getOwnPropertyDescriptor(n, a) : void 0
          );
        })(t, e, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function ct(t) {
  return l({ ...t, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const G = (t) => t === null || (typeof t != 'object' && typeof t != 'function'),
  W = (t) => t.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const V = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 },
  C =
    (t) =>
    (...e) => ({ _$litDirective$: t, values: e });
let x = class {
  constructor(e) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, i, r) {
    (this._$Ct = e), (this._$AM = i), (this._$Ci = r);
  }
  _$AS(e, i) {
    return this.update(e, i);
  }
  update(e, i) {
    return this.render(...i);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const v = (t, e) => {
    const i = t._$AN;
    if (i === void 0) return !1;
    for (const r of i) r._$AO?.(e, !1), v(r, e);
    return !0;
  },
  $ = (t) => {
    let e, i;
    do {
      if ((e = t._$AM) === void 0) break;
      (i = e._$AN), i.delete(t), (t = e);
    } while (i?.size === 0);
  },
  z = (t) => {
    for (let e; (e = t._$AM); t = e) {
      let i = e._$AN;
      if (i === void 0) e._$AN = i = new Set();
      else if (i.has(t)) break;
      i.add(t), K(e);
    }
  };
function Y(t) {
  this._$AN !== void 0 ? ($(this), (this._$AM = t), z(this)) : (this._$AM = t);
}
function q(t, e = !1, i = 0) {
  const r = this._$AH,
    n = this._$AN;
  if (n !== void 0 && n.size !== 0)
    if (e)
      if (Array.isArray(r)) for (let a = i; a < r.length; a++) v(r[a], !1), $(r[a]);
      else r != null && (v(r, !1), $(r));
    else v(this, t);
}
const K = (t) => {
  t.type == V.CHILD && (t._$AP ?? (t._$AP = q), t._$AQ ?? (t._$AQ = Y));
};
class X extends x {
  constructor() {
    super(...arguments), (this._$AN = void 0);
  }
  _$AT(e, i, r) {
    super._$AT(e, i, r), z(this), (this.isConnected = e._$AU);
  }
  _$AO(e, i = !0) {
    e !== this.isConnected &&
      ((this.isConnected = e), e ? this.reconnected?.() : this.disconnected?.()),
      i && (v(this, e), $(this));
  }
  setValue(e) {
    if (W(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const i = [...this._$Ct._$AH];
      (i[this._$Ci] = e), this._$Ct._$AI(i, this, 0);
    }
  }
  disconnected() {}
  reconnected() {}
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class Z {
  constructor(e) {
    this.G = e;
  }
  disconnect() {
    this.G = void 0;
  }
  reconnect(e) {
    this.G = e;
  }
  deref() {
    return this.G;
  }
}
class Q {
  constructor() {
    (this.Y = void 0), (this.Z = void 0);
  }
  get() {
    return this.Y;
  }
  pause() {
    this.Y ?? (this.Y = new Promise((e) => (this.Z = e)));
  }
  resume() {
    this.Z?.(), (this.Y = this.Z = void 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const D = (t) => !G(t) && typeof t.then == 'function',
  O = 1073741823;
class J extends X {
  constructor() {
    super(...arguments),
      (this._$Cwt = O),
      (this._$Cbt = []),
      (this._$CK = new Z(this)),
      (this._$CX = new Q());
  }
  render(...e) {
    return e.find((i) => !D(i)) ?? A;
  }
  update(e, i) {
    const r = this._$Cbt;
    let n = r.length;
    this._$Cbt = i;
    const a = this._$CK,
      c = this._$CX;
    this.isConnected || this.disconnected();
    for (let s = 0; s < i.length && !(s > this._$Cwt); s++) {
      const _ = i[s];
      if (!D(_)) return (this._$Cwt = s), _;
      (s < n && _ === r[s]) ||
        ((this._$Cwt = O),
        (n = 0),
        Promise.resolve(_).then(async (f) => {
          for (; c.get(); ) await c.get();
          const p = a.deref();
          if (p !== void 0) {
            const T = p._$Cbt.indexOf(_);
            T > -1 && T < p._$Cwt && ((p._$Cwt = T), p.setValue(f));
          }
        }));
    }
    return A;
  }
  disconnected() {
    this._$CK.disconnect(), this._$CX.pause();
  }
  reconnected() {
    this._$CK.reconnect(this), this._$CX.resume();
  }
}
const tt = C(J);
class et {
  constructor() {
    this.cache = new Map();
  }
  set(e, i) {
    this.cache.set(e, i);
  }
  get(e) {
    return this.cache.get(e);
  }
  has(e) {
    return this.cache.has(e);
  }
  delete(e) {
    this.cache.delete(e);
  }
  clear() {
    this.cache.clear();
  }
}
const S = new et(),
  it = b`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;
var m =
  (globalThis && globalThis.__decorate) ||
  function (t, e, i, r) {
    var n = arguments.length,
      a = n < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, i)) : r,
      c;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      a = Reflect.decorate(t, e, i, r);
    else
      for (var s = t.length - 1; s >= 0; s--)
        (c = t[s]) && (a = (n < 3 ? c(a) : n > 3 ? c(e, i, a) : c(e, i)) || a);
    return n > 3 && a && Object.defineProperty(e, i, a), a;
  };
const L = {
  add: async () =>
    (
      await o(
        () => import('./add-3ae11152.js'),
        ['assets/add-3ae11152.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).addSvg,
  allWallets: async () =>
    (
      await o(
        () => import('./all-wallets-e2d8e0a5.js'),
        ['assets/all-wallets-e2d8e0a5.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).allWalletsSvg,
  arrowBottomCircle: async () =>
    (
      await o(
        () => import('./arrow-bottom-circle-9c9f541c.js'),
        [
          'assets/arrow-bottom-circle-9c9f541c.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).arrowBottomCircleSvg,
  appStore: async () =>
    (
      await o(
        () => import('./app-store-7b91c867.js'),
        ['assets/app-store-7b91c867.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).appStoreSvg,
  apple: async () =>
    (
      await o(
        () => import('./apple-ef17a9ae.js'),
        ['assets/apple-ef17a9ae.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).appleSvg,
  arrowBottom: async () =>
    (
      await o(
        () => import('./arrow-bottom-0bc024b7.js'),
        ['assets/arrow-bottom-0bc024b7.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).arrowBottomSvg,
  arrowLeft: async () =>
    (
      await o(
        () => import('./arrow-left-2b3cb916.js'),
        ['assets/arrow-left-2b3cb916.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).arrowLeftSvg,
  arrowRight: async () =>
    (
      await o(
        () => import('./arrow-right-5642e6d3.js'),
        ['assets/arrow-right-5642e6d3.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).arrowRightSvg,
  arrowTop: async () =>
    (
      await o(
        () => import('./arrow-top-fee668b9.js'),
        ['assets/arrow-top-fee668b9.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).arrowTopSvg,
  bank: async () =>
    (
      await o(
        () => import('./bank-b0cc4d34.js'),
        ['assets/bank-b0cc4d34.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).bankSvg,
  browser: async () =>
    (
      await o(
        () => import('./browser-85e1c487.js'),
        ['assets/browser-85e1c487.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).browserSvg,
  card: async () =>
    (
      await o(
        () => import('./card-37db1636.js'),
        ['assets/card-37db1636.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).cardSvg,
  checkmark: async () =>
    (
      await o(
        () => import('./checkmark-36d45705.js'),
        ['assets/checkmark-36d45705.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).checkmarkSvg,
  checkmarkBold: async () =>
    (
      await o(
        () => import('./checkmark-bold-4d5b4c3f.js'),
        [
          'assets/checkmark-bold-4d5b4c3f.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).checkmarkBoldSvg,
  chevronBottom: async () =>
    (
      await o(
        () => import('./chevron-bottom-2bd99fe4.js'),
        [
          'assets/chevron-bottom-2bd99fe4.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).chevronBottomSvg,
  chevronLeft: async () =>
    (
      await o(
        () => import('./chevron-left-228e9e20.js'),
        ['assets/chevron-left-228e9e20.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).chevronLeftSvg,
  chevronRight: async () =>
    (
      await o(
        () => import('./chevron-right-91b7ab4c.js'),
        [
          'assets/chevron-right-91b7ab4c.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).chevronRightSvg,
  chevronTop: async () =>
    (
      await o(
        () => import('./chevron-top-90f50198.js'),
        ['assets/chevron-top-90f50198.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).chevronTopSvg,
  chromeStore: async () =>
    (
      await o(
        () => import('./chrome-store-399a71df.js'),
        ['assets/chrome-store-399a71df.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).chromeStoreSvg,
  clock: async () =>
    (
      await o(
        () => import('./clock-8300add7.js'),
        ['assets/clock-8300add7.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).clockSvg,
  close: async () =>
    (
      await o(
        () => import('./close-e140fa9f.js'),
        ['assets/close-e140fa9f.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).closeSvg,
  compass: async () =>
    (
      await o(
        () => import('./compass-a715ac98.js'),
        ['assets/compass-a715ac98.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).compassSvg,
  coinPlaceholder: async () =>
    (
      await o(
        () => import('./coinPlaceholder-b4e62935.js'),
        [
          'assets/coinPlaceholder-b4e62935.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).coinPlaceholderSvg,
  copy: async () =>
    (
      await o(
        () => import('./copy-78a588d6.js'),
        ['assets/copy-78a588d6.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).copySvg,
  cursor: async () =>
    (
      await o(
        () => import('./cursor-238ed100.js'),
        ['assets/cursor-238ed100.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).cursorSvg,
  cursorTransparent: async () =>
    (
      await o(
        () => import('./cursor-transparent-11f4e870.js'),
        [
          'assets/cursor-transparent-11f4e870.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).cursorTransparentSvg,
  desktop: async () =>
    (
      await o(
        () => import('./desktop-48e584cc.js'),
        ['assets/desktop-48e584cc.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).desktopSvg,
  disconnect: async () =>
    (
      await o(
        () => import('./disconnect-91c8198d.js'),
        ['assets/disconnect-91c8198d.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).disconnectSvg,
  discord: async () =>
    (
      await o(
        () => import('./discord-5100672d.js'),
        ['assets/discord-5100672d.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).discordSvg,
  etherscan: async () =>
    (
      await o(
        () => import('./etherscan-a7f86c1a.js'),
        ['assets/etherscan-a7f86c1a.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).etherscanSvg,
  extension: async () =>
    (
      await o(
        () => import('./extension-be5a4e95.js'),
        ['assets/extension-be5a4e95.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).extensionSvg,
  externalLink: async () =>
    (
      await o(
        () => import('./external-link-d9668ba4.js'),
        [
          'assets/external-link-d9668ba4.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).externalLinkSvg,
  facebook: async () =>
    (
      await o(
        () => import('./facebook-18fc88f3.js'),
        ['assets/facebook-18fc88f3.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).facebookSvg,
  farcaster: async () =>
    (
      await o(
        () => import('./farcaster-7bc9cfa1.js'),
        ['assets/farcaster-7bc9cfa1.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).farcasterSvg,
  filters: async () =>
    (
      await o(
        () => import('./filters-7b77ee0e.js'),
        ['assets/filters-7b77ee0e.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).filtersSvg,
  github: async () =>
    (
      await o(
        () => import('./github-88f473c7.js'),
        ['assets/github-88f473c7.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).githubSvg,
  google: async () =>
    (
      await o(
        () => import('./google-52f28bdb.js'),
        ['assets/google-52f28bdb.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).googleSvg,
  helpCircle: async () =>
    (
      await o(
        () => import('./help-circle-58e164c4.js'),
        ['assets/help-circle-58e164c4.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).helpCircleSvg,
  image: async () =>
    (
      await o(
        () => import('./image-1cd3b97b.js'),
        ['assets/image-1cd3b97b.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).imageSvg,
  id: async () =>
    (
      await o(
        () => import('./id-4b267ec5.js'),
        ['assets/id-4b267ec5.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).idSvg,
  infoCircle: async () =>
    (
      await o(
        () => import('./info-circle-eb58f3f4.js'),
        ['assets/info-circle-eb58f3f4.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).infoCircleSvg,
  lightbulb: async () =>
    (
      await o(
        () => import('./lightbulb-f614dbc7.js'),
        ['assets/lightbulb-f614dbc7.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).lightbulbSvg,
  mail: async () =>
    (
      await o(
        () => import('./mail-b3941942.js'),
        ['assets/mail-b3941942.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).mailSvg,
  mobile: async () =>
    (
      await o(
        () => import('./mobile-e9fdcc1c.js'),
        ['assets/mobile-e9fdcc1c.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).mobileSvg,
  more: async () =>
    (
      await o(
        () => import('./more-439d6914.js'),
        ['assets/more-439d6914.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).moreSvg,
  networkPlaceholder: async () =>
    (
      await o(
        () => import('./network-placeholder-240d7981.js'),
        [
          'assets/network-placeholder-240d7981.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).networkPlaceholderSvg,
  nftPlaceholder: async () =>
    (
      await o(
        () => import('./nftPlaceholder-73d22d5b.js'),
        [
          'assets/nftPlaceholder-73d22d5b.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).nftPlaceholderSvg,
  off: async () =>
    (
      await o(
        () => import('./off-90f75a91.js'),
        ['assets/off-90f75a91.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).offSvg,
  playStore: async () =>
    (
      await o(
        () => import('./play-store-e5c1f9d5.js'),
        ['assets/play-store-e5c1f9d5.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).playStoreSvg,
  plus: async () =>
    (
      await o(
        () => import('./plus-730a59b2.js'),
        ['assets/plus-730a59b2.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).plusSvg,
  qrCode: async () =>
    (
      await o(
        () => import('./qr-code-ed424d47.js'),
        ['assets/qr-code-ed424d47.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).qrCodeIcon,
  recycleHorizontal: async () =>
    (
      await o(
        () => import('./recycle-horizontal-b97e0bec.js'),
        [
          'assets/recycle-horizontal-b97e0bec.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).recycleHorizontalSvg,
  refresh: async () =>
    (
      await o(
        () => import('./refresh-c4c2fe6c.js'),
        ['assets/refresh-c4c2fe6c.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).refreshSvg,
  search: async () =>
    (
      await o(
        () => import('./search-9f48fffd.js'),
        ['assets/search-9f48fffd.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).searchSvg,
  send: async () =>
    (
      await o(
        () => import('./send-64f7e64c.js'),
        ['assets/send-64f7e64c.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).sendSvg,
  swapHorizontal: async () =>
    (
      await o(
        () => import('./swapHorizontal-50199413.js'),
        [
          'assets/swapHorizontal-50199413.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).swapHorizontalSvg,
  swapHorizontalMedium: async () =>
    (
      await o(
        () => import('./swapHorizontalMedium-7db9e3ac.js'),
        [
          'assets/swapHorizontalMedium-7db9e3ac.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).swapHorizontalMediumSvg,
  swapHorizontalBold: async () =>
    (
      await o(
        () => import('./swapHorizontalBold-e3dc8ebd.js'),
        [
          'assets/swapHorizontalBold-e3dc8ebd.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).swapHorizontalBoldSvg,
  swapHorizontalRoundedBold: async () =>
    (
      await o(
        () => import('./swapHorizontalRoundedBold-bc4e8718.js'),
        [
          'assets/swapHorizontalRoundedBold-bc4e8718.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).swapHorizontalRoundedBoldSvg,
  swapVertical: async () =>
    (
      await o(
        () => import('./swapVertical-304b228b.js'),
        ['assets/swapVertical-304b228b.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).swapVerticalSvg,
  telegram: async () =>
    (
      await o(
        () => import('./telegram-40e54d4c.js'),
        ['assets/telegram-40e54d4c.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).telegramSvg,
  threeDots: async () =>
    (
      await o(
        () => import('./three-dots-091eea6d.js'),
        ['assets/three-dots-091eea6d.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).threeDotsSvg,
  twitch: async () =>
    (
      await o(
        () => import('./twitch-6dc7f35b.js'),
        ['assets/twitch-6dc7f35b.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).twitchSvg,
  twitter: async () =>
    (
      await o(
        () => import('./x-4a5b6fd5.js'),
        ['assets/x-4a5b6fd5.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).xSvg,
  twitterIcon: async () =>
    (
      await o(
        () => import('./twitterIcon-e45cd7a5.js'),
        ['assets/twitterIcon-e45cd7a5.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).twitterIconSvg,
  verify: async () =>
    (
      await o(
        () => import('./verify-1ab05c8d.js'),
        ['assets/verify-1ab05c8d.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).verifySvg,
  verifyFilled: async () =>
    (
      await o(
        () => import('./verify-filled-a0ab8ac7.js'),
        [
          'assets/verify-filled-a0ab8ac7.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).verifyFilledSvg,
  wallet: async () =>
    (
      await o(
        () => import('./wallet-581e7f18.js'),
        ['assets/wallet-581e7f18.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).walletSvg,
  walletConnect: async () =>
    (
      await o(
        () => import('./walletconnect-9e360fe9.js'),
        [
          'assets/walletconnect-9e360fe9.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).walletConnectSvg,
  walletConnectLightBrown: async () =>
    (
      await o(
        () => import('./walletconnect-9e360fe9.js'),
        [
          'assets/walletconnect-9e360fe9.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).walletConnectLightBrownSvg,
  walletConnectBrown: async () =>
    (
      await o(
        () => import('./walletconnect-9e360fe9.js'),
        [
          'assets/walletconnect-9e360fe9.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).walletConnectBrownSvg,
  walletPlaceholder: async () =>
    (
      await o(
        () => import('./wallet-placeholder-f8f9c536.js'),
        [
          'assets/wallet-placeholder-f8f9c536.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).walletPlaceholderSvg,
  warningCircle: async () =>
    (
      await o(
        () => import('./warning-circle-424b50bb.js'),
        [
          'assets/warning-circle-424b50bb.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).warningCircleSvg,
  x: async () =>
    (
      await o(
        () => import('./x-4a5b6fd5.js'),
        ['assets/x-4a5b6fd5.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).xSvg,
  info: async () =>
    (
      await o(
        () => import('./info-d0e7abf3.js'),
        ['assets/info-d0e7abf3.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).infoSvg,
  exclamationTriangle: async () =>
    (
      await o(
        () => import('./exclamation-triangle-e922a202.js'),
        [
          'assets/exclamation-triangle-e922a202.js',
          'assets/index-6823ac84.js',
          'assets/index-e341960f.css',
        ]
      )
    ).exclamationTriangleSvg,
  reown: async () =>
    (
      await o(
        () => import('./reown-logo-e16b0273.js'),
        ['assets/reown-logo-e16b0273.js', 'assets/index-6823ac84.js', 'assets/index-e341960f.css']
      )
    ).reownSvg,
};
async function ot(t) {
  if (S.has(t)) return S.get(t);
  const i = (L[t] ?? L.copy)();
  return S.set(t, i), i;
}
let g = class extends P {
  constructor() {
    super(...arguments),
      (this.size = 'md'),
      (this.name = 'copy'),
      (this.color = 'fg-300'),
      (this.aspectRatio = '1 / 1');
  }
  render() {
    return (
      (this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `),
      E`${tt(ot(this.name), E`<div class="fallback"></div>`)}`
    );
  }
};
g.styles = [R, j, it];
m([l()], g.prototype, 'size', void 0);
m([l()], g.prototype, 'name', void 0);
m([l()], g.prototype, 'color', void 0);
m([l()], g.prototype, 'aspectRatio', void 0);
g = m([I('wui-icon')], g);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const rt = C(
    class extends x {
      constructor(t) {
        if ((super(t), t.type !== V.ATTRIBUTE || t.name !== 'class' || t.strings?.length > 2))
          throw Error(
            '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.'
          );
      }
      render(t) {
        return (
          ' ' +
          Object.keys(t)
            .filter((e) => t[e])
            .join(' ') +
          ' '
        );
      }
      update(t, [e]) {
        if (this.st === void 0) {
          (this.st = new Set()),
            t.strings !== void 0 &&
              (this.nt = new Set(
                t.strings
                  .join(' ')
                  .split(/\s/)
                  .filter((r) => r !== '')
              ));
          for (const r in e) e[r] && !this.nt?.has(r) && this.st.add(r);
          return this.render(e);
        }
        const i = t.element.classList;
        for (const r of this.st) r in e || (i.remove(r), this.st.delete(r));
        for (const r in e) {
          const n = !!e[r];
          n === this.st.has(r) ||
            this.nt?.has(r) ||
            (n ? (i.add(r), this.st.add(r)) : (i.remove(r), this.st.delete(r)));
        }
        return A;
      }
    }
  ),
  at = b`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;
var y =
  (globalThis && globalThis.__decorate) ||
  function (t, e, i, r) {
    var n = arguments.length,
      a = n < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, i)) : r,
      c;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      a = Reflect.decorate(t, e, i, r);
    else
      for (var s = t.length - 1; s >= 0; s--)
        (c = t[s]) && (a = (n < 3 ? c(a) : n > 3 ? c(e, i, a) : c(e, i)) || a);
    return n > 3 && a && Object.defineProperty(e, i, a), a;
  };
let w = class extends P {
  constructor() {
    super(...arguments),
      (this.variant = 'paragraph-500'),
      (this.color = 'fg-300'),
      (this.align = 'left'),
      (this.lineClamp = void 0);
  }
  render() {
    const e = {
      [`wui-font-${this.variant}`]: !0,
      [`wui-color-${this.color}`]: !0,
      [`wui-line-clamp-${this.lineClamp}`]: !!this.lineClamp,
    };
    return (
      (this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `),
      E`<slot class=${rt(e)}></slot>`
    );
  }
};
w.styles = [R, at];
y([l()], w.prototype, 'variant', void 0);
y([l()], w.prototype, 'color', void 0);
y([l()], w.prototype, 'align', void 0);
y([l()], w.prototype, 'lineClamp', void 0);
w = y([I('wui-text')], w);
const nt = b`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;
var d =
  (globalThis && globalThis.__decorate) ||
  function (t, e, i, r) {
    var n = arguments.length,
      a = n < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, i)) : r,
      c;
    if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
      a = Reflect.decorate(t, e, i, r);
    else
      for (var s = t.length - 1; s >= 0; s--)
        (c = t[s]) && (a = (n < 3 ? c(a) : n > 3 ? c(e, i, a) : c(e, i)) || a);
    return n > 3 && a && Object.defineProperty(e, i, a), a;
  };
let u = class extends P {
  render() {
    return (
      (this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && h.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && h.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && h.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && h.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && h.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && h.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && h.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && h.getSpacingStyles(this.margin, 3)};
    `),
      E`<slot></slot>`
    );
  }
};
u.styles = [R, nt];
d([l()], u.prototype, 'flexDirection', void 0);
d([l()], u.prototype, 'flexWrap', void 0);
d([l()], u.prototype, 'flexBasis', void 0);
d([l()], u.prototype, 'flexGrow', void 0);
d([l()], u.prototype, 'flexShrink', void 0);
d([l()], u.prototype, 'alignItems', void 0);
d([l()], u.prototype, 'justifyContent', void 0);
d([l()], u.prototype, 'columnGap', void 0);
d([l()], u.prototype, 'rowGap', void 0);
d([l()], u.prototype, 'gap', void 0);
d([l()], u.prototype, 'padding', void 0);
d([l()], u.prototype, 'margin', void 0);
u = d([I('wui-flex')], u);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const pt = (t) => t ?? M;
export { h as U, C as a, I as c, rt as e, X as f, l as n, pt as o, ct as r };
