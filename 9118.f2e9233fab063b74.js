(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9118],
  {
    24296: (e) => {
      e.exports = {
        title: 'styles_title__PUeBZ',
        questionIcon: 'styles_questionIcon__hEyNZ',
        list: 'styles_list__QsQcd',
        listItemAvatar: 'styles_listItemAvatar__hdusA',
        avatar: 'styles_avatar__TvjTy',
      };
    },
    38876: (e, t, n) => {
      'use strict';
      n.d(t, { $nd: () => s.$nd, o5u: () => s.o5u });
      var s = n(13814);
    },
    45423: () => {},
    48019: (e) => {
      e.exports = {
        errorContainer: 'styles_errorContainer__qipg6',
        button: 'styles_button__1sIx_',
        details: 'styles_details__D9W_1',
      };
    },
    58318: (e) => {
      e.exports = { container: 'styles_container__2WLr1', infoIcon: 'styles_infoIcon__c817E' };
    },
    58444: (e) => {
      e.exports = {
        container: 'styles_container__elWzL',
        icon: 'styles_icon__nXKf8',
        chain: 'styles_chain__QqptS',
        origin: 'styles_origin__XQZ_g',
        info: 'styles_info__WV3Yo',
        alert: 'styles_alert__C8DAT',
        checkbox: 'styles_checkbox__UrkrO',
        divider: 'styles_divider__MgotV',
        buttons: 'styles_buttons__S2iLi',
        button: 'styles_button__xrhN7',
      };
    },
    63921: (e, t, n) => {
      'use strict';
      n.d(t, { Q: () => r, t: () => i });
      var s = n(89099),
        a = n(14232);
      let i = 'wc';
      function r() {
        let e = (0, s.useRouter)();
        return [
          (e.query[i] || '').toString() || null,
          (0, a.useCallback)(
            (t) => {
              let n = { ...e.query };
              t ? (n[i] = t) : delete n[i], e.replace({ pathname: e.pathname, query: n });
            },
            [e]
          ),
        ];
      }
    },
    76676: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => tx });
      var s,
        a,
        i,
        r,
        o,
        l,
        c,
        d = n(37876),
        u = n(14232),
        p = n(77194),
        h = n(28729);
      let v = (0, u.createContext)({
          walletConnect: null,
          error: null,
          setError: () => {},
          open: !1,
          setOpen: () => {},
          isLoading: void 0,
          setIsLoading: () => {},
        }),
        m = function () {
          let { walletConnect: e } = (0, u.useContext)(v),
            [t, n] = (0, u.useState)([]),
            s = (0, u.useCallback)(() => {
              e && n(e.getActiveSessions());
            }, [e]);
          return (
            (0, u.useEffect)(s, [s]),
            (0, u.useEffect)(() => {
              if (e) return e.onSessionAdd(s);
            }, [e, s]),
            (0, u.useEffect)(() => {
              if (e) return e.onSessionDelete(s);
            }, [e, s]),
            t
          );
        };
      var f = n(63921);
      let C = () => {
        let [e, t] = (0, f.Q)();
        return [
          e || '',
          (0, u.useCallback)(() => {
            t(null);
          }, [t]),
        ];
      };
      var x = n(13814);
      let g = (e) => {
        let { children: t, ...n } = e;
        return (0, d.jsx)(x.AMh, {
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
          sx: {
            '& > .MuiPaper-root': { top: 'var(--header-height) !important', overflowY: 'auto' },
          },
          ...n,
          children: (0, d.jsx)(x.tu9, { sx: { p: 4, width: '454px' }, children: t }),
        });
      };
      var y = n(78008),
        w = ['title', 'titleId'];
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var s in n) ({}).hasOwnProperty.call(n, s) && (e[s] = n[s]);
              }
              return e;
            }).apply(null, arguments);
      }
      let b = function (e) {
        var t = e.title,
          n = e.titleId,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              s,
              a = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var s in e)
                  if ({}.hasOwnProperty.call(e, s)) {
                    if (t.includes(s)) continue;
                    n[s] = e[s];
                  }
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (s = 0; s < i.length; s++)
                (n = i[s]), t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
          })(e, w);
        return u.createElement(
          'svg',
          _(
            {
              width: 24,
              height: 24,
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              fill: '#3a99fb',
              'aria-labelledby': n,
            },
            a
          ),
          t ? u.createElement('title', { id: n }, t) : null,
          s ||
            (s = u.createElement('path', {
              d: 'M6.09442 8.34459C9.35599 5.21847 14.644 5.21847 17.9056 8.34459L18.2981 8.72082C18.4612 8.87713 18.4612 9.13055 18.2981 9.28686L16.9554 10.5739C16.8738 10.652 16.7416 10.652 16.6601 10.5739L16.1199 10.0561C13.8445 7.87528 10.1555 7.87528 7.88012 10.0561L7.30164 10.6106C7.2201 10.6887 7.0879 10.6887 7.00636 10.6106L5.66357 9.32358C5.50049 9.16727 5.50049 8.91385 5.66357 8.75754L6.09442 8.34459ZM20.6826 11.0063L21.8777 12.1517C22.0408 12.308 22.0408 12.5615 21.8777 12.7178L16.489 17.8828C16.3259 18.0391 16.0615 18.0391 15.8984 17.8828C15.8984 17.8828 15.8984 17.8828 15.8984 17.8828L12.0739 14.217C12.0331 14.1779 11.967 14.1779 11.9262 14.217C11.9262 14.217 11.9262 14.217 11.9262 14.217L8.10172 17.8828C7.93865 18.0391 7.67424 18.0391 7.51116 17.8828C7.51116 17.8828 7.51117 17.8828 7.51116 17.8828L2.12231 12.7177C1.95923 12.5614 1.95923 12.308 2.12231 12.1517L3.31739 11.0062C3.48047 10.8499 3.74487 10.8499 3.90795 11.0062L7.73258 14.672C7.77335 14.7111 7.83945 14.7111 7.88022 14.672C7.88022 14.672 7.88022 14.672 7.88022 14.672L11.7047 11.0062C11.8677 10.8499 12.1321 10.8499 12.2952 11.0062C12.2952 11.0062 12.2952 11.0062 12.2952 11.0062L16.1198 14.672C16.1606 14.7111 16.2267 14.7111 16.2675 14.672L20.0921 11.0063C20.2551 10.85 20.5195 10.85 20.6826 11.0063Z',
            }))
        );
      };
      var E = n(74321),
        A = n(75400);
      let j = 'walletconnect',
        S = {
          CONNECTED: { action: 'WC connected', category: j, event: A.Bx.META },
          POPUP_OPENED: { action: 'WC popup', category: j },
          DISCONNECT_CLICK: { action: 'WC disconnect click', category: j },
          APPROVE_CLICK: { action: 'WC approve click', category: j },
          REJECT_CLICK: { action: 'WC reject click', category: j },
          PASTE_CLICK: { action: 'WC paste click', category: j },
          HINTS_SHOW: { action: 'WC show hints', category: j },
          HINTS_HIDE: { action: 'WC hide hints', category: j },
          HINTS_EXPAND: { action: 'WC expand hints', category: j },
          SHOW_RISK: { action: 'WC show risk', category: j, event: A.Bx.META },
          ACCEPT_RISK: { action: 'WC accept risk', category: j },
          UNSUPPORTED_CHAIN: { action: 'WC unsupported chain', category: j, event: A.Bx.META },
          SHOW_ERROR: { action: 'WC show error', category: j, event: A.Bx.META },
          REQUEST: { action: 'WC request', category: j, event: A.Bx.META },
        };
      var N = n(84942);
      let I = (e) => {
          let { sessionCount: t, sessionIcon: n, isError: s, onClick: a } = e,
            i = 1 === t && !!n;
          return (0, d.jsx)(N.A, {
            ...S.POPUP_OPENED,
            children: (0, d.jsx)(y.u49, {
              onClick: a,
              title: 'WalletConnect',
              sx: { p: 2 },
              children: (0, d.jsx)(y.Exy, {
                variant: s ? 'dot' : 'standard',
                badgeContent: i
                  ? (0, d.jsx)(E.A, { alt: 'Connected dApp icon', src: n, width: 18, height: 18 })
                  : t,
                color: s ? 'error' : i ? void 0 : 'secondary',
                anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
                children: (0, d.jsx)(y.Ahz, {
                  component: b,
                  inheritViewBox: !0,
                  fontSize: 'medium',
                }),
              }),
            }),
          });
        },
        O = (e) => {
          var t;
          let { sessions: n, ...s } = e,
            a = (0, u.useRef)(null);
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)('div', {
                ref: a,
                children: (0, d.jsx)(I, {
                  onClick: s.onOpen,
                  sessionCount: n.length,
                  sessionIcon:
                    null === (t = n[0]) || void 0 === t ? void 0 : t.peer.metadata.icons[0],
                  isError: s.isError,
                }),
              }),
              (0, d.jsx)(g, {
                keepMounted: !0,
                anchorEl: a.current,
                open: s.isOpen,
                onClose: s.onClose,
                transitionDuration: 0,
                children: s.children,
              }),
            ],
          });
        };
      var P = n(33632),
        W = n(32034),
        R = n(89099),
        T = n(1644),
        k = n(22259),
        D = n(68340),
        L = n(77986),
        U = n(29338),
        H = n(94728),
        q = n(32294),
        z = n(54926),
        B = n(16553),
        M = n(7008),
        V = n(72830),
        K = n(30697),
        G = n(94937);
      let Z = (e, t) => {
          if ('granted' !== Notification.permission || document.hasFocus()) return;
          let n = new Notification(e, { icon: '/images/safe-logo-green.png', ...t });
          (n.onclick = () => {
            window.focus(), n.close();
          }),
            setTimeout(() => {
              n.close();
            }, 5e3);
        },
        J = {
          SIGNATURE_REQUEST: (e) => ({
            title: 'Signature request',
            options: {
              body: ''
                .concat(e.name, ' wants you to sign a message. Open the ')
                .concat(G.Az, ' to continue.'),
            },
          }),
          TRANSACTION_REQUEST: (e) => ({
            title: 'Transaction request',
            options: {
              body: ''
                .concat(e.name, ' wants to submit a transaction. Open the ')
                .concat(G.Az, ' to continue.'),
            },
          }),
        };
      var Q = n(57187),
        F = n(73484),
        X = n(57213),
        $ = n(598);
      let Y = (e, t) => {
          let { safe: n } = (0, h.A)(),
            s = (0, K._J)(),
            { setTxFlow: a } = (0, u.useContext)(k.P),
            i = (0, q.vH)(),
            r = (0, R.useRouter)(),
            { configs: o } = (0, K.Ay)(),
            l = (0, u.useRef)({}),
            c = (0, Q.GV)(F.gB),
            [p, v] = (0, u.useState)({ offChainSigning: !0 });
          return (
            (0, u.useEffect)(
              () =>
                (0, U.Vz)(U.hV.PROCESSING, async (e) => {
                  let { txId: t, txHash: n } = e;
                  t && (l.current[t] = n);
                }),
              []
            ),
            (0, u.useMemo)(() => {
              if (!e || !t) return;
              let u = (e, t, i) => {
                let r = Math.random().toString(36).slice(2),
                  o = (0, X.qP)(n, s) && !c && p.offChainSigning,
                  { title: l, options: u } = J.SIGNATURE_REQUEST(t);
                return (
                  Z(l, u),
                  new Promise((n, s) => {
                    let l = () => {
                        s({ code: T.d.USER_REJECTED, message: 'User rejected signature' }), u();
                      },
                      c = (0, L.dF)(L.Nd.SIGNATURE_PREPARED, (e) => {
                        let { requestId: t, signature: s } = e;
                        t === r && (n({ signature: s }), u());
                      }),
                      u = () => {
                        (l = () => {}), c();
                      };
                    o
                      ? a(
                          (0, d.jsx)(D.Bd, {
                            logoUri: t.iconUrl,
                            name: t.name,
                            origin: t.url,
                            message: e,
                            requestId: r,
                          }),
                          l
                        )
                      : a((0, d.jsx)(D.hL, { props: { requestId: r, message: e, method: i } }), l);
                  })
                );
              };
              return {
                signMessage: async (e, t) => await u(e, t, H.PJ.signMessage),
                signTypedMessage: async (e, t) => await u(e, t, H.PJ.signTypedMessage),
                async send(e, t) {
                  let n = Math.random().toString(36).slice(2),
                    s = e.txs.map((e) => {
                      let { to: t, value: n, data: s } = e;
                      return { to: (0, B.b)(t), value: BigInt(n).toString(), data: s };
                    }),
                    { title: i, options: r } = J.TRANSACTION_REQUEST(t);
                  return (
                    Z(i, r),
                    new Promise((i, r) => {
                      let o = () => {
                        r({ code: T.d.USER_REJECTED, message: 'User rejected transaction' });
                      };
                      a(
                        (0, d.jsx)(D.Ad, {
                          data: { appId: void 0, app: t, requestId: n, txs: s, params: e.params },
                          onSubmit: (e, t) => {
                            let n = l.current[e];
                            (o = () => {}), i({ safeTxHash: t, txHash: n });
                          },
                        }),
                        o
                      );
                    })
                  );
                },
                getBySafeTxHash: async (t) => (0, z.getTransactionDetails)(e, t),
                async switchChain(t, n) {
                  if (parseInt(t, 16).toString() === e) return null;
                  let s = o.find((t) => t.chainId === e);
                  if (!s) throw Error('Chain '.concat(e, ' not supported'));
                  return (
                    confirm(
                      ''
                        .concat(n.name, ' wants to switch to ')
                        .concat(s.shortName, '. Do you want to continue?')
                    ) && r.push({ pathname: V.S.index, query: { chain: s.shortName } }),
                    null
                  );
                },
                async showTxStatus(e) {
                  r.push({ pathname: V.S.transactions.tx, query: { safe: r.query.safe, id: e } });
                },
                setSafeSettings(e) {
                  let t = { ...p, ...e };
                  return v(e), t;
                },
                proxy: async (e, t) => (null == i ? void 0 : i.send(e, null != t ? t : [])),
                getCreateCallTransaction(e) {
                  let t = s ? (0, $.G5)(s, n.version) : void 0;
                  if (!t) throw Error('No CreateCall deployment found for chain and safe version');
                  return {
                    to: t.networkAddresses[n.chainId],
                    data: new M.KA(t.abi).encodeFunctionData('performCreate', ['0', e]),
                    value: '0',
                  };
                },
              };
            }, [e, t, n, s, c, p, a, o, r, i])
          );
        },
        ee = () => {
          let { safe: e, safeAddress: t } = (0, h.A)(),
            { chainId: n } = e,
            s = Y(n, t);
          return (0, u.useMemo)(() => {
            if (t && n && s) return new T._({ safeAddress: t, chainId: Number(n) }, s);
          }, [t, n, s]);
        };
      var et = n(36734),
        en = n(84747),
        es = n(85205);
      let ea = [
          'personal_sign',
          'eth_sign',
          'eth_signTypedData',
          'eth_signTypedData_v4',
          'eth_sendTransaction',
        ],
        ei = (e, t) => {
          ea.includes(t) && (0, es.sx)({ ...S.REQUEST, label: e });
        };
      var er = n(70884),
        eo = n(66584),
        el = n(24128),
        ec = n(78311),
        ed = n.n(ec),
        eu = n(11582),
        ep = n(27196);
      let eh = 'session_add',
        ev = 'session_reject';
      function em(e) {
        return (0, ep.V1)(e, 'WalletConnect not initialized');
      }
      class ef {
        async init() {
          if (this.web3Wallet) return;
          let e = new eo.iJ({
              projectId: G.l9,
              logger: G.p8 ? void 0 : 'debug',
              customStoragePrefix: G.cT,
            }),
            t = await el._c.init({ core: e, metadata: eu.sd });
          this.web3Wallet = t;
        }
        async connect(e) {
          return em(this.web3Wallet), this.web3Wallet.core.pairing.pair({ uri: e });
        }
        async chainChanged(e, t) {
          var n;
          let s = (0, en.sd)(t);
          return null === (n = this.web3Wallet) || void 0 === n
            ? void 0
            : n.emitSessionEvent({
                topic: e,
                event: { name: 'chainChanged', data: Number(t) },
                chainId: s,
              });
        }
        async accountsChanged(e, t, n) {
          var s;
          let a = (0, en.sd)(t);
          return null === (s = this.web3Wallet) || void 0 === s
            ? void 0
            : s.emitSessionEvent({
                topic: e,
                event: { name: 'accountsChanged', data: [n] },
                chainId: a,
              });
        }
        getNamespaces(e, t, n) {
          var s, a, i;
          let r = [t]
              .concat(
                (
                  (null === (s = e.params.requiredNamespaces[eu.U6]) || void 0 === s
                    ? void 0
                    : s.chains) || []
                ).map(en.wQ)
              )
              .map(en.sd),
            o = r.map((e) => ''.concat(e, ':').concat(n)),
            l = ed()(
              (
                (null === (a = e.params.requiredNamespaces[eu.U6]) || void 0 === a
                  ? void 0
                  : a.methods) || []
              ).concat(eu.GD)
            ),
            c = ed()(
              (
                (null === (i = e.params.requiredNamespaces[eu.U6]) || void 0 === i
                  ? void 0
                  : i.events) || []
              ).concat(eu.jf)
            );
          return (0, P.ewq)({
            proposal: e.params,
            supportedNamespaces: { [eu.U6]: { chains: r, accounts: o, methods: l, events: c } },
          });
        }
        async approveSession(e, t, n, s) {
          var a, i;
          em(this.web3Wallet);
          let r = this.getNamespaces(e, t, n),
            o = await this.web3Wallet.approveSession({
              id: e.id,
              namespaces: r,
              sessionProperties: s,
            });
          return (
            await this.chainChanged(o.topic, t),
            null === (a = this.web3Wallet) || void 0 === a || a.events.emit(eh, o),
            null !==
              (i = this.getActiveSessions().find((e) => {
                let { topic: t } = e;
                return t === o.topic;
              })) && void 0 !== i
              ? i
              : o
          );
        }
        async updateSession(e, t, n) {
          var s, a;
          em(this.web3Wallet);
          let i = (null === (s = e.namespaces[eu.U6]) || void 0 === s ? void 0 : s.chains) || [],
            r = (null === (a = e.namespaces[eu.U6]) || void 0 === a ? void 0 : a.accounts) || [],
            o = (0, en.sd)(t),
            l = ''.concat(o, ':').concat(n),
            c = !i.includes(o),
            d = !r.includes(l);
          if (c) return this.disconnectSession(e);
          if (d) {
            let t = { [eu.U6]: { ...e.namespaces[eu.U6], chains: i, accounts: [l, ...r] } };
            await this.web3Wallet.updateSession({ topic: e.topic, namespaces: t });
          }
          await this.chainChanged(e.topic, t), await this.accountsChanged(e.topic, t, n);
        }
        async updateSessions(e, t) {
          for await (let n of this.getActiveSessions()) await this.updateSession(n, e, t);
        }
        async rejectSession(e) {
          var t;
          em(this.web3Wallet),
            await this.web3Wallet.rejectSession({ id: e.id, reason: (0, P.Hjj)('USER_REJECTED') }),
            null === (t = this.web3Wallet) || void 0 === t || t.events.emit(ev, e);
        }
        onSessionPropose(e) {
          var t;
          return (
            null === (t = this.web3Wallet) || void 0 === t || t.on('session_proposal', e),
            () => {
              var t;
              null === (t = this.web3Wallet) || void 0 === t || t.off('session_proposal', e);
            }
          );
        }
        onSessionReject(e) {
          var t;
          return (
            null === (t = this.web3Wallet) || void 0 === t || t.on(ev, e),
            () => {
              var t;
              null === (t = this.web3Wallet) || void 0 === t || t.off(ev, e);
            }
          );
        }
        async disconnectSession(e) {
          em(this.web3Wallet),
            await this.web3Wallet.disconnectSession({
              topic: e.topic,
              reason: (0, P.Hjj)('USER_DISCONNECTED'),
            }),
            this.web3Wallet.events.emit('session_delete', e);
        }
        getActiveSessions() {
          var e;
          return Object.values(
            (null === (e = this.web3Wallet) || void 0 === e ? void 0 : e.getActiveSessions()) || {}
          );
        }
        onRequest(e) {
          var t;
          return (
            null === (t = this.web3Wallet) || void 0 === t || t.on('session_request', e),
            () => {
              var t;
              null === (t = this.web3Wallet) || void 0 === t || t.off('session_request', e);
            }
          );
        }
        async sendSessionResponse(e, t) {
          return (
            em(this.web3Wallet),
            await this.web3Wallet.respondSessionRequest({ topic: e, response: t })
          );
        }
        constructor() {
          (this.web3Wallet = null),
            (this.onSessionAdd = (e) => {
              var t;
              return (
                null === (t = this.web3Wallet) || void 0 === t || t.on(eh, e),
                () => {
                  var t;
                  null === (t = this.web3Wallet) || void 0 === t || t.off(eh, e);
                }
              );
            }),
            (this.onSessionDelete = (e) => {
              var t;
              return (
                null === (t = this.web3Wallet) || void 0 === t || t.on('session_delete', e),
                () => {
                  var t;
                  null === (t = this.web3Wallet) || void 0 === t || t.off('session_delete', e);
                }
              );
            });
        }
      }
      var eC = (function (e) {
          return (
            (e.WRONG_CHAIN =
              '%%dappName%% made a request on a different chain than the one you are connected to'),
            e
          );
        })(eC || {}),
        ex = (function (e) {
          return (
            (e.APPROVE = 'Approve'),
            (e.REJECT = 'Reject'),
            (e.CONNECT = 'Connect'),
            (e.DISCONNECT = 'Disconnect'),
            e
          );
        })({});
      let eg = new ef(),
        ey = (e) =>
          Error(
            '%%dappName%% made a request on a different chain than the one you are connected to'.replace(
              '%%dappName%%',
              e
            )
          ),
        ew = (e) => {
          var t;
          let { children: n } = e,
            {
              safe: { chainId: s },
              safeAddress: a,
            } = (0, h.A)(),
            [i, r] = (0, u.useState)(null),
            o = null !== (t = er.EN.useStore()) && void 0 !== t && t,
            l = er.EN.setStore,
            [c, p] = (0, u.useState)(null),
            [m, f] = (0, u.useState)(),
            C = ee();
          return (
            (0, u.useEffect)(() => {
              eg.init()
                .then(() => r(eg))
                .catch(p);
            }, []),
            (0, u.useEffect)(() => {
              i && s && a && i.updateSessions(s, a).catch(p);
            }, [i, s, a]),
            (0, u.useEffect)(() => {
              if (i && C && s)
                return i.onRequest(async (e) => {
                  G.p8 || console.log('[WalletConnect] request', e);
                  let { topic: t } = e,
                    n = i.getActiveSessions().find((e) => e.topic === t),
                    a = (0, en.wQ)(e.params.chainId);
                  n && ei(n.peer.metadata.url, e.params.request.method);
                  try {
                    let r = await (() => {
                      if (!n || a !== s) {
                        n && p(ey((0, en.A7)(n.peer)));
                        let t = (0, P.Hjj)('UNSUPPORTED_CHAINS');
                        return (0, W.formatJsonRpcError)(e.id, t);
                      }
                      return C.request(e.id, e.params.request, {
                        url: 'https://apps-portal.safe.global/wallet-connect',
                        name: (0, en.A7)(n.peer) || 'WalletConnect',
                        description: n.peer.metadata.description,
                        iconUrl: n.peer.metadata.icons[0],
                      });
                    })();
                    await i.sendSessionResponse(t, r);
                  } catch (e) {
                    p((0, et.z)(e));
                  }
                });
            }, [i, s, C]),
            (0, d.jsx)(v.Provider, {
              value: {
                walletConnect: i,
                error: c,
                setError: p,
                open: o,
                setOpen: l,
                isLoading: m,
                setIsLoading: f,
              },
              children: n,
            })
          );
        };
      var e_ = n(3933),
        eb = n(21128),
        eE = n(87505),
        eA = ['title', 'titleId'];
      function ej() {
        return (ej = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var s in n) ({}).hasOwnProperty.call(n, s) && (e[s] = n[s]);
              }
              return e;
            }).apply(null, arguments);
      }
      let eS = function (e) {
        var t = e.title,
          n = e.titleId,
          s = (function (e, t) {
            if (null == e) return {};
            var n,
              s,
              a = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var s in e)
                  if ({}.hasOwnProperty.call(e, s)) {
                    if (t.includes(s)) continue;
                    n[s] = e[s];
                  }
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (s = 0; s < i.length; s++)
                (n = i[s]), t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
          })(e, eA);
        return u.createElement(
          'svg',
          ej(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-labelledby': n,
            },
            s
          ),
          t ? u.createElement('title', { id: n }, t) : null,
          a ||
            (a = u.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M14.6667 8C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8C1.33337 4.3181 4.31814 1.33334 8.00004 1.33334C11.6819 1.33334 14.6667 4.3181 14.6667 8ZM2.66671 8C2.66671 10.9455 5.05452 13.3333 8.00004 13.3333C10.9456 13.3333 13.3334 10.9455 13.3334 8C13.3334 5.05448 10.9456 2.66667 8.00004 2.66667C5.05452 2.66667 2.66671 5.05448 2.66671 8Z',
            })),
          i ||
            (i = u.createElement('path', {
              d: 'M6.96139 6.08947C6.96139 5.57606 7.39595 5.1528 7.94139 5.1528C8.48561 5.1528 8.92005 5.57618 8.92005 6.08947C8.92581 6.46417 8.83055 6.59424 8.36991 6.93046L8.33843 6.95343C7.55727 7.52345 7.22948 7.97805 7.27558 8.88209L7.27472 9.01347C7.27472 9.38166 7.5732 9.68013 7.94139 9.68013C8.30958 9.68013 8.60805 9.38166 8.60805 9.01347V8.84813C8.58981 8.47344 8.67025 8.36187 9.12437 8.0305L9.15598 8.00743C9.93162 7.4413 10.2674 6.98283 10.2533 6.07908C10.2534 4.83199 9.2144 3.81947 7.94139 3.81947C6.66733 3.81947 5.62805 4.8317 5.62805 6.08947C5.62805 6.45766 5.92653 6.75613 6.29472 6.75613C6.66291 6.75613 6.96139 6.45766 6.96139 6.08947Z',
            })),
          r ||
            (r = u.createElement('path', {
              d: 'M7.99996 10.5C8.4602 10.5 8.83329 10.8731 8.83329 11.3333C8.83329 11.7936 8.4602 12.1667 7.99996 12.1667C7.53972 12.1667 7.16663 11.7936 7.16663 11.3333C7.16663 10.8731 7.53972 10.5 7.99996 10.5Z',
            }))
        );
      };
      var eN = n(24296),
        eI = n.n(eN);
      let eO = (e) => {
          let { title: t, items: n, expanded: s, onExpand: a } = e;
          return (0, d.jsxs)(x.nD3, {
            onClick: a,
            expanded: s,
            children: [
              (0, d.jsx)(x.Xo_, {
                expandIcon: (0, d.jsx)(eE.A, {}),
                children: (0, d.jsxs)(x.o5u, {
                  className: eI().title,
                  children: [
                    (0, d.jsx)(x.Ahz, {
                      component: eS,
                      inheritViewBox: !0,
                      className: eI().questionIcon,
                    }),
                    t,
                  ],
                }),
              }),
              (0, d.jsx)(x.ZiS, {
                sx: { p: 0 },
                children: (0, d.jsx)(x.B8B, {
                  className: eI().list,
                  children: n.map((e, t) =>
                    (0, d.jsxs)(
                      x.ckQ,
                      {
                        sx: { p: 0 },
                        children: [
                          (0, d.jsx)(x.$cp, {
                            className: eI().listItemAvatar,
                            children: (0, d.jsx)(x.euF, {
                              className: eI().avatar,
                              children: t + 1,
                            }),
                          }),
                          (0, d.jsx)(x.ZqK, {
                            primary: e,
                            sx: { m: 0 },
                            primaryTypographyProps: { variant: 'body2' },
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              }),
            ],
          });
        },
        eP = [
          'Open a WalletConnect supported dApp',
          'Connect a wallet',
          'Select WalletConnect as the wallet',
          'Copy the pairing code and paste it into the input field above',
          'Approve the session',
          'dApp is now connected to the Safe',
        ],
        eW = [
          'Connect a dApp by following the above steps',
          'Ensure the dApp is connected to the same chain as your Safe Account',
          'Initiate a transaction/signature request via the dApp',
          'Transact/sign as normal via the Safe',
        ],
        eR = () => {
          let [e, t] = (0, u.useState)(null),
            n = (e) => {
              t((t) => (t === e ? null : e)), (0, es.sx)(S.HINTS_EXPAND);
            };
          return (0, d.jsxs)(x.azJ, {
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            children: [
              (0, d.jsx)(eO, {
                title: 'How do I connect to a dApp?',
                items: eP,
                onExpand: () => n('connection'),
                expanded: 'connection' === e,
              }),
              (0, d.jsx)(eO, {
                title: 'How do I interact with a dApp?',
                items: eW,
                onExpand: () => n('interaction'),
                expanded: 'interaction' === e,
              }),
            ],
          });
        };
      var eT = n(85002),
        ek = n.n(eT),
        eD = n(88271),
        eL = n(28798);
      let eU = [
          {
            name: 'Zerion',
            icon: '/images/common/nft-zerion.svg',
            url: 'https://app.zerion.io/connect-wallet',
          },
          { name: 'Zapper', icon: '/images/common/nft-zapper.svg', url: 'https://zapper.xyz/' },
          { name: 'OpenSea', icon: '/images/common/nft-opensea.svg', url: 'https://opensea.io/' },
        ],
        eH = (e) => {
          let { onUnload: t } = e;
          return (
            (0, u.useEffect)(() => t, [t]),
            (0, d.jsx)(eL.o5u, {
              variant: 'body2',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 3,
              component: 'div',
              children: eU.map((e) =>
                (0, d.jsx)(
                  eL.o5u,
                  {
                    variant: 'body2',
                    children: (0, d.jsxs)(eD.A, {
                      href: e.url,
                      noIcon: !0,
                      px: 1,
                      children: [
                        (0, d.jsx)('img', {
                          src: e.icon,
                          alt: e.name,
                          width: 32,
                          height: 32,
                          style: { marginRight: '0.5em' },
                        }),
                        e.name,
                      ],
                    }),
                  },
                  e.url
                )
              ),
            })
          );
        },
        eq = () => {
          let { safeLoaded: e } = (0, h.A)(),
            [t = !0, n] = (0, e_.A)('native_wc_dapps'),
            s = (0, u.useCallback)(() => {
              n(!1);
            }, [n]),
            a = t && e && (0, d.jsx)(eH, { onUnload: s });
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsxs)(eL.o5u, {
                variant: 'body2',
                textAlign: 'center',
                color: 'text.secondary',
                children: ['No dApps are connected yet.', a ? ' Try one of these:' : ''],
              }),
              a,
            ],
          });
        },
        ez = (e) => {
          let { session: t } = e,
            { walletConnect: n, setError: s, isLoading: a, setIsLoading: i } = (0, u.useContext)(v),
            { safeLoaded: r } = (0, h.A)(),
            o = (0, en.A7)(t.peer) || 'Unknown dApp';
          o.length > 24 && (o = ''.concat(o.slice(0, 23), '…'));
          let l = (0, u.useCallback)(async () => {
            if (!n) return;
            let e = t.peer.metadata.url;
            (0, es.sx)({ ...S.DISCONNECT_CLICK, label: e }), i(ex.DISCONNECT);
            try {
              await n.disconnectSession(t);
            } catch (e) {
              i(void 0), s((0, et.z)(e));
            }
            i(void 0);
          }, [n, t, i, s]);
          return (0, d.jsxs)(x.ckQ, {
            className: ek().sessionListItem,
            children: [
              t.peer.metadata.icons[0] &&
                (0, d.jsx)(x.$cp, {
                  className: ek().sessionListAvatar,
                  children: (0, d.jsx)(E.A, {
                    src: t.peer.metadata.icons[0],
                    alt: 'icon',
                    width: 20,
                    height: 20,
                  }),
                }),
              (0, d.jsx)(x.ZqK, {
                primary: o,
                primaryTypographyProps: { color: r ? void 0 : 'text.secondary' },
              }),
              (0, d.jsx)(x.LaP, {
                className: ek().sessionListSecondaryAction,
                children: (0, d.jsx)(x.$nd, {
                  variant: 'danger',
                  onClick: l,
                  className: ek().button,
                  disabled: !!a,
                  children: a === ex.DISCONNECT ? (0, d.jsx)(x.PaH, { size: 20 }) : 'Disconnect',
                }),
              }),
            ],
          });
        },
        eB = (e) => {
          let { sessions: t } = e;
          return 0 === t.length
            ? (0, d.jsx)(eq, {})
            : (0, d.jsx)(x.B8B, {
                className: ek().sessionList,
                children: Object.values(t).map((e) => (0, d.jsx)(ez, { session: e }, e.topic)),
              });
        };
      var eM = n(21436),
        eV = n(26247);
      let eK = () => navigator.userAgent.includes('Firefox'),
        eG = async () => {
          if (eK()) return '';
          let e = '';
          try {
            e = await navigator.clipboard.readText();
          } catch (e) {
            (0, eV.vV)(eV.I._708, e);
          }
          return e;
        },
        eZ = (e) => {
          let t = (0, eM.A)(null == e ? void 0 : e.message, 1e3);
          (0, u.useEffect)(() => {
            t && (0, es.sx)({ ...S.SHOW_ERROR, label: t });
          }, [t]);
        },
        eJ = (e) => {
          let { uri: t } = e,
            { walletConnect: n, isLoading: s, setIsLoading: a, setError: i } = (0, u.useContext)(v),
            [r, o] = (0, u.useState)(''),
            [l, c] = (0, u.useState)();
          eZ(l);
          let p = (0, u.useCallback)(
            async (e) => {
              if (n) {
                if ((o(e), e && !(0, en.hD)(e))) {
                  c(Error('Invalid pairing code'));
                  return;
                }
                if ((c(void 0), e)) {
                  a(ex.CONNECT);
                  try {
                    await n.connect(e);
                  } catch (e) {
                    c((0, et.z)(e)), a(void 0);
                  }
                  setTimeout(() => {
                    s && s !== ex.APPROVE && (a(void 0), i(Error('Connection timed out')));
                  }, 3e4);
                }
              }
            },
            [s, i, a, n]
          );
          (0, u.useEffect)(() => {
            p(t);
          }, [p, t]);
          let h = (0, u.useCallback)(async () => {
            let e = await eG();
            e && (0, en.hD)(e) && p(e);
          }, [p]);
          return (0, d.jsx)(x.A_L, {
            'data-testid': 'wc-input',
            value: r,
            onChange: (e) => p(e.target.value),
            fullWidth: !0,
            autoComplete: 'off',
            autoFocus: !0,
            disabled: !!s,
            error: !!l,
            label: l ? l.message : 'Pairing code',
            placeholder: 'wc:',
            spellCheck: !1,
            InputProps: {
              autoComplete: 'off',
              endAdornment: eK()
                ? void 0
                : (0, d.jsx)(x.jC1, {
                    position: 'end',
                    children: (0, d.jsx)(N.A, {
                      ...S.PASTE_CLICK,
                      children: (0, d.jsx)(x.$nd, {
                        variant: 'contained',
                        onClick: h,
                        sx: { py: 1 },
                        disabled: !!s,
                        children:
                          s === ex.CONNECT || s === ex.APPROVE
                            ? (0, d.jsx)(x.PaH, { size: 20 })
                            : 'Paste',
                      }),
                    }),
                  }),
            },
          });
        };
      var eQ = n(72197),
        eF = ['title', 'titleId'];
      function eX() {
        return (eX = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var s in n) ({}).hasOwnProperty.call(n, s) && (e[s] = n[s]);
              }
              return e;
            }).apply(null, arguments);
      }
      let e$ = function (e) {
        var t = e.title,
          n = e.titleId,
          s = (function (e, t) {
            if (null == e) return {};
            var n,
              s,
              a = (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var s in e)
                  if ({}.hasOwnProperty.call(e, s)) {
                    if (t.includes(s)) continue;
                    n[s] = e[s];
                  }
                return n;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (s = 0; s < i.length; s++)
                (n = i[s]), t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
            }
            return a;
          })(e, eF);
        return u.createElement(
          'svg',
          eX(
            {
              width: 22,
              height: 22,
              viewBox: '0 0 22 22',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-labelledby': n,
            },
            s
          ),
          t ? u.createElement('title', { id: n }, t) : null,
          o ||
            (o = u.createElement('rect', {
              x: 10.083,
              y: 5.5,
              width: 1.83333,
              height: 7.33333,
              rx: 0.916667,
              fill: 'currentColor',
            })),
          l ||
            (l = u.createElement('path', {
              d: 'M11.0003 14.4375C11.6332 14.4375 12.1462 14.9505 12.1462 15.5833C12.1462 16.2162 11.6332 16.7292 11.0003 16.7292C10.3675 16.7292 9.85449 16.2162 9.85449 15.5833C9.85449 14.9505 10.3675 14.4375 11.0003 14.4375Z',
              fill: 'currentColor',
            })),
          c ||
            (c = u.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M20.1663 11.0002C20.1663 16.0628 16.0623 20.1668 10.9997 20.1668C5.93706 20.1668 1.83301 16.0628 1.83301 11.0002C1.83301 5.93755 5.93706 1.8335 10.9997 1.8335C16.0623 1.8335 20.1663 5.93755 20.1663 11.0002ZM3.66634 11.0002C3.66634 15.0503 6.94959 18.3335 10.9997 18.3335C15.0498 18.3335 18.333 15.0503 18.333 11.0002C18.333 6.95007 15.0498 3.66683 10.9997 3.66683C6.94959 3.66683 3.66634 6.95007 3.66634 11.0002Z',
              fill: 'currentColor',
            }))
        );
      };
      var eY = n(82926),
        e0 = n.n(eY);
      let e1 = (e) => {
        let { errorMessage: t } = e;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsxs)('div', {
              children: [
                (0, d.jsx)(eQ.Ahz, {
                  'data-testid': 'wc-icon',
                  component: b,
                  inheritViewBox: !0,
                  className: e0().icon,
                }),
                t &&
                  (0, d.jsx)(eQ.Ahz, {
                    'data-testid': 'wc-alert',
                    component: e$,
                    inheritViewBox: !0,
                    className: e0().errorBadge,
                    fontSize: 'small',
                  }),
              ],
            }),
            (0, d.jsx)(eQ.o5u, {
              'data-testid': 'wc-title',
              variant: 'h5',
              mt: 2,
              mb: 0.5,
              className: e0().title,
              children: t || 'Connect dApps to '.concat(G.Az),
            }),
          ],
        });
      };
      var e3 = n(58318),
        e6 = n.n(e3);
      let e2 = (e) => {
        let { sessions: t, uri: n } = e,
          [s = !0, a] = (0, e_.A)('wcHints'),
          { safeLoaded: i } = (0, h.A)(),
          r = (0, u.useCallback)(() => {
            a((e) => !e);
          }, [a]);
        return (
          (0, u.useEffect)(() => () => a(!1), [a]),
          (0, d.jsxs)(x.xA9, {
            className: e6().container,
            children: [
              (0, d.jsxs)(x.xA9, {
                item: !0,
                sx: { textAlign: 'center' },
                children: [
                  (0, d.jsx)(x.m_M, {
                    title: s ? 'Hide how WalletConnect works' : 'How does WalletConnect work?',
                    placement: 'top',
                    arrow: !0,
                    className: e6().infoIcon,
                    children: (0, d.jsx)('span', {
                      children: (0, d.jsx)(N.A, {
                        ...(s ? S.HINTS_HIDE : S.HINTS_SHOW),
                        children: (0, d.jsx)(x.K0, {
                          onClick: r,
                          children: (0, d.jsx)(x.Ahz, {
                            component: eb.A,
                            inheritViewBox: !0,
                            color: 'border',
                          }),
                        }),
                      }),
                    }),
                  }),
                  (0, d.jsx)(e1, {}),
                  (0, d.jsx)(x.o5u, {
                    variant: 'body2',
                    sx: { color: 'text.secondary' },
                    children: i
                      ? 'Paste the pairing code below to connect to your '.concat(
                          G.Az,
                          ' via WalletConnect'
                        )
                      : 'Please open one of your Safe Accounts to connect to via WalletConnect',
                  }),
                  i
                    ? (0, d.jsx)(x.azJ, { sx: { mt: 3 }, children: (0, d.jsx)(eJ, { uri: n }) })
                    : null,
                ],
              }),
              (0, d.jsx)(x.cGx, { flexItem: !0 }),
              (0, d.jsx)(x.xA9, { item: !0, children: (0, d.jsx)(eB, { sessions: t }) }),
              s &&
                (0, d.jsxs)(d.Fragment, {
                  children: [
                    (0, d.jsx)(x.cGx, { flexItem: !0 }),
                    (0, d.jsx)(x.xA9, { item: !0, sx: { mt: 1 }, children: (0, d.jsx)(eR, {}) }),
                  ],
                }),
            ],
          })
        );
      };
      var e8 = n(38876),
        e7 = n(48019),
        e9 = n.n(e7);
      let e5 = (e) => {
        let { error: t, onClose: n } = e,
          s = t.message || 'An error occurred',
          [a, i] = (0, en.Xy)(s);
        return (0, d.jsxs)('div', {
          className: e9().errorContainer,
          children: [
            (0, d.jsx)(e1, { errorMessage: a }),
            i && (0, d.jsx)(e8.o5u, { mt: 1, className: e9().details, children: i }),
            (0, d.jsx)(e8.$nd, {
              variant: 'contained',
              onClick: n,
              className: e9().button,
              children: 'OK',
            }),
          ],
        });
      };
      var e4 = n(6420),
        te = n(75073),
        tt = n(12426);
      let tn = 'this dApp',
        ts = '%%name%%',
        ta = '%%chain%%',
        ti = {
          BLOCKED_BRIDGE: {
            severity: 'error',
            message: ''
              .concat(ts, ' is a bridge that is incompatible with ')
              .concat(
                G.Az,
                ' — the bridged funds will be lost. Consider using a different bridge.'
              ),
          },
          WARNED_BRIDGE: {
            severity: 'warning',
            message: 'While bridging via '.concat(
              ts,
              ', please make sure that the desination address you send funds to matches the Safe address you have on the respective chain. Otherwise, the funds will be lost.'
            ),
          },
          UNSUPPORTED_CHAIN: {
            severity: 'error',
            message: ''
              .concat(ts, " does not support this Safe Account's network (")
              .concat(
                ta,
                '). Please switch to a Safe Account on one of the supported networks below.'
              ),
          },
          WRONG_CHAIN: {
            severity: 'info',
            message: 'Please make sure that the dApp is connected to '.concat(ta, '.'),
          },
        },
        tr = (e, t, n) =>
          n
            ? ti.UNSUPPORTED_CHAIN
            : (0, en.Wv)(e)
              ? ti.BLOCKED_BRIDGE
              : (0, en.p0)(e, t)
                ? ti.WARNED_BRIDGE
                : ti.WRONG_CHAIN,
        to = (e, t) => {
          let { configs: n } = (0, K.Ay)(),
            { safe: s } = (0, h.A)();
          return (0, u.useMemo)(() => {
            let a = (0, en.A7)(e.params.proposer) || tn,
              { origin: i } = e.verifyContext.verified,
              { message: r, severity: o } = tr(i, a, t);
            if (
              (r.includes(ts) && (r = r.replaceAll(ts, a)).startsWith(tn) && (r = (0, tt.ZH)(r)),
              r.includes(ta))
            ) {
              var l, c;
              let e =
                null !==
                  (c =
                    null === (l = n.find((e) => e.chainId === s.chainId)) || void 0 === l
                      ? void 0
                      : l.chainName) && void 0 !== c
                  ? c
                  : 'this network';
              r = r.replaceAll(ta, e);
            }
            return { message: r, severity: o };
          }, [n, t, e.params, e.verifyContext.verified, s.chainId]);
        };
      var tl = n(58444),
        tc = n.n(tl);
      let td = (e) => {
        let { proposal: t, chainIds: n } = e,
          { safe: s } = (0, h.A)(),
          a = !n.includes(s.chainId),
          { severity: i, message: r } = to(t, a);
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(e4.FcD, { severity: i, className: tc().alert, children: r }),
            a &&
              (0, d.jsxs)(d.Fragment, {
                children: [
                  (0, d.jsx)(e4.o5u, {
                    mt: 3,
                    mb: 1,
                    variant: 'h5',
                    children: 'Supported networks',
                  }),
                  (0, d.jsx)(e4.BJc, {
                    direction: 'row',
                    children: n.map((e) =>
                      (0, d.jsx)(te.A, { inline: !0, chainId: e, className: tc().chain }, e)
                    ),
                  }),
                ],
              }),
          ],
        });
      };
      var tu = n(82756);
      let tp = (e) => {
        let { proposal: t } = e,
          { isScam: n, validation: s } = t.verifyContext.verified;
        if ('UNKNOWN' === s || 'VALID' === s) return null;
        let a = (0, en.A7)(t.params.proposer);
        return (0, d.jsx)(tu.FcD, {
          severity: 'error',
          sx: { bgcolor: 'error.background' },
          className: tc().alert,
          icon: (0, d.jsx)(tu.Ahz, {
            component: e$,
            inheritViewBox: !0,
            color: 'error',
            sx: { '& path': { fill: 'error.main' } },
          }),
          children: n
            ? 'We prevent connecting to '.concat(a || 'this dApp', ' as they are a known scam.')
            : ''.concat(
                a || 'This dApp',
                ' has a domain that does not match the sender of this request. Approving it may result in a loss of funds.'
              ),
        });
      };
      var th = n(66709),
        tv = n(1853);
      let tm = (e) => {
          let { proposal: t, setProposal: n, onApprove: s } = e,
            { walletConnect: a, setError: i, setIsLoading: r, isLoading: o } = (0, u.useContext)(v),
            { configs: l } = (0, K.Ay)(),
            { safeLoaded: c, safe: p } = (0, h.A)(),
            { chainId: m } = p,
            [f, C] = (0, u.useState)(!1),
            { proposer: g } = t.params,
            { isScam: y, origin: w } = t.verifyContext.verified,
            _ = g.metadata.url || w,
            b = (0, en.S2)(w),
            A = (0, th.a)(b),
            j = (0, u.useMemo)(() => (0, en.ul)(l, t.params), [l, t.params]),
            N = !j.includes(m),
            I = (0, en.A7)(g) || 'Unknown dApp',
            O = 'INVALID' === t.verifyContext.verified.validation || (0, en.p0)(w, I),
            P = y || (0, en.Wv)(w),
            W = !c || N || P || (O && !f) || !!o || (!!A && b),
            R = (0, u.useCallback)(async () => {
              if (!a || !t) return;
              let e = null == t ? void 0 : t.params.proposer.metadata.url;
              (0, es.sx)({ ...S.REJECT_CLICK, label: e }), r(ex.REJECT);
              try {
                await a.rejectSession(t);
              } catch (e) {
                r(void 0), i((0, et.z)(e));
              }
              r(void 0), n(void 0);
            }, [a, t, r, n, i]),
            T = (0, u.useCallback)(
              (e, t) => {
                C(t), t && (0, es.sx)({ ...S.ACCEPT_RISK, label: _ });
              },
              [_]
            );
          return (
            (0, u.useEffect)(() => {
              (O || P) && (0, es.sx)({ ...S.SHOW_RISK, label: _ });
            }, [O, P, _]),
            (0, u.useEffect)(() => {
              N && (0, es.sx)({ ...S.UNSUPPORTED_CHAIN, label: _ });
            }, [_, N]),
            (0, d.jsxs)('div', {
              className: tc().container,
              children: [
                (0, d.jsx)(x.o5u, {
                  variant: 'body2',
                  color: 'text.secondary',
                  children: 'WalletConnect',
                }),
                g.metadata.icons[0] &&
                  (0, d.jsx)('div', {
                    className: tc().icon,
                    children: (0, d.jsx)(E.A, {
                      src: g.metadata.icons[0],
                      width: 32,
                      height: 32,
                      alt: ''.concat(I || 'dApp', ' logo'),
                    }),
                  }),
                (0, d.jsxs)(x.o5u, {
                  mb: 1,
                  children: [(0, d.jsx)('b', { children: I }), ' wants to connect'],
                }),
                (0, d.jsx)(x.o5u, {
                  className: tc().origin,
                  mb: 3,
                  children: t.verifyContext.verified.origin,
                }),
                (0, d.jsxs)('div', {
                  className: tc().info,
                  children: [
                    (0, d.jsx)(tp, { proposal: t }),
                    (0, d.jsx)(td, { proposal: t, chainIds: j }),
                  ],
                }),
                !P &&
                  O &&
                  (0, d.jsx)(x.ip9, {
                    className: tc().checkbox,
                    control: (0, d.jsx)(x.Sc0, { checked: f, onChange: T }),
                    label:
                      'I understand the risks associated with interacting with this dApp and would like to continue.',
                  }),
                b && A && (0, d.jsx)(tv.A, { address: A, featureTitle: 'Safe{Pass}', onClose: R }),
                (0, d.jsx)(x.cGx, { flexItem: !0, className: tc().divider }),
                (0, d.jsxs)('div', {
                  className: tc().buttons,
                  children: [
                    (0, d.jsx)(x.$nd, {
                      variant: 'danger',
                      onClick: R,
                      className: tc().button,
                      disabled: !!o,
                      children: o === ex.REJECT ? (0, d.jsx)(x.PaH, { size: 20 }) : 'Reject',
                    }),
                    (0, d.jsx)(x.$nd, {
                      variant: 'contained',
                      onClick: () => s(),
                      className: tc().button,
                      disabled: W,
                      children: o === ex.APPROVE ? (0, d.jsx)(x.PaH, { size: 20 }) : 'Approve',
                    }),
                  ],
                }),
              ],
            })
          );
        },
        tf = (e) => {
          let { sessions: t, uri: n } = e,
            [s = {}, a] = (0, e_.A)('wcAutoApprove'),
            {
              walletConnect: i,
              error: r,
              setError: o,
              open: l,
              setOpen: c,
              setIsLoading: p,
            } = (0, u.useContext)(v),
            { safe: m, safeAddress: f } = (0, h.A)(),
            { chainId: C } = m,
            [x, g] = (0, u.useState)(),
            y = (0, u.useCallback)(
              async (e) => {
                let t = e || x;
                if (!i || !C || !f || !t) return;
                let n = null == t ? void 0 : t.params.proposer.metadata.url;
                (0, es.sx)({ ...S.APPROVE_CLICK, label: n }), p(ex.APPROVE);
                try {
                  await i.approveSession(t, C, f, {
                    capabilities: JSON.stringify({
                      [f]: {
                        ['0x'.concat(Number(C).toString(16))]: { atomicBatch: { supported: !0 } },
                      },
                    }),
                  }),
                    'INVALID' === t.verifyContext.verified.validation ||
                      t.verifyContext.verified.isScam ||
                      a((e) => ({
                        ...e,
                        [C]: {
                          ...(null == e ? void 0 : e[C]),
                          [t.verifyContext.verified.origin]: !0,
                        },
                      })),
                    c(!1);
                } catch (e) {
                  p(void 0), o((0, et.z)(e));
                  return;
                }
                (0, es.sx)({ ...S.CONNECTED, label: n }), p(void 0), g(void 0);
              },
              [x, i, C, f, p, c, a, o]
            ),
            w = (0, u.useCallback)(() => {
              o(null);
            }, [o]);
          return ((0, u.useEffect)(() => {
            if (i)
              return i.onSessionPropose((e) => {
                var t;
                if (
                  (o(null),
                  null === (t = s[C]) || void 0 === t ? void 0 : t[e.verifyContext.verified.origin])
                ) {
                  y(e);
                  return;
                }
                g(e), p(void 0);
              });
          }, [s, C, y, o, p, i]),
          (0, u.useEffect)(() => {
            if (r) {
              let e = (0, en.Xy)(r.message || '')[0];
              (0, es.sx)({ ...S.SHOW_ERROR, label: e });
            }
          }, [r]),
          l)
            ? r
              ? (0, d.jsx)(e5, { error: r, onClose: w })
              : x
                ? (0, d.jsx)(tm, { proposal: x, setProposal: g, onApprove: y })
                : (0, d.jsx)(e2, { sessions: t, uri: n })
            : null;
        },
        tC = () => {
          let { walletConnect: e, error: t, open: n, setOpen: s } = (0, u.useContext)(v),
            [a, i] = C(),
            r = m(),
            { safeLoaded: o } = (0, h.A)(),
            l = (0, u.useCallback)(() => {
              s(!0);
            }, [s]),
            c = (0, u.useCallback)(() => {
              s(!1);
            }, [s]);
          return (
            (0, u.useEffect)(() => {
              o && a && l();
            }, [o, a, l]),
            (0, u.useEffect)(() => (null == e ? void 0 : e.onSessionPropose(i)), [e, i]),
            (0, d.jsx)(O, {
              isError: !!t,
              isOpen: n,
              onOpen: l,
              onClose: c,
              sessions: r,
              children: (0, d.jsx)(tf, { sessions: r, uri: a }),
            })
          );
        },
        tx = () => (0, d.jsx)(p.tH, { children: (0, d.jsx)(ew, { children: (0, d.jsx)(tC, {}) }) });
    },
    82926: (e) => {
      e.exports = {
        icon: 'styles_icon__O4UEn',
        errorBadge: 'styles_errorBadge__r_Gpr',
        title: 'styles_title__p_DXz',
      };
    },
    85002: (e) => {
      e.exports = {
        sessionList: 'styles_sessionList__YcInr',
        sessionListItem: 'styles_sessionListItem__Dnlgi',
        sessionListAvatar: 'styles_sessionListAvatar__US8bU',
        sessionListSecondaryAction: 'styles_sessionListSecondaryAction__cHMUX',
        button: 'styles_button__6qVTX',
      };
    },
  },
]);
//# sourceMappingURL=9118.f2e9233fab063b74.js.map
