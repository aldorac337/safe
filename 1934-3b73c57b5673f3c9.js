(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1934, 2964],
  {
    97016: function (e, t, r) {
      'use strict';
      r.d(t, {
        Q: function () {
          return w;
        },
        z: function () {
          return p;
        },
      });
      var n = r(75040),
        a = r(58854),
        s = r(7689),
        i = r.n(s),
        o = r(12432),
        c = r(81289),
        l = r(40028),
        u = r(237),
        d = r.n(u),
        y = r(9486);
      let v = {
          initial: { opacity: 0, scale: 0.4 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.4 },
        },
        p = (0, a.forwardRef)(function (e, t) {
          let {
            children: r,
            variant: a = 'primary',
            tone: s = 'default',
            size: i = 'md',
            type: u = 'button',
            prefixIcon: y,
            suffixIcon: p,
            wide: w,
            textOverflow: h = 'ellipsis',
            state: f = 'idle',
            className: I,
            ...C
          } = e;
          return (0, n.jsxs)('button', {
            ...C,
            'data-variant': a,
            'data-tone': s,
            'data-size': i,
            'data-wide': w,
            'data-spinner': 'idle' !== f,
            className: ''.concat(d().container, ' ').concat(null != I ? I : ''),
            ref: t,
            disabled: !(C.onClick || 'submit' === u) || C.disabled || 'idle' !== f,
            'data-disabled': C.disabled,
            type: u,
            children: [
              (0, n.jsx)(o.M, {
                initial: !1,
                children:
                  'idle' !== f &&
                  (0, n.jsx)(c.E.div, {
                    className: d().spinner,
                    initial: { opacity: 0, y: -8 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -8 },
                    transition: { duration: 0.2, ease: 'easeInOut' },
                    children: (0, n.jsx)(o.M, {
                      mode: 'popLayout',
                      initial: !1,
                      children: (0, n.jsx)(
                        c.E.div,
                        {
                          initial: { opacity: 0, scale: 0.6 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0, scale: 0.4 },
                          children:
                            'success' === f
                              ? (0, n.jsxs)('svg', {
                                  width: '22',
                                  height: '22',
                                  viewBox: '0 0 22 22',
                                  fill: 'none',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: [
                                    (0, n.jsx)('rect', {
                                      width: '22',
                                      height: '22',
                                      rx: '11',
                                      fill: 'var(--color)',
                                    }),
                                    (0, n.jsx)('path', {
                                      d: 'M6 11.7917L9.1451 15L16 8',
                                      stroke: 'var(--background)',
                                      strokeWidth: '2.5',
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                    }),
                                  ],
                                })
                              : 'failure' === f
                                ? (0, n.jsxs)('svg', {
                                    width: '22',
                                    height: '22',
                                    viewBox: '0 0 22 22',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    children: [
                                      (0, n.jsx)('rect', {
                                        width: '22',
                                        height: '22',
                                        rx: '11',
                                        fill: 'var(--color)',
                                      }),
                                      (0, n.jsx)('path', {
                                        d: 'M7 15L15 7',
                                        stroke: 'var(--background)',
                                        strokeWidth: '2.5',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                      }),
                                      (0, n.jsx)('path', {
                                        d: 'M15 15L7 7',
                                        stroke: 'var(--background)',
                                        strokeWidth: '2.5',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                      }),
                                    ],
                                  })
                                : (0, n.jsx)(o.M, {
                                    children: (0, n.jsx)(l.$, { size: 21, weight: 2.25 }),
                                  }),
                        },
                        f
                      ),
                    }),
                  }),
              }),
              (0, n.jsxs)('div', {
                className: d().children,
                children: [
                  (0, n.jsx)(o.M, {
                    initial: !1,
                    mode: 'popLayout',
                    children:
                      (y || p) &&
                      (0, n.jsx)(
                        c.E.div,
                        {
                          variants: v,
                          initial: 'initial',
                          animate: 'animate',
                          exit: 'exit',
                          className: d().prefixIcon,
                          children: y,
                        },
                        'prefixIcon'
                      ),
                  }),
                  (0, n.jsx)('span', {
                    className: d().childrenInner,
                    'data-overflow': h,
                    children: r,
                  }),
                  (0, n.jsx)(o.M, {
                    initial: !1,
                    mode: 'popLayout',
                    children:
                      (p || y) &&
                      (0, n.jsx)(
                        c.E.div,
                        {
                          variants: v,
                          initial: 'initial',
                          animate: 'animate',
                          exit: 'exit',
                          className: d().suffixIcon,
                          children: p,
                        },
                        'suffixIcon'
                      ),
                  }),
                ],
              }),
            ],
          });
        }),
        w = (0, a.forwardRef)(function (e, t) {
          let {
            children: r,
            variant: a = 'primary',
            tone: s = 'default',
            size: o = 'md',
            prefixIcon: c,
            suffixIcon: l,
            wide: u,
            state: y = 'idle',
            className: v,
            textOverflow: p = 'ellipsis',
            ...w
          } = e;
          return w.disabled
            ? (0, n.jsx)('span', {
                ...w,
                'data-variant': a,
                'data-tone': s,
                'data-size': o,
                'data-wide': u,
                'data-disabled': !0,
                className: ''.concat(d().container, ' ').concat(null != v ? v : ''),
                ref: t,
                children: (0, n.jsx)(h, {
                  state: y,
                  prefixIcon: c,
                  suffixIcon: l,
                  textOverflow: p,
                  children: r,
                }),
              })
            : (0, n.jsx)(i(), {
                ...w,
                'data-variant': a,
                'data-tone': s,
                'data-size': o,
                'data-wide': u,
                'data-spinner': 'idle' !== y,
                className: ''.concat(d().container, ' ').concat(null != v ? v : ''),
                ref: t,
                rel: '_blank' === w.target ? 'noopener noreferrer' : void 0,
                scroll: !1,
                prefetch: !0,
                children: (0, n.jsx)(h, {
                  state: y,
                  prefixIcon: c,
                  suffixIcon: l,
                  textOverflow: p,
                  children: r,
                }),
              });
        }),
        h = (e) => {
          let { state: t, prefixIcon: r, suffixIcon: a, children: s, textOverflow: i } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(o.M, {
                initial: !1,
                children:
                  'idle' !== t &&
                  (0, n.jsx)(c.E.div, {
                    className: d().spinner,
                    ...y.baseMotionVariants,
                    transition: { duration: 0.2, ease: 'easeInOut' },
                    children: (0, n.jsx)(l.$, { state: t }),
                  }),
              }),
              (0, n.jsxs)('div', {
                className: d().children,
                children: [
                  (0, n.jsx)(o.M, {
                    initial: !1,
                    mode: 'popLayout',
                    children:
                      (r || a) &&
                      (0, n.jsx)(
                        c.E.div,
                        {
                          variants: v,
                          initial: 'initial',
                          animate: 'animate',
                          exit: 'exit',
                          className: d().prefixIcon,
                          children: r,
                        },
                        'prefixIcon'
                      ),
                  }),
                  (0, n.jsx)('span', {
                    className: d().childrenInner,
                    'data-overflow': i,
                    children: s,
                  }),
                  (0, n.jsx)(o.M, {
                    initial: !1,
                    mode: 'popLayout',
                    children:
                      (a || r) &&
                      (0, n.jsx)(
                        c.E.div,
                        {
                          variants: v,
                          initial: 'initial',
                          animate: 'animate',
                          exit: 'exit',
                          className: d().suffixIcon,
                          children: a,
                        },
                        'suffixIcon'
                      ),
                  }),
                ],
              }),
            ],
          });
        };
    },
    87121: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return v;
        },
      });
      var n = r(75040),
        a = r(83181),
        s = r(58854),
        i = r(12432),
        o = r(81289),
        c = r(31994),
        l = r.n(c),
        u = r(23436),
        d = r(5127);
      let y = { ease: [0, 0, 0.2, 1], duration: 0.15 },
        v = (e) => {
          let {
              label: t,
              name: r,
              autoFocus: c,
              disabled: v,
              loading: w,
              spinnerState: h,
              type: f = 'password',
              variant: I = 'default',
              align: C = 'center',
              errorMessage: E,
              value: m,
              onValueChange: A,
              onComplete: T,
              skipSuccessAnimation: S = !1,
              tone: k = 'primary',
            } = e,
            g = (0, s.useRef)(null),
            R = (0, s.useRef)(null),
            _ = (0, s.useId)(),
            [D, O] = (0, s.useState)(null != m ? m : ''),
            [K, L] = (0, s.useState)(!1);
          return (
            (0, s.useEffect)(() => {
              if (E && R.current) {
                L(!1);
                let e = window.setInterval(() => {
                  O((t) => {
                    let r = t.slice(0, t.length - 1);
                    return 0 === r.length && window.clearInterval(e), r;
                  });
                }, 25);
                return () => {
                  window.clearInterval(e);
                };
              }
            }, [E]),
            (0, s.useEffect)(() => {
              !w && R.current && 'success' !== h && R.current.focus();
            }, [w, h]),
            (0, s.useEffect)(() => {
              !1 === w && L(!1);
            }, [w]),
            (0, s.useEffect)(() => {
              if (!g.current) return;
              let e = g.current,
                { left: t, width: r } = e.getBoundingClientRect();
              function n() {
                let { left: t, width: r } = e.getBoundingClientRect();
                e.style.setProperty('--otp-left-margin-viewport', t.toString() + 'px'),
                  e.style.setProperty('--otp-input-width', r.toString() + 'px');
              }
              return (
                e.style.setProperty('--otp-left-margin-viewport', t.toString() + 'px'),
                e.style.setProperty('--otp-input-width', r.toString() + 'px'),
                window.addEventListener('resize', n),
                () => {
                  window.removeEventListener('resize', n);
                }
              );
            }, []),
            (0, n.jsxs)('div', {
              className: l().container,
              children: [
                t && (0, n.jsx)('label', { className: l().label, htmlFor: r, children: t }),
                (0, n.jsxs)('div', {
                  ref: g,
                  className: l().inputContainer,
                  'data-disabled': v,
                  'data-align': C,
                  children: [
                    (0, n.jsx)(a.uZ, {
                      ref: R,
                      id: r,
                      name: r,
                      'aria-label': t,
                      autoFocus: c,
                      disabled: v || w,
                      maxLength: d.V2,
                      textAlign: 'left',
                      autoComplete: 'off',
                      containerClassName: '\n            '
                        .concat('outlined' === I ? l().outlinedInput : l().input, '\n            ')
                        .concat(w ? l().loading : '', '\n            ')
                        .concat(K ? l().fullPaste : '', '\n            ')
                        .concat('success' !== h || S ? '' : l().success, '\n            ')
                        .concat(E ? l().error : '', '\n            ')
                        .concat('danger' === k ? l().danger : '', '\n          '),
                      value: D,
                      onChange: (e) =>
                        (function (e) {
                          let t = e.length - D.length;
                          if (t === d.V2) {
                            let t = e.slice(0, D.length),
                              r = window.setInterval(() => {
                                O((t = e.slice(0, t.length + 1))),
                                  t === e &&
                                    (window.clearInterval(r), null == A || A(t), null == T || T(t));
                              }, 25);
                            L(!0);
                          } else
                            -1 === t && K
                              ? L(!1)
                              : (O(e), null == A || A(e), e.length === d.V2 && (null == T || T(e)));
                        })(e),
                      render: (e) => {
                        let { slots: t } = e;
                        return (0, n.jsxs)(n.Fragment, {
                          children: [
                            t
                              .slice(0, d.V2 / 2)
                              .map((e, t) =>
                                (0, n.jsx)(
                                  p,
                                  {
                                    index: t,
                                    type: f,
                                    inputLength: D.length,
                                    loading: w,
                                    spinnerState: h,
                                    borderToSpinnerLayoutId: _,
                                    fullPaste: K,
                                    error: !!E,
                                    ...e,
                                    isActive: D.length === t,
                                    variant: I,
                                    tone: k,
                                  },
                                  t
                                )
                              ),
                            (0, n.jsx)('div', { className: l().divider }),
                            t
                              .slice(d.V2 / 2, d.V2)
                              .map((e, t) =>
                                (0, n.jsx)(
                                  p,
                                  {
                                    index: t + d.V2 / 2,
                                    type: f,
                                    inputLength: D.length,
                                    loading: w,
                                    spinnerState: h,
                                    borderToSpinnerLayoutId: _,
                                    fullPaste: K,
                                    error: !!E,
                                    ...e,
                                    isActive:
                                      t !== d.V2 / 2 - 1
                                        ? D.length === t + d.V2 / 2
                                        : D.length === d.V2 || D.length === d.V2 - 1,
                                    variant: I,
                                    tone: k,
                                  },
                                  t
                                )
                              ),
                            (0, n.jsx)(i.M, {
                              children:
                                w &&
                                D.length === d.V2 &&
                                (0, n.jsx)(o.E.div, {
                                  className: l().spinner,
                                  initial: {
                                    x: 'outlined' === I ? -50 : K ? -25 : 0,
                                    opacity: 'outlined' === I || K ? 0 : 1,
                                  },
                                  animate: { x: 'outlined' === I ? -25 : 0, opacity: 1 },
                                  exit: { opacity: 0 },
                                  transition: { ...y, delay: K ? 0.1 : 0 },
                                }),
                            }),
                          ],
                        });
                      },
                    }),
                    (0, n.jsx)(u.B, { message: null != E ? E : void 0 }),
                  ],
                }),
              ],
            })
          );
        },
        p = (e) => {
          let t = (0, s.useId)(),
            {
              isActive: r,
              index: a,
              char: c,
              type: u,
              loading: v,
              spinnerState: p,
              error: w,
              borderToSpinnerLayoutId: h,
              fullPaste: f,
              variant: I,
              tone: C = 'primary',
            } = e,
            E = r && !v && 'success' !== p,
            m = {
              '--success-animation-delay': ''.concat(0.032 * a, 's'),
              '--loading-bg-offset':
                'outlined' === I
                  ? ''.concat(2 * a, 'rem')
                  : ''.concat(a <= d.V2 / 2 - 1 ? 2.75 * a : 2.75 * a + 1.25, 'rem'),
            };
          return (0, n.jsxs)(o.E.div, {
            className: l().slot,
            'data-focus': E,
            style: m,
            children: [
              (0, n.jsx)(i.M, {
                initial: !1,
                children: (0, n.jsx)(
                  o.E.span,
                  {
                    initial: {
                      opacity: 0,
                      scale: null !== c && '0' !== c ? 0 : 1,
                      rotateX: 'password' === u || '0' === c ? '0deg' : '-90deg',
                    },
                    animate: { opacity: 1, scale: 1, rotateX: '0deg' },
                    exit: { opacity: 0 },
                    transition: y,
                    style: { originY: 'password' === u ? 0.8 : 1 },
                    className: [l().character, null === c && l().placeholder].join(' '),
                    children: null !== c ? ('password' === u ? '•' : c) : 0,
                  },
                  ''.concat(t, ' + ').concat(c || 'placeholder')
                ),
              }),
              !f &&
                E &&
                (0, n.jsx)(
                  o.E.div,
                  {
                    layout: !0,
                    layoutId: h,
                    className: l().slotBorder,
                    transition: y,
                    children: (0, n.jsx)(o.E.div, {
                      className: l().slotBorderInner,
                      initial: {
                        borderRadius: '26%',
                        boxShadow: w
                          ? 'inset 0 0 0 1px var(--danger)'
                          : 'inset 0 0 0 2px var(--'.concat(C, ')'),
                      },
                      animate: {
                        boxShadow: w
                          ? 'inset 0 0 0 2px var(--danger)'
                          : 'inset 0 0 0 2px var(--'.concat(C, ')'),
                      },
                      transition: y,
                    }),
                  },
                  h
                ),
            ],
          });
        };
    },
    6948: function (e, t, r) {
      'use strict';
      r.d(t, {
        H: function () {
          return s;
        },
        o: function () {
          return a;
        },
      });
      var n = r(75040);
      let a = () =>
          (0, n.jsxs)('svg', {
            width: '80',
            height: '20',
            viewBox: '0 0 80 20',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, n.jsx)('path', {
                d: 'M17.7226 3.17786C17.7224 2.39189 17.41 1.63818 16.8543 1.08242C16.2985 0.526654 15.5448 0.214331 14.7588 0.214111C13.3213 0.199527 12.1338 1.22661 11.8392 2.57619H11.7659C11.6292 1.908 11.2664 1.30734 10.7386 0.875435C10.2107 0.443527 9.55012 0.206769 8.86809 0.205057C8.18607 0.203344 7.5243 0.436781 6.99429 0.866033C6.46428 1.29528 6.09844 1.89411 5.95841 2.56161H5.88508C5.776 2.0349 5.52605 1.54767 5.16187 1.15183C4.79769 0.755985 4.33293 0.466379 3.81712 0.313875C3.30132 0.16137 2.75379 0.151683 2.23291 0.285845C1.71203 0.420007 1.23732 0.692991 0.859361 1.0757C0.481407 1.45841 0.21438 1.9365 0.086741 2.45902C-0.0408982 2.98154 -0.0243658 3.5289 0.134576 4.04276C0.293518 4.55662 0.588913 5.01772 0.989275 5.37692C1.38964 5.73613 1.87996 5.97996 2.40799 6.08244V6.14119C1.73065 6.27329 1.12031 6.63678 0.681518 7.16941C0.242723 7.70205 0.00277639 8.37068 0.00277639 9.06078C0.00277639 9.75088 0.242723 10.4195 0.681518 10.9521C1.12031 11.4848 1.73065 11.8483 2.40799 11.9804V12.0387C1.87943 12.1391 1.3881 12.3813 0.986571 12.7394C0.585038 13.0975 0.2884 13.5581 0.128384 14.0717C-0.0316322 14.5854 -0.049007 15.1329 0.0781178 15.6557C0.205243 16.1785 0.472085 16.6569 0.850105 17.0397C1.22812 17.4226 1.7031 17.6955 2.22424 17.8292C2.74537 17.9629 3.29306 17.9525 3.80872 17.799C4.32438 17.6455 4.78862 17.3547 5.15178 16.9578C5.51494 16.5608 5.76337 16.0726 5.87049 15.5454H5.94383C6.22258 16.8949 7.42549 17.9204 8.84882 17.9204C9.53347 17.9235 10.1979 17.6882 10.7279 17.2548C11.2579 16.8214 11.6205 16.217 11.7534 15.5454H11.8267C12.1055 16.8949 13.3084 17.9204 14.7317 17.9204C15.4694 17.9186 16.18 17.6423 16.7251 17.1453C17.2702 16.6482 17.6107 15.9661 17.6803 15.2317C17.7499 14.4973 17.5436 13.7633 17.1015 13.1727C16.6595 12.5822 16.0135 12.1773 15.2892 12.037V11.9787C15.9666 11.8466 16.5769 11.4831 17.0157 10.9505C17.4545 10.4178 17.6945 9.74921 17.6945 9.05911C17.6945 8.36901 17.4545 7.70038 17.0157 7.16775C16.5769 6.63511 15.9666 6.27162 15.2892 6.13953V6.08078C15.9715 5.96049 16.5896 5.60347 17.0346 5.07252C17.4797 4.54156 17.7233 3.87068 17.7226 3.17786ZM13.6292 13.1391C13.6294 13.2297 13.6117 13.3195 13.5771 13.4032C13.5425 13.4869 13.4917 13.563 13.4276 13.6271C13.3636 13.6912 13.2875 13.7419 13.2037 13.7765C13.12 13.8111 13.0303 13.8289 12.9397 13.8287H4.79758C4.70697 13.8289 4.61723 13.8111 4.53349 13.7765C4.44975 13.7419 4.37367 13.6912 4.3096 13.6271C4.24553 13.563 4.19474 13.4869 4.16015 13.4032C4.12555 13.3195 4.10783 13.2297 4.10799 13.1391V4.99703C4.10783 4.90642 4.12555 4.81668 4.16015 4.73294C4.19474 4.6492 4.24553 4.57312 4.3096 4.50905C4.37367 4.44498 4.44975 4.3942 4.53349 4.3596C4.61723 4.325 4.70697 4.30728 4.79758 4.30744H12.9397C13.0303 4.30728 13.12 4.325 13.2037 4.3596C13.2875 4.3942 13.3636 4.44498 13.4276 4.50905C13.4917 4.57312 13.5425 4.6492 13.5771 4.73294C13.6117 4.81668 13.6294 4.90642 13.6292 4.99703V13.1391Z',
                fill: 'var(--logo-color)',
              }),
              (0, n.jsx)('path', {
                d: 'M26.9358 5.55457H33.4787V3.30957H24.3095V16.1175H26.9358V10.5133H32.452V8.2979H26.9358V5.55457Z',
                fill: 'var(--logo-color)',
              }),
              (0, n.jsx)('path', {
                d: 'M40.9611 7.69622C40.3744 6.81622 39.1861 6.24414 37.9681 6.24414C35.1515 6.24414 33.2444 8.19497 33.2444 11.2612C33.2444 14.3275 35.1515 16.2787 37.9681 16.2933C39.1861 16.2933 40.389 15.6921 40.9611 14.8412V16.1329H43.4111V6.40539H40.9611V7.69622ZM38.3361 14.1962C36.7944 14.1962 35.7244 12.9933 35.7111 11.2621C35.7111 9.50164 36.7969 8.32789 38.3361 8.32789C39.8752 8.32789 40.9611 9.50164 40.9611 11.2621C40.9611 12.9779 39.8752 14.1954 38.3336 14.1954L38.3361 14.1962Z',
                fill: 'var(--logo-color)',
              }),
              (0, n.jsx)('path', {
                d: 'M56.6734 6.24414C55.3817 6.24414 54.2984 6.81622 53.5634 7.98956C53.0217 6.91872 51.9201 6.24414 50.5559 6.24414C49.2059 6.24414 48.3109 6.90414 47.7534 7.75497V6.40539H45.3034V16.1162H47.7534V10.4546C47.7534 9.17831 48.5163 8.38581 49.6901 8.38581C50.8638 8.38581 51.6251 9.29539 51.6251 10.4546V16.1321H54.0751V10.4546C54.0751 9.38331 54.6167 8.38581 56.0117 8.38581C57.3034 8.38581 57.963 9.32497 57.963 10.4546V16.1162H60.4167V9.80914C60.4167 7.60831 58.7126 6.24414 56.6734 6.24414Z',
                fill: 'var(--logo-color)',
              }),
              (0, n.jsx)('path', {
                d: 'M63.3923 5.12931C64.3079 5.12931 65.0502 4.38704 65.0502 3.47139C65.0502 2.55575 64.3079 1.81348 63.3923 1.81348C62.4767 1.81348 61.7344 2.55575 61.7344 3.47139C61.7344 4.38704 62.4767 5.12931 63.3923 5.12931Z',
                fill: 'var(--logo-color)',
              }),
              (0, n.jsx)('path', {
                d: 'M64.6249 6.40527H62.1749V16.1319H64.6249V6.40527Z',
                fill: 'var(--logo-color)',
              }),
              (0, n.jsx)('path', {
                d: 'M68.865 13.0367V3.31006H66.4167V13.3009C66.4167 15.8388 68.0892 16.4842 70.0417 16.2346V14.1221C69.3638 14.1809 68.865 13.9463 68.865 13.0367Z',
                fill: 'var(--logo-color)',
              }),
              (0, n.jsx)('path', {
                d: 'M77.3888 6.40527L74.9388 12.6994L72.5471 6.40777H69.9067L73.7083 15.8824L73.4167 16.6015C73.0792 17.4524 72.4042 17.6869 71.7733 17.6869C71.3333 17.6869 70.7758 17.5549 70.0571 17.2028V19.3594C70.6444 19.62 71.2749 19.7693 71.9167 19.7999C73.8242 19.7999 74.9829 19.0499 75.6433 17.4082L80 6.40527H77.3888Z',
                fill: 'var(--logo-color)',
              }),
            ],
          }),
        s = (e) => {
          let { fill: t } = e;
          return (0, n.jsx)('svg', {
            width: '56',
            height: '56',
            viewBox: '0 0 56 56',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, n.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M49.6491 6.41083C51.1538 7.91539 51.9994 9.95585 52 12.0836C52.0019 13.9592 51.3424 15.7754 50.1374 17.2128C48.9324 18.6502 47.2591 19.6168 45.4117 19.9424V20.1015C47.2456 20.4591 48.8981 21.4431 50.0862 22.8851C51.2742 24.327 51.9239 26.1371 51.9239 28.0054C51.9239 29.8736 51.2742 31.6837 50.0862 33.1257C48.8981 34.5676 47.2456 35.5517 45.4117 35.9093V36.0672C47.3726 36.4469 49.1218 37.543 50.3185 39.1418C51.5153 40.7406 52.0739 42.7276 51.8855 44.7158C51.6971 46.7039 50.7751 48.5507 49.2993 49.8963C47.8235 51.2419 45.8995 51.9899 43.9023 51.9946C40.0486 51.9946 36.7917 49.2186 36.037 45.565H35.8384C35.4786 47.3832 34.4969 49.0195 33.0618 50.1928C31.6268 51.366 29.828 52.0031 27.9743 51.9946C24.1206 51.9946 20.8637 49.2186 20.109 45.565H19.9104C19.6204 46.9923 18.9478 48.314 17.9645 49.3887C16.9812 50.4634 15.7243 51.2505 14.3281 51.6661C12.932 52.0816 11.4491 52.1099 10.0382 51.7478C8.62719 51.3857 7.34118 50.647 6.31769 49.6106C5.2942 48.5741 4.57173 47.279 4.22753 45.8637C3.88334 44.4484 3.93039 42.9662 4.36363 41.5756C4.79687 40.185 5.60002 38.9382 6.68718 37.9688C7.77433 36.9993 9.10459 36.3436 10.5357 36.0717V35.9138C8.70178 35.5562 7.04928 34.5721 5.86124 33.1302C4.6732 31.6882 4.02355 29.8781 4.02355 28.0099C4.02355 26.1416 4.6732 24.3315 5.86124 22.8896C7.04928 21.4476 8.70178 20.4636 10.5357 20.106V19.9469C9.10604 19.6695 7.77848 19.0094 6.6945 18.0369C5.61051 17.0645 4.81073 15.8162 4.3804 14.4251C3.95006 13.0339 3.9053 11.5521 4.25088 10.1376C4.59647 8.72301 5.31944 7.42872 6.34276 6.39264C7.36607 5.35657 8.65136 4.61755 10.0617 4.25434C11.4719 3.89114 12.9544 3.91736 14.3509 4.33023C15.7475 4.74309 17.0058 5.52711 17.9918 6.59873C18.9778 7.67035 19.6546 8.98941 19.9499 10.4153H20.1485C20.5276 8.60825 21.5181 6.9871 22.9531 5.82503C24.3881 4.66296 26.1798 4.031 28.0264 4.03563C29.873 4.04027 31.6616 4.68122 33.0907 5.85048C34.5199 7.01975 35.5022 8.64585 35.8723 10.4548H36.0708C36.8684 6.80119 40.0836 4.02066 43.9756 4.06014C46.1036 4.06074 48.1443 4.90626 49.6491 6.41083ZM18.2485 16.1799C16.7925 16.1799 15.6219 17.3736 15.6438 18.8294C15.6839 21.491 15.7376 25.6261 15.7376 28.6873C15.7376 31.7497 15.6838 35.887 15.6437 38.5485C15.6218 40.0025 16.7937 41.1946 18.2479 41.1946H38.153C39.6072 41.1946 40.7791 40.0025 40.7572 38.5485C40.7171 35.887 40.6633 31.7497 40.6633 28.6873C40.6633 25.6261 40.717 21.491 40.7571 18.8294C40.779 17.3736 39.6082 16.1799 38.1522 16.1799L29 16.1799L18.2485 16.1799Z',
              fill: null != t ? t : 'var(--body-color)',
            }),
          });
        };
    },
    4491: function (e, t, r) {
      'use strict';
      r.d(t, {
        Io: function () {
          return c;
        },
        h_: function () {
          return l;
        },
        nJ: function () {
          return u;
        },
      });
      var n = r(75040),
        a = r(58854),
        s = r(52033);
      let i = '__ROOT_PORTAL__',
        o = '#' + i,
        c = () => (0, n.jsx)('div', { id: i }),
        l = (e) => {
          let { children: t } = e,
            r = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              if (((r.current = document.querySelector(o)), !r.current)) {
                let e = document.createElement('div');
                e.setAttribute('id', i), document.body.appendChild(e), (r.current = e);
              }
            }, []),
            r.current ? (0, s.createPortal)(t, r.current) : null
          );
        },
        u = () => {
          let e = document.querySelector(o);
          if (e) return e;
        };
    },
    14393: function (e, t, r) {
      'use strict';
      r.d(t, {
        K: function () {
          return i;
        },
        S: function () {
          return s;
        },
      });
      var n = r(58854),
        a = r(89);
      let s = (0, n.createContext)({ sdk: (0, a.J)() }),
        i = () => (0, n.useContext)(s);
    },
    25674: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          ToastsProvider: function () {
            return h;
          },
          useToasts: function () {
            return f;
          },
        });
      var n = r(75040),
        a = r(58854),
        s = r(9284),
        i = r(81289),
        o = r(12432),
        c = r(2892),
        l = r.n(c),
        u = r(4491),
        d = r(26934);
      let y = (e) => {
          let { message: t, ctaLabel: r, ctaAction: a, onClose: s, y: o, icon: c } = e,
            u = r && a;
          return (0, n.jsxs)(i.E.div, {
            className: l().toast,
            'data-cta': u ? 'true' : 'false',
            onClick: s,
            initial: { zIndex: 9e3 - o, y: 150, x: '-50%', scale: 1 },
            animate: {
              zIndex: 9e3 - o,
              y: o ? -8 * o : 0,
              scale: o > 0 ? 1 - 0.075 * o : 1,
              opacity: o > 2 ? 0 : 1,
            },
            exit: { zIndex: 9e3 - o, y: 150, transition: { ease: 'easeIn' } },
            transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.4 },
            children: [
              c,
              (0, n.jsx)('div', {
                className: l().content,
                children: (0, n.jsx)('p', { className: l().message, children: t }),
              }),
              u &&
                (0, n.jsx)('div', {
                  className: l().cta,
                  children: (0, n.jsx)('button', { onClick: a, children: r }),
                }),
            ],
          });
        },
        v = (e) => {
          let { toasts: t, removeToast: r, centered: s } = e,
            i = a.useRef(null),
            c = a.useRef(new Map()),
            [v, p] = a.useState(new Set());
          return (
            (0, a.useEffect)(() => {
              if (t.length > 3) {
                let e = t.slice(0, t.length - 3),
                  n = setTimeout(() => {
                    e.forEach((e) => {
                      p((t) => new Set(t).add(e.key)), setTimeout(() => r(e.key), 400);
                    });
                  }, 250);
                return () => clearTimeout(n);
              }
            }, [t, r]),
            (0, a.useEffect)(() => {
              t.forEach((e, t) => {
                if (!c.current.has(e.key) && !v.has(e.key)) {
                  let n = setTimeout(
                    () => {
                      p((t) => new Set(t).add(e.key)),
                        setTimeout(() => r(e.key), 400),
                        c.current.delete(e.key);
                    },
                    2e3 + 100 * t
                  );
                  c.current.set(e.key, n);
                }
              });
              let e = new Set(t.map((e) => e.key));
              return (
                c.current.forEach((t, r) => {
                  (!e.has(r) || v.has(r)) && (clearTimeout(t), c.current.delete(r));
                }),
                () => {
                  c.current.forEach((e) => clearTimeout(e)), c.current.clear();
                }
              );
            }, [t, r, v]),
            (0, a.useEffect)(() => {
              let e = () => {
                  c.current.forEach((e) => clearTimeout(e)), c.current.clear();
                },
                n = () => {
                  t.forEach((e, t) => {
                    if (!c.current.has(e.key) && !v.has(e.key)) {
                      let n = setTimeout(
                        () => {
                          p((t) => new Set(t).add(e.key)),
                            setTimeout(() => r(e.key), 400),
                            c.current.delete(e.key);
                        },
                        2e3 + 100 * t
                      );
                      c.current.set(e.key, n);
                    }
                  });
                },
                a = i.current;
              return (
                a && (a.addEventListener('mouseenter', e), a.addEventListener('mouseleave', n)),
                () => {
                  a &&
                    (a.removeEventListener('mouseenter', e),
                    a.removeEventListener('mouseleave', n));
                }
              );
            }, [t, r, v]),
            (0, a.useEffect)(() => {
              let e = () => {
                  t.forEach((e, t) => {
                    if (!c.current.has(e.key) && !v.has(e.key)) {
                      let n = setTimeout(
                        () => {
                          p((t) => new Set(t).add(e.key)),
                            setTimeout(() => r(e.key), 400),
                            c.current.delete(e.key);
                        },
                        2e3 + 100 * t
                      );
                      c.current.set(e.key, n);
                    }
                  });
                },
                n = () => {
                  c.current.forEach((e) => clearTimeout(e)), c.current.clear();
                };
              return (
                window.addEventListener('focus', e),
                window.addEventListener('blur', n),
                () => {
                  window.removeEventListener('focus', e), window.removeEventListener('blur', n);
                }
              );
            }, [t, r, v]),
            (0, n.jsx)(u.h_, {
              children: (0, n.jsx)('div', {
                className: l().container,
                ref: i,
                'data-centered': s,
                children: (0, n.jsx)(o.M, {
                  children: t
                    .slice(0)
                    .reverse()
                    .map((e, t) =>
                      (0, a.createElement)(y, {
                        ...e,
                        key: e.key,
                        y: t,
                        icon:
                          'success' === e.type
                            ? (0, n.jsx)(d.J, { name: 'toastCheck' })
                            : 'error' === e.type
                              ? (0, n.jsx)(d.J, { name: 'toastError' })
                              : void 0,
                        onClose: () => {
                          p((t) => new Set(t).add(e.key)), r(e.key);
                        },
                      })
                    ),
                }),
              }),
            })
          );
        };
      var p = r(89);
      let w = a.createContext({ addToast: (0, p.J)(), setCentered: (0, p.J)() }),
        h = (e) => {
          let { children: t } = e,
            [r, i] = a.useState([]),
            [o, c] = a.useState(!1);
          return (0, n.jsxs)(w.Provider, {
            value: {
              addToast: (e) => {
                let { ...t } = e;
                i((e) => [...e, { key: (0, s.Vj)(), ...t }]);
              },
              setCentered: c,
            },
            children: [
              t,
              (0, n.jsx)(v, {
                toasts: r,
                removeToast: (e) => {
                  i((t) => t.filter((t) => t.key !== e));
                },
                centered: o,
              }),
            ],
          });
        },
        f = () => a.useContext(w);
    },
    99166: function (e, t, r) {
      'use strict';
      r.d(t, {
        x: function () {
          return l;
        },
      });
      var n = r(35410),
        a = r(91542),
        s = r(39398);
      let i = (e) => {
          let t = e.data.map((e) => o(e));
          return {
            [s.t.LOW]: t.find((e) => 'slow' === e.speed),
            [s.t.MEDIUM]: t.find((e) => 'normal' === e.speed),
            [s.t.HIGH]: t.find((e) => 'fast' === e.speed),
          };
        },
        o = (e) => ({
          baseFee: (0, a.L)(e.baseFee),
          eta: e.eta,
          maxFeePerGas: (0, a.L)(e.maxFeePerGas),
          maxPriorityFeePerGas: (0, a.L)(e.maxPriorityFeePerGas),
          speed: e.speed,
        }),
        c = ''.concat((0, n.getApiHttpUrl)(), '/proxy/family/v3'),
        l = async (e, t) => {
          let r = ''.concat(c, '/').concat(t.value, '/gas-prices'),
            n = await fetch(r, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: e.jwtInfo.accessToken.value,
                'x-device-id': e.deviceId.value,
              },
            }).then((e) => e.json());
          if ('error' in n) throw Error(n.error);
          return i(n);
        };
    },
    39398: function (e, t, r) {
      'use strict';
      var n, a;
      r.d(t, {
        t: function () {
          return n;
        },
      }),
        ((a = n || (n = {})).LOW = 'low'),
        (a.MEDIUM = 'medium'),
        (a.HIGH = 'high');
    },
    48849: function (e, t, r) {
      'use strict';
      r.d(t, {
        p: function () {
          return f;
        },
      });
      var n = r(9284),
        a = r(17665),
        s = r(91782),
        i = r(42716),
        o = r(81288),
        c = r(5290),
        l = r(52420),
        u = r(88376),
        d = r(32503),
        y = r(99166),
        v = r(39398),
        p = r(35410);
      let w = ''.concat((0, p.getApiHttpUrl)(), '/proxy/family/v3'),
        h = async (e, t) => {
          var r, n, a;
          let s = ''.concat(w, '/wallets/').concat(t.chainId.value, '/tx/estimate'),
            i = await fetch(s, {
              method: 'POST',
              body: JSON.stringify({
                from: t.from.toHexString(),
                to: null === (r = t.to) || void 0 === r ? void 0 : r.toHexString(),
                data: null === (n = t.data) || void 0 === n ? void 0 : n.toHexString(),
                value: null === (a = t.value) || void 0 === a ? void 0 : a.toHexString(),
              }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: e.jwtInfo.accessToken.value,
                'x-device-id': e.deviceId.value,
              },
            }).then((e) => e.json());
          if ('error' in i) throw Error(i.error);
          return BigInt(i.gasUsed);
        };
      class f {
        async getViemClient(e) {
          let t = this.CLIENT_CACHE[e.value];
          if (t) return t;
          let r = await (0, d.xz)(e);
          (0, n.kG)(r, 'Chain not found');
          let a = (0, s.v)({ chain: r, transport: (0, u.hC)(this.sdk) }).extend((0, l.j)());
          return (this.CLIENT_CACHE[e.value] = a), a;
        }
        async send(e) {
          let {
            from: t,
            network: r,
            data: a,
            to: s,
            value: i,
            nonce: c,
            maxPriorityFeePerGas: l,
            maxFeePerGas: u,
          } = e;
          try {
            let e = await this.getViemClient(r.chainId),
              d = await (0, o.T)(e, {
                nonce: c,
                data: null == a ? void 0 : a.toHexString(),
                account: t,
                to: null == s ? void 0 : s.toHexString(),
                value: i ? BigInt(i.toHexString()) : void 0,
                maxFeePerGas: u ? BigInt(u.toString()) : void 0,
                maxPriorityFeePerGas: l ? BigInt(l.toString()) : void 0,
              });
            return (0, n.Vp)(d);
          } catch (e) {
            return (0, n.BD)(e), (0, n.Rn)(e);
          }
        }
        async sendRaw(e) {
          let { serializedTransaction: t, network: r } = e;
          try {
            let e = await this.getViemClient(r.chainId),
              a = await (0, c.p)(e, { serializedTransaction: t });
            return (0, n.Vp)(a);
          } catch (e) {
            return (0, n.BD)(e), (0, n.Rn)(e);
          }
        }
        async estimate(e, t) {
          if (e.network.type === a.t.UNKNOWN) return this.estimateGasForUnknownNetwork(e);
          (0, n.kG)(t, 'Gas cost not provided');
          let [r, s, i] = await Promise.all([
              this.getSuggestedGasPrice(e.network.chain),
              this.getGasLimit(e),
              this.getGasBalance(e),
            ]),
            o = {
              [v.t.LOW]: this.formatGasCost(r.low, e, s, i),
              [v.t.MEDIUM]: this.formatGasCost(r.medium, e, s, i),
              [v.t.HIGH]: this.formatGasCost(r.high, e, s, i),
            };
          return { networkType: a.t.WELL_KNOWN, gasLimit: s, cost: o };
        }
        async estimateGasForUnknownNetwork(e) {
          let t = await this.getGasLimit(e);
          return { networkType: a.t.UNKNOWN, gasLimit: t };
        }
        async getSuggestedGasPrice(e) {
          let t = await this.sdk.session.requireCurrent(),
            r = u.dE[e],
            n = new i.a_(r.id);
          return (0, y.x)(t, n);
        }
        async getGasLimit(e) {
          return h(await this.sdk.session.requireCurrent(), {
            chainId: e.network.chainId,
            from: new i.y1(e.from.address.toString()),
            to: e.to,
            value: e.value,
            data: e.data,
          });
        }
        async getGasBalance(e) {
          return (await this.getViemClient(e.network.chainId)).getBalance({
            address: e.from.address,
          });
        }
        formatGasCost(e, t, r, n) {
          var a, s;
          let i = e.maxFeePerGas * ((110n * r) / 100n),
            o =
              n >=
              i +
                (null !== (s = null === (a = t.value) || void 0 === a ? void 0 : a.toBigInt()) &&
                void 0 !== s
                  ? s
                  : 0n);
          return {
            maxFeePerGas: e.maxFeePerGas,
            maxPriorityFeePerGas: e.maxPriorityFeePerGas,
            feeNativeToken: i,
            averageTime: e.eta,
            hasSufficientBalance: o,
          };
        }
        static initialize(e) {
          return new f(e);
        }
        constructor(e) {
          (this.sdk = e), (this.CLIENT_CACHE = {});
        }
      }
    },
    5127: function (e, t, r) {
      'use strict';
      r.d(t, {
        OS: function () {
          return a;
        },
        Rp: function () {
          return c;
        },
        V2: function () {
          return s;
        },
        bf: function () {
          return o;
        },
        t9: function () {
          return n;
        },
        x7: function () {
          return i;
        },
      });
      let n = 32,
        a = 39,
        s = 6,
        i = '000000',
        o = 6,
        c = 19;
    },
    17620: function (e, t, r) {
      'use strict';
      var n, a;
      r.d(t, {
        P: function () {
          return n;
        },
      }),
        ((a = n || (n = {})).ERC721 = 'ERC721'),
        (a.ERC1155 = 'ERC1155'),
        (a.UNKNOWN = 'UNKNOWN');
    },
    32503: function (e, t, r) {
      'use strict';
      r.d(t, {
        ZN: function () {
          return o;
        },
        jF: function () {
          return i;
        },
        xz: function () {
          return s;
        },
      });
      var n = r(88376),
        a = r(11229);
      async function s(e) {
        let { default: t, ...n } = await Promise.all([r.e(2192), r.e(1807)]).then(r.bind(r, 11807));
        return Object.values([a.g, a.J].concat(Object.values(n))).find((t) => t.id === e.value);
      }
      async function i(e) {
        let { default: t, ...n } = await Promise.all([r.e(2192), r.e(1807)]).then(r.bind(r, 11807));
        return Object.values([a.g, a.J].concat(Object.values(n))).find(
          (t) =>
            t.name === e.name &&
            t.id === e.chainId.value &&
            t.nativeCurrency.name === e.nativeCurrency.name &&
            t.nativeCurrency.symbol === e.nativeCurrency.symbol &&
            t.nativeCurrency.decimals === e.nativeCurrency.decimals
        );
      }
      let o = (e) => (e.supportedChain ? n.Mo[e.supportedChain] : n.Mo[n.AJ[e.chainId]]);
    },
    89: function (e, t, r) {
      'use strict';
      r.d(t, {
        J: function () {
          return n;
        },
      });
      let n = () =>
        new Proxy(
          {},
          {
            get: function (e, t) {
              throw Error(
                'Attempted to access property '.concat(String(t), ' on context default value')
              );
            },
          }
        );
    },
    53751: function (e, t, r) {
      'use strict';
      r.d(t, {
        F: function () {
          return s;
        },
        Z: function () {
          return a;
        },
      });
      let n = (e) => ['‬', '‭'].reduce((e, t) => e.replace(t, ''), e),
        a = (e) => (e.includes('@') ? e.trim() : n(e).replace(RegExp('[^0-9\\+]', 'g'), '').trim()),
        s = (e) => JSON.stringify(e, (e, t) => ('bigint' == typeof t ? t.toString() : t), 2);
    },
    94698: function (e, t, r) {
      'use strict';
      r.d(t, {
        _: function () {
          return s;
        },
        c: function () {
          return a;
        },
      });
      var n = r(27520);
      let a = () => ({ status: n.z.VALIDATION_CODE }),
        s = () => ({ status: n.z.TWO_FACTOR });
    },
    77279: function (e, t, r) {
      'use strict';
      r.d(t, {
        q: function () {
          return a;
        },
        z: function () {
          return u;
        },
      });
      var n,
        a,
        s = r(42716),
        i = r(9284),
        o = r(97137),
        c = r(17163),
        l = r(92216);
      ((n = a || (a = {})).SEND = 'SEND'), (n.LOCKED = 'LOCKED');
      let u = async (e) => {
        let t = await l.L.mutation(o.Yv, { request: (0, s.au)(e) });
        (0, i.kG)(t.data, 'Failed to approve signing request', t.error);
        let r = t.data.sendSigningValidationCode;
        switch (r.__typename) {
          case 'SigningValidationCodeSend':
            return { status: a.SEND };
          case 'UserLocked':
            return (0, c.r)(a.LOCKED, r.until);
          default:
            throw Error('Send signing validation code query broken');
        }
      };
    },
    31421: function (e, t, r) {
      'use strict';
      r.d(t, {
        L: function () {
          return a;
        },
        g: function () {
          return l;
        },
      });
      var n,
        a,
        s = r(42716),
        i = r(9284),
        o = r(97137),
        c = r(92216);
      ((n = a || (a = {})).SUCCESS = 'SUCCESS'), (n.PENDING = 'PENDING');
      let l = async (e) => {
        let t = await c.L.mutation(o.bE, { request: (0, s.au)({ appOrigin: e }) });
        return ((0, i.kG)(t.data, 'No data returned from processConnectionApi', t.error),
        'ProcessConnectionPending' === t.data.processConnection.__typename)
          ? { status: a.PENDING }
          : { status: a.SUCCESS, approvalStatus: t.data.processConnection.approvalStatus };
      };
    },
    19583: function (e, t, r) {
      'use strict';
      var n, a;
      r.d(t, {
        D: function () {
          return n;
        },
        E: function () {
          return s;
        },
      }),
        ((a = n || (n = {})).SUCCESS = 'SUCCESS'),
        (a.INVALID_USERNAME = 'INVALID_USERNAME'),
        (a.INVALID_PASSWORD = 'INVALID_PASSWORD'),
        (a.INVALID_PASSKEY = 'INVALID_PASSKEY'),
        (a.PASSWORD_DO_NOT_MATCH = 'PASSWORD_DO_NOT_MATCH'),
        (a.LOGIN_CREDENTIALS_REQUIRED = 'LOGIN_CREDENTIALS_REQUIRED'),
        (a.REGISTER_CREDENTIALS_REQUIRED = 'REGISTER_CREDENTIALS_REQUIRED'),
        (a.VALIDATION_CODE_INCORRECT = 'VALIDATION_CODE_INCORRECT'),
        (a.VALIDATION_CODE_REQUIRED = 'VALIDATION_CODE_REQUIRED'),
        (a.TWO_FACTOR_CODE_INCORRECT = 'TWO_FACTOR_CODE_INCORRECT'),
        (a.TWO_FACTOR_CODE_REQUIRED = 'TWO_FACTOR_CODE_REQUIRED'),
        (a.LOCKED = 'LOCKED');
      let s = (e, t, r) => ({
        status: n.SUCCESS,
        deviceRecoveryKey: r.toPEMString(),
        deviceId: t.value,
        account: e,
      });
    },
    71842: function (e, t, r) {
      'use strict';
      r.d(t, {
        U: function () {
          return E;
        },
        $: function () {
          return a;
        },
      });
      var n,
        a,
        s = r(42716),
        i = r(9284),
        o = r(20515),
        c = r(97137),
        l = r(92216);
      let u = async (e) => {
        let t = await l.L.query(c.bW, { request: (0, s.au)({ refreshToken: e.value }) });
        (0, i.kG)(t.data, 'Failed to retrieve sessionKey', t.error);
        let r = t.data.retrieveSessionKey;
        return { sessionKey: null === r.sessionKey ? null : new s.jZ(r.sessionKey) };
      };
      var d = r(3703);
      let y = async (e) => {
          let t = await l.L.mutation(c.FR, { request: (0, s.au)({ refreshToken: e.value }) });
          (0, i.kG)(t.data, 'Refresh JWT API query failed', t.error);
          let r = t.data.refresh;
          return {
            jwtInfo: {
              accessToken: new s.qR(r.jwtInfo.accessToken),
              refreshToken: new s.qR(r.jwtInfo.refreshToken),
              idToken: new s.qR(r.jwtInfo.idToken),
            },
            sessionKey: new s.jZ(r.sessionKey),
          };
        },
        v = () => ({
          subscribe: (e) => {
            let t = l.L.subscription(c.kG, {}).subscribe((t) => {
              (0, i.kG)(t.data, 'Session state change subscription returned no data', t.error),
                e(t.data.sessionStateChange);
            });
            return {
              unsubscribe: () => {
                t.unsubscribe();
              },
            };
          },
        });
      var p = r(56964);
      class w extends Error {
        constructor() {
          super('The session has expired');
        }
      }
      let h = (0, i.z7)(1);
      class f {
        clear() {
          var e;
          this.clearTimeouts(),
            null === (e = this._sessionStateChangeSubscription) || void 0 === e || e.unsubscribe(),
            (o.k.jwtToken = void 0);
        }
        update(e) {
          (o.k.jwtToken = e.accessToken), (this.jwtInfo = e), this.watchJwtToken();
        }
        onTokenExpire(e) {
          return (
            this.tokenExpireListeners.push(e),
            () => {
              this.tokenExpireListeners = this.tokenExpireListeners.filter((t) => t !== e);
            }
          );
        }
        onTokenRefresh(e) {
          return (
            this.tokenRefreshListeners.push(e),
            () => {
              this.tokenRefreshListeners = this.tokenRefreshListeners.filter((t) => t !== e);
            }
          );
        }
        emitTokenExpired() {
          (o.k.jwtToken = void 0), this.tokenExpireListeners.forEach((e) => e());
        }
        emitTokenRefresh(e, t) {
          this.tokenRefreshListeners.forEach((r) => r(e, t));
        }
        watchSessionStateChange() {
          this._sessionStateChangeSubscription = v().subscribe((e) => {
            switch (e.reason) {
              case c.pT.DeviceRevoked:
              case c.pT.ConnectionRevoked:
                this.emitTokenExpired();
                break;
              default:
                (0, i.vE)(
                  e.reason,
                  'Unknown session state change reason: '.concat(String(e.reason))
                );
            }
          });
        }
        watchJwtToken() {
          this.clearTimeouts();
          let e = (0, p.d)(this.jwtInfo.accessToken),
            t = (0, i.lg)(0, 60),
            r = e.exp - h - t - (0, i.CK)();
          this._extendJwtTokenTimeout = (0, i.WQ)(
            async () => {
              await this.tryExtendJwtTokenIfBeenActive();
            },
            (0, i._X)(r)
          );
        }
        async tryExtendJwtTokenIfBeenActive() {
          if ((0, p.d)(this.jwtInfo.refreshToken).exp - 10 <= (0, i.CK)()) {
            this.emitTokenExpired();
            return;
          }
          let e = await y(this.jwtInfo.refreshToken);
          (this.jwtInfo = e.jwtInfo),
            (o.k.jwtToken = e.jwtInfo.accessToken),
            this.emitTokenRefresh(e.jwtInfo, e.sessionKey),
            this.watchJwtToken();
        }
        clearTimeouts() {
          this._extendJwtTokenTimeout && (0, i.P8)(this._extendJwtTokenTimeout);
        }
        static async fromJwtInfo(e) {
          if ((0, p.d)(e.refreshToken).exp - 10 <= (0, i.CK)())
            return Promise.resolve((0, i.Rn)(new w()));
          if ((0, p.d)(e.accessToken).exp - h <= (0, i.CK)()) {
            let t = await y(e.refreshToken);
            return Promise.resolve((0, i.Vp)({ refreshDetails: t, service: new f(t.jwtInfo) }));
          }
          return (0, i.Vp)({ refreshDetails: null, service: new f(e) });
        }
        constructor(e) {
          (this.tokenExpireListeners = []),
            (this.tokenRefreshListeners = []),
            (this.jwtInfo = e),
            (o.k.jwtToken = e.accessToken),
            this.watchJwtToken(),
            this.watchSessionStateChange();
        }
      }
      var I = r(41417),
        C = r(82436);
      ((n = a || (a = {})).AUTHENTICATED = 'AUTHENTICATED'),
        (n.NOT_AUTHENTICATED = 'NOT_AUTHENTICATED');
      class E extends d.B {
        async serialise() {
          if (void 0 === o.k.deviceId) return null;
          let e = await this.jwtStorageService.get();
          if (null === e) return null;
          let t = await this.encryptedAccountInfoStorageService.get(),
            r = this.encryptedAccountInfoStorageService.getMasterKeyConfig();
          return null === t
            ? null
            : {
                deviceId: o.k.deviceId,
                identity: t.identity,
                encryptedAccount: t.encryptedAccount,
                accountMasterKey: t.accountMasterKey,
                jwtInfo: e,
                serverSessionKey: r.serverSessionKey,
                clientSessionKey: r.clientSessionKey,
                activeWallet: t.activeWallet,
              };
        }
        async createFromStorage(e) {
          let { deviceId: t, clientSessionKey: r } = e;
          o.k.deviceId = t;
          let n = await this.jwtStorageService.get();
          if (null === n) return this.returnUnauthenticatedResult();
          let { sessionKey: a } = await u(n.refreshToken);
          if (null === a) return this.returnUnauthenticatedResult();
          let c = this.createEncryptedAccountInfoStorageService(r, a),
            l = await c.get();
          if (null === l) return this.returnUnauthenticatedResult();
          let d = new s.ld((0, I.y)(n.idToken).sub);
          (0, i.kG)(
            l.id.equals(d),
            'Account id from the id token and the wallet info should match'
          );
          let y = await this.createPocketAccount({
            id: l.id,
            identity: l.identity,
            accountMasterKey: l.accountMasterKey,
            encryptedAccount: l.encryptedAccount,
            activeWallet: l.activeWallet,
          });
          if ((await this.createSessionRefreshService(n)).isFailure())
            return this.returnUnauthenticatedResult();
          let v = this.createSessionAuthenticatedResult(y, n);
          return this.emit(v), v;
        }
        async createFromData(e) {
          let {
              clientSessionKey: t,
              deviceId: r,
              accountMasterKey: n,
              encryptedAccount: a,
              identity: c,
              jwtInfo: l,
              activeWallet: u,
              serverSessionKey: d,
            } = e,
            { persist: y } =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { persist: !0 };
          o.k.deviceId = r;
          let v = this.createEncryptedAccountInfoStorageService(t, d),
            p = {
              id: new s.ld((0, I.y)(l.idToken).sub),
              identity: c,
              accountMasterKey: n,
              encryptedAccount: a,
              activeWallet: u,
            };
          y && (await v.set(p), await this.jwtStorageService.set(l));
          let w = await this.createPocketAccount(p),
            h = await this.createSessionRefreshService(l);
          (0, i.kG)(h.isSuccess(), 'JWT should be still not expired');
          let f = this.createSessionAuthenticatedResult(w, l);
          return this.emit(f), f;
        }
        clear() {
          return this.expireSession();
        }
        onChange(e) {
          return (
            this.onChangeListeners.push(e),
            () => {
              this.onChangeListeners = this.onChangeListeners.filter((t) => t !== e);
            }
          );
        }
        async getCurrent() {
          let e = await this.jwtStorageService.get(),
            t = this.account;
          return t && e
            ? Promise.resolve(this.createSessionAuthenticatedResult(t, e))
            : Promise.resolve({ status: a.NOT_AUTHENTICATED });
        }
        async requireCurrent() {
          let e = await this.getCurrent();
          return (0, i.kG)(e.status === a.AUTHENTICATED, 'Session should be authenticated'), e;
        }
        async changeAccount(e) {
          (0, i.kG)(
            this.encryptedAccountInfoStorageService,
            'Encrypted wallet info storage service should be initialized'
          ),
            (0, i.kG)(this.account, 'Wallet service should be initialized'),
            (this.account = e);
          let t = this.account.serialize();
          await this.encryptedAccountInfoStorageService.set(t);
          let r = await this.jwtStorageService.get();
          (0, i.kG)(r, 'JWT should be present');
          let n = this.createSessionAuthenticatedResult(e, r);
          this.emit(n);
        }
        async refresh(e) {
          if (this.sessionRefreshService) {
            if (null === e) {
              this.clear();
              return;
            }
            (0, i.kG)(
              this.sessionRefreshService,
              'Session refresh service should be initialized at this point'
            ),
              (0, i.kG)(
                this.encryptedAccountInfoStorageService,
                'Encrypted wallet info storage service should be initialized'
              ),
              this.sessionRefreshService.update(e.jwtInfo),
              this.encryptedAccountInfoStorageService.update({
                clientSessionKey: e.clientSessionKey,
                serverSessionKey: e.serverSessionKey,
              });
            return;
          }
          null !== e &&
            (await this.createFromStorage({
              deviceId: e.deviceId,
              clientSessionKey: e.clientSessionKey,
            }));
        }
        createSessionAuthenticatedResult(e, t) {
          return {
            account: e,
            jwtInfo: t,
            status: a.AUTHENTICATED,
            deviceId: (0, i.vJ)(o.k.deviceId, 'Device ID should be set'),
          };
        }
        async updateSession(e, t) {
          let r = await this.requireCurrent();
          (0, i.kG)(
            this.encryptedAccountInfoStorageService,
            'Encrypted account info storage service should be initialized'
          ),
            await this.encryptedAccountInfoStorageService.reEncrypt({ serverSessionKey: t }),
            await this.jwtStorageService.set(e);
          let n = this.createSessionAuthenticatedResult(r.account, e);
          this.emit(n);
        }
        expireSession() {
          return (
            (0, i.kG)(this.sessionRefreshService, 'Session should be initialized'),
            this.unsubscriptionListeners.forEach((e) => e()),
            this.sessionRefreshService.clear(),
            (this.sessionRefreshService = null),
            (o.k.deviceId = void 0),
            (this.account = null),
            this.returnUnauthenticatedResult()
          );
        }
        async createPocketAccount(e) {
          let t = await C.d.init(e);
          return (this.account = t), t;
        }
        async createSessionRefreshService(e) {
          let t = await f.fromJwtInfo(e);
          if (t.isFailure()) return await this.jwtStorageService.clear(), (0, i.Rn)(t.error);
          let { service: r, refreshDetails: n } = t.value;
          return (
            (this.sessionRefreshService = r),
            n && (await this.updateSession(n.jwtInfo, n.sessionKey)),
            this.unsubscriptionListeners.push(
              this.sessionRefreshService.onTokenRefresh(async (e, t) => {
                await this.updateSession(e, t);
              }),
              this.sessionRefreshService.onTokenExpire(async () => {
                await this.expireSession();
              })
            ),
            (0, i.Vp)()
          );
        }
        createEncryptedAccountInfoStorageService(e, t) {
          return (
            this.encryptedAccountInfoStorageService.initialise({
              clientSessionKey: e,
              serverSessionKey: t,
            }),
            this.encryptedAccountInfoStorageService
          );
        }
        async returnUnauthenticatedResult() {
          let e = { status: a.NOT_AUTHENTICATED };
          return (
            this.emit(e),
            await this.jwtStorageService.clear(),
            await this.encryptedAccountInfoStorageService.clear(),
            e
          );
        }
        emit(e) {
          this.onChangeListeners.forEach((t) => t(e));
        }
        constructor(e, t) {
          super(),
            (this.account = null),
            (this.onChangeListeners = []),
            (this.unsubscriptionListeners = []),
            (this.sessionRefreshService = null),
            (this.jwtStorageService = e),
            (this.encryptedAccountInfoStorageService = t);
        }
      }
    },
    97927: function (e, t, r) {
      'use strict';
      r.d(t, {
        Nn: function () {
          return o;
        },
        rw: function () {
          return c;
        },
        mz: function () {
          return k;
        },
      });
      var n,
        a,
        s,
        i,
        o,
        c,
        l = r(27520),
        u = r(42716),
        d = r(9284),
        y = r(97137),
        v = r(92216);
      async function p(e) {
        let { tx: t, fromAddress: r, text: n, typedData: a } = e,
          s = await v.L.query(y.vs, {
            request: (0, u.au)({ fromAddress: r, tx: t, text: n, typedData: a }),
          });
        return (
          (0, d.kG)(s.data, 'Failed to process signing request', s.error),
          s.data.signingRequiresUserApproval
        );
      }
      class w extends Error {
        constructor(e, t) {
          super('Processing transaction failed: '.concat(String(e), ', ').concat(t)),
            (this.reason = e),
            (this.humanReadableMessage = t);
        }
      }
      async function h(e) {
        let { fromUsername: t, fromAddress: r, tx: n, typedData: a, text: s } = e,
          i = await v.L.mutation(y.d1, {
            request: (0, u.au)({ fromUsername: t, fromAddress: r, tx: n, typedData: a, text: s }),
          });
        (0, d.kG)(i.data, 'Failed to process signing request', i.error);
        let o = i.data.processSigningRequest;
        switch (o.__typename) {
          case 'TxProcessResponse':
          case 'TypedDataProcessResponse':
            return (0, d.Vp)({ id: new u.L5(o.id), approvalStatus: o.approvalStatus });
          case 'TxFailureResponse':
            return (0, d.Rn)(new w(o.reason, o.humanReadableMessage));
          case 'PersonalSignProcessResponse':
            return (0, d.Vp)({ id: new u.L5(o.id), approvalStatus: o.personalSignApprovalStatus });
          default:
            (0, d.vE)(o, 'Unsupported state change recieved');
        }
      }
      var f = r(94698),
        I = r(17163);
      let C = () => ({ status: l.z.COMPLETE }),
        E = async (e) => {
          let t = await v.L.mutation(y.Gn, { request: (0, u.au)(e) });
          (0, d.kG)(t.data, 'Failed to approve signing request', t.error);
          let r = t.data.approveSigningRequest;
          switch (r.__typename) {
            case 'SigningRequestApproved':
              return C();
            case 'InvalidCode':
              return (0, f.c)();
            case 'UserLocked':
              return (0, I.m)(r.until);
            default:
              throw Error('Signing tx approval query broken');
          }
        };
      var m = r(77279);
      let A = async (e) => {
        await v.L.mutation(y.dU, { request: (0, u.au)(e) });
      };
      var T = r(54866),
        S = r(3703);
      ((n = i || (i = {})).SIGNING_TX = 'SIGNING_TX'),
        (n.SIGNING_TX_APPROVED = 'SIGNING_TX_APPROVED'),
        (n.SIGNING_TYPED_DATA = 'SIGNING_TYPED_DATA'),
        (n.SIGNING_TYPED_DATA_APPROVED = 'SIGNING_TYPED_DATA_APPROVED'),
        (n.SIGNING_PERSONAL = 'SIGNING_PERSONAL'),
        ((a = o || (o = {})).VALIDATION_CODE_REQUIRED = 'VALIDATION_CODE_REQUIRED'),
        (a.REJECTED = 'REJECTED'),
        (a.AUTO_APPROVED = 'AUTO_APPROVED'),
        (a.USER_APPROVAL_REQUIRED = 'USER_APPROVAL_REQUIRED'),
        ((s = c || (c = {})).VALIDATION_CODE_INCORRECT = 'VALIDATION_CODE_INCORRECT'),
        (s.APPROVED = 'AUTO_APPROVED'),
        (s.LOCKED = 'LOCKED');
      class k extends S.B {
        async signingTxRequiresUserApproval(e) {
          let { account: t } = await this.sessionSDK.requireCurrent(),
            r = {
              from: t.activeWallet.ethereumAddress,
              to: e.to ? new u.y1(e.to) : void 0,
              data: e.data ? new u.rY(e.data) : void 0,
              value: e.value ? new u.kr(e.value) : void 0,
              chainId: new u.a_(e.chainId),
            };
          return p({ fromAddress: r.from, tx: r });
        }
        async signingPersonalSignRequiresUserApproval(e) {
          let { account: t } = await this.sessionSDK.requireCurrent();
          return p({ fromAddress: t.activeWallet.ethereumAddress, text: new u.MJ(e) });
        }
        async signingTypedDataRequiresUserApproval(e) {
          let { account: t } = await this.sessionSDK.requireCurrent();
          return p({ fromAddress: t.activeWallet.ethereumAddress, typedData: JSON.stringify(e) });
        }
        async processSigningTypedDataRequest(e) {
          let { account: t } = await this.sessionSDK.requireCurrent(),
            r = t.identity,
            n = t.activeWallet.ethereumAddress;
          (0, d.kG)(r instanceof u.Ru, 'Not a Username identity');
          let a = await h({ fromUsername: r, fromAddress: n, typedData: JSON.stringify(e) });
          (0, d.kG)(a.isSuccess(), "Processing typed data can't fail");
          let s = a.value,
            c = { id: s.id.value };
          switch (s.approvalStatus) {
            case y.Kb.AutoApproved:
              return { txType: i.SIGNING_TYPED_DATA, status: o.AUTO_APPROVED, ...c };
            case y.Kb.UserApprovalRequired:
              return { txType: i.SIGNING_TYPED_DATA, status: o.USER_APPROVAL_REQUIRED, ...c };
            case y.Kb.ValidationCodeRequired:
              return {
                txType: i.SIGNING_TYPED_DATA,
                status: o.VALIDATION_CODE_REQUIRED,
                type: r.isEmail() ? T.P.EMAIL_OTP : T.P.SMS_OTP,
                ...c,
              };
            case y.Kb.Rejected:
              return { txType: i.SIGNING_TYPED_DATA, status: o.REJECTED, ...c };
            default:
              (0, d.vE)(s.approvalStatus, 'Unexpected tx approval status');
          }
        }
        async processSigningTxRequest(e) {
          let { account: t } = await this.sessionSDK.requireCurrent(),
            r = t.identity,
            n = t.activeWallet.ethereumAddress;
          (0, d.kG)(r instanceof u.Ru, 'Not a Username identity');
          let a = {
              from: n,
              to: e.to ? new u.y1(e.to) : void 0,
              data: e.data ? new u.rY(e.data) : void 0,
              value: e.value ? new u.kr(e.value) : void 0,
              chainId: new u.a_(e.chainId),
            },
            s = await h({ fromUsername: r, fromAddress: n, tx: a });
          if (s.isFailure()) return s;
          let c = s.value,
            l = { id: c.id.value };
          switch (c.approvalStatus) {
            case y.Kb.UserApprovalRequired:
              return (0, d.Vp)({ txType: i.SIGNING_TX, status: o.USER_APPROVAL_REQUIRED, ...l });
            case y.Kb.AutoApproved:
              return (0, d.Vp)({ txType: i.SIGNING_TX, status: o.AUTO_APPROVED, ...l });
            case y.Kb.ValidationCodeRequired:
              return (0, d.Vp)({
                txType: i.SIGNING_TX,
                status: o.VALIDATION_CODE_REQUIRED,
                type: r.isEmail() ? T.P.EMAIL_OTP : T.P.SMS_OTP,
                ...l,
              });
            case y.Kb.Rejected:
              return (0, d.Vp)({ txType: i.SIGNING_TX, status: o.REJECTED, ...l });
            default:
              (0, d.vE)(c.approvalStatus, 'Unexpected tx approval status');
          }
        }
        async processSigningPersonalSignRequest(e) {
          let { account: t } = await this.sessionSDK.requireCurrent(),
            r = t.identity,
            n = t.activeWallet.ethereumAddress;
          (0, d.kG)(r instanceof u.Ru, 'Not a Username identity');
          let a = await h({ fromUsername: r, fromAddress: n, text: new u.MJ(e) });
          (0, d.kG)(a.isSuccess(), "Processing typed data can't fail");
          let s = a.value;
          return { txType: i.SIGNING_PERSONAL, id: s.id.value, status: s.approvalStatus };
        }
        async approveSigningTx(e, t) {
          let { account: r } = await this.sessionSDK.requireCurrent();
          (0, d.kG)(r.identity instanceof u.Ru, 'Not a Username identity');
          let n = await E({
            id: new u.L5(e),
            validationCode: t ? new u.lg(t) : void 0,
            username: r.identity,
          });
          switch (n.status) {
            case l.z.COMPLETE:
              return { txType: i.SIGNING_TX_APPROVED, status: c.APPROVED };
            case l.z.VALIDATION_CODE:
              return { txType: i.SIGNING_TX_APPROVED, status: c.VALIDATION_CODE_INCORRECT };
            case l.z.LOCKED:
              return { txType: i.SIGNING_TX_APPROVED, status: c.LOCKED, until: n.until };
            default:
              (0, d.vE)(n, 'Unexpected response');
          }
        }
        async sendSigningTxValidationCode(e) {
          let { account: t } = await this.sessionSDK.requireCurrent();
          (0, d.kG)(t.identity instanceof u.Ru, 'Not a Username identity');
          let r = await (0, m.z)({ id: new u.L5(e), username: t.identity });
          switch (r.status) {
            case m.q.SEND:
              return { status: m.q.SEND };
            case m.q.LOCKED:
              return { status: m.q.LOCKED, until: r.until };
            default:
              (0, d.vE)(r, 'Unexpected response');
          }
        }
        async sendSigningTypedDataValidationCode(e) {
          return this.sendSigningTxValidationCode(e);
        }
        async approveSigningTypedData(e, t) {
          let { account: r } = await this.sessionSDK.requireCurrent();
          (0, d.kG)(r.identity instanceof u.Ru, 'Not a Username identity');
          let n = await E({
            id: new u.L5(e),
            validationCode: t ? new u.lg(t) : void 0,
            username: r.identity,
          });
          switch (n.status) {
            case l.z.COMPLETE:
              return { txType: i.SIGNING_TYPED_DATA_APPROVED, status: c.APPROVED };
            case l.z.VALIDATION_CODE:
              return { txType: i.SIGNING_TYPED_DATA_APPROVED, status: c.VALIDATION_CODE_INCORRECT };
            case l.z.LOCKED:
              return { txType: i.SIGNING_TYPED_DATA_APPROVED, status: c.LOCKED, until: n.until };
            default:
              (0, d.vE)(n, 'Unexpected response');
          }
        }
        async approveSigningPersonalSign(e) {
          let { account: t } = await this.sessionSDK.requireCurrent();
          (0, d.kG)(t.identity instanceof u.Ru, 'Not a Username identity');
          let r = await E({ id: new u.L5(e), username: t.identity });
          switch (r.status) {
            case l.z.COMPLETE:
              return { txType: i.SIGNING_PERSONAL, status: c.APPROVED };
            case l.z.VALIDATION_CODE:
            case l.z.LOCKED:
              (0, d.Fi)('Validation code should not be required for personal sign');
            default:
              (0, d.vE)(r, 'Unexpected response');
          }
        }
        async rejectSigningTx(e) {
          await A({ id: new u.L5(e) });
        }
        async rejectSigningTypedData(e) {
          await A({ id: new u.L5(e) });
        }
        async rejectSigningPersonalSign(e) {
          await A({ id: new u.L5(e) });
        }
        constructor(e) {
          super(), (this.sessionSDK = e);
        }
      }
    },
    54866: function (e, t, r) {
      'use strict';
      var n, a;
      r.d(t, {
        P: function () {
          return n;
        },
      }),
        ((a = n || (n = {})).SMS_OTP = 'SMS_OTP'),
        (a.EMAIL_OTP = 'EMAIL_OTP');
    },
    41417: function (e, t, r) {
      'use strict';
      r.d(t, {
        y: function () {
          return s;
        },
      });
      var n = r(9284),
        a = r(79716);
      function s(e) {
        let t = (0, a.o)(e.value);
        return (
          (0, n.kG)(
            null != t && 'object' == typeof t && 'sub' in t && 'string' == typeof t.sub,
            'Invalid id token'
          ),
          t
        );
      }
    },
    56964: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return s;
        },
      });
      var n = r(42716),
        a = r(79716);
      let s = (e) => {
        let t = (0, a.o)(e.value);
        return { role: t.role, exp: t.exp, iat: t.iat, id: new n.ld(t.id) };
      };
    },
    27663: function (e, t, r) {
      'use strict';
      r.d(t, {
        U: function () {
          return tV;
        },
      });
      let n = () => {
          let e = globalThis.crypto.subtle;
          if (!e) throw Error('SubtleCrypto not available');
          return e;
        },
        a = (e) => n().importKey('raw', e, 'AES-GCM', !1, ['encrypt', 'decrypt']),
        s = async (e, t, r) => {
          let s = await a(t),
            i = await n().encrypt({ name: 'AES-GCM', iv: r, tagLength: 128 }, s, e);
          return new Uint8Array(i);
        },
        i = async (e, t, r) => {
          let s = await a(t),
            i = await n().decrypt({ name: 'AES-GCM', iv: r, tagLength: 128 }, s, e);
          return new Uint8Array(i);
        },
        o = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
      class c {
        static encode(e) {
          e = Uint8Array.from(e);
          let t = [],
            r = 0,
            n = 0;
          for (let a of e)
            for (n = (n << 8) | a, r += 8; r >= 5; ) t.push((n >>> (r - 5)) & 31), (r -= 5);
          return r > 0 && t.push((n << (5 - r)) & 31), t.map((e) => o.charAt(e)).join('');
        }
        static decode(e) {
          e = e.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1');
          let t = [],
            r = 0,
            n = 0;
          for (let a of e) {
            let e = o.indexOf(a);
            if (-1 === e) throw Error('Invalid base 32 character found in string: '.concat(a));
            (r += 5) >= 8
              ? ((r -= 8), t.push(n | (e >> r)), (n = (e << (8 - r)) & 255))
              : (n |= e << (8 - r));
          }
          return n > 0 && t.push(n), Uint8Array.from(t);
        }
      }
      var l,
        u,
        d,
        y,
        v,
        p = r(87850);
      let w = () => {
        let e = globalThis.crypto.subtle;
        if (!e) throw Error('SubtleCrypto not available');
        return e;
      };
      var h = (((l = h || {}).SIGN = 'SIGN'), (l.ENCRYPT = 'ENCRYPT'), l);
      let f = {
          name: 'RSA-PSS',
          modulusLength: 2048,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: 'SHA-256',
        },
        I = {
          name: 'RSA-OAEP',
          modulusLength: 2048,
          publicExponent: new Uint8Array([1, 0, 1]),
          extractable: !1,
          hash: 'SHA-256',
        },
        C = (e) => {
          let t = e.split('\n'),
            r = '';
          for (let e = 0; e < t.length; e++)
            t[e].trim().length > 0 &&
              0 > t[e].indexOf('-BEGIN RSA PRIVATE KEY-') &&
              0 > t[e].indexOf('-BEGIN PUBLIC KEY-') &&
              0 > t[e].indexOf('-END RSA PRIVATE KEY-') &&
              0 > t[e].indexOf('-END PUBLIC KEY-') &&
              (r += t[e].trim());
          return (function (e) {
            let t = atob(e),
              r = new Uint8Array(t.length);
            for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
            return r.buffer;
          })(r);
        },
        E = (e, t) => {
          let r = (function (e) {
              let t = new Uint8Array(e),
                r = '';
              for (let e = 0; e < t.byteLength; e++) r += String.fromCharCode(t[e]);
              return btoa(r);
            })(e),
            n = '-----BEGIN ' + t + '-----\n',
            a = 0;
          for (; a < r.length; )
            a + 64 <= r.length ? (n += r.substr(a, 64) + '\n') : (n += r.substr(a) + '\n'),
              (a += 64);
          return n + ('-----END ' + t) + '-----';
        },
        m = (e, t) => {
          switch (t) {
            case 'SIGN':
              return w().importKey('spki', C(e), f, !1, ['verify']);
            case 'ENCRYPT':
              return w().importKey('spki', C(e), I, !1, ['encrypt']);
          }
        },
        A = (e, t) => {
          switch (t) {
            case 'SIGN':
              return w().importKey('pkcs8', C(e), f, !1, ['sign']);
            case 'ENCRYPT':
              return w().importKey('pkcs8', C(e), I, !1, ['decrypt']);
          }
          return w().importKey('pkcs8', C(e), { name: 'RSA-OAEP', hash: 'SHA-256' }, !0, [
            'decrypt',
          ]);
        },
        T = async (e) => {
          switch (e) {
            case 'SIGN': {
              let e = await w().generateKey(f, !0, ['sign', 'verify']),
                t = await w().exportKey('spki', e.publicKey),
                r = await w().exportKey('pkcs8', e.privateKey);
              return { publicKey: E(t, 'PUBLIC KEY'), privateKey: E(r, 'RSA PRIVATE KEY') };
            }
            case 'ENCRYPT': {
              let e = await w().generateKey(I, !0, ['encrypt', 'decrypt']),
                t = await w().exportKey('spki', e.publicKey),
                r = await w().exportKey('pkcs8', e.privateKey);
              return { publicKey: E(t, 'PUBLIC KEY'), privateKey: E(r, 'RSA PRIVATE KEY') };
            }
          }
        },
        S = async (e, t) => {
          let r = await A(e, 'SIGN'),
            n = await w().sign({ name: 'RSA-PSS', saltLength: 32 }, r, t);
          return new Uint8Array(n);
        },
        k = async (e, t) => {
          let r = await m(e, 'ENCRYPT'),
            n = await w().encrypt({ name: 'RSA-OAEP' }, r, t);
          return new Uint8Array(n);
        },
        g = async (e, t) => {
          let r = await A(e, 'ENCRYPT'),
            n = await w().decrypt({ name: 'RSA-OAEP' }, r, t);
          return new Uint8Array(n);
        };
      var R = r(10732),
        _ = r(37262);
      let D = (e, t) => (0, _.scrypt)((0, R.W9)(t), (0, R.W9)(e), 131072, 8, 1, 32),
        O = () => {
          let e = globalThis.crypto.subtle;
          if (!e) throw Error('SubtleCrypto not available');
          return e;
        },
        K = async (e, t) => {
          let r = await O().importKey('raw', e, 'HKDF', !1, ['deriveBits']),
            n = await O().deriveBits(
              { name: 'HKDF', salt: t, info: new ArrayBuffer(0), hash: 'SHA-256' },
              r,
              256
            );
          return new Uint8Array(n);
        };
      var L = r(92216),
        N = r(42716),
        P = r(78756),
        x = r(62193),
        U = r(49022),
        q = r(9284),
        G = r(97137),
        b = r(17163),
        j = r(72990),
        V = r(27520);
      let W = (e, t) => ({
        status: V.z.VALIDATION_CODE,
        accessToken: new N.qR(e),
        verificationToken: new N.qR(t),
      });
      var M = r(75375);
      let F = async (e) => {
        let t = await L.L.mutation(G.qU, { request: (0, N.au)(e) });
        (0, q.kG)(t.data, 'Login start API query failed', t.error);
        let r = t.data.authStart;
        switch (r.__typename) {
          case 'LoginCredentialsRequired':
            return (0, j.jn)(r.accessToken, r.info);
          case 'ValidationCodeRequired':
            return W(r.accessToken, r.verificationToken);
          case 'InvalidUsername':
            return (0, M.L)(r.reason);
          case 'UserLocked':
            return (0, b.m)(r.until);
          default:
            (0, q.vE)(r, 'Unhandled login response type');
        }
      };
      var H = r(94698);
      let z = async (e) => {
        let t = await L.L.mutation(G.Zs, { request: (0, N.au)({ validationCode: e }) });
        (0, q.kG)(t.data, 'Auth validation code API query failed', t.error);
        let r = t.data.authValidateValidationCode;
        switch (r.__typename) {
          case 'LoginCredentialsRequired':
            return (0, j.jn)(r.accessToken, r.info);
          case 'RegisterCredentialsRequired':
            return (0, j.uF)(r.accessToken);
          case 'InvalidCode':
            return (0, H.c)();
          case 'UserLocked':
            return (0, b.m)(r.until);
          default:
            (0, q.vE)(r, 'Auth validation code API query is broken');
        }
      };
      var B = r(88054);
      let J = (e) => {
          var t, r, n, a;
          let s = {
            picture: null !== (t = e.metadata.picture) && void 0 !== t ? t : void 0,
            emoji: null !== (r = e.metadata.emoji) && void 0 !== r ? r : void 0,
            icon: null !== (n = e.metadata.icon) && void 0 !== n ? n : void 0,
            color: e.metadata.color ? new N.ZR(e.metadata.color) : void 0,
            label: null !== (a = e.metadata.label) && void 0 !== a ? a : void 0,
          };
          switch (e.__typename) {
            case 'HdWallet':
              return {
                metadata: s,
                type: N.Sq.HD,
                ethereumAddress: new N.y1(e.ethereumAddress),
                walletId: new N.UI(e.walletId),
                walletEncryptionId: new N._v(e.walletEncryptionId),
                index: e.index,
                default: e.default,
                hidden: e.hidden,
                embedded: e.embedded,
                createdAt: new Date(e.createdAt),
                updatedAt: new Date(e.updatedAt),
              };
            case 'PrivateKeyWallet':
              return {
                metadata: s,
                type: N.Sq.PRIVATE_KEY,
                ethereumAddress: new N.y1(e.ethereumAddress),
                walletId: new N.UI(e.walletId),
                walletEncryptionId: new N._v(e.walletEncryptionId),
                default: e.default,
                hidden: e.hidden,
                createdAt: new Date(e.createdAt),
                updatedAt: new Date(e.updatedAt),
              };
            default:
              (0, q.vE)(e);
          }
        },
        Y = (e) => ({
          defaultWallet: J(e.defaultWallet),
          status: V.z.COMPLETE,
          encryptedAccount: {
            key: new N.eM(e.encryptedAccountInfo.key),
            iv: new N.MQ(e.encryptedAccountInfo.iv),
          },
          encryptedCredential: {
            key: new N.ay(e.encryptedCredentialInfo.key),
            iv: new N.MQ(e.encryptedCredentialInfo.iv),
            reencryptionKey: new N.bH(e.encryptedCredentialInfo.reencryptionKey),
            encryptedAccountMasterKey: new N.dm(
              e.encryptedCredentialInfo.encryptedAccountMasterKey
            ),
          },
          jwtInfo: {
            accessToken: new N.qR(e.jwtInfo.accessToken),
            refreshToken: new N.qR(e.jwtInfo.refreshToken),
            idToken: new N.qR(e.jwtInfo.idToken),
          },
          deviceId: new N.qT(e.deviceId),
          sessionKey: new N.jZ(e.sessionKey),
        }),
        Q = (e) => ({ status: V.z.TWO_FACTOR, accessToken: new N.qR(e) }),
        Z = async (e) => {
          let t = await L.L.mutation(G.m9, { request: (0, N.au)(e) });
          (0, q.kG)(t.data, 'Login password API query failed', t.error);
          let r = t.data.authLoginCredentials;
          switch (r.__typename) {
            case 'LoginSuccess':
              return Y(r);
            case 'TwoFactorRequired':
              return Q(r.accessToken);
            case 'UserLocked':
              return (0, b.m)(r.until);
            case 'InvalidCredentials':
              return (0, B.C)();
            default:
              (0, q.vE)(r, 'Unhandled login password response type');
          }
        },
        X = async (e) => {
          let t = await L.L.mutation(G.Dc, (0, N.au)({ request: e }));
          (0, q.kG)(t.data, 'Login 2FA failed', t.error);
          let r = t.data.authLoginTwoFactor;
          switch (r.__typename) {
            case 'LoginSuccess':
              return Y(r);
            case 'InvalidCode':
              return (0, H._)();
            case 'UserLocked':
              return (0, b.m)(r.until);
            default:
              (0, q.vE)(r, 'Login two factor code API query is broken');
          }
        },
        $ = async (e) => {
          let t = await L.L.mutation(G.E8, { request: (0, N.au)(e) });
          (0, q.kG)(t.data, 'Register API query failed', t.error);
          let r = t.data.authRegisterCredentials;
          return {
            status: V.z.COMPLETE,
            jwtInfo: {
              accessToken: new N.qR(r.jwtInfo.accessToken),
              refreshToken: new N.qR(r.jwtInfo.refreshToken),
              idToken: new N.qR(r.jwtInfo.idToken),
            },
            sessionKey: new N.jZ(r.sessionKey),
            deviceId: new N.qT(r.deviceId),
          };
        },
        ee = async (e) => {
          let t = await L.L.mutation(G.yu, { request: (0, N.au)({ validationCodeHash: e }) });
          (0, q.kG)(t.data, 'Auth send validation code API query failed', t.error);
        };
      var et = r(20515),
        er = r(19583),
        en = r(82436),
        ea = r(54866),
        es = r(56964),
        ei = r(86552),
        eo = r(70294),
        ec = r(96449),
        el = r(3703);
      class eu extends el.B {
        async handleAuthComplete(e) {
          let { device: t, session: r, account: n } = e,
            a = this.resolveDeviceId(t),
            s = await en.d.getDecryptedAccountMasterKey(
              n.credentialMasterKey,
              n.encryptedCredential
            ),
            { account: i } = await this.sessionSDK.createFromData({
              accountMasterKey: s,
              identity: n.identity,
              encryptedAccount: n.encryptedAccount,
              deviceId: a,
              clientSessionKey: r.clientSessionKey,
              serverSessionKey: r.serverSessionKey,
              jwtInfo: r.jwtInfo,
              activeWallet: n.defaultWallet,
            });
          return this.resetState(), (0, er.E)(i, a, await this.resolveDeviceRecoveryPrivateKey(t));
        }
        resolveDeviceId(e) {
          return e.clientDeviceId &&
            e.clientRecoveryPrivateKey &&
            e.clientDeviceId.equals(e.serverDeviceId)
            ? e.clientDeviceId
            : e.serverDeviceId;
        }
        async resolveDeviceRecoveryPrivateKey(e) {
          return e.clientDeviceId &&
            e.clientRecoveryPrivateKey &&
            e.clientDeviceId.equals(e.serverDeviceId)
            ? e.clientRecoveryPrivateKey
            : this.recoverySdk.generateRecoveryDeviceCode();
        }
        constructor(e, t) {
          super(), (this.sessionSDK = e), (this.recoverySdk = t);
        }
      }
      let ed = async (e) => {
        let t = (0, q.CK)().toString(),
          r = await S(e.toPEMString(), (0, R.W9)(t));
        return N._b.generate(t, (0, R.Dv)(r));
      };
      class ey extends eu {
        async start(e, t, r, n, a) {
          if ((this.resetState(), !(0, ec.r)(e).isValid))
            return { status: er.D.INVALID_USERNAME, reason: G.wR.FormatInvalid };
          let s = new N.Ru(e),
            i = new N.jZ(t),
            o = r ? new N.qT(r) : null,
            c = n ? new N.pI(n) : null;
          (et.k.jwtToken = void 0),
            (et.k.deviceId = null != o ? o : void 0),
            c && et.k.setDevicePoPOnce(await ed(c));
          let l = await F({ username: s, validationCodeMode: a });
          switch (l.status) {
            case V.z.VALIDATION_CODE:
              return (
                (et.k.jwtToken = l.accessToken),
                (this.state = {
                  type: 'VALIDATION_CODE',
                  currentUsername: s,
                  currentClientSessionKey: i,
                  currentDeviceId: o,
                  currentDeviceRecoveryKey: c,
                }),
                {
                  status: er.D.VALIDATION_CODE_REQUIRED,
                  verificationToken: l.verificationToken.value,
                  type: s.isEmail() ? ea.P.EMAIL_OTP : ea.P.SMS_OTP,
                }
              );
            case V.z.LOGIN_CREDENTIALS:
              return (
                (et.k.jwtToken = l.accessToken),
                (this.state = {
                  type: 'LOGIN_CREDENTIALS',
                  currentUsername: s,
                  currentClientSessionKey: i,
                  currentDeviceId: o,
                  currentDeviceRecoveryKey: c,
                }),
                this.handleLoginCredentialsRequiredResponse(l)
              );
            case V.z.INVALID_USERNAME:
              return { status: er.D.INVALID_USERNAME, reason: l.reason };
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: l.until };
            default:
              (0, q.vE)(l, 'Unexpected response from login API');
          }
        }
        async submitValidationCode(e) {
          let t = this._requireValidationCodeState(),
            r = await z(new N.lg(e));
          switch (r.status) {
            case V.z.VALIDATION_CODE:
              return { status: er.D.VALIDATION_CODE_INCORRECT };
            case V.z.REGISTER_CREDENTIALS:
              return (
                (et.k.jwtToken = r.accessToken),
                (this.state = { ...t, type: 'REGISTER_CREDENTIALS' }),
                { status: er.D.REGISTER_CREDENTIALS_REQUIRED }
              );
            case V.z.LOGIN_CREDENTIALS:
              return (
                (et.k.jwtToken = r.accessToken),
                (this.state = { ...t, type: 'LOGIN_CREDENTIALS' }),
                this.handleLoginCredentialsRequiredResponse(r)
              );
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: r.until };
            default:
              (0, q.vE)(r, 'Unexpected response from login validation code API');
          }
        }
        async loginSubmitCredentials(e) {
          let t = this._requireLoginCredentialsState(),
            r = (0, eo.u)(e);
          if (!r.valid) return { status: er.D.INVALID_PASSWORD };
          let n = await (0, ei.T)(t.currentUsername, r),
            a = N.Yp.generate(n, (0, P.bo)()),
            s = await Z({
              credentialAuthToken: a,
              username: t.currentUsername,
              passkeySignatureInfo: r.type === G.d3.Passkey ? r.passkeySignatureInfo : void 0,
            });
          switch (s.status) {
            case V.z.COMPLETE:
              return this.handleAuthComplete({
                device: {
                  serverDeviceId: s.deviceId,
                  clientDeviceId: t.currentDeviceId,
                  clientRecoveryPrivateKey: t.currentDeviceRecoveryKey,
                },
                account: {
                  identity: t.currentUsername,
                  credentialType: r.type,
                  encryptedAccount: s.encryptedAccount,
                  encryptedCredential: s.encryptedCredential,
                  credentialMasterKey: n,
                  defaultWallet: s.defaultWallet,
                },
                session: {
                  jwtInfo: s.jwtInfo,
                  clientSessionKey: t.currentClientSessionKey,
                  serverSessionKey: s.sessionKey,
                },
              });
            case V.z.TWO_FACTOR: {
              let { id: e } = (0, es.d)(s.accessToken);
              return (
                (this.state = {
                  ...t,
                  type: 'LOGIN_TWO_FACTOR',
                  currentUserId: e,
                  credentialType: r.type,
                  currentCredentialMasterKey: n,
                }),
                (et.k.jwtToken = s.accessToken),
                { status: er.D.TWO_FACTOR_CODE_REQUIRED }
              );
            }
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: s.until };
            case V.z.INVALID_CREDENTIAL:
              return {
                status: r.type === G.d3.Passkey ? er.D.INVALID_PASSKEY : er.D.INVALID_PASSWORD,
              };
            default:
              (0, q.vE)(s, 'Unexpected response from login password API');
          }
        }
        async loginSubmitTwoFactorCode(e) {
          let t = this._requireLoginTwoFactorState(),
            r = await X({ code: new N.GE(e), username: t.currentUsername });
          switch (r.status) {
            case V.z.COMPLETE:
              return this.handleAuthComplete({
                device: {
                  serverDeviceId: r.deviceId,
                  clientDeviceId: t.currentDeviceId,
                  clientRecoveryPrivateKey: t.currentDeviceRecoveryKey,
                },
                account: {
                  identity: t.currentUsername,
                  credentialType: t.credentialType,
                  encryptedAccount: r.encryptedAccount,
                  encryptedCredential: r.encryptedCredential,
                  credentialMasterKey: t.currentCredentialMasterKey,
                  defaultWallet: r.defaultWallet,
                },
                session: {
                  jwtInfo: r.jwtInfo,
                  clientSessionKey: t.currentClientSessionKey,
                  serverSessionKey: r.sessionKey,
                },
              });
            case V.z.TWO_FACTOR:
              return { status: er.D.TWO_FACTOR_CODE_INCORRECT };
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: r.until };
            default:
              (0, q.vE)(r, 'Unexpected response');
          }
        }
        async loginSubmitTwoFactorRecoveryCode(e) {
          let t = this._requireLoginTwoFactorState(),
            r = N.dg.fromCrockfordBase32(e, P.d9);
          if (r.isFailure()) return { status: er.D.TWO_FACTOR_CODE_INCORRECT };
          let n = await X({ username: t.currentUsername, recoveryCode: r.value });
          switch (n.status) {
            case V.z.COMPLETE:
              return this.handleAuthComplete({
                device: {
                  serverDeviceId: n.deviceId,
                  clientDeviceId: t.currentDeviceId,
                  clientRecoveryPrivateKey: t.currentDeviceRecoveryKey,
                },
                account: {
                  identity: t.currentUsername,
                  credentialType: t.credentialType,
                  encryptedAccount: n.encryptedAccount,
                  encryptedCredential: n.encryptedCredential,
                  credentialMasterKey: t.currentCredentialMasterKey,
                  defaultWallet: n.defaultWallet,
                },
                session: {
                  jwtInfo: n.jwtInfo,
                  clientSessionKey: t.currentClientSessionKey,
                  serverSessionKey: n.sessionKey,
                },
              });
            case V.z.TWO_FACTOR:
              return { status: er.D.TWO_FACTOR_CODE_INCORRECT };
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: n.until };
            default:
              (0, q.vE)(n, 'Unexpected response');
          }
        }
        async registerSubmitCredentials(e) {
          let t = this._requireAuthRegisterCredentialsState(),
            r = (0, eo.u)(e);
          if (!r.valid) return { status: er.D.INVALID_PASSWORD };
          let {
              accountAuthToken: n,
              encryptedAccount: a,
              credentialType: s,
              credentialMasterKey: i,
              credentialAuthToken: o,
              encryptedCredential: c,
              walletInfo: l,
              deviceRecovery: u,
            } = await en.d.generate({ identity: t.currentUsername, credential: r }),
            d = {
              accountAuthToken: n,
              encryptedAccount: a,
              encryptedCredential: c,
              credentialAuthToken: o,
              hdWalletInfo: {
                walletId: l.walletId,
                walletEncryptionId: l.walletEncryptionId,
                ethereumAddress: l.ethereumAddress,
                signature: l.signature,
              },
              deviceRecoveryInfo: {
                publicKeyId: u.keyPair.publicKeyId,
                publicKey: u.keyPair.publicKey,
                encryptedAccountMasterKey: u.recoveryEncryptedAccountMasterKey,
              },
            },
            y = await $(
              r.type === G.d3.Passkey
                ? {
                    ...d,
                    credentialType: G.d3.Passkey,
                    passkeyInfo: (0, q.vJ)(r.passkeyInfo, 'Passkey info is required'),
                  }
                : { ...d, credentialType: G.d3.Password }
            );
          return this.handleAuthComplete({
            device: {
              serverDeviceId: y.deviceId,
              clientDeviceId: y.deviceId,
              clientRecoveryPrivateKey: u.keyPair.privateKey,
            },
            account: {
              identity: t.currentUsername,
              credentialType: s,
              credentialMasterKey: i,
              encryptedAccount: a,
              encryptedCredential: c,
              defaultWallet: l,
            },
            session: {
              jwtInfo: y.jwtInfo,
              clientSessionKey: t.currentClientSessionKey,
              serverSessionKey: y.sessionKey,
            },
          });
        }
        async resendValidationCode() {
          this._requireValidationCodeState(), await ee();
        }
        resetState() {
          this.state = null;
        }
        _requireValidationCodeState() {
          if (!this.state || 'VALIDATION_CODE' !== this.state.type)
            throw Error(
              'You can not call this method directly without starting the auth process first'
            );
          return this.state;
        }
        _requireLoginCredentialsState() {
          if (!this.state || 'LOGIN_CREDENTIALS' !== this.state.type)
            throw Error(
              'You can not call this method directly without starting the auth login process first'
            );
          return this.state;
        }
        _requireLoginTwoFactorState() {
          if (!this.state || 'LOGIN_TWO_FACTOR' !== this.state.type)
            throw Error(
              'You can not call this method directly without starting the auth login process first'
            );
          return this.state;
        }
        _requireAuthRegisterCredentialsState() {
          if (!this.state || 'REGISTER_CREDENTIALS' !== this.state.type)
            throw Error(
              'You can not call this method directly without starting the auth register process first'
            );
          return this.state;
        }
        handleLoginCredentialsRequiredResponse(e) {
          return { status: er.D.LOGIN_CREDENTIALS_REQUIRED, info: e.info };
        }
        constructor(e, t) {
          super(e, t), (this.state = null);
        }
      }
      let ev = (e) => {
          var t, r, n, a, s, i, o;
          return {
            deviceId: new N.qT(e.deviceId),
            countryCode: null !== (t = e.countryCode) && void 0 !== t ? t : void 0,
            countryName: null !== (r = e.countryName) && void 0 !== r ? r : void 0,
            city: null !== (n = e.city) && void 0 !== n ? n : void 0,
            deviceType: null !== (a = e.deviceType) && void 0 !== a ? a : void 0,
            deviceOs: null !== (s = e.deviceOs) && void 0 !== s ? s : void 0,
            deviceModel: null !== (i = e.deviceModel) && void 0 !== i ? i : void 0,
            browser: null !== (o = e.browser) && void 0 !== o ? o : void 0,
            lastUsedAt: new Date(e.lastUsedAt),
            lastUsedAppOrigin: e.lastUsedAppOrigin ? new N._N(e.lastUsedAppOrigin) : void 0,
            createdAt: new Date(e.createdAt),
            updateAt: new Date(e.updatedAt),
          };
        },
        ep = async () => {
          let e = await L.L.query(G.NT, {});
          (0, q.kG)(e.data, 'Approved devices API query failed', e.error);
          let t = e.data.approvedDevices,
            r = t.currentDevice;
          return { currentDevice: r ? ev(r) : void 0, devices: t.devices.map((e) => ev(e)) };
        },
        ew = async (e, t, r) => {
          await L.L.mutation(G.mW, {
            request: (0, N.au)({ id: e, validationCode: t, username: r }),
          });
        },
        eh = async (e, t) => {
          try {
            return (
              await L.L.mutation(G.En, { request: (0, N.au)({ deviceId: e, username: t }) }), !0
            );
          } catch (e) {
            return !1;
          }
        };
      class ef extends el.B {
        approved() {
          return ep();
        }
        async revokeDevice(e, t) {
          let { account: r } = await this.sessionSDK.requireCurrent();
          return (
            (0, q.kG)(r.identity instanceof N.Ru, 'Not a Username identity'), ew(e, t, r.identity)
          );
        }
        async revokeDeviceSendValidationCode(e) {
          let { account: t } = await this.sessionSDK.requireCurrent();
          return (
            (0, q.kG)(t.identity instanceof N.Ru, 'Not a Username identity'), eh(e, t.identity)
          );
        }
        constructor(e) {
          super(), (this.sessionSDK = e);
        }
      }
      let eI = async (e) => {
        let t = await L.L.query(G.yF, { request: (0, N.au)(e) });
        return (
          (0, q.kG)(t.data, 'Failed to fetch account linking status', t.error),
          t.data.hasExternalAccountLinked.linked
        );
      };
      ((u = y || (y = {})).SUCCESS = 'SUCCESS'),
        (u.USER_CANCELLED = 'USER_CANCELLED'),
        (u.POPUP_BLOCKED = 'POPUP_BLOCKED'),
        (u.PREVIOUS_IN_PROGRESS = 'PREVIOUS_IN_PROGRESS'),
        (u.UNKNOWN_ERROR = 'UNKNOWN_ERROR');
      class eC extends Error {
        constructor() {
          super('The user rejected the request.');
        }
      }
      class eE extends Error {
        constructor() {
          super('The connection is already in progress.');
        }
      }
      class em extends Error {
        constructor() {
          super('The connection popup is blocked.');
        }
      }
      class eA extends Error {
        constructor() {
          super('The connection failed for an unknown reason');
        }
      }
      class eT extends el.B {
        async getIdToken(e, t) {
          let r = this.resolveProvider(e),
            n = await r.connect(t);
          if (n.isFailure()) return { status: this.extractStatusFromError(n.error) };
          let { idToken: a } = n.value;
          return { status: y.SUCCESS, idToken: a.value };
        }
        async connect(e) {
          this.resetState();
          let t = this.resolveProvider(e),
            r = await t.connect();
          if (r.isFailure()) return { status: this.extractStatusFromError(r.error) };
          let { id: n, idToken: a } = r.value,
            s = await eI({ idToken: a });
          return (
            (this.state = { id: n.value, idToken: a.value, linked: s }),
            { status: y.SUCCESS, ...this.state }
          );
        }
        getState() {
          if (!this.state) throw Error('State is not set');
          return this.state;
        }
        resetState() {
          this.state = void 0;
        }
        resolveProvider(e) {
          if (e === N.Rq.APPLE) return this.config.providers[e]();
          (0, q.vE)(e, 'Not supported provider received');
        }
        extractStatusFromError(e) {
          return e instanceof eC
            ? y.USER_CANCELLED
            : e instanceof em
              ? y.POPUP_BLOCKED
              : e instanceof eE
                ? y.PREVIOUS_IN_PROGRESS
                : e instanceof eA
                  ? y.UNKNOWN_ERROR
                  : void (0, q.vE)(e);
        }
        constructor(e) {
          super(), (this.state = void 0), (this.config = e);
        }
      }
      let eS = async (e) => {
          let t = await L.L.mutation(G.Je, { request: (0, N.au)(e) });
          (0, q.kG)(t.data, 'Login API query failed', t.error);
          let r = t.data.externalAccountLoginCredentials;
          switch (r.__typename) {
            case 'LoginSuccess':
              return Y(r);
            case 'TwoFactorRequired':
              return Q(r.accessToken);
            case 'UserLocked':
              return (0, b.m)(r.until);
            case 'InvalidCredentials':
              return (0, B.C)();
            default:
              (0, q.vE)(r, 'Login credentials API query is broken');
          }
        },
        ek = async (e) => {
          let t = await L.L.mutation(G.VQ, (0, N.au)({ request: e }));
          (0, q.kG)(t.data, 'Login API query failed', t.error);
          let r = t.data.externalAccountLoginTwoFactor;
          switch (r.__typename) {
            case 'LoginSuccess':
              return Y(r);
            case 'InvalidCode':
              return (0, H._)();
            case 'UserLocked':
              return (0, b.m)(r.until);
            default:
              throw Error('Login two factor code API query is broken');
          }
        };
      class eg extends eu {
        async start(e, t, r, n, a, s) {
          this.resetState();
          let i = (0, eo.u)({ type: G.d3.Password, value: r });
          if (!i.valid) return { status: er.D.INVALID_PASSWORD };
          let o = a ? new N.qT(a) : null,
            c = s ? new N.pI(s) : null;
          (et.k.deviceId = null != o ? o : void 0), c && et.k.setDevicePoPOnce(await ed(c));
          let l = new N.SJ(e),
            u = new N.jt(t),
            d = new N.jZ(n),
            y = await N.So.generate(l, i.userKey, (0, P.oJ)()),
            v = await eS({ idToken: u, credentialAuthToken: N.Yp.generate(y, (0, P.bo)()) });
          switch (v.status) {
            case V.z.COMPLETE:
              return this.handleAuthComplete({
                device: {
                  serverDeviceId: v.deviceId,
                  clientDeviceId: o,
                  clientRecoveryPrivateKey: c,
                },
                account: {
                  identity: l,
                  credentialType: i.type,
                  encryptedAccount: v.encryptedAccount,
                  encryptedCredential: v.encryptedCredential,
                  credentialMasterKey: y,
                  defaultWallet: v.defaultWallet,
                },
                session: {
                  jwtInfo: v.jwtInfo,
                  clientSessionKey: d,
                  serverSessionKey: v.sessionKey,
                },
              });
            case V.z.TWO_FACTOR:
              return (
                (et.k.jwtToken = v.accessToken),
                (this.state = {
                  type: 'LOGIN_TWO_FACTOR',
                  currentUserId: l,
                  currentExternalAccountId: l,
                  currentClientSessionKey: d,
                  currentCredentialMasterKey: y,
                  credentialType: i.type,
                  currentDeviceId: o,
                  currentDeviceRecoveryPrivateKey: c,
                }),
                { status: er.D.TWO_FACTOR_CODE_REQUIRED }
              );
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: v.until };
            case V.z.INVALID_CREDENTIAL:
              return { status: er.D.INVALID_PASSWORD };
            default:
              (0, q.vE)(v, 'Unexpected response');
          }
        }
        async submitTwoFactorCode(e) {
          var t;
          (0, q.kG)(
            (null === (t = this.state) || void 0 === t ? void 0 : t.type) === 'LOGIN_TWO_FACTOR',
            'Invalid state'
          );
          let r = await ek({ code: new N.GE(e) });
          switch (r.status) {
            case V.z.COMPLETE:
              return this.handleAuthComplete({
                device: {
                  serverDeviceId: r.deviceId,
                  clientDeviceId: this.state.currentDeviceId,
                  clientRecoveryPrivateKey: this.state.currentDeviceRecoveryPrivateKey,
                },
                account: {
                  identity: this.state.currentExternalAccountId,
                  credentialType: this.state.credentialType,
                  encryptedAccount: r.encryptedAccount,
                  encryptedCredential: r.encryptedCredential,
                  credentialMasterKey: this.state.currentCredentialMasterKey,
                  defaultWallet: r.defaultWallet,
                },
                session: {
                  jwtInfo: r.jwtInfo,
                  clientSessionKey: this.state.currentClientSessionKey,
                  serverSessionKey: r.sessionKey,
                },
              });
            case V.z.TWO_FACTOR:
              return { status: er.D.TWO_FACTOR_CODE_INCORRECT };
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: r.until };
            default:
              (0, q.vE)(r, 'Unexpected response');
          }
        }
        async submitTwoFactorRecoveryCode(e) {
          var t;
          (0, q.kG)(
            (null === (t = this.state) || void 0 === t ? void 0 : t.type) === 'LOGIN_TWO_FACTOR',
            'Invalid state'
          );
          let r = N.dg.fromCrockfordBase32(e, P.d9);
          if (r.isFailure()) return { status: er.D.TWO_FACTOR_CODE_INCORRECT };
          let n = await ek({ recoveryCode: r.value });
          switch (n.status) {
            case V.z.COMPLETE:
              return this.handleAuthComplete({
                device: {
                  serverDeviceId: n.deviceId,
                  clientDeviceId: this.state.currentDeviceId,
                  clientRecoveryPrivateKey: this.state.currentDeviceRecoveryPrivateKey,
                },
                account: {
                  identity: this.state.currentExternalAccountId,
                  credentialType: this.state.credentialType,
                  encryptedAccount: n.encryptedAccount,
                  encryptedCredential: n.encryptedCredential,
                  credentialMasterKey: this.state.currentCredentialMasterKey,
                  defaultWallet: n.defaultWallet,
                },
                session: {
                  jwtInfo: n.jwtInfo,
                  clientSessionKey: this.state.currentClientSessionKey,
                  serverSessionKey: n.sessionKey,
                },
              });
            case V.z.TWO_FACTOR:
              return { status: er.D.TWO_FACTOR_CODE_INCORRECT };
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: n.until };
            default:
              throw Error('Unexpected response');
          }
        }
        resetState() {
          this.state = null;
        }
        constructor(e, t) {
          super(e, t), (this.state = null);
        }
      }
      let eR = async (e) => {
        let t = await L.L.mutation(G.Lx, { request: (0, N.au)(e) });
        (0, q.kG)(t.data, 'Register external account API query failed', t.error);
        let r = t.data.registerExternalAccount;
        return {
          status: V.z.COMPLETE,
          jwtInfo: {
            accessToken: new N.qR(r.jwtInfo.accessToken),
            refreshToken: new N.qR(r.jwtInfo.refreshToken),
            idToken: new N.qR(r.jwtInfo.idToken),
          },
          sessionKey: new N.jZ(r.sessionKey),
          deviceId: new N.qT(r.deviceId),
        };
      };
      class e_ extends eu {
        async start(e, t, r, n) {
          let a = (0, eo.u)({ type: G.d3.Password, value: r });
          if (!a.valid) return { status: er.D.INVALID_PASSWORD };
          let s = new N.SJ(e),
            i = new N.jt(t),
            o = new N.jZ(n),
            {
              accountAuthToken: c,
              encryptedAccount: l,
              credentialMasterKey: u,
              encryptedCredential: d,
              credentialAuthToken: y,
              credentialType: v,
              deviceRecovery: p,
              walletInfo: w,
            } = await en.d.generate({ identity: s, credential: a }),
            h = await eR({
              idToken: i,
              accountAuthToken: c,
              encryptedAccount: l,
              encryptedCredential: d,
              credentialAuthToken: y,
              hdWalletInfo: w,
              credentialType: v,
              deviceRecoveryInfo: {
                publicKeyId: p.keyPair.publicKeyId,
                publicKey: p.keyPair.publicKey,
                encryptedAccountMasterKey: p.recoveryEncryptedAccountMasterKey,
              },
            });
          return this.handleAuthComplete({
            device: {
              serverDeviceId: h.deviceId,
              clientDeviceId: h.deviceId,
              clientRecoveryPrivateKey: p.keyPair.privateKey,
            },
            account: {
              identity: s,
              credentialType: v,
              credentialMasterKey: u,
              encryptedAccount: l,
              encryptedCredential: d,
              defaultWallet: w,
            },
            session: { jwtInfo: h.jwtInfo, clientSessionKey: o, serverSessionKey: h.sessionKey },
          });
        }
        resetState() {}
        constructor(e, t) {
          super(e, t);
        }
      }
      var eD = r(17665);
      let eO = async (e) => {
          var t;
          let r = await L.L.query(G.Tx, { request: (0, N.au)({ appOrigin: e }) });
          (0, q.kG)(r.data, 'Data must be defined', r.error);
          let n = r.data.selectedAppNetwork,
            a = {
              nativeCurrency: {
                name: n.nativeCurrency.name,
                symbol: n.nativeCurrency.symbol,
                decimals: n.nativeCurrency.decimals,
              },
              name: null !== (t = n.name) && void 0 !== t ? t : void 0,
              chainId: new N.a_(n.chainId),
              rpcURL: new N.R9(n.rpcURL, { allowedProtocols: [N.OM.HTTP, N.OM.HTTPS] }),
              blockExplorer: n.blockExplorer ? new N.R9(n.blockExplorer) : void 0,
            };
          return 'customNetworkId' in n
            ? { type: eD.t.UNKNOWN, customNetworkId: new N.$8(n.customNetworkId), ...a }
            : { type: eD.t.WELL_KNOWN, chain: n.chain, ...a };
        },
        eK = async (e) => {
          let t = await L.L.mutation(G.fu, { request: (0, N.au)(e) });
          (0, q.kG)(t.data, 'Data must be defined', t.error);
        },
        eL = async (e) => {
          let t = await L.L.query(G.sn, { request: e ? (0, N.au)(e) : {} });
          (0, q.kG)(t.data, 'Data must be defined', t.error);
          let r = t.data.networks;
          return {
            items: r.items.map((e) => {
              var t;
              let r = {
                nativeCurrency: {
                  name: e.nativeCurrency.name,
                  symbol: e.nativeCurrency.symbol,
                  decimals: e.nativeCurrency.decimals,
                },
                name: null !== (t = e.name) && void 0 !== t ? t : void 0,
                chainId: new N.a_(e.chainId),
                rpcURL: new N.R9(e.rpcURL, { allowedProtocols: [N.OM.HTTP, N.OM.HTTPS] }),
                blockExplorer: e.blockExplorer ? new N.R9(e.blockExplorer) : void 0,
              };
              return 'customNetworkId' in e
                ? { type: eD.t.UNKNOWN, customNetworkId: new N.$8(e.customNetworkId), ...r }
                : { type: eD.t.WELL_KNOWN, chain: e.chain, ...r };
            }),
            pageInfo: r.pageInfo,
          };
        };
      class eN extends Error {
        constructor(e) {
          super('Failed to add network'), (this.reason = e);
        }
      }
      let eP = async (e) => {
          let t = await L.L.mutation(G.xK, { request: (0, N.au)(e) });
          switch (
            ((0, q.kG)(t.data, 'Data must be defined', t.error), t.data.addNetwork.__typename)
          ) {
            case 'AddNetworkSuccess':
              return (0, q.Vp)(void 0);
            case 'AddNetworkFailure':
              return (0, q.Rn)(new eN(t.data.addNetwork.reason));
          }
        },
        ex = async (e) => {
          let t = await L.L.mutation(G.Y_, { request: (0, N.au)(e) });
          (0, q.kG)(t.data, 'Data must be defined', t.error);
        },
        eU = async (e) => {
          let t = await L.L.mutation(G.tt, { request: (0, N.au)(e) });
          (0, q.kG)(t.data, 'Data must be defined', t.error);
        };
      class eq extends el.B {
        getSelectedAppNetwork(e) {
          return eO(e);
        }
        async setSelectedAppNetwork(e) {
          await eK(e);
          let t = this.selectedAppNetworkChangeListeners.get(e.appOrigin.value);
          if (!t) return;
          let r = await this.getSelectedAppNetwork(e.appOrigin);
          for (let e of t) e(r);
        }
        onSelectedAppNetworkChange(e, t) {
          let r = this.selectedAppNetworkChangeListeners.get(e.value);
          return (
            r ? r.add(t) : this.selectedAppNetworkChangeListeners.set(e.value, new Set([t])),
            () => {
              let r = this.selectedAppNetworkChangeListeners.get(e.value);
              r && r.delete(t);
            }
          );
        }
        getNetworks(e) {
          return eL(e);
        }
        addNetwork(e) {
          return eP(e);
        }
        editNetwork(e) {
          return ex(e);
        }
        async removeNetwork(e) {
          await eU(e);
        }
        constructor() {
          super(), (this.selectedAppNetworkChangeListeners = new Map());
        }
      }
      let eG = async (e) => {
          let t = await L.L.mutation(G.rh, { request: (0, N.au)(e) });
          (0, q.kG)(t.data, 'Recovery two factor validation code API query failed', t.error);
          let r = t.data.recoveryStart;
          switch (r.__typename) {
            case 'RecoveryValidationCodeRequired':
              return {
                status: V.z.VALIDATION_CODE,
                accessToken: new N.qR(r.accessToken),
                verificationToken: new N.qR(r.verificationToken),
              };
            case 'UserLocked':
              return (0, b.m)(r.until);
            default:
              throw Error('Recovery two factor validation code API query is broken');
          }
        },
        eb = async (e) => {
          let t = await L.L.mutation(G.WQ, { request: (0, N.au)({ validationCode: e }) });
          (0, q.kG)(t.data, 'Recovery validate validation code API query failed', t.error);
          let r = t.data.recoveryValidateValidationCode;
          switch (r.__typename) {
            case 'RecoveryValidationCodeResponse':
              return { status: V.z.COMPLETE, accessToken: new N.qR(r.accessToken) };
            case 'InvalidCode':
              return (0, H.c)();
            case 'TwoFactorRequired':
              return Q(r.accessToken);
            case 'UserLocked':
              return (0, b.m)(r.until);
            default:
              throw Error('Recovery validation code API query is broken');
          }
        },
        ej = async (e) => {
          let t = await L.L.mutation(G.UW, (0, N.au)({ request: e }));
          (0, q.kG)(t.data, 'Recovery two factor validation code API query failed', t.error);
          let r = t.data.recoveryTwoFactor;
          switch (r.__typename) {
            case 'RecoveryTwoFactorCodeResponse':
              return { status: V.z.COMPLETE, accessToken: new N.qR(r.accessToken) };
            case 'InvalidCode':
              return (0, H._)();
            case 'UserLocked':
              return (0, b.m)(r.until);
            default:
              throw Error('Recovery two factor validation code API query is broken');
          }
        },
        eV = async (e, t) => {
          let r = await L.L.query(G.Tg, {
            request: { recoveryOfflineCodeId: (0, N.au)(e), recoveryAuthToken: (0, N.au)(t) },
          });
          (0, q.kG)(r.data, 'Error getting recovery offline code', r.error);
          let n = r.data.recoveryOfflineCodeEncryptedKeyInfo;
          return {
            accessToken: new N.qR(n.accessToken),
            encryptedAccountInfo: {
              key: new N.eM(n.encryptedAccountInfo.key),
              iv: new N.MQ(n.encryptedAccountInfo.iv),
            },
            recoveryEncryptedPrivateKeyInfo: {
              key: new N.p9(n.recoveryEncryptedPrivateKeyInfo.key),
              iv: new N.MQ(n.recoveryEncryptedPrivateKeyInfo.iv),
            },
            recoveryEncryptedAccountMasterKey: new N.xV(n.recoveryEncryptedAccountMasterKey),
          };
        },
        eW = async (e) => {
          let t = await L.L.mutation(G._m, { request: (0, N.au)(e) });
          return (
            (0, q.kG)(t.data, 'Recover with offline code API query failed', t.error),
            Y(t.data.recoverWithOfflineCode)
          );
        },
        eM = async (e, t) => {
          let r = await L.L.query(G.n9, { request: { signedUnixTimestamp: e, signature: t } });
          (0, q.kG)(r.data, 'Error getting recovery device info', r.error);
          let n = r.data.recoveryDeviceEncryptedKeyInfo;
          return {
            accessToken: new N.qR(n.accessToken),
            encryptedAccountInfo: {
              key: new N.eM(n.encryptedAccountInfo.key),
              iv: new N.MQ(n.encryptedAccountInfo.iv),
            },
            recoveryPublicKey: new N.cY(n.recoveryPublicKey),
            recoveryPublicKeyId: new N.sk(n.recoveryPublicKeyId),
            recoveryEncryptedAccountMasterKey: new N.xV(n.recoveryEncryptedAccountMasterKey),
          };
        },
        eF = async (e) => {
          let t = await L.L.mutation(G.dM, { request: (0, N.au)(e) });
          return (
            (0, q.kG)(t.data, 'Recover with device API query failed', t.error),
            Y(t.data.recoverWithDevice)
          );
        },
        eH = async (e) => {
          let t = await L.L.mutation(G.WG, { request: (0, N.au)({ validationCodeHash: e }) });
          (0, q.kG)(t.data, 'Recovery send validation code API query failed', t.error);
        },
        ez = async () => {
          let e = await L.L.query(G.fj, {});
          return (
            (0, q.kG)(e.data, 'Failed to get recovery offline codes', e.error),
            e.data.recoveryOfflineCodes.map((e) => ({
              recoveryKeyId: new N.RX(e.recoveryKeyId),
              createdAt: new Date(e.createdAt),
            }))
          );
        },
        eB = async (e, t) => {
          try {
            return (
              await L.L.mutation(G.LH, {
                request: (0, N.au)({ username: t, recoveryOfflineCodeId: e }),
              }),
              !0
            );
          } catch (e) {
            return !1;
          }
        },
        eJ = async (e, t, r) => {
          await L.L.mutation(G.iG, {
            request: (0, N.au)({ id: e, validationCode: t, username: r }),
          });
        },
        eY = async (e) => {
          await L.L.mutation(G.CE, { request: (0, N.au)(e) });
        },
        eQ = async (e) => {
          await L.L.mutation(G.e2, { request: (0, N.au)({ recoveryInfo: e }) });
        },
        eZ = (e) => ({
          publicKeyId: e.keyPair.publicKeyId,
          publicKey: e.keyPair.publicKey,
          encryptedAccountMasterKey: e.recoveryEncryptedAccountMasterKey,
        });
      class eX extends el.B {
        async start(e, t, r, n, a) {
          if ((this.resetState(), !(0, ec.r)(e).isValid)) return { status: er.D.INVALID_USERNAME };
          let s = new N.Ru(e),
            i = new N.jZ(t);
          (et.k.jwtToken = void 0),
            (et.k.deviceId = r ? new N.qT(r) : void 0),
            (this.state = {
              type: 'START',
              currentUsername: s,
              clientSessionKey: i,
              currentDeviceRecoveryKey: n ? new N.pI(n) : void 0,
            });
          let o = await eG({ username: s, validationCodeMode: a });
          switch (o.status) {
            case V.z.VALIDATION_CODE:
              return (
                (et.k.jwtToken = o.accessToken),
                {
                  status: er.D.VALIDATION_CODE_REQUIRED,
                  verificationToken: o.verificationToken.value,
                  type: s.isEmail() ? ea.P.EMAIL_OTP : ea.P.SMS_OTP,
                }
              );
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: o.until };
            default:
              (0, q.vE)(o, 'Invalid response from recovery start');
          }
        }
        async submitValidationCode(e) {
          var t;
          (0, q.kG)(
            (null === (t = this.state) || void 0 === t ? void 0 : t.type) === 'START',
            'Recovery state not set'
          );
          let r = await eb(new N.lg(e));
          switch (r.status) {
            case V.z.COMPLETE: {
              et.k.jwtToken = r.accessToken;
              let { id: e } = (0, es.d)(r.accessToken);
              return (
                (this.state = {
                  type: 'COMPLETE',
                  currentUserId: e,
                  currentUsername: this.state.currentUsername,
                  clientSessionKey: this.state.clientSessionKey,
                  currentDeviceRecoveryKey: this.state.currentDeviceRecoveryKey,
                }),
                { status: er.D.SUCCESS }
              );
            }
            case V.z.VALIDATION_CODE:
              return { status: er.D.VALIDATION_CODE_INCORRECT };
            case V.z.TWO_FACTOR: {
              let { id: e } = (0, es.d)(r.accessToken);
              return (
                (et.k.jwtToken = r.accessToken),
                (this.state = { ...this.state, type: 'TWO_FACTOR', currentUserId: e }),
                { status: er.D.TWO_FACTOR_CODE_REQUIRED }
              );
            }
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: r.until };
            default:
              throw Error('Unknown response status');
          }
        }
        async submitTwoFactorCode(e) {
          var t;
          (0, q.kG)(
            (null === (t = this.state) || void 0 === t ? void 0 : t.type) === 'TWO_FACTOR',
            'Recovery state not set'
          );
          let r = await ej({ code: new N.GE(e), username: this.state.currentUsername });
          switch (r.status) {
            case V.z.COMPLETE: {
              et.k.jwtToken = r.accessToken;
              let { id: e } = (0, es.d)(r.accessToken);
              return (
                (this.state = {
                  type: 'COMPLETE',
                  currentUserId: e,
                  currentUsername: this.state.currentUsername,
                  clientSessionKey: this.state.clientSessionKey,
                  currentDeviceRecoveryKey: this.state.currentDeviceRecoveryKey,
                }),
                { status: er.D.SUCCESS }
              );
            }
            case V.z.TWO_FACTOR:
              return { status: er.D.TWO_FACTOR_CODE_INCORRECT };
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: r.until };
            default:
              throw Error('Unknown response status');
          }
        }
        async submitTwoFactorRecoveryCode(e) {
          var t;
          (0, q.kG)(
            (null === (t = this.state) || void 0 === t ? void 0 : t.type) === 'TWO_FACTOR',
            'Recovery state not set'
          );
          let r = N.dg.fromCrockfordBase32(e, P.d9);
          if (r.isFailure()) return { status: er.D.TWO_FACTOR_CODE_INCORRECT };
          let n = await ej({ recoveryCode: r.value, username: this.state.currentUsername });
          switch (n.status) {
            case V.z.COMPLETE: {
              et.k.jwtToken = n.accessToken;
              let { id: e } = (0, es.d)(n.accessToken);
              return (
                (this.state = {
                  type: 'COMPLETE',
                  currentUserId: e,
                  currentUsername: this.state.currentUsername,
                  clientSessionKey: this.state.clientSessionKey,
                  currentDeviceRecoveryKey: this.state.currentDeviceRecoveryKey,
                }),
                { status: er.D.SUCCESS }
              );
            }
            case V.z.TWO_FACTOR:
              return { status: er.D.TWO_FACTOR_CODE_INCORRECT };
            case V.z.LOCKED:
              return { status: er.D.LOCKED, until: n.until };
            default:
              throw Error('Unknown response status');
          }
        }
        async verifyRecoveryOfflineCode(e) {
          var t;
          (0, q.kG)(
            (null === (t = this.state) || void 0 === t ? void 0 : t.type) === 'COMPLETE',
            'Recovery state not set'
          );
          let r = N.Sn.fromCrockfordBase32(e, P.d9),
            n = await N.Kr.generate(
              this.state.currentUserId,
              r.extractOfflineRecoveryCode(),
              (0, P.oJ)()
            ),
            a = N.Ur.generate(n, (0, P.bo)()),
            s = r.extractOfflineRecoveryCodeId();
          try {
            return await eV(s, a), !0;
          } catch (e) {
            return !1;
          }
        }
        async recoverWithOfflineCode(e, t) {
          var r;
          (0, q.kG)(
            (null === (r = this.state) || void 0 === r ? void 0 : r.type) === 'COMPLETE',
            'Recovery state not set'
          );
          let n = (0, eo.u)(t);
          if (!n.valid) return { status: er.D.INVALID_PASSWORD };
          let a = n.userKey;
          (0, q.kG)(a instanceof N.ro, 'User key is not a password');
          let {
              recoveryOfflineCodeId: s,
              recoveryAuthToken: i,
              accountMasterKey: o,
              credentialAuthToken: c,
              encryptedCredential: l,
              encryptedAccount: u,
              deviceRecovery: d,
            } = await this.recoverAccountWithOfflineCode(e, a),
            y = await eW({
              recoveryOfflineCodeId: s,
              recoveryAuthToken: i,
              credentialType: G.d3.Password,
              credentialAuthToken: c,
              encryptedCredential: l,
              deviceRecovery: {
                publicKeyId: d.keyPair.publicKeyId,
                publicKey: d.keyPair.publicKey,
                encryptedAccountMasterKey: d.recoveryEncryptedAccountMasterKey,
              },
            });
          return this.handleRecoveryComplete({
            device: { id: y.deviceId, recoveryPrivateKey: d.keyPair.privateKey },
            account: {
              identity: this.state.currentUsername,
              accountMasterKey: o,
              encryptedAccount: u,
              defaultWallet: y.defaultWallet,
            },
            session: {
              jwtInfo: y.jwtInfo,
              clientSessionKey: this.state.clientSessionKey,
              serverSessionKey: y.sessionKey,
            },
          });
        }
        async canRecoverWithDevice() {
          var e;
          if (
            ((0, q.kG)(
              (null === (e = this.state) || void 0 === e ? void 0 : e.type) === 'COMPLETE',
              'Recovery state not set'
            ),
            !this.state.currentDeviceRecoveryKey)
          )
            return !1;
          let t = await ed(this.state.currentDeviceRecoveryKey);
          try {
            return await eM(t.extractMessage(), t.extractSignature()), !0;
          } catch (e) {
            return !1;
          }
        }
        async recoverWithDevice(e) {
          var t;
          (0, q.kG)(
            (null === (t = this.state) || void 0 === t ? void 0 : t.type) === 'COMPLETE',
            'Recovery state not set'
          ),
            (0, q.kG)(this.state.currentDeviceRecoveryKey, 'Device recovery private key not set');
          let r = (0, eo.u)(e);
          if (!r.valid) return { status: er.D.INVALID_PASSWORD };
          let n = r.userKey;
          (0, q.kG)(n instanceof N.ro, 'User key is not a password');
          let {
              accountMasterKey: a,
              accountAuthToken: s,
              credentialAuthToken: i,
              encryptedCredential: o,
              encryptedAccount: c,
              deviceRecovery: l,
            } = await this.recoverAccountWithDevice(n),
            u = await eF({
              credentialType: G.d3.Password,
              accountAuthToken: s,
              credentialAuthToken: i,
              encryptedCredential: o,
              deviceRecovery: {
                publicKeyId: l.keyPair.publicKeyId,
                publicKey: l.keyPair.publicKey,
                encryptedAccountMasterKey: l.recoveryEncryptedAccountMasterKey,
              },
            });
          return this.handleRecoveryComplete({
            device: { id: u.deviceId, recoveryPrivateKey: l.keyPair.privateKey },
            account: {
              identity: this.state.currentUsername,
              accountMasterKey: a,
              encryptedAccount: c,
              defaultWallet: u.defaultWallet,
            },
            session: {
              jwtInfo: u.jwtInfo,
              clientSessionKey: this.state.clientSessionKey,
              serverSessionKey: u.sessionKey,
            },
          });
        }
        async resendValidationCode() {
          var e;
          (0, q.kG)(
            (null === (e = this.state) || void 0 === e ? void 0 : e.type) === 'START',
            'Recovery state not set'
          ),
            await eH();
        }
        async offlineCodes() {
          return (await ez()).map((e) => {
            let t = e.recoveryKeyId.toCrockfordBase32(P.iA).slice(0, -1);
            return {
              recoveryKeyId: e.recoveryKeyId.toHexString(),
              startOfUserCode: t,
              createdOn: e.createdAt,
            };
          });
        }
        async revokeOfflineCodeSendValidationCode(e) {
          let { account: t } = await this.sessionSDK.requireCurrent(),
            r = t.identity;
          return (0, q.kG)(r instanceof N.Ru, "Not a 'Username' identity"), eB(new N.RX(e), r);
        }
        async revokeOfflineCode(e, t) {
          let { account: r } = await this.sessionSDK.requireCurrent();
          return (
            (0, q.kG)(r.identity instanceof N.Ru, "Not a 'Username' identity"),
            eJ(new N.RX(e), new N.lg(t), r.identity)
          );
        }
        async generateRecoveryOfflineCode() {
          let { account: e } = await this.sessionSDK.requireCurrent(),
            {
              id: t,
              recoveryEncryptedAccountMasterKey: r,
              recoveryAuthToken: n,
              userCode: a,
              recoveryPublicKey: s,
              recoveryEncryptedPrivateKeyInfo: i,
            } = await e.generateNewRecoveryOfflineCode();
          return (
            await eY({
              recoveryOfflineCodeId: t,
              recoveryAuthToken: n,
              recoveryPublicKey: s,
              recoveryEncryptedAccountMasterKey: r,
              recoveryEncryptedPrivateKeyInfo: i,
            }),
            { userCode: a.toCrockfordBase32(P.iA), recoveryKeyId: t.toHexString() }
          );
        }
        async generateRecoveryDeviceCode() {
          let { account: e } = await this.sessionSDK.requireCurrent(),
            t = await e.generateNewDeviceRecoveryKey();
          return await eQ(eZ(t)), t.keyPair.privateKey;
        }
        resetState() {
          this.state = null;
        }
        async recoverAccountWithOfflineCode(e, t) {
          var r;
          (0, q.kG)(
            (null === (r = this.state) || void 0 === r ? void 0 : r.type) === 'COMPLETE',
            'Recovery state not set'
          );
          let n = N.Sn.fromCrockfordBase32(e, P.d9),
            a = await N.Kr.generate(
              this.state.currentUserId,
              n.extractOfflineRecoveryCode(),
              (0, P.oJ)()
            ),
            s = N.Ur.generate(a, (0, P.bo)()),
            i = n.extractOfflineRecoveryCodeId(),
            o = await eV(i, s);
          return (
            (et.k.jwtToken = o.accessToken),
            {
              recoveryOfflineCodeId: i,
              recoveryAuthToken: s,
              ...(await en.d.generateFromRecoveryOfflineCode({
                password: t,
                identity: this.state.currentUsername,
                recoveryMasterKey: a,
                recoveryEncryptedAccountMasterKey: o.recoveryEncryptedAccountMasterKey,
                recoveryEncryptedPrivateKeyInfo: o.recoveryEncryptedPrivateKeyInfo,
                encryptedAccountInfo: o.encryptedAccountInfo,
              })),
            }
          );
        }
        async recoverAccountWithDevice(e) {
          var t;
          (0, q.kG)(
            (null === (t = this.state) || void 0 === t ? void 0 : t.type) === 'COMPLETE',
            'Recovery state not set'
          ),
            (0, q.kG)(this.state.currentDeviceRecoveryKey, 'Device recovery private key not set');
          let r = await ed(this.state.currentDeviceRecoveryKey),
            n = await eM(r.extractMessage(), r.extractSignature());
          return (
            (et.k.jwtToken = n.accessToken),
            en.d.generateFromDeviceRecoveryKey({
              identity: this.state.currentUsername,
              password: e,
              recoveryPrivateKey: this.state.currentDeviceRecoveryKey,
              recoveryEncryptedAccountMasterKey: n.recoveryEncryptedAccountMasterKey,
              encryptedAccount: n.encryptedAccountInfo,
            })
          );
        }
        async handleRecoveryComplete(e) {
          let { account: t, device: r, session: n } = e,
            { account: a } = await this.sessionSDK.createFromData({
              identity: t.identity,
              accountMasterKey: t.accountMasterKey,
              encryptedAccount: t.encryptedAccount,
              activeWallet: t.defaultWallet,
              deviceId: r.id,
              jwtInfo: n.jwtInfo,
              clientSessionKey: n.clientSessionKey,
              serverSessionKey: n.serverSessionKey,
            });
          return this.resetState(), (0, er.E)(a, r.id, r.recoveryPrivateKey);
        }
        constructor(e) {
          super(), (this.state = null), (this.sessionSDK = e);
        }
      }
      var e$ = r(71842),
        e0 = r(97927);
      let e1 = async () => {
          let e = await L.L.query(G.iL, {});
          return (
            (0, q.kG)(e.data, 'Error getting status of two factor auth', e.error),
            e.data.isTwoFactorAuthEnabled
          );
        },
        e4 = async (e) => {
          let t = await L.L.mutation(G._k, { request: (0, N.au)({ name: e }) });
          return (
            (0, q.kG)(t.data, 'Setup two factor auth API query is broken', t.error),
            {
              keyUri: t.data.setupTwoFactorAuth.keyUri,
              token: t.data.setupTwoFactorAuth.token,
              recoveryCode: new N.dg(t.data.setupTwoFactorAuth.recoveryCode),
            }
          );
        },
        e3 = async (e) => {
          let t = await L.L.mutation(G.Uf, (0, N.au)({ request: e }));
          return (
            (0, q.kG)(t.data, 'Complete setup two factor auth API query failed', t.error),
            t.data.completeSetupTwoFactorAuth
          );
        },
        e2 = async (e) => {
          let t = await L.L.mutation(G.t0, (0, N.au)({ request: e }));
          return (
            (0, q.kG)(t.data, 'Disable two factor auth API query failed', t.error),
            t.data.disableTwoFactorAuth
          );
        };
      class e7 extends el.B {
        async isTwoFactorAuthEnabled() {
          return e1();
        }
        async setupTwoFactorAuth() {
          let e = await e4(await this.generateTwoFactorAuthName());
          return {
            keyUri: e.keyUri,
            token: e.token,
            recoveryCode: e.recoveryCode.toCrockfordBase32(P.iA),
          };
        }
        async completeSetupTwoFactorAuth(e) {
          return await e3({ code: new N.GE(e) });
        }
        async disableTwoFactorAuth(e) {
          return e2({ code: new N.GE(e) });
        }
        async generateTwoFactorAuthName() {
          let { account: e } = await this.sessionSDK.requireCurrent(),
            t = e.identity;
          return new N.Np(
            'EXTERNAL_ID' === t.type
              ? 'OpenID Connect for '.concat(t.value.slice(0, 3), '***')
              : ''.concat(t.value)
          );
        }
        constructor(e) {
          super(), (this.sessionSDK = e);
        }
      }
      let e5 = async (e) => !(await L.L.mutation(G.O2, { request: (0, N.au)(e) })).error,
        e6 = async (e) => !(await L.L.mutation(G.ys, { request: (0, N.au)(e) })).error,
        e9 = async (e) => !(await L.L.mutation(G.QK, { request: { address: e } })).error,
        e8 = async (e) => {
          let t = await L.L.query(G.rM, { request: { ...e } });
          (0, q.kG)(t.data, 'Get address book API query failed', t.error);
          let r = t.data.getAddressBook;
          return {
            items: r.items.map((e) => {
              var t, r, n, a;
              return {
                address: e.address,
                label: null !== (t = e.label) && void 0 !== t ? t : void 0,
                picture: null !== (r = e.picture) && void 0 !== r ? r : void 0,
                emoji: null !== (n = e.emoji) && void 0 !== n ? n : void 0,
                icon: null !== (a = e.icon) && void 0 !== a ? a : void 0,
                color: e.color ? new N.ZR(e.color) : void 0,
                addedAt: new Date(e.addedAt),
              };
            }),
            pageInfo: r.pageInfo,
          };
        },
        te = async (e, t) => {
          let r = await L.L.query(G.DC, { request: { query: e, ...t } });
          (0, q.kG)(r.data, 'Search address book API query failed', r.error);
          let n = r.data.searchAddressBook;
          return {
            items: n.items.map((e) => {
              var t, r, n, a;
              return {
                address: e.address,
                label: null !== (t = e.label) && void 0 !== t ? t : void 0,
                picture: null !== (r = e.picture) && void 0 !== r ? r : void 0,
                color: e.color ? new N.ZR(e.color) : void 0,
                emoji: null !== (n = e.emoji) && void 0 !== n ? n : void 0,
                icon: null !== (a = e.icon) && void 0 !== a ? a : void 0,
                addedAt: new Date(e.addedAt),
              };
            }),
            pageInfo: n.pageInfo,
          };
        };
      var tt = r(81748);
      class tr extends el.B {
        add(e) {
          return e5(e);
        }
        update(e) {
          return e6(e);
        }
        remove(e) {
          return e9(e);
        }
        list(e) {
          return e8(e);
        }
        search(e, t) {
          return te(e, t);
        }
        async uploadPicture(e) {
          (0, q.kG)(e.size > 0, 'Trying to upload an empty file'),
            (0, q.kG)((0, q.Jo)(tt.H, e.type), 'Unsupported mime type');
          let t = await (0, tt.P)(G.Tv.AddressBookPicture, e.type),
            r = await fetch(t, { method: 'PUT', body: e });
          return (0, q.kG)(r.ok, 'Failed to upload picture'), t;
        }
      }
      var tn = r(31421);
      let ta = async (e) => {
          let t = await L.L.mutation(G.bn, { request: (0, N.au)({ appOrigin: e }) });
          (0, q.kG)(t.data, 'Approve connection returned no data', t.error);
          let r = t.data.approveConnection;
          return {
            jwtInfo: {
              accessToken: new N.qR(r.jwtInfo.accessToken),
              refreshToken: new N.qR(r.jwtInfo.refreshToken),
              idToken: new N.qR(r.jwtInfo.idToken),
            },
            sessionKey: new N.jZ(r.sessionKey),
          };
        },
        ts = async (e) =>
          !(await L.L.mutation(G.k7, { request: (0, N.au)({ appOrigin: e }) })).error,
        ti = async (e) => {
          let t = await L.L.query(G.WW, { request: (0, N.au)({ appOrigin: e }) });
          return (0, q.kG)(t.data, 'Data must be defined', t.error), t.data.isApprovedConnection;
        },
        to = async (e) => {
          let t = await L.L.query(G.sl, { request: { ...e } });
          (0, q.kG)(t.data, 'Data must be defined', t.error);
          let r = t.data.getConnections;
          return {
            items: r.items.map((e) => ({
              appOrigin: new N._N(e.appOrigin),
              approvedAt: e.approvedAt,
            })),
            pageInfo: r.pageInfo,
          };
        },
        tc = async (e, t) => {
          let r = await L.L.query(G.xv, { request: { query: e, ...t } });
          (0, q.kG)(r.data, 'Data must be defined', r.error);
          let n = r.data.searchConnections;
          return {
            items: n.items.map((e) => ({
              appOrigin: new N._N(e.appOrigin),
              approvedAt: e.approvedAt,
            })),
            pageInfo: n.pageInfo,
          };
        };
      class tl extends el.B {
        process(e) {
          return (0, tn.g)(new N._N(e));
        }
        approve(e) {
          return ta(new N._N(e));
        }
        reject(e) {
          return ts(new N._N(e));
        }
        isApproved(e) {
          return ti(new N._N(e));
        }
        list(e) {
          return to(e);
        }
        search(e, t) {
          return tc(e, t);
        }
        constructor() {
          super();
        }
      }
      class tu extends N.d0 {
        constructor(e) {
          super(e);
        }
      }
      ((d = v || (v = {})).USERNAME = 'USERNAME'), (d.EXTERNAL_ACCOUNT_ID = 'EXTERNAL_ACCOUNT_ID');
      let td = (e) =>
          e instanceof N.Ru
            ? v.USERNAME
            : e instanceof N.SJ
              ? v.EXTERNAL_ACCOUNT_ID
              : void (0, q.vE)(e, 'Unsupported identity type'),
        ty = (e, t) => {
          switch (e) {
            case v.USERNAME:
              return new N.Ru(t);
            case v.EXTERNAL_ACCOUNT_ID:
              return new N.SJ(t);
            default:
              (0, q.vE)(e, 'Unsupported identity type');
          }
        },
        tv = 'family-accounts__encrypted-account-info';
      class tp {
        initialise(e) {
          this.masterKeyConfig = e;
        }
        getMasterKeyConfig() {
          return (
            (0, q.kG)(null !== this.masterKeyConfig, 'Master key config not initialised'),
            this.masterKeyConfig
          );
        }
        async set(e) {
          (0, q.kG)(null !== this.masterKeyConfig, 'Master key config not initialised');
          let t = await this.encryptAccountInfo(this.masterKeyConfig, e);
          await this.provider.setItem(tv, JSON.stringify((0, N.au)(t)));
        }
        async get() {
          (0, q.kG)(null !== this.masterKeyConfig, 'Master key config not initialised');
          let e = await this.provider.getItem(tv);
          if (null === e) return null;
          let t = JSON.parse(e);
          return this.decryptAccountInfo(this.masterKeyConfig, {
            key: new tu(t.key),
            iv: new N.MQ(t.iv),
          });
        }
        async reEncrypt(e) {
          (0, q.kG)(null !== this.masterKeyConfig, 'Master key config not initialised');
          let t = this.masterKeyConfig;
          this.masterKeyConfig = { ...t, ...e };
          let r = await this.provider.getItem(tv);
          (0, q.kG)(null !== r, 'No wallet info found');
          let n = JSON.parse(r),
            a = await this.decryptAccountInfo(t, { key: new tu(n.key), iv: new N.MQ(n.iv) }),
            s = await this.encryptAccountInfo(this.masterKeyConfig, a);
          await this.provider.setItem(tv, JSON.stringify((0, N.au)(s)));
        }
        update(e) {
          (0, q.kG)(null !== this.masterKeyConfig, 'Master key config not initialised');
          let t = this.masterKeyConfig;
          this.masterKeyConfig = { ...t, ...e };
        }
        async clear() {
          await this.provider.removeItem(tv);
        }
        async decryptAccountInfo(e, t) {
          let r = Uint8Array.from([...e.clientSessionKey.value, ...e.serverSessionKey.value]),
            n = (0, q.hx)(await (0, P.rK)().decrypt(t.key.value, r, t.iv.value)),
            a = JSON.parse((0, R.IV)(n));
          return {
            activeWallet:
              a.activeWallet.type === N.Sq.HD
                ? {
                    type: N.Sq.HD,
                    walletId: new N.UI(a.activeWallet.walletId),
                    walletEncryptionId: new N._v(a.activeWallet.walletEncryptionId),
                    index: a.activeWallet.index,
                  }
                : {
                    type: N.Sq.PRIVATE_KEY,
                    walletId: new N.UI(a.activeWallet.walletId),
                    walletEncryptionId: new N._v(a.activeWallet.walletEncryptionId),
                  },
            id: new N.ld(a.id),
            identity: ty(a.identityType, a.identity),
            encryptedAccount: {
              key: new N.eM(a.encryptedAccount.key),
              iv: new N.MQ(a.encryptedAccount.iv),
            },
            accountMasterKey: new N.qH(a.accountMasterKey),
          };
        }
        async encryptAccountInfo(e, t) {
          let r = { identityType: td(t.identity), ...t },
            n = (0, R.W9)(JSON.stringify(r)),
            a = (0, R.Bu)(n, (0, q.pp)(n.length, 16)),
            s = N.MQ.generate(P.O6),
            i = Uint8Array.from([...e.clientSessionKey.value, ...e.serverSessionKey.value]);
          return { key: new tu(await (0, P.rK)().encrypt(a, i, s.value)), iv: s };
        }
        constructor(e) {
          (this.masterKeyConfig = null), (this.provider = e);
        }
      }
      let tw = 'family-accounts__jwt_info';
      class th {
        async set(e) {
          await this.provider.setItem(tw, JSON.stringify((0, N.au)(e)));
        }
        async get() {
          let e = await this.provider.getItem(tw);
          return this.parseJwtInfoJson(e);
        }
        async clear() {
          await this.provider.removeItem(tw);
        }
        parseJwtInfoJson(e) {
          if (null === e) return null;
          let t = JSON.parse(e);
          return {
            accessToken: new N.qR(t.accessToken),
            refreshToken: new N.qR(t.refreshToken),
            idToken: new N.qR(t.idToken),
          };
        }
        constructor(e) {
          this.provider = e;
        }
      }
      let tf = async (e, t) => {
          let r = await L.L.mutation(G.xJ, { request: (0, N.au)({ walletId: e, metadata: t }) });
          return (
            (0, q.kG)(
              r.data,
              'editWalletMetadataAPI: Expected response.data to be defined',
              r.error
            ),
            J(r.data.editWalletMetadata)
          );
        },
        tI = async (e) => {
          let t = await L.L.mutation(G.r8, { request: (0, N.au)({ walletId: e }) });
          (0, q.kG)(!t.error, 'Error setting default wallet', t.error);
        },
        tC = async (e) => {
          let t = await L.L.query(G.OU, { request: (0, N.au)({ walletId: e }) });
          return (
            (0, q.kG)(t.data, 'Failed to get wallets', t.error),
            t.data.wallet ? J(t.data.wallet) : null
          );
        },
        tE = async () => {
          let e = await L.L.query(G.pd, {});
          return (
            (0, q.kG)(e.data, 'Failed to get default wallet', e.error), J(e.data.defaultWallet)
          );
        },
        tm = async (e) => {
          let t = await L.L.query(G.OU, { request: (0, N.au)({ address: e }) });
          return (
            (0, q.kG)(t.data, 'Failed to get wallets', t.error),
            t.data.wallet ? J(t.data.wallet) : null
          );
        },
        tA = async () => {
          let e = await L.L.query(G.vo, {});
          return (
            (0, q.kG)(e.data, 'Failed to get wallet index', e.error),
            {
              walletEncryptionId: new N._v(e.data.nextEmbeddedHdWalletIndex.walletEncryptionId),
              index: e.data.nextEmbeddedHdWalletIndex.index,
            }
          );
        },
        tT = async (e) => {
          let { walletInfo: t, encryptedAccount: r, accountAuthToken: n } = e,
            a = await L.L.mutation(G.Ru, {
              request: (0, N.au)({ encryptedAccount: r, accountAuthToken: n, walletInfo: t }),
            });
          (0, q.kG)(a.data, 'createNewWalletAPI: Expected response.data to be defined', a.error);
          let s = J(a.data.createNewEmbeddedHdWallet);
          return (
            (0, q.kG)(s.type === N.Sq.HD, 'createNewWalletAPI: Expected wallet to be HD wallet'), s
          );
        },
        tS = (e) => {
          switch (e) {
            case N.Sq.HD:
              return G.Sq.Hd;
            case N.Sq.PRIVATE_KEY:
              return G.Sq.PrivateKey;
            default:
              (0, q.vE)(e, 'Unsupported wallet type');
          }
        },
        tk = async (e) => {
          let { walletsInfo: t, encryptedAccount: r, accountAuthToken: n } = e,
            a = {
              encryptedAccount: r,
              accountAuthToken: n,
              walletsInfo: t.map((e) => ({
                type: tS(e.type),
                hdWalletInfo:
                  e.type === N.Sq.HD
                    ? {
                        walletId: e.walletId,
                        walletEncryptionId: e.walletEncryptionId,
                        ethereumAddress: e.ethereumAddress,
                        index: e.index,
                        signature: e.signature,
                        metadata: e.metadata,
                      }
                    : void 0,
                privateKeyWalletInfo:
                  e.type === N.Sq.PRIVATE_KEY
                    ? {
                        walletId: e.walletId,
                        walletEncryptionId: e.walletEncryptionId,
                        ethereumAddress: e.ethereumAddress,
                        signature: e.signature,
                        metadata: e.metadata,
                      }
                    : void 0,
              })),
            },
            s = await L.L.mutation(G.Oj, { request: (0, N.au)(a) });
          return (
            (0, q.kG)(s.data, 'createNewWalletAPI: Expected response.data to be defined', s.error),
            s.data.importNewWallets.map(J)
          );
        },
        tg = async (e) => {
          let t = await L.L.mutation(G.vT, { request: (0, N.au)({ walletId: e }) });
          (0, q.kG)(!t.error, 'Error hiding a wallet', t.error);
        },
        tR = async (e) => {
          let t = await L.L.mutation(G.tT, { request: (0, N.au)({ walletId: e }) });
          (0, q.kG)(!t.error, 'Error unhiding a wallet', t.error);
        },
        t_ = async (e) => {
          let t = await L.L.mutation(G.wB, { request: (0, N.au)(e) });
          (0, q.kG)(!t.error, 'Error removing a wallet', t.error);
        },
        tD = async (e) => {
          let t = await L.L.mutation(G.Ch, { request: (0, N.au)(e) });
          (0, q.kG)(!t.error, 'Error removing hd wallets', t.error);
        },
        tO = async (e) => {
          let t = await L.L.query(G.hn, {
            request: (0, N.au)({ where: e.where, orderBy: e.orderBy, ...e.pageInfo }),
          });
          return (
            (0, q.kG)(t.data, 'Failed to get wallets', t.error),
            { items: t.data.wallets.items.map(J), pageInfo: t.data.wallets.pageInfo }
          );
        };
      var tK = r(12103),
        tL = r(23733);
      class tN extends el.B {
        async editWalletMetadata(e, t) {
          return tf(e, t);
        }
        async setDefaultWallet(e) {
          await tI(e), await this.setActiveWallet(e);
        }
        async setActiveWallet(e) {
          let { account: t } = await this.sessionSdk.requireCurrent(),
            r = await tC(e);
          (0, q.kG)(r, 'Wallet by id not found');
          let n =
            r.type === N.Sq.HD
              ? {
                  type: N.Sq.HD,
                  walletId: r.walletId,
                  walletEncryptionId: r.walletEncryptionId,
                  index: r.index,
                }
              : {
                  type: N.Sq.PRIVATE_KEY,
                  walletId: r.walletId,
                  walletEncryptionId: r.walletEncryptionId,
                };
          await this.sessionSdk.changeAccount(
            await en.d.init({ ...t.serialize(), activeWallet: n })
          );
        }
        async getDefaultWallet() {
          return tE();
        }
        getWalletById(e) {
          return tC(e);
        }
        getWalletByAddress(e) {
          return tm(e);
        }
        async createNewWallet(e) {
          let { metadata: t = {} } = e,
            { account: r } = await this.sessionSdk.requireCurrent(),
            { walletEncryptionId: n, index: a } = await tA(),
            {
              encryptedAccount: s,
              accountAuthToken: i,
              walletInfo: o,
            } = await r.generateNextHdWallet({ walletEncryptionId: n, index: a }),
            c = {
              ...t,
              picture: t.picture
                ? 'string' == typeof t.picture
                  ? t.picture
                  : await this.uploadWalletPicture(t.picture)
                : void 0,
            };
          return tT({
            encryptedAccount: s,
            accountAuthToken: i,
            walletInfo: {
              walletId: o.walletId,
              walletEncryptionId: o.walletEncryptionId,
              ethereumAddress: o.ethereumAddress,
              index: o.index,
              signature: o.signature,
              metadata: c,
            },
          });
        }
        async importNewWallets(e) {
          let { account: t } = await this.sessionSdk.requireCurrent(),
            r = (
              await Promise.all(
                e.map(async (e) => {
                  switch (e.type) {
                    case N.Sq.HD: {
                      let r = await t.generateHdWalletEncryptionId(e.mnemonic);
                      if (e.indexes)
                        return Promise.all(
                          e.indexes.map(async (t) => ({
                            wallet: await tK.j.new({
                              mnemonic: e.mnemonic,
                              walletEncryptionId: r,
                              index: t.index,
                            }),
                            metadata: t.metadata,
                          }))
                        );
                      return {
                        wallet: await tK.j.new({
                          mnemonic: e.mnemonic,
                          walletEncryptionId: r,
                          index: 0,
                        }),
                        metadata: void 0,
                      };
                    }
                    case N.Sq.PRIVATE_KEY:
                      if (await t.hasExistingPrivateKeyEncryptionId(e.privateKey))
                        throw Error('Wallet with the same private key already exists');
                      return {
                        wallet: await tL.K.new({ privateKey: e.privateKey }),
                        metadata: e.metadata,
                      };
                    default:
                      (0, q.vE)(e, 'Unknown wallet type');
                  }
                })
              )
            ).flat(),
            {
              encryptedAccountInfo: n,
              accountAuthToken: a,
              walletsInfo: s,
            } = await t.importWallets(
              r.map((e) => {
                let { wallet: t } = e;
                return t;
              })
            ),
            i = await tk({
              accountAuthToken: a,
              encryptedAccount: n,
              walletsInfo: s.map((e, t) => {
                var n;
                let a = null !== (n = r[t].metadata) && void 0 !== n ? n : {};
                switch (e.type) {
                  case N.Sq.HD:
                    return {
                      type: e.type,
                      walletId: e.walletId,
                      walletEncryptionId: e.walletEncryptionId,
                      ethereumAddress: e.ethereumAddress,
                      index: e.index,
                      signature: e.signature,
                      metadata: a,
                    };
                  case N.Sq.PRIVATE_KEY:
                    return {
                      type: e.type,
                      walletId: e.walletId,
                      walletEncryptionId: e.walletEncryptionId,
                      ethereumAddress: e.ethereumAddress,
                      signature: e.signature,
                      metadata: a,
                    };
                  default:
                    (0, q.vE)(e, 'Unknown wallet type');
                }
              }),
            });
          return await this.sessionSdk.changeAccount(t), i;
        }
        async hideWallet(e) {
          await tg(e);
        }
        async unhideWallet(e) {
          await tR(e);
        }
        async removeWallet(e) {
          let { account: t } = await this.sessionSdk.requireCurrent(),
            r = await this.getWalletById(e);
          (0, q.kG)(r, 'Wallet by id not found'),
            (0, q.kG)(!r.default, "Default wallet can't be removed");
          let n = await t.getWallet(r);
          switch (n.type) {
            case N.Sq.HD:
              if (
                1 ===
                (
                  await this.getWallets({
                    where: { walletEncryptionId: n.encryptionId },
                    pageInfo: { offset: 0, limit: 10 },
                  })
                ).items.length
              ) {
                let { encryptedAccountInfo: r, accountAuthToken: a } = await t.removeWallet(
                  n.encryptionId
                );
                await t_({ accountAuthToken: a, encryptedAccountInfo: r, walletId: e });
                return;
              }
              await t_({
                accountAuthToken: t.accountAuthToken,
                encryptedAccountInfo: t.encryptedAccountInfo,
                walletId: e,
              });
              return;
            case N.Sq.PRIVATE_KEY: {
              let { encryptedAccountInfo: r, accountAuthToken: a } = await t.removeWallet(
                n.encryptionId
              );
              await t_({ accountAuthToken: a, encryptedAccountInfo: r, walletId: e });
              return;
            }
            default:
              (0, q.vE)(n, 'Unknown wallet type');
          }
        }
        async removeHdWallets(e) {
          let { account: t } = await this.sessionSdk.requireCurrent(),
            r = await t.removeWallet(e);
          await tD({
            accountAuthToken: r.accountAuthToken,
            encryptedAccountInfo: r.encryptedAccountInfo,
            walletEncryptionId: e,
          });
        }
        async getWallets(e) {
          return tO(e);
        }
        async uploadWalletPicture(e) {
          (0, q.kG)(e.size > 0, 'Trying to upload an empty file'),
            (0, q.kG)((0, q.Jo)(tt.H, e.type), 'Unsupported mime type');
          let t = await (0, tt.P)(G.Tv.WalletPicture, e.type),
            r = await fetch(t, { method: 'PUT', body: e });
          return (0, q.kG)(r.ok, 'Failed to upload picture'), t;
        }
        constructor(e) {
          super(), (this.sessionSdk = e);
        }
      }
      let tP = (e) => {
        (0, P.jB)(e.encryptionStandards),
          (0, x.W4)(e.EtherWalletConstructor),
          (0, L.g)({
            httpUrl: e.environment.apiHttpUrl,
            websocketUrl: e.environment.apiWebSocketUrl,
          });
        let t = new th(e.storage),
          r = new tp(e.storage),
          n = new e$.U(t, r),
          a = new eX(n);
        return {
          externalAccountConnect: new eT({ providers: e.externalAccount.providers }),
          externalAccountRegister: new e_(n, a),
          externalAccountLogin: new eg(n, a),
          auth: new ey(n, a),
          twoFactor: { auth: new e7(n) },
          recovery: a,
          device: new ef(n),
          account: new U.V(n),
          wallet: new tN(n),
          validation: {
            password: {
              validate: (e) => N.ro.validatePassword(e),
              isValid: (e) => N.ro.validatePassword(e).result,
              criteria: N.ro.criteria,
              regex: N.ro.regex,
            },
            username: { validate: (e) => (0, ec.r)(e), isValid: (e) => (0, ec.r)(e).isValid },
          },
          session: n,
          signingApproval: new e0.mz(n),
          network: new eq(),
          userConnection: new tl(),
          userAddressBook: new tr(),
        };
      };
      var tx = r(17843);
      class tU {
        get address() {
          return this._wallet.address;
        }
        get privateKey() {
          return this._wallet.privateKey;
        }
        signMessage(e) {
          return this._wallet.signMessage(e);
        }
        static fromMnemonic(e, t) {
          return Promise.resolve(new tU(tx.w5.fromMnemonic(e, t)));
        }
        static fromPrivateKey(e) {
          return Promise.resolve(new tU(new tx.w5(e)));
        }
        constructor(e) {
          this._wallet = e;
        }
      }
      var tq = r(41417);
      let tG = () => {
        let e = (0, R.O6)(32);
        return (0, R.Dv)(e);
      };
      class tb {
        async connect() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tG(),
            t = await this.triggerAppleSignInModal(e);
          if (t.isFailure()) return t;
          let r = t.value,
            n = (0, tq.y)(r);
          return n.nonce !== e
            ? (0, q.Rn)(new eA())
            : (0, q.Vp)({ id: N.SJ.fromProvider(N.Rq.APPLE, n.sub), idToken: r });
        }
        async triggerAppleSignInModal(e) {
          let t = (await r.e(9288).then(r.t.bind(r, 99288, 23))).auth;
          await t.init({
            clientId: this.clientId,
            redirectURI: this.redirectURI,
            nonce: e,
            usePopup: !0,
          });
          try {
            let e = await t.signIn();
            return (0, q.Vp)(new N.jt(e.authorization.id_token));
          } catch (e) {
            if ('object' == typeof e && null !== e && 'error' in e)
              switch (e.error) {
                case 'popup_closed_by_user':
                  return (0, q.Rn)(new eC());
                case 'popup_blocked_by_browser':
                  return (0, q.Rn)(new em());
                case 'user_trigger_new_signin_flow':
                  return (0, q.Rn)(new eE());
              }
            return (0, q.Rn)(new eA());
          }
        }
        constructor(e, t) {
          (this.clientId = e), (this.redirectURI = t);
        }
      }
      class tj {
        getItem(e) {
          return this.storage.getItem(this.formatKey(e));
        }
        setItem(e, t) {
          this.storage.setItem(this.formatKey(e), t);
        }
        removeItem(e) {
          this.storage.removeItem(this.formatKey(e));
        }
        formatKey(e) {
          return ''.concat(this.keyPrefix, ':').concat(e);
        }
        static forApp(e) {
          return new tj(e.host);
        }
        constructor(e) {
          (this.keyPrefix = e), (this.storage = window.localStorage);
        }
      }
      let tV = (e) => {
        let { environment: t, appOrigin: r } = e;
        return tP({
          environment: t,
          encryptionStandards: {
            aes: { encrypt: s, decrypt: i },
            keccak: (e) => (0, p.w)(e),
            hkdf: (e, t) => K(e, t),
            scrypt: (e, t) => D(e, t),
            rsa: { generateKeyPair: () => T(h.ENCRYPT), encrypt: k, decrypt: g },
            randomBytes: R.O6,
            crockfordBase32: { encode: (e) => c.encode(e), decode: (e) => c.decode(e) },
          },
          externalAccount: {
            providers: {
              [N.Rq.APPLE]: () => {
                let { clientId: e, redirectURI: r } = t.externalAccountsConfig[N.Rq.APPLE];
                return new tb(e, r);
              },
            },
          },
          EtherWalletConstructor: tU,
          storage: tj.forApp(r),
        });
      };
    },
    237: function (e) {
      e.exports = {
        container: 'styles_container__mF873',
        children: 'styles_children__Yd_1n',
        childrenInner: 'styles_childrenInner__8_5fw',
        spinner: 'styles_spinner__Xwp1T',
        prefixIcon: 'styles_prefixIcon__jmsdf',
        suffixIcon: 'styles_suffixIcon__zuKET',
      };
    },
    31994: function (e) {
      e.exports = {
        container: 'styles_container__mGeE3',
        slotBorderInner: 'styles_slotBorderInner__pAdte',
        label: 'styles_label__OWSag',
        inputContainer: 'styles_inputContainer__K8Rz6',
        input: 'styles_input__R4xT8',
        outlinedInput: 'styles_outlinedInput__1BA_t',
        spinner: 'styles_spinner__vxD3a',
        slotBorder: 'styles_slotBorder__jU3_F',
        slot: 'styles_slot__sA0Cm',
        character: 'styles_character__OeMS1',
        loading: 'styles_loading__qHFs5',
        'slots-loading': 'styles_slots-loading__QY_Zm',
        success: 'styles_success___95MT',
        divider: 'styles_divider__orT_k',
        placeholder: 'styles_placeholder__ijMm2',
        fullPaste: 'styles_fullPaste__1yrX_',
        'slots-full-paste': 'styles_slots-full-paste__qPZIL',
        danger: 'styles_danger__Bt41n',
        'slots-success': 'styles_slots-success__TLvh5',
        caret: 'styles_caret__JZaLs',
        'slots-success-outlined': 'styles_slots-success-outlined__I4Hug',
        error: 'styles_error__0OKKP',
        shake: 'styles_shake__3wNfM',
      };
    },
    2892: function (e) {
      e.exports = {
        container: 'styles_container__c5eSM',
        toast: 'styles_toast___5Y5X',
        content: 'styles_content__vgtko',
        message: 'styles_message__FdJTY',
        cta: 'styles_cta__rGjVS',
      };
    },
  },
]);
