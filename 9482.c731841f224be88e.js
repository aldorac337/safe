'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9482],
  {
    70946: function (e, r, t) {
      t.d(r, {
        B: function () {
          return x;
        },
      });
      var n = t(59499),
        a = t(4730),
        o = t(57499),
        i = t(80822),
        s = t(88078),
        c = t(70794),
        u = t(65361),
        l = t(32867),
        d = t(49212),
        f = t(85893),
        p = ['loading', 'outputAmountUSD', 'inputAmountUSD'];
      function h(e, r) {
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
      function v(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? h(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : h(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var x = function (e) {
        var r = e.loading,
          t = e.outputAmountUSD,
          n = e.inputAmountUSD,
          h = (0, a.Z)(e, p),
          x = new c.O(t).minus(n),
          m = n && '0' !== n ? x.dividedBy(n).times(100).toFixed(2) : '0';
        '-0.00' === m && (m = '0.00');
        var y = Math.abs(Number(m)) > 10;
        return (0, f.jsx)(
          d.G,
          v(
            v(
              {
                variant: 'secondary12',
                color: 'text.secondary',
                event: { eventName: u.vh.TOOL_TIP, eventParams: { tooltip: 'Price Impact' } },
                text: (0, f.jsx)(i.Z, {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    color: y ? 'warning.main' : 'unset',
                  },
                  children: (0, f.jsx)(o.cC, {
                    id: 'yh2sjd',
                    values: {
                      0: r
                        ? (0, f.jsx)(s.Z, {
                            variant: 'rectangular',
                            height: 12,
                            width: 25,
                            sx: { borderRadius: '4px', display: 'flex', marginLeft: '4px' },
                          })
                        : (0, f.jsx)(l.B, {
                            value: m,
                            visibleDecimals: 2,
                            variant: 'secondary12',
                            color: 'text.secondary',
                            sx: { marginLeft: '4px', color: y ? 'warning.main' : 'unset' },
                          }),
                    },
                  }),
                }),
              },
              h
            ),
            {},
            { children: (0, f.jsx)(o.cC, { id: 'UAOZRe' }) }
          )
        );
      };
    },
    92519: function (e, r, t) {
      t.d(r, {
        A: function () {
          return m;
        },
      });
      var n = t(80854),
        a = (t(67294), t(60377)),
        o = t(50060),
        i = t(89771),
        s = t(53097),
        c = t(44949),
        u = t(72005),
        l = t(3062),
        d = t(65361),
        f = t(79850),
        p = t(37096),
        h = t(19408),
        v = t(40429),
        x = t(85893),
        m = function (e) {
          var r,
            t,
            m = e.hideTitleSymbol,
            y = e.underlyingAsset,
            g = e.children,
            b = e.requiredChainId,
            w = e.title,
            O = e.keepWrappedSymbol,
            j = (0, u.Z)().readOnlyModeAddress,
            k = (0, l.Y)(function (e) {
              return e.currentMarketData;
            }),
            C = (0, l.Y)(function (e) {
              return e.currentNetworkConfig;
            }),
            T = (0, o.P)(k).walletBalances,
            E = (0, a.HT)(),
            A = E.user,
            S = E.reserves,
            M = (0, c.vR)(),
            L = M.txError,
            R = M.mainTxState,
            P = (0, s.Q)(b),
            I = P.isWrongNetwork,
            B = P.requiredChainId;
          if (L && L.blocking) return (0, x.jsx)(v.D, { txError: L });
          var D = S.find(function (e) {
              return y.toLowerCase() === n.hP.toLowerCase()
                ? e.isWrappedBaseAsset
                : y === e.underlyingAsset;
            }),
            Z =
              null === A || void 0 === A
                ? void 0
                : A.userReservesData.find(function (e) {
                    return y.toLowerCase() === n.hP.toLowerCase()
                      ? e.reserve.isWrappedBaseAsset
                      : y === e.underlyingAsset;
                  }),
            q = D.isWrappedBaseAsset && !O ? C.baseAssetSymbol : D.symbol;
          return (0, x.jsxs)(i.hv, {
            asset: D,
            children: [
              !R.success && (0, x.jsx)(p.E, { title: w, symbol: m ? void 0 : q }),
              I &&
                !j &&
                (0, x.jsx)(h.I, {
                  networkName: (0, f.Mo)(B).name,
                  chainId: B,
                  event: { eventName: d.vh.SWITCH_NETWORK, eventParams: { asset: y } },
                }),
              g({
                isWrongNetwork: I,
                nativeBalance:
                  (null === (r = T[n.hP.toLowerCase()]) || void 0 === r ? void 0 : r.amount) || '0',
                tokenBalance:
                  (null === (t = T[D.underlyingAsset.toLowerCase()]) || void 0 === t
                    ? void 0
                    : t.amount) || '0',
                poolReserve: D,
                symbol: q,
                underlyingAsset: y,
                userReserve: Z,
              }),
            ],
          });
        };
    },
    78864: function (e, r, t) {
      t.d(r, {
        f: function () {
          return u;
        },
      });
      var n = t(57499),
        a = t(80822),
        o = t(15861),
        i = t(35783),
        s = t(83063),
        c = t(85893),
        u = function (e) {
          var r = e.txError;
          return (0, c.jsxs)(a.Z, {
            children: [
              (0, c.jsx)(s.Q, { txError: r }),
              'MetaMask Message Signature: User denied message signature.' !== r.rawError.message &&
                'MetaMask Tx Signature: User denied transaction signature.' !==
                  r.rawError.message &&
                (0, c.jsx)(a.Z, {
                  sx: { pt: 4 },
                  children: (0, c.jsx)(i.v, {
                    severity: 'info',
                    children: (0, c.jsxs)(o.Z, {
                      variant: 'description',
                      children: [' ', (0, c.jsx)(n.cC, { id: 'M2sknc' })],
                    }),
                  }),
                }),
            ],
          });
        };
    },
    15058: function (e, r, t) {
      t.d(r, {
        P: function () {
          return j;
        },
      });
      var n = t(90116),
        a = t(59499),
        o = t(50029),
        i = t(17674),
        s = t(87794),
        c = t.n(s),
        u = t(75331),
        l = t(30202),
        d = t(67294),
        f = t(87886),
        p = t(44949),
        h = t(72005),
        v = t(3062),
        x = t(64041),
        m = t(805),
        y = t(52251),
        g = t(73886),
        b = t(92997);
      function w(e, r) {
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
      function O(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? w(Object(t), !0).forEach(function (r) {
                (0, a.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : w(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var j = function (e) {
        var r = e.handleGetTxns,
          t = e.handleGetApprovalTxns,
          a = e.gasLimitRecommendation,
          s = e.skip,
          w = e.spender,
          j = e.protocolAction,
          k = e.deps,
          C = void 0 === k ? [] : k,
          T = (0, p.vR)(),
          E = T.approvalTxState,
          A = T.setApprovalTxState,
          S = T.mainTxState,
          M = T.setMainTxState,
          L = T.setGasLimit,
          R = T.loadingTxns,
          P = T.setLoadingTxns,
          I = T.setTxError,
          B = (0, h.Z)(),
          D = B.sendTx,
          Z = B.getTxError,
          q = B.signTxData,
          N = (0, v.Y)(
            (0, g.N)(function (e) {
              return [
                e.walletApprovalMethodPreference,
                e.generateSignatureRequest,
                e.addTransaction,
              ];
            })
          ),
          U = (0, i.Z)(N, 3),
          _ = U[0],
          W = U[1],
          G = U[2],
          H = (0, d.useState)(),
          F = H[0],
          V = H[1],
          Q = (0, d.useState)(),
          Y = Q[0],
          z = Q[1],
          K = (0, d.useState)(),
          X = K[0],
          $ = K[1],
          J = (0, d.useState)(),
          ee = J[0],
          re = J[1],
          te = (0, d.useState)({ asset: C[0], amount: C[1] }),
          ne = te[0],
          ae = te[1],
          oe = (0, d.useState)(!1),
          ie = oe[0],
          se = oe[1],
          ce = (0, d.useRef)(!1),
          ue = (0, l.NL)();
        (0, d.useEffect)(function () {
          return (
            (ce.current = !0),
            function () {
              ce.current = !1;
            }
          );
        }, []);
        var le = (function () {
            var e = (0, o.Z)(
              c().mark(function e(r) {
                var t, n, a, o, i;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r.tx),
                            (n = r.errorCallback),
                            (a = r.successCallback),
                            (e.prev = 1),
                            (e.next = 4),
                            t()
                          );
                        case 4:
                          return (o = e.sent), (e.prev = 5), (e.next = 8), o.wait(1);
                        case 8:
                          ce.current && a && a(o),
                            G(o.hash, { txState: 'success', action: j || u.UQ.default }),
                            ue.invalidateQueries({ queryKey: y.B.pool }),
                            (e.next = 30);
                          break;
                        case 13:
                          return (
                            (e.prev = 13),
                            (e.t0 = e.catch(5)),
                            (e.prev = 15),
                            (e.next = 18),
                            Z(o.hash)
                          );
                        case 18:
                          return (
                            (i = e.sent),
                            ce.current && n && n(new Error(i), o.hash),
                            e.abrupt('return')
                          );
                        case 23:
                          return (
                            (e.prev = 23),
                            (e.t1 = e.catch(15)),
                            ce.current && n && n(e.t1, o.hash),
                            e.abrupt('return')
                          );
                        case 27:
                          return (
                            (e.prev = 27),
                            G(o.hash, { txState: 'failed', action: j || u.UQ.default }),
                            e.finish(27)
                          );
                        case 30:
                          return e.abrupt('return');
                        case 33:
                          (e.prev = 33), (e.t2 = e.catch(1)), n && n(e.t2);
                        case 36:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [1, 33],
                    [5, 13],
                    [15, 23, 27, 30],
                  ]
                );
              })
            );
            return function (r) {
              return e.apply(this, arguments);
            };
          })(),
          de = (function () {
            var e = (0, o.Z)(
              c().mark(function e(r) {
                var t, n, a, o, i, s, u, l, d;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((t = r.amount), (n = r.underlyingAsset), !(ie && t && n))) {
                            e.next = 38;
                            break;
                          }
                          return (
                            A(O(O({}, E), {}, { loading: !0 })),
                            (e.prev = 3),
                            (a = Math.floor(Date.now() / 1e3 + 3600).toString()),
                            (e.next = 7),
                            W({ token: n, amount: t, deadline: a, spender: w })
                          );
                        case 7:
                          return (o = e.sent), (e.prev = 8), (e.next = 11), q(o);
                        case 11:
                          if (((i = e.sent), ce.current)) {
                            e.next = 14;
                            break;
                          }
                          return e.abrupt('return');
                        case 14:
                          $(i),
                            re(a),
                            A({ txHash: b.Z, loading: !1, success: !0 }),
                            I(void 0),
                            (e.next = 27);
                          break;
                        case 20:
                          if (((e.prev = 20), (e.t0 = e.catch(8)), ce.current)) {
                            e.next = 24;
                            break;
                          }
                          return e.abrupt('return');
                        case 24:
                          (s = (0, m.WG)(e.t0, m.aD.APPROVAL, !1)),
                            I(s),
                            A({ txHash: void 0, loading: !1 });
                        case 27:
                          e.next = 36;
                          break;
                        case 29:
                          if (((e.prev = 29), (e.t1 = e.catch(3)), ce.current)) {
                            e.next = 33;
                            break;
                          }
                          return e.abrupt('return');
                        case 33:
                          (u = (0, m.WG)(e.t1, m.aD.GAS_ESTIMATION, !1)),
                            I(u),
                            A({ txHash: void 0, loading: !1 });
                        case 36:
                          e.next = 56;
                          break;
                        case 38:
                          if (!F) {
                            e.next = 56;
                            break;
                          }
                          return (
                            (e.prev = 39),
                            A(O(O({}, E), {}, { loading: !0 })),
                            (e.next = 43),
                            F.tx()
                          );
                        case 43:
                          return (
                            delete (l = e.sent).gasPrice,
                            (e.next = 47),
                            le({
                              tx: function () {
                                return D(l);
                              },
                              successCallback: function (e) {
                                A({ txHash: e.hash, loading: !1, success: !0 }), I(void 0);
                              },
                              errorCallback: function (e, r) {
                                var t = (0, m.WG)(e, m.aD.APPROVAL, !1);
                                I(t), A({ txHash: r, loading: !1 });
                              },
                              action: m.aD.APPROVAL,
                            })
                          );
                        case 47:
                          e.next = 56;
                          break;
                        case 49:
                          if (((e.prev = 49), (e.t2 = e.catch(39)), ce.current)) {
                            e.next = 53;
                            break;
                          }
                          return e.abrupt('return');
                        case 53:
                          (d = (0, m.WG)(e.t2, m.aD.GAS_ESTIMATION, !1)),
                            I(d),
                            A({ txHash: void 0, loading: !1 });
                        case 56:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [3, 29],
                    [8, 20],
                    [39, 49],
                  ]
                );
              })
            );
            return function (r) {
              return e.apply(this, arguments);
            };
          })(),
          fe = (function () {
            var e = (0, o.Z)(
              c().mark(function e() {
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          M(O(O({}, S), {}, { loading: !0 })),
                          I(void 0),
                          (e.next = 4),
                          r(X, ee)
                            .then(
                              (function () {
                                var e = (0, o.Z)(
                                  c().mark(function e(r) {
                                    var t, n, a;
                                    return c().wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                !(t = r.find(function (e) {
                                                  return ['DLP_ACTION'].includes(e.txType);
                                                }))
                                              ) {
                                                e.next = 15;
                                                break;
                                              }
                                              return (e.prev = 2), (e.next = 5), t.tx();
                                            case 5:
                                              return (
                                                delete (n = e.sent).gasPrice,
                                                e.abrupt(
                                                  'return',
                                                  le({
                                                    tx: function () {
                                                      return D(n);
                                                    },
                                                    successCallback: function (e) {
                                                      M({
                                                        txHash: e.hash,
                                                        loading: !1,
                                                        success: !0,
                                                      }),
                                                        I(void 0);
                                                    },
                                                    errorCallback: function (e, r) {
                                                      var t = (0, m.WG)(e, m.aD.MAIN_ACTION);
                                                      I(t), M({ txHash: r, loading: !1 });
                                                    },
                                                    action: m.aD.MAIN_ACTION,
                                                  })
                                                )
                                              );
                                            case 10:
                                              (e.prev = 10),
                                                (e.t0 = e.catch(2)),
                                                (a = (0, m.WG)(e.t0, m.aD.GAS_ESTIMATION, !1)),
                                                I(a),
                                                M(O(O({}, S), {}, { loading: !1 }));
                                            case 15:
                                            case 'end':
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[2, 10]]
                                    );
                                  })
                                );
                                return function (r) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                            .catch(function (e) {
                              var r = (0, m.WG)(e, m.aD.GAS_ESTIMATION, !1);
                              I(r), M(O(O({}, S), {}, { loading: !1 }));
                            })
                        );
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, d.useEffect)(
            function () {
              s
                ? (V(void 0), z(void 0))
                : (P(!0),
                  t()
                    .then(
                      (function () {
                        var e = (0, o.Z)(
                          c().mark(function e(r) {
                            var t, n;
                            return c().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    (t = r.find(function (e) {
                                      return 'ERC20_APPROVAL' === e.txType;
                                    })),
                                      (n = _ === x.n.PERMIT),
                                      (C[0] !== ne.asset ||
                                        Number(C[1]) >
                                          Number(ne.amount) + Number(ne.amount) * (f.Ik / 2)) &&
                                        (A({ success: !1 }), I(void 0)),
                                      Number(C[1]) < Number(ne.amount) && I(void 0),
                                      ae({ asset: C[0], amount: C[1] }),
                                      t && n
                                        ? (se(!0), M({ txHash: void 0 }), P(!1))
                                        : (se(!1), V(t));
                                  case 6:
                                  case 'end':
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (r) {
                          return e.apply(this, arguments);
                        };
                      })()
                    )
                    .finally(function () {
                      M({ txHash: void 0 }), L(a), P(!1);
                    }));
            },
            [s].concat((0, n.Z)(C), [_])
          ),
          {
            approval: de,
            action: fe,
            loadingTxns: R,
            requiresApproval: !!F || ie,
            approvalTxState: E,
            mainTxState: S,
            actionTx: Y,
            approvalTx: F,
          }
        );
      };
    },
    7568: function (e, r, t) {
      t.d(r, {
        W: function () {
          return o;
        },
      });
      var n = t(3062),
        a = t(62535),
        o = function () {
          var e = (0, n.Y)(function (e) {
              return e.currentMarketData;
            }),
            r = (0, a.C)(e).data;
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
          return L;
        },
      });
      var n = t(17674),
        a = t(57499),
        o = t(67294);
      var i = o.forwardRef(function (e, r) {
          return o.createElement(
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
            o.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M5 15l7-7 7 7',
            })
          );
        }),
        s = t(61782),
        c = t(64343),
        u = t(69417),
        l = t(80822),
        d = t(15861),
        f = t(53219),
        p = t(35294),
        h = t(18972),
        v = t(59334),
        x = t(48885),
        m = t(67720),
        y = t(59499),
        g = t(4730),
        b = t(65361),
        w = t(49212),
        O = t(85893),
        j = ['headerContent'];
      function k(e, r) {
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
      function C(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? k(Object(t), !0).forEach(function (r) {
                (0, y.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : k(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                });
        }
        return e;
      }
      var T,
        E = function (e) {
          var r = e.headerContent,
            t = (0, g.Z)(e, j);
          return (0, O.jsx)(
            w.G,
            C(
              C(
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
                children: (0, O.jsxs)(O.Fragment, {
                  children: [
                    r &&
                      (0, O.jsxs)(O.Fragment, {
                        children: [r, (0, O.jsx)(m.Z, { sx: { my: 2 } })],
                      }),
                    (0, O.jsx)(a.cC, { id: 'eLh0cL' }),
                  ],
                }),
              }
            )
          );
        },
        A = t(3062);
      function S() {
        return (
          (S = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = arguments[r];
                  for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }
                return e;
              }),
          S.apply(null, arguments)
        );
      }
      var M = function (e) {
          return o.createElement(
            'svg',
            S(
              {
                width: 15,
                height: 12,
                viewBox: '0 0 15 12',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              e
            ),
            T ||
              (T = o.createElement('path', {
                d: 'M14.948 12 8.035 0 1.12 12h13.827ZM3.176 5.625 6.353 0H0l3.176 5.625Zm8.949 4.787h-8.18l4.09-7.1 4.09 7.1Z',
                fill: '#2669F5',
              }))
          );
        },
        L = function (e) {
          var r = e.setSlippage,
            t = e.selectedSlippage,
            y = e.slippageTooltipHeader,
            g = o.useState(null),
            w = (0, n.Z)(g, 2),
            j = w[0],
            k = w[1],
            C = Boolean(j),
            T = (0, A.Y)(function (e) {
              return e.trackEvent;
            }),
            S = function () {
              k(null);
            };
          return (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsx)(u.Z, {
                variant: 'text',
                onClick: function (e) {
                  k(e.currentTarget);
                },
                size: 'medium',
                endIcon: (0, O.jsx)(E, {
                  headerContent: y,
                  text: (0, O.jsx)(l.Z, {
                    sx: { display: 'flex', alignItems: 'center' },
                    children: (0, O.jsx)(a.cC, {
                      id: 'LVt3TI',
                      values: {
                        0: C ? (0, O.jsx)(i, {}) : (0, O.jsx)(s.Z, {}),
                        selectedSlippage: t,
                      },
                      components: {
                        0: (0, O.jsx)(d.Z, { color: 'text.secondary', variant: 'description' }),
                        1: (0, O.jsx)(d.Z, {
                          color: 'text.main',
                          variant: 'secondary14',
                          sx: { px: '4px' },
                        }),
                        2: (0, O.jsx)(f.Z, { sx: { fontSize: '14px !important', mr: '4px' } }),
                      },
                    }),
                  }),
                  variant: 'secondary14',
                }),
                disabled: !1,
                'data-cy': 'slippageButton_'.concat(t),
              }),
              (0, O.jsxs)(p.Z, {
                anchorEl: j,
                open: C,
                onClose: S,
                MenuListProps: { 'aria-labelledby': 'basic-button' },
                keepMounted: !0,
                'data-cy': 'slippageMenu_'.concat(t),
                children: [
                  (0, O.jsx)(l.Z, {
                    sx: { px: '16px', py: '12px' },
                    children: (0, O.jsx)(d.Z, {
                      variant: 'secondary12',
                      color: 'text.secondary',
                      children: (0, O.jsx)(a.cC, { id: 'iMVZk9' }),
                    }),
                  }),
                  ['0.1', '0.5', '1'].map(function (e) {
                    var n = e === t;
                    return (0, O.jsxs)(
                      h.Z,
                      {
                        selected: n,
                        value: e,
                        onClick: function () {
                          r(e), T(b.vh.SET_SLIPPAGE, { amount: e }), S();
                        },
                        children: [
                          (0, O.jsxs)(v.Z, {
                            primaryTypographyProps: { variant: 'subheader1' },
                            children: [e, '%'],
                          }),
                          (0, O.jsx)(x.Z, {
                            children: (0, O.jsx)(f.Z, { children: n && (0, O.jsx)(c.Z, {}) }),
                          }),
                        ],
                      },
                      e
                    );
                  }),
                  (0, O.jsx)(m.Z, {}),
                  (0, O.jsxs)(l.Z, {
                    sx: { px: '16px', py: '12px', display: 'inline-flex', alignItems: 'center' },
                    children: [
                      (0, O.jsxs)(d.Z, {
                        variant: 'secondary12',
                        color: 'text.secondary',
                        sx: { display: 'flex', alignItems: 'center' },
                        children: [
                          (0, O.jsx)(a.cC, { id: 'g2UNkE' }),
                          (0, O.jsx)(f.Z, {
                            sx: {
                              fontSize: '20px',
                              width: '20px',
                              color: '#2669F5',
                              position: 'relative',
                              top: '5px',
                              left: '5px',
                            },
                            children: (0, O.jsx)(M, {}),
                          }),
                        ],
                      }),
                      (0, O.jsx)(d.Z, {
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
          return i;
        },
        bU: function () {
          return s;
        },
      });
      var n = t(20854),
        a = t(1279),
        o = t(70794);
      function i(e) {
        var r,
          t = e.fromAmount,
          o = e.fromAssetData,
          i = e.fromAssetUserData,
          s = e.toAmountAfterSlippage,
          c = e.toAssetData,
          u = e.user,
          l = o.eModes.find(function (e) {
            return e.id === u.userEmodeCategoryId;
          }),
          d = c.eModes.find(function (e) {
            return e.id === u.userEmodeCategoryId;
          }),
          f =
            u.isInEmode && l
              ? l.eMode.formattedLiquidationThreshold
              : o.formattedReserveLiquidationThreshold,
          p = '0';
        i.usageAsCollateralEnabledOnUser &&
          '0' !== o.reserveLiquidationThreshold &&
          (p = (0, n.L1)({
            collateralBalanceMarketReferenceCurrency: (0, a.hE)(t).multipliedBy(
              o.formattedPriceInMarketReferenceCurrency
            ),
            borrowBalanceMarketReferenceCurrency: u.totalBorrowsMarketReferenceCurrency,
            currentLiquidationThreshold: f,
          }).toString());
        var h = '0';
        return (
          ((!u.isInIsolationMode && !c.isIsolated) ||
            (u.isInIsolationMode &&
              (null === (r = u.isolatedReserve) || void 0 === r ? void 0 : r.underlyingAsset) ===
                c.underlyingAsset)) &&
            (h = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, a.hE)(s).multipliedBy(
                c.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: u.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold:
                u.isInEmode && d
                  ? d.eMode.formattedLiquidationThreshold
                  : c.formattedReserveLiquidationThreshold,
            }).toString()),
          {
            hfEffectOfFromAmount: p,
            hfAfterSwap:
              '-1' === u.healthFactor
                ? (0, a.hE)('-1')
                : (0, a.hE)(u.healthFactor).plus(h).minus(p),
          }
        );
      }
      var s = function (e) {
          var r = e.user,
            t = e.amountToReceiveAfterSwap,
            i = e.amountToSwap,
            s = e.fromAssetData,
            c = e.toAssetData,
            u = e.repayWithUserReserve,
            l = e.debt,
            d = s.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            f =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : s.formattedReserveLiquidationThreshold,
            p = '0';
          null !== u &&
            void 0 !== u &&
            u.usageAsCollateralEnabledOnUser &&
            s.usageAsCollateralEnabled &&
            (p = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: (0, a.hE)(i).multipliedBy(
                s.formattedPriceInMarketReferenceCurrency
              ),
              borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
              currentLiquidationThreshold: f,
            }).toString());
          var h = (0, a.hE)(o.O.min(t, l)).multipliedBy(c.priceInUSD).toString(10),
            v = (0, a.hE)(r.totalBorrowsUSD).minus(h);
          v = o.O.max(v, (0, a.hE)('0'));
          var x = (0, n.L1)({
              collateralBalanceMarketReferenceCurrency: r.totalCollateralUSD,
              borrowBalanceMarketReferenceCurrency: v.toString(10),
              currentLiquidationThreshold: r.currentLiquidationThreshold,
            }),
            m =
              '0' !== s.reserveLiquidationThreshold &&
              null !== u &&
              void 0 !== u &&
              u.usageAsCollateralEnabledOnUser
                ? (0, n.L1)({
                    collateralBalanceMarketReferenceCurrency: (0, a.hE)(i).multipliedBy(
                      s.priceInUSD
                    ),
                    borrowBalanceMarketReferenceCurrency: v.toString(10),
                    currentLiquidationThreshold: s.formattedReserveLiquidationThreshold,
                  }).toString()
                : '0',
            y = x.eq(-1) ? x : x.minus(m);
          return {
            hfEffectOfFromAmount: (0, a.hE)(p),
            hfAfterSwap: y.isLessThan(0) && !y.eq(-1) ? 0 : y,
          };
        },
        c = function (e) {
          var r = e.user,
            t = e.userReserve,
            i = e.poolReserve,
            s = e.withdrawAmount,
            c = (0, a.hE)(r.totalCollateralMarketReferenceCurrency),
            u = r.currentLiquidationThreshold,
            l = (0, a.hE)(r.healthFactor),
            d = i.eModes.find(function (e) {
              return e.id === r.userEmodeCategoryId;
            }),
            f =
              r.isInEmode && d
                ? d.eMode.formattedLiquidationThreshold
                : i.formattedReserveLiquidationThreshold;
          if (
            null !== t &&
            void 0 !== t &&
            t.usageAsCollateralEnabledOnUser &&
            '0' !== i.reserveLiquidationThreshold
          ) {
            var p = (0, a.hE)(s).multipliedBy(i.formattedPriceInMarketReferenceCurrency);
            (c = c.minus(p)),
              (u = (0, a.hE)(r.totalCollateralMarketReferenceCurrency)
                .multipliedBy((0, a.hE)(r.currentLiquidationThreshold))
                .minus((0, a.hE)(p).multipliedBy(f))
                .div(c)
                .toFixed(4, o.O.ROUND_DOWN)),
              (l = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: c,
                borrowBalanceMarketReferenceCurrency: r.totalBorrowsMarketReferenceCurrency,
                currentLiquidationThreshold: u,
              }));
          }
          return l;
        },
        u = function (e, r, t) {
          var o,
            i = e ? (0, a.hE)(e.healthFactor) : '-1',
            s = e ? (0, a.hE)(e.totalCollateralMarketReferenceCurrency).plus(t) : '-1',
            c = e
              ? (0, a.hE)(e.totalCollateralMarketReferenceCurrency)
                  .multipliedBy(e.currentLiquidationThreshold)
                  .plus(t.multipliedBy(r.formattedReserveLiquidationThreshold))
                  .dividedBy(s)
              : '-1';
          return (
            e &&
              ((!e.isInIsolationMode && !r.isIsolated) ||
                (e.isInIsolationMode &&
                  (null === (o = e.isolatedReserve) || void 0 === o
                    ? void 0
                    : o.underlyingAsset) === r.underlyingAsset)) &&
              (i = (0, n.L1)({
                collateralBalanceMarketReferenceCurrency: s,
                borrowBalanceMarketReferenceCurrency: (0, a.hE)(
                  e.totalBorrowsMarketReferenceCurrency
                ),
                currentLiquidationThreshold: c,
              })),
            i
          );
        };
    },
  },
]);
