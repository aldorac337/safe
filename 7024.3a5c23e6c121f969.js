'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7024],
  {
    49212: function (e, r, n) {
      n.d(r, {
        G: function () {
          return j;
        },
      });
      var t = n(59499),
        o = n(4730),
        i = n(38264),
        c = n(80822),
        s = n(15861),
        a = n(93946),
        l = n(53219),
        u = n(67294),
        d = n(3062),
        p = n(2127),
        f = n(85893),
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
      var j = function (e) {
        var r = e.text,
          n = e.icon,
          t = e.iconSize,
          b = void 0 === t ? 14 : t,
          j = e.iconColor,
          y = e.iconMargin,
          O = e.children,
          m = e.textColor,
          w = e.wrapperProps,
          g = (w = void 0 === w ? {} : w).sx,
          Z = (0, o.Z)(w, x),
          P = e.event,
          k = e.open,
          C = void 0 !== k && k,
          S = e.setOpen,
          E = (0, o.Z)(e, h),
          D = (0, u.useState)(C),
          M = D[0],
          A = D[1],
          R = (0, d.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, f.jsxs)(
          c.Z,
          v(
            v({ sx: v({ display: 'flex', alignItems: 'center' }, g) }, Z),
            {},
            {
              children: [
                r && (0, f.jsx)(s.Z, v(v({}, E), {}, { color: m, children: r })),
                (0, f.jsx)(p.a, {
                  tooltipContent: (0, f.jsx)(f.Fragment, { children: O }),
                  open: M,
                  setOpen: function () {
                    S && S(!M), A(!M);
                  },
                  children: (0, f.jsx)(a.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: b,
                      height: b,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: y || 0.5,
                    },
                    onClick: function () {
                      P && R(P.eventName, v({}, P.eventParams));
                    },
                    children: (0, f.jsx)(l.Z, {
                      sx: {
                        fontSize: b,
                        color: j || (M ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: j || 'info.main' },
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
    27024: function (e, r, n) {
      n.r(r),
        n.d(r, {
          ReadOnlyModal: function () {
            return R;
          },
        });
      var t = n(50029),
        o = n(87794),
        i = n.n(o),
        c = n(57499),
        s = n(2734),
        a = n(61730),
        l = n(80822),
        u = n(15861),
        d = n(73601),
        p = n(69417),
        f = n(67720),
        x = n(19485),
        h = n(67294),
        b = n(59499),
        v = n(36864),
        j = n(49212),
        y = n(85893);
      function O(e, r) {
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
            ? O(Object(n), !0).forEach(function (r) {
                (0, b.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : O(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var w = function (e) {
          var r = (0, v.Z)({}, e);
          return (0, y.jsx)(j.G, m(m({}, r), {}, { children: (0, y.jsx)(c.cC, { id: 'SY9hVo' }) }));
        },
        g = n(44949),
        Z = n(72005),
        P = n(3062),
        k = n(65361),
        C = n(79850),
        S = n(15495),
        E = n(48486),
        D = n(92321),
        M = n(15629),
        A = n(37096),
        R = function () {
          var e = (0, E.q)().disconnectAsync,
            r = (0, D.m)().isConnected,
            n = (0, Z.Z)(),
            o = n.readOnlyMode,
            b = n.setReadOnlyModeAddress,
            v = (0, h.useState)(''),
            j = v[0],
            O = v[1],
            m = (0, h.useState)(!1),
            R = m[0],
            W = m[1],
            z = (0, g.vR)(),
            I = z.type,
            N = z.close,
            _ = (0, s.Z)().breakpoints,
            F = (0, a.Z)(_.down('sm')),
            G = (0, C.Zs)(),
            L = (0, P.Y)(function (e) {
              return e.trackEvent;
            }),
            Y = (function () {
              var e = (0, t.Z)(
                i().mark(function e(r) {
                  var n, t;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((R && W(!1), !x.isAddress(r))) {
                            e.next = 5;
                            break;
                          }
                          K(r), (e.next = 14);
                          break;
                        case 5:
                          if ('.eth' !== r.slice(-4)) {
                            e.next = 13;
                            break;
                          }
                          return (n = (0, S.F)(r)), (e.next = 9), G.resolveName(n);
                        case 9:
                          (t = e.sent) && x.isAddress(t) ? K(t) : W(!0), (e.next = 14);
                          break;
                        case 13:
                          W(!0);
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (r) {
                return e.apply(this, arguments);
              };
            })(),
            K = (function () {
              var n = (0, t.Z)(
                i().mark(function n(t) {
                  return i().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (!r) {
                            n.next = 3;
                            break;
                          }
                          return (n.next = 3), e();
                        case 3:
                          b(t), localStorage.setItem('readOnlyModeAddress', t), q();
                        case 6:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            T = (function () {
              var e = (0, t.Z)(
                i().mark(function e() {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          localStorage.removeItem('readOnlyModeAddress'), b(void 0), q();
                        case 3:
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
            q = function () {
              O(''), N();
            };
          return (0, y.jsx)(M.P, {
            open: I === g.w8.ReadMode,
            setOpen: q,
            children: (0, y.jsxs)(l.Z, {
              sx: { display: 'flex', flexDirection: 'column' },
              children: [
                (0, y.jsx)(A.E, { title: 'Watch Wallet' }),
                (0, y.jsxs)(l.Z, {
                  sx: { display: 'flex', alignItems: 'center', mb: 1, padding: '10px 0' },
                  children: [
                    (0, y.jsx)(u.Z, {
                      variant: 'subheader1',
                      color: 'text.secondary',
                      children: (0, y.jsx)(c.cC, { id: 'rnKPW1' }),
                    }),
                    (0, y.jsx)(w, {}),
                  ],
                }),
                (0, y.jsxs)('form', {
                  onSubmit: function (e) {
                    e.preventDefault(), Y(j);
                  },
                  children: [
                    (0, y.jsx)(d.ZP, {
                      sx: function (e) {
                        return {
                          py: 1,
                          px: 3,
                          border: '1px solid '.concat(e.palette.divider),
                          borderRadius: '6px',
                          mb: 1,
                          overflow: 'show',
                          fontSize: F ? '16px' : '14px',
                        };
                      },
                      placeholder: 'Enter ethereum address or ENS name',
                      fullWidth: !0,
                      value: j,
                      onChange: function (e) {
                        return O(e.target.value);
                      },
                      inputProps: { 'aria-label': 'read-only mode address' },
                    }),
                    (0, y.jsx)(p.Z, {
                      type: 'submit',
                      variant: 'outlined',
                      sx: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        mb: '8px',
                      },
                      size: 'large',
                      fullWidth: !0,
                      onClick: function () {
                        return L(k.Bp.MOCK_WALLET);
                      },
                      disabled: !x.isAddress(j) && '.eth' !== j.slice(-4),
                      'aria-label': 'read-only mode address',
                      children: (0, y.jsx)(c.cC, { id: 'yZwLw6' }),
                    }),
                  ],
                }),
                R &&
                  (0, y.jsx)(u.Z, {
                    variant: 'helperText',
                    color: 'error.main',
                    children: (0, y.jsx)(c.cC, { id: '2a6G7d' }),
                  }),
                o &&
                  (0, y.jsxs)(y.Fragment, {
                    children: [
                      (0, y.jsx)(f.Z, {}),
                      (0, y.jsx)(p.Z, {
                        sx: { mt: 2 },
                        variant: 'outlined',
                        onClick: T,
                        children: 'Remove watched address',
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
    },
    37096: function (e, r, n) {
      n.d(r, {
        E: function () {
          return i;
        },
      });
      var t = n(15861),
        o = n(85893),
        i = function (e) {
          var r = e.title,
            n = e.symbol;
          return (0, o.jsxs)(t.Z, {
            variant: 'h2',
            sx: { mb: 6 },
            children: [r, ' ', null !== n && void 0 !== n ? n : ''],
          });
        };
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
