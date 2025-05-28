'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7462],
  {
    62753: function (e, r, t) {
      var n = t(64836);
      r.Z = void 0;
      var o = n(t(64938)),
        i = t(85893);
      r.Z = (0, o.default)(
        (0, i.jsx)('path', {
          d: 'm19.77 7.23.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 10H6V5h6zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        }),
        'LocalGasStation'
      );
    },
    21737: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return M;
        },
      });
      var n = t(63366),
        o = t(87462),
        i = t(67294),
        s = t(63961),
        a = t(94780),
        c = t(2101),
        l = t(90948),
        d = t(28628),
        u = t(80560),
        p = t(98216),
        x = t(90629),
        f = t(1588),
        v = t(34867);
      function j(e) {
        return (0, v.ZP)('MuiAlert', e);
      }
      var m = (0, f.Z)('MuiAlert', [
          'root',
          'action',
          'icon',
          'message',
          'filled',
          'colorSuccess',
          'colorInfo',
          'colorWarning',
          'colorError',
          'filledSuccess',
          'filledInfo',
          'filledWarning',
          'filledError',
          'outlined',
          'outlinedSuccess',
          'outlinedInfo',
          'outlinedWarning',
          'outlinedError',
          'standard',
          'standardSuccess',
          'standardInfo',
          'standardWarning',
          'standardError',
        ]),
        h = t(93946),
        b = t(82066),
        g = t(85893),
        y = (0, b.Z)(
          (0, g.jsx)('path', {
            d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
          }),
          'SuccessOutlined'
        ),
        O = (0, b.Z)(
          (0, g.jsx)('path', {
            d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
          }),
          'ReportProblemOutlined'
        ),
        w = (0, b.Z)(
          (0, g.jsx)('path', {
            d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
          }),
          'ErrorOutline'
        ),
        C = (0, b.Z)(
          (0, g.jsx)('path', {
            d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
          }),
          'InfoOutlined'
        ),
        Z = (0, b.Z)(
          (0, g.jsx)('path', {
            d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
          }),
          'Close'
        );
      const k = [
          'action',
          'children',
          'className',
          'closeText',
          'color',
          'components',
          'componentsProps',
          'icon',
          'iconMapping',
          'onClose',
          'role',
          'severity',
          'slotProps',
          'slots',
          'variant',
        ],
        P = (0, l.ZP)(x.Z, {
          name: 'MuiAlert',
          slot: 'Root',
          overridesResolver: (e, r) => {
            const { ownerState: t } = e;
            return [r.root, r[t.variant], r[`${t.variant}${(0, p.Z)(t.color || t.severity)}`]];
          },
        })(({ theme: e }) => {
          const r = 'light' === e.palette.mode ? c._j : c.$n,
            t = 'light' === e.palette.mode ? c.$n : c._j;
          return (0, o.Z)({}, e.typography.body2, {
            backgroundColor: 'transparent',
            display: 'flex',
            padding: '6px 16px',
            variants: [
              ...Object.entries(e.palette)
                .filter(([, e]) => e.main && e.light)
                .map(([n]) => ({
                  props: { colorSeverity: n, variant: 'standard' },
                  style: {
                    color: e.vars ? e.vars.palette.Alert[`${n}Color`] : r(e.palette[n].light, 0.6),
                    backgroundColor: e.vars
                      ? e.vars.palette.Alert[`${n}StandardBg`]
                      : t(e.palette[n].light, 0.9),
                    [`& .${m.icon}`]: e.vars
                      ? { color: e.vars.palette.Alert[`${n}IconColor`] }
                      : { color: e.palette[n].main },
                  },
                })),
              ...Object.entries(e.palette)
                .filter(([, e]) => e.main && e.light)
                .map(([t]) => ({
                  props: { colorSeverity: t, variant: 'outlined' },
                  style: {
                    color: e.vars ? e.vars.palette.Alert[`${t}Color`] : r(e.palette[t].light, 0.6),
                    border: `1px solid ${(e.vars || e).palette[t].light}`,
                    [`& .${m.icon}`]: e.vars
                      ? { color: e.vars.palette.Alert[`${t}IconColor`] }
                      : { color: e.palette[t].main },
                  },
                })),
              ...Object.entries(e.palette)
                .filter(([, e]) => e.main && e.dark)
                .map(([r]) => ({
                  props: { colorSeverity: r, variant: 'filled' },
                  style: (0, o.Z)(
                    { fontWeight: e.typography.fontWeightMedium },
                    e.vars
                      ? {
                          color: e.vars.palette.Alert[`${r}FilledColor`],
                          backgroundColor: e.vars.palette.Alert[`${r}FilledBg`],
                        }
                      : {
                          backgroundColor:
                            'dark' === e.palette.mode ? e.palette[r].dark : e.palette[r].main,
                          color: e.palette.getContrastText(e.palette[r].main),
                        }
                  ),
                })),
            ],
          });
        }),
        S = (0, l.ZP)('div', {
          name: 'MuiAlert',
          slot: 'Icon',
          overridesResolver: (e, r) => r.icon,
        })({ marginRight: 12, padding: '7px 0', display: 'flex', fontSize: 22, opacity: 0.9 }),
        A = (0, l.ZP)('div', {
          name: 'MuiAlert',
          slot: 'Message',
          overridesResolver: (e, r) => r.message,
        })({ padding: '8px 0', minWidth: 0, overflow: 'auto' }),
        E = (0, l.ZP)('div', {
          name: 'MuiAlert',
          slot: 'Action',
          overridesResolver: (e, r) => r.action,
        })({
          display: 'flex',
          alignItems: 'flex-start',
          padding: '4px 0 0 16px',
          marginLeft: 'auto',
          marginRight: -8,
        }),
        D = {
          success: (0, g.jsx)(y, { fontSize: 'inherit' }),
          warning: (0, g.jsx)(O, { fontSize: 'inherit' }),
          error: (0, g.jsx)(w, { fontSize: 'inherit' }),
          info: (0, g.jsx)(C, { fontSize: 'inherit' }),
        };
      var M = i.forwardRef(function (e, r) {
        const t = (0, d.i)({ props: e, name: 'MuiAlert' }),
          {
            action: i,
            children: c,
            className: l,
            closeText: x = 'Close',
            color: f,
            components: v = {},
            componentsProps: m = {},
            icon: b,
            iconMapping: y = D,
            onClose: O,
            role: w = 'alert',
            severity: C = 'success',
            slotProps: M = {},
            slots: I = {},
            variant: R = 'standard',
          } = t,
          T = (0, n.Z)(t, k),
          L = (0, o.Z)({}, t, { color: f, severity: C, variant: R, colorSeverity: f || C }),
          N = ((e) => {
            const { variant: r, color: t, severity: n, classes: o } = e,
              i = {
                root: ['root', `color${(0, p.Z)(t || n)}`, `${r}${(0, p.Z)(t || n)}`, `${r}`],
                icon: ['icon'],
                message: ['message'],
                action: ['action'],
              };
            return (0, a.Z)(i, j, o);
          })(L),
          W = {
            slots: (0, o.Z)({ closeButton: v.CloseButton, closeIcon: v.CloseIcon }, I),
            slotProps: (0, o.Z)({}, m, M),
          },
          [z, B] = (0, u.Z)('closeButton', {
            elementType: h.Z,
            externalForwardedProps: W,
            ownerState: L,
          }),
          [H, $] = (0, u.Z)('closeIcon', {
            elementType: Z,
            externalForwardedProps: W,
            ownerState: L,
          });
        return (0, g.jsxs)(
          P,
          (0, o.Z)(
            { role: w, elevation: 0, ownerState: L, className: (0, s.Z)(N.root, l), ref: r },
            T,
            {
              children: [
                !1 !== b
                  ? (0, g.jsx)(S, { ownerState: L, className: N.icon, children: b || y[C] || D[C] })
                  : null,
                (0, g.jsx)(A, { ownerState: L, className: N.message, children: c }),
                null != i
                  ? (0, g.jsx)(E, { ownerState: L, className: N.action, children: i })
                  : null,
                null == i && O
                  ? (0, g.jsx)(E, {
                      ownerState: L,
                      className: N.action,
                      children: (0, g.jsx)(
                        z,
                        (0, o.Z)(
                          {
                            size: 'small',
                            'aria-label': x,
                            title: x,
                            color: 'inherit',
                            onClick: O,
                          },
                          B,
                          { children: (0, g.jsx)(H, (0, o.Z)({ fontSize: 'small' }, $)) }
                        )
                      ),
                    })
                  : null,
              ],
            }
          )
        );
      });
    },
    58941: function (e, r, t) {
      t.d(r, {
        o: function () {
          return m;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(57499),
        s = t(1279),
        a = t(2734),
        c = t(80822),
        l = t(15861),
        d = t(69417),
        u = t(70794),
        p = t(32867),
        x = t(85893),
        f = ['value', 'onInfoClick'];
      function v(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function j(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? v(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : v(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var m = function (e) {
        var r = e.value,
          t = e.onInfoClick,
          n = (0, o.Z)(e, f),
          v = (0, a.Z)().palette,
          m = Number((0, s.hE)(r).toFixed(2, u.O.ROUND_DOWN)),
          h = '';
        return (
          (h = m >= 3 ? v.success.main : m < 1.1 ? v.error.main : v.warning.main),
          (0, x.jsxs)(c.Z, {
            sx: {
              display: 'inline-flex',
              alignItems: { xs: 'flex-start', xsm: 'center' },
              flexDirection: { xs: 'column', xsm: 'row' },
            },
            'data-cy': 'HealthFactorTopPannel',
            children: [
              '-1' === r
                ? (0, x.jsx)(l.Z, {
                    variant: 'secondary14',
                    color: v.success.main,
                    children: '\u221e',
                  })
                : (0, x.jsx)(
                    p.B,
                    j({ value: m, sx: j({ color: h }, n.sx), visibleDecimals: 2, compact: !0 }, n)
                  ),
              t &&
                (0, x.jsx)(d.Z, {
                  onClick: t,
                  variant: 'surface',
                  size: 'small',
                  sx: { minWidth: 'unset', ml: { xs: 0, xsm: 2 } },
                  children: (0, x.jsx)(i.cC, { id: 'cLo09S' }),
                }),
            ],
          })
        );
      };
    },
    215: function (e, r, t) {
      t.d(r, {
        o: function () {
          return d;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(53219),
        s = t(85893),
        a = ['sx'];
      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function l(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? c(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : c(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var d = function (e) {
        var r = e.sx,
          t = (0, o.Z)(e, a);
        return (0, s.jsxs)(
          i.Z,
          l(
            l(
              {
                sx: l({ fill: 'none', stroke: '#A5A8B6' }, r),
                viewBox: '0 0 21 19',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-label': 'Wallet',
              },
              t
            ),
            {},
            {
              children: [
                (0, s.jsxs)('g', {
                  clipPath: 'url(#clip0_3719_3323)',
                  strokeWidth: '2',
                  children: [
                    (0, s.jsx)('path', {
                      d: 'M17.3203 17.398H3.32031C2.78988 17.398 2.28117 17.1872 1.9061 16.8122C1.53103 16.4371 1.32031 15.9284 1.32031 15.3979V6.39795C1.32031 5.86752 1.53103 5.35881 1.9061 4.98374C2.28117 4.60866 2.78988 4.39795 3.32031 4.39795H17.3203C17.8507 4.39795 18.3595 4.60866 18.7345 4.98374C19.1096 5.35881 19.3203 5.86752 19.3203 6.39795V15.3979C19.3203 15.9284 19.1096 16.4371 18.7345 16.8122C18.3595 17.1872 17.8507 17.398 17.3203 17.398Z',
                    }),
                    (0, s.jsx)('path', {
                      d: 'M14.8203 11.3979C14.6877 11.3979 14.5605 11.3453 14.4668 11.2515C14.373 11.1577 14.3203 11.0306 14.3203 10.8979C14.3203 10.7653 14.373 10.6382 14.4668 10.5444C14.5605 10.4506 14.6877 10.3979 14.8203 10.3979C14.9529 10.3979 15.0801 10.4506 15.1739 10.5444C15.2676 10.6382 15.3203 10.7653 15.3203 10.8979C15.3203 11.0306 15.2676 11.1577 15.1739 11.2515C15.0801 11.3453 14.9529 11.3979 14.8203 11.3979Z',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    (0, s.jsx)('path', {
                      d: 'M16.3203 4.39793V2.99993C16.3202 2.69343 16.2497 2.39106 16.1142 2.11615C15.9787 1.84124 15.7818 1.60116 15.5387 1.41444C15.2956 1.22773 15.0129 1.09937 14.7124 1.03929C14.4118 0.979209 14.1015 0.989009 13.8053 1.06793L2.80531 4.00093C2.37937 4.11444 2.00285 4.36549 1.7343 4.71506C1.46575 5.06462 1.32021 5.49312 1.32031 5.93393V6.39793',
                    }),
                  ],
                }),
                (0, s.jsx)('defs', {
                  children: (0, s.jsx)('clipPath', {
                    id: 'clip0_3719_3323',
                    children: (0, s.jsx)('rect', {
                      width: '20',
                      height: '19',
                      fill: 'white',
                      transform: 'translate(0.320312)',
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
    },
    64311: function (e, r, t) {
      t.d(r, {
        Ch: function () {
          return m;
        },
        a9: function () {
          return b;
        },
        r$: function () {
          return h;
        },
      });
      var n = t(59499),
        o = t(57499),
        i = t(38264),
        s = t(53219),
        a = t(2734),
        c = t(80822),
        l = t(15861),
        d = t(23795),
        u = t(2127),
        p = t(85893);
      function x(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function f(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? x(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : x(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var v = {
          borderRadius: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          p: '2px',
          mt: '2px',
          cursor: 'pointer',
          '&:hover': { opacity: 0.6 },
        },
        j = function (e) {
          var r = e.color;
          return (0, p.jsx)(s.Z, {
            sx: { ml: '3px', color: r || 'text.muted', fontSize: '14px' },
            children: (0, p.jsx)(i.Z, {}),
          });
        },
        m = function (e) {
          var r = e.typographyProps,
            t = (0, a.Z)(),
            n = f(
              {
                border: '1px solid '.concat(t.palette.warning.main),
                color: t.palette.warning.main,
              },
              v
            );
          return (0, p.jsx)(u.a, {
            withoutHover: !0,
            tooltipContent: (0, p.jsx)(g, { content: (0, p.jsx)(o.cC, { id: 'bXr0ee' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: n,
              children: [
                (0, p.jsx)(
                  l.Z,
                  f(
                    f(
                      {
                        variant: 'secondary12',
                        sx: { lineHeight: '0.75rem' },
                        color: t.palette.warning.main,
                      },
                      r
                    ),
                    {},
                    { children: (0, p.jsx)(o.cC, { id: 'KYAjf3' }) }
                  )
                ),
                (0, p.jsx)(j, { color: t.palette.warning.main }),
              ],
            }),
          });
        },
        h = function () {
          return (0, p.jsx)(u.a, {
            tooltipContent: (0, p.jsx)(g, { content: (0, p.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: v,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(j, {}),
              ],
            }),
          });
        },
        b = function () {
          return (0, p.jsx)(u.a, {
            tooltipContent: (0, p.jsx)(g, { content: (0, p.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: v,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(j, {}),
              ],
            }),
          });
        },
        g = function (e) {
          var r = e.content;
          return (0, p.jsxs)(c.Z, {
            children: [
              (0, p.jsx)(c.Z, { sx: { mb: 4 }, children: r }),
              (0, p.jsx)(l.Z, {
                variant: 'subheader2',
                color: 'text.secondary',
                children: (0, p.jsx)(o.cC, {
                  id: 'lfEjIE',
                  components: {
                    0: (0, p.jsx)(d.Z, {
                      href: 'https://docs.aave.com/faq/aave-v3-features#isolation-mode',
                      fontWeight: 500,
                    }),
                  },
                }),
              }),
            ],
          });
        };
    },
    20986: function (e, r, t) {
      t.d(r, {
        X: function () {
          return u;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(80822),
        s = t(15861),
        a = t(85893),
        c = ['caption', 'children', 'captionVariant', 'captionColor', 'align'];
      function l(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function d(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : l(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var u = function (e) {
        var r = e.caption,
          t = e.children,
          n = e.captionVariant,
          l = void 0 === n ? 'secondary16' : n,
          u = e.captionColor,
          p = e.align,
          x = void 0 === p ? 'center' : p,
          f = (0, o.Z)(e, c);
        return (0, a.jsxs)(
          i.Z,
          d(
            d({}, f),
            {},
            {
              sx: d({ display: 'flex', alignItems: x, justifyContent: 'space-between' }, f.sx),
              children: [
                r &&
                  (0, a.jsx)(s.Z, {
                    component: 'div',
                    variant: l,
                    color: u,
                    sx: { mr: 2 },
                    children: r,
                  }),
                t,
              ],
            }
          )
        );
      };
    },
    54165: function (e, r, t) {
      t.r(r),
        t.d(r, {
          FaucetModal: function () {
            return C;
          },
        });
      var n,
        o = t(59499),
        i = t(57499),
        s = (t(67294), t(44949)),
        a = t(15629),
        c = t(92519),
        l = t(80854),
        d = t(1279),
        u = t(83063),
        p = t(44880),
        x = t(67944),
        f = t(50029),
        v = t(87794),
        j = t.n(v),
        m = t(92997),
        h = t(3062),
        b = t(84207),
        g = t(85893),
        y = function (e) {
          var r = e.poolReserve,
            t = e.isWrongNetwork,
            n = e.blocked,
            o = (0, h.Y)(function (e) {
              return e.mint;
            }),
            s = (0, m.Q)({
              tryPermit: !1,
              handleGetTxns: (function () {
                var e = (0, f.Z)(
                  j().mark(function e() {
                    return j().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              o({ tokenSymbol: r.symbol, reserve: r.underlyingAsset })
                            );
                          case 1:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              skip: n,
            }),
            a = s.action,
            c = s.loadingTxns,
            l = s.mainTxState,
            d = s.requiresApproval;
          return (0, g.jsx)(b.B, {
            requiresApproval: d,
            blocked: n,
            preparingTransactions: c,
            handleAction: a,
            actionText: (0, g.jsx)(i.cC, { id: 'wb/r1O', values: { 0: r.symbol } }),
            actionInProgressText: (0, g.jsx)(i.cC, { id: 'NF0e1Q' }),
            mainTxState: l,
            isWrongNetwork: t,
          });
        };
      n || (n = {});
      var O = function (e) {
        var r = e.poolReserve,
          t = e.isWrongNetwork,
          n = (0, s.vR)(),
          o = n.gasLimit,
          a = n.mainTxState,
          c = n.txError,
          f = (0, l.gU)('1000', 18),
          v = l.Ry[r.symbol.toUpperCase()] ? l.Ry[r.symbol.toUpperCase()] : f,
          j = (0, d.Fv)(v, r.decimals);
        return a.success
          ? (0, g.jsx)(p.R, {
              action: (0, g.jsx)(i.cC, { id: 'fZ5Vnu' }),
              symbol: r.symbol,
              amount: j,
            })
          : (0, g.jsxs)(g.Fragment, {
              children: [
                (0, g.jsx)(x.m6, {
                  gasLimit: o,
                  children: (0, g.jsx)(x.oD, {
                    description: (0, g.jsx)(i.cC, { id: 'hehnjM' }),
                    iconSymbol: r.symbol,
                    symbol: r.symbol,
                    value: j,
                  }),
                }),
                c && (0, g.jsx)(u.Q, { txError: c }),
                (0, g.jsx)(y, { poolReserve: r, isWrongNetwork: t, blocked: !1 }),
              ],
            });
      };
      function w(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      var C = function () {
        var e = (0, s.vR)(),
          r = e.type,
          t = e.close,
          n = e.args;
        return (0, g.jsx)(a.P, {
          open: r === s.w8.Faucet,
          setOpen: t,
          children: (0, g.jsx)(c.A, {
            title: (0, g.jsx)(i.cC, { id: 'BqWMDJ' }),
            underlyingAsset: n.underlyingAsset,
            children: function (e) {
              return (0, g.jsx)(
                O,
                (function (e) {
                  for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2
                      ? w(Object(t), !0).forEach(function (r) {
                          (0, o.Z)(e, r, t[r]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : w(Object(t)).forEach(function (r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                          });
                  }
                  return e;
                })({}, e)
              );
            },
          }),
        });
      };
    },
    40429: function (e, r, t) {
      t.d(r, {
        D: function () {
          return x;
        },
      });
      var n = t(57499),
        o = t(5506),
        i = t(52758),
        s = t(80822),
        a = t(53219),
        c = t(15861),
        l = t(23795),
        d = t(69417),
        u = t(44949),
        p = t(85893),
        x = function (e) {
          var r = e.txError,
            t = (0, u.vR)().close;
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsxs)(s.Z, {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: '92px',
                },
                children: [
                  (0, p.jsx)(s.Z, {
                    sx: {
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'error.200',
                      borderRadius: '50%',
                      mt: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, p.jsx)(a.Z, {
                      sx: { color: 'error.main', fontSize: '32px' },
                      children: (0, p.jsx)(o.Z, {}),
                    }),
                  }),
                  (0, p.jsx)(c.Z, {
                    sx: { mt: 2 },
                    variant: 'h2',
                    children: (0, p.jsx)(n.cC, { id: 'u3ZeYl' }),
                  }),
                  (0, p.jsx)(c.Z, {
                    children: (0, p.jsx)(n.cC, {
                      id: 'DxfsGs',
                      components: {
                        0: (0, p.jsx)(l.Z, { href: 'https://discord.com/invite/aave' }),
                        1: (0, p.jsx)(l.Z, { href: 'https://github.com/aave/interface' }),
                      },
                    }),
                  }),
                  (0, p.jsxs)(d.Z, {
                    variant: 'outlined',
                    onClick: function () {
                      return navigator.clipboard.writeText(r.rawError.message.toString());
                    },
                    size: 'small',
                    sx: { mt: 6 },
                    children: [
                      (0, p.jsx)(n.cC, { id: 'X/ITG9' }),
                      (0, p.jsx)(a.Z, {
                        sx: { ml: 0.5, fontSize: '12px' },
                        children: (0, p.jsx)(i.Z, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, p.jsx)(s.Z, {
                sx: { display: 'flex', flexDirection: 'column', mt: 12 },
                children: (0, p.jsx)(d.Z, {
                  onClick: t,
                  variant: 'contained',
                  size: 'large',
                  sx: { minHeight: '44px' },
                  children: (0, p.jsx)(n.cC, { id: 'yz7wBu' }),
                }),
              }),
            ],
          });
        };
    },
    83063: function (e, r, t) {
      t.d(r, {
        Q: function () {
          return c;
        },
      });
      var n = t(57499),
        o = t(15861),
        i = t(69417),
        s = t(35783),
        a = t(85893),
        c = function (e) {
          var r = e.txError;
          return (0, a.jsx)(s.v, {
            severity: 'error',
            sx: { mt: 4, mb: 0 },
            children: (0, a.jsx)(o.Z, {
              variant: 'description',
              children: r.error
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      r.error,
                      ' ',
                      (0, a.jsx)(i.Z, {
                        sx: { verticalAlign: 'top' },
                        variant: 'text',
                        onClick: function () {
                          return navigator.clipboard.writeText(r.rawError.message.toString());
                        },
                        children: (0, a.jsx)(o.Z, {
                          variant: 'description',
                          children: (0, a.jsx)(n.cC, { id: 'qOqbD6' }),
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)(n.cC, {
                    id: 'hjDCQr',
                    components: {
                      0: (0, a.jsx)(i.Z, {
                        sx: { verticalAlign: 'top' },
                        onClick: function () {
                          return navigator.clipboard.writeText(r.rawError.message.toString());
                        },
                      }),
                      1: (0, a.jsx)(o.Z, { variant: 'description' }),
                    },
                  }),
            }),
          });
        };
    },
    92519: function (e, r, t) {
      t.d(r, {
        A: function () {
          return m;
        },
      });
      var n = t(80854),
        o = (t(67294), t(60377)),
        i = t(50060),
        s = t(89771),
        a = t(53097),
        c = t(44949),
        l = t(72005),
        d = t(3062),
        u = t(65361),
        p = t(79850),
        x = t(37096),
        f = t(19408),
        v = t(40429),
        j = t(85893),
        m = function (e) {
          var r,
            t,
            m = e.hideTitleSymbol,
            h = e.underlyingAsset,
            b = e.children,
            g = e.requiredChainId,
            y = e.title,
            O = e.keepWrappedSymbol,
            w = (0, l.Z)().readOnlyModeAddress,
            C = (0, d.Y)(function (e) {
              return e.currentMarketData;
            }),
            Z = (0, d.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            k = (0, i.P)(C).walletBalances,
            P = (0, o.HT)(),
            S = P.user,
            A = P.reserves,
            E = (0, c.vR)(),
            D = E.txError,
            M = E.mainTxState,
            I = (0, a.Q)(g),
            R = I.isWrongNetwork,
            T = I.requiredChainId;
          if (D && D.blocking) return (0, j.jsx)(v.D, { txError: D });
          var L = A.find(function (e) {
              return h.toLowerCase() === n.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : h === e.underlyingAsset;
            }),
            N =
              null === S || void 0 === S
                ? void 0
                : S.userReservesData.find(function (e) {
                    return h.toLowerCase() === n.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : h === e.underlyingAsset;
                  }),
            W = L.isWrappedBaseAsset && !O ? Z.baseAssetSymbol : L.symbol;
          return (0, j.jsxs)(s.hv, {
            asset: L,
            children: [
              !M.success && (0, j.jsx)(x.E, { title: y, symbol: m ? void 0 : W }),
              R &&
                !w &&
                (0, j.jsx)(f.I, {
                  networkName: (0, p.Mo)(T).name,
                  chainId: T,
                  event: { eventName: u.vh.SWITCH_NETWORK, eventParams: { asset: h } },
                }),
              b({
                isWrongNetwork: R,
                nativeBalance:
                  (null === (r = k[n.hP.toLowerCase()]) || void 0 === r ? void 0 : r.amount) || '0',
                tokenBalance:
                  (null === (t = k[L.underlyingAsset.toLowerCase()]) || void 0 === t
                    ? void 0
                    : t.amount) || '0',
                poolReserve: L,
                symbol: W,
                underlyingAsset: h,
                userReserve: N,
              }),
            ],
          });
        };
    },
    44880: function (e, r, t) {
      t.d(r, {
        R: function () {
          return j;
        },
      });
      var n = t(57499),
        o = t(75331),
        i = t(2734),
        s = t(80822),
        a = t(15861),
        c = t(69417),
        l = t(67294),
        d = t(215),
        u = t(32867),
        p = t(45640),
        x = t(72005),
        f = t(60386),
        v = t(85893),
        j = function (e) {
          var r = e.txHash,
            t = e.action,
            j = e.amount,
            m = e.symbol,
            h = e.collateral,
            b = e.rate,
            g = e.addToken,
            y = e.customAction,
            O = e.customText,
            w = (0, x.Z)().addERC20Token,
            C = (0, l.useState)(''),
            Z = C[0],
            k = C[1],
            P = (0, i.Z)();
          return (0, v.jsx)(f.R, {
            txHash: r,
            children: (0, v.jsxs)(s.Z, {
              sx: {
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              },
              children: [
                t &&
                  j &&
                  m &&
                  (0, v.jsx)(a.Z, {
                    children: (0, v.jsx)(n.cC, {
                      id: 'wAOL+X',
                      values: { action: t, symbol: m },
                      components: {
                        0: (0, v.jsx)(u.B, {
                          value: Number(j),
                          compact: !0,
                          variant: 'secondary14',
                        }),
                      },
                    }),
                  }),
                y && (0, v.jsxs)(a.Z, { children: [O, y] }),
                !t &&
                  !j &&
                  m &&
                  (0, v.jsxs)(a.Z, {
                    children: ['Your ', m, ' ', h ? 'now' : 'is not', ' used as collateral'],
                  }),
                b &&
                  (0, v.jsx)(a.Z, {
                    children: (0, v.jsx)(n.cC, {
                      id: 'f3W0Ej',
                      values: { 0: b === o.tk.Variable ? 'variable' : 'stable' },
                    }),
                  }),
                g &&
                  m &&
                  (0, v.jsxs)(s.Z, {
                    sx: function (e) {
                      return {
                        border:
                          'dark' === e.palette.mode
                            ? '1px solid '.concat(e.palette.divider)
                            : 'none',
                        background: 'dark' === e.palette.mode ? 'none' : '#F7F7F9',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: '24px',
                      };
                    },
                    children: [
                      (0, v.jsx)(p.T1, {
                        symbol: g.symbol,
                        aToken: !(!g || !g.aToken),
                        sx: { fontSize: '32px', mt: '12px', mb: '8px' },
                      }),
                      (0, v.jsx)(a.Z, {
                        variant: 'description',
                        color: 'text.primary',
                        sx: { mx: '24px' },
                        children: (0, v.jsx)(n.cC, {
                          id: 'YyydIq',
                          values: { 0: g && g.aToken ? 'aToken ' : 'token ' },
                        }),
                      }),
                      (0, v.jsxs)(c.Z, {
                        onClick: function () {
                          w({
                            address: g.address,
                            decimals: g.decimals,
                            symbol: g.aToken ? '' : g.symbol,
                            image: /_/.test(g.symbol) ? void 0 : Z,
                          });
                        },
                        variant: 'dark' === P.palette.mode ? 'outlined' : 'contained',
                        size: 'medium',
                        sx: { mt: '8px', mb: '12px' },
                        children: [
                          g.symbol &&
                            !/_/.test(g.symbol) &&
                            (0, v.jsx)(p.Js, {
                              symbol: g.symbol,
                              onImageGenerated: k,
                              aToken: g.aToken,
                            }),
                          (0, v.jsx)(d.o, { sx: { width: '20px', height: '20px' } }),
                          (0, v.jsx)(a.Z, {
                            variant: 'buttonM',
                            color: 'white',
                            ml: '4px',
                            children: (0, v.jsx)(n.cC, { id: '8Q51DU' }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
    },
    37096: function (e, r, t) {
      t.d(r, {
        E: function () {
          return i;
        },
      });
      var n = t(15861),
        o = t(85893),
        i = function (e) {
          var r = e.title,
            t = e.symbol;
          return (0, o.jsxs)(n.Z, {
            variant: 'h2',
            sx: { mb: 6 },
            children: [r, ' ', null !== t && void 0 !== t ? t : ''],
          });
        };
    },
    19408: function (e, r, t) {
      t.d(r, {
        I: function () {
          return j;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(57499),
        s = t(15861),
        a = t(69417),
        c = t(72005),
        l = t(3062),
        d = t(65361),
        u = t(35783),
        p = t(85893),
        x = ['networkName', 'chainId', 'event', 'funnel'];
      function f(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function v(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? f(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : f(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var j = function (e) {
        var r = e.networkName,
          t = e.chainId,
          n = e.event,
          f = e.funnel,
          j = (0, o.Z)(e, x),
          m = (0, c.Z)(),
          h = m.switchNetwork,
          b = m.switchNetworkError,
          g = (0, l.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, p.jsx)(
          u.v,
          v(
            v({ severity: 'error', icon: !1 }, j),
            {},
            {
              children: b
                ? (0, p.jsx)(s.Z, { children: (0, p.jsx)(i.cC, { id: '+eOPG+' }) })
                : (0, p.jsxs)(s.Z, {
                    variant: 'description',
                    children: [
                      (0, p.jsx)(i.cC, { id: 'nh2EJK', values: { networkName: r } }),
                      ' ',
                      (0, p.jsx)(a.Z, {
                        variant: 'text',
                        sx: { ml: '2px', verticalAlign: 'top' },
                        onClick: function () {
                          g(
                            d.vh.SWITCH_NETWORK,
                            v(
                              v({ funnel: f }, null === n || void 0 === n ? void 0 : n.eventParams),
                              {},
                              { network: r }
                            )
                          ),
                            h(t);
                        },
                        disableRipple: !0,
                        children: (0, p.jsx)(s.Z, {
                          variant: 'description',
                          children: (0, p.jsx)(i.cC, { id: '6s8L6f' }),
                        }),
                      }),
                    ],
                  }),
            }
          )
        );
      };
    },
    53097: function (e, r, t) {
      t.d(r, {
        Q: function () {
          return i;
        },
      });
      var n = t(72005),
        o = t(3062);
      function i(e) {
        var r = (0, o.Y)(function (e) {
            return e.currentChainId;
          }),
          t = e || r;
        return { isWrongNetwork: (0, n.Z)().chainId !== t, requiredChainId: t };
      }
    },
    64343: function (e, r, t) {
      var n = t(67294);
      const o = n.forwardRef(function (e, r) {
        return n.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 2,
              stroke: 'currentColor',
              'aria-hidden': 'true',
              ref: r,
            },
            e
          ),
          n.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M5 13l4 4L19 7',
          })
        );
      });
      r.Z = o;
    },
    52758: function (e, r, t) {
      var n = t(67294);
      const o = n.forwardRef(function (e, r) {
        return n.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 2,
              stroke: 'currentColor',
              'aria-hidden': 'true',
              ref: r,
            },
            e
          ),
          n.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
          })
        );
      });
      r.Z = o;
    },
    80227: function (e, r, t) {
      var n = t(67294);
      const o = n.forwardRef(function (e, r) {
        return n.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              'aria-hidden': 'true',
              ref: r,
            },
            e
          ),
          n.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z',
            clipRule: 'evenodd',
          })
        );
      });
      r.Z = o;
    },
    36864: function (e, r, t) {
      function n() {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      t.d(r, {
        Z: function () {
          return n;
        },
      });
    },
  },
]);
