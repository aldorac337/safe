'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2767],
  {
    21815: function (e, t, r) {
      r.r(t),
        r.d(t, {
          AddressZero: function () {
            return n.d;
          },
          EtherSymbol: function () {
            return a;
          },
          HashZero: function () {
            return i.R;
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
      var n = r(9279),
        o = r(21046),
        i = r(57218);
      const a = '\u039e';
    },
    69368: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return D;
        },
      });
      var n = r(63366),
        o = r(87462),
        i = r(67294),
        a = r(63961),
        s = r(94780),
        c = r(2101),
        l = r(21964),
        u = r(82066),
        d = r(85893),
        p = (0, u.Z)(
          (0, d.jsx)('path', {
            d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
          }),
          'CheckBoxOutlineBlank'
        ),
        x = (0, u.Z)(
          (0, d.jsx)('path', {
            d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
          }),
          'CheckBox'
        ),
        h = (0, u.Z)(
          (0, d.jsx)('path', {
            d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z',
          }),
          'IndeterminateCheckBox'
        ),
        b = r(98216),
        f = r(28628),
        m = r(90948),
        v = r(14136),
        y = r(1588),
        j = r(34867);
      function g(e) {
        return (0, j.ZP)('MuiCheckbox', e);
      }
      var O = (0, y.Z)('MuiCheckbox', [
        'root',
        'checked',
        'disabled',
        'indeterminate',
        'colorPrimary',
        'colorSecondary',
        'sizeSmall',
        'sizeMedium',
      ]);
      const w = [
          'checkedIcon',
          'color',
          'icon',
          'indeterminate',
          'indeterminateIcon',
          'inputProps',
          'size',
          'className',
        ],
        A = (0, m.ZP)(l.Z, {
          shouldForwardProp: (e) => (0, v.Z)(e) || 'classes' === e,
          name: 'MuiCheckbox',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: r } = e;
            return [
              t.root,
              r.indeterminate && t.indeterminate,
              t[`size${(0, b.Z)(r.size)}`],
              'default' !== r.color && t[`color${(0, b.Z)(r.color)}`],
            ];
          },
        })(({ theme: e, ownerState: t }) =>
          (0, o.Z)(
            { color: (e.vars || e).palette.text.secondary },
            !t.disableRipple && {
              '&:hover': {
                backgroundColor: e.vars
                  ? `rgba(${'default' === t.color ? e.vars.palette.action.activeChannel : e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : (0, c.Fq)(
                      'default' === t.color ? e.palette.action.active : e.palette[t.color].main,
                      e.palette.action.hoverOpacity
                    ),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            },
            'default' !== t.color && {
              [`&.${O.checked}, &.${O.indeterminate}`]: {
                color: (e.vars || e).palette[t.color].main,
              },
              [`&.${O.disabled}`]: { color: (e.vars || e).palette.action.disabled },
            }
          )
        ),
        C = (0, d.jsx)(x, {}),
        E = (0, d.jsx)(p, {}),
        k = (0, d.jsx)(h, {});
      var D = i.forwardRef(function (e, t) {
        var r, c;
        const l = (0, f.i)({ props: e, name: 'MuiCheckbox' }),
          {
            checkedIcon: u = C,
            color: p = 'primary',
            icon: x = E,
            indeterminate: h = !1,
            indeterminateIcon: m = k,
            inputProps: v,
            size: y = 'medium',
            className: j,
          } = l,
          O = (0, n.Z)(l, w),
          D = h ? m : x,
          T = h ? m : u,
          B = (0, o.Z)({}, l, { color: p, indeterminate: h, size: y }),
          S = ((e) => {
            const { classes: t, indeterminate: r, color: n, size: i } = e,
              a = {
                root: ['root', r && 'indeterminate', `color${(0, b.Z)(n)}`, `size${(0, b.Z)(i)}`],
              },
              c = (0, s.Z)(a, g, t);
            return (0, o.Z)({}, t, c);
          })(B);
        return (0, d.jsx)(
          A,
          (0, o.Z)(
            {
              type: 'checkbox',
              inputProps: (0, o.Z)({ 'data-indeterminate': h }, v),
              icon: i.cloneElement(D, { fontSize: null != (r = D.props.fontSize) ? r : y }),
              checkedIcon: i.cloneElement(T, { fontSize: null != (c = T.props.fontSize) ? c : y }),
              ownerState: B,
              ref: t,
              className: (0, a.Z)(S.root, j),
            },
            O,
            { classes: S }
          )
        );
      });
    },
    90286: function (e, t, r) {
      var n = r(59499),
        o = r(4730),
        i = r(88078),
        a = r(80822),
        s = r(15861),
        c = (r(67294), r(60377)),
        l = r(32867),
        u = r(85893),
        d = ['minVal', 'maxVal', 'percentVariant', 'hyphenVariant'];
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
          h = (0, o.Z)(e, d),
          b = (0, c.HT)(),
          f = b.ghoLoadingData,
          m = b.ghoReserveData;
        if (f) return (0, u.jsx)(i.Z, { width: 70, height: 24 });
        var v = null !== t && void 0 !== t ? t : m.ghoBorrowAPYWithMaxDiscount,
          y = null !== r && void 0 !== r ? r : m.ghoVariableBorrowAPY,
          j = Number((100 * v).toFixed(2)) === Number((100 * y).toFixed(2));
        return (0, u.jsx)(a.Z, {
          sx: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
          children: j
            ? (0, u.jsx)(
                l.B,
                x(
                  {
                    compact: !0,
                    percent: !0,
                    value: v,
                    visibleDecimals: 2,
                    variant: null !== n && void 0 !== n ? n : 'h3',
                    'data-cy': 'apy',
                  },
                  h
                )
              )
            : (0, u.jsxs)(u.Fragment, {
                children: [
                  (0, u.jsx)(
                    l.B,
                    x(
                      {
                        compact: !0,
                        value: 100 * v,
                        visibleDecimals: 2,
                        variant: null !== n && void 0 !== n ? n : 'h3',
                        'data-cy': 'apy-gho-from',
                      },
                      h
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
                        value: y,
                        visibleDecimals: 2,
                        variant: null !== n && void 0 !== n ? n : 'h3',
                        'data-cy': 'apy-gho-till',
                      },
                      h
                    )
                  ),
                ],
              }),
        });
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
    49663: function (e, t, r) {
      r.d(t, {
        B: function () {
          return v;
        },
      });
      var n = r(90116),
        o = r(57499),
        i = r(3439),
        a = r(80822),
        s = r(15861),
        c = r(34386),
        l = r(60377),
        u = r(2127),
        d = r(90286),
        p = r(32867),
        x = r(38577),
        h = r(6308),
        b = r(45640),
        f = r(5276),
        m = r(85893),
        v = function (e) {
          var t = e.value,
            r = e.useApyRange,
            v = e.rangeValues,
            y = void 0 === v ? [0, 0] : v,
            j = e.ghoRoute,
            g = e.stkAaveBalance,
            O = e.userQualifiesForDiscount,
            w = e.onMoreDetailsClick,
            A = e.withTokenIcon,
            C = void 0 !== A && A,
            E = e.forceShowTooltip,
            k = void 0 !== E && E,
            D = e.variant,
            T = void 0 === D ? 'secondary14' : D,
            B = e.color,
            S = void 0 === B ? void 0 : B,
            P = (0, l.HT)().ghoReserveData,
            I = Number(g),
            Z = I >= P.ghoMinDiscountTokenBalanceForDiscount,
            _ = (0, m.jsx)(m.Fragment, {}),
            N = O || k;
          return (
            N &&
              (_ = (0, m.jsx)(a.Z, {
                sx: {
                  py: 4,
                  px: 6,
                  fontSize: '12px',
                  lineHeight: '16px',
                  a: { fontSize: '12px', lineHeight: '16px', fontWeight: 500 },
                },
                children: (0, m.jsxs)(s.Z, {
                  variant: 'subheader2',
                  children: [
                    (0, m.jsx)(o.cC, {
                      id: 'JK9zf1',
                      values: {
                        0: Z
                          ? (0, m.jsxs)(m.Fragment, {
                              children: [
                                (0, m.jsx)(p.B, {
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
                    (0, m.jsx)(x.rU, {
                      onClick: w,
                      href: j,
                      underline: 'always',
                      variant: 'subheader2',
                      children: (0, m.jsx)(o.cC, { id: 'zwWKhA' }),
                    }),
                  ],
                }),
              })),
            (0, m.jsxs)(a.Z, {
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
                  ? (0, m.jsx)(c.Z, {
                      enterTouchDelay: 0,
                      leaveTouchDelay: 0,
                      placement: 'top',
                      title: _,
                      arrow: N,
                      PopperComponent: u.E,
                      children: (0, m.jsxs)(a.Z, {
                        sx: function () {
                          return { display: 'flex', alignItems: 'center' };
                        },
                        children: [
                          C &&
                            (0, m.jsx)(b.T1, {
                              symbol: 'stkAAVE',
                              sx: { height: 14, width: 14, mr: 1 },
                            }),
                          r
                            ? (0, m.jsx)(d.Z, {
                                percentVariant: T,
                                hyphenVariant: T,
                                minVal: Math.min.apply(Math, (0, n.Z)(y)),
                                maxVal: Math.max.apply(Math, (0, n.Z)(y)),
                                color: S,
                              })
                            : (0, m.jsx)(p.B, {
                                value: t,
                                percent: !0,
                                variant: T,
                                color: S,
                                'data-cy': 'apy',
                              }),
                        ],
                      }),
                    })
                  : (0, m.jsx)(h.J, { variant: 'secondary14', color: 'text.secondary' }),
                (0, m.jsx)(f.GV, { rewardedAsset: i.ou.GHO.V_TOKEN }),
              ],
            })
          );
        };
    },
    46817: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return p;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(57499),
        a = r(73592),
        s = r(49212),
        c = r(85893),
        l = ['capType'];
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
      function d(e) {
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
      var p = function (e) {
        var t = e.capType,
          r = (0, o.Z)(e, l),
          n =
            t === a.R.supplyCap
              ? (0, c.jsx)(i.cC, { id: '0wGCWc' })
              : (0, c.jsx)(i.cC, { id: 'cBc+4A' });
        return (0, c.jsx)(s.G, d(d({}, r), {}, { children: n }));
      };
    },
    83877: function (e, t, r) {
      r.d(t, {
        n: function () {
          return p;
        },
        x: function () {
          return d;
        },
      });
      var n = r(59499),
        o = r(57499),
        i = r(65361),
        a = r(38577),
        s = r(49212),
        c = r(85893);
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
      function u(e) {
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
      var d = (0, c.jsx)(o.cC, {
          id: 'jFi7dz',
          components: {
            0: (0, c.jsx)(a.rU, {
              href: 'https://docs.gho.xyz/concepts/how-gho-works/interest-rate-discount-model#interest-rate-model',
              underline: 'always',
            }),
          },
        }),
        p = function (e) {
          return (0, c.jsx)(
            s.G,
            u(
              u({ event: { eventName: i.vh.TOOL_TIP, eventParams: { tooltip: 'GHO APY' } } }, e),
              {},
              { children: d }
            )
          );
        };
    },
    6308: function (e, t, r) {
      r.d(t, {
        J: function () {
          return c;
        },
      });
      var n = r(59499),
        o = r(15861),
        i = (r(67294), r(85893));
      function a(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var c = function (e) {
        return (0, i.jsx)(o.Z, s(s({}, e), {}, { children: '\u2014' }));
      };
    },
    23478: function (e, t, r) {
      r.d(t, {
        W: function () {
          return T;
        },
        l: function () {
          return D;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(57499),
        a = r(33740),
        s = r(2734),
        c = r(80822),
        l = r(15861),
        u = r(66489),
        d = r(73601),
        p = r(93946),
        x = r(94054),
        h = r(10315),
        b = r(18972),
        f = r(59334),
        m = r(69417),
        v = r(67294),
        y = r(57333),
        j = r(3062),
        g = r(46817),
        O = r(32867),
        w = r(45640),
        A = r(85893),
        C = ['onChange'];
      function E(e, t) {
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
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : E(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var D = v.forwardRef(function (e, t) {
          var r = e.onChange,
            n = (0, o.Z)(e, C);
          return (0, A.jsx)(
            y.Z,
            k(
              k({}, n),
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
        T = function (e) {
          var t = e.value,
            r = e.usdValue,
            n = e.symbol,
            o = e.onChange,
            v = e.disabled,
            y = e.disableInput,
            C = e.onSelect,
            E = e.assets,
            T = e.capType,
            B = e.maxValue,
            S = e.isMaxSelected,
            P = e.inputTitle,
            I = e.balanceText,
            Z = e.loading,
            _ = void 0 !== Z && Z,
            N = e.event,
            L = e.selectOptionHeader,
            R = e.selectOption,
            M = e.sx,
            H = void 0 === M ? {} : M,
            W = e.exchangeRateComponent,
            z = (0, s.Z)(),
            U = (0, j.Y)(function (e) {
              return e.trackEvent;
            }),
            F =
              1 === E.length
                ? E[0]
                : E &&
                  E.find(function (e) {
                    return e.symbol === n;
                  });
          return (0, A.jsxs)(
            c.Z,
            k(
              k({}, H),
              {},
              {
                children: [
                  (0, A.jsxs)(c.Z, {
                    sx: { display: 'flex', alignItems: 'center', mb: 1 },
                    children: [
                      (0, A.jsx)(l.Z, {
                        color: 'text.secondary',
                        children: P || (0, A.jsx)(i.cC, { id: 'hehnjM' }),
                      }),
                      T && (0, A.jsx)(g.Y, { capType: T }),
                    ],
                  }),
                  (0, A.jsxs)(c.Z, {
                    sx: function (e) {
                      return {
                        border: '1px solid '.concat(e.palette.divider),
                        borderRadius: '6px',
                        overflow: 'hidden',
                      };
                    },
                    children: [
                      (0, A.jsxs)(c.Z, {
                        sx: { display: 'flex', alignItems: 'center', mb: 0.5, px: 3, py: 2 },
                        children: [
                          _
                            ? (0, A.jsx)(c.Z, {
                                sx: { flex: 1 },
                                children: (0, A.jsx)(u.Z, { color: 'inherit', size: '16px' }),
                              })
                            : (0, A.jsx)(d.ZP, {
                                sx: { flex: 1 },
                                placeholder: '0.00',
                                disabled: v || y,
                                value: t,
                                autoFocus: !0,
                                onChange: function (e) {
                                  o &&
                                    (Number(e.target.value) > Number(B)
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
                                inputComponent: D,
                              }),
                          '' !== t &&
                            !y &&
                            (0, A.jsx)(p.Z, {
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
                              disabled: v,
                              children: (0, A.jsx)(a.Z, { height: 16 }),
                            }),
                          C && 1 !== E.length
                            ? (0, A.jsx)(x.Z, {
                                children: (0, A.jsxs)(h.Z, {
                                  disabled: v,
                                  value: F.symbol,
                                  onChange: function (e) {
                                    var t = E.find(function (t) {
                                      return t.symbol === e.target.value;
                                    });
                                    C && C(t), o && o('');
                                  },
                                  variant: 'outlined',
                                  className: 'AssetInput__select',
                                  'data-cy': 'assetSelect',
                                  MenuProps: {
                                    sx: {
                                      maxHeight: '240px',
                                      '.MuiPaper-root': {
                                        border:
                                          'dark' === z.palette.mode
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
                                      1 === E.length
                                        ? E[0]
                                        : E &&
                                          E.find(function (t) {
                                            return t.symbol === e;
                                          });
                                    return (0, A.jsxs)(c.Z, {
                                      sx: { display: 'flex', alignItems: 'center' },
                                      'data-cy': 'assetsSelectedOption_'.concat(
                                        t.symbol.toUpperCase()
                                      ),
                                      children: [
                                        (0, A.jsx)(w.T1, {
                                          symbol: t.iconSymbol || t.symbol,
                                          aToken: t.aToken,
                                          sx: { mr: 2, ml: 4 },
                                        }),
                                        (0, A.jsx)(l.Z, {
                                          variant: 'main16',
                                          color: 'text.primary',
                                          children: e,
                                        }),
                                      ],
                                    });
                                  },
                                  children: [
                                    L || void 0,
                                    E.map(function (e) {
                                      return (0, A.jsx)(
                                        b.Z,
                                        {
                                          value: e.symbol,
                                          'data-cy': 'assetsSelectOption_'.concat(
                                            e.symbol.toUpperCase()
                                          ),
                                          children: R
                                            ? R(e)
                                            : (0, A.jsxs)(A.Fragment, {
                                                children: [
                                                  (0, A.jsx)(w.T1, {
                                                    aToken: e.aToken,
                                                    symbol: e.iconSymbol || e.symbol,
                                                    sx: { fontSize: '22px', mr: 1 },
                                                  }),
                                                  (0, A.jsx)(f.Z, {
                                                    sx: { mr: 6 },
                                                    children: e.symbol,
                                                  }),
                                                  e.balance &&
                                                    (0, A.jsx)(O.B, {
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
                            : (0, A.jsxs)(c.Z, {
                                sx: { display: 'inline-flex', alignItems: 'center' },
                                children: [
                                  (0, A.jsx)(w.T1, {
                                    aToken: F.aToken,
                                    symbol: F.iconSymbol || F.symbol,
                                    sx: { mr: 2, ml: 4 },
                                  }),
                                  (0, A.jsx)(l.Z, {
                                    variant: 'h3',
                                    sx: { lineHeight: '28px' },
                                    'data-cy': 'inputAsset',
                                    children: n,
                                  }),
                                ],
                              }),
                        ],
                      }),
                      (0, A.jsxs)(c.Z, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          height: '16px',
                          px: 3,
                          py: 2,
                          mb: 1,
                        },
                        children: [
                          _
                            ? (0, A.jsx)(c.Z, { sx: { flex: 1 } })
                            : (0, A.jsx)(O.B, {
                                value: isNaN(Number(r)) ? 0 : Number(r),
                                compact: !0,
                                symbol: 'USD',
                                variant: 'secondary12',
                                color: 'text.muted',
                                symbolsColor: 'text.muted',
                                flexGrow: 1,
                              }),
                          F.balance &&
                            o &&
                            (0, A.jsxs)(A.Fragment, {
                              children: [
                                (0, A.jsxs)(l.Z, {
                                  component: 'div',
                                  variant: 'secondary12',
                                  color: 'text.secondary',
                                  children: [
                                    I && '' !== I ? I : (0, A.jsx)(i.cC, { id: 'fsBGk0' }),
                                    ' ',
                                    (0, A.jsx)(O.B, {
                                      value: F.balance,
                                      compact: !0,
                                      variant: 'secondary12',
                                      color: 'text.secondary',
                                      symbolsColor: 'text.disabled',
                                    }),
                                  ],
                                }),
                                !y &&
                                  (0, A.jsx)(m.Z, {
                                    size: 'small',
                                    sx: { minWidth: 0, ml: '7px', p: 0 },
                                    onClick: function () {
                                      N && U(N.eventName, k({}, N.eventParams)), o('-1');
                                    },
                                    disabled: v || S,
                                    children: (0, A.jsx)(i.cC, { id: 'CK1KXz' }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                      W &&
                        (0, A.jsx)(c.Z, {
                          sx: {
                            background: z.palette.background.surface,
                            borderTop: '1px solid '.concat(z.palette.divider),
                            px: 3,
                            py: 2,
                          },
                          children: W,
                        }),
                    ],
                  }),
                ],
              }
            )
          );
        };
    },
    2767: function (e, t, r) {
      r.r(t),
        r.d(t, {
          BorrowModal: function () {
            return ze;
          },
        });
      var n = r(59499),
        o = r(17674),
        i = r(57499),
        a = r(67294),
        s = r(49679),
        c = r(44949),
        l = r(3062),
        u = r(65361),
        d = r(69951),
        p = r(73886),
        x = r(15629),
        h = r(92519),
        b = r(80854),
        f = r(1279),
        m = r(82403),
        v = r(20854),
        y = r(15861),
        j = r(60377),
        g = r(89771),
        O = r(55875),
        w = r(84314),
        A = r(73592),
        C = r(23478),
        E = r(83063),
        k = r(44880),
        D = r(67944),
        T = r(50029),
        B = r(87794),
        S = r.n(B),
        P = r(75331),
        I = r(30202),
        Z = r(56371),
        _ = r(72005),
        N = r(805),
        L = r(52251),
        R = r(84207),
        M = r(53008),
        H = r(85893);
      function W(e, t) {
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : W(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var U,
        F = a.memo(function (e) {
          var t = e.symbol,
            r = e.poolReserve,
            n = e.amountToBorrow,
            s = e.poolAddress,
            u = e.isWrongNetwork,
            d = e.blocked,
            x = e.sx,
            h = (0, l.Y)(
              (0, p.N)(function (e) {
                return [
                  e.borrow,
                  e.getCreditDelegationApprovedAmount,
                  e.currentMarketData,
                  e.generateApproveDelegation,
                  e.estimateGasLimit,
                  e.addTransaction,
                ];
              })
            ),
            f = (0, o.Z)(h, 6),
            m = f[0],
            v = f[1],
            y = f[2],
            j = f[3],
            g = f[4],
            O = f[5],
            w = (0, c.vR)(),
            A = w.approvalTxState,
            C = w.mainTxState,
            E = w.loadingTxns,
            k = w.setMainTxState,
            D = w.setTxError,
            B = w.setGasLimit,
            W = w.setLoadingTxns,
            U = w.setApprovalTxState,
            F = (0, _.Z)().sendTx,
            G = (0, I.NL)(),
            V = (0, a.useState)(!1),
            Y = V[0],
            Q = V[1],
            q = (0, a.useState)(),
            K = q[0],
            $ = q[1],
            J = (function () {
              var e = (0, T.Z)(
                S().mark(function e() {
                  var t, n, o, i;
                  return S().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !Y || !K)) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (n = j({
                                debtTokenAddress: r.variableDebtTokenAddress,
                                delegatee:
                                  null !== (t = y.addresses.WETH_GATEWAY) && void 0 !== t ? t : '',
                                amount: b.ke,
                              })),
                              U(z(z({}, A), {}, { loading: !0 })),
                              (e.next = 6),
                              g(n)
                            );
                          case 6:
                            return (n = e.sent), (e.next = 9), F(n);
                          case 9:
                            return (o = e.sent), (e.next = 12), o.wait(1);
                          case 12:
                            U({ txHash: o.hash, loading: !1, success: !0 }), ee(!0);
                          case 14:
                            e.next = 21;
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(0)),
                              (i = (0, N.WG)(e.t0, N.aD.GAS_ESTIMATION, !1)),
                              D(i),
                              U({ txHash: void 0, loading: !1 });
                          case 21:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 16]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            X = (function () {
              var e = (0, T.Z)(
                S().mark(function e() {
                  var t, o, i;
                  return S().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              k(z(z({}, C), {}, { loading: !0 })),
                              (t = m({
                                amount: (0, Z.parseUnits)(n, r.decimals).toString(),
                                reserve: s,
                                interestRateMode: P.tk.Variable,
                                debtTokenAddress: r.variableDebtTokenAddress,
                              })),
                              (e.next = 5),
                              g(t)
                            );
                          case 5:
                            return (t = e.sent), (e.next = 8), F(t);
                          case 8:
                            return (o = e.sent), (e.next = 11), o.wait(1);
                          case 11:
                            k({ txHash: o.hash, loading: !1, success: !0 }),
                              O(o.hash, {
                                action: P.UQ.borrow,
                                txState: 'success',
                                asset: s,
                                amount: n,
                                assetName: r.name,
                              }),
                              G.invalidateQueries({ queryKey: L.B.pool }),
                              G.invalidateQueries({ queryKey: L.B.gho }),
                              (e.next = 22);
                            break;
                          case 17:
                            (e.prev = 17),
                              (e.t0 = e.catch(0)),
                              (i = (0, N.WG)(e.t0, N.aD.GAS_ESTIMATION, !1)),
                              D(i),
                              k({ txHash: void 0, loading: !1 });
                          case 22:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 17]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ee = (0, a.useCallback)(
              (function () {
                var e = (0, T.Z)(
                  S().mark(function e(t) {
                    var o, i, a;
                    return S().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (s !== b.hP || (void 0 !== K && !t)) {
                              e.next = 8;
                              break;
                            }
                            return (
                              W(!0),
                              (e.next = 4),
                              v({
                                debtTokenAddress: r.variableDebtTokenAddress,
                                delegatee:
                                  null !== (o = y.addresses.WETH_GATEWAY) && void 0 !== o ? o : '',
                              })
                            );
                          case 4:
                            (i = e.sent), $(i), (e.next = 10);
                            break;
                          case 8:
                            Q(!1), U({});
                          case 10:
                            K &&
                              s === b.hP &&
                              ((a = (0, M.iv)({
                                approvedAmount: K.amount,
                                amount: n,
                                signedAmount: '0',
                              })),
                              Q(a),
                              a && U({})),
                              W(!1);
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [n, K, y.addresses.WETH_GATEWAY, v, s, r.variableDebtTokenAddress, U, W]
            );
          return (
            (0, a.useEffect)(
              function () {
                ee();
              },
              [ee, s]
            ),
            (0, a.useEffect)(
              function () {
                var e = 0;
                (e = Number(b.eB[P.UQ.borrow].recommended)),
                  Y && !A.success && (e += Number(M.Fi)),
                  B(e.toString());
              },
              [Y, A, B]
            ),
            (0, H.jsx)(R.B, {
              blocked: d,
              mainTxState: C,
              approvalTxState: A,
              requiresAmount: !0,
              amount: n,
              isWrongNetwork: u,
              handleAction: X,
              actionText: (0, H.jsx)(i.cC, { id: '39eQRj', values: { symbol: t } }),
              actionInProgressText: (0, H.jsx)(i.cC, { id: 'huQ6Tz', values: { symbol: t } }),
              handleApproval: function () {
                return J();
              },
              requiresApproval: Y,
              preparingTransactions: E,
              sx: x,
            })
          );
        }),
        G = r(80822),
        V = r(69368),
        Y = r(35783),
        Q = function (e) {
          var t = e.riskCheckboxAccepted,
            r = e.onRiskCheckboxChange,
            n = (0, l.Y)(function (e) {
              return e.trackEvent;
            });
          return (0, H.jsxs)(H.Fragment, {
            children: [
              (0, H.jsx)(Y.v, {
                severity: 'error',
                sx: { my: 6 },
                children: (0, H.jsx)(i.cC, { id: '/7ykiW' }),
              }),
              (0, H.jsxs)(G.Z, {
                sx: {
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mx: '24px',
                  mb: '12px',
                },
                children: [
                  (0, H.jsx)(V.Z, {
                    checked: t,
                    onChange: function (e) {
                      n(u.vh.ACCEPT_RISK, {
                        modal: 'Borrow',
                        riskCheckboxAccepted: e.target.checked,
                      }),
                        r();
                    },
                    size: 'small',
                    'data-cy': 'risk-checkbox',
                  }),
                  (0, H.jsx)(y.Z, {
                    variant: 'description',
                    children: (0, H.jsx)(i.cC, { id: '2eBWE6' }),
                  }),
                ],
              }),
            ],
          });
        },
        q = function (e) {
          var t = e.underlyingAsset,
            r = (0, l.Y)(function (e) {
              return e.trackEvent;
            });
          return (0, H.jsx)(Y.v, {
            severity: 'info',
            sx: { my: 6 },
            children: (0, H.jsx)(i.cC, {
              id: 'k3wP3f',
              components: {
                0: (0, H.jsx)('b', {}),
                1: (0, H.jsx)('a', {
                  onClick: function () {
                    r(u.vh.EXTERNAL_LINK, { asset: t, Link: 'Governance Link' });
                  },
                  href: 'https://governance.aave.com/',
                }),
              },
            }),
          });
        };
      !(function (e) {
        (e[(e.STABLE_RATE_NOT_ENABLED = 0)] = 'STABLE_RATE_NOT_ENABLED'),
          (e[(e.NOT_ENOUGH_LIQUIDITY = 1)] = 'NOT_ENOUGH_LIQUIDITY'),
          (e[(e.BORROWING_NOT_AVAILABLE = 2)] = 'BORROWING_NOT_AVAILABLE'),
          (e[(e.NOT_ENOUGH_BORROWED = 3)] = 'NOT_ENOUGH_BORROWED');
      })(U || (U = {}));
      var K = function (e) {
          var t = e.underlyingAsset,
            r = e.isWrongNetwork,
            n = e.poolReserve,
            o = e.unwrap,
            s = e.setUnwrap,
            d = e.symbol,
            p = e.user,
            x = (0, c.vR)(),
            h = x.mainTxState,
            T = x.gasLimit,
            B = x.txError,
            S = (0, j.HT)().marketReferencePriceInUsd,
            P = (0, l.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            I = (0, g.ov)().borrowCap,
            Z = (0, a.useState)(''),
            _ = Z[0],
            N = Z[1],
            L = (0, a.useState)(!1),
            R = L[0],
            M = L[1],
            W = (0, O.nG)(n, p),
            z = _ === W,
            G = (0, f.hE)(_)
              .multipliedBy(n.formattedPriceInMarketReferenceCurrency)
              .multipliedBy(S)
              .shiftedBy(-m.$3),
            V = (0, v.L1)({
              collateralBalanceMarketReferenceCurrency: p.totalCollateralUSD,
              borrowBalanceMarketReferenceCurrency: (0, f.hE)(p.totalBorrowsUSD).plus(G),
              currentLiquidationThreshold: p.currentLiquidationThreshold,
            }),
            Y = V.toNumber() < 1.5 && '-1' !== V.toString(),
            K = (0, f.hE)(_).multipliedBy(n.priceInUSD),
            $ = void 0;
          (0, f.hE)(_).gt(n.formattedAvailableLiquidity)
            ? ($ = U.NOT_ENOUGH_LIQUIDITY)
            : n.borrowingEnabled || ($ = U.BORROWING_NOT_AVAILABLE);
          var J = { address: t, symbol: n.iconSymbol, decimals: n.decimals },
            X = o && n.isWrappedBaseAsset ? P.baseAssetSymbol : n.iconSymbol;
          return h.success
            ? (0, H.jsx)(k.R, {
                action: (0, H.jsx)(i.cC, { id: 'fMJQZK' }),
                amount: _,
                symbol: X,
                addToken: o && n.isWrappedBaseAsset ? void 0 : J,
              })
            : (0, H.jsxs)(H.Fragment, {
                children: [
                  I.determineWarningDisplay({ borrowCap: I }),
                  (0, H.jsx)(C.W, {
                    value: _,
                    onChange: function (e) {
                      if ('-1' === e) N(W);
                      else {
                        var t = (0, w.$w)(e, n.decimals);
                        N(t);
                      }
                    },
                    usdValue: K.toString(10),
                    assets: [{ balance: W, symbol: d, iconSymbol: X }],
                    symbol: d,
                    capType: A.R.borrowCap,
                    isMaxSelected: z,
                    maxValue: W,
                    balanceText: (0, H.jsx)(i.cC, { id: 'csDS2L' }),
                    event: {
                      eventName: u.vh.MAX_INPUT_SELECTION,
                      eventParams: { asset: n.underlyingAsset, assetName: n.name },
                    },
                  }),
                  void 0 !== $ &&
                    (0, H.jsx)(y.Z, {
                      variant: 'helperText',
                      color: 'error.main',
                      children: (function () {
                        switch ($) {
                          case U.BORROWING_NOT_AVAILABLE:
                            return (0, H.jsx)(i.cC, { id: '9CDK3/', values: { 0: n.symbol } });
                          case U.NOT_ENOUGH_LIQUIDITY:
                            return (0, H.jsx)(H.Fragment, {
                              children: (0, H.jsx)(i.cC, { id: 'ymNY32', values: { 0: n.symbol } }),
                            });
                          default:
                            return null;
                        }
                      })(),
                    }),
                  n.isWrappedBaseAsset &&
                    (0, H.jsx)(D.Pu, {
                      unwrapped: o,
                      setUnWrapped: s,
                      label: (0, H.jsx)(y.Z, {
                        children: 'Unwrap '
                          .concat(n.symbol, ' (to borrow ')
                          .concat(P.baseAssetSymbol, ')'),
                      }),
                    }),
                  (0, H.jsxs)(D.m6, {
                    gasLimit: T,
                    children: [
                      (0, H.jsx)(D.aE, { incentives: n.vIncentivesData, symbol: n.symbol }),
                      (0, H.jsx)(D.jz, {
                        visibleHfChange: !!_,
                        healthFactor: p.healthFactor,
                        futureHealthFactor: V.toString(10),
                      }),
                    ],
                  }),
                  B && (0, H.jsx)(E.Q, { txError: B }),
                  Y &&
                    (0, H.jsx)(Q, {
                      riskCheckboxAccepted: R,
                      onRiskCheckboxChange: function () {
                        M(!R);
                      },
                    }),
                  (0, H.jsx)(q, { underlyingAsset: t }),
                  (0, H.jsx)(F, {
                    poolReserve: n,
                    amountToBorrow: _,
                    poolAddress: o && n.isWrappedBaseAsset ? b.hP : n.underlyingAsset,
                    isWrongNetwork: r,
                    symbol: d,
                    blocked: void 0 !== $ || (Y && !R),
                    sx: Y ? { mt: 0 } : {},
                  }),
                ],
              });
        },
        $ = r(80227),
        J = r(53219),
        X = r(49663),
        ee = r(83877),
        te = r(32867),
        re = r(38577),
        ne = r(6308),
        oe = r(20986),
        ie = r(97595),
        ae = r(30447),
        se = r(56365),
        ce = r(58057),
        le = r(82066),
        ue = (0, le.Z)(
          (0, H.jsx)('path', {
            d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z',
          }),
          'ContentCopyOutlined'
        ),
        de = (0, le.Z)(
          (0, H.jsx)('path', { d: 'M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z' }),
          'Download'
        ),
        pe = r(64232),
        xe = r(90948),
        he = r(69417),
        be = r(93946),
        fe = r(2734),
        me = r(61730),
        ve = r(88078),
        ye = r(5152),
        je = r.n(ye),
        ge = r(4730),
        Oe = ['sx'];
      function we(e, t) {
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
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? we(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : we(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Ce = function (e) {
        var t = e.sx,
          r = (0, ge.Z)(e, Oe);
        return (0, H.jsxs)(
          J.Z,
          Ae(
            Ae(
              {
                sx: Ae({}, t),
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-label': 'Hey',
                viewBox: '0 0 16 16',
              },
              r
            ),
            {},
            {
              children: [
                (0, H.jsxs)('g', {
                  clipPath: 'url(#clip0_4560_45564)',
                  children: [
                    (0, H.jsx)('path', {
                      d: 'M6.91944 7.59576C6.72478 7.92306 3.68827 7.97806 2.0317 7.04968C0.375136 6.12129 1.17996 3.28268 2.86021 2.53729C4.54046 1.79191 7.1141 7.2685 6.91944 7.59576Z',
                    }),
                    (0, H.jsx)('path', {
                      d: 'M6.89648 8.73193C7.09114 9.05923 5.622 11.6393 3.96542 12.5677C2.30885 13.4961 0.178713 11.4002 0.353823 9.61506C0.528933 7.82987 6.70182 8.40462 6.89648 8.73193Z',
                    }),
                    (0, H.jsx)('path', {
                      d: 'M7.89858 9.31921C8.28794 9.31921 9.85521 11.8443 9.85521 13.7011C9.85521 15.5578 6.92026 16.3006 5.41513 15.2608C3.90999 14.221 7.50926 9.31917 7.89858 9.31921Z',
                    }),
                    (0, H.jsx)('path', {
                      d: 'M8.92364 8.77067C9.1183 8.44332 12.1548 8.38837 13.8114 9.31675C15.4679 10.2451 14.6631 13.0837 12.9829 13.8291C11.3026 14.5745 8.72898 9.09793 8.92364 8.77067Z',
                    }),
                    (0, H.jsx)('path', {
                      d: 'M8.94665 7.63436C8.75199 7.30706 10.2211 4.72699 11.8777 3.79858C13.5343 2.8702 15.6644 4.96609 15.4893 6.75123C15.3142 8.53642 9.14131 7.96167 8.94665 7.63436Z',
                    }),
                    (0, H.jsx)('path', {
                      d: 'M7.94455 7.04693C7.55519 7.04693 5.98792 4.52182 5.98792 2.66506C5.98792 0.80829 8.92286 0.0655506 10.428 1.10534C11.9332 2.14514 8.33386 7.04697 7.94455 7.04693Z',
                    }),
                  ],
                }),
                (0, H.jsx)('defs', {
                  children: (0, H.jsx)('clipPath', {
                    id: 'clip0_4560_45564',
                    children: (0, H.jsx)('rect', {
                      width: '15.157',
                      height: '15.157',
                      transform: 'translate(0.343079 0.604614)',
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
      function Ee(e, t) {
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
      function ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ee(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ee(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var De,
        Te = je()(function () {
          return r.e(6787).then(r.bind(r, 66787));
        }),
        Be = (0, xe.ZP)(he.Z)(function () {
          return {
            minWidth: 139,
            borderRadius: 32,
            background:
              'linear-gradient(252.63deg, rgba(255, 255, 255, 0.2) 33.91%, rgba(255, 255, 255, 0.08) 73.97%), linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))',
            transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
            height: 48,
            '&:hover': {
              background:
                'linear-gradient(252.63deg, rgba(255, 255, 255, 0.2) 33.91%, rgba(255, 255, 255, 0.08) 73.97%), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
              transform: 'translateY(-3px)',
              border: '1px solid #FFFFFF20',
            },
            '&:disabled': { border: '1px solid #FFFFFF20' },
            backdropFilter: 'blur(5px)',
            border: '1px solid #FFFFFF20',
          };
        }),
        Se = (0, xe.ZP)(be.Z)(function () {
          return {
            backgroundColor: 'white',
            width: 48,
            height: 48,
            transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
            '&:hover': {
              backgroundColor: 'white',
              transform: 'translateY(-3px)',
              boxShadow: '0px 4px 4px 0px #00000040',
            },
          };
        }),
        Pe = (0, xe.ZP)(G.Z)(function () {
          return {
            position: 'relative',
            overflow: 'hidden',
            '&:hover': { '.image-bar-gho': { display: 'flex', bottom: 30 } },
          };
        }),
        Ie = (0, xe.ZP)(G.Z)(function () {
          return {
            transition: 'bottom 0.3s',
            position: 'absolute',
            bottom: -50,
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            paddingLeft: 16,
            paddingRight: 16,
            '@media (hover: none)': { bottom: 30 },
          };
        }),
        Ze = function (e) {
          return (0, H.jsx)(J.Z, ke(ke({}, e), {}, { children: (0, H.jsx)(se.Z, {}) }));
        },
        _e = function (e) {
          var t = e.txHash,
            r = e.action,
            o = e.amount,
            s = e.symbol,
            d = (0, a.useState)(),
            p = d[0],
            x = d[1],
            h = (0, a.useState)(),
            b = h[0],
            f = h[1],
            m = (0, a.useState)(!1),
            v = m[0],
            j = m[1],
            g = (0, c.vR)().mainTxState,
            O = (0, l.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            w = (0, a.useRef)(null),
            A = (0, fe.Z)(),
            C = (0, me.Z)(A.breakpoints.down('xsm')),
            E = (0, l.Y)(function (e) {
              return e.trackEvent;
            }),
            k = (0, te.J)({ value: o, visibleDecimals: 2, roundDown: !0 }),
            D = ''.concat(k.prefix).concat(k.postfix),
            T = 'undefined' !== typeof ClipboardItem;
          return (0, H.jsx)(H.Fragment, {
            children: (0, H.jsxs)(G.Z, {
              sx: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              },
              children: [
                (0, H.jsx)(G.Z, {
                  sx: {
                    width: '48px',
                    height: '48px',
                    bgcolor: 'success.200',
                    borderRadius: '50%',
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  children: (0, H.jsx)(J.Z, {
                    sx: { color: 'success.main', fontSize: '32px' },
                    children: (0, H.jsx)(ce.Z, {}),
                  }),
                }),
                (0, H.jsx)(y.Z, {
                  sx: { mt: 4 },
                  variant: 'h2',
                  children: (0, H.jsx)(i.cC, { id: 'IN8luu' }),
                }),
                (0, H.jsx)(G.Z, {
                  sx: {
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  },
                  children:
                    r &&
                    o &&
                    s &&
                    (0, H.jsx)(y.Z, {
                      children: (0, H.jsx)(i.cC, {
                        id: 'wAOL+X',
                        values: { action: r, symbol: s },
                        components: {
                          0: (0, H.jsx)(te.B, {
                            value: Number(o),
                            compact: !0,
                            variant: 'secondary14',
                          }),
                        },
                      }),
                    }),
                }),
                (0, H.jsx)(he.Z, {
                  sx: { mt: 4 },
                  variant: 'outlined',
                  size: 'small',
                  endIcon: (0, H.jsx)(Ze, { style: { fontSize: 12 } }),
                  onClick: function () {
                    return E(u.Sd.GHO_BORROW_VIEW_TX_DETAILS);
                  },
                  href: O.explorerLinkBuilder({ tx: t || g.txHash }),
                  target: '_blank',
                  children: (0, H.jsx)(y.Z, {
                    variant: 'buttonS',
                    children: (0, H.jsx)(i.cC, { id: 'W1SSoD' }),
                  }),
                }),
                (0, H.jsx)(y.Z, {
                  sx: { mt: 6, mb: 4 },
                  variant: 'h2',
                  children: (0, H.jsx)(i.cC, { id: 'HrnC47' }),
                }),
                (0, H.jsx)('canvas', {
                  style: { display: 'none' },
                  width: 1169,
                  height: 900,
                  ref: w,
                }),
                p && b
                  ? (0, H.jsxs)(Pe, {
                      children: [
                        (0, H.jsx)('img', {
                          src: p,
                          alt: 'minted gho',
                          style: { maxWidth: '100%', borderRadius: '10px' },
                        }),
                        (0, H.jsxs)(Ie, {
                          className: 'image-bar-gho',
                          children: [
                            T
                              ? (0, H.jsx)(Be, {
                                  disabled: v,
                                  onClick: function () {
                                    b &&
                                      navigator.clipboard
                                        .write([new ClipboardItem((0, n.Z)({}, b.type, b))])
                                        .then(function () {
                                          E(u.Sd.GHO_COPY_IMAGE),
                                            j(!0),
                                            setTimeout(function () {
                                              j(!1);
                                            }, 5e3);
                                        })
                                        .catch(function () {
                                          E(u.Sd.GHO_FAIL_COPY_IMAGE);
                                        });
                                  },
                                  sx: { display: 'flex' },
                                  variant: 'outlined',
                                  size: 'large',
                                  startIcon: v
                                    ? (0, H.jsx)(J.Z, {
                                        sx: { color: 'white', fontSize: 16 },
                                        children: (0, H.jsx)(ce.Z, {}),
                                      })
                                    : (0, H.jsx)(ue, { style: { fontSize: 16, fill: 'white' } }),
                                  children: (0, H.jsx)(y.Z, {
                                    variant: 'buttonS',
                                    color: 'white',
                                    children: v
                                      ? (0, H.jsx)(i.cC, { id: 'EBL9Gz' })
                                      : (0, H.jsx)(i.cC, { id: 'uwAUvj' }),
                                  }),
                                })
                              : (0, H.jsx)(Be, {
                                  download: 'minted_gho.png',
                                  href: URL.createObjectURL(b),
                                  onClick: function () {
                                    return E(u.Sd.GHO_DOWNLOAD_IMAGE);
                                  },
                                  sx: { display: 'flex' },
                                  variant: 'outlined',
                                  size: 'large',
                                  startIcon: v
                                    ? (0, H.jsx)(J.Z, {
                                        sx: { color: 'white', fontSize: 16 },
                                        children: (0, H.jsx)(ce.Z, {}),
                                      })
                                    : (0, H.jsx)(de, { style: { fontSize: 16, fill: 'white' } }),
                                  children: (0, H.jsx)(y.Z, {
                                    variant: 'buttonS',
                                    color: 'white',
                                    children: (0, H.jsx)(i.cC, { id: 'mzI/c+' }),
                                  }),
                                }),
                            (0, H.jsx)(Se, {
                              target: '_blank',
                              href: 'https://hey.xyz/?url='.concat(
                                window.location.href,
                                '&text=',
                                'I just minted '.concat(D, ' GHO'),
                                '&hashtags=Aave&preview=true'
                              ),
                              size: 'small',
                              sx: { ml: 'auto' },
                              onClick: function () {
                                return E(u.Sd.GHO_SHARE_HEY);
                              },
                              children: (0, H.jsx)(Ce, {
                                sx: { fill: '#845EEE' },
                                fontSize: 'small',
                              }),
                            }),
                            (0, H.jsx)(Se, {
                              target: '_blank',
                              href: 'https://twitter.com/intent/tweet?text=I Just minted '.concat(
                                D,
                                ' GHO'
                              ),
                              sx: { ml: 2 },
                              onClick: function () {
                                return E(u.Sd.GHO_SHARE_TWITTER);
                              },
                              children: (0, H.jsx)(pe.Z, {
                                fontSize: 'small',
                                sx: { fill: '#33CEFF' },
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, H.jsxs)(H.Fragment, {
                      children: [
                        (0, H.jsx)(ve.Z, {
                          height: C ? 240 : 286,
                          sx: { borderRadius: 4, width: '100%' },
                        }),
                        (0, H.jsx)('div', {
                          style: { visibility: 'hidden', position: 'absolute' },
                          children: (0, H.jsx)(Te, {
                            onSuccessEditing: function (e) {
                              if (w.current) {
                                var t = w.current.getContext('2d');
                                if (t) {
                                  var r = new Image();
                                  (r.onload = function () {
                                    document.fonts.ready.then(function () {
                                      var e, n;
                                      t.drawImage(r, 0, 0),
                                        x(
                                          null === (e = w.current) || void 0 === e
                                            ? void 0
                                            : e.toDataURL('png', 1)
                                        ),
                                        null === (n = w.current) ||
                                          void 0 === n ||
                                          n.toBlob(function (e) {
                                            return f(e);
                                          }, 'png');
                                    });
                                  }),
                                    (r.src = 'data:image/svg+xml;utf8,'.concat(
                                      encodeURIComponent(e.outerHTML)
                                    ));
                                }
                              }
                            },
                            text: D,
                          }),
                        }),
                      ],
                    }),
              ],
            }),
          });
        };
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
      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ne(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ne(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      !(function (e) {
        (e[(e.STABLE_RATE_NOT_ENABLED = 0)] = 'STABLE_RATE_NOT_ENABLED'),
          (e[(e.NOT_ENOUGH_LIQUIDITY = 1)] = 'NOT_ENOUGH_LIQUIDITY'),
          (e[(e.BORROWING_NOT_AVAILABLE = 2)] = 'BORROWING_NOT_AVAILABLE'),
          (e[(e.NOT_ENOUGH_BORROWED = 3)] = 'NOT_ENOUGH_BORROWED');
      })(De || (De = {}));
      var Re = function (e) {
          var t = e.underlyingAsset,
            r = e.isWrongNetwork,
            n = e.poolReserve,
            o = e.symbol,
            s = e.user,
            u = (0, c.vR)(),
            p = u.mainTxState,
            x = u.gasLimit,
            h = u.txError,
            b = u.close,
            k = (0, l.Y)(function (e) {
              return e.currentMarketData;
            }),
            T = (0, l.Y)(function (e) {
              return e.currentMarket;
            }),
            B = (0, j.HT)(),
            S = B.marketReferencePriceInUsd,
            P = B.ghoReserveData,
            I = B.ghoUserData,
            Z = B.ghoLoadingData,
            _ = (0, ae.l)(k).data,
            N = (0, ie.b)(k).data,
            L = (0, g.ov)().borrowCap,
            R = (0, a.useState)(''),
            M = R[0],
            W = R[1],
            z = (0, a.useState)(!1),
            U = z[0],
            V = z[1],
            Y = I.userGhoBorrowBalance > 0,
            K = I.userDiscountTokenBalance,
            $ = !(!_ || !N) && (0, d.k9)(N, _, M),
            J = (0, O.BC)(s, n),
            X = M === (J = Math.min(Number(J), P.aaveFacilitatorRemainingCapacity).toFixed(10)),
            re = (0, f.hE)(M)
              .multipliedBy(n.formattedPriceInMarketReferenceCurrency)
              .multipliedBy(S)
              .shiftedBy(-m.$3),
            ne = (0, v.L1)({
              collateralBalanceMarketReferenceCurrency: s.totalCollateralUSD,
              borrowBalanceMarketReferenceCurrency: (0, f.hE)(s.totalBorrowsUSD).plus(re),
              currentLiquidationThreshold: s.currentLiquidationThreshold,
            }),
            se = ne.toNumber() < 1.5 && '-1' !== ne.toString(),
            ce = (0, f.hE)(M).multipliedBy(n.priceInUSD),
            le =
              I.userGhoBorrowBalance >= P.ghoMinDebtTokenBalanceForDiscount
                ? I.userGhoAvailableToBorrowAtDiscount
                : 0,
            ue = (0, d.li)(
              P.ghoVariableBorrowAPY,
              I.userGhoBorrowBalance,
              le,
              P.ghoBorrowAPYWithMaxDiscount
            ),
            de =
              I.userGhoBorrowBalance + Number(M) >= P.ghoMinDebtTokenBalanceForDiscount
                ? I.userGhoAvailableToBorrowAtDiscount
                : 0,
            pe = (0, d.li)(
              P.ghoVariableBorrowAPY,
              I.userGhoBorrowBalance + Number(M),
              de,
              P.ghoBorrowAPYWithMaxDiscount
            ),
            xe = void 0;
          n.borrowingEnabled || (xe = De.BORROWING_NOT_AVAILABLE);
          var he = function () {
              return xe === De.BORROWING_NOT_AVAILABLE
                ? (0, H.jsx)(i.cC, { id: '9CDK3/', values: { 0: n.symbol } })
                : (0, H.jsx)(H.Fragment, {});
            },
            be = n.iconSymbol;
          return p.success
            ? (0, H.jsx)(_e, { action: (0, H.jsx)(i.cC, { id: 'fMJQZK' }), amount: M, symbol: be })
            : (0, H.jsxs)(H.Fragment, {
                children: [
                  L.determineWarningDisplay({ borrowCap: L }),
                  (0, H.jsx)(C.W, {
                    value: M,
                    onChange: function (e) {
                      if ('-1' === e) W(J);
                      else {
                        var t = (0, w.$w)(e, n.decimals);
                        W(t);
                      }
                    },
                    usdValue: ce.toString(10),
                    assets: [{ balance: J, symbol: o, iconSymbol: be }],
                    symbol: o,
                    capType: A.R.borrowCap,
                    isMaxSelected: X,
                    maxValue: J,
                    balanceText: (0, H.jsx)(i.cC, { id: 'csDS2L' }),
                  }),
                  void 0 !== xe &&
                    (0, H.jsx)(y.Z, {
                      variant: 'helperText',
                      color: 'error.main',
                      children: (0, H.jsx)(he, {}),
                    }),
                  (0, H.jsxs)(D.m6, {
                    gasLimit: x,
                    children: [
                      (0, H.jsx)(D.jz, {
                        visibleHfChange: !!M,
                        healthFactor: s.healthFactor,
                        futureHealthFactor: ne.toString(10),
                      }),
                      (0, H.jsx)(oe.X, {
                        caption: (0, H.jsx)(G.Z, {
                          children: (0, H.jsx)(ee.n, {
                            text: (0, H.jsx)(i.cC, { id: '6yAAbq' }),
                            variant: 'subheader2',
                            color: 'text.secondary',
                          }),
                        }),
                        captionVariant: 'description',
                        mb: 4,
                        align: 'flex-start',
                        children: (0, H.jsx)(G.Z, {
                          sx: { textAlign: 'right' },
                          children: (0, H.jsx)(G.Z, {
                            sx: {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-end',
                            },
                            children: (0, H.jsx)(Me, {
                              ghoLoadingData: Z,
                              hasGhoBorrowPositions: Y,
                              borrowAmount: M,
                              discountAvailable: $,
                              userDiscountTokenBalance: I.userDiscountTokenBalance,
                              underlyingAsset: t,
                              customMarket: T,
                              currentBorrowAPY: ue,
                              futureBorrowAPY: pe,
                              onDetailsClick: function () {
                                return b();
                              },
                            }),
                          }),
                        }),
                      }),
                      $ &&
                        (0, H.jsx)(y.Z, {
                          variant: 'helperText',
                          color: 'text.secondary',
                          children: (0, H.jsx)(i.cC, {
                            id: 'ntkAoE',
                            components: {
                              0: (0, H.jsx)(te.B, {
                                variant: 'helperText',
                                color: 'text.secondary',
                                visibleDecimals: 2,
                                value: K,
                              }),
                            },
                          }),
                        }),
                    ],
                  }),
                  h && (0, H.jsx)(E.Q, { txError: h }),
                  se &&
                    (0, H.jsx)(Q, {
                      riskCheckboxAccepted: U,
                      onRiskCheckboxChange: function () {
                        V(!U);
                      },
                    }),
                  (0, H.jsx)(q, { underlyingAsset: t }),
                  (0, H.jsx)(F, {
                    poolReserve: n,
                    amountToBorrow: M,
                    poolAddress: n.underlyingAsset,
                    isWrongNetwork: r,
                    symbol: o,
                    blocked: void 0 !== xe || (se && !U),
                    sx: se ? { mt: 0 } : {},
                  }),
                ],
              });
        },
        Me = function (e) {
          var t = e.ghoLoadingData,
            r = e.hasGhoBorrowPositions,
            n = e.borrowAmount,
            o = e.discountAvailable,
            i = e.userDiscountTokenBalance,
            a = e.underlyingAsset,
            s = e.customMarket,
            c = e.currentBorrowAPY,
            l = e.futureBorrowAPY,
            u = e.onDetailsClick;
          if (t || (!r && '' === n && o))
            return (0, H.jsx)(ne.J, { variant: 'secondary14', color: 'text.secondary' });
          var d = {
            stkAaveBalance: i || 0,
            ghoRoute: re.Z6.reserveOverview(a, s) + '/#discount',
            userQualifiesForDiscount: o,
            'data-cy': 'apyType',
          };
          return r || '' === n
            ? r && '' === n
              ? (0, H.jsx)(X.B, Le({ withTokenIcon: o, value: c, onMoreDetailsClick: u }, d))
              : o
                ? o
                  ? (0, H.jsxs)(H.Fragment, {
                      children: [
                        (0, H.jsx)(
                          X.B,
                          Le({ withTokenIcon: !0, value: c, onMoreDetailsClick: u }, d)
                        ),
                        !!n &&
                          (0, H.jsxs)(H.Fragment, {
                            children: [
                              r &&
                                (0, H.jsx)(J.Z, {
                                  color: 'primary',
                                  sx: { fontSize: '14px', mx: 1 },
                                  children: (0, H.jsx)($.Z, {}),
                                }),
                              (0, H.jsx)(X.B, Le({ value: t ? -1 : l }, d)),
                            ],
                          }),
                      ],
                    })
                  : (0, H.jsx)(ne.J, { variant: 'secondary14', color: 'text.secondary' })
                : (0, H.jsx)(X.B, Le({ value: c, onMoreDetailsClick: u }, d))
            : (0, H.jsx)(X.B, Le({ withTokenIcon: o, value: l }, d));
        };
      function He(e, t) {
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
      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? He(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : He(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var ze = function () {
        var e = (0, c.vR)(),
          t = e.type,
          r = e.close,
          n = e.args,
          b = (0, a.useState)(!0),
          f = b[0],
          m = b[1],
          v = (0, l.Y)(
            (0, p.N)(function (e) {
              return [e.trackEvent, e.currentMarket];
            })
          ),
          y = (0, o.Z)(v, 2),
          j = y[0],
          g = y[1],
          O = function (e) {
            j(u.vh.OPEN_MODAL, {
              modal: 'Unwrap Asset',
              asset: n.underlyingAsset,
              assetWrapped: e,
            }),
              m(e);
          };
        return (0, H.jsx)(x.P, {
          open: t === c.w8.Borrow,
          setOpen: r,
          children: (0, H.jsx)(h.A, {
            action: 'borrow',
            title: (0, H.jsx)(i.cC, { id: 'T6uYU2' }),
            underlyingAsset: n.underlyingAsset,
            keepWrappedSymbol: !f,
            children: function (e) {
              return (0, H.jsx)(s.X, {
                children: function (t) {
                  return (0, d.F$)({ symbol: e.symbol, currentMarket: g })
                    ? (0, H.jsx)(Re, We(We({}, e), {}, { user: t }))
                    : (0, H.jsx)(K, We(We({}, e), {}, { user: t, unwrap: f, setUnwrap: O }));
                },
              });
            },
          }),
        });
      };
    },
    92519: function (e, t, r) {
      r.d(t, {
        A: function () {
          return m;
        },
      });
      var n = r(80854),
        o = (r(67294), r(60377)),
        i = r(50060),
        a = r(89771),
        s = r(53097),
        c = r(44949),
        l = r(72005),
        u = r(3062),
        d = r(65361),
        p = r(79850),
        x = r(37096),
        h = r(19408),
        b = r(40429),
        f = r(85893),
        m = function (e) {
          var t,
            r,
            m = e.hideTitleSymbol,
            v = e.underlyingAsset,
            y = e.children,
            j = e.requiredChainId,
            g = e.title,
            O = e.keepWrappedSymbol,
            w = (0, l.Z)().readOnlyModeAddress,
            A = (0, u.Y)(function (e) {
              return e.currentMarketData;
            }),
            C = (0, u.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            E = (0, i.P)(A).walletBalances,
            k = (0, o.HT)(),
            D = k.user,
            T = k.reserves,
            B = (0, c.vR)(),
            S = B.txError,
            P = B.mainTxState,
            I = (0, s.Q)(j),
            Z = I.isWrongNetwork,
            _ = I.requiredChainId;
          if (S && S.blocking) return (0, f.jsx)(b.D, { txError: S });
          var N = T.find(function (e) {
              return v.toLowerCase() === n.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : v === e.underlyingAsset;
            }),
            L =
              null === D || void 0 === D
                ? void 0
                : D.userReservesData.find(function (e) {
                    return v.toLowerCase() === n.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : v === e.underlyingAsset;
                  }),
            R = N.isWrappedBaseAsset && !O ? C.baseAssetSymbol : N.symbol;
          return (0, f.jsxs)(a.hv, {
            asset: N,
            children: [
              !P.success && (0, f.jsx)(x.E, { title: g, symbol: m ? void 0 : R }),
              Z &&
                !w &&
                (0, f.jsx)(h.I, {
                  networkName: (0, p.Mo)(_).name,
                  chainId: _,
                  event: { eventName: d.vh.SWITCH_NETWORK, eventParams: { asset: v } },
                }),
              y({
                isWrongNetwork: Z,
                nativeBalance:
                  (null === (t = E[n.hP.toLowerCase()]) || void 0 === t ? void 0 : t.amount) || '0',
                tokenBalance:
                  (null === (r = E[N.underlyingAsset.toLowerCase()]) || void 0 === r
                    ? void 0
                    : r.amount) || '0',
                poolReserve: N,
                symbol: R,
                underlyingAsset: v,
                userReserve: L,
              }),
            ],
          });
        };
    },
    53008: function (e, t, r) {
      r.d(t, {
        Fi: function () {
          return c;
        },
        NI: function () {
          return n;
        },
        gK: function () {
          return a;
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
        o = r(70794),
        i = r(56845);
      !(function (e) {
        (e[(e.SUPPLY_CAP_REACHED = 0)] = 'SUPPLY_CAP_REACHED'),
          (e[(e.NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH = 1)] = 'NOT_ENOUGH_COLLATERAL_TO_REPAY_WITH'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED'),
          (e[(e.FLASH_LOAN_NOT_AVAILABLE = 3)] = 'FLASH_LOAN_NOT_AVAILABLE');
      })(n || (n = {}));
      var a = function (e, t) {
          return '-1' !== e && new o.O(e).minus(new o.O(t)).lt('1.05');
        },
        s = 65e3,
        c = 55e3,
        l = function (e) {
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
          var o = e.reserve;
          if (!o.usageAsCollateralEnabled) return i.z.UNAVAILABLE;
          var a = i.z.ENABLED,
            s = e && '0' !== e.scaledATokenBalance,
            c = '0' !== t;
          return (
            o.isIsolated
              ? n
                ? (a = i.z.UNAVAILABLE)
                : r
                  ? s
                    ? (a = e.usageAsCollateralEnabledOnUser ? i.z.ISOLATED_ENABLED : i.z.DISABLED)
                    : c && (a = i.z.UNAVAILABLE_DUE_TO_ISOLATION)
                  : (a = c ? i.z.ISOLATED_DISABLED : i.z.ISOLATED_ENABLED)
              : (a = r
                  ? i.z.UNAVAILABLE_DUE_TO_ISOLATION
                  : s
                    ? e.usageAsCollateralEnabledOnUser
                      ? i.z.ENABLED
                      : i.z.DISABLED
                    : i.z.ENABLED),
            a
          );
        };
    },
    53097: function (e, t, r) {
      r.d(t, {
        Q: function () {
          return i;
        },
      });
      var n = r(72005),
        o = r(3062);
      function i(e) {
        var t = (0, o.Y)(function (e) {
            return e.currentChainId;
          }),
          r = e || t;
        return { isWrongNetwork: (0, n.Z)().chainId !== r, requiredChainId: r };
      }
    },
    55875: function (e, t, r) {
      r.d(t, {
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
      var n = r(1279),
        o = r(70794),
        i = r(21815),
        a = r(84314);
      function s(e, t) {
        var r,
          s,
          c,
          l,
          u = e.availableLiquidityUSD,
          d = o.O.min(t.availableBorrowsUSD, u),
          p =
            '0' === e.borrowCap
              ? (0, n.hE)(i.MaxUint256.toString())
              : (0, n.hE)(Number(e.borrowCap)).minus((0, n.hE)(e.totalDebt)),
          x = o.O.max(o.O.min(e.formattedAvailableLiquidity, p), 0),
          h = (0, n.hE)(
            (null === t || void 0 === t ? void 0 : t.availableBorrowsMarketReferenceCurrency) || 0
          ).div(e.formattedPriceInMarketReferenceCurrency),
          b = o.O.min(h, x),
          f =
            b.gte(h) ||
            ('0' !== t.totalBorrowsMarketReferenceCurrency && d.lt(u)) ||
            (d.eq(u) && '0' !== e.totalDebt) ||
            (e.borrowCapUSD && '0' !== e.totalDebt && d.gte(u)) ||
            (t.isInIsolationMode &&
              '0' !==
                (null === (r = t.isolatedReserve) || void 0 === r
                  ? void 0
                  : r.isolationModeTotalDebt) &&
              (0, n.hE)(
                (null === (s = t.isolatedReserve) || void 0 === s ? void 0 : s.debtCeiling) || '0'
              )
                .minus(
                  (null === (c = t.isolatedReserve) || void 0 === c
                    ? void 0
                    : c.isolationModeTotalDebt) || '0'
                )
                .shiftedBy(
                  -(
                    (null === (l = t.isolatedReserve) || void 0 === l
                      ? void 0
                      : l.debtCeilingDecimals) || 0
                  )
                )
                .multipliedBy('0.99')
                .lt(t.availableBorrowsUSD))
              ? b.multipliedBy('0.99')
              : b;
        return (0, a.$w)(f.toString(10), e.decimals);
      }
      function c(e, t) {
        var r,
          s,
          c,
          l,
          u = (0, n.hE)(
            (null === e || void 0 === e ? void 0 : e.availableBorrowsMarketReferenceCurrency) || 0
          ),
          d =
            '0' === t.borrowCap
              ? (0, n.hE)(i.MaxUint256.toString())
              : (0, n.hE)(Number(t.borrowCap)).minus((0, n.hE)(t.totalDebt)),
          p = o.O.max(o.O.min(u, d), 0),
          x =
            '0' !== e.totalBorrowsMarketReferenceCurrency ||
            (t.borrowCapUSD && '0' !== t.totalDebt && p.gte(d)) ||
            (e.isInIsolationMode &&
              '0' !==
                (null === (r = e.isolatedReserve) || void 0 === r
                  ? void 0
                  : r.isolationModeTotalDebt) &&
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
        return (0, a.$w)(x.toString(10), 18);
      }
      function l(e, t) {
        var r = e.borrowingEnabled,
          n = e.isActive,
          o = e.borrowableInIsolation,
          i = e.eModes,
          a = e.isFrozen,
          s = e.isPaused;
        if (!r || !n || a || s) return !1;
        if (null !== t && void 0 !== t && t.isInEmode) {
          var c = i.find(function (e) {
            return e.id === t.userEmodeCategoryId;
          });
          return !!c && c.borrowingEnabled;
        }
        return !(null !== t && void 0 !== t && t.isInIsolationMode && !o);
      }
    },
  },
]);
