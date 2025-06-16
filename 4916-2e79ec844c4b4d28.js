try {
  let e =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof self
              ? self
              : {},
    t = new e.Error().stack;
  t &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[t] = '215ee5c2-6c65-44cd-b588-e0d92bf824c2'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-215ee5c2-6c65-44cd-b588-e0d92bf824c2'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4916],
  {
    66888: function (e, t, n) {
      n.d(t, {
        u: function () {
          return r;
        },
        Z: function () {
          return _;
        },
      });
      var a,
        r,
        i = n(78286),
        l = n(58258),
        o = n(99095),
        s = n(54655),
        d = n(38819),
        c = n(15328),
        u = n(25834),
        p = n(12556),
        g = n(82078),
        h = n(50825),
        v = n(98949),
        y = n(82803),
        f = n(75147),
        b = n(89991),
        m = n(40816);
      let Z = (0, d.Z)(s.Kqy, { target: 'ef7kvr40' })('width:100%;'),
        x = (0, d.Z)(s.zxk, { target: 'ef7kvr41' })('margin-left:auto;'),
        w = (0, d.Z)(s.Kqy, { target: 'ef7kvr42' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.tertiary;
          },
          ';border-radius:10px;width:100%;'
        ),
        k = (0, l.memo)(() => {
          var e, t;
          let { toggleDialog: n } = (0, s.DAv)(),
            { targetChainId: a, account: r } = (0, b.Z_)(),
            { setActiveBundle: o } = (0, f.H)(),
            { legacyMorphoHolding: d, morphoHolding: Z } = (0, v.gz)(),
            [k, C] = (0, c._)('morpho.useOnchainApprove', !1),
            A = (0, l.useMemo)(() => {
              var e, t;
              return s.$0l.short
                .digits(2)
                .min(0.01)
                .of(
                  null !== (t = null === (e = d.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (e = d.value) || void 0 === e ? void 0 : e.balance]),
            M = (0, l.useMemo)(() => {
              var e, t;
              return s.$0l.short
                .digits(2)
                .min(0.01)
                .of(
                  null !== (t = null === (e = Z.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (t = Z.value) || void 0 === t ? void 0 : t.balance]),
            B = (0, l.useMemo)(() => {
              var e;
              if (!r.address) return;
              let t = r.address,
                n = new u.ActionBundleRequirements(),
                i = [];
              if (null === (e = d.value) || void 0 === e ? void 0 : e.balance) {
                let e = (0, m.S)({
                  amount: d.value.balance,
                  userAddress: t,
                  supportsSignatures: !k && !r.isContract,
                  bundlerAllowance: d.value.erc20Allowances['bundler3.generalAdapter1'],
                  erc2612Nonce: d.value.erc2612Nonce,
                  chainId: a,
                });
                e &&
                  (i.push(...e.actions),
                  n.signatures.push(...e.requirements.signatures),
                  n.txs.push(...e.requirements.txs));
              }
              return new u.ActionBundle(a, i, n);
            }, [r.address, r.isContract, d.value, a, k]),
            P = (0, l.useCallback)(() => {
              B &&
                (o(B, [
                  {
                    id: 'wrap',
                    type: y.H.InterfaceOperationType.wrap,
                    options: { isMax: [], disabledPeripheralTokens: new Set() },
                  },
                ]),
                n((0, i.tZ)(g.Z, {}), { closable: !1 }));
            }, [B, o, n]);
          return (0, i.BX)(s.Kqy, {
            direction: 'column',
            align: 'center',
            justify: 'center',
            gap: 24,
            children: [
              (0, i.tZ)(x, {
                variant: 'secondary',
                iconAlone: 'ClosePlain20',
                onClick: () => n(!1),
              }),
              (0, i.tZ)(s.qEK, {
                src: 'https://cdn.morpho.org/assets/logos/morpho.svg',
                padding: 0,
                style: { width: '40px', height: '40px' },
              }),
              (0, i.tZ)(s.xvT.Title.S, {
                textAlign: 'center',
                children: 'Wrap your legacy MORPHO',
              }),
              (0, i.tZ)(s.xvT.Body.M.Regular, {
                textAlign: 'center',
                children: 'The Morpho DAO has enabled transferability for the MORPHO token!',
              }),
              (0, i.tZ)(s.xvT.Body.M.Regular, {
                textAlign: 'center',
                children:
                  'Holders of legacy MORPHO tokens on Ethereum will need to wrap their tokens to enable transferability.',
              }),
              (0, i.BX)(s.Kqy, {
                direction: 'column',
                gap: 's',
                align: 'center',
                children: [
                  (0, i.tZ)(s.zxk, {
                    size: 'big',
                    variant: 'primary',
                    label: 'Wrap MORPHO',
                    onClick: P,
                  }),
                  (0, i.tZ)(h.Z, {
                    href: p.IA,
                    buttonProps: { variant: 'secondary', size: 'small', label: 'FAQ' },
                  }),
                ],
              }),
              (0, i.BX)(w, {
                direction: 'column',
                align: 'center',
                padding: 's',
                gap: 6,
                children: [
                  (0, i.tZ)(s.xvT.Body.XS.Regular, { children: 'Wallet Balance' }),
                  (0, i.tZ)(s.xvT.Body.XS.Regular, {
                    children: 'Legacy MORPHO: '.concat(A, ' MORPHO'),
                  }),
                  (0, i.tZ)(s.xvT.Body.XS.Regular, {
                    children: 'Wrapped MORPHO: '.concat(M, ' MORPHO'),
                  }),
                ],
              }),
              !r.isContract &&
                (0, i.BX)(s.Kqy, {
                  gap: 'xs',
                  children: [
                    (0, i.tZ)(s.xvT.Body.XXS.Regular, { children: 'Use approve()' }),
                    (0, i.tZ)(s.rsf, {
                      active: k,
                      onClick: (e) => C(e),
                      'data-testid': 'use-onchain-approve-switch',
                    }),
                  ],
                }),
            ],
          });
        });
      var C = (0, l.memo)((e) => {
          let {} = e,
            { toggleDialog: t } = (0, s.DAv)();
          return (0, i.BX)(Z, {
            align: 'center',
            gap: 8,
            justify: 'space-between',
            'data-testid': 'wrap-banner',
            children: [
              (0, i.tZ)('div', {}),
              (0, i.tZ)(s.xvT.Body.M.Regular, {
                lineHeight: 'normal',
                children:
                  'MORPHO is now transferable! Please wrap your MORPHO to the latest version to enable transferability.',
              }),
              (0, i.BX)(s.Kqy, {
                align: 'center',
                gap: 8,
                children: [
                  (0, i.tZ)(s.zxk, {
                    variant: 'primary',
                    size: 'default',
                    onClick: () => t((0, i.tZ)(k, {}), { closable: !0 }),
                    label: 'Wrap',
                  }),
                  (0, i.tZ)(h.Z, {
                    href: p.IA,
                    buttonProps: { variant: 'secondary', size: 'default', label: 'FAQ' },
                  }),
                ],
              }),
            ],
          });
        }),
        A = n(18313),
        M = (0, l.memo)((e) => {
          let {} = e,
            { account: t, targetChainId: n } = (0, b.Z_)(),
            a = (0, l.useMemo)(() => {
              let e = p.FW.getSafeIdentifier(n),
                a = p.FW.getNameById(n);
              return e
                ? 'https://app.safe.global/apps/open?safe='
                    .concat(e, ':')
                    .concat(null == t ? void 0 : t.address, '&appUrl=')
                    .concat(A.clientEnvs.NEXT_PUBLIC_DEPLOYMENT_URL, '/')
                    .concat(a, '/earn')
                : '#';
            }, [n, null == t ? void 0 : t.address]);
          return (0, i.BX)(s.xvT.Body.M.Regular, {
            lineHeight: 'normal',
            width: '100%',
            justifyContent: 'center',
            textAlign: 'center',
            children: [
              'If you are using a Safe, use the ',
              (0, i.tZ)('a', { href: a, children: 'Morpho Safe App' }),
              ' for an optimal experience',
            ],
          });
        });
      let B =
        'Morpho Association (ADDMO) is not authorized or regulated by the Financial Conduct Authority (FCA), and accordingly, the protections provided by the UK regulatory system will not be available to you when using the products and services provided by Morpho Association. It is your responsibility to ascertain whether you are permitted to use the products and services provided by Morpho Association according to applicable laws or regulations. By accessing this website and the products and services available through it, you acknowledge and confirm that you are a company or partnership with share capital or net assets of at least \xa35m or a trust with total cash and investments of at least \xa310m, or that you have professional experience in matters relating to investments and your ordinary activities involve you in dealing in cryptoassets for the purpose of a business carried on by you. You also acknowledge that cryptoassets are high risk investments and that you deal in them at your own risk.';
      function P() {
        return (0, i.BX)(s.Kqy, {
          direction: 'column',
          align: 'center',
          justify: 'center',
          gap: 'm',
          children: [
            (0, i.tZ)(s.xvT.Body.L.Regular, { children: 'Disclaimer for UK residents' }),
            (0, i.tZ)(s.xvT.Body.S.Regular, { children: B }),
          ],
        });
      }
      var O = (0, l.memo)((e) => {
        let {} = e,
          t = (0, s.dD4)(),
          { toggleDialog: n } = (0, s.DAv)(),
          a = (0, l.useMemo)(() => ''.concat(B.slice(0, 110), '...'), []);
        return (0, i.BX)(s.Kqy, {
          align: 'center',
          justify: 'space-between',
          width: '100%',
          gap: 8,
          children: [
            (0, i.tZ)('div', {}),
            (0, i.tZ)(s.ZT$, {
              TextVariant: t ? s.xvT.Body.XXS.Regular : s.xvT.Body.M.Regular,
              lineHeight: 'normal',
              children: a,
            }),
            (0, i.tZ)(s.zxk, {
              variant: 'ghost',
              size: 'small',
              onClick: () => n((0, i.tZ)(P, {}), { closable: !0 }),
              children: 'See more',
            }),
          ],
        });
      });
      ((a = r || (r = {})).CONFIG = {
        legacyMorpho: { type: 'info', content: (0, i.tZ)(C, {}), dismissable: !0 },
        pageWarning: { type: 'alert', content: null, dismissable: !1 },
        simulate: {
          type: 'info',
          content: (0, i.tZ)(s.xvT.Body.M.Regular, {
            lineHeight: 'normal',
            width: '100%',
            textAlign: 'center',
            children: 'Simulating data based on transactions in Bundler',
          }),
          dismissable: !0,
        },
        ukDisclaimer: { type: 'info', content: (0, i.tZ)(O, {}), dismissable: !1 },
        safeAccount: { type: 'info', content: (0, i.tZ)(M, {}), dismissable: !0 },
      }),
        (a.TypeDef = {
          alert: { background: (e) => e.colors.components.badge },
          info: { background: (e) => e.colors.background.banner },
        });
      let R = (0, d.Z)(s.Kqy, { target: 'e1igxb3q0' })(
        'background:',
        (e) => {
          let { theme: t, variant: n } = e;
          return r.TypeDef[n].background(t);
        },
        ';backdrop-filter:blur(100px);padding:14px 24px;min-height:54px;',
        (0, s.ClW)(s.ieP),
        ';a{text-decoration:underline;}'
      );
      var T = (0, l.memo)((e) => {
          let { className: t, children: n, variant: a = 'alert', onDismiss: r } = e;
          return (0, i.BX)(R, {
            className: t,
            variant: a,
            align: 'center',
            gap: 8,
            children: [
              n,
              r &&
                (0, i.tZ)(s.zxk, {
                  onClick: r,
                  variant: 'ghost',
                  size: 'small',
                  iconAlone: 'ClosePlain20',
                }),
            ],
          });
        }),
        S = n(23567);
      let D = (0, d.Z)(s.Kqy, { target: 'esgdglv0' })(
          'z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.banner.mid;
          },
          ';margin-top:',
          (0, S.iv)('var(--navbar-height)'),
          ';position:relative;'
        ),
        E = (0, d.Z)('div', { target: 'esgdglv1' })(
          'width:calc(100% - (var(--bundler-width) - var(--bundler-position)));',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{width:100%;}position:fixed;'
        );
      var _ = (0, l.memo)((e) => {
        let { className: t } = e,
          { bannersToShow: n, toggleBanner: a } = (0, o.l5)();
        return (0, i.tZ)(D, {
          className: t,
          direction: 'column',
          children: (0, i.tZ)(E, {
            children: n.map((e) => {
              let { id: t, content: n, type: r, dismissable: l } = e;
              return (0, i.tZ)(
                T,
                { variant: r, onDismiss: l ? () => a(t, !1) : void 0, children: n },
                t
              );
            }),
          }),
        });
      });
    },
    99095: function (e, t, n) {
      n.d(t, {
        l5: function () {
          return v;
        },
      });
      var a = n(78286),
        r = n(58258),
        i = n(44982),
        l = n(54655),
        o = n(35047),
        s = n(66888),
        d = n(18313),
        c = n(89991),
        u = n(98949),
        p = n(22683),
        g = n(3918);
      let h = (0, r.createContext)(null),
        v = () => {
          let e = (0, r.useContext)(h);
          if (!e) throw Error('useLayoutContext must be called inside a LayoutContextProvider');
          return e;
        };
      t.ZP = (0, r.memo)((e) => {
        var t;
        let { children: n } = e,
          [v, y] = (0, r.useState)(!1),
          [f, b] = (0, r.useState)(!1),
          [m, Z] = (0, r.useState)(!0),
          { operations: x } = (0, p.N)(),
          { toggleAnimation: w } = (0, l.s8G)(),
          k = (0, l.ajf)('s'),
          {
            account: { isConnected: C },
          } = (0, c.Z_)();
        (0, r.useLayoutEffect)(() => {
          C ? w('default') : w('loading');
        }, [C, w]);
        let [A, M] = (0, r.useState)({}),
          [B, P] = (0, r.useState)(),
          O = (0, r.useCallback)(
            (e) => {
              if (k && e) {
                P({ ...e, dismissable: !0 });
                return;
              }
              P(e);
            },
            [k, P]
          ),
          R = (0, r.useMemo)(
            () =>
              (0, o.entries)(A)
                .filter((e) => {
                  let [, t] = e;
                  return t;
                })
                .map((e) => {
                  let [t] = e;
                  return 'pageWarning' === t && (null == B ? void 0 : B.content)
                    ? { ...B, id: t }
                    : { ...s.u.CONFIG[t], id: t };
                })
                .sort((e, t) => (e.type === t.type ? 0 : 'alert' === e.type ? -1 : 1)),
            [A, B]
          ),
          T = (0, r.useCallback)((e, t) => {
            M((n) => ({ ...n, [e]: t }));
          }, []),
          { account: S } = (0, c.Z_)(),
          [D, E] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          T('pageWarning', !!B && (0, o.isDefined)(B.content));
        }, [B, null == B ? void 0 : B.content, T]),
          (0, r.useEffect)(() => {
            x.length > 0 ? T('simulate', !0) : T('simulate', !1);
          }, [x, T]),
          (0, r.useEffect)(() => {
            T('safeAccount', !S.isSafe && !!S.isContract);
          }, [T, S.isSafe, S.isContract]);
        let { countryCode: _ } = (0, g.RA)();
        (0, r.useEffect)(() => {
          T('ukDisclaimer', 'GB' === _);
        }, [T, _]);
        let { legacyMorphoHolding: I } = (0, u.gz)();
        (0, r.useEffect)(() => {
          var e;
          T(
            'legacyMorpho',
            !!(
              (null === (e = I.value) || void 0 === e ? void 0 : e.balance) && I.value.balance > 0n
            )
          );
        }, [null === (t = I.value) || void 0 === t ? void 0 : t.balance, T]),
          (0, r.useEffect)(() => {
            d.clientEnvs.NEXT_PUBLIC_SPINDL_SDK_KEY &&
              (null == S ? void 0 : S.address) &&
              i.ZP.attribute(S.address);
          }, [null == S ? void 0 : S.address]);
        let X = (0, r.useMemo)(
          () => ({
            isMobileLeftPanelOpen: v,
            setMobileLeftPanelOpen: y,
            isMobileRightPanelOpen: f,
            setMobileRightPanelOpen: b,
            isLeftPanelExpanded: m,
            setIsLeftPanelExpanded: Z,
            setShowRightPanelMask: E,
            bannersToShow: R,
            toggleBanner: T,
            setPageWarning: O,
            showRightPanelMask: D,
          }),
          [v, f, m, R, T, O, D]
        );
        return (0, a.tZ)(h.Provider, { value: X, children: n });
      });
    },
    3918: function (e, t, n) {
      n.d(t, {
        RA: function () {
          return l;
        },
      });
      var a = n(78286),
        r = n(58258);
      let i = (0, r.createContext)(null),
        l = () => {
          let e = (0, r.useContext)(i);
          if (!e) throw Error('useUtilityContext must be called inside a UtilityContextProvider');
          return e;
        };
      t.ZP = (e) => {
        let { children: t, countryCode: n } = e;
        return (0, a.tZ)(i.Provider, { value: { countryCode: n }, children: t });
      };
    },
  },
]);
