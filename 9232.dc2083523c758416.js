'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9232],
  {
    49212: function (e, r, n) {
      n.d(r, {
        G: function () {
          return j;
        },
      });
      var t = n(59499),
        s = n(4730),
        i = n(38264),
        o = n(80822),
        a = n(15861),
        c = n(93946),
        l = n(53219),
        d = n(67294),
        u = n(3062),
        x = n(2127),
        p = n(85893),
        m = ['sx'],
        b = [
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
      function v(e) {
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
      var j = function (e) {
        var r = e.text,
          n = e.icon,
          t = e.iconSize,
          f = void 0 === t ? 14 : t,
          j = e.iconColor,
          h = e.iconMargin,
          y = e.children,
          O = e.textColor,
          g = e.wrapperProps,
          w = (g = void 0 === g ? {} : g).sx,
          C = (0, s.Z)(g, m),
          Z = e.event,
          N = e.open,
          k = void 0 !== N && N,
          S = e.setOpen,
          I = (0, s.Z)(e, b),
          P = (0, d.useState)(k),
          T = P[0],
          E = P[1],
          A = (0, u.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, p.jsxs)(
          o.Z,
          v(
            v({ sx: v({ display: 'flex', alignItems: 'center' }, w) }, C),
            {},
            {
              children: [
                r && (0, p.jsx)(a.Z, v(v({}, I), {}, { color: O, children: r })),
                (0, p.jsx)(x.a, {
                  tooltipContent: (0, p.jsx)(p.Fragment, { children: y }),
                  open: T,
                  setOpen: function () {
                    S && S(!T), E(!T);
                  },
                  children: (0, p.jsx)(c.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: f,
                      height: f,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: h || 0.5,
                    },
                    onClick: function () {
                      Z && A(Z.eventName, v({}, Z.eventParams));
                    },
                    children: (0, p.jsx)(l.Z, {
                      sx: {
                        fontSize: f,
                        color: j || (T ? 'info.main' : 'text.muted'),
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
    35783: function (e, r, n) {
      n.d(r, {
        v: function () {
          return d;
        },
      });
      var t = n(59499),
        s = n(4730),
        i = n(21737),
        o = n(85893),
        a = ['children', 'sx'];
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
      var d = function (e) {
        var r = e.children,
          n = e.sx,
          t = (0, s.Z)(e, a),
          c = l({ mb: 6, alignItems: 'center', width: '100%' }, n);
        return (0, o.jsx)(i.Z, l(l({ sx: c }, t), {}, { children: r }));
      };
    },
    15331: function (e, r, n) {
      n.r(r),
        n.d(r, {
          ClaimRewardsModal: function () {
            return G;
          },
        });
      var t,
        s = n(67294),
        i = n(49679),
        o = n(60377),
        a = n(44949),
        c = n(15629),
        l = n(17674),
        d = n(57499),
        u = n(75331),
        x = n(1279),
        p = n(15861),
        m = n(80822),
        b = n(32867),
        f = n(20986),
        v = n(45640),
        j = n(72005),
        h = n(3062),
        y = n(79850),
        O = n(73886),
        g = n(40429),
        w = n(83063),
        C = n(44880),
        Z = n(67944),
        N = n(37096),
        k = n(19408),
        S = n(50029),
        I = n(87794),
        P = n.n(I),
        T = n(92997),
        E = n(84207),
        A = n(85893),
        R = function (e) {
          var r = e.isWrongNetwork,
            n = e.blocked,
            t = e.selectedReward,
            s = (0, h.Y)(function (e) {
              return e.claimRewards;
            }),
            i = (0, o.HT)().reserves,
            a = (0, T.Q)({
              protocolAction: u.UQ.claimRewards,
              eventTxInfo: { assetName: t.symbol, amount: t.balance },
              tryPermit: !1,
              handleGetTxns: (function () {
                var e = (0, S.Z)(
                  P().mark(function e() {
                    return P().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              s({
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
            c = a.action,
            l = a.loadingTxns,
            x = a.mainTxState,
            p = a.requiresApproval;
          return (0, A.jsx)(E.B, {
            requiresApproval: p,
            blocked: n,
            preparingTransactions: l,
            mainTxState: x,
            handleAction: c,
            actionText:
              'all' === t.symbol
                ? (0, A.jsx)(d.cC, { id: '7er5fP' })
                : (0, A.jsx)(d.cC, { id: 'kACpF3', values: { 0: t.symbol } }),
            actionInProgressText: (0, A.jsx)(d.cC, { id: 'KvG1xW' }),
            isWrongNetwork: r,
          });
        },
        D = n(40476),
        U = n(67720),
        M = n(94054),
        _ = n(18972),
        B = n(10315),
        W = function (e) {
          var r = e.rewards,
            n = e.selectedReward,
            t = e.setSelectedReward;
          return (0, A.jsxs)(M.Z, {
            sx: { mb: 1, width: '100%' },
            children: [
              (0, A.jsx)(D.Z, {
                sx: { mb: 1, color: 'text.secondary' },
                children: (0, A.jsx)(d.cC, { id: 'JU6q+W' }),
              }),
              (0, A.jsxs)(B.Z, {
                value: n,
                onChange: function (e) {
                  return t(e.target.value);
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
                    return (0, A.jsx)(p.Z, {
                      color: 'text.primary',
                      children: (0, A.jsx)(d.cC, { id: 'rwVVB7' }),
                    });
                  var n = r.find(function (r) {
                    return r.symbol === e;
                  });
                  return (0, A.jsxs)(m.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: [
                      (0, A.jsx)(v.T1, { symbol: n.symbol, sx: { mr: 2, fontSize: '16px' } }),
                      (0, A.jsx)(p.Z, { color: 'text.primary', children: n.symbol }),
                    ],
                  });
                },
                children: [
                  (0, A.jsx)(_.Z, {
                    value: 'all',
                    children: (0, A.jsx)(p.Z, {
                      variant: 'subheader1',
                      children: (0, A.jsx)(d.cC, { id: 'rwVVB7' }),
                    }),
                  }),
                  (0, A.jsx)(U.Z, {}),
                  r.map(function (e) {
                    return (0, A.jsx)(
                      _.Z,
                      {
                        value: e.symbol,
                        children: (0, A.jsxs)(m.Z, {
                          sx: { display: 'flex', alignItems: 'center' },
                          children: [
                            (0, A.jsx)(v.T1, { symbol: e.symbol, sx: { fontSize: '24px', mr: 3 } }),
                            (0, A.jsx)(p.Z, {
                              variant: 'subheader1',
                              sx: { mr: 1 },
                              children: e.symbol,
                            }),
                            (0, A.jsx)(p.Z, {
                              component: 'span',
                              sx: { display: 'inline-flex', alignItems: 'center' },
                              variant: 'caption',
                              color: 'text.muted',
                              children: '~',
                            }),
                            (0, A.jsx)(b.B, {
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
      !(function (e) {
        e[(e.NOT_ENOUGH_BALANCE = 0)] = 'NOT_ENOUGH_BALANCE';
      })(t || (t = {}));
      var V = function (e) {
          var r = e.user,
            n = e.reserves,
            i = (0, a.vR)(),
            o = i.gasLimit,
            c = i.mainTxState,
            S = i.txError,
            I = (0, h.Y)(
              (0, O.N)(function (e) {
                return [e.currentChainId, e.currentMarketData];
              })
            ),
            P = (0, l.Z)(I, 2),
            T = P[0],
            E = P[1],
            D = (0, j.Z)(),
            U = D.chainId,
            M = D.readOnlyModeAddress,
            _ = (0, s.useState)('0'),
            B = _[0],
            V = _[1],
            G = (0, s.useState)('all'),
            z = G[0],
            F = G[1],
            H = (0, s.useState)([]),
            L = H[0],
            Q = H[1],
            q = (0, s.useState)(),
            J = q[0],
            X = q[1],
            Y = (0, y.Mo)(T);
          (0, s.useEffect)(function () {
            var e = [],
              t = Number(B),
              s = [];
            if (
              (Object.keys(r.calculatedUserIncentives).forEach(function (i) {
                var o = r.calculatedUserIncentives[i],
                  a = (0, x.Fv)(o.claimableRewards, o.rewardTokenDecimals),
                  c = 0;
                if (!E.v3 && Number(a) > 0)
                  if (E.chainId === u.a_.mainnet) {
                    var l = n.find(function (e) {
                      return 'AAVE' === e.symbol;
                    });
                    c = l ? Number(l.priceInUSD) : 0;
                  } else
                    n.forEach(function (e) {
                      e.isWrappedBaseAsset && (c = Number(e.priceInUSD));
                    });
                else c = Number(o.rewardPriceFeed);
                var d = Number(a) * c;
                d > 0 &&
                  (o.assets.forEach(function (e) {
                    -1 === s.indexOf(e) && s.push(e);
                  }),
                  e.push({
                    assets: o.assets,
                    incentiveControllerAddress: o.incentiveControllerAddress,
                    symbol: o.rewardTokenSymbol,
                    balance: a,
                    balanceUsd: d.toString(),
                    rewardTokenAddress: i,
                  }),
                  (t += Number(d)));
              }),
              1 === e.length)
            )
              F(e[0].symbol);
            else if (e.length > 1 && !ee) {
              var i = {
                assets: s,
                incentiveControllerAddress: e[0].incentiveControllerAddress,
                symbol: 'all',
                balance: '0',
                balanceUsd: t.toString(),
                rewardTokenAddress: '',
              };
              F('all'), X(i);
            }
            Q(e), V(t.toString());
          }, []);
          var K = void 0;
          '0' === B && (K = t.NOT_ENOUGH_BALANCE);
          var $ = T !== U,
            ee =
              'all' === z
                ? J
                : L.find(function (e) {
                    return e.symbol === z;
                  });
          return S && S.blocking
            ? (0, A.jsx)(g.D, { txError: S })
            : c.success
              ? (0, A.jsx)(C.R, {
                  action: (0, A.jsx)(d.cC, { id: 'hRWvpI' }),
                  amount: null === ee || void 0 === ee ? void 0 : ee.balanceUsd,
                })
              : (0, A.jsxs)(A.Fragment, {
                  children: [
                    (0, A.jsx)(N.E, { title: 'Claim rewards' }),
                    $ && !M && (0, A.jsx)(k.I, { networkName: Y.name, chainId: T }),
                    void 0 !== K &&
                      (0, A.jsx)(p.Z, {
                        variant: 'helperText',
                        color: 'error.main',
                        children:
                          K === t.NOT_ENOUGH_BALANCE ? (0, A.jsx)(d.cC, { id: 'p3j+mb' }) : null,
                      }),
                    L.length > 1 &&
                      (0, A.jsx)(W, { rewards: L, selectedReward: z, setSelectedReward: F }),
                    ee &&
                      (0, A.jsxs)(Z.m6, {
                        gasLimit: o,
                        children: [
                          'all' === z &&
                            (0, A.jsxs)(A.Fragment, {
                              children: [
                                (0, A.jsx)(f.X, {
                                  caption: (0, A.jsx)(d.cC, { id: 'fsBGk0' }),
                                  captionVariant: 'description',
                                  align: 'flex-start',
                                  mb: 'all' !== ee.symbol ? 0 : 4,
                                  children: (0, A.jsx)(m.Z, {
                                    sx: {
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'flex-end',
                                    },
                                    children: L.map(function (e) {
                                      return (0, A.jsxs)(
                                        m.Z,
                                        {
                                          sx: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            mb: 4,
                                          },
                                          children: [
                                            (0, A.jsxs)(m.Z, {
                                              sx: { display: 'flex', alignItems: 'center' },
                                              children: [
                                                (0, A.jsx)(v.T1, {
                                                  symbol: e.symbol,
                                                  sx: { mr: 1, fontSize: '16px' },
                                                }),
                                                (0, A.jsx)(b.B, {
                                                  value: Number(e.balance),
                                                  variant: 'secondary14',
                                                }),
                                                (0, A.jsx)(p.Z, {
                                                  ml: 1,
                                                  variant: 'secondary14',
                                                  children: e.symbol,
                                                }),
                                              ],
                                            }),
                                            (0, A.jsx)(b.B, {
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
                                (0, A.jsx)(Z.oD, {
                                  description: (0, A.jsx)(d.cC, { id: '/yQcJM' }),
                                  value: B,
                                }),
                              ],
                            }),
                          'all' !== z &&
                            (0, A.jsx)(Z.XJ, {
                              symbol: (0, A.jsx)(v.T1, { symbol: ee.symbol }),
                              futureValue: ee.balance,
                              futureValueUSD: ee.balanceUsd,
                              description: (0, A.jsx)(d.cC, {
                                id: 'jMam5g',
                                values: { 0: ee.symbol },
                              }),
                            }),
                        ],
                      }),
                    S && (0, A.jsx)(w.Q, { txError: S }),
                    (0, A.jsx)(R, {
                      isWrongNetwork: $,
                      selectedReward: null !== ee && void 0 !== ee ? ee : {},
                      blocked: void 0 !== K,
                    }),
                  ],
                });
        },
        G = function () {
          var e = (0, a.vR)(),
            r = e.type,
            n = e.close,
            t = (0, o.HT)().reserves;
          return (0, A.jsx)(c.P, {
            open: r === a.w8.ClaimRewards,
            setOpen: n,
            children: (0, A.jsx)(i.X, {
              children: function (e) {
                return (0, A.jsx)(V, { user: e, reserves: t });
              },
            }),
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
