'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1150],
  {
    67944: function (e, n, r) {
      r.d(n, {
        Bx: function () {
          return C;
        },
        JV: function () {
          return w;
        },
        Pu: function () {
          return k;
        },
        XJ: function () {
          return T;
        },
        aE: function () {
          return L;
        },
        jz: function () {
          return B;
        },
        m6: function () {
          return D;
        },
        oD: function () {
          return S;
        },
        tK: function () {
          return N;
        },
      });
      var t = r(59499),
        i = r(4730),
        a = r(57499),
        s = r(80227),
        o = r(53219),
        c = r(80822),
        l = r(15861),
        d = r(88078),
        x = r(50480),
        u = r(45843),
        p = r(56371),
        j = (r(67294), r(64311)),
        h = r(20986),
        f = r(20929),
        v = r(56845),
        b = r(58941),
        m = r(1790),
        g = r(32867),
        y = r(45640),
        O = r(12242),
        Z = r(85893),
        A = ['description', 'value', 'futureValue', 'numberPrefix', 'iconSymbol', 'loading'];
      function P(e, n) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function E(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? P(Object(r), !0).forEach(function (n) {
                (0, t.Z)(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : P(Object(r)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
        }
        return e;
      }
      var I = (0, Z.jsx)(o.Z, {
          color: 'primary',
          sx: { fontSize: '14px', mx: 1 },
          children: (0, Z.jsx)(s.Z, {}),
        }),
        D = function (e) {
          var n = e.gasLimit,
            r = e.slippageSelector,
            t = e.skipLoad,
            i = e.disabled,
            s = e.children,
            o = e.chainId,
            d = e.showGasStation,
            x = void 0 === d || d;
          return (0, Z.jsxs)(c.Z, {
            sx: { pt: 5 },
            children: [
              (0, Z.jsx)(l.Z, {
                sx: { mb: 1 },
                color: 'text.secondary',
                children: (0, Z.jsx)(a.cC, { id: 'yJUUbn' }),
              }),
              (0, Z.jsx)(c.Z, {
                sx: function (e) {
                  return {
                    p: 3,
                    border: '1px solid '.concat(e.palette.divider),
                    borderRadius: '4px',
                    '.MuiBox-root:last-of-type': { mb: 0 },
                  };
                },
                children: s,
              }),
              x &&
                (0, Z.jsx)(c.Z, {
                  sx: { display: 'flex', justifyContent: 'space-between' },
                  children: (0, Z.jsx)(O.g, {
                    chainId: o,
                    gasLimit: (0, p.parseUnits)(n || '0', 'wei'),
                    skipLoad: t,
                    disabled: i,
                    rightComponent: r,
                  }),
                }),
            ],
          });
        },
        S = function (e) {
          var n = e.description,
            r = e.value,
            t = e.futureValue,
            a = e.numberPrefix,
            s = e.iconSymbol,
            o = e.loading,
            x = void 0 !== o && o,
            u = (0, i.Z)(e, A);
          return (0, Z.jsx)(h.X, {
            caption: n,
            captionVariant: 'description',
            mb: 4,
            children: (0, Z.jsx)(c.Z, {
              sx: { display: 'flex', alignItems: 'center' },
              children: x
                ? (0, Z.jsx)(d.Z, {
                    variant: 'rectangular',
                    height: 20,
                    width: 100,
                    sx: { borderRadius: '4px' },
                  })
                : (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      s && (0, Z.jsx)(y.T1, { symbol: s, sx: { mr: 1, fontSize: '16px' } }),
                      a && (0, Z.jsx)(l.Z, { sx: { mr: 1 }, children: a }),
                      (0, Z.jsx)(g.B, E({ value: r, variant: 'secondary14' }, u)),
                      t &&
                        (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            I,
                            (0, Z.jsx)(g.B, E({ value: t, variant: 'secondary14' }, u)),
                          ],
                        }),
                    ],
                  }),
            }),
          });
        },
        T = function (e) {
          var n = e.description,
            r = e.symbol,
            t = e.value,
            i = e.valueUSD,
            a = e.futureValue,
            s = e.futureValueUSD,
            o = e.hideSymbolSuffix,
            x = e.color,
            u = e.tokenIcon,
            p = e.loading,
            j = void 0 !== p && p;
          return (0, Z.jsx)(h.X, {
            caption: n,
            captionVariant: 'description',
            mb: 4,
            align: 'flex-start',
            children: (0, Z.jsx)(c.Z, {
              sx: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
              children: j
                ? (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(d.Z, {
                        variant: 'rectangular',
                        height: 20,
                        width: 100,
                        sx: { borderRadius: '4px' },
                      }),
                      (0, Z.jsx)(d.Z, {
                        variant: 'rectangular',
                        height: 15,
                        width: 80,
                        sx: { borderRadius: '4px', marginTop: '4px' },
                      }),
                    ],
                  })
                : (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsxs)(c.Z, {
                        sx: { display: 'flex', alignItems: 'center' },
                        children: [
                          t &&
                            (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsx)(g.B, { value: t, variant: 'secondary14', color: x }),
                                !o &&
                                  (0, Z.jsx)(l.Z, { ml: 1, variant: 'secondary14', children: r }),
                                I,
                              ],
                            }),
                          u && (0, Z.jsx)(y.T1, { symbol: u, sx: { mr: 1, fontSize: '14px' } }),
                          (0, Z.jsx)(g.B, { value: a, variant: 'secondary14', color: x }),
                          !o && (0, Z.jsx)(l.Z, { ml: 1, variant: 'secondary14', children: r }),
                        ],
                      }),
                      (0, Z.jsxs)(c.Z, {
                        sx: { display: 'flex', alignItems: 'center' },
                        children: [
                          i &&
                            (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsx)(g.B, {
                                  value: i,
                                  variant: 'helperText',
                                  compact: !0,
                                  symbol: 'USD',
                                }),
                                I,
                              ],
                            }),
                          (0, Z.jsx)(g.B, {
                            value: s,
                            variant: 'helperText',
                            compact: !0,
                            symbol: 'USD',
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
          });
        },
        C = function (e) {
          var n = e.collateralType;
          return (0, Z.jsx)(h.X, {
            caption: (0, Z.jsx)(a.cC, { id: 'DuEq2K' }),
            captionVariant: 'description',
            mb: 4,
            children: (0, Z.jsx)(w, { collateralType: n }),
          });
        },
        w = function (e) {
          var n,
            r = e.collateralType;
          return (0, Z.jsx)(c.Z, {
            sx: { display: 'inline-flex', alignItems: 'center' },
            children: ((n = {}),
            (0, t.Z)(
              n,
              v.z.ENABLED,
              (0, Z.jsx)(l.Z, {
                variant: 'description',
                color: 'success.main',
                children: (0, Z.jsx)(a.cC, { id: 'RxzN1M' }),
              })
            ),
            (0, t.Z)(
              n,
              v.z.ISOLATED_ENABLED,
              (0, Z.jsx)(j.Ch, {
                typographyProps: { variant: 'description', color: 'warning.main' },
              })
            ),
            (0, t.Z)(
              n,
              v.z.DISABLED,
              (0, Z.jsx)(l.Z, {
                variant: 'description',
                color: 'error.main',
                children: (0, Z.jsx)(a.cC, { id: 'E/QGRL' }),
              })
            ),
            (0, t.Z)(
              n,
              v.z.UNAVAILABLE,
              (0, Z.jsx)(l.Z, {
                variant: 'description',
                color: 'error.main',
                children: (0, Z.jsx)(a.cC, { id: 'jqzUyM' }),
              })
            ),
            (0, t.Z)(n, v.z.ISOLATED_DISABLED, (0, Z.jsx)(j.r$, {})),
            (0, t.Z)(n, v.z.UNAVAILABLE_DUE_TO_ISOLATION, (0, Z.jsx)(j.a9, {})),
            n)[r],
          });
        },
        L = function (e) {
          var n = e.incentives,
            r = e.symbol,
            t = e.futureIncentives,
            i = e.futureSymbol,
            s = e.loading,
            o = void 0 !== s && s;
          return n &&
            0 !==
              n.filter(function (e) {
                return '0' !== e.incentiveAPR;
              }).length
            ? (0, Z.jsx)(h.X, {
                caption: (0, Z.jsx)(a.cC, { id: 'w4VBY+' }),
                captionVariant: 'description',
                mb: 4,
                minHeight: 24,
                children: (0, Z.jsx)(c.Z, {
                  sx: { display: 'flex', alignItems: 'center' },
                  children: o
                    ? (0, Z.jsx)(d.Z, {
                        variant: 'rectangular',
                        height: 20,
                        width: 100,
                        sx: { borderRadius: '4px' },
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(m.MB, { incentives: n, symbol: r }),
                          i &&
                            (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                I,
                                (0, Z.jsx)(m.MB, { incentives: t, symbol: i }),
                                t &&
                                  0 === t.length &&
                                  (0, Z.jsx)(l.Z, {
                                    variant: 'secondary14',
                                    children: (0, Z.jsx)(a.cC, { id: 'EdQY6l' }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                }),
              })
            : null;
        },
        B = function (e) {
          var n = e.healthFactor,
            r = e.futureHealthFactor,
            t = e.visibleHfChange,
            i = e.loading,
            s = void 0 !== i && i;
          return '-1' === n && '-1' === r
            ? null
            : (0, Z.jsx)(h.X, {
                caption: (0, Z.jsx)(a.cC, { id: '7ITr5L' }),
                captionVariant: 'description',
                mb: 4,
                align: 'flex-start',
                children: (0, Z.jsxs)(c.Z, {
                  sx: { textAlign: 'right' },
                  children: [
                    (0, Z.jsx)(c.Z, {
                      sx: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' },
                      children: s
                        ? (0, Z.jsx)(d.Z, {
                            variant: 'rectangular',
                            height: 20,
                            width: 80,
                            sx: { borderRadius: '4px' },
                          })
                        : (0, Z.jsxs)(Z.Fragment, {
                            children: [
                              (0, Z.jsx)(b.o, { value: n, variant: 'secondary14' }),
                              t &&
                                (0, Z.jsxs)(Z.Fragment, {
                                  children: [
                                    I,
                                    (0, Z.jsx)(b.o, {
                                      value: isNaN(Number(r)) ? n : r,
                                      variant: 'secondary14',
                                    }),
                                  ],
                                }),
                            ],
                          }),
                    }),
                    (0, Z.jsxs)(l.Z, {
                      variant: 'helperText',
                      color: 'text.secondary',
                      children: [(0, Z.jsx)(a.cC, { id: 'IaA40H' }), ' <1.0'],
                    }),
                  ],
                }),
              });
        },
        k = function (e) {
          var n = e.unwrapped,
            r = e.setUnWrapped,
            t = e.label;
          return (0, Z.jsx)(h.X, {
            captionVariant: 'description',
            sx: { mt: 5 },
            children: (0, Z.jsx)(x.Z, {
              sx: { mx: 0 },
              control: (0, Z.jsx)(u.Z, {
                disableRipple: !0,
                checked: n,
                onClick: function () {
                  return r(!n);
                },
                'data-cy': 'wrappedSwitcher',
              }),
              labelPlacement: 'end',
              label: t,
            }),
          });
        },
        N = function (e) {
          var n = e.cooldownSeconds,
            r = e.loading,
            t = void 0 !== r && r;
          return (0, Z.jsx)(h.X, {
            caption: (0, Z.jsx)(a.cC, { id: 'bNEQeI' }),
            captionVariant: 'description',
            mb: 4,
            children: (0, Z.jsx)(c.Z, {
              sx: { display: 'flex', alignItems: 'center' },
              children: t
                ? (0, Z.jsx)(d.Z, {
                    variant: 'rectangular',
                    height: 20,
                    width: 100,
                    sx: { borderRadius: '4px' },
                  })
                : (0, Z.jsx)(c.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: (0, Z.jsx)(l.Z, {
                      variant: 'secondary14',
                      children: (0, Z.jsx)(f.S, { seconds: n }),
                    }),
                  }),
            }),
          });
        };
    },
    84207: function (e, n, r) {
      r.d(n, {
        B: function () {
          return F;
        },
      });
      var t = r(59499),
        i = r(4730),
        a = r(57499),
        s = r(58057),
        o = r(53219),
        c = r(80822),
        l = r(69417),
        d = r(66489),
        x = r(15861),
        u = r(44949),
        p = r(72005),
        j = r(805),
        h = r(36864),
        f = r(38577),
        v = r(49212),
        b = r(85893);
      function m(e, n) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function g(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? m(Object(r), !0).forEach(function (n) {
                (0, t.Z)(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
        }
        return e;
      }
      var y = function (e) {
          var n = (0, h.Z)({}, e);
          return (0, b.jsx)(
            v.G,
            g(
              g({}, n),
              {},
              {
                children: (0, b.jsx)(a.cC, {
                  id: '5vxk14',
                  components: {
                    0: (0, b.jsx)(f.rU, {
                      href: 'https://eips.ethereum.org/EIPS/eip-2612',
                      underline: 'always',
                    }),
                  },
                }),
              }
            )
          );
        },
        O = r(17674),
        Z = r(56365),
        A = r(23795),
        P = r(67294),
        E = r(64343),
        I = r(22659),
        D = r(35294),
        S = r(18972),
        T = r(59334),
        C = r(48885),
        w = r(64041),
        L = function (e) {
          var n = e.currentMethod,
            r = e.setMethod,
            t = P.useState(null),
            i = (0, O.Z)(t, 2),
            s = i[0],
            l = i[1],
            d = Boolean(s),
            u = function () {
              l(null);
            };
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsxs)(c.Z, {
                onClick: function (e) {
                  l(e.currentTarget);
                },
                sx: { display: 'flex', alignItems: 'center', cursor: 'pointer' },
                'data-cy': 'approveButtonChange',
                children: [
                  (0, b.jsx)(x.Z, {
                    variant: 'subheader2',
                    color: 'info.main',
                    children: (0, b.jsx)(a.cC, { id: 'Pu4bI/', values: { currentMethod: n } }),
                  }),
                  (0, b.jsx)(o.Z, {
                    sx: { fontSize: 16, ml: 1, color: 'info.main' },
                    children: (0, b.jsx)(I.Z, {}),
                  }),
                ],
              }),
              (0, b.jsxs)(D.Z, {
                anchorEl: s,
                open: d,
                onClose: u,
                MenuListProps: { 'aria-labelledby': 'basic-button' },
                keepMounted: !0,
                'data-cy': 'approveMenu_'.concat(n),
                children: [
                  (0, b.jsxs)(S.Z, {
                    'data-cy': 'approveOption_'.concat(w.n.PERMIT),
                    selected: n === w.n.PERMIT,
                    value: w.n.PERMIT,
                    onClick: function () {
                      n === w.n.APPROVE && r(w.n.PERMIT), u();
                    },
                    children: [
                      (0, b.jsx)(T.Z, {
                        primaryTypographyProps: { variant: 'subheader1' },
                        children: (0, b.jsx)(a.cC, { id: 'J/hVSQ', values: { 0: w.n.PERMIT } }),
                      }),
                      (0, b.jsx)(C.Z, {
                        children: (0, b.jsx)(o.Z, {
                          children: n === w.n.PERMIT && (0, b.jsx)(E.Z, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, b.jsxs)(S.Z, {
                    'data-cy': 'approveOption_'.concat(w.n.APPROVE),
                    selected: n === w.n.APPROVE,
                    value: w.n.APPROVE,
                    onClick: function () {
                      n === w.n.PERMIT && r(w.n.APPROVE), u();
                    },
                    children: [
                      (0, b.jsx)(T.Z, {
                        primaryTypographyProps: { variant: 'subheader1' },
                        children: (0, b.jsx)(a.cC, { id: 'J/hVSQ', values: { 0: w.n.APPROVE } }),
                      }),
                      (0, b.jsx)(C.Z, {
                        children: (0, b.jsx)(o.Z, {
                          children: n === w.n.APPROVE && (0, b.jsx)(E.Z, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        B = r(92997),
        k = r(52479),
        N = r(3062),
        V = r(73886),
        M = function () {
          return (0, b.jsx)(o.Z, {
            sx: { ml: '2px', fontSize: '11px' },
            children: (0, b.jsx)(Z.Z, {}),
          });
        },
        R = function (e) {
          var n = e.approvalHash,
            r = e.tryPermit,
            t = (0, N.Y)(
              (0, V.N)(function (e) {
                return [
                  e.account,
                  e.walletApprovalMethodPreference,
                  e.setWalletApprovalMethodPreference,
                  e.currentNetworkConfig,
                ];
              })
            ),
            i = (0, O.Z)(t, 4),
            s = i[0],
            o = i[1],
            l = i[2],
            d = i[3],
            u = (0, k.G)(s).data,
            p = r && o,
            j = n === B.Z;
          return (
            (0, P.useEffect)(
              function () {
                u && o === w.n.PERMIT && l(w.n.APPROVE);
              },
              [u]
            ),
            n || j || !r
              ? n && !p
                ? (0, b.jsx)(c.Z, {
                    sx: {
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      pb: 1,
                    },
                    children:
                      n &&
                      (0, b.jsxs)(A.Z, {
                        variant: 'helperText',
                        href: d.explorerLinkBuilder({ tx: n }),
                        sx: { display: 'inline-flex', alignItems: 'center' },
                        underline: 'hover',
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: [(0, b.jsx)(a.cC, { id: 'AV7cGz' }), (0, b.jsx)(M, {})],
                      }),
                  })
                : (0, b.jsx)(b.Fragment, {})
              : (0, b.jsxs)(c.Z, {
                  sx: { display: 'inline-flex', alignItems: 'center', mb: 2 },
                  children: [
                    (0, b.jsxs)(x.Z, {
                      variant: 'subheader2',
                      color: 'text.secondary',
                      children: [(0, b.jsx)(a.cC, { id: 'vMpNwt' }), '\xa0'],
                    }),
                    (0, b.jsx)(L, {
                      currentMethod: o,
                      setMethod: function (e) {
                        return l(e);
                      },
                    }),
                  ],
                })
          );
        },
        _ = [
          'actionInProgressText',
          'actionText',
          'amount',
          'approvalTxState',
          'handleApproval',
          'handleAction',
          'isWrongNetwork',
          'mainTxState',
          'preparingTransactions',
          'requiresAmount',
          'requiresApproval',
          'sx',
          'symbol',
          'blocked',
          'fetchingData',
          'errorParams',
          'tryPermit',
          'event',
        ];
      function z(e, n) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function U(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? z(Object(r), !0).forEach(function (n) {
                (0, t.Z)(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : z(Object(r)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
        }
        return e;
      }
      var F = function (e) {
        var n = e.actionInProgressText,
          r = e.actionText,
          t = e.amount,
          h = e.approvalTxState,
          f = e.handleApproval,
          v = e.handleAction,
          m = e.isWrongNetwork,
          g = e.mainTxState,
          O = e.preparingTransactions,
          Z = e.requiresAmount,
          A = e.requiresApproval,
          P = e.sx,
          E = e.symbol,
          I = e.blocked,
          D = e.fetchingData,
          S = void 0 !== D && D,
          T = e.errorParams,
          C = e.tryPermit,
          w = (e.event, (0, i.Z)(e, _)),
          L = (0, u.vR)().txError,
          B = (0, p.Z)().readOnlyModeAddress,
          k =
            A &&
            (null === L || void 0 === L ? void 0 : L.txAction) === j.aD.APPROVAL &&
            (null === L || void 0 === L ? void 0 : L.actionBlocked),
          N = Z && Z && 0 === Number(t);
        var V = I
            ? { disabled: !0, content: r }
            : ((null === L || void 0 === L ? void 0 : L.txAction) !== j.aD.GAS_ESTIMATION &&
                  (null === L || void 0 === L ? void 0 : L.txAction) !== j.aD.MAIN_ACTION) ||
                null === L ||
                void 0 === L ||
                !L.actionBlocked
              ? m
                ? { disabled: !0, content: (0, b.jsx)(a.cC, { id: 'KojyJ4' }) }
                : S
                  ? { disabled: !0, content: (0, b.jsx)(a.cC, { id: 'AZOjB8' }) }
                  : N
                    ? { disabled: !0, content: (0, b.jsx)(a.cC, { id: 'iPMIoT' }) }
                    : O
                      ? { disabled: !0, loading: !0 }
                      : null !== g && void 0 !== g && g.loading
                        ? { loading: !0, disabled: !0, content: n }
                        : !A || (null !== h && void 0 !== h && h.success)
                          ? { content: r, handleClick: v }
                          : { disabled: !0, content: r }
              : T || { loading: !1, disabled: !0, content: r },
          M = V.content,
          z = V.disabled,
          F = V.loading,
          H = V.handleClick,
          X =
            !A || m || N || O || k
              ? null
              : null !== h && void 0 !== h && h.loading
                ? {
                    loading: !0,
                    disabled: !0,
                    content: (0, b.jsx)(a.cC, { id: '1Onqx8', values: { symbol: E } }),
                  }
                : null !== h && void 0 !== h && h.success
                  ? {
                      disabled: !0,
                      content: (0, b.jsxs)(b.Fragment, {
                        children: [
                          (0, b.jsx)(a.cC, { id: 'gcFNxP' }),
                          (0, b.jsx)(o.Z, {
                            sx: { fontSize: 20, ml: 2 },
                            children: (0, b.jsx)(s.Z, {}),
                          }),
                        ],
                      }),
                    }
                  : {
                      content: (0, b.jsx)(y, {
                        variant: 'buttonL',
                        iconSize: 20,
                        iconMargin: 2,
                        color: 'white',
                        text: (0, b.jsx)(a.cC, { id: 't81DpC', values: { symbol: E } }),
                      }),
                      handleClick: f,
                    };
        return (0, b.jsxs)(
          c.Z,
          U(
            U({ sx: U({ display: 'flex', flexDirection: 'column', mt: 12 }, P) }, w),
            {},
            {
              children: [
                X &&
                  !B &&
                  (0, b.jsx)(c.Z, {
                    sx: { display: 'flex', justifyContent: 'end', alignItems: 'center' },
                    children: (0, b.jsx)(R, {
                      approvalHash: null === h || void 0 === h ? void 0 : h.txHash,
                      tryPermit: C,
                    }),
                  }),
                X &&
                  !B &&
                  (0, b.jsxs)(l.Z, {
                    variant: 'contained',
                    disabled: X.disabled || I,
                    onClick: function () {
                      return X.handleClick && X.handleClick();
                    },
                    size: 'large',
                    sx: { minHeight: '44px' },
                    'data-cy': 'approvalButton',
                    children: [
                      X.loading &&
                        (0, b.jsx)(d.Z, { color: 'inherit', size: '16px', sx: { mr: 2 } }),
                      X.content,
                    ],
                  }),
                (0, b.jsxs)(l.Z, {
                  variant: 'contained',
                  disabled: z || I || void 0 !== B,
                  onClick: H,
                  size: 'large',
                  sx: U({ minHeight: '44px' }, X ? { mt: 2 } : {}),
                  'data-cy': 'actionButton',
                  children: [
                    F && (0, b.jsx)(d.Z, { color: 'inherit', size: '16px', sx: { mr: 2 } }),
                    M,
                  ],
                }),
                B &&
                  (0, b.jsx)(x.Z, {
                    variant: 'helperText',
                    color: 'warning.main',
                    sx: { textAlign: 'center', mt: 2 },
                    children: (0, b.jsx)(a.cC, { id: 'GgEj+0' }),
                  }),
              ],
            }
          )
        );
      };
    },
    56845: function (e, n, r) {
      var t;
      r.d(n, {
        z: function () {
          return t;
        },
      }),
        (function (e) {
          (e[(e.ENABLED = 0)] = 'ENABLED'),
            (e[(e.ISOLATED_ENABLED = 1)] = 'ISOLATED_ENABLED'),
            (e[(e.DISABLED = 2)] = 'DISABLED'),
            (e[(e.ISOLATED_DISABLED = 3)] = 'ISOLATED_DISABLED'),
            (e[(e.UNAVAILABLE = 4)] = 'UNAVAILABLE'),
            (e[(e.UNAVAILABLE_DUE_TO_ISOLATION = 5)] = 'UNAVAILABLE_DUE_TO_ISOLATION');
        })(t || (t = {}));
    },
  },
]);
