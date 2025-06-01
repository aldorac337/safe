'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9862],
  {
    23508: function (e, t, n) {
      var r = n(64836);
      t.Z = void 0;
      var o = r(n(64938)),
        i = n(85893);
      t.Z = (0, o.default)(
        (0, i.jsx)('path', { d: 'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z' }),
        'ExpandMore'
      );
    },
    6571: function (e, t, n) {
      var r = n(82066),
        o = n(85893);
      t.Z = (0, r.Z)(
        (0, o.jsx)('path', { d: 'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z' }),
        'ExpandMore'
      );
    },
    67358: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var r = n(87462),
        o = n(63366),
        i = n(67294),
        a = (n(59864), n(63961)),
        s = n(94780),
        d = n(90948),
        l = n(28628),
        c = n(57922),
        u = n(90629),
        p = n(64861),
        m = n(49299),
        h = n(80560),
        f = n(1588),
        v = n(34867);
      function g(e) {
        return (0, v.ZP)('MuiAccordion', e);
      }
      var b = (0, f.Z)('MuiAccordion', [
          'root',
          'rounded',
          'expanded',
          'disabled',
          'gutters',
          'region',
        ]),
        x = n(85893);
      const Z = [
          'children',
          'className',
          'defaultExpanded',
          'disabled',
          'disableGutters',
          'expanded',
          'onChange',
          'square',
          'slots',
          'slotProps',
          'TransitionComponent',
          'TransitionProps',
        ],
        w = (0, d.ZP)(u.Z, {
          name: 'MuiAccordion',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              { [`& .${b.region}`]: t.region },
              t.root,
              !n.square && t.rounded,
              !n.disableGutters && t.gutters,
            ];
          },
        })(
          ({ theme: e }) => {
            const t = { duration: e.transitions.duration.shortest };
            return {
              position: 'relative',
              transition: e.transitions.create(['margin'], t),
              overflowAnchor: 'none',
              '&::before': {
                position: 'absolute',
                left: 0,
                top: -1,
                right: 0,
                height: 1,
                content: '""',
                opacity: 1,
                backgroundColor: (e.vars || e).palette.divider,
                transition: e.transitions.create(['opacity', 'background-color'], t),
              },
              '&:first-of-type': { '&::before': { display: 'none' } },
              [`&.${b.expanded}`]: {
                '&::before': { opacity: 0 },
                '&:first-of-type': { marginTop: 0 },
                '&:last-of-type': { marginBottom: 0 },
                '& + &': { '&::before': { display: 'none' } },
              },
              [`&.${b.disabled}`]: {
                backgroundColor: (e.vars || e).palette.action.disabledBackground,
              },
            };
          },
          ({ theme: e }) => ({
            variants: [
              {
                props: (e) => !e.square,
                style: {
                  borderRadius: 0,
                  '&:first-of-type': {
                    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
                    borderTopRightRadius: (e.vars || e).shape.borderRadius,
                  },
                  '&:last-of-type': {
                    borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
                    borderBottomRightRadius: (e.vars || e).shape.borderRadius,
                    '@supports (-ms-ime-align: auto)': {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                  },
                },
              },
              {
                props: (e) => !e.disableGutters,
                style: { [`&.${b.expanded}`]: { margin: '16px 0' } },
              },
            ],
          })
        );
      var y = i.forwardRef(function (e, t) {
        const n = (0, l.i)({ props: e, name: 'MuiAccordion' }),
          {
            children: d,
            className: u,
            defaultExpanded: f = !1,
            disabled: v = !1,
            disableGutters: b = !1,
            expanded: y,
            onChange: E,
            square: R = !1,
            slots: $ = {},
            slotProps: S = {},
            TransitionComponent: M,
            TransitionProps: C,
          } = n,
          P = (0, o.Z)(n, Z),
          [N, I] = (0, m.Z)({ controlled: y, default: f, name: 'Accordion', state: 'expanded' }),
          A = i.useCallback(
            (e) => {
              I(!N), E && E(e, !N);
            },
            [N, E, I]
          ),
          [j, ...k] = i.Children.toArray(d),
          z = i.useMemo(
            () => ({ expanded: N, disabled: v, disableGutters: b, toggle: A }),
            [N, v, b, A]
          ),
          L = (0, r.Z)({}, n, { square: R, disabled: v, disableGutters: b, expanded: N }),
          G = ((e) => {
            const { classes: t, square: n, expanded: r, disabled: o, disableGutters: i } = e,
              a = {
                root: ['root', !n && 'rounded', r && 'expanded', o && 'disabled', !i && 'gutters'],
                region: ['region'],
              };
            return (0, s.Z)(a, g, t);
          })(L),
          T = (0, r.Z)({ transition: M }, $),
          B = (0, r.Z)({ transition: C }, S),
          [W, D] = (0, h.Z)('transition', {
            elementType: c.Z,
            externalForwardedProps: { slots: T, slotProps: B },
            ownerState: L,
          });
        return (0, x.jsxs)(
          w,
          (0, r.Z)({ className: (0, a.Z)(G.root, u), ref: t, ownerState: L, square: R }, P, {
            children: [
              (0, x.jsx)(p.Z.Provider, { value: z, children: j }),
              (0, x.jsx)(
                W,
                (0, r.Z)({ in: N, timeout: 'auto' }, D, {
                  children: (0, x.jsx)('div', {
                    'aria-labelledby': j.props.id,
                    id: j.props['aria-controls'],
                    role: 'region',
                    className: G.region,
                    children: k,
                  }),
                })
              ),
            ],
          })
        );
      });
    },
    64861: function (e, t, n) {
      const r = n(67294).createContext({});
      t.Z = r;
    },
    22797: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var r = n(87462),
        o = n(63366),
        i = n(67294),
        a = n(63961),
        s = n(94780),
        d = n(90948),
        l = n(28628),
        c = n(1588),
        u = n(34867);
      function p(e) {
        return (0, u.ZP)('MuiAccordionDetails', e);
      }
      (0, c.Z)('MuiAccordionDetails', ['root']);
      var m = n(85893);
      const h = ['className'],
        f = (0, d.ZP)('div', {
          name: 'MuiAccordionDetails',
          slot: 'Root',
          overridesResolver: (e, t) => t.root,
        })(({ theme: e }) => ({ padding: e.spacing(1, 2, 2) }));
      var v = i.forwardRef(function (e, t) {
        const n = (0, l.i)({ props: e, name: 'MuiAccordionDetails' }),
          { className: i } = n,
          d = (0, o.Z)(n, h),
          c = n,
          u = ((e) => {
            const { classes: t } = e;
            return (0, s.Z)({ root: ['root'] }, p, t);
          })(c);
        return (0, m.jsx)(
          f,
          (0, r.Z)({ className: (0, a.Z)(u.root, i), ref: t, ownerState: c }, d)
        );
      });
    },
    38895: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      });
      var r = n(87462),
        o = n(63366),
        i = n(67294),
        a = n(63961),
        s = n(94780),
        d = n(90948),
        l = n(28628),
        c = n(47739),
        u = n(64861),
        p = n(1588),
        m = n(34867);
      function h(e) {
        return (0, m.ZP)('MuiAccordionSummary', e);
      }
      var f = (0, p.Z)('MuiAccordionSummary', [
          'root',
          'expanded',
          'focusVisible',
          'disabled',
          'gutters',
          'contentGutters',
          'content',
          'expandIconWrapper',
        ]),
        v = n(85893);
      const g = ['children', 'className', 'expandIcon', 'focusVisibleClassName', 'onClick'],
        b = (0, d.ZP)(c.Z, {
          name: 'MuiAccordionSummary',
          slot: 'Root',
          overridesResolver: (e, t) => t.root,
        })(({ theme: e }) => {
          const t = { duration: e.transitions.duration.shortest };
          return {
            display: 'flex',
            minHeight: 48,
            padding: e.spacing(0, 2),
            transition: e.transitions.create(['min-height', 'background-color'], t),
            [`&.${f.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
            [`&.${f.disabled}`]: { opacity: (e.vars || e).palette.action.disabledOpacity },
            [`&:hover:not(.${f.disabled})`]: { cursor: 'pointer' },
            variants: [
              {
                props: (e) => !e.disableGutters,
                style: { [`&.${f.expanded}`]: { minHeight: 64 } },
              },
            ],
          };
        }),
        x = (0, d.ZP)('div', {
          name: 'MuiAccordionSummary',
          slot: 'Content',
          overridesResolver: (e, t) => t.content,
        })(({ theme: e }) => ({
          display: 'flex',
          flexGrow: 1,
          margin: '12px 0',
          variants: [
            {
              props: (e) => !e.disableGutters,
              style: {
                transition: e.transitions.create(['margin'], {
                  duration: e.transitions.duration.shortest,
                }),
                [`&.${f.expanded}`]: { margin: '20px 0' },
              },
            },
          ],
        })),
        Z = (0, d.ZP)('div', {
          name: 'MuiAccordionSummary',
          slot: 'ExpandIconWrapper',
          overridesResolver: (e, t) => t.expandIconWrapper,
        })(({ theme: e }) => ({
          display: 'flex',
          color: (e.vars || e).palette.action.active,
          transform: 'rotate(0deg)',
          transition: e.transitions.create('transform', {
            duration: e.transitions.duration.shortest,
          }),
          [`&.${f.expanded}`]: { transform: 'rotate(180deg)' },
        }));
      var w = i.forwardRef(function (e, t) {
        const n = (0, l.i)({ props: e, name: 'MuiAccordionSummary' }),
          { children: d, className: c, expandIcon: p, focusVisibleClassName: m, onClick: f } = n,
          w = (0, o.Z)(n, g),
          { disabled: y = !1, disableGutters: E, expanded: R, toggle: $ } = i.useContext(u.Z),
          S = (0, r.Z)({}, n, { expanded: R, disabled: y, disableGutters: E }),
          M = ((e) => {
            const { classes: t, expanded: n, disabled: r, disableGutters: o } = e,
              i = {
                root: ['root', n && 'expanded', r && 'disabled', !o && 'gutters'],
                focusVisible: ['focusVisible'],
                content: ['content', n && 'expanded', !o && 'contentGutters'],
                expandIconWrapper: ['expandIconWrapper', n && 'expanded'],
              };
            return (0, s.Z)(i, h, t);
          })(S);
        return (0, v.jsxs)(
          b,
          (0, r.Z)(
            {
              focusRipple: !1,
              disableRipple: !0,
              disabled: y,
              component: 'div',
              'aria-expanded': R,
              className: (0, a.Z)(M.root, c),
              focusVisibleClassName: (0, a.Z)(M.focusVisible, m),
              onClick: (e) => {
                $ && $(e), f && f(e);
              },
              ref: t,
              ownerState: S,
            },
            w,
            {
              children: [
                (0, v.jsx)(x, { className: M.content, ownerState: S, children: d }),
                p && (0, v.jsx)(Z, { className: M.expandIconWrapper, ownerState: S, children: p }),
              ],
            }
          )
        );
      });
    },
    57922: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return $;
        },
      });
      var r = n(63366),
        o = n(87462),
        i = n(67294),
        a = n(63961),
        s = n(8662),
        d = n(46271),
        l = n(94780),
        c = n(90948),
        u = n(28628),
        p = n(96067),
        m = n(30577),
        h = n(2734),
        f = n(51705),
        v = n(1588),
        g = n(34867);
      function b(e) {
        return (0, g.ZP)('MuiCollapse', e);
      }
      (0, v.Z)('MuiCollapse', [
        'root',
        'horizontal',
        'vertical',
        'entered',
        'hidden',
        'wrapper',
        'wrapperInner',
      ]);
      var x = n(85893);
      const Z = [
          'addEndListener',
          'children',
          'className',
          'collapsedSize',
          'component',
          'easing',
          'in',
          'onEnter',
          'onEntered',
          'onEntering',
          'onExit',
          'onExited',
          'onExiting',
          'orientation',
          'style',
          'timeout',
          'TransitionComponent',
        ],
        w = (0, c.ZP)('div', {
          name: 'MuiCollapse',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              t[n.orientation],
              'entered' === n.state && t.entered,
              'exited' === n.state && !n.in && '0px' === n.collapsedSize && t.hidden,
            ];
          },
        })(({ theme: e, ownerState: t }) =>
          (0, o.Z)(
            { height: 0, overflow: 'hidden', transition: e.transitions.create('height') },
            'horizontal' === t.orientation && {
              height: 'auto',
              width: 0,
              transition: e.transitions.create('width'),
            },
            'entered' === t.state &&
              (0, o.Z)(
                { height: 'auto', overflow: 'visible' },
                'horizontal' === t.orientation && { width: 'auto' }
              ),
            'exited' === t.state && !t.in && '0px' === t.collapsedSize && { visibility: 'hidden' }
          )
        ),
        y = (0, c.ZP)('div', {
          name: 'MuiCollapse',
          slot: 'Wrapper',
          overridesResolver: (e, t) => t.wrapper,
        })(({ ownerState: e }) =>
          (0, o.Z)(
            { display: 'flex', width: '100%' },
            'horizontal' === e.orientation && { width: 'auto', height: '100%' }
          )
        ),
        E = (0, c.ZP)('div', {
          name: 'MuiCollapse',
          slot: 'WrapperInner',
          overridesResolver: (e, t) => t.wrapperInner,
        })(({ ownerState: e }) =>
          (0, o.Z)(
            { width: '100%' },
            'horizontal' === e.orientation && { width: 'auto', height: '100%' }
          )
        ),
        R = i.forwardRef(function (e, t) {
          const n = (0, u.i)({ props: e, name: 'MuiCollapse' }),
            {
              addEndListener: c,
              children: v,
              className: g,
              collapsedSize: R = '0px',
              component: $,
              easing: S,
              in: M,
              onEnter: C,
              onEntered: P,
              onEntering: N,
              onExit: I,
              onExited: A,
              onExiting: j,
              orientation: k = 'vertical',
              style: z,
              timeout: L = p.x9.standard,
              TransitionComponent: G = s.ZP,
            } = n,
            T = (0, r.Z)(n, Z),
            B = (0, o.Z)({}, n, { orientation: k, collapsedSize: R }),
            W = ((e) => {
              const { orientation: t, classes: n } = e,
                r = {
                  root: ['root', `${t}`],
                  entered: ['entered'],
                  hidden: ['hidden'],
                  wrapper: ['wrapper', `${t}`],
                  wrapperInner: ['wrapperInner', `${t}`],
                };
              return (0, l.Z)(r, b, n);
            })(B),
            D = (0, h.Z)(),
            V = (0, d.Z)(),
            q = i.useRef(null),
            H = i.useRef(),
            F = 'number' === typeof R ? `${R}px` : R,
            _ = 'horizontal' === k,
            O = _ ? 'width' : 'height',
            J = i.useRef(null),
            K = (0, f.Z)(t, J),
            Q = (e) => (t) => {
              if (e) {
                const n = J.current;
                void 0 === t ? e(n) : e(n, t);
              }
            },
            U = () => (q.current ? q.current[_ ? 'clientWidth' : 'clientHeight'] : 0),
            X = Q((e, t) => {
              q.current && _ && (q.current.style.position = 'absolute'),
                (e.style[O] = F),
                C && C(e, t);
            }),
            Y = Q((e, t) => {
              const n = U();
              q.current && _ && (q.current.style.position = '');
              const { duration: r, easing: o } = (0, m.C)(
                { style: z, timeout: L, easing: S },
                { mode: 'enter' }
              );
              if ('auto' === L) {
                const t = D.transitions.getAutoHeightDuration(n);
                (e.style.transitionDuration = `${t}ms`), (H.current = t);
              } else e.style.transitionDuration = 'string' === typeof r ? r : `${r}ms`;
              (e.style[O] = `${n}px`), (e.style.transitionTimingFunction = o), N && N(e, t);
            }),
            ee = Q((e, t) => {
              (e.style[O] = 'auto'), P && P(e, t);
            }),
            te = Q((e) => {
              (e.style[O] = `${U()}px`), I && I(e);
            }),
            ne = Q(A),
            re = Q((e) => {
              const t = U(),
                { duration: n, easing: r } = (0, m.C)(
                  { style: z, timeout: L, easing: S },
                  { mode: 'exit' }
                );
              if ('auto' === L) {
                const n = D.transitions.getAutoHeightDuration(t);
                (e.style.transitionDuration = `${n}ms`), (H.current = n);
              } else e.style.transitionDuration = 'string' === typeof n ? n : `${n}ms`;
              (e.style[O] = F), (e.style.transitionTimingFunction = r), j && j(e);
            });
          return (0, x.jsx)(
            G,
            (0, o.Z)(
              {
                in: M,
                onEnter: X,
                onEntered: ee,
                onEntering: Y,
                onExit: te,
                onExited: ne,
                onExiting: re,
                addEndListener: (e) => {
                  'auto' === L && V.start(H.current || 0, e), c && c(J.current, e);
                },
                nodeRef: J,
                timeout: 'auto' === L ? null : L,
              },
              T,
              {
                children: (e, t) =>
                  (0, x.jsx)(
                    w,
                    (0, o.Z)(
                      {
                        as: $,
                        className: (0, a.Z)(
                          W.root,
                          g,
                          { entered: W.entered, exited: !M && '0px' === F && W.hidden }[e]
                        ),
                        style: (0, o.Z)({ [_ ? 'minWidth' : 'minHeight']: F }, z),
                        ref: K,
                      },
                      t,
                      {
                        ownerState: (0, o.Z)({}, B, { state: e }),
                        children: (0, x.jsx)(y, {
                          ownerState: (0, o.Z)({}, B, { state: e }),
                          className: W.wrapper,
                          ref: q,
                          children: (0, x.jsx)(E, {
                            ownerState: (0, o.Z)({}, B, { state: e }),
                            className: W.wrapperInner,
                            children: v,
                          }),
                        }),
                      }
                    )
                  ),
              }
            )
          );
        });
      R.muiSupportAuto = !0;
      var $ = R;
    },
    87109: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var r = n(63366),
        o = n(87462),
        i = n(67294),
        a = n(63961),
        s = n(94780),
        d = n(98216),
        l = n(15861),
        c = n(47167),
        u = n(74423),
        p = n(90948),
        m = n(1588),
        h = n(34867);
      function f(e) {
        return (0, h.ZP)('MuiInputAdornment', e);
      }
      var v,
        g = (0, m.Z)('MuiInputAdornment', [
          'root',
          'filled',
          'standard',
          'outlined',
          'positionStart',
          'positionEnd',
          'disablePointerEvents',
          'hiddenLabel',
          'sizeSmall',
        ]),
        b = n(28628),
        x = n(85893);
      const Z = [
          'children',
          'className',
          'component',
          'disablePointerEvents',
          'disableTypography',
          'position',
          'variant',
        ],
        w = (0, p.ZP)('div', {
          name: 'MuiInputAdornment',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              t[`position${(0, d.Z)(n.position)}`],
              !0 === n.disablePointerEvents && t.disablePointerEvents,
              t[n.variant],
            ];
          },
        })(({ theme: e, ownerState: t }) =>
          (0, o.Z)(
            {
              display: 'flex',
              height: '0.01em',
              maxHeight: '2em',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              color: (e.vars || e).palette.action.active,
            },
            'filled' === t.variant && {
              [`&.${g.positionStart}&:not(.${g.hiddenLabel})`]: { marginTop: 16 },
            },
            'start' === t.position && { marginRight: 8 },
            'end' === t.position && { marginLeft: 8 },
            !0 === t.disablePointerEvents && { pointerEvents: 'none' }
          )
        );
      var y = i.forwardRef(function (e, t) {
        const n = (0, b.i)({ props: e, name: 'MuiInputAdornment' }),
          {
            children: p,
            className: m,
            component: h = 'div',
            disablePointerEvents: g = !1,
            disableTypography: y = !1,
            position: E,
            variant: R,
          } = n,
          $ = (0, r.Z)(n, Z),
          S = (0, u.Z)() || {};
        let M = R;
        R && S.variant, S && !M && (M = S.variant);
        const C = (0, o.Z)({}, n, {
            hiddenLabel: S.hiddenLabel,
            size: S.size,
            disablePointerEvents: g,
            position: E,
            variant: M,
          }),
          P = ((e) => {
            const {
                classes: t,
                disablePointerEvents: n,
                hiddenLabel: r,
                position: o,
                size: i,
                variant: a,
              } = e,
              l = {
                root: [
                  'root',
                  n && 'disablePointerEvents',
                  o && `position${(0, d.Z)(o)}`,
                  a,
                  r && 'hiddenLabel',
                  i && `size${(0, d.Z)(i)}`,
                ],
              };
            return (0, s.Z)(l, f, t);
          })(C);
        return (0, x.jsx)(c.Z.Provider, {
          value: null,
          children: (0, x.jsx)(
            w,
            (0, o.Z)({ as: h, ownerState: C, className: (0, a.Z)(P.root, m), ref: t }, $, {
              children:
                'string' !== typeof p || y
                  ? (0, x.jsxs)(i.Fragment, {
                      children: [
                        'start' === E
                          ? v ||
                            (v = (0, x.jsx)('span', {
                              className: 'notranslate',
                              children: '\u200b',
                            }))
                          : null,
                        p,
                      ],
                    })
                  : (0, x.jsx)(l.Z, { color: 'text.secondary', children: p }),
            })
          ),
        });
      });
    },
    15186: function (e, t, n) {
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 2,
              stroke: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          r.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
          })
        );
      });
      t.Z = o;
    },
    53737: function (e, t, n) {
      var r = n(67294);
      const o = r.forwardRef(function (e, t) {
        return r.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 2,
              stroke: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          r.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
          })
        );
      });
      t.Z = o;
    },
    48120: function (e, t, n) {
      n.d(t, {
        v: function () {
          return i;
        },
      });
      var r = n(36117);
      class o extends r.G {
        constructor({ value: e }) {
          super(`Number \`${e}\` is not a valid decimal number.`, {
            name: 'InvalidDecimalNumberError',
          });
        }
      }
      function i(e, t) {
        if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e)) throw new o({ value: e });
        let [n, r = '0'] = e.split('.');
        const i = n.startsWith('-');
        if ((i && (n = n.slice(1)), (r = r.replace(/(0+)$/, '')), 0 === t))
          1 === Math.round(Number(`.${r}`)) && (n = `${BigInt(n) + 1n}`), (r = '');
        else if (r.length > t) {
          const [e, o, i] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)],
            a = Math.round(Number(`${o}.${i}`));
          (r = a > 9 ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, '0') : `${e}${a}`),
            r.length > t && ((r = r.slice(1)), (n = `${BigInt(n) + 1n}`)),
            (r = r.slice(0, t));
        } else r = r.padEnd(t, '0');
        return BigInt(`${i ? '-' : ''}${n}${r}`);
      }
    },
  },
]);
