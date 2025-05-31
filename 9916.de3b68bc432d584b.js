'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9916],
  {
    49137: (e, t, n) => {
      n.d(t, { Dk: () => d, Vo: () => m });
      var r = n(9175),
        a = n(79222),
        l = n.n(a),
        i = n(96049),
        o = n(13643),
        s = n(66852),
        u = n(10996),
        c = n(52872),
        f = n(56182);
      let d = 100,
        E = async (e) => {
          let { delayModifier: t, transactionAdded: n, delay: r, expiry: a } = e,
            l = BigInt(await t.txCreatedAt(n.args.queueNonce)),
            i = l + r,
            o = a === BigInt(0) ? null : (i + a) * BigInt(1e3);
          return { timestamp: l * BigInt(1e3), validFrom: i * BigInt(1e3), expiresAt: o };
        },
        v = l()(
          async (e) => {
            let { transactionService: t, safeAddress: n, provider: r } = e,
              a = ''.concat((0, s.Kj)(t), '/api/v1/safes/').concat(n, '/creation/'),
              { transactionHash: l } = await fetch(a).then((e) => {
                if (e.ok && 200 === e.status) return e.json();
                throw Error('Error fetching Safe creation details');
              });
            return r.getTransactionReceipt(l);
          },
          (e) => {
            let { transactionService: t, safeAddress: n } = e;
            return t + n;
          }
        ),
        S = async (e, t, n, r, a, l) => {
          if (t === n) return [];
          let i = Array.from({ length: Number(t - n) }, (e, t) =>
              (0, o.up)(BigInt(n + BigInt(t)), 32)
            ),
            s = e.filters.TransactionAdded(),
            u = await s.getTopicFilter();
          u[1] = i;
          let { blockNumber: c } = await v({ transactionService: r, provider: a, safeAddress: l });
          return await e.queryFilter(u, c, 'latest');
        },
        h = async (e) => {
          let {
              delayModifier: t,
              transactionAdded: n,
              delay: r,
              expiry: a,
              provider: l,
              chainId: o,
              version: s,
              safeAddress: d,
            } = e,
            [v, S] = await Promise.all([
              E({ delayModifier: t, transactionAdded: n, delay: r, expiry: a }),
              l.getTransactionReceipt(n.transactionHash),
            ]),
            h = (function (e) {
              var t, n;
              let { chainId: r, version: a, safeAddress: l, transaction: o } = e,
                s = (0, c.cb)(o.data),
                d = s ? (0, f.decodeMultiSendData)(o.data) : [o];
              if (!s) return !(0, u.xU)(o.to, l);
              let E =
                null !==
                  (t = (0, i.getMultiSendCallOnlyDeployment)({
                    network: r,
                    version: null != a ? a : void 0,
                  })) && void 0 !== t
                  ? t
                  : (0, i.getMultiSendCallOnlyDeployment)({ network: r, version: '1.3.0' });
              if (!E) return !0;
              let v = null !== (n = E.networkAddresses[r]) && void 0 !== n ? n : E.defaultAddress;
              return !(0, u.xU)(o.to, v) || d.some((e) => !(0, u.xU)(e.to, l));
            })({ chainId: o, version: s, safeAddress: d, transaction: n.args });
          return { ...n, ...v, isMalicious: h, executor: S.from };
        },
        g = async (e) => {
          let {
              delayModifier: t,
              transactionService: n,
              safeAddress: a,
              provider: l,
              chainId: i,
              version: o,
            } = e,
            [[s], u, c, f, E] = await Promise.all([
              t.getModulesPaginated(r.SENTINEL_ADDRESS, d),
              t.txExpiration(),
              t.txCooldown(),
              t.txNonce(),
              t.queueNonce(),
            ]),
            v = await S(t, BigInt(E), BigInt(f), n, l, a),
            g = await Promise.all(
              v.map((e) =>
                h({
                  delayModifier: t,
                  transactionAdded: e,
                  delay: BigInt(c),
                  expiry: BigInt(u),
                  provider: l,
                  chainId: i,
                  version: o,
                  safeAddress: a,
                })
              )
            );
          return {
            address: await t.getAddress(),
            recoverers: s,
            expiry: BigInt(u),
            delay: BigInt(c),
            txNonce: BigInt(f),
            queueNonce: BigInt(E),
            queue: g.filter((e) => !e.removed),
          };
        };
      function m(e) {
        let { delayModifiers: t, ...n } = e;
        return Promise.all(t.map((e) => g({ delayModifier: e, ...n })));
      }
    },
    99916: (e, t, n) => {
      n.r(t), n.d(t, { default: () => $ });
      var r = n(6029),
        a = n(78726),
        l = n(55729),
        i = n(89099),
        o = n(67215),
        s = n(46913),
        u = n(55632),
        c = n(94077),
        f = n(51458),
        d = n(77978),
        E = n(3933),
        v = n(88683),
        S = n(28729),
        h = n(10996),
        g = n(70050);
      let m = (0, d.A)(
        function (e) {
          let { isOwner: t, isRecoverer: n, queue: o, wallet: c, isSidebarRoute: f = !0 } = e,
            { wasProposalDismissed: d, dismissProposal: v } = (function () {
              let { safe: e, safeAddress: t } = (0, S.A)(),
                n = e.chainId,
                [r, a] = (0, E.A)('dismissedRecoveryProposals'),
                i = (0, l.useCallback)(
                  (e) => {
                    var l;
                    let i = null !== (l = null == r ? void 0 : r[n]) && void 0 !== l ? l : {};
                    a({ ...(null != r ? r : {}), [n]: { ...i, [t]: e } });
                  },
                  [r, n, t, a]
                );
              return {
                wasProposalDismissed: (0, l.useCallback)(
                  (e) => {
                    var a;
                    return (0, h.xU)(
                      null == r ? void 0 : null === (a = r[n]) || void 0 === a ? void 0 : a[t],
                      e
                    );
                  },
                  [n, r, t]
                ),
                dismissProposal: i,
              };
            })(),
            { wasInProgressDismissed: g, dismissInProgress: m } = (function () {
              let { safe: e, safeAddress: t } = (0, S.A)(),
                n = e.chainId,
                r = (0, l.useRef)({}),
                a = (0, l.useCallback)(
                  (e) => {
                    var a, l;
                    let i =
                      null !== (l = null === (a = r.current) || void 0 === a ? void 0 : a[n]) &&
                      void 0 !== l
                        ? l
                        : {};
                    r.current = { ...r.current, [n]: { ...i, [t]: e } };
                  },
                  [n, t]
                );
              return {
                wasInProgressDismissed: (0, l.useCallback)(
                  (e) => {
                    var a, l;
                    return (0, h.xU)(
                      e,
                      null === (l = r.current) || void 0 === l
                        ? void 0
                        : null === (a = l[n]) || void 0 === a
                          ? void 0
                          : a[t]
                    );
                  },
                  [n, t]
                ),
                dismissInProgress: a,
              };
            })(),
            [C, y] = (0, l.useState)(null),
            p = (0, i.useRouter)(),
            x = o[0],
            A = () => {
              y(null);
            };
          return (
            (0, l.useEffect)(() => {
              f &&
                y(() =>
                  x && (t || n) && !g(x.transactionHash)
                    ? (0, r.jsx)(s.A, {
                        onClose: () => {
                          m(x.transactionHash), A();
                        },
                        recovery: x,
                      })
                    : (null == c ? void 0 : c.address) && n && !d(c.address)
                      ? (0, r.jsx)(u.u, {
                          onClose: () => {
                            v(c.address), A();
                          },
                        })
                      : null
                );
            }, [m, v, n, t, x, o.length, p.pathname, c, g, d, f]),
            (0, l.useEffect)(
              () => (
                p.events.on('routeChangeComplete', A),
                () => {
                  p.events.off('routeChangeComplete', A);
                }
              ),
              [p]
            ),
            (0, r.jsx)(a.zWh, {
              in: !!C,
              children: (0, r.jsx)(a.zsL, {
                open: !!C,
                sx: {
                  zIndex: 3,
                  bgcolor: (e) => {
                    let { palette: t } = e;
                    return t.background.main;
                  },
                },
                children: C,
              }),
            })
          );
        },
        {
          isOwner: c.A,
          isRecoverer: f.f,
          queue: o.i,
          wallet: v.Ay,
          isSidebarRoute: () => {
            let [e] = (0, g.l)();
            return e;
          },
        }
      );
      var C = n(12426),
        y = n(42205),
        p = n(57187),
        x = n(57910),
        A = n(12668),
        I = n(30697),
        w = n(7639),
        R = n(38962);
      let P = [A.E8.PROCESSING_BY_SMART_CONTRACT_WALLET, A.E8.PROCESSED, A.E8.SUCCESS],
        b = {
          [A.E8.PROCESSING_BY_SMART_CONTRACT_WALLET]: 'Confirm the execution in your wallet.',
          [A.E8.PROCESSING]: 'Validating...',
          [A.E8.PROCESSED]: 'Successfully validated. Loading...',
          [A.E8.REVERTED]: 'Reverted. Please check your gas settings.',
          [A.E8.FAILED]: 'Failed.',
          [A.E8.SUCCESS]: 'Successfully executed.',
        },
        T = {
          [A.M8.PROPOSAL]: 'Account recovery proposal',
          [A.M8.EXECUTION]: 'Account recovery',
          [A.M8.SKIP_EXPIRED]: 'Account recovery cancellation',
        };
      var O = n(8694),
        D = n(32294),
        N = n(31754),
        k = n(49137),
        B = n(33494),
        _ = n(59507),
        L = n(36153),
        j = n(48284),
        U = n(87929),
        M = n(3236),
        H = n(9175),
        F = n(3578),
        G = n(42523);
      async function W(e, t) {
        let n = new G.NZ(e, ['function masterCopy() external view returns (address)'], t),
          [r] = await n.masterCopy();
        return r;
      }
      async function q(e, t, n) {
        if (!(0, F.PW)(t)) return;
        let r = await n.getCode(t);
        if (
          92 === r.length &&
          r.startsWith('0x363d3d373d3d3d363d73') &&
          r.endsWith('5af43d82803e903d91602b57fd5bf3')
        ) {
          let t = '0x' + r.slice(22, 62);
          return await q(e, t, n);
        }
        if (
          '0x608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e60008114156070573d6000fd5b3d6000f3fea265627a7a72315820d8a00dc4fe6bf675a9d7416fc2d00bb3433362aa8186b750f76c4027269667ff64736f6c634300050e0032' ===
          r.toLowerCase()
        ) {
          let r = await W(t, n);
          return await q(e, r, n);
        }
        let a = Object.entries(j.MS[Number(e)]).find((e) => {
          let [, n] = e;
          return Object.values(n).some((e) => (0, h.xU)(e, t));
        });
        return null == a ? void 0 : a[0];
      }
      async function V(e, t, n) {
        return (await q(e, t, n)) === U.v.DELAY;
      }
      async function Y(e, t, n) {
        let [r] = await t.getModulesPaginated(H.SENTINEL_ADDRESS, k.Dk);
        if (0 === r.length) return !1;
        let a = await Promise.all(r.map((t) => q(e, t, n))),
          l = Object.values(U.v);
        return a.every((e) => !l.includes(e));
      }
      async function z(e, t, n) {
        if (!t) return [];
        let r = await Promise.all(
          t.map(async (t) => {
            let { value: r } = t;
            return (await V(e, r, n)) && (0, M.kH)(U.v.DELAY, r, n);
          })
        ).then((e) => e.filter(Boolean));
        return await Promise.all(r.map(async (t) => (await Y(e, t, n)) && t)).then((e) =>
          e.filter(Boolean)
        );
      }
      var J = n(14816),
        K = n(89374);
      let X = {
        [A.E8.PROCESSING_BY_SMART_CONTRACT_WALLET]: null,
        [A.E8.PROCESSING]: A.E8.PROCESSING,
        [A.E8.PROCESSED]: A.E8.PROCESSED,
        [A.E8.SUCCESS]: null,
        [A.E8.REVERTED]: null,
        [A.E8.FAILED]: null,
      };
      var Z = n(3087);
      let Q = function () {
          let [e, t, n] = (function () {
              var e;
              let t = (0, K.v)(),
                n = (0, D.vH)(),
                { safe: r, safeAddress: a } = (0, S.A)();
              return (0, O.A)(
                () => {
                  var e, a;
                  if (
                    t &&
                    n &&
                    r.modules &&
                    r.modules.length > 0 &&
                    ((e = r.chainId), !((!(a = r.modules) || !(a.length > 1)) && (0, J.cF)(e, a)))
                  )
                    return z(r.chainId, r.modules, n);
                },
                [a, r.chainId, null === (e = r.modules) || void 0 === e ? void 0 : e.length, n, t],
                !1
              );
            })(),
            [r, a, i] = (function (e) {
              let t = (0, D.vH)(),
                n = (0, I._J)(),
                { safe: r, safeAddress: a } = (0, S.A)(),
                i = (0, p.jL)(),
                [o] = (0, N.A)(3e5),
                [s, u] = (0, l.useState)(!1),
                c = (0, l.useCallback)(() => {
                  u((e) => !e);
                }, []);
              return (
                (0, l.useEffect)(() => (0, A.uF)(A.E8.PROCESSED, c), [c]),
                (0, l.useEffect)(() => {
                  if (!e || 0 === e.length) return;
                  let t = i(
                    (0, _.ch)({
                      actionCreator: L.JD.actions.set,
                      effect: async (t) => {
                        var n, r;
                        let [a] =
                          null !==
                            (r =
                              null === (n = t.payload.data) || void 0 === n
                                ? void 0
                                : n.results.filter(B.yI)) && void 0 !== r
                            ? r
                            : [];
                        if (!a) return;
                        let { txInfo: l } = a.transaction;
                        ((
                          await Promise.all(
                            e.map(async (e) => {
                              let t = await e.getAddress();
                              return (0, B.ep)(l) && (0, h.xU)(l.to.value, t);
                            })
                          )
                        ).some(Boolean) ||
                          (0, B.qG)(l)) &&
                          c();
                      },
                    })
                  );
                  return t instanceof Function ? t : t.payload.unsubscribe;
                }, [r.chainId, e, c, i]),
                (0, O.A)(
                  () => {
                    if (e && 0 !== e.length && (null == n ? void 0 : n.transactionService) && t)
                      return (0, k.Vo)({
                        delayModifiers: e,
                        transactionService: n.transactionService,
                        safeAddress: a,
                        provider: t,
                        chainId: r.chainId,
                        version: r.version,
                      });
                  },
                  [e, o, s, null == n ? void 0 : n.transactionService, t, a, r.chainId, r.version],
                  !1
                )
              );
            })(e),
            o = (function () {
              let [e, t] = (0, l.useState)({});
              return (
                (0, l.useEffect)(() => {
                  let e = Object.entries(X).map((e) => {
                    let [n, r] = e;
                    return (0, A.uF)(n, (e) => {
                      let n = 'recoveryTxHash' in e && e.recoveryTxHash;
                      n &&
                        t((t) => {
                          if (null === r) {
                            let { [n]: e, ...r } = t;
                            return r;
                          }
                          return { ...t, [n]: { txType: e.txType, status: r } };
                        });
                    });
                  });
                  return () => {
                    e.forEach((e) => e());
                  };
                }, []),
                e
              );
            })();
          (0, l.useEffect)(() => {
            let e = Object.entries(o);
            r &&
              0 !== r.length &&
              0 !== e.length &&
              e.forEach((e) => {
                let [t, { txType: n, status: a }] = e;
                !(
                  a !== A.E8.PROCESSED ||
                  (r.some((e) => {
                    let { queue: n } = e;
                    return n.some((e) => {
                      let { args: n } = e;
                      return n.txHash === t;
                    });
                  }) &&
                    n !== A.M8.PROPOSAL)
                ) && (0, A.aG)(A.E8.SUCCESS, { recoveryTxHash: t, txType: n });
              });
          }, [o, r]);
          let s = t || a,
            u = n || i;
          return (
            (0, l.useEffect)(() => {
              Z.A.setStore({ state: [r, s, u], pending: o });
            }, [r, s, u, o]),
            null
          );
        },
        $ = function () {
          return (
            !(function () {
              let e = (0, p.jL)(),
                t = (0, I._J)(),
                n = (0, x.A)();
              (0, l.useEffect)(() => {
                if (!(null == t ? void 0 : t.blockExplorerUriTemplate)) return;
                let n = Object.entries(b).map((n) => {
                  let [r, a] = n;
                  return (0, A.uF)(r, async (n) => {
                    let l = P.includes(r),
                      i = 'error' in n;
                    if (i && (0, w.jG)(n.error)) return;
                    let o = 'txHash' in n ? n.txHash : void 0,
                      s = 'recoveryTxHash' in n ? n.recoveryTxHash : void 0,
                      u = o || s || '',
                      c = T[n.txType],
                      f = i ? ''.concat(a, ' ').concat((0, C.Wk)(n.error)) : a,
                      d = o ? (0, R.aS)(o, t.blockExplorerUriTemplate) : void 0;
                    e(
                      (0, y.Ds)({
                        title: c,
                        message: f,
                        detailedMessage: i ? n.error.message : void 0,
                        groupKey: u,
                        variant: i ? 'error' : l ? 'success' : 'info',
                        link: d,
                      })
                    );
                  });
                });
                return () => {
                  n.forEach((e) => e());
                };
              }, [e, n, null == t ? void 0 : t.blockExplorerUriTemplate]);
            })(),
            (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(Q, {}), (0, r.jsx)(m, {})] })
          );
        };
    },
  },
]);
//# sourceMappingURL=9916.de3b68bc432d584b.js.map
