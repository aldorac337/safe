'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8467],
  {
    62753: function (e, r, n) {
      var t = n(64836);
      r.Z = void 0;
      var o = t(n(64938)),
        i = n(85893);
      r.Z = (0, o.default)(
        (0, i.jsx)('path', {
          d: 'm19.77 7.23.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 10H6V5h6zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        }),
        'LocalGasStation'
      );
    },
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
          return j;
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
        f = n(2127),
        p = n(85893),
        v = ['sx'],
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
      function h(e, r) {
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
      function b(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? h(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var j = function (e) {
        var r = e.text,
          n = e.icon,
          t = e.iconSize,
          h = void 0 === t ? 14 : t,
          j = e.iconColor,
          x = e.iconMargin,
          y = e.children,
          g = e.textColor,
          O = e.wrapperProps,
          w = (O = void 0 === O ? {} : O).sx,
          C = (0, o.Z)(O, v),
          T = e.event,
          k = e.open,
          A = void 0 !== k && k,
          P = e.setOpen,
          E = (0, o.Z)(e, m),
          S = (0, u.useState)(A),
          _ = S[0],
          D = S[1],
          R = (0, d.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, p.jsxs)(
          a.Z,
          b(
            b({ sx: b({ display: 'flex', alignItems: 'center' }, w) }, C),
            {},
            {
              children: [
                r && (0, p.jsx)(s.Z, b(b({}, E), {}, { color: g, children: r })),
                (0, p.jsx)(f.a, {
                  tooltipContent: (0, p.jsx)(p.Fragment, { children: y }),
                  open: _,
                  setOpen: function () {
                    P && P(!_), D(!_);
                  },
                  children: (0, p.jsx)(c.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: h,
                      height: h,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: x || 0.5,
                    },
                    onClick: function () {
                      T && R(T.eventName, b({}, T.eventParams));
                    },
                    children: (0, p.jsx)(l.Z, {
                      sx: {
                        fontSize: h,
                        color: j || (_ ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: j || 'info.main' },
                      },
                      children: n || (0, p.jsx)(i.Z, {}),
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
          return b;
        },
        a9: function () {
          return x;
        },
        r$: function () {
          return j;
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
        f = n(85893);
      function p(e, r) {
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
            ? p(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : p(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
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
        h = function (e) {
          var r = e.color;
          return (0, f.jsx)(a.Z, {
            sx: { ml: '3px', color: r || 'text.muted', fontSize: '14px' },
            children: (0, f.jsx)(i.Z, {}),
          });
        },
        b = function (e) {
          var r = e.typographyProps,
            n = (0, s.Z)(),
            t = v(
              {
                border: '1px solid '.concat(n.palette.warning.main),
                color: n.palette.warning.main,
              },
              m
            );
          return (0, f.jsx)(d.a, {
            withoutHover: !0,
            tooltipContent: (0, f.jsx)(y, { content: (0, f.jsx)(o.cC, { id: 'bXr0ee' }) }),
            children: (0, f.jsxs)(c.Z, {
              sx: t,
              children: [
                (0, f.jsx)(
                  l.Z,
                  v(
                    v(
                      {
                        variant: 'secondary12',
                        sx: { lineHeight: '0.75rem' },
                        color: n.palette.warning.main,
                      },
                      r
                    ),
                    {},
                    { children: (0, f.jsx)(o.cC, { id: 'KYAjf3' }) }
                  )
                ),
                (0, f.jsx)(h, { color: n.palette.warning.main }),
              ],
            }),
          });
        },
        j = function () {
          return (0, f.jsx)(d.a, {
            tooltipContent: (0, f.jsx)(y, { content: (0, f.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, f.jsxs)(c.Z, {
              sx: m,
              children: [
                (0, f.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, f.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, f.jsx)(h, {}),
              ],
            }),
          });
        },
        x = function () {
          return (0, f.jsx)(d.a, {
            tooltipContent: (0, f.jsx)(y, { content: (0, f.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, f.jsxs)(c.Z, {
              sx: m,
              children: [
                (0, f.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, f.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, f.jsx)(h, {}),
              ],
            }),
          });
        },
        y = function (e) {
          var r = e.content;
          return (0, f.jsxs)(c.Z, {
            children: [
              (0, f.jsx)(c.Z, { sx: { mb: 4 }, children: r }),
              (0, f.jsx)(l.Z, {
                variant: 'subheader2',
                color: 'text.secondary',
                children: (0, f.jsx)(o.cC, {
                  id: 'lfEjIE',
                  components: {
                    0: (0, f.jsx)(u.Z, {
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
          return v;
        },
        J: function () {
          return f;
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
        f = function (e) {
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
            f = (0, i.pV)(s, 3 * l).toNumber();
          return (
            o && (f = Math.trunc(Number(f) * Math.pow(10, t)) / Math.pow(10, t)),
            {
              prefix: new Intl.NumberFormat('en-US', {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
              }).format(f),
              postfix: u,
            }
          );
        };
      function p(e) {
        var r = e.value,
          n = e.visibleDecimals,
          t = e.roundDown,
          o = f({ value: r, visibleDecimals: n, roundDown: t }),
          i = o.prefix,
          a = o.postfix;
        return (0, s.jsxs)(s.Fragment, { children: [i, a] });
      }
      function v(e) {
        var r = e.value,
          n = e.symbol,
          t = e.visibleDecimals,
          i = e.compact,
          l = e.percent,
          d = e.symbolsVariant,
          f = e.symbolsColor,
          v = e.roundDown,
          m = e.compactThreshold,
          h = (0, o.Z)(e, c),
          b = l ? 100 * Number(r) : Number(r),
          j = null !== t && void 0 !== t ? t : 0;
        0 === b ? (j = 0) : void 0 === t && (j = b >= 1 || l || 'USD' === n ? 2 : 7);
        var x = Math.pow(10, -j),
          y = 0 !== b && Math.abs(b) < Math.abs(x),
          g = y ? x : b,
          O = !1 !== i && (i || b > 99999);
        return (
          v && !O && (g = Math.trunc(Number(g) * Math.pow(10, j)) / Math.pow(10, j)),
          (0, s.jsxs)(
            a.Z,
            u(
              u({}, h),
              {},
              {
                sx: u(
                  {
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                  },
                  h.sx
                ),
                noWrap: !0,
                children: [
                  y &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || h.variant,
                      color: f || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === n || void 0 === n ? void 0 : n.toLowerCase()) &&
                    !l &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || h.variant,
                      color: f || 'text.secondary',
                      children: '$',
                    }),
                  O
                    ? (0, s.jsx)(p, {
                        value: g,
                        visibleDecimals: j,
                        roundDown: v,
                        compactThreshold: m,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: j,
                        minimumFractionDigits: j,
                      }).format(g),
                  l &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || h.variant,
                      color: f || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === n || void 0 === n ? void 0 : n.toLowerCase()) &&
                    'undefined' !== typeof n &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || h.variant,
                      color: f || 'text.secondary',
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
          f = e.align,
          p = void 0 === f ? 'center' : f,
          v = (0, o.Z)(e, c);
        return (0, s.jsxs)(
          i.Z,
          u(
            u({}, v),
            {},
            {
              sx: u({ display: 'flex', alignItems: p, justifyContent: 'space-between' }, v.sx),
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
          return j;
        },
        T1: function () {
          return w;
        },
        UD: function () {
          return g;
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
        f = ['symbol', 'aToken', 'waToken'],
        p = ['symbol', 'logoURI'],
        v = ['symbols', 'badgeSymbol', 'aToken', 'waToken', 'aTokens', 'waTokens'],
        m = ['symbol', 'aToken', 'waToken', 'aTokens', 'waTokens'];
      function h(e, r) {
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
      function b(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? h(Object(n), !0).forEach(function (r) {
                (0, o.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      function j(e) {
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
                    f = d.getAttribute('width'),
                    p = d.getAttribute('height'),
                    v = d.getAttribute('viewBox');
                  d.setAttribute('x', 25),
                    d.setAttribute('width', 206),
                    d.setAttribute('y', 25),
                    d.setAttribute('height', 206),
                    v || d.setAttribute('viewBox', '0 0 '.concat(f, ' ').concat(p)),
                    null === (u = a.current) || void 0 === u || u.appendChild(d);
                  var m = new XMLSerializer().serializeToString(a.current);
                  n(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(m)))
                    )
                  );
                } else {
                  var h,
                    b = new XMLSerializer().serializeToString(
                      null === (h = i.current) || void 0 === h ? void 0 : h.contentDocument
                    );
                  n(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(b)))
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
              (t || o) && (0, d.jsx)(x, { ref: a, waToken: o }),
            ],
          })
        );
      }
      var x = (0, l.forwardRef)(function (e, r) {
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
          o = (0, i.Z)(e, f),
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
            b(
              b({}, o),
              {},
              {
                sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, o.sx),
                children:
                  n || t
                    ? (0, d.jsx)(x, { symbol: c, waToken: t })
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
      function g(e) {
        var r = e.symbol,
          n = e.logoURI,
          t = (0, i.Z)(e, p),
          o = (0, l.useState)(r.toLowerCase()),
          s = o[0],
          c = o[1];
        return (0, d.jsx)(
          a.Z,
          b(
            b({}, t),
            {},
            {
              sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, t.sx),
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
      function O(e) {
        var r = e.symbols,
          n = e.badgeSymbol,
          t = e.aToken,
          o = void 0 !== t && t,
          a = e.waToken,
          u = void 0 !== a && a,
          f = e.aTokens,
          p = e.waTokens,
          m = (0, i.Z)(e, v),
          h =
            f ||
            r.map(function (e, r) {
              return 0 === r && o;
            }),
          j =
            p ||
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
                  b(
                    b({}, m),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: h[r],
                      waToken: j[r],
                      sx: b({ ml: 0 === r ? 0 : 'calc(-1 * 0.5em)' }, m.sx),
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
                  b(
                    b({}, m),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: h[r],
                      waToken: j[r],
                      sx: b({ ml: 0 === r ? 0 : 'calc(-1 * 0.5em)' }, m.sx),
                    }
                  )
                );
              }),
            });
      }
      function w(e) {
        var r = e.symbol,
          n = e.aToken,
          o = e.waToken,
          a = e.aTokens,
          s = e.waTokens,
          c = (0, i.Z)(e, m),
          l = r.split('_');
        if (l.length > 1) {
          if (l[0].startsWith('pools/')) {
            var u = (0, t.Z)(l),
              f = u[0],
              p = u.slice(1);
            return (0, d.jsx)(O, b(b({}, c), {}, { symbols: p, badgeSymbol: '/pools/' + f }));
          }
          return (0, d.jsx)(
            O,
            b(b({}, c), {}, { symbols: l, aToken: n, waToken: o, aTokens: a, waTokens: s })
          );
        }
        return (0, d.jsx)(y, b({ symbol: r, aToken: n, waToken: o }, c));
      }
      x.displayName = 'TokenRing';
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
    54167: function (e, r, n) {
      n.r(r),
        n.d(r, {
          CollateralChangeModal: function () {
            return R;
          },
        });
      var t,
        o = n(59499),
        i = n(57499),
        a = n(67294),
        s = n(49679),
        c = n(44949),
        l = n(15629),
        u = n(92519),
        d = n(1279),
        f = n(20854),
        p = n(15861),
        v = n(35783),
        m = n(89771),
        h = n(7568),
        b = n(83063),
        j = n(44880),
        x = n(67944),
        y = n(13918),
        g = n(50029),
        O = n(87794),
        w = n.n(O),
        C = n(75331),
        T = n(92997),
        k = n(3062),
        A = n(84207),
        P = n(85893),
        E = function (e) {
          var r = e.poolReserve,
            n = e.isWrongNetwork,
            t = e.usageAsCollateral,
            o = e.blocked,
            a = e.symbol,
            s = (0, k.Y)(function (e) {
              return e.setUsageAsCollateral;
            }),
            c = (0, T.Q)({
              tryPermit: !1,
              protocolAction: C.UQ.setUsageAsCollateral,
              eventTxInfo: {
                assetName: r.name,
                asset: r.underlyingAsset,
                previousState: (!t).toString(),
                newState: t.toString(),
              },
              handleGetTxns: (function () {
                var e = (0, g.Z)(
                  w().mark(function e() {
                    return w().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              s({ reserve: r.underlyingAsset, usageAsCollateral: t })
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
              skip: o,
            }),
            l = c.action,
            u = c.loadingTxns,
            d = c.mainTxState,
            f = c.requiresApproval;
          return (0, P.jsx)(A.B, {
            requiresApproval: f,
            blocked: o,
            preparingTransactions: u,
            mainTxState: d,
            isWrongNetwork: n,
            actionText: t
              ? (0, P.jsx)(i.cC, { id: 'y66tBm', values: { symbol: a } })
              : (0, P.jsx)(i.cC, { id: 'RIfckG', values: { symbol: a } }),
            actionInProgressText: (0, P.jsx)(i.cC, { id: 'NF0e1Q' }),
            handleAction: l,
          });
        };
      !(function (e) {
        (e[(e.DO_NOT_HAVE_SUPPLIES_IN_THIS_CURRENCY = 0)] =
          'DO_NOT_HAVE_SUPPLIES_IN_THIS_CURRENCY'),
          (e[(e.CAN_NOT_USE_THIS_CURRENCY_AS_COLLATERAL = 1)] =
            'CAN_NOT_USE_THIS_CURRENCY_AS_COLLATERAL'),
          (e[(e.CAN_NOT_SWITCH_USAGE_AS_COLLATERAL_MODE = 2)] =
            'CAN_NOT_SWITCH_USAGE_AS_COLLATERAL_MODE'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 3)] = 'ZERO_LTV_WITHDRAW_BLOCKED');
      })(t || (t = {}));
      var S = function (e) {
        var r = e.poolReserve,
          n = e.userReserve,
          o = e.isWrongNetwork,
          s = e.symbol,
          l = e.user,
          u = (0, c.vR)(),
          g = u.gasLimit,
          O = u.mainTxState,
          w = u.txError,
          C = (0, m.ov)().debtCeiling,
          T = (0, a.useState)(n.usageAsCollateralEnabledOnUser),
          k = T[0],
          A = T[1],
          S = !n.usageAsCollateralEnabledOnUser,
          _ = (0, d.hE)(l.totalCollateralMarketReferenceCurrency),
          D = !r.isIsolated && S,
          R = !r.isIsolated && !S,
          L = r.isIsolated && S,
          Z = r.isIsolated && !S,
          I = _[S ? 'plus' : 'minus'](n.underlyingBalanceMarketReferenceCurrency),
          N = (0, f.L1)({
            collateralBalanceMarketReferenceCurrency: I,
            borrowBalanceMarketReferenceCurrency: l.totalBorrowsMarketReferenceCurrency,
            currentLiquidationThreshold: l.currentLiquidationThreshold,
          }),
          U = (0, h.W)(),
          M = void 0;
        U.length > 0 && !U.includes(r.symbol)
          ? (M = t.ZERO_LTV_WITHDRAW_BLOCKED)
          : (0, d.hE)(n.underlyingBalance).eq(0)
            ? (M = t.DO_NOT_HAVE_SUPPLIES_IN_THIS_CURRENCY)
            : (!n.usageAsCollateralEnabledOnUser && '0' === r.reserveLiquidationThreshold) ||
                '0' === r.reserveLiquidationThreshold
              ? (M = t.CAN_NOT_USE_THIS_CURRENCY_AS_COLLATERAL)
              : n.usageAsCollateralEnabledOnUser &&
                '0' !== l.totalBorrowsMarketReferenceCurrency &&
                N.lte('1') &&
                (M = t.CAN_NOT_SWITCH_USAGE_AS_COLLATERAL_MODE);
        var B = function () {
          switch (M) {
            case t.DO_NOT_HAVE_SUPPLIES_IN_THIS_CURRENCY:
              return (0, P.jsx)(i.cC, { id: 'wRRqvW' });
            case t.CAN_NOT_USE_THIS_CURRENCY_AS_COLLATERAL:
              return (0, P.jsx)(i.cC, { id: 'JPrLjO' });
            case t.CAN_NOT_SWITCH_USAGE_AS_COLLATERAL_MODE:
              return (0, P.jsx)(i.cC, { id: 'yhvj6d' });
            case t.ZERO_LTV_WITHDRAW_BLOCKED:
              return (0, P.jsx)(i.cC, { id: 'nUK1ou', values: { 0: U.join(', ') } });
            default:
              return null;
          }
        };
        return (
          (0, a.useEffect)(
            function () {
              O.success && A(S);
            },
            [O.success, k]
          ),
          O.success
            ? (0, P.jsx)(j.R, { collateral: k, symbol: r.symbol })
            : (0, P.jsxs)(P.Fragment, {
                children: [
                  D &&
                    (0, P.jsx)(v.v, {
                      severity: 'warning',
                      icon: !1,
                      sx: { mb: 3 },
                      children: (0, P.jsx)(i.cC, { id: 'PpqD5g' }),
                    }),
                  R &&
                    (0, P.jsx)(v.v, {
                      severity: 'warning',
                      icon: !1,
                      sx: { mb: 3 },
                      children: (0, P.jsx)(i.cC, { id: 'a5RYZd' }),
                    }),
                  L && (0, P.jsx)(y.i, { asset: r.symbol }),
                  Z &&
                    (0, P.jsx)(v.v, {
                      severity: 'info',
                      icon: !1,
                      sx: { mb: 3 },
                      children: (0, P.jsx)(i.cC, { id: 'XZzneG' }),
                    }),
                  r.isIsolated && C.determineWarningDisplay({ debtCeiling: C }),
                  (0, P.jsxs)(x.m6, {
                    gasLimit: g,
                    children: [
                      (0, P.jsx)(x.oD, {
                        symbol: r.symbol,
                        iconSymbol: r.iconSymbol,
                        description: (0, P.jsx)(i.cC, { id: 'zmTPiV' }),
                        value: n.underlyingBalance,
                      }),
                      (0, P.jsx)(x.jz, {
                        visibleHfChange: !0,
                        healthFactor: l.healthFactor,
                        futureHealthFactor: N.toString(10),
                      }),
                    ],
                  }),
                  void 0 !== M &&
                    (0, P.jsx)(p.Z, {
                      variant: 'helperText',
                      color: 'error.main',
                      children: (0, P.jsx)(B, {}),
                    }),
                  w && (0, P.jsx)(b.Q, { txError: w }),
                  (0, P.jsx)(E, {
                    symbol: s,
                    poolReserve: r,
                    usageAsCollateral: S,
                    isWrongNetwork: o,
                    blocked: void 0 !== M,
                  }),
                ],
              })
        );
      };
      function _(e, r) {
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
      function D(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? _(Object(n), !0).forEach(function (r) {
                (0, o.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : _(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var R = function () {
        var e = (0, c.vR)(),
          r = e.type,
          n = e.close,
          t = e.args;
        return (0, P.jsx)(l.P, {
          open: r === c.w8.CollateralChange,
          setOpen: n,
          children: (0, P.jsx)(u.A, {
            title: (0, P.jsx)(i.cC, { id: 'sK+Nag' }),
            underlyingAsset: t.underlyingAsset,
            children: function (e) {
              return (0, P.jsx)(s.X, {
                children: function (r) {
                  return (0, P.jsx)(S, D(D({}, e), {}, { user: r }));
                },
              });
            },
          }),
        });
      };
    },
    92519: function (e, r, n) {
      n.d(r, {
        A: function () {
          return b;
        },
      });
      var t = n(80854),
        o = (n(67294), n(60377)),
        i = n(50060),
        a = n(89771),
        s = n(53097),
        c = n(44949),
        l = n(72005),
        u = n(3062),
        d = n(65361),
        f = n(79850),
        p = n(37096),
        v = n(19408),
        m = n(40429),
        h = n(85893),
        b = function (e) {
          var r,
            n,
            b = e.hideTitleSymbol,
            j = e.underlyingAsset,
            x = e.children,
            y = e.requiredChainId,
            g = e.title,
            O = e.keepWrappedSymbol,
            w = (0, l.Z)().readOnlyModeAddress,
            C = (0, u.Y)(function (e) {
              return e.currentMarketData;
            }),
            T = (0, u.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            k = (0, i.P)(C).walletBalances,
            A = (0, o.HT)(),
            P = A.user,
            E = A.reserves,
            S = (0, c.vR)(),
            _ = S.txError,
            D = S.mainTxState,
            R = (0, s.Q)(y),
            L = R.isWrongNetwork,
            Z = R.requiredChainId;
          if (_ && _.blocking) return (0, h.jsx)(m.D, { txError: _ });
          var I = E.find(function (e) {
              return j.toLowerCase() === t.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : j === e.underlyingAsset;
            }),
            N =
              null === P || void 0 === P
                ? void 0
                : P.userReservesData.find(function (e) {
                    return j.toLowerCase() === t.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : j === e.underlyingAsset;
                  }),
            U = I.isWrappedBaseAsset && !O ? T.baseAssetSymbol : I.symbol;
          return (0, h.jsxs)(a.hv, {
            asset: I,
            children: [
              !D.success && (0, h.jsx)(p.E, { title: g, symbol: b ? void 0 : U }),
              L &&
                !w &&
                (0, h.jsx)(v.I, {
                  networkName: (0, f.Mo)(Z).name,
                  chainId: Z,
                  event: { eventName: d.vh.SWITCH_NETWORK, eventParams: { asset: j } },
                }),
              x({
                isWrongNetwork: L,
                nativeBalance:
                  (null === (r = k[t.hP.toLowerCase()]) || void 0 === r ? void 0 : r.amount) || '0',
                tokenBalance:
                  (null === (n = k[I.underlyingAsset.toLowerCase()]) || void 0 === n
                    ? void 0
                    : n.amount) || '0',
                poolReserve: I,
                symbol: U,
                underlyingAsset: j,
                userReserve: N,
              }),
            ],
          });
        };
    },
    13918: function (e, r, n) {
      n.d(r, {
        i: function () {
          return c;
        },
      });
      var t = n(57499),
        o = n(15861),
        i = n(38577),
        a = n(35783),
        s = n(85893),
        c = function (e) {
          var r = e.asset,
            n = e.severity;
          return (0, s.jsxs)(a.v, {
            severity: n || 'info',
            sx: { mb: 3 },
            children: [
              (0, s.jsx)(o.Z, {
                variant: 'subheader1',
                mb: 0.5,
                children: (0, s.jsx)(t.cC, { id: '94OHPx' }),
              }),
              (0, s.jsx)(o.Z, {
                children: (0, s.jsx)(t.cC, {
                  id: 'igkfR1',
                  values: { 0: r || '' },
                  components: {
                    0: (0, s.jsx)(i.rU, {
                      href: 'https://docs.aave.com/faq/aave-v3-features#isolation-mode',
                    }),
                  },
                }),
              }),
            ],
          });
        };
    },
    50060: function (e, r, n) {
      n.d(r, {
        P: function () {
          return j;
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
        f = n(99673),
        p = n(52251),
        v = n(13441);
      function m(e, r) {
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
      var h = function (e, r, n) {
          var t = (0, v.z)().poolTokensBalanceService;
          return (0, f.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var n = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? m(Object(n), !0).forEach(function (r) {
                        (0, d.Z)(e, r, n[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                      : m(Object(n)).forEach(function (r) {
                          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                        });
                }
                return e;
              })(
                {
                  queryKey: p.B.poolTokens(r, e),
                  queryFn: function () {
                    return t.getPoolTokensBalances(e, r);
                  },
                  enabled: !!r,
                  refetchInterval: p.g,
                },
                n
              );
            }),
          });
        },
        b = function (e) {
          var r = (0, c.Y)(function (e) {
              return e.account;
            }),
            n = h(e, r),
            d = (0, u.T)(e),
            f =
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
                  f = !0;
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
                      '0' !== r.amount && (f = !1),
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
                  hasEmptyWallet: f,
                };
              })({
                reservesHumanized: r.data,
                balances: null === (u = n[c]) || void 0 === u ? void 0 : u.data,
                marketData: e[c],
              });
            }),
            isLoading: f,
          };
        },
        j = function (e) {
          var r = b([e]),
            n = r.walletBalances,
            t = r.isLoading;
          return {
            walletBalances: n[0].walletBalances,
            hasEmptyWallet: n[0].hasEmptyWallet,
            loading: t,
          };
        };
    },
    53097: function (e, r, n) {
      n.d(r, {
        Q: function () {
          return i;
        },
      });
      var t = n(72005),
        o = n(3062);
      function i(e) {
        var r = (0, o.Y)(function (e) {
            return e.currentChainId;
          }),
          n = e || r;
        return { isWrongNetwork: (0, t.Z)().chainId !== n, requiredChainId: n };
      }
    },
    7568: function (e, r, n) {
      n.d(r, {
        W: function () {
          return i;
        },
      });
      var t = n(3062),
        o = n(62535),
        i = function () {
          var e = (0, t.Y)(function (e) {
              return e.currentMarketData;
            }),
            r = (0, o.C)(e).data;
          if (!e.v3 || !r) return [];
          if ('0' === r.totalBorrowsUSD) return [];
          var n = [];
          return (
            r.userReservesData.forEach(function (e) {
              Number(e.scaledATokenBalance) > 0 &&
                '0' === e.reserve.baseLTVasCollateral &&
                e.usageAsCollateralEnabledOnUser &&
                '0' !== e.reserve.reserveLiquidationThreshold &&
                n.push(e.reserve.symbol);
            }),
            n
          );
        };
    },
    64343: function (e, r, n) {
      var t = n(67294);
      const o = t.forwardRef(function (e, r) {
        return t.createElement(
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
          t.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M5 13l4 4L19 7',
          })
        );
      });
      r.Z = o;
    },
    80227: function (e, r, n) {
      var t = n(67294);
      const o = t.forwardRef(function (e, r) {
        return t.createElement(
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
          t.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z',
            clipRule: 'evenodd',
          })
        );
      });
      r.Z = o;
    },
    36864: function (e, r, n) {
      function t() {
        return (
          (t =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              }
              return e;
            }),
          t.apply(this, arguments)
        );
      }
      n.d(r, {
        Z: function () {
          return t;
        },
      });
    },
  },
]);
