'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4299],
  {
    58941: function (e, t, r) {
      r.d(t, {
        o: function () {
          return b;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(57499),
        s = r(1279),
        c = r(2734),
        a = r(80822),
        l = r(15861),
        u = r(69417),
        d = r(70794),
        p = r(32867),
        f = r(85893),
        x = ['value', 'onInfoClick'];
      function m(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var b = function (e) {
        var t = e.value,
          r = e.onInfoClick,
          n = (0, o.Z)(e, x),
          m = (0, c.Z)().palette,
          b = Number((0, s.hE)(t).toFixed(2, d.O.ROUND_DOWN)),
          v = '';
        return (
          (v = b >= 3 ? m.success.main : b < 1.1 ? m.error.main : m.warning.main),
          (0, f.jsxs)(a.Z, {
            sx: {
              display: 'inline-flex',
              alignItems: { xs: 'flex-start', xsm: 'center' },
              flexDirection: { xs: 'column', xsm: 'row' },
            },
            'data-cy': 'HealthFactorTopPannel',
            children: [
              '-1' === t
                ? (0, f.jsx)(l.Z, {
                    variant: 'secondary14',
                    color: m.success.main,
                    children: '\u221e',
                  })
                : (0, f.jsx)(
                    p.B,
                    j({ value: b, sx: j({ color: v }, n.sx), visibleDecimals: 2, compact: !0 }, n)
                  ),
              r &&
                (0, f.jsx)(u.Z, {
                  onClick: r,
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
    49679: function (e, t, r) {
      r.d(t, {
        X: function () {
          return a;
        },
      });
      var n = r(80822),
        o = r(66489),
        i = (r(67294), r(60377)),
        s = r(38776),
        c = r(85893),
        a = function (e) {
          var t = e.children,
            r = (0, i.HT)(),
            a = r.user;
          return r.loading
            ? (0, c.jsx)(n.Z, {
                sx: {
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: (0, c.jsx)(o.Z, {}),
              })
            : ((0, s.Z)(a, 'User data loaded but no user found'),
              (0, c.jsx)(c.Fragment, { children: t(a) }));
        };
    },
    215: function (e, t, r) {
      r.d(t, {
        o: function () {
          return u;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(53219),
        s = r(85893),
        c = ['sx'];
      function a(e, t) {
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
            ? a(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var u = function (e) {
        var t = e.sx,
          r = (0, o.Z)(e, c);
        return (0, s.jsxs)(
          i.Z,
          l(
            l(
              {
                sx: l({ fill: 'none', stroke: '#A5A8B6' }, t),
                viewBox: '0 0 21 19',
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-label': 'Wallet',
              },
              r
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
    64311: function (e, t, r) {
      r.d(t, {
        Ch: function () {
          return b;
        },
        a9: function () {
          return h;
        },
        r$: function () {
          return v;
        },
      });
      var n = r(59499),
        o = r(57499),
        i = r(38264),
        s = r(53219),
        c = r(2734),
        a = r(80822),
        l = r(15861),
        u = r(23795),
        d = r(2127),
        p = r(85893);
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
      function x(e) {
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
      var m = {
          borderRadius: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          p: '2px',
          mt: '2px',
          cursor: 'pointer',
          '&:hover': { opacity: 0.6 },
        },
        j = function (e) {
          var t = e.color;
          return (0, p.jsx)(s.Z, {
            sx: { ml: '3px', color: t || 'text.muted', fontSize: '14px' },
            children: (0, p.jsx)(i.Z, {}),
          });
        },
        b = function (e) {
          var t = e.typographyProps,
            r = (0, c.Z)(),
            n = x(
              {
                border: '1px solid '.concat(r.palette.warning.main),
                color: r.palette.warning.main,
              },
              m
            );
          return (0, p.jsx)(d.a, {
            withoutHover: !0,
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'bXr0ee' }) }),
            children: (0, p.jsxs)(a.Z, {
              sx: n,
              children: [
                (0, p.jsx)(
                  l.Z,
                  x(
                    x(
                      {
                        variant: 'secondary12',
                        sx: { lineHeight: '0.75rem' },
                        color: r.palette.warning.main,
                      },
                      t
                    ),
                    {},
                    { children: (0, p.jsx)(o.cC, { id: 'KYAjf3' }) }
                  )
                ),
                (0, p.jsx)(j, { color: r.palette.warning.main }),
              ],
            }),
          });
        },
        v = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, p.jsxs)(a.Z, {
              sx: m,
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
        h = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(y, { content: (0, p.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, p.jsxs)(a.Z, {
              sx: m,
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
          var t = e.content;
          return (0, p.jsxs)(a.Z, {
            children: [
              (0, p.jsx)(a.Z, { sx: { mb: 4 }, children: t }),
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
    32867: function (e, t, r) {
      r.d(t, {
        B: function () {
          return x;
        },
        J: function () {
          return p;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(1279),
        s = r(15861),
        c = r(85893),
        a = [
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
      function l(e, t) {
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
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var d = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'],
        p = function (e) {
          var t = e.value,
            r = e.visibleDecimals,
            n = void 0 === r ? 2 : r,
            o = e.roundDown,
            s = e.compactThreshold,
            c = (0, i.hE)(t),
            a = c.toFixed(0).length;
          s && Number(t) <= s && (a = 0);
          var l = Math.min(Math.floor(a ? (a - 1) / 3 : 0), d.length - 1),
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
        var t = e.value,
          r = e.visibleDecimals,
          n = e.roundDown,
          o = p({ value: t, visibleDecimals: r, roundDown: n }),
          i = o.prefix,
          s = o.postfix;
        return (0, c.jsxs)(c.Fragment, { children: [i, s] });
      }
      function x(e) {
        var t = e.value,
          r = e.symbol,
          n = e.visibleDecimals,
          i = e.compact,
          l = e.percent,
          d = e.symbolsVariant,
          p = e.symbolsColor,
          x = e.roundDown,
          m = e.compactThreshold,
          j = (0, o.Z)(e, a),
          b = l ? 100 * Number(t) : Number(t),
          v = null !== n && void 0 !== n ? n : 0;
        0 === b ? (v = 0) : void 0 === n && (v = b >= 1 || l || 'USD' === r ? 2 : 7);
        var h = Math.pow(10, -v),
          y = 0 !== b && Math.abs(b) < Math.abs(h),
          g = y ? h : b,
          O = !1 !== i && (i || b > 99999);
        return (
          x && !O && (g = Math.trunc(Number(g) * Math.pow(10, v)) / Math.pow(10, v)),
          (0, c.jsxs)(
            s.Z,
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
                    (0, c.jsx)(s.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || j.variant,
                      color: p || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    !l &&
                    (0, c.jsx)(s.Z, {
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
                        compactThreshold: m,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: v,
                        minimumFractionDigits: v,
                      }).format(g),
                  l &&
                    (0, c.jsx)(s.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || j.variant,
                      color: p || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    'undefined' !== typeof r &&
                    (0, c.jsx)(s.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || j.variant,
                      color: p || 'text.secondary',
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
          return d;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(80822),
        s = r(15861),
        c = r(85893),
        a = ['caption', 'children', 'captionVariant', 'captionColor', 'align'];
      function l(e, t) {
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
            ? l(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var d = function (e) {
        var t = e.caption,
          r = e.children,
          n = e.captionVariant,
          l = void 0 === n ? 'secondary16' : n,
          d = e.captionColor,
          p = e.align,
          f = void 0 === p ? 'center' : p,
          x = (0, o.Z)(e, a);
        return (0, c.jsxs)(
          i.Z,
          u(
            u({}, x),
            {},
            {
              sx: u({ display: 'flex', alignItems: f, justifyContent: 'space-between' }, x.sx),
              children: [
                t &&
                  (0, c.jsx)(s.Z, {
                    component: 'div',
                    variant: l,
                    color: d,
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
          return v;
        },
        T1: function () {
          return w;
        },
        UD: function () {
          return g;
        },
      });
      var n = r(83618),
        o = r(59499),
        i = r(4730),
        s = r(67564),
        c = r(80822),
        a = r(86653),
        l = r(67294),
        u = r(25043),
        d = r(85893),
        p = ['symbol', 'aToken'],
        f = ['symbol', 'logoURI'],
        x = ['symbols', 'badgeSymbol'],
        m = ['symbol'];
      function j(e, t) {
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
            ? j(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : j(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function v(e) {
        var t = e.symbol,
          r = e.onImageGenerated,
          n = e.aToken,
          o = (0, l.useRef)(null),
          i = (0, l.useRef)(null),
          s = (0, l.useState)(!0),
          c = s[0],
          a = s[1];
        return (
          (0, l.useEffect)(
            function () {
              var e;
              if (!c && o.current && null !== (e = o.current) && void 0 !== e && e.contentDocument)
                if (n) {
                  var t,
                    s,
                    a,
                    l,
                    u =
                      null === (t = o.current) ||
                      void 0 === t ||
                      null === (s = t.contentDocument) ||
                      void 0 === s ||
                      null === (a = s.childNodes) ||
                      void 0 === a
                        ? void 0
                        : a[0],
                    d = u.getAttribute('width'),
                    p = u.getAttribute('height'),
                    f = u.getAttribute('viewBox');
                  u.setAttribute('x', 25),
                    u.setAttribute('width', 206),
                    u.setAttribute('y', 25),
                    u.setAttribute('height', 206),
                    f || u.setAttribute('viewBox', '0 0 '.concat(d, ' ').concat(p)),
                    null === (l = i.current) || void 0 === l || l.appendChild(u);
                  var x = new XMLSerializer().serializeToString(i.current);
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(x)))
                    )
                  );
                } else {
                  var m,
                    j = new XMLSerializer().serializeToString(
                      null === (m = o.current) || void 0 === m ? void 0 : m.contentDocument
                    );
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(j)))
                    )
                  );
                }
            },
            [c, n]
          ),
          (0, d.jsxs)('div', {
            style: { visibility: 'hidden', height: 0, width: 0, overflow: 'hidden' },
            children: [
              (0, d.jsx)('object', {
                style: { opacity: 1 },
                ref: o,
                id: 'svg',
                data: '/icons/tokens/'.concat(t.toLowerCase(), '.svg'),
                onLoad: function () {
                  return a(!1);
                },
              }),
              n && (0, d.jsx)(h, { ref: i }),
            ],
          })
        );
      }
      var h = (0, l.forwardRef)(function (e, t) {
        var r = e.symbol;
        return (0, d.jsxs)('svg', {
          style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
          ref: t,
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
                r &&
                  (0, d.jsx)('image', {
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
      function y(e) {
        var t = e.symbol,
          r = e.aToken,
          n = (0, i.Z)(e, p),
          o = (0, l.useState)(t.toLowerCase()),
          c = o[0],
          a = o[1];
        return (
          (0, l.useEffect)(
            function () {
              a(t.toLowerCase());
            },
            [t]
          ),
          (0, d.jsx)(
            s.Z,
            b(
              b({}, n),
              {},
              {
                sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
                children: r
                  ? (0, d.jsx)(h, { symbol: c })
                  : (0, d.jsx)('img', {
                      src: '/icons/tokens/'.concat(c, '.svg'),
                      onError: function () {
                        return a('default');
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
      function g(e) {
        var t = e.symbol,
          r = e.logoURI,
          n = (0, i.Z)(e, f),
          o = (0, l.useState)(t.toLowerCase()),
          c = o[0],
          a = o[1];
        return (0, d.jsx)(
          s.Z,
          b(
            b({}, n),
            {},
            {
              sx: b({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
              children: (0, d.jsx)(u.Z, {
                children: (0, d.jsx)('img', {
                  src: 'default' !== c && r ? r : '/icons/tokens/default.svg',
                  width: '100%',
                  height: '100%',
                  alt: ''.concat(t, ' icon'),
                  onError: function () {
                    return a('default');
                  },
                }),
              }),
            }
          )
        );
      }
      function O(e) {
        var t = e.symbols,
          r = e.badgeSymbol,
          n = (0, i.Z)(e, x);
        return r
          ? (0, d.jsx)(a.Z, {
              badgeContent: (0, d.jsx)(y, {
                symbol: r,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: t.map(function (e, t) {
                return (0, l.createElement)(
                  y,
                  b(
                    b({}, n),
                    {},
                    { key: e, symbol: e, sx: b({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, n.sx) }
                  )
                );
              }),
            })
          : (0, d.jsx)(c.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: t.map(function (e, t) {
                return (0, l.createElement)(
                  y,
                  b(
                    b({}, n),
                    {},
                    { key: e, symbol: e, sx: b({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, n.sx) }
                  )
                );
              }),
            });
      }
      function w(e) {
        var t = e.symbol,
          r = (0, i.Z)(e, m),
          o = t.split('_');
        if (o.length > 1) {
          var s = (0, n.Z)(o),
            c = s[0],
            a = s.slice(1);
          return (0, d.jsx)(O, b(b({}, r), {}, { symbols: a, badgeSymbol: '/pools/' + c }));
        }
        return (0, d.jsx)(y, b({ symbol: t }, r));
      }
      h.displayName = 'ATokenIcon';
    },
    40429: function (e, t, r) {
      r.d(t, {
        D: function () {
          return f;
        },
      });
      var n = r(57499),
        o = r(5506),
        i = r(52758),
        s = r(80822),
        c = r(53219),
        a = r(15861),
        l = r(23795),
        u = r(69417),
        d = r(44949),
        p = r(85893),
        f = function (e) {
          var t = e.txError,
            r = (0, d.vR)().close;
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
                    children: (0, p.jsx)(c.Z, {
                      sx: { color: 'error.main', fontSize: '32px' },
                      children: (0, p.jsx)(o.Z, {}),
                    }),
                  }),
                  (0, p.jsx)(a.Z, {
                    sx: { mt: 2 },
                    variant: 'h2',
                    children: (0, p.jsx)(n.cC, { id: 'u3ZeYl' }),
                  }),
                  (0, p.jsx)(a.Z, {
                    children: (0, p.jsx)(n.cC, {
                      id: 'DxfsGs',
                      components: {
                        0: (0, p.jsx)(l.Z, { href: 'https://discord.com/invite/aave' }),
                        1: (0, p.jsx)(l.Z, { href: 'https://github.com/aave/interface' }),
                      },
                    }),
                  }),
                  (0, p.jsxs)(u.Z, {
                    variant: 'outlined',
                    onClick: function () {
                      return navigator.clipboard.writeText(t.rawError.message.toString());
                    },
                    size: 'small',
                    sx: { mt: 6 },
                    children: [
                      (0, p.jsx)(n.cC, { id: 'X/ITG9' }),
                      (0, p.jsx)(c.Z, {
                        sx: { ml: 0.5, fontSize: '12px' },
                        children: (0, p.jsx)(i.Z, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, p.jsx)(s.Z, {
                sx: { display: 'flex', flexDirection: 'column', mt: 12 },
                children: (0, p.jsx)(u.Z, {
                  onClick: r,
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
    83063: function (e, t, r) {
      r.d(t, {
        Q: function () {
          return a;
        },
      });
      var n = r(57499),
        o = r(15861),
        i = r(69417),
        s = r(35783),
        c = r(85893),
        a = function (e) {
          var t = e.txError;
          return (0, c.jsx)(s.v, {
            severity: 'error',
            sx: { mt: 4, mb: 0 },
            children: (0, c.jsx)(o.Z, {
              variant: 'description',
              children: t.error
                ? (0, c.jsxs)(c.Fragment, {
                    children: [
                      t.error,
                      ' ',
                      (0, c.jsx)(i.Z, {
                        sx: { verticalAlign: 'top' },
                        variant: 'text',
                        onClick: function () {
                          return navigator.clipboard.writeText(t.rawError.message.toString());
                        },
                        children: (0, c.jsx)(o.Z, {
                          variant: 'description',
                          children: (0, c.jsx)(n.cC, { id: 'qOqbD6' }),
                        }),
                      }),
                    ],
                  })
                : (0, c.jsx)(n.cC, {
                    id: 'hjDCQr',
                    components: {
                      0: (0, c.jsx)(i.Z, {
                        sx: { verticalAlign: 'top' },
                        onClick: function () {
                          return navigator.clipboard.writeText(t.rawError.message.toString());
                        },
                      }),
                      1: (0, c.jsx)(o.Z, { variant: 'description' }),
                    },
                  }),
            }),
          });
        };
    },
    44880: function (e, t, r) {
      r.d(t, {
        R: function () {
          return j;
        },
      });
      var n = r(57499),
        o = r(75331),
        i = r(2734),
        s = r(80822),
        c = r(15861),
        a = r(69417),
        l = r(67294),
        u = r(215),
        d = r(32867),
        p = r(45640),
        f = r(72005),
        x = r(60386),
        m = r(85893),
        j = function (e) {
          var t = e.txHash,
            r = e.action,
            j = e.amount,
            b = e.symbol,
            v = e.collateral,
            h = e.rate,
            y = e.addToken,
            g = e.customAction,
            O = e.customText,
            w = (0, f.Z)().addERC20Token,
            C = (0, l.useState)(''),
            Z = C[0],
            k = C[1],
            P = (0, i.Z)();
          return (0, m.jsx)(x.R, {
            txHash: t,
            children: (0, m.jsxs)(s.Z, {
              sx: {
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              },
              children: [
                r &&
                  j &&
                  b &&
                  (0, m.jsx)(c.Z, {
                    children: (0, m.jsx)(n.cC, {
                      id: 'wAOL+X',
                      values: { action: r, symbol: b },
                      components: {
                        0: (0, m.jsx)(d.B, {
                          value: Number(j),
                          compact: !0,
                          variant: 'secondary14',
                        }),
                      },
                    }),
                  }),
                g && (0, m.jsxs)(c.Z, { children: [O, g] }),
                !r &&
                  !j &&
                  b &&
                  (0, m.jsxs)(c.Z, {
                    children: ['Your ', b, ' ', v ? 'now' : 'is not', ' used as collateral'],
                  }),
                h &&
                  (0, m.jsx)(c.Z, {
                    children: (0, m.jsx)(n.cC, {
                      id: 'f3W0Ej',
                      values: { 0: h === o.tk.Variable ? 'variable' : 'stable' },
                    }),
                  }),
                y &&
                  b &&
                  (0, m.jsxs)(s.Z, {
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
                      (0, m.jsx)(p.T1, {
                        symbol: y.symbol,
                        aToken: !(!y || !y.aToken),
                        sx: { fontSize: '32px', mt: '12px', mb: '8px' },
                      }),
                      (0, m.jsx)(c.Z, {
                        variant: 'description',
                        color: 'text.primary',
                        sx: { mx: '24px' },
                        children: (0, m.jsx)(n.cC, {
                          id: 'YyydIq',
                          values: { 0: y && y.aToken ? 'aToken ' : 'token ' },
                        }),
                      }),
                      (0, m.jsxs)(a.Z, {
                        onClick: function () {
                          w({
                            address: y.address,
                            decimals: y.decimals,
                            symbol: y.aToken ? '' : y.symbol,
                            image: /_/.test(y.symbol) ? void 0 : Z,
                          });
                        },
                        variant: 'dark' === P.palette.mode ? 'outlined' : 'contained',
                        size: 'medium',
                        sx: { mt: '8px', mb: '12px' },
                        children: [
                          y.symbol &&
                            !/_/.test(y.symbol) &&
                            (0, m.jsx)(p.Js, {
                              symbol: y.symbol,
                              onImageGenerated: k,
                              aToken: y.aToken,
                            }),
                          (0, m.jsx)(u.o, { sx: { width: '20px', height: '20px' } }),
                          (0, m.jsx)(c.Z, {
                            variant: 'buttonM',
                            color: 'white',
                            ml: '4px',
                            children: (0, m.jsx)(n.cC, { id: '8Q51DU' }),
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
    37096: function (e, t, r) {
      r.d(t, {
        E: function () {
          return i;
        },
      });
      var n = r(15861),
        o = r(85893),
        i = function (e) {
          var t = e.title,
            r = e.symbol;
          return (0, o.jsxs)(n.Z, {
            variant: 'h2',
            sx: { mb: 6 },
            children: [t, ' ', null !== r && void 0 !== r ? r : ''],
          });
        };
    },
    19408: function (e, t, r) {
      r.d(t, {
        I: function () {
          return j;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(57499),
        s = r(15861),
        c = r(69417),
        a = r(72005),
        l = r(3062),
        u = r(65361),
        d = r(35783),
        p = r(85893),
        f = ['networkName', 'chainId', 'event', 'funnel', 'askManualSwitch'];
      function x(e, t) {
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
            ? x(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : x(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var j = function (e) {
        var t = e.networkName,
          r = e.chainId,
          n = e.event,
          x = e.funnel,
          j = e.askManualSwitch,
          b = void 0 !== j && j,
          v = (0, o.Z)(e, f),
          h = (0, a.Z)(),
          y = h.switchNetwork,
          g = h.switchNetworkError,
          O = (0, l.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, p.jsx)(
          d.v,
          m(
            m({ severity: 'error', icon: !1 }, v),
            {},
            {
              children: g
                ? (0, p.jsx)(s.Z, { children: (0, p.jsx)(i.cC, { id: '+eOPG+' }) })
                : (0, p.jsxs)(s.Z, {
                    variant: 'description',
                    children: [
                      (0, p.jsx)(i.cC, { id: 'nh2EJK', values: { networkName: t } }),
                      ' ',
                      !b &&
                        (0, p.jsx)(c.Z, {
                          variant: 'text',
                          sx: { ml: '2px', verticalAlign: 'top' },
                          onClick: function () {
                            O(
                              u.vh.SWITCH_NETWORK,
                              m(
                                m(
                                  { funnel: x },
                                  null === n || void 0 === n ? void 0 : n.eventParams
                                ),
                                {},
                                { network: t }
                              )
                            ),
                              console.log('switchNetwork', r),
                              y(r);
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
    50060: function (e, t, r) {
      r.d(t, {
        P: function () {
          return v;
        },
      });
      var n = r(80854),
        o = r(1279),
        i = r(81206),
        s = r(82403),
        c = r(70794),
        a = r(3062),
        l = r(79850),
        u = r(47892),
        d = r(59499),
        p = r(99673),
        f = r(52251),
        x = r(35258);
      function m(e, t) {
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
      var j = function (e, t, r) {
          var n = (0, x.z)().poolTokensBalanceService;
          return (0, p.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? m(Object(r), !0).forEach(function (t) {
                        (0, d.Z)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                      : m(Object(r)).forEach(function (t) {
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
          var t = (0, a.Y)(function (e) {
              return e.account;
            }),
            r = j(e, t),
            d = (0, u.T)(e),
            p =
              r.some(function (e) {
                return e.isLoading;
              }) ||
              d.some(function (e) {
                return e.isLoading;
              });
          return {
            walletBalances: d.map(function (t, a) {
              var u;
              return (function (e) {
                var t = e.reservesHumanized,
                  r = e.balances,
                  a = e.marketData,
                  u = (null === t || void 0 === t ? void 0 : t.reservesData) || [],
                  d = (null === t || void 0 === t ? void 0 : t.baseCurrencyData) || {
                    marketReferenceCurrencyDecimals: 0,
                    marketReferenceCurrencyPriceInUsd: '0',
                    networkBaseTokenPriceInUsd: '0',
                    networkBaseTokenPriceDecimals: 0,
                  },
                  p = !0;
                return {
                  walletBalances: (null !== r && void 0 !== r ? r : []).reduce(function (e, t) {
                    var r = u.find(function (e) {
                      var r;
                      return t.address === n.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (r = l.m5[a.chainId].wrappedBaseAssetSymbol) || void 0 === r
                              ? void 0
                              : r.toLowerCase())
                        : e.underlyingAsset.toLowerCase() === t.address;
                    });
                    return (
                      '0' !== t.amount && (p = !1),
                      r &&
                        (e[t.address] = {
                          amount: (0, o.Fv)(t.amount, r.decimals),
                          amountUSD: (0, i.Z)({
                            amount: new c.O(t.amount),
                            currencyDecimals: r.decimals,
                            priceInMarketReferenceCurrency: r.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: d.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, o.Fv)(
                              d.marketReferenceCurrencyPriceInUsd,
                              s.$3
                            ),
                          }),
                        }),
                      e
                    );
                  }, {}),
                  hasEmptyWallet: p,
                };
              })({
                reservesHumanized: t.data,
                balances: null === (u = r[a]) || void 0 === u ? void 0 : u.data,
                marketData: e[a],
              });
            }),
            isLoading: p,
          };
        },
        v = function (e) {
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
  },
]);
