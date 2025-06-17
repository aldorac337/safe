'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9771],
  {
    89771: function (e, r, t) {
      t.d(r, {
        hv: function () {
          return _;
        },
        rM: function () {
          return I;
        },
        wD: function () {
          return J;
        },
        ov: function () {
          return Y;
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
      function v(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? w(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : w(Object(t)).forEach(function (r) {
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
                  v(
                    v({}, t),
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
      function C(e, r) {
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
            ? C(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : C(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var P = function (e) {
          var r = e.supplyCap,
            t = (0, o.Z)(e, g);
          return r && r.isMaxed
            ? (0, d.jsx)(p.Z, {
                sx: { ml: 2 },
                children: (0, d.jsx)(
                  u.G,
                  x(
                    x({}, t),
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
      function U(e, r) {
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
      function Z(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? U(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : U(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var E = function (e) {
          var r = e.borrowCap,
            t = e.icon,
            n = void 0 === t || t,
            i = (0, o.Z)(e, D);
          if (!r.percentUsed || r.percentUsed < 98) return null;
          return (0, d.jsxs)(
            m.v,
            Z(
              Z({ severity: 'warning', icon: n }, i),
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
        S = ['debtCeiling', 'icon'];
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
      function A(e) {
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
      var k = function (e) {
          var r = e.debtCeiling,
            t = e.icon,
            n = void 0 === t || t,
            i = (0, o.Z)(e, S);
          if (!r.percentUsed || r.percentUsed < 98) return null;
          var c = r.isMaxed ? 'error' : 'warning';
          return (0, d.jsxs)(
            m.v,
            A(
              A({ severity: c, icon: n }, i),
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
        z = ['supplyCap', 'icon'];
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
            i = (0, o.Z)(e, z);
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
        T = ['borrowCap', 'icon'],
        q = ['debtCeiling', 'icon'];
      function F(e, r) {
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
      function B(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? F(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : F(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var G = (0, c.createContext)({}),
        _ = function (e) {
          var r = e.children,
            t = e.asset;
          if (!t)
            return (
              console.warn('<AssetCapsProvider /> was not given a valid reserve asset to parse'),
              null
            );
          var n = (function (e) {
            var r = H(e),
              t = r.supplyCapUsage,
              n = r.supplyCapReached,
              i = I(e),
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
                  return r ? (0, d.jsx)(N, B({ supplyCap: r, icon: t }, n)) : null;
                },
                displayMaxedTooltip: function (e) {
                  var r = e.supplyCap;
                  return r ? (0, d.jsx)(P, { supplyCap: r }) : null;
                },
              },
              borrowCap: {
                percentUsed: c,
                isMaxed: s,
                determineWarningDisplay: function (e) {
                  var r = e.borrowCap,
                    t = e.icon,
                    n = (0, o.Z)(e, T);
                  return r ? (0, d.jsx)(E, B({ borrowCap: r, icon: t }, n)) : null;
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
                    n = (0, o.Z)(e, q);
                  return r ? (0, d.jsx)(k, B({ debtCeiling: r, icon: t }, n)) : null;
                },
                displayMaxedTooltip: function (e) {
                  var r = e.debtCeiling;
                  return r ? (0, d.jsx)(h, { debtCeiling: r }) : null;
                },
              },
            };
          })(t);
          return (0, d.jsx)(G.Provider, { value: n, children: r });
        },
        Y = function () {
          var e = (0, c.useContext)(G);
          if (void 0 === e)
            throw new Error(
              'useAssetCaps() can only be used inside of <AssetCapsProvider />, please declare it at a higher level.'
            );
          return e;
        },
        H = function (e) {
          var r = e ? 100 * (0, i.hE)(e.totalLiquidity).dividedBy(e.supplyCap).toNumber() : 0;
          return { supplyCapUsage: (r = r === 1 / 0 ? 0 : r), supplyCapReached: r >= 99.99 };
        },
        I = function (e) {
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
