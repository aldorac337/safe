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
    (e._sentryDebugIds[t] = 'f6cd29f9-2a8f-482b-80c1-72f3a9461b1d'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-f6cd29f9-2a8f-482b-80c1-72f3a9461b1d'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4997],
  {
    81919: function (e, t, n) {
      var r = n(78286),
        o = n(58258),
        a = n(54655),
        i = n(4366);
      let l = (e) => {
          var t, n, r;
          let o = null === (t = e[0]) || void 0 === t ? void 0 : t[1],
            a = null === (n = e[e.length - 1]) || void 0 === n ? void 0 : n[1];
          if ('number' != typeof o || 'number' != typeof a) return { hasChange: !1 };
          let i =
            o ||
            (null === (r = e.find((e) => null !== e[1] && e[1] > 0)) || void 0 === r
              ? void 0
              : r[1]);
          return i
            ? { percentageChange: (a - i) / i, rawChange: a - i, hasChange: !0 }
            : { hasChange: !1 };
        },
        s = { percentageChange: 'Click to show $ change.', rawChange: 'Click to show % change.' };
      t.Z = (0, o.memo)((e) => {
        let { formattedData: t } = e,
          [n, u] = (0, o.useState)(!0),
          {
            percentageChange: d,
            rawChange: c,
            hasChange: v,
          } = (0, o.useMemo)(() => l(null != t ? t : []), [t]),
          p = (0, o.useMemo)(
            () =>
              n
                ? a.$0l.percent.default('-').digits(2).unit('%').sign().trailingZero(!1).of(d)
                : a.$0l.short.unit('$').sign().digits(2).readable().of(c),
            [n, d, c]
          );
        return v && t
          ? (0, r.tZ)(a.ua7, {
              content: s[n ? 'percentageChange' : 'rawChange'],
              children: (0, r.tZ)(a.Vp9, {
                className: i.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                variant: 'pnl',
                label: p,
                onClick: () => u((e) => !e),
              }),
            })
          : null;
      });
    },
    53644: function (e, t, n) {
      n.d(t, {
        r: function () {
          return u;
        },
      });
      var r = n(78286),
        o = n(58258),
        a = n(40252),
        i = n(54655),
        l = n(89991);
      let s = (0, n(38819).Z)(i.xvT.Body.XXS.Regular, { target: 'e1sp0bs60' })('text-align:end;'),
        u = (0, o.memo)((e) => {
          var t, n;
          let { tokenAddress: o } = e,
            { targetChainId: i } = (0, l.Z_)();
          return (
            null === (t = a.permissionedCoinbaseTokens[i]) || void 0 === t ? void 0 : t.has(o)
          )
            ? (0, r.tZ)(v, {})
            : (null === (n = a.permissionedBackedTokens[i]) || void 0 === n ? void 0 : n.has(o))
              ? (0, r.tZ)(c, {})
              : (0, r.tZ)(d, {});
        }),
        d = () =>
          (0, r.tZ)(s, { color: 'constant.color.error', children: 'Authorization required.' }),
        c = () =>
          (0, r.BX)(s, {
            color: 'constant.color.error',
            children: [
              'Backed authorization required.',
              ' ',
              (0, r.tZ)(i.dLw, {
                href: 'https://assets.backed.fi/onboarding',
                underlined: !0,
                children: 'Learn more here →',
              }),
            ],
          }),
        v = () =>
          (0, r.BX)(s, {
            color: 'constant.color.error',
            children: [
              'Coinbase attestation required.',
              ' ',
              (0, r.tZ)(i.dLw, {
                href: 'https://www.coinbase.com/onchain-verify',
                underlined: !0,
                children: 'Learn more here →',
              }),
            ],
          });
    },
    92148: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(78286),
        o = n(58258),
        a = n(15328),
        i = n(54655),
        l = n(38819);
      let s = '125px',
        u = (0, l.Z)('div', { target: 'ebvbqmv0' })('position:relative;width:100%;height:', s, ';'),
        d = (0, l.Z)('video', { target: 'ebvbqmv1' })(
          'width:100%;height:100%;object-fit:cover;opacity:',
          (e) => {
            let { $isLoading: t } = e;
            return t ? 0 : 1;
          },
          ';transition:opacity 0.3s ease-in-out;'
        ),
        c = (0, l.Z)('div', { target: 'ebvbqmv2' })(
          'position:absolute;width:100%;height:100%;border-radius:50%;border:',
          '1.25px',
          ' solid\n    ',
          (e) => {
            let { theme: t } = e;
            return t.colors.constant.color.active;
          },
          ';top:50%;left:50%;transform:translate(-50%,-50%);will-change:transform,opacity;animation:pulse 1s infinite;@keyframes pulse{0%{transform:translate(-50%,-50%) scale(1);opacity:1;}100%{transform:translate(-50%,-50%) scale(',
          2,
          ');opacity:0;}}'
        ),
        v = (0, l.Z)('div', { target: 'ebvbqmv3' })('position:relative;z-index:2;'),
        p = (0, l.Z)('div', { target: 'ebvbqmv4' })('position:relative;'),
        f = (0, l.Z)('img', { target: 'ebvbqmv5' })('width:100%;height:', s, ';object-fit:cover;');
      var h = (0, o.memo)((e) => {
        let {
            children: t,
            featureKey: n,
            videoUrl: l,
            fallbackImageUrl: s,
            title: h,
            description: m,
            autoplay: g = !0,
            enabled: b = !0,
            side: y = 'top',
            align: w = 'center',
          } = e,
          [k, C] = (0, a._)('morpho.'.concat(n, '-callout'), !1),
          [T, Z] = (0, o.useState)(!0),
          [x, S] = (0, o.useState)(!1),
          A = (0, o.useCallback)(() => {
            C(!0);
          }, [C]),
          z = b && !k;
        return z
          ? (0, r.BX)(i.J2e.Root, {
              open: !0,
              children: [
                (0, r.tZ)(i.J2e.Anchor, {
                  children: (0, r.BX)(p, {
                    children: [
                      (0, r.tZ)(c, { 'aria-hidden': 'true' }),
                      (0, r.tZ)(v, { children: t({ visible: z, markAsSeen: A }) }),
                    ],
                  }),
                }),
                (0, r.tZ)(i.J2e.Portal, {
                  children: (0, r.BX)(i.J2e.Content, {
                    style: { border: 'none', padding: 0, outline: 'none', maxWidth: 300 },
                    collisionPadding: 12,
                    zIndex: 'mid',
                    onClick: (e) => e.stopPropagation(),
                    role: 'dialog',
                    'aria-labelledby': ''.concat(n, '-title'),
                    side: y,
                    align: w,
                    children: [
                      (0, r.BX)(u, {
                        children: [
                          T &&
                            !x &&
                            (0, r.tZ)(i.OdW, { borderRadius: 0, width: '100%', height: '125px' }),
                          x
                            ? (0, r.tZ)(f, {
                                src: s,
                                alt: 'Feature callout',
                                'aria-hidden': 'true',
                              })
                            : (0, r.tZ)(d, {
                                src: l,
                                autoPlay: g,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                preload: 'metadata',
                                $isLoading: T,
                                onLoadedData: () => Z(!1),
                                onError: () => {
                                  S(!0), Z(!1);
                                },
                                'aria-hidden': 'true',
                              }),
                          (0, r.tZ)(i.zxk, {
                            style: { position: 'absolute', top: 10, right: 10 },
                            onClick: A,
                            size: 'small',
                            variant: 'ghost',
                            iconAlone: 'ClosePlain20',
                          }),
                        ],
                      }),
                      (0, r.BX)(i.Kqy, {
                        padding: 's',
                        direction: 'column',
                        gap: 'xs',
                        children: [
                          (0, r.tZ)(i.xvT.Body.XS.Regular, {
                            id: ''.concat(n, '-title'),
                            color: 'text.body',
                            children: h,
                          }),
                          (0, r.tZ)(i.Kqy, {
                            direction: 'column',
                            gap: 'xs',
                            children: m.map((e, t) =>
                              (0, r.tZ)(
                                i.xvT.Body.XS.Regular,
                                { color: 'text.secondary', children: e },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          : t({});
      });
    },
    76992: function (e, t, n) {
      n.d(t, {
        E: function () {
          return f;
        },
      });
      var r = n(78286),
        o = n(58258),
        a = n(54655),
        i = n(50825),
        l = n(38819),
        s = n(16690);
      let u = (0, l.Z)('div', { target: 'eikqm6p0' })(
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
        d = (0, l.Z)('div', { target: 'eikqm6p1' })('position:relative;'),
        c = (0, l.Z)(a.Kqy, { target: 'eikqm6p2' })(
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
        v = (0, l.Z)(a.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        p = (0, o.forwardRef)(function (e, t) {
          let {
            options: n,
            id: o,
            value: l,
            noPadding: s = !1,
            noGap: p = !1,
            disabled: f = !1,
            variant: h = 'primary',
            backgroundVariant: m = 'primary',
            size: g = 'small',
            className: b,
            onChange: y,
            ...w
          } = e;
          return (0, r.tZ)(u, {
            noPadding: s,
            noGap: p,
            backgroundVariant: m,
            ref: t,
            className: b,
            ...w,
            children: n.map((e) =>
              (0, r.tZ)(
                a.ua7,
                {
                  disabled: !e.tooltip,
                  content: e.tooltip,
                  offset: s ? 4 : 9,
                  children: (0, r.BX)(d, {
                    children: [
                      e.href
                        ? (0, r.tZ)(i.Z, {
                            href: e.href,
                            prefetch: e.prefetch,
                            mode: 'internal',
                            buttonProps: {
                              variant: e.value === l ? h : 'ghost',
                              size: g,
                              disabled: f || e.isDisabled,
                              label: e.label,
                              iconAlone: e.icon,
                              onClick: () => (null == y ? void 0 : y(e.value)),
                            },
                          })
                        : (0, r.tZ)(a.zxk, {
                            variant: e.value === l ? h : 'ghost',
                            size: g,
                            disabled: f || e.isDisabled,
                            label: e.label,
                            iconAlone: e.icon,
                            onClick: () => (null == y ? void 0 : y(e.value)),
                          }),
                      e.counter && e.counter > 0
                        ? (0, r.tZ)(c, {
                            children: (0, r.tZ)(v, {
                              TextVariant: a.xvT.Body.XXXS.Regular,
                              children: e.counter,
                            }),
                          })
                        : null,
                    ],
                  }),
                },
                o + e.value
              )
            ),
          });
        });
      var f = (0, o.memo)(p);
    },
    33210: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(78286);
      n(58258);
      var o = n(35047);
      let a = (e, t) => {
        if (e && t)
          for (let n in t)
            Array.isArray(e[n])
              ? (e[n] = e[n].map((e) => a(e, t[n])))
              : 'object' == typeof t[n]
                ? (e[n] = a(e[n], t[n]))
                : (0, o.isDefined)(e[n]) && (e[n] = BigInt(e[n]));
        return e;
      };
      var i = (e) => (t) => {
        let { queryResult: n, queryBigIntFieldMap: i } = t;
        if (
          (void 0 === n &&
            console.warn('withQueryResultConverter: queryResult is not provided to the component.'),
          (0, o.isDefined)(i) ||
            console.warn(
              'withQueryResultConverter: queryBigIntFieldMap is not provided. BigInt conversion will not be applied.'
            ),
          (0, o.isDefined)(n) && (0, o.isDefined)(i))
        ) {
          let o = a(n.data, i);
          return (0, r.tZ)(e, { ...t, queryResult: { ...n, data: o } });
        }
        return (0, r.tZ)(e, { ...t });
      };
    },
    4366: function (e, t, n) {
      n.d(t, {
        DashboardClass: function () {
          return o;
        },
        iv: function () {
          return u;
        },
      });
      var r,
        o,
        a = n(78286),
        i = n(58258),
        l = n(54655);
      let s = (0, i.createContext)(null);
      ((r = o || (o = {})).PREVENT_DASHBOARD_CARD_HOVER_CLASS = 'prevent-dashboard-card-hover'),
        (r.DASHBOARD_CARD_BUTTON_EXPAND_CLASS = 'dashboard-card-button-expand');
      let u = () => {
          let e = (0, i.useContext)(s);
          if (!e)
            throw Error('useDashboardContext must be called inside a DashboardContextProvider');
          return e;
        },
        d = (e) => {
          let { isSmallDashboard: t } = e,
            [n, r] = (0, i.useState)(!1),
            [o, a] = (0, i.useState)(!1),
            l = (0, i.useCallback)(() => {
              r((e) => !e);
            }, []),
            s = (0, i.useCallback)(
              (e) => {
                var t;
                (null != e &&
                  null !== (t = e.target) &&
                  void 0 !== t &&
                  t.closest('.prevent-dashboard-card-hover')) ||
                  l();
              },
              [l]
            );
          return (
            (0, i.useEffect)(() => {
              t && r(!1);
            }, [t, r]),
            {
              isDashboardExpanded: n,
              isDashboardHovered: o,
              toggleDashboard: l,
              setIsDashboardHovered: a,
              onClickToggleDashboard: s,
            }
          );
        };
      t.ZP = (0, i.memo)((e) => {
        let { children: t } = e,
          n = (0, l.CPt)(),
          [r, o] = (0, i.useState)('loan'),
          u = d({ isSmallDashboard: n }),
          c = (0, i.useMemo)(
            () => ({
              isSmallDashboard: n,
              borrowDashboardMode: r,
              setBorrowDashboardMode: o,
              ...u,
            }),
            [n, u, r, o]
          );
        return (0, a.tZ)(s.Provider, { value: c, children: t });
      });
    },
    34896: function (e, t, n) {
      n.d(t, {
        H: function () {
          return a;
        },
      });
      var r = n(45842),
        o = n(82803);
      let a = (e) => {
        switch (e.type) {
          case o.H.InterfaceOperationType.repay:
          case o.H.InterfaceOperationType.borrow:
          case o.H.InterfaceOperationType.metaMorphoDeposit:
          case o.H.InterfaceOperationType.metaMorphoWithdraw:
            return e.assets > 0n || e.shares > 0n;
          case o.H.InterfaceOperationType.withdrawCollateral:
          case o.H.InterfaceOperationType.supplyCollateral:
            return e.assets > 0n;
          case o.H.InterfaceOperationType.supplyCollateralBorrow:
          case o.H.InterfaceOperationType.withdrawCollateralRepay:
            return e.collateralAssets > 0n || e.loanAssets > 0n || e.loanShares > 0n;
          case o.H.InterfaceOperationType.zap:
            return e.collateralAssets > 0n && e.marketTo !== r.DR;
          case o.H.InterfaceOperationType.migrateSupply:
            return e.assets > 0n;
          case o.H.InterfaceOperationType.migrateBorrow:
            return e.collateralAssets > 0n || e.loanAssets > 0n;
          default:
            throw Error('Not implemented');
        }
      };
    },
    89805: function (e, t, n) {
      n.d(t, {
        _: function () {
          return v;
        },
      });
      var r = n(58258),
        o = n(68612),
        a = n(40252),
        i = n(35047),
        l = n(51196),
        s = n(89991),
        u = n(34896),
        d = n(57054);
      let c = a.MathLib.MAX_UINT_160,
        v = function (e, t, n) {
          var v;
          let p = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            { account: f } = (0, s.Z_)(),
            h =
              null !== (v = null == f ? void 0 : f.address) && void 0 !== v
                ? v
                : '0x0000000000000000000000000000000000000001',
            m = (0, r.useMemo)(
              () =>
                p
                  ? e &&
                    (0, l.produceImmutable)(e, (e) => {
                      var t, n;
                      (0, i.keys)(e.tokens).forEach((t) => {
                        var n, r, i, l;
                        let s =
                          null !==
                            (l = (r =
                              null !== (i = (n = e.holdings)[h]) && void 0 !== i ? i : (n[h] = {}))[
                              t
                            ]) && void 0 !== l
                            ? l
                            : (r[t] = new a.Holding({
                                user: h,
                                token: t,
                                balance: 0n,
                                erc20Allowances: {
                                  morpho: 0n,
                                  permit2: 0n,
                                  'bundler3.generalAdapter1': o.zL,
                                },
                                permit2BundlerAllowance: { amount: 0n, expiration: 0n, nonce: 0n },
                              }));
                        (s.canTransfer = !0), (s.balance += c);
                      }),
                        (0, i.keys)(e.markets).forEach((t) => {
                          var n, r, o, i;
                          (null !==
                            (i = (r =
                              null !== (o = (n = e.positions)[h]) && void 0 !== o
                                ? o
                                : (n[h] = {}))[t]) &&
                            void 0 !== i) ||
                            (r[t] = new a.Position({
                              user: h,
                              marketId: t,
                              supplyShares: 0n,
                              borrowShares: 0n,
                              collateral: 0n,
                            }));
                        }),
                        (null !== (n = (t = e.users)[h]) && void 0 !== n) ||
                          (t[h] = new a.User({
                            address: h,
                            isBundlerAuthorized: !1,
                            morphoNonce: 0n,
                          }));
                    })
                  : e,
              [e, p, h]
            ),
            g = (0, r.useMemo)(() => ((0, u.H)(t) ? [t] : []), [t]),
            [b, y] = (0, d.b)(m, g, n, h),
            { steps: w, exceededToken: k } = (0, r.useMemo)(() => {
              let e;
              return p
                ? {
                    steps:
                      h &&
                      (null == b
                        ? void 0
                        : b.map((n) =>
                            (0, l.produceImmutable)(n, (n) => {
                              var r;
                              let o = {};
                              (0, i.values)(
                                null !== (r = n.holdings[h]) && void 0 !== r ? r : {}
                              ).forEach((r) => {
                                if (!r) return;
                                let l = n.getBundleAssetBalances(
                                    h,
                                    r.token,
                                    a.DEFAULT_SLIPPAGE_TOLERANCE
                                  ),
                                  s = r.balance - c,
                                  { virtualFinalBalance: u, virtualDealtBalance: d } = (0,
                                  i.values)(null == l ? void 0 : l.allocations)
                                    .filter(i.isDefined)
                                    .reduce(
                                      (e, n) => {
                                        var r;
                                        let { type: o, srcAmount: a, dstAmount: i } = n;
                                        return (
                                          !(i > 0n) ||
                                            (null === (r = t.options.disabledPeripheralTokens) ||
                                            void 0 === r
                                              ? void 0
                                              : r.has(o)) ||
                                            ((e.virtualFinalBalance += i),
                                            (e.virtualDealtBalance += (c * i) / a)),
                                          e
                                        );
                                      },
                                      { virtualFinalBalance: 0n, virtualDealtBalance: 0n }
                                    ),
                                  v = n.tryGetToken(r.token);
                                u < d &&
                                  v &&
                                  (!e || (null == v ? void 0 : v.address) === a.NATIVE_ADDRESS) &&
                                  (e = new a.Token(v)),
                                  (o[r.token] = new a.Holding({
                                    ...r,
                                    balance: a.MathLib.max(0n, s),
                                  }));
                              }),
                                (n.holdings[h] = o);
                            })
                          )),
                    exceededToken: e,
                  }
                : { steps: b, exceededToken: void 0 };
            }, [t.options.disabledPeripheralTokens, p, h, b]);
          return [w, y, h, k];
        };
    },
    16237: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(58258),
        o = n(91289),
        a = n(16035);
      let i = a.z.object({
          columnVisibility: a.z.record(a.z.boolean()),
          sorting: a.z.array(a.z.object({ id: a.z.string(), desc: a.z.boolean() })),
          columnFilters: a.z.array(
            a.z.object({
              id: a.z.string(),
              value: a.z
                .unknown()
                .refine((e) => void 0 !== e, { message: 'Value must not be undefined' }),
            })
          ),
          version: a.z.number(),
        }),
        l = (e, t) => {
          let n = i.safeParse(e);
          if (!n.success)
            return (
              console.warn('Invalid TableSettings: '.concat(JSON.stringify(n.error.errors))), null
            );
          let r = n.data.version;
          return r !== t.version
            ? (console.warn(
                'TableSettings version mismatch: '.concat(r, ' !== ').concat(t.version)
              ),
              null)
            : n.data;
        },
        s = (e) => {
          let { pageKey: t, tableSettingsObjectKey: n, defaultTableSettings: r } = e;
          try {
            var a;
            let e = (0, o.e)();
            if (!e) return r;
            let i = null === (a = e[t]) || void 0 === a ? void 0 : a[n],
              s = l(i, r);
            if (s) return s;
            return r;
          } catch (e) {
            return (
              console.warn(
                'Failed to get TableSettings, setting to defaultTableSettings: '.concat(
                  JSON.stringify(r)
                )
              ),
              r
            );
          }
        },
        u = (e) => {
          let {
            pageKey: t,
            tableSettingsObjectKey: n,
            defaultTableSettings: r,
            key: a,
            valueToStore: i,
          } = e;
          try {
            let e = {
              ...s({ pageKey: t, tableSettingsObjectKey: n, defaultTableSettings: r }),
              [a]: i,
            };
            (0, o.K)([t, n], e);
          } catch (e) {
            console.warn(
              'Failed to set TableSettings: '
                .concat(e, ' - Settings: \n       ')
                .concat(
                  JSON.stringify({ pageKey: t, tableSettingsObjectKey: n, key: a, valueToStore: i })
                )
            );
          }
        };
      var d = (e) => {
        let { pageKey: t, tableSettingsObjectKey: n, defaultTableSettings: o } = e,
          [a, i] = (0, r.useState)(() =>
            s({ pageKey: t, tableSettingsObjectKey: n, defaultTableSettings: o })
          ),
          l = (0, r.useCallback)(
            (e, r) => {
              i((a) => {
                let i = r instanceof Function ? r(a[e]) : r;
                return (
                  u({
                    pageKey: t,
                    tableSettingsObjectKey: n,
                    defaultTableSettings: o,
                    key: e,
                    valueToStore: i,
                  }),
                  { ...a, [e]: i }
                );
              });
            },
            [t, n, o]
          ),
          d = (0, r.useCallback)(
            (e) => {
              l('columnVisibility', e);
            },
            [l]
          ),
          c = (0, r.useCallback)(
            (e) => {
              l('sorting', e);
            },
            [l]
          ),
          v = (0, r.useCallback)(
            (e) => {
              l('columnFilters', e);
            },
            [l]
          ),
          p = (0, r.useCallback)(() => {
            c(o.sorting);
          }, [null == o ? void 0 : o.sorting, c]);
        return {
          columnVisibility: a.columnVisibility,
          columnFilters: a.columnFilters,
          sorting: a.sorting,
          setColumnFilters: v,
          setColumnVisibility: d,
          setSorting: c,
          resetSorting: p,
        };
      };
    },
    55135: function (e, t, n) {
      n.d(t, {
        CT: function () {
          return o;
        },
        Mh: function () {
          return l;
        },
        qk: function () {
          return u;
        },
        ub: function () {
          return i;
        },
      });
      var r,
        o,
        a = n(16035);
      let i = 'morpho.userSettings',
        l = 1;
      ((r = o || (o = {})).Root = 'root'),
        (r.Earn = 'earn'),
        (r.Borrow = 'borrow'),
        (r.Explore = 'explore'),
        (r.Vault = 'vault'),
        (r.Market = 'market');
      let s = a.z.object({
          version: a.z.coerce
            .number()
            .refine((e) => e === l, { message: 'Version must be exactly '.concat(l) }),
          root: a.z.record(a.z.unknown()).optional(),
          earn: a.z.record(a.z.unknown()).optional(),
          borrow: a.z.record(a.z.unknown()).optional(),
          explore: a.z.record(a.z.unknown()).optional(),
          vault: a.z.record(a.z.unknown()).optional(),
          market: a.z.record(a.z.unknown()).optional(),
        }),
        u = (e) => {
          try {
            let t = JSON.parse(e),
              n = s.safeParse(t);
            if (n.success) return n.data;
            return (
              console.warn('Invalid UserSettings: '.concat(JSON.stringify(n.error.errors))), null
            );
          } catch (e) {
            return null;
          }
        };
    },
    91289: function (e, t, n) {
      n.d(t, {
        K: function () {
          return u;
        },
        e: function () {
          return s;
        },
      });
      var r = n(71938),
        o = n(75833),
        a = n(35047),
        i = n(55135);
      let l = { version: i.Mh },
        s = () => {
          let e = (0, r.getCookie)(i.ub),
            t = (0, i.qk)(e);
          return (0, a.isDefined)(e) && !(0, a.isDefined)(t) && (0, r.deleteCookie)(i.ub), t;
        },
        u = (e, t) => {
          let n = s() || l,
            a = (0, o.Z)(n, e, t);
          (0, r.setCookie)(i.ub, JSON.stringify(a));
        };
    },
    91767: function (e, t, n) {
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var r = n(40252);
      let o = (e, t, n) => {
        let o = t && Math.ceil(t / e),
          a = (0, r.isFetched)(n) ? n + 1 : n;
        return o && a === o ? t % e : e;
      };
    },
    60410: function (e, t, n) {
      n.d(t, {
        e: function () {
          return r;
        },
      });
      function r(e) {
        let { type: t, srcToken: n } = e;
        switch (t) {
          case 'wrapped-vault':
          case 'vault':
            return 'Allow '.concat(n.symbol, ' deposit');
          case 'wrapped':
            return 'Allow '.concat(n.symbol, ' wrapping');
          case 'unwrapped-staked-wrapped':
          case 'staked-wrapped':
            return 'Allow '.concat(n.symbol, ' staking');
        }
        throw Error('Unhandled peripheral token type: "'.concat(t, '"'));
      }
    },
    34937: function (e, t, n) {
      n.d(t, {
        Ai: function () {
          return d;
        },
        Iz: function () {
          return u;
        },
        Vl: function () {
          return s;
        },
      });
      var r,
        o,
        a = n(56489),
        i = n(17965),
        l = n(35047);
      function s(e) {
        return (0, a.Z)(e, { unit: 'mo', duration: 3 })
          ? 'quarterlyNetApy'
          : 'mo' === e
            ? 'monthlyNetApy'
            : 'w' === e
              ? 'weeklyNetApy'
              : 'allTimeNetApy';
      }
      function u() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return Math.floor(Number(l.Time.timestamp()) / 60) * e;
      }
      function d(e) {
        let { timeFrame: t, now: n } = e;
        return {
          startTimestamp: t ? n - l.Time.s.fromPeriod(t) : 0,
          endTimestamp: n,
          interval: 'w' === t ? i.TimeseriesInterval.Hour : i.TimeseriesInterval.Day,
        };
      }
      ((r = o || (o = {})).OneDay = '1d'),
        (r.OneWeek = '1w'),
        (r.OneMonth = '1m'),
        (r.ThreeMonths = '3m'),
        (r.OneYear = '1y'),
        (r.YearToDay = 'ytd'),
        (r.AllTime = 'all');
    },
    53745: function (e, t, n) {
      var r = n(58258);
      t.Z = (e, t, n) =>
        (0, r.useMemo)(() => {
          var r;
          if (!n) return !1;
          if (!e) return !0;
          let o = null == t ? void 0 : t.tryGetHolding(e, n);
          return null === (r = null == o ? void 0 : o.canTransfer) || void 0 === r || r;
        }, [t, e, n]);
    },
    66395: function (e, t, n) {
      var r = n(58258);
      t.Z = (e, t, n) =>
        (0, r.useMemo)(
          () =>
            n
              ? 'You must lower your LTV below the Liquidation LTV to take this action'
              : e
                ? 'Insufficient '.concat(e.symbol, ' Balance')
                : t,
          [t, n, e]
        );
    },
    34550: function (e, t, n) {
      var r = n(58258),
        o = n(3100);
      t.Z = (e, t, n, a, i, l, s, u, d, c, v) =>
        (0, r.useMemo)(
          () =>
            v
              ? ''.concat((0, o.Z)(e), ' disabled')
              : t
                ? 'Enter an amount'
                : c
                  ? 'Wrong network'
                  : !n && a
                    ? 'Editing'
                    : u && d
                      ? 'Could not fetch block'
                      : i ||
                        (s
                          ? s.message
                          : 0 !== l.length && (1 !== l.length || n)
                            ? 'Finalize bundle'
                            : 'Review '.concat(e)),
          [t, a, d, n, l.length, u, s, i, c, e, v]
        );
    },
    90836: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
      });
      var r = n(58258);
      let o = (e) => {
        let { defaultPageSize: t = 25 } = e,
          [n, o] = (0, r.useState)({ pageIndex: 0, pageSize: t });
        return {
          first: n.pageSize,
          skip: n.pageIndex * n.pageSize,
          pagination: n,
          onPaginationChange: o,
          reset: () => {
            o({ pageIndex: 0, pageSize: t });
          },
        };
      };
    },
    83669: function (e, t, n) {
      n.d(t, {
        s: function () {
          return l;
        },
      });
      var r = n(58258),
        o = n(56489),
        a = n(63658);
      let i = (e, t, n) => {
        let a = (0, o.Z)(n, e),
          i = (0, r.useRef)(null !== t && a);
        return i.current && !a && (i.current = !1), i.current;
      };
      function l(e) {
        let {
            queryDocument: t,
            queryVariables: n,
            serverQueryVariables: r,
            serverQueryResult: o,
            skipClientQuery: l,
          } = e,
          s = i(r, o, n),
          u = (0, a.aM)(t, { variables: n, skip: null != l ? l : s });
        return s ? Object.assign(u, o) : u;
      }
    },
    68866: function (e, t, n) {
      var r = n(58258),
        o = n(35047);
      t.Z = (e) => {
        let { pageInfo: t, filters: n, first: a, error: i } = e,
          [l, s] = (0, r.useState)(),
          u = (0, r.useMemo)(() => {
            if (!n) return;
            let { sorting: e, ...t } = n;
            return JSON.stringify(t);
          }, [n]),
          d = (0, r.useRef)(u);
        (0, r.useEffect)(() => {
          if (i) {
            s(void 0);
            return;
          }
          d.current !== u && (s(void 0), (d.current = u)),
            (0, o.isDefined)(null == t ? void 0 : t.countTotal) && s(t.countTotal);
        }, [u, t, i]);
        let c = (0, r.useMemo)(() => {
          if (void 0 !== a) return l ? Math.ceil(l / a) : l;
        }, [l, a]);
        return { totalItemsCount: l, pageCount: c };
      };
    },
    57892: function (e, t, n) {
      n.d(t, {
        Fj: function () {
          return d;
        },
        yM: function () {
          return i;
        },
      });
      var r = n(35047);
      let o = (e) => {
        let t,
          { simulationError: n, data: r, error: o, blockError: a, fetchError: i } = e;
        return n ? (t = n) : !r && o ? (t = o) : a ? (t = a) : i && (t = i), t;
      };
      var a = n(4205);
      let i = (e, t) => {
        var n, r, i, l;
        let {
          data: s,
          error: u,
          blockError: d,
          simulationError: c,
          isFetching: v,
          isPending: p,
        } = (0, a.f)(t);
        if (null == e || p) return { data: void 0, error: void 0, isFetching: !1, isPending: !0 };
        let f =
          null == s
            ? void 0
            : null === (n = s.tryGetMarket(e)) || void 0 === n
              ? void 0
              : n.accrueInterest(s.block.timestamp);
        return {
          data: f,
          error: o({
            simulationError: c,
            data: f,
            error: null == u ? void 0 : null === (r = u.markets) || void 0 === r ? void 0 : r[e],
            blockError: d,
          }),
          isFetching:
            null !==
              (l =
                !f &&
                (null == v ? void 0 : null === (i = v.markets) || void 0 === i ? void 0 : i[e])) &&
            void 0 !== l &&
            l,
          isPending: p,
        };
      };
      var l = n(58258),
        s = n(40252),
        u = n(12556);
      let d = (e, t) => {
        var n, i, d;
        let {
            data: c,
            error: v,
            blockError: p,
            simulationError: f,
            isFetching: h,
            isPending: m,
          } = (0, a.f)(t),
          g = null != e ? (null == c ? void 0 : c.tryGetVault(e)) : void 0,
          { accrualVault: b } = (0, u.HN)(
            (e) => {
              if (null == g) return { markets: [], positions: [], marketConfigs: [] };
              let t = g.withdrawQueue.map((e) => c.tryGetMarket(e)),
                n = g.withdrawQueue.map((e) => c.tryGetPosition(g.address, e)),
                r = g.withdrawQueue.map((e) => c.tryGetVaultMarketConfig(g.address, e));
              if (
                t.length === (null == e ? void 0 : e.markets.length) &&
                t.every((t, n) => t === (null == e ? void 0 : e.markets[n])) &&
                n.length === (null == e ? void 0 : e.positions.length) &&
                n.every((t, n) => t === (null == e ? void 0 : e.positions[n])) &&
                r.length === (null == e ? void 0 : e.marketConfigs.length) &&
                r.every((t, n) => t === (null == e ? void 0 : e.marketConfigs[n]))
              )
                return e;
              if (t.some((e) => null == e) || n.some((e) => null == e) || r.some((e) => null == e))
                return { markets: t, positions: n, marketConfigs: r };
              let o = g.withdrawQueue.map((e, o) => ({
                config: r[o],
                position: new s.AccrualPosition(n[o], t[o]),
              }));
              return {
                markets: t,
                positions: n,
                marketConfigs: r,
                accrualVault: new s.AccrualVault(g, o),
              };
            },
            [g, c]
          ),
          y = (0, l.useMemo)(
            () =>
              ((null == g ? void 0 : g.address) != null &&
                ((!g && (null == v ? void 0 : v.vaults)) ||
                  (null == g
                    ? void 0
                    : g.withdrawQueue
                        .map((e) => {
                          var t;
                          return (
                            !(null == c ? void 0 : c.tryGetMarket(e)) &&
                            (null == v
                              ? void 0
                              : null === (t = v.markets) || void 0 === t
                                ? void 0
                                : t[e])
                          );
                        })
                        .find(r.isDefined)) ||
                  (null == g
                    ? void 0
                    : g.withdrawQueue
                        .map((e) => {
                          var t, n;
                          return (
                            !(null == c ? void 0 : c.tryGetPosition(g.address, e)) &&
                            (null == v
                              ? void 0
                              : null === (n = v.positions) || void 0 === n
                                ? void 0
                                : null === (t = n[g.address]) || void 0 === t
                                  ? void 0
                                  : t[e])
                          );
                        })
                        .find(r.isDefined)) ||
                  (null == g
                    ? void 0
                    : g.withdrawQueue
                        .map((e) => {
                          var t, n;
                          return (
                            !(null == c ? void 0 : c.tryGetVaultMarketConfig(g.address, e)) &&
                            (null == v
                              ? void 0
                              : null === (n = v.vaultMarketConfigs) || void 0 === n
                                ? void 0
                                : null === (t = n[g.address]) || void 0 === t
                                  ? void 0
                                  : t[e])
                          );
                        })
                        .find(r.isDefined)))) ||
              void 0,
            [
              g,
              null == v ? void 0 : v.vaults,
              null == v ? void 0 : v.markets,
              null == v ? void 0 : v.positions,
              null == v ? void 0 : v.vaultMarketConfigs,
              c,
            ]
          );
        return null == e || m
          ? { data: void 0, error: void 0, isFetching: !1, isPending: !0 }
          : {
              data: b,
              error: o({
                simulationError: f,
                data: b,
                error: null == v ? void 0 : null === (n = v.vaults) || void 0 === n ? void 0 : n[e],
                blockError: p,
                fetchError: y,
              }),
              isFetching:
                null !==
                  (d =
                    !g &&
                    (null == h
                      ? void 0
                      : null === (i = h.vaults) || void 0 === i
                        ? void 0
                        : i[e])) &&
                void 0 !== d &&
                d,
              isPending: m,
            };
      };
    },
  },
]);
