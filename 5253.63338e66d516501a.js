'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5253],
  {
    69671: function (e, t, r) {
      r.d(t, {
        O: function () {
          return o;
        },
      });
      var n = r(57499),
        s = r(85893),
        o = function () {
          return (0, s.jsx)(n.cC, { id: 'KoOBI2' });
        };
    },
    73592: function (e, t, r) {
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
    46817: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return d;
        },
      });
      var n = r(59499),
        s = r(4730),
        o = r(57499),
        a = r(73592),
        i = r(49212),
        l = r(85893),
        c = ['capType'];
      function u(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var d = function (e) {
        var t = e.capType,
          r = (0, s.Z)(e, c),
          n =
            t === a.R.supplyCap
              ? (0, l.jsx)(o.cC, { id: '0wGCWc' })
              : (0, l.jsx)(o.cC, { id: 'cBc+4A' });
        return (0, l.jsx)(i.G, p(p({}, r), {}, { children: n }));
      };
    },
    23478: function (e, t, r) {
      r.d(t, {
        W: function () {
          return D;
        },
        l: function () {
          return C;
        },
      });
      var n = r(59499),
        s = r(4730),
        o = r(57499),
        a = r(33740),
        i = r(2734),
        l = r(80822),
        c = r(15861),
        u = r(66489),
        p = r(73601),
        d = r(93946),
        m = r(94054),
        x = r(10315),
        f = r(18972),
        y = r(59334),
        b = r(69417),
        v = r(67294),
        g = r(57333),
        h = r(3062),
        j = r(46817),
        A = r(32867),
        O = r(45640),
        w = r(85893),
        S = ['onChange'];
      function T(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : T(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var C = v.forwardRef(function (e, t) {
          var r = e.onChange,
            n = (0, s.Z)(e, S);
          return (0, w.jsx)(
            g.Z,
            E(
              E({}, n),
              {},
              {
                getInputRef: t,
                onValueChange: function (t) {
                  t.value !== e.value && r({ target: { name: e.name, value: t.value || '' } });
                },
                thousandSeparator: !0,
                isNumericString: !0,
                allowNegative: !1,
              }
            )
          );
        }),
        D = function (e) {
          var t = e.value,
            r = e.usdValue,
            n = e.symbol,
            s = e.onChange,
            v = e.disabled,
            g = e.disableInput,
            S = e.onSelect,
            T = e.assets,
            D = e.capType,
            L = e.maxValue,
            P = e.isMaxSelected,
            I = e.inputTitle,
            _ = e.balanceText,
            k = e.loading,
            N = void 0 !== k && k,
            Z = e.event,
            R = e.selectOptionHeader,
            B = e.selectOption,
            F = e.sx,
            U = void 0 === F ? {} : F,
            z = e.exchangeRateComponent,
            H = (0, i.Z)(),
            W = (0, h.Y)(function (e) {
              return e.trackEvent;
            }),
            M =
              1 === T.length
                ? T[0]
                : T &&
                  T.find(function (e) {
                    return e.symbol === n;
                  });
          return (0, w.jsxs)(
            l.Z,
            E(
              E({}, U),
              {},
              {
                children: [
                  (0, w.jsxs)(l.Z, {
                    sx: { display: 'flex', alignItems: 'center', mb: 1 },
                    children: [
                      (0, w.jsx)(c.Z, {
                        color: 'text.secondary',
                        children: I || (0, w.jsx)(o.cC, { id: 'hehnjM' }),
                      }),
                      D && (0, w.jsx)(j.Y, { capType: D }),
                    ],
                  }),
                  (0, w.jsxs)(l.Z, {
                    sx: function (e) {
                      return {
                        border: '1px solid '.concat(e.palette.divider),
                        borderRadius: '6px',
                        overflow: 'hidden',
                      };
                    },
                    children: [
                      (0, w.jsxs)(l.Z, {
                        sx: { display: 'flex', alignItems: 'center', mb: 0.5, px: 3, py: 2 },
                        children: [
                          N
                            ? (0, w.jsx)(l.Z, {
                                sx: { flex: 1 },
                                children: (0, w.jsx)(u.Z, { color: 'inherit', size: '16px' }),
                              })
                            : (0, w.jsx)(p.ZP, {
                                sx: { flex: 1 },
                                placeholder: '0.00',
                                disabled: v || g,
                                value: t,
                                autoFocus: !0,
                                onChange: function (e) {
                                  s &&
                                    (Number(e.target.value) > Number(L)
                                      ? s('-1')
                                      : s(e.target.value));
                                },
                                inputProps: {
                                  'aria-label': 'amount input',
                                  style: {
                                    fontSize: '21px',
                                    lineHeight: '28,01px',
                                    padding: 0,
                                    height: '28px',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                  },
                                },
                                inputComponent: C,
                              }),
                          '' !== t &&
                            !g &&
                            (0, w.jsx)(d.Z, {
                              sx: {
                                minWidth: 0,
                                p: 0,
                                left: 8,
                                zIndex: 1,
                                color: 'text.muted',
                                '&:hover': { color: 'text.secondary' },
                              },
                              onClick: function () {
                                s && s('');
                              },
                              disabled: v,
                              children: (0, w.jsx)(a.Z, { height: 16 }),
                            }),
                          S && 1 !== T.length
                            ? (0, w.jsx)(m.Z, {
                                children: (0, w.jsxs)(x.Z, {
                                  disabled: v,
                                  value: M.symbol,
                                  onChange: function (e) {
                                    var t = T.find(function (t) {
                                      return t.symbol === e.target.value;
                                    });
                                    S && S(t), s && s('');
                                  },
                                  variant: 'outlined',
                                  className: 'AssetInput__select',
                                  'data-cy': 'assetSelect',
                                  MenuProps: {
                                    sx: {
                                      maxHeight: '240px',
                                      '.MuiPaper-root': {
                                        border:
                                          'dark' === H.palette.mode
                                            ? '1px solid #EBEBED1F'
                                            : 'unset',
                                        boxShadow: '0px 2px 10px 0px #0000001A',
                                      },
                                    },
                                  },
                                  sx: {
                                    p: 0,
                                    '&.AssetInput__select .MuiOutlinedInput-input': {
                                      p: 0,
                                      backgroundColor: 'transparent',
                                      pr: '24px !important',
                                    },
                                    '&.AssetInput__select .MuiOutlinedInput-notchedOutline': {
                                      display: 'none',
                                    },
                                    '&.AssetInput__select .MuiSelect-icon': {
                                      color: 'text.primary',
                                      right: '0%',
                                    },
                                  },
                                  renderValue: function (e) {
                                    var t =
                                      1 === T.length
                                        ? T[0]
                                        : T &&
                                          T.find(function (t) {
                                            return t.symbol === e;
                                          });
                                    return (0, w.jsxs)(l.Z, {
                                      sx: { display: 'flex', alignItems: 'center' },
                                      'data-cy': 'assetsSelectedOption_'.concat(
                                        t.symbol.toUpperCase()
                                      ),
                                      children: [
                                        (0, w.jsx)(O.T1, {
                                          symbol: t.iconSymbol || t.symbol,
                                          aToken: t.aToken,
                                          sx: { mr: 2, ml: 4 },
                                        }),
                                        (0, w.jsx)(c.Z, {
                                          variant: 'main16',
                                          color: 'text.primary',
                                          children: e,
                                        }),
                                      ],
                                    });
                                  },
                                  children: [
                                    R || void 0,
                                    T.map(function (e) {
                                      return (0, w.jsx)(
                                        f.Z,
                                        {
                                          value: e.symbol,
                                          'data-cy': 'assetsSelectOption_'.concat(
                                            e.symbol.toUpperCase()
                                          ),
                                          children: B
                                            ? B(e)
                                            : (0, w.jsxs)(w.Fragment, {
                                                children: [
                                                  (0, w.jsx)(O.T1, {
                                                    aToken: e.aToken,
                                                    symbol: e.iconSymbol || e.symbol,
                                                    sx: { fontSize: '22px', mr: 1 },
                                                  }),
                                                  (0, w.jsx)(y.Z, {
                                                    sx: { mr: 6 },
                                                    children: e.symbol,
                                                  }),
                                                  e.balance &&
                                                    (0, w.jsx)(A.B, {
                                                      value: e.balance,
                                                      compact: !0,
                                                    }),
                                                ],
                                              }),
                                        },
                                        e.symbol
                                      );
                                    }),
                                  ],
                                }),
                              })
                            : (0, w.jsxs)(l.Z, {
                                sx: { display: 'inline-flex', alignItems: 'center' },
                                children: [
                                  (0, w.jsx)(O.T1, {
                                    aToken: M.aToken,
                                    symbol: M.iconSymbol || M.symbol,
                                    sx: { mr: 2, ml: 4 },
                                  }),
                                  (0, w.jsx)(c.Z, {
                                    variant: 'h3',
                                    sx: { lineHeight: '28px' },
                                    'data-cy': 'inputAsset',
                                    children: n,
                                  }),
                                ],
                              }),
                        ],
                      }),
                      (0, w.jsxs)(l.Z, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          height: '16px',
                          px: 3,
                          py: 2,
                          mb: 1,
                        },
                        children: [
                          N
                            ? (0, w.jsx)(l.Z, { sx: { flex: 1 } })
                            : (0, w.jsx)(A.B, {
                                value: isNaN(Number(r)) ? 0 : Number(r),
                                compact: !0,
                                symbol: 'USD',
                                variant: 'secondary12',
                                color: 'text.muted',
                                symbolsColor: 'text.muted',
                                flexGrow: 1,
                              }),
                          M.balance &&
                            s &&
                            (0, w.jsxs)(w.Fragment, {
                              children: [
                                (0, w.jsxs)(c.Z, {
                                  component: 'div',
                                  variant: 'secondary12',
                                  color: 'text.secondary',
                                  children: [
                                    _ && '' !== _ ? _ : (0, w.jsx)(o.cC, { id: 'fsBGk0' }),
                                    ' ',
                                    (0, w.jsx)(A.B, {
                                      value: M.balance,
                                      compact: !0,
                                      variant: 'secondary12',
                                      color: 'text.secondary',
                                      symbolsColor: 'text.disabled',
                                    }),
                                  ],
                                }),
                                !g &&
                                  (0, w.jsx)(b.Z, {
                                    size: 'small',
                                    sx: { minWidth: 0, ml: '7px', p: 0 },
                                    onClick: function () {
                                      Z && W(Z.eventName, E({}, Z.eventParams)), s('-1');
                                    },
                                    disabled: v || P,
                                    children: (0, w.jsx)(o.cC, { id: 'CK1KXz' }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                      z &&
                        (0, w.jsx)(l.Z, {
                          sx: {
                            background: H.palette.background.surface,
                            borderTop: '1px solid '.concat(H.palette.divider),
                            px: 3,
                            py: 2,
                          },
                          children: z,
                        }),
                    ],
                  }),
                ],
              }
            )
          );
        };
    },
    15253: function (e, t, r) {
      r.r(t),
        r.d(t, {
          SwapModal: function () {
            return ce;
          },
        });
      var n = r(59499),
        s = r(57499),
        o = r(67294),
        a = r(15629),
        i = r(49679),
        l = r(44949),
        c = r(92519),
        u = r(17674),
        p = r(67484),
        d = r(80822),
        m = r(53219),
        x = r(15861),
        f = r(26447),
        y = r(70794),
        b = r(70946),
        v = r(32867),
        g = r(45640),
        h = r(35783),
        j = r(23478),
        A = r(67944),
        O = r(69671),
        w = r(56845),
        S = r(87886),
        T = r(94751),
        E = r(89771),
        C = r(7568),
        D = r(72005),
        L = r(32356),
        P = r(3062),
        I = r(56705),
        _ = r(69951),
        k = r(58730),
        N = r(84314),
        Z = r(73886),
        R = r(60377),
        B = r(44880),
        F = r(53008),
        U = r(78864),
        z = r(50029),
        H = r(4730),
        W = r(87794),
        M = r.n(W),
        V = r(75331),
        Y = r(80854),
        q = r(15058),
        G = r(84207),
        K = r(85893),
        J = [
          'amountToSwap',
          'amountToReceive',
          'isWrongNetwork',
          'sx',
          'poolReserve',
          'targetReserve',
          'isMaxSelected',
          'useFlashLoan',
          'loading',
          'symbol',
          'blocked',
          'buildTxFn',
        ];
      function X(e, t) {
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
      var Q = function (e) {
          var t,
            r = e.amountToSwap,
            o = e.amountToReceive,
            a = e.isWrongNetwork,
            i = e.sx,
            l = e.poolReserve,
            c = e.targetReserve,
            p = e.isMaxSelected,
            d = e.useFlashLoan,
            m = e.loading,
            x = e.symbol,
            f = e.blocked,
            y = e.buildTxFn,
            b = (0, H.Z)(e, J),
            v = (0, P.Y)(
              (0, Z.N)(function (e) {
                return [e.swapCollateral, e.currentMarketData];
              })
            ),
            g = (0, u.Z)(v, 2),
            h = g[0],
            j = g[1],
            A = (0, q.P)({
              protocolAction: V.UQ.swapCollateral,
              handleGetTxns: (function () {
                var e = (0, z.Z)(
                  M().mark(function e(t, n) {
                    var s;
                    return M().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), y();
                          case 2:
                            return (
                              (s = e.sent),
                              e.abrupt(
                                'return',
                                h({
                                  amountToSwap: r,
                                  amountToReceive: o,
                                  poolReserve: l,
                                  targetReserve: c,
                                  isWrongNetwork: a,
                                  symbol: x,
                                  blocked: f,
                                  isMaxSelected: p,
                                  useFlashLoan: d,
                                  swapCallData: s.swapCallData,
                                  augustus: s.augustus,
                                  signature: t,
                                  deadline: n,
                                  signedAmount: (0, S.sm)(r, l.decimals),
                                })
                              )
                            );
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
              handleGetApprovalTxns: (function () {
                var e = (0, z.Z)(
                  M().mark(function e() {
                    return M().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              h({
                                amountToSwap: r,
                                amountToReceive: o,
                                poolReserve: l,
                                targetReserve: c,
                                isWrongNetwork: a,
                                symbol: x,
                                blocked: f,
                                isMaxSelected: p,
                                useFlashLoan: !1,
                                swapCallData: '0x',
                                augustus: Y.hP,
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
              gasLimitRecommendation: Y.eB[V.UQ.swapCollateral].limit,
              skip: m || !r || 0 === parseFloat(r),
              spender: null !== (t = j.addresses.SWAP_COLLATERAL_ADAPTER) && void 0 !== t ? t : '',
              deps: [c.symbol, r],
            }),
            O = A.approval,
            w = A.action,
            T = A.approvalTxState,
            E = A.mainTxState,
            C = A.loadingTxns,
            D = A.requiresApproval;
          return (0, K.jsx)(
            G.B,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? X(Object(r), !0).forEach(function (t) {
                      (0, n.Z)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : X(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      });
              }
              return e;
            })(
              {
                mainTxState: E,
                approvalTxState: T,
                isWrongNetwork: a,
                preparingTransactions: C,
                handleAction: w,
                requiresAmount: !0,
                amount: r,
                blocked: f,
                handleApproval: function () {
                  return O({ amount: (0, S.sm)(r, l.decimals), underlyingAsset: l.aTokenAddress });
                },
                requiresApproval: D,
                actionText: (0, K.jsx)(s.cC, { id: 'M7wPsD' }),
                actionInProgressText: (0, K.jsx)(s.cC, { id: 'CcRNG6' }),
                sx: i,
                fetchingData: m,
                errorParams: {
                  loading: !1,
                  disabled: f,
                  content: (0, K.jsx)(s.cC, { id: 'M7wPsD' }),
                  handleClick: w,
                },
                tryPermit: !0,
              },
              b
            )
          );
        },
        $ = r(1279),
        ee = r(76384),
        te = r(88078),
        re = r(20986),
        ne = function (e) {
          var t = e.showHealthFactor,
            r = e.healthFactor,
            n = e.healthFactorAfterSwap,
            o = e.swapSource,
            a = e.swapTarget,
            i = e.toAmount,
            l = e.fromAmount,
            c = e.loading,
            u = (0, $.hE)(o.underlyingBalance).minus((0, $.hE)(l)),
            p = (0, $.hE)(a.underlyingBalance).plus((0, $.hE)(i)),
            x = (0, K.jsxs)(K.Fragment, {
              children: [
                (0, K.jsx)(te.Z, {
                  variant: 'rectangular',
                  height: 20,
                  width: 100,
                  sx: { borderRadius: '4px' },
                }),
                (0, K.jsx)(te.Z, {
                  variant: 'rectangular',
                  height: 15,
                  width: 80,
                  sx: { borderRadius: '4px', marginTop: '4px' },
                }),
              ],
            });
          return (0, K.jsxs)(K.Fragment, {
            children: [
              n &&
                (0, K.jsx)(A.jz, {
                  healthFactor: r,
                  futureHealthFactor: n,
                  visibleHfChange: t,
                  loading: c,
                }),
              (0, K.jsx)(A.oD, {
                description: (0, K.jsx)(s.cC, { id: 'nJIhzm' }),
                value: o.reserve.supplyAPY,
                futureValue: a.reserve.supplyAPY,
                percent: !0,
                loading: c,
              }),
              (0, K.jsx)(re.X, {
                caption: (0, K.jsx)(s.cC, { id: 'DuEq2K' }),
                captionVariant: 'description',
                mb: 4,
                children: (0, K.jsx)(d.Z, {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                  },
                  children: c
                    ? (0, K.jsx)(te.Z, {
                        variant: 'rectangular',
                        height: 20,
                        width: 100,
                        sx: { borderRadius: '4px' },
                      })
                    : (0, K.jsxs)(K.Fragment, {
                        children: [
                          (0, K.jsx)(A.JV, { collateralType: o.collateralType }),
                          (0, K.jsxs)(d.Z, {
                            sx: { display: 'flex', alignItems: 'center' },
                            children: [
                              (0, K.jsx)(m.Z, {
                                color: 'primary',
                                sx: { fontSize: '14px', mx: 1 },
                                children: (0, K.jsx)(ee.Z, {}),
                              }),
                              (0, K.jsx)(A.JV, { collateralType: a.collateralType }),
                            ],
                          }),
                        ],
                      }),
                }),
              }),
              (0, K.jsx)(A.aE, {
                incentives: o.reserve.aIncentivesData,
                symbol: o.reserve.symbol,
                futureIncentives: a.reserve.aIncentivesData,
                futureSymbol: a.reserve.symbol,
                loading: c,
              }),
              (0, K.jsx)(A.oD, {
                description: (0, K.jsx)(s.cC, { id: 'PcBUgb' }),
                value: o.reserve.formattedReserveLiquidationThreshold,
                futureValue: a.reserve.formattedReserveLiquidationThreshold,
                percent: !0,
                visibleDecimals: 0,
                loading: c,
              }),
              (0, K.jsx)(re.X, {
                caption: (0, K.jsx)(s.cC, { id: 'DR+4uL' }),
                captionVariant: 'description',
                mb: 4,
                align: 'flex-start',
                children: (0, K.jsxs)(d.Z, {
                  sx: { textAlign: 'right' },
                  children: [
                    (0, K.jsx)(d.Z, {
                      sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      },
                      children: c
                        ? x
                        : (0, K.jsxs)(K.Fragment, {
                            children: [
                              (0, K.jsxs)(d.Z, {
                                sx: { display: 'flex', alignItems: 'center' },
                                children: [
                                  (0, K.jsx)(g.T1, {
                                    symbol: o.reserve.iconSymbol,
                                    sx: { mr: 2, ml: 4, fontSize: '16px' },
                                  }),
                                  (0, K.jsx)(v.B, {
                                    value: u.toString(),
                                    variant: 'secondary14',
                                    compact: !0,
                                  }),
                                ],
                              }),
                              (0, K.jsx)(v.B, {
                                value: u.multipliedBy((0, $.hE)(o.reserve.priceInUSD)).toString(),
                                variant: 'helperText',
                                compact: !0,
                                symbol: 'USD',
                                symbolsColor: 'text.secondary',
                                color: 'text.secondary',
                              }),
                            ],
                          }),
                    }),
                    (0, K.jsx)(d.Z, {
                      sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      },
                      mt: 2,
                      children: c
                        ? x
                        : (0, K.jsxs)(K.Fragment, {
                            children: [
                              (0, K.jsxs)(d.Z, {
                                sx: { display: 'flex', alignItems: 'center' },
                                children: [
                                  (0, K.jsx)(g.T1, {
                                    symbol: a.reserve.iconSymbol,
                                    sx: { mr: 2, ml: 4, fontSize: '16px' },
                                  }),
                                  (0, K.jsx)(v.B, {
                                    value: p.toString(),
                                    variant: 'secondary14',
                                    compact: !0,
                                  }),
                                ],
                              }),
                              (0, K.jsx)(v.B, {
                                value: p.multipliedBy((0, $.hE)(a.reserve.priceInUSD)).toString(),
                                variant: 'helperText',
                                compact: !0,
                                symbol: 'USD',
                                symbolsColor: 'text.secondary',
                                color: 'text.secondary',
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      function se(e, t) {
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
      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? se(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : se(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var ae = function (e) {
        var t = e.poolReserve,
          r = e.userReserve,
          n = e.isWrongNetwork,
          a = e.user,
          i = (0, R.HT)(),
          c = i.reserves,
          z = i.marketReferencePriceInUsd,
          H = (0, P.Y)(
            (0, Z.N)(function (e) {
              return [e.currentChainId, e.currentMarket, e.currentNetworkConfig];
            })
          ),
          W = (0, u.Z)(H, 3),
          M = W[0],
          V = W[1],
          Y = W[2],
          q = (0, D.Z)().currentAccount,
          G = (0, l.vR)(),
          J = G.gasLimit,
          X = G.mainTxState,
          $ = G.txError,
          ee = c
            .filter(function (e) {
              return !(0, _.F$)({ symbol: e.symbol, currentMarket: V });
            })
            .filter(function (e) {
              return e.underlyingAsset !== t.underlyingAsset && !e.isFrozen;
            })
            .map(function (e) {
              return { address: e.underlyingAsset, symbol: e.symbol, iconSymbol: e.iconSymbol };
            }),
          te = (0, o.useState)(''),
          re = te[0],
          se = te[1],
          ae = (0, o.useRef)(''),
          ie = (0, o.useState)(ee[0]),
          le = ie[0],
          ce = ie[1],
          ue = (0, o.useState)('0.1'),
          pe = ue[0],
          de = ue[1],
          me = a.userReservesData.find(function (e) {
            return e.underlyingAsset === le.address;
          }),
          xe = y.O.min(
            r.underlyingBalance,
            new y.O(t.availableLiquidity).multipliedBy(0.99)
          ).toString(10),
          fe = '-1' === re,
          ye = fe ? xe : re,
          be = (0, T.k)({
            chainId: Y.underlyingChainId || M,
            userAddress: q,
            swapIn: oe(oe({}, t), {}, { amount: ae.current }),
            swapOut: oe(oe({}, me.reserve), {}, { amount: '0' }),
            max: fe,
            skip: X.loading || !1,
            maxSlippage: Number(pe),
          }),
          ve = be.inputAmountUSD,
          ge = be.inputAmount,
          he = be.outputAmount,
          je = be.outputAmountUSD,
          Ae = be.error,
          Oe = be.loading,
          we = be.buildTxFn,
          Se = Oe && '0' === je,
          Te = (0, k._S)({
            fromAmount: ye,
            fromAssetData: t,
            fromAssetUserData: r,
            user: a,
            toAmountAfterSlippage: he,
            toAssetData: me.reserve,
          }),
          Ee = Te.hfAfterSwap,
          Ce = Te.hfEffectOfFromAmount,
          De = (0, F.gK)(a.healthFactor, Ce),
          Le = (0, I.x)(me.reserve.supplyCap, me.reserve.totalLiquidity),
          Pe = (0, N.N4)(Le, me.reserve.formattedPriceInMarketReferenceCurrency, z),
          Ie = (0, C.W)(),
          _e = void 0;
        Ie.length > 0 && !Ie.includes(t.symbol)
          ? (_e = F.NI.ZERO_LTV_WITHDRAW_BLOCKED)
          : !Le.eq('-1') && Pe.lt(je)
            ? (_e = F.NI.SUPPLY_CAP_REACHED)
            : De && !t.flashLoanEnabled && (_e = F.NI.FLASH_LOAN_NOT_AVAILABLE);
        var ke = function () {
          switch (_e) {
            case F.NI.SUPPLY_CAP_REACHED:
              return (0, K.jsx)(s.cC, { id: '2o/xRt' });
            case F.NI.ZERO_LTV_WITHDRAW_BLOCKED:
              return (0, K.jsx)(s.cC, { id: 'nUK1ou', values: { 0: Ie.join(', ') } });
            case F.NI.FLASH_LOAN_NOT_AVAILABLE:
              return (0, K.jsx)(s.cC, { id: 'BJyN77' });
            default:
              return null;
          }
        };
        if (X.success)
          return (0, K.jsx)(B.R, {
            action: (0, K.jsx)(s.cC, { id: '3BnIWi' }),
            amount: ae.current,
            symbol: t.symbol,
          });
        var Ne =
            a &&
            '0' !== a.totalBorrowsMarketReferenceCurrency &&
            '0' !== t.reserveLiquidationThreshold,
          Ze = (0, E.wD)(me.reserve).debtCeilingReached,
          Re = (0, F.yI)(r, a.totalCollateralUSD, a.isInIsolationMode, Ze),
          Be = (0, E.wD)(me.reserve).debtCeilingReached,
          Fe = (0, F.yI)(me, a.totalCollateralUSD, a.isInIsolationMode, Be);
        if (
          (fe &&
            Re === w.z.ISOLATED_ENABLED &&
            '0' === me.underlyingBalance &&
            (Fe = me.reserve.isIsolated ? w.z.ISOLATED_ENABLED : w.z.ENABLED),
          fe && Re === w.z.ENABLED && '0' === me.underlyingBalance && me.reserve.isIsolated)
        ) {
          var Ue = a.userReservesData.filter(function (e) {
            return e.usageAsCollateralEnabledOnUser;
          });
          1 === Ue.length &&
            Ue[0].underlyingAsset === r.underlyingAsset &&
            (Fe = w.z.ISOLATED_ENABLED);
        }
        var ze = (0, S.IG)(he, pe, me.reserve.decimals);
        return (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(j.W, {
              value: ye,
              onChange: function (e) {
                var t = '-1' === e;
                (ae.current = t ? xe : e), se(e);
              },
              usdValue: ve,
              symbol: t.iconSymbol,
              assets: [
                {
                  balance: xe,
                  address: t.underlyingAsset,
                  symbol: t.symbol,
                  iconSymbol: t.iconSymbol,
                },
              ],
              maxValue: xe,
              inputTitle: (0, K.jsx)(s.cC, { id: '+kLZGu' }),
              balanceText: (0, K.jsx)(s.cC, { id: 'zmTPiV' }),
              isMaxSelected: fe,
            }),
            (0, K.jsxs)(d.Z, {
              sx: { padding: '18px', pt: '14px', display: 'flex', justifyContent: 'space-between' },
              children: [
                (0, K.jsx)(m.Z, {
                  sx: { fontSize: '18px !important' },
                  children: (0, K.jsx)(p.Z, {}),
                }),
                (0, K.jsx)(b.B, { loading: Se, outputAmountUSD: je, inputAmountUSD: ve }),
              ],
            }),
            (0, K.jsx)(j.W, {
              value: he,
              onSelect: ce,
              usdValue: je,
              symbol: le.symbol,
              assets: ee,
              inputTitle: (0, K.jsx)(s.cC, { id: 'ttoh5c' }),
              balanceText: (0, K.jsx)(s.cC, { id: 'zmTPiV' }),
              disableInput: !0,
              loading: Se,
            }),
            Ae &&
              !Se &&
              (0, K.jsx)(x.Z, { variant: 'helperText', color: 'error.main', children: Ae }),
            !Ae &&
              void 0 !== _e &&
              (0, K.jsx)(x.Z, {
                variant: 'helperText',
                color: 'error.main',
                children: (0, K.jsx)(ke, {}),
              }),
            'stETH' === me.reserve.symbol &&
              (0, K.jsx)(h.v, {
                severity: 'warning',
                sx: { mt: 2, mb: 0 },
                children: (0, K.jsx)(O.O, {}),
              }),
            (0, K.jsx)(A.m6, {
              gasLimit: J,
              slippageSelector: (0, K.jsx)(L.n, {
                selectedSlippage: pe,
                setSlippage: de,
                slippageTooltipHeader: (0, K.jsxs)(f.Z, {
                  direction: 'row',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  children: [
                    (0, K.jsx)(s.cC, { id: 'pjO/iH' }),
                    (0, K.jsx)(f.Z, {
                      alignItems: 'end',
                      children: (0, K.jsxs)(f.Z, {
                        direction: 'row',
                        children: [
                          (0, K.jsx)(g.T1, {
                            symbol: me.reserve.iconSymbol,
                            sx: { mr: 1, fontSize: '14px' },
                          }),
                          (0, K.jsx)(v.B, { value: ze, variant: 'secondary12' }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              children: (0, K.jsx)(ne, {
                showHealthFactor: Ne,
                healthFactor: null === a || void 0 === a ? void 0 : a.healthFactor,
                healthFactorAfterSwap: Ee.toString(10),
                swapSource: oe(oe({}, r), {}, { collateralType: Re }),
                swapTarget: oe(oe({}, me), {}, { collateralType: Fe }),
                toAmount: he,
                fromAmount: '' === ye ? '0' : ye,
                loading: Se,
              }),
            }),
            $ && (0, K.jsx)(U.f, { txError: $ }),
            (0, K.jsx)(Q, {
              isMaxSelected: fe,
              poolReserve: t,
              amountToSwap: ge,
              amountToReceive: ze,
              isWrongNetwork: n,
              targetReserve: me.reserve,
              symbol: t.symbol,
              blocked: void 0 !== _e || '' !== Ae || 'stETH' === me.reserve.symbol,
              useFlashLoan: De,
              loading: Oe,
              buildTxFn: we,
            }),
          ],
        });
      };
      function ie(e, t) {
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
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ie(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ie(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var ce = function () {
        var e = (0, l.vR)(),
          t = e.type,
          r = e.close,
          n = e.args;
        return (0, K.jsx)(a.P, {
          open: t === l.w8.Swap,
          setOpen: r,
          children: (0, K.jsx)(c.A, {
            title: (0, K.jsx)(s.cC, { id: 'M7wPsD' }),
            underlyingAsset: n.underlyingAsset,
            children: function (e) {
              return (0, K.jsx)(i.X, {
                children: function (t) {
                  return (0, K.jsx)(ae, le(le({}, e), {}, { user: t }));
                },
              });
            },
          }),
        });
      };
    },
    53008: function (e, t, r) {
      r.d(t, {
        Fi: function () {
          return l;
        },
        NI: function () {
          return n;
        },
        gK: function () {
          return a;
        },
        iv: function () {
          return c;
        },
        pQ: function () {
          return i;
        },
        yI: function () {
          return u;
        },
      });
      var n,
        s = r(70794),
        o = r(56845);
      !(function (e) {
        (e[(e.SUPPLY_CAP_REACHED = 0)] = 'SUPPLY_CAP_REACHED'),
          (e[(e.NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH = 1)] = 'NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED'),
          (e[(e.FLASH_LOAN_NOT_AVAILABLE = 3)] = 'FLASH_LOAN_NOT_AVAILABLE');
      })(n || (n = {}));
      var a = function (e, t) {
          return '-1' !== e && new s.O(e).minus(new s.O(t)).lt('1.05');
        },
        i = 65e3,
        l = 55e3,
        c = function (e) {
          var t = e.approvedAmount,
            r = e.signedAmount,
            n = e.amount;
          return !(
            '-1' === t ||
            '-1' === r ||
            ('0' !== t && Number(t) >= Number(n)) ||
            Number(r) >= Number(n)
          );
        },
        u = function (e, t, r, n) {
          var s = e.reserve;
          if (!s.usageAsCollateralEnabled) return o.z.UNAVAILABLE;
          var a = o.z.ENABLED,
            i = e && '0' !== e.scaledATokenBalance,
            l = '0' !== t;
          return (
            s.isIsolated
              ? n
                ? (a = o.z.UNAVAILABLE)
                : r
                  ? i
                    ? (a = e.usageAsCollateralEnabledOnUser ? o.z.ISOLATED_ENABLED : o.z.DISABLED)
                    : l && (a = o.z.UNAVAILABLE_DUE_TO_ISOLATION)
                  : (a = l ? o.z.ISOLATED_DISABLED : o.z.ISOLATED_ENABLED)
              : (a = r
                  ? o.z.UNAVAILABLE_DUE_TO_ISOLATION
                  : i
                    ? e.usageAsCollateralEnabledOnUser
                      ? o.z.ENABLED
                      : o.z.DISABLED
                    : o.z.ENABLED),
            a
          );
        };
    },
    94751: function (e, t, r) {
      r.d(t, {
        k: function () {
          return c;
        },
      });
      var n = r(50029),
        s = r(87794),
        o = r.n(s),
        a = r(1279),
        i = r(67294),
        l = r(87886),
        c = function (e) {
          var t = e.chainId,
            r = e.max,
            s = e.maxSlippage,
            c = e.swapIn,
            u = e.swapOut,
            p = e.userAddress,
            d = e.skip,
            m = (0, i.useState)('0'),
            x = m[0],
            f = m[1],
            y = (0, i.useState)('0'),
            b = y[0],
            v = y[1],
            g = (0, i.useState)('0'),
            h = g[0],
            j = g[1],
            A = (0, i.useState)('0'),
            O = A[0],
            w = A[1],
            S = (0, i.useState)(),
            T = S[0],
            E = S[1],
            C = (0, i.useState)(!1),
            D = C[0],
            L = C[1],
            P = (0, i.useState)(''),
            I = P[0],
            _ = P[1],
            k = (0, i.useMemo)(
              function () {
                return {
                  underlyingAsset: c.underlyingAsset,
                  decimals: c.decimals,
                  supplyAPY: c.supplyAPY,
                  amount: c.amount,
                  variableBorrowAPY: c.variableBorrowAPY,
                };
              },
              [c.amount, c.decimals, c.supplyAPY, c.underlyingAsset, c.variableBorrowAPY]
            ),
            N = (0, i.useMemo)(
              function () {
                return {
                  underlyingAsset: u.underlyingAsset,
                  decimals: u.decimals,
                  supplyAPY: u.supplyAPY,
                  amount: u.amount,
                  variableBorrowAPY: u.variableBorrowAPY,
                };
              },
              [u.amount, u.decimals, u.supplyAPY, u.underlyingAsset, u.variableBorrowAPY]
            ),
            Z = (0, i.useCallback)(
              function () {
                return (0, l.F8)(k, N, t, p, r);
              },
              [t, k, N, p, r]
            );
          return (
            (0, i.useEffect)(
              function () {
                if (!d) {
                  var e = (function () {
                      var e = (0, n.Z)(
                        o().mark(function e() {
                          var t, r;
                          return o().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      k.underlyingAsset &&
                                      N.underlyingAsset &&
                                      k.amount &&
                                      '0' !== k.amount &&
                                      !isNaN(+k.amount)
                                    ) {
                                      e.next = 7;
                                      break;
                                    }
                                    return (
                                      f('0'), j('0'), w('0'), v('0'), E(void 0), e.abrupt('return')
                                    );
                                  case 7:
                                    return L(!0), (e.prev = 8), (e.next = 11), Z();
                                  case 11:
                                    (t = e.sent),
                                      _(''),
                                      E(t),
                                      f((0, a.Fv)(t.srcAmount, t.srcDecimals)),
                                      v(t.srcUSD),
                                      j((0, a.Fv)(t.destAmount, t.destDecimals)),
                                      w(t.destUSD),
                                      (e.next = 25);
                                    break;
                                  case 20:
                                    (e.prev = 20),
                                      (e.t0 = e.catch(8)),
                                      console.error(e.t0),
                                      (r = (0, l.aE)(e.t0.message)),
                                      _(r);
                                  case 25:
                                    return (e.prev = 25), L(!1), e.finish(25);
                                  case 28:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[8, 20, 25, 28]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })(),
                    t = setTimeout(function () {
                      e();
                    }, 400);
                  return function () {
                    clearTimeout(t);
                  };
                }
              },
              [I, d, k.underlyingAsset, N.underlyingAsset, Z, s, k.amount, p, r]
            ),
            {
              outputAmount: h,
              outputAmountUSD: O,
              inputAmount: x,
              inputAmountUSD: b,
              loading: D,
              error: I,
              buildTxFn: (function () {
                var e = (0, n.Z)(
                  o().mark(function e() {
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (T) {
                              e.next = 2;
                              break;
                            }
                            throw new Error('Route required to build transaction');
                          case 2:
                            return e.abrupt('return', (0, l.xS)(T, c, u, t, p, s));
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
            }
          );
        };
    },
    56705: function (e, t, r) {
      r.d(t, {
        I: function () {
          return l;
        },
        x: function () {
          return i;
        },
      });
      var n = r(80854),
        s = r(1279),
        o = r(70794),
        a = r(84314);
      function i(e, t) {
        return '0' === e ? new o.O(-1) : new o.O(e).minus(t);
      }
      function l(e, t, r, l) {
        if (t.isFrozen) return '0';
        var c = (0, s.hE)(e);
        return (
          c.gt(0) && r.toLowerCase() === n.hP.toLowerCase() && (c = c.minus(l)),
          '0' !== t.supplyCap && (c = o.O.min(c, i(t.supplyCap, t.totalLiquidity))),
          c.lte(0) ? '0' : (0, a.$w)(c.toString(10), t.decimals)
        );
      }
    },
    76384: function (e, t, r) {
      var n = r(67294);
      const s = n.forwardRef(function (e, t) {
        return n.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 2,
              stroke: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          n.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M17 8l4 4m0 0l-4 4m4-4H3',
          })
        );
      });
      t.Z = s;
    },
    67484: function (e, t, r) {
      var n = r(67294);
      const s = n.forwardRef(function (e, t) {
        return n.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 2,
              stroke: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          n.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4',
          })
        );
      });
      t.Z = s;
    },
  },
]);
