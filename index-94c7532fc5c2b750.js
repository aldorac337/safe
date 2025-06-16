(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    76920: function (e, t, r) {
      'use strict';
      var n,
        o,
        i = r(67294);
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          s.apply(null, arguments)
        );
      }
      t.Z = function (e) {
        return i.createElement(
          'svg',
          s({ viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
          n ||
            (n = i.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M6.78.628a.6.6 0 0 1 .42.572v3h2.4a.6.6 0 0 1 .492.944l-4.2 6A.6.6 0 0 1 4.8 10.8v-3H2.4a.6.6 0 0 1-.492-.944l4.2-6A.6.6 0 0 1 6.78.628Z',
              fill: 'url(#lightningBoltGradient_svg__a)',
            })),
          o ||
            (o = i.createElement(
              'defs',
              null,
              i.createElement(
                'linearGradient',
                {
                  id: 'lightningBoltGradient_svg__a',
                  x1: 10.2,
                  y1: 4.672,
                  x2: 1.345,
                  y2: 7.335,
                  gradientUnits: 'userSpaceOnUse',
                },
                i.createElement('stop', { stopColor: '#B6509E' }),
                i.createElement('stop', { offset: 1, stopColor: '#2EBAC6' })
              )
            ))
        );
      };
    },
    21048: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return Hr;
          },
        });
      var n = r(17674),
        o = r(57499),
        i = r(80822),
        s = r(15861),
        a = r(67294),
        l = r(17231),
        c = r(15925),
        d = r(3062),
        u = r(73886),
        p = r(53416),
        x = r(64283),
        b = r(55986),
        h = r(72005),
        m = r(75331),
        v = r(2734),
        y = r(61730),
        j = r(69417),
        f = r(11163),
        g = r(38577),
        w = r(65361),
        O = r(59499),
        C = r(80854),
        k = r(1279),
        D = r(82403),
        P = r(77571),
        Z = r(24957),
        S = r(88328),
        B = r(745),
        A = r(35783),
        T = r(89771),
        I = r(86121),
        E = r(69951),
        U = r(73592),
        M = r(46817),
        R = r(1924),
        N = r(60377),
        F = 130,
        L = 160,
        Y = 130,
        V = function (e, t, r, n, o) {
          return e ? W(t, r, n, o || !1) : _(t, r, n, o || !1);
        },
        W = function (e, t, r, n) {
          return 'symbol' === e
            ? z(!0, t, r)
            : 'usageAsCollateralEnabledOnUser' === e || 'debt' === e
              ? r.sort(function (t, r) {
                  return Number(t[e]) - Number(r[e]);
                })
              : (n &&
                  r.sort(function (e, t) {
                    return (
                      Number(t.reserve.variableBorrowAPY) - Number(e.reserve.variableBorrowAPY)
                    );
                  }),
                r.sort(function (t, r) {
                  return t[e] - r[e];
                }));
        },
        _ = function (e, t, r, n) {
          return 'symbol' === e
            ? z(!1, t, r)
            : 'usageAsCollateralEnabledOnUser' === e || 'debt' === e
              ? r.sort(function (t, r) {
                  return Number(r[e]) - Number(t[e]);
                })
              : (n &&
                  r.sort(function (e, t) {
                    return (
                      Number(e.reserve.variableBorrowAPY) - Number(t.reserve.variableBorrowAPY)
                    );
                  }),
                r.sort(function (t, r) {
                  return r[e] - t[e];
                }));
        },
        z = function (e, t, r) {
          return e
            ? 'position' === t
              ? r.sort(function (e, t) {
                  return e.reserve.symbol.toUpperCase() < t.reserve.symbol.toUpperCase() ? -1 : 1;
                })
              : r.sort(function (e, t) {
                  return e.symbol.toUpperCase() < t.symbol.toUpperCase() ? -1 : 1;
                })
            : 'position' === t
              ? r.sort(function (e, t) {
                  return t.reserve.symbol.toUpperCase() < e.reserve.symbol.toUpperCase() ? -1 : 1;
                })
              : r.sort(function (e, t) {
                  return t.symbol.toUpperCase() < e.symbol.toUpperCase() ? -1 : 1;
                });
        },
        H = r(55875),
        K = r(85893),
        X = function (e) {
          var t = e.children;
          e.isColumnHeader;
          return (0, K.jsx)(i.Z, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              maxWidth: L,
              minWidth: L,
              flex: 1,
              '.MuiButton-root': { ml: '6px' },
            },
            children: t,
          });
        },
        q = function (e) {
          var t = e.head;
          return (0, K.jsxs)(B.u, {
            children: [
              t.map(function (e, t) {
                return (0, K.jsx)(
                  Z.h,
                  {
                    overFlow: 'visible',
                    isRow: 0 === t,
                    children: (0, K.jsx)(S.M, { children: e }),
                  },
                  t
                );
              }),
              (0, K.jsx)(X, {}),
            ],
          });
        },
        G = r(88078),
        Q = r(25135),
        J = function (e) {
          var t = e.columns;
          return (0, K.jsxs)(Q.H, {
            children: [
              (0, K.jsx)(Z.h, {
                maxWidth: 160,
                isRow: !0,
                children: (0, K.jsxs)(i.Z, {
                  sx: { display: 'inline-flex', alignItems: 'center' },
                  children: [
                    (0, K.jsx)(G.Z, { variant: 'circular', width: 32, height: 32 }),
                    (0, K.jsx)(G.Z, { sx: { ml: 3 }, width: 39, height: 20 }),
                  ],
                }),
              }),
              Array.from({ length: t - 1 }).map(function (e, t) {
                return (0, K.jsx)(Z.h, { children: (0, K.jsx)(G.Z, { width: 70, height: 20 }) }, t);
              }),
              (0, K.jsxs)(X, {
                children: [
                  (0, K.jsx)(G.Z, { height: 38, width: 74 }),
                  (0, K.jsx)(G.Z, { height: 38, width: 74, sx: { ml: '6px' } }),
                ],
              }),
            ],
          });
        },
        $ = r(20986),
        ee = r(90327),
        te = function () {
          return (0, K.jsxs)(ee.o, {
            loading: !0,
            children: [
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(G.Z, { width: 100, height: 20 }),
                align: 'flex-start',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(G.Z, { width: 70, height: 20 }),
              }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(G.Z, { width: 100, height: 20 }),
                align: 'flex-start',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(G.Z, { width: 70, height: 20 }),
              }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(G.Z, { width: 100, height: 20 }),
                align: 'flex-start',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(G.Z, { width: 70, height: 20 }),
              }),
              (0, K.jsxs)(i.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 5,
                },
                children: [
                  (0, K.jsx)(G.Z, { width: '100%', height: 36, sx: { mr: 1.5 } }),
                  (0, K.jsx)(G.Z, { width: '100%', height: 36 }),
                ],
              }),
            ],
          });
        },
        re = function (e) {
          var t = e.title,
            r = e.withTopMargin,
            n = e.head,
            o = (0, v.Z)(),
            i = (0, y.Z)(o.breakpoints.down('xsm'));
          return (0, K.jsx)(R.l, {
            titleComponent: (0, K.jsx)(s.Z, {
              component: 'div',
              variant: 'h3',
              sx: { mr: 4 },
              children: t,
            }),
            withTopMargin: r,
            children: (0, K.jsxs)(K.Fragment, {
              children: [
                !i && (0, K.jsx)(q, { head: n }),
                i
                  ? (0, K.jsx)(te, {})
                  : (0, K.jsxs)(K.Fragment, {
                      children: [
                        (0, K.jsx)(J, { columns: n.length }),
                        (0, K.jsx)(J, { columns: n.length }),
                      ],
                    }),
              ],
            }),
          });
        },
        ne = r(44949),
        oe = r(84314),
        ie = r(32867),
        se = r(58771),
        ae = r(53219),
        le = r(2127),
        ce = function (e) {
          var t = e.availableValue,
            r = e.isUSD,
            n = e.capType,
            i = r ? ''.concat(t, '$') : t,
            s = void 0;
          return (
            t > 0
              ? (s =
                  n === U.R.supplyCap
                    ? (0, K.jsx)(o.cC, { id: '5Ncc6j', values: { messageValue: i } })
                    : (0, K.jsx)(o.cC, { id: '9Rw96f', values: { messageValue: i } }))
              : t <= 0 &&
                (s =
                  n === U.R.supplyCap
                    ? (0, K.jsx)(o.cC, { id: '9c6vDV' })
                    : (0, K.jsx)(o.cC, { id: 'p2Z2Qi' })),
            (0, K.jsx)(le.a, {
              tooltipContent: (0, K.jsx)(K.Fragment, { children: s || '' }),
              children: (0, K.jsx)(ae.Z, {
                sx: { fontSize: '14px', color: 'error.main' },
                children: (0, K.jsx)(se.Z, {}),
              }),
            })
          );
        },
        de = function (e) {
          var t = e.capType,
            r = e.capAmount,
            n = e.totalAmount,
            a = e.isUSD,
            l = e.withoutText,
            c = Number(r);
          if (c <= 0) return null;
          var d = (0, k.hE)(n).dividedBy(c).toNumber(),
            u = (0, k.hE)(c).minus(n).multipliedBy('0.995').toNumber(),
            p =
              t === U.R.supplyCap
                ? (0, K.jsx)(o.cC, { id: 'om/XHs' })
                : (0, K.jsx)(o.cC, { id: 'smJNwH' });
          return d < 0.99
            ? null
            : (0, K.jsxs)(i.Z, {
                sx: { display: 'flex', alignItems: 'center', ml: l ? 1 : 0 },
                children: [
                  (0, K.jsx)(ce, { availableValue: u, isUSD: a, capType: t }),
                  !l &&
                    (0, K.jsxs)(K.Fragment, {
                      children: [
                        (0, K.jsx)(s.Z, {
                          variant: 'tooltip',
                          color: 'text.secondary',
                          children: p,
                        }),
                        (0, K.jsx)(ie.B, {
                          value: u >= 0 ? u : 0,
                          compact: !0,
                          symbol: a ? 'USD' : void 0,
                          variant: 'tooltip',
                        }),
                      ],
                    }),
                ],
              });
        },
        ue = r(38063),
        pe = function (e) {
          var t = e.value,
            r = e.market,
            n = e.protocolAction,
            o = e.address,
            s = e.incentives,
            a = e.symbol,
            l = e.tooltip,
            c = e.children;
          return (0, K.jsxs)(Z.h, {
            children: [
              (0, K.jsxs)(i.Z, {
                sx: { display: 'flex column' },
                children: [
                  (0, K.jsx)(ue.J, {
                    value: t,
                    incentives: s,
                    address: o,
                    symbol: a,
                    market: r,
                    protocolAction: n,
                  }),
                  l,
                ],
              }),
              c,
            ],
          });
        },
        xe = r(4730),
        be = r(34386),
        he = r(43933),
        me = r(5741),
        ve = r(21134),
        ye = r(40007),
        je = r(11106),
        fe = r(17337),
        ge = r(41648),
        we = r(69110),
        Oe = r(96398),
        Ce = r(88529),
        ke = r(61777),
        De = r(45640),
        Pe = [
          'symbol',
          'iconSymbol',
          'children',
          'name',
          'detailsAddress',
          'currentMarket',
          'frozen',
          'paused',
          'borrowEnabled',
          'showSupplyCapTooltips',
          'showBorrowCapTooltips',
          'showDebtCeilingTooltips',
          'showExternalIncentivesTooltips',
        ];
      function Ze(e, t) {
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
      function Se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ze(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ze(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Be = function (e) {
          var t,
            r = e.symbol,
            n = e.iconSymbol,
            o = e.children,
            i = e.name,
            a = e.detailsAddress,
            l = e.currentMarket,
            c = e.frozen,
            u = e.paused,
            p = e.borrowEnabled,
            x = void 0 === p || p,
            b = e.showSupplyCapTooltips,
            h = void 0 !== b && b,
            m = e.showBorrowCapTooltips,
            v = void 0 !== m && m,
            y = e.showDebtCeilingTooltips,
            j = void 0 !== y && y,
            f = e.showExternalIncentivesTooltips,
            O = void 0 === f ? { superFestRewards: !1, spkAirdrop: !1, kernelPoints: !1 } : f,
            C = (0, xe.Z)(e, Pe),
            k = (0, T.ov)(),
            D = k.supplyCap,
            P = k.borrowCap,
            S = k.debtCeiling,
            B = c && 'renFIL' !== r && 'BUSD' !== r,
            A = c && 'renFIL' === r,
            I = !c && 'AMPL' === r,
            E = 'stETH' == r,
            U = null === (t = we.U[l]) || void 0 === t ? void 0 : t[r],
            M = !c && !x,
            R = (0, d.Y)(function (e) {
              return e.trackEvent;
            });
          return (0, K.jsxs)(
            Q.H,
            Se(
              Se({}, C),
              {},
              {
                children: [
                  (0, K.jsxs)(Z.h, {
                    maxWidth: Y,
                    isRow: !0,
                    children: [
                      (0, K.jsxs)(g.rU, {
                        onClick: function () {
                          return R(w.h1.DETAILS_NAVIGATION, {
                            type: 'Row click',
                            market: l,
                            assetName: i,
                            asset: a,
                          });
                        },
                        href: g.Z6.reserveOverview(a, l),
                        noWrap: !0,
                        sx: { display: 'inline-flex', alignItems: 'center' },
                        children: [
                          (0, K.jsx)(De.T1, { symbol: n, fontSize: 'large' }),
                          (0, K.jsx)(be.Z, {
                            title: ''.concat(i, ' (').concat(r, ')'),
                            arrow: !0,
                            placement: 'top',
                            children: (0, K.jsx)(s.Z, {
                              variant: 'subheader1',
                              sx: { ml: 3 },
                              noWrap: !0,
                              'data-cy': 'assetName',
                              children: r,
                            }),
                          }),
                        ],
                      }),
                      u && (0, K.jsx)(ye.n, {}),
                      O.superFestRewards && (0, K.jsx)(ge.S, {}),
                      O.spkAirdrop && (0, K.jsx)(je.d, {}),
                      O.kernelPoints && (0, K.jsx)(me.X, {}),
                      B && (0, K.jsx)(Ce.Q, { symbol: r, currentMarket: l }),
                      A && (0, K.jsx)(ke.F, {}),
                      I && (0, K.jsx)(Oe.$, {}),
                      E && (0, K.jsx)(fe.n, {}),
                      U && (0, K.jsx)(ve.H, { discussionLink: U }),
                      M && (0, K.jsx)(he.w, { symbol: r, currentMarket: l }),
                      h && D.displayMaxedTooltip({ supplyCap: D }),
                      v && P.displayMaxedTooltip({ borrowCap: P }),
                      j && S.displayMaxedTooltip({ debtCeiling: S }),
                    ],
                  }),
                  o,
                ],
              }
            )
          );
        },
        Ae = r(41129),
        Te = function (e) {
          var t = e.symbol,
            r = e.iconSymbol,
            i = e.name,
            s = e.availableBorrows,
            a = e.availableBorrowsInUSD,
            l = e.borrowCap,
            c = e.totalBorrows,
            p = e.variableBorrowRate,
            x = e.vIncentivesData,
            b = e.variableDebtTokenAddress,
            h = e.underlyingAsset,
            v = e.isFreezed,
            y = (0, ne.vR)().openBorrow,
            f = v || Number(s) <= 0,
            O = (0, d.Y)(
              (0, u.N)(function (e) {
                return [e.trackEvent, e.currentMarket];
              })
            ),
            C = (0, n.Z)(O, 2),
            k = C[0],
            D = C[1];
          return (0, K.jsxs)(Be, {
            symbol: t,
            iconSymbol: r,
            name: i,
            detailsAddress: h,
            'data-cy': 'dashboardBorrowListItem_'.concat(t.toUpperCase()),
            currentMarket: D,
            showExternalIncentivesTooltips: (0, oe.f8)(t, D, m.UQ.borrow),
            children: [
              (0, K.jsx)(Ae.k, {
                symbol: t,
                value: Number(s),
                subValue: Number(a),
                disabled: 0 === Number(s),
                withTooltip: !1,
                capsComponent: (0, K.jsx)(de, {
                  capType: U.R.borrowCap,
                  capAmount: l,
                  totalAmount: c,
                  withoutText: !0,
                }),
              }),
              (0, K.jsx)(pe, {
                value: Number(p),
                market: D,
                protocolAction: m.UQ.borrow,
                address: b,
                incentives: x,
                symbol: t,
              }),
              (0, K.jsxs)(X, {
                children: [
                  (0, K.jsx)(j.Z, {
                    disabled: f,
                    variant: 'contained',
                    onClick: function () {
                      y(h, D, i, 'dashboard');
                    },
                    children: (0, K.jsx)(o.cC, { id: 'T6uYU2' }),
                  }),
                  (0, K.jsx)(j.Z, {
                    variant: 'outlined',
                    component: g.rU,
                    href: g.Z6.reserveOverview(h, D),
                    onClick: function () {
                      k(w.h1.DETAILS_NAVIGATION, {
                        type: 'Button',
                        market: D,
                        assetName: i,
                        asset: h,
                      });
                    },
                    children: (0, K.jsx)(o.cC, { id: 'URmyfc' }),
                  }),
                ],
              }),
            ],
          });
        },
        Ie = function (e) {
          var t = e.title,
            r = e.capsComponent,
            n = e.value,
            o = e.subValue,
            s = e.disabled;
          return (0, K.jsx)($.X, {
            caption: t,
            captionVariant: 'description',
            align: 'flex-start',
            mb: 2,
            children: (0, K.jsxs)(i.Z, {
              sx: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
              children: [
                (0, K.jsxs)(i.Z, {
                  sx: { display: 'flex', alignItems: 'center', mb: 0.5 },
                  children: [
                    (0, K.jsx)(ie.B, {
                      value: n,
                      variant: 'secondary14',
                      color: s ? 'text.disabled' : 'text.primary',
                    }),
                    r,
                  ],
                }),
                !s &&
                  (0, K.jsx)(ie.B, {
                    value: o,
                    variant: 'secondary12',
                    color: 'text.secondary',
                    symbol: 'USD',
                    mb: 0.5,
                  }),
              ],
            }),
          });
        },
        Ee = function (e) {
          var t = e.symbol,
            r = e.iconSymbol,
            n = e.name,
            s = e.availableBorrows,
            a = e.availableBorrowsInUSD,
            l = e.borrowCap,
            c = e.totalBorrows,
            u = e.variableBorrowRate,
            p = e.vIncentivesData,
            x = e.variableDebtTokenAddress,
            b = e.underlyingAsset,
            h = e.isFreezed,
            v = (0, ne.vR)().openBorrow,
            y = (0, d.Y)(function (e) {
              return e.currentMarket;
            }),
            f = h || Number(s) <= 0;
          return (0, K.jsxs)(ee.o, {
            symbol: t,
            iconSymbol: r,
            name: n,
            underlyingAsset: b,
            currentMarket: y,
            showExternalIncentivesTooltips: (0, oe.f8)(t, y, m.UQ.borrow),
            children: [
              (0, K.jsx)(Ie, {
                title: (0, K.jsx)(o.cC, { id: 'smJNwH' }),
                value: Number(s),
                subValue: Number(a),
                disabled: 0 === Number(s),
                capsComponent: (0, K.jsx)(de, {
                  capType: U.R.borrowCap,
                  capAmount: l,
                  totalAmount: c,
                  withoutText: !0,
                }),
              }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(
                  P.B,
                  { text: (0, K.jsx)(o.cC, { id: 'MeCCA+' }), variant: 'description' },
                  'APY_dash_mob_variable_ type'
                ),
                align: 'flex-start',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(ue.J, {
                  value: Number(u),
                  incentives: p,
                  address: x,
                  symbol: t,
                  variant: 'secondary14',
                  market: y,
                  protocolAction: m.UQ.borrow,
                }),
              }),
              (0, K.jsxs)(i.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 5,
                },
                children: [
                  (0, K.jsx)(j.Z, {
                    disabled: f,
                    variant: 'contained',
                    onClick: function () {
                      return v(b, y, n, 'dashboard');
                    },
                    sx: { mr: 1.5 },
                    fullWidth: !0,
                    children: (0, K.jsx)(o.cC, { id: 'T6uYU2' }),
                  }),
                  (0, K.jsx)(j.Z, {
                    variant: 'outlined',
                    component: g.rU,
                    href: g.Z6.reserveOverview(b, y),
                    fullWidth: !0,
                    children: (0, K.jsx)(o.cC, { id: 'URmyfc' }),
                  }),
                ],
              }),
            ],
          });
        },
        Ue = r(26447),
        Me = r(49663),
        Re = r(83877);
      function Ne(e, t) {
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
      function Fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ne(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ne(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Le = function (e) {
          var t = e.symbol,
            r = e.iconSymbol,
            n = e.name,
            o = e.underlyingAsset,
            i = e.isFreezed,
            s = e.reserve,
            a = (0, ne.vR)().openBorrow,
            l = (0, N.HT)().user,
            c = (0, d.Y)(function (e) {
              return e.currentMarket;
            }),
            u = (0, N.HT)(),
            p = u.ghoReserveData,
            x = u.ghoUserData,
            b = u.ghoUserLoadingData,
            h = u.ghoLoadingData,
            m = (0, v.Z)(),
            j = (0, y.Z)(m.breakpoints.down('xsm')),
            f = l ? Number((0, H.BC)(l, s)) : 0,
            g = Math.min(f, p.aaveFacilitatorRemainingCapacity),
            w = i || g <= 0,
            O = g + x.userGhoBorrowBalance,
            C = (0, E.li)(
              p.ghoVariableBorrowAPY,
              x.userGhoBorrowBalance,
              x.userGhoAvailableToBorrowAtDiscount,
              p.ghoBorrowAPYWithMaxDiscount
            ),
            k = (0, E.li)(
              p.ghoVariableBorrowAPY,
              O,
              x.userGhoAvailableToBorrowAtDiscount,
              p.ghoBorrowAPYWithMaxDiscount
            ),
            D = b
              ? void 0
              : [0 === x.userGhoAvailableToBorrowAtDiscount ? p.ghoBorrowAPYWithMaxDiscount : C, k],
            P = {
              symbol: t,
              iconSymbol: r,
              name: n,
              underlyingAsset: o,
              currentMarket: c,
              availableBorrows: g,
              borrowButtonDisable: w,
              userDiscountTokenBalance: x.userDiscountTokenBalance,
              ghoApyRange: D,
              ghoUserDataFetched: !b,
              userBorrowApyAfterNewBorrow: k,
              ghoLoadingData: h,
              onBorrowClick: function () {
                return a(o, c, n, 'dashboard');
              },
            };
          return j ? (0, K.jsx)(Ve, Fe({}, P)) : (0, K.jsx)(Ye, Fe({}, P));
        },
        Ye = function (e) {
          var t = e.symbol,
            r = e.iconSymbol,
            n = e.name,
            a = e.underlyingAsset,
            l = e.currentMarket,
            c = e.availableBorrows,
            d = e.borrowButtonDisable,
            u = e.userDiscountTokenBalance,
            p = e.ghoApyRange,
            x = e.ghoUserDataFetched,
            b = e.userBorrowApyAfterNewBorrow,
            h = e.onBorrowClick;
          return (0, K.jsxs)(Q.H, {
            sx: {
              borderTop: '1px solid',
              borderBottom: '1px solid',
              borderColor: 'divider',
              mb: 2,
            },
            'data-cy': 'dashboardBorrowListItem_'.concat(t.toUpperCase()),
            children: [
              (0, K.jsx)(Z.h, {
                maxWidth: Y,
                isRow: !0,
                children: (0, K.jsxs)(g.rU, {
                  href: g.Z6.reserveOverview(a, l),
                  noWrap: !0,
                  sx: { display: 'inline-flex', alignItems: 'center' },
                  children: [
                    (0, K.jsx)(De.T1, { symbol: r, fontSize: 'large' }),
                    (0, K.jsx)(be.Z, {
                      title: ''.concat(n, ' (').concat(t, ')'),
                      arrow: !0,
                      placement: 'top',
                      children: (0, K.jsx)(s.Z, {
                        variant: 'subheader1',
                        sx: { ml: 3 },
                        noWrap: !0,
                        'data-cy': 'assetName',
                        children: t,
                      }),
                    }),
                  ],
                }),
              }),
              (0, K.jsx)(Z.h, {
                children: (0, K.jsxs)(i.Z, {
                  display: 'flex',
                  flexDirection: 'column',
                  children: [
                    (0, K.jsx)(M.Y, {
                      capType: U.R.borrowCap,
                      text: (0, K.jsx)(o.cC, { id: 'csDS2L' }),
                      variant: 'subheader2',
                      color: 'text.secondary',
                      ml: -1,
                    }),
                    (0, K.jsx)(Ae.k, {
                      listColumnProps: { p: 0 },
                      symbol: t,
                      value: c,
                      subValue: c,
                      disabled: 0 === c,
                      withTooltip: !0,
                    }),
                  ],
                }),
              }),
              (0, K.jsxs)(Z.h, {
                children: [
                  (0, K.jsx)(Re.n, {
                    text: (0, K.jsx)(o.cC, { id: '6yAAbq' }),
                    variant: 'subheader2',
                    color: 'text.secondary',
                  }),
                  (0, K.jsx)(Me.B, {
                    withTokenIcon: !1,
                    useApyRange: !0,
                    rangeValues: p,
                    value: x ? b : -1,
                    'data-cy': 'apyType',
                    stkAaveBalance: u,
                    ghoRoute: g.Z6.reserveOverview(a, l) + '/#discount',
                    forceShowTooltip: !0,
                    userQualifiesForDiscount: !0,
                  }),
                ],
              }),
              (0, K.jsxs)(X, {
                children: [
                  (0, K.jsx)(j.Z, {
                    disabled: d,
                    variant: 'contained',
                    onClick: h,
                    children: (0, K.jsx)(o.cC, { id: 'T6uYU2' }),
                  }),
                  (0, K.jsx)(j.Z, {
                    variant: 'outlined',
                    component: g.rU,
                    href: g.Z6.reserveOverview(a, l),
                    children: (0, K.jsx)(o.cC, { id: 'URmyfc' }),
                  }),
                ],
              }),
            ],
          });
        },
        Ve = function (e) {
          var t = e.symbol,
            r = e.iconSymbol,
            n = e.name,
            s = e.underlyingAsset,
            a = e.currentMarket,
            l = e.availableBorrows,
            c = e.borrowButtonDisable,
            d = e.userDiscountTokenBalance,
            u = e.ghoApyRange,
            p = e.ghoLoadingData,
            x = e.userBorrowApyAfterNewBorrow,
            b = e.onBorrowClick;
          return (0, K.jsxs)(ee.o, {
            symbol: t,
            iconSymbol: r,
            name: n,
            underlyingAsset: s,
            currentMarket: a,
            children: [
              (0, K.jsx)(Ie, {
                title: (0, K.jsx)(o.cC, { id: 'smJNwH' }),
                value: l,
                subValue: l,
                disabled: 0 === l,
              }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(
                  Re.n,
                  { text: (0, K.jsx)(o.cC, { id: '6yAAbq' }), variant: 'description' },
                  'APY_dash_mob_variable_ type'
                ),
                align: 'flex-start',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(Ue.Z, {
                  alignItems: 'end',
                  children: (0, K.jsx)(Me.B, {
                    withTokenIcon: !1,
                    useApyRange: !0,
                    rangeValues: u,
                    value: p ? -1 : x,
                    'data-cy': 'apyType',
                    stkAaveBalance: d,
                    ghoRoute: g.Z6.reserveOverview(s, a) + '/#discount',
                    forceShowTooltip: !0,
                    userQualifiesForDiscount: !0,
                  }),
                }),
              }),
              (0, K.jsxs)(i.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 5,
                },
                children: [
                  (0, K.jsx)(j.Z, {
                    disabled: c,
                    variant: 'contained',
                    onClick: b,
                    sx: { mr: 1.5 },
                    fullWidth: !0,
                    children: (0, K.jsx)(o.cC, { id: 'T6uYU2' }),
                  }),
                  (0, K.jsx)(j.Z, {
                    variant: 'outlined',
                    component: g.rU,
                    href: g.Z6.reserveOverview(s, a),
                    fullWidth: !0,
                    children: (0, K.jsx)(o.cC, { id: 'URmyfc' }),
                  }),
                ],
              }),
            ],
          });
        };
      function We(e, t) {
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
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? We(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : We(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var ze = [
          { title: (0, K.jsx)(o.cC, { id: 'bUUVED' }), sortKey: 'symbol' },
          {
            title: (0, K.jsx)(
              M.Y,
              {
                event: {
                  eventName: w.vh.TOOL_TIP,
                  eventParams: { tooltip: 'Available to borrow' },
                },
                capType: U.R.borrowCap,
                text: (0, K.jsx)(o.cC, { id: 'csDS2L' }),
                variant: 'subheader2',
              },
              'availableBorrows'
            ),
            sortKey: 'availableBorrows',
          },
          {
            title: (0, K.jsx)(
              P.B,
              {
                event: {
                  eventName: w.vh.TOOL_TIP,
                  eventParams: { tooltip: 'Variable Borrow APY' },
                },
                text: (0, K.jsx)(o.cC, { id: 'MeCCA+' }),
                variant: 'subheader2',
              },
              'variableBorrowAPY'
            ),
            sortKey: 'variableBorrowAPY',
          },
        ],
        He = function () {
          var e = (0, d.Y)(
              (0, u.N)(function (e) {
                return [e.currentNetworkConfig, e.currentMarket];
              })
            ),
            t = (0, n.Z)(e, 2),
            r = t[0],
            l = t[1],
            c = (0, N.HT)(),
            p = c.user,
            x = c.reserves,
            b = c.marketReferencePriceInUsd,
            h = c.loading,
            m = (0, v.Z)(),
            j = (0, y.Z)(m.breakpoints.down('xsm')),
            f = (0, a.useState)(''),
            w = f[0],
            O = f[1],
            P = (0, a.useState)(!1),
            U = P[0],
            M = P[1],
            L = r.baseAssetSymbol,
            Y = x
              .filter(function (e) {
                return !!p && (0, H.hF)(e, p);
              })
              .map(function (e) {
                var t = p ? Number((0, H.nG)(e, p)) : 0,
                  r = (0, k.hE)(t)
                    .multipliedBy(e.formattedPriceInMarketReferenceCurrency)
                    .multipliedBy(b)
                    .shiftedBy(-D.$3)
                    .toFixed(2);
                return _e(
                  _e({}, e),
                  {},
                  {
                    reserve: e,
                    totalBorrows: e.totalDebt,
                    availableBorrows: t,
                    availableBorrowsInUSD: r,
                    variableBorrowRate: e.borrowingEnabled ? Number(e.variableBorrowAPY) : -1,
                    iconSymbol: e.iconSymbol,
                  },
                  e.isWrappedBaseAsset
                    ? (0, I.QD)({ symbol: L, underlyingAsset: C.hP.toLowerCase() })
                    : {}
                );
              }),
            W = (0, k.hE)(
              (null === p || void 0 === p ? void 0 : p.totalBorrowsMarketReferenceCurrency) || '0'
            ).plus(
              (null === p || void 0 === p ? void 0 : p.availableBorrowsMarketReferenceCurrency) ||
                '0'
            ),
            _ = W.eq(0)
              ? '0'
              : (0, k.hE)(
                  (null === p || void 0 === p ? void 0 : p.totalBorrowsMarketReferenceCurrency) ||
                    '0'
                )
                  .div(W)
                  .toFixed(),
            z =
              '0' ===
                (null === p || void 0 === p ? void 0 : p.totalCollateralMarketReferenceCurrency) ||
              +_ >= 0.98
                ? Y
                : Y.filter(function (e) {
                    var t = e.availableBorrowsInUSD,
                      r = e.totalLiquidityUSD,
                      n = e.symbol;
                    return (
                      !!(0, E.F$)({ symbol: n, currentMarket: l }) || ('0.00' !== t && '0' !== r)
                    );
                  }),
            q = (0, E.TB)(z, l),
            G = q.value,
            Q = q.filtered,
            J = V(U, w, 'asset', Q),
            $ = !J.length && !G,
            ee = function () {
              return (0, K.jsxs)(B.u, {
                children: [
                  ze.map(function (e) {
                    return (0, K.jsx)(
                      Z.h,
                      {
                        isRow: 'symbol' === e.sortKey,
                        maxWidth: 'symbol' === e.sortKey ? F : void 0,
                        children: (0, K.jsx)(S.M, {
                          sortName: w,
                          sortDesc: U,
                          setSortName: O,
                          setSortDesc: M,
                          sortKey: e.sortKey,
                          source: 'Borrow Dashboard',
                          children: e.title,
                        }),
                      },
                      e.sortKey
                    );
                  }),
                  (0, K.jsx)(X, { isColumnHeader: !0 }),
                ],
              });
            };
          return h
            ? (0, K.jsx)(re, {
                title: (0, K.jsx)(o.cC, { id: 'dXUQFX' }),
                head: ze.map(function (e) {
                  return e.title;
                }),
                withTopMargin: !0,
              })
            : (0, K.jsx)(R.l, {
                titleComponent: (0, K.jsx)(s.Z, {
                  component: 'div',
                  variant: 'h3',
                  sx: { mr: 4 },
                  children: (0, K.jsx)(o.cC, { id: 'dXUQFX' }),
                }),
                localStorageName: 'borrowAssetsDashboardTableCollapse',
                withTopMargin: !0,
                noData: $,
                subChildrenComponent: (0, K.jsxs)(K.Fragment, {
                  children: [
                    (0, K.jsxs)(i.Z, {
                      sx: { px: 6, mb: 4 },
                      children: [
                        '-1' !== (null === p || void 0 === p ? void 0 : p.healthFactor) &&
                          Number(null === p || void 0 === p ? void 0 : p.healthFactor) <= 1.1 &&
                          (0, K.jsx)(A.v, {
                            severity: 'error',
                            children: (0, K.jsx)(o.cC, { id: '8+6BI0' }),
                          }),
                        !$ &&
                          (0, K.jsxs)(K.Fragment, {
                            children: [
                              (null === p || void 0 === p ? void 0 : p.isInIsolationMode) &&
                                (0, K.jsxs)(A.v, {
                                  severity: 'warning',
                                  children: [
                                    (0, K.jsx)(o.cC, { id: 'Ajl2rq' }),
                                    (0, K.jsx)(g.rU, {
                                      href: 'https://docs.aave.com/faq/',
                                      target: '_blank',
                                      rel: 'noopener',
                                      children: 'Learn More',
                                    }),
                                  ],
                                }),
                              (null === p || void 0 === p ? void 0 : p.isInEmode) &&
                                (0, K.jsx)(A.v, {
                                  severity: 'warning',
                                  children: (0, K.jsx)(o.cC, { id: 'jmXdoY' }),
                                }),
                              '0' ===
                                (null === p || void 0 === p
                                  ? void 0
                                  : p.totalCollateralMarketReferenceCurrency) &&
                                (0, K.jsx)(A.v, {
                                  severity: 'info',
                                  children: (0, K.jsx)(o.cC, { id: 'WkZ6C6' }),
                                }),
                            ],
                          }),
                      ],
                    }),
                    G &&
                      !j &&
                      (0, E.F$)({ symbol: G.symbol, currentMarket: l }) &&
                      (0, K.jsx)(T.hv, { asset: G.reserve, children: (0, K.jsx)(Le, _e({}, G)) }),
                  ],
                }),
                children: (0, K.jsxs)(K.Fragment, {
                  children: [
                    !j && !!z.length && (0, K.jsx)(ee, {}),
                    G &&
                      j &&
                      (0, E.F$)({ symbol: G.symbol, currentMarket: l }) &&
                      (0, K.jsx)(T.hv, { asset: G.reserve, children: (0, K.jsx)(Le, _e({}, G)) }),
                    null === J || void 0 === J
                      ? void 0
                      : J.map(function (e) {
                          return (0, K.jsx)(
                            a.Fragment,
                            {
                              children: (0, K.jsx)(T.hv, {
                                asset: e.reserve,
                                children: j ? (0, K.jsx)(Ee, _e({}, e)) : (0, K.jsx)(Te, _e({}, e)),
                              }),
                            },
                            e.underlyingAsset
                          );
                        }),
                  ],
                }),
              });
        },
        Ke = r(36864),
        Xe = r(49212);
      function qe(e, t) {
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
      function Ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qe(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : qe(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Qe = function (e) {
        var t = (0, Ke.Z)({}, e);
        return (0, K.jsx)(
          Xe.G,
          Ge(Ge({}, t), {}, { children: (0, K.jsx)(o.cC, { id: 'hdmy/o' }) })
        );
      };
      function Je(e, t) {
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
      function $e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Je(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Je(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var et = function (e) {
          var t = (0, Ke.Z)({}, e);
          return (0, K.jsx)(
            Xe.G,
            $e($e({}, t), {}, { children: (0, K.jsx)(o.cC, { id: 'P72/OW' }) })
          );
        },
        tt = r(62123),
        rt = r(96618),
        nt = r(22659),
        ot = r(35294),
        it = r(76920);
      function st(e, t) {
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
      function at(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? st(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : st(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var lt = function (e) {
          var t = (0, Ke.Z)({}, e);
          return (0, K.jsx)(
            s.Z,
            at(
              at(
                {
                  sx: function (e) {
                    return {
                      color: 'transparent',
                      backgroundClip: 'text !important',
                      webkitTextFillColor: 'transparent',
                      background: e.palette.gradients.aaveGradient,
                    };
                  },
                },
                t
              ),
              {},
              { children: t.children }
            )
          );
        },
        ct = r(56570),
        dt = function (e) {
          var t = e.userEmodeCategoryId,
            r = (0, ne.vR)().openEmode,
            n = (0, N.HT)().eModes,
            l = (0, d.Y)(function (e) {
              return e.trackEvent;
            }),
            c = (0, a.useState)(null),
            u = c[0],
            p = c[1],
            x = Boolean(u),
            b = function () {
              p(null);
            },
            h = 0 === t,
            m = function () {
              return (0, K.jsx)(o.cC, { id: 'J/hVSQ', values: { 0: (0, ct.U)(n[t].label) } });
            };
          return (0, K.jsxs)(i.Z, {
            sx: { display: 'inline-flex', alignItems: 'center' },
            onClick: function (e) {
              e.stopPropagation();
            },
            children: [
              (0, K.jsx)(s.Z, {
                mr: 1,
                variant: 'description',
                color: 'text.secondary',
                children: (0, K.jsx)(o.cC, { id: 'riNWOA' }),
              }),
              (0, K.jsx)(j.Z, {
                onClick: function (e) {
                  var r;
                  e.stopPropagation(),
                    (r = e),
                    l(w.h1.E_MODE_INFO_DASHBOARD, { userEmodeCategoryId: t }),
                    p(r.currentTarget);
                },
                'data-cy': 'emode-open',
                size: 'small',
                variant: 'outlined',
                sx: function (e) {
                  return {
                    ml: 1,
                    borderRadius: '4px',
                    p: 0,
                    '&:after': {
                      content: "''",
                      position: 'absolute',
                      left: -1,
                      right: -1,
                      bottom: -1,
                      top: -1,
                      background: h ? 'transparent' : e.palette.gradients.aaveGradient,
                      borderRadius: '4px',
                    },
                  };
                },
                children: (0, K.jsxs)(i.Z, {
                  sx: function (e) {
                    return {
                      display: 'inline-flex',
                      alignItems: 'center',
                      position: 'relative',
                      zIndex: 1,
                      bgcolor: h
                        ? x
                          ? e.palette.background.disabled
                          : e.palette.background.surface
                        : e.palette.background.paper,
                      px: '4px',
                      borderRadius: '4px',
                    };
                  },
                  children: [
                    (0, K.jsx)(ae.Z, {
                      sx: { fontSize: 12, mr: '4px', color: h ? 'text.muted' : 'text.primary' },
                      children: h ? (0, K.jsx)(rt.Z, {}) : (0, K.jsx)(it.Z, {}),
                    }),
                    h
                      ? (0, K.jsx)(s.Z, {
                          variant: 'buttonS',
                          color: 'text.secondary',
                          children: (0, K.jsx)(m, {}),
                        })
                      : (0, K.jsx)(lt, { variant: 'buttonS', children: (0, K.jsx)(m, {}) }),
                    (0, K.jsx)(ae.Z, {
                      sx: { fontSize: 12, ml: '4px', color: 'primary.light' },
                      children: (0, K.jsx)(nt.Z, {}),
                    }),
                  ],
                }),
              }),
              (0, K.jsx)(ot.Z, {
                open: x,
                anchorEl: u,
                sx: { '.MuiMenu-paper': { maxWidth: '280px' } },
                onClose: b,
                keepMounted: !0,
                children: (0, K.jsxs)(i.Z, {
                  sx: { px: 4, pt: 2, pb: 3 },
                  children: [
                    (0, K.jsx)(s.Z, {
                      variant: 'subheader1',
                      mb: h ? 1 : 3,
                      children: (0, K.jsx)(o.cC, { id: 'ZRq4tX' }),
                    }),
                    !h &&
                      (0, K.jsxs)(i.Z, {
                        children: [
                          (0, K.jsx)(s.Z, {
                            mb: 1,
                            variant: 'caption',
                            color: 'text.secondary',
                            children: (0, K.jsx)(o.cC, { id: 'BnhYo8' }),
                          }),
                          (0, K.jsx)(i.Z, {
                            sx: function (e) {
                              return {
                                p: 2,
                                mb: 3,
                                borderRadius: '6px',
                                border: '1px solid '.concat(e.palette.divider),
                              };
                            },
                            children: (0, K.jsx)($.X, {
                              caption: (0, K.jsxs)(i.Z, {
                                sx: { display: 'inline-flex', alignItems: 'center' },
                                children: [
                                  (0, K.jsx)(ae.Z, {
                                    sx: { fontSize: 12, mr: 1 },
                                    children: (0, K.jsx)(it.Z, {}),
                                  }),
                                  (0, K.jsx)(s.Z, {
                                    variant: 'subheader2',
                                    color: 'text.primary',
                                    children: (0, K.jsx)(m, {}),
                                  }),
                                ],
                              }),
                              children: (0, K.jsxs)(i.Z, {
                                sx: { display: 'inline-flex', alignItems: 'center' },
                                children: [
                                  (0, K.jsx)(i.Z, {
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
                                  (0, K.jsx)(s.Z, {
                                    variant: 'subheader2',
                                    color: 'success.main',
                                    children: (0, K.jsx)(o.cC, { id: 'RxzN1M' }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    (0, K.jsx)(s.Z, {
                      variant: 'caption',
                      color: 'text.secondary',
                      mb: 4,
                      children: (0, K.jsx)(o.cC, {
                        id: 'masO5Z',
                        components: {
                          0: (0, K.jsx)(g.rU, {
                            href: 'https://aave.com/help/borrowing/e-mode',
                            sx: { textDecoration: 'underline' },
                            variant: 'caption',
                            color: 'text.secondary',
                          }),
                        },
                      }),
                    }),
                    h
                      ? (0, K.jsx)(j.Z, {
                          fullWidth: !0,
                          variant: 'gradient',
                          onClick: function () {
                            l(w.vh.OPEN_MODAL, { type: 'Enable E-Mode', data: t }), r(), b();
                          },
                          'data-cy': 'emode-enable',
                          children: (0, K.jsx)(o.cC, { id: 'jKYzR1' }),
                        })
                      : (0, K.jsx)(K.Fragment, {
                          children: (0, K.jsx)(j.Z, {
                            fullWidth: !0,
                            sx: { mb: '6px' },
                            variant: 'outlined',
                            onClick: function () {
                              l(w.vh.OPEN_MODAL, { modal: 'Switch E-Mode', data: t }), r(), b();
                            },
                            'data-cy': 'emode-switch',
                            children: (0, K.jsx)(o.cC, { id: 'ZSqEW+' }),
                          }),
                        }),
                  ],
                }),
              }),
            ],
          });
        },
        ut = r(90629),
        pt = function (e) {
          var t = e.title,
            r = e.value,
            n = e.percent,
            o = e.tooltip;
          return (0, K.jsxs)(ut.Z, {
            variant: 'outlined',
            sx: {
              mr: 2,
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: 'none',
              bgcolor: 'transparent',
            },
            children: [
              (0, K.jsx)(s.Z, { color: 'text.secondary', sx: { mr: 1 }, noWrap: !0, children: t }),
              (0, K.jsx)(ie.B, { value: r, percent: n, variant: 'secondary14', symbol: 'USD' }),
              o,
            ],
          });
        },
        xt = r(79850);
      function bt(e, t) {
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
      function ht(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? bt(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : bt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var mt = function (e) {
          var t = e.item,
            r = e.disableEModeSwitch,
            o = (0, T.ov)().borrowCap,
            i = (0, d.Y)(
              (0, u.N)(function (e) {
                return [e.currentMarket, e.currentMarketData];
              })
            ),
            s = (0, n.Z)(i, 2),
            a = s[0],
            l = s[1],
            c = (0, v.Z)(),
            p = (0, y.Z)(c.breakpoints.down('xsm')),
            x = (0, ne.vR)(),
            b = x.openBorrow,
            h = x.openRepay,
            m = x.openDebtSwitch,
            j = t.reserve,
            f = !j.isActive || !j.borrowingEnabled || j.isFrozen || j.isPaused || o.isMaxed,
            g = !j.isActive || j.isPaused,
            w = !!xt.cr.debtSwitch(l),
            O =
              'proto_mainnet' === a ||
              'proto_polygon' === a ||
              j.isPaused ||
              !j.isActive ||
              'stETH' == j.symbol ||
              r,
            C = ht(
              ht({}, t),
              {},
              {
                disableBorrow: f,
                disableSwitch: O,
                disableRepay: g,
                showSwitchButton: w,
                totalBorrows: t.variableBorrows,
                totalBorrowsUSD: t.variableBorrowsUSD,
                borrowAPY: Number(j.variableBorrowAPY),
                incentives: j.vIncentivesData,
                onDetbSwitchClick: function () {
                  m(j.underlyingAsset);
                },
                onOpenBorrow: function () {
                  b(j.underlyingAsset, a, j.name, 'dashboard');
                },
                onOpenRepay: function () {
                  h(j.underlyingAsset, j.isFrozen, a, j.name, 'dashboard');
                },
              }
            );
          return p ? (0, K.jsx)(yt, ht({}, C)) : (0, K.jsx)(vt, ht({}, C));
        },
        vt = function (e) {
          var t = e.reserve,
            r = e.disableBorrow,
            n = e.disableSwitch,
            i = e.disableRepay,
            s = e.showSwitchButton,
            a = e.totalBorrows,
            l = e.totalBorrowsUSD,
            c = e.borrowAPY,
            u = e.variableDebtTokenAddress,
            p = e.incentives,
            x = e.onDetbSwitchClick,
            b = e.onOpenBorrow,
            h = e.onOpenRepay,
            v = (0, d.Y)(function (e) {
              return e.currentMarket;
            });
          return (0, K.jsxs)(Be, {
            symbol: t.symbol,
            iconSymbol: t.iconSymbol,
            name: t.name,
            detailsAddress: t.underlyingAsset,
            currentMarket: v,
            frozen: t.isFrozen,
            paused: t.isPaused,
            borrowEnabled: t.borrowingEnabled,
            'data-cy': 'dashboardBorrowedListItem_'.concat(t.symbol.toUpperCase()),
            showBorrowCapTooltips: !0,
            showExternalIncentivesTooltips: (0, oe.f8)(t.symbol, v, m.UQ.borrow),
            children: [
              (0, K.jsx)(Ae.k, { symbol: t.symbol, value: a, subValue: l }),
              (0, K.jsx)(pe, {
                value: c,
                market: v,
                protocolAction: m.UQ.borrow,
                address: u,
                incentives: p,
                symbol: t.symbol,
              }),
              (0, K.jsxs)(X, {
                children: [
                  s
                    ? (0, K.jsx)(j.Z, {
                        disabled: n,
                        variant: 'contained',
                        onClick: x,
                        'data-cy': 'swapButton',
                        children: (0, K.jsx)(o.cC, { id: 'vH2C/2' }),
                      })
                    : (0, K.jsx)(j.Z, {
                        disabled: r,
                        variant: 'contained',
                        onClick: b,
                        children: (0, K.jsx)(o.cC, { id: 'T6uYU2' }),
                      }),
                  (0, K.jsx)(j.Z, {
                    disabled: i,
                    variant: 'outlined',
                    onClick: h,
                    children: (0, K.jsx)(o.cC, { id: '3q3mFy' }),
                  }),
                ],
              }),
            ],
          });
        },
        yt = function (e) {
          var t = e.reserve,
            r = e.totalBorrows,
            n = e.totalBorrowsUSD,
            s = e.disableBorrow,
            a = e.showSwitchButton,
            l = e.disableSwitch,
            c = e.borrowAPY,
            u = e.incentives,
            p = e.variableDebtTokenAddress,
            x = e.disableRepay,
            b = e.onDetbSwitchClick,
            h = e.onOpenBorrow,
            v = e.onOpenRepay,
            y = (0, d.Y)(function (e) {
              return e.currentMarket;
            }),
            f = t.symbol,
            g = t.iconSymbol,
            w = t.name;
          return (0, K.jsxs)(ee.o, {
            symbol: f,
            iconSymbol: g,
            name: w,
            underlyingAsset: t.underlyingAsset,
            currentMarket: y,
            frozen: t.isFrozen,
            borrowEnabled: t.borrowingEnabled,
            showBorrowCapTooltips: !0,
            showExternalIncentivesTooltips: (0, oe.f8)(f, y, m.UQ.borrow),
            children: [
              (0, K.jsx)(Ie, {
                title: (0, K.jsx)(o.cC, { id: 'o5ooMr' }),
                value: r,
                subValue: n,
                disabled: 0 === Number(r),
              }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(o.cC, { id: 'rSayea' }),
                align: 'flex-start',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(ue.J, {
                  value: c,
                  incentives: u,
                  address: p,
                  symbol: f,
                  variant: 'secondary14',
                  market: y,
                  protocolAction: m.UQ.borrow,
                }),
              }),
              (0, K.jsxs)(i.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 5,
                },
                children: [
                  a
                    ? (0, K.jsx)(j.Z, {
                        disabled: l,
                        variant: 'contained',
                        fullWidth: !0,
                        onClick: b,
                        'data-cy': 'swapButton',
                        children: (0, K.jsx)(o.cC, { id: 'vH2C/2' }),
                      })
                    : (0, K.jsx)(j.Z, {
                        disabled: s,
                        variant: 'contained',
                        onClick: h,
                        fullWidth: !0,
                        children: (0, K.jsx)(o.cC, { id: 'T6uYU2' }),
                      }),
                  (0, K.jsx)(j.Z, {
                    disabled: x,
                    variant: 'outlined',
                    onClick: v,
                    sx: { ml: 1.5 },
                    fullWidth: !0,
                    children: (0, K.jsx)(o.cC, { id: '3q3mFy' }),
                  }),
                ],
              }),
            ],
          });
        },
        jt = r(38264),
        ft = r(97595),
        gt = r(30447);
      function wt(e, t) {
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
      function Ot(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? wt(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : wt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Ct = function (e) {
          var t = e.reserve,
            r = (0, ne.vR)(),
            n = r.openBorrow,
            o = r.openRepay,
            i = r.openDebtSwitch,
            s = (0, d.Y)(function (e) {
              return e.currentMarket;
            }),
            a = (0, d.Y)(function (e) {
              return e.currentMarketData;
            }),
            l = (0, N.HT)(),
            c = l.ghoLoadingData,
            u = l.ghoReserveData,
            p = l.ghoUserData,
            x = l.ghoUserLoadingData,
            b = l.user,
            h = (0, gt.l)(a).data,
            m = (0, ft.b)(a).data,
            j = (0, v.Z)(),
            f = (0, y.Z)(j.breakpoints.down('xsm')),
            g =
              p.userGhoBorrowBalance >= u.ghoMinDebtTokenBalanceForDiscount
                ? p.userGhoAvailableToBorrowAtDiscount
                : 0,
            w = (0, E.li)(
              u.ghoVariableBorrowAPY,
              p.userGhoBorrowBalance,
              g,
              u.ghoBorrowAPYWithMaxDiscount
            ),
            O = !(!h || !m) && (0, E.k9)(m, h),
            C = t.isActive,
            k = t.isFrozen,
            D = t.isPaused,
            P = t.borrowingEnabled,
            Z = b ? Number((0, H.BC)(b, t)) : 0,
            S = Math.min(Z, u.aaveFacilitatorRemainingCapacity),
            B = {
              reserve: t,
              userGhoBorrowBalance: p.userGhoBorrowBalance,
              hasDiscount: O,
              ghoLoadingData: c,
              ghoUserDataFetched: !x,
              borrowRateAfterDiscount: w,
              currentMarket: s,
              userDiscountTokenBalance: p.userDiscountTokenBalance,
              borrowDisabled:
                !C || !P || k || D || S <= 0 || u.aaveFacilitatorRemainingCapacity < 1e-6,
              showSwitchButton: xt.cr.debtSwitch(a) || !1,
              disableSwitch: !C || D,
              disableRepay: !C || D,
              onRepayClick: function () {
                return o(t.underlyingAsset, k, s, t.name, 'dashboard');
              },
              onBorrowClick: function () {
                return n(t.underlyingAsset, s, t.name, 'dashboard');
              },
              onSwitchClick: function () {
                return i(t.underlyingAsset);
              },
            };
          return f ? (0, K.jsx)(Dt, Ot({}, B)) : (0, K.jsx)(kt, Ot({}, B));
        },
        kt = function (e) {
          var t = e.reserve,
            r = e.userGhoBorrowBalance,
            n = e.hasDiscount,
            i = e.ghoLoadingData,
            s = e.ghoUserDataFetched,
            a = e.borrowRateAfterDiscount,
            l = e.currentMarket,
            c = e.userDiscountTokenBalance,
            d = e.borrowDisabled,
            u = e.onRepayClick,
            p = e.onBorrowClick,
            x = e.onSwitchClick,
            b = e.showSwitchButton,
            h = e.disableSwitch,
            m = e.disableRepay,
            v = t.symbol,
            y = t.iconSymbol,
            f = t.name,
            w = t.isFrozen,
            O = t.underlyingAsset;
          return (0, K.jsxs)(Be, {
            symbol: v,
            iconSymbol: y,
            name: f,
            detailsAddress: O,
            currentMarket: l,
            frozen: w,
            'data-cy': 'dashboardBorrowedListItem_'.concat(v.toUpperCase()),
            showBorrowCapTooltips: !0,
            children: [
              (0, K.jsx)(Ae.k, { symbol: v, value: r, subValue: r }),
              (0, K.jsx)(Z.h, {
                children: (0, K.jsxs)(Ue.Z, {
                  direction: 'row',
                  gap: 1,
                  alignItems: 'center',
                  children: [
                    (0, K.jsx)(Me.B, {
                      withTokenIcon: n,
                      value: i || !s ? -1 : a,
                      'data-cy': 'apyType',
                      stkAaveBalance: c,
                      ghoRoute: g.Z6.reserveOverview(O, l) + '/#discount',
                      userQualifiesForDiscount: n,
                    }),
                    (0, K.jsx)(le.a, {
                      tooltipContent: Re.x,
                      offset: [0, -4],
                      withoutHover: !0,
                      children: (0, K.jsx)(j.Z, {
                        variant: 'outlined',
                        size: 'small',
                        color: 'primary',
                        disabled: !0,
                        'data-cy': 'apyButton_fixed',
                        sx: { height: '22px' },
                        children: 'GHO RATE',
                      }),
                    }),
                  ],
                }),
              }),
              (0, K.jsxs)(X, {
                children: [
                  b
                    ? (0, K.jsx)(j.Z, {
                        disabled: h,
                        variant: 'contained',
                        onClick: x,
                        'data-cy': 'swapButton',
                        children: (0, K.jsx)(o.cC, { id: 'vH2C/2' }),
                      })
                    : (0, K.jsx)(j.Z, {
                        disabled: d,
                        variant: 'outlined',
                        onClick: p,
                        children: (0, K.jsx)(o.cC, { id: 'T6uYU2' }),
                      }),
                  (0, K.jsx)(j.Z, {
                    disabled: m,
                    variant: 'outlined',
                    onClick: u,
                    children: (0, K.jsx)(o.cC, { id: '3q3mFy' }),
                  }),
                ],
              }),
            ],
          });
        },
        Dt = function (e) {
          var t = e.reserve,
            r = e.userGhoBorrowBalance,
            n = e.hasDiscount,
            s = e.ghoLoadingData,
            a = e.borrowRateAfterDiscount,
            l = e.currentMarket,
            c = e.userDiscountTokenBalance,
            d = e.borrowDisabled,
            u = e.onRepayClick,
            p = e.onBorrowClick,
            x = e.onSwitchClick,
            b = e.showSwitchButton,
            h = e.disableSwitch,
            m = e.disableRepay,
            v = t.symbol,
            y = t.iconSymbol,
            f = t.name;
          return (0, K.jsxs)(ee.o, {
            symbol: v,
            iconSymbol: y,
            name: f,
            underlyingAsset: t.underlyingAsset,
            currentMarket: l,
            frozen: t.isFrozen,
            showBorrowCapTooltips: !0,
            children: [
              (0, K.jsx)(Ie, {
                title: (0, K.jsx)(o.cC, { id: 'o5ooMr' }),
                value: r,
                subValue: r,
                disabled: 0 === r,
              }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(o.cC, { id: 'rSayea' }),
                align: 'flex-start',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(Me.B, {
                  withTokenIcon: n,
                  value: s ? -1 : a,
                  'data-cy': 'apyType',
                  stkAaveBalance: c,
                  ghoRoute: g.Z6.reserveOverview(t.underlyingAsset, l) + '/#discount',
                  userQualifiesForDiscount: n,
                }),
              }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(o.cC, { id: 'yW1oWB' }),
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(le.a, {
                  tooltipContent: Re.x,
                  offset: [0, -4],
                  withoutHover: !0,
                  children: (0, K.jsxs)(j.Z, {
                    variant: 'outlined',
                    size: 'small',
                    color: 'primary',
                    children: [
                      'GHO RATE',
                      (0, K.jsx)(ae.Z, {
                        sx: { marginLeft: '2px', fontSize: '14px' },
                        children: (0, K.jsx)(jt.Z, {}),
                      }),
                    ],
                  }),
                }),
              }),
              (0, K.jsxs)(i.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 5,
                },
                children: [
                  b
                    ? (0, K.jsx)(j.Z, {
                        disabled: h,
                        variant: 'contained',
                        fullWidth: !0,
                        onClick: x,
                        children: (0, K.jsx)(o.cC, { id: 'vH2C/2' }),
                      })
                    : (0, K.jsx)(j.Z, {
                        disabled: d,
                        variant: 'outlined',
                        onClick: p,
                        fullWidth: !0,
                        children: (0, K.jsx)(o.cC, { id: 'T6uYU2' }),
                      }),
                  (0, K.jsx)(j.Z, {
                    disabled: m,
                    variant: 'outlined',
                    onClick: u,
                    sx: { mr: 1.5 },
                    fullWidth: !0,
                    children: (0, K.jsx)(o.cC, { id: '3q3mFy' }),
                  }),
                ],
              }),
            ],
          });
        };
      function Pt(e, t) {
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
      function Zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pt(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Pt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var St = function (e) {
        var t = e.item,
          r = e.disableEModeSwitch,
          n = (0, d.Y)(function (e) {
            return e.currentMarket;
          });
        return (0, K.jsx)(T.hv, {
          asset: t.reserve,
          children: (0, E.F$)({ symbol: t.reserve.symbol, currentMarket: n })
            ? (0, K.jsx)(Ct, Zt({}, t))
            : (0, K.jsx)(mt, { item: t, disableEModeSwitch: r }),
        });
      };
      function Bt(e, t) {
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
      function At(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Bt(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Bt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Tt = [
          { title: (0, K.jsx)(o.cC, { id: 'bUUVED' }), sortKey: 'symbol' },
          { title: (0, K.jsx)(o.cC, { id: 'o5ooMr' }, 'Debt'), sortKey: 'variableBorrows' },
          { title: (0, K.jsx)(o.cC, { id: 'rSayea' }, 'APY'), sortKey: 'borrowAPY' },
        ],
        It = function () {
          var e = (0, N.HT)(),
            t = e.user,
            r = e.loading,
            i = e.eModes,
            l = e.reserves,
            c = (0, d.Y)(
              (0, u.N)(function (e) {
                return [e.currentMarketData, e.currentNetworkConfig];
              })
            ),
            p = (0, n.Z)(c, 2),
            x = p[0],
            b = p[1],
            h = (0, a.useState)(''),
            j = h[0],
            f = h[1],
            g = (0, a.useState)(!1),
            O = g[0],
            D = g[1],
            P = (0, v.Z)(),
            A = (0, y.Z)(P.breakpoints.down('xsm')),
            T = x.v3 && Object.keys(i).length > 1,
            U = (0, a.useState)(!1),
            M = U[0],
            L = U[1];
          if (r || !t)
            return (0, K.jsx)(re, {
              title: (0, K.jsx)(o.cC, { id: 'AReoaV' }),
              head: Tt.map(function (e) {
                return e.title;
              }),
            });
          var Y =
              (null === t || void 0 === t
                ? void 0
                : t.userReservesData.reduce(function (e, t) {
                    return (
                      '0' !== t.variableBorrows &&
                        e.push(
                          At(
                            At({}, t),
                            {},
                            {
                              borrowRateMode: m.tk.Variable,
                              reserve: At(
                                At({}, t.reserve),
                                t.reserve.isWrappedBaseAsset
                                  ? (0, I.QD)({
                                      symbol: b.baseAssetSymbol,
                                      underlyingAsset: C.hP.toLowerCase(),
                                    })
                                  : {}
                              ),
                            }
                          )
                        ),
                      e
                    );
                  }, [])) || [],
            W = Y.filter(function (e) {
              return e.reserve.symbol === E.JP;
            });
          W.length > 0 &&
            (Y = Y.filter(function (e) {
              return e.reserve.symbol !== E.JP;
            })).unshift(W[0]);
          var _ = (0, k.hE)(
              (null === t || void 0 === t ? void 0 : t.totalBorrowsMarketReferenceCurrency) || '0'
            ).plus(
              (null === t || void 0 === t ? void 0 : t.availableBorrowsMarketReferenceCurrency) ||
                '0'
            ),
            z = _.eq(0)
              ? '0'
              : (0, k.hE)(
                  (null === t || void 0 === t ? void 0 : t.totalBorrowsMarketReferenceCurrency) ||
                    '0'
                )
                  .div(_)
                  .toFixed(),
            H = V(O, j, 'position', Y, !0),
            q =
              t.isInEmode &&
              l.filter(function (e) {
                return e.eModes.find(function (e) {
                  return e.id === t.userEmodeCategoryId && e.borrowingEnabled;
                });
              }).length < 2,
            G = function () {
              return (0, K.jsxs)(B.u, {
                children: [
                  Tt.map(function (e) {
                    return (0, K.jsx)(
                      Z.h,
                      {
                        isRow: 'symbol' === e.sortKey,
                        maxWidth: 'symbol' === e.sortKey ? F : void 0,
                        children: (0, K.jsx)(S.M, {
                          sortName: j,
                          sortDesc: O,
                          setSortName: f,
                          setSortDesc: D,
                          sortKey: e.sortKey,
                          source: 'Borrowed Positions Dashboard',
                          children: e.title,
                        }),
                      },
                      e.sortKey
                    );
                  }),
                  (0, K.jsx)(X, { isColumnHeader: !0 }),
                ],
              });
            };
          return (0, K.jsx)(R.l, {
            tooltipOpen: M,
            titleComponent: (0, K.jsx)(s.Z, {
              component: 'div',
              variant: 'h3',
              sx: { mr: 4 },
              children: (0, K.jsx)(o.cC, { id: 'AReoaV' }),
            }),
            localStorageName: 'borrowedAssetsDashboardTableCollapse',
            subTitleComponent: T
              ? (0, K.jsx)(dt, { userEmodeCategoryId: t ? t.userEmodeCategoryId : 0 })
              : void 0,
            noData: !H.length,
            topInfo: (0, K.jsx)(K.Fragment, {
              children:
                !!H.length &&
                (0, K.jsxs)(K.Fragment, {
                  children: [
                    (0, K.jsx)(pt, {
                      title: (0, K.jsx)(o.cC, { id: 'fsBGk0' }),
                      value: (null === t || void 0 === t ? void 0 : t.totalBorrowsUSD) || 0,
                    }),
                    (0, K.jsx)(pt, {
                      title: (0, K.jsx)(o.cC, { id: 'rSayea' }),
                      value: (null === t || void 0 === t ? void 0 : t.debtAPY) || 0,
                      percent: !0,
                      tooltip: (0, K.jsx)(et, {
                        setOpen: L,
                        event: {
                          eventName: w.vh.TOOL_TIP,
                          eventParams: { tooltip: 'Total Borrowed APY' },
                        },
                      }),
                    }),
                    (0, K.jsx)(pt, {
                      title: (0, K.jsx)(o.cC, { id: 'FOBZa6' }),
                      value: z || 0,
                      percent: !0,
                      tooltip: (0, K.jsx)(Qe, {
                        setOpen: L,
                        event: {
                          eventName: w.vh.TOOL_TIP,
                          eventParams: { tooltip: 'Borrow power used' },
                        },
                      }),
                    }),
                  ],
                }),
            }),
            children: H.length
              ? (0, K.jsxs)(K.Fragment, {
                  children: [
                    !A && (0, K.jsx)(G, {}),
                    H.map(function (e) {
                      return (0, K.jsx)(
                        St,
                        { item: e, disableEModeSwitch: q },
                        e.underlyingAsset + e.borrowRateMode
                      );
                    }),
                  ],
                })
              : (0, K.jsx)(tt.N, { text: (0, K.jsx)(o.cC, { id: 't+wtgf' }) }),
          });
        };
      function Et(e, t) {
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
      function Ut(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Et(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Et(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Mt = function (e) {
        var t = (0, Ke.Z)({}, e);
        return (0, K.jsx)(
          Xe.G,
          Ut(Ut({}, t), {}, { children: (0, K.jsx)(o.cC, { id: 'vesuBJ' }) })
        );
      };
      function Rt(e, t) {
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
      function Nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Rt(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Rt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Ft = function (e) {
        var t = (0, Ke.Z)({}, e);
        return (0, K.jsx)(
          Xe.G,
          Nt(Nt({}, t), {}, { children: (0, K.jsx)(o.cC, { id: 'I8CX2c' }) })
        );
      };
      function Lt(e, t) {
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
      function Yt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Lt(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Lt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Vt = function (e) {
          var t = (0, Ke.Z)({}, e);
          return (0, K.jsx)(
            Xe.G,
            Yt(Yt({}, t), {}, { children: (0, K.jsx)(o.cC, { id: '3qsjtp' }) })
          );
        },
        Wt = r(45843),
        _t = r(64311),
        zt = function (e) {
          var t = e.children;
          return (0, K.jsxs)(i.Z, {
            sx: {
              display: 'flex',
              alignItems: { xs: 'flex-end', xsm: 'center' },
              justifyContent: 'center',
              flexDirection: 'column',
            },
            children: [t, (0, K.jsx)(_t.Ch, {})],
          });
        },
        Ht = function (e) {
          var t = e.isIsolated,
            r = e.usageAsCollateralEnabledOnUser,
            n = e.canBeEnabledAsCollateral,
            o = e.onToggleSwitch,
            i = e.disabled,
            s = r && n;
          return (0, K.jsx)(K.Fragment, {
            children: t
              ? (0, K.jsx)(zt, {
                  children: (0, K.jsx)(Wt.Z, {
                    onClick: o,
                    disableRipple: !0,
                    checked: s,
                    disabled: !n || i,
                  }),
                })
              : (0, K.jsx)(Wt.Z, { onClick: o, disableRipple: !0, checked: s, disabled: !n || i }),
          });
        },
        Kt = function (e) {
          var t,
            r = e.reserve,
            i = e.underlyingBalance,
            s = e.underlyingBalanceUSD,
            a = e.usageAsCollateralEnabledOnUser,
            l = e.underlyingAsset,
            c = (0, N.HT)().user,
            p = r.isIsolated,
            x = r.aIncentivesData,
            b = r.aTokenAddress,
            h = r.isFrozen,
            v = r.isActive,
            y = r.isPaused,
            f = (0, ne.vR)(),
            g = f.openSupply,
            O = f.openWithdraw,
            C = f.openCollateralChange,
            k = f.openSwap,
            D = (0, T.ov)().debtCeiling,
            P = (0, d.Y)(
              (0, u.N)(function (e) {
                return [e.trackEvent, e.currentMarketData, e.currentMarket];
              })
            ),
            S = (0, n.Z)(P, 3),
            B = S[0],
            A = S[1],
            I = S[2],
            E = xt.cr.liquiditySwap(A),
            U =
              !!c &&
              !D.isMaxed &&
              '0' !== r.reserveLiquidationThreshold &&
              ((!r.isIsolated && !c.isInIsolationMode) ||
                (null === (t = c.isolatedReserve) || void 0 === t ? void 0 : t.underlyingAsset) ===
                  r.underlyingAsset ||
                (r.isIsolated && '0' === c.totalCollateralMarketReferenceCurrency)),
            M = !v || y || 'stETH' == r.symbol,
            R = !v || y,
            F = !v || h || y;
          return (0, K.jsxs)(Be, {
            symbol: r.symbol,
            iconSymbol: r.iconSymbol,
            name: r.name,
            detailsAddress: l,
            currentMarket: I,
            frozen: r.isFrozen,
            paused: y,
            'data-cy': 'dashboardSuppliedListItem_'
              .concat(r.symbol.toUpperCase(), '_')
              .concat(U && a ? 'Collateral' : 'NoCollateral'),
            showSupplyCapTooltips: !0,
            showDebtCeilingTooltips: !0,
            showExternalIncentivesTooltips: (0, oe.f8)(r.symbol, I, m.UQ.supply),
            children: [
              (0, K.jsx)(Ae.k, {
                symbol: r.iconSymbol,
                value: Number(i),
                subValue: Number(s),
                disabled: 0 === Number(i),
              }),
              (0, K.jsx)(pe, {
                value: Number(r.supplyAPY),
                market: I,
                protocolAction: m.UQ.supply,
                address: b,
                incentives: x,
                symbol: r.symbol,
              }),
              (0, K.jsx)(Z.h, {
                children: (0, K.jsx)(Ht, {
                  disabled: r.isPaused,
                  isIsolated: p,
                  usageAsCollateralEnabledOnUser: a,
                  canBeEnabledAsCollateral: U,
                  onToggleSwitch: function () {
                    C(l, I, r.name, 'dashboard', a);
                  },
                  'data-cy': 'collateralStatus',
                }),
              }),
              (0, K.jsxs)(X, {
                children: [
                  E
                    ? (0, K.jsx)(j.Z, {
                        disabled: M,
                        variant: 'contained',
                        onClick: function () {
                          B(w.vh.OPEN_MODAL, {
                            modal: 'Swap Collateral',
                            market: I,
                            assetName: r.name,
                            asset: l,
                          }),
                            k(l);
                        },
                        'data-cy': 'swapButton',
                        children: (0, K.jsx)(o.cC, { id: 'vH2C/2' }),
                      })
                    : (0, K.jsx)(j.Z, {
                        disabled: F,
                        variant: 'contained',
                        onClick: function () {
                          return g(l, I, r.name, 'dashboard');
                        },
                        children: (0, K.jsx)(o.cC, { id: 'bwSQI0' }),
                      }),
                  (0, K.jsx)(j.Z, {
                    disabled: R,
                    variant: 'outlined',
                    onClick: function () {
                      O(l, I, r.name, 'dashboard');
                    },
                    children: (0, K.jsx)(o.cC, { id: 'OsyKSt' }),
                  }),
                ],
              }),
            ],
          });
        },
        Xt = function (e) {
          var t,
            r = e.reserve,
            s = e.underlyingBalance,
            a = e.underlyingBalanceUSD,
            l = e.usageAsCollateralEnabledOnUser,
            c = e.underlyingAsset,
            p = (0, N.HT)().user,
            x = (0, d.Y)(
              (0, u.N)(function (e) {
                return [e.currentMarketData, e.currentMarket];
              })
            ),
            b = (0, n.Z)(x, 2),
            h = b[0],
            v = b[1],
            y = (0, ne.vR)(),
            f = y.openSupply,
            g = y.openSwap,
            w = y.openWithdraw,
            O = y.openCollateralChange,
            C = (0, T.ov)().debtCeiling,
            k = xt.cr.liquiditySwap(h),
            D = r.symbol,
            P = r.iconSymbol,
            Z = r.name,
            S = r.supplyAPY,
            B = r.isIsolated,
            A = r.aIncentivesData,
            I = r.aTokenAddress,
            E = r.isFrozen,
            U = r.isActive,
            M = r.isPaused,
            R =
              !!p &&
              !C.isMaxed &&
              '0' !== r.reserveLiquidationThreshold &&
              ((!r.isIsolated && !p.isInIsolationMode) ||
                (null === (t = p.isolatedReserve) || void 0 === t ? void 0 : t.underlyingAsset) ===
                  r.underlyingAsset ||
                (r.isIsolated && '0' === p.totalCollateralMarketReferenceCurrency)),
            F = !U || M || 'stETH' == r.symbol,
            L = !U || M,
            Y = !U || E || M;
          return (0, K.jsxs)(ee.o, {
            symbol: D,
            iconSymbol: P,
            name: Z,
            underlyingAsset: c,
            currentMarket: v,
            frozen: r.isFrozen,
            showSupplyCapTooltips: !0,
            showDebtCeilingTooltips: !0,
            showExternalIncentivesTooltips: (0, oe.f8)(r.symbol, v, m.UQ.supply),
            children: [
              (0, K.jsx)(Ie, {
                title: (0, K.jsx)(o.cC, { id: 'zmTPiV' }),
                value: Number(s),
                subValue: Number(a),
                disabled: 0 === Number(s),
              }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(o.cC, { id: 'qB4kPi' }),
                align: 'flex-start',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(ue.J, {
                  value: Number(S),
                  incentives: A,
                  address: I,
                  symbol: D,
                  variant: 'secondary14',
                  market: v,
                  protocolAction: m.UQ.supply,
                }),
              }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(o.cC, { id: 'X3Pp6x' }),
                align: B ? 'flex-start' : 'center',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(Ht, {
                  disabled: r.isPaused,
                  isIsolated: B,
                  usageAsCollateralEnabledOnUser: l,
                  canBeEnabledAsCollateral: R,
                  onToggleSwitch: function () {
                    return O(c, v, r.name, 'dashboard', l);
                  },
                }),
              }),
              (0, K.jsxs)(i.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 5,
                },
                children: [
                  k
                    ? (0, K.jsx)(j.Z, {
                        disabled: F,
                        variant: 'contained',
                        onClick: function () {
                          return g(c);
                        },
                        fullWidth: !0,
                        children: (0, K.jsx)(o.cC, { id: 'vH2C/2' }),
                      })
                    : (0, K.jsx)(j.Z, {
                        disabled: Y,
                        variant: 'contained',
                        onClick: function () {
                          return f(c, v, r.name, 'dashboard');
                        },
                        fullWidth: !0,
                        children: (0, K.jsx)(o.cC, { id: 'bwSQI0' }),
                      }),
                  (0, K.jsx)(j.Z, {
                    disabled: L,
                    variant: 'outlined',
                    onClick: function () {
                      return w(c, v, r.name, 'dashboard');
                    },
                    sx: { ml: 1.5 },
                    fullWidth: !0,
                    children: (0, K.jsx)(o.cC, { id: 'OsyKSt' }),
                  }),
                ],
              }),
            ],
          });
        };
      function qt(e, t) {
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
      function Gt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qt(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : qt(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Qt = [
          { title: (0, K.jsx)(o.cC, { id: 'bUUVED' }), sortKey: 'symbol' },
          { title: (0, K.jsx)(o.cC, { id: 'fsBGk0' }, 'Balance'), sortKey: 'underlyingBalance' },
          { title: (0, K.jsx)(o.cC, { id: 'rSayea' }, 'APY'), sortKey: 'supplyAPY' },
          {
            title: (0, K.jsx)(
              Mt,
              {
                event: { eventName: w.vh.TOOL_TIP, eventParams: { tooltip: 'Collateral Switch' } },
                text: (0, K.jsx)(o.cC, { id: '62Xcjh' }),
                variant: 'subheader2',
              },
              'Collateral'
            ),
            sortKey: 'usageAsCollateralEnabledOnUser',
          },
        ],
        Jt = function () {
          var e = (0, N.HT)(),
            t = e.user,
            r = e.loading,
            n = (0, d.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            i = (0, v.Z)(),
            l = (0, y.Z)(i.breakpoints.down('xsm')),
            c = (0, a.useState)(''),
            u = c[0],
            p = c[1],
            x = (0, a.useState)(!1),
            b = x[0],
            h = x[1],
            m = (0, a.useState)(!1),
            j = m[0],
            f = m[1],
            g =
              (null === t || void 0 === t
                ? void 0
                : t.userReservesData
                    .filter(function (e) {
                      return '0' !== e.underlyingBalance;
                    })
                    .map(function (e) {
                      return Gt(
                        Gt({}, e),
                        {},
                        {
                          supplyAPY: e.reserve.supplyAPY,
                          reserve: Gt(
                            Gt({}, e.reserve),
                            e.reserve.isWrappedBaseAsset
                              ? (0, I.QD)({
                                  symbol: n.baseAssetSymbol,
                                  underlyingAsset: C.hP.toLowerCase(),
                                })
                              : {}
                          ),
                        }
                      );
                    })) || [],
            O = V(b, u, 'position', g),
            k = function () {
              return (0, K.jsxs)(B.u, {
                children: [
                  Qt.map(function (e) {
                    return (0, K.jsx)(
                      Z.h,
                      {
                        isRow: 'symbol' === e.sortKey,
                        maxWidth: 'symbol' === e.sortKey ? F : void 0,
                        children: (0, K.jsx)(S.M, {
                          sortName: u,
                          sortDesc: b,
                          setSortName: p,
                          setSortDesc: h,
                          sortKey: e.sortKey,
                          source: 'Supplied Positions Dashboard',
                          children: e.title,
                        }),
                      },
                      e.sortKey
                    );
                  }),
                  (0, K.jsx)(X, { isColumnHeader: !0 }),
                ],
              });
            };
          return r
            ? (0, K.jsx)(re, {
                title: (0, K.jsx)(o.cC, { id: 'tt5yma' }),
                head: Qt.map(function (e) {
                  return e.title;
                }),
              })
            : (0, K.jsx)(R.l, {
                tooltipOpen: j,
                titleComponent: (0, K.jsx)(s.Z, {
                  component: 'div',
                  variant: 'h3',
                  sx: { mr: 4 },
                  children: (0, K.jsx)(o.cC, { id: 'tt5yma' }),
                }),
                localStorageName: 'suppliedAssetsDashboardTableCollapse',
                noData: !O.length,
                topInfo: (0, K.jsx)(K.Fragment, {
                  children:
                    !!O.length &&
                    (0, K.jsxs)(K.Fragment, {
                      children: [
                        (0, K.jsx)(pt, {
                          title: (0, K.jsx)(o.cC, { id: 'fsBGk0' }),
                          value: (null === t || void 0 === t ? void 0 : t.totalLiquidityUSD) || 0,
                        }),
                        (0, K.jsx)(pt, {
                          title: (0, K.jsx)(o.cC, { id: 'rSayea' }),
                          value: (null === t || void 0 === t ? void 0 : t.earnedAPY) || 0,
                          percent: !0,
                          tooltip: (0, K.jsx)(Vt, {
                            setOpen: f,
                            event: {
                              eventName: w.vh.TOOL_TIP,
                              eventParams: { tooltip: 'Total Supplied APY' },
                            },
                          }),
                        }),
                        (0, K.jsx)(pt, {
                          title: (0, K.jsx)(o.cC, { id: '62Xcjh' }),
                          value: (null === t || void 0 === t ? void 0 : t.totalCollateralUSD) || 0,
                          tooltip: (0, K.jsx)(Ft, {
                            setOpen: f,
                            event: {
                              eventName: w.vh.TOOL_TIP,
                              eventParams: { tooltip: 'Total Supplied Collateral' },
                            },
                          }),
                        }),
                      ],
                    }),
                }),
                children: O.length
                  ? (0, K.jsxs)(K.Fragment, {
                      children: [
                        !l && (0, K.jsx)(k, {}),
                        O.map(function (e) {
                          return (0, K.jsx)(
                            a.Fragment,
                            {
                              children: (0, K.jsx)(T.hv, {
                                asset: e.reserve,
                                children: l ? (0, K.jsx)(Xt, Gt({}, e)) : (0, K.jsx)(Kt, Gt({}, e)),
                              }),
                            },
                            e.underlyingAsset
                          );
                        }),
                      ],
                    })
                  : (0, K.jsx)(tt.N, { text: (0, K.jsx)(o.cC, { id: 'W5hVah' }) }),
              });
        },
        $t = r(70794),
        er = r(43666),
        tr = r(50060),
        rr = r(50480),
        nr = r(69368),
        or = r(56365),
        ir = r(12523),
        sr = function () {
          var e = (0, d.Y)(function (e) {
            return e.currentNetworkConfig;
          });
          return (0, K.jsx)(ir.y, {
            title: 'Get free assets to test the Aave Protocol',
            children: (0, K.jsx)(j.Z, {
              startIcon: (0, K.jsx)('img', {
                src: e.networkLogoPath,
                alt: e.name,
                style: { width: 14, height: 14 },
              }),
              endIcon: (0, K.jsx)(ae.Z, {
                sx: { width: 14, height: 14 },
                children: (0, K.jsx)(or.Z, {}),
              }),
              component: g.rU,
              href: g.Z6.faucet,
              variant: 'outlined',
              size: 'small',
              children: (0, K.jsx)(s.Z, {
                variant: 'buttonS',
                children: (0, K.jsx)(o.cC, { id: 'xXYpZl', values: { 0: e.name } }),
              }),
            }),
          });
        },
        ar = function (e) {
          var t = e.bridge;
          return t
            ? (0, K.jsx)(j.Z, {
                startIcon: (0, K.jsx)('img', {
                  src: t.icon,
                  alt: t.name,
                  style: { width: 14, height: 14 },
                }),
                endIcon: (0, K.jsx)(ae.Z, {
                  sx: { width: 14, height: 14 },
                  children: (0, K.jsx)(or.Z, {}),
                }),
                component: g.rU,
                size: 'small',
                variant: 'outlined',
                href: t.url || '',
                children: (0, K.jsx)(s.Z, { variant: 'buttonS', children: t.name }),
              })
            : null;
        },
        lr = r(32250),
        cr = function (e) {
          var t = e.value,
            r = e.onClick,
            n = e.localStorageName,
            s = e.bridge,
            a = (0, d.Y)(function (e) {
              return e.trackEvent;
            });
          return (0, K.jsxs)(i.Z, {
            sx: {
              display: 'flex',
              alignItems: { xs: 'flex-start', xsm: 'center' },
              justifyContent: 'space-between',
              flexDirection: { xs: 'column-reverse', xsm: 'row' },
              px: { xs: 4, xsm: 6 },
              py: 2,
              pl: { xs: '18px', xsm: '27px' },
            },
            children: [
              (0, K.jsx)(rr.Z, {
                sx: { mt: { xs: s ? 2 : 0, xsm: 0 } },
                control: (0, K.jsx)(nr.Z, { sx: { p: '6px' } }),
                checked: t,
                onChange: function () {
                  a(w.h1.SHOW_ASSETS_0_BALANCE, {}), (0, lr.e)(t, r, n);
                },
                label: (0, K.jsx)(o.cC, { id: 'rcT+yy' }),
              }),
              (xt.aV || xt.p8) && (0, K.jsx)(sr, {}),
              !xt.p8 && (0, K.jsx)(ar, { bridge: s }),
            ],
          });
        },
        dr = r(58364),
        ur = r(71738),
        pr = r(18972),
        xr = r(59334),
        br = r(88178),
        hr = r(6308),
        mr = r(64343),
        vr = function (e) {
          var t = e.isIsolated,
            r = e.usageAsCollateralEnabled,
            n = function () {
              return r && !t
                ? (0, K.jsx)(ae.Z, {
                    sx: { color: 'success.main', fontSize: { xs: '20px', xsm: '24px' } },
                    children: (0, K.jsx)(mr.Z, {}),
                  })
                : r && t
                  ? null
                  : (0, K.jsx)(hr.J, { variant: 'main14', color: 'text.secondary' });
            };
          return (0, K.jsx)(i.Z, {
            sx: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
            children: t ? (0, K.jsx)(zt, { children: (0, K.jsx)(n, {}) }) : (0, K.jsx)(n, {}),
          });
        };
      function yr(e, t) {
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
      function jr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? yr(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : yr(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var fr = function (e) {
          var t = (0, v.Z)(),
            r = (0, y.Z)(t.breakpoints.down('xsm')),
            n = (0, T.ov)().supplyCap,
            o = (0, er.P)(),
            i = e.isActive,
            s = e.isFreezed,
            a = e.walletBalance,
            l = e.underlyingAsset,
            c = o.find(function (e) {
              return e.tokenOut.underlyingAsset === l;
            }),
            d = c && '0' !== e.walletBalances[c.tokenIn.underlyingAsset.toLowerCase()].amount,
            u = !i || s || (Number(a) <= 0 && !d) || n.isMaxed,
            p = jr(
              jr({}, e),
              {},
              {
                disableSupply: u,
                canSupplyAsWrappedToken: null !== d && void 0 !== d && d,
                walletBalancesMap: e.walletBalances,
              }
            );
          return r ? (0, K.jsx)(wr, jr({}, p)) : (0, K.jsx)(gr, jr({}, p));
        },
        gr = function (e) {
          var t = e.symbol,
            r = e.iconSymbol,
            n = e.name,
            s = e.walletBalance,
            l = e.walletBalanceUSD,
            c = e.supplyCap,
            u = e.totalLiquidity,
            p = e.supplyAPY,
            x = e.aIncentivesData,
            b = e.aTokenAddress,
            h = e.underlyingAsset,
            v = e.isIsolated,
            y = e.usageAsCollateralEnabledOnUser,
            f = e.detailsAddress,
            O = e.disableSupply,
            C = e.canSupplyAsWrappedToken,
            k = e.walletBalancesMap,
            D = (0, d.Y)(function (e) {
              return e.currentMarketData;
            }),
            P = (0, d.Y)(function (e) {
              return e.currentMarket;
            }),
            S = (0, er.P)(),
            B = (0, ne.vR)(),
            A = B.openSupply,
            I = B.openSwitch,
            E = (0, T.ov)(),
            M = E.supplyCap,
            R = E.debtCeiling,
            N = M.isMaxed,
            F = (0, d.Y)(function (e) {
              return e.trackEvent;
            }),
            L = (0, a.useState)(null),
            Y = L[0],
            V = L[1],
            W = Boolean(Y),
            _ = S.find(function (e) {
              return e.tokenOut.underlyingAsset === h;
            });
          return (0, K.jsxs)(Be, {
            symbol: t,
            iconSymbol: r,
            name: n,
            detailsAddress: f,
            'data-cy': 'dashboardSupplyListItem_'.concat(t.toUpperCase()),
            currentMarket: P,
            showDebtCeilingTooltips: !0,
            showExternalIncentivesTooltips: (0, oe.f8)(t, P, m.UQ.supply),
            children: [
              C && _ && '0' === s
                ? (0, K.jsx)(Z.h, {
                    children: (0, K.jsx)(le.a, {
                      tooltipContent: (0, K.jsx)(br.C, {
                        decimals: _.tokenIn.decimals,
                        tokenWrapperAddress: _.tokenWrapperAddress,
                        tokenInSymbol: _.tokenIn.symbol,
                        tokenOutSymbol: _.tokenOut.symbol,
                      }),
                      children: (0, K.jsxs)(i.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: [
                          (0, K.jsx)(ie.B, {
                            value: 0,
                            variant: 'secondary14',
                            sx: { mb: '2px' },
                            symbolsColor: 'common.white',
                          }),
                          (0, K.jsxs)(Ue.Z, {
                            direction: 'row',
                            alignItems: 'center',
                            children: [
                              (0, K.jsx)(De.T1, { sx: { fontSize: '14px', mr: 1 }, symbol: 'DAI' }),
                              (0, K.jsx)(ie.B, {
                                value: k[_.tokenIn.underlyingAsset.toLowerCase()].amount,
                                visibleDecimals: 2,
                                variant: 'secondary12',
                                color: 'text.secondary',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  })
                : (0, K.jsx)(Ae.k, {
                    symbol: t,
                    value: Number(s),
                    subValue: l,
                    withTooltip: !0,
                    disabled: 0 === Number(s) || N,
                    capsComponent: (0, K.jsx)(de, {
                      capType: U.R.supplyCap,
                      capAmount: c,
                      totalAmount: u,
                      withoutText: !0,
                    }),
                  }),
              (0, K.jsx)(pe, {
                value: Number(p),
                market: P,
                protocolAction: m.UQ.supply,
                address: b,
                incentives: x,
                symbol: t,
              }),
              (0, K.jsx)(Z.h, {
                children: R.isMaxed
                  ? (0, K.jsx)(hr.J, { variant: 'main14', color: 'text.secondary' })
                  : (0, K.jsx)(vr, { isIsolated: v, usageAsCollateralEnabled: y }),
              }),
              (0, K.jsxs)(X, {
                children: [
                  (0, K.jsx)(j.Z, {
                    disabled: O,
                    variant: 'contained',
                    onClick: function () {
                      A(h, P, n, 'dashboard');
                    },
                    children: (0, K.jsx)(o.cC, { id: 'bwSQI0' }),
                  }),
                  (0, K.jsx)(j.Z, {
                    id: 'supply-extra-button',
                    sx: { minWidth: 0, px: 4 },
                    variant: 'outlined',
                    onClick: function (e) {
                      V(e.currentTarget);
                    },
                    'aria-controls': W ? 'basic-menu' : void 0,
                    'aria-haspopup': 'true',
                    'aria-expanded': W ? 'true' : void 0,
                    children: (0, K.jsx)(o.cC, { id: '1bpx9A' }),
                  }),
                  (0, K.jsxs)(ot.Z, {
                    id: 'supply-item-extra-menu',
                    anchorEl: Y,
                    open: W,
                    MenuListProps: { 'aria-labelledby': 'supply-extra-button', sx: { py: 0 } },
                    onClose: function () {
                      V(null);
                    },
                    keepMounted: !0,
                    PaperProps: { sx: { minWidth: '120px', py: 0 } },
                    children: [
                      (0, K.jsxs)(pr.Z, {
                        sx: { gap: 2 },
                        onClick: function () {
                          I(h), V(null);
                        },
                        disabled: !xt.cr.switch(D),
                        children: [
                          (0, K.jsx)(ae.Z, { fontSize: 'small', children: (0, K.jsx)(dr.Z, {}) }),
                          (0, K.jsx)(xr.Z, { children: 'Switch' }),
                        ],
                      }),
                      (0, K.jsxs)(pr.Z, {
                        sx: { gap: 2 },
                        component: g.rU,
                        href: g.Z6.reserveOverview(f, P),
                        onClick: function () {
                          F(w.h1.DETAILS_NAVIGATION, {
                            type: 'Button',
                            market: P,
                            assetName: n,
                            asset: h,
                          }),
                            V(null);
                        },
                        children: [
                          (0, K.jsx)(ae.Z, { fontSize: 'small', children: (0, K.jsx)(ur.Z, {}) }),
                          (0, K.jsx)(xr.Z, { children: 'Details' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        wr = function (e) {
          var t = e.symbol,
            r = e.iconSymbol,
            n = e.name,
            s = e.walletBalance,
            a = e.walletBalanceUSD,
            l = e.supplyCap,
            c = e.totalLiquidity,
            u = e.supplyAPY,
            p = e.aIncentivesData,
            x = e.aTokenAddress,
            b = e.isIsolated,
            h = e.usageAsCollateralEnabledOnUser,
            v = e.underlyingAsset,
            y = e.detailsAddress,
            f = e.disableSupply,
            w = e.canSupplyAsWrappedToken,
            O = e.walletBalancesMap,
            C = (0, d.Y)(function (e) {
              return e.currentMarket;
            }),
            k = (0, ne.vR)().openSupply,
            D = (0, er.P)(),
            P = (0, T.ov)().supplyCap.isMaxed,
            Z = D.find(function (e) {
              return e.tokenOut.underlyingAsset === v;
            });
          return (0, K.jsxs)(ee.o, {
            symbol: t,
            iconSymbol: r,
            name: n,
            underlyingAsset: v,
            currentMarket: C,
            showDebtCeilingTooltips: !0,
            showExternalIncentivesTooltips: (0, oe.f8)(t, C, m.UQ.supply),
            children: [
              w && Z && '0' === s
                ? (0, K.jsx)($.X, {
                    caption: (0, K.jsx)(o.cC, { id: 'zmTPiV' }),
                    align: 'flex-start',
                    captionVariant: 'description',
                    mb: 2,
                    children: (0, K.jsx)(le.a, {
                      tooltipContent: (0, K.jsx)(br.C, {
                        decimals: Z.tokenIn.decimals,
                        tokenWrapperAddress: Z.tokenWrapperAddress,
                        tokenInSymbol: Z.tokenIn.symbol,
                        tokenOutSymbol: Z.tokenOut.symbol,
                      }),
                      children: (0, K.jsxs)(i.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: [
                          (0, K.jsx)(ie.B, {
                            value: 0,
                            variant: 'secondary14',
                            sx: { mb: '2px' },
                            symbolsColor: 'common.white',
                          }),
                          (0, K.jsxs)(Ue.Z, {
                            direction: 'row',
                            alignItems: 'center',
                            children: [
                              (0, K.jsx)(De.T1, { sx: { fontSize: '14px', mr: 1 }, symbol: 'DAI' }),
                              (0, K.jsx)(ie.B, {
                                value: O[Z.tokenIn.underlyingAsset.toLowerCase()].amount,
                                visibleDecimals: 2,
                                variant: 'secondary12',
                                color: 'text.secondary',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  })
                : (0, K.jsx)(Ie, {
                    title: (0, K.jsx)(o.cC, { id: 'zmTPiV' }),
                    value: Number(s),
                    subValue: a,
                    disabled: 0 === Number(s) || P,
                    capsComponent: (0, K.jsx)(de, {
                      capType: U.R.supplyCap,
                      capAmount: l,
                      totalAmount: c,
                      withoutText: !0,
                    }),
                  }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(o.cC, { id: 'qB4kPi' }),
                align: 'flex-start',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(ue.J, {
                  value: Number(u),
                  incentives: p,
                  address: x,
                  symbol: t,
                  variant: 'secondary14',
                  market: C,
                  protocolAction: m.UQ.supply,
                }),
              }),
              (0, K.jsx)($.X, {
                caption: (0, K.jsx)(o.cC, { id: 'LL0zks' }),
                align: 'flex-start',
                captionVariant: 'description',
                mb: 2,
                children: (0, K.jsx)(vr, { isIsolated: b, usageAsCollateralEnabled: h }),
              }),
              (0, K.jsxs)(i.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 5,
                },
                children: [
                  (0, K.jsx)(j.Z, {
                    disabled: f,
                    variant: 'contained',
                    onClick: function () {
                      return k(v, C, n, 'dashboard');
                    },
                    sx: { mr: 1.5 },
                    fullWidth: !0,
                    children: (0, K.jsx)(o.cC, { id: 'bwSQI0' }),
                  }),
                  (0, K.jsx)(j.Z, {
                    variant: 'outlined',
                    component: g.rU,
                    href: g.Z6.reserveOverview(y, C),
                    fullWidth: !0,
                    children: (0, K.jsx)(o.cC, { id: 'URmyfc' }),
                  }),
                ],
              }),
            ],
          });
        },
        Or = r(35490);
      function Cr(e, t) {
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
      function kr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Cr(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Cr(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Dr = [
          { title: (0, K.jsx)(o.cC, { id: 'GX8GKD' }, 'assets'), sortKey: 'symbol' },
          { title: (0, K.jsx)(o.cC, { id: 'JoMQnI' }, 'Wallet balance'), sortKey: 'walletBalance' },
          { title: (0, K.jsx)(o.cC, { id: 'rSayea' }, 'APY'), sortKey: 'supplyAPY' },
          {
            title: (0, K.jsx)(o.cC, { id: 'LL0zks' }, 'Can be collateral'),
            sortKey: 'usageAsCollateralEnabledOnUser',
          },
        ],
        Pr = function () {
          var e = (0, d.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            t = (0, d.Y)(function (e) {
              return e.currentChainId;
            }),
            r = (0, d.Y)(function (e) {
              return e.currentMarketData;
            }),
            n = (0, d.Y)(function (e) {
              return e.currentMarket;
            }),
            l = (0, N.HT)(),
            c = l.user,
            u = l.reserves,
            p = l.marketReferencePriceInUsd,
            x = l.loading,
            b = (0, er.P)(),
            h = (0, tr.P)(r),
            m = h.walletBalances,
            j = h.loading,
            f = (0, v.Z)(),
            w = (0, y.Z)(f.breakpoints.down('xsm')),
            O = (0, a.useState)(''),
            P = O[0],
            U = O[1],
            M = (0, a.useState)(!1),
            L = M[0],
            Y = M[1],
            W = e.bridge,
            _ = e.isTestnet,
            z = e.baseAssetSymbol,
            H = e.name,
            q = 'showSupplyZeroAssets',
            G = (0, a.useState)('true' === localStorage.getItem(q)),
            Q = G[0],
            J = G[1],
            $ = u
              .filter(function (e) {
                return (
                  !(e.isFrozen || e.isPaused) && !(0, E.F$)({ symbol: e.symbol, currentMarket: n })
                );
              })
              .map(function (e) {
                var t,
                  r,
                  n = null === (t = m[e.underlyingAsset]) || void 0 === t ? void 0 : t.amount,
                  o = null === (r = m[e.underlyingAsset]) || void 0 === r ? void 0 : r.amountUSD,
                  i = (0, k.hE)(n);
                '0' !== e.supplyCap &&
                  (i = $t.O.min(
                    i,
                    new $t.O(e.supplyCap).minus(e.totalLiquidity).multipliedBy('0.995')
                  ));
                var s = (0, k.hE)(i)
                    .multipliedBy(e.priceInMarketReferenceCurrency)
                    .multipliedBy(p)
                    .shiftedBy(-D.$3)
                    .toString(),
                  a = e.isIsolated,
                  l =
                    null === c || void 0 === c
                      ? void 0
                      : c.userReservesData.find(function (t) {
                          return t.usageAsCollateralEnabledOnUser && t.reserve.id !== e.id;
                        }),
                  d =
                    null !== c && void 0 !== c && c.isInIsolationMode
                      ? !!a && !l
                      : '0' !== e.reserveLiquidationThreshold && (!a || (a && !l));
                if (e.isWrappedBaseAsset) {
                  var u,
                    x,
                    b,
                    h = (0, k.hE)(
                      null === (u = m[C.hP.toLowerCase()]) || void 0 === u ? void 0 : u.amount
                    );
                  '0' !== e.supplyCap &&
                    (h = $t.O.min(
                      h,
                      new $t.O(e.supplyCap).minus(e.totalLiquidity).multipliedBy('0.995')
                    ));
                  var v = (0, k.hE)(h)
                    .multipliedBy(e.priceInMarketReferenceCurrency)
                    .multipliedBy(p)
                    .shiftedBy(-D.$3)
                    .toString();
                  return [
                    kr(
                      kr(
                        kr({}, e),
                        {},
                        { reserve: e, underlyingAsset: C.hP.toLowerCase() },
                        (0, I.QD)({ symbol: z, underlyingAsset: C.hP.toLowerCase() })
                      ),
                      {},
                      {
                        walletBalance:
                          null === (x = m[C.hP.toLowerCase()]) || void 0 === x ? void 0 : x.amount,
                        walletBalanceUSD:
                          null === (b = m[C.hP.toLowerCase()]) || void 0 === b
                            ? void 0
                            : b.amountUSD,
                        availableToDeposit: h.toString(),
                        availableToDepositUSD: v,
                        usageAsCollateralEnabledOnUser: d,
                        detailsAddress: e.underlyingAsset,
                        id: e.id + 'base',
                      }
                    ),
                    kr(
                      kr({}, e),
                      {},
                      {
                        reserve: e,
                        walletBalance: n,
                        walletBalanceUSD: o,
                        availableToDeposit: i.toNumber() <= 0 ? '0' : i.toString(),
                        availableToDepositUSD: Number(s) <= 0 ? '0' : s.toString(),
                        usageAsCollateralEnabledOnUser: d,
                        detailsAddress: e.underlyingAsset,
                      }
                    ),
                  ];
                }
                return kr(
                  kr({}, e),
                  {},
                  {
                    reserve: e,
                    walletBalance: n,
                    walletBalanceUSD: o,
                    availableToDeposit: i.toNumber() <= 0 ? '0' : i.toString(),
                    availableToDepositUSD: Number(s) <= 0 ? '0' : s.toString(),
                    usageAsCollateralEnabledOnUser: d,
                    detailsAddress: e.underlyingAsset,
                  }
                );
              })
              .flat(),
            ee = $.sort(function (e, t) {
              return +e.walletBalanceUSD > +t.walletBalanceUSD ? -1 : 1;
            }),
            te = ee.filter(function (e) {
              var t;
              if ('0' !== e.availableToDepositUSD) return !0;
              var r = b.find(function (t) {
                return t.tokenOut.underlyingAsset === e.underlyingAsset;
              });
              return (
                !!r &&
                '0' !==
                  (null === (t = m[r.tokenIn.underlyingAsset]) || void 0 === t ? void 0 : t.amount)
              );
            }),
            ne = Q ? ee : te.length >= 1 ? te : ee,
            oe = V(L, P, 'assets', ne),
            ie = function () {
              return (0, K.jsxs)(B.u, {
                children: [
                  Dr.map(function (e) {
                    return (0, K.jsx)(
                      Z.h,
                      {
                        isRow: 'symbol' === e.sortKey,
                        maxWidth: 'symbol' === e.sortKey ? F : void 0,
                        overFlow: 'visible',
                        children: (0, K.jsx)(S.M, {
                          sortName: P,
                          sortDesc: L,
                          setSortName: U,
                          setSortDesc: Y,
                          sortKey: e.sortKey,
                          source: 'Supplies Dashbaord',
                          children: e.title,
                        }),
                      },
                      e.sortKey
                    );
                  }),
                  (0, K.jsx)(X, { isColumnHeader: !0 }),
                ],
              });
            };
          if (x || j)
            return (0, K.jsx)(re, {
              head: Dr.map(function (e) {
                return e.title;
              }),
              title: (0, K.jsx)(o.cC, { id: 'Fjw9N+' }),
              withTopMargin: !0,
            });
          var se = !$.length;
          return (0, K.jsx)(R.l, {
            titleComponent: (0, K.jsx)(s.Z, {
              component: 'div',
              variant: 'h3',
              sx: { mr: 4 },
              children: (0, K.jsx)(o.cC, { id: 'Fjw9N+' }),
            }),
            localStorageName: 'supplyAssetsDashboardTableCollapse',
            withTopMargin: !0,
            noData: se,
            subChildrenComponent: (0, K.jsxs)(K.Fragment, {
              children: [
                (0, K.jsx)(i.Z, {
                  sx: { px: 6 },
                  children:
                    null !== c && void 0 !== c && c.isInIsolationMode
                      ? (0, K.jsx)(A.v, {
                          severity: 'warning',
                          children: (0, K.jsx)(o.cC, {
                            id: 'BNL4Ep',
                            components: {
                              0: (0, K.jsx)(g.rU, {
                                href: 'https://docs.aave.com/faq/',
                                target: '_blank',
                                rel: 'noopener',
                              }),
                            },
                          }),
                        })
                      : 0 === te.length &&
                        (_
                          ? (0, K.jsxs)(A.v, {
                              severity: 'info',
                              children: [
                                (0, K.jsx)(o.cC, { id: '5JSSxX', values: { networkName: H } }),
                                ' ',
                                (0, K.jsx)(g.rU, {
                                  href: g.Z6.faucet,
                                  style: { fontWeight: 400 },
                                  children: (0, K.jsx)(o.cC, {
                                    id: 'CtGlFb',
                                    values: { networkName: H },
                                  }),
                                }),
                              ],
                            })
                          : (0, K.jsx)(Or.K, { name: H, bridge: W, chainId: t })),
                }),
                te.length >= 1 &&
                  (0, K.jsx)(cr, { value: Q, onClick: J, localStorageName: q, bridge: W }),
              ],
            }),
            children: (0, K.jsxs)(K.Fragment, {
              children: [
                !w && !!oe && !se && (0, K.jsx)(ie, {}),
                oe.map(function (e) {
                  return (0, K.jsx)(
                    a.Fragment,
                    {
                      children: (0, K.jsx)(T.hv, {
                        asset: e.reserve,
                        children: (0, a.createElement)(
                          fr,
                          kr(kr({}, e), {}, { key: e.id, walletBalances: m })
                        ),
                      }),
                    },
                    e.underlyingAsset
                  );
                }),
              ],
            }),
          });
        },
        Zr = function (e) {
          var t = e.isBorrow,
            r = (0, v.Z)().breakpoints,
            n = (0, h.Z)().currentAccount,
            s = (0, f.useRouter)(),
            a = (0, d.Y)(function (e) {
              return e.trackEvent;
            }),
            l = (0, d.Y)(function (e) {
              return e.currentMarketData;
            }),
            c = (0, y.Z)(r.up('lg')),
            u = c ? 'calc(50% - 8px)' : '100%',
            p = (0, y.Z)(r.down('lg'));
          return (0, K.jsxs)(i.Z, {
            children: [
              l.chainId === m.a_.polygon && !l.v3,
              (0, K.jsxs)(i.Z, {
                sx: {
                  display: c ? 'flex' : 'block',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                },
                children: [
                  (0, K.jsxs)(i.Z, {
                    sx: {
                      position: 'relative',
                      display: { xs: t ? 'none' : 'block', lg: 'block' },
                      width: u,
                    },
                    children: [
                      n &&
                        !t &&
                        p &&
                        (0, K.jsx)(i.Z, {
                          sx: {
                            position: { xs: 'static', md: 'relative' },
                            display: 'flex',
                            justifyContent: 'flex-end',
                            mb: { xs: 2, md: 0 },
                          },
                          children: (0, K.jsx)(j.Z, {
                            sx: {
                              position: { xs: 'static', md: 'absolute' },
                              top: { xs: 'auto', md: '-130px' },
                              right: { xs: 'auto', md: '0px' },
                            },
                            onClick: function () {
                              s.push(g.Z6.history), a(w.Bp.VIEW_TX_HISTORY);
                            },
                            component: 'a',
                            variant: 'surface',
                            size: 'small',
                            children: (0, K.jsx)(o.cC, { id: '4DMZUI' }),
                          }),
                        }),
                      (0, K.jsx)(Jt, {}),
                      (0, K.jsx)(Pr, {}),
                    ],
                  }),
                  (0, K.jsxs)(i.Z, {
                    sx: {
                      position: 'relative',
                      display: { xs: t ? 'block' : 'none', lg: 'block' },
                      width: u,
                    },
                    children: [
                      n &&
                        (0, K.jsx)(i.Z, {
                          sx: {
                            position: { xs: 'static', md: 'absolute' },
                            top: { xs: 'auto', md: p ? '-130px' : '-90px' },
                            right: { xs: 'auto', md: '0px' },
                            mb: { xs: 2, md: 0 },
                          },
                          children: (0, K.jsx)(j.Z, {
                            onClick: function () {
                              s.push(g.Z6.history), a(w.Bp.VIEW_TX_HISTORY);
                            },
                            component: 'a',
                            variant: 'surface',
                            size: 'small',
                            children: (0, K.jsx)(o.cC, { id: '4DMZUI' }),
                          }),
                        }),
                      (0, K.jsx)(It, {}),
                      (0, K.jsx)(He, {}),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Sr = r(41664),
        Br = r.n(Sr);
      function Ar(e, t) {
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
      function Tr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ar(Object(r), !0).forEach(function (t) {
                (0, O.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ar(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Ir = function (e) {
          var t = (0, Ke.Z)({}, e);
          return (0, K.jsx)(
            Xe.G,
            Tr(Tr({}, t), {}, { children: (0, K.jsx)(o.cC, { id: 'gvTM4B' }) })
          );
        },
        Er = r(21489),
        Ur = r(3971),
        Mr = r(12316),
        Rr = r(58941),
        Nr = r(33329),
        Fr = r(81391),
        Lr = r(15629),
        Yr = function (e) {
          var t = e.healthFactor,
            r = Number((0, k.hE)(t).toFixed(2, $t.Z.ROUND_DOWN)),
            n = +t > 10 ? 100 : 10 * +t;
          return (0, K.jsxs)(i.Z, {
            sx: { position: 'relative', mt: '33px', mb: 4 },
            children: [
              (0, K.jsx)(i.Z, {
                sx: {
                  height: '4px',
                  background: 'linear-gradient(90deg, #46BC4B 0%, #F89F1A 52.08%, #BC0000 100%)',
                  borderRadius: '1px',
                  transform: 'matrix(-1, 0, 0, 1, 0, 0)',
                },
              }),
              (0, K.jsx)(i.Z, {
                sx: {
                  position: 'absolute',
                  bottom: 'calc(100% + 6px)',
                  left: ''.concat(n > 100 ? 100 : n, '%'),
                  zIndex: 3,
                },
                children: (0, K.jsx)(i.Z, {
                  sx: function (e) {
                    return {
                      position: 'relative',
                      whiteSpace: 'nowrap',
                      '&:after': {
                        width: 0,
                        height: 0,
                        borderStyle: 'solid',
                        borderWidth: '6px 4px 0 4px',
                        borderColor: ''.concat(
                          e.palette.primary.main,
                          ' transparent transparent transparent'
                        ),
                        content: "''",
                        position: 'absolute',
                        left: n > 75 ? 'auto' : '50%',
                        right: n > 75 ? 0 : 'auto',
                        transform: n > 75 ? 'translateX(0)' : 'translateX(-50%)',
                      },
                    };
                  },
                  children: (0, K.jsx)(i.Z, {
                    sx: {
                      display: 'flex',
                      position: 'absolute',
                      left: n > 75 ? 'auto' : n < 15 ? '0' : '50%',
                      transform: n > 75 || n < 15 ? 'translateX(0)' : 'translateX(-50%)',
                      right: n > 75 ? 0 : 'auto',
                      flexDirection: 'column',
                      alignItems: n > 75 ? 'flex-end' : n < 15 ? 'flex-start' : 'center',
                      textAlign: n > 75 ? 'right' : n < 15 ? 'left' : 'center',
                      bottom: 'calc(100% + 2px)',
                    },
                    children: (0, K.jsx)(ie.B, { value: r, variant: 'main12', visibleDecimals: 2 }),
                  }),
                }),
              }),
              (0, K.jsxs)(i.Z, {
                sx: {
                  maxWidth: '20%',
                  textAlign: 'center',
                  pt: 1.5,
                  '&:after': {
                    content: "''",
                    position: 'absolute',
                    bottom: '85%',
                    left: '10%',
                    transform: 'translateX(-50%)',
                    height: '10px',
                    width: '2px',
                    bgcolor: 'error.main',
                  },
                },
                children: [
                  (0, K.jsx)(ie.B, {
                    value: 1,
                    visibleDecimals: 2,
                    color: 'error.main',
                    variant: 'subheader2',
                  }),
                  (0, K.jsx)(s.Z, {
                    sx: { display: 'flex' },
                    variant: 'helperText',
                    lineHeight: '12px',
                    color: 'error.main',
                    children: (0, K.jsx)(o.cC, { id: 'ZlsSDH' }),
                  }),
                ],
              }),
            ],
          });
        },
        Vr = function (e) {
          var t = e.topValue,
            r = e.topTitle,
            n = e.topDescription,
            o = e.children,
            a = e.bottomText,
            l = e.color;
          return (0, K.jsxs)(i.Z, {
            sx: function (e) {
              return {
                border: '1px solid '.concat(e.palette.divider),
                mb: 6,
                borderRadius: '6px',
                px: 4,
                pt: 4,
                pb: 6,
                '&:last-of-type': { mb: 0 },
              };
            },
            children: [
              (0, K.jsxs)(i.Z, {
                sx: { display: 'flex', justifyContent: 'space-between' },
                children: [
                  (0, K.jsxs)(i.Z, {
                    sx: { width: 'calc(100% - 72px)' },
                    children: [
                      (0, K.jsx)(s.Z, { variant: 'subheader1', mb: 1, children: r }),
                      (0, K.jsx)(s.Z, { variant: 'caption', color: 'text.secondary', children: n }),
                    ],
                  }),
                  (0, K.jsx)(i.Z, {
                    sx: {
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: ''.concat(l, '.main'),
                    },
                    children: t,
                  }),
                ],
              }),
              (0, K.jsx)(i.Z, { children: o }),
              (0, K.jsx)(s.Z, {
                variant: 'secondary12',
                color: 'text.secondary',
                textAlign: 'left',
                children: a,
              }),
            ],
          });
        },
        Wr = function (e) {
          var t = e.loanToValue,
            r = e.currentLoanToValue,
            n = e.currentLiquidationThreshold,
            a = e.color,
            l = (0, v.Z)().palette,
            c = (0, k.hE)(t).multipliedBy(100).precision(20, $t.O.ROUND_UP).toNumber(),
            d = (0, k.hE)(r).multipliedBy(100).precision(20, $t.O.ROUND_UP).toNumber(),
            u = (0, k.hE)(n).multipliedBy(100).precision(20, $t.O.ROUND_UP).toNumber(),
            p = 100 * Number(n);
          return (0, K.jsxs)(i.Z, {
            sx: { position: 'relative', margin: '45px 0 55px' },
            children: [
              (0, K.jsx)(i.Z, {
                sx: {
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  left: ''.concat(u > 100 ? 100 : u, '%'),
                  zIndex: 2,
                },
                children: (0, K.jsx)(i.Z, {
                  sx: {
                    position: 'relative',
                    whiteSpace: 'nowrap',
                    '&:after': {
                      content: "''",
                      position: 'absolute',
                      left: p > 75 ? 'auto' : '50%',
                      transform: p > 75 ? 'translateX(0)' : 'translateX(-50%)',
                      right: p > 75 ? 0 : 'auto',
                      bottom: '100%',
                      height: '10px',
                      width: '2px',
                      bgcolor: 'error.main',
                    },
                  },
                  children: (0, K.jsxs)(i.Z, {
                    sx: {
                      display: 'flex',
                      position: 'absolute',
                      left: p > 75 ? 'auto' : '50%',
                      transform: p > 75 ? 'translateX(0)' : 'translateX(-50%)',
                      right: p > 75 ? 0 : 'auto',
                      flexDirection: 'column',
                      alignItems: p > 75 ? 'flex-end' : 'center',
                      textAlign: p > 75 ? 'right' : 'center',
                    },
                    children: [
                      (0, K.jsx)(ie.B, {
                        value: n,
                        visibleDecimals: 2,
                        color: 'error.main',
                        variant: 'subheader2',
                        percent: !0,
                        symbolsColor: 'error.main',
                      }),
                      (0, K.jsx)(s.Z, {
                        sx: { display: 'flex' },
                        variant: 'helperText',
                        lineHeight: '12px',
                        color: 'error.main',
                        children: (0, K.jsx)(o.cC, {
                          id: '1kWUB+',
                          components: { 0: (0, K.jsx)('br', {}) },
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, K.jsx)(i.Z, {
                sx: {
                  position: 'absolute',
                  bottom: 'calc(100% + 6px)',
                  left: ''.concat(c > 100 ? 100 : c, '%'),
                  zIndex: 3,
                },
                children: (0, K.jsx)(i.Z, {
                  sx: function (e) {
                    return {
                      position: 'relative',
                      whiteSpace: 'nowrap',
                      '&:after': {
                        width: 0,
                        height: 0,
                        borderStyle: 'solid',
                        borderWidth: '6px 4px 0 4px',
                        borderColor: ''.concat(
                          e.palette.primary.main,
                          ' transparent transparent transparent'
                        ),
                        content: "''",
                        position: 'absolute',
                        left: c > 75 ? 'auto' : '50%',
                        right: c > 75 ? 0 : 'auto',
                        transform: c > 75 ? 'translateX(0)' : 'translateX(-50%)',
                      },
                    };
                  },
                  children: (0, K.jsxs)(i.Z, {
                    sx: {
                      display: 'flex',
                      position: 'absolute',
                      left: c > 75 ? 'auto' : c < 15 ? '0' : '50%',
                      transform: c > 75 || c < 15 ? 'translateX(0)' : 'translateX(-50%)',
                      right: c > 75 ? 0 : 'auto',
                      flexDirection: 'column',
                      alignItems: c > 75 ? 'flex-end' : c < 15 ? 'flex-start' : 'center',
                      textAlign: c > 75 ? 'right' : c < 15 ? 'left' : 'center',
                      bottom: 'calc(100% + 2px)',
                    },
                    children: [
                      (0, K.jsx)(ie.B, {
                        value: t,
                        percent: !0,
                        visibleDecimals: 2,
                        variant: 'main12',
                      }),
                      (0, K.jsxs)(i.Z, {
                        sx: { display: 'inline-flex', alignItems: 'center' },
                        children: [
                          (0, K.jsx)(s.Z, {
                            variant: 'helperText',
                            color: 'text.muted',
                            mr: 0.5,
                            children: (0, K.jsx)(o.cC, { id: '4HtGBb' }),
                          }),
                          (0, K.jsx)(ie.B, {
                            value: r,
                            percent: !0,
                            visibleDecimals: 2,
                            variant: 'helperText',
                            color: 'text.muted',
                            symbolsColor: 'text.muted',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, K.jsxs)(i.Z, {
                sx: {
                  height: '4px',
                  width: '100%',
                  borderRadius: '1px',
                  position: 'relative',
                  bgcolor: 'divider',
                },
                children: [
                  (0, K.jsx)(i.Z, {
                    sx: {
                      position: 'absolute',
                      left: 0,
                      height: '4px',
                      borderRadius: '1px',
                      width: ''.concat(c > 100 ? 100 : c, '%'),
                      maxWidth: '100%',
                      bgcolor: ''.concat(a, '.main'),
                      zIndex: 2,
                    },
                  }),
                  c < d &&
                    (0, K.jsx)(i.Z, {
                      sx: {
                        position: 'absolute',
                        left: 0,
                        height: '4px',
                        borderRadius: '1px',
                        width: ''.concat(d > 100 ? 100 : d, '%'),
                        maxWidth: '100%',
                        background: 'repeating-linear-gradient(-45deg, '
                          .concat(l.divider, ', ')
                          .concat(l.divider, ' 4px, ')
                          .concat(l[a].main, ' 4px, ')
                          .concat(l[a].main, ' 7px)'),
                      },
                    }),
                ],
              }),
            ],
          });
        },
        _r = function (e) {
          var t = e.open,
            r = e.setOpen,
            n = e.healthFactor,
            i = e.loanToValue,
            a = e.currentLoanToValue,
            l = e.currentLiquidationThreshold,
            c = 'success',
            u = Number(n);
          u > 1.1 && u <= 3 ? (c = 'warning') : u <= 1.1 && (c = 'error');
          var p = (0, d.Y)(function (e) {
              return e.trackEvent;
            }),
            x = 'success',
            b = 100 * Number(i),
            h = 100 * Number(a),
            m = 100 * Number(l);
          return (
            b >= Math.min(h, m) ? (x = 'error') : b > h / 2 && b < h && (x = 'warning'),
            (0, K.jsxs)(Lr.P, {
              open: t,
              setOpen: r,
              children: [
                (0, K.jsx)(s.Z, {
                  variant: 'h2',
                  mb: 6,
                  children: (0, K.jsx)(o.cC, { id: 'zpPbZl' }),
                }),
                (0, K.jsxs)(s.Z, {
                  mb: 6,
                  children: [
                    (0, K.jsx)(o.cC, { id: 'o17QVP' }),
                    ' ',
                    (0, K.jsx)(g.rU, {
                      onClick: function () {
                        p(w.vh.EXTERNAL_LINK, { Link: 'HF Risk Link' });
                      },
                      href: 'https://docs.aave.com/faq/',
                      sx: { textDecoration: 'underline' },
                      color: 'text.primary',
                      variant: 'description',
                      children: (0, K.jsx)(o.cC, { id: 'zwWKhA' }),
                    }),
                  ],
                }),
                (0, K.jsx)(Vr, {
                  topTitle: (0, K.jsx)(o.cC, { id: '7ITr5L' }),
                  topDescription: (0, K.jsx)(o.cC, { id: 'VMfYUK' }),
                  topValue: (0, K.jsx)(Rr.o, {
                    value: n,
                    variant: 'main12',
                    sx: { color: 'common.white' },
                  }),
                  bottomText: (0, K.jsx)(o.cC, { id: 'MghdTe' }),
                  color: c,
                  children: (0, K.jsx)(Yr, { healthFactor: n }),
                }),
                (0, K.jsx)(Vr, {
                  topTitle: (0, K.jsx)(o.cC, { id: 'L+8Lzs' }),
                  topDescription: (0, K.jsx)(o.cC, { id: 'firl9Q' }),
                  topValue: (0, K.jsx)(ie.B, {
                    value: i,
                    percent: !0,
                    variant: 'main12',
                    color: 'common.white',
                    symbolsColor: 'common.white',
                  }),
                  bottomText: (0, K.jsx)(o.cC, { id: 'YrDxdO' }),
                  color: x,
                  children: (0, K.jsx)(Wr, {
                    loanToValue: i,
                    currentLoanToValue: a,
                    currentLiquidationThreshold: l,
                    color: x,
                  }),
                }),
              ],
            })
          );
        },
        zr = function () {
          var e = (0, N.HT)(),
            t = e.user,
            r = e.reserves,
            l = e.loading,
            c = (0, h.Z)().currentAccount,
            p = (0, a.useState)(!1),
            x = p[0],
            b = p[1],
            f = (0, ne.vR)().openClaimRewards,
            O = (0, d.Y)(
              (0, u.N)(function (e) {
                return [
                  e.trackEvent,
                  e.currentNetworkConfig,
                  e.currentMarketData,
                  e.currentMarket,
                  (0, Mr.lY)(e),
                ];
              })
            ),
            C = (0, n.Z)(O, 5),
            D = C[0],
            P = C[1],
            Z = C[2],
            S = C[3],
            B = C[4],
            A = (0, Er.hu)(S).market,
            T = !!t && B && '' !== c && Number(t.totalLiquidityUSD) > 0,
            I = (0, v.Z)(),
            E = (0, y.Z)(I.breakpoints.down('sm')),
            U = (
              t
                ? Object.keys(t.calculatedUserIncentives).reduce(
                    function (e, n) {
                      var o = t.calculatedUserIncentives[n],
                        i = (0, k.Fv)(o.claimableRewards, o.rewardTokenDecimals),
                        s = 0;
                      if (!Z.v3 && Number(i) > 0)
                        if (Z.chainId === m.a_.mainnet) {
                          var a = r.find(function (e) {
                            return 'AAVE' === e.symbol;
                          });
                          s = a ? Number(a.priceInUSD) : 0;
                        } else
                          r.forEach(function (e) {
                            e.symbol === P.wrappedBaseAssetSymbol && (s = Number(e.priceInUSD));
                          });
                      else s = Number(o.rewardPriceFeed);
                      var l = Number(i) * s;
                      return (
                        l > 0 &&
                          (-1 === e.assets.indexOf(o.rewardTokenSymbol) &&
                            e.assets.push(o.rewardTokenSymbol),
                          (e.claimableRewardsUsd += Number(l))),
                        e
                      );
                    },
                    { claimableRewardsUsd: 0, assets: [] }
                  )
                : { claimableRewardsUsd: 0 }
            ).claimableRewardsUsd,
            M =
              '0' ===
              (null === t || void 0 === t ? void 0 : t.totalCollateralMarketReferenceCurrency)
                ? '0'
                : (0, k.hE)(
                    (null === t || void 0 === t ? void 0 : t.totalBorrowsMarketReferenceCurrency) ||
                      '0'
                  )
                    .dividedBy(
                      (null === t || void 0 === t
                        ? void 0
                        : t.totalCollateralMarketReferenceCurrency) || '1'
                    )
                    .toFixed(),
            R = E ? 'main16' : 'main21',
            F = E ? 'secondary16' : 'secondary21';
          return (0, K.jsxs)(K.Fragment, {
            children: [
              T &&
                E &&
                (0, K.jsx)(i.Z, {
                  sx: { width: '100%' },
                  children: (0, K.jsx)(Br(), {
                    href: g.Z6.migrationTool,
                    children: (0, K.jsx)(j.Z, {
                      variant: 'gradient',
                      sx: { height: '40px', width: '100%' },
                      children: (0, K.jsx)(s.Z, {
                        variant: 'buttonM',
                        children: (0, K.jsx)(o.cC, { id: '42UgDM', values: { 0: A.marketTitle } }),
                      }),
                    }),
                  }),
                }),
              (0, K.jsxs)(Nr.f, {
                titleComponent: (0, K.jsxs)(i.Z, {
                  sx: { display: 'flex', alignItems: 'center' },
                  children: [
                    (0, K.jsx)(Ur.V, {
                      pageTitle: (0, K.jsx)(o.cC, { id: '7p5kLi' }),
                      withMarketSwitcher: !0,
                      bridge: P.bridge,
                    }),
                    T &&
                      !E &&
                      (0, K.jsx)(i.Z, {
                        sx: { alignSelf: 'center', mb: 4, width: '100%' },
                        children: (0, K.jsx)(Br(), {
                          href: g.Z6.marketMigrationTool(S),
                          children: (0, K.jsx)(j.Z, {
                            variant: 'gradient',
                            sx: { height: '20px' },
                            children: (0, K.jsx)(s.Z, {
                              variant: 'buttonS',
                              'data-cy': 'migration-button',
                              children: (0, K.jsx)(o.cC, { id: 'EvECnL' }),
                            }),
                          }),
                        }),
                      }),
                  ],
                }),
                children: [
                  (0, K.jsx)(Fr.d, {
                    title: (0, K.jsx)(o.cC, { id: 'evw5ha' }),
                    loading: l,
                    hideIcon: !0,
                    children: c
                      ? (0, K.jsx)(ie.B, {
                          value: Number((null === t || void 0 === t ? void 0 : t.netWorthUSD) || 0),
                          symbol: 'USD',
                          variant: R,
                          visibleDecimals: 2,
                          compact: !0,
                          symbolsColor: '#A5A8B6',
                          symbolsVariant: F,
                        })
                      : (0, K.jsx)(hr.J, { variant: F, sx: { opacity: '0.7' } }),
                  }),
                  (0, K.jsx)(Fr.d, {
                    title: (0, K.jsxs)('div', {
                      style: { display: 'flex' },
                      children: [
                        (0, K.jsx)(o.cC, { id: 'hIS4N0' }),
                        (0, K.jsx)(Ir, {
                          event: {
                            eventName: w.vh.TOOL_TIP,
                            eventParams: { tooltip: 'NET APY: Dashboard Banner' },
                          },
                        }),
                      ],
                    }),
                    loading: l,
                    hideIcon: !0,
                    children:
                      c && t && Number(t.netWorthUSD) > 0
                        ? (0, K.jsx)(ie.B, {
                            value: t ? t.netAPY : 0,
                            variant: R,
                            visibleDecimals: 2,
                            percent: !0,
                            symbolsColor: '#A5A8B6',
                            symbolsVariant: F,
                          })
                        : (0, K.jsx)(hr.J, { variant: F, sx: { opacity: '0.7' } }),
                  }),
                  c &&
                    '-1' !== (null === t || void 0 === t ? void 0 : t.healthFactor) &&
                    (0, K.jsx)(Fr.d, {
                      title: (0, K.jsx)(i.Z, {
                        sx: { display: 'inline-flex', alignItems: 'center' },
                        children: (0, K.jsx)(o.cC, { id: '7ITr5L' }),
                      }),
                      loading: l,
                      hideIcon: !0,
                      children: (0, K.jsx)(Rr.o, {
                        value: (null === t || void 0 === t ? void 0 : t.healthFactor) || '-1',
                        variant: R,
                        onInfoClick: function () {
                          D(w.h1.VIEW_RISK_DETAILS), b(!0);
                        },
                      }),
                    }),
                  c &&
                    U > 0 &&
                    (0, K.jsx)(Fr.d, {
                      title: (0, K.jsx)(o.cC, { id: '5rsnKT' }),
                      loading: l,
                      hideIcon: !0,
                      children: (0, K.jsxs)(i.Z, {
                        sx: {
                          display: 'flex',
                          alignItems: { xs: 'flex-start', xsm: 'center' },
                          flexDirection: { xs: 'column', xsm: 'row' },
                        },
                        children: [
                          (0, K.jsx)(i.Z, {
                            sx: { display: 'inline-flex', alignItems: 'center' },
                            'data-cy': 'Claim_Box',
                            children: (0, K.jsx)(ie.B, {
                              value: U,
                              variant: R,
                              visibleDecimals: 2,
                              compact: !0,
                              symbol: 'USD',
                              symbolsColor: '#A5A8B6',
                              symbolsVariant: F,
                              'data-cy': 'Claim_Value',
                            }),
                          }),
                          (0, K.jsx)(j.Z, {
                            variant: 'gradient',
                            size: 'small',
                            onClick: function () {
                              return f();
                            },
                            sx: { minWidth: 'unset', ml: { xs: 0, xsm: 2 } },
                            'data-cy': 'Dashboard_Claim_Button',
                            children: (0, K.jsx)(o.cC, { id: 'hom7qf' }),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
              (0, K.jsx)(_r, {
                open: x,
                setOpen: b,
                healthFactor: (null === t || void 0 === t ? void 0 : t.healthFactor) || '-1',
                loanToValue: M,
                currentLoanToValue:
                  (null === t || void 0 === t ? void 0 : t.currentLoanToValue) || '0',
                currentLiquidationThreshold:
                  (null === t || void 0 === t ? void 0 : t.currentLiquidationThreshold) || '0',
              }),
            ],
          });
        };
      function Hr() {
        var e = (0, h.Z)().currentAccount,
          t = (0, d.Y)(
            (0, u.N)(function (e) {
              return [e.trackEvent, e.currentMarket];
            })
          ),
          r = (0, n.Z)(t, 2),
          b = r[0],
          m = r[1],
          v = (0, a.useState)('supply'),
          y = v[0],
          j = v[1];
        return (
          (0, a.useEffect)(
            function () {
              b('Page Viewed', { 'Page Name': 'Dashboard', Market: m });
            },
            [b]
          ),
          (0, K.jsxs)(K.Fragment, {
            children: [
              (0, K.jsx)(zr, {}),
              (0, K.jsxs)(x.O, {
                children: [
                  e &&
                    (0, K.jsx)(i.Z, {
                      sx: {
                        display: { xs: 'flex', lg: 'none' },
                        justifyContent: { xs: 'center', xsm: 'flex-start' },
                        mb: { xs: 3, xsm: 4 },
                      },
                      children: (0, K.jsxs)(c.Z, {
                        color: 'primary',
                        value: y,
                        exclusive: !0,
                        onChange: function (e, t) {
                          return j(t);
                        },
                        sx: { width: { xs: '100%', xsm: '359px' }, height: '44px' },
                        children: [
                          (0, K.jsx)(l.Z, {
                            value: 'supply',
                            disabled: 'supply' === y,
                            children: (0, K.jsx)(s.Z, {
                              variant: 'subheader1',
                              children: (0, K.jsx)(o.cC, { id: 'bwSQI0' }),
                            }),
                          }),
                          (0, K.jsx)(l.Z, {
                            value: 'borrow',
                            disabled: 'borrow' === y,
                            children: (0, K.jsx)(s.Z, {
                              variant: 'subheader1',
                              children: (0, K.jsx)(o.cC, { id: 'T6uYU2' }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  e ? (0, K.jsx)(Zr, { isBorrow: 'borrow' === y }) : (0, K.jsx)(p.w, {}),
                ],
              }),
            ],
          })
        );
      }
      Hr.getLayout = function (e) {
        return (0, K.jsx)(b.Z, { children: e });
      };
    },
    90286: function (e, t, r) {
      'use strict';
      var n = r(59499),
        o = r(4730),
        i = r(88078),
        s = r(80822),
        a = r(15861),
        l = (r(67294), r(60377)),
        c = r(32867),
        d = r(85893),
        u = ['minVal', 'maxVal', 'percentVariant', 'hyphenVariant'];
      function p(e, t) {
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
            ? p(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : p(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      t.Z = function (e) {
        var t = e.minVal,
          r = e.maxVal,
          n = e.percentVariant,
          p = e.hyphenVariant,
          b = (0, o.Z)(e, u),
          h = (0, l.HT)(),
          m = h.ghoLoadingData,
          v = h.ghoReserveData;
        if (m) return (0, d.jsx)(i.Z, { width: 70, height: 24 });
        var y = null !== t && void 0 !== t ? t : v.ghoBorrowAPYWithMaxDiscount,
          j = null !== r && void 0 !== r ? r : v.ghoVariableBorrowAPY,
          f = Number((100 * y).toFixed(2)) === Number((100 * j).toFixed(2));
        return (0, d.jsx)(s.Z, {
          sx: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
          children: f
            ? (0, d.jsx)(
                c.B,
                x(
                  {
                    compact: !0,
                    percent: !0,
                    value: y,
                    visibleDecimals: 2,
                    variant: null !== n && void 0 !== n ? n : 'h3',
                    'data-cy': 'apy',
                  },
                  b
                )
              )
            : (0, d.jsxs)(d.Fragment, {
                children: [
                  (0, d.jsx)(
                    c.B,
                    x(
                      {
                        compact: !0,
                        value: 100 * y,
                        visibleDecimals: 2,
                        variant: null !== n && void 0 !== n ? n : 'h3',
                        'data-cy': 'apy-gho-from',
                      },
                      b
                    )
                  ),
                  (0, d.jsx)(a.Z, {
                    variant: null !== p && void 0 !== p ? p : 'secondary16',
                    color: 'text.secondary',
                    sx: { mx: 0.5 },
                    children: '-',
                  }),
                  (0, d.jsx)(
                    c.B,
                    x(
                      {
                        compact: !0,
                        percent: !0,
                        value: j,
                        visibleDecimals: 2,
                        variant: null !== n && void 0 !== n ? n : 'h3',
                        'data-cy': 'apy-gho-till',
                      },
                      b
                    )
                  ),
                ],
              }),
        });
      };
    },
    73592: function (e, t, r) {
      'use strict';
      var n;
      r.d(t, {
        R: function () {
          return n;
        },
      }),
        (function (e) {
          (e.supplyCap = 'supplyCap'), (e.borrowCap = 'borrowCap');
        })(n || (n = {}));
    },
    49663: function (e, t, r) {
      'use strict';
      r.d(t, {
        B: function () {
          return y;
        },
      });
      var n = r(90116),
        o = r(57499),
        i = r(3439),
        s = r(80822),
        a = r(15861),
        l = r(34386),
        c = r(60377),
        d = r(2127),
        u = r(90286),
        p = r(32867),
        x = r(38577),
        b = r(6308),
        h = r(45640),
        m = r(1790),
        v = r(85893),
        y = function (e) {
          var t = e.value,
            r = e.useApyRange,
            y = e.rangeValues,
            j = void 0 === y ? [0, 0] : y,
            f = e.ghoRoute,
            g = e.stkAaveBalance,
            w = e.userQualifiesForDiscount,
            O = e.onMoreDetailsClick,
            C = e.withTokenIcon,
            k = void 0 !== C && C,
            D = e.forceShowTooltip,
            P = void 0 !== D && D,
            Z = e.variant,
            S = void 0 === Z ? 'secondary14' : Z,
            B = e.color,
            A = void 0 === B ? void 0 : B,
            T = (0, c.HT)().ghoReserveData,
            I = Number(g),
            E = I >= T.ghoMinDiscountTokenBalanceForDiscount,
            U = (0, v.jsx)(v.Fragment, {}),
            M = w || P;
          return (
            M &&
              (U = (0, v.jsx)(s.Z, {
                sx: {
                  py: 4,
                  px: 6,
                  fontSize: '12px',
                  lineHeight: '16px',
                  a: { fontSize: '12px', lineHeight: '16px', fontWeight: 500 },
                },
                children: (0, v.jsxs)(a.Z, {
                  variant: 'subheader2',
                  children: [
                    (0, v.jsx)(o.cC, {
                      id: 'JK9zf1',
                      values: {
                        0: E
                          ? (0, v.jsxs)(v.Fragment, {
                              children: [
                                (0, v.jsx)(p.B, {
                                  variant: 'subheader2',
                                  value: I,
                                  visibleDecimals: 2,
                                }),
                                ' ',
                              ],
                            })
                          : null,
                      },
                    }),
                    ' ',
                    (0, v.jsx)(x.rU, {
                      onClick: O,
                      href: f,
                      underline: 'always',
                      variant: 'subheader2',
                      children: (0, v.jsx)(o.cC, { id: 'zwWKhA' }),
                    }),
                  ],
                }),
              })),
            (0, v.jsxs)(s.Z, {
              sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'flex-end', xsm: 'center' },
                justifyContent: 'center',
                textAlign: 'center',
                flex: '2 1 auto',
              },
              children: [
                '-1' !== t.toString()
                  ? (0, v.jsx)(l.Z, {
                      enterTouchDelay: 0,
                      leaveTouchDelay: 0,
                      placement: 'top',
                      title: U,
                      arrow: M,
                      PopperComponent: d.E,
                      children: (0, v.jsxs)(s.Z, {
                        sx: function () {
                          return { display: 'flex', alignItems: 'center' };
                        },
                        children: [
                          k &&
                            (0, v.jsx)(h.T1, {
                              symbol: 'stkAAVE',
                              sx: { height: 14, width: 14, mr: 1 },
                            }),
                          r
                            ? (0, v.jsx)(u.Z, {
                                percentVariant: S,
                                hyphenVariant: S,
                                minVal: Math.min.apply(Math, (0, n.Z)(j)),
                                maxVal: Math.max.apply(Math, (0, n.Z)(j)),
                                color: A,
                              })
                            : (0, v.jsx)(p.B, {
                                value: t,
                                percent: !0,
                                variant: S,
                                color: A,
                                'data-cy': 'apy',
                              }),
                        ],
                      }),
                    })
                  : (0, v.jsx)(b.J, { variant: 'secondary14', color: 'text.secondary' }),
                (0, v.jsx)(m.GV, { rewardedAsset: i.ou.GHO.V_TOKEN }),
              ],
            })
          );
        };
    },
    46817: function (e, t, r) {
      'use strict';
      r.d(t, {
        Y: function () {
          return p;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(57499),
        s = r(73592),
        a = r(49212),
        l = r(85893),
        c = ['capType'];
      function d(e, t) {
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
            ? d(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var p = function (e) {
        var t = e.capType,
          r = (0, o.Z)(e, c),
          n =
            t === s.R.supplyCap
              ? (0, l.jsx)(i.cC, { id: '0wGCWc' })
              : (0, l.jsx)(i.cC, { id: 'cBc+4A' });
        return (0, l.jsx)(a.G, u(u({}, r), {}, { children: n }));
      };
    },
    83877: function (e, t, r) {
      'use strict';
      r.d(t, {
        n: function () {
          return p;
        },
        x: function () {
          return u;
        },
      });
      var n = r(59499),
        o = r(57499),
        i = r(65361),
        s = r(38577),
        a = r(49212),
        l = r(85893);
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
      function d(e) {
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
      var u = (0, l.jsx)(o.cC, {
          id: 'jFi7dz',
          components: {
            0: (0, l.jsx)(s.rU, {
              href: 'https://docs.gho.xyz/concepts/how-gho-works/interest-rate-discount-model#interest-rate-model',
              underline: 'always',
            }),
          },
        }),
        p = function (e) {
          return (0, l.jsx)(
            a.G,
            d(
              d({ event: { eventName: i.vh.TOOL_TIP, eventParams: { tooltip: 'GHO APY' } } }, e),
              {},
              { children: u }
            )
          );
        };
    },
    77571: function (e, t, r) {
      'use strict';
      r.d(t, {
        B: function () {
          return d;
        },
      });
      var n = r(59499),
        o = r(36864),
        i = r(57499),
        s = r(49212),
        a = r(85893);
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
      function c(e) {
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
        var t = (0, o.Z)({}, e);
        return (0, a.jsx)(
          s.G,
          c(
            c({}, t),
            {},
            { children: (0, a.jsx)(i.cC, { id: 'quYPUU', components: { 0: (0, a.jsx)('b', {}) } }) }
          )
        );
      };
    },
    88178: function (e, t, r) {
      'use strict';
      r.d(t, {
        C: function () {
          return x;
        },
      });
      var n = r(57499),
        o = r(80227),
        i = r(26447),
        s = r(15861),
        a = r(80822),
        l = r(88078),
        c = r(53219),
        d = r(66510),
        u = r(32867),
        p = r(85893),
        x = function (e) {
          var t = e.decimals,
            r = e.tokenWrapperAddress,
            x = e.tokenInSymbol,
            b = e.tokenOutSymbol,
            h = (0, d.v)('1', t, r),
            m = h.isLoading,
            v = h.data;
          return (0, p.jsxs)(i.Z, {
            direction: 'column',
            gap: 3,
            children: [
              (0, p.jsx)(s.Z, { variant: 'tooltip', children: (0, p.jsx)(n.cC, { id: 'kzZyM4' }) }),
              (0, p.jsxs)(i.Z, {
                direction: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  (0, p.jsx)(a.Z, {
                    children: (0, p.jsx)(s.Z, {
                      variant: 'secondary12',
                      children: (0, p.jsx)(n.cC, { id: 'sXKb3l' }),
                    }),
                  }),
                  m
                    ? (0, p.jsx)(l.Z, { variant: 'rectangular', width: 120, height: 14 })
                    : (0, p.jsxs)(i.Z, {
                        direction: 'row',
                        alignItems: 'center',
                        gap: 1,
                        children: [
                          (0, p.jsx)(u.B, {
                            value: '1',
                            visibleDecimals: 0,
                            variant: 'secondary12',
                            color: 'text.primary',
                          }),
                          (0, p.jsx)(s.Z, { variant: 'tooltip', children: x }),
                          (0, p.jsx)(c.Z, {
                            color: 'primary',
                            sx: { fontSize: '12px' },
                            children: (0, p.jsx)(o.Z, {}),
                          }),
                          (0, p.jsx)(u.B, {
                            value: v || '0',
                            visibleDecimals: 4,
                            variant: 'secondary12',
                            color: 'text.primary',
                          }),
                          (0, p.jsx)(s.Z, { variant: 'tooltip', children: b }),
                        ],
                      }),
                ],
              }),
            ],
          });
        };
    },
    56570: function (e, t, r) {
      'use strict';
      r.d(t, {
        U: function () {
          return n;
        },
      });
      var n = function (e) {
        return '' === e ? 'Disabled' : e;
      };
    },
    50060: function (e, t, r) {
      'use strict';
      r.d(t, {
        P: function () {
          return y;
        },
      });
      var n = r(80854),
        o = r(1279),
        i = r(81206),
        s = r(82403),
        a = r(70794),
        l = r(3062),
        c = r(79850),
        d = r(47892),
        u = r(59499),
        p = r(99673),
        x = r(52251),
        b = r(13441);
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
      var m = function (e, t, r) {
          var n = (0, b.z)().poolTokensBalanceService;
          return (0, p.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? h(Object(r), !0).forEach(function (t) {
                        (0, u.Z)(e, t, r[t]);
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
                  queryKey: x.B.poolTokens(t, e),
                  queryFn: function () {
                    return n.getPoolTokensBalances(e, t);
                  },
                  enabled: !!t,
                  refetchInterval: x.g,
                },
                r
              );
            }),
          });
        },
        v = function (e) {
          var t = (0, l.Y)(function (e) {
              return e.account;
            }),
            r = m(e, t),
            u = (0, d.T)(e),
            p =
              r.some(function (e) {
                return e.isLoading;
              }) ||
              u.some(function (e) {
                return e.isLoading;
              });
          return {
            walletBalances: u.map(function (t, l) {
              var d;
              return (function (e) {
                var t = e.reservesHumanized,
                  r = e.balances,
                  l = e.marketData,
                  d = (null === t || void 0 === t ? void 0 : t.reservesData) || [],
                  u = (null === t || void 0 === t ? void 0 : t.baseCurrencyData) || {
                    marketReferenceCurrencyDecimals: 0,
                    marketReferenceCurrencyPriceInUsd: '0',
                    networkBaseTokenPriceInUsd: '0',
                    networkBaseTokenPriceDecimals: 0,
                  },
                  p = !0;
                return {
                  walletBalances: (null !== r && void 0 !== r ? r : []).reduce(function (e, t) {
                    var r = d.find(function (e) {
                      var r;
                      return t.address === n.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (r = c.m5[l.chainId].wrappedBaseAssetSymbol) || void 0 === r
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
                            amount: new a.O(t.amount),
                            currencyDecimals: r.decimals,
                            priceInMarketReferenceCurrency: r.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: u.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, o.Fv)(
                              u.marketReferenceCurrencyPriceInUsd,
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
                balances: null === (d = r[l]) || void 0 === d ? void 0 : d.data,
                marketData: e[l],
              });
            }),
            isLoading: p,
          };
        },
        y = function (e) {
          var t = v([e]),
            r = t.walletBalances,
            n = t.isLoading;
          return {
            walletBalances: r[0].walletBalances,
            hasEmptyWallet: r[0].hasEmptyWallet,
            loading: n,
          };
        };
    },
    66510: function (e, t, r) {
      'use strict';
      r.d(t, {
        E: function () {
          return a;
        },
        v: function () {
          return l;
        },
      });
      var n = r(78551),
        o = r(2593),
        i = r(56371),
        s = r(13441),
        a = function (e, t, r) {
          var a = (0, s.z)().tokenWrapperService;
          return (0, n.a)({
            queryFn: function () {
              return '' === e || '0' === e
                ? Promise.resolve(o.O$.from(0))
                : a.getTokenInForTokenOut((0, i.parseUnits)(e, t).toString(), r);
            },
            queryKey: ['tokenInForTokenOut', r, e],
            select: function (e) {
              return (0, i.formatUnits)(e.toString(), t);
            },
          });
        },
        l = function (e, t, r) {
          var a = (0, s.z)().tokenWrapperService;
          return (0, n.a)({
            queryFn: function () {
              return '' === e || '0' === e
                ? Promise.resolve(o.O$.from(0))
                : a.getTokenOutForTokenIn((0, i.parseUnits)(e, t).toString(), r);
            },
            queryKey: ['tokenOutForTokenIn', r, e],
            select: function (e) {
              return (0, i.formatUnits)(e.toString(), t);
            },
          });
        };
    },
    43666: function (e, t, r) {
      'use strict';
      r.d(t, {
        P: function () {
          return u;
        },
      });
      var n = r(59499),
        o = r(1279),
        i = r(3439),
        s = r(3062),
        a = r(18376),
        l = r(84314),
        c = r(60377),
        d = (0, n.Z)({}, a.el.proto_mainnet_v3, [
          {
            tokenIn: i.ou.DAI.UNDERLYING.toLowerCase(),
            tokenOut: i.ou.sDAI.UNDERLYING.toLowerCase(),
            tokenWrapperContractAddress: i.zq,
          },
        ]),
        u = function () {
          var e,
            t = (0, c.HT)(),
            r = t.marketReferencePriceInUsd,
            n = t.marketReferenceCurrencyDecimals,
            i = t.reserves,
            a = (0, s.Y)(function (e) {
              return e.currentMarket;
            });
          if (!i || 0 === i.length) return [];
          return (null !== (e = d[a]) && void 0 !== e ? e : []).map(function (e) {
            var t = i.find(function (t) {
                return t.underlyingAsset === e.tokenIn;
              }),
              s = i.find(function (t) {
                return t.underlyingAsset === e.tokenOut;
              });
            if (!t || !s) throw new Error('wrapped token reserves not found');
            var a = (0, o.Fv)(t.priceInMarketReferenceCurrency, n),
              c = (0, o.Fv)(s.priceInMarketReferenceCurrency, n);
            return {
              tokenIn: {
                symbol: t.symbol,
                underlyingAsset: t.underlyingAsset,
                decimals: t.decimals,
                priceInUSD: (0, l.N4)(1, a, r).toString(),
                formattedPriceInMarketReferenceCurrency: a,
              },
              tokenOut: {
                symbol: s.symbol,
                underlyingAsset: s.underlyingAsset,
                decimals: s.decimals,
                priceInUSD: (0, l.N4)(1, c, r).toString(),
                formattedPriceInMarketReferenceCurrency: c,
              },
              tokenWrapperAddress: e.tokenWrapperContractAddress,
            };
          });
        };
    },
    41129: function (e, t, r) {
      'use strict';
      r.d(t, {
        k: function () {
          return p;
        },
      });
      var n = r(59499),
        o = r(80822),
        i = r(34386),
        s = r(24957),
        a = r(32867),
        l = r(85893);
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
      function d(e) {
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
      var u = function (e) {
          var t = e.value,
            r = e.withTooltip,
            n = e.subValue,
            i = e.disabled,
            s = e.capsComponent;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)(o.Z, {
                sx: { display: 'flex', alignItems: 'center' },
                children: [
                  (0, l.jsx)(a.B, {
                    value: t,
                    variant: 'secondary14',
                    sx: { mb: !r && n ? '2px' : 0 },
                    color: i ? 'text.disabled' : 'text.main',
                    'data-cy': 'nativeAmount',
                  }),
                  s,
                ],
              }),
              !r &&
                !!n &&
                !i &&
                (0, l.jsx)(a.B, {
                  value: n,
                  symbol: 'USD',
                  variant: 'secondary12',
                  color: 'text.secondary',
                }),
            ],
          });
        },
        p = function (e) {
          var t = e.symbol,
            r = e.value,
            n = e.subValue,
            c = e.withTooltip,
            p = e.capsComponent,
            x = e.disabled,
            b = e.listColumnProps,
            h = void 0 === b ? {} : b;
          return (0, l.jsx)(
            s.h,
            d(
              d({}, h),
              {},
              {
                children: c
                  ? (0, l.jsx)(i.Z, {
                      title: (0, l.jsxs)(o.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: [
                          (0, l.jsx)(a.B, {
                            value: n || 0,
                            symbol: 'USD',
                            variant: 'secondary14',
                            sx: { mb: '2px' },
                            symbolsColor: 'common.white',
                            compact: !1,
                          }),
                          (0, l.jsx)(a.B, {
                            value: r,
                            variant: 'secondary12',
                            symbol: t,
                            symbolsColor: 'common.white',
                            compact: !1,
                          }),
                        ],
                      }),
                      arrow: !0,
                      placement: 'top',
                      children: (0, l.jsx)(o.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: (0, l.jsx)(u, {
                          symbol: t,
                          value: r,
                          subValue: n,
                          capsComponent: p,
                          disabled: x,
                          withTooltip: c,
                        }),
                      }),
                    })
                  : (0, l.jsx)(u, {
                      symbol: t,
                      value: r,
                      subValue: n,
                      capsComponent: p,
                      disabled: x,
                      withTooltip: c,
                    }),
              }
            )
          );
        };
    },
    35490: function (e, t, r) {
      'use strict';
      r.d(t, {
        K: function () {
          return d;
        },
      });
      var n = r(57499),
        o = r(75331),
        i = r(35783),
        s = r(3062),
        a = r(65361),
        l = r(38577),
        c = r(85893);
      function d(e) {
        var t = e.bridge,
          r = e.name,
          d = e.chainId,
          u = e.icon,
          p = e.sx,
          x = [o.a_.avalanche].includes(d) ? 'Ethereum & Bitcoin' : 'Ethereum',
          b = (0, s.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, c.jsx)(i.v, {
          severity: 'info',
          icon: u,
          sx: p,
          children: t
            ? (0, c.jsx)(n.cC, {
                id: 'mdNjKU',
                values: { 0: t.name, name: r, network: x },
                components: {
                  0: (0, c.jsx)(l.rU, {
                    onClick: function () {
                      b(a.vh.EXTERNAL_LINK, { bridge: t.name, Link: 'Bridge Link' });
                    },
                    href: t.url,
                  }),
                },
              })
            : (0, c.jsx)(n.cC, { id: '87pUEW', values: { name: r } }),
        });
      }
    },
    55875: function (e, t, r) {
      'use strict';
      r.d(t, {
        BC: function () {
          return l;
        },
        hF: function () {
          return c;
        },
        nG: function () {
          return a;
        },
      });
      var n = r(1279),
        o = r(70794),
        i = r(21046),
        s = r(84314);
      function a(e, t) {
        var r,
          a,
          l,
          c,
          d = e.availableLiquidityUSD,
          u = o.O.min(t.availableBorrowsUSD, d),
          p =
            '0' === e.borrowCap
              ? (0, n.hE)(i.Bz.toString())
              : (0, n.hE)(Number(e.borrowCap)).minus((0, n.hE)(e.totalDebt)),
          x = o.O.max(o.O.min(e.formattedAvailableLiquidity, p), 0),
          b = (0, n.hE)(
            (null === t || void 0 === t ? void 0 : t.availableBorrowsMarketReferenceCurrency) || 0
          ).div(e.formattedPriceInMarketReferenceCurrency),
          h = o.O.min(b, x),
          m =
            h.gte(b) ||
            ('0' !== t.totalBorrowsMarketReferenceCurrency && u.lt(d)) ||
            (u.eq(d) && '0' !== e.totalDebt) ||
            (e.borrowCapUSD && '0' !== e.totalDebt && u.gte(d)) ||
            (t.isInIsolationMode &&
              '0' !==
                (null === (r = t.isolatedReserve) || void 0 === r
                  ? void 0
                  : r.isolationModeTotalDebt) &&
              (0, n.hE)(
                (null === (a = t.isolatedReserve) || void 0 === a ? void 0 : a.debtCeiling) || '0'
              )
                .minus(
                  (null === (l = t.isolatedReserve) || void 0 === l
                    ? void 0
                    : l.isolationModeTotalDebt) || '0'
                )
                .shiftedBy(
                  -(
                    (null === (c = t.isolatedReserve) || void 0 === c
                      ? void 0
                      : c.debtCeilingDecimals) || 0
                  )
                )
                .multipliedBy('0.99')
                .lt(t.availableBorrowsUSD))
              ? h.multipliedBy('0.99')
              : h;
        return (0, s.$w)(m.toString(10), e.decimals);
      }
      function l(e, t) {
        var r,
          a,
          l,
          c,
          d = (0, n.hE)(
            (null === e || void 0 === e ? void 0 : e.availableBorrowsMarketReferenceCurrency) || 0
          ),
          u =
            '0' === t.borrowCap
              ? (0, n.hE)(i.Bz.toString())
              : (0, n.hE)(Number(t.borrowCap)).minus((0, n.hE)(t.totalDebt)),
          p = o.O.max(o.O.min(d, u), 0),
          x =
            '0' !== e.totalBorrowsMarketReferenceCurrency ||
            (t.borrowCapUSD && '0' !== t.totalDebt && p.gte(u)) ||
            (e.isInIsolationMode &&
              '0' !==
                (null === (r = e.isolatedReserve) || void 0 === r
                  ? void 0
                  : r.isolationModeTotalDebt) &&
              (0, n.hE)(
                (null === (a = e.isolatedReserve) || void 0 === a ? void 0 : a.debtCeiling) || '0'
              )
                .minus(
                  (null === (l = e.isolatedReserve) || void 0 === l
                    ? void 0
                    : l.isolationModeTotalDebt) || '0'
                )
                .shiftedBy(
                  -(
                    (null === (c = e.isolatedReserve) || void 0 === c
                      ? void 0
                      : c.debtCeilingDecimals) || 0
                  )
                )
                .multipliedBy('0.99')
                .lt(e.availableBorrowsUSD))
              ? p.multipliedBy('0.99')
              : p;
        return (0, s.$w)(x.toString(10), 18);
      }
      function c(e, t) {
        var r = e.borrowingEnabled,
          n = e.isActive,
          o = e.borrowableInIsolation,
          i = e.eModes,
          s = e.isFrozen,
          a = e.isPaused;
        if (!r || !n || s || a) return !1;
        if (null !== t && void 0 !== t && t.isInEmode) {
          var l = i.find(function (e) {
            return e.id === t.userEmodeCategoryId;
          });
          return !!l && l.borrowingEnabled;
        }
        return !(null !== t && void 0 !== t && t.isInIsolationMode && !o);
      }
    },
    89208: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(21048);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [3367, 8900, 1790, 9771, 2645, 205, 2713, 9774, 2888, 179], function () {
      return (t = 89208), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
