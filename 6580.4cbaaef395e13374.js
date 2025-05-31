'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6580],
  {
    58941: function (e, r, t) {
      t.d(r, {
        o: function () {
          return j;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(57499),
        c = t(1279),
        a = t(2734),
        s = t(80822),
        l = t(15861),
        u = t(69417),
        d = t(70794),
        p = t(32867),
        f = t(85893),
        b = ['value', 'onInfoClick'];
      function m(e, r) {
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
            ? m(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : m(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var j = function (e) {
        var r = e.value,
          t = e.onInfoClick,
          n = (0, o.Z)(e, b),
          m = (0, a.Z)().palette,
          j = Number((0, c.hE)(r).toFixed(2, d.O.ROUND_DOWN)),
          x = '';
        return (
          (x = j >= 3 ? m.success.main : j < 1.1 ? m.error.main : m.warning.main),
          (0, f.jsxs)(s.Z, {
            sx: {
              display: 'inline-flex',
              alignItems: { xs: 'flex-start', xsm: 'center' },
              flexDirection: { xs: 'column', xsm: 'row' },
            },
            'data-cy': 'HealthFactorTopPannel',
            children: [
              '-1' === r
                ? (0, f.jsx)(l.Z, {
                    variant: 'secondary14',
                    color: m.success.main,
                    children: '\u221e',
                  })
                : (0, f.jsx)(
                    p.B,
                    v({ value: j, sx: v({ color: x }, n.sx), visibleDecimals: 2, compact: !0 }, n)
                  ),
              t &&
                (0, f.jsx)(u.Z, {
                  onClick: t,
                  variant: 'surface',
                  size: 'small',
                  sx: { minWidth: 'unset', ml: { xs: 0, xsm: 2 } },
                  children: (0, f.jsx)(i.cC, { id: 'cLo09S' }),
                }),
            ],
          })
        );
      };
    },
    49212: function (e, r, t) {
      t.d(r, {
        G: function () {
          return x;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(38264),
        c = t(80822),
        a = t(15861),
        s = t(93946),
        l = t(53219),
        u = t(67294),
        d = t(3062),
        p = t(2127),
        f = t(85893),
        b = ['sx'],
        m = [
          'text',
          'icon',
          'iconSize',
          'iconColor',
          'iconMargin',
          'children',
          'textColor',
          'wrapperProps',
          'event',
          'open',
          'setOpen',
        ];
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
      var x = function (e) {
        var r = e.text,
          t = e.icon,
          n = e.iconSize,
          v = void 0 === n ? 14 : n,
          x = e.iconColor,
          y = e.iconMargin,
          h = e.children,
          O = e.textColor,
          g = e.wrapperProps,
          w = (g = void 0 === g ? {} : g).sx,
          P = (0, o.Z)(g, b),
          D = e.event,
          Z = e.open,
          C = void 0 !== Z && Z,
          k = e.setOpen,
          S = (0, o.Z)(e, m),
          E = (0, u.useState)(C),
          N = E[0],
          I = E[1],
          A = (0, d.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, f.jsxs)(
          c.Z,
          j(
            j({ sx: j({ display: 'flex', alignItems: 'center' }, w) }, P),
            {},
            {
              children: [
                r && (0, f.jsx)(a.Z, j(j({}, S), {}, { color: O, children: r })),
                (0, f.jsx)(p.a, {
                  tooltipContent: (0, f.jsx)(f.Fragment, { children: h }),
                  open: N,
                  setOpen: function () {
                    k && k(!N), I(!N);
                  },
                  children: (0, f.jsx)(s.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: v,
                      height: v,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: y || 0.5,
                    },
                    onClick: function () {
                      D && A(D.eventName, j({}, D.eventParams));
                    },
                    children: (0, f.jsx)(l.Z, {
                      sx: {
                        fontSize: v,
                        color: x || (N ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: x || 'info.main' },
                      },
                      children: t || (0, f.jsx)(i.Z, {}),
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
          return j;
        },
        a9: function () {
          return y;
        },
        r$: function () {
          return x;
        },
      });
      var n = t(59499),
        o = t(57499),
        i = t(38264),
        c = t(53219),
        a = t(2734),
        s = t(80822),
        l = t(15861),
        u = t(23795),
        d = t(2127),
        p = t(85893);
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
      function b(e) {
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
      var m = {
          borderRadius: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          p: '2px',
          mt: '2px',
          cursor: 'pointer',
          '&:hover': { opacity: 0.6 },
        },
        v = function (e) {
          var r = e.color;
          return (0, p.jsx)(c.Z, {
            sx: { ml: '3px', color: r || 'text.muted', fontSize: '14px' },
            children: (0, p.jsx)(i.Z, {}),
          });
        },
        j = function (e) {
          var r = e.typographyProps,
            t = (0, a.Z)(),
            n = b(
              {
                border: '1px solid '.concat(t.palette.warning.main),
                color: t.palette.warning.main,
              },
              m
            );
          return (0, p.jsx)(d.a, {
            withoutHover: !0,
            tooltipContent: (0, p.jsx)(h, { content: (0, p.jsx)(o.cC, { id: 'bXr0ee' }) }),
            children: (0, p.jsxs)(s.Z, {
              sx: n,
              children: [
                (0, p.jsx)(
                  l.Z,
                  b(
                    b(
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
                (0, p.jsx)(v, { color: t.palette.warning.main }),
              ],
            }),
          });
        },
        x = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(h, { content: (0, p.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, p.jsxs)(s.Z, {
              sx: m,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(v, {}),
              ],
            }),
          });
        },
        y = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(h, { content: (0, p.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, p.jsxs)(s.Z, {
              sx: m,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(v, {}),
              ],
            }),
          });
        },
        h = function (e) {
          var r = e.content;
          return (0, p.jsxs)(s.Z, {
            children: [
              (0, p.jsx)(s.Z, { sx: { mb: 4 }, children: r }),
              (0, p.jsx)(l.Z, {
                variant: 'subheader2',
                color: 'text.secondary',
                children: (0, p.jsx)(o.cC, {
                  id: 'lfEjIE',
                  components: {
                    0: (0, p.jsx)(u.Z, {
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
    32867: function (e, r, t) {
      t.d(r, {
        B: function () {
          return b;
        },
        J: function () {
          return p;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(1279),
        c = t(15861),
        a = t(85893),
        s = [
          'value',
          'symbol',
          'visibleDecimals',
          'compact',
          'percent',
          'symbolsVariant',
          'symbolsColor',
          'roundDown',
          'compactThreshold',
        ];
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
      function u(e) {
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
      var d = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'],
        p = function (e) {
          var r = e.value,
            t = e.visibleDecimals,
            n = void 0 === t ? 2 : t,
            o = e.roundDown,
            c = e.compactThreshold,
            a = (0, i.hE)(r),
            s = a.toFixed(0).length;
          c && Number(r) <= c && (s = 0);
          var l = Math.min(Math.floor(s ? (s - 1) / 3 : 0), d.length - 1),
            u = d[l],
            p = (0, i.pV)(a, 3 * l).toNumber();
          return (
            o && (p = Math.trunc(Number(p) * Math.pow(10, n)) / Math.pow(10, n)),
            {
              prefix: new Intl.NumberFormat('en-US', {
                maximumFractionDigits: n,
                minimumFractionDigits: n,
              }).format(p),
              postfix: u,
            }
          );
        };
      function f(e) {
        var r = e.value,
          t = e.visibleDecimals,
          n = e.roundDown,
          o = p({ value: r, visibleDecimals: t, roundDown: n }),
          i = o.prefix,
          c = o.postfix;
        return (0, a.jsxs)(a.Fragment, { children: [i, c] });
      }
      function b(e) {
        var r = e.value,
          t = e.symbol,
          n = e.visibleDecimals,
          i = e.compact,
          l = e.percent,
          d = e.symbolsVariant,
          p = e.symbolsColor,
          b = e.roundDown,
          m = e.compactThreshold,
          v = (0, o.Z)(e, s),
          j = l ? 100 * Number(r) : Number(r),
          x = null !== n && void 0 !== n ? n : 0;
        0 === j ? (x = 0) : void 0 === n && (x = j >= 1 || l || 'USD' === t ? 2 : 7);
        var y = Math.pow(10, -x),
          h = 0 !== j && Math.abs(j) < Math.abs(y),
          O = h ? y : j,
          g = !1 !== i && (i || j > 99999);
        return (
          b && !g && (O = Math.trunc(Number(O) * Math.pow(10, x)) / Math.pow(10, x)),
          (0, a.jsxs)(
            c.Z,
            u(
              u({}, v),
              {},
              {
                sx: u(
                  {
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                  },
                  v.sx
                ),
                noWrap: !0,
                children: [
                  h &&
                    (0, a.jsx)(c.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || v.variant,
                      color: p || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === t || void 0 === t ? void 0 : t.toLowerCase()) &&
                    !l &&
                    (0, a.jsx)(c.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || v.variant,
                      color: p || 'text.secondary',
                      children: '$',
                    }),
                  g
                    ? (0, a.jsx)(f, {
                        value: O,
                        visibleDecimals: x,
                        roundDown: b,
                        compactThreshold: m,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: x,
                        minimumFractionDigits: x,
                      }).format(O),
                  l &&
                    (0, a.jsx)(c.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || v.variant,
                      color: p || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === t || void 0 === t ? void 0 : t.toLowerCase()) &&
                    'undefined' !== typeof t &&
                    (0, a.jsx)(c.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || v.variant,
                      color: p || 'text.secondary',
                      children: t,
                    }),
                ],
              }
            )
          )
        );
      }
    },
    20986: function (e, r, t) {
      t.d(r, {
        X: function () {
          return d;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(80822),
        c = t(15861),
        a = t(85893),
        s = ['caption', 'children', 'captionVariant', 'captionColor', 'align'];
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
      function u(e) {
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
      var d = function (e) {
        var r = e.caption,
          t = e.children,
          n = e.captionVariant,
          l = void 0 === n ? 'secondary16' : n,
          d = e.captionColor,
          p = e.align,
          f = void 0 === p ? 'center' : p,
          b = (0, o.Z)(e, s);
        return (0, a.jsxs)(
          i.Z,
          u(
            u({}, b),
            {},
            {
              sx: u({ display: 'flex', alignItems: f, justifyContent: 'space-between' }, b.sx),
              children: [
                r &&
                  (0, a.jsx)(c.Z, {
                    component: 'div',
                    variant: l,
                    color: d,
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
    45640: function (e, r, t) {
      t.d(r, {
        Js: function () {
          return x;
        },
        T1: function () {
          return w;
        },
        UD: function () {
          return O;
        },
      });
      var n = t(83618),
        o = t(59499),
        i = t(4730),
        c = t(67564),
        a = t(80822),
        s = t(86653),
        l = t(67294),
        u = t(25043),
        d = t(85893),
        p = ['symbol', 'aToken'],
        f = ['symbol', 'logoURI'],
        b = ['symbols', 'badgeSymbol'],
        m = ['symbol'];
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
                (0, o.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : v(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      function x(e) {
        var r = e.symbol,
          t = e.onImageGenerated,
          n = e.aToken,
          o = (0, l.useRef)(null),
          i = (0, l.useRef)(null),
          c = (0, l.useState)(!0),
          a = c[0],
          s = c[1];
        return (
          (0, l.useEffect)(
            function () {
              var e;
              if (!a && o.current && null !== (e = o.current) && void 0 !== e && e.contentDocument)
                if (n) {
                  var r,
                    c,
                    s,
                    l,
                    u =
                      null === (r = o.current) ||
                      void 0 === r ||
                      null === (c = r.contentDocument) ||
                      void 0 === c ||
                      null === (s = c.childNodes) ||
                      void 0 === s
                        ? void 0
                        : s[0],
                    d = u.getAttribute('width'),
                    p = u.getAttribute('height'),
                    f = u.getAttribute('viewBox');
                  u.setAttribute('x', 25),
                    u.setAttribute('width', 206),
                    u.setAttribute('y', 25),
                    u.setAttribute('height', 206),
                    f || u.setAttribute('viewBox', '0 0 '.concat(d, ' ').concat(p)),
                    null === (l = i.current) || void 0 === l || l.appendChild(u);
                  var b = new XMLSerializer().serializeToString(i.current);
                  t(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(b)))
                    )
                  );
                } else {
                  var m,
                    v = new XMLSerializer().serializeToString(
                      null === (m = o.current) || void 0 === m ? void 0 : m.contentDocument
                    );
                  t(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(v)))
                    )
                  );
                }
            },
            [a, n]
          ),
          (0, d.jsxs)('div', {
            style: { visibility: 'hidden', height: 0, width: 0, overflow: 'hidden' },
            children: [
              (0, d.jsx)('object', {
                style: { opacity: 1 },
                ref: o,
                id: 'svg',
                data: '/icons/tokens/'.concat(r.toLowerCase(), '.svg'),
                onLoad: function () {
                  return s(!1);
                },
              }),
              n && (0, d.jsx)(y, { ref: i }),
            ],
          })
        );
      }
      var y = (0, l.forwardRef)(function (e, r) {
        var t = e.symbol;
        return (0, d.jsxs)('svg', {
          style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
          ref: r,
          id: 'Group_30952',
          width: '256',
          height: '256',
          viewBox: '0 0 256 256',
          children: [
            (0, d.jsxs)('defs', {
              id: 'defs10',
              children: [
                (0, d.jsxs)('linearGradient', {
                  id: 'linear-gradient',
                  x1: '.843',
                  x2: '.206',
                  y1: '.135',
                  y2: '.886',
                  gradientUnits: 'objectBoundingBox',
                  children: [
                    (0, d.jsx)('stop', { offset: '0', stopColor: '#b6509e', id: 'stop2' }),
                    (0, d.jsx)('stop', { offset: '1', stopColor: '#2ebac6', id: 'stop4' }),
                  ],
                }),
                (0, d.jsx)('linearGradient', {
                  id: 'linear-gradient-2',
                  x1: '.907',
                  x2: '.163',
                  y1: '.227',
                  y2: '.853',
                }),
              ],
            }),
            (0, d.jsxs)('g', {
              id: 'Group_29109',
              children: [
                (0, d.jsx)('path', {
                  id: 'Subtraction_108',
                  fill: 'url(#linear-gradient)',
                  d: 'M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z',
                }),
                t &&
                  (0, d.jsx)('image', {
                    x: '25',
                    y: '25',
                    href: '/icons/tokens/'.concat(t.toLowerCase(), '.svg'),
                    width: '206',
                    height: '206',
                  }),
              ],
            }),
          ],
        });
      });
      function h(e) {
        var r = e.symbol,
          t = e.aToken,
          n = (0, i.Z)(e, p),
          o = (0, l.useState)(r.toLowerCase()),
          a = o[0],
          s = o[1];
        return (
          (0, l.useEffect)(
            function () {
              s(r.toLowerCase());
            },
            [r]
          ),
          (0, d.jsx)(
            c.Z,
            j(
              j({}, n),
              {},
              {
                sx: j({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
                children: t
                  ? (0, d.jsx)(y, { symbol: a })
                  : (0, d.jsx)('img', {
                      src: '/icons/tokens/'.concat(a, '.svg'),
                      onError: function () {
                        return s('default');
                      },
                      width: '100%',
                      height: '100%',
                      alt: ''.concat(r, ' icon'),
                    }),
              }
            )
          )
        );
      }
      function O(e) {
        var r = e.symbol,
          t = e.logoURI,
          n = (0, i.Z)(e, f),
          o = (0, l.useState)(r.toLowerCase()),
          a = o[0],
          s = o[1];
        return (0, d.jsx)(
          c.Z,
          j(
            j({}, n),
            {},
            {
              sx: j({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
              children: (0, d.jsx)(u.Z, {
                children: (0, d.jsx)('img', {
                  src: 'default' !== a && t ? t : '/icons/tokens/default.svg',
                  width: '100%',
                  height: '100%',
                  alt: ''.concat(r, ' icon'),
                  onError: function () {
                    return s('default');
                  },
                }),
              }),
            }
          )
        );
      }
      function g(e) {
        var r = e.symbols,
          t = e.badgeSymbol,
          n = (0, i.Z)(e, b);
        return t
          ? (0, d.jsx)(s.Z, {
              badgeContent: (0, d.jsx)(h, {
                symbol: t,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: r.map(function (e, r) {
                return (0, l.createElement)(
                  h,
                  j(
                    j({}, n),
                    {},
                    { key: e, symbol: e, sx: j({ ml: 0 === r ? 0 : 'calc(-1 * 0.5em)' }, n.sx) }
                  )
                );
              }),
            })
          : (0, d.jsx)(a.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: r.map(function (e, r) {
                return (0, l.createElement)(
                  h,
                  j(
                    j({}, n),
                    {},
                    { key: e, symbol: e, sx: j({ ml: 0 === r ? 0 : 'calc(-1 * 0.5em)' }, n.sx) }
                  )
                );
              }),
            });
      }
      function w(e) {
        var r = e.symbol,
          t = (0, i.Z)(e, m),
          o = r.split('_');
        if (o.length > 1) {
          var c = (0, n.Z)(o),
            a = c[0],
            s = c.slice(1);
          return (0, d.jsx)(g, j(j({}, t), {}, { symbols: s, badgeSymbol: '/pools/' + a }));
        }
        return (0, d.jsx)(h, j({ symbol: r }, t));
      }
      y.displayName = 'ATokenIcon';
    },
    35783: function (e, r, t) {
      t.d(r, {
        v: function () {
          return u;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(21737),
        c = t(85893),
        a = ['children', 'sx'];
      function s(e, r) {
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
            ? s(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : s(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var u = function (e) {
        var r = e.children,
          t = e.sx,
          n = (0, o.Z)(e, a),
          s = l({ mb: 6, alignItems: 'center', width: '100%' }, t);
        return (0, c.jsx)(i.Z, l(l({ sx: s }, n), {}, { children: r }));
      };
    },
    83063: function (e, r, t) {
      t.d(r, {
        Q: function () {
          return s;
        },
      });
      var n = t(57499),
        o = t(15861),
        i = t(69417),
        c = t(35783),
        a = t(85893),
        s = function (e) {
          var r = e.txError;
          return (0, a.jsx)(c.v, {
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
    19408: function (e, r, t) {
      t.d(r, {
        I: function () {
          return v;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(57499),
        c = t(15861),
        a = t(69417),
        s = t(72005),
        l = t(3062),
        u = t(65361),
        d = t(35783),
        p = t(85893),
        f = ['networkName', 'chainId', 'event', 'funnel', 'askManualSwitch'];
      function b(e, r) {
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
      function m(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? b(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : b(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var v = function (e) {
        var r = e.networkName,
          t = e.chainId,
          n = e.event,
          b = e.funnel,
          v = e.askManualSwitch,
          j = void 0 !== v && v,
          x = (0, o.Z)(e, f),
          y = (0, s.Z)(),
          h = y.switchNetwork,
          O = y.switchNetworkError,
          g = (0, l.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, p.jsx)(
          d.v,
          m(
            m({ severity: 'error', icon: !1 }, x),
            {},
            {
              children: O
                ? (0, p.jsx)(c.Z, { children: (0, p.jsx)(i.cC, { id: '+eOPG+' }) })
                : (0, p.jsxs)(c.Z, {
                    variant: 'description',
                    children: [
                      (0, p.jsx)(i.cC, { id: 'nh2EJK', values: { networkName: r } }),
                      ' ',
                      !j &&
                        (0, p.jsx)(a.Z, {
                          variant: 'text',
                          sx: { ml: '2px', verticalAlign: 'top' },
                          onClick: function () {
                            g(
                              u.vh.SWITCH_NETWORK,
                              m(
                                m(
                                  { funnel: b },
                                  null === n || void 0 === n ? void 0 : n.eventParams
                                ),
                                {},
                                { network: r }
                              )
                            ),
                              console.log('switchNetwork', t),
                              h(t);
                          },
                          disableRipple: !0,
                          children: (0, p.jsx)(c.Z, {
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
    50060: function (e, r, t) {
      t.d(r, {
        P: function () {
          return x;
        },
      });
      var n = t(80854),
        o = t(1279),
        i = t(81206),
        c = t(82403),
        a = t(70794),
        s = t(3062),
        l = t(79850),
        u = t(47892),
        d = t(59499),
        p = t(99673),
        f = t(52251),
        b = t(35258);
      function m(e, r) {
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
      var v = function (e, r, t) {
          var n = (0, b.z)().poolTokensBalanceService;
          return (0, p.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? m(Object(t), !0).forEach(function (r) {
                        (0, d.Z)(e, r, t[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                      : m(Object(t)).forEach(function (r) {
                          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                        });
                }
                return e;
              })(
                {
                  queryKey: f.B.poolTokens(r, e),
                  queryFn: function () {
                    return n.getPoolTokensBalances(e, r);
                  },
                  enabled: !!r,
                  refetchInterval: f.g,
                },
                t
              );
            }),
          });
        },
        j = function (e) {
          var r = (0, s.Y)(function (e) {
              return e.account;
            }),
            t = v(e, r),
            d = (0, u.T)(e),
            p =
              t.some(function (e) {
                return e.isLoading;
              }) ||
              d.some(function (e) {
                return e.isLoading;
              });
          return {
            walletBalances: d.map(function (r, s) {
              var u;
              return (function (e) {
                var r = e.reservesHumanized,
                  t = e.balances,
                  s = e.marketData,
                  u = (null === r || void 0 === r ? void 0 : r.reservesData) || [],
                  d = (null === r || void 0 === r ? void 0 : r.baseCurrencyData) || {
                    marketReferenceCurrencyDecimals: 0,
                    marketReferenceCurrencyPriceInUsd: '0',
                    networkBaseTokenPriceInUsd: '0',
                    networkBaseTokenPriceDecimals: 0,
                  },
                  p = !0;
                return {
                  walletBalances: (null !== t && void 0 !== t ? t : []).reduce(function (e, r) {
                    var t = u.find(function (e) {
                      var t;
                      return r.address === n.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (t = l.m5[s.chainId].wrappedBaseAssetSymbol) || void 0 === t
                              ? void 0
                              : t.toLowerCase())
                        : e.underlyingAsset.toLowerCase() === r.address;
                    });
                    return (
                      '0' !== r.amount && (p = !1),
                      t &&
                        (e[r.address] = {
                          amount: (0, o.Fv)(r.amount, t.decimals),
                          amountUSD: (0, i.Z)({
                            amount: new a.O(r.amount),
                            currencyDecimals: t.decimals,
                            priceInMarketReferenceCurrency: t.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: d.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, o.Fv)(
                              d.marketReferenceCurrencyPriceInUsd,
                              c.$3
                            ),
                          }),
                        }),
                      e
                    );
                  }, {}),
                  hasEmptyWallet: p,
                };
              })({
                reservesHumanized: r.data,
                balances: null === (u = t[s]) || void 0 === u ? void 0 : u.data,
                marketData: e[s],
              });
            }),
            isLoading: p,
          };
        },
        x = function (e) {
          var r = j([e]),
            t = r.walletBalances,
            n = r.isLoading;
          return {
            walletBalances: t[0].walletBalances,
            hasEmptyWallet: t[0].hasEmptyWallet,
            loading: n,
          };
        };
    },
    96276: function (e, r, t) {
      t.d(r, {
        h: function () {
          return m;
        },
      });
      var n = t(17674),
        o = t(59499),
        i = t(50029),
        c = t(87794),
        a = t.n(c),
        s = t(61744),
        l = t(78551),
        u = t(53966),
        d = t(52251),
        p = t(79850);
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
      function b(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? f(Object(t), !0).forEach(function (r) {
                (0, o.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : f(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var m = function (e, r, t) {
        return (0, l.a)({
          queryKey: d.B.tokensBalance(e, r, t),
          enabled: e.length > 0,
          queryFn: (function () {
            var o = (0, i.Z)(
              a().mark(function o() {
                var i, c, l, d, f, m, v, j, x, y, h;
                return a().wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (
                          ((i = (0, p.VH)(r)),
                          (c = e.filter(function (e) {
                            var r;
                            return !(null !== (r = e.extensions) && void 0 !== r && r.isNative);
                          })),
                          (l = e.find(function (e) {
                            var r;
                            return null === (r = e.extensions) || void 0 === r
                              ? void 0
                              : r.isNative;
                          })),
                          (d = new u.m({
                            ethersProvider: i,
                            tryAggregate: !0,
                            multicallCustomContractAddress:
                              '0xcA11bde05977b3631167028862bE2a173976CA11',
                          })),
                          (f = c.map(function (e) {
                            return {
                              reference: e.address,
                              contractAddress: e.address,
                              abi: [
                                {
                                  name: 'balanceOf',
                                  type: 'function',
                                  stateMutability: 'view',
                                  inputs: [{ name: 'account', type: 'address' }],
                                  outputs: [{ name: 'balance', type: 'uint256' }],
                                },
                              ],
                              calls: [
                                {
                                  reference: 'balanceOfCall',
                                  methodName: 'balanceOf',
                                  methodParameters: [t],
                                },
                              ],
                            };
                          })),
                          l)
                        ) {
                          o.next = 11;
                          break;
                        }
                        return (o.next = 8), d.call(f);
                      case 8:
                        return (
                          (m = o.sent),
                          (v = m.results),
                          o.abrupt(
                            'return',
                            e
                              .map(function (e, r) {
                                return b(
                                  b({}, e),
                                  {},
                                  {
                                    balance: (0, s.formatUnits)(
                                      v[r].callsReturnContext[0].returnValues[0],
                                      e.decimals
                                    ),
                                  }
                                );
                              })
                              .sort(function (e, r) {
                                return Number(r.balance) - Number(e.balance);
                              })
                          )
                        );
                      case 11:
                        return (o.next = 13), Promise.all([i.getBalance(t), d.call(f)]);
                      case 13:
                        return (
                          (j = o.sent),
                          (x = (0, n.Z)(j, 2)),
                          (y = x[0]),
                          (h = x[1]),
                          o.abrupt(
                            'return',
                            e
                              .map(function (e) {
                                var r;
                                return b(
                                  b({}, e),
                                  {},
                                  {
                                    balance:
                                      null !== (r = e.extensions) && void 0 !== r && r.isNative
                                        ? (0, s.formatUnits)(y, e.decimals)
                                        : (0, s.formatUnits)(
                                            h.results[e.address].callsReturnContext[0]
                                              .returnValues[0],
                                            e.decimals
                                          ),
                                  }
                                );
                              })
                              .sort(function (e, r) {
                                return Number(r.balance) - Number(e.balance);
                              })
                          )
                        );
                      case 18:
                      case 'end':
                        return o.stop();
                    }
                }, o);
              })
            );
            return function () {
              return o.apply(this, arguments);
            };
          })(),
        });
      };
    },
  },
]);
