'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7310],
  {
    73592: function (e, t, n) {
      var r;
      n.d(t, {
        R: function () {
          return r;
        },
      }),
        (function (e) {
          (e.supplyCap = 'supplyCap'), (e.borrowCap = 'borrowCap');
        })(r || (r = {}));
    },
    46817: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return d;
        },
      });
      var r = n(59499),
        o = n(4730),
        a = n(57499),
        s = n(73592),
        i = n(49212),
        c = n(85893),
        u = ['capType'];
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var d = function (e) {
        var t = e.capType,
          n = (0, o.Z)(e, u),
          r =
            t === s.R.supplyCap
              ? (0, c.jsx)(a.cC, { id: '0wGCWc' })
              : (0, c.jsx)(a.cC, { id: 'cBc+4A' });
        return (0, c.jsx)(i.G, p(p({}, n), {}, { children: r }));
      };
    },
    23478: function (e, t, n) {
      n.d(t, {
        W: function () {
          return L;
        },
        l: function () {
          return C;
        },
      });
      var r = n(59499),
        o = n(4730),
        a = n(57499),
        s = n(33740),
        i = n(2734),
        c = n(80822),
        u = n(15861),
        l = n(66489),
        p = n(73601),
        d = n(93946),
        x = n(94054),
        f = n(10315),
        m = n(18972),
        b = n(59334),
        v = n(69417),
        y = n(67294),
        O = n(57333),
        h = n(3062),
        g = n(46817),
        A = n(32867),
        j = n(45640),
        E = n(85893),
        _ = ['onChange'];
      function T(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : T(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var C = y.forwardRef(function (e, t) {
          var n = e.onChange,
            r = (0, o.Z)(e, _);
          return (0, E.jsx)(
            O.Z,
            S(
              S({}, r),
              {},
              {
                getInputRef: t,
                onValueChange: function (t) {
                  t.value !== e.value && n({ target: { name: e.name, value: t.value || '' } });
                },
                thousandSeparator: !0,
                isNumericString: !0,
                allowNegative: !1,
              }
            )
          );
        }),
        L = function (e) {
          var t = e.value,
            n = e.usdValue,
            r = e.symbol,
            o = e.onChange,
            y = e.disabled,
            O = e.disableInput,
            _ = e.onSelect,
            T = e.assets,
            L = e.capType,
            I = e.maxValue,
            D = e.isMaxSelected,
            N = e.inputTitle,
            P = e.balanceText,
            w = e.loading,
            Z = void 0 !== w && w,
            k = e.event,
            B = e.selectOptionHeader,
            z = e.selectOption,
            R = e.sx,
            H = void 0 === R ? {} : R,
            U = e.exchangeRateComponent,
            V = (0, i.Z)(),
            W = (0, h.Y)(function (e) {
              return e.trackEvent;
            }),
            M =
              1 === T.length
                ? T[0]
                : T &&
                  T.find(function (e) {
                    return e.symbol === r;
                  });
          return (0, E.jsxs)(
            c.Z,
            S(
              S({}, H),
              {},
              {
                children: [
                  (0, E.jsxs)(c.Z, {
                    sx: { display: 'flex', alignItems: 'center', mb: 1 },
                    children: [
                      (0, E.jsx)(u.Z, {
                        color: 'text.secondary',
                        children: N || (0, E.jsx)(a.cC, { id: 'hehnjM' }),
                      }),
                      L && (0, E.jsx)(g.Y, { capType: L }),
                    ],
                  }),
                  (0, E.jsxs)(c.Z, {
                    sx: function (e) {
                      return {
                        border: '1px solid '.concat(e.palette.divider),
                        borderRadius: '6px',
                        overflow: 'hidden',
                      };
                    },
                    children: [
                      (0, E.jsxs)(c.Z, {
                        sx: { display: 'flex', alignItems: 'center', mb: 0.5, px: 3, py: 2 },
                        children: [
                          Z
                            ? (0, E.jsx)(c.Z, {
                                sx: { flex: 1 },
                                children: (0, E.jsx)(l.Z, { color: 'inherit', size: '16px' }),
                              })
                            : (0, E.jsx)(p.ZP, {
                                sx: { flex: 1 },
                                placeholder: '0.00',
                                disabled: y || O,
                                value: t,
                                autoFocus: !0,
                                onChange: function (e) {
                                  o &&
                                    (Number(e.target.value) > Number(I)
                                      ? o('-1')
                                      : o(e.target.value));
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
                            !O &&
                            (0, E.jsx)(d.Z, {
                              sx: {
                                minWidth: 0,
                                p: 0,
                                left: 8,
                                zIndex: 1,
                                color: 'text.muted',
                                '&:hover': { color: 'text.secondary' },
                              },
                              onClick: function () {
                                o && o('');
                              },
                              disabled: y,
                              children: (0, E.jsx)(s.Z, { height: 16 }),
                            }),
                          _ && 1 !== T.length
                            ? (0, E.jsx)(x.Z, {
                                children: (0, E.jsxs)(f.Z, {
                                  disabled: y,
                                  value: M.symbol,
                                  onChange: function (e) {
                                    var t = T.find(function (t) {
                                      return t.symbol === e.target.value;
                                    });
                                    _ && _(t), o && o('');
                                  },
                                  variant: 'outlined',
                                  className: 'AssetInput__select',
                                  'data-cy': 'assetSelect',
                                  MenuProps: {
                                    sx: {
                                      maxHeight: '240px',
                                      '.MuiPaper-root': {
                                        border:
                                          'dark' === V.palette.mode
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
                                    return (0, E.jsxs)(c.Z, {
                                      sx: { display: 'flex', alignItems: 'center' },
                                      'data-cy': 'assetsSelectedOption_'.concat(
                                        t.symbol.toUpperCase()
                                      ),
                                      children: [
                                        (0, E.jsx)(j.T1, {
                                          symbol: t.iconSymbol || t.symbol,
                                          aToken: t.aToken,
                                          sx: { mr: 2, ml: 4 },
                                        }),
                                        (0, E.jsx)(u.Z, {
                                          variant: 'main16',
                                          color: 'text.primary',
                                          children: e,
                                        }),
                                      ],
                                    });
                                  },
                                  children: [
                                    B || void 0,
                                    T.map(function (e) {
                                      return (0, E.jsx)(
                                        m.Z,
                                        {
                                          value: e.symbol,
                                          'data-cy': 'assetsSelectOption_'.concat(
                                            e.symbol.toUpperCase()
                                          ),
                                          children: z
                                            ? z(e)
                                            : (0, E.jsxs)(E.Fragment, {
                                                children: [
                                                  (0, E.jsx)(j.T1, {
                                                    aToken: e.aToken,
                                                    symbol: e.iconSymbol || e.symbol,
                                                    sx: { fontSize: '22px', mr: 1 },
                                                  }),
                                                  (0, E.jsx)(b.Z, {
                                                    sx: { mr: 6 },
                                                    children: e.symbol,
                                                  }),
                                                  e.balance &&
                                                    (0, E.jsx)(A.B, {
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
                            : (0, E.jsxs)(c.Z, {
                                sx: { display: 'inline-flex', alignItems: 'center' },
                                children: [
                                  (0, E.jsx)(j.T1, {
                                    aToken: M.aToken,
                                    symbol: M.iconSymbol || M.symbol,
                                    sx: { mr: 2, ml: 4 },
                                  }),
                                  (0, E.jsx)(u.Z, {
                                    variant: 'h3',
                                    sx: { lineHeight: '28px' },
                                    'data-cy': 'inputAsset',
                                    children: r,
                                  }),
                                ],
                              }),
                        ],
                      }),
                      (0, E.jsxs)(c.Z, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          height: '16px',
                          px: 3,
                          py: 2,
                          mb: 1,
                        },
                        children: [
                          Z
                            ? (0, E.jsx)(c.Z, { sx: { flex: 1 } })
                            : (0, E.jsx)(A.B, {
                                value: isNaN(Number(n)) ? 0 : Number(n),
                                compact: !0,
                                symbol: 'USD',
                                variant: 'secondary12',
                                color: 'text.muted',
                                symbolsColor: 'text.muted',
                                flexGrow: 1,
                              }),
                          M.balance &&
                            o &&
                            (0, E.jsxs)(E.Fragment, {
                              children: [
                                (0, E.jsxs)(u.Z, {
                                  component: 'div',
                                  variant: 'secondary12',
                                  color: 'text.secondary',
                                  children: [
                                    P && '' !== P ? P : (0, E.jsx)(a.cC, { id: 'fsBGk0' }),
                                    ' ',
                                    (0, E.jsx)(A.B, {
                                      value: M.balance,
                                      compact: !0,
                                      variant: 'secondary12',
                                      color: 'text.secondary',
                                      symbolsColor: 'text.disabled',
                                    }),
                                  ],
                                }),
                                !O &&
                                  (0, E.jsx)(v.Z, {
                                    size: 'small',
                                    sx: { minWidth: 0, ml: '7px', p: 0 },
                                    onClick: function () {
                                      k && W(k.eventName, S({}, k.eventParams)), o('-1');
                                    },
                                    disabled: y || D,
                                    children: (0, E.jsx)(a.cC, { id: 'CK1KXz' }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                      U &&
                        (0, E.jsx)(c.Z, {
                          sx: {
                            background: V.palette.background.surface,
                            borderTop: '1px solid '.concat(V.palette.divider),
                            px: 3,
                            py: 2,
                          },
                          children: U,
                        }),
                    ],
                  }),
                ],
              }
            )
          );
        };
    },
    53008: function (e, t, n) {
      n.d(t, {
        Fi: function () {
          return c;
        },
        NI: function () {
          return r;
        },
        gK: function () {
          return s;
        },
        iv: function () {
          return u;
        },
        pQ: function () {
          return i;
        },
        yI: function () {
          return l;
        },
      });
      var r,
        o = n(70794),
        a = n(56845);
      !(function (e) {
        (e[(e.SUPPLY_CAP_REACHED = 0)] = 'SUPPLY_CAP_REACHED'),
          (e[(e.NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH = 1)] = 'NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED'),
          (e[(e.FLASH_LOAN_NOT_AVAILABLE = 3)] = 'FLASH_LOAN_NOT_AVAILABLE');
      })(r || (r = {}));
      var s = function (e, t) {
          return '-1' !== e && new o.O(e).minus(new o.O(t)).lt('1.05');
        },
        i = 65e3,
        c = 55e3,
        u = function (e) {
          var t = e.approvedAmount,
            n = e.signedAmount,
            r = e.amount;
          return !(
            '-1' === t ||
            '-1' === n ||
            ('0' !== t && Number(t) >= Number(r)) ||
            Number(n) >= Number(r)
          );
        },
        l = function (e, t, n, r) {
          var o = e.reserve;
          if (!o.usageAsCollateralEnabled) return a.z.UNAVAILABLE;
          var s = a.z.ENABLED,
            i = e && '0' !== e.scaledATokenBalance,
            c = '0' !== t;
          return (
            o.isIsolated
              ? r
                ? (s = a.z.UNAVAILABLE)
                : n
                  ? i
                    ? (s = e.usageAsCollateralEnabledOnUser ? a.z.ISOLATED_ENABLED : a.z.DISABLED)
                    : c && (s = a.z.UNAVAILABLE_DUE_TO_ISOLATION)
                  : (s = c ? a.z.ISOLATED_DISABLED : a.z.ISOLATED_ENABLED)
              : (s = n
                  ? a.z.UNAVAILABLE_DUE_TO_ISOLATION
                  : i
                    ? e.usageAsCollateralEnabledOnUser
                      ? a.z.ENABLED
                      : a.z.DISABLED
                    : a.z.ENABLED),
            s
          );
        };
    },
    94303: function (e, t, n) {
      n.d(t, {
        M: function () {
          return h;
        },
      });
      var r = n(59499),
        o = n(50029),
        a = n(17674),
        s = n(87794),
        i = n.n(s),
        c = n(75331),
        u = n(80854),
        l = n(21046),
        p = n(56371),
        d = n(92997),
        x = n(72005),
        f = n(3062),
        m = n(805),
        b = n(73886),
        v = n(44949);
      function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : y(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      }
      var h = function (e) {
        var t = e.usePermit,
          n = e.approvedAmount,
          r = e.requiresApproval,
          s = e.assetAddress,
          y = e.symbol,
          h = e.decimals,
          g = e.signatureAmount,
          A = e.onApprovalTxConfirmed,
          j = e.onSignTxCompleted,
          E = e.chainId,
          _ = e.amountToApprove,
          T = (0, f.Y)(
            (0, b.N)(function (e) {
              return [
                e.generateApproval,
                e.generateSignatureRequest,
                e.estimateGasLimit,
                e.addTransaction,
              ];
            })
          ),
          S = (0, a.Z)(T, 4),
          C = S[0],
          L = S[1],
          I = S[2],
          D = S[3],
          N = (0, x.Z)(),
          P = N.signTxData,
          w = N.sendTx,
          Z = (0, v.vR)(),
          k = Z.approvalTxState,
          B = Z.setApprovalTxState,
          z = Z.setTxError,
          R = (function () {
            var e = (0, o.Z)(
              i().mark(function e() {
                var o, a, x, f, b, v;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), !r || !n)) {
                            e.next = 30;
                            break;
                          }
                          if (!t) {
                            e.next = 16;
                            break;
                          }
                          return (
                            B(O(O({}, k), {}, { loading: !0 })),
                            (o = Math.floor(Date.now() / 1e3 + 3600).toString()),
                            (e.next = 7),
                            L(
                              O(
                                O({}, n),
                                {},
                                {
                                  deadline: o,
                                  amount:
                                    '-1' === g
                                      ? l.Bz.toString()
                                      : (0, p.parseUnits)(g, h).toString(),
                                }
                              )
                            )
                          );
                        case 7:
                          return (a = e.sent), (e.next = 10), P(a);
                        case 10:
                          (x = e.sent),
                            j && j({ signature: x, deadline: o, amount: g }),
                            z(void 0),
                            B({ txHash: d.Z, loading: !1, success: !0 }),
                            (e.next = 30);
                          break;
                        case 16:
                          return (
                            (f = C(n, _ ? { amount: _ } : {})),
                            B(O(O({}, k), {}, { loading: !0 })),
                            (e.next = 20),
                            I(f, E)
                          );
                        case 20:
                          return (f = e.sent), (e.next = 23), w(f);
                        case 23:
                          return (b = e.sent), (e.next = 26), b.wait(1);
                        case 26:
                          B({ txHash: b.hash, loading: !1, success: !0 }),
                            z(void 0),
                            D(b.hash, {
                              action: c.UQ.approval,
                              txState: 'success',
                              asset: s,
                              amount: u.ke,
                              assetName: y,
                            }),
                            A && A();
                        case 30:
                          e.next = 37;
                          break;
                        case 32:
                          (e.prev = 32),
                            (e.t0 = e.catch(0)),
                            (v = (0, m.WG)(e.t0, m.aD.GAS_ESTIMATION, !1)),
                            z(v),
                            B({ txHash: void 0, loading: !1 });
                        case 37:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 32]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return { approval: R };
      };
    },
    69986: function (e, t, n) {
      n.d(t, {
        i: function () {
          return i;
        },
        y: function () {
          return c;
        },
      });
      var r = n(78551),
        o = n(3062),
        a = n(52251),
        s = n(13441),
        i = function (e) {
          var t = e.chainId,
            n = e.token,
            i = e.spender,
            c = (0, s.z)().approvedAmountService,
            u = (0, o.Y)(function (e) {
              return e.account;
            });
          return (0, r.a)({
            queryFn: function () {
              return c.getApprovedAmount(t, u, n, i);
            },
            queryKey: a.B.approvedAmount(u, n, i, t),
          });
        },
        c = function (e, t) {
          var n = (0, s.z)().approvedAmountService,
            i = (0, o.Y)(function (e) {
              return e.account;
            });
          return (0, r.a)({
            queryFn: function () {
              return n.getPoolApprovedAmount(e, i, t);
            },
            queryKey: a.B.poolApprovedAmount(i, t, e),
          });
        };
    },
  },
]);
