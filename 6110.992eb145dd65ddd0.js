'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6110, 1424, 9947],
  {
    62753: function (e, t, r) {
      var n = r(64836);
      t.Z = void 0;
      var o = n(r(64938)),
        i = r(85893);
      t.Z = (0, o.default)(
        (0, i.jsx)('path', {
          d: 'm19.77 7.23.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 10H6V5h6zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        }),
        'LocalGasStation'
      );
    },
    69368: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return T;
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
        f = (0, u.Z)(
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
        x = r(98216),
        b = r(28628),
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
        k = (0, m.ZP)(l.Z, {
          shouldForwardProp: (e) => (0, v.Z)(e) || 'classes' === e,
          name: 'MuiCheckbox',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: r } = e;
            return [
              t.root,
              r.indeterminate && t.indeterminate,
              t[`size${(0, x.Z)(r.size)}`],
              'default' !== r.color && t[`color${(0, x.Z)(r.color)}`],
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
        C = (0, d.jsx)(f, {}),
        A = (0, d.jsx)(p, {}),
        D = (0, d.jsx)(h, {});
      var T = i.forwardRef(function (e, t) {
        var r, c;
        const l = (0, b.i)({ props: e, name: 'MuiCheckbox' }),
          {
            checkedIcon: u = C,
            color: p = 'primary',
            icon: f = A,
            indeterminate: h = !1,
            indeterminateIcon: m = D,
            inputProps: v,
            size: y = 'medium',
            className: j,
          } = l,
          O = (0, n.Z)(l, w),
          T = h ? m : f,
          E = h ? m : u,
          P = (0, o.Z)({}, l, { color: p, indeterminate: h, size: y }),
          S = ((e) => {
            const { classes: t, indeterminate: r, color: n, size: i } = e,
              a = {
                root: ['root', r && 'indeterminate', `color${(0, x.Z)(n)}`, `size${(0, x.Z)(i)}`],
              },
              c = (0, s.Z)(a, g, t);
            return (0, o.Z)({}, t, c);
          })(P);
        return (0, d.jsx)(
          k,
          (0, o.Z)(
            {
              type: 'checkbox',
              inputProps: (0, o.Z)({ 'data-indeterminate': h }, v),
              icon: i.cloneElement(T, { fontSize: null != (r = T.props.fontSize) ? r : y }),
              checkedIcon: i.cloneElement(E, { fontSize: null != (c = E.props.fontSize) ? c : y }),
              ownerState: P,
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
      function f(e) {
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
          x = (0, c.HT)(),
          b = x.ghoLoadingData,
          m = x.ghoReserveData;
        if (b) return (0, u.jsx)(i.Z, { width: 70, height: 24 });
        var v = null !== t && void 0 !== t ? t : m.ghoBorrowAPYWithMaxDiscount,
          y = null !== r && void 0 !== r ? r : m.ghoVariableBorrowAPY,
          j = Number((100 * v).toFixed(2)) === Number((100 * y).toFixed(2));
        return (0, u.jsx)(a.Z, {
          sx: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
          children: j
            ? (0, u.jsx)(
                l.B,
                f(
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
                    f(
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
                    f(
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
    20929: function (e, t, r) {
      r.d(t, {
        S: function () {
          return i;
        },
      });
      var n = r(57499),
        o = r(85893);
      function i(e) {
        var t = (function (e) {
            return {
              d: Math.floor(e / 86400),
              h: Math.floor((e % 86400) / 3600),
              m: Math.floor((e % 3600) / 60),
              s: Math.floor(e % 60),
            };
          })(e.seconds),
          r = t.d,
          i = t.h,
          a = t.m,
          s = t.s;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            0 !== r &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'HkEDbS', values: { d: r } }),
              }),
            0 !== i &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'ntyFSE', values: { h: i } }),
              }),
            0 !== a &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'Nh9DAo', values: { m: a } }),
              }),
            0 !== s &&
              (0, o.jsx)('span', {
                children: (0, o.jsx)(n.cC, { id: 'jaKbwW', values: { s: s } }),
              }),
          ],
        });
      }
    },
    49212: function (e, t, r) {
      r.d(t, {
        G: function () {
          return v;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(38264),
        a = r(80822),
        s = r(15861),
        c = r(93946),
        l = r(53219),
        u = r(67294),
        d = r(3062),
        p = r(2127),
        f = r(85893),
        h = ['sx'],
        x = [
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
      function b(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : b(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var v = function (e) {
        var t = e.text,
          r = e.icon,
          n = e.iconSize,
          b = void 0 === n ? 14 : n,
          v = e.iconColor,
          y = e.iconMargin,
          j = e.children,
          g = e.textColor,
          O = e.wrapperProps,
          w = (O = void 0 === O ? {} : O).sx,
          k = (0, o.Z)(O, h),
          C = e.event,
          A = e.open,
          D = void 0 !== A && A,
          T = e.setOpen,
          E = (0, o.Z)(e, x),
          P = (0, u.useState)(D),
          S = P[0],
          Z = P[1],
          B = (0, d.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, f.jsxs)(
          a.Z,
          m(
            m({ sx: m({ display: 'flex', alignItems: 'center' }, w) }, k),
            {},
            {
              children: [
                t && (0, f.jsx)(s.Z, m(m({}, E), {}, { color: g, children: t })),
                (0, f.jsx)(p.a, {
                  tooltipContent: (0, f.jsx)(f.Fragment, { children: j }),
                  open: S,
                  setOpen: function () {
                    T && T(!S), Z(!S);
                  },
                  children: (0, f.jsx)(c.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: b,
                      height: b,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: y || 0.5,
                    },
                    onClick: function () {
                      C && B(C.eventName, m({}, C.eventParams));
                    },
                    children: (0, f.jsx)(l.Z, {
                      sx: {
                        fontSize: b,
                        color: v || (S ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: v || 'info.main' },
                      },
                      children: r || (0, f.jsx)(i.Z, {}),
                    }),
                  }),
                }),
              ],
            }
          )
        );
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
        f = r(38577),
        h = r(6308),
        x = r(45640),
        b = r(1790),
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
            k = e.withTokenIcon,
            C = void 0 !== k && k,
            A = e.forceShowTooltip,
            D = void 0 !== A && A,
            T = e.variant,
            E = void 0 === T ? 'secondary14' : T,
            P = e.color,
            S = void 0 === P ? void 0 : P,
            Z = (0, l.HT)().ghoReserveData,
            B = Number(g),
            I = B >= Z.ghoMinDiscountTokenBalanceForDiscount,
            L = (0, m.jsx)(m.Fragment, {}),
            R = O || D;
          return (
            R &&
              (L = (0, m.jsx)(a.Z, {
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
                        0: I
                          ? (0, m.jsxs)(m.Fragment, {
                              children: [
                                (0, m.jsx)(p.B, {
                                  variant: 'subheader2',
                                  value: B,
                                  visibleDecimals: 2,
                                }),
                                ' ',
                              ],
                            })
                          : null,
                      },
                    }),
                    ' ',
                    (0, m.jsx)(f.rU, {
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
                      title: L,
                      arrow: R,
                      PopperComponent: u.E,
                      children: (0, m.jsxs)(a.Z, {
                        sx: function () {
                          return { display: 'flex', alignItems: 'center' };
                        },
                        children: [
                          C &&
                            (0, m.jsx)(x.T1, {
                              symbol: 'stkAAVE',
                              sx: { height: 14, width: 14, mr: 1 },
                            }),
                          r
                            ? (0, m.jsx)(d.Z, {
                                percentVariant: E,
                                hyphenVariant: E,
                                minVal: Math.min.apply(Math, (0, n.Z)(y)),
                                maxVal: Math.max.apply(Math, (0, n.Z)(y)),
                                color: S,
                              })
                            : (0, m.jsx)(p.B, {
                                value: t,
                                percent: !0,
                                variant: E,
                                color: S,
                                'data-cy': 'apy',
                              }),
                        ],
                      }),
                    })
                  : (0, m.jsx)(h.J, { variant: 'secondary14', color: 'text.secondary' }),
                (0, m.jsx)(b.GV, { rewardedAsset: i.ou.GHO.V_TOKEN }),
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
    64311: function (e, t, r) {
      r.d(t, {
        Ch: function () {
          return m;
        },
        a9: function () {
          return y;
        },
        r$: function () {
          return v;
        },
      });
      var n = r(59499),
        o = r(57499),
        i = r(38264),
        a = r(53219),
        s = r(2734),
        c = r(80822),
        l = r(15861),
        u = r(23795),
        d = r(2127),
        p = r(85893);
      function f(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var x = {
          borderRadius: '4px',
          display: 'inline-flex',
          alignItems: 'center',
          p: '2px',
          mt: '2px',
          cursor: 'pointer',
          '&:hover': { opacity: 0.6 },
        },
        b = function (e) {
          var t = e.color;
          return (0, p.jsx)(a.Z, {
            sx: { ml: '3px', color: t || 'text.muted', fontSize: '14px' },
            children: (0, p.jsx)(i.Z, {}),
          });
        },
        m = function (e) {
          var t = e.typographyProps,
            r = (0, s.Z)(),
            n = h(
              {
                border: '1px solid '.concat(r.palette.warning.main),
                color: r.palette.warning.main,
              },
              x
            );
          return (0, p.jsx)(d.a, {
            withoutHover: !0,
            tooltipContent: (0, p.jsx)(j, { content: (0, p.jsx)(o.cC, { id: 'bXr0ee' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: n,
              children: [
                (0, p.jsx)(
                  l.Z,
                  h(
                    h(
                      {
                        variant: 'secondary12',
                        sx: { lineHeight: '0.75rem' },
                        color: r.palette.warning.main,
                      },
                      t
                    ),
                    {},
                    { children: (0, p.jsx)(o.cC, { id: 'KYAjf3' }) }
                  )
                ),
                (0, p.jsx)(b, { color: r.palette.warning.main }),
              ],
            }),
          });
        },
        v = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(j, { content: (0, p.jsx)(o.cC, { id: 'N5kUMV' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: x,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(b, {}),
              ],
            }),
          });
        },
        y = function () {
          return (0, p.jsx)(d.a, {
            tooltipContent: (0, p.jsx)(j, { content: (0, p.jsx)(o.cC, { id: 'xh6k71' }) }),
            children: (0, p.jsxs)(c.Z, {
              sx: x,
              children: [
                (0, p.jsx)(l.Z, {
                  variant: 'description',
                  color: 'error.main',
                  children: (0, p.jsx)(o.cC, { id: 'jqzUyM' }),
                }),
                (0, p.jsx)(b, {}),
              ],
            }),
          });
        },
        j = function (e) {
          var t = e.content;
          return (0, p.jsxs)(c.Z, {
            children: [
              (0, p.jsx)(c.Z, { sx: { mb: 4 }, children: t }),
              (0, p.jsx)(l.Z, {
                variant: 'subheader2',
                color: 'text.secondary',
                children: (0, p.jsx)(o.cC, {
                  id: 'lfEjIE',
                  components: {
                    0: (0, p.jsx)(u.Z, {
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
    32867: function (e, t, r) {
      r.d(t, {
        B: function () {
          return h;
        },
        J: function () {
          return p;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(1279),
        a = r(15861),
        s = r(85893),
        c = [
          'value',
          'symbol',
          'visibleDecimals',
          'compact',
          'percent',
          'symbolsVariant',
          'symbolsColor',
          'roundDown',
          'compactThreshold',
        ];
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
      var d = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'],
        p = function (e) {
          var t = e.value,
            r = e.visibleDecimals,
            n = void 0 === r ? 2 : r,
            o = e.roundDown,
            a = e.compactThreshold,
            s = (0, i.hE)(t),
            c = s.toFixed(0).length;
          a && Number(t) <= a && (c = 0);
          var l = Math.min(Math.floor(c ? (c - 1) / 3 : 0), d.length - 1),
            u = d[l],
            p = (0, i.pV)(s, 3 * l).toNumber();
          return (
            o && (p = Math.trunc(Number(p) * Math.pow(10, n)) / Math.pow(10, n)),
            {
              prefix: new Intl.NumberFormat('en-US', {
                maximumFractionDigits: n,
                minimumFractionDigits: n,
              }).format(p),
              postfix: u,
            }
          );
        };
      function f(e) {
        var t = e.value,
          r = e.visibleDecimals,
          n = e.roundDown,
          o = p({ value: t, visibleDecimals: r, roundDown: n }),
          i = o.prefix,
          a = o.postfix;
        return (0, s.jsxs)(s.Fragment, { children: [i, a] });
      }
      function h(e) {
        var t = e.value,
          r = e.symbol,
          n = e.visibleDecimals,
          i = e.compact,
          l = e.percent,
          d = e.symbolsVariant,
          p = e.symbolsColor,
          h = e.roundDown,
          x = e.compactThreshold,
          b = (0, o.Z)(e, c),
          m = l ? 100 * Number(t) : Number(t),
          v = null !== n && void 0 !== n ? n : 0;
        0 === m ? (v = 0) : void 0 === n && (v = m >= 1 || l || 'USD' === r ? 2 : 7);
        var y = Math.pow(10, -v),
          j = 0 !== m && Math.abs(m) < Math.abs(y),
          g = j ? y : m,
          O = !1 !== i && (i || m > 99999);
        return (
          h && !O && (g = Math.trunc(Number(g) * Math.pow(10, v)) / Math.pow(10, v)),
          (0, s.jsxs)(
            a.Z,
            u(
              u({}, b),
              {},
              {
                sx: u(
                  {
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                  },
                  b.sx
                ),
                noWrap: !0,
                children: [
                  j &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: '<',
                    }),
                  'usd' === (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    !l &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { mr: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: '$',
                    }),
                  O
                    ? (0, s.jsx)(f, {
                        value: g,
                        visibleDecimals: v,
                        roundDown: h,
                        compactThreshold: x,
                      })
                    : new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: v,
                        minimumFractionDigits: v,
                      }).format(g),
                  l &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: '%',
                    }),
                  'usd' !== (null === r || void 0 === r ? void 0 : r.toLowerCase()) &&
                    'undefined' !== typeof r &&
                    (0, s.jsx)(a.Z, {
                      component: 'span',
                      sx: { ml: 0.5 },
                      variant: d || b.variant,
                      color: p || 'text.secondary',
                      children: r,
                    }),
                ],
              }
            )
          )
        );
      }
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
    20986: function (e, t, r) {
      r.d(t, {
        X: function () {
          return d;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(80822),
        a = r(15861),
        s = r(85893),
        c = ['caption', 'children', 'captionVariant', 'captionColor', 'align'];
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
      var d = function (e) {
        var t = e.caption,
          r = e.children,
          n = e.captionVariant,
          l = void 0 === n ? 'secondary16' : n,
          d = e.captionColor,
          p = e.align,
          f = void 0 === p ? 'center' : p,
          h = (0, o.Z)(e, c);
        return (0, s.jsxs)(
          i.Z,
          u(
            u({}, h),
            {},
            {
              sx: u({ display: 'flex', alignItems: f, justifyContent: 'space-between' }, h.sx),
              children: [
                t &&
                  (0, s.jsx)(a.Z, {
                    component: 'div',
                    variant: l,
                    color: d,
                    sx: { mr: 2 },
                    children: t,
                  }),
                r,
              ],
            }
          )
        );
      };
    },
    45640: function (e, t, r) {
      r.d(t, {
        Js: function () {
          return v;
        },
        T1: function () {
          return w;
        },
        UD: function () {
          return g;
        },
      });
      var n = r(83618),
        o = r(59499),
        i = r(4730),
        a = r(67564),
        s = r(80822),
        c = r(86653),
        l = r(67294),
        u = r(25043),
        d = r(85893),
        p = ['symbol', 'aToken', 'waToken'],
        f = ['symbol', 'logoURI'],
        h = ['symbols', 'badgeSymbol', 'aToken', 'waToken', 'aTokens', 'waTokens'],
        x = ['symbol', 'aToken', 'waToken', 'aTokens', 'waTokens'];
      function b(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : b(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function v(e) {
        var t = e.symbol,
          r = e.onImageGenerated,
          n = e.aToken,
          o = e.waToken,
          i = (0, l.useRef)(null),
          a = (0, l.useRef)(null),
          s = (0, l.useState)(!0),
          c = s[0],
          u = s[1];
        return (
          (0, l.useEffect)(
            function () {
              var e;
              if (!c && i.current && null !== (e = i.current) && void 0 !== e && e.contentDocument)
                if (n || o) {
                  var t,
                    s,
                    l,
                    u,
                    d =
                      null === (t = i.current) ||
                      void 0 === t ||
                      null === (s = t.contentDocument) ||
                      void 0 === s ||
                      null === (l = s.childNodes) ||
                      void 0 === l
                        ? void 0
                        : l[0],
                    p = d.getAttribute('width'),
                    f = d.getAttribute('height'),
                    h = d.getAttribute('viewBox');
                  d.setAttribute('x', 25),
                    d.setAttribute('width', 206),
                    d.setAttribute('y', 25),
                    d.setAttribute('height', 206),
                    h || d.setAttribute('viewBox', '0 0 '.concat(p, ' ').concat(f)),
                    null === (u = a.current) || void 0 === u || u.appendChild(d);
                  var x = new XMLSerializer().serializeToString(a.current);
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(x)))
                    )
                  );
                } else {
                  var b,
                    m = new XMLSerializer().serializeToString(
                      null === (b = i.current) || void 0 === b ? void 0 : b.contentDocument
                    );
                  r(
                    'data:image/svg+xml;base64,'.concat(
                      window.btoa(unescape(encodeURIComponent(m)))
                    )
                  );
                }
            },
            [c, n, o]
          ),
          (0, d.jsxs)('div', {
            style: { visibility: 'hidden', height: 0, width: 0, overflow: 'hidden' },
            children: [
              (0, d.jsx)('object', {
                style: { opacity: 1 },
                ref: i,
                id: 'svg',
                data: '/icons/tokens/'.concat(t.toLowerCase(), '.svg'),
                onLoad: function () {
                  return u(!1);
                },
              }),
              (n || o) && (0, d.jsx)(y, { ref: a, waToken: o }),
            ],
          })
        );
      }
      var y = (0, l.forwardRef)(function (e, t) {
        var r = e.symbol,
          n = e.waToken;
        return (0, d.jsxs)('svg', {
          style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
          ref: t,
          id: 'Group_30952',
          width: '256',
          height: '256',
          viewBox: '0 0 256 256',
          children: [
            (0, d.jsx)('defs', {
              id: 'defs10',
              children: (0, d.jsxs)('linearGradient', {
                id: 'linear-gradient',
                x1: '.843',
                x2: '.206',
                y1: '.135',
                y2: '.886',
                gradientUnits: 'objectBoundingBox',
                children: [
                  (0, d.jsx)('stop', { offset: '0', stopColor: '#b6509e', id: 'stop2' }),
                  (0, d.jsx)('stop', { offset: '1', stopColor: '#2ebac6', id: 'stop4' }),
                ],
              }),
            }),
            (0, d.jsxs)('g', {
              id: 'Group_29109',
              children: [
                n
                  ? (0, d.jsx)('path', {
                      id: 'Subtraction_108',
                      fill: 'none',
                      stroke: 'url(#linear-gradient)',
                      strokeWidth: '13.713',
                      strokeDasharray: '8,8',
                      d: 'M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256z',
                    })
                  : (0, d.jsx)('path', {
                      id: 'Subtraction_108',
                      fill: 'url(#linear-gradient)',
                      d: 'M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z',
                    }),
                r &&
                  (0, d.jsx)('image', {
                    x: '25',
                    y: '25',
                    href: '/icons/tokens/'.concat(r.toLowerCase(), '.svg'),
                    width: '206',
                    height: '206',
                  }),
              ],
            }),
          ],
        });
      });
      function j(e) {
        var t = e.symbol,
          r = e.aToken,
          n = e.waToken,
          o = (0, i.Z)(e, p),
          s = (0, l.useState)(t.toLowerCase()),
          c = s[0],
          u = s[1];
        return (
          (0, l.useEffect)(
            function () {
              u(t.toLowerCase());
            },
            [t]
          ),
          (0, d.jsx)(
            a.Z,
            m(
              m({}, o),
              {},
              {
                sx: m({ display: 'flex', position: 'relative', borderRadius: '50%' }, o.sx),
                children:
                  r || n
                    ? (0, d.jsx)(y, { symbol: c, waToken: n })
                    : (0, d.jsx)('img', {
                        src: '/icons/tokens/'.concat(c, '.svg'),
                        onError: function () {
                          return u('default');
                        },
                        width: '100%',
                        height: '100%',
                        alt: ''.concat(t, ' icon'),
                      }),
              }
            )
          )
        );
      }
      function g(e) {
        var t = e.symbol,
          r = e.logoURI,
          n = (0, i.Z)(e, f),
          o = (0, l.useState)(t.toLowerCase()),
          s = o[0],
          c = o[1];
        return (0, d.jsx)(
          a.Z,
          m(
            m({}, n),
            {},
            {
              sx: m({ display: 'flex', position: 'relative', borderRadius: '50%' }, n.sx),
              children: (0, d.jsx)(u.Z, {
                children: (0, d.jsx)('img', {
                  src: 'default' !== s && r ? r : '/icons/tokens/default.svg',
                  width: '100%',
                  height: '100%',
                  alt: ''.concat(t, ' icon'),
                  onError: function () {
                    return c('default');
                  },
                }),
              }),
            }
          )
        );
      }
      function O(e) {
        var t = e.symbols,
          r = e.badgeSymbol,
          n = e.aToken,
          o = void 0 !== n && n,
          a = e.waToken,
          u = void 0 !== a && a,
          p = e.aTokens,
          f = e.waTokens,
          x = (0, i.Z)(e, h),
          b =
            p ||
            t.map(function (e, t) {
              return 0 === t && o;
            }),
          v =
            f ||
            t.map(function (e, t) {
              return 0 === t && u;
            });
        return r
          ? (0, d.jsx)(c.Z, {
              badgeContent: (0, d.jsx)(j, {
                symbol: r,
                sx: { border: '1px solid #fff' },
                fontSize: 'small',
              }),
              sx: { '.MuiBadge-anchorOriginTopRight': { top: 9 } },
              children: t.map(function (e, t) {
                return (0, l.createElement)(
                  j,
                  m(
                    m({}, x),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: b[t],
                      waToken: v[t],
                      sx: m({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, x.sx),
                    }
                  )
                );
              }),
            })
          : (0, d.jsx)(s.Z, {
              sx: { display: 'inline-flex', position: 'relative' },
              children: t.map(function (e, t) {
                return (0, l.createElement)(
                  j,
                  m(
                    m({}, x),
                    {},
                    {
                      key: e,
                      symbol: e,
                      aToken: b[t],
                      waToken: v[t],
                      sx: m({ ml: 0 === t ? 0 : 'calc(-1 * 0.5em)' }, x.sx),
                    }
                  )
                );
              }),
            });
      }
      function w(e) {
        var t = e.symbol,
          r = e.aToken,
          o = e.waToken,
          a = e.aTokens,
          s = e.waTokens,
          c = (0, i.Z)(e, x),
          l = t.split('_');
        if (l.length > 1) {
          if (l[0].startsWith('pools/')) {
            var u = (0, n.Z)(l),
              p = u[0],
              f = u.slice(1);
            return (0, d.jsx)(O, m(m({}, c), {}, { symbols: f, badgeSymbol: '/pools/' + p }));
          }
          return (0, d.jsx)(
            O,
            m(m({}, c), {}, { symbols: l, aToken: r, waToken: o, aTokens: a, waTokens: s })
          );
        }
        return (0, d.jsx)(j, m({ symbol: t, aToken: r, waToken: o }, c));
      }
      y.displayName = 'TokenRing';
    },
    35783: function (e, t, r) {
      r.d(t, {
        v: function () {
          return u;
        },
      });
      var n = r(59499),
        o = r(4730),
        i = r(21737),
        a = r(85893),
        s = ['children', 'sx'];
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
      function l(e) {
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
        var t = e.children,
          r = e.sx,
          n = (0, o.Z)(e, s),
          c = l({ mb: 6, alignItems: 'center', width: '100%' }, r);
        return (0, a.jsx)(i.Z, l(l({ sx: c }, n), {}, { children: t }));
      };
    },
    23478: function (e, t, r) {
      r.d(t, {
        W: function () {
          return E;
        },
        l: function () {
          return T;
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
        f = r(94054),
        h = r(10315),
        x = r(18972),
        b = r(59334),
        m = r(69417),
        v = r(67294),
        y = r(57333),
        j = r(3062),
        g = r(46817),
        O = r(32867),
        w = r(45640),
        k = r(85893),
        C = ['onChange'];
      function A(e, t) {
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : A(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var T = v.forwardRef(function (e, t) {
          var r = e.onChange,
            n = (0, o.Z)(e, C);
          return (0, k.jsx)(
            y.Z,
            D(
              D({}, n),
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
        E = function (e) {
          var t = e.value,
            r = e.usdValue,
            n = e.symbol,
            o = e.onChange,
            v = e.disabled,
            y = e.disableInput,
            C = e.onSelect,
            A = e.assets,
            E = e.capType,
            P = e.maxValue,
            S = e.isMaxSelected,
            Z = e.inputTitle,
            B = e.balanceText,
            I = e.loading,
            L = void 0 !== I && I,
            R = e.event,
            N = e.selectOptionHeader,
            _ = e.selectOption,
            M = e.sx,
            z = void 0 === M ? {} : M,
            H = e.exchangeRateComponent,
            W = (0, s.Z)(),
            U = (0, j.Y)(function (e) {
              return e.trackEvent;
            }),
            F =
              1 === A.length
                ? A[0]
                : A &&
                  A.find(function (e) {
                    return e.symbol === n;
                  });
          return (0, k.jsxs)(
            c.Z,
            D(
              D({}, z),
              {},
              {
                children: [
                  (0, k.jsxs)(c.Z, {
                    sx: { display: 'flex', alignItems: 'center', mb: 1 },
                    children: [
                      (0, k.jsx)(l.Z, {
                        color: 'text.secondary',
                        children: Z || (0, k.jsx)(i.cC, { id: 'hehnjM' }),
                      }),
                      E && (0, k.jsx)(g.Y, { capType: E }),
                    ],
                  }),
                  (0, k.jsxs)(c.Z, {
                    sx: function (e) {
                      return {
                        border: '1px solid '.concat(e.palette.divider),
                        borderRadius: '6px',
                        overflow: 'hidden',
                      };
                    },
                    children: [
                      (0, k.jsxs)(c.Z, {
                        sx: { display: 'flex', alignItems: 'center', mb: 0.5, px: 3, py: 2 },
                        children: [
                          L
                            ? (0, k.jsx)(c.Z, {
                                sx: { flex: 1 },
                                children: (0, k.jsx)(u.Z, { color: 'inherit', size: '16px' }),
                              })
                            : (0, k.jsx)(d.ZP, {
                                sx: { flex: 1 },
                                placeholder: '0.00',
                                disabled: v || y,
                                value: t,
                                autoFocus: !0,
                                onChange: function (e) {
                                  o &&
                                    (Number(e.target.value) > Number(P)
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
                                inputComponent: T,
                              }),
                          '' !== t &&
                            !y &&
                            (0, k.jsx)(p.Z, {
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
                              children: (0, k.jsx)(a.Z, { height: 16 }),
                            }),
                          C && 1 !== A.length
                            ? (0, k.jsx)(f.Z, {
                                children: (0, k.jsxs)(h.Z, {
                                  disabled: v,
                                  value: F.symbol,
                                  onChange: function (e) {
                                    var t = A.find(function (t) {
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
                                          'dark' === W.palette.mode
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
                                      1 === A.length
                                        ? A[0]
                                        : A &&
                                          A.find(function (t) {
                                            return t.symbol === e;
                                          });
                                    return (0, k.jsxs)(c.Z, {
                                      sx: { display: 'flex', alignItems: 'center' },
                                      'data-cy': 'assetsSelectedOption_'.concat(
                                        t.symbol.toUpperCase()
                                      ),
                                      children: [
                                        (0, k.jsx)(w.T1, {
                                          symbol: t.iconSymbol || t.symbol,
                                          aToken: t.aToken,
                                          sx: { mr: 2, ml: 4 },
                                        }),
                                        (0, k.jsx)(l.Z, {
                                          variant: 'main16',
                                          color: 'text.primary',
                                          children: e,
                                        }),
                                      ],
                                    });
                                  },
                                  children: [
                                    N || void 0,
                                    A.map(function (e) {
                                      return (0, k.jsx)(
                                        x.Z,
                                        {
                                          value: e.symbol,
                                          'data-cy': 'assetsSelectOption_'.concat(
                                            e.symbol.toUpperCase()
                                          ),
                                          children: _
                                            ? _(e)
                                            : (0, k.jsxs)(k.Fragment, {
                                                children: [
                                                  (0, k.jsx)(w.T1, {
                                                    aToken: e.aToken,
                                                    symbol: e.iconSymbol || e.symbol,
                                                    sx: { fontSize: '22px', mr: 1 },
                                                  }),
                                                  (0, k.jsx)(b.Z, {
                                                    sx: { mr: 6 },
                                                    children: e.symbol,
                                                  }),
                                                  e.balance &&
                                                    (0, k.jsx)(O.B, {
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
                            : (0, k.jsxs)(c.Z, {
                                sx: { display: 'inline-flex', alignItems: 'center' },
                                children: [
                                  (0, k.jsx)(w.T1, {
                                    aToken: F.aToken,
                                    symbol: F.iconSymbol || F.symbol,
                                    sx: { mr: 2, ml: 4 },
                                  }),
                                  (0, k.jsx)(l.Z, {
                                    variant: 'h3',
                                    sx: { lineHeight: '28px' },
                                    'data-cy': 'inputAsset',
                                    children: n,
                                  }),
                                ],
                              }),
                        ],
                      }),
                      (0, k.jsxs)(c.Z, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          height: '16px',
                          px: 3,
                          py: 2,
                          mb: 1,
                        },
                        children: [
                          L
                            ? (0, k.jsx)(c.Z, { sx: { flex: 1 } })
                            : (0, k.jsx)(O.B, {
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
                            (0, k.jsxs)(k.Fragment, {
                              children: [
                                (0, k.jsxs)(l.Z, {
                                  component: 'div',
                                  variant: 'secondary12',
                                  color: 'text.secondary',
                                  children: [
                                    B && '' !== B ? B : (0, k.jsx)(i.cC, { id: 'fsBGk0' }),
                                    ' ',
                                    (0, k.jsx)(O.B, {
                                      value: F.balance,
                                      compact: !0,
                                      variant: 'secondary12',
                                      color: 'text.secondary',
                                      symbolsColor: 'text.disabled',
                                    }),
                                  ],
                                }),
                                !y &&
                                  (0, k.jsx)(m.Z, {
                                    size: 'small',
                                    sx: { minWidth: 0, ml: '7px', p: 0 },
                                    onClick: function () {
                                      R && U(R.eventName, D({}, R.eventParams)), o('-1');
                                    },
                                    disabled: v || S,
                                    children: (0, k.jsx)(i.cC, { id: 'CK1KXz' }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                      H &&
                        (0, k.jsx)(c.Z, {
                          sx: {
                            background: W.palette.background.surface,
                            borderTop: '1px solid '.concat(W.palette.divider),
                            px: 3,
                            py: 2,
                          },
                          children: H,
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
            return We;
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
        f = r(15629),
        h = r(92519),
        x = r(80854),
        b = r(1279),
        m = r(82403),
        v = r(20854),
        y = r(15861),
        j = r(60377),
        g = r(89771),
        O = r(55875),
        w = r(84314),
        k = r(73592),
        C = r(23478),
        A = r(83063),
        D = r(44880),
        T = r(67944),
        E = r(50029),
        P = r(87794),
        S = r.n(P),
        Z = r(75331),
        B = r(30202),
        I = r(56371),
        L = r(72005),
        R = r(805),
        N = r(52251),
        _ = r(84207),
        M = r(53008),
        z = r(85893);
      function H(e, t) {
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
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : H(Object(r)).forEach(function (t) {
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
            f = e.sx,
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
            b = (0, o.Z)(h, 6),
            m = b[0],
            v = b[1],
            y = b[2],
            j = b[3],
            g = b[4],
            O = b[5],
            w = (0, c.vR)(),
            k = w.approvalTxState,
            C = w.mainTxState,
            A = w.loadingTxns,
            D = w.setMainTxState,
            T = w.setTxError,
            P = w.setGasLimit,
            H = w.setLoadingTxns,
            U = w.setApprovalTxState,
            F = (0, L.Z)().sendTx,
            G = (0, B.NL)(),
            V = (0, a.useState)(!1),
            Y = V[0],
            q = V[1],
            K = (0, a.useState)(),
            Q = K[0],
            $ = K[1],
            J = (function () {
              var e = (0, E.Z)(
                S().mark(function e() {
                  var t, n, o, i;
                  return S().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !Y || !Q)) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (n = j({
                                debtTokenAddress: r.variableDebtTokenAddress,
                                delegatee:
                                  null !== (t = y.addresses.WETH_GATEWAY) && void 0 !== t ? t : '',
                                amount: x.ke,
                              })),
                              U(W(W({}, k), {}, { loading: !0 })),
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
                              (i = (0, R.WG)(e.t0, R.aD.GAS_ESTIMATION, !1)),
                              T(i),
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
              var e = (0, E.Z)(
                S().mark(function e() {
                  var t, o, i;
                  return S().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              D(W(W({}, C), {}, { loading: !0 })),
                              (t = m({
                                amount: (0, I.parseUnits)(n, r.decimals).toString(),
                                reserve: s,
                                interestRateMode: Z.tk.Variable,
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
                            D({ txHash: o.hash, loading: !1, success: !0 }),
                              O(o.hash, {
                                action: Z.UQ.borrow,
                                txState: 'success',
                                asset: s,
                                amount: n,
                                assetName: r.name,
                              }),
                              G.invalidateQueries({ queryKey: N.B.pool }),
                              G.invalidateQueries({ queryKey: N.B.gho }),
                              (e.next = 22);
                            break;
                          case 17:
                            (e.prev = 17),
                              (e.t0 = e.catch(0)),
                              (i = (0, R.WG)(e.t0, R.aD.GAS_ESTIMATION, !1)),
                              T(i),
                              D({ txHash: void 0, loading: !1 });
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
                var e = (0, E.Z)(
                  S().mark(function e(t) {
                    var o, i, a;
                    return S().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (s !== x.hP || (void 0 !== Q && !t)) {
                              e.next = 8;
                              break;
                            }
                            return (
                              H(!0),
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
                            q(!1), U({});
                          case 10:
                            Q &&
                              s === x.hP &&
                              ((a = (0, M.iv)({
                                approvedAmount: Q.amount,
                                amount: n,
                                signedAmount: '0',
                              })),
                              q(a),
                              a && U({})),
                              H(!1);
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
              [n, Q, y.addresses.WETH_GATEWAY, v, s, r.variableDebtTokenAddress, U, H]
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
                (e = Number(x.eB[Z.UQ.borrow].recommended)),
                  Y && !k.success && (e += Number(M.Fi)),
                  P(e.toString());
              },
              [Y, k, P]
            ),
            (0, z.jsx)(_.B, {
              blocked: d,
              mainTxState: C,
              approvalTxState: k,
              requiresAmount: !0,
              amount: n,
              isWrongNetwork: u,
              handleAction: X,
              actionText: (0, z.jsx)(i.cC, { id: '39eQRj', values: { symbol: t } }),
              actionInProgressText: (0, z.jsx)(i.cC, { id: 'huQ6Tz', values: { symbol: t } }),
              handleApproval: function () {
                return J();
              },
              requiresApproval: Y,
              preparingTransactions: A,
              sx: f,
            })
          );
        }),
        G = r(80822),
        V = r(69368),
        Y = r(35783),
        q = function (e) {
          var t = e.riskCheckboxAccepted,
            r = e.onRiskCheckboxChange,
            n = (0, l.Y)(function (e) {
              return e.trackEvent;
            });
          return (0, z.jsxs)(z.Fragment, {
            children: [
              (0, z.jsx)(Y.v, {
                severity: 'error',
                sx: { my: 6 },
                children: (0, z.jsx)(i.cC, { id: '/7ykiW' }),
              }),
              (0, z.jsxs)(G.Z, {
                sx: {
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mx: '24px',
                  mb: '12px',
                },
                children: [
                  (0, z.jsx)(V.Z, {
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
                  (0, z.jsx)(y.Z, {
                    variant: 'description',
                    children: (0, z.jsx)(i.cC, { id: '2eBWE6' }),
                  }),
                ],
              }),
            ],
          });
        },
        K = function (e) {
          var t = e.underlyingAsset,
            r = (0, l.Y)(function (e) {
              return e.trackEvent;
            });
          return (0, z.jsx)(Y.v, {
            severity: 'info',
            sx: { my: 6 },
            children: (0, z.jsx)(i.cC, {
              id: 'k3wP3f',
              components: {
                0: (0, z.jsx)('b', {}),
                1: (0, z.jsx)('a', {
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
      var Q = function (e) {
          var t = e.underlyingAsset,
            r = e.isWrongNetwork,
            n = e.poolReserve,
            o = e.unwrap,
            s = e.setUnwrap,
            d = e.symbol,
            p = e.user,
            f = (0, c.vR)(),
            h = f.mainTxState,
            E = f.gasLimit,
            P = f.txError,
            S = (0, j.HT)().marketReferencePriceInUsd,
            Z = (0, l.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            B = (0, g.ov)().borrowCap,
            I = (0, a.useState)(''),
            L = I[0],
            R = I[1],
            N = (0, a.useState)(!1),
            _ = N[0],
            M = N[1],
            H = (0, O.nG)(n, p),
            W = L === H,
            G = (0, b.hE)(L)
              .multipliedBy(n.formattedPriceInMarketReferenceCurrency)
              .multipliedBy(S)
              .shiftedBy(-m.$3),
            V = (0, v.L1)({
              collateralBalanceMarketReferenceCurrency: p.totalCollateralUSD,
              borrowBalanceMarketReferenceCurrency: (0, b.hE)(p.totalBorrowsUSD).plus(G),
              currentLiquidationThreshold: p.currentLiquidationThreshold,
            }),
            Y = V.toNumber() < 1.5 && '-1' !== V.toString(),
            Q = (0, b.hE)(L).multipliedBy(n.priceInUSD),
            $ = void 0;
          (0, b.hE)(L).gt(n.formattedAvailableLiquidity)
            ? ($ = U.NOT_ENOUGH_LIQUIDITY)
            : n.borrowingEnabled || ($ = U.BORROWING_NOT_AVAILABLE);
          var J = { address: t, symbol: n.iconSymbol, decimals: n.decimals },
            X = o && n.isWrappedBaseAsset ? Z.baseAssetSymbol : n.iconSymbol;
          return h.success
            ? (0, z.jsx)(D.R, {
                action: (0, z.jsx)(i.cC, { id: 'fMJQZK' }),
                amount: L,
                symbol: X,
                addToken: o && n.isWrappedBaseAsset ? void 0 : J,
              })
            : (0, z.jsxs)(z.Fragment, {
                children: [
                  B.determineWarningDisplay({ borrowCap: B }),
                  (0, z.jsx)(C.W, {
                    value: L,
                    onChange: function (e) {
                      if ('-1' === e) R(H);
                      else {
                        var t = (0, w.$w)(e, n.decimals);
                        R(t);
                      }
                    },
                    usdValue: Q.toString(10),
                    assets: [{ balance: H, symbol: d, iconSymbol: X }],
                    symbol: d,
                    capType: k.R.borrowCap,
                    isMaxSelected: W,
                    maxValue: H,
                    balanceText: (0, z.jsx)(i.cC, { id: 'csDS2L' }),
                    event: {
                      eventName: u.vh.MAX_INPUT_SELECTION,
                      eventParams: { asset: n.underlyingAsset, assetName: n.name },
                    },
                  }),
                  void 0 !== $ &&
                    (0, z.jsx)(y.Z, {
                      variant: 'helperText',
                      color: 'error.main',
                      children: (function () {
                        switch ($) {
                          case U.BORROWING_NOT_AVAILABLE:
                            return (0, z.jsx)(i.cC, { id: '9CDK3/', values: { 0: n.symbol } });
                          case U.NOT_ENOUGH_LIQUIDITY:
                            return (0, z.jsx)(z.Fragment, {
                              children: (0, z.jsx)(i.cC, { id: 'ymNY32', values: { 0: n.symbol } }),
                            });
                          default:
                            return null;
                        }
                      })(),
                    }),
                  n.isWrappedBaseAsset &&
                    (0, z.jsx)(T.Pu, {
                      unwrapped: o,
                      setUnWrapped: s,
                      label: (0, z.jsx)(y.Z, {
                        children: 'Unwrap '
                          .concat(n.symbol, ' (to borrow ')
                          .concat(Z.baseAssetSymbol, ')'),
                      }),
                    }),
                  (0, z.jsxs)(T.m6, {
                    gasLimit: E,
                    children: [
                      (0, z.jsx)(T.aE, { incentives: n.vIncentivesData, symbol: n.symbol }),
                      (0, z.jsx)(T.jz, {
                        visibleHfChange: !!L,
                        healthFactor: p.healthFactor,
                        futureHealthFactor: V.toString(10),
                      }),
                    ],
                  }),
                  P && (0, z.jsx)(A.Q, { txError: P }),
                  Y &&
                    (0, z.jsx)(q, {
                      riskCheckboxAccepted: _,
                      onRiskCheckboxChange: function () {
                        M(!_);
                      },
                    }),
                  (0, z.jsx)(K, { underlyingAsset: t }),
                  (0, z.jsx)(F, {
                    poolReserve: n,
                    amountToBorrow: L,
                    poolAddress: o && n.isWrappedBaseAsset ? x.hP : n.underlyingAsset,
                    isWrongNetwork: r,
                    symbol: d,
                    blocked: void 0 !== $ || (Y && !_),
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
          (0, z.jsx)('path', {
            d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z',
          }),
          'ContentCopyOutlined'
        ),
        de = (0, le.Z)(
          (0, z.jsx)('path', { d: 'M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z' }),
          'Download'
        ),
        pe = r(64232),
        fe = r(90948),
        he = r(69417),
        xe = r(93946),
        be = r(2734),
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
      function ke(e) {
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
        return (0, z.jsxs)(
          J.Z,
          ke(
            ke(
              {
                sx: ke({}, t),
                xmlns: 'http://www.w3.org/2000/svg',
                'aria-label': 'Hey',
                viewBox: '0 0 16 16',
              },
              r
            ),
            {},
            {
              children: [
                (0, z.jsxs)('g', {
                  clipPath: 'url(#clip0_4560_45564)',
                  children: [
                    (0, z.jsx)('path', {
                      d: 'M6.91944 7.59576C6.72478 7.92306 3.68827 7.97806 2.0317 7.04968C0.375136 6.12129 1.17996 3.28268 2.86021 2.53729C4.54046 1.79191 7.1141 7.2685 6.91944 7.59576Z',
                    }),
                    (0, z.jsx)('path', {
                      d: 'M6.89648 8.73193C7.09114 9.05923 5.622 11.6393 3.96542 12.5677C2.30885 13.4961 0.178713 11.4002 0.353823 9.61506C0.528933 7.82987 6.70182 8.40462 6.89648 8.73193Z',
                    }),
                    (0, z.jsx)('path', {
                      d: 'M7.89858 9.31921C8.28794 9.31921 9.85521 11.8443 9.85521 13.7011C9.85521 15.5578 6.92026 16.3006 5.41513 15.2608C3.90999 14.221 7.50926 9.31917 7.89858 9.31921Z',
                    }),
                    (0, z.jsx)('path', {
                      d: 'M8.92364 8.77067C9.1183 8.44332 12.1548 8.38837 13.8114 9.31675C15.4679 10.2451 14.6631 13.0837 12.9829 13.8291C11.3026 14.5745 8.72898 9.09793 8.92364 8.77067Z',
                    }),
                    (0, z.jsx)('path', {
                      d: 'M8.94665 7.63436C8.75199 7.30706 10.2211 4.72699 11.8777 3.79858C13.5343 2.8702 15.6644 4.96609 15.4893 6.75123C15.3142 8.53642 9.14131 7.96167 8.94665 7.63436Z',
                    }),
                    (0, z.jsx)('path', {
                      d: 'M7.94455 7.04693C7.55519 7.04693 5.98792 4.52182 5.98792 2.66506C5.98792 0.80829 8.92286 0.0655506 10.428 1.10534C11.9332 2.14514 8.33386 7.04697 7.94455 7.04693Z',
                    }),
                  ],
                }),
                (0, z.jsx)('defs', {
                  children: (0, z.jsx)('clipPath', {
                    id: 'clip0_4560_45564',
                    children: (0, z.jsx)('rect', {
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
      function Ae(e, t) {
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
      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ae(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ae(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var Te,
        Ee = je()(function () {
          return r.e(6787).then(r.bind(r, 66787));
        }),
        Pe = (0, fe.ZP)(he.Z)(function () {
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
        Se = (0, fe.ZP)(xe.Z)(function () {
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
        Ze = (0, fe.ZP)(G.Z)(function () {
          return {
            position: 'relative',
            overflow: 'hidden',
            '&:hover': { '.image-bar-gho': { display: 'flex', bottom: 30 } },
          };
        }),
        Be = (0, fe.ZP)(G.Z)(function () {
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
        Ie = function (e) {
          return (0, z.jsx)(J.Z, De(De({}, e), {}, { children: (0, z.jsx)(se.Z, {}) }));
        },
        Le = function (e) {
          var t = e.txHash,
            r = e.action,
            o = e.amount,
            s = e.symbol,
            d = (0, a.useState)(),
            p = d[0],
            f = d[1],
            h = (0, a.useState)(),
            x = h[0],
            b = h[1],
            m = (0, a.useState)(!1),
            v = m[0],
            j = m[1],
            g = (0, c.vR)().mainTxState,
            O = (0, l.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            w = (0, a.useRef)(null),
            k = (0, be.Z)(),
            C = (0, me.Z)(k.breakpoints.down('xsm')),
            A = (0, l.Y)(function (e) {
              return e.trackEvent;
            }),
            D = (0, te.J)({ value: o, visibleDecimals: 2, roundDown: !0 }),
            T = ''.concat(D.prefix).concat(D.postfix),
            E = 'undefined' !== typeof ClipboardItem;
          return (0, z.jsx)(z.Fragment, {
            children: (0, z.jsxs)(G.Z, {
              sx: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              },
              children: [
                (0, z.jsx)(G.Z, {
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
                  children: (0, z.jsx)(J.Z, {
                    sx: { color: 'success.main', fontSize: '32px' },
                    children: (0, z.jsx)(ce.Z, {}),
                  }),
                }),
                (0, z.jsx)(y.Z, {
                  sx: { mt: 4 },
                  variant: 'h2',
                  children: (0, z.jsx)(i.cC, { id: 'IN8luu' }),
                }),
                (0, z.jsx)(G.Z, {
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
                    (0, z.jsx)(y.Z, {
                      children: (0, z.jsx)(i.cC, {
                        id: 'wAOL+X',
                        values: { action: r, symbol: s },
                        components: {
                          0: (0, z.jsx)(te.B, {
                            value: Number(o),
                            compact: !0,
                            variant: 'secondary14',
                          }),
                        },
                      }),
                    }),
                }),
                (0, z.jsx)(he.Z, {
                  sx: { mt: 4 },
                  variant: 'outlined',
                  size: 'small',
                  endIcon: (0, z.jsx)(Ie, { style: { fontSize: 12 } }),
                  onClick: function () {
                    return A(u.Sd.GHO_BORROW_VIEW_TX_DETAILS);
                  },
                  href: O.explorerLinkBuilder({ tx: t || g.txHash }),
                  target: '_blank',
                  children: (0, z.jsx)(y.Z, {
                    variant: 'buttonS',
                    children: (0, z.jsx)(i.cC, { id: 'W1SSoD' }),
                  }),
                }),
                (0, z.jsx)(y.Z, {
                  sx: { mt: 6, mb: 4 },
                  variant: 'h2',
                  children: (0, z.jsx)(i.cC, { id: 'HrnC47' }),
                }),
                (0, z.jsx)('canvas', {
                  style: { display: 'none' },
                  width: 1169,
                  height: 900,
                  ref: w,
                }),
                p && x
                  ? (0, z.jsxs)(Ze, {
                      children: [
                        (0, z.jsx)('img', {
                          src: p,
                          alt: 'minted gho',
                          style: { maxWidth: '100%', borderRadius: '10px' },
                        }),
                        (0, z.jsxs)(Be, {
                          className: 'image-bar-gho',
                          children: [
                            E
                              ? (0, z.jsx)(Pe, {
                                  disabled: v,
                                  onClick: function () {
                                    x &&
                                      navigator.clipboard
                                        .write([new ClipboardItem((0, n.Z)({}, x.type, x))])
                                        .then(function () {
                                          A(u.Sd.GHO_COPY_IMAGE),
                                            j(!0),
                                            setTimeout(function () {
                                              j(!1);
                                            }, 5e3);
                                        })
                                        .catch(function () {
                                          A(u.Sd.GHO_FAIL_COPY_IMAGE);
                                        });
                                  },
                                  sx: { display: 'flex' },
                                  variant: 'outlined',
                                  size: 'large',
                                  startIcon: v
                                    ? (0, z.jsx)(J.Z, {
                                        sx: { color: 'white', fontSize: 16 },
                                        children: (0, z.jsx)(ce.Z, {}),
                                      })
                                    : (0, z.jsx)(ue, { style: { fontSize: 16, fill: 'white' } }),
                                  children: (0, z.jsx)(y.Z, {
                                    variant: 'buttonS',
                                    color: 'white',
                                    children: v
                                      ? (0, z.jsx)(i.cC, { id: 'EBL9Gz' })
                                      : (0, z.jsx)(i.cC, { id: 'uwAUvj' }),
                                  }),
                                })
                              : (0, z.jsx)(Pe, {
                                  download: 'minted_gho.png',
                                  href: URL.createObjectURL(x),
                                  onClick: function () {
                                    return A(u.Sd.GHO_DOWNLOAD_IMAGE);
                                  },
                                  sx: { display: 'flex' },
                                  variant: 'outlined',
                                  size: 'large',
                                  startIcon: v
                                    ? (0, z.jsx)(J.Z, {
                                        sx: { color: 'white', fontSize: 16 },
                                        children: (0, z.jsx)(ce.Z, {}),
                                      })
                                    : (0, z.jsx)(de, { style: { fontSize: 16, fill: 'white' } }),
                                  children: (0, z.jsx)(y.Z, {
                                    variant: 'buttonS',
                                    color: 'white',
                                    children: (0, z.jsx)(i.cC, { id: 'mzI/c+' }),
                                  }),
                                }),
                            (0, z.jsx)(Se, {
                              target: '_blank',
                              href: 'https://hey.xyz/?url='.concat(
                                window.location.href,
                                '&text=',
                                'I just minted '.concat(T, ' GHO'),
                                '&hashtags=Aave&preview=true'
                              ),
                              size: 'small',
                              sx: { ml: 'auto' },
                              onClick: function () {
                                return A(u.Sd.GHO_SHARE_HEY);
                              },
                              children: (0, z.jsx)(Ce, {
                                sx: { fill: '#845EEE' },
                                fontSize: 'small',
                              }),
                            }),
                            (0, z.jsx)(Se, {
                              target: '_blank',
                              href: 'https://twitter.com/intent/tweet?text=I Just minted '.concat(
                                T,
                                ' GHO'
                              ),
                              sx: { ml: 2 },
                              onClick: function () {
                                return A(u.Sd.GHO_SHARE_TWITTER);
                              },
                              children: (0, z.jsx)(pe.Z, {
                                fontSize: 'small',
                                sx: { fill: '#33CEFF' },
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, z.jsxs)(z.Fragment, {
                      children: [
                        (0, z.jsx)(ve.Z, {
                          height: C ? 240 : 286,
                          sx: { borderRadius: 4, width: '100%' },
                        }),
                        (0, z.jsx)('div', {
                          style: { visibility: 'hidden', position: 'absolute' },
                          children: (0, z.jsx)(Ee, {
                            onSuccessEditing: function (e) {
                              if (w.current) {
                                var t = w.current.getContext('2d');
                                if (t) {
                                  var r = new Image();
                                  (r.onload = function () {
                                    document.fonts.ready.then(function () {
                                      var e, n;
                                      t.drawImage(r, 0, 0),
                                        f(
                                          null === (e = w.current) || void 0 === e
                                            ? void 0
                                            : e.toDataURL('png', 1)
                                        ),
                                        null === (n = w.current) ||
                                          void 0 === n ||
                                          n.toBlob(function (e) {
                                            return b(e);
                                          }, 'png');
                                    });
                                  }),
                                    (r.src = 'data:image/svg+xml;utf8,'.concat(
                                      encodeURIComponent(e.outerHTML)
                                    ));
                                }
                              }
                            },
                            text: T,
                          }),
                        }),
                      ],
                    }),
              ],
            }),
          });
        };
      function Re(e, t) {
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
      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Re(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Re(Object(r)).forEach(function (t) {
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
      })(Te || (Te = {}));
      var _e = function (e) {
          var t = e.underlyingAsset,
            r = e.isWrongNetwork,
            n = e.poolReserve,
            o = e.symbol,
            s = e.user,
            u = (0, c.vR)(),
            p = u.mainTxState,
            f = u.gasLimit,
            h = u.txError,
            x = u.close,
            D = (0, l.Y)(function (e) {
              return e.currentMarketData;
            }),
            E = (0, l.Y)(function (e) {
              return e.currentMarket;
            }),
            P = (0, j.HT)(),
            S = P.marketReferencePriceInUsd,
            Z = P.ghoReserveData,
            B = P.ghoUserData,
            I = P.ghoLoadingData,
            L = (0, ae.l)(D).data,
            R = (0, ie.b)(D).data,
            N = (0, g.ov)().borrowCap,
            _ = (0, a.useState)(''),
            M = _[0],
            H = _[1],
            W = (0, a.useState)(!1),
            U = W[0],
            V = W[1],
            Y = B.userGhoBorrowBalance > 0,
            Q = B.userDiscountTokenBalance,
            $ = !(!L || !R) && (0, d.k9)(R, L, M),
            J = (0, O.BC)(s, n),
            X = M === (J = Math.min(Number(J), Z.aaveFacilitatorRemainingCapacity).toFixed(10)),
            re = (0, b.hE)(M)
              .multipliedBy(n.formattedPriceInMarketReferenceCurrency)
              .multipliedBy(S)
              .shiftedBy(-m.$3),
            ne = (0, v.L1)({
              collateralBalanceMarketReferenceCurrency: s.totalCollateralUSD,
              borrowBalanceMarketReferenceCurrency: (0, b.hE)(s.totalBorrowsUSD).plus(re),
              currentLiquidationThreshold: s.currentLiquidationThreshold,
            }),
            se = ne.toNumber() < 1.5 && '-1' !== ne.toString(),
            ce = (0, b.hE)(M).multipliedBy(n.priceInUSD),
            le =
              B.userGhoBorrowBalance >= Z.ghoMinDebtTokenBalanceForDiscount
                ? B.userGhoAvailableToBorrowAtDiscount
                : 0,
            ue = (0, d.li)(
              Z.ghoVariableBorrowAPY,
              B.userGhoBorrowBalance,
              le,
              Z.ghoBorrowAPYWithMaxDiscount
            ),
            de =
              B.userGhoBorrowBalance + Number(M) >= Z.ghoMinDebtTokenBalanceForDiscount
                ? B.userGhoAvailableToBorrowAtDiscount
                : 0,
            pe = (0, d.li)(
              Z.ghoVariableBorrowAPY,
              B.userGhoBorrowBalance + Number(M),
              de,
              Z.ghoBorrowAPYWithMaxDiscount
            ),
            fe = void 0;
          n.borrowingEnabled || (fe = Te.BORROWING_NOT_AVAILABLE);
          var he = function () {
              return fe === Te.BORROWING_NOT_AVAILABLE
                ? (0, z.jsx)(i.cC, { id: '9CDK3/', values: { 0: n.symbol } })
                : (0, z.jsx)(z.Fragment, {});
            },
            xe = n.iconSymbol;
          return p.success
            ? (0, z.jsx)(Le, { action: (0, z.jsx)(i.cC, { id: 'fMJQZK' }), amount: M, symbol: xe })
            : (0, z.jsxs)(z.Fragment, {
                children: [
                  N.determineWarningDisplay({ borrowCap: N }),
                  (0, z.jsx)(C.W, {
                    value: M,
                    onChange: function (e) {
                      if ('-1' === e) H(J);
                      else {
                        var t = (0, w.$w)(e, n.decimals);
                        H(t);
                      }
                    },
                    usdValue: ce.toString(10),
                    assets: [{ balance: J, symbol: o, iconSymbol: xe }],
                    symbol: o,
                    capType: k.R.borrowCap,
                    isMaxSelected: X,
                    maxValue: J,
                    balanceText: (0, z.jsx)(i.cC, { id: 'csDS2L' }),
                  }),
                  void 0 !== fe &&
                    (0, z.jsx)(y.Z, {
                      variant: 'helperText',
                      color: 'error.main',
                      children: (0, z.jsx)(he, {}),
                    }),
                  (0, z.jsxs)(T.m6, {
                    gasLimit: f,
                    children: [
                      (0, z.jsx)(T.jz, {
                        visibleHfChange: !!M,
                        healthFactor: s.healthFactor,
                        futureHealthFactor: ne.toString(10),
                      }),
                      (0, z.jsx)(oe.X, {
                        caption: (0, z.jsx)(G.Z, {
                          children: (0, z.jsx)(ee.n, {
                            text: (0, z.jsx)(i.cC, { id: '6yAAbq' }),
                            variant: 'subheader2',
                            color: 'text.secondary',
                          }),
                        }),
                        captionVariant: 'description',
                        mb: 4,
                        align: 'flex-start',
                        children: (0, z.jsx)(G.Z, {
                          sx: { textAlign: 'right' },
                          children: (0, z.jsx)(G.Z, {
                            sx: {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-end',
                            },
                            children: (0, z.jsx)(Me, {
                              ghoLoadingData: I,
                              hasGhoBorrowPositions: Y,
                              borrowAmount: M,
                              discountAvailable: $,
                              userDiscountTokenBalance: B.userDiscountTokenBalance,
                              underlyingAsset: t,
                              customMarket: E,
                              currentBorrowAPY: ue,
                              futureBorrowAPY: pe,
                              onDetailsClick: function () {
                                return x();
                              },
                            }),
                          }),
                        }),
                      }),
                      $ &&
                        (0, z.jsx)(y.Z, {
                          variant: 'helperText',
                          color: 'text.secondary',
                          children: (0, z.jsx)(i.cC, {
                            id: 'ntkAoE',
                            components: {
                              0: (0, z.jsx)(te.B, {
                                variant: 'helperText',
                                color: 'text.secondary',
                                visibleDecimals: 2,
                                value: Q,
                              }),
                            },
                          }),
                        }),
                    ],
                  }),
                  h && (0, z.jsx)(A.Q, { txError: h }),
                  se &&
                    (0, z.jsx)(q, {
                      riskCheckboxAccepted: U,
                      onRiskCheckboxChange: function () {
                        V(!U);
                      },
                    }),
                  (0, z.jsx)(K, { underlyingAsset: t }),
                  (0, z.jsx)(F, {
                    poolReserve: n,
                    amountToBorrow: M,
                    poolAddress: n.underlyingAsset,
                    isWrongNetwork: r,
                    symbol: o,
                    blocked: void 0 !== fe || (se && !U),
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
            return (0, z.jsx)(ne.J, { variant: 'secondary14', color: 'text.secondary' });
          var d = {
            stkAaveBalance: i || 0,
            ghoRoute: re.Z6.reserveOverview(a, s) + '/#discount',
            userQualifiesForDiscount: o,
            'data-cy': 'apyType',
          };
          return r || '' === n
            ? r && '' === n
              ? (0, z.jsx)(X.B, Ne({ withTokenIcon: o, value: c, onMoreDetailsClick: u }, d))
              : o
                ? o
                  ? (0, z.jsxs)(z.Fragment, {
                      children: [
                        (0, z.jsx)(
                          X.B,
                          Ne({ withTokenIcon: !0, value: c, onMoreDetailsClick: u }, d)
                        ),
                        !!n &&
                          (0, z.jsxs)(z.Fragment, {
                            children: [
                              r &&
                                (0, z.jsx)(J.Z, {
                                  color: 'primary',
                                  sx: { fontSize: '14px', mx: 1 },
                                  children: (0, z.jsx)($.Z, {}),
                                }),
                              (0, z.jsx)(X.B, Ne({ value: t ? -1 : l }, d)),
                            ],
                          }),
                      ],
                    })
                  : (0, z.jsx)(ne.J, { variant: 'secondary14', color: 'text.secondary' })
                : (0, z.jsx)(X.B, Ne({ value: c, onMoreDetailsClick: u }, d))
            : (0, z.jsx)(X.B, Ne({ withTokenIcon: o, value: l }, d));
        };
      function ze(e, t) {
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
      function He(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ze(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ze(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var We = function () {
        var e = (0, c.vR)(),
          t = e.type,
          r = e.close,
          n = e.args,
          x = (0, a.useState)(!0),
          b = x[0],
          m = x[1],
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
        return (0, z.jsx)(f.P, {
          open: t === c.w8.Borrow,
          setOpen: r,
          children: (0, z.jsx)(h.A, {
            action: 'borrow',
            title: (0, z.jsx)(i.cC, { id: 'T6uYU2' }),
            underlyingAsset: n.underlyingAsset,
            keepWrappedSymbol: !b,
            children: function (e) {
              return (0, z.jsx)(s.X, {
                children: function (t) {
                  return (0, d.F$)({ symbol: e.symbol, currentMarket: g })
                    ? (0, z.jsx)(_e, He(He({}, e), {}, { user: t }))
                    : (0, z.jsx)(Q, He(He({}, e), {}, { user: t, unwrap: b, setUnwrap: O }));
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
        f = r(37096),
        h = r(19408),
        x = r(40429),
        b = r(85893),
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
            k = (0, u.Y)(function (e) {
              return e.currentMarketData;
            }),
            C = (0, u.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            A = (0, i.P)(k).walletBalances,
            D = (0, o.HT)(),
            T = D.user,
            E = D.reserves,
            P = (0, c.vR)(),
            S = P.txError,
            Z = P.mainTxState,
            B = (0, s.Q)(j),
            I = B.isWrongNetwork,
            L = B.requiredChainId;
          if (S && S.blocking) return (0, b.jsx)(x.D, { txError: S });
          var R = E.find(function (e) {
              return v.toLowerCase() === n.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : v === e.underlyingAsset;
            }),
            N =
              null === T || void 0 === T
                ? void 0
                : T.userReservesData.find(function (e) {
                    return v.toLowerCase() === n.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : v === e.underlyingAsset;
                  }),
            _ = R.isWrappedBaseAsset && !O ? C.baseAssetSymbol : R.symbol;
          return (0, b.jsxs)(a.hv, {
            asset: R,
            children: [
              !Z.success && (0, b.jsx)(f.E, { title: g, symbol: m ? void 0 : _ }),
              I &&
                !w &&
                (0, b.jsx)(h.I, {
                  networkName: (0, p.Mo)(L).name,
                  chainId: L,
                  event: { eventName: d.vh.SWITCH_NETWORK, eventParams: { asset: v } },
                }),
              y({
                isWrongNetwork: I,
                nativeBalance:
                  (null === (t = A[n.hP.toLowerCase()]) || void 0 === t ? void 0 : t.amount) || '0',
                tokenBalance:
                  (null === (r = A[R.underlyingAsset.toLowerCase()]) || void 0 === r
                    ? void 0
                    : r.amount) || '0',
                poolReserve: R,
                symbol: _,
                underlyingAsset: v,
                userReserve: N,
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
    50060: function (e, t, r) {
      r.d(t, {
        P: function () {
          return v;
        },
      });
      var n = r(80854),
        o = r(1279),
        i = r(81206),
        a = r(82403),
        s = r(70794),
        c = r(3062),
        l = r(79850),
        u = r(47892),
        d = r(59499),
        p = r(99673),
        f = r(52251),
        h = r(13441);
      function x(e, t) {
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
      var b = function (e, t, r) {
          var n = (0, h.z)().poolTokensBalanceService;
          return (0, p.h)({
            queries: e.map(function (e) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? x(Object(r), !0).forEach(function (t) {
                        (0, d.Z)(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                      : x(Object(r)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                }
                return e;
              })(
                {
                  queryKey: f.B.poolTokens(t, e),
                  queryFn: function () {
                    return n.getPoolTokensBalances(e, t);
                  },
                  enabled: !!t,
                  refetchInterval: f.g,
                },
                r
              );
            }),
          });
        },
        m = function (e) {
          var t = (0, c.Y)(function (e) {
              return e.account;
            }),
            r = b(e, t),
            d = (0, u.T)(e),
            p =
              r.some(function (e) {
                return e.isLoading;
              }) ||
              d.some(function (e) {
                return e.isLoading;
              });
          return {
            walletBalances: d.map(function (t, c) {
              var u;
              return (function (e) {
                var t = e.reservesHumanized,
                  r = e.balances,
                  c = e.marketData,
                  u = (null === t || void 0 === t ? void 0 : t.reservesData) || [],
                  d = (null === t || void 0 === t ? void 0 : t.baseCurrencyData) || {
                    marketReferenceCurrencyDecimals: 0,
                    marketReferenceCurrencyPriceInUsd: '0',
                    networkBaseTokenPriceInUsd: '0',
                    networkBaseTokenPriceDecimals: 0,
                  },
                  p = !0;
                return {
                  walletBalances: (null !== r && void 0 !== r ? r : []).reduce(function (e, t) {
                    var r = u.find(function (e) {
                      var r;
                      return t.address === n.hP.toLowerCase()
                        ? e.symbol.toLowerCase() ===
                            (null === (r = l.m5[c.chainId].wrappedBaseAssetSymbol) || void 0 === r
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
                            amount: new s.O(t.amount),
                            currencyDecimals: r.decimals,
                            priceInMarketReferenceCurrency: r.priceInMarketReferenceCurrency,
                            marketReferenceCurrencyDecimals: d.marketReferenceCurrencyDecimals,
                            normalizedMarketReferencePriceInUsd: (0, o.Fv)(
                              d.marketReferenceCurrencyPriceInUsd,
                              a.$3
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
                balances: null === (u = r[c]) || void 0 === u ? void 0 : u.data,
                marketData: e[c],
              });
            }),
            isLoading: p,
          };
        },
        v = function (e) {
          var t = m([e]),
            r = t.walletBalances,
            n = t.isLoading;
          return {
            walletBalances: r[0].walletBalances,
            hasEmptyWallet: r[0].hasEmptyWallet,
            loading: n,
          };
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
        i = r(21046),
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
              ? (0, n.hE)(i.Bz.toString())
              : (0, n.hE)(Number(e.borrowCap)).minus((0, n.hE)(e.totalDebt)),
          f = o.O.max(o.O.min(e.formattedAvailableLiquidity, p), 0),
          h = (0, n.hE)(
            (null === t || void 0 === t ? void 0 : t.availableBorrowsMarketReferenceCurrency) || 0
          ).div(e.formattedPriceInMarketReferenceCurrency),
          x = o.O.min(h, f),
          b =
            x.gte(h) ||
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
              ? x.multipliedBy('0.99')
              : x;
        return (0, a.$w)(b.toString(10), e.decimals);
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
              ? (0, n.hE)(i.Bz.toString())
              : (0, n.hE)(Number(t.borrowCap)).minus((0, n.hE)(t.totalDebt)),
          p = o.O.max(o.O.min(u, d), 0),
          f =
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
        return (0, a.$w)(f.toString(10), 18);
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
    64343: function (e, t, r) {
      var n = r(67294);
      const o = n.forwardRef(function (e, t) {
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
            d: 'M5 13l4 4L19 7',
          })
        );
      });
      t.Z = o;
    },
    52758: function (e, t, r) {
      var n = r(67294);
      const o = n.forwardRef(function (e, t) {
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
            d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
          })
        );
      });
      t.Z = o;
    },
    80227: function (e, t, r) {
      var n = r(67294);
      const o = n.forwardRef(function (e, t) {
        return n.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          n.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z',
            clipRule: 'evenodd',
          })
        );
      });
      t.Z = o;
    },
    33740: function (e, t, r) {
      var n = r(67294);
      const o = n.forwardRef(function (e, t) {
        return n.createElement(
          'svg',
          Object.assign(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
              fill: 'currentColor',
              'aria-hidden': 'true',
              ref: t,
            },
            e
          ),
          n.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z',
            clipRule: 'evenodd',
          })
        );
      });
      t.Z = o;
    },
    36864: function (e, t, r) {
      function n() {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
  },
]);
