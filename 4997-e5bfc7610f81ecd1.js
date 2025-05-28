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
    (e._sentryDebugIds[t] = '7bcb355b-c439-400e-add1-8137291854df'),
    (e._sentryDebugIdIdentifier = 'sentry-dbid-7bcb355b-c439-400e-add1-8137291854df'));
} catch (e) {}
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4997],
  {
    81919: function (e, t, n) {
      var r = n(78286),
        o = n(58258),
        i = n(54655),
        a = n(4366);
      let l = (e) => {
          var t, n, r;
          let o = null === (t = e[0]) || void 0 === t ? void 0 : t[1],
            i = null === (n = e[e.length - 1]) || void 0 === n ? void 0 : n[1];
          if ('number' != typeof o || 'number' != typeof i) return { hasChange: !1 };
          let a =
            o ||
            (null === (r = e.find((e) => null !== e[1] && e[1] > 0)) || void 0 === r
              ? void 0
              : r[1]);
          return a
            ? { percentageChange: (i - a) / a, rawChange: i - a, hasChange: !0 }
            : { hasChange: !1 };
        },
        u = { percentageChange: 'Click to show $ change.', rawChange: 'Click to show % change.' };
      t.Z = (0, o.memo)((e) => {
        let { formattedData: t } = e,
          [n, s] = (0, o.useState)(!0),
          {
            percentageChange: d,
            rawChange: c,
            hasChange: v,
          } = (0, o.useMemo)(() => l(null != t ? t : []), [t]),
          p = (0, o.useMemo)(
            () =>
              n
                ? i.$0l.percent.default('-').digits(2).unit('%').sign().trailingZero(!1).of(d)
                : i.$0l.short.unit('$').sign().digits(2).readable().of(c),
            [n, d, c]
          );
        return v && t
          ? (0, r.tZ)(i.ua7, {
              content: u[n ? 'percentageChange' : 'rawChange'],
              children: (0, r.tZ)(i.Vp9, {
                className: a.DashboardClass.PREVENT_DASHBOARD_CARD_HOVER_CLASS,
                variant: 'pnl',
                label: p,
                onClick: () => s((e) => !e),
              }),
            })
          : null;
      });
    },
    53644: function (e, t, n) {
      n.d(t, {
        r: function () {
          return s;
        },
      });
      var r = n(78286),
        o = n(58258),
        i = n(40252),
        a = n(54655),
        l = n(89991);
      let u = (0, n(38819).Z)(a.xvT.Body.XXS.Regular, { target: 'e1sp0bs60' })('text-align:end;'),
        s = (0, o.memo)((e) => {
          var t, n;
          let { tokenAddress: o } = e,
            { targetChainId: a } = (0, l.Z_)();
          return (
            null === (t = i.permissionedCoinbaseTokens[a]) || void 0 === t ? void 0 : t.has(o)
          )
            ? (0, r.tZ)(v, {})
            : (null === (n = i.permissionedBackedTokens[a]) || void 0 === n ? void 0 : n.has(o))
              ? (0, r.tZ)(c, {})
              : (0, r.tZ)(d, {});
        }),
        d = () =>
          (0, r.tZ)(u, { color: 'constant.color.error', children: 'Authorization required.' }),
        c = () =>
          (0, r.BX)(u, {
            color: 'constant.color.error',
            children: [
              'Backed authorization required.',
              ' ',
              (0, r.tZ)(a.dLw, {
                href: 'https://assets.backed.fi/onboarding',
                underlined: !0,
                children: 'Learn more here →',
              }),
            ],
          }),
        v = () =>
          (0, r.BX)(u, {
            color: 'constant.color.error',
            children: [
              'Coinbase attestation required.',
              ' ',
              (0, r.tZ)(a.dLw, {
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
        i = n(15328),
        a = n(54655),
        l = n(38819);
      let u = '125px',
        s = (0, l.Z)('div', { target: 'ebvbqmv0' })('position:relative;width:100%;height:', u, ';'),
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
        f = (0, l.Z)('img', { target: 'ebvbqmv5' })('width:100%;height:', u, ';object-fit:cover;');
      var h = (0, o.memo)((e) => {
        let {
            children: t,
            featureKey: n,
            videoUrl: l,
            fallbackImageUrl: u,
            title: h,
            description: m,
            autoplay: g = !0,
            enabled: b = !0,
            side: y = 'top',
            align: w = 'center',
          } = e,
          [k, C] = (0, i._)('morpho.'.concat(n, '-callout'), !1),
          [Z, T] = (0, o.useState)(!0),
          [x, S] = (0, o.useState)(!1),
          z = (0, o.useCallback)(() => {
            C(!0);
          }, [C]),
          A = b && !k;
        return A
          ? (0, r.BX)(a.J2e.Root, {
              open: !0,
              children: [
                (0, r.tZ)(a.J2e.Anchor, {
                  children: (0, r.BX)(p, {
                    children: [
                      (0, r.tZ)(c, { 'aria-hidden': 'true' }),
                      (0, r.tZ)(v, { children: t({ visible: A, markAsSeen: z }) }),
                    ],
                  }),
                }),
                (0, r.tZ)(a.J2e.Portal, {
                  children: (0, r.BX)(a.J2e.Content, {
                    style: { border: 'none', padding: 0, outline: 'none', maxWidth: 300 },
                    collisionPadding: 12,
                    zIndex: 'mid',
                    onClick: (e) => e.stopPropagation(),
                    role: 'dialog',
                    'aria-labelledby': ''.concat(n, '-title'),
                    side: y,
                    align: w,
                    children: [
                      (0, r.BX)(s, {
                        children: [
                          Z &&
                            !x &&
                            (0, r.tZ)(a.OdW, { borderRadius: 0, width: '100%', height: '125px' }),
                          x
                            ? (0, r.tZ)(f, {
                                src: u,
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
                                $isLoading: Z,
                                onLoadedData: () => T(!1),
                                onError: () => {
                                  S(!0), T(!1);
                                },
                                'aria-hidden': 'true',
                              }),
                          (0, r.tZ)(a.zxk, {
                            style: { position: 'absolute', top: 10, right: 10 },
                            onClick: z,
                            size: 'small',
                            variant: 'ghost',
                            iconAlone: 'ClosePlain20',
                          }),
                        ],
                      }),
                      (0, r.BX)(a.Kqy, {
                        padding: 's',
                        direction: 'column',
                        gap: 'xs',
                        children: [
                          (0, r.tZ)(a.xvT.Body.XS.Regular, {
                            id: ''.concat(n, '-title'),
                            color: 'text.body',
                            children: h,
                          }),
                          (0, r.tZ)(a.Kqy, {
                            direction: 'column',
                            gap: 'xs',
                            children: m.map((e, t) =>
                              (0, r.tZ)(
                                a.xvT.Body.XS.Regular,
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
        i = n(54655),
        a = n(50825),
        l = n(38819),
        u = n(16690);
      let s = (0, l.Z)('div', { target: 'eikqm6p0' })(
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
        c = (0, l.Z)(i.Kqy, { target: 'eikqm6p2' })(
          'position:absolute;top:0px;right:0px;background-color:',
          (e) => {
            let { theme: t } = e;
            return t.colors.icon.brand;
          },
          ';width:14px;height:14px;border-radius:50%;display:flex;justify-content:center;align-items:center;text-align:center;',
          (0, u.animationCubicBezier)(u.popUpScale, '300ms'),
          ';& >:first-of-type{transform:translate(0.2px,0.4px);font-size:8px;}',
          (e) => {
            let { theme: t } = e;
            return t.breakpoints.down('s');
          },
          '{top:-5px !important;right:-5px !important;}'
        ),
        v = (0, l.Z)(i.ZT$, { target: 'eikqm6p3' })(
          'transform:translate(0.2px,0.5px);font-size:8px;'
        ),
        p = (0, o.forwardRef)(function (e, t) {
          let {
            options: n,
            id: o,
            value: l,
            noPadding: u = !1,
            noGap: p = !1,
            disabled: f = !1,
            variant: h = 'primary',
            backgroundVariant: m = 'primary',
            size: g = 'small',
            className: b,
            onChange: y,
            ...w
          } = e;
          return (0, r.tZ)(s, {
            noPadding: u,
            noGap: p,
            backgroundVariant: m,
            ref: t,
            className: b,
            ...w,
            children: n.map((e) =>
              (0, r.tZ)(
                i.ua7,
                {
                  disabled: !e.tooltip,
                  content: e.tooltip,
                  offset: u ? 4 : 9,
                  children: (0, r.BX)(d, {
                    children: [
                      e.href
                        ? (0, r.tZ)(a.Z, {
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
                        : (0, r.tZ)(i.zxk, {
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
                              TextVariant: i.xvT.Body.XXXS.Regular,
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
          return a;
        },
      });
      var r = n(78286);
      n(58258);
      var o = n(35047);
      let i = (e, t) => {
        if (e && t)
          for (let n in t)
            Array.isArray(e[n])
              ? (e[n] = e[n].map((e) => i(e, t[n])))
              : 'object' == typeof t[n]
                ? (e[n] = i(e[n], t[n]))
                : (0, o.isDefined)(e[n]) && (e[n] = BigInt(e[n]));
        return e;
      };
      var a = (e) => (t) => {
        let { queryResult: n, queryBigIntFieldMap: a } = t;
        if (
          (void 0 === n &&
            console.warn('withQueryResultConverter: queryResult is not provided to the component.'),
          (0, o.isDefined)(a) ||
            console.warn(
              'withQueryResultConverter: queryBigIntFieldMap is not provided. BigInt conversion will not be applied.'
            ),
          (0, o.isDefined)(n) && (0, o.isDefined)(a))
        ) {
          let o = i(n.data, a);
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
          return s;
        },
      });
      var r,
        o,
        i = n(78286),
        a = n(58258),
        l = n(54655);
      let u = (0, a.createContext)(null);
      ((r = o || (o = {})).PREVENT_DASHBOARD_CARD_HOVER_CLASS = 'prevent-dashboard-card-hover'),
        (r.DASHBOARD_CARD_BUTTON_EXPAND_CLASS = 'dashboard-card-button-expand');
      let s = () => {
          let e = (0, a.useContext)(u);
          if (!e)
            throw Error('useDashboardContext must be called inside a DashboardContextProvider');
          return e;
        },
        d = (e) => {
          let { isSmallDashboard: t } = e,
            [n, r] = (0, a.useState)(!1),
            [o, i] = (0, a.useState)(!1),
            l = (0, a.useCallback)(() => {
              r((e) => !e);
            }, []),
            u = (0, a.useCallback)(
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
            (0, a.useEffect)(() => {
              t && r(!1);
            }, [t, r]),
            {
              isDashboardExpanded: n,
              isDashboardHovered: o,
              toggleDashboard: l,
              setIsDashboardHovered: i,
              onClickToggleDashboard: u,
            }
          );
        };
      t.ZP = (0, a.memo)((e) => {
        let { children: t } = e,
          n = (0, l.CPt)(),
          [r, o] = (0, a.useState)('loan'),
          s = d({ isSmallDashboard: n }),
          c = (0, a.useMemo)(
            () => ({
              isSmallDashboard: n,
              borrowDashboardMode: r,
              setBorrowDashboardMode: o,
              ...s,
            }),
            [n, s, r, o]
          );
        return (0, i.tZ)(u.Provider, { value: c, children: t });
      });
    },
    34896: function (e, t, n) {
      n.d(t, {
        H: function () {
          return i;
        },
      });
      var r = n(45842),
        o = n(82803);
      let i = (e) => {
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
        i = n(40252),
        a = n(35047),
        l = n(51196),
        u = n(89991),
        s = n(34896),
        d = n(57054);
      let c = i.MathLib.MAX_UINT_160,
        v = function (e, t, n) {
          var v;
          let p = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            { account: f } = (0, u.Z_)(),
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
                      (0, a.keys)(e.tokens).forEach((t) => {
                        var n, r, a, l;
                        let u =
                          null !==
                            (l = (r =
                              null !== (a = (n = e.holdings)[h]) && void 0 !== a ? a : (n[h] = {}))[
                              t
                            ]) && void 0 !== l
                            ? l
                            : (r[t] = new i.Holding({
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
                        (u.canTransfer = !0), (u.balance += c);
                      }),
                        (0, a.keys)(e.markets).forEach((t) => {
                          var n, r, o, a;
                          (null !==
                            (a = (r =
                              null !== (o = (n = e.positions)[h]) && void 0 !== o
                                ? o
                                : (n[h] = {}))[t]) &&
                            void 0 !== a) ||
                            (r[t] = new i.Position({
                              user: h,
                              marketId: t,
                              supplyShares: 0n,
                              borrowShares: 0n,
                              collateral: 0n,
                            }));
                        }),
                        (null !== (n = (t = e.users)[h]) && void 0 !== n) ||
                          (t[h] = new i.User({
                            address: h,
                            isBundlerAuthorized: !1,
                            morphoNonce: 0n,
                          }));
                    })
                  : e,
              [e, p, h]
            ),
            g = (0, r.useMemo)(() => ((0, s.H)(t) ? [t] : []), [t]),
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
                              (0, a.values)(
                                null !== (r = n.holdings[h]) && void 0 !== r ? r : {}
                              ).forEach((r) => {
                                if (!r) return;
                                let l = n.getBundleAssetBalances(
                                    h,
                                    r.token,
                                    i.DEFAULT_SLIPPAGE_TOLERANCE
                                  ),
                                  u = r.balance - c,
                                  { virtualFinalBalance: s, virtualDealtBalance: d } = (0,
                                  a.values)(null == l ? void 0 : l.allocations)
                                    .filter(a.isDefined)
                                    .reduce(
                                      (e, n) => {
                                        var r;
                                        let { type: o, srcAmount: i, dstAmount: a } = n;
                                        return (
                                          !(a > 0n) ||
                                            (null === (r = t.options.disabledPeripheralTokens) ||
                                            void 0 === r
                                              ? void 0
                                              : r.has(o)) ||
                                            ((e.virtualFinalBalance += a),
                                            (e.virtualDealtBalance += (c * a) / i)),
                                          e
                                        );
                                      },
                                      { virtualFinalBalance: 0n, virtualDealtBalance: 0n }
                                    ),
                                  v = n.tryGetToken(r.token);
                                s < d &&
                                  v &&
                                  (!e || (null == v ? void 0 : v.address) === i.NATIVE_ADDRESS) &&
                                  (e = new i.Token(v)),
                                  (o[r.token] = new i.Holding({
                                    ...r,
                                    balance: i.MathLib.max(0n, u),
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
        i = n(16035);
      let a = i.z.object({
          columnVisibility: i.z.record(i.z.boolean()),
          sorting: i.z.array(i.z.object({ id: i.z.string(), desc: i.z.boolean() })),
          columnFilters: i.z.array(
            i.z.object({
              id: i.z.string(),
              value: i.z
                .unknown()
                .refine((e) => void 0 !== e, { message: 'Value must not be undefined' }),
            })
          ),
          version: i.z.number(),
        }),
        l = (e, t) => {
          let n = a.safeParse(e);
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
        u = (e) => {
          let { pageKey: t, tableSettingsObjectKey: n, defaultTableSettings: r } = e;
          try {
            var i;
            let e = (0, o.e)();
            if (!e) return r;
            let a = null === (i = e[t]) || void 0 === i ? void 0 : i[n],
              u = l(a, r);
            if (u) return u;
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
        s = (e) => {
          let {
            pageKey: t,
            tableSettingsObjectKey: n,
            defaultTableSettings: r,
            key: i,
            valueToStore: a,
          } = e;
          try {
            let e = {
              ...u({ pageKey: t, tableSettingsObjectKey: n, defaultTableSettings: r }),
              [i]: a,
            };
            (0, o.K)([t, n], e);
          } catch (e) {
            console.warn(
              'Failed to set TableSettings: '
                .concat(e, ' - Settings: \n       ')
                .concat(
                  JSON.stringify({ pageKey: t, tableSettingsObjectKey: n, key: i, valueToStore: a })
                )
            );
          }
        };
      var d = (e) => {
        let { pageKey: t, tableSettingsObjectKey: n, defaultTableSettings: o } = e,
          [i, a] = (0, r.useState)(() =>
            u({ pageKey: t, tableSettingsObjectKey: n, defaultTableSettings: o })
          ),
          l = (0, r.useCallback)(
            (e, r) => {
              a((i) => {
                let a = r instanceof Function ? r(i[e]) : r;
                return (
                  s({
                    pageKey: t,
                    tableSettingsObjectKey: n,
                    defaultTableSettings: o,
                    key: e,
                    valueToStore: a,
                  }),
                  { ...i, [e]: a }
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
          columnVisibility: i.columnVisibility,
          columnFilters: i.columnFilters,
          sorting: i.sorting,
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
          return s;
        },
        ub: function () {
          return a;
        },
      });
      var r,
        o,
        i = n(16035);
      let a = 'morpho.userSettings',
        l = 1;
      ((r = o || (o = {})).Root = 'root'),
        (r.Earn = 'earn'),
        (r.Borrow = 'borrow'),
        (r.Explore = 'explore'),
        (r.Vault = 'vault'),
        (r.Market = 'market');
      let u = i.z.object({
          version: i.z.coerce
            .number()
            .refine((e) => e === l, { message: 'Version must be exactly '.concat(l) }),
          root: i.z.record(i.z.unknown()).optional(),
          earn: i.z.record(i.z.unknown()).optional(),
          borrow: i.z.record(i.z.unknown()).optional(),
          explore: i.z.record(i.z.unknown()).optional(),
          vault: i.z.record(i.z.unknown()).optional(),
          market: i.z.record(i.z.unknown()).optional(),
        }),
        s = (e) => {
          try {
            let t = JSON.parse(e),
              n = u.safeParse(t);
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
          return s;
        },
        e: function () {
          return u;
        },
      });
      var r = n(71938),
        o = n(75833),
        i = n(35047),
        a = n(55135);
      let l = { version: a.Mh },
        u = () => {
          let e = (0, r.getCookie)(a.ub),
            t = (0, a.qk)(e);
          return (0, i.isDefined)(e) && !(0, i.isDefined)(t) && (0, r.deleteCookie)(a.ub), t;
        },
        s = (e, t) => {
          let n = u() || l,
            i = (0, o.Z)(n, e, t);
          (0, r.setCookie)(a.ub, JSON.stringify(i));
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
          i = (0, r.isFetched)(n) ? n + 1 : n;
        return o && i === o ? t % e : e;
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
          return s;
        },
        Vl: function () {
          return u;
        },
      });
      var r,
        o,
        i = n(56489),
        a = n(17965),
        l = n(35047);
      function u(e) {
        return (0, i.Z)(e, { unit: 'mo', duration: 3 })
          ? 'quarterlyNetApy'
          : 'mo' === e
            ? 'monthlyNetApy'
            : 'w' === e
              ? 'weeklyNetApy'
              : 'allTimeNetApy';
      }
      function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return Math.floor(Number(l.Time.timestamp()) / 60) * e;
      }
      function d(e) {
        let { timeFrame: t, now: n } = e;
        return {
          startTimestamp: t ? n - l.Time.s.fromPeriod(t) : 0,
          endTimestamp: n,
          interval: 'w' === t ? a.TimeseriesInterval.Hour : a.TimeseriesInterval.Day,
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
      t.Z = (e, t, n, i, a, l, u, s, d, c, v) =>
        (0, r.useMemo)(
          () =>
            v
              ? ''.concat((0, o.Z)(e), ' disabled')
              : t
                ? 'Enter an amount'
                : c
                  ? 'Wrong network'
                  : !n && i
                    ? 'Editing'
                    : s && d
                      ? 'Could not fetch block'
                      : a ||
                        (u
                          ? u.message
                          : 0 !== l.length && (1 !== l.length || n)
                            ? 'Finalize bundle'
                            : 'Review '.concat(e)),
          [t, i, d, n, l.length, s, u, a, c, e, v]
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
        i = n(95413);
      let a = (e, t, n) => {
        let i = (0, o.Z)(n, e),
          a = (0, r.useRef)(null !== t && i);
        return a.current && !i && (a.current = !1), a.current;
      };
      function l(e) {
        let {
            queryDocument: t,
            queryVariables: n,
            serverQueryVariables: r,
            serverQueryResult: o,
            skipClientQuery: l,
          } = e,
          u = a(r, o, n),
          s = (0, i.aM)(t, { variables: n, skip: null != l ? l : u });
        return u ? Object.assign(s, o) : s;
      }
    },
    68866: function (e, t, n) {
      var r = n(58258),
        o = n(35047);
      t.Z = (e) => {
        let { pageInfo: t, filters: n, first: i, error: a } = e,
          [l, u] = (0, r.useState)(),
          s = (0, r.useMemo)(() => {
            if (!n) return;
            let { sorting: e, ...t } = n;
            return JSON.stringify(t);
          }, [n]),
          d = (0, r.useRef)(s);
        (0, r.useEffect)(() => {
          if (a) {
            u(void 0);
            return;
          }
          d.current !== s && (u(void 0), (d.current = s)),
            (0, o.isDefined)(null == t ? void 0 : t.countTotal) && u(t.countTotal);
        }, [s, t, a]);
        let c = (0, r.useMemo)(() => {
          if (void 0 !== i) return l ? Math.ceil(l / i) : l;
        }, [l, i]);
        return { totalItemsCount: l, pageCount: c };
      };
    },
    57892: function (e, t, n) {
      n.d(t, {
        Fj: function () {
          return d;
        },
        yM: function () {
          return a;
        },
      });
      var r = n(35047);
      let o = (e) => {
        let t,
          { simulationError: n, data: r, error: o, blockError: i, fetchError: a } = e;
        return n ? (t = n) : !r && o ? (t = o) : i ? (t = i) : a && (t = a), t;
      };
      var i = n(4205);
      let a = (e, t) => {
        var n, r, a, l;
        let {
          data: u,
          error: s,
          blockError: d,
          simulationError: c,
          isFetching: v,
          isPending: p,
        } = (0, i.f)(t);
        if (null == e || p) return { data: void 0, error: void 0, isFetching: !1, isPending: !0 };
        let f =
          null == u
            ? void 0
            : null === (n = u.tryGetMarket(e)) || void 0 === n
              ? void 0
              : n.accrueInterest(u.block.timestamp);
        return {
          data: f,
          error: o({
            simulationError: c,
            data: f,
            error: null == s ? void 0 : null === (r = s.markets) || void 0 === r ? void 0 : r[e],
            blockError: d,
          }),
          isFetching:
            null !==
              (l =
                !f &&
                (null == v ? void 0 : null === (a = v.markets) || void 0 === a ? void 0 : a[e])) &&
            void 0 !== l &&
            l,
          isPending: p,
        };
      };
      var l = n(58258),
        u = n(40252),
        s = n(12556);
      let d = (e, t) => {
        var n, a, d;
        let {
            data: c,
            error: v,
            blockError: p,
            simulationError: f,
            isFetching: h,
            isPending: m,
          } = (0, i.f)(t),
          g = null != e ? (null == c ? void 0 : c.tryGetVault(e)) : void 0,
          { accrualVault: b } = (0, s.HN)(
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
                position: new u.AccrualPosition(n[o], t[o]),
              }));
              return {
                markets: t,
                positions: n,
                marketConfigs: r,
                accrualVault: new u.AccrualVault(g, o),
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
                      : null === (a = h.vaults) || void 0 === a
                        ? void 0
                        : a[e])) &&
                void 0 !== d &&
                d,
              isPending: m,
            };
      };
    },
  },
]);
