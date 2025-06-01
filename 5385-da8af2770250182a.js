(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5385],
  {
    75962: function (e, t, n) {
      'use strict';
      n.d(t, {
        w: function () {
          return i;
        },
      });
      var a = n(75040),
        r = n(58854);
      let i = (e) => {
        let {
            children: t,
            overflow: n = !1,
            duration: i = 100,
            className: s,
            property: c = 'height',
            hasSuffix: o = !1,
          } = e,
          u = (0, r.useRef)(null),
          [l, d] = (0, r.useState)('auto'),
          [y, p] = (0, r.useState)('auto');
        (0, r.useEffect)(() => {
          if (u.current) {
            let e = new ResizeObserver((e) => {
              let t = e[0].contentRect.height,
                n = e[0].contentRect.width;
              d(t), p(n);
            });
            return (
              e.observe(u.current),
              () => {
                e.disconnect();
              }
            );
          }
        }, []);
        let w = (function () {
          let [e, t] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              let e = () => {
                let e = window.scrollY,
                  n = window.innerHeight,
                  a = document.documentElement.scrollHeight;
                t(a > n && e + n >= a - 1);
              };
              return (
                window.addEventListener('scroll', e, { passive: !0 }),
                window.addEventListener('resize', e),
                () => {
                  window.removeEventListener('scroll', e), window.removeEventListener('resize', e);
                }
              );
            }, []),
            e
          );
        })();
        return (0, a.jsx)('div', {
          style: {
            height: 'height' === c || 'both' === c ? l : 'auto',
            width: 'width' === c || 'both' === c ? y : 'auto',
            overflow: n ? 'visible' : 'hidden',
            transitionDuration: ''.concat(i, 'ms'),
            transitionTimingFunction: 'var(--ease-snappy-out)',
            transitionProperty: 'both' === c ? 'height, width' : c,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: o && w ? 'flex-end' : 'flex-start',
          },
          className: s,
          children: (0, a.jsx)('div', { ref: u, children: t }),
        });
      };
    },
    23436: function (e, t, n) {
      'use strict';
      n.d(t, {
        B: function () {
          return l;
        },
      });
      var a = n(75040),
        r = n(12432),
        i = n(81289),
        s = n(26502),
        c = n.n(s),
        o = n(75962),
        u = n(9486);
      let l = (e) => {
        let { message: t } = e;
        return (0, a.jsx)(o.w, {
          duration: 400,
          overflow: !1,
          children: (0, a.jsx)(r.M, {
            mode: 'popLayout',
            children:
              t &&
              (0, a.jsx)(
                i.E.div,
                {
                  ...u.baseMotionVariants,
                  transition: { duration: 0.4 },
                  children: (0, a.jsx)('div', { className: c().container, children: t }),
                },
                t
              ),
          }),
        });
      };
    },
    68494: function (e, t, n) {
      'use strict';
      n.d(t, {
        I: function () {
          return E;
        },
      });
      var a = n(75040),
        r = n(58854),
        i = n(12432),
        s = n(81289),
        c = n(52191),
        o = n.n(c),
        u = n(31601),
        l = n(40028),
        d = n(81145),
        y = n(23436),
        p = n(9486);
      let w = () =>
          (0, a.jsxs)('svg', {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, a.jsx)('circle', {
                cx: '7.5',
                cy: '7.5',
                r: '5.5',
                stroke: 'currentColor',
                strokeWidth: '1.75',
              }),
              (0, a.jsx)('path', {
                d: 'M13.3813 14.6187C13.723 14.9604 14.277 14.9604 14.6187 14.6187C14.9604 14.277 14.9604 13.723 14.6187 13.3813L13.3813 14.6187ZM10.3813 11.6187L13.3813 14.6187L14.6187 13.3813L11.6187 10.3813L10.3813 11.6187Z',
                fill: 'currentColor',
              }),
            ],
          }),
        v = () =>
          (0, a.jsx)('svg', {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, a.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M6 11.4167C6 8.42512 8.42512 6 11.4167 6C14.4082 6 16.8333 8.42512 16.8333 11.4167C16.8333 14.4082 14.4082 16.8333 11.4167 16.8333C8.42512 16.8333 6 14.4082 6 11.4167ZM11.4167 4C7.32055 4 4 7.32055 4 11.4167C4 15.5128 7.32055 18.8333 11.4167 18.8333C13.1042 18.8333 14.66 18.2698 15.9063 17.3205L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L17.3205 15.9063C18.2698 14.66 18.8333 13.1042 18.8333 11.4167C18.8333 7.32055 15.5128 4 11.4167 4Z',
              fill: 'currentColor',
            }),
          }),
        E = (e) => {
          var t, n;
          let {
              label: c,
              labelRight: E,
              tooltip: h,
              hasError: m = !1,
              errorMessage: _,
              wide: f = !0,
              spinner: I,
              size: A = 'medium',
              onValueChange: g,
              onChange: C,
              inputRight: S,
              inputLeft: D,
              className: R,
              onClear: K,
              displayValueComponent: P,
              tone: k = 'primary',
              ...L
            } = e,
            N = null !== (n = L.id) && void 0 !== n ? n : L.name,
            O = (0, r.useRef)(null),
            x = (0, r.isValidElement)(P),
            U =
              'search' === L.type
                ? 'small' === A
                  ? (0, a.jsx)(w, {})
                  : 'medium' === A
                    ? (0, a.jsx)(w, {})
                    : (0, a.jsx)(v, {})
                : null;
          return (0, a.jsxs)('div', {
            className: ''.concat(o().container, ' ').concat(null != R ? R : ''),
            'data-error': _ || m ? 'true' : void 0,
            'data-wide': f,
            'data-size': A,
            children: [
              c &&
                (0, a.jsxs)(d.x, {
                  as: 'div',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  children: [
                    (0, a.jsxs)('label', {
                      className: o().label,
                      htmlFor: N,
                      children: [c, h && (0, a.jsx)(u.u, { message: h })],
                    }),
                    E,
                  ],
                }),
              (0, a.jsxs)('div', {
                className: o().inputContainer,
                'data-readonly': L.readOnly && !L.disabled,
                'data-tone': k,
                children: [
                  D && !U && (0, a.jsx)('div', { className: o().prefix, children: D }),
                  U && (0, a.jsx)('div', { className: o().iconContainer, children: U }),
                  (0, a.jsxs)('div', {
                    className: o().inputWrapper,
                    children: [
                      (0, a.jsx)(i.M, {
                        initial: !1,
                        children:
                          L.readOnly &&
                          !L.disabled &&
                          (0, a.jsx)(
                            s.E.div,
                            {
                              className: o().readOnlyContainer,
                              initial: { opacity: 0, y: 4 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -4 },
                              transition: p.transitionSpringSnappy,
                              children: (0, a.jsx)('button', {
                                type: 'button',
                                className: o().readOnly,
                                'aria-hidden': 'true',
                                onClick: () => {
                                  var e;
                                  null == K || K(),
                                    null === (e = O.current) || void 0 === e || e.focus();
                                },
                                'data-custom-value-component': x,
                                children: x ? P : L.value,
                              }),
                            },
                            null === (t = L.value) || void 0 === t ? void 0 : t.toString()
                          ),
                      }),
                      (0, a.jsx)('input', {
                        ref: O,
                        id: N,
                        autoComplete: 'off',
                        onChange: (e) => {
                          null == C || C(e), null == g || g(e.target.value);
                        },
                        ...L,
                      }),
                    ],
                  }),
                  (0, a.jsx)(i.M, {
                    initial: !1,
                    children:
                      I &&
                      (0, a.jsx)(s.E.div, {
                        className: o().spinner,
                        initial: { opacity: 0, scale: 0.6 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.4 },
                        children: (0, a.jsx)(i.M, { initial: !1, children: (0, a.jsx)(l.$, {}) }),
                      }),
                  }),
                  (0, a.jsx)(i.M, {
                    initial: !1,
                    children:
                      S &&
                      !I &&
                      (0, a.jsx)(s.E.div, {
                        className: o().action,
                        initial: { opacity: 0, scale: 0.6 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.8 },
                        transition: { duration: 0.2, ease: p.easeSnappyOut },
                        children: S,
                      }),
                  }),
                ],
              }),
              (0, a.jsx)(y.B, { message: null != _ ? _ : void 0 }),
            ],
          });
        };
    },
    31601: function (e, t, n) {
      'use strict';
      n.d(t, {
        u: function () {
          return p;
        },
      });
      var a = n(75040),
        r = n(58854),
        i = n(89014),
        s = n(92310),
        c = n(93161),
        o = n.n(c),
        u = n(87220),
        l = n.n(u),
        d = n(26934),
        y = n(4491);
      let p = (e) => {
        let {
            attention: t,
            side: n = 'top',
            sideOffset: c = 0,
            disableHoverableContent: u,
            message: p,
            children: w = (0, a.jsx)(d.J, { name: 'info' }),
            cursor: v = 'default',
            disabled: E,
            tone: h,
            open: m,
            onOpenChange: _,
          } = e,
          [f, I] = r.useState(!1),
          A = void 0 !== m,
          { isMounted: g, isRendered: C } = (0, s.R)({ open: !E && (A ? m : f), duration: 100 }),
          S = (0, y.nJ)();
        return (0, a.jsx)(i.zt, {
          delayDuration: 0,
          skipDelayDuration: 0,
          children: (0, a.jsxs)(i.fC, {
            open: g,
            onOpenChange: A ? _ : I,
            disableHoverableContent: u,
            children: [
              (0, a.jsx)(i.xz, {
                asChild: !0,
                children: (0, a.jsx)('span', { style: { cursor: v }, children: w }),
              }),
              (0, a.jsx)(i.h_, {
                container: S,
                children: (0, a.jsx)(i.VY, {
                  side: n,
                  sideOffset: c,
                  className: ''.concat(o().content, ' ').concat(t ? l().attentionAnim : ''),
                  children: (0, a.jsxs)('div', {
                    'data-tone': h,
                    className: ''
                      .concat(o().container, ' ')
                      .concat(C ? l().contentAnimEnter : l().contentAnimExit),
                    children: [
                      (0, a.jsx)('div', { className: o().inner, children: p }),
                      (0, a.jsx)(i.Eh, {
                        className: o().arrow,
                        asChild: !0,
                        children: (0, a.jsx)('svg', {
                          width: '22',
                          height: '7',
                          viewBox: '0 0 22 7',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: (0, a.jsx)('path', {
                            d: 'M20.548 0H1C1.75854 0 2.48889 0.287354 3.04413 0.804169L8.72986 6.09714C9.88171 7.16937 11.6663 7.16937 12.8181 6.09711L18.5038 0.804169C19.059 0.287354 19.7895 0 20.548 0Z',
                            fill: 'var(--bg)',
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    22421: function (e, t, n) {
      'use strict';
      n.d(t, {
        d: function () {
          return r;
        },
      });
      var a = n(81425);
      let r = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'primary',
          { width: t } = (0, a.i)();
        return 'secondary' === e ? t < 408 : t < 580;
      };
    },
    92310: function (e, t, n) {
      'use strict';
      n.d(t, {
        R: function () {
          return i;
        },
      });
      var a = n(58854),
        r = n(11e3);
      let i = (e) => {
        let { open: t, duration: n = 0, options: i } = e,
          [s, c] = (0, r.Y)({
            timeout: n,
            preEnter: !0,
            mountOnEnter: !0,
            unmountOnExit: !0,
            initialEntered: t,
            ...i,
          });
        a.useEffect(() => c(t), [t, c]);
        let o = !('exited' === s.status || 'unmounted' === s.status),
          u = 'unmounted' !== s.status && ('preEnter' === s.status || 'exiting' !== s.status),
          l = 'exiting' == s.status;
        return { state: s, toggle: c, isMounted: o, isRendered: u, isExiting: l };
      };
    },
    2778: function (e, t, n) {
      'use strict';
      n.d(t, {
        N: function () {
          return i;
        },
      });
      var a = n(58854);
      let r = a.useLayoutEffect,
        i = (e) => {
          let [t, n] = (0, a.useState)(e);
          return (
            r(() => {
              if (!t || document.body.style.getPropertyValue('--removed-body-scroll-bar-size'))
                return;
              let e = window.innerWidth - document.body.offsetWidth;
              document.body.style.setProperty(
                '--removed-body-scroll-bar-size',
                ''.concat(e, 'px'),
                'important'
              );
              let n = document.body.style.overflow;
              return (
                (document.body.style.overflow = 'hidden'),
                () => {
                  (document.body.style.overflow = n),
                    document.body.style.removeProperty('--removed-body-scroll-bar-size');
                }
              );
            }, [t]),
            (0, a.useEffect)(() => {
              t !== e && n(e);
            }, [e]),
            [t, n]
          );
        };
    },
    81425: function (e, t, n) {
      'use strict';
      n.d(t, {
        i: function () {
          return r;
        },
      });
      var a = n(58854);
      let r = () => {
        let [e, t] = (0, a.useState)({ width: 1440, height: 1440 });
        return (
          (0, a.useEffect)(() => {
            let e = () => {
              t({ width: window.innerWidth, height: window.innerHeight });
            };
            return (
              e(),
              window.addEventListener('resize', e),
              () => window.removeEventListener('resize', e)
            );
          }, []),
          e
        );
      };
    },
    59967: function (e, t, n) {
      'use strict';
      n.d(t, {
        R: function () {
          return r;
        },
        W: function () {
          return u;
        },
      });
      var a,
        r,
        i = n(42716),
        s = n(9284),
        c = n(92216),
        o = n(97137);
      ((a = r || (r = {})).VALID = 'VALID'),
        (a.INVALID = 'INVALID'),
        (a.USER_LOCKED = 'USER_LOCKED');
      let u = async (e) => {
        let t = await c.L.query(o.Hj, (0, i.au)({ request: e }));
        (0, s.kG)(t.data, 'Add credential API query failed', t.error);
        let n = t.data.verifyCredential;
        switch (n.__typename) {
          case 'UserLocked':
            return { status: r.USER_LOCKED, until: new Date(n.until) };
          case 'InvalidCredentials':
            return { status: r.INVALID };
          case 'ValidCredential':
            return { status: r.VALID };
          default:
            (0, s.vE)(n, 'Unhandled verify credential response type');
        }
      };
    },
    20515: function (e, t, n) {
      'use strict';
      n.d(t, {
        k: function () {
          return a;
        },
      });
      class a {
        static setDevicePoPOnce(e) {
          this._devicePoP = e;
        }
        static getDevicePoPOnce() {
          let e = this._devicePoP;
          return (this._devicePoP = void 0), e;
        }
      }
    },
    27520: function (e, t, n) {
      'use strict';
      var a, r;
      n.d(t, {
        z: function () {
          return a;
        },
      }),
        ((r = a || (a = {})).VALIDATION_CODE = 'VALIDATION_CODE'),
        (r.APPROVAL_CODE = 'APPROVAL_CODE'),
        (r.REGISTER_CREDENTIALS = 'REGISTER_CREDENTIALS'),
        (r.LOGIN_CREDENTIALS = 'LOGIN_CREDENTIALS'),
        (r.INVALID_USERNAME = 'INVALID_USERNAME'),
        (r.INVALID_CREDENTIAL = 'INVALID_CREDENTIAL'),
        (r.TWO_FACTOR = 'TWO_FACTOR'),
        (r.COMPLETE = 'COMPLETE'),
        (r.LOCKED = 'LOCKED');
    },
    81748: function (e, t, n) {
      'use strict';
      n.d(t, {
        H: function () {
          return r;
        },
        P: function () {
          return o;
        },
      });
      var a,
        r,
        i = n(9284),
        s = n(97137),
        c = n(92216);
      ((a = r || (r = {})).PNG = 'image/png'),
        (a.JPEG = 'image/jpeg'),
        (a.WEBP = 'image/webp'),
        (a.GIF = 'image/gif');
      let o = async (e, t) => {
        let n = (0, i.Pe)(r, t);
        (0, i.kG)((0, i.Jo)(s.HY, n), 'Enum not in a value');
        let a = await c.L.mutation(s.rz, { request: { fileType: e, mimeType: n } });
        return (
          (0, i.kG)(a.data, 'Failed to generate wallet picture upload url', a.error),
          a.data.generateUploadUrl.url
        );
      };
    },
    72990: function (e, t, n) {
      'use strict';
      n.d(t, {
        jW: function () {
          return u;
        },
        jn: function () {
          return l;
        },
        uF: function () {
          return d;
        },
      });
      var a = n(42716),
        r = n(9284),
        i = n(27520),
        s = n(97137);
      let c = () => ({ type: s.d3.Password }),
        o = (e) => {
          let {
            name: t,
            credentialId: n,
            challengeId: r,
            challenge: i,
            isLegacy: c,
            createdAt: o,
          } = e;
          return {
            type: s.d3.Passkey,
            name: t,
            credentialId: new a.K9(n),
            challengeId: new a.$C(r),
            challenge: new a.ci(i),
            isLegacy: c,
            createdAt: new Date(o),
          };
        },
        u = (e) => {
          switch (e.__typename) {
            case 'PasswordCredentials':
              return c();
            case 'PasskeyCredentials':
              return o(e);
            default:
              (0, r.vE)(e, 'Unhandled login response type');
          }
        },
        l = (e, t) => ({
          status: i.z.LOGIN_CREDENTIALS,
          accessToken: new a.qR(e),
          info: t.map((e) => u(e)),
        }),
        d = (e) => ({ status: i.z.REGISTER_CREDENTIALS, accessToken: new a.qR(e) });
    },
    88054: function (e, t, n) {
      'use strict';
      n.d(t, {
        C: function () {
          return r;
        },
      });
      var a = n(27520);
      let r = () => ({ status: a.z.INVALID_CREDENTIAL });
    },
    75375: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var a = n(27520);
      let r = (e) => ({ status: a.z.INVALID_USERNAME, reason: e });
    },
    17163: function (e, t, n) {
      'use strict';
      n.d(t, {
        m: function () {
          return r;
        },
        r: function () {
          return i;
        },
      });
      var a = n(27520);
      let r = (e) => ({ status: a.z.LOCKED, until: new Date(e) }),
        i = (e, t) => ({ status: e, until: new Date(t) });
    },
    92216: function (e, t, n) {
      'use strict';
      n.d(t, {
        L: function () {
          return d;
        },
        g: function () {
          return l;
        },
      });
      var a = n(9284),
        r = n(23217),
        i = n(72684),
        s = n(14640),
        c = n(20515);
      let o = null,
        u = () => ((0, a.kG)(o, 'Api was not initialised'), o),
        l = (e) => {
          (0, a.kG)(!o, 'Api was already initialised'),
            (o = (0, r.eI)({
              url: e.httpUrl,
              fetchOptions: () => {
                let e = c.k.jwtToken,
                  t = c.k.deviceId,
                  n = c.k.getDevicePoPOnce();
                return {
                  headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': e ? 'Bearer '.concat(e.value) : '',
                    'x-device-id': t ? t.value : '',
                    'x-device-pop': n ? n.value : '',
                  },
                };
              },
              exchanges: [
                r.Ek,
                (0, r.pV)({
                  forwardSubscription(t) {
                    let n = (0, s.eI)({
                        url: e.websocketUrl,
                        connectionParams: () => {
                          let e = c.k.jwtToken,
                            t = c.k.deviceId,
                            n = c.k.getDevicePoPOnce();
                          return {
                            headers: {
                              'Content-Type': 'application/json',
                              'x-access-token': e ? 'Bearer '.concat(e.value) : '',
                              'x-device-id': t ? t.value : '',
                              'x-device-pop': n ? n.value : '',
                            },
                          };
                        },
                      }),
                      a = { ...t, query: t.query || '' };
                    return { subscribe: (e) => ({ unsubscribe: n.subscribe(a, e) }) };
                  },
                }),
              ],
            }));
        },
        d = {
          mutation: async (e, t, n) => {
            let a = await u().mutation(e, t, n).toPromise();
            if (a.error) throw new i.C(a.error);
            return a;
          },
          query: (e, t, n) => u().query(e, t, n).toPromise(),
          subscription: (e, t, n) => u().subscription(e, t, n),
        };
    },
    82436: function (e, t, n) {
      'use strict';
      n.d(t, {
        d: function () {
          return d;
        },
      });
      var a = n(10732),
        r = n(97137),
        i = n(42716),
        s = n(9284),
        c = n(78756),
        o = n(12103),
        u = n(23733),
        l = n(86552);
      class d {
        get id() {
          return this._id;
        }
        get identity() {
          return this._identity;
        }
        get accountAuthToken() {
          return i.Tq.generate(this._accountMasterKey, (0, c.bo)());
        }
        get encryptedAccountInfo() {
          return this._encryptedAccount;
        }
        async generateHdWalletEncryptionId(e) {
          let t = (
            await d.getDecryptedAccountData({
              accountMasterKey: this._accountMasterKey,
              encryptedAccount: this._encryptedAccount,
            })
          ).wallets.find((t) => t.type === i.Sq.HD && t.mnemonic.equals(e));
          return t ? t.encryptionId : i._v.generate();
        }
        async hasExistingPrivateKeyEncryptionId(e) {
          return !!(
            await d.getDecryptedAccountData({
              accountMasterKey: this._accountMasterKey,
              encryptedAccount: this._encryptedAccount,
            })
          ).wallets.find((t) => t.type === i.Sq.PRIVATE_KEY && t.privateKey.equals(e));
        }
        async importWallets(e) {
          let t = await d.getDecryptedAccountData({
              accountMasterKey: this._accountMasterKey,
              encryptedAccount: this._encryptedAccount,
            }),
            n = e.map((e) => d.generateWalletData(e)),
            a = { version: d.version, wallets: [...t.wallets, ...n] },
            r = i.Tq.generate(this._accountMasterKey, (0, c.bo)());
          this._encryptedAccount = await d.encryptAccount(this._accountMasterKey, a);
          let o = { accountAuthToken: r, encryptedAccountInfo: this._encryptedAccount },
            u = await Promise.all(
              e.map(async (e) => {
                let t = {
                  walletId: e.id,
                  walletEncryptionId: e.encryptionId,
                  ethereumAddress: e.ethereumAddress,
                  signature: await e.signMessage(this._encryptedAccount.key.toHexString()),
                };
                switch (e.type) {
                  case i.Sq.PRIVATE_KEY:
                    return { type: i.Sq.PRIVATE_KEY, ...t };
                  case i.Sq.HD:
                    return { type: i.Sq.HD, index: e.index, ...t };
                  default:
                    (0, s.vE)(e, 'Unknown wallet type');
                }
              })
            );
          return { ...o, walletsInfo: u };
        }
        async removeWallet(e) {
          let t = await d.getDecryptedAccountData({
              accountMasterKey: this._accountMasterKey,
              encryptedAccount: this._encryptedAccount,
            }),
            n = { ...t, wallets: t.wallets.filter((t) => !e.equals(t.encryptionId)) },
            a = i.Tq.generate(this._accountMasterKey, (0, c.bo)());
          return (
            (this._encryptedAccount = await d.encryptAccount(this._accountMasterKey, n)),
            { accountAuthToken: a, encryptedAccountInfo: this._encryptedAccount }
          );
        }
        async generateNewRecoveryOfflineCode() {
          let e = new i.RX((0, c.O6)(4)),
            t = new i.wz((0, c.O6)(16)),
            n = await i.Kr.generate(this.id, t, (0, c.oJ)()),
            a = await (0, c.jm)().generateKeyPair(),
            r = new i.cY(a.publicKey),
            s = new i.pI(a.privateKey),
            o = i.MQ.generate(c.O6),
            u = await i.xV.encrypt(this._accountMasterKey, r, (0, c.jm)().encrypt),
            l = new i.p9(await (0, c.rK)().encrypt(s.value, n.value, o.value)),
            d = i.Ur.generate(n, (0, c.bo)()),
            y = i.Sn.generate(t, e);
          return {
            id: e,
            userCode: y,
            recoveryEncryptedAccountMasterKey: u,
            recoveryEncryptedPrivateKeyInfo: { key: l, iv: o },
            recoveryPublicKey: r,
            recoveryAuthToken: d,
          };
        }
        async generateNewDeviceRecoveryKey() {
          return d.generateNewDeviceRecoveryInfo(this._accountMasterKey);
        }
        async generateNextHdWallet(e) {
          let t = (
            await d.getDecryptedAccountData({
              accountMasterKey: this._accountMasterKey,
              encryptedAccount: this._encryptedAccount,
            })
          ).wallets.find((t) => t.encryptionId.equals(e.walletEncryptionId));
          (0, s.kG)(t, 'HD Wallet not found'), (0, s.kG)(t.type === i.Sq.HD, 'HD Wallet not found');
          let n = i.UI.generate(),
            a = await o.j.from({
              walletId: n,
              walletEncryptionId: t.encryptionId,
              mnemonic: t.mnemonic,
              index: e.index,
            }),
            r = {
              type: i.Sq.HD,
              walletId: a.id,
              walletEncryptionId: a.encryptionId,
              ethereumAddress: a.ethereumAddress,
              signature: await a.signMessage(this._encryptedAccount.key.toHexString()),
              index: a.index,
            };
          return {
            accountAuthToken: i.Tq.generate(this._accountMasterKey, (0, c.bo)()),
            encryptedAccount: this._encryptedAccount,
            walletInfo: r,
          };
        }
        async getWallet(e) {
          let t = await d.getDecryptedAccountData({
            accountMasterKey: this._accountMasterKey,
            encryptedAccount: this._encryptedAccount,
          });
          switch (e.type) {
            case i.Sq.PRIVATE_KEY: {
              let n = t.wallets.find((t) => t.encryptionId.equals(e.walletEncryptionId));
              return (
                (0, s.kG)(n, 'Wallet not found'),
                (0, s.kG)(n.type === i.Sq.PRIVATE_KEY, 'Wallet not found'),
                u.K.from({
                  walletId: e.walletId,
                  walletEncryptionId: e.walletEncryptionId,
                  privateKey: n.privateKey,
                })
              );
            }
            case i.Sq.HD: {
              let n = t.wallets.find((t) => t.encryptionId.equals(e.walletEncryptionId));
              return (
                (0, s.kG)(n, 'Wallet not found'),
                (0, s.kG)(n.type === i.Sq.HD, 'Wallet not found'),
                o.j.from({
                  walletId: e.walletId,
                  walletEncryptionId: e.walletEncryptionId,
                  mnemonic: n.mnemonic,
                  index: e.index,
                })
              );
            }
            default:
              (0, s.vE)(e, 'Unknown wallet type');
          }
        }
        serialize() {
          let e =
            this.activeWallet.type === i.Sq.HD
              ? {
                  type: i.Sq.HD,
                  walletId: this.activeWallet.id,
                  walletEncryptionId: this.activeWallet.encryptionId,
                  index: this.activeWallet.index,
                }
              : {
                  type: i.Sq.PRIVATE_KEY,
                  walletId: this.activeWallet.id,
                  walletEncryptionId: this.activeWallet.encryptionId,
                };
          return {
            id: this.id,
            identity: this.identity,
            accountMasterKey: this._accountMasterKey,
            encryptedAccount: this._encryptedAccount,
            activeWallet: e,
          };
        }
        async generateNewEncryptedCredential(e) {
          let t = await (0, c.jm)().generateKeyPair(),
            n = new i.dm(await (0, c.jm)().encrypt(t.publicKey, this._accountMasterKey.value)),
            r = i.MQ.generate(c.O6);
          return {
            key: new i.ay(await (0, c.rK)().encrypt((0, a.W9)(t.privateKey), e.value, r.value)),
            iv: r,
            reencryptionKey: new i.bH(t.publicKey),
            encryptedAccountMasterKey: n,
          };
        }
        static async init(e) {
          let t = await d.getDecryptedAccountData({
            accountMasterKey: e.accountMasterKey,
            encryptedAccount: e.encryptedAccount,
          });
          switch (e.activeWallet.type) {
            case i.Sq.PRIVATE_KEY: {
              let n = t.wallets.find((t) =>
                t.encryptionId.equals(e.activeWallet.walletEncryptionId)
              );
              return (
                (0, s.kG)(n, 'Wallet not found'),
                (0, s.kG)(n.type === i.Sq.PRIVATE_KEY, 'Wallet not found'),
                new d(
                  await u.K.from({
                    walletId: e.activeWallet.walletId,
                    walletEncryptionId: n.encryptionId,
                    privateKey: n.privateKey,
                  }),
                  e.id,
                  e.identity,
                  e.accountMasterKey,
                  e.encryptedAccount
                )
              );
            }
            case i.Sq.HD: {
              let n = t.wallets.find((t) =>
                t.encryptionId.equals(e.activeWallet.walletEncryptionId)
              );
              return (
                (0, s.kG)(n, 'Wallet not found'),
                (0, s.kG)(n.type === i.Sq.HD, 'Wallet not found'),
                new d(
                  await o.j.from({
                    walletId: e.activeWallet.walletId,
                    walletEncryptionId: n.encryptionId,
                    mnemonic: n.mnemonic,
                    index: e.activeWallet.index,
                  }),
                  e.id,
                  e.identity,
                  e.accountMasterKey,
                  e.encryptedAccount
                )
              );
            }
            default:
              (0, s.vE)(e.activeWallet, 'Unknown wallet type');
          }
        }
        static async generateFromDeviceRecoveryKey(e) {
          let {
              identity: t,
              password: n,
              recoveryPrivateKey: s,
              recoveryEncryptedAccountMasterKey: o,
              encryptedAccount: u,
            } = e,
            l = new i.qH(await (0, c.jm)().decrypt(s.toPEMString(), o.value)),
            y = i.Tq.generate(l, (0, c.bo)()),
            p = await (0, c.jm)().generateKeyPair(),
            w = new i.bH(p.publicKey),
            v = await d.getEncryptedAccountMasterKey(l, w),
            E = await i.So.generate(t, n, c.f3),
            h = i.MQ.generate(c.O6),
            m = new i.ay(await (0, c.rK)().encrypt((0, a.W9)(p.privateKey), E.value, h.value)),
            _ = i.Yp.generate(E, (0, c.bo)()),
            f = await d.generateNewDeviceRecoveryInfo(l);
          return {
            identity: t,
            accountAuthToken: y,
            accountMasterKey: l,
            encryptedAccount: u,
            encryptedCredential: {
              key: m,
              iv: h,
              reencryptionKey: w,
              encryptedAccountMasterKey: v,
            },
            credentialType: r.d3.Password,
            credentialMasterKey: E,
            credentialAuthToken: _,
            deviceRecovery: f,
          };
        }
        static async generateFromRecoveryOfflineCode(e) {
          let {
              identity: t,
              password: n,
              recoveryMasterKey: s,
              recoveryEncryptedPrivateKeyInfo: o,
              recoveryEncryptedAccountMasterKey: u,
              encryptedAccountInfo: l,
            } = e,
            y = new i.pI(await (0, c.rK)().decrypt(o.key.value, s.value, o.iv.value)),
            p = new i.qH(await (0, c.jm)().decrypt(y.toPEMString(), u.value)),
            w = i.Tq.generate(p, (0, c.bo)()),
            v = await (0, c.jm)().generateKeyPair(),
            E = new i.bH(v.publicKey),
            h = await d.getEncryptedAccountMasterKey(p, E),
            m = await i.So.generate(t, n, c.f3),
            _ = i.MQ.generate(c.O6),
            f = new i.ay(await (0, c.rK)().encrypt((0, a.W9)(v.privateKey), m.value, _.value)),
            I = i.Yp.generate(m, (0, c.bo)()),
            A = await d.generateNewDeviceRecoveryInfo(p);
          return {
            identity: t,
            accountAuthToken: w,
            accountMasterKey: p,
            encryptedAccount: l,
            encryptedCredential: {
              key: f,
              iv: _,
              reencryptionKey: E,
              encryptedAccountMasterKey: h,
            },
            credentialType: r.d3.Password,
            credentialMasterKey: m,
            credentialAuthToken: I,
            deviceRecovery: A,
          };
        }
        static async generate(e) {
          let { identity: t, credential: n } = e,
            s = await o.j.new(),
            u = d.generateAccountData([s]),
            y = i.qH.generate(c.O6),
            p = i.Tq.generate(y, (0, c.bo)()),
            w = await d.encryptAccount(y, u),
            v = await (0, c.jm)().generateKeyPair(),
            E = new i.bH(v.publicKey),
            h = await d.getEncryptedAccountMasterKey(y, E),
            m = await (0, l.T)(t, n),
            _ = i.MQ.generate(c.O6),
            f = new i.ay(await (0, c.rK)().encrypt((0, a.W9)(v.privateKey), m.value, _.value)),
            I = i.Yp.generate(m, (0, c.bo)()),
            A = await d.generateNewDeviceRecoveryInfo(y),
            g = {
              type: i.Sq.HD,
              walletId: s.id,
              walletEncryptionId: s.encryptionId,
              ethereumAddress: s.ethereumAddress,
              index: s.index,
              signature: await s.signMessage(w.key.toHexString()),
            };
          return {
            identity: t,
            accountAuthToken: p,
            accountMasterKey: y,
            encryptedAccount: w,
            encryptedCredential: {
              key: f,
              iv: _,
              reencryptionKey: E,
              encryptedAccountMasterKey: h,
            },
            credentialType: r.d3.Password,
            credentialMasterKey: m,
            credentialAuthToken: I,
            walletInfo: g,
            deviceRecovery: A,
          };
        }
        static async encryptAccount(e, t) {
          let n = (0, a.W9)(JSON.stringify(t)),
            r = i.MQ.generate(c.O6);
          return { key: new i.eM(await (0, c.rK)().encrypt(n, e.value, r.value)), iv: r };
        }
        static async getEncryptedAccountMasterKey(e, t) {
          return new i.dm(await (0, c.jm)().encrypt(t.toPEMString(), e.value));
        }
        static async getDecryptedAccountMasterKey(e, t) {
          let n = (0, a.IV)(await (0, c.rK)().decrypt(t.key.value, e.value, t.iv.value));
          return new i.qH(await (0, c.jm)().decrypt(n, t.encryptedAccountMasterKey.value));
        }
        static async getDecryptedAccountData(e) {
          let { accountMasterKey: t, encryptedAccount: n } = e,
            r = await (0, c.rK)().decrypt(n.key.value, t.value, n.iv.value),
            o = JSON.parse((0, a.IV)(r));
          return (
            (0, s.kG)(o.version === d.version, 'Version mismatch'),
            {
              version: o.version,
              wallets: o.wallets.map((e) => {
                switch (e.type) {
                  case i.Sq.PRIVATE_KEY:
                    return {
                      type: i.Sq.PRIVATE_KEY,
                      encryptionId: new i._v(e.encryptionId),
                      privateKey: new i._q(e.privateKey),
                    };
                  case i.Sq.HD:
                    return {
                      type: i.Sq.HD,
                      encryptionId: new i._v(e.encryptionId),
                      mnemonic: new i.tS(e.mnemonic),
                    };
                  default:
                    (0, s.vE)(e, 'Unknown wallet type');
                }
              }),
            }
          );
        }
        static generateAccountData(e) {
          return { version: d.version, wallets: e.map((e) => d.generateWalletData(e)) };
        }
        static generateWalletData(e) {
          switch (e.type) {
            case i.Sq.PRIVATE_KEY:
              return {
                type: i.Sq.PRIVATE_KEY,
                encryptionId: e.encryptionId,
                privateKey: e.privateKey,
              };
            case i.Sq.HD:
              return { type: i.Sq.HD, encryptionId: e.encryptionId, mnemonic: e.mnemonic };
            default:
              (0, s.vE)(e, 'Unknown wallet type');
          }
        }
        static async generateNewDeviceRecoveryInfo(e) {
          let t = await (0, c.jm)().generateKeyPair(),
            n = new i.cY(t.publicKey),
            a = new i.pI(t.privateKey),
            r = await i.xV.encrypt(e, n, (0, c.jm)().encrypt);
          return {
            keyPair: { publicKeyId: i.sk.generate(a, c.bo), publicKey: n, privateKey: a },
            recoveryEncryptedAccountMasterKey: r,
          };
        }
        constructor(e, t, n, a, r) {
          (this.activeWallet = e),
            (this._id = t),
            (this._identity = n),
            (this._accountMasterKey = a),
            (this._encryptedAccount = r);
        }
      }
      d.version = 1;
    },
    49022: function (e, t, n) {
      'use strict';
      n.d(t, {
        V: function () {
          return b;
        },
        I: function () {
          return s;
        },
      });
      var a,
        r,
        i,
        s,
        c = n(97137),
        o = n(27520),
        u = n(42716),
        l = n(9284),
        d = n(78756),
        y = n(92216),
        p = n(72990);
      let w = async () => {
        let e = await y.L.query(c.RY, {});
        return (
          (0, l.kG)(e.data, 'Get credentials info API query failed', e.error),
          { info: e.data.getCredentialsInfo.info.map((e) => (0, p.jW)(e)) }
        );
      };
      var v = n(17163),
        E = n(88054);
      let h = () => ({ status: o.z.COMPLETE }),
        m = async (e) => {
          let t = await y.L.mutation(c.KL, (0, u.au)({ request: e }));
          (0, l.kG)(t.data, 'Add credential API query failed', t.error);
          let n = t.data.addCredential;
          switch (n.__typename) {
            case 'AddCredentialResult':
              return h();
            case 'UserLocked':
              return (0, v.m)(n.until);
            case 'InvalidCredentials':
              return (0, E.C)();
            default:
              (0, l.vE)(n, 'Unhandled add credential response type');
          }
        },
        _ = () => ({ status: o.z.COMPLETE }),
        f = async (e) => {
          let t = await y.L.mutation(c.PL, (0, u.au)({ request: e }));
          (0, l.kG)(t.data, 'Remove credential API query failed', t.error);
          let n = t.data.removeCredential;
          switch (n.__typename) {
            case 'RemoveCredentialResult':
              return _();
            case 'UserLocked':
              return (0, v.m)(n.until);
            case 'InvalidCredentials':
              return (0, E.C)();
            default:
              (0, l.vE)(n, 'Unhandled remove credential response type');
          }
        },
        I = () => ({ status: o.z.COMPLETE }),
        A = async (e) => {
          let t = await y.L.mutation(c.Ph, (0, u.au)({ request: e }));
          (0, l.kG)(t.data, 'Add credential API query failed', t.error);
          let n = t.data.changePassword;
          switch (n.__typename) {
            case 'ChangePasswordResult':
              return I();
            case 'UserLocked':
              return (0, v.m)(n.until);
            case 'InvalidCredentials':
              return (0, E.C)();
            default:
              (0, l.vE)(n, 'Unhandled add credential response type');
          }
        },
        g = async (e) => {
          let t = await y.L.mutation(c.eK, (0, u.au)({ request: e }));
          (0, l.kG)(t.data, 'Update passkey info API query failed', t.error);
        };
      var C = n(59967),
        S = n(75375);
      let D = () => ({ status: o.z.APPROVAL_CODE }),
        R = async (e) => {
          let t = await y.L.mutation(c.jX, (0, u.au)({ request: e }));
          (0, l.kG)(t.data, 'Change username start API mutation failed', t.error);
          let n = t.data.changeUsernameStart;
          switch (n.__typename) {
            case 'InvalidUsername':
              return (0, S.L)(n.reason);
            case 'ChangeUsernameStartResult':
              return D();
            case 'UserLocked':
              return (0, v.m)(n.until);
            case 'InvalidCredentials':
              return (0, E.C)();
            default:
              (0, l.vE)(n, 'Unhandled change username server key info type');
          }
        };
      ((a = i || (i = {})).SUCCESS = 'SUCCESS'),
        (a.USERNAME_ALREADY_TAKEN = 'USERNAME_ALREADY_TAKEN'),
        (a.INVALID_CODE = 'INVALID_CODE'),
        (a.USER_LOCKED = 'USER_LOCKED');
      let K = async (e) => {
          let t = await y.L.mutation(c.wG, { request: (0, u.au)(e) });
          (0, l.kG)(t.data, 'Change username complete API query failed', t.error);
          let n = t.data.changeUsernameComplete;
          switch (n.__typename) {
            case 'ChangeUsernameCompleteResult':
              return { status: i.SUCCESS };
            case 'UsernameAlreadyTaken':
              return { status: i.USERNAME_ALREADY_TAKEN };
            case 'ApprovalCodeResult':
              return { status: i.INVALID_CODE };
            case 'UserLocked':
              return { status: i.USER_LOCKED, until: new Date(n.until) };
            default:
              (0, l.vE)(n, 'Unhandled change username complete response type');
          }
        },
        P = (e) => {
          var t, n, a, r, i, s, c, o, l;
          return {
            metadata: {
              picture:
                null !== (s = null === (t = e.metadata) || void 0 === t ? void 0 : t.picture) &&
                void 0 !== s
                  ? s
                  : void 0,
              emoji:
                null !== (c = null === (n = e.metadata) || void 0 === n ? void 0 : n.emoji) &&
                void 0 !== c
                  ? c
                  : void 0,
              icon:
                null !== (o = null === (a = e.metadata) || void 0 === a ? void 0 : a.icon) &&
                void 0 !== o
                  ? o
                  : void 0,
              color: (null === (r = e.metadata) || void 0 === r ? void 0 : r.color)
                ? new u.ZR(e.metadata.color)
                : void 0,
              name:
                null !== (l = null === (i = e.metadata) || void 0 === i ? void 0 : i.name) &&
                void 0 !== l
                  ? l
                  : void 0,
            },
          };
        },
        k = async () => {
          let e = await y.L.query(c.en, (0, u.au)({}));
          return (
            (0, l.kG)(e.data, 'meApi: Expected response.data to be defined', e.error), P(e.data.me)
          );
        };
      var L = n(81748);
      let N = async (e) => {
        let t = await y.L.mutation(c._t, { request: (0, u.au)({ metadata: e }) });
        return (
          (0, l.kG)(
            t.data,
            'editAccountMetadataApi: Expected response.data to be defined',
            t.error
          ),
          P(t.data.editAccountMetadata)
        );
      };
      var O = n(82436),
        x = n(70294),
        U = n(96449),
        T = n(3703),
        M = n(86552);
      ((r = s || (s = {})).SUCCESS = 'SUCCESS'),
        (r.APPROVAL_CODE_REQUIRED = 'APPROVAL_CODE_REQUIRED'),
        (r.NOT_CURRENT_PASSWORD = 'NOT_CURRENT_PASSWORD'),
        (r.INVALID_CODE = 'INVALID_CODE'),
        (r.INVALID_USERNAME = 'INVALID_USERNAME'),
        (r.INVALID_PASSWORD = 'INVALID_PASSWORD'),
        (r.USER_LOCKED = 'USER_LOCKED'),
        (r.USERNAME_ALREADY_TAKEN = 'USERNAME_ALREADY_TAKEN');
      class b extends T.B {
        async getMe() {
          return k();
        }
        async getCredentialsInfo() {
          let { info: e } = await w();
          return e;
        }
        async changeUsernameStart(e, t) {
          this.resetState();
          let { account: n } = await this.sessionSdk.requireCurrent(),
            a = n.identity;
          if (((0, l.kG)(a instanceof u.Ru, "Not a 'Username' identity"), !(0, U.r)(e).isValid))
            return { status: s.INVALID_USERNAME, reason: c.wR.FormatInvalid };
          let r = new u.Ru(e),
            i = (0, x.u)(t);
          if (!i.valid) return { status: s.INVALID_PASSWORD };
          let y = await (0, M.T)(n.identity, i),
            p = u.Yp.generate(y, (0, d.bo)()),
            w = await R({
              currentUsername: a,
              newUsername: r,
              credentialAuthToken: p,
              passkeySignatureInfo: i.type === c.d3.Passkey ? i.passkeySignatureInfo : void 0,
            });
          switch (w.status) {
            case o.z.INVALID_USERNAME:
              return { status: s.INVALID_USERNAME, reason: w.reason };
            case o.z.INVALID_CREDENTIAL:
              return { status: s.INVALID_PASSWORD };
            case o.z.LOCKED:
              return { status: s.USER_LOCKED, until: w.until };
            case o.z.APPROVAL_CODE:
              return (
                (this.state.newUsername = r),
                (this.state.currentMasterKey = y),
                (this.state.currentCredentialInfo = i),
                { status: s.APPROVAL_CODE_REQUIRED }
              );
            default:
              (0, l.vE)(w, 'Change username start api returned an unknown result');
          }
        }
        async changeUsernameResendValidationCode() {
          this._validateState();
          let { account: e } = await this.sessionSdk.requireCurrent(),
            t = e.identity;
          (0, l.kG)(t instanceof u.Ru, "Not a 'Username' identity");
          let n = u.Yp.generate(this.state.currentMasterKey, (0, d.bo)());
          await R({
            currentUsername: t,
            newUsername: this.state.newUsername,
            credentialAuthToken: n,
            passkeySignatureInfo:
              this.state.currentCredentialInfo.type === c.d3.Passkey
                ? this.state.currentCredentialInfo.passkeySignatureInfo
                : void 0,
          });
        }
        async changeUsernameComplete(e) {
          this._validateState();
          let t = await this._completeChangeUsername(new u.lg(e));
          switch (t.status) {
            case s.SUCCESS: {
              let { account: e } = await this.sessionSdk.requireCurrent();
              return (
                await this.sessionSdk.changeAccount(
                  await O.d.init({ ...e.serialize(), identity: this.state.newUsername })
                ),
                { status: s.SUCCESS }
              );
            }
            case s.INVALID_CODE:
              return { status: s.INVALID_CODE };
            case s.USERNAME_ALREADY_TAKEN:
              return { status: s.USERNAME_ALREADY_TAKEN };
            case s.USER_LOCKED:
              return { status: s.USER_LOCKED, until: t.until };
            default:
              (0, l.vE)(t, 'Change username complete api returned an unknown result');
          }
        }
        async addCredential(e, t) {
          this.resetState();
          let { account: n } = await this.sessionSdk.requireCurrent(),
            a = (0, x.u)(e);
          if (!a.valid) return { status: s.NOT_CURRENT_PASSWORD };
          let r = (0, x.u)(t);
          if (!r.valid) return { status: s.INVALID_PASSWORD };
          let [i, y] = await Promise.all([
              await (0, M.T)(n.identity, a),
              await (0, M.T)(n.identity, r),
            ]),
            p = u.Yp.generate(i, (0, d.bo)()),
            w = u.Yp.generate(y, (0, d.bo)()),
            v = await n.generateNewEncryptedCredential(y),
            E = await m({
              rawIdentity: n.identity,
              activeCredentialAuthToken: p,
              activePasskeySignatureInfo: a.type === c.d3.Passkey ? a.passkeySignatureInfo : void 0,
              credentialType: r.type,
              credentialAuthToken: w,
              passkeyInfo: r.type === c.d3.Passkey ? r.passkeyInfo : void 0,
              encryptedCredential: v,
            });
          switch (E.status) {
            case o.z.INVALID_CREDENTIAL:
              return { status: s.NOT_CURRENT_PASSWORD };
            case o.z.LOCKED:
              return { status: s.USER_LOCKED, until: E.until };
            case o.z.COMPLETE:
              return { status: s.SUCCESS };
            default:
              (0, l.vE)(E, 'Add credential api returned an unknown result');
          }
        }
        async removeCredential(e, t) {
          this.resetState();
          let { account: n } = await this.sessionSdk.requireCurrent(),
            a = (0, x.u)(e);
          if (!a.valid) return { status: s.NOT_CURRENT_PASSWORD };
          let r = await (0, M.T)(n.identity, a),
            i = u.Yp.generate(r, (0, d.bo)()),
            y = await f({
              rawIdentity: n.identity,
              activeCredentialAuthToken: i,
              activePasskeySignatureInfo: a.type === c.d3.Passkey ? a.passkeySignatureInfo : void 0,
              credentialType: t.type,
              passkeyCredentialId: t.type === c.d3.Passkey ? t.credentialId : void 0,
            });
          switch (y.status) {
            case o.z.INVALID_CREDENTIAL:
              return { status: s.NOT_CURRENT_PASSWORD };
            case o.z.LOCKED:
              return { status: s.USER_LOCKED, until: y.until };
            case o.z.COMPLETE:
              return { status: s.SUCCESS };
            default:
              (0, l.vE)(y, 'Remove credential api returned an unknown result');
          }
        }
        async changePassword(e, t) {
          this.resetState();
          let { account: n } = await this.sessionSdk.requireCurrent(),
            a = (0, x.u)(e);
          if (!a.valid) return { status: s.NOT_CURRENT_PASSWORD };
          let r = (0, x.u)(t);
          if (!r.valid) return { status: s.INVALID_PASSWORD };
          let [i, y] = await Promise.all([
              await (0, M.T)(n.identity, a),
              await (0, M.T)(n.identity, r),
            ]),
            p = u.Yp.generate(i, (0, d.bo)()),
            w = u.Yp.generate(y, (0, d.bo)()),
            v = await n.generateNewEncryptedCredential(y),
            E = await A({
              rawIdentity: n.identity,
              activeCredentialAuthToken: p,
              activePasskeySignatureInfo: a.type === c.d3.Passkey ? a.passkeySignatureInfo : void 0,
              credentialAuthToken: w,
              encryptedCredential: v,
            });
          switch (E.status) {
            case o.z.INVALID_CREDENTIAL:
              return { status: s.NOT_CURRENT_PASSWORD };
            case o.z.LOCKED:
              return { status: s.USER_LOCKED, until: E.until };
            case o.z.COMPLETE:
              return { status: s.SUCCESS };
            default:
              (0, l.vE)(E, 'Change password api returned an unknown result');
          }
        }
        async updatePasskeyInfo(e) {
          await g(e);
        }
        async verifyCredential(e) {
          let { account: t } = await this.sessionSdk.requireCurrent(),
            n = (0, x.u)(e);
          if (!n.valid) return { status: C.R.INVALID };
          let a = await (0, M.T)(t.identity, n),
            r = u.Yp.generate(a, (0, d.bo)());
          return (0, C.W)({
            rawIdentity: t.identity,
            credentialAuthToken: r,
            passkeySignatureInfo: n.type === c.d3.Passkey ? n.passkeySignatureInfo : void 0,
          });
        }
        async editAccountMetadata(e) {
          return N(e);
        }
        async uploadAccountPicture(e) {
          (0, l.kG)(e.size > 0, 'Trying to upload an empty file'),
            (0, l.kG)((0, l.Jo)(L.H, e.type), 'Unsupported mime type');
          let t = await (0, L.P)(c.Tv.AccountPicture, e.type),
            n = await fetch(t, { method: 'PUT', body: e });
          return (0, l.kG)(n.ok, 'Failed to upload picture'), t;
        }
        resetState() {
          (this.state.newUsername = void 0), (this.state.currentMasterKey = void 0);
        }
        async _completeChangeUsername(e) {
          let t;
          this._validateState();
          let { account: n } = await this.sessionSdk.requireCurrent();
          switch (this.state.currentCredentialInfo.type) {
            case c.d3.Password: {
              let a = await (0, M.T)(this.state.newUsername, this.state.currentCredentialInfo),
                [r, i, s] = await Promise.all([
                  u.Yp.generate(this.state.currentMasterKey, (0, d.bo)()),
                  u.Yp.generate(a, (0, d.bo)()),
                  n.generateNewEncryptedCredential(a),
                ]);
              t = await K({
                newUsername: this.state.newUsername,
                validationCode: e,
                currentPasswordCredentialAuthToken: r,
                newPasswordCredentialAuthToken: i,
                newEncryptedPasswordCredential: s,
              });
              break;
            }
            case c.d3.Passkey:
              t = await K({ newUsername: this.state.newUsername, validationCode: e });
              break;
            default:
              (0, l.vE)(this.state.currentCredentialInfo, 'Unknown credential type');
          }
          switch (t.status) {
            case i.SUCCESS:
              return { status: s.SUCCESS };
            case i.INVALID_CODE:
              return { status: s.INVALID_CODE };
            case i.USERNAME_ALREADY_TAKEN:
              return { status: s.USERNAME_ALREADY_TAKEN };
            case i.USER_LOCKED:
              return { status: s.USER_LOCKED, until: t.until };
            default:
              (0, l.vE)(t, 'Unknown change username result');
          }
        }
        _validateState() {
          if (
            !(
              void 0 !== this.state.newUsername &&
              void 0 !== this.state.currentMasterKey &&
              void 0 !== this.state.currentCredentialInfo
            )
          )
            throw Error(
              'You can not call this method directly without calling startChangeUsername first to start the process'
            );
        }
        constructor(e) {
          super(),
            (this.state = {
              newUsername: void 0,
              currentMasterKey: void 0,
              currentCredentialInfo: void 0,
            }),
            (this.sessionSdk = e);
        }
      }
    },
    3703: function (e, t, n) {
      'use strict';
      n.d(t, {
        B: function () {
          return a;
        },
      });
      class a {}
    },
    86552: function (e, t, n) {
      'use strict';
      n.d(t, {
        T: function () {
          return c;
        },
      });
      var a = n(42716),
        r = n(97137),
        i = n(78756),
        s = n(9284);
      let c = (e, t) => {
        switch (t.type) {
          case r.d3.Password:
            return a.So.generate(e, t.userKey, i.f3);
          case r.d3.Passkey:
            return a.V1.generate(t.credentialId, t.userKey, i.f3);
          default:
            return (0, s.vE)(t);
        }
      };
    },
    70294: function (e, t, n) {
      'use strict';
      n.d(t, {
        u: function () {
          return s;
        },
      });
      var a = n(42716),
        r = n(97137),
        i = n(9284);
      let s = (e) => {
        switch (e.type) {
          case r.d3.Password:
            if (!a.ro.validatePassword(e.value).result) return { valid: !1 };
            return { valid: !0, type: r.d3.Password, userKey: new a.ro(e.value) };
          case r.d3.Passkey: {
            let t = {
              valid: !0,
              type: r.d3.Passkey,
              credentialId: e.credentialId,
              userKey: e.password,
            };
            if ('challengeId' in e)
              return {
                ...t,
                passkeySignatureInfo: {
                  id: e.challengeId,
                  signature: e.signature,
                  authenticatorData: e.authenticatorData,
                  clientData: e.clientData,
                },
              };
            return {
              ...t,
              passkeyInfo: {
                name: e.name,
                authenticatorData: e.authenticatorData,
                clientData: e.clientData,
              },
            };
          }
          default:
            (0, i.vE)(e, 'Invalid credentials type');
        }
      };
    },
    96449: function (e, t, n) {
      'use strict';
      n.d(t, {
        r: function () {
          return i;
        },
      });
      var a = n(9284),
        r = n(42716);
      let i = (e) =>
        (0, a.oH)(e)
          ? { isValid: !0, type: r.F0.EMAIL }
          : (0, a.Y0)(e)
            ? { isValid: !0, type: r.F0.PHONE }
            : { isValid: !1 };
    },
    78756: function (e, t, n) {
      'use strict';
      let a;
      n.d(t, {
        O6: function () {
          return y;
        },
        bo: function () {
          return o;
        },
        d9: function () {
          return w;
        },
        f3: function () {
          return l;
        },
        gz: function () {
          return s;
        },
        iA: function () {
          return p;
        },
        jB: function () {
          return r;
        },
        jm: function () {
          return d;
        },
        oJ: function () {
          return u;
        },
        rK: function () {
          return c;
        },
      });
      let r = (e) => {
          a = e;
        },
        i = () => {
          if (void 0 === a)
            throw Error('Encryption standards has not been set! make sure you init on load');
          return a;
        },
        s = () => {
          i();
        },
        c = () => i().aes,
        o = () => i().keccak,
        u = () => i().scrypt,
        l = (e, t) => u()(e, t),
        d = () => i().rsa,
        y = (e) => i().randomBytes(e),
        p = (e) => i().crockfordBase32.encode(e),
        w = (e) => i().crockfordBase32.decode(e);
    },
    62193: function (e, t, n) {
      'use strict';
      let a;
      n.d(t, {
        W4: function () {
          return r;
        },
        ob: function () {
          return i;
        },
        xw: function () {
          return s;
        },
      });
      let r = (e) => {
          a = e;
        },
        i = () => {
          if (void 0 === a)
            throw Error('Ether Wallet Constructor has not been set! make sure you init on load');
          return a;
        },
        s = () => {
          i();
        };
    },
    12103: function (e, t, n) {
      'use strict';
      n.d(t, {
        j: function () {
          return c;
        },
      });
      var a = n(42716),
        r = n(78756),
        i = n(62193);
      let s = async () => {
        let { generateRandomMnemonicViem: e } = await Promise.all([n.e(987), n.e(3111)]).then(
          n.bind(n, 93111)
        );
        return e();
      };
      class c {
        get id() {
          return this._id;
        }
        get encryptionId() {
          return this._encryptionId;
        }
        get index() {
          return this._index;
        }
        get privateKey() {
          return new a._q(this._wallet.privateKey);
        }
        get mnemonic() {
          return this._mnemonic;
        }
        get ethereumAddress() {
          return new a.y1(this._wallet.address);
        }
        async signMessage(e) {
          let t = await this._wallet.signMessage(e);
          return new a.Pc(t);
        }
        async newForIndex(e) {
          return c.from({
            walletId: a.UI.generate(),
            walletEncryptionId: this.encryptionId,
            mnemonic: this.mnemonic,
            index: e,
          });
        }
        static async new(e) {
          var t, n, r;
          let o = null !== (t = null == e ? void 0 : e.mnemonic) && void 0 !== t ? t : await s(),
            u = null !== (n = null == e ? void 0 : e.index) && void 0 !== n ? n : 0,
            l = o.buildPath(u),
            d = await (0, i.ob)().fromMnemonic(o.value, l);
          return new c({
            id: a.UI.generate(),
            encryptionId:
              null !== (r = null == e ? void 0 : e.walletEncryptionId) && void 0 !== r
                ? r
                : a._v.generate(),
            mnemonic: o,
            wallet: d,
            index: u,
          });
        }
        static async from(e) {
          let { walletId: t, walletEncryptionId: n, mnemonic: a, index: r } = e,
            s = a.buildPath(r),
            o = await (0, i.ob)().fromMnemonic(a.value, s);
          return new c({ id: t, encryptionId: n, mnemonic: a, wallet: o, index: r });
        }
        constructor(e) {
          (this.type = a.Sq.HD),
            (0, r.gz)(),
            (0, i.xw)(),
            (this._id = e.id),
            (this._encryptionId = e.encryptionId),
            (this._mnemonic = e.mnemonic),
            (this._wallet = e.wallet),
            (this._index = e.index);
        }
      }
    },
    23733: function (e, t, n) {
      'use strict';
      n.d(t, {
        K: function () {
          return s;
        },
      });
      var a = n(42716),
        r = n(78756),
        i = n(62193);
      class s {
        get id() {
          return this._id;
        }
        get encryptionId() {
          return this._encryptionId;
        }
        get privateKey() {
          return new a._q(this._wallet.privateKey);
        }
        get ethereumAddress() {
          return new a.y1(this._wallet.address);
        }
        async signMessage(e) {
          let t = await this._wallet.signMessage(e);
          return new a.Pc(t);
        }
        static async new(e) {
          let t = await (0, i.ob)().fromPrivateKey(e.privateKey.toHexString());
          return new s({ id: a.UI.generate(), encryptionId: a._v.generate(), wallet: t });
        }
        static async from(e) {
          let { walletId: t, walletEncryptionId: n, privateKey: a } = e;
          return new s({
            id: t,
            encryptionId: n,
            wallet: await (0, i.ob)().fromPrivateKey(a.toHexString()),
          });
        }
        constructor(e) {
          (this.type = a.Sq.PRIVATE_KEY),
            (0, r.gz)(),
            (0, i.xw)(),
            (this._id = e.id),
            (this._encryptionId = e.encryptionId),
            (this._wallet = e.wallet);
        }
      }
    },
    26502: function (e) {
      e.exports = { container: 'styles_container__rIfAL' };
    },
    52191: function (e) {
      e.exports = {
        prefix: 'styles_prefix__su_9q',
        container: 'styles_container__5FlD9',
        inputContainer: 'styles_inputContainer__25xLd',
        shake: 'styles_shake__s20ZM',
        iconContainer: 'styles_iconContainer__E12Mn',
        readOnly: 'styles_readOnly__5sWGD',
        action: 'styles_action__tunHl',
        label: 'styles_label__sr2pU',
        inputWrapper: 'styles_inputWrapper__SpcxU',
        readOnlyContainer: 'styles_readOnlyContainer__WEOcT',
        spinner: 'styles_spinner__rl7ov',
      };
    },
    87220: function (e) {
      e.exports = {
        contentAnimEnter: 'animations_contentAnimEnter__S_1eu',
        enterPop: 'animations_enterPop__qEMBO',
        contentAnimExit: 'animations_contentAnimExit__KeBZQ',
        exitPop: 'animations_exitPop__STGR6',
        attentionAnim: 'animations_attentionAnim__7TCgx',
        attention: 'animations_attention__kCwGo',
      };
    },
    93161: function (e) {
      e.exports = {
        container: 'styles_container__YQ922',
        content: 'styles_content__mTOfw',
        arrow: 'styles_arrow__BtrCR',
        inner: 'styles_inner__cL18y',
      };
    },
  },
]);
