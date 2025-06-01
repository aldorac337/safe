'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8084],
  {
    90286: function (e, r, n) {
      var t = n(59499),
        o = n(4730),
        i = n(88078),
        s = n(80822),
        c = n(15861),
        a = (n(67294), n(60377)),
        l = n(32867),
        p = n(85893),
        d = ['minVal', 'maxVal', 'percentVariant', 'hyphenVariant'];
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
      function u(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? x(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : x(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      r.Z = function (e) {
        var r = e.minVal,
          n = e.maxVal,
          t = e.percentVariant,
          x = e.hyphenVariant,
          f = (0, o.Z)(e, d),
          j = (0, a.HT)(),
          h = j.ghoLoadingData,
          m = j.ghoReserveData;
        if (h) return (0, p.jsx)(i.Z, { width: 70, height: 24 });
        var b = null !== r && void 0 !== r ? r : m.ghoBorrowAPYWithMaxDiscount,
          v = null !== n && void 0 !== n ? n : m.ghoVariableBorrowAPY,
          y = Number((100 * b).toFixed(2)) === Number((100 * v).toFixed(2));
        return (0, p.jsx)(s.Z, {
          sx: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
          children: y
            ? (0, p.jsx)(
                l.B,
                u(
                  {
                    compact: !0,
                    percent: !0,
                    value: b,
                    visibleDecimals: 2,
                    variant: null !== t && void 0 !== t ? t : 'h3',
                    'data-cy': 'apy',
                  },
                  f
                )
              )
            : (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(
                    l.B,
                    u(
                      {
                        compact: !0,
                        value: 100 * b,
                        visibleDecimals: 2,
                        variant: null !== t && void 0 !== t ? t : 'h3',
                        'data-cy': 'apy-gho-from',
                      },
                      f
                    )
                  ),
                  (0, p.jsx)(c.Z, {
                    variant: null !== x && void 0 !== x ? x : 'secondary16',
                    color: 'text.secondary',
                    sx: { mx: 0.5 },
                    children: '-',
                  }),
                  (0, p.jsx)(
                    l.B,
                    u(
                      {
                        compact: !0,
                        percent: !0,
                        value: v,
                        visibleDecimals: 2,
                        variant: null !== t && void 0 !== t ? t : 'h3',
                        'data-cy': 'apy-gho-till',
                      },
                      f
                    )
                  ),
                ],
              }),
        });
      };
    },
    81391: function (e, r, n) {
      n.d(r, {
        d: function () {
          return l;
        },
      });
      var t = n(2734),
        o = n(61730),
        i = n(80822),
        s = n(15861),
        c = n(88078),
        a = n(85893),
        l = function (e) {
          var r = e.icon,
            n = e.title,
            l = e.titleIcon,
            p = e.children,
            d = e.hideIcon,
            x = e.variant,
            u = void 0 === x ? 'dark' : x,
            f = e.withLine,
            j = e.loading,
            h = e.withoutIconWrapper,
            m = (0, t.Z)(),
            b = (0, o.Z)(m.breakpoints.up('sm'));
          return (0, a.jsxs)(i.Z, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              width: { xs: 'calc(50% - 12px)', xsm: 'unset' },
            },
            children: [
              f &&
                (0, a.jsx)(i.Z, {
                  sx: { mr: 8, my: 'auto', width: '1px', bgcolor: '#F2F3F729', height: '37px' },
                }),
              !d &&
                (h
                  ? r && r
                  : (0, a.jsx)(i.Z, {
                      sx: {
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #EBEBED1F',
                        borderRadius: '12px',
                        bgcolor: '#383D51',
                        boxShadow:
                          '0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)',
                        width: 42,
                        height: 42,
                        mr: 3,
                      },
                      children: r && r,
                    })),
              (0, a.jsxs)(i.Z, {
                sx: { display: 'flex', flexDirection: 'column' },
                children: [
                  (0, a.jsxs)(i.Z, {
                    sx: { display: 'inline-flex', alignItems: 'center' },
                    children: [
                      (0, a.jsx)(s.Z, {
                        sx: { color: 'dark' === u ? '#A5A8B6' : '#62677B' },
                        variant: b ? 'description' : 'caption',
                        component: 'div',
                        children: n,
                      }),
                      l && l,
                    ],
                  }),
                  j
                    ? (0, a.jsx)(c.Z, {
                        width: 60,
                        height: b ? 28 : 24,
                        sx: { background: '#383D51' },
                      })
                    : p,
                ],
              }),
            ],
          });
        };
    },
    37836: function (e, r, n) {
      n.d(r, {
        v: function () {
          return s;
        },
      });
      var t = n(57499),
        o = n(38577),
        i = n(85893),
        s = function () {
          return (0, i.jsx)(t.cC, {
            id: 'WaZyaV',
            components: {
              0: (0, i.jsx)('b', {}),
              1: (0, i.jsx)(o.rU, {
                href: 'https://docs.aave.com/developers/v/2.0/guides/ampl-asset-listing',
                underline: 'always',
              }),
            },
          });
        };
    },
    51205: function (e, r, n) {
      n.d(r, {
        l: function () {
          return c;
        },
      });
      var t = n(57499),
        o = n(88529),
        i = n(38577),
        s = n(85893),
        c = function (e) {
          var r = e.symbol,
            n = e.currentMarket;
          return (0, s.jsx)(t.cC, {
            id: 'dgr1aY',
            components: {
              0: (0, s.jsx)(i.rU, { href: (0, o.E)(r, n), sx: { textDecoration: 'underline' } }),
            },
          });
        };
    },
    69110: function (e, r, n) {
      n.d(r, {
        U: function () {
          return a;
        },
        k: function () {
          return l;
        },
      });
      var t = n(59499),
        o = n(57499),
        i = n(25074),
        s = n(38577),
        c = n(85893),
        a = (0, t.Z)({}, i.el.proto_mainnet, {
          BUSD: 'https://governance.aave.com/t/arfc-busd-offboarding-plan/12170',
          TUSD: 'https://governance.aave.com/t/arfc-tusd-offboarding-plan/14008',
        }),
        l = function (e) {
          var r = e.discussionLink;
          return (0, c.jsx)(o.cC, {
            id: 'IOIx8L',
            components: { 0: (0, c.jsx)(s.rU, { href: r, sx: { textDecoration: 'underline' } }) },
          });
        };
    },
    69671: function (e, r, n) {
      n.d(r, {
        O: function () {
          return i;
        },
      });
      var t = n(57499),
        o = n(85893),
        i = function () {
          return (0, o.jsx)(t.cC, { id: 'KoOBI2' });
        };
    },
    38063: function (e, r, n) {
      n.d(r, {
        J: function () {
          return l;
        },
      });
      var t = n(61730),
        o = n(80822),
        i = n(32867),
        s = n(6308),
        c = n(5276),
        a = n(85893),
        l = function (e) {
          var r = e.symbol,
            n = e.value,
            l = e.incentives,
            p = e.address,
            d = e.variant,
            x = void 0 === d ? 'secondary14' : d,
            u = e.symbolsVariant,
            f = e.align,
            j = e.color,
            h = e.tooltip,
            m = e.market,
            b = e.protocolAction,
            v = (0, t.Z)('(max-width:1125px)');
          return (0, a.jsxs)(o.Z, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: f || { xs: 'flex-end', xsm: 'center' },
              justifyContent: 'center',
              textAlign: 'center',
            },
            children: [
              '-1' !== n.toString()
                ? (0, a.jsxs)(o.Z, {
                    sx: { display: 'flex' },
                    children: [
                      (0, a.jsx)(i.B, {
                        'data-cy': 'apy',
                        value: n,
                        percent: !0,
                        variant: x,
                        symbolsVariant: u,
                        color: j,
                        symbolsColor: j,
                      }),
                      h,
                    ],
                  })
                : (0, a.jsx)(s.J, { variant: x, color: j || 'text.secondary' }),
              (0, a.jsxs)(o.Z, {
                sx: v
                  ? {
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '4px',
                    }
                  : {
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '4px',
                      flexWrap: 'wrap',
                      flex: '0 0 50%',
                    },
                children: [
                  (0, a.jsx)(c.MB, { incentives: l, symbol: r }),
                  (0, a.jsx)(c.ET, { symbol: r, market: m, protocolAction: b }),
                  (0, a.jsx)(c.OP, { market: m, rewardedAsset: p, protocolAction: b }),
                  (0, a.jsx)(c.GV, { rewardedAsset: p }),
                  (0, a.jsx)(c.xY, { symbol: r, market: m, protocolAction: b }),
                  (0, a.jsx)(c.DF, { rewardedAsset: p }),
                ],
              }),
            ],
          });
        };
    },
    96398: function (e, r, n) {
      n.d(r, {
        $: function () {
          return l;
        },
      });
      var t = n(58771),
        o = n(80822),
        i = n(53219),
        s = n(2127),
        c = n(37836),
        a = n(85893),
        l = function () {
          return (0, a.jsx)(s.a, {
            tooltipContent: (0, a.jsx)(o.Z, { children: (0, a.jsx)(c.v, {}) }),
            children: (0, a.jsx)(i.Z, {
              sx: { fontSize: '20px', color: 'warning.main', ml: 2 },
              children: (0, a.jsx)(t.Z, {}),
            }),
          });
        };
    },
    43933: function (e, r, n) {
      n.d(r, {
        w: function () {
          return l;
        },
      });
      var t = n(58771),
        o = n(80822),
        i = n(53219),
        s = n(2127),
        c = n(51205),
        a = n(85893),
        l = function (e) {
          var r = e.symbol,
            n = e.currentMarket;
          return (0, a.jsx)(s.a, {
            tooltipContent: (0, a.jsx)(o.Z, {
              children: (0, a.jsx)(c.l, { symbol: r, currentMarket: n }),
            }),
            children: (0, a.jsx)(i.Z, {
              sx: { fontSize: '20px', color: 'error.main', ml: 2 },
              children: (0, a.jsx)(t.Z, {}),
            }),
          });
        };
    },
    88529: function (e, r, n) {
      n.d(r, {
        E: function () {
          return d;
        },
        Q: function () {
          return x;
        },
      });
      var t = n(57499),
        o = n(58771),
        i = n(80822),
        s = n(53219),
        c = n(79850),
        a = n(2127),
        l = n(38577),
        p = n(85893),
        d = function (e, r) {
          return e && c.$e[e.toUpperCase() + r]
            ? c.$e[e.toUpperCase() + r]
            : 'https://app.aave.com/governance';
        },
        x = function (e) {
          var r = e.symbol,
            n = e.currentMarket;
          return (0, p.jsx)(a.a, {
            tooltipContent: (0, p.jsx)(i.Z, {
              children: (0, p.jsx)(t.cC, {
                id: 'gOzPxe',
                components: {
                  0: (0, p.jsx)(l.rU, { href: d(r, n), sx: { textDecoration: 'underline' } }),
                },
              }),
            }),
            children: (0, p.jsx)(s.Z, {
              sx: { fontSize: '20px', color: 'error.main', ml: 2 },
              children: (0, p.jsx)(o.Z, {}),
            }),
          });
        };
    },
    5741: function (e, r, n) {
      n.d(r, {
        X: function () {
          return c;
        },
      });
      var t = n(57499),
        o = n(38577),
        i = n(49212),
        s = n(85893),
        c = function () {
          return (0, s.jsx)(i.G, {
            wrapperProps: { ml: 2 },
            color: 'warning.main',
            iconSize: 20,
            icon: (0, s.jsx)('image', { href: '/icons/other/kernel.svg', width: 25, height: 25 }),
            children: (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(t.cC, { id: 'v+Fu0z' }),
                (0, s.jsx)('br', {}),
                (0, s.jsx)('br', {}),
                (0, s.jsx)(t.cC, { id: 'My0ZGV' }),
                ' ',
                (0, s.jsx)(o.rU, {
                  href: 'https://kerneldao.gitbook.io/kernel/getting-started/editor/kernel-points-guide ',
                  sx: { textDecoration: 'underline' },
                  variant: 'caption',
                  color: 'text.secondary',
                  children: 'here',
                }),
                '.',
              ],
            }),
          });
        };
    },
    21134: function (e, r, n) {
      n.d(r, {
        H: function () {
          return l;
        },
      });
      var t = n(58771),
        o = n(80822),
        i = n(53219),
        s = n(2127),
        c = n(69110),
        a = n(85893),
        l = function (e) {
          var r = e.discussionLink;
          return (0, a.jsx)(s.a, {
            tooltipContent: (0, a.jsx)(o.Z, { children: (0, a.jsx)(c.k, { discussionLink: r }) }),
            children: (0, a.jsx)(i.Z, {
              sx: { fontSize: '20px', color: 'error.main', ml: 2 },
              children: (0, a.jsx)(t.Z, {}),
            }),
          });
        };
    },
    40007: function (e, r, n) {
      n.d(r, {
        n: function () {
          return d;
        },
        o: function () {
          return p;
        },
      });
      var t = n(57499),
        o = n(58771),
        i = n(34386),
        s = n(26447),
        c = n(53219),
        a = n(2127),
        l = n(85893),
        p = function () {
          return (0, l.jsx)(t.cC, { id: 'D9BLRG' });
        },
        d = function () {
          return (0, l.jsx)(i.Z, {
            arrow: !0,
            placement: 'top',
            PopperComponent: a.E,
            title: (0, l.jsx)(s.Z, {
              sx: { py: 4, px: 6 },
              spacing: 1,
              children: (0, l.jsx)(p, {}),
            }),
            children: (0, l.jsx)(c.Z, {
              sx: { fontSize: '20px', color: 'error.main', ml: 2 },
              children: (0, l.jsx)(o.Z, {}),
            }),
          });
        };
    },
    61777: function (e, r, n) {
      n.d(r, {
        F: function () {
          return p;
        },
      });
      var t = n(57499),
        o = n(58771),
        i = n(80822),
        s = n(53219),
        c = n(2127),
        a = n(38577),
        l = n(85893),
        p = function () {
          return (0, l.jsx)(c.a, {
            tooltipContent: (0, l.jsx)(i.Z, {
              children: (0, l.jsx)(t.cC, {
                id: 'GWswcZ',
                components: {
                  0: (0, l.jsx)(a.rU, {
                    href: 'https://medium.com/renproject/moving-on-from-alameda-da62a823ce93',
                    sx: { textDecoration: 'underline' },
                  }),
                },
              }),
            }),
            children: (0, l.jsx)(s.Z, {
              sx: { fontSize: '20px', color: 'error.main', ml: 2 },
              children: (0, l.jsx)(o.Z, {}),
            }),
          });
        };
    },
    11106: function (e, r, n) {
      n.d(r, {
        d: function () {
          return c;
        },
      });
      var t = n(57499),
        o = n(38577),
        i = n(49212),
        s = n(85893),
        c = function () {
          return (0, s.jsx)(i.G, {
            wrapperProps: { ml: 2 },
            color: 'warning.main',
            iconSize: 20,
            icon: (0, s.jsx)('image', { href: '/icons/other/spark.svg', width: 25, height: 25 }),
            children: (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(t.cC, { id: 'PjU6bu' }),
                (0, s.jsx)('br', {}),
                (0, s.jsx)('br', {}),
                (0, s.jsx)(t.cC, { id: 'UYb8CM' }),
                ' ',
                (0, s.jsx)(o.rU, {
                  href: 'https://forum.sky.money/t/spark-proposal-for-integrations-into-aave/25005',
                  sx: { textDecoration: 'underline' },
                  variant: 'caption',
                  color: 'text.secondary',
                  children: 'here',
                }),
                ' ',
                (0, s.jsx)(t.cC, { id: 'kz3wtK' }),
                ' ',
                (0, s.jsx)(o.rU, {
                  href: 'https://docs.spark.fi/rewards/spk-token#what-is-the-spk-pre-farming-airdrop',
                  sx: { textDecoration: 'underline' },
                  variant: 'caption',
                  color: 'text.secondary',
                  children: 'here',
                }),
                '.',
              ],
            }),
          });
        };
    },
    17337: function (e, r, n) {
      n.d(r, {
        n: function () {
          return c;
        },
      });
      var t = n(58771),
        o = n(49212),
        i = n(69671),
        s = n(85893),
        c = function () {
          return (0, s.jsx)(o.G, {
            wrapperProps: { ml: 2 },
            color: 'warning.main',
            iconSize: 20,
            icon: (0, s.jsx)(t.Z, {}),
            children: (0, s.jsx)(i.O, {}),
          });
        };
    },
    41648: function (e, r, n) {
      n.d(r, {
        S: function () {
          return c;
        },
      });
      var t = n(57499),
        o = n(38577),
        i = n(49212),
        s = n(85893),
        c = function () {
          return (0, s.jsx)(i.G, {
            wrapperProps: { ml: 2 },
            color: 'warning.main',
            iconSize: 20,
            icon: (0, s.jsx)('image', {
              href: '/icons/other/superfest.svg',
              width: 25,
              height: 25,
            }),
            children: (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(t.cC, { id: 'aqX1Yp' }),
                ' ',
                (0, s.jsx)(o.rU, {
                  href: 'https://superfest.optimism.io',
                  sx: { textDecoration: 'underline' },
                  variant: 'caption',
                  color: 'text.secondary',
                  children: 'Learn more',
                }),
                ' ',
                (0, s.jsx)(t.cC, { id: 'gDd2gk' }),
                (0, s.jsx)('br', {}),
                (0, s.jsx)('br', {}),
                (0, s.jsx)(t.cC, { id: 'HKDsQN' }),
                ' ',
                (0, s.jsx)(o.rU, {
                  href: 'https://jumper.exchange/superfest',
                  sx: { textDecoration: 'underline' },
                  variant: 'caption',
                  color: 'text.secondary',
                  children: 'jumper.exchange',
                }),
              ],
            }),
          });
        };
    },
    77571: function (e, r, n) {
      n.d(r, {
        B: function () {
          return p;
        },
      });
      var t = n(59499),
        o = n(36864),
        i = n(57499),
        s = n(49212),
        c = n(85893);
      function a(e, r) {
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
            ? a(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var p = function (e) {
        var r = (0, o.Z)({}, e);
        return (0, c.jsx)(
          s.G,
          l(
            l({}, r),
            {},
            { children: (0, c.jsx)(i.cC, { id: 'quYPUU', components: { 0: (0, c.jsx)('b', {}) } }) }
          )
        );
      };
    },
    64311: function (e, r, n) {
      n.d(r, {
        Ch: function () {
          return m;
        },
        a9: function () {
          return v;
        },
        r$: function () {
          return b;
        },
      });
      var t = n(59499),
        o = n(57499),
        i = n(38264),
        s = n(53219),
        c = n(2734),
        a = n(80822),
        l = n(15861),
        p = n(23795),
        d = n(2127),
        x = n(85893);
      function u(e, r) {
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
      function f(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? u(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var j = {
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
          return (0, x.jsx)(s.Z, {
            sx: { ml: '3px', color: r || 'text.muted', fontSize: '14px' },
            children: (0, x.jsx)(i.Z, {}),
          });
        },
        m = function (e) {
          var r = e.typographyProps,
            n = (0, c.Z)(),
            t = f(
              {
                border: '1px solid '.concat(n.palette.warning.main),
                color: n.palette.warning.main,
              },
              j
            );
          return (0, x.jsx)(d.a, {
            withoutHover: !0,
            tooltipContent: (0, x.jsx)(y, { content: (0, x.jsx)(o.cC, { id: 'bXr0ee' }) }),
            children: (0, x.jsxs)(a.Z, {
              sx: t,
              children: [
                (0, x.jsx)(
                  l.Z,
                  f(
                    f(
                      {
                        variant: 'secondary12',
                        sx: { lineHeight: '0.75rem' },
                        color: n.palette.warning.main,
                      },
                      r
                    ),
                    {},
                    { children: (0, x.jsx)(o.cC, { id: 'KYAjf3' }) }
                  )
                ),
                (0, x.jsx)(h, { color: n.palette.warning.main }),
              ],
            }),
          });
        },
        b = function () {
          return (0, x.jsx)(d.a, {
            tooltipContent: (0, x.jsx)(y, { content: (0, x.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, x.jsxs)(a.Z, {
              sx: j,
              children: [
                (0, x.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, x.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, x.jsx)(h, {}),
              ],
            }),
          });
        },
        v = function () {
          return (0, x.jsx)(d.a, {
            tooltipContent: (0, x.jsx)(y, { content: (0, x.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, x.jsxs)(a.Z, {
              sx: j,
              children: [
                (0, x.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, x.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, x.jsx)(h, {}),
              ],
            }),
          });
        },
        y = function (e) {
          var r = e.content;
          return (0, x.jsxs)(a.Z, {
            children: [
              (0, x.jsx)(a.Z, { sx: { mb: 4 }, children: r }),
              (0, x.jsx)(l.Z, {
                variant: 'subheader2',
                color: 'text.secondary',
                children: (0, x.jsx)(o.cC, {
                  id: 'lfEjIE',
                  components: {
                    0: (0, x.jsx)(p.Z, {
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
    88328: function (e, r, n) {
      n.d(r, {
        M: function () {
          return a;
        },
      });
      var t = n(15861),
        o = n(80822),
        i = n(3062),
        s = n(65361),
        c = n(85893),
        a = function (e) {
          var r = e.sortName,
            n = e.sortDesc,
            a = e.sortKey,
            l = e.source,
            p = e.setSortName,
            d = e.setSortDesc,
            x = e.onClick,
            u = e.children,
            f = (0, i.Y)(function (e) {
              return e.trackEvent;
            });
          return (0, c.jsxs)(t.Z, {
            component: 'div',
            variant: 'subheader2',
            color: 'text.secondary',
            noWrap: !0,
            onClick: function () {
              return x
                ? x()
                : !!a &&
                    ((e = a),
                    f(s.uZ.SORT, { sort_by: e, tile: l }),
                    d && d(!1),
                    p && p(e),
                    void (r === e && d && d(!n)));
              var e;
            },
            sx: {
              cursor: x || a ? 'pointer' : 'default',
              display: 'inline-flex',
              alignItems: 'center',
            },
            children: [
              u,
              !!a &&
                (0, c.jsxs)(o.Z, {
                  sx: { display: 'inline-flex', flexDirection: 'column', ml: 1 },
                  children: [
                    (0, c.jsx)(o.Z, {
                      component: 'span',
                      sx: function (e) {
                        return {
                          width: 0,
                          height: 0,
                          borderStyle: 'solid',
                          borderWidth: '0 4px 4px 4px',
                          borderColor: 'transparent transparent '.concat(
                            r === a && n ? e.palette.text.secondary : e.palette.divider,
                            ' transparent'
                          ),
                          mb: 0.5,
                        };
                      },
                    }),
                    (0, c.jsx)(o.Z, {
                      component: 'span',
                      sx: function (e) {
                        return {
                          width: 0,
                          height: 0,
                          borderStyle: 'solid',
                          borderWidth: '4px 4px 0 4px',
                          borderColor: ''.concat(
                            r !== a || n ? e.palette.divider : e.palette.text.secondary,
                            ' transparent transparent transparent'
                          ),
                        };
                      },
                    }),
                  ],
                }),
            ],
          });
        };
    },
    745: function (e, r, n) {
      n.d(r, {
        u: function () {
          return p;
        },
      });
      var t = n(59499),
        o = n(4730),
        i = n(80822),
        s = n(85893),
        c = ['px', 'children'];
      function a(e, r) {
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
            ? a(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var p = function (e) {
        var r = e.px,
          n = void 0 === r ? 4 : r,
          t = e.children,
          a = (0, o.Z)(e, c);
        return (0, s.jsx)(
          i.Z,
          l(
            l({}, a),
            {},
            {
              sx: l(
                {
                  display: 'flex',
                  alignItems: 'flex-end',
                  px: n,
                  pt: 4,
                  pb: 1,
                  position: 'sticky',
                  top: 0,
                  zIndex: 100,
                  bgcolor: 'background.paper',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                },
                a.sx
              ),
              children: t,
            }
          )
        );
      };
    },
    6308: function (e, r, n) {
      n.d(r, {
        J: function () {
          return a;
        },
      });
      var t = n(59499),
        o = n(15861),
        i = (n(67294), n(85893));
      function s(e, r) {
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
      function c(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? s(Object(n), !0).forEach(function (r) {
                (0, t.Z)(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
                });
        }
        return e;
      }
      var a = function (e) {
        return (0, i.jsx)(o.Z, c(c({}, e), {}, { children: '\u2014' }));
      };
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
        s = n(15861),
        c = n(85893),
        a = ['caption', 'children', 'captionVariant', 'captionColor', 'align'];
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
      function p(e) {
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
          x = e.align,
          u = void 0 === x ? 'center' : x,
          f = (0, o.Z)(e, a);
        return (0, c.jsxs)(
          i.Z,
          p(
            p({}, f),
            {},
            {
              sx: p({ display: 'flex', alignItems: u, justifyContent: 'space-between' }, f.sx),
              children: [
                r &&
                  (0, c.jsx)(s.Z, {
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
    90327: function (e, r, n) {
      n.d(r, {
        o: function () {
          return Z;
        },
      });
      var t = n(43933),
        o = n(5741),
        i = n(21134),
        s = n(40007),
        c = n(11106),
        a = n(17337),
        l = n(41648),
        p = n(69110),
        d = n(96398),
        x = n(88529),
        u = n(61777),
        f = n(80822),
        j = n(67720),
        h = n(88078),
        m = n(15861),
        b = n(64311),
        v = n(89771),
        y = n(38577),
        g = n(45640),
        O = n(85893),
        w = function (e) {
          var r = e.children,
            n = e.warningComponent,
            t = e.symbol,
            o = e.iconSymbol,
            i = e.name,
            s = e.underlyingAsset,
            c = e.loading,
            a = e.currentMarket,
            l = e.showSupplyCapTooltips,
            p = void 0 !== l && l,
            d = e.showBorrowCapTooltips,
            x = void 0 !== d && d,
            u = e.showDebtCeilingTooltips,
            w = void 0 !== u && u,
            Z = e.isIsolated,
            C = (0, v.ov)(),
            P = C.supplyCap,
            k = C.borrowCap,
            D = C.debtCeiling;
          return (0, O.jsxs)(f.Z, {
            children: [
              (0, O.jsx)(j.Z, {}),
              (0, O.jsxs)(f.Z, {
                sx: { px: 4, pt: 4, pb: 6 },
                children: [
                  (0, O.jsxs)(f.Z, {
                    sx: { mb: 4, display: 'flex', alignItems: 'center' },
                    children: [
                      c
                        ? (0, O.jsxs)(f.Z, {
                            sx: { display: 'inline-flex', alignItems: 'center' },
                            children: [
                              (0, O.jsx)(h.Z, { variant: 'circular', width: 40, height: 40 }),
                              (0, O.jsx)(f.Z, {
                                sx: { ml: 2 },
                                children: (0, O.jsx)(h.Z, { width: 100, height: 24 }),
                              }),
                            ],
                          })
                        : t &&
                          s &&
                          i &&
                          a &&
                          o &&
                          (0, O.jsxs)(y.rU, {
                            href: y.Z6.reserveOverview(s, a),
                            sx: { display: 'inline-flex', alignItems: 'center' },
                            children: [
                              (0, O.jsx)(g.T1, { symbol: o, sx: { fontSize: '40px' } }),
                              (0, O.jsxs)(f.Z, {
                                sx: { ml: 2 },
                                children: [
                                  (0, O.jsx)(m.Z, { variant: 'h4', children: i }),
                                  (0, O.jsxs)(f.Z, {
                                    display: 'flex',
                                    alignItems: 'center',
                                    children: [
                                      (0, O.jsx)(m.Z, {
                                        variant: 'subheader2',
                                        color: 'text.muted',
                                        children: t,
                                      }),
                                      Z &&
                                        (0, O.jsx)('span', {
                                          style: { marginLeft: '8px' },
                                          children: (0, O.jsx)(b.Ch, {}),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              p && P.displayMaxedTooltip({ supplyCap: P }),
                              x && k.displayMaxedTooltip({ borrowCap: k }),
                              w && D.displayMaxedTooltip({ debtCeiling: D }),
                            ],
                          }),
                      n,
                    ],
                  }),
                  r,
                ],
              }),
            ],
          });
        },
        Z = function (e) {
          var r = e.symbol,
            n = e.iconSymbol,
            f = e.name,
            j = e.children,
            h = e.underlyingAsset,
            m = e.loading,
            b = e.currentMarket,
            v = e.frozen,
            y = e.paused,
            g = e.borrowEnabled,
            Z = void 0 === g || g,
            C = e.showSupplyCapTooltips,
            P = void 0 !== C && C,
            k = e.showBorrowCapTooltips,
            D = void 0 !== k && k,
            S = e.showDebtCeilingTooltips,
            I = void 0 !== S && S,
            E = e.isIsolated,
            U = void 0 !== E && E,
            M = e.showExternalIncentivesTooltips,
            z = void 0 === M ? { superFestRewards: !1, spkAirdrop: !1, kernelPoints: !1 } : M,
            A = function () {
              var e,
                n = v && 'renFIL' !== r,
                f = v && 'renFIL' === r,
                j = !v && 'AMPL' === r,
                h = 'stETH' == r,
                m = b && r ? (null === (e = p.U[b]) || void 0 === e ? void 0 : e[r]) : '',
                g = !v && !Z;
              return (0, O.jsxs)(O.Fragment, {
                children: [
                  y && (0, O.jsx)(s.n, {}),
                  z.superFestRewards && (0, O.jsx)(l.S, {}),
                  z.spkAirdrop && (0, O.jsx)(c.d, {}),
                  z.kernelPoints && (0, O.jsx)(o.X, {}),
                  n && (0, O.jsx)(x.Q, { symbol: r, currentMarket: b }),
                  f && (0, O.jsx)(u.F, {}),
                  j && (0, O.jsx)(d.$, {}),
                  h && (0, O.jsx)(a.n, {}),
                  m && (0, O.jsx)(i.H, { discussionLink: m }),
                  g && r && b && (0, O.jsx)(t.w, { symbol: r, currentMarket: b }),
                ],
              });
            };
          return (0, O.jsx)(w, {
            isIsolated: U,
            symbol: r,
            iconSymbol: n,
            name: f,
            underlyingAsset: h,
            warningComponent: (0, O.jsx)(A, {}),
            loading: m,
            currentMarket: b,
            showSupplyCapTooltips: P,
            showBorrowCapTooltips: D,
            showDebtCeilingTooltips: I,
            children: j,
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
