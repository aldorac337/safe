'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5525],
  {
    20929: function (e, t, r) {
      r.d(t, {
        S: function () {
          return a;
        },
      });
      var n = r(57499),
        o = r(85893);
      function a(e) {
        var t = (function (e) {
            return {
              d: Math.floor(e / 86400),
              h: Math.floor((e % 86400) / 3600),
              m: Math.floor((e % 3600) / 60),
              s: Math.floor(e % 60),
            };
          })(e.seconds),
          r = t.d,
          a = t.h,
          i = t.m,
          s = t.s;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            0 !== r &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'HkEDbS', values: { d: r } }),
              }),
            0 !== a &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'ntyFSE', values: { h: a } }),
              }),
            0 !== i &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'Nh9DAo', values: { m: i } }),
              }),
            0 !== s &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'jaKbwW', values: { s: s } }),
              }),
          ],
        });
      }
    },
    49212: function (e, t, r) {
      r.d(t, {
        G: function () {
          return y;
        },
      });
      var n = r(59499),
        o = r(4730),
        a = r(38264),
        i = r(80822),
        s = r(15861),
        c = r(93946),
        u = r(53219),
        l = r(67294),
        p = r(3062),
        d = r(2127),
        f = r(85893),
        m = ['sx'],
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
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var y = function (e) {
        var t = e.text,
          r = e.icon,
          n = e.iconSize,
          v = void 0 === n ? 14 : n,
          y = e.iconColor,
          x = e.iconMargin,
          g = e.children,
          w = e.textColor,
          j = e.wrapperProps,
          O = (j = void 0 === j ? {} : j).sx,
          k = (0, o.Z)(j, m),
          D = e.event,
          T = e.open,
          P = void 0 !== T && T,
          C = e.setOpen,
          Z = (0, o.Z)(e, h),
          A = (0, l.useState)(P),
          S = A[0],
          E = A[1],
          M = (0, p.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, f.jsxs)(
          i.Z,
          b(
            b({ sx: b({ display: 'flex', alignItems: 'center' }, O) }, k),
            {},
            {
              children: [
                t && (0, f.jsx)(s.Z, b(b({}, Z), {}, { color: w, children: t })),
                (0, f.jsx)(d.a, {
                  tooltipContent: (0, f.jsx)(f.Fragment, { children: g }),
                  open: S,
                  setOpen: function () {
                    C && C(!S), E(!S);
                  },
                  children: (0, f.jsx)(c.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: v,
                      height: v,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: x || 0.5,
                    },
                    onClick: function () {
                      D && M(D.eventName, b({}, D.eventParams));
                    },
                    children: (0, f.jsx)(u.Z, {
                      sx: {
                        fontSize: v,
                        color: y || (S ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: y || 'info.main' },
                      },
                      children: r || (0, f.jsx)(a.Z, {}),
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
    },
    64311: function (e, t, r) {
      r.d(t, {
        Ch: function () {
          return b;
        },
        a9: function () {
          return x;
        },
        r$: function () {
          return y;
        },
      });
      var n = r(59499),
        o = r(57499),
        a = r(38264),
        i = r(53219),
        s = r(2734),
        c = r(80822),
        u = r(15861),
        l = r(23795),
        p = r(2127),
        d = r(85893);
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
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
        v = function (e) {
          var t = e.color;
          return (0, d.jsx)(i.Z, {
            sx: { ml: '3px', color: t || 'text.muted', fontSize: '14px' },
            children: (0, d.jsx)(a.Z, {}),
          });
        },
        b = function (e) {
          var t = e.typographyProps,
            r = (0, s.Z)(),
            n = m(
              {
                border: '1px solid '.concat(r.palette.warning.main),
                color: r.palette.warning.main,
              },
              h
            );
          return (0, d.jsx)(p.a, {
            withoutHover: !0,
            tooltipContent: (0, d.jsx)(g, { content: (0, d.jsx)(o.cC, { id: 'bXr0ee' }) }),
            children: (0, d.jsxs)(c.Z, {
              sx: n,
              children: [
                (0, d.jsx)(
                  u.Z,
                  m(
                    m(
                      {
                        variant: 'secondary12',
                        sx: { lineHeight: '0.75rem' },
                        color: r.palette.warning.main,
                      },
                      t
                    ),
                    {},
                    { children: (0, d.jsx)(o.cC, { id: 'KYAjf3' }) }
                  )
                ),
                (0, d.jsx)(v, { color: r.palette.warning.main }),
              ],
            }),
          });
        },
        y = function () {
          return (0, d.jsx)(p.a, {
            tooltipContent: (0, d.jsx)(g, { content: (0, d.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, d.jsxs)(c.Z, {
              sx: h,
              children: [
                (0, d.jsx)(u.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, d.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, d.jsx)(v, {}),
              ],
            }),
          });
        },
        x = function () {
          return (0, d.jsx)(p.a, {
            tooltipContent: (0, d.jsx)(g, { content: (0, d.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, d.jsxs)(c.Z, {
              sx: h,
              children: [
                (0, d.jsx)(u.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, d.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, d.jsx)(v, {}),
              ],
            }),
          });
        },
        g = function (e) {
          var t = e.content;
          return (0, d.jsxs)(c.Z, {
            children: [
              (0, d.jsx)(c.Z, { sx: { mb: 4 }, children: t }),
              (0, d.jsx)(u.Z, {
                variant: 'subheader2',
                color: 'text.secondary',
                children: (0, d.jsx)(o.cC, {
                  id: 'lfEjIE',
                  components: {
                    0: (0, d.jsx)(l.Z, {
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
    32867: function (e, t, r) {
      r.d(t, {
        B: function () {
          return m;
        },
        J: function () {
          return d;
        },
      });
      var n = r(59499),
        o = r(4730),
        a = r(1279),
        i = r(15861),
        s = r(85893),
        c = [
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
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var p = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'],
        d = function (e) {
          var t = e.value,
            r = e.visibleDecimals,
            n = void 0 === r ? 2 : r,
            o = e.roundDown,
            i = e.compactThreshold,
            s = (0, a.hE)(t),
            c = s.toFixed(0).length;
          i && Number(t) <= i && (c = 0);
          var u = Math.min(Math.floor(c ? (c - 1) / 3 : 0), p.length - 1),
            l = p[u],
            d = (0, a.pV)(s, 3 * u).toNumber();
          return (
            o && (d = Math.trunc(Number(d) * Math.pow(10, n)) / Math.pow(10, n)),
            {
              prefix: new Intl.NumberFormat('en-US', {
                maximumFractionDigits: n,
                minimumFractionDigits: n,
              }).format(d),
              postfix: l,
            }
          );
        };
      function f(e) {
        var t = e.value,
          r = e.visibleDecimals,
          n = e.roundDown,
          o = d({ value: t, visibleDecimals: r, roundDown: n }),
          a = o.prefix,
          i = o.postfix;
        return (0, s.jsxs)(s.Fragment, { children: [a, i] });
      }
      function m(e) {
        var t = e.value,
          r = e.symbol,
          n = e.visibleDecimals,
          a = e.compact,
          u = e.percent,
          p = e.symbolsVariant,
          d = e.symbolsColor,
          m = e.roundDown,
          h = e.compactThreshold,
          v = (0, o.Z)(e, c),
          b = u ? 100 * Number(t) : Number(t),
          y = null !== n && void 0 !== n ? n : 0;
        0 === b ? (y = 0) : void 0 === n && (y = b >= 1 || u || 'USD' === r ? 2 : 7);
        var x = Math.pow(10, -y),
          g = 0 !== b && Math.abs(b) < Math.abs(x),
          w = g ? x : b,
          j = !1 !== a && (a || b > 99999);
        return (
          m && !j && (w = Math.trunc(Number(w) * Math.pow(10, y)) / Math.pow(10, y)),
          (0, s.jsxs)(
            i.Z,
            l(
              l({}, v),
              {},
              {
                sx: l(
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
                  g &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: p || v.variant,
                      color: d || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    !u &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: p || v.variant,
                      color: d || 'text.secondary',
                      children: '$',
                    }),
                  j
                    ? (0, s.jsx)(f, {
                        value: w,
                        visibleDecimals: y,
                        roundDown: m,
                        compactThreshold: h,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: y,
                        minimumFractionDigits: y,
                      }).format(w),
                  u &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: p || v.variant,
                      color: d || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    'undefined' !== typeof r &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: p || v.variant,
                      color: d || 'text.secondary',
                      children: r,
                    }),
                ],
              }
            )
          )
        );
      }
    },
    20986: function (e, t, r) {
      r.d(t, {
        X: function () {
          return p;
        },
      });
      var n = r(59499),
        o = r(4730),
        a = r(80822),
        i = r(15861),
        s = r(85893),
        c = ['caption', 'children', 'captionVariant', 'captionColor', 'align'];
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var p = function (e) {
        var t = e.caption,
          r = e.children,
          n = e.captionVariant,
          u = void 0 === n ? 'secondary16' : n,
          p = e.captionColor,
          d = e.align,
          f = void 0 === d ? 'center' : d,
          m = (0, o.Z)(e, c);
        return (0, s.jsxs)(
          a.Z,
          l(
            l({}, m),
            {},
            {
              sx: l({ display: 'flex', alignItems: f, justifyContent: 'space-between' }, m.sx),
              children: [
                t &&
                  (0, s.jsx)(i.Z, {
                    component: 'div',
                    variant: u,
                    color: p,
                    sx: { mr: 2 },
                    children: t,
                  }),
                r,
              ],
            }
          )
        );
      };
    },
    45640: function (e, t, r) {
      r.d(t, {
        Js: function () {
          return y;
        },
        T1: function () {
          return O;
        },
        UD: function () {
          return w;
        },
      });
      var n = r(83618),
        o = r(59499),
        a = r(4730),
        i = r(67564),
        s = r(80822),
        c = r(86653),
        u = r(67294),
        l = r(25043),
        p = r(85893),
        d = ['symbol', 'aToken', 'waToken'],
        f = ['symbol', 'logoURI'],
        m = ['symbols', 'badgeSymbol', 'aToken', 'waToken', 'aTokens', 'waTokens'],
        h = ['symbol', 'aToken', 'waToken', 'aTokens', 'waTokens'];
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function y(e) {
        var t = e.symbol,
          r = e.onImageGenerated,
          n = e.aToken,
          o = e.waToken,
          a = (0, u.useRef)(null),
          i = (0, u.useRef)(null),
          s = (0, u.useState)(!0),
          c = s[0],
          l = s[1];
        return (
          (0, u.useEffect)(
            function () {
              var e;
              if (!c && a.current && null !== (e = a.current) && void 0 !== e && e.contentDocument)
                if (n || o) {
                  var t,
                    s,
                    u,
                    l,
                    p =
                      null === (t = a.current) ||
                      void 0 === t ||
                      null === (s = t.contentDocument) ||
                      void 0 === s ||
                      null === (u = s.childNodes) ||
                      void 0 === u
                        ? void 0
                        : u[0],
                    d = p.getAttribute('width'),
                    f = p.getAttribute('height'),
                    m = p.getAttribute('viewBox');
                  p.setAttribute('x', 25),
                    p.setAttribute('width', 206),
                    p.setAttribute('y', 25),
                    p.setAttribute('height', 206),
                    m || p.setAttribute('viewBox', '0 0 '.concat(d, ' ').concat(f)),
                    null === (l = i.current) || void 0 === l || l.appendChild(p);
                  var h = new XMLSerializer().serializeToString(i.current);
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(h)))
                    )
                  );
                } else {
                  var v,
                    b = new XMLSerializer().serializeToString(
                      null === (v = a.current) || void 0 === v ? void 0 : v.contentDocument
                    );
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(b)))
                    )
                  );
                }
            },
            [c, n, o]
          ),
          (0, p.jsxs)('div', {
            style: { visibility: 'hidden', height: 0, width: 0, overflow: 'hidden' },
            children: [
              (0, p.jsx)('object', {
                style: { opacity: 1 },
                ref: a,
                id: 'svg',
                data: '/icons/tokens/'.concat(t.toLowerCase(), '.svg'),
                onLoad: function () {
                  return l(!1);
                },
              }),
              (n || o) && (0, p.jsx)(x, { ref: i, waToken: o }),
            ],
          })
        );
      }
      var x = (0, u.forwardRef)(function (e, t) {
        var r = e.symbol,
          n = e.waToken;
        return (0, p.jsxs)('svg', {
          style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
          ref: t,
          id: 'Group_30952',
          width: '256',
          height: '256',
          viewBox: '0 0 256 256',
          children: [
            (0, p.jsx)('defs', {
              id: 'defs10',
              children: (0, p.jsxs)('linearGradient', {
                id: 'linear-gradient',
                x1: '.843',
                x2: '.206',
                y1: '.135',
                y2: '.886',
                gradientUnits: 'objectBoundingBox',
                children: [
                  (0, p.jsx)('stop', { offset: '0', stopColor: '#b6509e', id: 'stop2' }),
                  (0, p.jsx)('stop', { offset: '1', stopColor: '#2ebac6', id: 'stop4' }),
                ],
              }),
            }),
            (0, p.jsxs)('g', {
              id: 'Group_29109',
              children: [
                n
                  ? (0, p.jsx)('path', {
                      id: 'Subtraction_108',
                      fill: 'none',
                      stroke: 'url(#linear-gradient)',
                      strokeWidth: '13.713',
                      strokeDasharray: '8,8',
                      d: 'M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256z',
                    })
                  : (0, p.jsx)('path', {
                      id: 'Subtraction_108',
                      fill: 'url(#linear-gradient)',
                      d: 'M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z',
                    }),
                r &&
                  (0, p.jsx)('image', {
                    x: '25',
                    y: '25',
                    href: '/icons/tokens/'.concat(r.toLowerCase(), '.svg'),
                    width: '206',
                    height: '206',
                  }),
              ],
            }),
          ],
        });
      });
      function g(e) {
        var t = e.symbol,
          r = e.aToken,
          n = e.waToken,
          o = (0, a.Z)(e, d),
          s = (0, u.useState)(t.toLowerCase()),
          c = s[0],
          l = s[1];
        return (
          (0, u.useEffect)(
            function () {
              l(t.toLowerCase());
            },
            [t]
          ),
          (0, p.jsx)(
            i.Z,
            b(
              b({}, o),
              {},
              {
                sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, o.sx),
                children:
                  r || n
                    ? (0, p.jsx)(x, { symbol: c, waToken: n })
                    : (0, p.jsx)('img', {
                        src: '/icons/tokens/'.concat(c, '.svg'),
                        onError: function () {
                          return l('default');
                        },
                        width: '100%',
                        height: '100%',
                        alt: ''.concat(t, ' icon'),
                      }),
              }
            )
          )
        );
      }
      function w(e) {
        var t = e.symbol,
          r = e.logoURI,
          n = (0, a.Z)(e, f),
          o = (0, u.useState)(t.toLowerCase()),
          s = o[0],
          c = o[1];
        return (0, p.jsx)(
          i.Z,
          b(
            b({}, n),
            {},
            {
              sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
              children: (0, p.jsx)(l.Z, {
                children: (0, p.jsx)('img', {
                  src: 'default' !== s && r ? r : '/icons/tokens/default.svg',
                  width: '100%',
                  height: '100%',
                  alt: ''.concat(t, ' icon'),
                  onError: function () {
                    return c('default');
                  },
                }),
              }),
            }
          )
        );
      }
      function j(e) {
        var t = e.symbols,
          r = e.badgeSymbol,
          n = e.aToken,
          o = void 0 !== n && n,
          i = e.waToken,
          l = void 0 !== i && i,
          d = e.aTokens,
          f = e.waTokens,
          h = (0, a.Z)(e, m),
          v =
            d ||
            t.map(function (e, t) {
              return 0 === t && o;
            }),
          y =
            f ||
            t.map(function (e, t) {
              return 0 === t && l;
            });
        return r
          ? (0, p.jsx)(c.Z, {
              badgeContent: (0, p.jsx)(g, {
                symbol: r,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: t.map(function (e, t) {
                return (0, u.createElement)(
                  g,
                  b(
                    b({}, h),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: v[t],
                      waToken: y[t],
                      sx: b({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, h.sx),
                    }
                  )
                );
              }),
            })
          : (0, p.jsx)(s.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: t.map(function (e, t) {
                return (0, u.createElement)(
                  g,
                  b(
                    b({}, h),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: v[t],
                      waToken: y[t],
                      sx: b({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, h.sx),
                    }
                  )
                );
              }),
            });
      }
      function O(e) {
        var t = e.symbol,
          r = e.aToken,
          o = e.waToken,
          i = e.aTokens,
          s = e.waTokens,
          c = (0, a.Z)(e, h),
          u = t.split('_');
        if (u.length > 1) {
          if (u[0].startsWith('pools/')) {
            var l = (0, n.Z)(u),
              d = l[0],
              f = l.slice(1);
            return (0, p.jsx)(j, b(b({}, c), {}, { symbols: f, badgeSymbol: '/pools/' + d }));
          }
          return (0, p.jsx)(
            j,
            b(b({}, c), {}, { symbols: u, aToken: r, waToken: o, aTokens: i, waTokens: s })
          );
        }
        return (0, p.jsx)(g, b({ symbol: t, aToken: r, waToken: o }, c));
      }
      x.displayName = 'TokenRing';
    },
    35783: function (e, t, r) {
      r.d(t, {
        v: function () {
          return l;
        },
      });
      var n = r(59499),
        o = r(4730),
        a = r(21737),
        i = r(85893),
        s = ['children', 'sx'];
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var l = function (e) {
        var t = e.children,
          r = e.sx,
          n = (0, o.Z)(e, s),
          c = u({ mb: 6, alignItems: 'center', width: '100%' }, r);
        return (0, i.jsx)(a.Z, u(u({ sx: c }, n), {}, { children: t }));
      };
    },
    50060: function (e, t, r) {
      r.d(t, {
        P: function () {
          return y;
        },
      });
      var n = r(80854),
        o = r(1279),
        a = r(81206),
        i = r(82403),
        s = r(70794),
        c = r(3062),
        u = r(79850),
        l = r(47892),
        p = r(59499),
        d = r(99673),
        f = r(52251),
        m = r(13441);
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var v = function (e, t, r) {
          var n = (0, m.z)().poolTokensBalanceService;
          return (0, d.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? h(Object(r), !0).forEach(function (t) {
                        (0, p.Z)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                      : h(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                }
                return e;
              })(
                {
                  queryKey: f.B.poolTokens(t, e),
                  queryFn: function () {
                    return n.getPoolTokensBalances(e, t);
                  },
                  enabled: !!t,
                  refetchInterval: f.g,
                },
                r
              );
            }),
          });
        },
        b = function (e) {
          var t = (0, c.Y)(function (e) {
              return e.account;
            }),
            r = v(e, t),
            p = (0, l.T)(e),
            d =
              r.some(function (e) {
                return e.isLoading;
              }) ||
              p.some(function (e) {
                return e.isLoading;
              });
          return {
            walletBalances: p.map(function (t, c) {
              var l;
              return (function (e) {
                var t = e.reservesHumanized,
                  r = e.balances,
                  c = e.marketData,
                  l = (null === t || void 0 === t ? void 0 : t.reservesData) || [],
                  p = (null === t || void 0 === t ? void 0 : t.baseCurrencyData) || {
                    marketReferenceCurrencyDecimals: 0,
                    marketReferenceCurrencyPriceInUsd: '0',
                    networkBaseTokenPriceInUsd: '0',
                    networkBaseTokenPriceDecimals: 0,
                  },
                  d = !0;
                return {
                  walletBalances: (null !== r && void 0 !== r ? r : []).reduce(function (e, t) {
                    var r = l.find(function (e) {
                      var r;
                      return t.address === n.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (r = u.m5[c.chainId].wrappedBaseAssetSymbol) || void 0 === r
                              ? void 0
                              : r.toLowerCase())
                        : e.underlyingAsset.toLowerCase() === t.address;
                    });
                    return (
                      '0' !== t.amount && (d = !1),
                      r &&
                        (e[t.address] = {
                          amount: (0, o.Fv)(t.amount, r.decimals),
                          amountUSD: (0, a.Z)({
                            amount: new s.O(t.amount),
                            currencyDecimals: r.decimals,
                            priceInMarketReferenceCurrency: r.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: p.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, o.Fv)(
                              p.marketReferenceCurrencyPriceInUsd,
                              i.$3
                            ),
                          }),
                        }),
                      e
                    );
                  }, {}),
                  hasEmptyWallet: d,
                };
              })({
                reservesHumanized: t.data,
                balances: null === (l = r[c]) || void 0 === l ? void 0 : l.data,
                marketData: e[c],
              });
            }),
            isLoading: d,
          };
        },
        y = function (e) {
          var t = b([e]),
            r = t.walletBalances,
            n = t.isLoading;
          return {
            walletBalances: r[0].walletBalances,
            hasEmptyWallet: r[0].hasEmptyWallet,
            loading: n,
          };
        };
    },
    87886: function (e, t, r) {
      r.d(t, {
        F8: function () {
          return C;
        },
        IG: function () {
          return F;
        },
        Ik: function () {
          return I;
        },
        LN: function () {
          return B;
        },
        _n: function () {
          return A;
        },
        aE: function () {
          return D;
        },
        sm: function () {
          return U;
        },
        wP: function () {
          return E;
        },
        w_: function () {
          return j;
        },
        xS: function () {
          return T;
        },
      });
      var n,
        o = r(50029),
        a = r(59499),
        i = r(87794),
        s = r.n(i),
        c = r(75331),
        u = r(80854),
        l = r(1279),
        p = r(3439),
        d = r(63645),
        f = r(38486),
        m = r(49575),
        h = r(80063),
        v = r(4482),
        b = r(25383),
        y = r(77682),
        x = r(79643),
        g = function (e) {
          var t = (0, x.Sv)(fetch);
          return (0, x.A6)({ chainId: e, fetcher: t, version: '6.2' }, x.QA, x.TG);
        },
        w =
          ((n = {}),
          (0, a.Z)(n, c.a_.mainnet, { paraswap: g(c.a_.mainnet), feeTarget: p.y$ }),
          (0, a.Z)(n, c.a_.polygon, { paraswap: g(c.a_.polygon), feeTarget: d.y$ }),
          (0, a.Z)(n, c.a_.avalanche, { paraswap: g(c.a_.avalanche), feeTarget: f.y$ }),
          (0, a.Z)(n, c.a_.arbitrum_one, { paraswap: g(c.a_.arbitrum_one), feeTarget: m.y$ }),
          (0, a.Z)(n, c.a_.optimism, { paraswap: g(c.a_.optimism), feeTarget: h.y$ }),
          (0, a.Z)(n, c.a_.base, { paraswap: g(c.a_.base), feeTarget: v.y$ }),
          (0, a.Z)(n, c.a_.bnb, { paraswap: g(c.a_.bnb), feeTarget: b.y$ }),
          (0, a.Z)(n, c.a_.xdai, { paraswap: g(c.a_.xdai), feeTarget: y.y$ }),
          n),
        j = function (e) {
          var t = w[e];
          if (t) return t;
          throw new Error('Chain not supported');
        },
        O = {
          ESTIMATED_LOSS_GREATER_THAN_MAX_IMPACT:
            'Price impact too high. Please try a different amount or asset pair.',
          'No routes found with enough liquidity': 'No routes found with enough liquidity.',
        },
        k = [
          {
            regex: /^Amount \d+ is too small to proceed$/,
            message: 'Amount is too small. Please try larger amount.',
          },
        ];
      function D(e) {
        var t;
        return e in O
          ? O[e]
          : null ===
                (t = k.find(function (t) {
                  return t.regex.test(e);
                })) || void 0 === t
            ? void 0
            : t.message;
      }
      function T(e, t, r, n, o, a) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = (0, o.Z)(
          s().mark(function e(t, r, n, o, a, i) {
            var c, u, p, d;
            return s().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (c = _(o)),
                      (e.next = 3),
                      c.getTransactionParams(
                        r.underlyingAsset,
                        r.decimals,
                        n.underlyingAsset,
                        n.decimals,
                        a,
                        t,
                        i
                      )
                    );
                  case 3:
                    return (
                      (u = e.sent),
                      (p = u.swapCallData),
                      (d = u.augustus),
                      e.abrupt('return', {
                        swapCallData: p,
                        augustus: d,
                        inputAmount: (0, l.Fv)(t.srcAmount, r.decimals),
                        outputAmount: (0, l.Fv)(t.destAmount, n.decimals),
                        inputAmountUSD: t.srcUSD,
                        outputAmountUSD: t.destUSD,
                      })
                    );
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function C(e, t, r, n, o) {
        return Z.apply(this, arguments);
      }
      function Z() {
        return (Z = (0, o.Z)(
          s().mark(function e(t, r, n, o, a) {
            var i, c, u, p;
            return s().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = (0, l.hE)(t.amount)),
                      a &&
                        '0' !== t.supplyAPY &&
                        (i = i.plus(i.multipliedBy(t.supplyAPY).dividedBy(17280))),
                      (c = (0, l.pV)(i, -1 * t.decimals)),
                      (u = { partner: 'aave' }),
                      a && (u.includeContractMethods = [x.OZ.swapExactAmountIn]),
                      (p = _(n)),
                      (e.next = 8),
                      p.getRate(
                        c.toFixed(0),
                        t.underlyingAsset,
                        t.decimals,
                        r.underlyingAsset,
                        r.decimals,
                        o,
                        u
                      )
                    );
                  case 8:
                    return e.abrupt('return', e.sent);
                  case 9:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function A(e, t, r, n, o, a) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = (0, o.Z)(
          s().mark(function e(t, r, n, o, a, i) {
            var c, u, p, d;
            return s().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (c = R(o)),
                      (e.next = 3),
                      c.getTransactionParams(
                        r.underlyingAsset,
                        r.decimals,
                        n.underlyingAsset,
                        n.decimals,
                        a,
                        t,
                        i
                      )
                    );
                  case 3:
                    return (
                      (u = e.sent),
                      (p = u.swapCallData),
                      (d = u.augustus),
                      e.abrupt('return', {
                        swapCallData: p,
                        augustus: d,
                        inputAmount: (0, l.Fv)(t.srcAmount, r.decimals),
                        outputAmount: (0, l.Fv)(t.destAmount, n.decimals),
                        inputAmountUSD: t.srcUSD,
                        outputAmountUSD: t.destUSD,
                      })
                    );
                  case 7:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function E(e, t, r, n, o) {
        return M.apply(this, arguments);
      }
      function M() {
        return (M = (0, o.Z)(
          s().mark(function e(t, r, n, o, a) {
            var i, c, u, p;
            return s().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = (0, l.hE)(r.amount)),
                      (c = (0, l.pV)(i, -1 * r.decimals)),
                      (u = { partner: 'aave' }),
                      a && (u.includeContractMethods = [x.OZ.swapExactAmountOut]),
                      (p = R(n)),
                      (e.next = 7),
                      p.getRate(
                        c.toFixed(0),
                        t.underlyingAsset,
                        t.decimals,
                        r.underlyingAsset,
                        r.decimals,
                        o,
                        u
                      )
                    );
                  case 7:
                    return e.abrupt('return', e.sent);
                  case 8:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var _ = function (e) {
          var t = j(e),
            r = t.paraswap,
            n = t.feeTarget,
            a = (function () {
              var e = (0, o.Z)(
                s().mark(function e(t, n, o, a, i, c, u) {
                  var l;
                  return s().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            r.getRate({
                              amount: t,
                              srcToken: n,
                              srcDecimals: o,
                              destToken: a,
                              destDecimals: i,
                              userAddress: c,
                              side: x.PC.SELL,
                              options: u,
                            })
                          );
                        case 2:
                          return (l = e.sent), e.abrupt('return', l);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, r, n, o, a, i, s) {
                return e.apply(this, arguments);
              };
            })(),
            i = (function () {
              var e = (0, o.Z)(
                s().mark(function e(t, o, a, i, c, u, l) {
                  var p;
                  return s().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              r.buildTx(
                                {
                                  srcToken: t,
                                  srcDecimals: o,
                                  srcAmount: u.srcAmount,
                                  destToken: a,
                                  destDecimals: i,
                                  slippage: 100 * l,
                                  priceRoute: u,
                                  userAddress: c,
                                  partnerAddress: n,
                                  takeSurplus: !0,
                                  isDirectFeeTransfer: !0,
                                },
                                { ignoreChecks: !0 }
                              )
                            );
                          case 3:
                            return (
                              (p = e.sent),
                              e.abrupt('return', { swapCallData: p.data, augustus: p.to })
                            );
                          case 7:
                            throw (
                              ((e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0),
                              new Error('Error building transaction parameters'))
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function (t, r, n, o, a, i, s) {
                return e.apply(this, arguments);
              };
            })();
          return { getRate: a, getTransactionParams: i };
        },
        R = function (e) {
          var t = j(e),
            r = t.paraswap,
            n = t.feeTarget,
            a = (function () {
              var e = (0, o.Z)(
                s().mark(function e(t, n, o, a, i, c, u) {
                  var l;
                  return s().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            r.getRate({
                              amount: t,
                              srcToken: n,
                              srcDecimals: o,
                              destToken: a,
                              destDecimals: i,
                              userAddress: c,
                              side: x.PC.BUY,
                              options: u,
                            })
                          );
                        case 2:
                          return (l = e.sent), e.abrupt('return', l);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, r, n, o, a, i, s) {
                return e.apply(this, arguments);
              };
            })(),
            i = (function () {
              var e = (0, o.Z)(
                s().mark(function e(t, o, a, i, c, u, l) {
                  var p;
                  return s().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              r.buildTx(
                                {
                                  srcToken: t,
                                  destToken: a,
                                  destAmount: u.destAmount,
                                  slippage: 100 * l,
                                  priceRoute: u,
                                  userAddress: c,
                                  partnerAddress: n,
                                  takeSurplus: !0,
                                  srcDecimals: o,
                                  destDecimals: i,
                                  isDirectFeeTransfer: !0,
                                },
                                { ignoreChecks: !0 }
                              )
                            );
                          case 3:
                            return (
                              (p = e.sent),
                              e.abrupt('return', { swapCallData: p.data, augustus: p.to })
                            );
                          case 7:
                            throw (
                              ((e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              new Error('Error building transaction parameters'))
                            );
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function (t, r, n, o, a, i, s) {
                return e.apply(this, arguments);
              };
            })();
          return { getRate: a, getTransactionParams: i };
        },
        I = 0.1,
        U = function (e, t, r) {
          var n = (0, l.hE)(e),
            o = (0, l.hE)(null !== r && void 0 !== r ? r : I),
            a = n.plus(n.multipliedBy(o));
          return (0, u.gU)(a.toString(), t);
        },
        B = function (e, t, r) {
          return '0' === e
            ? '0'
            : (0, l.hE)(e)
                .multipliedBy(1 + Number(t) / 100)
                .toFixed(r);
        },
        F = function (e, t, r) {
          return '0' === e
            ? '0'
            : (0, l.hE)(e)
                .multipliedBy(1 - Number(t) / 100)
                .toFixed(r);
        };
    },
    53097: function (e, t, r) {
      r.d(t, {
        Q: function () {
          return a;
        },
      });
      var n = r(72005),
        o = r(3062);
      function a(e) {
        var t = (0, o.Y)(function (e) {
            return e.currentChainId;
          }),
          r = e || t;
        return { isWrongNetwork: (0, n.Z)().chainId !== r, requiredChainId: r };
      }
    },
  },
]);
