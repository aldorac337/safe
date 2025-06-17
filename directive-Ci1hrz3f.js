var _e = Object.defineProperty,
  Ae = Object.defineProperties;
var ye = Object.getOwnPropertyDescriptors;
var J = Object.getOwnPropertySymbols;
var ge = Object.prototype.hasOwnProperty,
  me = Object.prototype.propertyIsEnumerable;
var Y = (s, e, t) =>
    e in s ? _e(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (s[e] = t),
  k = (s, e) => {
    for (var t in e || (e = {})) ge.call(e, t) && Y(s, t, e[t]);
    if (J) for (var t of J(e)) me.call(e, t) && Y(s, t, e[t]);
    return s;
  },
  R = (s, e) => Ae(s, ye(e));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ (function () {
  try {
    var s =
        typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof globalThis < 'u'
              ? globalThis
              : typeof self < 'u'
                ? self
                : {},
      e = new s.Error().stack;
    e &&
      ((s._sentryDebugIds = s._sentryDebugIds || {}),
      (s._sentryDebugIds[e] = '86b0cf99-c396-4d15-9adf-0b6f5620bd58'),
      (s._sentryDebugIdIdentifier = 'sentry-dbid-86b0cf99-c396-4d15-9adf-0b6f5620bd58'));
  } catch (t) {}
})();
const U = window,
  K =
    U.ShadowRoot &&
    (U.ShadyCSS === void 0 || U.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  Z = Symbol(),
  F = new WeakMap();
let de = class {
  constructor(e, t, n) {
    if (((this._$cssResult$ = !0), n !== Z))
      throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    (this.cssText = e), (this.t = t);
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (K && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = F.get(t)),
        e === void 0 &&
          ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && F.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ee = (s) => new de(typeof s == 'string' ? s : s + '', void 0, Z),
  De = (s, ...e) => {
    const t =
      s.length === 1
        ? s[0]
        : e.reduce(
            (n, i, l) =>
              n +
              ((r) => {
                if (r._$cssResult$ === !0) return r.cssText;
                if (typeof r == 'number') return r;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    r +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(i) +
              s[l + 1],
            s[0]
          );
    return new de(t, s, Z);
  },
  be = (s, e) => {
    K
      ? (s.adoptedStyleSheets = e.map((t) => (t instanceof CSSStyleSheet ? t : t.styleSheet)))
      : e.forEach((t) => {
          const n = document.createElement('style'),
            i = U.litNonce;
          i !== void 0 && n.setAttribute('nonce', i), (n.textContent = t.cssText), s.appendChild(n);
        });
  },
  G = K
    ? (s) => s
    : (s) =>
        s instanceof CSSStyleSheet
          ? ((e) => {
              let t = '';
              for (const n of e.cssRules) t += n.cssText;
              return Ee(t);
            })(s)
          : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var M;
const H = window,
  Q = H.trustedTypes,
  ve = Q ? Q.emptyScript : '',
  X = H.reactiveElementPolyfillSupport,
  V = {
    toAttribute(s, e) {
      switch (e) {
        case Boolean:
          s = s ? ve : null;
          break;
        case Object:
        case Array:
          s = s == null ? s : JSON.stringify(s);
      }
      return s;
    },
    fromAttribute(s, e) {
      let t = s;
      switch (e) {
        case Boolean:
          t = s !== null;
          break;
        case Number:
          t = s === null ? null : Number(s);
          break;
        case Object:
        case Array:
          try {
            t = JSON.parse(s);
          } catch (n) {
            t = null;
          }
      }
      return t;
    },
  },
  ue = (s, e) => e !== s && (e == e || s == s),
  I = { attribute: !0, type: String, converter: V, reflect: !1, hasChanged: ue },
  W = 'finalized';
let g = class extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this._$Eu();
  }
  static addInitializer(e) {
    var t;
    this.finalize(), ((t = this.h) !== null && t !== void 0 ? t : (this.h = [])).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return (
      this.elementProperties.forEach((t, n) => {
        const i = this._$Ep(n, t);
        i !== void 0 && (this._$Ev.set(i, n), e.push(i));
      }),
      e
    );
  }
  static createProperty(e, t = I) {
    if (
      (t.state && (t.attribute = !1),
      this.finalize(),
      this.elementProperties.set(e, t),
      !t.noAccessor && !this.prototype.hasOwnProperty(e))
    ) {
      const n = typeof e == 'symbol' ? Symbol() : '__' + e,
        i = this.getPropertyDescriptor(e, n, t);
      i !== void 0 && Object.defineProperty(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    return {
      get() {
        return this[t];
      },
      set(i) {
        const l = this[e];
        (this[t] = i), this.requestUpdate(e, l, n);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || I;
  }
  static finalize() {
    if (this.hasOwnProperty(W)) return !1;
    this[W] = !0;
    const e = Object.getPrototypeOf(this);
    if (
      (e.finalize(),
      e.h !== void 0 && (this.h = [...e.h]),
      (this.elementProperties = new Map(e.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty('properties'))
    ) {
      const t = this.properties,
        n = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const i of n) this.createProperty(i, t[i]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const i of n) t.unshift(G(i));
    } else e !== void 0 && t.push(G(e));
    return t;
  }
  static _$Ep(e, t) {
    const n = t.attribute;
    return n === !1
      ? void 0
      : typeof n == 'string'
        ? n
        : typeof e == 'string'
          ? e.toLowerCase()
          : void 0;
  }
  _$Eu() {
    var e;
    (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      (e = this.constructor.h) === null || e === void 0 || e.forEach((t) => t(this));
  }
  addController(e) {
    var t, n;
    ((t = this._$ES) !== null && t !== void 0 ? t : (this._$ES = [])).push(e),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((n = e.hostConnected) === null || n === void 0 || n.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t]);
    });
  }
  createRenderRoot() {
    var e;
    const t =
      (e = this.shadowRoot) !== null && e !== void 0
        ? e
        : this.attachShadow(this.constructor.shadowRootOptions);
    return be(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (e = this._$ES) === null ||
        e === void 0 ||
        e.forEach((t) => {
          var n;
          return (n = t.hostConnected) === null || n === void 0 ? void 0 : n.call(t);
        });
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null ||
      e === void 0 ||
      e.forEach((t) => {
        var n;
        return (n = t.hostDisconnected) === null || n === void 0 ? void 0 : n.call(t);
      });
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$EO(e, t, n = I) {
    var i;
    const l = this.constructor._$Ep(e, n);
    if (l !== void 0 && n.reflect === !0) {
      const r = (
        ((i = n.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0
          ? n.converter
          : V
      ).toAttribute(t, n.type);
      (this._$El = e),
        r == null ? this.removeAttribute(l) : this.setAttribute(l, r),
        (this._$El = null);
    }
  }
  _$AK(e, t) {
    var n;
    const i = this.constructor,
      l = i._$Ev.get(e);
    if (l !== void 0 && this._$El !== l) {
      const r = i.getPropertyOptions(l),
        u =
          typeof r.converter == 'function'
            ? { fromAttribute: r.converter }
            : ((n = r.converter) === null || n === void 0 ? void 0 : n.fromAttribute) !== void 0
              ? r.converter
              : V;
      (this._$El = l), (this[l] = u.fromAttribute(t, r.type)), (this._$El = null);
    }
  }
  requestUpdate(e, t, n) {
    let i = !0;
    e !== void 0 &&
      (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || ue)(this[e], t)
        ? (this._$AL.has(e) || this._$AL.set(e, t),
          n.reflect === !0 &&
            this._$El !== e &&
            (this._$EC === void 0 && (this._$EC = new Map()), this._$EC.set(e, n)))
        : (i = !1)),
      !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && (await e), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei && (this._$Ei.forEach((i, l) => (this[l] = i)), (this._$Ei = void 0));
    let t = !1;
    const n = this._$AL;
    try {
      (t = this.shouldUpdate(n)),
        t
          ? (this.willUpdate(n),
            (e = this._$ES) === null ||
              e === void 0 ||
              e.forEach((i) => {
                var l;
                return (l = i.hostUpdate) === null || l === void 0 ? void 0 : l.call(i);
              }),
            this.update(n))
          : this._$Ek();
    } catch (i) {
      throw ((t = !1), this._$Ek(), i);
    }
    t && this._$AE(n);
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    (t = this._$ES) === null ||
      t === void 0 ||
      t.forEach((n) => {
        var i;
        return (i = n.hostUpdated) === null || i === void 0 ? void 0 : i.call(n);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
      this.updated(e);
  }
  _$Ek() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 &&
      (this._$EC.forEach((t, n) => this._$EO(n, this[n], t)), (this._$EC = void 0)),
      this._$Ek();
  }
  updated(e) {}
  firstUpdated(e) {}
};
(g[W] = !0),
  (g.elementProperties = new Map()),
  (g.elementStyles = []),
  (g.shadowRootOptions = { mode: 'open' }),
  X == null || X({ ReactiveElement: g }),
  ((M = H.reactiveElementVersions) !== null && M !== void 0
    ? M
    : (H.reactiveElementVersions = [])
  ).push('1.6.3');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var L;
const N = window,
  m = N.trustedTypes,
  ee = m ? m.createPolicy('lit-html', { createHTML: (s) => s }) : void 0,
  q = '$lit$',
  $ = 'lit$'.concat((Math.random() + '').slice(9), '$'),
  he = '?' + $,
  Se = '<'.concat(he, '>'),
  y = document,
  S = () => y.createComment(''),
  w = (s) => s === null || (typeof s != 'object' && typeof s != 'function'),
  ae = Array.isArray,
  we = (s) => ae(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == 'function',
  D = '[ 	\n\f\r]',
  v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  te = /-->/g,
  ne = />/g,
  _ = RegExp(
    '>|'
      .concat(D, '(?:([^\\s"\'>=/]+)(')
      .concat(D, '*=')
      .concat(D, '*(?:[^ 	\n\f\r"\'`<>=]|("|\')|))|$)'),
    'g'
  ),
  se = /'/g,
  ie = /"/g,
  ce = /^(?:script|style|textarea|title)$/i,
  fe =
    (s) =>
    (e, ...t) => ({ _$litType$: s, strings: e, values: t }),
  ze = fe(1),
  je = fe(2),
  E = Symbol.for('lit-noChange'),
  c = Symbol.for('lit-nothing'),
  re = new WeakMap(),
  A = y.createTreeWalker(y, 129, null, !1);
function pe(s, e) {
  if (!Array.isArray(s) || !s.hasOwnProperty('raw')) throw Error('invalid template strings array');
  return ee !== void 0 ? ee.createHTML(e) : e;
}
const Ce = (s, e) => {
  const t = s.length - 1,
    n = [];
  let i,
    l = e === 2 ? '<svg>' : '',
    r = v;
  for (let u = 0; u < t; u++) {
    const o = s[u];
    let d,
      h,
      a = -1,
      f = 0;
    for (; f < o.length && ((r.lastIndex = f), (h = r.exec(o)), h !== null); )
      (f = r.lastIndex),
        r === v
          ? h[1] === '!--'
            ? (r = te)
            : h[1] !== void 0
              ? (r = ne)
              : h[2] !== void 0
                ? (ce.test(h[2]) && (i = RegExp('</' + h[2], 'g')), (r = _))
                : h[3] !== void 0 && (r = _)
          : r === _
            ? h[0] === '>'
              ? ((r = i != null ? i : v), (a = -1))
              : h[1] === void 0
                ? (a = -2)
                : ((a = r.lastIndex - h[2].length),
                  (d = h[1]),
                  (r = h[3] === void 0 ? _ : h[3] === '"' ? ie : se))
            : r === ie || r === se
              ? (r = _)
              : r === te || r === ne
                ? (r = v)
                : ((r = _), (i = void 0));
    const p = r === _ && s[u + 1].startsWith('/>') ? ' ' : '';
    l +=
      r === v
        ? o + Se
        : a >= 0
          ? (n.push(d), o.slice(0, a) + q + o.slice(a) + $ + p)
          : o + $ + (a === -2 ? (n.push(void 0), u) : p);
  }
  return [pe(s, l + (s[t] || '<?>') + (e === 2 ? '</svg>' : '')), n];
};
class C {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let l = 0,
      r = 0;
    const u = e.length - 1,
      o = this.parts,
      [d, h] = Ce(e, t);
    if (((this.el = C.createElement(d, n)), (A.currentNode = this.el.content), t === 2)) {
      const a = this.el.content,
        f = a.firstChild;
      f.remove(), a.append(...f.childNodes);
    }
    for (; (i = A.nextNode()) !== null && o.length < u; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const a = [];
          for (const f of i.getAttributeNames())
            if (f.endsWith(q) || f.startsWith($)) {
              const p = h[r++];
              if ((a.push(f), p !== void 0)) {
                const $e = i.getAttribute(p.toLowerCase() + q).split($),
                  P = /([.?@])?(.*)/.exec(p);
                o.push({
                  type: 1,
                  index: l,
                  name: P[2],
                  strings: $e,
                  ctor: P[1] === '.' ? Pe : P[1] === '?' ? xe : P[1] === '@' ? He : O,
                });
              } else o.push({ type: 6, index: l });
            }
          for (const f of a) i.removeAttribute(f);
        }
        if (ce.test(i.tagName)) {
          const a = i.textContent.split($),
            f = a.length - 1;
          if (f > 0) {
            i.textContent = m ? m.emptyScript : '';
            for (let p = 0; p < f; p++)
              i.append(a[p], S()), A.nextNode(), o.push({ type: 2, index: ++l });
            i.append(a[f], S());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === he) o.push({ type: 2, index: l });
        else {
          let a = -1;
          for (; (a = i.data.indexOf($, a + 1)) !== -1; )
            o.push({ type: 7, index: l }), (a += $.length - 1);
        }
      l++;
    }
  }
  static createElement(e, t) {
    const n = y.createElement('template');
    return (n.innerHTML = e), n;
  }
}
function b(s, e, t = s, n) {
  var i, l, r, u;
  if (e === E) return e;
  let o = n !== void 0 ? ((i = t._$Co) === null || i === void 0 ? void 0 : i[n]) : t._$Cl;
  const d = w(e) ? void 0 : e._$litDirective$;
  return (
    (o == null ? void 0 : o.constructor) !== d &&
      ((l = o == null ? void 0 : o._$AO) === null || l === void 0 || l.call(o, !1),
      d === void 0 ? (o = void 0) : ((o = new d(s)), o._$AT(s, t, n)),
      n !== void 0
        ? (((r = (u = t)._$Co) !== null && r !== void 0 ? r : (u._$Co = []))[n] = o)
        : (t._$Cl = o)),
    o !== void 0 && (e = b(s, o._$AS(s, e.values), o, n)),
    e
  );
}
class Te {
  constructor(e, t) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    var t;
    const {
        el: { content: n },
        parts: i,
      } = this._$AD,
      l = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : y).importNode(
        n,
        !0
      );
    A.currentNode = l;
    let r = A.nextNode(),
      u = 0,
      o = 0,
      d = i[0];
    for (; d !== void 0; ) {
      if (u === d.index) {
        let h;
        d.type === 2
          ? (h = new T(r, r.nextSibling, this, e))
          : d.type === 1
            ? (h = new d.ctor(r, d.name, d.strings, this, e))
            : d.type === 6 && (h = new Ne(r, this, e)),
          this._$AV.push(h),
          (d = i[++o]);
      }
      u !== (d == null ? void 0 : d.index) && ((r = A.nextNode()), u++);
    }
    return (A.currentNode = y), l;
  }
  v(e) {
    let t = 0;
    for (const n of this._$AV)
      n !== void 0 &&
        (n.strings !== void 0 ? (n._$AI(e, n, t), (t += n.strings.length - 2)) : n._$AI(e[t])),
        t++;
  }
}
class T {
  constructor(e, t, n, i) {
    var l;
    (this.type = 2),
      (this._$AH = c),
      (this._$AN = void 0),
      (this._$AA = e),
      (this._$AB = t),
      (this._$AM = n),
      (this.options = i),
      (this._$Cp = (l = i == null ? void 0 : i.isConnected) === null || l === void 0 || l);
  }
  get _$AU() {
    var e, t;
    return (t = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && t !== void 0
      ? t
      : this._$Cp;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    (e = b(this, e, t)),
      w(e)
        ? e === c || e == null || e === ''
          ? (this._$AH !== c && this._$AR(), (this._$AH = c))
          : e !== this._$AH && e !== E && this._(e)
        : e._$litType$ !== void 0
          ? this.g(e)
          : e.nodeType !== void 0
            ? this.$(e)
            : we(e)
              ? this.T(e)
              : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), (this._$AH = this.k(e)));
  }
  _(e) {
    this._$AH !== c && w(this._$AH)
      ? (this._$AA.nextSibling.data = e)
      : this.$(y.createTextNode(e)),
      (this._$AH = e);
  }
  g(e) {
    var t;
    const { values: n, _$litType$: i } = e,
      l =
        typeof i == 'number'
          ? this._$AC(e)
          : (i.el === void 0 && (i.el = C.createElement(pe(i.h, i.h[0]), this.options)), i);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === l) this._$AH.v(n);
    else {
      const r = new Te(l, this),
        u = r.u(this.options);
      r.v(n), this.$(u), (this._$AH = r);
    }
  }
  _$AC(e) {
    let t = re.get(e.strings);
    return t === void 0 && re.set(e.strings, (t = new C(e))), t;
  }
  T(e) {
    ae(this._$AH) || ((this._$AH = []), this._$AR());
    const t = this._$AH;
    let n,
      i = 0;
    for (const l of e)
      i === t.length
        ? t.push((n = new T(this.k(S()), this.k(S()), this, this.options)))
        : (n = t[i]),
        n._$AI(l),
        i++;
    i < t.length && (this._$AR(n && n._$AB.nextSibling, i), (t.length = i));
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for (
      (n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, t);
      e && e !== this._$AB;

    ) {
      const i = e.nextSibling;
      e.remove(), (e = i);
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 &&
      ((this._$Cp = e), (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
}
class O {
  constructor(e, t, n, i, l) {
    (this.type = 1),
      (this._$AH = c),
      (this._$AN = void 0),
      (this.element = e),
      (this.name = t),
      (this._$AM = i),
      (this.options = l),
      n.length > 2 || n[0] !== '' || n[1] !== ''
        ? ((this._$AH = Array(n.length - 1).fill(new String())), (this.strings = n))
        : (this._$AH = c);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, n, i) {
    const l = this.strings;
    let r = !1;
    if (l === void 0)
      (e = b(this, e, t, 0)), (r = !w(e) || (e !== this._$AH && e !== E)), r && (this._$AH = e);
    else {
      const u = e;
      let o, d;
      for (e = l[0], o = 0; o < l.length - 1; o++)
        (d = b(this, u[n + o], t, o)),
          d === E && (d = this._$AH[o]),
          r || (r = !w(d) || d !== this._$AH[o]),
          d === c ? (e = c) : e !== c && (e += (d != null ? d : '') + l[o + 1]),
          (this._$AH[o] = d);
    }
    r && !i && this.j(e);
  }
  j(e) {
    e === c
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, e != null ? e : '');
  }
}
class Pe extends O {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(e) {
    this.element[this.name] = e === c ? void 0 : e;
  }
}
const Ue = m ? m.emptyScript : '';
class xe extends O {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(e) {
    e && e !== c
      ? this.element.setAttribute(this.name, Ue)
      : this.element.removeAttribute(this.name);
  }
}
class He extends O {
  constructor(e, t, n, i, l) {
    super(e, t, n, i, l), (this.type = 5);
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = b(this, e, t, 0)) !== null && n !== void 0 ? n : c) === E) return;
    const i = this._$AH,
      l =
        (e === c && i !== c) ||
        e.capture !== i.capture ||
        e.once !== i.once ||
        e.passive !== i.passive,
      r = e !== c && (i === c || l);
    l && this.element.removeEventListener(this.name, this, i),
      r && this.element.addEventListener(this.name, this, e),
      (this._$AH = e);
  }
  handleEvent(e) {
    var t, n;
    typeof this._$AH == 'function'
      ? this._$AH.call(
          (n = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null &&
            n !== void 0
            ? n
            : this.element,
          e
        )
      : this._$AH.handleEvent(e);
  }
}
class Ne {
  constructor(e, t, n) {
    (this.element = e), (this.type = 6), (this._$AN = void 0), (this._$AM = t), (this.options = n);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    b(this, e);
  }
}
const le = N.litHtmlPolyfillSupport;
le == null || le(C, T),
  ((L = N.litHtmlVersions) !== null && L !== void 0 ? L : (N.litHtmlVersions = [])).push('2.8.0');
const Oe = (s, e, t) => {
  var n, i;
  const l = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : e;
  let r = l._$litPart$;
  if (r === void 0) {
    const u = (i = t == null ? void 0 : t.renderBefore) !== null && i !== void 0 ? i : null;
    l._$litPart$ = r = new T(e.insertBefore(S(), u), u, void 0, t != null ? t : {});
  }
  return r._$AI(s), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var B, z;
class x extends g {
  constructor() {
    super(...arguments), (this.renderOptions = { host: this }), (this._$Do = void 0);
  }
  createRenderRoot() {
    var e, t;
    const n = super.createRenderRoot();
    return (
      ((e = (t = this.renderOptions).renderBefore) !== null && e !== void 0) ||
        (t.renderBefore = n.firstChild),
      n
    );
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(e),
      (this._$Do = Oe(t, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return E;
  }
}
(x.finalized = !0),
  (x._$litElement$ = !0),
  (B = globalThis.litElementHydrateSupport) === null ||
    B === void 0 ||
    B.call(globalThis, { LitElement: x });
const oe = globalThis.litElementPolyfillSupport;
oe == null || oe({ LitElement: x });
((z = globalThis.litElementVersions) !== null && z !== void 0
  ? z
  : (globalThis.litElementVersions = [])
).push('3.3.3');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ve = (s) => (e) =>
  typeof e == 'function'
    ? ((t, n) => (customElements.define(t, n), n))(s, e)
    : ((t, n) => {
        const { kind: i, elements: l } = n;
        return {
          kind: i,
          elements: l,
          finisher(r) {
            customElements.define(t, r);
          },
        };
      })(s, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ke = (s, e) =>
    e.kind === 'method' && e.descriptor && !('value' in e.descriptor)
      ? R(k({}, e), {
          finisher(t) {
            t.createProperty(e.key, s);
          },
        })
      : {
          kind: 'field',
          key: Symbol(),
          placement: 'own',
          descriptor: {},
          originalKey: e.key,
          initializer() {
            typeof e.initializer == 'function' && (this[e.key] = e.initializer.call(this));
          },
          finisher(t) {
            t.createProperty(e.key, s);
          },
        },
  Re = (s, e, t) => {
    e.constructor.createProperty(t, s);
  };
function Me(s) {
  return (e, t) => (t !== void 0 ? Re(s, e, t) : ke(s, e));
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function We(s) {
  return Me(R(k({}, s), { state: !0 }));
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var j;
((j = window.HTMLSlotElement) === null || j === void 0 ? void 0 : j.prototype.assignedElements) !=
  null;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const qe = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 },
  Ke =
    (s) =>
    (...e) => ({ _$litDirective$: s, values: e });
class Ze {
  constructor(e) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, n) {
    (this._$Ct = e), (this._$AM = t), (this._$Ci = n);
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
export {
  c as A,
  E as T,
  De as a,
  We as b,
  Ve as c,
  je as d,
  Ke as e,
  Ze as i,
  Me as n,
  Ee as r,
  x as s,
  qe as t,
  ze as x,
};
//# sourceMappingURL=directive-Ci1hrz3f.js.map
