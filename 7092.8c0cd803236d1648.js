try {
  let e =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    t = new e.Error().stack;
  t &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[t] = '12b2120b-83fe-4e7f-8212-1b13e4f1f5d2'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-12b2120b-83fe-4e7f-8212-1b13e4f1f5d2'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7092],
  {
    68900: function (e, t, r) {
      r.d(t, {
        M: function () {
          return a;
        },
      });
      var o = r(94583),
        i = r(95759);
      let n = (0, o.sj)({ isLegalCheckboxChecked: !1 }),
        a = {
          state: n,
          subscribe: (e) => (0, o.Ld)(n, () => e(n)),
          subscribeKey: (e, t) => (0, i.VW)(n, e, t),
          setIsLegalCheckboxChecked(e) {
            n.isLegalCheckboxChecked = e;
          },
        };
    },
    74057: function (e, t, r) {
      var o = r(98670),
        i = r(94655),
        n = r(68900),
        a = r(8924),
        l = r(91527),
        s = r(85282),
        c = r(92306);
      r(81136);
      var u = r(38573),
        d = r(55202),
        h = (0, o.iv)`
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
`,
        p = function (e, t, r, o) {
          var i,
            n = arguments.length,
            a = n < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            a = Reflect.decorate(e, t, r, o);
          else
            for (var l = e.length - 1; l >= 0; l--)
              (i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
          return n > 3 && a && Object.defineProperty(t, r, a), a;
        };
      let b = class extends o.oi {
        constructor() {
          super(...arguments), (this.inputElementRef = (0, c.V)()), (this.checked = void 0);
        }
        render() {
          return (0, o.dy)`
      <label>
        <input
          ${(0, c.i)(this.inputElementRef)}
          ?checked=${(0, s.o)(this.checked)}
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
      (b.styles = [u.ET, h]),
        p([(0, i.Cb)({ type: Boolean })], b.prototype, 'checked', void 0),
        (b = p([(0, d.M)('wui-checkbox')], b)),
        r(47526);
      var f = (0, o.iv)`
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
`,
        g = function (e, t, r, o) {
          var i,
            n = arguments.length,
            a = n < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            a = Reflect.decorate(e, t, r, o);
          else
            for (var l = e.length - 1; l >= 0; l--)
              (i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
          return n > 3 && a && Object.defineProperty(t, r, a), a;
        };
      let w = class extends o.oi {
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.checked = n.M.state.isLegalCheckboxChecked),
            this.unsubscribe.push(
              n.M.subscribeKey('isLegalCheckboxChecked', (e) => {
                this.checked = e;
              })
            );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } = a.OptionsController.state,
            r = a.OptionsController.state.features?.legalCheckbox;
          return (e || t) && r
            ? (0, o.dy)`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `
            : null;
        }
        andTemplate() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } = a.OptionsController.state;
          return e && t ? 'and' : '';
        }
        termsTemplate() {
          let { termsConditionsUrl: e } = a.OptionsController.state;
          return e
            ? (0, o.dy)`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`
            : null;
        }
        privacyTemplate() {
          let { privacyPolicyUrl: e } = a.OptionsController.state;
          return e
            ? (0, o.dy)`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`
            : null;
        }
        onCheckboxChange() {
          n.M.setIsLegalCheckboxChecked(!this.checked);
        }
      };
      (w.styles = [f]),
        g([(0, i.SB)()], w.prototype, 'checked', void 0),
        g([(0, l.Mo)('w3m-legal-checkbox')], w);
    },
    92799: function (e, t, r) {
      var o = r(98670),
        i = r(8924),
        n = r(91527);
      r(74930), r(47526), r(59334);
      var a = (0, o.iv)`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;
      let l = class extends o.oi {
        render() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } = i.OptionsController.state,
            r = i.OptionsController.state.features?.legalCheckbox;
          return (e || t) && !r
            ? (0, o.dy)`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${['m', 's', 's', 's']} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `
            : null;
        }
        andTemplate() {
          let { termsConditionsUrl: e, privacyPolicyUrl: t } = i.OptionsController.state;
          return e && t ? 'and' : '';
        }
        termsTemplate() {
          let { termsConditionsUrl: e } = i.OptionsController.state;
          return e ? (0, o.dy)`<a href=${e}>Terms of Service</a>` : null;
        }
        privacyTemplate() {
          let { privacyPolicyUrl: e } = i.OptionsController.state;
          return e ? (0, o.dy)`<a href=${e}>Privacy Policy</a>` : null;
        }
      };
      (l.styles = [a]),
        (function (e, t, r, o) {
          var i,
            n = arguments.length,
            a = n < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            a = Reflect.decorate(e, t, r, o);
          else
            for (var l = e.length - 1; l >= 0; l--)
              (i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
          n > 3 && a && Object.defineProperty(t, r, a);
        })([(0, n.Mo)('w3m-legal-footer')], l);
    },
    9880: function (e, t, r) {
      r(46361);
    },
    44492: function (e, t, r) {
      r(81136);
    },
    33533: function (e, t, r) {
      var o = r(98670),
        i = r(94655),
        n = r(85282);
      r(39353);
      var a = r(38573),
        l = r(55202),
        s = (0, o.iv)`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,
        c = function (e, t, r, o) {
          var i,
            n = arguments.length,
            a = n < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            a = Reflect.decorate(e, t, r, o);
          else
            for (var l = e.length - 1; l >= 0; l--)
              (i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
          return n > 3 && a && Object.defineProperty(t, r, a), a;
        };
      let u = class extends o.oi {
        constructor() {
          super(...arguments),
            (this.tabIdx = void 0),
            (this.disabled = !1),
            (this.color = 'inherit');
        }
        render() {
          return (0, o.dy)`
      <button ?disabled=${this.disabled} tabindex=${(0, n.o)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
        }
      };
      (u.styles = [a.ET, a.ZM, s]),
        c([(0, i.Cb)()], u.prototype, 'tabIdx', void 0),
        c([(0, i.Cb)({ type: Boolean })], u.prototype, 'disabled', void 0),
        c([(0, i.Cb)()], u.prototype, 'color', void 0),
        c([(0, l.M)('wui-link')], u);
    },
    35553: function (e, t, r) {
      var o = r(98670),
        i = r(94655),
        n = r(38573),
        a = r(55202),
        l = (0, o.iv)`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,
        s = function (e, t, r, o) {
          var i,
            n = arguments.length,
            a = n < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            a = Reflect.decorate(e, t, r, o);
          else
            for (var l = e.length - 1; l >= 0; l--)
              (i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
          return n > 3 && a && Object.defineProperty(t, r, a), a;
        };
      let c = class extends o.oi {
        constructor() {
          super(...arguments), (this.radius = 36);
        }
        render() {
          return this.svgLoaderTemplate();
        }
        svgLoaderTemplate() {
          let e = this.radius > 50 ? 50 : this.radius,
            t = 36 - e;
          return (0, o.dy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116 + t} ${245 + t}"
          stroke-dashoffset=${360 + 1.75 * t}
        />
      </svg>
    `;
        }
      };
      (c.styles = [n.ET, l]),
        s([(0, i.Cb)({ type: Number })], c.prototype, 'radius', void 0),
        s([(0, a.M)('wui-loading-thumbnail')], c);
    },
    59334: function (e, t, r) {
      var o = r(98670);
      r(81136), r(39353), r(39543);
      var i = r(38573),
        n = r(55202),
        a = (0, o.iv)`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;
      let l = class extends o.oi {
        render() {
          return (0, o.dy)`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${['0', '0', 'l', '0']}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `;
        }
      };
      (l.styles = [i.ET, i.ZM, a]),
        (function (e, t, r, o) {
          var i,
            n = arguments.length,
            a = n < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            a = Reflect.decorate(e, t, r, o);
          else
            for (var l = e.length - 1; l >= 0; l--)
              (i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
          n > 3 && a && Object.defineProperty(t, r, a);
        })([(0, n.M)('wui-ux-by-reown')], l);
    },
    14620: function (e, t, r) {
      var o = r(98670),
        i = r(94655),
        n = r(55202),
        a = (0, o.iv)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,
        l = function (e, t, r, o) {
          var i,
            n = arguments.length,
            a = n < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, r)) : o;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
            a = Reflect.decorate(e, t, r, o);
          else
            for (var l = e.length - 1; l >= 0; l--)
              (i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
          return n > 3 && a && Object.defineProperty(t, r, a), a;
        };
      let s = class extends o.oi {
        constructor() {
          super(...arguments),
            (this.width = ''),
            (this.height = ''),
            (this.borderRadius = 'm'),
            (this.variant = 'default');
        }
        render() {
          return (
            (this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `),
            (0, o.dy)`<slot></slot>`
          );
        }
      };
      (s.styles = [a]),
        l([(0, i.Cb)()], s.prototype, 'width', void 0),
        l([(0, i.Cb)()], s.prototype, 'height', void 0),
        l([(0, i.Cb)()], s.prototype, 'borderRadius', void 0),
        l([(0, i.Cb)()], s.prototype, 'variant', void 0),
        l([(0, n.M)('wui-shimmer')], s);
    },
  },
]);
