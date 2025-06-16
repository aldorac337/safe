'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [655],
  {
    21386: function (e, r, t) {
      var n = t(64836);
      r.Z = void 0;
      var o = n(t(64938)),
        i = t(85893);
      r.Z = (0, o.default)(
        (0, i.jsx)('path', {
          d: 'M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0z',
        }),
        'CheckRounded'
      );
    },
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
    20929: function (e, r, t) {
      t.d(r, {
        S: function () {
          return i;
        },
      });
      var n = t(57499),
        o = t(85893);
      function i(e) {
        var r = (function (e) {
            return {
              d: Math.floor(e / 86400),
              h: Math.floor((e % 86400) / 3600),
              m: Math.floor((e % 3600) / 60),
              s: Math.floor(e % 60),
            };
          })(e.seconds),
          t = r.d,
          i = r.h,
          a = r.m,
          c = r.s;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            0 !== t &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'HkEDbS', values: { d: t } }),
              }),
            0 !== i &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'ntyFSE', values: { h: i } }),
              }),
            0 !== a &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'Nh9DAo', values: { m: a } }),
              }),
            0 !== c &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'jaKbwW', values: { s: c } }),
              }),
          ],
        });
      }
    },
    49212: function (e, r, t) {
      t.d(r, {
        G: function () {
          return v;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(38264),
        a = t(80822),
        c = t(15861),
        s = t(93946),
        l = t(53219),
        u = t(67294),
        d = t(3062),
        p = t(2127),
        f = t(85893),
        x = ['sx'],
        h = [
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
      function j(e, r) {
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
            ? j(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : j(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var v = function (e) {
        var r = e.text,
          t = e.icon,
          n = e.iconSize,
          j = void 0 === n ? 14 : n,
          v = e.iconColor,
          b = e.iconMargin,
          y = e.children,
          g = e.textColor,
          O = e.wrapperProps,
          w = (O = void 0 === O ? {} : O).sx,
          Z = (0, o.Z)(O, x),
          k = e.event,
          C = e.open,
          D = void 0 !== C && C,
          E = e.setOpen,
          P = (0, o.Z)(e, h),
          S = (0, u.useState)(D),
          T = S[0],
          I = S[1],
          M = (0, d.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, f.jsxs)(
          a.Z,
          m(
            m({ sx: m({ display: 'flex', alignItems: 'center' }, w) }, Z),
            {},
            {
              children: [
                r && (0, f.jsx)(c.Z, m(m({}, P), {}, { color: g, children: r })),
                (0, f.jsx)(p.a, {
                  tooltipContent: (0, f.jsx)(f.Fragment, { children: y }),
                  open: T,
                  setOpen: function () {
                    E && E(!T), I(!T);
                  },
                  children: (0, f.jsx)(s.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: j,
                      height: j,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: b || 0.5,
                    },
                    onClick: function () {
                      k && M(k.eventName, m({}, k.eventParams));
                    },
                    children: (0, f.jsx)(l.Z, {
                      sx: {
                        fontSize: j,
                        color: v || (T ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: v || 'info.main' },
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
    12512: function (e, r, t) {
      t.d(r, {
        y: function () {
          return u;
        },
      });
      var n = t(59499),
        o = t(36864),
        i = t(57499),
        a = t(49212),
        c = t(85893);
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
        var r = (0, o.Z)({}, e);
        return (0, c.jsx)(a.G, l(l({}, r), {}, { children: (0, c.jsx)(i.cC, { id: 'UbRrG0' }) }));
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
          return v;
        },
      });
      var n = t(59499),
        o = t(57499),
        i = t(38264),
        a = t(53219),
        c = t(2734),
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
      function x(e) {
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
      var h = {
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
          return (0, p.jsx)(a.Z, {
            sx: { ml: '3px', color: r || 'text.muted', fontSize: '14px' },
            children: (0, p.jsx)(i.Z, {}),
          });
        },
        m = function (e) {
          var r = e.typographyProps,
            t = (0, c.Z)(),
            n = x(
              {
                border: '1px solid '.concat(t.palette.warning.main),
                color: t.palette.warning.main,
              },
              h
            );
          return (0, p.jsx)(d.a, {
            withoutHover: !0,
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'bXr0ee' }) }),
            children: (0, p.jsxs)(s.Z, {
              sx: n,
              children: [
                (0, p.jsx)(
                  l.Z,
                  x(
                    x(
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
        v = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, p.jsxs)(s.Z, {
              sx: h,
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
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, p.jsxs)(s.Z, {
              sx: h,
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
        y = function (e) {
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
          return x;
        },
        J: function () {
          return p;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(1279),
        a = t(15861),
        c = t(85893),
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
            a = e.compactThreshold,
            c = (0, i.hE)(r),
            s = c.toFixed(0).length;
          a && Number(r) <= a && (s = 0);
          var l = Math.min(Math.floor(s ? (s - 1) / 3 : 0), d.length - 1),
            u = d[l],
            p = (0, i.pV)(c, 3 * l).toNumber();
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
          a = o.postfix;
        return (0, c.jsxs)(c.Fragment, { children: [i, a] });
      }
      function x(e) {
        var r = e.value,
          t = e.symbol,
          n = e.visibleDecimals,
          i = e.compact,
          l = e.percent,
          d = e.symbolsVariant,
          p = e.symbolsColor,
          x = e.roundDown,
          h = e.compactThreshold,
          j = (0, o.Z)(e, s),
          m = l ? 100 * Number(r) : Number(r),
          v = null !== n && void 0 !== n ? n : 0;
        0 === m ? (v = 0) : void 0 === n && (v = m >= 1 || l || 'USD' === t ? 2 : 7);
        var b = Math.pow(10, -v),
          y = 0 !== m && Math.abs(m) < Math.abs(b),
          g = y ? b : m,
          O = !1 !== i && (i || m > 99999);
        return (
          x && !O && (g = Math.trunc(Number(g) * Math.pow(10, v)) / Math.pow(10, v)),
          (0, c.jsxs)(
            a.Z,
            u(
              u({}, j),
              {},
              {
                sx: u(
                  {
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                  },
                  j.sx
                ),
                noWrap: !0,
                children: [
                  y &&
                    (0, c.jsx)(a.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || j.variant,
                      color: p || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === t || void 0 === t ? void 0 : t.toLowerCase()) &&
                    !l &&
                    (0, c.jsx)(a.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || j.variant,
                      color: p || 'text.secondary',
                      children: '$',
                    }),
                  O
                    ? (0, c.jsx)(f, {
                        value: g,
                        visibleDecimals: v,
                        roundDown: x,
                        compactThreshold: h,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: v,
                        minimumFractionDigits: v,
                      }).format(g),
                  l &&
                    (0, c.jsx)(a.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || j.variant,
                      color: p || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === t || void 0 === t ? void 0 : t.toLowerCase()) &&
                    'undefined' !== typeof t &&
                    (0, c.jsx)(a.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || j.variant,
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
        a = t(15861),
        c = t(85893),
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
          x = (0, o.Z)(e, s);
        return (0, c.jsxs)(
          i.Z,
          u(
            u({}, x),
            {},
            {
              sx: u({ display: 'flex', alignItems: f, justifyContent: 'space-between' }, x.sx),
              children: [
                r &&
                  (0, c.jsx)(a.Z, {
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
          return v;
        },
        T1: function () {
          return w;
        },
        UD: function () {
          return g;
        },
      });
      var n = t(83618),
        o = t(59499),
        i = t(4730),
        a = t(67564),
        c = t(80822),
        s = t(86653),
        l = t(67294),
        u = t(25043),
        d = t(85893),
        p = ['symbol', 'aToken', 'waToken'],
        f = ['symbol', 'logoURI'],
        x = ['symbols', 'badgeSymbol', 'aToken', 'waToken', 'aTokens', 'waTokens'],
        h = ['symbol', 'aToken', 'waToken', 'aTokens', 'waTokens'];
      function j(e, r) {
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
            ? j(Object(t), !0).forEach(function (r) {
                (0, o.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : j(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      function v(e) {
        var r = e.symbol,
          t = e.onImageGenerated,
          n = e.aToken,
          o = e.waToken,
          i = (0, l.useRef)(null),
          a = (0, l.useRef)(null),
          c = (0, l.useState)(!0),
          s = c[0],
          u = c[1];
        return (
          (0, l.useEffect)(
            function () {
              var e;
              if (!s && i.current && null !== (e = i.current) && void 0 !== e && e.contentDocument)
                if (n || o) {
                  var r,
                    c,
                    l,
                    u,
                    d =
                      null === (r = i.current) ||
                      void 0 === r ||
                      null === (c = r.contentDocument) ||
                      void 0 === c ||
                      null === (l = c.childNodes) ||
                      void 0 === l
                        ? void 0
                        : l[0],
                    p = d.getAttribute('width'),
                    f = d.getAttribute('height'),
                    x = d.getAttribute('viewBox');
                  d.setAttribute('x', 25),
                    d.setAttribute('width', 206),
                    d.setAttribute('y', 25),
                    d.setAttribute('height', 206),
                    x || d.setAttribute('viewBox', '0 0 '.concat(p, ' ').concat(f)),
                    null === (u = a.current) || void 0 === u || u.appendChild(d);
                  var h = new XMLSerializer().serializeToString(a.current);
                  t(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(h)))
                    )
                  );
                } else {
                  var j,
                    m = new XMLSerializer().serializeToString(
                      null === (j = i.current) || void 0 === j ? void 0 : j.contentDocument
                    );
                  t(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(m)))
                    )
                  );
                }
            },
            [s, n, o]
          ),
          (0, d.jsxs)('div', {
            style: { visibility: 'hidden', height: 0, width: 0, overflow: 'hidden' },
            children: [
              (0, d.jsx)('object', {
                style: { opacity: 1 },
                ref: i,
                id: 'svg',
                data: '/icons/tokens/'.concat(r.toLowerCase(), '.svg'),
                onLoad: function () {
                  return u(!1);
                },
              }),
              (n || o) && (0, d.jsx)(b, { ref: a, waToken: o }),
            ],
          })
        );
      }
      var b = (0, l.forwardRef)(function (e, r) {
        var t = e.symbol,
          n = e.waToken;
        return (0, d.jsxs)('svg', {
          style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
          ref: r,
          id: 'Group_30952',
          width: '256',
          height: '256',
          viewBox: '0 0 256 256',
          children: [
            (0, d.jsx)('defs', {
              id: 'defs10',
              children: (0, d.jsxs)('linearGradient', {
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
            }),
            (0, d.jsxs)('g', {
              id: 'Group_29109',
              children: [
                n
                  ? (0, d.jsx)('path', {
                      id: 'Subtraction_108',
                      fill: 'none',
                      stroke: 'url(#linear-gradient)',
                      strokeWidth: '13.713',
                      strokeDasharray: '8,8',
                      d: 'M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256z',
                    })
                  : (0, d.jsx)('path', {
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
      function y(e) {
        var r = e.symbol,
          t = e.aToken,
          n = e.waToken,
          o = (0, i.Z)(e, p),
          c = (0, l.useState)(r.toLowerCase()),
          s = c[0],
          u = c[1];
        return (
          (0, l.useEffect)(
            function () {
              u(r.toLowerCase());
            },
            [r]
          ),
          (0, d.jsx)(
            a.Z,
            m(
              m({}, o),
              {},
              {
                sx: m({ display: 'flex', position: 'relative', borderRadius: '50%' }, o.sx),
                children:
                  t || n
                    ? (0, d.jsx)(b, { symbol: s, waToken: n })
                    : (0, d.jsx)('img', {
                        src: '/icons/tokens/'.concat(s, '.svg'),
                        onError: function () {
                          return u('default');
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
      function g(e) {
        var r = e.symbol,
          t = e.logoURI,
          n = (0, i.Z)(e, f),
          o = (0, l.useState)(r.toLowerCase()),
          c = o[0],
          s = o[1];
        return (0, d.jsx)(
          a.Z,
          m(
            m({}, n),
            {},
            {
              sx: m({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
              children: (0, d.jsx)(u.Z, {
                children: (0, d.jsx)('img', {
                  src: 'default' !== c && t ? t : '/icons/tokens/default.svg',
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
      function O(e) {
        var r = e.symbols,
          t = e.badgeSymbol,
          n = e.aToken,
          o = void 0 !== n && n,
          a = e.waToken,
          u = void 0 !== a && a,
          p = e.aTokens,
          f = e.waTokens,
          h = (0, i.Z)(e, x),
          j =
            p ||
            r.map(function (e, r) {
              return 0 === r && o;
            }),
          v =
            f ||
            r.map(function (e, r) {
              return 0 === r && u;
            });
        return t
          ? (0, d.jsx)(s.Z, {
              badgeContent: (0, d.jsx)(y, {
                symbol: t,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: r.map(function (e, r) {
                return (0, l.createElement)(
                  y,
                  m(
                    m({}, h),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: j[r],
                      waToken: v[r],
                      sx: m({ ml: 0 === r ? 0 : 'calc(-1 * 0.5em)' }, h.sx),
                    }
                  )
                );
              }),
            })
          : (0, d.jsx)(c.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: r.map(function (e, r) {
                return (0, l.createElement)(
                  y,
                  m(
                    m({}, h),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: j[r],
                      waToken: v[r],
                      sx: m({ ml: 0 === r ? 0 : 'calc(-1 * 0.5em)' }, h.sx),
                    }
                  )
                );
              }),
            });
      }
      function w(e) {
        var r = e.symbol,
          t = e.aToken,
          o = e.waToken,
          a = e.aTokens,
          c = e.waTokens,
          s = (0, i.Z)(e, h),
          l = r.split('_');
        if (l.length > 1) {
          if (l[0].startsWith('pools/')) {
            var u = (0, n.Z)(l),
              p = u[0],
              f = u.slice(1);
            return (0, d.jsx)(O, m(m({}, s), {}, { symbols: f, badgeSymbol: '/pools/' + p }));
          }
          return (0, d.jsx)(
            O,
            m(m({}, s), {}, { symbols: l, aToken: t, waToken: o, aTokens: a, waTokens: c })
          );
        }
        return (0, d.jsx)(y, m({ symbol: r, aToken: t, waToken: o }, s));
      }
      b.displayName = 'TokenRing';
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
        a = t(85893),
        c = ['children', 'sx'];
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
          n = (0, o.Z)(e, c),
          s = l({ mb: 6, alignItems: 'center', width: '100%' }, t);
        return (0, a.jsx)(i.Z, l(l({ sx: s }, n), {}, { children: r }));
      };
    },
    31447: function (e, r, t) {
      t.r(r),
        t.d(r, {
          EmodeModal: function () {
            return ce;
          },
        });
      var n,
        o = t(67294),
        i = t(49679),
        a = t(44949),
        c = t(15629),
        s = t(59499),
        l = t(17674),
        u = t(57499),
        d = t(48949),
        p = t(80227),
        f = t(21386),
        x = t(50594),
        h = t(15861),
        j = t(53219),
        m = t(45843),
        v = t(57922),
        b = t(26447),
        y = t(80822),
        g = t(10315),
        O = t(18972),
        w = t(67720),
        Z = t(72882),
        k = t(7906),
        C = t(53184),
        D = t(53816),
        E = t(89755),
        P = t(98102),
        S = t(295),
        T = t(12512),
        I = t(32867),
        M = t(38577),
        L = t(20986),
        R = t(45640),
        A = t(35783),
        N = t(60377),
        F = t(87970),
        z = t(72005),
        B = t(3062),
        U = t(79850),
        _ = t(40429),
        V = t(83063),
        W = t(44880),
        H = t(67944),
        G = t(37096),
        q = t(19408),
        Y = t(50029),
        X = t(87794),
        Q = t.n(X),
        K = t(75331),
        J = t(92997),
        $ = t(84207),
        ee = t(56570),
        re = t(85893),
        te = function (e) {
          var r = e.isWrongNetwork,
            t = e.blocked,
            n = e.selectedEmode,
            o = e.activeEmode,
            i = e.eModes,
            a = (0, B.Y)(function (e) {
              return e.setUserEMode;
            }),
            c = (0, J.Q)({
              tryPermit: !1,
              handleGetTxns: (function () {
                var e = (0, Y.Z)(
                  Q().mark(function e() {
                    return Q().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt('return', a(n));
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
              skip: t,
              deps: [n],
              protocolAction: K.UQ.setEModeUsage,
              eventTxInfo: {
                previousState: (0, ee.U)(i[o].label),
                newState: (0, ee.U)(i[n].label),
              },
            }),
            s = c.action,
            l = c.loadingTxns,
            d = c.mainTxState,
            p = c.requiresApproval;
          return (0, re.jsx)($.B, {
            requiresApproval: p,
            blocked: t,
            mainTxState: d,
            preparingTransactions: l,
            handleAction: s,
            actionText:
              0 === o
                ? (0, re.jsx)(u.cC, { id: 'jKYzR1' })
                : 0 !== n
                  ? (0, re.jsx)(u.cC, { id: 'GQrBTq' })
                  : (0, re.jsx)(u.cC, { id: 'jG3UJ7' }),
            actionInProgressText:
              0 === o
                ? (0, re.jsx)(u.cC, { id: 'YDIOks' })
                : 0 !== n
                  ? (0, re.jsx)(u.cC, { id: 'KkPgim' })
                  : (0, re.jsx)(u.cC, { id: 'Sk2zW9' }),
            isWrongNetwork: r,
          });
        };
      function ne(e, r) {
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
      function oe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ne(Object(t), !0).forEach(function (r) {
                (0, s.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ne(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      function ie(e, r) {
        var t = r.assets
          .filter(function (e) {
            return e.borrowable;
          })
          .map(function (e) {
            return e.underlyingAsset;
          });
        return !e.userReservesData.some(function (e) {
          return Number(e.scaledVariableDebt) > 0 && !t.includes(e.reserve.underlyingAsset);
        });
      }
      !(function (e) {
        (e[(e.EMODE_DISABLED_LIQUIDATION = 0)] = 'EMODE_DISABLED_LIQUIDATION'),
          (e[(e.CLOSE_POSITIONS_BEFORE_SWITCHING = 1)] = 'CLOSE_POSITIONS_BEFORE_SWITCHING');
      })(n || (n = {}));
      var ae = function (e) {
          var r = e.user,
            t = (0, N.HT)(),
            i = t.reserves,
            c = t.eModes,
            Y = t.marketReferenceCurrencyDecimals,
            X = t.marketReferencePriceInUsd,
            Q = t.userReserves,
            K = (0, B.Y)(function (e) {
              return e.currentChainId;
            }),
            J = (0, z.Z)(),
            $ = J.chainId,
            ee = J.readOnlyModeAddress,
            ne = (0, F.p)(1),
            ae = (0, a.vR)(),
            ce = ae.gasLimit,
            se = ae.mainTxState,
            le = ae.txError,
            ue = (0, o.useState)(!1),
            de = ue[0],
            pe = ue[1],
            fe = Object.fromEntries(
              Object.entries(c).map(function (e) {
                var t = (0, l.Z)(e, 2),
                  n = t[0],
                  o = t[1];
                return [n, oe(oe({}, o), {}, { available: ie(r, o) })];
              })
            ),
            xe = (0, o.useState)(0 === r.userEmodeCategoryId ? fe[1] : fe[r.userEmodeCategoryId]),
            he = xe[0],
            je = xe[1],
            me = (0, U.Mo)(K),
            ve = (0, d.G)({
              currentTimestamp: ne,
              userReserves: Q,
              formattedReserves: i,
              userEmodeCategoryId: de ? 0 : he.id,
              marketReferenceCurrencyDecimals: Y,
              marketReferencePriceInUsd: X,
            }),
            be = void 0;
          r.isInEmode &&
            de &&
            Number(ve.healthFactor) < 1.01 &&
            '-1' !== ve.healthFactor &&
            (be = n.EMODE_DISABLED_LIQUIDATION);
          var ye = function () {
              return be === n.EMODE_DISABLED_LIQUIDATION
                ? (0, re.jsxs)(A.v, {
                    severity: 'error',
                    sx: { mt: 6, alignItems: 'center' },
                    children: [
                      (0, re.jsx)(h.Z, {
                        variant: 'subheader1',
                        color: '#4F1919',
                        children: (0, re.jsx)(u.cC, { id: 'bxN6EM' }),
                      }),
                      (0, re.jsx)(h.Z, {
                        variant: 'caption',
                        children: (0, re.jsx)(u.cC, { id: 'g0mals' }),
                      }),
                    ],
                  })
                : null;
            },
            ge = K !== $,
            Oe = function () {
              return (0, re.jsx)(j.Z, {
                color: 'primary',
                sx: { fontSize: '14px', mx: 1 },
                children: (0, re.jsx)(p.Z, {}),
              });
            },
            we =
              0 !== r.userEmodeCategoryId &&
              de &&
              void 0 === be &&
              Number(ve.healthFactor).toFixed(3) < Number(r.healthFactor).toFixed(3),
            Ze =
              '0' !== r.currentLoanToValue &&
              Number(ve.currentLoanToValue).toFixed(3) !== Number(r.currentLoanToValue).toFixed(3);
          if (le && le.blocking) return (0, re.jsx)(_.D, { txError: le });
          if (se.success) return (0, re.jsx)(W.R, { action: (0, re.jsx)(u.cC, { id: 'LvVpD/' }) });
          return (0, re.jsxs)(re.Fragment, {
            children: [
              (0, re.jsx)(G.E, { title: (0, re.jsx)(u.cC, { id: 'ZSqEW+' }) }),
              ge && !ee && (0, re.jsx)(q.I, { networkName: me.name, chainId: K }),
              (0, re.jsx)(h.Z, {
                variant: 'caption',
                children: (0, re.jsx)(u.cC, {
                  id: 'jSYv+Z',
                  components: {
                    0: (0, re.jsx)(M.rU, {
                      sx: { textDecoration: 'underline' },
                      variant: 'caption',
                      href: 'https://aave.com/help/borrowing/e-mode',
                      target: '_blank',
                      rel: 'noopener',
                    }),
                  },
                }),
              }),
              be === n.EMODE_DISABLED_LIQUIDATION && (0, re.jsx)(ye, {}),
              we &&
                (0, re.jsxs)(A.v, {
                  severity: 'error',
                  sx: { mt: 6, alignItems: 'center' },
                  children: [
                    (0, re.jsx)(h.Z, {
                      variant: 'subheader1',
                      color: '#4F1919',
                      children: (0, re.jsx)(u.cC, { id: '0jhlyw' }),
                    }),
                    (0, re.jsx)(h.Z, {
                      variant: 'caption',
                      children: (0, re.jsx)(u.cC, { id: 'YSodyW' }),
                    }),
                  ],
                }),
              (0, re.jsxs)(H.m6, {
                gasLimit: ce,
                children: [
                  0 !== r.userEmodeCategoryId &&
                    (0, re.jsx)(L.X, {
                      caption: (0, re.jsx)(u.cC, { id: 'jG3UJ7' }),
                      captionVariant: 'description',
                      mb: 4,
                      children: (0, re.jsx)(m.Z, {
                        disableRipple: !0,
                        checked: de,
                        onClick: function () {
                          return pe(!de);
                        },
                      }),
                    }),
                  (0, re.jsxs)(v.Z, {
                    in: de,
                    children: [
                      (0, re.jsx)(L.X, {
                        captionVariant: 'description',
                        my: 2,
                        caption: (0, re.jsx)(T.y, {
                          variant: 'description',
                          text: (0, re.jsx)(u.cC, { id: '3mXg0z' }),
                        }),
                        children: (0, re.jsxs)(b.Z, {
                          direction: 'row',
                          children: [
                            Ze &&
                              (0, re.jsxs)(re.Fragment, {
                                children: [
                                  (0, re.jsx)(I.B, {
                                    percent: !0,
                                    visibleDecimals: 2,
                                    value: r.currentLoanToValue,
                                    variant: 'secondary12',
                                  }),
                                  (0, re.jsx)(Oe, {}),
                                ],
                              }),
                            (0, re.jsx)(I.B, {
                              percent: !0,
                              visibleDecimals: 2,
                              value: ve.currentLoanToValue,
                              variant: 'secondary12',
                            }),
                          ],
                        }),
                      }),
                      (0, re.jsx)(H.jz, {
                        visibleHfChange: !!he,
                        healthFactor: r.healthFactor,
                        futureHealthFactor: ve.healthFactor,
                      }),
                    ],
                  }),
                  (0, re.jsx)(v.Z, {
                    in: !de,
                    children: (0, re.jsxs)(y.Z, {
                      children: [
                        (0, re.jsxs)(b.Z, {
                          direction: 'column',
                          children: [
                            (0, re.jsx)(h.Z, {
                              mb: 1,
                              variant: 'caption',
                              color: 'text.secondary',
                              children: (0, re.jsx)(u.cC, { id: 'BnhYo8' }),
                            }),
                            (0, re.jsx)(g.Z, {
                              sx: {
                                mb: 3,
                                width: '100%',
                                height: '44px',
                                borderRadius: '6px',
                                borderColor: 'divider',
                                outline: 'none !important',
                                color: 'text.primary',
                                '.MuiOutlinedInput-input': { backgroundColor: 'transparent' },
                                '&:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline':
                                  {
                                    borderColor: 'divider',
                                    outline: 'none !important',
                                    borderWidth: '1px',
                                  },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'divider',
                                  borderWidth: '1px',
                                },
                                '.MuiSelect-icon': { color: 'text.primary' },
                              },
                              value: he.id,
                              onChange: function (e) {
                                return (function (e) {
                                  var r = fe[e];
                                  if (!r) throw new Error('EMode with id '.concat(e, ' not found'));
                                  je(r);
                                })(Number(e.target.value));
                              },
                              children: Object.values(fe)
                                .filter(function (e) {
                                  return 0 !== e.id;
                                })
                                .sort(function (e, r) {
                                  return e.available !== r.available
                                    ? e.available
                                      ? -1
                                      : 1
                                    : e.id - r.id;
                                })
                                .map(function (e) {
                                  return (0, re.jsx)(
                                    O.Z,
                                    {
                                      value: e.id,
                                      children: (0, re.jsxs)(b.Z, {
                                        sx: { width: '100%' },
                                        direction: 'row',
                                        justifyContent: 'space-between',
                                        children: [
                                          (0, re.jsx)(h.Z, {
                                            sx: { opacity: e.available ? 1 : 0.5 },
                                            fontStyle: e.available ? 'normal' : 'italic',
                                            children: e.label,
                                          }),
                                          e.id === r.userEmodeCategoryId &&
                                            (0, re.jsxs)(y.Z, {
                                              sx: { display: 'inline-flex', alignItems: 'center' },
                                              children: [
                                                (0, re.jsx)(y.Z, {
                                                  sx: {
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    bgcolor: 'success.main',
                                                    boxShadow:
                                                      '0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)',
                                                    mr: '5px',
                                                  },
                                                }),
                                                (0, re.jsx)(h.Z, {
                                                  variant: 'subheader2',
                                                  color: 'success.main',
                                                  children: (0, re.jsx)(u.cC, { id: 'RxzN1M' }),
                                                }),
                                              ],
                                            }),
                                          !e.available &&
                                            (0, re.jsx)(h.Z, {
                                              variant: 'caption',
                                              color: 'text.secondary',
                                              fontStyle: 'italic',
                                              children: (0, re.jsx)(u.cC, { id: 'jqzUyM' }),
                                            }),
                                        ],
                                      }),
                                    },
                                    e.id
                                  );
                                }),
                            }),
                          ],
                        }),
                        !he.available &&
                          (0, re.jsx)(h.Z, {
                            variant: 'caption',
                            color: 'text.secondary',
                            sx: { mb: 3 },
                            children: (0, re.jsx)(u.cC, { id: 'olREoo' }),
                          }),
                        (0, re.jsx)(w.Z, {}),
                        (0, re.jsx)(L.X, {
                          captionVariant: 'description',
                          my: 2,
                          caption: (0, re.jsx)(T.y, {
                            variant: 'description',
                            text: (0, re.jsx)(u.cC, { id: '3mXg0z' }),
                          }),
                          children: (0, re.jsxs)(b.Z, {
                            direction: 'row',
                            children: [
                              Ze &&
                                (0, re.jsxs)(re.Fragment, {
                                  children: [
                                    (0, re.jsx)(I.B, {
                                      percent: !0,
                                      visibleDecimals: 2,
                                      value: r.currentLoanToValue,
                                      variant: 'secondary12',
                                    }),
                                    (0, re.jsx)(Oe, {}),
                                  ],
                                }),
                              (0, re.jsx)(I.B, {
                                percent: !0,
                                visibleDecimals: 2,
                                value: Number(he.ltv) / 1e4,
                                variant: 'secondary12',
                              }),
                            ],
                          }),
                        }),
                        (0, re.jsx)(H.jz, {
                          visibleHfChange: he.id !== r.userEmodeCategoryId,
                          healthFactor: r.healthFactor,
                          futureHealthFactor: ve.healthFactor,
                        }),
                        (0, re.jsx)(Z.Z, {
                          sx: { maxHeight: '270px' },
                          children: (0, re.jsxs)(k.Z, {
                            size: 'small',
                            stickyHeader: !0,
                            children: [
                              (0, re.jsx)(C.Z, {
                                children: (0, re.jsxs)(D.Z, {
                                  sx: (0, s.Z)({}, '& .'.concat(E.Z.root), {
                                    py: 2,
                                    lineHeight: 0,
                                  }),
                                  children: [
                                    (0, re.jsx)(P.Z, {
                                      align: 'center',
                                      sx: { pl: 0, width: '120px' },
                                      children: (0, re.jsx)(h.Z, {
                                        variant: 'helperText',
                                        children: (0, re.jsx)(u.cC, { id: 'bUUVED' }),
                                      }),
                                    }),
                                    (0, re.jsx)(P.Z, {
                                      align: 'center',
                                      children: (0, re.jsx)(h.Z, {
                                        variant: 'helperText',
                                        children: (0, re.jsx)(u.cC, { id: '62Xcjh' }),
                                      }),
                                    }),
                                    (0, re.jsx)(P.Z, {
                                      align: 'center',
                                      children: (0, re.jsx)(h.Z, {
                                        variant: 'helperText',
                                        children: (0, re.jsx)(u.cC, { id: 'iFq2YN' }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, re.jsx)(S.Z, {
                                sx: { width: '100%' },
                                children: he.assets.map(function (e, r) {
                                  return (0, re.jsxs)(
                                    D.Z,
                                    {
                                      sx: (0, s.Z)({ pt: 8 }, '& .'.concat(E.Z.root), {
                                        borderBottom: 'none',
                                        pt: 3,
                                        pb: 2,
                                      }),
                                      children: [
                                        (0, re.jsx)(P.Z, {
                                          align: 'center',
                                          sx: { py: 1 },
                                          children: (0, re.jsxs)(b.Z, {
                                            direction: 'row',
                                            gap: 1,
                                            alignItems: 'center',
                                            children: [
                                              (0, re.jsx)(R.T1, {
                                                symbol: e.iconSymbol,
                                                sx: { fontSize: '16px' },
                                              }),
                                              (0, re.jsx)(h.Z, {
                                                variant: 'secondary12',
                                                children: e.symbol,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, re.jsx)(P.Z, {
                                          align: 'center',
                                          children: e.collateral
                                            ? (0, re.jsx)(f.Z, {
                                                fontSize: 'small',
                                                color: 'success',
                                              })
                                            : (0, re.jsx)(x.Z, {
                                                fontSize: 'small',
                                                color: 'error',
                                              }),
                                        }),
                                        (0, re.jsx)(P.Z, {
                                          align: 'center',
                                          children: e.borrowable
                                            ? (0, re.jsx)(f.Z, {
                                                fontSize: 'small',
                                                color: 'success',
                                              })
                                            : (0, re.jsx)(x.Z, {
                                                fontSize: 'small',
                                                color: 'error',
                                              }),
                                        }),
                                      ],
                                    },
                                    r
                                  );
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              le && (0, re.jsx)(V.Q, { txError: le }),
              de
                ? (0, re.jsx)(te, {
                    isWrongNetwork: ge,
                    blocked: void 0 !== be,
                    selectedEmode: 0,
                    activeEmode: r.userEmodeCategoryId,
                    eModes: fe,
                  })
                : (0, re.jsx)(te, {
                    isWrongNetwork: ge,
                    blocked: void 0 !== be || !he.available || he.id === r.userEmodeCategoryId,
                    selectedEmode: de ? 0 : he.id,
                    activeEmode: r.userEmodeCategoryId,
                    eModes: fe,
                  }),
            ],
          });
        },
        ce = function () {
          var e = (0, a.vR)(),
            r = e.type,
            t = e.close;
          return (0, re.jsx)(c.P, {
            open: r === a.w8.Emode,
            setOpen: t,
            children: (0, re.jsx)(i.X, {
              children: function (e) {
                return (0, re.jsx)(ae, { user: e });
              },
            }),
          });
        };
    },
    56570: function (e, r, t) {
      t.d(r, {
        U: function () {
          return n;
        },
      });
      var n = function (e) {
        return '' === e ? 'Disabled' : e;
      };
    },
    50060: function (e, r, t) {
      t.d(r, {
        P: function () {
          return v;
        },
      });
      var n = t(80854),
        o = t(1279),
        i = t(81206),
        a = t(82403),
        c = t(70794),
        s = t(3062),
        l = t(79850),
        u = t(47892),
        d = t(59499),
        p = t(99673),
        f = t(52251),
        x = t(13441);
      function h(e, r) {
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
      var j = function (e, r, t) {
          var n = (0, x.z)().poolTokensBalanceService;
          return (0, p.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? h(Object(t), !0).forEach(function (r) {
                        (0, d.Z)(e, r, t[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                      : h(Object(t)).forEach(function (r) {
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
        m = function (e) {
          var r = (0, s.Y)(function (e) {
              return e.account;
            }),
            t = j(e, r),
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
                            amount: new c.O(r.amount),
                            currencyDecimals: t.decimals,
                            priceInMarketReferenceCurrency: t.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: d.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, o.Fv)(
                              d.marketReferenceCurrencyPriceInUsd,
                              a.$3
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
        v = function (e) {
          var r = m([e]),
            t = r.walletBalances,
            n = r.isLoading;
          return {
            walletBalances: t[0].walletBalances,
            hasEmptyWallet: t[0].hasEmptyWallet,
            loading: n,
          };
        };
    },
    87970: function (e, r, t) {
      t.d(r, {
        p: function () {
          return a;
        },
      });
      var n = t(27484),
        o = t.n(n),
        i = t(67294);
      function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15,
          r = (0, i.useState)(0),
          t = r[0],
          n = r[1],
          a = (0, i.useState)(0),
          c = a[0],
          s = a[1];
        return (
          (0, i.useEffect)(
            function () {
              var r = setInterval(function () {
                return s(o()().unix() + t);
              }, 1e3 * e);
              return function () {
                return clearInterval(r);
              };
            },
            [e, t]
          ),
          (0, i.useEffect)(function () {
            var e = Number(localStorage.getItem('forkTimeAhead') || 0);
            n(e), s(o()().unix() + e);
          }, []),
          c
        );
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
