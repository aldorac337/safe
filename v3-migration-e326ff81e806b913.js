(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4562],
  {
    96471: function (e, r, t) {
      'use strict';
      var n = t(64836);
      r.Z = void 0;
      var i = n(t(64938)),
        s = t(85893);
      r.Z = (0, i.default)(
        (0, s.jsx)('path', { d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z' }),
        'ArrowBackOutlined'
      );
    },
    21386: function (e, r, t) {
      'use strict';
      var n = t(64836);
      r.Z = void 0;
      var i = n(t(64938)),
        s = t(85893);
      r.Z = (0, i.default)(
        (0, s.jsx)('path', {
          d: 'M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0z',
        }),
        'CheckRounded'
      );
    },
    85578: function (e, r, t) {
      'use strict';
      var n = t(82066),
        i = t(85893);
      r.Z = (0, n.Z)(
        (0, i.jsx)('path', { d: 'M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z' }),
        'KeyboardArrowDown'
      );
    },
    78678: function (e, r, t) {
      'use strict';
      var n = t(82066),
        i = t(85893);
      r.Z = (0, n.Z)(
        (0, i.jsx)('path', { d: 'M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z' }),
        'KeyboardArrowUp'
      );
    },
    28466: function (e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, {
          default: function () {
            return or;
          },
        });
      var n = t(17674),
        i = t(59499),
        s = t(57499),
        o = t(80822),
        a = t(5152),
        l = t.n(a),
        c = t(11163),
        d = t(67294),
        u = t(53416),
        x = t(64283),
        p = t(21489),
        v = t(63689),
        h = t(80854),
        j = t(1279),
        f = t(59148),
        m = t(27484),
        b = t.n(m),
        g = t(42568),
        y = t.n(g),
        Z = t(38902),
        w = t(3062),
        O = t(12316),
        C = t(41783),
        k = t(79764),
        S = t(47892),
        D = t(32310),
        A = t(354),
        I = y()(function (e, r, t) {
          return {
            reserves: e.reservesData,
            reservesIncentives: t,
            baseCurrencyData: e.baseCurrencyData,
            userEmodeCategoryId: r.userEmodeCategoryId,
            userReserves: r.userReserves,
          };
        }),
        P = function (e) {
          var r = (0, S.J)(e),
            t = (0, A.T)(e),
            n = (0, D.O)(e);
          return (0, C.W)([r, t, n], I);
        },
        M = t(20863);
      function B(e, r) {
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
            ? B(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : B(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var R,
        T = y()(function (e, r, t, n, i, s, o) {
          var a,
            l = e.borrowReserves,
            c =
              (null === r || void 0 === r || null === (a = r.userReserves) || void 0 === a
                ? void 0
                : a.map(function (e) {
                    var r = e.scaledATokenBalance,
                      t = e.scaledVariableDebt;
                    return (
                      (0, O.Wx)(i, e.underlyingAsset) >= 0 && (r = '0'),
                      s
                        .filter(function (r) {
                          return r.underlyingAsset == e.underlyingAsset;
                        })
                        .filter(function (e) {
                          var r = l.find(function (r) {
                            return r.underlyingAsset == e.underlyingAsset;
                          });
                          return !!r && void 0 === r.migrationDisabled;
                        }).length > 0 && (t = '0'),
                      E(E({}, e), {}, { scaledATokenBalance: r, scaledVariableDebt: t })
                    );
                  })) || [],
            d = (0, Z.To)(r),
            u = (0, O.qt)(
              null === r || void 0 === r ? void 0 : r.reserves,
              null === r || void 0 === r ? void 0 : r.reserveIncentives,
              c,
              d,
              b()().unix(),
              null === r || void 0 === r ? void 0 : r.userEmodeCategoryId
            ),
            x = (0, O.B9)(i, e.supplyReserves, e.isolatedReserveV3),
            p = (0, O.hA)(s, n, e),
            v = x.reduce(function (e, r) {
              return (e[r.underlyingAsset] = r), e;
            }, {}),
            m = p.reduce(function (e, r) {
              return (e[r.debtKey] = r), e;
            }, {}),
            g = n.userReservesData.map(function (e) {
              var r = m[e.reserve.variableDebtTokenAddress],
                t = (0, O.oO)(o, e),
                n = v[t],
                i = e.scaledVariableDebt,
                s = e.scaledATokenBalance,
                a = e.usageAsCollateralEnabledOnUser,
                l = (0, j.hE)(e.reserve.variableBorrowIndex);
              if (r && void 0 === r.migrationDisabled) {
                var c = (0, f.e9)((0, h.gU)(r.increasedVariableBorrows, e.reserve.decimals), l);
                i = (0, j.hE)(i).plus(c).toString();
              }
              if (n) {
                var d;
                a = n.usageAsCollateralEnabledOnUserV3;
                var u = (0, j.hE)(e.scaledATokenBalance),
                  x = (0, j.hE)(e.reserve.liquidityIndex),
                  p =
                    (null === (d = o[t]) || void 0 === d ? void 0 : d.amount) ||
                    (0, h.gU)(n.underlyingBalance, e.reserve.decimals),
                  b = (0, f.e9)(p, x);
                s = u.plus(b).toString();
              }
              return E(
                E({}, e),
                {},
                {
                  id: e.reserve.id,
                  scaledVariableDebt: i,
                  scaledATokenBalance: s,
                  usageAsCollateralEnabledOnUser: a,
                }
              );
            }),
            y = (0, Z.To)(t),
            w = (0, O.qt)(
              null === t || void 0 === t ? void 0 : t.reserves,
              null === t || void 0 === t ? void 0 : t.reserveIncentives,
              g,
              y,
              b()().unix(),
              null === t || void 0 === t ? void 0 : t.userEmodeCategoryId
            );
          return {
            fromUserSummaryAfterMigration: u,
            toUserSummaryAfterMigration: {
              healthFactor: w.healthFactor,
              currentLoanToValue: w.currentLoanToValue,
              totalCollateralMarketReferenceCurrency: w.totalCollateralMarketReferenceCurrency,
              totalBorrowsMarketReferenceCurrency: w.totalBorrowsMarketReferenceCurrency,
            },
          };
        }),
        _ = t(41917),
        U = t(8095),
        F = t(72005),
        V = t(62123),
        z = t(33772),
        L = t(82066),
        N = t(85893),
        W = (0, L.Z)(
          (0, N.jsx)('path', { d: 'm20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z' }),
          'ArrowDownward'
        ),
        q = t(2734),
        H = t(61730),
        Y = t(90629),
        J = t(50480),
        X = t(69368),
        G = t(15861),
        K = t(69417),
        Q = t(53219),
        $ = t(20986),
        ee = t(35783),
        re = t(13918),
        te = t(44949),
        ne = t(80227),
        ie = t(78678),
        se = t(85578),
        oe = t(86653),
        ae = t(69661),
        le = t(93946),
        ce = t(35294),
        de = t(18972),
        ue = t(67720),
        xe = t(88078),
        pe = t(58941),
        ve = t(79850),
        he = function (e) {
          var r,
            t = e.marketData,
            n = e.userSummaryAfterMigration,
            i = e.userSummaryBeforeMigration,
            s = e.selectableMarkets,
            a = e.setFromMarketData,
            l = e.loading,
            c = (0, d.useState)(null),
            u = c[0],
            x = c[1],
            p = Boolean(u),
            v = (0, ve.Mo)(t.chainId);
          return (0, N.jsxs)(o.Z, {
            sx: {
              padding: '12px 16px 16px 16px',
              border: 1,
              borderColor: 'divider',
              borderRadius: 3,
              width: '100%',
            },
            children: [
              (0, N.jsx)(G.Z, {
                variant: 'subheader2',
                color: 'text.primary',
                sx: { mb: 2 },
                children: 'From',
              }),
              (0, N.jsxs)(o.Z, {
                sx: { display: 'flex', alignItems: 'center', mb: 6 },
                children: [
                  (0, N.jsx)(oe.Z, {
                    overlap: 'circular',
                    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                    badgeContent: (0, N.jsx)(ae.Z, {
                      src: v.networkLogoPath,
                      sx: { width: 20, height: 20 },
                    }),
                    children: (0, N.jsx)(ae.Z, { src: '/aave.svg', sx: { width: 36, height: 36 } }),
                  }),
                  (0, N.jsx)(G.Z, {
                    variant: 'subheader1',
                    sx: { ml: 5 },
                    children:
                      ((r = t),
                      'Aave '
                        .concat(r.v3 ? 'V3' : 'V2', ' - ')
                        .concat(r.marketTitle)
                        .concat(r.isFork ? ' Fork' : '')),
                  }),
                  s &&
                    a &&
                    (0, N.jsxs)(N.Fragment, {
                      children: [
                        (0, N.jsx)(le.Z, {
                          onClick: function (e) {
                            x(e.currentTarget);
                          },
                          sx: { ml: 'auto' },
                          children: p ? (0, N.jsx)(ie.Z, {}) : (0, N.jsx)(se.Z, {}),
                        }),
                        (0, N.jsx)(ce.Z, {
                          open: p,
                          onClose: function () {
                            x(null);
                          },
                          anchorEl: u,
                          anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                          transformOrigin: { vertical: 'top', horizontal: 'right' },
                          children: s.map(function (e) {
                            return (0, N.jsxs)(
                              o.Z,
                              {
                                children: [
                                  (0, N.jsx)(o.Z, {
                                    sx: { py: 2, px: 4 },
                                    children: (0, N.jsx)(G.Z, {
                                      color: 'text.secondary',
                                      variant: 'subheader2',
                                      children: e.title,
                                    }),
                                  }),
                                  e.markets.map(function (e) {
                                    var r = (0, ve.Mo)(e.chainId);
                                    return (0, N.jsxs)(
                                      de.Z,
                                      {
                                        onClick: function () {
                                          return (function (e) {
                                            a && a(e), x(null);
                                          })(e);
                                        },
                                        children: [
                                          (0, N.jsx)(oe.Z, {
                                            overlap: 'circular',
                                            anchorOrigin: {
                                              vertical: 'bottom',
                                              horizontal: 'right',
                                            },
                                            badgeContent: (0, N.jsx)(ae.Z, {
                                              src: r.networkLogoPath,
                                              sx: { width: 16, height: 16 },
                                            }),
                                            children: (0, N.jsx)(ae.Z, {
                                              src: '/aave.svg',
                                              sx: { width: 24, height: 24 },
                                            }),
                                          }),
                                          (0, N.jsx)(G.Z, {
                                            variant: 'secondary14',
                                            sx: { ml: 3 },
                                            children: ''
                                              .concat(e.marketTitle)
                                              .concat(e.isFork ? ' Fork' : ''),
                                          }),
                                        ],
                                      },
                                      ''.concat(e.marketTitle, '_').concat(e.isFork)
                                    );
                                  }),
                                ],
                              },
                              e.title
                            );
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              (0, N.jsx)(ue.Z, {}),
              (0, N.jsxs)(o.Z, {
                sx: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 3,
                },
                children: [
                  (0, N.jsx)(G.Z, { children: 'Health Factor' }),
                  (0, N.jsx)(o.Z, {
                    sx: { textAlign: 'right' },
                    children: (0, N.jsxs)(o.Z, {
                      sx: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' },
                      children: [
                        !l && i
                          ? (0, N.jsx)(pe.o, { value: i.healthFactor })
                          : (0, N.jsx)(xe.Z, { width: 50 }),
                        (0, N.jsx)(Q.Z, {
                          sx: { fontSize: '16px', color: 'text.primary', mx: 1 },
                          children: (0, N.jsx)(ne.Z, {}),
                        }),
                        !l && n
                          ? (0, N.jsx)(pe.o, { value: n.healthFactor })
                          : (0, N.jsx)(xe.Z, { width: 50 }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      !(function (e) {
        (e[(e.NO_SELECTION = 0)] = 'NO_SELECTION'),
          (e[(e.V2_HF_TOO_LOW = 1)] = 'V2_HF_TOO_LOW'),
          (e[(e.V3_HF_TOO_LOW = 2)] = 'V3_HF_TOO_LOW'),
          (e[(e.INSUFFICIENT_LTV = 3)] = 'INSUFFICIENT_LTV');
      })(R || (R = {}));
      var je = function (e) {
          switch (e.blockingError) {
            case R.NO_SELECTION:
              return (0, N.jsx)(s.cC, { id: 'uHMwk8' });
            case R.V2_HF_TOO_LOW:
              return (0, N.jsx)(s.cC, { id: 'PsOFSf' });
            case R.V3_HF_TOO_LOW:
              return (0, N.jsx)(N.Fragment, { children: (0, N.jsx)(s.cC, { id: 'D33VQU' }) });
            case R.INSUFFICIENT_LTV:
              return (0, N.jsx)(s.cC, { id: 'p2S64u' });
            default:
              return (0, N.jsx)(N.Fragment, {});
          }
        },
        fe = function (e) {
          var r = e.disableButton,
            t = e.enteringIsolationMode,
            n = e.fromMarketData,
            i = e.toMarketData,
            a = e.userSummaryAfterMigration,
            l = e.userSummaryBeforeMigration,
            c = e.setFromMarketData,
            u = e.selectableMarkets,
            x = e.loading,
            p = (0, te.vR)().openV3Migration,
            v = (0, d.useState)(!1),
            h = v[0],
            f = v[1],
            m = (0, q.Z)(),
            b = (0, H.Z)(m.breakpoints.down('sm')),
            g = a
              ? (function (e, r, t) {
                  var n = e.toUserSummaryAfterMigration,
                    i = n.totalCollateralMarketReferenceCurrency,
                    s = n.totalBorrowsMarketReferenceCurrency,
                    o = n.currentLoanToValue,
                    a = (0, j.hE)(i).multipliedBy(o),
                    l = (0, j.hE)(s).isGreaterThan(a);
                  return r && t
                    ? R.NO_SELECTION
                    : Number(e.fromUserSummaryAfterMigration.healthFactor) < 1.005 &&
                        '-1' !== e.fromUserSummaryAfterMigration.healthFactor
                      ? R.V2_HF_TOO_LOW
                      : Number(e.toUserSummaryAfterMigration.healthFactor) < 1.005 &&
                          '-1' !== e.toUserSummaryAfterMigration.healthFactor
                        ? R.V3_HF_TOO_LOW
                        : l
                          ? R.INSUFFICIENT_LTV
                          : null;
                })(a, !!r, h)
              : null;
          return (0, N.jsx)(o.Z, {
            sx: { display: 'flex', flexDirection: 'column', width: { xs: '100%', lg: '40%' } },
            children: (0, N.jsxs)(Y.Z, {
              sx: { p: { xs: '16px 24px 24px 24px' }, mb: { xs: 6, md: 0 } },
              children: [
                (0, N.jsx)($.X, {
                  caption: (0, N.jsx)(s.cC, { id: 'BQ/wCO' }),
                  captionVariant: 'h3',
                  sx: { mb: 6 },
                }),
                (0, N.jsxs)(o.Z, {
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 2,
                    mb: 12,
                    position: 'relative',
                    alignItems: 'center',
                  },
                  children: [
                    (0, N.jsx)(he, {
                      marketData: n,
                      userSummaryBeforeMigration:
                        null === l || void 0 === l ? void 0 : l.fromUserSummaryBeforeMigration,
                      userSummaryAfterMigration:
                        null === a || void 0 === a ? void 0 : a.fromUserSummaryAfterMigration,
                      selectableMarkets: u,
                      setFromMarketData: c,
                      loading: x,
                    }),
                    (0, N.jsx)(o.Z, {
                      border: 1,
                      borderColor: 'divider',
                      bgcolor: 'background.paper',
                      sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        borderRadius: '12px',
                        width: 36,
                        height: 36,
                      },
                      children: (0, N.jsx)(W, {}),
                    }),
                    (0, N.jsx)(he, {
                      marketData: i,
                      userSummaryBeforeMigration:
                        null === l || void 0 === l ? void 0 : l.toUserSummaryBeforeMigration,
                      userSummaryAfterMigration:
                        null === a || void 0 === a ? void 0 : a.toUserSummaryAfterMigration,
                      loading: x,
                    }),
                  ],
                }),
                null !== g &&
                  (0, N.jsx)(ee.v, {
                    severity: 'warning',
                    children: (0, N.jsx)(je, { blockingError: g }),
                  }),
                t && (0, N.jsx)(re.i, { severity: 'warning' }),
                null === g &&
                  (0, N.jsx)(o.Z, {
                    sx: {
                      height: '44px',
                      backgroundColor: 'background.surface',
                      borderRadius: '4px',
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 4,
                    },
                    'data-cy': 'migration-risk-checkbox',
                    children: (0, N.jsx)(J.Z, {
                      sx: { margin: 0 },
                      control: (0, N.jsx)(X.Z, {
                        checked: h,
                        onChange: function () {
                          return f(!h);
                        },
                        size: 'small',
                      }),
                      label: (0, N.jsx)(G.Z, {
                        variant: 'description',
                        sx: { position: 'relative', top: 1 },
                        children: (0, N.jsx)(s.cC, { id: 'DG3Lv1' }),
                      }),
                    }),
                  }),
                (0, N.jsx)(o.Z, {
                  children: (0, N.jsx)(K.Z, {
                    onClick: p,
                    disabled: x || !h || null !== g,
                    sx: { width: '100%', height: '44px' },
                    variant: h && null === g ? 'gradient' : 'contained',
                    size: 'medium',
                    'data-cy': 'migration-button',
                    children: (0, N.jsx)(s.cC, { id: 'fldjW9' }),
                  }),
                }),
                (0, N.jsxs)(o.Z, {
                  sx: { p: b ? '20px 16px' : '20px 30px', mt: b ? 4 : 0 },
                  children: [
                    (0, N.jsxs)(G.Z, {
                      variant: 'h3',
                      sx: {
                        fontWeight: 700,
                        mb: { xs: 4, lg: 6 },
                        display: 'flex',
                        alignItems: 'center',
                      },
                      children: [
                        (0, N.jsx)(Q.Z, {
                          sx: { fontSize: '24px', color: 'warning.main', mr: 2 },
                          children: (0, N.jsx)(z.Z, {}),
                        }),
                        (0, N.jsx)(s.cC, { id: 'V1HK43' }),
                      ],
                    }),
                    (0, N.jsx)(G.Z, {
                      sx: { mb: { xs: 3, lg: 4 } },
                      children: (0, N.jsx)(s.cC, {
                        id: 'Xn4hUi',
                        components: { 0: (0, N.jsx)('b', {}) },
                      }),
                    }),
                    (0, N.jsx)(G.Z, {
                      sx: { mb: { xs: 3, lg: 4 } },
                      children: (0, N.jsx)(s.cC, {
                        id: 'nNHV0z',
                        components: { 0: (0, N.jsx)('b', {}) },
                      }),
                    }),
                    (0, N.jsx)(G.Z, {
                      sx: { mb: { xs: 4, lg: 6 } },
                      children: (0, N.jsx)(s.cC, { id: 'zys+R6' }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        me = t(13902),
        be = t(58057),
        ge = t(21386),
        ye = t(38063),
        Ze = t(58771),
        we = t(38577),
        Oe = t(49212),
        Ce = function (e) {
          var r,
            t = e.dashboardLink,
            n = e.marketName,
            o = e.warningType,
            a = e.isolatedV3,
            l =
              ((r = {}),
              (0, i.Z)(
                r,
                O.b_.EModeBorrowDisabled,
                (0, N.jsx)(s.cC, {
                  id: 'DWjrck',
                  values: { marketName: n },
                  components: {
                    0: (0, N.jsx)(we.rU, { href: t || '', target: '_blank', underline: 'always' }),
                  },
                })
              ),
              (0, i.Z)(r, O.b_.AssetNotFlashloanable, (0, N.jsx)(s.cC, { id: 'xvIklc' })),
              (0, i.Z)(
                r,
                O.b_.InsufficientLiquidity,
                (0, N.jsx)(s.cC, { id: 'lU2d1/', values: { marketName: n } })
              ),
              (0, i.Z)(
                r,
                O.b_.NotEnoughtSupplies,
                (0, N.jsx)(s.cC, { id: '2OM8/D', values: { marketName: n } })
              ),
              (0, i.Z)(
                r,
                O.b_.ReserveFrozen,
                (0, N.jsx)(s.cC, { id: 'zy9fXn', values: { marketName: n } })
              ),
              (0, i.Z)(
                r,
                O.b_.IsolationModeBorrowDisabled,
                a
                  ? (0, N.jsx)(s.cC, {
                      id: 'rTBDeu',
                      values: { marketName: n },
                      components: {
                        0: (0, N.jsx)(we.rU, {
                          href: t || '',
                          target: '_blank',
                          underline: 'always',
                        }),
                      },
                    })
                  : (0, N.jsx)(s.cC, { id: 'HvJKMU', values: { marketName: n } })
              ),
              (0, i.Z)(
                r,
                O.b_.V3AssetMissing,
                (0, N.jsx)(s.cC, { id: 'P2WCD/', values: { marketName: n } })
              ),
              r);
          return (0, N.jsx)(Oe.G, {
            iconSize: 16,
            color: 'error.main',
            icon: (0, N.jsx)(Ze.Z, {}),
            children: (0, N.jsx)(G.Z, {
              variant: 'caption',
              color: 'text.secondary',
              children: l[o],
            }),
          });
        },
        ke = t(64311),
        Se = t(24957),
        De = t(25135),
        Ae = t(32867),
        Ie = t(6308),
        Pe = t(45640),
        Me = t(73886),
        Be = t(45843),
        Ee = function (e) {
          var r = e.enableAsCollateral,
            t = e.enabledAsCollateral;
          return (0, N.jsxs)(o.Z, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            },
            children: [
              (0, N.jsx)(Be.Z, { onClick: r, disableRipple: !0, checked: t, sx: { mb: -1.5 } }),
              (0, N.jsx)(ke.Ch, {}),
            ],
          });
        },
        Re = function (e) {
          var r = e.v2Amount,
            t = e.v2Price,
            n = e.v3Price,
            i = (0, d.useMemo)(
              function () {
                return (function (e, r, t) {
                  if (!t) return { v3Amount: void 0, v3TotalPrice: void 0 };
                  var n = (0, j.hE)(r).div(t).multipliedBy(e),
                    i = n.multipliedBy(t);
                  return { v3Amount: n.toString(), v3TotalPrice: i.toString() };
                })(r, t, n);
              },
              [r, t, n]
            ),
            o = i.v3Amount,
            a = i.v3TotalPrice;
          return (0, N.jsx)(ee.v, {
            icon: !1,
            sx: { mb: 4 },
            severity: 'error',
            children: (0, N.jsxs)(G.Z, {
              variant: 'caption',
              component: 'span',
              children: [
                (0, N.jsx)(s.cC, {
                  id: 'KLXVqE',
                  values: {
                    0: o
                      ? (0, N.jsxs)(N.Fragment, {
                          children: [
                            (0, N.jsx)(Ae.B, { variant: 'caption', value: o }),
                            ' (',
                            (0, N.jsx)(Ae.B, {
                              variant: 'caption',
                              value: a,
                              symbol: 'USD',
                              symbolsColor: 'error.100',
                            }),
                            ').',
                          ],
                        })
                      : (0, N.jsx)(Ie.J, { variant: 'caption', component: 'span' }),
                  },
                }),
                ' ',
              ],
            }),
          });
        },
        Te = function (e) {
          var r = e.checked,
            t = e.amount,
            i = e.amountInUSD,
            a = e.onCheckboxClick,
            l = e.enabledAsCollateral,
            c = e.disabled,
            d = e.enableAsCollateral,
            u = e.isIsolated,
            x = e.enteringIsolation,
            p = e.borrowApyType,
            v = e.userReserve,
            h = e.v3Rates,
            j = e.showCollateralToggle,
            f = e.isSupplyList,
            m = p ? v.reserve.variableBorrowAPY : v.reserve.supplyAPY,
            b = p ? v.reserve.vIncentivesData : v.reserve.aIncentivesData,
            g = p
              ? (null === h || void 0 === h ? void 0 : h.variableBorrowAPY) || '-1'
              : (null === h || void 0 === h ? void 0 : h.supplyAPY) || '-1',
            y = p
              ? (null === h || void 0 === h ? void 0 : h.vIncentivesData) || []
              : (null === h || void 0 === h ? void 0 : h.aIncentivesData) || [],
            Z = (0, w.Y)(
              (0, Me.N)(function (e) {
                return [e.currentMarket, e.currentMarketData];
              })
            ),
            O = (0, n.Z)(Z, 2),
            C = O[0],
            k = O[1],
            S = (0, q.Z)(),
            D = void 0 === c ? 'text.secondary' : 'text.muted',
            A = void 0 === c ? 'text.primary' : 'text.muted',
            I =
              void 0 === (null === h || void 0 === h ? void 0 : h.ltv) &&
              void 0 === (null === h || void 0 === h ? void 0 : h.liquidationThreshold);
          return (0, N.jsxs)(De.H, {
            sx: { display: 'flex', flexDirection: 'column', pl: 0 },
            children: [
              (0, N.jsxs)(o.Z, {
                sx: { display: 'flex', alignItems: 'center', width: '100%', pb: 2, pt: 2.5 },
                children: [
                  (0, N.jsx)(Se.h, {
                    align: 'center',
                    maxWidth: 48,
                    minWidth: 48,
                    children: (0, N.jsx)(o.Z, {
                      sx: function (e) {
                        return {
                          border: '2px solid '.concat(
                            void 0 !== c ? e.palette.action.disabled : e.palette.text.secondary
                          ),
                          background:
                            void 0 !== c
                              ? e.palette.background.disabled
                              : r
                                ? e.palette.text.secondary
                                : e.palette.background.paper,
                          width: 16,
                          height: 16,
                          borderRadius: '2px',
                          '&:hover': { cursor: void 0 !== c ? 'not-allowed' : 'pointer' },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        };
                      },
                      onClick: void 0 !== c ? void 0 : a,
                      children:
                        void 0 === c &&
                        (0, N.jsx)(Q.Z, {
                          sx: { fontSize: '14px', color: 'background.paper' },
                          children: (0, N.jsx)(be.Z, {}),
                        }),
                    }),
                  }),
                  (0, N.jsx)(Se.h, {
                    align: 'left',
                    children: (0, N.jsxs)($.X, {
                      children: [
                        (0, N.jsx)(Pe.T1, { symbol: v.reserve.iconSymbol, fontSize: 'large' }),
                        (0, N.jsxs)(o.Z, {
                          sx: { pl: '12px', overflow: 'hidden', display: 'flex' },
                          children: [
                            (0, N.jsx)(G.Z, {
                              variant: 'subheader1',
                              color: A,
                              noWrap: !0,
                              sx: { pr: 1 },
                              children: v.reserve.symbol,
                            }),
                            void 0 !== c &&
                              (0, N.jsx)(Ce, {
                                dashboardLink: we.Z6.dashboard + '/?marketName=' + C + '_v3',
                                marketName: k.marketTitle,
                                warningType: c,
                                isolatedV3: x,
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, N.jsxs)(o.Z, {
                sx: {
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  pb: 4,
                  pl: 12,
                },
                children: [
                  (0, N.jsxs)(o.Z, {
                    sx: { display: 'flex', justifyContent: 'space-between' },
                    children: [
                      (0, N.jsx)(G.Z, {
                        variant: 'description',
                        color: D,
                        children: (0, N.jsx)(s.cC, { id: '0ojY+Y' }),
                      }),
                      (0, N.jsxs)(o.Z, {
                        sx: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
                        children: [
                          (0, N.jsx)(o.Z, {
                            sx: { display: 'flex', alignItems: 'flex-end', mb: 0.5 },
                            children: (0, N.jsx)(Ae.B, {
                              value: t,
                              variant: 'secondary14',
                              color: A,
                            }),
                          }),
                          (0, N.jsx)(Ae.B, {
                            value: i,
                            variant: 'secondary12',
                            color: D,
                            symbolsColor: D,
                            symbol: 'USD',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)(o.Z, {
                    sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
                    children: [
                      (0, N.jsx)(G.Z, {
                        variant: 'description',
                        color: D,
                        children: (0, N.jsx)(s.cC, { id: 'McHlGl' }),
                      }),
                      (0, N.jsxs)(o.Z, {
                        sx: { display: 'flex' },
                        children: [
                          (0, N.jsx)(ye.J, {
                            value: m,
                            symbol: v.reserve.symbol,
                            incentives: b,
                            variant: 'main14',
                            color: A,
                            market: C,
                          }),
                          (0, N.jsx)(Q.Z, {
                            sx: { px: 1.5 },
                            children: (0, N.jsx)(ne.Z, {
                              fontSize: '14px',
                              color: void 0 === c ? S.palette.text.secondary : S.palette.text.muted,
                            }),
                          }),
                          (0, N.jsx)(ye.J, {
                            value: g,
                            symbol: v.reserve.symbol,
                            incentives: y,
                            variant: 'main14',
                            color: A,
                            market: C,
                          }),
                        ],
                      }),
                    ],
                  }),
                  !!d &&
                    (0, N.jsxs)(o.Z, {
                      sx: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      },
                      children: [
                        (0, N.jsx)(G.Z, {
                          variant: 'description',
                          color: D,
                          children: (0, N.jsx)(s.cC, { id: '0thX3P' }),
                        }),
                        (0, N.jsxs)(o.Z, {
                          sx: { display: 'flex', alignItems: 'center' },
                          children: [
                            v.usageAsCollateralEnabledOnUser &&
                            '0' !== v.reserve.reserveLiquidationThreshold
                              ? (0, N.jsx)(ge.Z, { fontSize: 'small', color: 'success' })
                              : (0, N.jsx)(Ie.J, { variant: 'main14', color: D }),
                            (0, N.jsx)(Q.Z, {
                              sx: { px: 1.5 },
                              children: (0, N.jsx)(ne.Z, {
                                fontSize: '14px',
                                color:
                                  void 0 === c ? S.palette.text.secondary : S.palette.text.muted,
                              }),
                            }),
                            j
                              ? (0, N.jsx)(Ee, { enableAsCollateral: d, enabledAsCollateral: l })
                              : l
                                ? u
                                  ? (0, N.jsxs)(o.Z, {
                                      sx: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                      },
                                      children: [
                                        (0, N.jsx)(Q.Z, {
                                          sx: { color: 'warning.main', fontSize: '20px' },
                                          children: (0, N.jsx)(me.Z, {}),
                                        }),
                                        (0, N.jsx)(ke.Ch, {}),
                                      ],
                                    })
                                  : (0, N.jsx)(ge.Z, { fontSize: 'small', color: 'success' })
                                : (0, N.jsx)(Ie.J, { variant: 'main14', color: D }),
                          ],
                        }),
                      ],
                    }),
                  !!p &&
                    (0, N.jsxs)(o.Z, {
                      sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      },
                      children: [
                        (0, N.jsx)(G.Z, {
                          variant: 'description',
                          color: D,
                          children: (0, N.jsx)(s.cC, { id: 'xaWZ6f' }),
                        }),
                        (0, N.jsxs)(o.Z, {
                          sx: { display: 'flex' },
                          children: [
                            (0, N.jsx)(K.Z, {
                              variant: 'outlined',
                              size: 'small',
                              sx: { width: '50px', background: 'white' },
                              disabled: !0,
                              children: (0, N.jsx)(G.Z, {
                                variant: 'buttonS',
                                color: A,
                                children: p,
                              }),
                            }),
                            (0, N.jsx)(Q.Z, {
                              sx: { px: 1.5 },
                              children: (0, N.jsx)(ne.Z, {
                                fontSize: '14px',
                                color:
                                  void 0 === c ? S.palette.text.secondary : S.palette.text.muted,
                              }),
                            }),
                            (0, N.jsx)(K.Z, {
                              variant: 'outlined',
                              size: 'small',
                              sx: { width: '50px', background: 'white' },
                              disabled: !0,
                              children: (0, N.jsx)(G.Z, {
                                variant: 'buttonS',
                                color: A,
                                children: 'Variable',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  f &&
                    (0, N.jsxs)(o.Z, {
                      sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      },
                      children: [
                        (0, N.jsx)(G.Z, {
                          variant: 'description',
                          color: D,
                          children: (0, N.jsx)(s.cC, { id: '3mXg0z' }),
                        }),
                        (0, N.jsx)(o.Z, {
                          sx: { display: 'flex' },
                          children: I
                            ? (0, N.jsx)(Ie.J, { variant: 'main14', color: 'text.secondary' })
                            : (0, N.jsxs)(N.Fragment, {
                                children: [
                                  (0, N.jsx)(Ae.B, {
                                    value: v.reserve.formattedBaseLTVasCollateral,
                                    percent: !0,
                                    variant: 'main14',
                                    color: A,
                                  }),
                                  (0, N.jsx)(Q.Z, {
                                    sx: { px: 1.5 },
                                    children: (0, N.jsx)(ne.Z, {
                                      fontSize: '14px',
                                      color:
                                        void 0 === c
                                          ? S.palette.text.secondary
                                          : S.palette.text.muted,
                                    }),
                                  }),
                                  (0, N.jsx)(Ae.B, {
                                    value: (null === h || void 0 === h ? void 0 : h.ltv) || 0,
                                    percent: !0,
                                    variant: 'main14',
                                    color: A,
                                  }),
                                ],
                              }),
                        }),
                      ],
                    }),
                  !f &&
                    (0, N.jsxs)(o.Z, {
                      sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      },
                      children: [
                        (0, N.jsx)(G.Z, {
                          variant: 'description',
                          color: D,
                          children: (0, N.jsx)(s.cC, { id: 'PcBUgb' }),
                        }),
                        (0, N.jsx)(o.Z, {
                          sx: { display: 'flex' },
                          children: I
                            ? (0, N.jsx)(Ie.J, { variant: 'main14', color: 'text.secondary' })
                            : (0, N.jsxs)(N.Fragment, {
                                children: [
                                  (0, N.jsx)(Ae.B, {
                                    value: v.reserve.formattedReserveLiquidationThreshold,
                                    percent: !0,
                                    variant: 'main14',
                                    color: A,
                                  }),
                                  (0, N.jsx)(Q.Z, {
                                    sx: { px: 1.5 },
                                    children: (0, N.jsx)(ne.Z, {
                                      fontSize: '14px',
                                      color:
                                        void 0 === c
                                          ? S.palette.text.secondary
                                          : S.palette.text.muted,
                                    }),
                                  }),
                                  (0, N.jsx)(Ae.B, {
                                    value:
                                      (null === h || void 0 === h
                                        ? void 0
                                        : h.liquidationThreshold) || 0,
                                    percent: !0,
                                    variant: 'main14',
                                    color: A,
                                  }),
                                ],
                              }),
                        }),
                      ],
                    }),
                ],
              }),
              'stETH' === v.reserve.symbol &&
                (0, N.jsx)(o.Z, {
                  sx: { pl: '16px', width: '100%' },
                  children: (0, N.jsx)(Re, {
                    v2Price: v.reserve.priceInUSD,
                    v2Amount: t,
                    v3Price: null === h || void 0 === h ? void 0 : h.priceInUSD,
                  }),
                }),
            ],
          });
        },
        _e = function (e) {
          var r,
            t = e.checked,
            i = e.amount,
            s = e.amountInUSD,
            a = e.onCheckboxClick,
            l = e.enabledAsCollateral,
            c = e.disabled,
            d = e.enableAsCollateral,
            u = e.isIsolated,
            x = e.enteringIsolation,
            p = e.borrowApyType,
            v = e.userReserve,
            h = e.v3Rates,
            j = e.userControlledCollateral,
            f = e.canBeEnforced,
            m = e.isSupplyList,
            b = (0, q.Z)(),
            g = (0, w.Y)(
              (0, Me.N)(function (e) {
                return [e.currentMarket, e.currentMarketData];
              })
            ),
            y = (0, n.Z)(g, 2),
            Z = y[0],
            O = y[1],
            C = (0, H.Z)(b.breakpoints.down(1125)),
            k = void 0 === c ? 'text.primary' : 'text.muted',
            S = void 0 === c ? 'text.secondary' : 'text.muted',
            D =
              void 0 === (null === h || void 0 === h ? void 0 : h.ltv) &&
              void 0 === (null === h || void 0 === h ? void 0 : h.liquidationThreshold),
            A = p ? v.reserve.variableBorrowAPY : v.reserve.supplyAPY,
            I = p ? v.reserve.vIncentivesData : v.reserve.aIncentivesData,
            P = p
              ? (null === h || void 0 === h ? void 0 : h.variableBorrowAPY) || '-1'
              : (null === h || void 0 === h ? void 0 : h.supplyAPY) || '-1',
            M = p
              ? (null === h || void 0 === h ? void 0 : h.vIncentivesData) || []
              : (null === h || void 0 === h ? void 0 : h.aIncentivesData) || [],
            B = j && u && f;
          return C
            ? (0, N.jsx)(Te, {
                checked: t,
                amount: i,
                amountInUSD: s,
                onCheckboxClick: a,
                enabledAsCollateral: l,
                disabled: c,
                enableAsCollateral: d,
                isIsolated: u,
                enteringIsolation: x,
                borrowApyType: p,
                userReserve: v,
                v3Rates: h,
                showCollateralToggle: B,
                isSupplyList: m,
              })
            : (0, N.jsxs)(De.H, {
                sx: { flexDirection: 'column', pl: 0 },
                'data-cy': 'migration-'
                  .concat(void 0 !== p ? 'borrow-' + p : 'supply', '-')
                  .concat(v.reserve.symbol),
                children: [
                  (0, N.jsxs)(o.Z, {
                    sx: {
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100%',
                      alignItems: 'center',
                      my: 4,
                    },
                    children: [
                      (0, N.jsx)(Se.h, {
                        align: 'center',
                        maxWidth: 64,
                        minWidth: 64,
                        children: (0, N.jsx)(o.Z, {
                          sx: function (e) {
                            return {
                              border: '2px solid '.concat(
                                void 0 !== c ? e.palette.action.disabled : e.palette.text.secondary
                              ),
                              background:
                                void 0 !== c
                                  ? e.palette.background.disabled
                                  : t
                                    ? e.palette.text.secondary
                                    : e.palette.background.paper,
                              width: 16,
                              height: 16,
                              borderRadius: '2px',
                              '&:hover': { cursor: void 0 !== c ? 'not-allowed' : 'pointer' },
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            };
                          },
                          onClick: void 0 !== c ? void 0 : a,
                          'data-cy': 'migration-checkbox',
                          children:
                            void 0 === c &&
                            (0, N.jsx)(Q.Z, {
                              sx: { fontSize: '14px', color: 'background.paper' },
                              children: (0, N.jsx)(be.Z, {}),
                            }),
                        }),
                      }),
                      (0, N.jsxs)(Se.h, {
                        isRow: !0,
                        maxWidth: 250,
                        minWidth: 170,
                        children: [
                          (0, N.jsx)(Pe.T1, { symbol: v.reserve.iconSymbol, fontSize: 'large' }),
                          (0, N.jsxs)(o.Z, {
                            sx: { pl: '12px', overflow: 'hidden', display: 'flex' },
                            children: [
                              (0, N.jsx)(G.Z, {
                                variant: 'subheader1',
                                color: k,
                                noWrap: !0,
                                sx: { pr: 1 },
                                children: v.reserve.symbol,
                              }),
                              void 0 !== c &&
                                (0, N.jsx)(Ce, {
                                  dashboardLink: we.Z6.dashboard + '/?marketName=' + Z + '_v3',
                                  marketName: O.marketTitle,
                                  warningType: c,
                                  isolatedV3: !x,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, N.jsx)(Se.h, {
                        children: (0, N.jsxs)(o.Z, {
                          sx: { display: 'flex', alignItems: 'center' },
                          children: [
                            (0, N.jsx)(ye.J, {
                              value: A,
                              symbol: v.reserve.symbol,
                              incentives: I,
                              variant: 'main14',
                              color: k,
                              market: Z,
                            }),
                            (0, N.jsx)(Q.Z, {
                              sx: { px: 1.5 },
                              children: (0, N.jsx)(ne.Z, {
                                fontSize: '14px',
                                color: void 0 === c ? b.palette.text.primary : b.palette.text.muted,
                              }),
                            }),
                            (0, N.jsx)(ye.J, {
                              value: P,
                              symbol: v.reserve.symbol,
                              incentives: M,
                              variant: 'main14',
                              color: k,
                              market: Z,
                            }),
                          ],
                        }),
                      }),
                      !!d &&
                        (0, N.jsx)(Se.h, {
                          children: (0, N.jsxs)(o.Z, {
                            sx: { display: 'flex', alignItems: 'center' },
                            children: [
                              v.usageAsCollateralEnabledOnUser &&
                              '0' !== v.reserve.reserveLiquidationThreshold
                                ? (0, N.jsx)(ge.Z, { fontSize: 'small', color: 'success' })
                                : (0, N.jsx)(Ie.J, { variant: 'main14', color: S }),
                              (0, N.jsx)(Q.Z, {
                                sx: { px: 1.5 },
                                children: (0, N.jsx)(ne.Z, {
                                  fontSize: '14px',
                                  color:
                                    void 0 === c ? b.palette.text.primary : b.palette.text.muted,
                                }),
                              }),
                              B
                                ? (0, N.jsx)(Ee, { enableAsCollateral: d, enabledAsCollateral: l })
                                : l
                                  ? u
                                    ? (0, N.jsxs)(o.Z, {
                                        sx: {
                                          display: 'flex',
                                          flexDirection: 'column',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                        },
                                        children: [
                                          (0, N.jsx)(Q.Z, {
                                            sx: { color: 'warning.main', fontSize: '20px' },
                                            children: (0, N.jsx)(me.Z, {}),
                                          }),
                                          (0, N.jsx)(ke.Ch, {}),
                                        ],
                                      })
                                    : (0, N.jsx)(ge.Z, { fontSize: 'small', color: 'success' })
                                  : (0, N.jsx)(Ie.J, { variant: 'main14', color: S }),
                            ],
                          }),
                        }),
                      m &&
                        (D
                          ? (0, N.jsx)(Se.h, {
                              children: (0, N.jsx)(Ie.J, {
                                variant: 'main14',
                                color: 'text.secondary',
                              }),
                            })
                          : (0, N.jsx)(Se.h, {
                              children: (0, N.jsxs)(o.Z, {
                                sx: { display: 'flex' },
                                children: [
                                  (0, N.jsx)(Ae.B, {
                                    value: v.reserve.formattedBaseLTVasCollateral,
                                    percent: !0,
                                    variant: 'secondary14',
                                    color: k,
                                  }),
                                  (0, N.jsx)(Q.Z, {
                                    sx: { px: 1.5 },
                                    children: (0, N.jsx)(ne.Z, {
                                      fontSize: '14px',
                                      color:
                                        void 0 === c
                                          ? b.palette.text.primary
                                          : b.palette.text.muted,
                                    }),
                                  }),
                                  (0, N.jsx)(Ae.B, {
                                    value: (null === h || void 0 === h ? void 0 : h.ltv) || 0,
                                    percent: !0,
                                    variant: 'secondary14',
                                    color: k,
                                  }),
                                ],
                              }),
                            })),
                      !!p &&
                        (0, N.jsx)(Se.h, {
                          children: (0, N.jsxs)(o.Z, {
                            sx: { display: 'flex' },
                            children: [
                              (0, N.jsx)(K.Z, {
                                variant: 'outlined',
                                size: 'small',
                                sx: { width: '50px', background: b.palette.background.paper },
                                disabled: !0,
                                children: (0, N.jsx)(G.Z, {
                                  variant: 'buttonS',
                                  color: k,
                                  children: p,
                                }),
                              }),
                              (0, N.jsx)(Q.Z, {
                                sx: { px: 1.5 },
                                children: (0, N.jsx)(ne.Z, {
                                  fontSize: '14px',
                                  color:
                                    void 0 === c ? b.palette.text.primary : b.palette.text.muted,
                                }),
                              }),
                              (0, N.jsx)(K.Z, {
                                variant: 'outlined',
                                size: 'small',
                                sx: { width: '50px', background: b.palette.background.paper },
                                disabled: !0,
                                children: (0, N.jsx)(G.Z, {
                                  variant: 'buttonS',
                                  color: k,
                                  children: 'Variable',
                                }),
                              }),
                            ],
                          }),
                        }),
                      !m &&
                        (D
                          ? (0, N.jsx)(Se.h, {
                              children: (0, N.jsx)(Ie.J, {
                                variant: 'main14',
                                color: 'text.secondary',
                              }),
                            })
                          : (0, N.jsx)(Se.h, {
                              children: (0, N.jsxs)(o.Z, {
                                sx: { display: 'flex' },
                                children: [
                                  (0, N.jsx)(Ae.B, {
                                    value: v.reserve.formattedReserveLiquidationThreshold,
                                    percent: !0,
                                    variant: 'secondary14',
                                    color: k,
                                  }),
                                  (0, N.jsx)(Q.Z, {
                                    sx: { px: 1.5 },
                                    children: (0, N.jsx)(ne.Z, {
                                      fontSize: '14px',
                                      color:
                                        void 0 === c
                                          ? b.palette.text.primary
                                          : b.palette.text.muted,
                                    }),
                                  }),
                                  (0, N.jsx)(Ae.B, {
                                    value:
                                      null !==
                                        (r =
                                          null === h || void 0 === h
                                            ? void 0
                                            : h.liquidationThreshold) && void 0 !== r
                                        ? r
                                        : -1,
                                    percent: !0,
                                    variant: 'secondary14',
                                    color: k,
                                  }),
                                ],
                              }),
                            })),
                      (0, N.jsxs)(Se.h, {
                        children: [
                          (0, N.jsx)(Ae.B, { value: i, variant: 'secondary14', color: k }),
                          (0, N.jsx)(Ae.B, {
                            value: s,
                            variant: 'secondary12',
                            color: k,
                            symbol: 'USD',
                            symbolsColor: k,
                          }),
                        ],
                      }),
                    ],
                  }),
                  'stETH' === v.reserve.symbol &&
                    (0, N.jsx)(o.Z, {
                      sx: { pl: '16px', width: '100%' },
                      children: (0, N.jsx)(Re, {
                        v2Price: v.reserve.priceInUSD,
                        v2Amount: i,
                        v3Price: null === h || void 0 === h ? void 0 : h.priceInUSD,
                      }),
                    }),
                ],
              });
        },
        Ue = function (e) {
          var r = e.selectedBorrowAssets,
            t = e.userReserve,
            n = e.toggleSelectedBorrowPosition,
            i = e.v3Rates,
            s = e.enteringIsolation,
            o = (0, d.useMemo)(
              function () {
                return (
                  !t.migrationDisabled &&
                  r.findIndex(function (e) {
                    return e.debtKey === t.reserve.variableDebtTokenAddress;
                  }) >= 0
                );
              },
              [r, t.migrationDisabled, t.reserve.variableDebtTokenAddress]
            ),
            a = t.variableBorrows,
            l = t.variableBorrowsUSD;
          return (0, N.jsx)(
            _e,
            {
              checked: o,
              userReserve: t,
              amount: a,
              amountInUSD: l,
              onCheckboxClick: function () {
                n(t);
              },
              disabled: t.migrationDisabled,
              enabledAsCollateral: t.usageAsCollateralEnabledOnUser,
              borrowApyType: t.interestRate,
              v3Rates: i,
              enteringIsolation: s,
              isSupplyList: !1,
            },
            t.debtKey
          );
        },
        Fe = function () {
          var e = (0, q.Z)();
          return (0, H.Z)(e.breakpoints.down(1125))
            ? (0, N.jsx)(Ve, {})
            : (0, N.jsxs)(De.H, {
                sx: { pl: 0 },
                children: [
                  (0, N.jsx)(Se.h, {
                    align: 'center',
                    maxWidth: 64,
                    minWidth: 64,
                    children: (0, N.jsx)(xe.Z, { width: 16, height: 16 }),
                  }),
                  (0, N.jsx)(Se.h, {
                    align: 'left',
                    isRow: !0,
                    maxWidth: 250,
                    minWidth: 170,
                    children: (0, N.jsxs)(o.Z, {
                      sx: { display: 'inline-flex', alignItems: 'center' },
                      children: [
                        (0, N.jsx)(xe.Z, { variant: 'circular', width: 32, height: 32 }),
                        (0, N.jsx)(xe.Z, { sx: { ml: 3 }, width: 39, height: 20 }),
                      ],
                    }),
                  }),
                  (0, N.jsx)(Se.h, { children: (0, N.jsx)(xe.Z, { width: 120, height: 25 }) }),
                  (0, N.jsx)(Se.h, { children: (0, N.jsx)(xe.Z, { width: 120, height: 25 }) }),
                  (0, N.jsx)(Se.h, { children: (0, N.jsx)(xe.Z, { width: 120, height: 25 }) }),
                  (0, N.jsxs)(Se.h, {
                    children: [
                      (0, N.jsx)(xe.Z, { width: 70, height: 16, sx: { mb: 1 } }),
                      (0, N.jsx)(xe.Z, { width: 50, height: 14 }),
                    ],
                  }),
                ],
              });
        },
        Ve = function () {
          return (0, N.jsxs)(De.H, {
            sx: { display: 'flex', flexDirection: 'column', pl: 0 },
            children: [
              (0, N.jsxs)(o.Z, {
                sx: { display: 'flex', alignItems: 'center', width: '100%', pb: 2, pt: 2.5 },
                children: [
                  (0, N.jsx)(Se.h, {
                    align: 'center',
                    maxWidth: 48,
                    minWidth: 48,
                    children: (0, N.jsx)(xe.Z, { width: 16, height: 16 }),
                  }),
                  (0, N.jsx)(Se.h, {
                    align: 'left',
                    children: (0, N.jsxs)(o.Z, {
                      sx: { display: 'inline-flex', alignItems: 'center' },
                      children: [
                        (0, N.jsx)(xe.Z, { variant: 'circular', width: 32, height: 32 }),
                        (0, N.jsx)(xe.Z, { sx: { ml: 3 }, width: 39, height: 20 }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, N.jsxs)(o.Z, {
                sx: {
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  pb: 4,
                  pl: 12,
                },
                children: [
                  (0, N.jsxs)(o.Z, {
                    sx: { display: 'flex', justifyContent: 'space-between' },
                    children: [
                      (0, N.jsx)(xe.Z, { width: 130, height: 16 }),
                      (0, N.jsxs)(o.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                          gap: 1,
                        },
                        children: [
                          (0, N.jsx)(xe.Z, { width: 50, height: 16 }),
                          (0, N.jsx)(xe.Z, { width: 30, height: 14 }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)(o.Z, {
                    sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
                    children: [
                      (0, N.jsx)(xe.Z, { width: 80, height: 16 }),
                      (0, N.jsx)(xe.Z, { width: 115, height: 16 }),
                    ],
                  }),
                  (0, N.jsxs)(o.Z, {
                    sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
                    children: [
                      (0, N.jsx)(xe.Z, { width: 115, height: 16 }),
                      (0, N.jsx)(xe.Z, { width: 150, height: 16 }),
                    ],
                  }),
                  (0, N.jsxs)(o.Z, {
                    sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
                    children: [
                      (0, N.jsx)(xe.Z, { width: 140, height: 16 }),
                      (0, N.jsx)(xe.Z, { width: 115, height: 16 }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ze = t(88328),
        Le = t(745),
        Ne = t(1924);
      var We = d.forwardRef(function (e, r) {
        return d.createElement(
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
          d.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z',
            clipRule: 'evenodd',
          })
        );
      });
      function qe(e, r) {
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
      function He(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? qe(Object(t), !0).forEach(function (r) {
                (0, i.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : qe(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var Ye = function (e) {
          var r = e.numSelected,
            t = e.allSelected,
            n = e.onSelectAllClick,
            i = e.disabled,
            s = (0, q.Z)(),
            a = {
              border: '2px solid '.concat(s.palette.text.secondary),
              background: s.palette.text.secondary,
              width: 16,
              height: 16,
              borderRadius: '2px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            };
          return i
            ? (0, N.jsx)(ze.M, {
                children: (0, N.jsx)(o.Z, {
                  sx: He(
                    He({}, a),
                    {},
                    {
                      background: s.palette.action.disabledBackground,
                      border: '2px solid '.concat(s.palette.action.disabled),
                      '&:hover': { cursor: 'not-allowed' },
                    }
                  ),
                }),
              })
            : (0, N.jsx)(ze.M, {
                onClick: n,
                children: t
                  ? (0, N.jsx)(o.Z, {
                      sx: a,
                      'data-cy': 'migration-checkbox-all',
                      children: (0, N.jsx)(Q.Z, {
                        sx: { fontSize: '14px', color: 'background.paper' },
                        children: (0, N.jsx)(be.Z, {}),
                      }),
                    })
                  : 0 !== r
                    ? (0, N.jsx)(o.Z, {
                        sx: a,
                        'data-cy': 'migration-checkbox-all',
                        children: (0, N.jsx)(Q.Z, {
                          sx: { fontSize: '16px', color: 'background.paper' },
                          children: (0, N.jsx)(We, {}),
                        }),
                      })
                    : (0, N.jsx)(o.Z, {
                        sx: He(He({}, a), {}, { background: 'white' }),
                        'data-cy': 'migration-checkbox-all',
                      }),
              });
        },
        Je = function (e) {
          var r = e.titleComponent,
            t = e.children,
            n = e.onSelectAllClick,
            i = e.loading,
            a = e.isAvailable,
            l = e.allSelected,
            c = e.numSelected,
            d = e.numAvailable,
            u = e.disabled;
          return (0, N.jsx)(o.Z, {
            sx: { width: '100%' },
            children: (0, N.jsxs)(Ne.l, {
              titleComponent: (0, N.jsx)(G.Z, {
                component: 'div',
                variant: 'h3',
                sx: { mr: 4 },
                children: r,
              }),
              children: [
                (a || i) &&
                  (0, N.jsxs)(Le.u, {
                    sx: { pl: 0 },
                    children: [
                      (0, N.jsx)(Se.h, {
                        align: 'center',
                        maxWidth: 48,
                        minWidth: 48,
                        children: (0, N.jsx)(Ye, {
                          allSelected: l,
                          numSelected: c,
                          onSelectAllClick: n,
                          disabled: u,
                        }),
                      }),
                      (0, N.jsx)(o.Z, {
                        sx: {
                          height: 22,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: (0, N.jsx)(G.Z, {
                          variant: 'subheader2',
                          color: 'text.secondary',
                          children: (0, N.jsx)(s.cC, {
                            id: 'kIpSye',
                            values: { numSelected: c, numAvailable: d },
                          }),
                        }),
                      }),
                    ],
                  }),
                t,
              ],
            }),
          });
        },
        Xe = [
          { title: (0, N.jsx)(s.cC, { id: 'McHlGl' }) },
          { title: (0, N.jsx)(s.cC, { id: '0thX3P' }) },
          { title: (0, N.jsx)(s.cC, { id: '3mXg0z' }) },
          { title: (0, N.jsx)(s.cC, { id: 'FHlMf/' }) },
        ],
        Ge = [
          { title: (0, N.jsx)(s.cC, { id: 'McHlGl' }) },
          { title: (0, N.jsx)(s.cC, { id: 'xaWZ6f' }) },
          { title: (0, N.jsx)(s.cC, { id: 'SSQVIz' }) },
          { title: (0, N.jsx)(s.cC, { id: 'FHlMf/' }) },
        ],
        Ke = function (e) {
          var r = e.titleComponent,
            t = e.children,
            i = e.onSelectAllClick,
            a = e.loading,
            l = e.isAvailable,
            c = e.withCollateral,
            d = e.withBorrow,
            u = e.allSelected,
            x = e.numSelected,
            p = e.numAvailable,
            v = e.disabled,
            h = e.isolatedReserveV3,
            j = (0, q.Z)(),
            f = (0, w.Y)(
              (0, Me.N)(function (e) {
                return [e.currentMarket, e.currentMarketData];
              })
            ),
            m = (0, n.Z)(f, 2),
            b = m[0],
            g = m[1].marketTitle,
            y = we.Z6.dashboard + '/?marketName=' + b + '_v3';
          return (0, H.Z)(j.breakpoints.down(1125))
            ? (0, N.jsx)(Je, {
                titleComponent: r,
                onSelectAllClick: i,
                loading: a,
                isAvailable: l,
                allSelected: u,
                numSelected: x,
                disabled: v,
                numAvailable: p,
                children: t,
              })
            : (0, N.jsx)(o.Z, {
                sx: { width: '100%' },
                children: (0, N.jsxs)(Ne.l, {
                  paperSx: { border: 0, boxShadow: 'none' },
                  titleComponent: (0, N.jsxs)(o.Z, {
                    display: 'block',
                    children: [
                      (0, N.jsx)(G.Z, {
                        component: 'div',
                        variant: 'subheader2',
                        sx: { mr: 4 },
                        children: r,
                      }),
                      h &&
                        !h.enteringIsolationMode &&
                        (0, N.jsx)(o.Z, {
                          sx: { pt: '16px' },
                          children: (0, N.jsx)(ee.v, {
                            severity: 'warning',
                            icon: !1,
                            sx: { mb: 0 },
                            children: (0, N.jsx)(G.Z, {
                              variant: 'caption',
                              color: j.palette.warning[100],
                              children: (0, N.jsx)(s.cC, {
                                id: '9Xj/qR',
                                values: { marketName: g },
                                components: { 0: (0, N.jsx)(we.rU, { href: y }) },
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                  children: [
                    (l || a) &&
                      (0, N.jsxs)(Le.u, {
                        sx: { pl: 0 },
                        children: [
                          (0, N.jsx)(Se.h, {
                            align: 'center',
                            maxWidth: 64,
                            minWidth: 64,
                            children: (0, N.jsx)(Ye, {
                              allSelected: u,
                              numSelected: x,
                              onSelectAllClick: i,
                              disabled: v,
                            }),
                          }),
                          (0, N.jsx)(Se.h, {
                            isRow: !0,
                            maxWidth: 250,
                            minWidth: 170,
                            children: (0, N.jsx)(ze.M, {
                              children: (0, N.jsx)(s.cC, { id: 'GX8GKD' }),
                            }),
                          }),
                          c &&
                            Xe.map(function (e, r) {
                              return (0, N.jsx)(
                                Se.h,
                                { children: (0, N.jsx)(ze.M, { children: e.title }) },
                                r
                              );
                            }),
                          d &&
                            Ge.map(function (e, r) {
                              return (0, N.jsx)(
                                Se.h,
                                { children: (0, N.jsx)(ze.M, { children: e.title }) },
                                r
                              );
                            }),
                        ],
                      }),
                    t,
                  ],
                }),
              });
        },
        Qe = function (e) {
          var r = e.onSelectAllSupplies,
            t = e.onSelectAllBorrows,
            i = e.suppliesPositions,
            o = e.borrowsPositions,
            a = e.loading,
            l = e.isolatedReserveV3,
            c = e.isSupplyPositionsAvailable,
            d = e.isBorrowPositionsAvailable,
            u = e.emodeCategoryId,
            x = e.supplyReserves,
            p = e.borrowReserves,
            v = (0, w.Y)(
              (0, Me.N)(function (e) {
                return [e.selectedMigrationSupplyAssets, e.selectedMigrationBorrowAssets];
              })
            ),
            h = (0, n.Z)(v, 2),
            j = h[0],
            f = h[1],
            m =
              void 0 ===
              x.find(function (e) {
                return void 0 === e.migrationDisabled;
              }),
            b =
              void 0 ===
              p.find(function (e) {
                return void 0 === e.migrationDisabled;
              }),
            g = (0, O.FW)(x, j),
            y = g.activeSelections,
            Z = g.activeUnselected,
            C = (0, O.FW)(p, f),
            k = C.activeSelections,
            S = C.activeUnselected;
          return (0, N.jsxs)(Y.Z, {
            sx: { display: 'flex', flexDirection: 'column', gap: 2, width: '100%' },
            children: [
              (0, N.jsx)(G.Z, {
                variant: 'h3',
                sx: { p: { xs: '16px 24px 0 24px' }, display: { xs: 'none', lg: 'block' } },
                children: 'Assets to migrate',
              }),
              (0, N.jsx)(Ke, {
                isolatedReserveV3: l,
                loading: a,
                onSelectAllClick: r,
                allSelected: 0 === Z.length,
                isAvailable: c,
                titleComponent: (0, N.jsx)(s.cC, { id: 'JumYTK' }),
                emodeCategoryId: u,
                withCollateral: !0,
                disabled: m,
                numSelected: y.length || 0,
                numAvailable: x.length || 0,
                children: i,
              }),
              (0, N.jsx)(Ke, {
                loading: a,
                onSelectAllClick: t,
                allSelected: 0 === S.length,
                isAvailable: d,
                withBorrow: !0,
                disabled: b,
                titleComponent: (0, N.jsx)(s.cC, { id: 'BE2mP0' }),
                numSelected: k.length || 0,
                numAvailable: p.length || 0,
                children: o,
              }),
            ],
          });
        },
        $e = t(96471),
        er = t(33329),
        rr = function () {
          var e = (0, c.useRouter)(),
            r = (0, q.Z)(),
            t = (0, H.Z)(r.breakpoints.down('sm'));
          return (0, N.jsx)(er.f, {
            titleComponent: (0, N.jsx)(o.Z, {
              children: (0, N.jsx)(o.Z, {
                sx: {
                  display: 'flex',
                  alignItems: t ? 'flex-start' : 'center',
                  alignSelf: t ? 'flex-start' : 'center',
                  mb: 4,
                  minHeight: '40px',
                  flexDirection: t ? 'column' : 'row',
                },
                children: (0, N.jsx)(K.Z, {
                  variant: 'surface',
                  size: 'medium',
                  color: 'primary',
                  startIcon: (0, N.jsx)(Q.Z, {
                    sx: { fontSize: '20px' },
                    children: (0, N.jsx)($e.Z, {}),
                  }),
                  onClick: function () {
                    e.push(we.Z6.dashboard);
                  },
                  sx: { mr: 3, mb: t ? '24px' : '0' },
                  'data-cy': 'goBack-btn',
                  children: (0, N.jsx)(s.cC, { id: 'sr0UJD' }),
                }),
              }),
            }),
          });
        };
      function tr(e, r) {
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
      var nr = l()(
          function () {
            return Promise.all([t.e(6138), t.e(1150), t.e(9738)])
              .then(t.bind(t, 58264))
              .then(function (e) {
                return e.MigrateV3Modal;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [58264];
              },
            },
          }
        ),
        ir = Object.keys(ve.ei)
          .map(function (e) {
            return (function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2
                  ? tr(Object(t), !0).forEach(function (r) {
                      (0, i.Z)(e, r, t[r]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : tr(Object(t)).forEach(function (r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                      });
              }
              return e;
            })({}, ve.ei[e]);
          })
          .filter(function (e) {
            return e.addresses.V3_MIGRATOR;
          }),
        sr = [{ title: 'Aave V2 Markets', markets: ir }];
      function or() {
        var e = (0, F.Z)().currentAccount,
          r = (0, c.useRouter)(),
          t = (0, d.useState)(function () {
            if (r.query.market) {
              var e = (0, p.hu)(r.query.market).market;
              if (
                ir.find(function (r) {
                  return r.isFork === e.isFork && r.chainId === e.chainId;
                })
              )
                return e;
            }
            return ir[0];
          }),
          i = t[0],
          a = t[1],
          l = (0, w.Y)(
            (0, Me.N)(function (e) {
              return [
                e.selectAllSupply,
                e.selectAllBorrow,
                e.toggleMigrationSelectedSupplyAsset,
                e.selectedMigrationSupplyAssets,
                e.toggleMigrationSelectedBorrowAsset,
                e.selectedMigrationBorrowAssets,
                e.resetMigrationSelectedAssets,
                e.enforceAsCollateral,
              ];
            })
          ),
          h = (0, n.Z)(l, 8),
          j = h[0],
          f = h[1],
          m = h[2],
          b = h[3],
          g = h[4],
          y = h[5],
          O = h[6],
          S = h[7],
          D = (0, Z.xI)(i.chainId, (0, ve.Mo)(i.chainId)),
          I = (0, v.C)(i, D),
          B = I.data,
          E = I.isPending,
          R = (null === B || void 0 === B ? void 0 : B.supplyReserves) || [],
          U = (null === B || void 0 === B ? void 0 : B.borrowReserves) || [],
          z = null === B || void 0 === B ? void 0 : B.isolatedReserveV3,
          L = (0, _.g)(i),
          W = L.data,
          q = L.isPending,
          H = (0, A.T)(D),
          Y = H.data,
          J = H.isPending,
          X = (0, _.g)(D),
          G = X.data,
          K = X.isPending,
          Q = (null === Y || void 0 === Y ? void 0 : Y.userEmodeCategoryId) || 0,
          $ = (function (e, r) {
            var t,
              n = (0, v.C)(e, r),
              i = (0, M.D)(r),
              s = P(e),
              o = P(r),
              a = (0, k.p)(e, r, null === (t = n.data) || void 0 === t ? void 0 : t.supplyReserves),
              l = (0, w.Y)(function (e) {
                return e.selectedMigrationBorrowAssets;
              }),
              c = (0, w.Y)(function (e) {
                return e.selectedMigrationSupplyAssets;
              });
            return (0, C.W)([n, s, o, i, a], function (e, r, t, n, i) {
              return T(e, r, t, n, c, l, i);
            });
          })(i, D),
          ee = $.data,
          re = $.isPending,
          te = E || q || J || K || re;
        (0, d.useEffect)(
          function () {
            O && O();
          },
          [O]
        );
        var ne = b.length > 1 && G && '0' == G.totalCollateralMarketReferenceCurrency,
          ie = W && G && { fromUserSummaryBeforeMigration: W, toUserSummaryBeforeMigration: G };
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(rr, {}),
            e
              ? (0, N.jsx)(x.O, {
                  children: (0, N.jsxs)(o.Z, {
                    sx: {
                      display: 'flex',
                      gap: 4,
                      alignItems: 'start',
                      flexDirection: { xs: 'column', lg: 'row' },
                    },
                    children: [
                      (0, N.jsx)(fe, {
                        userSummaryAfterMigration: ee,
                        userSummaryBeforeMigration: ie,
                        disableButton: 0 === b.length && 0 === y.length,
                        enteringIsolationMode:
                          (null === z || void 0 === z ? void 0 : z.enteringIsolationMode) || !1,
                        loading: te,
                        fromMarketData: i,
                        toMarketData: D,
                        setFromMarketData: function (e) {
                          O(), a(e);
                        },
                        selectableMarkets: sr,
                      }),
                      (0, N.jsx)(Qe, {
                        loading: te,
                        isSupplyPositionsAvailable: R.length > 0,
                        isBorrowPositionsAvailable: U.length > 0,
                        onSelectAllSupplies: function () {
                          j(R);
                        },
                        onSelectAllBorrows: function () {
                          f(U);
                        },
                        emodeCategoryId: Q,
                        isolatedReserveV3: z,
                        supplyReserves: R,
                        borrowReserves: U,
                        suppliesPositions: (0, N.jsx)(N.Fragment, {
                          children: te
                            ? (0, N.jsxs)(N.Fragment, {
                                children: [(0, N.jsx)(Fe, {}), (0, N.jsx)(Fe, {})],
                              })
                            : R.length > 0
                              ? R.map(function (e) {
                                  return (0, N.jsx)(
                                    _e,
                                    {
                                      checked:
                                        b.findIndex(function (r) {
                                          return r.underlyingAsset == e.underlyingAsset;
                                        }) >= 0,
                                      enableAsCollateral: function () {
                                        return (
                                          (r = e.canBeEnforced),
                                          (t = e.underlyingAsset),
                                          void (r && S(t))
                                        );
                                        var r, t;
                                      },
                                      userControlledCollateral: ne,
                                      canBeEnforced:
                                        G &&
                                        '0' == G.totalCollateralMarketReferenceCurrency &&
                                        e.canBeEnforced,
                                      userReserve: e,
                                      amount: e.underlyingBalance,
                                      amountInUSD: e.underlyingBalanceUSD,
                                      onCheckboxClick: function () {
                                        m(e.underlyingAsset);
                                      },
                                      enabledAsCollateral: e.usageAsCollateralEnabledOnUserV3,
                                      isIsolated: e.isolatedOnV3,
                                      enteringIsolation:
                                        (null === z || void 0 === z
                                          ? void 0
                                          : z.enteringIsolationMode) || !1,
                                      v3Rates: e.v3Rates,
                                      disabled: e.migrationDisabled,
                                      isSupplyList: !0,
                                    },
                                    e.underlyingAsset
                                  );
                                })
                              : (0, N.jsx)(o.Z, {
                                  sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  },
                                  children: (0, N.jsx)(V.N, {
                                    text: (0, N.jsx)(s.cC, { id: 'W5hVah' }),
                                  }),
                                }),
                        }),
                        borrowsPositions: (0, N.jsx)(N.Fragment, {
                          children: te
                            ? (0, N.jsxs)(N.Fragment, {
                                children: [(0, N.jsx)(Fe, {}), (0, N.jsx)(Fe, {})],
                              })
                            : U.length > 0
                              ? U.map(function (e) {
                                  return (0, N.jsx)(
                                    Ue,
                                    {
                                      userReserve: e,
                                      selectedBorrowAssets: y,
                                      toggleSelectedBorrowPosition: g,
                                      v3Rates: e.v3Rates,
                                      enteringIsolation:
                                        (null === z || void 0 === z
                                          ? void 0
                                          : z.enteringIsolationMode) || !1,
                                    },
                                    e.debtKey
                                  );
                                })
                              : (0, N.jsx)(o.Z, {
                                  sx: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  },
                                  children: (0, N.jsx)(V.N, {
                                    text: (0, N.jsx)(s.cC, { id: 't+wtgf' }),
                                  }),
                                }),
                        }),
                      }),
                    ],
                  }),
                })
              : (0, N.jsx)(u.w, { description: (0, N.jsx)(s.cC, { id: 'CsqtLm' }) }),
          ],
        });
      }
      or.getLayout = function (e) {
        return (0, N.jsxs)(U.Z, { children: [e, (0, N.jsx)(nr, {})] });
      };
    },
    49212: function (e, r, t) {
      'use strict';
      t.d(r, {
        G: function () {
          return m;
        },
      });
      var n = t(59499),
        i = t(4730),
        s = t(38264),
        o = t(80822),
        a = t(15861),
        l = t(93946),
        c = t(53219),
        d = t(67294),
        u = t(3062),
        x = t(2127),
        p = t(85893),
        v = ['sx'],
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
      function f(e) {
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
      var m = function (e) {
        var r = e.text,
          t = e.icon,
          n = e.iconSize,
          j = void 0 === n ? 14 : n,
          m = e.iconColor,
          b = e.iconMargin,
          g = e.children,
          y = e.textColor,
          Z = e.wrapperProps,
          w = (Z = void 0 === Z ? {} : Z).sx,
          O = (0, i.Z)(Z, v),
          C = e.event,
          k = e.open,
          S = void 0 !== k && k,
          D = e.setOpen,
          A = (0, i.Z)(e, h),
          I = (0, d.useState)(S),
          P = I[0],
          M = I[1],
          B = (0, u.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, p.jsxs)(
          o.Z,
          f(
            f({ sx: f({ display: 'flex', alignItems: 'center' }, w) }, O),
            {},
            {
              children: [
                r && (0, p.jsx)(a.Z, f(f({}, A), {}, { color: y, children: r })),
                (0, p.jsx)(x.a, {
                  tooltipContent: (0, p.jsx)(p.Fragment, { children: g }),
                  open: P,
                  setOpen: function () {
                    D && D(!P), M(!P);
                  },
                  children: (0, p.jsx)(l.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: j,
                      height: j,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: b || 0.5,
                    },
                    onClick: function () {
                      C && B(C.eventName, f({}, C.eventParams));
                    },
                    children: (0, p.jsx)(c.Z, {
                      sx: {
                        fontSize: j,
                        color: m || (P ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: m || 'info.main' },
                      },
                      children: t || (0, p.jsx)(s.Z, {}),
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
    },
    38063: function (e, r, t) {
      'use strict';
      t.d(r, {
        J: function () {
          return c;
        },
      });
      var n = t(61730),
        i = t(80822),
        s = t(32867),
        o = t(6308),
        a = t(5276),
        l = t(85893),
        c = function (e) {
          var r = e.symbol,
            t = e.value,
            c = e.incentives,
            d = e.address,
            u = e.variant,
            x = void 0 === u ? 'secondary14' : u,
            p = e.symbolsVariant,
            v = e.align,
            h = e.color,
            j = e.tooltip,
            f = e.market,
            m = e.protocolAction,
            b = (0, n.Z)('(max-width:1125px)');
          return (0, l.jsxs)(i.Z, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: v || { xs: 'flex-end', xsm: 'center' },
              justifyContent: 'center',
              textAlign: 'center',
            },
            children: [
              '-1' !== t.toString()
                ? (0, l.jsxs)(i.Z, {
                    sx: { display: 'flex' },
                    children: [
                      (0, l.jsx)(s.B, {
                        'data-cy': 'apy',
                        value: t,
                        percent: !0,
                        variant: x,
                        symbolsVariant: p,
                        color: h,
                        symbolsColor: h,
                      }),
                      j,
                    ],
                  })
                : (0, l.jsx)(o.J, { variant: x, color: h || 'text.secondary' }),
              (0, l.jsxs)(i.Z, {
                sx: b
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
                  (0, l.jsx)(a.MB, { incentives: c, symbol: r }),
                  (0, l.jsx)(a.ET, { symbol: r, market: f, protocolAction: m }),
                  (0, l.jsx)(a.OP, { market: f, rewardedAsset: d, protocolAction: m }),
                  (0, l.jsx)(a.GV, { rewardedAsset: d }),
                  (0, l.jsx)(a.xY, { symbol: r, market: f, protocolAction: m }),
                  (0, l.jsx)(a.DF, { rewardedAsset: d }),
                ],
              }),
            ],
          });
        };
    },
    64311: function (e, r, t) {
      'use strict';
      t.d(r, {
        Ch: function () {
          return f;
        },
        a9: function () {
          return b;
        },
        r$: function () {
          return m;
        },
      });
      var n = t(59499),
        i = t(57499),
        s = t(38264),
        o = t(53219),
        a = t(2734),
        l = t(80822),
        c = t(15861),
        d = t(23795),
        u = t(2127),
        x = t(85893);
      function p(e, r) {
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
            ? p(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : p(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
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
        j = function (e) {
          var r = e.color;
          return (0, x.jsx)(o.Z, {
            sx: { ml: '3px', color: r || 'text.muted', fontSize: '14px' },
            children: (0, x.jsx)(s.Z, {}),
          });
        },
        f = function (e) {
          var r = e.typographyProps,
            t = (0, a.Z)(),
            n = v(
              {
                border: '1px solid '.concat(t.palette.warning.main),
                color: t.palette.warning.main,
              },
              h
            );
          return (0, x.jsx)(u.a, {
            withoutHover: !0,
            tooltipContent: (0, x.jsx)(g, { content: (0, x.jsx)(i.cC, { id: 'bXr0ee' }) }),
            children: (0, x.jsxs)(l.Z, {
              sx: n,
              children: [
                (0, x.jsx)(
                  c.Z,
                  v(
                    v(
                      {
                        variant: 'secondary12',
                        sx: { lineHeight: '0.75rem' },
                        color: t.palette.warning.main,
                      },
                      r
                    ),
                    {},
                    { children: (0, x.jsx)(i.cC, { id: 'KYAjf3' }) }
                  )
                ),
                (0, x.jsx)(j, { color: t.palette.warning.main }),
              ],
            }),
          });
        },
        m = function () {
          return (0, x.jsx)(u.a, {
            tooltipContent: (0, x.jsx)(g, { content: (0, x.jsx)(i.cC, { id: 'N5kUMV' }) }),
            children: (0, x.jsxs)(l.Z, {
              sx: h,
              children: [
                (0, x.jsx)(c.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, x.jsx)(i.cC, { id: 'jqzUyM' }),
                }),
                (0, x.jsx)(j, {}),
              ],
            }),
          });
        },
        b = function () {
          return (0, x.jsx)(u.a, {
            tooltipContent: (0, x.jsx)(g, { content: (0, x.jsx)(i.cC, { id: 'xh6k71' }) }),
            children: (0, x.jsxs)(l.Z, {
              sx: h,
              children: [
                (0, x.jsx)(c.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, x.jsx)(i.cC, { id: 'jqzUyM' }),
                }),
                (0, x.jsx)(j, {}),
              ],
            }),
          });
        },
        g = function (e) {
          var r = e.content;
          return (0, x.jsxs)(l.Z, {
            children: [
              (0, x.jsx)(l.Z, { sx: { mb: 4 }, children: r }),
              (0, x.jsx)(c.Z, {
                variant: 'subheader2',
                color: 'text.secondary',
                children: (0, x.jsx)(i.cC, {
                  id: 'lfEjIE',
                  components: {
                    0: (0, x.jsx)(d.Z, {
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
    88328: function (e, r, t) {
      'use strict';
      t.d(r, {
        M: function () {
          return l;
        },
      });
      var n = t(15861),
        i = t(80822),
        s = t(3062),
        o = t(65361),
        a = t(85893),
        l = function (e) {
          var r = e.sortName,
            t = e.sortDesc,
            l = e.sortKey,
            c = e.source,
            d = e.setSortName,
            u = e.setSortDesc,
            x = e.onClick,
            p = e.children,
            v = (0, s.Y)(function (e) {
              return e.trackEvent;
            });
          return (0, a.jsxs)(n.Z, {
            component: 'div',
            variant: 'subheader2',
            color: 'text.secondary',
            noWrap: !0,
            onClick: function () {
              return x
                ? x()
                : !!l &&
                    ((e = l),
                    v(o.uZ.SORT, { sort_by: e, tile: c }),
                    u && u(!1),
                    d && d(e),
                    void (r === e && u && u(!t)));
              var e;
            },
            sx: {
              cursor: x || l ? 'pointer' : 'default',
              display: 'inline-flex',
              alignItems: 'center',
            },
            children: [
              p,
              !!l &&
                (0, a.jsxs)(i.Z, {
                  sx: { display: 'inline-flex', flexDirection: 'column', ml: 1 },
                  children: [
                    (0, a.jsx)(i.Z, {
                      component: 'span',
                      sx: function (e) {
                        return {
                          width: 0,
                          height: 0,
                          borderStyle: 'solid',
                          borderWidth: '0 4px 4px 4px',
                          borderColor: 'transparent transparent '.concat(
                            r === l && t ? e.palette.text.secondary : e.palette.divider,
                            ' transparent'
                          ),
                          mb: 0.5,
                        };
                      },
                    }),
                    (0, a.jsx)(i.Z, {
                      component: 'span',
                      sx: function (e) {
                        return {
                          width: 0,
                          height: 0,
                          borderStyle: 'solid',
                          borderWidth: '4px 4px 0 4px',
                          borderColor: ''.concat(
                            r !== l || t ? e.palette.divider : e.palette.text.secondary,
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
    745: function (e, r, t) {
      'use strict';
      t.d(r, {
        u: function () {
          return d;
        },
      });
      var n = t(59499),
        i = t(4730),
        s = t(80822),
        o = t(85893),
        a = ['px', 'children'];
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
      function c(e) {
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
        var r = e.px,
          t = void 0 === r ? 4 : r,
          n = e.children,
          l = (0, i.Z)(e, a);
        return (0, o.jsx)(
          s.Z,
          c(
            c({}, l),
            {},
            {
              sx: c(
                {
                  display: 'flex',
                  alignItems: 'flex-end',
                  px: t,
                  pt: 4,
                  pb: 1,
                  position: 'sticky',
                  top: 0,
                  zIndex: 100,
                  bgcolor: 'background.paper',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                },
                l.sx
              ),
              children: n,
            }
          )
        );
      };
    },
    6308: function (e, r, t) {
      'use strict';
      t.d(r, {
        J: function () {
          return l;
        },
      });
      var n = t(59499),
        i = t(15861),
        s = (t(67294), t(85893));
      function o(e, r) {
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
      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? o(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : o(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var l = function (e) {
        return (0, s.jsx)(i.Z, a(a({}, e), {}, { children: '\u2014' }));
      };
    },
    20986: function (e, r, t) {
      'use strict';
      t.d(r, {
        X: function () {
          return u;
        },
      });
      var n = t(59499),
        i = t(4730),
        s = t(80822),
        o = t(15861),
        a = t(85893),
        l = ['caption', 'children', 'captionVariant', 'captionColor', 'align'];
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
      function d(e) {
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
        var r = e.caption,
          t = e.children,
          n = e.captionVariant,
          c = void 0 === n ? 'secondary16' : n,
          u = e.captionColor,
          x = e.align,
          p = void 0 === x ? 'center' : x,
          v = (0, i.Z)(e, l);
        return (0, a.jsxs)(
          s.Z,
          d(
            d({}, v),
            {},
            {
              sx: d({ display: 'flex', alignItems: p, justifyContent: 'space-between' }, v.sx),
              children: [
                r &&
                  (0, a.jsx)(o.Z, {
                    component: 'div',
                    variant: c,
                    color: u,
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
    35783: function (e, r, t) {
      'use strict';
      t.d(r, {
        v: function () {
          return d;
        },
      });
      var n = t(59499),
        i = t(4730),
        s = t(21737),
        o = t(85893),
        a = ['children', 'sx'];
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
      function c(e) {
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
        var r = e.children,
          t = e.sx,
          n = (0, i.Z)(e, a),
          l = c({ mb: 6, alignItems: 'center', width: '100%' }, t);
        return (0, o.jsx)(s.Z, c(c({ sx: l }, n), {}, { children: r }));
      };
    },
    13918: function (e, r, t) {
      'use strict';
      t.d(r, {
        i: function () {
          return l;
        },
      });
      var n = t(57499),
        i = t(15861),
        s = t(38577),
        o = t(35783),
        a = t(85893),
        l = function (e) {
          var r = e.asset,
            t = e.severity;
          return (0, a.jsxs)(o.v, {
            severity: t || 'info',
            sx: { mb: 3 },
            children: [
              (0, a.jsx)(i.Z, {
                variant: 'subheader1',
                mb: 0.5,
                children: (0, a.jsx)(n.cC, { id: '94OHPx' }),
              }),
              (0, a.jsx)(i.Z, {
                children: (0, a.jsx)(n.cC, {
                  id: 'igkfR1',
                  values: { 0: r || '' },
                  components: {
                    0: (0, a.jsx)(s.rU, {
                      href: 'https://docs.aave.com/faq/aave-v3-features#isolation-mode',
                    }),
                  },
                }),
              }),
            ],
          });
        };
    },
    79764: function (e, r, t) {
      'use strict';
      t.d(r, {
        p: function () {
          return a;
        },
      });
      var n = t(78551),
        i = t(52251),
        s = t(35258),
        o = t(38776),
        a = function (e, r, t) {
          var a = (0, s.z)().migrationService;
          return (0, n.a)({
            queryKey: i.B.migrationExceptions(t || [], e, r),
            queryFn: function () {
              return (
                (0, o.Z)(t, 'Supply exceptions are required'),
                a.getMigrationExceptionSupplyBalances(t, e, r)
              );
            },
            enabled: !!t,
          });
        };
    },
    63689: function (e, r, t) {
      'use strict';
      t.d(r, {
        C: function () {
          return O;
        },
      });
      var n = t(59499),
        i = t(4730),
        s = t(80854),
        o = t(1279),
        a = t(27484),
        l = t.n(a),
        c = t(42568),
        d = t.n(c),
        u = t(3062),
        x = t(12316),
        p = t(47892),
        v = t(32310),
        h = t(354),
        j = t(41917),
        f = t(41783),
        m = t(79764),
        b = ['userReservesData'],
        g = ['userReservesData'];
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
      function Z(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? y(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : y(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var w = d()(function (e, r, t, n, a, c) {
          var d = (0, x.qt)(
              e.reservesData,
              t,
              r.userReserves,
              e.baseCurrencyData,
              l()().unix(),
              r.userEmodeCategoryId
            ),
            u = d.userReservesData,
            p = (0, i.Z)(d, b),
            v = n.userReservesData,
            h = (0, i.Z)(n, g),
            j = r.userEmodeCategoryId,
            f = (0, x.IM)(p),
            m = (0, x.NK)(u);
          if ('0' == p.totalCollateralMarketReferenceCurrency) {
            var y = (0, x.Cz)(c, a, m);
            if (y.length > 0) {
              var w = (0, x.HX)(a, y[0]),
                O = m[w];
              '0' !== O.reserve.reserveLiquidationThreshold &&
                O.reserve.isIsolated &&
                (f = Z(Z({}, O.reserve), {}, { enteringIsolationMode: !0 }));
            }
          }
          var C = v.filter(function (e) {
              return '0' !== e.underlyingBalance;
            }),
            k = (0, x.GZ)(v),
            S = C.map(function (e) {
              var r,
                t,
                n,
                i,
                s = !0,
                l = (0, x.HX)(a, e),
                c = null === (r = m[l]) || void 0 === r ? void 0 : r.reserve.isIsolated,
                d = '0' == (null === (t = m[l]) || void 0 === t ? void 0 : t.underlyingBalance),
                u = m[l];
              if (u) {
                var p = (0, o.hE)(u.reserve.supplyCap).minus(u.reserve.totalLiquidity),
                  v = u.reserve.formattedBaseLTVasCollateral,
                  h = u.reserve.eModes.find(function (e) {
                    return e.id === j;
                  });
                0 !== j && h && (v = h.eMode.formattedLtv),
                  (i = {
                    variableBorrowAPY: u.reserve.variableBorrowAPY,
                    supplyAPY: u.reserve.supplyAPY,
                    aIncentivesData: u.reserve.aIncentivesData,
                    vIncentivesData: u.reserve.vIncentivesData,
                    priceInUSD: u.reserve.priceInUSD,
                    ltv: v,
                  }),
                  u.reserve.isFrozen
                    ? (n = x.b_.ReserveFrozen)
                    : p.isGreaterThan(e.underlyingBalance) || (n = x.b_.NotEnoughtSupplies);
              } else n = x.b_.V3AssetMissing;
              return (
                (s = f
                  ? e.underlyingAsset == f.underlyingAsset
                  : '0' !== (null === u || void 0 === u ? void 0 : u.underlyingBalance)
                    ? null === u || void 0 === u
                      ? void 0
                      : u.usageAsCollateralEnabledOnUser
                    : !c),
                Z(
                  Z({}, e),
                  {},
                  {
                    usageAsCollateralEnabledOnUserV3: s,
                    isolatedOnV3: c,
                    canBeEnforced: d,
                    migrationDisabled: n,
                    v3Rates: i,
                  }
                )
              );
            }),
            D = k.map(function (e) {
              var r,
                t,
                n,
                i = null === (r = m[e.underlyingAsset]) || void 0 === r ? void 0 : r.reserve;
              f && !i.borrowableInIsolation && (t = x.b_.IsolationModeBorrowDisabled);
              var a = m[e.underlyingAsset];
              if (a) {
                var l = a.reserve.formattedReserveLiquidationThreshold,
                  c = a.reserve.eModes.find(function (e) {
                    return e.id === j;
                  });
                0 !== j &&
                  c &&
                  ((t = x.b_.EModeBorrowDisabled), (l = c.eMode.formattedLiquidationThreshold)),
                  (n = {
                    variableBorrowAPY: a.reserve.variableBorrowAPY,
                    supplyAPY: a.reserve.supplyAPY,
                    aIncentivesData: a.reserve.aIncentivesData,
                    vIncentivesData: a.reserve.vIncentivesData,
                    priceInUSD: a.reserve.priceInUSD,
                    liquidationThreshold: l,
                  }),
                  (0, o.hE)(
                    (0, s.gU)(e.increasedVariableBorrows, e.reserve.decimals)
                  ).isGreaterThan(a.reserve.availableLiquidity)
                    ? (t = x.b_.InsufficientLiquidity)
                    : a.reserve.flashLoanEnabled
                      ? a.reserve.isFrozen && (t = x.b_.ReserveFrozen)
                      : (t = x.b_.AssetNotFlashloanable);
              } else t = x.b_.V3AssetMissing;
              return Z(Z({}, e), {}, { v3Rates: n, migrationDisabled: t });
            });
          return {
            totalCollateralUSD: h.totalCollateralUSD,
            totalBorrowsUSD: h.totalBorrowsUSD,
            healthFactor: h.healthFactor,
            borrowReserves: D,
            supplyReserves: S,
            isolatedReserveV3: f,
          };
        }),
        O = function (e, r) {
          var t,
            n = (0, p.J)(r),
            i = (0, h.T)(r),
            s = (0, v.O)(r),
            o = (0, j.g)(e),
            a = null === (t = o.data) || void 0 === t ? void 0 : t.userReservesData,
            l =
              null === a || void 0 === a
                ? void 0
                : a.filter(function (e) {
                    return '0' !== e.underlyingBalance;
                  }),
            c = (0, m.p)(e, r, l),
            d = (0, u.Y)(function (e) {
              return e.selectedMigrationSupplyAssets;
            });
          return (0, f.W)([n, i, s, o, c], function (e, r, t, n, i) {
            return w(e, r, t, n, i, d);
          });
        };
    },
    20863: function (e, r, t) {
      'use strict';
      t.d(r, {
        D: function () {
          return p;
        },
      });
      var n = t(27484),
        i = t.n(n),
        s = t(42568),
        o = t.n(s),
        a = t(12316),
        l = t(47892),
        c = t(32310),
        d = t(354),
        u = t(41783),
        x = o()(function (e, r, t) {
          return (0, a.qt)(
            e.reservesData,
            t,
            r.userReserves,
            e.baseCurrencyData,
            i()().unix(),
            r.userEmodeCategoryId
          );
        }),
        p = function (e) {
          var r = (0, l.J)(e),
            t = (0, d.T)(e),
            n = (0, c.O)(e);
          return (0, u.W)([r, t, n], x);
        };
    },
    26864: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/v3-migration',
        function () {
          return t(28466);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2693, 5276, 2645, 191, 9774, 2888, 179], function () {
      return (r = 26864), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
