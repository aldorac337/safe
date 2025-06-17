'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [542],
  {
    20929: function (e, r, t) {
      t.d(r, {
        S: function () {
          return a;
        },
      });
      var n = t(57499),
        o = t(85893);
      function a(e) {
        var r = (function (e) {
            return {
              d: Math.floor(e / 86400),
              h: Math.floor((e % 86400) / 3600),
              m: Math.floor((e % 3600) / 60),
              s: Math.floor(e % 60),
            };
          })(e.seconds),
          t = r.d,
          a = r.h,
          i = r.m,
          s = r.s;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            0 !== t &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'HkEDbS', values: { d: t } }),
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
    49212: function (e, r, t) {
      t.d(r, {
        G: function () {
          return h;
        },
      });
      var n = t(59499),
        o = t(4730),
        a = t(38264),
        i = t(80822),
        s = t(15861),
        c = t(93946),
        l = t(53219),
        u = t(67294),
        d = t(3062),
        p = t(2127),
        m = t(85893),
        f = ['sx'],
        y = [
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
      function b(e) {
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
      var h = function (e) {
        var r = e.text,
          t = e.icon,
          n = e.iconSize,
          v = void 0 === n ? 14 : n,
          h = e.iconColor,
          x = e.iconMargin,
          g = e.children,
          j = e.textColor,
          k = e.wrapperProps,
          O = (k = void 0 === k ? {} : k).sx,
          w = (0, o.Z)(k, f),
          C = e.event,
          T = e.open,
          A = void 0 !== T && T,
          S = e.setOpen,
          P = (0, o.Z)(e, y),
          I = (0, u.useState)(A),
          D = I[0],
          E = I[1],
          M = (0, d.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, m.jsxs)(
          i.Z,
          b(
            b({ sx: b({ display: 'flex', alignItems: 'center' }, O) }, w),
            {},
            {
              children: [
                r && (0, m.jsx)(s.Z, b(b({}, P), {}, { color: j, children: r })),
                (0, m.jsx)(p.a, {
                  tooltipContent: (0, m.jsx)(m.Fragment, { children: g }),
                  open: D,
                  setOpen: function () {
                    S && S(!D), E(!D);
                  },
                  children: (0, m.jsx)(c.Z, {
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
                      C && M(C.eventName, b({}, C.eventParams));
                    },
                    children: (0, m.jsx)(l.Z, {
                      sx: {
                        fontSize: v,
                        color: h || (D ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: h || 'info.main' },
                      },
                      children: t || (0, m.jsx)(a.Z, {}),
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
    },
    37836: function (e, r, t) {
      t.d(r, {
        v: function () {
          return i;
        },
      });
      var n = t(57499),
        o = t(38577),
        a = t(85893),
        i = function () {
          return (0, a.jsx)(n.cC, {
            id: 'WaZyaV',
            components: {
              0: (0, a.jsx)('b', {}),
              1: (0, a.jsx)(o.rU, {
                href: 'https://docs.aave.com/developers/v/2.0/guides/ampl-asset-listing',
                underline: 'always',
              }),
            },
          });
        };
    },
    88178: function (e, r, t) {
      t.d(r, {
        C: function () {
          return m;
        },
      });
      var n = t(57499),
        o = t(80227),
        a = t(26447),
        i = t(15861),
        s = t(80822),
        c = t(88078),
        l = t(53219),
        u = t(66510),
        d = t(32867),
        p = t(85893),
        m = function (e) {
          var r = e.decimals,
            t = e.tokenWrapperAddress,
            m = e.tokenInSymbol,
            f = e.tokenOutSymbol,
            y = (0, u.v)('1', r, t),
            v = y.isLoading,
            b = y.data;
          return (0, p.jsxs)(a.Z, {
            direction: 'column',
            gap: 3,
            children: [
              (0, p.jsx)(i.Z, { variant: 'tooltip', children: (0, p.jsx)(n.cC, { id: 'kzZyM4' }) }),
              (0, p.jsxs)(a.Z, {
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, p.jsx)(s.Z, {
                    children: (0, p.jsx)(i.Z, {
                      variant: 'secondary12',
                      children: (0, p.jsx)(n.cC, { id: 'sXKb3l' }),
                    }),
                  }),
                  v
                    ? (0, p.jsx)(c.Z, { variant: 'rectangular', width: 120, height: 14 })
                    : (0, p.jsxs)(a.Z, {
                        direction: 'row',
                        alignItems: 'center',
                        gap: 1,
                        children: [
                          (0, p.jsx)(d.B, {
                            value: '1',
                            visibleDecimals: 0,
                            variant: 'secondary12',
                            color: 'text.primary',
                          }),
                          (0, p.jsx)(i.Z, { variant: 'tooltip', children: m }),
                          (0, p.jsx)(l.Z, {
                            color: 'primary',
                            sx: { fontSize: '12px' },
                            children: (0, p.jsx)(o.Z, {}),
                          }),
                          (0, p.jsx)(d.B, {
                            value: b || '0',
                            visibleDecimals: 4,
                            variant: 'secondary12',
                            color: 'text.primary',
                          }),
                          (0, p.jsx)(i.Z, { variant: 'tooltip', children: f }),
                        ],
                      }),
                ],
              }),
            ],
          });
        };
    },
    64311: function (e, r, t) {
      t.d(r, {
        Ch: function () {
          return b;
        },
        a9: function () {
          return x;
        },
        r$: function () {
          return h;
        },
      });
      var n = t(59499),
        o = t(57499),
        a = t(38264),
        i = t(53219),
        s = t(2734),
        c = t(80822),
        l = t(15861),
        u = t(23795),
        d = t(2127),
        p = t(85893);
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
      function f(e) {
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
      var y = {
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
          return (0, p.jsx)(i.Z, {
            sx: { ml: '3px', color: r || 'text.muted', fontSize: '14px' },
            children: (0, p.jsx)(a.Z, {}),
          });
        },
        b = function (e) {
          var r = e.typographyProps,
            t = (0, s.Z)(),
            n = f(
              {
                border: '1px solid '.concat(t.palette.warning.main),
                color: t.palette.warning.main,
              },
              y
            );
          return (0, p.jsx)(d.a, {
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
                (0, p.jsx)(v, { color: t.palette.warning.main }),
              ],
            }),
          });
        },
        h = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(g, { content: (0, p.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: y,
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
        x = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(g, { content: (0, p.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: y,
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
          return f;
        },
        J: function () {
          return p;
        },
      });
      var n = t(59499),
        o = t(4730),
        a = t(1279),
        i = t(15861),
        s = t(85893),
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
            i = e.compactThreshold,
            s = (0, a.hE)(r),
            c = s.toFixed(0).length;
          i && Number(r) <= i && (c = 0);
          var l = Math.min(Math.floor(c ? (c - 1) / 3 : 0), d.length - 1),
            u = d[l],
            p = (0, a.pV)(s, 3 * l).toNumber();
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
      function m(e) {
        var r = e.value,
          t = e.visibleDecimals,
          n = e.roundDown,
          o = p({ value: r, visibleDecimals: t, roundDown: n }),
          a = o.prefix,
          i = o.postfix;
        return (0, s.jsxs)(s.Fragment, { children: [a, i] });
      }
      function f(e) {
        var r = e.value,
          t = e.symbol,
          n = e.visibleDecimals,
          a = e.compact,
          l = e.percent,
          d = e.symbolsVariant,
          p = e.symbolsColor,
          f = e.roundDown,
          y = e.compactThreshold,
          v = (0, o.Z)(e, c),
          b = l ? 100 * Number(r) : Number(r),
          h = null !== n && void 0 !== n ? n : 0;
        0 === b ? (h = 0) : void 0 === n && (h = b >= 1 || l || 'USD' === t ? 2 : 7);
        var x = Math.pow(10, -h),
          g = 0 !== b && Math.abs(b) < Math.abs(x),
          j = g ? x : b,
          k = !1 !== a && (a || b > 99999);
        return (
          f && !k && (j = Math.trunc(Number(j) * Math.pow(10, h)) / Math.pow(10, h)),
          (0, s.jsxs)(
            i.Z,
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
                  g &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || v.variant,
                      color: p || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === t || void 0 === t ? void 0 : t.toLowerCase()) &&
                    !l &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || v.variant,
                      color: p || 'text.secondary',
                      children: '$',
                    }),
                  k
                    ? (0, s.jsx)(m, {
                        value: j,
                        visibleDecimals: h,
                        roundDown: f,
                        compactThreshold: y,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: h,
                        minimumFractionDigits: h,
                      }).format(j),
                  l &&
                    (0, s.jsx)(i.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || v.variant,
                      color: p || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === t || void 0 === t ? void 0 : t.toLowerCase()) &&
                    'undefined' !== typeof t &&
                    (0, s.jsx)(i.Z, {
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
        a = t(80822),
        i = t(15861),
        s = t(85893),
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
          m = void 0 === p ? 'center' : p,
          f = (0, o.Z)(e, c);
        return (0, s.jsxs)(
          a.Z,
          u(
            u({}, f),
            {},
            {
              sx: u({ display: 'flex', alignItems: m, justifyContent: 'space-between' }, f.sx),
              children: [
                r &&
                  (0, s.jsx)(i.Z, {
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
          return h;
        },
        T1: function () {
          return O;
        },
        UD: function () {
          return j;
        },
      });
      var n = t(83618),
        o = t(59499),
        a = t(4730),
        i = t(67564),
        s = t(80822),
        c = t(86653),
        l = t(67294),
        u = t(25043),
        d = t(85893),
        p = ['symbol', 'aToken', 'waToken'],
        m = ['symbol', 'logoURI'],
        f = ['symbols', 'badgeSymbol', 'aToken', 'waToken', 'aTokens', 'waTokens'],
        y = ['symbol', 'aToken', 'waToken', 'aTokens', 'waTokens'];
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
      function b(e) {
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
      function h(e) {
        var r = e.symbol,
          t = e.onImageGenerated,
          n = e.aToken,
          o = e.waToken,
          a = (0, l.useRef)(null),
          i = (0, l.useRef)(null),
          s = (0, l.useState)(!0),
          c = s[0],
          u = s[1];
        return (
          (0, l.useEffect)(
            function () {
              var e;
              if (!c && a.current && null !== (e = a.current) && void 0 !== e && e.contentDocument)
                if (n || o) {
                  var r,
                    s,
                    l,
                    u,
                    d =
                      null === (r = a.current) ||
                      void 0 === r ||
                      null === (s = r.contentDocument) ||
                      void 0 === s ||
                      null === (l = s.childNodes) ||
                      void 0 === l
                        ? void 0
                        : l[0],
                    p = d.getAttribute('width'),
                    m = d.getAttribute('height'),
                    f = d.getAttribute('viewBox');
                  d.setAttribute('x', 25),
                    d.setAttribute('width', 206),
                    d.setAttribute('y', 25),
                    d.setAttribute('height', 206),
                    f || d.setAttribute('viewBox', '0 0 '.concat(p, ' ').concat(m)),
                    null === (u = i.current) || void 0 === u || u.appendChild(d);
                  var y = new XMLSerializer().serializeToString(i.current);
                  t(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(y)))
                    )
                  );
                } else {
                  var v,
                    b = new XMLSerializer().serializeToString(
                      null === (v = a.current) || void 0 === v ? void 0 : v.contentDocument
                    );
                  t(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(b)))
                    )
                  );
                }
            },
            [c, n, o]
          ),
          (0, d.jsxs)('div', {
            style: { visibility: 'hidden', height: 0, width: 0, overflow: 'hidden' },
            children: [
              (0, d.jsx)('object', {
                style: { opacity: 1 },
                ref: a,
                id: 'svg',
                data: '/icons/tokens/'.concat(r.toLowerCase(), '.svg'),
                onLoad: function () {
                  return u(!1);
                },
              }),
              (n || o) && (0, d.jsx)(x, { ref: i, waToken: o }),
            ],
          })
        );
      }
      var x = (0, l.forwardRef)(function (e, r) {
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
      function g(e) {
        var r = e.symbol,
          t = e.aToken,
          n = e.waToken,
          o = (0, a.Z)(e, p),
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
            i.Z,
            b(
              b({}, o),
              {},
              {
                sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, o.sx),
                children:
                  t || n
                    ? (0, d.jsx)(x, { symbol: c, waToken: n })
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
      function j(e) {
        var r = e.symbol,
          t = e.logoURI,
          n = (0, a.Z)(e, m),
          o = (0, l.useState)(r.toLowerCase()),
          s = o[0],
          c = o[1];
        return (0, d.jsx)(
          i.Z,
          b(
            b({}, n),
            {},
            {
              sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
              children: (0, d.jsx)(u.Z, {
                children: (0, d.jsx)('img', {
                  src: 'default' !== s && t ? t : '/icons/tokens/default.svg',
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
      function k(e) {
        var r = e.symbols,
          t = e.badgeSymbol,
          n = e.aToken,
          o = void 0 !== n && n,
          i = e.waToken,
          u = void 0 !== i && i,
          p = e.aTokens,
          m = e.waTokens,
          y = (0, a.Z)(e, f),
          v =
            p ||
            r.map(function (e, r) {
              return 0 === r && o;
            }),
          h =
            m ||
            r.map(function (e, r) {
              return 0 === r && u;
            });
        return t
          ? (0, d.jsx)(c.Z, {
              badgeContent: (0, d.jsx)(g, {
                symbol: t,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: r.map(function (e, r) {
                return (0, l.createElement)(
                  g,
                  b(
                    b({}, y),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: v[r],
                      waToken: h[r],
                      sx: b({ ml: 0 === r ? 0 : 'calc(-1 * 0.5em)' }, y.sx),
                    }
                  )
                );
              }),
            })
          : (0, d.jsx)(s.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: r.map(function (e, r) {
                return (0, l.createElement)(
                  g,
                  b(
                    b({}, y),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: v[r],
                      waToken: h[r],
                      sx: b({ ml: 0 === r ? 0 : 'calc(-1 * 0.5em)' }, y.sx),
                    }
                  )
                );
              }),
            });
      }
      function O(e) {
        var r = e.symbol,
          t = e.aToken,
          o = e.waToken,
          i = e.aTokens,
          s = e.waTokens,
          c = (0, a.Z)(e, y),
          l = r.split('_');
        if (l.length > 1) {
          if (l[0].startsWith('pools/')) {
            var u = (0, n.Z)(l),
              p = u[0],
              m = u.slice(1);
            return (0, d.jsx)(k, b(b({}, c), {}, { symbols: m, badgeSymbol: '/pools/' + p }));
          }
          return (0, d.jsx)(
            k,
            b(b({}, c), {}, { symbols: l, aToken: t, waToken: o, aTokens: i, waTokens: s })
          );
        }
        return (0, d.jsx)(g, b({ symbol: r, aToken: t, waToken: o }, c));
      }
      x.displayName = 'TokenRing';
    },
    35783: function (e, r, t) {
      t.d(r, {
        v: function () {
          return u;
        },
      });
      var n = t(59499),
        o = t(4730),
        a = t(21737),
        i = t(85893),
        s = ['children', 'sx'];
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
      var u = function (e) {
        var r = e.children,
          t = e.sx,
          n = (0, o.Z)(e, s),
          c = l({ mb: 6, alignItems: 'center', width: '100%' }, t);
        return (0, i.jsx)(a.Z, l(l({ sx: c }, n), {}, { children: r }));
      };
    },
    92519: function (e, r, t) {
      t.d(r, {
        A: function () {
          return b;
        },
      });
      var n = t(80854),
        o = (t(67294), t(60377)),
        a = t(50060),
        i = t(89771),
        s = t(53097),
        c = t(44949),
        l = t(72005),
        u = t(3062),
        d = t(65361),
        p = t(79850),
        m = t(37096),
        f = t(19408),
        y = t(40429),
        v = t(85893),
        b = function (e) {
          var r,
            t,
            b = e.hideTitleSymbol,
            h = e.underlyingAsset,
            x = e.children,
            g = e.requiredChainId,
            j = e.title,
            k = e.keepWrappedSymbol,
            O = (0, l.Z)().readOnlyModeAddress,
            w = (0, u.Y)(function (e) {
              return e.currentMarketData;
            }),
            C = (0, u.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            T = (0, a.P)(w).walletBalances,
            A = (0, o.HT)(),
            S = A.user,
            P = A.reserves,
            I = (0, c.vR)(),
            D = I.txError,
            E = I.mainTxState,
            M = (0, s.Q)(g),
            R = M.isWrongNetwork,
            B = M.requiredChainId;
          if (D && D.blocking) return (0, v.jsx)(y.D, { txError: D });
          var Z = P.find(function (e) {
              return h.toLowerCase() === n.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : h === e.underlyingAsset;
            }),
            L =
              null === S || void 0 === S
                ? void 0
                : S.userReservesData.find(function (e) {
                    return h.toLowerCase() === n.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : h === e.underlyingAsset;
                  }),
            W = Z.isWrappedBaseAsset && !k ? C.baseAssetSymbol : Z.symbol;
          return (0, v.jsxs)(i.hv, {
            asset: Z,
            children: [
              !E.success && (0, v.jsx)(m.E, { title: j, symbol: b ? void 0 : W }),
              R &&
                !O &&
                (0, v.jsx)(f.I, {
                  networkName: (0, p.Mo)(B).name,
                  chainId: B,
                  event: { eventName: d.vh.SWITCH_NETWORK, eventParams: { asset: h } },
                }),
              x({
                isWrongNetwork: R,
                nativeBalance:
                  (null === (r = T[n.hP.toLowerCase()]) || void 0 === r ? void 0 : r.amount) || '0',
                tokenBalance:
                  (null === (t = T[Z.underlyingAsset.toLowerCase()]) || void 0 === t
                    ? void 0
                    : t.amount) || '0',
                poolReserve: Z,
                symbol: W,
                underlyingAsset: h,
                userReserve: L,
              }),
            ],
          });
        };
    },
    82641: function (e, r, t) {
      t.r(r),
        t.d(r, {
          SupplyModal: function () {
            return Te;
          },
        });
      var n = t(59499),
        o = t(57499),
        a = t(67294),
        i = t(49679),
        s = t(44949),
        c = t(15629),
        l = t(92519),
        u = t(17674),
        d = t(80854),
        p = t(82403),
        m = t(1279),
        f = t(26447),
        y = t(15861),
        v = t(88078),
        b = t(70794),
        h = t(88178),
        x = t(32867),
        g = t(45640),
        j = t(35783),
        k = t(49212),
        O = t(37836),
        w = t(50060),
        C = t(66510),
        T = t(89771),
        A = t(43666),
        S = t(3062),
        P = t(65361),
        I = t(56705),
        D = t(58730),
        E = t(79850),
        M = t(84314),
        R = t(73886),
        B = t(60377),
        Z = t(73592),
        L = t(23478),
        W = t(83063),
        N = t(44880),
        U = t(67944),
        q = t(53008),
        F = t(23795),
        z = t(38577),
        _ = t(85893),
        H = function () {
          return (0, _.jsx)(j.v, {
            severity: 'info',
            children: (0, _.jsxs)(y.Z, {
              children: [
                (0, _.jsx)(o.cC, { id: 'jA2QeW' }),
                ' AAVE',
                ' ',
                (0, _.jsx)(o.cC, { id: 'iUo5rv' }),
                ' AAVE',
                ' ',
                (0, _.jsx)(o.cC, { id: 'x9iLRD' }),
                ' ',
                (0, _.jsx)(F.Z, {
                  href: z.Z6.staking,
                  children: (0, _.jsx)(o.cC, { id: 'Ma/MtY' }),
                }),
              ],
            }),
          });
        },
        Q = t(13918),
        Y = function () {
          return (0, _.jsx)(j.v, {
            severity: 'warning',
            children: (0, _.jsxs)(y.Z, {
              children: [
                (0, _.jsx)(o.cC, { id: 'ZfUGFb' }),
                ' SNX',
                ' ',
                (0, _.jsx)(o.cC, { id: 'piPrJ7' }),
              ],
            }),
          });
        },
        G = t(50029),
        $ = t(4730),
        V = t(87794),
        K = t.n(V),
        X = t(75331),
        J = t(30202),
        ee = t(56371),
        re = t(94303),
        te = t(69986),
        ne = t(72005),
        oe = t(64041),
        ae = t(805),
        ie = t(52251),
        se = t(84207),
        ce = [
          'amountToSupply',
          'poolAddress',
          'isWrongNetwork',
          'sx',
          'symbol',
          'blocked',
          'decimals',
          'isWrappedBaseAsset',
        ];
      function le(e, r) {
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
      function ue(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? le(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : le(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var de = a.memo(function (e) {
          var r = e.amountToSupply,
            t = e.poolAddress,
            n = e.isWrongNetwork,
            i = e.sx,
            c = e.symbol,
            l = e.blocked,
            p = e.decimals,
            m = e.isWrappedBaseAsset,
            f = (0, $.Z)(e, ce),
            y = (0, S.Y)(
              (0, R.N)(function (e) {
                return [
                  e.tryPermit,
                  e.supply,
                  e.supplyWithPermit,
                  e.walletApprovalMethodPreference,
                  e.estimateGasLimit,
                  e.addTransaction,
                  e.currentMarketData,
                ];
              })
            ),
            v = (0, u.Z)(y, 7),
            b = v[0],
            h = v[1],
            x = v[2],
            g = v[3],
            j = v[4],
            k = v[5],
            O = v[6],
            w = (0, s.vR)(),
            C = w.approvalTxState,
            T = w.mainTxState,
            A = w.loadingTxns,
            P = w.setLoadingTxns,
            I = w.setApprovalTxState,
            D = w.setMainTxState,
            E = w.setGasLimit,
            M = w.setTxError,
            B = b({ reserveAddress: t, isWrappedBaseAsset: m }),
            Z = (0, ne.Z)().sendTx,
            L = (0, J.NL)(),
            W = (0, a.useState)(),
            N = W[0],
            U = W[1],
            F = (0, te.y)(O, t),
            z = F.data,
            H = F.refetch,
            Q = F.isRefetching,
            Y = F.isFetchedAfterMount;
          P(Q);
          var V =
            0 !== Number(r) &&
            (0, q.iv)({
              approvedAmount: (null === z || void 0 === z ? void 0 : z.amount) || '0',
              amount: r,
              signedAmount: N ? N.amount : '0',
            });
          V && null !== C && void 0 !== C && C.success && I({});
          var le = B && g === oe.n.PERMIT,
            de = (0, re.M)({
              usePermit: le,
              approvedAmount: z,
              requiresApproval: V,
              assetAddress: t,
              symbol: c,
              decimals: p,
              signatureAmount: r,
              onApprovalTxConfirmed: H,
              onSignTxCompleted: function (e) {
                return U(e);
              },
            }).approval;
          (0, a.useEffect)(
            function () {
              Y || H();
            },
            [H, Y]
          ),
            (0, a.useEffect)(
              function () {
                var e = 0;
                le
                  ? (e = Number(d.eB[X.UQ.supplyWithPermit].recommended))
                  : ((e = Number(d.eB[X.UQ.supply].recommended)),
                    V && !C.success && (e += Number(q.pQ))),
                  E(e.toString());
              },
              [V, C, le, E]
            );
          var pe = (function () {
            var e = (0, G.Z)(
              K().mark(function e() {
                var n, o, a, i, s;
                return K().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            D(ue(ue({}, T), {}, { loading: !0 })),
                            (o = X.UQ.default),
                            !le || !N)
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (o = X.UQ.supplyWithPermit),
                            (a = x({
                              signature: N.signature,
                              amount: (0, ee.parseUnits)(r, p).toString(),
                              reserve: t,
                              deadline: N.deadline,
                            })),
                            (e.next = 8),
                            j(a)
                          );
                        case 8:
                          return (a = e.sent), (e.next = 11), Z(a);
                        case 11:
                          return (n = e.sent), (e.next = 14), n.wait(1);
                        case 14:
                          e.next = 26;
                          break;
                        case 16:
                          return (
                            (o = X.UQ.supply),
                            (i = h({ amount: (0, ee.parseUnits)(r, p).toString(), reserve: t })),
                            (e.next = 20),
                            j(i)
                          );
                        case 20:
                          return (i = e.sent), (e.next = 23), Z(i);
                        case 23:
                          return (n = e.sent), (e.next = 26), n.wait(1);
                        case 26:
                          D({ txHash: n.hash, loading: !1, success: !0 }),
                            k(n.hash, {
                              action: o,
                              txState: 'success',
                              asset: t,
                              amount: r,
                              assetName: c,
                            }),
                            L.invalidateQueries({ queryKey: ie.B.pool }),
                            (e.next = 36);
                          break;
                        case 31:
                          (e.prev = 31),
                            (e.t0 = e.catch(0)),
                            (s = (0, ae.WG)(e.t0, ae.aD.GAS_ESTIMATION, !1)),
                            M(s),
                            D({ txHash: void 0, loading: !1 });
                        case 36:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 31]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (0, _.jsx)(
            se.B,
            ue(
              {
                blocked: l,
                mainTxState: T,
                approvalTxState: C,
                isWrongNetwork: n,
                requiresAmount: !0,
                amount: r,
                symbol: c,
                preparingTransactions: A || !z,
                actionText: (0, _.jsx)(o.cC, { id: '3Np5O8', values: { symbol: c } }),
                actionInProgressText: (0, _.jsx)(o.cC, { id: 'z5Y+p6', values: { symbol: c } }),
                handleApproval: de,
                handleAction: pe,
                requiresApproval: V,
                tryPermit: B,
                sx: i,
              },
              f
            )
          );
        }),
        pe = t(13441),
        me = [
          'tokenIn',
          'amountToSupply',
          'decimals',
          'symbol',
          'tokenWrapperAddress',
          'isWrongNetwork',
          'sx',
        ];
      function fe(e, r) {
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
      function ye(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? fe(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : fe(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var ve,
        be = function (e) {
          var r = e.tokenIn,
            t = e.amountToSupply,
            n = e.decimals,
            i = e.symbol,
            c = e.tokenWrapperAddress,
            l = e.isWrongNetwork,
            p = e.sx,
            m = (0, $.Z)(e, me),
            f = (0, S.Y)(
              (0, R.N)(function (e) {
                return [e.account, e.estimateGasLimit, e.addTransaction, e.currentMarketData];
              })
            ),
            y = (0, u.Z)(f, 4),
            v = y[0],
            b = y[1],
            h = y[2],
            x = y[3],
            g = (0, pe.z)().tokenWrapperService,
            j = (0, a.useState)(),
            k = j[0],
            O = j[1],
            w = (0, s.vR)(),
            C = w.approvalTxState,
            T = w.mainTxState,
            A = w.loadingTxns,
            P = w.setApprovalTxState,
            I = w.setMainTxState,
            D = w.setTxError,
            E = w.setGasLimit,
            M = (0, ne.Z)().sendTx,
            B = (0, J.NL)(),
            Z = (0, te.i)({ chainId: x.chainId, token: r, spender: c }),
            L = Z.data,
            W = Z.isFetching,
            N = Z.refetch,
            U = !1;
          void 0 !== L &&
            (U = (0, q.iv)({
              approvedAmount: L.toString(),
              amount: t,
              signedAmount: k ? k.amount : '0',
            }));
          var F = !1,
            z = 0;
          (z = Number(d.eB[X.UQ.supply].recommended)),
            U && !C.success && (z += Number(q.pQ)),
            E(z.toString()),
            U && null !== C && void 0 !== C && C.success && P({});
          var H = (0, re.M)({
              usePermit: F,
              approvedAmount: {
                amount: (null === L || void 0 === L ? void 0 : L.toString()) || '0',
                spender: c,
                token: r,
                user: v,
              },
              requiresApproval: U,
              assetAddress: r,
              symbol: i,
              decimals: n,
              signatureAmount: t,
              onApprovalTxConfirmed: N,
              onSignTxCompleted: function (e) {
                return O(e);
              },
            }).approval,
            Q = (function () {
              var e = (0, G.Z)(
                K().mark(function e() {
                  var o, a, s, l, u;
                  return K().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (e.prev = 0),
                              I(ye(ye({}, T), {}, { loading: !0 })),
                              (a = X.UQ.default),
                              (e.next = 18);
                            break;
                          case 7:
                            return (s = e.sent), (e.next = 10), b(s);
                          case 10:
                            return (s = e.sent), (e.next = 13), M(s);
                          case 13:
                            return (o = e.sent), (e.next = 16), o.wait(1);
                          case 16:
                            e.next = 30;
                            break;
                          case 18:
                            return (
                              (a = X.UQ.supply),
                              (e.next = 21),
                              g.supplyWrappedToken((0, ee.parseUnits)(t, n).toString(), c, v)
                            );
                          case 21:
                            return (l = e.sent), (e.next = 24), b(l);
                          case 24:
                            return (l = e.sent), (e.next = 27), M(l);
                          case 27:
                            return (o = e.sent), (e.next = 30), o.wait(1);
                          case 30:
                            I({ txHash: o.hash, loading: !1, success: !0 }),
                              h(o.hash, {
                                action: a,
                                txState: 'success',
                                asset: r,
                                amount: t,
                                assetName: i,
                              }),
                              B.invalidateQueries({ queryKey: ie.B.pool }),
                              B.invalidateQueries({
                                queryKey: ie.B.approvedAmount(v, r, c, x.chainId),
                              }),
                              (e.next = 41);
                            break;
                          case 36:
                            (e.prev = 36),
                              (e.t0 = e.catch(0)),
                              (u = (0, ae.WG)(e.t0, ae.aD.GAS_ESTIMATION, !1)),
                              D(u),
                              I({ txHash: void 0, loading: !1 });
                          case 41:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 36]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, _.jsx)(
            se.B,
            ye(
              {
                blocked: !1,
                mainTxState: T,
                approvalTxState: C,
                isWrongNetwork: l,
                requiresAmount: !0,
                amount: t,
                symbol: i,
                preparingTransactions: A || W,
                actionText: (0, _.jsx)(o.cC, { id: '3Np5O8', values: { symbol: i } }),
                actionInProgressText: (0, _.jsx)(o.cC, { id: 'z5Y+p6', values: { symbol: i } }),
                handleApproval: function () {
                  return H();
                },
                handleAction: Q,
                requiresApproval: U,
                tryPermit: F,
                sx: p,
              },
              m
            )
          );
        };
      function he(e, r) {
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
      function xe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? he(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : he(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      !(function (e) {
        e[(e.CAP_REACHED = 0)] = 'CAP_REACHED';
      })(ve || (ve = {}));
      var ge = function (e) {
          var r = e.user,
            t = (0, S.Y)(function (e) {
              return e.currentMarketData;
            }),
            n = (0, A.P)(),
            o = (0, w.P)(t).walletBalances,
            a = (0, T.ov)(),
            i = a.supplyCap,
            s = a.debtCeiling,
            c = e.poolReserve,
            l = e.userReserve,
            u = n.find(function (r) {
              return r.tokenOut.underlyingAsset === e.underlyingAsset;
            }),
            d = u && '0' !== o[u.tokenIn.underlyingAsset.toLowerCase()].amount,
            p = r.userReservesData.find(function (e) {
              return e.usageAsCollateralEnabledOnUser && e.reserve.id !== c.id;
            }),
            m =
              !r.isInIsolationMode &&
              c.isIsolated &&
              !p &&
              (!l || '0' === l.underlyingBalance || l.usageAsCollateralEnabledOnUser),
            f = xe(
              xe({}, e),
              {},
              {
                isolationModeWarning: m ? (0, _.jsx)(Q.i, { asset: c.symbol }) : null,
                addTokenProps: {
                  address: c.aTokenAddress,
                  symbol: c.iconSymbol,
                  decimals: c.decimals,
                  aToken: !0,
                },
                collateralType: (0, q.yI)(l, r.totalCollateralUSD, r.isInIsolationMode, s.isMaxed),
                supplyCapWarning: i.determineWarningDisplay({ supplyCap: i }),
                debtCeilingWarning: s.determineWarningDisplay({ debtCeiling: s }),
                wrappedTokenConfig: n.find(function (r) {
                  return r.tokenOut.underlyingAsset === e.underlyingAsset;
                }),
              }
            );
          return d ? (0, _.jsx)(ke, xe({}, f)) : (0, _.jsx)(je, xe({}, f));
        },
        je = a.memo(function (e) {
          var r = e.underlyingAsset,
            t = e.poolReserve,
            n = e.isWrongNetwork,
            i = e.nativeBalance,
            c = e.tokenBalance,
            l = e.isolationModeWarning,
            m = e.addTokenProps,
            f = e.collateralType,
            y = e.supplyCapWarning,
            v = e.debtCeilingWarning,
            h = e.user,
            x = (0, B.HT)().marketReferencePriceInUsd,
            g = (0, s.vR)(),
            k = g.mainTxState,
            w = g.gasLimit,
            C = g.txError,
            T = (0, S.Y)(
              (0, R.N)(function (e) {
                return [
                  e.poolComputed.minRemainingBaseTokenBalance,
                  e.currentMarketData,
                  e.currentNetworkConfig,
                ];
              })
            ),
            A = (0, u.Z)(T, 3),
            q = A[0],
            F = A[1],
            z = A[2],
            Q = (0, a.useState)(''),
            G = Q[0],
            $ = Q[1],
            V = r.toLowerCase() === d.hP.toLowerCase(),
            K = V ? i : c,
            X = t.supplyAPY,
            J = t.supplyCap,
            ee = t.totalLiquidity,
            re = t.isFrozen,
            te = t.decimals,
            ne = t.debtCeiling,
            oe = t.isolationModeTotalDebt,
            ae = (0, I.I)(
              K,
              {
                supplyCap: J,
                totalLiquidity: ee,
                isFrozen: re,
                decimals: te,
                debtCeiling: ne,
                isolationModeTotalDebt: oe,
              },
              r,
              q
            ),
            ie = new b.O(G).multipliedBy(t.formattedPriceInMarketReferenceCurrency),
            se = ie.multipliedBy(x).shiftedBy(-p.$3),
            ce = G === ae,
            le = (0, D.$m)(h, t, ie),
            ue = {
              amountToSupply: G,
              isWrongNetwork: n,
              poolAddress: V ? d.hP : t.underlyingAsset,
              symbol: V ? z.baseAssetSymbol : t.symbol,
              blocked: !1,
              decimals: t.decimals,
              isWrappedBaseAsset: t.isWrappedBaseAsset,
            };
          return k.success
            ? (0, _.jsx)(N.R, {
                action: (0, _.jsx)(o.cC, { id: 'fwjWSI' }),
                amount: G,
                symbol: V ? z.baseAssetSymbol : t.symbol,
                addToken: m,
              })
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  l,
                  y,
                  v,
                  'AMPL' === t.symbol &&
                    (0, _.jsx)(j.v, {
                      sx: { mt: '16px', mb: '40px' },
                      severity: 'warning',
                      children: (0, _.jsx)(O.v, {}),
                    }),
                  'AAVE' === t.symbol && E.cr.staking(F) && (0, _.jsx)(H, {}),
                  'SNX' === t.symbol && '0' !== ae && (0, _.jsx)(Y, {}),
                  (0, _.jsx)(L.W, {
                    value: G,
                    onChange: function (e) {
                      if ('-1' === e) $(ae);
                      else {
                        var r = (0, M.$w)(e, t.decimals);
                        $(r);
                      }
                    },
                    usdValue: se.toString(10),
                    symbol: V ? z.baseAssetSymbol : t.symbol,
                    assets: [
                      {
                        balance: ae,
                        symbol: V ? z.baseAssetSymbol : t.symbol,
                        iconSymbol: V ? z.baseAssetSymbol : t.iconSymbol,
                      },
                    ],
                    capType: Z.R.supplyCap,
                    isMaxSelected: ce,
                    disabled: k.loading,
                    maxValue: ae,
                    balanceText: (0, _.jsx)(o.cC, { id: 'JoMQnI' }),
                    event: {
                      eventName: P.vh.MAX_INPUT_SELECTION,
                      eventParams: { asset: t.underlyingAsset, assetName: t.name },
                    },
                  }),
                  (0, _.jsxs)(U.m6, {
                    gasLimit: w,
                    skipLoad: !0,
                    disabled: 0 === Number(G),
                    children: [
                      (0, _.jsx)(U.oD, {
                        description: (0, _.jsx)(o.cC, { id: 'qB4kPi' }),
                        value: X,
                        percent: !0,
                      }),
                      (0, _.jsx)(U.aE, { incentives: t.aIncentivesData, symbol: t.symbol }),
                      (0, _.jsx)(U.Bx, { collateralType: f }),
                      (0, _.jsx)(U.jz, {
                        visibleHfChange: !!G,
                        healthFactor: h ? h.healthFactor : '-1',
                        futureHealthFactor: le.toString(),
                      }),
                    ],
                  }),
                  C && (0, _.jsx)(W.Q, { txError: C }),
                  (0, _.jsx)(de, xe({}, ue)),
                ],
              });
        }),
        ke = function (e) {
          var r = e.poolReserve,
            t = e.wrappedTokenConfig,
            n = e.isolationModeWarning,
            i = e.supplyCapWarning,
            c = e.debtCeilingWarning,
            l = e.addTokenProps,
            u = e.collateralType,
            d = e.isWrongNetwork,
            f = e.user,
            y = (0, B.HT)().marketReferencePriceInUsd,
            v = (0, S.Y)(function (e) {
              return e.currentMarketData;
            }),
            h = (0, s.vR)(),
            x = h.mainTxState,
            g = h.gasLimit,
            j = h.txError,
            k = (0, w.P)(v).walletBalances,
            O = (0, S.Y)(function (e) {
              return e.poolComputed.minRemainingBaseTokenBalance;
            });
          if (!t) throw new Error('Wrapped token config is not defined');
          var T = k[t.tokenIn.underlyingAsset].amount,
            A = k[t.tokenOut.underlyingAsset].amount,
            E = [
              {
                balance: T,
                symbol: t.tokenIn.symbol,
                iconSymbol: t.tokenIn.symbol,
                address: t.tokenIn.underlyingAsset,
              },
            ];
          '0' !== A &&
            E.unshift({
              balance: A,
              symbol: t.tokenOut.symbol,
              iconSymbol: t.tokenOut.symbol,
              address: t.tokenOut.underlyingAsset,
            });
          var R = (0, a.useState)(E[0]),
            q = R[0],
            F = R[1],
            z = (0, a.useState)(''),
            H = z[0],
            Q = z[1],
            Y = (0, a.useState)('0'),
            G = Y[0],
            $ = Y[1],
            V = (0, C.E)('1', r.decimals, t.tokenWrapperAddress).data;
          (0, a.useEffect)(
            function () {
              if (V) {
                var e = (0, m.hE)(T).multipliedBy(V).toString();
                $(e);
              }
            },
            [V, T]
          );
          var K = r.supplyCap,
            X = r.totalLiquidity,
            J = r.isFrozen,
            ee = r.decimals,
            re = r.debtCeiling,
            te = r.isolationModeTotalDebt,
            ne = (0, I.I)(
              A,
              {
                supplyCap: K,
                totalLiquidity: X,
                isFrozen: J,
                decimals: ee,
                debtCeiling: re,
                isolationModeTotalDebt: te,
              },
              r.underlyingAsset,
              O
            ),
            oe = (0, I.x)(r.supplyCap, r.totalLiquidity),
            ae = T;
          (0, b.O)(G).isGreaterThan(oe) &&
            ((ae = (0, b.O)(oe)
              .dividedBy(V || '0')
              .toString()),
            (ae = (0, M.$w)(ae, r.decimals)));
          var ie = !1;
          t && (ie = q.address === t.tokenIn.underlyingAsset);
          var se = new b.O(H).multipliedBy(
              ie
                ? t.tokenIn.formattedPriceInMarketReferenceCurrency
                : r.formattedPriceInMarketReferenceCurrency
            ),
            ce = se.multipliedBy(y).shiftedBy(-p.$3),
            le = H === ne,
            ue = (0, D.$m)(f, r, se);
          if (x.success) {
            var pe = ie
              ? (0, b.O)(H)
                  .dividedBy(V || '1')
                  .toString()
              : H;
            return (0, _.jsx)(N.R, {
              action: (0, _.jsx)(o.cC, { id: 'fwjWSI' }),
              amount: pe,
              symbol: r.symbol,
              addToken: l,
            });
          }
          return (0, _.jsxs)(_.Fragment, {
            children: [
              n,
              i,
              c,
              (0, _.jsx)(L.W, {
                value: H,
                onChange: function (e) {
                  if ('-1' === e) Q(ie ? ae : ne);
                  else {
                    var t = (0, M.$w)(e, r.decimals);
                    Q(t);
                  }
                },
                usdValue: ce.toString(10),
                symbol: q.symbol,
                assets: E,
                onSelect: F,
                capType: Z.R.supplyCap,
                isMaxSelected: le,
                disabled: x.loading,
                balanceText: (0, _.jsx)(o.cC, { id: 'JoMQnI' }),
                event: {
                  eventName: P.vh.MAX_INPUT_SELECTION,
                  eventParams: { asset: r.underlyingAsset, assetName: r.name },
                },
                exchangeRateComponent:
                  ie &&
                  (0, _.jsx)(Oe, {
                    supplyAmount: H,
                    decimals: r.decimals,
                    tokenWrapperAddress: t.tokenWrapperAddress,
                    tokenInSymbol: t.tokenIn.symbol,
                    tokenOutSymbol: t.tokenOut.symbol,
                  }),
              }),
              (0, _.jsxs)(U.m6, {
                gasLimit: g,
                skipLoad: !0,
                disabled: 0 === Number(H),
                children: [
                  (0, _.jsx)(U.oD, {
                    description: (0, _.jsx)(o.cC, { id: 'qB4kPi' }),
                    value: r.supplyAPY,
                    percent: !0,
                  }),
                  (0, _.jsx)(U.aE, { incentives: r.aIncentivesData, symbol: r.symbol }),
                  (0, _.jsx)(U.Bx, { collateralType: u }),
                  (0, _.jsx)(U.jz, {
                    visibleHfChange: !!H,
                    healthFactor: f ? f.healthFactor : '-1',
                    futureHealthFactor: ue.toString(),
                  }),
                ],
              }),
              j && (0, _.jsx)(W.Q, { txError: j }),
              ie
                ? (0, _.jsx)(be, {
                    tokenWrapperAddress: t.tokenWrapperAddress,
                    tokenIn: t.tokenIn.underlyingAsset,
                    amountToSupply: H,
                    decimals: 18,
                    symbol: t.tokenIn.symbol,
                    isWrongNetwork: d,
                  })
                : (0, _.jsx)(de, {
                    isWrongNetwork: d,
                    amountToSupply: H,
                    poolAddress: r.underlyingAsset,
                    symbol: r.symbol,
                    blocked: !1,
                    decimals: r.decimals,
                    isWrappedBaseAsset: !1,
                  }),
            ],
          });
        },
        Oe = function (e) {
          var r = e.supplyAmount,
            t = e.decimals,
            n = e.tokenInSymbol,
            o = e.tokenOutSymbol,
            a = e.tokenWrapperAddress,
            i = (0, C.v)(r, t, a),
            s = i.isFetching,
            c = i.data;
          return (0, _.jsxs)(f.Z, {
            direction: 'row',
            alignItems: 'center',
            gap: 1,
            children: [
              (0, _.jsx)(y.Z, { variant: 'caption', children: 'Supply amount' }),
              (0, _.jsx)(g.T1, { sx: { fontSize: '16px' }, symbol: 'sdai' }),
              s
                ? (0, _.jsx)(v.Z, { variant: 'rectangular', width: 80, height: 14 })
                : (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(x.B, {
                        value: c || '',
                        variant: 'subheader2',
                        color: 'text.primary',
                        visibleDecimals: 2,
                      }),
                      (0, _.jsx)(y.Z, {
                        variant: 'subheader2',
                        color: 'text.secondary',
                        children: 'sDAI',
                      }),
                    ],
                  }),
              (0, _.jsx)(k.G, {
                children: (0, _.jsx)(h.C, {
                  decimals: t,
                  tokenWrapperAddress: a,
                  tokenInSymbol: n,
                  tokenOutSymbol: o,
                }),
              }),
            ],
          });
        };
      function we(e, r) {
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
      function Ce(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? we(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : we(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var Te = function () {
        var e = (0, s.vR)(),
          r = e.type,
          t = e.close,
          n = e.args;
        return (0, _.jsx)(c.P, {
          open: r === s.w8.Supply,
          setOpen: t,
          children: (0, _.jsx)(l.A, {
            action: 'supply',
            title: (0, _.jsx)(o.cC, { id: 'bwSQI0' }),
            underlyingAsset: n.underlyingAsset,
            children: function (e) {
              return (0, _.jsx)(i.X, {
                children: function (r) {
                  return (0, _.jsx)(ge, Ce(Ce({}, e), {}, { user: r }));
                },
              });
            },
          }),
        });
      };
    },
    13918: function (e, r, t) {
      t.d(r, {
        i: function () {
          return c;
        },
      });
      var n = t(57499),
        o = t(15861),
        a = t(38577),
        i = t(35783),
        s = t(85893),
        c = function (e) {
          var r = e.asset,
            t = e.severity;
          return (0, s.jsxs)(i.v, {
            severity: t || 'info',
            sx: { mb: 3 },
            children: [
              (0, s.jsx)(o.Z, {
                variant: 'subheader1',
                mb: 0.5,
                children: (0, s.jsx)(n.cC, { id: '94OHPx' }),
              }),
              (0, s.jsx)(o.Z, {
                children: (0, s.jsx)(n.cC, {
                  id: 'igkfR1',
                  values: { 0: r || '' },
                  components: {
                    0: (0, s.jsx)(a.rU, {
                      href: 'https://docs.aave.com/faq/aave-v3-features#isolation-mode',
                    }),
                  },
                }),
              }),
            ],
          });
        };
    },
    50060: function (e, r, t) {
      t.d(r, {
        P: function () {
          return h;
        },
      });
      var n = t(80854),
        o = t(1279),
        a = t(81206),
        i = t(82403),
        s = t(70794),
        c = t(3062),
        l = t(79850),
        u = t(47892),
        d = t(59499),
        p = t(99673),
        m = t(52251),
        f = t(13441);
      function y(e, r) {
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
          var n = (0, f.z)().poolTokensBalanceService;
          return (0, p.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? y(Object(t), !0).forEach(function (r) {
                        (0, d.Z)(e, r, t[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                      : y(Object(t)).forEach(function (r) {
                          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                        });
                }
                return e;
              })(
                {
                  queryKey: m.B.poolTokens(r, e),
                  queryFn: function () {
                    return n.getPoolTokensBalances(e, r);
                  },
                  enabled: !!r,
                  refetchInterval: m.g,
                },
                t
              );
            }),
          });
        },
        b = function (e) {
          var r = (0, c.Y)(function (e) {
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
            walletBalances: d.map(function (r, c) {
              var u;
              return (function (e) {
                var r = e.reservesHumanized,
                  t = e.balances,
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
                  walletBalances: (null !== t && void 0 !== t ? t : []).reduce(function (e, r) {
                    var t = u.find(function (e) {
                      var t;
                      return r.address === n.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (t = l.m5[c.chainId].wrappedBaseAssetSymbol) || void 0 === t
                              ? void 0
                              : t.toLowerCase())
                        : e.underlyingAsset.toLowerCase() === r.address;
                    });
                    return (
                      '0' !== r.amount && (p = !1),
                      t &&
                        (e[r.address] = {
                          amount: (0, o.Fv)(r.amount, t.decimals),
                          amountUSD: (0, a.Z)({
                            amount: new s.O(r.amount),
                            currencyDecimals: t.decimals,
                            priceInMarketReferenceCurrency: t.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: d.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, o.Fv)(
                              d.marketReferenceCurrencyPriceInUsd,
                              i.$3
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
                balances: null === (u = t[c]) || void 0 === u ? void 0 : u.data,
                marketData: e[c],
              });
            }),
            isLoading: p,
          };
        },
        h = function (e) {
          var r = b([e]),
            t = r.walletBalances,
            n = r.isLoading;
          return {
            walletBalances: t[0].walletBalances,
            hasEmptyWallet: t[0].hasEmptyWallet,
            loading: n,
          };
        };
    },
    66510: function (e, r, t) {
      t.d(r, {
        E: function () {
          return s;
        },
        v: function () {
          return c;
        },
      });
      var n = t(78551),
        o = t(2593),
        a = t(56371),
        i = t(13441),
        s = function (e, r, t) {
          var s = (0, i.z)().tokenWrapperService;
          return (0, n.a)({
            queryFn: function () {
              return '' === e || '0' === e
                ? Promise.resolve(o.O$.from(0))
                : s.getTokenInForTokenOut((0, a.parseUnits)(e, r).toString(), t);
            },
            queryKey: ['tokenInForTokenOut', t, e],
            select: function (e) {
              return (0, a.formatUnits)(e.toString(), r);
            },
          });
        },
        c = function (e, r, t) {
          var s = (0, i.z)().tokenWrapperService;
          return (0, n.a)({
            queryFn: function () {
              return '' === e || '0' === e
                ? Promise.resolve(o.O$.from(0))
                : s.getTokenOutForTokenIn((0, a.parseUnits)(e, r).toString(), t);
            },
            queryKey: ['tokenOutForTokenIn', t, e],
            select: function (e) {
              return (0, a.formatUnits)(e.toString(), r);
            },
          });
        };
    },
    53097: function (e, r, t) {
      t.d(r, {
        Q: function () {
          return a;
        },
      });
      var n = t(72005),
        o = t(3062);
      function a(e) {
        var r = (0, o.Y)(function (e) {
            return e.currentChainId;
          }),
          t = e || r;
        return { isWrongNetwork: (0, n.Z)().chainId !== t, requiredChainId: t };
      }
    },
    43666: function (e, r, t) {
      t.d(r, {
        P: function () {
          return d;
        },
      });
      var n = t(59499),
        o = t(1279),
        a = t(3439),
        i = t(3062),
        s = t(18376),
        c = t(84314),
        l = t(60377),
        u = (0, n.Z)({}, s.el.proto_mainnet_v3, [
          {
            tokenIn: a.ou.DAI.UNDERLYING.toLowerCase(),
            tokenOut: a.ou.sDAI.UNDERLYING.toLowerCase(),
            tokenWrapperContractAddress: a.zq,
          },
        ]),
        d = function () {
          var e,
            r = (0, l.HT)(),
            t = r.marketReferencePriceInUsd,
            n = r.marketReferenceCurrencyDecimals,
            a = r.reserves,
            s = (0, i.Y)(function (e) {
              return e.currentMarket;
            });
          if (!a || 0 === a.length) return [];
          return (null !== (e = u[s]) && void 0 !== e ? e : []).map(function (e) {
            var r = a.find(function (r) {
                return r.underlyingAsset === e.tokenIn;
              }),
              i = a.find(function (r) {
                return r.underlyingAsset === e.tokenOut;
              });
            if (!r || !i) throw new Error('wrapped token reserves not found');
            var s = (0, o.Fv)(r.priceInMarketReferenceCurrency, n),
              l = (0, o.Fv)(i.priceInMarketReferenceCurrency, n);
            return {
              tokenIn: {
                symbol: r.symbol,
                underlyingAsset: r.underlyingAsset,
                decimals: r.decimals,
                priceInUSD: (0, c.N4)(1, s, t).toString(),
                formattedPriceInMarketReferenceCurrency: s,
              },
              tokenOut: {
                symbol: i.symbol,
                underlyingAsset: i.underlyingAsset,
                decimals: i.decimals,
                priceInUSD: (0, c.N4)(1, l, t).toString(),
                formattedPriceInMarketReferenceCurrency: l,
              },
              tokenWrapperAddress: e.tokenWrapperContractAddress,
            };
          });
        };
    },
    56705: function (e, r, t) {
      t.d(r, {
        I: function () {
          return c;
        },
        x: function () {
          return s;
        },
      });
      var n = t(80854),
        o = t(1279),
        a = t(70794),
        i = t(84314);
      function s(e, r) {
        return '0' === e ? new a.O(-1) : new a.O(e).minus(r);
      }
      function c(e, r, t, c) {
        if (r.isFrozen) return '0';
        var l = (0, o.hE)(e);
        return (
          l.gt(0) && t.toLowerCase() === n.hP.toLowerCase() && (l = l.minus(c)),
          '0' !== r.supplyCap && (l = a.O.min(l, s(r.supplyCap, r.totalLiquidity))),
          l.lte(0) ? '0' : (0, i.$w)(l.toString(10), r.decimals)
        );
      }
    },
    58730: function (e, r, t) {
      t.d(r, {
        $m: function () {
          return l;
        },
        DX: function () {
          return c;
        },
        _S: function () {
          return i;
        },
        bU: function () {
          return s;
        },
      });
      var n = t(20854),
        o = t(1279),
        a = t(70794);
      function i(e) {
        var r,
          t = e.fromAmount,
          a = e.fromAssetData,
          i = e.fromAssetUserData,
          s = e.toAmountAfterSlippage,
          c = e.toAssetData,
          l = e.user,
          u = a.eModes.find(function (e) {
            return e.id === l.userEmodeCategoryId;
          }),
          d = c.eModes.find(function (e) {
            return e.id === l.userEmodeCategoryId;
          }),
          p =
            l.isInEmode && u
              ? u.eMode.formattedLiquidationThreshold
              : a.formattedReserveLiquidationThreshold,
          m = '0';
        i.usageAsCollateralEnabledOnUser &&
          '0' !== a.reserveLiquidationThreshold &&
          (m = (0, n.L1)({
            collateralBalanceMarketReferenceCurrency: (0, o.hE)(t).multipliedBy(
              a.formattedPriceInMarketReferenceCurrency
            ),
            borrowBalanceMarketReferenceCurrency: l.totalBorrowsMarketReferenceCurrency,
            currentLiquidationThreshold: p,
          }).toString());
        var f = '0';
        return (
          ((!l.isInIsolationMode && !c.isIsolated) ||
            (l.isInIsolationMode &&
              (null === (r = l.isolatedReserve) || void 0 === r ? void 0 : r.underlyingAsset) ===
                c.underlyingAsset)) &&
            (f = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, o.hE)(s).multipliedBy(
                c.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: l.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold:
                l.isInEmode && d
                  ? d.eMode.formattedLiquidationThreshold
                  : c.formattedReserveLiquidationThreshold,
            }).toString()),
          {
            hfEffectOfFromAmount: m,
            hfAfterSwap:
              '-1' === l.healthFactor
                ? (0, o.hE)('-1')
                : (0, o.hE)(l.healthFactor).plus(f).minus(m),
          }
        );
      }
      var s = function (e) {
          var r = e.user,
            t = e.amountToReceiveAfterSwap,
            i = e.amountToSwap,
            s = e.fromAssetData,
            c = e.toAssetData,
            l = e.repayWithUserReserve,
            u = e.debt,
            d = s.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            p =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : s.formattedReserveLiquidationThreshold,
            m = '0';
          null !== l &&
            void 0 !== l &&
            l.usageAsCollateralEnabledOnUser &&
            s.usageAsCollateralEnabled &&
            (m = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, o.hE)(i).multipliedBy(
                s.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold: p,
            }).toString());
          var f = (0, o.hE)(a.O.min(t, u)).multipliedBy(c.priceInUSD).toString(10),
            y = (0, o.hE)(r.totalBorrowsUSD).minus(f);
          y = a.O.max(y, (0, o.hE)('0'));
          var v = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: r.totalCollateralUSD,
              borrowBalanceMarketReferenceCurrency: y.toString(10),
              currentLiquidationThreshold: r.currentLiquidationThreshold,
            }),
            b =
              '0' !== s.reserveLiquidationThreshold &&
              null !== l &&
              void 0 !== l &&
              l.usageAsCollateralEnabledOnUser
                ? (0, n.L1)({
                    collateralBalanceMarketReferenceCurrency: (0, o.hE)(i).multipliedBy(
                      s.priceInUSD
                    ),
                    borrowBalanceMarketReferenceCurrency: y.toString(10),
                    currentLiquidationThreshold: s.formattedReserveLiquidationThreshold,
                  }).toString()
                : '0',
            h = v.eq(-1) ? v : v.minus(b);
          return {
            hfEffectOfFromAmount: (0, o.hE)(m),
            hfAfterSwap: h.isLessThan(0) && !h.eq(-1) ? 0 : h,
          };
        },
        c = function (e) {
          var r = e.user,
            t = e.userReserve,
            i = e.poolReserve,
            s = e.withdrawAmount,
            c = (0, o.hE)(r.totalCollateralMarketReferenceCurrency),
            l = r.currentLiquidationThreshold,
            u = (0, o.hE)(r.healthFactor),
            d = i.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            p =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : i.formattedReserveLiquidationThreshold;
          if (
            null !== t &&
            void 0 !== t &&
            t.usageAsCollateralEnabledOnUser &&
            '0' !== i.reserveLiquidationThreshold
          ) {
            var m = (0, o.hE)(s).multipliedBy(i.formattedPriceInMarketReferenceCurrency);
            (c = c.minus(m)),
              (l = (0, o.hE)(r.totalCollateralMarketReferenceCurrency)
                .multipliedBy((0, o.hE)(r.currentLiquidationThreshold))
                .minus((0, o.hE)(m).multipliedBy(p))
                .div(c)
                .toFixed(4, a.O.ROUND_DOWN)),
              (u = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: c,
                borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
                currentLiquidationThreshold: l,
              }));
          }
          return u;
        },
        l = function (e, r, t) {
          var a,
            i = e ? (0, o.hE)(e.healthFactor) : '-1',
            s = e ? (0, o.hE)(e.totalCollateralMarketReferenceCurrency).plus(t) : '-1',
            c = e
              ? (0, o.hE)(e.totalCollateralMarketReferenceCurrency)
                  .multipliedBy(e.currentLiquidationThreshold)
                  .plus(t.multipliedBy(r.formattedReserveLiquidationThreshold))
                  .dividedBy(s)
              : '-1';
          return (
            e &&
              ((!e.isInIsolationMode && !r.isIsolated) ||
                (e.isInIsolationMode &&
                  (null === (a = e.isolatedReserve) || void 0 === a
                    ? void 0
                    : a.underlyingAsset) === r.underlyingAsset)) &&
              (i = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: s,
                borrowBalanceMarketReferenceCurrency: (0, o.hE)(
                  e.totalBorrowsMarketReferenceCurrency
                ),
                currentLiquidationThreshold: c,
              })),
            i
          );
        };
    },
  },
]);
