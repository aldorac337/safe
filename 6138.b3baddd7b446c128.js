'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6138],
  {
    12242: function (e, t, r) {
      r.d(t, {
        g: function () {
          return _;
        },
      });
      var n = r(17674),
        a = r(80854),
        i = r(1279),
        c = r(62753),
        s = r(26447),
        o = r(80822),
        u = r(66489),
        l = r(56371),
        d = r(67294),
        f = r(59499),
        p = r(36864),
        x = r(57499),
        v = r(65361),
        h = r(49212),
        b = r(85893);
      function g(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : g(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var C = function (e) {
          var t = (0, p.Z)({}, e);
          return (0, b.jsx)(
            h.G,
            j(
              j({ event: { eventName: v.vh.TOOL_TIP, eventParams: { tooltip: 'Gas Calc' } } }, t),
              {},
              { children: (0, b.jsx)(x.cC, { id: 'tFZLf8' }) }
            )
          );
        },
        y = r(35783),
        m = r(50060),
        O = r(47892),
        T = r(39860);
      var A = r(52479),
        P = r(44949),
        k = r(3062),
        S = r(79850),
        w = r(38776),
        I = r(73886),
        N = r(99673),
        G = r(52251),
        E = function (e) {
          var t = (0, k.Y)(function (e) {
            return e.jsonRpcProvider;
          });
          return (0, N.h)({
            queries: e.map(function (e) {
              return {
                queryKey: G.B.gasPrices(e),
                queryFn: function () {
                  return t(e)
                    .getFeeData()
                    .then(function (e) {
                      return (function (e) {
                        var t,
                          r,
                          n,
                          a,
                          i = {
                            legacyGasPrice:
                              (null === (t = e.gasPrice) || void 0 === t ? void 0 : t.toString()) ||
                              '0',
                            maxFeePerGas:
                              (null === (r = e.maxFeePerGas) || void 0 === r
                                ? void 0
                                : r.toString()) || '0',
                            maxPriorityFeePerGas:
                              (null === (n = e.maxPriorityFeePerGas) || void 0 === n
                                ? void 0
                                : n.toString()) || '0',
                          };
                        return (
                          (a = {}),
                          (0, f.Z)(a, T.TP.Slow, i),
                          (0, f.Z)(a, T.TP.Normal, i),
                          (0, f.Z)(a, T.TP.Fast, i),
                          a
                        );
                      })(e);
                    });
                },
                refetchInterval: 3e4,
              };
            }),
          });
        },
        D = r(32867),
        _ = function (e) {
          var t,
            r = e.gasLimit,
            f = e.skipLoad,
            p = e.disabled,
            x = e.rightComponent,
            v = e.chainId,
            h = (function () {
              var e = d.useContext(T.N4);
              if (void 0 === e)
                throw new Error('useGasStation must be used within a GasStationProvider');
              return e;
            })().state,
            g = (0, k.Y)(
              (0, I.N)(function (e) {
                return [e.currentChainId, e.account];
              })
            ),
            j = (0, n.Z)(g, 2),
            N = j[0],
            G = j[1],
            _ = null !== v && void 0 !== v ? v : N,
            M = Object.values(S.ei).find(function (e) {
              return e.chainId === _;
            });
          (0, w.Z)(M, 'No market for this network');
          var Z = (0, O.J)(M).data,
            R = (function (e) {
              return E([e])[0];
            })(_),
            L = R.data,
            F = (0, m.P)(M).walletBalances,
            W = (0, A.G)(G).data,
            H = null === (t = F[a.hP.toLowerCase()]) || void 0 === t ? void 0 : t.amountUSD,
            U = (0, S.Mo)(_),
            V = U.name,
            B = U.baseAssetSymbol,
            Q = (0, P.vR)().loadingTxns,
            q =
              L && null !== Z && void 0 !== Z && Z.baseCurrencyData
                ? (function (e, t, r, n, a) {
                    var i =
                      t === T.TP.Custom
                        ? (0, l.parseUnits)(r, 'gwei').toString()
                        : n[t].legacyGasPrice;
                    return Number((0, l.formatUnits)(e.mul(i), 18)) * parseFloat(a);
                  })(
                    r,
                    h.gasOption,
                    h.customGas,
                    L,
                    (0, i.Fv)(
                      null === Z || void 0 === Z
                        ? void 0
                        : Z.baseCurrencyData.networkBaseTokenPriceInUsd,
                      null === Z || void 0 === Z
                        ? void 0
                        : Z.baseCurrencyData.networkBaseTokenPriceDecimals
                    )
                  )
                : void 0;
          return (0, b.jsxs)(s.Z, {
            gap: 6,
            sx: { width: '100%' },
            children: [
              (0, b.jsxs)(o.Z, {
                sx: { display: 'flex', mt: 6, justifyContent: 'space-between' },
                children: [
                  (0, b.jsxs)(o.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: [
                      (0, b.jsx)(c.Z, { color: 'primary', sx: { fontSize: '16px', mr: 1.5 } }),
                      Q && !f
                        ? (0, b.jsx)(u.Z, { color: 'inherit', size: '16px', sx: { mr: 2 } })
                        : q && !p
                          ? (0, b.jsxs)(b.Fragment, {
                              children: [
                                (0, b.jsx)(D.B, {
                                  value: q,
                                  symbol: 'USD',
                                  color: 'text.secondary',
                                  variant: 'caption',
                                }),
                                (0, b.jsx)(C, {}),
                              ],
                            })
                          : '-',
                    ],
                  }),
                  x,
                ],
              }),
              !p &&
                !W &&
                Number(H) < Number(q) &&
                (0, b.jsx)(o.Z, {
                  sx: { display: 'flex', alignItems: 'center' },
                  children: (0, b.jsxs)(y.v, {
                    severity: 'warning',
                    sx: { mb: 0, mx: 'auto' },
                    children: [
                      'You do not have enough ',
                      B,
                      ' in your account to pay for transaction fees on',
                      ' ',
                      V,
                      ' network. Please deposit ',
                      B,
                      ' from another account.',
                    ],
                  }),
                }),
            ],
          });
        };
    },
    92997: function (e, t, r) {
      r.d(t, {
        Q: function () {
          return A;
        },
        Z: function () {
          return T;
        },
      });
      var n = r(90116),
        a = r(59499),
        i = r(50029),
        c = r(17674),
        s = r(87794),
        o = r.n(s),
        u = r(75331),
        l = r(80854),
        d = r(30202),
        f = r(67294),
        p = r(44949),
        x = r(72005),
        v = r(3062),
        h = r(64041),
        b = r(805),
        g = r(52251),
        j = r(73886);
      function C(e, t) {
        var r = ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ('string' === typeof e) return y(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(e);
              if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return y(e, t);
            })(e)) ||
            (t && e && 'number' === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var i,
          c = !0,
          s = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (c = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function m(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var T = 'Signed correctly',
        A = function (e) {
          var t = e.handleGetTxns,
            r = e.handleGetPermitTxns,
            a = e.tryPermit,
            s = void 0 !== a && a,
            y = e.permitAction,
            m = e.skip,
            A = e.protocolAction,
            P = e.deps,
            k = void 0 === P ? [] : P,
            S = e.eventTxInfo,
            w = (0, p.vR)(),
            I = w.approvalTxState,
            N = w.setApprovalTxState,
            G = w.mainTxState,
            E = w.setMainTxState,
            D = w.setGasLimit,
            _ = w.loadingTxns,
            M = w.setLoadingTxns,
            Z = w.setTxError,
            R = (0, x.Z)(),
            L = R.signTxData,
            F = R.sendTx,
            W = R.getTxError,
            H = (0, f.useState)([]),
            U = H[0],
            V = H[1],
            B = (0, f.useState)(),
            Q = B[0],
            q = B[1],
            K = (0, d.NL)(),
            Y = (0, v.Y)(
              (0, j.N)(function (e) {
                return [
                  e.signERC20Approval,
                  e.walletApprovalMethodPreference,
                  e.generateCreditDelegationSignatureRequest,
                  e.generatePermitPayloadForMigrationSupplyAsset,
                  e.addTransaction,
                  e.signStakingApproval,
                  e.currentMarketData,
                ];
              })
            ),
            z = (0, c.Z)(Y, 7),
            J = z[0],
            X = z[1],
            $ = z[2],
            ee = z[3],
            te = z[4],
            re = z[5],
            ne = z[6],
            ae = (0, f.useState)(),
            ie = ae[0],
            ce = ae[1],
            se = (0, f.useState)(),
            oe = se[0],
            ue = se[1],
            le = (0, f.useState)(!1),
            de = le[0],
            fe = le[1],
            pe = (0, f.useRef)(!1);
          (0, f.useEffect)(function () {
            return (
              (pe.current = !0),
              function () {
                pe.current = !1;
              }
            );
          }, []);
          var xe = (function () {
              var e = (0, i.Z)(
                o().mark(function e(t) {
                  var r, n, a, i, c, s;
                  return o().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = t.tx),
                              (n = t.errorCallback),
                              (a = t.successCallback),
                              (i = t.approval),
                              (e.prev = 1),
                              (e.next = 4),
                              r()
                            );
                          case 4:
                            return (c = e.sent), (e.prev = 5), (e.next = 8), c.wait(1);
                          case 8:
                            pe.current && a && a(c),
                              te(
                                c.hash,
                                O(
                                  {
                                    txState: 'success',
                                    action: i
                                      ? u.UQ.approval
                                      : null !== A && void 0 !== A
                                        ? A
                                        : u.UQ.default,
                                  },
                                  S
                                )
                              ),
                              K.invalidateQueries({ queryKey: g.B.pool }),
                              K.invalidateQueries({ queryKey: g.B.gho }),
                              K.invalidateQueries({ queryKey: g.B.staking }),
                              (e.next = 32);
                            break;
                          case 15:
                            return (
                              (e.prev = 15),
                              (e.t0 = e.catch(5)),
                              (e.prev = 17),
                              (e.next = 20),
                              W(c.hash)
                            );
                          case 20:
                            return (
                              (s = e.sent),
                              pe.current && n && n(new Error(s), c.hash),
                              e.abrupt('return')
                            );
                          case 25:
                            return (
                              (e.prev = 25),
                              (e.t1 = e.catch(17)),
                              pe.current && n && n(e.t1, c.hash),
                              e.abrupt('return')
                            );
                          case 29:
                            return (
                              (e.prev = 29),
                              te(c.hash, O({ txState: 'failed', action: A || u.UQ.default }, S)),
                              e.finish(29)
                            );
                          case 32:
                            return e.abrupt('return');
                          case 35:
                            (e.prev = 35), (e.t2 = e.catch(1)), n && n(e.t2);
                          case 38:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [1, 35],
                      [5, 15],
                      [17, 25, 29, 32],
                    ]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ve = (function () {
              var e = (0, i.Z)(
                o().mark(function e(t) {
                  var r, n, a, c, s, u, l, d, f, p, x, v, h, g, j;
                  return o().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!ie) {
                              e.next = 77;
                              break;
                            }
                            if (
                              !(de && t && (null === t || void 0 === t ? void 0 : t.length) > 0)
                            ) {
                              e.next = 59;
                              break;
                            }
                            N(O(O({}, I), {}, { loading: !0 })),
                              (e.prev = 3),
                              (r = Math.floor(Date.now() / 1e3 + 3600).toString()),
                              (n = []),
                              (a = C(t));
                            try {
                              for (a.s(); !(c = a.n()).done; )
                                (s = c.value).permitType && 'POOL' != s.permitType
                                  ? 'SUPPLY_MIGRATOR_V3' === s.permitType
                                    ? n.push(ee(O(O({}, s), {}, { deadline: r })))
                                    : 'BORROW_MIGRATOR_V3' === s.permitType
                                      ? n.push(
                                          $(
                                            O(
                                              O({}, s),
                                              {},
                                              {
                                                deadline: r,
                                                spender: ne.addresses.V3_MIGRATOR || '',
                                              }
                                            )
                                          )
                                        )
                                      : 'STAKE' === s.permitType &&
                                        n.push(
                                          re({
                                            token: s.underlyingAsset,
                                            amount: s.amount,
                                            deadline: r,
                                          })
                                        )
                                  : n.push(
                                      J({
                                        reserve: s.underlyingAsset,
                                        amount: s.amount,
                                        deadline: r,
                                      })
                                    );
                            } catch (y) {
                              a.e(y);
                            } finally {
                              a.f();
                            }
                            return (e.prev = 8), (u = []), (e.next = 12), Promise.all(n);
                          case 12:
                            (l = e.sent), (d = C(l)), (e.prev = 14), d.s();
                          case 16:
                            if ((f = d.n()).done) {
                              e.next = 25;
                              break;
                            }
                            return (p = f.value), (e.t0 = u), (e.next = 21), L(p);
                          case 21:
                            (e.t1 = e.sent), e.t0.push.call(e.t0, e.t1);
                          case 23:
                            e.next = 16;
                            break;
                          case 25:
                            e.next = 30;
                            break;
                          case 27:
                            (e.prev = 27), (e.t2 = e.catch(14)), d.e(e.t2);
                          case 30:
                            return (e.prev = 30), d.f(), e.finish(30);
                          case 33:
                            if (pe.current) {
                              e.next = 35;
                              break;
                            }
                            return e.abrupt('return');
                          case 35:
                            V(u),
                              q(r),
                              N({ txHash: T, loading: !1, success: !0 }),
                              Z(void 0),
                              (e.next = 48);
                            break;
                          case 41:
                            if (((e.prev = 41), (e.t3 = e.catch(8)), pe.current)) {
                              e.next = 45;
                              break;
                            }
                            return e.abrupt('return');
                          case 45:
                            (x = (0, b.WG)(e.t3, b.aD.APPROVAL, !1)),
                              Z(x),
                              N({ txHash: void 0, loading: !1 });
                          case 48:
                            e.next = 57;
                            break;
                          case 50:
                            if (((e.prev = 50), (e.t4 = e.catch(3)), pe.current)) {
                              e.next = 54;
                              break;
                            }
                            return e.abrupt('return');
                          case 54:
                            (v = (0, b.WG)(e.t4, b.aD.GAS_ESTIMATION, !1)),
                              Z(v),
                              N({ txHash: void 0, loading: !1 });
                          case 57:
                            e.next = 77;
                            break;
                          case 59:
                            return (
                              (e.prev = 59),
                              N(O(O({}, I), {}, { loading: !0 })),
                              (e.next = 63),
                              Promise.all(
                                ie.map(function (e) {
                                  return e.tx();
                                })
                              )
                            );
                          case 63:
                            return (
                              (h = e.sent),
                              (e.next = 66),
                              Promise.all(
                                h.map(function (e) {
                                  return new Promise(
                                    (function () {
                                      var t = (0, i.Z)(
                                        o().mark(function t(r, n) {
                                          return o().wrap(function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  delete e.gasPrice,
                                                    xe({
                                                      tx: function () {
                                                        return F(e);
                                                      },
                                                      successCallback: function (e) {
                                                        r(e);
                                                      },
                                                      errorCallback: function (e, t) {
                                                        var r = (0, b.WG)(e, b.aD.APPROVAL, !1);
                                                        Z(r), N({ txHash: t, loading: !1 }), n();
                                                      },
                                                      approval: !0,
                                                    });
                                                case 2:
                                                case 'end':
                                                  return t.stop();
                                              }
                                          }, t);
                                        })
                                      );
                                      return function (e, r) {
                                        return t.apply(this, arguments);
                                      };
                                    })()
                                  );
                                })
                              )
                            );
                          case 66:
                            (g = e.sent),
                              N({ txHash: g[0].hash, loading: !1, success: !0 }),
                              (e.next = 77);
                            break;
                          case 70:
                            if (((e.prev = 70), (e.t5 = e.catch(59)), pe.current)) {
                              e.next = 74;
                              break;
                            }
                            return e.abrupt('return');
                          case 74:
                            (j = (0, b.WG)(e.t5, b.aD.GAS_ESTIMATION, !1)),
                              Z(j),
                              N({ txHash: void 0, loading: !1 });
                          case 77:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [3, 50],
                      [8, 41],
                      [14, 27, 30, 33],
                      [59, 70],
                    ]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            he = (function () {
              var e = (0, i.Z)(
                o().mark(function e() {
                  var t, n, a, i, c;
                  return o().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!de || !r) {
                              e.next = 21;
                              break;
                            }
                            if (U.length && Q) {
                              e.next = 3;
                              break;
                            }
                            throw new Error('signature needed');
                          case 3:
                            return (
                              (e.prev = 3),
                              E(O(O({}, G), {}, { loading: !0 })),
                              (e.next = 7),
                              r(U, Q)
                            );
                          case 7:
                            return (t = e.sent), (e.next = 10), t[0].tx();
                          case 10:
                            return (
                              delete (n = e.sent).gasPrice,
                              e.abrupt(
                                'return',
                                xe({
                                  tx: function () {
                                    return F(n);
                                  },
                                  successCallback: function (e) {
                                    E({ txHash: e.hash, loading: !1, success: !0 }), Z(void 0);
                                  },
                                  errorCallback: function (e, t) {
                                    var r = (0, b.WG)(e, b.aD.MAIN_ACTION);
                                    Z(r), E({ txHash: t, loading: !1 });
                                  },
                                })
                              )
                            );
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(3)),
                              console.log(e.t0, 'error'),
                              (a = (0, b.WG)(e.t0, b.aD.GAS_ESTIMATION, !1)),
                              Z(a),
                              E({ txHash: void 0, loading: !1 });
                          case 21:
                            if ((de && ie) || !oe) {
                              e.next = 37;
                              break;
                            }
                            return (
                              (e.prev = 22),
                              E(O(O({}, G), {}, { loading: !0 })),
                              (e.next = 26),
                              oe.tx()
                            );
                          case 26:
                            return (
                              delete (i = e.sent).gasPrice,
                              e.abrupt(
                                'return',
                                xe({
                                  tx: function () {
                                    return F(i);
                                  },
                                  successCallback: function (e) {
                                    E({ txHash: e.hash, loading: !1, success: !0 }), Z(void 0);
                                  },
                                  errorCallback: function (e, t) {
                                    var r = (0, b.WG)(e, b.aD.MAIN_ACTION);
                                    Z(r), E({ txHash: t, loading: !1 });
                                  },
                                })
                              )
                            );
                          case 31:
                            (e.prev = 31),
                              (e.t1 = e.catch(22)),
                              (c = (0, b.WG)(e.t1, b.aD.GAS_ESTIMATION, !1)),
                              console.log(e.t1, c),
                              Z(c),
                              E({ txHash: void 0, loading: !1 });
                          case 37:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [3, 15],
                      [22, 31],
                    ]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, f.useEffect)(
              function () {
                if (!m) {
                  M(!0);
                  var e = setTimeout(function () {
                    return (
                      M(!0),
                      t()
                        .then(
                          (function () {
                            var e = (0, i.Z)(
                              o().mark(function e(t) {
                                var n, a, i, c, u, d, f, p, x;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (pe.current) {
                                            e.next = 2;
                                            break;
                                          }
                                          return e.abrupt('return');
                                        case 2:
                                          if (
                                            ((n = t.filter(function (e) {
                                              return 'ERC20_APPROVAL' == e.txType;
                                            })),
                                            n.length > 0 ? ce(n) : ce(void 0),
                                            (a = s && X === h.n.PERMIT && r && y),
                                            !(n.length > 0 && a))
                                          ) {
                                            e.next = 14;
                                            break;
                                          }
                                          fe(!0),
                                            (i = l.eB[y]),
                                            D(i.limit || ''),
                                            E({ txHash: void 0 }),
                                            Z(void 0),
                                            M(!1),
                                            (e.next = 50);
                                          break;
                                        case 14:
                                          fe(!1),
                                            n.length > 0 ? ce(n) : ce(void 0),
                                            ue(
                                              t.find(function (e) {
                                                return [
                                                  'DLP_ACTION',
                                                  'REWARD_ACTION',
                                                  'FAUCET_V2_MINT',
                                                  'FAUCET_MINT',
                                                  'STAKE_ACTION',
                                                  'GOV_DELEGATION_ACTION',
                                                  'GOVERNANCE_ACTION',
                                                  'V3_MIGRATION_ACTION',
                                                ].includes(e.txType);
                                              })
                                            ),
                                            E({ txHash: void 0 }),
                                            Z(void 0),
                                            (c = 0),
                                            (e.prev = 20),
                                            (u = C(t)),
                                            (e.prev = 22),
                                            u.s();
                                        case 24:
                                          if ((d = u.n()).done) {
                                            e.next = 32;
                                            break;
                                          }
                                          return (f = d.value), (e.next = 28), f.gas();
                                        case 28:
                                          (p = e.sent) && p.gasLimit && (c += Number(p.gasLimit));
                                        case 30:
                                          e.next = 24;
                                          break;
                                        case 32:
                                          e.next = 37;
                                          break;
                                        case 34:
                                          (e.prev = 34), (e.t0 = e.catch(22)), u.e(e.t0);
                                        case 37:
                                          return (e.prev = 37), u.f(), e.finish(37);
                                        case 40:
                                          e.next = 48;
                                          break;
                                        case 42:
                                          if (((e.prev = 42), (e.t1 = e.catch(20)), pe.current)) {
                                            e.next = 46;
                                            break;
                                          }
                                          return e.abrupt('return');
                                        case 46:
                                          (x = (0, b.WG)(e.t1, b.aD.GAS_ESTIMATION, !1)), Z(x);
                                        case 48:
                                          D(c.toString() || ''), M(!1);
                                        case 50:
                                        case 'end':
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [
                                    [20, 42],
                                    [22, 34, 37, 40],
                                  ]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        )
                        .catch(function (e) {
                          if (pe.current) {
                            E({ txHash: void 0 });
                            var t = (0, b.WG)(e, b.aD.GAS_ESTIMATION, !1);
                            Z(t), M(!1);
                          }
                        })
                    );
                  }, 1e3);
                  return function () {
                    return clearTimeout(e);
                  };
                }
                ce(void 0), ue(void 0);
              },
              [m].concat((0, n.Z)(k), [s, X])
            ),
            {
              approval: ve,
              action: he,
              loadingTxns: _,
              setUsePermit: fe,
              requiresApproval: !!ie || de,
              approvalTxState: I,
              mainTxState: G,
              usePermit: de,
            }
          );
        };
    },
    805: function (e, t, r) {
      r.d(t, {
        WG: function () {
          return c;
        },
        aD: function () {
          return n;
        },
      });
      var n,
        a = r(57499),
        i = r(85893);
      !(function (e) {
        (e[(e.APPROVAL = 0)] = 'APPROVAL'),
          (e[(e.MAIN_ACTION = 1)] = 'MAIN_ACTION'),
          (e[(e.GAS_ESTIMATION = 2)] = 'GAS_ESTIMATION');
      })(n || (n = {}));
      var c = function (e, t) {
          var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            n = 1;
          if (e.message.startsWith('user rejected transaction'))
            return { error: s[4001], blocking: !1, actionBlocked: !1, rawError: e, txAction: t };
          try {
            var a,
              i = JSON.parse(
                null === e || void 0 === e || null === (a = e.error) || void 0 === a
                  ? void 0
                  : a.body
              ),
              c = Number(i.error.message.split(': ')[1]);
            isNaN(c) || (n = c);
          } catch (u) {}
          var o = s[n];
          return o
            ? { error: o, blocking: r, actionBlocked: !0, rawError: e, txAction: t }
            : { error: void 0, blocking: r, actionBlocked: !0, rawError: e, txAction: t };
        },
        s = {
          7: (0, i.jsx)(a.cC, { id: 'SxaD0o' }),
          9: (0, i.jsx)(a.cC, { id: 'c91vuQ' }),
          11: (0, i.jsx)(a.cC, { id: 'wQZbc/' }),
          12: (0, i.jsx)(a.cC, { id: 'ss5GCK' }),
          13: (0, i.jsx)(a.cC, { id: 'MuDFEQ' }),
          19: (0, i.jsx)(a.cC, { id: 'u706uF' }),
          22: (0, i.jsx)(a.cC, { id: 'gzcch9' }),
          23: (0, i.jsx)(a.cC, { id: 'py2iiY' }),
          24: (0, i.jsx)(a.cC, { id: '8X/oyn' }),
          25: (0, i.jsx)(a.cC, { id: 'qvnz3q' }),
          26: (0, i.jsx)(a.cC, { id: 'rOrHHe' }),
          27: (0, i.jsx)(a.cC, { id: 'eD8WX/' }),
          28: (0, i.jsx)(a.cC, { id: 'zCjNKs' }),
          29: (0, i.jsx)(a.cC, { id: 'X4Zt7j' }),
          30: (0, i.jsx)(a.cC, { id: 'vMba49' }),
          31: (0, i.jsx)(a.cC, { id: '/yNlZf' }),
          32: (0, i.jsx)(a.cC, { id: 'WZLQSU' }),
          34: (0, i.jsx)(a.cC, { id: 'ecqEvn' }),
          35: (0, i.jsx)(a.cC, { id: 'RtBLm7' }),
          36: (0, i.jsx)(a.cC, { id: '3MoZhl' }),
          37: (0, i.jsx)(a.cC, { id: 'DAma/S' }),
          38: (0, i.jsx)(a.cC, { id: 'bguKoJ' }),
          39: (0, i.jsx)(a.cC, { id: 'udFheE' }),
          40: (0, i.jsx)(a.cC, { id: 'kN1Yg5' }),
          41: (0, i.jsx)(a.cC, { id: 'TduuS0' }),
          42: (0, i.jsx)(a.cC, { id: 'oJ5ZiG' }),
          43: (0, i.jsx)(a.cC, { id: 'pdZqBk' }),
          44: (0, i.jsx)(a.cC, { id: 'YyIM65' }),
          45: (0, i.jsx)(a.cC, { id: 'solypO' }),
          46: (0, i.jsx)(a.cC, { id: 'z5UQOM' }),
          47: (0, i.jsx)(a.cC, { id: '00AB2i' }),
          48: (0, i.jsx)(a.cC, { id: 'LSIpNK' }),
          49: (0, i.jsx)(a.cC, { id: 'iChbOF' }),
          50: (0, i.jsx)(a.cC, { id: '34Qfwy' }),
          51: (0, i.jsx)(a.cC, { id: 'kjN9tT' }),
          52: (0, i.jsx)(a.cC, { id: 'O+sCUU' }),
          53: (0, i.jsx)(a.cC, { id: 'z4uGQg' }),
          54: (0, i.jsx)(a.cC, { id: 'o1xc2V' }),
          55: (0, i.jsx)(a.cC, { id: 'w/JtJ3' }),
          56: (0, i.jsx)(a.cC, { id: '5cZ/KX' }),
          57: (0, i.jsx)(a.cC, { id: 'dIsyWh' }),
          60: (0, i.jsx)(a.cC, { id: 'U9btTk' }),
          62: (0, i.jsx)(a.cC, { id: 'quzIeW' }),
          76: (0, i.jsx)(a.cC, { id: 'aOKIms' }),
          77: (0, i.jsx)(a.cC, { id: 'goff7V' }),
          78: (0, i.jsx)(a.cC, { id: 'qY2jnw' }),
          79: (0, i.jsx)(a.cC, { id: 'RNK49r' }),
          80: (0, i.jsx)(a.cC, { id: 'FPKEug' }),
          81: (0, i.jsx)(a.cC, { id: 'ks2LWT' }),
          82: (0, i.jsx)(a.cC, { id: 'RiSYV4' }),
          85: (0, i.jsx)(a.cC, { id: 'DONJcV' }),
          88: (0, i.jsx)(a.cC, { id: '2x58bP' }),
          89: (0, i.jsx)(a.cC, { id: 'gTHi2T' }),
          4001: (0, i.jsx)(a.cC, { id: 'Mm/DVQ' }),
        };
    },
  },
]);
