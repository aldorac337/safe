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
    (e._sentryDebugIds[t] = '335318a1-b23b-4bdc-97b1-492a32e24122'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-335318a1-b23b-4bdc-97b1-492a32e24122'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4916],
  {
    66888: function (e, t, n) {
      n.d(t, {
        u: function () {
          return a;
        },
        Z: function () {
          return K;
        },
      });
      var r,
        a,
        i = n(78286),
        o = n(58258),
        l = n(99095),
        s = n(54655),
        d = n(38819),
        c = n(392),
        u = n(59370),
        p = n(50964),
        h = n(15328),
        v = n(4565),
        g = n(25834),
        y = n(12556),
        b = n(82078),
        f = n(50825),
        m = n(26726),
        x = n(98949),
        Z = n(82803),
        w = n(75147),
        k = n(89991),
        A = n(49663),
        B = n(40816);
      let M = (0, d.Z)(s.Kqy, { target: 'ef7kvr40' })('width:100%;'),
        T = (0, d.Z)(s.zxk, { target: 'ef7kvr41' })('margin-left:auto;'),
        C = (0, d.Z)(s.Kqy, { target: 'ef7kvr42' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.tertiary;
          },
          ';border-radius:10px;width:100%;'
        ),
        R = (e) => {
          let { userAddress: t, legacyMorphoBalance: n, chainId: r, wrapperAllowance: a } = e,
            i = new g.ActionBundleRequirements();
          a < n &&
            i.txs.push({
              type: 'erc20Approve',
              args: [A.rr.legacyMorphoToken, A.rr.morphoTokenWrapper, n],
              tx: {
                to: A.rr.legacyMorphoToken,
                data: (0, c.R)({
                  abi: u.Wo,
                  functionName: 'approve',
                  args: [A.rr.morphoTokenWrapper, n],
                }),
              },
            });
          let o = new g.ActionBundle(r, [], i);
          return (
            (o.tx = () => ({
              to: A.rr.morphoTokenWrapper,
              data: (0, c.R)({
                abi: v.wrappedBackedTokenAbi,
                functionName: 'depositFor',
                args: [t, n],
              }),
              value: 0n,
            })),
            o
          );
        },
        P = (e) => {
          let {
              userAddress: t,
              legacyMorphoBalance: n,
              chainId: r,
              isContract: a,
              bundlerAllowance: i,
              erc2612Nonce: o,
            } = e,
            l = new g.ActionBundleRequirements(),
            s = [],
            d = (0, B.S)({
              amount: n,
              userAddress: t,
              supportsSignatures: !a,
              bundlerAllowance: i,
              erc2612Nonce: o,
              chainId: r,
            });
          return (
            d &&
              (s.push(...d.actions),
              l.signatures.push(...d.requirements.signatures),
              l.txs.push(...d.requirements.txs)),
            new g.ActionBundle(r, s, l)
          );
        },
        O = (0, o.memo)(() => {
          var e, t, n, r, a;
          let { toggleDialog: l } = (0, s.DAv)(),
            { targetChainId: d, account: c } = (0, k.Z_)(),
            { setActiveBundle: v } = (0, w.H)(),
            { legacyMorphoHolding: g, morphoHolding: B } = (0, x.gz)(),
            M = (0, m.nh)(m.TP.EXPLICIT_WRAP_FLOW_ENABLED),
            [O, E] = (0, h._)('morpho.useExplicitApproveFlow', !1),
            { data: S } = (0, p.useReadContract)({
              query: { enabled: !!c.address && M && O },
              chainId: d,
              abi: u.Wo,
              address: A.rr.legacyMorphoToken,
              functionName: 'allowance',
              args: c.address ? [c.address, A.rr.morphoTokenWrapper] : void 0,
            }),
            _ = (0, o.useMemo)(() => {
              var e, t;
              return s.$0l.short
                .digits(2)
                .min(0.01)
                .of(
                  null !== (t = null === (e = g.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (e = g.value) || void 0 === e ? void 0 : e.balance]),
            D = (0, o.useMemo)(() => {
              var e, t;
              return s.$0l.short
                .digits(2)
                .min(0.01)
                .of(
                  null !== (t = null === (e = B.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (t = B.value) || void 0 === t ? void 0 : t.balance]),
            I = (0, o.useMemo)(() => {
              var e, t, n;
              if (!c.address || !(null === (e = g.value) || void 0 === e ? void 0 : e.balance))
                return;
              let r = {
                userAddress: c.address,
                legacyMorphoBalance: g.value.balance,
                chainId: d,
                wrapperAllowance: null != S ? S : 0n,
              };
              return M && O
                ? R(r)
                : P({
                    ...r,
                    isContract: c.isContract,
                    bundlerAllowance:
                      null !== (t = g.value.erc20Allowances['bundler3.generalAdapter1']) &&
                      void 0 !== t
                        ? t
                        : 0n,
                    erc2612Nonce: null !== (n = g.value.erc2612Nonce) && void 0 !== n ? n : 0n,
                  });
            }, [
              c.address,
              c.isContract,
              O,
              null === (n = g.value) || void 0 === n ? void 0 : n.balance,
              null === (r = g.value) || void 0 === r ? void 0 : r.erc20Allowances,
              null === (a = g.value) || void 0 === a ? void 0 : a.erc2612Nonce,
              d,
              M,
              S,
            ]),
            X = (0, o.useCallback)(() => {
              I &&
                (v(
                  I,
                  [
                    {
                      id: 'wrap',
                      type: Z.H.InterfaceOperationType.wrap,
                      options: { isMax: [], disabledPeripheralTokens: new Set() },
                    },
                  ],
                  () => {
                    g.refresh(!0), B.refresh(!0);
                  },
                  !0
                ),
                l((0, i.tZ)(b.Z, {}), { closable: !1 }));
            }, [I, g, B, v, l]);
          return (0, i.BX)(s.Kqy, {
            direction: 'column',
            align: 'center',
            justify: 'center',
            gap: 24,
            children: [
              (0, i.tZ)(T, {
                variant: 'secondary',
                iconAlone: 'ClosePlain20',
                onClick: () => l(!1),
              }),
              (0, i.tZ)(s.qEK, {
                src: 'https://cdn.morpho.org/assets/logos/morpho.svg',
                padding: 0,
                style: { width: '40px', height: '40px' },
              }),
              (0, i.BX)(i.HY, {
                children: [
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
                    fullWidth: !0,
                    direction: 'column',
                    gap: 's',
                    align: 'center',
                    children: [
                      (0, i.tZ)(s.zxk, {
                        size: 'big',
                        variant: 'primary',
                        label: 'Wrap MORPHO',
                        onClick: X,
                      }),
                      (0, i.tZ)(f.Z, {
                        href: y.IA,
                        buttonProps: { variant: 'secondary', size: 'small', label: 'FAQ' },
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.BX)(C, {
                direction: 'column',
                align: 'center',
                padding: 's',
                gap: 6,
                children: [
                  (0, i.tZ)(s.xvT.Body.XS.Regular, { children: 'Wallet Balance' }),
                  (0, i.tZ)(s.xvT.Body.XS.Regular, {
                    children: 'Legacy MORPHO: '.concat(_, ' MORPHO'),
                  }),
                  (0, i.tZ)(s.xvT.Body.XS.Regular, {
                    children: 'Wrapped MORPHO: '.concat(D, ' MORPHO'),
                  }),
                ],
              }),
              M &&
                (0, i.BX)(s.Kqy, {
                  gap: 'xs',
                  children: [
                    (0, i.tZ)(s.xvT.Body.XXS.Regular, { children: 'Use direct contract calls' }),
                    (0, i.tZ)(s.rsf, {
                      active: O,
                      onClick: (e) => E(e),
                      'data-testid': 'use-explicit-approve-switch',
                    }),
                  ],
                }),
            ],
          });
        });
      var E = (0, o.memo)(() => {
          let { toggleDialog: e } = (0, s.DAv)();
          return (0, i.BX)(M, {
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
                    onClick: () => e((0, i.tZ)(O, {}), { closable: !0 }),
                    label: 'Wrap',
                  }),
                  (0, i.tZ)(f.Z, {
                    href: y.IA,
                    buttonProps: { variant: 'secondary', size: 'default', label: 'FAQ' },
                  }),
                ],
              }),
            ],
          });
        }),
        S = n(18313),
        _ = (0, o.memo)((e) => {
          let {} = e,
            { account: t, targetChainId: n } = (0, k.Z_)(),
            r = (0, o.useMemo)(() => {
              let e = y.FW.getSafeIdentifier(n),
                r = y.FW.getNameById(n);
              return e
                ? 'https://app.safe.global/apps/open?safe='
                    .concat(e, ':')
                    .concat(null == t ? void 0 : t.address, '&appUrl=')
                    .concat(S.clientEnvs.NEXT_PUBLIC_DEPLOYMENT_URL, '/')
                    .concat(r, '/earn')
                : '#';
            }, [n, null == t ? void 0 : t.address]);
          return (0, i.BX)(s.xvT.Body.M.Regular, {
            lineHeight: 'normal',
            width: '100%',
            justifyContent: 'center',
            textAlign: 'center',
            children: [
              'If you are using a Safe, use the ',
              (0, i.tZ)('a', { href: r, children: 'Morpho Safe App' }),
              ' for an optimal experience',
            ],
          });
        });
      let D =
        'Morpho Association (ADDMO) is not authorized or regulated by the Financial Conduct Authority (FCA), and accordingly, the protections provided by the UK regulatory system will not be available to you when using the products and services provided by Morpho Association. It is your responsibility to ascertain whether you are permitted to use the products and services provided by Morpho Association according to applicable laws or regulations. By accessing this website and the products and services available through it, you acknowledge and confirm that you are a company or partnership with share capital or net assets of at least \xa35m or a trust with total cash and investments of at least \xa310m, or that you have professional experience in matters relating to investments and your ordinary activities involve you in dealing in cryptoassets for the purpose of a business carried on by you. You also acknowledge that cryptoassets are high risk investments and that you deal in them at your own risk.';
      function I() {
        return (0, i.BX)(s.Kqy, {
          direction: 'column',
          align: 'center',
          justify: 'center',
          gap: 'm',
          children: [
            (0, i.tZ)(s.xvT.Body.L.Regular, { children: 'Disclaimer for UK residents' }),
            (0, i.tZ)(s.xvT.Body.S.Regular, { children: D }),
          ],
        });
      }
      var X = (0, o.memo)((e) => {
        let {} = e,
          t = (0, s.dD4)(),
          { toggleDialog: n } = (0, s.DAv)(),
          r = (0, o.useMemo)(() => ''.concat(D.slice(0, 110), '...'), []);
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
              children: r,
            }),
            (0, i.tZ)(s.zxk, {
              variant: 'ghost',
              size: 'small',
              onClick: () => n((0, i.tZ)(I, {}), { closable: !0 }),
              children: 'See more',
            }),
          ],
        });
      });
      ((r = a || (a = {})).CONFIG = {
        legacyMorpho: { type: 'info', content: (0, i.tZ)(E, {}), dismissable: !0 },
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
        ukDisclaimer: { type: 'info', content: (0, i.tZ)(X, {}), dismissable: !1 },
        safeAccount: { type: 'info', content: (0, i.tZ)(_, {}), dismissable: !0 },
      }),
        (r.TypeDef = {
          alert: { background: (e) => e.colors.components.badge },
          info: { background: (e) => e.colors.background.banner },
        });
      let W = (0, d.Z)(s.Kqy, { target: 'e1igxb3q0' })(
        'background:',
        (e) => {
          let { theme: t, variant: n } = e;
          return a.TypeDef[n].background(t);
        },
        ';backdrop-filter:blur(100px);padding:14px 24px;min-height:54px;',
        (0, s.ClW)(s.ieP),
        ';a{text-decoration:underline;}'
      );
      var N = (0, o.memo)((e) => {
          let { className: t, children: n, variant: r = 'alert', onDismiss: a } = e;
          return (0, i.BX)(W, {
            className: t,
            variant: r,
            align: 'center',
            gap: 8,
            children: [
              n,
              a &&
                (0, i.tZ)(s.zxk, {
                  onClick: a,
                  variant: 'ghost',
                  size: 'small',
                  iconAlone: 'ClosePlain20',
                }),
            ],
          });
        }),
        H = n(23567);
      let q = (0, d.Z)(s.Kqy, { target: 'esgdglv0' })(
          'z-index:',
          (e) => {
            let { theme: t } = e;
            return t.zIndex.banner.mid;
          },
          ';margin-top:',
          (0, H.iv)('var(--navbar-height)'),
          ';position:relative;'
        ),
        z = (0, d.Z)('div', { target: 'esgdglv1' })(
          'width:calc(100% - (var(--bundler-width) - var(--bundler-position)));',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{width:100%;}position:fixed;'
        );
      var K = (0, o.memo)((e) => {
        let { className: t } = e,
          { bannersToShow: n, toggleBanner: r } = (0, l.l5)();
        return (0, i.tZ)(q, {
          className: t,
          direction: 'column',
          children: (0, i.tZ)(z, {
            children: n.map((e) => {
              let { id: t, content: n, type: a, dismissable: o } = e;
              return (0, i.tZ)(
                N,
                { variant: a, onDismiss: o ? () => r(t, !1) : void 0, children: n },
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
          return g;
        },
      });
      var r = n(78286),
        a = n(58258),
        i = n(44982),
        o = n(54655),
        l = n(35047),
        s = n(66888),
        d = n(18313),
        c = n(89991),
        u = n(98949),
        p = n(22683),
        h = n(3918);
      let v = (0, a.createContext)(null),
        g = () => {
          let e = (0, a.useContext)(v);
          if (!e) throw Error('useLayoutContext must be called inside a LayoutContextProvider');
          return e;
        };
      t.ZP = (0, a.memo)((e) => {
        var t;
        let { children: n } = e,
          [g, y] = (0, a.useState)(!1),
          [b, f] = (0, a.useState)(!1),
          [m, x] = (0, a.useState)(!0),
          { operations: Z } = (0, p.N)(),
          { toggleAnimation: w } = (0, o.s8G)(),
          k = (0, o.ajf)('s'),
          {
            account: { isConnected: A },
          } = (0, c.Z_)();
        (0, a.useLayoutEffect)(() => {
          A ? w('default') : w('loading');
        }, [A, w]);
        let [B, M] = (0, a.useState)({}),
          [T, C] = (0, a.useState)(),
          R = (0, a.useCallback)(
            (e) => {
              if (k && e) {
                C({ ...e, dismissable: !0 });
                return;
              }
              C(e);
            },
            [k, C]
          ),
          P = (0, a.useMemo)(
            () =>
              (0, l.entries)(B)
                .filter((e) => {
                  let [, t] = e;
                  return t;
                })
                .map((e) => {
                  let [t] = e;
                  return 'pageWarning' === t && (null == T ? void 0 : T.content)
                    ? { ...T, id: t }
                    : { ...s.u.CONFIG[t], id: t };
                })
                .sort((e, t) => (e.type === t.type ? 0 : 'alert' === e.type ? -1 : 1)),
            [B, T]
          ),
          O = (0, a.useCallback)((e, t) => {
            M((n) => ({ ...n, [e]: t }));
          }, []),
          { account: E } = (0, c.Z_)(),
          [S, _] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          O('pageWarning', !!T && (0, l.isDefined)(T.content));
        }, [T, null == T ? void 0 : T.content, O]),
          (0, a.useEffect)(() => {
            Z.length > 0 ? O('simulate', !0) : O('simulate', !1);
          }, [Z, O]),
          (0, a.useEffect)(() => {
            O('safeAccount', !E.isSafe && !!E.isContract);
          }, [O, E.isSafe, E.isContract]);
        let { countryCode: D } = (0, h.RA)();
        (0, a.useEffect)(() => {
          O('ukDisclaimer', 'GB' === D);
        }, [O, D]);
        let { legacyMorphoHolding: I } = (0, u.gz)();
        (0, a.useEffect)(() => {
          var e;
          O(
            'legacyMorpho',
            !!(
              (null === (e = I.value) || void 0 === e ? void 0 : e.balance) && I.value.balance > 0n
            )
          );
        }, [null === (t = I.value) || void 0 === t ? void 0 : t.balance, O]),
          (0, a.useEffect)(() => {
            d.clientEnvs.NEXT_PUBLIC_SPINDL_SDK_KEY &&
              (null == E ? void 0 : E.address) &&
              i.ZP.attribute(E.address);
          }, [null == E ? void 0 : E.address]);
        let X = (0, a.useMemo)(
          () => ({
            isMobileLeftPanelOpen: g,
            setMobileLeftPanelOpen: y,
            isMobileRightPanelOpen: b,
            setMobileRightPanelOpen: f,
            isLeftPanelExpanded: m,
            setIsLeftPanelExpanded: x,
            setShowRightPanelMask: _,
            bannersToShow: P,
            toggleBanner: O,
            setPageWarning: R,
            showRightPanelMask: S,
          }),
          [g, b, m, P, O, R, S]
        );
        return (0, r.tZ)(v.Provider, { value: X, children: n });
      });
    },
    3918: function (e, t, n) {
      n.d(t, {
        RA: function () {
          return o;
        },
      });
      var r = n(78286),
        a = n(58258);
      let i = (0, a.createContext)(null),
        o = () => {
          let e = (0, a.useContext)(i);
          if (!e) throw Error('useUtilityContext must be called inside a UtilityContextProvider');
          return e;
        };
      t.ZP = (e) => {
        let { children: t, countryCode: n } = e;
        return (0, r.tZ)(i.Provider, { value: { countryCode: n }, children: t });
      };
    },
  },
]);
