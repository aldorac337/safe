'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9047],
  {
    21815: function (e, r, t) {
      t.r(r),
        t.d(r, {
          AddressZero: function () {
            return n.d;
          },
          EtherSymbol: function () {
            return i;
          },
          HashZero: function () {
            return a.R;
          },
          MaxInt256: function () {
            return o.PS;
          },
          MaxUint256: function () {
            return o.Bz;
          },
          MinInt256: function () {
            return o.$B;
          },
          NegativeOne: function () {
            return o.tL;
          },
          One: function () {
            return o.fh;
          },
          Two: function () {
            return o.Py;
          },
          WeiPerEther: function () {
            return o.Ce;
          },
          Zero: function () {
            return o._Y;
          },
        });
      var n = t(9279),
        o = t(21046),
        a = t(57218);
      const i = '\u039e';
    },
    90286: function (e, r, t) {
      var n = t(59499),
        o = t(4730),
        a = t(88078),
        i = t(80822),
        s = t(15861),
        c = (t(67294), t(60377)),
        l = t(32867),
        u = t(85893),
        d = ['minVal', 'maxVal', 'percentVariant', 'hyphenVariant'];
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
      function x(e) {
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
      r.Z = function (e) {
        var r = e.minVal,
          t = e.maxVal,
          n = e.percentVariant,
          p = e.hyphenVariant,
          m = (0, o.Z)(e, d),
          v = (0, c.HT)(),
          b = v.ghoLoadingData,
          f = v.ghoReserveData;
        if (b) return (0, u.jsx)(a.Z, { width: 70, height: 24 });
        var y = null !== r && void 0 !== r ? r : f.ghoBorrowAPYWithMaxDiscount,
          h = null !== t && void 0 !== t ? t : f.ghoVariableBorrowAPY,
          g = Number((100 * y).toFixed(2)) === Number((100 * h).toFixed(2));
        return (0, u.jsx)(i.Z, {
          sx: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
          children: g
            ? (0, u.jsx)(
                l.B,
                x(
                  {
                    compact: !0,
                    percent: !0,
                    value: y,
                    visibleDecimals: 2,
                    variant: null !== n && void 0 !== n ? n : 'h3',
                    'data-cy': 'apy',
                  },
                  m
                )
              )
            : (0, u.jsxs)(u.Fragment, {
                children: [
                  (0, u.jsx)(
                    l.B,
                    x(
                      {
                        compact: !0,
                        value: 100 * y,
                        visibleDecimals: 2,
                        variant: null !== n && void 0 !== n ? n : 'h3',
                        'data-cy': 'apy-gho-from',
                      },
                      m
                    )
                  ),
                  (0, u.jsx)(s.Z, {
                    variant: null !== p && void 0 !== p ? p : 'secondary16',
                    color: 'text.secondary',
                    sx: { mx: 0.5 },
                    children: '-',
                  }),
                  (0, u.jsx)(
                    l.B,
                    x(
                      {
                        compact: !0,
                        percent: !0,
                        value: h,
                        visibleDecimals: 2,
                        variant: null !== n && void 0 !== n ? n : 'h3',
                        'data-cy': 'apy-gho-till',
                      },
                      m
                    )
                  ),
                ],
              }),
        });
      };
    },
    73592: function (e, r, t) {
      var n;
      t.d(r, {
        R: function () {
          return n;
        },
      }),
        (function (e) {
          (e.supplyCap = 'supplyCap'), (e.borrowCap = 'borrowCap');
        })(n || (n = {}));
    },
    49663: function (e, r, t) {
      t.d(r, {
        B: function () {
          return y;
        },
      });
      var n = t(90116),
        o = t(57499),
        a = t(3439),
        i = t(80822),
        s = t(15861),
        c = t(34386),
        l = t(60377),
        u = t(2127),
        d = t(90286),
        p = t(32867),
        x = t(38577),
        m = t(6308),
        v = t(45640),
        b = t(5276),
        f = t(85893),
        y = function (e) {
          var r = e.value,
            t = e.useApyRange,
            y = e.rangeValues,
            h = void 0 === y ? [0, 0] : y,
            g = e.ghoRoute,
            j = e.stkAaveBalance,
            A = e.userQualifiesForDiscount,
            w = e.onMoreDetailsClick,
            S = e.withTokenIcon,
            O = void 0 !== S && S,
            D = e.forceShowTooltip,
            T = void 0 !== D && D,
            B = e.variant,
            k = void 0 === B ? 'secondary14' : B,
            E = e.color,
            P = void 0 === E ? void 0 : E,
            I = (0, l.HT)().ghoReserveData,
            C = Number(j),
            Z = C >= I.ghoMinDiscountTokenBalanceForDiscount,
            R = (0, f.jsx)(f.Fragment, {}),
            N = A || T;
          return (
            N &&
              (R = (0, f.jsx)(i.Z, {
                sx: {
                  py: 4,
                  px: 6,
                  fontSize: '12px',
                  lineHeight: '16px',
                  a: { fontSize: '12px', lineHeight: '16px', fontWeight: 500 },
                },
                children: (0, f.jsxs)(s.Z, {
                  variant: 'subheader2',
                  children: [
                    (0, f.jsx)(o.cC, {
                      id: 'JK9zf1',
                      values: {
                        0: Z
                          ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                (0, f.jsx)(p.B, {
                                  variant: 'subheader2',
                                  value: C,
                                  visibleDecimals: 2,
                                }),
                                ' ',
                              ],
                            })
                          : null,
                      },
                    }),
                    ' ',
                    (0, f.jsx)(x.rU, {
                      onClick: w,
                      href: g,
                      underline: 'always',
                      variant: 'subheader2',
                      children: (0, f.jsx)(o.cC, { id: 'zwWKhA' }),
                    }),
                  ],
                }),
              })),
            (0, f.jsxs)(i.Z, {
              sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'flex-end', xsm: 'center' },
                justifyContent: 'center',
                textAlign: 'center',
                flex: '2 1 auto',
              },
              children: [
                '-1' !== r.toString()
                  ? (0, f.jsx)(c.Z, {
                      enterTouchDelay: 0,
                      leaveTouchDelay: 0,
                      placement: 'top',
                      title: R,
                      arrow: N,
                      PopperComponent: u.E,
                      children: (0, f.jsxs)(i.Z, {
                        sx: function () {
                          return { display: 'flex', alignItems: 'center' };
                        },
                        children: [
                          O &&
                            (0, f.jsx)(v.T1, {
                              symbol: 'stkAAVE',
                              sx: { height: 14, width: 14, mr: 1 },
                            }),
                          t
                            ? (0, f.jsx)(d.Z, {
                                percentVariant: k,
                                hyphenVariant: k,
                                minVal: Math.min.apply(Math, (0, n.Z)(h)),
                                maxVal: Math.max.apply(Math, (0, n.Z)(h)),
                                color: P,
                              })
                            : (0, f.jsx)(p.B, {
                                value: r,
                                percent: !0,
                                variant: k,
                                color: P,
                                'data-cy': 'apy',
                              }),
                        ],
                      }),
                    })
                  : (0, f.jsx)(m.J, { variant: 'secondary14', color: 'text.secondary' }),
                (0, f.jsx)(b.GV, { rewardedAsset: a.ou.GHO.V_TOKEN }),
              ],
            })
          );
        };
    },
    46817: function (e, r, t) {
      t.d(r, {
        Y: function () {
          return p;
        },
      });
      var n = t(59499),
        o = t(4730),
        a = t(57499),
        i = t(73592),
        s = t(49212),
        c = t(85893),
        l = ['capType'];
      function u(e, r) {
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
            ? u(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : u(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var p = function (e) {
        var r = e.capType,
          t = (0, o.Z)(e, l),
          n =
            r === i.R.supplyCap
              ? (0, c.jsx)(a.cC, { id: '0wGCWc' })
              : (0, c.jsx)(a.cC, { id: 'cBc+4A' });
        return (0, c.jsx)(s.G, d(d({}, t), {}, { children: n }));
      };
    },
    6308: function (e, r, t) {
      t.d(r, {
        J: function () {
          return c;
        },
      });
      var n = t(59499),
        o = t(15861),
        a = (t(67294), t(85893));
      function i(e, r) {
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
      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? i(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : i(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var c = function (e) {
        return (0, a.jsx)(o.Z, s(s({}, e), {}, { children: '\u2014' }));
      };
    },
    23478: function (e, r, t) {
      t.d(r, {
        W: function () {
          return k;
        },
        l: function () {
          return B;
        },
      });
      var n = t(59499),
        o = t(4730),
        a = t(57499),
        i = t(33740),
        s = t(2734),
        c = t(80822),
        l = t(15861),
        u = t(66489),
        d = t(73601),
        p = t(93946),
        x = t(94054),
        m = t(10315),
        v = t(18972),
        b = t(59334),
        f = t(69417),
        y = t(67294),
        h = t(57333),
        g = t(3062),
        j = t(46817),
        A = t(32867),
        w = t(45640),
        S = t(85893),
        O = ['onChange'];
      function D(e, r) {
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
      function T(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? D(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : D(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var B = y.forwardRef(function (e, r) {
          var t = e.onChange,
            n = (0, o.Z)(e, O);
          return (0, S.jsx)(
            h.Z,
            T(
              T({}, n),
              {},
              {
                getInputRef: r,
                onValueChange: function (r) {
                  r.value !== e.value && t({ target: { name: e.name, value: r.value || '' } });
                },
                thousandSeparator: !0,
                isNumericString: !0,
                allowNegative: !1,
              }
            )
          );
        }),
        k = function (e) {
          var r = e.value,
            t = e.usdValue,
            n = e.symbol,
            o = e.onChange,
            y = e.disabled,
            h = e.disableInput,
            O = e.onSelect,
            D = e.assets,
            k = e.capType,
            E = e.maxValue,
            P = e.isMaxSelected,
            I = e.inputTitle,
            C = e.balanceText,
            Z = e.loading,
            R = void 0 !== Z && Z,
            N = e.event,
            M = e.selectOptionHeader,
            L = e.selectOption,
            _ = e.sx,
            F = void 0 === _ ? {} : _,
            U = e.exchangeRateComponent,
            Y = (0, s.Z)(),
            V = (0, g.Y)(function (e) {
              return e.trackEvent;
            }),
            z =
              1 === D.length
                ? D[0]
                : D &&
                  D.find(function (e) {
                    return e.symbol === n;
                  });
          return (0, S.jsxs)(
            c.Z,
            T(
              T({}, F),
              {},
              {
                children: [
                  (0, S.jsxs)(c.Z, {
                    sx: { display: 'flex', alignItems: 'center', mb: 1 },
                    children: [
                      (0, S.jsx)(l.Z, {
                        color: 'text.secondary',
                        children: I || (0, S.jsx)(a.cC, { id: 'hehnjM' }),
                      }),
                      k && (0, S.jsx)(j.Y, { capType: k }),
                    ],
                  }),
                  (0, S.jsxs)(c.Z, {
                    sx: function (e) {
                      return {
                        border: '1px solid '.concat(e.palette.divider),
                        borderRadius: '6px',
                        overflow: 'hidden',
                      };
                    },
                    children: [
                      (0, S.jsxs)(c.Z, {
                        sx: { display: 'flex', alignItems: 'center', mb: 0.5, px: 3, py: 2 },
                        children: [
                          R
                            ? (0, S.jsx)(c.Z, {
                                sx: { flex: 1 },
                                children: (0, S.jsx)(u.Z, { color: 'inherit', size: '16px' }),
                              })
                            : (0, S.jsx)(d.ZP, {
                                sx: { flex: 1 },
                                placeholder: '0.00',
                                disabled: y || h,
                                value: r,
                                autoFocus: !0,
                                onChange: function (e) {
                                  o &&
                                    (Number(e.target.value) > Number(E)
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
                                inputComponent: B,
                              }),
                          '' !== r &&
                            !h &&
                            (0, S.jsx)(p.Z, {
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
                              children: (0, S.jsx)(i.Z, { height: 16 }),
                            }),
                          O && 1 !== D.length
                            ? (0, S.jsx)(x.Z, {
                                children: (0, S.jsxs)(m.Z, {
                                  disabled: y,
                                  value: z.symbol,
                                  onChange: function (e) {
                                    var r = D.find(function (r) {
                                      return r.symbol === e.target.value;
                                    });
                                    O && O(r), o && o('');
                                  },
                                  variant: 'outlined',
                                  className: 'AssetInput__select',
                                  'data-cy': 'assetSelect',
                                  MenuProps: {
                                    sx: {
                                      maxHeight: '240px',
                                      '.MuiPaper-root': {
                                        border:
                                          'dark' === Y.palette.mode
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
                                    var r =
                                      1 === D.length
                                        ? D[0]
                                        : D &&
                                          D.find(function (r) {
                                            return r.symbol === e;
                                          });
                                    return (0, S.jsxs)(c.Z, {
                                      sx: { display: 'flex', alignItems: 'center' },
                                      'data-cy': 'assetsSelectedOption_'.concat(
                                        r.symbol.toUpperCase()
                                      ),
                                      children: [
                                        (0, S.jsx)(w.T1, {
                                          symbol: r.iconSymbol || r.symbol,
                                          aToken: r.aToken,
                                          sx: { mr: 2, ml: 4 },
                                        }),
                                        (0, S.jsx)(l.Z, {
                                          variant: 'main16',
                                          color: 'text.primary',
                                          children: e,
                                        }),
                                      ],
                                    });
                                  },
                                  children: [
                                    M || void 0,
                                    D.map(function (e) {
                                      return (0, S.jsx)(
                                        v.Z,
                                        {
                                          value: e.symbol,
                                          'data-cy': 'assetsSelectOption_'.concat(
                                            e.symbol.toUpperCase()
                                          ),
                                          children: L
                                            ? L(e)
                                            : (0, S.jsxs)(S.Fragment, {
                                                children: [
                                                  (0, S.jsx)(w.T1, {
                                                    aToken: e.aToken,
                                                    symbol: e.iconSymbol || e.symbol,
                                                    sx: { fontSize: '22px', mr: 1 },
                                                  }),
                                                  (0, S.jsx)(b.Z, {
                                                    sx: { mr: 6 },
                                                    children: e.symbol,
                                                  }),
                                                  e.balance &&
                                                    (0, S.jsx)(A.B, {
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
                            : (0, S.jsxs)(c.Z, {
                                sx: { display: 'inline-flex', alignItems: 'center' },
                                children: [
                                  (0, S.jsx)(w.T1, {
                                    aToken: z.aToken,
                                    symbol: z.iconSymbol || z.symbol,
                                    sx: { mr: 2, ml: 4 },
                                  }),
                                  (0, S.jsx)(l.Z, {
                                    variant: 'h3',
                                    sx: { lineHeight: '28px' },
                                    'data-cy': 'inputAsset',
                                    children: n,
                                  }),
                                ],
                              }),
                        ],
                      }),
                      (0, S.jsxs)(c.Z, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          height: '16px',
                          px: 3,
                          py: 2,
                          mb: 1,
                        },
                        children: [
                          R
                            ? (0, S.jsx)(c.Z, { sx: { flex: 1 } })
                            : (0, S.jsx)(A.B, {
                                value: isNaN(Number(t)) ? 0 : Number(t),
                                compact: !0,
                                symbol: 'USD',
                                variant: 'secondary12',
                                color: 'text.muted',
                                symbolsColor: 'text.muted',
                                flexGrow: 1,
                              }),
                          z.balance &&
                            o &&
                            (0, S.jsxs)(S.Fragment, {
                              children: [
                                (0, S.jsxs)(l.Z, {
                                  component: 'div',
                                  variant: 'secondary12',
                                  color: 'text.secondary',
                                  children: [
                                    C && '' !== C ? C : (0, S.jsx)(a.cC, { id: 'fsBGk0' }),
                                    ' ',
                                    (0, S.jsx)(A.B, {
                                      value: z.balance,
                                      compact: !0,
                                      variant: 'secondary12',
                                      color: 'text.secondary',
                                      symbolsColor: 'text.disabled',
                                    }),
                                  ],
                                }),
                                !h &&
                                  (0, S.jsx)(f.Z, {
                                    size: 'small',
                                    sx: { minWidth: 0, ml: '7px', p: 0 },
                                    onClick: function () {
                                      N && V(N.eventName, T({}, N.eventParams)), o('-1');
                                    },
                                    disabled: y || P,
                                    children: (0, S.jsx)(a.cC, { id: 'CK1KXz' }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                      U &&
                        (0, S.jsx)(c.Z, {
                          sx: {
                            background: Y.palette.background.surface,
                            borderTop: '1px solid '.concat(Y.palette.divider),
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
    99047: function (e, r, t) {
      t.r(r),
        t.d(r, {
          DebtSwitchModal: function () {
            return Ie;
          },
        });
      var n = t(59499),
        o = t(57499),
        a = t(67294),
        i = t(15629),
        s = t(49679),
        c = t(44949),
        l = t(92519),
        u = t(90116),
        d = t(1279),
        p = t(21046),
        x = t(52358),
        m = t(80227),
        v = t(26447),
        b = t(15861),
        f = t(53219),
        y = t(80822),
        h = t(63366),
        g = t(87462),
        j = t(63961),
        A = t(94780),
        w = t(90948),
        S = t(28628),
        O = t(98216),
        D = t(1588),
        T = t(34867);
      function B(e) {
        return (0, T.ZP)('MuiListSubheader', e);
      }
      (0, D.Z)('MuiListSubheader', [
        'root',
        'colorPrimary',
        'colorInherit',
        'gutters',
        'inset',
        'sticky',
      ]);
      var k = t(85893);
      const E = ['className', 'color', 'component', 'disableGutters', 'disableSticky', 'inset'],
        P = (0, w.ZP)('li', {
          name: 'MuiListSubheader',
          slot: 'Root',
          overridesResolver: (e, r) => {
            const { ownerState: t } = e;
            return [
              r.root,
              'default' !== t.color && r[`color${(0, O.Z)(t.color)}`],
              !t.disableGutters && r.gutters,
              t.inset && r.inset,
              !t.disableSticky && r.sticky,
            ];
          },
        })(({ theme: e, ownerState: r }) =>
          (0, g.Z)(
            {
              boxSizing: 'border-box',
              lineHeight: '48px',
              listStyle: 'none',
              color: (e.vars || e).palette.text.secondary,
              fontFamily: e.typography.fontFamily,
              fontWeight: e.typography.fontWeightMedium,
              fontSize: e.typography.pxToRem(14),
            },
            'primary' === r.color && { color: (e.vars || e).palette.primary.main },
            'inherit' === r.color && { color: 'inherit' },
            !r.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            r.inset && { paddingLeft: 72 },
            !r.disableSticky && {
              position: 'sticky',
              top: 0,
              zIndex: 1,
              backgroundColor: (e.vars || e).palette.background.paper,
            }
          )
        ),
        I = a.forwardRef(function (e, r) {
          const t = (0, S.i)({ props: e, name: 'MuiListSubheader' }),
            {
              className: n,
              color: o = 'default',
              component: a = 'li',
              disableGutters: i = !1,
              disableSticky: s = !1,
              inset: c = !1,
            } = t,
            l = (0, h.Z)(t, E),
            u = (0, g.Z)({}, t, {
              color: o,
              component: a,
              disableGutters: i,
              disableSticky: s,
              inset: c,
            }),
            d = ((e) => {
              const { classes: r, color: t, disableGutters: n, inset: o, disableSticky: a } = e,
                i = {
                  root: [
                    'root',
                    'default' !== t && `color${(0, O.Z)(t)}`,
                    !n && 'gutters',
                    o && 'inset',
                    !a && 'sticky',
                  ],
                };
              return (0, A.Z)(i, B, r);
            })(u);
          return (0, k.jsx)(
            P,
            (0, g.Z)({ as: a, className: (0, j.Z)(d.root, n), ref: r, ownerState: u }, l)
          );
        });
      I.muiSkipListHighlight = !0;
      var C = I,
        Z = t(59334),
        R = t(70794),
        N = t(49663),
        M = t(70946),
        L = t(32867),
        _ = t(38577),
        F = t(45640),
        U = t(35783),
        Y = t(23478),
        V = t(67944),
        z = t(87886),
        H = t(50029),
        G = t(87794),
        W = t.n(G),
        q = t(97595),
        Q = t(30447),
        K = t(72005),
        $ = t(32356),
        J = t(3062),
        X = t(55875),
        ee = t(69951),
        re = t(60377),
        te = t(44880),
        ne = t(78864),
        oe = t(17674),
        ae = t(75331),
        ie = t(80854),
        se = t(30202),
        ce = t(56371),
        le = t(92997),
        ue = t(64041),
        de = t(805),
        pe = t(52251),
        xe = t(73886),
        me = t(84207),
        ve = t(53008);
      function be(e, r) {
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
      function fe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? be(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : be(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var ye,
        he = function (e) {
          var r = e.amountToSwap,
            t = e.amountToReceive,
            n = e.isWrongNetwork,
            i = e.sx,
            s = e.poolReserve,
            l = e.targetReserve,
            u = e.isMaxSelected,
            d = e.loading,
            p = e.blocked,
            x = e.buildTxFn,
            m = (0, J.Y)(
              (0, xe.N)(function (e) {
                return [
                  e.getCreditDelegationApprovedAmount,
                  e.currentMarketData,
                  e.generateApproveDelegation,
                  e.estimateGasLimit,
                  e.addTransaction,
                  e.debtSwitch,
                  e.walletApprovalMethodPreference,
                  e.generateCreditDelegationSignatureRequest,
                ];
              })
            ),
            v = (0, oe.Z)(m, 8),
            b = v[0],
            f = v[1],
            y = v[2],
            h = v[3],
            g = v[4],
            j = v[5],
            A = v[6],
            w = v[7],
            S = (0, c.vR)(),
            O = S.approvalTxState,
            D = S.mainTxState,
            T = S.loadingTxns,
            B = S.setMainTxState,
            E = S.setTxError,
            P = S.setGasLimit,
            I = S.setLoadingTxns,
            C = S.setApprovalTxState,
            Z = (0, K.Z)(),
            R = Z.sendTx,
            N = Z.signTxData,
            M = (0, se.NL)(),
            L = (0, a.useState)(!1),
            _ = L[0],
            F = L[1],
            U = (0, a.useState)(),
            Y = U[0],
            V = U[1],
            G = (0, a.useState)(!1),
            q = G[0],
            Q = G[1],
            $ = (0, a.useState)(),
            X = $[0],
            ee = $[1],
            re = f.v3;
          (0, a.useEffect)(
            function () {
              var e = A === ue.n.PERMIT;
              Q(e);
            },
            [A]
          );
          var te = (function () {
              var e = (0, H.Z)(
                W().mark(function e() {
                  var r, n, o, a, i, s, c, u, d;
                  return W().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !_ || !Y)) {
                              e.next = 29;
                              break;
                            }
                            if (((r = (0, z.sm)(t, l.decimals, 0.25)), !q || !re)) {
                              e.next = 15;
                              break;
                            }
                            return (
                              (o = Math.floor(Date.now() / 1e3 + 3600).toString()),
                              (e.next = 7),
                              w({
                                underlyingAsset: l.variableDebtTokenAddress,
                                deadline: o,
                                amount: r,
                                spender:
                                  null !== (n = f.addresses.DEBT_SWITCH_ADAPTER) && void 0 !== n
                                    ? n
                                    : '',
                              })
                            );
                          case 7:
                            return (a = e.sent), (e.next = 10), N(a);
                          case 10:
                            (i = e.sent),
                              ee({ signature: i, deadline: o, amount: r }),
                              C({ txHash: le.Z, loading: !1, success: !0 }),
                              (e.next = 29);
                            break;
                          case 15:
                            return (
                              (c = y({
                                debtTokenAddress: l.variableDebtTokenAddress,
                                delegatee:
                                  null !== (s = f.addresses.DEBT_SWITCH_ADAPTER) && void 0 !== s
                                    ? s
                                    : '',
                                amount: r,
                              })),
                              C(fe(fe({}, O), {}, { loading: !0 })),
                              (e.next = 19),
                              h(c)
                            );
                          case 19:
                            return (c = e.sent), (e.next = 22), R(c);
                          case 22:
                            return (u = e.sent), (e.next = 25), u.wait(1);
                          case 25:
                            C({ txHash: u.hash, loading: !1, success: !0 }),
                              g(u.hash, {
                                action: ae.UQ.approval,
                                txState: 'success',
                                asset: l.variableDebtTokenAddress,
                                amount: r,
                                assetName: 'varDebt' + l.name,
                                spender: f.addresses.DEBT_SWITCH_ADAPTER,
                              }),
                              E(void 0),
                              be(!0);
                          case 29:
                            e.next = 36;
                            break;
                          case 31:
                            (e.prev = 31),
                              (e.t0 = e.catch(0)),
                              (d = (0, de.WG)(e.t0, de.aD.GAS_ESTIMATION, !1)),
                              E(d),
                              O.success || C({ txHash: void 0, loading: !1 });
                          case 36:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 31]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ne = (function () {
              var e = (0, H.Z)(
                W().mark(function e() {
                  var o, a, i, c;
                  return W().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), B(fe(fe({}, D), {}, { loading: !0 })), (e.next = 4), x()
                            );
                          case 4:
                            return (
                              (o = e.sent),
                              (a = j({
                                poolReserve: s,
                                targetReserve: l,
                                amountToReceive: (0, ce.parseUnits)(t, l.decimals).toString(),
                                amountToSwap: (0, ce.parseUnits)(r, s.decimals).toString(),
                                isMaxSelected: u,
                                txCalldata: o.swapCallData,
                                augustus: o.augustus,
                                signatureParams: X,
                                isWrongNetwork: n,
                              })),
                              (e.next = 8),
                              h(a)
                            );
                          case 8:
                            return (a = e.sent), (e.next = 11), R(a);
                          case 11:
                            return (i = e.sent), (e.next = 14), i.wait(1);
                          case 14:
                            B({ txHash: i.hash, loading: !1, success: !0 }),
                              g(i.hash, {
                                action: 'debtSwitch',
                                txState: 'success',
                                previousState: ''
                                  .concat(o.outputAmount, ' variable ')
                                  .concat(s.symbol),
                                newState: ''.concat(o.inputAmount, ' variable ').concat(l.symbol),
                              }),
                              M.invalidateQueries({ queryKey: pe.B.pool }),
                              M.invalidateQueries({ queryKey: pe.B.gho }),
                              (e.next = 25);
                            break;
                          case 20:
                            (e.prev = 20),
                              (e.t0 = e.catch(0)),
                              (c = (0, de.WG)(e.t0, de.aD.GAS_ESTIMATION, !1)),
                              E(c),
                              B({ txHash: void 0, loading: !1 });
                          case 25:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 20]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            be = (0, a.useCallback)(
              (function () {
                var e = (0, H.Z)(
                  W().mark(function e(r) {
                    var n, o, a;
                    return W().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (void 0 !== (n = Y) && !r) {
                              e.next = 9;
                              break;
                            }
                            return (
                              I(!0),
                              (e.next = 5),
                              b({
                                debtTokenAddress: l.variableDebtTokenAddress,
                                delegatee:
                                  null !== (o = f.addresses.DEBT_SWITCH_ADAPTER) && void 0 !== o
                                    ? o
                                    : '',
                              })
                            );
                          case 5:
                            (n = e.sent), V(n), (e.next = 11);
                            break;
                          case 9:
                            F(!1), C({});
                          case 11:
                            n &&
                              ((a = (0, ve.iv)({
                                approvedAmount: n.amount,
                                amount: t,
                                signedAmount: '0',
                              })),
                              F(a),
                              a && C({})),
                              I(!1);
                          case 13:
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
              [Y, I, b, l.variableDebtTokenAddress, f.addresses.DEBT_SWITCH_ADAPTER, C, t]
            );
          return (
            (0, a.useEffect)(
              function () {
                '0' !== r &&
                  (Y ? Y.debtTokenAddress !== l.variableDebtTokenAddress && be(!0) : be());
              },
              [r, Y, be, l.variableDebtTokenAddress]
            ),
            (0, a.useEffect)(
              function () {
                var e = 0;
                (e = Number(ie.eB[ae.UQ.borrow].recommended)),
                  _ && !O.success && (e += Number(ve.Fi)),
                  P(e.toString());
              },
              [_, O, P]
            ),
            (0, k.jsx)(me.B, {
              mainTxState: D,
              approvalTxState: O,
              isWrongNetwork: n,
              preparingTransactions: T,
              handleAction: ne,
              requiresAmount: !0,
              amount: r,
              handleApproval: function () {
                return te();
              },
              requiresApproval: _,
              actionText: (0, k.jsx)(o.cC, { id: 'M7wPsD' }),
              actionInProgressText: (0, k.jsx)(o.cC, { id: 'CcRNG6' }),
              sx: i,
              fetchingData: d,
              errorParams: {
                loading: !1,
                disabled: p || !(null !== O && void 0 !== O && O.success),
                content: (0, k.jsx)(o.cC, { id: 'M7wPsD' }),
                handleClick: ne,
              },
              blocked: p,
              tryPermit: re,
            })
          );
        },
        ge = t(88078),
        je = t(20986),
        Ae = (0, k.jsx)(f.Z, {
          color: 'primary',
          sx: { fontSize: '14px', mx: 1 },
          children: (0, k.jsx)(m.Z, {}),
        }),
        we = function (e) {
          var r,
            t,
            n = e.switchSource,
            a = e.switchTarget,
            i = e.toAmount,
            s = e.fromAmount,
            c = e.loading,
            l = e.sourceBalance,
            u = e.sourceBorrowAPY,
            p = e.targetBorrowAPY,
            x = e.ghoData,
            m = e.currentMarket,
            v = (0, d.hE)(l).minus((0, d.hE)(s)),
            b = (0, d.hE)(a.variableBorrows).plus((0, d.hE)(i)),
            f = (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsx)(ge.Z, {
                  variant: 'rectangular',
                  height: 20,
                  width: 100,
                  sx: { borderRadius: '4px' },
                }),
                (0, k.jsx)(ge.Z, {
                  variant: 'rectangular',
                  height: 15,
                  width: 80,
                  sx: { borderRadius: '4px', marginTop: '4px' },
                }),
              ],
            }),
            h = 0,
            g = null === x || void 0 === x ? void 0 : x.ghoApyRange;
          return (
            'GHO' === a.reserve.symbol &&
              x &&
              ((h = (0, ee.li)(
                x.ghoVariableBorrowApy,
                x.userCurrentBorrowBalance + x.inputAmount,
                x.userGhoAvailableToBorrowAtDiscount,
                x.ghoBorrowAPYWithMaxDiscount
              )),
              g && (g = [g[0], h])),
            (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsx)(je.X, {
                  caption: (0, k.jsx)(o.cC, { id: 'PJK9u/' }),
                  captionVariant: 'description',
                  mb: 4,
                  children: (0, k.jsx)(y.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: c
                      ? (0, k.jsx)(ge.Z, {
                          variant: 'rectangular',
                          height: 20,
                          width: 100,
                          sx: { borderRadius: '4px' },
                        })
                      : (0, k.jsxs)(k.Fragment, {
                          children: [
                            (0, ee.F$)({ symbol: n.reserve.symbol, currentMarket: m }) && x
                              ? (0, k.jsx)(N.B, {
                                  useApyRange: !1,
                                  rangeValues: x.ghoApyRange,
                                  variant: 'main14',
                                  color: 'text.secondary',
                                  value: x.userCurrentBorrowApy,
                                  'data-cy': 'apyType',
                                  stkAaveBalance: x.userDiscountTokenBalance,
                                  ghoRoute:
                                    _.Z6.reserveOverview(
                                      null !== (r = n.underlyingAsset) && void 0 !== r ? r : '',
                                      m
                                    ) + '/#discount',
                                  forceShowTooltip: !0,
                                  withTokenIcon: x.qualifiesForDiscount,
                                  userQualifiesForDiscount: x.qualifiesForDiscount,
                                })
                              : (0, k.jsx)(L.B, { value: u, variant: 'secondary14', percent: !0 }),
                            Ae,
                            (0, ee.F$)({ symbol: a.reserve.symbol, currentMarket: m }) && x
                              ? (0, k.jsx)(N.B, {
                                  useApyRange: x.qualifiesForDiscount && !x.inputAmount,
                                  rangeValues: 0 === x.inputAmount ? x.ghoApyRange : g,
                                  variant: 'main14',
                                  color: 'text.secondary',
                                  value: 0 === x.inputAmount ? x.userBorrowApyAfterMaxSwitch : h,
                                  'data-cy': 'apyType',
                                  stkAaveBalance: x.userDiscountTokenBalance,
                                  ghoRoute:
                                    _.Z6.reserveOverview(
                                      null !== (t = a.underlyingAsset) && void 0 !== t ? t : '',
                                      m
                                    ) + '/#discount',
                                  forceShowTooltip: !0,
                                  withTokenIcon: x.qualifiesForDiscount,
                                  userQualifiesForDiscount: x.qualifiesForDiscount,
                                })
                              : (0, k.jsx)(L.B, { value: p, variant: 'secondary14', percent: !0 }),
                          ],
                        }),
                  }),
                }),
                (0, k.jsx)(V.aE, {
                  incentives: n.reserve.aIncentivesData,
                  symbol: n.reserve.symbol,
                  futureIncentives: n.reserve.aIncentivesData,
                  futureSymbol: n.reserve.symbol,
                  loading: c,
                }),
                (0, k.jsx)(je.X, {
                  caption: (0, k.jsx)(o.cC, { id: 'TszKts' }),
                  captionVariant: 'description',
                  mb: 4,
                  align: 'flex-start',
                  children: (0, k.jsxs)(y.Z, {
                    sx: { textAlign: 'right' },
                    children: [
                      (0, k.jsx)(y.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        },
                        children: c
                          ? f
                          : (0, k.jsxs)(k.Fragment, {
                              children: [
                                (0, k.jsxs)(y.Z, {
                                  sx: { display: 'flex', alignItems: 'center' },
                                  children: [
                                    (0, k.jsx)(F.T1, {
                                      symbol: n.reserve.iconSymbol,
                                      sx: { mr: 2, ml: 4, fontSize: '16px' },
                                    }),
                                    (0, k.jsx)(L.B, {
                                      value: v.toString(),
                                      variant: 'secondary14',
                                      compact: !0,
                                    }),
                                  ],
                                }),
                                (0, k.jsx)(L.B, {
                                  value: v.multipliedBy((0, d.hE)(n.reserve.priceInUSD)).toString(),
                                  variant: 'helperText',
                                  compact: !0,
                                  symbol: 'USD',
                                  symbolsColor: 'text.secondary',
                                  color: 'text.secondary',
                                }),
                              ],
                            }),
                      }),
                      (0, k.jsx)(y.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        },
                        mt: 2,
                        children: c
                          ? f
                          : (0, k.jsxs)(k.Fragment, {
                              children: [
                                (0, k.jsxs)(y.Z, {
                                  sx: { display: 'flex', alignItems: 'center' },
                                  children: [
                                    (0, k.jsx)(F.T1, {
                                      symbol: a.reserve.iconSymbol,
                                      sx: { mr: 2, ml: 4, fontSize: '16px' },
                                    }),
                                    (0, k.jsx)(L.B, {
                                      value: b.toString(),
                                      variant: 'secondary14',
                                      compact: !0,
                                    }),
                                  ],
                                }),
                                (0, k.jsx)(L.B, {
                                  value: b.multipliedBy((0, d.hE)(a.reserve.priceInUSD)).toString(),
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
            })
          );
        };
      function Se(e, r) {
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
      function Oe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Se(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : Se(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      !(function (e) {
        e[(e.INSUFFICIENT_LIQUIDITY = 0)] = 'INSUFFICIENT_LIQUIDITY';
      })(ye || (ye = {}));
      var De = function (e) {
          var r = e.poolReserve,
            t = e.userReserve,
            n = e.isWrongNetwork,
            i = e.user,
            s = (0, re.HT)(),
            l = s.reserves,
            h = s.ghoReserveData,
            g = s.ghoUserData,
            j = s.ghoUserLoadingData,
            A = (0, J.Y)(function (e) {
              return e.currentChainId;
            }),
            w = (0, J.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            S = (0, K.Z)().currentAccount,
            O = (0, c.vR)(),
            D = O.gasLimit,
            T = O.mainTxState,
            B = O.txError,
            E = O.setTxError,
            P = (0, J.Y)(function (e) {
              return e.currentMarket;
            }),
            I = (0, J.Y)(function (e) {
              return e.currentMarketData;
            }),
            C = (0, Q.l)(I).data,
            Z = (0, q.b)(I).data,
            N = l
              .filter(function (e) {
                return (
                  e.underlyingAsset !== r.underlyingAsset &&
                  '0' !== e.availableLiquidity &&
                  (0, X.hF)(e, i)
                );
              })
              .map(function (e) {
                return {
                  address: e.underlyingAsset,
                  symbol: e.symbol,
                  iconSymbol: e.iconSymbol,
                  variableApy: e.variableBorrowAPY,
                  priceInUsd: e.priceInUSD,
                  decimals: e.decimals,
                };
              });
          N = [].concat(
            (0, u.Z)(
              N.filter(function (e) {
                return 'GHO' === e.symbol;
              })
            ),
            (0, u.Z)(
              N.filter(function (e) {
                return 'GHO' !== e.symbol;
              })
            )
          );
          var _ = (0, a.useState)(''),
            G = _[0],
            oe = _[1],
            ae = (0, a.useRef)(''),
            ie = (0, a.useState)(N[0]),
            se = ie[0],
            ce = ie[1],
            le = (0, a.useState)('0.1'),
            ue = le[0],
            de = le[1],
            pe = i.userReservesData.find(function (e) {
              return e.underlyingAsset === se.address;
            }),
            xe = t.variableBorrows,
            me = '-1' === G,
            ve = me ? xe : G,
            be = (function (e) {
              var r = e.chainId,
                t = e.max,
                n = e.maxSlippage,
                o = e.skip,
                i = e.swapIn,
                s = e.swapOut,
                c = e.userAddress,
                l = (0, a.useState)('0'),
                u = l[0],
                p = l[1],
                x = (0, a.useState)('0'),
                m = x[0],
                v = x[1],
                b = (0, a.useState)('0'),
                f = b[0],
                y = b[1],
                h = (0, a.useState)('0'),
                g = h[0],
                j = h[1],
                A = (0, a.useState)(),
                w = A[0],
                S = A[1],
                O = (0, a.useState)(!1),
                D = O[0],
                T = O[1],
                B = (0, a.useState)(''),
                k = B[0],
                E = B[1],
                P = (0, a.useMemo)(
                  function () {
                    return {
                      underlyingAsset: i.underlyingAsset,
                      decimals: i.decimals,
                      supplyAPY: i.supplyAPY,
                      amount: i.amount,
                      variableBorrowAPY: i.variableBorrowAPY,
                    };
                  },
                  [i.amount, i.decimals, i.supplyAPY, i.underlyingAsset, i.variableBorrowAPY]
                ),
                I = (0, a.useMemo)(
                  function () {
                    return {
                      underlyingAsset: s.underlyingAsset,
                      decimals: s.decimals,
                      supplyAPY: s.supplyAPY,
                      amount: s.amount,
                      variableBorrowAPY: s.variableBorrowAPY,
                    };
                  },
                  [s.amount, s.decimals, s.supplyAPY, s.underlyingAsset, s.variableBorrowAPY]
                ),
                C = (0, a.useCallback)(
                  function () {
                    return (0, z.wP)(P, I, r, c, t);
                  },
                  [r, t, P, I, c]
                );
              return (
                (0, a.useEffect)(
                  function () {
                    if (!o) {
                      var e = (function () {
                          var e = (0, H.Z)(
                            W().mark(function e() {
                              var r, t;
                              return W().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          P.underlyingAsset &&
                                          I.underlyingAsset &&
                                          I.amount &&
                                          '0' !== I.amount &&
                                          !isNaN(+I.amount)
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          p('0'),
                                          v('0'),
                                          y('0'),
                                          j('0'),
                                          S(void 0),
                                          e.abrupt('return')
                                        );
                                      case 7:
                                        return T(!0), (e.prev = 8), (e.next = 11), C();
                                      case 11:
                                        (r = e.sent),
                                          E(''),
                                          S(r),
                                          p((0, d.Fv)(r.srcAmount, r.srcDecimals)),
                                          y((0, d.Fv)(r.destAmount, r.destDecimals)),
                                          v(r.srcUSD),
                                          j(r.destUSD),
                                          (e.next = 25);
                                        break;
                                      case 20:
                                        (e.prev = 20),
                                          (e.t0 = e.catch(8)),
                                          console.error(e.t0),
                                          (t = (0, z.aE)(e.t0.message)),
                                          E(t);
                                      case 25:
                                        return (e.prev = 25), T(!1), e.finish(25);
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
                        r = setTimeout(function () {
                          e();
                        }, 400);
                      return function () {
                        clearTimeout(r);
                      };
                    }
                  },
                  [o, P.underlyingAsset, P.amount, I.underlyingAsset, I.amount, C, n]
                ),
                {
                  outputAmount: f,
                  outputAmountUSD: g,
                  inputAmount: u,
                  inputAmountUSD: m,
                  loading: D,
                  error: k,
                  buildTxFn: (function () {
                    var e = (0, H.Z)(
                      W().mark(function e() {
                        return W().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (w) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error('Route required to build transaction');
                              case 2:
                                return e.abrupt('return', (0, z._n)(w, i, s, r, c, n));
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
            })({
              chainId: w.underlyingChainId || A,
              userAddress: S,
              swapOut: Oe(Oe({}, r), {}, { amount: ae.current }),
              swapIn: Oe(Oe({}, pe.reserve), {}, { amount: '0' }),
              max: me,
              skip: T.loading || !1,
              maxSlippage: Number(ue),
            }),
            fe = be.inputAmount,
            ge = be.outputAmount,
            je = be.outputAmountUSD,
            Ae = be.error,
            Se = be.loading,
            De = be.buildTxFn,
            Ee = Se && '0' === je,
            Pe = (0, d.hE)(p.Bz.toString()),
            Ie = '0';
          (0, ee.F$)({ symbol: pe.reserve.symbol, currentMarket: P })
            ? (Ie = h.aaveFacilitatorRemainingCapacity.toString())
            : ((Pe =
                '0' === pe.reserve.borrowCap
                  ? (0, d.hE)(p.Bz.toString())
                  : (0, d.hE)(Number(pe.reserve.borrowCap)).minus((0, d.hE)(pe.reserve.totalDebt))),
              (Ie = pe.reserve.formattedAvailableLiquidity));
          var Ce = R.O.max(R.O.min(Ie, Pe), 0),
            Ze = Number(ve) * Number(r.priceInUSD),
            Re = Number(fe) * Number(se.priceInUsd),
            Ne = Re - Ze,
            Me = 0 === Number(i.availableBorrowsUSD) || Ne > Number(i.availableBorrowsUSD),
            Le = void 0;
          (0, R.O)(fe).gt(Ce) && (Le = ye.INSUFFICIENT_LIQUIDITY);
          var _e = function () {
              return Le === ye.INSUFFICIENT_LIQUIDITY ? (0, k.jsx)(o.cC, { id: '00OflG' }) : null;
            },
            Fe = (0, z.LN)(fe, ue, se.decimals || 18);
          if (T.success)
            return (0, k.jsx)(te.R, {
              customAction: (0, k.jsxs)(v.Z, {
                gap: 3,
                children: [
                  (0, k.jsx)(b.Z, {
                    variant: 'description',
                    color: 'text.primary',
                    children: (0, k.jsx)(o.cC, { id: 'fH9i8k' }),
                  }),
                  (0, k.jsxs)(v.Z, {
                    direction: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    children: [
                      (0, k.jsx)(F.T1, { symbol: r.iconSymbol, sx: { mx: 1 } }),
                      (0, k.jsx)(L.B, { value: ae.current, compact: !0, variant: 'subheader1' }),
                      r.symbol,
                      (0, k.jsx)(f.Z, {
                        color: 'primary',
                        sx: { fontSize: '14px', mx: 1 },
                        children: (0, k.jsx)(m.Z, {}),
                      }),
                      (0, k.jsx)(F.T1, { symbol: pe.reserve.iconSymbol, sx: { mx: 1 } }),
                      (0, k.jsx)(L.B, { value: Fe, compact: !0, variant: 'subheader1' }),
                      pe.reserve.symbol,
                    ],
                  }),
                ],
              }),
            });
          var Ue,
            Ye = !1;
          if (
            l.some(function (e) {
              return 'GHO' === e.symbol;
            })
          ) {
            var Ve = Number(xe) * Number(r.priceInUSD) + g.userGhoBorrowBalance,
              ze = (0, ee.li)(
                h.ghoVariableBorrowAPY,
                g.userGhoBorrowBalance,
                g.userGhoAvailableToBorrowAtDiscount,
                h.ghoBorrowAPYWithMaxDiscount
              ),
              He = (0, ee.li)(
                h.ghoVariableBorrowAPY,
                Ve,
                g.userGhoAvailableToBorrowAtDiscount,
                h.ghoBorrowAPYWithMaxDiscount
              ),
              Ge = j ? void 0 : [ze, He];
            (Ye = !(!C || !Z) && (0, ee.k9)(Z, C, xe)),
              (Ue = {
                qualifiesForDiscount: Ye,
                ghoApyRange: Ge,
                userBorrowApyAfterMaxSwitch: He,
                userDiscountTokenBalance: g.userDiscountTokenBalance,
                inputAmount: Number(ve),
                targetAmount: Number(fe),
                userCurrentBorrowApy: ze,
                ghoVariableBorrowApy: h.ghoVariableBorrowAPY,
                userGhoAvailableToBorrowAtDiscount: g.userGhoAvailableToBorrowAtDiscount,
                ghoBorrowAPYWithMaxDiscount: h.ghoBorrowAPYWithMaxDiscount,
                userCurrentBorrowBalance: g.userGhoBorrowBalance,
              });
          }
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(Y.W, {
                value: ve,
                onChange: function (e) {
                  var r = '-1' === e;
                  (ae.current = r ? xe : e), oe(e), E(void 0);
                },
                usdValue: Ze.toString(),
                symbol: r.symbol,
                assets: [
                  {
                    balance: xe,
                    address: r.underlyingAsset,
                    symbol: r.symbol,
                    iconSymbol: r.iconSymbol,
                  },
                ],
                maxValue: xe,
                inputTitle: (0, k.jsx)(o.cC, { id: 'rf8POi' }),
                balanceText: (0, k.jsx)(a.Fragment, {
                  children: (0, k.jsx)(o.cC, { id: 'hxi7vE' }),
                }),
                isMaxSelected: me,
              }),
              (0, k.jsxs)(y.Z, {
                sx: {
                  padding: '18px',
                  pt: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                },
                children: [
                  (0, k.jsx)(f.Z, {
                    sx: { fontSize: '18px !important' },
                    children: (0, k.jsx)(x.Z, {}),
                  }),
                  (0, k.jsx)(M.B, {
                    loading: Ee,
                    outputAmountUSD: Re.toString(),
                    inputAmountUSD: Ze.toString(),
                  }),
                ],
              }),
              (0, k.jsx)(Y.W, {
                value: fe,
                onSelect: ce,
                usdValue: Re.toString(),
                symbol: se.symbol,
                assets: N,
                inputTitle: (0, k.jsx)(o.cC, { id: 'ttoh5c' }),
                balanceText: (0, k.jsx)(o.cC, { id: 'zmTPiV' }),
                disableInput: !0,
                loading: Ee,
                selectOptionHeader: (0, k.jsx)(Te, {}),
                selectOption: function (e) {
                  var r, t;
                  return (0, ee.F$)({ symbol: e.symbol, currentMarket: P })
                    ? (0, k.jsx)(ke, {
                        asset: e,
                        ghoApyRange: null === (r = Ue) || void 0 === r ? void 0 : r.ghoApyRange,
                        userBorrowApyAfterMaxSwitch:
                          null === (t = Ue) || void 0 === t
                            ? void 0
                            : t.userBorrowApyAfterMaxSwitch,
                        userDiscountTokenBalance: g.userDiscountTokenBalance,
                        currentMarket: P,
                        qualifiesForDiscount: Ye,
                      })
                    : (0, k.jsx)(Be, { asset: e });
                },
              }),
              Ae &&
                !Ee &&
                (0, k.jsx)(b.Z, { variant: 'helperText', color: 'error.main', children: Ae }),
              !Ae &&
                void 0 !== Le &&
                (0, k.jsx)(b.Z, {
                  variant: 'helperText',
                  color: 'error.main',
                  children: (0, k.jsx)(_e, {}),
                }),
              (0, k.jsx)(V.m6, {
                gasLimit: D,
                slippageSelector: (0, k.jsx)($.n, {
                  selectedSlippage: ue,
                  setSlippage: function (e) {
                    E(void 0), de(e);
                  },
                  slippageTooltipHeader: (0, k.jsxs)(v.Z, {
                    direction: 'row',
                    gap: 2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    children: [
                      (0, k.jsx)(o.cC, { id: 'MIy2RJ' }),
                      (0, k.jsx)(v.Z, {
                        alignItems: 'end',
                        children: (0, k.jsxs)(v.Z, {
                          direction: 'row',
                          children: [
                            (0, k.jsx)(F.T1, {
                              symbol: pe.reserve.iconSymbol,
                              sx: { mr: 1, fontSize: '14px' },
                            }),
                            (0, k.jsx)(L.B, { value: Fe, variant: 'secondary12' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                children: (0, k.jsx)(we, {
                  switchSource: t,
                  switchTarget: pe,
                  toAmount: fe,
                  fromAmount: '' === ve ? '0' : ve,
                  loading: Ee,
                  sourceBalance: xe,
                  sourceBorrowAPY: r.variableBorrowAPY,
                  targetBorrowAPY: pe.reserve.variableBorrowAPY,
                  ghoData: Ue,
                  currentMarket: P,
                }),
              }),
              B && (0, k.jsx)(ne.f, { txError: B }),
              Me &&
                (0, k.jsx)(U.v, {
                  severity: 'error',
                  sx: { mt: 4 },
                  children: (0, k.jsx)(b.Z, {
                    variant: 'caption',
                    children: (0, k.jsx)(o.cC, { id: 'v8x7Mg' }),
                  }),
                }),
              (0, k.jsx)(he, {
                isMaxSelected: me,
                poolReserve: r,
                amountToSwap: ge,
                amountToReceive: Fe,
                isWrongNetwork: n,
                targetReserve: pe.reserve,
                symbol: r.symbol,
                blocked: void 0 !== Le || '' !== Ae || Me,
                loading: Se,
                buildTxFn: De,
              }),
            ],
          });
        },
        Te = function () {
          return (0, k.jsx)(C, {
            sx: function (e) {
              return { borderBottom: '1px solid '.concat(e.palette.divider), mt: -1 };
            },
            children: (0, k.jsxs)(v.Z, {
              direction: 'row',
              sx: { py: 4 },
              gap: 14,
              children: [
                (0, k.jsx)(b.Z, {
                  variant: 'subheader2',
                  children: (0, k.jsx)(o.cC, { id: 'lNVG7i' }),
                }),
                (0, k.jsx)(b.Z, {
                  variant: 'subheader2',
                  children: (0, k.jsx)(o.cC, { id: 'o4tCu3' }),
                }),
              ],
            }),
          });
        },
        Be = function (e) {
          var r = e.asset;
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(F.T1, {
                aToken: r.aToken,
                symbol: r.iconSymbol || r.symbol,
                sx: { fontSize: '22px', mr: 1 },
              }),
              (0, k.jsx)(Z.Z, { sx: { mr: 6 }, children: r.symbol }),
              (0, k.jsxs)(y.Z, {
                sx: { display: 'flex', flexDirection: 'column', alignItems: 'end' },
                children: [
                  (0, k.jsx)(L.B, {
                    value: r.variableApy,
                    percent: !0,
                    variant: 'main14',
                    color: 'text.secondary',
                  }),
                  (0, k.jsx)(b.Z, {
                    variant: 'helperText',
                    color: 'text.secondary',
                    children: (0, k.jsx)(o.cC, { id: 'B9Gqbz' }),
                  }),
                ],
              }),
            ],
          });
        },
        ke = function (e) {
          var r,
            t = e.ghoApyRange,
            n = e.asset,
            a = e.userBorrowApyAfterMaxSwitch,
            i = e.userDiscountTokenBalance,
            s = e.currentMarket,
            c = e.qualifiesForDiscount;
          return (0, k.jsxs)(k.Fragment, {
            children: [
              (0, k.jsx)(F.T1, {
                aToken: n.aToken,
                symbol: n.iconSymbol || n.symbol,
                sx: { fontSize: '22px', mr: 1 },
              }),
              (0, k.jsx)(Z.Z, { sx: { mr: 6 }, children: n.symbol }),
              (0, k.jsxs)(y.Z, {
                sx: { display: 'flex', flexDirection: 'column', alignItems: 'end' },
                children: [
                  (0, k.jsx)(N.B, {
                    useApyRange: c,
                    rangeValues: t,
                    variant: 'main14',
                    color: 'text.secondary',
                    value: null !== a && void 0 !== a ? a : -1,
                    'data-cy': 'apyType',
                    stkAaveBalance: i,
                    ghoRoute:
                      _.Z6.reserveOverview(
                        null !== (r = null === n || void 0 === n ? void 0 : n.address) &&
                          void 0 !== r
                          ? r
                          : '',
                        s
                      ) + '/#discount',
                    forceShowTooltip: !0,
                    withTokenIcon: c,
                    userQualifiesForDiscount: c,
                  }),
                  (0, k.jsx)(b.Z, {
                    variant: 'helperText',
                    color: 'text.secondary',
                    children: (0, k.jsx)(o.cC, { id: 'ES8dkb' }),
                  }),
                ],
              }),
            ],
          });
        };
      function Ee(e, r) {
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
      function Pe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Ee(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : Ee(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var Ie = function () {
        var e = (0, c.vR)(),
          r = e.type,
          t = e.close,
          n = e.args;
        return (0, k.jsx)(i.P, {
          open: r === c.w8.DebtSwitch,
          setOpen: t,
          children: (0, k.jsx)(l.A, {
            title: (0, k.jsx)(o.cC, { id: 'tKv7cI' }),
            underlyingAsset: n.underlyingAsset,
            hideTitleSymbol: !0,
            children: function (e) {
              return (0, k.jsx)(s.X, {
                children: function (r) {
                  return (0, k.jsx)(De, Pe(Pe({}, e), {}, { user: r }));
                },
              });
            },
          }),
        });
      };
    },
    78864: function (e, r, t) {
      t.d(r, {
        f: function () {
          return l;
        },
      });
      var n = t(57499),
        o = t(80822),
        a = t(15861),
        i = t(35783),
        s = t(83063),
        c = t(85893),
        l = function (e) {
          var r = e.txError;
          return (0, c.jsxs)(o.Z, {
            children: [
              (0, c.jsx)(s.Q, { txError: r }),
              'MetaMask Message Signature: User denied message signature.' !== r.rawError.message &&
                'MetaMask Tx Signature: User denied transaction signature.' !==
                  r.rawError.message &&
                (0, c.jsx)(o.Z, {
                  sx: { pt: 4 },
                  children: (0, c.jsx)(i.v, {
                    severity: 'info',
                    children: (0, c.jsxs)(a.Z, {
                      variant: 'description',
                      children: [' ', (0, c.jsx)(n.cC, { id: 'M2sknc' })],
                    }),
                  }),
                }),
            ],
          });
        };
    },
    53008: function (e, r, t) {
      t.d(r, {
        Fi: function () {
          return c;
        },
        NI: function () {
          return n;
        },
        gK: function () {
          return i;
        },
        iv: function () {
          return l;
        },
        pQ: function () {
          return s;
        },
        yI: function () {
          return u;
        },
      });
      var n,
        o = t(70794),
        a = t(56845);
      !(function (e) {
        (e[(e.SUPPLY_CAP_REACHED = 0)] = 'SUPPLY_CAP_REACHED'),
          (e[(e.NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH = 1)] = 'NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED'),
          (e[(e.FLASH_LOAN_NOT_AVAILABLE = 3)] = 'FLASH_LOAN_NOT_AVAILABLE');
      })(n || (n = {}));
      var i = function (e, r) {
          return '-1' !== e && new o.O(e).minus(new o.O(r)).lt('1.05');
        },
        s = 65e3,
        c = 55e3,
        l = function (e) {
          var r = e.approvedAmount,
            t = e.signedAmount,
            n = e.amount;
          return !(
            '-1' === r ||
            '-1' === t ||
            ('0' !== r && Number(r) >= Number(n)) ||
            Number(t) >= Number(n)
          );
        },
        u = function (e, r, t, n) {
          var o = e.reserve;
          if (!o.usageAsCollateralEnabled) return a.z.UNAVAILABLE;
          var i = a.z.ENABLED,
            s = e && '0' !== e.scaledATokenBalance,
            c = '0' !== r;
          return (
            o.isIsolated
              ? n
                ? (i = a.z.UNAVAILABLE)
                : t
                  ? s
                    ? (i = e.usageAsCollateralEnabledOnUser ? a.z.ISOLATED_ENABLED : a.z.DISABLED)
                    : c && (i = a.z.UNAVAILABLE_DUE_TO_ISOLATION)
                  : (i = c ? a.z.ISOLATED_DISABLED : a.z.ISOLATED_ENABLED)
              : (i = t
                  ? a.z.UNAVAILABLE_DUE_TO_ISOLATION
                  : s
                    ? e.usageAsCollateralEnabledOnUser
                      ? a.z.ENABLED
                      : a.z.DISABLED
                    : a.z.ENABLED),
            i
          );
        };
    },
    55875: function (e, r, t) {
      t.d(r, {
        BC: function () {
          return c;
        },
        hF: function () {
          return l;
        },
        nG: function () {
          return s;
        },
      });
      var n = t(1279),
        o = t(70794),
        a = t(21815),
        i = t(84314);
      function s(e, r) {
        var t,
          s,
          c,
          l,
          u = e.availableLiquidityUSD,
          d = o.O.min(r.availableBorrowsUSD, u),
          p =
            '0' === e.borrowCap
              ? (0, n.hE)(a.MaxUint256.toString())
              : (0, n.hE)(Number(e.borrowCap)).minus((0, n.hE)(e.totalDebt)),
          x = o.O.max(o.O.min(e.formattedAvailableLiquidity, p), 0),
          m = (0, n.hE)(
            (null === r || void 0 === r ? void 0 : r.availableBorrowsMarketReferenceCurrency) || 0
          ).div(e.formattedPriceInMarketReferenceCurrency),
          v = o.O.min(m, x),
          b =
            v.gte(m) ||
            ('0' !== r.totalBorrowsMarketReferenceCurrency && d.lt(u)) ||
            (d.eq(u) && '0' !== e.totalDebt) ||
            (e.borrowCapUSD && '0' !== e.totalDebt && d.gte(u)) ||
            (r.isInIsolationMode &&
              '0' !==
                (null === (t = r.isolatedReserve) || void 0 === t
                  ? void 0
                  : t.isolationModeTotalDebt) &&
              (0, n.hE)(
                (null === (s = r.isolatedReserve) || void 0 === s ? void 0 : s.debtCeiling) || '0'
              )
                .minus(
                  (null === (c = r.isolatedReserve) || void 0 === c
                    ? void 0
                    : c.isolationModeTotalDebt) || '0'
                )
                .shiftedBy(
                  -(
                    (null === (l = r.isolatedReserve) || void 0 === l
                      ? void 0
                      : l.debtCeilingDecimals) || 0
                  )
                )
                .multipliedBy('0.99')
                .lt(r.availableBorrowsUSD))
              ? v.multipliedBy('0.99')
              : v;
        return (0, i.$w)(b.toString(10), e.decimals);
      }
      function c(e, r) {
        var t,
          s,
          c,
          l,
          u = (0, n.hE)(
            (null === e || void 0 === e ? void 0 : e.availableBorrowsMarketReferenceCurrency) || 0
          ),
          d =
            '0' === r.borrowCap
              ? (0, n.hE)(a.MaxUint256.toString())
              : (0, n.hE)(Number(r.borrowCap)).minus((0, n.hE)(r.totalDebt)),
          p = o.O.max(o.O.min(u, d), 0),
          x =
            '0' !== e.totalBorrowsMarketReferenceCurrency ||
            (r.borrowCapUSD && '0' !== r.totalDebt && p.gte(d)) ||
            (e.isInIsolationMode &&
              '0' !==
                (null === (t = e.isolatedReserve) || void 0 === t
                  ? void 0
                  : t.isolationModeTotalDebt) &&
              (0, n.hE)(
                (null === (s = e.isolatedReserve) || void 0 === s ? void 0 : s.debtCeiling) || '0'
              )
                .minus(
                  (null === (c = e.isolatedReserve) || void 0 === c
                    ? void 0
                    : c.isolationModeTotalDebt) || '0'
                )
                .shiftedBy(
                  -(
                    (null === (l = e.isolatedReserve) || void 0 === l
                      ? void 0
                      : l.debtCeilingDecimals) || 0
                  )
                )
                .multipliedBy('0.99')
                .lt(e.availableBorrowsUSD))
              ? p.multipliedBy('0.99')
              : p;
        return (0, i.$w)(x.toString(10), 18);
      }
      function l(e, r) {
        var t = e.borrowingEnabled,
          n = e.isActive,
          o = e.borrowableInIsolation,
          a = e.eModes,
          i = e.isFrozen,
          s = e.isPaused;
        if (!t || !n || i || s) return !1;
        if (null !== r && void 0 !== r && r.isInEmode) {
          var c = a.find(function (e) {
            return e.id === r.userEmodeCategoryId;
          });
          return !!c && c.borrowingEnabled;
        }
        return !(null !== r && void 0 !== r && r.isInIsolationMode && !o);
      }
    },
    52358: function (e, r, t) {
      var n = t(67294);
      const o = n.forwardRef(function (e, r) {
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
              ref: r,
            },
            e
          ),
          n.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M19 14l-7 7m0 0l-7-7m7 7V3',
          })
        );
      });
      r.Z = o;
    },
  },
]);
