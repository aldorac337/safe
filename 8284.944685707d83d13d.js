'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8284],
  {
    69368: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return C;
        },
      });
      var n = t(63366),
        o = t(87462),
        a = t(67294),
        s = t(63961),
        i = t(94780),
        c = t(2101),
        u = t(21964),
        l = t(82066),
        d = t(85893),
        p = (0, l.Z)(
          (0, d.jsx)('path', {
            d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
          }),
          'CheckBoxOutlineBlank'
        ),
        m = (0, l.Z)(
          (0, d.jsx)('path', {
            d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
          }),
          'CheckBox'
        ),
        f = (0, l.Z)(
          (0, d.jsx)('path', {
            d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z',
          }),
          'IndeterminateCheckBox'
        ),
        h = t(98216),
        v = t(28628),
        x = t(90948),
        y = t(14136),
        g = t(1588),
        b = t(34867);
      function A(e) {
        return (0, b.ZP)('MuiCheckbox', e);
      }
      var T = (0, g.Z)('MuiCheckbox', [
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
        S = (0, x.ZP)(u.Z, {
          shouldForwardProp: (e) => (0, y.Z)(e) || 'classes' === e,
          name: 'MuiCheckbox',
          slot: 'Root',
          overridesResolver: (e, r) => {
            const { ownerState: t } = e;
            return [
              r.root,
              t.indeterminate && r.indeterminate,
              r[`size${(0, h.Z)(t.size)}`],
              'default' !== t.color && r[`color${(0, h.Z)(t.color)}`],
            ];
          },
        })(({ theme: e, ownerState: r }) =>
          (0, o.Z)(
            { color: (e.vars || e).palette.text.secondary },
            !r.disableRipple && {
              '&:hover': {
                backgroundColor: e.vars
                  ? `rgba(${'default' === r.color ? e.vars.palette.action.activeChannel : e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : (0, c.Fq)(
                      'default' === r.color ? e.palette.action.active : e.palette[r.color].main,
                      e.palette.action.hoverOpacity
                    ),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            },
            'default' !== r.color && {
              [`&.${T.checked}, &.${T.indeterminate}`]: {
                color: (e.vars || e).palette[r.color].main,
              },
              [`&.${T.disabled}`]: { color: (e.vars || e).palette.action.disabled },
            }
          )
        ),
        j = (0, d.jsx)(m, {}),
        O = (0, d.jsx)(p, {}),
        k = (0, d.jsx)(f, {});
      var C = a.forwardRef(function (e, r) {
        var t, c;
        const u = (0, v.i)({ props: e, name: 'MuiCheckbox' }),
          {
            checkedIcon: l = j,
            color: p = 'primary',
            icon: m = O,
            indeterminate: f = !1,
            indeterminateIcon: x = k,
            inputProps: y,
            size: g = 'medium',
            className: b,
          } = u,
          T = (0, n.Z)(u, w),
          C = f ? x : m,
          I = f ? x : l,
          E = (0, o.Z)({}, u, { color: p, indeterminate: f, size: g }),
          R = ((e) => {
            const { classes: r, indeterminate: t, color: n, size: a } = e,
              s = {
                root: ['root', t && 'indeterminate', `color${(0, h.Z)(n)}`, `size${(0, h.Z)(a)}`],
              },
              c = (0, i.Z)(s, A, r);
            return (0, o.Z)({}, r, c);
          })(E);
        return (0, d.jsx)(
          S,
          (0, o.Z)(
            {
              type: 'checkbox',
              inputProps: (0, o.Z)({ 'data-indeterminate': f }, y),
              icon: a.cloneElement(C, { fontSize: null != (t = C.props.fontSize) ? t : g }),
              checkedIcon: a.cloneElement(I, { fontSize: null != (c = I.props.fontSize) ? c : g }),
              ownerState: E,
              ref: r,
              className: (0, s.Z)(R.root, b),
            },
            T,
            { classes: R }
          )
        );
      });
    },
    70946: function (e, r, t) {
      t.d(r, {
        B: function () {
          return v;
        },
      });
      var n = t(59499),
        o = t(4730),
        a = t(57499),
        s = t(80822),
        i = t(88078),
        c = t(70794),
        u = t(65361),
        l = t(32867),
        d = t(49212),
        p = t(85893),
        m = ['loading', 'outputAmountUSD', 'inputAmountUSD'];
      function f(e, r) {
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
      function h(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? f(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : f(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var v = function (e) {
        var r = e.loading,
          t = e.outputAmountUSD,
          n = e.inputAmountUSD,
          f = (0, o.Z)(e, m),
          v = new c.O(t).minus(n),
          x = n && '0' !== n ? v.dividedBy(n).times(100).toFixed(2) : '0';
        '-0.00' === x && (x = '0.00');
        var y = Math.abs(Number(x)) > 10;
        return (0, p.jsx)(
          d.G,
          h(
            h(
              {
                variant: 'secondary12',
                color: 'text.secondary',
                event: { eventName: u.vh.TOOL_TIP, eventParams: { tooltip: 'Price Impact' } },
                text: (0, p.jsx)(s.Z, {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    color: y ? 'warning.main' : 'unset',
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
                        : (0, p.jsx)(l.B, {
                            value: x,
                            visibleDecimals: 2,
                            variant: 'secondary12',
                            color: 'text.secondary',
                            sx: { marginLeft: '4px', color: y ? 'warning.main' : 'unset' },
                          }),
                    },
                  }),
                }),
              },
              f
            ),
            {},
            { children: (0, p.jsx)(a.cC, { id: 'UAOZRe' }) }
          )
        );
      };
    },
    92519: function (e, r, t) {
      t.d(r, {
        A: function () {
          return x;
        },
      });
      var n = t(80854),
        o = (t(67294), t(60377)),
        a = t(50060),
        s = t(89771),
        i = t(53097),
        c = t(44949),
        u = t(72005),
        l = t(3062),
        d = t(65361),
        p = t(79850),
        m = t(37096),
        f = t(19408),
        h = t(40429),
        v = t(85893),
        x = function (e) {
          var r,
            t,
            x = e.hideTitleSymbol,
            y = e.underlyingAsset,
            g = e.children,
            b = e.requiredChainId,
            A = e.title,
            T = e.keepWrappedSymbol,
            w = (0, u.Z)().readOnlyModeAddress,
            S = (0, l.Y)(function (e) {
              return e.currentMarketData;
            }),
            j = (0, l.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            O = (0, a.P)(S).walletBalances,
            k = (0, o.HT)(),
            C = k.user,
            I = k.reserves,
            E = (0, c.vR)(),
            R = E.txError,
            W = E.mainTxState,
            D = (0, i.Q)(b),
            P = D.isWrongNetwork,
            _ = D.requiredChainId;
          if (R && R.blocking) return (0, v.jsx)(h.D, { txError: R });
          var L = I.find(function (e) {
              return y.toLowerCase() === n.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : y === e.underlyingAsset;
            }),
            M =
              null === C || void 0 === C
                ? void 0
                : C.userReservesData.find(function (e) {
                    return y.toLowerCase() === n.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : y === e.underlyingAsset;
                  }),
            Z = L.isWrappedBaseAsset && !T ? j.baseAssetSymbol : L.symbol;
          return (0, v.jsxs)(s.hv, {
            asset: L,
            children: [
              !W.success && (0, v.jsx)(m.E, { title: A, symbol: x ? void 0 : Z }),
              P &&
                !w &&
                (0, v.jsx)(f.I, {
                  networkName: (0, p.Mo)(_).name,
                  chainId: _,
                  event: { eventName: d.vh.SWITCH_NETWORK, eventParams: { asset: y } },
                }),
              g({
                isWrongNetwork: P,
                nativeBalance:
                  (null === (r = O[n.hP.toLowerCase()]) || void 0 === r ? void 0 : r.amount) || '0',
                tokenBalance:
                  (null === (t = O[L.underlyingAsset.toLowerCase()]) || void 0 === t
                    ? void 0
                    : t.amount) || '0',
                poolReserve: L,
                symbol: Z,
                underlyingAsset: y,
                userReserve: M,
              }),
            ],
          });
        };
    },
    48284: function (e, r, t) {
      t.r(r),
        t.d(r, {
          WithdrawModal: function () {
            return Re;
          },
        });
      var n = t(59499),
        o = t(57499),
        a = t(67294),
        s = t(49679),
        i = t(44949),
        c = t(3062),
        u = t(79850),
        l = t(15629),
        d = t(92519),
        p = t(90116),
        m = t(17674),
        f = t(1279);
      var h = a.forwardRef(function (e, r) {
          return a.createElement(
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
            a.createElement('path', {
              fillRule: 'evenodd',
              d: 'M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z',
              clipRule: 'evenodd',
            })
          );
        }),
        v = t(80822),
        x = t(53219),
        y = t(15861),
        g = t(26447),
        b = t(69368),
        A = t(70946),
        T = t(32867),
        w = t(45640),
        S = t(35783),
        j = t(60377),
        O = t(87886),
        k = t(94751),
        C = t(66510),
        I = t(43666),
        E = t(7568),
        R = t(72005),
        W = t(32356),
        D = t(65361),
        P = t(58730),
        _ = t(84314),
        L = t(73886),
        M = t(23478),
        Z = t(83063),
        N = t(67944),
        B = t(11312),
        H = t(50029),
        U = t(87794),
        q = t.n(U),
        F = t(75331),
        z = t(24243),
        Y = t(80854),
        V = t(30202),
        Q = t(56371),
        G = t(92997),
        K = t(64041),
        $ = t(805),
        X = t(52251),
        J = t(84207),
        ee = t(53008),
        re = t(85893);
      function te(e, r) {
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
      function ne(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? te(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : te(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var oe = function (e) {
        var r = e.amountToSwap,
          t = e.amountToReceive,
          n = e.isWrongNetwork,
          s = e.sx,
          u = e.poolReserve,
          l = e.targetReserve,
          d = e.isMaxSelected,
          p = e.loading,
          f = e.blocked,
          h = e.buildTxFn,
          v = (0, c.Y)(
            (0, L.N)(function (e) {
              return [
                e.withdrawAndSwitch,
                e.currentMarketData,
                e.jsonRpcProvider,
                e.account,
                e.generateApproval,
                e.estimateGasLimit,
                e.walletApprovalMethodPreference,
                e.generateSignatureRequest,
                e.addTransaction,
                e.trackEvent,
              ];
            })
          ),
          x = (0, m.Z)(v, 10),
          y = x[0],
          g = x[1],
          b = x[2],
          A = x[3],
          T = x[4],
          w = x[5],
          S = x[6],
          j = x[7],
          k = x[8],
          C = x[9],
          I = (0, i.vR)(),
          E = I.approvalTxState,
          W = I.mainTxState,
          P = I.loadingTxns,
          _ = I.setMainTxState,
          M = I.setTxError,
          Z = I.setGasLimit,
          N = I.setLoadingTxns,
          B = I.setApprovalTxState,
          U = (0, R.Z)(),
          te = U.sendTx,
          oe = U.signTxData,
          ae = (0, V.NL)(),
          se = (0, a.useState)(void 0),
          ie = se[0],
          ce = se[1],
          ue = (0, a.useState)(),
          le = ue[0],
          de = ue[1],
          pe = (0, a.useMemo)(
            function () {
              return void 0 !== ie && -1 !== ie && '0' !== r && !n && ie <= Number(r);
            },
            [ie, r, n]
          ),
          me = S === K.n.PERMIT,
          fe = (function () {
            var e = (0, H.Z)(
              q().mark(function e() {
                var n, o, a, s, i;
                return q().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), _(ne(ne({}, W), {}, { loading: !0 })), (e.next = 4), h()
                          );
                        case 4:
                          return (
                            (n = e.sent),
                            (o = y({
                              poolReserve: u,
                              targetReserve: l,
                              isMaxSelected: d,
                              amountToSwap: (0, Q.parseUnits)(r, u.decimals).toString(),
                              amountToReceive: (0, Q.parseUnits)(t, l.decimals).toString(),
                              augustus: n.augustus,
                              txCalldata: n.swapCallData,
                              signatureParams: le,
                            })),
                            (e.next = 8),
                            w(o)
                          );
                        case 8:
                          return (a = e.sent), (e.next = 11), te(a);
                        case 11:
                          return (s = e.sent), (e.next = 14), s.wait(1);
                        case 14:
                          ae.invalidateQueries({ queryKey: X.B.pool }),
                            ae.invalidateQueries({ queryKey: X.B.gho }),
                            _({ txHash: s.hash, loading: !1, success: !0 }),
                            k(s.hash, {
                              action: F.UQ.withdrawAndSwitch,
                              txState: 'success',
                              asset: u.underlyingAsset,
                              amount: (0, Q.parseUnits)(n.inputAmount, u.decimals).toString(),
                              assetName: u.name,
                              outAsset: l.underlyingAsset,
                              outAssetName: l.name,
                              outAmount: (0, Q.parseUnits)(n.outputAmount, l.decimals).toString(),
                            }),
                            (e.next = 26);
                          break;
                        case 20:
                          (e.prev = 20),
                            (e.t0 = e.catch(0)),
                            (i = (0, $.WG)(e.t0, $.aD.GAS_ESTIMATION, !1)),
                            M(i),
                            _({ txHash: void 0, loading: !1 }),
                            C(D.vh.TRANSACTION_ERROR, {
                              transactiontype: F.UQ.withdrawAndSwitch,
                              asset: u.underlyingAsset,
                              assetName: u.name,
                              error: e.t0,
                            });
                        case 26:
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
          he = (function () {
            var e = (0, H.Z)(
              q().mark(function e() {
                var t, n, o, a, s, i, c, l, d;
                return q().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = (0, O.sm)(r, u.decimals)),
                            (n = {
                              user: A,
                              token: u.aTokenAddress,
                              spender: g.addresses.WITHDRAW_SWITCH_ADAPTER || '',
                              amount: t,
                            }),
                            (e.prev = 2),
                            !me)
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (o = Math.floor(Date.now() / 1e3 + 3600).toString()),
                            (e.next = 7),
                            j(ne(ne({}, n), {}, { deadline: o }))
                          );
                        case 7:
                          return (
                            (a = e.sent),
                            B(ne(ne({}, E), {}, { loading: !0 })),
                            (e.next = 11),
                            oe(a)
                          );
                        case 11:
                          (s = e.sent),
                            de({ signature: s, deadline: o, amount: t }),
                            B({ txHash: G.Z, loading: !1, success: !0 }),
                            (e.next = 30);
                          break;
                        case 16:
                          return (i = T(n)), (e.next = 19), w(i);
                        case 19:
                          return (
                            (c = e.sent),
                            B(ne(ne({}, E), {}, { loading: !0 })),
                            (e.next = 23),
                            te(c)
                          );
                        case 23:
                          return (l = e.sent), (e.next = 26), l.wait(1);
                        case 26:
                          B({ txHash: l.hash, loading: !1, success: !0 }),
                            k(l.hash, {
                              action: F.UQ.withdrawAndSwitch,
                              txState: 'success',
                              asset: u.aTokenAddress,
                              amount: (0, Q.parseUnits)(t, u.decimals).toString(),
                              assetName: 'a'.concat(u.symbol),
                              spender: g.addresses.WITHDRAW_SWITCH_ADAPTER,
                            }),
                            M(void 0),
                            ve(u.aTokenAddress);
                        case 30:
                          e.next = 37;
                          break;
                        case 32:
                          (e.prev = 32),
                            (e.t0 = e.catch(2)),
                            (d = (0, $.WG)(e.t0, $.aD.GAS_ESTIMATION, !1)),
                            M(d),
                            E.success || B({ txHash: void 0, loading: !1 });
                        case 37:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 32]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          ve = (0, a.useCallback)(
            (function () {
              var e = (0, H.Z)(
                q().mark(function e(r) {
                  var t, n, o;
                  return q().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            N(!0),
                            (t = b()),
                            (n = new z.A(t)),
                            (e.next = 5),
                            n.approvedAmount({
                              user: A,
                              token: r,
                              spender: g.addresses.WITHDRAW_SWITCH_ADAPTER || '',
                            })
                          );
                        case 5:
                          (o = e.sent), ce(o), N(!1);
                        case 8:
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
            [b, A, g.addresses.WITHDRAW_SWITCH_ADAPTER, N]
          );
        return (
          (0, a.useEffect)(
            function () {
              ve(u.aTokenAddress);
            },
            [ve, u.aTokenAddress]
          ),
          (0, a.useEffect)(
            function () {
              var e = 0;
              (e = Number(Y.eB[F.UQ.withdrawAndSwitch].recommended)),
                pe && !E.success && (e += Number(ee.pQ)),
                Z(e.toString());
            },
            [pe, E, Z]
          ),
          (0, re.jsx)(J.B, {
            mainTxState: W,
            approvalTxState: E,
            isWrongNetwork: n,
            preparingTransactions: P,
            handleAction: fe,
            requiresAmount: !0,
            amount: r,
            handleApproval: function () {
              return he();
            },
            requiresApproval: pe,
            actionText: (0, re.jsx)(o.cC, { id: '7sofdl' }),
            actionInProgressText: (0, re.jsx)(o.cC, { id: '1m9Qqc' }),
            sx: s,
            errorParams: {
              loading: !1,
              disabled: f || !(null !== E && void 0 !== E && E.success),
              content: (0, re.jsx)(o.cC, { id: '7sofdl' }),
              handleClick: fe,
            },
            fetchingData: p,
            blocked: f,
            tryPermit: !0,
          })
        );
      };
      var ae = a.forwardRef(function (e, r) {
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
              d: 'M14 5l7 7m0 0l-7 7m7-7H3',
            })
          );
        }),
        se = t(60386),
        ie = function (e) {
          var r = e.txHash,
            t = e.amount,
            n = e.symbol,
            a = e.outAmount,
            s = e.outSymbol;
          return (0, re.jsx)(se.R, {
            txHash: r,
            children: (0, re.jsxs)(v.Z, {
              sx: {
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              },
              children: [
                (0, re.jsx)(y.Z, { children: (0, re.jsx)(o.cC, { id: 'qFD/ij' }) }),
                (0, re.jsxs)(v.Z, {
                  sx: { display: 'flex', alignItems: 'center', gap: 2, mt: 3 },
                  children: [
                    (0, re.jsx)(w.T1, { sx: { fontSize: '20px' }, symbol: n }),
                    (0, re.jsx)(T.B, { value: Number(t), compact: !0, variant: 'main14' }),
                    (0, re.jsx)(y.Z, { variant: 'secondary14', children: n }),
                    (0, re.jsx)(x.Z, {
                      sx: { fontSize: '14px' },
                      children: (0, re.jsx)(ae, { fontSize: '14px' }),
                    }),
                    (0, re.jsx)(w.T1, { sx: { fontSize: '20px' }, symbol: s }),
                    (0, re.jsx)(T.B, { value: Number(a), variant: 'main14' }),
                    (0, re.jsx)(y.Z, { variant: 'secondary14', children: s }),
                  ],
                }),
              ],
            }),
          });
        },
        ce = t(21046),
        ue = t(94303),
        le = t(69986),
        de = t(13441);
      function pe(e, r) {
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
      function me(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? pe(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : pe(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var fe,
        he = function (e) {
          var r = e.poolReserve,
            t = e.amountToWithdraw,
            n = e.isWrongNetwork,
            s = e.tokenWrapperAddress,
            u = e.sx,
            l = e.blocked,
            d = (0, c.Y)(
              (0, L.N)(function (e) {
                return [
                  e.account,
                  e.estimateGasLimit,
                  e.walletApprovalMethodPreference,
                  e.account,
                  e.currentMarketData,
                ];
              })
            ),
            p = (0, m.Z)(d, 5),
            f = p[0],
            h = p[1],
            v = p[2],
            x = p[3],
            y = p[4],
            g = (0, R.Z)().sendTx,
            b = (0, V.NL)(),
            A = (0, a.useState)(),
            T = A[0],
            w = A[1],
            S = (0, i.vR)(),
            j = S.approvalTxState,
            O = S.mainTxState,
            k = S.loadingTxns,
            C = S.setLoadingTxns,
            I = S.setApprovalTxState,
            E = S.setMainTxState,
            W = S.setGasLimit,
            D = S.setTxError,
            P = (0, de.z)().tokenWrapperService,
            _ = (0, le.i)({ chainId: y.chainId, token: r.aTokenAddress, spender: s }),
            M = _.data,
            Z = _.isFetching,
            N = _.refetch;
          C(Z);
          var B = !1;
          void 0 !== M &&
            (B = (0, ee.iv)({
              approvedAmount: M.toString(),
              amount: t,
              signedAmount: T ? T.amount : '0',
            }));
          var U = v === K.n.PERMIT,
            z = (0, ue.M)({
              usePermit: U,
              approvedAmount: {
                amount: (null === M || void 0 === M ? void 0 : M.toString()) || '0',
                spender: s,
                token: r.aTokenAddress,
                user: x,
              },
              requiresApproval: B,
              assetAddress: r.aTokenAddress,
              symbol: r.symbol,
              decimals: r.decimals,
              signatureAmount: t,
              onApprovalTxConfirmed: N,
              onSignTxCompleted: function (e) {
                return w(e);
              },
            }).approval,
            Q = (function () {
              var e = (0, H.Z)(
                q().mark(function e() {
                  var n, o, a, i, c;
                  return q().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              E(me(me({}, O), {}, { loading: !0 })),
                              (o = '-1' === t ? ce.Bz.toString() : (0, Y.gU)(t, r.decimals)),
                              !U || !T)
                            ) {
                              e.next = 17;
                              break;
                            }
                            return (
                              (e.next = 6),
                              P.withdrawWrappedTokenWithPermit(o, s, x, T.deadline, T.signature)
                            );
                          case 6:
                            return (a = e.sent), (e.next = 9), h(a);
                          case 9:
                            return (a = e.sent), (e.next = 12), g(a);
                          case 12:
                            return (n = e.sent), (e.next = 15), n.wait(1);
                          case 15:
                            e.next = 28;
                            break;
                          case 17:
                            return (e.next = 19), P.withdrawWrappedToken(o, s, f);
                          case 19:
                            return (i = e.sent), (e.next = 22), h(i);
                          case 22:
                            return (i = e.sent), (e.next = 25), g(i);
                          case 25:
                            return (n = e.sent), (e.next = 28), n.wait(1);
                          case 28:
                            E({ txHash: n.hash, loading: !1, success: !0 }),
                              b.invalidateQueries({ queryKey: X.B.pool }),
                              b.invalidateQueries({
                                queryKey: X.B.approvedAmount(x, r.aTokenAddress, s, y.chainId),
                              }),
                              (e.next = 38);
                            break;
                          case 33:
                            (e.prev = 33),
                              (e.t0 = e.catch(0)),
                              (c = (0, $.WG)(e.t0, $.aD.GAS_ESTIMATION, !1)),
                              D(c),
                              I({ txHash: void 0, loading: !1 });
                          case 38:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 33]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, a.useEffect)(
              function () {
                var e = 0;
                (e = Number(Y.eB[F.UQ.withdraw].recommended)),
                  B && !j.success && (e += Number(ee.pQ)),
                  W(e.toString());
              },
              [B, j, U, W]
            ),
            (0, re.jsx)(J.B, {
              blocked: l,
              preparingTransactions: k,
              approvalTxState: j,
              mainTxState: O,
              amount: t,
              isWrongNetwork: n,
              requiresAmount: !0,
              actionInProgressText: (0, re.jsx)(o.cC, { id: 'QQYsQ7' }),
              actionText: (0, re.jsx)(o.cC, { id: 'OsyKSt' }),
              handleAction: Q,
              requiresApproval: B,
              handleApproval: z,
              sx: u,
              tryPermit: !0,
            })
          );
        };
      !(function (e) {
        (e[(e.CAN_NOT_WITHDRAW_THIS_AMOUNT = 0)] = 'CAN_NOT_WITHDRAW_THIS_AMOUNT'),
          (e[(e.POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY = 1)] = 'POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED');
      })(fe || (fe = {}));
      var ve,
        xe = function (e) {
          var r,
            t = e.assetsBlockingWithdraw,
            a = e.poolReserve,
            s = e.healthFactorAfterWithdraw,
            c = e.withdrawAmount,
            u = e.user,
            l = (0, i.vR)().mainTxState,
            d = void 0,
            p = (0, f.hE)(a.unborrowedLiquidity);
          l.success ||
            l.txHash ||
            (t.length > 0 && !t.includes(a.symbol)
              ? (d = fe.ZERO_LTV_WITHDRAW_BLOCKED)
              : s.lt('1') && '0' !== u.totalBorrowsMarketReferenceCurrency
                ? (d = fe.CAN_NOT_WITHDRAW_THIS_AMOUNT)
                : d ||
                  (!p.eq('0') && !(0, f.hE)(c).gt(a.unborrowedLiquidity)) ||
                  (d = fe.POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY));
          var m =
            ((r = {}),
            (0, n.Z)(r, fe.CAN_NOT_WITHDRAW_THIS_AMOUNT, (0, re.jsx)(o.cC, { id: 'c9b44w' })),
            (0, n.Z)(
              r,
              fe.POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY,
              (0, re.jsx)(o.cC, { id: 'UXeR72' })
            ),
            (0, n.Z)(
              r,
              fe.ZERO_LTV_WITHDRAW_BLOCKED,
              (0, re.jsx)(o.cC, { id: 'nUK1ou', values: { 0: t.join(', ') } })
            ),
            r);
          return { blockingError: d, errorComponent: d ? m[d] : null };
        };
      function ye(e, r) {
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
      function ge(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ye(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ye(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      !(function (e) {
        (e[(e.CAN_NOT_WITHDRAW_THIS_AMOUNT = 0)] = 'CAN_NOT_WITHDRAW_THIS_AMOUNT'),
          (e[(e.POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY = 1)] = 'POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED');
      })(ve || (ve = {}));
      var be,
        Ae = function (e) {
          var r = e.poolReserve,
            t = e.userReserve,
            n = e.symbol,
            s = e.isWrongNetwork,
            u = e.user,
            l = (0, i.vR)(),
            d = l.gasLimit,
            H = l.mainTxState,
            U = l.txError,
            q = (0, R.Z)().currentAccount,
            F = (0, j.HT)().reserves,
            z = (0, I.P)(),
            Y = (0, a.useState)(''),
            V = Y[0],
            Q = Y[1],
            G = (0, a.useState)(!1),
            K = G[0],
            $ = G[1],
            X = (0, a.useRef)(''),
            J = (0, c.Y)(
              (0, L.N)(function (e) {
                return [e.trackEvent, e.currentNetworkConfig, e.currentChainId];
              })
            ),
            ee = (0, m.Z)(J, 3),
            te = ee[0],
            ne = ee[1],
            ae = ee[2],
            se = (0, a.useState)('0.1'),
            ce = se[0],
            ue = se[1],
            le = F.filter(function (e) {
              return e.underlyingAsset !== r.underlyingAsset;
            }).map(function (e) {
              return { address: e.underlyingAsset, symbol: e.symbol, iconSymbol: e.iconSymbol };
            });
          le = [].concat(
            (0, p.Z)(
              le.filter(function (e) {
                return 'GHO' === e.symbol;
              })
            ),
            (0, p.Z)(
              le.filter(function (e) {
                return 'GHO' !== e.symbol;
              })
            )
          );
          var de = (0, a.useState)(le[0]),
            pe = de[0],
            me = de[1],
            fe = '-1' === V,
            ve = u.userReservesData.find(function (e) {
              return e.underlyingAsset === pe.address;
            }),
            ye = (0, B.M)(u, t, r),
            be = (0, f.hE)((null === t || void 0 === t ? void 0 : t.underlyingBalance) || '0'),
            Ae = !1,
            Te = z.find(function (e) {
              return e.tokenOut.underlyingAsset === r.underlyingAsset;
            });
          Te && (Ae = pe.address === Te.tokenIn.underlyingAsset);
          var we = (0, C.E)(
              X.current,
              r.decimals,
              (null === Te || void 0 === Te ? void 0 : Te.tokenWrapperAddress) || ''
            ),
            Se = we.data,
            je = we.isFetching,
            Oe = (0, k.k)({
              chainId: ne.underlyingChainId || ae,
              userAddress: q,
              swapIn: ge(ge({}, r), {}, { amount: X.current }),
              swapOut: ge(ge({}, ve.reserve), {}, { amount: '0' }),
              max: fe && ye.eq(be),
              skip: Ae || H.loading || !1,
              maxSlippage: Number(ce),
            }),
            ke = Oe.inputAmountUSD,
            Ce = Oe.inputAmount,
            Ie = Oe.outputAmount,
            Ee = Oe.outputAmountUSD,
            Re = Oe.error,
            We = Oe.loading,
            De = Oe.buildTxFn,
            Pe = Ee;
          Ae &&
            (Pe = (0, f.hE)(Se || '0')
              .multipliedBy((null === Te || void 0 === Te ? void 0 : Te.tokenIn.priceInUSD) || 0)
              .toString());
          var _e = (We && '0' === Ee) || (Ae && je),
            Le = (0, f.hE)(r.unborrowedLiquidity),
            Me = (0, E.W)(),
            Ze = fe ? ye.toString(10) : V,
            Ne = (0, P.DX)({ user: u, userReserve: t, poolReserve: r, withdrawAmount: Ze }),
            Be = xe({
              assetsBlockingWithdraw: Me,
              poolReserve: r,
              healthFactorAfterWithdraw: Ne,
              withdrawAmount: Ze,
              user: u,
            }),
            He = Be.blockingError,
            Ue = Be.errorComponent,
            qe = Ne.toNumber() >= 1 && Ne.toNumber() < 1.5 && t.usageAsCollateralEnabledOnUser,
            Fe = (0, f.hE)(Ze).multipliedBy(
              (null === t || void 0 === t ? void 0 : t.reserve.priceInUSD) || 0
            ),
            ze = (0, O.IG)(Ie, ce, ve.reserve.decimals);
          if (H.success) {
            var Ye = Ce,
              Ve = ze;
            return (
              Ae && ((Ye = X.current), (Ve = Se || '0')),
              (0, re.jsx)(ie, {
                txHash: H.txHash,
                amount: Ye,
                symbol: r.isWrappedBaseAsset ? ne.baseAssetSymbol : r.symbol,
                outSymbol: pe.symbol,
                outAmount: Ve,
              })
            );
          }
          return (0, re.jsxs)(re.Fragment, {
            children: [
              (0, re.jsx)(M.W, {
                inputTitle: (0, re.jsx)(o.cC, { id: 'OsyKSt' }),
                value: Ze,
                onChange: function (e) {
                  var t = '-1' === e,
                    n = (0, _.$w)(e, r.decimals);
                  (X.current = t ? ye.toString(10) : n),
                    Q(n),
                    t && ye.eq(be) && te(D.vh.MAX_INPUT_SELECTION, { type: 'withdraw' });
                },
                symbol: n,
                assets: [
                  {
                    balance: ye.toString(10),
                    symbol: n,
                    iconSymbol: r.isWrappedBaseAsset ? ne.baseAssetSymbol : r.iconSymbol,
                  },
                ],
                usdValue: Fe.toString(10),
                isMaxSelected: fe,
                disabled: H.loading,
                maxValue: ye.toString(10),
                balanceText: Le.lt(be)
                  ? (0, re.jsx)(o.cC, { id: 'csDS2L' })
                  : (0, re.jsx)(o.cC, { id: 'zmTPiV' }),
              }),
              (0, re.jsxs)(v.Z, {
                sx: {
                  padding: '18px',
                  pt: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                },
                children: [
                  (0, re.jsx)(x.Z, {
                    sx: { fontSize: '18px !important' },
                    children: (0, re.jsx)(h, {}),
                  }),
                  (0, re.jsx)(A.B, { loading: _e, outputAmountUSD: Ee, inputAmountUSD: ke }),
                ],
              }),
              (0, re.jsx)(M.W, {
                value: Ae ? Se || '' : Ie,
                onSelect: me,
                usdValue: Pe,
                symbol: pe.symbol,
                assets: le,
                inputTitle: (0, re.jsx)(o.cC, { id: '+EGVI0' }),
                balanceText: (0, re.jsx)(o.cC, { id: 'zmTPiV' }),
                disableInput: !0,
                loading: _e,
              }),
              Re &&
                !_e &&
                !Ae &&
                (0, re.jsx)(y.Z, { variant: 'helperText', color: 'error.main', children: Re }),
              void 0 !== He &&
                (0, re.jsx)(y.Z, { variant: 'helperText', color: 'error.main', children: Ue }),
              (0, re.jsxs)(N.m6, {
                gasLimit: d,
                slippageSelector: Ae
                  ? null
                  : (0, re.jsx)(W.n, {
                      selectedSlippage: ce,
                      setSlippage: ue,
                      slippageTooltipHeader: (0, re.jsxs)(g.Z, {
                        direction: 'row',
                        gap: 2,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        children: [
                          (0, re.jsx)(o.cC, { id: 'pjO/iH' }),
                          (0, re.jsx)(g.Z, {
                            alignItems: 'end',
                            children: (0, re.jsxs)(g.Z, {
                              direction: 'row',
                              children: [
                                (0, re.jsx)(w.T1, {
                                  symbol: ve.reserve.iconSymbol,
                                  sx: { mr: 1, fontSize: '14px' },
                                }),
                                (0, re.jsx)(T.B, { value: ze, variant: 'secondary12' }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                children: [
                  (0, re.jsx)(N.oD, {
                    description: (0, re.jsx)(o.cC, { id: '3K0oMo' }),
                    value: be.minus(Ze || '0').toString(10),
                    symbol: r.isWrappedBaseAsset ? ne.baseAssetSymbol : r.symbol,
                  }),
                  (0, re.jsx)(N.jz, {
                    visibleHfChange: !!V,
                    healthFactor: u ? u.healthFactor : '-1',
                    futureHealthFactor: Ne.toString(10),
                  }),
                ],
              }),
              U && (0, re.jsx)(Z.Q, { txError: U }),
              qe &&
                (0, re.jsxs)(re.Fragment, {
                  children: [
                    (0, re.jsx)(S.v, {
                      severity: 'error',
                      sx: { my: 6 },
                      children: (0, re.jsx)(o.cC, { id: 'nxyWvj' }),
                    }),
                    (0, re.jsxs)(v.Z, {
                      sx: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mx: '24px',
                        mb: '12px',
                      },
                      children: [
                        (0, re.jsx)(b.Z, {
                          checked: K,
                          onChange: function () {
                            $(!K),
                              te(D.vh.ACCEPT_RISK, { modal: 'Withdraw', riskCheckboxAccepted: K });
                          },
                          size: 'small',
                          'data-cy': 'risk-checkbox',
                        }),
                        (0, re.jsx)(y.Z, {
                          variant: 'description',
                          children: (0, re.jsx)(o.cC, { id: '2eBWE6' }),
                        }),
                      ],
                    }),
                  ],
                }),
              Ae
                ? (0, re.jsx)(he, {
                    poolReserve: r,
                    amountToWithdraw: X.current,
                    isWrongNetwork: s,
                    tokenWrapperAddress:
                      (null === Te || void 0 === Te ? void 0 : Te.tokenWrapperAddress) || '',
                    sx: qe ? { mt: 0 } : {},
                    blocked: void 0 !== He || (qe && !K),
                  })
                : (0, re.jsx)(oe, {
                    poolReserve: r,
                    targetReserve: ve.reserve,
                    amountToSwap: Ce,
                    amountToReceive: ze,
                    isMaxSelected: fe && ye.eq(be),
                    isWrongNetwork: s,
                    blocked: void 0 !== He || (qe && !K),
                    buildTxFn: De,
                    sx: qe ? { mt: 0 } : {},
                  }),
            ],
          });
        },
        Te = t(44880),
        we = function (e) {
          var r = e.poolReserve,
            t = e.amountToWithdraw,
            n = e.poolAddress,
            a = e.isWrongNetwork,
            s = e.symbol,
            i = e.blocked,
            u = e.sx,
            l = (0, c.Y)(function (e) {
              return e.withdraw;
            }),
            d = (0, G.Q)({
              tryPermit: !1,
              handleGetTxns: (function () {
                var e = (0, H.Z)(
                  q().mark(function e() {
                    return q().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              'return',
                              l({ reserve: n, amount: t, aTokenAddress: r.aTokenAddress })
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
              skip: !t || 0 === parseFloat(t) || i,
              deps: [t, n],
              eventTxInfo: { amount: t, assetName: r.name, asset: r.underlyingAsset },
              protocolAction: F.UQ.withdraw,
            }),
            p = d.action,
            m = d.loadingTxns,
            f = d.mainTxState,
            h = d.approvalTxState,
            v = d.approval,
            x = d.requiresApproval;
          return (0, re.jsx)(J.B, {
            blocked: i,
            preparingTransactions: m,
            approvalTxState: h,
            mainTxState: f,
            amount: t,
            isWrongNetwork: a,
            requiresAmount: !0,
            actionInProgressText: (0, re.jsx)(o.cC, { id: 'Ebgc76', values: { symbol: s } }),
            actionText: (0, re.jsx)(o.cC, { id: 'fu1Dbh', values: { symbol: s } }),
            handleAction: p,
            handleApproval: function () {
              return v([{ amount: t, underlyingAsset: n }]);
            },
            requiresApproval: x,
            sx: u,
          });
        };
      !(function (e) {
        (e[(e.CAN_NOT_WITHDRAW_THIS_AMOUNT = 0)] = 'CAN_NOT_WITHDRAW_THIS_AMOUNT'),
          (e[(e.POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY = 1)] = 'POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED');
      })(be || (be = {}));
      var Se,
        je = function (e) {
          var r = e.poolReserve,
            t = e.userReserve,
            n = e.unwrap,
            s = e.setUnwrap,
            u = e.symbol,
            l = e.isWrongNetwork,
            d = e.user,
            p = (0, i.vR)(),
            h = p.gasLimit,
            x = p.mainTxState,
            g = p.txError,
            A = (0, a.useState)(''),
            T = A[0],
            w = A[1],
            j = (0, a.useState)(''),
            O = j[0],
            k = j[1],
            C = (0, a.useState)(!1),
            I = C[0],
            R = C[1],
            W = (0, a.useRef)(''),
            _ = (0, c.Y)(
              (0, L.N)(function (e) {
                return [e.trackEvent, e.currentNetworkConfig];
              })
            ),
            H = (0, m.Z)(_, 2),
            U = H[0],
            q = H[1],
            F = '-1' === T,
            z = (0, B.M)(d, t, r),
            V = (0, f.hE)((null === t || void 0 === t ? void 0 : t.underlyingBalance) || '0'),
            Q = (0, f.hE)(r.unborrowedLiquidity),
            G = F ? z.toString(10) : T,
            K = (0, E.W)(),
            $ = (0, P.DX)({ user: d, userReserve: t, poolReserve: r, withdrawAmount: G }),
            X = xe({
              assetsBlockingWithdraw: K,
              poolReserve: r,
              healthFactorAfterWithdraw: $,
              withdrawAmount: G,
              user: d,
            }),
            J = X.blockingError,
            ee = X.errorComponent,
            te = $.toNumber() >= 1 && $.toNumber() < 1.5 && t.usageAsCollateralEnabledOnUser,
            ne = (0, f.hE)(G).multipliedBy(
              (null === t || void 0 === t ? void 0 : t.reserve.priceInUSD) || 0
            );
          return x.success
            ? (0, re.jsx)(Te.R, {
                action: (0, re.jsx)(o.cC, { id: '8Iu1QS' }),
                amount: W.current,
                symbol: n && r.isWrappedBaseAsset ? q.baseAssetSymbol : r.symbol,
              })
            : (0, re.jsxs)(re.Fragment, {
                children: [
                  (0, re.jsx)(M.W, {
                    value: G,
                    onChange: function (e) {
                      var r = '-1' === e;
                      (W.current = r ? z.toString(10) : e),
                        w(e),
                        r && z.eq(V)
                          ? (U(D.vh.MAX_INPUT_SELECTION, { type: 'withdraw' }), k('-1'))
                          : k(z.toString(10));
                    },
                    symbol: u,
                    assets: [
                      {
                        balance: z.toString(10),
                        symbol: u,
                        iconSymbol: n && r.isWrappedBaseAsset ? q.baseAssetSymbol : r.iconSymbol,
                      },
                    ],
                    usdValue: ne.toString(10),
                    isMaxSelected: F,
                    disabled: x.loading,
                    maxValue: z.toString(10),
                    balanceText: Q.lt(V)
                      ? (0, re.jsx)(o.cC, { id: 'csDS2L' })
                      : (0, re.jsx)(o.cC, { id: 'zmTPiV' }),
                  }),
                  void 0 !== J &&
                    (0, re.jsx)(y.Z, { variant: 'helperText', color: 'error.main', children: ee }),
                  r.isWrappedBaseAsset &&
                    (0, re.jsx)(N.Pu, {
                      unwrapped: n,
                      setUnWrapped: s,
                      label: (0, re.jsx)(y.Z, {
                        children: 'Unwrap '
                          .concat(r.symbol, ' (to withdraw ')
                          .concat(q.baseAssetSymbol, ')'),
                      }),
                    }),
                  (0, re.jsxs)(N.m6, {
                    gasLimit: h,
                    children: [
                      (0, re.jsx)(N.oD, {
                        description: (0, re.jsx)(o.cC, { id: '3K0oMo' }),
                        value: V.minus(G || '0').toString(10),
                        symbol: r.isWrappedBaseAsset ? q.baseAssetSymbol : r.symbol,
                      }),
                      (0, re.jsx)(N.jz, {
                        visibleHfChange: !!T,
                        healthFactor: d ? d.healthFactor : '-1',
                        futureHealthFactor: $.toString(10),
                      }),
                    ],
                  }),
                  g && (0, re.jsx)(Z.Q, { txError: g }),
                  te &&
                    (0, re.jsxs)(re.Fragment, {
                      children: [
                        (0, re.jsx)(S.v, {
                          severity: 'error',
                          sx: { my: 6 },
                          children: (0, re.jsx)(o.cC, { id: 'nxyWvj' }),
                        }),
                        (0, re.jsxs)(v.Z, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mx: '24px',
                            mb: '12px',
                          },
                          children: [
                            (0, re.jsx)(b.Z, {
                              checked: I,
                              onChange: function () {
                                R(!I),
                                  U(D.vh.ACCEPT_RISK, {
                                    modal: 'Withdraw',
                                    riskCheckboxAccepted: I,
                                  });
                              },
                              size: 'small',
                              'data-cy': 'risk-checkbox',
                            }),
                            (0, re.jsx)(y.Z, {
                              variant: 'description',
                              children: (0, re.jsx)(o.cC, { id: '2eBWE6' }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, re.jsx)(we, {
                    poolReserve: r,
                    amountToWithdraw: F ? O : G,
                    poolAddress: n && r.isWrappedBaseAsset ? Y.hP : r.underlyingAsset,
                    isWrongNetwork: l,
                    symbol: u,
                    blocked: void 0 !== J || (te && !I),
                    sx: te ? { mt: 0 } : {},
                  }),
                ],
              });
        },
        Oe = t(17231),
        ke = t(15925);
      function Ce(e) {
        var r,
          t = e.withdrawType,
          n = e.setWithdrawType,
          a = (0, c.Y)(
            (0, L.N)(function (e) {
              return [e.trackEvent, e.currentMarketData];
            })
          ),
          s = (0, m.Z)(a, 2),
          i = s[0];
        return null !== (r = s[1].enabledFeatures) && void 0 !== r && r.collateralRepay
          ? (0, re.jsx)(v.Z, {
              sx: { mb: 6 },
              children: (0, re.jsxs)(ke.f, {
                color: 'primary',
                value: t,
                exclusive: !0,
                onChange: function (e, r) {
                  return n(r);
                },
                children: [
                  (0, re.jsx)(Oe.Y, {
                    value: Se.WITHDRAW,
                    disabled: t === Se.WITHDRAW,
                    onClick: function () {
                      return i(D.sj.SWITCH_WITHDRAW_TYPE, { withdrawType: 'Withdraw' });
                    },
                    children: (0, re.jsx)(y.Z, {
                      variant: 'buttonM',
                      children: (0, re.jsx)(o.cC, { id: 'OsyKSt' }),
                    }),
                  }),
                  (0, re.jsx)(Oe.Y, {
                    value: Se.WITHDRAWSWITCH,
                    disabled: t === Se.WITHDRAWSWITCH,
                    onClick: function () {
                      return i(D.sj.SWITCH_WITHDRAW_TYPE, { withdrawType: 'Withdraw and Switch' });
                    },
                    children: (0, re.jsx)(y.Z, {
                      variant: 'buttonM',
                      children: (0, re.jsx)(o.cC, { id: 'K05qZY' }),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      function Ie(e, r) {
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
      function Ee(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Ie(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : Ie(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      !(function (e) {
        (e[(e.WITHDRAW = 0)] = 'WITHDRAW'), (e[(e.WITHDRAWSWITCH = 1)] = 'WITHDRAWSWITCH');
      })(Se || (Se = {}));
      var Re = function () {
        var e = (0, i.vR)(),
          r = e.type,
          t = e.close,
          n = e.args,
          p = e.mainTxState,
          m = (0, a.useState)(!0),
          f = m[0],
          h = m[1],
          v = (0, a.useState)(Se.WITHDRAW),
          x = v[0],
          y = v[1],
          g = (0, c.Y)(function (e) {
            return e.currentMarketData;
          }),
          b = u.cr.withdrawAndSwitch(g);
        return (0, re.jsx)(l.P, {
          open: r === i.w8.Withdraw,
          setOpen: function () {
            y(Se.WITHDRAW), t();
          },
          children: (0, re.jsx)(d.A, {
            title: (0, re.jsx)(o.cC, { id: 'OsyKSt' }),
            underlyingAsset: n.underlyingAsset,
            keepWrappedSymbol: !f,
            children: function (e) {
              return (0, re.jsx)(s.X, {
                children: function (r) {
                  return (0, re.jsxs)(re.Fragment, {
                    children: [
                      b && !p.txHash && (0, re.jsx)(Ce, { withdrawType: x, setWithdrawType: y }),
                      x === Se.WITHDRAW &&
                        (0, re.jsx)(je, Ee(Ee({}, e), {}, { unwrap: f, setUnwrap: h, user: r })),
                      x === Se.WITHDRAWSWITCH &&
                        (0, re.jsx)(re.Fragment, {
                          children: (0, re.jsx)(Ae, Ee(Ee({}, e), {}, { user: r })),
                        }),
                    ],
                  });
                },
              });
            },
          }),
        });
      };
    },
    11312: function (e, r, t) {
      t.d(r, {
        M: function () {
          return a;
        },
      });
      var n = t(1279),
        o = t(70794),
        a = function (e, r, t) {
          var a = (0, n.hE)((null === r || void 0 === r ? void 0 : r.underlyingBalance) || '0'),
            s = (0, n.hE)(t.unborrowedLiquidity),
            i = o.O.min(a, s),
            c = (0, n.hE)('0'),
            u = t.eModes.find(function (r) {
              return r.id === e.userEmodeCategoryId;
            }),
            l =
              e.isInEmode && u
                ? u.eMode.formattedLiquidationThreshold
                : t.formattedReserveLiquidationThreshold;
          if (
            null !== r &&
            void 0 !== r &&
            r.usageAsCollateralEnabledOnUser &&
            '0' !== t.reserveLiquidationThreshold &&
            '0' !== e.totalBorrowsMarketReferenceCurrency
          ) {
            var d = (0, n.hE)(e.healthFactor).minus('1.01');
            d.gt('0') && (c = d.multipliedBy(e.totalBorrowsMarketReferenceCurrency).div(l)),
              (i = o.O.min(i, c.dividedBy(t.formattedPriceInMarketReferenceCurrency)));
          }
          return i;
        };
    },
    94751: function (e, r, t) {
      t.d(r, {
        k: function () {
          return u;
        },
      });
      var n = t(50029),
        o = t(87794),
        a = t.n(o),
        s = t(1279),
        i = t(67294),
        c = t(87886),
        u = function (e) {
          var r = e.chainId,
            t = e.max,
            o = e.maxSlippage,
            u = e.swapIn,
            l = e.swapOut,
            d = e.userAddress,
            p = e.skip,
            m = (0, i.useState)('0'),
            f = m[0],
            h = m[1],
            v = (0, i.useState)('0'),
            x = v[0],
            y = v[1],
            g = (0, i.useState)('0'),
            b = g[0],
            A = g[1],
            T = (0, i.useState)('0'),
            w = T[0],
            S = T[1],
            j = (0, i.useState)(),
            O = j[0],
            k = j[1],
            C = (0, i.useState)(!1),
            I = C[0],
            E = C[1],
            R = (0, i.useState)(''),
            W = R[0],
            D = R[1],
            P = (0, i.useMemo)(
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
            _ = (0, i.useMemo)(
              function () {
                return {
                  underlyingAsset: l.underlyingAsset,
                  decimals: l.decimals,
                  supplyAPY: l.supplyAPY,
                  amount: l.amount,
                  variableBorrowAPY: l.variableBorrowAPY,
                };
              },
              [l.amount, l.decimals, l.supplyAPY, l.underlyingAsset, l.variableBorrowAPY]
            ),
            L = (0, i.useCallback)(
              function () {
                return (0, c.F8)(P, _, r, d, t);
              },
              [r, P, _, d, t]
            );
          return (
            (0, i.useEffect)(
              function () {
                if (!p) {
                  var e = (function () {
                      var e = (0, n.Z)(
                        a().mark(function e() {
                          var r, t;
                          return a().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      P.underlyingAsset &&
                                      _.underlyingAsset &&
                                      P.amount &&
                                      '0' !== P.amount &&
                                      !isNaN(+P.amount)
                                    ) {
                                      e.next = 7;
                                      break;
                                    }
                                    return (
                                      h('0'), A('0'), S('0'), y('0'), k(void 0), e.abrupt('return')
                                    );
                                  case 7:
                                    return E(!0), (e.prev = 8), (e.next = 11), L();
                                  case 11:
                                    (r = e.sent),
                                      D(''),
                                      k(r),
                                      h((0, s.Fv)(r.srcAmount, r.srcDecimals)),
                                      y(r.srcUSD),
                                      A((0, s.Fv)(r.destAmount, r.destDecimals)),
                                      S(r.destUSD),
                                      (e.next = 25);
                                    break;
                                  case 20:
                                    (e.prev = 20),
                                      (e.t0 = e.catch(8)),
                                      console.error(e.t0),
                                      (t =
                                        (0, c.aE)(e.t0.message) ||
                                        'There was an issue fetching data from Paraswap'),
                                      D(t);
                                  case 25:
                                    return (e.prev = 25), E(!1), e.finish(25);
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
              [W, p, P.underlyingAsset, _.underlyingAsset, L, o, P.amount, d, t]
            ),
            {
              outputAmount: b,
              outputAmountUSD: w,
              inputAmount: f,
              inputAmountUSD: x,
              loading: I,
              error: W,
              buildTxFn: (function () {
                var e = (0, n.Z)(
                  a().mark(function e() {
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (O) {
                              e.next = 2;
                              break;
                            }
                            throw new Error('Route required to build transaction');
                          case 2:
                            return e.abrupt('return', (0, c.xS)(O, u, l, r, d, o));
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
    66510: function (e, r, t) {
      t.d(r, {
        E: function () {
          return i;
        },
        v: function () {
          return c;
        },
      });
      var n = t(78551),
        o = t(2593),
        a = t(56371),
        s = t(13441),
        i = function (e, r, t) {
          var i = (0, s.z)().tokenWrapperService;
          return (0, n.a)({
            queryFn: function () {
              return '' === e || '0' === e
                ? Promise.resolve(o.O$.from(0))
                : i.getTokenInForTokenOut((0, a.parseUnits)(e, r).toString(), t);
            },
            queryKey: ['tokenInForTokenOut', t, e],
            select: function (e) {
              return (0, a.formatUnits)(e.toString(), r);
            },
          });
        },
        c = function (e, r, t) {
          var i = (0, s.z)().tokenWrapperService;
          return (0, n.a)({
            queryFn: function () {
              return '' === e || '0' === e
                ? Promise.resolve(o.O$.from(0))
                : i.getTokenOutForTokenIn((0, a.parseUnits)(e, r).toString(), t);
            },
            queryKey: ['tokenOutForTokenIn', t, e],
            select: function (e) {
              return (0, a.formatUnits)(e.toString(), r);
            },
          });
        };
    },
    43666: function (e, r, t) {
      t.d(r, {
        P: function () {
          return d;
        },
      });
      var n = t(59499),
        o = t(1279),
        a = t(3439),
        s = t(3062),
        i = t(18376),
        c = t(84314),
        u = t(60377),
        l = (0, n.Z)({}, i.el.proto_mainnet_v3, [
          {
            tokenIn: a.ou.DAI.UNDERLYING.toLowerCase(),
            tokenOut: a.ou.sDAI.UNDERLYING.toLowerCase(),
            tokenWrapperContractAddress: a.zq,
          },
        ]),
        d = function () {
          var e,
            r = (0, u.HT)(),
            t = r.marketReferencePriceInUsd,
            n = r.marketReferenceCurrencyDecimals,
            a = r.reserves,
            i = (0, s.Y)(function (e) {
              return e.currentMarket;
            });
          if (!a || 0 === a.length) return [];
          return (null !== (e = l[i]) && void 0 !== e ? e : []).map(function (e) {
            var r = a.find(function (r) {
                return r.underlyingAsset === e.tokenIn;
              }),
              s = a.find(function (r) {
                return r.underlyingAsset === e.tokenOut;
              });
            if (!r || !s) throw new Error('wrapped token reserves not found');
            var i = (0, o.Fv)(r.priceInMarketReferenceCurrency, n),
              u = (0, o.Fv)(s.priceInMarketReferenceCurrency, n);
            return {
              tokenIn: {
                symbol: r.symbol,
                underlyingAsset: r.underlyingAsset,
                decimals: r.decimals,
                priceInUSD: (0, c.N4)(1, i, t).toString(),
                formattedPriceInMarketReferenceCurrency: i,
              },
              tokenOut: {
                symbol: s.symbol,
                underlyingAsset: s.underlyingAsset,
                decimals: s.decimals,
                priceInUSD: (0, c.N4)(1, u, t).toString(),
                formattedPriceInMarketReferenceCurrency: u,
              },
              tokenWrapperAddress: e.tokenWrapperContractAddress,
            };
          });
        };
    },
    7568: function (e, r, t) {
      t.d(r, {
        W: function () {
          return a;
        },
      });
      var n = t(3062),
        o = t(62535),
        a = function () {
          var e = (0, n.Y)(function (e) {
              return e.currentMarketData;
            }),
            r = (0, o.C)(e).data;
          if (!e.v3 || !r) return [];
          if ('0' === r.totalBorrowsUSD) return [];
          var t = [];
          return (
            r.userReservesData.forEach(function (e) {
              Number(e.scaledATokenBalance) > 0 &&
                '0' === e.reserve.baseLTVasCollateral &&
                e.usageAsCollateralEnabledOnUser &&
                '0' !== e.reserve.reserveLiquidationThreshold &&
                t.push(e.reserve.symbol);
            }),
            t
          );
        };
    },
    32356: function (e, r, t) {
      t.d(r, {
        n: function () {
          return R;
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
        u = t(69417),
        l = t(80822),
        d = t(15861),
        p = t(53219),
        m = t(35294),
        f = t(18972),
        h = t(59334),
        v = t(48885),
        x = t(67720),
        y = t(59499),
        g = t(4730),
        b = t(65361),
        A = t(49212),
        T = t(85893),
        w = ['headerContent'];
      function S(e, r) {
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
      function j(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? S(Object(t), !0).forEach(function (r) {
                (0, y.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : S(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var O,
        k = function (e) {
          var r = e.headerContent,
            t = (0, g.Z)(e, w);
          return (0, T.jsx)(
            A.G,
            j(
              j(
                {
                  event: {
                    eventName: b.vh.TOOL_TIP,
                    eventParams: { tooltip: 'Slippage Tollerance' },
                  },
                },
                t
              ),
              {},
              {
                children: (0, T.jsxs)(T.Fragment, {
                  children: [
                    r &&
                      (0, T.jsxs)(T.Fragment, {
                        children: [r, (0, T.jsx)(x.Z, { sx: { my: 2 } })],
                      }),
                    (0, T.jsx)(o.cC, { id: 'eLh0cL' }),
                  ],
                }),
              }
            )
          );
        },
        C = t(3062);
      function I() {
        return (
          (I = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = arguments[r];
                  for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }
                return e;
              }),
          I.apply(null, arguments)
        );
      }
      var E = function (e) {
          return a.createElement(
            'svg',
            I(
              {
                width: 15,
                height: 12,
                viewBox: '0 0 15 12',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              e
            ),
            O ||
              (O = a.createElement('path', {
                d: 'M14.948 12 8.035 0 1.12 12h13.827ZM3.176 5.625 6.353 0H0l3.176 5.625Zm8.949 4.787h-8.18l4.09-7.1 4.09 7.1Z',
                fill: '#2669F5',
              }))
          );
        },
        R = function (e) {
          var r = e.setSlippage,
            t = e.selectedSlippage,
            y = e.slippageTooltipHeader,
            g = a.useState(null),
            A = (0, n.Z)(g, 2),
            w = A[0],
            S = A[1],
            j = Boolean(w),
            O = (0, C.Y)(function (e) {
              return e.trackEvent;
            }),
            I = function () {
              S(null);
            };
          return (0, T.jsxs)(T.Fragment, {
            children: [
              (0, T.jsx)(u.Z, {
                variant: 'text',
                onClick: function (e) {
                  S(e.currentTarget);
                },
                size: 'medium',
                endIcon: (0, T.jsx)(k, {
                  headerContent: y,
                  text: (0, T.jsx)(l.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: (0, T.jsx)(o.cC, {
                      id: 'LVt3TI',
                      values: {
                        0: j ? (0, T.jsx)(s, {}) : (0, T.jsx)(i.Z, {}),
                        selectedSlippage: t,
                      },
                      components: {
                        0: (0, T.jsx)(d.Z, { color: 'text.secondary', variant: 'description' }),
                        1: (0, T.jsx)(d.Z, {
                          color: 'text.main',
                          variant: 'secondary14',
                          sx: { px: '4px' },
                        }),
                        2: (0, T.jsx)(p.Z, { sx: { fontSize: '14px !important', mr: '4px' } }),
                      },
                    }),
                  }),
                  variant: 'secondary14',
                }),
                disabled: !1,
                'data-cy': 'slippageButton_'.concat(t),
              }),
              (0, T.jsxs)(m.Z, {
                anchorEl: w,
                open: j,
                onClose: I,
                MenuListProps: { 'aria-labelledby': 'basic-button' },
                keepMounted: !0,
                'data-cy': 'slippageMenu_'.concat(t),
                children: [
                  (0, T.jsx)(l.Z, {
                    sx: { px: '16px', py: '12px' },
                    children: (0, T.jsx)(d.Z, {
                      variant: 'secondary12',
                      color: 'text.secondary',
                      children: (0, T.jsx)(o.cC, { id: 'iMVZk9' }),
                    }),
                  }),
                  ['0.1', '0.5', '1'].map(function (e) {
                    var n = e === t;
                    return (0, T.jsxs)(
                      f.Z,
                      {
                        selected: n,
                        value: e,
                        onClick: function () {
                          r(e), O(b.vh.SET_SLIPPAGE, { amount: e }), I();
                        },
                        children: [
                          (0, T.jsxs)(h.Z, {
                            primaryTypographyProps: { variant: 'subheader1' },
                            children: [e, '%'],
                          }),
                          (0, T.jsx)(v.Z, {
                            children: (0, T.jsx)(p.Z, { children: n && (0, T.jsx)(c.Z, {}) }),
                          }),
                        ],
                      },
                      e
                    );
                  }),
                  (0, T.jsx)(x.Z, {}),
                  (0, T.jsxs)(l.Z, {
                    sx: { px: '16px', py: '12px', display: 'inline-flex', alignItems: 'center' },
                    children: [
                      (0, T.jsxs)(d.Z, {
                        variant: 'secondary12',
                        color: 'text.secondary',
                        sx: { display: 'flex', alignItems: 'center' },
                        children: [
                          (0, T.jsx)(o.cC, { id: 'g2UNkE' }),
                          (0, T.jsx)(p.Z, {
                            sx: {
                              fontSize: '20px',
                              width: '20px',
                              color: '#2669F5',
                              position: 'relative',
                              top: '5px',
                              left: '5px',
                            },
                            children: (0, T.jsx)(E, {}),
                          }),
                        ],
                      }),
                      (0, T.jsx)(d.Z, {
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
    58730: function (e, r, t) {
      t.d(r, {
        $m: function () {
          return u;
        },
        DX: function () {
          return c;
        },
        _S: function () {
          return s;
        },
        bU: function () {
          return i;
        },
      });
      var n = t(20854),
        o = t(1279),
        a = t(70794);
      function s(e) {
        var r,
          t = e.fromAmount,
          a = e.fromAssetData,
          s = e.fromAssetUserData,
          i = e.toAmountAfterSlippage,
          c = e.toAssetData,
          u = e.user,
          l = a.eModes.find(function (e) {
            return e.id === u.userEmodeCategoryId;
          }),
          d = c.eModes.find(function (e) {
            return e.id === u.userEmodeCategoryId;
          }),
          p =
            u.isInEmode && l
              ? l.eMode.formattedLiquidationThreshold
              : a.formattedReserveLiquidationThreshold,
          m = '0';
        s.usageAsCollateralEnabledOnUser &&
          '0' !== a.reserveLiquidationThreshold &&
          (m = (0, n.L1)({
            collateralBalanceMarketReferenceCurrency: (0, o.hE)(t).multipliedBy(
              a.formattedPriceInMarketReferenceCurrency
            ),
            borrowBalanceMarketReferenceCurrency: u.totalBorrowsMarketReferenceCurrency,
            currentLiquidationThreshold: p,
          }).toString());
        var f = '0';
        return (
          ((!u.isInIsolationMode && !c.isIsolated) ||
            (u.isInIsolationMode &&
              (null === (r = u.isolatedReserve) || void 0 === r ? void 0 : r.underlyingAsset) ===
                c.underlyingAsset)) &&
            (f = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, o.hE)(i).multipliedBy(
                c.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: u.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold:
                u.isInEmode && d
                  ? d.eMode.formattedLiquidationThreshold
                  : c.formattedReserveLiquidationThreshold,
            }).toString()),
          {
            hfEffectOfFromAmount: m,
            hfAfterSwap:
              '-1' === u.healthFactor
                ? (0, o.hE)('-1')
                : (0, o.hE)(u.healthFactor).plus(f).minus(m),
          }
        );
      }
      var i = function (e) {
          var r = e.user,
            t = e.amountToReceiveAfterSwap,
            s = e.amountToSwap,
            i = e.fromAssetData,
            c = e.toAssetData,
            u = e.repayWithUserReserve,
            l = e.debt,
            d = i.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            p =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : i.formattedReserveLiquidationThreshold,
            m = '0';
          null !== u &&
            void 0 !== u &&
            u.usageAsCollateralEnabledOnUser &&
            i.usageAsCollateralEnabled &&
            (m = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, o.hE)(s).multipliedBy(
                i.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold: p,
            }).toString());
          var f = (0, o.hE)(a.O.min(t, l)).multipliedBy(c.priceInUSD).toString(10),
            h = (0, o.hE)(r.totalBorrowsUSD).minus(f);
          h = a.O.max(h, (0, o.hE)('0'));
          var v = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: r.totalCollateralUSD,
              borrowBalanceMarketReferenceCurrency: h.toString(10),
              currentLiquidationThreshold: r.currentLiquidationThreshold,
            }),
            x =
              '0' !== i.reserveLiquidationThreshold &&
              null !== u &&
              void 0 !== u &&
              u.usageAsCollateralEnabledOnUser
                ? (0, n.L1)({
                    collateralBalanceMarketReferenceCurrency: (0, o.hE)(s).multipliedBy(
                      i.priceInUSD
                    ),
                    borrowBalanceMarketReferenceCurrency: h.toString(10),
                    currentLiquidationThreshold: i.formattedReserveLiquidationThreshold,
                  }).toString()
                : '0',
            y = v.eq(-1) ? v : v.minus(x);
          return {
            hfEffectOfFromAmount: (0, o.hE)(m),
            hfAfterSwap: y.isLessThan(0) && !y.eq(-1) ? 0 : y,
          };
        },
        c = function (e) {
          var r = e.user,
            t = e.userReserve,
            s = e.poolReserve,
            i = e.withdrawAmount,
            c = (0, o.hE)(r.totalCollateralMarketReferenceCurrency),
            u = r.currentLiquidationThreshold,
            l = (0, o.hE)(r.healthFactor),
            d = s.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            p =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : s.formattedReserveLiquidationThreshold;
          if (
            null !== t &&
            void 0 !== t &&
            t.usageAsCollateralEnabledOnUser &&
            '0' !== s.reserveLiquidationThreshold
          ) {
            var m = (0, o.hE)(i).multipliedBy(s.formattedPriceInMarketReferenceCurrency);
            (c = c.minus(m)),
              (u = (0, o.hE)(r.totalCollateralMarketReferenceCurrency)
                .multipliedBy((0, o.hE)(r.currentLiquidationThreshold))
                .minus((0, o.hE)(m).multipliedBy(p))
                .div(c)
                .toFixed(4, a.O.ROUND_DOWN)),
              (l = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: c,
                borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
                currentLiquidationThreshold: u,
              }));
          }
          return l;
        },
        u = function (e, r, t) {
          var a,
            s = e ? (0, o.hE)(e.healthFactor) : '-1',
            i = e ? (0, o.hE)(e.totalCollateralMarketReferenceCurrency).plus(t) : '-1',
            c = e
              ? (0, o.hE)(e.totalCollateralMarketReferenceCurrency)
                  .multipliedBy(e.currentLiquidationThreshold)
                  .plus(t.multipliedBy(r.formattedReserveLiquidationThreshold))
                  .dividedBy(i)
              : '-1';
          return (
            e &&
              ((!e.isInIsolationMode && !r.isIsolated) ||
                (e.isInIsolationMode &&
                  (null === (a = e.isolatedReserve) || void 0 === a
                    ? void 0
                    : a.underlyingAsset) === r.underlyingAsset)) &&
              (s = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: i,
                borrowBalanceMarketReferenceCurrency: (0, o.hE)(
                  e.totalBorrowsMarketReferenceCurrency
                ),
                currentLiquidationThreshold: c,
              })),
            s
          );
        };
    },
  },
]);
