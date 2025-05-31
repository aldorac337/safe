'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9771],
  {
    49212: function (e, r, t) {
      t.d(r, {
        G: function () {
          return v;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(38264),
        c = t(80822),
        s = t(15861),
        a = t(93946),
        p = t(53219),
        l = t(67294),
        u = t(3062),
        d = t(2127),
        b = t(85893),
        f = ['sx'],
        O = [
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
      function y(e) {
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
          w = e.iconMargin,
          h = e.children,
          g = e.textColor,
          x = e.wrapperProps,
          P = (x = void 0 === x ? {} : x).sx,
          C = (0, o.Z)(x, f),
          m = e.event,
          D = e.open,
          Z = void 0 !== D && D,
          E = e.setOpen,
          S = (0, o.Z)(e, O),
          U = (0, l.useState)(Z),
          M = U[0],
          k = U[1],
          z = (0, u.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, b.jsxs)(
          c.Z,
          y(
            y({ sx: y({ display: 'flex', alignItems: 'center' }, P) }, C),
            {},
            {
              children: [
                r && (0, b.jsx)(s.Z, y(y({}, S), {}, { color: g, children: r })),
                (0, b.jsx)(d.a, {
                  tooltipContent: (0, b.jsx)(b.Fragment, { children: h }),
                  open: M,
                  setOpen: function () {
                    E && E(!M), k(!M);
                  },
                  children: (0, b.jsx)(a.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: j,
                      height: j,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: w || 0.5,
                    },
                    onClick: function () {
                      m && z(m.eventName, y({}, m.eventParams));
                    },
                    children: (0, b.jsx)(p.Z, {
                      sx: {
                        fontSize: j,
                        color: v || (M ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: v || 'info.main' },
                      },
                      children: t || (0, b.jsx)(i.Z, {}),
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
    },
    35783: function (e, r, t) {
      t.d(r, {
        v: function () {
          return l;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(21737),
        c = t(85893),
        s = ['children', 'sx'];
      function a(e, r) {
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
      function p(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : a(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var l = function (e) {
        var r = e.children,
          t = e.sx,
          n = (0, o.Z)(e, s),
          a = p({ mb: 6, alignItems: 'center', width: '100%' }, t);
        return (0, c.jsx)(i.Z, p(p({ sx: a }, n), {}, { children: r }));
      };
    },
    89771: function (e, r, t) {
      t.d(r, {
        hv: function () {
          return I;
        },
        rM: function () {
          return H;
        },
        wD: function () {
          return J;
        },
        ov: function () {
          return _;
        },
      });
      var n = t(59499),
        o = t(4730),
        i = t(1279),
        c = t(67294),
        s = t(57499),
        a = t(58771),
        p = t(80822),
        l = t(38577),
        u = t(49212),
        d = t(85893),
        b = ['borrowCap'];
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
      function O(e) {
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
          var r = e.borrowCap,
            t = (0, o.Z)(e, b);
          return r && r.isMaxed
            ? (0, d.jsx)(p.Z, {
                sx: { ml: 2 },
                children: (0, d.jsx)(
                  u.G,
                  O(
                    O({}, t),
                    {},
                    {
                      icon: (0, d.jsx)(a.Z, {}),
                      iconColor: 'warning.main',
                      iconSize: 18,
                      children: (0, d.jsxs)(d.Fragment, {
                        children: [
                          (0, d.jsx)(s.cC, { id: 'AqgYNC' }),
                          ' ',
                          (0, d.jsx)(l.rU, {
                            href: 'https://docs.aave.com/developers/whats-new/supply-borrow-caps',
                            underline: 'always',
                            children: (0, d.jsx)(s.cC, { id: 'zwWKhA' }),
                          }),
                        ],
                      }),
                    }
                  )
                ),
              })
            : null;
        },
        y = ['debtCeiling'];
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
      function w(e) {
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
          var r = e.debtCeiling,
            t = (0, o.Z)(e, y);
          return r && r.isMaxed
            ? (0, d.jsx)(p.Z, {
                sx: { ml: 2 },
                children: (0, d.jsx)(
                  u.G,
                  w(
                    w({}, t),
                    {},
                    {
                      icon: (0, d.jsx)(a.Z, {}),
                      iconColor: 'error.main',
                      iconSize: 18,
                      children: (0, d.jsxs)(d.Fragment, {
                        children: [
                          (0, d.jsx)(s.cC, { id: 'OYuJ9K' }),
                          ' ',
                          (0, d.jsx)(l.rU, {
                            href: 'https://docs.aave.com/faq/aave-v3-features#how-does-isolation-mode-affect-my-borrowing-power',
                            underline: 'always',
                            children: (0, d.jsx)(s.cC, { id: 'zwWKhA' }),
                          }),
                        ],
                      }),
                    }
                  )
                ),
              })
            : null;
        },
        g = ['supplyCap'];
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
      function P(e) {
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
      var C = function (e) {
          var r = e.supplyCap,
            t = (0, o.Z)(e, g);
          return r && r.isMaxed
            ? (0, d.jsx)(p.Z, {
                sx: { ml: 2 },
                children: (0, d.jsx)(
                  u.G,
                  P(
                    P({}, t),
                    {},
                    {
                      icon: (0, d.jsx)(a.Z, {}),
                      iconColor: 'warning.main',
                      iconSize: 18,
                      children: (0, d.jsxs)(d.Fragment, {
                        children: [
                          (0, d.jsx)(s.cC, { id: 'T/AIqG' }),
                          ' ',
                          (0, d.jsx)(l.rU, {
                            href: 'https://docs.aave.com/developers/whats-new/supply-borrow-caps',
                            underline: 'always',
                            children: (0, d.jsx)(s.cC, { id: 'zwWKhA' }),
                          }),
                        ],
                      }),
                    }
                  )
                ),
              })
            : null;
        },
        m = t(35783),
        D = ['borrowCap', 'icon'];
      function Z(e, r) {
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
      function E(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Z(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : Z(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var S = function (e) {
          var r = e.borrowCap,
            t = e.icon,
            n = void 0 === t || t,
            i = (0, o.Z)(e, D);
          if (!r.percentUsed || r.percentUsed < 98) return null;
          return (0, d.jsxs)(
            m.v,
            E(
              E({ severity: 'warning', icon: n }, i),
              {},
              {
                children: [
                  r.isMaxed
                    ? (0, d.jsx)(s.cC, { id: 'Sa1UE/' })
                    : (0, d.jsx)(s.cC, { id: 'usB84Z' }),
                  ' ',
                  (0, d.jsx)(l.rU, {
                    href: 'https://docs.aave.com/developers/whats-new/supply-borrow-caps',
                    underline: 'always',
                    children: (0, d.jsx)(s.cC, { id: 'zwWKhA' }),
                  }),
                ],
              }
            )
          );
        },
        U = ['debtCeiling', 'icon'];
      function M(e, r) {
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
      function k(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? M(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : M(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var z = function (e) {
          var r = e.debtCeiling,
            t = e.icon,
            n = void 0 === t || t,
            i = (0, o.Z)(e, U);
          if (!r.percentUsed || r.percentUsed < 98) return null;
          var c = r.isMaxed ? 'error' : 'warning';
          return (0, d.jsxs)(
            m.v,
            k(
              k({ severity: c, icon: n }, i),
              {},
              {
                children: [
                  r.isMaxed
                    ? (0, d.jsx)(s.cC, { id: 'KAz/NV' })
                    : (0, d.jsx)(s.cC, { id: 'O+tyU+', values: { 0: r.percentUsed.toFixed(2) } }),
                  ' ',
                  (0, d.jsx)(l.rU, {
                    href: 'https://docs.aave.com/faq/aave-v3-features#how-does-isolation-mode-affect-my-borrowing-power',
                    underline: 'always',
                    children: (0, d.jsx)(s.cC, { id: 'zwWKhA' }),
                  }),
                ],
              }
            )
          );
        },
        A = ['supplyCap', 'icon'];
      function W(e, r) {
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
      function K(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? W(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : W(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var N = function (e) {
          var r = e.supplyCap,
            t = e.icon,
            n = void 0 === t || t,
            i = (0, o.Z)(e, A);
          if (!r.percentUsed || r.percentUsed < 98) return null;
          return (0, d.jsxs)(
            m.v,
            K(
              K({ severity: 'warning', icon: n }, i),
              {},
              {
                children: [
                  r.isMaxed
                    ? (0, d.jsx)(s.cC, { id: 'zTOjMP' })
                    : (0, d.jsx)(s.cC, { id: 'Hvwnm9', values: { 0: r.percentUsed.toFixed(2) } }),
                  ' ',
                  (0, d.jsx)(l.rU, {
                    href: 'https://docs.aave.com/developers/whats-new/supply-borrow-caps',
                    underline: 'always',
                    children: (0, d.jsx)(s.cC, { id: 'zwWKhA' }),
                  }),
                ],
              }
            )
          );
        },
        R = ['supplyCap', 'icon'],
        F = ['borrowCap', 'icon'],
        T = ['debtCeiling', 'icon'];
      function q(e, r) {
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
      function G(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? q(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : q(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var B = (0, c.createContext)({}),
        I = function (e) {
          var r = e.children,
            t = e.asset;
          if (!t)
            return (
              console.warn('<AssetCapsProvider /> was not given a valid reserve asset to parse'),
              null
            );
          var n = (function (e) {
            var r = Y(e),
              t = r.supplyCapUsage,
              n = r.supplyCapReached,
              i = H(e),
              c = i.borrowCapUsage,
              s = i.borrowCapReached,
              a = J(e);
            return {
              reserve: e,
              supplyCap: {
                percentUsed: t,
                isMaxed: n,
                determineWarningDisplay: function (e) {
                  var r = e.supplyCap,
                    t = e.icon,
                    n = (0, o.Z)(e, R);
                  return r ? (0, d.jsx)(N, G({ supplyCap: r, icon: t }, n)) : null;
                },
                displayMaxedTooltip: function (e) {
                  var r = e.supplyCap;
                  return r ? (0, d.jsx)(C, { supplyCap: r }) : null;
                },
              },
              borrowCap: {
                percentUsed: c,
                isMaxed: s,
                determineWarningDisplay: function (e) {
                  var r = e.borrowCap,
                    t = e.icon,
                    n = (0, o.Z)(e, F);
                  return r ? (0, d.jsx)(S, G({ borrowCap: r, icon: t }, n)) : null;
                },
                displayMaxedTooltip: function (e) {
                  var r = e.borrowCap;
                  return r ? (0, d.jsx)(j, { borrowCap: r }) : null;
                },
              },
              debtCeiling: {
                percentUsed: a.debtCeilingUsage,
                isMaxed: a.debtCeilingReached,
                determineWarningDisplay: function (e) {
                  var r = e.debtCeiling,
                    t = e.icon,
                    n = (0, o.Z)(e, T);
                  return r ? (0, d.jsx)(z, G({ debtCeiling: r, icon: t }, n)) : null;
                },
                displayMaxedTooltip: function (e) {
                  var r = e.debtCeiling;
                  return r ? (0, d.jsx)(h, { debtCeiling: r }) : null;
                },
              },
            };
          })(t);
          return (0, d.jsx)(B.Provider, { value: n, children: r });
        },
        _ = function () {
          var e = (0, c.useContext)(B);
          if (void 0 === e)
            throw new Error(
              'useAssetCaps() can only be used inside of <AssetCapsProvider />, please declare it at a higher level.'
            );
          return e;
        },
        Y = function (e) {
          var r = e ? 100 * (0, i.hE)(e.totalLiquidity).dividedBy(e.supplyCap).toNumber() : 0;
          return { supplyCapUsage: (r = r === 1 / 0 ? 0 : r), supplyCapReached: r >= 99.99 };
        },
        H = function (e) {
          var r = e ? 100 * (0, i.hE)(e.totalDebt).dividedBy(e.borrowCap).toNumber() : 0;
          return { borrowCapUsage: (r = r === 1 / 0 ? 0 : r), borrowCapReached: r >= 99.99 };
        },
        J = function (e) {
          var r = e
            ? 100 * (0, i.hE)(e.isolationModeTotalDebt).dividedBy(e.debtCeiling).toNumber()
            : 0;
          return { debtCeilingUsage: (r = r === 1 / 0 ? 0 : r), debtCeilingReached: r >= 99.99 };
        };
    },
  },
]);
