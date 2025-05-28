'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5071],
  {
    21386: function (e, t, r) {
      var n = r(64836);
      t.Z = void 0;
      var i = n(r(64938)),
        o = r(85893);
      t.Z = (0, i.default)(
        (0, o.jsx)('path', {
          d: 'M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0z',
        }),
        'CheckRounded'
      );
    },
    49212: function (e, t, r) {
      r.d(t, {
        G: function () {
          return v;
        },
      });
      var n = r(59499),
        i = r(4730),
        o = r(38264),
        s = r(80822),
        a = r(15861),
        c = r(93946),
        l = r(53219),
        d = r(67294),
        u = r(3062),
        p = r(2127),
        x = r(85893),
        h = ['sx'],
        j = [
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
      function m(e) {
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
      var v = function (e) {
        var t = e.text,
          r = e.icon,
          n = e.iconSize,
          f = void 0 === n ? 14 : n,
          v = e.iconColor,
          b = e.iconMargin,
          g = e.children,
          y = e.textColor,
          O = e.wrapperProps,
          Z = (O = void 0 === O ? {} : O).sx,
          E = (0, i.Z)(O, h),
          w = e.event,
          C = e.open,
          I = void 0 !== C && C,
          S = e.setOpen,
          D = (0, i.Z)(e, j),
          P = (0, d.useState)(I),
          k = P[0],
          T = P[1],
          N = (0, u.Y)(function (e) {
            return e.trackEvent;
          });
        return (0, x.jsxs)(
          s.Z,
          m(
            m({ sx: m({ display: 'flex', alignItems: 'center' }, Z) }, E),
            {},
            {
              children: [
                t && (0, x.jsx)(a.Z, m(m({}, D), {}, { color: y, children: t })),
                (0, x.jsx)(p.a, {
                  tooltipContent: (0, x.jsx)(x.Fragment, { children: g }),
                  open: k,
                  setOpen: function () {
                    S && S(!k), T(!k);
                  },
                  children: (0, x.jsx)(c.Z, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: f,
                      height: f,
                      borderRadius: '50%',
                      p: 0,
                      minWidth: 0,
                      ml: b || 0.5,
                    },
                    onClick: function () {
                      w && N(w.eventName, m({}, w.eventParams));
                    },
                    children: (0, x.jsx)(l.Z, {
                      sx: {
                        fontSize: f,
                        color: v || (k ? 'info.main' : 'text.muted'),
                        borderRadius: '50%',
                        '&:hover': { color: v || 'info.main' },
                      },
                      children: r || (0, x.jsx)(o.Z, {}),
                    }),
                  }),
                }),
              ],
            }
          )
        );
      };
    },
    12512: function (e, t, r) {
      r.d(t, {
        y: function () {
          return d;
        },
      });
      var n = r(59499),
        i = r(36864),
        o = r(57499),
        s = r(49212),
        a = r(85893);
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
      var d = function (e) {
        var t = (0, i.Z)({}, e);
        return (0, a.jsx)(s.G, l(l({}, t), {}, { children: (0, a.jsx)(o.cC, { id: 'UbRrG0' }) }));
      };
    },
    35783: function (e, t, r) {
      r.d(t, {
        v: function () {
          return d;
        },
      });
      var n = r(59499),
        i = r(4730),
        o = r(21737),
        s = r(85893),
        a = ['children', 'sx'];
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
      var d = function (e) {
        var t = e.children,
          r = e.sx,
          n = (0, i.Z)(e, a),
          c = l({ mb: 6, alignItems: 'center', width: '100%' }, r);
        return (0, s.jsx)(o.Z, l(l({ sx: c }, n), {}, { children: t }));
      };
    },
    45071: function (e, t, r) {
      r.r(t),
        r.d(t, {
          EmodeModal: function () {
            return Ie;
          },
        });
      var n = r(67294),
        i = r(49679),
        o = r(44949),
        s = r(15629),
        a = r(59499),
        c = r(17674),
        l = r(57499),
        d = r(48949),
        u = r(80227),
        p = r(21386),
        x = r(50594),
        h = r(15861),
        j = r(53219),
        f = r(45843),
        m = r(63366),
        v = r(87462),
        b = r(63961),
        g = r(8662),
        y = r(46271),
        O = r(94780),
        Z = r(90948),
        E = r(28628),
        w = r(96067),
        C = r(30577),
        I = r(2734),
        S = r(51705),
        D = r(1588),
        P = r(34867);
      function k(e) {
        return (0, P.ZP)('MuiCollapse', e);
      }
      (0, D.Z)('MuiCollapse', [
        'root',
        'horizontal',
        'vertical',
        'entered',
        'hidden',
        'wrapper',
        'wrapperInner',
      ]);
      var T = r(85893);
      const N = [
          'addEndListener',
          'children',
          'className',
          'collapsedSize',
          'component',
          'easing',
          'in',
          'onEnter',
          'onEntered',
          'onEntering',
          'onExit',
          'onExited',
          'onExiting',
          'orientation',
          'style',
          'timeout',
          'TransitionComponent',
        ],
        M = (0, Z.ZP)('div', {
          name: 'MuiCollapse',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: r } = e;
            return [
              t.root,
              t[r.orientation],
              'entered' === r.state && t.entered,
              'exited' === r.state && !r.in && '0px' === r.collapsedSize && t.hidden,
            ];
          },
        })(({ theme: e, ownerState: t }) =>
          (0, v.Z)(
            { height: 0, overflow: 'hidden', transition: e.transitions.create('height') },
            'horizontal' === t.orientation && {
              height: 'auto',
              width: 0,
              transition: e.transitions.create('width'),
            },
            'entered' === t.state &&
              (0, v.Z)(
                { height: 'auto', overflow: 'visible' },
                'horizontal' === t.orientation && { width: 'auto' }
              ),
            'exited' === t.state && !t.in && '0px' === t.collapsedSize && { visibility: 'hidden' }
          )
        ),
        R = (0, Z.ZP)('div', {
          name: 'MuiCollapse',
          slot: 'Wrapper',
          overridesResolver: (e, t) => t.wrapper,
        })(({ ownerState: e }) =>
          (0, v.Z)(
            { display: 'flex', width: '100%' },
            'horizontal' === e.orientation && { width: 'auto', height: '100%' }
          )
        ),
        z = (0, Z.ZP)('div', {
          name: 'MuiCollapse',
          slot: 'WrapperInner',
          overridesResolver: (e, t) => t.wrapperInner,
        })(({ ownerState: e }) =>
          (0, v.Z)(
            { width: '100%' },
            'horizontal' === e.orientation && { width: 'auto', height: '100%' }
          )
        ),
        F = n.forwardRef(function (e, t) {
          const r = (0, E.i)({ props: e, name: 'MuiCollapse' }),
            {
              addEndListener: i,
              children: o,
              className: s,
              collapsedSize: a = '0px',
              component: c,
              easing: l,
              in: d,
              onEnter: u,
              onEntered: p,
              onEntering: x,
              onExit: h,
              onExited: j,
              onExiting: f,
              orientation: Z = 'vertical',
              style: D,
              timeout: P = w.x9.standard,
              TransitionComponent: F = g.ZP,
            } = r,
            L = (0, m.Z)(r, N),
            A = (0, v.Z)({}, r, { orientation: Z, collapsedSize: a }),
            _ = ((e) => {
              const { orientation: t, classes: r } = e,
                n = {
                  root: ['root', `${t}`],
                  entered: ['entered'],
                  hidden: ['hidden'],
                  wrapper: ['wrapper', `${t}`],
                  wrapperInner: ['wrapperInner', `${t}`],
                };
              return (0, O.Z)(n, k, r);
            })(A),
            U = (0, I.Z)(),
            W = (0, y.Z)(),
            B = n.useRef(null),
            H = n.useRef(),
            V = 'number' === typeof a ? `${a}px` : a,
            G = 'horizontal' === Z,
            $ = G ? 'width' : 'height',
            Q = n.useRef(null),
            Y = (0, S.Z)(t, Q),
            X = (e) => (t) => {
              if (e) {
                const r = Q.current;
                void 0 === t ? e(r) : e(r, t);
              }
            },
            q = () => (B.current ? B.current[G ? 'clientWidth' : 'clientHeight'] : 0),
            J = X((e, t) => {
              B.current && G && (B.current.style.position = 'absolute'),
                (e.style[$] = V),
                u && u(e, t);
            }),
            K = X((e, t) => {
              const r = q();
              B.current && G && (B.current.style.position = '');
              const { duration: n, easing: i } = (0, C.C)(
                { style: D, timeout: P, easing: l },
                { mode: 'enter' }
              );
              if ('auto' === P) {
                const t = U.transitions.getAutoHeightDuration(r);
                (e.style.transitionDuration = `${t}ms`), (H.current = t);
              } else e.style.transitionDuration = 'string' === typeof n ? n : `${n}ms`;
              (e.style[$] = `${r}px`), (e.style.transitionTimingFunction = i), x && x(e, t);
            }),
            ee = X((e, t) => {
              (e.style[$] = 'auto'), p && p(e, t);
            }),
            te = X((e) => {
              (e.style[$] = `${q()}px`), h && h(e);
            }),
            re = X(j),
            ne = X((e) => {
              const t = q(),
                { duration: r, easing: n } = (0, C.C)(
                  { style: D, timeout: P, easing: l },
                  { mode: 'exit' }
                );
              if ('auto' === P) {
                const r = U.transitions.getAutoHeightDuration(t);
                (e.style.transitionDuration = `${r}ms`), (H.current = r);
              } else e.style.transitionDuration = 'string' === typeof r ? r : `${r}ms`;
              (e.style[$] = V), (e.style.transitionTimingFunction = n), f && f(e);
            });
          return (0, T.jsx)(
            F,
            (0, v.Z)(
              {
                in: d,
                onEnter: J,
                onEntered: ee,
                onEntering: K,
                onExit: te,
                onExited: re,
                onExiting: ne,
                addEndListener: (e) => {
                  'auto' === P && W.start(H.current || 0, e), i && i(Q.current, e);
                },
                nodeRef: Q,
                timeout: 'auto' === P ? null : P,
              },
              L,
              {
                children: (e, t) =>
                  (0, T.jsx)(
                    M,
                    (0, v.Z)(
                      {
                        as: c,
                        className: (0, b.Z)(
                          _.root,
                          s,
                          { entered: _.entered, exited: !d && '0px' === V && _.hidden }[e]
                        ),
                        style: (0, v.Z)({ [G ? 'minWidth' : 'minHeight']: V }, D),
                        ref: Y,
                      },
                      t,
                      {
                        ownerState: (0, v.Z)({}, A, { state: e }),
                        children: (0, T.jsx)(R, {
                          ownerState: (0, v.Z)({}, A, { state: e }),
                          className: _.wrapper,
                          ref: B,
                          children: (0, T.jsx)(z, {
                            ownerState: (0, v.Z)({}, A, { state: e }),
                            className: _.wrapperInner,
                            children: o,
                          }),
                        }),
                      }
                    )
                  ),
              }
            )
          );
        });
      F.muiSupportAuto = !0;
      var L,
        A = F,
        _ = r(26447),
        U = r(80822),
        W = r(10315),
        B = r(18972),
        H = r(67720),
        V = r(72882),
        G = r(7906),
        $ = r(53184),
        Q = r(53816),
        Y = r(89755),
        X = r(98102),
        q = r(295),
        J = r(12512),
        K = r(32867),
        ee = r(38577),
        te = r(20986),
        re = r(45640),
        ne = r(35783),
        ie = r(60377),
        oe = r(87970),
        se = r(72005),
        ae = r(3062),
        ce = r(79850),
        le = r(40429),
        de = r(83063),
        ue = r(44880),
        pe = r(67944),
        xe = r(37096),
        he = r(19408),
        je = r(50029),
        fe = r(87794),
        me = r.n(fe),
        ve = r(75331),
        be = r(92997),
        ge = r(84207),
        ye = r(56570),
        Oe = function (e) {
          var t = e.isWrongNetwork,
            r = e.blocked,
            n = e.selectedEmode,
            i = e.activeEmode,
            o = e.eModes,
            s = (0, ae.Y)(function (e) {
              return e.setUserEMode;
            }),
            a = (0, be.Q)({
              tryPermit: !1,
              handleGetTxns: (function () {
                var e = (0, je.Z)(
                  me().mark(function e() {
                    return me().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt('return', s(n));
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
              skip: r,
              deps: [n],
              protocolAction: ve.UQ.setEModeUsage,
              eventTxInfo: {
                previousState: (0, ye.U)(o[i].label),
                newState: (0, ye.U)(o[n].label),
              },
            }),
            c = a.action,
            d = a.loadingTxns,
            u = a.mainTxState,
            p = a.requiresApproval;
          return (0, T.jsx)(ge.B, {
            requiresApproval: p,
            blocked: r,
            mainTxState: u,
            preparingTransactions: d,
            handleAction: c,
            actionText:
              0 === i
                ? (0, T.jsx)(l.cC, { id: 'jKYzR1' })
                : 0 !== n
                  ? (0, T.jsx)(l.cC, { id: 'GQrBTq' })
                  : (0, T.jsx)(l.cC, { id: 'jG3UJ7' }),
            actionInProgressText:
              0 === i
                ? (0, T.jsx)(l.cC, { id: 'YDIOks' })
                : 0 !== n
                  ? (0, T.jsx)(l.cC, { id: 'KkPgim' })
                  : (0, T.jsx)(l.cC, { id: 'Sk2zW9' }),
            isWrongNetwork: t,
          });
        };
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
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ze(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Ze(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function we(e, t) {
        var r = t.assets
          .filter(function (e) {
            return e.borrowable;
          })
          .map(function (e) {
            return e.underlyingAsset;
          });
        return !e.userReservesData.some(function (e) {
          return Number(e.scaledVariableDebt) > 0 && !r.includes(e.reserve.underlyingAsset);
        });
      }
      !(function (e) {
        (e[(e.EMODE_DISABLED_LIQUIDATION = 0)] = 'EMODE_DISABLED_LIQUIDATION'),
          (e[(e.CLOSE_POSITIONS_BEFORE_SWITCHING = 1)] = 'CLOSE_POSITIONS_BEFORE_SWITCHING');
      })(L || (L = {}));
      var Ce = function (e) {
          var t = e.user,
            r = (0, ie.HT)(),
            i = r.reserves,
            s = r.eModes,
            m = r.marketReferenceCurrencyDecimals,
            v = r.marketReferencePriceInUsd,
            b = r.userReserves,
            g = (0, ae.Y)(function (e) {
              return e.currentChainId;
            }),
            y = (0, se.Z)(),
            O = y.chainId,
            Z = y.readOnlyModeAddress,
            E = (0, oe.p)(1),
            w = (0, o.vR)(),
            C = w.gasLimit,
            I = w.mainTxState,
            S = w.txError,
            D = (0, n.useState)(!1),
            P = D[0],
            k = D[1],
            N = Object.fromEntries(
              Object.entries(s).map(function (e) {
                var r = (0, c.Z)(e, 2),
                  n = r[0],
                  i = r[1];
                return [n, Ee(Ee({}, i), {}, { available: we(t, i) })];
              })
            ),
            M = (0, n.useState)(0 === t.userEmodeCategoryId ? N[1] : N[t.userEmodeCategoryId]),
            R = M[0],
            z = M[1],
            F = (0, ce.Mo)(g),
            je = (0, d.G)({
              currentTimestamp: E,
              userReserves: b,
              formattedReserves: i,
              userEmodeCategoryId: P ? 0 : R.id,
              marketReferenceCurrencyDecimals: m,
              marketReferencePriceInUsd: v,
            }),
            fe = void 0;
          t.isInEmode &&
            P &&
            Number(je.healthFactor) < 1.01 &&
            '-1' !== je.healthFactor &&
            (fe = L.EMODE_DISABLED_LIQUIDATION);
          var me = function () {
              return fe === L.EMODE_DISABLED_LIQUIDATION
                ? (0, T.jsxs)(ne.v, {
                    severity: 'error',
                    sx: { mt: 6, alignItems: 'center' },
                    children: [
                      (0, T.jsx)(h.Z, {
                        variant: 'subheader1',
                        color: '#4F1919',
                        children: (0, T.jsx)(l.cC, { id: 'bxN6EM' }),
                      }),
                      (0, T.jsx)(h.Z, {
                        variant: 'caption',
                        children: (0, T.jsx)(l.cC, { id: 'g0mals' }),
                      }),
                    ],
                  })
                : null;
            },
            ve = g !== O,
            be = function () {
              return (0, T.jsx)(j.Z, {
                color: 'primary',
                sx: { fontSize: '14px', mx: 1 },
                children: (0, T.jsx)(u.Z, {}),
              });
            },
            ge =
              0 !== t.userEmodeCategoryId &&
              P &&
              void 0 === fe &&
              Number(je.healthFactor).toFixed(3) < Number(t.healthFactor).toFixed(3),
            ye =
              '0' !== t.currentLoanToValue &&
              Number(je.currentLoanToValue).toFixed(3) !== Number(t.currentLoanToValue).toFixed(3);
          if (S && S.blocking) return (0, T.jsx)(le.D, { txError: S });
          if (I.success) return (0, T.jsx)(ue.R, { action: (0, T.jsx)(l.cC, { id: 'LvVpD/' }) });
          return (0, T.jsxs)(T.Fragment, {
            children: [
              (0, T.jsx)(xe.E, { title: (0, T.jsx)(l.cC, { id: 'ZSqEW+' }) }),
              ve && !Z && (0, T.jsx)(he.I, { networkName: F.name, chainId: g }),
              (0, T.jsx)(h.Z, {
                variant: 'caption',
                children: (0, T.jsx)(l.cC, {
                  id: 'jSYv+Z',
                  components: {
                    0: (0, T.jsx)(ee.rU, {
                      sx: { textDecoration: 'underline' },
                      variant: 'caption',
                      href: 'https://aave.com/help/borrowing/e-mode',
                      target: '_blank',
                      rel: 'noopener',
                    }),
                  },
                }),
              }),
              fe === L.EMODE_DISABLED_LIQUIDATION && (0, T.jsx)(me, {}),
              ge &&
                (0, T.jsxs)(ne.v, {
                  severity: 'error',
                  sx: { mt: 6, alignItems: 'center' },
                  children: [
                    (0, T.jsx)(h.Z, {
                      variant: 'subheader1',
                      color: '#4F1919',
                      children: (0, T.jsx)(l.cC, { id: '0jhlyw' }),
                    }),
                    (0, T.jsx)(h.Z, {
                      variant: 'caption',
                      children: (0, T.jsx)(l.cC, { id: 'YSodyW' }),
                    }),
                  ],
                }),
              (0, T.jsxs)(pe.m6, {
                gasLimit: C,
                children: [
                  0 !== t.userEmodeCategoryId &&
                    (0, T.jsx)(te.X, {
                      caption: (0, T.jsx)(l.cC, { id: 'jG3UJ7' }),
                      captionVariant: 'description',
                      mb: 4,
                      children: (0, T.jsx)(f.Z, {
                        disableRipple: !0,
                        checked: P,
                        onClick: function () {
                          return k(!P);
                        },
                      }),
                    }),
                  (0, T.jsxs)(A, {
                    in: P,
                    children: [
                      (0, T.jsx)(te.X, {
                        captionVariant: 'description',
                        my: 2,
                        caption: (0, T.jsx)(J.y, {
                          variant: 'description',
                          text: (0, T.jsx)(l.cC, { id: '3mXg0z' }),
                        }),
                        children: (0, T.jsxs)(_.Z, {
                          direction: 'row',
                          children: [
                            ye &&
                              (0, T.jsxs)(T.Fragment, {
                                children: [
                                  (0, T.jsx)(K.B, {
                                    percent: !0,
                                    visibleDecimals: 2,
                                    value: t.currentLoanToValue,
                                    variant: 'secondary12',
                                  }),
                                  (0, T.jsx)(be, {}),
                                ],
                              }),
                            (0, T.jsx)(K.B, {
                              percent: !0,
                              visibleDecimals: 2,
                              value: je.currentLoanToValue,
                              variant: 'secondary12',
                            }),
                          ],
                        }),
                      }),
                      (0, T.jsx)(pe.jz, {
                        visibleHfChange: !!R,
                        healthFactor: t.healthFactor,
                        futureHealthFactor: je.healthFactor,
                      }),
                    ],
                  }),
                  (0, T.jsx)(A, {
                    in: !P,
                    children: (0, T.jsxs)(U.Z, {
                      children: [
                        (0, T.jsxs)(_.Z, {
                          direction: 'column',
                          children: [
                            (0, T.jsx)(h.Z, {
                              mb: 1,
                              variant: 'caption',
                              color: 'text.secondary',
                              children: (0, T.jsx)(l.cC, { id: 'BnhYo8' }),
                            }),
                            (0, T.jsx)(W.Z, {
                              sx: {
                                mb: 3,
                                width: '100%',
                                height: '44px',
                                borderRadius: '6px',
                                borderColor: 'divider',
                                outline: 'none !important',
                                color: 'text.primary',
                                '.MuiOutlinedInput-input': { backgroundColor: 'transparent' },
                                '&:hover .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline':
                                  {
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
                              value: R.id,
                              onChange: function (e) {
                                return (function (e) {
                                  var t = N[e];
                                  if (!t) throw new Error('EMode with id '.concat(e, ' not found'));
                                  z(t);
                                })(Number(e.target.value));
                              },
                              children: Object.values(N)
                                .filter(function (e) {
                                  return 0 !== e.id;
                                })
                                .sort(function (e, t) {
                                  return e.available !== t.available
                                    ? e.available
                                      ? -1
                                      : 1
                                    : e.id - t.id;
                                })
                                .map(function (e) {
                                  return (0, T.jsx)(
                                    B.Z,
                                    {
                                      value: e.id,
                                      children: (0, T.jsxs)(_.Z, {
                                        sx: { width: '100%' },
                                        direction: 'row',
                                        justifyContent: 'space-between',
                                        children: [
                                          (0, T.jsx)(h.Z, {
                                            sx: { opacity: e.available ? 1 : 0.5 },
                                            fontStyle: e.available ? 'normal' : 'italic',
                                            children: e.label,
                                          }),
                                          e.id === t.userEmodeCategoryId &&
                                            (0, T.jsxs)(U.Z, {
                                              sx: { display: 'inline-flex', alignItems: 'center' },
                                              children: [
                                                (0, T.jsx)(U.Z, {
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
                                                (0, T.jsx)(h.Z, {
                                                  variant: 'subheader2',
                                                  color: 'success.main',
                                                  children: (0, T.jsx)(l.cC, { id: 'RxzN1M' }),
                                                }),
                                              ],
                                            }),
                                          !e.available &&
                                            (0, T.jsx)(h.Z, {
                                              variant: 'caption',
                                              color: 'text.secondary',
                                              fontStyle: 'italic',
                                              children: (0, T.jsx)(l.cC, { id: 'jqzUyM' }),
                                            }),
                                        ],
                                      }),
                                    },
                                    e.id
                                  );
                                }),
                            }),
                          ],
                        }),
                        !R.available &&
                          (0, T.jsx)(h.Z, {
                            variant: 'caption',
                            color: 'text.secondary',
                            sx: { mb: 3 },
                            children: (0, T.jsx)(l.cC, { id: 'olREoo' }),
                          }),
                        (0, T.jsx)(H.Z, {}),
                        (0, T.jsx)(te.X, {
                          captionVariant: 'description',
                          my: 2,
                          caption: (0, T.jsx)(J.y, {
                            variant: 'description',
                            text: (0, T.jsx)(l.cC, { id: '3mXg0z' }),
                          }),
                          children: (0, T.jsxs)(_.Z, {
                            direction: 'row',
                            children: [
                              ye &&
                                (0, T.jsxs)(T.Fragment, {
                                  children: [
                                    (0, T.jsx)(K.B, {
                                      percent: !0,
                                      visibleDecimals: 2,
                                      value: t.currentLoanToValue,
                                      variant: 'secondary12',
                                    }),
                                    (0, T.jsx)(be, {}),
                                  ],
                                }),
                              (0, T.jsx)(K.B, {
                                percent: !0,
                                visibleDecimals: 2,
                                value: Number(R.ltv) / 1e4,
                                variant: 'secondary12',
                              }),
                            ],
                          }),
                        }),
                        (0, T.jsx)(pe.jz, {
                          visibleHfChange: R.id !== t.userEmodeCategoryId,
                          healthFactor: t.healthFactor,
                          futureHealthFactor: je.healthFactor,
                        }),
                        (0, T.jsx)(V.Z, {
                          sx: { maxHeight: '270px' },
                          children: (0, T.jsxs)(G.Z, {
                            size: 'small',
                            stickyHeader: !0,
                            children: [
                              (0, T.jsx)($.Z, {
                                children: (0, T.jsxs)(Q.Z, {
                                  sx: (0, a.Z)({}, '& .'.concat(Y.Z.root), {
                                    py: 2,
                                    lineHeight: 0,
                                  }),
                                  children: [
                                    (0, T.jsx)(X.Z, {
                                      align: 'center',
                                      sx: { pl: 0, width: '120px' },
                                      children: (0, T.jsx)(h.Z, {
                                        variant: 'helperText',
                                        children: (0, T.jsx)(l.cC, { id: 'bUUVED' }),
                                      }),
                                    }),
                                    (0, T.jsx)(X.Z, {
                                      align: 'center',
                                      children: (0, T.jsx)(h.Z, {
                                        variant: 'helperText',
                                        children: (0, T.jsx)(l.cC, { id: '62Xcjh' }),
                                      }),
                                    }),
                                    (0, T.jsx)(X.Z, {
                                      align: 'center',
                                      children: (0, T.jsx)(h.Z, {
                                        variant: 'helperText',
                                        children: (0, T.jsx)(l.cC, { id: 'iFq2YN' }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, T.jsx)(q.Z, {
                                sx: { width: '100%' },
                                children: R.assets.map(function (e, t) {
                                  return (0, T.jsxs)(
                                    Q.Z,
                                    {
                                      sx: (0, a.Z)({ pt: 8 }, '& .'.concat(Y.Z.root), {
                                        borderBottom: 'none',
                                        pt: 3,
                                        pb: 2,
                                      }),
                                      children: [
                                        (0, T.jsx)(X.Z, {
                                          align: 'center',
                                          sx: { py: 1 },
                                          children: (0, T.jsxs)(_.Z, {
                                            direction: 'row',
                                            gap: 1,
                                            alignItems: 'center',
                                            children: [
                                              (0, T.jsx)(re.T1, {
                                                symbol: e.iconSymbol,
                                                sx: { fontSize: '16px' },
                                              }),
                                              (0, T.jsx)(h.Z, {
                                                variant: 'secondary12',
                                                children: e.symbol,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, T.jsx)(X.Z, {
                                          align: 'center',
                                          children: e.collateral
                                            ? (0, T.jsx)(p.Z, {
                                                fontSize: 'small',
                                                color: 'success',
                                              })
                                            : (0, T.jsx)(x.Z, {
                                                fontSize: 'small',
                                                color: 'error',
                                              }),
                                        }),
                                        (0, T.jsx)(X.Z, {
                                          align: 'center',
                                          children: e.borrowable
                                            ? (0, T.jsx)(p.Z, {
                                                fontSize: 'small',
                                                color: 'success',
                                              })
                                            : (0, T.jsx)(x.Z, {
                                                fontSize: 'small',
                                                color: 'error',
                                              }),
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              S && (0, T.jsx)(de.Q, { txError: S }),
              P
                ? (0, T.jsx)(Oe, {
                    isWrongNetwork: ve,
                    blocked: void 0 !== fe,
                    selectedEmode: 0,
                    activeEmode: t.userEmodeCategoryId,
                    eModes: N,
                  })
                : (0, T.jsx)(Oe, {
                    isWrongNetwork: ve,
                    blocked: void 0 !== fe || !R.available || R.id === t.userEmodeCategoryId,
                    selectedEmode: P ? 0 : R.id,
                    activeEmode: t.userEmodeCategoryId,
                    eModes: N,
                  }),
            ],
          });
        },
        Ie = function () {
          var e = (0, o.vR)(),
            t = e.type,
            r = e.close;
          return (0, T.jsx)(s.P, {
            open: t === o.w8.Emode,
            setOpen: r,
            children: (0, T.jsx)(i.X, {
              children: function (e) {
                return (0, T.jsx)(Ce, { user: e });
              },
            }),
          });
        };
    },
    56570: function (e, t, r) {
      r.d(t, {
        U: function () {
          return n;
        },
      });
      var n = function (e) {
        return '' === e ? 'Disabled' : e;
      };
    },
    87970: function (e, t, r) {
      r.d(t, {
        p: function () {
          return s;
        },
      });
      var n = r(27484),
        i = r.n(n),
        o = r(67294);
      function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15,
          t = (0, o.useState)(0),
          r = t[0],
          n = t[1],
          s = (0, o.useState)(0),
          a = s[0],
          c = s[1];
        return (
          (0, o.useEffect)(
            function () {
              var t = setInterval(function () {
                return c(i()().unix() + r);
              }, 1e3 * e);
              return function () {
                return clearInterval(t);
              };
            },
            [e, r]
          ),
          (0, o.useEffect)(function () {
            var e = Number(localStorage.getItem('forkTimeAhead') || 0);
            n(e), c(i()().unix() + e);
          }, []),
          a
        );
      }
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
