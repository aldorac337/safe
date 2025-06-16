'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3082],
  {
    90286: function (e, r, t) {
      var n = t(59499),
        o = t(4730),
        a = t(88078),
        s = t(80822),
        i = t(15861),
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
          v = (0, o.Z)(e, d),
          m = (0, c.HT)(),
          b = m.ghoLoadingData,
          f = m.ghoReserveData;
        if (b) return (0, u.jsx)(a.Z, { width: 70, height: 24 });
        var h = null !== r && void 0 !== r ? r : f.ghoBorrowAPYWithMaxDiscount,
          y = null !== t && void 0 !== t ? t : f.ghoVariableBorrowAPY,
          g = Number((100 * h).toFixed(2)) === Number((100 * y).toFixed(2));
        return (0, u.jsx)(s.Z, {
          sx: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
          children: g
            ? (0, u.jsx)(
                l.B,
                x(
                  {
                    compact: !0,
                    percent: !0,
                    value: h,
                    visibleDecimals: 2,
                    variant: null !== n && void 0 !== n ? n : 'h3',
                    'data-cy': 'apy',
                  },
                  v
                )
              )
            : (0, u.jsxs)(u.Fragment, {
                children: [
                  (0, u.jsx)(
                    l.B,
                    x(
                      {
                        compact: !0,
                        value: 100 * h,
                        visibleDecimals: 2,
                        variant: null !== n && void 0 !== n ? n : 'h3',
                        'data-cy': 'apy-gho-from',
                      },
                      v
                    )
                  ),
                  (0, u.jsx)(i.Z, {
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
                        value: y,
                        visibleDecimals: 2,
                        variant: null !== n && void 0 !== n ? n : 'h3',
                        'data-cy': 'apy-gho-till',
                      },
                      v
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
          return h;
        },
      });
      var n = t(90116),
        o = t(57499),
        a = t(3439),
        s = t(80822),
        i = t(15861),
        c = t(34386),
        l = t(60377),
        u = t(2127),
        d = t(90286),
        p = t(32867),
        x = t(38577),
        v = t(6308),
        m = t(45640),
        b = t(1790),
        f = t(85893),
        h = function (e) {
          var r = e.value,
            t = e.useApyRange,
            h = e.rangeValues,
            y = void 0 === h ? [0, 0] : h,
            g = e.ghoRoute,
            j = e.stkAaveBalance,
            w = e.userQualifiesForDiscount,
            A = e.onMoreDetailsClick,
            O = e.withTokenIcon,
            S = void 0 !== O && O,
            D = e.forceShowTooltip,
            T = void 0 !== D && D,
            B = e.variant,
            P = void 0 === B ? 'secondary14' : B,
            k = e.color,
            Z = void 0 === k ? void 0 : k,
            C = (0, l.HT)().ghoReserveData,
            E = Number(j),
            I = E >= C.ghoMinDiscountTokenBalanceForDiscount,
            N = (0, f.jsx)(f.Fragment, {}),
            R = w || T;
          return (
            R &&
              (N = (0, f.jsx)(s.Z, {
                sx: {
                  py: 4,
                  px: 6,
                  fontSize: '12px',
                  lineHeight: '16px',
                  a: { fontSize: '12px', lineHeight: '16px', fontWeight: 500 },
                },
                children: (0, f.jsxs)(i.Z, {
                  variant: 'subheader2',
                  children: [
                    (0, f.jsx)(o.cC, {
                      id: 'JK9zf1',
                      values: {
                        0: I
                          ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                (0, f.jsx)(p.B, {
                                  variant: 'subheader2',
                                  value: E,
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
                      onClick: A,
                      href: g,
                      underline: 'always',
                      variant: 'subheader2',
                      children: (0, f.jsx)(o.cC, { id: 'zwWKhA' }),
                    }),
                  ],
                }),
              })),
            (0, f.jsxs)(s.Z, {
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
                      title: N,
                      arrow: R,
                      PopperComponent: u.E,
                      children: (0, f.jsxs)(s.Z, {
                        sx: function () {
                          return { display: 'flex', alignItems: 'center' };
                        },
                        children: [
                          S &&
                            (0, f.jsx)(m.T1, {
                              symbol: 'stkAAVE',
                              sx: { height: 14, width: 14, mr: 1 },
                            }),
                          t
                            ? (0, f.jsx)(d.Z, {
                                percentVariant: P,
                                hyphenVariant: P,
                                minVal: Math.min.apply(Math, (0, n.Z)(y)),
                                maxVal: Math.max.apply(Math, (0, n.Z)(y)),
                                color: Z,
                              })
                            : (0, f.jsx)(p.B, {
                                value: r,
                                percent: !0,
                                variant: P,
                                color: Z,
                                'data-cy': 'apy',
                              }),
                        ],
                      }),
                    })
                  : (0, f.jsx)(v.J, { variant: 'secondary14', color: 'text.secondary' }),
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
        s = t(73592),
        i = t(49212),
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
            r === s.R.supplyCap
              ? (0, c.jsx)(a.cC, { id: '0wGCWc' })
              : (0, c.jsx)(a.cC, { id: 'cBc+4A' });
        return (0, c.jsx)(i.G, d(d({}, t), {}, { children: n }));
      };
    },
    70946: function (e, r, t) {
      t.d(r, {
        B: function () {
          return b;
        },
      });
      var n = t(59499),
        o = t(4730),
        a = t(57499),
        s = t(80822),
        i = t(88078),
        c = t(70794),
        l = t(65361),
        u = t(32867),
        d = t(49212),
        p = t(85893),
        x = ['loading', 'outputAmountUSD', 'inputAmountUSD'];
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
      function m(e) {
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
      var b = function (e) {
        var r = e.loading,
          t = e.outputAmountUSD,
          n = e.inputAmountUSD,
          v = (0, o.Z)(e, x),
          b = new c.O(t).minus(n),
          f = n && '0' !== n ? b.dividedBy(n).times(100).toFixed(2) : '0';
        '-0.00' === f && (f = '0.00');
        var h = Math.abs(Number(f)) > 10;
        return (0, p.jsx)(
          d.G,
          m(
            m(
              {
                variant: 'secondary12',
                color: 'text.secondary',
                event: { eventName: l.vh.TOOL_TIP, eventParams: { tooltip: 'Price Impact' } },
                text: (0, p.jsx)(s.Z, {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    color: h ? 'warning.main' : 'unset',
                  },
                  children: (0, p.jsx)(a.cC, {
                    id: 'yh2sjd',
                    values: {
                      0: r
                        ? (0, p.jsx)(i.Z, {
                            variant: 'rectangular',
                            height: 12,
                            width: 25,
                            sx: { borderRadius: '4px', display: 'flex', marginLeft: '4px' },
                          })
                        : (0, p.jsx)(u.B, {
                            value: f,
                            visibleDecimals: 2,
                            variant: 'secondary12',
                            color: 'text.secondary',
                            sx: { marginLeft: '4px', color: h ? 'warning.main' : 'unset' },
                          }),
                    },
                  }),
                }),
              },
              v
            ),
            {},
            { children: (0, p.jsx)(a.cC, { id: 'UAOZRe' }) }
          )
        );
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
      function s(e, r) {
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
      function i(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? s(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : s(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var c = function (e) {
        return (0, a.jsx)(o.Z, i(i({}, e), {}, { children: '\u2014' }));
      };
    },
    23478: function (e, r, t) {
      t.d(r, {
        W: function () {
          return P;
        },
        l: function () {
          return B;
        },
      });
      var n = t(59499),
        o = t(4730),
        a = t(57499),
        s = t(33740),
        i = t(2734),
        c = t(80822),
        l = t(15861),
        u = t(66489),
        d = t(73601),
        p = t(93946),
        x = t(94054),
        v = t(10315),
        m = t(18972),
        b = t(59334),
        f = t(69417),
        h = t(67294),
        y = t(57333),
        g = t(3062),
        j = t(46817),
        w = t(32867),
        A = t(45640),
        O = t(85893),
        S = ['onChange'];
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
      var B = h.forwardRef(function (e, r) {
          var t = e.onChange,
            n = (0, o.Z)(e, S);
          return (0, O.jsx)(
            y.Z,
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
        P = function (e) {
          var r = e.value,
            t = e.usdValue,
            n = e.symbol,
            o = e.onChange,
            h = e.disabled,
            y = e.disableInput,
            S = e.onSelect,
            D = e.assets,
            P = e.capType,
            k = e.maxValue,
            Z = e.isMaxSelected,
            C = e.inputTitle,
            E = e.balanceText,
            I = e.loading,
            N = void 0 !== I && I,
            R = e.event,
            M = e.selectOptionHeader,
            L = e.selectOption,
            _ = e.sx,
            F = void 0 === _ ? {} : _,
            U = e.exchangeRateComponent,
            V = (0, i.Z)(),
            Y = (0, g.Y)(function (e) {
              return e.trackEvent;
            }),
            z =
              1 === D.length
                ? D[0]
                : D &&
                  D.find(function (e) {
                    return e.symbol === n;
                  });
          return (0, O.jsxs)(
            c.Z,
            T(
              T({}, F),
              {},
              {
                children: [
                  (0, O.jsxs)(c.Z, {
                    sx: { display: 'flex', alignItems: 'center', mb: 1 },
                    children: [
                      (0, O.jsx)(l.Z, {
                        color: 'text.secondary',
                        children: C || (0, O.jsx)(a.cC, { id: 'hehnjM' }),
                      }),
                      P && (0, O.jsx)(j.Y, { capType: P }),
                    ],
                  }),
                  (0, O.jsxs)(c.Z, {
                    sx: function (e) {
                      return {
                        border: '1px solid '.concat(e.palette.divider),
                        borderRadius: '6px',
                        overflow: 'hidden',
                      };
                    },
                    children: [
                      (0, O.jsxs)(c.Z, {
                        sx: { display: 'flex', alignItems: 'center', mb: 0.5, px: 3, py: 2 },
                        children: [
                          N
                            ? (0, O.jsx)(c.Z, {
                                sx: { flex: 1 },
                                children: (0, O.jsx)(u.Z, { color: 'inherit', size: '16px' }),
                              })
                            : (0, O.jsx)(d.ZP, {
                                sx: { flex: 1 },
                                placeholder: '0.00',
                                disabled: h || y,
                                value: r,
                                autoFocus: !0,
                                onChange: function (e) {
                                  o &&
                                    (Number(e.target.value) > Number(k)
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
                            !y &&
                            (0, O.jsx)(p.Z, {
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
                              disabled: h,
                              children: (0, O.jsx)(s.Z, { height: 16 }),
                            }),
                          S && 1 !== D.length
                            ? (0, O.jsx)(x.Z, {
                                children: (0, O.jsxs)(v.Z, {
                                  disabled: h,
                                  value: z.symbol,
                                  onChange: function (e) {
                                    var r = D.find(function (r) {
                                      return r.symbol === e.target.value;
                                    });
                                    S && S(r), o && o('');
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
                                    var r =
                                      1 === D.length
                                        ? D[0]
                                        : D &&
                                          D.find(function (r) {
                                            return r.symbol === e;
                                          });
                                    return (0, O.jsxs)(c.Z, {
                                      sx: { display: 'flex', alignItems: 'center' },
                                      'data-cy': 'assetsSelectedOption_'.concat(
                                        r.symbol.toUpperCase()
                                      ),
                                      children: [
                                        (0, O.jsx)(A.T1, {
                                          symbol: r.iconSymbol || r.symbol,
                                          aToken: r.aToken,
                                          sx: { mr: 2, ml: 4 },
                                        }),
                                        (0, O.jsx)(l.Z, {
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
                                      return (0, O.jsx)(
                                        m.Z,
                                        {
                                          value: e.symbol,
                                          'data-cy': 'assetsSelectOption_'.concat(
                                            e.symbol.toUpperCase()
                                          ),
                                          children: L
                                            ? L(e)
                                            : (0, O.jsxs)(O.Fragment, {
                                                children: [
                                                  (0, O.jsx)(A.T1, {
                                                    aToken: e.aToken,
                                                    symbol: e.iconSymbol || e.symbol,
                                                    sx: { fontSize: '22px', mr: 1 },
                                                  }),
                                                  (0, O.jsx)(b.Z, {
                                                    sx: { mr: 6 },
                                                    children: e.symbol,
                                                  }),
                                                  e.balance &&
                                                    (0, O.jsx)(w.B, {
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
                            : (0, O.jsxs)(c.Z, {
                                sx: { display: 'inline-flex', alignItems: 'center' },
                                children: [
                                  (0, O.jsx)(A.T1, {
                                    aToken: z.aToken,
                                    symbol: z.iconSymbol || z.symbol,
                                    sx: { mr: 2, ml: 4 },
                                  }),
                                  (0, O.jsx)(l.Z, {
                                    variant: 'h3',
                                    sx: { lineHeight: '28px' },
                                    'data-cy': 'inputAsset',
                                    children: n,
                                  }),
                                ],
                              }),
                        ],
                      }),
                      (0, O.jsxs)(c.Z, {
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
                            ? (0, O.jsx)(c.Z, { sx: { flex: 1 } })
                            : (0, O.jsx)(w.B, {
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
                            (0, O.jsxs)(O.Fragment, {
                              children: [
                                (0, O.jsxs)(l.Z, {
                                  component: 'div',
                                  variant: 'secondary12',
                                  color: 'text.secondary',
                                  children: [
                                    E && '' !== E ? E : (0, O.jsx)(a.cC, { id: 'fsBGk0' }),
                                    ' ',
                                    (0, O.jsx)(w.B, {
                                      value: z.balance,
                                      compact: !0,
                                      variant: 'secondary12',
                                      color: 'text.secondary',
                                      symbolsColor: 'text.disabled',
                                    }),
                                  ],
                                }),
                                !y &&
                                  (0, O.jsx)(f.Z, {
                                    size: 'small',
                                    sx: { minWidth: 0, ml: '7px', p: 0 },
                                    onClick: function () {
                                      R && Y(R.eventName, T({}, R.eventParams)), o('-1');
                                    },
                                    disabled: h || Z,
                                    children: (0, O.jsx)(a.cC, { id: 'CK1KXz' }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                      U &&
                        (0, O.jsx)(c.Z, {
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
    99047: function (e, r, t) {
      t.r(r),
        t.d(r, {
          DebtSwitchModal: function () {
            return Ce;
          },
        });
      var n = t(59499),
        o = t(57499),
        a = t(67294),
        s = t(15629),
        i = t(49679),
        c = t(44949),
        l = t(92519),
        u = t(90116),
        d = t(1279),
        p = t(21046),
        x = t(94684),
        v = t(80227),
        m = t(26447),
        b = t(15861),
        f = t(53219),
        h = t(80822),
        y = t(63366),
        g = t(87462),
        j = t(63961),
        w = t(94780),
        A = t(90948),
        O = t(28628),
        S = t(98216),
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
      var P = t(85893);
      const k = ['className', 'color', 'component', 'disableGutters', 'disableSticky', 'inset'],
        Z = (0, A.ZP)('li', {
          name: 'MuiListSubheader',
          slot: 'Root',
          overridesResolver: (e, r) => {
            const { ownerState: t } = e;
            return [
              r.root,
              'default' !== t.color && r[`color${(0, S.Z)(t.color)}`],
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
        C = a.forwardRef(function (e, r) {
          const t = (0, O.i)({ props: e, name: 'MuiListSubheader' }),
            {
              className: n,
              color: o = 'default',
              component: a = 'li',
              disableGutters: s = !1,
              disableSticky: i = !1,
              inset: c = !1,
            } = t,
            l = (0, y.Z)(t, k),
            u = (0, g.Z)({}, t, {
              color: o,
              component: a,
              disableGutters: s,
              disableSticky: i,
              inset: c,
            }),
            d = ((e) => {
              const { classes: r, color: t, disableGutters: n, inset: o, disableSticky: a } = e,
                s = {
                  root: [
                    'root',
                    'default' !== t && `color${(0, S.Z)(t)}`,
                    !n && 'gutters',
                    o && 'inset',
                    !a && 'sticky',
                  ],
                };
              return (0, w.Z)(s, B, r);
            })(u);
          return (0, P.jsx)(
            Z,
            (0, g.Z)({ as: a, className: (0, j.Z)(d.root, n), ref: r, ownerState: u }, l)
          );
        });
      C.muiSkipListHighlight = !0;
      var E = C,
        I = t(59334),
        N = t(70794),
        R = t(49663),
        M = t(70946),
        L = t(32867),
        _ = t(38577),
        F = t(45640),
        U = t(35783),
        V = t(23478),
        Y = t(67944),
        z = t(87886),
        H = t(50029),
        W = t(87794),
        G = t.n(W),
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
        se = t(80854),
        ie = t(30202),
        ce = t(56371),
        le = t(92997),
        ue = t(64041),
        de = t(805),
        pe = t(52251),
        xe = t(73886),
        ve = t(84207),
        me = t(53008);
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
      var he,
        ye = function (e) {
          var r = e.amountToSwap,
            t = e.amountToReceive,
            n = e.isWrongNetwork,
            s = e.sx,
            i = e.poolReserve,
            l = e.targetReserve,
            u = e.isMaxSelected,
            d = e.loading,
            p = e.blocked,
            x = e.buildTxFn,
            v = (0, J.Y)(
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
            m = (0, oe.Z)(v, 8),
            b = m[0],
            f = m[1],
            h = m[2],
            y = m[3],
            g = m[4],
            j = m[5],
            w = m[6],
            A = m[7],
            O = (0, c.vR)(),
            S = O.approvalTxState,
            D = O.mainTxState,
            T = O.loadingTxns,
            B = O.setMainTxState,
            k = O.setTxError,
            Z = O.setGasLimit,
            C = O.setLoadingTxns,
            E = O.setApprovalTxState,
            I = (0, K.Z)(),
            N = I.sendTx,
            R = I.signTxData,
            M = (0, ie.NL)(),
            L = (0, a.useState)(!1),
            _ = L[0],
            F = L[1],
            U = (0, a.useState)(),
            V = U[0],
            Y = U[1],
            W = (0, a.useState)(!1),
            q = W[0],
            Q = W[1],
            $ = (0, a.useState)(),
            X = $[0],
            ee = $[1],
            re = f.v3;
          (0, a.useEffect)(
            function () {
              var e = w === ue.n.PERMIT;
              Q(e);
            },
            [w]
          );
          var te = (function () {
              var e = (0, H.Z)(
                G().mark(function e() {
                  var r, n, o, a, s, i, c, u, d;
                  return G().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !_ || !V)) {
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
                              A({
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
                            return (a = e.sent), (e.next = 10), R(a);
                          case 10:
                            (s = e.sent),
                              ee({ signature: s, deadline: o, amount: r }),
                              E({ txHash: le.Z, loading: !1, success: !0 }),
                              (e.next = 29);
                            break;
                          case 15:
                            return (
                              (c = h({
                                debtTokenAddress: l.variableDebtTokenAddress,
                                delegatee:
                                  null !== (i = f.addresses.DEBT_SWITCH_ADAPTER) && void 0 !== i
                                    ? i
                                    : '',
                                amount: r,
                              })),
                              E(fe(fe({}, S), {}, { loading: !0 })),
                              (e.next = 19),
                              y(c)
                            );
                          case 19:
                            return (c = e.sent), (e.next = 22), N(c);
                          case 22:
                            return (u = e.sent), (e.next = 25), u.wait(1);
                          case 25:
                            E({ txHash: u.hash, loading: !1, success: !0 }),
                              g(u.hash, {
                                action: ae.UQ.approval,
                                txState: 'success',
                                asset: l.variableDebtTokenAddress,
                                amount: r,
                                assetName: 'varDebt' + l.name,
                                spender: f.addresses.DEBT_SWITCH_ADAPTER,
                              }),
                              k(void 0),
                              be(!0);
                          case 29:
                            e.next = 36;
                            break;
                          case 31:
                            (e.prev = 31),
                              (e.t0 = e.catch(0)),
                              (d = (0, de.WG)(e.t0, de.aD.GAS_ESTIMATION, !1)),
                              k(d),
                              S.success || E({ txHash: void 0, loading: !1 });
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
                G().mark(function e() {
                  var o, a, s, c;
                  return G().wrap(
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
                                poolReserve: i,
                                targetReserve: l,
                                amountToReceive: (0, ce.parseUnits)(t, l.decimals).toString(),
                                amountToSwap: (0, ce.parseUnits)(r, i.decimals).toString(),
                                isMaxSelected: u,
                                txCalldata: o.swapCallData,
                                augustus: o.augustus,
                                signatureParams: X,
                                isWrongNetwork: n,
                              })),
                              (e.next = 8),
                              y(a)
                            );
                          case 8:
                            return (a = e.sent), (e.next = 11), N(a);
                          case 11:
                            return (s = e.sent), (e.next = 14), s.wait(1);
                          case 14:
                            B({ txHash: s.hash, loading: !1, success: !0 }),
                              g(s.hash, {
                                action: 'debtSwitch',
                                txState: 'success',
                                previousState: ''
                                  .concat(o.outputAmount, ' variable ')
                                  .concat(i.symbol),
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
                              k(c),
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
                  G().mark(function e(r) {
                    var n, o, a;
                    return G().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (void 0 !== (n = V) && !r) {
                              e.next = 9;
                              break;
                            }
                            return (
                              C(!0),
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
                            (n = e.sent), Y(n), (e.next = 11);
                            break;
                          case 9:
                            F(!1), E({});
                          case 11:
                            n &&
                              ((a = (0, me.iv)({
                                approvedAmount: n.amount,
                                amount: t,
                                signedAmount: '0',
                              })),
                              F(a),
                              a && E({})),
                              C(!1);
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
              [V, C, b, l.variableDebtTokenAddress, f.addresses.DEBT_SWITCH_ADAPTER, E, t]
            );
          return (
            (0, a.useEffect)(
              function () {
                '0' !== r &&
                  (V ? V.debtTokenAddress !== l.variableDebtTokenAddress && be(!0) : be());
              },
              [r, V, be, l.variableDebtTokenAddress]
            ),
            (0, a.useEffect)(
              function () {
                var e = 0;
                (e = Number(se.eB[ae.UQ.borrow].recommended)),
                  _ && !S.success && (e += Number(me.Fi)),
                  Z(e.toString());
              },
              [_, S, Z]
            ),
            (0, P.jsx)(ve.B, {
              mainTxState: D,
              approvalTxState: S,
              isWrongNetwork: n,
              preparingTransactions: T,
              handleAction: ne,
              requiresAmount: !0,
              amount: r,
              handleApproval: function () {
                return te();
              },
              requiresApproval: _,
              actionText: (0, P.jsx)(o.cC, { id: 'vH2C/2' }),
              actionInProgressText: (0, P.jsx)(o.cC, { id: 'bSc4Zw' }),
              sx: s,
              fetchingData: d,
              errorParams: {
                loading: !1,
                disabled: p || !(null !== S && void 0 !== S && S.success),
                content: (0, P.jsx)(o.cC, { id: 'vH2C/2' }),
                handleClick: ne,
              },
              blocked: p,
              tryPermit: re,
            })
          );
        },
        ge = t(88078),
        je = t(20986),
        we = (0, P.jsx)(f.Z, {
          color: 'primary',
          sx: { fontSize: '14px', mx: 1 },
          children: (0, P.jsx)(v.Z, {}),
        }),
        Ae = function (e) {
          var r,
            t,
            n = e.switchSource,
            a = e.switchTarget,
            s = e.toAmount,
            i = e.fromAmount,
            c = e.loading,
            l = e.sourceBalance,
            u = e.sourceBorrowAPY,
            p = e.targetBorrowAPY,
            x = e.ghoData,
            v = e.currentMarket,
            m = (0, d.hE)(l).minus((0, d.hE)(i)),
            b = (0, d.hE)(a.variableBorrows).plus((0, d.hE)(s)),
            f = (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsx)(ge.Z, {
                  variant: 'rectangular',
                  height: 20,
                  width: 100,
                  sx: { borderRadius: '4px' },
                }),
                (0, P.jsx)(ge.Z, {
                  variant: 'rectangular',
                  height: 15,
                  width: 80,
                  sx: { borderRadius: '4px', marginTop: '4px' },
                }),
              ],
            }),
            y = 0,
            g = null === x || void 0 === x ? void 0 : x.ghoApyRange;
          return (
            'GHO' === a.reserve.symbol &&
              x &&
              ((y = (0, ee.li)(
                x.ghoVariableBorrowApy,
                x.userCurrentBorrowBalance + x.inputAmount,
                x.userGhoAvailableToBorrowAtDiscount,
                x.ghoBorrowAPYWithMaxDiscount
              )),
              g && (g = [g[0], y])),
            (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsx)(je.X, {
                  caption: (0, P.jsx)(o.cC, { id: 'PJK9u/' }),
                  captionVariant: 'description',
                  mb: 4,
                  children: (0, P.jsx)(h.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: c
                      ? (0, P.jsx)(ge.Z, {
                          variant: 'rectangular',
                          height: 20,
                          width: 100,
                          sx: { borderRadius: '4px' },
                        })
                      : (0, P.jsxs)(P.Fragment, {
                          children: [
                            (0, ee.F$)({ symbol: n.reserve.symbol, currentMarket: v }) && x
                              ? (0, P.jsx)(R.B, {
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
                                      v
                                    ) + '/#discount',
                                  forceShowTooltip: !0,
                                  withTokenIcon: x.qualifiesForDiscount,
                                  userQualifiesForDiscount: x.qualifiesForDiscount,
                                })
                              : (0, P.jsx)(L.B, { value: u, variant: 'secondary14', percent: !0 }),
                            we,
                            (0, ee.F$)({ symbol: a.reserve.symbol, currentMarket: v }) && x
                              ? (0, P.jsx)(R.B, {
                                  useApyRange: x.qualifiesForDiscount && !x.inputAmount,
                                  rangeValues: 0 === x.inputAmount ? x.ghoApyRange : g,
                                  variant: 'main14',
                                  color: 'text.secondary',
                                  value: 0 === x.inputAmount ? x.userBorrowApyAfterMaxSwitch : y,
                                  'data-cy': 'apyType',
                                  stkAaveBalance: x.userDiscountTokenBalance,
                                  ghoRoute:
                                    _.Z6.reserveOverview(
                                      null !== (t = a.underlyingAsset) && void 0 !== t ? t : '',
                                      v
                                    ) + '/#discount',
                                  forceShowTooltip: !0,
                                  withTokenIcon: x.qualifiesForDiscount,
                                  userQualifiesForDiscount: x.qualifiesForDiscount,
                                })
                              : (0, P.jsx)(L.B, { value: p, variant: 'secondary14', percent: !0 }),
                          ],
                        }),
                  }),
                }),
                (0, P.jsx)(Y.aE, {
                  incentives: n.reserve.aIncentivesData,
                  symbol: n.reserve.symbol,
                  futureIncentives: n.reserve.aIncentivesData,
                  futureSymbol: n.reserve.symbol,
                  loading: c,
                }),
                (0, P.jsx)(je.X, {
                  caption: (0, P.jsx)(o.cC, { id: 'TszKts' }),
                  captionVariant: 'description',
                  mb: 4,
                  align: 'flex-start',
                  children: (0, P.jsxs)(h.Z, {
                    sx: { textAlign: 'right' },
                    children: [
                      (0, P.jsx)(h.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        },
                        children: c
                          ? f
                          : (0, P.jsxs)(P.Fragment, {
                              children: [
                                (0, P.jsxs)(h.Z, {
                                  sx: { display: 'flex', alignItems: 'center' },
                                  children: [
                                    (0, P.jsx)(F.T1, {
                                      symbol: n.reserve.iconSymbol,
                                      sx: { mr: 2, ml: 4, fontSize: '16px' },
                                    }),
                                    (0, P.jsx)(L.B, {
                                      value: m.toString(),
                                      variant: 'secondary14',
                                      compact: !0,
                                    }),
                                  ],
                                }),
                                (0, P.jsx)(L.B, {
                                  value: m.multipliedBy((0, d.hE)(n.reserve.priceInUSD)).toString(),
                                  variant: 'helperText',
                                  compact: !0,
                                  symbol: 'USD',
                                  symbolsColor: 'text.secondary',
                                  color: 'text.secondary',
                                }),
                              ],
                            }),
                      }),
                      (0, P.jsx)(h.Z, {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        },
                        mt: 2,
                        children: c
                          ? f
                          : (0, P.jsxs)(P.Fragment, {
                              children: [
                                (0, P.jsxs)(h.Z, {
                                  sx: { display: 'flex', alignItems: 'center' },
                                  children: [
                                    (0, P.jsx)(F.T1, {
                                      symbol: a.reserve.iconSymbol,
                                      sx: { mr: 2, ml: 4, fontSize: '16px' },
                                    }),
                                    (0, P.jsx)(L.B, {
                                      value: b.toString(),
                                      variant: 'secondary14',
                                      compact: !0,
                                    }),
                                  ],
                                }),
                                (0, P.jsx)(L.B, {
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
      function Oe(e, r) {
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
      function Se(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Oe(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : Oe(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      !(function (e) {
        e[(e.INSUFFICIENT_LIQUIDITY = 0)] = 'INSUFFICIENT_LIQUIDITY';
      })(he || (he = {}));
      var De = function (e) {
          var r = e.poolReserve,
            t = e.userReserve,
            n = e.isWrongNetwork,
            s = e.user,
            i = (0, re.HT)(),
            l = i.reserves,
            y = i.ghoReserveData,
            g = i.ghoUserData,
            j = i.ghoUserLoadingData,
            w = (0, J.Y)(function (e) {
              return e.currentChainId;
            }),
            A = (0, J.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            O = (0, K.Z)().currentAccount,
            S = (0, c.vR)(),
            D = S.gasLimit,
            T = S.mainTxState,
            B = S.txError,
            k = S.setTxError,
            Z = (0, J.Y)(function (e) {
              return e.currentMarket;
            }),
            C = (0, J.Y)(function (e) {
              return e.currentMarketData;
            }),
            E = (0, Q.l)(C).data,
            I = (0, q.b)(C).data,
            R = l
              .filter(function (e) {
                return (
                  e.underlyingAsset !== r.underlyingAsset &&
                  '0' !== e.availableLiquidity &&
                  (0, X.hF)(e, s)
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
          R = [].concat(
            (0, u.Z)(
              R.filter(function (e) {
                return 'GHO' === e.symbol;
              })
            ),
            (0, u.Z)(
              R.filter(function (e) {
                return 'GHO' !== e.symbol;
              })
            )
          );
          var _ = (0, a.useState)(''),
            W = _[0],
            oe = _[1],
            ae = (0, a.useRef)(''),
            se = (0, a.useState)(R[0]),
            ie = se[0],
            ce = se[1],
            le = (0, a.useState)('0.1'),
            ue = le[0],
            de = le[1],
            pe = s.userReservesData.find(function (e) {
              return e.underlyingAsset === ie.address;
            }),
            xe = t.variableBorrows,
            ve = '-1' === W,
            me = ve ? xe : W,
            be = (function (e) {
              var r = e.chainId,
                t = e.max,
                n = e.maxSlippage,
                o = e.skip,
                s = e.swapIn,
                i = e.swapOut,
                c = e.userAddress,
                l = (0, a.useState)('0'),
                u = l[0],
                p = l[1],
                x = (0, a.useState)('0'),
                v = x[0],
                m = x[1],
                b = (0, a.useState)('0'),
                f = b[0],
                h = b[1],
                y = (0, a.useState)('0'),
                g = y[0],
                j = y[1],
                w = (0, a.useState)(),
                A = w[0],
                O = w[1],
                S = (0, a.useState)(!1),
                D = S[0],
                T = S[1],
                B = (0, a.useState)(''),
                P = B[0],
                k = B[1],
                Z = (0, a.useMemo)(
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
                C = (0, a.useMemo)(
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
                E = (0, a.useCallback)(
                  function () {
                    return (0, z.wP)(Z, C, r, c, t);
                  },
                  [r, t, Z, C, c]
                );
              return (
                (0, a.useEffect)(
                  function () {
                    if (!o) {
                      var e = (function () {
                          var e = (0, H.Z)(
                            G().mark(function e() {
                              var r, t;
                              return G().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          Z.underlyingAsset &&
                                          C.underlyingAsset &&
                                          C.amount &&
                                          '0' !== C.amount &&
                                          !isNaN(+C.amount)
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          p('0'),
                                          m('0'),
                                          h('0'),
                                          j('0'),
                                          O(void 0),
                                          e.abrupt('return')
                                        );
                                      case 7:
                                        return T(!0), (e.prev = 8), (e.next = 11), E();
                                      case 11:
                                        (r = e.sent),
                                          k(''),
                                          O(r),
                                          p((0, d.Fv)(r.srcAmount, r.srcDecimals)),
                                          h((0, d.Fv)(r.destAmount, r.destDecimals)),
                                          m(r.srcUSD),
                                          j(r.destUSD),
                                          (e.next = 25);
                                        break;
                                      case 20:
                                        (e.prev = 20),
                                          (e.t0 = e.catch(8)),
                                          console.error(e.t0),
                                          (t =
                                            (0, z.aE)(e.t0.message) ||
                                            'There was an issue fetching data from Paraswap'),
                                          k(t);
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
                  [o, Z.underlyingAsset, Z.amount, C.underlyingAsset, C.amount, E, n]
                ),
                {
                  outputAmount: f,
                  outputAmountUSD: g,
                  inputAmount: u,
                  inputAmountUSD: v,
                  loading: D,
                  error: P,
                  buildTxFn: (function () {
                    var e = (0, H.Z)(
                      G().mark(function e() {
                        return G().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (A) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error('Route required to build transaction');
                              case 2:
                                return e.abrupt('return', (0, z._n)(A, s, i, r, c, n));
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
              chainId: A.underlyingChainId || w,
              userAddress: O,
              swapOut: Se(Se({}, r), {}, { amount: ae.current }),
              swapIn: Se(Se({}, pe.reserve), {}, { amount: '0' }),
              max: ve,
              skip: T.loading || !1,
              maxSlippage: Number(ue),
            }),
            fe = be.inputAmount,
            ge = be.outputAmount,
            je = be.outputAmountUSD,
            we = be.error,
            Oe = be.loading,
            De = be.buildTxFn,
            ke = Oe && '0' === je,
            Ze = (0, d.hE)(p.Bz.toString()),
            Ce = '0';
          (0, ee.F$)({ symbol: pe.reserve.symbol, currentMarket: Z })
            ? (Ce = y.aaveFacilitatorRemainingCapacity.toString())
            : ((Ze =
                '0' === pe.reserve.borrowCap
                  ? (0, d.hE)(p.Bz.toString())
                  : (0, d.hE)(Number(pe.reserve.borrowCap)).minus((0, d.hE)(pe.reserve.totalDebt))),
              (Ce = pe.reserve.formattedAvailableLiquidity));
          var Ee = N.O.max(N.O.min(Ce, Ze), 0),
            Ie = Number(me) * Number(r.priceInUSD),
            Ne = Number(fe) * Number(ie.priceInUsd),
            Re = Ne - Ie,
            Me = 0 === Number(s.availableBorrowsUSD) || Re > Number(s.availableBorrowsUSD),
            Le = void 0;
          (0, N.O)(fe).gt(Ee) && (Le = he.INSUFFICIENT_LIQUIDITY);
          var _e = function () {
              return Le === he.INSUFFICIENT_LIQUIDITY ? (0, P.jsx)(o.cC, { id: '00OflG' }) : null;
            },
            Fe = (0, z.LN)(fe, ue, ie.decimals || 18);
          if (T.success)
            return (0, P.jsx)(te.R, {
              customAction: (0, P.jsxs)(m.Z, {
                gap: 3,
                children: [
                  (0, P.jsx)(b.Z, {
                    variant: 'description',
                    color: 'text.primary',
                    children: (0, P.jsx)(o.cC, { id: '+Tzhaj' }),
                  }),
                  (0, P.jsxs)(m.Z, {
                    direction: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    children: [
                      (0, P.jsx)(F.T1, { symbol: r.iconSymbol, sx: { mx: 1 } }),
                      (0, P.jsx)(L.B, { value: ae.current, compact: !0, variant: 'subheader1' }),
                      r.symbol,
                      (0, P.jsx)(f.Z, {
                        color: 'primary',
                        sx: { fontSize: '14px', mx: 1 },
                        children: (0, P.jsx)(v.Z, {}),
                      }),
                      (0, P.jsx)(F.T1, { symbol: pe.reserve.iconSymbol, sx: { mx: 1 } }),
                      (0, P.jsx)(L.B, { value: Fe, compact: !0, variant: 'subheader1' }),
                      pe.reserve.symbol,
                    ],
                  }),
                ],
              }),
            });
          var Ue,
            Ve = !1;
          if (
            l.some(function (e) {
              return 'GHO' === e.symbol;
            })
          ) {
            var Ye = Number(xe) * Number(r.priceInUSD) + g.userGhoBorrowBalance,
              ze = (0, ee.li)(
                y.ghoVariableBorrowAPY,
                g.userGhoBorrowBalance,
                g.userGhoAvailableToBorrowAtDiscount,
                y.ghoBorrowAPYWithMaxDiscount
              ),
              He = (0, ee.li)(
                y.ghoVariableBorrowAPY,
                Ye,
                g.userGhoAvailableToBorrowAtDiscount,
                y.ghoBorrowAPYWithMaxDiscount
              ),
              We = j ? void 0 : [ze, He];
            (Ve = !(!E || !I) && (0, ee.k9)(I, E, xe)),
              (Ue = {
                qualifiesForDiscount: Ve,
                ghoApyRange: We,
                userBorrowApyAfterMaxSwitch: He,
                userDiscountTokenBalance: g.userDiscountTokenBalance,
                inputAmount: Number(me),
                targetAmount: Number(fe),
                userCurrentBorrowApy: ze,
                ghoVariableBorrowApy: y.ghoVariableBorrowAPY,
                userGhoAvailableToBorrowAtDiscount: g.userGhoAvailableToBorrowAtDiscount,
                ghoBorrowAPYWithMaxDiscount: y.ghoBorrowAPYWithMaxDiscount,
                userCurrentBorrowBalance: g.userGhoBorrowBalance,
              });
          }
          return (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)(V.W, {
                value: me,
                onChange: function (e) {
                  var r = '-1' === e;
                  (ae.current = r ? xe : e), oe(e), k(void 0);
                },
                usdValue: Ie.toString(),
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
                inputTitle: (0, P.jsx)(o.cC, { id: 'rf8POi' }),
                balanceText: (0, P.jsx)(a.Fragment, {
                  children: (0, P.jsx)(o.cC, { id: 'hxi7vE' }),
                }),
                isMaxSelected: ve,
              }),
              (0, P.jsxs)(h.Z, {
                sx: {
                  padding: '18px',
                  pt: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                },
                children: [
                  (0, P.jsx)(f.Z, {
                    sx: { fontSize: '18px !important' },
                    children: (0, P.jsx)(x.Z, {}),
                  }),
                  (0, P.jsx)(M.B, {
                    loading: ke,
                    outputAmountUSD: Ne.toString(),
                    inputAmountUSD: Ie.toString(),
                  }),
                ],
              }),
              (0, P.jsx)(V.W, {
                value: fe,
                onSelect: ce,
                usdValue: Ne.toString(),
                symbol: ie.symbol,
                assets: R,
                inputTitle: (0, P.jsx)(o.cC, { id: 'N7dVh7' }),
                balanceText: (0, P.jsx)(o.cC, { id: 'zmTPiV' }),
                disableInput: !0,
                loading: ke,
                selectOptionHeader: (0, P.jsx)(Te, {}),
                selectOption: function (e) {
                  var r, t;
                  return (0, ee.F$)({ symbol: e.symbol, currentMarket: Z })
                    ? (0, P.jsx)(Pe, {
                        asset: e,
                        ghoApyRange: null === (r = Ue) || void 0 === r ? void 0 : r.ghoApyRange,
                        userBorrowApyAfterMaxSwitch:
                          null === (t = Ue) || void 0 === t
                            ? void 0
                            : t.userBorrowApyAfterMaxSwitch,
                        userDiscountTokenBalance: g.userDiscountTokenBalance,
                        currentMarket: Z,
                        qualifiesForDiscount: Ve,
                      })
                    : (0, P.jsx)(Be, { asset: e });
                },
              }),
              we &&
                !ke &&
                (0, P.jsx)(b.Z, { variant: 'helperText', color: 'error.main', children: we }),
              !we &&
                void 0 !== Le &&
                (0, P.jsx)(b.Z, {
                  variant: 'helperText',
                  color: 'error.main',
                  children: (0, P.jsx)(_e, {}),
                }),
              (0, P.jsx)(Y.m6, {
                gasLimit: D,
                slippageSelector: (0, P.jsx)($.n, {
                  selectedSlippage: ue,
                  setSlippage: function (e) {
                    k(void 0), de(e);
                  },
                  slippageTooltipHeader: (0, P.jsxs)(m.Z, {
                    direction: 'row',
                    gap: 2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    children: [
                      (0, P.jsx)(o.cC, { id: 'MIy2RJ' }),
                      (0, P.jsx)(m.Z, {
                        alignItems: 'end',
                        children: (0, P.jsxs)(m.Z, {
                          direction: 'row',
                          children: [
                            (0, P.jsx)(F.T1, {
                              symbol: pe.reserve.iconSymbol,
                              sx: { mr: 1, fontSize: '14px' },
                            }),
                            (0, P.jsx)(L.B, { value: Fe, variant: 'secondary12' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                children: (0, P.jsx)(Ae, {
                  switchSource: t,
                  switchTarget: pe,
                  toAmount: fe,
                  fromAmount: '' === me ? '0' : me,
                  loading: ke,
                  sourceBalance: xe,
                  sourceBorrowAPY: r.variableBorrowAPY,
                  targetBorrowAPY: pe.reserve.variableBorrowAPY,
                  ghoData: Ue,
                  currentMarket: Z,
                }),
              }),
              B && (0, P.jsx)(ne.f, { txError: B }),
              Me &&
                (0, P.jsx)(U.v, {
                  severity: 'error',
                  sx: { mt: 4 },
                  children: (0, P.jsx)(b.Z, {
                    variant: 'caption',
                    children: (0, P.jsx)(o.cC, { id: 'v8x7Mg' }),
                  }),
                }),
              (0, P.jsx)(ye, {
                isMaxSelected: ve,
                poolReserve: r,
                amountToSwap: ge,
                amountToReceive: Fe,
                isWrongNetwork: n,
                targetReserve: pe.reserve,
                symbol: r.symbol,
                blocked: void 0 !== Le || '' !== we || Me,
                loading: Oe,
                buildTxFn: De,
              }),
            ],
          });
        },
        Te = function () {
          return (0, P.jsx)(E, {
            sx: function (e) {
              return { borderBottom: '1px solid '.concat(e.palette.divider), mt: -1 };
            },
            children: (0, P.jsxs)(m.Z, {
              direction: 'row',
              sx: { py: 4 },
              gap: 14,
              children: [
                (0, P.jsx)(b.Z, {
                  variant: 'subheader2',
                  children: (0, P.jsx)(o.cC, { id: 'lNVG7i' }),
                }),
                (0, P.jsx)(b.Z, {
                  variant: 'subheader2',
                  children: (0, P.jsx)(o.cC, { id: 'o4tCu3' }),
                }),
              ],
            }),
          });
        },
        Be = function (e) {
          var r = e.asset;
          return (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)(F.T1, {
                aToken: r.aToken,
                symbol: r.iconSymbol || r.symbol,
                sx: { fontSize: '22px', mr: 1 },
              }),
              (0, P.jsx)(I.Z, { sx: { mr: 6 }, children: r.symbol }),
              (0, P.jsxs)(h.Z, {
                sx: { display: 'flex', flexDirection: 'column', alignItems: 'end' },
                children: [
                  (0, P.jsx)(L.B, {
                    value: r.variableApy,
                    percent: !0,
                    variant: 'main14',
                    color: 'text.secondary',
                  }),
                  (0, P.jsx)(b.Z, {
                    variant: 'helperText',
                    color: 'text.secondary',
                    children: (0, P.jsx)(o.cC, { id: 'B9Gqbz' }),
                  }),
                ],
              }),
            ],
          });
        },
        Pe = function (e) {
          var r,
            t = e.ghoApyRange,
            n = e.asset,
            a = e.userBorrowApyAfterMaxSwitch,
            s = e.userDiscountTokenBalance,
            i = e.currentMarket,
            c = e.qualifiesForDiscount;
          return (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)(F.T1, {
                aToken: n.aToken,
                symbol: n.iconSymbol || n.symbol,
                sx: { fontSize: '22px', mr: 1 },
              }),
              (0, P.jsx)(I.Z, { sx: { mr: 6 }, children: n.symbol }),
              (0, P.jsxs)(h.Z, {
                sx: { display: 'flex', flexDirection: 'column', alignItems: 'end' },
                children: [
                  (0, P.jsx)(R.B, {
                    useApyRange: c,
                    rangeValues: t,
                    variant: 'main14',
                    color: 'text.secondary',
                    value: null !== a && void 0 !== a ? a : -1,
                    'data-cy': 'apyType',
                    stkAaveBalance: s,
                    ghoRoute:
                      _.Z6.reserveOverview(
                        null !== (r = null === n || void 0 === n ? void 0 : n.address) &&
                          void 0 !== r
                          ? r
                          : '',
                        i
                      ) + '/#discount',
                    forceShowTooltip: !0,
                    withTokenIcon: c,
                    userQualifiesForDiscount: c,
                  }),
                  (0, P.jsx)(b.Z, {
                    variant: 'helperText',
                    color: 'text.secondary',
                    children: (0, P.jsx)(o.cC, { id: 'ES8dkb' }),
                  }),
                ],
              }),
            ],
          });
        };
      function ke(e, r) {
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
      function Ze(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ke(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ke(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var Ce = function () {
        var e = (0, c.vR)(),
          r = e.type,
          t = e.close,
          n = e.args;
        return (0, P.jsx)(s.P, {
          open: r === c.w8.DebtSwitch,
          setOpen: t,
          children: (0, P.jsx)(l.A, {
            title: (0, P.jsx)(o.cC, { id: 'wyi0tk' }),
            underlyingAsset: n.underlyingAsset,
            hideTitleSymbol: !0,
            children: function (e) {
              return (0, P.jsx)(i.X, {
                children: function (r) {
                  return (0, P.jsx)(De, Ze(Ze({}, e), {}, { user: r }));
                },
              });
            },
          }),
        });
      };
    },
    92519: function (e, r, t) {
      t.d(r, {
        A: function () {
          return f;
        },
      });
      var n = t(80854),
        o = (t(67294), t(60377)),
        a = t(50060),
        s = t(89771),
        i = t(53097),
        c = t(44949),
        l = t(72005),
        u = t(3062),
        d = t(65361),
        p = t(79850),
        x = t(37096),
        v = t(19408),
        m = t(40429),
        b = t(85893),
        f = function (e) {
          var r,
            t,
            f = e.hideTitleSymbol,
            h = e.underlyingAsset,
            y = e.children,
            g = e.requiredChainId,
            j = e.title,
            w = e.keepWrappedSymbol,
            A = (0, l.Z)().readOnlyModeAddress,
            O = (0, u.Y)(function (e) {
              return e.currentMarketData;
            }),
            S = (0, u.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            D = (0, a.P)(O).walletBalances,
            T = (0, o.HT)(),
            B = T.user,
            P = T.reserves,
            k = (0, c.vR)(),
            Z = k.txError,
            C = k.mainTxState,
            E = (0, i.Q)(g),
            I = E.isWrongNetwork,
            N = E.requiredChainId;
          if (Z && Z.blocking) return (0, b.jsx)(m.D, { txError: Z });
          var R = P.find(function (e) {
              return h.toLowerCase() === n.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : h === e.underlyingAsset;
            }),
            M =
              null === B || void 0 === B
                ? void 0
                : B.userReservesData.find(function (e) {
                    return h.toLowerCase() === n.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : h === e.underlyingAsset;
                  }),
            L = R.isWrappedBaseAsset && !w ? S.baseAssetSymbol : R.symbol;
          return (0, b.jsxs)(s.hv, {
            asset: R,
            children: [
              !C.success && (0, b.jsx)(x.E, { title: j, symbol: f ? void 0 : L }),
              I &&
                !A &&
                (0, b.jsx)(v.I, {
                  networkName: (0, p.Mo)(N).name,
                  chainId: N,
                  event: { eventName: d.vh.SWITCH_NETWORK, eventParams: { asset: h } },
                }),
              y({
                isWrongNetwork: I,
                nativeBalance:
                  (null === (r = D[n.hP.toLowerCase()]) || void 0 === r ? void 0 : r.amount) || '0',
                tokenBalance:
                  (null === (t = D[R.underlyingAsset.toLowerCase()]) || void 0 === t
                    ? void 0
                    : t.amount) || '0',
                poolReserve: R,
                symbol: L,
                underlyingAsset: h,
                userReserve: M,
              }),
            ],
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
        s = t(35783),
        i = t(83063),
        c = t(85893),
        l = function (e) {
          var r = e.txError;
          return (0, c.jsxs)(o.Z, {
            children: [
              (0, c.jsx)(i.Q, { txError: r }),
              'MetaMask Message Signature: User denied message signature.' !== r.rawError.message &&
                'MetaMask Tx Signature: User denied transaction signature.' !==
                  r.rawError.message &&
                (0, c.jsx)(o.Z, {
                  sx: { pt: 4 },
                  children: (0, c.jsx)(s.v, {
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
          return s;
        },
        iv: function () {
          return l;
        },
        pQ: function () {
          return i;
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
      var s = function (e, r) {
          return '-1' !== e && new o.O(e).minus(new o.O(r)).lt('1.05');
        },
        i = 65e3,
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
          var s = a.z.ENABLED,
            i = e && '0' !== e.scaledATokenBalance,
            c = '0' !== r;
          return (
            o.isIsolated
              ? n
                ? (s = a.z.UNAVAILABLE)
                : t
                  ? i
                    ? (s = e.usageAsCollateralEnabledOnUser ? a.z.ISOLATED_ENABLED : a.z.DISABLED)
                    : c && (s = a.z.UNAVAILABLE_DUE_TO_ISOLATION)
                  : (s = c ? a.z.ISOLATED_DISABLED : a.z.ISOLATED_ENABLED)
              : (s = t
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
    32356: function (e, r, t) {
      t.d(r, {
        n: function () {
          return Z;
        },
      });
      var n = t(17674),
        o = t(57499),
        a = t(67294);
      var s = a.forwardRef(function (e, r) {
          return a.createElement(
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
            a.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M5 15l7-7 7 7',
            })
          );
        }),
        i = t(61782),
        c = t(64343),
        l = t(69417),
        u = t(80822),
        d = t(15861),
        p = t(53219),
        x = t(35294),
        v = t(18972),
        m = t(59334),
        b = t(48885),
        f = t(67720),
        h = t(59499),
        y = t(4730),
        g = t(65361),
        j = t(49212),
        w = t(85893),
        A = ['headerContent'];
      function O(e, r) {
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
      function S(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? O(Object(t), !0).forEach(function (r) {
                (0, h.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : O(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var D,
        T = function (e) {
          var r = e.headerContent,
            t = (0, y.Z)(e, A);
          return (0, w.jsx)(
            j.G,
            S(
              S(
                {
                  event: {
                    eventName: g.vh.TOOL_TIP,
                    eventParams: { tooltip: 'Slippage Tollerance' },
                  },
                },
                t
              ),
              {},
              {
                children: (0, w.jsxs)(w.Fragment, {
                  children: [
                    r &&
                      (0, w.jsxs)(w.Fragment, {
                        children: [r, (0, w.jsx)(f.Z, { sx: { my: 2 } })],
                      }),
                    (0, w.jsx)(o.cC, { id: 'eLh0cL' }),
                  ],
                }),
              }
            )
          );
        },
        B = t(3062);
      function P() {
        return (
          (P = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = arguments[r];
                  for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }
                return e;
              }),
          P.apply(null, arguments)
        );
      }
      var k = function (e) {
          return a.createElement(
            'svg',
            P(
              {
                width: 15,
                height: 12,
                viewBox: '0 0 15 12',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              e
            ),
            D ||
              (D = a.createElement('path', {
                d: 'M14.948 12 8.035 0 1.12 12h13.827ZM3.176 5.625 6.353 0H0l3.176 5.625Zm8.949 4.787h-8.18l4.09-7.1 4.09 7.1Z',
                fill: '#2669F5',
              }))
          );
        },
        Z = function (e) {
          var r = e.setSlippage,
            t = e.selectedSlippage,
            h = e.slippageTooltipHeader,
            y = a.useState(null),
            j = (0, n.Z)(y, 2),
            A = j[0],
            O = j[1],
            S = Boolean(A),
            D = (0, B.Y)(function (e) {
              return e.trackEvent;
            }),
            P = function () {
              O(null);
            };
          return (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(l.Z, {
                variant: 'text',
                onClick: function (e) {
                  O(e.currentTarget);
                },
                size: 'medium',
                endIcon: (0, w.jsx)(T, {
                  headerContent: h,
                  text: (0, w.jsx)(u.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: (0, w.jsx)(o.cC, {
                      id: 'LVt3TI',
                      values: {
                        0: S ? (0, w.jsx)(s, {}) : (0, w.jsx)(i.Z, {}),
                        selectedSlippage: t,
                      },
                      components: {
                        0: (0, w.jsx)(d.Z, { color: 'text.secondary', variant: 'description' }),
                        1: (0, w.jsx)(d.Z, {
                          color: 'text.main',
                          variant: 'secondary14',
                          sx: { px: '4px' },
                        }),
                        2: (0, w.jsx)(p.Z, { sx: { fontSize: '14px !important', mr: '4px' } }),
                      },
                    }),
                  }),
                  variant: 'secondary14',
                }),
                disabled: !1,
                'data-cy': 'slippageButton_'.concat(t),
              }),
              (0, w.jsxs)(x.Z, {
                anchorEl: A,
                open: S,
                onClose: P,
                MenuListProps: { 'aria-labelledby': 'basic-button' },
                keepMounted: !0,
                'data-cy': 'slippageMenu_'.concat(t),
                children: [
                  (0, w.jsx)(u.Z, {
                    sx: { px: '16px', py: '12px' },
                    children: (0, w.jsx)(d.Z, {
                      variant: 'secondary12',
                      color: 'text.secondary',
                      children: (0, w.jsx)(o.cC, { id: 'iMVZk9' }),
                    }),
                  }),
                  ['0.1', '0.5', '1'].map(function (e) {
                    var n = e === t;
                    return (0, w.jsxs)(
                      v.Z,
                      {
                        selected: n,
                        value: e,
                        onClick: function () {
                          r(e), D(g.vh.SET_SLIPPAGE, { amount: e }), P();
                        },
                        children: [
                          (0, w.jsxs)(m.Z, {
                            primaryTypographyProps: { variant: 'subheader1' },
                            children: [e, '%'],
                          }),
                          (0, w.jsx)(b.Z, {
                            children: (0, w.jsx)(p.Z, { children: n && (0, w.jsx)(c.Z, {}) }),
                          }),
                        ],
                      },
                      e
                    );
                  }),
                  (0, w.jsx)(f.Z, {}),
                  (0, w.jsxs)(u.Z, {
                    sx: { px: '16px', py: '12px', display: 'inline-flex', alignItems: 'center' },
                    children: [
                      (0, w.jsxs)(d.Z, {
                        variant: 'secondary12',
                        color: 'text.secondary',
                        sx: { display: 'flex', alignItems: 'center' },
                        children: [
                          (0, w.jsx)(o.cC, { id: 'g2UNkE' }),
                          (0, w.jsx)(p.Z, {
                            sx: {
                              fontSize: '20px',
                              width: '20px',
                              color: '#2669F5',
                              position: 'relative',
                              top: '5px',
                              left: '5px',
                            },
                            children: (0, w.jsx)(k, {}),
                          }),
                        ],
                      }),
                      (0, w.jsx)(d.Z, {
                        variant: 'main12',
                        color: 'text.secondary',
                        children: 'Paraswap',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
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
          return i;
        },
      });
      var n = t(1279),
        o = t(70794),
        a = t(21046),
        s = t(84314);
      function i(e, r) {
        var t,
          i,
          c,
          l,
          u = e.availableLiquidityUSD,
          d = o.O.min(r.availableBorrowsUSD, u),
          p =
            '0' === e.borrowCap
              ? (0, n.hE)(a.Bz.toString())
              : (0, n.hE)(Number(e.borrowCap)).minus((0, n.hE)(e.totalDebt)),
          x = o.O.max(o.O.min(e.formattedAvailableLiquidity, p), 0),
          v = (0, n.hE)(
            (null === r || void 0 === r ? void 0 : r.availableBorrowsMarketReferenceCurrency) || 0
          ).div(e.formattedPriceInMarketReferenceCurrency),
          m = o.O.min(v, x),
          b =
            m.gte(v) ||
            ('0' !== r.totalBorrowsMarketReferenceCurrency && d.lt(u)) ||
            (d.eq(u) && '0' !== e.totalDebt) ||
            (e.borrowCapUSD && '0' !== e.totalDebt && d.gte(u)) ||
            (r.isInIsolationMode &&
              '0' !==
                (null === (t = r.isolatedReserve) || void 0 === t
                  ? void 0
                  : t.isolationModeTotalDebt) &&
              (0, n.hE)(
                (null === (i = r.isolatedReserve) || void 0 === i ? void 0 : i.debtCeiling) || '0'
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
              ? m.multipliedBy('0.99')
              : m;
        return (0, s.$w)(b.toString(10), e.decimals);
      }
      function c(e, r) {
        var t,
          i,
          c,
          l,
          u = (0, n.hE)(
            (null === e || void 0 === e ? void 0 : e.availableBorrowsMarketReferenceCurrency) || 0
          ),
          d =
            '0' === r.borrowCap
              ? (0, n.hE)(a.Bz.toString())
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
                (null === (i = e.isolatedReserve) || void 0 === i ? void 0 : i.debtCeiling) || '0'
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
        return (0, s.$w)(x.toString(10), 18);
      }
      function l(e, r) {
        var t = e.borrowingEnabled,
          n = e.isActive,
          o = e.borrowableInIsolation,
          a = e.eModes,
          s = e.isFrozen,
          i = e.isPaused;
        if (!t || !n || s || i) return !1;
        if (null !== r && void 0 !== r && r.isInEmode) {
          var c = a.find(function (e) {
            return e.id === r.userEmodeCategoryId;
          });
          return !!c && c.borrowingEnabled;
        }
        return !(null !== r && void 0 !== r && r.isInIsolationMode && !o);
      }
    },
    94684: function (e, r, t) {
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
    52758: function (e, r, t) {
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
            d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
          })
        );
      });
      r.Z = o;
    },
  },
]);
