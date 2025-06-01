'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [615],
  {
    69368: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return j;
        },
      });
      var n = t(63366),
        o = t(87462),
        a = t(67294),
        s = t(63961),
        i = t(94780),
        u = t(2101),
        c = t(21964),
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
        h = (0, l.Z)(
          (0, d.jsx)('path', {
            d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z',
          }),
          'IndeterminateCheckBox'
        ),
        f = t(98216),
        v = t(28628),
        x = t(90948),
        y = t(14136),
        A = t(1588),
        T = t(34867);
      function g(e) {
        return (0, T.ZP)('MuiCheckbox', e);
      }
      var b = (0, A.Z)('MuiCheckbox', [
        'root',
        'checked',
        'disabled',
        'indeterminate',
        'colorPrimary',
        'colorSecondary',
        'sizeSmall',
        'sizeMedium',
      ]);
      const S = [
          'checkedIcon',
          'color',
          'icon',
          'indeterminate',
          'indeterminateIcon',
          'inputProps',
          'size',
          'className',
        ],
        w = (0, x.ZP)(c.Z, {
          shouldForwardProp: (e) => (0, y.Z)(e) || 'classes' === e,
          name: 'MuiCheckbox',
          slot: 'Root',
          overridesResolver: (e, r) => {
            const { ownerState: t } = e;
            return [
              r.root,
              t.indeterminate && r.indeterminate,
              r[`size${(0, f.Z)(t.size)}`],
              'default' !== t.color && r[`color${(0, f.Z)(t.color)}`],
            ];
          },
        })(({ theme: e, ownerState: r }) =>
          (0, o.Z)(
            { color: (e.vars || e).palette.text.secondary },
            !r.disableRipple && {
              '&:hover': {
                backgroundColor: e.vars
                  ? `rgba(${'default' === r.color ? e.vars.palette.action.activeChannel : e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : (0, u.Fq)(
                      'default' === r.color ? e.palette.action.active : e.palette[r.color].main,
                      e.palette.action.hoverOpacity
                    ),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            },
            'default' !== r.color && {
              [`&.${b.checked}, &.${b.indeterminate}`]: {
                color: (e.vars || e).palette[r.color].main,
              },
              [`&.${b.disabled}`]: { color: (e.vars || e).palette.action.disabled },
            }
          )
        ),
        O = (0, d.jsx)(m, {}),
        k = (0, d.jsx)(p, {}),
        I = (0, d.jsx)(h, {});
      var j = a.forwardRef(function (e, r) {
        var t, u;
        const c = (0, v.i)({ props: e, name: 'MuiCheckbox' }),
          {
            checkedIcon: l = O,
            color: p = 'primary',
            icon: m = k,
            indeterminate: h = !1,
            indeterminateIcon: x = I,
            inputProps: y,
            size: A = 'medium',
            className: T,
          } = c,
          b = (0, n.Z)(c, S),
          j = h ? x : m,
          C = h ? x : l,
          E = (0, o.Z)({}, c, { color: p, indeterminate: h, size: A }),
          R = ((e) => {
            const { classes: r, indeterminate: t, color: n, size: a } = e,
              s = {
                root: ['root', t && 'indeterminate', `color${(0, f.Z)(n)}`, `size${(0, f.Z)(a)}`],
              },
              u = (0, i.Z)(s, g, r);
            return (0, o.Z)({}, r, u);
          })(E);
        return (0, d.jsx)(
          w,
          (0, o.Z)(
            {
              type: 'checkbox',
              inputProps: (0, o.Z)({ 'data-indeterminate': h }, y),
              icon: a.cloneElement(j, { fontSize: null != (t = j.props.fontSize) ? t : A }),
              checkedIcon: a.cloneElement(C, { fontSize: null != (u = C.props.fontSize) ? u : A }),
              ownerState: E,
              ref: r,
              className: (0, s.Z)(R.root, T),
            },
            b,
            { classes: R }
          )
        );
      });
    },
    60615: function (e, r, t) {
      t.r(r),
        t.d(r, {
          WithdrawModal: function () {
            return We;
          },
        });
      var n = t(59499),
        o = t(57499),
        a = t(67294),
        s = t(49679),
        i = t(44949),
        u = t(3062),
        c = t(79850),
        l = t(15629),
        d = t(92519),
        p = t(90116),
        m = t(17674),
        h = t(1279);
      var f = a.forwardRef(function (e, r) {
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
        A = t(26447),
        T = t(69368),
        g = t(70946),
        b = t(32867),
        S = t(45640),
        w = t(35783),
        O = t(60377),
        k = t(87886),
        I = t(94751),
        j = t(66510),
        C = t(43666),
        E = t(7568),
        R = t(72005),
        W = t(32356),
        D = t(65361),
        _ = t(58730),
        P = t(84314),
        N = t(73886),
        L = t(23478),
        M = t(83063),
        H = t(67944),
        B = t(70794),
        U = function (e, r, t) {
          var n = (0, h.hE)((null === r || void 0 === r ? void 0 : r.underlyingBalance) || '0'),
            o = (0, h.hE)(t.unborrowedLiquidity),
            a = B.O.min(n, o),
            s = (0, h.hE)('0'),
            i = t.eModes.find(function (r) {
              return r.id === e.userEmodeCategoryId;
            }),
            u =
              e.isInEmode && i
                ? i.eMode.formattedLiquidationThreshold
                : t.formattedReserveLiquidationThreshold;
          if (
            null !== r &&
            void 0 !== r &&
            r.usageAsCollateralEnabledOnUser &&
            '0' !== t.reserveLiquidationThreshold &&
            '0' !== e.totalBorrowsMarketReferenceCurrency
          ) {
            var c = (0, h.hE)(e.healthFactor).minus('1.01');
            c.gt('0') && (s = c.multipliedBy(e.totalBorrowsMarketReferenceCurrency).div(u)),
              (a = B.O.min(a, s.dividedBy(t.formattedPriceInMarketReferenceCurrency)));
          }
          return a;
        },
        Z = t(50029),
        q = t(87794),
        F = t.n(q),
        z = t(75331),
        Y = t(24243),
        V = t(80854),
        Q = t(30202),
        G = t(56371),
        K = t(92997),
        $ = t(64041),
        X = t(805),
        J = t(52251),
        ee = t(84207),
        re = t(53008),
        te = t(85893);
      function ne(e, r) {
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
      function oe(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ne(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ne(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var ae = function (e) {
        var r = e.amountToSwap,
          t = e.amountToReceive,
          n = e.isWrongNetwork,
          s = e.sx,
          c = e.poolReserve,
          l = e.targetReserve,
          d = e.isMaxSelected,
          p = e.loading,
          h = e.blocked,
          f = e.buildTxFn,
          v = (0, u.Y)(
            (0, N.N)(function (e) {
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
          A = x[1],
          T = x[2],
          g = x[3],
          b = x[4],
          S = x[5],
          w = x[6],
          O = x[7],
          I = x[8],
          j = x[9],
          C = (0, i.vR)(),
          E = C.approvalTxState,
          W = C.mainTxState,
          _ = C.loadingTxns,
          P = C.setMainTxState,
          L = C.setTxError,
          M = C.setGasLimit,
          H = C.setLoadingTxns,
          B = C.setApprovalTxState,
          U = (0, R.Z)(),
          q = U.sendTx,
          ne = U.signTxData,
          ae = (0, Q.NL)(),
          se = (0, a.useState)(void 0),
          ie = se[0],
          ue = se[1],
          ce = (0, a.useState)(),
          le = ce[0],
          de = ce[1],
          pe = (0, a.useMemo)(
            function () {
              return void 0 !== ie && -1 !== ie && '0' !== r && !n && ie <= Number(r);
            },
            [ie, r, n]
          ),
          me = w === $.n.PERMIT,
          he = (function () {
            var e = (0, Z.Z)(
              F().mark(function e() {
                var n, o, a, s, i;
                return F().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), P(oe(oe({}, W), {}, { loading: !0 })), (e.next = 4), f()
                          );
                        case 4:
                          return (
                            (n = e.sent),
                            (o = y({
                              poolReserve: c,
                              targetReserve: l,
                              isMaxSelected: d,
                              amountToSwap: (0, G.parseUnits)(r, c.decimals).toString(),
                              amountToReceive: (0, G.parseUnits)(t, l.decimals).toString(),
                              augustus: n.augustus,
                              txCalldata: n.swapCallData,
                              signatureParams: le,
                            })),
                            (e.next = 8),
                            S(o)
                          );
                        case 8:
                          return (a = e.sent), (e.next = 11), q(a);
                        case 11:
                          return (s = e.sent), (e.next = 14), s.wait(1);
                        case 14:
                          ae.invalidateQueries({ queryKey: J.B.pool }),
                            ae.invalidateQueries({ queryKey: J.B.gho }),
                            P({ txHash: s.hash, loading: !1, success: !0 }),
                            I(s.hash, {
                              action: z.UQ.withdrawAndSwitch,
                              txState: 'success',
                              asset: c.underlyingAsset,
                              amount: (0, G.parseUnits)(n.inputAmount, c.decimals).toString(),
                              assetName: c.name,
                              outAsset: l.underlyingAsset,
                              outAssetName: l.name,
                              outAmount: (0, G.parseUnits)(n.outputAmount, l.decimals).toString(),
                            }),
                            (e.next = 26);
                          break;
                        case 20:
                          (e.prev = 20),
                            (e.t0 = e.catch(0)),
                            (i = (0, X.WG)(e.t0, X.aD.GAS_ESTIMATION, !1)),
                            L(i),
                            P({ txHash: void 0, loading: !1 }),
                            j(D.vh.TRANSACTION_ERROR, {
                              transactiontype: z.UQ.withdrawAndSwitch,
                              asset: c.underlyingAsset,
                              assetName: c.name,
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
          fe = (function () {
            var e = (0, Z.Z)(
              F().mark(function e() {
                var t, n, o, a, s, i, u, l, d;
                return F().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = (0, k.sm)(r, c.decimals)),
                            (n = {
                              user: g,
                              token: c.aTokenAddress,
                              spender: A.addresses.WITHDRAW_SWITCH_ADAPTER || '',
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
                            O(oe(oe({}, n), {}, { deadline: o }))
                          );
                        case 7:
                          return (
                            (a = e.sent),
                            B(oe(oe({}, E), {}, { loading: !0 })),
                            (e.next = 11),
                            ne(a)
                          );
                        case 11:
                          (s = e.sent),
                            de({ signature: s, deadline: o, amount: t }),
                            B({ txHash: K.Z, loading: !1, success: !0 }),
                            (e.next = 30);
                          break;
                        case 16:
                          return (i = b(n)), (e.next = 19), S(i);
                        case 19:
                          return (
                            (u = e.sent), B(oe(oe({}, E), {}, { loading: !0 })), (e.next = 23), q(u)
                          );
                        case 23:
                          return (l = e.sent), (e.next = 26), l.wait(1);
                        case 26:
                          B({ txHash: l.hash, loading: !1, success: !0 }),
                            I(l.hash, {
                              action: z.UQ.withdrawAndSwitch,
                              txState: 'success',
                              asset: c.aTokenAddress,
                              amount: (0, G.parseUnits)(t, c.decimals).toString(),
                              assetName: 'a'.concat(c.symbol),
                              spender: A.addresses.WITHDRAW_SWITCH_ADAPTER,
                            }),
                            L(void 0),
                            ve(c.aTokenAddress);
                        case 30:
                          e.next = 37;
                          break;
                        case 32:
                          (e.prev = 32),
                            (e.t0 = e.catch(2)),
                            (d = (0, X.WG)(e.t0, X.aD.GAS_ESTIMATION, !1)),
                            L(d),
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
              var e = (0, Z.Z)(
                F().mark(function e(r) {
                  var t, n, o;
                  return F().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            H(!0),
                            (t = T()),
                            (n = new Y.A(t)),
                            (e.next = 5),
                            n.approvedAmount({
                              user: g,
                              token: r,
                              spender: A.addresses.WITHDRAW_SWITCH_ADAPTER || '',
                            })
                          );
                        case 5:
                          (o = e.sent), ue(o), H(!1);
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
            [T, g, A.addresses.WITHDRAW_SWITCH_ADAPTER, H]
          );
        return (
          (0, a.useEffect)(
            function () {
              ve(c.aTokenAddress);
            },
            [ve, c.aTokenAddress]
          ),
          (0, a.useEffect)(
            function () {
              var e = 0;
              (e = Number(V.eB[z.UQ.withdrawAndSwitch].recommended)),
                pe && !E.success && (e += Number(re.pQ)),
                M(e.toString());
            },
            [pe, E, M]
          ),
          (0, te.jsx)(ee.B, {
            mainTxState: W,
            approvalTxState: E,
            isWrongNetwork: n,
            preparingTransactions: _,
            handleAction: he,
            requiresAmount: !0,
            amount: r,
            handleApproval: function () {
              return fe();
            },
            requiresApproval: pe,
            actionText: (0, te.jsx)(o.cC, { id: '7sofdl' }),
            actionInProgressText: (0, te.jsx)(o.cC, { id: '1m9Qqc' }),
            sx: s,
            errorParams: {
              loading: !1,
              disabled: h || !(null !== E && void 0 !== E && E.success),
              content: (0, te.jsx)(o.cC, { id: '7sofdl' }),
              handleClick: he,
            },
            fetchingData: p,
            blocked: h,
            tryPermit: !0,
          })
        );
      };
      var se = a.forwardRef(function (e, r) {
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
        ie = t(60386),
        ue = function (e) {
          var r = e.txHash,
            t = e.amount,
            n = e.symbol,
            a = e.outAmount,
            s = e.outSymbol;
          return (0, te.jsx)(ie.R, {
            txHash: r,
            children: (0, te.jsxs)(v.Z, {
              sx: {
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              },
              children: [
                (0, te.jsx)(y.Z, { children: (0, te.jsx)(o.cC, { id: 'qFD/ij' }) }),
                (0, te.jsxs)(v.Z, {
                  sx: { display: 'flex', alignItems: 'center', gap: 2, mt: 3 },
                  children: [
                    (0, te.jsx)(S.T1, { sx: { fontSize: '20px' }, symbol: n }),
                    (0, te.jsx)(b.B, { value: Number(t), compact: !0, variant: 'main14' }),
                    (0, te.jsx)(y.Z, { variant: 'secondary14', children: n }),
                    (0, te.jsx)(x.Z, {
                      sx: { fontSize: '14px' },
                      children: (0, te.jsx)(se, { fontSize: '14px' }),
                    }),
                    (0, te.jsx)(S.T1, { sx: { fontSize: '20px' }, symbol: s }),
                    (0, te.jsx)(b.B, { value: Number(a), variant: 'main14' }),
                    (0, te.jsx)(y.Z, { variant: 'secondary14', children: s }),
                  ],
                }),
              ],
            }),
          });
        },
        ce = t(21046),
        le = t(94303),
        de = t(69986),
        pe = t(35258);
      function me(e, r) {
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
      function he(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? me(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : me(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var fe,
        ve = function (e) {
          var r = e.poolReserve,
            t = e.amountToWithdraw,
            n = e.isWrongNetwork,
            s = e.tokenWrapperAddress,
            c = e.sx,
            l = e.blocked,
            d = (0, u.Y)(
              (0, N.N)(function (e) {
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
            h = p[0],
            f = p[1],
            v = p[2],
            x = p[3],
            y = p[4],
            A = (0, R.Z)().sendTx,
            T = (0, Q.NL)(),
            g = (0, a.useState)(),
            b = g[0],
            S = g[1],
            w = (0, i.vR)(),
            O = w.approvalTxState,
            k = w.mainTxState,
            I = w.loadingTxns,
            j = w.setLoadingTxns,
            C = w.setApprovalTxState,
            E = w.setMainTxState,
            W = w.setGasLimit,
            D = w.setTxError,
            _ = (0, pe.z)().tokenWrapperService,
            P = (0, de.i)({ chainId: y.chainId, token: r.aTokenAddress, spender: s }),
            L = P.data,
            M = P.isFetching,
            H = P.refetch;
          j(M);
          var B = !1;
          void 0 !== L &&
            (B = (0, re.iv)({
              approvedAmount: L.toString(),
              amount: t,
              signedAmount: b ? b.amount : '0',
            }));
          var U = v === $.n.PERMIT,
            q = (0, le.M)({
              usePermit: U,
              approvedAmount: {
                amount: (null === L || void 0 === L ? void 0 : L.toString()) || '0',
                spender: s,
                token: r.aTokenAddress,
                user: x,
              },
              requiresApproval: B,
              assetAddress: r.aTokenAddress,
              symbol: r.symbol,
              decimals: r.decimals,
              signatureAmount: t,
              onApprovalTxConfirmed: H,
              onSignTxCompleted: function (e) {
                return S(e);
              },
            }).approval,
            Y = (function () {
              var e = (0, Z.Z)(
                F().mark(function e() {
                  var n, o, a, i, u;
                  return F().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              E(he(he({}, k), {}, { loading: !0 })),
                              (o = '-1' === t ? ce.Bz.toString() : (0, V.gU)(t, r.decimals)),
                              !U || !b)
                            ) {
                              e.next = 17;
                              break;
                            }
                            return (
                              (e.next = 6),
                              _.withdrawWrappedTokenWithPermit(o, s, x, b.deadline, b.signature)
                            );
                          case 6:
                            return (a = e.sent), (e.next = 9), f(a);
                          case 9:
                            return (a = e.sent), (e.next = 12), A(a);
                          case 12:
                            return (n = e.sent), (e.next = 15), n.wait(1);
                          case 15:
                            e.next = 28;
                            break;
                          case 17:
                            return (e.next = 19), _.withdrawWrappedToken(o, s, h);
                          case 19:
                            return (i = e.sent), (e.next = 22), f(i);
                          case 22:
                            return (i = e.sent), (e.next = 25), A(i);
                          case 25:
                            return (n = e.sent), (e.next = 28), n.wait(1);
                          case 28:
                            E({ txHash: n.hash, loading: !1, success: !0 }),
                              T.invalidateQueries({ queryKey: J.B.pool }),
                              T.invalidateQueries({
                                queryKey: J.B.approvedAmount(x, r.aTokenAddress, s, y.chainId),
                              }),
                              (e.next = 38);
                            break;
                          case 33:
                            (e.prev = 33),
                              (e.t0 = e.catch(0)),
                              (u = (0, X.WG)(e.t0, X.aD.GAS_ESTIMATION, !1)),
                              D(u),
                              C({ txHash: void 0, loading: !1 });
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
                (e = Number(V.eB[z.UQ.withdraw].recommended)),
                  B && !O.success && (e += Number(re.pQ)),
                  W(e.toString());
              },
              [B, O, U, W]
            ),
            (0, te.jsx)(ee.B, {
              blocked: l,
              preparingTransactions: I,
              approvalTxState: O,
              mainTxState: k,
              amount: t,
              isWrongNetwork: n,
              requiresAmount: !0,
              actionInProgressText: (0, te.jsx)(o.cC, { id: 'QQYsQ7' }),
              actionText: (0, te.jsx)(o.cC, { id: 'OsyKSt' }),
              handleAction: Y,
              requiresApproval: B,
              handleApproval: q,
              sx: c,
              tryPermit: !0,
            })
          );
        };
      !(function (e) {
        (e[(e.CAN_NOT_WITHDRAW_THIS_AMOUNT = 0)] = 'CAN_NOT_WITHDRAW_THIS_AMOUNT'),
          (e[(e.POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY = 1)] = 'POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED');
      })(fe || (fe = {}));
      var xe,
        ye = function (e) {
          var r,
            t = e.assetsBlockingWithdraw,
            a = e.poolReserve,
            s = e.healthFactorAfterWithdraw,
            u = e.withdrawAmount,
            c = e.user,
            l = (0, i.vR)().mainTxState,
            d = void 0,
            p = (0, h.hE)(a.unborrowedLiquidity);
          l.success ||
            l.txHash ||
            (t.length > 0 && !t.includes(a.symbol)
              ? (d = fe.ZERO_LTV_WITHDRAW_BLOCKED)
              : s.lt('1') && '0' !== c.totalBorrowsMarketReferenceCurrency
                ? (d = fe.CAN_NOT_WITHDRAW_THIS_AMOUNT)
                : d ||
                  (!p.eq('0') && !(0, h.hE)(u).gt(a.unborrowedLiquidity)) ||
                  (d = fe.POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY));
          var m =
            ((r = {}),
            (0, n.Z)(r, fe.CAN_NOT_WITHDRAW_THIS_AMOUNT, (0, te.jsx)(o.cC, { id: 'c9b44w' })),
            (0, n.Z)(
              r,
              fe.POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY,
              (0, te.jsx)(o.cC, { id: 'UXeR72' })
            ),
            (0, n.Z)(
              r,
              fe.ZERO_LTV_WITHDRAW_BLOCKED,
              (0, te.jsx)(o.cC, { id: 'nUK1ou', values: { 0: t.join(', ') } })
            ),
            r);
          return { blockingError: d, errorComponent: d ? m[d] : null };
        };
      function Ae(e, r) {
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
      function Te(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? Ae(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : Ae(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      !(function (e) {
        (e[(e.CAN_NOT_WITHDRAW_THIS_AMOUNT = 0)] = 'CAN_NOT_WITHDRAW_THIS_AMOUNT'),
          (e[(e.POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY = 1)] = 'POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED');
      })(xe || (xe = {}));
      var ge,
        be = function (e) {
          var r = e.poolReserve,
            t = e.userReserve,
            n = e.symbol,
            s = e.isWrongNetwork,
            c = e.user,
            l = (0, i.vR)(),
            d = l.gasLimit,
            B = l.mainTxState,
            Z = l.txError,
            q = (0, R.Z)().currentAccount,
            F = (0, O.HT)().reserves,
            z = (0, C.P)(),
            Y = (0, a.useState)(''),
            V = Y[0],
            Q = Y[1],
            G = (0, a.useState)(!1),
            K = G[0],
            $ = G[1],
            X = (0, a.useRef)(''),
            J = (0, u.Y)(
              (0, N.N)(function (e) {
                return [e.trackEvent, e.currentNetworkConfig, e.currentChainId];
              })
            ),
            ee = (0, m.Z)(J, 3),
            re = ee[0],
            ne = ee[1],
            oe = ee[2],
            se = (0, a.useState)('0.1'),
            ie = se[0],
            ce = se[1],
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
            he = '-1' === V,
            fe = c.userReservesData.find(function (e) {
              return e.underlyingAsset === pe.address;
            }),
            xe = U(c, t, r),
            Ae = (0, h.hE)((null === t || void 0 === t ? void 0 : t.underlyingBalance) || '0'),
            ge = !1,
            be = z.find(function (e) {
              return e.tokenOut.underlyingAsset === r.underlyingAsset;
            });
          be && (ge = pe.address === be.tokenIn.underlyingAsset);
          var Se = (0, j.E)(
              X.current,
              r.decimals,
              (null === be || void 0 === be ? void 0 : be.tokenWrapperAddress) || ''
            ),
            we = Se.data,
            Oe = Se.isFetching,
            ke = (0, I.k)({
              chainId: ne.underlyingChainId || oe,
              userAddress: q,
              swapIn: Te(Te({}, r), {}, { amount: X.current }),
              swapOut: Te(Te({}, fe.reserve), {}, { amount: '0' }),
              max: he && xe.eq(Ae),
              skip: ge || B.loading || !1,
              maxSlippage: Number(ie),
            }),
            Ie = ke.inputAmountUSD,
            je = ke.inputAmount,
            Ce = ke.outputAmount,
            Ee = ke.outputAmountUSD,
            Re = ke.error,
            We = ke.loading,
            De = ke.buildTxFn,
            _e = Ee;
          ge &&
            (_e = (0, h.hE)(we || '0')
              .multipliedBy((null === be || void 0 === be ? void 0 : be.tokenIn.priceInUSD) || 0)
              .toString());
          var Pe = (We && '0' === Ee) || (ge && Oe),
            Ne = (0, h.hE)(r.unborrowedLiquidity),
            Le = (0, E.W)(),
            Me = he ? xe.toString(10) : V,
            He = (0, _.DX)({ user: c, userReserve: t, poolReserve: r, withdrawAmount: Me }),
            Be = ye({
              assetsBlockingWithdraw: Le,
              poolReserve: r,
              healthFactorAfterWithdraw: He,
              withdrawAmount: Me,
              user: c,
            }),
            Ue = Be.blockingError,
            Ze = Be.errorComponent,
            qe = He.toNumber() >= 1 && He.toNumber() < 1.5 && t.usageAsCollateralEnabledOnUser,
            Fe = (0, h.hE)(Me).multipliedBy(
              (null === t || void 0 === t ? void 0 : t.reserve.priceInUSD) || 0
            ),
            ze = (0, k.IG)(Ce, ie, fe.reserve.decimals);
          if (B.success) {
            var Ye = je,
              Ve = ze;
            return (
              ge && ((Ye = X.current), (Ve = we || '0')),
              (0, te.jsx)(ue, {
                txHash: B.txHash,
                amount: Ye,
                symbol: r.isWrappedBaseAsset ? ne.baseAssetSymbol : r.symbol,
                outSymbol: pe.symbol,
                outAmount: Ve,
              })
            );
          }
          return (0, te.jsxs)(te.Fragment, {
            children: [
              (0, te.jsx)(L.W, {
                inputTitle: (0, te.jsx)(o.cC, { id: 'OsyKSt' }),
                value: Me,
                onChange: function (e) {
                  var t = '-1' === e,
                    n = (0, P.$w)(e, r.decimals);
                  (X.current = t ? xe.toString(10) : n),
                    Q(n),
                    t && xe.eq(Ae) && re(D.vh.MAX_INPUT_SELECTION, { type: 'withdraw' });
                },
                symbol: n,
                assets: [
                  {
                    balance: xe.toString(10),
                    symbol: n,
                    iconSymbol: r.isWrappedBaseAsset ? ne.baseAssetSymbol : r.iconSymbol,
                  },
                ],
                usdValue: Fe.toString(10),
                isMaxSelected: he,
                disabled: B.loading,
                maxValue: xe.toString(10),
                balanceText: Ne.lt(Ae)
                  ? (0, te.jsx)(o.cC, { id: 'csDS2L' })
                  : (0, te.jsx)(o.cC, { id: 'zmTPiV' }),
              }),
              (0, te.jsxs)(v.Z, {
                sx: {
                  padding: '18px',
                  pt: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                },
                children: [
                  (0, te.jsx)(x.Z, {
                    sx: { fontSize: '18px !important' },
                    children: (0, te.jsx)(f, {}),
                  }),
                  (0, te.jsx)(g.B, { loading: Pe, outputAmountUSD: Ee, inputAmountUSD: Ie }),
                ],
              }),
              (0, te.jsx)(L.W, {
                value: ge ? we || '' : Ce,
                onSelect: me,
                usdValue: _e,
                symbol: pe.symbol,
                assets: le,
                inputTitle: (0, te.jsx)(o.cC, { id: '+EGVI0' }),
                balanceText: (0, te.jsx)(o.cC, { id: 'zmTPiV' }),
                disableInput: !0,
                loading: Pe,
              }),
              Re &&
                !Pe &&
                !ge &&
                (0, te.jsx)(y.Z, { variant: 'helperText', color: 'error.main', children: Re }),
              void 0 !== Ue &&
                (0, te.jsx)(y.Z, { variant: 'helperText', color: 'error.main', children: Ze }),
              (0, te.jsxs)(H.m6, {
                gasLimit: d,
                slippageSelector: ge
                  ? null
                  : (0, te.jsx)(W.n, {
                      selectedSlippage: ie,
                      setSlippage: ce,
                      slippageTooltipHeader: (0, te.jsxs)(A.Z, {
                        direction: 'row',
                        gap: 2,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        children: [
                          (0, te.jsx)(o.cC, { id: 'pjO/iH' }),
                          (0, te.jsx)(A.Z, {
                            alignItems: 'end',
                            children: (0, te.jsxs)(A.Z, {
                              direction: 'row',
                              children: [
                                (0, te.jsx)(S.T1, {
                                  symbol: fe.reserve.iconSymbol,
                                  sx: { mr: 1, fontSize: '14px' },
                                }),
                                (0, te.jsx)(b.B, { value: ze, variant: 'secondary12' }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                children: [
                  (0, te.jsx)(H.oD, {
                    description: (0, te.jsx)(o.cC, { id: '3K0oMo' }),
                    value: Ae.minus(Me || '0').toString(10),
                    symbol: r.isWrappedBaseAsset ? ne.baseAssetSymbol : r.symbol,
                  }),
                  (0, te.jsx)(H.jz, {
                    visibleHfChange: !!V,
                    healthFactor: c ? c.healthFactor : '-1',
                    futureHealthFactor: He.toString(10),
                  }),
                ],
              }),
              Z && (0, te.jsx)(M.Q, { txError: Z }),
              qe &&
                (0, te.jsxs)(te.Fragment, {
                  children: [
                    (0, te.jsx)(w.v, {
                      severity: 'error',
                      sx: { my: 6 },
                      children: (0, te.jsx)(o.cC, { id: 'nxyWvj' }),
                    }),
                    (0, te.jsxs)(v.Z, {
                      sx: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mx: '24px',
                        mb: '12px',
                      },
                      children: [
                        (0, te.jsx)(T.Z, {
                          checked: K,
                          onChange: function () {
                            $(!K),
                              re(D.vh.ACCEPT_RISK, { modal: 'Withdraw', riskCheckboxAccepted: K });
                          },
                          size: 'small',
                          'data-cy': 'risk-checkbox',
                        }),
                        (0, te.jsx)(y.Z, {
                          variant: 'description',
                          children: (0, te.jsx)(o.cC, { id: '2eBWE6' }),
                        }),
                      ],
                    }),
                  ],
                }),
              ge
                ? (0, te.jsx)(ve, {
                    poolReserve: r,
                    amountToWithdraw: X.current,
                    isWrongNetwork: s,
                    tokenWrapperAddress:
                      (null === be || void 0 === be ? void 0 : be.tokenWrapperAddress) || '',
                    sx: qe ? { mt: 0 } : {},
                    blocked: void 0 !== Ue || (qe && !K),
                  })
                : (0, te.jsx)(ae, {
                    poolReserve: r,
                    targetReserve: fe.reserve,
                    amountToSwap: je,
                    amountToReceive: ze,
                    isMaxSelected: he && xe.eq(Ae),
                    isWrongNetwork: s,
                    blocked: void 0 !== Ue || (qe && !K),
                    buildTxFn: De,
                    sx: qe ? { mt: 0 } : {},
                  }),
            ],
          });
        },
        Se = t(44880),
        we = function (e) {
          var r = e.poolReserve,
            t = e.amountToWithdraw,
            n = e.poolAddress,
            a = e.isWrongNetwork,
            s = e.symbol,
            i = e.blocked,
            c = e.sx,
            l = (0, u.Y)(function (e) {
              return e.withdraw;
            }),
            d = (0, K.Q)({
              tryPermit: !1,
              handleGetTxns: (function () {
                var e = (0, Z.Z)(
                  F().mark(function e() {
                    return F().wrap(function (e) {
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
              protocolAction: z.UQ.withdraw,
            }),
            p = d.action,
            m = d.loadingTxns,
            h = d.mainTxState,
            f = d.approvalTxState,
            v = d.approval,
            x = d.requiresApproval;
          return (0, te.jsx)(ee.B, {
            blocked: i,
            preparingTransactions: m,
            approvalTxState: f,
            mainTxState: h,
            amount: t,
            isWrongNetwork: a,
            requiresAmount: !0,
            actionInProgressText: (0, te.jsx)(o.cC, { id: 'Ebgc76', values: { symbol: s } }),
            actionText: (0, te.jsx)(o.cC, { id: 'fu1Dbh', values: { symbol: s } }),
            handleAction: p,
            handleApproval: function () {
              return v([{ amount: t, underlyingAsset: n }]);
            },
            requiresApproval: x,
            sx: c,
          });
        };
      !(function (e) {
        (e[(e.CAN_NOT_WITHDRAW_THIS_AMOUNT = 0)] = 'CAN_NOT_WITHDRAW_THIS_AMOUNT'),
          (e[(e.POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY = 1)] = 'POOL_DOES_NOT_HAVE_ENOUGH_LIQUIDITY'),
          (e[(e.ZERO_LTV_WITHDRAW_BLOCKED = 2)] = 'ZERO_LTV_WITHDRAW_BLOCKED');
      })(ge || (ge = {}));
      var Oe,
        ke = function (e) {
          var r = e.poolReserve,
            t = e.userReserve,
            n = e.unwrap,
            s = e.setUnwrap,
            c = e.symbol,
            l = e.isWrongNetwork,
            d = e.user,
            p = (0, i.vR)(),
            f = p.gasLimit,
            x = p.mainTxState,
            A = p.txError,
            g = (0, a.useState)(''),
            b = g[0],
            S = g[1],
            O = (0, a.useState)(''),
            k = O[0],
            I = O[1],
            j = (0, a.useState)(!1),
            C = j[0],
            R = j[1],
            W = (0, a.useRef)(''),
            P = (0, u.Y)(
              (0, N.N)(function (e) {
                return [e.trackEvent, e.currentNetworkConfig];
              })
            ),
            B = (0, m.Z)(P, 2),
            Z = B[0],
            q = B[1],
            F = '-1' === b,
            z = U(d, t, r),
            Y = (0, h.hE)((null === t || void 0 === t ? void 0 : t.underlyingBalance) || '0'),
            Q = (0, h.hE)(r.unborrowedLiquidity),
            G = F ? z.toString(10) : b,
            K = (0, E.W)(),
            $ = (0, _.DX)({ user: d, userReserve: t, poolReserve: r, withdrawAmount: G }),
            X = ye({
              assetsBlockingWithdraw: K,
              poolReserve: r,
              healthFactorAfterWithdraw: $,
              withdrawAmount: G,
              user: d,
            }),
            J = X.blockingError,
            ee = X.errorComponent,
            re = $.toNumber() >= 1 && $.toNumber() < 1.5 && t.usageAsCollateralEnabledOnUser,
            ne = (0, h.hE)(G).multipliedBy(
              (null === t || void 0 === t ? void 0 : t.reserve.priceInUSD) || 0
            );
          return x.success
            ? (0, te.jsx)(Se.R, {
                action: (0, te.jsx)(o.cC, { id: '8Iu1QS' }),
                amount: W.current,
                symbol: n && r.isWrappedBaseAsset ? q.baseAssetSymbol : r.symbol,
              })
            : (0, te.jsxs)(te.Fragment, {
                children: [
                  (0, te.jsx)(L.W, {
                    value: G,
                    onChange: function (e) {
                      var r = '-1' === e;
                      (W.current = r ? z.toString(10) : e),
                        S(e),
                        r && z.eq(Y)
                          ? (Z(D.vh.MAX_INPUT_SELECTION, { type: 'withdraw' }), I('-1'))
                          : I(z.toString(10));
                    },
                    symbol: c,
                    assets: [
                      {
                        balance: z.toString(10),
                        symbol: c,
                        iconSymbol: n && r.isWrappedBaseAsset ? q.baseAssetSymbol : r.iconSymbol,
                      },
                    ],
                    usdValue: ne.toString(10),
                    isMaxSelected: F,
                    disabled: x.loading,
                    maxValue: z.toString(10),
                    balanceText: Q.lt(Y)
                      ? (0, te.jsx)(o.cC, { id: 'csDS2L' })
                      : (0, te.jsx)(o.cC, { id: 'zmTPiV' }),
                  }),
                  void 0 !== J &&
                    (0, te.jsx)(y.Z, { variant: 'helperText', color: 'error.main', children: ee }),
                  r.isWrappedBaseAsset &&
                    (0, te.jsx)(H.Pu, {
                      unwrapped: n,
                      setUnWrapped: s,
                      label: (0, te.jsx)(y.Z, {
                        children: 'Unwrap '
                          .concat(r.symbol, ' (to withdraw ')
                          .concat(q.baseAssetSymbol, ')'),
                      }),
                    }),
                  (0, te.jsxs)(H.m6, {
                    gasLimit: f,
                    children: [
                      (0, te.jsx)(H.oD, {
                        description: (0, te.jsx)(o.cC, { id: '3K0oMo' }),
                        value: Y.minus(G || '0').toString(10),
                        symbol: r.isWrappedBaseAsset ? q.baseAssetSymbol : r.symbol,
                      }),
                      (0, te.jsx)(H.jz, {
                        visibleHfChange: !!b,
                        healthFactor: d ? d.healthFactor : '-1',
                        futureHealthFactor: $.toString(10),
                      }),
                    ],
                  }),
                  A && (0, te.jsx)(M.Q, { txError: A }),
                  re &&
                    (0, te.jsxs)(te.Fragment, {
                      children: [
                        (0, te.jsx)(w.v, {
                          severity: 'error',
                          sx: { my: 6 },
                          children: (0, te.jsx)(o.cC, { id: 'nxyWvj' }),
                        }),
                        (0, te.jsxs)(v.Z, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mx: '24px',
                            mb: '12px',
                          },
                          children: [
                            (0, te.jsx)(T.Z, {
                              checked: C,
                              onChange: function () {
                                R(!C),
                                  Z(D.vh.ACCEPT_RISK, {
                                    modal: 'Withdraw',
                                    riskCheckboxAccepted: C,
                                  });
                              },
                              size: 'small',
                              'data-cy': 'risk-checkbox',
                            }),
                            (0, te.jsx)(y.Z, {
                              variant: 'description',
                              children: (0, te.jsx)(o.cC, { id: '2eBWE6' }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, te.jsx)(we, {
                    poolReserve: r,
                    amountToWithdraw: F ? k : G,
                    poolAddress: n && r.isWrappedBaseAsset ? V.hP : r.underlyingAsset,
                    isWrongNetwork: l,
                    symbol: c,
                    blocked: void 0 !== J || (re && !C),
                    sx: re ? { mt: 0 } : {},
                  }),
                ],
              });
        },
        Ie = t(17231),
        je = t(15925);
      function Ce(e) {
        var r,
          t = e.withdrawType,
          n = e.setWithdrawType,
          a = (0, u.Y)(
            (0, N.N)(function (e) {
              return [e.trackEvent, e.currentMarketData];
            })
          ),
          s = (0, m.Z)(a, 2),
          i = s[0];
        return null !== (r = s[1].enabledFeatures) && void 0 !== r && r.collateralRepay
          ? (0, te.jsx)(v.Z, {
              sx: { mb: 6 },
              children: (0, te.jsxs)(je.f, {
                color: 'primary',
                value: t,
                exclusive: !0,
                onChange: function (e, r) {
                  return n(r);
                },
                children: [
                  (0, te.jsx)(Ie.Y, {
                    value: Oe.WITHDRAW,
                    disabled: t === Oe.WITHDRAW,
                    onClick: function () {
                      return i(D.sj.SWITCH_WITHDRAW_TYPE, { withdrawType: 'Withdraw' });
                    },
                    children: (0, te.jsx)(y.Z, {
                      variant: 'buttonM',
                      children: (0, te.jsx)(o.cC, { id: 'OsyKSt' }),
                    }),
                  }),
                  (0, te.jsx)(Ie.Y, {
                    value: Oe.WITHDRAWSWITCH,
                    disabled: t === Oe.WITHDRAWSWITCH,
                    onClick: function () {
                      return i(D.sj.SWITCH_WITHDRAW_TYPE, { withdrawType: 'Withdraw and Switch' });
                    },
                    children: (0, te.jsx)(y.Z, {
                      variant: 'buttonM',
                      children: (0, te.jsx)(o.cC, { id: 'K05qZY' }),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
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
      function Re(e) {
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
      !(function (e) {
        (e[(e.WITHDRAW = 0)] = 'WITHDRAW'), (e[(e.WITHDRAWSWITCH = 1)] = 'WITHDRAWSWITCH');
      })(Oe || (Oe = {}));
      var We = function () {
        var e = (0, i.vR)(),
          r = e.type,
          t = e.close,
          n = e.args,
          p = e.mainTxState,
          m = (0, a.useState)(!0),
          h = m[0],
          f = m[1],
          v = (0, a.useState)(Oe.WITHDRAW),
          x = v[0],
          y = v[1],
          A = (0, u.Y)(function (e) {
            return e.currentMarketData;
          }),
          T = c.cr.withdrawAndSwitch(A);
        return (0, te.jsx)(l.P, {
          open: r === i.w8.Withdraw,
          setOpen: function () {
            y(Oe.WITHDRAW), t();
          },
          children: (0, te.jsx)(d.A, {
            title: (0, te.jsx)(o.cC, { id: 'OsyKSt' }),
            underlyingAsset: n.underlyingAsset,
            keepWrappedSymbol: !h,
            children: function (e) {
              return (0, te.jsx)(s.X, {
                children: function (r) {
                  return (0, te.jsxs)(te.Fragment, {
                    children: [
                      T && !p.txHash && (0, te.jsx)(Ce, { withdrawType: x, setWithdrawType: y }),
                      x === Oe.WITHDRAW &&
                        (0, te.jsx)(ke, Re(Re({}, e), {}, { unwrap: h, setUnwrap: f, user: r })),
                      x === Oe.WITHDRAWSWITCH &&
                        (0, te.jsx)(te.Fragment, {
                          children: (0, te.jsx)(be, Re(Re({}, e), {}, { user: r })),
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
    94751: function (e, r, t) {
      t.d(r, {
        k: function () {
          return c;
        },
      });
      var n = t(50029),
        o = t(87794),
        a = t.n(o),
        s = t(1279),
        i = t(67294),
        u = t(87886),
        c = function (e) {
          var r = e.chainId,
            t = e.max,
            o = e.maxSlippage,
            c = e.swapIn,
            l = e.swapOut,
            d = e.userAddress,
            p = e.skip,
            m = (0, i.useState)('0'),
            h = m[0],
            f = m[1],
            v = (0, i.useState)('0'),
            x = v[0],
            y = v[1],
            A = (0, i.useState)('0'),
            T = A[0],
            g = A[1],
            b = (0, i.useState)('0'),
            S = b[0],
            w = b[1],
            O = (0, i.useState)(),
            k = O[0],
            I = O[1],
            j = (0, i.useState)(!1),
            C = j[0],
            E = j[1],
            R = (0, i.useState)(''),
            W = R[0],
            D = R[1],
            _ = (0, i.useMemo)(
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
            P = (0, i.useMemo)(
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
            N = (0, i.useCallback)(
              function () {
                return (0, u.F8)(_, P, r, d, t);
              },
              [r, _, P, d, t]
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
                                      _.underlyingAsset &&
                                      P.underlyingAsset &&
                                      _.amount &&
                                      '0' !== _.amount &&
                                      !isNaN(+_.amount)
                                    ) {
                                      e.next = 7;
                                      break;
                                    }
                                    return (
                                      f('0'), g('0'), w('0'), y('0'), I(void 0), e.abrupt('return')
                                    );
                                  case 7:
                                    return E(!0), (e.prev = 8), (e.next = 11), N();
                                  case 11:
                                    (r = e.sent),
                                      D(''),
                                      I(r),
                                      f((0, s.Fv)(r.srcAmount, r.srcDecimals)),
                                      y(r.srcUSD),
                                      g((0, s.Fv)(r.destAmount, r.destDecimals)),
                                      w(r.destUSD),
                                      (e.next = 25);
                                    break;
                                  case 20:
                                    (e.prev = 20),
                                      (e.t0 = e.catch(8)),
                                      console.error(e.t0),
                                      (t =
                                        (0, u.aE)(e.t0.message) ||
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
              [W, p, _.underlyingAsset, P.underlyingAsset, N, o, _.amount, d, t]
            ),
            {
              outputAmount: T,
              outputAmountUSD: S,
              inputAmount: h,
              inputAmountUSD: x,
              loading: C,
              error: W,
              buildTxFn: (function () {
                var e = (0, n.Z)(
                  a().mark(function e() {
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (k) {
                              e.next = 2;
                              break;
                            }
                            throw new Error('Route required to build transaction');
                          case 2:
                            return e.abrupt('return', (0, u.xS)(k, c, l, r, d, o));
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
          return u;
        },
      });
      var n = t(78551),
        o = t(2593),
        a = t(56371),
        s = t(35258),
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
        u = function (e, r, t) {
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
        i = t(25074),
        u = t(84314),
        c = t(60377),
        l = (0, n.Z)({}, i.el.proto_mainnet_v3, [
          {
            tokenIn: a.ou.DAI.UNDERLYING.toLowerCase(),
            tokenOut: a.ou.sDAI.UNDERLYING.toLowerCase(),
            tokenWrapperContractAddress: a.zq,
          },
        ]),
        d = function () {
          var e,
            r = (0, c.HT)(),
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
              c = (0, o.Fv)(s.priceInMarketReferenceCurrency, n);
            return {
              tokenIn: {
                symbol: r.symbol,
                underlyingAsset: r.underlyingAsset,
                decimals: r.decimals,
                priceInUSD: (0, u.N4)(1, i, t).toString(),
                formattedPriceInMarketReferenceCurrency: i,
              },
              tokenOut: {
                symbol: s.symbol,
                underlyingAsset: s.underlyingAsset,
                decimals: s.decimals,
                priceInUSD: (0, u.N4)(1, c, t).toString(),
                formattedPriceInMarketReferenceCurrency: c,
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
    58730: function (e, r, t) {
      t.d(r, {
        $m: function () {
          return c;
        },
        DX: function () {
          return u;
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
          u = e.toAssetData,
          c = e.user,
          l = a.eModes.find(function (e) {
            return e.id === c.userEmodeCategoryId;
          }),
          d = u.eModes.find(function (e) {
            return e.id === c.userEmodeCategoryId;
          }),
          p =
            c.isInEmode && l
              ? l.eMode.formattedLiquidationThreshold
              : a.formattedReserveLiquidationThreshold,
          m = '0';
        s.usageAsCollateralEnabledOnUser &&
          '0' !== a.reserveLiquidationThreshold &&
          (m = (0, n.L1)({
            collateralBalanceMarketReferenceCurrency: (0, o.hE)(t).multipliedBy(
              a.formattedPriceInMarketReferenceCurrency
            ),
            borrowBalanceMarketReferenceCurrency: c.totalBorrowsMarketReferenceCurrency,
            currentLiquidationThreshold: p,
          }).toString());
        var h = '0';
        return (
          ((!c.isInIsolationMode && !u.isIsolated) ||
            (c.isInIsolationMode &&
              (null === (r = c.isolatedReserve) || void 0 === r ? void 0 : r.underlyingAsset) ===
                u.underlyingAsset)) &&
            (h = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, o.hE)(i).multipliedBy(
                u.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: c.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold:
                c.isInEmode && d
                  ? d.eMode.formattedLiquidationThreshold
                  : u.formattedReserveLiquidationThreshold,
            }).toString()),
          {
            hfEffectOfFromAmount: m,
            hfAfterSwap:
              '-1' === c.healthFactor
                ? (0, o.hE)('-1')
                : (0, o.hE)(c.healthFactor).plus(h).minus(m),
          }
        );
      }
      var i = function (e) {
          var r = e.user,
            t = e.amountToReceiveAfterSwap,
            s = e.amountToSwap,
            i = e.fromAssetData,
            u = e.toAssetData,
            c = e.repayWithUserReserve,
            l = e.debt,
            d = i.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            p =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : i.formattedReserveLiquidationThreshold,
            m = '0';
          null !== c &&
            void 0 !== c &&
            c.usageAsCollateralEnabledOnUser &&
            i.usageAsCollateralEnabled &&
            (m = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, o.hE)(s).multipliedBy(
                i.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold: p,
            }).toString());
          var h = (0, o.hE)(a.O.min(t, l)).multipliedBy(u.priceInUSD).toString(10),
            f = (0, o.hE)(r.totalBorrowsUSD).minus(h);
          f = a.O.max(f, (0, o.hE)('0'));
          var v = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: r.totalCollateralUSD,
              borrowBalanceMarketReferenceCurrency: f.toString(10),
              currentLiquidationThreshold: r.currentLiquidationThreshold,
            }),
            x =
              '0' !== i.reserveLiquidationThreshold &&
              null !== c &&
              void 0 !== c &&
              c.usageAsCollateralEnabledOnUser
                ? (0, n.L1)({
                    collateralBalanceMarketReferenceCurrency: (0, o.hE)(s).multipliedBy(
                      i.priceInUSD
                    ),
                    borrowBalanceMarketReferenceCurrency: f.toString(10),
                    currentLiquidationThreshold: i.formattedReserveLiquidationThreshold,
                  }).toString()
                : '0',
            y = v.eq(-1) ? v : v.minus(x);
          return {
            hfEffectOfFromAmount: (0, o.hE)(m),
            hfAfterSwap: y.isLessThan(0) && !y.eq(-1) ? 0 : y,
          };
        },
        u = function (e) {
          var r = e.user,
            t = e.userReserve,
            s = e.poolReserve,
            i = e.withdrawAmount,
            u = (0, o.hE)(r.totalCollateralMarketReferenceCurrency),
            c = r.currentLiquidationThreshold,
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
            (u = u.minus(m)),
              (c = (0, o.hE)(r.totalCollateralMarketReferenceCurrency)
                .multipliedBy((0, o.hE)(r.currentLiquidationThreshold))
                .minus((0, o.hE)(m).multipliedBy(p))
                .div(u)
                .toFixed(4, a.O.ROUND_DOWN)),
              (l = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: u,
                borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
                currentLiquidationThreshold: c,
              }));
          }
          return l;
        },
        c = function (e, r, t) {
          var a,
            s = e ? (0, o.hE)(e.healthFactor) : '-1',
            i = e ? (0, o.hE)(e.totalCollateralMarketReferenceCurrency).plus(t) : '-1',
            u = e
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
                currentLiquidationThreshold: u,
              })),
            s
          );
        };
    },
  },
]);
