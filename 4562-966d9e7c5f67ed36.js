'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4562],
  {
    84920: function (t, e, i) {
      let n;
      i.d(e, {
        ZP: function () {
          return D;
        },
      });
      var s,
        a = i(58854);
      let r = (t, e, i) => {
          let n = document.createElement(t),
            [s, a] = Array.isArray(e) ? [void 0, e] : [e, i];
          return s && Object.assign(n, s), null == a || a.forEach((t) => n.appendChild(t)), n;
        },
        l = (t, e) => {
          var i;
          return 'left' === e
            ? t.offsetLeft
            : ((null == (i = t.offsetParent instanceof HTMLElement ? t.offsetParent : null)
                ? void 0
                : i.offsetWidth) ?? 0) -
                t.offsetWidth -
                t.offsetLeft;
        },
        o = (t) => t.offsetWidth > 0 && t.offsetHeight > 0,
        h = String.raw,
        p =
          'u' > typeof CSS &&
          CSS.supports &&
          CSS.supports('animation-timing-function', 'linear(1,2)'),
        u = 'u' > typeof CSS && CSS.supports && CSS.supports('line-height', 'mod(1,1)'),
        d = 'u' > typeof matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : null,
        c = '--_number-flow-d-opacity',
        f = '--_number-flow-d-width',
        m = '--_number-flow-dx',
        g = '--_number-flow-d',
        y = (() => {
          try {
            return (
              CSS.registerProperty({
                name: c,
                syntax: '<number>',
                inherits: !1,
                initialValue: '0',
              }),
              CSS.registerProperty({
                name: m,
                syntax: '<length>',
                inherits: !0,
                initialValue: '0px',
              }),
              CSS.registerProperty({
                name: f,
                syntax: '<number>',
                inherits: !1,
                initialValue: '0',
              }),
              CSS.registerProperty({
                name: g,
                syntax: '<number>',
                inherits: !0,
                initialValue: '0',
              }),
              !0
            );
          } catch {
            return !1;
          }
        })(),
        v = 'var(--number-flow-char-height, 1em)',
        w = 'var(--number-flow-mask-height, 0.25em)',
        _ = `calc(${w} / 2)`,
        b = 'var(--number-flow-mask-width, 0.5em)',
        S = `calc(${b} / var(--scale-x))`,
        A = '#000 0, transparent 71%',
        $ = h`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${v} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${f}) / var(--width));transform:translateX(var(${m})) scaleX(var(--scale-x));margin:0 calc(-1 * ${b});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${S},#000 calc(100% - ${S}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${w},#000 calc(100% - ${w}),transparent 100% ),radial-gradient(at bottom right,${A}),radial-gradient(at bottom left,${A}),radial-gradient(at top left,${A}),radial-gradient(at top right,${A});-webkit-mask-size:100% calc(100% - ${w} * 2),calc(100% - ${S} * 2) 100%,${S} ${w},${S} ${w},${S} ${w},${S} ${w};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${_} ${b};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${m})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${g})}.digit__num,.number .section::after{padding:${_} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${c}))}`,
        C = HTMLElement,
        x =
          (h`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${v} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${_} 0}.symbol{white-space:pre}`,
          (t) =>
            `<span class="${'integer' === t.type || 'fraction' === t.type ? 'digit' : 'symbol'}" part="${'integer' === t.type || 'fraction' === t.type ? `digit ${t.type}-digit` : `symbol ${t.type}`}">${t.value}</span>`),
        k = u && p && y;
      class E extends C {
        constructor() {
          super(), (this.created = !1), (this.manual = !1);
          let { animated: t, ...e } = this.constructor.defaultProps;
          (this._animated = this.computedAnimated = t), Object.assign(this, e);
        }
        get animated() {
          return this._animated;
        }
        set animated(t) {
          var e;
          this.animated !== t &&
            ((this._animated = t),
            null == (e = this.shadowRoot) || e.getAnimations().forEach((t) => t.finish()));
        }
        set data(t) {
          var e;
          if (null == t) return;
          let { pre: i, integer: s, fraction: a, post: r, value: l } = t;
          if (this.created) {
            let n = this._data;
            (this._data = t),
              (this.computedTrend =
                'function' == typeof this.trend ? this.trend(n.value, l) : this.trend),
              (this.computedAnimated =
                k &&
                this._animated &&
                (!this.respectMotionPreference || !(null != d && d.matches)) &&
                o(this)),
              null == (e = this.plugins) ||
                e.forEach((e) => {
                  var i;
                  return null == (i = e.onUpdate) ? void 0 : i.call(e, t, n, this);
                }),
              this.manual || this.willUpdate(),
              this._pre.update(i),
              this._num.update({ integer: s, fraction: a }),
              this._post.update(r),
              this.manual || this.didUpdate();
          } else {
            if (
              ((this._data = t),
              this.attachShadow({ mode: 'open' }),
              'u' > typeof CSSStyleSheet && this.shadowRoot.adoptedStyleSheets)
            )
              n || (n = new CSSStyleSheet()).replaceSync($),
                (this.shadowRoot.adoptedStyleSheets = [n]);
            else {
              let t = document.createElement('style');
              (t.textContent = $), this.shadowRoot.appendChild(t);
            }
            (this._pre = new M(this, i, { justify: 'right', part: 'left' })),
              this.shadowRoot.appendChild(this._pre.el),
              (this._num = new R(this, s, a)),
              this.shadowRoot.appendChild(this._num.el),
              (this._post = new M(this, r, { justify: 'left', part: 'right' })),
              this.shadowRoot.appendChild(this._post.el);
          }
          this.created = !0;
        }
        willUpdate() {
          this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
        }
        didUpdate() {
          if (!this.computedAnimated) return;
          this._abortAnimationsFinish
            ? this._abortAnimationsFinish.abort()
            : this.dispatchEvent(new Event('animationsstart')),
            this._pre.didUpdate(),
            this._num.didUpdate(),
            this._post.didUpdate();
          let t = new AbortController();
          Promise.all(this.shadowRoot.getAnimations().map((t) => t.finished)).then(() => {
            t.signal.aborted ||
              (this.dispatchEvent(new Event('animationsfinish')),
              (this._abortAnimationsFinish = void 0));
          }),
            (this._abortAnimationsFinish = t);
        }
      }
      E.defaultProps = {
        transformTiming: {
          duration: 900,
          easing:
            'linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)',
        },
        spinTiming: void 0,
        opacityTiming: { duration: 450, easing: 'ease-out' },
        animated: !0,
        trend: (t, e) => Math.sign(e - t),
        respectMotionPreference: !0,
        plugins: void 0,
        digits: void 0,
      };
      class R {
        constructor(t, e, i, { className: n, ...s } = {}) {
          (this.flow = t),
            (this._integer = new j(t, e, { justify: 'right', part: 'integer' })),
            (this._fraction = new j(t, i, { justify: 'left', part: 'fraction' })),
            (this._inner = r('span', { className: 'number__inner' }, [
              this._integer.el,
              this._fraction.el,
            ])),
            (this.el = r('span', { ...s, part: 'number', className: `number ${n ?? ''}` }, [
              this._inner,
            ]));
        }
        willUpdate() {
          (this._prevWidth = this.el.offsetWidth),
            (this._prevLeft = this.el.getBoundingClientRect().left),
            this._integer.willUpdate(),
            this._fraction.willUpdate();
        }
        update({ integer: t, fraction: e }) {
          this._integer.update(t), this._fraction.update(e);
        }
        didUpdate() {
          let t = this.el.getBoundingClientRect();
          this._integer.didUpdate(), this._fraction.didUpdate();
          let e = this._prevLeft - t.left,
            i = this.el.offsetWidth,
            n = this._prevWidth - i;
          this.el.style.setProperty('--width', String(i)),
            this.el.animate(
              { [m]: [`${e}px`, '0px'], [f]: [n, 0] },
              { ...this.flow.transformTiming, composite: 'accumulate' }
            );
        }
      }
      class U {
        constructor(t, e, { justify: i, className: n, ...s }, a) {
          (this.flow = t),
            (this.children = new Map()),
            (this.onCharRemove = (t) => () => {
              this.children.delete(t);
            }),
            (this.justify = i);
          let l = e.map((t) => this.addChar(t).el);
          this.el = r(
            'span',
            { ...s, className: `section section--justify-${i} ${n ?? ''}` },
            a ? a(l) : l
          );
        }
        addChar(t, { startDigitsAtZero: e = !1, ...i } = {}) {
          let n =
            'integer' === t.type || 'fraction' === t.type
              ? new T(this, t.type, e ? 0 : t.value, t.pos, {
                  ...i,
                  onRemove: this.onCharRemove(t.key),
                })
              : new L(this, t.type, t.value, { ...i, onRemove: this.onCharRemove(t.key) });
          return this.children.set(t.key, n), n;
        }
        unpop(t) {
          t.el.removeAttribute('inert'), (t.el.style.top = ''), (t.el.style[this.justify] = '');
        }
        pop(t) {
          t.forEach((t) => {
            (t.el.style.top = `${t.el.offsetTop}px`),
              (t.el.style[this.justify] = `${l(t.el, this.justify)}px`);
          }),
            t.forEach((t) => {
              t.el.setAttribute('inert', ''), (t.present = !1);
            });
        }
        addNewAndUpdateExisting(t) {
          let e = new Map(),
            i = new Map(),
            n = 'left' === this.justify,
            s = n ? 'prepend' : 'append';
          if (
            ((function (t, e, { reverse: i = !1 } = {}) {
              let n = t.length;
              for (let s = i ? n - 1 : 0; i ? s >= 0 : s < n; i ? s-- : s++) e(t[s], s);
            })(
              t,
              (t) => {
                let n;
                this.children.has(t.key)
                  ? ((n = this.children.get(t.key)), i.set(t, n), this.unpop(n), (n.present = !0))
                  : ((n = this.addChar(t, { startDigitsAtZero: !0, animateIn: !0 })), e.set(t, n)),
                  this.el[s](n.el);
              },
              { reverse: n }
            ),
            this.flow.computedAnimated)
          ) {
            let t = this.el.getBoundingClientRect();
            e.forEach((e) => {
              e.willUpdate(t);
            });
          }
          e.forEach((t, e) => {
            t.update(e.value);
          }),
            i.forEach((t, e) => {
              t.update(e.value);
            });
        }
        willUpdate() {
          let t = this.el.getBoundingClientRect();
          (this._prevOffset = t[this.justify]), this.children.forEach((e) => e.willUpdate(t));
        }
        didUpdate() {
          let t = this.el.getBoundingClientRect();
          this.children.forEach((e) => e.didUpdate(t));
          let e = t[this.justify],
            i = this._prevOffset - e;
          i &&
            this.children.size &&
            this.el.animate(
              { transform: [`translateX(${i}px)`, 'none'] },
              { ...this.flow.transformTiming, composite: 'accumulate' }
            );
        }
      }
      class j extends U {
        update(t) {
          let e = new Map();
          this.children.forEach((i, n) => {
            t.find((t) => t.key === n) || e.set(n, i), this.unpop(i);
          }),
            this.addNewAndUpdateExisting(t),
            e.forEach((t) => {
              t instanceof T && t.update(0);
            }),
            this.pop(e);
        }
      }
      class M extends U {
        update(t) {
          let e = new Map();
          this.children.forEach((i, n) => {
            t.find((t) => t.key === n) || e.set(n, i);
          }),
            this.pop(e),
            this.addNewAndUpdateExisting(t);
        }
      }
      class N {
        constructor(t, e, { onRemove: i, animateIn: n = !1 } = {}) {
          (this.flow = t),
            (this.el = e),
            (this._present = !0),
            (this._remove = () => {
              var t;
              this.el.remove(), null == (t = this._onRemove) || t.call(this);
            }),
            this.el.classList.add('animate-presence'),
            this.flow.computedAnimated &&
              n &&
              this.el.animate(
                { [c]: [-0.9999, 0] },
                { ...this.flow.opacityTiming, composite: 'accumulate' }
              ),
            (this._onRemove = i);
        }
        get present() {
          return this._present;
        }
        set present(t) {
          if (this._present !== t) {
            if (
              ((this._present = t),
              t ? this.el.removeAttribute('inert') : this.el.setAttribute('inert', ''),
              !this.flow.computedAnimated)
            ) {
              t || this._remove();
              return;
            }
            this.el.style.setProperty('--_number-flow-d-opacity', t ? '0' : '-.999'),
              this.el.animate(
                { [c]: t ? [-0.9999, 0] : [0.999, 0] },
                { ...this.flow.opacityTiming, composite: 'accumulate' }
              ),
              t
                ? this.flow.removeEventListener('animationsfinish', this._remove)
                : this.flow.addEventListener('animationsfinish', this._remove, { once: !0 });
          }
        }
      }
      class P extends N {
        constructor(t, e, i, n) {
          super(t.flow, i, n), (this.section = t), (this.value = e), (this.el = i);
        }
      }
      class T extends P {
        constructor(t, e, i, n, s) {
          var a, l;
          let o =
              ((null == (l = null == (a = t.flow.digits) ? void 0 : a[n]) ? void 0 : l.max) ?? 9) +
              1,
            h = Array.from({ length: o }).map((t, e) => {
              let n = r('span', { className: 'digit__num' }, [document.createTextNode(String(e))]);
              return (
                e !== i && n.setAttribute('inert', ''), n.style.setProperty('--n', String(e)), n
              );
            }),
            p = r('span', { part: `digit ${e}-digit`, className: 'digit' }, h);
          p.style.setProperty('--current', String(i)),
            p.style.setProperty('--length', String(o)),
            super(t, i, p, s),
            (this.pos = n),
            (this._onAnimationsFinish = () => {
              this.el.classList.remove('is-spinning');
            }),
            (this._numbers = h),
            (this.length = o);
        }
        willUpdate(t) {
          let e = this.el.getBoundingClientRect();
          this._prevValue = this.value;
          let i = e[this.section.justify] - t[this.section.justify],
            n = e.width / 2;
          this._prevCenter = 'left' === this.section.justify ? i + n : i - n;
        }
        update(t) {
          this.el.style.setProperty('--current', String(t)),
            this._numbers.forEach((e, i) =>
              i === t ? e.removeAttribute('inert') : e.setAttribute('inert', '')
            ),
            (this.value = t);
        }
        didUpdate(t) {
          let e = this.el.getBoundingClientRect(),
            i = e[this.section.justify] - t[this.section.justify],
            n = e.width / 2,
            s = 'left' === this.section.justify ? i + n : i - n,
            a = this._prevCenter - s;
          a &&
            this.el.animate(
              { transform: [`translateX(${a}px)`, 'none'] },
              { ...this.flow.transformTiming, composite: 'accumulate' }
            );
          let r = this.getDelta();
          r &&
            (this.el.classList.add('is-spinning'),
            this.el.animate(
              { [g]: [-r, 0] },
              { ...(this.flow.spinTiming ?? this.flow.transformTiming), composite: 'accumulate' }
            ),
            this.flow.addEventListener('animationsfinish', this._onAnimationsFinish, { once: !0 }));
        }
        getDelta() {
          var t;
          if (this.flow.plugins)
            for (let e of this.flow.plugins) {
              let i =
                null == (t = e.getDelta) ? void 0 : t.call(e, this.value, this._prevValue, this);
              if (null != i) return i;
            }
          let e = this.value - this._prevValue,
            i = this.flow.computedTrend || Math.sign(e);
          return i < 0 && this.value > this._prevValue
            ? this.value - this.length - this._prevValue
            : i > 0 && this.value < this._prevValue
              ? this.length - this._prevValue + this.value
              : e;
        }
      }
      class L extends P {
        constructor(t, e, i, n) {
          let s = r('span', { className: 'symbol__value', textContent: i });
          super(t, i, r('span', { part: `symbol ${e}`, className: 'symbol' }, [s]), n),
            (this.type = e),
            (this._children = new Map()),
            (this._onChildRemove = (t) => () => {
              this._children.delete(t);
            }),
            this._children.set(i, new N(this.flow, s, { onRemove: this._onChildRemove(i) }));
        }
        willUpdate(t) {
          if ('decimal' === this.type) return;
          let e = this.el.getBoundingClientRect();
          this._prevOffset = e[this.section.justify] - t[this.section.justify];
        }
        update(t) {
          if (this.value !== t) {
            if (((this._children.get(this.value).present = !1), this._children.has(t)))
              this._children.get(t).present = !0;
            else {
              let e = r('span', { className: 'symbol__value', textContent: t });
              this.el.appendChild(e),
                this._children.set(
                  t,
                  new N(this.flow, e, { animateIn: !0, onRemove: this._onChildRemove(t) })
                );
            }
          }
          this.value = t;
        }
        didUpdate(t) {
          if ('decimal' === this.type) return;
          let e = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify],
            i = this._prevOffset - e;
          i &&
            this.el.animate(
              { transform: [`translateX(${i}px)`, 'none'] },
              { ...this.flow.transformTiming, composite: 'accumulate' }
            );
        }
      }
      let O = parseInt(a.version.match(/^(\d+)\./)?.[1]) >= 19;
      class F extends E {
        attributeChangedCallback(t, e, i) {
          this[t] = JSON.parse(i);
        }
      }
      (F.observedAttributes = O ? [] : ['data', 'digits']),
        (s = 'number-flow-react'),
        customElements.get(s) === F || customElements.define(s, F);
      let V = {},
        W = O ? (t) => t : JSON.stringify;
      function B(t) {
        let {
          transformTiming: e,
          spinTiming: i,
          opacityTiming: n,
          animated: s,
          respectMotionPreference: a,
          trend: r,
          plugins: l,
          ...o
        } = t;
        return [
          {
            transformTiming: e,
            spinTiming: i,
            opacityTiming: n,
            animated: s,
            respectMotionPreference: a,
            trend: r,
            plugins: l,
          },
          o,
        ];
      }
      class I extends a.Component {
        updateProperties(t) {
          if (!this.el) return;
          this.el.manual = !this.props.isolate;
          let [e] = B(this.props);
          Object.entries(e).forEach(([t, e]) => {
            this.el[t] = e ?? F.defaultProps[t];
          }),
            t?.onAnimationsStart &&
              this.el.removeEventListener('animationsstart', t.onAnimationsStart),
            this.props.onAnimationsStart &&
              this.el.addEventListener('animationsstart', this.props.onAnimationsStart),
            t?.onAnimationsFinish &&
              this.el.removeEventListener('animationsfinish', t.onAnimationsFinish),
            this.props.onAnimationsFinish &&
              this.el.addEventListener('animationsfinish', this.props.onAnimationsFinish);
        }
        componentDidMount() {
          this.updateProperties(),
            O &&
              this.el &&
              ((this.el.digits = this.props.digits), (this.el.data = this.props.data));
        }
        getSnapshotBeforeUpdate(t) {
          if ((this.updateProperties(t), t.data !== this.props.data)) {
            if (this.props.group)
              return this.props.group.willUpdate(), () => this.props.group?.didUpdate();
            if (!this.props.isolate) return this.el?.willUpdate(), () => this.el?.didUpdate();
          }
          return null;
        }
        componentDidUpdate(t, e, i) {
          i?.();
        }
        handleRef(t) {
          this.props.innerRef && (this.props.innerRef.current = t), (this.el = t);
        }
        render() {
          let [
            t,
            {
              innerRef: e,
              className: i,
              data: n,
              willChange: s,
              isolate: r,
              group: l,
              digits: o,
              onAnimationsStart: h,
              onAnimationsFinish: p,
              ...u
            },
          ] = B(this.props);
          return a.createElement('number-flow-react', {
            ref: this.handleRef,
            'data-will-change': s ? '' : void 0,
            class: i,
            'aria-label': n.valueAsString,
            ...u,
            role: 'img',
            dangerouslySetInnerHTML: { __html: '' },
            suppressHydrationWarning: !0,
            digits: W(o),
            data: W(n),
          });
        }
        constructor(t) {
          super(t), (this.handleRef = this.handleRef.bind(this));
        }
      }
      let D = a.forwardRef(function (
          { value: t, locales: e, format: i, prefix: n, suffix: s, ...r },
          l
        ) {
          a.useImperativeHandle(l, () => o.current, []);
          let o = a.useRef(),
            h = a.useContext(X);
          h?.useRegister(o);
          let p = a.useMemo(() => (e ? JSON.stringify(e) : ''), [e]),
            u = a.useMemo(() => (i ? JSON.stringify(i) : ''), [i]),
            d = a.useMemo(
              () =>
                (function (t, e, i, n) {
                  let s = e.formatToParts(t);
                  i && s.unshift({ type: 'prefix', value: i }),
                    n && s.push({ type: 'suffix', value: n });
                  let a = [],
                    r = [],
                    l = [],
                    o = [],
                    h = {},
                    p = (t) => `${t}:${(h[t] = (h[t] ?? -1) + 1)}`,
                    u = '',
                    d = !1,
                    c = !1;
                  for (let t of s) {
                    u += t.value;
                    let e = 'minusSign' === t.type || 'plusSign' === t.type ? 'sign' : t.type;
                    'integer' === e
                      ? ((d = !0),
                        r.push(...t.value.split('').map((t) => ({ type: e, value: parseInt(t) }))))
                      : 'group' === e
                        ? r.push({ type: e, value: t.value })
                        : 'decimal' === e
                          ? ((c = !0), l.push({ type: e, value: t.value, key: p(e) }))
                          : 'fraction' === e
                            ? l.push(
                                ...t.value
                                  .split('')
                                  .map((t) => ({
                                    type: e,
                                    value: parseInt(t),
                                    key: p(e),
                                    pos: -1 - h[e],
                                  }))
                              )
                            : (d || c ? o : a).push({ type: e, value: t.value, key: p(e) });
                  }
                  let f = [];
                  for (let t = r.length - 1; t >= 0; t--) {
                    let e = r[t];
                    f.unshift(
                      'integer' === e.type
                        ? { ...e, key: p(e.type), pos: h[e.type] }
                        : { ...e, key: p(e.type) }
                    );
                  }
                  return {
                    pre: a,
                    integer: f,
                    fraction: l,
                    post: o,
                    valueAsString: u,
                    value: 'string' == typeof t ? parseFloat(t) : t,
                  };
                })(t, (V[`${p}:${u}`] ??= new Intl.NumberFormat(e, i)), n, s),
              [t, p, u, n, s]
            );
          return a.createElement(I, { ...r, group: h, data: d, innerRef: o });
        }),
        X = a.createContext(void 0);
    },
    59114: function (t, e, i) {
      i.d(e, {
        j: function () {
          return M;
        },
      });
      var n,
        s = i(6741);
      function a(t, e, i) {
        var n;
        if ('string' == typeof t) {
          let a = document;
          e && ((0, s.k)(!!e.current, 'Scope provided, but no element detected.'), (a = e.current)),
            i
              ? ((null !== (n = i[t]) && void 0 !== n) || (i[t] = a.querySelectorAll(t)),
                (t = i[t]))
              : (t = a.querySelectorAll(t));
        } else t instanceof Element && (t = [t]);
        return Array.from(t || []);
      }
      var r = i(33036),
        l = i(18164),
        o = i(95421),
        h = i(59565),
        p = i(74117),
        u = i(29666),
        d = i(22490),
        c = i(44176),
        f = i(11537),
        m = i(22947),
        g = i(94730),
        y = i(30831),
        v = i(17406),
        w = i(83237);
      function _(t, e, i, n) {
        var s;
        return 'number' == typeof e
          ? e
          : e.startsWith('-') || e.startsWith('+')
            ? Math.max(0, t + parseFloat(e))
            : '<' === e
              ? i
              : null !== (s = n.get(e)) && void 0 !== s
                ? s
                : t;
      }
      let b = (t, e, i) => {
        let n = e - t;
        return ((((i - t) % n) + n) % n) + t;
      };
      var S = i(45180),
        A = i(6253),
        $ = i(77784);
      function C(t, e) {
        return t.at !== e.at ? t.at - e.at : null === t.value ? 1 : null === e.value ? -1 : 0;
      }
      function x(t, e) {
        return e.has(t) || e.set(t, {}), e.get(t);
      }
      function k(t, e) {
        return e[t] || (e[t] = []), e[t];
      }
      let E = (t) => 'number' == typeof t,
        R = (t) => t.every(E);
      function U(t, e, i, n) {
        let d = a(t, n),
          c = d.length;
        (0, s.k)(!!c, 'No valid element provided.');
        let f = [];
        for (let t = 0; t < c; t++) {
          let n = d[t];
          r.R.has(n) ||
            (function (t) {
              let e = {
                  presenceContext: null,
                  props: {},
                  visualState: {
                    renderState: {
                      transform: {},
                      transformOrigin: {},
                      style: {},
                      vars: {},
                      attrs: {},
                    },
                    latestValues: {},
                  },
                },
                i = (0, h.v)(t) ? new p.e(e) : new u.W(e);
              i.mount(t), r.R.set(t, i);
            })(n);
          let s = r.R.get(n),
            a = { ...i };
          'function' == typeof a.delay && (a.delay = a.delay(t, c)),
            f.push(...(0, o.w)(s, { ...e, transition: a }, {}));
        }
        return new l.s(f);
      }
      let j = (t) => Array.isArray(t) && Array.isArray(t[0]),
        M = function (t, e, i) {
          let s;
          return (
            (s = j(t)
              ? (function (t, e, i) {
                  let n = [];
                  return (
                    (function (t, { defaultTransition: e = {}, ...i } = {}, n) {
                      let s = e.duration || 0.3,
                        r = new Map(),
                        l = new Map(),
                        o = {},
                        h = new Map(),
                        p = 0,
                        u = 0,
                        d = 0;
                      for (let i = 0; i < t.length; i++) {
                        let r = t[i];
                        if ('string' == typeof r) {
                          h.set(r, u);
                          continue;
                        }
                        if (!Array.isArray(r)) {
                          h.set(r.name, _(u, r.at, p, h));
                          continue;
                        }
                        let [v, C, E = {}] = r;
                        void 0 !== E.at && (u = _(u, E.at, p, h));
                        let U = 0,
                          j = (t, i, n, a = 0, r = 0) => {
                            let l = Array.isArray(t) ? t : [t],
                              {
                                delay: o = 0,
                                times: h = (0, g.Y)(l),
                                type: p = 'keyframes',
                                ...v
                              } = i,
                              { ease: w = e.ease || 'easeOut', duration: _ } = i,
                              C = 'function' == typeof o ? o(a, r) : o,
                              x = l.length;
                            if (x <= 2 && 'spring' === p) {
                              let t = 100;
                              2 === x && R(l) && (t = Math.abs(l[1] - l[0]));
                              let e = { ...v };
                              void 0 !== _ && (e.duration = (0, m.w)(_));
                              let i = (function (t, e = 100) {
                                let i = (0, c.S)({ keyframes: [0, e], ...t }),
                                  n = Math.min((0, f.i)(i), f.E);
                                return {
                                  type: 'keyframes',
                                  ease: (t) => i.next(n * t).value / e,
                                  duration: (0, m.X)(n),
                                };
                              })(e, t);
                              (w = i.ease), (_ = i.duration);
                            }
                            null != _ || (_ = s);
                            let k = u + C,
                              E = k + _;
                            1 === h.length && 0 === h[0] && (h[1] = 1);
                            let j = h.length - l.length;
                            j > 0 && (0, y.c)(h, j),
                              1 === l.length && l.unshift(null),
                              (function (t, e, i, n, s, a) {
                                !(function (t, e, i) {
                                  for (let n = 0; n < t.length; n++) {
                                    let s = t[n];
                                    s.at > e && s.at < i && ((0, A.cl)(t, s), n--);
                                  }
                                })(t, s, a);
                                for (let l = 0; l < e.length; l++) {
                                  var r;
                                  t.push({
                                    value: e[l],
                                    at: (0, $.t)(s, a, n[l]),
                                    easing: ((r = l), (0, S.N)(i) ? i[b(0, i.length, r)] : i),
                                  });
                                }
                              })(n, l, w, h, k, E),
                              (U = Math.max(C + _, U)),
                              (d = Math.max(E, d));
                          };
                        if ((0, w.i)(v)) j(C, E, k('default', x(v, l)));
                        else {
                          let t = a(v, n, o),
                            e = t.length;
                          for (let i = 0; i < e; i++) {
                            let n = x(t[i], l);
                            for (let t in C)
                              j(C[t], E[t] ? { ...E, ...E[t] } : { ...E }, k(t, n), i, e);
                          }
                        }
                        (p = u), (u += U);
                      }
                      return (
                        l.forEach((t, n) => {
                          for (let s in t) {
                            let a = t[s];
                            a.sort(C);
                            let l = [],
                              o = [],
                              h = [];
                            for (let t = 0; t < a.length; t++) {
                              let { at: e, value: i, easing: n } = a[t];
                              l.push(i), o.push((0, v.Y)(0, d, e)), h.push(n || 'easeOut');
                            }
                            0 !== o[0] && (o.unshift(0), l.unshift(l[0]), h.unshift('easeInOut')),
                              1 !== o[o.length - 1] && (o.push(1), l.push(null)),
                              r.has(n) || r.set(n, { keyframes: {}, transition: {} });
                            let p = r.get(n);
                            (p.keyframes[s] = l),
                              (p.transition[s] = { ...e, duration: d, ease: h, times: o, ...i });
                          }
                        }),
                        r
                      );
                    })(t, e, i).forEach(({ keyframes: t, transition: e }, i) => {
                      let s;
                      (s = (0, w.i)(i) ? (0, d.D)(i, t.default, e.default) : U(i, t, e)), n.push(s);
                    }),
                    new l.s(n)
                  );
                })(t, e, n)
              : 'object' != typeof e || Array.isArray(e)
                ? (0, d.D)(t, e, i)
                : U(t, e, i, n)),
            n && n.animations.push(s),
            s
          );
        };
    },
    10462: function (t, e, i) {
      i.d(e, {
        J: function () {
          return r;
        },
      });
      var n = i(58854),
        s = i(92045),
        a = i(63459);
      function r() {
        a.O.current || (0, s.A)();
        let [t] = (0, n.useState)(a.n.current);
        return t;
      }
    },
  },
]);
