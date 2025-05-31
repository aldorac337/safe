(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3191],
  {
    78138: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 62927));
    },
    62927: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return X;
          },
        });
      var s,
        a,
        i,
        r,
        o,
        l,
        c = n(75040),
        d = n(58854),
        u = n(98550);
      let h = (e) => {
        let t = (0, d.useRef)(null);
        return (0, d.useCallback)(
          (n) => {
            if ((t.current && t.current.disconnect(), n)) {
              let s = new ResizeObserver((t) => {
                t.length > 0 && e(n, t[0]);
              });
              s.observe(n, { box: 'border-box' }), (t.current = s);
            }
          },
          [e]
        );
      };
      ((s = r || (r = {})).sessionChanged = 'sessionChanged'),
        (s.ethereumNetworkChanged = 'ethereumNetworkChanged'),
        (s.modalOpen = 'modalOpen'),
        (s.modalClose = 'modalClose'),
        (s.modalUpdate = 'modalUpdate');
      var p = n(42415);
      let v = (e, t) =>
          (0, p.ob)().send((0, p.S5)(), r.modalOpen, t, { fireAndForget: !0, domain: e.value }),
        g = (e) =>
          (0, p.ob)().send((0, p.S5)(), r.modalClose, void 0, {
            fireAndForget: !0,
            domain: e.value,
          }),
        w = (e, t) =>
          (0, p.ob)().send((0, p.S5)(), r.modalUpdate, t, { domain: e.value, fireAndForget: !0 }),
        m = () => {},
        x = (e) => {
          let { children: t, appOrigin: n } = e,
            s = h(
              (0, d.useCallback)(
                (e, t) => {
                  let { contentRect: s } = t;
                  w(n, { width: s.width, height: s.height });
                },
                [n]
              )
            ),
            a = (0, d.useRef)(null);
          (0, d.useEffect)(() => {
            if (!a.current) return;
            let e = a.current.getBoundingClientRect();
            return (
              v(n, { width: e.width, height: e.height }),
              () => {
                g(n);
              }
            );
          }, [n, s]);
          let i = (0, d.useCallback)(
            (e) => {
              s(e), (a.current = e);
            },
            [s]
          );
          return (0, c.jsx)('div', { ref: i, children: t });
        };
      var f = n(96032),
        y = n(9284);
      ((a = o || (o = {})).NOT_VISIBLE = 'NOT_VISIBLE'),
        (a.UNKNOWN = 'UNKNOWN'),
        (a.CALCULATING = 'CALCULATING'),
        (a.VISIBLE = 'VISIBLE');
      class j extends Error {
        constructor(e) {
          super(
            ''.concat(
              'NOT_VISIBLE' === e
                ? 'Family integrated modal is not visible.'
                : 'Family integrated modal is too small.',
              ' Contract with an app developer to resolve this issue.'
            )
          );
        }
      }
      class A extends Error {
        constructor(...e) {
          super(...e),
            (this.message =
              "Can't determine if the modal is covered by an element. Contract with an app developer to resolve this issue.");
        }
      }
      let I = () => {
          let [e, t] = (0, d.useState)(null),
            n = (0, d.useRef)(null),
            s = (0, d.useCallback)((e) => {
              n.current && (n.current.disconnect(), (n.current = null)),
                e &&
                  ((n.current = new IntersectionObserver(
                    (e) => {
                      let [n] = e;
                      t(n);
                    },
                    { threshold: 0, trackVisibility: !0, delay: 100 }
                  )),
                  (0, y.gw)(300).then(() => {
                    var t;
                    null === (t = n.current) || void 0 === t || t.observe(e);
                  }));
            }, []);
          return e && e.isIntersecting && 'hidden' !== document.visibilityState
            ? 'isVisible' in e
              ? { ref: s, status: e.isVisible ? 'VISIBLE' : 'NOT_VISIBLE' }
              : { ref: s, status: 'UNKNOWN' }
            : { ref: s, status: 'CALCULATING' };
        },
        k = (e) => {
          let { children: t, onPotentialClickjack: n } = e,
            s = (0, d.useCallback)(
              (e, t) => {
                let { contentRect: s } = t;
                (s.width < 350 || s.height < 500) && n(new j('SIZE_BELOW_MINIMUM'));
              },
              [n]
            ),
            { ref: a, status: i } = I(),
            r = h(s);
          (0, d.useEffect)(() => {
            'NOT_VISIBLE' === i && n(new j('NOT_VISIBLE')), 'UNKNOWN' === i && n(new A());
          }, [i, n]);
          let o = (0, d.useCallback)(
            (e) => {
              a(e), r(e);
            },
            [a, r]
          );
          return (0, c.jsx)('div', { ref: o, children: t });
        };
      var _ = n(4491),
        T = n(27663),
        S = n(12846),
        E = n(71842);
      ((i = l || (l = {})).sessionInit = 'sessionInit'),
        (i.sessionGetCurrent = 'sessionGetCurrent'),
        (i.sessionClear = 'sessionClear'),
        (i.ethereumJsonRpcRequest = 'ethereumJsonRpcRequest'),
        (i.ethereumJsonRpcRequiresApproval = 'ethereumJsonRpcRequiresApproval');
      var C = n(42716),
        N = n(35410);
      let b = (e, t) => {
          (0, p.ob)().on(l.sessionClear, { domain: e.value }, async () => {
            await t.session.clear();
          });
        },
        R = (e, t) => {
          (0, p.ob)().on(l.sessionGetCurrent, { domain: e.value }, async () => {
            let e = await t.session.getCurrent();
            return e.status === E.$.AUTHENTICATED
              ? {
                  status: E.$.AUTHENTICATED,
                  idToken: e.jwtInfo.idToken.value,
                  wallet: { address: e.account.activeWallet.ethereumAddress.toHexString() },
                }
              : { status: E.$.NOT_AUTHENTICATED };
          });
        },
        P = (e, t) => {
          let n = async (t) => {
            await (0, p.ob)().send((0, p.S5)(), r.sessionChanged, t, {
              fireAndForget: !0,
              domain: e.value,
            });
          };
          t.session.onChange(async (e) => {
            if (e.status === E.$.AUTHENTICATED) {
              let t = {
                status: E.$.AUTHENTICATED,
                idToken: e.jwtInfo.idToken.value,
                wallet: { address: e.account.activeWallet.ethereumAddress.toHexString() },
              };
              await n(t);
              return;
            }
            let t = { status: E.$.NOT_AUTHENTICATED };
            await n(t);
          });
        },
        O = (e, t) => {
          b(e, t), R(e, t), P(e, t);
        };
      var D = n(93746);
      let L = (e, t, n) => {
          let s = new D.X(e, t, n);
          (0, p.ob)().on(l.ethereumJsonRpcRequest, { domain: e.value }, async (e) =>
            s.handleRequest(e.data)
          );
        },
        q = (e, t, n) => {
          let s = new D.X(e, t, n);
          (0, p.ob)().on(l.ethereumJsonRpcRequiresApproval, { domain: e.value }, async (e) =>
            s.requiresUserApproval(e.data)
          );
        },
        F = (e, t) => {
          let n = async (t) => {
            await (0, p.ob)().send((0, p.S5)(), r.ethereumNetworkChanged, t, {
              fireAndForget: !0,
              domain: e.value,
            });
          };
          t.network.onSelectedAppNetworkChange(e, async (e) => {
            await n({ chainId: e.chainId.toHexString() });
          });
        },
        M = (e, t, n) => {
          q(e, t, n), L(e, t, n), F(e, t);
        };
      var U = n(6251);
      let V = (e) => {
          (0, p.ob)().on(U.X.createSession, { domain: window.location.origin }, async (t) => {
            (0, y.kG)(t.origin === N.FAMILY_ACCOUNTS_ORIGIN, 'Invalid dashboard origin');
            let n = t.data,
              s =
                n.activeWallet.type === C.Sq.HD
                  ? {
                      type: C.Sq.HD,
                      walletId: new C.UI(n.activeWallet.walletId),
                      walletEncryptionId: new C.UI(n.activeWallet.walletEncryptionId),
                      index: n.activeWallet.index,
                    }
                  : {
                      type: C.Sq.PRIVATE_KEY,
                      walletId: new C.UI(n.activeWallet.walletId),
                      walletEncryptionId: new C.UI(n.activeWallet.walletEncryptionId),
                    },
              a = await e.session.createFromData({
                identity: new C.Ru(n.identity),
                deviceId: new C.qT(n.deviceId),
                accountMasterKey: new C.qH(n.accountMasterKey),
                encryptedAccount: {
                  key: new C.eM(n.encryptedAccount.key),
                  iv: new C.MQ(n.encryptedAccount.iv),
                },
                activeWallet: s,
                jwtInfo: {
                  idToken: new C.qR(n.jwtInfo.idToken),
                  accessToken: new C.qR(n.jwtInfo.accessToken),
                  refreshToken: new C.qR(n.jwtInfo.refreshToken),
                },
                clientSessionKey: new C.jZ(n.clientSessionKey),
                serverSessionKey: new C.jZ(n.serverSessionKey),
              });
            return {
              status: E.$.AUTHENTICATED,
              idToken: a.jwtInfo.idToken.value,
              wallet: { address: a.account.activeWallet.ethereumAddress.toHexString() },
            };
          });
        },
        K = (e) => {
          V(e);
        },
        H = (e, t) => {
          (0, p.ob)().on(U.X.retrieveSession, { domain: window.location.origin }, async (n) => {
            (0, y.kG)(n.origin === N.FAMILY_ACCOUNTS_ORIGIN, 'Invalid dashboard origin');
            let s = new C._N(n.data.appOrigin);
            (0, y.kG)(s.equals(e), 'Invalid app origin');
            let a = await t.session.serialise();
            return a
              ? (0, C.au)({
                  status: E.$.AUTHENTICATED,
                  identity: a.identity,
                  accountMasterKey: a.accountMasterKey,
                  encryptedAccount: a.encryptedAccount,
                  jwtInfo: a.jwtInfo,
                  serverSessionKey: a.serverSessionKey,
                  activeWallet: a.activeWallet,
                })
              : (0, C.au)({ status: E.$.NOT_AUTHENTICATED });
          });
        },
        Y = (e, t) => {
          H(e, t);
        };
      var W = n(48849);
      let G = () =>
          void 0 === window.location.ancestorOrigins || 0 === window.location.ancestorOrigins.length
            ? null
            : new C._N(window.location.ancestorOrigins[0]),
        z = () =>
          void 0 === window.location.ancestorOrigins || 0 === window.location.ancestorOrigins.length
            ? null
            : window.location.ancestorOrigins.length;
      class J {
        static initialize() {
          return new Promise((e) => {
            (0, p.ob)().once(l.sessionInit, { domain: '*' }, async (t) => {
              let n = new C._N(t.origin),
                s = G(),
                a = z();
              if (null !== s && !s.equals(n))
                throw Error(
                  'Mismatch between the origin of the event and parent of the master iframe'
                );
              if (null !== a && a > 1) throw Error('More than one ancestor origin detected');
              try {
                let s = (0, T.U)({ environment: (0, N.getEnvironment)(), appOrigin: n }),
                  a = S.p.forApp(n, s),
                  i = W.p.initialize(s);
                if (
                  (m(),
                  O(n, s),
                  M(n, s, i),
                  K(s),
                  Y(n, s),
                  e(new J(n, s, { sessionSyncService: a, transactionService: i })),
                  !t.data.deviceId || !t.data.clientSessionKey)
                )
                  return { status: E.$.NOT_AUTHENTICATED };
                let r = await s.session.createFromStorage({
                  deviceId: new C.qT(t.data.deviceId),
                  clientSessionKey: new C.jZ(t.data.clientSessionKey),
                });
                if (r.status === E.$.AUTHENTICATED)
                  return {
                    status: E.$.AUTHENTICATED,
                    idToken: r.jwtInfo.idToken.value,
                    wallet: { address: r.account.activeWallet.ethereumAddress.toHexString() },
                  };
                return { status: E.$.NOT_AUTHENTICATED };
              } catch (e) {
                throw (
                  (console.error('Failed to init session by injected master', e),
                  Error('Failed to init session by injected master'))
                );
              }
            });
          });
        }
        constructor(e, t, n) {
          (this.appOrigin = e), (this.sdk = t), (this.services = n);
        }
      }
      var B = n(8221);
      let $ = (e) => {
          let { appOrigin: t } = e,
            [n, s] = (0, d.useState)(null),
            a = (0, d.useRef)(!1);
          return ((0, d.useEffect)(
            () =>
              (() => {
                if (!a.current)
                  return (
                    (a.current = !0),
                    u.b.onChange((e) => {
                      s(e);
                    })
                  );
              })(),
            []
          ),
          n)
            ? (0, c.jsxs)(k, {
                onPotentialClickjack: n.onError,
                children: [
                  (0, c.jsx)(x, { appOrigin: t, children: n.element }),
                  (0, c.jsx)(_.Io, {}),
                ],
              })
            : null;
        },
        Q = () => {
          let [e, t] = (0, d.useState)(null);
          return ((0, d.useEffect)(() => {
            (async () => {
              t(await J.initialize());
            })();
          }, []),
          e)
            ? (0, c.jsx)(B.$, {
                sdk: e.sdk,
                appOrigin: e.appOrigin,
                children: (0, c.jsx)(f.P.Provider, {
                  value: e.services,
                  children: (0, c.jsx)($, { appOrigin: e.appOrigin }),
                }),
              })
            : null;
        };
      var X = () => (0, c.jsx)(Q, {});
    },
    40621: function (e, t, n) {
      'use strict';
      n.d(t, {
        X: function () {
          return o;
        },
      });
      var s = n(75040),
        a = n(40246),
        i = n(65853),
        r = n.n(i);
      let o = (e) => {
        let { label: t, ...n } = e;
        return (0, s.jsx)('div', {
          className: r().container,
          'data-variant': n.variant,
          children: t
            ? (0, s.jsxs)('label', {
                htmlFor: n.name,
                className: r().label,
                children: [
                  (0, s.jsx)(a.fC, { id: n.name, ...n, className: r().checkbox }),
                  (0, s.jsx)('span', { children: t }),
                ],
              })
            : (0, s.jsx)(a.fC, { id: n.name, ...n, className: r().checkbox }),
        });
      };
    },
    43645: function (e, t, n) {
      'use strict';
      n.d(t, {
        r: function () {
          return r;
        },
      });
      var s = n(75040),
        a = n(45928),
        i = n.n(a);
      let r = (e) => {
        let { children: t } = e;
        return (0, s.jsxs)('div', {
          className: i().separator,
          children: [
            (0, s.jsx)('div', { className: i().line, 'data-dashed': !t }),
            t &&
              (0, s.jsx)('div', {
                className: i().content,
                children: (0, s.jsx)('div', { className: i().contentInner, children: t }),
              }),
          ],
        });
      };
    },
    78844: function (e, t, n) {
      'use strict';
      n.d(t, {
        s: function () {
          return o;
        },
      });
      var s = n(75040),
        a = n(58854),
        i = n(35410),
        r = n(33972);
      let o = (e) => {
        let { domain: t, alt: n, size: o, radius: l } = e,
          [c, d] = (0, a.useState)(!1),
          u = ''
            .concat((0, i.getApiHttpUrl)(), '/proxy/favicon?domain=')
            .concat(t)
            .concat('number' == typeof o ? '&size='.concat(16 * Math.ceil(o / 16)) : '&size=256');
        return c
          ? (0, s.jsx)(r.E, {
              src: '/default-external-app-icon.svg',
              alt: n,
              width: o,
              height: o,
              radius: void 0 !== l ? l : 'number' == typeof o ? Math.floor(o / 4) : o,
            })
          : (0, s.jsx)(r.E, {
              src: u,
              alt: n,
              width: o,
              height: o,
              radius: void 0 !== l ? l : 'number' == typeof o ? Math.floor(o / 4) : o,
              onError: () => d(!0),
            });
      };
    },
    2709: function (e, t, n) {
      'use strict';
      n.d(t, {
        Qt: function () {
          return w;
        },
        jo: function () {
          return a;
        },
        s6: function () {
          return g;
        },
      });
      var s,
        a,
        i = n(75040),
        r = n(58854),
        o = n(43999),
        l = n(92921),
        c = n(79951),
        d = n(89),
        u = n(88376),
        h = n(14393),
        p = n(5031);
      ((s = a || (a = {})).REVIEW = 'review'),
        (s.VERIFY = 'verify'),
        (s.PENDING = 'pending'),
        (s.SUCCESS = 'success'),
        (s.ERROR = 'error');
      let v = r.createContext({ currentPage: 'review', setCurrentPage: (0, d.J)() }),
        g = (e) => {
          let { children: t } = e,
            [n, s] = r.useState('review'),
            { sdk: a } = (0, h.K)(),
            [d, g] = (0, r.useState)();
          return ((0, r.useEffect)(() => {
            g(
              (0, o._)({
                chains: Object.values(u.dE),
                client(e) {
                  let { chain: t } = e;
                  return (0, c.e)({ chain: t, transport: (0, u.hC)(a) });
                },
              })
            );
          }, [a]),
          d)
            ? (0, i.jsx)(v.Provider, {
                value: { currentPage: n, setCurrentPage: s },
                children: (0, i.jsx)(l.F, { config: d, children: t }),
              })
            : (0, i.jsx)(p.d, {});
        },
        w = () => r.useContext(v);
    },
    41169: function (e, t, n) {
      'use strict';
      n.d(t, {
        k: function () {
          return el;
        },
      });
      var s = n(75040),
        a = n(58854),
        i = n(7689),
        r = n.n(i),
        o = n(12432),
        l = n(81289),
        c = n(37968),
        d = n(9284),
        u = n(48472),
        h = n.n(u),
        p = n(2223),
        v = n(52155),
        g = n(2709),
        w = n(78844),
        m = n(49933),
        x = n(71646),
        f = n(26934),
        y = n(95426),
        j = n(97016),
        A = n(75962),
        I = n(4221),
        k = n(6948),
        _ = n(65518),
        T = n.n(_),
        S = n(81145),
        E = n(40910),
        C = n(33972);
      let N = () =>
        (0, s.jsx)(r(), {
          className: T().iOScallout,
          href: I.jY.downloadIOS,
          target: '_blank',
          rel: 'noopener noreferrer',
          children: (0, s.jsxs)(S.x, {
            as: 'div',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
            children: [
              (0, s.jsxs)(S.x, {
                as: 'div',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                children: [
                  (0, s.jsx)('div', {
                    className: T().iOScalloutIcon,
                    children: (0, s.jsx)(C.E, {
                      src: '/app-icon-family-512.png',
                      alt: '',
                      width: 32,
                      height: 32,
                      radius: 8,
                    }),
                  }),
                  (0, s.jsxs)('div', {
                    className: T().iOScalloutText,
                    children: [
                      (0, s.jsx)(E.x, {
                        as: 'h1',
                        size: 13,
                        weight: 500,
                        style: { lineHeight: 'normal' },
                        children: 'Available on iOS',
                      }),
                      (0, s.jsx)(E.x, {
                        as: 'p',
                        size: 13,
                        style: { lineHeight: 'normal' },
                        children: 'Get the app on mobile',
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(f.J, { name: 'externalLink' }),
            ],
          }),
        });
      var b = n(31601),
        R = n(40028),
        P = n(14393);
      let O = (e) => {
        let { sdk: t } = (0, P.K)(),
          [n, s] = (0, a.useState)(!1);
        return {
          remove: async () => {
            s(!0);
            let n = await t.userConnection.reject(e);
            return s(!1), n;
          },
          isRemoving: n,
        };
      };
      var D = n(63233),
        L = n(89542),
        q = n(14221),
        F = n(9486);
      let M = (e) => {
        let { status: t, heading: n, subheading: a } = e;
        return (0, s.jsx)(A.w, {
          children: (0, s.jsxs)('div', {
            className: h().screenInner,
            children: [
              (0, s.jsx)(
                R.$,
                {
                  state: t,
                  size: 52,
                  weight: 0.875,
                  color:
                    'pending' === t
                      ? void 0
                      : 'success' === t
                        ? 'var(--valid)'
                        : 'failure' === t
                          ? 'var(--invalid)'
                          : void 0,
                },
                'spinner'
              ),
              (0, s.jsx)(o.M, {
                initial: !1,
                mode: 'popLayout',
                children: (0, s.jsx)(
                  l.E.div,
                  {
                    ...F.baseMotionVariants,
                    children: (0, s.jsxs)(S.x, {
                      as: 'div',
                      alignItems: 'center',
                      gap: 8,
                      children: [
                        (0, s.jsx)(E.x, {
                          as: 'h1',
                          size: 18,
                          weight: 600,
                          align: 'center',
                          children: n,
                        }),
                        (0, s.jsx)(E.x, {
                          as: 'p',
                          size: 16,
                          weight: 400,
                          align: 'center',
                          children: a,
                        }),
                      ],
                    }),
                  },
                  t
                ),
              }),
            ],
          }),
        });
      };
      var U = n(37578);
      let V = (e) => {
          let { typedData: t } = e;
          return (0, s.jsxs)(S.x, {
            as: 'div',
            gap: 16,
            children: [
              (0, s.jsxs)('pre', { children: ['Primary Type: ', t.primaryType] }),
              (0, s.jsx)(S.x, {
                as: 'div',
                gap: 16,
                children: Object.keys(t.message).map((e, n) => {
                  let a = t.message[e],
                    i = Object.keys(t.types).find((e) => e === t.primaryType),
                    r = t.types[i][n].type;
                  return (0, s.jsx)(K, { name: e, value: a, type: r, typedData: t }, n);
                }),
              }),
            ],
          });
        },
        K = (e) => {
          let { type: t, name: n, value: a, typedData: i } = e;
          return 'object' == typeof a
            ? (0, s.jsxs)(S.x, {
                as: 'div',
                gap: 4,
                children: [
                  (0, s.jsxs)('pre', { children: [n, ':'] }),
                  (0, s.jsx)(S.x, {
                    as: 'div',
                    style: { padding: '0 0 0 0.75rem' },
                    gap: 4,
                    children: Object.keys(a).map((e, n) => {
                      var r;
                      let o = null === (r = i.types[t][n]) || void 0 === r ? void 0 : r.type;
                      return (0, s.jsx)(K, { name: e, value: a[e], type: o, typedData: i }, n);
                    }),
                  }),
                ],
              })
            : (0, s.jsxs)(S.x, {
                as: 'div',
                children: [
                  (0, s.jsxs)('pre', { children: [n, ':'] }),
                  (0, s.jsx)('pre', {
                    style: { paddingLeft: '0.25rem' },
                    children:
                      'string' === t
                        ? a
                        : 'address' === t
                          ? (0, s.jsx)(r(), {
                              href: 'https://etherscan.io/address/'.concat(a),
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              children: a,
                            })
                          : 'uint256' === t
                            ? a
                            : JSON.stringify(a, null, 2),
                  }),
                ],
              });
        };
      var H = n(40621),
        Y = n(87121),
        W = n(25945),
        G = n(5127),
        z = n(35410),
        J = n(61563),
        B = n(68779),
        $ = n(41954),
        Q = n(68959),
        X = n(45951),
        Z = n(87036),
        ee = n(5214),
        et = n(90710),
        en = n(33867),
        es = n(51741);
      let ea = function () {
        var e, t, n;
        let { tx: s, rawTx: i } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = (0, a.useId)(),
          o = (0, q.dB)(),
          l = (0, q.zS)(),
          c = s
            ? {
                to: null === (e = s.to) || void 0 === e ? void 0 : e.toHexString(),
                value: null === (t = s.value) || void 0 === t ? void 0 : t.toHexString(),
                data: null === (n = s.data) || void 0 === n ? void 0 : n.toHexString(),
                chainId: s.network.chainId.value,
              }
            : i || void 0,
          u = null == s ? void 0 : s.network;
        return (0, en.a)({
          queryKey: ['simulatedTransaction', c, r],
          queryFn: async () => {
            var e;
            return (
              (0, d.kG)(l.activeWallet, 'Active wallet is required'),
              (0, d.kG)(c, 'Transaction payload is required'),
              (0, d.kG)(c.to, 'Transaction must have a recipient'),
              await (0, es.M)(
                o,
                null !== (e = null == u ? void 0 : u.chainId.value) && void 0 !== e ? e : 1,
                {
                  from: l.activeWallet.ethereumAddress.toHexString(),
                  to: c.to,
                  value: c.value,
                  input: c.data,
                }
              )
            );
          },
          staleTime: 3e5,
        });
      };
      var ei = n(11041),
        er = n(43645),
        eo = n(19505);
      let el = (e) => {
        let { children: t, aside: n, isLoading: a, onDismiss: i } = e;
        return (
          (0, v.K)('Escape', i),
          (0, s.jsx)(p.i, {
            children: (0, s.jsx)(g.s6, {
              onDismiss: i,
              children: (0, s.jsx)('section', {
                className: h().container,
                'data-loading': a,
                children: n
                  ? (0, s.jsxs)('div', {
                      className: h().inner,
                      children: [
                        (0, s.jsx)('div', { className: h().main, children: t }),
                        (0, s.jsx)('aside', {
                          children: (0, s.jsxs)('div', {
                            className: h().asideContent,
                            children: [
                              n,
                              (0, s.jsxs)('footer', {
                                className: h().footer,
                                children: [
                                  (0, s.jsx)(N, {}),
                                  (0, s.jsxs)('div', {
                                    className: h().subfooter,
                                    children: [
                                      (0, s.jsx)(r(), {
                                        href: z.FAMILY_ACCOUNTS_ORIGIN,
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                        children: (0, s.jsx)(k.o, {}),
                                      }),
                                      (0, s.jsxs)('ul', {
                                        children: [
                                          (0, s.jsx)('li', {
                                            children: (0, s.jsx)(r(), {
                                              href: I.jY.developerDocs,
                                              target: '_blank',
                                              rel: 'noopener noreferrer',
                                              children: 'Developer',
                                            }),
                                          }),
                                          (0, s.jsx)('li', {
                                            children: (0, s.jsx)(r(), {
                                              href: I.jY.terms,
                                              target: '_blank',
                                              rel: 'noopener noreferrer',
                                              children: 'Terms',
                                            }),
                                          }),
                                          (0, s.jsx)('li', {
                                            children: (0, s.jsx)(r(), {
                                              href: I.jY.privacy,
                                              target: '_blank',
                                              rel: 'noopener noreferrer',
                                              children: 'Privacy',
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  : (0, s.jsx)('div', {
                      className: h().inner,
                      children: (0, s.jsx)('div', {
                        className: h().main,
                        'data-center': 'true',
                        children: t,
                      }),
                    }),
              }),
            }),
          })
        );
      };
      (el.Screens = (e) => {
        var t, n, i, r, u, p, v, w, I;
        let {
            children: k,
            config: _,
            wallet: T,
            network: C,
            appOrigin: N,
            type: b,
            value: R,
            rawValue: P,
            onClose: O,
            onReject: D,
          } = e,
          K = (0, q.zS)(),
          z = b === U.v.SEND_TRANSACTION || b === U.v.TRANSACTION_APPROVAL,
          { data: J, isPending: B } = ea(
            b === U.v.SEND_TRANSACTION
              ? { tx: R }
              : b === U.v.TRANSACTION_APPROVAL
                ? { tx: R }
                : void 0
          ),
          $ = (null == J ? void 0 : J.status) === ei._.OK,
          Q = z && !$,
          [en, es] = (0, a.useState)(''),
          [eo, ec] = (0, a.useState)(),
          [ed, eu] = (0, a.useState)(!1),
          [eh, ep] = (0, a.useState)(!1),
          [ev, eg] = (0, a.useState)(!1),
          ew = $ && 'Dangerous' === J.validation.actionType,
          em = (0, g.Qt)(),
          [ex, ef] = (0, a.useState)(!0);
        (0, a.useEffect)(() => {
          setTimeout(() => {
            ef(!1);
          }, 600);
        }, []);
        let [ey, ej] = (0, a.useState)(!1),
          eA = b === U.v.PERSONAL_SIGN,
          eI = em.currentPage === g.jo.REVIEW,
          ek = em.currentPage === g.jo.VERIFY,
          e_ = em.currentPage === g.jo.PENDING && !eA,
          eT = em.currentPage === g.jo.ERROR,
          eS = em.currentPage === g.jo.SUCCESS,
          eE = em.currentPage === g.jo.PENDING && eA,
          eC = e_ || eT || eS,
          eN =
            0 !==
            ($ ? (0, ee.G)(J.validation.scanners) : []).filter((e) =>
              e.reason.toLowerCase().includes('first time')
            ).length,
          eb = !ex && !Q,
          eR = {
            [U.v.PERSONAL_SIGN]: {
              ready: 'Sign',
              pending: 'Signing',
              success: 'Signed',
              error: 'Error',
            },
            [U.v.SEND_TRANSACTION]: {
              ready: 'Send',
              pending: 'Sending',
              success: 'Sent',
              error: 'Error',
            },
            [U.v.TYPED_DATA]: {
              ready: 'Sign',
              pending: 'Signing',
              success: 'Signed',
              error: 'Error',
            },
            [U.v.TRANSACTION_APPROVAL]: {
              ready: 'Approve',
              pending: 'Approving',
              success: 'Approved',
              error: 'Error',
            },
          };
        return (0, s.jsxs)('div', {
          className: h().screens,
          children: [
            !eA &&
              (0, s.jsxs)('ul', {
                className: h().steps,
                children: [
                  (0, s.jsx)('li', { 'data-active': eI, children: 'Review' }),
                  (null === (t = _.verify) || void 0 === t ? void 0 : t.onContinue) &&
                    (0, s.jsx)('li', { 'data-active': ek, children: 'Verify' }),
                  (0, s.jsx)('li', {
                    'data-active': eC,
                    children: (0, s.jsx)(W.z, {
                      children: eC
                        ? e_
                          ? eR[b].pending
                          : eS
                            ? eR[b].success
                            : eR[b].error
                        : eR[b].ready,
                    }),
                  }),
                ],
              }),
            (0, s.jsxs)('div', {
              className: h().content,
              children: [
                (0, s.jsx)(A.w, {
                  duration: 400,
                  overflow: !0,
                  children: (0, s.jsx)(o.M, {
                    initial: !1,
                    mode: 'popLayout',
                    children: (0, s.jsxs)(
                      l.E.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0, transition: { duration: 0.2, ease: F.easeInOutQuad } },
                        transition: { duration: 0.4, delay: 0.2, ease: F.easeInOutQuad },
                        children: [
                          !eC &&
                            (0, s.jsxs)(S.x, {
                              as: 'div',
                              gap: 24,
                              children: [
                                (0, s.jsxs)(S.x, {
                                  as: 'div',
                                  flexDirection: 'row',
                                  gap: 8,
                                  justifyContent: 'space-between',
                                  children: [
                                    (0, s.jsxs)(S.x, {
                                      as: 'div',
                                      gap: 8,
                                      children: [
                                        (0, s.jsx)(S.x, {
                                          as: 'div',
                                          gap: 8,
                                          flexDirection: 'row',
                                          justifyContent: 'space-between',
                                          children: (0, s.jsx)(E.x, {
                                            as: 'h1',
                                            size: 18,
                                            weight: 600,
                                            children: ek
                                              ? null !==
                                                  (p =
                                                    null === (n = _.verify) || void 0 === n
                                                      ? void 0
                                                      : n.heading) && void 0 !== p
                                                ? p
                                                : 'Security Check'
                                              : _.review.heading,
                                          }),
                                        }),
                                        (0, s.jsx)(E.x, {
                                          as: 'p',
                                          size: 16,
                                          weight: 400,
                                          children: ek
                                            ? null !==
                                                (v =
                                                  null === (i = _.verify) || void 0 === i
                                                    ? void 0
                                                    : i.subheading) && void 0 !== v
                                              ? v
                                              : "We've ".concat(
                                                  (0, L._)(K.identity.type).action,
                                                  ' you a verification code'
                                                )
                                            : _.review.subheading,
                                        }),
                                      ],
                                    }),
                                    eI &&
                                      P &&
                                      !(z && B) &&
                                      (0, s.jsx)('div', {
                                        className: h().actions,
                                        children: (0, s.jsx)(
                                          x.L,
                                          {
                                            disabled: z && B,
                                            options: ey
                                              ? [
                                                  {
                                                    label: 'View Summary',
                                                    onClick: () => ej(!1),
                                                    icon: (0, s.jsx)(f.J, { name: 'currency' }),
                                                  },
                                                ]
                                              : [
                                                  {
                                                    label: 'See Raw Message',
                                                    onClick: () => ej(!0),
                                                    icon: (0, s.jsx)(f.J, { name: 'read' }),
                                                  },
                                                ],
                                          },
                                          ey ? 'view' : 'raw'
                                        ),
                                      }),
                                  ],
                                }),
                                !ek &&
                                  (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      J && (0, s.jsx)(ee.X, { simulation: J, appOrigin: N }),
                                      (0, s.jsxs)(el.Preview, {
                                        data: P,
                                        isPending: z && B,
                                        variant:
                                          b === U.v.PERSONAL_SIGN || b === U.v.TYPED_DATA
                                            ? 'message'
                                            : 'transaction',
                                        displayPreview: !z || B || $,
                                        viewMessage: ey,
                                        children: [
                                          $ &&
                                            (0, s.jsx)(et.i, {
                                              simulation: J,
                                              wallet: K.activeWallet,
                                              network: C,
                                            }),
                                          b === U.v.PERSONAL_SIGN &&
                                            (0, s.jsx)('pre', {
                                              children: (0, c.H_)(R, 'string').toString(),
                                            }),
                                          b === U.v.TYPED_DATA && (0, s.jsx)(V, { typedData: R }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          eC &&
                            (0, s.jsx)(M, {
                              ...(eS
                                ? {
                                    status: 'success',
                                    heading: _.confirm.heading,
                                    subheading: _.confirm.subheading,
                                  }
                                : eT
                                  ? {
                                      status: 'failure',
                                      heading: 'Transaction Failed',
                                      subheading: 'An unknown error occurred.',
                                    }
                                  : {
                                      heading: _.pending.heading,
                                      subheading: _.pending.subheading,
                                    }),
                            }),
                        ],
                      },
                      eC ? 'processing' : ek ? 'verify' : 'review'
                    ),
                  }),
                }),
                eI &&
                  z &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(Z.G, { wallet: T, network: C, simulation: J, isPending: B }),
                      (0, s.jsx)(er.r, {}),
                    ],
                  }),
                !ek && (0, s.jsx)(X.z, { wallet: T, network: C }),
                eI &&
                  eN &&
                  (0, s.jsx)(y.b, {
                    children: (0, s.jsx)('div', {
                      children: (0, s.jsx)(H.X, {
                        name: 'agree',
                        label:
                          "This is the first time you've interacted with this address. Please check the details carefully before interacting",
                        onCheckedChange: ep,
                      }),
                    }),
                  }),
                eS &&
                  (0, s.jsx)(l.E.div, {
                    initial: { opacity: 0, scale: 0.98 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.2, ease: F.easeInOutQuad },
                    children: (0, s.jsxs)(j.z, {
                      wide: !0,
                      onClick: O,
                      children: ['Back to ', (0, m.N)(N).name],
                    }),
                  }),
                (0, s.jsxs)(o.M, {
                  initial: !1,
                  children: [
                    !eC &&
                      !ek &&
                      (0, s.jsxs)(l.E.div, {
                        initial: { opacity: 0, y: -4 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 4 },
                        transition: { duration: 0.3, ease: F.easeInOutQuad },
                        children: [
                          ew &&
                            (0, s.jsx)('div', {
                              style: {
                                borderRadius: '0.75rem',
                                padding: '1rem',
                                background: '#FAFAFA',
                              },
                              children: (0, s.jsx)(H.X, {
                                name: 'agree',
                                label:
                                  'I understand and acknowledge the risks associated with interacting with this request if I proceed.',
                                defaultChecked: ev,
                                onCheckedChange: (e) => eg(e),
                              }),
                            }),
                          (0, s.jsxs)(S.x, {
                            as: 'div',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 16,
                            style: { paddingTop: '1rem' },
                            children: [
                              (0, s.jsx)(j.z, {
                                id: 'cancel',
                                wide: !0,
                                variant: 'secondary',
                                onClick: () => {
                                  D(), O();
                                },
                                disabled: eA && eE,
                                children: _.review.rejectLabel,
                              }),
                              (0, s.jsx)(j.z, {
                                id: 'continue',
                                wide: !0,
                                textOverflow: 'none',
                                onClick: eb && !eE ? _.review.onContinue : void 0,
                                state: Q ? 'idle' : eb ? void 0 : 'pending',
                                disabled: !eb || (ew && !ev) || (eN && !eh),
                                prefixIcon:
                                  eA && eE ? (0, s.jsx)(f.J, { name: 'toastCheck' }) : void 0,
                                children: (0, s.jsx)(W.z, {
                                  byWord: !0,
                                  children: eA
                                    ? eE
                                      ? 'Signed'
                                      : 'Sign Message'
                                    : _.review.continueLabel,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ek &&
                      (0, s.jsx)(l.E.div, {
                        initial: { opacity: 0, y: -4 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 4 },
                        transition: { duration: 0.3, ease: F.easeInOutQuad },
                        children: (0, s.jsxs)('form', {
                          onSubmit: async (e) => {
                            if ((e.preventDefault(), !(en.length < G.V2))) {
                              eu(!0), ec(void 0);
                              try {
                                var t;
                                await (null === (t = _.verify) || void 0 === t
                                  ? void 0
                                  : t.onContinue(en)),
                                  em.setCurrentPage(g.jo.SUCCESS);
                              } catch (e) {
                                es(''), (0, d.BD)(e), ec(e.message);
                              } finally {
                                eu(!1);
                              }
                            }
                          },
                          children: [
                            (0, s.jsx)(Y.Z, {
                              autoFocus: !0,
                              name: 'validation-code',
                              type: 'text',
                              disabled: ed,
                              loading: ed,
                              errorMessage: eo,
                              value: en,
                              onValueChange: (e) => {
                                ec(void 0), es(e);
                              },
                              align: 'left',
                              skipSuccessAnimation: !0,
                            }),
                            (0, s.jsxs)(S.x, {
                              as: 'div',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: 16,
                              style: { paddingTop: '2rem' },
                              children: [
                                (0, s.jsx)(j.z, {
                                  wide: !0,
                                  id: 'back-button',
                                  disabled: ed,
                                  onClick: () => em.setCurrentPage(g.jo.REVIEW),
                                  variant: 'secondary',
                                  type: 'button',
                                  children:
                                    null !==
                                      (w =
                                        null === (r = _.verify) || void 0 === r
                                          ? void 0
                                          : r.backLabel) && void 0 !== w
                                      ? w
                                      : 'Back',
                                }),
                                (0, s.jsx)(j.z, {
                                  wide: !0,
                                  id: 'confirm-button',
                                  disabled: en.length < G.V2 || !!eo,
                                  state: ed ? 'pending' : void 0,
                                  variant: 'primary',
                                  type: 'submit',
                                  children:
                                    null !==
                                      (I =
                                        null === (u = _.verify) || void 0 === u
                                          ? void 0
                                          : u.continueLabel) && void 0 !== I
                                      ? I
                                      : 'Continue',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    k,
                    eT &&
                      (0, s.jsx)(l.E.div, {
                        initial: { opacity: 0, y: -4 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 4 },
                        transition: { duration: 0.3, ease: F.easeInOutQuad },
                        children: (0, s.jsx)(j.z, {
                          onClick: O,
                          wide: !0,
                          variant: 'secondary',
                          children: 'Close',
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }),
        (el.Preview = (e) => {
          let {
              children: t,
              data: n,
              isPending: i = !1,
              variant: r = 'message',
              displayPreview: c,
              viewMessage: d,
            } = e,
            [u, p] = (0, a.useState)(!1),
            [v, g] = (0, a.useState)(!1),
            w = (0, a.useRef)(null);
          return ((0, a.useEffect)(() => {
            let e = w.current;
            e && (u || e.scrollHeight > e.clientHeight ? g(!0) : g(!1));
          }, [u, d]),
          c)
            ? (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(l.E.div, {
                  layout: !0,
                  transition: { duration: 0.4, ease: F.easeSnappyOut },
                  className: h().preview,
                  children: (0, s.jsx)(o.M, {
                    initial: !1,
                    mode: 'popLayout',
                    children: (0, s.jsx)(
                      l.E.div,
                      {
                        ...F.baseMotionVariants,
                        children: i
                          ? 'message' === r
                            ? (0, s.jsxs)(S.x, {
                                as: 'div',
                                gap: 8,
                                style: {
                                  backgroundColor: 'var(--banner-grey)',
                                  padding: '1rem 1.1rem',
                                  borderRadius: '0.875rem',
                                },
                                children: [
                                  (0, s.jsx)(B.O, { width: 388, height: 16, radius: 14 }),
                                  (0, s.jsx)(B.O, { width: 297, height: 16, radius: 14 }),
                                  (0, s.jsx)(B.O, { width: 337, height: 16, radius: 14 }),
                                ],
                              })
                            : (0, s.jsxs)(S.x, {
                                as: 'div',
                                gap: 12,
                                alignItems: 'center',
                                style: {
                                  backgroundColor: 'var(--banner-grey)',
                                  padding: '2.85rem 1.5rem',
                                  borderRadius: '0.875rem',
                                },
                                children: [
                                  (0, s.jsx)(B.O, { width: 235, height: 22, radius: 14 }),
                                  (0, s.jsx)(B.O, { width: 136, height: 16, radius: 14 }),
                                ],
                              })
                          : (0, s.jsx)('div', {
                              className: h().previewInner,
                              'data-expanded': u,
                              ref: w,
                              children: (0, s.jsxs)(o.M, {
                                mode: 'popLayout',
                                initial: !1,
                                children: [
                                  d
                                    ? (0, s.jsx)(
                                        l.E.div,
                                        {
                                          layout: 'preserve-aspect',
                                          ...F.baseMotionVariants,
                                          initial: {
                                            ...F.baseMotionVariants.variants.initial,
                                            scale: 'transaction' === r ? 0.97 : 0.98,
                                            filter: 'blur(0.0625rem)',
                                          },
                                          animate: {
                                            ...F.baseMotionVariants.variants.animate,
                                            scale: 1,
                                            filter: 'blur(0rem)',
                                          },
                                          exit: {
                                            ...F.baseMotionVariants.variants.initial,
                                            scale: 'transaction' === r ? 0.97 : 0.98,
                                            filter: 'blur(0.0625rem)',
                                            transition: { duration: 0.3, ease: F.easeSnappyOut },
                                          },
                                          transition: { duration: 0.75, ease: F.easeSnappyOut },
                                          style: { originY: 0 },
                                          children: (0, s.jsx)('p', {
                                            children: (0, s.jsx)('pre', { children: n }),
                                          }),
                                        },
                                        'viewMessage'
                                      )
                                    : (0, s.jsx)(
                                        l.E.div,
                                        {
                                          layout: 'preserve-aspect',
                                          ...F.baseMotionVariants,
                                          initial: {
                                            ...F.baseMotionVariants.variants.initial,
                                            scale: 'transaction' === r ? 1.05 : 1.03,
                                            filter: 'blur(0.0625rem)',
                                          },
                                          animate: {
                                            ...F.baseMotionVariants.variants.animate,
                                            scale: 1,
                                            filter: 'blur(0rem)',
                                          },
                                          exit: {
                                            ...F.baseMotionVariants.variants.initial,
                                            scale: 'transaction' === r ? 1.05 : 1.03,
                                            filter: 'blur(0.0625rem)',
                                            transition: { duration: 0.3, ease: F.easeSnappyOut },
                                          },
                                          transition: { duration: 0.75, ease: F.easeSnappyOut },
                                          style: { originY: 0 },
                                          children: t,
                                        },
                                        'raw'
                                      ),
                                  d &&
                                    v &&
                                    (0, s.jsx)(l.E.div, {
                                      className: h().seeMore,
                                      ...F.baseMotionVariants,
                                      transition: { duration: 0.75, ease: F.easeSnappyOut },
                                      children: (0, s.jsxs)('button', {
                                        onClick: () => p(!u),
                                        'data-expanded': u,
                                        children: [
                                          (0, s.jsx)('svg', {
                                            width: '12',
                                            height: '12',
                                            viewBox: '0 0 12 12',
                                            fill: 'none',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            children: (0, s.jsx)('path', {
                                              d: 'M6 1L6 11M6 11L2 7M6 11L10 7',
                                              stroke: 'currentColor',
                                              strokeWidth: '1.25',
                                            }),
                                          }),
                                          u ? 'See Less' : 'See More',
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                            }),
                      },
                      i ? 'preview-pending' : 'preview-ready'
                    ),
                  }),
                }),
              })
            : null;
        }),
        (el.AppInfo = (e) => {
          let { appOrigin: t, onDismiss: n } = e,
            a = (0, q.zS)(),
            i = (0, Q.F)(),
            r = (0, m.N)(t),
            { isRemoving: c } = O(t);
          return (0, s.jsxs)('div', {
            className: h().header,
            children: [
              (0, s.jsxs)('div', {
                className: h().appInfoContainer,
                children: [
                  (0, s.jsx)('button', {
                    className: h().backToApp,
                    onClick: n,
                    'aria-label': 'Back to App',
                    children: (0, s.jsx)('svg', {
                      width: '20',
                      height: '20',
                      viewBox: '0 0 20 20',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: (0, s.jsx)('path', {
                        d: 'M8 5L3 10M3 10L8 15M3 10H15',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      }),
                    }),
                  }),
                  (0, s.jsxs)('div', {
                    className: h().appInfo,
                    children: [
                      (0, s.jsx)('div', {
                        children: (0, s.jsx)('div', {
                          className: h().appIcon,
                          children: (0, s.jsx)(w.s, { domain: r.domain, alt: r.name, size: 26 }),
                        }),
                      }),
                      (0, s.jsxs)('div', {
                        className: h().appMeta,
                        children: [
                          (0, s.jsx)(b.u, {
                            message: r.domain,
                            side: 'bottom',
                            children: (0, s.jsx)('h1', { children: r.name }),
                          }),
                          r.verified &&
                            (0, s.jsx)(b.u, {
                              message: 'This app is verified by Family',
                              side: 'bottom',
                              children: (0, s.jsx)(eo.w, {}),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className: h().accountInfo,
                children: (0, s.jsx)(o.M, {
                  initial: !1,
                  mode: 'popLayout',
                  children: (0, s.jsx)(
                    l.E.div,
                    {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.9 },
                      className: h().accountInfoContent,
                      children: c
                        ? (0, s.jsx)(R.$, {})
                        : (0, s.jsx)(x.L, {
                            title: 'Account',
                            options: [
                              {
                                label: 'Manage Account',
                                href: z.FAMILY_ACCOUNTS_ORIGIN,
                                icon: (0, s.jsx)(f.J, { name: 'account' }),
                              },
                            ],
                            children: (0, s.jsx)($.q, {
                              accountId: a.id,
                              metadata: i.metadata,
                              size: 'fill',
                            }),
                          }),
                    },
                    c ? 'removing' : 'connected'
                  ),
                }),
              }),
            ],
          });
        }),
        (el.TxInfo = (e) => {
          let { ...t } = e,
            n = [t],
            [i, r] = (0, a.useState)(0),
            o = {
              [U.v.PERSONAL_SIGN]: 'Signing Request',
              [U.v.TYPED_DATA]: 'Signing Request',
              [U.v.SEND_TRANSACTION]: 'Transaction Request',
              [U.v.TRANSACTION_APPROVAL]: 'Approval Request',
            };
          return (0, s.jsxs)('div', {
            className: h().requestsContainer,
            children: [
              (0, s.jsxs)('p', {
                children: [
                  n.length > 1 ? ''.concat(n.length, ' ') : void 0,
                  'Request',
                  n.length > 1 ? 's' : '',
                ],
              }),
              (0, s.jsx)('ul', {
                className: h().requestList,
                children: n.map((e, a) =>
                  (0, s.jsx)(
                    'li',
                    {
                      children: (0, s.jsx)('button', {
                        className: h().requestItem,
                        tabIndex: i === a ? -1 : 0,
                        'data-active': i === a,
                        onClick: () => r(n.indexOf(e)),
                        children: (() => {
                          switch (t.txType) {
                            case U.v.SEND_TRANSACTION:
                            case U.v.TRANSACTION_APPROVAL:
                              return (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)('div', {
                                    className: h().icon,
                                    children: (0, s.jsx)(J.A, {
                                      network: t.network,
                                      alt: '',
                                      size: 40,
                                    }),
                                  }),
                                  (0, s.jsxs)('div', {
                                    className: h().txInfo,
                                    children: [
                                      (0, s.jsx)('h1', {
                                        children: t.value
                                          ? (0, s.jsx)(D.$U, {
                                              amount: t.value.toHexString(),
                                              metadata: t.network.nativeCurrency,
                                            })
                                          : 'Fee Only',
                                      }),
                                      (0, s.jsx)('p', { children: o[t.txType] }),
                                    ],
                                  }),
                                ],
                              });
                            case U.v.TYPED_DATA:
                              return (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsxs)('div', {
                                  className: h().txInfo,
                                  children: [
                                    (0, s.jsx)('h1', { children: t.typedData.primaryType }),
                                    (0, s.jsx)('p', { children: o[t.txType] }),
                                  ],
                                }),
                              });
                            case U.v.PERSONAL_SIGN:
                              return (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsxs)('div', {
                                  className: h().txInfo,
                                  children: [
                                    (0, s.jsx)('h1', { children: o[t.txType] }),
                                    (0, s.jsx)('p', { children: '"'.concat(t.message, '"') }),
                                  ],
                                }),
                              });
                            default:
                              s.Fragment;
                          }
                        })(),
                      }),
                    },
                    a
                  )
                ),
              }),
            ],
          });
        }),
        (el.ErrorScreen = (e) => {
          let { children: t, error: n } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (null == n ? void 0 : n.message) &&
                (0, s.jsx)(y.b, {
                  variant: 'danger',
                  children: (0, s.jsx)('code', { children: n.message }),
                }),
              t,
            ],
          });
        });
    },
    5031: function (e, t, n) {
      'use strict';
      n.d(t, {
        d: function () {
          return l;
        },
      });
      var s = n(75040),
        a = n(81145),
        i = n(68779),
        r = n(48472),
        o = n.n(r);
      let l = () =>
        (0, s.jsx)('section', {
          className: o().container,
          'data-loading': !0,
          children: (0, s.jsxs)('div', {
            className: o().inner,
            children: [
              (0, s.jsx)('div', {
                className: o().main,
                children: (0, s.jsxs)(a.x, {
                  as: 'div',
                  gap: 8,
                  children: [
                    (0, s.jsx)('h1', { children: (0, s.jsx)(i.O, {}) }),
                    (0, s.jsx)('p', { children: (0, s.jsx)(i.O, { width: '60%' }) }),
                  ],
                }),
              }),
              (0, s.jsx)('aside', {
                children: (0, s.jsx)('div', {
                  className: o().asideContent,
                  children: (0, s.jsxs)('div', {
                    className: o().appInfo,
                    children: [
                      (0, s.jsx)(i.O, { height: 42, width: 42, radius: 12 }),
                      (0, s.jsxs)(a.x, {
                        as: 'div',
                        gap: 8,
                        children: [
                          (0, s.jsx)('h1', { children: (0, s.jsx)(i.O, { width: 120 }) }),
                          (0, s.jsx)('p', { children: (0, s.jsx)(i.O, { width: 100 }) }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
    },
    37578: function (e, t, n) {
      'use strict';
      var s, a;
      n.d(t, {
        v: function () {
          return s;
        },
      }),
        ((a = s || (s = {}))[(a.PERSONAL_SIGN = 0)] = 'PERSONAL_SIGN'),
        (a[(a.SEND_TRANSACTION = 1)] = 'SEND_TRANSACTION'),
        (a[(a.TRANSACTION_APPROVAL = 2)] = 'TRANSACTION_APPROVAL'),
        (a[(a.TYPED_DATA = 3)] = 'TYPED_DATA');
    },
    19505: function (e, t, n) {
      'use strict';
      n.d(t, {
        w: function () {
          return r;
        },
      });
      var s = n(75040),
        a = n(12432),
        i = n(81289);
      let r = () =>
        (0, s.jsx)(a.M, {
          children: (0, s.jsxs)('svg', {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, s.jsx)(i.E.path, {
                initial: { transformOrigin: 0.5 },
                animate: { rotate: [0, 360], transformOrigin: 0.5 },
                transition: { duration: 10, repeat: 1 / 0, ease: 'linear' },
                d: 'M9.21702 2.38272C9.61737 1.87243 10.3821 1.87243 10.7825 2.38272L11.8653 3.76281C12.0994 4.06122 12.479 4.20123 12.8476 4.12515L14.5525 3.77325C15.1828 3.64314 15.7687 4.14132 15.7517 4.79302L15.7058 6.55554C15.6958 6.93665 15.8978 7.29116 16.2285 7.473L17.7576 8.31396C18.323 8.62491 18.4558 9.38816 18.0295 9.87633L16.8763 11.1966C16.627 11.482 16.5569 11.8852 16.6948 12.2399L17.3328 13.8802C17.5687 14.4867 17.1863 15.1579 16.5501 15.2541L14.8293 15.5144C14.4572 15.5706 14.1478 15.8337 14.0285 16.1953L13.4768 17.8675C13.2728 18.4858 12.5542 18.7508 12.0057 18.4101L10.5224 17.4885C10.2017 17.2893 9.79779 17.2893 9.47708 17.4885L7.99383 18.4101C7.4454 18.7508 6.72674 18.4858 6.52275 17.8675L5.97106 16.1953C5.85177 15.8337 5.54234 15.5706 5.17026 15.5144L3.44949 15.2541C2.81323 15.1579 2.43085 14.4867 2.66675 13.8802L3.30475 12.2399C3.4427 11.8852 3.37256 11.482 3.12322 11.1966L1.97009 9.87633C1.54372 9.38816 1.67652 8.62491 2.24194 8.31396L3.77111 7.473C4.10175 7.29116 4.30372 6.93665 4.29379 6.55554L4.24787 4.79302C4.23089 4.14132 4.81674 3.64314 5.4471 3.77325L7.15192 4.12515C7.52055 4.20123 7.90012 4.06122 8.13425 3.76281L9.21702 2.38272Z',
                fill: 'var(--verified)',
              }),
              (0, s.jsx)('path', {
                d: 'M6.72656 10.5139L8.61362 12.3472L12.7266 8.34717',
                stroke: 'white',
                vectorEffect: 'non-scaling-stroke',
                strokeWidth: 1.25,
              }),
            ],
          }),
        });
    },
    96032: function (e, t, n) {
      'use strict';
      n.d(t, {
        P: function () {
          return i;
        },
        a: function () {
          return r;
        },
      });
      var s = n(58854),
        a = n(89);
      let i = (0, s.createContext)({
          sessionSyncService: (0, a.J)(),
          transactionService: (0, a.J)(),
        }),
        r = () => (0, s.useContext)(i);
    },
    8221: function (e, t, n) {
      'use strict';
      n.d(t, {
        $: function () {
          return d;
        },
      });
      var s = n(75040),
        a = n(58854),
        i = n(9284),
        r = n(71842),
        o = n(14393),
        l = n(14221),
        c = n(89);
      let d = (e) => {
        let { children: t, appOrigin: n, sdk: d } = e,
          [u, h] = (0, a.useState)(() => ({ sdk: (0, c.J)() })),
          [p, v] = (0, a.useState)(() => ({
            account: null,
            jwtInfo: null,
            deviceId: null,
            appOrigin: null,
          })),
          [g, w] = (0, a.useState)(!1),
          m = (0, a.useRef)();
        return (
          (0, a.useEffect)(() => {
            if (m.current) return;
            m.current = !0;
            let e = null;
            return (
              (async () => {
                h({ sdk: d });
                let t = await d.session.getCurrent();
                t.status === r.$.AUTHENTICATED &&
                  v({ account: t.account, jwtInfo: t.jwtInfo, deviceId: t.deviceId, appOrigin: n }),
                  w(!0),
                  (e = d.session.onChange((e) => {
                    switch (e.status) {
                      case r.$.AUTHENTICATED:
                        v({
                          account: e.account,
                          jwtInfo: e.jwtInfo,
                          deviceId: e.deviceId,
                          appOrigin: n,
                        });
                        break;
                      case r.$.NOT_AUTHENTICATED:
                        v({ account: null, jwtInfo: null, deviceId: null, appOrigin: null });
                        break;
                      default:
                        (0, i.vE)(e, 'Unknown session connection status');
                    }
                  }));
              })().catch(console.error),
              () => {
                null == e || e();
              }
            );
          }, [d, n]),
          (0, s.jsx)(o.S.Provider, {
            value: u,
            children: (0, s.jsx)(l.DU.Provider, { value: p, children: g ? t : null }),
          })
        );
      };
    },
    68959: function (e, t, n) {
      'use strict';
      n.d(t, {
        F: function () {
          return c;
        },
        z: function () {
          return l;
        },
      });
      var s = n(38031),
        a = n(21819),
        i = n(9284),
        r = n(14393),
        o = n(14221);
      let l = (e, t) =>
          (0, s.C)({ queryKey: ['accountDetails', t], queryFn: async () => e.account.getMe() }),
        c = () => {
          var e;
          let { sdk: t } = (0, r.K)(),
            n = (0, o.zS)(),
            s = (0, a.k)(l(t, n.id));
          return (
            (0, i.kG)(
              s.isSuccess,
              'Failed to account details',
              null !== (e = s.error) && void 0 !== e ? e : void 0
            ),
            s.data
          );
        };
    },
    98550: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return eE;
        },
      });
      var s = n(75040),
        a = n(9284),
        i = n(17665),
        r = n(77279),
        o = n(97927),
        l = n(58854),
        c = n(42716),
        d = n(41169),
        u = n(2709),
        h = n(5031),
        p = n(29297),
        v = n(14393);
      let g = (e) => {
          let { sdk: t } = (0, v.K)();
          return (0, p.D)({
            mutationFn: (n) => t.signingApproval.approveSigningTx(e, n),
            throwOnError: !0,
          });
        },
        w = (e) => {
          let { sdk: t } = (0, v.K)();
          return (0, p.D)({
            mutationFn: () => t.signingApproval.rejectSigningTx(e),
            throwOnError: !0,
          });
        };
      var m = n(39398),
        x = n(5127),
        f = n(70992),
        y = n(37578),
        j = n(26e3),
        A = n(33867);
      let I = (e) => {
        let { sdk: t } = (0, v.K)();
        return (0, A.a)({
          queryKey: ['processSigningTxRequest', e],
          queryFn: () => t.signingApproval.processSigningTxRequest(e),
          throwOnError: !0,
        });
      };
      var k = n(96032);
      let _ = (e) => {
          let { transactionService: t } = (0, k.a)();
          return (0, A.a)({
            queryKey: ['estimateTransaction', e],
            queryFn: () => t.estimate(e, m.t.MEDIUM),
          });
        },
        T = (e) => {
          let { sdk: t } = (0, v.K)();
          return (0, p.D)({
            mutationFn: () => t.signingApproval.sendSigningTxValidationCode(e),
            throwOnError: !0,
          });
        },
        S = (e) => {
          let { id: t, tx: n, appOrigin: r, onApprove: o, onClose: c, onReject: u } = e,
            { activeWallet: h } = (0, j.r)(),
            [p, v] = (0, l.useState)(m.t.LOW),
            { data: x } = _(n),
            { mutate: A } = g(t),
            { mutate: I } = w(t),
            k = () => {
              switch (
                (A(void 0),
                (0, a.kG)(x, 'Transaction not estimated. Cannot approve.'),
                x.networkType)
              ) {
                case i.t.UNKNOWN:
                  o({ ...n, gasLimit: x.gasLimit });
                  break;
                case i.t.WELL_KNOWN: {
                  let e = x.cost[p];
                  o({
                    ...n,
                    gasLimit: x.gasLimit,
                    maxFeePerGas: e.maxFeePerGas,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                  });
                }
              }
              c();
            },
            T = () => {
              I(), u(), c();
            };
          return (0, s.jsx)(d.k, {
            onDismiss: T,
            aside: (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(d.k.AppInfo, { appOrigin: r, onDismiss: T }),
                (0, s.jsx)(d.k.TxInfo, {
                  txType: y.v.TRANSACTION_APPROVAL,
                  network: n.network,
                  value: n.value,
                }),
              ],
            }),
            children: (0, s.jsx)(d.k.Screens, {
              type: y.v.TRANSACTION_APPROVAL,
              value: n,
              rawValue: (0, f.a)(n),
              wallet: h,
              network: n.network,
              estimation: x,
              appOrigin: r,
              gasCost: p,
              onGasCostChange: v,
              onClose: c,
              onReject: () => {
                I(), u();
              },
              config: {
                review: {
                  heading: 'Review Transaction',
                  subheading: 'Please review your transaction before confirming.',
                  continueLabel: 'Continue',
                  rejectLabel: 'Cancel Request',
                  onContinue: () => k(),
                },
                pending: {
                  heading: 'Signing Message',
                  subheading: 'Please wait while we sign your message.',
                },
                confirm: {
                  heading: 'Approval Confirmed',
                  subheading: 'This message has been signed successfully.',
                },
              },
            }),
          });
        },
        E = (e) => {
          let { id: t, tx: n, appOrigin: a, onApprove: i, onClose: r, onReject: o } = e,
            l = () => {
              o(), r();
            };
          return (0, s.jsx)(d.k, {
            onDismiss: l,
            aside: (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(d.k.AppInfo, { appOrigin: a, onDismiss: l }),
                (0, s.jsx)(d.k.TxInfo, {
                  txType: y.v.TRANSACTION_APPROVAL,
                  network: n.network,
                  value: n.value,
                }),
              ],
            }),
            children: (0, s.jsx)(C, {
              id: t,
              tx: n,
              network: n.network,
              appOrigin: a,
              onClose: r,
              onApprove: i,
              onReject: o,
            }),
          });
        },
        C = (e) => {
          let { id: t, tx: n, appOrigin: c, network: h, onApprove: p, onClose: v, onReject: A } = e,
            I = (0, u.Qt)(),
            [k, S] = (0, l.useState)(m.t.LOW),
            { data: E } = _(n),
            { mutateAsync: C } = T(t),
            { mutateAsync: N } = g(t),
            { mutate: b } = w(t),
            { activeWallet: R } = (0, j.r)(),
            P = async () => {
              switch ((await C()).status) {
                case r.q.SEND:
                  I.setCurrentPage(u.jo.VERIFY);
                  break;
                case r.q.LOCKED:
                  throw Error('Account locked. Try again later.');
                default:
                  throw Error('Something bad happened');
              }
            },
            O = async (e) => {
              (0, a.kG)(e.length === x.V2, 'Invalid validation code length');
              let t = await N(parseInt(e, 10));
              switch (((0, a.kG)(E, 'Transaction not estimated. Cannot approve.'), t.status)) {
                case o.rw.VALIDATION_CODE_INCORRECT:
                  throw Error('Incorrect validation code');
                case o.rw.APPROVED:
                  switch (E.networkType) {
                    case i.t.UNKNOWN:
                      p({ ...n, gasLimit: E.gasLimit });
                      break;
                    case i.t.WELL_KNOWN: {
                      let e = E.cost[k];
                      p({
                        ...n,
                        gasLimit: E.gasLimit,
                        maxFeePerGas: e.maxFeePerGas,
                        maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                      });
                    }
                  }
                  return;
                case o.rw.LOCKED:
                  throw Error('Account locked. Try again later.');
                default:
                  throw Error('Something bad happened');
              }
            };
          return (0, s.jsx)(d.k.Screens, {
            type: y.v.TRANSACTION_APPROVAL,
            value: n,
            rawValue: (0, f.a)(n),
            wallet: R,
            network: h,
            appOrigin: c,
            onClose: v,
            onReject: () => {
              b(), A();
            },
            gasCost: k,
            onGasCostChange: S,
            config: {
              review: {
                heading: 'Review Transaction',
                subheading: 'Please review your transaction before confirming.',
                continueLabel: 'Continue',
                rejectLabel: 'Cancel Request',
                onContinue: P,
              },
              verify: {
                backLabel: 'Back',
                continueLabel: 'Verify',
                onBack: () => I.setCurrentPage(u.jo.REVIEW),
                onContinue: O,
              },
              pending: {
                heading: 'Signing Message',
                subheading: 'Please wait while we sign your message.',
              },
              confirm: {
                heading: 'Approval Confirmed',
                subheading: 'This message has been signed successfully.',
              },
            },
          });
        },
        N = (e) => {
          let { onApprove: t, onClose: n, onReject: i, appOrigin: r, tx: l } = e,
            { data: u } = I(
              (0, c.au)({ to: l.to, value: l.value, data: l.data, chainId: l.network.chainId })
            ),
            p = () => {
              i(), n();
            };
          if (!u) return (0, s.jsx)(h.d, {});
          if (u.isFailure())
            return (0, s.jsx)(d.k, {
              onDismiss: p,
              aside: (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(d.k.AppInfo, { appOrigin: r, onDismiss: p }),
                  (0, s.jsx)(d.k.TxInfo, {
                    txType: y.v.TRANSACTION_APPROVAL,
                    network: l.network,
                    value: l.value,
                  }),
                ],
              }),
              children: (0, s.jsx)(d.k.ErrorScreen, { error: u.error }),
            });
          switch (u.value.status) {
            case o.Nn.AUTO_APPROVED:
            case o.Nn.USER_APPROVAL_REQUIRED:
              return (0, s.jsx)(S, {
                id: u.value.id,
                tx: l,
                network: l.network,
                appOrigin: r,
                onClose: n,
                onApprove: t,
                onReject: i,
              });
            case o.Nn.VALIDATION_CODE_REQUIRED:
              return (0, s.jsx)(E, {
                id: u.value.id,
                tx: l,
                network: l.network,
                appOrigin: r,
                onClose: n,
                onApprove: t,
                onReject: i,
              });
            case o.Nn.REJECTED:
              return (0, s.jsx)(d.k, {
                onDismiss: p,
                aside: (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(d.k.AppInfo, { appOrigin: r, onDismiss: p }),
                    (0, s.jsx)(d.k.TxInfo, {
                      txType: y.v.TRANSACTION_APPROVAL,
                      network: l.network,
                      value: l.value,
                    }),
                  ],
                }),
                children: (0, s.jsx)(d.k.ErrorScreen, { error: Error('Transaction rejected.') }),
              });
            default:
              (0, a.vE)(u.value, 'Unknown simulation status');
          }
        };
      var b = n(14221);
      let R = (e) => {
          let { sdk: t } = (0, v.K)();
          return (0, p.D)({
            mutationFn: (n) => t.signingApproval.approveSigningTypedData(e, n),
            throwOnError: !0,
          });
        },
        P = (e) => {
          let { sdk: t } = (0, v.K)();
          return (0, p.D)({
            mutationFn: () => t.signingApproval.rejectSigningTypedData(e),
            throwOnError: !0,
          });
        },
        O = (e) => {
          let { sdk: t } = (0, v.K)();
          return (0, A.a)({
            queryKey: ['processSigningTypedDataRequest', e],
            queryFn: () => t.signingApproval.processSigningTypedDataRequest(e),
            throwOnError: !0,
          });
        },
        D = (e) => {
          let { sdk: t } = (0, v.K)();
          return (0, p.D)({
            mutationFn: () => t.signingApproval.sendSigningTypedDataValidationCode(e),
            throwOnError: !0,
          });
        },
        L = (e) => {
          let {
              id: t,
              network: n,
              typedData: a,
              appOrigin: i,
              onApprove: r,
              onClose: o,
              onReject: l,
            } = e,
            { activeWallet: c } = (0, j.r)(),
            { mutate: u } = R(t),
            { mutate: h } = P(t);
          return (0, s.jsx)(d.k.Screens, {
            type: y.v.TYPED_DATA,
            value: a,
            rawValue: JSON.stringify(a, null, 2),
            wallet: c,
            network: n,
            appOrigin: i,
            onClose: o,
            onReject: () => {
              h(), l();
            },
            config: {
              review: {
                heading: 'Approve Request',
                subheading: 'Please review your message before signing.',
                continueLabel: 'Continue',
                rejectLabel: 'Cancel Request',
                onContinue: () => {
                  u(void 0), r(), o();
                },
              },
              pending: {
                heading: 'Signing Message',
                subheading: 'Please wait while we sign your message.',
              },
              confirm: {
                heading: 'Approval Confirmed',
                subheading: 'This message has been signed successfully.',
              },
            },
          });
        },
        q = (e) => {
          let {
            id: t,
            typedData: n,
            network: i,
            appOrigin: l,
            onApprove: c,
            onClose: h,
            onReject: p,
          } = e;
          (0, b.zS)();
          let { activeWallet: v } = (0, j.r)(),
            g = (0, u.Qt)(),
            { mutateAsync: w } = D(t),
            { mutateAsync: m } = R(t),
            { mutate: f } = P(t),
            A = async () => {
              switch ((await w()).status) {
                case r.q.SEND:
                  g.setCurrentPage(u.jo.VERIFY);
                  break;
                case r.q.LOCKED:
                  throw Error('Account locked. Try again later.');
                default:
                  throw Error('Something bad happened');
              }
            },
            I = async (e) => {
              switch (
                ((0, a.kG)(e.length === x.V2, 'Invalid validation code length'),
                (await m(parseInt(e, 10))).status)
              ) {
                case o.rw.APPROVED:
                  c();
                  return;
                case o.rw.VALIDATION_CODE_INCORRECT:
                  throw Error('Incorrect validation code');
                case o.rw.LOCKED:
                  throw Error('Account locked. Try again later.');
                default:
                  throw Error('Something bad happened');
              }
            };
          return (0, s.jsx)(d.k.Screens, {
            type: y.v.TYPED_DATA,
            value: n,
            rawValue: JSON.stringify(n, null, 2),
            wallet: v,
            network: i,
            appOrigin: l,
            onClose: h,
            onReject: () => {
              f(), p();
            },
            config: {
              review: {
                heading: 'Signing Message',
                subheading: 'Please review your message before signing.',
                continueLabel: 'Continue',
                rejectLabel: 'Cancel Request',
                onContinue: A,
              },
              verify: {
                backLabel: 'Back',
                continueLabel: 'Verify',
                onBack: () => g.setCurrentPage(u.jo.REVIEW),
                onContinue: I,
              },
              pending: {
                heading: 'Signing Message',
                subheading: 'Please wait while we sign your message.',
              },
              confirm: {
                heading: 'Signing Request Confirmed',
                subheading: 'This message has been signed successfully.',
              },
            },
          });
        },
        F = (e) => {
          let { onApprove: t, onClose: n, onReject: i, appOrigin: r, typedData: l, network: c } = e,
            { data: u } = O(l),
            p = () => {
              i(), n();
            };
          if (!u) return (0, s.jsx)(h.d, {});
          switch (u.status) {
            case o.Nn.AUTO_APPROVED:
            case o.Nn.USER_APPROVAL_REQUIRED:
              return (0, s.jsx)(d.k, {
                onDismiss: n,
                aside: (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(d.k.AppInfo, { appOrigin: r, onDismiss: p }),
                    (0, s.jsx)(d.k.TxInfo, { txType: y.v.TYPED_DATA, typedData: l }),
                  ],
                }),
                children: (0, s.jsx)(L, {
                  id: u.id,
                  typedData: l,
                  network: c,
                  appOrigin: r,
                  onClose: n,
                  onApprove: t,
                  onReject: i,
                }),
              });
            case o.Nn.VALIDATION_CODE_REQUIRED:
              return (0, s.jsx)(d.k, {
                onDismiss: n,
                aside: (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(d.k.AppInfo, { appOrigin: r, onDismiss: p }),
                    (0, s.jsx)(d.k.TxInfo, { txType: y.v.TYPED_DATA, typedData: l }),
                  ],
                }),
                children: (0, s.jsx)(q, {
                  id: u.id,
                  typedData: l,
                  network: c,
                  appOrigin: r,
                  onClose: n,
                  onApprove: t,
                  onReject: i,
                }),
              });
            case o.Nn.REJECTED:
              return (0, s.jsx)(d.k, {
                onDismiss: p,
                aside: (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(d.k.AppInfo, { appOrigin: r, onDismiss: p }),
                    (0, s.jsx)(d.k.TxInfo, { txType: y.v.TYPED_DATA, typedData: l }),
                  ],
                }),
                children: (0, s.jsx)(d.k.ErrorScreen, {
                  error: Error('Signing request rejected.'),
                }),
              });
            default:
              (0, a.vE)(u, 'Unknown simulation status');
          }
        };
      var M = n(97137),
        U = n(37968);
      let V = (e) => {
          let { sdk: t } = (0, v.K)();
          return (0, A.a)({
            queryKey: ['processSigningPersonalSignRequest', e],
            queryFn: () => t.signingApproval.processSigningPersonalSignRequest(e),
            throwOnError: !0,
          });
        },
        K = (e) => {
          let { text: t, network: n, appOrigin: a, onApprove: i, onClose: r, onReject: o } = e,
            { data: l } = V(t),
            c = () => {
              o(), r();
            };
          if (!l) return (0, s.jsx)(h.d, {});
          switch (l.status) {
            case M.Zq.AutoApproved:
            case M.Zq.UserApprovalRequired:
              return (0, s.jsx)(d.k, {
                onDismiss: c,
                aside: (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(d.k.AppInfo, { appOrigin: a, onDismiss: c }),
                    (0, s.jsx)(d.k.TxInfo, {
                      txType: y.v.PERSONAL_SIGN,
                      message: (0, U.H_)(t, 'string').toString(),
                    }),
                  ],
                }),
                children: (0, s.jsx)(H, {
                  id: l.id,
                  text: t,
                  network: n,
                  appOrigin: a,
                  onClose: r,
                  onApprove: i,
                  onReject: o,
                }),
              });
            case M.Zq.Rejected:
              return (0, s.jsx)(d.k, {
                onDismiss: c,
                aside: (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(d.k.AppInfo, { appOrigin: a, onDismiss: c }),
                    (0, s.jsx)(d.k.TxInfo, {
                      txType: y.v.PERSONAL_SIGN,
                      message: (0, U.H_)(t, 'string').toString(),
                    }),
                  ],
                }),
                children: (0, s.jsx)(d.k.ErrorScreen, { error: Error('Signing request rejected') }),
              });
          }
        },
        H = (e) => {
          let {
              id: t,
              text: n,
              network: a,
              appOrigin: i,
              onApprove: r,
              onClose: l,
              onReject: c,
            } = e,
            { mutateAsync: h } = R(t),
            { mutate: p } = P(t),
            v = async () => {
              g.setCurrentPage(u.jo.PENDING),
                (await h(void 0)).status === o.rw.APPROVED
                  ? (r(),
                    setTimeout(() => {
                      l();
                    }, 600))
                  : g.setCurrentPage(u.jo.ERROR);
            },
            g = (0, u.Qt)(),
            { activeWallet: w } = (0, j.r)();
          return (0, s.jsx)(d.k.Screens, {
            type: y.v.PERSONAL_SIGN,
            value: n,
            rawValue: JSON.stringify(n, null, 2),
            wallet: w,
            network: a,
            appOrigin: i,
            onClose: l,
            onReject: () => {
              p(), c();
            },
            config: {
              review: {
                heading: 'Review Signing Request',
                subheading: 'Please review your message before signing.',
                continueLabel: 'Sign Message',
                rejectLabel: 'Cancel Request',
                onContinue: v,
              },
              pending: {
                heading: 'Signing Message',
                subheading: 'Please wait while we sign your message.',
              },
              confirm: {
                heading: 'Message Signed',
                subheading: 'This message has been signed successfully.',
              },
            },
          });
        };
      var Y = n(97016),
        W = n(81145),
        G = n(49933),
        z = n(95426),
        J = n(61563),
        B = n(33972),
        $ = n(88376),
        Q = n(40621),
        X = n(31601),
        Z = n(38031),
        ee = n(21819),
        et = n(32503);
      let en = (e) => (0, Z.C)({ queryKey: ['chainInfo', e], queryFn: () => (0, et.jF)(e) }),
        es = (e) => (0, ee.k)(en(e)).data;
      var ea = n(96350),
        ei = n.n(ea);
      let er = (e) => {
        let { onApprove: t, onClose: n, onReject: a, appOrigin: i, network: r } = e,
          o = () => {
            t(), n();
          },
          c = () => {
            a(), n();
          },
          [u, h] = (0, l.useState)(!1),
          p = (0, G.N)(i),
          v = es(r),
          g = v ? $.AJ[v.id] : null;
        return (0, s.jsx)(d.k, {
          onDismiss: c,
          children: (0, s.jsx)('div', {
            className: ei().container,
            children: (0, s.jsxs)(W.x, {
              as: 'div',
              alignItems: 'center',
              gap: 16,
              children: [
                (0, s.jsxs)(W.x, {
                  as: 'div',
                  alignItems: 'center',
                  gap: 16,
                  children: [
                    g
                      ? (0, s.jsx)(J.A, { chain: g, alt: '', size: 56 })
                      : (0, s.jsx)(B.E, {
                          src: '/default-network-icon.svg',
                          radius: 14,
                          width: 56,
                          height: 56,
                          alt: '',
                        }),
                    (0, s.jsxs)(W.x, {
                      as: 'div',
                      alignItems: 'center',
                      children: [
                        (0, s.jsx)('h1', { children: 'Allow Custom Chain' }),
                        (0, s.jsxs)('p', {
                          children: [
                            'New request from ',
                            (0, s.jsx)('strong', { children: p.name }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !v &&
                  (0, s.jsx)(z.b, {
                    variant: 'warning',
                    children: 'This chain may be unsafe. Proceed with caution.',
                  }),
                (0, s.jsx)('div', {
                  className: ei().requestDetails,
                  children: (0, s.jsxs)('dl', {
                    children: [
                      (0, s.jsx)('dt', { children: 'Chain Name' }),
                      (0, s.jsxs)('dd', {
                        children: [
                          g && (0, s.jsx)(J.A, { chain: g, alt: '', size: 18 }),
                          ' ',
                          r.name,
                        ],
                      }),
                      (0, s.jsxs)('dt', {
                        children: [
                          'Chain URL',
                          (0, s.jsx)(X.u, { message: "The URL of the network's RPC endpoint" }),
                        ],
                      }),
                      (0, s.jsx)('dd', {
                        children: (0, s.jsx)(X.u, {
                          message: r.rpcURL.value,
                          children: r.rpcURL.value,
                        }),
                      }),
                      (0, s.jsxs)('dt', {
                        children: [
                          'Chain ID',
                          (0, s.jsx)(X.u, { message: 'The chain ID of the network' }),
                        ],
                      }),
                      (0, s.jsx)('dd', { children: r.chainId.value }),
                      (0, s.jsxs)('dt', {
                        children: [
                          'Currency Symbol',
                          (0, s.jsx)(X.u, {
                            message: "The symbol of the network's native currency",
                          }),
                        ],
                      }),
                      (0, s.jsx)('dd', { children: r.nativeCurrency.symbol }),
                    ],
                  }),
                }),
                !v &&
                  (0, s.jsx)('div', {
                    style: { borderRadius: '0.75rem', padding: '1rem', background: '#FAFAFA' },
                    children: (0, s.jsx)(Q.X, {
                      name: 'agree',
                      label:
                        'I understand and acknowledge the risks associated with approving this network.',
                      defaultChecked: u,
                      onCheckedChange: (e) => h(e),
                    }),
                  }),
                (0, s.jsx)('div', {
                  style: { width: '100%' },
                  children: (0, s.jsxs)(W.x, {
                    as: 'div',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 16,
                    children: [
                      (0, s.jsx)(Y.z, {
                        id: 'cancel-allow-custom-network',
                        wide: !0,
                        size: 'lg',
                        onClick: c,
                        variant: 'secondary',
                        children: 'Cancel',
                      }),
                      (0, s.jsx)(Y.z, {
                        id: 'approve-custom-network',
                        wide: !0,
                        size: 'lg',
                        onClick: () => {
                          o();
                        },
                        variant: 'primary',
                        disabled: !u && !v,
                        children: 'Approve',
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
      var eo = n(12432),
        el = n(81289),
        ec = n(95338),
        ed = n.n(ec),
        eu = n(87468),
        eh = n(49466),
        ep = n(41954),
        ev = n(52888),
        eg = n(68779),
        ew = n(44876),
        em = n(63233),
        ex = n(71108),
        ef = n(75947),
        ey = n(26934),
        ej = n(50413),
        eA = n(9486);
      let eI = (e) => {
          let { onSelect: t, onClose: n, onReject: a } = e,
            { data: i, isPending: r } = (0, eu.S)({ skipHidden: !0 }),
            [o, c] = (0, l.useState)(!1),
            [u, h] = (0, l.useState)(null),
            p = (e) => {
              h((t) => (null === t ? e : t)),
                t(e),
                setTimeout(() => {
                  n();
                }, 1e3);
            };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(ew.U, { open: o, onOpenChange: c }),
              (0, s.jsx)(d.k, {
                isLoading: r,
                onDismiss: () => {
                  a(), n();
                },
                children: (0, s.jsxs)('div', {
                  className: ed().container,
                  children: [
                    (0, s.jsxs)('div', {
                      className: ed().content,
                      children: [
                        (0, s.jsx)('div', {
                          className: ed().icon,
                          children: (0, s.jsx)(ej.nr, {}),
                        }),
                        (0, s.jsxs)('div', {
                          className: ed().heading,
                          children: [
                            (0, s.jsx)('h1', { children: 'Choose Wallet' }),
                            (0, s.jsx)('p', {
                              children: 'Switch your current wallet or create a new one.',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(W.x, {
                      as: 'div',
                      gap: 32,
                      children: [
                        (0, s.jsx)(ef.c, {
                          children: (0, s.jsx)(ex.U, {
                            children: (0, s.jsx)(l.Suspense, {
                              fallback: (0, s.jsx)(s.Fragment, {
                                children: [,]
                                  .fill(null)
                                  .map((e, t) =>
                                    (0, s.jsx)(
                                      ex.U.Item,
                                      { animated: !1, children: (0, s.jsx)(e_, {}) },
                                      t
                                    )
                                  ),
                              }),
                              children: i.map((e) =>
                                (0, s.jsx)(
                                  ex.U.Item,
                                  {
                                    onClick: () => p(e.walletId),
                                    children: (0, s.jsx)(ek, {
                                      wallet: e,
                                      selected: !!u && e.walletId.equals(u),
                                    }),
                                  },
                                  e.ethereumAddress.toHexString()
                                )
                              ),
                            }),
                          }),
                        }),
                        (0, s.jsx)(Y.z, {
                          wide: !0,
                          size: 'lg',
                          variant: 'secondary',
                          onClick: () => c(!0),
                          prefixIcon: (0, s.jsx)(ey.J, { name: 'plus' }),
                          children: 'New Wallet',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ek = (e) => {
          var t;
          let { wallet: n, selected: a } = e,
            i = (0, ev.M)(n);
          return (0, s.jsxs)('div', {
            className: ed().walletItem,
            children: [
              (0, s.jsxs)('div', {
                className: ed().wallet,
                children: [
                  (0, s.jsx)('div', {
                    className: ed().walletAvatar,
                    children: (0, s.jsx)(ep.q, {
                      address: n.ethereumAddress.toHexString(),
                      size: 'fill',
                      metadata: n.metadata,
                    }),
                  }),
                  (0, s.jsxs)('div', {
                    className: ed().walletInfo,
                    children: [
                      (0, s.jsx)('h2', {
                        children:
                          null !== (t = n.metadata.label) && void 0 !== t
                            ? t
                            : (0, eh.FP)(n.ethereumAddress.toHexString()),
                      }),
                      (0, s.jsx)(eo.M, {
                        initial: !1,
                        mode: 'popLayout',
                        children: i.isPending
                          ? (0, s.jsx)(
                              el.E.div,
                              {
                                className: ed().walletBalance,
                                ...eA.baseMotionVariants,
                                style: { padding: '4px 0 0' },
                                children: (0, s.jsx)(eg.O, { width: 64, height: 16, radius: 14 }),
                              },
                              'wallet-balance-loading'
                            )
                          : (0, s.jsx)(
                              el.E.div,
                              {
                                className: ed().walletBalance,
                                ...eA.baseMotionVariants,
                                children: (0, s.jsx)(em.$U, {
                                  amount: i.ethBalance,
                                  metadata: { name: 'Ethereum', symbol: 'ETH', decimals: 0 },
                                  size: 14,
                                  color: '#17171780',
                                  weight: 400,
                                }),
                              },
                              'wallet-balance'
                            ),
                      }),
                    ],
                  }),
                ],
              }),
              a && (0, s.jsx)(eT, {}),
            ],
          });
        },
        e_ = () =>
          (0, s.jsx)('div', {
            className: ed().walletItem,
            children: (0, s.jsxs)('div', {
              className: ed().wallet,
              children: [
                (0, s.jsx)('div', {
                  className: ed().walletAvatar,
                  children: (0, s.jsx)(eg.O, { width: 40, height: 40, radius: 40 }),
                }),
                (0, s.jsx)('div', {
                  className: ed().walletInfo,
                  children: (0, s.jsxs)(W.x, {
                    as: 'div',
                    gap: 6,
                    children: [
                      (0, s.jsx)(eg.O, { width: 90, height: 16, radius: 14 }),
                      (0, s.jsx)(eg.O, { width: 64, height: 16, radius: 14 }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        eT = () =>
          (0, s.jsx)(el.E.div, {
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: 1, scale: 1 },
            transition: { type: 'spring', stiffness: 1e3, damping: 80, mass: 3 },
            children: (0, s.jsxs)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '20',
              height: '20',
              fill: 'none',
              viewBox: '0 0 20 20',
              children: [
                (0, s.jsx)('circle', { cx: '10', cy: '10', r: '10', fill: 'var(--primary)' }),
                (0, s.jsx)(el.E.path, {
                  initial: { rotate: 60, pathLength: 0 },
                  animate: {
                    rotate: 0,
                    pathLength: 1,
                    transition: {
                      rotate: { type: 'spring', stiffness: 300, damping: 19, mass: 1.2 },
                      pathLength: { type: 'spring', stiffness: 800, damping: 80, mass: 4 },
                    },
                  },
                  stroke: '#fff',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '2',
                  d: 'm5.5 10 3 3L14 7.5',
                }),
              ],
            }),
          });
      class eS {
        waitForTypedDataSignApproval(e, t, n) {
          return new Promise((i) => {
            let r = !1;
            this.showModal({
              element: (0, s.jsx)(F, {
                typedData: e,
                appOrigin: t,
                network: n,
                onApprove: () => {
                  i((0, a.Vp)({ approved: !0 })), (r = !0);
                },
                onReject: () => {
                  i((0, a.Vp)({ approved: !1 })), (r = !0);
                },
                onClose: () => {
                  this.hideModal(), r || i((0, a.Vp)({ approved: !1 }));
                },
              }),
              onError: (e) => {
                this.hideModal(), i((0, a.Rn)(e));
              },
            });
          });
        }
        waitForTransactionSignApproval(e, t) {
          return new Promise((n) => {
            let i = !1;
            this.showModal({
              element: (0, s.jsx)(N, {
                tx: e,
                appOrigin: t,
                onApprove: (e) => {
                  n((0, a.Vp)({ approved: !0, populatedTx: e })), (i = !0);
                },
                onReject: () => {
                  n((0, a.Vp)({ approved: !1 })), (i = !0);
                },
                onClose: () => {
                  this.hideModal(), i || n((0, a.Vp)({ approved: !1 }));
                },
              }),
              onError: (e) => {
                this.hideModal(), n((0, a.Rn)(e));
              },
            });
          });
        }
        waitForPersonalSignApproval(e, t) {
          return new Promise((n) => {
            let i = !1;
            this.showModal({
              element: (0, s.jsx)(K, {
                text: e.text,
                network: e.network,
                appOrigin: t,
                onApprove: () => {
                  n((0, a.Vp)({ approved: !0 })), (i = !0);
                },
                onReject: () => {
                  n((0, a.Vp)({ approved: !1 })), (i = !0);
                },
                onClose: () => {
                  this.hideModal(), i || n((0, a.Vp)({ approved: !1 }));
                },
              }),
              onError: (e) => {
                this.hideModal(), n((0, a.Rn)(e));
              },
            });
          });
        }
        waitForAddNetworkApproval(e, t) {
          return new Promise((n) => {
            let i = !1;
            this.showModal({
              element: (0, s.jsx)(er, {
                network: e,
                appOrigin: t,
                onApprove: () => {
                  n((0, a.Vp)({ approved: !0 })), (i = !0);
                },
                onReject: () => {
                  n((0, a.Vp)({ approved: !1 })), (i = !0);
                },
                onClose: () => {
                  this.hideModal(), i || n((0, a.Vp)({ approved: !1 }));
                },
              }),
              onError: (e) => {
                this.hideModal(), n((0, a.Rn)(e));
              },
            });
          });
        }
        waitForSwitchActiveWalletApproval(e) {
          return new Promise((t) => {
            let n = !1;
            this.showModal({
              element: (0, s.jsx)(eI, {
                appOrigin: e,
                onSelect: (e) => {
                  t((0, a.Vp)({ approved: !0, selectedWalletId: e })), (n = !0);
                },
                onReject: () => {
                  t((0, a.Vp)({ approved: !1 })), (n = !0);
                },
                onClose: () => {
                  this.hideModal(), n || t((0, a.Vp)({ approved: !1 }));
                },
              }),
              onError: (e) => {
                this.hideModal(), t((0, a.Rn)(e));
              },
            });
          });
        }
        onChange(e) {
          return (
            this.listeners.push(e),
            () => {
              this.listeners = this.listeners.filter((t) => t !== e);
            }
          );
        }
        showModal(e) {
          this.changeModal(e);
        }
        hideModal() {
          this.changeModal(null);
        }
        changeModal(e) {
          (this.activeModal = e), this.notify();
        }
        notify() {
          this.listeners.forEach((e) => e(this.activeModal));
        }
        constructor() {
          (this.listeners = []), (this.activeModal = null);
        }
      }
      let eE = new eS();
    },
    6251: function (e, t, n) {
      'use strict';
      var s, a;
      n.d(t, {
        X: function () {
          return s;
        },
      }),
        ((a = s || (s = {})).createSession = 'createSession'),
        (a.retrieveSession = 'retrieveSession');
    },
    42415: function (e, t, n) {
      'use strict';
      let s;
      n.d(t, {
        S5: function () {
          return r;
        },
        ob: function () {
          return i;
        },
      });
      class a {
        on(e, t, n) {
          return this._postRobot.on(e, t, n);
        }
        once(e, t, n) {
          return this._postRobot.once(e, t, n);
        }
        send(e, t, n, s) {
          return this._postRobot.send(e, t, n, s);
        }
        constructor() {
          this._postRobot = n(16526);
        }
      }
      let i = () => (s || (s = new a()), s),
        r = () => window.parent;
    },
    93746: function (e, t, n) {
      'use strict';
      n.d(t, {
        X: function () {
          return g;
        },
      });
      var s = n(71842),
        a = n(97137),
        i = n(9284),
        r = n(42716),
        o = n(13393),
        l = n(2669),
        c = n(2091),
        d = n(14619),
        u = n(2125),
        h = n(98550);
      class p {
        getAddress() {
          return this.pocketAccount.activeWallet.ethereumAddress;
        }
        async signTransactionRequiresUserApproval(e) {
          let t = { to: e.to, value: e.value, data: e.data, chainId: this.network.chainId.value };
          return this.sdk.signingApproval.signingTxRequiresUserApproval(t);
        }
        async sendTransaction(e) {
          let t = (0, u.L)(this.pocketAccount.activeWallet.privateKey.toHexString());
          try {
            let n = { to: e.to, value: e.value, data: e.data, chainId: this.network.chainId.value },
              s =
                this.forceUserApproval ||
                (await this.sdk.signingApproval.signingTxRequiresUserApproval(n)),
              a = {
                from: t,
                to: e.to ? new r.y1(e.to) : void 0,
                value: e.value ? new r.kr(e.value) : void 0,
                data: e.data ? new r.rY(e.data) : void 0,
                network: this.network,
              };
            if (!s) {
              let e = await this._sendTransaction(a);
              if (e.isFailure()) return { status: l.Kc.FAILED, reason: e.error };
              return { signedResult: e.value, status: l.Kc.APPROVED };
            }
            let i = await h.b.waitForTransactionSignApproval(a, this.appOrigin.value);
            if (i.isFailure()) return { reason: i.error, status: l.Kc.FAILED };
            if (!i.value.approved) return { status: l.Kc.REJECTED };
            let o = await this._sendTransaction(i.value.populatedTx);
            if (o.isFailure()) return { status: l.Kc.FAILED, reason: o.error };
            return { signedResult: o.value, status: l.Kc.APPROVED };
          } catch (e) {
            return (0, i.BD)(e), { reason: e, status: l.Kc.FAILED };
          }
        }
        async sendRawTransaction(e) {
          return this.transactionService.sendRaw({
            serializedTransaction: e,
            network: this.network,
          });
        }
        signTypedDataRequiresUserApproval(e) {
          return this.sdk.signingApproval.signingTypedDataRequiresUserApproval(e);
        }
        async signTypedData(e) {
          try {
            if (
              !(
                this.forceUserApproval ||
                (await this.sdk.signingApproval.signingTypedDataRequiresUserApproval(e))
              )
            )
              return { signedResult: await this._signTypedData(e), status: l.Kc.APPROVED };
            let t = await h.b.waitForTypedDataSignApproval(e, this.appOrigin.value, this.network);
            if (t.isFailure()) return { reason: t.error, status: l.Kc.FAILED };
            if (!t.value.approved) return { status: l.Kc.REJECTED };
            return { signedResult: await this._signTypedData(e), status: l.Kc.APPROVED };
          } catch (e) {
            return (0, i.BD)(e), { status: l.Kc.FAILED, reason: e };
          }
        }
        signTextRequiresUserApproval(e) {
          return this.sdk.signingApproval.signingPersonalSignRequiresUserApproval(e);
        }
        async signText(e) {
          try {
            let t = (0, u.L)(this.pocketAccount.activeWallet.privateKey.toHexString());
            if (
              !(
                this.forceUserApproval ||
                (await this.sdk.signingApproval.signingPersonalSignRequiresUserApproval(e))
              )
            )
              return {
                signedResult: await t.signMessage({ message: { raw: e } }),
                status: l.Kc.APPROVED,
              };
            let n = await h.b.waitForPersonalSignApproval(
              { text: e, network: this.network },
              this.appOrigin.value
            );
            if (n.isFailure()) return { reason: n.error, status: l.Kc.FAILED };
            if (!n.value.approved) return { status: l.Kc.REJECTED };
            return {
              signedResult: await t.signMessage({ message: { raw: e } }),
              status: l.Kc.APPROVED,
            };
          } catch (e) {
            return (0, i.BD)(e), { status: l.Kc.FAILED, reason: e };
          }
        }
        async _sendTransaction(e) {
          return this.transactionService.send(e);
        }
        async _signTypedData(e) {
          let { EIP712Domain: t, ...n } = e.types;
          return (0, u.L)(this.pocketAccount.activeWallet.privateKey.toHexString()).signTypedData({
            domain: e.domain,
            types: n,
            primaryType: e.primaryType,
            message: e.message,
          });
        }
        constructor(e, t, n, s, a, i = !1) {
          (this.sdk = e),
            (this.pocketAccount = t),
            (this.appOrigin = n),
            (this.network = s),
            (this.transactionService = a),
            (this.forceUserApproval = i);
        }
      }
      let v = [
        l.ny.personal_sign,
        l.ny.eth_sendTransaction,
        l.ny.eth_signTypedData_v4,
        l.ny.wallet_addEthereumChain,
        l.ny.family_switchAccounts,
      ];
      class g {
        async requiresUserApproval(e) {
          let t = await this.sdk.session.requireCurrent();
          if (this.forceUserApproval) return !0;
          if (!(0, i.Jo)(l.ny, e.method) || !v.includes(e.method)) return !1;
          let n = t.account.activeWallet;
          switch (e.method) {
            case l.ny.personal_sign: {
              let [t, s] = e.params;
              if (!(0, o.v)(t) || !(0, i.HD)(s)) throw c.PY.invalidParams();
              let a = r.y1.fromString(s);
              if (a.isFailure() || !n.ethereumAddress.equals(a.value)) throw c.PY.invalidParams();
              let l = await this.getActiveAppSigner();
              if (!n.ethereumAddress.equals(a.value)) throw c.PY.transactionRejected();
              return l.signTextRequiresUserApproval(t);
            }
            case l.ny.eth_sendTransaction: {
              let [t] = e.params,
                s = l.Xj.safeParse(t);
              if (!s.success) throw c.PY.invalidParams();
              let a = r.y1.fromString(s.data.from);
              if (a.isFailure()) throw c.PY.invalidParams();
              let i = await this.getActiveAppSigner();
              if (!n.ethereumAddress.equals(a.value)) throw c.PY.transactionRejected();
              return i.signTransactionRequiresUserApproval(s.data);
            }
            case l.ny.eth_signTypedData_v4: {
              let [t, s] = e.params;
              if (!(0, i.HD)(t) || !(0, i.HD)(s)) throw c.PY.invalidParams();
              let a = r.y1.fromString(t);
              if (a.isFailure() || !n.ethereumAddress.equals(a.value)) throw c.PY.invalidParams();
              let o = l.Dv.safeParse(JSON.parse(s));
              if (!o.success) throw c.PY.invalidParams();
              return (await this.getActiveAppSigner()).signTypedDataRequiresUserApproval(o.data);
            }
            default:
              return !0;
          }
        }
        async handleRequest(e) {
          if ((await this.sdk.session.getCurrent()).status !== s.$.AUTHENTICATED)
            switch (e.method) {
              case l.ny.eth_chainId:
                return '0x1';
              case l.ny.eth_accounts:
                return [];
              default:
                throw c.gK.unauthorized({
                  message:
                    'Family is in unauthenticated state. Ask the user to authenticate first through the connect button.',
                });
            }
          switch (e.method) {
            case l.ny.family_switchAccounts:
              return this.handleAccountsSwitchRequest(e);
            case l.ny.eth_accounts:
              return this.handleAccounts();
            case l.ny.eth_requestAccounts:
            case l.ny.eth_sign:
            case l.ny.eth_signTransaction:
              throw c.gK.unsupportedMethod();
            case l.ny.eth_signTypedData_v4:
            case l.ny.eth_sendTransaction:
            case l.ny.personal_sign:
            case l.ny.eth_sendRawTransaction:
              return this.handleSignRequest(e);
            case l.ny.wallet_addEthereumChain:
            case l.ny.wallet_switchEthereumChain:
              return this.handleChainRequest(e);
            case l.ny.wallet_revokePermissions:
              return this.handleRevokePermissions(e);
            case l.ny.wallet_watchAsset:
              throw c.gK.unsupportedMethod();
            default:
              return this.proxyCallRequest(e);
          }
        }
        async getActiveAppProvider() {
          if (this._activeAppProviderInfo) return this._activeAppProviderInfo;
          let e = await this.sdk.network.getSelectedAppNetwork(this.appOrigin),
            t = await d.D.create(e);
          if (t.isFailure()) throw t.error;
          return (
            (this._activeAppProviderInfo = { provider: t.value, network: e }),
            this._activeAppProviderInfo
          );
        }
        async getActiveAppSigner() {
          let e = await this.getActiveAppProvider(),
            { account: t } = await this.sdk.session.requireCurrent();
          return new p(
            this.sdk,
            t,
            this.appOrigin,
            e.network,
            this.transactionService,
            this.forceUserApproval
          );
        }
        async changeActiveAppNetwork(e) {
          let t = await d.D.create(e);
          if (t.isFailure()) throw t.error;
          (this._activeAppProviderInfo = { provider: t.value, network: e }),
            'customNetworkId' in e
              ? await this.sdk.network.setSelectedAppNetwork({
                  appOrigin: this.appOrigin,
                  customNetworkId: e.customNetworkId,
                })
              : await this.sdk.network.setSelectedAppNetwork({
                  appOrigin: this.appOrigin,
                  nativeChain: e.chain,
                });
        }
        async proxyCallRequest(e) {
          try {
            let { provider: t } = await this.getActiveAppProvider();
            return await t.send(e.method, e.params);
          } catch (e) {
            if ((0, c.jg)(e)) throw e;
            throw c.PY.invalidRequest();
          }
        }
        async handleSignRequest(e) {
          let { account: t } = await this.sdk.session.requireCurrent(),
            n = t.activeWallet,
            s = await this.getActiveAppSigner();
          switch (e.method) {
            case l.ny.eth_signTypedData_v4: {
              let [t, a] = e.params;
              if (!(0, i.HD)(t) || !(0, i.HD)(a)) throw c.PY.invalidParams();
              let o = r.y1.fromString(t);
              if (o.isFailure() || !n.ethereumAddress.equals(o.value)) throw c.PY.invalidParams();
              let d = l.Dv.safeParse(JSON.parse(a));
              if (!d.success) throw c.PY.invalidParams();
              let u = await s.signTypedData(d.data);
              switch (u.status) {
                case l.Kc.APPROVED:
                  return u.signedResult;
                case l.Kc.REJECTED:
                  throw c.gK.userRejectedRequest();
                case l.Kc.FAILED:
                  if ((0, c.jg)(u.reason)) throw u.reason;
                  throw c.PY.internal({ message: u.reason.message });
                default:
                  (0, i.vE)(u, 'Unexpected signing status');
              }
              break;
            }
            case l.ny.eth_sendTransaction: {
              let [t] = e.params,
                a = l.Xj.safeParse(t);
              if (!a.success) throw c.PY.invalidParams();
              let o = r.y1.fromString(a.data.from);
              if (o.isFailure()) throw c.PY.invalidParams();
              if (!n.ethereumAddress.equals(o.value)) throw c.PY.transactionRejected();
              let d = await s.sendTransaction(a.data);
              switch (d.status) {
                case l.Kc.APPROVED:
                  return d.signedResult;
                case l.Kc.REJECTED:
                  throw c.gK.userRejectedRequest();
                case l.Kc.FAILED:
                  if ((0, c.jg)(d.reason)) throw d.reason;
                  throw c.PY.internal({ message: d.reason.message });
                default:
                  (0, i.vE)(d, 'Unexpected signing status');
              }
              break;
            }
            case l.ny.personal_sign: {
              let [t, a] = e.params;
              if (!(0, o.v)(t) || !(0, i.HD)(a)) throw c.PY.invalidParams();
              let d = r.y1.fromString(a);
              if (d.isFailure() || !n.ethereumAddress.equals(d.value)) throw c.PY.invalidParams();
              let u = await s.signText(t);
              switch (u.status) {
                case l.Kc.APPROVED:
                  return u.signedResult;
                case l.Kc.REJECTED:
                  throw c.gK.userRejectedRequest();
                case l.Kc.FAILED:
                  if ((0, c.jg)(u.reason)) throw u.reason;
                  throw c.PY.internal({ message: u.reason.message });
                default:
                  (0, i.vE)(u, 'Unexpected signing status');
              }
              break;
            }
            case l.ny.eth_sendRawTransaction: {
              let [t] = e.params;
              if (!(0, o.v)(t)) throw c.PY.invalidParams();
              let n = await s.sendRawTransaction(t);
              if (n.isFailure()) {
                if ((0, c.jg)(n.error)) throw n.error;
                throw c.PY.internal(n.error);
              }
              return n.value;
            }
            default:
              throw c.gK.unsupportedMethod();
          }
        }
        async handleChainRequest(e) {
          switch (e.method) {
            case l.ny.wallet_switchEthereumChain: {
              let t = l.os.safeParse(e.params);
              if (!t.success) throw c.PY.invalidParams();
              let n = r.a_.fromHexString(t.data[0].chainId);
              if (!n.isSuccess()) throw c.PY.invalidParams({ message: 'Invalid chain id' });
              let s = (await this.sdk.network.getNetworks()).items.find((e) =>
                e.chainId.equals(n.value)
              );
              if (!s) throw c.gK.unrecognizedChainId();
              return await this.changeActiveAppNetwork(s), null;
            }
            case l.ny.wallet_addEthereumChain: {
              var t;
              let n = l.Ak.safeParse(e.params);
              if (!n.success) throw c.PY.invalidParams({ data: { issues: n.error.issues } });
              let s = n.data[0],
                i = null === (t = s.blockExplorerUrls) || void 0 === t ? void 0 : t[0],
                o = r.a_.fromHexString(s.chainId);
              if (!o.isSuccess()) throw c.PY.invalidParams({ message: 'Invalid chain id' });
              let d = {
                name: s.chainName,
                rpcURL: new r.R9(s.rpcUrls[0]),
                chainId: o.value,
                blockExplorer: i ? new r.R9(i) : void 0,
                nativeCurrency: {
                  name: s.nativeCurrency.name,
                  symbol: s.nativeCurrency.symbol,
                  decimals: s.nativeCurrency.decimals,
                },
              };
              if (!(await this.matchesProvidedChainId(d.rpcURL, d.chainId)))
                throw c.PY.invalidParams({ message: 'Chain id does not match RPC chain id' });
              let u = await h.b.waitForAddNetworkApproval(d, this.appOrigin.value);
              if (u.isFailure()) throw c.gK.userRejectedRequest({ message: u.error.message });
              if (!u.value.approved) throw c.gK.userRejectedRequest();
              let p = await this.sdk.network.addNetwork(d);
              if (p.isFailure()) {
                if (p.error.reason === a.ji.NetworkAlreadyExists);
                else
                  throw c.PY.internal({
                    message: p.error.message,
                    data: { reason: p.error.reason },
                  });
              }
              return null;
            }
            default:
              throw c.gK.unsupportedMethod();
          }
        }
        async handleAccounts() {
          return [(await this.getActiveAppSigner()).getAddress().toHexString()];
        }
        async handleRevokePermissions(e) {
          let t = l.t$.safeParse(e.params);
          if (!t.success) throw c.PY.invalidParams({ data: { issues: t.error.issues } });
          let n = Object.keys(t.data[0]);
          if (1 === n.length && 'eth_accounts' === n[0])
            return await this.sdk.session.clear(), null;
          throw c.PY.invalidParams({ message: 'No known permissions to revoke' });
        }
        async handleAccountsSwitchRequest(e) {
          let t = l.fS.safeParse(e.params);
          if (!t.success) throw c.PY.invalidParams({ data: { issues: t.error.issues } });
          let n = await h.b.waitForSwitchActiveWalletApproval(this.appOrigin.value);
          if (n.isFailure()) throw c.gK.userRejectedRequest({ message: n.error.message });
          if (!n.value.approved) throw c.gK.userRejectedRequest();
          return (
            await this.sdk.wallet.setActiveWallet(n.value.selectedWalletId), this.handleAccounts()
          );
        }
        async matchesProvidedChainId(e, t) {
          return (await d.D.create({ rpcURL: e, chainId: t })).isSuccess();
        }
        constructor(e, t, n, s = !1) {
          (this.appOrigin = e),
            (this.sdk = t),
            (this.transactionService = n),
            (this.forceUserApproval = s),
            (this._activeAppProviderInfo = null);
        }
      }
    },
    89542: function (e, t, n) {
      'use strict';
      n.d(t, {
        _: function () {
          return i;
        },
      });
      var s = n(42716),
        a = n(9284);
      let i = (e) => {
        switch (e) {
          case s.F0.EMAIL:
            return { name: 'Email Address', shortName: 'Email', action: 'emailed' };
          case s.F0.PHONE:
            return { name: 'Phone Number', shortName: 'Phone', action: 'texted' };
          case 'EXTERNAL_ID':
            return { name: 'External ID', shortName: 'External', action: 'sent' };
          default:
            return (0, a.vE)(e);
        }
      };
    },
    70992: function (e, t, n) {
      'use strict';
      n.d(t, {
        a: function () {
          return u;
        },
      });
      var s = n(6153),
        a = n(36571),
        i = n(74851),
        r = n(5718),
        o = n(78978),
        l = n(13317),
        c = n(53751);
      let d = (e) => {
          var t, n, s;
          return {
            to: null === (t = e.to) || void 0 === t ? void 0 : t.toHexString(),
            value: null === (n = e.value) || void 0 === n ? void 0 : n.toHexString(),
            data: null === (s = e.data) || void 0 === s ? void 0 : s.toHexString(),
            chainId: e.network.chainId.value,
          };
        },
        u = (e) => {
          let t = null;
          try {
            t = e.data
              ? (function (e) {
                  let { abi: t, data: n } = e,
                    l = (0, a.tP)(n, 0, 4),
                    c = t.find((e) => 'function' === e.type && l === (0, i.C)((0, o.t)(e)));
                  if (!c) throw new s.eF(l, { docsPath: '/docs/contract/decodeFunctionData' });
                  return {
                    functionName: c.name,
                    args:
                      'inputs' in c && c.inputs && c.inputs.length > 0
                        ? (0, r.r)(c.inputs, (0, a.tP)(n, 4))
                        : void 0,
                  };
                })({ abi: l.Wo, data: e.data.toHexString() })
              : null;
          } catch (e) {
            console.error(e);
          }
          try {
            return (0, c.F)({ ...d(e), ...(t && { decodedData: t }) });
          } catch (e) {
            return JSON.stringify(e);
          }
        };
    },
    12846: function (e, t, n) {
      'use strict';
      n.d(t, {
        p: function () {
          return a;
        },
      });
      var s = n(42716);
      class a {
        subscribeToMessages() {
          this.channel.onmessage = async (e) => {
            await this.sdk.session.refresh(
              e.data
                ? {
                    deviceId: new s.qT(e.data.deviceId),
                    jwtInfo: {
                      accessToken: new s.qR(e.data.jwtInfo.accessToken),
                      refreshToken: new s.qR(e.data.jwtInfo.refreshToken),
                      idToken: new s.qR(e.data.jwtInfo.idToken),
                    },
                    clientSessionKey: new s.jZ(e.data.clientSessionKey),
                    serverSessionKey: new s.jZ(e.data.serverSessionKey),
                  }
                : null
            );
          };
        }
        static forApp(e, t) {
          return new a(''.concat(e.host, '_session_sync_channel'), t);
        }
        constructor(e, t) {
          (this.sdk = t),
            (this.channel = new BroadcastChannel(e)),
            t.session.onChange(async () => {
              let e = await t.session.serialise();
              this.channel.postMessage(
                e
                  ? (0, s.au)({
                      deviceId: e.deviceId,
                      jwtInfo: e.jwtInfo,
                      clientSessionKey: e.clientSessionKey,
                      serverSessionKey: e.serverSessionKey,
                    })
                  : null
              );
            }),
            this.subscribeToMessages();
        }
      }
    },
    65518: function (e) {
      e.exports = {
        iOScallout: 'styles_iOScallout__p72uD',
        iOScalloutIcon: 'styles_iOScalloutIcon___wCH4',
        iOScalloutText: 'styles_iOScalloutText__H3iPm',
      };
    },
    65853: function (e) {
      e.exports = {
        container: 'styles_container__nAOT2',
        label: 'styles_label__UcqxI',
        checkbox: 'styles_checkbox__P4X6N',
      };
    },
    45928: function (e) {
      e.exports = {
        separator: 'styles_separator__fskWo',
        line: 'styles_line__l59Ca',
        content: 'styles_content__UFFUs',
        contentInner: 'styles_contentInner__jULpN',
      };
    },
    48472: function (e) {
      e.exports = {
        container: 'styles_container__pTbye',
        content: 'styles_content__oAZFZ',
        actions: 'styles_actions__jg1f4',
        screens: 'styles_screens__NJj8w',
        backToApp: 'styles_backToApp__4f4SW',
        steps: 'styles_steps__Q16Fw',
        preview: 'styles_preview__7y4EV',
        previewInner: 'styles_previewInner__A7ycS',
        seeMore: 'styles_seeMore__1605A',
        fadeIn: 'styles_fadeIn__WaETZ',
        inner: 'styles_inner__gAUvP',
        asideContent: 'styles_asideContent__SbQQc',
        main: 'styles_main__waVV_',
        requestsContainer: 'styles_requestsContainer__lpGNY',
        header: 'styles_header__URfxP',
        footer: 'styles_footer__1CKkE',
        subfooter: 'styles_subfooter__oQho_',
        appIcon: 'styles_appIcon__e9kEf',
        appInfoContainer: 'styles_appInfoContainer__gjtJC',
        appInfo: 'styles_appInfo__Zepwm',
        appMeta: 'styles_appMeta__EsUlx',
        accountInfo: 'styles_accountInfo__mKo1L',
        accountInfoContent: 'styles_accountInfoContent__OUdBw',
        requestList: 'styles_requestList__JaGfw',
        requestItem: 'styles_requestItem__VJsFU',
        txInfo: 'styles_txInfo__fBDa4',
        screenInner: 'styles_screenInner__t5YPh',
      };
    },
    95338: function (e) {
      e.exports = {
        container: 'styles_container__SheqX',
        content: 'styles_content__YaLBg',
        heading: 'styles_heading__WIt7j',
        icon: 'styles_icon__Ip38u',
        walletItem: 'styles_walletItem___8b5I',
        walletContainer: 'styles_walletContainer__9Pa48',
        defaultWalletBadge: 'styles_defaultWalletBadge__0wxL9',
        wallet: 'styles_wallet__Mdf9f',
        walletInfo: 'styles_walletInfo__CK19e',
        walletAvatar: 'styles_walletAvatar__nyNUw',
      };
    },
    96350: function (e) {
      e.exports = {
        container: 'styles_container__RNYgc',
        requestDetails: 'styles_requestDetails__yTP36',
      };
    },
    40246: function (e, t, n) {
      'use strict';
      n.d(t, {
        fC: function () {
          return y;
        },
      });
      var s = n(11572),
        a = n(58854),
        i = n(30),
        r = n(42642),
        o = n(65727),
        l = n(72876),
        c = n(53650),
        d = n(6723),
        u = (n(42770), n(34704));
      let h = 'Checkbox',
        [p, v] = (0, r.b)(h),
        [g, w] = p(h),
        m = (0, a.forwardRef)((e, t) => {
          let {
              __scopeCheckbox: n,
              name: r,
              checked: c,
              defaultChecked: d,
              required: h,
              disabled: p,
              value: v = 'on',
              onCheckedChange: w,
              ...m
            } = e,
            [y, j] = (0, a.useState)(null),
            A = (0, i.e)(t, (e) => j(e)),
            I = (0, a.useRef)(!1),
            k = !y || !!y.closest('form'),
            [_ = !1, T] = (0, l.T)({ prop: c, defaultProp: d, onChange: w }),
            S = (0, a.useRef)(_);
          return (
            (0, a.useEffect)(() => {
              let e = null == y ? void 0 : y.form;
              if (e) {
                let t = () => T(S.current);
                return e.addEventListener('reset', t), () => e.removeEventListener('reset', t);
              }
            }, [y, T]),
            (0, a.createElement)(
              g,
              { scope: n, state: _, disabled: p },
              (0, a.createElement)(
                u.WV.button,
                (0, s.Z)(
                  {
                    type: 'button',
                    role: 'checkbox',
                    'aria-checked': f(_) ? 'mixed' : _,
                    'aria-required': h,
                    'data-state': (function (e) {
                      return f(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
                    })(_),
                    'data-disabled': p ? '' : void 0,
                    disabled: p,
                    value: v,
                  },
                  m,
                  {
                    ref: A,
                    onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                      'Enter' === e.key && e.preventDefault();
                    }),
                    onClick: (0, o.M)(e.onClick, (e) => {
                      T((e) => !!f(e) || !e),
                        k &&
                          ((I.current = e.isPropagationStopped()),
                          I.current || e.stopPropagation());
                    }),
                  }
                )
              ),
              k &&
                (0, a.createElement)(x, {
                  control: y,
                  bubbles: !I.current,
                  name: r,
                  value: v,
                  checked: _,
                  required: h,
                  disabled: p,
                  style: { transform: 'translateX(-100%)' },
                })
            )
          );
        }),
        x = (e) => {
          let { control: t, checked: n, bubbles: i = !0, ...r } = e,
            o = (0, a.useRef)(null),
            l = (0, c.D)(n),
            u = (0, d.t)(t);
          return (
            (0, a.useEffect)(() => {
              let e = o.current,
                t = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  'checked'
                ).set;
              if (l !== n && t) {
                let s = new Event('click', { bubbles: i });
                (e.indeterminate = f(n)), t.call(e, !f(n) && n), e.dispatchEvent(s);
              }
            }, [l, n, i]),
            (0, a.createElement)(
              'input',
              (0, s.Z)({ type: 'checkbox', 'aria-hidden': !0, defaultChecked: !f(n) && n }, r, {
                tabIndex: -1,
                ref: o,
                style: {
                  ...e.style,
                  ...u,
                  position: 'absolute',
                  pointerEvents: 'none',
                  opacity: 0,
                  margin: 0,
                },
              })
            )
          );
        };
      function f(e) {
        return 'indeterminate' === e;
      }
      let y = m;
    },
  },
  function (e) {
    e.O(
      0,
      [
        1289, 6242, 4252, 3816, 9212, 1126, 9014, 1204, 9898, 2827, 1992, 7740, 1740, 9441, 4562,
        9816, 1666, 2192, 3846, 2346, 1213, 4711, 1871, 983, 4674, 9468, 410, 6526, 6866, 7137,
        5469, 1282, 25, 5385, 4512, 1934, 2665, 3109, 9801, 1744,
      ],
      function () {
        return e((e.s = 78138));
      }
    ),
      (_N_E = e.O());
  },
]);
