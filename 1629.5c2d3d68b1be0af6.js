(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1629],
  {
    12668: (e, t, r) => {
      'use strict';
      r.d(t, { E8: () => c, M8: () => a, aG: () => o, uF: () => l });
      var n = r(63388),
        c = (function (e) {
          return (
            (e.PROCESSING_BY_SMART_CONTRACT_WALLET = 'PROCESSING_BY_SMART_CONTRACT_WALLET'),
            (e.PROCESSING = 'PROCESSING'),
            (e.PROCESSED = 'PROCESSED'),
            (e.SUCCESS = 'SUCCESS'),
            (e.FAILED = 'FAILED'),
            (e.REVERTED = 'REVERTED'),
            e
          );
        })({}),
        a = (function (e) {
          return (
            (e.PROPOSAL = 'PROPOSAL'),
            (e.EXECUTION = 'EXECUTION'),
            (e.SKIP_EXPIRED = 'SKIP_EXPIRED'),
            e
          );
        })({});
      let i = new n.A(),
        o = i.dispatch.bind(i),
        l = i.subscribe.bind(i);
      Object.values(c).forEach((e) => {
        l(e, (t) => {
          console.info('Recovery '.concat(e, ' event received'), t);
        });
      });
    },
    27728: (e) => {
      e.exports = { card: 'styles_card__BVICi', button: 'styles_button__HYtSw' };
    },
    46913: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => f });
      var n,
        c,
        a = r(6029),
        i = r(84942),
        o = r(97104),
        l = r(85745),
        s = r(48253),
        d = r(72207),
        u = r(91370),
        x = r(55729),
        C = ['title', 'titleId'];
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      let h = function (e) {
        var t = e.title,
          r = e.titleId,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              c = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
            }
            return c;
          })(e, C);
        return x.createElement(
          'svg',
          E(
            {
              width: 80,
              height: 80,
              viewBox: '0 0 80 80',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              'aria-labelledby': r,
            },
            a
          ),
          t ? x.createElement('title', { id: r }, t) : null,
          n ||
            (n = x.createElement(
              'g',
              { clipPath: 'url(#clip0_1002_19576)' },
              x.createElement('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M40 0C62.0913 0 80 17.9087 80 40C80 62.0913 62.0913 80 40 80C17.9096 80 0 62.0913 0 40C0 17.9087 17.9096 0 40 0Z',
                className: 'illustration-background-warning-fill',
                fill: '#FFF1EE',
              }),
              x.createElement(
                'g',
                { clipPath: 'url(#clip1_1002_19576)' },
                x.createElement('path', {
                  d: 'M40 21.6666C37.5016 21.6567 35.028 22.1622 32.7338 23.1516C30.4397 24.1409 28.3742 25.5929 26.6666 27.4166V24.1666C26.6694 23.9251 26.6195 23.6858 26.5206 23.4653C26.4217 23.2449 26.276 23.0486 26.0937 22.8901C25.9114 22.7316 25.6968 22.6146 25.4648 22.5472C25.2327 22.4798 24.9888 22.4637 24.75 22.5C24.3457 22.5784 23.982 22.7968 23.7228 23.1169C23.4637 23.437 23.3258 23.8382 23.3333 24.25V31.6666C23.3333 32.1087 23.5089 32.5326 23.8215 32.8452C24.134 33.1577 24.5579 33.3333 25 33.3333H32.5C32.7416 33.3361 32.9809 33.2862 33.2013 33.1873C33.4217 33.0884 33.618 32.9427 33.7765 32.7604C33.9351 32.5781 34.0521 32.3635 34.1194 32.1314C34.1868 31.8994 34.2029 31.6555 34.1666 31.4166C34.0883 31.0123 33.8698 30.6486 33.5497 30.3895C33.2296 30.1304 32.8284 29.9925 32.4166 30H28.8333C30.7746 27.8381 33.3019 26.2866 36.1082 25.5339C38.9146 24.7812 41.8791 24.8598 44.6417 25.76C47.4042 26.6603 49.8458 28.3435 51.6699 30.6051C53.4939 32.8667 54.6218 35.6094 54.9166 38.5C54.9581 38.9125 55.1518 39.2948 55.46 39.5722C55.7682 39.8495 56.1687 40.0021 56.5833 40C56.8169 40.0012 57.0482 39.9532 57.2621 39.8592C57.476 39.7652 57.6677 39.6273 57.8249 39.4545C57.982 39.2816 58.1011 39.0776 58.1743 38.8557C58.2476 38.6339 58.2733 38.3991 58.25 38.1666C57.7953 33.6431 55.6761 29.4498 52.3037 26.4007C48.9313 23.3517 44.5463 21.6645 40 21.6666Z',
                  fill: '#FF8061',
                }),
                x.createElement('path', {
                  d: 'M55.0001 46.6667H47.5001C47.2585 46.664 47.0192 46.7138 46.7987 46.8127C46.5783 46.9116 46.382 47.0573 46.2235 47.2396C46.065 47.4219 45.948 47.6365 45.8806 47.8686C45.8132 48.1006 45.7971 48.3445 45.8334 48.5834C45.9118 48.9877 46.1302 49.3514 46.4503 49.6105C46.7704 49.8696 47.1716 50.0075 47.5834 50H51.1667C49.2255 52.1619 46.6981 53.7134 43.8918 54.4661C41.0854 55.2188 38.1209 55.1402 35.3584 54.24C32.5958 53.3397 30.1542 51.6565 28.3302 49.3949C26.5061 47.1333 25.3782 44.3906 25.0834 41.5C25.0419 41.0875 24.8482 40.7052 24.54 40.4278C24.2318 40.1505 23.8313 39.9979 23.4167 40C23.1831 39.9988 22.9518 40.0468 22.7379 40.1408C22.524 40.2348 22.3323 40.3727 22.1751 40.5455C22.018 40.7184 21.8989 40.9224 21.8257 41.1443C21.7525 41.3661 21.7267 41.6009 21.7501 41.8334C22.1001 45.3324 23.4491 48.657 25.6361 51.4107C27.8232 54.1644 30.7561 56.2309 34.085 57.364C37.414 58.4971 40.9986 58.6489 44.4115 57.8012C47.8243 56.9536 50.9214 55.1423 53.3334 52.5834V55.8334C53.3307 56.0749 53.3805 56.3142 53.4794 56.5347C53.5783 56.7551 53.724 56.9514 53.9063 57.1099C54.0886 57.2684 54.3032 57.3854 54.5353 57.4528C54.7673 57.5202 55.0112 57.5363 55.2501 57.5C55.6544 57.4216 56.0181 57.2032 56.2772 56.8831C56.5363 56.563 56.6742 56.1618 56.6667 55.75V48.3334C56.6667 47.8913 56.4911 47.4674 56.1786 47.1548C55.866 46.8423 55.4421 46.6667 55.0001 46.6667Z',
                  fill: '#FF8061',
                }),
                x.createElement('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M46.6404 38.6411H41.3589V33.3596C41.3589 32.6091 40.7505 32 39.9993 32C39.2488 32 38.6397 32.6091 38.6397 33.3596V38.6411H33.3596C32.6084 38.6411 32 39.2502 32 40.0007C32 40.7512 32.6084 41.3603 33.3596 41.3603H38.6397V46.6411C38.6397 47.3916 39.2488 48.0007 39.9993 48.0007C40.7505 48.0007 41.3589 47.3916 41.3589 46.6411V41.3603H46.6404C47.3909 41.3603 48 40.7512 48 40.0007C48 39.2502 47.3909 38.6411 46.6404 38.6411Z',
                  fill: '#FF8061',
                })
              )
            )),
          c ||
            (c = x.createElement(
              'defs',
              null,
              x.createElement(
                'clipPath',
                { id: 'clip0_1002_19576' },
                x.createElement('rect', { width: 80, height: 80, fill: 'white' })
              ),
              x.createElement(
                'clipPath',
                { id: 'clip1_1002_19576' },
                x.createElement('rect', {
                  width: 40,
                  height: 40,
                  fill: 'white',
                  transform: 'translate(20 20)',
                })
              )
            ))
        );
      };
      var p = r(88271),
        v = r(72830),
        y = r(27728),
        R = r.n(y),
        m = r(38858);
      function f(e) {
        let { orientation: t = 'vertical', onClose: r, recovery: n } = e,
          { isExecutable: c, isExpired: x, remainingSeconds: C } = (0, d.y)(n),
          E = (0, s.useRouter)(),
          y = async () => {
            await E.push({ pathname: v.S.transactions.queue, query: E.query }), null == r || r();
          },
          f = (0, a.jsx)(h, {}),
          g = c
            ? 'Account can be recovered'
            : x
              ? 'Account recovery expired'
              : 'Account recovery in progress',
          A = c
            ? 'The review window has passed and it is now possible to execute the recovery proposal.'
            : x
              ? 'The pending recovery proposal has expired and needs to be cancelled before a new one can be created.'
              : 'The recovery process has started. This Account will be ready to recover in:',
          S = (0, a.jsx)(i.A, {
            ...o.a.LEARN_MORE,
            label: 'in-progress-card',
            children: (0, a.jsx)(p.A, {
              href: m.tF.RECOVERY,
              title: m.pY.RECOVERY,
              children: 'Learn more',
            }),
          });
        return 'horizontal' === t
          ? (0, a.jsx)(l.ZpM, {
              sx: { py: 3, px: 4 },
              children: (0, a.jsxs)(l.xA9, {
                container: !0,
                sx: {
                  display: 'flex',
                  alignItems: { xs: 'flex-start', md: 'center' },
                  gap: 3,
                  flexDirection: { xs: 'column', md: 'row' },
                },
                children: [
                  (0, a.jsx)(l.xA9, { item: !0, children: f }),
                  (0, a.jsxs)(l.xA9, {
                    item: !0,
                    xs: !0,
                    children: [
                      (0, a.jsx)(l.o5u, {
                        variant: 'h6',
                        sx: { fontWeight: 700, mb: 1 },
                        children: g,
                      }),
                      (0, a.jsx)(l.o5u, { sx: { color: 'primary.light', mb: 1 }, children: A }),
                      (0, a.jsx)(u.G, { seconds: C }),
                    ],
                  }),
                  (0, a.jsx)(l.xA9, { item: !0, children: S }),
                ],
              }),
            })
          : (0, a.jsx)(l.ZpM, {
              elevation: 0,
              className: R().card,
              children: (0, a.jsxs)(l.xA9, {
                container: !0,
                sx: { display: 'flex', flexDirection: 'column', gap: 4 },
                children: [
                  (0, a.jsxs)(l.xA9, {
                    item: !0,
                    xs: 12,
                    sx: { display: 'flex', justifyContent: 'space-between' },
                    children: [f, S],
                  }),
                  (0, a.jsxs)(l.xA9, {
                    item: !0,
                    xs: 12,
                    children: [
                      (0, a.jsx)(l.o5u, {
                        variant: 'h6',
                        sx: { fontWeight: 700, mb: 2 },
                        children: g,
                      }),
                      (0, a.jsx)(l.o5u, { sx: { mb: 2 }, children: A }),
                      (0, a.jsx)(u.G, { seconds: C }),
                    ],
                  }),
                  (0, a.jsx)(l.cGx, { flexItem: !0, sx: { mx: -4 } }),
                  (0, a.jsx)(i.A, {
                    ...o.a.CHECK_RECOVERY_PROPOSAL,
                    children: (0, a.jsx)(l.$nd, {
                      'data-testid': 'queue-btn',
                      variant: 'contained',
                      onClick: y,
                      sx: { alignSelf: 'flex-end' },
                      children: 'Go to queue',
                    }),
                  }),
                ],
              }),
            });
      }
    },
    55632: (e, t, r) => {
      'use strict';
      r.d(t, { u: () => R });
      var n = r(6029),
        c = r(84942),
        a = r(85205),
        i = r(97104),
        o = r(85745),
        l = r(55729),
        s = r(97488),
        d = r(88271),
        u = r(68340),
        x = r(51110),
        C = r(77978),
        E = r(81173),
        h = r(27728),
        p = r.n(h),
        v = r(12426),
        y = r(38858);
      let R = (0, C.A)(
        function (e) {
          let { orientation: t = 'vertical', onClose: r, safe: l, setTxFlow: x } = e,
            C = (0, s.D)(),
            E = async () => {
              null == r || r(),
                x((0, n.jsx)(u.K3, {})),
                (0, a.sx)({
                  ...i.a.START_RECOVERY,
                  label: 'vertical' === t ? 'pop-up' : 'dashboard',
                });
            },
            h = (0, n.jsx)('img', {
              src: '/images/common/propose-recovery-'.concat(C ? 'dark' : 'light', '.svg'),
              alt: 'An arrow surrounding a circle containing a vault',
            }),
            R = 'Recover this Account',
            m =
              'The connected wallet was chosen as a trusted Recoverer. You can help the owner'.concat(
                (0, v.Tz)(l.owners),
                ' regain access by resetting the Account setup.'
              ),
            f = (0, n.jsx)(c.A, {
              ...i.a.LEARN_MORE,
              label: 'proposal-card',
              children: (0, n.jsx)(d.A, {
                href: y.tF.RECOVERY,
                title: y.pY.RECOVERY,
                children: 'Learn more',
              }),
            }),
            g = (0, n.jsx)(o.$nd, {
              'data-testid': 'start-recovery-btn',
              variant: 'contained',
              onClick: E,
              className: p().button,
              children: 'Start recovery',
            });
          return 'horizontal' === t
            ? (0, n.jsx)(o.ZpM, {
                'data-testid': 'recovery-proposal-hr',
                sx: { py: 3, px: 4 },
                children: (0, n.jsxs)(o.xA9, {
                  container: !0,
                  sx: {
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    gap: 3,
                    flexDirection: { xs: 'column', md: 'row' },
                  },
                  children: [
                    (0, n.jsx)(o.xA9, { item: !0, children: h }),
                    (0, n.jsxs)(o.xA9, {
                      item: !0,
                      xs: !0,
                      children: [
                        (0, n.jsx)(o.o5u, {
                          variant: 'h6',
                          sx: { fontWeight: 700, mb: 1 },
                          children: R,
                        }),
                        (0, n.jsx)(o.o5u, { sx: { color: 'primary.light', mb: 1 }, children: m }),
                        (0, n.jsx)(o.o5u, { children: f }),
                      ],
                    }),
                    g,
                  ],
                }),
              })
            : (0, n.jsx)(o.ZpM, {
                'data-testid': 'recovery-proposal',
                elevation: 0,
                className: p().card,
                children: (0, n.jsxs)(o.xA9, {
                  container: !0,
                  sx: { display: 'flex', flexDirection: 'column', gap: 4 },
                  children: [
                    (0, n.jsxs)(o.xA9, {
                      item: !0,
                      xs: 12,
                      sx: { display: 'flex', justifyContent: 'space-between' },
                      children: [h, f],
                    }),
                    (0, n.jsxs)(o.xA9, {
                      item: !0,
                      xs: 12,
                      children: [
                        (0, n.jsx)(o.o5u, {
                          variant: 'h6',
                          sx: { fontWeight: 700, mb: 2 },
                          children: R,
                        }),
                        (0, n.jsx)(o.o5u, { sx: { color: 'primary.light', mb: 2 }, children: m }),
                      ],
                    }),
                    (0, n.jsx)(o.cGx, { flexItem: !0, sx: { mx: -4 } }),
                    (0, n.jsxs)(o.xA9, {
                      item: !0,
                      container: !0,
                      sx: { justifyContent: 'flex-end', gap: { md: 1 } },
                      children: [
                        (0, n.jsx)(o.$nd, {
                          'data-testid': 'postpone-recovery-btn',
                          onClick: () => {
                            (0, a.sx)(i.a.DISMISS_PROPOSAL_CARD), null == r || r();
                          },
                          children: "I'll do it later",
                        }),
                        g,
                      ],
                    }),
                  ],
                }),
              });
        },
        { safe: () => (0, x.A)().safe, setTxFlow: () => (0, l.useContext)(E.P).setTxFlow }
      );
    },
    72207: (e, t, r) => {
      'use strict';
      r.d(t, { y: () => o });
      var n = r(55729),
        c = r(42751),
        a = r(3087),
        i = r(10996);
      function o(e) {
        let { validFrom: t, expiresAt: r, transactionHash: o, args: l, address: s } = e,
          { state: d, pending: u } = a.A.useStore() || {},
          x = null == d ? void 0 : d[0],
          C = x && (0, c.sp)(x, o),
          E = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
              [t, r] = (0, n.useState)(Date.now());
            return (
              (0, n.useEffect)(() => {
                let t = setInterval(() => {
                  r((t) => t + e);
                }, e);
                return () => {
                  clearInterval(t);
                };
              }, [e]),
              t
            );
          })(6e4),
          h = Number(t) - E,
          p = h <= 0,
          v = null !== r && Number(r) <= Date.now(),
          y = !C || ((0, i.xU)(C.address, s) && BigInt(l.queueNonce) === BigInt(C.txNonce)),
          R = !!(null == u ? void 0 : u[l.txHash]),
          m = p ? 0 : Math.ceil(h / 1e3);
        return {
          isNext: y,
          isExecutable: y && p && !v,
          isExpired: v,
          remainingSeconds: m,
          isPending: R,
        };
      }
    },
    85745: (e, t, r) => {
      'use strict';
      r.d(t, {
        $nd: () => n.$nd,
        ZpM: () => n.ZpM,
        cGx: () => n.cGx,
        o5u: () => n.o5u,
        xA9: () => n.xA9,
      });
      var n = r(78726);
    },
    91370: (e, t, r) => {
      'use strict';
      r.d(t, { G: () => a });
      var n = r(6029),
        c = r(85235);
      function a(e) {
        let { seconds: t } = e;
        if (t <= 0) return null;
        if (t <= 60)
          return (0, n.jsx)(c.o5u, { fontWeight: 700, component: 'span', children: '< 1 min' });
        let {
          days: r,
          hours: a,
          minutes: o,
        } = (function (e) {
          let t = Math.floor(e / 86400),
            r = e % 86400;
          return { days: t, hours: Math.floor(r / 3600), minutes: Math.floor((r % 3600) / 60) };
        })(t);
        return (0, n.jsxs)(c.azJ, {
          display: 'flex',
          gap: 1,
          children: [
            (0, n.jsx)(i, { value: r, unit: 'day' }),
            (0, n.jsx)(i, { value: a, unit: 'hr' }),
            (0, n.jsx)(i, { value: o, unit: 'min' }),
          ],
        });
      }
      function i(e) {
        let { value: t, unit: r } = e;
        return 0 === t
          ? null
          : (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(c.o5u, { fontWeight: 700, component: 'span', children: t }),
                ' ',
                (0, n.jsx)(c.o5u, {
                  color: 'primary.light',
                  component: 'span',
                  children: 1 === t ? r : ''.concat(r, 's'),
                }),
              ],
            });
      }
    },
    97104: (e, t, r) => {
      'use strict';
      r.d(t, { a: () => a });
      var n = r(85205);
      let c = 'recovery',
        a = {
          SETUP_RECOVERY: { action: 'Start recovery setup', category: c },
          SELECT_RECOVERY_METHOD: { action: 'Select recovery method', category: c },
          CONTINUE_WITH_RECOVERY: { action: 'Continue with recovery method', category: c },
          CONTINUE_TO_WAITLIST: { action: 'Continue to waitlist', category: c },
          SYGNUM_APP: { action: 'Go to Sygnum app', category: c },
          RECOVERY_SETTINGS: { action: 'Recovery settings', category: c, event: n.Bx.META },
          EDIT_RECOVERY: { action: 'Start edit recovery', category: c },
          REMOVE_RECOVERY: { action: 'Start recovery removal', category: c },
          START_RECOVERY: { action: 'Start recovery proposal', category: c },
          CANCEL_RECOVERY: { action: 'Start recovery cancellation', category: c },
          SHOW_ADVANCED: { action: 'Show advanced recovery settings', category: c },
          DISMISS_PROPOSAL_CARD: { action: 'Dismiss recovery proposal card', category: c },
          LEARN_MORE: { action: 'Recovery info click', category: c },
          GO_BACK: { action: 'Recovery cancellation back', category: c },
          GIVE_US_FEEDBACK: { action: 'Recovery feedback click', category: c, event: n.Bx.CLICK },
          CHECK_RECOVERY_PROPOSAL: { action: 'Check recovery proposal', category: c },
          SUBMIT_RECOVERY_CREATE: {
            action: 'Submit recovery setup',
            category: c,
            event: n.Bx.META,
          },
          SUBMIT_RECOVERY_EDIT: { action: 'Submit recovery edit', category: c, event: n.Bx.META },
          SUBMIT_RECOVERY_REMOVE: {
            action: 'Submit recovery remove',
            category: c,
            event: n.Bx.META,
          },
          SUBMIT_RECOVERY_ATTEMPT: {
            action: 'Submit recovery attempt',
            category: c,
            event: n.Bx.META,
          },
          SUBMIT_RECOVERY_CANCEL: {
            action: 'Submit recovery cancel',
            category: c,
            event: n.Bx.META,
          },
        };
    },
  },
]);
//# sourceMappingURL=1629.5c2d3d68b1be0af6.js.map
