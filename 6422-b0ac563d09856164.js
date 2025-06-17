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
    (e._sentryDebugIds[t] = 'f04f5aca-eaeb-4536-8006-deddf9866da3'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-f04f5aca-eaeb-4536-8006-deddf9866da3'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6422, 4916],
  {
    27410: function (e, t, n) {
      var r = n(78286),
        a = n(58258),
        o = n(54655);
      t.Z = (0, a.memo)((e) => {
        let { label: t, type: n, currentType: a, onClick: l } = e;
        return (0, r.tZ)(o.zxk, {
          variant: a === n ? 'secondary' : 'ghost',
          onClick: l,
          label: t,
          style: { flexGrow: 1 },
        });
      });
    },
    55027: function (e, t, n) {
      n.d(t, {
        o: function () {
          return d;
        },
      });
      var r,
        a = n(68612),
        o = n(40252),
        l = n(35047),
        i = n(51196),
        s = n(27987);
      let d = function (e) {
        var t,
          n,
          d,
          u,
          c,
          p,
          v,
          h,
          g,
          f,
          m,
          b,
          y,
          k,
          x,
          Z,
          A,
          w,
          C,
          B,
          T,
          M,
          S,
          R,
          P,
          D,
          E,
          _,
          O,
          N,
          I,
          X,
          z,
          H,
          q,
          W;
        let L =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new i.SimulationState({
                  chainId: e.vaultByAddress.chain.id,
                  block: {
                    number: 0n,
                    timestamp:
                      null !==
                        (r =
                          null === (W = e.vaultByAddress.state) || void 0 === W
                            ? void 0
                            : W.timestamp) && void 0 !== r
                        ? r
                        : 0n,
                  },
                  tokens: {},
                  markets: {},
                  vaultMarketConfigs: {},
                  vaults: {},
                  users: {},
                  positions: {},
                  holdings: {},
                }),
          K = e.vaultByAddress,
          U = K.chain.id;
        (null !== (A = (d = L.vaults)[(u = K.address)]) && void 0 !== A) ||
          (d[u] = s.Z.getVault(K)),
          (null !== (w = (c = L.users)[(p = K.address)]) && void 0 !== w) ||
            (c[p] = new o.User({ address: K.address, isBundlerAuthorized: !1, morphoNonce: 0n })),
          (null !== (C = (v = L.tokens)[(h = K.asset.address)]) && void 0 !== C) ||
            (v[h] = s.Z.getToken(K.asset)),
          (null !== (B = (g = L.tokens)[(f = K.address)]) && void 0 !== B) ||
            (g[f] = s.Z.getToken({ ...K, decimals: 18 })),
          (null !==
            (M = (y =
              null !== (T = (m = L.holdings)[(b = K.address)]) && void 0 !== T ? T : (m[b] = {}))[
              (k = K.asset.address)
            ]) &&
            void 0 !== M) ||
            (y[k] = new o.Holding({
              user: K.address,
              token: K.asset.address,
              balance: 0n,
              erc20Allowances: { morpho: a.zL, permit2: 0n, 'bundler3.generalAdapter1': 0n },
              permit2BundlerAllowance: { amount: 0n, expiration: 0n, nonce: 0n },
            })),
          null === (n = K.state) ||
            void 0 === n ||
            null === (t = n.allocation) ||
            void 0 === t ||
            t.forEach((e) => {
              var t, n, r, a, l, i, d, u, c, p, v, h, g, f, m, b, y, k, x, Z, A;
              let {
                market: { collateralAsset: w, loanAsset: C },
              } = e;
              w &&
                ((null !== (m = (t = L.tokens)[(n = w.address)]) && void 0 !== m) ||
                  (t[n] = s.Z.getToken(w))),
                (null !== (b = (r = L.tokens)[(a = C.address)]) && void 0 !== b) ||
                  (r[a] = s.Z.getToken(C));
              let B = s.Z.getVaultMarketAllocation(K.address, e, K.publicAllocatorConfig);
              (B.position.market.lastUpdate = o.MathLib.min(
                B.position.market.lastUpdate,
                L.block.timestamp
              )),
                (null !== (y = (l = L.markets)[(i = B.marketId)]) && void 0 !== y) ||
                  (l[i] = B.position.market),
                (null !==
                  (x = (c =
                    null !== (k = (d = L.positions)[(u = K.address)]) && void 0 !== k
                      ? k
                      : (d[u] = {}))[(p = B.marketId)]) &&
                  void 0 !== x) ||
                  (c[p] = B.position),
                (null !==
                  (A = (g =
                    null !== (Z = (v = L.vaultMarketConfigs)[(h = K.address)]) && void 0 !== Z
                      ? Z
                      : (v[h] = {}))[(f = B.marketId)]) &&
                  void 0 !== A) ||
                  (g[f] = B.config);
            });
        let { bundler3: F } = (0, o.getChainAddresses)(U);
        for (let e of ((null !== (S = (x = L.users)[(Z = F.generalAdapter1)]) && void 0 !== S) ||
          (x[Z] = new o.User({
            address: F.generalAdapter1,
            isBundlerAuthorized: !1,
            morphoNonce: 0n,
          })),
        (0, l.values)(L.tokens)))
          e &&
            ((null !==
              (O = (D =
                null !== (_ = (R = L.holdings)[(P = F.generalAdapter1)]) && void 0 !== _
                  ? _
                  : (R[P] = {}))[(E = e.address)]) &&
              void 0 !== O) ||
              (D[E] = new o.Holding({
                user: F.generalAdapter1,
                token: e.address,
                balance: 0n,
                erc20Allowances: { morpho: a.zL, permit2: 0n, 'bundler3.generalAdapter1': 0n },
                permit2BundlerAllowance: { amount: 0n, expiration: 0n, nonce: 0n },
              })));
        for (let e of (0, l.values)(L.markets))
          e &&
            ((null !==
              (q = (X =
                null !== (H = (N = L.positions)[(I = F.generalAdapter1)]) && void 0 !== H
                  ? H
                  : (N[I] = {}))[(z = e.id)]) &&
              void 0 !== q) ||
              (X[z] = new o.Position({
                user: F.generalAdapter1,
                marketId: e.id,
                supplyShares: 0n,
                borrowShares: 0n,
                collateral: 0n,
              })));
        return L;
      };
    },
    81919: function (e, t, n) {
      var r = n(78286),
        a = n(58258),
        o = n(54655),
        l = n(4366);
      let i = (e) => {
          var t, n, r;
          let a = null === (t = e[0]) || void 0 === t ? void 0 : t[1],
            o = null === (n = e[e.length - 1]) || void 0 === n ? void 0 : n[1];
          if ('number' != typeof a || 'number' != typeof o) return { hasChange: !1 };
          let l =
            a ||
            (null === (r = e.find((e) => null !== e[1] && e[1] > 0)) || void 0 === r
              ? void 0
              : r[1]);
          return l
            ? { percentageChange: (o - l) / l, rawChange: o - l, hasChange: !0 }
            : { hasChange: !1 };
        },
        s = { percentageChange: 'Click to show $ change.', rawChange: 'Click to show % change.' };
      t.Z = (0, a.memo)((e) => {
        let { formattedData: t } = e,
          [n, d] = (0, a.useState)(!0),
          {
            percentageChange: u,
            rawChange: c,
            hasChange: p,
          } = (0, a.useMemo)(() => i(null != t ? t : []), [t]),
          v = (0, a.useMemo)(
            () =>
              n
                ? o.$0l.percent.default('-').digits(2).unit('%').sign().trailingZero(!1).of(u)
                : o.$0l.short.unit('$').sign().digits(2).readable().of(c),
            [n, u, c]
          );
        return p && t
          ? (0, r.tZ)(o.ua7, {
              content: s[n ? 'percentageChange' : 'rawChange'],
              children: (0, r.tZ)(o.Vp9, {
                className: l.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                variant: 'pnl',
                label: v,
                onClick: () => d((e) => !e),
              }),
            })
          : null;
      });
    },
    5500: function (e, t, n) {
      n.d(t, {
        _: function () {
          return d;
        },
      });
      var r = n(78286),
        a = n(58258),
        o = n(99079),
        l = n(3808),
        i = n(16102),
        s = n(54655);
      function d(e) {
        let { timestamp: t } = e;
        if (void 0 === t) return (0, r.tZ)(s.OdW, { height: 26 });
        if (null === t) return (0, r.tZ)(r.HY, {});
        let n = (0, o.K)(Number(t));
        return (0, r.tZ)(s.ua7, {
          content: (0, l.s)(n),
          children: (0, r.tZ)(s.xvT.Body.XS.Regular, {
            color: 'text.body',
            children: (0, i.U)(n, new Date()),
          }),
        });
      }
      t.Z = (0, a.memo)(d);
    },
    76992: function (e, t, n) {
      n.d(t, {
        E: function () {
          return h;
        },
      });
      var r = n(78286),
        a = n(58258),
        o = n(54655),
        l = n(50825),
        i = n(38819),
        s = n(16690);
      let d = (0, i.Z)('div', { target: 'eikqm6p0' })(
          'background-color:',
          (e) => {
            let { theme: t, backgroundVariant: n } = e;
            return 'primary' === n ? t.colors.background.primary : t.colors.constant.dark;
          },
          ';padding:',
          (e) => {
            let { noPadding: t } = e;
            return t ? '0px' : '3px';
          },
          ';display:flex;gap:',
          (e) => {
            let { noGap: t } = e;
            return t ? '0px' : '4px';
          },
          ';border-radius:100px;height:fit-content;'
        ),
        u = (0, i.Z)('div', { target: 'eikqm6p1' })('position:relative;'),
        c = (0, i.Z)(o.Kqy, { target: 'eikqm6p2' })(
          'position:absolute;top:0px;right:0px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.brand;
          },
          ';width:14px;height:14px;border-radius:50%;display:flex;justify-content:center;align-items:center;text-align:center;',
          (0, s.animationCubicBezier)(s.popUpScale, '300ms'),
          ';& >:first-of-type{transform:translate(0.2px,0.4px);font-size:8px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{top:-5px !important;right:-5px !important;}'
        ),
        p = (0, i.Z)(o.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        v = (0, a.forwardRef)(function (e, t) {
          let {
            options: n,
            id: a,
            value: i,
            noPadding: s = !1,
            noGap: v = !1,
            disabled: h = !1,
            variant: g = 'primary',
            backgroundVariant: f = 'primary',
            size: m = 'small',
            className: b,
            onChange: y,
            ...k
          } = e;
          return (0, r.tZ)(d, {
            noPadding: s,
            noGap: v,
            backgroundVariant: f,
            ref: t,
            className: b,
            ...k,
            children: n.map((e) =>
              (0, r.tZ)(
                o.ua7,
                {
                  disabled: !e.tooltip,
                  content: e.tooltip,
                  offset: s ? 4 : 9,
                  children: (0, r.BX)(u, {
                    children: [
                      e.href
                        ? (0, r.tZ)(l.Z, {
                            href: e.href,
                            prefetch: e.prefetch,
                            mode: 'internal',
                            buttonProps: {
                              variant: e.value === i ? g : 'ghost',
                              size: m,
                              disabled: h || e.isDisabled,
                              label: e.label,
                              iconAlone: e.icon,
                              onClick: () => (null == y ? void 0 : y(e.value)),
                            },
                          })
                        : (0, r.tZ)(o.zxk, {
                            variant: e.value === i ? g : 'ghost',
                            size: m,
                            disabled: h || e.isDisabled,
                            label: e.label,
                            iconAlone: e.icon,
                            onClick: () => (null == y ? void 0 : y(e.value)),
                          }),
                      e.counter && e.counter > 0
                        ? (0, r.tZ)(c, {
                            children: (0, r.tZ)(p, {
                              TextVariant: o.xvT.Body.XXXS.Regular,
                              children: e.counter,
                            }),
                          })
                        : null,
                    ],
                  }),
                },
                a + e.value
              )
            ),
          });
        });
      var h = (0, a.memo)(v);
    },
    66888: function (e, t, n) {
      n.d(t, {
        u: function () {
          return a;
        },
        Z: function () {
          return L;
        },
      });
      var r,
        a,
        o = n(78286),
        l = n(58258),
        i = n(99095),
        s = n(54655),
        d = n(38819),
        u = n(392),
        c = n(59370),
        p = n(50964),
        v = n(15328),
        h = n(4565),
        g = n(25834),
        f = n(12556),
        m = n(82078),
        b = n(50825),
        y = n(26726),
        k = n(98949),
        x = n(82803),
        Z = n(75147),
        A = n(89991),
        w = n(49663),
        C = n(40816);
      let B = (0, d.Z)(s.Kqy, { target: 'ef7kvr40' })('width:100%;'),
        T = (0, d.Z)(s.zxk, { target: 'ef7kvr41' })('margin-left:auto;'),
        M = (0, d.Z)(s.Kqy, { target: 'ef7kvr42' })(
          'background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.background.tertiary;
          },
          ';border-radius:10px;width:100%;'
        ),
        S = (e) => {
          let { userAddress: t, legacyMorphoBalance: n, chainId: r, wrapperAllowance: a } = e,
            o = new g.ActionBundleRequirements();
          a < n &&
            o.txs.push({
              type: 'erc20Approve',
              args: [w.rr.legacyMorphoToken, w.rr.morphoTokenWrapper, n],
              tx: {
                to: w.rr.legacyMorphoToken,
                data: (0, u.R)({
                  abi: c.Wo,
                  functionName: 'approve',
                  args: [w.rr.morphoTokenWrapper, n],
                }),
              },
            });
          let l = new g.ActionBundle(r, [], o);
          return (
            (l.tx = () => ({
              to: w.rr.morphoTokenWrapper,
              data: (0, u.R)({
                abi: h.wrappedBackedTokenAbi,
                functionName: 'depositFor',
                args: [t, n],
              }),
              value: 0n,
            })),
            l
          );
        },
        R = (e) => {
          let {
              userAddress: t,
              legacyMorphoBalance: n,
              chainId: r,
              isContract: a,
              bundlerAllowance: o,
              erc2612Nonce: l,
            } = e,
            i = new g.ActionBundleRequirements(),
            s = [],
            d = (0, C.S)({
              amount: n,
              userAddress: t,
              supportsSignatures: !a,
              bundlerAllowance: o,
              erc2612Nonce: l,
              chainId: r,
            });
          return (
            d &&
              (s.push(...d.actions),
              i.signatures.push(...d.requirements.signatures),
              i.txs.push(...d.requirements.txs)),
            new g.ActionBundle(r, s, i)
          );
        },
        P = (0, l.memo)(() => {
          var e, t, n, r, a;
          let { toggleDialog: i } = (0, s.DAv)(),
            { targetChainId: d, account: u } = (0, A.Z_)(),
            { setActiveBundle: h } = (0, Z.H)(),
            { legacyMorphoHolding: g, morphoHolding: C } = (0, k.gz)(),
            B = (0, y.nh)(y.TP.EXPLICIT_WRAP_FLOW_ENABLED),
            [P, D] = (0, v._)('morpho.useExplicitApproveFlow', !1),
            { data: E } = (0, p.useReadContract)({
              query: { enabled: !!u.address && B && P },
              chainId: d,
              abi: c.Wo,
              address: w.rr.legacyMorphoToken,
              functionName: 'allowance',
              args: u.address ? [u.address, w.rr.morphoTokenWrapper] : void 0,
            }),
            _ = (0, l.useMemo)(() => {
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
            O = (0, l.useMemo)(() => {
              var e, t;
              return s.$0l.short
                .digits(2)
                .min(0.01)
                .of(
                  null !== (t = null === (e = C.value) || void 0 === e ? void 0 : e.balance) &&
                    void 0 !== t
                    ? t
                    : 0n,
                  18
                );
            }, [null === (t = C.value) || void 0 === t ? void 0 : t.balance]),
            N = (0, l.useMemo)(() => {
              var e, t, n;
              if (!u.address || !(null === (e = g.value) || void 0 === e ? void 0 : e.balance))
                return;
              let r = {
                userAddress: u.address,
                legacyMorphoBalance: g.value.balance,
                chainId: d,
                wrapperAllowance: null != E ? E : 0n,
              };
              return B && P
                ? S(r)
                : R({
                    ...r,
                    isContract: u.isContract,
                    bundlerAllowance:
                      null !== (t = g.value.erc20Allowances['bundler3.generalAdapter1']) &&
                      void 0 !== t
                        ? t
                        : 0n,
                    erc2612Nonce: null !== (n = g.value.erc2612Nonce) && void 0 !== n ? n : 0n,
                  });
            }, [
              u.address,
              u.isContract,
              P,
              null === (n = g.value) || void 0 === n ? void 0 : n.balance,
              null === (r = g.value) || void 0 === r ? void 0 : r.erc20Allowances,
              null === (a = g.value) || void 0 === a ? void 0 : a.erc2612Nonce,
              d,
              B,
              E,
            ]),
            I = (0, l.useCallback)(() => {
              N &&
                (h(
                  N,
                  [
                    {
                      id: 'wrap',
                      type: x.H.InterfaceOperationType.wrap,
                      options: { isMax: [], disabledPeripheralTokens: new Set() },
                    },
                  ],
                  () => {
                    g.refresh(!0), C.refresh(!0);
                  },
                  !0
                ),
                i((0, o.tZ)(m.Z, {}), { closable: !1 }));
            }, [N, g, C, h, i]);
          return (0, o.BX)(s.Kqy, {
            direction: 'column',
            align: 'center',
            justify: 'center',
            gap: 24,
            children: [
              (0, o.tZ)(T, {
                variant: 'secondary',
                iconAlone: 'ClosePlain20',
                onClick: () => i(!1),
              }),
              (0, o.tZ)(s.qEK, {
                src: 'https://cdn.morpho.org/assets/logos/morpho.svg',
                padding: 0,
                style: { width: '40px', height: '40px' },
              }),
              (0, o.BX)(o.HY, {
                children: [
                  (0, o.tZ)(s.xvT.Title.S, {
                    textAlign: 'center',
                    children: 'Wrap your legacy MORPHO',
                  }),
                  (0, o.tZ)(s.xvT.Body.M.Regular, {
                    textAlign: 'center',
                    children: 'The Morpho DAO has enabled transferability for the MORPHO token!',
                  }),
                  (0, o.tZ)(s.xvT.Body.M.Regular, {
                    textAlign: 'center',
                    children:
                      'Holders of legacy MORPHO tokens on Ethereum will need to wrap their tokens to enable transferability.',
                  }),
                  (0, o.BX)(s.Kqy, {
                    fullWidth: !0,
                    direction: 'column',
                    gap: 's',
                    align: 'center',
                    children: [
                      (0, o.tZ)(s.zxk, {
                        size: 'big',
                        variant: 'primary',
                        label: 'Wrap MORPHO',
                        onClick: I,
                      }),
                      (0, o.tZ)(b.Z, {
                        href: f.IA,
                        buttonProps: { variant: 'secondary', size: 'small', label: 'FAQ' },
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.BX)(M, {
                direction: 'column',
                align: 'center',
                padding: 's',
                gap: 6,
                children: [
                  (0, o.tZ)(s.xvT.Body.XS.Regular, { children: 'Wallet Balance' }),
                  (0, o.tZ)(s.xvT.Body.XS.Regular, {
                    children: 'Legacy MORPHO: '.concat(_, ' MORPHO'),
                  }),
                  (0, o.tZ)(s.xvT.Body.XS.Regular, {
                    children: 'Wrapped MORPHO: '.concat(O, ' MORPHO'),
                  }),
                ],
              }),
              B &&
                (0, o.BX)(s.Kqy, {
                  gap: 'xs',
                  children: [
                    (0, o.tZ)(s.xvT.Body.XXS.Regular, { children: 'Use direct contract calls' }),
                    (0, o.tZ)(s.rsf, {
                      active: P,
                      onClick: (e) => D(e),
                      'data-testid': 'use-explicit-approve-switch',
                    }),
                  ],
                }),
            ],
          });
        });
      var D = (0, l.memo)(() => {
          let { toggleDialog: e } = (0, s.DAv)();
          return (0, o.BX)(B, {
            align: 'center',
            gap: 8,
            justify: 'space-between',
            'data-testid': 'wrap-banner',
            children: [
              (0, o.tZ)('div', {}),
              (0, o.tZ)(s.xvT.Body.M.Regular, {
                lineHeight: 'normal',
                children:
                  'MORPHO is now transferable! Please wrap your MORPHO to the latest version to enable transferability.',
              }),
              (0, o.BX)(s.Kqy, {
                align: 'center',
                gap: 8,
                children: [
                  (0, o.tZ)(s.zxk, {
                    variant: 'primary',
                    size: 'default',
                    onClick: () => e((0, o.tZ)(P, {}), { closable: !0 }),
                    label: 'Wrap',
                  }),
                  (0, o.tZ)(b.Z, {
                    href: f.IA,
                    buttonProps: { variant: 'secondary', size: 'default', label: 'FAQ' },
                  }),
                ],
              }),
            ],
          });
        }),
        E = n(18313),
        _ = (0, l.memo)((e) => {
          let {} = e,
            { account: t, targetChainId: n } = (0, A.Z_)(),
            r = (0, l.useMemo)(() => {
              let e = f.FW.getSafeIdentifier(n),
                r = f.FW.getNameById(n);
              return e
                ? 'https://app.safe.global/apps/open?safe='
                    .concat(e, ':')
                    .concat(null == t ? void 0 : t.address, '&appUrl=')
                    .concat(E.clientEnvs.NEXT_PUBLIC_DEPLOYMENT_URL, '/')
                    .concat(r, '/earn')
                : '#';
            }, [n, null == t ? void 0 : t.address]);
          return (0, o.BX)(s.xvT.Body.M.Regular, {
            lineHeight: 'normal',
            width: '100%',
            justifyContent: 'center',
            textAlign: 'center',
            children: [
              'If you are using a Safe, use the ',
              (0, o.tZ)('a', { href: r, children: 'Morpho Safe App' }),
              ' for an optimal experience',
            ],
          });
        });
      let O =
        'Morpho Association (ADDMO) is not authorized or regulated by the Financial Conduct Authority (FCA), and accordingly, the protections provided by the UK regulatory system will not be available to you when using the products and services provided by Morpho Association. It is your responsibility to ascertain whether you are permitted to use the products and services provided by Morpho Association according to applicable laws or regulations. By accessing this website and the products and services available through it, you acknowledge and confirm that you are a company or partnership with share capital or net assets of at least \xa35m or a trust with total cash and investments of at least \xa310m, or that you have professional experience in matters relating to investments and your ordinary activities involve you in dealing in cryptoassets for the purpose of a business carried on by you. You also acknowledge that cryptoassets are high risk investments and that you deal in them at your own risk.';
      function N() {
        return (0, o.BX)(s.Kqy, {
          direction: 'column',
          align: 'center',
          justify: 'center',
          gap: 'm',
          children: [
            (0, o.tZ)(s.xvT.Body.L.Regular, { children: 'Disclaimer for UK residents' }),
            (0, o.tZ)(s.xvT.Body.S.Regular, { children: O }),
          ],
        });
      }
      var I = (0, l.memo)((e) => {
        let {} = e,
          t = (0, s.dD4)(),
          { toggleDialog: n } = (0, s.DAv)(),
          r = (0, l.useMemo)(() => ''.concat(O.slice(0, 110), '...'), []);
        return (0, o.BX)(s.Kqy, {
          align: 'center',
          justify: 'space-between',
          width: '100%',
          gap: 8,
          children: [
            (0, o.tZ)('div', {}),
            (0, o.tZ)(s.ZT$, {
              TextVariant: t ? s.xvT.Body.XXS.Regular : s.xvT.Body.M.Regular,
              lineHeight: 'normal',
              children: r,
            }),
            (0, o.tZ)(s.zxk, {
              variant: 'ghost',
              size: 'small',
              onClick: () => n((0, o.tZ)(N, {}), { closable: !0 }),
              children: 'See more',
            }),
          ],
        });
      });
      ((r = a || (a = {})).CONFIG = {
        legacyMorpho: { type: 'info', content: (0, o.tZ)(D, {}), dismissable: !0 },
        pageWarning: { type: 'alert', content: null, dismissable: !1 },
        simulate: {
          type: 'info',
          content: (0, o.tZ)(s.xvT.Body.M.Regular, {
            lineHeight: 'normal',
            width: '100%',
            textAlign: 'center',
            children: 'Simulating data based on transactions in Bundler',
          }),
          dismissable: !0,
        },
        ukDisclaimer: { type: 'info', content: (0, o.tZ)(I, {}), dismissable: !1 },
        safeAccount: { type: 'info', content: (0, o.tZ)(_, {}), dismissable: !0 },
      }),
        (r.TypeDef = {
          alert: { background: (e) => e.colors.components.badge },
          info: { background: (e) => e.colors.background.banner },
        });
      let X = (0, d.Z)(s.Kqy, { target: 'e1igxb3q0' })(
        'background:',
        (e) => {
          let { theme: t, variant: n } = e;
          return a.TypeDef[n].background(t);
        },
        ';backdrop-filter:blur(100px);padding:14px 24px;min-height:54px;',
        (0, s.ClW)(s.ieP),
        ';a{text-decoration:underline;}'
      );
      var z = (0, l.memo)((e) => {
          let { className: t, children: n, variant: r = 'alert', onDismiss: a } = e;
          return (0, o.BX)(X, {
            className: t,
            variant: r,
            align: 'center',
            gap: 8,
            children: [
              n,
              a &&
                (0, o.tZ)(s.zxk, {
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
        W = (0, d.Z)('div', { target: 'esgdglv1' })(
          'width:calc(100% - (var(--bundler-width) - var(--bundler-position)));',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{width:100%;}position:fixed;'
        );
      var L = (0, l.memo)((e) => {
        let { className: t } = e,
          { bannersToShow: n, toggleBanner: r } = (0, i.l5)();
        return (0, o.tZ)(q, {
          className: t,
          direction: 'column',
          children: (0, o.tZ)(W, {
            children: n.map((e) => {
              let { id: t, content: n, type: a, dismissable: l } = e;
              return (0, o.tZ)(
                z,
                { variant: a, onDismiss: l ? () => r(t, !1) : void 0, children: n },
                t
              );
            }),
          }),
        });
      });
    },
    4366: function (e, t, n) {
      n.d(t, {
        DashboardClass: function () {
          return a;
        },
        iv: function () {
          return d;
        },
      });
      var r,
        a,
        o = n(78286),
        l = n(58258),
        i = n(54655);
      let s = (0, l.createContext)(null);
      ((r = a || (a = {})).PREVENT_DASHBOARD_CARD_HOVER_CLASS = 'prevent-dashboard-card-hover'),
        (r.DASHBOARD_CARD_BUTTON_EXPAND_CLASS = 'dashboard-card-button-expand');
      let d = () => {
          let e = (0, l.useContext)(s);
          if (!e)
            throw Error('useDashboardContext must be called inside a DashboardContextProvider');
          return e;
        },
        u = (e) => {
          let { isSmallDashboard: t } = e,
            [n, r] = (0, l.useState)(!1),
            [a, o] = (0, l.useState)(!1),
            i = (0, l.useCallback)(() => {
              r((e) => !e);
            }, []),
            s = (0, l.useCallback)(
              (e) => {
                var t;
                (null != e &&
                  null !== (t = e.target) &&
                  void 0 !== t &&
                  t.closest('.prevent-dashboard-card-hover')) ||
                  i();
              },
              [i]
            );
          return (
            (0, l.useEffect)(() => {
              t && r(!1);
            }, [t, r]),
            {
              isDashboardExpanded: n,
              isDashboardHovered: a,
              toggleDashboard: i,
              setIsDashboardHovered: o,
              onClickToggleDashboard: s,
            }
          );
        };
      t.ZP = (0, l.memo)((e) => {
        let { children: t } = e,
          n = (0, i.CPt)(),
          [r, a] = (0, l.useState)('loan'),
          d = u({ isSmallDashboard: n }),
          c = (0, l.useMemo)(
            () => ({
              isSmallDashboard: n,
              borrowDashboardMode: r,
              setBorrowDashboardMode: a,
              ...d,
            }),
            [n, d, r, a]
          );
        return (0, o.tZ)(s.Provider, { value: c, children: t });
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
        o = n(44982),
        l = n(54655),
        i = n(35047),
        s = n(66888),
        d = n(18313),
        u = n(89991),
        c = n(98949),
        p = n(22683),
        v = n(3918);
      let h = (0, a.createContext)(null),
        g = () => {
          let e = (0, a.useContext)(h);
          if (!e) throw Error('useLayoutContext must be called inside a LayoutContextProvider');
          return e;
        };
      t.ZP = (0, a.memo)((e) => {
        var t;
        let { children: n } = e,
          [g, f] = (0, a.useState)(!1),
          [m, b] = (0, a.useState)(!1),
          [y, k] = (0, a.useState)(!0),
          { operations: x } = (0, p.N)(),
          { toggleAnimation: Z } = (0, l.s8G)(),
          A = (0, l.ajf)('s'),
          {
            account: { isConnected: w },
          } = (0, u.Z_)();
        (0, a.useLayoutEffect)(() => {
          w ? Z('default') : Z('loading');
        }, [w, Z]);
        let [C, B] = (0, a.useState)({}),
          [T, M] = (0, a.useState)(),
          S = (0, a.useCallback)(
            (e) => {
              if (A && e) {
                M({ ...e, dismissable: !0 });
                return;
              }
              M(e);
            },
            [A, M]
          ),
          R = (0, a.useMemo)(
            () =>
              (0, i.entries)(C)
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
            [C, T]
          ),
          P = (0, a.useCallback)((e, t) => {
            B((n) => ({ ...n, [e]: t }));
          }, []),
          { account: D } = (0, u.Z_)(),
          [E, _] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          P('pageWarning', !!T && (0, i.isDefined)(T.content));
        }, [T, null == T ? void 0 : T.content, P]),
          (0, a.useEffect)(() => {
            x.length > 0 ? P('simulate', !0) : P('simulate', !1);
          }, [x, P]),
          (0, a.useEffect)(() => {
            P('safeAccount', !D.isSafe && !!D.isContract);
          }, [P, D.isSafe, D.isContract]);
        let { countryCode: O } = (0, v.RA)();
        (0, a.useEffect)(() => {
          P('ukDisclaimer', 'GB' === O);
        }, [P, O]);
        let { legacyMorphoHolding: N } = (0, c.gz)();
        (0, a.useEffect)(() => {
          var e;
          P(
            'legacyMorpho',
            !!(
              (null === (e = N.value) || void 0 === e ? void 0 : e.balance) && N.value.balance > 0n
            )
          );
        }, [null === (t = N.value) || void 0 === t ? void 0 : t.balance, P]),
          (0, a.useEffect)(() => {
            d.clientEnvs.NEXT_PUBLIC_SPINDL_SDK_KEY &&
              (null == D ? void 0 : D.address) &&
              o.ZP.attribute(D.address);
          }, [null == D ? void 0 : D.address]);
        let I = (0, a.useMemo)(
          () => ({
            isMobileLeftPanelOpen: g,
            setMobileLeftPanelOpen: f,
            isMobileRightPanelOpen: m,
            setMobileRightPanelOpen: b,
            isLeftPanelExpanded: y,
            setIsLeftPanelExpanded: k,
            setShowRightPanelMask: _,
            bannersToShow: R,
            toggleBanner: P,
            setPageWarning: S,
            showRightPanelMask: E,
          }),
          [g, m, y, R, P, S, E]
        );
        return (0, r.tZ)(h.Provider, { value: I, children: n });
      });
    },
    3918: function (e, t, n) {
      n.d(t, {
        RA: function () {
          return l;
        },
      });
      var r = n(78286),
        a = n(58258);
      let o = (0, a.createContext)(null),
        l = () => {
          let e = (0, a.useContext)(o);
          if (!e) throw Error('useUtilityContext must be called inside a UtilityContextProvider');
          return e;
        };
      t.ZP = (e) => {
        let { children: t, countryCode: n } = e;
        return (0, r.tZ)(o.Provider, { value: { countryCode: n }, children: t });
      };
    },
    67355: function (e, t, n) {
      n.d(t, {
        J: function () {
          return o;
        },
        L: function () {
          return l;
        },
      });
      var r = n(86842),
        a = n(86384);
      let o = (e) => (0, r.WU)(new Date(1e3 * Number(e)), 'MM/dd/yyyy'),
        l = (e) => {
          let { months: t = 0, days: n = 0 } = (0, a.y)({
            start: 0,
            end: 1e3 * Number(null != e ? e : 0),
          });
          return t > 0 ? ''.concat(t, 'M') : ''.concat(n, 'D');
        };
    },
    27987: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(13191),
        a = n(4565);
      let o = new r.BlueSdkConverter({
        parseAddress: a.safeGetAddress,
        parseNumber: a.safeParseNumber,
      });
    },
  },
]);
