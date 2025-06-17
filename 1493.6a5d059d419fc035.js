'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1493],
  {
    20929: function (e, r, n) {
      n.d(r, {
        S: function () {
          return i;
        },
      });
      var t = n(57499),
        o = n(85893);
      function i(e) {
        var r = (function (e) {
            return {
              d: Math.floor(e / 86400),
              h: Math.floor((e % 86400) / 3600),
              m: Math.floor((e % 3600) / 60),
              s: Math.floor(e % 60),
            };
          })(e.seconds),
          n = r.d,
          i = r.h,
          a = r.m,
          s = r.s;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            0 !== n &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(t.cC, { id: 'HkEDbS', values: { d: n } }),
              }),
            0 !== i &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(t.cC, { id: 'ntyFSE', values: { h: i } }),
              }),
            0 !== a &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(t.cC, { id: 'Nh9DAo', values: { m: a } }),
              }),
            0 !== s &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(t.cC, { id: 'jaKbwW', values: { s: s } }),
              }),
          ],
        });
      }
    },
    49212: function (e, r, n) {
      n.d(r, {
        G: function () {
          return h;
        },
      });
      var t = n(59499),
        o = n(4730),
        i = n(38264),
        a = n(80822),
        s = n(15861),
        c = n(93946),
        l = n(53219),
        u = n(67294),
        d = n(3062),
        p = n(2127),
        f = n(85893),
        m = ['sx'],
        x = [
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
      function b(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function v(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? b(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : b(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var h = function (e) {
        var r = e.text,
          n = e.icon,
          t = e.iconSize,
          b = void 0 === t ? 14 : t,
          h = e.iconColor,
          j = e.iconMargin,
          y = e.children,
          w = e.textColor,
          g = e.wrapperProps,
          O = (g = void 0 === g ? {} : g).sx,
          k = (0, o.Z)(g, m),
          C = e.event,
          T = e.open,
          D = void 0 !== T && T,
          P = e.setOpen,
          Z = (0, o.Z)(e, x),
          S = (0, u.useState)(D),
          E = S[0],
          A = S[1],
          I = (0, d.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, f.jsxs)(
          a.Z,
          v(
            v({ sx: v({ display: 'flex', alignItems: 'center' }, O) }, k),
            {},
            {
              children: [
                r && (0, f.jsx)(s.Z, v(v({}, Z), {}, { color: w, children: r })),
                (0, f.jsx)(p.a, {
                  tooltipContent: (0, f.jsx)(f.Fragment, { children: y }),
                  open: E,
                  setOpen: function () {
                    P && P(!E), A(!E);
                  },
                  children: (0, f.jsx)(c.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: b,
                      height: b,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: j || 0.5,
                    },
                    onClick: function () {
                      C && I(C.eventName, v({}, C.eventParams));
                    },
                    children: (0, f.jsx)(l.Z, {
                      sx: {
                        fontSize: b,
                        color: h || (E ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: h || 'info.main' },
                      },
                      children: n || (0, f.jsx)(i.Z, {}),
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
    },
    64311: function (e, r, n) {
      n.d(r, {
        Ch: function () {
          return v;
        },
        a9: function () {
          return j;
        },
        r$: function () {
          return h;
        },
      });
      var t = n(59499),
        o = n(57499),
        i = n(38264),
        a = n(53219),
        s = n(2734),
        c = n(80822),
        l = n(15861),
        u = n(23795),
        d = n(2127),
        p = n(85893);
      function f(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function m(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? f(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var x = {
          borderRadius: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          p: '2px',
          mt: '2px',
          cursor: 'pointer',
          '&:hover': { opacity: 0.6 },
        },
        b = function (e) {
          var r = e.color;
          return (0, p.jsx)(a.Z, {
            sx: { ml: '3px', color: r || 'text.muted', fontSize: '14px' },
            children: (0, p.jsx)(i.Z, {}),
          });
        },
        v = function (e) {
          var r = e.typographyProps,
            n = (0, s.Z)(),
            t = m(
              {
                border: '1px solid '.concat(n.palette.warning.main),
                color: n.palette.warning.main,
              },
              x
            );
          return (0, p.jsx)(d.a, {
            withoutHover: !0,
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'bXr0ee' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: t,
              children: [
                (0, p.jsx)(
                  l.Z,
                  m(
                    m(
                      {
                        variant: 'secondary12',
                        sx: { lineHeight: '0.75rem' },
                        color: n.palette.warning.main,
                      },
                      r
                    ),
                    {},
                    { children: (0, p.jsx)(o.cC, { id: 'KYAjf3' }) }
                  )
                ),
                (0, p.jsx)(b, { color: n.palette.warning.main }),
              ],
            }),
          });
        },
        h = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: x,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(b, {}),
              ],
            }),
          });
        },
        j = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: x,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(b, {}),
              ],
            }),
          });
        },
        y = function (e) {
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
    32867: function (e, r, n) {
      n.d(r, {
        B: function () {
          return m;
        },
        J: function () {
          return p;
        },
      });
      var t = n(59499),
        o = n(4730),
        i = n(1279),
        a = n(15861),
        s = n(85893),
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
      function l(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function u(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var d = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'],
        p = function (e) {
          var r = e.value,
            n = e.visibleDecimals,
            t = void 0 === n ? 2 : n,
            o = e.roundDown,
            a = e.compactThreshold,
            s = (0, i.hE)(r),
            c = s.toFixed(0).length;
          a && Number(r) <= a && (c = 0);
          var l = Math.min(Math.floor(c ? (c - 1) / 3 : 0), d.length - 1),
            u = d[l],
            p = (0, i.pV)(s, 3 * l).toNumber();
          return (
            o && (p = Math.trunc(Number(p) * Math.pow(10, t)) / Math.pow(10, t)),
            {
              prefix: new Intl.NumberFormat('en-US', {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
              }).format(p),
              postfix: u,
            }
          );
        };
      function f(e) {
        var r = e.value,
          n = e.visibleDecimals,
          t = e.roundDown,
          o = p({ value: r, visibleDecimals: n, roundDown: t }),
          i = o.prefix,
          a = o.postfix;
        return (0, s.jsxs)(s.Fragment, { children: [i, a] });
      }
      function m(e) {
        var r = e.value,
          n = e.symbol,
          t = e.visibleDecimals,
          i = e.compact,
          l = e.percent,
          d = e.symbolsVariant,
          p = e.symbolsColor,
          m = e.roundDown,
          x = e.compactThreshold,
          b = (0, o.Z)(e, c),
          v = l ? 100 * Number(r) : Number(r),
          h = null !== t && void 0 !== t ? t : 0;
        0 === v ? (h = 0) : void 0 === t && (h = v >= 1 || l || 'USD' === n ? 2 : 7);
        var j = Math.pow(10, -h),
          y = 0 !== v && Math.abs(v) < Math.abs(j),
          w = y ? j : v,
          g = !1 !== i && (i || v > 99999);
        return (
          m && !g && (w = Math.trunc(Number(w) * Math.pow(10, h)) / Math.pow(10, h)),
          (0, s.jsxs)(
            a.Z,
            u(
              u({}, b),
              {},
              {
                sx: u(
                  {
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                  },
                  b.sx
                ),
                noWrap: !0,
                children: [
                  y &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === n || void 0 === n ? void 0 : n.toLowerCase()) &&
                    !l &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: '$',
                    }),
                  g
                    ? (0, s.jsx)(f, {
                        value: w,
                        visibleDecimals: h,
                        roundDown: m,
                        compactThreshold: x,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: h,
                        minimumFractionDigits: h,
                      }).format(w),
                  l &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === n || void 0 === n ? void 0 : n.toLowerCase()) &&
                    'undefined' !== typeof n &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: n,
                    }),
                ],
              }
            )
          )
        );
      }
    },
    20986: function (e, r, n) {
      n.d(r, {
        X: function () {
          return d;
        },
      });
      var t = n(59499),
        o = n(4730),
        i = n(80822),
        a = n(15861),
        s = n(85893),
        c = ['caption', 'children', 'captionVariant', 'captionColor', 'align'];
      function l(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function u(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var d = function (e) {
        var r = e.caption,
          n = e.children,
          t = e.captionVariant,
          l = void 0 === t ? 'secondary16' : t,
          d = e.captionColor,
          p = e.align,
          f = void 0 === p ? 'center' : p,
          m = (0, o.Z)(e, c);
        return (0, s.jsxs)(
          i.Z,
          u(
            u({}, m),
            {},
            {
              sx: u({ display: 'flex', alignItems: f, justifyContent: 'space-between' }, m.sx),
              children: [
                r &&
                  (0, s.jsx)(a.Z, {
                    component: 'div',
                    variant: l,
                    color: d,
                    sx: { mr: 2 },
                    children: r,
                  }),
                n,
              ],
            }
          )
        );
      };
    },
    45640: function (e, r, n) {
      n.d(r, {
        Js: function () {
          return h;
        },
        T1: function () {
          return O;
        },
        UD: function () {
          return w;
        },
      });
      var t = n(83618),
        o = n(59499),
        i = n(4730),
        a = n(67564),
        s = n(80822),
        c = n(86653),
        l = n(67294),
        u = n(25043),
        d = n(85893),
        p = ['symbol', 'aToken', 'waToken'],
        f = ['symbol', 'logoURI'],
        m = ['symbols', 'badgeSymbol', 'aToken', 'waToken', 'aTokens', 'waTokens'],
        x = ['symbol', 'aToken', 'waToken', 'aTokens', 'waTokens'];
      function b(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function v(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? b(Object(n), !0).forEach(function (r) {
                (0, o.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : b(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      function h(e) {
        var r = e.symbol,
          n = e.onImageGenerated,
          t = e.aToken,
          o = e.waToken,
          i = (0, l.useRef)(null),
          a = (0, l.useRef)(null),
          s = (0, l.useState)(!0),
          c = s[0],
          u = s[1];
        return (
          (0, l.useEffect)(
            function () {
              var e;
              if (!c && i.current && null !== (e = i.current) && void 0 !== e && e.contentDocument)
                if (t || o) {
                  var r,
                    s,
                    l,
                    u,
                    d =
                      null === (r = i.current) ||
                      void 0 === r ||
                      null === (s = r.contentDocument) ||
                      void 0 === s ||
                      null === (l = s.childNodes) ||
                      void 0 === l
                        ? void 0
                        : l[0],
                    p = d.getAttribute('width'),
                    f = d.getAttribute('height'),
                    m = d.getAttribute('viewBox');
                  d.setAttribute('x', 25),
                    d.setAttribute('width', 206),
                    d.setAttribute('y', 25),
                    d.setAttribute('height', 206),
                    m || d.setAttribute('viewBox', '0 0 '.concat(p, ' ').concat(f)),
                    null === (u = a.current) || void 0 === u || u.appendChild(d);
                  var x = new XMLSerializer().serializeToString(a.current);
                  n(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(x)))
                    )
                  );
                } else {
                  var b,
                    v = new XMLSerializer().serializeToString(
                      null === (b = i.current) || void 0 === b ? void 0 : b.contentDocument
                    );
                  n(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(v)))
                    )
                  );
                }
            },
            [c, t, o]
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
              (t || o) && (0, d.jsx)(j, { ref: a, waToken: o }),
            ],
          })
        );
      }
      var j = (0, l.forwardRef)(function (e, r) {
        var n = e.symbol,
          t = e.waToken;
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
                t
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
                n &&
                  (0, d.jsx)('image', {
                    x: '25',
                    y: '25',
                    href: '/icons/tokens/'.concat(n.toLowerCase(), '.svg'),
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
          n = e.aToken,
          t = e.waToken,
          o = (0, i.Z)(e, p),
          s = (0, l.useState)(r.toLowerCase()),
          c = s[0],
          u = s[1];
        return (
          (0, l.useEffect)(
            function () {
              u(r.toLowerCase());
            },
            [r]
          ),
          (0, d.jsx)(
            a.Z,
            v(
              v({}, o),
              {},
              {
                sx: v({ display: 'flex', position: 'relative', borderRadius: '50%' }, o.sx),
                children:
                  n || t
                    ? (0, d.jsx)(j, { symbol: c, waToken: t })
                    : (0, d.jsx)('img', {
                        src: '/icons/tokens/'.concat(c, '.svg'),
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
      function w(e) {
        var r = e.symbol,
          n = e.logoURI,
          t = (0, i.Z)(e, f),
          o = (0, l.useState)(r.toLowerCase()),
          s = o[0],
          c = o[1];
        return (0, d.jsx)(
          a.Z,
          v(
            v({}, t),
            {},
            {
              sx: v({ display: 'flex', position: 'relative', borderRadius: '50%' }, t.sx),
              children: (0, d.jsx)(u.Z, {
                children: (0, d.jsx)('img', {
                  src: 'default' !== s && n ? n : '/icons/tokens/default.svg',
                  width: '100%',
                  height: '100%',
                  alt: ''.concat(r, ' icon'),
                  onError: function () {
                    return c('default');
                  },
                }),
              }),
            }
          )
        );
      }
      function g(e) {
        var r = e.symbols,
          n = e.badgeSymbol,
          t = e.aToken,
          o = void 0 !== t && t,
          a = e.waToken,
          u = void 0 !== a && a,
          p = e.aTokens,
          f = e.waTokens,
          x = (0, i.Z)(e, m),
          b =
            p ||
            r.map(function (e, r) {
              return 0 === r && o;
            }),
          h =
            f ||
            r.map(function (e, r) {
              return 0 === r && u;
            });
        return n
          ? (0, d.jsx)(c.Z, {
              badgeContent: (0, d.jsx)(y, {
                symbol: n,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: r.map(function (e, r) {
                return (0, l.createElement)(
                  y,
                  v(
                    v({}, x),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: b[r],
                      waToken: h[r],
                      sx: v({ ml: 0 === r ? 0 : 'calc(-1 * 0.5em)' }, x.sx),
                    }
                  )
                );
              }),
            })
          : (0, d.jsx)(s.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: r.map(function (e, r) {
                return (0, l.createElement)(
                  y,
                  v(
                    v({}, x),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: b[r],
                      waToken: h[r],
                      sx: v({ ml: 0 === r ? 0 : 'calc(-1 * 0.5em)' }, x.sx),
                    }
                  )
                );
              }),
            });
      }
      function O(e) {
        var r = e.symbol,
          n = e.aToken,
          o = e.waToken,
          a = e.aTokens,
          s = e.waTokens,
          c = (0, i.Z)(e, x),
          l = r.split('_');
        if (l.length > 1) {
          if (l[0].startsWith('pools/')) {
            var u = (0, t.Z)(l),
              p = u[0],
              f = u.slice(1);
            return (0, d.jsx)(g, v(v({}, c), {}, { symbols: f, badgeSymbol: '/pools/' + p }));
          }
          return (0, d.jsx)(
            g,
            v(v({}, c), {}, { symbols: l, aToken: n, waToken: o, aTokens: a, waTokens: s })
          );
        }
        return (0, d.jsx)(y, v({ symbol: r, aToken: n, waToken: o }, c));
      }
      j.displayName = 'TokenRing';
    },
    35783: function (e, r, n) {
      n.d(r, {
        v: function () {
          return u;
        },
      });
      var t = n(59499),
        o = n(4730),
        i = n(21737),
        a = n(85893),
        s = ['children', 'sx'];
      function c(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function l(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? c(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var u = function (e) {
        var r = e.children,
          n = e.sx,
          t = (0, o.Z)(e, s),
          c = l({ mb: 6, alignItems: 'center', width: '100%' }, n);
        return (0, a.jsx)(i.Z, l(l({ sx: c }, t), {}, { children: r }));
      };
    },
    63665: function (e, r, n) {
      n.r(r),
        n.d(r, {
          ClaimRewardsModal: function () {
            return U;
          },
        });
      var t,
        o = n(67294),
        i = n(49679),
        a = n(60377),
        s = n(44949),
        c = n(15629),
        l = n(17674),
        u = n(57499),
        d = n(75331),
        p = n(1279),
        f = n(15861),
        m = n(80822),
        x = n(32867),
        b = n(20986),
        v = n(45640),
        h = n(72005),
        j = n(3062),
        y = n(79850),
        w = n(73886),
        g = n(40429),
        O = n(83063),
        k = n(44880),
        C = n(67944),
        T = n(37096),
        D = n(19408),
        P = n(50029),
        Z = n(87794),
        S = n.n(Z),
        E = n(92997),
        A = n(84207),
        I = n(85893),
        N = function (e) {
          var r = e.isWrongNetwork,
            n = e.blocked,
            t = e.selectedReward,
            o = (0, j.Y)(function (e) {
              return e.claimRewards;
            }),
            i = (0, a.HT)().reserves,
            s = (0, E.Q)({
              protocolAction: d.UQ.claimRewards,
              eventTxInfo: { assetName: t.symbol, amount: t.balance },
              tryPermit: !1,
              handleGetTxns: (function () {
                var e = (0, P.Z)(
                  S().mark(function e() {
                    return S().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              o({
                                isWrongNetwork: r,
                                blocked: n,
                                selectedReward: t,
                                formattedReserves: i,
                              })
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
              skip: 0 === Object.keys(t).length || n,
              deps: [t],
            }),
            c = s.action,
            l = s.loadingTxns,
            p = s.mainTxState,
            f = s.requiresApproval;
          return (0, I.jsx)(A.B, {
            requiresApproval: f,
            blocked: n,
            preparingTransactions: l,
            mainTxState: p,
            handleAction: c,
            actionText:
              'all' === t.symbol
                ? (0, I.jsx)(u.cC, { id: '7er5fP' })
                : (0, I.jsx)(u.cC, { id: 'kACpF3', values: { 0: t.symbol } }),
            actionInProgressText: (0, I.jsx)(u.cC, { id: 'KvG1xW' }),
            isWrongNetwork: r,
          });
        },
        M = n(27344);
      !(function (e) {
        e[(e.NOT_ENOUGH_BALANCE = 0)] = 'NOT_ENOUGH_BALANCE';
      })(t || (t = {}));
      var R = function (e) {
          var r = e.user,
            n = e.reserves,
            i = (0, s.vR)(),
            a = i.gasLimit,
            c = i.mainTxState,
            P = i.txError,
            Z = (0, j.Y)(
              (0, w.N)(function (e) {
                return [e.currentChainId, e.currentMarketData];
              })
            ),
            S = (0, l.Z)(Z, 2),
            E = S[0],
            A = S[1],
            R = (0, h.Z)(),
            U = R.chainId,
            B = R.readOnlyModeAddress,
            L = (0, o.useState)('0'),
            z = L[0],
            F = L[1],
            W = (0, o.useState)('all'),
            _ = W[0],
            V = W[1],
            G = (0, o.useState)([]),
            H = G[0],
            q = G[1],
            X = (0, o.useState)(),
            Y = X[0],
            J = X[1],
            K = (0, y.Mo)(E);
          (0, o.useEffect)(function () {
            var e = [],
              t = Number(z),
              o = [];
            if (
              (Object.keys(r.calculatedUserIncentives).forEach(function (i) {
                var a = r.calculatedUserIncentives[i],
                  s = (0, p.Fv)(a.claimableRewards, a.rewardTokenDecimals),
                  c = 0;
                if (!A.v3 && Number(s) > 0)
                  if (A.chainId === d.a_.mainnet) {
                    var l = n.find(function (e) {
                      return 'AAVE' === e.symbol;
                    });
                    c = l ? Number(l.priceInUSD) : 0;
                  } else
                    n.forEach(function (e) {
                      e.isWrappedBaseAsset && (c = Number(e.priceInUSD));
                    });
                else c = Number(a.rewardPriceFeed);
                var u = Number(s) * c;
                u > 0 &&
                  (a.assets.forEach(function (e) {
                    -1 === o.indexOf(e) && o.push(e);
                  }),
                  e.push({
                    assets: a.assets,
                    incentiveControllerAddress: a.incentiveControllerAddress,
                    symbol: a.rewardTokenSymbol,
                    balance: s,
                    balanceUsd: u.toString(),
                    rewardTokenAddress: i,
                  }),
                  (t += Number(u)));
              }),
              1 === e.length)
            )
              V(e[0].symbol);
            else if (e.length > 1 && !ee) {
              var i = {
                assets: o,
                incentiveControllerAddress: e[0].incentiveControllerAddress,
                symbol: 'all',
                balance: '0',
                balanceUsd: t.toString(),
                rewardTokenAddress: '',
              };
              V('all'), J(i);
            }
            q(e), F(t.toString());
          }, []);
          var Q = void 0;
          '0' === z && (Q = t.NOT_ENOUGH_BALANCE);
          var $ = E !== U,
            ee =
              'all' === _
                ? Y
                : H.find(function (e) {
                    return e.symbol === _;
                  });
          return P && P.blocking
            ? (0, I.jsx)(g.D, { txError: P })
            : c.success
              ? (0, I.jsx)(k.R, {
                  action: (0, I.jsx)(u.cC, { id: 'hRWvpI' }),
                  amount: null === ee || void 0 === ee ? void 0 : ee.balanceUsd,
                })
              : (0, I.jsxs)(I.Fragment, {
                  children: [
                    (0, I.jsx)(T.E, { title: 'Claim rewards' }),
                    $ && !B && (0, I.jsx)(D.I, { networkName: K.name, chainId: E }),
                    void 0 !== Q &&
                      (0, I.jsx)(f.Z, {
                        variant: 'helperText',
                        color: 'error.main',
                        children:
                          Q === t.NOT_ENOUGH_BALANCE ? (0, I.jsx)(u.cC, { id: 'p3j+mb' }) : null,
                      }),
                    H.length > 1 &&
                      (0, I.jsx)(M.h, { rewards: H, selectedReward: _, setSelectedReward: V }),
                    ee &&
                      (0, I.jsxs)(C.m6, {
                        gasLimit: a,
                        children: [
                          'all' === _ &&
                            (0, I.jsxs)(I.Fragment, {
                              children: [
                                (0, I.jsx)(b.X, {
                                  caption: (0, I.jsx)(u.cC, { id: 'fsBGk0' }),
                                  captionVariant: 'description',
                                  align: 'flex-start',
                                  mb: 'all' !== ee.symbol ? 0 : 4,
                                  children: (0, I.jsx)(m.Z, {
                                    sx: {
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'flex-end',
                                    },
                                    children: H.map(function (e) {
                                      return (0, I.jsxs)(
                                        m.Z,
                                        {
                                          sx: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            mb: 4,
                                          },
                                          children: [
                                            (0, I.jsxs)(m.Z, {
                                              sx: { display: 'flex', alignItems: 'center' },
                                              children: [
                                                (0, I.jsx)(v.T1, {
                                                  symbol: e.symbol,
                                                  sx: { mr: 1, fontSize: '16px' },
                                                }),
                                                (0, I.jsx)(x.B, {
                                                  value: Number(e.balance),
                                                  variant: 'secondary14',
                                                }),
                                                (0, I.jsx)(f.Z, {
                                                  ml: 1,
                                                  variant: 'secondary14',
                                                  children: e.symbol,
                                                }),
                                              ],
                                            }),
                                            (0, I.jsx)(x.B, {
                                              value: Number(e.balanceUsd),
                                              variant: 'helperText',
                                              compact: !0,
                                              symbol: 'USD',
                                              color: 'text.secondary',
                                            }),
                                          ],
                                        },
                                        'claim-'.concat(e.symbol)
                                      );
                                    }),
                                  }),
                                }),
                                (0, I.jsx)(C.oD, {
                                  description: (0, I.jsx)(u.cC, { id: '/yQcJM' }),
                                  value: z,
                                }),
                              ],
                            }),
                          'all' !== _ &&
                            (0, I.jsx)(C.XJ, {
                              symbol: (0, I.jsx)(v.T1, { symbol: ee.symbol }),
                              futureValue: ee.balance,
                              futureValueUSD: ee.balanceUsd,
                              description: (0, I.jsx)(u.cC, {
                                id: 'jMam5g',
                                values: { 0: ee.symbol },
                              }),
                            }),
                        ],
                      }),
                    P && (0, I.jsx)(O.Q, { txError: P }),
                    (0, I.jsx)(N, {
                      isWrongNetwork: $,
                      selectedReward: null !== ee && void 0 !== ee ? ee : {},
                      blocked: void 0 !== Q,
                    }),
                  ],
                });
        },
        U = function () {
          var e = (0, s.vR)(),
            r = e.type,
            n = e.close,
            t = (0, a.HT)().reserves;
          return (0, I.jsx)(c.P, {
            open: r === s.w8.ClaimRewards,
            setOpen: n,
            children: (0, I.jsx)(i.X, {
              children: function (e) {
                return (0, I.jsx)(R, { user: e, reserves: t });
              },
            }),
          });
        };
    },
    27344: function (e, r, n) {
      n.d(r, {
        h: function () {
          return m;
        },
      });
      var t = n(57499),
        o = n(40476),
        i = n(15861),
        a = n(80822),
        s = n(67720),
        c = n(94054),
        l = n(18972),
        u = n(10315),
        d = (n(67294), n(32867)),
        p = n(45640),
        f = n(85893),
        m = function (e) {
          var r = e.rewards,
            n = e.selectedReward,
            m = e.setSelectedReward;
          return (0, f.jsxs)(c.Z, {
            sx: { mb: 1, width: '100%' },
            children: [
              (0, f.jsx)(o.Z, {
                sx: { mb: 1, color: 'text.secondary' },
                children: (0, f.jsx)(t.cC, { id: 'JU6q+W' }),
              }),
              (0, f.jsxs)(u.Z, {
                value: n,
                onChange: function (e) {
                  return m(e.target.value);
                },
                sx: {
                  width: '100%',
                  height: '44px',
                  borderRadius: '6px',
                  borderColor: 'divider',
                  outline: 'none !important',
                  color: 'text.primary',
                  '.MuiOutlinedInput-input': { backgroundColor: 'transparent' },
                  '&:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline': {
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
                native: !1,
                renderValue: function (e) {
                  if ('all' === e)
                    return (0, f.jsx)(i.Z, {
                      color: 'text.primary',
                      children: (0, f.jsx)(t.cC, { id: 'rwVVB7' }),
                    });
                  var n = r.find(function (r) {
                    return r.symbol === e;
                  });
                  return (0, f.jsxs)(a.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: [
                      (0, f.jsx)(p.T1, { symbol: n.symbol, sx: { mr: 2, fontSize: '16px' } }),
                      (0, f.jsx)(i.Z, { color: 'text.primary', children: n.symbol }),
                    ],
                  });
                },
                children: [
                  (0, f.jsx)(l.Z, {
                    value: 'all',
                    children: (0, f.jsx)(i.Z, {
                      variant: 'subheader1',
                      children: (0, f.jsx)(t.cC, { id: 'rwVVB7' }),
                    }),
                  }),
                  (0, f.jsx)(s.Z, {}),
                  r.map(function (e) {
                    return (0, f.jsx)(
                      l.Z,
                      {
                        value: e.symbol,
                        children: (0, f.jsxs)(a.Z, {
                          sx: { display: 'flex', alignItems: 'center' },
                          children: [
                            (0, f.jsx)(p.T1, { symbol: e.symbol, sx: { fontSize: '24px', mr: 3 } }),
                            (0, f.jsx)(i.Z, {
                              variant: 'subheader1',
                              sx: { mr: 1 },
                              children: e.symbol,
                            }),
                            (0, f.jsx)(i.Z, {
                              component: 'span',
                              sx: { display: 'inline-flex', alignItems: 'center' },
                              variant: 'caption',
                              color: 'text.muted',
                              children: '~',
                            }),
                            (0, f.jsx)(d.B, {
                              value: Number(e.balanceUsd),
                              variant: 'caption',
                              compact: !0,
                              symbol: 'USD',
                              symbolsColor: 'text.muted',
                              color: 'text.muted',
                            }),
                          ],
                        }),
                      },
                      'reward-token-'.concat(e.symbol)
                    );
                  }),
                ],
              }),
            ],
          });
        };
    },
    50060: function (e, r, n) {
      n.d(r, {
        P: function () {
          return h;
        },
      });
      var t = n(80854),
        o = n(1279),
        i = n(81206),
        a = n(82403),
        s = n(70794),
        c = n(3062),
        l = n(79850),
        u = n(47892),
        d = n(59499),
        p = n(99673),
        f = n(52251),
        m = n(13441);
      function x(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          r &&
            (t = t.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      var b = function (e, r, n) {
          var t = (0, m.z)().poolTokensBalanceService;
          return (0, p.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var n = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? x(Object(n), !0).forEach(function (r) {
                        (0, d.Z)(e, r, n[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                      : x(Object(n)).forEach(function (r) {
                          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                        });
                }
                return e;
              })(
                {
                  queryKey: f.B.poolTokens(r, e),
                  queryFn: function () {
                    return t.getPoolTokensBalances(e, r);
                  },
                  enabled: !!r,
                  refetchInterval: f.g,
                },
                n
              );
            }),
          });
        },
        v = function (e) {
          var r = (0, c.Y)(function (e) {
              return e.account;
            }),
            n = b(e, r),
            d = (0, u.T)(e),
            p =
              n.some(function (e) {
                return e.isLoading;
              }) ||
              d.some(function (e) {
                return e.isLoading;
              });
          return {
            walletBalances: d.map(function (r, c) {
              var u;
              return (function (e) {
                var r = e.reservesHumanized,
                  n = e.balances,
                  c = e.marketData,
                  u = (null === r || void 0 === r ? void 0 : r.reservesData) || [],
                  d = (null === r || void 0 === r ? void 0 : r.baseCurrencyData) || {
                    marketReferenceCurrencyDecimals: 0,
                    marketReferenceCurrencyPriceInUsd: '0',
                    networkBaseTokenPriceInUsd: '0',
                    networkBaseTokenPriceDecimals: 0,
                  },
                  p = !0;
                return {
                  walletBalances: (null !== n && void 0 !== n ? n : []).reduce(function (e, r) {
                    var n = u.find(function (e) {
                      var n;
                      return r.address === t.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (n = l.m5[c.chainId].wrappedBaseAssetSymbol) || void 0 === n
                              ? void 0
                              : n.toLowerCase())
                        : e.underlyingAsset.toLowerCase() === r.address;
                    });
                    return (
                      '0' !== r.amount && (p = !1),
                      n &&
                        (e[r.address] = {
                          amount: (0, o.Fv)(r.amount, n.decimals),
                          amountUSD: (0, i.Z)({
                            amount: new s.O(r.amount),
                            currencyDecimals: n.decimals,
                            priceInMarketReferenceCurrency: n.priceInMarketReferenceCurrency,
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
                balances: null === (u = n[c]) || void 0 === u ? void 0 : u.data,
                marketData: e[c],
              });
            }),
            isLoading: p,
          };
        },
        h = function (e) {
          var r = v([e]),
            n = r.walletBalances,
            t = r.isLoading;
          return {
            walletBalances: n[0].walletBalances,
            hasEmptyWallet: n[0].hasEmptyWallet,
            loading: t,
          };
        };
    },
  },
]);
